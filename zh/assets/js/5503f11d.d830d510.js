"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2219],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),N=r,k=s["".concat(o,".").concat(N)]||s[N]||u[N]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9258:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={id:"data-types",sidebar_position:6.2},o="Data Types",d={unversionedId:"SQL-reference/data-types",id:"SQL-reference/data-types",title:"Data Types",description:"The following table lists the data types supported by StoneDB.",source:"@site/docs/05-SQL-reference/data-types.md",sourceDirName:"05-SQL-reference",slug:"/SQL-reference/data-types",permalink:"/zh/docs/SQL-reference/data-types",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/data-types.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656335628,formattedLastUpdatedAt:"2022/6/27",sidebarPosition:6.2,frontMatter:{id:"data-types",sidebar_position:6.2},sidebar:"autoSidebar",previous:{title:"Character Sets",permalink:"/zh/docs/SQL-reference/character-sets"},next:{title:"Arithmetic Operators",permalink:"/zh/docs/SQL-reference/operators/arithmetic-operators"}},m={},u=[{value:"Integer data types",id:"integer-data-types",level:2},{value:"String data types",id:"string-data-types",level:2},{value:"Date and time data types",id:"date-and-time-data-types",level:2}],s={toc:u};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"The following table lists the data types supported by StoneDB."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Category")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Data type")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Floating point"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT, DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fixed point"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date and time"),(0,l.kt)("td",{parentName:"tr",align:null},"YEAR, TIME, DATE, DATETIME, TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"CHAR, VARCHAR, TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Binary string"),(0,l.kt)("td",{parentName:"tr",align:null},"BINARY, VARBINARY, TINYBLOB, BLOB, MEDIUMBLOB, LONGBLOB")))),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"When you create a StoneDB table, do not include keyword ",(0,l.kt)("strong",{parentName:"p"},"unsigned")," or ",(0,l.kt)("strong",{parentName:"p"},"zerofill"),"."))),(0,l.kt)("h2",{id:"integer-data-types"},"Integer data types"),(0,l.kt)("p",null,"The following table provides the value range of each integer data type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Data type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Bytes of storage")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Min. value")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Max. value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"-128"),(0,l.kt)("td",{parentName:"tr",align:null},"127")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"-32768"),(0,l.kt)("td",{parentName:"tr",align:null},"32767")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"-8388608"),(0,l.kt)("td",{parentName:"tr",align:null},"8388607")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"-2147483647"),(0,l.kt)("td",{parentName:"tr",align:null},"2147483647")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"-9223372036854775808"),(0,l.kt)("td",{parentName:"tr",align:null},"9223372036854775807")))),(0,l.kt)("p",null,"On StoneDB, the precision for DECIMAL numbers cannot be higher than 18. For example, if you specify ",(0,l.kt)("strong",{parentName:"p"},"decimal(19)")," in your code, an error will be reported. ",(0,l.kt)("strong",{parentName:"p"},"DECIMAL(6, 2)")," indicates that up to 6 places are supported at the left of the decimal and up to 2 at the right, and thus the value range is ","[-9999.99, 9999.99]","."),(0,l.kt)("h2",{id:"string-data-types"},"String data types"),(0,l.kt)("p",null,"The storage required for a string varies according to the character set in use. The length range also differs. The following table describes the length range of each string data type when character set latin1 is in use."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Data type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Size")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR(M)"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(M)"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,65535]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,255]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,65535]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,16777215]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LONGTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"[0,4294967295]")))),(0,l.kt)("h2",{id:"date-and-time-data-types"},"Date and time data types"),(0,l.kt)("p",null,"The following table describes the value range of each date and time data type."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Data type")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Format")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Min. value")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Max. value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"YEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY"),(0,l.kt)("td",{parentName:"tr",align:null},"1901"),(0,l.kt)("td",{parentName:"tr",align:null},"2155")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"-838:59:59"),(0,l.kt)("td",{parentName:"tr",align:null},"838:59:59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD"),(0,l.kt)("td",{parentName:"tr",align:null},"0001-01-01"),(0,l.kt)("td",{parentName:"tr",align:null},"9999-12-31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"0001-01-01 00:00:00"),(0,l.kt)("td",{parentName:"tr",align:null},"9999-12-31 23:59:59")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"YYYY-MM-DD HH:MM:SS"),(0,l.kt)("td",{parentName:"tr",align:null},"1970-01-01 08:00:01"),(0,l.kt)("td",{parentName:"tr",align:null},"2038-01-19 11:14:07")))))}N.isMDXComponent=!0}}]);