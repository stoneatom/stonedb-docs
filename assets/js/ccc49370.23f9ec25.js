"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[103,918],{8166:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=n(7294),l=n(6010),a=n(1944),r=n(5281),o=n(1627),c=n(1626),s=n(7462),d=n(5999),u=n(2244);function m(e){var t=e.nextItem,n=e.prevItem;return i.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&i.createElement(u.Z,(0,s.Z)({},n,{subLabel:i.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&i.createElement(u.Z,(0,s.Z)({},t,{subLabel:i.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var p=n(9407);function f(e){var t,n=e.content,l=n.assets,r=n.metadata,o=r.title,c=r.description,s=r.date,d=r.tags,u=r.authors,m=r.frontMatter,p=m.keywords,f=null!=(t=l.image)?t:m.image;return i.createElement(a.d,{title:o,description:c,keywords:p,image:f},i.createElement("meta",{property:"og:type",content:"article"}),i.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&i.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),d.length>0&&i.createElement("meta",{property:"article:tag",content:d.map((function(e){return e.label})).join(",")}))}function g(e){var t=e.content,n=e.sidebar,l=t.assets,a=t.metadata,r=a.nextItem,s=a.prevItem,d=a.frontMatter,u=d.hide_table_of_contents,f=d.toc_min_heading_level,g=d.toc_max_heading_level;return i.createElement(o.Z,{sidebar:n,toc:!u&&t.toc&&t.toc.length>0?i.createElement(p.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:g}):void 0},i.createElement(c.Z,{frontMatter:d,assets:l,metadata:a,isBlogPostPage:!0},i.createElement(t,null)),(r||s)&&i.createElement(m,{nextItem:r,prevItem:s}))}function h(e){return i.createElement(a.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},i.createElement(f,e),i.createElement(g,e))}},9407:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7462),l=n(3366),a=n(7294),r=n(6010),o=n(4861),c="tableOfContents_bqdL",s=["className"];function d(e){var t=e.className,n=(0,l.Z)(e,s);return a.createElement("div",{className:(0,r.Z)(c,"thin-scrollbar",t)},a.createElement(o.Z,(0,i.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},6841:function(e,t,n){n.d(t,{S:function(){return c}});var i=n(7294),l=n(6668);function a(e){var t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function r(e,t){var n,i,l=t.anchorTopOffset,r=e.find((function(e){return a(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(r))?r:null!=(i=e[e.indexOf(r)-1])?i:null:null!=(n=e[e.length-1])?n:null}function o(){var e=(0,i.useRef)(0),t=(0,l.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){var t=(0,i.useRef)(void 0),n=o();(0,i.useEffect)((function(){if(!e)return function(){};var i=e.linkClassName,l=e.linkActiveClassName,a=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(i),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,i=[],l=t;l<=n;l+=1)i.push("h"+l+".anchor");return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),s=r(c,{anchorTopOffset:n.current}),d=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}},9665:function(e,t,n){n.d(t,{b:function(){return c}});var i=n(3366),l=n(7294),a=["parentIndex"];function r(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var i=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,i),n[e.level]=t}));var l=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,i.Z)(e,a);n>=0?t[n].children.push(r):l.push(r)})),l}function o(e){var t=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return t.flatMap((function(e){var t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[Object.assign({},e,{children:t})]:t}))}function c(e){var t=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return(0,l.useMemo)((function(){return o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})}),[t,n,i])}},1627:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(7462),l=n(3366),a=n(7294),r=n(7425),o=["sidebar","toc","children"];function c(e){e.sidebar;var t=e.toc,n=e.children,c=(0,l.Z)(e,o);return a.createElement(r.Z,(0,i.Z)({},c,{title:"Community"}),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row communityRow"},a.createElement("main",{itemScope:!0,className:"col--9 col--offset-1",itemType:"http://schema.org/Blog"},n),t&&a.createElement("div",{className:"col col--2"},t))))}},1626:function(e,t,n){n.d(t,{Z:function(){return w}});var i=n(7294),l=n(6010),a=n(5999),r=n(9960),o=n(4996),c=n(2263),s=["zero","one","two","few","many","other"];function d(e){return s.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:d(["one","other"]),select:function(e){return 1===e?"one":"other"}};function m(){var e=(0,c.Z)().i18n.currentLocale;return(0,i.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:d(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(i){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+i.message+"\n"),u}var t,n}),[e])}function p(){var e=m();return{selectMessage:function(t,n){return function(e,t,n){var i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+i.length+": "+e);var l=n.select(t),a=n.pluralForms.indexOf(l);return i[Math.min(a,i.length-1)]}(n,t,e)}}}var f=n(8780),g=n(5042),h=n(6114),v=n(6233),x="blogPostDetailsFull_enUA";function w(e){n=p().selectMessage;var t,n,c=(0,o.C)().withBaseUrl,s=e.children,d=e.frontMatter,u=e.assets,m=e.metadata,w=e.truncated,y=e.isBlogPostPage,b=void 0!==y&&y,E=(m.date,m.formattedDate,m.permalink,m.tags),Z=(m.readingTime,m.title),N=m.editUrl,_=(m.authors,null!=(t=u.image)?t:d.image),k=!b&&w,C=E.length>0;return i.createElement("article",{className:b?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},_&&i.createElement("meta",{itemProp:"image",content:c(_,{absolute:!0})}),i.createElement("div",{id:b?f.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},i.createElement(g.Z,null,s)),(C||w)&&i.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",b&&x)},C&&i.createElement("div",{className:(0,l.Z)("col",{"col--9":k})},i.createElement(v.Z,{tags:E})),b&&N&&i.createElement("div",{className:"col margin-top--sm"},i.createElement(h.Z,{editUrl:N})),k&&i.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},i.createElement(r.Z,{to:m.permalink,"aria-label":(0,a.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},i.createElement("b",null,i.createElement(a.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4648:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(3366),l=n(7294),a=n(3654),r=n(2263),o=n(1407),c=n(912),s=["url","children","title"];function d(e){var t=e.url,n=void 0===t?"":t,d=e.children,u=e.title,m=((0,i.Z)(e,s),(0,r.Z)().i18n.currentLocale),p=u&&u.indexOf(":")>=0?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(u):u?{title:u}:{},f=!!p.icon,g=(0,a.xbD)(p),h="export"===p.type,v="btnMore"===p.type;return p.local=p.local||m,l.createElement(l.Fragment,null,g&&m===p.local?l.createElement(c.rU,{to:n},d):null,f&&m===p.local?l.createElement(c.ku,{to:n,icon:p.icon},d):null,h&&m===p.local?l.createElement(c.xP,{to:n},d):null,v&&m===p.local?l.createElement(c.o7,{to:n},d):null)}},9180:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(3366),l=n(7294),a=n(3654),r=n(912),o=n(1407),c=["className","alt","src","title"];function s(e){var t=e.className,n=e.alt,s=e.src,d=e.title,u=((0,i.Z)(e,c),d&&d.indexOf(":")>=0?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(d):d?{title:d}:{});return l.createElement(r.Ee,{src:s,className:t,alt:n,to:u.to},l.createElement(r.ZT,{size:20},u.title))}},4502:function(e,t,n){n.d(t,{Z:function(){return U}});var i=n(7294),l=n(3066),a=n(7164),r=n(2861),o=n.n(r),c=n(3654),s=n(5934),d=n(1407),u=n(9180),m=n(3581),p=n(2125),f=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-10csc5s-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),g=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-10csc5s-1"})(["width:20%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:8px;}@media (max-width:996px){width:50%;}"]),h=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,c.u4g)((function(e,t){return"image"===t.type?e.push(t):t.children&&t.children.length&&(e=e.concat(n([],t.children))),e})),i=(0,d.IC)("image",(function(e,t){return e.push(t),e}),[e]);r(i)}()}),[]),i.createElement(f,null,i.createElement(m.V,{size:5},l&&l.length?l.map((function(e){var t=e.url,n=e.alt,l=e.title;return i.createElement(g,{key:(0,s.Z)()},i.createElement(u.Z,{src:t,alt:n,title:l}))})):null))},v=n(7462),x=n(3366),w=n(4648),y=n(9960),b=p.ZP.div.withConfig({displayName:"styles__LinkList",componentId:"sc-aigwwo-0"})(["margin:0 -10px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:996px){margin:0;flex-direction:column;}"]),E=((0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-aigwwo-1"})(["margin:10px;height:100px;border-radius:10px;border:1px solid #00A6FB;width:30%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:22px;color:var(--safe-text-color);padding:20px;span{margin-left:10px;}@media (max-width:996px){width:100%;margin:10px 0;}"]),["children"]),Z=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,d.IC)("link",(function(e,t){return e.push(t),e}),[e]);r(n)}()}),[]),i.createElement(b,null,l&&l.length&&l.map((function(e){var t=e.children,n=(0,x.Z)(e,E);return i.createElement(w.Z,(0,v.Z)({key:(0,s.Z)()},n),t[0].value)})))},N=n(5124),_=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-18duw7t-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),k=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-18duw7t-1"})(["width:50%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:10px;}@media (max-width:996px){width:100%;}"]),C=p.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-18duw7t-2"})(["height:27px;font-size:22px;font-weight:400;color:#FFFFFF;line-height:27px;"]),L=p.ZP.p.withConfig({displayName:"styles__Desc",componentId:"sc-18duw7t-3"})(["height:30px;font-size:16px;font-weight:300;color:#FFFFFF;line-height:30px;"]),F=(0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-18duw7t-4"})(["height:19px;font-size:16px;font-weight:400;color:#FFFFFF;line-height:19px;"]),I=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,d.IC)("listItem",(function(e,t){return e.concat(t.children)}),[e]);r(n)}()}),[]);return i.createElement(_,null,l&&l.length&&l.map((function(e){return function(e){var t,n,l,a=(0,s.Z)(),r="image"===(null==(t=e[0])?void 0:t.type)?e[0]:null,o="text"===(null==(n=e[1])?void 0:n.type)?e[1].value.split("\n"):[],c="link"===(null==(l=e[2])?void 0:l.type)?e[2].url:"";return i.createElement(k,{key:a},r&&r.type?i.createElement(N.E,{src:""},i.createElement(C,null,o[0]),i.createElement(L,null,o[1]),i.createElement(F,{to:c},i.createElement("u",null,"More"))):null)}(e.children)})))},P=n(1262),H=n(7302),M=p.ZP.div.withConfig({displayName:"styles__SubscribeStyle",componentId:"sc-1qcu86k-0"})(["width:100%;height:400px;background-image:url(https://static.stoneatom.com/assets/rc-upload-1652691483537-2_subscribeBg.png);background-repeat:no-repeat;background-position:right center;background-size:100% 100%;margin:60px auto;@media (max-width:996px){width:100%;margin-left:0;background-image:none;height:auto;}"]),j=(0,p.ZP)(H.D.Message).withConfig({displayName:"styles__Message",componentId:"sc-1qcu86k-1"})(["color:#fff;.br{border-color:#fff;min-width:30px;max-width:30px;}@media (max-width:996px){background-color:#00A6FB;padding:var(--ifm-spacing-horizontal);}"]),A=((0,p.ZP)(H.D.Form).withConfig({displayName:"styles__FormStyle",componentId:"sc-1qcu86k-2"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}"]),(0,p.ZP)(H.D.Tip).withConfig({displayName:"styles__TipStyle",componentId:"sc-1qcu86k-3"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;margin-top:20px;.ant-btn{width:100%;}@media (max-width:996px){width:90%;height:auto;flex:1;margin-top:-20px;margin-bottom:20px;margin-left:var(--ifm-spacing-horizontal);margin-right:var(--ifm-spacing-horizontal);}"])),O=p.ZP.div.withConfig({displayName:"styles__Mail",componentId:"sc-1qcu86k-4"})(["height:100%;width:100%;display:flex;flex-direction:row;padding:30px 0 30px 30px;@media (max-width:996px){flex-direction:column;padding:0;width:120%;height:120%;margin:-10%;> div:first-child{width:100%;padding:30px;}}"]),S=function(){return i.createElement(P.Z,null,(function(){return i.createElement(M,null,i.createElement(O,null,i.createElement(j,null),i.createElement(A,null)))}))},z=p.ZP.div.withConfig({displayName:"styles__First",componentId:"sc-1qi3pjs-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;position:relative;margin:10px -20px;@media (max-width:996px){margin:10px 0;}a{padding-top:20px;font-size:22px;font-weight:400;color:#373C43;}> div{width:50%;padding:0 20px;@media (max-width:996px){width:100%;padding:0;}}"]),T=p.ZP.div.withConfig({displayName:"styles__Second",componentId:"sc-1qi3pjs-1"})(["display:flex;flex-direction:column;overflow:hidden;padding-left:20px;> div{width:100%;display:flex;flex-direction:column;}a{font-size:18px;font-weight:400;color:#646A7D;}"]),B=p.ZP.div.withConfig({displayName:"styles__Third",componentId:"sc-1qi3pjs-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;a{display:inline-block;margin:0 20px;border-width:0;font-size:14px;font-weight:300;color:#646A7D;@media (max-width:996px){display:flex;width:100%;margin:0;margin-left:20px;border-width:1px;}span{opacity:0;@media (max-width:996px){opacity:1;}}&:hover{border-width:1px;span{opacity:1;}}}"]),D=p.ZP.div.withConfig({displayName:"styles__Fourth",componentId:"sc-1qi3pjs-3"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;margin:10px -20px;@media (max-width:996px){margin:10px 0;}> a{width:20%;margin:0 20px;padding-top:20px;@media (max-width:996px){width:100%;margin:0;}}"]),R=["url","title"],q={"language-custom-eventList":I,"language-custom-subscribe":S,"language-custom-joinList":Z,"language-custom-teamList":h,"language-custom-docLinksList":function(e){var t=e.children,n=e.type,l=(0,i.useState)(null),r=l[0],c=l[1];function u(){var e=(0,a.l)().use(o()).parse(t),n=function e(t){return(0,d.IC)("list",(function(t,n){var i=(0,d.IC)("listItem",(function(t,n){var i=[],l=n.children.filter((function(e){return"paragraph"===e.type})),a=n.children.filter((function(e){return"list"===e.type}));if((null==l?void 0:l.length)===(null==a?void 0:a.length)&&1===(null==a?void 0:a.length)){var r,o=null==(r=l[0])?void 0:r.children[0],c=o.url,s=o.title,u=(0,x.Z)(o,R);i.push({title:s,url:c,text:u.children[0].value,children:e(a)})}else i=function(e){return e.length?(0,d.IC)("paragraph",(function(e,t){var n=t.children[0],i=n.url,l=n.children,a=n.title;return e.push({title:a,url:i,text:l[0].value}),e}),e):[]}(n.children);return t.concat(i)}),n.children);return t.concat(i)}),t)}([e]);c(n)}return(0,i.useEffect)((function(){u()}),[]),n&&"fourth"===n?i.createElement(D,null,r&&r.length&&r.map((function(e){var t=e.text,n=e.url,l=e.title;return i.createElement(w.Z,{to:n,title:l,key:(0,s.Z)()},t)}))):i.createElement(z,null,r&&r.length&&r.map((function(e){var t=e.children,n=e.text,l=e.url,a=e.title;return i.createElement("div",{key:(0,s.Z)()},i.createElement(w.Z,{to:l,title:a},n),t&&t.length?i.createElement(T,null,t.map((function(e){var t=e.children,n=e.text,l=e.url,a=e.title;return i.createElement("div",{key:(0,s.Z)()},i.createElement(w.Z,{to:l,title:a},n),t&&t.length?i.createElement(B,null,t.map((function(e){var t=e.text,n=e.url,l=e.title;return i.createElement(w.Z,{to:n,title:l,key:(0,s.Z)()},t)}))):null)}))):null)})))}};function U(e){var t,n=e.children.props,a=n.children,r=n.className,o=n.originalType,c=n.metastring,s=r.indexOf("custom")<0,d=q[r];return i.createElement(i.Fragment,null,s?i.createElement(l.Z,(0,i.isValidElement)(e.children)&&"code"===o?null==(t=e.children)?void 0:t.props:Object.assign({},e)):i.createElement(d,{type:c},a))}},962:function(e,t,n){var i=n(3075),l=n(9180),a=n(4648),r=n(4502),o=Object.assign({},i.Z,{img:l.Z,a:a.Z,pre:r.Z});t.Z=o},4861:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(7462),l=n(3366),a=n(7294),r=n(6668),o=n(9665),c=n(6841);function s(e){var t=e.toc,n=e.className,i=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){var t;return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:(null==(t=e.value)?void 0:t.split("  ")[0])||""}}),a.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:i}))}))):null}var d=a.memo(s),u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function m(e){var t=e.toc,n=e.className,s=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,p=void 0===m?"table-of-contents__link":m,f=e.linkActiveClassName,g=void 0===f?void 0:f,h=e.minHeadingLevel,v=e.maxHeadingLevel,x=(0,l.Z)(e,u);console.log("TOCItems",t);var w=(0,r.L)(),y=null!=h?h:w.tableOfContents.minHeadingLevel,b=null!=v?v:w.tableOfContents.maxHeadingLevel,E=(0,o.b)({toc:t,minHeadingLevel:y,maxHeadingLevel:b}),Z=(0,a.useMemo)((function(){if(p&&g)return{linkClassName:p,linkActiveClassName:g,minHeadingLevel:y,maxHeadingLevel:b}}),[p,g,y,b]);return(0,c.S)(Z),a.createElement(d,(0,i.Z)({toc:E,className:s,linkClassName:p},x))}}}]);