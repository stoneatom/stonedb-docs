"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5233],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(n),u=o,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(h,s(s({ref:e},m),{},{components:n})):a.createElement(h,s({ref:e},m))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:o,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24859:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],l={id:"olap-performance-test-method",sidebar_position:7.611},i="OLAP Performance Test Method",p={unversionedId:"performance-tuning/performance-tests/OLAP/olap-performance-test-method",id:"performance-tuning/performance-tests/OLAP/olap-performance-test-method",title:"OLAP Performance Test Method",description:"TPC-H introduction",source:"@site/../Docs/06-performance-tuning/06-performance-tests/00-OLAP/olap-performance-test-method.md",sourceDirName:"06-performance-tuning/06-performance-tests/00-OLAP",slug:"/performance-tuning/performance-tests/OLAP/olap-performance-test-method",permalink:"/docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/06-performance-tuning/06-performance-tests/00-OLAP/olap-performance-test-method.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1660547370,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:7.611,frontMatter:{id:"olap-performance-test-method",sidebar_position:7.611},sidebar:"autoSidebar",previous:{title:"Read/Write Splitting",permalink:"/docs/performance-tuning/architecture-tuning/read_write-splitting"},next:{title:"TCP-H Test Report",permalink:"/docs/performance-tuning/performance-tests/OLAP/tcph-test-report"}},m={},c=[{value:"<strong>TPC-H introduction</strong>",id:"tpc-h-introduction",level:2},{value:"<strong>Test environment introduction</strong>",id:"test-environment-introduction",level:2},{value:"<strong>Test scheme</strong>",id:"test-scheme",level:2},{value:"<strong>1. Set up the test environment</strong>",id:"1-set-up-the-test-environment",level:3},{value:"2. Compile and deploy TPC-H",id:"2-compile-and-deploy-tpc-h",level:3},{value:"<strong>3. Use TPC-H to generate 100 GB test data</strong>",id:"3-use-tpc-h-to-generate-100-gb-test-data",level:3},{value:"<strong>4. Modify the dss.ddl and dss.ri commands</strong>",id:"4-modify-the-dssddl-and-dssri-commands",level:3},{value:"<strong>5. Import table schemas and data</strong>",id:"5-import-table-schemas-and-data",level:3},{value:"<strong>6. Generate test SQL statements</strong>",id:"6-generate-test-sql-statements",level:3},{value:"<strong>7. Modify the SQL statements and start the test</strong>",id:"7-modify-the-sql-statements-and-start-the-test",level:3},{value:"<strong>Statements before the modification</strong>",id:"statements-before-the-modification",level:4},{value:"<strong>Statements after the modification</strong>",id:"statements-after-the-modification",level:4},{value:"<strong>8. Execute the TPC-H script to obtain the test result</strong>",id:"8-execute-the-tpc-h-script-to-obtain-the-test-result",level:3}],d={toc:c};function u(t){var e=t.components,n=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"olap-performance-test-method"},"OLAP Performance Test Method"),(0,r.kt)("h2",{id:"tpc-h-introduction"},(0,r.kt)("strong",{parentName:"h2"},"TPC-H introduction")),(0,r.kt)("p",null,"The TPC Benchmark-H (TPC-H) is a decision support benchmark. It consists of a suite of business-oriented ad-hoc queries and concurrent data modifications. The queries and the data populating the database have been chosen to have broad industry-wide relevance.",(0,r.kt)("br",null),"In the TPC-H benchmark, 22 complex SQL queries are performed on 8 tables. Most queries contain joins on several tables, subqueries, and GROUP BY clauses. For more information, visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.tpc.org/tpch/"},"https://www.tpc.org/tpch/"),"."),(0,r.kt)("h2",{id:"test-environment-introduction"},(0,r.kt)("strong",{parentName:"h2"},"Test environment introduction")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: CentOS 7.9"),(0,r.kt)("li",{parentName:"ul"},"CPU: Intel(R) Xeon(R) CPU E5-2683 v4 @ 2.10GHz, 16 cores, and 64 threads"),(0,r.kt)("li",{parentName:"ul"},"Memory: 125 GB"),(0,r.kt)("li",{parentName:"ul"},"Deployment mode of StoneDB: standalone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/mysqld  Ver 5.6.24-StoneDB for Linux on x86_64 (build-)\nbuild information as follow:\n        Repository address: https://github.com/stoneatom/stonedb.git:stonedb-5.6\n        Branch name: stonedb-5.6\n        Last commit ID: 90583b2\n        Last commit time: Date:   Wed Jul 6 23:31:30 2022 +0800\n        Build time: Date: Thu Jul  7 05:39:39 UTC 2022\n")),(0,r.kt)("h2",{id:"test-scheme"},(0,r.kt)("strong",{parentName:"h2"},"Test scheme")),(0,r.kt)("h3",{id:"1-set-up-the-test-environment"},(0,r.kt)("strong",{parentName:"h3"},"1. Set up the test environment")),(0,r.kt)("p",null,"For information about how to set up the test environment,  see ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-deployment"},"Quick Deployment"),"."),(0,r.kt)("h3",{id:"2-compile-and-deploy-tpc-h"},"2. Compile and deploy TPC-H"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp"},"TPC-H")," installation package, upload the package to the test machine. ")),(0,r.kt)("p",null,"For example, upload it to the",(0,r.kt)("strong",{parentName:"p"}," /data")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"unzip tpc-h-tool.zip\nmv TPC-H_Tools_v3.0.0/ tpc-h/\ncd /data/tpc-h/dbgen/\n# Install GCC and MAKE.\nyum install gcc make -y\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Modify file ",(0,r.kt)("strong",{parentName:"li"},"makefile")," as shown in the following code. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp makefile.suite makefile\nvim makefile\n################\n## CHANGE NAME OF ANSI COMPILER HERE\n################\nCC      = gcc\n# Current values for DATABASE are: INFORMIX, DB2, TDAT (Teradata)\n#                                  SQLSERVER, SYBASE, ORACLE, VECTORWISE\n# Current values for MACHINE are:  ATT, DOS, HP, IBM, ICL, MVS,\n#                                  SGI, SUN, U2200, VMS, LINUX, WIN32\n# Current values for WORKLOAD are:  TPCH\nDATABASE= MYSQL\nMACHINE = LINUX\nWORKLOAD = TPCH\n")),(0,r.kt)("p",null,"This modification is mandatory, because TPC-H originally does not support MySQL."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Modify file ",(0,r.kt)("strong",{parentName:"li"},"tpcd.h")," to add the database type MySQL to TPC-H.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\nvim tpcd.h\n\n#ifdef MYSQL\n#define GEN_QUERY_PLAN  ""\n#define START_TRAN      "START TRANSACTION"\n#define END_TRAN        "COMMIT"\n#define SET_OUTPUT      ""\n#define SET_ROWCOUNT    "limit %d;\\n"\n#define SET_DBASE       "use %s;\\n"\n#endif\n\n# Run the "make" command.\nmake\n')),(0,r.kt)("h3",{id:"3-use-tpc-h-to-generate-100-gb-test-data"},(0,r.kt)("strong",{parentName:"h3"},"3. Use TPC-H to generate 100 GB test data")),(0,r.kt)("p",null,"For example, run the following command to use TPC-H to generate ",(0,r.kt)("strong",{parentName:"p"},".tbl")," data files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'./dbgen -s 100\n\n# Copy the data files to the "stonedb" folder.\nmkdir /data/tpc-h/stonedb/\nmv *.tbl /data/tpc-h/stonedb/\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-s")," ",(0,r.kt)("em",{parentName:"p"},"n")," in the command indicates the size of data generated. Unit: GB.",(0,r.kt)("br",null),"After the test files are generated, you can run the ",(0,r.kt)("strong",{parentName:"p"},"head")," command to check whether each row in the ",(0,r.kt)("strong",{parentName:"p"},".tbl")," data files has some fields that are separated with vertical bars (|)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If this is not the first time you use TPC-H to generate data in the environment, we recommend that you run ",(0,r.kt)("strong",{parentName:"p"},"make clean")," and then ",(0,r.kt)("strong",{parentName:"p"},"make")," to clear data first and then run the command with ",(0,r.kt)("strong",{parentName:"p"},"-f")," specified to overwrite the data previously generated."))),(0,r.kt)("h3",{id:"4-modify-the-dssddl-and-dssri-commands"},(0,r.kt)("strong",{parentName:"h3"},"4. Modify the dss.ddl and dss.ri commands")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dss.ddl")," command is used to create tables. The ",(0,r.kt)("inlineCode",{parentName:"p"},"dss.ri")," command is used to create indexes and foreign key indexes."),(0,r.kt)("p",null,"Because the syntax to create table schemas varies with the storage engine. Therefore, the statements for creating table schemas and indexes must be modified. The following code provides an example."),(0,r.kt)("p",null,"To modify the statements, copy the file that stores schemas and indexes to the ",(0,r.kt)("strong",{parentName:"p"},"stonedb")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[root@htap2 dbgen]# cp dss.ddl /data/tpc-h/stonedb/dss_stonedb.ddl          # Schemas used for StoneDB tables\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- sccsid:     @(#)dss.ddl  2.1.8.1\ncreate table nation  ( n_nationkey  integer not null,\n                            n_name       char(25) not null,\n                            n_regionkey  integer not null,\n                            n_comment    varchar(152),primary key (n_nationkey))engine=StoneDB;\n\ncreate table region  ( r_regionkey  integer not null,\n                            r_name       char(25) not null,\n                            r_comment    varchar(152),primary key (r_regionkey))engine=StoneDB;\n\ncreate table part  ( p_partkey     integer not null,\n                          p_name        varchar(55) not null,\n                          p_mfgr        char(25) not null,\n                          p_brand       char(10) not null,\n                          p_type        varchar(25) not null,\n                          p_size        integer not null,\n                          p_container   char(10) not null,\n                          p_retailprice decimal(15,2) not null,\n                          p_comment     varchar(23) not null,primary key (p_partkey) )engine=StoneDB;\n\ncreate table supplier ( s_suppkey     integer not null,\n                             s_name        char(25) not null,\n                             s_address     varchar(40) not null,\n                             s_nationkey   integer not null,\n                             s_phone       char(15) not null,\n                             s_acctbal     decimal(15,2) not null,\n                             s_comment     varchar(101) not null,primary key (s_suppkey))engine=StoneDB;\n\ncreate table partsupp ( ps_partkey     integer not null,\n                             ps_suppkey     integer not null,\n                             ps_availqty    integer not null,\n                             ps_supplycost  decimal(15,2)  not null,\n                             ps_comment     varchar(199) not null,primary key (ps_partkey,ps_suppkey) )engine=StoneDB;\n\ncreate table customer ( c_custkey     integer not null,\n                             c_name        varchar(25) not null,\n                             c_address     varchar(40) not null,\n                             c_nationkey   integer not null,\n                             c_phone       char(15) not null,\n                             c_acctbal     decimal(15,2)   not null,\n                             c_mktsegment  char(10) not null,\n                             c_comment     varchar(117) not null,primary key (c_custkey))engine=StoneDB;\n\ncreate table orders  ( o_orderkey       integer not null,\n                           o_custkey        integer not null,\n                           o_orderstatus    char(1) not null,\n                           o_totalprice     decimal(15,2) not null,\n                           o_orderdate      date not null,\n                           o_orderpriority  char(15) not null,  \n                           o_clerk          char(15) not null, \n                           o_shippriority   integer not null,\n                           o_comment        varchar(79) not null,primary key (o_orderkey))engine=StoneDB;\n\ncreate table lineitem ( l_orderkey    integer not null,\n                             l_partkey     integer not null,\n                             l_suppkey     integer not null,\n                             l_linenumber  integer not null,\n                             l_quantity    decimal(15,2) not null,\n                             l_extendedprice  decimal(15,2) not null,\n                             l_discount    decimal(15,2) not null,\n                             l_tax         decimal(15,2) not null,\n                             l_returnflag  char(1) not null,\n                             l_linestatus  char(1) not null,\n                             l_shipdate    date not null,\n                             l_commitdate  date not null,\n                             l_receiptdate date not null,\n                             l_shipinstruct char(25) not null,\n                             l_shipmode     char(10) not null,\n                             l_comment      varchar(44) not null,primary key (l_orderkey,l_linenumber))engine=StoneDB;\n\n\n")),(0,r.kt)("h3",{id:"5-import-table-schemas-and-data"},(0,r.kt)("strong",{parentName:"h3"},"5. Import table schemas and data")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import table schemas.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> create database tpch;\nmysql> source /data/tpc-h/stonedb/dss_stonedb.ddl  # Modify the value of the PATH parameter to be the path to the TPC-H tool.\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Import data.")),(0,r.kt)("p",null,"You can directly import tables ",(0,r.kt)("strong",{parentName:"p"},"part"),", ",(0,r.kt)("strong",{parentName:"p"},"region"),", ",(0,r.kt)("strong",{parentName:"p"},"nation"),", ",(0,r.kt)("strong",{parentName:"p"},"customer"),", and ",(0,r.kt)("strong",{parentName:"p"},"supplier"),". For tables ",(0,r.kt)("strong",{parentName:"p"},"lineitem"),", ",(0,r.kt)("strong",{parentName:"p"},"orders"),", and ",(0,r.kt)("strong",{parentName:"p"},"partsupp"),", we recommend that you use a script such as split_file2db.sh to split them before the import."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Import data to StoneDB.\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/part.tbl' into table part fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/region.tbl' into table region fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/nation.tbl' into table nation fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/customer.tbl' into table customer fields terminated by '|';\"\nmysql -uroot -pxxxx -hxx.xx.xx.xx -P3306 --local-infile -Dtpcd -e \"load data local infile '/data/tpc-h/stonedb/supplier.tbl' into table supplier fields terminated by '|';\"\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#! /bin/bash\n\nshopt -s expand_aliases\nsource ~/.bash_profile\n# Obtain the .tbl files and the corresponding table names.\nsql_path=/data/tpc-h/stonedb/\n# split_tb=$(ls ${sql_path}/*.ddl)\n# Files to split.\nsplit_tb=(lineitem orders partsupp)\n# split_tb=(customer nation supplier part region)\n# split_tb=(part nation)\n# Split settings.\n# The interval (number of rows) for splitting.\nline=1000000  \n\n# Database configuration.\ndb_host=192.168.30.102\ndb_port=3306\ndb_user=ztpch\ndb_pwd=******\ndb=ztpch  \n\n\n\n\n# Split a large SQL file.\nfunction split_file()\n{\n    for tb_name in ${split_tb[@]}\n    do\n        echo "$tb_name"\n        # Obtain the number of the file before it is split.\n        totalline=$(cat $sql_path/$tb_name.tbl | wc -l)\n        # echo totalline=$totalline\n        a=`expr $totalline / $line`\n        b=`expr $totalline % $line` \n        if  [[ $b -eq 0 ]] ;then\n            filenum=$a\n        else\n            filenum=`expr $a + 1`\n        fi\n        # echo filenum=$filenum\n        echo "File $tb_name has $totalline rows of data and needs to be split into $filenum files."\n\n\n        # Split the file.\n        i=1        # Change 38 to 1.\n        while(( i<=$filenum ))\n        do\n                echo "File to split: $tb_name.tbl.$i"\n                # The interval for splitting must falls with [min, max] of the original file. \n                p=`expr $i - 1`\n                min=`expr $p \\* $line + 1`\n                max=`expr $i \\* $line`\n                sed -n "$min,$max"p $sql_path/$tb_name.tbl > $sql_path/$tb_name.tbl.$i\n                #echo "This operation does not split the file."\n                # Specify the name of the file to split.\n                filename=$sql_path/$tb_name.tbl.$i\n                echo "$tb_name.tbl.$i is split. File name: $filename"\n                # Import data to StoneDB.\n                mysql -u$db_user -p$db_pwd -h$db_host -P$db_port --local-infile -D$db -e "load data local infile \'$filename\' into table $tb_name fields terminated by \'|\';" $2>1 > /dev/null\n            i=`expr $i + 1`\n        done\n    done\n}\n\nsplit_file\n\n')),(0,r.kt)("h3",{id:"6-generate-test-sql-statements"},(0,r.kt)("strong",{parentName:"h3"},"6. Generate test SQL statements")),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("strong",{parentName:"p"},"qgen")," and ",(0,r.kt)("strong",{parentName:"p"},"dists.dss")," files to the ",(0,r.kt)("strong",{parentName:"p"},"queries")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cp /data/tpc-h/dbgen/qgen /data/tpc-h/dbgen/queries\ncp /data/tpc-h/dbgen/dists.dss /data/tpc-h/dbgen/qgen/queries\n# Copy the files to path "data/tpc-h/stonedb".\ncp -a /data/tpc-h/dbgen/qgen/queries /data/tpc-h/stonedb/queries\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\n# Run "chmod +x tpch_querys.sh".\n#./tpch_querys.sh stonedb\ndb_type=$1\nfor i in {1..22}\ndo\n./qgen -d $i -s 100 > $db_type"$i".sql\ndone\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Execute the script to generate statements.\nmkdir query\n./tpch_querys.sh query\nmv query*.sql /data/tpc-h/stonedb/queries \n")),(0,r.kt)("h3",{id:"7-modify-the-sql-statements-and-start-the-test"},(0,r.kt)("strong",{parentName:"h3"},"7. Modify the SQL statements and start the test")),(0,r.kt)("p",null,"Test script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\n# stone\nhost=192.168.30.120\nport=3306\nuser=root\npassword=********\ndatabase=ztpch\n\n\n# The absolate path. The following is for reference only.\nbanchdir=/data/tpc-h/stonedb/queries\ndb_type=stonedb #ck\u3001stone\u3001mysql\nresfile=$banchdir/"TPCH_${db_type}_`date "+%Y%m%d%H%M%S"`"\n\n\necho "start test run at"`date "+%Y-%m-%d %H:%M:%S"`|tee -a ${resfile}.out\necho "Path to log: ${resfile}"\nfor (( i=1; i<=22;i=i+1 ))\n    do\n\n    queryfile=${db_type}${i}".sql"\n\n    echo "run query ${i}"|tee -a ${resfile}.out\n    echo " $database  $banchdir/query$i.sql "  #|tee -a ${resfile}.out\n    start_time=`date "+%s.%N"`\n    #clickhouse\n    #clickhouse-client --port $port --user $user --password $password --host $host -d $database < $banchdir/query$i.sql |tee -a ${resfile}.out\n    #stonedb and mysql\n    mysql -u$user -p$password -h$host -P$port $database -e "source $banchdir/query$i.sql" 2>&1 |tee -a ${resfile}.out\n\n    end_time=`date "+%s.%N"`\n    start_s=${start_time%.*}\n    start_nanos=${start_time#*.}\n    end_s=${end_time%.*}\n    end_nanos=${end_time#*.}\n    if [ "$end_nanos" -lt "$start_nanos" ];then\n            end_s=$(( 10#$end_s -1 ))\n            end_nanos=$(( 10#$end_nanos + 10 ** 9))\n    fi\n    time=$(( 10#$end_s - 10#$start_s )).`printf "%03d\\n" $(( (10#$end_nanos - 10#$start_nanos)/10**6 ))`\n    echo ${queryfile} "the $i run cost "${time}" second start at "`date -d @$start_time "+%Y-%m-%d %H:%M:%S"`" stop at "`date -d @$end_time "+%Y-%m-%d %H:%M:%S"` >> ${resfile}.time\n    # systemctl stop clickhouse-server\n    done\n\n')),(0,r.kt)("h4",{id:"statements-before-the-modification"},(0,r.kt)("strong",{parentName:"h4"},"Statements before the modification")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q1.sql"},"q1.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q2.sql"},"q2.sql")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q3.sql"},"q3.sql")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q4.sql"},"q4.sql")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q5.sql"},"q5.sql")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q6.sql"},"q6.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q7.sql"},"q7.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q8.sql"},"q8.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q9.sql"},"q9.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q10.sql"},"q10.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q11.sql"},"q11.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q12.sql"},"q12.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q13.sql"},"q13.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q14.sql"},"q14.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q15.sql"},"q15.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q16.sql"},"q16.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q17.sql"},"q17.sql")," "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q18.sql"},"q18.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q19.sql"},"q19.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q20.sql"},"q20.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q21.sql"},"q21.sql")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q22.sql"},"q22.sql")," "),(0,r.kt)("h4",{id:"statements-after-the-modification"},(0,r.kt)("strong",{parentName:"h4"},"Statements after the modification")),(0,r.kt)("p",null,"To ensure the repeatability of this test, we recommend that you use the statements after the modification."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/custom/sql/q.zip"},"q.zip")),(0,r.kt)("h3",{id:"8-execute-the-tpc-h-script-to-obtain-the-test-result"},(0,r.kt)("strong",{parentName:"h3"},"8. Execute the TPC-H script to obtain the test result")),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},".out")," file stores the test results. The ",(0,r.kt)("strong",{parentName:"p"},".time")," file records the execution time of each query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ll /data/tpc-h/stonedb/queries/stonedb\n-rw-r--r-- 1 root root   15019 Jun  1 00:55 TPCH_stone_20220531233024.out\n-rw-r--r-- 1 root root    2179 Jun  1 00:57 TPCH_stone_20220531233024.time\n")))}u.isMDXComponent=!0}}]);