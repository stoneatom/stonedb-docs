"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[95],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"quick-deployment",sidebar_position:3.1},i="\u5feb\u901f\u90e8\u7f72",c={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"\u5feb\u901f\u90e8\u7f72",description:"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/zh/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350",permalink:"/zh/docs/environment-requirements/server-configuration-requirements"},next:{title:"Docker\u5feb\u901f\u90e8\u7f72StoneDB",permalink:"/zh/docs/getting-started/quick-deploy-in-docker"}},u={},d=[{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",level:2},{value:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:2},{value:"\u6267\u884c\u811a\u672creinstall.sh",id:"\u6267\u884c\u811a\u672creinstallsh",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u5173\u95ed\u5b9e\u4f8b",id:"\u5173\u95ed\u5b9e\u4f8b",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u90e8\u7f72"},"\u5feb\u901f\u90e8\u7f72"),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz"},"\u6b64\u5904"),"\u4e0b\u8f7d\u6700\u65b0\u7684\u5b89\u88c5\u5305\u3002"),(0,a.kt)("h2",{id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"},"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz\n")),(0,a.kt)("p",null,"\u4e0a\u4f20\u81f3\u5b89\u88c5\u76ee\u5f55\uff0c\u89e3\u538b\u51fa\u6765\u7684\u6587\u4ef6\u5939\u540d\u662f stonedb56\u3002"),(0,a.kt)("h2",{id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"},"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install/bin\nldd mysqld\nldd mysql\n")),(0,a.kt)("p",null,'\u5982\u679c\u68c0\u67e5\u8fd4\u56de\u6709\u5173\u952e\u5b57"not found"\uff0c\u8bf4\u660e\u7f3a\u5c11\u6587\u4ef6\uff0c\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305\u3002\u4f8b\u5982\uff1a'),(0,a.kt)("p",null,"libsnappy.so.1 => not found"),(0,a.kt)("p",null,'\u5728 Ubuntu \u4e0a\u4f7f\u7528\u547d\u4ee4 "sudo apt search libsnappy" \u68c0\u67e5\uff0c\u8bf4\u660e\u9700\u8981\u5b89\u88c5 libsnappy-dev\u3002\u5728 RedHat \u6216\u8005 CentOS \u4e0a\u4f7f\u7528\u547d\u4ee4 "yum search all snappy" \u68c0\u67e5\uff0c\u8bf4\u660e\u9700\u8981\u5b89\u88c5 snappy-devel\u3001snappy\u3002'),(0,a.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install/\ncp stonedb.cnf stonedb.cnf.bak\nvi stonedb.cnf\n")),(0,a.kt)("p",null,"\u4e3b\u8981\u4fee\u6539\u8def\u5f84\uff0c\u5982\u679c\u5b89\u88c5\u76ee\u5f55\u5c31\u662f stonedb56\uff0c\u53ea\u9700\u8981\u4fee\u6539\u5176\u5b83\u53c2\u6570\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u7528\u6237"},"\u521b\u5efa\u7528\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,a.kt)("h2",{id:"\u6267\u884c\u811a\u672creinstallsh"},"\u6267\u884c\u811a\u672creinstall.sh"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,a.kt)("p",null,"\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u5c31\u662f\u521d\u59cb\u5316\u5b9e\u4f8b\u548c\u542f\u52a8\u5b9e\u4f8b\u3002"),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock \nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")),(0,a.kt)("h2",{id:"\u5173\u95ed\u5b9e\u4f8b"},"\u5173\u95ed\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysqladmin -uroot -p -S /stonedb56/install/tmp/mysql.sock shutdown\n")))}m.isMDXComponent=!0}}]);