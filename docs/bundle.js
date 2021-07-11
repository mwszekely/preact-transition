(function () {
  'use strict';

  var n,l$1,u$1,t$1,o$1,r$1,e$1={},c$1=[],s$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a$1(n,l){for(var u in l)n[u]=l[u];return n}function h$1(n){var l=n.parentNode;l&&l.removeChild(n);}function v$1(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y$1(l,f,t,o,null)}function y$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null!=l$1.vnode&&l$1.vnode(f),f}function d$1(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k$1(n,l){if(null==l)return n.__?k$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k$1(n):null}function b$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b$1(n)}}function m$1(n){(!n.__d&&(n.__d=!0)&&t$1.push(n)&&!g$1.__r++||r$1!==l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)(g$1);}function g$1(){for(var n;g$1.__r=t$1.length;)n=t$1.sort(function(n,l){return n.__v.__b-l.__v.__b}),t$1=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a$1({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k$1(t):o,t.__h),z(u,t),t.__e!=o&&b$1(t)));});}function w$2(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c$1,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y$1(null,_,null,null,_):Array.isArray(_)?y$1(d$1,{children:_},null,null,null):_.__b>0?y$1(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j$2(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x$2(_,s,n):s=P$1(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k$1(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k$1(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M$1(g[h],g[++h],g[++h]);}function x$2(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x$2(t,l,u):P$1(u,t,t,n.__k,t.__e,l));return l}function A$2(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A$2(n,l);}):l.push(n)),l}function P$1(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I,o):n.removeEventListener(l,o?T$1:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l$1.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O$1),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a$1({},h.__s)),a$1(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l$1.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a$1(a$1({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d$1&&null==s.key?s.props.children:s,w$2(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(s=l$1.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w$2(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k$1(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h$1(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H$1(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H$1(l,"checked",_,y.checked,!1));}return l}function M$1(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M$1(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h$1(n.__e),n.__e=n.__d=void 0;}function O$1(n,l,u){return this.constructor(n,u)}function S$1(u,i,t){var o,r,f;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j$2(i,u=(!o&&t||i).__k=v$1(d$1,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}function B(l,u,i){var t,o,r,f=a$1({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y$1(l.type,f,t||l.key,o||l.ref,null)}n=c$1.slice,l$1={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u$1=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a$1({},this.state),"function"==typeof n&&(n=n(a$1({},u),this.props)),n&&a$1(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m$1(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m$1(this));},_.prototype.render=d$1,t$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g$1.__r=0;

  var t,u,r,o=0,i=[],c=l$1.__b,f=l$1.__r,e=l$1.diffed,a=l$1.__c,v=l$1.unmount;function m(t,r){l$1.__h&&l$1.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w$1,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i));}function h(r,o){var i=m(t++,4);!l$1.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i));}function s(n){return o=5,d(function(){return {current:n}},[])}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A$1(n,t){return o=8,d(function(){return n},t)}function x$1(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j$1),t.__H.__h=[];}catch(u){t.__H.__h=[],l$1.__e(u,t.__v);}}),i=[];}l$1.__b=function(n){u=null,c&&c(n);},l$1.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j$1),r.__h=[]);},l$1.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===l$1.requestAnimationFrame||((r=l$1.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u));})(x$1)),u=void 0;},l$1.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return !n.__||j$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],l$1.__e(r,t.__v);}}),a&&a(t,u);},l$1.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g);}catch(t){l$1.__e(t,u.__v);}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t;}function j$1(n){var t=u;n.__c=n.__(),u=t;}function k(n,t){return !n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w$1(n,t){return "function"==typeof t?t(n):t}

  function S(n,t){for(var e in t)n[e]=t[e];return n}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function E(n){this.props=n;}(E.prototype=new _).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t)};var w=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n);};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=S({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var A=l$1.__e;l$1.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e);};var O=l$1.unmount;function L(){this.__u=0,this.t=null,this.__b=null;}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function M(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n);},(L.prototype=new _).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate();}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),t.__c.__H=null),null!=(t=S({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P);}this.__b=null;}var u=t.__e&&v$1(d$1,null,n.fallback);return u&&(u.__h=null),[v$1(d$1,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};(M.prototype=new _).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u();};e?e(o):o();}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=A$2(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t);});};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};_.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(_.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t});}});});var H=l$1.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}l$1.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var G={configurable:!0,get:function(){return this.class}},J=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o);}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value);})),"select"==t&&null!=r.defaultValue&&(r.value=A$2(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value;})),n.props=r;}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=j,J&&J(n);};var K=l$1.__r;l$1.__r=function(n){K&&K(n);};

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   */

  function forwardElementRef(Component) {
    var ForwardedComponent = x(Component);
    return ForwardedComponent;
  }

  function toVal(mix) {
  	var k, y, str='';

  	if (typeof mix === 'string' || typeof mix === 'number') {
  		str += mix;
  	} else if (typeof mix === 'object') {
  		if (Array.isArray(mix)) {
  			for (k=0; k < mix.length; k++) {
  				if (mix[k]) {
  					if (y = toVal(mix[k])) {
  						str && (str += ' ');
  						str += y;
  					}
  				}
  			}
  		} else {
  			for (k in mix) {
  				if (mix[k]) {
  					str && (str += ' ');
  					str += k;
  				}
  			}
  		}
  	}

  	return str;
  }

  function clsx () {
  	var i=0, tmp, x, str='';
  	while (i < arguments.length) {
  		if (tmp = arguments[i++]) {
  			if (x = toVal(tmp)) {
  				str && (str += ' ');
  				str += x;
  			}
  		}
  	}
  	return str;
  }

  /**
   * Given two sets of props, merges their `class` and `className` properties.
   * Duplicate classes are removed (order doesn't matter anyway).
   *
   * @param lhs Classes of the first component
   * @param rhs Classes of the second component
   * @returns A string representing all combined classes from both arguments.
   */

  function useMergedClasses(lhs, rhs) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    return mergeClasses(lhs, rhs);
  }

  function mergeClasses(_ref, _ref2) {
    var lhsClass = _ref["class"],
        lhsClassName = _ref.className;
    var rhsClass = _ref2["class"],
        rhsClassName = _ref2.className;
    var lhsClasses = new Set(clsx(lhsClass, lhsClassName).split(" "));
    var rhsClasses = new Set(clsx(rhsClass, rhsClassName).split(" "));
    return [].concat(Array.from(lhsClasses), Array.from(rhsClasses)).join(" ");
  }

  var callbacksThatHaveMergedBefore = new Map();
  /**
   * Given two functions (usually event handlers), returns a function that calls both.
   * Return values are not handled.
   * The returned callback is stable *regardless* of its inputs.
   * Also not a *true* hook, since it has to be able to accomodate a variable number of event handlers, but could be in the future.
   * @param lhs
   * @param rhs
   * @returns
   */

  function useMergedFunctions(lhs, rhs) {
    var callbacksLhsHasMergedWithBefore = callbacksThatHaveMergedBefore.get(lhs);

    if (!callbacksLhsHasMergedWithBefore) {
      // We've actually never merged *anything* with lhs yet.
      // Start keeping records.
      callbacksLhsHasMergedWithBefore = new Map();
      callbacksThatHaveMergedBefore.set(lhs, callbacksLhsHasMergedWithBefore);
    } // See if lhs has ever merged with rhs, and return the result if so


    var mergedCallback = callbacksLhsHasMergedWithBefore.get(rhs);

    if (mergedCallback && callbacksLhsHasMergedWithBefore.has(mergedCallback)) {
      return mergedCallback;
    } // First time merging these two, so do so and save it for later.


    mergedCallback = mergedFunctions(lhs, rhs);
    callbacksLhsHasMergedWithBefore.set(rhs, mergedCallback);
    return mergedCallback;
  }

  function mergedFunctions(lhs, rhs) {
    return function () {
      var args = [].slice.call(arguments);
      lhs == null ? void 0 : lhs.apply(void 0, args);
      rhs == null ? void 0 : rhs.apply(void 0, args);
    };
  } // Uh, typeof X === "Function" actually isn't the same or even similar for some reason??


  function isFunction(obj) {
    return typeof obj === "function";
  } // Better useCallback() which always returns the same (wrapped) function reference and does not require deps array.

  function processRef(instance, ref) {
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref != null) {
      ref.current = instance;
    }
  }
  /**
   * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
   * @param lhs
   * @param rhs
   * @returns
   */


  function useMergedRefs(lhs, rhs) {
    var ret = A$1(function (current) {
      processRef(current, lhs);
      processRef(current, rhs);
    }, [lhs, rhs]);
    return ret;
  }

  /**
   * Merges two style objects, returning the result.
   *
   * @param style The user-given style prop for this component
   * @param obj The CSS properties you want added to the user-given style
   * @returns A CSS object containing the properties of both objects.
   */
  function useMergedStyles(lhs, rhs) {
    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs) return undefined;

    if (typeof lhs != typeof rhs) {
      // Easy cases, when one is null and the other isn't.
      if (lhs && !rhs) return lhs;
      if (!lhs && rhs) return rhs; // They're both non-null but different types.
      // Convert the string type to an object bag type and run it again.

      if (lhs && rhs) {
        if (typeof lhs == "string") return useMergedStyles(Object.fromEntries(lhs.split(";").map(function (statement) {
          return statement.split(":");
        })), rhs);
        if (typeof rhs == "string") return useMergedStyles(lhs, Object.fromEntries(rhs.split(";").map(function (statement) {
          return statement.split(":");
        })));
      } // Logic???


      return undefined;
    } // They're both strings, just concatenate them.


    if (typeof lhs == "string") {
      return lhs + ";" + rhs;
    } // They're both objects, just merge them.


    return _extends({}, lhs, rhs);
  }

  /**
   * Given two sets of props, merges them and returns the result.
   * @param lhs2
   * @param rhs2
   * @returns
   */

  function useMergedProps(lhs2, rhs2) {
    // First, put in all the properties that are easy to reason about
    // and all lhs props. We're going to merge in rhs just after.
    var lhsClass = lhs2["class"],
        lhsClassName = lhs2.className,
        lhsStyle = lhs2.style,
        lhsRef = lhs2.ref,
        lhs = _objectWithoutPropertiesLoose(lhs2, ["class", "className", "style", "ref"]);

    var rhsClass = rhs2["class"],
        rhsClassName = rhs2.className,
        rhsStyle = rhs2.style,
        rhsRef = rhs2.ref,
        rhs = _objectWithoutPropertiesLoose(rhs2, ["class", "className", "style", "ref"]);

    var ret = _extends({}, lhs, {}, {
      ref: useMergedRefs(lhsRef, rhsRef),
      style: useMergedStyles(lhsStyle, rhsStyle),
      className: useMergedClasses({
        "class": lhsClass,
        className: lhsClassName
      }, {
        "class": rhsClass,
        className: rhsClassName
      })
    }); // Now, do *everything* else
    // Merge every remaining existing entry in lhs with what we've already put in ret.
    //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];


    var rhsEntries = Object.entries(rhs);

    for (var _i = 0, _rhsEntries = rhsEntries; _i < _rhsEntries.length; _i++) {
      var _rhsEntries$_i = _rhsEntries[_i],
          rhsKey = _rhsEntries$_i[0],
          rhsValue = _rhsEntries$_i[1];
      var lhsValue = lhs[rhsKey];

      if (isFunction(lhsValue) || isFunction(rhsValue)) {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        var merged = useMergedFunctions(lhsValue, rhsValue);
        ret[rhsKey] = merged;
      } else {
        // Uh...we're here because one of them's null, right?
        if (lhsValue == null) ret[rhsKey] = rhsValue;else if (rhsValue == null) ret[rhsKey] = lhsValue;else {
          ret[rhsKey] = rhsValue;
        }
      }
    }

    return ret;
  }

  function useLogicalDirection(element) {
    var _useState = l(null),
        inlineDirection = _useState[0],
        setInlineDirection = _useState[1];

    var _useState2 = l(null),
        blockDirection = _useState2[0],
        setBlockDirection = _useState2[1];

    var _useState3 = l(null),
        lineAdvanceDirection = _useState3[0],
        setLineAdvanceDirection = _useState3[1];

    var inlineDirectionRef = s(inlineDirection);
    var blockDirectionRef = s(blockDirection);
    h(function () {
      inlineDirectionRef.current = inlineDirection;
    }, [inlineDirection]);
    h(function () {
      blockDirectionRef.current = blockDirection;
    }, [blockDirection]);
    h(function () {
      if (element) {
        // Lots of elements need to know the current writing mode in order to adjust the directions they animate appropriately
        // so it makes sense to do this without being explicitly asked.
        var computedStyles = window.getComputedStyle(element);
        var d = computedStyles.direction;

        switch (computedStyles.writingMode) {
          case "":
          case null:
          case undefined:
          case "horizontal-tb":
          case "lr":
          case "lr-tb":
            setInlineDirection(d);
            setBlockDirection("ttb");
            setLineAdvanceDirection("ttb");
            break;

          case "horizontal-bt":
            // Doesn't exist
            setInlineDirection(d);
            setBlockDirection("btt");
            setLineAdvanceDirection("ttb"); // ttb? btt?

            break;

          case "rl":
            setInlineDirection("rtl");
            setBlockDirection("ttb");
            setLineAdvanceDirection("ttb");
            break;

          case "vertical-lr":
            setBlockDirection("ltr");
            setInlineDirection("ttb");
            setLineAdvanceDirection("ltr");
            break;

          case "vertical-rl":
            setBlockDirection("rtl");
            setInlineDirection("ttb");
            setLineAdvanceDirection("rtl");
            break;

          case "sideways-lr":
            setBlockDirection("ltr");
            setInlineDirection(d == "rtl" ? "ttb" : "btt");
            setLineAdvanceDirection("ltr");
            break;

          case "sideways-rl":
            setBlockDirection("rtl");
            setInlineDirection(d == "rtl" ? "btt" : "ttb");
            setLineAdvanceDirection("rtl");
            break;
        }
      }
    });
    return {
      inlineDirection: inlineDirection,
      blockDirection: blockDirection,
      lineAdvanceDirection: lineAdvanceDirection,
      getInlineDirection: A$1(function () {
        return inlineDirectionRef.current;
      }, [inlineDirectionRef]),
      getBlockDirection: A$1(function () {
        return blockDirectionRef.current;
      }, [blockDirectionRef])
    };
  }

  /**
   * Allows accessing the element a ref references as soon as it does so.
   * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
   * adding a RefCallback and merging it with any existing ref that existed on the props.
   * @returns The element, and the sub-hook that makes it retrievable.
   */

  function useRefElement() {
    // Let us store the actual (reference to) the element we capture
    var _useState = l(null),
        element = _useState[0],
        setElement = _useState[1]; // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it


    var myRef = A$1(function (e) {
      if (e) setElement(function () {
        return e;
      });
    }, []); // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element

    return {
      useRefElementProps: A$1(function (_ref) {
        var ref = _ref.ref,
            rest = _objectWithoutPropertiesLoose(_ref, ["ref"]);

        return _extends({}, rest, {
          ref: useMergedRefs(ref, myRef)
        });
      }, [myRef]),
      element: element
    };
  }

  function getClassName(classBase, open, phase) {
    if (phase) return (classBase || "transition") + "-" + open + "-" + phase;else return (classBase || "transition") + "-" + open;
  }

  function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    e.getBoundingClientRect();
    return e;
  }
  /**
   * A hook that adds & removes class names in a way that facilitates proper transitions.
   *
   * The first argument contains the props related directly to the transition.
   *
   * The second argument contains any other props you might want merged into the final product (these are not read or manipulated or anything -- it's purely shorthand and can be omitted with `{}` and then your own `useMergedProps`).
   */


  function useCreateTransitionableProps(_ref, otherProps) {
    var _classBase, _removeEmpty, _getInlineDirection, _getBlockDirection;

    var measure = _ref.measure,
        animateOnMount = _ref.animateOnMount,
        classBase = _ref.classBase,
        onTransitionUpdate = _ref.onTransitionUpdate,
        exitVisibility = _ref.exitVisibility,
        duration = _ref.duration,
        open = _ref.open,
        ref = _ref.ref;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";

    var _useRefElement = useRefElement(),
        element = _useRefElement.element,
        useRefElementProps = _useRefElement.useRefElementProps;

    var _useState = l(animateOnMount ? "init" : null),
        phase = _useState[0],
        setPhase = _useState[1];

    var _useState2 = l(open ? "enter" : "exit"),
        direction = _useState2[0],
        setDirection = _useState2[1];

    var _useState3 = l(null),
        surfaceWidth = _useState3[0],
        setSurfaceWidth = _useState3[1];

    var _useState4 = l(null),
        surfaceHeight = _useState4[0],
        setSurfaceHeight = _useState4[1];

    var _useState5 = l(null),
        surfaceX = _useState5[0],
        setSurfaceX = _useState5[1];

    var _useState6 = l(null),
        surfaceY = _useState6[0],
        setSurfaceY = _useState6[1];

    var _useState7 = l(null),
        transitioningWidth = _useState7[0],
        setTransitioningWidth = _useState7[1];

    var _useState8 = l(null),
        transitioningHeight = _useState8[0],
        setTransitioningHeight = _useState8[1];

    var _useState9 = l(null),
        transitioningX = _useState9[0],
        setTransitioningX = _useState9[1];

    var _useState10 = l(null),
        transitioningY = _useState10[0],
        setTransitioningY = _useState10[1];

    var _useLogicalDirection = useLogicalDirection(element),
        getBlockDirection = _useLogicalDirection.getBlockDirection,
        getInlineDirection = _useLogicalDirection.getInlineDirection;

    var onTransitionUpdateRef = s(onTransitionUpdate);
    var phaseRef = s(phase);
    var directionRef = s(direction);
    var tooEarlyTimeoutRef = s(null);
    var tooEarlyValueRef = s(true);
    var tooLateTimeoutRef = s(null);
    var onTransitionEnd = A$1(function (e) {
      if (e.target === element && tooEarlyValueRef.current == false) {
        setPhase("finalize");
      }
    }, [element]);
    h(function () {
      onTransitionUpdateRef.current = onTransitionUpdate;
    }, [onTransitionUpdate]);
    h(function () {
      phaseRef.current = phase;
    }, [phase]);
    h(function () {
      directionRef.current = direction;
    }, [direction]);
    h(function () {
      if (phase) onTransitionUpdateRef.current == null ? void 0 : onTransitionUpdateRef.current(direction, phase);
    }, [direction, phase]); // Every time the phase changes to "transition", add our transition timeout timeouts
    // to catch any time onTransitionEnd fails to report for whatever reason to be safe

    h(function () {
      if (phase == "transition") {
        tooEarlyTimeoutRef.current = window.setTimeout(function () {
          tooEarlyValueRef.current = false;
          tooEarlyTimeoutRef.current = null;
        }, 50);
        tooLateTimeoutRef.current = window.setTimeout(function () {
          tooEarlyValueRef.current = true;
          tooLateTimeoutRef.current = null;
          setPhase("finalize");
        }, 1000);
      }

      return function () {
        if (tooEarlyTimeoutRef.current) clearTimeout(tooEarlyTimeoutRef.current);
        if (tooLateTimeoutRef.current) clearTimeout(tooLateTimeoutRef.current);
      };
    }, [phase]); // Any time "open" changes, update our direction and phase.
    // In addition, measure the size of the element if requested.

    h(function () {
      var previousPhase = phaseRef.current;

      if (open) setDirection("enter");else setDirection("exit");
      setPhase(previousPhase === null ? "finalize" : "init");

      if (element && measure) {
        debugger;
        var currentSizeWithTransition = element.getBoundingClientRect();
        {
          var x = currentSizeWithTransition.x,
              y = currentSizeWithTransition.y,
              width = currentSizeWithTransition.width,
              height = currentSizeWithTransition.height;
          setTransitioningX(x + "px");
          setTransitioningY(y + "px");
          setTransitioningWidth(width + "px");
          setTransitioningHeight(height + "px");
        }

        if (previousPhase === "finalize") {
          var backup = element.className;
          element.classList.add(classBase + "-measure");
          element.classList.remove(classBase + "-enter", classBase + "-enter-init", classBase + "-enter-transition", classBase + "-enter-finalize", classBase + "-exit", classBase + "-exit-init", classBase + "-exit-transition", classBase + "-exit-finalize");
          forceReflow(element);
          var sizeWithoutTransition = element.getBoundingClientRect();
          var _x = sizeWithoutTransition.x,
              _y = sizeWithoutTransition.y,
              _width = sizeWithoutTransition.width,
              _height = sizeWithoutTransition.height;
          setSurfaceX(_x + "px");
          setSurfaceY(_y + "px");
          setSurfaceWidth(_width + "px");
          setSurfaceHeight(_height + "px");
          element.className = backup;
          forceReflow(element);
        }
      }
    }, [open, element, measure, classBase]); // Any time the phase changes to init, immediately before the screen is painted,
    // change the phase to "transition" and re-render ().

    h(function () {

      if (element) {
        var _classBase2;

        (_classBase2 = classBase) != null ? _classBase2 : classBase = "transition";

        if (phase === "init") {
          // Preact just finished rendering init
          // Now set our transition style.
          setPhase("transition");

          if (measure) {
            forceReflow(element);
          }
        }
      }
    }, [phase, measure, element]);
    var writingModeIsHorizontal = getInlineDirection() == "ltr" || getInlineDirection() == "rtl";
    var surfaceInlineInset = writingModeIsHorizontal ? surfaceX : surfaceY;
    var surfaceBlockInset = writingModeIsHorizontal ? surfaceY : surfaceX;
    var surfaceInlineSize = writingModeIsHorizontal ? surfaceWidth : surfaceHeight;
    var surfaceBlockSize = writingModeIsHorizontal ? surfaceHeight : surfaceWidth;
    var transitioningInlineInset = writingModeIsHorizontal ? transitioningX : transitioningY;
    var transitioningBlockInset = writingModeIsHorizontal ? transitioningY : transitioningX;
    var transitioningInlineSize = writingModeIsHorizontal ? transitioningWidth : transitioningHeight;
    var transitioningBlockSize = writingModeIsHorizontal ? transitioningHeight : transitioningWidth;
    var almostDone = useRefElementProps(_extends({
      ref: ref,
      style: removeEmpty((_removeEmpty = {}, _removeEmpty["--" + classBase + "-duration"] = duration, _removeEmpty["--" + classBase + "-surface-x"] = surfaceX, _removeEmpty["--" + classBase + "-surface-y"] = surfaceY, _removeEmpty["--" + classBase + "-surface-width"] = surfaceWidth, _removeEmpty["--" + classBase + "-surface-height"] = surfaceHeight, _removeEmpty["--" + classBase + "-surface-inline-inset"] = surfaceInlineInset, _removeEmpty["--" + classBase + "-surface-block-inset"] = surfaceBlockInset, _removeEmpty["--" + classBase + "-surface-inline-size"] = surfaceInlineSize, _removeEmpty["--" + classBase + "-surface-block-size"] = surfaceBlockSize, _removeEmpty["--" + classBase + "-transitioning-x"] = transitioningX, _removeEmpty["--" + classBase + "-transitioning-y"] = transitioningY, _removeEmpty["--" + classBase + "-transitioning-width"] = transitioningWidth, _removeEmpty["--" + classBase + "-transitioning-height"] = transitioningHeight, _removeEmpty["--" + classBase + "-transitioning-inline-inset"] = transitioningInlineInset, _removeEmpty["--" + classBase + "-transitioning-block-inset"] = transitioningBlockInset, _removeEmpty["--" + classBase + "-transitioning-inline-size"] = transitioningInlineSize, _removeEmpty["--" + classBase + "-transitioning-block-size"] = transitioningBlockSize, _removeEmpty)),
      onTransitionEnd: onTransitionEnd
    }, {
      "aria-hidden": open ? undefined : "true"
    }, {
      className: clsx(getClassName(classBase, direction), phase && getClassName(classBase, direction, phase), exitVisibility == "removed" && classBase + "-removed-on-exit", exitVisibility == "visible" && classBase + "-visible-on-exit", classBase + "-inline-direction-" + ((_getInlineDirection = getInlineDirection()) != null ? _getInlineDirection : "ltr"), classBase + "-block-direction-" + ((_getBlockDirection = getBlockDirection()) != null ? _getBlockDirection : "ttb"))
    }));
    return useMergedProps(almostDone, otherProps);
  }

  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(function (_ref2) {
      var v = _ref2[1];
      return v != null;
    }));
  }
  /**
   * A component that *wraps an HTMLElement or other ref-forwarding component* and allows it to use CSS to transition in/out.
   * Combines the props passed to it, the props its child has, and the props needed for the CSS transition, and passes them
   * all to the child element you provide.
   *
   * This is the most general component that others use as a base. By default, this component by itself doesn't actually add any CSS classes that animate anything (like opacity, for example).
   * It adds classes like `transition-enter-finalize`, but you need to provide the additional e.g. `fade` class that reacts to it.
   *
   * Use this if the other, more specialized Transition components don't fit your needs.
   *
   * @example `<Transitionable open={open} {...useCreateFadeProps(...)}><div>{children}</div></Transitionable>`
   * @example `<Transitionable open={open}><div {...useCreateFadeProps(...)}>{children}</div></Transitionable>`
   */


  var Transitionable = forwardElementRef(function Transition(_ref3, r) {
    var child = _ref3.children,
        duration = _ref3.duration,
        classBase = _ref3.classBase,
        measure = _ref3.measure,
        exitVisibility = _ref3.exitVisibility,
        open = _ref3.open,
        onTransitionUpdate = _ref3.onTransitionUpdate,
        animateOnMount = _ref3.animateOnMount,
        props = _objectWithoutPropertiesLoose(_ref3, ["children", "duration", "classBase", "measure", "exitVisibility", "open", "onTransitionUpdate", "animateOnMount"]);

    var transitionProps = useCreateTransitionableProps({
      classBase: classBase,
      duration: duration,
      measure: measure,
      open: open,
      animateOnMount: animateOnMount,
      onTransitionUpdate: onTransitionUpdate,
      ref: r,
      exitVisibility: exitVisibility
    }, props);
    var mergedWithChildren = useMergedProps(transitionProps, child.props);
    return B(child, mergedWithChildren);
  });

  /**
   * Creates a set of props that implement a Clip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */

  function useCreateClipProps(_ref, otherProps) {
    var _classBase, _ref2, _ref3, _ref4, _ref5, _style;

    var classBase = _ref.classBase,
        clipOrigin = _ref.clipOrigin,
        clipOriginInline = _ref.clipOriginInline,
        clipOriginBlock = _ref.clipOriginBlock,
        clipMin = _ref.clipMin,
        clipMinInline = _ref.clipMinInline,
        clipMinBlock = _ref.clipMinBlock;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    return useMergedProps({
      className: clsx(classBase + "-clip"),
      classBase: classBase,
      style: (_style = {}, _style["--" + classBase + "-clip-origin-inline"] = (_ref2 = clipOriginInline != null ? clipOriginInline : clipOrigin) != null ? _ref2 : 0.5, _style["--" + classBase + "-clip-origin-block"] = (_ref3 = clipOriginBlock != null ? clipOriginBlock : clipOrigin) != null ? _ref3 : 0, _style["--" + classBase + "-clip-min-inline"] = (_ref4 = clipMinInline != null ? clipMinInline : clipMin) != null ? _ref4 : 1, _style["--" + classBase + "-clip-min-block"] = (_ref5 = clipMinBlock != null ? clipMinBlock : clipMin) != null ? _ref5 : 0, _style)
    }, otherProps);
  }
  var Clip = forwardElementRef(function Clip(_ref6, ref) {
    var classBase = _ref6.classBase,
        clipOrigin = _ref6.clipOrigin,
        clipOriginInline = _ref6.clipOriginInline,
        clipOriginBlock = _ref6.clipOriginBlock,
        clipMin = _ref6.clipMin,
        clipMinInline = _ref6.clipMinInline,
        clipMinBlock = _ref6.clipMinBlock,
        open = _ref6.open,
        rest = _objectWithoutPropertiesLoose(_ref6, ["classBase", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "open"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateClipProps({
      classBase: classBase,
      clipOrigin: clipOrigin,
      clipOriginInline: clipOriginInline,
      clipOriginBlock: clipOriginBlock,
      clipMin: clipMin,
      clipMinInline: clipMinInline,
      clipMinBlock: clipMinBlock
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */

  function useCreateFadeProps(_ref, otherProps) {
    var _classBase, _style;

    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    return useMergedProps({
      className: classBase + "-fade",
      classBase: classBase,
      style: (_style = {}, _style["--" + classBase + "-fade-min"] = fadeMin != null ? fadeMin : 0, _style["--" + classBase + "-fade-max"] = fadeMax != null ? fadeMax : 1, _style)
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Fade effect.
   *
   * Note that while it is absolutely possible to wrap another transition with `<Fade>`,
   * there will be some duplicate code run as two `<Transitionable>` components end up operating on the same element.
   * It's generally recommended to either use the components that include a combined fade effect,
   * or just directly a `<Transitionable>` on your own.
   *
   * @see `Transitionable`
   */

  var Fade = forwardElementRef(function Fade(_ref2, ref) {
    var classBase = _ref2.classBase,
        fadeMin = _ref2.fadeMin,
        fadeMax = _ref2.fadeMax,
        open = _ref2.open,
        rest = _objectWithoutPropertiesLoose(_ref2, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  var ClipFade = forwardElementRef(function ClipFade(_ref, ref) {
    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(Clip, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */

  function useCreateCollapseProps(_ref, otherProps) {
    var _classBase, _style;

    var classBase = _ref.classBase,
        minBlockSize = _ref.minBlockSize;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    return useMergedProps({
      classBase: classBase,
      measure: true,
      className: classBase + "-collapse",
      style: (_style = {}, _style["--" + classBase + "-collapse-min-block"] = minBlockSize != null ? minBlockSize : 0, _style)
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Collapse effect.
   *
   * *Important*: This component is *not* efficient for the browser to animate!
   * Make sure you do testing on lower power devices, or prefer a lighter
   * alternative, like `<Clip>`.
   *
   * @see `Transitionable`
   */

  var Collapse = forwardElementRef(function Collapse(_ref2, ref) {
    var classBase = _ref2.classBase,
        open = _ref2.open,
        minBlockSize = _ref2.minBlockSize,
        rest = _objectWithoutPropertiesLoose(_ref2, ["classBase", "open", "minBlockSize"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateCollapseProps({
      classBase: classBase,
      minBlockSize: minBlockSize
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Collapse and Fade effects.
   *
   * @see `Transitionable` `Collapse` `Fade`
   */

  var CollapseFade = forwardElementRef(function CollapseFade(_ref, ref) {
    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(Collapse, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateSlideProps(_ref, otherProps) {
    var _classBase, _slideTargetInline, _slideTargetBlock, _slideTargetInline2, _slideTargetBlock2, _style;

    var classBase = _ref.classBase,
        slideTargetInline = _ref.slideTargetInline,
        slideTargetBlock = _ref.slideTargetBlock;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    var lastValidTargetInline = s((_slideTargetInline = slideTargetInline) != null ? _slideTargetInline : 1);
    var lastValidTargetBlock = s((_slideTargetBlock = slideTargetBlock) != null ? _slideTargetBlock : 0);
    y(function () {
      if (slideTargetInline) lastValidTargetInline.current = slideTargetInline;
    }, [slideTargetInline]);
    y(function () {
      if (slideTargetBlock) lastValidTargetBlock.current = slideTargetBlock;
    }, [slideTargetBlock]);
    if (slideTargetInline == 0) slideTargetInline = lastValidTargetInline.current;
    if (slideTargetBlock == 0) slideTargetBlock = lastValidTargetBlock.current;
    return useMergedProps({
      className: classBase + "-slide",
      classBase: classBase,
      style: (_style = {}, _style["--" + classBase + "-slide-target-inline"] = "" + ((_slideTargetInline2 = slideTargetInline) != null ? _slideTargetInline2 : 0), _style["--" + classBase + "-slide-target-block"] = "" + ((_slideTargetBlock2 = slideTargetBlock) != null ? _slideTargetBlock2 : 0), _style)
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Slide effect.
   *
   * Provide the direction the element will travel in with `slideInline` and `slideBlock`,
   * with `1` being `100%` of the element's width or height.
   *
   * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
   * which allows for convenient setups inside of a `SwapContainer`
   * (`slideInline={index - selectedIndex}` or similar.)
   *
   * @see `Transitionable`
   */

  var Slide = forwardElementRef(function Slide(_ref2, ref) {
    var classBase = _ref2.classBase,
        slideTargetInline = _ref2.slideTargetInline,
        slideTargetBlock = _ref2.slideTargetBlock,
        open = _ref2.open,
        rest = _objectWithoutPropertiesLoose(_ref2, ["classBase", "slideTargetInline", "slideTargetBlock", "open"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateSlideProps({
      classBase: classBase,
      slideTargetInline: slideTargetInline,
      slideTargetBlock: slideTargetBlock
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Fade effects.
   *
   * `slideInline={(index - selectedIndex) / 10}` would make the element look like it fades out before it travels to its target destination.
   *
   * @see `Transitionable` `Zoom`
   */

  var SlideFade = forwardElementRef(function SlideFade(_ref, ref) {
    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(Slide, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateZoomProps(_ref, otherProps) {
    var _classBase, _ref2, _ref3, _ref4, _ref5, _style;

    var classBase = _ref.classBase,
        zoomOrigin = _ref.zoomOrigin,
        zoomOriginInline = _ref.zoomOriginInline,
        zoomOriginBlock = _ref.zoomOriginBlock,
        zoomMin = _ref.zoomMin,
        zoomMinInline = _ref.zoomMinInline,
        zoomMinBlock = _ref.zoomMinBlock;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    return useMergedProps({
      className: classBase + "-zoom",
      classBase: classBase,
      style: (_style = {}, _style["--" + classBase + "-zoom-origin-inline"] = "" + ((_ref2 = zoomOriginInline != null ? zoomOriginInline : zoomOrigin) != null ? _ref2 : 0.5), _style["--" + classBase + "-zoom-origin-block"] = "" + ((_ref3 = zoomOriginBlock != null ? zoomOriginBlock : zoomOrigin) != null ? _ref3 : 0.5), _style["--" + classBase + "-zoom-min-inline"] = "" + ((_ref4 = zoomMinInline != null ? zoomMinInline : zoomMin) != null ? _ref4 : 0), _style["--" + classBase + "-zoom-min-block"] = "" + ((_ref5 = zoomMinBlock != null ? zoomMinBlock : zoomMin) != null ? _ref5 : 0), _style)
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */

  var Zoom = forwardElementRef(function Zoom(_ref6, ref) {
    var classBase = _ref6.classBase,
        zoomOrigin = _ref6.zoomOrigin,
        zoomOriginInline = _ref6.zoomOriginInline,
        zoomOriginBlock = _ref6.zoomOriginBlock,
        zoomMin = _ref6.zoomMin,
        zoomMinInline = _ref6.zoomMinInline,
        zoomMinBlock = _ref6.zoomMinBlock,
        open = _ref6.open,
        rest = _objectWithoutPropertiesLoose(_ref6, ["classBase", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "open"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateZoomProps({
      classBase: classBase,
      zoomOrigin: zoomOrigin,
      zoomOriginInline: zoomOriginInline,
      zoomOriginBlock: zoomOriginBlock,
      zoomMin: zoomMin,
      zoomMinInline: zoomMinInline,
      zoomMinBlock: zoomMinBlock
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Zoom and Fade effects.
   *
   * This is an ideal time to use the minimum size Zoom properties.
   *
   * @see `Transitionable` `Zoom`
   */

  var ZoomFade = forwardElementRef(function ZoomFade(_ref, ref) {
    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(Zoom, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Zoom effects.
   *
   * Probably best combined with `useCreateFadeProps` (or just using a `SlideZoomFade`?).
   *
   * @see `Transitionable` `SlideFadeZoom` `Zoom` `Fade`
   */

  var SlideZoom = forwardElementRef(function SlideZoom(_ref, ref) {
    var classBase = _ref.classBase,
        zoomMin = _ref.zoomMin,
        zoomMinInline = _ref.zoomMinInline,
        zoomMinBlock = _ref.zoomMinBlock,
        zoomOrigin = _ref.zoomOrigin,
        zoomOriginInline = _ref.zoomOriginInline,
        zoomOriginBlock = _ref.zoomOriginBlock,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "zoomMin", "zoomMinInline", "zoomMinBlock", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "open"]);

    return v$1(Slide, _extends({
      open: open
    }, useCreateZoomProps({
      classBase: classBase,
      zoomMin: zoomMin,
      zoomMinInline: zoomMinInline,
      zoomMinBlock: zoomMinBlock,
      zoomOrigin: zoomOrigin,
      zoomOriginInline: zoomOriginInline,
      zoomOriginBlock: zoomOriginBlock
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with Zoom, Slide, and Fade effects.
   *
   * Note that this is basically just shorthand for some prop creation and prop merging functions.
   *
   * @see `Transitionable` `Slide` `Zoom` `Fade`
   */

  var SlideZoomFade = forwardElementRef(function SlideZoomFade(_ref, ref) {
    var classBase = _ref.classBase,
        fadeMin = _ref.fadeMin,
        fadeMax = _ref.fadeMax,
        open = _ref.open,
        rest = _objectWithoutPropertiesLoose(_ref, ["classBase", "fadeMin", "fadeMax", "open"]);

    return v$1(SlideZoom, _extends({
      open: open
    }, useCreateFadeProps({
      classBase: classBase,
      fadeMin: fadeMin,
      fadeMax: fadeMax
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateFlipProps(_ref, otherProps) {
    var _classBase, _flipAngleInline, _flipAngleBlock, _flipAngleInline2, _flipAngleBlock2, _style;

    var classBase = _ref.classBase,
        flipAngleInline = _ref.flipAngleInline,
        flipAngleBlock = _ref.flipAngleBlock,
        perspective = _ref.perspective;
    (_classBase = classBase) != null ? _classBase : classBase = "transition";
    var lastValidTargetInline = s((_flipAngleInline = flipAngleInline) != null ? _flipAngleInline : 180);
    var lastValidTargetBlock = s((_flipAngleBlock = flipAngleBlock) != null ? _flipAngleBlock : 0);
    y(function () {
      if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
    }, [flipAngleInline]);
    y(function () {
      if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
    }, [flipAngleBlock]);
    if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
    if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
    return useMergedProps({
      className: classBase + "-flip",
      classBase: classBase,
      style: (_style = {}, _style["--" + classBase + "-flip-angle-inline"] = ((_flipAngleInline2 = flipAngleInline) != null ? _flipAngleInline2 : 0) + "deg", _style["--" + classBase + "-flip-angle-block"] = ((_flipAngleBlock2 = flipAngleBlock) != null ? _flipAngleBlock2 : 0) + "deg", _style["--" + classBase + "-perspective"] = (perspective != null ? perspective : 800) + "px", _style)
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Flip effect.
   *
   * Provide the direction the element will travel in with `flipInline` and `flipBlock`,
   * with `1` being `100%` of the element's width or height.
   *
   * A value of `0` is handled specially, effectively meaning "use the last non-zero value",
   * which allows for convenient setups inside of a `SwapContainer`
   * (`flipInline={index - selectedIndex}` or similar.)
   *
   * @see `Transitionable`
   */

  var Flip = forwardElementRef(function Flip(_ref2, ref) {
    var classBase = _ref2.classBase,
        flipAngleInline = _ref2.flipAngleInline,
        flipAngleBlock = _ref2.flipAngleBlock,
        perspective = _ref2.perspective,
        open = _ref2.open,
        rest = _objectWithoutPropertiesLoose(_ref2, ["classBase", "flipAngleInline", "flipAngleBlock", "perspective", "open"]);

    return v$1(Transitionable, _extends({
      open: open
    }, useCreateFlipProps({
      classBase: classBase,
      flipAngleInline: flipAngleInline,
      flipAngleBlock: flipAngleBlock,
      perspective: perspective
    }, _extends({}, rest, {
      ref: ref
    }))));
  });

  /**
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */

  function useCreateSwappableProps(_ref, otherProps) {
    var inline = _ref.inline,
        classBase = _ref.classBase;
    return useMergedProps({
      className: clsx((classBase != null ? classBase : "transition") + "-swap-container", inline && (classBase != null ? classBase : "transition") + "-swap-container-inline")
    }, otherProps);
  }
  /**
   * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
   *
   * You must manage each child `<Transitionable>` component's `open` prop -- this component *does not* manage any sort of state in that regard.
   *
   * Like `<Transitionable>`, *this wraps an HTMLElement (or other ref-forwarding component)*. This will be your container that holds each `<Transitionable>` (or component that uses it). Strictly speaking it could be anything, not a `<Transitionable>`, but if it doesnt't transition out then it's just going to be hanging around 100% of the time.
   *
   * Long way of saying, if you get a cryptic error with this component, make sure it has a single `<div>` child or something.
   * @param param0
   * @returns
   */

  var Swappable = forwardElementRef(function Swappable(_ref2, ref) {
    var _inline;

    var children = _ref2.children,
        classBase = _ref2.classBase,
        inline = _ref2.inline,
        p = _objectWithoutPropertiesLoose(_ref2, ["children", "classBase", "inline"]);

    (_inline = inline) != null ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    var transitionProps = useCreateSwappableProps({
      classBase: classBase,
      inline: inline
    }, _extends({}, p, {
      ref: ref
    }));
    var mergedWithChildren = useMergedProps(transitionProps, children.props);
    return B(children, mergedWithChildren);
  }); // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
  // Not perfect, but it's not supposed to be. `inline` is for perfect.

  var inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);

  function halfText(input, times) {
      if (times <= 0)
          return input;
      input = input.substr(input.length / 2);
      if (times == 1)
          return input;
      return halfText(input, times - 1);
  }
  function Demo() {
      const [writingMode, setWritingMode] = l("horizontal");
      const [open1, setOpen1] = l(true);
      const [open3, setOpen3] = l(0);
      const [reflow, setReflow] = l("hidden");
      const [duration, setDuration] = l(175);
      const [text, setText] = l("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      const onInput1 = A$1((e) => { setOpen1(o => !o); e.preventDefault(); }, []);
      const onInput3 = A$1((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = A$1((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = A$1((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = A$1((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = A$1((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = A$1((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = A$1((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = A$1((e) => { setOpen3(0); e.preventDefault(); }, []);
      const onInputB = A$1((e) => { setOpen3(1); e.preventDefault(); }, []);
      const onInputC = A$1((e) => { setOpen3(2); e.preventDefault(); }, []);
      return (v$1(d$1, null,
          v$1("div", { id: "controls" },
              v$1("h1", null, "Preact Transition"),
              v$1("label", null,
                  v$1("input", { onInput: onInput1, type: "checkbox", checked: open1 }),
                  " Card open"),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "Visible Swappable child: "),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputA, checked: open3 == 0 }),
                      "#0"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputB, checked: open3 == 1 }),
                      "#1"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputC, checked: open3 == 2 }),
                      "#2")),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "When transitioned out:"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput5b, checked: reflow == "visible" }),
                      "Do not hide (incl. focusables)"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput4, checked: reflow == "hidden" }),
                      "visibility: hidden"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput5, checked: reflow == "removed" }),
                      "display: none")),
              v$1("div", null,
                  v$1("label", null,
                      v$1("input", { onInput: onInput8, type: "number", value: duration }),
                      " Duration")),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "Demo's writing mode: "),
                  v$1("label", null,
                      v$1("input", { type: "radio", name: "writing-mode", onInput: onInput6, checked: writingMode == "horizontal" }),
                      "Horizontal"),
                  v$1("label", null,
                      v$1("input", { type: "radio", name: "writing-mode", onInput: onInput7, checked: writingMode == "vertical" }),
                      "Vertical")),
              v$1("textarea", { cols: 30, rows: 5, onInput: onInput3, value: text })),
          v$1("div", { id: "root-body", className: `writing-mode-${writingMode}`, style: { "--transition-duration": `${duration}ms` } },
              v$1("div", { className: "demo-section" },
                  v$1("h2", null, "Fade"),
                  v$1("div", { className: "demo" },
                      v$1("div", null),
                      v$1(Fade, { open: open1 },
                          v$1(Swappable, null,
                              v$1("div", { className: "card" },
                                  v$1(Fade, { open: open3 == 0, exitVisibility: reflow },
                                      v$1("div", { className: "card-contents" },
                                          halfText(text, 0),
                                          v$1("div", null,
                                              v$1("button", null, "Focusable element")))),
                                  v$1(Fade, { open: open3 == 1, exitVisibility: reflow },
                                      v$1("div", { className: "card-contents" },
                                          halfText(text, 1),
                                          v$1("div", null,
                                              v$1("button", null, "Focusable element")))),
                                  v$1(Fade, { open: open3 == 2, exitVisibility: reflow },
                                      v$1("div", { className: "card-contents" },
                                          halfText(text, 2),
                                          v$1("div", null,
                                              v$1("button", null, "Focusable element"))))))),
                      v$1("div", null))),
              v$1(ClipDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(ZoomDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(SlideDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(ZoomSlideDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(CollapseDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(FlipDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }))));
  }
  function ClipDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0);
      const [minX, setMinX] = l(1);
      const [minY, setMinY] = l(0);
      const [withFade, setWithFade] = l(true);
      const [ellipse, setEllipse] = l(false);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      A$1((e) => { setEllipse((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ClipFade : Clip;
      const CS = withFade ? "ClipFade" : "Clip";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, clipOriginInline: originX, clipOriginBlock: originY, clipMinInline: minX, clipMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Clip"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Origin to center the effect around on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, clipMinInline: minX, clipMinBlock: minY, clipOriginInline: originX, clipOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
  clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
  clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
  clipMinX={${minX}}` : ``}${minY != 0 ? ` 
  clipMinY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
        clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
        clipMinX={${minX}}` : ``}${minY != 0 ? ` 
        clipMinY={${minY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={${contentIndex.toString()} == 1} [...] />
      <${CS} open={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomSlideDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0.5);
      const [minX, setMinX] = l(0.75);
      const [minY, setMinY] = l(0.75);
      const [slideX, setSlideX] = l(0.25);
      const [slideY, setSlideY] = l(0);
      const [withFade, setWithFade] = l(true);
      const onSlideXInput = A$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = A$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = withFade ? SlideZoomFade : SlideZoom;
      const CS = withFade ? "SlideZoomFade" : "SlideZoom";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: slideX * Math.sign(i - contentIndex), slideTargetBlock: slideY * Math.sign(i - contentIndex), zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Zoom & Slide"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${slideX != 0 ? ` 
  slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
  slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={0 == ${contentIndex.toString()}}${originX != 0.5 ? ` 
        originX={${originX} * Math.sign(0 - ${contentIndex}}` : ``}${originY != 0.5 ? ` 
        originY={${originY} * Math.sign(0 - ${contentIndex}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${slideX != 0 ? ` 
        slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
        slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={1 == ${contentIndex.toString()}} [...] />
      <${CS} open={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0.5);
      const [minX, setMinX] = l(0.75);
      const [minY, setMinY] = l(0.75);
      const [withFade, setWithFade] = l(true);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ZoomFade : Zoom;
      const CS = withFade ? "ZoomFade" : "Zoom";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Zoom"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        originX={${originX}}` : ``}${originY != 0.5 ? ` 
        originY={${originY}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${exitVisibility ? ` 
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={${contentIndex.toString()} == 1} [...] />
      <${CS} open={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function SlideDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [slideX, setSlideX] = l(0.25);
      const [slideY, setSlideY] = l(0);
      const [withFade, setWithFade] = l(true);
      const onSlideXInput = A$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = A$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      //const [bare, setBare] = useState(false);
      // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
      const C = withFade ? SlideFade : Slide;
      const CS = withFade ? "SlideFade" : "Slide";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: (slideX * Math.sign(i - contentIndex)), slideTargetBlock: slideY * Math.sign(i - contentIndex) },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Slide"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}} 
  slideTargetInline={${slideX}}
  slideTargetBlock={${slideY}}
  exitVisibility={${JSON.stringify(exitVisibility)}}>
    <div className="card">
      <${CS} 
        open={0 == ${contentIndex}}
        exitVisibility={${JSON.stringify(exitVisibility)}}
        slideTargetInline={${slideX} * Math.sign(0 - ${contentIndex})}
        slideTargetBlock={${slideY} * Math.sign(0 - ${contentIndex}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={1 == ${contentIndex}} [...] />
      <${CS} open={2 == ${contentIndex}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function CollapseDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [minBlockSize, setMinBlockSize] = l("0px");
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = l(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = A$1((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return (v$1("div", { className: "demo-section" },
          v$1("h2", null, "Collapse"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Minimum size: ",
                      v$1("input", { type: "text", value: minBlockSize, onInput: onMinSize })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" })),
                  v$1("div", null, "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."),
                  v$1("div", null,
                      "In general, only use this component if you ",
                      v$1("em", null, "specifically"),
                      " need its reflow transitioning properties. If you want a \"disappear in place without zooming out\", consider a Clip effect")),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
                  v$1("div", null,
                      v$1(Swappable, null,
                          v$1("div", { className: "card" },
                              makeChild(0),
                              makeChild(1),
                              makeChild(2))))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} open={${cardOpen.toString()}}${minBlockSize && minBlockSize != "0px" ? ` minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  {/* These cards have padding, 
      and height doesn't include that, 
      but a wrapper's would */}
  <div>
    <Swappable>
      <div className="card">
        <${CS} 
          open={${contentIndex.toString()} == 0}${minBlockSize && minBlockSize != "0px" ? ` 
          minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` 
          exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
          <div className="card-contents">
             {text}
          </div>
        </${CS}>
      </div>
    </Swappable>
  </div>
</${CS}>
<${CS} open={1 == ${contentIndex.toString()}} [...] />
<${CS} open={2 == ${contentIndex.toString()}} [...] />`)))));
  }
  function FlipDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [flipX, setFlipX] = l(0);
      const [flipY, setFlipY] = l(180);
      //const [axis, setAxis] = useState<"block" | "inline">("block");
      //const [withFade, setWithFade] = useState(true);
      const onFlipXInput = A$1((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = A$1((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
      //const onWithFadeInput = useCallback((e: Event) => { setWithFade(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
      //const [bare, setBare] = useState(false);
      // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
      const C = /*withFade ? FlipFade :*/ Flip;
      const CS = /*withFade ? "FlipFade" :*/ "Flip";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, flipAngleInline: flipX * Math.sign(i - contentIndex), flipAngleBlock: flipY * Math.sign(i - contentIndex) },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Flip"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Rotate on inline axis ",
                      v$1("input", { type: "number", onInput: onFlipXInput, value: flipX })),
                  v$1("label", null,
                      "Rotate along block axis ",
                      v$1("input", { type: "number", onInput: onFlipYInput, value: flipY }))),
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, flipAngleInline: flipX, flipAngleBlock: flipY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}} 
  flipAngleInline={${JSON.stringify(flipX)}} 
  flipAngleBlock={${JSON.stringify(flipY)}} 
  exitVisibility={${JSON.stringify(exitVisibility)}}}>
    <div className="card">
      <${CS} 
        open={0 == ${contentIndex.toString()}}
        flipAngleInline={${JSON.stringify(flipX)} * Math.sign(0 - ${contentIndex.toString()})} 
        flipAngleBlock={${JSON.stringify(flipY)} * Math.sign(0 - ${contentIndex.toString()})} 
        exitVisibility={${JSON.stringify(exitVisibility)}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={1 == ${contentIndex.toString()}} [...] />
      <${CS} open={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  requestAnimationFrame(() => {
      S$1(v$1(Demo, null), document.getElementById("root"));
  });

}());
