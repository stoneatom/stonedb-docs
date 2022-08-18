"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[7838],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(n),f=o,b=d["".concat(i,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(b,a(a({ref:e},p),{},{components:n})):r.createElement(b,a({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78736:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],u={id:"intro",sidebar_position:1.1},i="StoneDB \u7b80\u4ecb",c={unversionedId:"about-stonedb/intro",id:"about-stonedb/intro",title:"StoneDB \u7b80\u4ecb",description:"StoneDB \u662f\u7531\u77f3\u539f\u5b50\u79d1\u6280\u516c\u53f8\u81ea\u4e3b\u8bbe\u8ba1\u3001\u7814\u53d1\u7684\u56fd\u5185\u9996\u6b3e\u57fa\u4e8e MySQL \u5185\u6838\u6253\u9020\u7684\u5f00\u6e90 HTAP\uff08Hybrid Transactional and Analytical Processing\uff09\u878d\u5408\u578b\u6570\u636e\u5e93\uff0c\u53ef\u5b9e\u73b0\u4e0e MySQL \u7684\u65e0\u7f1d\u5207\u6362\u3002StoneDB \u5177\u5907\u8d85\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u5206\u6790\u7b49\u7279\u70b9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f HTAP \u89e3\u51b3\u65b9\u6848\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/00-about-stonedb/intro.md",sourceDirName:"00-about-stonedb",slug:"/about-stonedb/intro",permalink:"/zh/docs/about-stonedb/intro",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/00-about-stonedb/intro.md",tags:[],version:"current",lastUpdatedBy:"Yuting",lastUpdatedAt:1660802807,formattedLastUpdatedAt:"2022/8/18",sidebarPosition:1.1,frontMatter:{id:"intro",sidebar_position:1.1},sidebar:"autoSidebar",next:{title:"\u6574\u4f53\u67b6\u6784",permalink:"/zh/docs/about-stonedb/architecture"}},p={},s=[{value:"\u4ea7\u54c1\u4f18\u52bf",id:"\u4ea7\u54c1\u4f18\u52bf",level:2},{value:"\u6838\u5fc3\u6280\u672f",id:"\u6838\u5fc3\u6280\u672f",level:2}],d={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"stonedb-\u7b80\u4ecb"},"StoneDB \u7b80\u4ecb"),(0,l.kt)("p",null,"StoneDB \u662f\u7531\u77f3\u539f\u5b50\u79d1\u6280\u516c\u53f8\u81ea\u4e3b\u8bbe\u8ba1\u3001\u7814\u53d1\u7684\u56fd\u5185\u9996\u6b3e\u57fa\u4e8e MySQL \u5185\u6838\u6253\u9020\u7684\u5f00\u6e90 HTAP\uff08Hybrid Transactional and Analytical Processing\uff09\u878d\u5408\u578b\u6570\u636e\u5e93\uff0c\u53ef\u5b9e\u73b0\u4e0e MySQL \u7684\u65e0\u7f1d\u5207\u6362\u3002StoneDB \u5177\u5907\u8d85\u9ad8\u6027\u80fd\u3001\u5b9e\u65f6\u5206\u6790\u7b49\u7279\u70b9\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ad9\u5f0f HTAP \u89e3\u51b3\u65b9\u6848\u3002"),(0,l.kt)("p",null,"StoneDB 100% \u517c\u5bb9 MySQL 5.6\u30015.7 \u534f\u8bae\u548c MySQL \u751f\u6001\u7b49\u91cd\u8981\u7279\u6027\uff0c\u652f\u6301 MySQL \u5e38\u7528\u7684\u529f\u80fd\u53ca\u8bed\u6cd5\uff0c\u652f\u6301 MySQL \u751f\u6001\u4e2d\u7684\u7cfb\u7edf\u5de5\u5177\u548c\u5ba2\u6237\u7aef\uff0c\u5982 Navicat\u3001Workbench\u3001mysqldump\u3001mydumper\u3002\u7531\u4e8e 100% \u517c\u5bb9 MySQL\uff0c\u56e0\u6b64 StoneDB \u7684\u6240\u6709\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 MySQL \u6570\u636e\u5e93\u4f53\u7cfb\u8fd0\u884c\u3002"),(0,l.kt)("p",null,"StoneDB \u4e13\u95e8\u9488\u5bf9 OLAP \u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u4e86\u8bbe\u8ba1\u548c\u4f18\u5316\uff0c\u652f\u6301\u767e\u4ebf\u6570\u636e\u573a\u666f\u4e0b\u8fdb\u884c\u9ad8\u6027\u80fd\u3001\u591a\u7ef4\u5ea6\u5b57\u6bb5\u7ec4\u5408\u7684\u590d\u6742\u67e5\u8be2\uff0c\u76f8\u5bf9\u6bd4\u793e\u533a\u7248\u7684 MySQL\uff0c\u5176\u67e5\u8be2\u901f\u5ea6\u63d0\u5347\u4e86\u5341\u500d\u4ee5\u4e0a\u3002"),(0,l.kt)("p",null,"StoneDB \u91c7\u7528\u57fa\u4e8e\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u548c\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce\uff0c\u8be5\u5b58\u50a8\u5f15\u64ce\u4e3a\u6d77\u91cf\u6570\u636e\u80cc\u666f\u4e0b OLAP \u5e94\u7528\u800c\u8bbe\u8ba1\uff0c\u901a\u8fc7\u5217\u5f0f\u5b58\u50a8\u6570\u636e\u3001\u77e5\u8bc6\u7f51\u683c\u8fc7\u6ee4\u3001\u9ad8\u6548\u6570\u636e\u538b\u7f29\u7b49\u6280\u672f\uff0c\u4e3a\u5e94\u7528\u7cfb\u7edf\u63d0\u4f9b\u4f4e\u6210\u672c\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u67e5\u8be2\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u4ea7\u54c1\u4f18\u52bf"},"\u4ea7\u54c1\u4f18\u52bf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u517c\u5bb9 MySQL")),(0,l.kt)("p",null,"StoneDB \u652f\u6301\u6807\u51c6\u6570\u636e\u5e93\u63a5\u53e3\uff0c\u5305\u62ec ODBC\u3001JDBC \u548c\u672c\u5730\u8fde\u63a5\u3002\u652f\u6301 API \u63a5\u53e3\uff0c\u5305\u62ec C\u3001C++\u3001C#\u3001Java\u3001PHP\u3001Perl \u7b49\u3002StoneDB \u5168\u9762\u652f\u6301 ANSI SQL-92 \u6807\u51c6\u548c SQL-99 \u6269\u5c55\u6807\u51c6\u4e2d\u89c6\u56fe\u548c\u5b58\u50a8\u8fc7\u7a0b\uff0c\u8fd9\u79cd\u652f\u6301\u4f7f\u5f97\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u65e0\u9700\u4fee\u6539\u5e94\u7528\u4ee3\u7801\u5373\u53ef\u4f7f\u7528 StoneDB\uff0c\u4ece\u800c\u53ef\u5b9e\u73b0\u4e0e MySQL \u7684\u65e0\u7f1d\u5207\u6362\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u67e5\u8be2")),(0,l.kt)("p",null,"\u5728\u5343\u4e07\u3001\u4ebf\u7ea7\u751a\u81f3\u66f4\u591a\u6570\u636e\u91cf\u4e0b\u8fdb\u884c\u590d\u6742\u67e5\u8be2\u65f6\uff0cStoneDB \u76f8\u6bd4\u5176\u4ed6\u884c\u5f0f\u5b58\u50a8\u5f15\u64ce\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u5176\u67e5\u8be2\u901f\u5ea6\u63d0\u5347\u4e86\u5341\u500d\u4ee5\u4e0a\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f4e\u5b58\u50a8\u6210\u672c")),(0,l.kt)("p",null,"\u5bf9\u6570\u636e\u6700\u9ad8\u53ef\u5b9e\u73b040\u500d\u538b\u7f29\uff0c\u6781\u5927\u7684\u8282\u7701\u4e86\u6570\u636e\u5b58\u50a8\u7a7a\u95f4\u548c\u4f01\u4e1a\u7684\u6210\u672c\u3002"),(0,l.kt)("h2",{id:"\u6838\u5fc3\u6280\u672f"},"\u6838\u5fc3\u6280\u672f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5217\u5f0f\u5b58\u50a8")),(0,l.kt)("p",null,"StoneDB \u521b\u5efa\u7684\u8868\u5728\u78c1\u76d8\u4e0a\u662f\u4ee5\u5217\u6a21\u5f0f\u8fdb\u884c\u5b58\u50a8\u7684\uff0c\u7531\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e2d\u6bcf\u4e00\u5217\u7684\u6570\u636e\u7c7b\u578b\u90fd\u76f8\u540c\uff0c\u6240\u4ee5\u8fd9\u79cd\u8fde\u7eed\u7684\u7a7a\u95f4\u5b58\u50a8\u4e0e\u884c\u5f0f\u5b58\u50a8\u76f8\u6bd4\uff0c\u66f4\u52a0\u80fd\u591f\u5b9e\u73b0\u6570\u636e\u7684\u9ad8\u538b\u7f29\u6bd4\u3002\u5728\u8bfb\u53d6\u6570\u636e\u65b9\u9762\uff0c\u5982\u679c\u53ea\u60f3\u67e5\u8be2\u4e00\u4e2a\u5b57\u6bb5\u7684\u7ed3\u679c\uff0c\u5728\u884c\u5f0f\u5b58\u50a8\u4e2d\uff0c\u5f15\u64ce\u5c42\u5411\u670d\u52a1\u5c42\u8fd4\u56de\u7684\u662f\u4e00\u6574\u884c\u7684\u6570\u636e\uff0c\u9700\u8981\u6d88\u8017\u66f4\u591a\u7684\u7f51\u7edc\u5e26\u5bbd\u548c IO\u3002\u800c\u5217\u5f0f\u5b58\u50a8\u53ea\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5b57\u6bb5\uff0c\u6781\u5927\u51cf\u5c11\u4e86\u7f51\u7edc\u5e26\u5bbd\u548c IO \u7684\u6d88\u8017\u3002\u53e6\u5916\uff0c\u5217\u5f0f\u5b58\u50a8\u65e0\u9700\u518d\u4e3a\u5217\u521b\u5efa\u7d22\u5f15\u548c\u7ef4\u62a4\u7d22\u5f15\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u7684\u6570\u636e\u538b\u7f29\u6bd4")),(0,l.kt)("p",null,"StoneDB \u4f1a\u6839\u636e\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u9009\u62e9\u4e0d\u540c\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u76ee\u524d\u652f\u6301\u7684\u538b\u7f29\u7b97\u6cd5\u4e3b\u8981\u6709 PPM\u3001LZ4\u3001B2\u3001Delta \u7b49\u3002\u6570\u636e\u88ab\u538b\u7f29\u540e\uff0c\u6570\u636e\u91cf\u53d8\u5f97\u66f4\u5c0f\uff0c\u5728\u8bfb\u53d6\u6570\u636e\u65f6\uff0c\u5bf9\u7f51\u7edc\u5e26\u5bbd\u548c\u78c1\u76d8 IO \u7684\u538b\u529b\u4e5f\u5c31\u8d8a\u5c0f\u3002\u7531\u4e8e\u5217\u5f0f\u5b58\u50a8\u76f8\u6bd4\u884c\u5f0f\u5b58\u50a8\u6709\u5341\u500d\u751a\u81f3\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\uff0cStoneDB \u53ef\u4ee5\u8282\u7701\u5927\u91cf\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u964d\u4f4e\u5b58\u50a8\u6210\u672c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u77e5\u8bc6\u7f51\u683c")),(0,l.kt)("p",null,"\u5728 StoneDB \u4e2d\uff0c\u6570\u636e\u5305\u6839\u636e\u7c97\u7cd9\u96c6\u6982\u5ff5\u5212\u5206\u4e3a\u4e0d\u76f8\u5173\u6570\u636e\u5305\u3001\u53ef\u7591\u6570\u636e\u5305\u3001\u76f8\u5173\u6570\u636e\u5305\u3002StoneDB \u6839\u636e\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u8fc7\u6ee4\u6389\u4e0d\u76f8\u5173\u7684\u6570\u636e\u5305\uff0c\u5bf9\u53ef\u7591\u6570\u636e\u5305\u9700\u8981\u8fdb\u4e00\u6b65\u89e3\u538b\u7f29\u624d\u80fd\u5f97\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002\u5982\u679c\u80fd\u4ece\u76f8\u5173\u6570\u636e\u5305\u7684\u5143\u6570\u636e\u8282\u70b9\u5f97\u5230\u7ed3\u679c\uff0c\u65e0\u9700\u518d\u89e3\u538b\u7f29\u6570\u636e\u5305\u3002\u8fd9\u6837\u5c31\u6d88\u9664\u4e86\u89e3\u538b\u7f29\u6570\u636e\u5305\u7684\u8fc7\u7a0b\u548c\u964d\u4f4e IO \u6d88\u8017\uff0c\u63d0\u9ad8\u4e86\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\u548c\u7f51\u7edc\u5229\u7528\u7387\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\u5bfc\u5165")),(0,l.kt)("p",null,"StoneDB \u63d0\u4f9b\u72ec\u7acb\u7684\u6570\u636e\u5bfc\u5165\u5ba2\u6237\u7aef\uff0c\u652f\u6301\u4e0d\u540c\u7684\u6570\u636e\u6e90\u73af\u5883\uff0c\u652f\u6301\u591a\u8bed\u8a00\u67b6\u6784\u3002\u6570\u636e\u5728\u5bfc\u5165\u524d\uff0c\u9996\u5148\u4f1a\u8fdb\u884c\u9884\u5904\u7406\uff0c\u5982\u6570\u636e\u538b\u7f29\u548c\u77e5\u8bc6\u8282\u70b9\u7684\u6784\u5efa\u3002\u6570\u636e\u7ecf\u8fc7\u9884\u5904\u7406\u540e\uff0c\u8fdb\u5165\u5b58\u50a8\u5f15\u64ce\u65e0\u9700\u518d\u6b21\u6267\u884c\u89e3\u6790\u3001\u6570\u636e\u9a8c\u8bc1\u4ee5\u53ca\u4e8b\u52a1\u5904\u7406\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u63a8\u9001\u7684\u77e2\u91cf\u5316\u67e5\u8be2\u5904\u7406")),(0,l.kt)("p",null,"StoneDB \u901a\u8fc7\u6267\u884c\u8ba1\u5212\u5c06\u77e2\u91cf\u5757\uff08\u5217\u5f0f\u6570\u636e\u5207\u7247\uff09\u4ece\u4e00\u4e2a\u8fd0\u7b97\u7b26\u63a8\u9001\u5230\u53e6\u4e00\u4e2a\u8fd0\u7b97\u7b26\u6765\u5904\u7406\u67e5\u8be2\uff0c\u4e0e\u57fa\u4e8e\u5143\u7ec4\u7684\u5904\u7406\u6a21\u578b\u76f8\u6bd4\uff0c\u57fa\u4e8e\u63a8\u9001\u7684\u6267\u884c\u6a21\u578b\u907f\u514d\u4e86\u6df1\u5ea6\u8c03\u7528\u5806\u6808\uff0c\u5e76\u8282\u7701\u4e86\u8d44\u6e90\u3002"))}f.isMDXComponent=!0}}]);