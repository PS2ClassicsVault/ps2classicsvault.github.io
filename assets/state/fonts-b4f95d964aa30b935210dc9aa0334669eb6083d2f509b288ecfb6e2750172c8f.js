!function(){function t(t){return t.call.apply(t.bind,arguments)}function n(t,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function i(){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:n).apply(null,arguments)}function e(t,n){this.a=t,this.m=n||t,this.c=this.m.document}function o(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function a(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function c(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function f(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function h(t){return t.m.location.hostname||t.a.location.hostname}function l(t,n,i){function e(){f&&s&&r&&(f(c),f=null)}n=o(t,"link",{rel:"stylesheet",href:n,media:"all"});var s=!1,r=!0,c=null,f=i||null;et?(n.onload=function(){s=!0,e()},n.onerror=function(){s=!0,c=Error("Stylesheet failed to load"),e()}):setTimeout(function(){s=!0,e()},0),a(t,"head",n)}function u(t,n,i,e){var a=t.c.getElementsByTagName("head")[0];if(a){var s=o(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&a.removeChild(s))},a.appendChild(s),setTimeout(function(){r||(r=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function p(){this.a=0,this.c=null}function d(t){return t.a++,function(){t.a--,v(t)}}function g(t,n){t.c=n,v(t)}function v(t){0==t.a&&t.c&&(t.c(),t.c=null)}function w(t){this.a=t||"-"}function m(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function y(t){return j(t)+" "+t.f+"00 300px "+b(t.c)}function b(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function j(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function k(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function T(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new w("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function _(t){t.g&&r(t.f,[t.a.c("wf","loading")]),A(t,"loading")}function S(t){if(t.g){var n=c(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),r(t.f,i,e)}A(t,"inactive")}function A(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function C(){this.c={}}function N(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}function E(t,n){this.c=t,this.f=n,this.a=o(this.c,"span",{"aria-hidden":"true"},this.f)}function W(t){a(t.c,"body",t.a)}function F(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function O(t,n,i,e,o,a){this.g=t,this.f=n,this.a=e,this.c=i,this.j=o||3e3,this.h=a||void 0}function I(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.o=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.o=new E(this.c,this.s),t=F(t=new m(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=F(t=new m(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=F(t=new m("serif",x(this.a))),this.j.a.style.cssText=t,t=F(t=new m("sans-serif",x(this.a))),this.o.a.style.cssText=t,W(this.g),W(this.h),W(this.j),W(this.o)}function B(){if(null===at){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);at=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return at}function L(t,n,i){for(var e in ot)if(ot.hasOwnProperty(e)&&n===t.f[ot[e]]&&i===t.f[ot[e]])return!0;return!1}function P(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=B()&&L(t,i,e)),n?it()-t.A>=t.w?B()&&L(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?$(t,t.v):$(t,t.B):D(t):$(t,t.v)}function D(t){setTimeout(i(function(){P(this)},t),50)}function $(t,n){setTimeout(i(function(){s(this.g.a),s(this.h.a),s(this.j.a),s(this.o.a),n(this.a)},t),0)}function q(t,n,i){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=i}function G(t){0==--t.f&&t.j&&(t.o?((t=t.a).g&&r(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),A(t,"active")):S(t.a))}function H(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function R(t,n,e,o,a){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=a||null,c=o||{};if(0===e.length&&s)S(n.a);else{n.f+=e.length,s&&(n.j=s);var f,h=[];for(f=0;f<e.length;f++){var l=e[f],u=c[l.c],p=n.a,d=l;p.g&&r(p.f,[p.a.c("wf",d.c,x(d).toString(),"loading")]),A(p,"fontloading",d),p=null,null===st&&(st=!!window.FontFace&&(!(d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(d[1],10))),p=st?new O(i(n.g,n),i(n.h,n),n.c,l,n.s,u):new I(i(n.g,n),i(n.h,n),n.c,l,n.s,t,u),h.push(p)}for(f=0;f<h.length;f++)h[f].start()}},0)}function z(t,n,i){var e=[],o=i.timeout;_(n);e=N(t.a,i,t.c);var a=new q(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){R(t,a,n,i,e)})}function K(t,n){this.c=t,this.a=n}function M(t,n,i){return f(t.c)+"//"+(t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""))+"/"+n+".js"+(i?"?v="+i:"")}function U(t,n){this.c=t,this.a=n}function J(t,n,i){this.c=t||n+rt,this.a=[],this.f=[],this.g=i||""}function Q(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function V(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function X(t){this.f=t,this.a=[],this.c={}}function Y(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var h;if((h=r[f]).match(/^[\w-]+$/))if(null==(u=lt.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":ht[h],null==(u=u[1])||""==u)u="4";else var l=ft[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=ct[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=ct[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new m(o,a[e]))}}function Z(t,n){this.c=t,this.a=n}function tt(t,n){this.c=t,this.a=n}function nt(t,n){this.c=t,this.f=n,this.a=[]}var it=Date.now||function(){return+new Date},et=!!window.FontFace;w.prototype.c=function(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},O.prototype.start=function(){function t(){it()-e>=i.j?i.f(i.a):n.fonts.load(y(i.a),i.h).then(function(n){1<=n.length?i.g(i.a):setTimeout(t,25)},function(){i.f(i.a)})}var n=this.c.m.document,i=this,e=it();t()};var ot={D:"serif",C:"sans-serif"},at=null;I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=it(),P(this)};var st=null;q.prototype.g=function(t){var n=this.a;n.g&&r(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),A(n,"fontactive",t),this.o=!0,G(this)},q.prototype.h=function(t){var n=this.a;if(n.g){var i=c(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),r(n.f,e,o)}A(n,"fontinactive",t),G(this)},H.prototype.load=function(t){this.c=new e(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,z(this,new T(this.c,t),t)},K.prototype.load=function(t){function n(){if(o["__mti_fntLst"+i]){var e,a=o["__mti_fntLst"+i](),s=[];if(a)for(var r=0;r<a.length;r++){var c=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(e=a[r].fontStyle+a[r].fontWeight,s.push(new m(c,e))):s.push(new m(c))}t(s)}else setTimeout(function(){n()},50)}var i=this.a.projectId,e=this.a.version;if(i){var o=this.c.m;u(this.c,M(this,i,e),function(i){i?t([]):n()}).id="__MonotypeAPIScript__"+i}else t([])},U.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new p;for(n=0,i=e.length;n<i;n++)l(this.c,e[n],d(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new m(e[0],c[f]));else r.push(new m(e[0]));g(s,function(){t(r,a)})};var rt="//fonts.googleapis.com/css",ct={latin:"BESbswy",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},ft={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ht={i:"i",italic:"i",n:"n",normal:"n"},lt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,ut={Arimo:!0,Cousine:!0,Tinos:!0};Z.prototype.load=function(t){var n=new p,i=this.c,e=new J(this.a.api,f(i),this.a.text),o=this.a.families;Q(e,o);var a=new X(o);Y(a),l(i,V(e),d(n)),g(n,function(){t(a.a,a.c,ut)})},tt.prototype.load=function(t){var n=this.a.id,i=this.c.m;n?u(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new m(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(e)}},2e3):t([])},nt.prototype.load=function(t){var n=this.f.id,i=this.c.m,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new m(s.name,k("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},u(this.c,f(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+h(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var pt=new H(window);pt.a.c.custom=function(t,n){return new U(n,t)},pt.a.c.fontdeck=function(t,n){return new nt(n,t)},pt.a.c.monotype=function(t,n){return new K(n,t)},pt.a.c.typekit=function(t,n){return new tt(n,t)},pt.a.c.google=function(t,n){return new Z(n,t)};var dt={load:i(pt.load,pt)};"function"==typeof define&&define.amd?define(function(){return dt}):"undefined"!=typeof module&&module.exports?module.exports=dt:(window.WebFont=dt,window.WebFontConfig&&pt.load(window.WebFontConfig))}(),function(){var t,n,i,e,o,a;a=window.navigator.vendor,o=window.navigator.userAgent,t=null!=window.chrome&&"Google Inc."===a,i=o.indexOf("OPR")>-1,n=o.indexOf("Edge")>-1,e=o.indexOf("Windows NT 6.1")>-1&&!!o.match(/Trident.*rv\:11\.0/),WebFont.load({google:{families:["Open Sans:300,400,600"]},fontloading:function(){if(e)return document.body.classList.remove("font-features"),document.body.classList.add("font-features-ie")},active:function(){var e;if(t&&!i&&!n&&null!=(e=document.querySelectorAll(".container")[0]))return e.style.webkitFontSmoothing="subpixel-antialiased"}})}.call(this);