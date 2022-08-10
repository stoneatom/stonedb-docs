"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5082],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(v,i(i({ref:t},u),{},{components:n})):o.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={id:"use-navicat",sidebar_position:5.22},s="Use Navicat to Connect to StoneDB",l={unversionedId:"developer-guide/connect-to-stonedb/use-navicat",id:"developer-guide/connect-to-stonedb/use-navicat",title:"Use Navicat to Connect to StoneDB",description:"Navicat is a database management tool that allows you to connect to databases. You can use Navicat to connect to StoneDB and other relational databases such as Oracle, MySQL, and PostgreSQL. After you connect to StoneDB using Navicat, you can create, manage and maintain StoneDB on the Navicat graphical user interface (GUI).",source:"@site/../Docs/04-developer-guide/01-connect-to-stonedb/use-navicat.md",sourceDirName:"04-developer-guide/01-connect-to-stonedb",slug:"/developer-guide/connect-to-stonedb/use-navicat",permalink:"/docs/developer-guide/connect-to-stonedb/use-navicat",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/04-developer-guide/01-connect-to-stonedb/use-navicat.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:5.22,frontMatter:{id:"use-navicat",sidebar_position:5.22},sidebar:"autoSidebar",previous:{title:"Use mysql to Connect to StoneDB",permalink:"/docs/developer-guide/connect-to-stonedb/use-mysql-client"},next:{title:"DML Statements",permalink:"/docs/developer-guide/DML-statements"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-navicat-to-connect-to-stonedb"},"Use Navicat to Connect to StoneDB"),(0,r.kt)("p",null,"Navicat is a database management tool that allows you to connect to databases. You can use Navicat to connect to StoneDB and other relational databases such as Oracle, MySQL, and PostgreSQL. After you connect to StoneDB using Navicat, you can create, manage and maintain StoneDB on the Navicat graphical user interface (GUI)."),(0,r.kt)("p",null,"This topic shows you how to use Navicat to connect to StoneDB."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Navicat has been installed."),(0,r.kt)("h2",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Navicat and choose ",(0,r.kt)("strong",{parentName:"li"},"File")," > ",(0,r.kt)("strong",{parentName:"li"},"New Connection")," > ",(0,r.kt)("strong",{parentName:"li"},"MySQL"),".")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"In the dialog box that appears, click the ",(0,r.kt)("strong",{parentName:"li"},"General")," tab, and enter the connection name, server IP address, port, username, and password. The following figure provides an example.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Test Connection"),'. If message "Connection successful" appears, the connection to StoneDB is established.')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Here's a picture to add")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You cannot use Navicat to connect to StoneDB as a super administrator ('root'@'localhost')."))))}m.isMDXComponent=!0}}]);