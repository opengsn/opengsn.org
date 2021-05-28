(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[40],{1016:function(t,e,i){"use strict";i.d(e,{Z:function(){return _}});var n,o=i(313),a=i(337),s=i.n(a),r=i(322),l=i(341),h=i(350);var c,u,p,d,f,m=(c={},u="template-common-form-button",p=(0,h.f)(n||(d=['\n\t<div class="button">\n\t\t<div class="caption"></div>\n\t\t<svg class="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M17 19.8c-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6S18.4 19.8 17 19.8zM19 0.4h-4L15 17.4h4L19 0.4z"/></svg>\n\t\t<div class="pending"></div>\n\t\t<svg class="show-if-empty-submitted-text" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M31.4 3C30.6 2.3 29.4 2.3 28.6 3l0 0L13.1 18.6l-7.8-7.8 0 0c-0.8-0.7-2-0.7-2.7 0 -0.8 0.8-0.8 2 0 2.7l0 0L13.1 24.1l0.4-0.4h0L31.4 5.8l0 0C32.1 5 32.1 3.8 31.4 3z"/></svg>\n\t</div>\n'],f||(f=d.slice(0)),n=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(f)}})))),u in c?Object.defineProperty(c,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[u]=p,c),g=i(324),b=i(308),v=i(309),y=i(999);function w(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var _=s().View.extend({MIN_FIELD_WIDTH:9,MIN_FIELD_HEIGHT:5,CAPTCHA_WIDTH:304,CAPTCHA_HEIGHT:78,CAPTCHA_INVISIBLE:!0,LINE_HEIGHT_FACTOR:1.2,INVALID_COLOR:"ff4828",INVALID_BORDER_WIDTH:2,DROPDOWN_TRIANGLE:{SVG:'<svg class="form-dropdown-triangle" width="9" height="6" preserveAspectRatio="none" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"><path d="M3.763 5.196L.536 1.676A1 1 0 0 1 1.273 0h6.454a1 1 0 0 1 .737 1.676l-3.227 3.52a1 1 0 0 1-1.474 0z" fill-rule="evenodd"/></svg>',OPACITY_MULTIPLIER:.4,W:9,H:6,FONT_SIZE:18},CHECKBOX_TICK:{SVG:'<svg width="19" height="14" preserveAspectRatio="none" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M6.657 10.9L17.263.292a1 1 0 1 1 1.415 1.414L7.364 13.021a.997.997 0 0 1-1.414 0L.293 7.364A1 1 0 1 1 1.707 5.95l4.95 4.95z" fill-rule="evenodd"/></svg>',W:19,H:14,FONT_SIZE:18},initialize:function(t){r.Z.bindAll(this),this.data=t.data,this.$container=t.$container,this.environment=t.environment,this.buttonTemplate=m["template-common-form-button"]},render:function(t){var e=this;t=t||{},this.rendered?t.force&&this.$el&&this.$el.empty():(this.setElement((0,o.Z)("<div>")),this.$el.addClass("form-wrapper").appendTo(this.$container),"constructor"!==this.environment&&this.$el.on(g.Z.isDesktop?"mouseenter":"touchstart",".button",this.onButtonHover).on(g.Z.isDesktop?"mouseleave":"touchend",".button",this.onButtonHoverOut),this.$el.on("change","select",this.onDropdownChange).on("mouseenter",".input-wrapper",this.onInputHover).on("mouseleave",".input-wrapper",this.onInputHoverOut),this.rendered=!0);var i,n,a=this.data,s=a.fields,r=(0,o.Z)('<div><form enctype="multipart/form-data" method="post" target="form_submit_iframe"></form></div>'),h=r.find("form"),c=RM.constructorRouter&&RM.constructorRouter.previewMode,u=!!RM.constructorRouter,p=!1;if(RM.screenshot)window.ServerData.userPermissions&&window.ServerData.userPermissions.can_use_forms_file_upload&&(p=!0);else{var d=y.Z.getPermissions();d&&d.can_use_forms_file_upload&&(p=!0),d&&!d.can_use_forms&&(0,v._)("constructor.canUseFormPermission")&&!1}for(var f=0;f<s.length;f++){var m=s[f];if(("file"!==m.tp||p||u)&&("captcha"!==m.tp||(0,v._)("viewer.formsCaptcha")||u)){i="vertical"===a.layout&&"text"===m.tp,(n=(0,o.Z)(i?"<textarea>":"<input>")).addClass("js-input"),n.attr("type","text").attr("autocapitalize","name"===m.tp?"on":"off").attr("autocomplete","off").attr("autocorrect","off").attr("name",m.caption).attr("placeholder",m.caption+(m.optional&&"viewer"!==this.environment?" (optional)":"")).attr("spellcheck",!1).attr("data-sort",m.sort),"email"===m.tp&&n.attr("inputmode","email"),"phone"===m.tp&&n.attr("inputmode","tel"),"number"===m.tp&&n.attr("inputmode","numeric"),"checkbox"===m.tp&&n.attr("type","checkbox"),"dropdown"===m.tp&&(n.attr({tabindex:-1}),n.prop({readonly:!0}),n.addClass("fake-dropdown"));var b=(0,o.Z)('<div class="input-wrapper js-input-wrapper"/>');if(b.append(n),b.append('<div class="overlay"></div>'),"viewer"!==this.environment&&i){var w=(0,o.Z)('<span class="input-line-control input-line-control-add js-add-line"></span>'),I=(0,o.Z)('<span class="input-line-control input-line-control-remove js-remove-line"></span>');b.append(w).append(I)}if("file"===m.tp){"viewer"===this.environment&&n.attr("type","file");var _="formfiles-".concat(this.data._id).concat("viewer"!==this.environment?"-constructor":"");n.attr("name","formfiles"),n.attr("id",_),n.attr("multiple",""),n.attr("accept",(window.ServerData.config.FORMS_ACCEPTED_MIMES||[]).join(",")),n.addClass("input-file");var C=m.caption+(m.optional&&"viewer"!==this.environment?" (optional)":"")||"Add files";b.append((0,o.Z)("<label ".concat(p?'for="'.concat(_,'"'):"",' class="input-file-label').concat("viewer"!==this.environment?" no-hover":"",'" data-empty-text="').concat(C).concat(c&&!p?" (Pro plan only)":"",'"><span class="files-name">').concat(C).concat(c&&!p?" (Pro plan only)":"",'</span><span class="files-count"></span></label>'))),"viewer"===this.environment&&b.append((0,o.Z)('<span class="input-file-control input-file-control-add"></span><span class="input-file-control input-file-control-remove"></span>'))}if(b.appendTo(h),"dropdown"===m.tp&&m.items){var x=(0,o.Z)("<select>"),R=(0,o.Z)(this.DROPDOWN_TRIANGLE.SVG);x.attr("name",m.caption),(0,o.Z)('<option value="" selected></option>').prop("disabled",!m.optional).appendTo(x);for(var T=0;T<m.items.length;T++)(0,o.Z)("<option>").attr("value",m.items[T]).text(m.items[T]).appendTo(x);n.parent().append(R).append(x)}if("checkbox"===m.tp){var $=g.Z.isDesktop?"":"input-checkbox-wrapper-mobile";n.wrap('<label class="input-checkbox-wrapper '+$+'"></label>'),n.after('\t\t\t\t\t\t<div class="input-checkbox-inner"> \t\t\t\t\t\t\t<span class="label">'+n.attr("placeholder")+'</span> \t\t\t\t\t\t\t<span class="tick">'+this.CHECKBOX_TICK.SVG+"</span> \t\t\t\t\t\t</div>")}}}if((0,o.Z)(this.buttonTemplate()).appendTo(h),this.$el.html(r.html()).addClass("common-form"),this.data.captcha&&(0,v._)("viewer.formsCaptcha")&&!RM.common.isDownloadedSource){var S=l.default.generateUUID(),E=(0,o.Z)('<div id="'.concat(S,'" class="captcha-holder captcha-invisible"></div>'));this.$el.find("form").append(E),window.recaptchaReadyPromise&&window.recaptchaReadyPromise.then((function(){e.captcha=window.grecaptcha.render(S,{sitekey:window.ServerData.config.RECAPTCHA_SITEKEY,callback:e.captchaCallback.bind(e),theme:E.data("type")||"light",size:"invisible"})}))}this.$button=this.$(".button"),this.$buttonIcons=this.$(".button svg"),this.$inputs=this.$(".input-wrapper"),this.$triangles=this.$(".form-dropdown-triangle"),this.$fileInputLabel=this.$inputs.find(".input-file-label"),this.$fileInputLabelText=this.$inputs.find(".input-file-label > .files-name"),this.$fileInputLabelCount=this.$inputs.find(".input-file-label > .files-count"),"viewer"===this.environment&&(this.$fileInput=this.$inputs.find(".input-file"),this.$fileInput&&this.$fileInput.on("change",this.onFileChange),this.$fileAddCtrl=this.$(".input-file-control-add"),this.$fileRemoveCtrl=this.$(".input-file-control-remove"),this.$fileRemoveCtrl&&this.$fileRemoveCtrl.on("click",this.onFileRemove)),this.recalcStyles()},executeCaptcha:function(t){this.hasOwnProperty("captcha")?(this.captchaExecuteCallback=t,window.grecaptcha.reset(this.captcha),window.grecaptcha.execute()):t()},captchaCallback:function(t){var e=this;this.captchaResponse=t,setTimeout((function(){return e.captchaExecuteCallback(t)}),0)},validateFiles:function(t){if(!t||!t.length)return!0;var e=y.Z.getPermissions();if(t.length>e.forms_file_upload_count)return alert(b.ZP.MSG_UPLOAD_FORMS_FILES_ERROR),!1;var i,n=w(t);try{for(n.s();!(i=n.n()).done;){if(i.value.size>e.forms_file_upload_limit)return alert(b.ZP.MSG_UPLOAD_FORMS_SIZE_ERROR),!1}}catch(t){n.e(t)}finally{n.f()}return!0},onFileChange:function(){var t=this.$fileInput.get(0).files;if(!t||!t.length)return this.$fileRemoveCtrl&&this.$fileRemoveCtrl.hide(),this.$fileAddCtrl&&this.$fileAddCtrl.show(),this.$fileInputLabelText.text(this.$fileInputLabel.data("emptyText")),this.$fileInputLabelCount.text(""),void this.$fileInputLabel.removeClass("has-files");if(!this.validateFiles(t))return this.onFileRemove();this.$fileInputLabel.addClass("has-files"),this.$fileRemoveCtrl&&this.$fileRemoveCtrl.show(),this.$fileAddCtrl&&this.$fileAddCtrl.hide();var e=(t[0].name||"Filename").split("\\").join("/").split("/").pop();this.$fileInputLabelText.text(e),this.$fileInputLabelCount.text(t.length>1?" +".concat(t.length-1):"")},onFileRemove:function(){this.$fileInput.val(""),this.onFileChange()},onDropdownChange:function(t){(0,o.Z)(t.currentTarget).parent().find(".js-input").val((0,o.Z)(t.currentTarget).val())},setButtonHoverState:function(){this.forcePseudoState="hover",this.applyButtonStyle()},unsetButtonHoverState:function(){this.forcePseudoState=!1,this.applyButtonStyle()},recalcStyles:function(t){this.$el.attr("data-layout",this.data.layout).attr("data-style",this.data.style),this.$button.find(".caption").text(this.data["button-caption"]),this.resizeElements(t),this.applyInputsStyle(this.$inputs),this.applyButtonStyle(t)},getMinimalDimensions:function(){var t,e=this.data,i=e.fields,n=e["style-"+e.style+"-fields"],o=e["style-"+e.style+"-button-default"],a=this.getButtonValue.bind(this,o,n),s=i.find((function(t){return"captcha"===t.tp})),r=o.gutter+(i.length-(s&&this.CAPTCHA_INVISIBLE?1:0))*n.gutter,l=n["underline-width"]||0,h=Math.max(Math.ceil(a("font-size")*this.LINE_HEIGHT_FACTOR),this.MIN_FIELD_HEIGHT)+l,c=Math.max(Math.ceil(n["font-size"]*this.LINE_HEIGHT_FACTOR),this.MIN_FIELD_HEIGHT)+l,u=Math.max(h,c);return"vertical"===e.layout&&(t={width:Math.max(s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_WIDTH:0,this.MIN_FIELD_WIDTH),height:r+this.getTotalInputsHeight(i,u)+u}),"horizontal"===e.layout&&(t={width:r+i.length*this.MIN_FIELD_WIDTH+s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_WIDTH:this.MIN_FIELD_WIDTH,height:Math.max(u,s&&!this.CAPTCHA_INVISIBLE?this.CAPTCHA_HEIGHT:0)}),t},getTotalInputsHeight:function(t,e){return r.Z.reduce(t,function(t,i){return"text"===i.tp?t+this.getExtraTextareaDimensions(i.rows,e).height:"captcha"===i.tp?t+this.CAPTCHA_INVISIBLE?0:this.CAPTCHA_HEIGHT:t+e}.bind(this),0)},getRowsCount:function(t){return r.Z.reduce(t,(function(t,e){return t+("captcha"===e.tp?0:"text"===e.tp&&e.rows||1)}),0)},getInputDimensions:function(t){var e,i,n=this.data,o=n.fields,a=o.length+1,s=n["style-"+n.style+"-button-default"],r=n["style-"+n.style+"-fields"],l=o.find((function(t){return"captcha"===t.tp})),h=s.gutter+(o.length+(l?-1:0))*r.gutter,c=t&&void 0!==t.w?t.w:n.w,u=t&&void 0!==t.h?t.h:n.h,p="vertical"===n.layout,d=Math.floor(p?u:c),f=p?this.CAPTCHA_HEIGHT:this.CAPTCHA_WIDTH,m=d-h-(l&&!this.CAPTCHA_INVISIBLE?f+r.gutter:0);if(p){var g=this.getLineHeight(),b=m-this.getRowsCount(o)*g.input-g.input,v=Math.ceil(b/(a-(l?1:0)));e=g.input+v,i=this.getTotalInputsHeight(o,e)+e+h-d}else i=(e=Math.ceil(m/(a-(l?1:0))))*(o.length+1)+h-d;return{overflow:i,itemSize:e,itemOtherSize:p?c:u,gutter:r.gutter,lastGutter:s.gutter+r.gutter}},getLineHeight:function(){var t=this.data||{},e=this.LINE_HEIGHT_FACTOR,i=this.getButtonValue(t["style-"+t.style+"-button-default"],t["style-"+t.style+"-fields"],"font-size"),n=t["style-"+t.style+"-fields"]["font-size"];return{input:Math.floor(e<10?e*n:e),button:Math.floor(e<10?e*i:e)}},getExtraTextareaDimensions:function(t,e){t=t||1;var i=this.getLineHeight(),n=Math.round(e-i.input),o=this.data&&"underlined"==this.data.style,a=o?n:Math.ceil(n/2),s=o?0:Math.floor(n/2);return{height:t*i.input+a+s,top:a,bottom:s}},resizeElements:function(t){var e=this.data,i="vertical"===e.layout,n=e.fields,a=n.length,s=this.getInputDimensions(t),r=s.overflow,l=e["style-"+e.style+"-fields"],h=(l&&l["underline-width"]||0)+2;this.$inputs.add(this.$button).each(function(t,e){var l={},c=s.itemSize,u=t===a-1,p=t<a,d=n[t],f=(0,o.Z)(e),m=t>=a+1-r;if(m&&c--,l[i?"height":"width"]=c+"px",l[i?"width":"height"]=s.itemOtherSize+"px",p&&(l[i?"margin-bottom":"margin-right"]=u?s.lastGutter:s.gutter),l[i?"margin-right":"margin-bottom"]="",i&&d&&"captcha"===d.tp&&delete l.height,!i&&d&&"captcha"===d.tp&&delete l.width,i&&d&&"text"===d.tp){var g=d.rows||1,b=f.find(".js-input"),v=f.find(".js-add-line"),y=f.find(".js-remove-line"),w=this.getExtraTextareaDimensions(g,s.itemSize);l.height=w.height+(m?-1:0)+"px",b.css({top:w.top-h,bottom:w.bottom}),b.attr({rows:g}),v.css({top:w.top-h}),y.css({bottom:w.bottom+h}),f.toggleClass("is-multiline",g>1)}f.css(l)}.bind(this))},showInputPlaceholdersAsValues:function(t){this.$inputs.each((function(e,i){var n=(0,o.Z)(i).find(".js-input");"checkbox"===n.attr("type")?n.parent().find(".label").addClass("input-checkbox-preview"):n.val(t?n.attr("placeholder"):"")}))},applyInputsStyle:function(t,e){var i=this;e=e||{};var n,a=this.data,s=(a.fields,r.Z.clone(a["style-"+a.style+"-fields"]));"underlined"===a.style?(e.invalid&&(s["underline-color"]=this.INVALID_COLOR,s["underline-opacity"]=100,s["underline-width"]=s["underline-width"]||this.INVALID_BORDER_WIDTH),n={"background-color":"transparent","border-radius":0,"box-shadow":"inset 0 "+-s["underline-width"]+"px 0 0 "+this.getRgba(s["underline-color"],s["underline-opacity"])}):(e.invalid&&(s["border-color"]=this.INVALID_COLOR,s["border-opacity"]=100,s["border-width"]=s["border-width"]||this.INVALID_BORDER_WIDTH),n={"background-color":this.getRgba(s.color,s.opacity),"border-radius":s["border-radius"]+"px","box-shadow":"inset 0 0 0 "+s["border-width"]+"px "+this.getRgba(s["border-color"],s["border-opacity"])});var l={"font-family":s["font-family"],"font-style":s["font-style"],"font-weight":s["font-weight"],color:this.getRgba(s["text-color"],s["text-opacity"]),"font-size":s["font-size"],"letter-spacing":s["letter-spacing"],"margin-bottom":s["underline-width"]?s["underline-width"]+"px":0};t.filter(":not(.captcha-wrapper)").css(n).find(".js-input:not(.captcha-wrapper), select").css(l),t.find(".input-checkbox-inner .label").css(l),t.find(".input-file-label").css(l),t.find(".js-add-line, .js-remove-line").css({"font-size":s["font-size"]}),t.find(".form-dropdown-triangle").each(function(t,e){var i=(0,o.Z)(e),n=i.parent(),a=n.find(".js-input"),r=a.position().top,l=n.height()-a.height()-r,h=this.getSvgSizesFromFontSize(s["font-size"],"DROPDOWN_TRIANGLE");i.css({fill:this.getRgba(s["text-color"],s["text-opacity"]*this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER),top:r,bottom:l,width:h.w,height:h.h})}.bind(this)),t.find(".input-checkbox-inner svg").each((function(t,e){var n=(0,o.Z)(e),a=i.getSvgSizesFromFontSize(s["font-size"],"CHECKBOX_TICK");n.css({fill:i.getRgba(s["text-color"],s["text-opacity"]),width:a.w,height:a.h})}))},applyButtonStyle:function(){var t=this.data,e=(t.fields,t["style-"+t.style+"-fields"]),i=t["style-"+t.style+"-button-default"],n=t["style-"+t.style+"-button-hover"],o=this.getButtonValue.bind(this,i,e),a=this.getHoverValue.bind(this,n,i,e),s=o("letter-spacing");this.$button.css({"line-height":this.$button.height()+"px","background-color":this.getRgba(o("color"),o("opacity")),"border-radius":o("border-radius")+"px","box-shadow":"inset 0 0 0 "+o("border-width")+"px "+this.getRgba(o("border-color"),o("border-opacity")),"font-family":o("font-family"),"font-style":o("font-style"),"font-weight":o("font-weight"),color:this.getRgba(o("text-color"),o("text-opacity")),"font-size":o("font-size"),"letter-spacing":s,"text-align":o("text-align"),"text-indent":s/2||0}),this.$buttonIcons.css({fill:this.getRgba(o("text-color"),o("text-opacity"))}),this.$button.attr("data-default",this.$button.attr("style")),this.$button.css({"background-color":this.getRgba(a("color"),a("opacity")),"box-shadow":"inset 0 0 0 "+a("border-width")+"px "+this.getRgba(a("border-color"),a("border-opacity")),color:this.getRgba(a("text-color"),a("text-opacity"))}),this.$button.attr("data-hover",this.$button.attr("style")),this.forcePseudoState||this.$button.attr("style",this.$button.attr("data-default")),this.$button.outerHeight(),this.$button.toggleClass("with-transition",!!n.transition&&"viewer"==this.environment)},getRgba:function(t,e){var i=l.default.hex2rgb(t);return"rgba("+i[0]+", "+i[1]+","+i[2]+","+e/100+")"},getButtonValue:function(t,e,i){return"inherit"===t[i]?e[i]:t[i]},getHoverValue:function(t,e,i,n){return"inherit"===t[n]?this.getButtonValue(e,i,n):t[n]},onInputHover:function(t){var e=this.data,i=r.Z.clone(e["style-"+e.style+"-fields"]);(0,o.Z)(t.currentTarget).find(".form-dropdown-triangle").css("fill",this.getRgba(i["text-color"],i["text-opacity"]))},onInputHoverOut:function(t){var e=this.data,i=r.Z.clone(e["style-"+e.style+"-fields"]);(0,o.Z)(t.currentTarget).find(".form-dropdown-triangle").css("fill",this.getRgba(i["text-color"],i["text-opacity"]*this.DROPDOWN_TRIANGLE.OPACITY_MULTIPLIER))},onButtonHover:function(t){this.$button.hasClass("submitted")||this.$button.attr("style",this.$button.attr("data-hover"))},onButtonHoverOut:function(t){this.$button.attr("style",this.$button.attr("data-default"))},destroy:function(){this.$fileInput&&this.$fileInput.off("change",this.onFileChange),this.$el.off(g.Z.isDesktop?"mouseenter":"touchstart",".button",this.onButtonHover).off(g.Z.isDesktop?"mouseleave":"touchend",".button",this.onButtonHoverOut).off("change","select",this.onDropdownChange),this.$el&&this.$el.remove()},getSvgSizesFromFontSize:function(t,e){var i=this[e].H,n=this[e].W,o=this[e].FONT_SIZE;return{h:t*i/o,w:t*n/o}}})},1015:function(t,e,i){"use strict";i.r(e);var n=i(313),o=i(322),a=i(997),s=i(341),r=i(1016);i(309);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var u=a.Z.extend({DO_NOT_WAIT_FOR_PRELOAD:!0,NUMBER_TEST_REGEX:/^[0-9.,`']+$/,events:{"focus :input":"onFocus","blur :input":"onBlur"},render:function(){var t;(this.makeBox("widget-form"),this.rendered=!0,this.captcha&&!window.recaptchaReadyPromise)&&(window.recaptchaReadyPromise=new Promise((function(e){t=e})),window.onloadRecaptchaCallback=function(){t()},(0,n.Z)('<script src="https://www.google.com/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit" async><\/script>').appendTo("head"));return this.seamlessFontsShow(function(){this.$el.removeClass("fonts-pending")}.bind(this),function(){this.$el.addClass("fonts-pending")}.bind(this)),this.formWidget=new r.Z({data:this,environment:"viewer",$container:this.$el}),this.formWidget.render(),this.$button=this.$(".button"),this.$button.on("click",this.onButtonClick),this.$(".js-input").on("keydown",this.onInputKeyDown),this.$(".js-input").on("input",this.onInput),this.$("select").on("change",this.onInput),RM.screenshot?this.waitForUsedFontsLoad():this.widgetIsLoaded(),this},hasFontsToLoad:function(){return!0},destroy:function(){return this.formWidget&&this.formWidget.destroy(),this.formWidget=null,this.$(".button").off("click",this.onButtonClick),a.Z.prototype.destroy.apply(this,arguments)},waitForUsedFontsLoad:function(){this.hasFontsToLoad()?this.page.addFontsToLoad(this,this.widgetIsLoaded):this.widgetIsLoaded()},onFocus:function(){Backbone.trigger("form:focus",this._id)},onBlur:function(){Backbone.trigger("form:blur",this._id)},onButtonClick:function(){var t=this;this.$button.hasClass("submitted")||(this.setButtonState("pending"),this.formWidget.executeCaptcha((function(){t.sendForm()})))},sendForm:function(){this.validateForm()?("Text after submit"===this.button_caption_after_submit||!this.button_caption_after_submit||this.submit_mode&&"textAfterSubmit"!==this.submit_mode?this.$button.addClass("empty-submitted-text"):this.$button.find(".caption").text(this.button_caption_after_submit),RM.common.isDownloadedSource&&!RM.common.homepageRewrite?this.submitToIframe(function(t){t?(this.setButtonState("error"),RM.analytics&&RM.analytics.sendEvent("Form Submit Error",t)):this.setButtonState("submitted")}.bind(this)):this.submitForm(function(t){t?(this.setButtonState("error"),t.responseJSON&&"email_not_confirmed"===t.responseJSON.name&&o.Z.delay((function(){alert(t.responseJSON.message)}),100),RM.analytics&&RM.analytics.sendEvent("Form Submit Error",t)):this.setButtonState("submitted")}.bind(this)),this.link_after_submit&&this.submit_mode&&"textAfterSubmit"!==this.submit_mode&&this.applyLink()):this.setButtonState()},applyLink:function(){var t;"toUrlAfterSubmit"===this.submit_mode?this.openInNewTab(this.link_after_submit):(t=this.page.mag.getPageUri?"/"+this.page.mag.getPageUri(this.link_after_submit):"javascript:void(0)",this.mag.router.navigate(t,{trigger:!0}))},openInNewTab:function(t){Object.assign(document.createElement("a"),{target:"_blank",rel:"noopener",href:t}).click()},getDataBySort:function(t){return t=parseInt(t,10),o.Z.findWhere(this.fields,{sort:t})},validateForm:function(){var t=this.$(".js-input"),e=!0;return!(this.captcha&&!this.formWidget.captchaResponse)&&(o.Z.each(t,function(t){var i=(0,n.Z)(t),o=i.val().trim(),a=this.getDataBySort(i.attr("data-sort")),r=!0;if(o)switch(a.tp){case"name":case"text":case"dropdown":break;case"email":s.default.isValidEmail(o)||(r=!1);break;case"phone":/^[0123456789 +-]+$/.test(o)||(r=!1);break;case"number":this.NUMBER_TEST_REGEX.test(o)&&!isNaN(parseFloat(o))||(r=!1);break;case"checkbox":a.optional||i.prop("checked")||(r=!1);break;case"captcha":this.formWidget.captchaResponse||(r=!1)}else r=a.optional;r||(this.formWidget.applyInputsStyle(i.closest(".input-wrapper"),{invalid:!0}),e=!1)}.bind(this)),e)},onInput:function(t){var e=(0,n.Z)(t.currentTarget).parent().find(".js-input");this.formWidget.applyInputsStyle(e.closest(".input-wrapper")),this.setButtonState()},onInputKeyDown:function(t){t.keyCode!==n.Z.keycodes.enter||(0,n.Z)(t.target).is("textarea")||(t.preventDefault(),this.onButtonClick()),!(0,n.Z)(t.target).is("textarea")||t.keyCode!==n.Z.keycodes.up&&t.keyCode!==n.Z.keycodes.down||t.stopPropagation()},getFormData:function(){var t={wid:this._id,mag_num_id:this.page.mag.num_id,is_preview:!(!RM.constructorRouter||!RM.constructorRouter.preview),fields:[]};return this.captcha&&(t.captcha=this.formWidget.captchaResponse),o.Z.each(this.fields,function(e){if("captcha"!==e.tp){var i=this.$(".js-input[data-sort="+e.sort+"]");if(0!==i.length){var n=i.val().trim();if("checkbox"===e.tp&&(n=i.prop("checked")?"On":"Off"),"number"===e.tp){var o=parseFloat(n);n=isNaN(o)?n:o}"file"!==e.tp&&t.fields.push({caption:e.caption,type:e.tp,value:n})}}else t.captcha=this.formWidget.captchaResponse}.bind(this)),t},submitForm:function(t){this.xhr&&this.xhr.abort();var e=this.$el.find("form");e.length||(e=this.$el.find(".form-wrapper").wrap('<form enctype="multipart/form-data" method="post" target="form_submit_iframe"></form>').parent().attr("action","/api/connect/forms/send/"+this.page.mag.num_id));var i=new FormData(e.get(0)),o=this.getFormData();if(o&&o.fields){var a,s=h(o.fields);try{for(s.s();!(a=s.n()).done;){var r=a.value;i.delete(r.name)}}catch(t){s.e(t)}finally{s.f()}}for(var c=0,u=Object.keys(o);c<u.length;c++){var p=u[c];i.append(p,"object"===l(o[p])&&null!==o[p]?JSON.stringify(o[p]):o[p])}var d=i.get("formfiles");!d||d.size&&d.name||i.delete("formfiles"),this.xhr=n.Z.ajax({url:"/api/connect/forms/send/"+this.page.mag.num_id,method:"POST",dataType:"json",data:i,cache:!1,contentType:!1,processData:!1,success:function(){t()},error:function(e){t({status:e.status,responseJSON:e.responseJSON,responseText:e.responseText})}}),RM.analytics&&RM.analytics.sendEvent("Form Submit Click")},submitToIframe:function(t){var e,i=this.endpoint_url&&this.endpoint_url.custom_url;if(!i)return t("No custom URL specified for submit");(0,n.Z)("#form_submit_iframe").length||(0,n.Z)('<iframe id="form_submit_iframe" name="form_submit_iframe" style="display:none;"></iframe>').appendTo("body"),(e=this.$el.find("form")).length||(e=this.$el.find(".form-wrapper").wrap('<form method="post" target="form_submit_iframe" enctype="multipart/form-data"></form>')),e.attr("action",i),e.get(0).submit(),t(null),RM.analytics&&RM.analytics.sendEvent("Form Submit Click")},setButtonState:function(t){t=t||"";this.$button.removeClass(["error","submitted","pending"].join(" ")).addClass(t)}});e.default=u}}]);