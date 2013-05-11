window['___jsl'] = window['___jsl'] || {};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"},"osapi.services":{"//%host%/gadgets/api/rpc":["http.get","http.post","http.put","http.delete","http.head","cache.invalidate"],"//%host%/api/rpc":["activities.get","activities.create","activities.update","activities.delete","activities.supportedFields","appdata.get","appdata.create","appdata.update","appdata.delete","finance.get","weather.get","people.get","people.supportedFields"]},"core.io":{"jsonProxyUrl":"//%host%/gadgets/makeRequest","proxyUrl":"//www-ss-opensocial.googleusercontent.com/gadgets/proxy/refresh=%refresh%&container=%container%%rewriteMime%&gadget=%gadget%/%rawurl%"}});window['___jsl']=window['___jsl']||{};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"},"osapi.services":{"//%host%/gadgets/api/rpc":["http.get","http.post","http.put","http.delete","http.head","cache.invalidate"],"//%host%/api/rpc":["activities.get","activities.create","activities.update","activities.delete","activities.supportedFields","appdata.get","appdata.create","appdata.update","appdata.delete","finance.get","weather.get","people.get","people.supportedFields"]},"core.io":{"jsonProxyUrl":"//%host%/gadgets/makeRequest","proxyUrl":"//www-ss-opensocial.googleusercontent.com/gadgets/proxy/refresh=%refresh%&container=%container%%rewriteMime%&gadget=%gadget%/%rawurl%"}});
/* [start] feature=gapi-globals */
var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
;
;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi=window.osapi||{},google=window.google||{},hackhack=window.__o_o_o__||{};hackhack.va=1;hackhack.I=1;hackhack.Sb=1;hackhack.Vb=1;
;
;

/* [end] feature=globals */

/* [start] feature=taming */
var safeJSON=window.safeJSON;
var tamings___=window.tamings___||[];
var bridge___;
var caja___=window.caja___;
var ___=window.___;;

/* [end] feature=taming */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if(!window.gadgets["config"]){gadgets.config=function(){var f;
var h={};
var b={};
function c(j,l){for(var k in l){if(!l.hasOwnProperty(k)){continue
}if(typeof j[k]==="object"&&typeof l[k]==="object"){c(j[k],l[k])
}else{j[k]=l[k]
}}}function i(){var j=document.scripts||document.getElementsByTagName("script");
if(!j||j.length==0){return null
}var m;
if(f.u){for(var k=0;
!m&&k<j.length;
++k){var l=j[k];
if(l.src&&l.src.indexOf(f.u)==0){m=l
}}}if(!m){m=j[j.length-1]
}if(!m.src){return null
}return m
}function a(j){var k="";
if(j.nodeType==3||j.nodeType==4){k=j.nodeValue
}else{if(j.innerText){k=j.innerText
}else{if(j.innerHTML){k=j.innerHTML
}else{if(j.firstChild){var l=[];
for(var m=j.firstChild;
m;
m=m.nextSibling){l.push(a(m))
}k=l.join("")
}}}}return k
}function e(k){if(!k){return{}
}var j;
while(k.charCodeAt(k.length-1)==0){k=k.substring(0,k.length-1)
}try{j=(new Function("return ("+k+"\n)"))()
}catch(l){}if(typeof j==="object"){return j
}try{j=(new Function("return ({"+k+"\n})"))()
}catch(l){}return typeof j==="object"?j:{}
}function g(n){var p=window.___cfg;
if(p){c(n,p)
}var o=i();
if(!o){return
}var k=a(o);
var j=e(k);
if(f.f&&f.f.length==1){var m=f.f[0];
if(!j[m]){var l={};
l[f.f[0]]=j;
j=l
}}c(n,j)
}function d(o){for(var l in h){if(h.hasOwnProperty(l)){var n=h[l];
for(var m=0,k=n.length;
m<k;
++m){o(l,n[m])
}}}}return{register:function(l,k,j,m){var n=h[l];
if(!n){n=[];
h[l]=n
}n.push({validators:k||{},callback:j,callOnUpdate:m})
},get:function(j){if(j){return b[j]||{}
}return b
},init:function(k,j){f=window.___jsl||{};
c(b,k);
g(b);
var l=window.___config||{};
c(b,l);
d(function(q,p){var o=b[q];
if(o&&!j){var m=p.validators;
for(var n in m){if(m.hasOwnProperty(n)){if(!m[n](o[n])){throw new Error('Invalid config value "'+o[n]+'" for parameter "'+n+'" in component "'+q+'"')
}}}}if(p.callback){p.callback(b)
}})
},update:function(k,p){var o=(window.gapi&&window.gapi["config"]&&window.gapi["config"]["update"]);
if(!p&&o){o(k)
}var n=[];
d(function(q,j){if(k.hasOwnProperty(q)||(p&&b&&b[q])){if(j.callback&&j.callOnUpdate){n.push(j.callback)
}}});
b=p?{}:b||{};
c(b,k);
for(var m=0,l=n.length;
m<l;
++m){n[m](b)
}}}
}()
}else{gadgets.config=window.gadgets["config"];
gadgets.config.register=gadgets.config.register;
gadgets.config.get=gadgets.config.get;
gadgets.config.init=gadgets.config.init;
gadgets.config.update=gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.setLogLevel=function(i){h=i
};
function b(k,i){if(k<h||!g){return
}if(k===a&&g.warn){g.warn(i)
}else{if(k===f&&g.error){try{g.error(i)
}catch(j){}}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
;

/* [end] feature=core.log */

/* [start] feature=core.config */
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.makeClosure=function(d,f,e){var c=[];
for(var b=2,a=arguments.length;
b<a;
++b){c.push(arguments[b])
}return function(){var g=c.slice();
for(var k=0,h=arguments.length;
k<h;
++k){g.push(arguments[k])
}return f.apply(d,g)
}
};
gadgets.util.makeEnum=function(b){var c,a,d={};
for(c=0;
(a=b[c]);
++c){d[a]=a
}return d
}
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util=gadgets.util||{};
(function(){var c="http://www.w3.org/1999/xhtml";
function b(f,e){var h=e||{};
for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g]
}}}function d(g,f){var e=["<",g];
var i=f||{};
for(var h in i){if(i.hasOwnProperty(h)){e.push(" ");
e.push(h);
e.push('="');
e.push(gadgets.util.escapeString(i[h]));
e.push('"')
}}e.push("></");
e.push(g);
e.push(">");
return e.join("")
}function a(f){var g="";
if(f.nodeType==3||f.nodeType==4){g=f.nodeValue
}else{if(f.innerText){g=f.innerText
}else{if(f.innerHTML){g=f.innerHTML
}else{if(f.firstChild){var e=[];
for(var h=f.firstChild;
h;
h=h.nextSibling){e.push(a(h))
}g=e.join("")
}}}}return g
}gadgets.util.createElement=function(f){var e;
if((!document.body)||document.body.namespaceURI){try{e=document.createElementNS(c,f)
}catch(g){}}return e||document.createElement(f)
};
gadgets.util.createIframeElement=function(g){var i=gadgets.util.createElement("iframe");
try{var e=d("iframe",g);
var f=gadgets.util.createElement(e);
if(f&&((!i)||((f.tagName==i.tagName)&&(f.namespaceURI==i.namespaceURI)))){i=f
}}catch(h){}b(i,g);
return i
};
gadgets.util.getBodyElement=function(){if(document.body){return document.body
}try{var f=document.getElementsByTagNameNS(c,"body");
if(f&&(f.length==1)){return f[0]
}}catch(e){}return document.documentElement||document
};
gadgets.util.getInnerText=function(e){return a(e)
}
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.attachBrowserEvent=function(c,b,d,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,d,a)
}else{if(typeof c.attachEvent!="undefined"){c.attachEvent("on"+b,d)
}else{gadgets.warn("cannot attachBrowserEvent: "+b)
}}};
gadgets.util.removeBrowserEvent=function(c,b,d,a){if(c.removeEventListener){c.removeEventListener(b,d,a)
}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}else{gadgets.warn("cannot removeBrowserEvent: "+b)
}}}
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util=gadgets.util||{};
(function(){var a=[];
gadgets.util.registerOnLoadHandler=function(b){a.push(b)
};
gadgets.util.runOnLoadHandlers=function(){for(var c=0,b=a.length;
c<b;
++c){a[c]()
}}
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util=gadgets.util||{};
(function(){var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true,65282:true,65287:true,65308:true,65310:true,65340:true};
function b(c,d){return String.fromCharCode(d)
}gadgets.util.escape=function(c,g){if(!c){return c
}else{if(typeof c==="string"){return gadgets.util.escapeString(c)
}else{if(typeof c==="array"){for(var f=0,d=c.length;
f<d;
++f){c[f]=gadgets.util.escape(c[f])
}}else{if(typeof c==="object"&&g){var e={};
for(var h in c){if(c.hasOwnProperty(h)){e[gadgets.util.escapeString(h)]=gadgets.util.escape(c[h],true)
}}return e
}}}}return c
};
gadgets.util.escapeString=function(g){if(!g){return g
}var d=[],f,h;
for(var e=0,c=g.length;
e<c;
++e){f=g.charCodeAt(e);
h=a[f];
if(h===true){d.push("&#",f,";")
}else{if(h!==false){d.push(g.charAt(e))
}}}return d.join("")
};
gadgets.util.unescapeString=function(c){if(!c){return c
}return c.replace(/&#([0-9]+);/g,b)
}
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util=gadgets.util||{};
(function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}gadgets.util.getUrlParameters=function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||document.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
};
gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=gapi.util-globals */
gapi.util=window.gapi&&window.gapi.util||{};
;

/* [end] feature=gapi.util-globals */

/* [start] feature=core.util */
gadgets.util=gadgets.util||{};
(function(){var b={};
var a={};
function c(d){b=d["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,c)
}gadgets.util.getFeatureParameters=function(d){return typeof b[d]==="undefined"?null:b[d]
};
gadgets.util.hasFeature=function(d){return typeof b[d]!=="undefined"
};
gadgets.util.getServices=function(){return a
}
})();;

/* [end] feature=core.util */

/* [start] feature=gapi.util.getOrigin */
gapi.util.getOrigin=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^\w*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));var a=a.substring(0,a.indexOf("://")),c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=core.json */
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
function b(d,e){var c=this[d];
return c
}return{parse:function(d){try{return window.JSON.parse(d)
}catch(c){return false
}},stringify:function(d){var h=window.JSON.stringify;
function f(e){return h.call(this,e,b)
}var g=(Array.prototype.toJSON&&h([{x:1}])==='"[{\\"x\\": 1}]"')?f:h;
try{return g(d,function(i,e){return !a.test(i)?e:void 0
})
}catch(c){return null
}}}
})()
};;
;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/[\"\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(/___$/.test(k)){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;

/* [end] feature=core.json */

/* [start] feature=shindig.auth */
shindig.Auth=function(){var authToken=null;
var trusted=null;
function addParamsToToken(urlParams){var args=authToken.split("&");
for(var i=0;
i<args.length;
i++){var nameAndValue=args[i].split("=");
if(nameAndValue.length===2){var name=nameAndValue[0];
var value=nameAndValue[1];
if(value==="$"){value=encodeURIComponent(urlParams[name]);
args[i]=name+"="+value
}}}authToken=args.join("&")
}function init(configuration){var urlParams=gadgets.util.getUrlParameters();
var config=configuration["shindig.auth"]||{};
if(config.authToken){authToken=config.authToken
}else{if(urlParams.st){authToken=urlParams.st
}}if(authToken!==null){addParamsToToken(urlParams)
}if(config.trustedJson){trusted=(eval("("+config.trustedJson+")"))
}}gadgets.config.register("shindig.auth",null,init);
return{getSecurityToken:function(){return authToken
},updateSecurityToken:function(newToken){authToken=newToken
},getTrustedData:function(){return trusted
}}
};;
shindig.auth=new shindig.Auth();;

/* [end] feature=shindig.auth */

/* [start] feature=rpc */
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var e,d;
var c=true;
function b(h,j,g){if(typeof window.addEventListener!="undefined"){window.addEventListener(h,j,g)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+h,j)
}}if(h==="message"){window.___jsl=window.___jsl||{};
var i=window.___jsl;
i.RPMQ=i.RPMQ||[];
i.RPMQ.push(j)
}}function a(h,i,g){if(window.removeEventListener){window.removeEventListener(h,i,g)
}else{if(window.detachEvent){window.detachEvent("on"+h,i)
}}}function f(h){var i=gadgets.json.parse(h.data);
if(!i||!i.f){return
}var g=gadgets.rpc.getTargetOrigin(i.f);
if(c&&(typeof h.origin!=="undefined"?h.origin!==g:h.domain!==/^.+:\/\/([^:]+).*/.exec(g)[1])){return
}e(i,h.origin)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(h,i){function g(k){var j=k&&k.rpc||{};
if(String(j.disableForceSecure)==="true"){c=false
}}gadgets.config.register("rpc",null,g);
e=h;
d=i;
b("message",f,false);
d("..",true);
return true
},setup:function(h,g){d(h,true);
return true
},call:function(h,k,j){var g=gadgets.rpc.getTargetOrigin(h);
var i=gadgets.rpc._getTargetWin(h);
if(g){window.setTimeout(function(){i.postMessage(gadgets.json.stringify(j),g)
},0)
}else{if(h!=".."){gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.frameElement){gadgets.rpctx.frameElement=function(){var e="__g2c_rpc";
var b="__c2g_rpc";
var d;
var c;
function a(g,k,j){try{if(k!==".."){var f=window.frameElement;
if(typeof f[e]==="function"){if(typeof f[e][b]!=="function"){f[e][b]=function(l){d(gadgets.json.parse(l))
}
}f[e](gadgets.json.stringify(j));
return true
}}else{var i=document.getElementById(g);
if(typeof i[e]==="function"&&typeof i[e][b]==="function"){i[e][b](gadgets.json.stringify(j));
return true
}}}catch(h){}return false
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(f,g){d=f;
c=g;
return true
},setup:function(j,f){if(j!==".."){try{var i=document.getElementById(j);
i[e]=function(k){d(gadgets.json.parse(k))
}
}catch(h){return false
}}if(j===".."){c("..",true);
var g=function(){window.setTimeout(function(){gadgets.rpc.call(j,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(g)
}return true
},call:function(f,h,g){return a(f,h,g)
}}
}()
};;
;
;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.nix){gadgets.rpctx.nix=function(){var c="GRPC____NIXVBS_wrapper";
var d="GRPC____NIXVBS_get_wrapper";
var f="GRPC____NIXVBS_handle_message";
var b="GRPC____NIXVBS_create_channel";
var a=10;
var j=500;
var i={};
var h;
var g=0;
function e(){var l=i[".."];
if(l){return
}if(++g>a){gadgets.warn("Nix transport setup failed, falling back...");
h("..",false);
return
}if(!l&&window.opener&&"GetAuthToken" in window.opener){l=window.opener;
if(l.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var k=gadgets.rpc.getAuthToken("..");
l.CreateChannel(window[d]("..",k),k);
i[".."]=l;
window.opener=null;
h("..",true);
return
}}window.setTimeout(function(){e()
},j)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(l,m){h=m;
if(typeof window[d]!=="unknown"){window[f]=function(o){window.setTimeout(function(){l(gadgets.json.parse(o))
},0)
};
window[b]=function(o,q,p){if(gadgets.rpc.getAuthToken(o)===p){i[o]=q;
h(o,true)
}};
var k="Class "+c+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+f+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+b+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+d+"(name, auth)\nDim wrap\nSet wrap = New "+c+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+d+" = wrap\nEnd Function";
try{window.execScript(k,"vbscript")
}catch(n){return false
}}return true
},setup:function(o,k){if(o===".."){e();
return true
}try{var m=document.getElementById(o);
var n=window[d](o,k);
m.contentWindow.opener=n
}catch(l){return false
}return true
},call:function(k,n,m){try{if(i[k]){i[k].SendMessage(gadgets.json.stringify(m))
}}catch(l){return false
}return true
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.rmr){gadgets.rpctx.rmr=function(){var h=500;
var f=10;
var i={};
var a=gadgets.util.getUrlParameters()["parent"];
var c;
var j;
function l(q,o,p,n){var r=function(){document.body.appendChild(q);
q.src="about:blank";
if(n){q.onload=function(){m(n)
}
}q.src=o+"#"+p
};
if(document.body){r()
}else{gadgets.util.registerOnLoadHandler(function(){r()
})
}}function d(q){if(typeof i[q]==="object"){return
}var r=document.createElement("iframe");
var o=r.style;
o.position="absolute";
o.top="0px";
o.border="0";
o.opacity="0";
o.width="10px";
o.height="1px";
r.id="rmrtransport-"+q;
r.name=r.id;
var p=gadgets.rpc.getRelayUrl(q);
var n=gadgets.rpc.getOrigin(a);
if(!p){p=n+"/robots.txt"
}i[q]={frame:r,receiveWindow:null,relayUri:p,relayOrigin:n,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0,verifySendToken:String(Math.random()),verifyRecvToken:null,originVerified:false};
if(q!==".."){l(r,p,b(q))
}e(q)
}function e(p){var r=null;
i[p].searchCounter++;
try{var o=gadgets.rpc._getTargetWin(p);
if(p===".."){r=o.frames["rmrtransport-"+gadgets.rpc.RPC_ID]
}else{r=o.frames["rmrtransport-.."]
}}catch(q){}var n=false;
if(r){n=g(p,r)
}if(!n){if(i[p].searchCounter>f){return
}window.setTimeout(function(){e(p)
},h)
}}function k(o,q,u,t){var p=null;
if(u!==".."){p=i[".."]
}else{p=i[o]
}if(p){if(q!==gadgets.rpc.ACK){p.queue.push(t)
}if(p.waiting||(p.queue.length===0&&!(q===gadgets.rpc.ACK&&t&&t.ackAlone===true))){return true
}if(p.queue.length>0){p.waiting=true
}var n=p.relayUri+"#"+b(o);
try{p.frame.contentWindow.location=n;
var r=p.width==10?20:10;
p.frame.style.width=r+"px";
p.width=r
}catch(s){return false
}}return true
}function b(o){var p=i[o];
var n={id:p.sendId};
if(p){n.d=Array.prototype.slice.call(p.queue,0);
var q={s:gadgets.rpc.ACK,id:p.recvId};
if(!p.originVerified){q.sendToken=p.verifySendToken
}if(p.verifyRecvToken){q.recvToken=p.verifyRecvToken
}n.d.push(q)
}return gadgets.json.stringify(n)
}function m(y){var v=i[y];
var r=v.receiveWindow.location.hash.substring(1);
var z=gadgets.json.parse(decodeURIComponent(r))||{};
var o=z.d||[];
var p=false;
var u=false;
var w=0;
var n=(v.recvId-z.id);
for(var q=0;
q<o.length;
++q){var t=o[q];
if(t.s===gadgets.rpc.ACK){j(y,true);
v.verifyRecvToken=t.sendToken;
if(!v.originVerified&&t.recvToken&&String(t.recvToken)==String(v.verifySendToken)){v.originVerified=true
}if(v.waiting){u=true
}v.waiting=false;
var s=Math.max(0,t.id-v.sendId);
v.queue.splice(0,s);
v.sendId=Math.max(v.sendId,t.id||0);
continue
}p=true;
if(++w<=n){continue
}++v.recvId;
c(t,v.originVerified?v.relayOrigin:undefined)
}if(p||(u&&v.queue.length>0)){var x=(y==="..")?gadgets.rpc.RPC_ID:"..";
k(y,gadgets.rpc.ACK,x,{ackAlone:p})
}}function g(q,t){var p=i[q];
try{var o=false;
o="document" in t;
if(!o){return false
}o=typeof t.document=="object";
if(!o){return false
}var s=t.location.href;
if(s==="about:blank"){return false
}}catch(n){return false
}p.receiveWindow=t;
function r(){m(q)
}if(typeof t.attachEvent==="undefined"){t.onresize=r
}else{t.attachEvent("onresize",r)
}if(q===".."){l(p.frame,p.relayUri,b(q),q)
}else{m(q)
}return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(n,o){c=n;
j=o;
return true
},setup:function(p,n){try{d(p)
}catch(o){gadgets.warn("Caught exception setting up RMR: "+o);
return false
}return true
},call:function(n,p,o){return k(n,o.s,p,o)
}}
}()
};;
;
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.ifpc){gadgets.rpctx.ifpc=function(){var h=[];
var e=0;
var d;
var a=2000;
var g={};
function c(m){var k=[];
for(var n=0,l=m.length;
n<l;
++n){k.push(encodeURIComponent(gadgets.json.stringify(m[n])))
}return k.join("&")
}function b(m){var k;
for(var j=h.length-1;
j>=0;
--j){var n=h[j];
try{if(n&&(n.recyclable||n.readyState==="complete")){n.parentNode.removeChild(n);
if(window.ActiveXObject){h[j]=n=null;
h.splice(j,1)
}else{n.recyclable=false;
k=n;
break
}}}catch(l){}}if(!k){k=document.createElement("iframe");
k.style.border=k.style.width=k.style.height="0px";
k.style.visibility="hidden";
k.style.position="absolute";
k.onload=function(){this.recyclable=true
};
h.push(k)
}k.src=m;
window.setTimeout(function(){document.body.appendChild(k)
},0)
}function f(j,l){for(var k=l-1;
k>=0;
--k){if(typeof j[k]==="undefined"){return false
}}return true
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(i,j){d=j;
d("..",true);
return true
},setup:function(j,i){d(j,true);
return true
},call:function(s,r,q){var l=gadgets.rpc.getRelayUrl(s);
++e;
if(!l){gadgets.warn("No relay file assigned for IFPC");
return false
}var i=null,j=[];
if(q.l){var o=q.a;
i=[l,"#",c([r,e,1,0,c([r,q.s,"","",r].concat(o))])].join("");
j.push(i)
}else{i=[l,"#",s,"&",r,"@",e,"&"].join("");
var t=encodeURIComponent(gadgets.json.stringify(q)),n=a-i.length,p=Math.ceil(t.length/n),m=0,k;
while(t.length>0){k=t.substring(0,n);
t=t.substring(n);
j.push([i,p,"&",m,"&",k].join(""));
m+=1
}}do{b(j.shift())
}while(j.length>0);
return true
},_receiveMessage:function(i,n){var o=i[1],m=parseInt(i[2],10),k=parseInt(i[3],10),l=i[i.length-1],j=m===1;
if(m>1){if(!g[o]){g[o]=[]
}g[o][k]=l;
if(f(g[o],m)){l=g[o].join("");
delete g[o];
j=true
}}if(j){n(gadgets.json.parse(decodeURIComponent(l)))
}}}
}()
};;
if(!window.gadgets||!window.gadgets["rpc"]){gadgets.rpc=function(){var M="__cb";
var S="";
var T="__ack";
var f=500;
var G=10;
var b="|";
var u="callback";
var g="origin";
var r="referer";
var s="legacy__";
var q={};
var W={};
var D={};
var B={};
var z=0;
var l={};
var m={};
var d={};
var n={};
var E={};
var e=null;
var p=null;
var A=(window.top!==window.self);
var v=window.name;
var J=function(){};
var P=0;
var Y=1;
var a=2;
var x=window.console;
var V=x&&x.log&&function(ae){x.log(ae)
}||function(){};
var R=(function(){function ae(af){return function(){V(af+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:ae("init"),setup:ae("setup"),call:ae("call")}
})();
if(gadgets.util){d=gadgets.util.getUrlParameters()
}function K(){if(d.rpctx=="flash"){return gadgets.rpctx.flash
}if(d.rpctx=="rmr"){return gadgets.rpctx.rmr
}var ae=typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?(gadgets.rpctx.flash?gadgets.rpctx.flash:(gadgets.rpctx.nix?gadgets.rpctx.nix:gadgets.rpctx.ifpc)):navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc;
if(!ae){ae=R
}return ae
}function k(aj,ah){if(n[aj]){return
}var af=H;
if(!ah){af=R
}n[aj]=af;
var ae=E[aj]||[];
for(var ag=0;
ag<ae.length;
++ag){var ai=ae[ag];
ai.t=F(aj);
af.call(aj,ai.f,ai)
}E[aj]=[]
}var I=false,U=false;
function N(){if(U){return
}function ae(){I=true
}if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",ae,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onunload",ae)
}}U=true
}function j(ae,ai,af,ah,ag){if(!B[ai]||B[ai]!==af){gadgets.error("Invalid auth token. "+B[ai]+" vs "+af);
J(ai,a)
}ag.onunload=function(){if(m[ai]&&!I){J(ai,Y);
gadgets.rpc.removeReceiver(ai)
}};
N();
ah=gadgets.json.parse(decodeURIComponent(ah))
}function Z(ai,af){if(ai&&typeof ai.s==="string"&&typeof ai.f==="string"&&ai.a instanceof Array){if(B[ai.f]){if(B[ai.f]!==ai.t){gadgets.error("Invalid auth token. "+B[ai.f]+" vs "+ai.t);
J(ai.f,a)
}}if(ai.s===T){window.setTimeout(function(){k(ai.f,true)
},0);
return
}if(ai.c){ai[u]=function(aj){var ak=ai.g?s:"";
gadgets.rpc.call(ai.f,ak+M,null,ai.c,aj)
}
}if(af){var ag=t(af);
ai[g]=af;
var ah=ai.r;
if(!ah||t(ah)!=ag){ah=af
}ai[r]=ah
}var ae=(q[ai.s]||q[S]).apply(ai,ai.a);
if(ai.c&&typeof ae!=="undefined"){gadgets.rpc.call(ai.f,M,null,ai.c,ae)
}}}function t(ag){if(!ag){return""
}ag=((ag.split("#"))[0].split("?"))[0];
ag=ag.toLowerCase();
if(ag.indexOf("//")==0){ag=window.location.protocol+ag
}if(ag.indexOf("://")==-1){ag=window.location.protocol+"//"+ag
}var ah=ag.substring(ag.indexOf("://")+3);
var ae=ah.indexOf("/");
if(ae!=-1){ah=ah.substring(0,ae)
}var aj=ag.substring(0,ag.indexOf("://"));
var ai="";
var ak=ah.indexOf(":");
if(ak!=-1){var af=ah.substring(ak+1);
ah=ah.substring(0,ak);
if((aj==="http"&&af!=="80")||(aj==="https"&&af!=="443")){ai=":"+af
}}return aj+"://"+ah+ai
}function C(af,ae){return"/"+af+(ae?b+ae:"")
}function y(ah){if(ah.charAt(0)=="/"){var af=ah.indexOf(b);
var ag=af>0?ah.substring(1,af):ah.substring(1);
var ae=af>0?ah.substring(af+1):null;
return{id:ag,origin:ae}
}else{return null
}}function ad(ag){if(typeof ag==="undefined"||ag===".."){return window.parent
}var af=y(ag);
if(af){return window.top.frames[af.id]
}ag=String(ag);
var ae=window.frames[ag];
if(ae){return ae
}ae=document.getElementById(ag);
if(ae&&ae.contentWindow){return ae.contentWindow
}return null
}function L(ah){var ag=null;
var ae=O(ah);
if(ae){ag=ae
}else{var af=y(ah);
if(af){ag=af.origin
}else{if(ah==".."){ag=d.parent
}else{ag=document.getElementById(ah).src
}}}return t(ag)
}var H=K();
q[S]=function(){V("Unknown RPC service: "+this["s"])
};
q[M]=function(af,ae){var ag=l[af];
if(ag){delete l[af];
ag.call(this,ae)
}};
function X(ag,ae){if(m[ag]===true){return
}if(typeof m[ag]==="undefined"){m[ag]=0
}var af=ad(ag);
if(ag===".."||af!=null){if(H.setup(ag,ae)===true){m[ag]=true;
return
}}if(m[ag]!==true&&m[ag]++<G){window.setTimeout(function(){X(ag,ae)
},f)
}else{n[ag]=R;
m[ag]=true
}}function O(af){var ae=W[af];
if(ae&&ae.substring(0,1)==="/"){if(ae.substring(1,2)==="/"){ae=document.location.protocol+ae
}else{ae=document.location.protocol+"//"+document.location.host+ae
}}return ae
}function ac(af,ae,ag){if(ae&&!/http(s)?:\/\/.+/.test(ae)){if(ae.indexOf("//")==0){ae=window.location.protocol+ae
}else{if(ae.charAt(0)=="/"){ae=window.location.protocol+"//"+window.location.host+ae
}else{if(ae.indexOf("://")==-1){ae=window.location.protocol+"//"+ae
}}}}W[af]=ae;
if(typeof ag!=="undefined"){D[af]=!!ag
}}function F(ae){return B[ae]
}function c(ae,af){af=af||"";
B[ae]=String(af);
X(ae,af)
}function ab(af){var ae=af.passReferrer||"";
var ag=ae.split(":",2);
e=ag[0]||"none";
p=ag[1]||"origin"
}function aa(ae){if(Q(ae)){H=gadgets.rpctx.ifpc||R;
H.init(Z,k)
}}function Q(ae){return String(ae.useLegacyProtocol)==="true"
}function h(af,ae){function ag(aj){var ai=aj&&aj.rpc||{};
ab(ai);
var ah=ai.parentRelayUrl||"";
ah=t(d.parent||ae)+ah;
ac("..",ah,Q(ai));
aa(ai);
c("..",af)
}if(!d.parent&&ae){ag({});
return
}gadgets.config.register("rpc",null,ag)
}function o(af,aj,al){var ai=null;
if(af.charAt(0)!="/"){if(!gadgets.util){return
}ai=document.getElementById(af);
if(!ai){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+af+", element not found.")
}}var ae=ai&&ai.src;
var ag=aj||gadgets.rpc.getOrigin(ae);
ac(af,ag);
var ak=gadgets.util.getUrlParameters(ae);
var ah=al||ak.rpctoken;
c(af,ah)
}function i(ae,ag,ah){if(ae===".."){var af=ah||d.rpctoken||d.ifpctok||"";
h(af,ag)
}else{o(ae,ag,ah)
}}function w(ag){if(e==="bidir"||(e==="c2p"&&ag==="..")||(e==="p2c"&&ag!=="..")){var af=window.location.href;
var ah="?";
if(p==="query"){ah="#"
}else{if(p==="hash"){return af
}}var ae=af.lastIndexOf(ah);
ae=ae===-1?af.length:ae;
return af.substring(0,ae)
}return null
}return{config:function(ae){if(typeof ae.securityCallback==="function"){J=ae.securityCallback
}},register:function(af,ae){if(af===M||af===T){throw new Error("Cannot overwrite callback/ack service")
}if(af===S){throw new Error("Cannot overwrite default service: use registerDefault")
}q[af]=ae
},unregister:function(ae){if(ae===M||ae===T){throw new Error("Cannot delete callback/ack service")
}if(ae===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete q[ae]
},registerDefault:function(ae){q[S]=ae
},unregisterDefault:function(){delete q[S]
},forceParentVerifiable:function(){if(!H.isParentVerifiable()){H=gadgets.rpctx.ifpc
}},call:function(ae,ag,al,aj){ae=ae||"..";
var ak="..";
if(ae===".."){ak=v
}else{if(ae.charAt(0)=="/"){ak=C(v,gadgets.rpc.getOrigin(window.location.href))
}}++z;
if(al){l[z]=al
}var ai={s:ag,f:ak,c:al?z:0,a:Array.prototype.slice.call(arguments,3),t:B[ae],l:!!D[ae]};
var af=w(ae);
if(af){ai.r=af
}if(ae!==".."&&y(ae)==null&&!document.getElementById(ae)){return
}var ah=n[ae];
if(!ah&&y(ae)!==null){ah=H
}if(ag.indexOf(s)===0){ah=H;
ai.s=ag.substring(s.length);
ai.c=ai.c?ai.c:z
}ai.g=true;
ai.r=ak;
if(!ah){if(!E[ae]){E[ae]=[ai]
}else{E[ae].push(ai)
}return
}if(D[ae]){ah=gadgets.rpctx.ifpc
}if(ah.call(ae,ak,ai)===false){n[ae]=R;
H.call(ae,ak,ai)
}},getRelayUrl:O,setRelayUrl:ac,setAuthToken:c,setupReceiver:i,getAuthToken:F,removeReceiver:function(ae){delete W[ae];
delete D[ae];
delete B[ae];
delete m[ae];
delete n[ae]
},getRelayChannel:function(){return H.getCode()
},receive:function(af,ae){if(af.length>4){H._receiveMessage(af,Z)
}else{j.apply(null,af.concat(ae))
}},receiveSameDomain:function(ae){ae.a=Array.prototype.slice.call(ae.a);
window.setTimeout(function(){Z(ae)
},0)
},getOrigin:t,getTargetOrigin:L,init:function(){if(H.init(Z,k)===false){H=R
}if(A){i("..")
}else{gadgets.config.register("rpc",null,function(af){var ae=af.rpc||{};
ab(ae);
aa(ae)
})
}},_getTargetWin:ad,_parseSiblingId:y,ACK:T,RPC_ID:v||"..",SEC_ERROR_LOAD_TIMEOUT:P,SEC_ERROR_FRAME_PHISH:Y,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
}else{if(typeof gadgets.rpc=="undefined"||!gadgets.rpc){gadgets.rpc=window.gadgets["rpc"];
gadgets.rpc.config=gadgets.rpc.config;
gadgets.rpc.register=gadgets.rpc.register;
gadgets.rpc.unregister=gadgets.rpc.unregister;
gadgets.rpc.registerDefault=gadgets.rpc.registerDefault;
gadgets.rpc.unregisterDefault=gadgets.rpc.unregisterDefault;
gadgets.rpc.forceParentVerifiable=gadgets.rpc.forceParentVerifiable;
gadgets.rpc.call=gadgets.rpc.call;
gadgets.rpc.getRelayUrl=gadgets.rpc.getRelayUrl;
gadgets.rpc.setRelayUrl=gadgets.rpc.setRelayUrl;
gadgets.rpc.setAuthToken=gadgets.rpc.setAuthToken;
gadgets.rpc.setupReceiver=gadgets.rpc.setupReceiver;
gadgets.rpc.getAuthToken=gadgets.rpc.getAuthToken;
gadgets.rpc.removeReceiver=gadgets.rpc.removeReceiver;
gadgets.rpc.getRelayChannel=gadgets.rpc.getRelayChannel;
gadgets.rpc.receive=gadgets.rpc.receive;
gadgets.rpc.receiveSameDomain=gadgets.rpc.receiveSameDomain;
gadgets.rpc.getOrigin=gadgets.rpc.getOrigin;
gadgets.rpc.getTargetOrigin=gadgets.rpc.getTargetOrigin;
gadgets.rpc._getTargetWin=gadgets.rpc._getTargetWin;
gadgets.rpc._parseSiblingId=gadgets.rpc._parseSiblingId
}};;
;

/* [end] feature=rpc */

/* [start] feature=core.io */
gadgets.io=function(){var config={};
var oauthState;
function makeXhr(){var x;
var wrapperXhr=window.shindig&&window.shindig["xhrwrapper"]&&window.shindig["xhrwrapper"]["createXHR"];
if(wrapperXhr){return wrapperXhr()
}else{if(typeof ActiveXObject!="undefined"){x=new ActiveXObject("Msxml2.XMLHTTP");
if(!x){x=new ActiveXObject("Microsoft.XMLHTTP")
}return x
}else{if(typeof XMLHttpRequest!="undefined"||window.XMLHttpRequest){return new window.XMLHttpRequest()
}else{throw ("no xhr available")
}}}}function hadError(xobj,callback){if(xobj.readyState!==4){return true
}try{if(xobj.status!==200){var error=(""+xobj.status);
if(xobj.responseText){error=error+" "+xobj.responseText
}callback({errors:[error],rc:xobj.status,text:xobj.responseText});
return true
}}catch(e){callback({errors:[e.number+" Error not specified"],rc:e.number,text:e.description});
return true
}return false
}function processNonProxiedResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return
}var data={body:xobj.responseText};
callback(transformResponseData(params,data))
}var UNPARSEABLE_CRUFT="throw 1; < don't be evil' >";
function processResponse(url,callback,params,xobj){if(hadError(xobj,callback)){return
}var txt=xobj.responseText;
var offset=txt.indexOf(UNPARSEABLE_CRUFT)+UNPARSEABLE_CRUFT.length;
if(offset<UNPARSEABLE_CRUFT.length){return
}txt=txt.substr(offset);
var data=eval("("+txt+")");
data=data[url];
if(data.oauthState){oauthState=data.oauthState
}if(data.st){shindig.auth.updateSecurityToken(data.st)
}callback(transformResponseData(params,data))
}function transformResponseData(params,data){var resp={text:data.body,rc:data.rc||200,headers:data.headers,oauthApprovalUrl:data.oauthApprovalUrl,oauthError:data.oauthError,oauthErrorText:data.oauthErrorText,errors:[]};
if(resp.rc<200||resp.rc>=400){resp.errors=[resp.rc+" Error"]
}else{if(resp.text){if(resp.rc>=300&&resp.rc<400){params.CONTENT_TYPE="TEXT"
}switch(params.CONTENT_TYPE){case"JSON":case"FEED":resp.data=gadgets.json.parse(resp.text);
if(!resp.data){resp.errors.push("500 Failed to parse JSON");
resp.rc=500;
resp.data=null
}break;
case"DOM":var dom;
if(typeof ActiveXObject!="undefined"){dom=new ActiveXObject("Microsoft.XMLDOM");
dom.async=false;
dom.validateOnParse=false;
dom.resolveExternals=false;
if(!dom.loadXML(resp.text)){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}else{var parser=new DOMParser();
dom=parser.parseFromString(resp.text,"text/xml");
if("parsererror"===dom.documentElement.nodeName){resp.errors.push("500 Failed to parse XML");
resp.rc=500
}else{resp.data=dom
}}break;
default:resp.data=resp.text;
break
}}}return resp
}function makeXhrRequest(realUrl,proxyUrl,callback,paramData,method,params,processResponseFunction,opt_headers){var xhr=makeXhr();
if(proxyUrl.indexOf("//")==0){proxyUrl=document.location.protocol+proxyUrl
}xhr.open(method,proxyUrl,true);
if(callback){xhr.onreadystatechange=gadgets.util.makeClosure(null,processResponseFunction,realUrl,callback,params,xhr)
}if(paramData!==null){var contentTypeHeader="Content-Type";
var contentType="application/x-www-form-urlencoded";
if(typeof opt_headers==="string"){contentType=opt_headers;
opt_headers={}
}var headers=opt_headers||{};
if(!headers[contentTypeHeader]){headers[contentTypeHeader]=contentType
}for(var headerName in headers){xhr.setRequestHeader(headerName,headers[headerName])
}}xhr.send(paramData)
}function respondWithPreload(postData,params,callback){if(gadgets.io.preloaded_&&postData.httpMethod==="GET"){for(var i=0;
i<gadgets.io.preloaded_.length;
i++){var preload=gadgets.io.preloaded_[i];
if(preload&&(preload.id===postData.url)){delete gadgets.io.preloaded_[i];
if(preload.rc!==200){callback({rc:preload.rc,errors:[preload.rc+" Error"]})
}else{if(preload.oauthState){oauthState=preload.oauthState
}var resp={body:preload.body,rc:preload.rc,headers:preload.headers,oauthApprovalUrl:preload.oauthApprovalUrl,oauthError:preload.oauthError,oauthErrorText:preload.oauthErrorText,errors:[]};
callback(transformResponseData(params,resp))
}return true
}}}return false
}function init(configuration){config=configuration["core.io"]||{}
}gadgets.config.register("core.io",null,init);
return{makeRequest:function(url,callback,opt_params){var params=opt_params||{};
var httpMethod=params.METHOD||"GET";
var refreshInterval=params.REFRESH_INTERVAL;
var auth,st;
if(params.AUTHORIZATION&&params.AUTHORIZATION!=="NONE"){auth=params.AUTHORIZATION.toLowerCase();
st=shindig.auth.getSecurityToken()
}else{if(httpMethod==="GET"&&refreshInterval===undefined){refreshInterval=3600
}}var signOwner=true;
if(typeof params.OWNER_SIGNED!=="undefined"){signOwner=params.OWNER_SIGNED
}var signViewer=true;
if(typeof params.VIEWER_SIGNED!=="undefined"){signViewer=params.VIEWER_SIGNED
}var headers=params.HEADERS||{};
if(httpMethod==="POST"&&!headers["Content-Type"]){headers["Content-Type"]="application/x-www-form-urlencoded"
}var urlParams=gadgets.util.getUrlParameters();
var paramData={url:url,httpMethod:httpMethod,headers:gadgets.io.encodeValues(headers,false),postData:params.POST_DATA||"",authz:auth||"",st:st||"",contentType:params.CONTENT_TYPE||"TEXT",numEntries:params.NUM_ENTRIES||"3",getSummaries:!!params.GET_SUMMARIES,signOwner:signOwner,signViewer:signViewer,gadget:urlParams.url,container:urlParams.container||urlParams.synd||"default",bypassSpecCache:gadgets.util.getUrlParameters()["nocache"]||"",getFullHeaders:!!params.GET_FULL_HEADERS};
if(auth==="oauth"||auth==="signed"){if(gadgets.io.oauthReceivedCallbackUrl_){paramData.OAUTH_RECEIVED_CALLBACK=gadgets.io.oauthReceivedCallbackUrl_;
gadgets.io.oauthReceivedCallbackUrl_=null
}paramData.oauthState=oauthState||"";
for(var opt in params){if(params.hasOwnProperty(opt)){if(opt.indexOf("OAUTH_")===0){paramData[opt]=params[opt]
}}}}var proxyUrl=config.jsonProxyUrl.replace("%host%",document.location.host);
if(!respondWithPreload(paramData,params,callback)){if(httpMethod==="GET"&&refreshInterval>0){var extraparams="?refresh="+refreshInterval+"&"+gadgets.io.encodeValues(paramData);
makeXhrRequest(url,proxyUrl+extraparams,callback,null,"GET",params,processResponse)
}else{makeXhrRequest(url,proxyUrl,callback,gadgets.io.encodeValues(paramData),"POST",params,processResponse)
}}},makeNonProxiedRequest:function(relativeUrl,callback,opt_params,opt_headers){var params=opt_params||{};
makeXhrRequest(relativeUrl,relativeUrl,callback,params.POST_DATA,params.METHOD,params,processNonProxiedResponse,opt_headers)
},clearOAuthState:function(){oauthState=undefined
},encodeValues:function(fields,opt_noEscaping){var escape=!opt_noEscaping;
var buf=[];
var first=false;
for(var i in fields){if(fields.hasOwnProperty(i)&&!/___$/.test(i)){if(!first){first=true
}else{buf.push("&")
}buf.push(escape?encodeURIComponent(String(i)):i);
buf.push("=");
buf.push(escape?encodeURIComponent(String(fields[i])):fields[i])
}}return buf.join("")
},getProxyUrl:function(url,opt_params){var params=opt_params||{};
var refresh=params.REFRESH_INTERVAL;
if(refresh===undefined){refresh="3600"
}var urlParams=gadgets.util.getUrlParameters();
var rewriteMimeParam=params.rewriteMime?"&rewriteMime="+encodeURIComponent(String(params.rewriteMime)):"";
var ret=config.proxyUrl.replace("%url%",encodeURIComponent(url)).replace("%host%",document.location.host).replace("%rawurl%",url).replace("%refresh%",encodeURIComponent(String(refresh))).replace("%gadget%",encodeURIComponent(urlParams.url)).replace("%container%",encodeURIComponent(urlParams.container||urlParams.synd||"default")).replace("%rewriteMime%",rewriteMimeParam);
if(ret.indexOf("//")==0){ret=window.location.protocol+ret
}return ret
}}
}();
gadgets.io.RequestParameters=gadgets.util.makeEnum(["METHOD","CONTENT_TYPE","POST_DATA","HEADERS","AUTHORIZATION","NUM_ENTRIES","GET_SUMMARIES","GET_FULL_HEADERS","REFRESH_INTERVAL","OAUTH_SERVICE_NAME","OAUTH_USE_TOKEN","OAUTH_TOKEN_NAME","OAUTH_REQUEST_TOKEN","OAUTH_REQUEST_TOKEN_SECRET","OAUTH_RECEIVED_CALLBACK"]);
gadgets.io.MethodType=gadgets.util.makeEnum(["GET","POST","PUT","DELETE","HEAD"]);
gadgets.io.ContentType=gadgets.util.makeEnum(["TEXT","DOM","JSON","FEED"]);
gadgets.io.AuthorizationType=gadgets.util.makeEnum(["NONE","SIGNED","OAUTH"]);;

/* [end] feature=core.io */

/* [start] feature=osapi.base */
(function(){var a=function(){var c={};
var b=[];
var f=function(g,h){if(h&&g){b.push({key:g,request:h})
}return c
};
var e=function(h){var g={method:h.request["method"],id:h.key};
if(h.request["rpc"]){g.params=h.request["rpc"]
}return g
};
var d=function(g){var h={};
var q={};
var l=0;
var m=[];
for(var o=0;
o<b.length;
o++){var k=b[o]["request"]["transport"];
if(!q[k.name]){m.push(k);
l++
}q[k.name]=q[k.name]||[];
q[k.name].push(e(b[o]))
}var p=function(t){if(t.error){h.error=t.error
}for(var s=0;
s<b.length;
s++){var r=b[s]["key"];
var j=t[r];
if(j){if(j.error){h[r]=j
}else{h[r]=j.data||j.result
}}}l--;
if(l===0){g(h)
}};
for(var n=0;
n<m.length;
n++){m[n].execute(q[m[n]["name"]],p)
}if(l==0){window.setTimeout(function(){g(h)
},0)
}};
c.execute=d;
c.add=f;
return c
};
osapi.newBatch=a
})();;
osapi._registerMethod=function(f,e){if(f==="newBatch"){return
}var d=f.split(".");
var b=window.osapi;
for(var a=0;
a<d.length-1;
a++){b[d[a]]=b[d[a]]||{};
b=b[d[a]]
}var c=d[d.length-1];
if(b[c]){if(!b.__dupwarn){gadgets.warn("Skipping duplicate osapi method definition "+f+" on transport "+e.name+"; others may exist, but suppressing warnings")
}b.__dupwarn=true;
return
}b[c]=function(h){h=h||{};
h.userId=h.userId||"@viewer";
h.groupId=h.groupId||"@self";
var g=new osapi._BoundCall(f,e,h);
return g
};
if(typeof tamings___!=="undefined"){tamings___.push(function(){caja___.markTameAsFunction(b[c],f)
})
}};
osapi._BoundCall=function(c,b,a){this["method"]=c;
this["transport"]=b;
this["rpc"]=a
};
osapi._BoundCall.prototype.execute=function(e){var a=(typeof caja___!=="undefined"&&caja___.getUseless&&caja___.getUseless());
var d=a?caja___.getUseless():this;
var b=a?caja___.untame(e):e;
var c=osapi.newBatch();
c.add(this["method"],this);
c.execute(function(f){if(f.error){b.call(d,f.error)
}else{b.call(d,f[d.method])
}})
};;

/* [end] feature=osapi.base */

/* [start] feature=shindig.uri */
shindig.uri=(function(){var a=new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?");
return function(y){var r="";
var n="";
var c="";
var h="";
var d=null;
var i="";
var j=null;
var l=window.decodeURIComponent?decodeURIComponent:unescape;
var x=window.encodeURIComponent?encodeURIComponent:escape;
var k=null;
function u(A){if(A.match(a)===null){throw"Malformed URL: "+A
}r=RegExp.$1;
n=RegExp.$2;
c=RegExp.$3;
h=RegExp.$4;
i=RegExp.$5
}function t(F){var E=[];
for(var C=0,A=F.length;
C<A;
++C){var B=F[C][0];
var D=F[C][1];
if(D===undefined){continue
}E.push(x(B)+(D!==null?"="+x(D):""))
}return E.join("&")
}function q(){if(d){h=t(d);
d=null
}return h
}function z(){if(j){i=t(j);
j=null
}return i
}function o(A){d=d||f(h);
return s(d,A)
}function w(A){j=j||f(i);
return s(j,A)
}function b(B,A){d=m(d||f(h),B,A);
return k
}function g(B,A){j=m(j||f(i),B,A);
return k
}function v(){return[r,r!==""?":":"",n!==""?"//":"",n].join("")
}function p(){var B=q();
var A=z();
return[v(),c,B!==""?"?":"",B,A!==""?"#":"",A].join("")
}function f(H){var G=[];
var F=H.split("&");
for(var C=0,A=F.length;
C<A;
++C){var E=F[C].split("=");
var B=E.shift();
var D=null;
if(E.length>0){D=E.join("").replace(/\+/g," ")
}G.push([B,D!=null?l(D):null])
}return G
}function s(A,D){for(var C=0,B=A.length;
C<B;
++C){if(A[C][0]==D){return A[C][1]
}}return undefined
}function m(E,F,D){var H=F;
if(typeof F==="string"){H={};
H[F]=D
}for(var C in H){var G=false;
for(var B=0,A=E.length;
!G&&B<A;
++B){if(E[B][0]==C){E[B][1]=H[C];
G=true
}}if(!G){E.push([C,H[C]])
}}return E
}function e(B,A){B=B||"";
if(B[0]===A){B=B.substr(A.length)
}return B
}if(typeof y==="object"&&typeof y.toString==="function"){u(y.toString())
}else{if(y){u(y)
}}k={getSchema:function(){return r
},getAuthority:function(){return n
},getOrigin:v,getPath:function(){return c
},getQuery:q,getFragment:z,getQP:o,getFP:w,setSchema:function(A){r=A;
return k
},setAuthority:function(A){n=A;
return k
},setPath:function(A){if(typeof A!=="undefined"&&A!=null){c=(A[0]==="/"?"":"/")+A
}return k
},setQuery:function(A){d=null;
h=e(A,"?");
return k
},setFragment:function(A){j=null;
i=e(A,"#");
return k
},setQP:b,setFP:g,setExistingP:function(A,B){if(o(A,B)!==undefined){b(A,B)
}if(w(A,B)!==undefined){g(A,B)
}return k
},toString:p};
return k
}
})();;

/* [end] feature=shindig.uri */

/* [start] feature=config.min */
gapi.config={};gapi.config.GLOBAL_CFG_KEY="___gcfg";gapi.config.GLOBAL_CFG_USED="___gu";gapi.config.JSL_KEY="___jsl";gapi.config.DEFAULT_CFG_KEY="cd";gapi.config.USER_CFG_KEY="cu";gapi.config.INJECTED_CFG_KEY="ci";gapi.config.SAVED_CFG_KEY="cfg";gapi.config.ATTR_PROCESSED_CONFIG="gapi_processed";gapi.config.jsl=function(){return window[gapi.config.JSL_KEY]=window[gapi.config.JSL_KEY]||{}};gapi.config.jslComponent=function(a){var b=gapi.config.jsl();b[a]=b[a]||[];return b[a]};
gapi.config.cfg=function(a){var b=gapi.config.jsl();b[gapi.config.SAVED_CFG_KEY]=!a&&b[gapi.config.SAVED_CFG_KEY]||{};return b[gapi.config.SAVED_CFG_KEY]};gapi.config.isArray=function(a){return"object"===typeof a&&/\[native code\]/.test(a.push)};
gapi.config.foldConfig=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!gapi.config.isArray(a[c])&&!gapi.config.isArray(b[c])?gapi.config.foldConfig(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=gapi.config.isArray(b[c])?[]:{},gapi.config.foldConfig(a[c],b[c])):a[c]=b[c])};
gapi.config.getSelfScriptTags=function(){var a=document.scripts||document.getElementsByTagName("script")||[],b=[],c=[],d=gapi.config.jsl().u;d&&c.push(d);gapi.config.jsl().us&&c.push.apply(c,gapi.config.jsl().us);for(d=0;d<a.length;++d)for(var e=a[d],f=0;f<c.length;++f)e.src&&0==e.src.indexOf(c[f])&&b.push(e);0==b.length&&a[a.length-1].src&&b.push(a[a.length-1]);return b};
gapi.config.appendInlineConfig=function(){for(var a=gapi.config.jslComponent(gapi.config.USER_CFG_KEY),b=gapi.config.getSelfScriptTags(),c=0;c<b.length;++c)if(!b[c].getAttribute(gapi.config.ATTR_PROCESSED_CONFIG)){b[c].setAttribute(gapi.config.ATTR_PROCESSED_CONFIG,!0);var d=gapi.config.getInnerText(b[c]);(d=gapi.config.parseConfig(d))&&a.push(d)}};
gapi.config.getInnerText=function(a){if(a){var b="",c=a.nodeType;if(3==c||4==c)b=a.nodeValue;else if(a.innerText)b=a.innerText;else if(a.innerHTML)b=a.innerHTML;else if(a.firstChild){b=[];for(a=a.firstChild;a;a=a.nextSibling)b.push(gapi.config.getInnerText(a));b=b.join("")}return b}};
gapi.config.parseConfig=function(a){if(a){for(;0==a.charCodeAt(a.length-1);)a=a.substring(0,a.length-1);var b;try{b=(new Function("return ("+a+"\n)"))()}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return"object"===typeof b?b:{}}};
gapi.config.mergeConfig=function(a){gapi.config.cfg(!0);var b=window[gapi.config.GLOBAL_CFG_KEY],c=gapi.config.jslComponent(gapi.config.USER_CFG_KEY);if(b&&b!==window[gapi.config.GLOBAL_CFG_USED]){var d={};gapi.config.foldConfig(d,b);c.push(d);window[gapi.config.GLOBAL_CFG_USED]=b}gapi.config.appendInlineConfig();a&&(d={},gapi.config.foldConfig(d,a),c.push(d));d=gapi.config.jslComponent(gapi.config.DEFAULT_CFG_KEY);a=0;for(b=d.length;a<b;++a)gapi.config.foldConfig(gapi.config.cfg(),d[a]);d=gapi.config.jslComponent(gapi.config.INJECTED_CFG_KEY);
a=0;for(b=d.length;a<b;++a)gapi.config.foldConfig(gapi.config.cfg(),d[a]);a=0;for(b=c.length;a<b;++a)gapi.config.foldConfig(gapi.config.cfg(),c[a])};gapi.config.get=function(a,b){if(!a)return gapi.config.cfg();for(var c=a.split("/"),d=gapi.config.cfg(),e=0,f=c.length;d&&"object"===typeof d&&e<f;++e)d=d[c[e]];return e===c.length&&void 0!==d?d:b};gapi.config.update=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a.split("/"),f=0,g=e.length;f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}gapi.config.mergeConfig(c)};
gapi.config.prefixGet=function(a){return function(b){return b?gapi.config.get(a+"/"+b):gapi.config.get(a)}};gapi.config.init_=gapi.config.mergeConfig;gapi.config.init_();
;

/* [end] feature=config.min */

/* [start] feature=osapi */
(function(){var a;
function b(j,i){function g(l){if(l.errors[0]){i({error:{code:l.rc,message:l.text}})
}else{var m=l.result||l.data;
if(m.error){i(m)
}else{var k={};
for(var n=0;
n<m.length;
n++){k[m[n]["id"]]=m[n]
}i(k)
}}}var f={POST_DATA:gadgets.json.stringify(j),CONTENT_TYPE:"JSON",METHOD:"POST",AUTHORIZATION:"SIGNED"};
var h={"Content-Type":"application/json"};
var d=this.name;
var e=shindig.auth.getSecurityToken();
if(e){if(a){h.Authorization="OAuth2 "+e
}else{d+="?st=";
d+=encodeURIComponent(e)
}}gadgets.io.makeNonProxiedRequest(d,g,f,h)
}function c(g){var j=g["osapi.services"];
a=g["osapi.useOAuth2"];
if(j){for(var f in j){if(j.hasOwnProperty(f)){if(f.indexOf("http")==0||f.indexOf("//")==0){var d=f.replace("%host%",document.location.host);
var k={name:d,execute:b};
var e=j[f];
for(var h=0;
h<e.length;
h++){osapi._registerMethod(e[h],k)
}}}}}}osapi._init=function(d){c(d)
};
if(gadgets.config){gadgets.config.register("osapi.services",null,c)
}})();;
gadgets.util.registerOnLoadHandler(function(){if(osapi&&osapi.people&&osapi.people.get){osapi.people.getViewer=function(a){a=a||{};
a.userId="@viewer";
a.groupId="@self";
return osapi.people.get(a)
};
osapi.people.getViewerFriends=function(a){a=a||{};
a.userId="@viewer";
a.groupId="@friends";
return osapi.people.get(a)
};
osapi.people.getOwner=function(a){a=a||{};
a.userId="@owner";
a.groupId="@self";
return osapi.people.get(a)
};
osapi.people.getOwnerFriends=function(a){a=a||{};
a.userId="@owner";
a.groupId="@friends";
return osapi.people.get(a)
}
}});;

/* [end] feature=osapi */

/* [start] feature=shindig.uri.ext */
shindig._uri=shindig.uri;
shindig.uri=(function(){var c=shindig._uri;
shindig._uri=null;
function a(e,d){return e.getOrigin()==d.getOrigin()
}function b(e,g){if(e.getSchema()==""){e.setSchema(g.getSchema())
}if(e.getAuthority()==""){e.setAuthority(g.getAuthority())
}var f=e.getPath();
if(f==""||f.charAt(0)!="/"){var h=g.getPath();
var d=h.lastIndexOf("/");
if(d!=-1){h=h.substring(0,d+1)
}e.setPath(g.getPath()+f)
}}return function(d){var e=c(d);
e.hasSameOrigin=function(f){return a(e,f)
};
e.resolve=function(f){return b(e,f)
};
return e
}
})();;

/* [end] feature=shindig.uri.ext */

/* [start] feature=container */
osapi.container={};
osapi.container.MetadataParam={LOCAL_EXPIRE_TIME:"localExpireTimeMs",URL:"url"};
osapi.container.MetadataResponse={IFRAME_URL:"iframeUrl",NEEDS_TOKEN_REFRESH:"needsTokenRefresh",VIEWS:"views",EXPIRE_TIME_MS:"expireTimeMs",FEATURES:"features",HEIGHT:"height",MODULE_PREFS:"modulePrefs",PREFERRED_HEIGHT:"preferredHeight",PREFERRED_WIDTH:"preferredWidth",RESPONSE_TIME_MS:"responseTimeMs",WIDTH:"width"};
osapi.container.TokenResponse={TOKEN:"token"};
osapi.container.NavigateTiming={URL:"url",ID:"id",START:"start",XRT:"xrt",SRT:"srt",DL:"dl",OL:"ol",PRT:"prt"};
osapi.container.RenderParam={ALLOW_DEFAULT_VIEW:"allowDefaultView",CAJOLE:"cajole",CLASS:"class",DEBUG:"debug",HEIGHT:"height",NO_CACHE:"nocache",TEST_MODE:"testmode",USER_PREFS:"userPrefs",VIEW:"view",WIDTH:"width"};
osapi.container.ViewParam={VIEW:"view"};;
osapi.container.util={};
osapi.container.util.getSafeConfigValue=function(c,b,a){return(c[b]!=undefined&&c[b]!=null)?c[b]:a
};
osapi.container.util.mergeJsons=function(d,c){var a={};
for(var b in d){a[b]=d[b]
}for(var b in c){a[b]=c[b]
}return a
};
osapi.container.util.newMetadataRequest=function(a,b){return{container:a,ids:b,fields:["iframeUrl","modulePrefs.*","needsTokenRefresh","userPrefs.*","views.preferredHeight","views.preferredWidth","expireTimeMs","responseTimeMs"]}
};
osapi.container.util.newTokenRequest=function(a,b){return{container:a,ids:b,fields:["token"]}
};
osapi.container.util.toArrayOfJsonKeys=function(c){var a=[];
for(var b in c){a.push(b)
}return a
};
osapi.container.util.isEmptyJson=function(b){for(var a in b){return false
}return true
};
osapi.container.util.warn=function(a){if(console&&console.warn){console.warn(a)
}};
osapi.container.util.getCurrentTimeMs=function(){return new Date().getTime()
};;
osapi.container.Service=function(a){var b=a||{};
this.container_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ServiceConfig.CONTAINER,window.__CONTAINER));
this.apiHost_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ServiceConfig.API_HOST,window.__API_URI.getOrigin()));
this.apiPath_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ServiceConfig.API_PATH,"/api/rpc/cs"));
this.cachedMetadatas_={};
this.cachedTokens_={};
this.registerOsapiServices();
this.onConstructed(b)
};
osapi.container.Service.prototype.onConstructed=function(a){};
osapi.container.Service.prototype.getGadgetMetadata=function(c,b){var f=b||function(){};
var e=osapi.container.util.toArrayOfJsonKeys(this.getUncachedDataByRequest_(this.cachedMetadatas_,c));
var d=this.getCachedDataByRequest_(this.cachedMetadatas_,c);
if(e.length==0){f(d)
}else{var a=this;
c=osapi.container.util.newMetadataRequest(this.container_,e);
osapi.gadgets["metadata"](c).execute(function(g){if(g.error){for(var h=0;
h<c.ids.length;
h++){d[k]={error:g.error}
}}else{var l=osapi.container.util.getCurrentTimeMs();
for(var k in g){var j=g[k];
a.updateResponse_(j,k,l);
a.cachedMetadatas_[k]=j;
d[k]=j
}}f(d)
})
}};
osapi.container.Service.prototype.addGadgetMetadatas=function(a,b){this.addToCache_(a,b,this.cachedMetadatas_)
};
osapi.container.Service.prototype.addGadgetTokens=function(a,b){this.addToCache_(a,b,this.cachedTokens_)
};
osapi.container.Service.prototype.addToCache_=function(b,c,a){var f=osapi.container.util.getCurrentTimeMs();
for(var e in b){var d=b[e];
this.updateResponse_(d,e,f,c);
a[e]=d
}};
osapi.container.Service.prototype.updateResponse_=function(b,d,c,a){b[osapi.container.MetadataParam.URL]=d;
b[osapi.container.MetadataParam.LOCAL_EXPIRE_TIME]=b[osapi.container.MetadataResponse.EXPIRE_TIME_MS]-(a==null?b[osapi.container.MetadataResponse.RESPONSE_TIME_MS]:a)+c
};
osapi.container.Service.prototype.getGadgetToken=function(c,b){var d=b||function(){};
var a=this;
osapi.gadgets["token"](c).execute(function(e){var g={};
if(e.error){for(var f=0;
f<c.ids.length;
f++){g[h]={error:e.error}
}}else{for(var h in e){e[h]["url"]=h;
a.cachedTokens_[h]=e[h];
g[h]=e[h]
}}d(g)
})
};
osapi.container.Service.prototype.getCachedGadgetMetadata=function(a){return this.cachedMetadatas_[a]
};
osapi.container.Service.prototype.getCachedGadgetToken=function(a){return this.cachedTokens_[a]
};
osapi.container.Service.prototype.uncacheStaleGadgetMetadataExcept=function(c){for(var a in this.cachedMetadatas_){if(typeof c[a]==="undefined"){var b=this.cachedMetadatas_[a];
if(b[osapi.container.MetadataParam.LOCAL_EXPIRE_TIME]<osapi.container.util.getCurrentTimeMs()){delete this.cachedMetadatas_[a]
}}}};
osapi.container.Service.prototype.registerOsapiServices=function(){var b=this.apiHost_+this.apiPath_;
var a={};
a["gadgets.rpc"]=["container.listMethods"];
a[b]=["gadgets.metadata","gadgets.token"];
osapi._init({osapi:{endPoints:[b]},"osapi.services":a})
};
osapi.container.Service.prototype.getCachedDataByRequest_=function(a,b){return this.filterCachedDataByRequest_(a,b,function(c){return(typeof c!=="undefined")
})
};
osapi.container.Service.prototype.getUncachedDataByRequest_=function(a,b){return this.filterCachedDataByRequest_(a,b,function(c){return(typeof c==="undefined")
})
};
osapi.container.Service.prototype.filterCachedDataByRequest_=function(f,c,e){var a={};
for(var b=0;
b<c.ids.length;
b++){var g=c.ids[b];
var d=f[g];
if(e(d)){a[g]=d
}}return a
};
osapi.container.ServiceConfig={API_HOST:"apiHost",API_PATH:"apiPath",CONTAINER:"container"};;
osapi.container.GadgetHolder=function(b,a){this.siteId_=b;
this.el_=a;
this.gadgetInfo_=null;
this.viewParams_=null;
this.renderParams_=null;
this.iframeId_=null;
this.securityToken_=null;
this.onConstructed()
};
osapi.container.GadgetHolder.prototype.relayPath_=null;
osapi.container.GadgetHolder.prototype.onConstructed=function(){};
osapi.container.GadgetHolder.prototype.getElement=function(){return this.el_
};
osapi.container.GadgetHolder.prototype.getIframeId=function(){return this.iframeId_
};
osapi.container.GadgetHolder.prototype.getGadgetInfo=function(){return this.gadgetInfo_
};
osapi.container.GadgetHolder.prototype.dispose=function(){this.gadgetInfo_=null
};
osapi.container.GadgetHolder.prototype.getUrl=function(){return(this.gadgetInfo_)?this.gadgetInfo_.url:null
};
osapi.container.GadgetHolder.prototype.getView=function(){return this.renderParams_[osapi.container.RenderParam.VIEW]
};
osapi.container.GadgetHolder.prototype.getIframeElement=function(){return this.el_.firstChild
};
osapi.container.GadgetHolder.prototype.setSecurityToken=function(a){this.securityToken_=a;
return this
};
osapi.container.GadgetHolder.prototype.render=function(b,a,c){this.iframeId_=osapi.container.GadgetHolder.IFRAME_ID_PREFIX_+this.siteId_;
this.gadgetInfo_=b;
this.viewParams_=a;
this.renderParams_=c;
if(this.hasFeature_(b,"pubsub-2")){this.doOaaIframeHtml_()
}else{this.doNormalIframeHtml_()
}};
osapi.container.GadgetHolder.IFRAME_ID_PREFIX_="__gadget_";
osapi.container.GadgetHolder.prototype.doNormalIframeHtml_=function(){this.el_.innerHTML=this.getIframeHtml_();
var b=shindig.uri(this.gadgetInfo_[osapi.container.MetadataResponse.IFRAME_URL]);
var a=shindig.uri().setSchema(b.getSchema()).setAuthority(b.getAuthority()).setPath(this.relayPath_);
gadgets.rpc.setupReceiver(this.iframeId_,a.toString(),b.getFP("rpctoken"))
};
osapi.container.GadgetHolder.prototype.doOaaIframeHtml_=function(){var a={id:this.iframeId_,name:this.iframeId_,src:this.getIframeUrl_(),scrolling:"no",marginwidth:"0",marginheight:"0",frameborder:"0",vspace:"0",hspace:"0","class":this.renderParams_[osapi.container.RenderParam.CLASS],height:this.renderParams_[osapi.container.RenderParam.HEIGHT],width:this.renderParams_[osapi.container.RenderParam.WIDTH]};
new OpenAjax.hub.IframeContainer(gadgets.pubsub2router.hub,this.iframeId_,{Container:{onSecurityAlert:function(c,b){gadgets.error(["Security error for container ",c.getClientID()," : ",b].join(""));
c.getIframe().src="about:blank"
},onConnect:function(b){gadgets.log(["connected: ",b.getClientID()].join(""))
}},IframeContainer:{parent:this.el_,uri:this.getIframeUrl_(),tunnelURI:shindig.uri(this.relayPath_).resolve(shindig.uri(window.location.href)),iframeAttrs:a}})
};
osapi.container.GadgetHolder.prototype.hasFeature_=function(c,a){var d=c[osapi.container.MetadataResponse.MODULE_PREFS];
if(d){var b=d[osapi.container.MetadataResponse.FEATURES];
if(b&&b[a]){return true
}}return false
};
osapi.container.GadgetHolder.prototype.getIframeHtml_=function(){var c={id:this.iframeId_,name:this.iframeId_,src:this.getIframeUrl_(),scrolling:"no",marginwidth:"0",marginheight:"0",frameborder:"0",vspace:"0",hspace:"0","class":this.renderParams_[osapi.container.RenderParam.CLASS],height:this.renderParams_[osapi.container.RenderParam.HEIGHT],width:this.renderParams_[osapi.container.RenderParam.WIDTH]};
var a=[];
a.push("<iframe ");
for(var b in c){var d=c[b];
if(d){a.push(b);
a.push('="');
a.push(d);
a.push('" ')
}}a.push("></iframe>");
return a.join("")
};
osapi.container.GadgetHolder.prototype.getIframeUrl_=function(){var b=shindig.uri(this.gadgetInfo_[osapi.container.MetadataResponse.IFRAME_URL]);
b.setQP("debug",this.renderParams_[osapi.container.RenderParam.DEBUG]?"1":"0");
b.setQP("nocache",this.renderParams_[osapi.container.RenderParam.NO_CACHE]?"1":"0");
b.setQP("testmode",this.renderParams_[osapi.container.RenderParam.TEST_MODE]?"1":"0");
b.setQP("view",this.getView());
if(this.renderParams_[osapi.container.RenderParam.CAJOLE]){var c=b.getQP("libs");
if(c==null||c==""){b.setQP("libs","caja")
}else{b.setQP("libs",[c,":caja"].join(""))
}b.setQP("caja","1")
}this.updateUserPrefParams_(b);
b.setQP("parent",window.__CONTAINER_URI.getOrigin());
if(this.securityToken_){b.setExistingP("st",this.securityToken_)
}b.setQP("mid",String(this.siteId_));
if(!osapi.container.util.isEmptyJson(this.viewParams_)){var a=gadgets.json.stringify(this.viewParams_);
b.setFP("view-params",a)
}return b.toString()
};
osapi.container.GadgetHolder.prototype.updateUserPrefParams_=function(e){var d=this.renderParams_[osapi.container.RenderParam.USER_PREFS];
if(d){for(var a in d){var c="up_"+a;
var b=d[a];
if(b instanceof Array){b=b.join("|")
}e.setExistingP(c,b)
}}};
function init(a){if(a.container){var b=a.container["relayPath"];
osapi.container.GadgetHolder.prototype.relayPath_=b
}}if(gadgets.config){gadgets.config.register("container",null,init)
};;
osapi.container.GadgetSite=function(a){this.container_=a.container;
this.service_=a.service;
this.navigateCallback_=a.navigateCallback;
this.currentGadgetEl_=a.gadgetEl;
this.loadingGadgetEl_=a.bufferEl;
this.id_=osapi.container.GadgetSite.nextUniqueId_++;
this.parentId_=null;
this.currentGadgetHolder_=null;
this.loadingGadgetHolder_=null;
this.onConstructed()
};
osapi.container.GadgetSite.prototype.onConstructed=function(){};
osapi.container.GadgetSite.prototype.setHeight=function(c){var a=this.getActiveGadgetHolder();
if(a){var b=a.getIframeElement();
if(b){b.style.height=c+"px"
}}return this
};
osapi.container.GadgetSite.prototype.setWidth=function(c){var a=this.getActiveGadgetHolder();
if(a){var b=a.getIframeElement();
if(b){b.style.width=c+"px"
}}return this
};
osapi.container.GadgetSite.prototype.setParentId=function(a){this.parentId_=a;
return this
};
osapi.container.GadgetSite.prototype.getId=function(){return this.id_
};
osapi.container.GadgetSite.prototype.getActiveGadgetHolder=function(){return this.loadingGadgetHolder_||this.currentGadgetHolder_
};
osapi.container.GadgetSite.prototype.getFeature=function(a,b){var c=b||this.getActiveGadgetHolder().getGadgetInfo();
return c[osapi.container.MetadataResponse.FEATURES]&&c[osapi.container.MetadataResponse.FEATURES][a]
};
osapi.container.GadgetSite.prototype.getParentId=function(){return this.parentId_
};
osapi.container.GadgetSite.prototype.navigateTo=function(i,h,b,e){var a=osapi.container.util.getCurrentTimeMs();
var c=this.service_.getCachedGadgetMetadata(i);
var f=e||function(){};
var d=osapi.container.util.newMetadataRequest(this.container_,[i]);
var g=this;
this.service_.getGadgetMetadata(d,function(k){var m=(!c)?(osapi.container.util.getCurrentTimeMs()-a):0;
var l=k[i];
if(l.error){var n=["Failed to navigate for gadget ",i,"."].join("");
osapi.container.util.warn(n)
}else{g.render(l,h,b)
}var j={};
j[osapi.container.NavigateTiming.URL]=i;
j[osapi.container.NavigateTiming.ID]=g.id_;
j[osapi.container.NavigateTiming.START]=a;
j[osapi.container.NavigateTiming.XRT]=m;
g.onNavigateTo(j);
f(l)
})
};
osapi.container.GadgetSite.prototype.onNavigateTo=function(b){if(this.navigateCallback_){var a=window[this.navigateCallback_];
if(typeof a==="function"){a(b)
}}};
osapi.container.GadgetSite.prototype.render=function(g,j,b){var e=this.currentGadgetHolder_?this.currentGadgetHolder_.getUrl():null;
var c=null;
if(e==g.url){c=this.currentGadgetHolder_.getView()
}var f=b[osapi.container.RenderParam.VIEW]||j[osapi.container.ViewParam.VIEW]||c;
var i=g[osapi.container.MetadataResponse.VIEWS][f];
if(!i&&b[osapi.container.RenderParam.ALLOW_DEFAULT_VIEW]){f=osapi.container.GadgetSite.DEFAULT_VIEW_;
i=g[osapi.container.MetadataResponse.VIEWS][f]
}if(!i){gadgets.warn(["Unsupported view ",f," for gadget ",g.url,"."].join(""));
return
}var a=this.loadingGadgetEl_||this.currentGadgetEl_;
this.loadingGadgetHolder_=new osapi.container.GadgetHolder(this.id_,a);
var d={};
for(var h in b){d[h]=b[h]
}d[osapi.container.RenderParam.VIEW]=f;
d[osapi.container.RenderParam.HEIGHT]=b[osapi.container.RenderParam.HEIGHT]||i[osapi.container.MetadataResponse.PREFERRED_HEIGHT]||g[osapi.container.MetadataResponse.MODULE_PREFS][osapi.container.MetadataResponse.HEIGHT]||String(osapi.container.GadgetSite.DEFAULT_HEIGHT_);
d[osapi.container.RenderParam.WIDTH]=b[osapi.container.RenderParam.WIDTH]||i[osapi.container.MetadataResponse.PREFERRED_WIDTH]||g[osapi.container.MetadataResponse.MODULE_PREFS][osapi.container.MetadataResponse.WIDTH]||String(osapi.container.GadgetSite.DEFAULT_WIDTH_);
this.updateSecurityToken_(g,d);
this.loadingGadgetHolder_.render(g,j,d);
this.onRender(g,j,b)
};
osapi.container.GadgetSite.prototype.onRender=function(b,a,c){this.swapBuffers_();
if(this.currentGadgetHolder_){this.currentGadgetHolder_.dispose()
}this.currentGadgetHolder_=this.loadingGadgetHolder_;
this.loadingGadgetHolder_=null
};
osapi.container.GadgetSite.prototype.rpcCall=function(a,c,b){if(this.currentGadgetHolder_){gadgets.rpc.call(this.currentGadgetHolder_.getIframeId(),a,c,b)
}};
osapi.container.GadgetSite.prototype.updateSecurityToken_=function(c,d){var a=this.service_.getCachedGadgetToken(c.url);
if(a){var b=a[osapi.container.TokenResponse.TOKEN];
this.loadingGadgetHolder_.setSecurityToken(b)
}};
osapi.container.GadgetSite.prototype.close=function(){if(this.loadingGadgetEl_&&this.loadingGadgetEl_.firstChild){this.loadingGadgetEl_.removeChild(this.loadingGadgetEl_.firstChild)
}if(this.currentGadgetEl_&&this.currentGadgetEl_.firstChild){this.currentGadgetEl_.removeChild(this.currentGadgetEl_.firstChild)
}if(this.loadingGadgetHolder_){this.loadingGadgetHolder_.dispose()
}if(this.currentGadgetHolder_){this.currentGadgetHolder_.dispose()
}};
osapi.container.GadgetSite.nextUniqueId_=0;
osapi.container.GadgetSite.prototype.swapBuffers_=function(){if(this.loadingGadgetEl_){this.loadingGadgetEl_.style.left="";
this.loadingGadgetEl_.style.position="";
this.currentGadgetEl_.style.position="absolute";
this.currentGadgetEl_.style.left="-2000px";
var a=this.currentGadgetEl_;
this.currentGadgetEl_=this.loadingGadgetEl_;
this.loadingGadgetEl_=a
}};
osapi.container.GadgetSite.RPC_ARG_KEY="gs";
osapi.container.GadgetSite.DEFAULT_HEIGHT_=200;
osapi.container.GadgetSite.DEFAULT_WIDTH_=320;
osapi.container.GadgetSite.DEFAULT_VIEW_="default";;
osapi.container.Container=function(a){var b=a||{};
this.preloadedGadgetUrls_={};
this.sites_={};
this.allowDefaultView_=Boolean(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.ALLOW_DEFAULT_VIEW,true));
this.container_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.CONTAINER,window.__CONTAINER));
this.renderCajole_=Boolean(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.RENDER_CAJOLE,false));
this.renderDebugParam_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.RENDER_DEBUG_PARAM,osapi.container.ContainerConfig.RENDER_DEBUG));
var c=window.__CONTAINER_URI.getQP(this.renderDebugParam_);
this.renderDebug_=(typeof c==="undefined")?Boolean(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.RENDER_DEBUG,false)):(c==="1");
this.renderTest_=Boolean(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.RENDER_TEST,false));
this.tokenRefreshInterval_=Number(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.TOKEN_REFRESH_INTERVAL,30*60*1000));
this.navigateCallback_=String(osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.NAVIGATE_CALLBACK,null));
this.service_=new osapi.container.Service(b);
this.tokenRefreshTimer_=null;
this.initializeMixins_();
this.preloadFromConfig_(b);
this.registerRpcServices_();
this.onConstructed(b)
};
osapi.container.Container.prototype.newGadgetSite=function(c,a){var d=a||null;
var b=new osapi.container.GadgetSite({container:this.container_,service:this.service_,navigateCallback:this.navigateCallback_,gadgetEl:c,bufferEl:d});
this.sites_[b.getId()]=b;
return b
};
osapi.container.Container.prototype.navigateGadget=function(e,b,a,f,d){var g=d||function(){};
if(this.allowDefaultView_){f[osapi.container.RenderParam.ALLOW_DEFAULT_VIEW]=true
}if(this.renderCajole_){f[osapi.container.RenderParam.CAJOLE]=true
}if(this.renderDebug_){f[osapi.container.RenderParam.NO_CACHE]=true;
f[osapi.container.RenderParam.DEBUG]=true
}if(this.renderTest_){f[osapi.container.RenderParam.TEST_MODE]=true
}this.refreshService_();
var c=this;
e.navigateTo(b,a,f,function(h){if(h.error){gadgets.warn(["Failed to possibly schedule token refresh for gadget ",b,"."].join(""))
}else{if(h[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH]){c.scheduleRefreshTokens_()
}}g(h)
})
};
osapi.container.Container.prototype.closeGadget=function(a){var b=a.getId();
a.close();
delete this.sites_[b];
this.unscheduleRefreshTokens_()
};
osapi.container.Container.prototype.preloadGadget=function(a,b){this.preloadGadgets([a],b)
};
osapi.container.Container.prototype.preloadGadgets=function(c,b){var e=b||function(){};
var d=osapi.container.util.newMetadataRequest(this.container_,c);
var a=this;
this.refreshService_();
this.service_.getGadgetMetadata(d,function(f){a.addPreloadGadgets_(f);
e(f)
})
};
osapi.container.Container.prototype.unloadGadget=function(a){this.unloadGadgets([a])
};
osapi.container.Container.prototype.unloadGadgets=function(c){for(var b=0;
b<c.length;
b++){var a=c[b];
delete this.preloadedGadgetUrls_[a]
}};
osapi.container.Container.prototype.getGadgetMetadata=function(a,c){var b=osapi.container.util.newMetadataRequest(this.container_,[a]);
this.refreshService_();
this.service_.getGadgetMetadata(b,c)
};
osapi.container.Container.prototype.rpcRegister=function(a,c){var b=this;
gadgets.rpc.register(a,function(){this[osapi.container.GadgetSite.RPC_ARG_KEY]=b.getGadgetSiteByIframeId_(this["f"]);
var d=[this];
for(var e=0;
e<arguments.length;
++e){d.push(arguments[e])
}c.apply(b,d)
})
};
osapi.container.Container.prototype.onConstructed=function(a){};
osapi.container.Container.addMixin=function(a,b){osapi.container.Container.prototype.mixins_[a]=b
};
osapi.container.ContainerConfig={ALLOW_DEFAULT_VIEW:"allowDefaultView",CONTAINER:"container",RENDER_CAJOLE:"renderCajole",RENDER_DEBUG:"renderDebug",RENDER_DEBUG_PARAM:"renderDebugParam",RENDER_TEST:"renderTest",TOKEN_REFRESH_INTERVAL:"tokenRefreshInterval",NAVIGATE_CALLBACK:"navigateCallback",PRELOAD_REF_TIME:"preloadRefTime",PRELOAD_METADATAS:"preloadMetadatas",PRELOAD_TOKENS:"preloadTokens"};
osapi.container.Container.prototype.mixins_={};
osapi.container.Container.prototype.initializeMixins_=function(){for(var a in this.mixins_){this[a]=new this.mixins_[a](this)
}};
osapi.container.Container.prototype.addPreloadGadgets_=function(a){for(var b in a){if(a[b].error){gadgets.warn(["Failed to preload gadget ",b,"."].join(""))
}else{this.addPreloadedGadgetUrl_(b);
if(a[b][osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH]){this.scheduleRefreshTokens_()
}}}};
osapi.container.Container.prototype.preloadFromConfig_=function(b){var a=osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.PRELOAD_METADATAS,{});
var d=osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.PRELOAD_TOKENS,{});
var c=osapi.container.util.getSafeConfigValue(b,osapi.container.ContainerConfig.PRELOAD_REF_TIME,null);
this.service_.addGadgetMetadatas(a,c);
this.service_.addGadgetTokens(d,c);
this.addPreloadGadgets_(a)
};
osapi.container.Container.prototype.refreshService_=function(){var a=this.getActiveGadgetUrls_();
this.service_.uncacheStaleGadgetMetadataExcept(a)
};
osapi.container.Container.prototype.getGadgetSiteByIframeId_=function(d){for(var c in this.sites_){var a=this.sites_[c];
var b=a.getActiveGadgetHolder();
if(b&&b.getIframeId()===d){return a
}}return null
};
osapi.container.Container.prototype.scheduleRefreshTokens_=function(){if(this.isRefreshTokensEnabled_()&&!this.tokenRefreshTimer_){var a=this;
this.tokenRefreshTimer_=window.setInterval(function(){a.refreshTokens_()
},this.tokenRefreshInterval_)
}};
osapi.container.Container.prototype.unscheduleRefreshTokens_=function(){if(this.tokenRefreshTimer_){var a=this.getTokenRefreshableGadgetUrls_();
if(a.length<=0){window.clearInterval(this.tokenRefreshTimer_);
this.tokenRefreshTimer_=null
}}};
osapi.container.Container.prototype.isRefreshTokensEnabled_=function(){return this.tokenRefreshInterval_>0
};
osapi.container.Container.prototype.registerRpcServices_=function(){this.rpcRegister("resize_iframe",function(b,c){var a=b[osapi.container.GadgetSite.RPC_ARG_KEY];
if(a){a.setHeight(c)
}})
};
osapi.container.Container.prototype.addPreloadedGadgetUrl_=function(a){this.preloadedGadgetUrls_[a]=null
};
osapi.container.Container.prototype.getTokenRefreshableGadgetUrls_=function(){var a={};
for(var b in this.getActiveGadgetUrls_()){var c=this.service_.getCachedGadgetMetadata(b);
if(c[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH]){a[b]=null
}}return osapi.container.util.toArrayOfJsonKeys(a)
};
osapi.container.Container.prototype.getActiveGadgetUrls_=function(){return osapi.container.util.mergeJsons(this.getNavigatedGadgetUrls_(),this.preloadedGadgetUrls_)
};
osapi.container.Container.prototype.getNavigatedGadgetUrls_=function(){var a={};
for(var c in this.sites_){var b=this.sites_[c].getActiveGadgetHolder();
if(b){a[b.getUrl()]=null
}}return a
};
osapi.container.Container.prototype.refreshTokens_=function(){var b=this.getTokenRefreshableGadgetUrls_();
var c=osapi.container.util.newTokenRequest(this.container_,b);
var a=this;
this.service_.getGadgetToken(c,function(e){for(var h in a.sites_){var f=a.sites_[h].getActiveGadgetHolder();
var g=a.service_.getCachedGadgetMetadata(f.getUrl());
if(g[osapi.container.MetadataResponse.NEEDS_TOKEN_REFRESH]){var d=e[f.getUrl()];
if(d.error){gadgets.warn(["Failed to get token for gadget ",f.getUrl(),"."].join(""))
}else{gadgets.rpc.call(f.getIframeId(),"update_security_token",null,d[osapi.container.TokenResponse.TOKEN])
}}}})
};;
(function(){google.container=google.container||{};google.container.MetadataParam=osapi.container.MetadataParam;google.container.MetadataResponse=osapi.container.MetadataResponse;google.container.TokenResponse=osapi.container.TokenResponse;google.container.NavigateTiming=osapi.container.NavigateTiming;google.container.RenderParam=osapi.container.RenderParam;google.container.RenderParam.AUTH_USER="authUser";google.container.RenderParam.EID="eid";google.container.RenderParam.FORCE_HL="forceHl";
google.container.RenderParam.HL="hl";google.container.ViewParam=osapi.container.ViewParam;google.container.Container=osapi.container.Container;google.container.ContainerConfig=osapi.container.ContainerConfig;google.container.GadgetSite=osapi.container.GadgetSite;google.container.GadgetHolder=osapi.container.GadgetHolder;google.container.Service=osapi.container.Service;google.container.ServiceConfig=osapi.container.ServiceConfig;google.container.util=osapi.container.util;
osapi.container.util.getSafeConfigValue=function(a,b,c){return gapi.config.get("google.container/"+b)||(void 0!=a[b]&&null!=a[b]?a[b]:c)};
google.container.Container.prototype.onConstructed=function(a){if(this.navigateCallback_){var b=this;gadgets.rpc.register("time_iframe",function(a){var e=window[b.navigateCallback_];if("function"===typeof e){var d=a[google.container.NavigateTiming.ID];b.sites_[d]&&(d=b.sites_[d].getNavigateTiming()[google.container.NavigateTiming.START],b.appendTiming_(a,d,google.container.NavigateTiming.SRT),b.appendTiming_(a,d,google.container.NavigateTiming.PRT),b.appendTiming_(a,d,google.container.NavigateTiming.DL),
b.appendTiming_(a,d,google.container.NavigateTiming.OL),e(a))}})}};google.container.Container.prototype.appendTiming_=function(a,b,c){a[c]&&(a[c]-=b)};google.container.GadgetSite.prototype.onConstructed=function(){this.navigateTiming_=null};google.container.GadgetSite.prototype.onNavigateTo=function(a){this.navigateTiming_=a};google.container.GadgetSite.prototype.getNavigateTiming=function(){return this.navigateTiming_};osapi.container.GadgetHolder.prototype.parentGetIframeUrl_=osapi.container.GadgetHolder.prototype.getIframeUrl_;
osapi.container.GadgetHolder.prototype.getIframeUrl_=function(){var a=shindig.uri(this.parentGetIframeUrl_());this.appendToIframeUrl_(a,"authuser",google.container.RenderParam.AUTH_USER);this.appendToIframeUrl_(a,"eid",google.container.RenderParam.EID);this.appendToIframeUrl_(a,"forcehl",google.container.RenderParam.FORCE_HL);this.appendToIframeUrl_(a,"hl",google.container.RenderParam.HL);return a.toString()};
osapi.container.GadgetHolder.prototype.appendToIframeUrl_=function(a,b,c){"undefined"!=typeof this.renderParams_[c]&&a.setQP(b,this.renderParams_[c])};google.container.Service.prototype.parentGetGadgetMetadata_=google.container.Service.prototype.getGadgetMetadata;google.container.Service.prototype.onConstructed=function(a){this.aspDomain_=String(google.container.util.getSafeConfigValue(a||{},google.container.ServiceConfig.ASP_DOMAIN,"google.com"))};
google.container.Service.prototype.getGadgetMetadata=function(a,b){var c=b||function(){},e=this;this.parentGetGadgetMetadata_(a,function(a){for(var b in a){var f=a[b];f.error?google.container.util.warn("Failed to get metadata for gadget "+b+"."):e.processAspDomain_(f)}c(a)})};
google.container.Service.prototype.processAspDomain_=function(a){a[google.container.MetadataResponse.IFRAME_URL]=a[google.container.MetadataResponse.IFRAME_URL].replace("__ENV_google_apps_auth_path__",this.aspDomain_?"a/"+this.aspDomain_+"/":"")};google.container.ServiceConfig.ASP_DOMAIN="aspDomain";})();
;
(function(){function a(){gadgets.config.init({rpc:{parentRelayUrl:""},"core.io":{jsonProxyUrl:"http://%host%/gadgets/makeRequest",proxyUrl:"http://%host%/gadgets/proxy?refresh=%refresh%&container=%container%%rewriteMime%&gadget=%gadget%/%rawurl%"}})
}function b(){window.__CONTAINER_URI=shindig.uri(window.location.href);
window.__API_URI=null;
var c=null;
if(window.__CONTAINER_SCRIPT_ID){c=document.getElementById(window.__CONTAINER_SCRIPT_ID)
}else{var d=document.getElementsByTagName("script");
if(d.length>0){c=d[d.length-1]
}}if(c){window.__API_URI=shindig.uri(c.src);
window.__API_URI.resolve(window.__CONTAINER_URI)
}window.__CONTAINER=window.__API_URI?window.__API_URI.getQP("container"):"default"
}a();
b()
})();;

/* [end] feature=container */
gadgets.config.init({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"},"osapi.services":{"//%host%/gadgets/api/rpc":["http.get","http.post","http.put","http.delete","http.head","cache.invalidate"],"//%host%/api/rpc":["activities.get","activities.create","activities.update","activities.delete","activities.supportedFields","appdata.get","appdata.create","appdata.update","appdata.delete","finance.get","weather.get","people.get","people.supportedFields"]},"core.io":{"jsonProxyUrl":"//%host%/gadgets/makeRequest","proxyUrl":"//www-ss-opensocial.googleusercontent.com/gadgets/proxy/refresh=%refresh%&container=%container%%rewriteMime%&gadget=%gadget%/%rawurl%"}});
(function(){var j=window['___jsl']=window['___jsl']||{};j['l']=(j['l']||[]).concat(['container']);})();(function() {var nm='TX_GadgetsCallback';if (typeof window[nm]==='function') {window[nm]();}})();(function(){var j=window['___jsl']=window['___jsl']||{};if(j['c']){j['c']();delete j['c'];}})();