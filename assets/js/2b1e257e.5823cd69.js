"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6829],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62432:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"use-mydumper-full-backup",sidebar_position:4.32},l="Use Mydumper for Full Backup",d={unversionedId:"O&M-Guide/backup-and-recovery/use-mydumper-full-backup",id:"O&M-Guide/backup-and-recovery/use-mydumper-full-backup",title:"Use Mydumper for Full Backup",description:"Mydumper introduction",source:"@site/docs/03-O&M-Guide/01-backup-and-recovery/use-mydumper-full-backup.md",sourceDirName:"03-O&M-Guide/01-backup-and-recovery",slug:"/O&M-Guide/backup-and-recovery/use-mydumper-full-backup",permalink:"/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/docs/03-O&M-Guide/01-backup-and-recovery/use-mydumper-full-backup.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1657025517,formattedLastUpdatedAt:"7/5/2022",sidebarPosition:4.32,frontMatter:{id:"use-mydumper-full-backup",sidebar_position:4.32},sidebar:"autoSidebar",previous:{title:"Use mysqldump to Back Up or Recover StoneDB",permalink:"/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore"},next:{title:"Compiling Methods",permalink:"/docs/compiling-methods"}},u={},p=[{value:"Mydumper introduction",id:"mydumper-introduction",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Features",id:"features",level:3},{value:"Use Mydumper",id:"use-mydumper",level:2},{value:"Parameters for mydumer",id:"parameters-for-mydumer",level:3},{value:"Parameters for myloader",id:"parameters-for-myloader",level:3},{value:"Install and use Mydumper",id:"install-and-use-mydumper",level:3},{value:"Generated backup files",id:"generated-backup-files",level:4},{value:"Backup principles",id:"backup-principles",level:3}],m={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-mydumper-for-full-backup"},"Use Mydumper for Full Backup"),(0,r.kt)("h2",{id:"mydumper-introduction"},"Mydumper introduction"),(0,r.kt)("p",null,"Mydumper is a logical backup tool for MySQL. It consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mydumper: exports consistent backup files of MySQL databases."),(0,r.kt)("li",{parentName:"ul"},"myloader: reads backups from mydumper, connects to destination databases, and imports backups. ")),(0,r.kt)("p",null,"Both parts require multithreading capacities."),(0,r.kt)("h3",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parallelism and performance: The tool provides high backup rate. Expensive character set conversion routines are avoided and the overall high efficiency of code is ensured."),(0,r.kt)("li",{parentName:"ul"},"Simplified output management: Separate files are used for tables and metadata is dumped, simplifying data view and parse."),(0,r.kt)("li",{parentName:"ul"},"High consistency: The tool maintains snapshots across all threads and provides accurate positions of primary and secondary logs."),(0,r.kt)("li",{parentName:"ul"},"Manageability: Perl Compatible Regular Expressions (PCRE) can be used to specify whether to include or exclude tables or databases.")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-threaded backup, which generates multiple backup files"),(0,r.kt)("li",{parentName:"ul"},"Consistent snapshots for transactional and non-transactional tables ")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature is supported by versions later than 0.2.2."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fast file compression"),(0,r.kt)("li",{parentName:"ul"},"Export of binlogs"),(0,r.kt)("li",{parentName:"ul"},"Multi-threaded recovery")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature is supported by versions later than 0.2.1."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Function as a daemon to periodically perform snapshots and consistently records binlogs")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This feature is supported by versions later than 0.5.0."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open source (license: GNU GPLv3)")),(0,r.kt)("h2",{id:"use-mydumper"},"Use Mydumper"),(0,r.kt)("h3",{id:"parameters-for-mydumer"},"Parameters for mydumer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mydumper --help\nUsage:\nmydumper [OPTION\u2026] multi-threaded MySQL dumping\n\nHelp Options:\n-?, --help                      Show help options\n\nApplication Options:\n-B, --database                  Database to dump\n-o, --outputdir                 Directory to output files to\n-s, --statement-size            Attempted size of INSERT statement in bytes, default 1000000\n-r, --rows                      Try to split tables into chunks of this many rows. This option turns off --chunk-filesize\n-F, --chunk-filesize            Split tables into chunks of this output file size. This value is in MB\n--max-rows                      Limit the number of rows per block after the table is estimated, default 1000000\n-c, --compress                  Compress output files\n-e, --build-empty-files         Build dump files even if no data available from table\n-i, --ignore-engines            Comma delimited list of storage engines to ignore\n-N, --insert-ignore             Dump rows with INSERT IGNORE\n-m, --no-schemas                Do not dump table schemas with the data and triggers\n-M, --table-checksums           Dump table checksums with the data\n-d, --no-data                   Do not dump table data\n--order-by-primary              Sort the data by Primary Key or Unique key if no primary key exists\n-G, --triggers                  Dump triggers. By default, it do not dump triggers\n-E, --events                    Dump events. By default, it do not dump events\n-R, --routines                  Dump stored procedures and functions. By default, it do not dump stored procedures nor functions\n-W, --no-views                  Do not dump VIEWs\n-k, --no-locks                  Do not execute the temporary shared read lock.  WARNING: This will cause inconsistent backups\n--no-backup-locks               Do not use Percona backup locks\n--less-locking                  Minimize locking time on InnoDB tables.\n--long-query-retries            Retry checking for long queries, default 0 (do not retry)\n--long-query-retry-interval     Time to wait before retrying the long query check in seconds, default 60\n-l, --long-query-guard          Set long query timer in seconds, default 60\n-K, --kill-long-queries         Kill long running queries (instead of aborting)\n-D, --daemon                    Enable daemon mode\n-X, --snapshot-count            number of snapshots, default 2\n-I, --snapshot-interval         Interval between each dump snapshot (in minutes), requires --daemon, default 60\n-L, --logfile                   Log file name to use, by default stdout is used\n--tz-utc                        SET TIME_ZONE='+00:00' at top of dump to allow dumping of TIMESTAMP data when a server has data in different time zones or data is being moved between servers with different time zones, defaults to on use --skip-tz-utc to disable.\n--skip-tz-utc\n--use-savepoints                Use savepoints to reduce metadata locking issues, needs SUPER privilege\n--success-on-1146               Not increment error count and Warning instead of Critical in case of table doesn't exist\n--lock-all-tables               Use LOCK TABLE for all, instead of FTWRL\n-U, --updated-since             Use Update_time to dump only tables updated in the last U days\n--trx-consistency-only          Transactional consistency only\n--complete-insert               Use complete INSERT statements that include column names\n--split-partitions              Dump partitions into separate files. This options overrides the --rows option for partitioned tables.\n--set-names                     Sets the names, use it at your own risk, default binary\n-z, --tidb-snapshot             Snapshot to use for TiDB\n--load-data\n--fields-terminated-by\n--fields-enclosed-by\n--fields-escaped-by             Single character that is going to be used to escape characters in theLOAD DATA stament, default: '\\'\n--lines-starting-by             Adds the string at the begining of each row. When --load-data is usedit is added to the LOAD DATA statement. Its affects INSERT INTO statementsalso when it is used.\n--lines-terminated-by           Adds the string at the end of each row. When --load-data is used it isadded to the LOAD DATA statement. Its affects INSERT INTO statementsalso when it is used.\n--statement-terminated-by       This might never be used, unless you know what are you doing\n--sync-wait                     WSREP_SYNC_WAIT value to set at SESSION level\n--where                         Dump only selected records.\n--no-check-generated-fields     Queries related to generated fields are not going to be executed.It will lead to restoration issues if you have generated columns\n--disk-limits                   Set the limit to pause and resume if determines there is no enough disk space.Accepts values like: '<resume>:<pause>' in MB.For instance: 100:500 will pause when there is only 100MB free and willresume if 500MB are available\n--csv                           Automatically enables --load-data and set variables to export in CSV format.\n-t, --threads                   Number of threads to use, default 4\n-C, --compress-protocol         Use compression on the MySQL connection\n-V, --version                   Show the program version and exit\n-v, --verbose                   Verbosity of output, 0 = silent, 1 = errors, 2 = warnings, 3 = info, default 2\n--defaults-file                 Use a specific defaults file\n--stream                        It will stream over STDOUT once the files has been written\n--no-delete                     It will not delete the files after stream has been completed\n-O, --omit-from-file            File containing a list of database.table entries to skip, one per line (skips before applying regex option)\n-T, --tables-list               Comma delimited table list to dump (does not exclude regex option)\n-h, --host                      The host to connect to\n-u, --user                      Username with the necessary privileges\n-p, --password                  User password\n-a, --ask-password              Prompt For User password\n-P, --port                      TCP/IP port to connect to\n-S, --socket                    UNIX domain socket file to use for connection\n  -x, --regex                     Regular expression for 'db.table' matching\n")),(0,r.kt)("h3",{id:"parameters-for-myloader"},"Parameters for myloader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"myloader --help\nUsage:\n  myloader [OPTION\u2026] multi-threaded MySQL loader\n\nHelp Options:\n  -?, --help                        Show help options\n\nApplication Options:\n  -d, --directory                   Directory of the dump to import\n  -q, --queries-per-transaction     Number of queries per transaction, default 1000\n  -o, --overwrite-tables            Drop tables if they already exist\n  -B, --database                    An alternative database to restore into\n  -s, --source-db                   Database to restore\n  -e, --enable-binlog               Enable binary logging of the restore data\n  --innodb-optimize-keys            Creates the table without the indexes and it adds them at the end\n  --set-names                       Sets the names, use it at your own risk, default binary\n  -L, --logfile                     Log file name to use, by default stdout is used\n  --purge-mode                      This specify the truncate mode which can be: NONE, DROP, TRUNCATE and DELETE\n  --disable-redo-log                Disables the REDO_LOG and enables it after, doesn't check initial status\n  -r, --rows                        Split the INSERT statement into this many rows.\n  --max-threads-per-table           Maximum number of threads per table to use, default 4\n  --skip-triggers                   Do not import triggers. By default, it imports triggers\n  --skip-post                       Do not import events, stored procedures and functions. By default, it imports events, stored procedures nor functions\n  --no-data                         Do not dump or import table data\n  --serialized-table-creation       Table recreation will be executed in serie, one thread at a time\n  --resume                          Expect to find resume file in backup dir and will only process those files\n  -t, --threads                     Number of threads to use, default 4\n  -C, --compress-protocol           Use compression on the MySQL connection\n  -V, --version                     Show the program version and exit\n  -v, --verbose                     Verbosity of output, 0 = silent, 1 = errors, 2 = warnings, 3 = info, default 2\n  --defaults-file                   Use a specific defaults file\n  --stream                          It will stream over STDOUT once the files has been written\n  --no-delete                       It will not delete the files after stream has been completed\n  -O, --omit-from-file              File containing a list of database.table entries to skip, one per line (skips before applying regex option)\n  -T, --tables-list                 Comma delimited table list to dump (does not exclude regex option)\n  -h, --host                        The host to connect to\n  -u, --user                        Username with the necessary privileges\n  -p, --password                    User password\n  -a, --ask-password                Prompt For User password\n  -P, --port                        TCP/IP port to connect to\n  -S, --socket                      UNIX domain socket file to use for connection\n  -x, --regex                       Regular expression for 'db.table' matching\n  --skip-definer                    Removes DEFINER from the CREATE statement. By default, statements are not modified\n\n")),(0,r.kt)("h3",{id:"install-and-use-mydumper"},"Install and use Mydumper"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# On GitHub, download the RPM package or source code package that corresponds to the machine that you use. We recommend you download the RPM package because it can be directly used while the source code package requires compilation. The OS used in the following example is CentOS 7. Therefore, download an el7 version.\n[root@dev tmp]# wget https://github.com/mydumper/mydumper/releases/download/v0.12.1/mydumper-0.12.1-1-zstd.el7.x86_64.rpm\n# Because the downloaded package is a ZSTD file, dependency 'libzstd' is required.\n[root@dev tmp]# yum install libzstd.x86_64 -y\n[root@dev tmp]#rpm -ivh mydumper-0.12.1-1-zstd.el7.x86_64.rpm\nPreparing...                          ################################# [100%]\nUpdating / installing...\n   1:mydumper-0.12.1-1                ################################# [100%]\n\n# Backup library\n[root@dev home]# mydumper -u root -p ******** -P 3306 -h 127.0.0.1 -B zz -o /home/dumper/\n# Recovery library\n[root@dev home]# myloader -u root -p ******** -P 3306 -h 127.0.0.1 -S /stonedb/install/tmp/mysql.sock -B zz -d /home/dumper\n")),(0,r.kt)("h4",{id:"generated-backup-files"},"Generated backup files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[root@dev home]# ll dumper/\ntotal 112\n-rw-r--r--. 1 root root   139 Mar 23 14:24 metadata\n-rw-r--r--. 1 root root    88 Mar 23 14:24 zz-schema-create.sql\n-rw-r--r--. 1 root root 97819 Mar 23 14:24 zz.t_user.00000.sql\n-rw-r--r--. 1 root root     4 Mar 23 14:24 zz.t_user-metadata\n-rw-r--r--. 1 root root   477 Mar 23 14:24 zz.t_user-schema.sql\n[root@dev dumper]# cat metadata\nStarted dump at: 2022-03-23 15:51:40\nSHOW MASTER STATUS:\n        Log: mysql-bin.000002\n        Pos: 4737113\n        GTID:\n\nFinished dump at: 2022-03-23 15:51:40\n[root@dev-myos dumper]# cat zz-schema-create.sql\nCREATE DATABASE /*!32312 IF NOT EXISTS*/ `zz` /*!40100 DEFAULT CHARACTER SET utf8 */;\n[root@dev dumper]# more zz.t_user.00000.sql\n/*!40101 SET NAMES binary*/;\n/*!40014 SET FOREIGN_KEY_CHECKS=0*/;\n/*!40103 SET TIME_ZONE=\'+00:00\' */;\nINSERT INTO `t_user` VALUES(1,"e1195afd-aa7d-11ec-936e-00155d840103","kAMXjvtFJym1S7PAlMJ7",102,62,"2022-03-23 15:50:16")\n,(2,"e11a7719-aa7d-11ec-936e-00155d840103","0ufCd3sXffjFdVPbjOWa",698,44,"2022-03-23 15:50:16")\n.....# The content is not full displayed since it is too long.\n[root@dev dumper]# cat zz.t_user-metadata\n10000\n[root@dev-myos dumper]# cat zz.t_user-schema.sql\n/*!40101 SET NAMES binary*/;\n/*!40014 SET FOREIGN_KEY_CHECKS=0*/;\n\n/*!40103 SET TIME_ZONE=\'+00:00\' */;\nCREATE TABLE `t_user` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `c_user_id` varchar(36) NOT NULL DEFAULT \'\',\n  `c_name` varchar(22) NOT NULL DEFAULT \'\',\n  `c_province_id` int(11) NOT NULL,\n  `c_city_id` int(11) NOT NULL,\n  `create_time` datetime NOT NULL,\n  PRIMARY KEY (`id`),\n  KEY `idx_user_id` (`c_user_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=10001 DEFAULT CHARSET=utf8;\n')),(0,r.kt)("p",null,"The directory contains the following files:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"metadata"),": records the name and position of the binlog file of the backup database at the backup point in time."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the backup is performed on the standby library, this file also records the name and position of the binlog file that has been synchronized from the active libary when the backup is performed."))),(0,r.kt)("p",null,"Each table has two backup files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database-schema-create"),": records the statements for creating the library."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database.table-schema.sql"),": records the table schemas."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database.table.00000.sql"),": records table data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database.table-metadata"),": records table metadata.")),(0,r.kt)("h3",{id:"backup-principles"},"Backup principles"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The main thread executes ",(0,r.kt)("strong",{parentName:"li"},"FLUSH TABLES WITH READ LOCK")," to add a global read-only lock to ensure data consistency."),(0,r.kt)("li",{parentName:"ol"},"The name and position of the binlog file at the current point in time are obtained and recorded to the ",(0,r.kt)("strong",{parentName:"li"},"metadata "),"file to support recovery performed later."),(0,r.kt)("li",{parentName:"ol"},"Multiple (4 by default, customizable) dump threads change the isolation level for transactions to Repeatable Read and enable read-consistent transactions."),(0,r.kt)("li",{parentName:"ol"},"Non-InnoDB tables are exported."),(0,r.kt)("li",{parentName:"ol"},"After data of the non-transaction engine is backed up, the main thread executes ",(0,r.kt)("strong",{parentName:"li"},"UNLOCK TABLES")," to release the global read-only lock."),(0,r.kt)("li",{parentName:"ol"},"InnoDB tables are exported.")))}c.isMDXComponent=!0}}]);