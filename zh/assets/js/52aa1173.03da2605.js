"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1188],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],u={id:"server-configuration-requirements",sidebar_position:2.2},l="\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350",c={unversionedId:"environment-requirements/server-configuration-requirements",id:"environment-requirements/server-configuration-requirements",title:"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350",description:"StoneDB\u5bf9\u5f00\u53d1\u3001\u6d4b\u8bd5\u53ca\u751f\u4ea7\u73af\u5883\u7684\u670d\u52a1\u5668\u914d\u7f6e\u6709\u4ee5\u4e0b\u8981\u6c42\u548c\u5efa\u8bae\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/01-environment-requirements/server-configuration-requirements.md",sourceDirName:"01-environment-requirements",slug:"/environment-requirements/server-configuration-requirements",permalink:"/zh/docs/environment-requirements/server-configuration-requirements",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/01-environment-requirements/server-configuration-requirements.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:2.2,frontMatter:{id:"server-configuration-requirements",sidebar_position:2.2},sidebar:"autoSidebar",previous:{title:"Support Servers and OSs",permalink:"/zh/docs/environment-requirements/supported-servers-and-OSs"},next:{title:"\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/getting-started/quick-deployment"}},s={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"},"\u670d\u52a1\u5668\u914d\u7f6e\u63a8\u8350"),(0,o.kt)("p",null,"StoneDB\u5bf9\u5f00\u53d1\u3001\u6d4b\u8bd5\u53ca\u751f\u4ea7\u73af\u5883\u7684\u670d\u52a1\u5668\u914d\u7f6e\u6709\u4ee5\u4e0b\u8981\u6c42\u548c\u5efa\u8bae\uff1a\n\u5f00\u53d1\u4e0e\u6d4b\u8bd5\u73af\u5883"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CPU"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5b58\u50a8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7f51\u7edc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2\u6838+"),(0,o.kt)("td",{parentName:"tr",align:null},"2GB+"),(0,o.kt)("td",{parentName:"tr",align:null},"10GB+"),(0,o.kt)("td",{parentName:"tr",align:null},"\u767e\u5146\u7f51\u5361")))),(0,o.kt)("p",null,"\u6ce8\uff1a\u5982\u679c\u5f00\u53d1\u3001\u6d4b\u8bd5\u73af\u5883\u662f\u90e8\u7f72\u5728\u865a\u62df\u673a\u4e0a\u7684\uff0cAVX\u6307\u4ee4\u96c6\u5fc5\u987b\u5f00\u542f\uff0c\u5426\u5219StoneDB\u65e0\u6cd5\u5b89\u88c5\u3002\n\u751f\u4ea7\u73af\u5883"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"CPU"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58"),(0,o.kt)("th",{parentName:"tr",align:null},"\u5b58\u50a8"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7f51\u7edc"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"8\u6838+"),(0,o.kt)("td",{parentName:"tr",align:null},"8GB+"),(0,o.kt)("td",{parentName:"tr",align:null},"100GB+"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5343\u5146\u7f51\u5361")))),(0,o.kt)("p",null,"\u6ce8\uff1a\u751f\u4ea7\u73af\u5883\u4e00\u822c\u8981\u6c42\u9ad8\u914d\u7f6e\u3002"))}d.isMDXComponent=!0}}]);