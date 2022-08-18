"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9239],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),d=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=l,h=m["".concat(r,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"compile-using-redhat7",sidebar_position:5.13},r="Compile StoneDB on RHEL 7",d={unversionedId:"developer-guide/compiling-methods/compile-using-redhat7",id:"developer-guide/compiling-methods/compile-using-redhat7",title:"Compile StoneDB on RHEL 7",description:"This topic describes how to compile StoneDB on Red Hat Enterprise Linux (RHEL) 7.",source:"@site/../Docs/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-redhat7",permalink:"/docs/developer-guide/compiling-methods/compile-using-redhat7",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660802807,formattedLastUpdatedAt:"8/18/2022",sidebarPosition:5.13,frontMatter:{id:"compile-using-redhat7",sidebar_position:5.13},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on CentOS 7",permalink:"/docs/developer-guide/compiling-methods/compile-using-centos7"},next:{title:"Compile StoneDB on Ubuntu 20.04",permalink:"/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"}},p={},c=[{value:"Precautions",id:"precautions",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Step 1. Install the dependencies",id:"step-1-install-the-dependencies",level:3},{value:"Step 2. Install GCC 9.3.0",id:"step-2-install-gcc-930",level:3},{value:"Step 3. Install third-party libraries",id:"step-3-install-third-party-libraries",level:3},{value:"Step 4. Compile StoneDB",id:"step-4-compile-stonedb",level:3},{value:"<strong>Step 5. Start StoneDB</strong>",id:"step-5-start-stonedb",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compile-stonedb-on-rhel-7"},"Compile StoneDB on RHEL 7"),(0,o.kt)("p",null,"This topic describes how to compile StoneDB on Red Hat Enterprise Linux (RHEL) 7."),(0,o.kt)("h2",{id:"precautions"},"Precautions"),(0,o.kt)("p",null,"Ensure that the tools and third-party libraries used in your environment meet the following version requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GCC 9.3.0"),(0,o.kt)("li",{parentName:"ul"},"Make 3.82 or later"),(0,o.kt)("li",{parentName:"ul"},"CMake 3.7.2 or later"),(0,o.kt)("li",{parentName:"ul"},"marisa 0.77"),(0,o.kt)("li",{parentName:"ul"},"RocksDB 6.12.6"),(0,o.kt)("li",{parentName:"ul"},"Boost 1.66")),(0,o.kt)("h2",{id:"procedure"},"Procedure"),(0,o.kt)("h3",{id:"step-1-install-the-dependencies"},"Step 1. Install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y tree\nyum install -y gcc\nyum install -y gcc-c++\nyum install -y libzstd-devel\nyum install -y make\nyum install -y ncurses\nyum install -y ncurses-devel\nyum install -y bison\nyum install -y libaio\nyum install -y perl\nyum install -y perl-DBI\nyum install -y perl-DBD-MySQL\nyum install -y perl-Time-HiRes\nyum install -y readline-devel\nyum install -y numactl\nyum install -y zlib\nyum install -y zlib-devel\nyum install -y openssl\nyum install -y openssl-devel\nyum install -y redhat-lsb-core\nyum install -y git\nyum install -y autoconf\nyum install -y automake\nyum install -y libtool\nyum install -y lrzsz\nyum install -y lz4\nyum install -y lz4-devel\nyum install -y snappy\nyum install -y snappy-devel\nyum install -y bzip2\nyum install -y bzip2-devel\nyum install -y zstd\nyum install -y libedit\nyum install -y libedit-devel\nyum install -y libaio-devel\nyum install -y libicu\nyum install -y libicu-devel\nyum install -y jemalloc-devel\n")),(0,o.kt)("h3",{id:"step-2-install-gcc-930"},"Step 2. Install GCC 9.3.0"),(0,o.kt)("p",null,"Before performing the follow-up steps, you must ensure the GCC version is 9.3.0."),(0,o.kt)("p",null,"You can run the following command to check the GCC version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,o.kt)("p",null,"If the version is earlier than 9.3.0, perform the following steps to upgrade GCC."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the SCL utility.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centos-release-scl scl-utils-build -y\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install GCC, GCC-C++, or GDB of version 9.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install devtoolset-9-gcc.x86_64 devtoolset-9-gcc-c++.x86_64 devtoolset-9-gcc-gdb-plugin.x86_64 -y\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Switch the version to 9.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"scl enable devtoolset-9 bash\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check that the version is switched to 9.3.0.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,o.kt)("h3",{id:"step-3-install-third-party-libraries"},"Step 3. Install third-party libraries"),(0,o.kt)("p",null,"Ensure that the CMake version in your environment is 3.7.2 or later and the Make version is 3.82 or later. Otherwise, install CMake, Make, or both of them of the correct versions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"StoneDB is dependent on marisa, RocksDB, and Boost. You are advised to specify paths for saving the these libraries when you install them, instead of using the default paths."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install CMake.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\nrm -rf /usr/bin/cmake\nln -s /usr/local/bin/cmake /usr/bin/\ncmake --version\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install Make.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget http://mirrors.ustc.edu.cn/gnu/make/make-3.82.tar.gz\ntar -zxvf make-3.82.tar.gz\ncd make-3.82\n./configure  --prefix=/usr/local/make\nmake && make install\nrm -rf /usr/local/bin/make\nln -s /usr/local/make/bin/make /usr/local/bin/make\nmake --version\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install marisa.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,o.kt)("p",null,"The installation directory of marisa in the example is ",(0,o.kt)("strong",{parentName:"p"},"/usr/local/stonedb-marisa"),". You can change it based on your actual conditions."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install RocksDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz\ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\n\ncmake ./ \\\n  -DCMAKE_BUILD_TYPE=Release \\\n  -DCMAKE_INSTALL_PREFIX=/usr/local/stonedb-gcc-rocksdb \\\n  -DCMAKE_INSTALL_LIBDIR=/usr/local/stonedb-gcc-rocksdb \\\n  -DWITH_JEMALLOC=ON \\\n  -DWITH_SNAPPY=ON \\\n  -DWITH_LZ4=ON \\\n  -DWITH_ZLIB=ON \\\n  -DWITH_ZSTD=ON \\\n  -DUSE_RTTI=ON \\\n  -DROCKSDB_BUILD_SHARED=ON \\\n  -DWITH_GFLAGS=OFF \\\n  -DWITH_TOOLS=OFF \\\n  -DWITH_BENCHMARK_TOOLS=OFF \\\n  -DWITH_CORE_TOOLS=OFF \n\nmake -j`nproc`\nmake install -j`nproc`\n")),(0,o.kt)("p",null,"The installation directory of RocksDB in the example is ",(0,o.kt)("strong",{parentName:"p"},"/usr/local/stonedb-gcc-rocksdb"),". You can change it based on your actual conditions."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Install Boost.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,o.kt)("p",null,"The installation directory of Boost in the example is ",(0,o.kt)("strong",{parentName:"p"},"/usr/local/stonedb-boost"),". You can change it based on your actual conditions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"During the compilation, the occurrences of keywords ",(0,o.kt)("strong",{parentName:"p"},"warning")," and",(0,o.kt)("strong",{parentName:"p"}," failed")," are normal, unless ",(0,o.kt)("strong",{parentName:"p"},"error")," is displayed and the CLI is automatically closed.",(0,o.kt)("br",null),"It takes about 25 minutes to install Boost."))),(0,o.kt)("h3",{id:"step-4-compile-stonedb"},"Step 4. Compile StoneDB"),(0,o.kt)("p",null,"Currently, StoneDB has two branches: StoneDB-5.6 (for MySQL 5.6) and StoneDB-5.7 (for MySQL 5.7). The link provided in this topic is to the source code package of StoneDB-5.7. In the following example, the source code package is saved to the root directory and is switched to StoneDB-5.6 for compilation. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ngit clone https://github.com/stoneatom/stonedb.git\ncd stonedb\ngit checkout remotes/origin/stonedb-5.6\n")),(0,o.kt)("p",null,"Before compilation, modify the compilation script as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Change the installation directory of StoneDB based on your actual conditions. In the example, ",(0,o.kt)("strong",{parentName:"li"},"/stonedb56/install")," is used."),(0,o.kt)("li",{parentName:"ol"},"Change the installation directories of marisa, RocksDB, and Boost based on your actual conditions.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### Modify the compilation script.\ncd /stonedb/scripts\nvim stonedb_build.sh\n...\ninstall_target=/stonedb56/install\n...\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/ \\\n-DWITH_MARISA=/usr/local/stonedb-marisa \\\n-DWITH_ROCKSDB=/usr/local/stonedb-gcc-rocksdb \\\n2>&1 | tee -a ${build_log}\n\n### Execute the compilation script.\nsh stonedb_build.sh\n")),(0,o.kt)("p",null,"If your OS is CentOS or RHEL, you must comment out ",(0,o.kt)("strong",{parentName:"p"},"os_dis")," and ",(0,o.kt)("strong",{parentName:"p"},"os_dist_release"),", and modify the setting of ",(0,o.kt)("strong",{parentName:"p"},"build_tag")," to exclude the ",(0,o.kt)("strong",{parentName:"p"},"os_dist")," and ",(0,o.kt)("strong",{parentName:"p"},"os_dist_release")," parts. This is because the the values of ",(0,o.kt)("strong",{parentName:"p"},"Distributor"),", ",(0,o.kt)("strong",{parentName:"p"},"Release"),", and ",(0,o.kt)("strong",{parentName:"p"},"Codename")," output of the ",(0,o.kt)("strong",{parentName:"p"},"lsb_release -a")," command are ",(0,o.kt)("strong",{parentName:"p"},"n/a"),". Commenting out ",(0,o.kt)("strong",{parentName:"p"},"os_dist")," and ",(0,o.kt)("strong",{parentName:"p"},"os_dist_release")," only affects the names of the log file and the TAR package and has no impact on the compilation results."),(0,o.kt)("h2",{id:"step-5-start-stonedb"},(0,o.kt)("strong",{parentName:"h2"},"Step 5. Start StoneDB")),(0,o.kt)("p",null,"Users can start StoneDB in two ways: manual installation and automatic installation. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Manually install StoneDB.")),(0,o.kt)("p",null,"If the installation directory after compilation is not ",(0,o.kt)("strong",{parentName:"p"},"/stonedb56"),", files ",(0,o.kt)("strong",{parentName:"p"},"reinstall.sh"),", ",(0,o.kt)("strong",{parentName:"p"},"install.sh"),", and ",(0,o.kt)("strong",{parentName:"p"},"my.cnf")," will not automatically generated. You need to manually create directories, and then initialize and start StoneDB. You also need to configure parameters in file ",(0,o.kt)("strong",{parentName:"p"},"my.cnf"),", including the installation directories and port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"### Create directories.\nmkdir -p /data/stonedb56/install/data/innodb\nmkdir -p /data/stonedb56/install/binlog\nmkdir -p /data/stonedb56/install/log\nmkdir -p /data/stonedb56/install/tmp\nchown -R mysql:mysql /data\n\n### Configure parameters in my.cnf.\nvim /data/stonedb56/install/my.cnf\n[mysqld]\nport      = 3306\nsocket    = /data/stonedb56/install/tmp/mysql.sock\ndatadir   = /data/stonedb56/install/data\npid-file  = /data/stonedb56/install/data/mysqld.pid\nlog-error = /data/stonedb56/install/log/mysqld.log\n\nchown -R mysql:mysql /data/stonedb56/install/my.cnf\n\n### Initialize StoneDB.\n/data/stonedb56/install/scripts/mysql_install_db --datadir=/data/stonedb56/install/data --basedir=/data/stonedb56/install --user=mysql\n\n### Start StoneDB.\n/data/stonedb56/install/bin/mysqld_safe --defaults-file=/data/stonedb56/install/my.cnf --user=mysql &\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("strong",{parentName:"li"},"reinstall.sh")," to automatically install StoneDB.")),(0,o.kt)("p",null,"If the installation directory after compilation is ",(0,o.kt)("strong",{parentName:"p"},"/stonedb56"),", execute ",(0,o.kt)("strong",{parentName:"p"},"reinstall.sh"),". Then, StoneDB will be automatically installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Differences between ",(0,o.kt)("strong",{parentName:"p"},"reinstall.sh")," and ",(0,o.kt)("strong",{parentName:"p"},"install.sh"),":"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"reinstall.sh")," is the script for automatic installation. When the script is being executed, directories are created, and StoneDB is initialized and started. Therefore, do not execute the script unless for the initial startup of StoneDB. Otherwise, all directories will be deleted and StoneDB will be initialized again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"install.sh")," is the script for manual installation. You can specify the installation directories based on your needs and then execute the script. Same as ",(0,o.kt)("strong",{parentName:"li"},"reinstall.sh"),", when the script is being executed, directories are created, and StoneDB is initialized and started. Therefore, do not execute the script unless for the initial startup. Otherwise, all directories will be deleted and StoneDB will be initialized again.")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Log in to StoneDB.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.6.24-StoneDB-debug build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")))}u.isMDXComponent=!0}}]);