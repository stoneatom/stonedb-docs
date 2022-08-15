(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"41e0d4c0060bf6cb68db1167206fd943","url":"404.html"},{"revision":"d172f8b2bb9c964e792f014ff922aded","url":"assets/css/styles.cee48ecd.css"},{"revision":"1c8f66376a20414a7ed07b824af68204","url":"assets/js/074f5d7c.efd4607a.js"},{"revision":"6a873bcca8f4d13edb43719694bd71ec","url":"assets/js/08e78a0e.2b8adfcb.js"},{"revision":"561c94e5b1d9e86b91c02b49d67c1605","url":"assets/js/0b022f4d.1a7adfc7.js"},{"revision":"b3a400fcd1f83c7a852ccf278c15f2ab","url":"assets/js/0ef89b26.713a0abe.js"},{"revision":"7243473474663ef4431d029ecf53ab99","url":"assets/js/0f4306ae.bbe7e584.js"},{"revision":"bf96b55da29b10d8588e38b10ebef0f8","url":"assets/js/0f716783.0f33d693.js"},{"revision":"ffbf8d3436237c11b9cd6f33ca8d4e1f","url":"assets/js/14eb3368.c94ca961.js"},{"revision":"320bcc33b6d691a6584b7a4f20ac42a4","url":"assets/js/17896441.cd9c9751.js"},{"revision":"876ebfe48914ce04541ced0e7b615541","url":"assets/js/18540331.6a56c61c.js"},{"revision":"6d3d89b07bb8ac041d3e621f1189233b","url":"assets/js/18f1d6ea.6f3bc077.js"},{"revision":"39301ebbc6ca8cbe8e2821f47eaa7d82","url":"assets/js/1be78505.409d0c93.js"},{"revision":"8403e6b3a66f7b4e8a50a193ae9bd101","url":"assets/js/1c437329.871104b4.js"},{"revision":"b4f1a9bebe6e95c1c79b52bf6e38b5b3","url":"assets/js/1df93b7f.f0e2f14f.js"},{"revision":"56e19fe633371d7030516229747a69c5","url":"assets/js/22111832.9fe7af23.js"},{"revision":"dfb7633b55e302de11595bb2c20001bf","url":"assets/js/22f2b658.b3e7f8e0.js"},{"revision":"b2848b005a36e6bbd6af06968ef60567","url":"assets/js/230.6f9e9fb4.js"},{"revision":"d7cb6f3e6be2a3e5fedf552a815de578","url":"assets/js/2449e716.c29575a7.js"},{"revision":"a4696fdaf333d17d334921af3832d836","url":"assets/js/255ff5c9.7a832195.js"},{"revision":"723bb40f23553e3d8105fe6762be135b","url":"assets/js/29654f22.07143a91.js"},{"revision":"b50e035a6aadaf721a881fbd7f32d955","url":"assets/js/2ce02311.8faa9651.js"},{"revision":"9794c17c91a7d6963f78eed9e84c6819","url":"assets/js/2d89c24a.5d9723e9.js"},{"revision":"5fc92d2d5997a970992c8aa14bd00aee","url":"assets/js/2e06712c.ae52a9f7.js"},{"revision":"20284e0e56e5df8d9ef034b67f481651","url":"assets/js/30ac1bba.009ace02.js"},{"revision":"73ad8687adca1131b417e2281ffbac39","url":"assets/js/323a772d.7e628c0b.js"},{"revision":"1d4bdd13b0f78f29b468ef7ad4240a33","url":"assets/js/32890476.7e9d5498.js"},{"revision":"861aa00facd256c031cc2b88a20c2b73","url":"assets/js/3973c022.eeab464c.js"},{"revision":"4f5a6fe438ab474dc82a99beb81baa85","url":"assets/js/3a0dcde5.4b570b2b.js"},{"revision":"78589239e97fff099d8085993d9ba004","url":"assets/js/4260dd22.5d63c787.js"},{"revision":"e4d3f3724b5a8cff52da08a62f9cd0f0","url":"assets/js/455ed5a2.19d22180.js"},{"revision":"321273ef09d0bf45120a00e6ae96c7aa","url":"assets/js/483ae289.b9d890d1.js"},{"revision":"2750fa3f912babfa85564c29ebd51796","url":"assets/js/486.5532403e.js"},{"revision":"5758f223671f6b876b7f2ec13fcaa90e","url":"assets/js/4a3ff6a4.18ab5168.js"},{"revision":"b248eeccbf1a7594eaad23eecb4cf702","url":"assets/js/4d282e45.324a19a5.js"},{"revision":"5f735e181c40e5f654d278a0173c84f2","url":"assets/js/4e9af88f.c0aa77fb.js"},{"revision":"0faf3bb04a37f5c2fa28dd608c16e6e3","url":"assets/js/5131.7ee3fe40.js"},{"revision":"79d3bb26eec773a001a6e89f2a9cedc0","url":"assets/js/526483e9.7ed15974.js"},{"revision":"7142d9d6858f31b01edecf05c9b86865","url":"assets/js/5283.43e06db6.js"},{"revision":"0524aa66266e22f8f94ec82057c410d6","url":"assets/js/57ca1a6c.a76de9c9.js"},{"revision":"5e2b3d7c44d8244dd4711a57dac85986","url":"assets/js/5a60bc19.2b2ba98e.js"},{"revision":"3f32d5f3f8884f71535199efa59ae312","url":"assets/js/5b24358c.5fc832c7.js"},{"revision":"9e6ba6f6bc8f9a134239ac07862043f7","url":"assets/js/5c2ee7f2.b310f772.js"},{"revision":"d3c8265af58b8c12766cce546646a500","url":"assets/js/620f3d5a.728d946f.js"},{"revision":"7a24449a58383764066614d57715fb65","url":"assets/js/6213bd70.7ce88bae.js"},{"revision":"5872ebe3794d756b81655b4cf06c99d4","url":"assets/js/661f9197.641ddd9a.js"},{"revision":"fd1a24b36ef4305aa332d609ba2d62b6","url":"assets/js/70148c99.3bb678eb.js"},{"revision":"7f192e08204f3191ea6f4dfdc0c52155","url":"assets/js/7025460f.34408505.js"},{"revision":"5a9f81a7fd8409ef27f954cfd53f308d","url":"assets/js/710b4d00.20f10ed0.js"},{"revision":"a0de0b9b9e41925de2dd2dd4aad4920f","url":"assets/js/732bcb33.c8b41873.js"},{"revision":"f9dc410a45d0925978a4adcb784a4ec5","url":"assets/js/74b4518b.fb7d9c4d.js"},{"revision":"f006a3daf0d914bb81e6512cec0de0bf","url":"assets/js/762a74d1.042cf03d.js"},{"revision":"2fb905e1900ca16d3a1249a880108c0d","url":"assets/js/77e8ab63.ed82950e.js"},{"revision":"46585efddad2ea33c9e444997c9402bd","url":"assets/js/7d884dc4.51056471.js"},{"revision":"5fc21b757f8e240b45c7be230d52c24a","url":"assets/js/827103d9.a734df32.js"},{"revision":"b33d9bda55455b272d15999e69a1aaac","url":"assets/js/88aa99b3.1d88f995.js"},{"revision":"04dd253cef19b7e4d0c4e96765d3cd5a","url":"assets/js/8e45b355.dbc9e909.js"},{"revision":"45da017836e966f90c88d7dba5b5eb21","url":"assets/js/9095.ace644b6.js"},{"revision":"c7bee405ecf1a394582e5b1e3595b8c5","url":"assets/js/90f39abc.4eb06a88.js"},{"revision":"58ee6ff424876098909d83438dd436ff","url":"assets/js/92e4965d.da4b44c8.js"},{"revision":"44b8b80746f74bfd1270249845dc4251","url":"assets/js/935f2afb.5a4dbf3d.js"},{"revision":"53a3f0e67ff54f750a89bf640a012213","url":"assets/js/9582272a.af5a79e3.js"},{"revision":"d842408d46d5a1fef1f7a2473b31705d","url":"assets/js/978250d5.ac1dc140.js"},{"revision":"f70988da5c940e4f4beba10f8babfff0","url":"assets/js/979.4215d9d4.js"},{"revision":"94a3cf3dcadd04613c4911dc5b7aed7c","url":"assets/js/99c774cd.40226a6d.js"},{"revision":"c1ee05912d6008d28904c23f51828efe","url":"assets/js/9ab16355.2a890ba8.js"},{"revision":"625a0531e6062f8877aa16d50dff014c","url":"assets/js/9e4087bc.6ec2f1e9.js"},{"revision":"5477169163c4ad07b958e1df05a55627","url":"assets/js/a084f012.3e77bc3e.js"},{"revision":"f04562d90134828368af493de8d2cc39","url":"assets/js/a1cee58a.1f1e7fa0.js"},{"revision":"4fe7369e94db7c8a807476b1bcce8dba","url":"assets/js/a52d1736.83246838.js"},{"revision":"e7948e79f3fee58999cefb5966d6647a","url":"assets/js/a6aa9e1f.5e640741.js"},{"revision":"2818fab76bb87b5fbd070d1f9e6eed93","url":"assets/js/b47042a7.3aa6890d.js"},{"revision":"5c1ff2609c495505871c698bf7501768","url":"assets/js/b5d007fc.41d97263.js"},{"revision":"99d5f159d64f73a991e8096a99f86763","url":"assets/js/b5e1e86c.9dc05375.js"},{"revision":"ec360411d5c7028adb18a422c0434548","url":"assets/js/bbadbe64.cb2b996a.js"},{"revision":"68657157e800642d66d30ab3ac570e78","url":"assets/js/bbef8dd2.cf94d2cd.js"},{"revision":"ae134e60eec6a23ecd950e0edd24544e","url":"assets/js/c3b7f9ab.a1b971f7.js"},{"revision":"e1114537f8bbce6f06ed78b9c23b6385","url":"assets/js/c44a072f.dc5d3ebc.js"},{"revision":"e478c3f07ef06835edd9c0ee41a37812","url":"assets/js/c4577ea8.f18d7641.js"},{"revision":"4ef5b4c51d4dd1e9784bb6ed11f5260a","url":"assets/js/c477196e.63bf142c.js"},{"revision":"0c53cb3b162cadc0b4759b789b1b696c","url":"assets/js/c5664fdd.8545dda4.js"},{"revision":"c2cc5832f7d8e7a2fd70ea914c04ed0e","url":"assets/js/c85fdda8.c8f61dc3.js"},{"revision":"61ea7ef472e0d44a39f60011c91836b0","url":"assets/js/ccc49370.acd7b93f.js"},{"revision":"a89f25784f247b615c0d24044f334d51","url":"assets/js/cd49fced.9c2631e7.js"},{"revision":"055ecd4f293713e483beea7c4450117b","url":"assets/js/d853795f.1d15c17b.js"},{"revision":"ccc8a5b8ddcd23b0383e473f7fc40e6d","url":"assets/js/dbaa48bd.e5af4e48.js"},{"revision":"6bd173c52d96ef7066779e7d2a16ae5e","url":"assets/js/dbc41f12.d4a72b6b.js"},{"revision":"e7b6f9360e60dcb1216e6cba2806dedc","url":"assets/js/e2521bdb.c0d408bc.js"},{"revision":"6741b1de2208f28c331daaeaf5005e2b","url":"assets/js/e426ef98.a26076a5.js"},{"revision":"59256b70b847a1163a439f54f4ad690b","url":"assets/js/ea1d5fbe.fdf0188c.js"},{"revision":"3bd6264ed487c7c04b348409e0b5e173","url":"assets/js/ebee253d.2728ed61.js"},{"revision":"98621abe1a7f8572d359fe707091b6e8","url":"assets/js/ec0f8f48.a3f6ab88.js"},{"revision":"d40029b7b54482573cdc603ae3687379","url":"assets/js/f01bb215.6ff32dd3.js"},{"revision":"72b263a9b1fd863d6caa18c979ca0b88","url":"assets/js/f0df5922.491baac6.js"},{"revision":"ada10ebc569e861a568011d3f8ed630c","url":"assets/js/f553487a.5682394b.js"},{"revision":"8b1de5de8f211bc14dad1d29637c0a40","url":"assets/js/f56caf0f.03455a87.js"},{"revision":"a336a97cd3681f984822c0d582022a27","url":"assets/js/f8f941b3.09672884.js"},{"revision":"3726afde6d54fe14cd17c101db1a86fd","url":"assets/js/main.356c5ca5.js"},{"revision":"574ea11548febb0e4ad8c6b11ad0601e","url":"assets/js/runtime~main.898115cf.js"},{"revision":"7187b0da3a9d648460e8cf9db86abc29","url":"community/archive/index.html"},{"revision":"95332051128c8e664ae74a4187794e66","url":"community/index.html"},{"revision":"3d9826c382dc7edfff93d47777e8153a","url":"community/main/index.html"},{"revision":"0ef3b2dd8c11e8838242f9ffef926ce4","url":"docs/about-stonedb/architecture/index.html"},{"revision":"0675da0bd1250cf939bd8899df8f82aa","url":"docs/about-stonedb/intro/index.html"},{"revision":"61299bf11e57f63894e5456926479063","url":"docs/about-stonedb/limits/index.html"},{"revision":"05d001f9747f672590952bfc19842314","url":"docs/about-stonedb/terms/index.html"},{"revision":"3aebbd41f4908958ca406ecd84454ed4","url":"docs/compiling-methods/index.html"},{"revision":"3683077eb70dbbeee7b5c2cbf14aff73","url":"docs/data-migration-to-stonedb/use-gravity-to-migrate/index.html"},{"revision":"825838e028084d353733befc72874fc9","url":"docs/data-migration-to-stonedb/use-outter-to-migrate/index.html"},{"revision":"03f9225a8c8e70f08086309aa69c16bc","url":"docs/developer-guide/appendix/configuration-parameters/index.html"},{"revision":"0bff170204bd48bd2f29ff3d4c15a693","url":"docs/developer-guide/appendix/error-codes/index.html"},{"revision":"253506bca52a6db7844684140f88cdb7","url":"docs/developer-guide/compiling-methods/compile-overview/index.html"},{"revision":"a7ceee61b8cbb0dc1f43746878938b03","url":"docs/developer-guide/compiling-methods/compile-using-centos7/index.html"},{"revision":"9322188450b69d20d50291b900d7b281","url":"docs/developer-guide/compiling-methods/compile-using-docker/index.html"},{"revision":"e4fb26cb171c55e87b6963d603867f21","url":"docs/developer-guide/compiling-methods/compile-using-redhat7/index.html"},{"revision":"2920657744a77a9ae9193052b3775525","url":"docs/developer-guide/compiling-methods/compile-using-ubuntu20.04/index.html"},{"revision":"a37eaec6c8f75290953fb3f2ca0cee79","url":"docs/developer-guide/connect-to-stonedb/use-mysql-client/index.html"},{"revision":"9110c9d4a120ce442cf4af60a8b4a0cf","url":"docs/developer-guide/connect-to-stonedb/use-navicat/index.html"},{"revision":"9524992c3393f114c4503fa23b705b05","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-database/index.html"},{"revision":"7cf0f98eedeee2ccc53225f6a56272c6","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-stored-procedure/index.html"},{"revision":"42d85e145e5e259290f37fdeab378df8","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-table/index.html"},{"revision":"211be06d4383fdb75bb37003a6173257","url":"docs/developer-guide/create-and-manage-database-objects/create-and-manage-view/index.html"},{"revision":"e13bb255a8fbd8be5d9f1733121eebe1","url":"docs/developer-guide/DML-statements/index.html"},{"revision":"71a75f17dd877f18bbe28c18c53fbd69","url":"docs/developer-guide/statements-for-queries/index.html"},{"revision":"ec4ebaf0ebd48be6a9b6fe06a34f1560","url":"docs/download/index.html"},{"revision":"a2cbbc5b8826d4e44c7b7768f6ec2ecd","url":"docs/environment-requirements/server-configuration-requirements/index.html"},{"revision":"1b03490c1187cf180b5d7d41936a7ee0","url":"docs/environment-requirements/supported-servers-and-OSs/index.html"},{"revision":"8015769ae433ae6ea9edc092ad61675f","url":"docs/FAQ/install-faq/index.html"},{"revision":"3641973920ea745e34e3d5af18f364b2","url":"docs/FAQ/stonedb-faq/index.html"},{"revision":"df314a1cc150f4b9c4edfd28a5f6c893","url":"docs/FAQ/troubleshoot-faq/index.html"},{"revision":"901bc8c6441b3d6d62bc454979a81f01","url":"docs/getting-started/basic-operations/index.html"},{"revision":"e18e7dec31f616225912a53b3b715734","url":"docs/getting-started/quick-deploy-in-docker/index.html"},{"revision":"77628aaeb8dfe9c61cba89ddf42d41f8","url":"docs/getting-started/quick-deployment/index.html"},{"revision":"c2e39b3a1a0522399efd2a27d516376c","url":"docs/getting-started/quick-start/index.html"},{"revision":"9db53d9c5769dc7dd2618ae6e805dd49","url":"docs/O&M-Guide/backup-and-recovery/use-mydumper-full-backup/index.html"},{"revision":"ee0f137b120e8a12b700412dc94c6dc5","url":"docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore/index.html"},{"revision":"4006cc18aa60cff2b161569e12a3e011","url":"docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor/index.html"},{"revision":"eaa0f7542a2ff24fbf34415712071fc9","url":"docs/O&M-Guide/regular-change-operations/index.html"},{"revision":"985b9fc08507296170692fcea5f88c0e","url":"docs/performance-tuning/architecture-tuning/read_write-splitting/index.html"},{"revision":"5dee64b462fe9597d674dec48f17ce6e","url":"docs/performance-tuning/database-tuning/parameter-tuning/index.html"},{"revision":"0523a78a0a5c8368ec3e9902c4634a78","url":"docs/performance-tuning/database-tuning/sql-best-practices/index.html"},{"revision":"4e98e3ff58e2ca654d6526e74b42cf9c","url":"docs/performance-tuning/database-tuning/sql-tuning/index.html"},{"revision":"799d8927828735c7b8cfb0206e701cde","url":"docs/performance-tuning/os-tuning/index.html"},{"revision":"160aa981c60abee24440d0a19640032b","url":"docs/performance-tuning/performance-monitoring-commands/cpu-monitor/index.html"},{"revision":"76ad3b83b3c4a052de2f6956aba28fd8","url":"docs/performance-tuning/performance-monitoring-commands/disk-io-monitor/index.html"},{"revision":"2e3e9cacac53ca4e8bc0582d4bd458a5","url":"docs/performance-tuning/performance-monitoring-commands/mem-monitor/index.html"},{"revision":"376fd3dacc1290676f249c41e872533c","url":"docs/performance-tuning/performance-monitoring-commands/network-monitor/index.html"},{"revision":"1a06f9140873a7cea63024a0c8c35bec","url":"docs/performance-tuning/performance-monitoring-commands/top-commands/index.html"},{"revision":"af2ebbd120efe8cb2a35b9363b79c8e6","url":"docs/performance-tuning/performance-tests/OLAP/olap-performance-test-method/index.html"},{"revision":"593feea5b55a981ffb3f394c7c1778a7","url":"docs/performance-tuning/performance-tests/OLAP/tcph-test-report/index.html"},{"revision":"9c4fc1b51518b2b30395b9f46b83157c","url":"docs/performance-tuning/performance-tests/OLTP/oltp-performance-test-method/index.html"},{"revision":"3ec1e7754b5c3141ddcde83504a70f85","url":"docs/performance-tuning/performance-tuning-overview/index.html"},{"revision":"d59fbcee87fa17a83f0df7f6ee2af95a","url":"docs/release-notes/index.html"},{"revision":"5998745bddbb68ed664aa29a88c21b10","url":"docs/SQL-reference/character-sets/index.html"},{"revision":"0d2b83472fb27dc31164f3eaccdfb1a6","url":"docs/SQL-reference/data-types/index.html"},{"revision":"a4c85319af14df0c9913a5f7a406f8f5","url":"docs/SQL-reference/functions/advanced-functions/index.html"},{"revision":"e9946e877cfee8ac2261db20940c686d","url":"docs/SQL-reference/functions/aggregate-functions/index.html"},{"revision":"af02c7ad0de1c80e05052a1bfdb0f74e","url":"docs/SQL-reference/functions/date-and-time-functions/index.html"},{"revision":"5218481c436a176a40a28858b85ec522","url":"docs/SQL-reference/functions/mathematical-functions/index.html"},{"revision":"99f543748654196e120e66e42be2b4d5","url":"docs/SQL-reference/functions/string-functions/index.html"},{"revision":"2c30cd7890b200e41a232d0eb8fbf8a3","url":"docs/SQL-reference/operators/arithmetic-operators/index.html"},{"revision":"2844e10fa71c3df40bdfaa32615dbc42","url":"docs/SQL-reference/operators/assignment-operators/index.html"},{"revision":"09f8f9daf7f29442c830e177630ab610","url":"docs/SQL-reference/operators/bitwise-operators/index.html"},{"revision":"bf7103d42be4e266595e7c39515b2781","url":"docs/SQL-reference/operators/comparison-operators/index.html"},{"revision":"7534ecb43b55630fdfb3dd52b1a2c9f0","url":"docs/SQL-reference/operators/logical-operators/index.html"},{"revision":"29ad13b181879e78feb5fe2afbdcf71a","url":"docs/troubleshooting/excessive-large-directory/index.html"},{"revision":"1df0be2358153ea2332549007f687366","url":"docs/troubleshooting/failed-to-connect/index.html"},{"revision":"aa4cde6fcaa648596220e973ba974c73","url":"docs/troubleshooting/failed-to-operate-table/index.html"},{"revision":"189fecc605397379f760f6f279da4c74","url":"docs/troubleshooting/failed-to-start-in-kvm/index.html"},{"revision":"fef83496e99612b6b24f2f368fbc18e0","url":"docs/troubleshooting/failed-to-start/index.html"},{"revision":"1de4fb31e0a274ec925f7f2dc0cc6483","url":"docs/troubleshooting/mdl-wait/index.html"},{"revision":"8f312f94e5c81f998c5f599d50cd31b9","url":"docs/troubleshooting/resource-bottleneck/index.html"},{"revision":"88414d16759418b9c09d4fb87e434ef2","url":"docs/troubleshooting/slow-query/index.html"},{"revision":"e4fff1a472573ce31057a8b7c4d44460","url":"docs/troubleshooting/stonedb-crashed/index.html"},{"revision":"e60b4bdbcb675255bdf11d0a6a82b995","url":"index.html"},{"revision":"dcab6c00a8c6209bde94bff518af6cda","url":"manifest.json"},{"revision":"c28977aae46e723dcf9dd1f9559de3ae","url":"styles/panel/index.html"},{"revision":"6d1a0a8eb4d6e038099a726bfe52a1ed","url":"assets/images/boost_dir-f70a6179a9ce56e57b326c14180b266a.png"},{"revision":"3cab0b06302758b89b4dc43644f0d663","url":"assets/images/command-output-example-522bc25951d14d9b344148ddc4730b8d.png"},{"revision":"92eeb9fa55875381b00166e838f3ff2a","url":"assets/images/example-1-dd086d4d488bb8369f957e965c0f289f.png"},{"revision":"3b76f287a544deb24c684f4babc2e897","url":"assets/images/example-2-27fb5eb6d609f4d4b11ab86421bb8c78.png"},{"revision":"0f5ae212eb74f5072b0bfdd3c195326c","url":"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},{"revision":"478a9085491a32434fa4e1426801623e","url":"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},{"revision":"264add1ea07d3cff382254e78b53f904","url":"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},{"revision":"7f9de87f3d9b1500d6e5bafbecf9784e","url":"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},{"revision":"d68910942a8c2589892bc1365ffe3f99","url":"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},{"revision":"58753e49b02cb561bb8a5409fea4ffc4","url":"assets/images/KnowledgeGrid-1-47bfdcc93ad85c30db6dd7fd55c0a960.png"},{"revision":"e7248879532a52d429545873529e5d6d","url":"assets/images/KnowledgeGrid-2-971c82eba35d478ae267c78a4684becc.png"},{"revision":"37d18dded3e97bf8b01596f59d9533b9","url":"assets/images/KnowledgeGrid-3-ae4208a6a06248bc89e5a3ee02858860.png"},{"revision":"32bd06eae194c6d8118693e847338dfc","url":"assets/images/marisa_dir-338883c6bd0e89d1209ad7a84cc4b7b0.png"},{"revision":"fc2c97f5c51813aa8c90b9f928e66150","url":"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},{"revision":"9e61a77c3aca4fdaf2bb9aa625bb8072","url":"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},{"revision":"49a82803cd53badf18b0c564346d5d01","url":"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},{"revision":"5bb92f5d74e99d033078c3d396ccad1f","url":"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},{"revision":"118073e57255d386df4980469cabc664","url":"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},{"revision":"0548b942b86e788c1359ff83e9167d77","url":"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"},{"revision":"5470b143ed086e30e52d3303a6cb3af1","url":"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},{"revision":"f1b2459acc6347448ad44f6ff6497bf6","url":"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},{"revision":"1f9abb360460534e553112590f21e50c","url":"assets/images/rocks_dir-1bbecb3f3e5b776ad917c7513ef024f6.png"},{"revision":"46f99d01bab8ee506062bad43f69de8a","url":"assets/images/stonedb-architecture-V1-46febbcfcc771ebe9e0f4be38f1b1fe9.png"},{"revision":"d6dcae477a97c1e7ce47e317b0810b9c","url":"assets/images/stonedb-vs-clickhouse-814ec519173b47ec54c89ce50b59ba29.png"},{"revision":"cc0c107224e8cf5503ec65ddad8fedd7","url":"assets/images/yuque_diagram-1-ddc693fd0a0e588c620ed8b8bcca4fc1.png"},{"revision":"ea268e49582a11ab959bd8b7f30ff025","url":"img/favicon.ico"},{"revision":"d1d317e005b3aacd7897bb7c1004e296","url":"img/icons/128x128.png"},{"revision":"6ccd311f69702a4cdc1a599e7f303fec","url":"img/icons/144x144.png"},{"revision":"4068161cc8a2a4560a4b36b776d1f65c","url":"img/icons/152x152.png"},{"revision":"8d5af5791199ee12e1a5c40d62e0d764","url":"img/icons/192x192.png"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/icons/200x200.png"},{"revision":"0e505d2a9544b814a0d52ae4b700eef2","url":"img/icons/384x384.png"},{"revision":"6b5692ea59db253b55538632470b789c","url":"img/icons/512x512.png"},{"revision":"ab6607844950cb665f06c079a7ff939a","url":"img/icons/72x72.png"},{"revision":"87ff0ff98feac058d7c72aa4df4c131e","url":"img/icons/96x96.png"},{"revision":"b633060f5875949127f6a8a772af51ec","url":"img/logo_stonedb.svg"},{"revision":"7743d9b2795bb4fd1e5ddbdde473321a","url":"img/stoneDB.png"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();