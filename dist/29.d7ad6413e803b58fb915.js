(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30],{"3Qzt":function(e,t,n){"use strict";t.a={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},"3TY3":function(e,t,n){"use strict";n.r(t);var a=n("vOnD"),r=n("q1tI"),i=n.n(r),o=n("5BzK"),s=n("gvd1"),c=n.n(s),u=n("yvMh"),l=n.n(u),d=n("gzi7"),f=n("zn5y"),g=n.n(f),h=n("8AXF"),m=n("xG9w");function v(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=window.requestIdleCallback||function(e){Object(m.defer)(e)},y=function(){function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imageInstances=[],this.imagesLoaded=0,this.isLoading=!1,this.areAllImagesLoaded=!1,this.seekCallbackData=void 0,Object(m.range)(1,n+1).map((function(e){return function(e,t){return"".concat(e,"/").concat(t.toString().padStart(6,"0"),".jpg")}(t,e)})).forEach((function(e){a.imageInstances.push({image:new Image,isLoaded:!1,url:e})}))}var t,n,a,r,i;return t=e,(n=[{key:"preloadFirstImage",value:function(){this.loadImage(0)}},{key:"loadImage",value:function(e){var t=this,n=this.imageInstances[e];n&&!n.isLoaded&&(n.image.onload=function(){n.isLoaded=!0,t.imagesLoaded++,t.imageInstances.length===t.imagesLoaded&&(t.areAllImagesLoaded=!0,t.isLoading=!1,console.log("All ".concat(t.imageInstances.length," images loaded."))),t.seekCallbackData&&t.seekCallbackData.index===e&&(t.seekCallbackData.callback(n.image),t.seekCallbackData=void 0)},p((function(){n.image.src=n.url})))}},{key:"startLoad",value:function(){var e=this;if(!this.isLoading){this.areAllImagesLoaded=!1,this.isLoading=!0;for(var t=[0],n=Math.ceil(Math.log(this.imageInstances.length)/Math.log(2)),a=1;a<=n;a++)for(var r=Math.pow(2,a),i=Math.ceil(this.imageInstances.length/r),o=1;o<=r;o++){var s=o*i;t.push(s)}(t=Object(m.uniq)(t).filter((function(t){return t<e.imageInstances.length}))).forEach((function(t){return e.loadImage(t)}))}}},{key:"stopLoad",value:function(){this.isLoading&&(this.imageInstances.forEach((function(e){e.isLoaded||p((function(){e.image.onload=null,e.image.src=""}))})),this.isLoading=!1)}},{key:"seekImageByIndex",value:(r=regeneratorRuntime.mark((function e(t){var n,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.seekCallbackData&&(this.seekCallbackData.callback(void 0),this.seekCallbackData=void 0),n=t,e.abrupt("return",new Promise((function(e){t>a.imageInstances.length-1&&(n=a.imageInstances.length-1),t<0&&(n=0);var r=a.imageInstances[n];if(r.isLoaded)return e(r.image);a.seekCallbackData={index:n,callback:e}})));case 3:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,a){var i=r.apply(e,t);function o(e){v(i,n,a,o,s,"next",e)}function s(e){v(i,n,a,o,s,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"getImageIndexByTimelinePercent",value:function(e){return Math.floor(this.imageInstances.length*e)}},{key:"getNumberOfImages",value:function(){return this.imageInstances.length}}])&&b(t.prototype,n),a&&b(t,a),e}(),w=n("fEUr"),I=n("LDvm"),O=n("f3SV"),S=n("QuYs"),k=n("3Qzt");function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var x,C=Math.floor(25);!function(e){e[e.Precise=0]="Precise",e[e.Lazy=1]="Lazy"}(x||(x={}));var P=window.requestAnimationFrame||function(e){Object(m.defer)(e)},L=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.easingType=x.Lazy,this.lastEasingCallTime=0,this.lastTargetIndex=0,this.canvas=t,this.imageLoader=n,this.easingType=a}var t,n,a;return t=e,(n=[{key:"drawImageByIndex",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?this.startEasingSequence(e):this.imageLoader.seekImageByIndex(e).then((function(n){return t.drawImage(n,e)}))}},{key:"drawImageByTimelinePercent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.imageLoader.getImageIndexByTimelinePercent(e);return this.drawImageByIndex(n,t)}},{key:"drawImage",value:function(e,t){var n=this;return new Promise((function(a,r){if(!e||t===n.lastDrawnFrameIndex)return a();var i,o,s=n.canvas.getContext("2d");if(!s)return r(new Error("Cannot find context to paint on"));var c=0,u=0,l=e.height/e.width;n.canvas.height/n.canvas.width>l?(i=n.canvas.height/l,o=n.canvas.height,c=(n.canvas.width-i)/2):(i=n.canvas.width,o=n.canvas.width*l,u=(n.canvas.height-o)/2),P((function(){s.drawImage(e,0,0,e.width,e.height,c,u,i,o),n.lastDrawnFrameIndex=t,a()}))}))}},{key:"startEasingSequence",value:function(e){var t=this;clearInterval(this.easingSequenceId);var n=this.lastDrawnFrameIndex||0;return new Promise((function(a){var r=Date.now(),i=r-t.lastEasingCallTime,o=Math.abs(t.lastTargetIndex-e)/i,s=Math.round(o/i*t.imageLoader.getNumberOfImages()*2),c=Math.min(Math.round(.05*t.imageLoader.getNumberOfImages()),C,t.easingType===x.Precise?s:Math.ceil(400/i));t.lastEasingCallTime=r,t.lastTargetIndex=e;var u=e-n,l=e-Math.sign(u)*Math.min(c,Math.abs(e-n)),d=e-l,f=r,g=f+400;t.drawImageByIndex(l),t.easingSequenceId=setInterval((function(){var e=Date.now();if(e>g)return clearInterval(t.easingSequenceId),t.easingSequenceId=void 0,a();var n=(e-f)/400,r=k.a.easeOutCubic(n),i=Math.round(d*r)+l;t.drawImageByIndex(i)}),16)}))}}])&&j(t.prototype,n),a&&j(t,a),e}(),E=n("+FcJ");function D(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var _=window.devicePixelRatio||1,z={top:1,center:.5,bottom:0},A=[{},function(){}],Q=Object(a.default)(o.Cover).withConfig({displayName:"Shots___StyledCover"})(["background-repeat:no-repeat;label{position:absolute;cursor:default;z-index:1001;width:100%;height:100%;}"]),R=Object(a.default)(l.a).withConfig({displayName:"Shots___StyledFileInput"})(["position:absolute;z-index:1001;"]),H=Object(a.default)(o.Flex).withConfig({displayName:"Shots___StyledFlex"})(["transform:translate(-50%,-50%);"]),U=Object(a.default)("canvas").withConfig({displayName:"Shots___StyledCanvas"})({objectFit:"cover"}),q=function(e){var t=Object(r.useContext)(h.BackboneContext),n=t.model,a=n._id,o=n.w,s=n.h,u=n.basePath,l=n.numberOfImages,f=n.scrollSpeed,m=void 0===f?1:f,v=n.imageWidth,b=void 0===v?0:v,p=n.imageHeight,k=void 0===p?0:p,j=n.fixed_position,C=n.scrollStartPoint,P=void 0===C?w.c.bottom:C,B=n.playbackType,q=n.startPointOffset,W=n.scrollDelay,N=n.is_full_width,J=n.is_full_height,Y=n.useEasing,G=void 0!==Y&&Y,V=t.modelSave,X=Object(r.useContext)(E.a),K=X.model,Z=K.currentScrollOffset,$=K.hoverPercent,ee=K.pageScale,te=void 0===ee?1:ee,ne=K.viewport,ae=K.canDirectLinkBeUsed,re=K.pageContentTop,ie=void 0===re?0:re,oe=K.magContainerHeight,se=void 0===oe?0:oe,ce=K.widgetBoxTop,ue=void 0===ce?0:ce,le=K.isStarted,de=void 0!==le&&le,fe=(K.canBeUsed,K.isSelected,X.model),ge=F(e.useSharedState?e.useSharedState():A,2),he=ge[0],me=he.isUploading,ve=he.videoFile,be=he.url,pe=ge[1],ye="viewer"===e.mode,we=F(Object(r.useState)(!1),2),Ie=we[0],Oe=we[1],Se=Object(r.useRef)(null),ke=Object(r.useRef)(null),je=ke.current,xe=Object(r.useRef)(null),Ce=xe.current,Pe=Object(r.useRef)(null),Le=Object(d.useResizeEffect)(Pe);Le.width,Le.height;Object(r.useEffect)((function(){u&&l&&(ke.current=new y(u,ye?l:1),ke.current.preloadFirstImage(),xe.current=new L(Se.current,ke.current,B===w.b.hover?x.Lazy:x.Precise),xe.current.drawImageByIndex(0).then((function(){e.onFirstFrameLoaded&&e.onFirstFrameLoaded()})))}),[u]);var Ee=F(Object(r.useState)(null),2),De=Ee[0],Me=Ee[1];return Object(r.useEffect)((function(){if(De){V(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({basePath:De.basePath,imageWidth:De.imageWidth,imageHeight:De.imageHeight,numberOfImages:De.numberOfImages,totalSize:De.totalSize},function(e,t){return e===O.c.widget.defaults.w&&t===O.c.widget.defaults.h}(o,s)?function(e,t){if(N||J)return{w:o,h:s};var n=e<=480?e:Math.round(480*e/e);return{w:n,h:t*n/e}}(De.imageWidth||o,De.imageHeight||o):{}))}}),[De]),Object(r.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be&&be.length?Object(I.X)(be,a):Object(I.W)(ve,a);case 3:(t=e.sent)&&t.basePath&&t.imageHeight&&t.imageWidth&&t.numberOfImages&&t.totalSize&&!fe.isDestroyed&&!Ie?(Me({basePath:t.basePath,imageWidth:t.imageWidth,imageHeight:t.imageHeight,numberOfImages:t.numberOfImages,totalSize:t.totalSize}),pe({isUploading:!1}),S.d.sendEvent(S.b.ShotsWidgetActions,{eventLabel:"Video ".concat(be&&be.length?"link pasted":"file uploaded")})):pe({isUploading:!1,uploadError:"Error uploading video"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),pe({isUploading:!1,uploadError:"Error uploading video"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){D(i,a,r,o,s,"next",e)}function s(e){D(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();me&&!fe.isDestroyed&&e()}),[me]),Object(r.useEffect)((function(){ye&&ke.current&&(de?ke.current.startLoad():ke.current.stopLoad())}),[de]),Object(r.useEffect)((function(){var e;if(je)if(ye)if(void 0!==Z)e=function(e){var t=e.currentScrollOffset,n=e.pageContentTop,a=e.pageScale,r=e.magContainerHeight,i=e.widgetBoxTop,o=e.scrollStartPoint,s=e.startPointOffset,c=e.scrollSpeed,u=e.scrollDelay,l=n/a,d=r/a,f=t/a;if(e.isFixed)return Math.round((f-u)*c/10);var g=i+l,h=g-d,m=z[o]*(g-h)+h+s;return Math.round((f-m)*c/10)}({currentScrollOffset:Z,pageContentTop:ie,pageScale:te,magContainerHeight:se,widgetBoxTop:ue,scrollStartPoint:P,startPointOffset:q,scrollSpeed:m,scrollDelay:W,isFixed:!!j}),null==Ce||Ce.drawImageByIndex(e,G);else{if(void 0===$)return;null==Ce||Ce.drawImageByTimelinePercent($,G)}else null==Ce||Ce.drawImageByIndex(0)}),[Z,ne,o,s,$]),Object(r.useEffect)((function(){return pe({canDirectLinkBeUsed:ae}),e.onFirstRender&&e.onFirstRender(),function(){Oe(!0)}}),[]),i.a.createElement(Q,{alignItems:"center",justifyContent:"center",bg:"constructor"!==e.mode||u?"transparent":"lightGray",backgroundImage:u?"":"constructor"===e.mode?"url(".concat(g.a,")"):"",width:"100%",height:"100%",backgroundPosition:"center",ref:Pe},"constructor"===e.mode&&i.a.createElement(R,{id:"rm-shots-widget-file-upload-".concat(a),onClick:function(e){e.preventDefault()},readFileData:!1,onChange:function(e){e.size<=O.c.UPLOAD_SHOTS_SIZE_LIMIT&&pe({videoFile:e,isUploading:!0})},dropFile:!me,accept:"video/*,.mkv"}),me&&i.a.createElement(H,{position:"absolute",top:"50%",left:"50%",cursor:"default"},i.a.createElement(c.a,{bgColor:"gray",size:"big"})),i.a.createElement(U,{id:a,width:"constructor"===e.mode||te>1?b:Math.min(b,Math.floor(o*_)),height:"constructor"===e.mode||te>1?k:Math.min(k,Math.floor(s*_)),ref:Se,style:{userSelect:"none",width:"100%",height:"100%"}},"Your browser does not support Canvas element")," ")};n.d(t,"Shots",(function(){return q}))},zn5y:function(e,t,n){e.exports=n.p+"bfaa25fb1a2c3440827644a5a60aa268.svg"}}]);