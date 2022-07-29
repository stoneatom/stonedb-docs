"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2843],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(r,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<s;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],l={id:"compile-using-ubuntu20.04",sidebar_position:5.14},r="Compile StoneDB on Ubuntu 20.04",d={unversionedId:"developer-guide/compiling-methods/compile-using-ubuntu20.04",id:"developer-guide/compiling-methods/compile-using-ubuntu20.04",title:"Compile StoneDB on Ubuntu 20.04",description:"This topic describes how to compile StoneDB on Ubuntu 20.04.",source:"@site/../Docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-ubuntu20.04",permalink:"/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/04-developer-guide/00-compiling-methods/compile-using-ubuntu2004.md",tags:[],version:"current",lastUpdatedBy:"andyli",lastUpdatedAt:1659082170,formattedLastUpdatedAt:"7/29/2022",sidebarPosition:5.14,frontMatter:{id:"compile-using-ubuntu20.04",sidebar_position:5.14},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on RHEL 7",permalink:"/docs/developer-guide/compiling-methods/compile-using-redhat7"},next:{title:"Compile StoneDB in a Docker Container",permalink:"/docs/developer-guide/compiling-methods/compile-using-docker"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1. Install GCC 7.3.0",id:"step-1-install-gcc-730",level:2},{value:"1. Install the dependencies",id:"1-install-the-dependencies",level:3},{value:"2. Decompress the source code package of GCC 7.3.0",id:"2-decompress-the-source-code-package-of-gcc-730",level:3},{value:"3. Prepare for compiling GCC",id:"3-prepare-for-compiling-gcc",level:3},{value:"4. Compile GCC",id:"4-compile-gcc",level:3},{value:"5. Check the GCC version",id:"5-check-the-gcc-version",level:3},{value:"6. Delete GCC and G++ versions that are later than 7.3.0",id:"6-delete-gcc-and-g-versions-that-are-later-than-730",level:3},{value:"Step 2. Install CMake and third-party dependencies",id:"step-2-install-cmake-and-third-party-dependencies",level:2},{value:"1. Install CMake",id:"1-install-cmake",level:3},{value:"2. Install marisa",id:"2-install-marisa",level:3},{value:"3. Install RocksDB",id:"3-install-rocksdb",level:3},{value:"4. Install Boost",id:"4-install-boost",level:3},{value:"Step 3. Compile StoneDB",id:"step-3-compile-stonedb",level:2},{value:"Step 4. Start StoneDB",id:"step-4-start-stonedb",level:2},{value:"1. Create an account",id:"1-create-an-account",level:3},{value:"2. Execute reinstall.sh",id:"2-execute-reinstallsh",level:3},{value:"3. Log in to StoneDB",id:"3-log-in-to-stonedb",level:3}],u={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"compile-stonedb-on-ubuntu-2004"},"Compile StoneDB on Ubuntu 20.04"),(0,s.kt)("p",null,"This topic describes how to compile StoneDB on Ubuntu 20.04."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"The source code of StoneDB has been downloaded."),(0,s.kt)("h2",{id:"step-1-install-gcc-730"},"Step 1. Install GCC 7.3.0"),(0,s.kt)("p",null,"Ubuntu 20.04 LTS uses GCC 9.4.0, by default. You must downgrade the GCC version to 7.3.0, because StoneDB can be complied only on GCC 7.3.0."),(0,s.kt)("h3",{id:"1-install-the-dependencies"},"1. Install the dependencies"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gcc\nsudo apt install g++\nsudo apt install make\nsudo apt install build-essential\nsudo apt install autoconf\nsudo apt install tree\nsudo apt install bison\nsudo apt install git\nsudo apt install cmake\nsudo apt install libtool\nsudo apt install numactl\nsudo apt install python\nsudo apt install openssl\nsudo apt install perl\nsudo apt install binutils\nsudo apt install libgmp-dev\nsudo apt install libmpfr-dev\nsudo apt install libmpc-dev\nsudo apt install libisl-dev\nsudo apt install liblz4-dev\nsudo apt install libbz2-dev\nsudo apt install libzstd-dev\nsudo apt install lz4\nsudo apt install ncurses-dev\nsudo apt install libsnappy-dev\nsudo apt install libedit-dev\nsudo apt install libaio-dev\nsudo apt install libncurses5-dev \nsudo apt install libreadline-dev\nsudo apt install libpam0g-dev\nsudo apt install zlib1g-dev\nsudo apt install libcurl-ocaml-dev\nsudo apt install libicu-dev\nsudo apt install libboost-all-dev\nsudo apt install libgflags-dev\nsudo apt install libjemalloc-dev\nsudo apt install libssl-dev\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Ensure that all the dependencies are installed. Otherwise, a large number of errors will be reported."))),(0,s.kt)("h3",{id:"2-decompress-the-source-code-package-of-gcc-730"},"2. Decompress the source code package of GCC 7.3.0"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"http://ftp.gnu.org/gnu/gcc/"},"Download"),", upload, and then decompress the source code package of GCC 7.3.0."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home\ntar -zxvf gcc-7.3.0.tar.gz\n")),(0,s.kt)("h3",{id:"3-prepare-for-compiling-gcc"},"3. Prepare for compiling GCC"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Comment out  ",(0,s.kt)("strong",{parentName:"li"},"ustat.h"),"  in row 157.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /home/gcc-7.3.0/libsanitizer/sanitizer_common\ncp sanitizer_platform_limits_posix.cc sanitizer_platform_limits_posix.cc.bak\nvim sanitizer_platform_limits_posix.cc\n\n//#include <sys/ustat.h>\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Add the following code after row 250.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"vim sanitizer_platform_limits_posix.cc\n\n// Use pre-computed size of struct ustat to avoid <sys/ustat.h> which\n// has been removed from glibc 2.28.\n#if defined(__aarch64__) || defined(__s390x__) || defined (__mips64) \\\n|| defined(__powerpc64__) || defined(__arch64__) || defined(__sparcv9) \\\n|| defined(__x86_64__)\n#define SIZEOF_STRUCT_USTAT 32\n#elif defined(__arm__) || defined(__i386__) || defined(__mips__) \\\n|| defined(__powerpc__) || defined(__s390__)\n#define SIZEOF_STRUCT_USTAT 20\n#else\n#error Unknown size of struct ustat\n#endif\n  unsigned struct_ustat_sz = SIZEOF_STRUCT_USTAT;\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If GCC is compiled without these modifications, an error will be reported, indicating that ",(0,s.kt)("strong",{parentName:"p"},"sys/ustat.h")," does not exist. This is because ",(0,s.kt)("strong",{parentName:"p"},"ustat.h")," is removed from ",(0,s.kt)("strong",{parentName:"p"},"sanitizer-platform-limits-posix.cc")," in GCC 7.3.0."))),(0,s.kt)("h3",{id:"4-compile-gcc"},"4. Compile GCC"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /gcc\ncd /home/gcc-7.3.0\n./contrib/download_prerequisites\n./configure --prefix=/gcc --enable-bootstrap -enable-threads=posix --enable-checking=release --enable-languages=c,c++ --disable-multilib --disable-libsanitizer\nsudo make && make install\n")),(0,s.kt)("h3",{id:"5-check-the-gcc-version"},"5. Check the GCC version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/gcc/bin/gcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,s.kt)("h3",{id:"6-delete-gcc-and-g-versions-that-are-later-than-730"},"6. Delete GCC and G++ versions that are later than 7.3.0"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm /usr/bin/gcc\nsudo ln -s /gcc/bin/gcc /usr/bin/gcc\nsudo rm /usr/bin/g++\nsudo ln -s /gcc/bin/g++ /usr/bin/g++\n\ngcc --version\ngcc (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\ng++ --version\ng++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n\nc++ --version\nc++ (GCC) 7.3.0\nCopyright (C) 2017 Free Software Foundation, Inc.\nThis is free software; see the source for copying conditions.  There is NO\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")),(0,s.kt)("h2",{id:"step-2-install-cmake-and-third-party-dependencies"},"Step 2. Install CMake and third-party dependencies"),(0,s.kt)("p",null,"Before compiling StoneDB, install CMake 3.7 or later, Make 3.82 or later, and the following third-party libraries: marisa, RocksDB, and Boost."),(0,s.kt)("h3",{id:"1-install-cmake"},"1. Install CMake"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\napt remove cmake -y\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,s.kt)("h3",{id:"2-install-marisa"},"2. Install marisa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,s.kt)("p",null,"The directories and files shown in the following figure are generated in directory ",(0,s.kt)("strong",{parentName:"p"},"/usr/local/stonedb-marisa"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"stonedb-marisa",src:n(95415).Z,width:"565",height:"225"})),(0,s.kt)("h3",{id:"3-install-rocksdb"},"3. Install RocksDB"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz \ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\nmake shared_lib\nmake install-shared INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\nmake static_lib\nmake install-static INSTALL_PATH=/usr/local/stonedb-gcc-rocksdb\n")),(0,s.kt)("p",null,"The directories and files shown in the following figure are generated in directory ",(0,s.kt)("strong",{parentName:"p"},"/usr/local/stonedb-gcc-rocksdb"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"stonedb-gcc-rocksdb",src:n(95043).Z,width:"625",height:"164"})),(0,s.kt)("h3",{id:"4-install-boost"},"4. Install Boost"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,s.kt)("p",null,"The directories and files shown in the following figure are generated in directory ",(0,s.kt)("strong",{parentName:"p"},"/usr/local/stonedb-boost"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"stonedb-boost",src:n(59063).Z,width:"694",height:"438"})),(0,s.kt)("h2",{id:"step-3-compile-stonedb"},"Step 3. Compile StoneDB"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb/scripts\n./stonedb_build.sh\n")),(0,s.kt)("p",null,"After the compilation is complete, directory ",(0,s.kt)("strong",{parentName:"p"},"/stonedb57")," is generated."),(0,s.kt)("h2",{id:"step-4-start-stonedb"},"Step 4. Start StoneDB"),(0,s.kt)("p",null,"Perform the following steps to start StoneDB."),(0,s.kt)("h3",{id:"1-create-an-account"},"1. Create an account"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,s.kt)("h3",{id:"2-execute-reinstallsh"},"2. Execute reinstall.sh"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb57/install\n./reinstall.sh\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The aim of executing the script is to initialize and start StoneDB."))),(0,s.kt)("h3",{id:"3-log-in-to-stonedb"},"3. Log in to StoneDB"),(0,s.kt)("p",null,"Before you log in to StoneDB, you must find the password of the super admin in ",(0,s.kt)("strong",{parentName:"p"},"/stonedb57/install/log/mysqld.log"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"more /stonedb57/install/log/mysqld.log |grep password\n2022-07-12T06:02:17.440039Z 1 [Note] A temporary password is generated for root@localhost: 3QpW#tTDAe=U\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb57/install/bin/mysql -uroot -p -S /stonedb57/install//tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 3\nServer version: 5.7.36-StoneDB-debug-log\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\nERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.\nmysql> alter user 'root'@'localhost' identified by 'xxx';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> exit\nBye\n\n/stonedb57/install/bin/mysql -uroot -p -S /stonedb57/install//tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 4\nServer version: 5.7.36-StoneDB-debug-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| mysql              |\n| performance_schema |\n| sys                |\n| sys_stonedb        |\n+--------------------+\n6 rows in set (0.00 sec)\n")))}m.isMDXComponent=!0},59063:function(e,t,n){t.Z=n.p+"assets/images/boost_dir-f09f86eb37da3bc21e28bc47fc46edf4.png"},95415:function(e,t,n){t.Z=n.p+"assets/images/marisa_dir-75eb57fbce88e88ab035ae0ceb6dd196.png"},95043:function(e,t,n){t.Z=n.p+"assets/images/rocks_dir-fc2d9e40f3d2a745dc17f1e766578bbd.png"}}]);