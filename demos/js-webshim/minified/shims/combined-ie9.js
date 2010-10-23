(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var r=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},l=0;navigator.geolocation=function(){var q,d={getCurrentPosition:function(g,f,c){var e=function(){clearTimeout(h);if(!(q||!window.google||!google.loader||!google.loader.ClientLocation)){var k=google.loader.ClientLocation;q={coords:{latitude:k.latitude,longitude:k.longitude,altitude:null,
accuracy:43E3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:a.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},k.address)}}if(q)g(a.extend(q,{timestamp:(new Date).getTime()}));else f&&f({code:2,message:"POSITION_UNAVAILABLE"})},h;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=r;document.writeln=r}a(document).one("google-loader",e);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,
"google-loader");if(c&&c.timeout)h=setTimeout(function(){a(document).unbind("google-loader",e);f&&f({code:3,message:"TIMEOUT"})},c.timeout)}else setTimeout(e,1)},clearWatch:a.noop};d.watchPosition=function(g,f,c){d.getCurrentPosition(g,f,c);l++;return l};return d}()}})(jQuery);
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(l){return(a.attr(l,"validity")||{valid:true}).valid},invalid:function(l){return!a.expr.filters.valid(l)},willValidate:function(l){return a.attr(l,"willValidate")}});a.webshims.validityAlert=function(){var l={hideDelay:5E3,showFor:function(e,h){e=a(e);var k=(e.data("inputUIReplace")||{visual:e}).visual;c();l.clear();q.attr("for",k.attr("id"));this.getMessage(e);this.position(k);this.show();if(this.hideDelay)d=setTimeout(g,
this.hideDelay);if(!h){k.focus();a(document).bind("focusout.validityalert",g)}},getMessage:function(e){a("> span",q).html(e.attr("validationMessage"))},position:function(e){var h=e.offset();h.top+=e.outerHeight();q.css(h)},show:function(){q.css("display")==="none"?q.fadeIn():q.fadeTo(400,1)},hide:function(){l.clear();q.fadeOut()},clear:function(){clearTimeout(d);a(document).unbind("focusout.validityalert");q.stop().removeAttr("for")},alert:a('<label class="validity-alert" role="alert"><span class="va-box" /></label>').css({position:"absolute",
display:"none"})},q=l.alert,d=false,g=a.proxy(l,"hide"),f=false,c=function(){if(!f){f=true;a(function(){q.appendTo("body")})}};return l}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||
a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var r=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(l){r=l})});a.webshims.createValidationMessage=function(l,q){var d=r[q];if(d&&typeof d!=="string")d=d[(l.getAttribute("type")||"").toLowerCase()]||d.defaultMessage;d&&["value","min","max","title","maxlength","label"].forEach(function(g){if(d.indexOf("{%"+g)!==-1){var f=(g=="label"?a.trim(a("label[for="+
l.id+"]",l.form).text()).replace(/\*$|:$/,""):a.attr(l,g))||"";d=d.replace("{%"+g+"}",f);if("value"==g)d=d.replace("{%valueLen}",f.length)}});return d||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(l,q){a.webshims.attr(q,{elementNames:["input","select","textarea"],getter:function(d){var g="";if(!a.attr(d,"willValidate"))return g;var f=a.attr(d,"validity")||{valid:1};if(f.valid)return g;if(f.customError||q==="validationMessage")if(g=
"validationMessage"in d?d.validationMessage:a.data(d,"customvalidationMessage"))return g;a.each(f,function(c,e){if(!(c=="valid"||!e))if(g=a.webshims.createValidationMessage(d,c))return false});return g||""}})});(function(){var l,q=[],d,g,f,c;a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes&&window.addEventListener("submit",function(e){if(e.target.checkValidity&&a.attr(e.target,"novalidate")===undefined&&!e.target.checkValidity())f=true},true);a(document).bind("invalid",function(e){if(!l){g=
e.target.form;if(a.support.validity===true&&g&&!window.noHTMLExtFixes){var h=a(g).bind("submit.preventInvalidSubmit",function(k){if(a.attr(g,"novalidate")===undefined){k.stopImmediatePropagation();return false}}).data("events").submit;h&&h.length>1&&h.unshift(h.pop())}l=a.Event("firstinvalid");a(e.target).trigger(l)}l&&l.isDefaultPrevented()&&e.preventDefault();if(a.support.validity!==true||q.indexOf(e.target)==-1)q.push(e.target);else if(!window.noHTMLExtFixes){c=true;e.stopImmediatePropagation()}e.extraData=
"fix";clearTimeout(d);d=setTimeout(function(){var k={type:"lastinvalid",cancelable:false,invalidlist:a(q)};f&&!c&&l.target!==document.activeElement&&document.activeElement&&!a.data(l.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(l.target);f=l=c=false;q=[];a(g).unbind("submit.preventInvalidSubmit");a(e.target).trigger(k,k)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",
function(){if(a.nodeName(this,"fieldset")){var l=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(l=false)});return l}else if(this.checkValidity)return this.checkValidity()})}})();a.support.validationMessage=a.support.validationMessage||"shim";(function(){if(a.support.validity===true){var l="required"in document.createElement("select")||window.noHTMLExtFixes,q=!!(a('<input type="datetime-local" />')[0].type=="datetime-local"&&a('<input type="range" />')[0].type==
"range");select=null;if(!(l&&q)){var d=a.webshims.inputTypes,g={},f=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],c=a.attr,e=a.fn.val,h={value:1},k=[],p=function(b){var j=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();!l&&j=="select-one"||!d[j]||a.attr(b,"validity")};if(!l){a.extend(h,{required:1,size:1,multiple:1,selectedIndex:1});k.push("select")}if(!q){a.extend(h,{min:1,max:1,step:1});k.push("input")}a.webshims.addInputType=
function(b,j){d[b]=j};a.webshims.addValidityRule=function(b,j){g[b]=j};a.webshims.addValidityRule("typeMismatch",function(b,j,i,m){if(j==="")return false;m=m.typeMismatch;if(!("type"in i))i.type=(b[0].getAttribute("type")||"").toLowerCase();if(d[i.type]&&d[i.type].mismatch)m=d[i.type].mismatch(j,b);return m});a.webshims.attr("validity",{elementNames:k,getter:function(b){var j=b.validity;if(!j)return j;var i={};f.forEach(function(t){i[t]=j[t]});if(!a.attr(b,"willValidate"))return i;var m=a(b),o={type:(b.getAttribute&&
b.getAttribute("type")||"").toLowerCase(),nodeName:(b.nodeName||"").toLowerCase()},s=e.call(m),n=!!a.data(b,"hasCustomError");i.customError=n;if(i.valid&&i.customError)i.valid=false;else if(!i.valid){var u=true;a.each(i,function(t,v){if(v)return u=false});if(u)i.valid=true}a.each(g,function(t,v){var w;i[t]=v(m,s,o,i);if(i[t]&&i.valid){w=a.webshims.createValidationMessage(b,t);b.setCustomValidity(w);i.valid=false}});i.valid&&b.setCustomValidity("");return i}});a.webshims.addMethod("setCustomValidity",
function(b){b+="";this.setCustomValidity(b);a.data(this,"hasCustomError",!!b);p(this)});a.fn.val=function(){var b=e.apply(this,arguments);this.each(function(){p(this)});return b};if(document.addEventListener){document.addEventListener("change",function(b){p(b.target)},true);q||document.addEventListener("input",function(b){p(b.target)},true)}if(!l){a.webshims.createBooleanAttrs("required",["select"]);a.webshims.addValidityRule("valueMissing",function(b,j,i,m){if(i.nodeName=="select"&&!j&&b.attr("required")&&
b[0].size<2){if(!i.type)i.type=b[0].type;if(i.type=="select-one"&&a("> option:first-child:not(:disabled)",b).attr("selected"))return true}return m.valueMissing})}a.attr=function(b,j,i){var m=c.apply(this,arguments);h[j]&&i!==undefined&&b.form&&p(b);return m};a.webshims.addReady(function(b){a("input",b).each(function(){p(this)})})}}})();a.webshims.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var r=a.webshims.inputTypes,l={radio:1,checkbox:1};a.webshims.addInputType=function(c,e){r[c]=e};var q={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},d={valueMissing:function(c,e,h){if(!c.attr("required"))return false;var k=false;if(!("type"in h))h.type=(c[0].getAttribute("type")||
c[0].type||"").toLowerCase();return k=h.nodeName=="select"?!e&&c[0].type=="select-one"&&c[0].size<2&&a("> option:first-child:not(:disabled)",c).attr("selected"):l[h.type]?!a(c[0].form&&c[0].name?c[0].form[c[0].name]:[]).filter(":checked")[0]:!e},tooLong:function(c,e,h){if(e===""||h.nodeName=="select")return false;c=c.attr("maxlength");h=false;var k=e.length;if(k&&c>=0&&e.replace&&(typeof c=="number"||c&&c==c*1))h=k>c;return h},typeMismatch:function(c,e,h){if(e===""||h.nodeName=="select")return false;
var k=false;if(!("type"in h))h.type=(c[0].getAttribute("type")||c[0].type||"").toLowerCase();if(r[h.type]&&r[h.type].mismatch)k=r[h.type].mismatch(e,c);return k},patternMismatch:function(c,e,h){if(e===""||h.nodeName=="select")return false;c=c.attr("pattern");if(!c)return false;return!RegExp("^(?:"+c+")$").test(e)}};a.webshims.addValidityRule=function(c,e){d[c]=e};a.webshims.addMethod("checkValidity",function(){var c,e=function(h){var k,p=a.attr(h,"validity");if(p)a.data(h,"cachedValidity",p);else return true;
if(!p.valid){k=a.Event("invalid");var b=a(h).trigger(k);if(!c&&!k.isDefaultPrevented()){a.webshims.validityAlert.showFor(b);c=true}}a.data(h,"cachedValidity",false);return p.valid};return function(){c=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var h=true,k=this.elements||a("input, textarea, select",this),p=0,b=k.length;p<b;p++)e(k[p])||(h=false);return h}else return this.form?e(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},
setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var c=a(this).data("events").submit;c&&c.length>1&&c.unshift(c.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(c){if(!(c.type!="submit"||!a.nodeName(c.target,"form")||a.attr(c.target,"novalidate")!==undefined||a.data(c.target,"novalidate")))if(!a(c.target).checkValidity()){!c.originalEvent&&!window.debugValidityShim&&
window.console&&console.log&&console.log("submit");c.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(c){var e=a.data(c,"cachedValidity");if(e)return e;e=a.extend({},q);if(!a.attr(c,"willValidate"))return e;var h=a(c),k=h.val(),p={nodeName:c.nodeName.toLowerCase()};e.customError=!!a.data(c,"customvalidationMessage");if(e.customError)e.valid=false;a.each(d,function(b,j){if(j(h,k,p)){e[b]=true;e.valid=false}});return e}});
a.webshims.addMethod("setCustomValidity",function(c){a.data(this,"customvalidationMessage",""+c)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(c,e){var h=e()||a.data(c,"customvalidationMessage");return!h||!a.attr(c,"willValidate")?"":h}});a.webshims.createBooleanAttrs("required",["input","textarea","select"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var c={button:1,reset:1,add:1,remove:1,"move-up":1,
"move-down":1,hidden:1,submit:1};return function(e){return!!(e.name&&e.form&&!e.disabled&&!e.readOnly&&!c[e.type]&&a.attr(e.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(e){return!c.test(e)}}()});a.webshims.addInputType("url",{mismatch:function(){var c=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(e){return!c.test(e)}}()});var g=function(){var c=this;if(c.form){a.data(c.form,"novalidate",true);setTimeout(function(){a.data(c.form,"novalidate",false)},1)}},f={submit:1,button:1};a(document).bind("click",function(c){c.target&&c.target.form&&f[c.target.type]&&a.attr(c.target,"formnovalidate")!==undefined&&g.call(c.target)});a.webshims.addReady(function(c){c=a("form",c).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",g).end();if(!document.activeElement||!document.activeElement.form)a("input, select, textarea",
c).filter("[autofocus]:first").focus()});(function(){if(a.support.validity!==true){a.support.validity="shim";var c={input:1,textarea:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},h=function(k){var p;k[0].getAttribute("type");var b=k.val(),j=function(m){if(k){var o=k.val();if(o!==b){b=o;if(!m||m.type!="input")k.trigger("input")}}},i=function(){k.unbind("focusout",i).unbind("input",j);clearInterval(p);j();k=null};clearInterval(p);p=setInterval(j,150);setTimeout(j,9);k.bind("focusout",
i).bind("input",j)};a(document).bind("focusin",function(k){if(k.target&&k.target.type&&!k.target.readonly&&!k.target.readOnly&&!k.target.disabled&&c[(k.target.nodeName||"").toLowerCase()]&&!e[k.target.type])h(a(k.target))})}})();a.webshims.createReadyEvent("validity")}},true);
(function(a){var r,l=function(){if(!r){r=true;var q=parseInt("NaN",10),d=a.webshims.inputTypes,g=function(b){return typeof b=="number"||b&&b==b*1},f=function(b){return a('<input type="'+b+'" />').attr("type")===b},c=function(b){return(b.getAttribute("type")||"").toLowerCase()},e=function(b,j){var i=a.attr(b,"step");if(i==="any")return i;j=j||c(b);if(!d[j]||!d[j].step)return i;i=d.number.asNumber(i);return(!isNaN(i)&&i>0?i:d[j].step)*d[j].stepScaleFactor},h=function(b,j,i){if(!(b+"AsNumber"in i)){i[b+
"AsNumber"]=d[i.type].asNumber(j.attr(b));if(isNaN(i[b+"AsNumber"])&&b+"Default"in d[i.type])i[b+"AsNumber"]=d[i.type][b+"Default"]}},k=function(b,j){b=""+b;j-=b.length;for(var i=0;i<j;i++)b="0"+b;return b};a.webshims.addValidityRule("stepMismatch",function(b,j,i){if(j==="")return false;if(!("type"in i))i.type=c(b[0]);if(i.type=="date")return false;var m=false;if(d[i.type]&&d[i.type].step){if(!("step"in i))i.step=e(b[0],i.type);if(i.step=="any")return false;if(!("valueAsNumber"in i))i.valueAsNumber=
d[i.type].asNumber(j);if(isNaN(i.valueAsNumber))return false;h("min",b,i);b=i.minAsNumber;if(isNaN(b))b=d[i.type].stepBase||0;m=Math.abs((i.valueAsNumber-b)%i.step);m=!(m<=1.0E-7||Math.abs(m-i.step)<=1.0E-7)}return m});[{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}].forEach(function(b){a.webshims.addValidityRule(b.name,function(j,i,m){var o=false;if(i==="")return o;if(!("type"in m))m.type=c(j[0]);if(d[m.type]&&d[m.type].asNumber){if(!("valueAsNumber"in m))m.valueAsNumber=
d[m.type].asNumber(i);if(isNaN(m.valueAsNumber))return false;h(b.attr,j,m);if(isNaN(m[b.attr+"AsNumber"]))return o;o=m[b.attr+"AsNumber"]*b.factor<m.valueAsNumber*b.factor-1.0E-7}return o})});a.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(b){var j=c(b);return d[j]&&d[j].asNumber?d[j].asNumber(a.attr(b,"value")):q},setter:function(b,j,i){var m=c(b);if(d[m]&&d[m].numberToString)if(isNaN(j))a.attr(b,"value","");else{j=d[m].numberToString(j);if(j!==false)a.attr(b,"value",j);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else i()}});a.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(b){var j=c(b);return d[j]&&d[j].asDate&&!d[j].noAsDate?d[j].asDate(a.attr(b,"value")):null},setter:function(b,j,i){var m=c(b);if(d[m]&&d[m].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(j===null)a.attr(b,"value","");else{j=d[m].dateToString(j);if(j!==false)a.attr(b,"value",j);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else i()}});var p={number:{mismatch:function(b){return!g(b)},
step:1,stepScaleFactor:1,asNumber:function(b){return g(b)?b*1:q},numberToString:function(b){return g(b)?b:false}},range:{minDefault:0,maxDefault:100},date:{mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return true;var j=b.split(/\u002D/);if(j.length!==3)return true;var i=false;a.each(j,function(m,o){if(!(g(o)||o&&o=="0"+o*1)){i=true;return false}});if(i)return i;if(j[0].length!==4||j[1].length!=2||j[1]>12||j[2].length!=2||j[2]>33)i=true;return b!==this.dateToString(this.asDate(b,true))},step:1,
stepScaleFactor:864E5,asDate:function(b,j){if(!j&&this.mismatch(b))return null;return new Date(this.asNumber(b,true))},asNumber:function(b,j){var i=q;if(j||!this.mismatch(b)){b=b.split(/\u002D/);i=Date.UTC(b[0],b[1]-1,b[2])}return i},numberToString:function(b){return g(b)?this.dateToString(new Date(b*1)):false},dateToString:function(b){return b&&b.getFullYear?b.getUTCFullYear()+"-"+k(b.getUTCMonth()+1,2)+"-"+k(b.getUTCDate(),2):false}},time:{mismatch:function(b,j){if(!b||!b.split||!/\d$/.test(b))return true;
b=b.split(/\u003A/);if(b.length<2||b.length>3)return true;var i=false,m;if(b[2]){b[2]=b[2].split(/\u002E/);m=parseInt(b[2][1],10);b[2]=b[2][0]}a.each(b,function(o,s){if(!(g(s)||s&&s=="0"+s*1)||s.length!==2){i=true;return false}});if(i)return true;if(b[0]>23||b[0]<0||b[1]>59||b[1]<0)return true;if(b[2]&&(b[2]>59||b[2]<0))return true;if(m&&isNaN(m))return true;if(m)if(m<100)m*=100;else if(m<10)m*=10;return j===true?[b,m]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(b){b=new Date(this.asNumber(b));
return isNaN(b)?null:b},asNumber:function(b){var j=q;b=this.mismatch(b,true);if(b!==true){j=Date.UTC("1970",0,1,b[0][0],b[0][1],b[0][2]||0);if(b[1])j+=b[1]}return j},dateToString:function(b){if(b&&b.getUTCHours){var j=k(b.getUTCHours(),2)+":"+k(b.getUTCMinutes(),2),i=b.getSeconds();if(i!="0")j+=":"+k(i,2);i=b.getUTCMilliseconds();if(i!="0")j+="."+k(i,3);return j}else return false}},"datetime-local":{mismatch:function(b,j){if(!b||!b.split||(b+"special").split(/\u0054/).length!==2)return true;b=b.split(/\u0054/);
return d.date.mismatch(b[0])||d.time.mismatch(b[1],j)},noAsDate:true,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var j=q,i=this.mismatch(b,true);if(i!==true){b=b.split(/\u0054/)[0].split(/\u002D/);j=Date.UTC(b[0],b[1]-1,b[2],i[0][0],i[0][1],i[0][2]||0);if(i[1])j+=i[1]}return j},dateToString:function(b,j){return d.date.dateToString(b)+"T"+d.time.dateToString(b,j)}}};f("number")||a.webshims.addInputType("number",p.number);f("range")||a.webshims.addInputType("range",
a.extend({},p.number,p.range));f("date")||a.webshims.addInputType("date",p.date);f("time")||a.webshims.addInputType("time",a.extend({},p.date,p.time));f("datetime-local")||a.webshims.addInputType("datetime-local",a.extend({},p.date,p.time,p["datetime-local"]));(function(){var b=a.webshims.modules["number-date-type"].options,j=function(o,s,n){n=n||{};if(!("type"in n))n.type=c(o);if(!("step"in n))n.step=e(o,n.type);if(!("valueAsNumber"in n))n.valueAsNumber=d[n.type].asNumber(a.attr(o,"value"));var u=
n.step=="any"?d[n.type].step*d[n.type].stepScaleFactor:n.step;h("min",a(o),n);h("max",a(o),n);if(isNaN(n.valueAsNumber))n.valueAsNumber=d[n.type].stepBase||0;if(n.step!=="any")n.valueAsNumber=Math.round((n.valueAsNumber-(n.valueAsNumber-(n.minAsnumber||0))%n.step)*1E7)/1E7;o=n.valueAsNumber+u*s;if(!isNaN(n.minAsNumber)&&o<n.minAsNumber)o=n.valueAsNumber*s<n.minAsNumber?n.minAsNumber:isNaN(n.maxAsNumber)?Number.MAX_VALUE:n.maxAsNumber;else if(!isNaN(n.maxAsNumber)&&o>n.maxAsNumber)o=n.valueAsNumber*
s>n.maxAsNumber?n.maxAsNumber:isNaN(n.minAsNumber)?Number.MIN_VALUE:n.minAsNumber;return o};a.webshims.modules["number-date-type"].getNextStep=j;var i=function(o,s,n){if(!(o.disabled||o.readOnly||a(n).hasClass("step-controls"))){a.attr(o,"value",d[s].numberToString(j(o,a(n).hasClass("step-up")?1:-1,{type:s})));a(o).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==o)try{o.focus()}catch(u){}setTimeout(function(){if(document.activeElement!==o)try{o.focus()}catch(t){}a(o).one("blur.stepeventshim",
function(){a(o).trigger("change")})},0)}}};if(b.stepArrows){var m={elementNames:["input"],setter:function(o,s,n){n();if(s=a.data(o,"step-controls"))s[o.disabled||o.readonly?"addClass":"removeClass"]("disabled-step-control")}};a.webshims.attr("disabled",m);a.webshims.attr("readonly",m)}a.webshims.addReady(function(o){b.stepArrows&&a("input",o).each(function(){var s=c(this);if(!(!d[s]||!d[s].asNumber||!b.stepArrows||b.stepArrows!==true&&!b.stepArrows[s])){var n=this,u=a(this).css("direction")=="rtl"?
{action:"insertBefore",side:"Left",otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},t=a('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[u.action](this).bind("mousedown mousepress",function(x){i(n,s,x.target);return false});a(this).addClass("has-step-controls").data("step-controls",t).attr({readonly:this.readOnly,disabled:this.disabled});if(b.calculateWidth){var v=a(this).width()||parseInt(a(this).css("width"),10);if(v){var w=
(parseInt(a(this).css("margin"+u.side),10)||0)+(parseInt(t.css("margin"+u.side),10)||0);a(this).css("width",v-t.outerWidth(true));w&&t.css("margin"+u.side,w)}}}})})})();a.webshims.attr("type",{elementNames:["input"],getter:function(b){var j=c(b);return a.webshims.inputTypes[j]?j:b.type||b.getAttribute("type")},setter:true});a.webshims.createReadyEvent("number-date-type")}};a.support.validity===true?a.webshims.ready("validation-base",l,true):a.webshims.ready("validity",l,true)})(jQuery);
(function(a){a.support.inputUI="shim";var r=a.webshims.modules.inputUI.options,l=function(d){a("input",d).each(function(){var g=a.attr(this,"type");l[g]&&!a.data(this,"inputUIReplace")&&l[g](a(this))})};l.common=function(d,g,f){var c={css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},outerWidth:d.getouterWidth()};g.addClass(d[0].className).data("html5element",d);d.after(g).data("inputUIReplace",{visual:g,methods:f}).hide();return c};l["datetime-local"]=function(d){if(a.fn.datepicker){var g=
a('<span class="input-datetime-local"><input type="text" class="input-datetime-local-date" /><input type="time" class="input-datetime-local-time" /></span>'),f=this.common(d,g,l["datetime-local"].attrs),c;a("input",g).data("html5element",a.data(g[0],"html5element"));if(f.css){g.css(f.css);if(f.outerWidth){g.outerWidth(f.outerWidth);f=g.getwidth();a("input.input-datetime-local-date").css({marginLeft:0,marginRight:2}).outerWidth(Math.floor(f*0.61));a("input.input-datetime-local-time").css({marginLeft:2,
marginRight:0}).outerWidth(Math.floor(f*0.37))}}a.webshims.triggerDomUpdate(g);c=a("input.input-datetime-local-date",g).datepicker(a.extend({},r.date)).bind("change",function(){var e,h=a("input.input-datetime-local-time",g).attr("value");try{e=(e=a.datepicker.parseDate(c.settings.dateFormat,a("input.input-datetime-local-date",g).attr("value")))?a.datepicker.formatDate("yy-mm-dd",e):a("input.input-datetime-local-date",g).attr("value")}catch(k){e=a("input.input-datetime-local-date",g).attr("value")}if(!a("input.input-datetime-local-time",
g).attr("value")){h="00:00";a("input.input-datetime-local-time",g).attr("value",h)}l["datetime-local"].blockAttr=true;d.attr("value",e+"T"+h);l["datetime-local"].blockAttr=false;d.trigger("change")}).data("datepicker");a("input.input-datetime-local-time",g).bind("input change",function(){var e=d.attr("value").split("T");if(e.length<2||!e[0])e[0]=a.datepicker.formatDate("yy-mm-dd",new Date);e[1]=a.attr(this,"value");l["datetime-local"].blockAttr=true;try{a("input.input-datetime-local-date",g).attr("value",
a.datepicker.formatDate(c.settings.dateFormat,a.datepicker.parseDate("yy-mm-dd",e[0])))}catch(h){}d.attr("value",e.join("T"));l["datetime-local"].blockAttr=false;d.trigger("change")});c.dpDiv.addClass("input-date-datepicker-control");a.each(["disabled","min","max","value"],function(e,h){d.attr(h,function(k,p){return p||""})})}};l["datetime-local"].attrs={disabled:function(d,g,f){a("input.input-datetime-local-date",g).datepicker("option","disabled",!!f);a("input.input-datetime-local-time",g).attr("disabled",
!!f)},min:function(d,g,f){f=f.split?f.split("T"):[];try{f=a.datepicker.parseDate("yy-mm-dd",f[0])}catch(c){f=false}f&&a("input.input-datetime-local-date",g).datepicker("option","minDate",f)},max:function(d,g,f){f=f.split?f.split("T"):[];try{f=a.datepicker.parseDate("yy-mm-dd",f[0])}catch(c){f=false}f&&a("input.input-datetime-local-date",g).datepicker("option","maxDate",f)},value:function(d,g,f){if(!l["datetime-local"].blockAttr){var c;f=f.split?f.split("T"):[];try{c=a.datepicker.parseDate("yy-mm-dd",
f[0])}catch(e){c=false}if(c){a("input.input-datetime-local-date",g).datepicker("setDate",c);a("input.input-datetime-local-time",g).attr("value",f[1]||"00:00")}else{a("input.input-datetime-local-date",g).attr("value",f[0]||"");a("input.input-datetime-local-time",g).attr("value",f[1]||"")}}}};l.date=function(d){if(a.fn.datepicker){var g=a('<input type="text" class="input-date" />'),f=this.common(d,g,l.date.attrs),c;if(f.css){g.css(f.css);f.outerWidth&&g.outerWidth(f.outerWidth)}c=g.datepicker(a.extend({},
r.date)).bind("change",function(){l.date.blockAttr=true;var e;try{e=(e=a.datepicker.parseDate(c.settings.dateFormat,g.attr("value")))?a.datepicker.formatDate("yy-mm-dd",e):g.attr("value")}catch(h){e=g.attr("value")}d.attr("value",e);l.date.blockAttr=false;d.trigger("change")}).data("datepicker");c.dpDiv.addClass("input-date-datepicker-control");a.each(["disabled","min","max","value"],function(e,h){d.attr(h,function(k,p){return p||""})})}};l.date.attrs={disabled:function(d,g,f){g.datepicker("option",
"disabled",!!f)},min:function(d,g,f){try{f=a.datepicker.parseDate("yy-mm-dd",f)}catch(c){f=false}f&&g.datepicker("option","minDate",f)},max:function(d,g,f){try{f=a.datepicker.parseDate("yy-mm-dd",f)}catch(c){f=false}f&&g.datepicker("option","maxDate",f)},value:function(d,g,f){if(!l.date.blockAttr){try{var c=a.datepicker.parseDate("yy-mm-dd",f)}catch(e){c=false}c?g.datepicker("setDate",c):g.attr("value",f)}}};l.range=function(d){if(a.fn.slider){var g=a('<span class="input-range" />'),f=this.common(d,
g,l.range.attrs);if(f.css){g.css(f.css);f.outerWidth&&g.outerWidth(f.outerWidth)}g.slider(a.extend(r.slider,{change:function(c,e){if(c.originalEvent){l.range.blockAttr=true;d.attr("value",e.value);l.range.blockAttr=false;d.trigger("change")}}}));a.each(["disabled","min","max","value","step"],function(c,e){d.attr(e,function(h,k){return k||""})})}};l.range.attrs={disabled:function(d,g,f){g.slider("option","disabled",!!f)},min:function(d,g,f){f=f?f*1||0:0;g.slider("option","min",f)},max:function(d,g,
f){f=f||f===0?f*1||100:100;g.slider("option","max",f)},value:function(d,g,f){f=a(d).attr("valueAsNumber");if(isNaN(f)){f=(g.slider("option","max")-g.slider("option","min"))/2;d.value=f}l.range.blockAttr||g.slider("option","value",f)},step:function(d,g,f){f=f&&a.trim(f)?f*1||1:1;g.slider("option","step",f)}};a.each(["disabled","min","max","value","step"],function(d,g){a.webshims.attr(g,{elementNames:["input"],setter:function(f,c,e){var h=a.data(f,"inputUIReplace");e();h&&h.methods[g]&&h.methods[g](f,
h.visual,c)},getter:true})});var q=function(d){if(d){d=a.extend({},d,r.date);a("input.hasDatepicker").filter(".input-date, .input-datetime-local-date").datepicker("option",d).each(function(){var g=a.data(this,"html5element");g&&a.each(["disabled","min","max","value"],function(f,c){g.attr(c,function(e,h){return h||""})})});a.datepicker.setDefaults(d)}};a(document).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){a.datepicker&&a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.datepicker.regional,
"inputUI",q)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});a.webshims.ready("number-date-type",function(){a.webshims.addReady(function(d){a(document).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",function(){if(a.datepicker||a.fn.slider){l(d);a.datepicker&&a.fn.slider&&a(document).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui")}})});a.webshims.createReadyEvent("inputUI")},true)})(jQuery);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var r=function(c,e,h,k,p){if(!k){k=a.data(c,"placeHolder");if(!k)return}if(p=="focus"||!p&&c===document.activeElement)k.box.removeClass("placeholder-visible");else{if(e===false)e=a.attr(c,"value");if(e)k.box.removeClass("placeholder-visible");else{if(h===false)h=a.attr(c,"placeholder");k.box[h&&!e?"addClass":"removeClass"]("placeholder-visible")}}},l=0,q=function(c){c=a(c);var e=c.attr("id"),h=!!(c.attr("title")||c.attr("aria-labeledby"));
if(!h&&e)h=!!a("label[for="+e+"]",c[0].form)[0];else if(!e){l++;e="input-placeholder-id-"+l;c.attr("id",e)}return a(h?'<span class="placeholder-text"></span>':'<label for="'+e+'" class="placeholder-text"></label>')},d=function(){var c=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(h){var k=a.data(h,"placeHolder");if(k)return k;k=a.data(h,"placeHolder",{text:q(h)});k.box=a(h).wrap('<span class="placeholder-box placeholder-box-'+(h.nodeName||"").toLowerCase()+
'" />').bind("focus.placeholder blur.placeholder",function(i){r(this,false,false,k,i.type)}).parent();k.text.insertAfter(h).bind("mousedown.placeholder",function(){r(this,false,false,k,"focus");h.focus();return false});a.each(["Left","Top"],function(i,m){var o=(parseInt(a.curCSS(h,"padding"+m),10)||0)+Math.max(parseInt(a.curCSS(h,"margin"+m),10)||0,0)+(parseInt(a.curCSS(h,"border"+m+"Width"),10)||0);k.text.css("padding"+m,o)});var p=a.curCSS(h,"lineHeight"),b={width:a(h).getwidth(),height:a(h).getheight()},
j=a.curCSS(h,"float");k.text.css("lineHeight")!==p&&k.text.css("lineHeight",p);b.width&&b.height&&k.text.css(b);j!=="none"&&k.box.addClass("placeholder-box-"+j);return k},update:function(h,k){if(e[a.attr(h,"type")]||a.nodeName(h,"textarea")){if(a.nodeName(h,"input"))k=k.replace(c,"");var p=d.create(h);h.setAttribute("placeholder",k);p.text.text(k);r(h,false,k,p)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,e){d.update(c,e)},getter:function(c){return c.getAttribute("placeholder")||
""}});var g={elementNames:["input","textarea"],setter:function(c,e,h){var k=c.getAttribute("placeholder");k&&"value"in c&&r(c,e,k);h()},getter:true};a.webshims.attr("value",g);var f=a.fn.val;a.fn.val=function(c){c!==undefined&&this.each(function(){this.nodeType===1&&g.setter(this,c,a.noop)});return f.apply(this,arguments)};a.webshims.addReady(function(c){a("input[placeholder], textarea[placeholder]",c).attr("placeholder",function(e,h){return h})})}})(jQuery);