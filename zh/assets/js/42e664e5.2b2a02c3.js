"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2428],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var m={};for(var l in e)hasOwnProperty.call(e,l)&&(m[l]=e[l]);m.originalType=t,m.mdxType="string"==typeof t?t:a,i[1]=m;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51113:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],m={id:"network-monitor",sidebar_position:7.25},l="Command for Network Monitoring",c={unversionedId:"performance-tuning/performance-monitoring-commands/network-monitor",id:"performance-tuning/performance-monitoring-commands/network-monitor",title:"Command for Network Monitoring",description:"The topic describes the netstat command that is used to monitor network status.",source:"@site/docs/06-performance-tuning/02-performance-monitoring-commands/network-monitor.md",sourceDirName:"06-performance-tuning/02-performance-monitoring-commands",slug:"/performance-tuning/performance-monitoring-commands/network-monitor",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/network-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/02-performance-monitoring-commands/network-monitor.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1657106214,formattedLastUpdatedAt:"2022/7/6",sidebarPosition:7.25,frontMatter:{id:"network-monitor",sidebar_position:7.25},sidebar:"autoSidebar",previous:{title:"Commands for I/O Monitoring",permalink:"/zh/docs/performance-tuning/performance-monitoring-commands/disk-io-monitor"},next:{title:"OS Tuning",permalink:"/zh/docs/performance-tuning/os-tuning"}},p={},s=[],d={toc:s};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-for-network-monitoring"},"Command for Network Monitoring"),(0,o.kt)("p",null,"The topic describes the ",(0,o.kt)("inlineCode",{parentName:"p"},"netstat")," command that is used to monitor network status."),(0,o.kt)("p",null,"Command output example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# netstat -i\nKernel Interface table\nIface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg\ndocker0   1500    70712      0      0 0        131086      0      0      0 BMRU\neno1      1500 124457829      0 101794 0      57907365      0      0      0 BMRU\neno2      1500        0      0      0 0             0      0      0      0 BMU\neno3      1500        0      0      0 0             0      0      0      0 BMU\neno4      1500        0      0      0 0             0      0      0      0 BMU\nenp130s0  1500        0      0      0 0             0      0      0      0 BMU\nlo       65536     1123      0      0 0          1123      0      0      0 LRU\nvethed74  1500      269      0      0 0           407      0      0      0 BMRU\n")),(0,o.kt)("p",null,"Parameter description:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Parameter")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Iface"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the network adapter.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MTU"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum transmission unit. Default value: 1500.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OK"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of error-free packets.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ERR"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of damaged packets.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DRP"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of dropped packets.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OVR"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of packets that exceeds the threshold.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Flg"),(0,o.kt)("td",{parentName:"tr",align:null},"The flag set for the interface. The value can be:",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"B"),": A broadcast address is configured.",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"L"),": The interface is a loopback device.",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"M"),": All packets are received.",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"R"),": The interface is running.",(0,o.kt)("br",null),"- ",(0,o.kt)("strong",{parentName:"td"},"U"),": The interface is active.",(0,o.kt)("br",null))))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"RX")," indicates received. ",(0,o.kt)("strong",{parentName:"p"},"TX")," indicates sent."))))}u.isMDXComponent=!0}}]);