(function(){var b=Function.prototype.call,a=Object.prototype,d=Array.prototype.slice,k,f;if(!Function.prototype.bind)Function.prototype.bind=function(e){var b=this;if("function"!=typeof b)throw new TypeError;var g=d.call(arguments,1),m=function(){if(this instanceof m){var a=function(){};a.prototype=b.prototype;var a=new a,f=b.apply(a,g.concat(d.call(arguments)));return null!==f&&Object(f)===f?f:a}return b.apply(e,g.concat(d.call(arguments)))};return m};f=b.bind(a.toString);k=b.bind(a.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(e){return"[object Array]"==f(e)};if(!Array.prototype.forEach)Array.prototype.forEach=function(e,b){var g=n(this),m=0,a=g.length>>>0;if("[object Function]"!=f(e))throw new TypeError;for(;m<a;)m in g&&e.call(b,g[m],m,g),m++};if(!Array.prototype.map)Array.prototype.map=function(e,b){var g=n(this),m=g.length>>>0,a=Array(m);if("[object Function]"!=f(e))throw new TypeError;for(var c=0;c<m;c++)c in g&&(a[c]=e.call(b,g[c],c,g));return a};if(!Array.prototype.filter)Array.prototype.filter=
function(e,b){var g=n(this),a=g.length>>>0,c=[];if("[object Function]"!=f(e))throw new TypeError;for(var h=0;h<a;h++)h in g&&e.call(b,g[h],h,g)&&c.push(g[h]);return c};if(!Array.prototype.every)Array.prototype.every=function(e,b){var g=n(this),a=g.length>>>0;if("[object Function]"!=f(e))throw new TypeError;for(var c=0;c<a;c++)if(c in g&&!e.call(b,g[c],c,g))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(e,b){var g=n(this),a=g.length>>>0;if("[object Function]"!=f(e))throw new TypeError;
for(var c=0;c<a;c++)if(c in g&&e.call(b,g[c],c,g))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(e){var b=n(this),c=b.length>>>0;if("[object Function]"!=f(e))throw new TypeError;if(!c&&1==arguments.length)throw new TypeError;var a=0,h;if(2<=arguments.length)h=arguments[1];else{do{if(a in b){h=b[a++];break}if(++a>=c)throw new TypeError;}while(1)}for(;a<c;a++)a in b&&(h=e.call(void 0,h,b[a],a,b));return h};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(e){var b=
n(this),a=b.length>>>0;if("[object Function]"!=f(e))throw new TypeError;if(!a&&1==arguments.length)throw new TypeError;var c,a=a-1;if(2<=arguments.length)c=arguments[1];else{do{if(a in b){c=b[a--];break}if(0>--a)throw new TypeError;}while(1)}do a in this&&(c=e.call(void 0,c,b[a],a,b));while(a--);return c};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(e){var b=n(this),a=b.length>>>0;if(!a)return-1;var c=0;1<arguments.length&&(c=C(arguments[1]));for(c=0<=c?c:a-Math.abs(c);c<a;c++)if(c in
b&&b[c]===e)return c;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(b){var a=n(this),c=a.length>>>0;if(!c)return-1;var h=c-1;1<arguments.length&&(h=C(arguments[1]));for(h=0<=h?h:c-Math.abs(h);0<=h;h--)if(h in a&&b===a[h])return h;return-1};if(2!=[1,2].splice(0).length){var j=Array.prototype.splice;Array.prototype.splice=function(b,a){return!arguments.length?[]:j.apply(this,[void 0===b?0:b,void 0===a?this.length-b:a].concat(d.call(arguments,2)))}}if(!Object.keys){var c=
!0,t="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),i=t.length,p;for(p in{toString:null})c=!1;Object.keys=function(b){if("object"!=typeof b&&"function"!=typeof b||null===b)throw new TypeError("Object.keys called on a non-object");var a=[],h;for(h in b)k(b,h)&&a.push(h);if(c)for(h=0;h<i;h++){var f=t[h];k(b,f)&&a.push(f)}return a}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var b,a,c;if(!isFinite(this))throw new RangeError;
b=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(a=b.length;a--;)c=b[a],10>c&&(b[a]="0"+c);return b.slice(0,3).join("-")+"T"+b.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};b="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
if(!String.prototype.trim||b.trim()){var b="["+b+"]",r=RegExp("^"+b+b+"*"),u=RegExp(b+b+"*$");String.prototype.trim=function(){return(""+this).replace(r,"").replace(u,"")}}if("0".split(void 0,0).length){var h=String.prototype.split;String.prototype.split=function(b,a){return void 0===b&&0===a?[]:h.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var w=String.prototype.substr;String.prototype.substr=function(b,a){return w.call(this,0>b?0>(b=this.length+b)?0:b:b,a)}}var C=function(b){b=+b;
b!==b?b=-1:0!==b&&b!==1/0&&b!==-(1/0)&&(b=(0<b||-1)*Math.floor(Math.abs(b)));return b},q="a"!="a"[0],n=function(b){if(null==b)throw new TypeError;return q&&"string"==typeof b&&b?b.split(""):Object(b)}})();
(function(b,a){var d=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);d&&!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var b=document.createElement("foo");Object.defineProperty(b,"bar",{get:function(){return!0}});d=!!b.bar}catch(a){d=!1}b=null}();Modernizr.objectAccessor=!(!(d||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||b.browser.opera&&!(11<=a.browserVersion));Modernizr.advancedObjectProperties=d;
if(!d||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var k=Function.prototype.call.bind(Object.prototype.hasOwnProperty);a.objectCreate=function(b,j,c,d){var i;i=function(){};i.prototype=b;i=new i;if(!d&&!("__proto__"in i)&&!Modernizr.objectAccessor)i.__proto__=b;j&&a.defineProperties(i,j);if(c)i.options=jQuery.extend(!0,{},i.options||{},c),c=i.options;i._create&&jQuery.isFunction(i._create)&&i._create(c);return i};a.defineProperties=function(b,
d){for(var c in d)k(d,c)&&a.defineProperty(b,c,d[c]);return b};a.defineProperty=function(b,a,c){if("object"!=typeof c||null===c)return b;if(k(c,"value"))return b[a]=c.value,b;b.__defineGetter__&&("function"==typeof c.get&&b.__defineGetter__(a,c.get),"function"==typeof c.set&&b.__defineSetter__(a,c.set));return b};a.getPrototypeOf=function(b){return Object.getPrototypeOf&&Object.getPrototypeOf(b)||b.__proto__||b.constructor&&b.constructor.prototype};a.getOwnPropertyDescriptor=function(b,a){if("object"!==
typeof b&&"function"!==typeof b||null===b)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var c;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return c=Object.getOwnPropertyDescriptor(b,a)}catch(d){}c={configurable:!0,enumerable:!0,writable:!0,value:void 0};var i=b.__lookupGetter__&&b.__lookupGetter__(a),p=b.__lookupSetter__&&b.__lookupSetter__(a);if(!i&&!p){if(!k(b,a))return;c.value=b[a];return c}delete c.writable;delete c.value;c.get=c.set=void 0;if(i)c.get=
i;if(p)c.set=p;return c}}})(jQuery,jQuery.webshims);
(function(b,a,d){var k=a.audio&&a.video,f=!1,j=d.cfg.mediaelement,c=d.bugs,t="jwplayer"==j.player?"mediaelement-swf":"mediaelement-jaris",i=function(){d.ready(t,function(){if(!d.mediaelement.createSWF)d.mediaelement.loadSwf=!0,d.reTest([t],k)})},p;if(k){var r=document.createElement("video");a.videoBuffered="buffered"in r;f="loop"in r;d.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(","));a.videoBuffered||(d.addPolyfill("mediaelement-native-fix",
{f:"mediaelement",test:a.videoBuffered,d:["dom-support"]}),d.reTest("mediaelement-native-fix"))}if(k&&!j.preferFlash){var u=function(a){var c=a.target.parentNode;!j.preferFlash&&(b(a.target).is("audio, video")||c&&b("source:last",c)[0]==a.target)&&d.ready("DOM mediaelement",function(){p&&i();d.ready("WINDOWLOAD "+t,function(){setTimeout(function(){p&&!j.preferFlash&&d.mediaelement.createSWF&&!b(a.target).closest("audio, video").is(".nonnative-api-active")?(j.preferFlash=!0,document.removeEventListener("error",
u,!0),b("audio, video").mediaLoad(),d.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+a.target.src)):p||document.removeEventListener("error",u,!0)},20)})})};document.addEventListener("error",u,!0);b("audio, video").each(function(){this.error&&u({target:this})})}c.track=!1;a.track&&function(){if(!c.track)c.track="number"!=typeof b("<track />")[0].readyState;if(!c.track)try{new TextTrackCue(2,3,"")}catch(a){c.track=!0}var w=d.cfg.track,i=function(a){b(a.target).filter("track").each(f)},
f=function(){if(c.track||!w.override&&3==b.prop(this,"readyState"))w.override=!0,d.reTest("track"),document.removeEventListener("error",i,!0),this&&b.nodeName(this,"track")?d.error("track support was overwritten. Please check your vtt including your vtt mime-type"):d.info("track support was overwritten. due to bad browser support")},j=function(){document.addEventListener("error",i,!0);c.track?f():b("track").each(f)};w.override||(d.isReady("track")?j():b(j))}();d.register("mediaelement-core",function(b,
d,r,q,n){p=swfobject.hasFlashPlayerVersion("9.0.115");var e=d.mediaelement,u=function(a,c){var a=b(a),d={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};if(!d.src)return d;var v=a.attr("type");if(v)d.type=v,d.container=b.trim(v.split(";")[0]);else if(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),v=e.getTypeForSrc(d.src,c))d.type=v,d.container=v;if(v=a.attr("media"))d.media=v;return d},g=!p&&"postMessage"in r&&k,m=
function(){var a;return function(){!a&&g&&(a=!0,d.loader.loadScript("https://www.youtube.com/player_api"),b(function(){d.polyfill("mediaelement-yt")}))}}(),o=function(){p?i():m()};d.addPolyfill("mediaelement-yt",{test:!g,d:["dom-support"]});e.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv",
"f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};e.mimeTypes.source=b.extend({},e.mimeTypes.audio,e.mimeTypes.video);e.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||
-1!=a.indexOf("youtube.com/v/"))return"video/youtube";var a=a.split("?")[0].split("."),a=a[a.length-1],d;b.each(e.mimeTypes[c],function(b,c){if(-1!==c.indexOf(a))return d=b,!1});return d};e.srces=function(a,c){a=b(a);if(c)a.removeAttr("src").removeAttr("type").find("source").remove(),b.isArray(c)||(c=[c]),c.forEach(function(b){var c=q.createElement("source");"string"==typeof b&&(b={src:b});c.setAttribute("src",b.src);b.type&&c.setAttribute("type",b.type);b.media&&c.setAttribute("media",b.media);a.append(c)});
else{var c=[],d=a[0].nodeName.toLowerCase(),e=u(a,d);e.src?c.push(e):b("source",a).each(function(){e=u(this,d);e.src&&c.push(e)});return c}};b.fn.loadMediaSrc=function(a,c){return this.each(function(){c!==n&&(b(this).removeAttr("poster"),c&&b.attr(this,"poster",c));e.srces(this,a);b(this).mediaLoad()})};e.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
e.canThirdPlaySrces=function(a,c){var d="";if(p||g)a=b(a),c=c||e.srces(a),b.each(c,function(b,a){if(a.container&&a.src&&(p&&-1!=e.swfMimeTypes.indexOf(a.container)||g&&"video/youtube"==a.container))return d=a,!1});return d};var z={};e.canNativePlaySrces=function(a,c){var d="";if(k){var a=b(a),g=(a[0].nodeName||"").toLowerCase();if(!z[g])return d;c=c||e.srces(a);b.each(c,function(b,c){if(c.type&&z[g].prop._supvalue.call(a[0],c.type))return d=c,!1})}return d};e.setError=function(a,c){c||(c="can't play sources");
b(a).pause().data("mediaerror",c);d.warn("mediaelementError: "+c);setTimeout(function(){b(a).data("mediaerror")&&b(a).trigger("mediaerror")},1)};var D=function(){var b;return function(a,c,h){d.ready(p?t:"mediaelement-yt",function(){e.createSWF?e.createSWF(a,c,h):b||(b=!0,o(),D(a,c,h))});!b&&g&&!e.createSWF&&m()}}(),A=function(b,a,c,d,g){c||!1!==c&&a&&"third"==a.isActive?(c=e.canThirdPlaySrces(b,d))?D(b,c,a):g?e.setError(b,!1):A(b,a,!1,d,!0):(c=e.canNativePlaySrces(b,d))?a&&"third"==a.isActive&&e.setActive(b,
"html5",a):g?(e.setError(b,!1),a&&"third"==a.isActive&&e.setActive(b,"html5",a)):A(b,a,!0,d,!0)},F=/^(?:embed|object|datalist)$/i,x=function(a,c){var g=d.data(a,"mediaelementBase")||d.data(a,"mediaelementBase",{}),f=e.srces(a),i=a.parentNode;clearTimeout(g.loadTimer);b.data(a,"mediaerror",!1);if(f.length&&i&&!(1!=i.nodeType||F.test(i.nodeName||"")))c=c||d.data(a,"mediaelement"),A(a,c,j.preferFlash||n,f)};b(q).bind("ended",function(a){var c=d.data(a.target,"mediaelement");(!f||c&&"html5"!=c.isActive||
b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()},1)});f||d.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(a){var c=d.defineNodeNameProperty(a,"load",{prop:{value:function(){var b=d.data(this,"mediaelement");x(this,b);k&&(!b||"html5"==b.isActive)&&c.prop._supvalue&&c.prop._supvalue.apply(this,arguments)}}});z[a]=d.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(c){var d=
"";k&&z[a].prop._supvalue&&(d=z[a].prop._supvalue.call(this,c),"no"==d&&(d=""));!d&&p&&(c=b.trim((c||"").split(";")[0]),-1!=e.swfMimeTypes.indexOf(c)&&(d="maybe"));return d}}})});d.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=d.data(b,"mediaelementBase")||d.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){x(b);b=null},9)}});r=function(){d.addReady(function(a,c){b("video, audio",a).add(c.filter("video, audio")).each(function(){b.browser.msie&&
8<d.browserVersion&&b.prop(this,"paused")&&!b.prop(this,"readyState")&&b(this).is('audio[preload="none"][controls]:not([autoplay])')?b(this).prop("preload","metadata").mediaLoad():x(this);if(k){var a,c,e=this,g=function(){var a=b.prop(e,"buffered");if(a){for(var c="",d=0,g=a.length;d<g;d++)c+=a.end(d);return c}},i=function(){var a=g();a!=c&&(c=a,b(e).triggerHandler("progress"))};b(this).bind("play loadstart progress",function(b){"progress"==b.type&&(c=g());clearTimeout(a);a=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",
function(b){"emptied"==b.type&&(c=!1);clearTimeout(a)})}})})};a.track&&!c.track&&d.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}});k?(d.isReady("mediaelement-core",!0),r(),d.ready("WINDOWLOAD mediaelement",o)):d.ready(t,r);b(function(){d.loader.loadList(["track-ui"])})})})(jQuery,Modernizr,jQuery.webshims);
jQuery.webshims.register("mediaelement-swf",function(b,a,d,k,f,j){var c=a.mediaelement,t=d.swfobject,i=Modernizr.audio&&Modernizr.video,p=t.hasFlashPlayerVersion("9.0.115"),r=0,d={paused:!0,ended:!1,currentSrc:"",duration:d.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(b){if(b)a.error("buffered index size error");else return 0},end:function(b){if(b)a.error("buffered index size error");else return 0},length:0}},u=Object.keys(d),h={currentTime:0,volume:1,
muted:!1};Object.keys(h);var w=b.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:f},d,h),C=/^jwplayer-/,q=function(b){if(b=k.getElementById(b.replace(C,"")))return b=a.data(b,"mediaelement"),"third"==b.isActive?b:null},n=function(b){return(b=a.data(b,"mediaelement"))&&"third"==b.isActive?b:null},e=function(a,l){l=b.Event(l);l.preventDefault();b.event.trigger(l,f,a)},I=j.playerPath||a.cfg.basePath+
"jwplayer/"+(j.playerName||"player.swf"),g=j.pluginPath||a.cfg.basePath+"swf/jwwebshims.swf";a.extendUNDEFProp(j.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});a.extendUNDEFProp(j.vars,{screencolor:"ffffffff"});a.extendUNDEFProp(j.attrs,{bgcolor:"#000000"});var m=function(a,l){var d=a.duration;if(!(d&&0<a._durationCalcs)){try{if(a.duration=a.jwapi.getPlaylist()[0].duration,!a.duration||0>=a.duration||a.duration===a._lastDuration)a.duration=d}catch(P){}a.duration&&
a.duration!=a._lastDuration?(e(a._elem,"durationchange"),("audio"==a._elemNodeName||a._callMeta)&&c.jwEvents.Model.META(b.extend({duration:a.duration},l),a),a._durationCalcs--):a._durationCalcs++}},o=function(b,a){3>b&&clearTimeout(a._canplaythroughTimer);if(3<=b&&3>a.readyState)a.readyState=b,e(a._elem,"canplay"),clearTimeout(a._canplaythroughTimer),a._canplaythroughTimer=setTimeout(function(){o(4,a)},4E3);if(4<=b&&4>a.readyState)a.readyState=b,e(a._elem,"canplaythrough");a.readyState=b};b.extend(b.event.customEvent,
{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0});c.jwEvents={View:{PLAY:function(b){var a=q(b.id);if(a&&!a.stopPlayPause&&(a._ppFlag=!0,a.paused==b.state)){a.paused=!b.state;if(a.ended)a.ended=!1;e(a._elem,b.state?"play":"pause")}}},Model:{BUFFER:function(a){var l=q(a.id);if(l&&"percentage"in a&&l._bufferedEnd!=a.percentage){l.networkState=100==a.percentage?1:2;(isNaN(l.duration)||5<a.percentage&&25>a.percentage||100===a.percentage)&&m(l,a);if(l.ended)l.ended=
!1;if(l.duration){2<a.percentage&&20>a.percentage?o(3,l):20<a.percentage&&o(4,l);if(l._bufferedEnd&&l._bufferedEnd>a.percentage)l._bufferedStart=l.currentTime||0;l._bufferedEnd=a.percentage;l.buffered.length=1;if(100==a.percentage)l.networkState=1,o(4,l);b.event.trigger("progress",f,l._elem,!0)}}},META:function(b,a){if(a=a&&a.networkState?a:q(b.id))if("duration"in b){if(!a._metadata||!((!b.height||a.videoHeight==b.height)&&b.duration===a.duration)){a._metadata=!0;var c=a.duration;if(b.duration)a.duration=
b.duration;a._lastDuration=a.duration;if(b.height||b.width)a.videoHeight=b.height||0,a.videoWidth=b.width||0;if(!a.networkState)a.networkState=2;1>a.readyState&&o(1,a);a.duration&&c!==a.duration&&e(a._elem,"durationchange");e(a._elem,"loadedmetadata")}}else a._callMeta=!0},TIME:function(b){var a=q(b.id);if(a&&a.currentTime!==b.position){a.currentTime=b.position;a.duration&&a.duration<a.currentTime&&m(a,b);2>a.readyState&&o(2,a);if(a.ended)a.ended=!1;e(a._elem,"timeupdate")}},STATE:function(a){var b=
q(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.ended)b.ended=!1;o(1,b);e(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;b.duration||m(b,a);3>b.readyState&&o(3,b);if(b.ended)b.ended=!1;e(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,e(b._elem,"pause");break;case "COMPLETED":4>b.readyState&&o(4,b),b.ended=!0,e(b._elem,"ended")}}},Controller:{ERROR:function(b){var a=q(b.id);a&&c.setError(a._elem,b.message)},SEEK:function(b){var a=
q(b.id);if(a){if(a.ended)a.ended=!1;if(a.paused)try{a.jwapi.sendEvent("play","false")}catch(c){}if(a.currentTime!=b.position)a.currentTime=b.position,e(a._elem,"timeupdate")}},VOLUME:function(b){var a=q(b.id);if(a&&(b=b.percentage/100,a.volume!=b))a.volume=b,e(a._elem,"volumechange")},MUTE:function(b){if(!b.state){var a=q(b.id);if(a&&a.muted!=b.state)a.muted=b.state,e(a._elem,"volumechange")}}}};var z=function(a){var l=!0;b.each(c.jwEvents,function(c,d){b.each(d,function(b){try{a.jwapi["add"+c+"Listener"](b,
"jQuery.webshims.mediaelement.jwEvents."+c+"."+b)}catch(d){return l=!1}})});return l},D=function(b){var a=b.actionQueue.length,c=0,d;if(a&&"third"==b.isActive)for(;b.actionQueue.length&&a>c;)c++,d=b.actionQueue.shift(),b.jwapi[d.fn].apply(b.jwapi,d.args);if(b.actionQueue.length)b.actionQueue=[]},A=function(a){a&&(a._ppFlag===f&&b.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if("third"==a.isActive&&(a._ppFlag===f||!a.paused))try{b(a._elem).play()}catch(c){}},1)},F=function(a){if(a&&
"video"==a._elemNodeName){var c,d,e,g,y,s,h,i,f=function(f,j){if(j&&f&&!(1>j||1>f||"third"!=a.isActive))if(c&&(c.remove(),c=!1),g=f,y=j,clearTimeout(h),d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e){s=s||b(a._elem).getShadowElement();var k;d&&!e?(k=s.height(),f*=k/j,j=k):!d&&e&&(k=s.width(),j*=k/f,f=k);i=!0;setTimeout(function(){i=!1},9);s.css({width:f,height:j})}},j=function(){if(!("third"!=a.isActive||b.prop(a._elem,"readyState")&&b.prop(this,"videoWidth"))){var s=b.prop(a._elem,
"poster");if(s&&(d="auto"==a._elem.style.width,e="auto"==a._elem.style.height,d||e))c&&(c.remove(),c=!1),c=b('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),c.bind("load error alreadycomplete",function(){clearTimeout(h);var a=this,d=a.naturalWidth||a.width||a.offsetWidth,e=a.naturalHeight||a.height||a.offsetHeight;e&&d?(f(d,e),a=null):setTimeout(function(){d=a.naturalWidth||a.width||a.offsetWidth;e=a.naturalHeight||a.height||a.offsetHeight;
f(d,e);c&&(c.remove(),c=!1);a=null},9);b(this).unbind()}).prop("src",s).appendTo("body").each(function(){this.complete||this.error?b(this).triggerHandler("alreadycomplete"):(clearTimeout(h),h=setTimeout(function(){b(a._elem).triggerHandler("error")},9999))})}};b(a._elem).bind("loadedmetadata",function(){f(b.prop(this,"videoWidth"),b.prop(this,"videoHeight"))}).bind("emptied",j).bind("swfstageresize updatemediaelementdimensions",function(){i||f(g,y)}).bind("emptied",function(){g=void 0;y=void 0}).triggerHandler("swfstageresize");
j();b.prop(a._elem,"readyState")&&f(b.prop(a._elem,"videoWidth"),b.prop(a._elem,"videoHeight"))}};c.playerResize=function(a){a&&(a=k.getElementById(a.replace(C,"")))&&b(a).triggerHandler("swfstageresize")};b(k).bind("emptied",function(a){a=n(a.target);A(a)});var x;c.jwPlayerReady=function(c){var d=q(c.id),e=0,g=function(){if(!(9<e))if(e++,z(d)){if(d.wasSwfReady)b(d._elem).mediaLoad();else{var f=parseFloat(c.version,10);(5.1>f||6<=f)&&a.warn("mediaelement-swf is only testet with jwplayer 5.6+")}d.wasSwfReady=
!0;d.tryedReframeing=0;D(d);A(d)}else clearTimeout(d.reframeTimer),d.reframeTimer=setTimeout(g,9*e),2<e&&9>d.tryedReframeing&&(d.tryedReframeing++,d.shadowElem.css({overflow:"visible"}),setTimeout(function(){d.shadowElem.css({overflow:"hidden"})},16))};if(d&&d.jwapi){if(!d.tryedReframeing)d.tryedReframeing=0;clearTimeout(x);d.jwData=c;d.shadowElem.removeClass("flashblocker-assumed");b.prop(d._elem,"volume",d.volume);b.prop(d._elem,"muted",d.muted);g()}};var E=b.noop;if(i){var J={play:1,playing:1},
H="play,pause,playing,canplay,progress,waiting,ended,loadedmetadata,durationchange,emptied".split(","),v=H.map(function(a){return a+".webshimspolyfill"}).join(" "),K=function(c){var d=a.data(c.target,"mediaelement");d&&(c.originalEvent&&c.originalEvent.type===c.type)==("third"==d.activating)&&(c.stopImmediatePropagation(),J[c.type]&&d.isActive!=d.activating&&b(c.target).pause())},E=function(c){b(c).unbind(v).bind(v,K);H.forEach(function(b){a.moveToFirstEvent(c,b)})};E(k)}c.setActive=function(c,d,
e){e||(e=a.data(c,"mediaelement"));if(e&&e.isActive!=d){"html5"!=d&&"third"!=d&&a.warn("wrong type for mediaelement activating: "+d);var g=a.data(c,"shadowData");e.activating=d;b(c).pause();e.isActive=d;"third"==d?(g.shadowElement=g.shadowFocusElement=e.shadowElem[0],b(c).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(b(c).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),g.shadowElement=g.shadowFocusElement=!1);b(c).trigger("mediaelementapichange")}};
var L=function(){var a="_bufferedEnd,_bufferedStart,_metadata,_ppFlag,currentSrc,currentTime,duration,ended,networkState,paused,videoHeight,videoWidth,_callMeta,_durationCalcs".split(","),b=a.length;return function(c){if(c){var d=b,g=c.networkState;for(o(0,c);--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;g&&e(c._elem,"emptied")}}}(),G=function(a,c){var d=a._elem,e=a.shadowElem;b(d)[c?"addClass":"removeClass"]("webshims-controls");"audio"==a._elemNodeName&&!c?e.css({width:0,height:0}):e.css({width:d.style.width||
b(d).width(),height:d.style.height||b(d).height()})};c.createSWF=function(d,e,f){if(p){1>r?r=1:r++;var h=b.extend({},j.vars,{image:b.prop(d,"poster")||"",file:e.srcProp}),k=b(d).data("vars")||{};f||(f=a.data(d,"mediaelement"));if(f&&f.swfCreated)c.setActive(d,"third",f),L(f),f.currentSrc=e.srcProp,b.extend(h,k),j.changeSWF(h,d,e,f,"load"),B(d,"sendEvent",["LOAD",h]);else{var y=b.prop(d,"controls"),s="jwplayer-"+a.getID(d),n=b.extend({},j.params,b(d).data("params")),m=d.nodeName.toLowerCase(),q=b.extend({},
j.attrs,{name:s,id:s},b(d).data("attrs")),o=b('<div class="polyfill-'+m+' polyfill-mediaelement" id="wrapper-'+s+'"><div id="'+s+'"></div>').css({position:"relative",overflow:"hidden"}),f=a.data(d,"mediaelement",a.objectCreate(w,{actionQueue:{value:[]},shadowElem:{value:o},_elemNodeName:{value:m},_elem:{value:d},currentSrc:{value:e.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(b){if(b>=f.buffered.length)a.error("buffered index size error");else return 0},end:function(b){if(b>=f.buffered.length)a.error("buffered index size error");
else return(f.duration-f._bufferedStart)*f._bufferedEnd/100+f._bufferedStart},length:0}}}));G(f,y);o.insertBefore(d);i&&b.extend(f,{volume:b.prop(d,"volume"),muted:b.prop(d,"muted")});b.extend(h,{id:s,controlbar:y?j.vars.controlbar||("video"==m?"over":"bottom"):"video"==m?"none":"bottom",icons:""+(y&&"video"==m)},k,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});h.plugins=h.plugins?h.plugins+(","+g):g;a.addShadowDom(d,o);E(d);c.setActive(d,"third",f);j.changeSWF(h,d,e,f,"embed");b(d).bind("updatemediaelementdimensions updateshadowdom",
function(){G(f,b.prop(d,"controls"))});F(f);t.embedSWF(I,s,"100%","100%","9.0.0",!1,h,n,q,function(c){if(c.success)f.jwapi=c.ref,y||b(c.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!c.ref.parentNode&&o[0].parentNode||"none"==c.ref.style.display)o.addClass("flashblocker-assumed"),b(d).trigger("flashblocker"),a.warn("flashblocker assumed");b(c.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),x||(clearTimeout(x),x=setTimeout(function(){var d=b(c.ref);1<d[0].offsetWidth&&
1<d[0].offsetHeight&&0===location.protocol.indexOf("file:")?a.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>d[0].offsetWidth||2>d[0].offsetHeight)&&a.warn("JS-SWF connection can't be established on hidden or unconnected flash objects")},8E3))})}}else setTimeout(function(){b(d).mediaLoad()},1)};var B=function(a,b,c,d){return(d=d||n(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,
c||[]):(d.actionQueue.push({fn:b,args:c}),10<d.actionQueue.length&&setTimeout(function(){5<d.actionQueue.length&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(c){var d={},f,g=function(a){"audio"==c&&("videoHeight"==a||"videoWidth"==a)||(d[a]={get:function(){var b=n(this);return b?b[a]:i&&f[a].prop._supget?f[a].prop._supget.apply(this):w[a]},writeable:!1})},h=function(a,b){g(a);delete d[a].writeable;d[a].set=b};h("volume",function(b){var c=n(this);if(c){if(b*=100,!isNaN(b)){var d=
c.muted;(0>b||100<b)&&a.error("volume greater or less than allowed "+b/100);B(this,"sendEvent",["VOLUME",b],c);if(d)try{c.jwapi.sendEvent("mute","true")}catch(g){}b/=100;if(!(c.volume==b||"third"!=c.isActive))c.volume=b,e(c._elem,"volumechange")}}else if(f.volume.prop._supset)return f.volume.prop._supset.apply(this,arguments)});h("muted",function(a){var b=n(this);if(b){if(a=!!a,B(this,"sendEvent",["mute",""+a],b),!(b.muted==a||"third"!=b.isActive))b.muted=a,e(b._elem,"volumechange")}else if(f.muted.prop._supset)return f.muted.prop._supset.apply(this,
arguments)});h("currentTime",function(a){var b=n(this);if(b){if(a*=1,!isNaN(a)){if(b.paused)clearTimeout(b.stopPlayPause),b.stopPlayPause=setTimeout(function(){b.paused=!0;b.stopPlayPause=!1},50);B(this,"sendEvent",["SEEK",""+a],b);if(b.paused){if(0<b.readyState)b.currentTime=a,e(b._elem,"timeupdate");try{b.jwapi.sendEvent("play","false")}catch(c){}}}}else if(f.currentTime.prop._supset)return f.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){d[a]={value:function(){var b=
n(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),B(this,"sendEvent",["play","play"==a],b),setTimeout(function(){if("third"==b.isActive&&(b._ppFlag=!0,b.paused!=("play"!=a)))b.paused="play"!=a,e(b._elem,a)},1);else if(f[a].prop._supvalue)return f[a].prop._supvalue.apply(this,arguments)}}});u.forEach(g);a.onNodeNamesPropertyModify(c,"controls",function(d,e){var f=n(this);b(this)[e?"addClass":"removeClass"]("webshims-controls");if(f){try{B(this,e?"showControls":"hideControls",[c],f)}catch(g){a.warn("you need to generate a crossdomain.xml")}"audio"==
c&&G(f,e);b(f.jwapi).attr("tabindex",e?"0":"-1")}});f=a.defineNodeNameProperties(c,d,"prop")});if(p){var M=b.cleanData,N=b.browser.msie&&9>a.browserVersion,O={object:1,OBJECT:1};b.cleanData=function(a){var b,c,d;if(a&&(c=a.length)&&r)for(b=0;b<c;b++)if(O[a[b].nodeName]){if("sendEvent"in a[b]){r--;try{a[b].sendEvent("play",!1)}catch(e){}}if(N)try{for(d in a[b])"function"==typeof a[b][d]&&(a[b][d]=null)}catch(f){}}return M.apply(this,arguments)}}i||(["poster","src"].forEach(function(b){a.defineNodeNamesProperty("src"==
b?["audio","video","source"]:["video"],b,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(b){a.defineNodeNamesBooleanProperty(["audio","video"],b)}),a.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});
