jQuery.webshims.register("dom-extend",function(a,g,f,h,k){var t=g.modules,q=/\s*,\s*/,r={},u={},m={},v={},p={},j=a.fn.val,B=function(e,d,b,c,i){return i?j.call(a(e)):j.call(a(e),b)};a.fn.val=function(e){var d=this[0];arguments.length&&null==e&&(e="");if(!arguments.length)return!d||1!==d.nodeType?j.call(this):a.prop(d,"value",e,"val",!0);if(a.isArray(e))return j.apply(this,arguments);var b=a.isFunction(e);return this.each(function(c){d=this;1===d.nodeType&&(b?(c=e.call(d,c,a.prop(d,"value",k,"val",
!0)),null==c&&(c=""),a.prop(d,"value",c,"val")):a.prop(d,"value",e,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),z=function(e,d,b){e=e.jquery?e[0]:e;if(!e)return b||{};var c=a.data(e,w);b!==k&&(c||(c=a.data(e,w,{})),d&&(c[d]=b));return d?c&&c[d]:c};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){a.fn[e.name]=function(){return this.map(function(){var a=z(this,
"shadowData");return a&&a[e.prop]||this})}});["removeAttr","prop","attr"].forEach(function(e){r[e]=a[e];a[e]=function(d,b,c,i,x){var A="val"==i,l=!A?r[e]:B;if(!d||!u[b]||1!==d.nodeType||!A&&i&&"attr"==e&&a.attrFn[b])return l(d,b,c,i,x);var n=(d.nodeName||"").toLowerCase(),C=m[n],D="attr"==e&&(!1===c||null===c)?"removeAttr":e,j,g,f;C||(C=m["*"]);C&&(C=C[b]);C&&(j=C[D]);if(j){if("value"==b)g=j.isVal,j.isVal=A;if("removeAttr"===D)return j.value.call(d);if(c===k)return j.get?j.get.call(d):j.value;j.set&&
("attr"==e&&!0===c&&(c=b),f=j.set.call(d,c));if("value"==b)j.isVal=g}else f=l(d,b,c,i,x);if((c!==k||"removeAttr"===D)&&p[n]&&p[n][b]){var h;h="removeAttr"==D?!1:"prop"==D?!!c:!0;p[n][b].forEach(function(b){if(!b.only||(b.only="prop"==e)||"attr"==b.only&&"prop"!=e)b.call(d,c,h,A?"val":D,e)})}return f};v[e]=function(d,b,c){m[d]||(m[d]={});m[d][b]||(m[d][b]={});var i=m[d][b][e],x=function(a,l,n){return l&&l[a]?l[a]:n&&n[a]?n[a]:"prop"==e&&"value"==b?function(a){return c.isVal?B(this,b,a,!1,0===arguments.length):
r[e](this,b,a)}:"prop"==e&&"value"==a&&c.value.apply?function(a){var c=r[e](this,b);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return r[e](this,b,a)}};m[d][b][e]=c;if(c.value===k){if(!c.set)c.set=c.writeable?x("set",c,i):g.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+d;}:a.noop;if(!c.get)c.get=x("get",c,i)}["value","get","set"].forEach(function(b){c[b]&&(c["_sup"+b]=x(b,i))})}});var E=!a.browser.msie||8<parseInt(a.browser.version,10),o=function(){var a=g.getPrototypeOf(h.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(b,c,i){var x=h.createElement(b),A=g.getPrototypeOf(x);if(E&&A&&a!==A&&(!x[c]||!d.call(x,c))){var l=x[c];i._supvalue=function(){return l&&l.apply?l.apply(this,arguments):l};A[c]=i.value}else i._supvalue=function(){var b=z(this,"propValue");return b&&b[c]&&b[c].apply?b[c].apply(this,arguments):b&&b[c]},s.extendValue(b,c,i.value);i.value._supvalue=i._supvalue}}(),s=function(){var e={};g.addReady(function(b,c){var d={},l=function(n){d[n]||(d[n]=a(b.getElementsByTagName(n)),
c[0]&&a.nodeName(c[0],n)&&(d[n]=d[n].add(c)))};a.each(e,function(b,a){l(b);!a||!a.forEach?g.warn("Error: with "+b+"-property. methods: "+a):a.forEach(function(a){d[b].each(a)})});d=null});var d,b=a([]),c=function(b,c){e[b]?e[b].push(c):e[b]=[c];a.isDOMReady&&(d||a(h.getElementsByTagName(b))).each(c)};return{createTmpCache:function(c){a.isDOMReady&&(d=d||a(h.getElementsByTagName(c)));return d||b},flushTmpCache:function(){d=null},content:function(b,d){c(b,function(){var b=a.attr(this,d);null!=b&&a.attr(this,
d,b)})},createElement:function(b,a){c(b,a)},extendValue:function(b,d,e){c(b,function(){a(this).each(function(){z(this,"propValue",{})[d]=this[d];this[d]=e})})}}}(),y=function(a,d){if(a.defaultValue===k)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[d||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}};if(!a.attr)a.attr={}};a.extend(g,{getID:function(){var e=(new Date).getTime();return function(d){var d=a(d),b=d.attr("id");b||(e++,b="ID-"+e,d.attr("id",b));
return b}}(),extendUNDEFProp:function(e,d){a.each(d,function(b,a){b in e||(e[b]=a)})},createPropDefault:y,data:z,moveToFirstEvent:function(){var e=a._data?"_data":"data";return function(d,b,c){if((d=(a[e](d,"events")||{})[b])&&1<d.length)b=d.pop(),c||(c="bind"),"bind"==c&&d.delegateCount?d.splice(d.delegateCount,0,b):d.unshift(b)}}(),addShadowDom:function(){var e,d,b,c={init:!1,runs:0,test:function(){var b=c.getHeight(),a=c.getWidth();b!=c.height||a!=c.width?(c.height=b,c.width=a,c.handler({type:"docresize"}),
c.runs++,30>c.runs&&setTimeout(c.test,30)):c.runs=0},handler:function(i){clearTimeout(e);e=setTimeout(function(){if("resize"==i.type){var e=a(f).width(),j=a(f).width();if(j==d&&e==b)return;d=j;b=e;c.height=c.getHeight();c.width=c.getWidth()}a.event.trigger("updateshadowdom")},"resize"==i.type?50:9)},_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(b,a){var d=h.body,l=h.documentElement;c[a]=function(){return Math.max(d["scroll"+b],l["scroll"+b],d["offset"+b],l["offset"+b],l["client"+
b])}})},start:function(){if(!this.init&&h.body)this.init=!0,this._create(),this.height=c.getHeight(),this.width=c.getWidth(),setInterval(this.test,400),a(this.test),a(f).bind("load",this.test),a(f).bind("resize",this.handler),function(){var b=a.fn.animate,d;a.fn.animate=function(){clearTimeout(d);d=setTimeout(function(){c.test();c.handler({type:"animationstart"})},19);return b.apply(this,arguments)}}()}};a.event.customEvent.updateshadowdom=!0;g.docObserve=function(){g.ready("DOM",function(){c.start()})};
return function(b,c,d){d=d||{};b.jquery&&(b=b[0]);c.jquery&&(c=c[0]);var l=a.data(b,w)||a.data(b,w,{}),n=a.data(c,w)||a.data(c,w,{}),e={};if(d.shadowFocusElement){if(d.shadowFocusElement){if(d.shadowFocusElement.jquery)d.shadowFocusElement=d.shadowFocusElement[0];e=a.data(d.shadowFocusElement,w)||a.data(d.shadowFocusElement,w,e)}}else d.shadowFocusElement=c;l.hasShadow=c;e.nativeElement=n.nativeElement=b;e.shadowData=n.shadowData=l.shadowData={nativeElement:b,shadowElement:c,shadowFocusElement:d.shadowFocusElement};
d.shadowChilds&&d.shadowChilds.each(function(){z(this,"shadowData",n.shadowData)});if(d.data)e.shadowData.data=n.shadowData.data=l.shadowData.data=d.data;d=null;g.docObserve()}}(),propTypes:{standard:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,""+d)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){y(a);if(!a.prop)a.prop={set:function(d){d?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}},
src:function(){var e=h.createElement("a");e.style.display="none";return function(d,b){y(d);if(!d.prop)d.prop={set:function(b){d.attr.set.call(this,b)},get:function(){var c=this.getAttribute(b),d;if(null==c)return"";e.setAttribute("href",c+"");if(!a.support.hrefNormalized){try{a(e).insertAfter(this),d=e.getAttribute("href",4)}catch(j){d=e.getAttribute("href",4)}a(e).detach()}return d||e.href}}}}(),enumarated:function(a){y(a);if(!a.prop)a.prop={set:function(d){a.attr.set.call(this,d)},get:function(){var d=
(a.attr.get.call(this)||"").toLowerCase();if(!d||-1==a.limitedTo.indexOf(d))d=a.defaultValue;return d}}}},reflectProperties:function(e,d){"string"==typeof d&&(d=d.split(q));d.forEach(function(b){g.defineNodeNamesProperty(e,b,{prop:{set:function(c){a.attr(this,b,c)},get:function(){return a.attr(this,b)||""}}})})},defineNodeNameProperty:function(e,d,b){u[d]=!0;if(b.reflect)g.propTypes[b.propType||"standard"](b,d);["prop","attr","removeAttr"].forEach(function(c){var i=b[c];i&&(i="prop"===c?a.extend({writeable:!0},
i):a.extend({},i,{writeable:!0}),v[c](e,d,i),"*"!=e&&g.cfg.extendNative&&"prop"==c&&i.value&&a.isFunction(i.value)&&o(e,d,i),b[c]=i)});b.initAttr&&s.content(e,d);return b},defineNodeNameProperties:function(a,d,b,c){for(var i in d)!c&&d[i].initAttr&&s.createTmpCache(a),b&&!d[i][b]&&(d[i][b]={},["value","set","get"].forEach(function(a){a in d[i]&&(d[i][b][a]=d[i][a],delete d[i][a])})),d[i]=g.defineNodeNameProperty(a,i,d[i]);c||s.flushTmpCache();return d},createElement:function(e,d,b){var c;a.isFunction(d)&&
(d={after:d});s.createTmpCache(e);d.before&&s.createElement(e,d.before);b&&(c=g.defineNodeNameProperties(e,b,!1,!0));d.after&&s.createElement(e,d.after);s.flushTmpCache();return c},onNodeNamesPropertyModify:function(e,d,b,c){"string"==typeof e&&(e=e.split(q));a.isFunction(b)&&(b={set:b});e.forEach(function(a){p[a]||(p[a]={});"string"==typeof d&&(d=d.split(q));b.initAttr&&s.createTmpCache(a);d.forEach(function(d){p[a][d]||(p[a][d]=[],u[d]=!0);if(b.set){if(c)b.set.only=c;p[a][d].push(b.set)}b.initAttr&&
s.content(a,d)});s.flushTmpCache()})},defineNodeNamesBooleanProperty:function(e,d,b){b||(b={});if(a.isFunction(b))b.set=b;g.defineNodeNamesProperty(e,d,{attr:{set:function(a){this.setAttribute(d,a);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?k:d}},removeAttr:{value:function(){this.removeAttribute(d);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},contentAttr:function(a,d,b){if(a.nodeName){if(b===k)return a=a.attributes[d]||{},
b=a.specified?a.value:null,null==b?k:b;"boolean"==typeof b?b?a.setAttribute(d,d):a.removeAttribute(d):a.setAttribute(d,b)}},activeLang:function(){var e=[],d={},b,c,i=/:\/\/|^\.*\//,j=function(b,c,d){return c&&d&&-1!==a.inArray(c,d.availabeLangs||[])?(b.loading=!0,d=d.langSrc,i.test(d)||(d=g.cfg.basePath+d),g.loader.loadScript(d+c+".js",function(){b.langObj[c]?(b.loading=!1,l(b,!0)):a(function(){b.langObj[c]&&l(b,!0);b.loading=!1})}),!0):!1},f=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},
l=function(a,d){if(a.activeLang!=b&&a.activeLang!==c){var l=t[a.module].options;if(a.langObj[b]||c&&a.langObj[c])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[c],b),f(a.module);else if(!d&&!j(a,b,l)&&!j(a,c,l)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),f(a.module)}};return function(n){if("string"==typeof n&&n!==b)b=n,c=b.split("-")[0],b==c&&(c=!1),a.each(e,function(a,b){l(b)});else if("object"==typeof n)if(n.register)d[n.register]||(d[n.register]=[]),d[n.register].push(n),
n.callback();else{if(!n.activeLang)n.activeLang="";e.push(n);l(n)}return b}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){g[a]=function(a,c,e,j){"string"==typeof a&&(a=a.split(q));var f={};a.forEach(function(a){f[a]=g[d](a,c,e,j)});return f}});g.isReady("webshimLocalization",!0)});
(function(a,g){var f=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<f)&&(!a.browser.msie||12>f&&7<f)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},k=function(a,g){a.getAttribute("role")||a.setAttribute("role",g)};a.webshims.addReady(function(f,q){a.each(h,function(g,p){for(var j=a(g,f).add(q.filter(g)),B=0,h=j.length;B<h;B++)k(j[B],p)});if(f===g){var r=g.getElementsByTagName("header")[0],u=g.getElementsByTagName("footer"),m=u.length;
r&&!a(r).closest("section, article")[0]&&k(r,"banner");m&&(r=u[m-1],a(r).closest("section, article")[0]||k(r,"contentinfo"))}})}})(jQuery,document);
(function(a,g,f){var h=g.audio&&g.video,k=!1,t=f.cfg.mediaelement,q=f.bugs,r="jwplayer"==t.player?"mediaelement-swf":"mediaelement-jaris",u=function(){f.ready(r,function(){if(!f.mediaelement.createSWF)f.mediaelement.loadSwf=!0,f.reTest([r],h)})},m;if(h){var v=document.createElement("video");g.videoBuffered="buffered"in v;k="loop"in v;f.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));g.videoBuffered||(f.addPolyfill("mediaelement-native-fix",
{f:"mediaelement",test:g.videoBuffered,d:["dom-support"]}),f.reTest("mediaelement-native-fix"))}if(h&&!t.preferFlash){var p=function(j){var g=j.target.parentNode;!t.preferFlash&&(a(j.target).is("audio, video")||g&&a("source:last",g)[0]==j.target)&&f.ready("DOM mediaelement",function(){m&&u();f.ready("WINDOWLOAD "+r,function(){setTimeout(function(){m&&!t.preferFlash&&f.mediaelement.createSWF&&!a(j.target).closest("audio, video").is(".nonnative-api-active")?(t.preferFlash=!0,document.removeEventListener("error",
p,!0),a("audio, video").mediaLoad(),f.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+j.target.src)):m||document.removeEventListener("error",p,!0)},20)})})};document.addEventListener("error",p,!0);a("audio, video").each(function(){this.error&&p({target:this})})}q.track=!1;g.track&&function(){if(!q.track)q.track="number"!=typeof a("<track />")[0].readyState;if(!q.track)try{new TextTrackCue(2,3,"")}catch(j){q.track=!0}var g=f.cfg.track,h=function(j){a(j.target).filter("track").each(p)},
p=function(){if(q.track||!g.override&&3==a.prop(this,"readyState"))g.override=!0,f.reTest("track"),document.removeEventListener("error",h,!0),this&&a.nodeName(this,"track")?f.error("track support was overwritten. Please check your vtt including your vtt mime-type"):f.info("track support was overwritten. due to bad browser support")},k=function(){document.addEventListener("error",h,!0);q.track?p():a("track").each(p)};g.override||(f.isReady("track")?k():a(k))}();f.register("mediaelement-core",function(a,
f,p,z,v){m=swfobject.hasFlashPlayerVersion("9.0.115");var o=f.mediaelement,s=function(b,c){var b=a(b),d={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!d.src)return d;var e=b.attr("type");if(e)d.type=e,d.container=a.trim(e.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e=o.getTypeForSrc(d.src,c))d.type=e,d.container=e;if(e=b.attr("media"))d.media=e;return d},y=!m&&"postMessage"in p&&h,e=
function(){var b;return function(){!b&&y&&(b=!0,f.loader.loadScript("https://www.youtube.com/player_api"),a(function(){f.polyfill("mediaelement-yt")}))}}(),d=function(){m?u():e()};f.addPolyfill("mediaelement-yt",{test:!y,d:["dom-support"]});o.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};o.mimeTypes.source=a.extend({},o.mimeTypes.audio,o.mimeTypes.video);o.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||
-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],d;a.each(o.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return d=a,!1});return d};o.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),a.isArray(c)||(c=[c]),c.forEach(function(a){var c=z.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});
else{var c=[],d=b[0].nodeName.toLowerCase(),e=s(b,d);e.src?c.push(e):a("source",b).each(function(){e=s(this,d);e.src&&c.push(e)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==v&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));o.srces(this,b);a(this).mediaLoad()})};o.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
o.canThirdPlaySrces=function(b,c){var d="";if(m||y)b=a(b),c=c||o.srces(b),a.each(c,function(a,b){if(b.container&&b.src&&(m&&-1!=o.swfMimeTypes.indexOf(b.container)||y&&"video/youtube"==b.container))return d=b,!1});return d};var b={};o.canNativePlaySrces=function(c,d){var e="";if(h){var c=a(c),f=(c[0].nodeName||"").toLowerCase();if(!b[f])return e;d=d||o.srces(c);a.each(d,function(a,d){if(d.type&&b[f].prop._supvalue.call(c[0],d.type))return e=d,!1})}return e};o.setError=function(b,c){c||(c="can't play sources");
a(b).pause().data("mediaerror",c);f.warn("mediaelementError: "+c);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var c=function(){var a;return function(b,i,g){f.ready(m?r:"mediaelement-yt",function(){o.createSWF?o.createSWF(b,i,g):a||(a=!0,d(),c(b,i,g))});!a&&y&&!o.createSWF&&e()}}(),i=function(a,b,d,e,f){d||!1!==d&&b&&"third"==b.isActive?(d=o.canThirdPlaySrces(a,e))?c(a,d,b):f?o.setError(a,!1):i(a,b,!1,e,!0):(d=o.canNativePlaySrces(a,e))?b&&"third"==b.isActive&&o.setActive(a,
"html5",b):f?(o.setError(a,!1),b&&"third"==b.isActive&&o.setActive(a,"html5",b)):i(a,b,!0,e,!0)},x=/^(?:embed|object|datalist)$/i,A=function(b,c){var d=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{}),e=o.srces(b),g=b.parentNode;clearTimeout(d.loadTimer);a.data(b,"mediaerror",!1);if(e.length&&g&&!(1!=g.nodeType||x.test(g.nodeName||"")))c=c||f.data(b,"mediaelement"),i(b,c,t.preferFlash||v,e)};a(z).bind("ended",function(b){var c=f.data(b.target,"mediaelement");(!k||c&&"html5"!=c.isActive||
a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});k||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");A(this,a);h&&(!a||"html5"==a.isActive)&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});b[c]=f.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var e=
"";h&&b[c].prop._supvalue&&(e=b[c].prop._supvalue.call(this,d),"no"==e&&(e=""));!e&&m&&(d=a.trim((d||"").split(";")[0]),-1!=o.swfMimeTypes.indexOf(d)&&(e="maybe"));return e}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){A(a);a=null},9)}});p=function(){f.addReady(function(b,c){a("video, audio",b).add(c.filter("video, audio")).each(function(){a.browser.msie&&
8<f.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():A(this);if(h){var b,c,d=this,e=function(){var b=a.prop(d,"buffered");if(b){for(var c="",e=0,f=b.length;e<f;e++)c+=b.end(e);return c}},i=function(){var b=e();b!=c&&(c=b,a(d).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(c=e());clearTimeout(b);b=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",
function(a){"emptied"==a.type&&(c=!1);clearTimeout(b)})}})})};g.track&&!q.track&&f.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});h?(f.isReady("mediaelement-core",!0),p(),f.ready("WINDOWLOAD mediaelement",d)):f.ready(r,p);a(function(){f.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
(function(a){var g=window.Modernizr,f=a.webshims,h=f.bugs,k=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),t=function(){if(k[0].querySelector)try{h.findRequired=!k[0].querySelector("select:required")}catch(a){h.findRequired=!1}};h.findRequired=!1;h.validationMessage=!1;h.valueAsNumberSet=!1;f.capturingEventPrevented=function(f){if(!f._isPolyfilled){var g=f.isDefaultPrevented,
h=f.preventDefault;f.preventDefault=function(){clearTimeout(a.data(f.target,f.type+"DefaultPrevented"));a.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){a.removeData(f.target,f.type+"DefaultPrevented")},30));return h.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!g.apply(this,arguments)&&!a.data(f.target,f.type+"DefaultPrevented"))};f._isPolyfilled=!0}};if(!g.formvalidation||h.bustedValidity)t();else if(f.capturingEvents(["input"]),f.capturingEvents(["invalid"],!0),
g.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var q=a("input",k).eq(0),r,u=function(a){f.loader.loadList(["dom-extend"]);f.ready("dom-extend",a)},m=function(h){var j=["form-extend","form-message","form-native-fix"];h&&(h.preventDefault(),h.stopImmediatePropagation());clearTimeout(r);setTimeout(function(){k&&(k.remove(),k=q=null)},9);if(!g.bugfreeformvalidation)f.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),f.modules["form-extend"].test=a.noop;f.isReady("form-number-date-api")&&
j.push("form-number-date-api");f.reTest(j);if(q)try{q.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&u(function(){f.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(f){!f&&this&&a.prop(this,"value",a.prop(this,"value"))}});f.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(f){if(!f&&this)f=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(f)}})})}catch(m){}(a.browser.opera||window.testGoodWithFix)&&
u(function(){var g=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(h){var j=f.defineNodeNameProperty(h,"checkValidity",{prop:{value:function(){f.fromSubmit||a(this).bind("invalid.checkvalidity",g);f.fromCheckValidity=!0;var h=j.prop._supvalue.apply(this,arguments);f.fromSubmit||a(this).unbind("invalid.checkvalidity",g);f.fromCheckValidity=!1;return h}}})})})};k.appendTo("head");if(window.opera||window.testGoodWithFix){t();h.validationMessage=!q.prop("validationMessage");
if((g.inputtypes||{}).date){try{q.prop("valueAsNumber",0)}catch(v){}h.valueAsNumberSet="1970-01-01"!=q.prop("value")}q.prop("value","")}k.bind("submit",function(a){g.bugfreeformvalidation=!1;m(a)});r=setTimeout(function(){k&&k.triggerHandler("submit")},9);a("input, select",k).bind("invalid",m).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&g.bugfreeformvalidation&&!f.bugs.bustedValidity&&function(){var f=/^(?:textarea|input)$/i,
g=!1;document.addEventListener("contextmenu",function(a){f.test(a.target.nodeName||"")&&(g=a.target.form)&&setTimeout(function(){g=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&g&&g==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,g,f,h,k,t){var q={radio:1},r={checkbox:1,radio:1},u=a([]),m=g.bugs,v=function(b){var b=a(b),c,d;c=u;if(q[b[0].type])d=b.prop("form"),c=(c=b[0].name)?d?a(d[c]):a(h.getElementsByName(c)).filter(function(){return!a.prop(this,"form")}):b,c=c.filter('[type="radio"]');return c},p=g.getContentValidationMessage=function(b,c,d){var e=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";d&&e[d]&&(e=e[d]);"object"==typeof e&&(c=c||a.prop(b,"validity")||
{valid:1},c.valid||a.each(c,function(a,b){if(b&&"valid"!=a&&e[a])return e=e[a],!1}));if("object"==typeof e)e=e.defaultMessage;return e||""},j={number:1,range:1,date:1},B=function(b){var c=!1;a(a.prop(b,"elements")).each(function(){if(c=a(this).is(":invalid"))return!1});return c};a.extend(a.expr[":"],{"valid-element":function(b){return a.nodeName(b,"form")?!B(b):!(!a.prop(b,"willValidate")||!z(b))},"invalid-element":function(b){return a.nodeName(b,"form")?B(b):!(!a.prop(b,"willValidate")||z(b))},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!j[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!j[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&
!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var c=a.ownerDocument;return a===c.activeElement&&(!c.hasFocus||c.hasFocus())}catch(d){}return!1};var w=a.event.customEvent||{},z=function(b){return(a.prop(b,"validity")||{valid:1}).valid};(m.bustedValidity||m.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,c=a.find.matchesSelector,d=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,
e=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,c=function(c){var f=arguments,f=a.call(f,1,f.length);f.unshift(c.replace(d,e));return b.apply(this,f)},f;for(f in b)b.hasOwnProperty(f)&&(c[f]=b[f]);return c}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",h.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(d,e);return c.call(this,a,b)}}();var E=a.prop,o={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,f){var g=
E.apply(this,arguments);b&&"form"in b&&o[c]&&f!==k&&a(b).hasClass(e)&&z(b)&&(a(b).getShadowElement().removeClass(d),"checked"==c&&f&&v(b).not(b).removeClass(d).removeAttr("aria-invalid"));return g};var s=function(b,c){var d;a.each(b,function(b,e){if(e)return d="customError"==b?a.prop(c,"validationMessage"):b,!1});return d},y=function(a){var c;try{c=h.activeElement.name===a}catch(d){}return c},e="user-error",d="user-error form-ui-invalid";a(h).bind(t.validityUIEvents||"focusout change refreshvalidityui",
function(b){var c,f;if(b.target&&(c=a(b.target).getNativeElement()[0],"submit"!=c.type&&a.prop(c,"willValidate"))){f=a.data(c,"webshimsswitchvalidityclass");var g=function(){if(!("focusout"==b.type&&"radio"==c.type&&y(c.name))){var f=a.prop(c,"validity"),g=a(c).getShadowElement(),i,h,j,k;a(c).trigger("refreshCustomValidityRules");f.valid?g.hasClass("user-success")||(i="user-success form-ui-valid",h=d,k="changedvaliditystate",j="changedvalid",r[c.type]&&c.checked&&v(c).not(c).removeClass(h).addClass(i).removeAttr("aria-invalid"),
a.removeData(c,"webshimsinvalidcause")):(f=s(f,c),a.data(c,"webshimsinvalidcause")!=f&&(a.data(c,"webshimsinvalidcause",f),k="changedvaliditystate"),g.hasClass(e)||(i=d,h="user-success form-ui-valid",r[c.type]&&!c.checked&&v(c).not(c).removeClass(h).addClass(i),j="changedinvalid"));i&&(g.addClass(i).removeClass(h),setTimeout(function(){a(c).trigger(j)},0));k&&setTimeout(function(){a(c).trigger(k)},0);a.removeData(b.target,"webshimsswitchvalidityclass")}};f&&clearTimeout(f);"refreshvalidityui"==b.type?
g():a.data(c,"webshimsswitchvalidityclass",setTimeout(g,9))}});w.changedvaliditystate=!0;w.refreshCustomValidityRules=!0;w.changedvalid=!0;w.changedinvalid=!0;w.refreshvalidityui=!0;g.triggerInlineForm=function(b,c){a(b).trigger(c)};g.modules["form-core"].getGroupElements=v;m=function(){g.scrollRoot=a.browser.webkit||"BackCompat"==h.compatMode?a(h.body):a(h.documentElement)};m();g.ready("DOM",m);g.getRelOffset=function(b,c){var b=a(b),d=a(c).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",
left:0,top:0},function(){e=b.offset()});d.top-=e.top;d.left-=e.left;return d};g.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",c,d=!1,e=!1,j,l={hideDelay:5E3,showFor:function(b,c,g,h){l._create();var b=a(b),k=a(b).getShadowElement(),m=l.getOffsetFromBody(k);l.clear();h?this.hide():(this.getMessage(b,c),this.position(k,m),this.show(),this.hideDelay&&(d=setTimeout(j,this.hideDelay)),a(f).bind("resize.validityalert",function(){clearTimeout(e);e=setTimeout(function(){l.position(k)},
9)}));g||this.setFocus(k,m)},getOffsetFromBody:function(a){return g.getRelOffset(c,a)},setFocus:function(d,e){var f=a(d).getShadowFocusElement(),i=g.scrollRoot.scrollTop(),k=(e||f.offset()).top-30,l;g.getID&&"label"==b&&c.attr("for",g.getID(f));i>k&&(g.scrollRoot.animate({scrollTop:k-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-k)),80)}),l=!0);try{f[0].focus()}catch(m){}l&&(g.scrollRoot.scrollTop(i),setTimeout(function(){g.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(h).bind("focusout.validityalert",
j)},10)},getMessage:function(b,d){d||(d=p(b[0])||b.prop("validationMessage"));d?a("span.va-box",c).text(d):this.hide()},position:function(b,d){d=d?a.extend({},d):l.getOffsetFromBody(b);d.top+=b.outerHeight();c.css(d)},show:function(){"none"===c.css("display")&&c.css({opacity:0}).show();c.addClass("va-visible").fadeTo(400,1)},hide:function(){c.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(d);a(h).unbind(".validityalert");a(f).unbind(".validityalert");c.stop().removeAttr("for")},
_create:function(){if(!c)c=l.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),g.ready("DOM",function(){c.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&c.bgIframe()})}};j=a.proxy(l,"hide");return l}();(function(){var b,c=[],f;a(h).bind("invalid",function(g){if(!g.wrongWebkitInvalid){var j=
a(g.target),k=j.getShadowElement();k.hasClass(e)||(k.addClass(d).removeClass("user-success form-ui-valid"),setTimeout(function(){a(g.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=g.isDefaultPrevented,k=a.Event("firstinvalidsystem"),a(h).triggerHandler(k,{element:g.target,form:g.target.form,isInvalidUIPrevented:g.isDefaultPrevented}),j.trigger(b);b&&b.isDefaultPrevented()&&g.preventDefault();c.push(g.target);g.extraData=
"fix";clearTimeout(f);f=setTimeout(function(){var d={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(g.target).trigger(d,d)},9);k=j=null}})})();a.fn.getErrorMessage=function(){var b="",c=this[0];c&&(b=p(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};t.replaceValidationUI&&g.ready("DOM forms",function(){a(h).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
