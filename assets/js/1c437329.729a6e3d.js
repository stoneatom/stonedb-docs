"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4589],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95884:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"bitwise-operators",sidebar_position:6.32},p="Bitwise Operators",l={unversionedId:"SQL-reference/operators/bitwise-operators",id:"SQL-reference/operators/bitwise-operators",title:"Bitwise Operators",description:"This topic describes the bitwise operators supported by StoneDB.",source:"@site/../Docs/05-SQL-reference/03-operators/bitwise-operators.md",sourceDirName:"05-SQL-reference/03-operators",slug:"/SQL-reference/operators/bitwise-operators",permalink:"/docs/SQL-reference/operators/bitwise-operators",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/05-SQL-reference/03-operators/bitwise-operators.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1659927206,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:6.32,frontMatter:{id:"bitwise-operators",sidebar_position:6.32},sidebar:"autoSidebar",previous:{title:"Arithmetic Operators",permalink:"/docs/SQL-reference/operators/arithmetic-operators"},next:{title:"Comparison Operators",permalink:"/docs/SQL-reference/operators/comparison-operators"}},c={},u=[],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitwise-operators"},"Bitwise Operators"),(0,a.kt)("p",null,"This topic describes the bitwise operators supported by StoneDB."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Operator")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"&")),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise AND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"|"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"^")),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise XOR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"!")),(0,a.kt)("td",{parentName:"tr",align:null},"Bitwise inversion")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<<")),(0,a.kt)("td",{parentName:"tr",align:null},"Left shift")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},">>")),(0,a.kt)("td",{parentName:"tr",align:null},"Right shift")))),(0,a.kt)("p",null,"Bitwise operators are used to operate on binary numbers. In a bitwise operation, the involved numbers are first converted to binary numbers to compute the result, and then the result is converted back to a decimal value."),(0,a.kt)("p",null,"The following code provides an example of using each operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"> select 3&5;\n+-----+\n| 3&5 |\n+-----+\n|   1 |\n+-----+\n1 row in set (0.00 sec)\n\n> select 3|5;\n+-----+\n| 3|5 |\n+-----+\n|   7 |\n+-----+\n1 row in set (0.00 sec)\n\n> select 3^5;\n+-----+\n| 3^5 |\n+-----+\n|   6 |\n+-----+\n1 row in set (0.00 sec)\n\n> select ~18446744073709551612;\n+-----------------------+\n| ~18446744073709551612 |\n+-----------------------+\n|                     3 |\n+-----------------------+\n1 row in set (0.00 sec)\n\n> select 3>>1;\n+------+\n| 3>>1 |\n+------+\n|    1 |\n+------+\n1 row in set (0.00 sec)\n\n> select 3<<1;\n+------+\n| 3<<1 |\n+------+\n|    6 |\n+------+\n1 row in set (0.00 sec)\n")))}m.isMDXComponent=!0}}]);