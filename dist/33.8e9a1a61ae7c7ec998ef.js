(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{hXNS:function(e,t,a){"use strict";a.r(t);var r,i=a("rFsW"),n=a("q1z7"),o=a.n(n),s=a("f3SV"),c=a("xi34"),d=a("OTSC"),u=a("ubkq"),m=a.n(u),l="other",g="free",p="none|direct|none|none|none",w={initialize:function(e){if(i.a.bindAll(this),i.a.extend(this,e),this.currentData=this._initCurrentData(),this.router||(this.router=RM.collectorRouter||RM.constructorRouter),this.currentData.userId&&!RM.common.isDownloadedSource){var t=this.currentData.userId;window.ga("readymag.set","&uid",t),window.ga("readymag.set","&cd9",t),window.ga("readymag.set","&cd11",this.currentData.subscription&&"free"===this.currentData.subscription?"NO":"SI"),window.ga("readymag.set","&cd13",this.currentData.gacid)}this.currentData.blurbUserCreationDate&&window.ga("readymag.set","&cd7",this.currentData.blurbUserCreationDate),RM.common.isDownloadedSource||Object(c.a)(this._saveLoginData),this.lastTrackedUrl="",Object(c.a)(i.a.bind((function(){this.trackPage()}),this))},sendEvent:function(e,t,a,r){if(window.ga&&(!RM.constructorRouter||!RM.constructorRouter.previewMode)){var n={action:e};i.a.isObject(t)?n=i.a.extend(n,t):(n.label=t||void 0,n.value=a||void 0);var o=this._extendParams(n);o.label&&"string"==typeof o.label&&o.label.match(/enterprise/)&&(o.label=o.label.replace(/enterprise/,"custom"));var s={hitType:"event",eventCategory:o.category,eventAction:o.action,eventLabel:o.label,eventValue:o.value,page:o.page,dimension1:o.dims.pageType,dimension3:o.dims.subscription,screenName:o.screenName,location:o.href,hitCallback:r||o.cb||void 0};o.dims.userId&&(s.dimension2=o.dims.userId),this._rmdata&&(s.dimension4=this._rmdata.dimension,s.dimension5=this._rmdata.first_campaign,s.dimension6=this._rmdata.first_medium);var c=this.getABTestingValue();c&&(s.dimension10=c),window.ga("readymag.send",s),this.sendFacebookPixelEvent(o.action,o)}},trackPage:function(e){if(window.ga&&(!RM.constructorRouter||!RM.constructorRouter.previewMode)){var t=this._extendParams(e);if(t.hitType="pageview",t.page!==this.lastTrackedUrl){this.lastTrackedUrl=t.page;var a={page:t.page,location:t.href,dimension1:t.dims.pageType,dimension3:t.dims.subscription,screenName:t.screenName,hitCallback:t.cb||void 0};t.dims.userId&&(a.dimension2=t.dims.userId),this._rmdata&&(a.dimension4=this._rmdata.dimension,a.dimension5=this._rmdata.first_campaign,a.dimension6=this._rmdata.first_medium);var r=this._getUserParam("blurb_reference_date"),i=this._getUserParam("stripe");r&&(i?"canceled"===i.subscription_status?a.dimension8="Cancelled":/_/g.test(i.subscription_id)&&(a.dimension8="Customer-"+i.subscription_id.split("_")[1]):a.dimension8="New user");var n=this.getABTestingValue();n&&(a.dimension10=n),window.ga("readymag.send","pageview",a),this.sendFacebookPixelEvent("PageView")}}},_initCurrentData:function(){var e={userId:null};window.ServerData.me&&(e.userId=window.ServerData.me._id||window.ServerData.me.user&&window.ServerData.me.user._id,e.userEmail=window.ServerData.me.email||window.ServerData.me.user&&window.ServerData.me.user.email,e.userFullName=window.ServerData.me.name||window.ServerData.me.user&&window.ServerData.me.user.name,e.subscription=this._getSubscription(),e.gacid=window.ServerData.me.user&&window.ServerData.me.user.gacid);var t=d.default.getCookie("_rmdata");t&&(this._rmdata=JSON.parse(atob(t)));var a=this._getUserParam("blurb_reference_date"),r=this._getUserParam("createDate");return a&&r&&(e.blurbUserCreationDate="blurb-"+m()(new Date(r),"yyyymmdd")),e},_getSubscription:function(){var e=window.ServerData.me.stripe&&window.ServerData.me.stripe.subscription_id||window.ServerData.me.user&&window.ServerData.me.user.stripe&&window.ServerData.me.user.stripe.subscription_id,t="",a="",r="";return e&&"none"!==e.toLowerCase()?((e=e.toLowerCase())&&/yearly/g.test(e)?r="yearly":e&&/monthly/g.test(e)&&(r="monthly"),a=(a=(a=(a=(a=(a=e).replace(/ /g,"")).replace(/_/g,"")).replace(/(yearly|monthly)/g,"")).replace(/plan/g,"")).trim(),t="paid"):(t="free",a=""),(t+" "+a+" "+r).trim()},_parseDimensions:function(e){var t={magId:e.magId||l,pageType:e.pageType||g,userId:e.userId||p};return e.magCreatorId&&(t.magCreatorId=e.magCreatorId),RM.constructorRouter&&!RM.constructorRouter.isOwner&&(t.pageType="constructor shared"),t.subscription=this.currentData.subscription||"free",t},_correctUrl:function(e){return"/"===e?e:"/"===e[e.length-1]?e.substr(0,e.length-1):e},_extendParams:function(e){var t=e||{};return t.dims=this.router.getAnalyticsDimensions&&this._parseDimensions(this.router.getAnalyticsDimensions()),t.page||(t.page="/"+o.a.history.getFragment()),-1!==t.page.indexOf("?")&&(t.page=t.page.substr(0,t.page.indexOf("?"))),t.page=this._correctUrl(t.page),t.href=window.location.href,t.action&&(t.category=this.getActionCategory(t.action)),t.label&&(t.label=t.label.toString()),t.screenName=this._setScreenName(),t},_saveLoginData:function(){var e=d.default.getCookie("send_join_event");if(e){e=JSON.parse(atob(e));var t=(new Date).valueOf(),a=d.default.getCookie("_rmdata");a=a?JSON.parse(atob(a)):{};var r={timestamp:t};d.default.sendFacebookPixelEvent(s.c.FacebookTrackingEvents.Join,{value:2,currency:"USD"}),d.default.trackTwitterConversion(s.c.TwitterTrackingEvents.Join),d.default.trackPinterestConversion(s.c.PinterestTrackingEvents.Join),i.a.extend(r,e,a),this._updateAnalyticsData(r),d.default.deleteCookie("send_join_event"),d.default.deleteCookie("_rmdata")}else d.default.deleteCookie("_rmdata")},_updateAnalyticsData:function(e){c.a.post("/api/me/analytics",{analytics_data:e})},_setScreenName:function(){var e;return RM.constructorRouter&&RM.constructorRouter.previewMode&&(e="Preview "+RM.constructorRouter.mag.get("num_id")),RM.constructorRouter&&!RM.constructorRouter.previewMode&&(e="Constructor "+RM.constructorRouter.mag.get("num_id")),RM.collectorRouter&&"shared-folder"!==RM.collectorRouter.currentView.mode&&(e="Profile ‘"+RM.collectorRouter.currentView.user.get("name")+"’"),RM.collectorRouter&&"shared-folder"===RM.collectorRouter.currentView.mode&&(e="Profile (shared folder) ‘"+RM.collectorRouter.currentView.user.get("name")+"’"),e},_getUserParam:function(e){return(this.router&&this.router.me&&this.router.me.attributes||{})[e]},getActionCategory:function(e){var t="";switch(e){case"Joined":case"Subscribed":case"Subscribe Error":case"Resumed Subscription":case"Changed Subscription":case"Coupon Applied":case"Cancelled Subscription":case"Cancelled Autorenew":t="Basic User Actions";break;case"Customer New":case"Customer":case"User (free)":t="Status of the day";break;case"Manage Subscription":case"Submit To Explore":case"Explore Tab Click":t="Homepage Actions";break;case"Animation Type Change":case"Animation Add Type":case"Animation Use Preset":case"Animation Choose Effect":case"Animation Trigger Click":case"Font Selector Show":case"Font Selector Switch to Category":case"Font Selector Show Custom Font Panel":case"Font Explorer Add/Remove from Library":case"Font Selector Edit List":case"Font Selector Custom Font Panel Select Weight":case"Font Selector Custom Font Panel Upload Weight":case"Font Selector Edit Custom Font":case"Create Mag Request":case"Create Mag":case"Publish Mag":case"Republish Mag":case"Unpublish Mag":case"Create Widget":case"Create Page":case"Page SEO Open":case"Page Sharing Open":case"Page Restored":case"Restore Defaults Sharing":case"Master Page Sharing":case"Help Open":case"Constructor Help Open":case"Code Editor Open":case"Code Editor Switch Tab":case"Code Editor Update":case"Code Editor Clear Switcher":case"Code Editor Use Iframe Switcher":case"Add Team Member":case"Delete Team Member":case"Picture Scale":case"Background Widget Type":case"Viewer Type Toggle":case"Viewer Options Toggle":case"Viewer Settings Learn More Click":case"Project Visible to Search Engines":case"Password Toggle":case"Set Project Password":case"Project Visibile to Visitors":case"Form Storage Connect Click":case"Form Storage Set Endpoint Param":case"Form Storage Successful OAuth Result":case"Map Domain":case"SSL Toggle":case"PDF Export":case"HTML Export":case"Set Project GA":case"Set Project GTM":case"GA Upgrade":case"Key Press":case"Restore to published":case"Picture Settings":case"Stripe":case"Viewports":case"Restore Layout":default:t="Process Actions"}return t}},h={sendFacebookPixelEvent:d.default.sendFacebookPixelEvent.bind(void 0),getABTestingValue:function(){return{a:"OLD",b:"NEW"}[d.default.getCookie("_rm_ab_group")]}},v=a("3eHG"),_="other",f=null,b={initialize:function(e){i.a.bindAll(this),i.a.extend(this,e),this.router||(this.router=RM.viewerRouter||RM.homepageRouter||RM.collectorRouter),this.lastTrackedUrl="",this.shortlink_redirect=d.default.getCookie("shortlink_redirect"),this._saveFirstInteraction(),RM.common.readymagTracker&&d.default.loadLoggedUser(i.a.bind((function(e){!i.a.isEmpty(e)&&window.ga&&(window.ga&&window.ga("readymag.set","&uid",e._id),this.userId=e._id)}),this)),Object(c.a)(i.a.bind((function(){this.trackPage()}),this))},sendEvent:function(e,t,a,r){if(window.ga||window.gtag){var n={action:e};i.a.isObject(t)?n=i.a.extend(n,t):(n.label=t||void 0,n.value=a||void 0);var o=this._extendParams(n);o.label&&"string"==typeof o.label&&o.label.match(/enterprise/)&&(o.label=o.label.replace(/enterprise/,"custom"));var s={hitType:"event",eventCategory:o.category,eventAction:o.action,eventLabel:o.label,eventValue:o.value,page:o.page,location:o.href,screenName:o.screenName,hitCallback:r||o.cb||void 0};if(RM.common.readymagTracker){s.dimension1=o.dims&&o.dims.pageType,o.dims&&o.dims.userId&&(s.dimension2=o.dims.userId),s.dimension3=null,this._rmdata&&(s.dimension4=this._rmdata.dimension,s.dimension5=this._rmdata.first_campaign,s.dimension6=this._rmdata.first_medium);var c=this.getABTestingValue();c&&(s.dimension10=c),window.ga("readymag.send",s)}return RM.common.userTracker&&"Project Actions"===o.category&&window.gtag("event",s.eventAction,{event_category:s.eventCategory,event_label:s.eventLabel,value:s.eventValue}),RM.common.isDomainViewer||this.sendFacebookPixelEvent(o.action,o),s}},trackPage:function(e){if(window.ga){var t=this._extendParams(e);if(this.shortlink_redirect&&(t=i.a.extend(t,this._processRedirectUTM())),t.page!==this.lastTrackedUrl||RM.common.homepageRewrite){this.lastTrackedUrl=t.page;var a={page:t.page,location:t.href,screenName:t.screenName,campaignName:t.campaignName,campaignSource:t.campaignSource,campaignMedium:t.campaignMedium,hitCallback:t.cb||void 0};if(RM.common.readymagTracker){a.dimension1=t.dims&&t.dims.pageType,t.dims&&t.dims.userId&&(a.dimension2=t.dims.userId),a.dimension3=null,a.metric1=t.countProjectView,this._rmdata&&(a.dimension4=this._rmdata.dimension,a.dimension5=this._rmdata.first_campaign,a.dimension6=this._rmdata.first_medium);var r=this.getABTestingValue();r&&(a.dimension10=r),window.ga("readymag.send","pageview",a)}return RM.common.userTracker&&window.ga("t0.send","pageview",a),RM.common.isDomainViewer||this.sendFacebookPixelEvent("PageView"),a}}},_extendParams:function(e){var t=e||{};return RM.common.isDownloadedSource||RM.common.homepageRewrite||(t.dims=this.router.getAnalyticsDimensions&&this._parseDimensions(this.router.getAnalyticsDimensions())),this.userId&&t.dims&&(t.dims.userId=this.userId),t.page||RM.common.isDownloadedSource||RM.common.homepageRewrite?t.page||!RM.common.isDownloadedSource||RM.common.homepageRewrite||(t.page=o.a.history.location.pathname):t.page="/"+o.a.history.getFragment(),t.page&&-1!==t.page.indexOf("?")&&(t.page=t.page.substr(0,t.page.indexOf("?"))),t.page=this._correctUrl(t.page||""),t.href=window.location.href,t.action&&!t.category&&(t.category=this.getActionCategory(t.action)),this._triggerProjectView&&!t.action&&(t.countProjectView=1,this._triggerProjectView=!1),t.screenName=this._setScreenName(),t},_correctUrl:function(e){return"/"===e?e:"/"===e[e.length-1]?e.substr(0,e.length-1):e},_setScreenName:function(){var e;return RM.viewerRouter&&RM.viewerRouter.mag&&RM.viewerRouter.magPasswordView&&RM.viewerRouter.mag.is_private&&(e="Private project "+RM.viewerRouter.mag.num_id),RM.viewerRouter&&RM.viewerRouter.mag&&!RM.viewerRouter.mag.is_private&&(e=RM.viewerRouter.mag.title),e},_parseDimensions:function(e){return{pageType:e.pageType||_,userId:e.userId,subscription:e.subscription||f}},_processRedirectUTM:function(){if(this.shortlink_redirect){var e=JSON.parse(atob(this.shortlink_redirect));return d.default.deleteCookie("shortlink_redirect"),{campaignName:e.utm_campaign,campaignSource:e.utm_source,campaignMedium:e.utm_medium}}},_saveFirstInteraction:function(){var e=this;if(Boolean(d.default.getCookie("_rm_uid")))d.default.deleteCookie("_rmdata");else{var t=d.default.getCookie("_rmdata");t?this._rmdata=JSON.parse(atob(t)):v.a.waitForCookieConsent().then((function(t){if(t.statistics){var a=document.referrer||"direct",r=encodeURI(window.location.href),i=d.default.queryUrlGetParam("utm_campaign"),n=d.default.queryUrlGetParam("utm_source"),o=d.default.queryUrlGetParam("utm_medium"),s={dimension:[i,n,o,a,r].join("|"),first_medium:o,first_campaign:i,first_source:n,rm_url:r,rm_referrer:a},c=btoa(JSON.stringify(s));e._rmdata=s,d.default.createCookie("_rmdata",c)}}))}},getActionCategory:function(e){return RM.homepageRouter?"Homepage Actions":"First Widget Pack Loaded"===e?"Performance":"Project Actions"}};if(location.origin===s.c.readymag_auth_host&&w?r=o.a.Model.extend(i.a.extend(i.a.extend({},w),h)):b?r=o.a.Model.extend(i.a.extend(i.a.extend({},b),h)):console.error("Analytics initialization error!"),window.RM&&window.RM.customAnalyticsHandlers&&!i.a.isEmpty(window.RM.customAnalyticsHandlers.event)){var R=r.prototype.sendEvent;r.prototype.sendEvent=function(){if(window.ga){var e=R.apply(this,arguments);return window.RM.customAnalyticsHandlers&&i.a.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("event",e),e}}}if(window.RM&&window.RM.customAnalyticsHandlers&&!i.a.isEmpty(window.RM.customAnalyticsHandlers.track)){var y=r.prototype.trackPage;r.prototype.trackPage=function(){if(window.ga){var e=y.apply(this,arguments);return e&&window.RM.customAnalyticsHandlers&&i.a.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("track",e),e}}}t.default=r}}]);