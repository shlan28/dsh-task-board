window.__ModuleLoader__.load({id:"dsh-color-task-board",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var nt=Object.create;var Q=Object.defineProperty;var ot=Object.getOwnPropertyDescriptor;var it=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,lt=Object.prototype.hasOwnProperty;var ct=(e,a)=>{for(var r in a)Q(e,r,{get:a[r],enumerable:!0})},ge=(e,a,r,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of it(a))!lt.call(e,i)&&i!==r&&Q(e,i,{get:()=>a[i],enumerable:!(n=ot(a,i))||n.enumerable});return e};var $=(e,a,r)=>(r=e!=null?nt(st(e)):{},ge(a||!e||!e.__esModule?Q(r,"default",{value:e,enumerable:!0}):r,e)),dt=e=>ge(Q({},"__esModule",{value:!0}),e);var Rt={};ct(Rt,{apply:()=>It,inject:()=>Tt});module.exports=dt(Rt);var at=$(require("react"),1);var t=$(require("react"),1);var he=$(require("react"),1),Y="task-board",ne={"Task board":"\u4EFB\u52A1\u770B\u677F",Todo:"\u5F85\u529E","In progress":"\u8FDB\u884C\u4E2D","In review":"\u5F85\u9A8C\u6536",Done:"\u5DF2\u5B8C\u6210","New task":"\u65B0\u5EFA\u4EFB\u52A1","Search cards":"\u641C\u7D22\u4EFB\u52A1",All:"\u5168\u90E8",Active:"\u8FDB\u884C\u4E2D","To review":"\u5F85\u9A8C\u6536","Clear done":"\u6E05\u7A7A\u5DF2\u5B8C\u6210","No cards yet":"\u8FD8\u6CA1\u6709\u4EFB\u52A1","Drop here":"\u653E\u5230\u8FD9\u91CC","Add a task":"\u6DFB\u52A0\u4EFB\u52A1",Run:"\u5F00\u59CB\u6267\u884C",Stop:"\u505C\u6B62","Open session":"\u6253\u5F00\u4F1A\u8BDD",Accept:"\u9A8C\u6536\u5B8C\u6210","Accept this run":"\u9A8C\u6536\u672C\u8F6E\uFF0C\u56DE\u5F85\u529E","Mark done":"\u6807\u8BB0\u5B8C\u6210","Back to todo":"\u9000\u56DE\u5F85\u529E",Rerun:"\u91CD\u65B0\u6267\u884C",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",Create:"\u521B\u5EFA\u4EFB\u52A1",Save:"\u4FDD\u5B58",Title:"\u6807\u9898","What needs to happen?":"\u8981\u505A\u4EC0\u4E48\uFF1F",Notes:"\u8BF4\u660E","Any details, links, or acceptance criteria.":"\u8865\u5145\u7EC6\u8282\u3001\u94FE\u63A5\u6216\u9A8C\u6536\u6807\u51C6\u3002",Tag:"\u6807\u7B7E",Column:"\u6240\u5728\u5217",Progress:"\u8FDB\u5EA6",Queued:"\u6392\u961F\u4E2D",Thinking:"\u601D\u8003\u4E2D","Running {name}":"\u6B63\u5728\u6267\u884C {name}","Writing result":"\u6574\u7406\u7ED3\u679C","Waiting for review":"\u7B49\u5F85\u9A8C\u6536","Run failed":"\u6267\u884C\u51FA\u9519",Stopped:"\u5DF2\u505C\u6B62","No session yet":"\u5C1A\u672A\u5206\u914D\u4F1A\u8BDD","Latest result":"\u6700\u65B0\u7ED3\u679C","No result yet.":"\u8FD8\u6CA1\u6709\u7ED3\u679C\u3002","A session is created the first time you run this card.":"\u7B2C\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u5F20\u5361\u521B\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u3002","From a session":"\u6765\u81EA\u4F1A\u8BDD",Session:"\u4F1A\u8BDD",Workspace:"\u5DE5\u4F5C\u533A","Default directory":"\u9ED8\u8BA4\u76EE\u5F55","Removed workspace":"\u5DF2\u79FB\u9664","Workspace updated":"\u5DE5\u4F5C\u533A\u5DF2\u66F4\u65B0","A new session starts in this workspace when you start the card.":"\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u5728\u9009\u4E2D\u7684\u5DE5\u4F5C\u533A\u91CC\u65B0\u5EFA\u4F1A\u8BDD\u3002","Scheduled runs start here too.":"\u5B9A\u65F6\u6267\u884C\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5DE5\u4F5C\u533A\u91CC\u542F\u52A8\u3002","Delete this card?":"\u786E\u5B9A\u5220\u9664\u8FD9\u5F20\u5361\u5417\uFF1F","Card deleted":"\u5DF2\u5220\u9664","Card added":"\u5DF2\u6DFB\u52A0","Dispatched to its session":"\u5DF2\u6D3E\u53D1\u5230\u4F1A\u8BDD","Stopped the run":"\u5DF2\u505C\u6B62\u6267\u884C","Card accepted":"\u5DF2\u9A8C\u6536","Accepted, back to todo":"\u5DF2\u9A8C\u6536\uFF0C\u56DE\u5230\u5F85\u529E\u7B49\u4E0B\u4E00\u8F6E","Done cards cleared":"\u5DF2\u6E05\u7A7A\u5B8C\u6210\u7684\u4EFB\u52A1","Just now":"\u521A\u521A","{n}m ago":"{n} \u5206\u949F\u524D","{n}h ago":"{n} \u5C0F\u65F6\u524D","{n}d ago":"{n} \u5929\u524D","Today is {date}":"\u4ECA\u5929\u662F {date}","{n} running":"{n} \u4E2A\u8FDB\u884C\u4E2D","{n} to review":"{n} \u4E2A\u5F85\u9A8C\u6536","Task board overview":"\u4EFB\u52A1\u770B\u677F\u6982\u89C8","Nothing matches this filter.":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002","Run this card now":"\u7ACB\u5373\u6267\u884C\u8FD9\u5F20\u5361",Details:"\u8BE6\u60C5",Close:"\u5173\u95ED",Created:"\u521B\u5EFA\u4E8E",Updated:"\u66F4\u65B0\u4E8E",Steps:"\u6B65\u9AA4","Session {id}":"\u4F1A\u8BDD {id}","{n} cards":"{n} \u5F20\u5361",Description:"\u8BF4\u660E","Delete twice to confirm":"\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664","Could not reach the board":"\u770B\u677F\u6682\u65F6\u4E0D\u53EF\u7528",Retry:"\u91CD\u8BD5","Loading board\u2026":"\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026","No tasks":"\u6CA1\u6709\u4EFB\u52A1",Automation:"\u81EA\u52A8\u5316",Off:"\u4E0D\u81EA\u52A8","On a schedule":"\u5B9A\u65F6\u6267\u884C",Hourly:"\u6BCF\u5C0F\u65F6",Daily:"\u6BCF\u5929",Weekly:"\u6BCF\u5468",Mon:"\u5468\u4E00",Tue:"\u5468\u4E8C",Wed:"\u5468\u4E09",Thu:"\u5468\u56DB",Fri:"\u5468\u4E94",Sat:"\u5468\u516D",Sun:"\u5468\u65E5",Days:"\u661F\u671F",Minute:"\u5206\u949F",Time:"\u65F6\u95F4","Every hour at :{minute}":"\u6BCF\u5C0F\u65F6 :{minute} \u5206","Daily at {time}":"\u6BCF\u5929 {time}","Weekly on {days} at {time}":"\u6BCF\u5468 {days} {time}","Custom schedule":"\u81EA\u5B9A\u4E49\u89C4\u5219",Scheduled:"\u5B9A\u65F6\u4E2D","The card runs on its own and lands in review with the latest result.":"\u5230\u70B9\u81EA\u52A8\u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u7ED3\u679C\u8FDB\u5165\u5F85\u9A8C\u6536\uFF1B\u9A8C\u6536\u540E\u56DE\u5230\u5F85\u529E\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u3002",Paused:"\u5DF2\u6682\u505C",Pause:"\u6682\u505C",Resume:"\u542F\u7528","Edit rule":"\u4FEE\u6539\u89C4\u5219","Remove automation":"\u53D6\u6D88\u81EA\u52A8\u5316","Next run":"\u4E0B\u6B21\u6267\u884C","Last run":"\u4E0A\u6B21\u6267\u884C","No upcoming run":"\u6CA1\u6709\u540E\u7EED\u6267\u884C","Not run yet":"\u8FD8\u6CA1\u6709\u6267\u884C\u8FC7","This card only runs when you start it.":"\u672A\u8BBE\u7F6E\u81EA\u52A8\u5316\uFF0C\u53EA\u6709\u4F60\u624B\u52A8\u5F00\u59CB\u65F6\u624D\u4F1A\u6267\u884C\u3002","Make it automatic":"\u8BBE\u4E3A\u81EA\u52A8\u5316","Automation updated":"\u81EA\u52A8\u5316\u5DF2\u66F4\u65B0","Automation resumed":"\u81EA\u52A8\u5316\u5DF2\u542F\u7528","Automation paused":"\u81EA\u52A8\u5316\u5DF2\u6682\u505C","Automation removed":"\u81EA\u52A8\u5316\u5DF2\u53D6\u6D88","Default space":"\u9ED8\u8BA4\u7A7A\u95F4","Switch space":"\u5207\u6362\u7A7A\u95F4",Spaces:"\u7A7A\u95F4","Space name":"\u7A7A\u95F4\u540D\u79F0","New space":"\u65B0\u5EFA\u7A7A\u95F4","Create space":"\u521B\u5EFA\u7A7A\u95F4","Delete space":"\u5220\u9664\u7A7A\u95F4","e.g. Work":"\u4F8B\u5982\uFF1A\u5DE5\u4F5C","Cards in different spaces stay separate.":"\u4E0D\u540C\u7A7A\u95F4\u7684\u5361\u7247\u4E92\u4E0D\u5E72\u6270\uFF0C\u5207\u6362\u7A7A\u95F4\u540E\u53EA\u770B\u5F97\u5230\u5F53\u524D\u7A7A\u95F4\u7684\u4EFB\u52A1\u3002","Space created":"\u7A7A\u95F4\u5DF2\u521B\u5EFA","Space deleted":"\u7A7A\u95F4\u5DF2\u5220\u9664","Delete the space {name}?":"\u786E\u5B9A\u5220\u9664\u7A7A\u95F4\u300C{name}\u300D\uFF1F","Its {n} cards move to the default space.":"\u8FD9\u4E2A\u7A7A\u95F4\u91CC\u7684 {n} \u5F20\u5361\u7247\u4F1A\u79FB\u5230\u9ED8\u8BA4\u7A7A\u95F4\uFF0C\u4E0D\u4F1A\u4E22\u5931\u3002"},pt={"Task board":"Task board",Todo:"Todo","In progress":"In progress","In review":"In review",Done:"Done","New task":"New task","Search cards":"Search cards",All:"All",Active:"Active","To review":"To review","Clear done":"Clear done","No cards yet":"No cards yet","Drop here":"Drop here","Add a task":"Add a task",Run:"Run",Stop:"Stop","Open session":"Open session",Accept:"Accept","Mark done":"Mark done","Back to todo":"Back to todo",Rerun:"Rerun",Delete:"Delete",Cancel:"Cancel",Create:"Create task",Save:"Save",Title:"Title","What needs to happen?":"What needs to happen?",Notes:"Notes","Any details, links, or acceptance criteria.":"Any details, links, or acceptance criteria.",Tag:"Tag",Column:"Column",Progress:"Progress",Queued:"Queued",Thinking:"Thinking","Running {name}":"Running {name}","Writing result":"Writing result","Waiting for review":"Waiting for review","Run failed":"Run failed",Stopped:"Stopped","No session yet":"No session yet","Latest result":"Latest result","No result yet.":"No result yet.","A session is created the first time you run this card.":"A session is created the first time you run this card.","From a session":"From a session",Session:"Session",Workspace:"Workspace","Default directory":"Default directory","Removed workspace":"removed","Workspace updated":"Workspace updated","A new session starts in this workspace when you start the card.":"A new session starts in this workspace when you start the card.","Scheduled runs start here too.":"Scheduled runs start here too.","Delete this card?":"Delete this card?","Card deleted":"Card deleted","Card added":"Card added","Dispatched to its session":"Dispatched to its session","Stopped the run":"Stopped the run","Card accepted":"Card accepted","Accept this run":"Accept this run","Accepted, back to todo":"Accepted, back to todo","Done cards cleared":"Done cards cleared","Just now":"Just now","{n}m ago":"{n}m ago","{n}h ago":"{n}h ago","{n}d ago":"{n}d ago","Today is {date}":"Today is {date}","{n} running":"{n} running","{n} to review":"{n} to review","Task board overview":"Task board overview","Nothing matches this filter.":"Nothing matches this filter.","Run this card now":"Run this card now",Details:"Details",Close:"Close",Created:"Created",Updated:"Updated",Steps:"Steps","Session {id}":"Session {id}","{n} cards":"{n} cards",Description:"Description","Delete twice to confirm":"Click again to delete","Could not reach the board":"Could not reach the board",Retry:"Retry","Loading board\u2026":"Loading board\u2026","No tasks":"No tasks",Automation:"Automation",Off:"Off","On a schedule":"On a schedule",Hourly:"Hourly",Daily:"Daily",Weekly:"Weekly",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",Sun:"Sun",Days:"Days",Minute:"Minute",Time:"Time","Every hour at :{minute}":"Every hour at :{minute}","Daily at {time}":"Daily at {time}","Weekly on {days} at {time}":"Weekly on {days} at {time}","Custom schedule":"Custom schedule",Scheduled:"Scheduled","The card runs on its own and lands in review with the latest result.":"The card runs on its own and lands in review with the latest result.",Paused:"Paused",Pause:"Pause",Resume:"Resume","Edit rule":"Edit rule","Remove automation":"Remove automation","Next run":"Next run","Last run":"Last run","No upcoming run":"No upcoming run","Not run yet":"Not run yet","This card only runs when you start it.":"This card only runs when you start it.","Make it automatic":"Make it automatic","Automation updated":"Automation updated","Automation resumed":"Automation resumed","Automation paused":"Automation paused","Automation removed":"Automation removed","Default space":"Default space","Switch space":"Switch space",Spaces:"Spaces","Space name":"Space name","New space":"New space","Create space":"Create space","Delete space":"Delete space","e.g. Work":"e.g. Work","Cards in different spaces stay separate.":"Cards in different spaces stay separate; switching shows only that space.","Space created":"Space created","Space deleted":"Space deleted","Delete the space {name}?":"Delete the space {name}?","Its {n} cards move to the default space.":"Its {n} cards move to the default space."},F=null;function xe(e){F=e}function ve(e){return e.locale.register(Y,{en:pt,zh:ne,"zh-CN":ne,"zh-TW":ne})}function ye(){return F}function J(){return he.default.useSyncExternalStore(e=>F.locale.subscribe(e),()=>F.locale.getLocale().id,()=>"en"),F.locale.bind(Y)}function B(){try{return F?.locale?.getLocale?.().id||"en"}catch{return"en"}}function X(e,a){if(!e)return"";let r=Math.max(0,Date.now()-e),n=Math.floor(r/6e4);if(n<1)return a("Just now");if(n<60)return a("{n}m ago",{n});let i=Math.floor(n/60);return i<24?a("{n}h ago",{n:i}):a("{n}d ago",{n:Math.floor(i/24)})}function oe(e,a){if(!e)return"";try{return new Intl.DateTimeFormat(a||B(),{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return new Date(e).toLocaleString()}}var l=$(require("react"),1);function N({size:e=16,strokeWidth:a=1.9,children:r,...n}){return l.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...n},r)}var Z=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M12 5v14M5 12h14"})),we=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M8 5.5v13l11-6.5-11-6.5z",fill:"currentColor",stroke:"none"})),ke=e=>l.default.createElement(N,e,l.default.createElement("rect",{x:7,y:7,width:10,height:10,rx:2,fill:"currentColor",stroke:"none"})),Ee=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M5 12.5l4.2 4.2L19 7"})),ie=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M4 7h16"}),l.default.createElement("path",{d:"M10 4h4l1 3H9l1-3z"}),l.default.createElement("path",{d:"M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7"}),l.default.createElement("path",{d:"M10 11v6M14 11v6"})),se=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M14 4h6v6"}),l.default.createElement("path",{d:"M20 4l-9 9"}),l.default.createElement("path",{d:"M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10"})),Ne=e=>l.default.createElement(N,e,l.default.createElement("circle",{cx:11,cy:11,r:6.5}),l.default.createElement("path",{d:"M16 16l4 4"})),V=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));var G=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z"})),Se=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M3.5 7.5a2 2 0 012-2h3.2l1.8 2h6.5a2 2 0 012 2v8a2 2 0 01-2 2h-11.5a2 2 0 01-2-2v-10z"})),ee=e=>l.default.createElement(N,e,l.default.createElement("circle",{cx:12,cy:12,r:8.5}),l.default.createElement("path",{d:"M12 7.5V12l3 2"})),Ce=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z"}),l.default.createElement("path",{d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"})),De=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M9 6l6 6-6 6"})),Ae=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M12 3.6l8.4 4.2-8.4 4.2-8.4-4.2 8.4-4.2z"}),l.default.createElement("path",{d:"M4.2 12l7.8 3.9 7.8-3.9"}),l.default.createElement("path",{d:"M4.2 16.2l7.8 3.9 7.8-3.9"})),Te=e=>l.default.createElement(N,e,l.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 6.3"}),l.default.createElement("path",{d:"M20 5v6h-6"}));function Ie({size:e=22,active:a=!1}){return l.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a?2.1:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},l.default.createElement("rect",{x:3,y:4,width:18,height:16,rx:3.4}),l.default.createElement("path",{d:"M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6"}))}function Re({size:e=26}){return l.default.createElement("span",{className:"tb-avatar",style:{width:e,height:e},"aria-hidden":"true"},l.default.createElement("svg",{width:e*.58,height:e*.58,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l.default.createElement("path",{d:"M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z"})))}var ze=`/* \u4EFB\u52A1\u770B\u677F\u6837\u5F0F\uFF1A\u989C\u8272\u8D70 DSH \u8BED\u4E49 token\uFF0C\u5217\u4E0E\u5361\u7247\u7528\u4F4E\u9971\u548C\u5F69\u8272\u70B9\u7F00\u3002 */
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
.tb-workspace { gap: 7px; }
.tb-workspace-path {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  font-size: 10.5px;
  line-height: 16px;
  color: var(--tb-ink2);
  word-break: break-all;
}
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

/* \u7A7A\u95F4\u4E0B\u62C9\uFF1A\u9875\u5934\u5207\u6362\u3001\u83DC\u5355\u4E0E\u5220\u9664\u786E\u8BA4 */
.tb-space { position: relative; }
.tb-space-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  max-width: 210px;
  padding: 0 9px 0 11px;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 76%, transparent);
  color: var(--tb-ink);
  font-size: 12.5px;
  font-weight: 600;
  transition: border-color .16s ease, background .16s ease;
}
.tb-space-btn:hover, .tb-space-btn.is-open { border-color: color-mix(in srgb, var(--tb-brand) 38%, var(--tb-line)); }
.tb-space-name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tb-space-count {
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tb-ink) 8%, transparent);
  color: var(--tb-ink2);
  font-size: 10.5px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
}
.tb-space-caret { color: var(--tb-ink2); transform: rotate(90deg); transition: transform .16s ease; }
.tb-space-btn.is-open .tb-space-caret { transform: rotate(-90deg); }
.tb-space-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 7px);
  z-index: 45;
  width: 258px;
  padding: 5px;
  border-radius: 14px;
  border: 1px solid var(--tb-line);
  background: var(--tb-overlay);
  box-shadow: 0 30px 60px -30px color-mix(in srgb, #100c28 62%, transparent);
  animation: tb-pop .16s cubic-bezier(.2, .8, .2, 1) both;
}
.tb-space-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 7px 8px;
  border-radius: 9px;
  color: var(--tb-ink2);
  font-size: 12.5px;
  cursor: pointer;
}
.tb-space-item:hover { background: color-mix(in srgb, var(--tb-ink) 7%, transparent); color: var(--tb-ink); }
.tb-space-item.is-on { background: color-mix(in srgb, var(--tb-brand) 12%, transparent); color: var(--tb-ink); font-weight: 600; }
.tb-space-item-name { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tb-space-item-count { font-size: 10.5px; color: color-mix(in srgb, var(--tb-ink2) 80%, transparent); }
.tb-space-del {
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  flex: none;
  border-radius: 6px;
  color: var(--tb-ink2);
  opacity: .65;
}
.tb-space-del:hover { opacity: 1; background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 14%, transparent); color: var(--dsw-alias-state-error-primary); }
.tb-space-sep { height: 1px; margin: 5px 6px; background: var(--tb-line); }
.tb-space-new { display: flex; align-items: center; gap: 7px; width: 100%; padding: 8px; border-radius: 9px; color: var(--tb-ink2); font-size: 12px; }
.tb-space-new:hover { background: color-mix(in srgb, var(--tb-ink) 7%, transparent); color: var(--tb-ink); }
.tb-root.is-narrow .tb-space-menu { right: auto; left: 0; }
.tb-confirm { display: flex; flex-direction: column; gap: 8px; padding-bottom: 4px; }
`;var Le=$(require("react"),1),mt="/task-board",We=["todo","doing","review","done"],M="default",k={tasks:[],columns:We,revision:-1,stamp:"",loaded:!1,error:null,filter:"all",query:"",dialog:null,detailId:null,toast:null,dragging:null,spaces:[],activeSpaceId:"",spacesRevision:"",workspaces:[],defaultWorkspacePath:"",workspacesRevision:""},le=new Set;function Me(){return k}function S(e){k={...k,...typeof e=="function"?e(k):e},le.forEach(a=>a())}function bt(e){return le.add(e),()=>le.delete(e)}function Pe(){return Le.default.useSyncExternalStore(bt,Me,Me)}async function $e(e,a){let r=await fetch(mt+e,{cache:"no-store",...a,headers:{...a?.body?{"content-type":"application/json"}:{},...a?.headers||{}}}),n=await r.json().catch(()=>({}));if(!r.ok)throw new Error(n?.error||`HTTP ${r.status}`);return n}function h(e,{error:a=!1}={}){S({toast:{text:e,error:a,key:Date.now()}})}async function te(){try{let e=await $e("/state"),a=e?.revision??0,r=`${a}:${e?.schedulesRevision??""}:${e?.workspacesRevision??""}:${e?.spacesRevision??""}`;return k.loaded&&r===k.stamp&&!k.error||S({tasks:Array.isArray(e?.tasks)?e.tasks:[],columns:Array.isArray(e?.columns)&&e.columns.length?e.columns:We,spaces:Array.isArray(e?.spaces)?e.spaces:[],activeSpaceId:typeof e?.activeSpaceId=="string"?e.activeSpaceId:"",spacesRevision:typeof e?.spacesRevision=="string"?e.spacesRevision:"",workspaces:Array.isArray(e?.workspaces)?e.workspaces:[],defaultWorkspacePath:typeof e?.defaultWorkspacePath=="string"?e.defaultWorkspacePath:"",workspacesRevision:typeof e?.workspacesRevision=="string"?e.workspacesRevision:"",revision:a,stamp:r,loaded:!0,error:null}),!0}catch(e){return S({loaded:!0,error:e?.message||String(e)}),!1}}async function D(e,a={}){try{let r=await $e("/op",{method:"POST",body:JSON.stringify({op:e,...a})});if(r?.state){let n=r.state.revision??k.revision;S({tasks:Array.isArray(r.state.tasks)?r.state.tasks:k.tasks,spaces:Array.isArray(r.state.spaces)?r.state.spaces:k.spaces,activeSpaceId:typeof r.state.activeSpaceId=="string"?r.state.activeSpaceId:k.activeSpaceId,spacesRevision:typeof r.state.spacesRevision=="string"?r.state.spacesRevision:k.spacesRevision,workspaces:Array.isArray(r.state.workspaces)?r.state.workspaces:k.workspaces,defaultWorkspacePath:typeof r.state.defaultWorkspacePath=="string"?r.state.defaultWorkspacePath:k.defaultWorkspacePath,workspacesRevision:typeof r.state.workspacesRevision=="string"?r.state.workspacesRevision:k.workspacesRevision,revision:n,stamp:`${n}:${r.state.schedulesRevision??""}:${r.state.workspacesRevision??""}:${r.state.spacesRevision??""}`,loaded:!0,error:null})}if(!r?.ok)throw new Error(r?.error||"\u64CD\u4F5C\u5931\u8D25");return r}catch(r){return h(r?.message||String(r),{error:!0}),null}}var y={add:e=>D("add",e),update:(e,a)=>D("update",{id:e,...a}),move:(e,a)=>D("move",{id:e,column:a}),dispatch:e=>D("dispatch",{id:e}),stop:e=>D("stop",{id:e}),accept:e=>D("accept",{id:e}),remove:e=>D("remove",{id:e}),clearDone:e=>D("clearDone",e?{spaceId:e}:{}),addSpace:e=>D("addSpace",{name:e}),removeSpace:e=>D("removeSpace",{id:e}),selectSpace:e=>D("selectSpace",{id:e})};async function Fe(e){return!e||k.activeSpaceId===e?null:(S({detailId:null}),y.selectSpace(e))}function Oe(e){S({filter:e})}function ce(e){S({query:e})}function de(e="todo"){S({dialog:{kind:"task",column:e}})}function qe(){S({dialog:{kind:"space"}})}function Be(e){S({dialog:{kind:"remove-space",id:e}})}function T(){S({dialog:null})}function pe(e){S({detailId:e})}function j(){S({detailId:null})}var x=$(require("react"),1);function L({icon:e,label:a,onClick:r,disabled:n=!1,tone:i="",className:s=""}){return x.default.createElement("button",{type:"button",className:`tb-iconbtn ${i?`is-${i}`:""} ${s}`.trim(),onClick:m=>{m.stopPropagation(),r?.(m)},disabled:n,title:a,"aria-label":a},x.default.createElement(e,{size:16}))}function je({value:e=0,segments:a=10}){let r=Math.round(Math.max(0,Math.min(100,e))/100*a);return x.default.createElement("div",{className:"tb-dots",role:"img","aria-label":`${e}%`},Array.from({length:a},(n,i)=>x.default.createElement("span",{key:i,className:i<r?"is-on":""})))}function Ue({column:e,label:a,accent:r}){return x.default.createElement("span",{className:"tb-status",style:r?{"--tb-accent":r}:void 0},x.default.createElement("i",null),a)}function U({title:e,onClose:a,children:r,footer:n,width:i=480,side:s=!1}){let m=J(),o=x.default.useId();return x.default.useEffect(()=>{let c=b=>{b.key==="Escape"&&(b.stopPropagation(),a())};return window.addEventListener("keydown",c,!0),()=>window.removeEventListener("keydown",c,!0)},[a]),x.default.createElement("div",{className:s?"tb-scrim is-side":"tb-scrim",onPointerDown:c=>{c.target===c.currentTarget&&a()}},x.default.createElement("div",{className:s?"tb-sheet":"tb-dialog",role:"dialog","aria-modal":"true","aria-labelledby":o,style:{width:s?void 0:i}},x.default.createElement("header",{className:"tb-dialog-head"},x.default.createElement("h2",{id:o},e),x.default.createElement(L,{icon:V,label:m("Close"),onClick:a})),x.default.createElement("div",{className:"tb-dialog-body"},r),n?x.default.createElement("footer",{className:"tb-dialog-foot"},n):null))}function He({toast:e,onClose:a}){let r=x.default.useRef(a);return r.current=a,x.default.useEffect(()=>{if(!e)return;let n=setTimeout(()=>r.current(),e.error?4200:2600);return()=>clearTimeout(n)},[e]),e?x.default.createElement("div",{className:`tb-toast ${e.error?"is-error":""}`,role:"status",key:e.key},e.error?null:x.default.createElement(Ee,{size:15}),x.default.createElement("span",null,e.text)):null}var O={todo:{key:"Todo",accent:"#8ea6f4"},doing:{key:"In progress",accent:"#f0b07c"},review:{key:"In review",accent:"#ef93b7"},done:{key:"Done",accent:"#74cbaa"}},ft=[{id:"all",key:"All"},{id:"active",key:"Active"},{id:"review",key:"To review"}],Ke=["MO","TU","WE","TH","FR","SA","SU"],_e={MO:"Mon",TU:"Tue",WE:"Wed",TH:"Thu",FR:"Fri",SA:"Sat",SU:"Sun"},gt=[{id:"hourly",key:"Hourly"},{id:"daily",key:"Daily"},{id:"weekly",key:"Weekly"}],ht=["00","05","10","15","20","25","30","35","40","45","50","55"];function xt(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function Qe(){let e=new Date().getDay();return["SU","MO","TU","WE","TH","FR","SA"][e]||"MO"}function vt(e){let a=Number(String(e||"09:00").slice(3,5))||0;return String(Math.round(a/5)*5%60).padStart(2,"0")}function ue(e,a){if(!e)return"";let r=e.time||"09:00";if(e.frequency==="hourly")return a("Every hour at :{minute}",{minute:r.slice(3,5)});if(e.frequency==="weekly"){let n=e.weekdays?.length?e.weekdays:["MO"];return a("Weekly on {days} at {time}",{days:n.map(i=>a(_e[i])).join(" "),time:r})}return e.frequency==="daily"?a("Daily at {time}",{time:r}):e.rrule?a("Custom schedule"):a("Scheduled")}function Ye(e){return{frequency:e.frequency,time:e.time,weekdays:e.frequency==="weekly"?e.weekdays:[],timeZone:xt()}}function me(){return{frequency:"daily",time:"09:00",weekdays:[Qe()]}}function Je(e){let a=String(e||"").replace(/[\\/]+$/,""),r=a.split(/[\\/]/);return r[r.length-1]||a}function fe(e){return e?e.title||Je(e.path):""}function be(e,a){return!e||e.id===M?a("Default space"):e.name||a("Default space")}function yt({t:e,spaces:a,activeSpaceId:r,counts:n}){let[i,s]=t.default.useState(!1),m=t.default.useRef(null);t.default.useEffect(()=>{if(!i)return;let u=g=>{m.current?.contains(g.target)||s(!1)},v=g=>{g.key==="Escape"&&s(!1)};return document.addEventListener("pointerdown",u),document.addEventListener("keydown",v),()=>{document.removeEventListener("pointerdown",u),document.removeEventListener("keydown",v)}},[i]);let o=a.length?a:[{id:M,name:"",order:0}],c=o.find(u=>u.id===r)||o[0],b=u=>Number(n?.[u.id])||0,C=u=>{s(!1),u.id!==c.id&&Fe(u.id)};return t.default.createElement("div",{className:"tb-space",ref:m},t.default.createElement("button",{type:"button",className:`tb-space-btn ${i?"is-open":""}`,title:e("Switch space"),"aria-haspopup":"menu","aria-expanded":i,onClick:()=>s(u=>!u)},t.default.createElement(Ae,{size:15}),t.default.createElement("span",{className:"tb-space-name"},be(c,e)),t.default.createElement("span",{className:"tb-space-count"},b(c)),t.default.createElement(De,{size:13,className:"tb-space-caret"})),i?t.default.createElement("div",{className:"tb-space-menu",role:"menu","aria-label":e("Spaces")},o.map(u=>t.default.createElement("div",{key:u.id,role:"menuitemradio","aria-checked":u.id===c.id,tabIndex:0,className:`tb-space-item ${u.id===c.id?"is-on":""}`,onClick:()=>C(u),onKeyDown:v=>{v.target===v.currentTarget&&(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),C(u))}},t.default.createElement("span",{className:"tb-space-item-name"},be(u,e)),t.default.createElement("span",{className:"tb-space-item-count"},b(u)),u.id===M?null:t.default.createElement("button",{type:"button",className:"tb-space-del",title:e("Delete space"),"aria-label":e("Delete space"),onClick:v=>{v.stopPropagation(),s(!1),Be(u.id)}},t.default.createElement(ie,{size:13})))),t.default.createElement("div",{className:"tb-space-sep"}),t.default.createElement("button",{type:"button",className:"tb-space-new",onClick:()=>{s(!1),qe()}},t.default.createElement(Z,{size:14}),e("New space"))):null)}function wt({t:e}){let[a,r]=t.default.useState(""),[n,i]=t.default.useState(!1),s=t.default.useRef(null);t.default.useEffect(()=>{s.current?.focus()},[]);let m=async o=>{o.preventDefault();let c=a.trim();if(!c||n)return;i(!0);let b=await y.addSpace(c);i(!1),b&&(T(),h(e("Space created")))};return t.default.createElement("form",{className:"tb-form",onSubmit:m},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Space name")),t.default.createElement("input",{ref:s,value:a,required:!0,maxLength:60,placeholder:e("e.g. Work"),onChange:o=>r(o.target.value)})),t.default.createElement("p",{className:"tb-hint"},e("Cards in different spaces stay separate.")),t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:T},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:n||!a.trim()},e("Create space"))))}function kt({t:e,space:a,count:r}){let[n,i]=t.default.useState(!1),s=async()=>{if(n)return;i(!0);let m=await y.removeSpace(a.id);i(!1),m&&(T(),h(e("Space deleted")))};return t.default.createElement(U,{title:e("Delete space"),onClose:T,width:440,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:"tb-btn",onClick:T},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn is-danger",disabled:n,onClick:s},e("Delete space")))},t.default.createElement("div",{className:"tb-confirm"},t.default.createElement("p",{className:"tb-muted"},e("Delete the space {name}?",{name:be(a,e)})),t.default.createElement("p",{className:"tb-muted"},e("Its {n} cards move to the default space.",{n:r}))))}function Xe({t:e,value:a,onChange:r}){let n=a.frequency||"daily",i=Array.isArray(a.weekdays)?a.weekdays:[],s=o=>{let c=i.includes(o)?i.filter(b=>b!==o):[...i,o];r({weekdays:c.length?Ke.filter(b=>c.includes(b)):[]})},m=o=>{r(o==="hourly"?{frequency:o,time:`00:${vt(a.time)}`}:{frequency:o,time:n==="hourly"?"09:00":a.time||"09:00"})};return t.default.createElement("div",{className:"tb-auto-editor"},t.default.createElement("div",{className:"tb-seg"},gt.map(o=>t.default.createElement("button",{key:o.id,type:"button",className:n===o.id?"is-on":"",onClick:()=>m(o.id)},e(o.key)))),n==="weekly"?t.default.createElement("div",{className:"tb-weekdays",role:"group","aria-label":e("Days")},Ke.map(o=>t.default.createElement("button",{key:o,type:"button",className:i.includes(o)?"is-on":"","aria-pressed":i.includes(o),onClick:()=>s(o)},e(_e[o])))):null,n==="hourly"?t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Minute")),t.default.createElement("select",{value:String(a.time||"00:00").slice(3,5),onChange:o=>r({time:`00:${o.target.value}`})},ht.map(o=>t.default.createElement("option",{key:o,value:o},`:${o}`)))):t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Time")),t.default.createElement("input",{type:"time",value:a.time||"09:00",onChange:o=>r({time:o.target.value||"09:00"})})),t.default.createElement("p",{className:"tb-hint"},e("The card runs on its own and lands in review with the latest result.")))}function Ze(e){return typeof e.running=="boolean"?e.running:e.column==="doing"}function Ve(e,a){switch(e.phase){case"queued":return a("Queued");case"thinking":return a("Thinking");case"tool":return a("Running {name}",{name:e.toolName||"tool"});case"writing":return a("Writing result");case"review":return a("Waiting for review");case"error":return a("Run failed");case"stopped":return a("Stopped");default:return""}}function Ge(e){if(e)try{let a=ye()?.get("uiWorkspace");a?.openSession?a.openSession(e):h("This deployment cannot open sessions",{error:!0})}catch(a){h(a?.message||String(a),{error:!0})}}function Et({task:e,t:a}){let r=Ze(e),n=O[e.column]?.accent,i=Ve(e,a);return t.default.createElement("article",{className:`tb-card ${r?"is-running":""}`,draggable:!0,style:{"--tb-accent":n},tabIndex:0,"aria-label":e.title,onClick:()=>pe(e.id),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),pe(e.id))},onDragStart:s=>{s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/task-id",e.id),s.currentTarget.classList.add("is-dragging")},onDragEnd:s=>s.currentTarget.classList.remove("is-dragging")},t.default.createElement("div",{className:"tb-card-chips"},e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.workspacePath?t.default.createElement("span",{className:"tb-chip is-quiet",title:e.workspacePath},t.default.createElement(Se,{size:11}),fe(e)):null,e.automation?t.default.createElement("span",{className:`tb-chip is-time ${e.automation.active?"":"is-muted"}`,title:ue(e.automation,a)},t.default.createElement(ee,{size:11}),ue(e.automation,a)):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(G,{size:11}),a("From a session")):e.sessionId?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(G,{size:11}),a("Session")):null),t.default.createElement("h3",{className:"tb-card-title"},e.title),e.note?t.default.createElement("p",{className:"tb-card-note"},e.note):null,r?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,i),e.steps?t.default.createElement("span",{className:"tb-steps"},`\xB7 ${e.steps}`):null):null,t.default.createElement("div",{className:"tb-card-progress"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement(je,{value:e.progress})),t.default.createElement("footer",{className:"tb-card-foot"},t.default.createElement(Re,{size:24}),t.default.createElement("span",{className:"tb-time"},X(e.updatedAt,a)),t.default.createElement("span",{className:"tb-spacer"}),e.sessionId?t.default.createElement(L,{icon:se,label:a("Open session"),onClick:()=>Ge(e.sessionId)}):null,r?t.default.createElement(L,{icon:ke,label:a("Stop"),onClick:async()=>{await y.stop(e.id)&&h(a("Stopped the run"))}}):t.default.createElement(L,{icon:we,label:e.sessionId?a("Rerun"):a("Run"),onClick:async()=>{await y.dispatch(e.id)&&h(a("Dispatched to its session"))}})))}function Nt({column:e,tasks:a,total:r,t:n,spaceId:i}){let s=O[e],[m,o]=t.default.useState(!1);return t.default.createElement("section",{className:`tb-col ${m?"is-over":""}`,"data-column":e,style:{"--tb-accent":s.accent},onDragOver:c=>{c.preventDefault(),c.dataTransfer.dropEffect="move",m||o(!0)},onDragLeave:c=>{c.currentTarget.contains(c.relatedTarget)||o(!1)},onDrop:c=>{c.preventDefault(),o(!1);let b=c.dataTransfer.getData("text/task-id");b&&y.move(b,e)}},t.default.createElement("header",{className:"tb-col-head"},t.default.createElement("span",{className:"tb-col-dot"}),t.default.createElement("h2",null,n(s.key)),t.default.createElement("span",{className:"tb-col-count"},r),t.default.createElement("span",{className:"tb-spacer"}),e==="done"&&r?t.default.createElement(L,{icon:ie,label:n("Clear done"),onClick:async()=>{await y.clearDone(i)&&h(n("Done cards cleared"))}}):null,t.default.createElement(L,{icon:Z,label:n("Add a task"),onClick:()=>de(e)})),t.default.createElement("div",{className:"tb-col-body"},a.map(c=>t.default.createElement(Et,{key:c.id,task:c,t:n})),r===0?t.default.createElement("div",{className:"tb-empty"},n("No cards yet")):null))}function St({t:e,tasks:a,query:r,filter:n,spaces:i,activeSpaceId:s,spaceCounts:m}){let o=new Date,c=B(),b="",C="";try{b=new Intl.DateTimeFormat(c,{month:"long"}).format(o),C=new Intl.DateTimeFormat(c,{month:"long",day:"numeric",weekday:"long"}).format(o)}catch{b="",C=o.toDateString()}let u=a.filter(g=>g.column==="doing").length,v=a.filter(g=>g.column==="review").length;return t.default.createElement("header",{className:"tb-head"},t.default.createElement("div",{className:"tb-head-title"},t.default.createElement("span",{className:"tb-kicker"},b),t.default.createElement("div",null,t.default.createElement("h1",null,e("Task board")),t.default.createElement("p",null,e("Today is {date}",{date:C}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} running",{n:u}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} to review",{n:v})))),t.default.createElement("div",{className:"tb-head-tools"},t.default.createElement("label",{className:"tb-search"},t.default.createElement(Ne,{size:15}),t.default.createElement("input",{type:"search",value:r,placeholder:e("Search cards"),"aria-label":e("Search cards"),onChange:g=>ce(g.target.value)}),r?t.default.createElement("button",{type:"button",className:"tb-search-clear","aria-label":e("Close"),onClick:()=>ce("")},t.default.createElement(V,{size:13})):null),t.default.createElement("div",{className:"tb-filters",role:"group","aria-label":e("Task board overview")},ft.map(g=>t.default.createElement("button",{key:g.id,type:"button",className:n===g.id?"is-on":"","aria-pressed":n===g.id,onClick:()=>Oe(g.id)},e(g.key)))),t.default.createElement(yt,{t:e,spaces:i,activeSpaceId:s,counts:m}),t.default.createElement("button",{type:"button",className:"tb-primary",onClick:()=>de("todo")},t.default.createElement(Z,{size:15}),e("New task"))))}function Ct({t:e,defaultColumn:a,tags:r,workspaces:n,spaceId:i}){let[s,m]=t.default.useState(""),[o,c]=t.default.useState(""),[b,C]=t.default.useState(""),[u,v]=t.default.useState(a||"todo"),[g,A]=t.default.useState(""),[R,d]=t.default.useState(!1),[w,I]=t.default.useState(me),[z,H]=t.default.useState(!1),q=t.default.useRef(null);t.default.useEffect(()=>{q.current?.focus()},[]);let K=Array.isArray(n)?n:[],ae=async f=>{if(f.preventDefault(),!s.trim()||z)return;H(!0);let W=g?K.find(P=>P.id===g):null,p={title:s,note:o,tag:b,column:u,spaceId:i,workspaceId:W?.id??null,workspacePath:W?.path??null,workspaceTitle:W?.title??null};R&&(p.automation=Ye(w));let E=await y.add(p);H(!1),E&&(T(),E.warning?h(E.warning,{error:!0}):h(e("Card added")))};return t.default.createElement("form",{className:"tb-form",onSubmit:ae,id:"tb-add-form"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Title")),t.default.createElement("input",{ref:q,value:s,required:!0,maxLength:200,placeholder:e("What needs to happen?"),onChange:f=>m(f.target.value)})),t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Notes")),t.default.createElement("textarea",{rows:3,value:o,maxLength:4e3,placeholder:e("Any details, links, or acceptance criteria."),onChange:f=>c(f.target.value)})),t.default.createElement("div",{className:"tb-field-row"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Tag")),t.default.createElement("input",{value:b,maxLength:24,placeholder:e("Tag"),onChange:f=>C(f.target.value)})),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Column")),t.default.createElement("div",{className:"tb-seg"},Object.keys(O).map(f=>t.default.createElement("button",{key:f,type:"button",className:u===f?"is-on":"",style:{"--tb-accent":O[f].accent},onClick:()=>v(f)},t.default.createElement("i"),e(O[f].key)))))),r.length?t.default.createElement("div",{className:"tb-tagrow"},r.slice(0,6).map(f=>t.default.createElement("button",{key:f,type:"button",className:"tb-tagchip",onClick:()=>C(f)},`#${f}`))):null,t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Workspace")),t.default.createElement("select",{value:g,onChange:f=>A(f.target.value)},t.default.createElement("option",{value:""},e("Default directory")),K.map(f=>t.default.createElement("option",{key:f.id,value:f.id},fe(f))))),t.default.createElement("div",{className:"tb-field tb-auto-field"},t.default.createElement("span",null,e("Automation")),t.default.createElement("div",{className:"tb-seg"},t.default.createElement("button",{type:"button",className:R?"":"is-on",onClick:()=>d(!1)},e("Off")),t.default.createElement("button",{type:"button",className:R?"is-on":"",onClick:()=>d(!0)},t.default.createElement(ee,{size:12}),e("On a schedule")))),R?t.default.createElement(Xe,{t:e,value:w,onChange:f=>I(W=>({...W,...f}))}):null,t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:T},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:z||!s.trim()},e("Create"))))}function Dt({task:e,t:a,workspaces:r}){let[n,i]=t.default.useState(!1),[s,m]=t.default.useState(!1),[o,c]=t.default.useState(!1),[b,C]=t.default.useState(!1),[u,v]=t.default.useState(me);t.default.useEffect(()=>{i(!1),m(!1),c(!1)},[e.id]);let g=O[e.column],A=Ze(e),R=Ve(e,a),d=Array.isArray(r)?r:[],w=e.workspacePath?d.find(p=>p.id===e.workspaceId)||d.find(p=>p.path===e.workspacePath):null,I=e.workspacePath&&!w?`path:${e.workspacePath}`:"",z=w?w.id:I,H=async p=>{let E=p.target.value,P;if(!E)P={workspaceId:null,workspacePath:null,workspaceTitle:null};else if(E.startsWith("path:"))P={workspaceId:null,workspacePath:E.slice(5),workspaceTitle:e.workspaceTitle||null};else{let _=d.find(rt=>rt.id===E);if(!_)return;P={workspaceId:_.id,workspacePath:_.path,workspaceTitle:_.title||null}}let re=await y.update(e.id,P);re&&h(re.warning||a("Workspace updated"),{error:!!re.warning})},q=()=>{let p=e.automation;v(p?{frequency:p.frequency==="custom"?"daily":p.frequency,time:p.time||"09:00",weekdays:Array.isArray(p.weekdays)&&p.weekdays.length?[...p.weekdays]:[Qe()]}:me()),c(!0)},K=async()=>{if(b)return;C(!0);let p=await y.update(e.id,{automation:Ye(u)});C(!1),p&&(c(!1),h(p.warning?p.warning:a("Automation updated"),{error:!!p.warning}))},ae=async()=>{if(!e.automation)return;let p=!e.automation.active,E=await y.update(e.id,{automation:{active:p}});E&&(E.warning?h(E.warning,{error:!0}):h(a(p?"Automation resumed":"Automation paused")))},f=async()=>{if(!s){m(!0);return}let p=await y.update(e.id,{automation:{frequency:"none"}});p&&(m(!1),p.warning?h(p.warning,{error:!0}):h(a("Automation removed")))},W=async()=>{if(!n){i(!0);return}j(),await y.remove(e.id)&&h(a("Card deleted"))};return t.default.createElement(U,{side:!0,title:e.title,onClose:j,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${n?"is-armed":""}`,onClick:W},a(n?"Delete twice to confirm":"Delete")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:async()=>{await y.move(e.id,"todo")&&j()}},a("Back to todo")),e.column==="done"?null:t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{if(A){await y.stop(e.id)&&h(a("Stopped the run"));return}await y.dispatch(e.id)&&h(a("Dispatched to its session"))}},A?a("Stop"):e.sessionId?a("Rerun"):a("Run")),e.column==="review"?t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{await y.accept(e.id)&&(h(a(e.automation?"Accepted, back to todo":"Card accepted")),j())}},a(e.automation?"Accept this run":"Accept")):null)},t.default.createElement("div",{className:"tb-detail"},t.default.createElement("div",{className:"tb-detail-chips"},t.default.createElement(Ue,{column:e.column,label:a(g.key),accent:g.accent}),e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(G,{size:11}),a("From a session")):null),A?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,R),e.steps?t.default.createElement("span",{className:"tb-steps"},`${a("Steps")} \xB7 ${e.steps}`):null):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement("div",{className:"tb-bar"},t.default.createElement("i",{style:{width:`${e.progress}%`}}))),e.note?t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Description")),t.default.createElement("p",{className:"tb-prose"},e.note)):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Workspace")),t.default.createElement("label",{className:"tb-field tb-workspace"},t.default.createElement("select",{value:z,onChange:H,"aria-label":a("Workspace")},t.default.createElement("option",{value:""},a("Default directory")),d.map(p=>t.default.createElement("option",{key:p.id,value:p.id},fe(p))),I?t.default.createElement("option",{value:I},`${e.workspaceTitle||Je(e.workspacePath)} \xB7 ${a("Removed workspace")}`):null),e.workspacePath?t.default.createElement("code",{className:"tb-workspace-path"},e.workspacePath):null),t.default.createElement("p",{className:"tb-hint"},e.automation?a("Scheduled runs start here too."):a("A new session starts in this workspace when you start the card."))),t.default.createElement("section",{className:"tb-block tb-auto-block"},t.default.createElement("div",{className:"tb-auto-head"},t.default.createElement("h4",null,a("Automation")),e.automation?t.default.createElement("span",{className:`tb-auto-state ${e.automation.active?"is-live":""}`},e.automation.active?a("Scheduled"):a("Paused")):null),o?t.default.createElement(t.default.Fragment,null,t.default.createElement(Xe,{t:a,value:u,onChange:p=>v(E=>({...E,...p}))}),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>c(!1)},a("Cancel")),t.default.createElement("button",{type:"button",className:"tb-btn is-primary",disabled:b,onClick:K},a("Save")))):e.automation?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"tb-auto-rule"},t.default.createElement(ee,{size:14}),t.default.createElement("span",null,ue(e.automation,a))),t.default.createElement("dl",{className:"tb-auto-meta"},t.default.createElement("dt",null,a("Next run")),t.default.createElement("dd",null,e.automation.runtime?.nextAt?oe(e.automation.runtime.nextAt,B()):a("No upcoming run")),t.default.createElement("dt",null,a("Last run")),t.default.createElement("dd",null,e.automation.lastFiredAt?X(e.automation.lastFiredAt,a):a("Not run yet"))),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:ae},e.automation.active?a("Pause"):a("Resume")),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:q},a("Edit rule")),t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${s?"is-armed":""}`,onClick:f},a(s?"Delete twice to confirm":"Remove automation")))):t.default.createElement(t.default.Fragment,null,t.default.createElement("p",{className:"tb-muted"},a("This card only runs when you start it.")),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:q},t.default.createElement(Ce,{size:13}),a("Make it automatic"))))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Session")),e.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.sessionId.slice(0,8)),t.default.createElement(L,{icon:se,label:a("Open session"),onClick:()=>Ge(e.sessionId)})):t.default.createElement("p",{className:"tb-muted"},a("No session yet")," ",a("A session is created the first time you run this card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Latest result")),e.result?t.default.createElement("pre",{className:"tb-result"},e.result):t.default.createElement("p",{className:"tb-muted"},a("No result yet.")),e.error?t.default.createElement("p",{className:"tb-error"},e.error):null),t.default.createElement("div",{className:"tb-meta"},a("Created")," ",oe(e.createdAt,B())," \xB7 ",a("Updated")," ",X(e.updatedAt,a))))}function et(){let e=J(),a=Pe(),r=t.default.useRef(null),[n,i]=t.default.useState(1200);t.default.useEffect(()=>{te();let d=setInterval(()=>{document.visibilityState==="visible"&&te()},2500);return()=>clearInterval(d)},[]),t.default.useEffect(()=>{let d=r.current;if(!d)return;let w=new ResizeObserver(([I])=>i(I.contentRect.width));return w.observe(d),()=>w.disconnect()},[]);let s=a.spaces.length?a.spaces:[{id:M,name:"",order:0}],m=s.some(d=>d.id===a.activeSpaceId)?a.activeSpaceId:s[0].id,o=a.tasks.filter(d=>(d.spaceId||M)===m),c={};for(let d of a.tasks){let w=d.spaceId||M;c[w]=(c[w]||0)+1}let b=a.detailId?a.tasks.find(d=>d.id===a.detailId):null,C=[...new Set(o.map(d=>d.tag).filter(Boolean))],u=a.query.trim().toLowerCase(),v=o.filter(d=>a.filter==="active"&&d.column!=="doing"||a.filter==="review"&&d.column!=="review"?!1:u?[d.title,d.note,d.tag,d.workspaceTitle].some(w=>String(w||"").toLowerCase().includes(u)):!0),g=a.dialog?.kind||"task",A=g==="remove-space"?s.find(d=>d.id===a.dialog.id):null,R=A?a.tasks.filter(d=>(d.spaceId||M)===A.id).length:0;return t.default.createElement("div",{className:`tb-root ${n<980?"is-narrow":""}`,ref:r},t.default.createElement("style",null,ze),t.default.createElement("div",{className:"tb-ambient","aria-hidden":"true"},t.default.createElement("i"),t.default.createElement("i"),t.default.createElement("i")),t.default.createElement(St,{t:e,tasks:o,query:a.query,filter:a.filter,spaces:s,activeSpaceId:m,spaceCounts:c}),a.error&&!a.loaded?t.default.createElement("div",{className:"tb-fail"},t.default.createElement("p",null,e("Could not reach the board")),t.default.createElement("span",null,a.error),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>te()},t.default.createElement(Te,{size:14}),e("Retry"))):a.loaded?t.default.createElement("div",{className:"tb-board-wrap"},t.default.createElement("div",{className:"tb-board"},a.columns.map(d=>{let w=v.filter(z=>z.column===d),I=o.filter(z=>z.column===d).length;return t.default.createElement(Nt,{key:d,column:d,tasks:w,total:I,t:e,spaceId:m})})),o.length>0&&v.length===0?t.default.createElement("p",{className:"tb-none"},e("Nothing matches this filter.")):null):t.default.createElement("div",{className:"tb-loading"},e("Loading board\u2026")),g==="task"&&a.dialog?t.default.createElement(U,{title:e("New task"),onClose:T,width:520},t.default.createElement(Ct,{t:e,defaultColumn:a.dialog.column,tags:C,workspaces:a.workspaces,spaceId:m})):null,a.dialog&&g==="space"?t.default.createElement(U,{title:e("New space"),onClose:T,width:440},t.default.createElement(wt,{t:e})):null,A?t.default.createElement(kt,{t:e,space:A,count:R}):null,b?t.default.createElement(Dt,{task:b,t:e,workspaces:a.workspaces}):null,t.default.createElement(He,{toast:a.toast,onClose:()=>S({toast:null})}))}var tt="task-board";function At({size:e=22,active:a=!1}){return at.default.createElement(Ie,{size:e,active:a})}var Tt=["slots","locale"];function It(e){xe(e),e.effect(()=>ve(e),"task-board: locale");let a=e.locale.bind(Y);e.slots.inject("main",()=>e.slots.register({name:"main",key:tt},et)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:tt,order:12,label:()=>a("Task board")},At))}
return module.exports}})
