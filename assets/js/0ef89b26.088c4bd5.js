"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6577],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={id:"parameter-tuning",sidebar_position:7.43},s="Database parameter tuning",l={unversionedId:"performance-tuning/database-tuning/parameter-tuning",id:"performance-tuning/database-tuning/parameter-tuning",title:"Database parameter tuning",description:"stonedbinsertbuffer_size",source:"@site/../Docs/06-performance-tuning/04-database-tuning/parameter-tuning.md",sourceDirName:"06-performance-tuning/04-database-tuning",slug:"/performance-tuning/database-tuning/parameter-tuning",permalink:"/docs/performance-tuning/database-tuning/parameter-tuning",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/06-performance-tuning/04-database-tuning/parameter-tuning.md",tags:[],version:"current",lastUpdatedBy:"hustjieke",lastUpdatedAt:1658978578,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:7.43,frontMatter:{id:"parameter-tuning",sidebar_position:7.43},sidebar:"autoSidebar",previous:{title:"Optimize SQL Statements",permalink:"/docs/performance-tuning/database-tuning/sql-tuning"},next:{title:"Read/Write Splitting",permalink:"/docs/performance-tuning/architecture-tuning/read_write-splitting"}},d={},p=[{value:"stonedb_insert_buffer_size",id:"stonedb_insert_buffer_size",level:2},{value:"stonedb_ini_servermainheapsize",id:"stonedb_ini_servermainheapsize",level:2},{value:"stonedb_distinct_cache_size",id:"stonedb_distinct_cache_size",level:2},{value:"stonedb_bg_load_threads",id:"stonedb_bg_load_threads",level:2},{value:"stonedb_load_threads",id:"stonedb_load_threads",level:2},{value:"stonedb_query_threads",id:"stonedb_query_threads",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-parameter-tuning"},"Database parameter tuning"),(0,i.kt)("h2",{id:"stonedb_insert_buffer_size"},"stonedb_insert_buffer_size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the insert buffer size, expressed in MB."),(0,i.kt)("li",{parentName:"ul"},"Default value: 512"),(0,i.kt)("li",{parentName:"ul"},"Value range: 512 to 10000"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: If operations of inserting bulk data exist, we recommend that you set the parameter to 2048.")),(0,i.kt)("h2",{id:"stonedb_ini_servermainheapsize"},"stonedb_ini_servermainheapsize"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the size of heap memory on the server, expressed in MB."),(0,i.kt)("li",{parentName:"ul"},"Default value: 0, which indicates half the size of the physical memory."),(0,i.kt)("li",{parentName:"ul"},"Value range: 0 to 1000000"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: 0")),(0,i.kt)("h2",{id:"stonedb_distinct_cache_size"},"stonedb_distinct_cache_size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the amount of the Group Distinct Cache, expressed in MB."),(0,i.kt)("li",{parentName:"ul"},"Default value: 64"),(0,i.kt)("li",{parentName:"ul"},"Value range: 64 to 256"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: 128")),(0,i.kt)("h2",{id:"stonedb_bg_load_threads"},"stonedb_bg_load_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the number of worker threads that load data from the insert buffer to the background thread pool."),(0,i.kt)("li",{parentName:"ul"},"Default value: 0"),(0,i.kt)("li",{parentName:"ul"},"Value range: 0 to 100"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: We recommend that you set the parameter to half the number of CPU cores.")),(0,i.kt)("h2",{id:"stonedb_load_threads"},"stonedb_load_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the number of worker threads in the StoneDB Load thread pool."),(0,i.kt)("li",{parentName:"ul"},"Default value: 0"),(0,i.kt)("li",{parentName:"ul"},"Value range: 0 to 100"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: We recommend that you set the parameter to the number of the CPU cores.")),(0,i.kt)("h2",{id:"stonedb_query_threads"},"stonedb_query_threads"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Description: This parameter specifies the number of worker threads in the StoneDB query thread pool."),(0,i.kt)("li",{parentName:"ul"},"Default value: 0"),(0,i.kt)("li",{parentName:"ul"},"Value range: 0 to 100"),(0,i.kt)("li",{parentName:"ul"},"Recommended value: We recommend that you set the parameter to the number of the CPU cores.")))}m.isMDXComponent=!0}}]);