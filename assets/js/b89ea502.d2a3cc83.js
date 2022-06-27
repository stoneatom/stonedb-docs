"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6176],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9668:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"error-codes",sidebar_position:5.63},p=void 0,l={unversionedId:"developer-guide/appendix/error-codes",id:"developer-guide/appendix/error-codes",title:"error-codes",description:"This topic describes the common error codes that may be returned in StoneDB.",source:"@site/docs/04-developer-guide/05-appendix/error-codes.md",sourceDirName:"04-developer-guide/05-appendix",slug:"/developer-guide/appendix/error-codes",permalink:"/docs/developer-guide/appendix/error-codes",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/05-appendix/error-codes.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656331212,formattedLastUpdatedAt:"6/27/2022",sidebarPosition:5.63,frontMatter:{id:"error-codes",sidebar_position:5.63},sidebar:"autoSidebar",previous:{title:"Configure Parameters",permalink:"/docs/developer-guide/appendix/configuration-parameters"},next:{title:"Please wait for release",permalink:"/docs/download"}},d={},c=[],u={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This topic describes the common error codes that may be returned in StoneDB."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Error code")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Error message")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2233 (HY000)"),(0,a.kt)("td",{parentName:"tr",align:null},"Be disgraceful to storage engine, operating is forbidden!"),(0,a.kt)("td",{parentName:"tr",align:null},"The error message is returned because the DDL operation is not supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1031 (HY000)"),(0,a.kt)("td",{parentName:"tr",align:null},"Table storage engine for 'xxx' doesn't have this option"),(0,a.kt)("td",{parentName:"tr",align:null},"The error message is because the DML operation is not supported.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1040 (HY000)"),(0,a.kt)("td",{parentName:"tr",align:null},"Too many connections"),(0,a.kt)("td",{parentName:"tr",align:null},"The error message is because the number of connections has reached the maximum number.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1045 (28000)"),(0,a.kt)("td",{parentName:"tr",align:null},"Access denied for user 'u_test'@'%' (using password: YES)"),(0,a.kt)("td",{parentName:"tr",align:null},"The error message is because the username or password is incorrect or the permissions are insufficient.")))))}m.isMDXComponent=!0}}]);