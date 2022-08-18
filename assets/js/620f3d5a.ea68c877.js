"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9130],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),d=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||s;return n?a.createElement(k,l(l({ref:e},p),{},{components:n})):a.createElement(k,l({ref:e},p))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94591:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],o={id:"oltp-performance-test-method",sidebar_position:7.621},i="OLTP Performance Test Method",d={unversionedId:"performance-tuning/performance-tests/OLTP/oltp-performance-test-method",id:"performance-tuning/performance-tests/OLTP/oltp-performance-test-method",title:"OLTP Performance Test Method",description:"SysBench introduction",source:"@site/../Docs/06-performance-tuning/06-performance-tests/01-OLTP/oltp-performance-test-method.md",sourceDirName:"06-performance-tuning/06-performance-tests/01-OLTP",slug:"/performance-tuning/performance-tests/OLTP/oltp-performance-test-method",permalink:"/docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/06-performance-tuning/06-performance-tests/01-OLTP/oltp-performance-test-method.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660802807,formattedLastUpdatedAt:"8/18/2022",sidebarPosition:7.621,frontMatter:{id:"oltp-performance-test-method",sidebar_position:7.621},sidebar:"autoSidebar",previous:{title:"TCP-H Test Report",permalink:"/docs/performance-tuning/performance-tests/OLAP/tcph-test-report"},next:{title:"Use Outter to Migrate Data to StoneDB",permalink:"/docs/data-migration-to-stonedb/use-outter-to-migrate"}},p={},m=[{value:"SysBench introduction",id:"sysbench-introduction",level:2},{value:"Test description",id:"test-description",level:2},{value:"Performance metrics",id:"performance-metrics",level:3},{value:"Additional information",id:"additional-information",level:3},{value:"Install SysBench",id:"install-sysbench",level:2},{value:"SysBench parameter description",id:"sysbench-parameter-description",level:2}],c={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"oltp-performance-test-method"},"OLTP Performance Test Method"),(0,s.kt)("h2",{id:"sysbench-introduction"},"SysBench introduction"),(0,s.kt)("p",null,"SysBench is a modular, cross-platform, and multithreaded benchmark tool for evaluating parameters that are important for a system that runs a database under heavy load. The idea of this benchmark suite is to quickly get an impression about system performance without setting up complex database benchmarks or even without installing a database at all."),(0,s.kt)("h2",{id:"test-description"},"Test description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `sbtest1` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `k` int(11) NOT NULL DEFAULT '0',\n  `c` char(120) NOT NULL DEFAULT '',\n  `pad` char(60) NOT NULL DEFAULT '',\n  PRIMARY KEY (`id`),\n  KEY `k_1` (`k`)\n) ENGINE=StoneDB AUTO_INCREMENT=800001 DEFAULT CHARSET=utf8\n")),(0,s.kt)("p",null,"Percentage proportion of each type of SQL statements:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"SELECT Type")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Percentage (%)")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"SQL Statement Example")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"point_selects"),(0,s.kt)("td",{parentName:"tr",align:null},"10"),(0,s.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id=?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"simple_ranges"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id BETWEEN ? AND ?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"sum_ranges"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"SELECT SUM(k) FROM sbtest%u WHERE id BETWEEN ? AND ?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"order_ranges"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"SELECT c FROM sbtest%u WHERE id BETWEEN ? AND ? ORDER BY c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"distinct_ranges"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"SELECT DISTINCT c FROM sbtest%u WHERE id BETWEEN ? AND ? ORDER BY c")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"index_updates"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"UPDATE sbtest%u SET k=k+1 WHERE id=?")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"non_index_updates"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"UPDATE sbtest%u SET c=? WHERE id=?")))),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"In this test, operations involved in all SQL statements are read operations."),(0,s.kt)("li",{parentName:"ul"},"StoneDB does not require secondary indexes, so ",(0,s.kt)("strong",{parentName:"li"},"index_updates")," is equivalent to ",(0,s.kt)("strong",{parentName:"li"},"non_index_updates"),".")))),(0,s.kt)("h3",{id:"performance-metrics"},"Performance metrics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Transactions Per Second (TPS): the number of transactions committed per second."),(0,s.kt)("li",{parentName:"ul"},"Queries Per Second (QPS): the number of SQL statements executed per second, including INSERT, SELECT, UPDATE, and DELETE statements.")),(0,s.kt)("h3",{id:"additional-information"},"Additional information"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In the standard OLTP read/write scenario provided by SysBench, a transaction consists of 18 read/write SQL statements. (Because StoneDB does not support DELETE operations, the DELETE statement is removed in this test.)"),(0,s.kt)("li",{parentName:"ul"},"In the standard OLTP read-only scenario provided by SysBench, a transaction consists of 14 read SQL statements: 14 primary key statements and 4 range statements."),(0,s.kt)("li",{parentName:"ul"},"In the standard OLTP write-only scenario provided by SysBench, a transaction consists of 4 write SQL statements: 2 UPDATE statements, 1 DELETE statement, and 1 INSERT statement. (Because StoneDB does not support DELETE operations, a DELETE statement and an INSERT statement that is associated with the DELETE statement are removed.)")),(0,s.kt)("h2",{id:"install-sysbench"},"Install SysBench"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install gcc gcc-c++ autoconf automake make libtool bzr mysql-devel git mysql\ngit clone https://github.com/akopytov/sysbench.git\n## Download SysBench from Git.\ncd sysbench\n## Open the directory that saves SysBench.\ngit checkout 1.0.18\n## Switch the SysBench version to 1.0.18.\n./autogen.sh\n## Run autogen.sh.\n./configure --prefix=$WROKSPACE/sysbench/ --mandir=/usr/share/man\nmake\n## Compile\nmake install\n")),(0,s.kt)("p",null,"Statement example for testing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd $WROKSPACE/sysbench/\n# Prepare data.\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx --mysql-db=sbtest --table_size=800000 --tables=230 --time=600 --mysql_storage_engine=StoneDB --create_secondary=false --test=src/lua/oltp_read_only.lua prepare\n\n# Run workloads.\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx  --mysql-db=sbtest --table_size=800000 --tables=230 --events=0 --time=600 --mysql_storage_engine=StoneDB  --threads=8 --percentile=95  --range_selects=0 --skip-trx=1 --report-interval=1 --test=src/lua/oltp_read_only.lua run\n\n# Clear test data.\nbin/sysbench --db-driver=mysql --mysql-host=xx.xx.xx.xx --mysql-port=3306 --mysql-user=xxx --mysql-password=xxxxxx  --mysql-db=sbtest --table_size=800000 --tables=230 --events=0 --time=600 --mysql_storage_engine=StoneDB  --threads=8 --percentile=95  --range_selects=0 --skip-trx=1 --report-interval=1 --test=src/lua/oltp_read_only.lua cleanup\n\n")),(0,s.kt)("h2",{id:"sysbench-parameter-description"},"SysBench parameter description"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Parameter")),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"th"},"Description")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"db-driver"),(0,s.kt)("td",{parentName:"tr",align:null},"The database driver.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-host"),(0,s.kt)("td",{parentName:"tr",align:null},"The address of the test instance.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-port"),(0,s.kt)("td",{parentName:"tr",align:null},"The port used to connect to the test instance.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-user"),(0,s.kt)("td",{parentName:"tr",align:null},"The username of the test account.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-password"),(0,s.kt)("td",{parentName:"tr",align:null},"The password of the test account.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-db"),(0,s.kt)("td",{parentName:"tr",align:null},"The name of the test database.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"table_size"),(0,s.kt)("td",{parentName:"tr",align:null},"The size of the table.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"tables"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of tables.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"events"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of connections.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"time"),(0,s.kt)("td",{parentName:"tr",align:null},"The time that the test lasts.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"threads"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of threads.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"percentile"),(0,s.kt)("td",{parentName:"tr",align:null},"The percentile to calculate in latency statistics. The default value is 95.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"report-interval"),(0,s.kt)("td",{parentName:"tr",align:null},"The interval for generating reports about the test progress, expressed in seconds. Value 0 indicates that no such report will be generated, and only the final report will be generated.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"skip-trx"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether to skip transactions.",(0,s.kt)("br",null),"- ",(0,s.kt)("strong",{parentName:"td"},"1"),": yes",(0,s.kt)("br",null),"- ",(0,s.kt)("strong",{parentName:"td"},"0"),": no",(0,s.kt)("br",null))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"mysql-socket"),(0,s.kt)("td",{parentName:"tr",align:null},"The ",(0,s.kt)("strong",{parentName:"td"},".sock")," file specified for the instance. This parameter is valid if the instance is a local instance.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"create_secondary"),(0,s.kt)("td",{parentName:"tr",align:null},"Whether to create secondary indexes. The default value is ",(0,s.kt)("strong",{parentName:"td"},"true"),".")))))}u.isMDXComponent=!0}}]);