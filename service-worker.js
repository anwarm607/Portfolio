"use strict";var precacheConfig=[["anwarm607.github.io/index.html","9aa9c3f7d31666a1952a731282bb99f4"],["anwarm607.github.io/static/css/main.79a500ec.css","33e4524a6505cf9925315d837a8b29b2"],["anwarm607.github.io/static/js/main.15b7b51f.js","d084caca3801eb58f2ee78da045c8d18"],["anwarm607.github.io/static/media/Calculator.ed7a5ccc.png","ed7a5ccca77a15be5f9cb2a6d92c1edc"],["anwarm607.github.io/static/media/Pomo-Clock.7a62cc07.png","7a62cc07ef6b66484b709ce861ba30fc"],["anwarm607.github.io/static/media/RQM.3b31d288.png","3b31d288fd448cae70472f1a91154c94"],["anwarm607.github.io/static/media/React.8ce11996.svg","8ce119968250fd3cf1607bb72b5f3fd8"],["anwarm607.github.io/static/media/T-Shirt_Time.0dfcdd11.png","0dfcdd11900a8ea25ebace32ec84b3c6"],["anwarm607.github.io/static/media/T-Shirt_Time_full.e8548d93.png","e8548d935f9b32ac4cef1e61c4b5e632"],["anwarm607.github.io/static/media/bootstrap.a6e8ad68.svg","a6e8ad68d61e932361fdf7893ffc835d"],["anwarm607.github.io/static/media/css3.c13c2ef2.svg","c13c2ef2fef01a582f6fb3ed19ed392b"],["anwarm607.github.io/static/media/github.25151ab9.svg","25151ab98bb2a1bcf42daf8fbe6dfe17"],["anwarm607.github.io/static/media/html5.1b028b35.svg","1b028b3519a5be02673c6eeab74fbe72"],["anwarm607.github.io/static/media/javascript.b336e5f4.svg","b336e5f478ed11268261bf16db2038b6"],["anwarm607.github.io/static/media/my-todo.ab91a913.png","ab91a913e2fd03e2c8ac19ba57204eb0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="anwarm607.github.io/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});