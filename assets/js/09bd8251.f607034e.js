"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[7119],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,c(c({ref:t},l),{},{components:a})):n.createElement(g,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},10763:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),c=["components"],i={id:"create-and-manage-view",sidebar_position:5.53},s="Create and Manage a View",d={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-view",id:"developer-guide/create-and-manage-database-objects/create-and-manage-view",title:"Create and Manage a View",description:"Create a view. For example, execute the following SQL statement to create a view named v_s, used to query teachers aged over 18:",source:"@site/docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-view.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-view",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-view",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-view.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656412837,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:5.53,frontMatter:{id:"create-and-manage-view",sidebar_position:5.53},sidebar:"autoSidebar",previous:{title:"Create and Manage a Table",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table"},next:{title:"Create and Manage a View",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure"}},l={},u=[],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-and-manage-a-view"},"Create and Manage a View"),(0,o.kt)("p",null,"Create a view. For example, execute the following SQL statement to create a view named ",(0,o.kt)("strong",{parentName:"p"},"v_s"),", used to query teachers aged over 18:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create view v_s as select name from teachers where age>18;\n")),(0,o.kt)("p",null,"Check the statement used for creating a view. For example, execute the following SQL statement to check the statement used for creating view ",(0,o.kt)("strong",{parentName:"p"},"v_s"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show create view v_s\\G\n")),(0,o.kt)("p",null,"Drop a view. For example, execute the following SQL statement to drop view ",(0,o.kt)("strong",{parentName:"p"},"v_s"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop view v_s;\n")))}m.isMDXComponent=!0}}]);