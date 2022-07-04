"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6909],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44643:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"limits",sidebar_position:1.3},l="Limits",u={unversionedId:"about-stonedb/limits",id:"about-stonedb/limits",title:"Limits",description:"StoneDB is built on MySQL by integrating a storage engine into MySQL. Therefore, StoneDB is highly compatible with the MySQL 5.6 and 5.7 protocols, and the ecosystem, common features, and common syntaxes of MySQL. However, due to characteristics of column-based storage, StoneDB is incompatible with certain MySQL operations and features.",source:"@site/docs/00-about-stonedb/limits.md",sourceDirName:"00-about-stonedb",slug:"/about-stonedb/limits",permalink:"/docs/about-stonedb/limits",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/00-about-stonedb/limits.md",tags:[],version:"current",lastUpdatedBy:"Ma Jun",lastUpdatedAt:1656917167,formattedLastUpdatedAt:"7/4/2022",sidebarPosition:1.3,frontMatter:{id:"limits",sidebar_position:1.3},sidebar:"autoSidebar",previous:{title:"Architecture",permalink:"/docs/about-stonedb/architecture"},next:{title:"Terms",permalink:"/docs/about-stonedb/terms"}},p={},d=[{value:"Unsupported DDL operations",id:"unsupported-ddl-operations",level:2},{value:"Unsupported DML operations",id:"unsupported-dml-operations",level:2},{value:"Unsupported objects",id:"unsupported-objects",level:2},{value:"Unsupported data types",id:"unsupported-data-types",level:2},{value:"Unsupported binary log formats",id:"unsupported-binary-log-formats",level:2},{value:"Association queries across storage engines not supported",id:"association-queries-across-storage-engines-not-supported",level:2},{value:"Transactions not supported",id:"transactions-not-supported",level:2},{value:"Partitions not supported",id:"partitions-not-supported",level:2},{value:"Column locking and table locking not supported",id:"column-locking-and-table-locking-not-supported",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"limits"},"Limits"),(0,r.kt)("p",null,"StoneDB is built on MySQL by integrating a storage engine into MySQL. Therefore, StoneDB is highly compatible with the MySQL 5.6 and 5.7 protocols, and the ecosystem, common features, and common syntaxes of MySQL. However, due to characteristics of column-based storage, StoneDB is incompatible with certain MySQL operations and features."),(0,r.kt)("h2",{id:"unsupported-ddl-operations"},"Unsupported DDL operations"),(0,r.kt)("p",null,"StoneDB does not support the following DDL operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify the data type of a field."),(0,r.kt)("li",{parentName:"ul"},"Modify the length of a field."),(0,r.kt)("li",{parentName:"ul"},"Change the character set of a table or a field."),(0,r.kt)("li",{parentName:"ul"},"Convert the character set for a table."),(0,r.kt)("li",{parentName:"ul"},"Optimize a table."),(0,r.kt)("li",{parentName:"ul"},"Analyze a table."),(0,r.kt)("li",{parentName:"ul"},"Lock a table."),(0,r.kt)("li",{parentName:"ul"},"Repair a table."),(0,r.kt)("li",{parentName:"ul"},"Execute a CREATE TABLE\u2026 AS SELECT statement."),(0,r.kt)("li",{parentName:"ul"},"Reorganize a table."),(0,r.kt)("li",{parentName:"ul"},"Rename a field."),(0,r.kt)("li",{parentName:"ul"},"Configure the default value for a field."),(0,r.kt)("li",{parentName:"ul"},"Specify the default value of a field to null."),(0,r.kt)("li",{parentName:"ul"},"Specify the default value of a field to non-null."),(0,r.kt)("li",{parentName:"ul"},"Add a unique constraint."),(0,r.kt)("li",{parentName:"ul"},"Delete a unique constraint."),(0,r.kt)("li",{parentName:"ul"},"Create an index."),(0,r.kt)("li",{parentName:"ul"},"Delete an index."),(0,r.kt)("li",{parentName:"ul"},"Modify a table comment.")),(0,r.kt)("p",null,"StoneDB is a column-oriented database. Data in StoneDB is highly compressed. For this reason, table attributes and column attributes are difficult to modify. The character sets, data types, constraints, and indexes must be properly defined when tables are being created."),(0,r.kt)("h2",{id:"unsupported-dml-operations"},"Unsupported DML operations"),(0,r.kt)("p",null,"StoneDB does not support the following DML operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Execute a DELETE statement."),(0,r.kt)("li",{parentName:"ul"},"Use subqueries in an UPDATE statement."),(0,r.kt)("li",{parentName:"ul"},"Execute an UPDATE\u2026 JOIN statement to update multiple tables."),(0,r.kt)("li",{parentName:"ul"},"Execute a REPLACE\u2026 INTO statement.")),(0,r.kt)("p",null,"StoneDB is not suitable for applications that are frequently updated. It supports only single-table update and insert operations. This is because a column-oriented database needs to find each corresponding column and update the value in the row when processing an update operation. However, a row-oriented database stores data by row. When processing an update operation, the row-oriented database only needs to find the corresponding page or block and update the data directly in the row."),(0,r.kt)("h2",{id:"unsupported-objects"},"Unsupported objects"),(0,r.kt)("p",null,"StoneDB does not support the following objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global indexes"),(0,r.kt)("li",{parentName:"ul"},"Unique constraints"),(0,r.kt)("li",{parentName:"ul"},"Triggers"),(0,r.kt)("li",{parentName:"ul"},"Temporary tables"),(0,r.kt)("li",{parentName:"ul"},"Stored procedures containing dynamic SQL statements"),(0,r.kt)("li",{parentName:"ul"},"User-defined functions containing nested SQL statements")),(0,r.kt)("p",null,"If you want to use user-defined functions that contain nested SQL statements, set the ",(0,r.kt)("strong",{parentName:"p"},"stonedb_ini_allowmysqlquerypath")," parameter to ",(0,r.kt)("strong",{parentName:"p"},"1")," in the ",(0,r.kt)("strong",{parentName:"p"},"stonedb.cnf")," configuration file."),(0,r.kt)("h2",{id:"unsupported-data-types"},"Unsupported data types"),(0,r.kt)("p",null,"StoneDB does not support the following data types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bit"),(0,r.kt)("li",{parentName:"ul"},"enum"),(0,r.kt)("li",{parentName:"ul"},"set"),(0,r.kt)("li",{parentName:"ul"},"decimal whose precision is higher than 18, for example, decimal(19,x)"),(0,r.kt)("li",{parentName:"ul"},"Data types that contain keyword ",(0,r.kt)("strong",{parentName:"li"},"unsigned")," or ",(0,r.kt)("strong",{parentName:"li"},"zerofill"))),(0,r.kt)("h2",{id:"unsupported-binary-log-formats"},"Unsupported binary log formats"),(0,r.kt)("p",null,"StoneDB does not support the following binary log formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"row"),(0,r.kt)("li",{parentName:"ul"},"mixed")),(0,r.kt)("p",null,"Column-oriented databases supports only statement-based binary logs. Row-based binary logs and mixed binary logs are not supported."),(0,r.kt)("h2",{id:"association-queries-across-storage-engines-not-supported"},"Association queries across storage engines not supported"),(0,r.kt)("p",null,"By default, StoneDB does not support association queries across storage engines. If an association query involves tables in both InnoDB and the StoneDB column-based storage engine, an error will be reported. You can set the ",(0,r.kt)("strong",{parentName:"p"},"stonedb_ini_allowmysqlquerypath")," parameter to ",(0,r.kt)("strong",{parentName:"p"},"1 "),"in the ",(0,r.kt)("strong",{parentName:"p"},"stonedb.cnf")," configuration file to remove this limit."),(0,r.kt)("h2",{id:"transactions-not-supported"},"Transactions not supported"),(0,r.kt)("p",null,"Transactions must strictly comply with the ACID attributes. However, StoneDB does not support redo and undo logs and thus does not support transactions."),(0,r.kt)("h2",{id:"partitions-not-supported"},"Partitions not supported"),(0,r.kt)("p",null,"Column-oriented databases do not support partitioning."),(0,r.kt)("h2",{id:"column-locking-and-table-locking-not-supported"},"Column locking and table locking not supported"),(0,r.kt)("p",null,"Column-oriented databases do not support column locking or table locking."))}m.isMDXComponent=!0}}]);