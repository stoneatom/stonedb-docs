"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5286],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,s(s({ref:n},d),{},{components:t})):o.createElement(f,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},79815:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"compile-using-docker",sidebar_position:5.15},c="Compile StoneDB in a Docker Container",l={unversionedId:"developer-guide/compiling-methods/compile-using-docker",id:"developer-guide/compiling-methods/compile-using-docker",title:"Compile StoneDB in a Docker Container",description:"Introduction",source:"@site/../Docs/04-developer-guide/00-compiling-methods/compile-using-docker.md",sourceDirName:"04-developer-guide/00-compiling-methods",slug:"/developer-guide/compiling-methods/compile-using-docker",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-docker",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/website/i18n/zh/docusaurus-plugin-content-docs/current/04-developer-guide/00-compiling-methods/compile-using-docker.md",tags:[],version:"current",lastUpdatedBy:"leizzboy",lastUpdatedAt:1657506276,formattedLastUpdatedAt:"2022/7/11",sidebarPosition:5.15,frontMatter:{id:"compile-using-docker",sidebar_position:5.15},sidebar:"autoSidebar",previous:{title:"Compile StoneDB on Ubuntu 20.04",permalink:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"},next:{title:"Use mysql to Connect to StoneDB",permalink:"/zh/docs/developer-guide/connect-to-stonedb/use-mysql-client"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Use a Dockerfile in a compilation environment",id:"use-a-dockerfile-in-a-compilation-environment",level:2},{value:"Step 1. Download the source code of StoneDB and docker.zip",id:"step-1-download-the-source-code-of-stonedb-and-dockerzip",level:3},{value:"Step 2. Build a Docker image",id:"step-2-build-a-docker-image",level:3},{value:"Step 3. Enter the container and compile StoneDB",id:"step-3-enter-the-container-and-compile-stonedb",level:3},{value:"(Optional) Follow-up operations",id:"optional-follow-up-operations",level:2},{value:"Compress compilation files to a TAR file",id:"compress-compilation-files-to-a-tar-file",level:3},{value:"Directly use StoneDB in the container",id:"directly-use-stonedb-in-the-container",level:3}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"compile-stonedb-in-a-docker-container"},"Compile StoneDB in a Docker Container"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Compiling StoneDB on a physical server requires installation of third-party repositories, which is complicated. In addition, if the OS in your environment is Fedora or Ubuntu, you also need to install many dependencies. We recommend that you compile StoneDB in a Docker container. After StoneDB is compiled, you can directly run StoneDB in the container or copy the compilation files to your environment."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Docker has been installed. For information about how to install Docker, visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"https://docs.docker.com/engine/install/ubuntu/"),"."),(0,i.kt)("h2",{id:"use-a-dockerfile-in-a-compilation-environment"},"Use a Dockerfile in a compilation environment"),(0,i.kt)("h3",{id:"step-1-download-the-source-code-of-stonedb-and-dockerzip"},"Step 1. Download the source code of StoneDB and docker.zip"),(0,i.kt)("p",null,"Download file ",(0,i.kt)("strong",{parentName:"p"},"docker.zip"),", save the file to the root directory of the source code of StoneDB, and then decompress the file."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/stonedb_docker_220706.zip"},"docker.zip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@testOS src]# cd /home/src/\n[root@testOS src]# git clone https://github.com/stoneatom/stonedb.git\nCloning into 'stonedb'...\nremote: Enumerating objects: 84350, done.\nremote: Counting objects: 100% (84350/84350), done.\nremote: Total 84350 (delta 19707), reused 83550 (delta 19707), pack-reused 0\nReceiving objects: 100% (84350/84350), 402.19 MiB | 13.50 MiB/s, done.\nResolving deltas: 100% (19707/19707), done.\n\n[root@testOS src]# cd atomstore2022/\n\n#Use an FTP tool to upload 'docker.zip' to this directory for decompression.\n[root@testOS atomstore2022]# unzip docker.zip\n[root@testOS atomstore2022]# tree docker\ndocker\n\u251c\u2500\u2500 cmake.tar.gz\n\u251c\u2500\u2500 docker_build.sh\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 stonedb-boost1.66.tar.gz\n\u251c\u2500\u2500 stonedb-gcc-rocksdb.tar.gz\n\u2514\u2500\u2500 stonedb-marisa.tar.gz\n\n0 directories, 6 files\n")),(0,i.kt)("h3",{id:"step-2-build-a-docker-image"},"Step 2. Build a Docker image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@testOS atomstore2022]# cd docker\n[root@testOS docker]# chmod u+x docker_build.sh\n# If an image has been created in your environment, you can use the cache. If this is the first image that is to be created in your environment, you must install dependencies. This may take a longer period of time.\n# Run the './docker_build.sh <tag>' command to call the script. <tag> specifies the tag of the image.\n# Example './docker_build.sh 0.1'\n[root@testOS docker]# ./docker_build.sh v0.1\n/home/src\nSending build context to Docker daemon  99.41MB\nStep 1/14 : FROM centos:7\n ---\x3e eeb6ee3f44bd\nStep 2/14 : ENV container docker\n ---\x3e Using cache\n ---\x3e dc33c0e29f61\nStep 3/14 : RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == systemd-tmpfiles-setup.service ] || rm -f $i; done); rm -f /lib/systemd/system/multi-user.target.wants/*;rm -f /etc/systemd/system/*.wants/*;rm -f /lib/systemd/system/local-fs.target.wants/*; rm -f /lib/systemd/system/sockets.target.wants/*udev*; rm -f /lib/systemd/system/sockets.target.wants/*initctl*; rm -f /lib/systemd/system/basic.target.wants/*;rm -f /lib/systemd/system/anaconda.target.wants/*;\n ---\x3e Using cache\n ---\x3e 12ca4ee4c8b0\nStep 4/14 : RUN yum install -y epel-release.noarch\n ---\x3e Using cache\n ---\x3e 8b9a0d9cb423\nStep 5/14 : RUN  yum install -y snappy-devel lz4-devel bzip2-devel libzstd-devel.x86_64 ncurses-devel make bison libaio ncurses-devel perl perl-DBI perl-DBD-MySQL perl-Time-HiRes readline-devel numactl zlib-devel curldevel openssl-devel redhat-lsb-core.x86_64 git\n ---\x3e Using cache\n ---\x3e c7cf717b95c4\nStep 6/14 : RUN yum install -y centos-release-scl && yum install devtoolset-7-gcc* -y\n ---\x3e Using cache\n ---\x3e e512aca12c7e\nStep 7/14 : RUN ln -s /opt/rh/devtoolset-7/root/bin/gcc /usr/bin/gcc    && ln -s /opt/rh/devtoolset-7/root/bin/g++ /usr/bin/g++    && ln -s /opt/rh/devtoolset-7/root/bin/c++ /usr/bin/c++\n ---\x3e Using cache\n ---\x3e 39cb9ada4812\nStep 8/14 : RUN yum clean all\n ---\x3e Using cache\n ---\x3e 1370d1dc1a8e\nStep 9/14 : ADD cmake.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e f93823785ade\nStep 10/14 : RUN ln -s /usr/local/cmake/bin/cmake /usr/bin/\n ---\x3e Using cache\n ---\x3e f5f9d2b3c35b\nStep 11/14 : ADD stonedb-marisa.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e e787d2341307\nStep 12/14 : ADD stonedb-boost1.66.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e 5d115e2ddb34\nStep 13/14 : ADD stonedb-gcc-rocksdb.tar.gz /usr/local/\n ---\x3e Using cache\n ---\x3e a338f6756d71\nStep 14/14 : CMD [\"/usr/sbin/init\"]\n ---\x3e Using cache\n ---\x3e 38381cd2bf3d\nSuccessfully built 38381cd2bf3d\nSuccessfully tagged stonedb_buildenv:v0.1\nDocker build success!you can run it:\n        docker run -d -p 23306:3306 -v /home/src:/home/ stonedb_buildenv:v0.1\n\n\n\n")),(0,i.kt)("h3",{id:"step-3-enter-the-container-and-compile-stonedb"},"Step 3. Enter the container and compile StoneDB"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# docker run parameter description\n# -v Directory mounting. Specify the directory on the host first and then the directory in the container.\n# -p Port mapping. Specify the port on the host first and then the port in the container.\n#    After configuring the port mapping, you can directly start StoneDB in the container. If you do not need the trial, you can skip this parameter.\n# docker run You can refer to the commands used in 'Step 2. Build a Docker image'.\n[root@testOS docker]# docker run -d -p 23306:3306 -v /home/src:/home/ stonedb_buildenv:v0.1\n06f1f385d3b35c86c4ed324731a13785b2a66f8ef2c3423c9b4711c56de1910f\n[root@testOS docker]# docker ps\nCONTAINER ID        IMAGE                   COMMAND             CREATED             STATUS              PORTS                     NAMES\n06f1f385d3b3        stonedb_buildenv:v0.1   \"/usr/sbin/init\"    18 seconds ago      Up 17 seconds       0.0.0.0:23306->3306/tcp   confident_tesla\n\n# Enter the Docker container and compile StoneDB.\n[root@testOS docker]# docker exec -it 06f1f385d3b3 bash\n[root@06f1f385d3b3 home]# cd /home/atomstore2022/\n[root@06f1f385d3b3 atomstore2022]# git branch -a\n* 0.4\n  remotes/origin/0.4\n  remotes/origin/0.5\n  remotes/origin/HEAD -> origin/0.4\n\n[root@06f1f385d3b3 atomstore2022]# git checkout 0.5\nBranch 0.5 set up to track remote branch 0.5 from origin.\nSwitched to a new branch '0.5'\n[root@06f1f385d3b3 atomstore2022]# git branch -a\n  0.4\n* 0.5\n  remotes/origin/0.4\n  remotes/origin/0.5\n  remotes/origin/HEAD -> origin/0.4\n  \n[root@06f1f385d3b3 atomstore2022]# mkdir build\n\n[root@06f1f385d3b3 atomstore2022]# cd build/\n\n[root@06f1f385d3b3 build]# cmake ../ \\\n-DCMAKE_BUILD_TYPE=RelWithDebInfo \\\n-DCMAKE_INSTALL_PREFIX=/stonedb56/install \\\n-DMYSQL_DATADIR=/stonedb56/install/data \\\n-DSYSCONFDIR=/stonedb56/install \\\n-DMYSQL_UNIX_ADDR=/stonedb56/install/tmp/mysql.sock \\\n-DWITH_EMBEDDED_SERVER=OFF \\\n-DWITH_STONEDB_STORAGE_ENGINE=1 \\\n-DWITH_MYISAM_STORAGE_ENGINE=1 \\\n-DWITH_INNOBASE_STORAGE_ENGINE=1 \\\n-DWITH_PARTITION_STORAGE_ENGINE=1 \\\n-DMYSQL_TCP_PORT=3306 \\\n-DENABLED_LOCAL_INFILE=1 \\\n-DEXTRA_CHARSETS=all \\\n-DDEFAULT_CHARSET=utf8 \\\n-DDEFAULT_COLLATION=utf8_general_ci \\\n-DDOWNLOAD_BOOST=0 \\\n-DWITH_BOOST=/usr/local/stonedb-boost/include/\n\n#After the 'cmake' command is completed, run the 'make' and 'make install' commands.\n[root@06f1f385d3b3 build]# make \n[root@06f1f385d3b3 build]# make install\n")),(0,i.kt)("h2",{id:"optional-follow-up-operations"},"(Optional) Follow-up operations"),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," commands are successful, you can choose either to compress the compilation files to a TAR file and copy the TAR file from the container or to directly run it in the container."),(0,i.kt)("h3",{id:"compress-compilation-files-to-a-tar-file"},"Compress compilation files to a TAR file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Compress the 'home' folder to a TAR file and mount the TAR file to a directory outside the container.\n[root@06f1f385d3b3 build]# tar -zcPvf /home/stonedb56.tar.gz /stonedb56/\n")),(0,i.kt)("h3",{id:"directly-use-stonedb-in-the-container"},"Directly use StoneDB in the container"),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://stoneatom.yuque.com/staff-ft8n1u/dghuxr/pv8ath"},"Quick Deployment")," or the following code to deploy and use StoneDB in the container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"[root@06f1f385d3b3 build]# cd /stonedb56/install/\n\n[root@06f1f385d3b3 install]# groupadd mysql\n\n[root@06f1f385d3b3 install]# useradd -g mysql mysql\n\n[root@06f1f385d3b3 install]# ll\ntotal 180\n-rw-r--r--.  1 root root  17987 Jun  8 03:41 COPYING\n-rw-r--r--.  1 root root 102986 Jun  8 03:41 INSTALL-BINARY\n-rw-r--r--.  1 root root   2615 Jun  8 03:41 README\ndrwxr-xr-x.  2 root root   4096 Jun  8 06:16 bin\ndrwxr-xr-x.  3 root root     18 Jun  8 06:16 data\ndrwxr-xr-x.  2 root root     55 Jun  8 06:16 docs\ndrwxr-xr-x.  3 root root   4096 Jun  8 06:16 include\n-rwxr-xr-x.  1 root root    267 Jun  8 03:41 install.sh\ndrwxr-xr-x.  3 root root    272 Jun  8 06:16 lib\ndrwxr-xr-x.  4 root root     30 Jun  8 06:16 man\ndrwxr-xr-x. 10 root root   4096 Jun  8 06:16 mysql-test\n-rwxr-xr-x.  1 root root  12516 Jun  8 03:41 mysql_server\n-rwxr-xr-x.  1 root root    764 Jun  8 03:41 reinstall.sh\ndrwxr-xr-x.  2 root root     57 Jun  8 06:16 scripts\ndrwxr-xr-x. 28 root root   4096 Jun  8 06:16 share\ndrwxr-xr-x.  4 root root   4096 Jun  8 06:16 sql-bench\n-rw-r--r--.  1 root root   5526 Jun  8 03:41 stonedb.cnf\ndrwxr-xr-x.  2 root root    136 Jun  8 06:16 support-files\n[root@06f1f385d3b3 install]# ./reinstall.sh\n\u3002\n\u3002\n\u3002\n\u3002\n# If the following information is returned, StoneDB is started.\n+ log_success_msg\n+ /etc/redhat-lsb/lsb_log_message success\n/etc/redhat-lsb/lsb_log_message: line 3: /etc/init.d/functions: No such file or directory\n/etc/redhat-lsb/lsb_log_message: line 11: success: command not found\n\n+ return 0\n+ return_value=0\n+ test -w /var/lock/subsys\n+ touch /var/lock/subsys/mysql\n+ exit 0\n\n\n# Reset the password of local user 'root'.\n[root@06f1f385d3b3 install]# /stonedb56/install/bin/mysqladmin flush-privileges -u root password \"*******\"\nWarning: Using a password on the command line interface can be insecure.\n# Create a username and password for remote connection.\n[root@06f1f385d3b3 install]# /stonedb56/install/bin/mysql -uroot -p*******\nWarning: Using a password on the command line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 5\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> grant all ON *.* to root@'%' identified by '********';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> flush privileges;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,i.kt)("p",null,"After you start StoneDB in the container, you can log in to and use StoneDB or run the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run -p <port mapping>")," command to connect to StoneDB."))}m.isMDXComponent=!0}}]);