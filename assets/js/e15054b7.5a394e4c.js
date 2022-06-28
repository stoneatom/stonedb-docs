"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5832],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,s=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(s,m(m({ref:t},p),{},{components:n})):r.createElement(s,m({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,m[1]=i;for(var c=2;c<a;c++)m[c]=n[c];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),m=["components"],i={id:"mem-monitor",sidebar_position:7.23},l="Command for Memory Monitoring",c={unversionedId:"performance-tuning/performance-monitoring-commands/mem-monitor",id:"performance-tuning/performance-monitoring-commands/mem-monitor",title:"Command for Memory Monitoring",description:"The free command can be used to monitor memory usage.",source:"@site/docs/06-performance-tuning/02-performance-monitoring-commands/mem-monitor.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/mem-monitor",permalink:"/docs/performance-tuning/performance-monitoring-commands/mem-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/06-performance-tuning/02-performance-monitoring-commands/mem-monitor.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656412837,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:7.23,frontMatter:{id:"mem-monitor",sidebar_position:7.23},sidebar:"autoSidebar",previous:{title:"Commands for CPU Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/cpu-monitor"},next:{title:"Commands for I/O Monitoring",permalink:"/docs/performance-tuning/performance-monitoring-commands/disk-io-monitor"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,m);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-for-memory-monitoring"},"Command for Memory Monitoring"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"free")," command can be used to monitor memory usage."),(0,a.kt)("p",null,"Command output example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# free -g\ntotal        used        free      shared  buff/cache   available\nMem:            251          44           1           0         205         205\nSwap:             7           0           7\n")),(0,a.kt)("p",null,"Parameter description:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"total"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of memory. ",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"total")," = ",(0,a.kt)("strong",{parentName:"td"},"used")," + ",(0,a.kt)("strong",{parentName:"td"},"free")," + ",(0,a.kt)("strong",{parentName:"td"},"buff/cache"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"used"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of used memory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"free"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of free memory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"shared"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of shared memory.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buff/cache"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of memory used as buffers and cache.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"available"),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of available memory.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"available")," = ",(0,a.kt)("strong",{parentName:"td"},"free")," + ",(0,a.kt)("strong",{parentName:"td"},"buff/cache"))))))}f.isMDXComponent=!0}}]);