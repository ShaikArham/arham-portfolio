/* One meaningful activity summary per tab visit; no cookies or persistent identifiers. */
(function(){
'use strict';
const endpoint='https://arham-portfolio-notifications.onrender.com/event';
const session=Array.from(crypto.getRandomValues(new Uint8Array(6)),b=>b.toString(16).padStart(2,'0')).join('');
const events=[], seen=new Set();
let lastProject='';
const started=Date.now();
let lastSection='top', timer, sending=false, delivered=false;
const clean=s=>String(s||'').replace(/[^a-zA-Z0-9 _.,:/#()&+\\-]/g,' ').trim().slice(0,75);
function record(type,detail){
  if(delivered)return;
  const item={type:clean(type),detail:clean(detail),section:clean(lastSection),seconds:Math.round((Date.now()-started)/1000)};
  const key=item.type+':'+item.detail;
  if(item.type==='project_interaction'||item.type==='certificate_interaction'){
    // A click is an action, so keep repeated intentional clicks.
  } else if(seen.has(key))return;
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
function projectName(el){
  const card=el.closest('[data-project],.project-card,.project-tile,article');
  const heading=card?.querySelector('h2,h3,h4');
  return clean(heading?.textContent||el.getAttribute('data-project')||el.textContent||'Project');
}
document.addEventListener('click',e=>{
  const el=e.target.closest('a,button');
  if(!el)return;
  const href=el.getAttribute('href')||'';
  const label=clean(el.getAttribute('aria-label')||el.textContent||'');
  const section=el.closest('section[id]')?.id||lastSection;
  lastSection=section;
  if(href.toLowerCase().includes('.pdf')){record('cv_view','View CV clicked');return;}
  if(href.includes('linkedin.com')){record('linkedin_click','LinkedIn profile');return;}
  if(href.startsWith('mailto:')){record('contact_click','Email link');return;}
  if(el.id==='recognition-next'||el.id==='recognition-prev'){
    const rail=document.getElementById('recognition-carousel');
    const slides=Array.from(rail?.children||[]);
    const current=slides.reduce((best,slide,i)=>Math.abs(slide.getBoundingClientRect().left-rail.getBoundingClientRect().left)<Math.abs(slides[best].getBoundingClientRect().left-rail.getBoundingClientRect().left)?i:best,0);
    const next=(current+(el.id==='recognition-next'?1:-1)+slides.length)%slides.length;
    const name=clean(slides[next]?.querySelector('h3')?.textContent||'Recognition');
    record('certificate_interaction','Selected '+name);return;
  }
  if(el.closest('#recognition')){record('certificate_interaction',label||'Certificate');return;}
  if(el.closest('#intro-dialog')||el.id.includes('intro')){record('video_interaction',label||'Introduction');return;}
  if(el.closest('#project-dialog')){record('project_interaction',(lastProject||'Project')+' - '+label);return;}
  if(el.closest('[data-project],.project-card,.project-tile')||el.matches('[data-project]')){
    lastProject=projectName(el);record('project_interaction','Opened '+lastProject);return;
  }
  if(/^https?:/.test(href)&&!href.includes(location.host)){
    record('external_link',label||href.slice(0,65));return;
  }
},{passive:true});
const dialog=document.getElementById('project-dialog');
if(dialog&&'MutationObserver' in window)new MutationObserver(()=>{
  if(dialog.open){
    const title=clean(dialog.querySelector('#project-title,h2,h3')?.textContent||'Project details');
    if(title&&title!=='Project details'){lastProject=title;record('project_interaction','Viewed '+title);}
  }
}).observe(dialog,{attributes:true,attributeFilter:['open']});
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