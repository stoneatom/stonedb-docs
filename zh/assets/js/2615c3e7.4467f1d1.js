"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3968],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={id:"parameter-tuning",sidebar_position:7.43},l="\u6570\u636e\u5e93\u53c2\u6570\u4f18\u5316",s={unversionedId:"performance-tuning/database-tuning/parameter-tuning",id:"performance-tuning/database-tuning/parameter-tuning",title:"\u6570\u636e\u5e93\u53c2\u6570\u4f18\u5316",description:"stonedbinsertbuffer_size",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/04-database-tuning/parameter-tuning.md",sourceDirName:"06-performance-tuning/04-database-tuning",slug:"/performance-tuning/database-tuning/parameter-tuning",permalink:"/zh/docs/performance-tuning/database-tuning/parameter-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/06-performance-tuning/04-database-tuning/parameter-tuning.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1658995803,formattedLastUpdatedAt:"2022/7/28",sidebarPosition:7.43,frontMatter:{id:"parameter-tuning",sidebar_position:7.43},sidebar:"autoSidebar",previous:{title:"SQL\u4f18\u5316",permalink:"/zh/docs/performance-tuning/database-tuning/sql-tuning"},next:{title:"\u8bfb\u5199\u5206\u79bb",permalink:"/zh/docs/performance-tuning/architecture-tuning/read_write-splitting"}},d={},c=[{value:"stonedb_insert_buffer_size",id:"stonedb_insert_buffer_size",level:2},{value:"stonedb_ini_servermainheapsize",id:"stonedb_ini_servermainheapsize",level:2},{value:"stonedb_distinct_cache_size",id:"stonedb_distinct_cache_size",level:2},{value:"stonedb_bg_load_threads",id:"stonedb_bg_load_threads",level:2},{value:"stonedb_load_threads",id:"stonedb_load_threads",level:2},{value:"stonedb_query_threads",id:"stonedb_query_threads",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6570\u636e\u5e93\u53c2\u6570\u4f18\u5316"},"\u6570\u636e\u5e93\u53c2\u6570\u4f18\u5316"),(0,i.kt)("h2",{id:"stonedb_insert_buffer_size"},"stonedb_insert_buffer_size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1ainsert buffer\u7684\u5927\u5c0f\uff0c\u5355\u4f4dM"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a512"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a512 ~ 10000"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a\u82e5\u6709\u5927\u6279\u91cf\u63d2\u5165\u6570\u636e\u4efb\u52a1\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a2048")),(0,i.kt)("h2",{id:"stonedb_ini_servermainheapsize"},"stonedb_ini_servermainheapsize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1aServer\u7684heap\u5927\u5c0f\uff0c\u5355\u4f4dMB"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a0\uff0c\u9ed8\u8ba4\u4e3a0\u8868\u793a\u7269\u7406\u5185\u5b58\u76841/2"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a0 ~ 1000000"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a\u7269\u7406\u5185\u5b58\u76841/2")),(0,i.kt)("h2",{id:"stonedb_distinct_cache_size"},"stonedb_distinct_cache_size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1a\u53bb\u91cd\u7f13\u51b2\u533a\u5927\u5c0f\uff0c\u5355\u4f4dMB"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a64"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a64 ~ 256"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a128")),(0,i.kt)("h2",{id:"stonedb_bg_load_threads"},"stonedb_bg_load_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1a\u5c06insert buffer\u4e2d\u7684\u6570\u636e\u52a0\u8f7d\u5230\u540e\u53f0\u7ebf\u7a0b\u6c60\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a0"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a0 ~ 100"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a\u7cfb\u7edfCPU\u6838\u6570\u76841/2")),(0,i.kt)("h2",{id:"stonedb_load_threads"},"stonedb_load_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1aStoneDB Load\u7ebf\u7a0b\u6c60\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a0"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a0 ~ 100"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a\u7cfb\u7edfCPU\u6838\u6570")),(0,i.kt)("h2",{id:"stonedb_query_threads"},"stonedb_query_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\uff1aStoneDB\u67e5\u8be2\u7ebf\u7a0b\u6c60\u7684\u5de5\u4f5c\u7ebf\u7a0b\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a0"),(0,i.kt)("li",{parentName:"ul"},"\u53d6\u503c\u8303\u56f4\uff1a0 ~ 100"),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u503c\uff1a\u7cfb\u7edfCPU\u6838\u6570")))}m.isMDXComponent=!0}}]);