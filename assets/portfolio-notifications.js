/* One meaningful activity summary per tab visit; no cookies or persistent identifiers. */
(function(){
'use strict';
const endpoint='https://arham-portfolio-notifications.onrender.com/event';
const session=Array.from(crypto.getRandomValues(new Uint8Array(6)),b=>b.toString(16).padStart(2,'0')).join('');
const events=[], seen=new Set();
const started=Date.now();
let lastSection='top', timer, sending=false, delivered=false;
const clean=s=>String(s||'').replace(/[^a-zA-Z0-9 _.,:/#()&+\\-]/g,' ').trim().slice(0,75);
function record(type,detail){
  if(delivered)return;
  const item={type:clean(type),detail:clean(detail),section:clean(lastSection),seconds:Math.round((Date.now()-started)/1000)};
  const key=item.type+':'+item.detail;
  if(seen.has(key))return;
  seen.add(key);events.push(item);
  clearTimeout(timer);
  // Only report meaningful interactions; scrolling by itself never generates email.
  if(events.length)timer=setTimeout(send,45000);
}
function send(){
  if(delivered||sending||!events.length)return;
  sending=true;
  const payload={event:'session_summary',session,section:clean(lastSection),events:events.slice(0,30),duration_seconds:Math.round((Date.now()-started)/1000),
    browser_info:{user_agent:navigator.userAgent.slice(0,300),mobile:!!(navigator.userAgentData?.mobile)}};
  fetch(endpoint,{method:'POST',mode:'cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),keepalive:true})
    .then(r=>{if(r.ok)delivered=true;}).catch(()=>{}).finally(()=>{sending=false;});
}
document.addEventListener('click',e=>{
  const el=e.target.closest('a,button');
  if(!el)return;
  const href=el.getAttribute('href')||'';
  const label=clean(el.getAttribute('aria-label')||el.textContent||'');
  if(href.toLowerCase().includes('.pdf'))record('cv_view','View CV clicked');
  else if(href.includes('linkedin.com'))record('linkedin_click','LinkedIn profile');
  else if(href.startsWith('mailto:'))record('contact_click','Email link');
  else if(el.closest('#recognition'))record('certificate_interaction',label||'Recognition carousel');
  else if(el.closest('#intro-dialog')||el.id.includes('intro'))record('video_interaction',label||'Intro video');
  else if(el.closest('#project-dialog')||el.closest('[data-project]')||el.closest('.project-card'))record('project_interaction',label||'Project');
  else if(/^https?:/.test(href)&&!href.includes(location.host))record('external_link',label||href.slice(0,65));
},{passive:true});
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries)if(entry.isIntersecting&&entry.intersectionRatio>=.5)lastSection=entry.target.id;
  },{threshold:.5});
  document.querySelectorAll('main section[id]').forEach(el=>observer.observe(el));
}
const form=document.getElementById('contact-form');
if(form)form.addEventListener('submit',()=>{record('contact_submit','Contact form submitted');send();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&events.length)send();});
window.addEventListener('pagehide',()=>{if(events.length)send();});
})();