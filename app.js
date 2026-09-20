const C=[
["Cash / Note Counter","Money",1],["Basic Calculator","Math",2],["Percentage Calculator","Math",3],["Discount Calculator","Money",4],["Profit & Loss Calculator","Money",5],["Markup Calculator","Money",6],["Tip Calculator","Money",7],["Split Bill Calculator","Money",8],["Invoice / Bill Calculator","Money",9],["EMI Calculator","Loans",10],["Home Loan Calculator","Loans",11],["Car Loan Calculator","Loans",12],["Bike Loan Calculator","Loans",13],["Personal Loan Calculator","Loans",14],["Credit Card EMI Calculator","Loans",15],["Simple Interest Calculator","Finance",16],["Compound Interest Calculator","Finance",17],["Loan Balance Calculator","Loans",18],["Loan Prepayment Calculator","Loans",19],["SIP Calculator","Investment",20],["Step-Up SIP Calculator","Investment",21],["Lumpsum Calculator","Investment",22],["FD Calculator","Investment",23],["RD Calculator","Investment",24],["CAGR Calculator","Investment",25],["ROI Calculator","Investment",26],["Inflation Calculator","Finance",27],["Investment Goal Calculator","Investment",28],["GST Calculator","Tax",29],["GST Inclusive ↔ Exclusive","Tax",30],["Salary / CTC Calculator","Tax",31],["Income Tax Calculator","Tax",32],["Tax Deduction Calculator","Tax",33],["Fuel Cost Calculator","Travel",34],["Mileage Calculator","Travel",35],["Trip Cost Calculator","Travel",36],["Fuel Required Calculator","Travel",37],["EV Charging Cost Calculator","Travel",38],["Electricity Bill Calculator","Bills",39],["Rent Split Calculator","Bills",40],["Water Usage Calculator","Bills",41],["Data Usage Calculator","Utility",42],["Cooking Measurement Converter","Convert",43],["Detailed Age Calculator","Time",44],["Live Time Calculator","Time",45],["Date Difference Calculator","Time",46],["Time Difference Calculator","Time",47],["Add Time","Time",48],["Subtract Time","Time",49],["Days Between Dates","Time",50],["Countdown Calculator","Time",51],["Length","Convert",52],["Weight / Mass","Convert",53],["Temperature","Convert",54],["Area","Convert",55],["Volume","Convert",56],["Speed","Convert",57],["Data Storage","Convert",58],["Energy","Convert",59],["Pressure","Convert",60],["Power","Convert",61],["Height Converter","Convert",62],["Marks Percentage","Education",63],["CGPA Calculator","Education",64],["CGPA ↔ Percentage","Education",65],["Average Calculator","Education",66],["Required Marks Calculator","Education",67],["Grade Calculator","Education",68],["Scientific Calculator","Math",69],["Fraction Calculator","Math",70],["Geometry Calculator","Math",71],["Pythagorean Calculator","Math",72],["Probability Calculator","Math",73],["Statistics Calculator","Math",74],["Prime Number Calculator","Math",75],["Number System Converter","Convert",76],["BMI Calculator","Health",77],["Calorie Calculator","Health",78],["BMR Calculator","Health",79],["Ideal Weight Calculator","Health",80]
];
const defs={
1:[["₹10 notes","number",0],["₹20 notes","number",0],["₹50 notes","number",0],["₹100 notes","number",0],["₹200 notes","number",0],["₹500 notes","number",0],["₹2000 notes","number",0]],
2:[["Expression","text","50000 * 18 / 100"]],3:[["Value","number",100], ["Percentage","number",10]],4:[["Price","number",1000],["Discount %","number",10]],5:[["Cost Price","number",100],["Selling Price","number",120]],6:[["Cost","number",100],["Markup %","number",20]],7:[["Bill","number",1000],["Tip %","number",10]],8:[["Total Bill","number",1000],["People","number",2]],9:[["Subtotal","number",1000],["Tax %","number",18],["Discount %","number",0]],
10:[["Principal","number",100000],["Annual interest %","number",8.5],["Tenure (years)","number",10]],11:[["Loan amount","number",5000000],["Annual interest %","number",8],["Tenure (years)","number",20]],12:[["Loan amount","number",800000],["Annual interest %","number",9],["Tenure (years)","number",5]],13:[["Loan amount","number",120000],["Annual interest %","number",10],["Tenure (years)","number",3]],14:[["Loan amount","number",300000],["Annual interest %","number",12],["Tenure (years)","number",5]],15:[["Outstanding","number",50000],["Annual interest %","number",36],["Tenure (months)","number",12]],
16:[["Principal","number",100000],["Annual rate %","number",8],["Time (years)","number",3]],17:[["Principal","number",100000],["Annual rate %","number",8],["Time (years)","number",5],["Compounds/year","number",12]],18:[["Original principal","number",500000],["Annual interest %","number",8],["Paid EMIs","number",12],["Total tenure (months)","number",60]],19:[["Outstanding","number",500000],["Annual interest %","number",8],["Remaining months","number",48],["Prepayment","number",100000]],
20:[["Monthly SIP","number",5000],["Annual return %","number",12],["Years","number",10]],21:[["Starting monthly SIP","number",5000],["Annual step-up %","number",10],["Annual return %","number",12],["Years","number",10]],22:[["Investment","number",100000],["Annual return %","number",12],["Years","number",10]],23:[["Deposit","number",100000],["Annual rate %","number",7],["Years","number",5]],24:[["Monthly deposit","number",5000],["Annual rate %","number",7],["Years","number",5]],25:[["Initial value","number",100000],["Final value","number",200000],["Years","number",5]],26:[["Investment","number",100000],["Current value","number",140000]],27:[["Current cost","number",100000],["Inflation %","number",6],["Years","number",10]],28:[["Target amount","number",1000000],["Annual return %","number",12],["Years","number",10]],
29:[["Amount","number",100000],["GST %","number",18]],30:[["Amount","number",118000],["GST %","number",18]],31:[["Monthly basic","number",50000],["Allowances/month","number",10000],["Deductions/month","number",5000]],32:[["Annual income","number",1000000],["Tax rate %","number",10]],33:[["Income","number",1000000],["Deduction","number",150000]],34:[["Distance km","number",300],["Mileage km/L","number",15],["Fuel price ₹/L","number",100]],35:[["Distance km","number",300],["Fuel used L","number",20]],36:[["Distance km","number",300],["Mileage km/L","number",15],["Fuel price ₹/L","number",100],["Tolls ₹","number",0]],37:[["Distance km","number",300],["Mileage km/L","number",15]],38:[["Battery kWh","number",40],["Electricity ₹/kWh","number",8],["Charge %","number",80]],39:[["Units","number",200],["Rate ₹/unit","number",7]],40:[["Rent ₹","number",20000],["People","number",3]],41:[["Litres","number",1000],["Rate ₹/L","number",0.05]],42:[["Data GB","number",10],["Days","number",30]],43:[["Value","number",1],["From","select",["cup","tbsp","tsp","ml","L"]],["To","select",["cup","tbsp","tsp","ml","L"]]],
44:[["Birth date","date",""]],45:[],46:[["Start date","date",""] ,["End date","date",""]],47:[["Start time","time",""],["End time","time",""]],48:[["Hours","number",1],["Minutes","number",30]],49:[["Hours","number",1],["Minutes","number",30]],50:[["Start date","date",""] ,["End date","date",""]],51:[["Target date","date",""]],52:[["Value","number",1],["From","select",["m","km","cm","ft","in"]],["To","select",["m","km","cm","ft","in"]]],53:[["Value","number",1],["From","select",["kg","g","lb","oz"]],["To","select",["kg","g","lb","oz"]]],54:[["Value","number",25],["From","select",["C","F","K"]],["To","select",["C","F","K"]]],55:[["Value","number",1],["From","select",["m²","km²","ft²","acre"]],["To","select",["m²","km²","ft²","acre"]]],56:[["Value","number",1],["From","select",["L","ml","m³","gal"]],["To","select",["L","ml","m³","gal"]]],57:[["Value","number",60],["From","select",["km/h","m/s","mph"]],["To","select",["km/h","m/s","mph"]]],58:[["Value","number",1],["From","select",["GB","MB","KB","TB"]],["To","select",["GB","MB","KB","TB"]]],59:[["Value","number",1],["From","select",["J","kJ","Wh","kWh"]],["To","select",["J","kJ","Wh","kWh"]]],60:[["Value","number",1],["From","select",["Pa","kPa","bar","psi"]],["To","select",["Pa","kPa","bar","psi"]]],61:[["Value","number",1],["From","select",["W","kW","MW","hp"]],["To","select",["W","kW","MW","hp"]]],62:[["Value","number",170],["From","select",["cm","m","ft","in"]],["To","select",["cm","m","ft","in"]]],
63:[["Marks obtained","number",450],["Maximum marks","number",500]],64:[["CGPA","number",8.5],["Scale","number",10]],65:[["Value","number",8.5],["Mode","select",["CGPA → %","% → CGPA"]]],66:[["Values (comma separated)","text","10,20,30,40"]],67:[["Total marks","number",100],["Marks obtained","number",40],["Target %","number",60]],68:[["Percentage","number",85]],69:[["Expression","text","sqrt(144) + sin(30) + log(100)"]],70:[["Numerator","number",3],["Denominator","number",4]],71:[["Shape","select",["Circle","Rectangle","Triangle"]],["A / Radius","number",10],["B / Height","number",5]],72:[["A","number",3],["B","number",4]],73:[["Favourable outcomes","number",1],["Total outcomes","number",2]],74:[["Values (comma separated)","text","10,20,30,40,50"]],75:[["Number","number",97]],76:[["Value","text","255"],["From","select",["Decimal","Binary","Octal","Hex"]],["To","select",["Decimal","Binary","Octal","Hex"]]],77:[["Weight kg","number",70],["Height cm","number",170]],78:[["Weight kg","number",70],["Height cm","number",170],["Age","number",25],["Activity","select",["Sedentary","Light","Moderate","Active"]]],79:[["Weight kg","number",70],["Height cm","number",170],["Age","number",25],["Sex","select",["Male","Female"]]],80:[["Height cm","number",170],["Sex","select",["Male","Female"]]]
};
const icons={Money:"₹",Math:"∑",Loans:"⌂",Finance:"◈",Investment:"◒",Tax:"%",Travel:"⛽",Bills:"▣",Utility:"◫",Convert:"⇄",Time:"◷",Education:"A+",Health:"♡"};
let current=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function safeJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
function money(x){return Number.isFinite(x)?new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(x):"—"}
function num(x){const n=Number(String(x??"").replace(/,/g,""));return Number.isFinite(n)?n:NaN}
function validDate(s){const d=new Date(s+"T00:00:00");return s&&Number.isFinite(d.getTime())?d:null}
function daysBetween(a,b){return Math.round((b-a)/86400000)}
function saveHistory(title,result){const h=safeJSON("calcoraHistory",[]);h.unshift({title,result,time:new Date().toLocaleString()});localStorage.setItem("calcoraHistory",JSON.stringify(h.slice(0,50)))}
function showView(id){const v=$("#"+id);if(!v)return;$$('.view').forEach(x=>x.classList.remove('active'));v.classList.add('active');$$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===id));window.scrollTo({top:0,behavior:'smooth'});if(id==='favoritesView')renderFavorites();if(id==='historyView')renderHistory()}
function renderCategories(){const cats=[...new Set(C.map(x=>x[1]))];$("#categoryGrid").innerHTML=cats.map(cat=>`<button class="category" data-cat="${cat}"><span>${icons[cat]||"•"}</span><b>${cat}</b><small>${C.filter(x=>x[1]===cat).length} tools</small></button>`).join('');$$('.category').forEach(b=>b.onclick=()=>{showView('exploreView');$("#exploreSearch").value=b.dataset.cat;renderList(b.dataset.cat)})}
function renderList(q=""){const s=String(q).trim().toLowerCase();const arr=C.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(s));$("#calculatorList").innerHTML=arr.length?arr.map(x=>`<button class="calc-item" data-id="${x[2]}"><span class="ci">${icons[x[1]]||"•"}</span><span><b>${x[0]}</b><small>${x[1]}</small></span></button>`).join(''):`<div class="empty">No calculator found.</div>`;$$('#calculatorList .calc-item').forEach(b=>b.onclick=()=>openCalc(Number(b.dataset.id)))}
function renderFavorites(){const f=safeJSON('calcoraFav',[]);const arr=C.filter(x=>f.includes(x[2]));$("#favoritesList").innerHTML=arr.length?arr.map(x=>`<button class="calc-item" data-id="${x[2]}"><span class="ci">${icons[x[1]]||"•"}</span><span><b>${x[0]}</b><small>${x[1]}</small></span></button>`).join(''):`<div class="empty">No favorites yet. Tap ☆ inside a calculator.</div>`;$$('#favoritesList .calc-item').forEach(b=>b.onclick=()=>openCalc(Number(b.dataset.id)))}
function renderHistory(){const h=safeJSON('calcoraHistory',[]);$("#historyList").innerHTML=h.length?h.map(x=>`<div class="history-item"><b>${escapeHTML(x.title)}</b><div>${escapeHTML(String(x.result))}</div><small>${escapeHTML(x.time)}</small></div>`).join(''):`<div class="empty">No calculations yet.</div>`}
function escapeHTML(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function fieldHTML(d,i){const [label,type,val]=d;if(type==='select')return `<div class="field"><label>${label}</label><select id="f${i}">${val.map(v=>`<option>${v}</option>`).join('')}</select></div>`;return `<div class="field"><label>${label}</label><input id="f${i}" type="${type}" value="${escapeHTML(val)}" ${type==='number'?'step="any"':''}></div>`}
function openCalc(id){current=C.find(x=>x[2]===id);if(!current)return;showView('calcView');$("#calcTitle").textContent=current[0];$("#calcCategory").textContent=current[1];$("#calcDescription").textContent="Fast, mobile-friendly calculation with local history.";$("#calcForm").innerHTML=(defs[id]||[]).map(fieldHTML).join('')||`<div class="field"><label>Input</label><input id="f0" type="text" placeholder="Enter value"></div>`;const f=safeJSON('calcoraFav',[]);$("#favBtn").textContent=f.includes(id)?'★':'☆';$("#favBtn").onclick=()=>{let next=safeJSON('calcoraFav',[]);next=next.includes(id)?next.filter(x=>x!==id):[...next,id];localStorage.setItem('calcoraFav',JSON.stringify(next));$("#favBtn").textContent=next.includes(id)?'★':'☆';renderFavorites()};$("#calcResult strong").textContent='—';$("#calculateBtn").onclick=calculate}
function vals(){return (defs[current[2]]||[]).map((d,i)=>{const e=$("#f"+i);return d[1]==='select'?e.value:d[1]==='text'?e.value:num(e.value)})}
function calcConvert(v,from,to,map){if(!(from in map)||!(to in map))throw Error('Unknown unit');return v*map[from]/map[to]}
function parseList(s){const a=String(s).split(',').map(x=>Number(x.trim())).filter(Number.isFinite);if(!a.length)throw Error('Enter numbers');return a}
function emi(P,annual,months){if(P<0||months<=0||annual<0)throw Error('Invalid loan input');const r=annual/1200;if(r===0)return P/months;return P*r*Math.pow(1+r,months)/(Math.pow(1+r,months)-1)}
function futureValueSip(monthly,annual,years){const n=Math.max(0,Math.round(years*12)),r=annual/1200;if(n===0)return 0;if(r===0)return monthly*n;return monthly*((Math.pow(1+r,n)-1)/r)*(1+r)}
function safeExpression(expr){
  let e=String(expr).replace(/π/gi,'PI').replace(/\^/g,'**');
  if(!/^[0-9+\-*/%().,\sA-Za-z_]+$/.test(e)) throw Error('Invalid expression');
  const funcs={
    sqrt:x=>Math.sqrt(x),sin:x=>Math.sin(x*Math.PI/180),cos:x=>Math.cos(x*Math.PI/180),tan:x=>Math.tan(x*Math.PI/180),
    log:x=>Math.log10(x),ln:x=>Math.log(x),abs:x=>Math.abs(x),floor:x=>Math.floor(x),ceil:x=>Math.ceil(x),round:x=>Math.round(x),
    pow:(a,b)=>Math.pow(a,b),max:(...x)=>Math.max(...x),min:(...x)=>Math.min(...x)
  };
  const ids=[...e.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)].map(m=>m[0]);
  for(const id of ids) if(id!=='PI' && !(id in funcs)) throw Error('Unknown function/name');
  for(const name of Object.keys(funcs)) e=e.replace(new RegExp('\\b'+name+'\\b','g'),name);
  e=e.replace(/\bPI\b/g,'Math.PI');
  const result=Function(...Object.keys(funcs),`"use strict";return (${e})`,)(...Object.values(funcs));
  if(!Number.isFinite(result)) throw Error('Invalid result');
  return result;
}
function calculate(){if(!current)return;const id=current[2],v=vals();let r='';try{
if(v.some(x=>typeof x==='number'&&!Number.isFinite(x)))throw Error('Missing/invalid input');
switch(id){
case 1:r=money(v.reduce((s,x,i)=>s+x*defs[1][i][2],0));break;
case 2:case 69:r=String(safeExpression(v[0]));break;
case 3:r=String(v[0]*v[1]/100);break;
case 4:r=money(v[0]*(1-v[1]/100));break;
case 5:{const p=v[1]-v[0];r=`${p>=0?'Profit':'Loss'} ${money(Math.abs(p))} (${v[0]?((Math.abs(p)/Math.abs(v[0]))*100).toFixed(2):'0.00'}%)`;break}
case 6:r=money(v[0]*(1+v[1]/100));break;
case 7:r=money(v[0]*v[1]/100)+` tip • ${money(v[0]*(1+v[1]/100))} total`;break;
case 8:if(v[1]<=0)throw Error('People must be > 0');r=money(v[0]/v[1]);break;
case 9:{const afterDiscount=v[0]*(1-v[2]/100),tax=afterDiscount*v[1]/100;r=`Subtotal after discount ${money(afterDiscount)} • GST/tax ${money(tax)} • Total ${money(afterDiscount+tax)}`;break}
case 10:case 11:case 12:case 13:case 14:{const months=v[2]*12,e=emi(v[0],v[1],months);r=`EMI ${money(e)} • Total ${money(e*months)} • Interest ${money(e*months-v[0])}`;break}
case 15:{const months=v[2],e=emi(v[0],v[1],months);r=`EMI ${money(e)} • Total ${money(e*months)} • Interest ${money(e*months-v[0])}`;break}
case 16:r=money(v[0]*v[1]*v[2]/100)+` interest • Total ${money(v[0]*(1+v[1]*v[2]/100))}`;break;
case 17:{if(v[3]<=0)throw Error('Compounds/year must be > 0');const A=v[0]*Math.pow(1+v[1]/100/v[3],v[2]*v[3]);r=`Maturity ${money(A)} • Interest ${money(A-v[0])}`;break}
case 18:{const total=v[3],paid=Math.min(Math.max(0,Math.floor(v[2])),total),e=emi(v[0],v[1],total),rr=v[1]/1200;let bal=v[0];for(let i=0;i<paid;i++)bal=rr?bal*(1+rr)-e:bal-e;r=`Estimated balance ${money(Math.max(0,bal))} • EMI ${money(e)}`;break}
case 19:{const e=emi(v[0],v[1],v[2]),newP=Math.max(0,v[0]-Math.max(0,v[3])),newE=emi(newP,v[1],v[2]);r=`New EMI ${money(newE)} • EMI reduction ${money(e-newE)}`;break}
case 20:{const A=futureValueSip(v[0],v[1],v[2]);r=`Future value ${money(A)} • Invested ${money(v[0]*v[2]*12)} • Gain ${money(A-v[0]*v[2]*12)}`;break}
case 21:{let A=0,m=v[0],rM=v[2]/1200,total=0,n=Math.max(0,Math.round(v[3]*12));for(let k=1;k<=n;k++){A=rM?A*(1+rM)+m:A+m;total+=m;if(k%12===0)m*=1+v[1]/100}r=`Future value ${money(A)} • Invested ${money(total)} • Gain ${money(A-total)}`;break}
case 22:r=money(v[0]*Math.pow(1+v[1]/100,v[2]));break;
case 23:{const A=v[0]*Math.pow(1+v[1]/100,v[2]);r=`Maturity ${money(A)} • Interest ${money(A-v[0])}`;break}
case 24:{const n=v[2]*12,rm=v[1]/1200,A=v[0]*n+v[0]*rm*n*(n+1)/2;r=`Maturity ${money(A)} • Interest ${money(A-v[0]*n)}`;break}
case 25:r=v[0]>0&&v[1]>=0&&v[2]>0?((Math.pow(v[1]/v[0],1/v[2])-1)*100).toFixed(2)+'% CAGR':'Invalid values';break;
case 26:r=v[0]!==0?((v[1]-v[0])/v[0]*100).toFixed(2)+'% ROI':'Invalid investment';break;
case 27:r=money(v[0]*Math.pow(1+v[1]/100,v[2]));break;
case 28:{const n=v[2]*12,rr=v[1]/1200,m=rr===0?v[0]/n:v[0]*rr/(Math.pow(1+rr,n)-1);r=`Required monthly SIP ${money(m)}`;break}
case 29:r=`GST ${money(v[0]*v[1]/100)} • Total ${money(v[0]*(1+v[1]/100))}`;break;
case 30:{const base=v[0]/(1+v[1]/100);r=`Base ${money(base)} • GST ${money(v[0]-base)}`;break}
case 31:{const monthly=Math.max(0,v[0])+v[1]-v[2];r=`Net monthly ${money(monthly)} • Annual ${money(monthly*12)}`;break}
case 32:r=money(Math.max(0,v[0])*v[1]/100)+' estimated tax';break;
case 33:r=money(Math.max(0,v[0]-v[1]))+' taxable after deduction';break;
case 34:case 36:{if(v[1]<=0)throw Error('Mileage must be > 0');const fuel=v[0]/v[1],cost=fuel*v[2]+(id===36?v[3]:0);r=`Fuel ${fuel.toFixed(2)} L • Cost ${money(cost)}`;break}
case 35:if(v[1]<=0)throw Error('Fuel used must be > 0');r=(v[0]/v[1]).toFixed(2)+' km/L';break;
case 37:if(v[1]<=0)throw Error('Mileage must be > 0');r=(v[0]/v[1]).toFixed(2)+' L required';break;
case 38:r=money(v[0]*v[1]*v[2]/100);break;
case 39:r=money(v[0]*v[1]);break;
case 40:if(v[1]<=0)throw Error('People must be > 0');r=money(v[0]/v[1])+' per person';break;
case 41:r=money(v[0]*v[1]);break;
case 42:if(v[1]<=0)throw Error('Days must be > 0');r=(v[0]/v[1]).toFixed(3)+' GB/day';break;
case 43:{const map={cup:240,tbsp:15,tsp:5,ml:1,L:1000};r=(v[0]*map[v[1]]/map[v[2]]).toFixed(4)+' '+v[2];break}
case 44:{const b=validDate(v[0]);if(!b)throw Error('Select birth date');const n=new Date();let a=n.getFullYear()-b.getFullYear();const birthday=new Date(n.getFullYear(),b.getMonth(),b.getDate());if(n<birthday)a--;r=`${a} years`;break}
case 45:r=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit',second:'2-digit'});break;
case 46:case 50:{const a=validDate(v[0]),b=validDate(v[1]);if(!a||!b)throw Error('Select both dates');r=Math.abs(daysBetween(a,b))+' days';break}
case 47:{const a=v[0].split(':').map(Number),b=v[1].split(':').map(Number);if(a.length<2||b.length<2||a.some(x=>!Number.isFinite(x))||b.some(x=>!Number.isFinite(x)))throw Error('Enter both times');let d=(b[0]*60+b[1])-(a[0]*60+a[1]);if(d<0)d+=1440;r=`${Math.floor(d/60)}h ${d%60}m`;break}
case 48:{const total=v[0]*60+v[1];r=`${Math.floor(total/60)}h ${total%60}m`;break}
case 49:{let total=v[0]*60-v[1];r=`${Math.trunc(total/60)}h ${Math.abs(total%60)}m`;break}
case 51:{const t=validDate(v[0]);if(!t)throw Error('Select target date');r=Math.max(0,Math.ceil((t-new Date())/86400000))+' days remaining';break}
case 52:{const map={m:1,km:1000,cm:.01,ft:.3048,in:.0254};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 53:{const map={kg:1,g:.001,lb:.45359237,oz:.0283495};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 54:{let c=v[1]==='C'?v[0]:v[1]==='F'?(v[0]-32)*5/9:v[0]-273.15;r=(v[2]==='C'?c:v[2]==='F'?c*9/5+32:c+273.15).toFixed(2)+'°'+v[2];break}
case 55:{const map={'m²':1,'km²':1e6,'ft²':.09290304,acre:4046.8564224};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 56:{const map={L:1,ml:.001,'m³':1000,gal:3.785411784};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 57:{const map={'km/h':1,'m/s':3.6,mph:1.609344};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 58:{const map={GB:1,MB:1/1024,KB:1/1048576,TB:1024};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 59:{const map={J:1,kJ:1000,Wh:3600,kWh:3600000};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 60:{const map={Pa:1,kPa:1000,bar:100000,psi:6894.757293};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 61:{const map={W:1,kW:1000,MW:1e6,hp:745.699872};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 62:{const map={cm:.01,m:1,ft:.3048,in:.0254};r=calcConvert(v[0],v[1],v[2],map).toFixed(6);break}
case 63:r=(v[0]/v[1]*100).toFixed(2)+'%';break;
case 64:r=(v[0]/v[1]*100).toFixed(2)+'% of scale';break;
case 65:r=v[1].startsWith('CGPA')?(v[0]*9.5).toFixed(2)+'%':(v[0]/9.5).toFixed(2)+' CGPA';break;
case 66:case 74:{const a=parseList(v[0]),mean=a.reduce((x,y)=>x+y,0)/a.length;if(id===66)r=`Average ${mean.toFixed(3)}`;else{const variance=a.reduce((s,x)=>s+(x-mean)**2,0)/a.length;const sorted=[...a].sort((x,y)=>x-y);const mid=Math.floor(sorted.length/2),median=sorted.length%2?sorted[mid]:(sorted[mid-1]+sorted[mid])/2;r=`Mean ${mean.toFixed(3)} • Median ${median} • Population SD ${Math.sqrt(variance).toFixed(3)}`;}break}
case 67:{if(v[0]<=0)throw Error('Total marks must be > 0');const need=v[0]*v[2]/100-v[1];r=`Need ${Math.max(0,need).toFixed(2)} marks`;break}
case 68:r=v[0]>=90?'A+':v[0]>=80?'A':v[0]>=70?'B':v[0]>=60?'C':v[0]>=50?'D':'F';break;
case 70:{if(v[1]===0)throw Error('Denominator cannot be zero');const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){const t=a%b;a=b;b=t}return a||1};const g=gcd(v[0],v[1]);r=`${v[0]/g}/${v[1]/g} = ${(v[0]/v[1]).toFixed(6)}`;break}
case 71:{if(v[0]==='Circle')r=`Area ${(Math.PI*v[1]**2).toFixed(3)} • Circumference ${(2*Math.PI*v[1]).toFixed(3)}`;else if(v[0]==='Rectangle')r=`Area ${(v[1]*v[2]).toFixed(3)} • Perimeter ${(2*(v[1]+v[2])).toFixed(3)}`;else r=`Area ${(v[1]*v[2]/2).toFixed(3)}`;break}
case 72:r=Math.hypot(v[0],v[1]).toFixed(4);break;
case 73:{if(v[1]<=0||v[0]<0||v[0]>v[1])throw Error('Use 0 ≤ favourable ≤ total');r=(v[0]/v[1]*100).toFixed(2)+'% probability';break}
case 75:{const n=Math.floor(v[0]);if(n<2){r='Not prime';break}let p=true;for(let i=2;i<=Math.sqrt(n);i++)if(n%i===0){p=false;break}r=p?'Prime':'Not prime';break}
case 76:{const bases={Decimal:10,Binary:2,Octal:8,Hex:16},from=bases[v[1]],to=bases[v[2]];if(!/^[0-9a-f]+$/i.test(v[0]))throw Error('Invalid number');const n=parseInt(v[0],from);if(!Number.isFinite(n)||n<0)throw Error('Invalid number');r=n.toString(to).toUpperCase();break}
case 77:{const bmi=v[0]/(v[1]/100)**2;r=`BMI ${bmi.toFixed(2)}`;break}
case 78:{const b=10*v[0]+6.25*v[1]-5*v[2]+5, factor={Sedentary:1.2,Light:1.375,Moderate:1.55,Active:1.725}[v[3]];r=`Estimated BMR ${Math.round(b)} kcal/day • TDEE ${Math.round(b*factor)} kcal/day`;break}
case 79:{const b=10*v[0]+6.25*v[1]-5*v[2]+(v[3]==='Male'?5:-161);r=Math.round(b)+' kcal/day BMR';break}
case 80:{const h=v[0]/100;const bmi22=22*h*h;const sexBase=v[1]==='Male'?(50+2.3*Math.max(0,v[0]/2.54-60)):(45.5+2.3*Math.max(0,v[0]/2.54-60));r=`BMI-22 reference ${bmi22.toFixed(1)} kg • Devine ${sexBase.toFixed(1)} kg`;break}
default:r='Calculation ready'}
if(r===undefined||r===null||String(r)==='NaN'||String(r)==='Infinity'||String(r)==='-Infinity')throw Error('Invalid result');$("#calcResult strong").textContent=r;saveHistory(current[0],r);renderHistory();
}catch(e){$("#calcResult strong").textContent=e.message||'Check your inputs'} }

$$('.bottom-nav button').forEach(b=>b.onclick=()=>showView(b.dataset.nav));
$("#homeBtn").onclick=()=>showView('homeView');$("#historyBtn").onclick=()=>showView('historyView');$("#backBtn").onclick=()=>showView('exploreView');$("#allBtn").onclick=()=>showView('exploreView');$("#onlineBtn").onclick=()=>showView('onlineView');
$("#searchInput").oninput=e=>{showView('exploreView');$("#exploreSearch").value=e.target.value;renderList(e.target.value)};
$("#exploreSearch").oninput=e=>renderList(e.target.value);
$("#clearHistory").onclick=()=>{localStorage.removeItem('calcoraHistory');renderHistory()};
$("#themeBtn").onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('calcoraTheme',document.body.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('calcoraTheme')==='light')document.body.classList.add('light');
$("#suggestion").value=localStorage.getItem('calcoraSuggestion')||'';
$("#suggestBtn").onclick=()=>{localStorage.setItem('calcoraSuggestion',$("#suggestion").value.trim());alert('Suggestion saved on this device.')};
$$('.quick').forEach(b=>b.onclick=()=>openCalc(Number(b.dataset.open)));
renderCategories();renderList();renderFavorites();renderHistory();
const currencies=['EUR','USD','INR','GBP','JPY','AUD','CAD','SGD','AED'];
$("#curFrom").innerHTML=currencies.map(x=>`<option value="${x}">${x}</option>`).join('');$("#curTo").innerHTML=currencies.map(x=>`<option value="${x}">${x}</option>`).join('');$("#curFrom").value='INR';$("#curTo").value='USD';
$("#currencyBtn").onclick=async()=>{const a=num($("#curAmount").value),f=$("#curFrom").value,t=$("#curTo").value,box=$("#currencyResult");if(!Number.isFinite(a)||a<0){box.textContent='Enter a valid amount';return}box.textContent='Loading…';if(f===t){box.textContent=`${a} ${f} = ${a} ${t}`;return}try{const res=await fetch(`https://api.frankfurter.app/latest?amount=${encodeURIComponent(a)}&from=${encodeURIComponent(f)}&to=${encodeURIComponent(t)}`);if(!res.ok)throw Error();const j=await res.json();const rate=j.rates&&j.rates[t];if(!Number.isFinite(Number(rate)))throw Error();box.textContent=`${a} ${f} ≈ ${Number(rate).toFixed(4)} ${t}`;localStorage.setItem('calcoraLastCurrency',box.textContent)}catch{box.textContent=localStorage.getItem('calcoraLastCurrency')||'Live rate unavailable — check internet and try again.'}};
$("#marketBtn").onclick=async()=>{const box=$("#marketResult");box.textContent='Loading…';try{const res=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd');if(!res.ok)throw Error();const j=await res.json();box.innerHTML=Object.entries(j).map(([k,v])=>`<div class="market-row"><span>${escapeHTML(k)}</span><b>$${Number(v.usd).toLocaleString()}</b></div>`).join('');localStorage.setItem('calcoraLastMarket',box.innerHTML)}catch{box.innerHTML=localStorage.getItem('calcoraLastMarket')||'Live market data unavailable.'}};
$("#fuelBtn").onclick=()=>{const d=num($("#fuelDist").value),m=num($("#fuelMileage").value),p=num($("#fuelPrice").value);$("#fuelResult").textContent=m>0?`Fuel ${(d/m).toFixed(2)} L • Cost ${money(d/m*p)}`:'Enter mileage > 0'};
