"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2639],{3905:function(e,n,t){t.d(n,{Zo:function(){return a},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),l=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},a=function(e){var n=l(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),b=l(t),p=r,m=b["".concat(i,".").concat(p)]||b[p]||u[p]||s;return t?o.createElement(m,d(d({ref:n},a),{},{components:t})):o.createElement(m,d({ref:n},a))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,d=new Array(s);d[0]=b;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,d[1]=c;for(var l=2;l<s;l++)d[l]=t[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},55195:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=t(87462),r=t(63366),s=(t(67294),t(3905)),d=["components"],c={id:"compile-using-docker",sidebar_position:5.15},i="Docker \u7f16\u8bd1\u73af\u5883\u642d\u5efa\u548c\u4f7f\u7528",l={unversionedId:"developer-guide/compiling-methods/compile-using-docker",id:"developer-guide/compiling-methods/compile-using-docker",title:"Docker \u7f16\u8bd1\u73af\u5883\u642d\u5efa\u548c\u4f7f\u7528",description:"\u73af\u5883\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-docker.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-docker",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-docker",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-docker.md",tags:[],version:"current",lastUpdatedBy:"fuxiang",lastUpdatedAt:1660536113,formattedLastUpdatedAt:"2022/8/15",sidebarPosition:5.15,frontMatter:{id:"compile-using-docker",sidebar_position:5.15},sidebar:"autoSidebar",previous:{title:"Ubuntu 20.04 \u4e0b\u7f16\u8bd1StoneDB",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"},next:{title:"\u901a\u8fc7MySQL\u5ba2\u6237\u7aef\u8fde\u63a5StoneDB",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-mysql-client"}},a={},u=[{value:"\u73af\u5883\u7b80\u4ecb",id:"\u73af\u5883\u7b80\u4ecb",level:2},{value:"Docker\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u4f7f\u7528\u6b65\u9aa4",id:"docker\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u4f7f\u7528\u6b65\u9aa4",level:2},{value:"\u4e0b\u8f7dStoneDB\u6e90\u7801\u3001\u542f\u52a8docker_buildenv \u955c\u50cf",id:"\u4e0b\u8f7dstonedb\u6e90\u7801\u542f\u52a8docker_buildenv-\u955c\u50cf",level:3},{value:"\u901a\u8fc7docker hub \u83b7\u53d6",id:"\u901a\u8fc7docker-hub-\u83b7\u53d6",level:4},{value:"\u4f7f\u7528docker build \u521b\u5efadocker \u955c\u50cf",id:"\u4f7f\u7528docker-build-\u521b\u5efadocker-\u955c\u50cf",level:4},{value:"\u4e0b\u8f7ddocker.zip\u6587\u4ef6\uff0c\u4fdd\u5b58\u5230StoneDB\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u89e3\u538b\uff0c\u53ef\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u3002",id:"\u4e0b\u8f7ddockerzip\u6587\u4ef6\u4fdd\u5b58\u5230stonedb\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u89e3\u538b\u53ef\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4",level:5},{value:"Docker build",id:"docker-build",level:5},{value:"\u8fdb\u5165\u5bb9\u5668\u7f16\u8bd1StoneDB",id:"\u8fdb\u5165\u5bb9\u5668\u7f16\u8bd1stonedb",level:3},{value:"\uff08\u53ef\u9009\uff09\u540e\u7eed\u6b65\u9aa4",id:"\u53ef\u9009\u540e\u7eed\u6b65\u9aa4",level:2},{value:"tar\u6253\u5305\u5bfc\u51fa",id:"tar\u6253\u5305\u5bfc\u51fa",level:3},{value:"\u5bb9\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c\u8bd5\u7528StoneDB",id:"\u5bb9\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c\u8bd5\u7528stonedb",level:3}],b={toc:u};function p(e){var n=e.components,t=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,o.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"docker-\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u548c\u4f7f\u7528"},"Docker \u7f16\u8bd1\u73af\u5883\u642d\u5efa\u548c\u4f7f\u7528"),(0,s.kt)("h2",{id:"\u73af\u5883\u7b80\u4ecb"},"\u73af\u5883\u7b80\u4ecb"),(0,s.kt)("p",null,"\u7531\u4e8e\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u7b2c\u4e09\u65b9\u5e93\u8f83\u4e3a\u7e41\u7410\uff0c\u4e14Fedora\uff0cUbuntu\u7b49\u73af\u5883\u7f16\u8bd1\u5b58\u5728\u5927\u91cf\u4f9d\u8d56\u7f3a\u5931\uff0c\u9700\u8981\u8865\u5145\u5b89\u88c5\u4f9d\u8d56\uff0c\u642d\u5efa\u9ebb\u70e6\uff0c\u6240\u4ee5\u642d\u5efa\u4e00\u4e2aDocker  Centos \u7f16\u8bd1\u73af\u5883\u5bb9\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7Docker \u5bb9\u5668\u5feb\u901f\u7f16\u8bd1StoneDB\uff0c\u89e3\u51b3\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u7e41\u7410\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7Docker \u5bb9\u5668\u7f16\u8bd1\u540e\u76f4\u63a5\u542f\u52a8StoneDB\u8fdb\u884c\u8c03\u8bd5\u4f7f\u7528\u3002"),(0,s.kt)("h2",{id:"docker\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u4f7f\u7528\u6b65\u9aa4"},"Docker\u7f16\u8bd1\u73af\u5883\u642d\u5efa\u4f7f\u7528\u6b65\u9aa4"),(0,s.kt)("p",null,"\u672c\u642d\u5efa\u6587\u6863\u9700\u8981\u63d0\u524d\u5b89\u88c5\u597dDocker\uff0cDocker \u5b89\u88c5\u8bf7\u53c2\u8003Docker\u5b98\u65b9\u6587\u6863",(0,s.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/"),"\u3002"),(0,s.kt)("h3",{id:"\u4e0b\u8f7dstonedb\u6e90\u7801\u542f\u52a8docker_buildenv-\u955c\u50cf"},"\u4e0b\u8f7dStoneDB\u6e90\u7801\u3001\u542f\u52a8docker_buildenv \u955c\u50cf"),(0,s.kt)("p",null,"docker_buildenv\u955c\u50cf\u83b7\u53d6\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,s.kt)("h4",{id:"\u901a\u8fc7docker-hub-\u83b7\u53d6"},"\u901a\u8fc7docker hub \u83b7\u53d6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull stoneatom/stonedb_buildenv\n")),(0,s.kt)("h4",{id:"\u4f7f\u7528docker-build-\u521b\u5efadocker-\u955c\u50cf"},"\u4f7f\u7528docker build \u521b\u5efadocker \u955c\u50cf"),(0,s.kt)("h5",{id:"\u4e0b\u8f7ddockerzip\u6587\u4ef6\u4fdd\u5b58\u5230stonedb\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u89e3\u538b\u53ef\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4"},"\u4e0b\u8f7ddocker.zip\u6587\u4ef6\uff0c\u4fdd\u5b58\u5230StoneDB\u6e90\u7801\u6839\u76ee\u5f55\u4e0b\u89e3\u538b\uff0c\u53ef\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://stoneatom.yuque.com/attachments/yuque/0/2022/zip/26909006/1657765779060-80a9bc71-5205-475f-aaa1-b6b2302853cd.zip?_lake_card=%7B%22src%22%3A%22https%3A%2F%2Fstoneatom.yuque.com%2Fattachments%2Fyuque%2F0%2F2022%2Fzip%2F26909006%2F1657765779060-80a9bc71-5205-475f-aaa1-b6b2302853cd.zip%22%2C%22name%22%3A%22docker_buildenv_v1.0.1.zip%22%2C%22size%22%3A139304521%2C%22type%22%3A%22application%2Fx-zip-compressed%22%2C%22ext%22%3A%22zip%22%2C%22source%22%3A%22%22%2C%22status%22%3A%22done%22%2C%22mode%22%3A%22title%22%2C%22download%22%3Atrue%2C%22taskId%22%3A%22ua1e9f4fc-afd2-4851-8e7a-496ba3b57a2%22%2C%22taskType%22%3A%22upload%22%2C%22__spacing%22%3A%22both%22%2C%22id%22%3A%22hRoda%22%2C%22margin%22%3A%7B%22top%22%3Atrue%2C%22bottom%22%3Atrue%7D%2C%22card%22%3A%22file%22%7D"},"docker_buildenv_v1.0.1.zip")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[root@testOS src]# cd /home/src/\n[root@testOS src]# git clone https://github.com/stoneatom/stonedb.git\nCloning into 'stonedb'...\nremote: Enumerating objects: 84350, done.\nremote: Counting objects: 100% (84350/84350), done.\nremote: Total 84350 (delta 19707), reused 83550 (delta 19707), pack-reused 0\nReceiving objects: 100% (84350/84350), 402.19 MiB | 13.50 MiB/s, done.\nResolving deltas: 100% (19707/19707), done.\n\n[root@testOS src]# cd stonedb\n\n#\u4f7f\u7528ftp\u5de5\u5177\u4e0a\u4f20docker.zip\u5230\u672c\u76ee\u5f55\u4e0b\u89e3\u538b\n[root@testOS stonedb]# unzip docker_buildenv.zip\n[root@testOS stonedb]# tree docker_buildenv\ndocker_buildenv\n\u251c\u2500\u2500 cmake.tar.gz\n\u251c\u2500\u2500 docker_build.sh\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 stonedb-boost1.66.tar.gz\n\u251c\u2500\u2500 stonedb-gcc-rocksdb6.12.6.tar.gz\n\u2514\u2500\u2500 stonedb-marisa.tar.gz\n\n\n0 directories, 7 files\n\n")),(0,s.kt)("h5",{id:"docker-build"},"Docker build"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[root@testOS stonedb]# cd docker\n[root@testOS docker]# chmod u+x docker_build.sh\n#\u4e4b\u524d\u73af\u5883\u5185build\u8fc7\u955c\u50cf\uff0c\u4f7f\u7528\u7f13\u5b58\u8f83\u5feb\uff0c\u7b2c\u4e00\u6b21\u9700\u8981\u8fdb\u884c\u955c\u50cf\u4f9d\u8d56\u5b89\u88c5\uff0c\u4f1a\u4e45\u4e00\u70b9\n#\u811a\u672c\u4f7f\u7528\u65b9\u6cd5\uff1a./docker_build.sh tag  tag\u4e3a\u6253\u7684\u955c\u50cftag\u53f7\n#\u4f8b\u5982\uff1a./docker_build.sh 0.1\n[root@testOS docker]# ./docker_build.sh v0.1\n/home/src\nSending build context to Docker daemon  99.41MB\nStep 1/14 : FROM centos:7\n ---\x3e eeb6ee3f44bd\nStep 2/14 : ENV container docker\n ---\x3e Using cache\n ---\x3e dc33c0e29f61\nStep 3/14 : RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); rm -f /lib/systemd/system/multi-user.target.wants/*;rm -f /etc/systemd/system/*.wants/*;rm -f /lib/systemd/system/local-fs.target.wants/*; rm -f /lib/systemd/system/sockets.target.wants/*udev*; rm -f /lib/systemd/system/sockets.target.wants/*initctl*; rm -f /lib/systemd/system/basic.target.wants/*;rm -f /lib/systemd/system/anaconda.target.wants/*;\n ---\x3e Using cache\n ---\x3e 12ca4ee4c8b0\nStep 4/14 : RUN yum install -y epel-release.noarch\n ---\x3e Using cache\n ---\x3e 8b9a0d9cb423\nStep 5/14 : RUN  yum install -y snappy-devel lz4-devel bzip2-devel libzstd-devel.x86_64 ncurses-devel make bison libaio ncurses-devel perl perl-DBI perl-DBD-MySQL perl-Time-HiRes readline-devel numactl zlib-devel curldevel openssl-devel redhat-lsb-core.x86_64 git\n ---\x3e Using cache\n ---\x3e c7cf717b95c4\nStep 6/14 : RUN yum install -y centos-release-scl && yum install devtoolset-7-gcc* -y\n ---\x3e Using cache\n ---\x3e e512aca12c7e\nStep 7/14 : RUN ln -s /opt/rh/devtoolset-7/root/bin/gcc /usr/bin/gcc    && ln -s /opt/rh/devtoolset-7/root/bin/g++ /usr/bin/g++    && ln -s /opt/rh/devtoolset-7/root/bin/c++ /usr/bin/c++\n ---\x3e Using cache\n ---\x3e 39cb9ada4812\nStep 8/14 : RUN yum clean all\n ---\x3e Using cache\n ---\x3e 1370d1dc1a8e\nStep 9/14 : ADD cmake.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e f93823785ade\nStep 10/14 : RUN ln -s /usr/local/cmake/bin/cmake /usr/bin/\n ---\x3e Using cache\n ---\x3e f5f9d2b3c35b\nStep 11/14 : ADD stonedb-marisa.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e e787d2341307\nStep 12/14 : ADD stonedb-boost1.66.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e 5d115e2ddb34\nStep 13/14 : ADD stonedb-gcc-rocksdb.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e a338f6756d71\nStep 14/14 : CMD ["/usr/sbin/init"]\n ---\x3e Using cache\n ---\x3e 38381cd2bf3d\nSuccessfully built 38381cd2bf3d\nSuccessfully tagged stonedb_buildenv:v0.1\nDocker build success!you can run it:\n        docker run -d -p 23306:3306 -v /home/src:/home/ stonedb_buildenv:v0.1\n\n\n\n')),(0,s.kt)("h3",{id:"\u8fdb\u5165\u5bb9\u5668\u7f16\u8bd1stonedb"},"\u8fdb\u5165\u5bb9\u5668\u7f16\u8bd1StoneDB"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# docker run \u53c2\u6570\u8bf4\u660e\n# -v \u76ee\u5f55\u6302\u8f7d\uff0c\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u76ee\u5f55\uff0c\u540e\u9762\u662f\u5bb9\u5668\u5185\u76ee\u5f55,\u5bbf\u4e3b\u673a\u76ee\u5f55\u4e3astonedb\u6e90\u7801\u7236\u76ee\u5f55\u8def\u5f84\uff0c\u672c\u6587\u6863\u4ee5/home/src\u8def\u5f84\u4e3a\u793a\u4f8b\n# -p \u7aef\u53e3\u6620\u5c04\uff0c\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u7aef\u53e3\uff0c\u540e\u9762\u662f\u5bb9\u5668\u7aef\u53e3,\n#    \u8fd9\u91cc\u8bbe\u7f6e\u7aef\u53e3\u6620\u5c04\u662f\u4e3a\u4e86\u540e\u9762\u5bb9\u5668\u5185\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u8bd5\u7528StoneDB\uff0c\u5982\u679c\u4e0d\u9700\u8981\u5728\u5bb9\u5668\u4e2d\u8bd5\u7528\u53ef\u4ee5\u5ffd\u7565\u8be5\u914d\u7f6e\n# docker run \u53ef\u4ee5\u53c2\u8003\u4e0a\u9762docker build \u6210\u529f\u540e\u7684\u53c2\u8003\u547d\u4ee4\n[root@testOS docker]# docker run -d -p 23306:3306 -v /home/src:/home/ stonedb_buildenv:v0.1\n06f1f385d3b35c86c4ed324731a13785b2a66f8ef2c3423c9b4711c56de1910f\n[root@testOS docker]# docker ps\nCONTAINER ID        IMAGE                   COMMAND             CREATED             STATUS              PORTS                     NAMES\n06f1f385d3b3        stonedb_buildenv:v0.1   "/usr/sbin/init"    18 seconds ago      Up 17 seconds       0.0.0.0:23306->3306/tcp   confident_tesla\n\n#\u8fdb\u5165Docker \u5bb9\u5668\u5185\u90e8\u8fdb\u884c\u7f16\u8bd1StoneDB\n[root@testOS docker]# docker exec -it 06f1f385d3b3 bash\n[root@06f1f385d3b3 home]# cd /home/stonedb/\n[root@06f1f385d3b3 stonedb]# git branch -a\n* stonedb-5.7\n  remotes/origin/HEAD -> origin/stonedb-5.7\n  remotes/origin/stonedb-5.6\n  remotes/origin/stonedb-5.7\n\n[root@06f1f385d3b3 stonedb]# mkdir build\n\n[root@06f1f385d3b3 stonedb]# cd build/\n\n[root@06f1f385d3b3 build]# cmake ../ \\\n-DCMAKE_BUILD_TYPE=RelWithDebInfo \\\n-DCMAKE_INSTALL_PREFIX=/stonedb56/install \\\n-DMYSQL_DATADIR=/stonedb56/install/data \\\n-DSYSCONFDIR=/stonedb56/install \\\n-DMYSQL_UNIX_ADDR=/stonedb56/install/tmp/mysql.sock \\\n-DWITH_EMBEDDED_SERVER=OFF \\\n-DWITH_STONEDB_STORAGE_ENGINE=1 \\\n-DWITH_MYISAM_STORAGE_ENGINE=1 \\\n-DWITH_INNOBASE_STORAGE_ENGINE=1 \\\n-DWITH_PARTITION_STORAGE_ENGINE=1 \\\n-DMYSQL_TCP_PORT=3306 \\\n-DENABLED_LOCAL_INFILE=1 \\\n-DEXTRA_CHARSETS=all \\\n-DDEFAULT_CHARSET=utf8 \\\n-DDEFAULT_COLLATION=utf8_general_ci \\\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/\n\n#\u7b49\u5f85cmake \u7ed3\u675f\uff0c\u7136\u540e\u6267\u884cmake\u548cmake install\n[root@06f1f385d3b3 build]# make \n[root@06f1f385d3b3 build]# make install\n')),(0,s.kt)("h2",{id:"\u53ef\u9009\u540e\u7eed\u6b65\u9aa4"},"\uff08\u53ef\u9009\uff09\u540e\u7eed\u6b65\u9aa4"),(0,s.kt)("p",null,"\u7f16\u8bd1make \u6210\u529f\u540e\uff0c\u53ef\u4ee5\u5c06\u7f16\u8bd1\u6587\u4ef6\u6253\u5305\u6210tar\u62f7\u8d1d\u51fa\u5bb9\u5668\uff0c\u6216\u8005\u76f4\u63a5\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u3002"),(0,s.kt)("h3",{id:"tar\u6253\u5305\u5bfc\u51fa"},"tar\u6253\u5305\u5bfc\u51fa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"#/home\u76ee\u5f55\u6302\u8f7d\u5230\u5bb9\u5668\u5916\uff0c\u6240\u4ee5\u76f4\u63a5tar\u6253\u5305\u5230\u6302\u8f7d\u76ee\u5f55\u5373\u53ef\u76f4\u63a5\u6253\u5305\u5230\u5bb9\u5668\u5916\n[root@06f1f385d3b3 build]# tar -zcPvf /home/stonedb56.tar.gz /stonedb56/\n")),(0,s.kt)("h3",{id:"\u5bb9\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c\u8bd5\u7528stonedb"},"\u5bb9\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c\u8bd5\u7528StoneDB"),(0,s.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://stoneatom.yuque.com/staff-ft8n1u/dghuxr/cumqaz"},"StoneDB\u5feb\u901f\u90e8\u7f72\u624b\u518c"),"\uff0c\n\u6216\u8005\u5728\u5bb9\u5668\u4e2d\u53c2\u8003\u4ee5\u4e0b\u65b9\u6cd5\u5feb\u901f\u90e8\u7f72\u8fdb\u884c\u8bd5\u7528\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"[root@06f1f385d3b3 build]# cd /stonedb56/install/\n\n[root@06f1f385d3b3 install]# groupadd mysql\n\n[root@06f1f385d3b3 install]# useradd -g mysql mysql\n\n[root@06f1f385d3b3 install]# ll\ntotal 180\n-rw-r--r--.  1 root root  17987 Jun  8 03:41 COPYING\n-rw-r--r--.  1 root root 102986 Jun  8 03:41 INSTALL-BINARY\n-rw-r--r--.  1 root root   2615 Jun  8 03:41 README\ndrwxr-xr-x.  2 root root   4096 Jun  8 06:16 bin\ndrwxr-xr-x.  3 root root     18 Jun  8 06:16 data\ndrwxr-xr-x.  2 root root     55 Jun  8 06:16 docs\ndrwxr-xr-x.  3 root root   4096 Jun  8 06:16 include\n-rwxr-xr-x.  1 root root    267 Jun  8 03:41 install.sh\ndrwxr-xr-x.  3 root root    272 Jun  8 06:16 lib\ndrwxr-xr-x.  4 root root     30 Jun  8 06:16 man\ndrwxr-xr-x. 10 root root   4096 Jun  8 06:16 mysql-test\n-rwxr-xr-x.  1 root root  12516 Jun  8 03:41 mysql_server\n-rwxr-xr-x.  1 root root    764 Jun  8 03:41 reinstall.sh\ndrwxr-xr-x.  2 root root     57 Jun  8 06:16 scripts\ndrwxr-xr-x. 28 root root   4096 Jun  8 06:16 share\ndrwxr-xr-x.  4 root root   4096 Jun  8 06:16 sql-bench\n-rw-r--r--.  1 root root   5526 Jun  8 03:41 stonedb.cnf\ndrwxr-xr-x.  2 root root    136 Jun  8 06:16 support-files\n[root@06f1f385d3b3 install]# ./reinstall.sh\n\n...\n\n#\u51fa\u73b0\u4ee5\u4e0b\u4fe1\u606f\u5373\u542f\u52a8\u6210\u529f\n+ log_success_msg\n+ /etc/redhat-lsb/lsb_log_message success\n/etc/redhat-lsb/lsb_log_message: line 3: /etc/init.d/functions: No such file or directory\n/etc/redhat-lsb/lsb_log_message: line 11: success: command not found\n\n+ return 0\n+ return_value=0\n+ test -w /var/lock/subsys\n+ touch /var/lock/subsys/mysql\n+ exit 0\n\n\n# \u4fee\u6539\u672c\u5730root \u5bc6\u7801\n[root@06f1f385d3b3 install]# /stonedb56/install/bin/mysqladmin flush-privileges -u root password \"*******\"\nWarning: Using a password on the command line interface can be insecure.\n# \u521b\u5efa\u8fdc\u7a0b\u94fe\u63a5\u8d26\u53f7\u5bc6\u7801\n[root@06f1f385d3b3 install]# /stonedb56/install/bin/mysql -uroot -p*******\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 5\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> grant all ON *.* to root@'%' identified by '********';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> flush privileges;\nQuery OK, 0 rows affected (0.00 sec)\n\n")),(0,s.kt)("p",null,"\u5bb9\u5668\u5185\u542f\u52a8StoneDB\u540e\uff0c\u53ef\u4ee5\u5728\u5bb9\u5668\u5185\u767b\u5f55\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7docker run -p\u6302\u8f7d\u6620\u5c04\u7684\u7aef\u53e3\u8fdb\u884c\u8bbf\u95ee\u3002"))}p.isMDXComponent=!0}}]);