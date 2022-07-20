"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[5888],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return g}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=d(a),g=l,c=m["".concat(u,".").concat(g)]||m[g]||k[g]||r;return a?n.createElement(c,i(i({ref:e},o),{},{components:a})):n.createElement(c,i({ref:e},o))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41506:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],p={id:"architecture",sidebar_position:1.2},u="\u6574\u4f53\u67b6\u6784",d={unversionedId:"about-stonedb/architecture",id:"about-stonedb/architecture",title:"\u6574\u4f53\u67b6\u6784",description:"image.png",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/00-about-stonedb/architecture.md",sourceDirName:"00-about-stonedb",slug:"/about-stonedb/architecture",permalink:"/zh/docs/about-stonedb/architecture",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/00-about-stonedb/architecture.md",tags:[],version:"current",lastUpdatedBy:"SPZhang",lastUpdatedAt:1658302951,formattedLastUpdatedAt:"2022/7/20",sidebarPosition:1.2,frontMatter:{id:"architecture",sidebar_position:1.2},sidebar:"autoSidebar",previous:{title:"StoneDB \u7b80\u4ecb",permalink:"/zh/docs/about-stonedb/intro"},next:{title:"\u4f7f\u7528\u9650\u5236",permalink:"/zh/docs/about-stonedb/limits"}},o={},k=[{value:"\u8fde\u63a5\u7ba1\u7406",id:"\u8fde\u63a5\u7ba1\u7406",level:2},{value:"\u7528\u6237\u9274\u6743",id:"\u7528\u6237\u9274\u6743",level:2},{value:"\u5b89\u5168\u7ba1\u7406",id:"\u5b89\u5168\u7ba1\u7406",level:2},{value:"Management &amp; Utilities",id:"management--utilities",level:2},{value:"SQL Interface",id:"sql-interface",level:2},{value:"Caches &amp; buffers",id:"caches--buffers",level:2},{value:"Parser",id:"parser",level:2},{value:"StoneDB Optimizer",id:"stonedb-optimizer",level:2},{value:"StoneDB Executor",id:"stonedb-executor",level:2},{value:"Knowledge Grid Manager",id:"knowledge-grid-manager",level:2},{value:"Data Pack",id:"data-pack",level:3},{value:"Data Pack Node",id:"data-pack-node",level:3},{value:"Knowledge Node",id:"knowledge-node",level:3},{value:"1. Histogram",id:"1-histogram",level:4},{value:"2. Character Map",id:"2-character-map",level:4},{value:"3. Pack to Pack",id:"3-pack-to-pack",level:4},{value:"Knowledge Grid",id:"knowledge-grid",level:3},{value:"StoneDB Loader Parser",id:"stonedb-loader-parser",level:2},{value:"Insert Buffer",id:"insert-buffer",level:2},{value:"Replication Manager",id:"replication-manager",level:2},{value:"Compress",id:"compress",level:2},{value:"Decompress",id:"decompress",level:2}],m={toc:k};function g(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6574\u4f53\u67b6\u6784"},"\u6574\u4f53\u67b6\u6784"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/22447227/1657027052362-321b55ab-60f9-4796-aaa7-651d2d3e555c.png#clientId=ue6882c22-0057-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=674&id=u4c1675ef&margin=%5Bobject%20Object%5D&name=image.png&originHeight=588&originWidth=634&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136249&status=done&style=none&taskId=u1fb39fce-bd39-4e47-8e1e-a56cf423cb3&title=&width=727",alt:"image.png"})),(0,r.kt)("p",null,"StoneDB\u662f\u4e00\u4e2aHTAP\u6570\u636e\u5e93\uff0c\u5176\u5b58\u50a8\u5f15\u64cestonedb\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u9ad8\u538b\u7f29\u6bd4\u7684\u5217\u5f0f\u5b58\u50a8\u5f15\u64ce\uff0c\u9002\u7528\u4e8eOLAP\u5e94\u7528\u3002\u548c\u5176\u4ed6\u7684\u5b58\u50a8\u5f15\u64ce\u5982InnoDB\u3001MyISAM\u4e00\u6837\uff0cstonedb\u63d0\u4f9b\u4e86\u5b58\u50a8\u5f15\u64ce\u6240\u5177\u6709\u7684\u4e00\u5207\u529f\u80fd\u3002\u4ece\u67b6\u6784\u4e0a\u53ef\u4ee5\u770b\u51fa\uff0c\u903b\u8f91\u4e0a\u5206\u4e3a\u5e94\u7528\u5c42\u3001\u670d\u52a1\u5c42\u548c\u5b58\u50a8\u5f15\u64ce\u5c42\u3002\u5728StoneDB\u4e2d\uff0c\u4e00\u4e2aSQL\u4ece\u53d1\u8d77\u5230\u6700\u7ec8\u8fd4\u56de\u7ed3\u679c\uff0c\u4f1a\u7ecf\u5386\u6bcf\u4e2a\u903b\u8f91\u5c42\u7684\u4e0d\u540c\u7ec4\u4ef6\u3002"),(0,r.kt)("h1",{id:"\u5e94\u7528\u5c42"},"\u5e94\u7528\u5c42"),(0,r.kt)("h2",{id:"\u8fde\u63a5\u7ba1\u7406"},"\u8fde\u63a5\u7ba1\u7406"),(0,r.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u8d77\u8fde\u63a5\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u7aef\u4f1a\u4ece\u7ebf\u7a0b\u6c60\u4e2d\u5206\u914d\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fd9\u4e2a\u7ebf\u7a0b\u4e13\u95e8\u8d1f\u8d23\u548c\u8fd9\u4e2a\u5ba2\u6237\u7aef\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\uff0c\u8fd9\u4e2a\u7ebf\u7a0b\u4e5f\u4e0d\u4f1a\u88ab\u7acb\u5373\u9500\u6bc1\uff0c\u800c\u662f\u88ab\u7ebf\u7a0b\u6c60\u56de\u6536\uff0c\u91cd\u65b0\u5206\u914d\u7ed9\u65b0\u7684\u8fde\u63a5\uff0c\u51cf\u5c11\u4e86\u521b\u5efa\u7ebf\u7a0b\u548c\u91ca\u653e\u7ebf\u7a0b\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u3002"),(0,r.kt)("h2",{id:"\u7528\u6237\u9274\u6743"},"\u7528\u6237\u9274\u6743"),(0,r.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u8fde\u63a5\u670d\u52a1\u7aef\u540e\uff0c\u670d\u52a1\u7aef\u4f1a\u5bf9\u53d1\u8d77\u8fde\u63a5\u7684\u7528\u6237\u8fdb\u884c\u9274\u6743\u5904\u7406\uff0c\u9274\u6743\u7684\u4f9d\u636e\u662f\u68c0\u67e5\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001IP\u5730\u5740\u53ca\u7aef\u53e3\u662f\u5426\u6b63\u786e\u3002\u5982\u679c\u9274\u6743\u5931\u8d25\uff0c\u5219\u62d2\u7edd\u8fde\u63a5\u3002"),(0,r.kt)("h2",{id:"\u5b89\u5168\u7ba1\u7406"},"\u5b89\u5168\u7ba1\u7406"),(0,r.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u6210\u529f\u8fde\u63a5\u670d\u52a1\u7aef\u540e\uff0c\u670d\u52a1\u7aef\u4f1a\u4ece\u6743\u9650\u8868\u91cc\u6839\u636e\u7528\u6237\u7684\u6743\u9650\u6765\u5224\u65ad\u7528\u6237\u5177\u4f53\u53ef\u6267\u884c\u54ea\u4e9b\u64cd\u4f5c\u3002"),(0,r.kt)("h1",{id:"\u670d\u52a1\u5c42"},"\u670d\u52a1\u5c42"),(0,r.kt)("p",null,"\u670d\u52a1\u5c42\u63d0\u4f9b\u4e86\u6570\u636e\u5e93\u7684\u903b\u8f91\u529f\u80fd\uff0cStoneDB\u4f1a\u4f7f\u7528\u670d\u52a1\u5c42\u7684\u76f8\u5173\u7ec4\u4ef6\uff0c\u5982\u7cfb\u7edf\u7ba1\u7406\u3001SQL\u63a5\u53e3\u3001\u67e5\u8be2\u7f13\u5b58\u3001SQL\u89e3\u6790\u5668\u3002",(0,r.kt)("br",null),"\u6ce8\uff1aStoneDB\u6709\u81ea\u5df1\u7684\u4f18\u5316\u5668\u548c\u6267\u884c\u5668\uff0c\u8fd9\u91cc\u4e0d\u5bf9MySQL\u7684\u4f18\u5316\u5668\u548c\u6267\u884c\u5668\u505a\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"management--utilities"},"Management & Utilities"),(0,r.kt)("p",null,"\u7cfb\u7edf\u7ba1\u7406\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u6570\u636e\u5e93\u7ba1\u7406\u529f\u80fd\uff0c\u5982\u5907\u4efd\u4e0e\u6062\u590d\u3001\u7528\u6237\u53ca\u6743\u9650\u7ba1\u7406\u3001\u6570\u636e\u5e93\u5143\u6570\u636e\u7ba1\u7406\u7b49\u3002"),(0,r.kt)("h2",{id:"sql-interface"},"SQL Interface"),(0,r.kt)("p",null,"SQL\u63a5\u53e3\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u63a5\u6536\u7528\u6237\u7684SQL\u5e76\u8fdb\u884c\u5904\u7406\uff0c\u5f97\u5230\u7528\u6237\u6240\u9700\u8981\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"caches--buffers"},"Caches & buffers"),(0,r.kt)("p",null,"\u67e5\u8be2\u7f13\u5b58\u4e3b\u8981\u7f13\u5b58\u7684\u662fSQL\u8bed\u53e5\u7684hash\u503c\u548c\u7ed3\u679c\u96c6\uff0c\u76ee\u7684\u662f\u63d0\u9ad8\u6267\u884c\u6548\u7387\u3002\u5f53\u4e00\u4e2aSQL\u88ab\u53d1\u8d77\uff0c\u9996\u5148\u4f1a\u7ecf\u8fc7hash\u8fd0\u7b97\uff0c\u5982\u679c\u5728\u67e5\u8be2\u7f13\u5b58\u547d\u4e2d\uff0c\u5219\u76f4\u63a5\u8fd4\u56de\uff0c\u65e0\u987b\u518d\u901a\u8fc7\u89e3\u6790\u3001\u4f18\u5316\u548c\u6267\u884c\u7b49\u9636\u6bb5\uff0c\u5982\u679c\u5728\u67e5\u8be2\u7f13\u5b58\u4e0d\u80fd\u547d\u4e2d\uff0c\u5219\u9700\u8981\u89e3\u6790\u3001\u4f18\u5316\u548c\u6267\u884c\u7b49\u9636\u6bb5\u3002\u7136\u800c\u53ea\u8981\u8868\u7ed3\u6784\u6709\u53d8\u66f4\u6216\u8005\u8868\u6570\u636e\u6709\u66f4\u65b0\uff0c\u67e5\u8be2\u7f13\u5b58\u5c31\u4f1a\u5931\u6548\u3002\u56e0\u6b64\uff0c\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u5173\u95ed\u67e5\u8be2\u7f13\u5b58\uff0c\u5230\u4e86MySQL 8.0\u5df2\u7ecf\u5e9f\u5f03\u4e86\u67e5\u8be2\u7f13\u5b58\u529f\u80fd\u3002"),(0,r.kt)("h2",{id:"parser"},"Parser"),(0,r.kt)("p",null,"\u89e3\u6790\u5668\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u89e3\u6790SQL\u8bed\u53e5\uff0c\u6700\u7ec8\u751f\u6210\u89e3\u6790\u6811\u3002\u89e3\u6790\u5668\u4f1a\u5bf9SQL\u8bed\u53e5\u8fdb\u884c\u8bcd\u6cd5\u89e3\u6790\uff08\u8868\u3001\u5217\u662f\u5426\u5b58\u5728\uff09\u548c\u8bed\u6cd5\u89e3\u6790\uff08SQL\u8bed\u6cd5\u662f\u5426\u6b63\u786e\uff09\uff0c\u5982\u679c\u6709\u9519\u8bef\uff0c\u5219\u8fd4\u56de\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,r.kt)("h1",{id:"\u5b58\u50a8\u5f15\u64ce\u5c42"},"\u5b58\u50a8\u5f15\u64ce\u5c42"),(0,r.kt)("p",null,"StoneDB\u7684\u5b58\u50a8\u5f15\u64ce\u5c42\u5305\u62ec\u6570\u636e\u89e3\u538b\u7f29\u6a21\u5757\u3001\u4f18\u5316\u5668\u3001\u77e5\u8bc6\u7f51\u683c\u7b49\u3002"),(0,r.kt)("h2",{id:"stonedb-optimizer"},"StoneDB Optimizer"),(0,r.kt)("p",null,"StoneDB\u6709\u81ea\u5df1\u7684\u4f18\u5316\u5668\uff0c\u4f18\u5316\u5668\u4f1a\u5bf9SQL\u8bed\u53e5\u8fdb\u884c\u4f18\u5316\uff0c\u5982\u8868\u8fbe\u5f0f\u8f6c\u5316\u3001\u5b50\u67e5\u8be2\u8f6c\u8fde\u63a5\u7b49\uff0c\u7136\u540e\u57fa\u4e8e\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u751f\u6210\u4e00\u4e2a\u9ad8\u6548\u7684\u6267\u884c\u8ba1\u5212\u3002"),(0,r.kt)("h2",{id:"stonedb-executor"},"StoneDB Executor"),(0,r.kt)("p",null,"\u6839\u636e\u4f18\u5316\u5668\u4ea7\u751f\u7684\u6267\u884c\u8ba1\u5212\u8bfb\u53d6\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"knowledge-grid-manager"},"Knowledge Grid Manager"),(0,r.kt)("p",null,"\u5f53\u6570\u636e\u91cf\u8fbe\u5230\u5343\u4e07\u3001\u4ebf\u7ea7\u7684\u65f6\u5019\uff0c\u5728\u505a\u7edf\u8ba1\u5206\u6790\u6267\u884c\u805a\u5408\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u539f\u751fMySQL\u6216\u5176\u5b83\u5173\u7cfb\u578b\u6570\u636e\u5e93\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u5230\u51e0\u5341\u5206\u949f\u5de6\u53f3\u624d\u80fd\u5f97\u5230\u7ed3\u679c\u96c6\u3002\u800cStoneDB\u5728\u540c\u7b49\u7684\u6570\u636e\u91cf\u548c\u67e5\u8be2\u8bed\u53e5\u6761\u4ef6\u4e0b\uff0c\u6bd4\u539f\u751fMySQL\u6216\u5176\u5b83\u5173\u7cfb\u578b\u6570\u636e\u5e93\u8981\u5feb\u6570\u5341\u500d\u3002\u4e3b\u8981\u662f\u5f97\u76ca\u4e8e\u5b83\u7684\u5217\u5f0f\u5b58\u50a8\u3001\u6570\u636e\u538b\u7f29\u548c\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u3002"),(0,r.kt)("h3",{id:"data-pack"},"Data Pack"),(0,r.kt)("p",null,"\u6570\u636e\u5305\u7528\u4e8e\u5b58\u653e\u5b9e\u9645\u6570\u636e\uff0c\u662f\u6700\u5e95\u5c42\u7684\u6570\u636e\u5b58\u50a8\u5355\u5143\uff0c\u6bcf\u5217\u6309\u716765536\u884c\u5207\u5206\u6210\u4e00\u4e2a\u6570\u636e\u5305\u3002\u6bcf\u4e2a\u6570\u636e\u5305\u6bd4\u5217\u66f4\u5c0f\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u538b\u7f29\u6bd4\uff0c\u800c\u6bcf\u4e2a\u6570\u636e\u5305\u53c8\u6bd4\u6bcf\u884c\u66f4\u5927\uff0c\u5177\u6709\u66f4\u597d\u7684\u67e5\u8be2\u6027\u80fd\u3002\u6570\u636e\u5305\u4e5f\u662f\u77e5\u8bc6\u7f51\u683c\u7684\u89e3\u538b\u7f29\u5355\u5143\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u7c97\u7cd9\u96c6\u7684\u6982\u5ff5\uff0c\u6570\u636e\u5305\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u76f8\u5173\u7684\u6570\u636e\u5305\uff1a\u4e0d\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u5305")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u76f8\u5173\u7684\u6570\u636e\u5305\uff1a\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u5305")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u7591\u7684\u6570\u636e\u5305\uff1a\u6570\u636e\u5305\u4e2d\u7684\u6570\u636e\u90e8\u5206\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u89e3\u538b\u7f29\u6570\u636e\u5305\u624d\u80fd\u5f97\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u884c"))),(0,r.kt)("p",null,"\u901a\u8fc7\u5bf9\u6570\u636e\u5305\u7684\u5212\u5206\uff0c\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u8fc7\u6ee4\u6389\u4e0d\u76f8\u5173\u7684\u6570\u636e\u5305\uff0c\u8bfb\u53d6\u76f8\u5173\u7684\u6570\u636e\u5305\u548c\u53ef\u7591\u7684\u6570\u636e\u5305\u3002\u5176\u4e2d\u76f8\u5173\u7684\u6570\u636e\u5305\u4e0d\u9700\u8981\u89e3\u538b\u7f29\uff0c\u53ea\u8bfb\u53d6\u5143\u6570\u636e\uff0c\u4e0d\u4f1a\u53d1\u751fIO\uff0c\u53ef\u7591\u7684\u6570\u636e\u5305\u9700\u8981\u89e3\u538b\u7f29\uff0c\u4f1a\u53d1\u751fIO\u3002"),(0,r.kt)("h3",{id:"data-pack-node"},"Data Pack Node"),(0,r.kt)("p",null,"\u6570\u636e\u5305\u8282\u70b9\u4e5f\u79f0\u4e3a\u5143\u6570\u636e\u8282\u70b9\uff08Metadata Node\uff09\uff0c\u56e0\u4e3a\u6570\u636e\u5305\u8282\u70b9\u8bb0\u5f55\u4e86\u6bcf\u4e2a\u6570\u636e\u5305\u4e2d\u5217\u7684\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u5e73\u5747\u503c\u3001\u603b\u548c\u3001\u603b\u8bb0\u5f55\u6570\u3001null\u503c\u7684\u6570\u91cf\u3001\u538b\u7f29\u65b9\u5f0f\u3001\u5360\u7528\u7684\u5b57\u8282\u6570\u3002\u6bcf\u4e00\u4e2a\u6570\u636e\u5305\u8282\u70b9\u5bf9\u5e94\u4e00\u4e2a\u6570\u636e\u5305\u3002"),(0,r.kt)("h3",{id:"knowledge-node"},"Knowledge Node"),(0,r.kt)("p",null,"\u6570\u636e\u5305\u8282\u70b9\u7684\u4e0a\u4e00\u5c42\u662f\u77e5\u8bc6\u8282\u70b9\uff0c\u8bb0\u5f55\u4e86\u6570\u636e\u5305\u4e4b\u95f4\u6216\u8005\u5217\u4e4b\u95f4\u5173\u7cfb\u7684\u5143\u6570\u636e\u96c6\u5408\uff0c\u6bd4\u5982\u503c\u6570\u636e\u5305\u7684\u6700\u5c0f\u503c\u4e0e\u6700\u5927\u503c\u7684\u8303\u56f4\u3001\u5217\u4e4b\u95f4\u7684\u5173\u8054\u5173\u7cfb\u3002\u5927\u90e8\u5206\u7684\u77e5\u8bc6\u8282\u70b9\u6570\u636e\u662f\u88c5\u8f7d\u6570\u636e\u7684\u65f6\u5019\u4ea7\u751f\u7684\uff0c\u53e6\u5916\u4e00\u90e8\u5206\u662f\u67e5\u8be2\u7684\u65f6\u5019\u4ea7\u751f\u7684\u3002"),(0,r.kt)("p",null,"\u77e5\u8bc6\u8282\u70b9\u76843\u79cd\u57fa\u672c\u7c7b\u578b\uff1a"),(0,r.kt)("h4",{id:"1-histogram"},"1. Histogram"),(0,r.kt)("p",null,"\u6570\u636e\u7c7b\u578b\u4e3a\u6574\u578b\u3001\u65e5\u671f\u578b\u3001\u6d6e\u70b9\u578b\u7684\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u4ee5\u76f4\u65b9\u56fe\u7684\u5f62\u5f0f\u5b58\u5728\u3002\u5c06\u4e00\u4e2a\u6570\u636e\u5305\u7684\u6700\u5c0f\u503c\u5230\u6700\u5927\u503c\u4e4b\u95f4\u5206\u4e3a1024\u6bb5\uff0c\u6bcf\u6bb5\u5360\u7528\u4e00\u4e2abit\uff0c\u5982\u679c\u6570\u636e\u5305\u4e2d\u7684\u5b9e\u9645\u503c\u5904\u4e8e\u6bb5\u4e2d\u7684\u8303\u56f4\uff0c\u5219\u6807\u8bb0\u4e3a1\uff0c\u5426\u5219\u6807\u8bb0\u4e3a0\u3002\u6570\u636e\u88ab\u52a0\u8f7d\u65f6\uff0cHistogram\u88ab\u81ea\u52a8\u521b\u5efa\u3002"),(0,r.kt)("p",null,"\u5982\u4e0b\u7684\u4f8b\u5b50\u4e2d\uff0c\u8bf4\u660e\u6570\u636e\u5305\u4e2d\u6709\u503c\u843d\u57280~100\u548c102301~102400\u4e24\u4e2a\u533a\u95f4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"0\u2012100"),(0,r.kt)("th",{parentName:"tr",align:null},"101\u2012200"),(0,r.kt)("th",{parentName:"tr",align:null},"201\u2012300"),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},"102301\u2012102400"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u6267\u884c\u4ee5\u4e0bSQL\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from table where id>199 and id<299;\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u76f4\u65b9\u56fe\u53ef\u77e5\uff0c\u8fd9\u4e2a\u67e5\u8be2\u6ca1\u6709\u5728\u8fd9\u4e2a\u6570\u636e\u5305\u547d\u4e2d\uff0c\u5373\u5f53\u524d\u6570\u636e\u5305\u4e0d\u6ee1\u8db3\u67e5\u8be2\u6761\u4ef6\uff0c\u8fd9\u4e2a\u6570\u636e\u5305\u76f4\u63a5\u88ab\u4e22\u5f03\u3002"),(0,r.kt)("h4",{id:"2-character-map"},"2. Character Map"),(0,r.kt)("p",null,"\u6570\u636e\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u7684\u5217\u7684\u5b57\u7b26\u6620\u5c04\u8868\u3002\u5c06\u5b57\u7b26\u4e32\u6309\u7167\u5b57\u7b26\u62c6\u5206\uff0c\u7edf\u8ba1\u4e00\u4e2a\u6570\u636e\u5305\u51851~64\u957f\u5ea6\u4e2dASCII\u5b57\u7b26\u662f\u5426\u5b58\u5728\u3002\u5982\u679c\u5b58\u5728\uff0c\u5219\u6807\u8bb0\u4e3a1\uff0c\u5426\u5219\u6807\u8bb0\u4e3a0\u3002\u6570\u636e\u88ab\u52a0\u8f7d\u65f6\uff0cCharacter Map\u88ab\u81ea\u52a8\u521b\u5efa\u3002",(0,r.kt)("br",null),"\u5982\u4e0b\u7684\u4f8b\u5b50\u4e2d\uff0c\u8bf4\u660eA\u5728\u5b57\u7b26\u4e32\u7684\u7b2c1\u4e2a\u548c\u7b2c64\u4e2a\u4f4d\u7f6e\u5b58\u5728\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Char/Char pos"),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"..."),(0,r.kt)("th",{parentName:"tr",align:null},"64"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"..."),(0,r.kt)("td",{parentName:"tr",align:null},"...")))),(0,r.kt)("h4",{id:"3-pack-to-pack"},"3. Pack to Pack"),(0,r.kt)("p",null,"\u5305\u5bf9\u5305\u5173\u7cfb\u8868\u793a\u4e0d\u540c\u8868\u7684\u4e24\u4e2a\u5217\u4e4b\u95f4\u7684\u7b49\u503c\u6620\u5c04\u8868\uff0c\u5e76\u4ee5\u4e8c\u8fdb\u5236\u77e9\u9635\u7684\u5f62\u5f0f\u8fdb\u884c\u5b58\u50a8\uff0c\u5982\u679c\u7b26\u5408\u8868\u5173\u8054\u6761\u4ef6\uff0c\u5219\u6807\u8bb0\u4e3a1\uff0c\u5426\u5219\u6807\u8bb0\u4e3a0\u3002\u5305\u5bf9\u5305\u5173\u7cfb\u80fd\u5e2e\u52a9\u5728\u8868\u5173\u8054\u67e5\u8be2\u7684\u65f6\u5019\u5feb\u901f\u5224\u65ad\u51fa\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u5305\uff0c\u4ece\u800c\u63d0\u5347\u8868\u5173\u8054\u67e5\u8be2\u7684\u6548\u7387\u3002\u8868\u5173\u8054\u67e5\u8be2\u65f6\uff0cPack to Pack\u88ab\u81ea\u52a8\u521b\u5efa\u3002",(0,r.kt)("br",null),'\u5982\u4e0b\u7684\u4f8b\u5b50\u4e2d\uff0c\u8868\u5173\u8054\u7684\u67e5\u8be2\u6761\u4ef6\u662f"A.C=B.D"\uff0c\u5728A.C1\u8fd9\u4e2a\u6570\u636e\u5305\u4e2d\uff0c\u53ea\u6709B.D2\u548cB.D5\u8fd9\u4e24\u4e2a\u6570\u636e\u5305\u4e2d\u6709\u7b26\u5408\u8868\u5173\u8054\u6761\u4ef6\u7684\u503c\u3002'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"B.D1"),(0,r.kt)("th",{parentName:"tr",align:null},"B.D2"),(0,r.kt)("th",{parentName:"tr",align:null},"B.D3"),(0,r.kt)("th",{parentName:"tr",align:null},"B.D4"),(0,r.kt)("th",{parentName:"tr",align:null},"B.D5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A.C1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A.C2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A.C3"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"knowledge-grid"},"Knowledge Grid"),(0,r.kt)("p",null,"\u77e5\u8bc6\u7f51\u683c\u662f\u7531\u6570\u636e\u5305\u8282\u70b9\u548c\u77e5\u8bc6\u8282\u70b9\u7ec4\u6210\u7684\u3002\u7531\u4e8e\u6570\u636e\u5305\u90fd\u662f\u538b\u7f29\u5b58\u653e\u7684\uff0c\u6240\u4ee5\u6570\u636e\u8bfb\u53d6\u89e3\u538b\u7684\u4ee3\u4ef7\u6bd4\u8f83\u9ad8\uff0c\u5728\u67e5\u8be2\u4e2d\u5982\u4f55\u505a\u5230\u8bfb\u53d6\u5c3d\u91cf\u5c11\u7684\u6570\u636e\u5305\u662f\u63d0\u5347\u6548\u7387\u7684\u5173\u952e\u3002\u77e5\u8bc6\u7f51\u683c\u6b63\u662f\u8d77\u5230\u4e86\u8fd9\u6837\u7684\u4e00\u4e2a\u4f5c\u7528\uff0c\u5b83\u80fd\u591f\u6709\u6548\u7684\u8fc7\u6ee4\u67e5\u8be2\u4e2d\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\uff0c\u4ee5\u6700\u5c0f\u7684\u4ee3\u4ef7\u5b9a\u4f4d\u4ee5\u6570\u636e\u5305\u4e3a\u6700\u5c0f\u5355\u4f4d\u7684\u6570\u636e\u3002\u77e5\u8bc6\u7f51\u683c\u7684\u6570\u636e\u5927\u5c0f\u53ea\u5360\u6570\u636e\u603b\u91cf\u76841%\u4ee5\u4e0b\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u53ef\u4ee5\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5927\u90e8\u5206\u7edf\u8ba1\u3001\u805a\u5408\u6027\u67e5\u8be2\uff0cStoneDB\u5f80\u5f80\u53ea\u9700\u8981\u4f7f\u7528\u77e5\u8bc6\u7f51\u683c\u5c31\u80fd\u8fd4\u56de\u67e5\u8be2\u7ed3\u679c\uff0c\u8fd9\u662f\u56e0\u4e3a\u901a\u8fc7\u77e5\u8bc6\u7f51\u683c\u53ef\u4ee5\u6d88\u9664\u6216\u5927\u91cf\u51cf\u5c11\u9700\u8981\u89e3\u538b\u7684\u6570\u636e\u5305\uff0c\u964d\u4f4eIO\u6d88\u8017\uff0c\u63d0\u9ad8\u67e5\u8be2\u54cd\u5e94\u65f6\u95f4\u548c\u7f51\u7edc\u5229\u7528\u7387\u3002\u4f8b\u5982\uff1a\u6570\u636e\u5305\u8282\u70b9\u8bb0\u5f55\u4e86\u6700\u5927\u503c\u3001\u6700\u5c0f\u503c\u3001\u5e73\u5747\u503c\u3001\u603b\u548c\u3001\u603b\u8bb0\u5f55\u6570\u3001null\u503c\u7684\u6570\u91cf\uff0c\u5982\u679c\u60f3\u5bf9\u67d0\u4e2a\u5217\u505a\u805a\u5408\u8fd0\u7b97\uff0c\u90a3\u4e48\u77e5\u8bc6\u7f51\u683c\u5c31\u80fd\u6839\u636e\u8fd9\u4e9b\u5143\u6570\u636e\u5f88\u5feb\u7684\u5f97\u5230\u7ed3\u679c\uff0c\u800c\u65e0\u9700\u518d\u89e3\u538b\u8bbf\u95ee\u5e95\u5c42\u7684\u6570\u636e\u5305\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u7406\u89e3\u4e00\u4e2a\u67e5\u8be2\u8bed\u53e5\u5728\u5b58\u50a8\u5f15\u64ce\u5c42\u4f7f\u7528\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u7684\u67e5\u8be2\u4f18\u5316\u8fc7\u7a0b\u3002")),(0,r.kt)("p",null,"\u6709\u5982\u4e0b\u7684\u67e5\u8be2\u8bed\u53e5\u548c\u6570\u636e\u5305\u8282\u70b9\u7684\u6570\u636e\u503c\u5206\u5e03\u8303\u56f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select min(t2.D) from t1,t2 where t1.B=t2.C and t1.A>15;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Min."),(0,r.kt)("th",{parentName:"tr",align:null},"Max."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.A1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.A2"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.A3"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("p",null,"\u6839\u636e\u5217A\u7684DPN\u53ef\u77e5\uff0ct1.A1\u5c5e\u4e8e\u4e0d\u76f8\u5173\u7684\u6570\u636e\u5305\uff0ct1.A2\u5c5e\u4e8e\u53ef\u7591\u7684\u6570\u636e\u5305\uff0ct1.A3\u5c5e\u4e8e\u76f8\u5173\u7684\u6570\u636e\u5305\uff0c\u8fd9\u4e00\u6b65\u5c31\u8fc7\u6ee4\u6389\u6570\u636e\u5305t1.A1\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"t2.C1"),(0,r.kt)("th",{parentName:"tr",align:null},"t2.C2"),(0,r.kt)("th",{parentName:"tr",align:null},"t2.C3"),(0,r.kt)("th",{parentName:"tr",align:null},"t2.C4"),(0,r.kt)("th",{parentName:"tr",align:null},"t2.C5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.B1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.B2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t1.B3"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b65\u5df2\u7ecf\u8fc7\u6ee4\u6389\u6570\u636e\u5305t1.A1\uff0c\u8fd9\u4e00\u6b65\u5c31\u4e0d\u9700\u8981\u5bf9t1.B1\u548ct2.C1\u505a\u5173\u8054\u5bf9\u6bd4\uff0c\u6839\u636e\u5305\u5bf9\u5305\u5173\u7cfb\u7684\u6620\u5c04\u8868\u53ef\u77e5\uff0c\u8fd9\u4e00\u6b65\u8fc7\u6ee4\u6389\u6570\u636e\u5305t2.C3\u548ct2.C4\u3002"),(0,r.kt)("p",null,"\u90a3\u4e48\u6ee1\u8db3\u5173\u8054\u6761\u4ef6\u7684\u6570\u636e\u5305\u6709t2.C2\u548ct2.C5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Min."),(0,r.kt)("th",{parentName:"tr",align:null},"Max."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t2.D1"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t2.D2"),(0,r.kt)("td",{parentName:"tr",align:null},"101"),(0,r.kt)("td",{parentName:"tr",align:null},"440")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t2.D3"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"6879")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t2.D4"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"432")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"t2.D5"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b65\u548c\u7b2c\u4e8c\u6b65\u5df2\u7ecf\u8fc7\u6ee4\u6389D1\u3001D3\u3001D4\uff0c\u90a3\u4e48\u53ea\u5269\u4e0bD2\u548cD5\uff0c\u6839\u636e\u5217D\u7684DPN\u53ef\u77e5\uff0cD5\u7684\u6700\u5927\u503c100\u5c0f\u4e8eD2\u7684\u6700\u5c0f\u503c101\uff0c\u8fd9\u4e00\u6b65\u8fc7\u6ee4\u6389\u6570\u636e\u5305D2\u3002\u6700\u540e\u53ea\u5269\u4e0b\u6570\u636e\u5305D5\uff0c\u53ea\u9700\u8981\u5bf9\u6570\u636e\u5305D5\u8fdb\u884c\u89e3\u538b\u7f29\u5c31\u80fd\u5f97\u5230\u6700\u7ec8\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",{id:"stonedb-loader-parser"},"StoneDB Loader Parser"),(0,r.kt)("p",null,"\u6570\u636e\u5bfc\u5165\u5bfc\u51fa\u6a21\u5757\uff0c\u5373\u5904\u7406 LOAD DATA INFILE \u4e0e SELECT \u2026 INTO FILE \u4efb\u52a1\u3002"),(0,r.kt)("h2",{id:"insert-buffer"},"Insert Buffer"),(0,r.kt)("p",null,"StoneDB\u7684 Insert Buffer \u662f\u4e3a\u6574\u5f20\u8868\u7684\u63d2\u5165\u505a\u7684\u4f18\u5316\u8bbe\u8ba1\uff0c\u5f53\u5411\u8868\u63d2\u5165\u6570\u636e\u65f6\uff0c\u6570\u636e\u5148\u6682\u5b58\u5230 Insert Buffer\uff0c\u7136\u540e\u518d\u4ece Insert Buffer \u6279\u91cf\u5237\u65b0\u5230\u78c1\u76d8\uff0c\u4ece\u7cfb\u7edf\u7684\u8868\u73b0\u6765\u770b\u662f\u541e\u5410\u91cf\u63d0\u9ad8\u4e86\u3002\u5982\u679c\u4e0d\u7ecf\u8fc7 Insert Buffer\uff0c\u800c\u662f\u76f4\u63a5\u5199\u5165\u78c1\u76d8\uff0c\u7531\u4e8eStoneDB\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u53ea\u80fd\u4e00\u884c\u63a5\u7740\u4e00\u884c\u5f80\u78c1\u76d8\u5199\u5165\uff0c\u7cfb\u7edf\u7684\u541e\u5410\u91cf\u662f\u4e0d\u9ad8\u7684\uff0c\u63d2\u5165\u6548\u7387\u56fa\u7136\u4e0d\u9ad8\u3002Insert Buffer \u7531\u53c2\u6570stonedb_insert_delayed\u63a7\u5236\uff0c\u9ed8\u8ba4\u4e3aon\u8868\u793a\u5f00\u542f\u3002"),(0,r.kt)("h2",{id:"replication-manager"},"Replication Manager"),(0,r.kt)("p",null,"StoneDB\u590d\u5236\u7ba1\u7406\u6a21\u5757\uff0c\u4e0eMySQL\u7684\u4e3b\u4ece\u590d\u5236\u67b6\u6784\u7c7b\u4f3c\uff0cStoneDB\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u7684\u4e00\u81f4\u6027\uff0c\u4f1a\u5728Master\u4e0a\u6267\u884c\u5199\u64cd\u4f5c\uff0c\u7136\u540e\u901a\u8fc7\u590d\u5236\u6280\u672f\u4f20\u8f93\u5230Slave\u3002\u4e0eMySQL\u4e0d\u540c\u7684\u662fStoneDB\u5b58\u50a8\u5f15\u64ce\u5b58\u50a8\u7684\u4e0d\u662f\u539f\u59cb\u6570\u636e\uff0c\u800c\u662f\u538b\u7f29\u540e\u7684\u6570\u636e\u3002\u5982\u679c\u4f7f\u7528binlog\u7684\u65b9\u5f0f\u6765\u590d\u5236\uff0c\u4f1a\u5bfc\u81f4\u7f51\u7edc\u4e0a\u4ea7\u751f\u5927\u91cf\u6570\u636e\u6d41\u91cf\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cStoneDB\u5b9e\u73b0\u4e86\u57fa\u4e8e\u538b\u7f29\u540e\u6570\u636e\u5305\u7684\u9ad8\u6548\u6570\u636e\u590d\u5236\u652f\u6301\uff0c\u76f8\u5bf9\u4e8ebinlog\u590d\u5236\uff0c\u8be5\u6280\u672f\u53ef\u4ee5\u5927\u5927\u964d\u4f4e\u7f51\u7edc\u4f20\u8f93\u6240\u9700\u7684\u6570\u636e\u91cf\u3002"),(0,r.kt)("h2",{id:"compress"},"Compress"),(0,r.kt)("p",null,"\u6570\u636e\u538b\u7f29\u6a21\u5757\uff0c\u5728StoneDB\u4e2d\uff0c\u6570\u636e\u662f\u6309\u7167\u5217\u6a21\u5f0f\u8fdb\u884c\u7ec4\u7ec7\u7684\uff0c\u8fd9\u79cd\u6570\u636e\u7ec4\u7ec7\u5f62\u5f0f\u5bf9\u5404\u7c7b\u538b\u7f29\u7b97\u6cd5\u5341\u5206\u53cb\u597d\uff0c\u53ef\u4f9d\u636e\u6570\u636e\u7c7b\u578b\u9009\u62e9\u5408\u9002\u7684\u9ad8\u6548\u538b\u7f29\u7b97\u6cd5\u3002StoneDB\u53ef\u4ee5\u652f\u6301\u591a\u8fbe20\u591a\u79cd\u81ea\u9002\u5e94\u538b\u7f29\u7b97\u6cd5\uff0c\u76ee\u524d\u4e3b\u8981\u4f7f\u7528\u7684\u6709PPM\u3001LZ4\u3001B2\u3001Delta\u7b49\u3002\u5982\u679c\u5217\u7684\u91cd\u590d\u503c\u8d8a\u9ad8\uff0c\u538b\u7f29\u6548\u679c\u8d8a\u597d\u3002\u6570\u636e\u538b\u7f29\u540e\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u8282\u7ea6\u5b58\u50a8\u6210\u672c\uff0c\u8fd8\u53ef\u4ee5\u8282\u7ea6IO\u548c\u5185\u5b58\u3002"),(0,r.kt)("h2",{id:"decompress"},"Decompress"),(0,r.kt)("p",null,"\u6570\u636e\u89e3\u538b\u7f29\u6a21\u5757\uff0c\u6570\u636e\u538b\u7f29\u548c\u89e3\u538b\u7f29\u7684\u5355\u4f4d\u662f\u6570\u636e\u5305\u3002\u77e5\u8bc6\u7f51\u683c\u6280\u672f\u8fc7\u6ee4\u6389\u4e0d\u76f8\u5173\u7684\u6570\u636e\u5305\u540e\uff0c\u5bf9\u53ef\u7591\u7684\u6570\u636e\u5305\u9700\u8981\u89e3\u538b\u7f29\u624d\u80fd\u5f97\u5230\u7b26\u5408\u67e5\u8be2\u7684\u7ed3\u679c\u96c6\u3002"))}g.isMDXComponent=!0}}]);