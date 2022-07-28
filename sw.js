(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"9813f4b92296124845e745e90713fd0f","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"baa5c12a49fa91cce4f220039febd027","url":"assets/js/074f5d7c.7f27bc3e.js"},{"revision":"6a873bcca8f4d13edb43719694bd71ec","url":"assets/js/08e78a0e.2b8adfcb.js"},{"revision":"09763bdb21d6e880f5adf81066ca9c42","url":"assets/js/0b022f4d.415d19fa.js"},{"revision":"9142632b3dbd0c920e3438621e1a8bb8","url":"assets/js/0ef89b26.689fa471.js"},{"revision":"0e797d59c0b6057a435ebd47400ec496","url":"assets/js/0f4306ae.ed3b93ad.js"},{"revision":"bf96b55da29b10d8588e38b10ebef0f8","url":"assets/js/0f716783.0f33d693.js"},{"revision":"ffbf8d3436237c11b9cd6f33ca8d4e1f","url":"assets/js/14eb3368.c94ca961.js"},{"revision":"159f676b356d8c2f72980221e6b36892","url":"assets/js/17896441.79b7ee15.js"},{"revision":"7cea5379055b931a526f16a94857b916","url":"assets/js/18540331.cd957b5f.js"},{"revision":"71ae491f9ed203d12849eba1844f9def","url":"assets/js/18f1d6ea.d14c3412.js"},{"revision":"39301ebbc6ca8cbe8e2821f47eaa7d82","url":"assets/js/1be78505.409d0c93.js"},{"revision":"167fbf53df565a1dabbdcc2b7c224cfc","url":"assets/js/1c437329.c7cb6327.js"},{"revision":"b4f1a9bebe6e95c1c79b52bf6e38b5b3","url":"assets/js/1df93b7f.f0e2f14f.js"},{"revision":"b3ce46d8683ca58042c7312738eb81c9","url":"assets/js/22111832.7ae1a8d6.js"},{"revision":"d8cab40de23b4c7ce06eef316e871a47","url":"assets/js/22f2b658.a8d9521d.js"},{"revision":"b2848b005a36e6bbd6af06968ef60567","url":"assets/js/230.6f9e9fb4.js"},{"revision":"9b6051118057855046381c7efc281b7d","url":"assets/js/2449e716.2390ba68.js"},{"revision":"8108a4bfa86d2316f6fa5884793a4eff","url":"assets/js/255ff5c9.aaaf3517.js"},{"revision":"48bffabe753ceee00d11a5334ddeec65","url":"assets/js/29654f22.7342a293.js"},{"revision":"2a54c318f93353d5b1ce1a2465bb0d31","url":"assets/js/2ce02311.96cbb962.js"},{"revision":"c3a8a4da68b451ed86ace4b6008a3854","url":"assets/js/2d89c24a.72f50b44.js"},{"revision":"6858b958e926c8e5876c771655296349","url":"assets/js/2e06712c.77cab193.js"},{"revision":"20284e0e56e5df8d9ef034b67f481651","url":"assets/js/30ac1bba.009ace02.js"},{"revision":"837a6b4997a6c886513907425e98eaa8","url":"assets/js/323a772d.d38c28a6.js"},{"revision":"1ab368b25e7327bcc45e4ea99dbfb7b7","url":"assets/js/32890476.af4a3116.js"},{"revision":"09f37db2467fdf7a3a51895aa02d64b7","url":"assets/js/3973c022.f86be0d3.js"},{"revision":"0e2b074cb36a6db51fc78c454aae9c0a","url":"assets/js/3a0dcde5.09f7c714.js"},{"revision":"95bd6c243b3aac07f1b166fb22ba6cfc","url":"assets/js/4260dd22.73f28a2f.js"},{"revision":"f239ed2acd1b9dce23eca88c67ad90a1","url":"assets/js/455ed5a2.b82bb717.js"},{"revision":"b69481ce38af64a3075c528a44dbcb29","url":"assets/js/483ae289.15b7c5f5.js"},{"revision":"2750fa3f912babfa85564c29ebd51796","url":"assets/js/486.5532403e.js"},{"revision":"e4448f9052169c8c843fb5bf5bca0fcb","url":"assets/js/4a3ff6a4.fe3fe447.js"},{"revision":"be66ff748f9adbfc2977b5737b24725d","url":"assets/js/4d282e45.1710cedb.js"},{"revision":"b09eb596d310008616e396bdd5e86b9a","url":"assets/js/4e9af88f.c6e985f8.js"},{"revision":"0faf3bb04a37f5c2fa28dd608c16e6e3","url":"assets/js/5131.7ee3fe40.js"},{"revision":"519d3b206cbb2f194663014f8316aabc","url":"assets/js/526483e9.bdcfb8c9.js"},{"revision":"7142d9d6858f31b01edecf05c9b86865","url":"assets/js/5283.43e06db6.js"},{"revision":"93ff4ef55b148a8bb2c4ffed5f165c17","url":"assets/js/57ca1a6c.3bc6aa3e.js"},{"revision":"84d1ffd51fc31ab0d6c2d9b753e7431d","url":"assets/js/5a60bc19.6f8bb4af.js"},{"revision":"dbd6afe77c9249dba5f55cdafd9af4a9","url":"assets/js/5b24358c.5cae83e1.js"},{"revision":"3c6bfa5245d5eaf50650e7f6bd8548ef","url":"assets/js/5c2ee7f2.265fae59.js"},{"revision":"35401113832a09103c601a92c8e5c3a3","url":"assets/js/620f3d5a.0e5704a6.js"},{"revision":"765ddbd6f2f48049d31a89386ca16c4c","url":"assets/js/6213bd70.c4876bd5.js"},{"revision":"895590f53b1f6ec4eaeeb2c0ea4add05","url":"assets/js/661f9197.5c7e1cbe.js"},{"revision":"c42ac47ae868674c8f4beb71a2f1bcbc","url":"assets/js/70148c99.159954f6.js"},{"revision":"7f192e08204f3191ea6f4dfdc0c52155","url":"assets/js/7025460f.34408505.js"},{"revision":"4daa0e543e75ead99c9ff63b91f5010e","url":"assets/js/710b4d00.4bf5c8a5.js"},{"revision":"6cdc198c95bbc544d4098a155c8c3e2c","url":"assets/js/732bcb33.6652e52b.js"},{"revision":"acca05674c2baa6ea63eb51b1b4c527b","url":"assets/js/74b4518b.1478ac60.js"},{"revision":"6ed09017e69e6cb2832f2cec88262538","url":"assets/js/762a74d1.9b87685b.js"},{"revision":"1b69b5fcb263a4e1f6e7b814f97b08e8","url":"assets/js/77e8ab63.e053a311.js"},{"revision":"0ad107fc9342c3f36e66efd3d5c717f8","url":"assets/js/7d884dc4.abbcacca.js"},{"revision":"dc7695eb1ce19d40adb6302f45cb3030","url":"assets/js/827103d9.d7809264.js"},{"revision":"41fd41db2fe8bbf109dabeb72344e697","url":"assets/js/88aa99b3.4a2b4777.js"},{"revision":"49c543a8d973885a02363c81c88be766","url":"assets/js/8e45b355.4e30ea93.js"},{"revision":"45da017836e966f90c88d7dba5b5eb21","url":"assets/js/9095.ace644b6.js"},{"revision":"7ba040ea94dd673fac3fcd9bc4e419c1","url":"assets/js/90f39abc.7cf4a13f.js"},{"revision":"0e9777c38811758d1be6b281a8f49ffc","url":"assets/js/92e4965d.e53bfac0.js"},{"revision":"ae5599fb6593210b0d7a11995d0737b8","url":"assets/js/935f2afb.8b2a3288.js"},{"revision":"9ba6e7303053aed0367e2a212be0fd7e","url":"assets/js/9582272a.f807121c.js"},{"revision":"f79a4cfd78b9292aca797496d038e6de","url":"assets/js/978250d5.f6cc5dc4.js"},{"revision":"f70988da5c940e4f4beba10f8babfff0","url":"assets/js/979.4215d9d4.js"},{"revision":"4f752c891ede9c07a4f264649c202ee9","url":"assets/js/99c774cd.eba0570a.js"},{"revision":"36531dd20675c28e39db4c43e8c78cfb","url":"assets/js/9ab16355.1e5d2122.js"},{"revision":"625a0531e6062f8877aa16d50dff014c","url":"assets/js/9e4087bc.6ec2f1e9.js"},{"revision":"83f5caa4cdc139f59731e1990d58d04d","url":"assets/js/a084f012.198d90a3.js"},{"revision":"a07dab471aa8e3ca389ae108c36a68e0","url":"assets/js/a1cee58a.7369f9e6.js"},{"revision":"4fe7369e94db7c8a807476b1bcce8dba","url":"assets/js/a52d1736.83246838.js"},{"revision":"ce36a0deab75753b4c71fde03418e7a3","url":"assets/js/a6aa9e1f.18397ae8.js"},{"revision":"e836a679bc25eea4c8936a0e8e9bfc49","url":"assets/js/b47042a7.837d6105.js"},{"revision":"e9f84be5190815e0c9007a14f81b43c7","url":"assets/js/b5d007fc.c8c1fbb9.js"},{"revision":"99d5f159d64f73a991e8096a99f86763","url":"assets/js/b5e1e86c.9dc05375.js"},{"revision":"f6c4839db462101657c89304e5e59ea6","url":"assets/js/bbadbe64.51e36e08.js"},{"revision":"68657157e800642d66d30ab3ac570e78","url":"assets/js/bbef8dd2.cf94d2cd.js"},{"revision":"8edf7ce6f5b15b8ebcfba19565f416c3","url":"assets/js/c3b7f9ab.eb0c3c6b.js"},{"revision":"0df64a88c4be271fc73fa63f5134627d","url":"assets/js/c44a072f.63e10969.js"},{"revision":"71a50e61820aa501c512b110aa6bd708","url":"assets/js/c4577ea8.4f4543b4.js"},{"revision":"813f4501f4ee04928636c7c810f7383c","url":"assets/js/c477196e.2a3c21c3.js"},{"revision":"0f8903df945a19725bd05ece96bd5864","url":"assets/js/c5664fdd.2c884477.js"},{"revision":"6780dfc197c651a63b6121d5f4ddac42","url":"assets/js/c85fdda8.7f8c718d.js"},{"revision":"928f4ec58f61b1a554629fe20ab849ed","url":"assets/js/ccc49370.2ba10597.js"},{"revision":"5f41cfa784a0c5b95b9b92e230be8a7c","url":"assets/js/cd49fced.d37e323d.js"},{"revision":"3ff0977f487f8a954e2f3241310cbc45","url":"assets/js/d853795f.853cb146.js"},{"revision":"128dfd2328e3ddb040ac7cf3fd2ec387","url":"assets/js/dbaa48bd.0ff327fb.js"},{"revision":"537bae79b4f58159ad3856d3ef410292","url":"assets/js/dbc41f12.5f02e177.js"},{"revision":"c364cdd24e68c0f7fabaf604ac79260e","url":"assets/js/e2521bdb.0c29e08a.js"},{"revision":"f06ac0d5bcb16b60a38a5c304d244ae1","url":"assets/js/e426ef98.3705bd5f.js"},{"revision":"48d32ce17cf80b78ef01c18112a1c7eb","url":"assets/js/ea1d5fbe.95f293a8.js"},{"revision":"f1420dc0cb264defba3fce6f586f1f13","url":"assets/js/ebee253d.54315b67.js"},{"revision":"7e339cd32a27c85b8cc0fc3d25b57cdc","url":"assets/js/ec0f8f48.35cabba9.js"},{"revision":"23aa2763372295d95fef15ec40db9d09","url":"assets/js/f01bb215.826304b4.js"},{"revision":"53fb836bbf9708e516bdafe4ad47ac63","url":"assets/js/f0df5922.2de782b3.js"},{"revision":"678fa4562e8de1c296a9b000d7f95855","url":"assets/js/f553487a.1d548dc0.js"},{"revision":"e04982ed26453ba62056e3a07d629cd4","url":"assets/js/f56caf0f.04084404.js"},{"revision":"3011481b70e54a749edb1a226c277e6c","url":"assets/js/f8f941b3.c2396a14.js"},{"revision":"3726afde6d54fe14cd17c101db1a86fd","url":"assets/js/main.356c5ca5.js"},{"revision":"b0cd5522b953258f5b383f2fe23c64aa","url":"assets/js/runtime~main.ec015c6c.js"},{"revision":"457db50aff89a63084dd740958fb5a48","url":"community/archive/index.html"},{"revision":"7c61a7d3c3f33f08cd978b2d18fefd02","url":"community/index.html"},{"revision":"41ec06c9f4891c0ebf6ee6a230a69106","url":"community/main/index.html"},{"revision":"e571314e9fc82083cd3bc7b6b49db72d","url":"docs/about-stonedb/architecture/index.html"},{"revision":"3ff0c8d4ce199e5af91f205edf7b500b","url":"docs/about-stonedb/intro/index.html"},{"revision":"17413b13558f6e598701067793ea1226","url":"docs/about-stonedb/limits/index.html"},{"revision":"2f1304a076ed4df63cfecacb5deaa7dc","url":"docs/about-stonedb/terms/index.html"},{"revision":"72d89b7dc04d4ce8328c5cfb674f4fc4","url":"docs/compiling-methods/index.html"},{"revision":"1c5f91e73b433d870f9ea082adc50284","url":"docs/data-migration-to-stonedb/use-gravity-to-migrate/index.html"},{"revision":"8b3f980a3c3454397136ad7abff884c7","url":"docs/data-migration-to-stonedb/use-outter-to-migrate/index.html"},{"revision":"574eb33f1f4171f4cf40c6c59274db8e","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"f8bc3b0a32896de137f0a69469e23294","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"8bb5bc09bb7c28031caa0c9d2fbd6432","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"6fde70c59c2e90fe14a46984933d286b","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"9ced8d4c471c7b4d670022ee45179387","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"6eb713282e283c50317d89b98092ba81","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"740dd63a27ebfad9150e05103cd16d15","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"eddcb03bfba0a7aa7f8177a123239773","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"051ef70a811f23d5a4eca89d5beac166","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"4777363aadf5fa0f0a3e3c28d19e6eea","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"bbf68a2420f3036e21a76a513645ca7f","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"12ee3574974cc05997fb258badd8a281","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"33888b09e32ae7737ba7912598ea79ca","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"b4e12adae2ef15e049267f432061d6d0","url":"docs/developer-guide/DML-statements/index.html"},{"revision":"a6522edb71b3c12f98d51684aec96bc2","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"d9d8ca6347aada824411b2e124fb5bbe","url":"docs/download/index.html"},{"revision":"3d61c94f52ac40ec206f06de50452e32","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"5043030e80f5a33d5da6b5987b73e0aa","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"9f0f044756732fccd4b7477803955d85","url":"docs/FAQ/install-faq/index.html"},{"revision":"7766f454f9b5abb7b3a877eb8422b1ef","url":"docs/FAQ/stonedb-faq/index.html"},{"revision":"a49f43d58e8caefe03dc378cf9267113","url":"docs/FAQ/troubleshoot-faq/index.html"},{"revision":"fc205e656309a413c189c7ec9f60f6fd","url":"docs/getting-started/basic-operations/index.html"},{"revision":"c1c475572ebb7abae57edcf463dab470","url":"docs/getting-started/quick-deploy-in-docker/index.html"},{"revision":"d743119aa3e912ee202bec41df32edba","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"7733882973af579417b1ffaa3b1badf1","url":"docs/getting-started/quick-start/index.html"},{"revision":"a71dde80d0bf1189e594d65cd73e1c4d","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"43d6a03d4e33f7152384ba457f819306","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"f949a22c94a6af8d3ead101abc817305","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"f4940498aab6c4677ca8b41b5c8c1691","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"5d40d7a635c8a74d0a3cdf22c3ccff18","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"771547a72e44af2bba53774f7251d5bd","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"07fb6b1d5731e6f62d29fae173b692bb","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"aa142d21203001e18b0487015d3e992f","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"3ff41f1129eac30169d87d0aa7e1f63f","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"7bcfbe4afc1f4ad0c10b4f03dfa35e40","url":"docs/performance-tuning/performance-monitoring-commands/cpu-monitor/index.html"},{"revision":"34a812a0f37af1c73517cf785f078eb6","url":"docs/performance-tuning/performance-monitoring-commands/disk-io-monitor/index.html"},{"revision":"8d6412c42789315c1c8bc48d7dd0a6b2","url":"docs/performance-tuning/performance-monitoring-commands/mem-monitor/index.html"},{"revision":"e9a121a5bdebad0e3c487265e2199925","url":"docs/performance-tuning/performance-monitoring-commands/network-monitor/index.html"},{"revision":"23bde341641bc3c53c02afc07497db01","url":"docs/performance-tuning/performance-monitoring-commands/top-commands/index.html"},{"revision":"b957445d4a555b130c1e1a608f37e1bb","url":"docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method/index.html"},{"revision":"99aa3b63df16fc59d724619f944d3f40","url":"docs/performance-tuning/performance-tests/OLAP/tcph-test-report/index.html"},{"revision":"2c53a99ec7e27ffaef826616680aa6df","url":"docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method/index.html"},{"revision":"047af076e94835127671f0e5086069d1","url":"docs/performance-tuning/performance-tuning-overview/index.html"},{"revision":"f9a819d8eee1393458e306c13dd6c530","url":"docs/release-notes/index.html"},{"revision":"229d1574d713fe3104844efc4999d7ed","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"c2a26911d4b35a3912cbaf0da28501e0","url":"docs/SQL-reference/data-types/index.html"},{"revision":"d239210bde986c5b84f604c028ae57a3","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"32fd73c2f72c5450ee71119c380d5f30","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"a192d48d43d84c862fb4a1e8f98442ab","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"628110bb0dc4f85d76c3679cc16c9c19","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"9a6238c5f30cfe7185ae3c4b69f4cf39","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"71fb05daf9bc6a33695b7d41ca3d6c3e","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"075fa2664c40ad3d9a6482262d723604","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"0153203c62f900b0914e14e5a5e55f70","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"c3596bbca17108364bd38c166ffed7f3","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"759e548df2d0bd684f3faf1f5ffddb76","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"dbf13a945b355fc7983b44b0e7a1dc58","url":"docs/troubleshooting/excessive-large-directory/index.html"},{"revision":"e5ab741b935095fb24a8f6b1ed75ce99","url":"docs/troubleshooting/failed-to-connect/index.html"},{"revision":"4553ccf69a225b435e1cb74af2b291ee","url":"docs/troubleshooting/failed-to-operate-table/index.html"},{"revision":"8691ef5be8d303dd4d22f69e01ed4c54","url":"docs/troubleshooting/failed-to-start-in-kvm/index.html"},{"revision":"5bf63c24c1e0861d1e7e94f06efea8f9","url":"docs/troubleshooting/failed-to-start/index.html"},{"revision":"b04699715fac9c598cdec32bdb4d66f3","url":"docs/troubleshooting/mdl-wait/index.html"},{"revision":"62f10c785af8c53f00026eff7588cd96","url":"docs/troubleshooting/resource-bottleneck/index.html"},{"revision":"a06af30e8e1d393caeb697285e816f61","url":"docs/troubleshooting/slow-query/index.html"},{"revision":"e7b940503500d0ebc38604ad52cfecbb","url":"docs/troubleshooting/stonedb-crashed/index.html"},{"revision":"dd26efe0fe96200adc531528896020e4","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"eff5a6b1ab4a5c5b00dad1b50c3555e9","url":"styles/panel/index.html"},{"revision":"5d5d660968e722cf3b871a63e65c7ad6","url":"assets/images/boost_dir-f09f86eb37da3bc21e28bc47fc46edf4.png"},{"revision":"3cab0b06302758b89b4dc43644f0d663","url":"assets/images/command-output-example-522bc25951d14d9b344148ddc4730b8d.png"},{"revision":"92eeb9fa55875381b00166e838f3ff2a","url":"assets/images/example-1-dd086d4d488bb8369f957e965c0f289f.png"},{"revision":"3b76f287a544deb24c684f4babc2e897","url":"assets/images/example-2-27fb5eb6d609f4d4b11ab86421bb8c78.png"},{"revision":"0f5ae212eb74f5072b0bfdd3c195326c","url":"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},{"revision":"478a9085491a32434fa4e1426801623e","url":"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},{"revision":"264add1ea07d3cff382254e78b53f904","url":"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},{"revision":"7f9de87f3d9b1500d6e5bafbecf9784e","url":"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},{"revision":"d68910942a8c2589892bc1365ffe3f99","url":"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},{"revision":"2ed86e673909ea2d3cd94a37a82fd99b","url":"assets/images/marisa_dir-75eb57fbce88e88ab035ae0ceb6dd196.png"},{"revision":"fc2c97f5c51813aa8c90b9f928e66150","url":"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},{"revision":"9e61a77c3aca4fdaf2bb9aa625bb8072","url":"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},{"revision":"49a82803cd53badf18b0c564346d5d01","url":"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},{"revision":"5bb92f5d74e99d033078c3d396ccad1f","url":"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},{"revision":"118073e57255d386df4980469cabc664","url":"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},{"revision":"0548b942b86e788c1359ff83e9167d77","url":"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"},{"revision":"5470b143ed086e30e52d3303a6cb3af1","url":"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},{"revision":"f1b2459acc6347448ad44f6ff6497bf6","url":"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},{"revision":"b10a57fe1679f801597c3a98421aa8e6","url":"assets/images/rocks_dir-fc2d9e40f3d2a745dc17f1e766578bbd.png"},{"revision":"253077e6b28a31eedfc164fc3e286f33","url":"assets/images/stonedb-architecture-V1-cc5186dede7f33f3e6e7d6fe5a65ca5b.png"},{"revision":"d6dcae477a97c1e7ce47e317b0810b9c","url":"assets/images/stonedb-vs-clickhouse-814ec519173b47ec54c89ce50b59ba29.png"},{"revision":"cc0c107224e8cf5503ec65ddad8fedd7","url":"assets/images/yuque_diagram-1-ddc693fd0a0e588c620ed8b8bcca4fc1.png"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();