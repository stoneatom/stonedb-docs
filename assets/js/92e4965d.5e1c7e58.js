"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2390],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90941:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"failed-to-start-in-kvm",sidebar_position:9.6},s="Failed to Start StoneDB in a KVM",d={unversionedId:"troubleshooting/failed-to-start-in-kvm",id:"troubleshooting/failed-to-start-in-kvm",title:"Failed to Start StoneDB in a KVM",description:"An error is returned when StoneDB is started in a kernel-based virtual machine (KVM).",source:"@site/../Docs/08-troubleshooting/failed-to-start-in-kvm.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/failed-to-start-in-kvm",permalink:"/docs/troubleshooting/failed-to-start-in-kvm",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/08-troubleshooting/failed-to-start-in-kvm.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1660547370,formattedLastUpdatedAt:"8/15/2022",sidebarPosition:9.6,frontMatter:{id:"failed-to-start-in-kvm",sidebar_position:9.6},sidebar:"autoSidebar",previous:{title:"Failed to Operate on Data in StoneDB Tables",permalink:"/docs/troubleshooting/failed-to-operate-table"},next:{title:"Failed to Connect to StoneDB",permalink:"/docs/troubleshooting/failed-to-connect"}},c={},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"failed-to-start-stonedb-in-a-kvm"},"Failed to Start StoneDB in a KVM"),(0,a.kt)("p",null,"An error is returned when StoneDB is started in a kernel-based virtual machine (KVM)."),(0,a.kt)("p",null,"The following code provides an example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# /stonedb/install/bin/mysql_server start\nStarting stonedbbasedir::: /stonedb/install/\nbindir::: /stonedb/install//bin\ndatadir::: /stonedb/install/data\nmysqld_pid::: /stonedb/install/data/mysqld.pid\n...220307 02:14:15 mysqld_safe Logging to '/stonedb/install/log/mysqld.log'.\n.220307 02:14:15 mysqld_safe Starting mysqld daemon with databases from /stonedb/install/data\n/stonedb/install//bin/mysqld_safe: line 166: 22159 Illegal instruction     nohup /stonedb/install/bin/mysqld --basedir=/stonedb/install/ --datadir=/stonedb/install/data --plugin-dir=/stonedb/install/lib/plugin --user=mysql --log-error=/stonedb/install/log/mysqld.log --open-files-limit=65535 --pid-file=/stonedb/install/data/mysqld.pid --socket=/stonedb/install//tmp/mysql.sock --port=3306 < /dev/null >> /stonedb/install/log/mysqld.log 2>&1:q\n220307 02:14:15 mysqld_safe mysqld from pid file /stonedb/install/data/mysqld.pid ended\n./mysql_server: line 264: kill: (20941) - No such process\n ERROR!\n")),(0,a.kt)("p",null,"The status code and error message are ",(0,a.kt)("strong",{parentName:"p"},"22159 Illegal instruction"),"."),(0,a.kt)("p",null,"This error occurs when the system cannot identify the instruction set. After GDB is used to analyze the core dump files, the cause is located: Advanced Vector Extensions (AVX) is disabled. Enable AVX and then you can start StoneDB."),(0,a.kt)("p",null,"To check whether AVX is enabled, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat /proc/cpuinfo | grep avx\n")))}m.isMDXComponent=!0}}]);