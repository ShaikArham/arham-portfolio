'use strict';
(()=>{
 const canvas=document.getElementById('dublin-canvas');if(!canvas)return;
 const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)return;
 canvas.parentElement.classList.add('scene-ready');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let w=800,h=550,scale=28,yaw=-.65,pitch=.62,zoom=1,ty=-.65,tp=.62,tz=1,cx=0,cz=0,tx=0,ttz=0,drag=false,lastX=0,lastY=0,visible=false,raf=0,previous=0,clock=0;
 const views={spire:{yaw:-.65,pitch:.62,zoom:1,x:-1,z:-.6,label:'The Spire · A new perspective'},bridge:{yaw:-1.15,pitch:.48,zoom:1.25,x:1,z:0,label:'The Liffey · Connecting systems'},campus:{yaw:-.4,pitch:.75,zoom:1.45,x:5.3,z:-3.8,label:'DCU · Research into practice'}};
 let shapes=[];
 function project(p){const x=p[0]-cx,z=p[2]-cz,X=x*Math.cos(yaw)-z*Math.sin(yaw),Z=x*Math.sin(yaw)+z*Math.cos(yaw);return [w*.5+X*scale,h*.57-(p[1]*Math.cos(pitch)-Z*Math.sin(pitch))*scale,p[1]*Math.sin(pitch)+Z*Math.cos(pitch)];}
 function poly(points,color,stroke){const ps=points.map(project);shapes.push({depth:ps.reduce((s,p)=>s+p[2],0)/ps.length,ps,color,stroke});}
 function line(points,color,width=1){const ps=points.map(project);shapes.push({depth:ps.reduce((s,p)=>s+p[2],0)/ps.length+.02,ps,color,line:true,width});}
 function box(x,y,z,dx,dy,dz,c=['#d5d3be','#a8b1a0','#eef0db']){const a=[x,y,z],b=[x+dx,y,z],c1=[x+dx,y,z+dz],d=[x,y,z+dz],A=[x,y+dy,z],B=[x+dx,y+dy,z],C=[x+dx,y+dy,z+dz],D=[x,y+dy,z+dz];poly([a,b,B,A],c[0]);poly([b,c1,C,B],c[1]);poly([c1,d,D,C],c[1]);poly([d,a,A,D],c[0]);poly([A,B,C,D],c[2]);}
 function cylinder(x,z,r,height,color){for(let i=0;i<16;i++){const a=i*Math.PI/8,b=(i+1)*Math.PI/8;poly([[x+r*Math.cos(a),.15,z+r*Math.sin(a)],[x+r*Math.cos(b),.15,z+r*Math.sin(b)],[x,height,z]],i%3===0?'#f4f6e9':color);}}
 function label(p,text,color='#234e44'){const v=project(p);shapes.push({depth:v[2]+.2,label:text,pos:v,color});}
 function city(t){
  shapes=[];
  box(-11,-.55,-7,22,.5,14,['#c6cfbb','#a7b7a2','#dfe4cd']);
  poly([[-11,0,-1.3],[11,0,-1.3],[11,0,1.25],[-11,0,1.25]],'#6bafaa');
  for(let i=0;i<12;i++){const x=-10+i*1.9+(t*.12%1);line([[x,.01,-1],[x+.8,.01,-1],[x+1.3,.01,-.9]],'#c8eee05c',1);line([[x+.6,.02,.8],[x+1.6,.02,.8]],'#e0f9ee77',1);}
  // Quays, streets and the pedestrian crossing.
  box(-11,.04,-1.65,22,.12,.27,['#b2b9a6','#8d9e8d','#eee8cf']);box(-11,.04,1.3,22,.12,.27,['#b2b9a6','#8d9e8d','#eee8cf']);
  poly([[-5.5,.03,-7],[-3.5,.03,-7],[-3.5,.03,-1.7],[-5.5,.03,-1.7]],'#b2c1ad');
  poly([[-11,.04,2],[11,.04,2],[11,.04,2.6],[-11,.04,2.6]],'#b0c0ab');
  for(let i=0;i<6;i++)box(-5.2+i*.23,.06,-2.6,.12,.03,.55,['#f5ecd9','#f5ecd9','#f5ecd9']);
  const brick=['#be9f85','#957f6e','#dbc1a0'],stone=['#c8d0ba','#a2b39f','#e7e6ce'],glass=['#75a7a4','#467f7b','#a8d0be'];
  for(let i=0;i<10;i++){const x=-10+(i%5)*2.35,z=i<5?-5.6:3.1,height=1.1+((i*7)%5)*.35;box(x,.05,z,1.5,height,1.5,i%3===0?glass:brick);for(let j=0;j<3;j++){const yy=.5+j*.5;if(yy<height)line([[x+.12,yy,z-.01],[x+1.37,yy,z-.01]],'#f7e5ba',1.5);}}
  // GPO-inspired classical frontage beside the Spire.
  box(-7,.1,-3.8,2.1,1.35,1.25,stone);for(let i=0;i<6;i++)box(-6.9+i*.34,.12,-2.7,.13,1.4,.13,['#e8e4ca','#c5c9b5','#f5efda']);poly([[-7.05,1.58,-2.6],[-5.9,2.08,-2.6],[-4.75,1.58,-2.6]],'#eee5ce');
  cylinder(-4.4,-3.1,.21,7.3,'#b4c4bc');box(-4.75,.05,-3.45,.7,.08,.7,stone);
  // A harp-shaped bridge: drawn as a 3D deck, pylon and cable fan.
  box(1.8,.23,-2.1,.55,.18,4.35,['#eceddf','#d5e3d5','#fff8e6']);line([[1.96,.5,-2.1],[1.96,.5,2.25]],'#e6f3df',2);line([[2.3,.5,-2.1],[2.3,.5,2.25]],'#e6f3df',2);
  line([[2.05,.45,-1.9],[3.6,4.8,-.3]],'#fff9e8',5);
  for(let i=0;i<12;i++){const k=i/11;line([[3.6-k*.35,4.8-k*.9,-.3-k*.25],[2.1,.46,-1.6+k*3.5]],'#fff7dc',1.2);}
  // Docklands-inspired towers.
  for(let i=0;i<4;i++){const x=5+i*1.3,z=2.9,height=2.3+i*.55;box(x,.08,z,1,height,1.4,glass);for(let j=1;j<height/.42;j++)line([[x+.03,j*.42,z-.01],[x+.97,j*.42,z-.01]],'#c0dfce',1);}
  // A campus composition with a library, courtyard and learning spaces.
  box(4.8,.08,-6.5,5.1,.12,3.7,['#6e9b68','#6e9b68','#a3c18c']);box(5,.22,-6.2,2.6,1.6,.95,brick);box(8,.22,-6.2,1.5,1.15,2.7,stone);box(5,.22,-4.2,2.6,.9,.8,glass);box(5.5,1.85,-6.1,1.1,.15,.75,['#d2c0a0','#d2c0a0','#e8d4b4']);
  for(const [x,z] of [[-9,-2.1],[-7.8,2],[-2.8,-5.8],[4.5,-4.8],[9.5,-3.1],[3.7,3.2],[-8.4,5.6],[-1,5.6]]){box(x,.1,z,.08,.6,.08,['#877f5d','#877f5d','#877f5d']);cylinder(x+.04,z+.04,.38,1.6,'#4c8062');}
  const car=-8+(t*.3%15);box(car,.17,2.17,.65,.23,.24,['#d1ab4e','#9c7f35','#eed480']);
  const boat=-7+(t*.18%13);box(boat,.09,-.15,.7,.2,.32,['#f4ddbe','#ad8d67','#fff3d7']);
  label([-4.4,7.8,-3.1],'THE SPIRE');label([3.5,5.4,-.3],'THE LIFFEY');label([7.2,2.7,-5.8],'DCU');
 }
 function draw(){ctx.fillStyle='#edf0df';ctx.fillRect(0,0,w,h);const grad=ctx.createRadialGradient(w*.5,h*.4,20,w*.5,h*.5,w*.7);grad.addColorStop(0,'#fffdf1');grad.addColorStop(1,'#dbe6cc');ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);scale=Math.min(w/28,h/17)*zoom;city(clock);shapes.sort((a,b)=>a.depth-b.depth);for(const s of shapes){if(s.label){ctx.font='600 10px system-ui';ctx.textAlign='center';ctx.fillStyle=s.color;ctx.fillText(s.label,s.pos[0],s.pos[1]);continue;}ctx.beginPath();s.ps.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));if(s.line){ctx.strokeStyle=s.color;ctx.lineWidth=s.width;ctx.stroke();}else{ctx.closePath();ctx.fillStyle=s.color;ctx.fill();ctx.strokeStyle=s.stroke||'#335a3b10';ctx.lineWidth=.5;ctx.stroke();}}}
 function off(){return reduced.matches||document.body.classList.contains('motion-off');}
 function tick(now){raf=0;if(!visible||document.hidden)return;if(previous&&now-previous<32&&!off()){raf=requestAnimationFrame(tick);return;}const dt=Math.min(.05,(now-previous)/1000||.016);previous=now;const k=off()?1:Math.min(1,dt*6);yaw+=(ty-yaw)*k;pitch+=(tp-pitch)*k;zoom+=(tz-zoom)*k;cx+=(tx-cx)*k;cz+=(ttz-cz)*k;if(!off())clock+=dt;draw();if(!off())raf=requestAnimationFrame(tick);}
 function start(){if(!raf&&visible&&!document.hidden)raf=requestAnimationFrame(tick);}
 function resize(){const r=canvas.getBoundingClientRect();w=Math.max(1,r.width);h=Math.max(1,r.height);const dpr=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();start();}
 function view(id){const v=views[id];if(!v)return;ty=v.yaw;tp=v.pitch;tz=v.zoom;tx=v.x;ttz=v.z;document.querySelectorAll('[data-city-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.cityView===id)));document.getElementById('scene-status').textContent=v.label;start();}
 document.querySelectorAll('[data-city-view]').forEach(b=>b.addEventListener('click',()=>view(b.dataset.cityView)));
 document.getElementById('city-reset').addEventListener('click',()=>view('spire'));document.getElementById('city-zoom-in').addEventListener('click',()=>{tz=Math.min(2,tz+.15);start();});document.getElementById('city-zoom-out').addEventListener('click',()=>{tz=Math.max(.65,tz-.15);start();});
 canvas.addEventListener('pointerdown',e=>{drag=true;lastX=e.clientX;lastY=e.clientY;canvas.setPointerCapture(e.pointerId);});canvas.addEventListener('pointermove',e=>{if(!drag)return;ty+=(e.clientX-lastX)*.008;tp=Math.max(.3,Math.min(1.05,tp+(e.clientY-lastY)*.003));lastX=e.clientX;lastY=e.clientY;start();});canvas.addEventListener('pointerup',()=>drag=false);canvas.addEventListener('pointercancel',()=>drag=false);
 canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')ty-=.15;if(e.key==='ArrowRight')ty+=.15;if(e.key==='ArrowUp')tp=Math.min(1.05,tp+.08);if(e.key==='ArrowDown')tp=Math.max(.3,tp-.08);if(e.key==='Home')view('spire');start();}});
 new ResizeObserver(resize).observe(canvas);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible&&raf){cancelAnimationFrame(raf);raf=0;}else start();},{threshold:.01}).observe(canvas);document.addEventListener('visibilitychange',start);new MutationObserver(()=>{if(raf)cancelAnimationFrame(raf);raf=0;start();}).observe(document.body,{attributes:true,attributeFilter:['class']});reduced.addEventListener('change',start);resize();
})();
