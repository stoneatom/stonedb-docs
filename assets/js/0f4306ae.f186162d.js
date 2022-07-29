"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1935],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47389:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"os-tuning",sidebar_position:7.3},l="OS Tuning",u={unversionedId:"performance-tuning/os-tuning",id:"performance-tuning/os-tuning",title:"OS Tuning",description:"This topic describes how to tune a Linux OS. Methods to tune other types of OSs are currently not provided. The commands used in the following example suits only to CentOS 7.x.",source:"@site/../Docs/06-performance-tuning/os-tuning.md",sourceDirName:"06-performance-tuning",slug:"/performance-tuning/os-tuning",permalink:"/docs/performance-tuning/os-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/06-performance-tuning/os-tuning.md",tags:[],version:"current",lastUpdatedBy:"andyli",lastUpdatedAt:1659082170,formattedLastUpdatedAt:"7/29/2022",sidebarPosition:7.3,frontMatter:{id:"os-tuning",sidebar_position:7.3},sidebar:"autoSidebar",previous:{title:"Command for Network Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/network-monitor"},next:{title:"Best Practices for SQL Coding",permalink:"/docs/performance-tuning/database-tuning/sql-best-practices"}},c={},p=[{value:"<strong>Disable SELinux and the firewall</strong>",id:"disable-selinux-and-the-firewall",level:2},{value:"<strong>Change the I/O scheduling mode</strong>",id:"change-the-io-scheduling-mode",level:2},{value:"<strong>Do use swap space unless necessary</strong>",id:"do-use-swap-space-unless-necessary",level:2},{value:"<strong>Disable NUMA</strong>",id:"disable-numa",level:2},{value:"<strong>Disable transparent hugepages</strong>",id:"disable-transparent-hugepages",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"os-tuning"},"OS Tuning"),(0,o.kt)("p",null,"This topic describes how to tune a Linux OS. Methods to tune other types of OSs are currently not provided. The commands used in the following example suits only to CentOS 7.",(0,o.kt)("em",{parentName:"p"},"x"),"."),(0,o.kt)("h2",{id:"disable-selinux-and-the-firewall"},(0,o.kt)("strong",{parentName:"h2"},"Disable SELinux and the firewall")),(0,o.kt)("p",null,"We recommend that you disable SELinux and the firewall to allow access from certain services."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl stop firewalld \nsystemctl disable firewalld\nvi /etc/selinux/config\n# Modify the value of SELINUX.\nSELINUX = disabled\n")),(0,o.kt)("h2",{id:"change-the-io-scheduling-mode"},(0,o.kt)("strong",{parentName:"h2"},"Change the I/O scheduling mode")),(0,o.kt)("p",null,"If your disks are hard disk drives (HDDs), change the mode to ",(0,o.kt)("strong",{parentName:"p"},"Deadline")," to improve throughput. If your disks are solid-state drive (SSDs), change the mode to ",(0,o.kt)("strong",{parentName:"p"},"noop"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'dmesg | grep -i scheduler\ngrubby --update-kernel=ALL --args="elevator=noop"\n')),(0,o.kt)("h2",{id:"do-use-swap-space-unless-necessary"},(0,o.kt)("strong",{parentName:"h2"},"Do use swap space unless necessary")),(0,o.kt)("p",null,"If your memory is insufficient, we recommend that you do not use swap space as buffer. This is because the OS will suffer from severe performance problems if the swap space is used. For this reason, set ",(0,o.kt)("strong",{parentName:"p"},"vm.swappiness")," to the smallest value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/sysctl.conf\n# Add parameter setting vm.swappiness = 0\nvm.swappiness = 0\n")),(0,o.kt)("h2",{id:"disable-numa"},(0,o.kt)("strong",{parentName:"h2"},"Disable NUMA")),(0,o.kt)("p",null,"If the memory allocated to non-uniform memory access (NUMA) nodes in a zone is exhausted, the OS will reclaim memory even though the free memory in total is sufficient. This has certain impacts on the OS. We recommend that you disable NUMA to allocate and use memory more efficiently."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'grubby --update-kernel=ALL --args="numa=off"\n')),(0,o.kt)("h2",{id:"disable-transparent-hugepages"},(0,o.kt)("strong",{parentName:"h2"},"Disable transparent hugepages")),(0,o.kt)("p",null,"Transparent hugepages are dynamically allocated. Databases use sparse memory access. If the system contains a large number of memory fragments, dynamic allocation of transparent hugepages will suffer from high latency and CPU bursts will occur. For this reason, we recommend you to disable transparent hugepages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat /sys/kernel/mm/transparent_hugepage/enabled\nvi /etc/default/grub\nGRUB_CMDLINE_LINUX="xxx transparent_hugepage=never"\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n')))}m.isMDXComponent=!0}}]);