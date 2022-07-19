"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9872],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"arithmetic-operators",sidebar_position:6.31},p="Arithmetic Operators",c={unversionedId:"SQL-reference/operators/arithmetic-operators",id:"SQL-reference/operators/arithmetic-operators",title:"Arithmetic Operators",description:"This topic describes the arithmetic operators supported by StoneDB.",source:"@site/../Docs/05-SQL-reference/03-operators/arithmetic-operators.md",sourceDirName:"05-SQL-reference/03-operators",slug:"/SQL-reference/operators/arithmetic-operators",permalink:"/zh/docs/SQL-reference/operators/arithmetic-operators",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/03-operators/arithmetic-operators.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1658236786,formattedLastUpdatedAt:"2022/7/19",sidebarPosition:6.31,frontMatter:{id:"arithmetic-operators",sidebar_position:6.31},sidebar:"autoSidebar",previous:{title:"Data Types",permalink:"/zh/docs/SQL-reference/data-types"},next:{title:"Bitwise Operators",permalink:"/zh/docs/SQL-reference/operators/bitwise-operators"}},l={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arithmetic-operators"},"Arithmetic Operators"),(0,o.kt)("p",null,"This topic describes the arithmetic operators supported by StoneDB."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Operator")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"+")),(0,o.kt)("td",{parentName:"tr",align:null},"Addition operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"-")),(0,o.kt)("td",{parentName:"tr",align:null},"Minus operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"*")),(0,o.kt)("td",{parentName:"tr",align:null},"Multiplication operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"/"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"div")),(0,o.kt)("td",{parentName:"tr",align:null},"Division operator")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"%"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"mod")),(0,o.kt)("td",{parentName:"tr",align:null},"Modulo operator")))),(0,o.kt)("p",null,"The following code provides an example of using each operator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"> select 10+2 from dual;\n+------+\n| 10+2 |\n+------+\n|   12 |\n+------+\n1 row in set (0.00 sec)\n\n> select 10-2 from dual;\n+------+\n| 10-2 |\n+------+\n|    8 |\n+------+\n1 row in set (0.00 sec)\n\n> select 10*2 from dual;\n+------+\n| 10*2 |\n+------+\n|   20 |\n+------+\n1 row in set (0.00 sec)\n\n> select 10/2 from dual;\n+--------+\n| 10/2   |\n+--------+\n| 5.0000 |\n+--------+\n1 row in set (0.00 sec)\n\n> select 10 div 2 from dual;\n+----------+\n| 10 div 2 |\n+----------+\n|        5 |\n+----------+\n1 row in set (0.00 sec)\n\n> select 10 mod 3 from dual;\n+----------+\n| 10 mod 3 |\n+----------+\n|        1 |\n+----------+\n1 row in set (0.00 sec)\n\n> select 10 % 3 from dual;\n+--------+\n| 10 % 3 |\n+--------+\n|      1 |\n+--------+\n1 row in set (0.00 sec)\n\n> select 10 mod 0 from dual;\n+----------+\n| 10 mod 0 |\n+----------+\n|     NULL |\n+----------+\n1 row in set (0.00 sec)\n\n> select 10 / 0 from dual;  \n+--------+\n| 10 / 0 |\n+--------+\n|   NULL |\n+--------+\n1 row in set (0.00 sec)\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the divisor is 0 in a division operation or a modulo operation, the operation is invalid and NULL is returned."))))}u.isMDXComponent=!0}}]);