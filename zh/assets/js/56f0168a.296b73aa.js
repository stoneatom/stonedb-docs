"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[95],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80287:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"quick-deployment",sidebar_position:3.1},d="\u5feb\u901f\u90e8\u7f72",s={unversionedId:"getting-started/quick-deployment",id:"getting-started/quick-deployment",title:"\u5feb\u901f\u90e8\u7f72",description:"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deployment",permalink:"/zh/docs/getting-started/quick-deployment",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.6/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deployment.md",tags:[],version:"current",lastUpdatedBy:"leizzboy",lastUpdatedAt:1657506276,formattedLastUpdatedAt:"2022/7/11",sidebarPosition:3.1,frontMatter:{id:"quick-deployment",sidebar_position:3.1},sidebar:"autoSidebar",previous:{title:"Server Configuration Requirements",permalink:"/zh/docs/environment-requirements/server-configuration-requirements"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh/docs/getting-started/quick-start"}},u={},c=[{value:"\u4e0b\u8f7d\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u5b89\u88c5\u5305",level:2},{value:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b",level:2},{value:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u7528\u6237\u548c\u76ee\u5f55",id:"\u521b\u5efa\u7528\u6237\u548c\u76ee\u5f55",level:2},{value:"\u521d\u59cb\u5316\u5b9e\u4f8b",id:"\u521d\u59cb\u5316\u5b9e\u4f8b",level:2},{value:"\u542f\u52a8\u548c\u5173\u95ed\u5b9e\u4f8b",id:"\u542f\u52a8\u548c\u5173\u95ed\u5b9e\u4f8b",level:2},{value:"\u767b\u5f55\u4fee\u6539\u7ba1\u7406\u5458\u5bc6\u7801",id:"\u767b\u5f55\u4fee\u6539\u7ba1\u7406\u5458\u5bc6\u7801",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5feb\u901f\u90e8\u7f72"},"\u5feb\u901f\u90e8\u7f72"),(0,i.kt)("p",null,"\u4e3a\u65b9\u4fbf\u7528\u6237\u5feb\u901f\u4e0a\u624b\uff0c\u5b89\u88c5\u5305\u662f\u5df2\u7ecf\u7f16\u8bd1\u597d\u7684\uff0c\u53ea\u9700\u8981\u68c0\u67e5\u81ea\u5df1\u7684\u73af\u5883\u662f\u5426\u7f3a\u5c11\u4f9d\u8d56\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u5b89\u88c5\u5305"),(0,i.kt)("p",null,"\u70b9\u51fb",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/download"},"\u6b64\u5904"),"\u4e0b\u8f7d\u6700\u65b0\u7684\u5b89\u88c5\u5305\u3002"),(0,i.kt)("h2",{id:"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"},"\u4e0a\u4f20tar\u5305\u5e76\u89e3\u538b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tar -zxvf stonedb-ce-5.6-v1.0.0.el7.x86_64.tar.gz\n")),(0,i.kt)("p",null,"\u4e0a\u4f20\u81f3\u5b89\u88c5\u76ee\u5f55\uff0c\u89e3\u538b\u51fa\u6765\u7684\u6587\u4ef6\u5939\u540d\u662fstonedb\u3002"),(0,i.kt)("h2",{id:"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"},"\u68c0\u67e5\u4f9d\u8d56\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd stonedb/install/bin\nldd mysqld\nldd mysql\n")),(0,i.kt)("p",null,'\u5982\u679c\u68c0\u67e5\u8fd4\u56de\u6709\u5173\u952e\u5b57"not found"\uff0c\u8bf4\u660e\u7f3a\u5c11\u6587\u4ef6\uff0c\u9700\u8981\u5b89\u88c5\u5bf9\u5e94\u7684\u4f9d\u8d56\u5305\u3002'),(0,i.kt)("h2",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd stonedb/install/\ncp stonedb.cnf stonedb.cnf.bak\nvi stonedb.cnf\n")),(0,i.kt)("p",null,"\u4e3b\u8981\u4fee\u6539\u8def\u5f84\uff0c\u5982\u679c\u5b89\u88c5\u76ee\u5f55\u5c31\u662fstonedb\uff0c\u53ea\u9700\u8981\u4fee\u6539\u5176\u5b83\u53c2\u6570\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa\u7528\u6237\u548c\u76ee\u5f55"},"\u521b\u5efa\u7528\u6237\u548c\u76ee\u5f55"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"groupadd stonedb\nuseradd -g stonedb stonedb\npasswd stonedb\ncd stonedb/install/\nmkdir binlog\nmkdir log\nmkdir tmp\nmkdir redolog\nmkdir undolog\nchown -R stonedb:stonedb stonedb\n")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u5b9e\u4f8b"},"\u521d\u59cb\u5316\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/stonedb/install/bin/mysqld --defaults-file=/stonedb/install/stonedb.cnf --initialize-insecure --user=stonedb\n")),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u5b9e\u4f8b\u65f6\uff0c\u52a0\u53c2\u6570--initialize-insecure\u662f\u4e3a\u4e86\u8ba9\u7ba1\u7406\u5458\u7b2c\u4e00\u6b21\u767b\u5f55\u662f\u514d\u5bc6\u767b\u5f55\uff0c\u767b\u5f55\u540e\u9700\u8981\u8bbe\u7f6e\u5bc6\u7801\u3002"),(0,i.kt)("h2",{id:"\u542f\u52a8\u548c\u5173\u95ed\u5b9e\u4f8b"},"\u542f\u52a8\u548c\u5173\u95ed\u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/stonedb/install/bin/mysqld_safe --defaults-file=/stonedb/install/stonedb.cnf --user=stonedb &\nmysqladmin -uroot -p -S /stonedb/install/tmp/mysql.sock shutdown\n")),(0,i.kt)("h2",{id:"\u767b\u5f55\u4fee\u6539\u7ba1\u7406\u5458\u5bc6\u7801"},"\u767b\u5f55\u4fee\u6539\u7ba1\u7406\u5458\u5bc6\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql -uroot -p -S /stonedb/install/tmp/mysql.sock\n>set password = password('MYPASSWORD');\n")),(0,i.kt)("p",null,"\u6ce8\uff1a\u8bf7\u5c06\u4ee5\u4e0a\u547d\u4ee4\u884c\u4e2d\u7684MYPASSWORD\u8bbe\u7f6e\u4e3a\u60a8\u60f3\u8981\u7684\u5bc6\u7801\u3002"))}m.isMDXComponent=!0}}]);