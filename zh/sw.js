(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"14afbda788461dfa471d8677b1362f9f","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"24d9fcb9f85097d68d310860d37c238e","url":"assets/js/04a1ff1d.4da28d6e.js"},{"revision":"427f92f605e7560ac186fcd7aba7184d","url":"assets/js/08962994.7263f8f0.js"},{"revision":"c821bcf4e10d2915545df0c2adf77373","url":"assets/js/09bd8251.d8b0780e.js"},{"revision":"465465605d803b776953d3e740382729","url":"assets/js/0ad4fb1f.aa4b641b.js"},{"revision":"0a7676da2dda801aa9808ca8e5232c0a","url":"assets/js/0ea0c0e8.72a299ce.js"},{"revision":"2936d0eea64cdb2d553c359c33a773db","url":"assets/js/0f716783.3fb6ecf3.js"},{"revision":"21dc060af768f06649f5e3d364f1425f","url":"assets/js/12d4b11f.304e99ea.js"},{"revision":"60a7f1028d9b2e5961b028c81cf3ad22","url":"assets/js/13caa995.94630e49.js"},{"revision":"4660944e993486566cb2038ca4ab8d65","url":"assets/js/13e82bbd.4211ffa8.js"},{"revision":"5ab8c840e65669d305b250ec1aee97c3","url":"assets/js/14eb3368.19ca2084.js"},{"revision":"cffb56a6361eaf7312c6ff2a046c8a64","url":"assets/js/17896441.d65bbfe4.js"},{"revision":"809453e3edcfd9b10e0fb36755ac3e72","url":"assets/js/1be78505.9607912b.js"},{"revision":"9a29ff1808f444ac5b56408363faea7b","url":"assets/js/1df93b7f.57cc8227.js"},{"revision":"351d58fa4855ed4827e89128c5a501b1","url":"assets/js/230.e5d532a2.js"},{"revision":"313bab4e606a2ae20877e561d35aabbb","url":"assets/js/2b1e257e.bc2a3a8c.js"},{"revision":"da0eba32411be06a1ae291532b9fb6a4","url":"assets/js/2b49bc9e.56ddf551.js"},{"revision":"5ff13e7176fce9cb1b79eb78461264f1","url":"assets/js/2fd5ee2e.72710b7d.js"},{"revision":"bdd1e0c469c3fc9c7b4216db6fb6b0c1","url":"assets/js/4491524f.6713f0c9.js"},{"revision":"5a534f032bffb6745e4d7a39b60d08f5","url":"assets/js/47a2ab89.46a1d238.js"},{"revision":"12a46c824c22cf78a6555fce8d02f57e","url":"assets/js/4972.ec6cfa17.js"},{"revision":"e98eed194a2d6b8fb1be348b99803d3b","url":"assets/js/4b23bafa.6bce9174.js"},{"revision":"bf25f9e3caa46d6052fb2764ac607587","url":"assets/js/5131.2c346bfc.js"},{"revision":"8609fbee032dc7d2e116cb64e5a93e47","url":"assets/js/5283.3f2d0697.js"},{"revision":"0a60fc246bad97b3b7a0d5ee80839e5e","url":"assets/js/5503f11d.f981cbf4.js"},{"revision":"cf4d1c87df9d8105b4e2e1e432b3a2b3","url":"assets/js/56f0168a.0f1aed2f.js"},{"revision":"05b32a2499ddb44c1f88480f6e41d555","url":"assets/js/598ea675.9c92e428.js"},{"revision":"87933161ba60ca304da370f8819866f3","url":"assets/js/5ed9614c.72787eee.js"},{"revision":"72ea0b02badabeb6c01ee39ace1df932","url":"assets/js/60598a8e.6413c2b5.js"},{"revision":"9414ea02d9bd12fb7c23e6bae6fa98e1","url":"assets/js/61ffba71.ec38dbfa.js"},{"revision":"7f72d542d98d8d40e00aa1304df435b4","url":"assets/js/6b692f41.b300e681.js"},{"revision":"4e896a18c0315f6b3ebf3c6179f23f6b","url":"assets/js/6f8bdcd2.3d1a41d8.js"},{"revision":"7c28170c13f836c5f9e8d520dc5f997c","url":"assets/js/78126fdb.944ae9b0.js"},{"revision":"b18965de2e7aa5cbc827b76661619c59","url":"assets/js/7ceb65cf.39b95982.js"},{"revision":"2ed36e86389ae9fa5083f96eddeea5e6","url":"assets/js/85e76eb8.6b4ac271.js"},{"revision":"0bdbea21a29252297c0f0368a03cec1f","url":"assets/js/9095.0fc2c9a4.js"},{"revision":"6e54c4e40a189bd6e063b0b4ad485079","url":"assets/js/935f2afb.9e8e9299.js"},{"revision":"a0f06fda2e6f93d681c2968e86dfa1fa","url":"assets/js/979.373fa54f.js"},{"revision":"a6595bd6079a306d2f0d73bc546bc9f0","url":"assets/js/9b155510.85e42f1a.js"},{"revision":"7e885cb87b801bcccc8a483773a4df9b","url":"assets/js/9e4087bc.54902b5d.js"},{"revision":"2b11c699fe05ba7eebae7a9ce4ca0b45","url":"assets/js/a1aff75e.b99ec477.js"},{"revision":"4abb1928c45c2178cad7b15011bfc082","url":"assets/js/a30d9234.2fd833b8.js"},{"revision":"51221b8c82d836a0b3b34bfbb85e804a","url":"assets/js/a6aa9e1f.be9cfeeb.js"},{"revision":"d0d64c67bd23247fd1887644e802522e","url":"assets/js/b0461066.bba284c5.js"},{"revision":"ed24c11e7a2210d483f523d928319e03","url":"assets/js/b5e1e86c.6b598a46.js"},{"revision":"be4fc3d3592d1f59310a6a157c4b8915","url":"assets/js/b6a2d028.96fc060a.js"},{"revision":"8d853ef2006cb4278bf1d3ccd79d9dcc","url":"assets/js/b89ea502.e7ff380f.js"},{"revision":"dc83e8c4699e32c9a649c4cf16edcf17","url":"assets/js/b9e5bc89.00d6b019.js"},{"revision":"ff6704e62a67f7790f9f4881ac8ede62","url":"assets/js/bbf707fc.35eaabca.js"},{"revision":"b78dcfa4fb2d46a51d802c2471223619","url":"assets/js/c0fdcace.17c0d3c2.js"},{"revision":"0eb9eae3dcada6460c766e6d7b54f22f","url":"assets/js/c22ac12f.4fbe1c97.js"},{"revision":"cfff608fab64a11c4f774ff66eb0b567","url":"assets/js/c52b4cc1.e8218cba.js"},{"revision":"77d6ac54e048367d2220782102603628","url":"assets/js/c9277353.f70282ea.js"},{"revision":"85107bf5a2cab877cd69da1b1005dbac","url":"assets/js/cc79c185.8c1a5662.js"},{"revision":"a53dc62b37a7ccd074b9a5fb0e7fd44a","url":"assets/js/ccc49370.0f944677.js"},{"revision":"898e3c62fc53c882729bea59547e9a61","url":"assets/js/db6eec97.560f4db7.js"},{"revision":"f18635dec7b27635f888bdf072bd59c3","url":"assets/js/dc4bb4c7.9eb6ed79.js"},{"revision":"0db0e3c938770b0c645a1e74aa13b94a","url":"assets/js/e5c6d364.a8d9856b.js"},{"revision":"8a4612cff5a32b053ad78346ec166880","url":"assets/js/ec7e31c8.53e7376b.js"},{"revision":"ba0aafe99523e5d7b76c29d4fb04eb45","url":"assets/js/ef5d54d6.0a64541e.js"},{"revision":"eaa9db87ab0d021c51258ae9ee300878","url":"assets/js/f3015d51.8293dd39.js"},{"revision":"8f36ceb6b893fb43e0316611db8d9b66","url":"assets/js/f3eabdeb.4ce6991c.js"},{"revision":"d00a6af8de18474bc8c665d0eec0b788","url":"assets/js/f6aa66e6.b9d17082.js"},{"revision":"86bf64648eb917f3afe08874dff2b652","url":"assets/js/f6e40cbe.45dae231.js"},{"revision":"6aaca7684ec697fda2fcd7597a3e343d","url":"assets/js/f7366610.2bcf5382.js"},{"revision":"3d7e88fade122d5f8508ae0d245fbf02","url":"assets/js/f841cfcf.054eee8f.js"},{"revision":"c2d39cda99709b35d04fe8680dd46cd4","url":"assets/js/main.8bdc07d7.js"},{"revision":"0f91ad70aa029d812e2692dd89cbf15d","url":"assets/js/runtime~main.abb3d6c6.js"},{"revision":"d955ebd04d2221aa3ae58aba36c5e729","url":"community/archive/index.html"},{"revision":"86421fe18939141221b93b3d6679c655","url":"community/index.html"},{"revision":"fa25baa60bb8b31d2b055aa235b563a3","url":"community/main/index.html"},{"revision":"bd387d2423f36c4e97950ab545eedccc","url":"docs/about-stonedb/architecture/index.html"},{"revision":"8f60b95c708e87f75690c891a5ddd112","url":"docs/about-stonedb/intro/index.html"},{"revision":"a642be6a220e0f89f2383427bf4d4932","url":"docs/about-stonedb/limits/index.html"},{"revision":"94fd4d93558838dde09d15e6fc8ba57a","url":"docs/about-stonedb/terms/index.html"},{"revision":"173be81d5e1f61fd4190d06517a2cd2e","url":"docs/compiling-methods/index.html"},{"revision":"24ed2fb606c81901ab1308955b879482","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"0917dff8e9a28e082404f62dde419480","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"dfc49b8679d2be31361e46ee17ea07f7","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"06c93718bb071236fb3d84f0fc88c4de","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"c39d5c99725a94dea6473c51ed358c54","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"3b8bfb81deffb32645842b20ad06fa2a","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"bf4a476675ebb0317abe724e24f29b3e","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"947893ac11818bae02caf2b889c7eef6","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"73e7082f8e4581ede6f21b2a10ae40e0","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"471f6d356d594666d3873fea226ba605","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"620fa993d335e5f7a40400788a8d6c5a","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"2685929fccb15ba1e458bfc689c7e894","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"694a688822fec6ac60d2291e9be5932f","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"14ddc8850991c3b22f6eba8fc7ddb066","url":"docs/developer-guide/regular-change-operations/index.html"},{"revision":"05db52009ca4cf941115959c001bf18e","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"033dbac2b5a8003481f4c93923bd1297","url":"docs/download/index.html"},{"revision":"bda064ca5290cbcdedd7d4e8f1f30348","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"cfa34d6a75ef71c85428564bd562b8d5","url":"docs/environment-requirements/supported-servers-and-oss/index.html"},{"revision":"af18679ff3dc21d950b31474a6bd5a47","url":"docs/getting-started/basic-operations/index.html"},{"revision":"ff7bf40e2b8207fd7cf7a305110c1f6e","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"219b5e5dd5d2792c8f8aa88280820189","url":"docs/getting-started/quick-start/index.html"},{"revision":"653e8c3d987b2af08d9e9e4e721fe4f8","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"97c6ec2fd7924d2b16476eb53120767c","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"1e562d79c3f0ea95d20249049b9303a0","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"02b886bbf35e09b8572fc3ee435f470f","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"46148114b15d7d14e8f7e6f28c22ceea","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"ccfe2408977d2fed08c31f10768b161f","url":"docs/SQL-reference/data-types/index.html"},{"revision":"a1d1331036797578b044961a3d857099","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"eee003c28546d6ab650920a084be884d","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"c28b22bb551e8f09b55ebbafc7faa3fb","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"ccb7562fb3fa143e803cc0151f1a18bf","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"d11bd05144be3cd070b126d6d831c7d0","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"b352acc65443158d54626a6feb319c7c","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"8010184b4f53695308ec0f637243c759","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"75adcff0a13bcc403bf299471fda4cd4","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"ff6b548df1023a087d2a14653217ea98","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"65f5082113f4f584b6754bbbb3cda989","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"a5e76ed87d637b6da2fd1b46c4d689c9","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"2d44b2daa8f0e29df02cd507e5d2505b","url":"styles/panel/index.html"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();