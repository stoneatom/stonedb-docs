"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1880],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18428:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"architecture",sidebar_position:1.2},l="Architecture",d={unversionedId:"about-stonedb/architecture",id:"about-stonedb/architecture",title:"Architecture",description:"StoneDB_V1.0",source:"@site/../Docs/00-about-stonedb/architecture.md",sourceDirName:"00-about-stonedb",slug:"/about-stonedb/architecture",permalink:"/docs/about-stonedb/architecture",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/00-about-stonedb/architecture.md",tags:[],version:"current",lastUpdatedBy:"andyli",lastUpdatedAt:1659082170,formattedLastUpdatedAt:"7/29/2022",sidebarPosition:1.2,frontMatter:{id:"architecture",sidebar_position:1.2},sidebar:"autoSidebar",previous:{title:"StoneDB Introduction",permalink:"/docs/about-stonedb/intro"},next:{title:"Limits",permalink:"/docs/about-stonedb/limits"}},c={},u=[{value:"Applications layer",id:"applications-layer",level:2},{value:"Connection management",id:"connection-management",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Access control",id:"access-control",level:3},{value:"Services layer",id:"services-layer",level:2},{value:"Management &amp; Utilities",id:"management--utilities",level:3},{value:"SQL Interface",id:"sql-interface",level:3},{value:"Cache &amp; Buffers",id:"cache--buffers",level:3},{value:"Parser",id:"parser",level:3},{value:"Optimizer",id:"optimizer",level:3},{value:"Executor",id:"executor",level:3},{value:"Storage engine layer",id:"storage-engine-layer",level:2},{value:"StoneDB Optimizer",id:"stonedb-optimizer",level:3},{value:"StoneDB Executor",id:"stonedb-executor",level:3},{value:"Knowledge Grid Manager",id:"knowledge-grid-manager",level:3},{value:"<strong>Data Pack</strong>",id:"data-pack",level:4},{value:"<strong>Data Pack Node</strong>",id:"data-pack-node",level:4},{value:"<strong>Knowledge Node</strong>",id:"knowledge-node",level:4},{value:"<strong>Histogram</strong>",id:"histogram",level:5},{value:"<strong>CMAP</strong>",id:"cmap",level:5},{value:"<strong>Pack-to-Pack</strong>",id:"pack-to-pack",level:5},{value:"<strong>Knowledge Grid</strong>",id:"knowledge-grid",level:4},{value:"StoneDB Loader Parser",id:"stonedb-loader-parser",level:3},{value:"Insert Buffer",id:"insert-buffer",level:3},{value:"Replication Manager",id:"replication-manager",level:3},{value:"Compress",id:"compress",level:3},{value:"Decompress",id:"decompress",level:3}],h={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"StoneDB_V1.0",src:a(45850).Z,width:"634",height:"588"})),(0,i.kt)("p",null,"StoneDB is a hybrid transaction/analytical processing (HTAP) database. It provides a column-based storage engine also named StoneDB to handle online analytical processing (OLAP) workloads. The StoneDB storage engine features high performance and high data compression ratio, in addition to common features provided by other storage engines such as InnoDB and MyISAM. The logical architecture of StoneDB consists of three layers: applications, services, and storage engine. When an SQL query is processed by StoneDB, the SQL query is processed through every module in the three layers one after one."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," In this topic, StoneDB refers to the database, unless otherwise specified."))),(0,i.kt)("h2",{id:"applications-layer"},"Applications layer"),(0,i.kt)("h3",{id:"connection-management"},"Connection management"),(0,i.kt)("p",null,"When a client sends a connection request to a server, the server assigns a thread from the thread pool to process interactions with the client. If the client disconnects from the server, the thread is assigned to a new connection, instead of being destroyed. This saves time in creating and releasing threads."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"After receiving a connection request from a client, the server authenticates the user that initiates the connection based on the username, password, IP address, and port number. If the user fails the authentication, the server rejects the connection request."),(0,i.kt)("h3",{id:"access-control"},"Access control"),(0,i.kt)("p",null,"After the client is connected to the server, the server identifies what operations are allowed for the user based on the permissions granted to the user."),(0,i.kt)("h2",{id:"services-layer"},"Services layer"),(0,i.kt)("h3",{id:"management--utilities"},"Management & Utilities"),(0,i.kt)("p",null,"StoneDB provides various database management features, such as backup, recovery, user management, permission management, and database metadata management."),(0,i.kt)("h3",{id:"sql-interface"},"SQL Interface"),(0,i.kt)("p",null,"SQL Interface is mainly used to receive and process SQL queries and return query results."),(0,i.kt)("h3",{id:"cache--buffers"},"Cache & Buffers"),(0,i.kt)("p",null,"The query cache is used to temporarily store the hash values and result sets of executed SQL statements to enhance execution efficiency. When a query passes through this module, the hash value of the query is used to check if any matching record exists in the query cache. If no, the query is then parsed, optimized, and executed. After it is processed, its hash value and result set are cached. If yes, the result set is directly read from the cache. However, if the query hits the cache but the schema or data of the queried table is modified, the relevant cache is invalid and the query still needs to be further processed to obtain the result set. Therefore, we recommend that you disable the query cache in your production environment. The query cache is removed in MySQL 8.0."),(0,i.kt)("h3",{id:"parser"},"Parser"),(0,i.kt)("p",null,"The parser is used to parse SQL statements and generate parse trees. The parser performs lexical analysis to check whether the table and columns exist and then syntax analysis to check whether SQL statements are written in correct syntax. If any error is detected, relevant error information will be returned."),(0,i.kt)("h3",{id:"optimizer"},"Optimizer"),(0,i.kt)("p",null,"The optimizer chooses the execution plan with the lowest cost for each SQL query based on the tables, indexes, and other statistics information relevant to the SQL query."),(0,i.kt)("h3",{id:"executor"},"Executor"),(0,i.kt)("p",null,"The executor verifies whether the user that initiates a query has permissions to operate on the relevant tables. If the user has sufficient permissions, the executor calls API operations to read data and returns the query result."),(0,i.kt)("h2",{id:"storage-engine-layer"},"Storage engine layer"),(0,i.kt)("p",null,"When your data volume reaches tens of or even hundreds of billions of records, executing a statistical or aggregate query on MySQL or another relational database may take several to dozens of minutes. However, to process the same query, StoneDB requires only one tenth of the time or even less. This is because StoneDB uses column-based storage, data compression, and knowledge grid techniques to optimize query processing."),(0,i.kt)("h3",{id:"stonedb-optimizer"},"StoneDB Optimizer"),(0,i.kt)("p",null,"StoneDB Optimizer is a self-developed optimizer provided by StoneDB. It is used to optimize SQL statements by converting expressions, converting subqueries to joins, and then generates a high-efficiency execution plan by using the Knowledge Grid technique."),(0,i.kt)("h3",{id:"stonedb-executor"},"StoneDB Executor"),(0,i.kt)("p",null,"StoneDB Executor reads data based on the execution plan."),(0,i.kt)("h3",{id:"knowledge-grid-manager"},"Knowledge Grid Manager"),(0,i.kt)("h4",{id:"data-pack"},(0,i.kt)("strong",{parentName:"h4"},"Data Pack")),(0,i.kt)("p",null,"Data Packs are data storage units. Data in each column is sliced into Data Packs every 65,536 rows. A Data Pack is smaller than a column and supports higher data compression ratio, whereas it is larger than a row and supports higher query performance. Data Packs are also the units for which the Knowledge Grid uses to decompress data."),(0,i.kt)("p",null,"Based on the theory of rough sets, Data Packs can be classified into the following three categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Irrelevant Data Packs: with no data elements relevant for further execution"),(0,i.kt)("li",{parentName:"ul"},"Relevant Data Packs: with all data elements relevant for further execution"),(0,i.kt)("li",{parentName:"ul"},"Suspect Data Packs: with some data elements relevant for further execution")),(0,i.kt)("p",null,"This classification helps filter out irrelevant Data Packs. StoneDB needs only to read metadata of relevant Data Packs, and decompress suspect Data Packs and then examine the data records to filter relevant data records. The process of handling relevant Data Packs does not consume I/O, since no data is decompressed."),(0,i.kt)("h4",{id:"data-pack-node"},(0,i.kt)("strong",{parentName:"h4"},"Data Pack Node")),(0,i.kt)("p",null,"A Data Pack Node stores the following information about a Data Pack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The maximum, minimum, average, and sum of the values"),(0,i.kt)("li",{parentName:"ul"},"The number of values and the number of non-null values"),(0,i.kt)("li",{parentName:"ul"},"The compression method"),(0,i.kt)("li",{parentName:"ul"},"The length in bytes")),(0,i.kt)("p",null,"Therefore, Data Pack Node is also called Metadata Node. One Data Pack Node corresponds to one Data Pack."),(0,i.kt)("h4",{id:"knowledge-node"},(0,i.kt)("strong",{parentName:"h4"},"Knowledge Node")),(0,i.kt)("p",null,"Knowledge Nodes are at the upper layer of Data Pack Nodes. Knowledge Nodes store a collection of metadata that shows the relations between Data Packs and columns, including the range of value occurrence and the associations between columns. Most data stored in a Knowledge Node is generated when data is being loaded and the rest is generated during queries. "),(0,i.kt)("p",null,"Knowledge Nodes can be classified into the following types:"),(0,i.kt)("h5",{id:"histogram"},(0,i.kt)("strong",{parentName:"h5"},"Histogram")),(0,i.kt)("p",null,"Histograms are used to present statistics on columns whose data types are integer, date and time, or floating point. In a histogram, the range between the maximum value and minimum value of a data pack is evenly divided into 1,024 ranges, each of which occupies 1 bit. Ranges within which at least one value falls are marked with 1. Ranges within which no value falls are marked with 0. Histograms are automatically created when data is being loaded."),(0,i.kt)("p",null,"Suppose values in a Data Pack fall within two ranges: 0\u2012100 and 102301\u2012102400, as shown in the following histogram."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"0\u2012100"),(0,i.kt)("th",{parentName:"tr",align:null},"101\u2012200"),(0,i.kt)("th",{parentName:"tr",align:null},"201\u2012300"),(0,i.kt)("th",{parentName:"tr",align:null},"..."),(0,i.kt)("th",{parentName:"tr",align:null},"102301\u2012102400"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("p",null,"Execute the following SQL statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select * from table where id>199 and id<299;\n")),(0,i.kt)("p",null,"No value in the Data Pack is hit. Therefore, the Data Pack is irrelevant and filtered out."),(0,i.kt)("h5",{id:"cmap"},(0,i.kt)("strong",{parentName:"h5"},"CMAP")),(0,i.kt)("p",null,"Character Maps (CMAPs) are binary representation of the occurrence of ASCII characters within the first 64 row positions. If a character exists in a position, the position is marked with 1 for the character. Otherwise, the position is marked with 0 for the character. CMAPs are automatically created when data is being loaded."),(0,i.kt)("p",null,"In the following example, character A exists in position 1 and position 64."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Char/Char pos"),(0,i.kt)("th",{parentName:"tr",align:null},"1"),(0,i.kt)("th",{parentName:"tr",align:null},"2"),(0,i.kt)("th",{parentName:"tr",align:null},"..."),(0,i.kt)("th",{parentName:"tr",align:null},"64"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"B"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"..."),(0,i.kt)("td",{parentName:"tr",align:null},"...")))),(0,i.kt)("h5",{id:"pack-to-pack"},(0,i.kt)("strong",{parentName:"h5"},"Pack-to-Pack")),(0,i.kt)("p",null,"Pack-to-Packs are equijoin relations between the pairs of tables. Pack-to-Pack is a binary matrix. If a matching pair is found between two Data Packs, the value is 1. Otherwise, the value is 0. Using Pack-to-Packs can help quickly identify relevant Data Packs, improving join performance. Pack-to-Packs are automatically created when join queries are being executed."),(0,i.kt)("p",null,"In the following example, the condition for joining tables is ",(0,i.kt)("inlineCode",{parentName:"p"},"A.C=B.D"),". For Data Pack A.C1, only Data Packs B.D2 and B.D5 contain matching values."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"B.D1"),(0,i.kt)("th",{parentName:"tr",align:null},"B.D2"),(0,i.kt)("th",{parentName:"tr",align:null},"B.D3"),(0,i.kt)("th",{parentName:"tr",align:null},"B.D4"),(0,i.kt)("th",{parentName:"tr",align:null},"B.D5"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A.C1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A.C2"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A.C3"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"1")))),(0,i.kt)("h4",{id:"knowledge-grid"},(0,i.kt)("strong",{parentName:"h4"},"Knowledge Grid")),(0,i.kt)("p",null,"The Knowledge Grid consists of Data Pack Nodes and Knowledge Nodes. Data Packs are compressed for storage and the cost for decompressing Data Packs is high. Therefore, the key to improving read performance is to retrieve as few as Data Packs. The Knowledge Grid can help filter out irrelevant data. With the Knowledge Gid, the data retrieved can be reduced to less than 1% of the total data. In most cases, the data retrieved can be loaded to memory so that the query processing efficiency can be further improved."),(0,i.kt)("p",null,"For most statistical and aggregate queries, StoneDB can return query results by using only the Knowledge Grid. In this way, the number of Data Packs to be decompressed is greatly reduced, saving I/O resources, minimizing the response time, and improving the network utilization."),(0,i.kt)("p",null,"Following is an example showing how the Knowledge Grid works."),(0,i.kt)("p",null,"The following table shows the distribution of values recorded in Data Pack Nodes."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Min."),(0,i.kt)("th",{parentName:"tr",align:null},"Max."))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t1.A1"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"9")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t1.A2"),(0,i.kt)("td",{parentName:"tr",align:null},"10"),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"t1.A3"),(0,i.kt)("td",{parentName:"tr",align:null},"40"),(0,i.kt)("td",{parentName:"tr",align:null},"100")))),(0,i.kt)("p",null,"The following SQL statement is executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select min(t2.D) from t1,t2 where t1.B=t2.C and t1.A>15;\n")),(0,i.kt)("p",null,"The working process of the Knowledge Grid is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Filter Data Packs based on Data Pack Nodes: data pack t1.A1 is irrelevant, t1.A2 is suspect, and t1.A3 is relevant. Therefore, t1.A1 is filtered out.\n|  | t2.C1 | t2.C2 | t2.C3 | t2.C4 | t2.C5 |\n| --- | --- | --- | --- | --- | --- |\n| t1.B1 | 1 | 1 | 1 | 0 | 1 |\n| t1.B2 | 0 | 1 | 0 | 0 | 0 |\n| t1.B3 | 1 | 1 | 0 | 0 | 1 |")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Compare t1.B1 and t2.C1 to check whether matching pairs exist based on pack-to-packs. In this step, Data Packs t2.C2 and t2.C5 contain matching pairs while Data Packs t2.C3 and t2.C4 are filtered out.\n|  | Min. | Max. |\n| --- | --- | --- |\n| t2.D1 | 0 | 500 |\n| t2.D2 | 101 | 440 |\n| t2.D3 | 300 | 6879 |\n| t2.D4 | 1 | 432 |\n| t2.D5 | 3 | 100 |")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Examine Data Packs D2 and D5, after D1, D3, and D4 are filtered out in the previous two steps. Based on the Data Pack Nodes of column D, the maximum value in D5 is 100, which is smaller than the minimum value 101 in D2. Therefore, D2 is filtered out. Now, the system only needs to decompress data pack D5 to obtain the final result."))),(0,i.kt)("h3",{id:"stonedb-loader-parser"},"StoneDB Loader Parser"),(0,i.kt)("p",null,"StoneDB Loader Parser is a module responsible for data import and export. It processes ",(0,i.kt)("inlineCode",{parentName:"p"},"LOAD DATA INFILE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT \u2026 INTO FILE")," operations."),(0,i.kt)("h3",{id:"insert-buffer"},"Insert Buffer"),(0,i.kt)("p",null,"The Insert Buffer is used to optimize insert performance. When you insert data to a table, the data to insert is first temporarily stored in Insert Buffer and then flushed from Insert Buffer to disks in batches. This improves system throughput. If the data is directly written into disks, the data is written one row after another because StoneDB does not support transactions. As a result, the system throughput is low and thus the insertion efficiency is low. Insert Buffer is enabled by default. If you want to disable it, set parameter",(0,i.kt)("strong",{parentName:"p"}," stonedb_insert_delayed")," to ",(0,i.kt)("strong",{parentName:"p"},"off"),"."),(0,i.kt)("h3",{id:"replication-manager"},"Replication Manager"),(0,i.kt)("p",null,"The high-availability structure of StoneDB includes a replication engine called Replication Manager to ensure strong consistency between the primary and secondary databases. Different from binlog replication used by MySQL to replicate original data, Replication Manager can directly replicate compressed data since data stored in StoneDB is compressed, without the need for decompression. This greatly reduces the traffic required for transmitting data."),(0,i.kt)("h3",{id:"compress"},"Compress"),(0,i.kt)("p",null,"Compress is the module for compressing data and supports more than 20 compression algorithms such as PPM, LZ4, B2, and Delta. In StoneDB, data is stored by column. Since data records stored in a column are of the same data type, StoneDB can dynamically choose the most efficient compression algorithm based on the data type defined for the column. More repeated values in a column indicates higher compression ratio of the column. Compression not only saves storage space but also I/O and memory resources."),(0,i.kt)("h3",{id:"decompress"},"Decompress"),(0,i.kt)("p",null,"Decompress is the module for decompressing data. The unit for compression and decompression is Data Pack. With the Knowledge Grid technique, StoneDB first filters out irrelevant Data Packs, and then decompresses and examines suspect Data Packs, and then obtains the final query result."))}p.isMDXComponent=!0},45850:function(e,t,a){t.Z=a.p+"assets/images/stonedb-architecture-V1-cc5186dede7f33f3e6e7d6fe5a65ca5b.png"}}]);