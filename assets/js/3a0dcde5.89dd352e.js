"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4756],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?l.createElement(g,s(s({ref:t},p),{},{components:n})):l.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34319:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return m}});var l=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],r={id:"compile-using-centos7",sidebar_position:5.12},i="Compile StoneDB on CentOS 7",c={unversionedId:"developer-guide/compiling-methods/compile-using-centos7",id:"developer-guide/compiling-methods/compile-using-centos7",title:"Compile StoneDB on CentOS 7",description:"This topic describes how to compile StoneDB on CentOS 7.",source:"@site/../Docs/04-developer-guide/00-compiling-methods/compile-using-centos7.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-centos7",permalink:"/docs/developer-guide/compiling-methods/compile-using-centos7",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/../Docs/04-developer-guide/00-compiling-methods/compile-using-centos7.md",tags:[],version:"current",lastUpdatedBy:"RingsC",lastUpdatedAt:1659602698,formattedLastUpdatedAt:"8/4/2022",sidebarPosition:5.12,frontMatter:{id:"compile-using-centos7",sidebar_position:5.12},sidebar:"autoSidebar",previous:{title:"Overview",permalink:"/docs/developer-guide/compiling-methods/compile-overview"},next:{title:"Compile StoneDB on RHEL 7",permalink:"/docs/developer-guide/compiling-methods/compile-using-redhat7"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Step 1. Install the dependencies",id:"step-1-install-the-dependencies",level:3},{value:"Step 2. Install CMake and third-party libraries",id:"step-2-install-cmake-and-third-party-libraries",level:3},{value:"Step 3. Install GCC 7.3.0",id:"step-3-install-gcc-730",level:3},{value:"Step 4. Compile StoneDB",id:"step-4-compile-stonedb",level:3},{value:"Step 5. Start StoneDB",id:"step-5-start-stonedb",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compile-stonedb-on-centos-7"},"Compile StoneDB on CentOS 7"),(0,o.kt)("p",null,"This topic describes how to compile StoneDB on CentOS 7."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The source code of StoneDB has been downloaded."),(0,o.kt)("p",null,"Download link: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stoneatom/stonedb.git"},"https://github.com/stoneatom/stonedb.git")),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("h3",{id:"step-1-install-the-dependencies"},"Step 1. Install the dependencies"),(0,o.kt)("p",null,"Before installing the dependencies, ensure that the GCC version in use is 4.8.5."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y tree\nyum install -y gcc\nyum install -y gcc-c++\nyum install -y libzstd-devel\nyum install -y make\nyum install -y ncurses\nyum install -y ncurses-devel\nyum install -y bison\nyum install -y libaio\nyum install -y perl\nyum install -y perl-DBI\nyum install -y perl-DBD-MySQL\nyum install -y perl-Time-HiRes\nyum install -y readline-devel\nyum install -y numactl\nyum install -y zlib\nyum install -y zlib-devel\nyum install -y curldevel\nyum install -y openssl\nyum install -y openssl-devel\nyum install -y redhat-lsb-core\nyum install -y git\nyum install -y autoconf\nyum install -y automake\nyum install -y libtool\nyum install -y lrzsz\nyum install -y lz4\nyum install -y lz4-devel\nyum install -y snappy\nyum install -y snappy-devel\nyum install -y bzip2\nyum install -y bzip2-devel\nyum install -y zstd\n")),(0,o.kt)("h3",{id:"step-2-install-cmake-and-third-party-libraries"},"Step 2. Install CMake and third-party libraries"),(0,o.kt)("p",null,"Before compiling StoneDB, install CMake 3.7 or later and the following third-party libraries: marisa, RocksDB, and Boost."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install CMake.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install marisa.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install RocksDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v4.13.tar.gz\ntar -zxvf v4.13.tar.gz\ncd rocksdb-4.13\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Boost is automatically installed when the ",(0,o.kt)("strong",{parentName:"p"},"stonedb_build.sh")," script is executed in ",(0,o.kt)("strong",{parentName:"p"},"Step 4"),". "))),(0,o.kt)("h3",{id:"step-3-install-gcc-730"},"Step 3. Install GCC 7.3.0"),(0,o.kt)("p",null,"Before executing ",(0,o.kt)("strong",{parentName:"p"},"stonedb_build.sh")," to compile StoneDB, you must ensure the GCC version is 7.3.0."),(0,o.kt)("p",null,"You can run the following command to check the GCC version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,o.kt)("p",null,"If the version is earlier than 7.3.0, perform the following steps to upgrade GCC."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the SCL utility.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centos-release-scl scl-utils-build -y\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install GCC, GCC-C++, or GDB of v7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install devtoolset-7-gcc.x86_64 devtoolset-7-gcc-c++.x86_64 devtoolset-7-gcc-gdb-plugin.x86_64 -y\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Switch the version to 7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"scl enable devtoolset-7 bash\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check that the version is switched to 7.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,o.kt)("h3",{id:"step-4-compile-stonedb"},"Step 4. Compile StoneDB"),(0,o.kt)("p",null,"Execute the following script to compile StoneDB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb2022/scripts\n./stonedb_build.sh\n")),(0,o.kt)("p",null,"After the compilation is complete, a folder named ",(0,o.kt)("strong",{parentName:"p"},"/stonedb56")," is generated."),(0,o.kt)("h3",{id:"step-5-start-stonedb"},"Step 5. Start StoneDB"),(0,o.kt)("p",null,"Perform the following steps to start StoneDB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a group, a user, and relevant directories.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\nmkdir -p /stonedb56/install/{log/,tmp/,binlog/,data/innodb} && chown -R mysql:mysql /stonedb56\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start StoneDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysqld_safe --defaults-file=/stonedb56/install/stonedb.cnf --user=mysql &\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Log in to StoneDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| test               |\n+--------------------+\n4 rows in set (0.08 sec)\n")))}u.isMDXComponent=!0}}]);