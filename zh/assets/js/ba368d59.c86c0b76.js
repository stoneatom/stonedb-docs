"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3904],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9522:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],u={id:"parameter-tuning",sidebar_position:7.43},c="Database parameter tuning",p={unversionedId:"performance-tuning/database-tuning/parameter-tuning",id:"performance-tuning/database-tuning/parameter-tuning",title:"Database parameter tuning",description:"",source:"@site/docs/06-performance-tuning/04-database-tuning/parameter-tuning.md",sourceDirName:"06-performance-tuning/04-database-tuning",slug:"/performance-tuning/database-tuning/parameter-tuning",permalink:"/zh/docs/performance-tuning/database-tuning/parameter-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/04-database-tuning/parameter-tuning.md",tags:[],version:"current",lastUpdatedBy:"LiMK",lastUpdatedAt:1656387165,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:7.43,frontMatter:{id:"parameter-tuning",sidebar_position:7.43},sidebar:"autoSidebar",previous:{title:"TBU-Optimize SQL Statements",permalink:"/zh/docs/performance-tuning/database-tuning/sql-tuning"},next:{title:"Read/Write Splitting",permalink:"/zh/docs/performance-tuning/architecture-tuning/read_write-splitting"}},s={},f=[],l={toc:f};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-parameter-tuning"},"Database parameter tuning"))}m.isMDXComponent=!0}}]);