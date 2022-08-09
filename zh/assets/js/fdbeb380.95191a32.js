"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[559],{3905:function(e,t,a){a.d(t,{Zo:function(){return i},kt:function(){return b}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(d,".").concat(b)]||p[b]||l[b]||o;return a?n.createElement(m,c(c({ref:t},i),{},{components:a})):n.createElement(m,c({ref:t},i))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},18586:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),c=["components"],s={id:"create-and-manage-database",sidebar_position:5.51},d="\u521b\u5efa\u548c\u7ba1\u7406\u5e93",u={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-database",id:"developer-guide/create-and-manage-database-objects/create-and-manage-database",title:"\u521b\u5efa\u548c\u7ba1\u7406\u5e93",description:"\u521b\u5efa\u6570\u636e\u5e93\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atest_db\u7684\u6570\u636e\u5e93\uff0c\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u5b57\u7b26\u96c6\u662futf8mb4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-database.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-database",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-database.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660045580,formattedLastUpdatedAt:"2022/8/9",sidebarPosition:5.51,frontMatter:{id:"create-and-manage-database",sidebar_position:5.51},sidebar:"autoSidebar",previous:{title:"\u67e5\u8be2\u8bed\u53e5",permalink:"/zh/docs/developer-guide/statements-for-queries"},next:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u8868",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-table"}},i={},l=[],p={toc:l};function b(e){var t=e.components,a=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u521b\u5efa\u548c\u7ba1\u7406\u5e93"},"\u521b\u5efa\u548c\u7ba1\u7406\u5e93"),(0,o.kt)("p",null,"\u521b\u5efa\u6570\u636e\u5e93\uff0c\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atest_db\u7684\u6570\u636e\u5e93\uff0c\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u5b57\u7b26\u96c6\u662futf8mb4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"create database test_db DEFAULT CHARACTER SET utf8mb4;\n")),(0,o.kt)("p",null,"\u67e5\u770b\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"show databases;\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u6570\u636e\u5e93\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"use test_db;\n")),(0,o.kt)("p",null,"\u5220\u9664\u6570\u636e\u5e93\uff0c\u4f8b\u5982\uff1a\u8981\u5220\u9664\u6570\u636e\u5e93test_db\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop database test_db;\n")))}b.isMDXComponent=!0}}]);