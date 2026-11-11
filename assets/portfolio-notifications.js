/* Privacy-limited, client-reported portfolio activity. No personal data or browsing identifiers. */
(function () {
  'use strict';
  const endpoint = 'https://arham-portfolio-notifications.onrender.com/event';
  const sent = new Set();
  function notify(event, once) {
    if (once && sent.has(event)) return;
    if (once) sent.add(event);
    try {
      fetch(endpoint, {method:'POST', mode:'cors', headers:{'Content-Type':'application/json'}, body:JSON.stringify({event}), keepalive:true}).catch(function(){});
    } catch (_) {}
  }
  window.addEventListener('load', function () { setTimeout(function(){notify('page_view',true);},3000); });
  document.addEventListener('click', function(e) {
    const el=e.target.closest('a,button');
    if(!el) return;
    const href=(el.getAttribute('href')||'').toLowerCase();
    const label=(el.textContent||'').trim().toLowerCase();
    if(href.includes('.pdf') && el.hasAttribute('download')) notify('cv_download',false);
    else if(href.includes('.pdf') || label.includes('view cv')) notify('cv_view',false);
    else if(href.includes('#recognition') || el.id==='recognition-next' || el.id==='recognition-prev') notify('recognition_open',true);
    else if(el.closest('[data-project]') || el.closest('.project-card') || el.closest('#project-dialog')) notify('project_open',false);
    else if(el.closest('.intro-controls') || label.includes('play video')) notify('video_play',true);
  }, {passive:true});
})();