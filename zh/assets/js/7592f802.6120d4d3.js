"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[6615],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},s=Object.keys(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(l=0;l<s.length;l++)n=s[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),c=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,b=m["".concat(i,".").concat(p)]||m[p]||u[p]||s;return n?l.createElement(b,r(r({ref:t},d),{},{components:n})):l.createElement(b,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var l=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],o={id:"compile-using-redhat7",sidebar_position:5.13},i="RedHat 7 \u4e0b\u7f16\u8bd1StoneDB",c={unversionedId:"developer-guide/compiling-methods/compile-using-redhat7",id:"developer-guide/compiling-methods/compile-using-redhat7",title:"RedHat 7 \u4e0b\u7f16\u8bd1StoneDB",description:"\u7f16\u8bd1\u5de5\u5177\u4ee5\u53ca\u7b2c\u4e09\u65b9\u5e93\u7684\u7248\u672c\u8981\u6c42\u5982\u4e0b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-redhat7",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-redhat7.md",tags:[],version:"current",lastUpdatedBy:"fuxiang",lastUpdatedAt:1660536113,formattedLastUpdatedAt:"2022/8/15",sidebarPosition:5.13,frontMatter:{id:"compile-using-redhat7",sidebar_position:5.13},sidebar:"autoSidebar",previous:{title:"CentOS 7 \u4e0b\u7f16\u8bd1StoneDB",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-centos7"},next:{title:"Ubuntu 20.04 \u4e0b\u7f16\u8bd1StoneDB",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"}},d={},u=[{value:"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u5305",id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56\u5305",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5 gcc 9.3.0",id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5-gcc-930",level:2},{value:"1. \u5b89\u88c5 scl \u6e90",id:"1-\u5b89\u88c5-scl-\u6e90",level:3},{value:"2. \u5b89\u88c5 9.3.0 \u7248\u672c\u7684 gcc\u3001gcc-c++\u3001gdb",id:"2-\u5b89\u88c5-930-\u7248\u672c\u7684-gccgcc-cgdb",level:3},{value:"3. \u5207\u6362\u81f3 9.3.0 \u7248\u672c",id:"3-\u5207\u6362\u81f3-930-\u7248\u672c",level:3},{value:"4. \u7248\u672c\u68c0\u67e5",id:"4-\u7248\u672c\u68c0\u67e5",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",id:"\u7b2c\u4e09\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"1. \u5b89\u88c5 cmake",id:"1-\u5b89\u88c5-cmake",level:3},{value:"2. \u5b89\u88c5 make",id:"2-\u5b89\u88c5-make",level:3},{value:"3. \u5b89\u88c5 marisa",id:"3-\u5b89\u88c5-marisa",level:3},{value:"4. \u5b89\u88c5 rocksdb",id:"4-\u5b89\u88c5-rocksdb",level:3},{value:"5. \u5b89\u88c5 boost",id:"5-\u5b89\u88c5-boost",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u6267\u884c\u7f16\u8bd1",id:"\u7b2c\u56db\u6b65\u6267\u884c\u7f16\u8bd1",level:2},{value:"\u7b2c\u4e94\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b",id:"\u7b2c\u4e94\u6b65\u542f\u52a8\u5b9e\u4f8b",level:2},{value:"1. \u521b\u5efa\u7528\u6237",id:"1-\u521b\u5efa\u7528\u6237",level:3},{value:"2. \u624b\u52a8\u5b89\u88c5",id:"2-\u624b\u52a8\u5b89\u88c5",level:3},{value:"3. \u81ea\u52a8\u5b89\u88c5",id:"3-\u81ea\u52a8\u5b89\u88c5",level:3},{value:"4. \u6267\u884c\u767b\u5f55",id:"4-\u6267\u884c\u767b\u5f55",level:3}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"redhat-7-\u4e0b\u7f16\u8bd1stonedb"},"RedHat 7 \u4e0b\u7f16\u8bd1StoneDB"),(0,s.kt)("p",null,"\u7f16\u8bd1\u5de5\u5177\u4ee5\u53ca\u7b2c\u4e09\u65b9\u5e93\u7684\u7248\u672c\u8981\u6c42\u5982\u4e0b\u3002"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u7f16\u8bd1\u5de5\u5177\u53ca\u7b2c\u4e09\u65b9\u5e93"),(0,s.kt)("th",{parentName:"tr",align:null},"\u7248\u672c\u8981\u6c42"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"gcc"),(0,s.kt)("td",{parentName:"tr",align:null},"9.3.0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"make"),(0,s.kt)("td",{parentName:"tr",align:null},"3.82")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"cmake"),(0,s.kt)("td",{parentName:"tr",align:null},"3.7.2")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"marisa"),(0,s.kt)("td",{parentName:"tr",align:null},"0.77")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,s.kt)("td",{parentName:"tr",align:null},"6.12.6")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"boost"),(0,s.kt)("td",{parentName:"tr",align:null},"1.66")))),(0,s.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u5b89\u88c5\u4f9d\u8d56\u5305"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y tree\nyum install -y gcc\nyum install -y gcc-c++\nyum install -y libzstd-devel\nyum install -y make\nyum install -y ncurses\nyum install -y ncurses-devel\nyum install -y bison\nyum install -y libaio\nyum install -y perl\nyum install -y perl-DBI\nyum install -y perl-DBD-MySQL\nyum install -y perl-Time-HiRes\nyum install -y readline-devel\nyum install -y numactl\nyum install -y zlib\nyum install -y zlib-devel\nyum install -y openssl\nyum install -y openssl-devel\nyum install -y redhat-lsb-core\nyum install -y git\nyum install -y autoconf\nyum install -y automake\nyum install -y libtool\nyum install -y lrzsz\nyum install -y lz4\nyum install -y lz4-devel\nyum install -y snappy\nyum install -y snappy-devel\nyum install -y bzip2\nyum install -y bzip2-devel\nyum install -y zstd\nyum install -y libedit\nyum install -y libedit-devel\nyum install -y libaio-devel\nyum install -y libicu\nyum install -y libicu-devel\n")),(0,s.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u5b89\u88c5-gcc-930"},"\u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5 gcc 9.3.0"),(0,s.kt)("p",null,"\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff0c\u68c0\u67e5\u5f53\u524d gcc \u7248\u672c\u662f\u5426\u7b26\u5408\u5b89\u88c5\u8981\u6c42\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,s.kt)("p",null,"\u5982\u679c\u7248\u672c\u4e0d\u7b26\u5408\u8981\u6c42\uff0c\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5c06 gcc \u5207\u6362\u4e3a\u6b63\u786e\u7248\u672c\u3002"),(0,s.kt)("h3",{id:"1-\u5b89\u88c5-scl-\u6e90"},"1. \u5b89\u88c5 scl \u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install centos-release-scl scl-utils-build -y\n")),(0,s.kt)("h3",{id:"2-\u5b89\u88c5-930-\u7248\u672c\u7684-gccgcc-cgdb"},"2. \u5b89\u88c5 9.3.0 \u7248\u672c\u7684 gcc\u3001gcc-c++\u3001gdb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yum install devtoolset-9-gcc.x86_64 devtoolset-9-gcc-c++.x86_64 devtoolset-9-gcc-gdb-plugin.x86_64 -y\n")),(0,s.kt)("h3",{id:"3-\u5207\u6362\u81f3-930-\u7248\u672c"},"3. \u5207\u6362\u81f3 9.3.0 \u7248\u672c"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"scl enable devtoolset-9 bash\n")),(0,s.kt)("h3",{id:"4-\u7248\u672c\u68c0\u67e5"},"4. \u7248\u672c\u68c0\u67e5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"gcc --version\n")),(0,s.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"},"\u7b2c\u4e09\u6b65\uff1a\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93"),(0,s.kt)("p",null,"\u5b89\u88c5\u7b2c\u4e09\u5e93\u524d\u9700\u8981\u786e\u8ba4 cmake \u7248\u672c\u662f3.7.2\u4ee5\u4e0a\uff0cmake \u7248\u672c\u662f3.82\u4ee5\u4e0a\uff0c\u5982\u679c\u4f4e\u4e8e\u8fd9\u4e24\u4e2a\u7248\u672c\uff0c\u9700\u8981\u8fdb\u884c\u5b89\u88c5\u3002StoneDB \u4f9d\u8d56 marisa\u3001rocksdb\u3001boost\uff0c\u5728\u7f16\u8bd1 marisa\u3001rocksdb\u3001boost \u65f6\uff0c\u53ef\u4ee5\u4e0d\u6307\u5b9a\u5b89\u88c5\u8def\u5f84\uff0c\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\u5728 /usr/local \u4e0b\u3002\u5982\u679c\u4e0d\u6307\u5b9a marisa\u3001rocksdb\u3001boost \u7684\u5b89\u88c5\u8def\u5f84\uff0c\u5728\u7f16\u8bd1\u5b89\u88c5 StoneDB \u65f6\u4e5f\u65e0\u9700\u6307\u5b9a\u8def\u5f84\u3002\u793a\u4f8b\u4e2d\u6211\u4eec\u6307\u5b9a\u4e86 marisa\u3001rocksdb\u3001boost \u7684\u5b89\u88c5\u8def\u5f84\u3002"),(0,s.kt)("h3",{id:"1-\u5b89\u88c5-cmake"},"1. \u5b89\u88c5 cmake"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://cmake.org/files/v3.7/cmake-3.7.2.tar.gz\ntar -zxvf cmake-3.7.2.tar.gz\ncd cmake-3.7.2\n./bootstrap && make && make install\n/usr/local/bin/cmake --version\nrm -rf /usr/bin/cmake\nln -s /usr/local/bin/cmake /usr/bin/\n")),(0,s.kt)("h3",{id:"2-\u5b89\u88c5-make"},"2. \u5b89\u88c5 make"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"http://mirrors.ustc.edu.cn/gnu/make/\ntar -zxvf make-3.82.tar.gz\n./configure  --prefix=/usr/local/make\nmake && make install\nrm -rf /usr/local/bin/make\nln -s /usr/local/make/bin/make /usr/local/bin/make\n")),(0,s.kt)("h3",{id:"3-\u5b89\u88c5-marisa"},"3. \u5b89\u88c5 marisa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/s-yata/marisa-trie.git\ncd marisa-trie\nautoreconf -i\n./configure --enable-native-code --prefix=/usr/local/stonedb-marisa\nmake && make install \n")),(0,s.kt)("p",null,"marisa \u7684\u5b89\u88c5\u8def\u5f84\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6307\u5b9a\uff0c\u793a\u4f8b\u4e2d\u7684\u5b89\u88c5\u8def\u5f84\u662f /usr/local/stonedb-marisa\u3002"),(0,s.kt)("h3",{id:"4-\u5b89\u88c5-rocksdb"},"4. \u5b89\u88c5 rocksdb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/facebook/rocksdb/archive/refs/tags/v6.12.6.tar.gz\ntar -zxvf v6.12.6.tar.gz\ncd rocksdb-6.12.6\n\ncmake ./ \\\n  -DCMAKE_BUILD_TYPE=Release \\\n  -DCMAKE_INSTALL_PREFIX=/usr/local/stonedb-gcc-rocksdb \\\n  -DCMAKE_INSTALL_LIBDIR=/usr/local/stonedb-gcc-rocksdb \\\n  -DWITH_JEMALLOC=ON \\\n  -DWITH_SNAPPY=ON \\\n  -DWITH_LZ4=ON \\\n  -DWITH_ZLIB=ON \\\n  -DWITH_ZSTD=ON \\\n  -DUSE_RTTI=ON \\\n  -DROCKSDB_BUILD_SHARED=ON \\\n  -DWITH_GFLAGS=OFF \\\n  -DWITH_TOOLS=OFF \\\n  -DWITH_BENCHMARK_TOOLS=OFF \\\n  -DWITH_CORE_TOOLS=OFF \n\nmake -j`nproc`\nmake install -j`nproc`\n")),(0,s.kt)("p",null,"rocksdb \u7684\u5b89\u88c5\u8def\u5f84\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6307\u5b9a\uff0c\u793a\u4f8b\u4e2d\u7684\u5b89\u88c5\u8def\u5f84\u662f /usr/local/stonedb-gcc-rocksdb\u3002"),(0,s.kt)("h3",{id:"5-\u5b89\u88c5-boost"},"5. \u5b89\u88c5 boost"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://sourceforge.net/projects/boost/files/boost/1.66.0/boost_1_66_0.tar.gz\ntar -zxvf boost_1_66_0.tar.gz\ncd boost_1_66_0\n./bootstrap.sh --prefix=/usr/local/stonedb-boost\n./b2 install --with=all\n")),(0,s.kt)("p",null,"boost \u7684\u5b89\u88c5\u8def\u5f84\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6307\u5b9a\uff0c\u793a\u4f8b\u4e2d\u7684\u5b89\u88c5\u8def\u5f84\u662f /usr/local/stonedb-boost\u3002",(0,s.kt)("br",null),'\u6ce8\uff1a\u5728\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\uff0c\u9664\u975e\u6709\u5173\u952e\u5b57 "error" \u62a5\u9519\u81ea\u52a8\u9000\u51fa\uff0c\u5426\u5219\u51fa\u73b0\u5173\u952e\u5b57 "warning"\u3001"failed"\u662f\u6b63\u5e38\u7684\u3002'),(0,s.kt)("h2",{id:"\u7b2c\u56db\u6b65\u6267\u884c\u7f16\u8bd1"},"\u7b2c\u56db\u6b65\uff1a\u6267\u884c\u7f16\u8bd1"),(0,s.kt)("p",null,"StoneDB \u73b0\u6709 5.6 \u548c 5.7 \u4e24\u4e2a\u5206\u652f\uff0c\u4e0b\u8f7d\u7684\u6e90\u7801\u5305\u9ed8\u8ba4\u662f 5.7 \u5206\u652f\u3002\u4e0b\u8f7d\u7684\u6e90\u7801\u5305\u5b58\u653e\u8def\u5f84\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6307\u5b9a\uff0c\u793a\u4f8b\u4e2d\u7684\u6e90\u7801\u5305\u5b58\u653e\u8def\u5f84\u662f\u5728\u6839\u76ee\u5f55\u4e0b\uff0c\u5e76\u4e14\u662f\u5207\u6362\u4e3a 5.6 \u5206\u652f\u7684\u7f16\u8bd1\u5b89\u88c5\u3002",(0,s.kt)("br",null),"\u6ce8\uff1agcc 9.3.0\u4ee5\u4e0a\u7248\u672c\u5df2\u7ecf\u652f\u6301 5.6 \u7684\u7f16\u8bd1\uff0c\u5e76\u4e14\u652f\u6301\u81ea\u5b9a\u4e49\u6307\u5b9a rocksdb \u548c marisa \u7684\u5b89\u88c5\u8def\u5f84\u30025.7 \u7684\u7f16\u8bd1\u8fd8\u662f gcc 7.3.0\u7248\u672c\uff0c\u540e\u7eed\u4f1a\u5f97\u5230\u652f\u6301\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ngit clone https://github.com/stoneatom/stonedb.git\ncd stonedb\ngit checkout remotes/origin/stonedb-5.6\n")),(0,s.kt)("p",null,"\u5728\u6267\u884c\u7f16\u8bd1\u811a\u672c\u524d\uff0c\u9700\u8981\u4fee\u6539\u7f16\u8bd1\u811a\u672c\u7684\u4e24\u5904\u5185\u5bb9\uff1a",(0,s.kt)("br",null),"1\uff09StoneDB \u5b89\u88c5\u76ee\u5f55\uff0c\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\uff0c\u793a\u4f8b\u4e2d\u7684\u5b89\u88c5\u76ee\u5f55\u662f /stonedb56/install\uff1b",(0,s.kt)("br",null),"2\uff09marisa\u3001rocksdb\u3001boost \u7684\u5b9e\u9645\u5b89\u88c5\u8def\u5f84\uff0c\u5fc5\u987b\u4e0e\u4e0a\u6587\u5b89\u88c5 marisa\u3001rocksdb\u3001boost \u7684\u8def\u5f84\u4fdd\u6301\u4e00\u81f4\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"###\u4fee\u6539\u7f16\u8bd1\u811a\u672c\ncd /stonedb/scripts\nvim stonedb_build.sh\n...\ninstall_target=/stonedb56/install\n...\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/ \\\n-DWITH_MARISA=/usr/local/stonedb-marisa \\\n-DWITH_ROCKSDB=/usr/local/stonedb-gcc-rocksdb \\\n2>&1 | tee -a ${build_log}\n\n###\u6267\u884c\u7f16\u8bd1\u811a\u672c\nsh stonedb_build.sh\n")),(0,s.kt)("h2",{id:"\u7b2c\u4e94\u6b65\u542f\u52a8\u5b9e\u4f8b"},"\u7b2c\u4e94\u6b65\uff1a\u542f\u52a8\u5b9e\u4f8b"),(0,s.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u542f\u52a8 StoneDB\u3002"),(0,s.kt)("h3",{id:"1-\u521b\u5efa\u7528\u6237"},"1. \u521b\u5efa\u7528\u6237"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,s.kt)("h3",{id:"2-\u624b\u52a8\u5b89\u88c5"},"2. \u624b\u52a8\u5b89\u88c5"),(0,s.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5982\u679c StoneDB \u5b89\u88c5\u76ee\u5f55\u4e0d\u662f /stonedb56\uff0c\u4e0d\u4f1a\u81ea\u52a8\u751f\u6210 reinstall.sh\u3001install.sh \u548c my.cnf \u6587\u4ef6\uff0c\u9700\u8981\u624b\u52a8\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u548c\u542f\u52a8\u5b9e\u4f8b\u3002\u8fd8\u9700\u8981\u914d\u7f6e my.cnf \u6587\u4ef6\uff0c\u5982\u5b89\u88c5\u76ee\u5f55\uff0c\u7aef\u53e3\u7b49\u53c2\u6570\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"###\u521b\u5efa\u76ee\u5f55\nmkdir -p /data/stonedb56/install/data/innodb\nmkdir -p /data/stonedb56/install/binlog\nmkdir -p /data/stonedb56/install/log\nmkdir -p /data/stonedb56/install/tmp\nchown -R mysql:mysql /data\n\n###\u914d\u7f6emy.cnf\nvim /data/stonedb56/install/my.cnf\n[mysqld]\nport      = 3306\nsocket    = /data/stonedb56/install/tmp/mysql.sock\ndatadir   = /data/stonedb56/install/data\npid-file  = /data/stonedb56/install/data/mysqld.pid\nlog-error = /data/stonedb56/install/log/mysqld.log\n\nchown -R mysql:mysql /data/stonedb56/install/my.cnf\n\n###\u521d\u59cb\u5316\u5b9e\u4f8b\n/data/stonedb56/install/scripts/mysql_install_db --datadir=/data/stonedb56/install/data --basedir=/data/stonedb56/install --user=mysql\n\n###\u542f\u52a8\u5b9e\u4f8b\n/data/stonedb56/install/bin/mysqld_safe --defaults-file=/data/stonedb56/install/my.cnf --user=mysql &\n")),(0,s.kt)("h3",{id:"3-\u81ea\u52a8\u5b89\u88c5"},"3. \u81ea\u52a8\u5b89\u88c5"),(0,s.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5982\u679c StoneDB \u5b89\u88c5\u76ee\u5f55\u662f /stonedb56\uff0c\u4f1a\u81ea\u52a8\u751f\u6210 reinstall.sh\u3001install.sh \u548c my.cnf \u6587\u4ef6\uff0c\u6267\u884c reinstall.sh \u5c31\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u7684\u8fc7\u7a0b\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,s.kt)("p",null,"\u6ce8\uff1areinstall.sh \u4e0e install.sh \u7684\u533a\u522b\uff1f",(0,s.kt)("br",null),"reinstall.sh \u662f\u81ea\u52a8\u5316\u5b89\u88c5\u811a\u672c\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u7684\u8fc7\u7a0b\uff0c\u53ea\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5176\u4ed6\u4efb\u4f55\u65f6\u5019\u4f7f\u7528\u90fd\u4f1a\u5220\u9664\u6574\u4e2a\u76ee\u5f55\uff0c\u91cd\u65b0\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002install.sh \u662f\u624b\u52a8\u5b89\u88c5\u63d0\u4f9b\u7684\u793a\u4f8b\u811a\u672c\uff0c\u7528\u6237\u53ef\u6839\u636e\u81ea\u5b9a\u4e49\u7684\u5b89\u88c5\u76ee\u5f55\u4fee\u6539\u8def\u5f84\uff0c\u7136\u540e\u6267\u884c\u811a\u672c\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u4e5f\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u3002\u4ee5\u4e0a\u4e24\u4e2a\u811a\u672c\u90fd\u53ea\u80fd\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u3002"),(0,s.kt)("h3",{id:"4-\u6267\u884c\u767b\u5f55"},"4. \u6267\u884c\u767b\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.6.24-StoneDB-debug build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")))}p.isMDXComponent=!0}}]);