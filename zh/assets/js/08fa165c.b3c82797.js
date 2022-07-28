"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1068],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)t=s[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,g=m["".concat(i,".").concat(p)]||m[p]||d[p]||s;return t?l.createElement(g,o(o({ref:n},u),{},{components:t})):l.createElement(g,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39573:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var l=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],r={id:"compile-using-centos7",sidebar_position:5.12},i="CentOS 7 \u4e0b\u7f16\u8bd1StoneDB",c={unversionedId:"developer-guide/compiling-methods/compile-using-centos7",id:"developer-guide/compiling-methods/compile-using-centos7",title:"CentOS 7 \u4e0b\u7f16\u8bd1StoneDB",description:"\u4e0b\u8f7d\u6e90\u7801\u5305",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-centos7.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-centos7",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-centos7",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-centos7.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1658995803,formattedLastUpdatedAt:"2022/7/28",sidebarPosition:5.12,frontMatter:{id:"compile-using-centos7",sidebar_position:5.12},sidebar:"autoSidebar",previous:{title:"\u7f16\u8bd1\u65b9\u6cd5\u7efc\u8ff0",permalink:"/zh/docs/developer-guide/compiling-methods/compile-overview"},next:{title:"RedHat 7 \u4e0b\u7f16\u8bd1StoneDB",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7"}},u={},d=[{value:"\u4e0b\u8f7d\u6e90\u7801\u5305",id:"\u4e0b\u8f7d\u6e90\u7801\u5305",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u5305",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56\u5305",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5 gcc 7.3.0",id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5-gcc-730",level:2},{value:"1. \u5b89\u88c5 scl \u6e90",id:"1-\u5b89\u88c5-scl-\u6e90",level:3},{value:"2. \u5b89\u88c5 7.3.0 \u7248\u672c\u7684 gcc\u3001gcc-c++\u3001gdb",id:"2-\u5b89\u88c5-730-\u7248\u672c\u7684-gccgcc-cgdb",level:3},{value:"3. \u5207\u6362\u81f3 7.3.0 \u7248\u672c",id:"3-\u5207\u6362\u81f3-730-\u7248\u672c",level:3},{value:"4. \u6267\u884c\u7248\u672c\u68c0\u67e5\uff0c\u786e\u4fdd\u662f7.3.0\u4ee5\u4e0a",id:"4-\u6267\u884c\u7248\u672c\u68c0\u67e5\u786e\u4fdd\u662f730\u4ee5\u4e0a",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e09\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"1. \u5b89\u88c5 cmake",id:"1-\u5b89\u88c5-cmake",level:3},{value:"2. \u5b89\u88c5 make",id:"2-\u5b89\u88c5-make",level:3},{value:"3. \u5b89\u88c5 marisa",id:"3-\u5b89\u88c5-marisa",level:3},{value:"4. \u5b89\u88c5 rocksdb",id:"4-\u5b89\u88c5-rocksdb",level:3},{value:"5. \u5b89\u88c5 boost",id:"5-\u5b89\u88c5-boost",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u6267\u884c\u7f16\u8bd1",id:"\u7b2c\u56db\u6b65\u6267\u884c\u7f16\u8bd1",level:2},{value:"\u7b2c\u4e94\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b",id:"\u7b2c\u4e94\u6b65\u542f\u52a8\u5b9e\u4f8b",level:2},{value:"1. \u521b\u5efa\u7528\u6237",id:"1-\u521b\u5efa\u7528\u6237",level:3},{value:"2. \u6267\u884c\u811a\u672creinstall.sh",id:"2-\u6267\u884c\u811a\u672creinstallsh",level:3},{value:"3. \u6267\u884c\u767b\u5f55",id:"3-\u6267\u884c\u767b\u5f55",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"centos-7-\u4e0b\u7f16\u8bd1stonedb"},"CentOS 7 \u4e0b\u7f16\u8bd1StoneDB"),(0,s.kt)("h2",{id:"\u4e0b\u8f7d\u6e90\u7801\u5305"},"\u4e0b\u8f7d\u6e90\u7801\u5305"),(0,s.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/stoneatom/stonedb.git"},"https://github.com/stoneatom/stonedb.git"),"\n\u5b8c\u6210\u6e90\u7801\u5305\u4e0b\u8f7d\u540e\uff0c\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u4e94\u4e2a\u6b65\u9aa4\uff0c\u5b8c\u6210\u7f16\u8bd1\u5de5\u4f5c\n\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u6587\u4ef6\n\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5gcc 7.3.0\n\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93\n\u7b2c\u56db\u6b65\uff1a\u6267\u884c\u7f16\u8bd1\n\u7b2c\u4e94\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b"),(0,s.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56\u5305"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y tree\nyum install -y gcc\nyum install -y gcc-c++\nyum install -y libzstd-devel\nyum install -y make\nyum install -y ncurses\nyum install -y ncurses-devel\nyum install -y bison\nyum install -y libaio\nyum install -y perl\nyum install -y perl-DBI\nyum install -y perl-DBD-MySQL\nyum install -y perl-Time-HiRes\nyum install -y readline-devel\nyum install -y numactl\nyum install -y zlib\nyum install -y zlib-devel\nyum install -y openssl\nyum install -y openssl-devel\nyum install -y redhat-lsb-core\nyum install -y git\nyum install -y autoconf\nyum install -y automake\nyum install -y libtool\nyum install -y lrzsz\nyum install -y lz4\nyum install -y lz4-devel\nyum install -y snappy\nyum install -y snappy-devel\nyum install -y bzip2\nyum install -y bzip2-devel\nyum install -y zstd\nyum install -y libedit\nyum install -y libedit-devel\nyum install -y libaio-devel\nyum install -y libicu\nyum install -y libicu-devel\n")),(0,s.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5-gcc-730"},"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5 gcc 7.3.0"),(0,s.kt)("p",null,"\u6267\u884cstonedb_build.sh\u7f16\u8bd1\u5b89\u88c5\u6570\u636e\u5e93\u8981\u6c42\u7248\u672c\u5728 gcc  7.3.0 \u3002\n\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u68c0\u67e5\u5f53\u524d gcc \u7248\u672c\u662f\u5426\u7b26\u5408\u5b89\u88c5\u8981\u6c42"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,s.kt)("p",null,"\u5982\u679c\u7248\u672c\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5c06 gcc \u5207\u6362\u4e3a\u6b63\u786e\u7248\u672c\u3002"),(0,s.kt)("h3",{id:"1-\u5b89\u88c5-scl-\u6e90"},"1. \u5b89\u88c5 scl \u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centos-release-scl scl-utils-build -y\n")),(0,s.kt)("h3",{id:"2-\u5b89\u88c5-730-\u7248\u672c\u7684-gccgcc-cgdb"},"2. \u5b89\u88c5 7.3.0 \u7248\u672c\u7684 gcc\u3001gcc-c++\u3001gdb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install devtoolset-7-gcc.x86_64 devtoolset-7-gcc-c++.x86_64 devtoolset-7-gcc-gdb-plugin.x86_64 -y\n")),(0,s.kt)("h3",{id:"3-\u5207\u6362\u81f3-730-\u7248\u672c"},"3. \u5207\u6362\u81f3 7.3.0 \u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"scl enable devtoolset-7 bash\n")),(0,s.kt)("h3",{id:"4-\u6267\u884c\u7248\u672c\u68c0\u67e5\u786e\u4fdd\u662f730\u4ee5\u4e0a"},"4. \u6267\u884c\u7248\u672c\u68c0\u67e5\uff0c\u786e\u4fdd\u662f7.3.0\u4ee5\u4e0a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,s.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"),(0,s.kt)("p",null,"\u5bf9 StoneDB \u6267\u884c\u7f16\u8bd1\u4f9d\u8d56\u4e8e\u7b2c\u4e09\u65b9\u5e93\uff1a marisa/rocksdb/boost\n\u5b89\u88c5\u7b2c\u4e09\u5e93\u524d\u9700\u8981\u786e\u8ba4cmake\u7248\u672c\u662f3.7.2\u4ee5\u4e0a\uff0cmake\u7248\u672c\u662f3.82\u4ee5\u4e0a\u3002"),(0,s.kt)("h3",{id:"1-\u5b89\u88c5-cmake"},"1. \u5b89\u88c5 cmake"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\nrm -rf /usr/bin/cmake\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,s.kt)("h3",{id:"2-\u5b89\u88c5-make"},"2. \u5b89\u88c5 make"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"http://mirrors.ustc.edu.cn/gnu/make/\ntar -zxvf make-3.82.tar.gz\n./configure  --prefix=/usr/local/make\nmake && make install\nrm -rf /usr/local/bin/make\nln -s /usr/local/make/bin/make /usr/local/bin/make\n")),(0,s.kt)("h3",{id:"3-\u5b89\u88c5-marisa"},"3. \u5b89\u88c5 marisa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,s.kt)("h3",{id:"4-\u5b89\u88c5-rocksdb"},"4. \u5b89\u88c5 rocksdb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz\ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,s.kt)("h3",{id:"5-\u5b89\u88c5-boost"},"5. \u5b89\u88c5 boost"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,s.kt)("h2",{id:"\u7b2c\u56db\u6b65\u6267\u884c\u7f16\u8bd1"},"\u7b2c\u56db\u6b65\uff1a\u6267\u884c\u7f16\u8bd1"),(0,s.kt)("p",null,"\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u811a\u672c\u6267\u884c\u7f16\u8bd1\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb/scripts\n./stonedb_build.sh\n")),(0,s.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u751f\u6210\u76ee\u5f55/stonedb57\u3002"),(0,s.kt)("h2",{id:"\u7b2c\u4e94\u6b65\u542f\u52a8\u5b9e\u4f8b"},"\u7b2c\u4e94\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b"),(0,s.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u52a8StoneDB\u5b9e\u4f8b\u3002"),(0,s.kt)("h3",{id:"1-\u521b\u5efa\u7528\u6237"},"1. \u521b\u5efa\u7528\u6237"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,s.kt)("h3",{id:"2-\u6267\u884c\u811a\u672creinstallsh"},"2. \u6267\u884c\u811a\u672creinstall.sh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb57/install\n./reinstall.sh\n")),(0,s.kt)("p",null,"\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u5c31\u662f\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,s.kt)("h3",{id:"3-\u6267\u884c\u767b\u5f55"},"3. \u6267\u884c\u767b\u5f55"),(0,s.kt)("p",null,"\u767b\u5f55\u524d\u9700\u8981\u5728/stonedb57/install/log/mysqld.log\u627e\u5230\u8d85\u7ea7\u7528\u6237\u7684\u5bc6\u7801\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"more /stonedb57/install/log/mysqld.log |grep password\n2022-07-12T11:41:59.849676Z 1 [Note] A temporary password is generated for root@localhost: %xjqgHux(6pr\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb57/install/bin/mysql -uroot -p -S /stonedb57/install//tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 3\nServer version: 5.7.36-StoneDB-debug-log\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nroot@localhost [(none)]> show databases;\nERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.\nroot@localhost [(none)]> alter user 'root'@'localhost' identified by 'xxx';\nQuery OK, 0 rows affected (0.00 sec)\n\nroot@localhost [(none)]> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| mysql              |\n| performance_schema |\n| sys                |\n| sys_stonedb        |\n+--------------------+\n6 rows in set (0.00 sec)\n")))}p.isMDXComponent=!0}}]);