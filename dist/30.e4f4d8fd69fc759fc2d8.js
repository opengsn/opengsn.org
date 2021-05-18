/*! For license information please see 30.e4f4d8fd69fc759fc2d8.js.LICENSE.txt */
(self.webpackChunkrm_frontend=self.webpackChunkrm_frontend||[]).push([[30],{876:function(t){var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=e},875:function(t){var e,r;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],o=0;o<4;o++)8*n+6*o<=8*t.length?r.push(e.charAt(i>>>6*(3-o)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(n))>>>6-2*i);return r}},t.exports=r},882:function(t,e,r){var n=r(881),i=r(883);r(884);function o(t){return null==t}function a(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onAttr,a=e.onIgnoreAttr,s=e.safeAttrValue;return i(t,(function(t,e,i,l,c){var u=r[i],f=!1;if(!0===u?f=u:"function"==typeof u?f=u(l):u instanceof RegExp&&(f=u.test(l)),!0!==f&&(f=!1),l=s(i,l)){var g,p={position:e,sourcePosition:t,source:c,isWhite:f};return f?o(g=n(i,l,p))?i+":"+l:g:o(g=a(i,l,p))?void 0:g}}))},t.exports=a},881:function(t,e){function r(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;e.whiteList=r(),e.getDefaultWhiteList=r,e.onAttr=function(t,e,r){},e.onIgnoreAttr=function(t,e,r){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},880:function(t,e,r){var n=r(881),i=r(882);for(var o in(e=t.exports=function(t,e){return new i(e).process(t)}).FilterCSS=i,n)e[o]=n[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},883:function(t,e,r){var n=r(884);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,i=!1,o=0,a=0,s="";function l(){if(!i){var r=n.trim(t.slice(o,a)),l=r.indexOf(":");if(-1!==l){var c=n.trim(r.slice(0,l)),u=n.trim(r.slice(l+1));if(c){var f=e(o,s.length,c,u,r);f&&(s+=f+"; ")}}}o=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;o=(a=u+1)+1,i=!1}else"("===c?i=!0:")"===c?i=!1:";"===c?i||l():"\n"===c&&l()}return n.trim(s)}},884:function(t){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},877:function(t){function e(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)}},874:function(t,e,r){var n,i,o,a,s;n=r(875),i=r(876).utf8,o=r(877),a=r(876).bin,(s=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):i.stringToBytes(t):o(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=n.bytesToWords(t),l=8*t.length,c=1732584193,u=-271733879,f=-1732584194,g=271733878,p=0;p<r.length;p++)r[p]=16711935&(r[p]<<8|r[p]>>>24)|4278255360&(r[p]<<24|r[p]>>>8);r[l>>>5]|=128<<l%32,r[14+(l+64>>>9<<4)]=l;var d=s._ff,h=s._gg,m=s._hh,b=s._ii;for(p=0;p<r.length;p+=16){var v=c,y=u,w=f,x=g;c=d(c,u,f,g,r[p+0],7,-680876936),g=d(g,c,u,f,r[p+1],12,-389564586),f=d(f,g,c,u,r[p+2],17,606105819),u=d(u,f,g,c,r[p+3],22,-1044525330),c=d(c,u,f,g,r[p+4],7,-176418897),g=d(g,c,u,f,r[p+5],12,1200080426),f=d(f,g,c,u,r[p+6],17,-1473231341),u=d(u,f,g,c,r[p+7],22,-45705983),c=d(c,u,f,g,r[p+8],7,1770035416),g=d(g,c,u,f,r[p+9],12,-1958414417),f=d(f,g,c,u,r[p+10],17,-42063),u=d(u,f,g,c,r[p+11],22,-1990404162),c=d(c,u,f,g,r[p+12],7,1804603682),g=d(g,c,u,f,r[p+13],12,-40341101),f=d(f,g,c,u,r[p+14],17,-1502002290),c=h(c,u=d(u,f,g,c,r[p+15],22,1236535329),f,g,r[p+1],5,-165796510),g=h(g,c,u,f,r[p+6],9,-1069501632),f=h(f,g,c,u,r[p+11],14,643717713),u=h(u,f,g,c,r[p+0],20,-373897302),c=h(c,u,f,g,r[p+5],5,-701558691),g=h(g,c,u,f,r[p+10],9,38016083),f=h(f,g,c,u,r[p+15],14,-660478335),u=h(u,f,g,c,r[p+4],20,-405537848),c=h(c,u,f,g,r[p+9],5,568446438),g=h(g,c,u,f,r[p+14],9,-1019803690),f=h(f,g,c,u,r[p+3],14,-187363961),u=h(u,f,g,c,r[p+8],20,1163531501),c=h(c,u,f,g,r[p+13],5,-1444681467),g=h(g,c,u,f,r[p+2],9,-51403784),f=h(f,g,c,u,r[p+7],14,1735328473),c=m(c,u=h(u,f,g,c,r[p+12],20,-1926607734),f,g,r[p+5],4,-378558),g=m(g,c,u,f,r[p+8],11,-2022574463),f=m(f,g,c,u,r[p+11],16,1839030562),u=m(u,f,g,c,r[p+14],23,-35309556),c=m(c,u,f,g,r[p+1],4,-1530992060),g=m(g,c,u,f,r[p+4],11,1272893353),f=m(f,g,c,u,r[p+7],16,-155497632),u=m(u,f,g,c,r[p+10],23,-1094730640),c=m(c,u,f,g,r[p+13],4,681279174),g=m(g,c,u,f,r[p+0],11,-358537222),f=m(f,g,c,u,r[p+3],16,-722521979),u=m(u,f,g,c,r[p+6],23,76029189),c=m(c,u,f,g,r[p+9],4,-640364487),g=m(g,c,u,f,r[p+12],11,-421815835),f=m(f,g,c,u,r[p+15],16,530742520),c=b(c,u=m(u,f,g,c,r[p+2],23,-995338651),f,g,r[p+0],6,-198630844),g=b(g,c,u,f,r[p+7],10,1126891415),f=b(f,g,c,u,r[p+14],15,-1416354905),u=b(u,f,g,c,r[p+5],21,-57434055),c=b(c,u,f,g,r[p+12],6,1700485571),g=b(g,c,u,f,r[p+3],10,-1894986606),f=b(f,g,c,u,r[p+10],15,-1051523),u=b(u,f,g,c,r[p+1],21,-2054922799),c=b(c,u,f,g,r[p+8],6,1873313359),g=b(g,c,u,f,r[p+15],10,-30611744),f=b(f,g,c,u,r[p+6],15,-1560198380),u=b(u,f,g,c,r[p+13],21,1309151649),c=b(c,u,f,g,r[p+4],6,-145523070),g=b(g,c,u,f,r[p+11],10,-1120210379),f=b(f,g,c,u,r[p+2],15,718787259),u=b(u,f,g,c,r[p+9],21,-343485551),c=c+v>>>0,u=u+y>>>0,f=f+w>>>0,g=g+x>>>0}return n.endian([c,u,f,g])})._ff=function(t,e,r,n,i,o,a){var s=t+(e&r|~e&n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._gg=function(t,e,r,n,i,o,a){var s=t+(e&n|r&~n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._hh=function(t,e,r,n,i,o,a){var s=t+(e^r^n)+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._ii=function(t,e,r,n,i,o,a){var s=t+(r^(e|~n))+(i>>>0)+a;return(s<<o|s>>>32-o)+e},s._blocksize=16,s._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(s(t,e));return e&&e.asBytes?r:e&&e.asString?a.bytesToString(r):n.bytesToHex(r)}},879:function(t,e,r){var n=r(880).FilterCSS,i=r(880).getDefaultWhiteList,o=r(885);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var s=new n;function l(t){return t.replace(c,"&lt;").replace(u,"&gt;")}var c=/</g,u=/>/g,f=/"/g,g=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,d=/&colon;?/gim,h=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,b=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi;function y(t){return t.replace(f,"&quot;")}function w(t){return t.replace(g,'"')}function x(t){return t.replace(p,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function k(t){return t.replace(d,":").replace(h," ")}function A(t){for(var e="",r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return o.trim(e)}function T(t){return t=A(t=k(t=x(t=w(t))))}function S(t){return t=l(t=y(t))}var I=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=a,e.onTag=function(t,e,r){},e.onIgnoreTag=function(t,e,r){},e.onTagAttr=function(t,e,r){},e.onIgnoreTagAttr=function(t,e,r){},e.safeAttrValue=function(t,e,r,n){if(r=T(r),"href"===e||"src"===e){if("#"===(r=o.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"data:image/"!==r.substr(0,11)&&"ftp://"!==r.substr(0,6)&&"./"!==r.substr(0,2)&&"../"!==r.substr(0,3)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(r))return""}else if("style"===e){if(b.lastIndex=0,b.test(r))return"";if(v.lastIndex=0,v.test(r)&&(m.lastIndex=0,m.test(r)))return"";!1!==n&&(r=(n=n||s).process(r))}return r=S(r)},e.escapeHtml=l,e.escapeQuote=y,e.unescapeQuote=w,e.escapeHtmlEntities=x,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=A,e.friendlyAttrValue=T,e.escapeAttrValue=S,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),n=[],i=!1;return{onIgnoreTag:function(a,s,l){if(function(e){return!!r||-1!==o.indexOf(t,e)}(a)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return n.push([!1!==i?i:l.position,u]),i=!1,c}return i||(i=l.position),"[removed]"}return e(a,s,l)},remove:function(t){var e="",r=0;return o.forEach(n,(function(n){e+=t.slice(r,n[0]),r=n[1]})),e+=t.slice(r)}}},e.stripCommentTag=function(t){return t.replace(I,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")},e.cssFilter=s,e.getDefaultCSSWhiteList=i},878:function(t,e,r){var n=r(879),i=r(886),o=r(887);function a(t,e){return new o(e).process(t)}for(var s in(e=t.exports=a).filterXSS=a,e.FilterXSS=o,n)e[s]=n[s];for(var s in i)e[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},886:function(t,e,r){var n=r(885);function i(t){var e=n.spaceIndex(t);if(-1===e)var r=t.slice(1,-1);else r=t.slice(1,e+1);return"/"===(r=n.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function o(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function l(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function c(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,r){"use strict";var n="",a=0,s=!1,l=!1,c=0,u=t.length,f="",g="";t:for(c=0;c<u;c++){var p=t.charAt(c);if(!1===s){if("<"===p){s=c;continue}}else if(!1===l){if("<"===p){n+=r(t.slice(a,c)),s=c,a=c;continue}if(">"===p){n+=r(t.slice(a,s)),f=i(g=t.slice(s,c+1)),n+=e(s,n.length,f,g,o(g)),a=c+1,s=!1;continue}if('"'===p||"'"===p)for(var d=1,h=t.charAt(c-d);" "===h||"="===h;){if("="===h){l=p;continue t}h=t.charAt(c-++d)}}else if(p===l){l=!1;continue}}return a<t.length&&(n+=r(t.substr(a))),n},e.parseAttr=function(t,e){"use strict";var r=0,i=[],o=!1,u=t.length;function f(t,r){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=e(t,r||"");o&&i.push(o)}}for(var g=0;g<u;g++){var p,d=t.charAt(g);if(!1!==o||"="!==d)if(!1===o||g!==r||'"'!==d&&"'"!==d||"="!==t.charAt(g-1))if(/\s|\n|\t/.test(d)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(p=s(t,g))){f(n.trim(t.slice(r,g))),o=!1,r=g+1;continue}g=p-1;continue}if(-1===(p=l(t,g-1))){f(o,c(n.trim(t.slice(r,g)))),o=!1,r=g+1;continue}}else;else{if(-1===(p=t.indexOf(d,g+1)))break;f(o,n.trim(t.slice(r+1,p))),o=!1,r=(g=p)+1}else o=t.slice(r,g),r=g+1}return r<t.length&&(!1===o?f(t.slice(r)):f(o,c(n.trim(t.slice(r))))),n.trim(i.join(" "))}},885:function(t){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},887:function(t,e,r){var n=r(880).FilterCSS,i=r(879),o=r(886),a=o.parseTag,s=o.parseAttr,l=r(885);function c(t){return null==t}function u(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=i.onIgnoreTagStripAll),t.whiteList=t.whiteList||i.whiteList,t.onTag=t.onTag||i.onTag,t.onTagAttr=t.onTagAttr||i.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||i.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||i.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||i.safeAttrValue,t.escapeHtml=t.escapeHtml||i.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onTag,o=e.onIgnoreTag,u=e.onTagAttr,f=e.onIgnoreTagAttr,g=e.safeAttrValue,p=e.escapeHtml,d=this.cssFilter;e.stripBlankChar&&(t=i.stripBlankChar(t)),e.allowCommentTag||(t=i.stripCommentTag(t));var h=!1;if(e.stripIgnoreTagBody){h=i.StripTagBody(e.stripIgnoreTagBody,o);o=h.onIgnoreTag}var m=a(t,(function(t,e,i,a,h){var m,b={sourcePosition:t,position:e,isClosing:h,isWhite:r.hasOwnProperty(i)};if(!c(m=n(i,a,b)))return m;if(b.isWhite){if(b.isClosing)return"</"+i+">";var v=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=l.trim(t.slice(0,-1))),{html:t,closing:r}}(a),y=r[i],w=s(v.html,(function(t,e){var r,n=-1!==l.indexOf(y,t);return c(r=u(i,t,e,n))?n?(e=g(i,t,e,d))?t+'="'+e+'"':t:c(r=f(i,t,e,n))?void 0:r:r}));a="<"+i;return w&&(a+=" "+w),v.closing&&(a+=" /"),a+=">"}return c(m=o(i,a,b))?p(a):m}),p);return h&&(m=h.remove(m)),m},t.exports=u}}]);