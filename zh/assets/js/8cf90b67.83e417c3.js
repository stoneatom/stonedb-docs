"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[4353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),k=o,b=p["".concat(d,".").concat(k)]||p[k]||s[k]||a;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96365:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={id:"quick-deploy-in-docker",sidebar_position:3.2},d="Docker\u5feb\u901f\u90e8\u7f72StoneDB",l={unversionedId:"getting-started/quick-deploy-in-docker",id:"getting-started/quick-deploy-in-docker",title:"Docker\u5feb\u901f\u90e8\u7f72StoneDB",description:"StoneDB Docker Hub\u5730\u5740",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deploy-in-docker.md",sourceDirName:"02-getting-started",slug:"/getting-started/quick-deploy-in-docker",permalink:"/zh/docs/getting-started/quick-deploy-in-docker",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/02-getting-started/quick-deploy-in-docker.md",tags:[],version:"current",lastUpdatedBy:"fuxiang",lastUpdatedAt:1660119554,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:3.2,frontMatter:{id:"quick-deploy-in-docker",sidebar_position:3.2},sidebar:"autoSidebar",previous:{title:"\u5feb\u901f\u90e8\u7f72",permalink:"/zh/docs/getting-started/quick-deployment"},next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh/docs/getting-started/quick-start"}},u={},s=[{value:"StoneDB Docker Hub\u5730\u5740",id:"stonedb-docker-hub\u5730\u5740",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"1\u3001docker pull",id:"1docker-pull",level:3},{value:"2\u3001docker run",id:"2docker-run",level:3},{value:"3\u3001\u767b\u5f55\u5bb9\u5668\u5185\u4f7f\u7528stonedb",id:"3\u767b\u5f55\u5bb9\u5668\u5185\u4f7f\u7528stonedb",level:3},{value:"4\u3001\u5bb9\u5668\u5916\u767b\u5f55stonedb",id:"4\u5bb9\u5668\u5916\u767b\u5f55stonedb",level:3}],p={toc:s};function k(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker\u5feb\u901f\u90e8\u7f72stonedb"},"Docker\u5feb\u901f\u90e8\u7f72StoneDB"),(0,a.kt)("h2",{id:"stonedb-docker-hub\u5730\u5740"},"StoneDB Docker Hub\u5730\u5740"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/stoneatom/stonedb"},"Docker Hub")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u767b\u5f55\u8d26\u53f7\u5bc6\u7801\u4e3aroot\uff0cstonedb123"),(0,a.kt)("h3",{id:"1docker-pull"},"1\u3001docker pull"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull stoneatom/stonedb:v0.1\n")),(0,a.kt)("h3",{id:"2docker-run"},"2\u3001docker run"),(0,a.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a\n-p\uff1a\u7aef\u53e3\u6620\u5c04\uff0c\u628a\u5bb9\u5668\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u7aef\u53e3\u4e0a\uff0c\uff1a\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u7aef\u53e3\uff0c\u540e\u9762\u662f\u5bb9\u5668\u7aef\u53e3\n-v\uff1a\u76ee\u5f55\u6302\u8f7d\uff0c\u5982\u679c\u6ca1\u6709\u6302\u8f7d\u7684\u8bdd\uff0c\u5bb9\u5668\u91cd\u542f\u4f1a\u8fdb\u884c\u521d\u59cb\u5316\uff0c\uff1a\u524d\u9762\u662f\u5bbf\u4e3b\u673a\u6620\u5c04\u8def\u5f84\uff0c\u540e\u9762\u662f\u5bb9\u5668\u6620\u5c04\u8def\u5f84\n-i\uff1a\u4ea4\u4e92\u5f0f\u64cd\u4f5c\n-t\uff1a\u7ec8\u7aef\n-d\uff1a\u542f\u52a8\u4e0d\u8fdb\u5165\u5bb9\u5668\uff0c\u60f3\u8981\u8fdb\u5165\u5bb9\u5668\u9700\u8981\u4f7f\u7528\u6307\u4ee4 docker exec"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 13306:3306 -v $stonedb_volumn_dir/data/:/stonedb56/install/data/ -it -d stoneatom/stonedb:v0.1 /bin/bash\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 13306:3306 -it -d stoneatom/stonedb:v0.1 /bin/bash\n")),(0,a.kt)("h3",{id:"3\u767b\u5f55\u5bb9\u5668\u5185\u4f7f\u7528stonedb"},"3\u3001\u767b\u5f55\u5bb9\u5668\u5185\u4f7f\u7528stonedb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#\u83b7\u53d6docker \u5bb9\u5668ID\ndocker ps\n#\u901a\u8fc7docker ps\u83b7\u53d6\u5bb9\u5668ID \u8fdb\u5165docker\u5bb9\u5668\ndocker exec -it \u5bb9\u5668ID bash\n\u5bb9\u5668ID$ /stonedb56/install/bin/mysql -uroot -pstonedb123\n")),(0,a.kt)("h3",{id:"4\u5bb9\u5668\u5916\u767b\u5f55stonedb"},"4\u3001\u5bb9\u5668\u5916\u767b\u5f55stonedb"),(0,a.kt)("p",null,"\u4f7f\u7528mysql client \u767b\u5f55\uff0c\u5176\u4ed6\u7b2c\u4e09\u65b9\u5de5\u5177\uff08\u4f8b\u5982Navicat\u3001DBEAVER\uff09\u767b\u5f55\u65b9\u5f0f\u7b49\u7c7b\u4f3c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h\u5bbf\u4e3b\u673aIP -uroot -pstonedb123 -P\u5bbf\u4e3b\u673a\u6620\u5c04\u7aef\u53e3\n")))}k.isMDXComponent=!0}}]);