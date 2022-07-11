"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2650],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97736:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"failed-to-start",sidebar_position:9.1},c="Failed to Start StoneDB",l={unversionedId:"troubleshooting/failed-to-start",id:"troubleshooting/failed-to-start",title:"Failed to Start StoneDB",description:"Many issues will cause start failures of StoneDB. If StoneDB cannot be started, we recommend you check whether any error information is recorded in mysqld.log. This topic describes common causes of a start failure of StoneDB.",source:"@site/../Docs/08-troubleshooting/failed-to-start.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/failed-to-start",permalink:"/docs/troubleshooting/failed-to-start",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/../Docs/08-troubleshooting/failed-to-start.md",tags:[],version:"current",lastUpdatedBy:"leizzboy",lastUpdatedAt:1657506276,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:9.1,frontMatter:{id:"failed-to-start",sidebar_position:9.1},sidebar:"autoSidebar",previous:{title:"Use Gravity to Migrate Data to StoneDB",permalink:"/docs/data-migration-to-stonedb/use-gravity-to-migrate"},next:{title:"Excessively Large Data Directory",permalink:"/docs/troubleshooting/excessive-large-directory"}},u={},d=[{value:"Improper parameter settings",id:"improper-parameter-settings",level:2},{value:"Denial to access resources",id:"denial-to-access-resources",level:2},{value:"Damaged data pages",id:"damaged-data-pages",level:2}],p={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failed-to-start-stonedb"},"Failed to Start StoneDB"),(0,a.kt)("p",null,"Many issues will cause start failures of StoneDB. If StoneDB cannot be started, we recommend you check whether any error information is recorded in ",(0,a.kt)("strong",{parentName:"p"},"mysqld.log"),". This topic describes common causes of a start failure of StoneDB."),(0,a.kt)("h2",{id:"improper-parameter-settings"},"Improper parameter settings"),(0,a.kt)("p",null,"If the failure is caused by improper parameter settings, check ",(0,a.kt)("strong",{parentName:"p"},"mysqld.log")," to see which parameters are improperly configured. "),(0,a.kt)("p",null,"The following example indicates that parameter ",(0,a.kt)("strong",{parentName:"p"},"datadir")," is improperly configured."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"[ERROR] failed to set datadir to /stonedb/install/dataxxx/\n")),(0,a.kt)("h2",{id:"denial-to-access-resources"},"Denial to access resources"),(0,a.kt)("p",null,"If the port is occupied, the directory owner is incorrect, or the permission on the directory is insufficient, you cannot access the directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Error: unable to create temporary file; errno: 13\n")),(0,a.kt)("h2",{id:"damaged-data-pages"},"Damaged data pages"),(0,a.kt)("p",null,"If a relevant data page is damaged, StoneDB cannot be started. In this case, you must restore the data page from a backup."))}f.isMDXComponent=!0}}]);