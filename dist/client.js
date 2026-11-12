window.__ModuleLoader__.load({id:"dsh-color-task-board",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ut=Object.create;var G=Object.defineProperty;var mt=Object.getOwnPropertyDescriptor;var bt=Object.getOwnPropertyNames;var gt=Object.getPrototypeOf,xt=Object.prototype.hasOwnProperty;var ht=(e,a)=>{for(var r in a)G(e,r,{get:a[r],enumerable:!0})},Ce=(e,a,r,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let o of bt(a))!xt.call(e,o)&&o!==r&&G(e,o,{get:()=>a[o],enumerable:!(n=mt(a,o))||n.enumerable});return e};var B=(e,a,r)=>(r=e!=null?ut(gt(e)):{},Ce(a||!e||!e.__esModule?G(r,"default",{value:e,enumerable:!0}):r,e)),ft=e=>Ce(G({},"__esModule",{value:!0}),e);var qt={};ht(qt,{apply:()=>Ht,inject:()=>Ft});module.exports=ft(qt);var dt=B(require("react"),1);var t=B(require("react"),1);var Ne=B(require("react"),1),ee="task-board",pe={"Task board":"\u4EFB\u52A1\u770B\u677F",Todo:"\u5F85\u529E","In progress":"\u8FDB\u884C\u4E2D","In review":"\u5F85\u9A8C\u6536",Done:"\u5DF2\u5B8C\u6210","New task":"\u65B0\u5EFA\u4EFB\u52A1","Search cards":"\u641C\u7D22\u4EFB\u52A1",All:"\u5168\u90E8",Active:"\u8FDB\u884C\u4E2D","To review":"\u5F85\u9A8C\u6536","Clear done":"\u6E05\u7A7A\u5DF2\u5B8C\u6210","No cards yet":"\u8FD8\u6CA1\u6709\u4EFB\u52A1","Drop here":"\u653E\u5230\u8FD9\u91CC","Add a task":"\u6DFB\u52A0\u4EFB\u52A1",Run:"\u5F00\u59CB\u6267\u884C",Stop:"\u505C\u6B62","Open session":"\u6253\u5F00\u4F1A\u8BDD",Accept:"\u9A8C\u6536\u5B8C\u6210","Accept this run":"\u9A8C\u6536\u672C\u8F6E\uFF0C\u56DE\u5F85\u529E","Mark done":"\u6807\u8BB0\u5B8C\u6210","Back to todo":"\u9000\u56DE\u5F85\u529E",Rerun:"\u91CD\u65B0\u6267\u884C",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",Create:"\u521B\u5EFA\u4EFB\u52A1",Save:"\u4FDD\u5B58",Title:"\u6807\u9898","What needs to happen?":"\u8981\u505A\u4EC0\u4E48\uFF1F",Notes:"\u8BF4\u660E","Any details, links, or acceptance criteria.":"\u8865\u5145\u7EC6\u8282\u3001\u94FE\u63A5\u6216\u9A8C\u6536\u6807\u51C6\u3002",Tag:"\u6807\u7B7E",Column:"\u6240\u5728\u5217",Progress:"\u8FDB\u5EA6",Queued:"\u6392\u961F\u4E2D",Thinking:"\u601D\u8003\u4E2D","Running {name}":"\u6B63\u5728\u6267\u884C {name}","Writing result":"\u6574\u7406\u7ED3\u679C","Waiting for review":"\u7B49\u5F85\u9A8C\u6536","Run failed":"\u6267\u884C\u51FA\u9519",Stopped:"\u5DF2\u505C\u6B62","No session yet":"\u5C1A\u672A\u5206\u914D\u4F1A\u8BDD","Latest result":"\u6700\u65B0\u7ED3\u679C","No result yet.":"\u8FD8\u6CA1\u6709\u7ED3\u679C\u3002","A session is created the first time you run this card.":"\u7B2C\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u81EA\u52A8\u4E3A\u8FD9\u5F20\u5361\u521B\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u3002","From a session":"\u6765\u81EA\u4F1A\u8BDD",Session:"\u4F1A\u8BDD",Workspace:"\u5DE5\u4F5C\u533A","Default directory":"\u9ED8\u8BA4\u76EE\u5F55","Removed workspace":"\u5DF2\u79FB\u9664","Workspace updated":"\u5DE5\u4F5C\u533A\u5DF2\u66F4\u65B0","A new session starts in this workspace when you start the card.":"\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u5728\u9009\u4E2D\u7684\u5DE5\u4F5C\u533A\u91CC\u65B0\u5EFA\u4F1A\u8BDD\u3002","Scheduled runs start here too.":"\u5B9A\u65F6\u6267\u884C\u4E5F\u4F1A\u5728\u8FD9\u4E2A\u5DE5\u4F5C\u533A\u91CC\u542F\u52A8\u3002","Delete this card?":"\u786E\u5B9A\u5220\u9664\u8FD9\u5F20\u5361\u5417\uFF1F","Card deleted":"\u5DF2\u5220\u9664","Card added":"\u5DF2\u6DFB\u52A0","Dispatched to its session":"\u5DF2\u6D3E\u53D1\u5230\u4F1A\u8BDD","Stopped the run":"\u5DF2\u505C\u6B62\u6267\u884C","Card accepted":"\u5DF2\u9A8C\u6536","Accepted, back to todo":"\u5DF2\u9A8C\u6536\uFF0C\u56DE\u5230\u5F85\u529E\u7B49\u4E0B\u4E00\u8F6E","Done cards cleared":"\u5DF2\u6E05\u7A7A\u5B8C\u6210\u7684\u4EFB\u52A1","Just now":"\u521A\u521A","{n}m ago":"{n} \u5206\u949F\u524D","{n}h ago":"{n} \u5C0F\u65F6\u524D","{n}d ago":"{n} \u5929\u524D","Today is {date}":"\u4ECA\u5929\u662F {date}","{n} running":"{n} \u4E2A\u8FDB\u884C\u4E2D","{n} to review":"{n} \u4E2A\u5F85\u9A8C\u6536","Task board overview":"\u4EFB\u52A1\u770B\u677F\u6982\u89C8","Nothing matches this filter.":"\u6CA1\u6709\u7B26\u5408\u7B5B\u9009\u7684\u4EFB\u52A1\u3002","Run this card now":"\u7ACB\u5373\u6267\u884C\u8FD9\u5F20\u5361",Details:"\u8BE6\u60C5",Close:"\u5173\u95ED",Created:"\u521B\u5EFA\u4E8E",Updated:"\u66F4\u65B0\u4E8E",Steps:"\u6B65\u9AA4","Session {id}":"\u4F1A\u8BDD {id}","{n} cards":"{n} \u5F20\u5361",Description:"\u8BF4\u660E","Delete twice to confirm":"\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664","Could not reach the board":"\u770B\u677F\u6682\u65F6\u4E0D\u53EF\u7528",Retry:"\u91CD\u8BD5","Loading board\u2026":"\u6B63\u5728\u52A0\u8F7D\u770B\u677F\u2026","No tasks":"\u6CA1\u6709\u4EFB\u52A1",Automation:"\u81EA\u52A8\u5316",Off:"\u4E0D\u81EA\u52A8","On a schedule":"\u5B9A\u65F6\u6267\u884C",Hourly:"\u6BCF\u5C0F\u65F6",Daily:"\u6BCF\u5929",Weekly:"\u6BCF\u5468",Mon:"\u5468\u4E00",Tue:"\u5468\u4E8C",Wed:"\u5468\u4E09",Thu:"\u5468\u56DB",Fri:"\u5468\u4E94",Sat:"\u5468\u516D",Sun:"\u5468\u65E5",Days:"\u661F\u671F",Minute:"\u5206\u949F",Time:"\u65F6\u95F4","Every hour at :{minute}":"\u6BCF\u5C0F\u65F6 :{minute} \u5206","Daily at {time}":"\u6BCF\u5929 {time}","Weekly on {days} at {time}":"\u6BCF\u5468 {days} {time}","Custom schedule":"\u81EA\u5B9A\u4E49\u89C4\u5219",Scheduled:"\u5B9A\u65F6\u4E2D","The card runs on its own and lands in review with the latest result.":"\u5230\u70B9\u81EA\u52A8\u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u7ED3\u679C\u8FDB\u5165\u5F85\u9A8C\u6536\uFF1B\u9A8C\u6536\u540E\u56DE\u5230\u5F85\u529E\uFF0C\u7B49\u5F85\u4E0B\u4E00\u8F6E\u3002",Paused:"\u5DF2\u6682\u505C",Pause:"\u6682\u505C",Resume:"\u542F\u7528","Edit rule":"\u4FEE\u6539\u89C4\u5219","Remove automation":"\u53D6\u6D88\u81EA\u52A8\u5316","Next run":"\u4E0B\u6B21\u6267\u884C","Last run":"\u4E0A\u6B21\u6267\u884C","No upcoming run":"\u6CA1\u6709\u540E\u7EED\u6267\u884C","Not run yet":"\u8FD8\u6CA1\u6709\u6267\u884C\u8FC7","This card only runs when you start it.":"\u672A\u8BBE\u7F6E\u81EA\u52A8\u5316\uFF0C\u53EA\u6709\u4F60\u624B\u52A8\u5F00\u59CB\u65F6\u624D\u4F1A\u6267\u884C\u3002","Make it automatic":"\u8BBE\u4E3A\u81EA\u52A8\u5316","Automation updated":"\u81EA\u52A8\u5316\u5DF2\u66F4\u65B0","Automation resumed":"\u81EA\u52A8\u5316\u5DF2\u542F\u7528","Automation paused":"\u81EA\u52A8\u5316\u5DF2\u6682\u505C","Automation removed":"\u81EA\u52A8\u5316\u5DF2\u53D6\u6D88","Default space":"\u9ED8\u8BA4\u7A7A\u95F4","Switch space":"\u5207\u6362\u7A7A\u95F4",Spaces:"\u7A7A\u95F4","Space name":"\u7A7A\u95F4\u540D\u79F0","New space":"\u65B0\u5EFA\u7A7A\u95F4","Create space":"\u521B\u5EFA\u7A7A\u95F4","Delete space":"\u5220\u9664\u7A7A\u95F4","e.g. Work":"\u4F8B\u5982\uFF1A\u5DE5\u4F5C","Cards in different spaces stay separate.":"\u4E0D\u540C\u7A7A\u95F4\u7684\u5361\u7247\u4E92\u4E0D\u5E72\u6270\uFF0C\u5207\u6362\u7A7A\u95F4\u540E\u53EA\u770B\u5F97\u5230\u5F53\u524D\u7A7A\u95F4\u7684\u4EFB\u52A1\u3002","Space created":"\u7A7A\u95F4\u5DF2\u521B\u5EFA","Space deleted":"\u7A7A\u95F4\u5DF2\u5220\u9664","Delete the space {name}?":"\u786E\u5B9A\u5220\u9664\u7A7A\u95F4\u300C{name}\u300D\uFF1F","Its {n} cards move to the default space.":"\u8FD9\u4E2A\u7A7A\u95F4\u91CC\u7684 {n} \u5F20\u5361\u7247\u4F1A\u79FB\u5230\u9ED8\u8BA4\u7A7A\u95F4\uFF0C\u4E0D\u4F1A\u4E22\u5931\u3002","Codex agent":"Codex \u6267\u884C\u8005","Codex runtime":"Codex \u8FD0\u884C\u65F6","Codex available":"Codex \u53EF\u7528","Codex missing":"\u672A\u68C0\u6D4B\u5230 Codex","Codex not logged in":"Codex \u672A\u767B\u5F55","ACP adapter missing":"\u7F3A\u5C11 ACP \u9002\u914D\u5668","Codex runtime error":"Codex \u8FD0\u884C\u65F6\u51FA\u9519","Not checked yet":"\u5C1A\u672A\u68C0\u6D4B","Checking\u2026":"\u68C0\u6D4B\u4E2D\u2026","Testing\u2026":"\u6D4B\u8BD5\u4E2D\u2026","Saving\u2026":"\u4FDD\u5B58\u4E2D\u2026",Recheck:"\u91CD\u65B0\u68C0\u6D4B","Test connection":"\u6D4B\u8BD5\u8FDE\u63A5","Connection OK":"\u8FDE\u63A5\u6210\u529F","Connection failed":"\u8FDE\u63A5\u5931\u8D25",Models:"\u6A21\u578B","Codex CLI path":"Codex CLI \u8DEF\u5F84","Auto-detect":"\u81EA\u52A8\u68C0\u6D4B","Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.":"\u7559\u7A7A\u81EA\u52A8\u68C0\u6D4B\uFF1B\u6709\u503C\u65F6\u4F5C\u4E3A CODEX_PATH \u4F20\u7ED9\u9002\u914D\u5668\u3002","Default model":"\u9ED8\u8BA4\u6A21\u578B","Codex default":"Codex \u9ED8\u8BA4","Leave empty to use the Codex default model.":"\u7559\u7A7A\u4F7F\u7528 Codex \u9ED8\u8BA4\u6A21\u578B\u3002","Run permission":"\u8FD0\u884C\u6743\u9650","Read only":"\u53EA\u8BFB","Workspace write (recommended)":"\u5DE5\u4F5C\u533A\u53EF\u5199\uFF08\u63A8\u8350\uFF09","Full access":"\u5B8C\u5168\u8BBF\u95EE","Codex sandbox keeps runs inside the card workspace.":"Codex \u6C99\u7BB1\u628A\u8FD0\u884C\u9650\u5236\u5728\u5361\u7247\u5DE5\u4F5C\u533A\u5185\u3002","Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.":"\u5B8C\u5168\u8BBF\u95EE\u4F1A\u8BA9 Codex \u8131\u79BB\u5DE5\u4F5C\u533A\u6C99\u7BB1\uFF0C\u4EC5\u5BF9\u53EF\u4FE1\u7684\u5361\u4F7F\u7528\u3002","Auto-approve tool calls":"\u81EA\u52A8\u786E\u8BA4\u5DE5\u5177\u8C03\u7528","Unattended cards need this. The Codex sandbox still applies.":"\u65E0\u4EBA\u503C\u5B88\u7684\u5361\u9700\u8981\u5B83\uFF1BCodex \u6C99\u7BB1\u4ECD\u7136\u751F\u6548\u3002",Advanced:"\u9AD8\u7EA7","ACP adapter command":"ACP \u9002\u914D\u5668\u547D\u4EE4","Leave empty to use npx or a codex-acp already on PATH.":"\u7559\u7A7A\u5219\u7528 npx \u6216 PATH \u91CC\u5DF2\u6709\u7684 codex-acp\u3002","Installed at":"\u5B89\u88C5\u4F4D\u7F6E",Version:"\u7248\u672C",Login:"\u767B\u5F55","ACP adapter":"ACP \u9002\u914D\u5668","Codex config saved":"Codex \u914D\u7F6E\u5DF2\u4FDD\u5B58","No response from the host":"\u5BBF\u4E3B\u6CA1\u6709\u54CD\u5E94","Could not save":"\u4FDD\u5B58\u5931\u8D25",Executor:"\u6267\u884C\u8005","DSH session":"DSH \u4F1A\u8BDD","Codex (ACP)":"Codex (ACP)",Codex:"Codex","Runs over ACP with the local Codex CLI.":"\u901A\u8FC7 ACP \u8C03\u7528\u672C\u673A Codex CLI\u3002","Open the agent settings to check Codex.":"\u6253\u5F00 agent \u8BBE\u7F6E\u68C0\u67E5 Codex\u3002","Codex runs this card over ACP in its workspace. Automation still works.":"Codex \u4F1A\u5728\u5DE5\u4F5C\u533A\u91CC\u901A\u8FC7 ACP \u6267\u884C\u8FD9\u5F20\u5361\uFF0C\u81EA\u52A8\u5316\u7167\u5E38\u751F\u6548\u3002","DSH runs this card in a session it owns.":"DSH \u4F1A\u4E3A\u8FD9\u5F20\u5361\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\u6267\u884C\u3002","Stop the run before switching executor.":"\u5148\u505C\u6B62\u6267\u884C\uFF0C\u624D\u80FD\u5207\u6362\u6267\u884C\u8005\u3002","Executor updated":"\u6267\u884C\u8005\u5DF2\u66F4\u65B0","Dispatched to Codex":"\u5DF2\u6D3E\u53D1\u7ED9 Codex","Stopped the Codex run":"\u5DF2\u505C\u6B62 Codex \u8FD0\u884C","Codex run":"Codex \u8FD0\u884C","No Codex run yet.":"\u8FD8\u6CA1\u6709 Codex \u8FD0\u884C\u3002","Codex starts in this workspace when you run the card.":"\u5F00\u59CB\u6267\u884C\u65F6\u4F1A\u5728\u9009\u4E2D\u7684\u5DE5\u4F5C\u533A\u91CC\u8C03\u7528 Codex\u3002"},vt={"Task board":"Task board",Todo:"Todo","In progress":"In progress","In review":"In review",Done:"Done","New task":"New task","Search cards":"Search cards",All:"All",Active:"Active","To review":"To review","Clear done":"Clear done","No cards yet":"No cards yet","Drop here":"Drop here","Add a task":"Add a task",Run:"Run",Stop:"Stop","Open session":"Open session",Accept:"Accept","Mark done":"Mark done","Back to todo":"Back to todo",Rerun:"Rerun",Delete:"Delete",Cancel:"Cancel",Create:"Create task",Save:"Save",Title:"Title","What needs to happen?":"What needs to happen?",Notes:"Notes","Any details, links, or acceptance criteria.":"Any details, links, or acceptance criteria.",Tag:"Tag",Column:"Column",Progress:"Progress",Queued:"Queued",Thinking:"Thinking","Running {name}":"Running {name}","Writing result":"Writing result","Waiting for review":"Waiting for review","Run failed":"Run failed",Stopped:"Stopped","No session yet":"No session yet","Latest result":"Latest result","No result yet.":"No result yet.","A session is created the first time you run this card.":"A session is created the first time you run this card.","From a session":"From a session",Session:"Session",Workspace:"Workspace","Default directory":"Default directory","Removed workspace":"removed","Workspace updated":"Workspace updated","A new session starts in this workspace when you start the card.":"A new session starts in this workspace when you start the card.","Scheduled runs start here too.":"Scheduled runs start here too.","Delete this card?":"Delete this card?","Card deleted":"Card deleted","Card added":"Card added","Dispatched to its session":"Dispatched to its session","Stopped the run":"Stopped the run","Card accepted":"Card accepted","Accept this run":"Accept this run","Accepted, back to todo":"Accepted, back to todo","Done cards cleared":"Done cards cleared","Just now":"Just now","{n}m ago":"{n}m ago","{n}h ago":"{n}h ago","{n}d ago":"{n}d ago","Today is {date}":"Today is {date}","{n} running":"{n} running","{n} to review":"{n} to review","Task board overview":"Task board overview","Nothing matches this filter.":"Nothing matches this filter.","Run this card now":"Run this card now",Details:"Details",Close:"Close",Created:"Created",Updated:"Updated",Steps:"Steps","Session {id}":"Session {id}","{n} cards":"{n} cards",Description:"Description","Delete twice to confirm":"Click again to delete","Could not reach the board":"Could not reach the board",Retry:"Retry","Loading board\u2026":"Loading board\u2026","No tasks":"No tasks",Automation:"Automation",Off:"Off","On a schedule":"On a schedule",Hourly:"Hourly",Daily:"Daily",Weekly:"Weekly",Mon:"Mon",Tue:"Tue",Wed:"Wed",Thu:"Thu",Fri:"Fri",Sat:"Sat",Sun:"Sun",Days:"Days",Minute:"Minute",Time:"Time","Every hour at :{minute}":"Every hour at :{minute}","Daily at {time}":"Daily at {time}","Weekly on {days} at {time}":"Weekly on {days} at {time}","Custom schedule":"Custom schedule",Scheduled:"Scheduled","The card runs on its own and lands in review with the latest result.":"The card runs on its own and lands in review with the latest result.",Paused:"Paused",Pause:"Pause",Resume:"Resume","Edit rule":"Edit rule","Remove automation":"Remove automation","Next run":"Next run","Last run":"Last run","No upcoming run":"No upcoming run","Not run yet":"Not run yet","This card only runs when you start it.":"This card only runs when you start it.","Make it automatic":"Make it automatic","Automation updated":"Automation updated","Automation resumed":"Automation resumed","Automation paused":"Automation paused","Automation removed":"Automation removed","Default space":"Default space","Switch space":"Switch space",Spaces:"Spaces","Space name":"Space name","New space":"New space","Create space":"Create space","Delete space":"Delete space","e.g. Work":"e.g. Work","Cards in different spaces stay separate.":"Cards in different spaces stay separate; switching shows only that space.","Space created":"Space created","Space deleted":"Space deleted","Delete the space {name}?":"Delete the space {name}?","Its {n} cards move to the default space.":"Its {n} cards move to the default space.","Codex agent":"Codex agent","Codex runtime":"Codex runtime","Codex available":"Codex available","Codex missing":"Codex missing","Codex not logged in":"Codex not logged in","ACP adapter missing":"ACP adapter missing","Codex runtime error":"Codex runtime error","Not checked yet":"Not checked yet","Checking\u2026":"Checking\u2026","Testing\u2026":"Testing\u2026","Saving\u2026":"Saving\u2026",Recheck:"Recheck","Test connection":"Test connection","Connection OK":"Connection OK","Connection failed":"Connection failed",Models:"Models","Codex CLI path":"Codex CLI path","Auto-detect":"Auto-detect","Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.":"Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH.","Default model":"Default model","Codex default":"Codex default","Leave empty to use the Codex default model.":"Leave empty to use the Codex default model.","Run permission":"Run permission","Read only":"Read only","Workspace write (recommended)":"Workspace write (recommended)","Full access":"Full access","Codex sandbox keeps runs inside the card workspace.":"Codex sandbox keeps runs inside the card workspace.","Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.":"Full access lets Codex run without the workspace sandbox. Use it only for cards you trust.","Auto-approve tool calls":"Auto-approve tool calls","Unattended cards need this. The Codex sandbox still applies.":"Unattended cards need this. The Codex sandbox still applies.",Advanced:"Advanced","ACP adapter command":"ACP adapter command","Leave empty to use npx or a codex-acp already on PATH.":"Leave empty to use npx or a codex-acp already on PATH.","Installed at":"Installed at",Version:"Version",Login:"Login","ACP adapter":"ACP adapter","Codex config saved":"Codex config saved","No response from the host":"No response from the host","Could not save":"Could not save",Executor:"Executor","DSH session":"DSH session","Codex (ACP)":"Codex (ACP)",Codex:"Codex","Runs over ACP with the local Codex CLI.":"Runs over ACP with the local Codex CLI.","Open the agent settings to check Codex.":"Open the agent settings to check Codex.","Codex runs this card over ACP in its workspace. Automation still works.":"Codex runs this card over ACP in its workspace. Automation still works.","DSH runs this card in a session it owns.":"DSH runs this card in a session it owns.","Stop the run before switching executor.":"Stop the run before switching executor.","Executor updated":"Executor updated","Dispatched to Codex":"Dispatched to Codex","Stopped the Codex run":"Stopped the Codex run","Codex run":"Codex run","No Codex run yet.":"No Codex run yet.","Codex starts in this workspace when you run the card.":"Codex starts in this workspace when you run the card."},j=null;function Se(e){j=e}function Ae(e){return e.locale.register(ee,{en:vt,zh:pe,"zh-CN":pe,"zh-TW":pe})}function De(){return j}function te(){return Ne.default.useSyncExternalStore(e=>j.locale.subscribe(e),()=>j.locale.getLocale().id,()=>"en"),j.locale.bind(ee)}function Q(){try{return j?.locale?.getLocale?.().id||"en"}catch{return"en"}}function ae(e,a){if(!e)return"";let r=Math.max(0,Date.now()-e),n=Math.floor(r/6e4);if(n<1)return a("Just now");if(n<60)return a("{n}m ago",{n});let o=Math.floor(n/60);return o<24?a("{n}h ago",{n:o}):a("{n}d ago",{n:Math.floor(o/24)})}function ue(e,a){if(!e)return"";try{return new Intl.DateTimeFormat(a||Q(),{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}catch{return new Date(e).toLocaleString()}}var c=B(require("react"),1);function D({size:e=16,strokeWidth:a=1.9,children:r,...n}){return c.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false",...n},r)}var ne=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M12 5v14M5 12h14"})),Ie=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M8 5.5v13l11-6.5-11-6.5z",fill:"currentColor",stroke:"none"})),Te=e=>c.default.createElement(D,e,c.default.createElement("rect",{x:7,y:7,width:10,height:10,rx:2,fill:"currentColor",stroke:"none"})),re=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M5 12.5l4.2 4.2L19 7"})),me=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M4 7h16"}),c.default.createElement("path",{d:"M10 4h4l1 3H9l1-3z"}),c.default.createElement("path",{d:"M6.5 7l.8 12.2A1.8 1.8 0 009.1 21h5.8a1.8 1.8 0 001.8-1.8L17.5 7"}),c.default.createElement("path",{d:"M10 11v6M14 11v6"})),be=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M14 4h6v6"}),c.default.createElement("path",{d:"M20 4l-9 9"}),c.default.createElement("path",{d:"M18 14v4.5A1.5 1.5 0 0116.5 20h-11A1.5 1.5 0 014 18.5v-11A1.5 1.5 0 015.5 6H10"})),Re=e=>c.default.createElement(D,e,c.default.createElement("circle",{cx:11,cy:11,r:6.5}),c.default.createElement("path",{d:"M16 16l4 4"})),oe=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18"}));var se=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M20 12a8 8 0 10-3.2 6.4L20 20l-1.1-3.4A7.9 7.9 0 0020 12z"})),Pe=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M3.5 7.5a2 2 0 012-2h3.2l1.8 2h6.5a2 2 0 012 2v8a2 2 0 01-2 2h-11.5a2 2 0 01-2-2v-10z"})),ie=e=>c.default.createElement(D,e,c.default.createElement("circle",{cx:12,cy:12,r:8.5}),c.default.createElement("path",{d:"M12 7.5V12l3 2"})),ze=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5z"}),c.default.createElement("path",{d:"M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"})),Le=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M9 6l6 6-6 6"})),Me=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M12 3.6l8.4 4.2-8.4 4.2-8.4-4.2 8.4-4.2z"}),c.default.createElement("path",{d:"M4.2 12l7.8 3.9 7.8-3.9"}),c.default.createElement("path",{d:"M4.2 16.2l7.8 3.9 7.8-3.9"})),le=e=>c.default.createElement(D,e,c.default.createElement("path",{d:"M20 11a8 8 0 10-2.6 6.3"}),c.default.createElement("path",{d:"M20 5v6h-6"})),Y=e=>c.default.createElement(D,e,c.default.createElement("rect",{x:4,y:8,width:16,height:11,rx:3.4}),c.default.createElement("path",{d:"M12 4.2v3.8"}),c.default.createElement("circle",{cx:9.2,cy:13.2,r:1.2,fill:"currentColor",stroke:"none"}),c.default.createElement("circle",{cx:14.8,cy:13.2,r:1.2,fill:"currentColor",stroke:"none"}),c.default.createElement("path",{d:"M9.6 16.1h4.8"}));function We({size:e=22,active:a=!1}){return c.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:a?2.1:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},c.default.createElement("rect",{x:3,y:4,width:18,height:16,rx:3.4}),c.default.createElement("path",{d:"M8.2 8.2v7.6M12 8.2v4.6M15.8 8.2v5.6"}))}function Oe({size:e=26}){return c.default.createElement("span",{className:"tb-avatar",style:{width:e,height:e},"aria-hidden":"true"},c.default.createElement("svg",{width:e*.58,height:e*.58,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},c.default.createElement("path",{d:"M12 4l1.7 4.6L18 10.3l-4.3 1.7L12 16.6l-1.7-4.6L6 10.3l4.3-1.7L12 4z"})))}var $e=`/* \u4EFB\u52A1\u770B\u677F\u6837\u5F0F\uFF1A\u989C\u8272\u8D70 DSH \u8BED\u4E49 token\uFF0C\u5217\u4E0E\u5361\u7247\u7528\u4F4E\u9971\u548C\u5F69\u8272\u70B9\u7F00\u3002 */
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
`;var l=B(require("react"),1);var He=B(require("react"),1),wt="/task-board",qe=["todo","doing","review","done"],$="default",S={tasks:[],columns:qe,revision:-1,stamp:"",loaded:!1,error:null,filter:"all",query:"",dialog:null,detailId:null,toast:null,dragging:null,spaces:[],activeSpaceId:"",spacesRevision:"",workspaces:[],defaultWorkspacePath:"",workspacesRevision:"",agent:null,agentRevision:""},ge=new Set;function Fe(){return S}function I(e){S={...S,...typeof e=="function"?e(S):e},ge.forEach(a=>a())}function kt(e){return ge.add(e),()=>ge.delete(e)}function U(){return He.default.useSyncExternalStore(kt,Fe,Fe)}async function Be(e,a){let r=await fetch(wt+e,{cache:"no-store",...a,headers:{...a?.body?{"content-type":"application/json"}:{},...a?.headers||{}}}),n=await r.json().catch(()=>({}));if(!r.ok)throw new Error(n?.error||`HTTP ${r.status}`);return n}function y(e,{error:a=!1}={}){I({toast:{text:e,error:a,key:Date.now()}})}async function ce(){try{let e=await Be("/state"),a=e?.revision??0,r=`${a}:${e?.schedulesRevision??""}:${e?.workspacesRevision??""}:${e?.spacesRevision??""}:${e?.agentRevision??""}`;return S.loaded&&r===S.stamp&&!S.error||I({tasks:Array.isArray(e?.tasks)?e.tasks:[],columns:Array.isArray(e?.columns)&&e.columns.length?e.columns:qe,spaces:Array.isArray(e?.spaces)?e.spaces:[],activeSpaceId:typeof e?.activeSpaceId=="string"?e.activeSpaceId:"",spacesRevision:typeof e?.spacesRevision=="string"?e.spacesRevision:"",workspaces:Array.isArray(e?.workspaces)?e.workspaces:[],defaultWorkspacePath:typeof e?.defaultWorkspacePath=="string"?e.defaultWorkspacePath:"",workspacesRevision:typeof e?.workspacesRevision=="string"?e.workspacesRevision:"",agent:e?.agent??null,agentRevision:typeof e?.agentRevision=="string"?e.agentRevision:"",revision:a,stamp:r,loaded:!0,error:null}),!0}catch(e){return I({loaded:!0,error:e?.message||String(e)}),!1}}async function R(e,a={},{soft:r=!1}={}){try{let n=await Be("/op",{method:"POST",body:JSON.stringify({op:e,...a})});if(n?.state){let o=n.state.revision??S.revision;I({tasks:Array.isArray(n.state.tasks)?n.state.tasks:S.tasks,spaces:Array.isArray(n.state.spaces)?n.state.spaces:S.spaces,activeSpaceId:typeof n.state.activeSpaceId=="string"?n.state.activeSpaceId:S.activeSpaceId,spacesRevision:typeof n.state.spacesRevision=="string"?n.state.spacesRevision:S.spacesRevision,workspaces:Array.isArray(n.state.workspaces)?n.state.workspaces:S.workspaces,defaultWorkspacePath:typeof n.state.defaultWorkspacePath=="string"?n.state.defaultWorkspacePath:S.defaultWorkspacePath,workspacesRevision:typeof n.state.workspacesRevision=="string"?n.state.workspacesRevision:S.workspacesRevision,agent:n.state.agent??S.agent,agentRevision:typeof n.state.agentRevision=="string"?n.state.agentRevision:S.agentRevision,revision:o,stamp:`${o}:${n.state.schedulesRevision??""}:${n.state.workspacesRevision??""}:${n.state.spacesRevision??""}:${n.state.agentRevision??""}`,loaded:!0,error:null})}if(!n?.ok){if(r)return n;throw new Error(n?.error||"\u64CD\u4F5C\u5931\u8D25")}return n}catch(n){return y(n?.message||String(n),{error:!0}),null}}var w={add:e=>R("add",e),update:(e,a)=>R("update",{id:e,...a}),move:(e,a)=>R("move",{id:e,column:a}),dispatch:e=>R("dispatch",{id:e}),stop:e=>R("stop",{id:e}),accept:e=>R("accept",{id:e}),remove:e=>R("remove",{id:e}),clearDone:e=>R("clearDone",e?{spaceId:e}:{}),addSpace:e=>R("addSpace",{name:e}),removeSpace:e=>R("removeSpace",{id:e}),selectSpace:e=>R("selectSpace",{id:e}),detectAgent:()=>R("agentDetect",{},{soft:!0}),testAgent:()=>R("agentTest",{},{soft:!0}),saveAgent:e=>R("agentSave",{config:e},{soft:!0})};async function Ue(e){return!e||S.activeSpaceId===e?null:(I({detailId:null}),w.selectSpace(e))}function je(e){I({filter:e})}function xe(e){I({query:e})}function he(e="todo"){I({dialog:{kind:"task",column:e}})}function _e(){I({dialog:{kind:"space"}})}function Ke(e){I({dialog:{kind:"remove-space",id:e}})}function Xe(){I({dialog:{kind:"agent"}})}function W(){I({dialog:null})}function fe(e){I({detailId:e})}function V(){I({detailId:null})}var Et=[{id:"read-only",key:"Read only"},{id:"workspace-write",key:"Workspace write (recommended)"},{id:"agent-full-access",key:"Full access"}];function Qe(e,a){switch(e?.state){case"ready":return a("Codex available");case"no-codex":return a("Codex missing");case"no-login":return a("Codex not logged in");case"no-adapter":return a("ACP adapter missing");case"error":return a("Codex runtime error");default:return a("Not checked yet")}}function Ye({t:e}){let r=U().agent,n=r?.status,o=r?.config||{},[i,h]=l.default.useState(()=>({codexPath:o.codexPath||"",adapterCommand:o.adapterCommand||"",model:o.model||"",permissionMode:o.permissionMode||"workspace-write",autoApprove:o.autoApprove!==!1})),[s,d]=l.default.useState(!!o.adapterCommand),[m,k]=l.default.useState(""),[b,v]=l.default.useState(null),x=p=>h(T=>({...T,...p})),A=(p,T)=>{if(!p){v({text:T||e("No response from the host"),error:!0});return}let q=p.state==="ready";v({text:T||p.message||Qe(p,e),error:!q})},L=async()=>{if(m)return;k("detect");let p=await w.detectAgent();k(""),A(p?.agent?.status,p?.agent?.status?.message)},g=async()=>{if(m)return;k("test");let p=await w.testAgent();k(""),p&&(p.ok?v({text:p.models?.length?`${e("Connection OK")} \xB7 ${e("Models")}: ${p.models.join(", ")}`:e("Connection OK"),error:!1}):v({text:p.error||e("Connection failed"),error:!0}))},C=async p=>{if(p.preventDefault(),m)return;k("save");let T=await w.saveAgent(i);if(k(""),!!T){if(!T.ok){v({text:T.error||e("Could not save"),error:!0});return}A(T.agent?.status,e("Codex config saved")),y(e("Codex config saved"))}};l.default.useEffect(()=>{let p=n?.checkedAt||0;(!p||Date.now()-p>5*6e4)&&L()},[]);let P=n?.state||"unknown",z=n?.adapter?.command?.length?n.adapter.command.join(" "):"",H=Array.isArray(n?.models)?n.models:[],M=n?.codex;return l.default.createElement("form",{className:"tb-form tb-agent-form",onSubmit:C},l.default.createElement("div",{className:`tb-agent-status is-${P}`},l.default.createElement("span",{className:"tb-agentdot"}),l.default.createElement("div",{className:"tb-agent-status-text"},l.default.createElement("b",null,Qe(n,e)),l.default.createElement("span",null,n?.message||e("Not checked yet"))),m==="detect"?l.default.createElement("span",{className:"tb-agent-busy"},e("Checking\u2026")):null),l.default.createElement("dl",{className:"tb-agent-facts"},l.default.createElement("dt",null,e("Installed at")),l.default.createElement("dd",null,M?.path?l.default.createElement("code",null,M.path):"\u2014"),l.default.createElement("dt",null,e("Version")),l.default.createElement("dd",null,M?.version||"\u2014"),l.default.createElement("dt",null,e("Login")),l.default.createElement("dd",null,M?.login||"\u2014"),l.default.createElement("dt",null,e("ACP adapter")),l.default.createElement("dd",null,z?l.default.createElement("code",null,z):"\u2014")),l.default.createElement("label",{className:"tb-field"},l.default.createElement("span",null,e("Codex CLI path")),l.default.createElement("input",{value:i.codexPath,placeholder:e("Auto-detect"),onChange:p=>x({codexPath:p.target.value})}),l.default.createElement("p",{className:"tb-hint"},e("Leave empty to auto-detect. It is passed to the adapter as CODEX_PATH."))),l.default.createElement("label",{className:"tb-field"},l.default.createElement("span",null,e("Default model")),l.default.createElement("input",{value:i.model,list:"tb-codex-models",placeholder:e("Codex default"),onChange:p=>x({model:p.target.value})}),l.default.createElement("datalist",{id:"tb-codex-models"},H.map(p=>l.default.createElement("option",{key:p,value:p}))),l.default.createElement("p",{className:"tb-hint"},e("Leave empty to use the Codex default model."))),l.default.createElement("label",{className:"tb-field"},l.default.createElement("span",null,e("Run permission")),l.default.createElement("select",{value:i.permissionMode,onChange:p=>x({permissionMode:p.target.value})},Et.map(p=>l.default.createElement("option",{key:p.id,value:p.id},e(p.key)))),l.default.createElement("p",{className:"tb-hint"},i.permissionMode==="agent-full-access"?e("Full access lets Codex run without the workspace sandbox. Use it only for cards you trust."):e("Codex sandbox keeps runs inside the card workspace."))),l.default.createElement("label",{className:"tb-agent-check"},l.default.createElement("input",{type:"checkbox",checked:i.autoApprove!==!1,onChange:p=>x({autoApprove:p.target.checked})}),l.default.createElement("span",null,l.default.createElement("b",null,e("Auto-approve tool calls")),l.default.createElement("small",null,e("Unattended cards need this. The Codex sandbox still applies.")))),l.default.createElement("button",{type:"button",className:"tb-agent-advanced",onClick:()=>d(p=>!p)},s?"\u2212":"+"," ",e("Advanced")),s?l.default.createElement("label",{className:"tb-field"},l.default.createElement("span",null,e("ACP adapter command")),l.default.createElement("input",{value:i.adapterCommand,placeholder:"npx -y @agentclientprotocol/codex-acp",onChange:p=>x({adapterCommand:p.target.value})}),l.default.createElement("p",{className:"tb-hint"},e("Leave empty to use npx or a codex-acp already on PATH."))):null,b?l.default.createElement("p",{className:b.error?"tb-agent-message is-error":"tb-agent-message is-ok"},b.error?null:l.default.createElement(re,{size:14}),b.text):null,l.default.createElement("div",{className:"tb-dialog-foot"},l.default.createElement("button",{type:"button",className:"tb-btn",disabled:!!m,onClick:L},l.default.createElement(le,{size:14}),e("Recheck")),l.default.createElement("button",{type:"button",className:"tb-btn",disabled:!!m,onClick:g},e(m==="test"?"Testing\u2026":"Test connection")),l.default.createElement("span",{className:"tb-spacer"}),l.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:!!m},e(m==="save"?"Saving\u2026":"Save"))))}var E=B(require("react"),1);function F({icon:e,label:a,onClick:r,disabled:n=!1,tone:o="",className:i=""}){return E.default.createElement("button",{type:"button",className:`tb-iconbtn ${o?`is-${o}`:""} ${i}`.trim(),onClick:h=>{h.stopPropagation(),r?.(h)},disabled:n,title:a,"aria-label":a},E.default.createElement(e,{size:16}))}function Ve({value:e=0,segments:a=10}){let r=Math.round(Math.max(0,Math.min(100,e))/100*a);return E.default.createElement("div",{className:"tb-dots",role:"img","aria-label":`${e}%`},Array.from({length:a},(n,o)=>E.default.createElement("span",{key:o,className:o<r?"is-on":""})))}function Je({column:e,label:a,accent:r}){return E.default.createElement("span",{className:"tb-status",style:r?{"--tb-accent":r}:void 0},E.default.createElement("i",null),a)}function _({title:e,onClose:a,children:r,footer:n,width:o=480,side:i=!1}){let h=te(),s=E.default.useId();return E.default.useEffect(()=>{let d=m=>{m.key==="Escape"&&(m.stopPropagation(),a())};return window.addEventListener("keydown",d,!0),()=>window.removeEventListener("keydown",d,!0)},[a]),E.default.createElement("div",{className:i?"tb-scrim is-side":"tb-scrim",onPointerDown:d=>{d.target===d.currentTarget&&a()}},E.default.createElement("div",{className:i?"tb-sheet":"tb-dialog",role:"dialog","aria-modal":"true","aria-labelledby":s,style:{width:i?void 0:o}},E.default.createElement("header",{className:"tb-dialog-head"},E.default.createElement("h2",{id:s},e),E.default.createElement(F,{icon:oe,label:h("Close"),onClick:a})),E.default.createElement("div",{className:"tb-dialog-body"},r),n?E.default.createElement("footer",{className:"tb-dialog-foot"},n):null))}function Ze({toast:e,onClose:a}){let r=E.default.useRef(a);return r.current=a,E.default.useEffect(()=>{if(!e)return;let n=setTimeout(()=>r.current(),e.error?4200:2600);return()=>clearTimeout(n)},[e]),e?E.default.createElement("div",{className:`tb-toast ${e.error?"is-error":""}`,role:"status",key:e.key},e.error?null:E.default.createElement(re,{size:15}),E.default.createElement("span",null,e.text)):null}var K={todo:{key:"Todo",accent:"#8ea6f4"},doing:{key:"In progress",accent:"#f0b07c"},review:{key:"In review",accent:"#ef93b7"},done:{key:"Done",accent:"#74cbaa"}},Ct=[{id:"all",key:"All"},{id:"active",key:"Active"},{id:"review",key:"To review"}],Ge=["MO","TU","WE","TH","FR","SA","SU"],et={MO:"Mon",TU:"Tue",WE:"Wed",TH:"Thu",FR:"Fri",SA:"Sat",SU:"Sun"},Nt=[{id:"hourly",key:"Hourly"},{id:"daily",key:"Daily"},{id:"weekly",key:"Weekly"}],St=["00","05","10","15","20","25","30","35","40","45","50","55"];function At(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||""}catch{return""}}function tt(){let e=new Date().getDay();return["SU","MO","TU","WE","TH","FR","SA"][e]||"MO"}function Dt(e){let a=Number(String(e||"09:00").slice(3,5))||0;return String(Math.round(a/5)*5%60).padStart(2,"0")}function ve(e,a){if(!e)return"";let r=e.time||"09:00";if(e.frequency==="hourly")return a("Every hour at :{minute}",{minute:r.slice(3,5)});if(e.frequency==="weekly"){let n=e.weekdays?.length?e.weekdays:["MO"];return a("Weekly on {days} at {time}",{days:n.map(o=>a(et[o])).join(" "),time:r})}return e.frequency==="daily"?a("Daily at {time}",{time:r}):e.rrule?a("Custom schedule"):a("Scheduled")}function at(e){return{frequency:e.frequency,time:e.time,weekdays:e.frequency==="weekly"?e.weekdays:[],timeZone:At()}}function ye(){return{frequency:"daily",time:"09:00",weekdays:[tt()]}}function nt(e){let a=String(e||"").replace(/[\\/]+$/,""),r=a.split(/[\\/]/);return r[r.length-1]||a}function ke(e){return e?e.title||nt(e.path):""}function we(e,a){return!e||e.id===$?a("Default space"):e.name||a("Default space")}function It({t:e,spaces:a,activeSpaceId:r,counts:n}){let[o,i]=t.default.useState(!1),h=t.default.useRef(null);t.default.useEffect(()=>{if(!o)return;let b=x=>{h.current?.contains(x.target)||i(!1)},v=x=>{x.key==="Escape"&&i(!1)};return document.addEventListener("pointerdown",b),document.addEventListener("keydown",v),()=>{document.removeEventListener("pointerdown",b),document.removeEventListener("keydown",v)}},[o]);let s=a.length?a:[{id:$,name:"",order:0}],d=s.find(b=>b.id===r)||s[0],m=b=>Number(n?.[b.id])||0,k=b=>{i(!1),b.id!==d.id&&Ue(b.id)};return t.default.createElement("div",{className:"tb-space",ref:h},t.default.createElement("button",{type:"button",className:`tb-space-btn ${o?"is-open":""}`,title:e("Switch space"),"aria-haspopup":"menu","aria-expanded":o,onClick:()=>i(b=>!b)},t.default.createElement(Me,{size:15}),t.default.createElement("span",{className:"tb-space-name"},we(d,e)),t.default.createElement("span",{className:"tb-space-count"},m(d)),t.default.createElement(Le,{size:13,className:"tb-space-caret"})),o?t.default.createElement("div",{className:"tb-space-menu",role:"menu","aria-label":e("Spaces")},s.map(b=>t.default.createElement("div",{key:b.id,role:"menuitemradio","aria-checked":b.id===d.id,tabIndex:0,className:`tb-space-item ${b.id===d.id?"is-on":""}`,onClick:()=>k(b),onKeyDown:v=>{v.target===v.currentTarget&&(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),k(b))}},t.default.createElement("span",{className:"tb-space-item-name"},we(b,e)),t.default.createElement("span",{className:"tb-space-item-count"},m(b)),b.id===$?null:t.default.createElement("button",{type:"button",className:"tb-space-del",title:e("Delete space"),"aria-label":e("Delete space"),onClick:v=>{v.stopPropagation(),i(!1),Ke(b.id)}},t.default.createElement(me,{size:13})))),t.default.createElement("div",{className:"tb-space-sep"}),t.default.createElement("button",{type:"button",className:"tb-space-new",onClick:()=>{i(!1),_e()}},t.default.createElement(ne,{size:14}),e("New space"))):null)}function Tt({t:e}){let[a,r]=t.default.useState(""),[n,o]=t.default.useState(!1),i=t.default.useRef(null);t.default.useEffect(()=>{i.current?.focus()},[]);let h=async s=>{s.preventDefault();let d=a.trim();if(!d||n)return;o(!0);let m=await w.addSpace(d);o(!1),m&&(W(),y(e("Space created")))};return t.default.createElement("form",{className:"tb-form",onSubmit:h},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Space name")),t.default.createElement("input",{ref:i,value:a,required:!0,maxLength:60,placeholder:e("e.g. Work"),onChange:s=>r(s.target.value)})),t.default.createElement("p",{className:"tb-hint"},e("Cards in different spaces stay separate.")),t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:W},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:n||!a.trim()},e("Create space"))))}function Rt({t:e,space:a,count:r}){let[n,o]=t.default.useState(!1),i=async()=>{if(n)return;o(!0);let h=await w.removeSpace(a.id);o(!1),h&&(W(),y(e("Space deleted")))};return t.default.createElement(_,{title:e("Delete space"),onClose:W,width:440,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:"tb-btn",onClick:W},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn is-danger",disabled:n,onClick:i},e("Delete space")))},t.default.createElement("div",{className:"tb-confirm"},t.default.createElement("p",{className:"tb-muted"},e("Delete the space {name}?",{name:we(a,e)})),t.default.createElement("p",{className:"tb-muted"},e("Its {n} cards move to the default space.",{n:r}))))}function rt({t:e,value:a,onChange:r}){let n=a.frequency||"daily",o=Array.isArray(a.weekdays)?a.weekdays:[],i=s=>{let d=o.includes(s)?o.filter(m=>m!==s):[...o,s];r({weekdays:d.length?Ge.filter(m=>d.includes(m)):[]})},h=s=>{r(s==="hourly"?{frequency:s,time:`00:${Dt(a.time)}`}:{frequency:s,time:n==="hourly"?"09:00":a.time||"09:00"})};return t.default.createElement("div",{className:"tb-auto-editor"},t.default.createElement("div",{className:"tb-seg"},Nt.map(s=>t.default.createElement("button",{key:s.id,type:"button",className:n===s.id?"is-on":"",onClick:()=>h(s.id)},e(s.key)))),n==="weekly"?t.default.createElement("div",{className:"tb-weekdays",role:"group","aria-label":e("Days")},Ge.map(s=>t.default.createElement("button",{key:s,type:"button",className:o.includes(s)?"is-on":"","aria-pressed":o.includes(s),onClick:()=>i(s)},e(et[s])))):null,n==="hourly"?t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Minute")),t.default.createElement("select",{value:String(a.time||"00:00").slice(3,5),onChange:s=>r({time:`00:${s.target.value}`})},St.map(s=>t.default.createElement("option",{key:s,value:s},`:${s}`)))):t.default.createElement("label",{className:"tb-field tb-auto-time"},t.default.createElement("span",null,e("Time")),t.default.createElement("input",{type:"time",value:a.time||"09:00",onChange:s=>r({time:s.target.value||"09:00"})})),t.default.createElement("p",{className:"tb-hint"},e("The card runs on its own and lands in review with the latest result.")))}function ot(e){return typeof e.running=="boolean"?e.running:e.column==="doing"}function st(e,a){switch(e.phase){case"queued":return a("Queued");case"thinking":return a("Thinking");case"tool":return a("Running {name}",{name:e.toolName||"tool"});case"writing":return a("Writing result");case"review":return a("Waiting for review");case"error":return a("Run failed");case"stopped":return a("Stopped");default:return""}}function it(e){if(e)try{let a=De()?.get("uiWorkspace");a?.openSession?a.openSession(e):y("This deployment cannot open sessions",{error:!0})}catch(a){y(a?.message||String(a),{error:!0})}}function Pt({task:e,t:a}){let r=ot(e),n=K[e.column]?.accent,o=st(e,a);return t.default.createElement("article",{className:`tb-card ${r?"is-running":""}`,draggable:!0,style:{"--tb-accent":n},tabIndex:0,"aria-label":e.title,onClick:()=>fe(e.id),onKeyDown:i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),fe(e.id))},onDragStart:i=>{i.dataTransfer.effectAllowed="move",i.dataTransfer.setData("text/task-id",e.id),i.currentTarget.classList.add("is-dragging")},onDragEnd:i=>i.currentTarget.classList.remove("is-dragging")},t.default.createElement("div",{className:"tb-card-chips"},e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.workspacePath?t.default.createElement("span",{className:"tb-chip is-quiet",title:e.workspacePath},t.default.createElement(Pe,{size:11}),ke(e)):null,e.automation?t.default.createElement("span",{className:`tb-chip is-time ${e.automation.active?"":"is-muted"}`,title:ve(e.automation,a)},t.default.createElement(ie,{size:11}),ve(e.automation,a)):null,e.executor==="codex"?t.default.createElement("span",{className:"tb-chip is-codex",title:a("Runs over ACP with the local Codex CLI.")},t.default.createElement(Y,{size:11}),a("Codex")):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(se,{size:11}),a("From a session")):e.sessionId?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(se,{size:11}),a("Session")):null),t.default.createElement("h3",{className:"tb-card-title"},e.title),e.note?t.default.createElement("p",{className:"tb-card-note"},e.note):null,r?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,o),e.steps?t.default.createElement("span",{className:"tb-steps"},`\xB7 ${e.steps}`):null):null,t.default.createElement("div",{className:"tb-card-progress"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement(Ve,{value:e.progress})),t.default.createElement("footer",{className:"tb-card-foot"},t.default.createElement(Oe,{size:24}),t.default.createElement("span",{className:"tb-time"},ae(e.updatedAt,a)),t.default.createElement("span",{className:"tb-spacer"}),e.sessionId?t.default.createElement(F,{icon:be,label:a("Open session"),onClick:()=>it(e.sessionId)}):null,r?t.default.createElement(F,{icon:Te,label:a("Stop"),onClick:async()=>{await w.stop(e.id)&&y(a(e.executor==="codex"?"Stopped the Codex run":"Stopped the run"))}}):t.default.createElement(F,{icon:Ie,label:e.sessionId?a("Rerun"):a("Run"),onClick:async()=>{await w.dispatch(e.id)&&y(a(e.executor==="codex"?"Dispatched to Codex":"Dispatched to its session"))}})))}function zt({column:e,tasks:a,total:r,t:n,spaceId:o}){let i=K[e],[h,s]=t.default.useState(!1);return t.default.createElement("section",{className:`tb-col ${h?"is-over":""}`,"data-column":e,style:{"--tb-accent":i.accent},onDragOver:d=>{d.preventDefault(),d.dataTransfer.dropEffect="move",h||s(!0)},onDragLeave:d=>{d.currentTarget.contains(d.relatedTarget)||s(!1)},onDrop:d=>{d.preventDefault(),s(!1);let m=d.dataTransfer.getData("text/task-id");m&&w.move(m,e)}},t.default.createElement("header",{className:"tb-col-head"},t.default.createElement("span",{className:"tb-col-dot"}),t.default.createElement("h2",null,n(i.key)),t.default.createElement("span",{className:"tb-col-count"},r),t.default.createElement("span",{className:"tb-spacer"}),e==="done"&&r?t.default.createElement(F,{icon:me,label:n("Clear done"),onClick:async()=>{await w.clearDone(o)&&y(n("Done cards cleared"))}}):null,t.default.createElement(F,{icon:ne,label:n("Add a task"),onClick:()=>he(e)})),t.default.createElement("div",{className:"tb-col-body"},a.map(d=>t.default.createElement(Pt,{key:d.id,task:d,t:n})),r===0?t.default.createElement("div",{className:"tb-empty"},n("No cards yet")):null))}function Lt({t:e,tasks:a,query:r,filter:n,spaces:o,activeSpaceId:i,spaceCounts:h}){let s=new Date,d=Q(),m="",k="";try{m=new Intl.DateTimeFormat(d,{month:"long"}).format(s),k=new Intl.DateTimeFormat(d,{month:"long",day:"numeric",weekday:"long"}).format(s)}catch{m="",k=s.toDateString()}let b=a.filter(x=>x.column==="doing").length,v=a.filter(x=>x.column==="review").length;return t.default.createElement("header",{className:"tb-head"},t.default.createElement("div",{className:"tb-head-title"},t.default.createElement("span",{className:"tb-kicker"},m),t.default.createElement("div",null,t.default.createElement("h1",null,e("Task board")),t.default.createElement("p",null,e("Today is {date}",{date:k}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} running",{n:b}),t.default.createElement("span",{className:"tb-sep"},"\xB7"),e("{n} to review",{n:v})))),t.default.createElement("div",{className:"tb-head-tools"},t.default.createElement("label",{className:"tb-search"},t.default.createElement(Re,{size:15}),t.default.createElement("input",{type:"search",value:r,placeholder:e("Search cards"),"aria-label":e("Search cards"),onChange:x=>xe(x.target.value)}),r?t.default.createElement("button",{type:"button",className:"tb-search-clear","aria-label":e("Close"),onClick:()=>xe("")},t.default.createElement(oe,{size:13})):null),t.default.createElement("div",{className:"tb-filters",role:"group","aria-label":e("Task board overview")},Ct.map(x=>t.default.createElement("button",{key:x.id,type:"button",className:n===x.id?"is-on":"","aria-pressed":n===x.id,onClick:()=>je(x.id)},e(x.key)))),t.default.createElement(It,{t:e,spaces:o,activeSpaceId:i,counts:h}),t.default.createElement("button",{type:"button",className:"tb-primary",onClick:()=>he("todo")},t.default.createElement(ne,{size:15}),e("New task")),t.default.createElement(Mt,{t:e})))}function Mt({t:e}){let r=U().agent?.status,n=r?.state||"unknown",o=r?.state==="ready"?e("Codex available"):e("Codex runtime");return t.default.createElement("button",{type:"button",className:`tb-agentbtn is-${n}`,onClick:()=>Xe(),title:`${o} \xB7 ${r?.message||e("Not checked yet")}`,"aria-label":e("Codex agent")},t.default.createElement(Y,{size:16}),t.default.createElement("span",{className:"tb-agentdot","aria-hidden":"true"}))}function Wt({t:e,defaultColumn:a,tags:r,workspaces:n,spaceId:o}){let[i,h]=t.default.useState(""),[s,d]=t.default.useState(""),[m,k]=t.default.useState(""),[b,v]=t.default.useState(a||"todo"),[x,A]=t.default.useState(""),[L,g]=t.default.useState("dsh"),[C,P]=t.default.useState(!1),[z,H]=t.default.useState(ye),[M,p]=t.default.useState(!1),T=t.default.useRef(null);t.default.useEffect(()=>{T.current?.focus()},[]);let q=Array.isArray(n)?n:[],J=U().agent?.status?.state==="ready",de=async f=>{if(f.preventDefault(),!i.trim()||M)return;p(!0);let u=x?q.find(X=>X.id===x):null,N={title:i,note:s,tag:m,column:b,spaceId:o,executor:L,workspaceId:u?.id??null,workspacePath:u?.path??null,workspaceTitle:u?.title??null};C&&(N.automation=at(z));let O=await w.add(N);p(!1),O&&(W(),O.warning?y(O.warning,{error:!0}):y(e("Card added")))};return t.default.createElement("form",{className:"tb-form",onSubmit:de,id:"tb-add-form"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Title")),t.default.createElement("input",{ref:T,value:i,required:!0,maxLength:200,placeholder:e("What needs to happen?"),onChange:f=>h(f.target.value)})),t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Notes")),t.default.createElement("textarea",{rows:3,value:s,maxLength:4e3,placeholder:e("Any details, links, or acceptance criteria."),onChange:f=>d(f.target.value)})),t.default.createElement("div",{className:"tb-field-row"},t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Tag")),t.default.createElement("input",{value:m,maxLength:24,placeholder:e("Tag"),onChange:f=>k(f.target.value)})),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Column")),t.default.createElement("div",{className:"tb-seg"},Object.keys(K).map(f=>t.default.createElement("button",{key:f,type:"button",className:b===f?"is-on":"",style:{"--tb-accent":K[f].accent},onClick:()=>v(f)},t.default.createElement("i"),e(K[f].key)))))),r.length?t.default.createElement("div",{className:"tb-tagrow"},r.slice(0,6).map(f=>t.default.createElement("button",{key:f,type:"button",className:"tb-tagchip",onClick:()=>k(f)},`#${f}`))):null,t.default.createElement("label",{className:"tb-field"},t.default.createElement("span",null,e("Workspace")),t.default.createElement("select",{value:x,onChange:f=>A(f.target.value)},t.default.createElement("option",{value:""},e("Default directory")),q.map(f=>t.default.createElement("option",{key:f.id,value:f.id},ke(f))))),t.default.createElement("div",{className:"tb-field"},t.default.createElement("span",null,e("Executor")),t.default.createElement("div",{className:"tb-seg tb-exec-seg"},t.default.createElement("button",{type:"button",className:L==="dsh"?"is-on":"",onClick:()=>g("dsh")},e("DSH session")),t.default.createElement("button",{type:"button",className:L==="codex"?"is-on":"",disabled:!J,title:e(J?"Runs over ACP with the local Codex CLI.":"Open the agent settings to check Codex."),onClick:()=>g("codex")},t.default.createElement(Y,{size:12}),e("Codex (ACP)"))),t.default.createElement("p",{className:"tb-hint"},e(L==="codex"?"Codex runs this card over ACP in its workspace. Automation still works.":"DSH runs this card in a session it owns."))),t.default.createElement("div",{className:"tb-field tb-auto-field"},t.default.createElement("span",null,e("Automation")),t.default.createElement("div",{className:"tb-seg"},t.default.createElement("button",{type:"button",className:C?"":"is-on",onClick:()=>P(!1)},e("Off")),t.default.createElement("button",{type:"button",className:C?"is-on":"",onClick:()=>P(!0)},t.default.createElement(ie,{size:12}),e("On a schedule")))),C?t.default.createElement(rt,{t:e,value:z,onChange:f=>H(u=>({...u,...f}))}):null,t.default.createElement("div",{className:"tb-dialog-foot"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:W},e("Cancel")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"submit",className:"tb-btn is-primary",disabled:M||!i.trim()},e("Create"))))}function Ot({task:e,t:a,workspaces:r}){let[n,o]=t.default.useState(!1),[i,h]=t.default.useState(!1),[s,d]=t.default.useState(!1),[m,k]=t.default.useState(!1),[b,v]=t.default.useState(ye);t.default.useEffect(()=>{o(!1),h(!1),d(!1)},[e.id]);let x=K[e.column],A=ot(e),L=st(e,a),C=U().agent?.status?.state==="ready",P=Array.isArray(r)?r:[],z=async u=>{if(u===e.executor||A)return;let N=await w.update(e.id,{executor:u});N&&y(N.warning||a("Executor updated"),{error:!!N.warning})},H=e.workspacePath?P.find(u=>u.id===e.workspaceId)||P.find(u=>u.path===e.workspacePath):null,M=e.workspacePath&&!H?`path:${e.workspacePath}`:"",p=H?H.id:M,T=async u=>{let N=u.target.value,O;if(!N)O={workspaceId:null,workspacePath:null,workspaceTitle:null};else if(N.startsWith("path:"))O={workspaceId:null,workspacePath:N.slice(5),workspaceTitle:e.workspaceTitle||null};else{let Z=P.find(pt=>pt.id===N);if(!Z)return;O={workspaceId:Z.id,workspacePath:Z.path,workspaceTitle:Z.title||null}}let X=await w.update(e.id,O);X&&y(X.warning||a("Workspace updated"),{error:!!X.warning})},q=()=>{let u=e.automation;v(u?{frequency:u.frequency==="custom"?"daily":u.frequency,time:u.time||"09:00",weekdays:Array.isArray(u.weekdays)&&u.weekdays.length?[...u.weekdays]:[tt()]}:ye()),d(!0)},Ee=async()=>{if(m)return;k(!0);let u=await w.update(e.id,{automation:at(b)});k(!1),u&&(d(!1),y(u.warning?u.warning:a("Automation updated"),{error:!!u.warning}))},J=async()=>{if(!e.automation)return;let u=!e.automation.active,N=await w.update(e.id,{automation:{active:u}});N&&(N.warning?y(N.warning,{error:!0}):y(a(u?"Automation resumed":"Automation paused")))},de=async()=>{if(!i){h(!0);return}let u=await w.update(e.id,{automation:{frequency:"none"}});u&&(h(!1),u.warning?y(u.warning,{error:!0}):y(a("Automation removed")))},f=async()=>{if(!n){o(!0);return}V(),await w.remove(e.id)&&y(a("Card deleted"))};return t.default.createElement(_,{side:!0,title:e.title,onClose:V,footer:t.default.createElement(t.default.Fragment,null,t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${n?"is-armed":""}`,onClick:f},a(n?"Delete twice to confirm":"Delete")),t.default.createElement("span",{className:"tb-spacer"}),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:async()=>{await w.move(e.id,"todo")&&V()}},a("Back to todo")),e.column==="done"?null:t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{if(A){await w.stop(e.id)&&y(a("Stopped the run"));return}await w.dispatch(e.id)&&y(a(e.executor==="codex"?"Dispatched to Codex":"Dispatched to its session"))}},A?a("Stop"):e.sessionId?a("Rerun"):a("Run")),e.column==="review"?t.default.createElement("button",{type:"button",className:"tb-btn is-primary",onClick:async()=>{await w.accept(e.id)&&(y(a(e.automation?"Accepted, back to todo":"Card accepted")),V())}},a(e.automation?"Accept this run":"Accept")):null)},t.default.createElement("div",{className:"tb-detail"},t.default.createElement("div",{className:"tb-detail-chips"},t.default.createElement(Je,{column:e.column,label:a(x.key),accent:x.accent}),e.tag?t.default.createElement("span",{className:"tb-chip"},`#${e.tag}`):null,e.source==="session"?t.default.createElement("span",{className:"tb-chip is-quiet"},t.default.createElement(se,{size:11}),a("From a session")):null),A?t.default.createElement("div",{className:"tb-card-live"},t.default.createElement("span",{className:"tb-pulse"}),t.default.createElement("span",null,L),e.steps?t.default.createElement("span",{className:"tb-steps"},`${a("Steps")} \xB7 ${e.steps}`):null):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("div",{className:"tb-progress-top"},t.default.createElement("span",null,a("Progress")),t.default.createElement("b",null,`${e.progress}%`)),t.default.createElement("div",{className:"tb-bar"},t.default.createElement("i",{style:{width:`${e.progress}%`}}))),e.note?t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Description")),t.default.createElement("p",{className:"tb-prose"},e.note)):null,t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Workspace")),t.default.createElement("label",{className:"tb-field tb-workspace"},t.default.createElement("select",{value:p,onChange:T,"aria-label":a("Workspace")},t.default.createElement("option",{value:""},a("Default directory")),P.map(u=>t.default.createElement("option",{key:u.id,value:u.id},ke(u))),M?t.default.createElement("option",{value:M},`${e.workspaceTitle||nt(e.workspacePath)} \xB7 ${a("Removed workspace")}`):null),e.workspacePath?t.default.createElement("code",{className:"tb-workspace-path"},e.workspacePath):null),t.default.createElement("p",{className:"tb-hint"},e.automation?a("Scheduled runs start here too."):a("A new session starts in this workspace when you start the card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Executor")),t.default.createElement("div",{className:"tb-seg tb-exec-seg"},t.default.createElement("button",{type:"button",className:e.executor==="dsh"?"is-on":"",disabled:A,onClick:()=>z("dsh")},a("DSH session")),t.default.createElement("button",{type:"button",className:e.executor==="codex"?"is-on":"",disabled:A||!C&&e.executor!=="codex",onClick:()=>z("codex")},t.default.createElement(Y,{size:12}),a("Codex (ACP)"))),t.default.createElement("p",{className:"tb-hint"},A?a("Stop the run before switching executor."):e.executor==="codex"?a("Codex runs this card over ACP in its workspace. Automation still works."):a("DSH runs this card in a session it owns."))),t.default.createElement("section",{className:"tb-block tb-auto-block"},t.default.createElement("div",{className:"tb-auto-head"},t.default.createElement("h4",null,a("Automation")),e.automation?t.default.createElement("span",{className:`tb-auto-state ${e.automation.active?"is-live":""}`},e.automation.active?a("Scheduled"):a("Paused")):null),s?t.default.createElement(t.default.Fragment,null,t.default.createElement(rt,{t:a,value:b,onChange:u=>v(N=>({...N,...u}))}),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>d(!1)},a("Cancel")),t.default.createElement("button",{type:"button",className:"tb-btn is-primary",disabled:m,onClick:Ee},a("Save")))):e.automation?t.default.createElement(t.default.Fragment,null,t.default.createElement("div",{className:"tb-auto-rule"},t.default.createElement(ie,{size:14}),t.default.createElement("span",null,ve(e.automation,a))),t.default.createElement("dl",{className:"tb-auto-meta"},t.default.createElement("dt",null,a("Next run")),t.default.createElement("dd",null,e.automation.runtime?.nextAt?ue(e.automation.runtime.nextAt,Q()):a("No upcoming run")),t.default.createElement("dt",null,a("Last run")),t.default.createElement("dd",null,e.automation.lastFiredAt?ae(e.automation.lastFiredAt,a):a("Not run yet"))),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:J},e.automation.active?a("Pause"):a("Resume")),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:q},a("Edit rule")),t.default.createElement("button",{type:"button",className:`tb-btn is-danger ${i?"is-armed":""}`,onClick:de},a(i?"Delete twice to confirm":"Remove automation")))):t.default.createElement(t.default.Fragment,null,t.default.createElement("p",{className:"tb-muted"},a("This card only runs when you start it.")),t.default.createElement("div",{className:"tb-auto-actions"},t.default.createElement("button",{type:"button",className:"tb-btn",onClick:q},t.default.createElement(ze,{size:13}),a("Make it automatic"))))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,e.executor==="codex"?a("Codex run"):a("Session")),e.executor==="codex"?e.codex?.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.codex.sessionId.slice(0,12)),e.codex.model?t.default.createElement("span",{className:"tb-chip is-quiet"},e.codex.model):null,e.codex.stopReason?t.default.createElement("span",{className:"tb-chip is-quiet"},e.codex.stopReason):null):t.default.createElement("p",{className:"tb-muted"},a("No Codex run yet.")," ",a("Codex starts in this workspace when you run the card.")):e.sessionId?t.default.createElement("div",{className:"tb-session"},t.default.createElement("code",null,e.sessionId.slice(0,8)),t.default.createElement(F,{icon:be,label:a("Open session"),onClick:()=>it(e.sessionId)})):t.default.createElement("p",{className:"tb-muted"},a("No session yet")," ",a("A session is created the first time you run this card."))),t.default.createElement("section",{className:"tb-block"},t.default.createElement("h4",null,a("Latest result")),e.result?t.default.createElement("pre",{className:"tb-result"},e.result):t.default.createElement("p",{className:"tb-muted"},a("No result yet.")),e.error?t.default.createElement("p",{className:"tb-error"},e.error):null),t.default.createElement("div",{className:"tb-meta"},a("Created")," ",ue(e.createdAt,Q())," \xB7 ",a("Updated")," ",ae(e.updatedAt,a))))}function lt(){let e=te(),a=U(),r=t.default.useRef(null),[n,o]=t.default.useState(1200);t.default.useEffect(()=>{ce();let g=setInterval(()=>{document.visibilityState==="visible"&&ce()},2500);return()=>clearInterval(g)},[]),t.default.useEffect(()=>{let g=r.current;if(!g)return;let C=new ResizeObserver(([P])=>o(P.contentRect.width));return C.observe(g),()=>C.disconnect()},[]);let i=a.spaces.length?a.spaces:[{id:$,name:"",order:0}],h=i.some(g=>g.id===a.activeSpaceId)?a.activeSpaceId:i[0].id,s=a.tasks.filter(g=>(g.spaceId||$)===h),d={};for(let g of a.tasks){let C=g.spaceId||$;d[C]=(d[C]||0)+1}let m=a.detailId?a.tasks.find(g=>g.id===a.detailId):null,k=[...new Set(s.map(g=>g.tag).filter(Boolean))],b=a.query.trim().toLowerCase(),v=s.filter(g=>a.filter==="active"&&g.column!=="doing"||a.filter==="review"&&g.column!=="review"?!1:b?[g.title,g.note,g.tag,g.workspaceTitle].some(C=>String(C||"").toLowerCase().includes(b)):!0),x=a.dialog?.kind||"task",A=x==="remove-space"?i.find(g=>g.id===a.dialog.id):null,L=A?a.tasks.filter(g=>(g.spaceId||$)===A.id).length:0;return t.default.createElement("div",{className:`tb-root ${n<980?"is-narrow":""}`,ref:r},t.default.createElement("style",null,$e),t.default.createElement("div",{className:"tb-ambient","aria-hidden":"true"},t.default.createElement("i"),t.default.createElement("i"),t.default.createElement("i")),t.default.createElement(Lt,{t:e,tasks:s,query:a.query,filter:a.filter,spaces:i,activeSpaceId:h,spaceCounts:d}),a.error&&!a.loaded?t.default.createElement("div",{className:"tb-fail"},t.default.createElement("p",null,e("Could not reach the board")),t.default.createElement("span",null,a.error),t.default.createElement("button",{type:"button",className:"tb-btn",onClick:()=>ce()},t.default.createElement(le,{size:14}),e("Retry"))):a.loaded?t.default.createElement("div",{className:"tb-board-wrap"},t.default.createElement("div",{className:"tb-board"},a.columns.map(g=>{let C=v.filter(z=>z.column===g),P=s.filter(z=>z.column===g).length;return t.default.createElement(zt,{key:g,column:g,tasks:C,total:P,t:e,spaceId:h})})),s.length>0&&v.length===0?t.default.createElement("p",{className:"tb-none"},e("Nothing matches this filter.")):null):t.default.createElement("div",{className:"tb-loading"},e("Loading board\u2026")),x==="task"&&a.dialog?t.default.createElement(_,{title:e("New task"),onClose:W,width:520},t.default.createElement(Wt,{t:e,defaultColumn:a.dialog.column,tags:k,workspaces:a.workspaces,spaceId:h})):null,a.dialog&&x==="space"?t.default.createElement(_,{title:e("New space"),onClose:W,width:440},t.default.createElement(Tt,{t:e})):null,x==="agent"&&a.dialog?t.default.createElement(_,{title:e("Codex agent"),onClose:W,width:560},t.default.createElement(Ye,{t:e})):null,A?t.default.createElement(Rt,{t:e,space:A,count:L}):null,m?t.default.createElement(Ot,{task:m,t:e,workspaces:a.workspaces}):null,t.default.createElement(Ze,{toast:a.toast,onClose:()=>I({toast:null})}))}var ct="task-board";function $t({size:e=22,active:a=!1}){return dt.default.createElement(We,{size:e,active:a})}var Ft=["slots","locale"];function Ht(e){Se(e),e.effect(()=>Ae(e),"task-board: locale");let a=e.locale.bind(ee);e.slots.inject("main",()=>e.slots.register({name:"main",key:ct},lt)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:ct,order:12,label:()=>a("Task board")},$t))}
return module.exports}})
