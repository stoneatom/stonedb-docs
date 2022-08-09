"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2351],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,c=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},69342:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"resource-bottleneck",sidebar_position:9.9},s="Diagnose System Resource Bottlenecks",p={unversionedId:"troubleshooting/resource-bottleneck",id:"troubleshooting/resource-bottleneck",title:"Diagnose System Resource Bottlenecks",description:"If an OS resource bottleneck occurs, applications running on the OS are affected and the OS may even fail to respond to simple instructions. Before the OS stops providing services, you can run commands to collect usage information about CPU, memory, I/O, and network resources and then analyze whether these resources are properly used and whether any resource bottlenecks exist.",source:"@site/../Docs/08-troubleshooting/resource-bottleneck.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/resource-bottleneck",permalink:"/docs/troubleshooting/resource-bottleneck",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/08-troubleshooting/resource-bottleneck.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660045580,formattedLastUpdatedAt:"8/9/2022",sidebarPosition:9.9,frontMatter:{id:"resource-bottleneck",sidebar_position:9.9},sidebar:"autoSidebar",previous:{title:"Diagnose Slow SQL Queries",permalink:"/docs/troubleshooting/slow-query"},next:{title:"Installation FAQ",permalink:"/docs/FAQ/install-faq"}},m={},u=[{value:"CPU",id:"cpu",level:2},{value:"Parameter description",id:"parameter-description",level:3},{value:"Diagnose the cause of high CPU utilization",id:"diagnose-the-cause-of-high-cpu-utilization",level:3},{value:"<strong>Memory</strong>",id:"memory",level:2},{value:"Parameter description",id:"parameter-description-1",level:3},{value:"Diagnose the cause of high memory usage",id:"diagnose-the-cause-of-high-memory-usage",level:3},{value:"I/O",id:"io",level:2},{value:"Parameter description",id:"parameter-description-2",level:3},{value:"Diagnose the cause of high I/O usage",id:"diagnose-the-cause-of-high-io-usage",level:3}],d={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"diagnose-system-resource-bottlenecks"},"Diagnose System Resource Bottlenecks"),(0,l.kt)("p",null,"If an OS resource bottleneck occurs, applications running on the OS are affected and the OS may even fail to respond to simple instructions. Before the OS stops providing services, you can run commands to collect usage information about CPU, memory, I/O, and network resources and then analyze whether these resources are properly used and whether any resource bottlenecks exist."),(0,l.kt)("h2",{id:"cpu"},"CPU"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"top")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"vmstat")," commands can be used to check the CPU utilization. The information returned by the ",(0,l.kt)("inlineCode",{parentName:"p"},"top")," command is more comprehensive, which consists the statistics about the system performance and information about processes. The information returned is sorted by CPU utilization."),(0,l.kt)("p",null,"Example of ",(0,l.kt)("inlineCode",{parentName:"p"},"top "),"command output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"top - 10:12:21 up 5 days, 22:31,  4 users,  load average: 1.00, 1.00, 0.78\nTasks: 731 total,   1 running, 730 sleeping,   0 stopped,   0 zombie\n%Cpu(s):  1.7 us,  0.0 sy,  0.0 ni, 98.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nMiB Mem : 257841.3 total,   1887.5 free,  45581.6 used, 210372.2 buff/cache\nMiB Swap:   8192.0 total,   8188.7 free,      3.3 used. 210450.4 avail Mem \n\nPID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                                                                                                                \n908076 mysql     20   0  193.0g  42.4g  44088 S 100.3  16.8 228:10.34 mysqld                                                                                                                 \n823137 root      20   0 6187564  83772  51636 S   6.6   0.0   6:36.12 dockerd                                                                                                                \n822938 root      20   0 3278696  58500  35420 S   0.7   0.0  38:37.69 containerd                                                                                                             \n1483 root      20   0  239280   9260   8136 S   0.3   0.0   0:19.16 accounts-daemon                                                                                                        \n928343 root      20   0    9936   4576   3240 R   0.3   0.0   0:00.04 top                                                                                                                    \n  ......\n")),(0,l.kt)("h3",{id:"parameter-description"},"Parameter description"),(0,l.kt)("p",null,"Parameters in line 1:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10:12:21"),(0,l.kt)("td",{parentName:"tr",align:null},"The current system time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"up 5 days"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of days for which the system runs continuously since last startup.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4 users"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of the online users.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load average"),(0,l.kt)("td",{parentName:"tr",align:null},"The average system workloads in the past 1 minute, 5 minutes, and 15 minutes.")))),(0,l.kt)("p",null,"Parameters in line 2:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of processes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"running"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the running state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sleeping"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the sleeping state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopped"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the stopped state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zombie"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of processes that are in the zombie state.")))),(0,l.kt)("p",null,"Parameters in line 3:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"us"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running user space processes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sy"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running system processes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ni"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in running the processes of which priorities are changed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent idle.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wa"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in wait.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hi"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in handling hardware interrupts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"si"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent in handling software interrups.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"st"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent on the hypervisor.")))),(0,l.kt)("p",null,"Pay attention to values in line 3. If the value of ",(0,l.kt)("strong",{parentName:"p"},"us")," is large, user space processes consume much CPU time. If the value of ",(0,l.kt)("strong",{parentName:"p"},"us")," is larger than 50% for a long time, applications must be tuned in time. If the value of ",(0,l.kt)("strong",{parentName:"p"},"sy")," is large, system processes consume much CPU time. This may be caused by improper OS configuration or OS bugs. If the value of ",(0,l.kt)("strong",{parentName:"p"},"wa")," is large, I/O waits are high. This may be caused by high random I/O access or an I/O bottleneck."),(0,l.kt)("p",null,"Parameters in line 4:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"free"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of free memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"used"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of used memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buff/cache"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory that is used as buffers and cache.")))),(0,l.kt)("p",null,"Parameters in line 5:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of swap space.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"free"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of free swap space.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"used"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of used swap space.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avail Mem"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of swap space that has been cached.")))),(0,l.kt)("p",null,"Parameters in the process list:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PID"),(0,l.kt)("td",{parentName:"tr",align:null},"The process ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USER"),(0,l.kt)("td",{parentName:"tr",align:null},"The owner of the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PR"),(0,l.kt)("td",{parentName:"tr",align:null},"The priority of the process. A smaller value indicates a higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NI"),(0,l.kt)("td",{parentName:"tr",align:null},"The nice value of the priority. A positive integer indicates that the priority of the process is being downgraded. A negative integer indicates that the priority of the process is being upgraded. The value range is -20 to 19 and the default value is 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VIRT"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of virtual memory occupied by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RES"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of physical memory occupied by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHR"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of shared memory occupied by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"The status of the process. The value can be:",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"S"),": sleeping",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"R"),": running",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"Z"),": zombie",(0,l.kt)("br",null),"- ",(0,l.kt)("strong",{parentName:"td"},"N"),": The nice value of the process is a negative value.",(0,l.kt)("br",null))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%CPU"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of the CPU time used by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%MEM"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of the memory occupied by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME+"),(0,l.kt)("td",{parentName:"tr",align:null},"The total CPU time used by the process.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMAND"),(0,l.kt)("td",{parentName:"tr",align:null},"The command that the process is running.")))),(0,l.kt)("h3",{id:"diagnose-the-cause-of-high-cpu-utilization"},"Diagnose the cause of high CPU utilization"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Find the function that is called by the process that consumes the most CPU time.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"top -H\nperf top -p xxx\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"xxx")," indicates the process that consumes the most CPU time."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Find the SQL statement that consumes the most CPU time.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pidstat -t -p <mysqld_pid> 1 5\nselect * from performance_schema.threads where thread_os_id = xxx\\G\nselect * from information_schema.processlist where id = performance_schema.threads.processlist_id\\G\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"xxx")," indicates the thread that consumes the most CPU time."),(0,l.kt)("h2",{id:"memory"},(0,l.kt)("strong",{parentName:"h2"},"Memory")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"vmstat"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"free")," commands can be used to monitor memory usage."),(0,l.kt)("p",null,"Example of ",(0,l.kt)("inlineCode",{parentName:"p"},"free")," command output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# free -g\ntotal        used        free      shared  buff/cache   available\nMem:            251          44           1           0         205         205\nSwap:             7           0           7\n")),(0,l.kt)("h3",{id:"parameter-description-1"},"Parameter description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"total"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory. ",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"total")," = ",(0,l.kt)("strong",{parentName:"td"},"used")," + ",(0,l.kt)("strong",{parentName:"td"},"free")," + ",(0,l.kt)("strong",{parentName:"td"},"buff/cache"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"used"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of used memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"free"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of free memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shared"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of shared memory.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buff/cache"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of memory used as buffers and cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"available"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of available memory.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"available")," = ",(0,l.kt)("strong",{parentName:"td"},"free")," + ",(0,l.kt)("strong",{parentName:"td"},"buff/cache"))))),(0,l.kt)("h3",{id:"diagnose-the-cause-of-high-memory-usage"},"Diagnose the cause of high memory usage"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Check whether memory is properly configured. For example, if the physical memory of the OS is 128 GB and 110 GB is allocated to the database instance, there is a high probability of memory exhaustion, because other OS processes and applications are consuming memory."),(0,l.kt)("li",{parentName:"ol"},"Check whether too many concurrent connections exist. ",(0,l.kt)("strong",{parentName:"li"},"read_buffer_size"),", ",(0,l.kt)("strong",{parentName:"li"},"read_rnd_buffer_size"),", ",(0,l.kt)("strong",{parentName:"li"},"sort_buffer_size"),", ",(0,l.kt)("strong",{parentName:"li"},"thread_stack"),", ",(0,l.kt)("strong",{parentName:"li"},"join_buffer_size"),", and ",(0,l.kt)("strong",{parentName:"li"},"binlog_cache_size")," are all session-level parameters. More connections indicate more memory consumed. Therefore, we recommend that you set these parameters to small values."),(0,l.kt)("li",{parentName:"ol"},"Check whether improper JOIN queries exist. Suppose a query that joins multiple tables exists, and the driving table of this query has a large result set. When the query is being executed, the driven table is executed for a large number of times, which may result in memory leakage."),(0,l.kt)("li",{parentName:"ol"},"Check whether too many files are open and whether ",(0,l.kt)("strong",{parentName:"li"},"table_open_cache")," is properly set. When you access a table, the table is loaded to the cache specified by ",(0,l.kt)("strong",{parentName:"li"},"table_open_cache")," so that next access to this table can be accelerated. However, if ",(0,l.kt)("strong",{parentName:"li"},"table_open_cache")," is too large and too many tables are open, a large amount of memory will be consumed.")),(0,l.kt)("h2",{id:"io"},"I/O"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"iostat"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"dstat"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"pidstat")," commands are used to monitor the I/O usage."),(0,l.kt)("p",null,"Example of ",(0,l.kt)("inlineCode",{parentName:"p"},"iostat")," command output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# iostat -x 1 1\nLinux 3.10.0-957.el7.x86_64 (htap2)     06/13/2022      _x86_64_        (64 CPU)\n\navg-cpu:  %user   %nice %system %iowait  %steal   %idle\n0.06    0.00    0.03    0.01    0.00   99.90\n\nDevice:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util\nsda               0.00     0.00    0.00    0.00     0.04     0.00    85.75     0.00    0.25    0.25    0.00   0.15   0.00\nsdb               0.06     0.11    7.61    1.10  1849.41    50.81   436.48     0.36   40.93   46.75    0.48   1.56   1.35\ndm-0              0.00     0.00    0.28    0.19     8.25    12.05    87.01     0.00    4.81    7.37    0.94   1.61   0.08\n")),(0,l.kt)("h3",{id:"parameter-description-2"},"Parameter description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rrqm/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of read requests merged per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wrqm/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of write requests merged per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number (after merges) of read requests completed per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number (after merges) of write requests completed per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rkB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of kilobytes read per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wkB/s"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of kilobytes written per second.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avgrq-sz"),(0,l.kt)("td",{parentName:"tr",align:null},"The average size of the requests, expressed in sectors (512 bytes).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"avgqu-sz"),(0,l.kt)("td",{parentName:"tr",align:null},"The average queue length of the I/O requests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"await"),(0,l.kt)("td",{parentName:"tr",align:null},"The average time for I/O requests to be served.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"r_await"),(0,l.kt)("td",{parentName:"tr",align:null},"The average time for read requests to be served.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"w_await"),(0,l.kt)("td",{parentName:"tr",align:null},"The average time for write requests to be served.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"svctm"),(0,l.kt)("td",{parentName:"tr",align:null},"The average service time for I/O requests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"%util"),(0,l.kt)("td",{parentName:"tr",align:null},"The percentage of CPU time spent on I/O requests.")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The sum of ",(0,l.kt)("strong",{parentName:"p"},"r/s")," and ",(0,l.kt)("strong",{parentName:"p"},"w/s")," is the system input/output operations per second (IOPS)."))),(0,l.kt)("h3",{id:"diagnose-the-cause-of-high-io-usage"},"Diagnose the cause of high I/O usage"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Find the disk with the highest usage.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"iostat -x -m 1\niostat -d /dev/sda -x -m 1\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Find the application with the highest I/O usage.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pidstat -d 1\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Find the thread with the highest I/O usage.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pidstat -dt -p mysqld_id 1\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Find the SQL statement with the highest I/O usage.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from performance_schema.threads where thread_os_id = xxx\\G\nselect * from information_schema.processlist where id = performance_schema.threads.processlist_id\\G\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"xxx")," indicates the thread with the highest I/O usage."))}h.isMDXComponent=!0}}]);