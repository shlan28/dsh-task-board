window.__ModuleLoader__.load({id:"dsh-color-task-board",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var bt=Object.create;var ee=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var ht=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty;var vt=(e,a)=>{for(var r in a)ee(e,r,{get:a[r],enumerable:!0})},Ae=(e,a,r,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of xt(a))!ft.call(e,o)&&o!==r&&ee(e,o,{get:()=>a[o],enumerable:!(n=gt(a,o))||n.enumerable});return e};var Q=(e,a,r)=>(r=e!=null?bt(ht(e)):{},Ae(a||!e||!e.__esModule?ee(r,"default",{value:e,enumerable:!0}):r,e)),yt=e=>Ae(ee({},"__esModule",{value:!0}),e);var _t={};vt(_t,{apply:()=>jt,inject:()=>Ut});module.exports=yt(_t);var ut=Q(require("react"),1);var t=Q(require("react"),1);var De=Q(require("react"),1),te="task-board",me={"Task board":"\u4EFB\u52A1\u770B\u677F",Todo:"\u5F85\u529E","In progress":"\u8FDB\u884C\u4E2D","In review":"\u5F85\u9A8C\u6536",Done:"\u5DF2\u5B8C\u6210","New task":"\u65B0\u5EFA\u4EFB\u52A1","Search cards":"\u641C\u7D22\u4EFB\u52A1",All:"\u5168\u90E8",Active:"\u8FDB\u884C\u4E2D","To review":"\u5F85\u9A8C\u6536","Clear done":"\u6E05\u7A7A\u5DF2\u5B8C\u6210","No cards yet":"\u8FD8\u6CA1\u6709\u4EFB\u52A1","Drop here":"\u653E\u5230\u8FD9\u91CC","Add a task":"\u6DFB\u52A0\u4EFB\u52A1",Run:"\u5F00\u59CB\u6267\u884C",Stop:"\u505C\u6B62","Open session":"\u6253\u5F00\u4F1A\u8BDD",Accept:"\u9A8C\u6536\u5B8C\u6210","Accept this run":"\u9A8C\u6536\u672C\u8F6E\uFF0C\u56DE\u5F85\u529E","Mark done":"\u6807\u8BB0\u5B8C\u6210","Back to todo":"\u9000\u56DE\u5F85\u529E",Rerun:"\u91CD\u65B0\u6267\u884C",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",Create:"\u521B\u5EFA\u4EFB\u52A1",Save:"\u4FDD\u5B58",Title:"\u6807\u9898","What needs to happen?":"\u8981\u505A\u4EC0\u4E48\uFF1F",Notes:"\u8BF4\u660E","Any details, links, or acceptance criteria.":"\u8865\u5145\u7EC6\u8282\u3001\u94FE\u63A5\u6216\u9A8C\u6536\u6807\u51C6\u3002",Tag:"\u6807\u7B7E",Column:"\u6240\u5728\u5217",Progress:"\u8FDB\u5EA6",Queued:"\u6392\u961F\u4E2D",Thinking:"\u601D\u8003\u4E2D","Running {name}":"\u6B63\u5728\u6267\u884C {name}","Writing result":"\u6574\u7406\u7ED3\u679C","Waiting for review":"\u7B49\u5F85\u9A8C\u6536","Run failed":"\u6267\u884C\u51FA\u9519",Stopped:"\u5DF2\u505C\u6B62","No session yet":"\u5C1A\u672A\u5206\u914D\u4F1A\u8BDD","Latest result":"\u6700\u65B0\u7ED3\u679C","No result yet.":"\u8FD8\u6CA1\u6709\u7ED3\u679C\u3002","A session is created the first time you run this card.":"\u7B2C\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u5F20\u5361\u521B\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u3002","From a session":"\u6765\u81EA\u4F1A\u8BDD",Session:"\u4F1A\u8BDD",Workspace:"\u5DE5\u4F5C\u533A","Default directory":"\u9ED8\u8BA4\u76EE\u5F55","Removed workspace":"\u5DF2\u79FB\u9664","Workspace updated":"\u5DE5\u4F5C\u533A\u5DF2\u66F4\u65B0","A new session starts in this workspace when you start the card.":"\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u5728\u9009\u4E2D\u7684\u5DE5\u4F5C\u533A\u91CC\u65B0\u5EFA\u4F1A\u8BDD\u3002","Scheduled runs start here too.":"\u5B9A\u65F6\u6267\u884C\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5DE5\u4F5C\u533A\u91CC\u542F\u52A8\u3002","Delete this card?":"\u786E\u5B9A\u5220\u9664\u8FD9\u5F20\u5361\u5417\uFF1F","Card deleted":"\u5DF2\u5220\u9664","Card added":"\u5DF2\u6DFB\u52A0","Dispatched to its session":"\u5DF2\u6D3E\u53D1\u5230\u4F1A\u8BDD","Stopped the run":"\u5DF2\u505C\u6B62\u6267\u884C","Card accepted":"\u5DF2\u9A8C\u6536","Accepted, back to todo":"\u5DF2\u9A8C\u6536\uFF0C\u56DE\u5230\u5F85\u529E\u7B49\u4E0B\u4E00\u8F6E","Done cards cleared":"\u5DF2\u6E05\u7A7A\u5B8C\u6210\u7684\u4EFB\u52A1","Just now":"\u521A\u521A","{n}m ago":"{n} \u5206\u949F\u524D","{n}h ago":"{n} \u5C0F\u65F6\u524D","{n}d ago":"{n} \u5929\u524D","Today is {date}":"\u4ECA\u5929\u662F {date}","{n} running":"{n} \u4E2A\u8FDB\u884C\u4E2D","{n} to review":"{n} \u4E2A\u5F85\u9A8C\u6536","Task board overview":"\u4EFB\u52A1\u770B\u677F\u6982\u89C8","Nothing matches this filter.":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002","Run this card now":"\u7ACB\u5373\u6267\u884C\u8FD9\u5F20\u5361",Details:"\u8BE6\u60C5",Close:"\u5173\u95ED",Created:"\u521B\u5EFA\u4E8E",Updated:"\u66F4\u65B0\u4E8E",Steps:"\u6B65\u9AA4","Session {id}":"\u4F1A\u8BDD {id}","{n} cards":"{n} \u5F20\u5361",Description:"\u8BF4\u660E","Delete twice to confirm":"\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664","Could not reach the board":"\u770B\u677F\u6682\u65F6\u4E0D\u53EF\u7528",Retry:"\u91CD\u8BD5","Loading board\u2026":"\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026","No tasks":"\u6CA1\u6709\u4EFB\u52A1",Automation:"\u81EA\u52A8\u5316",Off:"\u4E0D\u81EA\u52A8","On a schedule":"\u5B9A\u65F6\u6267\u884C",Hourly:"\u6BCF\u5C0F\u65F6",Daily:"\u6BCF\u5929",Weekly:"\u6BCF\u5468",Mon:"\u5468\u4E00",Tue:"\u5468\u4E8C",Wed:"\u5468\u4E09",Thu:"\u5468\u56DB",Fri:"\u5468\u4E94",Sat:"\u5468\u516D",Sun:"\u5468\u65E5",Days:"\u661F\u671F",Minute:"\u5206\u949F",Time:"\u65F6\u95F4","Every hour at :{minute}":"\u6BCF\u5C0F\u65F6 :{minute} \u5206","Daily at {time}":"\u6BCF\u5929 {time}","Weekly on {days} at {time}":"\u6BCF\u5468 {days} {time}","Custom schedule":"\u81EA\u5B9A\u4E49\u89C4\u5219",Scheduled:"\u5B9A\u65F6\u4E2D","The card runs on its own and lands in review with the latest result.":"\u5230\u70B9\u81EA\u52A8\u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u7ED3\u679C\u8FDB\u5165\u5F85\u9A8C\u6536\uFF1B\u9A8C\u6536\u540E\u56DE\u5230\u5F85\u529E\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u3002",Paused:"\u5DF2\u6682\u505C",Pause:"\u6682\u505C",Resume:"\u542F\u7528","Edit rule":"\u4FEE\u6539\u89C4\u5219","Remove automation":"\u53D6\u6D88\u81EA\u52A8\u5316","Next run":"\u4E0B\u6B21\u6267\u884C","Last run":"\u4E0A\u6B21\u6267\u884C","No upcoming run":"\u6CA1\u6709\u540E\u7EED\u6267\u884C","Not run yet":"\u8FD8\u6CA1\u6709\u6267\u884C\u8FC7","This card only runs when you start it.":"\u672A\u8BBE\u7F6E\u81EA\u52A8\u5316\uFF0C\u53EA\u6709\u4F60\u624B\u52A8\u5F00\u59CB\u65F6\u624D\u4F1A\u6267\u884C\u3002","Make it automatic":"\u8BBE\u4E3A\u81EA\u52A8\u5316","Automation updated":"\u81EA\u52A8\u5316\u5DF2\u66F4\u65B0","Automation resumed":"\u81EA\u52A8\u5316\u5DF2\u542F\u7528","Automation paused":"\u81EA\u52A8\u5316\u5DF2\u6682\u505C","Automation removed":"\u81EA\u52A8\u5316\u5DF2\u53D6\u6D88","Default space":"\u9ED8\u8BA4\u7A7A\u95F4","Switch space":"\u5207\u6362\u7A7A\u95F4",Spaces:"\u7A7A\u95F4","Space name":"\u7A7A\u95F4\u540D\u79F0","New space":"\u65B0\u5EFA\u7A7A\u95F4","Create space":"\u521B\u5EFA\u7A7A\u95F4","Delete space":"\u5220\u9664\u7A7A\u95F4","e.g. Work":"\u4F8B\u5982\uFF1A\u5DE5\u4F5C","Cards in different spaces stay separate.":"\u4E0D\u540C\u7A7A\u95F4\u7684\u5361\u7247\u4E92\u4E0D\u5E72\u6270\uFF0C\u5207\u6362\u7A7A\u95F4\u540E\u53EA\u770B\u5F97\u5230\u5F53\u524D\u7A7A\u95F4\u7684\u4EFB\u52A1\u3002","Space created":"\u7A7A\u95F4\u5DF2\u521B\u5EFA","Space deleted":"\u7A7A\u95F4\u5DF2\u5220\u9664","Delete the space {name}?":"\u786E\u5B9A\u5220\u9664\u7A7A\u95F4\u300C{name}\u300D\uFF1F","Its {n} cards move to the default space.":"\u8FD9\u4E2A\u7A7A\u95F4\u91CC\u7684 {n} \u5F20\u5361\u7247\u4F1A\u79FB\u5230\u9ED8\u8BA4\u7A7A\u95F4\uFF0C\u4E0D\u4F1A\u4E22\u5931\u3002","Codex agent":"Codex \u6267\u884C\u8005","Codex runtime":"Codex \u8FD0\u884C\u65F6","Codex available":"Codex \u53EF\u7528","Codex missing":"\u672A\u68C0\u6D4B\u5230 Codex","Codex not logged in":"Codex \u672A\u767B\u5F55","ACP adapter missing":"\u7F3A\u5C11 ACP \u9002\u914D\u5668","Codex runtime error":"Codex \u8FD0\u884C\u65F6\u51FA\u9519","Not checked yet":"\u5C1A\u672A\u68C0\u6D4B","Checking\u2026":"\u68C0\u6D4B\u4E2D\u2026","Testing\u2026":"\u6D4B\u8BD5\u4E2D\u2026","Saving\u2026":"\u4FDD\u5B58\u4E2D\u2026",Recheck:"\u91CD\u65B0\u68C0\u6D4B","Test connection":"\u6D4B\u8BD5\u8FDE\u63A5","Connection OK":"\u8FDE\u63A5\u6210\u529F","Connection failed":"\u8FDE\u63A5\u5931\u8D25",Models:"\u6A21\u578B","Codex CLI path":"Codex CLI \u8DEF\u5F84","Auto-detect":"\u81EA\u52A8\u68C0\u6D4B","Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.":"\u7559\u7A7A\u81EA\u52A8\u68C0\u6D4B\uFF1B\u6709\u503C\u65F6\u4F5C\u4E3A CODEX_PATH \u4F20\u7ED9\u9002\u914D\u5668\u3002","Default model":"\u9ED8\u8BA4\u6A21\u578B","Codex default":"Codex \u9ED8\u8BA4","Leave empty to use the Codex default model.":"\u7559\u7A7A\u4F7F\u7528 Codex \u9ED8\u8BA4\u6A21\u578B\u3002","Run permission":"\u8FD0\u884C\u6743\u9650","Read only":"\u53EA\u8BFB","Workspace write (recommended)":"\u5DE5\u4F5C\u533A\u53EF\u5199\uFF08\u63A8\u8350\uFF09","Full access":"\u5B8C\u5168\u8BBF\u95EE","Codex sandbox keeps runs inside the card workspace.":"Codex \u6C99\u7BB1\u628A\u8FD0\u884C\u9650\u5236\u5728\u5361\u7247\u5DE5\u4F5C\u533A\u5185\u3002","Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.":"\u5B8C\u5168\u8BBF\u95EE\u4F1A\u8BA9 Codex \u8131\u79BB\u5DE5\u4F5C\u533A\u6C99\u7BB1\uFF0C\u4EC5\u5BF9\u53EF\u4FE1\u7684\u5361\u4F7F\u7528\u3002","Auto-approve tool calls":"\u81EA\u52A8\u786E\u8BA4\u5DE5\u5177\u8C03\u7528","Unattended cards need this. The Codex sandbox still applies.":"\u65E0\u4EBA\u503C\u5B88\u7684\u5361\u9700\u8981\u5B83\uFF1BCodex \u6C99\u7BB1\u4ECD\u7136\u751F\u6548\u3002",Advanced:"\u9AD8\u7EA7","ACP adapter command":"ACP \u9002\u914D\u5668\u547D\u4EE4","Leave empty to use npx or a codex-acp already on PATH.":"\u7559\u7A7A\u5219\u7528 npx \u6216 PATH \u91CC\u5DF2\u6709\u7684 codex-acp\u3002","Installed at":"\u5B89\u88C5\u4F4D\u7F6E",Version:"\u7248\u672C",Login:"\u767B\u5F55","ACP adapter":"ACP \u9002\u914D\u5668","Codex config saved":"Codex \u914D\u7F6E\u5DF2\u4FDD\u5B58","No response from the host":"\u5BBF\u4E3B\u6CA1\u6709\u54CD\u5E94","Could not save":"\u4FDD\u5B58\u5931\u8D25",Executor:"\u6267\u884C\u8005","DSH session":"DSH \u4F1A\u8BDD","Codex (ACP)":"Codex (ACP)",Codex:"Codex","Runs over ACP with the local Codex CLI.":"\u901A\u8FC7 ACP \u8C03\u7528\u672C\u673A Codex CLI\u3002","Open the agent settings to check Codex.":"\u6253\u5F00 agent \u8BBE\u7F6E\u68C0\u67E5 Codex\u3002","Codex runs this card over ACP in its workspace. Automation still works.":"Codex \u4F1A\u5728\u5DE5\u4F5C\u533A\u91CC\u901A\u8FC7 ACP \u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u81EA\u52A8\u5316\u7167\u5E38\u751F\u6548\u3002","DSH runs this card in a session it owns.":"DSH \u4F1A\u4E3A\u8FD9\u5F20\u5361\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u6267\u884C\u3002","Stop the run before switching executor.":"\u5148\u505C\u6B62\u6267\u884C\uFF0C\u624D\u80FD\u5207\u6362\u6267\u884C\u8005\u3002","Executor updated":"\u6267\u884C\u8005\u5DF2\u66F4\u65B0","Dispatched to Codex":"\u5DF2\u6D3E\u53D1\u7ED9 Codex","Stopped the Codex run":"\u5DF2\u505C\u6B62 Codex \u8FD0\u884C","Codex run":"Codex \u8FD0\u884C","No Codex run yet.":"\u8FD8\u6CA1\u6709 Codex \u8FD0\u884C\u3002","Codex starts in this workspace when you run the card.":"\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u5728\u9009\u4E2D\u7684\u5DE5\u4F5C\u533A\u91CC\u8C03\u7528 Codex\u3002",Today:"\u4ECA\u5929","Last 7 days":"\u6700\u8FD1 7 \u5929","Last 30 days":"\u6700\u8FD1 30 \u5929","Filter done by date":"\u6309\u5B8C\u6210\u65E5\u671F\u7B5B\u9009","No done cards match this filter":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u5DF2\u5B8C\u6210\u5361\u7247","Run todo in order":"\u6309\u987A\u5E8F\u6267\u884C\u5F85\u529E","Stop the queue":"\u505C\u6B62\u961F\u5217","Queue {done}/{total}":"\u6267\u884C\u4E2D {done}/{total}","Run {n} todo cards from top to bottom; finished cards go to Done.":"\u6309\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F\u6267\u884C {n} \u5F20\u5F85\u529E\u5361\uFF0C\u6210\u529F\u7684\u5361\u81EA\u52A8\u8FDB\u5165\u5DF2\u5B8C\u6210\u3002","Add todo cards to run them in order.":"\u5F85\u529E\u91CC\u6709\u5361\u7247\u540E\u5C31\u80FD\u6309\u987A\u5E8F\u6267\u884C\u3002","Scheduled cards are not part of the queue.":"\u5B9A\u65F6\u4EFB\u52A1\u5361\u4E0D\u8FDB\u5165\u961F\u5217\uFF0C\u7531\u5404\u81EA\u7684\u5B9A\u65F6\u89C4\u5219\u6267\u884C\u3002","Queue started: {n} cards":"\u5DF2\u5F00\u59CB\u6267\u884C {n} \u5F20\u5F85\u529E\u5361","Queue stopped; the running card finishes first":"\u961F\u5217\u5DF2\u505C\u6B62\uFF0C\u6B63\u5728\u6267\u884C\u7684\u5361\u4F1A\u8DD1\u5B8C","Queue finished":"\u961F\u5217\u6267\u884C\u5B8C\u6BD5","Queue finished, but some cards need review":"\u961F\u5217\u6267\u884C\u5B8C\u6BD5\uFF0C\u4F46\u6709\u5361\u7247\u6CA1\u8DD1\u6210\u529F\uFF0C\u7559\u5728\u5F85\u9A8C\u6536"},wt={"Task board":"Task board",Todo:"Todo","In progress":"In progress","In review":"In review",Done:"Done","New task":"New task","Search cards":"Search cards",All:"All",Active:"Active","To review":"To review","Clear done":"Clear done","No cards yet":"No cards yet","Drop here":"Drop here","Add a task":"Add a task",Run:"Run",Stop:"Stop","Open session":"Open session",Accept:"Accept","Mark done":"Mark done","Back to todo":"Back to todo",Rerun:"Rerun",Delete:"Delete",Cancel:"Cancel",Create:"Create task",Save:"Save",Title:"Title","What needs to happen?":"What needs to happen?",Notes:"Notes","Any details, links, or acceptance criteria.":"Any details, links, or acceptance criteria.",Tag:"Tag",Column:"Column",Progress:"Progress",Queued:"Queued",Thinking:"Thinking","Running {name}":"Running {name}","Writing result":"Writing result","Waiting for review":"Waiting for review","Run failed":"Run failed",Stopped:"Stopped","No session yet":"No session yet","Latest result":"Latest result","No result yet.":"No result yet.","A session is created the first time you run this card.":"A session is created the first time you run this card.","From a session":"From a session",Session:"Session",Workspace:"Workspace","Default directory":"Default directory","Removed workspace":"removed","Workspace updated":"Workspace updated","A new session starts in this workspace when you start the card.":"A new session starts in this workspace when you start the card.","Scheduled runs start here too.":"Scheduled runs start here too.","Delete this card?":"Delete this card?","Card deleted":"Card deleted","Card added":"Card added","Dispatched to its session":"Dispatched to its session","Stopped the run":"Stopped the run","Card accepted":"Card accepted","Accept this run":"Accept this run","Accepted, back to todo":"Accepted, back to todo","Done cards cleared":"Done cards cleared","Just now":"Just now","{n}m ago":"{n}m ago","{n}h ago":"{n}h ago","{n}d ago":"{n}d ago","Today is {date}":"Today is {date}","{n} running":"{n} running","{n} to review":"{n} to review","Task board overview":"Task board overview","Nothing matches this filter.":"Nothing matches this filter.","Run this card now":"Run this card now",Details:"Details",Close:"Close",Created:"Created",Updated:"Updated",Steps:"Steps","Session {id}":"Session {id}","{n} cards":"{n} cards",Description:"Description","Delete twice to confirm":"Click again to delete","Could not reach the board":"Could not reach the board",Retry:"Retry","Loading board\u2026":"Loading board\u2026","No tasks":"No tasks",Automation:"Automation",Off:"Off","On a schedule":"On a schedule",Hourly:"Hourly",Daily:"Daily",Weekly:"Weekly",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",Sun:"Sun",Days:"Days",Minute:"Minute",Time:"Time","Every hour at :{minute}":"Every hour at :{minute}","Daily at {time}":"Daily at {time}","Weekly on {days} at {time}":"Weekly on {days} at {time}","Custom schedule":"Custom schedule",Scheduled:"Scheduled","The card runs on its own and lands in review with the latest result.":"The card runs on its own and lands in review with the latest result.",Paused:"Paused",Pause:"Pause",Resume:"Resume","Edit rule":"Edit rule","Remove automation":"Remove automation","Next run":"Next run","Last run":"Last run","No upcoming run":"No upcoming run","Not run yet":"Not run yet","This card only runs when you start it.":"This card only runs when you start it.","Make it automatic":"Make it automatic","Automation updated":"Automation updated","Automation resumed":"Automation resumed","Automation paused":"Automation paused","Automation removed":"Automation removed","Default space":"Default space","Switch space":"Switch space",Spaces:"Spaces","Space name":"Space name","New space":"New space","Create space":"Create space","Delete space":"Delete space","e.g. Work":"e.g. Work","Cards in different spaces stay separate.":"Cards in different spaces stay separate; switching shows only that space.","Space created":"Space created","Space deleted":"Space deleted","Delete the space {name}?":"Delete the space {name}?","Its {n} cards move to the default space.":"Its {n} cards move to the default space.","Codex agent":"Codex agent","Codex runtime":"Codex runtime","Codex available":"Codex available","Codex missing":"Codex missing","Codex not logged in":"Codex not logged in","ACP adapter missing":"ACP adapter missing","Codex runtime error":"Codex runtime error","Not checked yet":"Not checked yet","Checking\u2026":"Checking\u2026","Testing\u2026":"Testing\u2026","Saving\u2026":"Saving\u2026",Recheck:"Recheck","Test connection":"Test connection","Connection OK":"Connection OK","Connection failed":"Connection failed",Models:"Models","Codex CLI path":"Codex CLI path","Auto-detect":"Auto-detect","Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.":"Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.","Default model":"Default model","Codex default":"Codex default","Leave empty to use the Codex default model.":"Leave empty to use the Codex default model.","Run permission":"Run permission","Read only":"Read only","Workspace write (recommended)":"Workspace write (recommended)","Full access":"Full access","Codex sandbox keeps runs inside the card workspace.":"Codex sandbox keeps runs inside the card workspace.","Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.":"Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.","Auto-approve tool calls":"Auto-approve tool calls","Unattended cards need this. The Codex sandbox still applies.":"Unattended cards need this. The Codex sandbox still applies.",Advanced:"Advanced","ACP adapter command":"ACP adapter command","Leave empty to use npx or a codex-acp already on PATH.":"Leave empty to use npx or a codex-acp already on PATH.","Installed at":"Installed at",Version:"Version",Login:"Login","ACP adapter":"ACP adapter","Codex config saved":"Codex config saved","No response from the host":"No response from the host","Could not save":"Could not save",Executor:"Executor","DSH session":"DSH session","Codex (ACP)":"Codex (ACP)",Codex:"Codex","Runs over ACP with the local Codex CLI.":"Runs over ACP with the local Codex CLI.","Open the agent settings to check Codex.":"Open the agent settings to check Codex.","Codex runs this card over ACP in its workspace. Automation still works.":"Codex runs this card over ACP in its workspace. Automation still works.","DSH runs this card in a session it owns.":"DSH runs this card in a session it owns.","Stop the run before switching executor.":"Stop the run before switching executor.","Executor updated":"Executor updated","Dispatched to Codex":"Dispatched to Codex","Stopped the Codex run":"Stopped the Codex run","Codex run":"Codex run","No Codex run yet.":"No Codex run yet.","Codex starts in this workspace when you run the card.":"Codex starts in this workspace when you run the card.",Today:"Today","Last 7 days":"Last 7 days","Last 30 days":"Last 30 days","Filter done by date":"Filter done by date","No done cards match this filter":"No done cards match this filter","Run todo in order":"Run todo in order","Stop the queue":"Stop the queue","Queue {done}/{total}":"Queue {done}/{total}","Run {n} todo cards from top to bottom; finished cards go to Done.":"Run {n} todo cards from top to bottom; finished cards go to Done.","Add todo cards to run them in order.":"Add todo cards to run them in order.","Scheduled cards are not part of the queue.":"Scheduled cards are not part of the queue.","Queue started: {n} cards":"Queue started: {n} cards","Queue stopped; the running card finishes first":"Queue stopped; the running card finishes first","Queue finished":"Queue finished","Queue finished, but some cards need review":"Queue finished, but some cards need review"},U=null;function Re(e){U=e}function Te(e){return e.locale.register(te,{en:wt,zh:me,"zh-CN":me,"zh-TW":me})}function Ie(){return U}function ae(){return De.default.useSyncExternalStore(e=>U.locale.subscribe(e),()=>U.locale.getLocale().id,()=>"en"),U.locale.bind(te)}function j(){try{return U?.locale?.getLocale?.().id||"en"}catch{return"en"}}function Y(e,a){if(!e)return"";let r=Math.max(0,Date.now()-e),n=Math.floor(r/6e4);if(n<1)return a("Just now");if(n<60)return a("{n}m ago",{n});let o=Math.floor(n/60);return o<24?a("{n}h ago",{n:o}):a("{n}d ago",{n:Math.floor(o/24)})}function ne(e,a){if(!e)return"";try{return new Intl.DateTimeFormat(a||j(),{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return new Date(e).toLocaleString()}}function Et(e,a=Date.now()){if(e==="all")return null;let r=new Date(a);if(r.setHours(0,0,0,0),e==="today")return r.getTime();let n=e==="30d"?29:6;return r.setDate(r.getDate()-n),r.getTime()}function ze(e,a,r=Date.now()){let n=Et(a,r);return n===null?!0:Number(e?.finishedAt||e?.updatedAt||0)>=n}var l=Q(require("react"),1);function R({size:e=16,strokeWidth:a=1.9,children:r,...n}){return l.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...n},r)}var re=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M12 5v14M5 12h14"})),be=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M8 5.5v13l11-6.5-11-6.5z",fill:"currentColor",stroke:"none"})),ge=e=>l.default.createElement(R,e,l.default.createElement("rect",{x:7,y:7,width:10,height:10,rx:2,fill:"currentColor",stroke:"none"})),oe=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M5 12.5l4.2 4.2L19 7"})),xe=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M4 7h16"}),l.default.createElement("path",{d:"M10 4h4l1 3H9l1-3z"}),l.default.createElement("path",{d:"M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7"}),l.default.createElement("path",{d:"M10 11v6M14 11v6"})),he=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M14 4h6v6"}),l.default.createElement("path",{d:"M20 4l-9 9"}),l.default.createElement("path",{d:"M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10"})),Pe=e=>l.default.createElement(R,e,l.default.createElement("circle",{cx:11,cy:11,r:6.5}),l.default.createElement("path",{d:"M16 16l4 4"})),se=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));var ie=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z"})),Le=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M3.5 7.5a2 2 0 012-2h3.2l1.8 2h6.5a2 2 0 012 2v8a2 2 0 01-2 2h-11.5a2 2 0 01-2-2v-10z"})),ce=e=>l.default.createElement(R,e,l.default.createElement("circle",{cx:12,cy:12,r:8.5}),l.default.createElement("path",{d:"M12 7.5V12l3 2"})),Me=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z"}),l.default.createElement("path",{d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"})),We=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M9 6l6 6-6 6"})),Fe=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M12 3.6l8.4 4.2-8.4 4.2-8.4-4.2 8.4-4.2z"}),l.default.createElement("path",{d:"M4.2 12l7.8 3.9 7.8-3.9"}),l.default.createElement("path",{d:"M4.2 16.2l7.8 3.9 7.8-3.9"})),le=e=>l.default.createElement(R,e,l.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 6.3"}),l.default.createElement("path",{d:"M20 5v6h-6"})),V=e=>l.default.createElement(R,e,l.default.createElement("rect",{x:4,y:8,width:16,height:11,rx:3.4}),l.default.createElement("path",{d:"M12 4.2v3.8"}),l.default.createElement("circle",{cx:9.2,cy:13.2,r:1.2,fill:"currentColor",stroke:"none"}),l.default.createElement("circle",{cx:14.8,cy:13.2,r:1.2,fill:"currentColor",stroke:"none"}),l.default.createElement("path",{d:"M9.6 16.1h4.8"}));function Oe({size:e=22,active:a=!1}){return l.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a?2.1:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},l.default.createElement("rect",{x:3,y:4,width:18,height:16,rx:3.4}),l.default.createElement("path",{d:"M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6"}))}function $e({size:e=26}){return l.default.createElement("span",{className:"tb-avatar",style:{width:e,height:e},"aria-hidden":"true"},l.default.createElement("svg",{width:e*.58,height:e*.58,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l.default.createElement("path",{d:"M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z"})))}var qe=`/* \u4EFB\u52A1\u770B\u677F\u6837\u5F0F\uFF1A\u989C\u8272\u8D70 DSH \u8BED\u4E49 token\uFF0C\u5217\u4E0E\u5361\u7247\u7528\u4F4E\u9971\u548C\u5F69\u8272\u70B9\u7F00\u3002 */
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

/* Codex \u6267\u884C\u8005 */
.tb-agentbtn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex: none;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 76%, transparent);
  color: var(--tb-ink2);
  transition: border-color .16s ease, color .16s ease, background .16s ease;
}
.tb-agentbtn:hover { color: var(--tb-ink); border-color: var(--tb-line2); }
.tb-agentbtn.is-ready { color: #4a9b78; border-color: color-mix(in srgb, #4fb98a 34%, var(--tb-line)); }
.tb-agentdot { width: 8px; height: 8px; border-radius: 50%; background: #b9c0cf; flex: none; }
.tb-agentbtn .tb-agentdot { position: absolute; right: 6px; bottom: 6px; width: 7px; height: 7px; box-shadow: 0 0 0 2px var(--tb-surface); }
.tb-agentbtn.is-ready .tb-agentdot, .tb-agent-status.is-ready .tb-agentdot { background: #4fb98a; }
.tb-agentbtn.is-no-login .tb-agentdot, .tb-agent-status.is-no-login .tb-agentdot { background: #e2a33c; }
.tb-agentbtn.is-error .tb-agentdot, .tb-agentbtn.is-no-codex .tb-agentdot, .tb-agentbtn.is-no-adapter .tb-agentdot,
.tb-agent-status.is-error .tb-agentdot, .tb-agent-status.is-no-codex .tb-agentdot, .tb-agent-status.is-no-adapter .tb-agentdot { background: #dd625c; }
.tb-chip.is-codex { background: color-mix(in srgb, #7c6cf0 14%, var(--tb-surface)); color: color-mix(in srgb, #5b4bd0 78%, var(--tb-ink)); }
.tb-exec-seg { margin-top: 2px; }
.tb-agent-form { gap: 12px; }
.tb-agent-status {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 12px;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 70%, transparent);
}
.tb-agent-status-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.tb-agent-status-text b { font-size: 12.5px; font-weight: 600; }
.tb-agent-status-text span { font-size: 11.5px; color: var(--tb-ink2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.tb-agent-busy { margin-left: auto; font-size: 11px; color: var(--tb-ink2); }
.tb-agent-facts {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 6px 12px;
  margin: 0;
  padding: 10px 12px;
  border: 1px dashed var(--tb-line);
  border-radius: 12px;
  font-size: 11.5px;
}
.tb-agent-facts dt { color: var(--tb-ink2); }
.tb-agent-facts dd { margin: 0; color: var(--tb-ink); min-width: 0; overflow-wrap: anywhere; }
.tb-agent-facts code { font-family: var(--dsw-alias-font-mono, ui-monospace, SFMono-Regular, Menlo, monospace); font-size: 11px; }
.tb-agent-check { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: var(--tb-ink2); }
.tb-agent-check input { margin-top: 2px; }
.tb-agent-check b { display: block; color: var(--tb-ink); font-size: 12px; font-weight: 600; }
.tb-agent-check small { display: block; font-size: 11px; color: var(--tb-ink2); }
.tb-agent-advanced { align-self: flex-start; padding: 0; font-size: 11.5px; color: var(--tb-ink2); }
.tb-agent-advanced:hover { color: var(--tb-ink); }
.tb-agent-message { display: flex; align-items: flex-start; gap: 6px; padding: 8px 10px; border-radius: 10px; font-size: 12px; line-height: 18px; }
.tb-agent-message.is-ok { background: color-mix(in srgb, #4fb98a 12%, transparent); color: #2f7a5b; }
.tb-agent-message.is-error { background: color-mix(in srgb, #dd625c 12%, transparent); color: #b23c39; white-space: pre-wrap; }

/* \u7A7A\u95F4\u961F\u5217\uFF1A\u9875\u5934\u4E00\u952E\u6309\u987A\u5E8F\u6267\u884C\u5F85\u529E */
.tb-queue {
  --tb-accent: #74cbaa;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 12px;
  flex: none;
  border-radius: 12px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 76%, transparent);
  color: var(--tb-ink);
  font-size: 12px;
  font-weight: 550;
  white-space: nowrap;
  transition: border-color .16s ease, background .16s ease, color .16s ease;
}
.tb-queue:hover { border-color: color-mix(in srgb, var(--tb-accent) 38%, var(--tb-line)); }
.tb-queue.is-active {
  border-color: color-mix(in srgb, var(--tb-accent) 46%, var(--tb-line));
  background: color-mix(in srgb, var(--tb-accent) 14%, var(--tb-surface));
  color: color-mix(in srgb, #3f9c7c 72%, var(--tb-ink));
}
.tb-queue-count {
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

/* \u5DF2\u5B8C\u6210\uFF1A\u4E24\u884C\u5C0F\u5361 + \u65E5\u671F\u7B5B\u9009 */
.tb-card.is-compact { gap: 2px; padding: 8px 11px; border-radius: 12px; }
.tb-done-line { display: flex; align-items: center; gap: 6px; min-width: 0; }
.tb-done-dot {
  width: 6px;
  height: 6px;
  flex: none;
  border-radius: 50%;
  background: var(--tb-accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--tb-accent) 18%, transparent);
}
.tb-card.is-compact .tb-card-title {
  flex: 1;
  min-width: 0;
  -webkit-line-clamp: 1;
  font-size: 12.5px;
  font-weight: 550;
  line-height: 17px;
}
.tb-done-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-left: 12px;
  font-size: 10.5px;
  line-height: 15px;
  color: color-mix(in srgb, var(--tb-ink2) 88%, transparent);
}
.tb-done-tag { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; opacity: .8; }
.tb-done-filter { display: flex; align-items: center; gap: 6px; padding: 0 9px 7px; }
.tb-done-filter select {
  height: 24px;
  padding: 0 6px;
  border-radius: 7px;
  border: 1px solid var(--tb-line);
  background: color-mix(in srgb, var(--tb-surface) 62%, transparent);
  color: var(--tb-ink2);
  font-size: 10.5px;
  outline: none;
}
.tb-done-filter select:focus { border-color: color-mix(in srgb, var(--tb-brand) 55%, var(--tb-line)); }
.tb-done-total { margin-left: auto; color: color-mix(in srgb, var(--tb-ink2) 82%, transparent); font-size: 10.5px; white-space: nowrap; }
`;var c=Q(require("react"),1);var Qe=Q(require("react"),1),Ct="/task-board",Be=["todo","doing","review","done"],$="default",A={tasks:[],columns:Be,revision:-1,stamp:"",loaded:!1,error:null,filter:"all",query:"",doneRange:"7d",dialog:null,detailId:null,toast:null,dragging:null,spaces:[],activeSpaceId:"",spacesRevision:"",workspaces:[],defaultWorkspacePath:"",workspacesRevision:"",agent:null,agentRevision:""},fe=new Set;function He(){return A}function D(e){A={...A,...typeof e=="function"?e(A):e},fe.forEach(a=>a())}function Nt(e){return fe.add(e),()=>fe.delete(e)}function B(){return Qe.default.useSyncExternalStore(Nt,He,He)}async function Ue(e,a){let r=await fetch(Ct+e,{cache:"no-store",...a,headers:{...a?.body?{"content-type":"application/json"}:{},...a?.headers||{}}}),n=await r.json().catch(()=>({}));if(!r.ok)throw new Error(n?.error||`HTTP ${r.status}`);return n}function f(e,{error:a=!1}={}){D({toast:{text:e,error:a,key:Date.now()}})}async function de(){try{let e=await Ue("/state"),a=e?.revision??0,r=`${a}:${e?.schedulesRevision??""}:${e?.workspacesRevision??""}:${e?.spacesRevision??""}:${e?.agentRevision??""}`;return A.loaded&&r===A.stamp&&!A.error||D({tasks:Array.isArray(e?.tasks)?e.tasks:[],columns:Array.isArray(e?.columns)&&e.columns.length?e.columns:Be,spaces:Array.isArray(e?.spaces)?e.spaces:[],activeSpaceId:typeof e?.activeSpaceId=="string"?e.activeSpaceId:"",spacesRevision:typeof e?.spacesRevision=="string"?e.spacesRevision:"",workspaces:Array.isArray(e?.workspaces)?e.workspaces:[],defaultWorkspacePath:typeof e?.defaultWorkspacePath=="string"?e.defaultWorkspacePath:"",workspacesRevision:typeof e?.workspacesRevision=="string"?e.workspacesRevision:"",agent:e?.agent??null,agentRevision:typeof e?.agentRevision=="string"?e.agentRevision:"",revision:a,stamp:r,loaded:!0,error:null}),!0}catch(e){return D({loaded:!0,error:e?.message||String(e)}),!1}}async function T(e,a={},{soft:r=!1}={}){try{let n=await Ue("/op",{method:"POST",body:JSON.stringify({op:e,...a})});if(n?.state){let o=n.state.revision??A.revision;D({tasks:Array.isArray(n.state.tasks)?n.state.tasks:A.tasks,spaces:Array.isArray(n.state.spaces)?n.state.spaces:A.spaces,activeSpaceId:typeof n.state.activeSpaceId=="string"?n.state.activeSpaceId:A.activeSpaceId,spacesRevision:typeof n.state.spacesRevision=="string"?n.state.spacesRevision:A.spacesRevision,workspaces:Array.isArray(n.state.workspaces)?n.state.workspaces:A.workspaces,defaultWorkspacePath:typeof n.state.defaultWorkspacePath=="string"?n.state.defaultWorkspacePath:A.defaultWorkspacePath,workspacesRevision:typeof n.state.workspacesRevision=="string"?n.state.workspacesRevision:A.workspacesRevision,agent:n.state.agent??A.agent,agentRevision:typeof n.state.agentRevision=="string"?n.state.agentRevision:A.agentRevision,revision:o,stamp:`${o}:${n.state.schedulesRevision??""}:${n.state.workspacesRevision??""}:${n.state.spacesRevision??""}:${n.state.agentRevision??""}`,loaded:!0,error:null})}if(!n?.ok){if(r)return n;throw new Error(n?.error||"\u64CD\u4F5C\u5931\u8D25")}return n}catch(n){return f(n?.message||String(n),{error:!0}),null}}var E={add:e=>T("add",e),update:(e,a)=>T("update",{id:e,...a}),move:(e,a)=>T("move",{id:e,column:a}),dispatch:e=>T("dispatch",{id:e}),stop:e=>T("stop",{id:e}),accept:e=>T("accept",{id:e}),remove:e=>T("remove",{id:e}),clearDone:e=>T("clearDone",e?{spaceId:e}:{}),startQueue:e=>T("startQueue",e?{spaceId:e}:{}),stopQueue:e=>T("stopQueue",e?{spaceId:e}:{}),addSpace:e=>T("addSpace",{name:e}),removeSpace:e=>T("removeSpace",{id:e}),selectSpace:e=>T("selectSpace",{id:e}),detectAgent:()=>T("agentDetect",{},{soft:!0}),testAgent:()=>T("agentTest",{},{soft:!0}),saveAgent:e=>T("agentSave",{config:e},{soft:!0})};async function je(e){return!e||A.activeSpaceId===e?null:(D({detailId:null}),E.selectSpace(e))}function _e(e){D({filter:e})}function ve(e){D({query:e})}function Ke(e){D({doneRange:e})}function ye(e="todo"){D({dialog:{kind:"task",column:e}})}function Xe(){D({dialog:{kind:"space"}})}function Ye(e){D({dialog:{kind:"remove-space",id:e}})}function Ve(){D({dialog:{kind:"agent"}})}function M(){D({dialog:null})}function we(e){D({detailId:e})}function J(){D({detailId:null})}var St=[{id:"read-only",key:"Read only"},{id:"workspace-write",key:"Workspace write (recommended)"},{id:"agent-full-access",key:"Full access"}];function Je(e,a){switch(e?.state){case"ready":return a("Codex available");case"no-codex":return a("Codex missing");case"no-login":return a("Codex not logged in");case"no-adapter":return a("ACP adapter missing");case"error":return a("Codex runtime error");default:return a("Not checked yet")}}function Ze({t:e}){let r=B().agent,n=r?.status,o=r?.config||{},[d,u]=c.default.useState(()=>({codexPath:o.codexPath||"",adapterCommand:o.adapterCommand||"",model:o.model||"",permissionMode:o.permissionMode||"workspace-write",autoApprove:o.autoApprove!==!1})),[s,g]=c.default.useState(!!o.adapterCommand),[x,y]=c.default.useState(""),[i,h]=c.default.useState(null),k=m=>u(P=>({...P,...m})),w=(m,P)=>{if(!m){h({text:P||e("No response from the host"),error:!0});return}let H=m.state==="ready";h({text:P||m.message||Je(m,e),error:!H})},z=async()=>{if(x)return;y("detect");let m=await E.detectAgent();y(""),w(m?.agent?.status,m?.agent?.status?.message)},W=async()=>{if(x)return;y("test");let m=await E.testAgent();y(""),m&&(m.ok?h({text:m.models?.length?`${e("Connection OK")} \xB7 ${e("Models")}: ${m.models.join(", ")}`:e("Connection OK"),error:!1}):h({text:m.error||e("Connection failed"),error:!0}))},F=async m=>{if(m.preventDefault(),x)return;y("save");let P=await E.saveAgent(d);if(y(""),!!P){if(!P.ok){h({text:P.error||e("Could not save"),error:!0});return}w(P.agent?.status,e("Codex config saved")),f(e("Codex config saved"))}};c.default.useEffect(()=>{let m=n?.checkedAt||0;(!m||Date.now()-m>5*6e4)&&z()},[]);let p=n?.state||"unknown",N=n?.adapter?.command?.length?n.adapter.command.join(" "):"",L=Array.isArray(n?.models)?n.models:[],I=n?.codex;return c.default.createElement("form",{className:"tb-form tb-agent-form",onSubmit:F},c.default.createElement("div",{className:`tb-agent-status is-${p}`},c.default.createElement("span",{className:"tb-agentdot"}),c.default.createElement("div",{className:"tb-agent-status-text"},c.default.createElement("b",null,Je(n,e)),c.default.createElement("span",null,n?.message||e("Not checked yet"))),x==="detect"?c.default.createElement("span",{className:"tb-agent-busy"},e("Checking\u2026")):null),c.default.createElement("dl",{className:"tb-agent-facts"},c.default.createElement("dt",null,e("Installed at")),c.default.createElement("dd",null,I?.path?c.default.createElement("code",null,I.path):"\u2014"),c.default.createElement("dt",null,e("Version")),c.default.createElement("dd",null,I?.version||"\u2014"),c.default.createElement("dt",null,e("Login")),c.default.createElement("dd",null,I?.login||"\u2014"),c.default.createElement("dt",null,e("ACP adapter")),c.default.createElement("dd",null,N?c.default.createElement("code",null,N):"\u2014")),c.default.createElement("label",{className:"tb-field"},c.default.createElement("span",null,e("Codex CLI path")),c.default.createElement("input",{value:d.codexPath,placeholder:e("Auto-detect"),onChange:m=>k({codexPath:m.target.value})}),c.default.createElement("p",{className:"tb-hint"},e("Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH."))),c.default.createElement("label",{className:"tb-field"},c.default.createElement("span",null,e("Default model")),c.default.createElement("input",{value:d.model,list:"tb-codex-models",placeholder:e("Codex default"),onChange:m=>k({model:m.target.value})}),c.default.createElement("datalist",{id:"tb-codex-models"},L.map(m=>c.default.createElement("option",{key:m,value:m}))),c.default.createElement("p",{className:"tb-hint"},e("Leave empty to use the Codex default model."))),c.default.createElement("label",{className:"tb-field"},c.default.createElement("span",null,e("Run permission")),c.default.createElement("select",{value:d.permissionMode,onChange:m=>k({permissionMode:m.target.value})},St.map(m=>c.default.createElement("option",{key:m.id,value:m.id},e(m.key)))),c.default.createElement("p",{className:"tb-hint"},d.permissionMode==="agent-full-access"?e("Full access lets Codex run without the workspace sandbox. Use it only for cards you trust."):e("Codex sandbox keeps runs inside the card workspace."))),c.default.createElement("label",{className:"tb-agent-check"},c.default.createElement("input",{type:"checkbox",checked:d.autoApprove!==!1,onChange:m=>k({autoApprove:m.target.checked})}),c.default.createElement("span",null,c.default.createElement("b",null,e("Auto-approve tool calls")),c.default.createElement("small",null,e("Unattended cards need this. The Codex sandbox still applies.")))),c.default.createElement("button",{type:"button",className:"tb-agent-advanced",onClick:()=>g(m=>!m)},s?"\u2212":"+"," ",e("Advanced")),s?c.default.createElement("label",{className:"tb-field"},c.default.createElement("span",null,e("ACP adapter command")),c.default.createElement("input",{value:d.adapterCommand,placeholder:"npx -y @agentclientprotocol/codex-acp",onChange:m=>k({adapterCommand:m.target.value})}),c.default.createElement("p",{className:"tb-hint"},e("Leave empty to use npx or a codex-acp already on PATH."))):null,i?c.default.createElement("p",{className:i.error?"tb-agent-message is-error":"tb-agent-message is-ok"},i.error?null:c.default.createElement(oe,{size:14}),i.text):null,c.default.createElement("div",{className:"tb-dialog-foot"},c.default.createElement("button",{type:"button",className:"tb-btn",disabled:!!x,onClick:z},c.default.createElement(le,{size:14}),e("Recheck")),c.default.createElement("button",{type:"button",className:"tb-btn",disabled:!!x,onClick:W},e(x==="test"?"Testing\u2026":"Test connection")),c.default.createElement("span",{className:"tb-spacer"}),c.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:!!x},e(x==="save"?"Saving\u2026":"Save"))))}var C=Q(require("react"),1);function q({icon:e,label:a,onClick:r,disabled:n=!1,tone:o="",className:d=""}){return C.default.createElement("button",{type:"button",className:`tb-iconbtn ${o?`is-${o}`:""} ${d}`.trim(),onClick:u=>{u.stopPropagation(),r?.(u)},disabled:n,title:a,"aria-label":a},C.default.createElement(e,{size:16}))}function Ge({value:e=0,segments:a=10}){let r=Math.round(Math.max(0,Math.min(100,e))/100*a);return C.default.createElement("div",{className:"tb-dots",role:"img","aria-label":`${e}%`},Array.from({length:a},(n,o)=>C.default.createElement("span",{key:o,className:o<r?"is-on":""})))}function et({column:e,label:a,accent:r}){return C.default.createElement("span",{className:"tb-status",style:r?{"--tb-accent":r}:void 0},C.default.createElement("i",null),a)}function _({title:e,onClose:a,children:r,footer:n,width:o=480,side:d=!1}){let u=ae(),s=C.default.useId();return C.default.useEffect(()=>{let g=x=>{x.key==="Escape"&&(x.stopPropagation(),a())};return window.addEventListener("keydown",g,!0),()=>window.removeEventListener("keydown",g,!0)},[a]),C.default.createElement("div",{className:d?"tb-scrim is-side":"tb-scrim",onPointerDown:g=>{g.target===g.currentTarget&&a()}},C.default.createElement("div",{className:d?"tb-sheet":"tb-dialog",role:"dialog","aria-modal":"true","aria-labelledby":s,style:{width:d?void 0:o}},C.default.createElement("header",{className:"tb-dialog-head"},C.default.createElement("h2",{id:s},e),C.default.createElement(q,{icon:se,label:u("Close"),onClick:a})),C.default.createElement("div",{className:"tb-dialog-body"},r),n?C.default.createElement("footer",{className:"tb-dialog-foot"},n):null))}function tt({toast:e,onClose:a}){let r=C.default.useRef(a);return r.current=a,C.default.useEffect(()=>{if(!e)return;let n=setTimeout(()=>r.current(),e.error?4200:2600);return()=>clearTimeout(n)},[e]),e?C.default.createElement("div",{className:`tb-toast ${e.error?"is-error":""}`,role:"status",key:e.key},e.error?null:C.default.createElement(oe,{size:15}),C.default.createElement("span",null,e.text)):null}var K={todo:{key:"Todo",accent:"#8ea6f4"},doing:{key:"In progress",accent:"#f0b07c"},review:{key:"In review",accent:"#ef93b7"},done:{key:"Done",accent:"#74cbaa"}},At=[{id:"all",key:"All"},{id:"active",key:"Active"},{id:"review",key:"To review"}],Dt=[{id:"today",key:"Today"},{id:"7d",key:"Last 7 days"},{id:"30d",key:"Last 30 days"},{id:"all",key:"All"}],at=["MO","TU","WE","TH","FR","SA","SU"],nt={MO:"Mon",TU:"Tue",WE:"Wed",TH:"Thu",FR:"Fri",SA:"Sat",SU:"Sun"},Rt=[{id:"hourly",key:"Hourly"},{id:"daily",key:"Daily"},{id:"weekly",key:"Weekly"}],Tt=["00","05","10","15","20","25","30","35","40","45","50","55"];function It(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function rt(){let e=new Date().getDay();return["SU","MO","TU","WE","TH","FR","SA"][e]||"MO"}function zt(e){let a=Number(String(e||"09:00").slice(3,5))||0;return String(Math.round(a/5)*5%60).padStart(2,"0")}function Ee(e,a){if(!e)return"";let r=e.time||"09:00";if(e.frequency==="hourly")return a("Every hour at :{minute}",{minute:r.slice(3,5)});if(e.frequency==="weekly"){let n=e.weekdays?.length?e.weekdays:["MO"];return a("Weekly on {days} at {time}",{days:n.map(o=>a(nt[o])).join(" "),time:r})}return e.frequency==="daily"?a("Daily at {time}",{time:r}):e.rrule?a("Custom schedule"):a("Scheduled")}function ot(e){return{frequency:e.frequency,time:e.time,weekdays:e.frequency==="weekly"?e.weekdays:[],timeZone:It()}}function ke(){return{frequency:"daily",time:"09:00",weekdays:[rt()]}}function st(e){let a=String(e||"").replace(/[\\/]+$/,""),r=a.split(/[\\/]/);return r[r.length-1]||a}function Ne(e){return e?e.title||st(e.path):""}function Ce(e,a){return!e||e.id===$?a("Default space"):e.name||a("Default space")}function Pt({t:e,spaces:a,activeSpaceId:r,counts:n}){let[o,d]=t.default.useState(!1),u=t.default.useRef(null);t.default.useEffect(()=>{if(!o)return;let i=k=>{u.current?.contains(k.target)||d(!1)},h=k=>{k.key==="Escape"&&d(!1)};return document.addEventListener("pointerdown",i),document.addEventListener("keydown",h),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",h)}},[o]);let s=a.length?a:[{id:$,name:"",order:0}],g=s.find(i=>i.id===r)||s[0],x=i=>Number(n?.[i.id])||0,y=i=>{d(!1),i.id!==g.id&&je(i.id)};return t.default.createElement("div",{className:"tb-space",ref:u},t.default.createElement("button",{type:"button",className:`tb-space-btn ${o?"is-open":""}`,title:e("Switch space"),"aria-haspopup":"menu","aria-expanded":o,onClick:()=>d(i=>!i)},t.default.createElement(Fe,{size:15}),t.default.createElement("span",{className:"tb-space-name"},Ce(g,e)),t.default.createElement("span",{className:"tb-space-count"},x(g)),t.default.createElement(We,{size:13,className:"tb-space-caret"})),o?t.default.createElement("div",{className:"tb-space-menu",role:"menu","aria-label":e("Spaces")},s.map(i=>t.default.createElement("div",{key:i.id,role:"menuitemradio","aria-checked":i.id===g.id,tabIndex:0,className:`tb-space-item ${i.id===g.id?"is-on":""}`,onClick:()=>y(i),onKeyDown:h=>{h.target===h.currentTarget&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),y(i))}},t.default.createElement("span",{className:"tb-space-item-name"},Ce(i,e)),t.default.createElement("span",{className:"tb-space-item-count"},x(i)),i.id===$?null:t.default.createElement("button",{type:"button",className:"tb-space-del",title:e("Delete space"),"aria-label":e("Delete space"),onClick:h=>{h.stopPropagation(),d(!1),Ye(i.id)}},t.default.createElement(xe,{size:13})))),t.default.createElement("div",{className:"tb-space-sep"}),t.default.createElement("button",{type:"button",className:"tb-space-new",onClick:()=>{d(!1),Xe()}},t.default.createElement(re,{size:14}),e("New space"))):null)}function Lt({t:e}){let[a,r]=t.default.useState(""),[n,o]=t.default.useState(!1),d=t.default.useRef(null);t.default.useEffect(()=>{d.current?.focus()},[]);let u=async s=>{s.preventDefault();let g=a.trim();if(!g||n)return;o(!0);let x=await E.addSpace(g);o(!1),x&&(M(),f(e("Space created")))};return t.default.createElement("form",{className:"tb-form",onSubmit:u},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Space name")),t.default.createElement("input",{ref:d,value:a,required:!0,maxLength:60,placeholder:e("e.g. Work"),onChange:s=>r(s.target.value)})),t.default.createElement("p",{className:"tb-hint"},e("Cards in different spaces stay separate.")),t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:M},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:n||!a.trim()},e("Create space"))))}function Mt({t:e,space:a,count:r}){let[n,o]=t.default.useState(!1),d=async()=>{if(n)return;o(!0);let u=await E.removeSpace(a.id);o(!1),u&&(M(),f(e("Space deleted")))};return t.default.createElement(_,{title:e("Delete space"),onClose:M,width:440,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:"tb-btn",onClick:M},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn is-danger",disabled:n,onClick:d},e("Delete space")))},t.default.createElement("div",{className:"tb-confirm"},t.default.createElement("p",{className:"tb-muted"},e("Delete the space {name}?",{name:Ce(a,e)})),t.default.createElement("p",{className:"tb-muted"},e("Its {n} cards move to the default space.",{n:r}))))}function it({t:e,value:a,onChange:r}){let n=a.frequency||"daily",o=Array.isArray(a.weekdays)?a.weekdays:[],d=s=>{let g=o.includes(s)?o.filter(x=>x!==s):[...o,s];r({weekdays:g.length?at.filter(x=>g.includes(x)):[]})},u=s=>{r(s==="hourly"?{frequency:s,time:`00:${zt(a.time)}`}:{frequency:s,time:n==="hourly"?"09:00":a.time||"09:00"})};return t.default.createElement("div",{className:"tb-auto-editor"},t.default.createElement("div",{className:"tb-seg"},Rt.map(s=>t.default.createElement("button",{key:s.id,type:"button",className:n===s.id?"is-on":"",onClick:()=>u(s.id)},e(s.key)))),n==="weekly"?t.default.createElement("div",{className:"tb-weekdays",role:"group","aria-label":e("Days")},at.map(s=>t.default.createElement("button",{key:s,type:"button",className:o.includes(s)?"is-on":"","aria-pressed":o.includes(s),onClick:()=>d(s)},e(nt[s])))):null,n==="hourly"?t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Minute")),t.default.createElement("select",{value:String(a.time||"00:00").slice(3,5),onChange:s=>r({time:`00:${s.target.value}`})},Tt.map(s=>t.default.createElement("option",{key:s,value:s},`:${s}`)))):t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Time")),t.default.createElement("input",{type:"time",value:a.time||"09:00",onChange:s=>r({time:s.target.value||"09:00"})})),t.default.createElement("p",{className:"tb-hint"},e("The card runs on its own and lands in review with the latest result.")))}function pe(e){return typeof e.running=="boolean"?e.running:e.column==="doing"}function ct(e,a){switch(e.phase){case"queued":return a("Queued");case"thinking":return a("Thinking");case"tool":return a("Running {name}",{name:e.toolName||"tool"});case"writing":return a("Writing result");case"review":return a("Waiting for review");case"error":return a("Run failed");case"stopped":return a("Stopped");default:return""}}function lt(e){if(e)try{let a=Ie()?.get("uiWorkspace");a?.openSession?a.openSession(e):f("This deployment cannot open sessions",{error:!0})}catch(a){f(a?.message||String(a),{error:!0})}}function Wt({task:e,t:a}){let r=pe(e),n=K[e.column]?.accent,o=ct(e,a),d={draggable:!0,style:{"--tb-accent":n},tabIndex:0,"aria-label":e.title,onClick:()=>we(e.id),onKeyDown:u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),we(e.id))},onDragStart:u=>{u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/task-id",e.id),u.currentTarget.classList.add("is-dragging")},onDragEnd:u=>u.currentTarget.classList.remove("is-dragging")};return e.column==="done"?t.default.createElement("article",{...d,className:"tb-card is-compact"},t.default.createElement("div",{className:"tb-done-line"},t.default.createElement("span",{className:"tb-done-dot","aria-hidden":"true"}),t.default.createElement("h3",{className:"tb-card-title",title:e.note||e.title},e.title)),t.default.createElement("div",{className:"tb-done-meta"},t.default.createElement("span",{title:ne(e.finishedAt||e.updatedAt,j())},Y(e.finishedAt||e.updatedAt,a)),e.tag?t.default.createElement("span",{className:"tb-done-tag"},`#${e.tag}`):null)):t.default.createElement("article",{...d,className:`tb-card ${r?"is-running":""}`},t.default.createElement("div",{className:"tb-card-chips"},e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.workspacePath?t.default.createElement("span",{className:"tb-chip is-quiet",title:e.workspacePath},t.default.createElement(Le,{size:11}),Ne(e)):null,e.automation?t.default.createElement("span",{className:`tb-chip is-time ${e.automation.active?"":"is-muted"}`,title:Ee(e.automation,a)},t.default.createElement(ce,{size:11}),Ee(e.automation,a)):null,e.executor==="codex"?t.default.createElement("span",{className:"tb-chip is-codex",title:a("Runs over ACP with the local Codex CLI.")},t.default.createElement(V,{size:11}),a("Codex")):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(ie,{size:11}),a("From a session")):e.sessionId?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(ie,{size:11}),a("Session")):null),t.default.createElement("h3",{className:"tb-card-title"},e.title),e.note?t.default.createElement("p",{className:"tb-card-note"},e.note):null,r?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,o),e.steps?t.default.createElement("span",{className:"tb-steps"},`\xB7 ${e.steps}`):null):null,t.default.createElement("div",{className:"tb-card-progress"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement(Ge,{value:e.progress})),t.default.createElement("footer",{className:"tb-card-foot"},t.default.createElement($e,{size:24}),t.default.createElement("span",{className:"tb-time"},Y(e.updatedAt,a)),t.default.createElement("span",{className:"tb-spacer"}),e.sessionId?t.default.createElement(q,{icon:he,label:a("Open session"),onClick:()=>lt(e.sessionId)}):null,r?t.default.createElement(q,{icon:ge,label:a("Stop"),onClick:async()=>{await E.stop(e.id)&&f(a(e.executor==="codex"?"Stopped the Codex run":"Stopped the run"))}}):t.default.createElement(q,{icon:be,label:e.sessionId?a("Rerun"):a("Run"),onClick:async()=>{await E.dispatch(e.id)&&f(a(e.executor==="codex"?"Dispatched to Codex":"Dispatched to its session"))}})))}function Ft({column:e,tasks:a,total:r,t:n,spaceId:o,doneRange:d,onDoneRangeChange:u}){let s=K[e],[g,x]=t.default.useState(!1),y=e==="done"?a.length:r;return t.default.createElement("section",{className:`tb-col ${g?"is-over":""}`,"data-column":e,style:{"--tb-accent":s.accent},onDragOver:i=>{i.preventDefault(),i.dataTransfer.dropEffect="move",g||x(!0)},onDragLeave:i=>{i.currentTarget.contains(i.relatedTarget)||x(!1)},onDrop:i=>{i.preventDefault(),x(!1);let h=i.dataTransfer.getData("text/task-id");h&&E.move(h,e)}},t.default.createElement("header",{className:"tb-col-head"},t.default.createElement("span",{className:"tb-col-dot"}),t.default.createElement("h2",null,n(s.key)),t.default.createElement("span",{className:"tb-col-count"},y),t.default.createElement("span",{className:"tb-spacer"}),e==="done"&&r?t.default.createElement(q,{icon:xe,label:n("Clear done"),onClick:async()=>{await E.clearDone(o)&&f(n("Done cards cleared"))}}):null,t.default.createElement(q,{icon:re,label:n("Add a task"),onClick:()=>ye(e)})),e==="done"?t.default.createElement("div",{className:"tb-done-filter"},t.default.createElement("select",{value:d,"aria-label":n("Filter done by date"),onChange:i=>u(i.target.value)},Dt.map(i=>t.default.createElement("option",{key:i.id,value:i.id},n(i.key)))),t.default.createElement("span",{className:"tb-done-total"},n("{n} cards",{n:r}))):null,t.default.createElement("div",{className:"tb-col-body"},a.map(i=>t.default.createElement(Wt,{key:i.id,task:i,t:n})),r===0?t.default.createElement("div",{className:"tb-empty"},n("No cards yet")):e==="done"&&a.length===0?t.default.createElement("div",{className:"tb-empty"},n("No done cards match this filter")):null))}function Ot({t:e,space:a,tasks:r}){let n=a?.queue,o=n?.active===!0,d=o&&n.cardIds?.length||0,u=o?Math.min(n.index||0,d):0,s=(r||[]).filter(h=>h.column==="todo"&&!h.automation&&!pe(h)),g=(r||[]).filter(h=>h.column==="todo"&&!pe(h)),x=t.default.useRef(o);t.default.useEffect(()=>{x.current&&!o&&(n?.stopped?f(e("Queue stopped; the running card finishes first")):n?.error?f(e("Queue finished, but some cards need review"),{error:!0}):f(e("Queue finished"))),x.current=o},[o,n?.stopped,n?.error]);let y=async()=>{let h=await E.startQueue(a?.id);h?.ok&&f(e("Queue started: {n} cards",{n:h.count}))},i=async()=>{await E.stopQueue(a?.id)};return t.default.createElement("button",{type:"button",className:`tb-queue ${o?"is-active":""}`,disabled:!o&&!s.length,title:o?e("Stop the queue"):s.length?e("Run {n} todo cards from top to bottom; finished cards go to Done.",{n:s.length}):g.length?e("Scheduled cards are not part of the queue."):e("Add todo cards to run them in order."),"aria-label":e(o?"Stop the queue":"Run todo in order"),onClick:o?i:y},o?t.default.createElement("span",{className:"tb-pulse"}):t.default.createElement(be,{size:13}),t.default.createElement("span",null,o?e("Queue {done}/{total}",{done:u,total:d}):e("Run todo in order")),o?t.default.createElement(ge,{size:13}):s.length?t.default.createElement("span",{className:"tb-queue-count"},s.length):null)}function $t({t:e,tasks:a,query:r,filter:n,spaces:o,activeSpaceId:d,spaceCounts:u,activeSpace:s}){let g=new Date,x=j(),y="",i="";try{y=new Intl.DateTimeFormat(x,{month:"long"}).format(g),i=new Intl.DateTimeFormat(x,{month:"long",day:"numeric",weekday:"long"}).format(g)}catch{y="",i=g.toDateString()}let h=a.filter(w=>w.column==="doing").length,k=a.filter(w=>w.column==="review").length;return t.default.createElement("header",{className:"tb-head"},t.default.createElement("div",{className:"tb-head-title"},t.default.createElement("span",{className:"tb-kicker"},y),t.default.createElement("div",null,t.default.createElement("h1",null,e("Task board")),t.default.createElement("p",null,e("Today is {date}",{date:i}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} running",{n:h}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} to review",{n:k})))),t.default.createElement("div",{className:"tb-head-tools"},t.default.createElement("label",{className:"tb-search"},t.default.createElement(Pe,{size:15}),t.default.createElement("input",{type:"search",value:r,placeholder:e("Search cards"),"aria-label":e("Search cards"),onChange:w=>ve(w.target.value)}),r?t.default.createElement("button",{type:"button",className:"tb-search-clear","aria-label":e("Close"),onClick:()=>ve("")},t.default.createElement(se,{size:13})):null),t.default.createElement("div",{className:"tb-filters",role:"group","aria-label":e("Task board overview")},At.map(w=>t.default.createElement("button",{key:w.id,type:"button",className:n===w.id?"is-on":"","aria-pressed":n===w.id,onClick:()=>_e(w.id)},e(w.key)))),t.default.createElement(Pt,{t:e,spaces:o,activeSpaceId:d,counts:u}),t.default.createElement(Ot,{key:s?.id,t:e,space:s,tasks:a}),t.default.createElement("button",{type:"button",className:"tb-primary",onClick:()=>ye("todo")},t.default.createElement(re,{size:15}),e("New task")),t.default.createElement(qt,{t:e})))}function qt({t:e}){let r=B().agent?.status,n=r?.state||"unknown",o=r?.state==="ready"?e("Codex available"):e("Codex runtime");return t.default.createElement("button",{type:"button",className:`tb-agentbtn is-${n}`,onClick:()=>Ve(),title:`${o} \xB7 ${r?.message||e("Not checked yet")}`,"aria-label":e("Codex agent")},t.default.createElement(V,{size:16}),t.default.createElement("span",{className:"tb-agentdot","aria-hidden":"true"}))}function Ht({t:e,defaultColumn:a,tags:r,workspaces:n,spaceId:o}){let[d,u]=t.default.useState(""),[s,g]=t.default.useState(""),[x,y]=t.default.useState(""),[i,h]=t.default.useState(a||"todo"),[k,w]=t.default.useState(""),[z,W]=t.default.useState("dsh"),[F,p]=t.default.useState(!1),[N,L]=t.default.useState(ke),[I,m]=t.default.useState(!1),P=t.default.useRef(null);t.default.useEffect(()=>{P.current?.focus()},[]);let H=Array.isArray(n)?n:[],Z=B().agent?.status?.state==="ready",ue=async v=>{if(v.preventDefault(),!d.trim()||I)return;m(!0);let b=k?H.find(X=>X.id===k):null,S={title:d,note:s,tag:x,column:i,spaceId:o,executor:z,workspaceId:b?.id??null,workspacePath:b?.path??null,workspaceTitle:b?.title??null};F&&(S.automation=ot(N));let O=await E.add(S);m(!1),O&&(M(),O.warning?f(O.warning,{error:!0}):f(e("Card added")))};return t.default.createElement("form",{className:"tb-form",onSubmit:ue,id:"tb-add-form"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Title")),t.default.createElement("input",{ref:P,value:d,required:!0,maxLength:200,placeholder:e("What needs to happen?"),onChange:v=>u(v.target.value)})),t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Notes")),t.default.createElement("textarea",{rows:3,value:s,maxLength:4e3,placeholder:e("Any details, links, or acceptance criteria."),onChange:v=>g(v.target.value)})),t.default.createElement("div",{className:"tb-field-row"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Tag")),t.default.createElement("input",{value:x,maxLength:24,placeholder:e("Tag"),onChange:v=>y(v.target.value)})),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Column")),t.default.createElement("div",{className:"tb-seg"},Object.keys(K).map(v=>t.default.createElement("button",{key:v,type:"button",className:i===v?"is-on":"",style:{"--tb-accent":K[v].accent},onClick:()=>h(v)},t.default.createElement("i"),e(K[v].key)))))),r.length?t.default.createElement("div",{className:"tb-tagrow"},r.slice(0,6).map(v=>t.default.createElement("button",{key:v,type:"button",className:"tb-tagchip",onClick:()=>y(v)},`#${v}`))):null,t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Workspace")),t.default.createElement("select",{value:k,onChange:v=>w(v.target.value)},t.default.createElement("option",{value:""},e("Default directory")),H.map(v=>t.default.createElement("option",{key:v.id,value:v.id},Ne(v))))),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Executor")),t.default.createElement("div",{className:"tb-seg tb-exec-seg"},t.default.createElement("button",{type:"button",className:z==="dsh"?"is-on":"",onClick:()=>W("dsh")},e("DSH session")),t.default.createElement("button",{type:"button",className:z==="codex"?"is-on":"",disabled:!Z,title:e(Z?"Runs over ACP with the local Codex CLI.":"Open the agent settings to check Codex."),onClick:()=>W("codex")},t.default.createElement(V,{size:12}),e("Codex (ACP)"))),t.default.createElement("p",{className:"tb-hint"},e(z==="codex"?"Codex runs this card over ACP in its workspace. Automation still works.":"DSH runs this card in a session it owns."))),t.default.createElement("div",{className:"tb-field tb-auto-field"},t.default.createElement("span",null,e("Automation")),t.default.createElement("div",{className:"tb-seg"},t.default.createElement("button",{type:"button",className:F?"":"is-on",onClick:()=>p(!1)},e("Off")),t.default.createElement("button",{type:"button",className:F?"is-on":"",onClick:()=>p(!0)},t.default.createElement(ce,{size:12}),e("On a schedule")))),F?t.default.createElement(it,{t:e,value:N,onChange:v=>L(b=>({...b,...v}))}):null,t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:M},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:I||!d.trim()},e("Create"))))}function Qt({task:e,t:a,workspaces:r}){let[n,o]=t.default.useState(!1),[d,u]=t.default.useState(!1),[s,g]=t.default.useState(!1),[x,y]=t.default.useState(!1),[i,h]=t.default.useState(ke);t.default.useEffect(()=>{o(!1),u(!1),g(!1)},[e.id]);let k=K[e.column],w=pe(e),z=ct(e,a),F=B().agent?.status?.state==="ready",p=Array.isArray(r)?r:[],N=async b=>{if(b===e.executor||w)return;let S=await E.update(e.id,{executor:b});S&&f(S.warning||a("Executor updated"),{error:!!S.warning})},L=e.workspacePath?p.find(b=>b.id===e.workspaceId)||p.find(b=>b.path===e.workspacePath):null,I=e.workspacePath&&!L?`path:${e.workspacePath}`:"",m=L?L.id:I,P=async b=>{let S=b.target.value,O;if(!S)O={workspaceId:null,workspacePath:null,workspaceTitle:null};else if(S.startsWith("path:"))O={workspaceId:null,workspacePath:S.slice(5),workspaceTitle:e.workspaceTitle||null};else{let G=p.find(mt=>mt.id===S);if(!G)return;O={workspaceId:G.id,workspacePath:G.path,workspaceTitle:G.title||null}}let X=await E.update(e.id,O);X&&f(X.warning||a("Workspace updated"),{error:!!X.warning})},H=()=>{let b=e.automation;h(b?{frequency:b.frequency==="custom"?"daily":b.frequency,time:b.time||"09:00",weekdays:Array.isArray(b.weekdays)&&b.weekdays.length?[...b.weekdays]:[rt()]}:ke()),g(!0)},Se=async()=>{if(x)return;y(!0);let b=await E.update(e.id,{automation:ot(i)});y(!1),b&&(g(!1),f(b.warning?b.warning:a("Automation updated"),{error:!!b.warning}))},Z=async()=>{if(!e.automation)return;let b=!e.automation.active,S=await E.update(e.id,{automation:{active:b}});S&&(S.warning?f(S.warning,{error:!0}):f(a(b?"Automation resumed":"Automation paused")))},ue=async()=>{if(!d){u(!0);return}let b=await E.update(e.id,{automation:{frequency:"none"}});b&&(u(!1),b.warning?f(b.warning,{error:!0}):f(a("Automation removed")))},v=async()=>{if(!n){o(!0);return}J(),await E.remove(e.id)&&f(a("Card deleted"))};return t.default.createElement(_,{side:!0,title:e.title,onClose:J,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${n?"is-armed":""}`,onClick:v},a(n?"Delete twice to confirm":"Delete")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:async()=>{await E.move(e.id,"todo")&&J()}},a("Back to todo")),e.column==="done"?null:t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{if(w){await E.stop(e.id)&&f(a("Stopped the run"));return}await E.dispatch(e.id)&&f(a(e.executor==="codex"?"Dispatched to Codex":"Dispatched to its session"))}},w?a("Stop"):e.sessionId?a("Rerun"):a("Run")),e.column==="review"?t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{await E.accept(e.id)&&(f(a(e.automation?"Accepted, back to todo":"Card accepted")),J())}},a(e.automation?"Accept this run":"Accept")):null)},t.default.createElement("div",{className:"tb-detail"},t.default.createElement("div",{className:"tb-detail-chips"},t.default.createElement(et,{column:e.column,label:a(k.key),accent:k.accent}),e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(ie,{size:11}),a("From a session")):null),w?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,z),e.steps?t.default.createElement("span",{className:"tb-steps"},`${a("Steps")} \xB7 ${e.steps}`):null):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement("div",{className:"tb-bar"},t.default.createElement("i",{style:{width:`${e.progress}%`}}))),e.note?t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Description")),t.default.createElement("p",{className:"tb-prose"},e.note)):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Workspace")),t.default.createElement("label",{className:"tb-field tb-workspace"},t.default.createElement("select",{value:m,onChange:P,"aria-label":a("Workspace")},t.default.createElement("option",{value:""},a("Default directory")),p.map(b=>t.default.createElement("option",{key:b.id,value:b.id},Ne(b))),I?t.default.createElement("option",{value:I},`${e.workspaceTitle||st(e.workspacePath)} \xB7 ${a("Removed workspace")}`):null),e.workspacePath?t.default.createElement("code",{className:"tb-workspace-path"},e.workspacePath):null),t.default.createElement("p",{className:"tb-hint"},e.automation?a("Scheduled runs start here too."):a("A new session starts in this workspace when you start the card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Executor")),t.default.createElement("div",{className:"tb-seg tb-exec-seg"},t.default.createElement("button",{type:"button",className:e.executor==="dsh"?"is-on":"",disabled:w,onClick:()=>N("dsh")},a("DSH session")),t.default.createElement("button",{type:"button",className:e.executor==="codex"?"is-on":"",disabled:w||!F&&e.executor!=="codex",onClick:()=>N("codex")},t.default.createElement(V,{size:12}),a("Codex (ACP)"))),t.default.createElement("p",{className:"tb-hint"},w?a("Stop the run before switching executor."):e.executor==="codex"?a("Codex runs this card over ACP in its workspace. Automation still works."):a("DSH runs this card in a session it owns."))),t.default.createElement("section",{className:"tb-block tb-auto-block"},t.default.createElement("div",{className:"tb-auto-head"},t.default.createElement("h4",null,a("Automation")),e.automation?t.default.createElement("span",{className:`tb-auto-state ${e.automation.active?"is-live":""}`},e.automation.active?a("Scheduled"):a("Paused")):null),s?t.default.createElement(t.default.Fragment,null,t.default.createElement(it,{t:a,value:i,onChange:b=>h(S=>({...S,...b}))}),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>g(!1)},a("Cancel")),t.default.createElement("button",{type:"button",className:"tb-btn is-primary",disabled:x,onClick:Se},a("Save")))):e.automation?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"tb-auto-rule"},t.default.createElement(ce,{size:14}),t.default.createElement("span",null,Ee(e.automation,a))),t.default.createElement("dl",{className:"tb-auto-meta"},t.default.createElement("dt",null,a("Next run")),t.default.createElement("dd",null,e.automation.runtime?.nextAt?ne(e.automation.runtime.nextAt,j()):a("No upcoming run")),t.default.createElement("dt",null,a("Last run")),t.default.createElement("dd",null,e.automation.lastFiredAt?Y(e.automation.lastFiredAt,a):a("Not run yet"))),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:Z},e.automation.active?a("Pause"):a("Resume")),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:H},a("Edit rule")),t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${d?"is-armed":""}`,onClick:ue},a(d?"Delete twice to confirm":"Remove automation")))):t.default.createElement(t.default.Fragment,null,t.default.createElement("p",{className:"tb-muted"},a("This card only runs when you start it.")),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:H},t.default.createElement(Me,{size:13}),a("Make it automatic"))))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,e.executor==="codex"?a("Codex run"):a("Session")),e.executor==="codex"?e.codex?.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.codex.sessionId.slice(0,12)),e.codex.model?t.default.createElement("span",{className:"tb-chip is-quiet"},e.codex.model):null,e.codex.stopReason?t.default.createElement("span",{className:"tb-chip is-quiet"},e.codex.stopReason):null):t.default.createElement("p",{className:"tb-muted"},a("No Codex run yet.")," ",a("Codex starts in this workspace when you run the card.")):e.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.sessionId.slice(0,8)),t.default.createElement(q,{icon:he,label:a("Open session"),onClick:()=>lt(e.sessionId)})):t.default.createElement("p",{className:"tb-muted"},a("No session yet")," ",a("A session is created the first time you run this card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Latest result")),e.result?t.default.createElement("pre",{className:"tb-result"},e.result):t.default.createElement("p",{className:"tb-muted"},a("No result yet.")),e.error?t.default.createElement("p",{className:"tb-error"},e.error):null),t.default.createElement("div",{className:"tb-meta"},a("Created")," ",ne(e.createdAt,j())," \xB7 ",a("Updated")," ",Y(e.updatedAt,a))))}function dt(){let e=ae(),a=B(),r=t.default.useRef(null),[n,o]=t.default.useState(1200);t.default.useEffect(()=>{de();let p=setInterval(()=>{document.visibilityState==="visible"&&de()},2500);return()=>clearInterval(p)},[]),t.default.useEffect(()=>{let p=r.current;if(!p)return;let N=new ResizeObserver(([L])=>o(L.contentRect.width));return N.observe(p),()=>N.disconnect()},[]);let d=a.spaces.length?a.spaces:[{id:$,name:"",order:0}],u=d.some(p=>p.id===a.activeSpaceId)?a.activeSpaceId:d[0].id,s=d.find(p=>p.id===u)||d[0],g=a.tasks.filter(p=>(p.spaceId||$)===u),x={};for(let p of a.tasks){let N=p.spaceId||$;x[N]=(x[N]||0)+1}let y=a.detailId?a.tasks.find(p=>p.id===a.detailId):null,i=[...new Set(g.map(p=>p.tag).filter(Boolean))],h=a.query.trim().toLowerCase(),k=g.filter(p=>a.filter==="active"&&p.column!=="doing"||a.filter==="review"&&p.column!=="review"||p.column==="done"&&!ze(p,a.doneRange)?!1:h?[p.title,p.note,p.tag,p.workspaceTitle].some(N=>String(N||"").toLowerCase().includes(h)):!0),w=g.some(p=>p.column!=="done"),z=a.dialog?.kind||"task",W=z==="remove-space"?d.find(p=>p.id===a.dialog.id):null,F=W?a.tasks.filter(p=>(p.spaceId||$)===W.id).length:0;return t.default.createElement("div",{className:`tb-root ${n<980?"is-narrow":""}`,ref:r},t.default.createElement("style",null,qe),t.default.createElement("div",{className:"tb-ambient","aria-hidden":"true"},t.default.createElement("i"),t.default.createElement("i"),t.default.createElement("i")),t.default.createElement($t,{t:e,tasks:g,query:a.query,filter:a.filter,spaces:d,activeSpaceId:u,spaceCounts:x,activeSpace:s}),a.error&&!a.loaded?t.default.createElement("div",{className:"tb-fail"},t.default.createElement("p",null,e("Could not reach the board")),t.default.createElement("span",null,a.error),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>de()},t.default.createElement(le,{size:14}),e("Retry"))):a.loaded?t.default.createElement("div",{className:"tb-board-wrap"},t.default.createElement("div",{className:"tb-board"},a.columns.map(p=>{let N=k.filter(I=>I.column===p),L=g.filter(I=>I.column===p).length;return t.default.createElement(Ft,{key:p,column:p,tasks:N,total:L,t:e,spaceId:u,doneRange:a.doneRange,onDoneRangeChange:Ke})})),g.length>0&&k.length===0&&w?t.default.createElement("p",{className:"tb-none"},e("Nothing matches this filter.")):null):t.default.createElement("div",{className:"tb-loading"},e("Loading board\u2026")),z==="task"&&a.dialog?t.default.createElement(_,{title:e("New task"),onClose:M,width:520},t.default.createElement(Ht,{t:e,defaultColumn:a.dialog.column,tags:i,workspaces:a.workspaces,spaceId:u})):null,a.dialog&&z==="space"?t.default.createElement(_,{title:e("New space"),onClose:M,width:440},t.default.createElement(Lt,{t:e})):null,z==="agent"&&a.dialog?t.default.createElement(_,{title:e("Codex agent"),onClose:M,width:560},t.default.createElement(Ze,{t:e})):null,W?t.default.createElement(Mt,{t:e,space:W,count:F}):null,y?t.default.createElement(Qt,{task:y,t:e,workspaces:a.workspaces}):null,t.default.createElement(tt,{toast:a.toast,onClose:()=>D({toast:null})}))}var pt="task-board";function Bt({size:e=22,active:a=!1}){return ut.default.createElement(Oe,{size:e,active:a})}var Ut=["slots","locale"];function jt(e){Re(e),e.effect(()=>Te(e),"task-board: locale");let a=e.locale.bind(te);e.slots.inject("main",()=>e.slots.register({name:"main",key:pt},dt)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:pt,order:12,label:()=>a("Task board")},Bt))}
return module.exports}})
