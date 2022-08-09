"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4583],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"DML-statements",sidebar_position:5.3},l="DML\u8bed\u53e5",u={unversionedId:"developer-guide/DML-statements",id:"developer-guide/DML-statements",title:"DML\u8bed\u53e5",description:"StoneDB\u53ea\u652f\u6301\u4ee5\u4e0bDML\u64cd\u4f5c\uff0c\u5176\u5b83\u6ca1\u6709\u8bf4\u660e\u7684\u8868\u793a\u4e0d\u652f\u6301\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/DML-starements.md",sourceDirName:"04-developer-guide",slug:"/developer-guide/DML-statements",permalink:"/zh/docs/developer-guide/DML-statements",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/DML-starements.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1660045580,formattedLastUpdatedAt:"2022/8/9",sidebarPosition:5.3,frontMatter:{id:"DML-statements",sidebar_position:5.3},sidebar:"autoSidebar",previous:{title:"\u901a\u8fc7Navicat\u8fde\u63a5StoneDB",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-navicat"},next:{title:"\u67e5\u8be2\u8bed\u53e5",permalink:"/zh/docs/developer-guide/statements-for-queries"}},c={},p=[{value:"insert",id:"insert",level:2},{value:"update",id:"update",level:2},{value:"insert into select",id:"insert-into-select",level:2},{value:"insert into on duplicate key update",id:"insert-into-on-duplicate-key-update",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dml\u8bed\u53e5"},"DML\u8bed\u53e5"),(0,a.kt)("p",null,"StoneDB\u53ea\u652f\u6301\u4ee5\u4e0bDML\u64cd\u4f5c\uff0c\u5176\u5b83\u6ca1\u6709\u8bf4\u660e\u7684\u8868\u793a\u4e0d\u652f\u6301\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_test(\n  id INT NOT NULL AUTO_INCREMENT,\n  first_name VARCHAR(10) NOT NULL,\n  last_name VARCHAR(10) NOT NULL,\n  sex VARCHAR(5) NOT NULL,\n  score INT NOT NULL,\n  copy_id INT NOT NULL,\n  PRIMARY KEY (`id`)\n) engine=STONEDB;\n")),(0,a.kt)("h2",{id:"insert"},"insert"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"insert into t_test values(1,'jack','rose','0',58,1);\n")),(0,a.kt)("h2",{id:"update"},"update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update t_test set score=200 where id=1;\n")),(0,a.kt)("h2",{id:"insert-into-select"},"insert into select"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"create table t_test2 like t_test;\ninsert into t_test2 select * from t_test;\n")),(0,a.kt)("h2",{id:"insert-into-on-duplicate-key-update"},"insert into on duplicate key update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"insert into t_test1 values(1,'Bond','Jason','1',47,10) on duplicate key update last_name='James';\n")),(0,a.kt)("p",null,"\u6ce8\uff1a\u8bed\u4e49\u7684\u903b\u8f91\u662f\u63d2\u5165\u4e00\u884c\u6570\u636e\uff0c\u5982\u679c\u78b0\u5230\u4e3b\u952e\u7ea6\u675f\u6216\u8005\u552f\u4e00\u7ea6\u675f\u51b2\u7a81\uff0c\u5c31\u6267\u884c\u540e\u9762\u7684\u66f4\u65b0\u8bed\u53e5\u3002"))}m.isMDXComponent=!0}}]);