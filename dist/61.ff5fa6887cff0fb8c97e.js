(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[61],{637:function(t,e){"use strict";function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}var c=function(){var t,e=(t=regeneratorRuntime.mark((function t(e,n){var o,i,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,r({headers:{"Content-Type":"application/json"}},n));case 2:if(i=t.sent,null===(o=i.headers.get("content-type"))||void 0===o||!o.includes("application/json")){t.next=9;break}return t.next=6,i.json();case 6:t.t0=t.sent,t.next=12;break;case 9:return t.next=11,i.text();case 11:t.t0=t.sent;case 12:if(c=t.t0,!i.ok){t.next=17;break}return t.abrupt("return",c);case 17:throw{message:c&&"string"!=typeof c?c.message:c,statusCode:i.status};case 18:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){i(c,r,o,a,u,"next",t)}function u(t){i(c,r,o,a,u,"throw",t)}a(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();e.Z={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object.keys(e).map((function(t){var n=e[t];return Array.isArray(n)?n.map((function(e){return"".concat(encodeURIComponent("".concat(t,"[]")),"=").concat(encodeURIComponent(e))})).join("&"):"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))})).join("&");return c("".concat(t).concat(r?"?".concat(r):""),n)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c(t,r({method:"POST",body:JSON.stringify(e)},n))},patch:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c(t,r({method:"PATCH",body:JSON.stringify(e)},n))},put:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c(t,r({method:"PUT",body:JSON.stringify(e)},n))},delete:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c(t,r({method:"DELETE",body:e?JSON.stringify(e):void 0},n))},sendBeacon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return navigator.sendBeacon?navigator.sendBeacon(t,new Blob([JSON.stringify(e)],{type:"application/json; charset=UTF-8"})):c(t,{method:"POST",body:JSON.stringify(e)})}}},636:function(t,e,n){"use strict";n.d(e,{eq:function(){return u},e5:function(){return a},WN:function(){return o},bF:function(){return O},pV:function(){return c},Wf:function(){return i},HC:function(){return p},EV:function(){return l}});var r=n(637);var o=function(t){return r.Z.post("/api/font-features",t)},i=function(t){var e=t.projectId,n=t.styles;return r.Z.put("/api/text-styles/project/".concat(e),{styles:n})},c=function(t){var e=t.projectId,n=t.styles;return r.Z.put("/api/link-styles/project/".concat(e),{styles:n})},a=function(t){return r.Z.get("/api/projects/".concat(t))},u=function(t,e){return r.Z.post("/api/readymag/authorize",{pass:t,num_id:e})},s=n(308);function f(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}var p=function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){f(i,r,o,c,a,"next",t)}function a(t){f(i,r,o,c,a,"throw",t)}c(void 0)}))}}(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("widgetId",n),r.append("upload",e.slice(0,Math.min(e.size,s.ZP.SHOTS_UPLOAD_SIZE_LIMT))),t.next=5,fetch("/api/shots/upload/video",{method:"post",body:r}).then((function(t){return t.json()}));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),l=function(t,e){return r.Z.post("/api/shots/convert/fromurl",{videoUrl:t,widgetId:e})};function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var h=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r={};return Object.keys(e).forEach((function(o){var i=[].concat(m(n),[o]).join("."),c=e[o];["string","number","boolean"].includes(v(c))?r[i]=e[o]:"object"===v(c)&&null!==c&&(r=d(d({},r),t(c,[].concat(m(n),[o]))))})),r},O=function(t,e){if(!(window.RM.common.isDownloadedSource&&!window.RM.common.homepageRewrite)){var n=d(d({},h(e)),{},{userAgent:window.navigator.userAgent,"event.timingMs":Date.now()-window.performance.timing.navigationStart,"event.timestamp":Date.now()});r.Z.post("/api/proxy/honeycomb",{event:n,dataset:t})}}}}]);