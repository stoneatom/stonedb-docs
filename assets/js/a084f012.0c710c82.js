"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9271],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),m=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},o=function(t){var e=m(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),d=m(n),k=a,N=d["".concat(u,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(N,s(s({ref:e},o),{},{components:n})):r.createElement(N,s({ref:e},o))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var m=2;m<l;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67222:function(t,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],i={id:"string-functions",sidebar_position:6.42},u="String Functions",m={unversionedId:"SQL-reference/functions/string-functions",id:"SQL-reference/functions/string-functions",title:"String Functions",description:"This topic describes the string functions supported by StoneDB.",source:"@site/../Docs/05-SQL-reference/04-functions/string-functions.md",sourceDirName:"05-SQL-reference/04-functions",slug:"/SQL-reference/functions/string-functions",permalink:"/docs/SQL-reference/functions/string-functions",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/05-SQL-reference/04-functions/string-functions.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1659927206,formattedLastUpdatedAt:"8/8/2022",sidebarPosition:6.42,frontMatter:{id:"string-functions",sidebar_position:6.42},sidebar:"autoSidebar",previous:{title:"Date and Time Functions",permalink:"/docs/SQL-reference/functions/date-and-time-functions"},next:{title:"Mathematical Functions",permalink:"/docs/SQL-reference/functions/mathematical-functions"}},o={},p=[],d={toc:p};function k(t){var e=t.components,n=(0,a.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"string-functions"},"String Functions"),(0,l.kt)("p",null,"This topic describes the string functions supported by StoneDB."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Function")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Description")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Example")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ASCII(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the numeric value of the leftmost character of string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"select ASCII('CHINA');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->67")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR_LENGTH(s)",(0,l.kt)("br",null),"CHARACTER_LENGTH(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the number of characters in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CHAR_LENGTH('CHINA');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONCAT(s1,s2...sn)",(0,l.kt)("br",null),"CONCAT_WS(x, s1,s2...sn)"),(0,l.kt)("td",{parentName:"tr",align:null},"Concatenates strings ",(0,l.kt)("em",{parentName:"td"},"s1"),", ",(0,l.kt)("em",{parentName:"td"},"s2"),", \u2026 ",(0,l.kt)("em",{parentName:"td"},"Sn"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT CONCAT('Welcome to ','CHINA');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->Welcome to CHINA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FIELD(s,s1,s2...)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the index of the first string ",(0,l.kt)("em",{parentName:"td"},"s")," in the list of subsequent strings (",(0,l.kt)("em",{parentName:"td"},"s1"),", ",(0,l.kt)("em",{parentName:"td"},"s2"),", \u2026)."),(0,l.kt)("td",{parentName:"tr",align:null},'SELECT FIELD("c","a","b","c","d","e");',(0,l.kt)("br",null),(0,l.kt)("br",null),"->3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FIND_IN_SET(s1,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the index of the first string ",(0,l.kt)("em",{parentName:"td"},"s1")," within the second string ",(0,l.kt)("em",{parentName:"td"},"s2"),"."),(0,l.kt)("td",{parentName:"tr",align:null},'SELECT FIND_IN_SET("c","a,b,c,d,e");',(0,l.kt)("br",null),(0,l.kt)("br",null),"->3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FORMAT(x,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a number formatted to ",(0,l.kt)("em",{parentName:"td"},"n")," decimal places. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"x")," specifies the number to format. The return value is in the #,###.## format."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT FORMAT(9105885500.534,2); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->9,105,885,500.53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INSERT(s1,x,len,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Inserts substring ",(0,l.kt)("em",{parentName:"td"},"s2")," at a given position up to the specified number of characters in string ",(0,l.kt)("em",{parentName:"td"},"s1"),". ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"x")," specifies position to insert. ",(0,l.kt)("em",{parentName:"td"},"len")," specifies the number of characters."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT INSERT('Welcome to CHINA',1,6,'I love');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->I lovee to CHINA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LOCATE(s1,s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the position of the first occurrence of substring s1 in string s."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LOCATE('db','stonedb'); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LCASE(s)",(0,l.kt)("br",null),"LOWER(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns every character in string ",(0,l.kt)("em",{parentName:"td"},"s")," in lowercase."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LCASE('STONEDB');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->stonedb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LEFT(s,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the leftmost n characters in string",(0,l.kt)("em",{parentName:"td"}," s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LEFT('stonedb',5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->stone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LPAD(s1,len,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Left-pads string ",(0,l.kt)("em",{parentName:"td"},"s2")," with string ",(0,l.kt)("em",{parentName:"td"},"s1")," to the specified length ",(0,l.kt)("em",{parentName:"td"},"len"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LPAD('one',5,'st');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->stone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LTRIM(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove leading spaces in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT LTRIM(' STONEDB');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->STONEDB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MID(s,n,len)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a substring of string s starting from a given position. ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"n")," specifies the position. ",(0,l.kt)("em",{parentName:"td"},"len")," specifies the length of the substring. This function is the Synonym for SUBSTRING(s,n,len)."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT MID('stonedb',2,3);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->ton")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POSITION(s1 IN s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the position of the first occurrence of substring ",(0,l.kt)("em",{parentName:"td"},"s1")," in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT POSITION('db'in'stonedb');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPEAT(s,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Repeats string ",(0,l.kt)("em",{parentName:"td"},"s")," for ",(0,l.kt)("em",{parentName:"td"},"n")," times."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT REPEAT('hello',3);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->hellohellohello")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REPLACE(s,s1,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Replaces substring ",(0,l.kt)("em",{parentName:"td"},"s1")," in string ",(0,l.kt)("em",{parentName:"td"},"s")," with substring ",(0,l.kt)("em",{parentName:"td"},"s2"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT REPLACE('stonedb','db','x');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->stonex")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"REVERSE(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Reverses the characters in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT REVERSE('stonedb');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->bdenots")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RIGHT(s,n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("em",{parentName:"td"},"n")," rightmost characters in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT RIGHT('stonedb',5);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->onedb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RPAD(s1,len,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Right-pads string ",(0,l.kt)("em",{parentName:"td"},"s2")," to string ",(0,l.kt)("em",{parentName:"td"},"s1")," to the specified length ",(0,l.kt)("em",{parentName:"td"},"len"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT RPAD('stone',7,'db');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->stonedb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RTRIM(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove trailing spaces in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT RTRIM('STONEDB ');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->STONEDB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SPACE(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("em",{parentName:"td"},"n")," spaces."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SPACE(10);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRCMP(s1,s2)"),(0,l.kt)("td",{parentName:"tr",align:null},"Compares the lengths of strings ",(0,l.kt)("em",{parentName:"td"},"s1")," and",(0,l.kt)("em",{parentName:"td"}," s2"),". ",(0,l.kt)("br",null),"- If ",(0,l.kt)("em",{parentName:"td"},"s1")," = ",(0,l.kt)("em",{parentName:"td"},"s2"),", ",(0,l.kt)("strong",{parentName:"td"},"0")," is returned. ",(0,l.kt)("br",null),"- If ",(0,l.kt)("em",{parentName:"td"},"s1")," > ",(0,l.kt)("em",{parentName:"td"},"s2"),", ",(0,l.kt)("strong",{parentName:"td"},"1")," is returned. ",(0,l.kt)("br",null),"- If ",(0,l.kt)("em",{parentName:"td"},"s1")," < ",(0,l.kt)("em",{parentName:"td"},"s2"),", ",(0,l.kt)("strong",{parentName:"td"},"-1")," is returned.",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT STRCMP('stonedb','stone'); ",(0,l.kt)("br",null),(0,l.kt)("br",null),"->1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSTR(s, start, length)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a substring of the specified length within string ",(0,l.kt)("em",{parentName:"td"},"s"),". ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"start")," specifies the position from which the substring starts."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SUBSTR('STONEDB',2,3);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->TON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SUBSTRING_INDEX(s, delimiter, number)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns a substring from string ",(0,l.kt)("em",{parentName:"td"},"s")," before the specified number of occurrences of the delimiter."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT SUBSTRING_INDEX('stonedb','n',1);",(0,l.kt)("br",null),(0,l.kt)("br",null),"->sto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRIM(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes leading and trailing spaces in string ",(0,l.kt)("em",{parentName:"td"},"s"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT TRIM(' STONEDB ');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->STONEDB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UCASE(s)",(0,l.kt)("br",null),"UPPER(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns every character in string ",(0,l.kt)("em",{parentName:"td"},"s")," in uppercase."),(0,l.kt)("td",{parentName:"tr",align:null},"SELECT UCASE('stonedb');",(0,l.kt)("br",null),(0,l.kt)("br",null),"->STONEDB")))))}k.isMDXComponent=!0}}]);