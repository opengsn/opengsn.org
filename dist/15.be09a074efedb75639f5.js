(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[15],{1128:function(t,e,o){"use strict";o.r(e);var a=o(322),n=o(313),r=o(345),s=o(944),i=o.n(s),c=o(348),l=o(1057),d=o(721),u=o(1047),p=o(896),h=o(1127);function v(t,e,o,a,n,r,s){try{var i=t[r](s),c=i.value}catch(t){return void o(t)}i.done?e(c):Promise.resolve(c).then(a,n)}var g,f,m=l.Z.extend({setupSettingsPanel:(g=regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.cartWidgetModel=new d.Z(this.cartWidgetData),this.saveModelChanges_debounced=a.Z.debounce(this.saveModelChanges.bind(this),80),RM.constructorRouter&&RM.constructorRouter.mag&&!RM.constructorRouter.mag.get("_id")&&(RM.constructorRouter.isOwner=a.Z.isEmpty(RM.constructorRouter.previewMag.get("shared")),RM.constructorRouter.previewMag.edit_params=new u.Z(RM.constructorRouter.previewMag.get("edit_params"),RM.constructorRouter.previewMag),RM.constructorRouter.previewMag.unset("edit_params"),RM.constructorRouter.previewMag.filterUnusedFonts(),RM.constructorRouter.fonts=new p.ZP(RM.constructorRouter.previewMag.edit_params)),this.$settingButton=(0,n.Z)("<div>",{class:"settings-button-wrap",attr:{"data-alt":"Settings","data-alt-pos":"bottom","data-alt-offset":"9"}}),this.$settingButton.append((0,n.Z)("<img>",{class:"settings-button svg",src:(0,c.findImagePath)("./constructor/controls/cart_settings/cart-sidebar-settings.svg")})),(0,n.Z)(".sidebar-settings-container").append(this.$settingButton),this.$settingButton.on("click",this.toogleSettings),this.$settingButton.RMAltText(),i()(this.$settingButton.find(".svg")),e=r.default.extend(h.Z),this.settingsPanel=new e({el:(0,n.Z)('<div id="sidebar-settings-panel">').appendTo(document.body).get(0),data:this.getSettingsData()}),this.settingsPanel.$on("change",this.onModelChange);case 12:case"end":return t.stop()}}),t,this)})),f=function(){var t=this,e=arguments;return new Promise((function(o,a){var n=g.apply(t,e);function r(t){v(n,o,a,r,s,"next",t)}function s(t){v(n,o,a,r,s,"throw",t)}r(void 0)}))},function(){return f.apply(this,arguments)})});e.default=m},1127:function(t,e,o){"use strict";o.d(e,{Z:function(){return l}});var a=o(322),n=o(899),r=o(894),s=o(897),i=o(898),c={components:{ColorPicker:n.Z,FontFamilySelector:r.Z,FontStyleSelector:s.Z,RmSwitcher:i.Z},watch:{isHidden:function(t){this.overlay.style.display=t?"none":"block"}},mounted:function(){var t=this;this.overlay=document.createElement("div"),this.overlay.classList.add("panel-overlay"),document.body.append(this.overlay),this.onOverlayClick&&this.overlay.addEventListener("click",this.onOverlayClick),this.$watch("model",(function(e){t.$emit("change",e)}),{deep:!0})},methods:{closeOthersPopups:function(t){t&&a.Z.each(this.$children,(function(e){e!==t&&(e.visibleBox=!1)}))},changePropHandler:function(t,e){this.model[t]=e},changeShadow:function(t){this.model["bar-shadow"]=t}}},l=(0,o(890).Z)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isHidden?t._e():o("div",{staticClass:"panel setting-panel"},[o("div",{staticClass:"panel-header"},[t._v("Cart bar settings")]),t._v(" "),o("div",{staticClass:"separator-dotted"}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"caption"},[t._v("Bar color")]),t._v(" "),o("color-picker",{staticClass:"round",attrs:{color:t.model["bar-background-color"],alpha:t.model["bar-background-color-opacity"]},on:{showPopup:t.closeOthersPopups,"update:color":function(e){return t.changePropHandler("bar-background-color",e)},"update:alpha":function(e){return t.changePropHandler("bar-background-color-opacity",e)}}})],1),t._v(" "),o("div",{staticClass:"separator-dotted"}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"caption"},[t._v("Shadow")]),t._v(" "),o("rm-switcher",{attrs:{value:t.model["bar-shadow"],callback:t.changeShadow,"color-off":"#B8B8B8","color-on":"#0080FF",height:24,width:40}})],1),t._v(" "),o("div",{staticClass:"separator-dotted"}),t._v(" "),o("div",{staticClass:"row"},[o("font-family-selector",{attrs:{family:t.model["bar-font-family"]},on:{showPopup:t.closeOthersPopups,change:function(e){return t.changePropHandler("bar-font-family",e)}}})],1),t._v(" "),o("div",{staticClass:"separator-dotted"}),t._v(" "),o("div",{staticClass:"row"},[o("font-style-selector",{style:{"font-family":t.model["bar-font-family"]},attrs:{"font-style":[t.model["bar-font-style"]],"font-weight":[t.model["bar-font-weight"]],"font-family":[t.model["bar-font-family"]]},on:{showPopup:t.closeOthersPopups,"update:fontStyle":function(e){return t.changePropHandler("bar-font-style",e)},"update:fontWeight":function(e){return t.changePropHandler("bar-font-weight",e)}}})],1),t._v(" "),o("div",{staticClass:"separator-dotted"}),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"caption"},[t._v("Text color")]),t._v(" "),o("color-picker",{staticClass:"round",attrs:{color:t.model["bar-color"],alpha:t.model["bar-color-opacity"]},on:{showPopup:t.closeOthersPopups,"update:color":function(e){return t.changePropHandler("bar-color",e)},"update:alpha":function(e){return t.changePropHandler("bar-color-opacity",e)}}})],1)])}),[],!1,null,null,null).exports}}]);