"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"sql-best-practices",sidebar_position:7.41},l="Best Practices for SQL Coding",d={unversionedId:"performance-tuning/database-tuning/sql-best-practices",id:"performance-tuning/database-tuning/sql-best-practices",title:"Best Practices for SQL Coding",description:"Best practices for designing tables",source:"@site/../Docs/06-performance-tuning/04-database-tuning/sql-best-practices.md",sourceDirName:"06-performance-tuning/04-database-tuning",slug:"/performance-tuning/database-tuning/sql-best-practices",permalink:"/docs/performance-tuning/database-tuning/sql-best-practices",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/06-performance-tuning/04-database-tuning/sql-best-practices.md",tags:[],version:"current",lastUpdatedBy:"Shlpeng",lastUpdatedAt:1658843760,formattedLastUpdatedAt:"7/26/2022",sidebarPosition:7.41,frontMatter:{id:"sql-best-practices",sidebar_position:7.41},sidebar:"autoSidebar",previous:{title:"OS Tuning",permalink:"/docs/performance-tuning/os-tuning"},next:{title:"Optimize SQL Statements",permalink:"/docs/performance-tuning/database-tuning/sql-tuning"}},u={},c=[{value:"<strong>Best practices for designing tables</strong>",id:"best-practices-for-designing-tables",level:2},{value:"<strong>Best practices for writting SQL queries</strong>",id:"best-practices-for-writting-sql-queries",level:2},{value:"<strong>Avoid the USE of <code>SELECT *</code> </strong>",id:"avoid-the-use-of-select--",level:3},{value:"<strong>Avoid use <code>OR</code> in a <code>WHERE</code> clause</strong>",id:"avoid-use-or-in-a-where-clause",level:3},{value:"<strong>Do not compute on indexed columns</strong>",id:"do-not-compute-on-indexed-columns",level:3},{value:"<strong>Avoid enclosing indexed columns in functions</strong>",id:"avoid-enclosing-indexed-columns-in-functions",level:3},{value:"<strong>Use a pair of apostrophes to quote the value for an indexed column whose data type is string</strong>",id:"use-a-pair-of-apostrophes-to-quote-the-value-for-an-indexed-column-whose-data-type-is-string",level:3},{value:"<strong>Avoid use <code>NOT</code> or <code>&lt;&gt;</code> on indexed columns</strong>",id:"avoid-use-not-or--on-indexed-columns",level:3},{value:"<strong>Avoid use <code>IS NOT NULL</code> on an indexed column</strong>",id:"avoid-use-is-not-null-on-an-indexed-column",level:3},{value:"<strong>Do not use leading wildcards unless necessary</strong>",id:"do-not-use-leading-wildcards-unless-necessary",level:3},{value:"<strong>Use TRUNCATE instead of DELETE to delete a large table if no WHERE clause is used</strong>",id:"use-truncate-instead-of-delete-to-delete-a-large-table-if-no-where-clause-is-used",level:3},{value:"<strong>Use batch operations when deleting or updating a large amount of data</strong>",id:"use-batch-operations-when-deleting-or-updating-a-large-amount-of-data",level:3},{value:"<strong>Use batch operations when inserting a large amount of data</strong>",id:"use-batch-operations-when-inserting-a-large-amount-of-data",level:3},{value:"<strong>Commit transactions as soon as possible</strong>",id:"commit-transactions-as-soon-as-possible",level:3},{value:"<strong>Avoid use <code>HAVING</code> to filter data</strong>",id:"avoid-use-having-to-filter-data",level:3},{value:"<strong>Exercise with caution when using user-defined functions</strong>",id:"exercise-with-caution-when-using-user-defined-functions",level:3},{value:"<strong>Exercise with caution when using scalar subqueries</strong>",id:"exercise-with-caution-when-using-scalar-subqueries",level:3},{value:"<strong>Try to use the same sorting sequence, if fields need to be sorted</strong>",id:"try-to-use-the-same-sorting-sequence-if-fields-need-to-be-sorted",level:3},{value:"<strong>Use as few joins as possible</strong>",id:"use-as-few-joins-as-possible",level:3},{value:"<strong>Keep levels of nesting as few as possible</strong>",id:"keep-levels-of-nesting-as-few-as-possible",level:3},{value:"<strong>Specify the join condition when joining two tables</strong>",id:"specify-the-join-condition-when-joining-two-tables",level:3},{value:"<strong>Use a comparatively small offset for pagination with <code>LIMIT</code></strong>",id:"use-a-comparatively-small-offset-for-pagination-with-limit",level:3},{value:"<strong>In a <code>LEFT JOIN</code> operation, ensure the table on the left has a smaller result set</strong>",id:"in-a-left-join-operation-ensure-the-table-on-the-left-has-a-smaller-result-set",level:3},{value:"<strong>Use EXIST and IN accurately</strong>",id:"use-exist-and-in-accurately",level:3},{value:"<strong>Use <code>UNION ALL</code> and <code>UNION</code> accurately</strong>",id:"use-union-all-and-union-accurately",level:3},{value:"<strong>Use <code>LEFT JOIN</code> and <code>INNER JOIN</code> accurately</strong>",id:"use-left-join-and-inner-join-accurately",level:3},{value:"<strong>In a <code>LEFT JOIN</code>, use <code>ON \u2026 AND</code> and <code>ON \u2026 WHERE</code> accurately</strong>",id:"in-a-left-join-use-on--and-and-on--where-accurately",level:3},{value:"<strong>In an <code>INNER JOIN</code>, use <code>ON \u2026 AND</code> and <code>ON \u2026 WHERE</code> accurately</strong>",id:"in-an-inner-join-use-on--and-and-on--where-accurately",level:3},{value:"<strong>Avoid uncessary sorting</strong>",id:"avoid-uncessary-sorting",level:3},{value:"<strong>Avoid unnecessary nesting</strong>",id:"avoid-unnecessary-nesting",level:3},{value:"Each time after an SQL statement is written, execute an EXPLAIN statement to query its execution plan",id:"each-time-after-an-sql-statement-is-written-execute-an-explain-statement-to-query-its-execution-plan",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"best-practices-for-sql-coding"},"Best Practices for SQL Coding"),(0,r.kt)("h2",{id:"best-practices-for-designing-tables"},(0,r.kt)("strong",{parentName:"h2"},"Best practices for designing tables")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define primary keys for your StoneDB tables. We recommend that you use primary keys to uniquely identify each record in your StoneDB tables, though StoneDB does not require you to create indexes."),(0,r.kt)("li",{parentName:"ul"},"Use auto-increment primary keys and do not use Universally Unique Identifiers (UUIDs) as primary keys. Auto-increment primary keys can be used to improve performance of insert operations and prevent data page splits and fragmentation to improve space utilization. UUIDs are not ordered and space consuming."),(0,r.kt)("li",{parentName:"ul"},"Do not use foreign key constraints. Each time after an insert, update, or delete operation on a table that is defined with foreign keys, an integrity check is performed on the table. This reduces query performance."),(0,r.kt)("li",{parentName:"ul"},"Use data type CHAR to define fixed-length character fields and data type VARCHAR to define variable-length character fields."),(0,r.kt)("li",{parentName:"ul"},"Properly define the length of each field. If the defined length is much longer than that of the stored record, a large amount of space will be wasted and the access efficiency is reduced."),(0,r.kt)("li",{parentName:"ul"},"Define each field to not null and provide each field with a default value, if possible."),(0,r.kt)("li",{parentName:"ul"},"Define a timestamp field in each table. Timestamps can be used for obtaining incremental data to estimate the number of rows generated in a specified time range, and to facilitate data cleaning and archiving."),(0,r.kt)("li",{parentName:"ul"},"Do not use big object field types. If big object fields are retrieved for a query, a large amount of network and I/O resources will be consumed. We recommend that you store big objects in external storage."),(0,r.kt)("li",{parentName:"ul"},"Do not use a reserved keyword such as ",(0,r.kt)("strong",{parentName:"li"},"desc"),", ",(0,r.kt)("strong",{parentName:"li"},"order"),", ",(0,r.kt)("strong",{parentName:"li"},"group"),", or ",(0,r.kt)("strong",{parentName:"li"},"distinct")," as a table or field name."),(0,r.kt)("li",{parentName:"ul"},"Ensure that the fields in a table use the same character set as the table.")),(0,r.kt)("h2",{id:"best-practices-for-writting-sql-queries"},(0,r.kt)("strong",{parentName:"h2"},"Best practices for writting SQL queries")),(0,r.kt)("h3",{id:"avoid-the-use-of-select--"},(0,r.kt)("strong",{parentName:"h3"},"Avoid the USE of ",(0,r.kt)("inlineCode",{parentName:"strong"},"SELECT *")," ")),(0,r.kt)("p",null,"When you use a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," statement, specify the names of columns, instead of using a wildcard (",(0,r.kt)("em",{parentName:"p"},"). This is because using `SELECT "),"` has the following negative impacts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transmit irrelevant fields from the server to the client, incurring additional network overhead."),(0,r.kt)("li",{parentName:"ul"},"Affect the execution plan of the statement. A ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT *")," statement is much slower than a ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT _Column names_")," statement because a ",(0,r.kt)("inlineCode",{parentName:"li"},"SELECT _Column names_")," statement can return data by using only column indexes.")),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test;\n")),(0,r.kt)("h3",{id:"avoid-use-or-in-a-where-clause"},(0,r.kt)("strong",{parentName:"h3"},"Avoid use ",(0,r.kt)("inlineCode",{parentName:"strong"},"OR")," in a ",(0,r.kt)("inlineCode",{parentName:"strong"},"WHERE")," clause")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION ALL")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," when combing multiple fields in a ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause to split the query into multiple queries. Otherwise, the indexes may become invalid."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40' or user_id='uOrzp9ojhfgqcwRCiume';\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40'\nunion all\nselect * from test where user_id='uOrzp9ojhfgqcwRCiume';\n")),(0,r.kt)("h3",{id:"do-not-compute-on-indexed-columns"},(0,r.kt)("strong",{parentName:"h3"},"Do not compute on indexed columns")),(0,r.kt)("p",null,"If an indexed column is used for computation, the index will become invalid."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where id-1=99;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where id=100;\n")),(0,r.kt)("h3",{id:"avoid-enclosing-indexed-columns-in-functions"},(0,r.kt)("strong",{parentName:"h3"},"Avoid enclosing indexed columns in functions")),(0,r.kt)("p",null,"If a function is used on an indexed column, the index will become invalid."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where date_add(create_time,interval 10 minute)=now();\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where create_time=date_add(now(),interval - 10 minute);\n")),(0,r.kt)("h3",{id:"use-a-pair-of-apostrophes-to-quote-the-value-for-an-indexed-column-whose-data-type-is-string"},(0,r.kt)("strong",{parentName:"h3"},"Use a pair of apostrophes to quote the value for an indexed column whose data type is string")),(0,r.kt)("p",null,"If the data type of an indexed column is string and a number not quoted with a pair of apostrophes is specified as the value in the indexed column, the number will be automatically converted to a string. As a result, the index will become invalid."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id=40;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from test where group_id='40';\n")),(0,r.kt)("h3",{id:"avoid-use-not-or--on-indexed-columns"},(0,r.kt)("strong",{parentName:"h3"},"Avoid use ",(0,r.kt)("inlineCode",{parentName:"strong"},"NOT")," or ",(0,r.kt)("inlineCode",{parentName:"strong"},"<>")," on indexed columns")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"NOT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"<>")," is used on an indexed column, the index will become invalid."),(0,r.kt)("h3",{id:"avoid-use-is-not-null-on-an-indexed-column"},(0,r.kt)("strong",{parentName:"h3"},"Avoid use ",(0,r.kt)("inlineCode",{parentName:"strong"},"IS NOT NULL")," on an indexed column")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")," is used on an indexed column, the index will become invalid."),(0,r.kt)("h3",{id:"do-not-use-leading-wildcards-unless-necessary"},(0,r.kt)("strong",{parentName:"h3"},"Do not use leading wildcards unless necessary")),(0,r.kt)("p",null,"If leading wildcards are used, relevant indexes will become invalid."),(0,r.kt)("h3",{id:"use-truncate-instead-of-delete-to-delete-a-large-table-if-no-where-clause-is-used"},(0,r.kt)("strong",{parentName:"h3"},"Use TRUNCATE instead of DELETE to delete a large table if no WHERE clause is used")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TRUNCATE")," is an DDL operation, which is faster and will release space after the table is deleted."),(0,r.kt)("h3",{id:"use-batch-operations-when-deleting-or-updating-a-large-amount-of-data"},(0,r.kt)("strong",{parentName:"h3"},"Use batch operations when deleting or updating a large amount of data")),(0,r.kt)("p",null,"We recommend that you split a large transaction into small transactions, since the locking scope for each small transaction is much smaller and the locking duration is much shorter. By doing this, the efficiency of system resources is improved."),(0,r.kt)("h3",{id:"use-batch-operations-when-inserting-a-large-amount-of-data"},(0,r.kt)("strong",{parentName:"h3"},"Use batch operations when inserting a large amount of data")),(0,r.kt)("p",null,"We recommend you use batch operations when inserting a large amount of data. This can greatly reduce the number of commits, improving query performance."),(0,r.kt)("h3",{id:"commit-transactions-as-soon-as-possible"},(0,r.kt)("strong",{parentName:"h3"},"Commit transactions as soon as possible")),(0,r.kt)("p",null,"We recommend that you commit transactions as soon as possible to reduce the lock time."),(0,r.kt)("h3",{id:"avoid-use-having-to-filter-data"},(0,r.kt)("strong",{parentName:"h3"},"Avoid use ",(0,r.kt)("inlineCode",{parentName:"strong"},"HAVING")," to filter data")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," is used to filter the data set at the last step, the data set is sorted and summarized. Therefore, use ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"HAVING")," if possible."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select job,avg(salary) from test group by job having job = 'managent';\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select job,avg(salary) from test where job = 'managent' group by job;\n")),(0,r.kt)("h3",{id:"exercise-with-caution-when-using-user-defined-functions"},(0,r.kt)("strong",{parentName:"h3"},"Exercise with caution when using user-defined functions")),(0,r.kt)("p",null,"When a function is called by an SQL statement, the number of times that the function is called is equal to the number of records contained in the result set returned. If the result set of the query is large, the query performance will be deteriorated."),(0,r.kt)("h3",{id:"exercise-with-caution-when-using-scalar-subqueries"},(0,r.kt)("strong",{parentName:"h3"},"Exercise with caution when using scalar subqueries")),(0,r.kt)("p",null,"The number of times that a scalar subquery is executed is equal to the number of records returned for its main query. If the result set of the main query is large, the query performance will be deteriorated."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select e.empno, e.ename, e.sal,e.deptno,\n(select d.dname from dept d where d.deptno = e.deptno) as dname\nfrom emp e;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select e.empno, e.ename, e.sal, e.deptno, d.dname\nfrom emp e\nleft join dept d\non e.deptno = d.deptno;\n")),(0,r.kt)("h3",{id:"try-to-use-the-same-sorting-sequence-if-fields-need-to-be-sorted"},(0,r.kt)("strong",{parentName:"h3"},"Try to use the same sorting sequence, if fields need to be sorted")),(0,r.kt)("p",null,"If the fields in the same SQL statement need to be sorted and use the same sorting sequence, indexes can be used to eliminate CPU overhead caused by sorting. Otherwise, excessive CPU time will be consumed. In the first example provided bellowed, field ",(0,r.kt)("strong",{parentName:"p"},"a")," is sorted in descending order while field ",(0,r.kt)("strong",{parentName:"p"},"b")," is sorted in ascending order. As a result, the optimizer cannot use indexes to avoid the sorting process."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select a,b from test order by a,b desc;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select a,b from test order by a,b;\nselect a,b from test order by a desc,b desc;\n")),(0,r.kt)("h3",{id:"use-as-few-joins-as-possible"},(0,r.kt)("strong",{parentName:"h3"},"Use as few joins as possible")),(0,r.kt)("p",null,"The more tables that are joined in an SQL statement indicates longer time and higher cost spent in compiling the statement. In addition, the optimizer has a higher probability of failing to choose the best execution plan."),(0,r.kt)("h3",{id:"keep-levels-of-nesting-as-few-as-possible"},(0,r.kt)("strong",{parentName:"h3"},"Keep levels of nesting as few as possible")),(0,r.kt)("p",null,"If too many nesting levels exist in an SQL statement, temporary tables will be generated and the execution plan generated for the SQL statement may have poor performance."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from t1 a where a.proj_no in\n(select b.proj_no from t2 b where b.proj_name = 'xxx' \nand not exists\n(select 1 from t3 c where c.mess_id = b.t_project_id))\nand a.oper_type <> 'D';\n")),(0,r.kt)("h3",{id:"specify-the-join-condition-when-joining-two-tables"},(0,r.kt)("strong",{parentName:"h3"},"Specify the join condition when joining two tables")),(0,r.kt)("p",null,"If no join condition is specified when two tables are joined, Cartesian products will be generated. In such case, if both tables store a large amount of data, such SQL statement will consume a lot of CPU and memory resources."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a,b;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from a,b where a.id=b.id;\n")),(0,r.kt)("h3",{id:"use-a-comparatively-small-offset-for-pagination-with-limit"},(0,r.kt)("strong",{parentName:"h3"},"Use a comparatively small offset for pagination with ",(0,r.kt)("inlineCode",{parentName:"strong"},"LIMIT"))),(0,r.kt)("p",null,"When a pagination query with ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," is processed, the offset data is first obtained, the data for pagination is later obtained, and the offset data is discarded to return only the paginated data. Therefore, if the offset is large, the performance of the SQL statement will be poor."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test limit 10000,10;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name from test where id>10000 limit 10;\n")),(0,r.kt)("h3",{id:"in-a-left-join-operation-ensure-the-table-on-the-left-has-a-smaller-result-set"},(0,r.kt)("strong",{parentName:"h3"},"In a ",(0,r.kt)("inlineCode",{parentName:"strong"},"LEFT JOIN")," operation, ensure the table on the left has a smaller result set")),(0,r.kt)("p",null,"In most cases, the table on the left in a ",(0,r.kt)("inlineCode",{parentName:"p"},"LEFT JOIN")," functions as the driving table. The number of records in the result set of the driving table is equal to the number of times that the driven table is executed. Therefore, if the result set of the driving table is large, the performance will be poor."),(0,r.kt)("h3",{id:"use-exist-and-in-accurately"},(0,r.kt)("strong",{parentName:"h3"},"Use EXIST and IN accurately")),(0,r.kt)("p",null,"When to use ",(0,r.kt)("inlineCode",{parentName:"p"},"EXISTS")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," is determined by the result set sizes of the outer query and inner query. If the result set of the outer query is larger than that of the inner query, ",(0,r.kt)("inlineCode",{parentName:"p"},"IN")," is superior to ",(0,r.kt)("inlineCode",{parentName:"p"},"EXIST"),". Otherwise, ",(0,r.kt)("inlineCode",{parentName:"p"},"EXIST")," is preferred."),(0,r.kt)("h3",{id:"use-union-all-and-union-accurately"},(0,r.kt)("strong",{parentName:"h3"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"UNION ALL")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"UNION")," accurately")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION ALL")," operation simple combines the two result sets and returns the collection. A ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," operation combines the two result sets and sort, deduplicates the records in the collection, and then returns the collection. We recommend that you use ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION ALL")," if possible, because ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," consumes more resources."),(0,r.kt)("h3",{id:"use-left-join-and-inner-join-accurately"},(0,r.kt)("strong",{parentName:"h3"},"Use ",(0,r.kt)("inlineCode",{parentName:"strong"},"LEFT JOIN")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"INNER JOIN")," accurately")),(0,r.kt)("p",null,"In a ",(0,r.kt)("inlineCode",{parentName:"p"},"LEFT JOIN")," operation, the rows that match in both tables and the remaining rows in the table on the left are returned. In an ",(0,r.kt)("inlineCode",{parentName:"p"},"INNER JOIN")," operation, only the rows that match in both tables are returned."),(0,r.kt)("h3",{id:"in-a-left-join-use-on--and-and-on--where-accurately"},(0,r.kt)("strong",{parentName:"h3"},"In a ",(0,r.kt)("inlineCode",{parentName:"strong"},"LEFT JOIN"),", use ",(0,r.kt)("inlineCode",{parentName:"strong"},"ON \u2026 AND")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"ON \u2026 WHERE")," accurately")),(0,r.kt)("p",null,"The following information describes the main differences between ",(0,r.kt)("inlineCode",{parentName:"p"},"ON \u2026 AND")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ON \u2026 WHERE"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ON \u2026 AND")," does not provide the filtering capability. Rows that have no match in the table on the right are filled with null."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ON \u2026 WHERE")," provides the filtering capability. No matter whether the predicate condition is placed after ",(0,r.kt)("inlineCode",{parentName:"li"},"ON")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE"),", rows in the table on the right are filtered first. However, if the predicate condition is placed after ",(0,r.kt)("inlineCode",{parentName:"li"},"WHERE"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"LEFT JOIN")," operation will be converted into an ",(0,r.kt)("inlineCode",{parentName:"li"},"INNER JOIN")," operation.")),(0,r.kt)("h3",{id:"in-an-inner-join-use-on--and-and-on--where-accurately"},(0,r.kt)("strong",{parentName:"h3"},"In an ",(0,r.kt)("inlineCode",{parentName:"strong"},"INNER JOIN"),", use ",(0,r.kt)("inlineCode",{parentName:"strong"},"ON \u2026 AND")," and ",(0,r.kt)("inlineCode",{parentName:"strong"},"ON \u2026 WHERE")," accurately")),(0,r.kt)("p",null,"In an ",(0,r.kt)("inlineCode",{parentName:"p"},"INNER JOIN")," operation, ",(0,r.kt)("inlineCode",{parentName:"p"},"ON \u2026 AND")," is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"ON \u2026 WHERE"),". The both provide the filtering capability."),(0,r.kt)("h3",{id:"avoid-uncessary-sorting"},(0,r.kt)("strong",{parentName:"h3"},"Avoid uncessary sorting")),(0,r.kt)("p",null,"For count operations, sorting is unnecessary."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) as totalCount from \n(select * from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1\norder by id desc, expire_date asc) _xx;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1;\n")),(0,r.kt)("h3",{id:"avoid-unnecessary-nesting"},(0,r.kt)("strong",{parentName:"h3"},"Avoid unnecessary nesting")),(0,r.kt)("p",null,"For queries that can be implemented by a single ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),", do not use nested ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"."),(0,r.kt)("p",null,"Following are statement examples:"),(0,r.kt)("p",null,"Avoid:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) as totalCount from \n(select * from enquiry e where 1 = 1 \nAND status = 'closed'\nAND is_show = 1\norder by id desc, expire_date asc) _xx;\n")),(0,r.kt)("p",null,"Prefer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select count(*) from enquiry e where 1 = 1\nAND status = 'closed'\nAND is_show = 1;\n")),(0,r.kt)("h3",{id:"each-time-after-an-sql-statement-is-written-execute-an-explain-statement-to-query-its-execution-plan"},"Each time after an SQL statement is written, execute an EXPLAIN statement to query its execution plan"),(0,r.kt)("p",null,"Each time after you write an SQL statement, we recommend that you execute ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPLAN")," to check the execution plan of the SQL statement and pay special attention to parameters ",(0,r.kt)("strong",{parentName:"p"},"type"),", ",(0,r.kt)("strong",{parentName:"p"},"rows"),", and ",(0,r.kt)("strong",{parentName:"p"},"extra"),"."))}m.isMDXComponent=!0}}]);