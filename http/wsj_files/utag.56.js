//tealium universal tag - utag.56 ut4.0.201409231553, Copyright 2014 Tealium.com Inc. All Rights Reserved.
(function(){function createCookie(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1000);var i="; expires="+r.toGMTString();}else{var i="";}document.cookie=e+"="+t+i+"; path=/";}function readCookie(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" "){i=i.substring(1,i.length);}if(i.indexOf(t)==0){return i.substring(t.length,i.length);}}return null;}function eraseCookie(e){createCookie(e,"",-1);}var requirejs,require,define;(function(e){function t(e,t){var n=t&&t.split("/"),r=l.map,i=r&&r["*"]||{},s,o,u,a,f,c,h;if(e&&e.charAt(0)==="."&&t){n=n.slice(0,n.length-1),e=n.concat(e.split("/"));for(f=0;h=e[f];f++){if(h==="."){e.splice(f,1),f-=1;}else{if(h===".."){if(f===1&&(e[2]===".."||e[0]==="..")){return!0;}f>0&&(e.splice(f-1,2),f-=2);}}}e=e.join("/");}if((n||i)&&r){s=e.split("/");for(f=s.length;f>0;f-=1){o=s.slice(0,f).join("/");if(n){for(c=n.length;c>0;c-=1){u=r[n.slice(0,c).join("/")];if(u){u=u[o];if(u){a=u;break;}}}}a=a||i[o];if(a){s.splice(0,f,a),e=s.join("/");break;}}}return e;}function n(t,n){return function(){return d.apply(e,h.call(arguments,0).concat([t,n]));};}function r(e){return function(n){return t(n,e);};}function i(e){return function(t){a[e]=t;};}function s(t){if(f.hasOwnProperty(t)){var n=f[t];delete f[t],c[t]=!0,p.apply(e,n);}if(!a.hasOwnProperty(t)){throw new Error("No "+t);}return a[t];}function o(e,n){var i,o,u=e.indexOf("!");return u!==-1?(i=t(e.slice(0,u),n),e=e.slice(u+1),o=s(i),o&&o.normalize?e=o.normalize(e,r(n)):e=t(e,n)):e=t(e,n),{f:i?i+"!"+e:e,n:e,p:o};}function u(e){return function(){return l&&l.config&&l.config[e]||{};};}var a={},f={},l={},c={},h=[].slice,p,d;p=function(t,r,l,h){var p=[],d,v,m,g,y,b;h=h||t;if(typeof l=="function"){r=!r.length&&l.length?["require","exports","module"]:r;for(b=0;b<r.length;b++){y=o(r[b],h),m=y.f;if(m==="require"){p[b]=n(t);}else{if(m==="exports"){p[b]=a[t]={},d=!0;}else{if(m==="module"){v=p[b]={id:t,uri:"",exports:a[t],config:u(t)};}else{if(a.hasOwnProperty(m)||f.hasOwnProperty(m)){p[b]=s(m);}else{if(y.p){y.p.load(y.n,n(h,!0),i(m),{}),p[b]=a[m];}else{if(!c[m]){throw new Error(t+" missing "+m);}}}}}}}g=l.apply(a[t],p);if(t){if(v&&v.exports!==e&&v.exports!==a[t]){a[t]=v.exports;}else{if(g!==e||!d){a[t]=g;}}}}else{t&&(a[t]=l);}},requirejs=require=d=function(t,n,r,i){return typeof t=="string"?s(o(t,n).f):(t.splice||(l=t,n.splice?(t=n,n=r,r=null):t=e),n=n||function(){},i?p(e,t,n,r):setTimeout(function(){p(e,t,n,r);},15),d);},d.config=function(e){return l=e,d;},define=function(e,t,n){t.splice||(n=t,t=[]),f[e]=[e,t,n];},define.amd={jQuery:!0};})(),define("../vendor/almond",function(){}),fortyone=new function(){this.e=(new Date(2005,0,15)).getTimezoneOffset(),this.f=(new Date(2005,6,15)).getTimezoneOffset(),this.plugins=[],this.d={Flash:["ShockwaveFlash.ShockwaveFlash",function(e){return e.getVariable("$version");}],Director:["SWCtl.SWCtl",function(e){return e.ShockwaveVersion("");}]},this.r=function(e){var t;try{t=document.getElementById(e);}catch(n){}if(t===null||typeof t=="undefined"){try{t=document.getElementsByName(e)[0];}catch(r){}}if(t===null||typeof t=="undefined"){for(var i=0;i<document.forms.length;i++){for(var s=document.forms[i],o=0;o<s.elements.length;o++){var u=s[o];if(u.name===e||u.id===e){return u;}}}}return t;},this.b=function(e){var t="";try{typeof this.c.getComponentVersion!="undefined"&&(t=this.c.getComponentVersion(e,"ComponentID"));}catch(n){e=n.message.length,e=e>40?40:e,t=escape(n.message.substr(0,e));}return t;},this.exec=function(b){for(var c=0;c<b.length;c++){try{var d=eval(b[c]);if(d){return d;}}catch(e){}}return"";},this.p=function(e){var t="";try{if(navigator.plugins&&navigator.plugins.length){var n=RegExp(e+".* ([0-9._]+)");for(e=0;e<navigator.plugins.length;e++){var r=n.exec(navigator.plugins[e].name);r===null&&(r=n.exec(navigator.plugins[e].description)),r&&(t=r[1]);}}else{if(window.ActiveXObject&&this.d[e]){try{var i=new ActiveXObject(this.d[e][0]);t=this.d[e][1](i);}catch(s){t="";}}}}catch(o){t=o.message;}return t;},this.q=function(){for(var e=["Acrobat","Flash","QuickTime","Java Plug-in","Director","Office"],t=0;t<e.length;t++){var n=e[t];this.plugins[n]=this.p(n);}},this.g=function(){return Math.abs(this.e-this.f);},this.h=function(){return this.g()!==0;},this.i=function(e){var t=Math.min(this.e,this.f);return this.h()&&e.getTimezoneOffset()===t;},this.n=function(e){var t=0;return t=0,this.i(e)&&(t=this.g()),t=-(e.getTimezoneOffset()+t)/60;},this.j=function(e,t,n,r){typeof r!="boolean"&&(r=!1);for(var i=!0,s;(s=e.indexOf(t))>=0&&(r||i);){e=e.substr(0,s)+n+e.substr(s+t.length),i=!1;}return e;},this.m=function(){return(new Date(2005,5,7,21,33,44,888)).toLocaleString();},this.k=function(b){var c=new Date,d=[function(){return"TF1";},function(){return"015";},function(){return ScriptEngineMajorVersion();},function(){return ScriptEngineMinorVersion();},function(){return ScriptEngineBuildVersion();},function(e){return e.b("{7790769C-0471-11D2-AF11-00C04FA35D02}");},function(e){return e.b("{89820200-ECBD-11CF-8B85-00AA005B4340}");},function(e){return e.b("{283807B5-2C60-11D0-A31D-00AA00B92C03}");},function(e){return e.b("{4F216970-C90C-11D1-B5C7-0000F8051515}");},function(e){return e.b("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}");},function(e){return e.b("{9381D8F2-0288-11D0-9501-00AA00B911A5}");},function(e){return e.b("{4F216970-C90C-11D1-B5C7-0000F8051515}");},function(e){return e.b("{5A8D6EE0-3E18-11D0-821E-444553540000}");},function(e){return e.b("{89820200-ECBD-11CF-8B85-00AA005B4383}");},function(e){return e.b("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}");},function(e){return e.b("{45EA75A0-A269-11D1-B5BF-0000F8051515}");},function(e){return e.b("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}");},function(e){return e.b("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}");},function(e){return e.b("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}");},function(e){return e.b("{3AF36230-A269-11D1-B5BF-0000F8051515}");},function(e){return e.b("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}");},function(e){return e.b("{CC2A9BA0-3BDD-11D0-821E-444553540000}");},function(e){return e.b("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}");},function(){return eval("navigator.appCodeName");},function(){return eval("navigator.appName");},function(){return eval("navigator.appVersion");},function(e){return e.exec(["navigator.productSub","navigator.appMinorVersion"]);},function(){return eval("navigator.browserLanguage");},function(){return eval("navigator.cookieEnabled");},function(e){return e.exec(["navigator.oscpu","navigator.cpuClass"]);},function(){return eval("navigator.onLine");},function(){return eval("navigator.platform");},function(){return eval("navigator.systemLanguage");},function(){return eval("navigator.userAgent");},function(e){return e.exec(["navigator.language","navigator.userLanguage"]);},function(){return eval("document.defaultCharset");},function(){return eval("document.domain");},function(){return eval("screen.deviceXDPI");},function(){return eval("screen.deviceYDPI");},function(){return eval("screen.fontSmoothingEnabled");},function(){return eval("screen.updateInterval");},function(e){return e.h();},function(e){return e.i(c);},function(){return"@UTC@";},function(e){return e.n(c);},function(e){return e.m();},function(){return eval("screen.width");},function(){return eval("screen.height");},function(e){return e.plugins.Acrobat;},function(e){return e.plugins.Flash;},function(e){return e.plugins.QuickTime;},function(e){return e.plugins["Java Plug-in"];},function(e){return e.plugins.Director;},function(e){return e.plugins.Office;},function(){return(new Date).getTime()-c.getTime();},function(e){return e.e;},function(e){return e.f;},function(){return c.toLocaleString();},function(){return eval("screen.colorDepth");},function(){return eval("window.screen.availWidth");},function(){return eval("window.screen.availHeight");},function(){return eval("window.screen.availLeft");},function(){return eval("window.screen.availTop");},function(e){return e.a("Acrobat");},function(e){return e.a("Adobe SVG");},function(e){return e.a("Authorware");},function(e){return e.a("Citrix ICA");},function(e){return e.a("Director");},function(e){return e.a("Flash");},function(e){return e.a("MapGuide");},function(e){return e.a("MetaStream");},function(e){return e.a("PDFViewer");},function(e){return e.a("QuickTime");},function(e){return e.a("RealOne");},function(e){return e.a("RealPlayer Enterprise");},function(e){return e.a("RealPlayer Plugin");},function(e){return e.a("Seagate Software Report");},function(e){return e.a("Silverlight");},function(e){return e.a("Windows Media");},function(e){return e.a("iPIX");},function(e){return e.a("nppdf.so");},function(e){return e.o();}];this.q();for(var e="",f=0;f<d.length;f++){b&&(e+=this.j(d[f].toString(),'"',"'",!0),e+="=");var g;try{g=d[f](this);}catch(h){g="";}e+=b?g:escape(g),e+=";",b&&(e+="\\n");}return e=this.j(e,escape("@UTC@"),(new Date).getTime());},this.l=function(e){try{if(!e){return this.k();}var t;t=this.r(e);if(t!==null){try{t.value=this.k();}catch(n){t.value=escape(n.message);}}}catch(r){}},this.a=function(e){try{if(navigator.plugins&&navigator.plugins.length){for(var t=0;t<navigator.plugins.length;t++){var n=navigator.plugins[t];if(n.name.indexOf(e)>=0){return n.name+(n.description?"|"+n.description:"");}}}}catch(r){}return"";},this.o=function(){var e=document.createElement("span");e.innerHTML="&nbsp;",e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var t=e.offsetHeight;return document.body.removeChild(e),t;};};try{fortyone.c=document.createElement("span"),typeof fortyone.c.addBehavior!="undefined"&&fortyone.c.addBehavior("#default#clientCaps");}catch(i){}window.fortyone=fortyone,window.fortyone.collect=fortyone.l,define("../vendor/fortyone",function(){}),typeof JSON!="object"&&(JSON={}),function(){function f(e){return e<10?"0"+e:e;}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+e+'"';}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null";}gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null";}return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i;}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1){typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));}}else{for(r in a){Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));}}return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i;}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf();});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number"){for(r=0;r<n;r+=1){indent+=" ";}}else{typeof n=="string"&&(indent=n);}rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number"){return str("",{"":e});}throw new Error("JSON.stringify");}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object"){for(n in i){Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);}}return reviver.call(e,t,i);}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");});}(),define("../vendor/json2",function(){}),define("../src/bootstrap",[],function(){var e=function(e,t){var n=t.split("."),r=e,i;i=n.length;for(var s=0;s<i;s++){typeof r[n[s]]=="undefined"&&(r[n[s]]={}),r=r[n[s]];}return r;};typeof BKTAG=="undefined"&&e(window,"BKTAG"),BKTAG.ns=e;var t={createFrame:function(e){var t=document.createElement("iframe");return t.setAttribute("name",e),t.setAttribute("id",e),t.setAttribute("title","bk"),t.style.border="0px",t.style.width="0px",t.style.height="0px",typeof bk_frameLoad=="function"&&(t.onload=bk_frameLoad),t.src="javascript:void(0)",t;},checkFrame:function(e){var n="__bkframe";if(typeof frames[n]=="undefined"||typeof document.getElementById(n)=="undefined"){var r=t.createFrame(n),i=document.getElementsByTagName("body")[0];i&&i.appendChild(r);}typeof e=="function"&&e();}};return t;}),define("../vendor/htmlparser",[],function(){var e=function(e){var t={},n=e.split(",");for(var r=0;r<n.length;r++){t[n[r]]=!0;}return t;},t={leftTrim:function(e){return e.replace(/^\s+/,"");},startTag:/^<(\w+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,endTag:/^<\/(\w+)[^>]*>/,attr:/(\w+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,empty:e("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),block:e("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,NOSCRIPT,object,ol,p,pre,script,SCRIPT,table,tbody,td,tfoot,th,thead,tr,ul"),inline:e("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,SCRIPT,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),closeSelf:e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),fillAttrs:e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),special:e("script,SCRIPT,style"),one:e("html,head,body,title"),structure:{link:"head",base:"head"},htmlParser:function(e,n){function r(e,r,s,o){if(t.block[r]){while(a.last()&&t.inline[a.last()]){i("",a.last());}}t.closeSelf[r]&&a.last()==r&&i("",r),o=t.empty[r]||!!o,o||a.push(r);if(n.start){var u=[];s.replace(t.attr,function(e,n){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:t.fillAttrs[n]?n:"";u.push({name:n,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')});}),n.start&&n.start(r,u,o);}}function i(e,t){if(!t){var r=0;}else{for(var r=a.length-1;r>=0;r--){if(a[r]==t){break;}}}if(r>=0){for(var i=a.length-1;i>=r;i--){n.end&&n.end(a[i]);}a.length=r;}}var s,o,u,a=[],f=e;a.last=function(){return this[this.length-1];};while(e){o=!0,e=t.leftTrim(e);if(!a.last()||!t.special[a.last()]){e.indexOf("<!--")==0?(s=e.indexOf("-->"),s>=0&&(n.comment&&n.comment(e.substring(4,s)),e=e.substring(s+3),o=!1)):e.indexOf("</")==0?(u=e.match(t.endTag),u&&(e=e.substring(u[0].length),u[0].replace(t.endTag,i),o=!1)):e.indexOf("<")==0&&(u=e.match(t.startTag),u&&(e=e.substring(u[0].length),u[0].replace(t.startTag,r),o=!1));if(o){s=e.indexOf("<");var l=s<0?e:e.substring(0,s);e=s<0?"":e.substring(s),n.chars&&n.chars(l);}}else{var c=new RegExp("</"+a.last()+">","i"),s=e.search(c),h=e.substring(0,s);h.length>0&&(n.chars&&n.chars(h),e=e.replace(h,"")),e=e.replace(c,""),i("",a.last());}if(e==f){throw"Parse Error: "+e;}f=e;}i();},htmlToDom:function(e,n){var r=[],i=n.documentElement||n.getOwnerDocument&&n.getOwnerDocument()||n;!i&&n.createElement&&function(){var e=n.createElement("html"),t=n.createElement("head");t.appendChild(n.createElement("title")),e.appendChild(t),e.appendChild(n.createElement("body")),n.appendChild(e);}();if(n.getElementsByTagName){for(var s in t.one){t.one[s]=n.getElementsByTagName(s)[0];}}var o=t.one.body;t.htmlParser(e,{start:function(e,i,s){if(t.one[e]){o=t.one[e];return;}var u=n.createElement(e);for(var a=0;a<i.length;a++){u.setAttribute(i[a].name,i[a].value);}t.structure[e]&&typeof _one[t.structure[e]]!="boolean"?t.one[t.structure[e]].appendChild(u):o&&o.appendChild&&(window.addEventListener||o.tagName!="NOSCRIPT")&&o.appendChild(u),s||(r.push(u),o=u);},end:function(e){r.length-=1,r.length>0?o=r[r.length-1]:o=t.one.body;},chars:function(e){if(window.addEventListener){var t=n.createTextNode(e);o.appendChild(t);}else{o.text=e;}},comment:function(e){}});}};return t;}),define("../src/utils",["../src/bootstrap","../vendor/htmlparser"],function(e,t){var n={getKwds:function(){var e=document.getElementsByTagName("meta"),t=[],n,r=e.length;for(n=0;n<r;n++){e[n].name&&e[n].name.toLowerCase()==="keywords"&&e[n].content!==""&&t.push(e[n].content);}return t.join(",");},getMeta:function(e){var t=document.getElementsByTagName("meta"),n=t.length;for(var r=0;r<n;r++){var i=t[r];if(i.name.toLowerCase()===e.toLowerCase()&&i.content!==""){return i.content;}}return null;},scriptWithOnload:function(e,t){var n=document.createElement("script");return n.src=e,n.onloadDone=!1,n.onload=function(){n.onloadDone||(n.onloadDone=!0,typeof t=="function"&&t());},n.onreadystatechange=function(){("loaded"===n.readyState||"complete"===n.readyState)&&!n.onloadDone&&(n.onloadDone=!0,typeof t=="function"&&t());},n;},isMobile:function(){var e=!1,t=["Mobile","Tablet","Handheld","Android","iPhone","Kindle","Silk","Nokia","Symbian","BlackBerry"];for(var n in t){if(navigator.userAgent.indexOf(t[n])!==-1){e=!0;break;}}return e;},isDebug:function(){var e=!1;return typeof window.location!="undefined"&&typeof window.location.search!="undefined"&&window.location.search.indexOf("debug=1")!==-1&&(e=!0),e;},addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,function(t){return n.call(e,t);});}};return window.BKTAG.htmlToDom=t.htmlToDom,window.BKTAG.util=n,n;}),define("../vendor/cookies",function(){});var hashers={java:function(e){for(var t=31,n=0,r=0,i=0;i<e.length;i++){r=t*r+e.charCodeAt(i)<<n;}return r;},javaHex:function(e){return Math.abs(hashers.java(e)).toString(16);}},indexes={1:"dtzpmk".split("")},encoders={indexed_comma:function(e){var t=[e],n=indexes[e];for(var r=0;r<n.length;r++){var i=signifiers[n[r]][0];t.push(encodeURIComponent(i?i:""));}return t.join(",");}},signifiers={a:[navigator.userAgent,"userAgent"],e:[function(){return hashers.javaHex(navigator.userAgent);}(),"userAgent hashed"],d:[[screen.width,screen.height,screen.colorDepth].join(""),"Screen concat"],t:[(new Date).getTime(),"Time"],z:[(new Date).getTimezoneOffset(),"Timezone"],n:[function(){for(var e in navigator){var t=[];return typeof navigator[e]=="string"&&t.push(navigator[e]),t.join("");}}(),"Navigator"],p:[function(){var e=[];for(var t=0,n=navigator.plugins;t<n.length;t++){e.push(n[t].name);}return hashers.javaHex(e.join(","));}(),"Plugins hashed"],pv:[function(){var e=0;for(var t=0,n=navigator.plugins;t<n.length;t++){var r=n[t].description.match(/\d+(.\d+){1,3}/);r&&(e+=r[0]);}return e;}(),"Plugin version concat"],m:[function(){var e=[];for(var t=0,n=navigator.mimeTypes;t<n.length;t++){e.push(n[t].description);}return hashers.javaHex(e.join(","));}(),"mimeTypes hashed"],l:[navigator.language,"language"],k:[navigator.cookieEnabled?1:0,"cookies"],ps:[navigator.productSub,"productSub"],u:[navigator.cpuClass,"cpuClass"],g:[navigator.browserLanguage,"browserLanguage"],s:[document.defaultCharset,"charset"]},numis={collect:function(e,t){var n=e||"indexed_comma",r=t||1;return encoders[n](r);}};define("../vendor/numis",function(){}),define("../src/core",["../src/bootstrap","../src/utils","../vendor/cookies","../vendor/numis"],function(e,t,n,r){var i=0.1,s=Math.random(),o=Math.random(),u=[],a=!1,f={site:"site_id",limit:"pixel_limit",excludeBkParams:"ignore_meta",excludeTitle:"exclude_title",excludeKeywords:"exclude_keywords",excludeReferrer:"exclude_referrer",excludeLocation:"exclude_location",partnerID:"partner_id",allowMultipleCalls:"allow_multiple_calls",callback:"callback",useImage:"use_image",useMultipleIframes:"use_multiple_iframes",allData:"all_data",timeOut:"timeout",ignoreOutsideIframe:"ignore_outside_iframe",eventScheduling:"event_scheduling",pixelUrl:"pixel_url",pixelSecure:"pixel_secure",useFirstParty:"use_first_party",metaVars:"meta_vars",jsList:"js_list",paramList:"param_list",useMobile:"use_mobile",disableMobile:"disable_mobile",isDebug:"is_debug",limitGetLength:"limit_get_length"},l={_dest:null,addParam:function(e,t,n){return typeof varMap!="undefined"&&varMap[t]&&(t=varMap[t]),typeof n!="undefined"?u.push(e+"="+encodeURIComponent(t+"="+n)):u.push(e+"="+t),BKTAG;},addBkParam:function(e,t){if(typeof e=="string"&&typeof t=="string"){l.addParam("phint","__bk_"+e,t);}else{for(var n in e){e.hasOwnProperty(n)&&typeof e[n]=="string"&&l.addParam("phint","__bk_"+n,e[n]);}}return BKTAG;},_reset:function(){a=!1,u=[];for(var e in f){f.hasOwnProperty(e)&&delete window["bk_"+f[e]];}return BKTAG;},params:function(){return u;},getGlobals:function(e){if(e.length){for(var t=0;t<e.length;t++){var n=e[t];typeof window[n]!="undefined"&&n!==""&&window[n]!==""&&bk_addPageCtx(n,window[n]);}}else{for(var r in e){e.hasOwnProperty(r)&&typeof r=="string"&&(typeof e[r]=="string"||typeof e[r]=="number"||typeof e[r]=="boolean")&&bk_addPageCtx(r,e[r]);}}},doTag:function(n,r,o,c,h,p,d,v,m){var g={site:n,limit:r,excludeBkParams:o,partnerID:c,allowMultipleCalls:h,callback:p,allData:d,timeOut:v,ignoreOutsideIframe:m};for(var y in f){f.hasOwnProperty(y)&&typeof window["bk_"+f[y]]!="undefined"&&(g[y]=window["bk_"+f[y]]);}if(typeof n=="object"){for(var b in f){f.hasOwnProperty(b)&&typeof n[f[b]]!="undefined"&&(g[b]=n[f[b]]);}}if(typeof a!="undefined"&&a&&g.allowMultipleCalls!==!0){return;}a=!0,g.timeOut===undefined&&(g.timeOut=1000),u.unshift("ret="+(g.callback?"js":"html"));var w=typeof g.partnerID!="undefined"&&g.partnerID!==null;w&&u.unshift("partner="+encodeURIComponent(g.partnerID));var E={2607:1,2834:1,2894:1,3316:1,3317:1,3318:1,3319:1,3321:1,3322:1,3323:1,3324:1,3325:1,3326:1,3327:1,3328:1,3329:1,3330:1,3331:1,3332:1,3333:1,3334:1,3338:1,3339:1,3340:1,3341:1,3344:1,3345:1,3346:1,3348:1};!g.excludeBkParams&&!g.excludeTitle&&document.title!==""&&l.addBkParam("t",document.title),!g.excludeBkParams&&!g.excludeKeywords&&l.addBkParam("k",t.getKwds()),!g.excludeBkParams&&!g.excludeReferrer&&"referrer"in document&&document.referrer!==""&&l.addBkParam("pr",document.referrer),!g.excludeBkParams&&!g.excludeLocation&&l.addBkParam("l",window.location.toString()),g.callback?l.addParam("jscb",encodeURIComponent(g.callback)):typeof g.limit!="undefined"&&l.addParam("limit",encodeURIComponent(g.limit)),g.allData===!0&&l.addParam("data","all"),g.disableMobile!==!0&&(t.isMobile()||s<i||window.location.search.indexOf("force=bkfpd")!==-1)&&typeof fortyone!="undefined"&&typeof numis!="undefined"&&(l.addParam("bkfpd",fortyone.collect()),l.addParam("bknms",numis.collect())),g.eventScheduling===!0&&t.addEvent("message",function(e){if(e.origin!=="http://tags.bluekai.com"){return;}var t=document.getElementById("__bkframe"),n=function(e){return function(){t.contentWindow.postMessage(JSON.stringify({event:e}),"*"),t.contentWindow.postMessage(JSON.stringify({schedule:"run"}),"*");};},r=JSON.parse(e.data);r.status&&r.status==="loaded"&&t.contentWindow.postMessage(JSON.stringify({get:"events"}),"*");if(r.scheduled){var i=JSON.parse(r.scheduled);for(var s in i){var o=i[s]==="window"?window:document.getElementById(i[s]);o.addEventListener(s,n(s),!1);}}r.status&&r.status==="complete"&&t.contentWindow.postMessage(JSON.stringify({status:"ack"}),"*");},!1),g.useFirstParty&&(readCookie("bkrid")||createCookie("bkrid",Math.floor(Math.random()*Math.pow(2,31)),180),readCookie("bkrid")&&l.addParam("bkrid",readCookie("bkrid"))),(t.isDebug()||g.isDebug)&&l.addParam("debug","1"),!g.excludeBkParams&&typeof g.paramList!="undefined"&&l.getGlobals(g.paramList),!g.excludeBkParams&&typeof g.jsList!="undefined"&&l.getGlobals(g.jsList);if(!g.excludeBkParams&&typeof g.metaVars!="undefined"){for(var S=0;S<g.metaVars.length;S++){var x=t.getMeta(g.metaVars[S]);x!==null&&l.addBkParam(g.metaVars[S],x);}}l.addParam("r",parseInt(Math.random()*99999999,10));var T="https://stags.bluekai.com/",N="http://tags.bluekai.com/",C=("https:"===document.location.protocol?g.pixelSecure?g.pixelSecure:T:g.pixelUrl?g.pixelUrl:N)+(w?"psite":"site")+"/"+g.site,k=C+"?"+u.join("&");g.limitGetLength&&(k=k.substr(0,2000)),BKTAG._dest=l._dest=k;if(g.callback){if(g.useImage){var L=document.createElement("span");L.style.display="none";var A=document.getElementsByTagName("body")[0];A.appendChild(L);var O=document.createElement("img");O.src=l._dest,L.appendChild(O);}else{var M=document.createElement("script");M.type="text/javascript",M.src=l._dest,M.id="__bk_script__",E[""+n]&&setTimeout(function(){var e=document.getElementById("__bk_script__");e&&(e.removeNode?e.removeNode(!0):e.parentNode.removeChild(e));},g.timeOut),document.getElementsByTagName("head")[0].appendChild(M);}}else{e.checkFrame(function(){if(g.useMultipleIframes){var t=e.createFrame("__bkframe_"+g.site+"_"+(new Date).valueOf());t.className="__bkframe_site_"+g.site,t.src=k,document.getElementsByTagName("body")[0].appendChild(t);}else{if(frames&&frames.__bkframe){frames.__bkframe.location.replace(k);}else{var n=e.createFrame("__bkframe");document.getElementsByTagName("body")[0].appendChild(n),frames.__bkframe.location.replace(k);}}}),u.shift();if(typeof g.ignoreOutsideIframe!="undefined"&&g.ignoreOutsideIframe===!1){u.unshift("ret=jsht"),k=C+"?"+u.join("&"),k=k.substr(0,2000);var _=document.createElement("script");_.src=k,_.type="text/javascript",document.getElementsByTagName("body").item(0).appendChild(_);}}typeof r=="function"&&r(),u=[];}};for(var c in l){l.hasOwnProperty(c)&&(window.BKTAG[c]=l[c]);}return typeof window.bk_async=="function"&&window.setTimeout(function(){bk_async();},0),l;}),define("../src/aliases",["../src/core"],function(){window.BKTAG.addCtxParam=function(e,t){return BKTAG.addParam("phint",e,t),BKTAG;},window.BKTAG.addBkParam=function(e,t){return BKTAG.addParam("phint","__bk_"+e,t),BKTAG;},window.BKTAG.addPageCtx=window.bk_addPageCtx=window.BKTAG.addUserCtx=window.bk_addUserCtx=function(e,t){return BKTAG.addParam("phint",e,t),BKTAG;},window.BKTAG.doJSTag=window.bk_doJSTag=function(e,t,n){BKTAG.doTag(e,t,!1,null,n);},window.BKTAG.doJSTag2=window.bk_doJSTag2=function(e,t){BKTAG.doTag(e,t);},window.BKTAG.doCarsJSTag=window.bk_doCarsJSTag=function(e,t){BKTAG.doTag(e,t,!0);},window.BKTAG.doPartnerAltTag=window.bk_doPartnerAltTag=function(e,t,n){if(typeof n=="undefined"||n===null){n=0;}BKTAG.doTag(e,t,!1,n);},window.BKTAG.doCallbackTag=window.bk_doCallbackTag=function(e,t,n,r){BKTAG.doTag(e,0,!1,null,n,t,r);},window.BKTAG.doCallbackTagWithTimeOut=window.bk_doCallbackTagWithTimeOut=function(e,t,n,r,i){BKTAG.doTag(e,0,!1,null,n,t,r,i);},window.BKTAG.sendData=function(e){BKTAG.doTag(e);};}),define("mobile",["../vendor/fortyone","../vendor/json2","../src/core","../src/aliases"],function(){}),require("mobile");})(),BKTAG.version="3.0.16";try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.siteid="4454";u.limit="10";u.map={"server":"serverDomain","channel":"primaryProduct","pageName":"pageName","page_prop2":"section","page_prop3":"articleType","meta.page.content.type":"contentType","cp.TR":"encryptedUUID","meta.page.section":"contentChannel","userRole":"isSub","Edition":"edition"};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){bk_addPageCtx(e[f],b[d]);}}}
bk_doJSTag(u.siteid,u.limit);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('56','wsjdn.wsjpages');}catch(e){}
