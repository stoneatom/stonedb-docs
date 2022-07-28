"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3613],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return N}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),p=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},o=function(t){var e=p(t.components);return r.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=p(n),N=a,s=d["".concat(m,".").concat(N)]||d[N]||k[N]||l;return n?r.createElement(s,u(u({ref:e},o),{},{components:n})):r.createElement(s,u({ref:e},o))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var p=2;p<l;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95393:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),u=["components"],i={id:"mathematical-functions",sidebar_position:6.43},m="\u6570\u5b66\u51fd\u6570",p={unversionedId:"SQL-reference/functions/mathematical-functions",id:"SQL-reference/functions/mathematical-functions",title:"\u6570\u5b66\u51fd\u6570",description:"| Function | Description | Example |",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/mathematical-functions.md",sourceDirName:"05-SQL-reference/04-functions",slug:"/SQL-reference/functions/mathematical-functions",permalink:"/zh/docs/SQL-reference/functions/mathematical-functions",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/05-SQL-reference/04-functions/mathematical-functions.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1658995803,formattedLastUpdatedAt:"2022/7/28",sidebarPosition:6.43,frontMatter:{id:"mathematical-functions",sidebar_position:6.43},sidebar:"autoSidebar",previous:{title:"\u5b57\u7b26\u4e32\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/string-functions"},next:{title:"\u9ad8\u7ea7\u51fd\u6570",permalink:"/zh/docs/SQL-reference/functions/advanced-functions"}},o={},k=[],d={toc:k};function N(t){var e=t.components,n=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u5b66\u51fd\u6570"},"\u6570\u5b66\u51fd\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Function")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ABS(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the absolute value."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ABS(-1);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ACOS(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arc cosine of numeral value ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ACOS(0.5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1.0471975511965979")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ASIN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arc sine of numeral value ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ASIN(0.5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->0.5235987755982989")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ATAN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arc tangent of numeral value ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ATAN(2.5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1.1902899496825317")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ATAN2(n, m)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the arc tangent of two numeral values."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ATAN2(1,2);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->0.4636476090008061")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COS(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the cosine of radian ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT COS(2);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->-0.4161468365471424")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COT(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the cotangent of radian ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT COT(2);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->-0.45765755436028577")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TAN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the tangent of radian ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TAN(45); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1.6197751905438615")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the sine of radian ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SIN(RADIANS(30));",(0,l.kt)("br",null),(0,l.kt)("br",null),"->0.49999999999999994")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CEIL(x)",(0,l.kt)("br",null),"CEILING(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the smallest integer value that is not smaller than ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CEIL(4.19);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DEGREES(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Converts radian ",(0,l.kt)("em",{parentName:"td"},"x")," to a degree."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT DEGREES(3.1415926535898);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->180.0000000000004")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EXP(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural exponential of ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT EXP(2);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->7.38905609893065")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOOR(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the largest integer value that is not greater than ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT FLOOR(3.24);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GREATEST(expr1, expr2, expr3, ...)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the greatest value within the specified list."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT GREATEST(79,36,3,8,1);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->79",(0,l.kt)("br",null),(0,l.kt)("br",null),"SELECT GREATEST('Hello','CHINA','STONEDB'); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->STONEDB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LEAST(expr1, expr2, expr3, ...)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the smallest value within the specified list."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LEAST(79,36,3,8,1);",(0,l.kt)("br",null),"->1",(0,l.kt)("br",null),(0,l.kt)("br",null),"SELECT LEAST('Hello','CHINA','STONEDB'); ",(0,l.kt)("br",null),"->CHINA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the natural logarithm of ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LN(3); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1.0986122886681098")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG(x,y)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base-x logarithm of",(0,l.kt)("em",{parentName:"td"}," y"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LOG(3,81);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOG2(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the base-2 logarithm of",(0,l.kt)("em",{parentName:"td"}," x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LOG2(64); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PI()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value of pi."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT PI();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->3.141593")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POW(x,y)\uff0c",(0,l.kt)("br",null),"POWER(x,y)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("em",{parentName:"td"},"x")," raised to the specified power of ",(0,l.kt)("em",{parentName:"td"},"y"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT POW(2,4);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RAND()"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a random number between 0 and 1."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT RAND();",(0,l.kt)("br",null),(0,l.kt)("br",null),"->0.12216221831940322")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ROUND(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the value of ",(0,l.kt)("em",{parentName:"td"},"x")," rounded to the nearest integer."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT ROUND(-5.26);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->-5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGN(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the sign of ",(0,l.kt)("em",{parentName:"td"},"x"),". ",(0,l.kt)("br",null),"- If ",(0,l.kt)("em",{parentName:"td"},"x")," is a negative value, ",(0,l.kt)("strong",{parentName:"td"},"-1")," is returned. ",(0,l.kt)("br",null),"- If",(0,l.kt)("em",{parentName:"td"}," x")," is 0, ",(0,l.kt)("strong",{parentName:"td"},"0")," is returned. ",(0,l.kt)("br",null),"- If ",(0,l.kt)("em",{parentName:"td"},"x")," is a positive value, ",(0,l.kt)("strong",{parentName:"td"},"1")," is returned.",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SIGN(-10);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->(-1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQRT(x)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the square root of ",(0,l.kt)("em",{parentName:"td"},"x"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SQRT(81);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRUNCATE(x,y)"),(0,l.kt)("td",{parentName:"tr",align:null},"Truncates ",(0,l.kt)("em",{parentName:"td"},"x")," to retain ",(0,l.kt)("em",{parentName:"td"},"y")," decimal places."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TRUNCATE(2.2849106,3);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->2.284")))))}N.isMDXComponent=!0}}]);