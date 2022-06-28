"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[274],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(y,u(u({ref:t},l),{},{components:r})):n.createElement(y,u({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var c=2;c<i;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28795:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],s={id:"slow-query",sidebar_position:9.8},a="Diagnose Slow SQL Queries",c={unversionedId:"troubleshooting/slow-query",id:"troubleshooting/slow-query",title:"Diagnose Slow SQL Queries",description:"",source:"@site/docs/08-troubleshooting/slow-query.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/slow-query",permalink:"/docs/troubleshooting/slow-query",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/08-troubleshooting/slow-query.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656414906,formattedLastUpdatedAt:"6/28/2022",sidebarPosition:9.8,frontMatter:{id:"slow-query",sidebar_position:9.8},sidebar:"autoSidebar",previous:{title:"Failed to Connect to StoneDB",permalink:"/docs/troubleshooting/failed-to-connect"},next:{title:"Diagnose System Resource Bottlenecks",permalink:"/docs/troubleshooting/resource-bottleneck"}},l={},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"diagnose-slow-sql-queries"},"Diagnose Slow SQL Queries"))}d.isMDXComponent=!0}}]);