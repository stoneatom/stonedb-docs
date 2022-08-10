"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9697],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(t),c=s,b=p["".concat(i,".").concat(c)]||p[c]||m[c]||o;return t?a.createElement(b,l(l({ref:n},u),{},{components:t})):a.createElement(b,l({ref:n},u))}));function c(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,l=new Array(o);l[0]=p;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48660:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return m}});var a=t(87462),s=t(63366),o=(t(67294),t(3905)),l=["components"],r={id:"use-mysqldump-backup-and-restore",sidebar_position:4.31},i="\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dStoneDB",d={unversionedId:"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",id:"O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",title:"\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dStoneDB",description:"mysqldump\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/01-backup-and-recovery/use-mysqldump-backup-and-restore.md",sourceDirName:"03-O&M-Guide/01-backup-and-recovery",slug:"/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/01-backup-and-recovery/use-mysqldump-backup-and-restore.md",tags:[],version:"current",lastUpdatedBy:"fuxiang",lastUpdatedAt:1660119554,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:4.31,frontMatter:{id:"use-mysqldump-backup-and-restore",sidebar_position:4.31},sidebar:"autoSidebar",previous:{title:"Prometheus+Grafana\u642d\u5efaMySQL/StoneDB\u76d1\u63a7\u5e73\u53f0",permalink:"/zh/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor"},next:{title:"MySQL\u5168\u91cf\u6570\u636e\u5907\u4efd-mydumper",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup"}},u={},m=[{value:"mysqldump\u4ecb\u7ecd",id:"mysqldump\u4ecb\u7ecd",level:2},{value:"\u5907\u4efdStoneDB\u6ce8\u610f\u4e8b\u9879",id:"\u5907\u4efdstonedb\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5907\u4efd",id:"\u5907\u4efd",level:3},{value:"\u521b\u5efa\u5907\u4efd\u5e93\u8868\u548c\u6d4b\u8bd5\u6570\u636e",id:"\u521b\u5efa\u5907\u4efd\u5e93\u8868\u548c\u6d4b\u8bd5\u6570\u636e",level:4},{value:"\u4f7f\u7528mysqldump \u5907\u4efd\u6307\u5b9a\u5e93",id:"\u4f7f\u7528mysqldump-\u5907\u4efd\u6307\u5b9a\u5e93",level:4},{value:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u7ed3\u6784",id:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u7ed3\u6784",level:4},{value:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u6570\u636e(\u4e0d\u5305\u542b\u8868\u7ed3\u6784)",id:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u6570\u636e\u4e0d\u5305\u542b\u8868\u7ed3\u6784",level:4},{value:"\u4f7f\u7528mysqldump \u5907\u4efd\u9664\u7cfb\u7edf\u5e93\uff08mysql\u3001performation_schema\u3001information_schema\uff09\u5916\u5176\u4ed6\u5e93",id:"\u4f7f\u7528mysqldump-\u5907\u4efd\u9664\u7cfb\u7edf\u5e93mysqlperformation_schemainformation_schema\u5916\u5176\u4ed6\u5e93",level:4},{value:"\u6062\u590d",id:"\u6062\u590d",level:3},{value:"\u6570\u636e\u5bfc\u5165\u5230StoneDB",id:"\u6570\u636e\u5bfc\u5165\u5230stonedb",level:4}],p={toc:m};function c(e){var n=e.components,t=(0,s.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dstonedb"},"\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dStoneDB"),(0,o.kt)("h2",{id:"mysqldump\u4ecb\u7ecd"},"mysqldump\u4ecb\u7ecd"),(0,o.kt)("p",null,"mysqldump\u662fMySQL \u6267\u884c\u903b\u8f91\u5907\u4efd\u7684\u5de5\u5177\uff0c\u6267\u884cmysqldump\u540e\u4f1a\u751f\u6210\u4e00\u7ec4SQL\u8bed\u53e5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e9b\u8bed\u53e5\u6765\u91cd\u73b0\u539f\u59cb\u6570\u636e\u5e93\u5b9a\u4e49\u7684\u5e93\u8868\u6570\u636e\uff0c\u5b83\u53ef\u4ee5\u8f6c\u50a8\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u672c\u5730MySQL\u6570\u636e\u5e93\u6216\u8005\u8fdc\u7a0b\u53ef\u8bbf\u95ee\u7684\u6570\u636e\u5e93\u5907\u4efd\u3002mysqldump\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003MySQL\u5b98\u65b9\u6587\u6863\u8bf4\u660e\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.6/en/mysqldump.html"},"4.5.4 mysqldump \u2014 A Database Backup Program"),"\uff0c\u6216\u8005\u53c2\u8003\u4ee5\u4e0bmysqldump \u4f7f\u7528\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# mysqldump --help\nmysqldump  Ver 10.13 Distrib 5.6.24-StoneDB, for Linux (x86_64)\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nDumping structure and contents of MySQL databases and tables.\nUsage: mysqldump [OPTIONS] database [tables]\nOR     mysqldump [OPTIONS] --databases [OPTIONS] DB1 [DB2 DB3...]\nOR     mysqldump [OPTIONS] --all-databases [OPTIONS]\n\nDefault options are read from the following files in the given order:\n/etc/stonedb.cnf /etc/mysql/stonedb.cnf /stonedb56/install/stonedb.cnf ~/.stonedb.cnf\nThe following groups are read: mysqldump client\nThe following options may be given as the first argument:\n--print-defaults        Print the program argument list and exit.\n--no-defaults           Don't read default options from any option file,\n                        except for login file.\n--defaults-file=#       Only read default options from the given file #.\n--defaults-extra-file=# Read this file after the global files are read.\n--defaults-group-suffix=#\n                        Also read groups with concat(group, suffix)\n--login-path=#          Read this path from the login file.\n  -A, --all-databases Dump all the databases. This will be same as --databases\n                      with all databases selected.\n  -Y, --all-tablespaces\n                      Dump all the tablespaces.\n  -y, --no-tablespaces\n                      Do not dump any tablespace information.\n  --add-drop-database Add a DROP DATABASE before each create.\n  --add-drop-table    Add a DROP TABLE before each create.\n                      (Defaults to on; use --skip-add-drop-table to disable.)\n  --add-drop-trigger  Add a DROP TRIGGER before each create.\n  --add-locks         Add locks around INSERT statements.\n                      (Defaults to on; use --skip-add-locks to disable.)\n  --allow-keywords    Allow creation of column names that are keywords.\n  --apply-slave-statements\n                      Adds 'STOP SLAVE' prior to 'CHANGE MASTER' and 'START\n                      SLAVE' to bottom of dump.\n  --bind-address=name IP address to bind to.\n  --character-sets-dir=name\n                      Directory for character set files.\n  -i, --comments      Write additional information.\n                      (Defaults to on; use --skip-comments to disable.)\n  --compatible=name   Change the dump to be compatible with a given mode. By\n                      default tables are dumped in a format optimized for\n                      MySQL. Legal modes are: ansi, mysql323, mysql40,\n                      postgresql, oracle, mssql, db2, maxdb, no_key_options,\n                      no_table_options, no_field_options. One can use several\n                      modes separated by commas. Note: Requires MySQL server\n                      version 4.1.0 or higher. This option is ignored with\n                      earlier server versions.\n  --compact           Give less verbose output (useful for debugging). Disables\n                      structure comments and header/footer constructs.  Enables\n                      options --skip-add-drop-table --skip-add-locks\n                      --skip-comments --skip-disable-keys --skip-set-charset.\n  -c, --complete-insert\n                      Use complete insert statements.\n  -C, --compress      Use compression in server/client protocol.\n  -a, --create-options\n                      Include all MySQL specific create options.\n                      (Defaults to on; use --skip-create-options to disable.)\n  -B, --databases     Dump several databases. Note the difference in usage; in\n                      this case no tables are given. All name arguments are\n                      regarded as database names. 'USE db_name;' will be\n                      included in the output.\n  -#, --debug[=#]     This is a non-debug version. Catch this and exit.\n  --debug-check       Check memory and open file usage at exit.\n  --debug-info        Print some debug info at exit.\n  --default-character-set=name\n                      Set the default character set.\n  --delayed-insert    Insert rows with INSERT DELAYED.\n  --delete-master-logs\n                      Delete logs on master after backup. This automatically\n                      enables --master-data.\n  -K, --disable-keys  '/*!40000 ALTER TABLE tb_name DISABLE KEYS */; and\n                      '/*!40000 ALTER TABLE tb_name ENABLE KEYS */; will be put\n                      in the output.\n                      (Defaults to on; use --skip-disable-keys to disable.)\n  --dump-slave[=#]    This causes the binary log position and filename of the\n                      master to be appended to the dumped data output. Setting\n                      the value to 1, will printit as a CHANGE MASTER command\n                      in the dumped data output; if equal to 2, that command\n                      will be prefixed with a comment symbol. This option will\n                      turn --lock-all-tables on, unless --single-transaction is\n                      specified too (in which case a global read lock is only\n                      taken a short time at the beginning of the dump - don't\n                      forget to read about --single-transaction below). In all\n                      cases any action on logs will happen at the exact moment\n                      of the dump.Option automatically turns --lock-tables off.\n  -E, --events        Dump events.\n  -e, --extended-insert\n                      Use multiple-row INSERT syntax that include several\n                      VALUES lists.\n                      (Defaults to on; use --skip-extended-insert to disable.)\n  --fields-terminated-by=name\n                      Fields in the output file are terminated by the given\n                      string.\n  --fields-enclosed-by=name\n                      Fields in the output file are enclosed by the given\n                      character.\n  --fields-optionally-enclosed-by=name\n                      Fields in the output file are optionally enclosed by the\n                      given character.\n  --fields-escaped-by=name\n                      Fields in the output file are escaped by the given\n                      character.\n  -F, --flush-logs    Flush logs file in server before starting dump. Note that\n                      if you dump many databases at once (using the option\n                      --databases= or --all-databases), the logs will be\n                      flushed for each database dumped. The exception is when\n                      using --lock-all-tables or --master-data: in this case\n                      the logs will be flushed only once, corresponding to the\n                      moment all tables are locked. So if you want your dump\n                      and the log flush to happen at the same exact moment you\n                      should use --lock-all-tables or --master-data with\n                      --flush-logs.\n  --flush-privileges  Emit a FLUSH PRIVILEGES statement after dumping the mysql\n                      database.  This option should be used any time the dump\n                      contains the mysql database and any other database that\n                      depends on the data in the mysql database for proper\n                      restore.\n  -f, --force         Continue even if we get an SQL error.\n  -?, --help          Display this help message and exit.\n  --hex-blob          Dump binary strings (BINARY, VARBINARY, BLOB) in\n                      hexadecimal format.\n  -h, --host=name     Connect to host.\n  --ignore-table=name Do not dump the specified table. To specify more than one\n                      table to ignore, use the directive multiple times, once\n                      for each table.  Each table must be specified with both\n                      database and table names, e.g.,\n                      --ignore-table=database.table.\n  --include-master-host-port\n                      Adds 'MASTER_HOST=<host>, MASTER_PORT=<port>' to 'CHANGE\n                      MASTER TO..' in dump produced with --dump-slave.\n  --insert-ignore     Insert rows with INSERT IGNORE.\n  --lines-terminated-by=name\n                      Lines in the output file are terminated by the given\n                      string.\n  -x, --lock-all-tables\n                      Locks all tables across all databases. This is achieved\n                      by taking a global read lock for the duration of the\n                      whole dump. Automatically turns --single-transaction and\n                      --lock-tables off.\n  -l, --lock-tables   Lock all tables for read.\n                      (Defaults to on; use --skip-lock-tables to disable.)\n  --log-error=name    Append warnings and errors to given file.\n  --master-data[=#]   This causes the binary log position and filename to be\n                      appended to the output. If equal to 1, will print it as a\n                      CHANGE MASTER command; if equal to 2, that command will\n                      be prefixed with a comment symbol. This option will turn\n                      --lock-all-tables on, unless --single-transaction is\n                      specified too (in which case a global read lock is only\n                      taken a short time at the beginning of the dump; don't\n                      forget to read about --single-transaction below). In all\n                      cases, any action on logs will happen at the exact moment\n                      of the dump. Option automatically turns --lock-tables\n                      off.\n  --max-allowed-packet=#\n                      The maximum packet length to send to or receive from\n                      server.\n  --net-buffer-length=#\n                      The buffer size for TCP/IP and socket communication.\n  --no-autocommit     Wrap tables with autocommit/commit statements.\n  -n, --no-create-db  Suppress the CREATE DATABASE ... IF EXISTS statement that\n                      normally is output for each dumped database if\n                      --all-databases or --databases is given.\n  -t, --no-create-info\n                      Don't write table creation info.\n  -d, --no-data       No row information.\n  -N, --no-set-names  Same as --skip-set-charset.\n  --opt               Same as --add-drop-table, --add-locks, --create-options,\n                      --quick, --extended-insert, --lock-tables, --set-charset,\n                      and --disable-keys. Enabled by default, disable with\n                      --skip-opt.\n  --order-by-primary  Sorts each table's rows by primary key, or first unique\n                      key, if such a key exists.  Useful when dumping a MyISAM\n                      table to be loaded into an InnoDB table, but will make\n                      the dump itself take considerably longer.\n  -p, --password[=name]\n                      Password to use when connecting to server. If password is\n                      not given it's solicited on the tty.\n  -P, --port=#        Port number to use for connection.\n  --protocol=name     The protocol to use for connection (tcp, socket, pipe,\n                      memory).\n  -q, --quick         Don't buffer query, dump directly to stdout.\n                      (Defaults to on; use --skip-quick to disable.)\n  -Q, --quote-names   Quote table and column names with backticks (`).\n                      (Defaults to on; use --skip-quote-names to disable.)\n  --replace           Use REPLACE INTO instead of INSERT INTO.\n  -r, --result-file=name\n                      Direct output to a given file. This option should be used\n                      in systems (e.g., DOS, Windows) that use carriage-return\n                      linefeed pairs (\\r\\n) to separate text lines. This option\n                      ensures that only a single newline is used.\n  -R, --routines      Dump stored routines (functions and procedures).\n  --set-charset       Add 'SET NAMES default_character_set' to the output.\n                      (Defaults to on; use --skip-set-charset to disable.)\n  --set-gtid-purged[=name]\n                      Add 'SET @@GLOBAL.GTID_PURGED' to the output. Possible\n                      values for this option are ON, OFF and AUTO. If ON is\n                      used and GTIDs are not enabled on the server, an error is\n                      generated. If OFF is used, this option does nothing. If\n                      AUTO is used and GTIDs are enabled on the server, 'SET\n                      @@GLOBAL.GTID_PURGED' is added to the output. If GTIDs\n                      are disabled, AUTO does nothing. If no value is supplied\n                      then the default (AUTO) value will be considered.\n  --single-transaction\n                      Creates a consistent snapshot by dumping all tables in a\n                      single transaction. Works ONLY for tables stored in\n                      storage engines which support multiversioning (currently\n                      only InnoDB does); the dump is NOT guaranteed to be\n                      consistent for other storage engines. While a\n                      --single-transaction dump is in process, to ensure a\n                      valid dump file (correct table contents and binary log\n                      position), no other connection should use the following\n                      statements: ALTER TABLE, DROP TABLE, RENAME TABLE,\n                      TRUNCATE TABLE, as consistent snapshot is not isolated\n                      from them. Option automatically turns off --lock-tables.\n  --dump-date         Put a dump date to the end of the output.\n                      (Defaults to on; use --skip-dump-date to disable.)\n  --skip-opt          Disable --opt. Disables --add-drop-table, --add-locks,\n                      --create-options, --quick, --extended-insert,\n                      --lock-tables, --set-charset, and --disable-keys.\n  -S, --socket=name   The socket file to use for connection.\n  --secure-auth       Refuse client connecting to server if it uses old\n                      (pre-4.1.1) protocol.\n                      (Defaults to on; use --skip-secure-auth to disable.)\n  --ssl               Enable SSL for connection (automatically enabled with\n                      other flags).\n  --ssl-ca=name       CA file in PEM format (check OpenSSL docs, implies\n                      --ssl).\n  --ssl-capath=name   CA directory (check OpenSSL docs, implies --ssl).\n  --ssl-cert=name     X509 cert in PEM format (implies --ssl).\n  --ssl-cipher=name   SSL cipher to use (implies --ssl).\n  --ssl-key=name      X509 key in PEM format (implies --ssl).\n  --ssl-crl=name      Certificate revocation list (implies --ssl).\n  --ssl-crlpath=name  Certificate revocation list path (implies --ssl).\n  --ssl-verify-server-cert\n                      Verify server's \"Common Name\" in its cert against\n                      hostname used when connecting. This option is disabled by\n                      default.\n  -T, --tab=name      Create tab-separated textfile for each table to given\n                      path. (Create .sql and .txt files.) NOTE: This only works\n                      if mysqldump is run on the same machine as the mysqld\n                      server.\n  --tables            Overrides option --databases (-B).\n  --triggers          Dump triggers for each dumped table.\n                      (Defaults to on; use --skip-triggers to disable.)\n  --tz-utc            SET TIME_ZONE='+00:00' at top of dump to allow dumping of\n                      TIMESTAMP data when a server has data in different time\n                      zones or data is being moved between servers with\n                      different time zones.\n                      (Defaults to on; use --skip-tz-utc to disable.)\n  -u, --user=name     User for login if not current user.\n  -v, --verbose       Print info about the various stages.\n  -V, --version       Output version information and exit.\n  -w, --where=name    Dump only selected records. Quotes are mandatory.\n  -X, --xml           Dump a database as well formed XML.\n  --plugin-dir=name   Directory for client-side plugins.\n  --default-auth=name Default authentication client-side plugin to use.\n\nVariables (--variable-name=value)\nand boolean options {FALSE|TRUE}  Value (after reading options)\n--------------------------------- ----------------------------------------\nall-databases                     FALSE\nall-tablespaces                   FALSE\nno-tablespaces                    FALSE\nadd-drop-database                 FALSE\nadd-drop-table                    TRUE\nadd-drop-trigger                  FALSE\nadd-locks                         TRUE\nallow-keywords                    FALSE\napply-slave-statements            FALSE\nbind-address                      (No default value)\ncharacter-sets-dir                (No default value)\ncomments                          TRUE\ncompatible                        (No default value)\ncompact                           FALSE\ncomplete-insert                   FALSE\ncompress                          FALSE\ncreate-options                    TRUE\ndatabases                         FALSE\ndebug-check                       FALSE\ndebug-info                        FALSE\ndefault-character-set             utf8\ndelayed-insert                    FALSE\ndelete-master-logs                FALSE\ndisable-keys                      TRUE\ndump-slave                        0\nevents                            FALSE\nextended-insert                   TRUE\nfields-terminated-by              (No default value)\nfields-enclosed-by                (No default value)\nfields-optionally-enclosed-by     (No default value)\nfields-escaped-by                 (No default value)\nflush-logs                        FALSE\nflush-privileges                  FALSE\nforce                             FALSE\nhex-blob                          FALSE\nhost                              (No default value)\ninclude-master-host-port          FALSE\ninsert-ignore                     FALSE\nlines-terminated-by               (No default value)\nlock-all-tables                   FALSE\nlock-tables                       TRUE\nlog-error                         (No default value)\nmaster-data                       0\nmax-allowed-packet                536870912\nnet-buffer-length                 1046528\nno-autocommit                     FALSE\nno-create-db                      FALSE\nno-create-info                    FALSE\nno-data                           FALSE\norder-by-primary                  FALSE\nport                              3308\nquick                             TRUE\nquote-names                       TRUE\nreplace                           FALSE\nroutines                          FALSE\nset-charset                       TRUE\nsingle-transaction                FALSE\ndump-date                         TRUE\nsocket                            /stonedb56/install/tmp/mysql.sock\nsecure-auth                       TRUE\nssl                               FALSE\nssl-ca                            (No default value)\nssl-capath                        (No default value)\nssl-cert                          (No default value)\nssl-cipher                        (No default value)\nssl-key                           (No default value)\nssl-crl                           (No default value)\nssl-crlpath                       (No default value)\nssl-verify-server-cert            FALSE\ntab                               (No default value)\ntriggers                          TRUE\ntz-utc                            TRUE\nuser                              (No default value)\nverbose                           FALSE\nwhere                             (No default value)\nplugin-dir                        (No default value)\ndefault-auth                      (No default value)\n")),(0,o.kt)("h2",{id:"\u5907\u4efdstonedb\u6ce8\u610f\u4e8b\u9879"},"\u5907\u4efdStoneDB\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,"StoneDB\u4e0d\u652f\u6301lock tables \u64cd\u4f5c\uff0c\u6240\u4ee5\u9700\u8981\u5728\u5907\u4efd\u65f6\u52a0\u4e0a--skip-opt \u6216\u8005--skip-add-locks \u53c2\u6570\uff0c\u53bb\u9664\u5907\u4efd\u6587\u4ef6\u4e2d\u7684LOCK TABLES ",(0,o.kt)("inlineCode",{parentName:"p"},"xxxx")," WRITE;  \u5426\u5219\u5907\u4efd\u6570\u636e\u5c06\u65e0\u6cd5\u5bfc\u5165\u5230StoneDB\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,o.kt)("h3",{id:"\u5907\u4efd"},"\u5907\u4efd"),(0,o.kt)("h4",{id:"\u521b\u5efa\u5907\u4efd\u5e93\u8868\u548c\u6d4b\u8bd5\u6570\u636e"},"\u521b\u5efa\u5907\u4efd\u5e93\u8868\u548c\u6d4b\u8bd5\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# /stonedb56/install/bin/mysql -uroot -p***** -P3306\nmysql: [Warning] Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 878\nServer version: 5.7.36-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> create database dumpdb;\nQuery OK, 1 row affected (0.00 sec)\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| dumpdb             |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n8 rows in set (0.00 sec)\n\nmysql> use dumpdb\nDatabase changed\n\nmysql> create table dumptb(id int primary key,vname varchar(20))engine=StoneDB;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into dumpdb.dumptb(id,vname) values(1,'zhangsan'),(2,'lisi'),(3,'wangwu');\nQuery OK, 3 rows affected (0.00 sec)\nRecords: 3  Duplicates: 0  Warnings: 0\n\nmysql> select * from dumpdb.dumptb;\n+----+----------+\n| id | vname    |\n+----+----------+\n|  1 | zhangsan |\n|  2 | lisi     |\n|  3 | wangwu   |\n+----+----------+\n3 rows in set (0.01 sec)\n\n\n")),(0,o.kt)("h4",{id:"\u4f7f\u7528mysqldump-\u5907\u4efd\u6307\u5b9a\u5e93"},"\u4f7f\u7528mysqldump \u5907\u4efd\u6307\u5b9a\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb56/install/bin/mysqldump  -uroot -p***** -P3306 --skip-opt --master-data=2 --single-transaction --set-gtid-purged=off  --databases dumpdb > /tmp/dumpdb.sql\n")),(0,o.kt)("h4",{id:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u7ed3\u6784"},"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/stonedb56/install/bin/mysqldump  -uroot -p***** -P3306   -d --databases dumpdb > /tmp/dumpdb_table.sql\n")),(0,o.kt)("h4",{id:"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u6570\u636e\u4e0d\u5305\u542b\u8868\u7ed3\u6784"},"\u5907\u4efd\u6307\u5b9a\u5e93\u7684\u8868\u6570\u636e(\u4e0d\u5305\u542b\u8868\u7ed3\u6784)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/stonedb56/install/bin/mysqldump  -uroot -p***** -P3306 --skip-opt --master-data=2 --single-transaction --set-gtid-purged=off  -t dumpdb > /tmp/dumpdb_table.sql\n")),(0,o.kt)("h4",{id:"\u4f7f\u7528mysqldump-\u5907\u4efd\u9664\u7cfb\u7edf\u5e93mysqlperformation_schemainformation_schema\u5916\u5176\u4ed6\u5e93"},"\u4f7f\u7528mysqldump \u5907\u4efd\u9664\u7cfb\u7edf\u5e93\uff08mysql\u3001performation_schema\u3001information_schema\uff09\u5916\u5176\u4ed6\u5e93"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/stonedb56/install/bin/mysql  -uroot -p****** -P3306 -e "show databases;" | grep -Ev "sys|performance_schema|information_schema|Database|test" | xargs /stonedb56/install/bin/mysqldump  -uroot -p****** -P3306 --master-data=1 --skip-opt --databases > /tmp/ig_sysdb.sql\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"\u6269\u5c55"))),(0,o.kt)("p",null,"\u4f7f\u7528Mysqldump \u5907\u4efdinnodb \u5bfc\u5165StoneDB \u8868\u5c0f\u7684\u53ef\u4ee5\u57fa\u4e8e\u4e0a\u9762\u7684mysqldump \u5907\u4efd\uff0c\u5927\u8868\u5efa\u8bae\u5355\u72ec\u5907\u4efd\u8868\u7ed3\u6784\u548c\u6570\u636e\u5907\u4efd\u6587\u4ef6\uff0c\u7136\u540e\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"sed -i 's/\u539f\u5b57\u7b26\u4e32/\u65b0\u5b57\u7b26\u4e32/g' \u6587\u4ef6")," \u547d\u4ee4\u4fee\u6539\u5907\u4efd\u6587\u4ef6\u4e2d\u7684\u5f15\u64ce,\u4f8b\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sed -i 's/ENGINE=InnoDB/ENGINE=STONEDB/g' \u6587\u4ef6\n")),(0,o.kt)("p",null,"\u4fee\u6539\u5f15\u64ce\u540e\u6309\u7167\u4e0b\u9762\u6062\u590d\u65b9\u5f0f\u5bfc\u5165\u5230StoneDB\u3002"),(0,o.kt)("h3",{id:"\u6062\u590d"},"\u6062\u590d"),(0,o.kt)("h4",{id:"\u6570\u636e\u5bfc\u5165\u5230stonedb"},"\u6570\u636e\u5bfc\u5165\u5230StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/stonedb56/install/bin/mysql  -uroot -p****** -P3306 dumpdb < /tmp/dumpdb.sql\n")))}c.isMDXComponent=!0}}]);