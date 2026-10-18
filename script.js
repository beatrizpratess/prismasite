const Q=[
{k:'clima',w:2,t:'Que clima combina com você?',o:[['quente','Quente e ensolarado'],['ameno','Ameno, sem extremos'],['frio','Frio, de casaco'],['qualquer','Tanto faz, me adapto']]},
{k:'comida',w:1,t:'O que você mais quer comer na viagem?',o:[['mar','Frutos do mar'],['regional','Pratos típicos da região'],['rua','Comida de rua'],['variada','Restaurantes variados']]},
{k:'orc',w:2,t:'Quanto quer gastar por lá com hospedagem, comida e passeios?',o:[['1','Econômico'],['2','Moderado'],['3','Confortável para o bolso'],['4','Sem me preocupar']]},
{k:'hosp',w:1.5,t:'Onde prefere ficar hospedado?',o:[['praia','Perto da praia'],['centro','No centro, a pé de tudo'],['natureza','Em meio à natureza'],['calmo','Num lugar tranquilo e afastado']]},
{k:'estilo',w:1.5,t:'O que não pode faltar na viagem?',o:[['relax','Descanso'],['aventura','Aventura e trilhas'],['cultura','Cultura e história'],['noite','Vida noturna']]},
{k:'dist',w:2,t:'Até onde você topa viajar?',o:[['0','Só no Brasil'],['1','América do Sul'],['2','Europa ou América do Norte'],['3','Ásia, Oceania ou além']]}
];
const D=[
{n:'Florianópolis',p:'Santa Catarina, Brasil',c:'#1E9BB8',d:'Ilha com mais de 40 praias, trilhas com vista para o mar e ostras fresquinhas. Dá para passar a manhã na areia e a noite na Lagoa da Conceição.',clima:['quente','ameno'],comida:['mar'],orc:2,hosp:['praia','natureza'],estilo:['relax','aventura','noite'],dist:0},
{n:'Fernando de Noronha',p:'Pernambuco, Brasil',c:'#0B6E99',d:'Águas cristalinas, mergulho com tartarugas e trilhas até a Baía do Sancho. Tem custo alto e visitação controlada, mas é inesquecível.',clima:['quente'],comida:['mar'],orc:4,hosp:['praia','natureza','calmo'],estilo:['relax','aventura'],dist:0},
{n:'Salvador',p:'Bahia, Brasil',c:'#D1495B',d:'Música na rua, acarajé e o centro histórico do Pelourinho. Praias urbanas e uma das cozinhas mais marcantes do país.',clima:['quente'],comida:['regional','rua','mar'],orc:1,hosp:['centro','praia'],estilo:['cultura','noite'],dist:0},
{n:'Gramado',p:'Rio Grande do Sul, Brasil',c:'#6A4C93',d:'Chocolate quente, fondue e ruas com ar de serra europeia. Ótima para casais e famílias, principalmente no inverno.',clima:['frio','ameno'],comida:['regional','variada'],orc:2,hosp:['centro','calmo'],estilo:['relax','cultura'],dist:0},
{n:'Chapada Diamantina',p:'Bahia, Brasil',c:'#3E8E41',d:'Cachoeiras, grutas e trilhas até o Morro do Pai Inácio. Hospedagem simples, natureza de sobra e passeios baratos.',clima:['quente','ameno'],comida:['regional'],orc:1,hosp:['natureza','calmo'],estilo:['aventura','relax'],dist:0},
{n:'Buenos Aires',p:'Argentina',c:'#6F8FD0',d:'Parrilla, cafés em antigas livrarias, tango e bares até tarde. Uma cidade para caminhar sem pressa, a poucas horas de voo.',clima:['ameno'],comida:['variada','rua','regional'],orc:2,hosp:['centro'],estilo:['cultura','noite'],dist:1},
{n:'Santiago e Cordilheira',p:'Chile',c:'#3F5E8C',d:'Cidade cercada pelos Andes, com vinícolas por perto e neve de junho a setembro. Une cultura e aventura na mesma viagem.',clima:['frio','ameno'],comida:['variada','regional'],orc:2,hosp:['centro','natureza'],estilo:['aventura','cultura'],dist:1},
{n:'Cusco e Machu Picchu',p:'Peru',c:'#B5651D',d:'Ruínas incas, mercados coloridos e comida andina. Gasta-se pouco, mas a altitude pede alguns dias de adaptação.',clima:['ameno','frio'],comida:['regional','rua'],orc:1,hosp:['centro','natureza'],estilo:['cultura','aventura'],dist:1},
{n:'Lisboa',p:'Portugal',c:'#E9A23B',d:'Ladeiras, azulejos, bacalhau e pastéis de nata. Fácil de explorar a pé, com bairros animados à noite e praias a meia hora.',clima:['ameno'],comida:['mar','variada','regional'],orc:3,hosp:['centro'],estilo:['cultura','noite','relax'],dist:2},
{n:'Cancún',p:'México',c:'#00A6A6',d:'Mar caribenho turquesa, resorts e ruínas maias por perto. Pensado para descansar e curtir festas à beira-mar.',clima:['quente'],comida:['mar','rua'],orc:4,hosp:['praia'],estilo:['relax','noite'],dist:2},
{n:'Tóquio',p:'Japão',c:'#E63946',d:'Ramen de balcão, templos escondidos e bairros que parecem outro planeta. Seguro, organizado e com comida boa em todo canto.',clima:['ameno','frio'],comida:['rua','variada'],orc:3,hosp:['centro'],estilo:['cultura','noite'],dist:3},
{n:'Bangkok e ilhas do sul',p:'Tailândia',c:'#F28F3B',d:'Mercados flutuantes, templos dourados e pratos baratos em cada esquina. Combine com as ilhas para ter praia e festa na mesma viagem.',clima:['quente'],comida:['rua','mar'],orc:1,hosp:['praia','centro'],estilo:['aventura','noite','relax'],dist:3},
{n:'Islândia',p:'Islândia',c:'#5C7FA3',d:'Auroras, vulcões, cachoeiras e fontes termais. Cenário de outro mundo, com custo alto e muita estrada.',clima:['frio'],comida:['regional'],orc:4,hosp:['natureza','calmo'],estilo:['aventura','relax'],dist:2}
];
const app=document.getElementById('app'),total=Q.reduce((a,q)=>a+q.w,0);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
let step=-1,ans={};
const lab=(q,v)=>q.o.find(x=>x[0]===v)[1];
function show(html){app.innerHTML=html;document.body.classList.toggle('wide',step===Q.length);const h=app.querySelector('h1,h2');if(h){h.tabIndex=-1;h.focus({preventScroll:true})}scrollTo(0,0)}
function intro(){step=-1;ans={};
show(`<div class="dots" aria-hidden="true">${['#FF8080','#FF6262','#BEE3D0','#DCFFCC'].map(c=>`<i style="--c:${c}"></i>`).join('')}</div>
<h1>Está com dúvidas de qual será o próximo destino?</h1>
<p class="lead">Responda a um questionário rápido e descubra o lugar que mais combina com você</p>
<button class="btn" data-start>Começar</button>`)}
function ask(i){step=i;const q=Q[i];
show(`<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${Q.length}" aria-valuenow="${i+1}"><i style="width:${(i+1)/Q.length*100}%"></i></div>
<p class="step">Pergunta ${i+1} de ${Q.length}</p>
<h2>${q.t}</h2>
<div class="opts">${q.o.map(o=>`<button class="opt${ans[q.k]===o[0]?' on':''}" data-v="${o[0]}">${o[1]}</button>`).join('')}</div>
<div class="actions"><button class="ghost" data-back>Voltar</button></div>`)}
function score(d){let s=0,why=[];
Q.forEach(q=>{const a=ans[q.k];let m;
if(q.k==='orc'||q.k==='dist'){const x=Math.abs(d[q.k]-Number(a));m=x===0?1:x===1?.5:0}
else m=a==='qualquer'||d[q.k].includes(a)?1:0;
s+=m*q.w;if(m===1&&a!=='qualquer')why.push(lab(q,a))});
return{d,why,p:Math.round(s/total*100)}}
function result(){step=Q.length;
const r=D.map(score).sort((a,b)=>b.p-a.p);
const card=(x,i)=>`<article class="card${i===0?' top':''}" style="--c:${['#FF6262','#FF8080','#BEE3D0'][i]}">
<div class="pct">${x.p}%<span>de compatibilidade</span></div>
<h3>${x.d.n}</h3><p class="where">${x.d.p}</p><p>${x.d.d}</p>
${x.why.length?`<ul class="chips" aria-label="O que combina com você">${x.why.map(w=>`<li>${w}</li>`).join('')}</ul>`:''}</article>`;
show(`<h2>Seus destinos ideais</h2>
<div class="cards">${r.slice(0,3).map(card).join('')}</div>
<h3 class="more">Outras ideias para considerar</h3>
${r.slice(3,6).map(x=>`<div class="row"><b>${x.d.n} <small style="font-weight:400;color:var(--muted)">${x.d.p}</small></b><span>${x.p}%</span></div>`).join('')}
<div class="actions"><button class="btn" data-restart>Refazer o questionário</button><button class="ghost" data-back>Mudar a última resposta</button></div>`)}
app.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
if('start' in b.dataset)ask(0);
else if('restart' in b.dataset)intro();
else if('back' in b.dataset)step<=0?intro():ask(step-1);
else if(b.dataset.v!==undefined){ans[Q[step].k]=b.dataset.v;b.classList.add('on');
const go=()=>step+1<Q.length?ask(step+1):result();reduce?go():setTimeout(go,180)}});
intro();