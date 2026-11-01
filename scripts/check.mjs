import {readFileSync,existsSync,statSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';
import assert from 'node:assert/strict';
const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const read=f=>readFileSync(join(root,f),'utf8');
const html=read('index.html'),js=read('app.js'),css=read('style.css');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
for(const [,id] of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(id),`Broken anchor ${id}`);
for(const [,src] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 if(/^(https?:|mailto:|data:)/.test(src))continue;
 const f=src.split('?')[0];assert(existsSync(join(root,f)),`Missing local asset ${f}`);
}
assert(!/<iframe\b/i.test(html),'Embedded frames must stay absent');
assert(!/youtube|youtu\.be/i.test(html+js),'YouTube must stay absent');
assert.equal((html.match(/<h1\b/g)||[]).length,1,'One main heading required');
for(const img of html.matchAll(/<img\b([^>]+)>/g))assert(/\balt="[^"]*"/.test(img[1]),'Image missing alternative text');
for(const id of ['menu-toggle','main-nav','project-count','project-rail','theme-toggle','hero-carousel','project-shelf'])assert(ids.includes(id),`Missing control ${id}`);
assert(!ids.includes('motion-toggle'),'The public motion toggle must remain removed');
const context={window:{}};runInNewContext(read('portfolio-data.js'),context);const p=context.window.PORTFOLIO_PROJECTS;
assert.equal(p.length,5);assert.equal(p[0].id,'ops');assert.equal(p[1].id,'energy');
for(const item of p){assert(existsSync(join(root,item.image)));assert(item.evidence.length);assert(item.limit);assert(item.demo||item.paper);for(const key of ['demo','code'])if(item[key])assert.equal(new URL(item[key]).protocol,'https:');}
assert.equal(p.filter(x=>x.id==='energy').length,1);assert(css.includes('prefers-reduced-motion'));assert(js.includes("aria-expanded"));
const config=JSON.parse(read('vercel.json'));assert.equal(config.outputDirectory,'dist');assert(config.headers[0].headers.some(x=>x.key==='Content-Security-Policy'));
for(const f of ['index.html','style.css','mobile.css','app.js','portfolio-data.js'])assert(statSync(join(root,f)).size<100_000,`${f} exceeds the source budget`);
console.log('PASS: anchors, assets, accessible structure, project records, no embedded media, motion controls, deployment config and source budgets.');
