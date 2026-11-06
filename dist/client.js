window.__ModuleLoader__.load({id:"dsh-color-task-board",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Pe=Object.create;var W=Object.defineProperty;var $e=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Be=Object.getPrototypeOf,je=Object.prototype.hasOwnProperty;var Ue=(e,a)=>{for(var r in a)W(e,r,{get:a[r],enumerable:!0})},re=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of qe(a))!je.call(e,i)&&i!==r&&W(e,i,{get:()=>a[i],enumerable:!(o=$e(a,i))||o.enumerable});return e};var D=(e,a,r)=>(r=e!=null?Pe(Be(e)):{},re(a||!e||!e.__esModule?W(r,"default",{value:e,enumerable:!0}):r,e)),He=e=>re(W({},"__esModule",{value:!0}),e);var lt={};Ue(lt,{apply:()=>st,inject:()=>it});module.exports=He(lt);var Oe=D(require("react"),1);var t=D(require("react"),1);var ne=D(require("react"),1),F="task-board",Y={"Task board":"\u4EFB\u52A1\u770B\u677F",Todo:"\u5F85\u529E","In progress":"\u8FDB\u884C\u4E2D","In review":"\u5F85\u9A8C\u6536",Done:"\u5DF2\u5B8C\u6210","New task":"\u65B0\u5EFA\u4EFB\u52A1","Search cards":"\u641C\u7D22\u4EFB\u52A1",All:"\u5168\u90E8",Active:"\u8FDB\u884C\u4E2D","To review":"\u5F85\u9A8C\u6536","Clear done":"\u6E05\u7A7A\u5DF2\u5B8C\u6210","No cards yet":"\u8FD8\u6CA1\u6709\u4EFB\u52A1","Drop here":"\u653E\u5230\u8FD9\u91CC","Add a task":"\u6DFB\u52A0\u4EFB\u52A1",Run:"\u5F00\u59CB\u6267\u884C",Stop:"\u505C\u6B62","Open session":"\u6253\u5F00\u4F1A\u8BDD",Accept:"\u9A8C\u6536\u5B8C\u6210","Mark done":"\u6807\u8BB0\u5B8C\u6210","Back to todo":"\u9000\u56DE\u5F85\u529E",Rerun:"\u91CD\u65B0\u6267\u884C",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",Create:"\u521B\u5EFA\u4EFB\u52A1",Save:"\u4FDD\u5B58",Title:"\u6807\u9898","What needs to happen?":"\u8981\u505A\u4EC0\u4E48\uFF1F",Notes:"\u8BF4\u660E","Any details, links, or acceptance criteria.":"\u8865\u5145\u7EC6\u8282\u3001\u94FE\u63A5\u6216\u9A8C\u6536\u6807\u51C6\u3002",Tag:"\u6807\u7B7E",Column:"\u6240\u5728\u5217",Progress:"\u8FDB\u5EA6",Queued:"\u6392\u961F\u4E2D",Thinking:"\u601D\u8003\u4E2D","Running {name}":"\u6B63\u5728\u6267\u884C {name}","Writing result":"\u6574\u7406\u7ED3\u679C","Waiting for review":"\u7B49\u5F85\u9A8C\u6536","Run failed":"\u6267\u884C\u51FA\u9519",Stopped:"\u5DF2\u505C\u6B62","No session yet":"\u5C1A\u672A\u5206\u914D\u4F1A\u8BDD","Latest result":"\u6700\u65B0\u7ED3\u679C","No result yet.":"\u8FD8\u6CA1\u6709\u7ED3\u679C\u3002","A session is created the first time you run this card.":"\u7B2C\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u5F20\u5361\u521B\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u3002","From a session":"\u6765\u81EA\u4F1A\u8BDD",Session:"\u4F1A\u8BDD","Delete this card?":"\u786E\u5B9A\u5220\u9664\u8FD9\u5F20\u5361\u5417\uFF1F","Card deleted":"\u5DF2\u5220\u9664","Card added":"\u5DF2\u6DFB\u52A0","Dispatched to its session":"\u5DF2\u6D3E\u53D1\u5230\u4F1A\u8BDD","Stopped the run":"\u5DF2\u505C\u6B62\u6267\u884C","Card accepted":"\u5DF2\u9A8C\u6536","Done cards cleared":"\u5DF2\u6E05\u7A7A\u5B8C\u6210\u7684\u4EFB\u52A1","Just now":"\u521A\u521A","{n}m ago":"{n} \u5206\u949F\u524D","{n}h ago":"{n} \u5C0F\u65F6\u524D","{n}d ago":"{n} \u5929\u524D","Today is {date}":"\u4ECA\u5929\u662F {date}","{n} running":"{n} \u4E2A\u8FDB\u884C\u4E2D","{n} to review":"{n} \u4E2A\u5F85\u9A8C\u6536","Task board overview":"\u4EFB\u52A1\u770B\u677F\u6982\u89C8","Nothing matches this filter.":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002","Run this card now":"\u7ACB\u5373\u6267\u884C\u8FD9\u5F20\u5361",Details:"\u8BE6\u60C5",Close:"\u5173\u95ED",Created:"\u521B\u5EFA\u4E8E",Updated:"\u66F4\u65B0\u4E8E",Steps:"\u6B65\u9AA4","Session {id}":"\u4F1A\u8BDD {id}","{n} cards":"{n} \u5F20\u5361",Description:"\u8BF4\u660E","Delete twice to confirm":"\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664","Could not reach the board":"\u770B\u677F\u6682\u65F6\u4E0D\u53EF\u7528",Retry:"\u91CD\u8BD5","Loading board\u2026":"\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026","No tasks":"\u6CA1\u6709\u4EFB\u52A1",Automation:"\u81EA\u52A8\u5316",Off:"\u4E0D\u81EA\u52A8","On a schedule":"\u5B9A\u65F6\u6267\u884C",Hourly:"\u6BCF\u5C0F\u65F6",Daily:"\u6BCF\u5929",Weekly:"\u6BCF\u5468",Mon:"\u5468\u4E00",Tue:"\u5468\u4E8C",Wed:"\u5468\u4E09",Thu:"\u5468\u56DB",Fri:"\u5468\u4E94",Sat:"\u5468\u516D",Sun:"\u5468\u65E5",Days:"\u661F\u671F",Minute:"\u5206\u949F",Time:"\u65F6\u95F4","Every hour at :{minute}":"\u6BCF\u5C0F\u65F6 :{minute} \u5206","Daily at {time}":"\u6BCF\u5929 {time}","Weekly on {days} at {time}":"\u6BCF\u5468 {days} {time}","Custom schedule":"\u81EA\u5B9A\u4E49\u89C4\u5219",Scheduled:"\u5B9A\u65F6\u4E2D","The card runs on its own and lands in review with the latest result.":"\u5230\u70B9\u81EA\u52A8\u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u7ED3\u679C\u548C\u624B\u52A8\u6267\u884C\u4E00\u6837\u8FDB\u5165\u5F85\u9A8C\u6536\u3002",Paused:"\u5DF2\u6682\u505C",Pause:"\u6682\u505C",Resume:"\u542F\u7528","Edit rule":"\u4FEE\u6539\u89C4\u5219","Remove automation":"\u53D6\u6D88\u81EA\u52A8\u5316","Next run":"\u4E0B\u6B21\u6267\u884C","Last run":"\u4E0A\u6B21\u6267\u884C","No upcoming run":"\u6CA1\u6709\u540E\u7EED\u6267\u884C","Not run yet":"\u8FD8\u6CA1\u6709\u6267\u884C\u8FC7","This card only runs when you start it.":"\u672A\u8BBE\u7F6E\u81EA\u52A8\u5316\uFF0C\u53EA\u6709\u4F60\u624B\u52A8\u5F00\u59CB\u65F6\u624D\u4F1A\u6267\u884C\u3002","Make it automatic":"\u8BBE\u4E3A\u81EA\u52A8\u5316","Automation updated":"\u81EA\u52A8\u5316\u5DF2\u66F4\u65B0","Automation resumed":"\u81EA\u52A8\u5316\u5DF2\u542F\u7528","Automation paused":"\u81EA\u52A8\u5316\u5DF2\u6682\u505C","Automation removed":"\u81EA\u52A8\u5316\u5DF2\u53D6\u6D88"},Qe={"Task board":"Task board",Todo:"Todo","In progress":"In progress","In review":"In review",Done:"Done","New task":"New task","Search cards":"Search cards",All:"All",Active:"Active","To review":"To review","Clear done":"Clear done","No cards yet":"No cards yet","Drop here":"Drop here","Add a task":"Add a task",Run:"Run",Stop:"Stop","Open session":"Open session",Accept:"Accept","Mark done":"Mark done","Back to todo":"Back to todo",Rerun:"Rerun",Delete:"Delete",Cancel:"Cancel",Create:"Create task",Save:"Save",Title:"Title","What needs to happen?":"What needs to happen?",Notes:"Notes","Any details, links, or acceptance criteria.":"Any details, links, or acceptance criteria.",Tag:"Tag",Column:"Column",Progress:"Progress",Queued:"Queued",Thinking:"Thinking","Running {name}":"Running {name}","Writing result":"Writing result","Waiting for review":"Waiting for review","Run failed":"Run failed",Stopped:"Stopped","No session yet":"No session yet","Latest result":"Latest result","No result yet.":"No result yet.","A session is created the first time you run this card.":"A session is created the first time you run this card.","From a session":"From a session",Session:"Session","Delete this card?":"Delete this card?","Card deleted":"Card deleted","Card added":"Card added","Dispatched to its session":"Dispatched to its session","Stopped the run":"Stopped the run","Card accepted":"Card accepted","Done cards cleared":"Done cards cleared","Just now":"Just now","{n}m ago":"{n}m ago","{n}h ago":"{n}h ago","{n}d ago":"{n}d ago","Today is {date}":"Today is {date}","{n} running":"{n} running","{n} to review":"{n} to review","Task board overview":"Task board overview","Nothing matches this filter.":"Nothing matches this filter.","Run this card now":"Run this card now",Details:"Details",Close:"Close",Created:"Created",Updated:"Updated",Steps:"Steps","Session {id}":"Session {id}","{n} cards":"{n} cards",Description:"Description","Delete twice to confirm":"Click again to delete","Could not reach the board":"Could not reach the board",Retry:"Retry","Loading board\u2026":"Loading board\u2026","No tasks":"No tasks",Automation:"Automation",Off:"Off","On a schedule":"On a schedule",Hourly:"Hourly",Daily:"Daily",Weekly:"Weekly",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",Sun:"Sun",Days:"Days",Minute:"Minute",Time:"Time","Every hour at :{minute}":"Every hour at :{minute}","Daily at {time}":"Daily at {time}","Weekly on {days} at {time}":"Weekly on {days} at {time}","Custom schedule":"Custom schedule",Scheduled:"Scheduled","The card runs on its own and lands in review with the latest result.":"The card runs on its own and lands in review with the latest result.",Paused:"Paused",Pause:"Pause",Resume:"Resume","Edit rule":"Edit rule","Remove automation":"Remove automation","Next run":"Next run","Last run":"Last run","No upcoming run":"No upcoming run","Not run yet":"Not run yet","This card only runs when you start it.":"This card only runs when you start it.","Make it automatic":"Make it automatic","Automation updated":"Automation updated","Automation resumed":"Automation resumed","Automation paused":"Automation paused","Automation removed":"Automation removed"},T=null;function oe(e){T=e}function ie(e){return e.locale.register(F,{en:Qe,zh:Y,"zh-CN":Y,"zh-TW":Y})}function se(){return T}function O(){return ne.default.useSyncExternalStore(e=>T.locale.subscribe(e),()=>T.locale.getLocale().id,()=>"en"),T.locale.bind(F)}function I(){try{return T?.locale?.getLocale?.().id||"en"}catch{return"en"}}function P(e,a){if(!e)return"";let r=Math.max(0,Date.now()-e),o=Math.floor(r/6e4);if(o<1)return a("Just now");if(o<60)return a("{n}m ago",{n:o});let i=Math.floor(o/60);return i<24?a("{n}h ago",{n:i}):a("{n}d ago",{n:Math.floor(i/24)})}function K(e,a){if(!e)return"";try{return new Intl.DateTimeFormat(a||I(),{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return new Date(e).toLocaleString()}}var s=D(require("react"),1);function h({size:e=16,strokeWidth:a=1.9,children:r,...o}){return s.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...o},r)}var J=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M12 5v14M5 12h14"})),le=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M8 5.5v13l11-6.5-11-6.5z",fill:"currentColor",stroke:"none"})),ce=e=>s.default.createElement(h,e,s.default.createElement("rect",{x:7,y:7,width:10,height:10,rx:2,fill:"currentColor",stroke:"none"})),de=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M5 12.5l4.2 4.2L19 7"})),pe=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M4 7h16"}),s.default.createElement("path",{d:"M10 4h4l1 3H9l1-3z"}),s.default.createElement("path",{d:"M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7"}),s.default.createElement("path",{d:"M10 11v6M14 11v6"})),X=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M14 4h6v6"}),s.default.createElement("path",{d:"M20 4l-9 9"}),s.default.createElement("path",{d:"M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10"})),ue=e=>s.default.createElement(h,e,s.default.createElement("circle",{cx:11,cy:11,r:6.5}),s.default.createElement("path",{d:"M16 16l4 4"})),$=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));var q=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z"})),B=e=>s.default.createElement(h,e,s.default.createElement("circle",{cx:12,cy:12,r:8.5}),s.default.createElement("path",{d:"M12 7.5V12l3 2"})),be=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z"}),s.default.createElement("path",{d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"}));var me=e=>s.default.createElement(h,e,s.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 6.3"}),s.default.createElement("path",{d:"M20 5v6h-6"}));function ge({size:e=22,active:a=!1}){return s.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a?2.1:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},s.default.createElement("rect",{x:3,y:4,width:18,height:16,rx:3.4}),s.default.createElement("path",{d:"M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6"}))}function fe({size:e=26}){return s.default.createElement("span",{className:"tb-avatar",style:{width:e,height:e},"aria-hidden":"true"},s.default.createElement("svg",{width:e*.58,height:e*.58,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},s.default.createElement("path",{d:"M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z"})))}var xe=`/* \u4EFB\u52A1\u770B\u677F\u6837\u5F0F\uFF1A\u989C\u8272\u8D70 DSH \u8BED\u4E49 token\uFF0C\u5217\u4E0E\u5361\u7247\u7528\u4F4E\u9971\u548C\u5F69\u8272\u70B9\u7F00\u3002 */
.tb-root {
  --tb-ink: var(--dsw-alias-label-primary);
  --tb-ink2: var(--dsw-alias-label-secondary);
  --tb-line: var(--dsw-alias-border-l1);
  --tb-line2: var(--dsw-alias-border-l2);
  --tb-surface: var(--dsw-alias-bg-layer-1);
  --tb-overlay: var(--dsw-alias-bg-overlay);
  --tb-brand: var(--dsw-alias-brand-primary);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--dsw-alias-bg-base);
  color: var(--tb-ink);
  font-size: 14px;
  line-height: 22px;
  -webkit-font-smoothing: antialiased;
}
.tb-root *,
.tb-root *::before,
.tb-root *::after { box-sizing: border-box; }
.tb-root :is(button, input, textarea, select) { font: inherit; color: inherit; }
.tb-root :is(h1, h2, h3, h4, p, pre) { margin: 0; }
.tb-root :is(button) { border: 0; background: none; cursor: pointer; }
.tb-root :is(button):disabled { cursor: default; opacity: .55; }
.tb-root :focus-visible { outline: 2px solid var(--tb-brand); outline-offset: 2px; }
.tb-spacer { flex: 1; min-width: 0; }

/* \u80CC\u666F\u6C1B\u56F4 */
.tb-ambient { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.tb-ambient i { position: absolute; border-radius: 50%; filter: blur(70px); opacity: .55; }
.tb-ambient i:nth-child(1) { width: 46vw; height: 46vw; left: -14vw; top: -20vw; background: radial-gradient(circle, #b7c6ff 0%, transparent 66%); }
.tb-ambient i:nth-child(2) { width: 40vw; height: 40vw; right: -10vw; top: -16vw; background: radial-gradient(circle, #ffc3d8 0%, transparent 66%); }
.tb-ambient i:nth-child(3) { width: 44vw; height: 44vw; left: 28vw; bottom: -30vw; background: radial-gradient(circle, #bdeed9 0%, transparent 68%); }
.tb-root { background-color: var(--dsw-alias-bg-base); }

/* \u9875\u5934 */
.tb-head {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
  padding: 24px 26px 16px;
  flex-wrap: wrap;
}
.tb-head-title { display: flex; gap: 15px; align-items: flex-start; min-width: 0; }
.tb-kicker {
  padding-top: 9px;
  min-width: 46px;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--tb-ink2);
}
.tb-head h1 { font-size: 25px; line-height: 32px; font-weight: 650; letter-spacing: -.015em; }
.tb-head p { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 3px; font-size: 12.5px; line-height: 18px; color: var(--tb-ink2); }
.tb-sep { opacity: .48; }
.tb-head-tools { display: flex; align-items: center; gap: 9px; flex-wrap: wrap; }

.tb-search {
  display: flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 11px;
  min-width: 180px;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 76%, transparent);
  color: var(--tb-ink2);
  transition: border-color .16s ease, box-shadow .16s ease;
}
.tb-search:focus-within { border-color: color-mix(in srgb, var(--tb-brand) 45%, var(--tb-line)); box-shadow: 0 0 0 3px color-mix(in srgb, var(--tb-brand) 13%, transparent); }
.tb-search input { flex: 1; min-width: 0; border: 0; background: none; outline: none; font-size: 12.5px; color: var(--tb-ink); }
.tb-search input::placeholder { color: color-mix(in srgb, var(--tb-ink2) 82%, transparent); }
.tb-search-clear { display: grid; place-items: center; width: 18px; height: 18px; border-radius: 50%; color: var(--tb-ink2); }
.tb-search-clear:hover { background: color-mix(in srgb, var(--tb-ink) 9%, transparent); color: var(--tb-ink); }

.tb-filters {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 70%, transparent);
}
.tb-filters button {
  height: 28px;
  padding: 0 11px;
  border-radius: 9px;
  font-size: 12px;
  color: var(--tb-ink2);
  transition: background .16s ease, color .16s ease;
}
.tb-filters button:hover { color: var(--tb-ink); }
.tb-filters button.is-on {
  background: var(--tb-overlay);
  color: var(--tb-ink);
  box-shadow: 0 1px 2px color-mix(in srgb, #191539 12%, transparent), 0 0 0 1px color-mix(in srgb, var(--tb-line) 90%, transparent);
}

.tb-primary {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  padding: 0 16px;
  border-radius: 12px;
  background: var(--tb-ink);
  color: var(--dsw-alias-bg-base);
  font-size: 12.5px;
  font-weight: 600;
  box-shadow: 0 10px 22px -14px color-mix(in srgb, #171233 70%, transparent);
  transition: transform .16s ease, box-shadow .16s ease, opacity .16s ease;
}
.tb-primary:hover { transform: translateY(-1px); box-shadow: 0 14px 26px -14px color-mix(in srgb, #171233 75%, transparent); }
.tb-primary:active { transform: translateY(0); }

/* \u770B\u677F */
.tb-board-wrap { position: relative; z-index: 1; flex: 1; min-height: 0; display: flex; flex-direction: column; padding: 0 26px 24px; }
.tb-board {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(212px, 1fr));
  gap: 13px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2px;
}
.tb-col {
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid color-mix(in srgb, var(--tb-accent) 17%, var(--tb-line));
  background: color-mix(in srgb, var(--tb-surface) 93%, var(--tb-accent));
  transition: background .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.tb-col.is-over {
  border-color: color-mix(in srgb, var(--tb-accent) 48%, transparent);
  background: color-mix(in srgb, var(--tb-surface) 85%, var(--tb-accent));
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--tb-accent) 26%, transparent);
}
.tb-col-head { display: flex; align-items: center; gap: 7px; padding: 9px 9px 8px; }
.tb-col-head h2 { font-size: 12.5px; font-weight: 600; letter-spacing: .01em; white-space: nowrap; }
.tb-col-dot {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: var(--tb-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--tb-accent) 22%, transparent);
}
.tb-col-count {
  min-width: 19px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tb-accent) 15%, transparent);
  color: color-mix(in srgb, var(--tb-accent) 55%, var(--tb-ink));
  font-size: 10.5px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
}
.tb-col-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 1px 5px 7px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
}
.tb-col-body::-webkit-scrollbar { width: 7px; }
.tb-col-body::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--tb-ink) 14%, transparent); border-radius: 99px; }
.tb-col-body::-webkit-scrollbar-track { background: transparent; }
.tb-empty {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  border-radius: 14px;
  border: 1px dashed color-mix(in srgb, var(--tb-accent) 28%, transparent);
  color: color-mix(in srgb, var(--tb-ink2) 78%, transparent);
  font-size: 11px;
}

/* \u5361\u7247 */
.tb-card {
  flex: none;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 12px 9px;
  border-radius: 15px;
  border: 1px solid color-mix(in srgb, var(--tb-line) 82%, transparent);
  background: var(--dsw-alias-bg-base);
  box-shadow: 0 1px 2px color-mix(in srgb, #191539 5%, transparent), 0 14px 26px -24px color-mix(in srgb, #191539 60%, transparent);
  cursor: pointer;
  transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
}
.tb-card:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--tb-accent) 34%, var(--tb-line));
  box-shadow: 0 2px 4px color-mix(in srgb, #191539 6%, transparent), 0 18px 30px -22px color-mix(in srgb, #191539 62%, transparent);
}
.tb-card:active { transform: translateY(0); }
.tb-card.is-dragging { opacity: .45; cursor: grabbing; }
.tb-card-chips { display: flex; flex-wrap: wrap; gap: 5px; }
.tb-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 20px;
  padding: 0 7px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--tb-accent) 15%, var(--tb-surface));
  color: color-mix(in srgb, var(--tb-accent) 58%, var(--tb-ink));
  font-size: 10.5px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: .01em;
}
.tb-chip.is-quiet {
  background: color-mix(in srgb, var(--tb-ink2) 10%, transparent);
  color: var(--tb-ink2);
  font-weight: 500;
}
.tb-card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: -.005em;
  color: var(--tb-ink);
}
.tb-card-note {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 11.5px;
  line-height: 17px;
  color: var(--tb-ink2);
}
.tb-card-live { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--tb-ink2); }
.tb-steps { opacity: .7; }
.tb-pulse {
  width: 7px;
  height: 7px;
  flex: none;
  border-radius: 50%;
  background: var(--tb-accent);
  animation: tb-pulse 1.9s cubic-bezier(.4, 0, .6, 1) infinite;
}
@keyframes tb-pulse {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--tb-accent) 55%, transparent); }
  70% { box-shadow: 0 0 0 6px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
.tb-card-progress { display: flex; flex-direction: column; gap: 5px; }
.tb-progress-top { display: flex; align-items: baseline; justify-content: space-between; font-size: 10.5px; color: var(--tb-ink2); }
.tb-progress-top b { font-size: 11px; font-weight: 600; color: color-mix(in srgb, var(--tb-ink) 88%, var(--tb-ink2)); }
.tb-dots { display: flex; gap: 4px; }
.tb-dots span {
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tb-ink) 10%, transparent);
  transition: background .3s ease;
}
.tb-dots span.is-on { background: var(--tb-accent); }
.tb-card-foot { display: flex; align-items: center; gap: 5px; margin-top: 1px; }
.tb-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: 50%;
  background: color-mix(in srgb, var(--tb-accent) 20%, var(--tb-surface));
  color: color-mix(in srgb, var(--tb-accent) 62%, var(--tb-ink));
}
.tb-time { font-size: 10.5px; color: color-mix(in srgb, var(--tb-ink2) 88%, transparent); }

.tb-iconbtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex: none;
  border-radius: 8px;
  color: var(--tb-ink2);
  transition: background .15s ease, color .15s ease;
}
.tb-iconbtn:hover { background: color-mix(in srgb, var(--tb-ink) 8%, transparent); color: var(--tb-ink); }
.tb-iconbtn.is-danger:hover { background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, transparent); color: var(--dsw-alias-state-error-primary); }

/* \u72B6\u6001\u3001\u6309\u94AE\u3001\u8868\u5355 */
.tb-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 13px;
  border-radius: 10px;
  border: 1px solid var(--tb-line2);
  background: transparent;
  color: var(--tb-ink);
  font-size: 12.5px;
  font-weight: 550;
  white-space: nowrap;
  transition: background .15s ease, border-color .15s ease, opacity .15s ease;
}
.tb-btn:hover { background: color-mix(in srgb, var(--tb-ink) 6%, transparent); }
.tb-btn.is-primary { background: var(--tb-ink); border-color: transparent; color: var(--dsw-alias-bg-base); }
.tb-btn.is-primary:hover { opacity: .9; background: var(--tb-ink); }
.tb-btn.is-danger { border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 34%, transparent); color: var(--dsw-alias-state-error-primary); }
.tb-btn.is-danger:hover, .tb-btn.is-danger.is-armed { background: var(--dsw-alias-state-error-primary); color: #fff; border-color: transparent; }
.tb-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tb-accent) 15%, transparent);
  color: color-mix(in srgb, var(--tb-accent) 55%, var(--tb-ink));
  font-size: 11px;
  font-weight: 600;
}
.tb-status i { width: 6px; height: 6px; border-radius: 50%; background: var(--tb-accent); }

/* \u5F39\u5C42 */
.tb-scrim {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
  background: color-mix(in srgb, #12102a 32%, transparent);
  backdrop-filter: blur(6px);
  animation: tb-fade .18s ease both;
}
.tb-scrim.is-side { align-items: stretch; justify-content: flex-end; padding: 12px; }
.tb-dialog, .tb-sheet {
  display: flex;
  flex-direction: column;
  min-height: 0;
  border-radius: 20px;
  border: 1px solid var(--tb-line);
  background: var(--tb-overlay);
  box-shadow: 0 44px 90px -42px color-mix(in srgb, #100c28 70%, transparent);
}
.tb-dialog { width: min(520px, 100%); max-height: min(86vh, 780px); animation: tb-pop .2s cubic-bezier(.2, .8, .2, 1) both; }
.tb-sheet { width: min(468px, 100%); animation: tb-slide .24s cubic-bezier(.2, .8, .2, 1) both; }
.tb-dialog-head { display: flex; align-items: center; gap: 10px; padding: 17px 18px 11px 20px; }
.tb-dialog-head h2 { flex: 1; min-width: 0; font-size: 15.5px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tb-dialog-body { flex: 1; min-height: 0; overflow-y: auto; padding: 3px 20px 20px; }
.tb-dialog-foot {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 13px 18px;
  border-top: 1px solid var(--tb-line);
}
.tb-form { display: flex; flex-direction: column; gap: 13px; }
.tb-form .tb-dialog-foot { margin: 6px -20px -20px; padding: 13px 20px; }
.tb-field { display: flex; flex-direction: column; gap: 6px; font-size: 11.5px; color: var(--tb-ink2); }
.tb-field input, .tb-field textarea, .tb-field select {
  width: 100%;
  padding: 9px 11px;
  border-radius: 10px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 62%, transparent);
  font-size: 13px;
  line-height: 19px;
  color: var(--tb-ink);
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;
}
.tb-field textarea { resize: vertical; min-height: 76px; }
.tb-field input:focus, .tb-field textarea:focus, .tb-field select:focus {
  border-color: color-mix(in srgb, var(--tb-brand) 55%, var(--tb-line));
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--tb-brand) 13%, transparent);
}
.tb-field-row { display: grid; grid-template-columns: 1fr 1.35fr; gap: 12px; align-items: start; }
.tb-seg { display: flex; flex-wrap: wrap; gap: 4px; padding-top: 1px; }
.tb-seg button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 31px;
  padding: 0 9px;
  border-radius: 8px;
  border: 1px solid var(--tb-line);
  color: var(--tb-ink2);
  font-size: 11px;
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
.tb-seg button i { width: 6px; height: 6px; border-radius: 50%; background: var(--tb-accent); }
.tb-seg button.is-on {
  border-color: color-mix(in srgb, var(--tb-accent) 42%, transparent);
  background: color-mix(in srgb, var(--tb-accent) 12%, transparent);
  color: var(--tb-ink);
}
.tb-tagrow { display: flex; flex-wrap: wrap; gap: 5px; }
.tb-tagchip { padding: 3px 8px; border-radius: 6px; background: color-mix(in srgb, var(--tb-ink) 7%, transparent); font-size: 10.5px; color: var(--tb-ink2); }
.tb-tagchip:hover { background: color-mix(in srgb, var(--tb-ink) 12%, transparent); color: var(--tb-ink); }

/* \u8BE6\u60C5 */
.tb-detail { display: flex; flex-direction: column; gap: 17px; }
.tb-detail-chips { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; }
.tb-block h4 { margin-bottom: 8px; font-size: 10.5px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--tb-ink2); }
.tb-bar { height: 6px; margin-top: 8px; border-radius: 999px; background: color-mix(in srgb, var(--tb-ink) 9%, transparent); overflow: hidden; }
.tb-bar i { display: block; height: 100%; border-radius: inherit; background: var(--tb-accent, var(--tb-brand)); transition: width .45s ease; }
.tb-prose { white-space: pre-wrap; font-size: 12.5px; line-height: 20px; }
.tb-result {
  padding: 11px 12px;
  max-height: 300px;
  overflow: auto;
  border-radius: 11px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 66%, transparent);
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  font-size: 11.5px;
  line-height: 18px;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--tb-ink);
}
.tb-error {
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: 9px;
  background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);
  color: var(--dsw-alias-state-error-primary);
  font-size: 11.5px;
  line-height: 17px;
  white-space: pre-wrap;
}
.tb-session { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.tb-session code { padding: 3px 8px; border-radius: 7px; background: color-mix(in srgb, var(--tb-ink) 7%, transparent); font-size: 11px; }
.tb-muted { font-size: 12px; line-height: 19px; color: var(--tb-ink2); }
.tb-meta { font-size: 10.5px; color: var(--tb-ink2); opacity: .8; }

/* \u53CD\u9988 */
.tb-toast {
  position: fixed;
  left: 50%;
  bottom: 26px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 15px;
  border-radius: 999px;
  border: 1px solid var(--tb-line);
  background: var(--tb-overlay);
  box-shadow: 0 22px 44px -22px color-mix(in srgb, #100c28 55%, transparent);
  font-size: 12px;
  transform: translateX(-50%);
  animation: tb-toast-in .22s cubic-bezier(.2, .8, .2, 1) both;
}
.tb-toast.is-error { color: var(--dsw-alias-state-error-primary); }
.tb-fail { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; color: var(--tb-ink2); font-size: 12.5px; }
.tb-fail span { font-size: 11.5px; opacity: .8; }
.tb-loading { flex: 1; display: grid; place-items: center; color: var(--tb-ink2); font-size: 12.5px; }
.tb-none { padding: 12px 4px 0; font-size: 11.5px; color: var(--tb-ink2); }

.tb-root.is-narrow .tb-head { flex-direction: column; align-items: flex-start; }
.tb-root.is-narrow .tb-head-tools { width: 100%; }
.tb-root.is-narrow .tb-search { flex: 1; min-width: 140px; }

@keyframes tb-fade { from { opacity: 0; } }
@keyframes tb-pop { from { opacity: 0; transform: translateY(8px) scale(.985); } }
@keyframes tb-slide { from { opacity: 0; transform: translateX(18px); } }
@keyframes tb-toast-in { from { opacity: 0; transform: translate(-50%, 8px); } }

@media (prefers-reduced-motion: reduce) {
  .tb-root *, .tb-root *::before, .tb-root *::after { animation-duration: .001ms !important; transition-duration: .001ms !important; }
}

/* \u81EA\u52A8\u5316\uFF1A\u5361\u4E0A\u7684\u5B9A\u65F6\u5FBD\u6807\u3001\u65B0\u5EFA\u4E0E\u8BE6\u60C5\u91CC\u7684\u89C4\u5219\u7F16\u8F91\u5668 */
.tb-chip.is-time {
  background: color-mix(in srgb, var(--tb-brand) 14%, var(--tb-surface));
  color: color-mix(in srgb, var(--tb-brand) 72%, var(--tb-ink));
  font-weight: 600;
}
.tb-chip.is-muted { opacity: .55; }
.tb-auto-field { gap: 7px; }
.tb-auto-editor {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 11px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 55%, transparent);
}
.tb-auto-time { max-width: 148px; }
.tb-weekdays { display: flex; flex-wrap: wrap; gap: 4px; }
.tb-weekdays button {
  min-width: 34px;
  height: 28px;
  padding: 0 7px;
  border-radius: 8px;
  border: 1px solid var(--tb-line);
  color: var(--tb-ink2);
  font-size: 11px;
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
.tb-weekdays button.is-on {
  border-color: color-mix(in srgb, var(--tb-brand) 42%, transparent);
  background: color-mix(in srgb, var(--tb-brand) 13%, transparent);
  color: var(--tb-ink);
}
.tb-hint { font-size: 10.5px; line-height: 16px; color: var(--tb-ink2); opacity: .85; }
.tb-auto-block { display: flex; flex-direction: column; gap: 9px; }
.tb-auto-head { display: flex; align-items: center; gap: 8px; }
.tb-auto-head h4 { margin-bottom: 0; }
.tb-auto-state {
  padding: 2px 7px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--tb-ink2) 12%, transparent);
  color: var(--tb-ink2);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .02em;
}
.tb-auto-state.is-live {
  background: color-mix(in srgb, #74cbaa 20%, transparent);
  color: color-mix(in srgb, #3f9c7c 82%, var(--tb-ink));
}
.tb-auto-rule {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  line-height: 18px;
  color: var(--tb-ink);
}
.tb-auto-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  margin: 0;
  font-size: 11.5px;
  line-height: 17px;
}
.tb-auto-meta dt { color: var(--tb-ink2); }
.tb-auto-meta dd { margin: 0; color: var(--tb-ink); }
.tb-auto-actions { display: flex; flex-wrap: wrap; gap: 7px; }
.tb-auto-actions .tb-btn { height: 30px; padding: 0 11px; font-size: 11.5px; }
`;var ve=D(require("react"),1),Ke="/task-board",ye=["todo","doing","review","done"],k={tasks:[],columns:ye,revision:-1,stamp:"",loaded:!1,error:null,filter:"all",query:"",dialog:null,detailId:null,toast:null,dragging:null},_=new Set;function he(){return k}function v(e){k={...k,...typeof e=="function"?e(k):e},_.forEach(a=>a())}function Je(e){return _.add(e),()=>_.delete(e)}function we(){return ve.default.useSyncExternalStore(Je,he,he)}async function Ee(e,a){let r=await fetch(Ke+e,{cache:"no-store",...a,headers:{...a?.body?{"content-type":"application/json"}:{},...a?.headers||{}}}),o=await r.json().catch(()=>({}));if(!r.ok)throw new Error(o?.error||`HTTP ${r.status}`);return o}function f(e,{error:a=!1}={}){v({toast:{text:e,error:a,key:Date.now()}})}async function j(){try{let e=await Ee("/state"),a=e?.revision??0,r=`${a}:${e?.schedulesRevision??""}`;return k.loaded&&r===k.stamp&&!k.error||v({tasks:Array.isArray(e?.tasks)?e.tasks:[],columns:Array.isArray(e?.columns)&&e.columns.length?e.columns:ye,revision:a,stamp:r,loaded:!0,error:null}),!0}catch(e){return v({loaded:!0,error:e?.message||String(e)}),!1}}async function N(e,a={}){try{let r=await Ee("/op",{method:"POST",body:JSON.stringify({op:e,...a})});if(r?.state){let o=r.state.revision??k.revision;v({tasks:Array.isArray(r.state.tasks)?r.state.tasks:k.tasks,revision:o,stamp:`${o}:${r.state.schedulesRevision??""}`,loaded:!0,error:null})}if(!r?.ok)throw new Error(r?.error||"\u64CD\u4F5C\u5931\u8D25");return r}catch(r){return f(r?.message||String(r),{error:!0}),null}}var x={add:e=>N("add",e),update:(e,a)=>N("update",{id:e,...a}),move:(e,a)=>N("move",{id:e,column:a}),dispatch:e=>N("dispatch",{id:e}),stop:e=>N("stop",{id:e}),accept:e=>N("accept",{id:e}),remove:e=>N("remove",{id:e}),clearDone:()=>N("clearDone")};function ke(e){v({filter:e})}function Z(e){v({query:e})}function V(e="todo"){v({dialog:{column:e}})}function U(){v({dialog:null})}function G(e){v({detailId:e})}function M(){v({detailId:null})}var m=D(require("react"),1);function S({icon:e,label:a,onClick:r,disabled:o=!1,tone:i="",className:l=""}){return m.default.createElement("button",{type:"button",className:`tb-iconbtn ${i?`is-${i}`:""} ${l}`.trim(),onClick:g=>{g.stopPropagation(),r?.(g)},disabled:o,title:a,"aria-label":a},m.default.createElement(e,{size:16}))}function Ne({value:e=0,segments:a=10}){let r=Math.round(Math.max(0,Math.min(100,e))/100*a);return m.default.createElement("div",{className:"tb-dots",role:"img","aria-label":`${e}%`},Array.from({length:a},(o,i)=>m.default.createElement("span",{key:i,className:i<r?"is-on":""})))}function Se({column:e,label:a,accent:r}){return m.default.createElement("span",{className:"tb-status",style:r?{"--tb-accent":r}:void 0},m.default.createElement("i",null),a)}function ee({title:e,onClose:a,children:r,footer:o,width:i=480,side:l=!1}){let g=O(),n=m.default.useId();return m.default.useEffect(()=>{let u=c=>{c.key==="Escape"&&(c.stopPropagation(),a())};return window.addEventListener("keydown",u,!0),()=>window.removeEventListener("keydown",u,!0)},[a]),m.default.createElement("div",{className:l?"tb-scrim is-side":"tb-scrim",onPointerDown:u=>{u.target===u.currentTarget&&a()}},m.default.createElement("div",{className:l?"tb-sheet":"tb-dialog",role:"dialog","aria-modal":"true","aria-labelledby":n,style:{width:l?void 0:i}},m.default.createElement("header",{className:"tb-dialog-head"},m.default.createElement("h2",{id:n},e),m.default.createElement(S,{icon:$,label:g("Close"),onClick:a})),m.default.createElement("div",{className:"tb-dialog-body"},r),o?m.default.createElement("footer",{className:"tb-dialog-foot"},o):null))}function Ce({toast:e,onClose:a}){let r=m.default.useRef(a);return r.current=a,m.default.useEffect(()=>{if(!e)return;let o=setTimeout(()=>r.current(),e.error?4200:2600);return()=>clearTimeout(o)},[e]),e?m.default.createElement("div",{className:`tb-toast ${e.error?"is-error":""}`,role:"status",key:e.key},e.error?null:m.default.createElement(de,{size:15}),m.default.createElement("span",null,e.text)):null}var A={todo:{key:"Todo",accent:"#8ea6f4"},doing:{key:"In progress",accent:"#f0b07c"},review:{key:"In review",accent:"#ef93b7"},done:{key:"Done",accent:"#74cbaa"}},Xe=[{id:"all",key:"All"},{id:"active",key:"Active"},{id:"review",key:"To review"}],De=["MO","TU","WE","TH","FR","SA","SU"],Te={MO:"Mon",TU:"Tue",WE:"Wed",TH:"Thu",FR:"Fri",SA:"Sat",SU:"Sun"},_e=[{id:"hourly",key:"Hourly"},{id:"daily",key:"Daily"},{id:"weekly",key:"Weekly"}],Ze=["00","05","10","15","20","25","30","35","40","45","50","55"];function Ve(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function Ae(){let e=new Date().getDay();return["SU","MO","TU","WE","TH","FR","SA"][e]||"MO"}function Ge(e){let a=Number(String(e||"09:00").slice(3,5))||0;return String(Math.round(a/5)*5%60).padStart(2,"0")}function te(e,a){if(!e)return"";let r=e.time||"09:00";if(e.frequency==="hourly")return a("Every hour at :{minute}",{minute:r.slice(3,5)});if(e.frequency==="weekly"){let o=e.weekdays?.length?e.weekdays:["MO"];return a("Weekly on {days} at {time}",{days:o.map(i=>a(Te[i])).join(" "),time:r})}return e.frequency==="daily"?a("Daily at {time}",{time:r}):e.rrule?a("Custom schedule"):a("Scheduled")}function ze(e){return{frequency:e.frequency,time:e.time,weekdays:e.frequency==="weekly"?e.weekdays:[],timeZone:Ve()}}function ae(){return{frequency:"daily",time:"09:00",weekdays:[Ae()]}}function Ie({t:e,value:a,onChange:r}){let o=a.frequency||"daily",i=Array.isArray(a.weekdays)?a.weekdays:[],l=n=>{let u=i.includes(n)?i.filter(c=>c!==n):[...i,n];r({weekdays:u.length?De.filter(c=>u.includes(c)):[]})},g=n=>{r(n==="hourly"?{frequency:n,time:`00:${Ge(a.time)}`}:{frequency:n,time:o==="hourly"?"09:00":a.time||"09:00"})};return t.default.createElement("div",{className:"tb-auto-editor"},t.default.createElement("div",{className:"tb-seg"},_e.map(n=>t.default.createElement("button",{key:n.id,type:"button",className:o===n.id?"is-on":"",onClick:()=>g(n.id)},e(n.key)))),o==="weekly"?t.default.createElement("div",{className:"tb-weekdays",role:"group","aria-label":e("Days")},De.map(n=>t.default.createElement("button",{key:n,type:"button",className:i.includes(n)?"is-on":"","aria-pressed":i.includes(n),onClick:()=>l(n)},e(Te[n])))):null,o==="hourly"?t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Minute")),t.default.createElement("select",{value:String(a.time||"00:00").slice(3,5),onChange:n=>r({time:`00:${n.target.value}`})},Ze.map(n=>t.default.createElement("option",{key:n,value:n},`:${n}`)))):t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Time")),t.default.createElement("input",{type:"time",value:a.time||"09:00",onChange:n=>r({time:n.target.value||"09:00"})})),t.default.createElement("p",{className:"tb-hint"},e("The card runs on its own and lands in review with the latest result.")))}function Me(e){return typeof e.running=="boolean"?e.running:e.column==="doing"}function Re(e,a){switch(e.phase){case"queued":return a("Queued");case"thinking":return a("Thinking");case"tool":return a("Running {name}",{name:e.toolName||"tool"});case"writing":return a("Writing result");case"review":return a("Waiting for review");case"error":return a("Run failed");case"stopped":return a("Stopped");default:return""}}function Le(e){if(e)try{let a=se()?.get("uiWorkspace");a?.openSession?a.openSession(e):f("This deployment cannot open sessions",{error:!0})}catch(a){f(a?.message||String(a),{error:!0})}}function et({task:e,t:a}){let r=Me(e),o=A[e.column]?.accent,i=Re(e,a);return t.default.createElement("article",{className:`tb-card ${r?"is-running":""}`,draggable:!0,style:{"--tb-accent":o},tabIndex:0,"aria-label":e.title,onClick:()=>G(e.id),onKeyDown:l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),G(e.id))},onDragStart:l=>{l.dataTransfer.effectAllowed="move",l.dataTransfer.setData("text/task-id",e.id),l.currentTarget.classList.add("is-dragging")},onDragEnd:l=>l.currentTarget.classList.remove("is-dragging")},t.default.createElement("div",{className:"tb-card-chips"},e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.automation?t.default.createElement("span",{className:`tb-chip is-time ${e.automation.active?"":"is-muted"}`,title:te(e.automation,a)},t.default.createElement(B,{size:11}),te(e.automation,a)):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(q,{size:11}),a("From a session")):e.sessionId?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(q,{size:11}),a("Session")):null),t.default.createElement("h3",{className:"tb-card-title"},e.title),e.note?t.default.createElement("p",{className:"tb-card-note"},e.note):null,r?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,i),e.steps?t.default.createElement("span",{className:"tb-steps"},`\xB7 ${e.steps}`):null):null,t.default.createElement("div",{className:"tb-card-progress"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement(Ne,{value:e.progress})),t.default.createElement("footer",{className:"tb-card-foot"},t.default.createElement(fe,{size:24}),t.default.createElement("span",{className:"tb-time"},P(e.updatedAt,a)),t.default.createElement("span",{className:"tb-spacer"}),e.sessionId?t.default.createElement(S,{icon:X,label:a("Open session"),onClick:()=>Le(e.sessionId)}):null,r?t.default.createElement(S,{icon:ce,label:a("Stop"),onClick:async()=>{await x.stop(e.id)&&f(a("Stopped the run"))}}):t.default.createElement(S,{icon:le,label:e.sessionId?a("Rerun"):a("Run"),onClick:async()=>{await x.dispatch(e.id)&&f(a("Dispatched to its session"))}})))}function tt({column:e,tasks:a,total:r,t:o}){let i=A[e],[l,g]=t.default.useState(!1);return t.default.createElement("section",{className:`tb-col ${l?"is-over":""}`,"data-column":e,style:{"--tb-accent":i.accent},onDragOver:n=>{n.preventDefault(),n.dataTransfer.dropEffect="move",l||g(!0)},onDragLeave:n=>{n.currentTarget.contains(n.relatedTarget)||g(!1)},onDrop:n=>{n.preventDefault(),g(!1);let u=n.dataTransfer.getData("text/task-id");u&&x.move(u,e)}},t.default.createElement("header",{className:"tb-col-head"},t.default.createElement("span",{className:"tb-col-dot"}),t.default.createElement("h2",null,o(i.key)),t.default.createElement("span",{className:"tb-col-count"},r),t.default.createElement("span",{className:"tb-spacer"}),e==="done"&&r?t.default.createElement(S,{icon:pe,label:o("Clear done"),onClick:async()=>{await x.clearDone()&&f(o("Done cards cleared"))}}):null,t.default.createElement(S,{icon:J,label:o("Add a task"),onClick:()=>V(e)})),t.default.createElement("div",{className:"tb-col-body"},a.map(n=>t.default.createElement(et,{key:n.id,task:n,t:o})),r===0?t.default.createElement("div",{className:"tb-empty"},o("No cards yet")):null))}function at({t:e,tasks:a,query:r,filter:o}){let i=new Date,l=I(),g="",n="";try{g=new Intl.DateTimeFormat(l,{month:"long"}).format(i),n=new Intl.DateTimeFormat(l,{month:"long",day:"numeric",weekday:"long"}).format(i)}catch{g="",n=i.toDateString()}let u=a.filter(p=>p.column==="doing").length,c=a.filter(p=>p.column==="review").length;return t.default.createElement("header",{className:"tb-head"},t.default.createElement("div",{className:"tb-head-title"},t.default.createElement("span",{className:"tb-kicker"},g),t.default.createElement("div",null,t.default.createElement("h1",null,e("Task board")),t.default.createElement("p",null,e("Today is {date}",{date:n}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} running",{n:u}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} to review",{n:c})))),t.default.createElement("div",{className:"tb-head-tools"},t.default.createElement("label",{className:"tb-search"},t.default.createElement(ue,{size:15}),t.default.createElement("input",{type:"search",value:r,placeholder:e("Search cards"),"aria-label":e("Search cards"),onChange:p=>Z(p.target.value)}),r?t.default.createElement("button",{type:"button",className:"tb-search-clear","aria-label":e("Close"),onClick:()=>Z("")},t.default.createElement($,{size:13})):null),t.default.createElement("div",{className:"tb-filters",role:"group","aria-label":e("Task board overview")},Xe.map(p=>t.default.createElement("button",{key:p.id,type:"button",className:o===p.id?"is-on":"","aria-pressed":o===p.id,onClick:()=>ke(p.id)},e(p.key)))),t.default.createElement("button",{type:"button",className:"tb-primary",onClick:()=>V("todo")},t.default.createElement(J,{size:15}),e("New task"))))}function rt({t:e,defaultColumn:a,tags:r}){let[o,i]=t.default.useState(""),[l,g]=t.default.useState(""),[n,u]=t.default.useState(""),[c,p]=t.default.useState(a||"todo"),[y,E]=t.default.useState(!1),[C,H]=t.default.useState(ae),[z,R]=t.default.useState(!1),L=t.default.useRef(null);t.default.useEffect(()=>{L.current?.focus()},[]);let Q=async b=>{if(b.preventDefault(),!o.trim()||z)return;R(!0);let d={title:o,note:l,tag:n,column:c};y&&(d.automation=ze(C));let w=await x.add(d);R(!1),w&&(U(),w.warning?f(w.warning,{error:!0}):f(e("Card added")))};return t.default.createElement("form",{className:"tb-form",onSubmit:Q,id:"tb-add-form"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Title")),t.default.createElement("input",{ref:L,value:o,required:!0,maxLength:200,placeholder:e("What needs to happen?"),onChange:b=>i(b.target.value)})),t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Notes")),t.default.createElement("textarea",{rows:3,value:l,maxLength:4e3,placeholder:e("Any details, links, or acceptance criteria."),onChange:b=>g(b.target.value)})),t.default.createElement("div",{className:"tb-field-row"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Tag")),t.default.createElement("input",{value:n,maxLength:24,placeholder:e("Tag"),onChange:b=>u(b.target.value)})),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Column")),t.default.createElement("div",{className:"tb-seg"},Object.keys(A).map(b=>t.default.createElement("button",{key:b,type:"button",className:c===b?"is-on":"",style:{"--tb-accent":A[b].accent},onClick:()=>p(b)},t.default.createElement("i"),e(A[b].key)))))),r.length?t.default.createElement("div",{className:"tb-tagrow"},r.slice(0,6).map(b=>t.default.createElement("button",{key:b,type:"button",className:"tb-tagchip",onClick:()=>u(b)},`#${b}`))):null,t.default.createElement("div",{className:"tb-field tb-auto-field"},t.default.createElement("span",null,e("Automation")),t.default.createElement("div",{className:"tb-seg"},t.default.createElement("button",{type:"button",className:y?"":"is-on",onClick:()=>E(!1)},e("Off")),t.default.createElement("button",{type:"button",className:y?"is-on":"",onClick:()=>E(!0)},t.default.createElement(B,{size:12}),e("On a schedule")))),y?t.default.createElement(Ie,{t:e,value:C,onChange:b=>H(d=>({...d,...b}))}):null,t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:U},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:z||!o.trim()},e("Create"))))}function nt({task:e,t:a}){let[r,o]=t.default.useState(!1),[i,l]=t.default.useState(!1),[g,n]=t.default.useState(!1),[u,c]=t.default.useState(!1),[p,y]=t.default.useState(ae);t.default.useEffect(()=>{o(!1),l(!1),n(!1)},[e.id]);let E=A[e.column],C=Me(e),H=Re(e,a),z=()=>{let d=e.automation;y(d?{frequency:d.frequency==="custom"?"daily":d.frequency,time:d.time||"09:00",weekdays:Array.isArray(d.weekdays)&&d.weekdays.length?[...d.weekdays]:[Ae()]}:ae()),n(!0)},R=async()=>{if(u)return;c(!0);let d=await x.update(e.id,{automation:ze(p)});c(!1),d&&(n(!1),f(d.warning?d.warning:a("Automation updated"),{error:!!d.warning}))},L=async()=>{if(!e.automation)return;let d=!e.automation.active,w=await x.update(e.id,{automation:{active:d}});w&&(w.warning?f(w.warning,{error:!0}):f(a(d?"Automation resumed":"Automation paused")))},Q=async()=>{if(!i){l(!0);return}let d=await x.update(e.id,{automation:{frequency:"none"}});d&&(l(!1),d.warning?f(d.warning,{error:!0}):f(a("Automation removed")))},b=async()=>{if(!r){o(!0);return}M(),await x.remove(e.id)&&f(a("Card deleted"))};return t.default.createElement(ee,{side:!0,title:e.title,onClose:M,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${r?"is-armed":""}`,onClick:b},a(r?"Delete twice to confirm":"Delete")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:async()=>{await x.move(e.id,"todo")&&M()}},a("Back to todo")),e.column==="done"?null:t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{if(C){await x.stop(e.id)&&f(a("Stopped the run"));return}await x.dispatch(e.id)&&f(a("Dispatched to its session"))}},C?a("Stop"):e.sessionId?a("Rerun"):a("Run")),e.column==="review"?t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{await x.accept(e.id)&&(f(a("Card accepted")),M())}},a("Accept")):null)},t.default.createElement("div",{className:"tb-detail"},t.default.createElement("div",{className:"tb-detail-chips"},t.default.createElement(Se,{column:e.column,label:a(E.key),accent:E.accent}),e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(q,{size:11}),a("From a session")):null),C?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,H),e.steps?t.default.createElement("span",{className:"tb-steps"},`${a("Steps")} \xB7 ${e.steps}`):null):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement("div",{className:"tb-bar"},t.default.createElement("i",{style:{width:`${e.progress}%`}}))),e.note?t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Description")),t.default.createElement("p",{className:"tb-prose"},e.note)):null,t.default.createElement("section",{className:"tb-block tb-auto-block"},t.default.createElement("div",{className:"tb-auto-head"},t.default.createElement("h4",null,a("Automation")),e.automation?t.default.createElement("span",{className:`tb-auto-state ${e.automation.active?"is-live":""}`},e.automation.active?a("Scheduled"):a("Paused")):null),g?t.default.createElement(t.default.Fragment,null,t.default.createElement(Ie,{t:a,value:p,onChange:d=>y(w=>({...w,...d}))}),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>n(!1)},a("Cancel")),t.default.createElement("button",{type:"button",className:"tb-btn is-primary",disabled:u,onClick:R},a("Save")))):e.automation?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"tb-auto-rule"},t.default.createElement(B,{size:14}),t.default.createElement("span",null,te(e.automation,a))),t.default.createElement("dl",{className:"tb-auto-meta"},t.default.createElement("dt",null,a("Next run")),t.default.createElement("dd",null,e.automation.runtime?.nextAt?K(e.automation.runtime.nextAt,I()):a("No upcoming run")),t.default.createElement("dt",null,a("Last run")),t.default.createElement("dd",null,e.automation.lastFiredAt?P(e.automation.lastFiredAt,a):a("Not run yet"))),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:L},e.automation.active?a("Pause"):a("Resume")),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:z},a("Edit rule")),t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${i?"is-armed":""}`,onClick:Q},a(i?"Delete twice to confirm":"Remove automation")))):t.default.createElement(t.default.Fragment,null,t.default.createElement("p",{className:"tb-muted"},a("This card only runs when you start it.")),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:z},t.default.createElement(be,{size:13}),a("Make it automatic"))))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Session")),e.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.sessionId.slice(0,8)),t.default.createElement(S,{icon:X,label:a("Open session"),onClick:()=>Le(e.sessionId)})):t.default.createElement("p",{className:"tb-muted"},a("No session yet")," ",a("A session is created the first time you run this card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Latest result")),e.result?t.default.createElement("pre",{className:"tb-result"},e.result):t.default.createElement("p",{className:"tb-muted"},a("No result yet.")),e.error?t.default.createElement("p",{className:"tb-error"},e.error):null),t.default.createElement("div",{className:"tb-meta"},a("Created")," ",K(e.createdAt,I())," \xB7 ",a("Updated")," ",P(e.updatedAt,a))))}function We(){let e=O(),a=we(),r=t.default.useRef(null),[o,i]=t.default.useState(1200);t.default.useEffect(()=>{j();let c=setInterval(()=>{document.visibilityState==="visible"&&j()},2500);return()=>clearInterval(c)},[]),t.default.useEffect(()=>{let c=r.current;if(!c)return;let p=new ResizeObserver(([y])=>i(y.contentRect.width));return p.observe(c),()=>p.disconnect()},[]);let l=a.detailId?a.tasks.find(c=>c.id===a.detailId):null,g=[...new Set(a.tasks.map(c=>c.tag).filter(Boolean))],n=a.query.trim().toLowerCase(),u=a.tasks.filter(c=>a.filter==="active"&&c.column!=="doing"||a.filter==="review"&&c.column!=="review"?!1:n?[c.title,c.note,c.tag].some(p=>String(p||"").toLowerCase().includes(n)):!0);return t.default.createElement("div",{className:`tb-root ${o<980?"is-narrow":""}`,ref:r},t.default.createElement("style",null,xe),t.default.createElement("div",{className:"tb-ambient","aria-hidden":"true"},t.default.createElement("i"),t.default.createElement("i"),t.default.createElement("i")),t.default.createElement(at,{t:e,tasks:a.tasks,query:a.query,filter:a.filter}),a.error&&!a.loaded?t.default.createElement("div",{className:"tb-fail"},t.default.createElement("p",null,e("Could not reach the board")),t.default.createElement("span",null,a.error),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>j()},t.default.createElement(me,{size:14}),e("Retry"))):a.loaded?t.default.createElement("div",{className:"tb-board-wrap"},t.default.createElement("div",{className:"tb-board"},a.columns.map(c=>{let p=u.filter(E=>E.column===c),y=a.tasks.filter(E=>E.column===c).length;return t.default.createElement(tt,{key:c,column:c,tasks:p,total:y,t:e})})),a.tasks.length>0&&u.length===0?t.default.createElement("p",{className:"tb-none"},e("Nothing matches this filter.")):null):t.default.createElement("div",{className:"tb-loading"},e("Loading board\u2026")),a.dialog?t.default.createElement(ee,{title:e("New task"),onClose:U,width:520},t.default.createElement(rt,{t:e,defaultColumn:a.dialog.column,tags:g})):null,l?t.default.createElement(nt,{task:l,t:e}):null,t.default.createElement(Ce,{toast:a.toast,onClose:()=>v({toast:null})}))}var Fe="task-board";function ot({size:e=22,active:a=!1}){return Oe.default.createElement(ge,{size:e,active:a})}var it=["slots","locale"];function st(e){oe(e),e.effect(()=>ie(e),"task-board: locale");let a=e.locale.bind(F);e.slots.inject("main",()=>e.slots.register({name:"main",key:Fe},We)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Fe,order:12,label:()=>a("Task board")},ot))}
return module.exports}})
