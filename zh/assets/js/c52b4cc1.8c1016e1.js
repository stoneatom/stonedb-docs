"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4892],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"logical-operators",sidebar_position:6.34},c="Logical Operators",s={unversionedId:"SQL-reference/operators/logical-operators",id:"SQL-reference/operators/logical-operators",title:"Logical Operators",description:"This topic describes the logical operators supported by StoneDB.",source:"@site/docs/05-SQL-reference/03-operators/logical-operators.md",sourceDirName:"05-SQL-reference/03-operators",slug:"/SQL-reference/operators/logical-operators",permalink:"/zh/docs/SQL-reference/operators/logical-operators",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/03-operators/logical-operators.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1656407700,formattedLastUpdatedAt:"2022/6/28",sidebarPosition:6.34,frontMatter:{id:"logical-operators",sidebar_position:6.34},sidebar:"autoSidebar",previous:{title:"Comparison Operators",permalink:"/zh/docs/SQL-reference/operators/comparison-operators"},next:{title:"Assignment Operators",permalink:"/zh/docs/SQL-reference/operators/assignment-operators"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logical-operators"},"Logical Operators"),(0,a.kt)("p",null,"This topic describes the logical operators supported by StoneDB."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Operator")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NOT"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical NOT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AND"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical AND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OR"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical OR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"XOR"),(0,a.kt)("td",{parentName:"tr",align:null},"Logical XOR")))),(0,a.kt)("p",null,"The following code provides an example of using each operator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"> select not 1;\n+-------+\n| not 1 |\n+-------+\n|     0 |\n+-------+\n1 row in set (0.00 sec)\n\n> select !0;\n+----+\n| !0 |\n+----+\n|  1 |\n+----+\n1 row in set (0.00 sec)\n\n> select 2 and 0;\n+---------+\n| 2 and 0 |\n+---------+\n|       0 |\n+---------+\n1 row in set (0.00 sec)\n\n> select 2 and 1;   \n+---------+\n| 2 and 1 |\n+---------+\n|       1 |\n+---------+\n1 row in set (0.00 sec)\n\n> select 2 or 0;\n+--------+\n| 2 or 0 |\n+--------+\n|      1 |\n+--------+\n1 row in set (0.00 sec)\n\n> select 2 or 1;\n+--------+\n| 2 or 1 |\n+--------+\n|      1 |\n+--------+\n1 row in set (0.00 sec)\n\n> select 1 xor 1;\n+---------+\n| 1 xor 1 |\n+---------+\n|       0 |\n+---------+\n1 row in set (0.00 sec)\n\n> select 0 xor 0;\n+---------+\n| 0 xor 0 |\n+---------+\n|       0 |\n+---------+\n1 row in set (0.00 sec)\n\n> select 1 xor 0;\n+---------+\n| 1 xor 0 |\n+---------+\n|       1 |\n+---------+\n1 row in set (0.00 sec)\n\n> select null or 1;\n+-----------+\n| null or 1 |\n+-----------+\n|         1 |\n+-----------+\n1 row in set (0.00 sec)\n")))}f.isMDXComponent=!0}}]);