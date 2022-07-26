"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6952],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"stonedb-faq",sidebar_position:10.2},c="StoneDB FAQ",l={unversionedId:"FAQ/stonedb-faq",id:"FAQ/stonedb-faq",title:"StoneDB FAQ",description:"Is StoneDB compatible with MySQL?",source:"@site/../Docs/09-FAQ/stonedb-faq.md",sourceDirName:"09-FAQ",slug:"/FAQ/stonedb-faq",permalink:"/docs/FAQ/stonedb-faq",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/09-FAQ/stonedb-faq.md",tags:[],version:"current",lastUpdatedBy:"Shlpeng",lastUpdatedAt:1658843760,formattedLastUpdatedAt:"7/26/2022",sidebarPosition:10.2,frontMatter:{id:"stonedb-faq",sidebar_position:10.2},sidebar:"autoSidebar",previous:{title:"Installation FAQ",permalink:"/docs/FAQ/install-faq"},next:{title:"Troubleshoot FAQ",permalink:"/docs/FAQ/troubleshoot-faq"}},u={},d=[{value:"Is StoneDB compatible with MySQL?",id:"is-stonedb-compatible-with-mysql",level:2},{value:"Does StoneDB have its own optimizer, other than the MySQL optimizer?",id:"does-stonedb-have-its-own-optimizer-other-than-the-mysql-optimizer",level:2},{value:"Why does StoneDB not support unique constraints?",id:"why-does-stonedb-not-support-unique-constraints",level:2},{value:"Do I need to create indexes on StoneDB?",id:"do-i-need-to-create-indexes-on-stonedb",level:2},{value:"Does StoneDB support transactions?",id:"does-stonedb-support-transactions",level:2},{value:"Can I join a StoneDB table with a table from another storage engine?",id:"can-i-join-a-stonedb-table-with-a-table-from-another-storage-engine",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stonedb-faq"},"StoneDB FAQ"),(0,a.kt)("h2",{id:"is-stonedb-compatible-with-mysql"},"Is StoneDB compatible with MySQL?"),(0,a.kt)("p",null,"Yes. StoneDB is compatible with the MySQL 5.6 and 5.7 protocols, and the ecosystem, common features, and common syntaxes of MySQL.  However, due to characteristics of column-based storage, StoneDB is incompatible with certain MySQL operations and features."),(0,a.kt)("h2",{id:"does-stonedb-have-its-own-optimizer-other-than-the-mysql-optimizer"},"Does StoneDB have its own optimizer, other than the MySQL optimizer?"),(0,a.kt)("p",null,"Yes. StoneDB provides its own optimizer, though it still uses the MySQL optimizer to implement query parsing and rewriting."),(0,a.kt)("h2",{id:"why-does-stonedb-not-support-unique-constraints"},"Why does StoneDB not support unique constraints?"),(0,a.kt)("p",null,"Column-based storage provides the data compression feature. The compression efficiency is determined by the compression algorithm, data types of columns, and degree of repeatability. If you specify a unique constraint for a column, every data in the column is unique, and thus the compression ratio is low. Suppose 6,000 records of data are inserted into a column that is specified with a unique constraint respectively on InnoDB and StoneDB. After compression, the data volume on InnoDB is more than 16 GB and that on StoneDB is around 5 GB. The compression efficiency of StoneDB is only 3 times of that of InnoDB. Normally, this number is 10 or even higher."),(0,a.kt)("h2",{id:"do-i-need-to-create-indexes-on-stonedb"},"Do I need to create indexes on StoneDB?"),(0,a.kt)("p",null,"No, you do not need to create indexes. StoneDB uses the knowledge grid technique to locate and decompress only relevant data packs based on metadata, greatly improving query performance. You can still use indexes, but the performance is low if the result sets of queries are large."),(0,a.kt)("h2",{id:"does-stonedb-support-transactions"},"Does StoneDB support transactions?"),(0,a.kt)("p",null,"No. Transactions can be classified into secure transactions and non-secure transactions. Transactions that strictly meet with the atomicity, consistency, isolation, durability (ACID) attributes are identified as non-secure transactions because StoneDB does not provide redo or undo log."),(0,a.kt)("h2",{id:"can-i-join-a-stonedb-table-with-a-table-from-another-storage-engine"},"Can I join a StoneDB table with a table from another storage engine?"),(0,a.kt)("p",null,"By default, StoneDB does not allow JOIN queries of a StoneDB table with a table from another storage engine. You can set ",(0,a.kt)("strong",{parentName:"p"},"stonedb_ini_allowmysqlquerypath "),"to ",(0,a.kt)("strong",{parentName:"p"},"1")," to enable this feature."))}f.isMDXComponent=!0}}]);