"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[14],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=s,p=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(p,i(i({ref:t},d),{},{components:r})):n.createElement(p,i({ref:t},d))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3591:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),i=["components"],o={id:"statements-for-queries",sidebar_position:5.4},l="Statements for Queries",u={unversionedId:"developer-guide/statements-for-queries",id:"developer-guide/statements-for-queries",title:"Statements for Queries",description:"Statements for common queries",source:"@site/docs/04-developer-guide/statements-for-queries.md",sourceDirName:"04-developer-guide",slug:"/developer-guide/statements-for-queries",permalink:"/docs/developer-guide/statements-for-queries",draft:!1,editUrl:"https://github.com/stoneatom/stonedb-docs/edit/main/docs/04-developer-guide/statements-for-queries.md",tags:[],version:"current",lastUpdatedBy:"cieldon",lastUpdatedAt:1656493366,formattedLastUpdatedAt:"6/29/2022",sidebarPosition:5.4,frontMatter:{id:"statements-for-queries",sidebar_position:5.4},sidebar:"autoSidebar",previous:{title:"DML Statements",permalink:"/docs/developer-guide/regular-change-operations"},next:{title:"Create and Manage a Database",permalink:"/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database"}},d={},m=[{value:"Statements for common queries",id:"statements-for-common-queries",level:2},{value:"UNION/UNION ALL",id:"unionunion-all",level:3},{value:"DISTINCT",id:"distinct",level:3},{value:"LIKE",id:"like",level:3},{value:"GROUP BY/ORDER BY",id:"group-byorder-by",level:3},{value:"HAVING",id:"having",level:3},{value:"Statements used for aggregate queries",id:"statements-used-for-aggregate-queries",level:2},{value:"Statements used for pagination queries",id:"statements-used-for-pagination-queries",level:2},{value:"Statements used for correlated queries",id:"statements-used-for-correlated-queries",level:2},{value:"INNER JOIN",id:"inner-join",level:3},{value:"LEFT JOIN",id:"left-join",level:3},{value:"RIGHT JOIN",id:"right-join",level:3},{value:"Statements used for subqueries",id:"statements-used-for-subqueries",level:2},{value:"Statement for scalar subqueries",id:"statement-for-scalar-subqueries",level:3},{value:"Statement for derived subqueries",id:"statement-for-derived-subqueries",level:3},{value:"IN/NOT IN",id:"innot-in",level:3},{value:"EXISTS/NOT EXISTS",id:"existsnot-exists",level:3}],c={toc:m};function f(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"statements-for-queries"},"Statements for Queries"),(0,a.kt)("h2",{id:"statements-for-common-queries"},"Statements for common queries"),(0,a.kt)("h3",{id:"unionunion-all"},"UNION/UNION ALL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name from t_test1\nunion all\nselect first_name from t_test2;\n")),(0,a.kt)("h3",{id:"distinct"},"DISTINCT"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct first_name from t_test1;\n")),(0,a.kt)("h3",{id:"like"},"LIKE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test where first_name like 'zhou%';\n")),(0,a.kt)("h3",{id:"group-byorder-by"},"GROUP BY/ORDER BY"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name,count(*) from t_test1 group by first_name order by 2;\n")),(0,a.kt)("h3",{id:"having"},"HAVING"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select e.id, count(e.id), round(avg(e.score), 2)\nfrom t_test1 e\ngroup by e.id\nhaving avg(e.score) > (select avg(score) from t_test1);\n")),(0,a.kt)("h2",{id:"statements-used-for-aggregate-queries"},"Statements used for aggregate queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name,count(*) from t_test group by first_name;\nselect sum(score) from t_test;\n")),(0,a.kt)("h2",{id:"statements-used-for-pagination-queries"},"Statements used for pagination queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 limit 10;\nselect * from t_test1 limit 10,10;\n")),(0,a.kt)("h2",{id:"statements-used-for-correlated-queries"},"Statements used for correlated queries"),(0,a.kt)("h3",{id:"inner-join"},"INNER JOIN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1,t_test2 t2 where t1.id = t2.id;\n")),(0,a.kt)("h3",{id:"left-join"},"LEFT JOIN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1 left join t_test2 t2 on t1.id = t2.id and t1.id=100;\n")),(0,a.kt)("h3",{id:"right-join"},"RIGHT JOIN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1 right join t_test2 t2 on t1.id = t2.id and t1.id=100;\n")),(0,a.kt)("h2",{id:"statements-used-for-subqueries"},"Statements used for subqueries"),(0,a.kt)("h3",{id:"statement-for-scalar-subqueries"},"Statement for scalar subqueries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select e.id,\ne.first_name,\n(select d.first_name from t_test2 d where d.id = e.id) as first_name\nfrom t_test1 e;\n")),(0,a.kt)("h3",{id:"statement-for-derived-subqueries"},"Statement for derived subqueries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select a.first_name, b.last_name\nfrom t_test1 a, (select id,last_name from t_test2) b\nwhere a.id = b.id;\n")),(0,a.kt)("h3",{id:"innot-in"},"IN/NOT IN"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 where id in(select id from t_test2);\n")),(0,a.kt)("h3",{id:"existsnot-exists"},"EXISTS/NOT EXISTS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 A where exists (select 1 from t_test2 B where B.id = A.id);\n")))}f.isMDXComponent=!0}}]);