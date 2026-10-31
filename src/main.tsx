import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './carousel.css';

const IMAGES = [
 {src:'assets/arham-avatar.webp',bg:'#F4845F',panel:'#F79B7F'},
 {src:'assets/arham-avatar.webp',bg:'#6BBF7A',panel:'#85CC92'},
 {src:'assets/arham-avatar.webp',bg:'#E882B4',panel:'#ED9DC4'},
 {src:'assets/arham-avatar.webp',bg:'#6EB5FF',panel:'#8DC4FF'},
];
const STORIES=[
 {ghost:'DATA',title:'Investigate the detail.',body:'SQL, validation and enterprise reporting. Start with the evidence behind my Hitachi experience.',href:'#journey',cta:'THE EXPERIENCE'},
 {ghost:'BUILD',title:'Make the work tangible.',body:'Explore five projects, working demonstrations and the methods behind each one.',href:'#projects',cta:'THE PROJECTS'},
 {ghost:'XAI',title:'Explain the prediction.',body:'Co-authored DCU research connecting XGBoost forecasts, SHAP explanations and energy scheduling.',href:'#dcu',cta:'THE RESEARCH'},
 {ghost:'NEXT',title:'Start a conversation.',body:'Based in Dublin. Open to BI, data analytics, reporting and application-support opportunities.',href:'#contact',cta:'LET’S TALK'},
];
const ease='650ms cubic-bezier(0.4,0,0.2,1)';
export function ToonhubCarousel(){
 const [activeIndex,setActiveIndex]=useState(0);
 const [isAnimating,setIsAnimating]=useState(false);
 const [isMobile,setIsMobile]=useState(()=>window.innerWidth<640);
 const lock=useRef(false), timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const [failed,setFailed]=useState<number[]>([]);
 useEffect(()=>{
  const img=new Image();img.src=IMAGES[0].src;
  const resize=()=>setIsMobile(window.innerWidth<640);
  window.addEventListener('resize',resize);
  return()=>{window.removeEventListener('resize',resize);if(timer.current)clearTimeout(timer.current);};
 },[]);
 const navigate=(direction:'next'|'prev')=>{
  if(lock.current)return;
  lock.current=true;setIsAnimating(true);
  setActiveIndex(i=>(i+(direction==='next'?1:3))%4);
  timer.current=setTimeout(()=>{lock.current=false;setIsAnimating(false);},650);
 };
 const story=STORIES[activeIndex];
 return <section className="toonhub relative w-full overflow-hidden" style={{backgroundColor:IMAGES[activeIndex].bg,transition:`background-color ${ease}`,fontFamily:'Inter, sans-serif'}} aria-label="Interactive portfolio introduction" aria-roledescription="carousel" onKeyDown={e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();navigate(e.key==='ArrowLeft'?'prev':'next');}}}>
  <div className="toon-grain absolute inset-0 pointer-events-none" aria-hidden="true"/>
  <div className="toon-brand absolute">ARHAM / FOUR CHAPTERS <span>DUBLIN, IRELAND</span></div>
  <span className="avatar-note">Illustrated avatar · Based on Arham</span>
  <div className="toon-ghost pointer-events-none select-none" aria-hidden="true">{story.ghost}</div>
  <div className="absolute inset-0 toon-characters" aria-hidden="true">
   {IMAGES.map((image,i)=>{
    const role=i===activeIndex?'center':i===(activeIndex+3)%4?'left':i===(activeIndex+1)%4?'right':'back';
    const center=role==='center',back=role==='back';
    return <div key={i} className={`toon-character toon-${role}`} style={{position:'absolute',aspectRatio:'0.6 / 1',left:center||back?'50%':role==='left'?(isMobile?'17%':'19%'):(isMobile?'83%':'81%'),height:center?'84%':back?'25%':'35%',bottom:center?'0':'7%',transform:`translateX(-50%) scale(${center?1.18:1})`,filter:center?'none':`blur(${back?4:2}px)`,opacity:center||back?1:.85,zIndex:center?20:back?5:10,transition:`transform ${ease},filter ${ease},opacity ${ease},left ${ease},height ${ease},bottom ${ease}`,willChange:'transform, filter, opacity'}}>
     {!failed.includes(i)?<img src={image.src} alt="" draggable={false} onError={()=>setFailed(f=>f.includes(i)?f:[...f,i])}/>:<div className="toon-image-fallback">{STORIES[i].ghost}</div>}
    </div>;
   })}
  </div>
  <div className="toon-bottom absolute" style={{backgroundColor:IMAGES[activeIndex].panel,transition:`background-color ${ease}`}}>
   <div className="toon-caption" aria-live="polite" aria-atomic="true"><span className="toon-count">0{activeIndex+1} / 04</span><h2>{story.title}</h2><p>{story.body}</p></div>
   <div className="toon-controls flex items-center">
    <button type="button" aria-label="Previous portfolio story" aria-disabled={isAnimating} onClick={()=>navigate('prev')}><ArrowLeft size={26} strokeWidth={2.25}/></button>
    <button type="button" aria-label="Next portfolio story" aria-disabled={isAnimating} onClick={()=>navigate('next')}><ArrowRight size={26} strokeWidth={2.25}/></button>
    <a href={story.href}>{story.cta}<ArrowRight size={22} strokeWidth={2.25}/></a>
   </div>
  </div>
 </section>;
}
const mount=document.getElementById('hero-carousel');
if(mount)createRoot(mount).render(<ToonhubCarousel/>);
