(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[19],{715:function(e,t,a){"use strict";var i=a(341),r={sendFacebookPixelEvent:i.default.sendFacebookPixelEvent.bind(void 0),getABTestingValue:function(){return{a:"OLD",b:"NEW"}[i.default.getCookie("_rm_ab_group")]}};t.Z=r},712:function(e,t,a){"use strict";a.r(t);var i=a(322),r=a(337),n=a.n(r),o=a(308),s=a(713),c=a(715),d=a(716),m={},u={setCustomDimensions:function(e){m=e},getCustomDimensions:function(){return m||{}}};if(location.origin===o.ZP.readymag_auth_host&&s.Z?u=n().Model.extend(i.Z.extend(i.Z.extend(u,s.Z),c.Z)):d.Z?u=n().Model.extend(i.Z.extend(i.Z.extend(u,d.Z),c.Z)):console.error("Analytics initialization error!"),window.RM&&window.RM.customAnalyticsHandlers&&!i.Z.isEmpty(window.RM.customAnalyticsHandlers.event)){var l=u.prototype.sendEvent;u.prototype.sendEvent=function(){if(window.ga){var e=l.apply(this,arguments);return window.RM.customAnalyticsHandlers&&i.Z.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("event",e),e}}}if(window.RM&&window.RM.customAnalyticsHandlers&&!i.Z.isEmpty(window.RM.customAnalyticsHandlers.track)){var g=u.prototype.trackPage;u.prototype.trackPage=function(){if(window.ga){var e=g.apply(this,arguments);return e&&window.RM.customAnalyticsHandlers&&i.Z.isFunction(window.RM.customAnalyticsHandlers.run)&&window.RM.customAnalyticsHandlers.run("track",e),e}}}t.default=u},716:function(e,t,a){"use strict";var i=a(337),r=a.n(i),n=a(322),o=(a(313),a(341)),s=a(342),c=a(309),d="other",m=null,u={initialize:function(e){n.Z.bindAll(this),n.Z.extend(this,e),(0,c._)("viewer.reactEntrypoint")||this.router||(this.router=RM.viewerRouter||RM.homepageRouter||RM.collectorRouter),this.lastTrackedUrl="",this.shortlink_redirect=o.default.getCookie("shortlink_redirect"),this.initialTracking(),RM.common.readymagTracker&&o.default.loadLoggedUser(n.Z.bind((function(e){!n.Z.isEmpty(e)&&window.ga&&(window.ga&&window.ga("readymag.set","&uid",e._id),this.userId=e._id)}),this))},setClientIdFromCookie:function(){var e=o.default.getCookie("_ga");if(e){var t=e.match(/GA[0-9]+\.[0-9]+\.(.*)/),a=t.length>1?t[1]:void 0;a&&window.gtag("set",{client_id:a})}},sendEvent:function(e,t,a,i){if(window.gtag){if(!RM.common.isDomainViewer){var r=window.ServerData&&!window.ServerData.isCountryInEU&&window.Cookiebot&&!window.Cookiebot.declined,o=window.Cookiebot&&window.Cookiebot.consent.statistics;if(window.ServerData&&window.ServerData.isCountryInEU){if(!o&&!RM.common.isDomainViewer)return}else if(!r&&!RM.common.isDomainViewer)return}this.setClientIdFromCookie();var s={action:e};n.Z.isObject(t)?s=n.Z.extend(s,t):(s.label=t||void 0,s.value=a||void 0);var c=this._extendParams(s);c.label&&"string"==typeof c.label&&c.label.match(/enterprise/)&&(c.label=c.label.replace(/enterprise/,"custom"));var d={hitType:"event",eventCategory:c.category,eventAction:c.action,eventLabel:c.label,eventValue:c.value,page:c.page,location:c.href,screenName:c.screenName,hitCallback:i||c.cb||void 0};if(RM.common.readymagTracker){d.dimension1=c.dims&&c.dims.pageType,c.dims&&c.dims.userId&&(d.dimension2=c.dims.userId),d.dimension3=null,this._rmdata&&(d.dimension4=this._rmdata.dimension,d.dimension5=this._rmdata.first_campaign,d.dimension6=this._rmdata.first_medium);var m=this.getABTestingValue();m&&(d.dimension10=m),window.gtag("event",d.eventAction,{event_category:d.eventCategory,event_label:d.eventLabel,pageType:c.dims&&c.dims.pageType,userId:c.dims&&c.dims.userId,dimension:this._rmdata&&this._rmdata.dimension,firstCampaign:this._rmdata&&this._rmdata.first_campaign,firstMedium:this._rmdata&&this._rmdata.first_medium,abTestingValue:this.getABTestingValue(),campaign:{name:this._rmdata&&this._rmdata.first_campaign,source:this._rmdata&&this._rmdata.first_source,medium:this._rmdata&&this._rmdata.first_medium}})}return RM.common.userTracker&&"Project Actions"===c.category&&window.gtag("event",d.eventAction,{event_category:d.eventCategory,event_label:d.eventLabel,value:d.eventValue}),RM.common.readymagTracker&&this.sendFacebookPixelEvent(c.action,c),d}},trackPage:function(e){if(window.gtag){this.setClientIdFromCookie();var t=this._extendParams(e);if(this.shortlink_redirect&&(t=n.Z.extend(t,this._processRedirectUTM())),t.page!==this.lastTrackedUrl||RM.common.homepageRewrite){this.lastTrackedUrl=t.page;var a={page:t.page,location:t.href,screenName:t.screenName,campaignName:t.campaignName,campaignSource:t.campaignSource,campaignMedium:t.campaignMedium,hitCallback:t.cb||void 0};if(RM.common.readymagTracker){a.dimension1=t.dims&&t.dims.pageType,t.dims&&t.dims.userId&&(a.dimension2=t.dims.userId),a.dimension3=null,a.metric1=t.countProjectView,this._rmdata&&(a.dimension4=this._rmdata.dimension,a.dimension5=this._rmdata.first_campaign,a.dimension6=this._rmdata.first_medium);var i=this.getABTestingValue();i&&(a.dimension10=i),window.gtag("event","page_view",{page_title:window.document.title,page_location:t.location,pageType:t.dims&&t.dims.pageType,userId:t.dims&&t.dims.userId,dimension:this._rmdata&&this._rmdata.dimension,firstCampaign:this._rmdata&&this._rmdata.first_campaign,firstMedium:this._rmdata&&this._rmdata.first_medium,abTestingValue:this.getABTestingValue(),campaign:{name:this._rmdata&&this._rmdata.first_campaign,source:this._rmdata&&this._rmdata.first_source,medium:this._rmdata&&this._rmdata.first_medium}})}return RM.common.userTracker&&window.gtag("event","page_view",{page_title:window.document.title,page_location:t.location}),RM.common.readymagTracker&&this.sendFacebookPixelEvent("PageView"),a}}},_extendParams:function(e){var t=e||{};return RM.common.isDownloadedSource||RM.common.homepageRewrite||((0,c._)("viewer.reactEntrypoint")?t.dims=this._parseDimensions(this.getCustomDimensions()):t.dims=this.router.getAnalyticsDimensions&&this._parseDimensions(this.router.getAnalyticsDimensions())),this.userId&&t.dims&&(t.dims.userId=this.userId),t.page||RM.common.isDownloadedSource||RM.common.homepageRewrite?t.page||!RM.common.isDownloadedSource||RM.common.homepageRewrite||(t.page=r().history.location.pathname):t.page="/"+r().history.getFragment(),t.page&&-1!==t.page.indexOf("?")&&(t.page=t.page.substr(0,t.page.indexOf("?"))),t.page=this._correctUrl(t.page||""),t.href=window.location.href,t.action&&!t.category&&(t.category=this.getActionCategory(t.action)),this._triggerProjectView&&!t.action&&(t.countProjectView=1,this._triggerProjectView=!1),t.screenName=this._setScreenName(),t},_correctUrl:function(e){return"/"===e?e:"/"===e[e.length-1]?e.substr(0,e.length-1):e},_setScreenName:function(){var e;return RM.viewerRouter&&RM.viewerRouter.mag&&RM.viewerRouter.magPasswordView&&RM.viewerRouter.mag.is_private&&(e="Private project "+RM.viewerRouter.mag.num_id),RM.viewerRouter&&RM.viewerRouter.mag&&!RM.viewerRouter.mag.is_private&&(e=RM.viewerRouter.mag.title),e},_parseDimensions:function(e){return{pageType:e.pageType||d,userId:e.userId,subscription:e.subscription||m}},_processRedirectUTM:function(){if(this.shortlink_redirect){var e=JSON.parse(atob(this.shortlink_redirect));return o.default.deleteCookie("shortlink_redirect"),{campaignName:e.utm_campaign,campaignSource:e.utm_source,campaignMedium:e.utm_medium}}},initialTracking:function(){var e=this;this._rmdata=o.default.createRmDataCookie(),RM.common.isDomainViewer?this.trackPage():s.Z.waitForCookieConsent().then((function(t){t.statistics?e.trackPage():o.default.deleteCookie("_rmdata")}))},getActionCategory:function(e){return RM.homepageRouter?"Homepage Actions":"First Widget Pack Loaded"===e?"Performance":"Project Actions"}};t.Z=u},713:function(e,t,a){"use strict";var i=a(313),r=a(337),n=a.n(r),o=a(322),s=a(341),c=a(308),d=a(714),m=a.n(d),u="other",l="free",g="none|direct|none|none|none",p={initialize:function(e){if(o.Z.bindAll(this),o.Z.extend(this,e),this.currentData=this._initCurrentData(),this.router||(this.router=RM.collectorRouter||RM.constructorRouter),this.currentData.userId&&!RM.common.isDownloadedSource){var t=this.currentData.userId;window.ga("readymag.set","&uid",t),window.ga("readymag.set","&cd2",t),window.ga("readymag.set","&cd9",t),window.ga("readymag.set","&cd11",this.currentData.subscription&&"free"===this.currentData.subscription?"NO":"SI");var a=this.getABTestingValue();a&&window.ga("readymag.set","&cd10",a),window.ga("readymag.set","&cd13",this.currentData.gacid)}this.currentData.blurbUserCreationDate&&window.ga("readymag.set","&cd7",this.currentData.blurbUserCreationDate),RM.common.isDownloadedSource||(0,i.Z)(this._saveLoginData),this.lastTrackedUrl="",(0,i.Z)(o.Z.bind((function(){this.initialTracking()}),this))},initialTracking:function(){var e=s.default.getCookie("join_button_clicked");this.trackPage(),e&&this.sendEvent("Joined",void 0,void 0,(function(){s.default.deleteCookie("join_button_clicked")}))},sendEvent:function(e,t,a,i){if(window.ga&&(!RM.constructorRouter||!RM.constructorRouter.previewMode)){var r={action:e};o.Z.isObject(t)?r=o.Z.extend(r,t):(r.label=t||void 0,r.value=a||void 0);var n=this._extendParams(r);n.label&&"string"==typeof n.label&&n.label.match(/enterprise/)&&(n.label=n.label.replace(/enterprise/,"custom"));var s={hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,page:n.page,dimension1:n.dims.pageType,dimension3:n.dims.subscription,screenName:n.screenName,location:n.href,hitCallback:i||n.cb||void 0};this._rmdata&&(s.dimension4=this._rmdata.dimension,s.dimension5=this._rmdata.first_campaign,s.dimension6=this._rmdata.first_medium,s.campaignName=this._rmdata.first_campaign,s.campaignSource=this._rmdata.first_source,s.campaignMedium=this._rmdata.first_medium),window.ga("readymag.send",s),this.sendFacebookPixelEvent(n.action,n)}},trackPage:function(e){if(window.ga&&!(RM.constructorRouter&&RM.constructorRouter.previewMode||o.Z.has(RM.common.disableShortcuts,"help-tour"))){var t=this._extendParams(e);if(t.hitType="pageview",t.page!==this.lastTrackedUrl){this.lastTrackedUrl=t.page;var a={page:t.page,location:t.href,dimension1:t.dims.pageType,dimension3:t.dims.subscription,screenName:t.screenName,hitCallback:t.cb||void 0};t.dims.userId&&(a.dimension2=t.dims.userId),this._rmdata&&(a.dimension4=this._rmdata.dimension,a.dimension5=this._rmdata.first_campaign,a.dimension6=this._rmdata.first_medium,a.campaignName=this._rmdata.first_campaign,a.campaignSource=this._rmdata.first_source,a.campaignMedium=this._rmdata.first_medium);var i=this._getUserParam("blurb_reference_date"),r=this._getUserParam("stripe");i&&(r?"canceled"===r.subscription_status?a.dimension8="Cancelled":/_/g.test(r.subscription_id)&&(a.dimension8="Customer-"+r.subscription_id.split("_")[1]):a.dimension8="New user"),window.ga("readymag.send","pageview",a),this.sendFacebookPixelEvent("PageView")}}},_initCurrentData:function(){var e={userId:null};window.ServerData.me&&(e.userId=window.ServerData.me._id||window.ServerData.me.user&&window.ServerData.me.user._id,e.userEmail=window.ServerData.me.email||window.ServerData.me.user&&window.ServerData.me.user.email,e.userFullName=window.ServerData.me.name||window.ServerData.me.user&&window.ServerData.me.user.name,e.subscription=this._getSubscription()),e.gacid=s.default.getGAcid();var t=s.default.getCookie("_rmdata");t&&(this._rmdata=JSON.parse(atob(t)));var a=this._getUserParam("blurb_reference_date"),i=this._getUserParam("createDate");return a&&i&&(e.blurbUserCreationDate="blurb-"+m()(new Date(i),"yyyymmdd")),e},_getSubscription:function(){var e=window.ServerData.me.stripe&&window.ServerData.me.stripe.subscription_id||window.ServerData.me.user&&window.ServerData.me.user.stripe&&window.ServerData.me.user.stripe.subscription_id,t="",a="",i="";return e&&"none"!==e.toLowerCase()?((e=e.toLowerCase())&&/yearly/g.test(e)?i="yearly":e&&/monthly/g.test(e)&&(i="monthly"),a=(a=(a=(a=(a=(a=e).replace(/ /g,"")).replace(/_/g,"")).replace(/(yearly|monthly)/g,"")).replace(/plan/g,"")).trim(),t="paid"):(t="free",a=""),(t+" "+a+" "+i).trim()},_parseDimensions:function(e){var t={magId:e.magId||u,pageType:e.pageType||l,userId:e.userId||g};return e.magCreatorId&&(t.magCreatorId=e.magCreatorId),RM.constructorRouter&&!RM.constructorRouter.isOwner&&(t.pageType="constructor shared"),t.subscription=this.currentData.subscription||"free",t},_correctUrl:function(e){return"/"===e?e:"/"===e[e.length-1]?e.substr(0,e.length-1):e},_extendParams:function(e){var t=e||{};return t.dims=this.router.getAnalyticsDimensions&&this._parseDimensions(this.router.getAnalyticsDimensions()),t.page||(t.page="/"+n().history.getFragment()),-1!==t.page.indexOf("?")&&(t.page=t.page.substr(0,t.page.indexOf("?"))),t.page=this._correctUrl(t.page),t.href=window.location.href,t.action&&(t.category=t.customCategory||this.getActionCategory(t.action)),t.label&&(t.label=t.label.toString()),t.screenName=this._setScreenName(),t},_saveLoginData:function(){var e=s.default.getCookie("send_join_event");if(e){e=JSON.parse(atob(e));var t=(new Date).valueOf(),a=s.default.getCookie("_rmdata");a=a?JSON.parse(atob(a)):{};var i={timestamp:t};s.default.sendFacebookPixelEvent(c.ZP.FacebookTrackingEvents.Join,{value:2,currency:"USD"}),s.default.trackTwitterConversion(c.ZP.TwitterTrackingEvents.Join),s.default.trackPinterestConversion(c.ZP.PinterestTrackingEvents.Join),o.Z.extend(i,e,a),this._updateAnalyticsData(i),s.default.deleteCookie("send_join_event")}},_updateAnalyticsData:function(e){i.Z.post("/api/me/analytics",{analytics_data:e})},_setScreenName:function(){var e;return RM.constructorRouter&&RM.constructorRouter.previewMode&&(e="Preview "+RM.constructorRouter.mag.get("num_id")),RM.constructorRouter&&!RM.constructorRouter.previewMode&&(e="Constructor "+RM.constructorRouter.mag.get("num_id")),RM.collectorRouter&&"shared-folder"!==RM.collectorRouter.currentView.mode&&(e="Profile ‘"+RM.collectorRouter.currentView.user.get("name")+"’"),RM.collectorRouter&&"shared-folder"===RM.collectorRouter.currentView.mode&&(e="Profile (shared folder) ‘"+RM.collectorRouter.currentView.user.get("name")+"’"),e},_getUserParam:function(e){return(this.router&&this.router.me&&this.router.me.attributes||{})[e]},getActionCategory:function(e){var t="";switch(e){case"Joined":case"Subscribed":case"Subscribe Error":case"Resumed Subscription":case"Changed Subscription":case"Coupon Applied":case"Cancelled Subscription":case"Cancelled Autorenew":t="Basic User Actions";break;case"Customer New":case"Customer":case"User (free)":t="Status of the day";break;case"Manage Subscription":case"Submit To Explore":case"Explore Tab Click":t="Homepage Actions";break;case"Animation Type Change":case"Animation Add Type":case"Animation Use Preset":case"Animation Choose Effect":case"Animation Trigger Click":case"Font Selector Show":case"Font Selector Switch to Category":case"Font Selector Show Custom Font Panel":case"Font Explorer Add/Remove from Library":case"Font Selector Edit List":case"Font Selector Custom Font Panel Select Weight":case"Font Selector Custom Font Panel Upload Weight":case"Font Selector Edit Custom Font":case"Create Mag Request":case"Create Mag":case"Publish Mag":case"Republish Mag":case"Unpublish Mag":case"Create Widget":case"Create Page":case"Page SEO Open":case"Page Sharing Open":case"Page Restored":case"Restore Defaults Sharing":case"Master Page Sharing":case"Help Open":case"Constructor Help Open":case"Code Editor Open":case"Code Editor Switch Tab":case"Code Editor Update":case"Code Editor Clear Switcher":case"Code Editor Use Iframe Switcher":case"Add Team Member":case"Delete Team Member":case"Picture Scale":case"Background Widget Type":case"Viewer Type Toggle":case"Viewer Options Toggle":case"Viewer Settings Learn More Click":case"Project Visible to Search Engines":case"Password Toggle":case"Set Project Password":case"Project Visibile to Visitors":case"Form Storage Connect Click":case"Form Storage Set Endpoint Param":case"Form Storage Successful OAuth Result":case"Map Domain":case"SSL Toggle":case"PDF Export":case"HTML Export":case"Set Project GA":case"Set Project GTM":case"GA Upgrade":case"Key Press":case"Restore to published":case"Picture Settings":case"Stripe":case"Viewports":case"Restore Layout":default:t="Process Actions"}return t}};t.Z=p}}]);