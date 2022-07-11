"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6158],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(f,d(d({ref:t},l),{},{components:r})):n.createElement(f,d({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var i=2;i<o;i++)d[i]=r[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71430:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),d=["components"],s={id:"create-and-manage-stored-procedure",sidebar_position:5.54},c="Create and Manage a View",i={unversionedId:"developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure",id:"developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure",title:"Create and Manage a View",description:"Create a stored procedure. For example, perform the following two steps to create a stored procedure named add_user, used to insert 1,000,000 random data records.",source:"@site/../Docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-stored-procedure.md",sourceDirName:"04-developer-guide/04-create-and-manage-database-objects",slug:"/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/../Docs/04-developer-guide/04-create-and-manage-database-objects/create-and-manage-stored-procedure.md",tags:[],version:"current",lastUpdatedBy:"leizzboy",lastUpdatedAt:1657506276,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:5.54,frontMatter:{id:"create-and-manage-stored-procedure",sidebar_position:5.54},sidebar:"autoSidebar",previous:{title:"Create and Manage a View",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-view"},next:{title:"Configure Parameters",permalink:"/docs/developer-guide/appendix/configuration-parameters"}},l={},p=[],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-and-manage-a-view"},"Create and Manage a View"),(0,o.kt)("p",null,"Create a stored procedure. For example, perform the following two steps to create a stored procedure named ",(0,o.kt)("strong",{parentName:"p"},"add_user"),", used to insert 1,000,000 random data records."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Execute the following SQL statement to create a table:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_test(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(10) NOT NULL,\n  last_name VARCHAR(10) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Execute the following SQL statement to create the stored procedure:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DELIMITER //\ncreate PROCEDURE add_user(in num INT)\nBEGIN\nDECLARE rowid INT DEFAULT 0;\nDECLARE firstname VARCHAR(10);\nDECLARE name1 VARCHAR(10);\nDECLARE name2 VARCHAR(10);\nDECLARE lastname VARCHAR(10) DEFAULT '';\nDECLARE sex CHAR(1);\nDECLARE score CHAR(2);\nWHILE rowid < num DO\nSET firstname = SUBSTRING(md5(rand()),1,4); \nSET name1 = SUBSTRING(md5(rand()),1,4); \nSET name2 = SUBSTRING(md5(rand()),1,4); \nSET sex=FLOOR(0 + (RAND() * 2));\nSET score= FLOOR(40 + (RAND() *60));\nSET rowid = rowid + 1;\nIF ROUND(RAND())=0 THEN \nSET lastname =name1;\nEND IF;\nIF ROUND(RAND())=1 THEN\nSET lastname = CONCAT(name1,name2);\nEND IF;\ninsert INTO t_user(first_name,last_name,sex,score,copy_id) VALUES (firstname,lastname,sex,score,rowid);  \nEND WHILE;\nEND //\nDELIMITER ;\n")),(0,o.kt)("p",null,"Call a stored procedure. For example, execute the following SQL statement to call stored procedure ",(0,o.kt)("strong",{parentName:"p"},"add_user"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"call add_user(1000000);\n")),(0,o.kt)("p",null,"Drop a stored procedure. For example, execute the following SQL statement to drop stored procedure ",(0,o.kt)("strong",{parentName:"p"},"add_user"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"drop PROCEDURE add_user;\n")))}m.isMDXComponent=!0}}]);