"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[3089],{69290:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var i=n(67294),l=n(86010),a=n(52263),r=n(1944),o=n(35281),c=n(31627),s=n(31626),d=n(95999),m=n(32244);function u(e){var t=e.metadata,n=t.previousPage,l=t.nextPage;return i.createElement("nav",{className:"pagination-nav","aria-label":(0,d.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&i.createElement(m.Z,{permalink:n,title:i.createElement(d.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&i.createElement(m.Z,{permalink:l,title:i.createElement(d.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=n(90197);function g(e){var t=e.metadata,n=(0,a.Z)().siteConfig.title,l=t.blogDescription,o=t.blogTitle,c="/"===t.permalink?n:o;return i.createElement(i.Fragment,null,i.createElement(r.d,{title:c,description:l}),i.createElement(p.Z,{tag:"blog_posts_list"}))}function h(e){var t=e.metadata,n=e.items,l=e.sidebar;return i.createElement(c.Z,{sidebar:l},n.map((function(e){var t=e.content;return i.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},i.createElement(t,null))})),i.createElement(u,{metadata:t}))}function f(e){return i.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},i.createElement(g,e),i.createElement(h,e))}},31627:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(87462),l=n(63366),a=n(67294),r=n(97425),o=["sidebar","toc","children"];function c(e){e.sidebar;var t=e.toc,n=e.children,c=(0,l.Z)(e,o);return a.createElement(r.Z,(0,i.Z)({},c,{title:"Community"}),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row communityRow"},a.createElement("main",{itemScope:!0,className:"col--9 col--offset-1",itemType:"http://schema.org/Blog"},n),t&&a.createElement("div",{className:"col col--2"},t))))}},31626:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(67294),l=n(86010),a=n(95999),r=n(39960),o=n(44996),c=n(52263),s=["zero","one","two","few","many","other"];function d(e){return s.filter((function(t){return e.includes(t)}))}var m={locale:"en",pluralForms:d(["one","other"]),select:function(e){return 1===e?"one":"other"}};function u(){var e=(0,c.Z)().i18n.currentLocale;return(0,i.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:d(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(i){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+i.message+"\n"),m}var t,n}),[e])}function p(){var e=u();return{selectMessage:function(t,n){return function(e,t,n){var i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+i.length+": "+e);var l=n.select(t),a=n.pluralForms.indexOf(l);return i[Math.min(a,i.length-1)]}(n,t,e)}}}var g=n(18780),h=n(45042),f=n(66114),x=n(86233),w="blogPostDetailsFull_enUA";function v(e){n=p().selectMessage;var t,n,c=(0,o.C)().withBaseUrl,s=e.children,d=e.frontMatter,m=e.assets,u=e.metadata,v=e.truncated,y=e.isBlogPostPage,E=void 0!==y&&y,b=(u.date,u.formattedDate,u.permalink,u.tags),Z=(u.readingTime,u.title),F=u.editUrl,k=(u.authors,null!=(t=m.image)?t:d.image),_=!E&&v,N=b.length>0;return i.createElement("article",{className:E?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},k&&i.createElement("meta",{itemProp:"image",content:c(k,{absolute:!0})}),i.createElement("div",{id:E?g.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},i.createElement(h.Z,null,s)),(N||v)&&i.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",E&&w)},N&&i.createElement("div",{className:(0,l.Z)("col",{"col--9":_})},i.createElement(x.Z,{tags:b})),E&&F&&i.createElement("div",{className:"col margin-top--sm"},i.createElement(f.Z,{editUrl:F})),_&&i.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":N})},i.createElement(r.Z,{to:u.permalink,"aria-label":(0,a.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:Z})},i.createElement("b",null,i.createElement(a.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},4648:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(63366),l=n(67294),a=n(83654),r=n(52263),o=n(81407),c=n(912),s=["url","children","title","href"];function d(e){var t=e.url,n=void 0===t?"":t,d=e.children,m=e.title,u=e.href,p=((0,i.Z)(e,s),(0,r.Z)().i18n.currentLocale),g=m&&m.indexOf(":")>=0?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(m):m?{title:m}:{},h=!!g.icon,f=(0,a.xbD)(g),x="export"===g.type,w="btnMore"===g.type;return g.local=g.local||p,l.createElement(l.Fragment,null,f&&p===g.local?l.createElement(c.rU,{to:n||u},d):null,h&&p===g.local?l.createElement(c.ku,{to:n||u,icon:g.icon},d):null,x&&p===g.local?l.createElement(c.xP,{to:n||u},d):null,w&&p===g.local?l.createElement(c.o7,{to:n||u},d):null)}},99180:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(63366),l=n(67294),a=n(83654),r=n(912),o=n(81407),c=["className","alt","src","title"];function s(e){var t=e.className,n=e.alt,s=e.src,d=e.title,m=(0,i.Z)(e,c),u=d&&d.indexOf(":")>=0,p=u?(0,a.zGw)((0,a.Vl2)(","),(0,a.UID)((0,a.Vl2)(":")),a.Pen,(0,o.M_)(a.fyY))(d):d?{title:d}:{};return l.createElement(l.Fragment,null,u?l.createElement(r.Ee,{src:s,className:t,alt:n,to:p.to},l.createElement(r.ZT,{size:20},p.title)):l.createElement("img",{loading:"lazy",alt:n,src:s,title:d,className:m.className}))}},64502:function(e,t,n){n.d(t,{Z:function(){return V}});var i=n(67294),l=n(13066),a=n(57164),r=n(12861),o=n.n(r),c=n(83654),s=n(25934),d=n(81407),m=n(99180),u=n(43581),p=n(32125),g=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-10csc5s-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),h=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-10csc5s-1"})(["width:20%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:8px;}@media (max-width:996px){width:50%;}"]),f=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,c.u4g)((function(e,t){return"image"===t.type?e.push(t):t.children&&t.children.length&&(e=e.concat(n([],t.children))),e})),i=(0,d.IC)("image",(function(e,t){return e.push(t),e}),[e]);r(i)}()}),[]),i.createElement(g,null,i.createElement(u.V,{size:5},l&&l.length?l.map((function(e){var t=e.url,n=e.alt,l=e.title;return i.createElement(h,{key:(0,s.Z)()},i.createElement(m.Z,{src:t,alt:n,title:l}))})):null))},x=n(87462),w=n(63366),v=n(4648),y=n(39960),E=p.ZP.div.withConfig({displayName:"styles__LinkList",componentId:"sc-aigwwo-0"})(["margin:0 -10px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;@media (max-width:996px){margin:0;flex-direction:column;}"]),b=((0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-aigwwo-1"})(["margin:10px;height:100px;border-radius:10px;border:1px solid #00A6FB;width:30%;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;font-size:22px;color:var(--safe-text-color);padding:20px;span{margin-left:10px;}@media (max-width:996px){width:100%;margin:10px 0;}"]),["children"]),Z=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];return(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,d.IC)("link",(function(e,t){return e.push(t),e}),[e]);r(n)}()}),[]),i.createElement(E,null,l&&l.length&&l.map((function(e){var t=e.children,n=(0,w.Z)(e,b);return i.createElement(v.Z,(0,x.Z)({key:(0,s.Z)()},n),t[0].value)})))},F=n(5124),k=p.ZP.div.withConfig({displayName:"styles__Row",componentId:"sc-18duw7t-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:0 -8px;overflow:hidden;position:relative;@media (max-width:996px){margin:0 14px;}"]),_=p.ZP.div.withConfig({displayName:"styles__Col",componentId:"sc-18duw7t-1"})(["width:50%;padding:8px;display:flex;justify-content:center;align-items:center;position:relative;overflow:hidden;> div{width:100%;height:100%;border-radius:10px;}@media (max-width:996px){width:100%;}"]),N=p.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-18duw7t-2"})(["height:27px;font-size:22px;font-weight:400;color:#FFFFFF;line-height:27px;"]),P=p.ZP.p.withConfig({displayName:"styles__Desc",componentId:"sc-18duw7t-3"})(["height:30px;font-size:16px;font-weight:300;color:#FFFFFF;line-height:30px;"]),I=(0,p.ZP)(y.Z).withConfig({displayName:"styles__LinkStyle",componentId:"sc-18duw7t-4"})(["height:19px;font-size:16px;font-weight:400;color:#FFFFFF;line-height:19px;"]),C=function(e){var t=e.children,n=(0,i.useState)(null),l=n[0],r=n[1];(0,i.useEffect)((function(){!function(){var e=(0,a.l)().use(o()).parse(t),n=(0,d.IC)("listItem",(function(e,t){return e.concat(t.children)}),[e]);r(n)}()}),[]);return i.createElement(k,null,l&&l.length&&l.map((function(e){return function(e){var t,n,l,a=(0,s.Z)(),r="image"===(null==(t=e[0])?void 0:t.type)?e[0]:null,o="text"===(null==(n=e[1])?void 0:n.type)?e[1].value.split("\n"):[],c="link"===(null==(l=e[2])?void 0:l.type)?e[2].url:"";return i.createElement(_,{key:a},r&&r.type?i.createElement(F.E,{src:""},i.createElement(N,null,o[0]),i.createElement(P,null,o[1]),i.createElement(I,{to:c},i.createElement("u",null,"More"))):null)}(e.children)})))},z=n(91262),M=n(7302),j=p.ZP.div.withConfig({displayName:"styles__SubscribeStyle",componentId:"sc-1qcu86k-0"})(["width:100%;height:400px;background-image:url(https://static.stoneatom.com/assets/rc-upload-1652691483537-2_subscribeBg.png);background-repeat:no-repeat;background-position:right center;background-size:100% 100%;margin:60px auto;@media (max-width:996px){width:100%;margin-left:0;background-image:none;height:auto;}"]),D=(0,p.ZP)(M.D.Message).withConfig({displayName:"styles__Message",componentId:"sc-1qcu86k-1"})(["color:#fff;.br{border-color:#fff;min-width:30px;max-width:30px;}@media (max-width:996px){background-color:#00A6FB;padding:var(--ifm-spacing-horizontal);}"]),T=((0,p.ZP)(M.D.Form).withConfig({displayName:"styles__FormStyle",componentId:"sc-1qcu86k-2"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;.ant-btn{width:100%;}"]),(0,p.ZP)(M.D.Tip).withConfig({displayName:"styles__TipStyle",componentId:"sc-1qcu86k-3"})(["width:300px;height:300px;background:#FFFFFF;box-shadow:0px 30px 50px 0px rgba(55,60,67,0.2);border-radius:10px;padding:20px;margin-top:20px;.ant-btn{width:100%;}@media (max-width:996px){width:90%;height:auto;flex:1;margin-top:-20px;margin-bottom:20px;margin-left:var(--ifm-spacing-horizontal);margin-right:var(--ifm-spacing-horizontal);}"])),L=p.ZP.div.withConfig({displayName:"styles__Mail",componentId:"sc-1qcu86k-4"})(["height:100%;width:100%;display:flex;flex-direction:row;padding:30px 0 30px 30px;@media (max-width:996px){flex-direction:column;padding:0;width:120%;height:120%;margin:-10%;> div:first-child{width:100%;padding:30px;}}"]),S=function(){return i.createElement(z.Z,null,(function(){return i.createElement(j,null,i.createElement(L,null,i.createElement(D,null),i.createElement(T,null)))}))},B=p.ZP.div.withConfig({displayName:"styles__First",componentId:"sc-1qi3pjs-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;position:relative;margin:10px -20px;@media (max-width:996px){margin:10px 0;}a{padding-top:20px;font-size:22px;font-weight:400;color:#373C43;}> div{width:50%;padding:0 20px;@media (max-width:996px){width:100%;padding:0;}}"]),A=p.ZP.div.withConfig({displayName:"styles__Second",componentId:"sc-1qi3pjs-1"})(["display:flex;flex-direction:column;overflow:hidden;padding-left:20px;> div{width:100%;display:flex;flex-direction:column;}a{font-size:18px;font-weight:400;color:#646A7D;}"]),q=p.ZP.div.withConfig({displayName:"styles__Third",componentId:"sc-1qi3pjs-2"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;a{display:inline-block;margin:0 20px;border-width:0;font-size:14px;font-weight:300;color:#646A7D;@media (max-width:996px){display:flex;width:100%;margin:0;margin-left:20px;border-width:1px;}span{opacity:0;@media (max-width:996px){opacity:1;}}&:hover{border-width:1px;span{opacity:1;}}}"]),R=p.ZP.div.withConfig({displayName:"styles__Fourth",componentId:"sc-1qi3pjs-3"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;overflow:hidden;margin:10px -20px;@media (max-width:996px){margin:10px 0;}> a{width:20%;margin:0 20px;padding-top:20px;@media (max-width:996px){width:100%;margin:0;}}"]),O=["url","title"],U={"language-custom-eventList":C,"language-custom-subscribe":S,"language-custom-joinList":Z,"language-custom-teamList":f,"language-custom-docLinksList":function(e){var t=e.children,n=e.type,l=(0,i.useState)(null),r=l[0],c=l[1];function m(){var e=(0,a.l)().use(o()).parse(t),n=function e(t){return(0,d.IC)("list",(function(t,n){var i=(0,d.IC)("listItem",(function(t,n){var i=[],l=n.children.filter((function(e){return"paragraph"===e.type})),a=n.children.filter((function(e){return"list"===e.type}));if((null==l?void 0:l.length)===(null==a?void 0:a.length)&&1===(null==a?void 0:a.length)){var r,o=null==(r=l[0])?void 0:r.children[0],c=o.url,s=o.title,m=(0,w.Z)(o,O);i.push({title:s,url:c,text:m.children[0].value,children:e(a)})}else i=function(e){return e.length?(0,d.IC)("paragraph",(function(e,t){var n=t.children[0],i=n.url,l=n.children,a=n.title;return e.push({title:a,url:i,text:l[0].value}),e}),e):[]}(n.children);return t.concat(i)}),n.children);return t.concat(i)}),t)}([e]);c(n)}return(0,i.useEffect)((function(){m()}),[]),n&&"fourth"===n?i.createElement(R,null,r&&r.length&&r.map((function(e){var t=e.text,n=e.url,l=e.title;return i.createElement(v.Z,{to:n,title:l,key:(0,s.Z)()},t)}))):i.createElement(B,null,r&&r.length&&r.map((function(e){var t=e.children,n=e.text,l=e.url,a=e.title;return i.createElement("div",{key:(0,s.Z)()},i.createElement(v.Z,{to:l,title:a},n),t&&t.length?i.createElement(A,null,t.map((function(e){var t=e.children,n=e.text,l=e.url,a=e.title;return i.createElement("div",{key:(0,s.Z)()},i.createElement(v.Z,{to:l,title:a},n),t&&t.length?i.createElement(q,null,t.map((function(e){var t=e.text,n=e.url,l=e.title;return i.createElement(v.Z,{to:n,title:l,key:(0,s.Z)()},t)}))):null)}))):null)})))}};function V(e){var t,n=e.children.props,a=n.children,r=n.className,o=n.originalType,c=n.metastring,s=!r||r.indexOf("custom")<0,d=U[r];return i.createElement(i.Fragment,null,s?i.createElement(l.Z,(0,i.isValidElement)(e.children)&&"code"===o?null==(t=e.children)?void 0:t.props:Object.assign({},e)):i.createElement(d,{type:c},a))}},48483:function(e,t,n){var i=n(93075),l=n(99180),a=n(4648),r=n(64502),o=Object.assign({},i.Z,{img:l.Z,a:a.Z,pre:r.Z});t.Z=o}}]);