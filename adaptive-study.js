(()=>{'use strict';
/* Selección adaptativa; no altera las respuestas ni el banco documental. */
const normalize=x=>String(x??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
function analyze(questions,attempts){
 const stats=new Map(questions.map(q=>[q.id,{id:q.id,nucleus:q.nucleus,seen:0,right:0,wrong:0,streak:0,lastCorrect:null,lastSeen:0}]));
 for(const attempt of attempts||[]){
  if(!Array.isArray(attempt?.items)||attempt.type==='practical')continue;
  for(const item of attempt.items){
   const s=stats.get(item?.id);
   if(!s||s.nucleus!==item.nucleus)continue;
   const answered=item.selected!==undefined&&item.selected!==null&&String(item.selected).trim()!=='';
   if(!answered)continue; // Sin contestar no equivale a dominarla ni a haberla practicado.
   s.seen++;
   const good=item.correct===true;
   if(good){s.right++;s.streak++;}else{s.wrong++;s.streak=0}
   s.lastCorrect=good;
   s.lastSeen=Number.isFinite(attempt.endedAt)?attempt.endedAt:(Date.parse(attempt.date)||0);
  }
 }
 return stats;
}
function summary(questions,attempts){
 const map=analyze(questions,attempts);
 const selected=questions.filter(q=>q.type==='choice');
 const seen=selected.filter(q=>(map.get(q.id)?.seen||0)>0);
 const weak=seen.filter(q=>{const v=map.get(q.id);return v.wrong>0&&(v.streak<2||v.right/(v.right+v.wrong)<.9)});
 const fresh=selected.length-seen.length;
 const recent=(attempts||[]).filter(a=>Array.isArray(a?.items)&&a.type!=='practical').slice(-8).flatMap(a=>a.items).filter(i=>i?.selected!==undefined&&i?.selected!==null&&String(i.selected).trim()!==''&&map.has(i.id));
 const accuracy=recent.length?recent.filter(i=>i.correct===true).length/recent.length:null;
 return {total:selected.length,seen:seen.length,unseen:fresh,weak:weak.length,accuracy,mastery:accuracy!==null&&accuracy>=.95?'high':accuracy!==null&&accuracy>=.9?'solid':'learning'};
}
function sampleWeighted(items,n,weight,random=Math.random){
 const pool=[...items],result=[];
 while(pool.length&&result.length<n){let sum=0;const weights=pool.map(x=>{let w=Math.max(.001,weight(x));sum+=w;return w});
 let point=random()*sum,pos=weights.findIndex(w=>(point-=w)<=0);if(pos<0)pos=pool.length-1;result.push(pool.splice(pos,1)[0]);}
 return result;
}
function select(questions,attempts,count=10,random=Math.random){
 const eligible=questions.filter(q=>q.type==='choice');
 const map=analyze(eligible,attempts);
 const overview=summary(eligible,attempts);
 // Cada núcleo reserva un 20 % para repaso general (con rotación por recencia).
 // El resto da más peso a preguntas nuevas y a errores persistentes.
 const weak=q=>{const s=map.get(q.id);return s?.seen>0&&s.wrong>0&&(s.streak<2||s.right/s.seen<.9)};
 const unseen=q=>map.get(q.id).seen===0;
 const need=eligible.filter(q=>unseen(q)||weak(q));
 const target=overview.mastery==='high'?Math.ceil(count*.55):overview.mastery==='solid'?Math.ceil(count*.7):Math.ceil(count*.8);
 const priority=sampleWeighted(need,Math.min(target,need.length),q=>{
  const s=map.get(q.id);
  if(unseen(q))return overview.mastery==='high'?8:7;
  return 6+Math.min(6,s.wrong*1.6)+(s.lastCorrect===false?2:0);
 },random);
 const used=new Set(priority.map(q=>q.id));
 const remaining=eligible.filter(q=>!used.has(q.id));
 const general=sampleWeighted(remaining,Math.max(0,count-priority.length),q=>{
  const s=map.get(q.id);
  if(!s.seen)return 6;
  if(weak(q))return 5+s.wrong;
  // Aciertos repetidos reducen peso, pero nunca excluyen repasos consolidados.
  return (s.lastCorrect===false?3:1.5)/(1+Math.min(5,s.streak)*.55);
 },random);
 return {questions:[...priority,...general],overview,prioritized:priority.length};
}
window.adaptiveStudy={analyze,summary,select,sampleWeighted,normalize};
})();