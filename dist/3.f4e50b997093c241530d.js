(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0sUV":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1z7"),o=r.n(n),i=r("rFsW"),s=r("OTSC"),a=r("f3SV"),p=r("QNiq"),c=o.a.Model.extend({idAttribute:"_id",url:function(){if(this.get("user")&&this.get("uri")){var e=this.get("user");i.a.isObject(e)&&(e=e.get("uri"));var t=e+"/"+this.get("uri")}else t=this.getId();return"/api/readymag/"+t},PAGES_URL:"/api/magpages/",PUBLISH_URL:"/api/publish/",UNPUBLISH_URL:"/api/unpublish/",parse:function(e){var t=r("qCXw").MagList,n=r("gFFP").UserModel;return e.user&&(this.user=new n(e.user),delete e.user),e.title||(e.emptyTitle=!0),e.title=e.title||"Project",i.a.isEmpty(e.recentMags)||(this.recentMags=new t(e.recentMags,{parse:!0})),e},getPageNumId:function(e){if(!this.get("pages"))return"";var t=i.a.find(this.get("pages"),(function(t){return t.num==e}));return t?t.num_id:""},getPageId:function(e){if(!this.get("pages"))return"";var t=i.a.find(this.get("pages"),(function(t){return t.num==e}));return t?t._id:""},getPageScreenshot:function(e,t){if(e=s.default.screenshotSize(e),t.cover)return!this.get("cover")&&this.get("pages")?this.getPageScreenshot(e,{_id:this.get("coverPid")}):this.get("cover")?s.default.addFilenameComponent(this.get("cover"),e):["/api/screenshot/renew",this.get("num_id"),this.get("coverPid"),(this.get("is_published")?"ready":"")+"?redirect=true&size="+e].join("/");if(this.get("pages")){var r=i.a.findWhere(this.get("pages"),t),n=r&&r.screenshot;return!n&&r?["/api/screenshot/renew",this.get("num_id"),r._id,(this.get("is_published")?"ready":"")+"?redirect=true&size="+e].join("/"):n&&!isNaN(Number(s.default.getFilenameComponent(n)))?n:s.default.addFilenameComponent(n,e)}console.error("cannot find page screenshot: ",this,t)},getLink:function(){if(!p.a.isDesktop)return this.getUnpublishedViewerLink();var e=this.get("is_published")&&this.get("uri")||this.getId();return RM.common.customDomainProfile?"/"+e+"/":a.a.readymag_host+"/"+this.user.get("uri")+"/"+e+"/"},getUnpublishedViewerLink:function(){return a.a.readymag_auth_host+"/"+this.user.get("uri")+"/"+this.get("num_id")},getMagEditLink:function(){return a.a.readymag_auth_host+"/edit/"+this.getId()+"/"},getMagEditContentsLink:function(){return p.a.isDesktop?this.getMagEditLink()+"contents/":this.getUnpublishedViewerLink()},getMagSettingsLink:function(){return this.getMagEditLink()+"settings/"},getId:function(){return this.get("num_id")},getPagesCount:function(){return this.get("pages_count")||this.get("pages")&&this.get("pages").length},deleteMag:function(e){this.deleteXHR&&this.deleteXHR.abort(),this.deleteXHR=$.ajax({type:"DELETE",url:"/api/mags/archive",data:JSON.stringify({mag_num_ids:[Number(this.getId())],folder_num_ids:[]}),contentType:"application/json; charset=utf-8",success:function(t){"function"==typeof e.success&&e.success(t)},error:function(e){console.log("Error deleting mag: "+e.responseText),this.onError("A problem occurred while deleting your project. Please, contact us: "+a.a.SUPPORT_MAIL)},context:this}).always((function(){"function"==typeof e.always&&e.always()}))},_changePublishState:function(e,t){var r=!e||"publish"!==e&&"republish"!==e?this.UNPUBLISH_URL:this.PUBLISH_URL;this.publishXHR&&this.publishXHR.abort(),this.publishXHR=$.ajax({type:"POST",url:r+this.getId(),success:function(r){this.set("is_published",e&&"unpublish"!==e),"publish"===e&&(this.set("published",r.published||(new Date).toISOString()),this.set("updated",r.updated||(new Date).toISOString()),this.set("major_update",r.major_update||(new Date).toISOString())),"republish"===e&&this.set(i.a.extend(i.a.omit(r,"user"),{updated:this.get("last_changed")})),this.set("coverPid",r.coverPid||this.get("coverPid")),this.set("cover",r.cover||this.get("cover")),"function"==typeof t.success&&t.success()},error:function(t){console.log("Error changing puplish state: "+t.responseText),this.onError("A problem occurred while "+e+"ing your project. Please, contact us: "+a.a.SUPPORT_MAIL)},context:this}).always((function(){"function"==typeof t.always&&t.always()}))},publishMag:function(e){this._changePublishState("publish",e)},unpublishMag:function(e){this._changePublishState("unpublish",e)},republishMag:function(e){this._changePublishState("republish",e)},duplicateMag:function(e){var t;t={type:"POST",url:"/api/mag/"+this.get("num_id")+"/duplicate",context:this},i.a.extend(t,e),this.duplicateXHR&&this.duplicateXHR.abort(),this.duplicateXHR=$.ajax(t)},hasUnsavedChanges:function(){return this.get("is_published")&&this.get("changed")},onError:function(e){alert(e)}})},Vxjr:function(e,t,r){"use strict";r.r(t),r.d(t,"findImagePath",(function(){return o})),r.d(t,"is2X",(function(){return i})),r.d(t,"default",(function(){return a}));var n=window.chunkURL||"https://d1id5eheivyv24.cloudfront.net/cd9b9c6f/dist/",o=function(e){return"".concat(n,"img").concat(e.substring(1))},i=window.devicePixelRatio>=2,s={"collector-mobile-header":{prefix:"./_tablet/collector/header/",imgs:["back-active.png"]},"collector-mobile-mags":{prefix:"./_tablet/collector/mags-list/",imgs:["close.png"]},constructor:{prefix:"./constructor/blocks/",imgs:["block-dot-plus.png"]},controls:{prefix:"./constructor/controls/",imgs:["arrow-hover.png"]},"controls-common_align":{prefix:"./constructor/controls/common_align/",imgs:["bottom-hover.png","center-hover.png","icon-hover.png","left-hover.png","middle-hover.png","right-hover.png","top-hover.png"]},"controls-common_layer":{prefix:"./constructor/controls/common_layer/",imgs:["icon-hover.png"]},"controls-text_align":{prefix:"./constructor/controls/text_align/",imgs:["center-hover.png","icon-hover.png","justify-hover.png","left-hover.png","right-hover.png"]},"controls-text_bius":{prefix:"./constructor/controls/text_bius/",imgs:["all-caps-hover.png","bold-hover.png","icon-hover.png","italic-hover.png","strike-hover.png","underline-hover.png"]},"controls-text_columns":{prefix:"./constructor/controls/text_columns/",imgs:["icon-hover.png"]},"controls-text_edit":{prefix:"./constructor/controls/text_edit/",imgs:["icon-hover.png"]},"controls-text_link":{prefix:"./constructor/controls/text_link/",imgs:["add-hover.png","apply.png","apply-hover.png","cancel.png","cancel-hover.png","delete.png","delete-hover.png","icon-hover.png","menu-arrow.png","menu-arrow-hover.png","placeholder-arrow-hover.png","popup-arrow-hover.png","target.png","target-hover.png","target-active.png"]},"controls-text_typography":{prefix:"./constructor/controls/text_typography/",imgs:["font-arrows-hover.png","icon-hover.png","point-active.png","point-hover.png","style-arrows-hover.png","unlinked.png"]},"controls-text_styles":{prefix:"./constructor/controls/text_styles/",imgs:["add-hover.png","align-center-active.png","align-justify-active.png","align-left-active.png","align-right-active.png","cancel-hover.png","menu-arrow.png","menu-arrow-hover.png","point-active.png","point-hover.png","popup-arrow-hover.png","text-strike-active.png","text-transform-active.png","text-underline-active.png"]},"controls-slideshow_manager":{prefix:"./constructor/controls/slideshow_manager/",imgs:["add-hover.png","image-placeholder.png","remove.png","remove-hover.png","update.png","update-hover.png","preloader.png"]},"controls-slideshow_transitions":{prefix:"./constructor/controls/slideshow_transitions/",imgs:["icon.png","icon-hover.png"]},"controls-shape_settings":{prefix:"./constructor/controls/shape_settings/",imgs:["color-arrow.png","color-arrow-hover.png","icon.png","icon-hover.png","opacity-grid.png","point-active.png","point-hover.png","popup-arrow.png","popup-arrow-hover.png","stroke-dashed.png","stroke-dotted.png","stroke-double.png","stroke-solid.png"]},"controls-video_settings":{prefix:"./constructor/controls/video_settings/",imgs:["social-upload.png","social-upload-hover.png","delete.png","delete-hover.png","social-youtube.png","social-youtube-hover.png","social-vimeo.png","social-vimeo-hover.png","replace-thumbnail.png"]},"controls-common_rotation":{prefix:"./constructor/controls/common_rotation/",imgs:["flip-h.png","flip-h-hover.png","flip-v.png","flip-v-hover.png","rotate90.png","rotate90-hover.png"]},"controls-common_position":{prefix:"./constructor/controls/common_position/",imgs:["icon.png","icon-hover.png"]},"controls-audio_settings":{prefix:"./constructor/controls/audio_settings/",imgs:["close.png","close-hover.png","soundcloud.png","soundcloud-hover.png","soundcloud-logo-small.png","soundcloud-logo-small-hover.png","spin-l-hover.png","spin-r-hover.png"]},"controls-picture_alt":{prefix:"./constructor/controls/picture_alt/",imgs:["icon-hover.png"]},colorbox:{prefix:"./constructor/helpers/colorbox/",imgs:["add-hover.png","fav-active.png","fav-hover.png","trash-active.png","trash-hover.png"]},fontexplorer:{prefix:"./constructor/helpers/font-explorer/",imgs:["add-font.png","close-typekit-popup.png","back-hover.png","classification-blackletter-active.png","classification-decorative-active.png","classification-handmade-active.png","classification-monospaced-active.png","classification-sans-serif-active.png","classification-script-active.png","classification-serif-active.png","classification-slab-serif-active.png","filter-capitals-all-or-small-caps-active.png","filter-capitals-uppercase-lowercase-active.png","filter-contrast-high-active.png","filter-contrast-low-active.png","filter-contrast-regular-active.png","filter-number-style-lowercase-active.png","filter-number-style-uppercase-active.png","filter-weight-heavy-active.png","filter-weight-light-active.png","filter-weight-regular-active.png","filter-width-condensed-active.png","filter-width-extended-active.png","filter-width-regular-active.png","filter-x-height-high-active.png","filter-x-height-low-active.png","filter-x-height-regular-active.png","grid-view-black.png","list-view-white.png","provider-logo-google-hover.png","provider-logo-typekit-hover.png","provider-logo-webtype-hover.png","provider-logo-typetoday-hover.png","remove-font.png","search-active.png","search-corner.png"]},fontselector:{prefix:"./constructor/helpers/font-selector/",imgs:["add-hover.png","delete.png","google.png","restore.png","typekit.png","webtype.png","gear.png","gear-hover.png"]},fontuploader:{prefix:"./constructor/helpers/font-selector/",imgs:["refresh.png","refresh-hover.png","close.png","close-hover.png"]},"page-settings":{prefix:"./constructor/helpers/page-settings/",imgs:["arrow-hover.png","restore-hover.png","upload-hover.png"]},pagespanel:{prefix:"./constructor/pages-panel",imgs:["/back-click.png","/back-hover.png","/list-view-active.png","/list-view-hover.png","/plus-click.png","/plus-hover.png","/settings.png","/settings-hover.png","/slide-view.png","/slide-view-active.png","/slide-view-hover.png","/trash-active.png","/trash-full-active.png","/trash-full-hover.png","/trash-full.png","/trash-hover.png","/trash.png","/archive-hover.png","/archive.png","-contents/eye-invisible.png","-contents/eye-invisible-active.png","-contents/eye-visible.png","-contents/eye-visible-active.png","-contents/submenu-settings-hover.png","-contents/submenu-clone-hover.png","-contents/submenu-edit-hover.png","-contents/submenu-invisible.png","-contents/submenu-invisible-hover.png","-contents/submenu-remove-hover.png","-contents/submenu-visible.png","-contents/submenu-visible-hover.png"]},settings:{prefix:"./constructor/pages-panel-settings/",imgs:["context-panel-corner.png","link-status-error.png","link-status-ok.png","republish-arrow.png","republish-arrow-hover.png","republish-settings.png","settings-corner.png","share-facebook.png","share-facebook-hover.png","share-mail.png","share-mail-hover.png","share-twitter.png","share-twitter-hover.png","textured-panel-corner.png","switcher-pass-texture.png"]},"help-tour":{prefix:"./constructor/help-tour/",imgs:["cursor.png","icon-tour-hover.png","star.png"]},"help-panel":{prefix:"./constructor/help-panel/",imgs:["mac_keyboard/single.png","win_keyboard/single.png","mac_keyboard/blank.png","win_keyboard/blank.png"]},"help-shortcuts":{prefix:"./constructor/help-panel/",imgs:["mac_keyboard/alt.png","mac_keyboard/cmd.png","mac_keyboard/shift_cmd.png","arrow.png","mac_keyboard/cmd_symbol.png","win_keyboard/alt.png","win_keyboard/ctrl.png","win_keyboard/ctrl_shift.png"]},templates:{prefix:"./constructor/",imgs:["pages-panel-templates/arrow.png","pages-panel-templates/arrow-active.png","pages-panel-templates/long.png","pages-panel-templates/del.png","pages-panel-templates/del-hover.png","pages-panel-templates/plus.png","pages-panel-templates/plus-hover.png","helpers/template-center/search.png","helpers/template-center/search-active.png","helpers/template-center/back.png","helpers/template-center/back-hover.png","helpers/template-center/checkmark.png"]},"panels-background":{prefix:"./constructor/widgetbar/background/",imgs:["delete.png","color.svg","mask.png","opacity-handle-hover.png","picture.svg","flickr.svg","unsplash.svg","search.svg","slideshow.svg","upload.svg","video_bg.svg","video.svg","vimeo.svg","youtube.svg","slideshow-add-btn.svg","update-slideshow-img.png","update-slideshow-img-hover.png","delete-slideshow-img.png","delete-slideshow-img-hover.png","slideshow-settings-divider.png"]},"panels-twitter":{prefix:"./constructor/panels/twitter/",imgs:["input-delete-hover.png","input-target-hover.png","input-go-hover.png","point-hover.png","point-active.png"]},"panels-shape":{prefix:"./constructor/panels/shape/",imgs:["ellipse.png","ellipse-active.png","ellipse-hover.png","icon-ellipse.png","icon-line.png","icon-polygon.png","icon-rectangle.png","line.png","line-active.png","line-hover.png","polygon.png","polygon-active.png","polygon-hover.png","rectangle.png","rectangle-active.png","rectangle-hover.png"]},searchpanel:{prefix:"./constructor/search-panels/",imgs:["clear.png","clear-hover.png","back-icon-hover.png","search-hover.png"]},"searchpanel-flickr":{prefix:"./constructor/search-panels/flickr/",imgs:["connect-logo.png","logo-hover.png","error.png"]},"searchpanel-unsplash":{prefix:"./constructor/search-panels/unsplash/",imgs:["connect.png","logo-hover.png"]},"searchpanel-youtube":{prefix:"./constructor/search-panels/youtube/",imgs:["connect-logo.png","logo-hover.png"]},"searchpanel-vimeo":{prefix:"./constructor/search-panels/vimeo/",imgs:["connect-logo.png","logo-hover.png"]},"searchpanel-videocommon":{prefix:"./constructor/search-panels/common-video/",imgs:["play.png","play-hover.png","user.png"]},widgetbar:{prefix:"./constructor/widgetbar/",imgs:["redo-active.png","redo-active-hover.png","undo-active.png","undo-active-hover.png","arrow-left-hover.png","arrow-right-hover.png","dot.png","ellipsis.png","ellipsis-hover.png","eye-back.png","eye-back-hidden.png","eye-back-hidden-hover.png","eye-back-hover.png","eye-front.png","eye-front-hover.png","i.png","i-hover.png","selection-point.png","x.png","x-hover.png"]},widgetselector:{prefix:"./constructor/widget-selector/",imgs:[]},"collector-menu":{prefix:"./common/user-menu/",imgs:["create-hover.png","settings-hover.png","logout-hover.png","unlogged-hover.png"]},"collector-maglist":{prefix:"./collector/mags-list/",imgs:["arrow.png","arrow-hover.png","close.png","close-hover.png","edit.png","edit-hover.png","private.png","menu-bg.png","menu-corner.png","menu-panel-bg.png","settings.png","settings-hover.png","updated.png","updated-hover.png","suspended.png","suspended-hover.png","popup-close.png","popup-close-hover.png","eye.png","eye-hover.png"]},"user-settings":{prefix:"./",imgs:["constructor/preloader-dark.png","collector/profile-edit/checkmark_ok.png","collector/profile-edit/checkmark_bad.png","collector/profile-edit/del_userpic_hover.png","collector/profile-edit/preloader_grey_arc.png","collector/profile-edit/icon-profile-active.png","collector/profile-edit/icon-password-active.png","collector/profile-edit/icon-billing-active.png","collector/profile-edit/close-hover.png","collector/profile-edit-subscription/main-bg.jpg","collector/profile-edit-subscription/new-publisher.png","collector/profile-edit-subscription/stripe-hover.png","collector/profile-edit-subscription/upper-block-bg.jpg","collector/profile-edit-subscription/arrow-back-hover.png","collector/profile-edit-subscription/arrow-discount.png","collector/profile-edit-subscription/arrow-discount-white.png","collector/profile-edit-subscription/radio-hover.png","collector/profile-edit-subscription/radio-checked.png"]},homepage:{prefix:"./homepage/",imgs:["menu/logo-black.png","menu/logo-blue.png","menu/logo-blue-light.png","menu/logo-white.png","tour/left-arrow-hover.png","tour/popup-close-hover.png","tour/right-arrow-hover.png","tour/responsive-play-hover.png","tour/top-categories-img1-hover.png","tour/top-categories-img2-hover.png","tour/top-categories-img3-hover.png","tour/top-categories-img4-hover.png","tour/top-categories-img5-hover.png","pricing/star-part-0@2x.png","pricing/star-part-1@2x.png","pricing/star-part-2@2x.png","pricing/star-part-3@2x.png","pricing/star-part-4@2x.png","pricing/star-part-5@2x.png","pricing/star-part-6@2x.png","pricing/star-part-7@2x.png"]}};function a(e){if(s[e]&&!s[e].preloaded){s[e].preloaded=!0;for(var t=s[e].prefix,r=s[e].imgs,n=[],i=0;i<r.length;i++){n[i]=new Image;var a=r[i],p=a.replace(/\.(png|gif|jpg)$/,"@2x$&"),c=t+(Modernizr.retina&&!a.includes("@2x")?p:a);n[i].src=o(c)}}}},gFFP:function(e,t,r){"use strict";r.r(t);var n=r("xi34"),o=r("q1z7"),i=r.n(o),s=r("rFsW"),a=r("f3SV"),p=r("OTSC"),c=i.a.Model.extend({idAttribute:"_id",urlRoot:"/api/folders/"}),g=i.a.Collection.extend({model:c,getByUri:function(e){return this.findWhere({uri:e})}}),l=r("qCXw"),u=r("Vxjr");r.d(t,"UserModel",(function(){return h})),r.d(t,"UsersCollection",(function(){return d})),r.d(t,"UsersLoader",(function(){return v})),r.d(t,"loadUser",(function(){return m}));var h=i.a.Model.extend({userpic_sizes:[64,96,128,192,256],mergePermissionsList:["can_publish"],idAttribute:"uri",url:"/api/me/",SSLDOMAIN_URL:"/api/user/domain/ssl",initialize:function(e,t){s.a.bindAll(this)},store:function(e,t){e.name&&!/^\s$/.test(e.name)||(e.name=this.get("name")),e=this.changedAttributes(e),this.set(e),this.validate(e)||n.a.ajax({type:"PUT",url:this.url,data:e,success:t&&"function"==typeof t.success&&t.success,error:t&&"function"==typeof t.error&&t.error})},deletePic:function(){var e=this;n.a.ajax({type:"DELETE",url:"/api/me/pic/",success:function(){e.set("pic","")}})},validate:function(e){if(void 0!==e.name&&s.a.isEmpty(n.a.trim(e.name)))return"Name yourself"},getUserpic:function(e){var t,r=this.get("pic");return Modernizr.retina&&(e*=2),e=s.a.find(this.userpic_sizes,(function(t){return t>=e})),r?(0==(r=p.default.addFilenameComponent(r,e)).indexOf("https://")||RM.common.isDownloadedSource||-1==r.indexOf("/api/upload/")&&(r="/api/upload/"+r),r):(t=this.get("name").match(/^[a-z0-9]{1}/i))?Object(u.findImagePath)("./stubs/avatar/"+t[0].toLowerCase()+".gif"):Object(u.findImagePath)("./stubs/avatar/"+e+".gif")},getLink:function(){return RM.common.customDomainProfile?"/":RM.common.isDomainViewer?a.a.readymag_host+"/"+this.get("uri"):"/"+this.get("uri")},getWebsiteButified:function(){var e,t={link:"",label:""};return this.get("website")&&((e=p.default.URLParts(this.get("website"))).protocol=e.protocol||"http://",t.link=e.protocol+e.hostname+e.path,t.label=e.hostname),t},getTwitterButified:function(){var e,t={link:"",nick:""};return this.get("twitter")&&((e=p.default.URLParts(this.get("twitter"))).protocol||e.path?(e.protocol=e.protocol||"http://",t.nick=e.path.split("/")[1]):(e.protocol="http://",t.nick=e.hostname,e.path="/"+t.nick,e.hostname="twitter.com"),t.link=e.protocol+e.hostname+e.path),t},getFacebookButified:function(){var e,t={link:"",nick:""};if(this.get("fb")){e=p.default.URLParts(this.get("fb"));try{-1!=e.path.indexOf("profile.php")?t.nick="facebook":"pages"==e.path.split("/")[1]?t.nick=decodeURIComponent(e.path.split("/")[2])||"":e.protocol||e.path?t.nick=e.path.split("/")[1].split("?")[0]||"":(t.nick=e.hostname,e.hostname="facebook.com",e.path="/"+t.nick),e.protocol=e.protocol||"http://",t.link=e.protocol+e.hostname+e.path}catch(e){console.log("Error parsing FB URL: ",e)}}return t},mergePermissions:function(e){var t=s.a.clone(this.get("permissions"));this.set("permissions",e),s.a.each(this.mergePermissionsList,(function(e){this.attributes.permissions[e]=this.attributes.permissions[e]&&t[e]}),this)},resendConfirmationEmail:function(){n.a.get("/api/user/confirm/resend")},isPublisher:function(){return this.get("permissions").can_publish},checkDomain:function(e,t){return n.a.ajax({type:"POST",url:"/api/checkdomain",data:{type:"user",domain:e},success:s.a.bind((function(r){this.set({last_checked_domain:e},{silent:!0}),t&&t(r)}),this),error:s.a.bind((function(){console.error(arguments),t&&t(null)}),this)})},mapDomain:function(e,t){return t=t||{},n.a.ajax({type:"POST",url:"/api/user/domain/",data:{domain:e,status:"on"},success:s.a.bind((function(r){this.set({domain:e},{silent:!0}),t.success&&t.success(r)}),this),error:s.a.bind((function(e){return e&&e.status>=500?t.error(null):t.error&&t.error({badDNSSettings:!0})}),this)})},unmapDomain:function(e){return n.a.ajax({type:"POST",url:"/api/user/domain/",data:{status:"off"},success:s.a.bind((function(t){this.unset("domain",{silent:!0}),e&&e(t)}),this),error:s.a.bind((function(){console.error(arguments),e&&e(null)}),this)})},changeSSL:function(e,t,r){return r=r||{},n.a.ajax({type:"POST",url:this.SSLDOMAIN_URL,data:{domain:e,status:t?"on":"off"},success:s.a.bind((function(e){r.success&&r.success(e)}),this),error:s.a.bind((function(e){return console.log(e),e&&e.status>=500?r.error(null):r.error&&r.error(e.responseJSON)}),this)})},getSSLState:function(e,t){return n.a.ajax({type:"GET",url:this.SSLDOMAIN_URL,data:{domain:e,type:"user"},success:s.a.bind((function(e){t.success&&t.success(e)})),error:s.a.bind((function(e){return e&&e.status>=500?t.error(null):t.error&&t.error(e.responseJSON)}))})},isBetaTester:function(){return!!(this.get("permissions")||{}).can_use_beta_testing}}),d=i.a.Collection.extend({model:h}),v=function(){this.allUsers=new d,this.userMags={},this.userFolders={},s.a.bindAll(this)};v.prototype={LOAD_URL:"/api/readymags/user/",loadByUsername:function(e){if(RM.common.customDomainProfile&&this.allUsers.at(0)){var t=this.allUsers.at(0),r=this.userMags[this.allUsers.at(0).get("uri")];return t.folders=this.userFolders[this.allUsers.at(0).get("uri")],e.success&&e.success({user:t,mags:r})}var n=this.allUsers.find((function(t){return t.get("uri").toLowerCase()==e.user_uri.toLowerCase()})),o=s.a.bind((function(t){var r,n;if(!t.user)return e.success({user:t});this.load(t,e.is_me),r=this.allUsers.get(t.user.uri),n=this.userMags[t.user.uri],r.folders=this.userFolders[t.user.uri],e.success&&e.success({user:r,mags:n})}),this);n&&!e.force?(r=this.userMags[n.get("uri")],n.folders=this.userFolders[n.get("uri")],e.success({user:n,mags:r})):this.request(e.user_uri,{success:o,error:e.error})},load:function(e,t){var r;if(!s.a.isEmpty(e)){var n=e.user||e,o=e.mags,i=n.folders||[];if(n){r=n.uri,g&&(this.userFolders[r]=new g(i,{parse:!0}),delete n.folders),this.allUsers.remove(r),this.allUsers.add(n),t&&n.contributors&&s.a.each(n.contributors,(function(e){e.member&&(e.member=new h(e.member))}));var a=s.a.pick(n,"_id","uri","desc","pic");t&&(a.isMe=t),s.a.each(o,(function(e){e.user=s.a.clone(a)})),l.MagList&&(this.userMags[r]=new l.MagList(o,{parse:!0}),t&&!s.a.isEmpty(o)&&this.userMags[r].each((function(e){e.user.set("isMe",!0)})))}}},loadShared:function(e){s.a.isEmpty(e)||(this.sharedMags={},s.a.each(e,(function(e){var t=s.a.pick(e.user,"_id","uri","desc","pic");s.a.each(e.mags,(function(e){e.user=s.a.clone(t)})),this.sharedMags[e.user.uri.toLowerCase()]={user:new h(e.user),mags:new l.MagList(e.mags,{parse:!0})}}),this))},request:function(e,t){RM.common.customDomainProfile&&(this.LOAD_URL="/api/domain/readymags/user/",e=""),t=t||{},this.abortLoading();t.success||n.a.noop;this.loadingXHR=n.a.ajax(s.a.extend(t,{type:"GET",url:this.LOAD_URL+e}))},abortLoading:function(){this.loadingXHR&&this.loadingXHR.abort&&this.loadingXHR.abort()}};var m=function(){window.RM.data.usersLoader=new v;var e=window.ServerData.me;window.RM.data.usersLoader.load(e,!0),e?(e=e.user||e).uri&&(window.RM.data.usersLoader.me=window.RM.data.usersLoader.allUsers.get(e.uri)):window.RM.data.usersLoader.me=!1,window.ServerData.mags&&window.ServerData.mags.user&&window.ServerData.mags.mags&&(!window.RM.data.usersLoader.me||window.RM.data.usersLoader.me.get("uri")!==window.ServerData.mags.user.uri)&&window.RM.data.usersLoader.load(window.ServerData.mags),window.ServerData.shared&&window.RM.data.usersLoader.loadShared(window.ServerData.shared),s.a.isEmpty(window.ServerData.sharedError)||(window.RM.data.usersLoader.sharedError=window.ServerData.sharedError)}},qCXw:function(e,t,r){"use strict";r.r(t),r.d(t,"MagList",(function(){return a}));var n=r("q1z7"),o=r.n(n),i=r("0sUV"),s=r("xi34"),a=o.a.Collection.extend({model:i.a,load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.success||s.a.noop;this.loaded;var r=this;return e.success=function(){t(r),r.loaded=!0},this.fetch(e)},comparator:function(e){return-new Date(e.get("major_update")).getTime()}})}}]);