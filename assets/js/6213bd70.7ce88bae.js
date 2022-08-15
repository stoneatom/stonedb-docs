"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4e3],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),i=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=i(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=i(n),c=r,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(g,l(l({ref:e},s),{},{components:n})):a.createElement(g,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4856:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],p={id:"top-commands",sidebar_position:7.21},m="The top command",i={unversionedId:"performance-tuning/performance-monitoring-commands/top-commands",id:"performance-tuning/performance-monitoring-commands/top-commands",title:"The top command",description:"The top command can be used to monitor the usage of CPUs, memory, and swap space of the OS. It can also be used to monitor processes. The command output is sorted based on the CPU time.",source:"@site/../Docs/06-performance-tuning/02-performance-monitoring-commands/top-commands.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/top-commands",permalink:"/docs/performance-tuning/performance-monitoring-commands/top-commands",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/06-performance-tuning/02-performance-monitoring-commands/top-commands.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660543547,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:7.21,frontMatter:{id:"top-commands",sidebar_position:7.21},sidebar:"autoSidebar",previous:{title:"Overview",permalink:"/docs/performance-tuning/performance-tuning-overview"},next:{title:"Commands for CPU Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/cpu-monitor"}},s={},u=[],d={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-top-command"},"The top command"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," command can be used to monitor the usage of CPUs, memory, and swap space of the OS. It can also be used to monitor processes. The command output is sorted based on the CPU time."),(0,o.kt)("p",null,"Command output example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"top - 10:12:21 up 5 days, 22:31,  4 users,  load average: 1.00, 1.00, 0.78\nTasks: 731 total,   1 running, 730 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  1.7 us,  0.0 sy,  0.0 ni, 98.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem : 257841.3 total,   1887.5 free,  45581.6 used, 210372.2 buff/cache\nMiB Swap:   8192.0 total,   8188.7 free,      3.3 used. 210450.4 avail Mem \n\nPID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                                                                                                                \n908076 mysql     20   0  193.0g  42.4g  44088 S 100.3  16.8 228:10.34 mysqld                                                                                                                 \n823137 root      20   0 6187564  83772  51636 S   6.6   0.0   6:36.12 dockerd                                                                                                                \n822938 root      20   0 3278696  58500  35420 S   0.7   0.0  38:37.69 containerd                                                                                                             \n1483 root      20   0  239280   9260   8136 S   0.3   0.0   0:19.16 accounts-daemon                                                                                                        \n928343 root      20   0    9936   4576   3240 R   0.3   0.0   0:00.04 top                                                                                                                    \n......\n")),(0,o.kt)("p",null,"Parameters in line 1:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10:12:21"),(0,o.kt)("td",{parentName:"tr",align:null},"The current system time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"up 5 days"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of days for which the system runs continuously since last startup.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4 users"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of the online users.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"load average"),(0,o.kt)("td",{parentName:"tr",align:null},"The average system workloads in the past 1 minute, 5 minutes, and 15 minutes.")))),(0,o.kt)("p",null,"Parameters in line 2:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"total"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of processes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"running"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the running state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sleeping"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the sleeping state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stopped"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the stopped state.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"zombie"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the zombie state.")))),(0,o.kt)("p",null,"Parameters in line 3:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"us"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running user space processes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sy"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running system processes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ni"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running the processes of which priorities are changed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"id"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent idle.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wa"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in wait.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"hi"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in handling hardware interrupts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"si"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in handling software interrups.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"st"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent on the hypervisor.")))),(0,o.kt)("p",null,"Pay attention to values in this line. If the value of ",(0,o.kt)("strong",{parentName:"p"},"us")," is large, user space processes consume much CPU time. If the value of ",(0,o.kt)("strong",{parentName:"p"},"us")," is larger than 50% for a long time, applications must be tuned in time. If the value of ",(0,o.kt)("strong",{parentName:"p"},"sy")," is large, system processes consume much CPU time. This may be caused by improper OS configuration or OS bugs. If the value of ",(0,o.kt)("strong",{parentName:"p"},"wa")," is large, I/O waits are high. This may be caused by high random I/O access or an I/O bottleneck."),(0,o.kt)("p",null,"Parameters in line 4:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"total"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of memory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"free"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of free memory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"used"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of used memory.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"buff/cache"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of memory that is used as buffers and cache.")))),(0,o.kt)("p",null,"Parameters in line 5:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"total"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of swap space.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"free"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of free swap space.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"used"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of used swap space.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"avail Mem"),(0,o.kt)("td",{parentName:"tr",align:null},"The size of swap space that has been cached.")))),(0,o.kt)("p",null,"Parameters in the process list:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PID"),(0,o.kt)("td",{parentName:"tr",align:null},"The process ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"USER"),(0,o.kt)("td",{parentName:"tr",align:null},"The owner of the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PR"),(0,o.kt)("td",{parentName:"tr",align:null},"The priority of the process. A smaller value indicates a higher priority.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NI"),(0,o.kt)("td",{parentName:"tr",align:null},"The nice value of the priority. A positive integer indicates that the priority of the process is being downgraded. A negative integer indicates that the priority of the process is being upgraded. The value range is -20 to 19 and the default value is 0.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"VIRT"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of virtual memory occupied by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RES"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of physical memory occupied by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SHR"),(0,o.kt)("td",{parentName:"tr",align:null},"The amount of shared memory occupied by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"S"),(0,o.kt)("td",{parentName:"tr",align:null},"The status of the process. The value can be:",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"S"),": sleeping",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"R"),": running",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"Z"),": zombie",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"N"),": The nice value of the process is a negative value.",(0,o.kt)("br",null))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"%CPU"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of the CPU time used by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"%MEM"),(0,o.kt)("td",{parentName:"tr",align:null},"The percentage of the memory occupied by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TIME+"),(0,o.kt)("td",{parentName:"tr",align:null},"The total CPU time used by the process.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"COMMAND"),(0,o.kt)("td",{parentName:"tr",align:null},"The command that the process is running.")))))}c.isMDXComponent=!0}}]);