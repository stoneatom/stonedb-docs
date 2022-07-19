"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2612],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"quick-deployment",sidebar_position:3.1},s="Quick Deployment",c={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"Quick Deployment",description:"1. Download the latest package",source:"@site/../Docs/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"lylth",lastUpdatedAt:1658198904,formattedLastUpdatedAt:"7/19/2022",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"Server Configuration Requirements",permalink:"/docs/environment-requirements/server-configuration-requirements"},next:{title:"Quick Start",permalink:"/docs/getting-started/quick-start"}},d={},p=[{value:"1. Download the latest package",id:"1-download-the-latest-package",level:2},{value:"2. Upload and decompress the TAR package",id:"2-upload-and-decompress-the-tar-package",level:2},{value:"3. Check dependencies",id:"3-check-dependencies",level:2},{value:"4. Modify the configuration file",id:"4-modify-the-configuration-file",level:2},{value:"5. Create an account",id:"5-create-an-account",level:2},{value:"6. Execute reinstall.sh",id:"6-execute-reinstallsh",level:2},{value:"7. Log in to StoneDB",id:"7-log-in-to-stonedb",level:2},{value:"8. Stop StoneDB",id:"8-stop-stonedb",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-deployment"},"Quick Deployment"),(0,o.kt)("h2",{id:"1-download-the-latest-package"},"1. Download the latest package"),(0,o.kt)("p",null,"Click ",(0,o.kt)("a",{parentName:"p",href:"https://static.stoneatom.com/stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz"},"here")," to download the latest installation package of StoneDB."),(0,o.kt)("h2",{id:"2-upload-and-decompress-the-tar-package"},"2. Upload and decompress the TAR package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"tar -zxvf stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz\n")),(0,o.kt)("p",null,"Upload the installation package to the directory. The name of the folder extracted from the package is ",(0,o.kt)("strong",{parentName:"p"},"stonedb56"),"."),(0,o.kt)("h2",{id:"3-check-dependencies"},"3. Check dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /stonedb56/install/bin\nldd mysqld\nldd mysql\n")),(0,o.kt)("p",null,"If the command output contains keywords ",(0,o.kt)("strong",{parentName:"p"},"not found"),", some dependencies are missing and must be installed."),(0,o.kt)("h2",{id:"4-modify-the-configuration-file"},"4. Modify the configuration file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /stonedb56/install/\ncp stonedb.cnf stonedb.cnf.bak\nvi stonedb.cnf\n")),(0,o.kt)("p",null,"Modify the path and parameters. If the installation folder is ",(0,o.kt)("strong",{parentName:"p"},"stonedb"),", you only need to modify the parameters."),(0,o.kt)("h2",{id:"5-create-an-account"},"5. Create an account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"groupadd mysql\nuseradd -g mysql mysql\npasswd mysql\n")),(0,o.kt)("h2",{id:"6-execute-reinstallsh"},"6. Execute reinstall.sh"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /stonedb56/install\n./reinstall.sh\n")),(0,o.kt)("p",null,"The process of executing the script is to initialize and start the StoneDB."),(0,o.kt)("h2",{id:"7-log-in-to-stonedb"},"7. Log in to StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysql -uroot -p -S /stonedb56/install/tmp/mysql.sock \nEnter password: \nWelcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 1\nServer version: 5.6.24-StoneDB-log build-\n\nCopyright (c) 2000, 2022 StoneAtom Group Holding Limited\nNo entry for terminal type \"xterm\";\nusing dumb terminal settings.\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| cache              |\n| innodb             |\n| mysql              |\n| performance_schema |\n| sys_stonedb        |\n| test               |\n+--------------------+\n7 rows in set (0.00 sec)\n")),(0,o.kt)("h2",{id:"8-stop-stonedb"},"8. Stop StoneDB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/stonedb56/install/bin/mysqladmin -uroot -p -S /stonedb56/install/tmp/mysql.sock shutdown\n")))}m.isMDXComponent=!0}}]);