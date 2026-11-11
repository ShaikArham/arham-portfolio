/* Client-reported, anonymous portfolio interaction notifications. No cookies or persistent IDs. */
(function () {
  'use strict';
  const endpoint='https://arham-portfolio-notifications.onrender.com/event';
  const session=Array.from(crypto.getRandomValues(new Uint8Array(6)),b=>b.toString(16).padStart(2,'0')).join('');
  const sent=new Set();
  const activity=[];
  let quietTimer=null;
  let firstActivity=0;
  let flushing=false;
  const clean=s=>String(s||'').replace(/[^a-zA-Z0-9 _.,:/#()&+\-]/g,' ').trim().slice(0,90);
  const section=()=>document.querySelector('section[id]:target')?.id||currentSection||'top';
  let currentSection='top';
  function flush(){
    if(!activity.length||flushing)return;
    flushing=true;
    clearTimeout(quietTimer);
    const batch=activity.splice(0,30);
    const summary=batch.map((a,i)=>String(i+1)+'. '+a.time+' '+a.event+' '+a.detail+' (section: '+a.section+')').join('\\n').slice(0,1700);
    try{
      fetch(endpoint,{method:'POST',mode:'cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({event:'session_summary',detail:summary,section:clean(section()),session}),keepalive:true})
        .catch(()=>{}).finally(()=>{flushing=false;if(activity.length)schedule();});
    }catch(_){flushing=false;}
    firstActivity=0;
  }
  function schedule(){
    clearTimeout(quietTimer);
    if(!firstActivity)firstActivity=Date.now();
    if(Date.now()-firstActivity>=90000){flush();return;}
    quietTimer=setTimeout(flush,25000);
  }
  function notify(event,detail='',once=false){
    const key=event+'|'+detail;
    if(once&&sent.has(key))return;
    if(once)sent.add(key);
    activity.push({time:new Date().toLocaleTimeString('en-IE',{timeZone:'Europe/Dublin',hour12:false}),event:clean(event),detail:clean(detail),section:clean(section())});
    schedule();
  }
  window.addEventListener('load',()=>setTimeout(()=>notify('page_view',location.pathname,true),3000));
  const observed=new Set();
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting&&entry.intersectionRatio>=.45){
          const id=entry.target.id;
          currentSection=id;
          if(!observed.has(id)){observed.add(id);notify('section_view',id,true);}
        }
      });
    },{threshold:.45});
    document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
  }
  document.addEventListener('click',e=>{
    const el=e.target.closest('a,button');
    if(!el)return;
    const href=el.getAttribute('href')||'';
    const label=clean(el.getAttribute('aria-label')||el.textContent||'');
    if(href.toLowerCase().includes('.pdf')){notify('cv_view','CV PDF opened');return;}
    if(href.includes('linkedin.com')){notify('linkedin_click','LinkedIn profile');return;}
    if(href.startsWith('mailto:')){notify('contact_click','Email link');return;}
    if(el.closest('#recognition')||href==='#recognition'){
      if(label.includes('3B')||label.includes('Monitor'))notify('certificate_view',label);
      else notify('recognition_open',label||'Recognition',true);
    }
    if(el.closest('#intro-dialog')||el.id.includes('intro')||label.toLowerCase().includes('watch intro'))notify('video_chapter',label||'Introduction');
    if(el.closest('#project-dialog')||el.closest('[data-project]')||el.closest('.project-card'))notify('project_open',label||'Project details');
    else if(/^https?:/.test(href)&&!href.includes(location.host))notify('external_project_click',label||'External link');
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')flush();});
  window.addEventListener('pagehide',flush);
  const form=document.getElementById('contact-form');
  if(form)form.addEventListener('submit',()=>notify('contact_form_submit','Contact form submitted'));
  const dialog=document.getElementById('intro-dialog');
  if(dialog&&'MutationObserver' in window)new MutationObserver(()=>{if(dialog.open)notify('video_open','Introduction dialog opened');}).observe(dialog,{attributes:true,attributeFilter:['open']});
})();