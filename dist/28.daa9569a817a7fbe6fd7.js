(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[28,11],{1114:function(e,t,n){"use strict";n.r(t),n.d(t,{Shots:function(){return Q}});var a=n(646),r=n(352),i=n.n(r),o=n(698),s=n(797),u=n.n(s),c=n(814),l=n.n(c),d=n(821),f=n.p+"21d4a47d8bae157b66dc5496e76e1464.svg",g=n(660),h=n(323);function m(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(a,r)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=window.requestIdleCallback||function(e){(0,h.defer)(e)},b=function(){function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageInstances=[],this.imagesLoaded=0,this.isLoading=!1,this.areAllImagesLoaded=!1,this.seekCallbackData=void 0,(0,h.range)(1,n+1).map((function(e){return function(e,t){return"".concat(e,"/").concat(t.toString().padStart(6,"0"),".jpg")}(t,e)})).forEach((function(e){a.imageInstances.push({image:new Image,isLoaded:!1,url:e})}))}var t,n,a,r,i;return t=e,(n=[{key:"preloadFirstImage",value:function(){this.loadImage(0)}},{key:"loadImage",value:function(e){var t=this,n=this.imageInstances[e];n&&!n.isLoaded&&(n.image.onload=function(){n.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,console.log("All ".concat(t.imageInstances.length," images loaded."))),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(n.image),t.seekCallbackData=void 0)},p((function(){n.image.src=n.url})))}},{key:"startLoad",value:function(){var e=this;if(!this.isLoading){this.areAllImagesLoaded=!1,this.isLoading=!0;for(var t=[0],n=Math.ceil(Math.log(this.imageInstances.length)/Math.log(2)),a=1;a<=n;a++)for(var r=Math.pow(2,a),i=Math.ceil(this.imageInstances.length/r),o=1;o<=r;o++){var s=o*i;t.push(s)}(t=(0,h.uniq)(t).filter((function(t){return t<e.imageInstances.length}))).forEach((function(t){return e.loadImage(t)}))}}},{key:"stopLoad",value:function(){this.isLoading&&(this.imageInstances.forEach((function(e){e.isLoaded||p((function(){e.image.onload=null,e.image.src=""}))})),this.isLoading=!1)}},{key:"seekImageByIndex",value:(r=regeneratorRuntime.mark((function e(t){var n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.seekCallbackData&&(this.seekCallbackData.callback(void 0),this.seekCallbackData=void 0),n=t,e.abrupt("return",new Promise((function(e){t>a.imageInstances.length-1&&(n=a.imageInstances.length-1),t<0&&(n=0);var r=a.imageInstances[n];if(r.isLoaded)return e(r.image);a.seekCallbackData={index:n,callback:e}})));case 3:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function o(e){m(i,n,a,o,s,"next",e)}function s(e){m(i,n,a,o,s,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"getImageIndexByTimelinePercent",value:function(e){return Math.floor(this.imageInstances.length*e)}},{key:"getNumberOfImages",value:function(){return this.imageInstances.length}}])&&v(t.prototype,n),a&&v(t,a),e}(),y=n(986),I=n(636),w=n(308),S=n(671),k=n(856);function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var C,P=400,x=Math.floor(25);!function(e){e[e.Precise=0]="Precise",e[e.Lazy=1]="Lazy"}(C||(C={}));var L=window.requestAnimationFrame||function(e){(0,h.defer)(e)},E=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.easingType=C.Lazy,this.lastEasingCallTime=0,this.lastTargetIndex=0,this.canvas=t,this.imageLoader=n,this.easingType=a}var t,n,a;return t=e,(n=[{key:"drawImageByIndex",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?this.startEasingSequence(e):this.imageLoader.seekImageByIndex(e).then((function(n){return t.drawImage(n,e)}))}},{key:"drawImageByTimelinePercent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.imageLoader.getImageIndexByTimelinePercent(e);return this.drawImageByIndex(n,t)}},{key:"drawImage",value:function(e,t){var n=this;return new Promise((function(a,r){if(!e||t===n.lastDrawnFrameIndex)return a();var i,o,s=n.canvas.getContext("2d");if(!s)return r(new Error("Cannot find context to paint on"));var u=0,c=0,l=e.height/e.width;n.canvas.height/n.canvas.width>l?(i=n.canvas.height/l,o=n.canvas.height,u=(n.canvas.width-i)/2):(i=n.canvas.width,o=n.canvas.width*l,c=(n.canvas.height-o)/2),L((function(){s.drawImage(e,0,0,e.width,e.height,u,c,i,o),n.lastDrawnFrameIndex=t,a()}))}))}},{key:"startEasingSequence",value:function(e){var t=this;clearInterval(this.easingSequenceId);var n=this.lastDrawnFrameIndex||0;return new Promise((function(a){var r=Date.now(),i=r-t.lastEasingCallTime,o=Math.abs(t.lastTargetIndex-e)/i,s=Math.round(o/i*t.imageLoader.getNumberOfImages()*2),u=Math.min(Math.round(.05*t.imageLoader.getNumberOfImages()),x,t.easingType===C.Precise?s:Math.ceil(P/i));t.lastEasingCallTime=r,t.lastTargetIndex=e;var c=e-n,l=e-Math.sign(c)*Math.min(u,Math.abs(e-n)),d=e-l,f=r,g=f+P;t.drawImageByIndex(l),t.easingSequenceId=setInterval((function(){var e=Date.now();if(e>g)return clearInterval(t.easingSequenceId),t.easingSequenceId=void 0,a();var n=(e-f)/P,r=k.Z.easeOutCubic(n),i=Math.round(d*r)+l;t.drawImageByIndex(i)}),16)}))}}])&&O(t.prototype,n),a&&O(t,a),e}(),D=n(1045);function M(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(a,r)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var B=window.devicePixelRatio||1,z={top:1,center:.5,bottom:0},A=[{},function(){}],R=(0,a.default)(o.Cover).withConfig({displayName:"Shots___StyledCover",componentId:"ehjc2s-0"})(["background-repeat:no-repeat;label{position:absolute;cursor:default;z-index:1001;width:100%;height:100%;}"]),H=(0,a.default)(l()).withConfig({displayName:"Shots___StyledFileInput",componentId:"ehjc2s-1"})(["position:absolute;z-index:1001;"]),U=(0,a.default)(o.Flex).withConfig({displayName:"Shots___StyledFlex",componentId:"ehjc2s-2"})(["transform:translate(-50%,-50%);"]),q=(0,a.default)("canvas").withConfig({displayName:"Shots___StyledCanvas",componentId:"ehjc2s-3"})({objectFit:"cover"}),Q=function(e){var t=(0,r.useContext)(g.BackboneContext),n=t.model,a=n._id,o=n.w,s=n.h,c=n.basePath,l=n.numberOfImages,h=n.scrollSpeed,m=void 0===h?1:h,v=n.imageWidth,p=void 0===v?0:v,k=n.imageHeight,O=void 0===k?0:k,P=n.fixed_position,x=n.scrollStartPoint,L=void 0===x?y.FU.bottom:x,_=n.playbackType,Q=n.startPointOffset,W=n.scrollDelay,N=n.is_full_width,Z=n.is_full_height,V=n.useEasing,G=void 0!==V&&V,Y=t.modelSave,$=(0,r.useContext)(D.n),J=$.model,K=J.currentScrollOffset,X=J.hoverPercent,ee=J.pageScale,te=void 0===ee?1:ee,ne=J.viewport,ae=J.canDirectLinkBeUsed,re=J.pageContentTop,ie=void 0===re?0:re,oe=J.magContainerHeight,se=void 0===oe?0:oe,ue=J.widgetBoxTop,ce=void 0===ue?0:ue,le=J.isStarted,de=void 0!==le&&le,fe=(J.canBeUsed,J.isSelected,$.model),ge=F(e.useSharedState?e.useSharedState():A,2),he=ge[0],me=he.isUploading,ve=he.videoFile,pe=he.url,be=ge[1],ye="viewer"===e.mode,Ie=F((0,r.useState)(!1),2),we=Ie[0],Se=Ie[1],ke=(0,r.useRef)(null),Oe=(0,r.useRef)(null),Ce=Oe.current,Pe=(0,r.useRef)(null),xe=Pe.current,Le=(0,r.useRef)(null),Ee=(0,d.useResizeEffect)(Le);Ee.width,Ee.height;(0,r.useEffect)((function(){c&&l&&(Oe.current=new b(c,ye?l:1),Oe.current.preloadFirstImage(),Pe.current=new E(ke.current,Oe.current,_===y.i2.hover?C.Lazy:C.Precise),Pe.current.drawImageByIndex(0).then((function(){e.onFirstFrameLoaded&&e.onFirstFrameLoaded()})))}),[c]);var De=F((0,r.useState)(null),2),Me=De[0],je=De[1];return(0,r.useEffect)((function(){if(Me){Y(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({basePath:Me.basePath,imageWidth:Me.imageWidth,imageHeight:Me.imageHeight,numberOfImages:Me.numberOfImages,totalSize:Me.totalSize},function(e,t){return e===w.ZP.widget.defaults.w&&t===w.ZP.widget.defaults.h}(o,s)?function(e,t){if(N||Z)return{w:o,h:s};var n=e<=480?e:Math.round(480*e/e);return{w:n,h:t*n/e}}(Me.imageWidth||o,Me.imageHeight||o):{}))}}),[Me]),(0,r.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe&&pe.length?(0,I.EV)(pe,a):(0,I.HC)(ve,a);case 3:(t=e.sent)&&t.basePath&&t.imageHeight&&t.imageWidth&&t.numberOfImages&&t.totalSize&&!fe.isDestroyed&&!we?(je({basePath:t.basePath,imageWidth:t.imageWidth,imageHeight:t.imageHeight,numberOfImages:t.numberOfImages,totalSize:t.totalSize}),be({isUploading:!1}),S.ZP.sendEvent(S.RM.ShotsWidgetActions,{eventLabel:"Video ".concat(pe&&pe.length?"link pasted":"file uploaded")})):be({isUploading:!1,uploadError:"Error uploading video"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),be({isUploading:!1,uploadError:"Error uploading video"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){M(i,a,r,o,s,"next",e)}function s(e){M(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();me&&!fe.isDestroyed&&e()}),[me]),(0,r.useEffect)((function(){ye&&Oe.current&&(de?Oe.current.startLoad():Oe.current.stopLoad())}),[de]),(0,r.useEffect)((function(){var e;if(Ce)if(ye)if(void 0!==K)e=function(e){var t=e.currentScrollOffset,n=e.pageContentTop,a=e.pageScale,r=e.magContainerHeight,i=e.widgetBoxTop,o=e.scrollStartPoint,s=e.startPointOffset,u=e.scrollSpeed,c=e.scrollDelay,l=n/a,d=r/a,f=t/a;if(e.isFixed)return Math.round((f-c)*u/10);var g=i+l,h=g-d,m=z[o]*(g-h)+h+s;return Math.round((f-m)*u/10)}({currentScrollOffset:K,pageContentTop:ie,pageScale:te,magContainerHeight:se,widgetBoxTop:ce,scrollStartPoint:L,startPointOffset:Q,scrollSpeed:m,scrollDelay:W,isFixed:!!P}),null==xe||xe.drawImageByIndex(e,G);else{if(void 0===X)return;null==xe||xe.drawImageByTimelinePercent(X,G)}else null==xe||xe.drawImageByIndex(0)}),[K,ne,o,s,X]),(0,r.useEffect)((function(){return be({canDirectLinkBeUsed:ae}),e.onFirstRender&&e.onFirstRender(),function(){Se(!0)}}),[]),i().createElement(R,{alignItems:"center",justifyContent:"center",bg:"constructor"!==e.mode||c?"transparent":"lightGray",backgroundImage:c?"":"constructor"===e.mode?"url(".concat(f,")"):"",width:"100%",height:"100%",backgroundPosition:"center",ref:Le},"constructor"===e.mode&&i().createElement(H,{id:"rm-shots-widget-file-upload-".concat(a),onClick:function(e){e.preventDefault()},readFileData:!1,onChange:function(e){e.size<=w.ZP.UPLOAD_SHOTS_SIZE_LIMIT&&be({videoFile:e,isUploading:!0})},dropFile:!me,accept:"video/*,.mkv"}),me&&i().createElement(U,{position:"absolute",top:"50%",left:"50%",cursor:"default"},i().createElement(u(),{bgColor:"gray",size:"big"})),i().createElement(q,{id:a,width:"constructor"===e.mode||te>1?p:Math.min(p,Math.floor(o*B)),height:"constructor"===e.mode||te>1?O:Math.min(O,Math.floor(s*B)),ref:ke,style:{userSelect:"none",width:"100%",height:"100%"}},"Your browser does not support Canvas element")," ")}},856:function(e,t){"use strict";t.Z={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}}}]);