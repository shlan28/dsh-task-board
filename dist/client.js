window.__ModuleLoader__.load({id:"dsh-task-board",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ne=Object.create;var T=Object.defineProperty;var Ce=Object.getOwnPropertyDescriptor;var Se=Object.getOwnPropertyNames;var De=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var Ie=(e,r)=>{for(var a in r)T(e,a,{get:r[a],enumerable:!0})},J=(e,r,a,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Se(r))!Te.call(e,i)&&i!==a&&T(e,i,{get:()=>r[i],enumerable:!(n=Ce(r,i))||n.enumerable});return e};var N=(e,r,a)=>(a=e!=null?Ne(De(e)):{},J(r||!e||!e.__esModule?T(a,"default",{value:e,enumerable:!0}):a,e)),ze=e=>J(T({},"__esModule",{value:!0}),e);var Ue={};Ie(Ue,{apply:()=>Qe,inject:()=>qe});module.exports=ze(Ue);var ye=N(require("react"),1);var t=N(require("react"),1);var X=N(require("react"),1),I="task-board",$={"Task board":"\u4EFB\u52A1\u770B\u677F",Todo:"\u5F85\u529E","In progress":"\u8FDB\u884C\u4E2D","In review":"\u5F85\u9A8C\u6536",Done:"\u5DF2\u5B8C\u6210","New task":"\u65B0\u5EFA\u4EFB\u52A1","Search cards":"\u641C\u7D22\u4EFB\u52A1",All:"\u5168\u90E8",Active:"\u8FDB\u884C\u4E2D","To review":"\u5F85\u9A8C\u6536","Clear done":"\u6E05\u7A7A\u5DF2\u5B8C\u6210","No cards yet":"\u8FD8\u6CA1\u6709\u4EFB\u52A1","Drop here":"\u653E\u5230\u8FD9\u91CC","Add a task":"\u6DFB\u52A0\u4EFB\u52A1",Run:"\u5F00\u59CB\u6267\u884C",Stop:"\u505C\u6B62","Open session":"\u6253\u5F00\u4F1A\u8BDD",Accept:"\u9A8C\u6536\u5B8C\u6210","Mark done":"\u6807\u8BB0\u5B8C\u6210","Back to todo":"\u9000\u56DE\u5F85\u529E",Rerun:"\u91CD\u65B0\u6267\u884C",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",Create:"\u521B\u5EFA\u4EFB\u52A1",Save:"\u4FDD\u5B58",Title:"\u6807\u9898","What needs to happen?":"\u8981\u505A\u4EC0\u4E48\uFF1F",Notes:"\u8BF4\u660E","Any details, links, or acceptance criteria.":"\u8865\u5145\u7EC6\u8282\u3001\u94FE\u63A5\u6216\u9A8C\u6536\u6807\u51C6\u3002",Tag:"\u6807\u7B7E",Column:"\u6240\u5728\u5217",Progress:"\u8FDB\u5EA6",Queued:"\u6392\u961F\u4E2D",Thinking:"\u601D\u8003\u4E2D","Running {name}":"\u6B63\u5728\u6267\u884C {name}","Writing result":"\u6574\u7406\u7ED3\u679C","Waiting for review":"\u7B49\u5F85\u9A8C\u6536","Run failed":"\u6267\u884C\u51FA\u9519",Stopped:"\u5DF2\u505C\u6B62","No session yet":"\u5C1A\u672A\u5206\u914D\u4F1A\u8BDD","Latest result":"\u6700\u65B0\u7ED3\u679C","No result yet.":"\u8FD8\u6CA1\u6709\u7ED3\u679C\u3002","A session is created the first time you run this card.":"\u7B2C\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u5F20\u5361\u521B\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u3002","From a session":"\u6765\u81EA\u4F1A\u8BDD",Session:"\u4F1A\u8BDD","Delete this card?":"\u786E\u5B9A\u5220\u9664\u8FD9\u5F20\u5361\u5417\uFF1F","Card deleted":"\u5DF2\u5220\u9664","Card added":"\u5DF2\u6DFB\u52A0","Dispatched to its session":"\u5DF2\u6D3E\u53D1\u5230\u4F1A\u8BDD","Stopped the run":"\u5DF2\u505C\u6B62\u6267\u884C","Card accepted":"\u5DF2\u9A8C\u6536","Done cards cleared":"\u5DF2\u6E05\u7A7A\u5B8C\u6210\u7684\u4EFB\u52A1","Just now":"\u521A\u521A","{n}m ago":"{n} \u5206\u949F\u524D","{n}h ago":"{n} \u5C0F\u65F6\u524D","{n}d ago":"{n} \u5929\u524D","Today is {date}":"\u4ECA\u5929\u662F {date}","{n} running":"{n} \u4E2A\u8FDB\u884C\u4E2D","{n} to review":"{n} \u4E2A\u5F85\u9A8C\u6536","Task board overview":"\u4EFB\u52A1\u770B\u677F\u6982\u89C8","Nothing matches this filter.":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002","Run this card now":"\u7ACB\u5373\u6267\u884C\u8FD9\u5F20\u5361",Details:"\u8BE6\u60C5",Close:"\u5173\u95ED",Created:"\u521B\u5EFA\u4E8E",Updated:"\u66F4\u65B0\u4E8E",Steps:"\u6B65\u9AA4","Session {id}":"\u4F1A\u8BDD {id}","{n} cards":"{n} \u5F20\u5361",Description:"\u8BF4\u660E","Delete twice to confirm":"\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664","Could not reach the board":"\u770B\u677F\u6682\u65F6\u4E0D\u53EF\u7528",Retry:"\u91CD\u8BD5","Loading board\u2026":"\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026","No tasks":"\u6CA1\u6709\u4EFB\u52A1"},Ae={"Task board":"Task board",Todo:"Todo","In progress":"In progress","In review":"In review",Done:"Done","New task":"New task","Search cards":"Search cards",All:"All",Active:"Active","To review":"To review","Clear done":"Clear done","No cards yet":"No cards yet","Drop here":"Drop here","Add a task":"Add a task",Run:"Run",Stop:"Stop","Open session":"Open session",Accept:"Accept","Mark done":"Mark done","Back to todo":"Back to todo",Rerun:"Rerun",Delete:"Delete",Cancel:"Cancel",Create:"Create task",Save:"Save",Title:"Title","What needs to happen?":"What needs to happen?",Notes:"Notes","Any details, links, or acceptance criteria.":"Any details, links, or acceptance criteria.",Tag:"Tag",Column:"Column",Progress:"Progress",Queued:"Queued",Thinking:"Thinking","Running {name}":"Running {name}","Writing result":"Writing result","Waiting for review":"Waiting for review","Run failed":"Run failed",Stopped:"Stopped","No session yet":"No session yet","Latest result":"Latest result","No result yet.":"No result yet.","A session is created the first time you run this card.":"A session is created the first time you run this card.","From a session":"From a session",Session:"Session","Delete this card?":"Delete this card?","Card deleted":"Card deleted","Card added":"Card added","Dispatched to its session":"Dispatched to its session","Stopped the run":"Stopped the run","Card accepted":"Card accepted","Done cards cleared":"Done cards cleared","Just now":"Just now","{n}m ago":"{n}m ago","{n}h ago":"{n}h ago","{n}d ago":"{n}d ago","Today is {date}":"Today is {date}","{n} running":"{n} running","{n} to review":"{n} to review","Task board overview":"Task board overview","Nothing matches this filter.":"Nothing matches this filter.","Run this card now":"Run this card now",Details:"Details",Close:"Close",Created:"Created",Updated:"Updated",Steps:"Steps","Session {id}":"Session {id}","{n} cards":"{n} cards",Description:"Description","Delete twice to confirm":"Click again to delete","Could not reach the board":"Could not reach the board",Retry:"Retry","Loading board\u2026":"Loading board\u2026","No tasks":"No tasks"},C=null;function Y(e){C=e}function K(e){return e.locale.register(I,{en:Ae,zh:$,"zh-CN":$,"zh-TW":$})}function _(){return C}function z(){return X.default.useSyncExternalStore(e=>C.locale.subscribe(e),()=>C.locale.getLocale().id,()=>"en"),C.locale.bind(I)}function A(){try{return C?.locale?.getLocale?.().id||"en"}catch{return"en"}}function j(e,r){if(!e)return"";let a=Math.max(0,Date.now()-e),n=Math.floor(a/6e4);if(n<1)return r("Just now");if(n<60)return r("{n}m ago",{n});let i=Math.floor(n/60);return i<24?r("{n}h ago",{n:i}):r("{n}d ago",{n:Math.floor(i/24)})}function V(e,r){if(!e)return"";try{return new Intl.DateTimeFormat(r||A(),{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return new Date(e).toLocaleString()}}var o=N(require("react"),1);function h({size:e=16,strokeWidth:r=1.9,children:a,...n}){return o.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...n},a)}var B=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M12 5v14M5 12h14"})),G=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M8 5.5v13l11-6.5-11-6.5z",fill:"currentColor",stroke:"none"})),Z=e=>o.default.createElement(h,e,o.default.createElement("rect",{x:7,y:7,width:10,height:10,rx:2,fill:"currentColor",stroke:"none"})),ee=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M5 12.5l4.2 4.2L19 7"})),te=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M4 7h16"}),o.default.createElement("path",{d:"M10 4h4l1 3H9l1-3z"}),o.default.createElement("path",{d:"M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7"}),o.default.createElement("path",{d:"M10 11v6M14 11v6"})),W=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M14 4h6v6"}),o.default.createElement("path",{d:"M20 4l-9 9"}),o.default.createElement("path",{d:"M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10"})),re=e=>o.default.createElement(h,e,o.default.createElement("circle",{cx:11,cy:11,r:6.5}),o.default.createElement("path",{d:"M16 16l4 4"})),R=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));var L=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z"}));var ae=e=>o.default.createElement(h,e,o.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 6.3"}),o.default.createElement("path",{d:"M20 5v6h-6"}));function ne({size:e=22,active:r=!1}){return o.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:r?2.1:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},o.default.createElement("rect",{x:3,y:4,width:18,height:16,rx:3.4}),o.default.createElement("path",{d:"M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6"}))}function oe({size:e=26}){return o.default.createElement("span",{className:"tb-avatar",style:{width:e,height:e},"aria-hidden":"true"},o.default.createElement("svg",{width:e*.58,height:e*.58,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},o.default.createElement("path",{d:"M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z"})))}var ie=`/* \u4EFB\u52A1\u770B\u677F\u6837\u5F0F\uFF1A\u989C\u8272\u8D70 DSH \u8BED\u4E49 token\uFF0C\u5217\u4E0E\u5361\u7247\u7528\u4F4E\u9971\u548C\u5F69\u8272\u70B9\u7F00\u3002 */
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
`;var le=N(require("react"),1),Le="/task-board",ce=["todo","doing","review","done"],v={tasks:[],columns:ce,revision:-1,loaded:!1,error:null,filter:"all",query:"",dialog:null,detailId:null,toast:null,dragging:null},F=new Set;function se(){return v}function g(e){v={...v,...typeof e=="function"?e(v):e},F.forEach(r=>r())}function Me(e){return F.add(e),()=>F.delete(e)}function de(){return le.default.useSyncExternalStore(Me,se,se)}async function pe(e,r){let a=await fetch(Le+e,{cache:"no-store",...r,headers:{...r?.body?{"content-type":"application/json"}:{},...r?.headers||{}}}),n=await a.json().catch(()=>({}));if(!a.ok)throw new Error(n?.error||`HTTP ${a.status}`);return n}function x(e,{error:r=!1}={}){g({toast:{text:e,error:r,key:Date.now()}})}async function M(){try{let e=await pe("/state"),r=e?.revision??0;return v.loaded&&r===v.revision&&!v.error||g({tasks:Array.isArray(e?.tasks)?e.tasks:[],columns:Array.isArray(e?.columns)&&e.columns.length?e.columns:ce,revision:r,loaded:!0,error:null}),!0}catch(e){return g({loaded:!0,error:e?.message||String(e)}),!1}}async function w(e,r={}){try{let a=await pe("/op",{method:"POST",body:JSON.stringify({op:e,...r})});if(a?.state&&g({tasks:Array.isArray(a.state.tasks)?a.state.tasks:v.tasks,revision:a.state.revision??v.revision,loaded:!0,error:null}),!a?.ok)throw new Error(a?.error||"\u64CD\u4F5C\u5931\u8D25");return a}catch(a){return x(a?.message||String(a),{error:!0}),null}}var f={add:e=>w("add",e),update:(e,r)=>w("update",{id:e,...r}),move:(e,r)=>w("move",{id:e,column:r}),dispatch:e=>w("dispatch",{id:e}),stop:e=>w("stop",{id:e}),accept:e=>w("accept",{id:e}),remove:e=>w("remove",{id:e}),clearDone:()=>w("clearDone")};function be(e){g({filter:e})}function O(e){g({query:e})}function q(e="todo"){g({dialog:{column:e}})}function P(){g({dialog:null})}function Q(e){g({detailId:e})}function D(){g({detailId:null})}var d=N(require("react"),1);function y({icon:e,label:r,onClick:a,disabled:n=!1,tone:i="",className:s=""}){return d.default.createElement("button",{type:"button",className:`tb-iconbtn ${i?`is-${i}`:""} ${s}`.trim(),onClick:m=>{m.stopPropagation(),a?.(m)},disabled:n,title:r,"aria-label":r},d.default.createElement(e,{size:16}))}function me({value:e=0,segments:r=10}){let a=Math.round(Math.max(0,Math.min(100,e))/100*r);return d.default.createElement("div",{className:"tb-dots",role:"img","aria-label":`${e}%`},Array.from({length:r},(n,i)=>d.default.createElement("span",{key:i,className:i<a?"is-on":""})))}function ue({column:e,label:r,accent:a}){return d.default.createElement("span",{className:"tb-status",style:a?{"--tb-accent":a}:void 0},d.default.createElement("i",null),r)}function U({title:e,onClose:r,children:a,footer:n,width:i=480,side:s=!1}){let m=z(),c=d.default.useId();return d.default.useEffect(()=>{let p=l=>{l.key==="Escape"&&(l.stopPropagation(),r())};return window.addEventListener("keydown",p,!0),()=>window.removeEventListener("keydown",p,!0)},[r]),d.default.createElement("div",{className:s?"tb-scrim is-side":"tb-scrim",onPointerDown:p=>{p.target===p.currentTarget&&r()}},d.default.createElement("div",{className:s?"tb-sheet":"tb-dialog",role:"dialog","aria-modal":"true","aria-labelledby":c,style:{width:s?void 0:i}},d.default.createElement("header",{className:"tb-dialog-head"},d.default.createElement("h2",{id:c},e),d.default.createElement(y,{icon:R,label:m("Close"),onClick:r})),d.default.createElement("div",{className:"tb-dialog-body"},a),n?d.default.createElement("footer",{className:"tb-dialog-foot"},n):null))}function ge({toast:e,onClose:r}){let a=d.default.useRef(r);return a.current=r,d.default.useEffect(()=>{if(!e)return;let n=setTimeout(()=>a.current(),e.error?4200:2600);return()=>clearTimeout(n)},[e]),e?d.default.createElement("div",{className:`tb-toast ${e.error?"is-error":""}`,role:"status",key:e.key},e.error?null:d.default.createElement(ee,{size:15}),d.default.createElement("span",null,e.text)):null}var S={todo:{key:"Todo",accent:"#8ea6f4"},doing:{key:"In progress",accent:"#f0b07c"},review:{key:"In review",accent:"#ef93b7"},done:{key:"Done",accent:"#74cbaa"}},Pe=[{id:"all",key:"All"},{id:"active",key:"Active"},{id:"review",key:"To review"}];function xe(e){return typeof e.running=="boolean"?e.running:e.column==="doing"}function fe(e,r){switch(e.phase){case"queued":return r("Queued");case"thinking":return r("Thinking");case"tool":return r("Running {name}",{name:e.toolName||"tool"});case"writing":return r("Writing result");case"review":return r("Waiting for review");case"error":return r("Run failed");case"stopped":return r("Stopped");default:return""}}function he(e){if(e)try{let r=_()?.get("uiWorkspace");r?.openSession?r.openSession(e):x("This deployment cannot open sessions",{error:!0})}catch(r){x(r?.message||String(r),{error:!0})}}function $e({task:e,t:r}){let a=xe(e),n=S[e.column]?.accent,i=fe(e,r);return t.default.createElement("article",{className:`tb-card ${a?"is-running":""}`,draggable:!0,style:{"--tb-accent":n},tabIndex:0,"aria-label":e.title,onClick:()=>Q(e.id),onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),Q(e.id))},onDragStart:s=>{s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/task-id",e.id),s.currentTarget.classList.add("is-dragging")},onDragEnd:s=>s.currentTarget.classList.remove("is-dragging")},t.default.createElement("div",{className:"tb-card-chips"},e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(L,{size:11}),r("From a session")):e.sessionId?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(L,{size:11}),r("Session")):null),t.default.createElement("h3",{className:"tb-card-title"},e.title),e.note?t.default.createElement("p",{className:"tb-card-note"},e.note):null,a?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,i),e.steps?t.default.createElement("span",{className:"tb-steps"},`\xB7 ${e.steps}`):null):null,t.default.createElement("div",{className:"tb-card-progress"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,r("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement(me,{value:e.progress})),t.default.createElement("footer",{className:"tb-card-foot"},t.default.createElement(oe,{size:24}),t.default.createElement("span",{className:"tb-time"},j(e.updatedAt,r)),t.default.createElement("span",{className:"tb-spacer"}),e.sessionId?t.default.createElement(y,{icon:W,label:r("Open session"),onClick:()=>he(e.sessionId)}):null,a?t.default.createElement(y,{icon:Z,label:r("Stop"),onClick:async()=>{await f.stop(e.id)&&x(r("Stopped the run"))}}):t.default.createElement(y,{icon:G,label:e.sessionId?r("Rerun"):r("Run"),onClick:async()=>{await f.dispatch(e.id)&&x(r("Dispatched to its session"))}})))}function je({column:e,tasks:r,total:a,t:n}){let i=S[e],[s,m]=t.default.useState(!1);return t.default.createElement("section",{className:`tb-col ${s?"is-over":""}`,"data-column":e,style:{"--tb-accent":i.accent},onDragOver:c=>{c.preventDefault(),c.dataTransfer.dropEffect="move",s||m(!0)},onDragLeave:c=>{c.currentTarget.contains(c.relatedTarget)||m(!1)},onDrop:c=>{c.preventDefault(),m(!1);let p=c.dataTransfer.getData("text/task-id");p&&f.move(p,e)}},t.default.createElement("header",{className:"tb-col-head"},t.default.createElement("span",{className:"tb-col-dot"}),t.default.createElement("h2",null,n(i.key)),t.default.createElement("span",{className:"tb-col-count"},a),t.default.createElement("span",{className:"tb-spacer"}),e==="done"&&a?t.default.createElement(y,{icon:te,label:n("Clear done"),onClick:async()=>{await f.clearDone()&&x(n("Done cards cleared"))}}):null,t.default.createElement(y,{icon:B,label:n("Add a task"),onClick:()=>q(e)})),t.default.createElement("div",{className:"tb-col-body"},r.map(c=>t.default.createElement($e,{key:c.id,task:c,t:n})),a===0?t.default.createElement("div",{className:"tb-empty"},n("No cards yet")):null))}function Be({t:e,tasks:r,query:a,filter:n}){let i=new Date,s=A(),m="",c="";try{m=new Intl.DateTimeFormat(s,{month:"long"}).format(i),c=new Intl.DateTimeFormat(s,{month:"long",day:"numeric",weekday:"long"}).format(i)}catch{m="",c=i.toDateString()}let p=r.filter(b=>b.column==="doing").length,l=r.filter(b=>b.column==="review").length;return t.default.createElement("header",{className:"tb-head"},t.default.createElement("div",{className:"tb-head-title"},t.default.createElement("span",{className:"tb-kicker"},m),t.default.createElement("div",null,t.default.createElement("h1",null,e("Task board")),t.default.createElement("p",null,e("Today is {date}",{date:c}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} running",{n:p}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} to review",{n:l})))),t.default.createElement("div",{className:"tb-head-tools"},t.default.createElement("label",{className:"tb-search"},t.default.createElement(re,{size:15}),t.default.createElement("input",{type:"search",value:a,placeholder:e("Search cards"),"aria-label":e("Search cards"),onChange:b=>O(b.target.value)}),a?t.default.createElement("button",{type:"button",className:"tb-search-clear","aria-label":e("Close"),onClick:()=>O("")},t.default.createElement(R,{size:13})):null),t.default.createElement("div",{className:"tb-filters",role:"group","aria-label":e("Task board overview")},Pe.map(b=>t.default.createElement("button",{key:b.id,type:"button",className:n===b.id?"is-on":"","aria-pressed":n===b.id,onClick:()=>be(b.id)},e(b.key)))),t.default.createElement("button",{type:"button",className:"tb-primary",onClick:()=>q("todo")},t.default.createElement(B,{size:15}),e("New task"))))}function We({t:e,defaultColumn:r,tags:a}){let[n,i]=t.default.useState(""),[s,m]=t.default.useState(""),[c,p]=t.default.useState(""),[l,b]=t.default.useState(r||"todo"),[E,k]=t.default.useState(!1),H=t.default.useRef(null);t.default.useEffect(()=>{H.current?.focus()},[]);let Ee=async u=>{if(u.preventDefault(),!n.trim()||E)return;k(!0);let ke=await f.add({title:n,note:s,tag:c,column:l});k(!1),ke&&(P(),x(e("Card added")))};return t.default.createElement("form",{className:"tb-form",onSubmit:Ee,id:"tb-add-form"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Title")),t.default.createElement("input",{ref:H,value:n,required:!0,maxLength:200,placeholder:e("What needs to happen?"),onChange:u=>i(u.target.value)})),t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Notes")),t.default.createElement("textarea",{rows:3,value:s,maxLength:4e3,placeholder:e("Any details, links, or acceptance criteria."),onChange:u=>m(u.target.value)})),t.default.createElement("div",{className:"tb-field-row"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Tag")),t.default.createElement("input",{value:c,maxLength:24,placeholder:e("Tag"),onChange:u=>p(u.target.value)})),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Column")),t.default.createElement("div",{className:"tb-seg"},Object.keys(S).map(u=>t.default.createElement("button",{key:u,type:"button",className:l===u?"is-on":"",style:{"--tb-accent":S[u].accent},onClick:()=>b(u)},t.default.createElement("i"),e(S[u].key)))))),a.length?t.default.createElement("div",{className:"tb-tagrow"},a.slice(0,6).map(u=>t.default.createElement("button",{key:u,type:"button",className:"tb-tagchip",onClick:()=>p(u)},`#${u}`))):null,t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:P},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:E||!n.trim()},e("Create"))))}function Fe({task:e,t:r}){let[a,n]=t.default.useState(!1);t.default.useEffect(()=>{n(!1)},[e.id]);let i=S[e.column],s=xe(e),m=fe(e,r),c=async()=>{if(!a){n(!0);return}D(),await f.remove(e.id)&&x(r("Card deleted"))};return t.default.createElement(U,{side:!0,title:e.title,onClose:D,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${a?"is-armed":""}`,onClick:c},r(a?"Delete twice to confirm":"Delete")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:async()=>{await f.move(e.id,"todo")&&D()}},r("Back to todo")),e.column==="done"?null:t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{if(s){await f.stop(e.id)&&x(r("Stopped the run"));return}await f.dispatch(e.id)&&x(r("Dispatched to its session"))}},s?r("Stop"):e.sessionId?r("Rerun"):r("Run")),e.column==="review"?t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{await f.accept(e.id)&&(x(r("Card accepted")),D())}},r("Accept")):null)},t.default.createElement("div",{className:"tb-detail"},t.default.createElement("div",{className:"tb-detail-chips"},t.default.createElement(ue,{column:e.column,label:r(i.key),accent:i.accent}),e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(L,{size:11}),r("From a session")):null),s?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,m),e.steps?t.default.createElement("span",{className:"tb-steps"},`${r("Steps")} \xB7 ${e.steps}`):null):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,r("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement("div",{className:"tb-bar"},t.default.createElement("i",{style:{width:`${e.progress}%`}}))),e.note?t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,r("Description")),t.default.createElement("p",{className:"tb-prose"},e.note)):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,r("Session")),e.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.sessionId.slice(0,8)),t.default.createElement(y,{icon:W,label:r("Open session"),onClick:()=>he(e.sessionId)})):t.default.createElement("p",{className:"tb-muted"},r("No session yet")," ",r("A session is created the first time you run this card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,r("Latest result")),e.result?t.default.createElement("pre",{className:"tb-result"},e.result):t.default.createElement("p",{className:"tb-muted"},r("No result yet.")),e.error?t.default.createElement("p",{className:"tb-error"},e.error):null),t.default.createElement("div",{className:"tb-meta"},r("Created")," ",V(e.createdAt,A())," \xB7 ",r("Updated")," ",j(e.updatedAt,r))))}function ve(){let e=z(),r=de(),a=t.default.useRef(null),[n,i]=t.default.useState(1200);t.default.useEffect(()=>{M();let l=setInterval(()=>{document.visibilityState==="visible"&&M()},2500);return()=>clearInterval(l)},[]),t.default.useEffect(()=>{let l=a.current;if(!l)return;let b=new ResizeObserver(([E])=>i(E.contentRect.width));return b.observe(l),()=>b.disconnect()},[]);let s=r.detailId?r.tasks.find(l=>l.id===r.detailId):null,m=[...new Set(r.tasks.map(l=>l.tag).filter(Boolean))],c=r.query.trim().toLowerCase(),p=r.tasks.filter(l=>r.filter==="active"&&l.column!=="doing"||r.filter==="review"&&l.column!=="review"?!1:c?[l.title,l.note,l.tag].some(b=>String(b||"").toLowerCase().includes(c)):!0);return t.default.createElement("div",{className:`tb-root ${n<980?"is-narrow":""}`,ref:a},t.default.createElement("style",null,ie),t.default.createElement("div",{className:"tb-ambient","aria-hidden":"true"},t.default.createElement("i"),t.default.createElement("i"),t.default.createElement("i")),t.default.createElement(Be,{t:e,tasks:r.tasks,query:r.query,filter:r.filter}),r.error&&!r.loaded?t.default.createElement("div",{className:"tb-fail"},t.default.createElement("p",null,e("Could not reach the board")),t.default.createElement("span",null,r.error),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>M()},t.default.createElement(ae,{size:14}),e("Retry"))):r.loaded?t.default.createElement("div",{className:"tb-board-wrap"},t.default.createElement("div",{className:"tb-board"},r.columns.map(l=>{let b=p.filter(k=>k.column===l),E=r.tasks.filter(k=>k.column===l).length;return t.default.createElement(je,{key:l,column:l,tasks:b,total:E,t:e})})),r.tasks.length>0&&p.length===0?t.default.createElement("p",{className:"tb-none"},e("Nothing matches this filter.")):null):t.default.createElement("div",{className:"tb-loading"},e("Loading board\u2026")),r.dialog?t.default.createElement(U,{title:e("New task"),onClose:P,width:520},t.default.createElement(We,{t:e,defaultColumn:r.dialog.column,tags:m})):null,s?t.default.createElement(Fe,{task:s,t:e}):null,t.default.createElement(ge,{toast:r.toast,onClose:()=>g({toast:null})}))}var we="task-board";function Oe({size:e=22,active:r=!1}){return ye.default.createElement(ne,{size:e,active:r})}var qe=["slots","locale"];function Qe(e){Y(e),e.effect(()=>K(e),"task-board: locale");let r=e.locale.bind(I);e.slots.inject("main",()=>e.slots.register({name:"main",key:we},ve)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:we,order:12,label:()=>r("Task board")},Oe))}
return module.exports}})
