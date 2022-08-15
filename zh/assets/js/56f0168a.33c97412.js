"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[95],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),d=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return l.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||a;return n?l.createElement(b,o(o({ref:t},p),{},{components:n})):l.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var l=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"quick-deployment",sidebar_position:3.1},i="\u5feb\u901f\u90e8\u7f72",d={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"\u5feb\u901f\u90e8\u7f72",description:"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/zh/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660543547,formattedLastUpdatedAt:"2022/8/15",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350",permalink:"/zh/docs/environment-requirements/server-configuration-requirements"},next:{title:"Docker\u5feb\u901f\u90e8\u7f72StoneDB",permalink:"/zh/docs/getting-started/quick-deploy-in-docker"}},p={},u=[{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",level:2},{value:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",level:2},{value:"\u542f\u52a8\u5b9e\u4f8b",id:"\u542f\u52a8\u5b9e\u4f8b",level:2},{value:"1. \u521b\u5efa\u7528\u6237",id:"1-\u521b\u5efa\u7528\u6237",level:3},{value:"2. \u624b\u52a8\u5b89\u88c5",id:"2-\u624b\u52a8\u5b89\u88c5",level:3},{value:"3. \u81ea\u52a8\u5b89\u88c5",id:"3-\u81ea\u52a8\u5b89\u88c5",level:3},{value:"4. \u6267\u884c\u767b\u5f55",id:"4-\u6267\u884c\u767b\u5f55",level:3},{value:"\u5173\u95ed\u5b9e\u4f8b",id:"\u5173\u95ed\u5b9e\u4f8b",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u90e8\u7f72"},"\u5feb\u901f\u90e8\u7f72"),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u70b9\u51fb ",(0,a.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz"},"\u6b64\u5904"),"\u4e0b\u8f7d\u6700\u65b0\u7684\u5b89\u88c5\u5305\u3002"),(0,a.kt)("h2",{id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"},"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /\ntar -zxvf stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz\n")),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u6839\u636e\u5b89\u88c5\u89c4\u8303\u5c06\u5b89\u88c5\u5305\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\uff0c\u89e3\u538b\u51fa\u6765\u7684\u76ee\u5f55\u662f stonedb56\uff0c\u793a\u4f8b\u4e2d\u7684\u5b89\u88c5\u8def\u5f84\u662f /stonedb56\u3002"),(0,a.kt)("h2",{id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"},"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install/bin\nldd mysqld\nldd mysql\n")),(0,a.kt)("p",null,'\u5982\u679c\u68c0\u67e5\u8fd4\u56de\u6709\u5173\u952e\u5b57"not found"\uff0c\u8bf4\u660e\u7f3a\u5c11\u6587\u4ef6\uff0c\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305\u3002'),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,"libsnappy.so.1 => not found"),(0,a.kt)("p",null,'\u5728 Ubuntu \u4e0a\u4f7f\u7528\u547d\u4ee4 "sudo apt search libsnappy" \u68c0\u67e5\uff0c\u8bf4\u660e\u9700\u8981\u5b89\u88c5 libsnappy-dev\u3002\u5728 RedHat \u6216\u8005 CentOS \u4e0a\u4f7f\u7528\u547d\u4ee4 "yum search all snappy" \u68c0\u67e5\uff0c\u8bf4\u660e\u9700\u8981\u5b89\u88c5 snappy-devel\u3001snappy\u3002'),(0,a.kt)("p",null,"Ubuntu \u9700\u8981\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/developer-guide/compiling-methods/compile-using-ubuntu20.04"},"Ubuntu 20.04 \u4e0b\u7f16\u8bd1 StoneDB"),"\u3002"),(0,a.kt)("p",null,"CentOS \u9700\u8981\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/developer-guide/compiling-methods/compile-using-centos7"},"CentOS 7 \u4e0b\u7f16\u8bd1 StoneDB"),"\u3002"),(0,a.kt)("p",null,"RedHat \u9700\u8981\u5b89\u88c5\u7684\u4f9d\u8d56\u5305\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/developer-guide/compiling-methods/compile-using-redhat7"},"RedHat 7 \u4e0b\u7f16\u8bd1 StoneDB"),"\u3002"),(0,a.kt)("h2",{id:"\u542f\u52a8\u5b9e\u4f8b"},"\u542f\u52a8\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u6309\u7167\u624b\u52a8\u5b89\u88c5\u548c\u81ea\u52a8\u5b89\u88c5\u4e24\u79cd\u65b9\u5f0f\u542f\u52a8 StoneDB\u3002"),(0,a.kt)("h3",{id:"1-\u521b\u5efa\u7528\u6237"},"1. \u521b\u5efa\u7528\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,a.kt)("h3",{id:"2-\u624b\u52a8\u5b89\u88c5"},"2. \u624b\u52a8\u5b89\u88c5"),(0,a.kt)("p",null,"\u624b\u52a8\u521b\u5efa\u76ee\u5f55\u3001\u914d\u7f6e\u53c2\u6570\u6587\u4ef6\u3001\u521d\u59cb\u5316\u548c\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"###\u521b\u5efa\u76ee\u5f55\nmkdir -p /stonedb56/install/data/innodb\nmkdir -p /stonedb56/install/binlog\nmkdir -p /stonedb56/install/log\nmkdir -p /stonedb56/install/tmp\nchown -R mysql:mysql /stonedb56\n\n###\u914d\u7f6e stonedb.cnf\nvim /stonedb56/install/stonedb.cnf\n[mysqld]\nport      = 3306\nsocket    = /stonedb56/install/tmp/mysql.sock\ndatadir   = /stonedb56/install/data\npid-file  = /stonedb56/install/data/mysqld.pid\nlog-error = /stonedb56/install/log/mysqld.log\n\nchown -R mysql:mysql /stonedb56/install/stonedb.cnf\n\n###\u521d\u59cb\u5316\u5b9e\u4f8b\n/stonedb56/install/scripts/mysql_install_db --datadir=/stonedb56/install/data --basedir=/stonedb56/install --user=mysql\n\n###\u542f\u52a8\u5b9e\u4f8b\n/stonedb56/install/bin/mysqld_safe --defaults-file=/stonedb56/install/stonedb.cnf --user=mysql &\n")),(0,a.kt)("h3",{id:"3-\u81ea\u52a8\u5b89\u88c5"},"3. \u81ea\u52a8\u5b89\u88c5"),(0,a.kt)("p",null,"\u6267\u884c reinstall.sh \u5c31\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"reinstall.sh \u4e0e install.sh \u7684\u533a\u522b\uff1a"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"reinstall.sh \u662f\u81ea\u52a8\u5316\u5b89\u88c5\u811a\u672c\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u7684\u8fc7\u7a0b\uff0c\u53ea\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\uff0c\u5176\u4ed6\u4efb\u4f55\u65f6\u5019\u4f7f\u7528\u90fd\u4f1a\u5220\u9664\u6574\u4e2a\u76ee\u5f55\uff0c\u91cd\u65b0\u521d\u59cb\u5316\u6570\u636e\u5e93\u3002"),(0,a.kt)("li",{parentName:"ul"},"install.sh \u662f\u624b\u52a8\u5b89\u88c5\u63d0\u4f9b\u7684\u793a\u4f8b\u811a\u672c\uff0c\u7528\u6237\u53ef\u6839\u636e\u81ea\u5b9a\u4e49\u7684\u5b89\u88c5\u76ee\u5f55\u4fee\u6539\u8def\u5f84\uff0c\u7136\u540e\u6267\u884c\u811a\u672c\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u4e5f\u662f\u521b\u5efa\u76ee\u5f55\u3001\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u3002\u4ee5\u4e0a\u4e24\u4e2a\u811a\u672c\u90fd\u53ea\u80fd\u5728\u7b2c\u4e00\u6b21\u4f7f\u7528\u3002")))),(0,a.kt)("h3",{id:"4-\u6267\u884c\u767b\u5f55"},"4. \u6267\u884c\u767b\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock\nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 2\nServer version: 5.6.24-StoneDB-debug build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")),(0,a.kt)("h2",{id:"\u5173\u95ed\u5b9e\u4f8b"},"\u5173\u95ed\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysqladmin -uroot -p -S /stonedb56/install/tmp/mysql.sock shutdown\n")))}m.isMDXComponent=!0}}]);