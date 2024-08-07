/* ======================================================================
LDOCE 5++
======================================================================= */

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
    a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
    null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
    





(function () {
    var _userAgent = navigator.userAgent.toLowerCase();
    if ((/windows\snt/.test(_userAgent)
        && /chrome|firefox/.test(_userAgent)) || jQuery('.gdarticle').css('-webkit-column-gap') == '1px') {
        console.log('Windows Chrome/firefox detected.');
        if (/windows\snt/.test(_userAgent) && /chrome|firefox/.test(_userAgent))
            $("a.speaker").click(function () {
                fSound = $(this).attr('href');
                fSound = fSound.replace('sound://', '');
                (new Audio(fSound)).play();
            });
        return jQuery;
    } else {
        return jQuery.noConflict(true)
    }
})()
(function ($) {
    const TAGSWITCHCN = '.LDOCE_switch_lang';
    const TAGSWITCHCNALL = '.LDOCE_switch_lang.switch_all';
    const TAGSWITCHCNCHILDREN = '.LDOCE_switch_lang.switch_children';
    const TAGSWITCHCNSIBLINGS = '.LDOCE_switch_lang.switch_siblings';
    const TAGSWITCHCNTAG = '.LDOCE_switch_lang.switch_children, .LDOCE_switch_lang.switch_siblings'

    const TAGSENSEFOLD = '.LDOCE5pp_sensefold';
    const TAGSENSEFOLDOTHER = '.LDOCE5pp_sensefold_other';
    const TAGCROSSSENSE = '.cross_sense';
    const TAGWORDFAMILY = '.LDOCE_word_family';

    const TAGCHINESSTEXT = '.cn_txt';

    var lm5pp_pagetype = 3;
    var lm5pp_clickDealy = 200;

    var prop = {};


    if (/\bTrident\b/i.test(navigator.userAgent)) {
        $('.lm5ppbody')
            .before('<div style="color:red; font-size: 40px">This Dictionary BE INCOMPATIBLE with Mdict</div>')
            .hide();
        return;
    }

    (function init() {
        if (typeof window.lm5pp_pageCount == 'undefined') {
            window.lm5pp_pageCount = 0
        }
        window.lm5pp_pageCount += 1;
        if (window.lm5pp_pageCount > 1) return;

        // remove duplicate records
        var _titleArray = [];
        $('.lm5ppbody').each(function (index) {
            var _tag = $(this).find('.pagetitle');
            var _pagetitle = $.trim(_tag.text() + _tag.attr('pagetype'));
            if (_titleArray.indexOf(_pagetitle) < 0) {
                _titleArray.push(_pagetitle)
                if (!hasElement('.expBody') && (index > 0)) {
                    $(this).addClass('notfirst');
                }
                if ((_tag.attr('pagetype') == '2') && $(this).find('.Sense.LDOCEVERSION_new').length != 0){
                    var _online = $(this).find('.Sense:not(.LDOCEVERSION_new)').length == 0;
                    if (_online){
                        $(this).find('.lm5ppMenu').addClass('online')
                            .find('#lm5ppMenu_logo')
                            .addClass('goldlogo')
                            .removeClass('switch_version');
                        $(this).find('.Sense.LDOCEVERSION_new').show().removeClass('LDOCEVERSION_new')
                            .find('.LDOCEVERSIONLOGO_new').hide();

                    } else {
                        $(this).find('.lm5ppMenu').addClass('goldlogo')
                            .find('#lm5ppMenu_logo')
                            .addClass('halfgold goldlogo');

                        if (!$(this).find('.switch_online').length)
                            $(this).find('#menu_quit').before('<span class="lm5pp_popupitem upperBorder"><div class="switch_title">LDOCE Online</div>\n' +
                                '<label class="switch"><input id="switch_online" type="checkbox"><span class="slider round"></span></label></span>');
                    }
                }
            } else {
                $(this).css('display', 'none');
            }
        })

        checkPlatform('.lm5ppbody');

        extendJQuery();

        readIni();

        loadImage();

        removePictureAndSound();

        // ********************************************
        topicSetup();

        multiwordsSetup();

        // ********************************************
        $('h1.pagetitle').each(function () {
            lm5pp_pagetype =
                Math.min(lm5pp_pagetype, $(this).attr('pagetype') === undefined ? 0 : parseInt($(this).attr('pagetype')));
        });

        // hook tags for visibility of cross senses(phrase verbs)
        senseSetup();
        $('.Sense > .foldsign_fold').toggleClass('foldsign_fold').siblings().filter(senseFilter).filter(versionFilter).lm5pp_toggle();

        $('.wordfams > ' + TAGSENSEFOLD)
            .off().on("click", function () {
            $(this).toggleClass('foldsign_fold');
            $(this).nextAll('.LDOCE_word_family').first().lm5pp_toggle();
        })


        // pagetype=3: online page
        if (lm5pp_pagetype != 3) {
            setTimeout(switchChineseSetup, 0);
            // lm5pp_switchChineseSetup();
        }
        setTimeout(imageSetup, 0);
        // ...box show/hide,
        setTimeout(boxSetup, 0);

        // version
        versionSetup();

        // ***************** menu ********************
        menuSetup();
        floatmenuSetup();
        if ($('#switch_online').length > 0) {
          $('.lm5pp_popup').addClass('switch_version');
          $('.lm5pp_popup, .lm5ppMenu, #lm5ppMenu_logo').addClass('goldlogo');
        }

        // ***************** proncodes ***************
        HWDSetup();

        // ***************** proncodes ***************
        pronCodeSetup();

        // ***************** Tips window ***************
        // lm5pp_tipsSetup();

        // ***************** East Egg ***************
        easteggSetup();

        // ********************************************
        onlinePronSetup();

        anchorSetup();

        // double click setup
        setTimeout(dblSetup, 0);

        setTimeout(bussDictLinkFix, 1400);
        
        // click event triggered by hover
        if (prop.ini_menuHover > 0 && !hasElement('.mobile.lm5ppbody')) {
            setTimeout(hoverDelaySetup, 1400);
        }

        // trigger float logo
        $(window).scroll();
    })()

    function checkPlatform(rootElement) {
        var _class = '';
        var _userAgent = navigator.userAgent.toLowerCase();
        if (/windows nt/i.test(_userAgent)) {
            _class += ' windowsnt desktop';
            if (/eudic/i.test(_userAgent)) {
                _class += ' eudicnt';
            }
        } else if (/Macintosh/i.test(_userAgent)) {
            _class += ' macos desktop';
            if (/eudic/i.test(_userAgent)) {
                _class += ' eudicnt'
            }
        } else if (/linux/i.test(_userAgent) && !(/android/i.test(_userAgent))) {
            _class += ' linux desktop';
        }

        if (_userAgent.indexOf('chrome') >= 0) {
            _class += ' chrome';
        } else if (/firefox/i.test(_userAgent)) {
            _class += ' firefox';
        }

        if (_userAgent.indexOf('goldendict') >= 0) {
            _class += ' goldendict' + ((window.HTMLTrackElement === undefined) ? ' qt4' : ' qt5');
            if (/qt5/.test(_class)) {
                $.fx.off = true;
            }
        } else {
            if (_userAgent.indexOf('iphone') >= 0) {
                _class += ' iphone ios mobile';
            } else if (_userAgent.indexOf('ipad') >= 0) {
                _class += ' ipad ios mobile';
            } else if (_userAgent.indexOf('android') >= 0) {
                _class += ' android mobile';
            }

            if (hasElement('.expBody, .eudicExpDiv')) {
                _class += ' eudic';
            } else if (hasElement('.bd_body')) {
                _class += ' bluedict';
            }
        }

        $('.Sense.Subentry').css('-webkit-animation', '');

        // Add border and shadow in the context of non-white background theme being selected.
        if (/goldendict/i.test(_class) && (!/rgba?\(255,\s*255,\s*255\b/i.test($('body').css('background-color')))) {
            _class += ' not-white'
        }
        ;

        // debug
        // _class = 'mobile bluedict android';
        $(rootElement).addClass(_class);
    }

    function multiwordsSetup() {
        if (!isMultiwords()) {
            return;
        }

        // remove duplicate images
        var _images = new Array();
        $('.ldoce-show-image[src]').each(function () {
            var _src = $(this).attr('src');
            _src = _src.substring(_src.search('media'));
            if (_images.indexOf(_src) >= 0) {
                $(this).hide();
            } else {
                _images.push(_src);
            }
        });

        // merge menu items
        var _target_popup = $('.lm5ppbody').last().find('.lm5pp_popup');
        _target_popup
            .prepend('<span></span>')
            .children('span:first')
            .append(
                $('.lm5pp_popupitem:has(.Head)'))
            .append($('.lm5pp_popupitem:has(#switch_online):first'))
            .append($('.lm5pp_popupitem:has(#switch_cn):first'))
            .append($('.lm5pp_popupitem:has(#switch_syllable):first'))
            .append($('.lm5pp_popupitem:has(#switch_corpus):first'))
            .append($('.lm5pp_popupitem:has(.lm5pp_icon):first'))
            .append($('.lm5ppMenu_floatlogo:first'));

        _target_popup.children('span').last().remove();
        // .find('#menu_quit:first').nextAll('.lm5pp_popupitem').remove();


        // $('.lm5ppbody:lt(-1)').find('.lm5pp_popup').remove();
        $('.lm5ppbody .lm5pp_popup').not(_target_popup).remove();

        var _entry = $('.entry_content').not('.topic'),
            _target_intro = _entry.find('.dictionary_intro').first();

        if (_entry.find('.dictionary_intro .lm5ppMenu').not('.online').length) {
            _target_intro.find('.lm5ppMenu').removeClass('online')
                .find('.goldlogo').removeClass('goldlogo');
        }

        if (_entry.find('.dictionary_intro .lm5ppMenu .lm5ppMenu_title').not('.en_show').length) {
            _target_intro.find('.lm5ppMenu .lm5ppMenu_title').removeClass('en_show');
        }

        _entry.find('.dictentry:not(.bussdict) .dictionary_intro').not(_target_intro).remove();
        // $('.entry_content').not('.topic').filter(function (index) {
        //     return index != 0;
        // }).find('.dictionary_intro').remove();

        // remove duplicate records of 'word family'
        var _titles = [];
        $('.wordfams').filter(function () {
            var _title = $(this).find('.w').first().attr('title');
            if (_titles.indexOf(_title) >= 0) {
                return true;
            } else {
                _titles.push(_title);
                return false;
            }
        }).remove();

    }

    function isMultiwords() {
        return ($('.lm5ppbody > .entry_content:not(.topic)').length > 1);
    }

    function menuSetup() {
        // initialize checked boxes
        $('#switch_syllable').prop("checked", $('.HWD .HYP').is(":visible"));
        $('#switch_corpus').prop("checked", $('.asset.corpus:visible').is(":visible"));

        if (!isChineseSwitch()) {
            $('#switch_cn').closest('.lm5pp_popupitem').hide();
        } else {
            $('#switch_cn').prop("checked", $('.ldoceEntry .Sense .cn_txt').is(":visible"));
        }

        if (!hasElement('.ldoceEntry .LDOCEVERSION_new')) {
            $('#switch_online').closest('.item').remove();
        } else {
            $('#switch_online').prop("checked", $('.ldoceEntry .LDOCEVERSION_new').is(":visible"));

            $('#lm5ppMenu_logo')
                .addClass("switch_version")
                .on('click.lm5ppMenu', toggleVersion);
        }

        // prevent default event handlers
        $('#switch_syllable, #switch_online, #switch_cn, #switch_corpus')
            .off('.itemClick').on('click.itemClick', false);

        $('.lm5pp_popupitem a[href]').off('.itemClick').on('click.itemClick', function (event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            scrollPosition($($(event.currentTarget).attr('href')));
        })

        $('#menu_quit').off('.itemClick').on('click.itemClick', function (event) {

            var _x = event.pageX - $('#icon_senseFold').offset().left
            if ((_x > 0)
                && (_x < $('#icon_senseFold').outerWidth() + 10)) {

                toggleAllCrossense();
                return;
            }
            _x = event.pageX - $('#icon_boxFold').offset().left
            if ((_x > 0)
                && (_x < $('#icon_boxFold').outerWidth() + 10)) {

                toggleAllBoxes();
                return;
            }
        })

        $('.lm5ppbody:last .lm5pp_popup').off('.itemClick')
            .on('click.itemClick', '.lm5pp_popupitem', function (event) {
                if ($(this).has('#switch_syllable').length) {
                    switchSyllable();
                } else if ($(this).has('#switch_cn').length) {
                    toggleChineseAll();
                } else if ($(this).has('#switch_online').length) {
                    toggleVersion();
                } else if ($(this).has('#switch_corpus').length) {
                    toggleCorpus();
                } else if ($(this).has('a[href]').length) {
                    $(this).find('a[href]').first().trigger('click');
                }
                menuHide();
                // lm5pp_menuHide();
            });
    }

    function menuHide() {
        if (!isMenuShow())
            return;

        $('.lm5ppbody:last .active.lm5pp_popup').fadeTo(250, 0.1, function () {
            $(this).removeClass('active').css({'opacity': '', 'visibility': ''});
            $(window).off('.monitorFloatMenu');
            $(window).scroll();
        });
    }

    function menuShow() {
        if (!isMenuShow())
            return;

        $('.lm5ppbody:last .lm5pp_popup:not(.active)')
            .css({'opacity': 0, 'visibility': 'visible'})
            .fadeTo(250, 1, function () {
                $(this).addClass('active').css({'opacity': '', 'visibility': ''});

                $(window).off('.monitorFloatMenu').on("click.monitorFloatMenu", function (event) {
                    if ($(event.target).closest('.lm5pp_popup').length == 0) {
                        menuHide();
                    }
                });

                $('.desktop .lm5pp_popup').one({
                    'mouseleave.monitorFloatMenu': function () {
                        menuHide();
                    }
                });
            });
    }

    var lm5pp_scrollTimer;
    const lm5pp_MENUSHOWHIDE = 1000;

    function floatmenuSetup() {
        if (lm5pp_pagetype != 0) {
            return;
        }

        $('.lm5ppbody').first().append('<span id="location_zero" style="position: fixed; top:0; left:0"></span>')
            .append('<span id="location_zero_bottom" style="position: fixed; bottom:0; right:0"></span>');

        if (!isMenuShow()) {

        }

        $('#logo_float').prepend('<span class="float_effect"></span>');

        $('.entry_content:last').css('position', 'relative');
        var _originalBottom = parseInt($('.entry_content:last .lm5pp_popup').css('bottom'));
        var _originalRight = parseInt($('.entry_content:last .lm5pp_popup').css('right'));

        $(window).scroll(function () {
            clearTimeout(lm5pp_scrollTimer);
            lm5pp_scrollTimer = setTimeout(function () {
                menuHide();

                if (!isMenuShow()) {
                    $('#logo_float.show').removeClass('show');
                    return;
                }

                var _entryHeight = getDictHeight();

                var _top = $('.entry_content:visible').first().offset().top;
                var _bottomOffset = 0;

                var _bottom = _top + _entryHeight + _bottomOffset;
                var _zero_top = $('#location_zero').offset().top;

                var _menu = $('.entry_content:visible:last .lm5pp_popup'),
                    _menu_height = _menu.height();

                var _locate = _menu.offset().top + _menu_height;
                var _zero_bottom = $('#location_zero_bottom').offset().top;

                var _flag_show = ((_bottom - _zero_top) >= (_menu_height + 60));
                if (_flag_show) {
                    _flag_show = ((_top < _zero_top)
                        || (_top >= _zero_top && (_zero_bottom - _top) >= (_menu_height + 60)))
                }

                if (_flag_show) {
                    var _offset = _zero_bottom - _bottom + 20
                    if (isBluedict()) {
                        _menu.css({
                            'right': '', position: 'fixed',
                            bottom: 'initial', top: _top + _menu_height + 20
                        });
                        $(window).off('scroll');

                    } else if (_offset < _originalBottom) {
                        _offset = _originalBottom;
                        if (_menu.css('position') != 'fixed')
                            _menu.css({"right": '', "position": "", "bottom": ""});
                    } else {
                        if (_menu.css('position') == 'fixed') {
                            var _right = $('#location_zero_bottom').offset().left
                                - ($('.entry_content:last').offset().left + $('.entry_content:last').outerWidth());
                            _menu.css({"right": _originalRight - _right, "bottom": '10px', "position": "absolute"})
                        }

                    }
                    // else {
                    //     _offset = _zero_bottom - _bottom - 10;
                    // }
                    $('#logo_float').not('.show').addClass('show');
                } else {
                    $('#logo_float.show').removeClass('show');
                }

                $('#logo_float').off('.logo_float').on('click.logo_float', function () {
                    ($(this).closest('.active.lm5pp_popup').length) ? menuHide() : menuShow();

                    return false;
                });
            }, 300);
        });
    }

    function pronCodeSetup() {
        // click proncodes to pronounce
        if (!isMDDExisting() && !isMobile() && !hasElement('.lm5ppbody.chrome.desktop')) {
            $('.ldoceEntry > .Head > a.PronCodes')
                .css('cursor', 'default').attr('href', '#')
                .on('click', function () {
                    return false;
                });
            return;
        }

        $('.ldoceEntry > .Head > a.PronCodes')
            .each(function () {
                var _selector = 'a.speaker[href!="{}"]'.replace('{}', $(this).attr('href'));
                if ($(this).siblings(_selector).length > 0) {
                    $(this).attr('hrefalt', $(this).siblings(_selector).attr('href'))
                }
            })
            .on('click.pronCode', function () {
                var _href = $(this).attr('href');
                if ($(this).is('[hrefalt]')) {
                    // var _selector = 'a.speaker[href!="{}"]'.replace('{}', $(this).attr('href'));

                    setTimeout(function (element, href) {
                        $(element).attr('href', href);
                    }, 200, this, $(this).attr('hrefalt'));

                    $(this).attr('hrefalt', _href);

                }
                if (isOnlinePron()) {
                    var _selector = 'a.speaker[href="{}"]'.replace('{}', _href);
                    $(this).siblings(_selector).trigger('click');
                    return false;
                }
            });
    }

    function versionSetup() {
        // $('.ldoceEntry').find('.LDOCEVERSION_new, .LDOCEVERSIONLOGO_5, .LDOCEVERSIONLOGO_new').hide();
    }

    function HWDSetup() {
        if (isMenuShow() && $('.ldoceEntry > .Head > .HWD').length > 1) {
            $('.ldoceEntry > .Head > .HWD').css('cursor', 'pointer')
                .on('click.HWD', function () {
                    var _$HWDs = $('.ldoceEntry > .Head > .HWD:visible');
                    if (_$HWDs.length > 1) {
                        var _index = _$HWDs.index(this);
                        if (_index >= 0) {
                            _index += 1;
                            if (_index >= _$HWDs.length)
                                _index = 0;

                            scrollPosition(_$HWDs.eq(_index));
                        }
                    }
                })
        } else {
            $('.ldoceEntry > .Head > .HWD:has(.HYP)').css('cursor', 'pointer')
                .on('click.HWD', function () {
                    switchSyllable();
                })
        }
    }

    function switchChineseSetup() {
        if (!isChineseSwitch())
            return;

        // $('.lm5ppMenu_title').addClass('en_show');

        if (hasElement('.ldoceEntry .cn_txt')) {
            $('.lm5ppMenu_title').addClass('intro_active')
                .add(TAGSWITCHCNALL)
                .off('.lm5pp_lang')
                .on('click.lm5pp_lang', showChineseAll);

            $('.ldoceEntry').addClass('langSwitch').off('.lm5pp_lang')
                .on('click.lm5pp_lang entry.lm5pp_lang', TAGSWITCHCNTAG
                    , function (event) {
                        if (hasElement('.lm5ppMenu_title.en_show'))
                            return;

                        event.stopImmediatePropagation();
                        event.preventDefault();
                        $.proxy(switchChinese, this)();
                    });
        }

        if (hasElement('.topicCloud .cn_txt')) {
            $('.lm5ppTopic_title').addClass('intro_active')
                .off('.lm5pp_lang')
                .on('click.lm5pp_lang', function () {
                    $('.entry_content.topic .cn_txt').lm5pp_toggle();
                });
        }
    }

    function onlinePronSetup() {

        if (!isOnlinePron()) return;

        $('a.speaker[href$=".spx"]')
            .closest('.EXAMPLE.speaker').removeClass('speaker').end()
            .remove();

        $('.ldoceEntry').on('click.onlinePron', 'a.speaker[href$="mp3"][href*="media"]:not(.loading)', function () {
            /*  by author of Bluedict */
            if (isBluedict() && false) {
                var _src = $(this).attr('href');
                _src = 'http://www.ldoceonline.com/' + _src.substring(_src.search('media'));
                var _audio = new Audio();
                _audio.src = _src;
                _audio.play();
                return;
            }
            /* END END END END */

            var _src = $(this).addClass('loading').attr('href');

            _src = 'http://www.ldoceonline.com/' + _src.substring(_src.search('media'));

            var _audio = new Audio();

            var _timeout = setTimeout(function (audioObj, loadingTag) {

                $(audioObj).trigger('abort', {timeout: null, loadingTag: loadingTag});
            }, 5000, _audio, this);

            /* networkState
            0 = NETWORK_EMPTY - audio/video has not yet been initialized
            1 = NETWORK_IDLE - audio/video is active and has selected a resource, but is not using the network
            2 = NETWORK_LOADING - browser is downloading data
            3 = NETWORK_NO_SOURCE - no audio/video source found

            readyState
            0 = HAVE_NOTHING - no information whether or not the audio/video is ready
            1 = HAVE_METADATA - metadata for the audio/video is ready
            2 = HAVE_CURRENT_DATA - data for the current playback position is available, but not enough data to play next frame/millisecond
            3 = HAVE_FUTURE_DATA - data for the current and at least the next frame is available
            4 = HAVE_ENOUGH_DATA - enough data available to start playing
            */
            var _event = 'play.play ended.play abort.play error.play';
            $(_audio)
                .on(_event, {timeout: _timeout, loadingTag: this}, function (event) {

                    //     + this.networkState + " ready:" + this.readyState);

                    clearTimeout(event.data.timeout);

                    if (event.type == 'play') return;

                    $(event.data.loadingTag).removeClass('loading');
                    $(this).off('.play').prop('autoplay', false);
                })
                // .prop('autoplay', true)
                .prop('src', _src);
            _audio.play();

            return false;
        });
    }

    function isChineseSwitch() {
        return ($('.pagetitle').css('background-repeat') == 'repeat-y'
            && hasElement('.ldoceEntry .cn_txt, .cloud .cn_txt'));
    }

    function hoverDelaySetup() {
        var _timeout_hover, _timeout_lock = false
            , _timeout_duration = prop['ini_menuHover_delay'];

        $('.lm5pp_popup, .lm5ppMenu').on('click.hover', function () {

            clearTimeout(_timeout_hover);
        });

        var _items = $('.lm5pp_popupitem').has('.HWD, .switch');
        _items.add('.lm5pp_icon')
            .add('.lm5pp_popupitem .Head').has(':not(.HWD)')
            .hover(function (event) {
                var _self = $(this);
                clearTimeout(_timeout_hover);
                _timeout_hover = setTimeout(function () {
                    var _event = $.Event('click');
                    _event.pageX = event.pageX;
                    if (_self.is('.lm5pp_icon')) {
                        $('#menu_quit').trigger(_event);
                    } else {
                        _self.trigger(_event);
                    }
                }, _timeout_duration)
            }, function () {
                clearTimeout(_timeout_hover);
            })

        $('#logo_float').on('mouseenter mouseleave click', function (event) {
                if (event.type == 'mouseenter') {
                    clearTimeout(_timeout_hover);
                    if (!$(this).closest('.active.lm5pp_popup').length) {
                        _timeout_hover = setTimeout(function () {
                            $('#logo_float').trigger('click');

                        }, _timeout_duration)
                    }
                } else if (event.type == 'mouseleave' || event.type == 'click') {
                    clearTimeout(_timeout_hover);
                }
            }
        );

        // title bar
        $('.lm5ppMenu').on('mouseenter mouseleave'
            , '.switch_version, .asset_intro, .intro_active'
            , _processHover);

        function _processHover(event) {
            if (event.type == 'mouseenter') {
                clearTimeout(_timeout_hover);

                var _self = $(event.target);
                if (_self.is('.switch_version') && _timeout_lock) {
                    return;
                }

                _timeout_hover = setTimeout(function () {
                    _self.trigger('click');

                    _timeout_lock = true;
                    setTimeout(function () {
                        _timeout_lock = false;
                    }, 5000);
                }, _timeout_duration)

                return false;
            } else if (event.type == 'mouseleave') {
                clearTimeout(_timeout_hover);
            } else if (event.type == 'click') {
                clearTimeout(_timeout_hover);
            }
        }
    }

    var lm5pp_lastdblSetupClick = null;

    function dblSetup() {
        // return;

        $('.lm5ppbody').off('.lm5ppbody').on('click.lm5ppbody', function (event) {

            if (lm5pp_lastdblSetupClick === event.target) return;
            lm5pp_lastdblSetupClick = event.target;
            setTimeout(function () {
                lm5pp_lastdblSetupClick = null;
            }, 500)

            if ($(event.target).closest('.ldoce-show-image').length) return false;

            $('.lm5ppBox, .Sense, .Subsense')
                .each(function () {
                    if (($(this).offset().top < event.pageY)
                        && (($(this).offset().top + $(this).outerHeight()) > event.pageY)) {
                        var _element = $(this);
                        if (_element.is('.lm5ppBox')) {
                            if ($(event.target).filter('.EXAMPLE, .Exponent, .Collocate')
                                .first()
                                .children(TAGSWITCHCNTAG)
                                .first().trigger('entry').length > 0) return false;

                            _element.children('.LDOCE5pp_sensefold')
                                .each(function () {
                                    if ($(this).offset().top < event.pageY
                                        && $(this).offset().top + $(this).outerHeight() >= event.pageY) {
                                        $(this).trigger('entry');
                                        return false;
                                    }
                                });
                        } else if (_element.is('.Sense, .Subsense')) {
                            if ($(event.target)
                                .filter('.EXAMPLE, .ErrorBox, .ColloExa, .GramExa, .Sense, .Subsense')
                                .first()
                                .children(TAGSWITCHCNTAG)
                                .first()
                                .trigger('entry').length > 0
                            ) return false;

                            if ($(event.target)
                                .filter('.Sense, .Subsense')
                                .first()
                                .children(TAGSENSEFOLD)
                                .first()
                                .trigger('entry').length > 0
                            ) return false;

                            _element.children(TAGSENSEFOLD).each(function () {


                                if ($(this).offset().left > event.pageX
                                    && $(this).offset().top < event.pageY
                                    && $(this).offset().top + $(this).outerHeight() >= event.pageY) {

                                    $(this).trigger('entry');
                                    return false;
                                }

                            })
                            // lm5pp_toggleAllCrossense(_element);
                        }
                        // return false;
                    }
                });
        });
    }

    function switchSyllable() {
        $('.HWD .HYP').lm5pp_toggle();
        $('#switch_syllable').prop('checked', function (index, val) {
            return !val;
        });
    }

    var lm5pp_lastClick;
    var imageShowHTML =
        '<style>' +
        '.ldoce5pp-image-button{' +
        'width: 20px; height: 20px; display:inline-block; ' +
        'cursor: pointer;' +
        'margin-left: 10px; padding: 8px; border-radius: 50%;' +
        'background-color:rgba(33, 150, 243, 0.5);' +
        '-webkit-transition: background-color .3s, -webkit-transform .5s;' +
        '}' +
        '.desktop .ldoce5pp-image-button:hover{' +
        'background-color:rgba(33, 150, 243, 1);' +
        '-webkit-transform:rotate(180deg);' +
        '}' +
        '.ldoce5pp-image-show.zoom .svgzoomout{display:none;}' +
        '.ldoce5pp-image-show:not(.zoom) .svgzoomin{display:none;}' +
        '.ldoce5pp-image-show{' +
        'display:none;' +
        'position:fixed;' +
        'cursor:zoom-in; ' +
        'cursor:-webkit-zoom-in; ' +
        'box-sizing: border-box;' +
        'color: rgba(0, 0, 0, 0.3);' +
        'overflow: auto;' +
        'z-index: 99999;' +
        'border: 4px solid currentColor;' +
        '}' +
        '.ldoce5pp-image-show.x8{cursor:zoom-out;cursor:-webkit-zoom-out}' +
        '.ldoce5pp-image-show::-webkit-scrollbar{' +
        '    width: 0px;' +
        '    height: 0px;' +
        '* background: transparent; */' +
        '}' +
        'ldoce5pp-image-show::-webkit-scrollbar-thumb{' +
        'background: rgba(33, 150, 243, 0.7);' +
        '/* background: transparent; */' +
        '}' +
        'ldoce5pp-image-show::-webkit-scrollbar-track{' +
        '    background: rgba(33, 150, 243, 0.5);' +
        '    display:none;' +
        '}' +
        '.ldoce5pp-image-toolbar{position:fixed; right:20px; height:40px;overflow: hidden;}' +
        '.mobile .ldoce5pp-image-toolbar{top: 20px;}' +
        '.ldoce5pp-image-show.bluedict .ldoce5pp-image-toolbar{display:none}' +
        '.ldoce5pp-image-container{' +
        'width:100%; height:100%;' +
        'background-color:currentColor;' +
        'background-size:contain;' +
        'background-repeat:no-repeat;' +
        'background-position:center;' +
        'background-clip:padding-box;' +
        '}' +
        '.ldoce5pp-image-show.zoom .ldoce5pp-image-container{' +
        'width:200%; height:200%;' +
        'background-color:currentColor;' +
        'background-size:contain;' +
        'background-repeat:no-repeat;' +
        'background-position:center;' +
        'background-clip:padding-box;' +
        '}' +
        '.ldoce5pp-image-show.zoom.x4 .ldoce5pp-image-container{' +
        'width:400%; height:400%;' +
        'background-color:currentColor;' +
        'background-size:contain;' +
        'background-repeat:no-repeat;' +
        'background-position:center;' +
        'background-clip:padding-box;' +
        '}' +
        '.ldoce5pp-image-show.zoom.x8 .ldoce5pp-image-container{' +
        'width:800%; height:800%;' +
        'background-color:currentColor;' +
        'background-size:contain;' +
        'background-repeat:no-repeat;' +
        'background-position:center;' +
        'background-clip:padding-box;' +
        '}' +
        '</style>' +
        '<div class="ldoce5pp-image-show">' +
        '<div class="ldoce5pp-image-toolbar">' +
        '<span class="ldoce5pp-image-button svgzoomin">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%"><path d="M791.993 935.156V867.72h137.31V728.53H1000v206.682zm137.31-802.818h-137.31V64.846H1000v206.683h-70.697zM70.813 271.471H0V64.788h208.235v67.494H70.813zm0 596.242h137.422v67.437H0V728.465h70.813z" fill="#fefffc"/><text style="line-height:1.25;-inkscape-font-specification:\'sans-serif, Normal\';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start" x="224.24" y="649.645" font-weight="400" font-size="403.253" font-family="sans-serif" letter-spacing="0" word-spacing="0" fill="#fffeff" stroke="#fffeff" stroke-width="10.081"><tspan x="224.24" y="649.645" style="-inkscape-font-specification:\'sans-serif, Normal\';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start">2X</tspan></text></svg>'
        // '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%"><path d="M791.993 935.156V867.72h137.31V728.53H1000v206.682zm137.31-802.818h-137.31V64.846H1000v206.683h-70.697zM70.813 271.471H0V64.788h208.235v67.494H70.813zm128.11-17.221h602.213v491.315H198.922zm58.772 435.47h484.782V310.042H257.695zM70.813 867.713h137.422v67.437H0V728.465h70.813z" fill="#fefffc"/></svg>'
        + '</span>' +
        '<span class="ldoce5pp-image-button svgzoomout">' +
        '<svg id="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%"><path d="M217.275 87.74H143.28v146.288H0v70.873h217.275zm782.1 142.54H853.2V87.001h-70.873v217.332h217.048zm-216.65 465.16V912.43h73.94V766.142H1000V695.44zM.795 769.777H146.97v143.222h70.873V695.781H.795zM304.674 652.45h390.595V348.401H304.674z" fill="#fffeff"/></svg>'
        + '</span>' +
        '<span class="ldoce5pp-image-button svgzoomclose">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%"><g stroke-miterlimit="10" fill="none" stroke="#fff" stroke-width="94.401" stroke-linecap="round"><path d="M104.537 104.507l790.926 790.986M895.463 104.507L104.537 895.493" stroke-width="82.53385029"/></g></svg>'
        + '</span>' +
        '</div>' +
        '<div class="ldoce5pp-image-container"></div>' +
        '</div>';

    function imageSetup() {
        $('.ldoce-show-image').on('click.dictimage', function (event) {
            event.stopPropagation();
            event.preventDefault();
            showImage(this);
        })
            .filter(function () {
                return hasElement('.desktop')
            })
            .hover(function () {
                $(this).siblings().css('pointer-events', 'none');
            }, function () {
                $(this).siblings().css('pointer-events', '');
            });
    }

    function showImage(target) {
        var _bluedict = isBluedict();
        var _img = $(target);
        var _viewport = getViewport();

        if (!_bluedict) {
            if (_img.length != 0) {
                _start = {
                    top: _img.offset().top - _viewport.top, left: _img.offset().left,
                    bottom: _viewport.bottom - (_img.offset().top + _img.height()),
                    right: _viewport.width - (_img.offset().left + _img.width()),
                    opacity: 0
                }
            } else {
                _start = {
                    top: _viewport.height / 2, left: _viewport.width / 2,
                    bottom: _viewport.height / 2, right: _viewport.width / 2,
                    opacity: 0
                }
            }
            _end = {top: 0, left: 0, bottom: 0, right: 0, opacity: 1};
        } else {
            _end = {top: 0, left: 0, width: _viewport.width, height: _viewport.height, opacity: 1};
            if (_img.length != 0) {
                _end.top = _img.offset().top - 40;
            }
            _start = _end;
        }

        var _$view = $('.ldoce5pp-image-show').removeClass('zoom');
        var _src = _img.attr('src') || _img.find('[src]').attr('src');
        var clicked = false, clickX, clickY;
        if (!_$view.length) {
            // $('.lm5ppbody').last().append('<div class="ldoce5pp-image-show"> </div>');
            $('body').append(imageShowHTML);
            _$view = $('.ldoce5pp-image-show');
        }

        _$view.find('.svgzoomclose').off('.imgShow')
            .on('click.imgShow', function () {
            // $('.ldoce5pp-image-show').trigger('click');
            imgZoom_quit();
            return false;
        }).end()
            .find('.svgzoomout,.svgzoomin').off('.imgShow')
            .on('click.imgShow', function () {
                imgZoom_zoom(hasElement('.ldoce5pp-image-show.zoom') ? 1 : 2);
                return false;
            });

        var dragFlag = false;
        _$view
            .off('click.imgShow').on('click.imgShow', function (e) {
            if (/^http.*?wallhaven\.cc/i.test(_src)
                && (e.pageX > _$view.width() - 50
                    && (e.pageY - _$view.offset().top) > _$view.height() - 100)) {
                copyToClipboard(_src);
            }

            if (isBluedict()) {
                imgZoom_quit();
            } else if (hasElement('.lm5ppbody.desktop')) {
                if (dragFlag) return;
                imgZoom_zoom();
            } else if (hasElement('.lm5ppbody.mobile.eudic')) {
                if (e.pageX < _$view.width() / 2) {
                    _$view.scrollLeft(_$view.scrollLeft() - 120);
                } else {
                    return true;
                }
            } else {
                return true;
            }
            e.stopImmediatePropagation();
            e.preventDefault();
        })
            .toggleClass('mobile', hasElement('.lm5ppbody.mobile'))
            .toggleClass('bluedict', hasElement('.lm5ppbody.bluedict'))
            .toggleClass('desktop', hasElement('.lm5ppbody.desktop'))
            .filter('.desktop').find('.ldoce5pp-image-container').off('.imgShow').on({
            'mousemove.imgShow': function (e) {
                if (!clicked) return;
                e.preventDefault();
                e.stopImmediatePropagation();
                dragFlag = true;
                _$view.scrollTop(_$view.scrollTop() + (clickY - e.pageY))
                    .scrollLeft(_$view.scrollLeft() + (clickX - e.pageX));
                clickY = e.pageY;
                clickX = e.pageX;
                return false;
            },
            'mousedown.imgShow': function (e) {
                // console.log(e);
                if (hasElement('.ldoce5pp-image-show.zoom')) {
                    dragFlag = false;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    clicked = true;
                    clickX = e.pageX;
                    clickY = e.pageY;
                    _$view.add(this).css('cursor', 'all-scroll');
                    return false;
                }
            },
            'mouseup.imgShow mouseleave.imgShow': function (e) {
                if (hasElement('.ldoce5pp-image-show.zoom')) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    clicked = false;
                    _$view.add(this).css('cursor', '');
                    return false;
                }
            }
        });
        var _animTime = 500;

        if (/^ldoce4/.test(_src)) {
            _src = $('#' + _src).attr('src');
        }

        $('#lm5pp_wallpaper_copy').hide();

        _$view.find('.ldoce5pp-image-container').css('background-image', 'url(' + _src + ')');

        var _src_anim = !_bluedict && _img.is('img');
        if (_src_anim) {
            _img.css('opacity', 0)
        }

        _$view.filter(':hidden')
            .css(_start)
            .show(0);

        if (!_bluedict) {
            _$view.animate(_end, _animTime);
        }

        return false;

        function imgZoom_zoom(magnification) {
            var _magification = 1;
            if (hasElement('.ldoce5pp-image-show.x8'))
                _magification = 1
            else if (hasElement('.ldoce5pp-image-show.x4'))
                _magification = 8
            else if (hasElement('.ldoce5pp-image-show.zoom'))
                _magification = 4
            else
                _magification = 2;

            if (_magification != 1) {
                $('.ldoce5pp-image-show .svgzoomin svg text').text('' + _magification + 'X');
            }

            $('.ldoce5pp-image-show').removeClass('x2 x4 x8').toggleClass('zoom', _magification != 1)
                .filter('.zoom').each(function () {
                var _container = $(this), _img = $('.ldoce5pp-image-container');
                _container.addClass('x' + _magification);
                setTimeout(function () {
                    _container.scrollTop((_img.height() - _container.height()) / 2);
                    _container.scrollLeft((_img.width() - _container.width()) / 2);
                    _container.focus();
                });
                // $('.ldoce5pp-image-show .ldoce5pp-image-container').focus();
            });
        }

        function imgZoom_quit() {
            event.stopPropagation();
            event.preventDefault();

            var _splitTime = 0.8;
            if (isBluedict()) {
                _$view.hide();
                return;
            }
            _$view.animate(_start, {duration: _animTime, queue: false})
                .delay(_animTime * _splitTime)
                .animate({opacity: 0}, _animTime * (1 - _splitTime))
                .promise().done(function () {
                _$view.hide();
            });
            if (_src_anim)
                _img.delay(_animTime * _splitTime)
                    .animate({'opacity': 1}, _animTime * (1 - _splitTime));
        }

        function copyToClipboard(str) {
            if (document.queryCommandSupported('copy')) {
                var el = $('<textarea id="lm5pp_wallpaper_copy" ' +
                    'style="left:-9999px;position:absolute max-width:80%;"></textarea>')
                    .appendTo('body').val(str);
                if (hasElement('.lm5ppbody.ios')) {
                    el[0].setSelectionRange(0, 9999);
                } else {
                    el[0].select();
                }
                var s = document.execCommand('copy');
                el.remove();
            } else {
                var el = $('#lm5pp_wallpaper_copy');
                if (!el.length) {
                    el = $('<textarea id="lm5pp_wallpaper_copy" ' +
                        ' readonly style="left:0; top:50%; right:0; max-height:50px;position:fixed"></textarea>')
                        .appendTo(_$view);
                }
                el.val(str).show();
                el[0].focus();
                el[0].setSelectionRange(0, 9999);
            }
        };


    }

    var lm5pp_clickTimer;

    function boxSetup() {
        $('.ldoceEntry').off('.boxControl')
            .on("click.boxControl entry.boxControl", '.lm5ppBox .lm5ppBoxHead'
                , function (event) {
                    event.stopImmediatePropagation();
                    toggleBox($(this));
                    return false;
                });
    }

    var lm5pp_switchBox;

    function toggleBox($obj, actionUnfold) {
        var $box = $obj.closest('.lm5ppBox');
        if ($box.length) {
            if ($box.length == 1) {
                var _box = $box.get(0);
                if (lm5pp_switchBox === _box) {
                    return;
                } else {
                    lm5pp_switchBox = _box;
                }
            }

            if (actionUnfold === undefined)
                actionUnfold = $box.hasClass('BoxHide');

            var _duration = ($box.length > 5) || (!isApplyEffect()) ? 0 : lm5pp_slideDuration;
            $box
                .filter(function () {
                    return actionUnfold == $(this).hasClass('BoxHide')
                })
                .toggleClass('BoxHide', !actionUnfold).children('.BoxPanel')
                .each(function () {
                    $(this).animate({height: 'toggle', opacity: 'toggle'}, _duration, function () {

                    });

                }).end()
                .find('.LDOCE5pp_sensefold').toggleClass('foldsign_fold');

            setTimeout(function () {
                lm5pp_switchBox = null;
            }, 300);

            $(window).scroll();
        }
    }

    var lm5pp_boxes;

    function toggleAllBoxes($obj) {
        if (lm5pp_boxes === undefined)
            lm5pp_boxes = $('.ldoceEntry .lm5ppBox');

        var _$target = lm5pp_boxes;
        var _actionUnfold;

        if (lm5pp_boxes.length == 0)
            return;

        if ($obj === undefined || !($obj instanceof jQuery)) {
            _actionUnfold = lm5pp_boxes.filter('.BoxHide').length / lm5pp_boxes.length >= 0.5;
        } else {
            _actionUnfold = !$obj.hasClass('BoxHide');

            if ($obj.get(0) === lm5pp_switchBox) {
                _$target = _$target.not($obj);
                _actionUnfold = !_actionUnfold;
            }
        }

        savePosition();
        toggleBox(_$target, _actionUnfold);
    }

    function toggleVersion() {
        $('#switch_online').prop('checked', function (index, val) {

            $('#lm5ppMenu_logo, .lm5pp_popup, .lm5ppMenu_title,.lm5ppMenu')
                .toggleClass('goldlogo', !val);

            $('.dictentry.LDOCEVERSION_new').lm5pp_toggle(!val);

            $('.ldoceEntry.LDOCEVERSION_new, .ldoceEntry .LDOCEVERSION_new').filter(controlFilter)
                .add('.ldoceEntry [class*=LDOCEVERSIONLOGO_]')
                .lm5pp_toggle(!val);

            $('.lm5pp_popup').toggleClass('switch_version');

            $(window).scroll();
            return !val;
        });
    }

    function toggleCorpus() {
        $('#switch_corpus').prop('checked', function (index, val) {
            $('.lm5ppMenu .corpusegg').toggle(val);
            $('.corpus').lm5pp_slideToggle(!val).promise().done(function () {
                isInView($('.corpus'), true);
                $(window).scroll();
            });
            return !val;
        });
    }

    function topicSetup() {
        if (hasElement('.entry_content.topic')) {
            $('a.topic_other').attr('href', '').off('.topic').on('click.topic', function () {
                var _self = $(this);
                $('.cloud').slideToggle().promise().done(function () {
                    _self.toggleClass('full');
                    scrollPosition($('.lm5ppbody .topicCloud'));
                });
                return false;
            });

        }
    }

    function senseFilter(index) {
        return !$(this).is('.merge_sense') && $(this).is('.EXAMPLE, .GramExa, .ColloExa, ' +
            '.Crossref, .F2NBox, .Thesref, .GramBox, .Subsense, .Hint, .UsageBox, .Sense, .ErrorBox');
    }


    var lm5pp_senseTimer;
    var lm5pp_senseTimerFlag = false;

    function senseSetup() {
        $('.ldoceEntry')
            .off('.senseFold')
            .on("click.senseFold entry.senseFold"
                , TAGSENSEFOLD + ':not(.fixed), ' + TAGSENSEFOLDOTHER, function (event) {
                    if ($(this).parent().hasClass('lm5ppBox')) {
                        return;
                    }

                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if ($(this).parent().hasClass('SpokenSect')) {
                        $(this).toggleClass('foldsign_fold');
                        $(this).siblings('.Sense').lm5pp_toggle();
                        return false;
                    }

                    toggleCrosssense(this);
                    return false;
                })
    }

    var lm5pp_switchSense;

    function toggleCrosssense(obj) {
        if ($(obj).is(TAGSENSEFOLDOTHER)) {
            obj = $(obj).siblings(TAGSENSEFOLD)
        }

        var _sense = $(obj).closest('.Sense').get(0);

        if (lm5pp_switchSense === _sense) {
            return;
        } else {
            lm5pp_switchSense = _sense;
        }

        $(obj).siblings().filter(senseFilter).filter(versionFilter).lm5pp_toggle();
        $(obj).filter(versionFilter).toggleClass('foldsign_fold');

        setTimeout(function () {
            lm5pp_switchSense = null;
        }, 200);

    }

    var lm5pp_allSenses;

    function toggleAllCrossense(obj) {
        if (lm5pp_allSenses === undefined)
            lm5pp_allSenses = $('.ldoceEntry .Sense > ' + TAGSENSEFOLD);

        var _actionUnfold;
        var _sense;

        var _$target = lm5pp_allSenses;

        if (obj === undefined || !(obj instanceof jQuery)) {
            _actionUnfold = (_$target.filter('.foldsign_fold').length / _$target.length >= 0.5);
        } else {
            _actionUnfold = obj.is('.foldsign_fold');
            _sense = obj.closest('.Sense').get(0);
            if (_sense === lm5pp_switchSense) {
                _$target = _$target.not($(obj));
                lm5pp_switchSense = null;
                _actionUnfold = !_actionUnfold;
            }
        }

        if (_actionUnfold) {
            _$target = _$target.filter('.foldsign_fold');
        } else {
            _$target = _$target.not('.foldsign_fold');
        }

        var _collection = _$target.siblings().filter(senseFilter)
            .filter(versionFilter);

        savePosition();
        var _promise = ((_collection.length > 30) || !isApplyEffect())
            ? _collection.toggle(_actionUnfold).promise()
            : _collection.lm5pp_toggle(_actionUnfold).promise();

        _promise.done(function () {
            _$target
                .filter(versionFilter).toggleClass('foldsign_fold', !_actionUnfold);
            restorePosition();
        })
    }

    var _middleElement;

    function savePosition() {
        if (isBluedict()) return;

        _middleElement = undefined;
        var _viewport = getViewport()
            , _scrollTop = $('body').scrollTop() + _viewport.height / 2;
        var _element;
        $('.ldoceEntry').children(':visible').each(function () {
            if ($(this).offset().top > _scrollTop) {
                return false;
            }
            _element = this;
        });
        $(_element).children('.Subsense, .Sense').each(function () {
            if ($(this).offset().top > _scrollTop) {
                return false;
            }
            _element = this;
        });
        _middleElement = _element;
    }

    function restorePosition() {
        if (!_middleElement || $(_middleElement).is(':hidden')) return;

        var _viewport = getViewport()
            , _centerLine = $('body').scrollTop() + _viewport.height / 2
            , _top = $(_middleElement).offset().top
            , _position = Math.max(_top - _viewport.height / 2, 0);


        if ((_position >= 0) && (Math.abs(_top - _centerLine) > _viewport.height / 4)) {
            $('html,body').animate({scrollTop: _position}, 500);
        }
    }

    function versionFilter(index) {
        return !($(this).is('.LDOCEVERSION_new') && !$('#switch_online').is(':checked'));
    }

    function controlFilter(index) {
        if ($(this).parent().is('.Sense, .Subsense')) {

            return $(this).siblings('.foldsign_fold').length == 0;
        }
        return true;
    }

    var lm5pp_lastSwitchElement;

    function switchChinese(event) {
        if (this === lm5pp_lastSwitchElement)
            return;

        if ($(this).is(TAGSWITCHCNSIBLINGS)) {
            $(this).siblings().children(TAGCHINESSTEXT).lm5pp_toggle();
            $(this).children(TAGCHINESSTEXT).lm5pp_toggle();
        } else {
            $(this).children(TAGCHINESSTEXT).lm5pp_toggle();
            $(this).find('.en_txt > .cn_txt').lm5pp_toggle();
        }

        if ($('.ldoceEntry .cn_txt:hidden').length == 0)
            showChineseAll();

        $(window).scroll();

        setTimeout(function () {
            lm5pp_lastSwitchElement = null;
        }, 200);
    }

    function showChineseAll() {
        toggleChineseAll(true);
    }

    function toggleChineseAll(option) {
        // option: true/false - show/hide
        $('#switch_cn').prop('checked', function (index, val) {

            if (option !== undefined && typeof option == 'boolean')
                val = !option;

            var _target = $(TAGCHINESSTEXT);

            savePosition();
            var _promise = (_target.length > 100)
                ? _target.toggle(!val).promise()
                : _target.lm5pp_toggle(!val).promise();

            _promise.done(function () {
                $('.lm5ppbody').toggleClass('langSwitch', val)

                $('.lm5ppMenu_title').toggleClass('en_show', !val)
                    .add('.lm5ppTopic_title')
                    .toggleClass('intro_active', val)
                    .not('.intro_active')
                    .off('.lm5pp_lang');

                if (val) {
                    switchChineseSetup();
                } else {
                    $(TAGSWITCHCNALL).add(TAGSWITCHCNTAG)
                        .off('.lm5pp_lang')
                        .css('cursor', 'auto');
                }
                restorePosition();
            });

            $(window).scroll();
            return !val;
        });


    }

    function anchorSetup() {
        if (isGoldendict()) {
            _match = document.location.href.match(/gdanchor=.*?_.*?_(.*?)__a/)
            if (_match) {
                $('#' + _match[1]).each(function () {
                    if ($(this).closest('.lm5ppbody .SpokenSect').children('.foldsign_fold')
                        .toggleClass('foldsign_fold')
                        .siblings('.Sense').show().length) {
                        scrollPosition($(this));
                    }
                });
            }
        }
    }

    var lm5pp_tipsTimer;

    function lm5pp_tipsSetup($element, func) {
        return;
    }

    function easteggSetup() {
        setTimeout(function () {
            if (hasElement('.corpus')) {
                $('.lm5ppMenu .corpusegg').on('click', toggleCorpus);
            } else {
                $('.lm5ppMenu .corpusegg').hide();
            }

            if (hasElement('.bussdict')) {
                $('.lm5ppMenu .bussdictegg').on('click', function () {
                    $(this).hide();
                    $('.bussdict').lm5pp_slideToggle().promise().done(function () {
                        isInView($('.bussdict'), true);
                        $(window).scroll();
                    });
                });
            } else {
                $('.lm5ppMenu .bussdictegg').hide();
            }

        }, 3000);
    }

    function isMenuShow() {
        var _height = getDictHeight();
        return ($('.lm5ppBox').length != 0) || isBluedict()
            || _height > $('.lm5pp_popup').outerHeight() * 1.8;
    }

    function getDictHeight() {
        var _height = 0;
        $('.entry_content:visible').each(function () {
            _height += $(this).outerHeight();
        });
        return _height;
    }

    function isMobile() {
        return $('.lm5ppbody').is('.iphone, .android, .ipad') || isBluedict();
    }

    function isMDDExisting() {
        var _flag = $('.pagetitle').css('border-top-style');
        return _flag ? _flag.toLowerCase() === 'double' : false;
    }

    function isOnlinePron() {
        if (isBluedict())
            return !hasElement('.MddExist');

        return (hasElement('.lm5ppbody.chrome.desktop') || (!isMDDExisting() && isMobile()));
    }

    function isGoldendict() {
        return hasElement('.goldendict');
    }

    function isBluedict() {
        return hasElement('.bd_body, .lm5ppbody.bluedict');
    }

    function isEudic() {
        // search for eudic(欧陆)
        var _ss = document.styleSheets;
        for (var i = 0, max = _ss.length; i < max; i++) {
            if (_ss[i].href && (_ss[i].href.toLowerCase().indexOf('main.css') >= 0)) {
                return true;
            }
        }
        return (document.getElementsByClassName('expBody').length != 0);
    }


    function toggleWordFamily() {
        $(TAGWORDFAMILY).lm5pp_toggle();
    }

    function removePictureAndSound() {
        if (!isMDDExisting()) {
            if (!isMobile()) {
                $('a.speaker, .fa-volume-up').remove();
                $('.EXAMPLE.speaker').removeClass('speaker');
            }
            $('.Crossref.ldoce4img.mdd').remove();
        }
    }

    function bussDictLinkFix() {
        $('.bussdictEntry.Entry a.crossRef').each(function (index) {
            $(this).attr('href', $(this).attr('href').replace('-', ' '));
        })
    }
    var imgBuffer = [];
    var imgTimer;

    function wallpaperSetup() {
        if (imgBuffer.length == 0) {
            var imgQueue = [];
            for (var i = 0; i < 20; i++) {
                var _name = 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-'
                    + Math.floor(Math.random() * 1000000);
                var _img = new Image();
                _img.src = _name + '.jpg';
                _img.onload = onloadimg;
                imgQueue.push(_img);
            }
        } else {
            layupImage();
        }

        function onloadimg() {
            imgBuffer.push(this);
            this.onload = null;
            clearTimeout(imgTimer);
            imgTimer = setTimeout(layupImage, 1000);
        }

        function layupImage() {
            $.each(imgQueue, function () {
                if (imgBuffer.indexOf(this) < 0)
                    this.src = '';
            });
            var _img = imgBuffer.shift();
            if (!hasElement('.wallpaperPanel')) {
                var _entry = $('.entry_content:has(.lm5ppMenu:visible)').css('position', 'relative');
                var _top = _entry.find('.lm5ppMenu').offset().top - _entry.offset().top
                    + _entry.find('.lm5ppMenu').height() + 10;
                $('<div class="wallpaperPanel"></div>').append(_img)
                    .css('top', _top)
                    .appendTo(_entry)
                    .on('click', function () {
                        showImage($(this));
                    });
            } else {
                _img.onload = null;
                $('.wallpaperPanel img').attr('src', _img.src);
            }
            if (prop.ini_wallpaper_interval > 0) {

                setTimeout(wallpaperSetup, Math.max(30, prop.ini_wallpaper_interval) * 1000);
            }

        }

        function onerrorimg() {

        }
    }

    function scrollPosition(target, offset) {
        if ($(target).length == 0) return;

        if (isBluedict()) {
            var _id = $(target).attr('id');
            if (!_id) {
                _id = 'random' + Math.round(Math.random() * 100000);
                $(target).attr('id', _id);
            }
            if (_id !== undefined) {
                window.location.href = 'entry://#' + _id;
            }
            return;
        }

        if (typeof offset == "undefined") {
            offset = 160;
        } else if (offset < 1) {
            var _view = getViewport();
            offset = _view.height * offset;
        }

        var _top = target.offset().top - offset,
            _time = 1000;

        if (!hasElement('.qt5')) {
            $('html,body').animate({scrollTop: _top}, _time, function () {
            });
        } else {
            window.scrollTo(0, _top);
        }

    }

    var lm5pp_slideDuration = 300;
    var lm5pp_effect = true;

    function isApplyEffect() {
        return lm5pp_effect && !isBluedict() && (typeof ($.fn.fadeIn) == "function");
    }

    function extendJQuery() {
        $.fn.extend({
            lm5pp_show: function () {
                var _duration = (arguments.length > 0) && (typeof arguments[0] === 'number')
                    ? arguments[0] : lm5pp_slideDuration;

                return this.each(function () {
                    if (!isApplyEffect() || _duration <= 0) {
                        $(this).show();
                    } else {
                        if ($(this).css('display') == 'block') {
                            $(this)
                                .fadeIn({duration: _duration, queue: false})
                                .slideDown(_duration);
                        } else {
                            $(this)
                                .fadeIn({duration: _duration});
                        }
                    }
                });
            },
            lm5pp_hide: function () {
                var _duration = (arguments.length > 0) && (typeof arguments[0] === 'number')
                    ? arguments[0] : lm5pp_slideDuration;

                return this.each(function () {
                    if (!isApplyEffect() || _duration <= 0) {
                        $(this).hide();
                    } else {
                        if ($(this).css('display') == 'block') {
                            $(this)
                                .fadeOut({duration: _duration, queue: false})
                                .slideUp(_duration);
                        } else {
                            $(this)
                                .fadeOut({duration: _duration});
                        }
                    }
                });
            },
            lm5pp_toggle: function (option) {
                return this.each(function (index, element) {
                    if ((typeof (option) != 'undefined') ? option : !$(this).is(":visible")) {
                        $(this).lm5pp_show();
                    } else {
                        $(this).lm5pp_hide();
                    }
                });
            },
            lm5pp_slideToggle: function (option) {
                return this.each(function (index, element) {
                    if (typeof ($.fn.slideToggle) == "undefined") {
                        $(this).toggle(option);
                    } else {
                        $(this).slideToggle(option);
                    }
                });
            },
        });


    }

    function hasElement(selector) {
        return !!document.querySelector(selector);
    }

    function getViewport() {
        var e = window,
            a = 'inner';
        if (!('innerWidth' in window)) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        var _top = $(window).scrollTop(),
            _height = e[a + 'Height'];
        return {
            top: _top,
            bottom: _top + _height,
            width: e[a + 'Width'],
            height: isBluedict() ? e[a + 'Width'] * 1.6 : _height
        }
    }

    function isInView(element, scrollTo) {
        var _visible = $(element).filter(':visible').first();
        if (!_visible.length ) {
            return false;
        }
        var _view = getViewport(), _offset = _visible.offset()
            , _result = _offset.top > _view.top && _offset.top < _view.bottom;
        if (!_result && scrollTo) {
            scrollPosition(_visible, 0.20);
        }
        return _result;
    }

    function readIni() {
        prop = {
            ini_menuHover: 1,
            ini_menuHover_delay: 1500,
            ini_colorExample: 0,
            ini_etymology_hide: 0,
            ini_wordfamily_hide: 0,
            ini_wallpaper: 0,
            ini_wallpaper_interval: 60
        }
        ;

        for (var _propName in prop) {
            if (typeof window[_propName] == typeof prop[_propName]) {
                prop[_propName] = window[_propName];
            }
        }

        var _add_class = '';
        if (prop.ini_colorExample == 1) {
            _add_class += 'Example_blue' + ' ';
        }

        if (prop.ini_etymology_hide == 1) {
            _add_class += 'Etym_disable' + ' ';
        }

        if (prop.ini_wallpaper == 1429748708) {
            setTimeout(wallpaperSetup, 1000);
        }

        if (prop.ini_wordfamily_hide == 1) {
            _add_class += 'Wordfamily_disable' + ' ';
        }

        $('.lm5ppbody').addClass(_add_class);
    }

    function loadImage() {
        var svg_logo = '<svg id="longman_logo" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 280 60"><g id="ldoce_logo"><path d="M2.005 50.607L2 43.072s36.359-.014 36.356-.01c-6.369 4.597-6.934 12.871-6.934 12.871-13.464.367-17.113-8.479-29.417-5.326z"/><path d="M27.177 39.491s2.087-1.084 4.258-1.084c2.307 0 3.479 1.096 3.479 1.096s2.084-1.871 2.084-5.44c0-3.84-2.57-7.409-6.96-7.409-1.181 0-2.341.26-2.892.469 2.429 4.591 1.677 8.555.031 12.368z"/><path d="M2.631 39.491s2.088-1.084 4.259-1.084c2.305 0 3.477 1.096 3.477 1.096s2.085-1.871 2.085-5.44c0-3.84-2.567-7.409-6.962-7.409-1.18 0-2.338.26-2.889.469 2.429 4.591 1.677 8.555.03 12.368z"/><path d="M13.064 39.909s2.808-1.459 5.731-1.459c3.111 0 4.684 1.475 4.684 1.475s2.811-2.519 2.811-7.327c0-5.167-3.461-9.979-9.379-9.979-1.588 0-3.15.354-3.889.636 3.274 6.181 2.26 11.522.042 16.654z"/><path d="M13.921 20.958s2.084-1.082 4.256-1.082c2.308 0 3.477 1.096 3.477 1.096s2.086-1.871 2.086-5.441c0-3.838-2.57-7.406-6.961-7.406-1.183 0-2.343.26-2.893.47 2.432 4.592 1.68 8.552.035 12.363z"/><path d="M3.8 24.585s1.707-.887 3.483-.887c1.892 0 2.851.897 2.851.897s1.707-1.531 1.707-4.456c0-3.143-2.104-6.067-5.702-6.067-.968 0-1.917.216-2.366.386 1.992 3.76 1.373 7.006.027 10.127z"/><path d="M25.782 24.585s1.707-.887 3.486-.887c1.892 0 2.85.897 2.85.897s1.709-1.531 1.709-4.456c0-3.143-2.105-6.067-5.705-6.067-.965 0-1.916.216-2.366.386 1.991 3.76 1.376 7.006.026 10.127z"/><path d="M14.536 6.472c.885-1.256 1.402-3.397-.217-4.805 3.537-1.053 5.648-1.325 9.825-.389.468.67.715 1.575.599 2.455 4.544 1.748 7.674.345 9.557-.829 0 2.06-2.219 6.024-6.468 6.024-2.459 0-4.526-1.172-4.526-1.172.375-.535.564-1.271.361-2.148-3.381-1.07-6.574-.421-9.131.864z"/></g><g id="ldoce_title"><g id="letter_l"><path d="M61.466 46.514V14.985h7.182v24.65h10.237v6.879H61.466z"/></g><g id="letter_ongman"><path d="M110.133 30.666c0 5.318-1.181 9.361-3.542 12.129-2.362 2.768-5.82 4.151-10.373 4.151-4.489 0-7.93-1.392-10.324-4.173-2.395-2.781-3.591-6.832-3.591-12.15 0-5.261 1.19-9.278 3.572-12.053 2.381-2.774 5.842-4.162 10.383-4.162 4.554 0 8.005 1.376 10.354 4.129 2.347 2.754 3.521 6.796 3.521 12.129zm-19.689 0c0 6.111 1.925 9.167 5.774 9.167 1.957 0 3.409-.742 4.354-2.228.946-1.483 1.419-3.797 1.419-6.939 0-3.156-.479-5.488-1.438-6.994-.959-1.506-2.391-2.259-4.296-2.259-3.875 0-5.813 3.084-5.813 9.253z"/><path d="M142.545 46.514h-10.139l-10.452-22.269h-.176c.248 3.502.372 6.176.372 8.021v14.248h-6.85V14.905h10.099l10.412 21.966h.118c-.183-3.186-.274-5.744-.274-7.675V14.905h6.89v31.609z"/><path d="M160.218 28.007h12.351v17.036c-3.354 1.27-7.04 1.903-11.059 1.903-4.41 0-7.819-1.413-10.227-4.237-2.407-2.825-3.61-6.854-3.61-12.086 0-5.103 1.317-9.073 3.953-11.913s6.328-4.259 11.078-4.259c1.8 0 3.5.188 5.098.562 1.599.375 2.991.851 4.179 1.427l-2.446 6.703c-2.062-1.125-4.325-1.687-6.791-1.687-2.258 0-4.003.811-5.236 2.432-1.232 1.622-1.849 3.938-1.849 6.951 0 2.955.558 5.208 1.673 6.757s2.724 2.324 4.824 2.324c1.148 0 2.205-.123 3.171-.368v-4.95h-5.108v-6.595z"/><path d="M190.867 46.514l-5.852-22.766h-.176c.273 3.877.41 6.889.41 9.038v13.729h-6.85v-31.61h10.295l5.969 22.441h.157l5.852-22.441h10.314v31.608h-7.104V32.655c0-.721.01-1.521.029-2.4.02-.879.107-3.034.265-6.464H204l-5.773 22.723h-7.36z"/><path d="M234.709 46.514L233.3 40.59h-9.297l-1.448 5.924h-8.494l9.336-31.738h10.314l9.453 31.738h-8.455zm-3.015-12.929l-1.232-5.189a206.708 206.708 0 0 1-1.048-4.475c-.41-1.831-.682-3.142-.812-3.935-.118.735-.35 1.946-.695 3.632-.346 1.686-1.112 5.009-2.3 9.967h6.087z"/><path d="M273.5 46.514h-10.138L252.91 24.245h-.176c.248 3.502.372 6.176.372 8.021v14.248h-6.851V14.905h10.1l10.412 21.966h.117c-.183-3.186-.273-5.744-.273-7.675V14.905h6.889v31.609z"/></g></g></svg>';
        var _icon_sense = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024"  id="svg2042"><defs id="defs2022"><style id="style2020"/></defs><path d="M233.216 220.416h711.168c15.693 0 28.416-12.723 28.416-28.416s-12.723-28.416-28.416-28.416H233.216c-15.693 0-28.416 12.723-28.416 28.416s12.723 28.416 28.416 28.416z" id="path2024"/><path d="M112.627 163.584H77.713c-5.662 0-10.253 12.723-10.253 28.416s4.59 28.416 10.253 28.416h34.914c5.662 0 10.253-12.723 10.253-28.416s-4.59-28.416-10.253-28.416z" id="path2026" stroke-width=".601"/><path d="M944.384 445.184H233.216c-15.693 0-28.416 12.723-28.416 28.416s12.723 28.416 28.416 28.416h711.168c15.693 0 28.416-12.723 28.416-28.416s-12.723-28.416-28.416-28.416z" id="path2028"/><path d="M112.627 445.184H77.713c-5.662 0-10.253 12.723-10.253 28.416s4.59 28.416 10.253 28.416h34.914c5.662 0 10.253-12.723 10.253-28.416s-4.59-28.416-10.253-28.416z" id="path2030" stroke-width=".601"/><path d="M534.784 726.784H233.216c-15.693 0-28.416 12.723-28.416 28.39 0 15.693 12.723 28.442 28.416 28.442h301.568c15.693 0 28.416-12.749 28.416-28.442 0-15.667-12.723-28.39-28.416-28.39z" id="path2036"/><path d="M112.627 726.784H77.713c-5.662 0-10.253 12.723-10.253 28.39 0 15.693 4.59 28.442 10.253 28.442h34.914c5.662 0 10.253-12.749 10.253-28.442 0-15.667-4.59-28.39-10.253-28.39z" id="path2038" stroke-width=".601"/><path d="M944.384 729.626H822.016V607.258c0-15.693-12.723-28.416-28.39-28.416-15.693 0-28.416 12.723-28.416 28.416v122.368H642.816c-15.693 0-28.416 12.723-28.416 28.416 0 15.667 12.723 28.39 28.416 28.39h122.342V908.8c0 15.693 12.724 28.416 28.416 28.416 15.668 0 28.39-12.723 28.39-28.416V786.458h122.369c15.693 0 28.416-12.724 28.416-28.39.05-15.72-12.672-28.442-28.365-28.442z" id="path2040"/></svg>';
        var _icon_close = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" id="svg1440"><defs id="defs1434"><style id="style1432"/></defs><path d="M176.662 817.173c-8.19 8.471-7.96 21.977.51 30.165 8.472 8.19 21.978 7.96 30.166-.51l618.667-640c8.189-8.472 7.96-21.978-.511-30.166-8.471-8.19-21.977-7.96-30.166.51l-618.666 640z" id="path1436"/><path d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166.511 8.471-8.188 8.7-21.694.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-.511-8.471 8.188-8.7 21.694-.511 30.165l618.666 640z" id="path1438"/></svg>';
        var _icon_box = '<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" id="svg2628"><defs id="defs2616"><style id="style2614"/></defs><g id="layer1"><path d="M189.35 148.68c-70.724 0-129.813 56.456-127.91 125.65v504.56c0 69.22 57.186 125.65 127.91 125.65h424.83c14.295 0 25.58-11.287 25.58-24.83 0-13.543-11.285-24.83-25.58-24.83H189.35c-31.361 0-77.172-57.6-76.75-75.24 4.531-189.263.081-428.197 0-505.31 0-41.381 34.62-74.65 76.75-75.24h655.54c42.117 1.192 76.75 33.859 76.75 75.24v288.01c0 13.543 11.285 24.83 25.58 24.83 14.295 0 25.58-11.287 25.58-24.83V274.33c0-69.22-57.186-125.65-127.91-125.65z" id="path2618"/><path d="M944.384 709.146H822.016V586.778c0-15.693-12.723-28.416-28.39-28.416-15.693 0-28.416 12.723-28.416 28.416v122.368H642.816c-15.693 0-28.416 12.723-28.416 28.416 0 15.667 12.723 28.39 28.416 28.39h122.342V888.32c0 15.693 12.724 28.416 28.416 28.416 15.668 0 28.39-12.723 28.39-28.416V765.978h122.369c15.693 0 28.416-12.724 28.416-28.39.051-15.72-12.672-28.442-28.365-28.442z" id="path2040-9"/></g></svg>';

        function _loadSVG(element, svgString) {
            if ($(element).find("svg").length != 0) {
                $(element).find("svg").remove();
            } else {
                $(element).text('');
                $(element).append(svgString);
            }
            return
        }

        if (hasElement('#lm5ppMenu_logo.halfgold')) {
            svg_logo += svg_logo;
        }
        _loadSVG('#lm5ppMenu_logo', svg_logo);

        _loadSVG('#logo_float', svg_logo);
        $('#logo_float svg').attr('preserveAspectRatio', 'xMinYMin slice');

        _loadSVG('#icon_senseFold', _icon_sense);
        _loadSVG('#icon_quit', _icon_close);
        _loadSVG('#icon_boxFold', _icon_box);

    }

    function log5p(info) {
        if ($('#loginfo5p').length == 0) {
            $('.entry_content:last').after('<h1 class="pagetitle" id="loginfo5p" style="font-size: 0.8em;"></h1>');
            $('#loginfo5p').show();
        }
        var _old = $('#loginfo5p').text();
        $('#loginfo5p').text(_old + '\n' + info);
    }
})