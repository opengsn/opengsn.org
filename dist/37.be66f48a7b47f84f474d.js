(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[37,36],{999:function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.permissions={}}var e,i,s;return e=t,(i=[{key:"init",value:function(t){this.permissions=t}},{key:"getPermissions",value:function(){return this.permissions||{}}}])&&n(e.prototype,i),s&&n(e,s),t}();e.Z=new i},1011:function(t,e,n){"use strict";n.r(e);var i=n(313),s=n(1009),o=n(1012),a=n.n(o),r=n(341),c=n(308),d=n(999),u=s.default.extend({initialize:function(){s.default.prototype.initialize.apply(this,arguments),this.is_above&&this.mag.on("destroyed",this.destroy)},render:function(){var t=this,e=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_e_commerce&&(e=!0);else{var n=d.Z.getPermissions();n&&n.can_use_e_commerce&&(e=!0)}if(e){if(s.default.prototype.render.apply(this,arguments),!RM.screenshot){this.mag.eCommerceManager.events.on("ecommerce:cartdata:changed",this.renderTotalItems);var i=this["font-family"];if(i&&!c.ZP.systemFontsList.includes(i.toLowerCase())){var o=new(a())(this["font-family"]);o.load().then((function(){t.renderTotalItems(t.mag.eCommerceManager.getCartData())})).catch((function(){t.renderTotalItems(t.mag.eCommerceManager.getCartData())}))}else this.renderTotalItems(this.mag.eCommerceManager.getCartData())}return this}},renderTotalItems:function(t){if(t&&(t.skus||t.prices)){var e=0;for(var n in t.skus)t.skus.hasOwnProperty(n)&&(e+=t.skus[n].cart_count);for(var i in t.prices)t.prices.hasOwnProperty(i)&&(e+=t.prices[i].cart_count);var s=e?"".concat(this.text||""," ").concat(e):this.text||"",o=this.recalcTextInputSize(s);this.renderButtonTextWithSizes(s,o)}},onButtonClick:function(){this.mag.eCommerceManager.changeCartSidebarVisibility()},recalcTextInputSize:function(t){var e,n,s,o,a=this["font-size"],c=this["letter-spacing"],d=this["font-family"],u=this["font-style"],h=this["font-weight"];return this.$textInputSizeAdjuster||(this.$textInputSizeAdjuster=(0,i.Z)("<div/>"),this.$textInputSizeAdjuster.css({position:"absolute",left:"-9999px",top:"-9999px","white-space":"pre",width:"auto"}),(0,i.Z)(document.getElementById("tmp")).append(this.$textInputSizeAdjuster)),this.$textInputSizeAdjuster.addClass("for-text-size-calc").addClass(r.default.generateUUID()),this.$textInputSizeAdjuster.text(t.trim()),this.$textInputSizeAdjuster.css({"font-family":d,"font-style":u,"font-weight":h,"font-size":a+"px","letter-spacing":c+"px"}),e=this.$textInputSizeAdjuster.width(),n=this.$textInputSizeAdjuster.height(),this.$textInputSizeAdjuster.css("letter-spacing",0).text("M"),s=this.$textInputSizeAdjuster.width(),s=2*Math.ceil(s/2),o=this.$textInputSizeAdjuster.height(),0===t.length&&(e=s,n=o),e=2*Math.ceil(e/2),{text_w:e+=s,text_h:n=2*Math.ceil(n/2)}},destroy:function(){return this.mag.eCommerceManager.events.off("ecommerce:cartdata:changed",this.renderTotalItems),this.$textInputSizeAdjuster&&(this.$textInputSizeAdjuster.remove(),this.$textInputSizeAdjuster=null),s.default.prototype.destroy.apply(this,arguments)}});e.default=u},1012:function(t){!function(){function e(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e)}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+e+";"}function s(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e&&(t.g=e,!0)}function o(t,n){function i(){var t=o;s(t)&&t.a.parentNode&&n(t.g)}var o=t;e(t.b,i),e(t.c,i),s(t)}function a(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var r=null,c=null,d=null,u=null;function h(){return null===u&&(u=!!document.fonts),u}function l(){if(null===d){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif"}catch(t){}d=""!==t.style.font}return d}function f(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ")}a.prototype.load=function(t,e){var s=this,a=t||"BESbswy",d=0,u=e||3e3,l=(new Date).getTime();return new Promise((function(t,e){if(h()&&!function(){if(null===c)if(h()&&/Apple/.test(window.navigator.vendor)){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);c=!!t&&603>parseInt(t[1],10)}else c=!1;return c}()){var p=new Promise((function(t,e){!function n(){(new Date).getTime()-l>=u?e(Error(u+"ms timeout exceeded")):document.fonts.load(f(s,'"'+s.family+'"'),a).then((function(e){1<=e.length?t():setTimeout(n,25)}),e)}()})),m=new Promise((function(t,e){d=setTimeout((function(){e(Error(u+"ms timeout exceeded"))}),u)}));Promise.race([m,p]).then((function(){clearTimeout(d),t(s)}),e)}else!function(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e),t()})):document.attachEvent("onreadystatechange",(function e(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",e),t())}))}((function(){function c(){var e;(e=-1!=v&&-1!=g||-1!=v&&-1!=w||-1!=g&&-1!=w)&&((e=v!=g&&v!=w&&g!=w)||(null===r&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),r=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=r&&(v==y&&g==y&&w==y||v==x&&g==x&&w==x||v==b&&g==b&&w==b)),e=!e),e&&(C.parentNode&&C.parentNode.removeChild(C),clearTimeout(d),t(s))}var h=new n(a),p=new n(a),m=new n(a),v=-1,g=-1,w=-1,y=-1,x=-1,b=-1,C=document.createElement("div");C.dir="ltr",i(h,f(s,"sans-serif")),i(p,f(s,"serif")),i(m,f(s,"monospace")),C.appendChild(h.a),C.appendChild(p.a),C.appendChild(m.a),document.body.appendChild(C),y=h.a.offsetWidth,x=p.a.offsetWidth,b=m.a.offsetWidth,function t(){if((new Date).getTime()-l>=u)C.parentNode&&C.parentNode.removeChild(C),e(Error(u+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(v=h.a.offsetWidth,g=p.a.offsetWidth,w=m.a.offsetWidth,c()),d=setTimeout(t,50)}}(),o(h,(function(t){v=t,c()})),i(h,f(s,'"'+s.family+'",sans-serif')),o(p,(function(t){g=t,c()})),i(p,f(s,'"'+s.family+'",serif')),o(m,(function(t){w=t,c()})),i(m,f(s,'"'+s.family+'",monospace'))}))}))},t.exports=a}()}}]);