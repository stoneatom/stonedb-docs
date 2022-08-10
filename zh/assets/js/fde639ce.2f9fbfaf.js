"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[71],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=o(n),g=r,k=c["".concat(s,".").concat(g)]||c[g]||p[g]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={id:"basic-operations",sidebar_position:3.4},s="\u57fa\u672c\u64cd\u4f5c",o={unversionedId:"getting-started/basic-operations",id:"getting-started/basic-operations",title:"\u57fa\u672c\u64cd\u4f5c",description:"SQL\u662f\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\uff08Structured Query Language\uff09\u7684\u7b80\u79f0\uff0c\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u4e5f\u662f\u4e00\u79cd\u6570\u636e\u5e93\u67e5\u8be2\u548c\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\uff0c\u7528\u4e8e\u5b58\u53d6\u3001\u67e5\u8be2\u3001\u66f4\u65b0\u548c\u7ba1\u7406\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/basic-operations.md",sourceDirName:"02-getting-started",slug:"/getting-started/basic-operations",permalink:"/zh/docs/getting-started/basic-operations",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/basic-operations.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:3.4,frontMatter:{id:"basic-operations",sidebar_position:3.4},sidebar:"autoSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh/docs/getting-started/quick-start"},next:{title:"\u5e38\u89c4\u53d8\u66f4",permalink:"/zh/docs/O&M-Guide/regular-change-operations"}},d={},p=[{value:"1. \u6570\u636e\u5e93\u76f8\u5173\u64cd\u4f5c",id:"1-\u6570\u636e\u5e93\u76f8\u5173\u64cd\u4f5c",level:2},{value:"1\uff09\u521b\u5efa\u6570\u636e\u5e93",id:"1\u521b\u5efa\u6570\u636e\u5e93",level:3},{value:"2\uff09\u67e5\u770b\u6570\u636e\u5e93",id:"2\u67e5\u770b\u6570\u636e\u5e93",level:3},{value:"3\uff09\u5e94\u7528\u6570\u636e\u5e93",id:"3\u5e94\u7528\u6570\u636e\u5e93",level:3},{value:"4\uff09\u5220\u9664\u6570\u636e\u5e93",id:"4\u5220\u9664\u6570\u636e\u5e93",level:3},{value:"2. \u8868\u76f8\u5173\u64cd\u4f5c",id:"2-\u8868\u76f8\u5173\u64cd\u4f5c",level:2},{value:"1\uff09\u521b\u5efa\u5217\u5f0f\u5b58\u50a8\u8868",id:"1\u521b\u5efa\u5217\u5f0f\u5b58\u50a8\u8868",level:3},{value:"2\uff09\u67e5\u770b\u8868",id:"2\u67e5\u770b\u8868",level:3},{value:"3\uff09\u5220\u9664\u8868",id:"3\u5220\u9664\u8868",level:3},{value:"3. \u6570\u636e\u76f8\u5173\u64cd\u4f5c",id:"3-\u6570\u636e\u76f8\u5173\u64cd\u4f5c",level:2},{value:"1\uff09\u63d2\u5165\u6570\u636e",id:"1\u63d2\u5165\u6570\u636e",level:3},{value:"2\uff09\u4fee\u6539\u8868\u6570\u636e",id:"2\u4fee\u6539\u8868\u6570\u636e",level:3},{value:"3\uff09\u5220\u9664\u8868\u6570\u636e",id:"3\u5220\u9664\u8868\u6570\u636e",level:3},{value:"\u6e05\u7a7a\u8868\u6570\u636e",id:"\u6e05\u7a7a\u8868\u6570\u636e",level:4},{value:"\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u6570\u636e",id:"\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u6570\u636e",level:4},{value:"4. \u67e5\u8be2\u8868",id:"4-\u67e5\u8be2\u8868",level:2},{value:"5. \u7528\u6237\u76f8\u5173\u64cd\u4f5c",id:"5-\u7528\u6237\u76f8\u5173\u64cd\u4f5c",level:2},{value:"1\uff09\u521b\u5efa\u7528\u6237",id:"1\u521b\u5efa\u7528\u6237",level:3},{value:"2\uff09\u5411\u7528\u6237\u6388\u6743",id:"2\u5411\u7528\u6237\u6388\u6743",level:3},{value:"3\uff09\u67e5\u8be2\u7528\u6237\u6743\u9650\uff1a",id:"3\u67e5\u8be2\u7528\u6237\u6743\u9650",level:3},{value:"4\uff09\u5220\u9664\u7528\u6237",id:"4\u5220\u9664\u7528\u6237",level:3}],c={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,l.kt)("p",null,"SQL\u662f\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\uff08Structured Query Language\uff09\u7684\u7b80\u79f0\uff0c\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u4e5f\u662f\u4e00\u79cd\u6570\u636e\u5e93\u67e5\u8be2\u548c\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\uff0c\u7528\u4e8e\u5b58\u53d6\u3001\u67e5\u8be2\u3001\u66f4\u65b0\u548c\u7ba1\u7406\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002\n\u7531\u4e8eStoneDB\u662f\u9ad8\u5ea6\u517c\u5bb9MySQL\u7684\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528MySQL\u652f\u6301\u7684\u5ba2\u6237\u7aef\u8fde\u63a5StoneDB\uff0c\u5e76\u4e14\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u6267\u884cMySQL\u652f\u6301\u7684SQL\u8bed\u6cd5\uff0c\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecdStoneDB\u57fa\u672c\u7684SQL\u64cd\u4f5c\u3002\nSQL\u8bed\u8a00\u6309\u7167\u4e0d\u540c\u7684\u529f\u80fd\u5212\u5206\u4e3a\u4ee5\u4e0b\u76844\u4e2a\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DDL"),"(Data Definition Language)\uff1a\u6570\u636e\u5b9a\u4e49\u8bed\u8a00\uff0c\u7528\u6765\u5b9a\u4e49\u6570\u636e\u5e93\u4e2d\u7684\u5bf9\u8c61\uff0c\u5982create\u3001alter\u3001drop\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DML"),"(Data Manipulation Language)\uff1a\u6570\u636e\u64cd\u4f5c\u8bed\u8a00\uff0c\u7528\u6765\u64cd\u4f5c\u8868\u6570\u636e\uff0c\u5982insert\u3001delete\u3001update\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DQL"),"(Data Query Language)\uff1a\u6570\u636e\u67e5\u8be2\u8bed\u8a00\uff0c\u7528\u6765\u67e5\u8be2\u5bf9\u8c61\uff0c\u5982select\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"DCL"),"(Data Control Language)\uff1a\u6570\u636e\u63a7\u5236\u8bed\u8a00\uff0c\u7528\u6765\u5b9a\u4e49\u8bbf\u95ee\u6743\u9650\u548c\u5b89\u5168\u7ea7\u522b\uff0c\u5982grant\u3001revoke\u3002")),(0,l.kt)("h2",{id:"1-\u6570\u636e\u5e93\u76f8\u5173\u64cd\u4f5c"},"1. \u6570\u636e\u5e93\u76f8\u5173\u64cd\u4f5c"),(0,l.kt)("h3",{id:"1\u521b\u5efa\u6570\u636e\u5e93"},"1\uff09\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atest_db\u7684\u6570\u636e\u5e93\uff0c\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u5b57\u7b26\u96c6\u662futf8mb4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create database test_db DEFAULT CHARACTER SET utf8mb4;\n")),(0,l.kt)("h3",{id:"2\u67e5\u770b\u6570\u636e\u5e93"},"2\uff09\u67e5\u770b\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\u67e5\u770b\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show databases;\n")),(0,l.kt)("h3",{id:"3\u5e94\u7528\u6570\u636e\u5e93"},"3\uff09\u5e94\u7528\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\u5e94\u7528\u5df2\u521b\u5efa\u7684\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"use test_db;\n")),(0,l.kt)("h3",{id:"4\u5220\u9664\u6570\u636e\u5e93"},"4\uff09\u5220\u9664\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\u5220\u9664\u6570\u636e\u5e93test_db"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop database test_db;\n")),(0,l.kt)("h2",{id:"2-\u8868\u76f8\u5173\u64cd\u4f5c"},"2. \u8868\u76f8\u5173\u64cd\u4f5c"),(0,l.kt)("h3",{id:"1\u521b\u5efa\u5217\u5f0f\u5b58\u50a8\u8868"},"1\uff09\u521b\u5efa\u5217\u5f0f\u5b58\u50a8\u8868"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u4e00\u4e2a\u5f15\u64ce\u4e3aStoneDB\u3001\u540d\u4e3astudent\u7684\u8868\uff0c\u5305\u62ec\u7f16\u53f7\u3001\u59d3\u540d\u3001\u5e74\u9f84\u3001\u751f\u65e5\u7b49\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table student(\n    id int(11) primary key,\n    name varchar(255),\n    age smallint,\n    birthday DATE\n    ) engine=stonedb;\n")),(0,l.kt)("p",null,"\u6ce8\u660e\uff1a\u5982\u679cSQL\u8bed\u53e5\u4e2d\u672a\u6307\u5b9a\u201cengine=stonedb\u201d\uff0c\u5219\u6240\u521b\u5efa\u7684\u8868\u7684\u5b58\u50a8\u5f15\u64ce\u7531\u53c2\u6570default_storage_engine\u51b3\u5b9a\u3002\n\u8be6\u60c5\u53c2\u89c1\u8bbe\u7f6e\u53c2\u6570-\u5728\u53c2\u6570\u6587\u4ef6\u4e2d\u6307\u5b9a\u5b58\u50a8\u5f15\u64ce\u7c7b\u578b"),(0,l.kt)("h3",{id:"2\u67e5\u770b\u8868"},"2\uff09\u67e5\u770b\u8868"),(0,l.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\u67e5\u770b\u8868\u7ed3\u6784\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show create table student\\G\n")),(0,l.kt)("h3",{id:"3\u5220\u9664\u8868"},"3\uff09\u5220\u9664\u8868"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u8981\u5220\u9664\u8868student\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop table student;\n")),(0,l.kt)("h2",{id:"3-\u6570\u636e\u76f8\u5173\u64cd\u4f5c"},"3. \u6570\u636e\u76f8\u5173\u64cd\u4f5c"),(0,l.kt)("h3",{id:"1\u63d2\u5165\u6570\u636e"},"1\uff09\u63d2\u5165\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528insert\u5411\u8868\u63d2\u5165\u8bb0\u5f55\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into student values(1,'Jack',15,'20220506');\n")),(0,l.kt)("h3",{id:"2\u4fee\u6539\u8868\u6570\u636e"},"2\uff09\u4fee\u6539\u8868\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528update\u4fee\u6539\u8868\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update student set age=25 where id=1;\n")),(0,l.kt)("h3",{id:"3\u5220\u9664\u8868\u6570\u636e"},"3\uff09\u5220\u9664\u8868\u6570\u636e"),(0,l.kt)("h4",{id:"\u6e05\u7a7a\u8868\u6570\u636e"},"\u6e05\u7a7a\u8868\u6570\u636e"),(0,l.kt)("p",null,"\u4f7f\u7528 Truncate \u53ef\u4ee5\u6e05\u7a7a\u8868\u4e2d\u5168\u90e8\u6570\u636e\uff0c\u4f8b\u5982:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"truncate table student ;\n")),(0,l.kt)("h4",{id:"\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u6570\u636e"},"\u5220\u9664\u8868\u4e2d\u6307\u5b9a\u6570\u636e"),(0,l.kt)("p",null,"\u7531\u4e8eStoneDB\u662f\u5217\u5f0f\u5b58\u50a8\uff0c\u4e0d\u652f\u6301delete\u64cd\u4f5c"),(0,l.kt)("h2",{id:"4-\u67e5\u8be2\u8868"},"4. \u67e5\u8be2\u8868"),(0,l.kt)("p",null,"\u4f7f\u7528select\u67e5\u8be2\u8868\u8bb0\u5f55\uff0c\u4f8b\u5982\uff1a\n1\uff09\u67e5\u8be2 student \u8868\u4e2dID=1\u7684\u5b66\u751f\u7684\u59d3\u540d\u548c\u751f\u65e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select name,birthday from student where id=1;\n")),(0,l.kt)("p",null,"2\uff09\u67e5\u8be2\u5c06 student \u8868\u6309\u7167\u751f\u65e5\u6392\u5e8f\u540e\u7684\u5b66\u751f\u59d3\u540d\u548c\u751f\u65e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select name,birthday from student order by birthday;\n")),(0,l.kt)("h2",{id:"5-\u7528\u6237\u76f8\u5173\u64cd\u4f5c"},"5. \u7528\u6237\u76f8\u5173\u64cd\u4f5c"),(0,l.kt)("h3",{id:"1\u521b\u5efa\u7528\u6237"},"1\uff09\u521b\u5efa\u7528\u6237"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u8981\u521b\u5efa\u7528\u6237tiger\uff0c\u5bc6\u7801\u4e3a123456\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create user 'tiger'@'%' identified by '123456';\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u7528\u6237\u540d\u548c\u4e3b\u673a\u540d\uff08'username'@'host'\uff09\u552f\u4e00\u8868\u793a\u4e00\u4e2a\u7528\u6237\uff0c'tiger'@'%'\u548c'tiger'@'localhost'\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u7528\u6237\u3002"),(0,l.kt)("h3",{id:"2\u5411\u7528\u6237\u6388\u6743"},"2\uff09\u5411\u7528\u6237\u6388\u6743"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u5411\u7528\u6237tiger\u6388\u4e88\u53ef\u67e5\u8be2\u6570\u636e\u5e93test_db\u6240\u6709\u7684\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"grant select on test_db.* to 'tiger'@'%';\n")),(0,l.kt)("h3",{id:"3\u67e5\u8be2\u7528\u6237\u6743\u9650"},"3\uff09\u67e5\u8be2\u7528\u6237\u6743\u9650\uff1a"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u67e5\u8be2\u540d\u4e3a tiger \u7684\u7528\u6237\u6240\u62e5\u6709\u7684\u6743\u9650"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"show grants for 'tiger'@'%';\n")),(0,l.kt)("h3",{id:"4\u5220\u9664\u7528\u6237"},"4\uff09\u5220\u9664\u7528\u6237"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a\u8981\u5220\u9664\u7528\u6237tiger@%\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0bSQL\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"drop user 'tiger'@'%';\n")))}g.isMDXComponent=!0}}]);