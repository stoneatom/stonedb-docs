"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"statements-for-queries",sidebar_position:5.4},o="\u67e5\u8be2\u8bed\u53e5",u={unversionedId:"developer-guide/statements-for-queries",id:"developer-guide/statements-for-queries",title:"\u67e5\u8be2\u8bed\u53e5",description:"\u5e38\u89c4\u67e5\u8be2",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/statements-for-queries.md",sourceDirName:"04-developer-guide",slug:"/developer-guide/statements-for-queries",permalink:"/zh/docs/developer-guide/statements-for-queries",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/statements-for-queries.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660543547,formattedLastUpdatedAt:"2022/8/15",sidebarPosition:5.4,frontMatter:{id:"statements-for-queries",sidebar_position:5.4},sidebar:"autoSidebar",previous:{title:"DML\u8bed\u53e5",permalink:"/zh/docs/developer-guide/DML-statements"},next:{title:"\u521b\u5efa\u548c\u7ba1\u7406\u5e93",permalink:"/zh/docs/developer-guide/create-and-manage-database-objects/create-and-manage-database"}},d={},c=[{value:"\u5e38\u89c4\u67e5\u8be2",id:"\u5e38\u89c4\u67e5\u8be2",level:2},{value:"union/union all",id:"unionunion-all",level:3},{value:"distinct",id:"distinct",level:3},{value:"like",id:"like",level:3},{value:"group by/order by",id:"group-byorder-by",level:3},{value:"having",id:"having",level:3},{value:"\u805a\u5408\u67e5\u8be2",id:"\u805a\u5408\u67e5\u8be2",level:2},{value:"\u5206\u9875\u67e5\u8be2",id:"\u5206\u9875\u67e5\u8be2",level:2},{value:"\u5173\u8054\u67e5\u8be2",id:"\u5173\u8054\u67e5\u8be2",level:2},{value:"\u5185\u8fde\u63a5",id:"\u5185\u8fde\u63a5",level:3},{value:"\u5de6\u8fde\u63a5",id:"\u5de6\u8fde\u63a5",level:3},{value:"\u53f3\u8fde\u63a5",id:"\u53f3\u8fde\u63a5",level:3},{value:"\u5b50\u67e5\u8be2",id:"\u5b50\u67e5\u8be2",level:2},{value:"\u6807\u91cf\u5b50\u67e5\u8be2",id:"\u6807\u91cf\u5b50\u67e5\u8be2",level:3},{value:"\u6d3e\u751f\u5b50\u67e5\u8be2",id:"\u6d3e\u751f\u5b50\u67e5\u8be2",level:3},{value:"in/not in\u5b50\u67e5\u8be2",id:"innot-in\u5b50\u67e5\u8be2",level:3},{value:"exists/not exists\u5b50\u67e5\u8be2",id:"existsnot-exists\u5b50\u67e5\u8be2",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u67e5\u8be2\u8bed\u53e5"},"\u67e5\u8be2\u8bed\u53e5"),(0,i.kt)("h2",{id:"\u5e38\u89c4\u67e5\u8be2"},"\u5e38\u89c4\u67e5\u8be2"),(0,i.kt)("h3",{id:"unionunion-all"},"union/union all"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name from t_test1\nunion all\nselect first_name from t_test2;\n")),(0,i.kt)("h3",{id:"distinct"},"distinct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct first_name from t_test1;\n")),(0,i.kt)("h3",{id:"like"},"like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test where first_name like 'zhou%';\n")),(0,i.kt)("h3",{id:"group-byorder-by"},"group by/order by"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name,count(*) from t_test1 group by first_name order by 2;\n")),(0,i.kt)("h3",{id:"having"},"having"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select e.id, count(e.id), round(avg(e.score), 2)\nfrom t_test1 e\ngroup by e.id\nhaving avg(e.score) > (select avg(score) from t_test1);\n")),(0,i.kt)("h2",{id:"\u805a\u5408\u67e5\u8be2"},"\u805a\u5408\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select first_name,count(*) from t_test group by first_name;\nselect sum(score) from t_test;\n")),(0,i.kt)("h2",{id:"\u5206\u9875\u67e5\u8be2"},"\u5206\u9875\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 limit 10;\nselect * from t_test1 limit 10,10;\n")),(0,i.kt)("h2",{id:"\u5173\u8054\u67e5\u8be2"},"\u5173\u8054\u67e5\u8be2"),(0,i.kt)("h3",{id:"\u5185\u8fde\u63a5"},"\u5185\u8fde\u63a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1,t_test2 t2 where t1.id = t2.id;\n")),(0,i.kt)("h3",{id:"\u5de6\u8fde\u63a5"},"\u5de6\u8fde\u63a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1 left join t_test2 t2 on t1.id = t2.id and t1.id=100;\n")),(0,i.kt)("h3",{id:"\u53f3\u8fde\u63a5"},"\u53f3\u8fde\u63a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select t1.id,t1.first_name,t2.last_name from t_test1 t1 right join t_test2 t2 on t1.id = t2.id and t1.id=100;\n")),(0,i.kt)("h2",{id:"\u5b50\u67e5\u8be2"},"\u5b50\u67e5\u8be2"),(0,i.kt)("h3",{id:"\u6807\u91cf\u5b50\u67e5\u8be2"},"\u6807\u91cf\u5b50\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select e.id,\ne.first_name,\n(select d.first_name from t_test2 d where d.id = e.id) as first_name\nfrom t_test1 e;\n")),(0,i.kt)("h3",{id:"\u6d3e\u751f\u5b50\u67e5\u8be2"},"\u6d3e\u751f\u5b50\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select a.first_name, b.last_name\nfrom t_test1 a, (select id,last_name from t_test2) b\nwhere a.id = b.id;\n")),(0,i.kt)("h3",{id:"innot-in\u5b50\u67e5\u8be2"},"in/not in\u5b50\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 where id in(select id from t_test2);\n")),(0,i.kt)("h3",{id:"existsnot-exists\u5b50\u67e5\u8be2"},"exists/not exists\u5b50\u67e5\u8be2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t_test1 A where exists (select 1 from t_test2 B where B.id = A.id);\n")))}m.isMDXComponent=!0}}]);