webshims.register("form-number-date-ui",function(e,t,i,n,a,r){"use strict";var o,s=t.formcfg,u=["01","02","03","04","05","06","07","08","09","10","11","12"],l=function(e){e.stopImmediatePropagation()},c=function(){var t;return function(){return t||(t='<option value=""></option>'+e.map(u,function(e){return'<option value="'+e+'"]>'+e+"</option>"}).join("")),t}}(),p=function(t){if(!o.patterns[t+"Obj"]){var i={};e.each(o.patterns[t].split(o[t+"Format"]),function(e,t){i[t]=e}),o.patterns[t+"Obj"]=i}},d={date:{_create:function(t){var i={splits:[e('<input type="text" class="yy" size="4" inputmode="numeric" />')[0]]};return t.monthSelect?i.splits.push(e('<select class="mm">'+c(t)+"</select>")[0]):i.splits.push(e('<input type="text" class="mm" inputmode="numeric" maxlength="2" size="2" />')[0]),i.splits.push(e('<input type="text" class="dd ws-spin" inputmode="numeric" maxlength="2" size="2" />')[0]),i.elements=[i.splits[0],e('<span class="ws-input-seperator" />')[0],i.splits[1],e('<span class="ws-input-seperator" />')[0],i.splits[2]],i},sort:function(t){p("d");var i=0,n=e(".ws-input-seperator",t).html(o.dFormat),a=e("input, select",t);e.each(o.patterns.dObj,function(e){var r=a.filter("."+e);r[0]&&(r.appendTo(t),n.length>i&&n.eq(i).insertAfter(r),i++)})}},month:{_create:function(t){var i={splits:[e('<input type="text" class="yy" inputmode="numeric" size="4" />')[0]]};return t.monthSelect?i.splits.push(e('<select class="mm ws-spin">'+c(t)+"</select>")[0]):(i.splits.push(e('<input type="text" class="mm ws-spin" />')[0]),t.onlyMonthDigits&&e(i.splits[1]).attr({inputmode:"numeric",size:2,maxlength:2})),i.elements=[i.splits[0],e('<span class="ws-input-seperator" />')[0],i.splits[1]],i},sort:function(t){var i,n=e(".ws-input-seperator",t).html(o.dFormat),a=e("input.mm, select.mm",t);o.date.showMonthAfterYear?(a.appendTo(t),i="insertBefore"):(a.prependTo(t),i="insertAfter"),n[i](a)}}},f=new Date((new Date).getTime()-1e3*60*(new Date).getTimezoneOffset());f=new Date(f.getFullYear(),f.getMonth(),f.getDate(),f.getHours()).getTime();var h={number:{step:1},"datetime-local":{step:60,start:new Date(f).getTime()},time:{step:60},month:{step:1,start:new Date(f)},date:{step:1,start:new Date(f)}},m=function(){var i=function(){return t.getID(this)};return function(t,n,a){e(t).attr({"aria-labelledby":n.map(i).get().join(" ")}),a||n.on("click",function(e){return t.getShadowFocusElement().focus(),e.preventDefault(),!1})}}(),v=function(e){return e?(e+="",1==e.length?"0"+e:e):""};(function(){s.de=e.extend(!0,{numberFormat:{",":".",".":","},timeSigns:":. ",numberSigns:",",dateSigns:".",dFormat:".",patterns:{d:"dd.mm.yy"},month:{currentText:"Aktueller Monat"},time:{currentText:"Jetzt"},date:{close:"schlie\u00dfen",clear:"L\u00f6schen",prevText:"Zur\u00fcck",nextText:"Vor",currentText:"Heute",monthNames:["Januar","Februar","M\u00e4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],monthNamesShort:["Jan","Feb","M\u00e4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],weekHeader:"KW",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.de||{}),s.en=e.extend(!0,{numberFormat:{".":".",",":","},numberSigns:".",dateSigns:"/",timeSigns:":. ",dFormat:"/",patterns:{d:"mm/dd/yy"},meridian:["AM","PM"],month:{currentText:"This month"},time:{currentText:"Now"},date:{closeText:"Done",clear:"Clear",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}},s.en||{}),s["en-US"]||(s["en-US"]=e.extend(!0,{},s.en)),s["en-GB"]||(s["en-GB"]=e.extend(!0,{},s.en,{date:{firstDay:1},patterns:{d:"dd/mm/yy"}})),s["en-AU"]||(s["en-AU"]=e.extend(!0,{},s["en-GB"])),s[""]||(s[""]=s["en-US"]),o=s[""];var i=function(t){if(!t.date.monthkeys){var i=function(e,i){var n,a=e+1;n=10>a?"0"+a:""+a,t.date.monthkeys[a]=n,t.date.monthkeys[i]=n,t.date.monthkeys[i.toLowerCase()]=n};t.date.monthkeys={},t.date.monthDigits=u,t.numberSigns+="-",t.meridian&&(t.timeSigns+=t.meridian[0]+t.meridian[1]),e.each(t.date.monthNames,i),e.each(t.date.monthNamesShort,i)}t.colorSigns||(t.colorSigns="#abcdefABCDEF"),t["datetime-localSigns"]||(t["datetime-localSigns"]=t.dateSigns+t.timeSigns),t["datetime-local"]||(t["datetime-local"]={}),!t["datetime-local"].currentText&&t.time.currentText&&(t["datetime-local"].currentText=t.time.currentText)},r=function(){i(o),e(n).triggerHandler("wslocalechange")};r(),t.activeLang({register:"form-core",callback:function(){e.each(arguments,function(e,t){return s[t]?(s[t]!=o&&(o=s[t],r()),!1):a})}}),t.activeLang({langObj:s,module:"form-core",callback:function(e){o!=e&&(o=e,r())}})})(),function(){var i=function(t){e(this)["mousepressstart"==t.type?"addClass":"removeClass"]("mousepress-ui")},n=function(e,t){return"number"==typeof e||e&&e==1*e?1*e:t},r={number:function(e){return(e+"").replace(/\,/g,"").replace(/\./,o.numberFormat["."])},time:function(t){var i;return t&&o.meridian&&(t=t.split(":"),i=1*t[0],i&&i>=12?(t[0]=v(i-12+""),i=1):i=0,"00"===t[0]&&(t[0]="12"),t=e.trim(t.join(":"))+" "+o.meridian[i]),t},"datetime-local":function(t,i){var n=e.trim(t||"").split("T");return 2==n.length&&(t=this.date(n[0],i)+" "+this.time(n[1],i)),t},month:function(e,t){var i,n=e.split("-");return n[0]&&n[1]?(i=o.date[t.formatMonthNames]||o.date[t.monthNames]||o.date.monthNames,n[1]=i[1*n[1]-1],t&&t.splitInput?e=[n[0]||"",n[1]||""]:n[1]&&(e=o.date.showMonthAfterYear?n.join(" "):n[1]+" "+n[0])):t&&t.splitInput&&(e=[n[0]||"",n[1]||""]),e},date:function(e,t){var i=(e+"").split("-");return i[2]&&i[1]&&i[0]?t&&t.splitInput?e=i:(e=o.patterns.d.replace("yy",i[0]||""),e=e.replace("mm",i[1]||""),e=e.replace("dd",i[2]||"")):t&&t.splitInput&&(e=[i[0]||"",i[1]||"",i[2]||""]),e},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),7==e.length&&c("color").isValid(e)&&(t=e)),t}},s={number:function(e){return(e+"").replace(o.numberFormat[","],"").replace(o.numberFormat["."],".")},"datetime-local":function(t,i){var n,a=e.trim(t||"").split(/\s+/);return 2==a.length?(-1!=a[0].indexOf(":")&&-1==a[1].indexOf(":")&&(n=a[1],a[1]=a[0],a[0]=n),t=this.date(a[0],i)+"T"+this.time(a[1],i)):3==a.length&&(t=this.date(a[0],i)+"T"+this.time(a[1]+a[2],i)),t},time:function(t){var i;return t&&o.meridian&&("12"===t.substr(0,2)&&(t="00"+t.substr(2)),-1!=t.indexOf(o.meridian[1])&&(t=t.split(":"),i=1*t[0],isNaN(i)||(t[0]=i+12),t=t.join(":")),t=e.trim(t.replace(o.meridian[0],"").replace(o.meridian[1],""))),t},month:function(e,t,i){var n=t.splitInput?e:e.trim().split(/[\.\s-\/\\]+/);return 2==n.length&&n[0]&&n[1]?(n[0]=!i&&o.date.monthkeys[n[0]]||n[0],n[1]=!i&&o.date.monthkeys[n[1]]||n[1],e=2==n[1].length&&n[0].length>3?n[0]+"-"+n[1]:2==n[0].length&&n[1].length>3?n[1]+"-"+n[0]:""):t.splitInput&&(e=""),e},date:function(e,t,i){p("d");var n;return t.splitInput?n={yy:0,mm:1,dd:2}:(n=o.patterns.dObj,e=e.split(o.dFormat)),3==e.length&&e[0]&&e[1]&&e[2]&&(!i||e[n.yy].length>3&&2==e[n.mm].length&&2==e[n.dd].length)?[v(e[n.yy]),v(e[n.mm]),v(e[n.dd])].join("-"):""},color:function(e){var t="#000000";return e&&(e=e.toLowerCase(),0!==e.indexOf("#")&&(e="#"+e),4==e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),7==e.length&&c("color").isValid(e)&&(t=e)),t}},u={date:function(e,t){var i=(e||"").split("-");return i=3==i.length?t.splitInput?i:o.patterns.d.replace("yy",i[0]).replace("mm",i[1]).replace("dd",i[2]):t.splitInput?[e,e,e]:e},month:function(e,t){var i=(e||"").split("-");return i=2==i.length?t.splitInput?i:o.date.showMonthAfterYear?i[0]+" "+i[1]:i[1]+" "+i[0]:t.splitInput?[e,e]:e}},c=function(){var t={};return function(i){var n;return t[i]||(n=e('<input type="'+i+'" step="any" />'),t[i]={asNumber:function(e){var t="object"==typeof e?"valueAsDate":"value";return n.prop(t,e).prop("valueAsNumber")},asValue:function(e){var t="object"==typeof e?"valueAsDate":"valueAsNumber";return n.prop(t,e).prop("value")},isValid:function(t,i){return i&&(i.nodeName||i.jquery)&&(i={min:e(i).prop("min")||"",max:e(i).prop("max")||"",step:e(i).prop("step")||"any"}),i=e.extend({step:"any",min:"",max:""},i||{}),n.attr(i).prop("value",t).is(":valid")&&n.prop("value")==t}}),t[i]}}();h.range=h.number;var f={_create:function(){var i,n,a,r=this.options,o=this.createOpts;for(this.type=r.type,this.orig=r.orig,this.buttonWrapper=e('<span class="input-buttons '+this.type+'-input-buttons"></span>').insertAfter(this.element),this.options.containerElements.push(this.buttonWrapper[0]),r.mirrorValidity=r.mirrorValidity&&this.orig&&Modernizr.formvalidation&&!t.bugs.bustedValidity,r.splitInput&&this._addSplitInputs?(r.monthSelect&&this.element.addClass("ws-month-select"),this._addSplitInputs()):this.inputElements=this.element,h[this.type]&&"object"==typeof h[this.type].start&&(h[this.type].start=this.asNumber(h[this.type].start)),t.picker[this.type]||(r.buttonOnly=!1),i=0;o.length>i;i++)null!=r[o[i]]&&this[o[i]](r[o[i]],r[o[i]]);"color"==this.type&&this.inputElements.prop("maxLength",7),this.addBindings(),e(this.element).data("wsWidget"+r.type,this),r.buttonOnly&&this.inputElements.prop({readOnly:!0}),this._init=!0,r.mirrorValidity&&(n=this,a=function(){clearTimeout(a._timerDealy),a._timerDealy=setTimeout(a._wsexec,9)},a._wsexec=function(){clearTimeout(a._timerDealy),n.mirrorValidity(!0)},a(),e(this.orig).on("change input",function(e){"input"==e.type?a():a._wsexec()}))},mirrorValidity:function(t){if(this._init&&this.options.mirrorValidity){t||e.prop(this.orig,"validity");var i=e(this.orig).getErrorMessage();i!==this.lastErrorMessage&&(this.inputElements.prop("setCustomValidity",function(e,t){t._supvalue&&t._supvalue.call(this,i)}),this.lastErrorMessage=i)}},addBindings:function(){var t,n=this,r=this.options,s=function(){var t={};return{init:function(i,a,r){t[i]||(t[i]={fn:r},e(n.orig).on(i,function(){t[i].val=e.prop(n.orig,"value")})),t[i].val=a},call:function(e,i){t[e]&&t[e].val!=i&&(clearTimeout(t[e].timer),t[e].val=i,t[e].timer=setTimeout(function(){t[e].fn(i,n)},9))}}}(),c=function(){s.init("input",e.prop(n.orig,"value"),n.options.input),s.init("change",e.prop(n.orig,"value"),n.options.change)},p={},d=function(e){return d.prevent?(e.preventDefault(),(t||n.element.getShadowFocusElement()).focus(),l(e),!0):a};(function(){var t,i=function(i){var a;clearTimeout(t),a=n.parseValue(),"color"==n.type&&n.inputElements.val(a),e.prop(n.orig,"value",a),s.call("input",a),i&&"wsupdatevalue"==i.type||s.call("change",a)},a=function(){clearTimeout(t)},o=function(e){clearTimeout(t),t=setTimeout(i,0),"change"==e.type&&(l(e),r.splitInput||i())};n.element.on("wsupdatevalue",i),n.inputElements.add(n.buttonWrapper).add(n.element).on({"focus focusin":a,"blur focusout change":o}),setTimeout(function(){n.popover&&(n.popover.element.on("wspopoverhide",o),e("> *",n.popover.element).on({focusin:a,focusout:o}))},0)})();var f={},m=r.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),v={blur:function(e){d(e)||r.disabled||r.readonly||d.prevent||(t=!1),l(e)},focus:function(){t||(c(),t=this)},keypress:function(e){if(!e.isDefaultPrevented()){var t,i=!0,a=e.keyCode;e.ctrlKey||e.metaKey||!o[n.type+"Signs"]?i=!1:(t=String.fromCharCode(null==e.charCode?a:e.charCode),i=!(" ">t||(o[n.type+"Signs"]+"0123456789").indexOf(t)>-1)),i&&e.preventDefault()}},input:"color"==this.type&&this.isValid?e.noop:function(){var e,t=function(){var e=n.parseValue(!0);e&&n.isValid(e)&&n.setInput(e)};return function(){clearTimeout(e),e=setTimeout(t,200)}}(),"input keydown keypress":function(){var t,i=!1,n=function(){i===!0?(i="semi",t=setTimeout(n,250)):i=!1},a=function(){i=!0,clearTimeout(t),t=setTimeout(n,300)},o=function(){var e=this;setTimeout(function(){e.focus(),e.select()},4),a()};return function(t){if(r.splitInput&&r.jumpInputs)if("input"==t.type){if(e.prop(this,"value").length===e.prop(this,"maxLength"))try{e(this).next().next("input, select").each(o)}catch(n){}}else t.shiftKey||t.crtlKey||9!=t.keyCode||i!==!0&&(!i||e.prop(this,"value"))||t.preventDefault()}}()},g=function(){return r.disabled||t||n.element.getShadowFocusElement().focus(),d.set(),!1};d.set=function(){var e,t=function(){d.prevent=!1};return function(){clearTimeout(e),d.prevent=!0,setTimeout(t,9)}}(),this.buttonWrapper.on("mousedown",g),this.setInput=function(e){n.value(e),s.call("input",e)},this.setChange=function(e){n.setInput(e),s.call("change",e)},this.inputElements.on(v),h[this.type]&&(["stepUp","stepDown"].forEach(function(e){p[e]=function(i){if(!r.disabled&&!r.readonly){t||g();var a=!1;i||(i=1);try{n.elemHelper[e](i),a=n.elemHelper.prop("value")}catch(o){!r.value&&n.maxAsNumber>=n.minAsNumber&&(a=r.defValue)}return a!==!1&&r.value!=a&&(n.value(a),s.call("input",a)),a}}}),r.noSpinbtn||(f[e.fn.mwheelIntent?"mwheelIntent":"mousewheel"]=function(e,i){i&&t&&!r.disabled&&(p[i>0?"stepUp":"stepDown"](),e.preventDefault())},f.keydown=function(t){if(!(r.list||t.isDefaultPrevented()||t.altKey&&40==t.keyCode||e.attr(this,"list"))){var i=!0,n=t.keyCode;38==n?p.stepUp():40==n?p.stepDown():i=!1,i&&t.preventDefault()}},m.attr({autocomplete:"off",role:"spinbutton"}).on(f)),e(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",i).on("mousedown mousepress",".step-up",function(){p.stepUp()}).on("mousedown mousepress",".step-down",function(){p.stepDown()})),"color"!=this.type&&function(){var t;r.splitInput?(t=function(){n.reorderInputs()},n.reorderInputs()):t=function(){r.value&&n.value(r.value,!0),u[n.type]&&r.placeholder&&n.placeholder(r.placeholder)},e(n.orig).onWSOff("wslocalechange",t)}(),c()},required:function(e,t){this.inputElements.attr({"aria-required":""+t}),this.mirrorValidity()},parseValue:function(t){var i=this.inputElements.map(function(){return e.prop(this,"value")}).get();return this.options.splitInput||(i=i[0]),s[this.type](i,this.options,t)},formatValue:function(e,t){return r[this.type](e,t===!1?!1:this.options)},createOpts:["readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],placeholder:function(t){var i=this.options;i.placeholder=t;var n=t;u[this.type]&&(n=u[this.type](t,this.options)),i.splitInput&&"object"==typeof n?e.each(this.splits,function(t,i){e.prop(i,"placeholder",n[t])}):this.element.prop("placeholder",n)},initDataList:function(){var t,i=this,n=function(){e(i.orig).jProp("list").off("updateDatalist",n).on("updateDatalist",n),clearTimeout(t),t=setTimeout(function(){i.list&&i.list()},9)};e(this.orig).onTrigger("listdatalistchange",n)},getOptions:function(){var t={},i=e(this.orig).jProp("list");return i.find("option").each(function(){t[e.prop(this,"value")]=e.prop(this,"label")}),[t,i.data("label")]},list:function(t){"number"==this.type&&this.element.attr("list",e.attr(this.orig,"list")),this.options.list=t,this._propertyChange("list")},_propertyChange:e.noop,tabindex:function(t){this.options.tabindex=t,this.inputElements.prop("tabindex",this.options.tabindex),e("button",this.buttonWrapper).prop("tabindex",this.options.tabindex)},title:function(t){!t&&this.orig&&null==e.attr(this.orig,"title")&&(t=null),this.options.title=t,null==t?this.inputElements.removeAttr("title"):this.inputElements.prop("title",this.options.title)}};["defaultValue","value"].forEach(function(e){f[e]=function(t,i){(!this._init||i||t!==this.options[e])&&(this.element.prop(e,this.formatValue(t)),this.options[e]=t,this._propertyChange(e),this.mirrorValidity())}}),["readonly","disabled"].forEach(function(t){var i="disabled"==t;f[t]=function(n,a){var r=this.options;r[t]==a&&this._init||(r[t]=!!a,!i&&r.buttonOnly?this.inputElements.attr({"aria-readonly":r[t]}):this.inputElements.prop(t,r[t]),this.buttonWrapper[r[t]?"addClass":"removeClass"]("ws-"+t),i&&e("button",this.buttonWrapper).prop("disabled",r[t]))}});var m=e.extend({},f,{_create:function(){var t=this.options,i=c(t.type);this.elemHelper=e('<input type="'+t.type+'" />'),this.asNumber=i.asNumber,this.asValue=i.asValue,this.isValid=i.isValid,f._create.apply(this,arguments),this._init=!1,this.buttonWrapper.html('<span unselectable="on" class="step-controls"><span class="step-up"></span><span class="step-down"></span></span>'),"number"==this.type&&this.inputElements.attr("inputmode","numeric"),t.min||"number"!=typeof t.relMin||(t.min=this.asValue(this.getRelNumber(t.relMin)),e.prop(this.orig,"min",t.min)),t.max||"number"!=typeof t.relMax||(t.max=this.asValue(this.getRelNumber(t.relMax)),e.prop(this.orig,"max",t.max)),this._init=!0},createOpts:["step","min","max","readonly","title","disabled","tabindex","placeholder","defaultValue","value","required"],_addSplitInputs:function(){if(!this.inputElements){var t=d[this.type]._create(this.options);this.splits=t.splits,this.inputElements=e(t.elements).prependTo(this.element).filter("input, select")}},getRelNumber:function(e){var t=h[this.type].start||0;return e&&(t+=e),t},addZero:v,_setStartInRange:function(){var e=this.getRelNumber(this.options.relDefaultValue);!isNaN(this.minAsNumber)&&this.minAsNumber>e?e=this.minAsNumber:!isNaN(this.maxAsNumber)&&e>this.maxAsNumber&&(e=this.maxAsNumber),this.elemHelper.prop("valueAsNumber",e),this.options.defValue=this.elemHelper.prop("value")},reorderInputs:function(){if(d[this.type]){var e=this.element;d[this.type].sort(e,this.options),setTimeout(function(){var i=t.data(e);i&&i.shadowData&&(i.shadowData.shadowFocusElement=e.find("input, select")[0]||e[0])},9)}},value:function(t,i){(!this._init||i||this.options.value!==t)&&(this.valueAsNumber=this.asNumber(t),this.options.value=t,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",t),this.options.defValue=""),t=r[this.type](t,this.options),this.options.splitInput?e.each(this.splits,function(i,n){e.prop(n,"value",t[i])}):this.element.prop("value",t),this._propertyChange("value"),this.mirrorValidity())},step:function(e){var t=h[this.type];this.options.step=e,this.elemHelper.prop("step",n(e,t.step)),this.mirrorValidity()},_beforeValue:function(e){this.valueAsNumber=this.asNumber(e),this.options.value=e,isNaN(this.valueAsNumber)||!isNaN(this.minAsNumber)&&this.valueAsNumber<this.minAsNumber||!isNaN(this.maxAsNumber)&&this.valueAsNumber>this.maxAsNumber?this._setStartInRange():(this.elemHelper.prop("value",e),this.options.defValue="")}});["defaultValue","value"].forEach(function(t){var i="value"==t;m[t]=function(n,a){(!this._init||a||this.options[t]!==n)&&(i&&this._beforeValue(n),n=r[this.type](n,this.options),this.options.splitInput?e.each(this.splits,function(a,r){t in r||i||!e.nodeName(r,"select")?e.prop(r,t,n[a]):e('option[value="'+n[a]+'"]',r).prop("defaultSelected",!0)}):this.element.prop(t,n),this._propertyChange(t),this.mirrorValidity())}}),e.each({min:1,max:-1},function(e,t){var i=e+"AsNumber";m[e]=function(n){this.elemHelper.prop(e,n),this[i]=this.asNumber(n),null!=this.valueAsNumber&&(isNaN(this.valueAsNumber)||!isNaN(this[i])&&this.valueAsNumber*t<this[i]*t)&&this._setStartInRange(),this.options[e]=n,this._propertyChange(e),this.mirrorValidity()}}),e.fn.wsBaseWidget=function(t){return t=e.extend({},t),this.each(function(){e.webshims.objectCreate(f,{element:{value:e(this)}},t)})},e.fn.spinbtnUI=function(t){return t=e.extend({monthNames:"monthNames",size:1,startView:0},t),this.each(function(){e.webshims.objectCreate(m,{element:{value:e(this)}},t)})}}(),function(){var i={},a=function(e,i){return e=("color"==e?"color":"forms")+"-picker",a[i+"Loaded"+e]||(a[i+"Loaded"+e]=!0,t.ready(i,function(){t.loader.loadList([e])})),e};r.addZero=v,t.loader.addModule("forms-picker",{noAutoCallback:!0,options:r}),t.loader.addModule("color-picker",{noAutoCallback:!0,css:"jpicker/jpicker.css",options:r}),t.inlinePopover={_create:function(){this.element=e('<div class="ws-inline-picker"><div class="ws-po-box" /></div>').data("wspopover",this),this.contentElement=e(".ws-po-box",this.element),this.element.insertAfter(this.options.prepareFor)},show:e.noop,hide:e.noop,preventBlur:e.noop,isVisible:!0},i._genericSetFocus=function(t,i){if(t=e(t||this.activeButton),!this.popover.openedByFocus&&!i){var n=this,a=function(e){clearTimeout(n.timer),n.timer=setTimeout(function(){t[0]&&(t[0].focus(),e===!0||t.is(":focus")||a(!0))},n.popover.isVisible?99:360)};this.popover.activateElement(t),a()}},i._actions={changeInput:function(e,t,n){n.options.noChangeDismiss||i._actions.cancel(e,t,n),n.setChange(e)},cancel:function(e,t,i){i.options.inlinePicker||(t.stopOpen=!0,i.element.getShadowFocusElement().focus(),setTimeout(function(){t.stopOpen=!1},9),t.hide())}},i.commonInit=function(t,i){var a;i.isDirty=!0,i.element.on("updatepickercontent pickerchange",function(){a=!1}),t.options.inlinePicker||i.contentElement.on({keydown:function(n){if(9==n.keyCode){a||(a=e('input:not(:disabled), [tabindex="0"]:not(:disabled)',this).filter(":visible"));var r=a.index(n.target);if(n.shiftKey&&0>=r)return a.last().focus(),!1;if(!n.shiftKey&&r>=a.length-1)return a.first().focus(),!1}else if(27==n.keyCode)return t.element.getShadowFocusElement().focus(),i.hide(),!1}}),t._propertyChange=function(){var e,n=function(){i.isVisible&&i.element.triggerHandler("updatepickercontent")};return function(a){("value"!=a||t.options.inlinePicker)&&(i.isDirty=!0,i.isVisible&&(clearTimeout(e),e=setTimeout(n,9)))}}(),i.activeElement=e([]),i.activateElement=function(t){t=e(t),t[0]!=i.activeElement[0]&&(i.activeElement.removeClass("ws-focus"),t.addClass("ws-focus")),i.activeElement=t},i.element.on({wspopoverbeforeshow:function(){t.element.triggerHandler("wsupdatevalue"),i.element.triggerHandler("updatepickercontent")}}),e(t.orig).on("remove",function(i){i.originalEvent||e(n).off("wslocalechange",t._propertyChange)})},i._common=function(n){var r=n.options,o=t.objectCreate(r.inlinePicker?t.inlinePopover:t.wsPopover,{},{prepareFor:r.inlinePicker?n.buttonWrapper:n.element,position:r.widgetPosition}),s=e('<button type="button" class="ws-popover-opener"><span /></button>').appendTo(n.buttonWrapper),u=function(){(i[n.type].showPickerContent||i.showPickerContent)(n,o)},c=function(){var e=a(n.type,"DOM");r.disabled||r.readonly||!r.inlinePicker&&o.isVisible||(t.ready(e,u),o.show(n.element))},p=function(){(r.inlinePicker||o.isVisible)&&o.activeElement&&(o.openedByFocus=!1,o.activeElement.focus()),c()};r.containerElements.push(o.element[0]),"color"!=n.type&&(r.yearButtons&&(r.startView=2),r.startView||(r.startView=0),"time"==n.type&&(r.minView=3,r.startView=3),r.minView||(r.minView=0),r.startView<r.minView&&(r.startView=r.minView,t.warn("wrong config for minView/startView.")),r.size||(r.size=1)),o.element.addClass(n.type+"-popover input-picker").attr({role:"application"}).on({wspopoverhide:function(){o.openedByFocus=!1},focusin:function(e){o.activateElement&&(o.openedByFocus=!1,o.activateElement(e.target))},focusout:function(){o.activeElement&&o.activeElement.removeClass("ws-focus"),r.inlinePicker&&(o.openedByFocus=!0)}}),m(o.element.children("div.ws-po-outerbox").attr({role:"group"}),r.labels,!0),m(s,r.labels,!0),null!=r.tabindex&&s.attr({tabindex:r.tabindex}),r.disabled&&s.prop({disabled:!0}),s.on({click:p}),r.inlinePicker?o.openedByFocus=!0:(s.on({mousedown:function(){l.apply(this,arguments),o.preventBlur()},focus:function(){o.preventBlur()}}),function(){var e=!1,t=function(){e=!1};n.inputElements.on({keydown:function(e){40==e.keyCode&&e.altKey&&p()},focus:function(){!o.stopOpen&&(r.buttonOnly||r.openOnFocus||e&&r.openOnMouseFocus)?(o.openedByFocus=r.buttonOnly?!1:!r.noInput,c()):o.preventBlur()},mousedown:function(){e=!0,setTimeout(t,9),r.buttonOnly&&o.isVisible&&o.activeElement&&(o.openedByFocus=!1,setTimeout(function(){o.openedByFocus=!1,o.activeElement.focus()},4)),n.element.is(":focus")&&(o.openedByFocus=r.buttonOnly?!1:!r.noInput,c()),o.preventBlur()}})}()),n.popover=o,n.opener=s,e(n.orig).on("remove",function(e){e.originalEvent||setTimeout(function(){s.remove(),o.element.remove()},4)}),r.inlinePicker&&c(),a(n.type,"WINDOWLOAD")},i.month=i._common,i.date=i._common,i.time=i._common,i["datetime-local"]=i._common,i.color=function(t){var n=i._common.apply(this,arguments),a=e(t.orig).data("alphacontrol"),r=t.opener.prepend('<span class="ws-color-indicator-bg"><span class="ws-color-indicator" /></span>').find(".ws-color-indicator"),o=function(){r.css({backgroundColor:e.prop(this,"value")||"#000"})},s=function(){var e,i=function(){try{var e=t.alpha.prop("valueAsNumber")/(t.alpha.prop("max")||1);isNaN(e)||r.css({opacity:e})}catch(i){}};return function(t){clearTimeout(e),e=setTimeout(i,t&&"change"!=t.type?40:4)}}();return t.alpha=a?e("#"+a):e([]),e(t.orig).on("wsupdatevalue change",o).each(o),t.alpha.on("wsupdatevalue change input",s).each(s),n},t.picker=i}(),function(){var i,a,o=Modernizr.inputtypes,s={},u=["disabled","readonly","value","defaultValue","min","max","step","title","required","placeholder"],c=["data-placeholder","tabindex"];if(e.each(u.concat(c),function(e,n){var a=n.replace(/^data\-/,"");t.onNodeNamesPropertyModify("input",n,function(e,n){if(!i){var r=t.data(this,"shadowData");r&&r.data&&r.nativeElement===this&&r.data[a]&&r.data[a](e,n)}})}),r.replaceUI&&"valueAsNumber"in n.createElement("input")){var p=function(){t.data(this,"hasShadow")&&e.prop(this,"value",e.prop(this,"value"))};t.onNodeNamesPropertyModify("input","valueAsNumber",p),t.onNodeNamesPropertyModify("input","valueAsDate",p),e.each({stepUp:1,stepDown:-1},function(e){var i=t.defineNodeNameProperty("input",e,{prop:{value:function(){var e;return i.prop&&i.prop._supvalue&&(e=i.prop._supvalue.apply(this,arguments),p.apply(this,arguments)),e}}})})}var f=function(){return function(t,i){s[t]=i,i.attrs=e.merge([],c,i.attrs),i.props=e.merge([],u,i.props)}}(),v=function(){return"none"!=e.css(this,"display")},g=function(t){var i,n=function(){e(t.orig).removeClass("ws-important-hide"),e.style(t.orig,"display","");var n,a,r,o=.8;(!i||t.orig.offsetWidth)&&(n=t.buttonWrapper&&t.buttonWrapper.filter(v).length,a=e.css(t.orig,"marginRight"),t.element.css({marginLeft:e.css(t.orig,"marginLeft"),marginRight:n?0:a}),n&&(r=parseInt(t.buttonWrapper.css("marginLeft"),10)||0,t.element.css({paddingRight:""}),0>r?(a=(parseInt(a,10)||0)+-1*(t.buttonWrapper.outerWidth()+r),t.buttonWrapper.css("marginRight",a),t.element.css({paddingRight:""}).css({paddingRight:(parseInt(t.element.css("paddingRight"),10)||0)+t.buttonWrapper.outerWidth()})):(t.buttonWrapper.css("marginRight",a),o=t.buttonWrapper.outerWidth(!0)+o)),t.element.outerWidth(e(t.orig).outerWidth()-o)),i=!0,e(t.orig).addClass("ws-important-hide")};t.element.onWSOff("updateshadowdom",n,!0)},y=function(){var n,o,p,d,f,h=e.prop(this,"type");if(s[h]&&t.implement(this,"inputwidgets")){for(p={},d=h,f=e(this).jProp("labels"),o=e.extend({},r.widgets,r[h],e(e.prop(this,"form")).data(h)||{},e(this).data(h)||{},{orig:this,type:h,labels:f,options:{},input:function(e){o._change(e,"input")},change:function(e){o._change(e,"change")},_change:function(t,n){i=!0,e.prop(o.orig,"value",t),i=!1,n&&e(o.orig).trigger(n)},containerElements:[]}),n=0;u.length>n;n++)o[u[n]]=e.prop(this,u[n]);for(n=0;c.length>n;n++)d=c[n].replace(/^data\-/,""),"placeholder"!=d&&o[d]||(o[d]=e.attr(this,c[n])||o[d]);o.monthSelect&&(o.onlyMonthDigits=!0),o.onlyMonthDigits&&(o.formatMonthNames="monthDigits"),p.shim=s[h]._create(o),t.addShadowDom(this,p.shim.element,{data:p.shim||{}}),p.shim.options.containerElements.push(p.shim.element[0]),m(e(this).getShadowFocusElement(),f),e(this).on("change",function(){i||p.shim.value(e.prop(this,"value"))}),function(){var t,i={focusin:!0,focus:!0},n=!1,a=!1;e(p.shim.options.containerElements).on({"focusin focus focusout blur":function(r){r.stopImmediatePropagation(),a=i[r.type],clearTimeout(t),t=setTimeout(function(){a!=n&&(n=a,e(o.orig).triggerHandler(a?"focus":"blur"),e(o.orig).trigger(a?"focusin":"focusout")),n=a},0)}})}(),p.shim.element.on("change input",l),Modernizr.formvalidation&&e(o.orig).on("firstinvalid",function(i){(t.fromSubmit||!a)&&e(o.orig).off("invalid.replacedwidgetbubble").on("invalid.replacedwidgetbubble",function(n){i.isInvalidUIPrevented()||n.isDefaultPrevented()||(t.validityAlert.showFor(i.target),i.preventDefault(),n.preventDefault()),e(o.orig).off("invalid.replacedwidgetbubble")})}),p.shim.buttonWrapper&&p.shim.buttonWrapper.filter(v).length&&p.shim.element.addClass("has-input-buttons"),p.shim.element.addClass(e.prop(this,"className")),o.calculateWidth?g(p.shim):e(this).addClass("ws-important-hide")}};Modernizr.formvalidation&&["input","form"].forEach(function(e){var i=t.defineNodeNameProperty(e,"checkValidity",{prop:{value:function(){a=!0;var e=i.prop._supvalue.apply(this,arguments);return a=!1,e}}})}),(!o.range||r.replaceUI)&&f("range",{_create:function(t){var i=e("<span />").insertAfter(t.orig).rangeUI(t).data("rangeUi");return i}});var b=o.number&&-1==navigator.userAgent.indexOf("Touch")&&(/MSIE 1[0|1]\.\d/.test(navigator.userAgent)||/Trident\/7\.0/.test(navigator.userAgent));["number","time","month","date","color","datetime-local"].forEach(function(i){(!o[i]||r.replaceUI||"number"==i&&b)&&f(i,{_create:function(n){n.monthSelect&&(n.splitInput=!0),n.splitInput&&!d[i]&&(t.warn("splitInput not supported for "+i),n.splitInput=!1);var a=n.splitInput?'<span class="ws-'+i+' ws-input" role="group"></span>':'<input class="ws-'+i+'" type="text" />',r=e(a).insertAfter(n.orig);return r=h[i]?r.spinbtnUI(n).data("wsWidget"+i):r.wsBaseWidget(n).data("wsWidget"+i),t.picker&&t.picker[i]&&t.picker[i](r),r.buttonWrapper.addClass("input-button-size-"+r.buttonWrapper.children().filter(v).length),r}})}),t.addReady(function(t,i){e("input",t).add(i.filter("input")).each(y)})}()});