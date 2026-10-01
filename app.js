const IDX=[
{t:"Italian brainrot",u:"italian-brainrot.html",d:"AI-generated surreal meme creatures with pseudo-Italian names that spread on TikTok in 2025.",k:"memes tralalero tralala bombardiro crocodilo ballerina cappuccina chimpanzini bananini trippi troppi lirili larila tiktok"},
{t:"Tung Tung Tung Sahur",u:"tung.html",d:"An AI-generated Indonesian character shaped like a kentongan drum, at the center of a copyright dispute.",k:"kentongan ramadan noxa indonesia mementum lab roblox"},
{t:"Brain rot",u:"https://en.wikipedia.org/wiki/Brain_rot",d:"Slang for low-quality online content and its effect on the mind; Oxford Word of the Year 2024."},
{t:"Steal a Brainrot",u:"https://en.wikipedia.org/wiki/Steal_a_Brainrot",d:"Roblox game built around Italian brainrot characters."},
{t:"AI slop",u:"https://en.wikipedia.org/wiki/AI_slop",d:"Low-effort AI-generated media flooding the web."},
{t:"Skibidi Toilet",u:"https://en.wikipedia.org/wiki/Skibidi_Toilet",d:"2020s web series known for surreal humor."}];
const $=s=>document.querySelector(s),E=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dl=$('#sug');if(dl)dl.innerHTML=IDX.map(i=>`<option value="${E(i.t)}">`).join('');
const lev=(a,b)=>{const m=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const t=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,p+(a[i-1]!=b[j-1]));p=t}}return m[b.length]};
const R=$('#results');
if(R){
const p=new URLSearchParams(location.search),q=(p.get('q')||'').trim(),sc=p.get('scope')==='title'?'title':'all',st=$('#status');
$('#q').value=q;$('#hq').value=q;$('#clear').hidden=!q;$(`input[name=scope][value=${sc}]`).checked=true;
document.title=(q?q+' - ':'')+'Search';
const w=q.toLowerCase().split(/\s+/).filter(Boolean);
const hits=w.length?IDX.map(i=>{const T=i.t.toLowerCase(),B=(i.d+' '+(i.k||'')).toLowerCase();let s=0;w.forEach(x=>{if(T.includes(x))s+=3;else if(sc=='all'&&B.includes(x))s++});return{i,s}}).filter(h=>h.s).sort((a,b)=>b.s-a.s):[];
if(!w.length)st.textContent='Type a title or topic in the search box to filter. All articles are listed below.';
else if(hits.length){st.textContent=`${hits.length} result${hits.length>1?'s':''} for “${q}”.`;
R.innerHTML=hits.map(h=>`<li><a href="${h.i.u}">${E(h.i.t)}</a>${h.i.t.toLowerCase()==q.toLowerCase()?'<span class="best">Best match</span>':''}<br>${E(h.i.d)}<br><small class="muted">${h.i.u.startsWith('http')?'On wikipedia.org (opens the real site)':'In this prototype'}</small></li>`).join('')}
else{const b=IDX.map(i=>({i,d:lev(q.toLowerCase(),i.t.toLowerCase())})).sort((a,b)=>a.d-b.d)[0];
R.innerHTML='';st.textContent=`No results for “${q}”.`;$('#help').hidden=false;
if(b.d<=Math.max(2,q.length*.3))$('#dym').innerHTML=`Did you mean <a href="search.html?q=${encodeURIComponent(b.i.t)}">${E(b.i.t)}</a>?`}}

const F=$('form[role=search]'),ER=$('#err'),QI=$('#q');
F.addEventListener('submit',e=>{if(!QI.value.trim()){e.preventDefault();ER.hidden=false;QI.setAttribute('aria-invalid','true');QI.focus()}});
QI.addEventListener('input',()=>{ER.hidden=true;QI.removeAttribute('aria-invalid')});
document.querySelectorAll('a[href^="http"]').forEach(a=>{a.classList.add('ext');a.rel='noopener';a.insertAdjacentHTML('beforeend','<span class="sr"> (external site)</span>')});
const T=[...document.querySelectorAll('.toc a')];
if(T.length&&'IntersectionObserver'in window){const m=new Map(T.map(a=>[a.hash.slice(1),a])),o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){T.forEach(a=>a.removeAttribute('aria-current'));m.get(e.target.id).setAttribute('aria-current','true')}}),{rootMargin:'0px 0px -70% 0px'});m.forEach((a,id)=>{const h=document.getElementById(id);h&&o.observe(h)})}
