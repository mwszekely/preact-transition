var _excluded = ["children", "inline", "childrenAnimateOnMount"],
  _excluded2 = ["children"],
  _excluded3 = ["duration", "delayMountUntilShown", "fadeMin", "fadeMax", "show", "animateOnMount", "exitVisibility", "onVisibilityChange"],
  _excluded4 = ["duration", "delayMountUntilShown", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "show", "animateOnMount", "exitVisibility", "onVisibilityChange"],
  _excluded5 = ["delayMountUntilShown", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "clipMin", "clipMinBlock", "clipMinInline", "clipOrigin", "clipOriginBlock", "clipOriginInline", "exitVisibility", "onVisibilityChange"],
  _excluded6 = ["show", "duration", "delayMountUntilShown", "minBlockSize", "animateOnMount", "exitVisibility", "onVisibilityChange"],
  _excluded7 = ["show", "duration", "animateOnMount", "delayMountUntilShown", "fadeMin", "fadeMax", "exitVisibility", "minBlockSize", "onVisibilityChange"],
  _excluded8 = ["duration", "delayMountUntilShown", "flipAngleInline", "flipAngleBlock", "flipPerspective", "show", "animateOnMount", "exitVisibility", "onVisibilityChange"],
  _excluded9 = ["duration", "slideTargetInline", "slideTargetBlock", "show", "animateOnMount", "exitVisibility", "delayMountUntilShown"],
  _excluded10 = ["duration", "fadeMin", "fadeMax", "show", "animateOnMount", "delayMountUntilShown", "slideTargetBlock", "slideTargetInline", "exitVisibility", "onVisibilityChange"],
  _excluded11 = ["duration", "delayMountUntilShown", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "show", "animateOnMount", "exitVisibility", "onVisibilityChange"],
  _excluded12 = ["duration", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "show", "animateOnMount", "delayMountUntilShown", "slideTargetBlock", "slideTargetInline", "exitVisibility", "onVisibilityChange"],
  _excluded13 = ["duration", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "show", "animateOnMount", "delayMountUntilShown", "slideTargetBlock", "slideTargetInline", "fadeMax", "fadeMin", "exitVisibility", "onVisibilityChange"],
  _excluded14 = ["duration", "fadeMin", "fadeMax", "show", "animateOnMount", "delayMountUntilShown", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility", "onVisibilityChange"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  'use strict';

  var n,
    l$1,
    u$1,
    t$1,
    o$1,
    r$2,
    f$1 = {},
    e$1 = [],
    c$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function a$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function h$1(l, u, i) {
    var t,
      o,
      r,
      f = {};
    for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return v$1(l, f, t, o, null);
  }
  function v$1(n, i, t, o, r) {
    var f = {
      type: n,
      props: i,
      key: t,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == r ? ++u$1 : r
    };
    return null == r && null != l$1.vnode && l$1.vnode(f), f;
  }
  function p$1(n) {
    return n.children;
  }
  function d$1(n, l) {
    this.props = n, this.context = l;
  }
  function _$1(n, l) {
    if (null == l) return n.__ ? _$1(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? _$1(n) : null;
  }
  function k$2(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return k$2(n);
    }
  }
  function b$1(n) {
    (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || setTimeout)(g$2);
  }
  function g$2() {
    for (var n; g$2.__r = t$1.length;) n = t$1.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), t$1 = [], n.some(function (n) {
      var l, u, i, t, o, r;
      n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s$1({}, t)).__v = t.__v + 1, j$1(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _$1(t) : o, t.__h), z$2(u, t), t.__e != o && k$2(t)));
    });
  }
  function w$2(n, l, u, i, t, o, r, c, s, a) {
    var h,
      y,
      d,
      k,
      b,
      g,
      w,
      x = i && i.__k || e$1,
      C = x.length;
    for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v$1(null, k, null, null, k) : Array.isArray(k) ? v$1(p$1, {
      children: k
    }, null, null, null) : k.__b > 0 ? v$1(k.type, k.props, k.key, k.ref ? k.ref : null, k.__v) : k)) {
      if (k.__ = u, k.__b = u.__b + 1, null === (d = x[h]) || d && k.key == d.key && k.type === d.type) x[h] = void 0;else for (y = 0; y < C; y++) {
        if ((d = x[y]) && k.key == d.key && k.type === d.type) {
          x[y] = void 0;
          break;
        }
        d = null;
      }
      j$1(n, k, d = d || f$1, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m$1(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _$1(d));
    }
    for (u.__e = g, h = C; h--;) null != x[h] && N$1(x[h], x[h]);
    if (w) for (h = 0; h < w.length; h++) M(w[h], w[++h], w[++h]);
  }
  function m$1(n, l, u) {
    for (var i, t = n.__k, o = 0; t && o < t.length; o++) (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m$1(i, l, u) : A(u, i, i, t, i.__e, l));
    return l;
  }
  function x$1(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      x$1(n, l);
    }) : l.push(n)), l;
  }
  function A(n, l, u, i, t, o) {
    var r, f, e;
    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
      n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
  }
  function C$1(n, l, u, i, t) {
    var o;
    for (o in u) "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);
    for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$1(n, o, l[o], u[o], i);
  }
  function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c$1.test(l) ? u : u + "px";
  }
  function H$1(n, l, u, i, t) {
    var o;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
        if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$2 : I$1, o) : n.removeEventListener(l, o ? T$2 : I$1, o);else if ("dangerouslySetInnerHTML" !== l) {
      if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function I$1(n) {
    this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }
  function T$2(n) {
    this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }
  function j$1(n, u, i, t, o, r, f, e, c) {
    var a,
      h,
      v,
      y,
      _,
      k,
      b,
      g,
      m,
      x,
      A,
      C,
      $,
      H,
      I,
      T = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);
    try {
      n: if ("function" == typeof T) {
        if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d$1(g, x), h.constructor = T, h.render = O), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s$1({}, h.__s)), s$1(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == T.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
            for (h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
            h._sb = [], h.__h.length && f.push(h);
            break n;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, _, k);
          });
        }
        if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l$1.__r, $ = 0, "prototype" in T && T.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) h.__h.push(h._sb[H]);
          h._sb = [];
        } else do {
          h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        } while (h.__d && ++$ < 25);
        h.state = h.__s, null != h.getChildContext && (t = s$1(s$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p$1 && null == a.key ? a.props.children : a, w$2(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
      } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, o, r, f, c);
      (a = l$1.diffed) && a(u);
    } catch (n) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }
  function z$2(n, u) {
    l$1.__c && l$1.__c(u, n), n.some(function (u) {
      try {
        n = u.__h, u.__h = [], n.some(function (n) {
          n.call(u);
        });
      } catch (n) {
        l$1.__e(n, u.__v);
      }
    });
  }
  function L$1(l, u, i, t, o, r, e, c) {
    var s,
      h,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      k = 0;
    if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
      l = s, r[k] = null;
      break;
    }
    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (r = r && n.call(l.childNodes), h = (y = i.props || f$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) y[l.attributes[k].name] = l.attributes[k].value;
        (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }
      if (C$1(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$2(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$1(i, 0), c), null != r) for (k = r.length; k--;) null != r[k] && a$1(r[k]);
      c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H$1(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H$1(l, "checked", k, y.checked, !1));
    }
    return l;
  }
  function M(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }
  function N$1(n, u, i) {
    var t, o;
    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N$1(t[o], u, i || "function" != typeof n.type);
    i || null == n.__e || a$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function O(n, l, u) {
    return this.constructor(n, u);
  }
  function P(u, i, t) {
    var o, r, e;
    l$1.__ && l$1.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j$1(i, u = (!o && t || i).__k = h$1(p$1, null, [u]), r || f$1, f$1, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z$2(e, u);
  }
  function q$1(l, u, i) {
    var t,
      o,
      r,
      f = s$1({}, l.props);
    for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), v$1(l.type, f, t || l.key, o || l.ref, null);
  }
  function B$2(n, l) {
    var u = {
      __c: l = "__cC" + r$2++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var u, i;
        return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
          return i;
        }, this.shouldComponentUpdate = function (n) {
          this.props.value !== n.value && u.some(b$1);
        }, this.sub = function (n) {
          u.push(n);
          var l = n.componentWillUnmount;
          n.componentWillUnmount = function () {
            u.splice(u.indexOf(n), 1), l && l.call(n);
          };
        }), n.children;
      }
    };
    return u.Provider.__ = u.Consumer.contextType = u;
  }
  n = e$1.slice, l$1 = {
    __e: function (n, l, u, i) {
      for (var t, o, r; l = l.__;) if ((t = l.__c) && !t.__) try {
        if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, d$1.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n && (n = n(s$1({}, u), this.props)), n && s$1(u, n), null != n && this.__v && (l && this._sb.push(l), b$1(this));
  }, d$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), b$1(this));
  }, d$1.prototype.render = p$1, t$1 = [], g$2.__r = 0, r$2 = 0;
  var t,
    r$1,
    u,
    i,
    o = 0,
    f = [],
    c = [],
    e = l$1.__b,
    a = l$1.__r,
    v = l$1.diffed,
    l = l$1.__c,
    m = l$1.unmount;
  function d(t, u) {
    l$1.__h && l$1.__h(r$1, t, o || u), o = 0;
    var i = r$1.__H || (r$1.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({
      __V: c
    }), i.__[t];
  }
  function p(n) {
    return o = 1, y(B$1, n);
  }
  function y(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
      var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = r$1, !r$1.u)) {
      r$1.u = !0;
      var f = r$1.shouldComponentUpdate;
      r$1.shouldComponentUpdate = function (n, t, r) {
        if (!o.__c.__H) return !0;
        var u = o.__c.__H.__.filter(function (n) {
          return n.__c;
        });
        if (u.every(function (n) {
          return !n.__N;
        })) return !f || f.call(this, n, t, r);
        var i = !1;
        return u.forEach(function (n) {
          if (n.__N) {
            var t = n.__[0];
            n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
          }
        }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
      };
    }
    return o.__N || o.__;
  }
  function h(u, i) {
    var o = d(t++, 3);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__H.__h.push(o));
  }
  function s(u, i) {
    var o = d(t++, 4);
    !l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r$1.__h.push(o));
  }
  function _(n) {
    return o = 5, F$1(function () {
      return {
        current: n
      };
    }, []);
  }
  function F$1(n, r) {
    var u = d(t++, 7);
    return z$1(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
  }
  function T$1(n, t) {
    return o = 8, F$1(function () {
      return n;
    }, t);
  }
  function q(n) {
    var u = r$1.context[n.__c],
      i = d(t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r$1)), u.props.value) : n.__;
  }
  function b() {
    for (var t; t = f.shift();) if (t.__P && t.__H) try {
      t.__H.__h.forEach(k$1), t.__H.__h.forEach(w$1), t.__H.__h = [];
    } catch (r) {
      t.__H.__h = [], l$1.__e(r, t.__v);
    }
  }
  l$1.__b = function (n) {
    r$1 = null, e && e(n);
  }, l$1.__r = function (n) {
    a && a(n), t = 0;
    var i = (r$1 = n.__c).__H;
    i && (u === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k$1), i.__h.forEach(w$1), i.__h = [])), u = r$1;
  }, l$1.diffed = function (t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
      n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r$1 = null;
  }, l$1.__c = function (t, r) {
    r.some(function (t) {
      try {
        t.__h.forEach(k$1), t.__h = t.__h.filter(function (n) {
          return !n.__ || w$1(n);
        });
      } catch (u) {
        r.some(function (n) {
          n.__h && (n.__h = []);
        }), r = [], l$1.__e(u, t.__v);
      }
    }), l && l(t, r);
  }, l$1.unmount = function (t) {
    m && m(t);
    var r,
      u = t.__c;
    u && u.__H && (u.__H.__.forEach(function (n) {
      try {
        k$1(n);
      } catch (n) {
        r = n;
      }
    }), u.__H = void 0, r && l$1.__e(r, u.__v));
  };
  var g$1 = "function" == typeof requestAnimationFrame;
  function j(n) {
    var t,
      r = function () {
        clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
      },
      u = setTimeout(r, 100);
    g$1 && (t = requestAnimationFrame(r));
  }
  function k$1(n) {
    var t = r$1,
      u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
  }
  function w$1(n) {
    var t = r$1;
    n.__c = n.__(), r$1 = t;
  }
  function z$1(n, t) {
    return !n || n.length !== t.length || t.some(function (t, r) {
      return t !== n[r];
    });
  }
  function B$1(n, t) {
    return "function" == typeof t ? t(n) : t;
  }
  function r(e) {
    var t,
      f,
      n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }

  /**
   * Debug hook.
   *
   * Given a value or set of values, emits a console error if any of them change from one render to the next.
   *
   * Eventually, when useEvent lands, we hopefully won't need this.
   */
  function useEnsureStability(parentHookName) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    var helperToEnsureStability = _([]);
    var shownError = _([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
      var index = i + 1;
      // Make sure that the provided functions are perfectly stable across renders
      if (helperToEnsureStability.current[index] === undefined) helperToEnsureStability.current[index] = value;
      if (helperToEnsureStability.current[index] != value) {
        if (!shownError.current[index]) {
          /* eslint-disable no-debugger */
          debugger;
          console.error("The hook ".concat(parentHookName, " requires some or all of its arguments remain stable across each render; please check the ").concat(i, "-indexed argument (").concat(i >= 0 ? JSON.stringify(values[i]) : "the number of supposedly stable elements", ")."));
          shownError.current[index] = true;
        }
      }
    }
  }
  function debounceRendering(f) {
    var _l$1$debounceRenderin;
    ((_l$1$debounceRenderin = l$1.debounceRendering) !== null && _l$1$debounceRenderin !== void 0 ? _l$1$debounceRenderin : setTimeout)(f);
  }
  /**
   * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
   *
   * To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
   *
   * To summarize, it's like a `useState`-`useEffect` mashup:
   *
   * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
   * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
   * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
   * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
   *
   * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
   *
   * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param getInitialValue If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param customDebounceRendering By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
   * @returns
   */
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    var valueRef = _(Unset$2);
    var reasonRef = _(Unset$2);
    var warningRef = _(false);
    var dependencyToCompareAgainst = _(Unset$2);
    var cleanupCallbackRef = _(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    // Shared between "dependency changed" and "component unmounted".
    var onShouldCleanUp = T$1(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    var tryEnsureValue = T$1(() => {
      if (valueRef.current === Unset$2 && getInitialValue != undefined) {
        try {
          var _onChange;
          var initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
        } catch (ex) {
          // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
        }
      }
    }, [/* getInitialValue and onChange intentionally omitted */]);
    var getValue = T$1(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.
      if (valueRef.current === Unset$2) tryEnsureValue();
      return valueRef.current === Unset$2 ? undefined : valueRef.current;
    }, []);
    s(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    var setValue = T$1((arg, reason) => {
      // Regardless of anything else, figure out what our next value is about to be.
      var nextValue = arg instanceof Function ? arg(valueRef.current === Unset$2 ? undefined : valueRef.current) : arg;
      if (dependencyToCompareAgainst.current === Unset$2 && nextValue !== valueRef.current) {
        // This is the first request to change this value.
        // Evaluate the request immediately, then queue up the onChange function
        // Save our current value so that we can compare against it later
        // (if we flip back to this state, then we won't send the onChange function)
        dependencyToCompareAgainst.current = valueRef.current;
        // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
        valueRef.current = nextValue;
        reasonRef.current = reason;
        // Schedule the actual check and invocation of onChange later to let effects settle
        (customDebounceRendering !== null && customDebounceRendering !== void 0 ? customDebounceRendering : debounceRendering)(() => {
          var nextReason = reasonRef.current;
          var nextDep = valueRef.current;
          var prevDep = dependencyToCompareAgainst.current;
          if (dependencyToCompareAgainst.current != valueRef.current) {
            warningRef.current = true;
            try {
              var _onChange2;
              // Call any registered cleanup function
              onShouldCleanUp();
              cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(nextDep, prevDep === Unset$2 ? undefined : prevDep, nextReason)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
              valueRef.current = nextDep;
            } finally {
              // Allow the user to normally call getValue again
              warningRef.current = false;
            }
          }
          // We've finished with everything, so mark us as being on a clean slate again.
          dependencyToCompareAgainst.current = Unset$2;
        });
      }
      // Update the value immediately.
      // This will be checked against prevDep to see if we should actually call onChange
      valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
  }
  var Unset$2 = Symbol();
  function returnFalse() {
    return false;
  }
  function returnNull() {
    return null;
  }
  /**
   * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
   */
  function runImmediately(f) {
    f();
  }
  var Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
  function base64(value) {
    return Table[value];
  }
  function random6Bits() {
    return Math.floor(Math.random() * 0b1000000);
  }
  function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()];
  }
  /**
   * Returns a randomly-generated ID with an optional prefix.
   * Note that if the prefix is *explicitly* set to "", then
   * IDs that are not valid under HTML4 may be generated. Oh no.
   *
   *
   * (This is here, in this particular file, to avoid circular dependencies
   * without also making a utilities file.
   * Once we can remove this hook, we can put this function back with useRandomId)
   */
  function generateRandomId(prefix) {
    return "".concat(prefix !== null && prefix !== void 0 ? prefix : "id-").concat(random64Bits().map(n => base64(n)).join(""));
  }
  var previousInputs = new Map();
  var toRun = new Map();
  // TODO: Whether this goes in options.diffed or options._commit
  // is a post-suspense question.
  // Right now, using options._commit has the problem of running
  // *after* refs are applied, but we need to come before even that
  // so `ref={someStableFunction}` works.
  // 
  // Also it's private.
  //
  // ...
  // Well, useEvent or whatever is finally, finally 4 years later finally here
  // which is cool and means we won't need this at all soon.
  // So for now we'll stick with diff to prevent any weirdness with
  // commit being private and all.
  var commitName = "diffed";
  var originalCommit = l$1[commitName];
  var newCommit = function () {
    for (var [id, effectInfo] of toRun) {
      var oldInputs = previousInputs.get(id);
      if (argsChanged(oldInputs, effectInfo.inputs)) {
        var _effectInfo$cleanup;
        (_effectInfo$cleanup = effectInfo.cleanup) === null || _effectInfo$cleanup === void 0 ? void 0 : _effectInfo$cleanup.call(effectInfo);
        effectInfo.cleanup = effectInfo.effect();
        previousInputs.set(id, effectInfo.inputs);
      }
    }
    toRun.clear();
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(...args);
  };
  l$1[commitName] = newCommit;
  /**
   * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
   *
   * Every render, we send the arguments to be evaluated after diffing has completed,
   * which happens before.
   *
   * @param effect
   * @param inputs
   */
  function useBeforeLayoutEffect(effect, inputs) {
    /*(() => {
        const cleanup = useRef<void | (() => void) | null>(null);
        const prevArgsRef = useRef<Inputs>(null!);
        if (argsChanged(inputs, prevArgsRef.current)) {
            prevArgsRef.current = inputs!;
            if (cleanup.current)
                cleanup.current();
            cleanup.current = effect();
        }
    })();*/
    var [id] = p(() => generateRandomId());
    if (effect) toRun.set(id, {
      effect,
      inputs,
      cleanup: null
    });else toRun.delete(id);
    h(() => {
      return () => {
        toRun.delete(id);
        previousInputs.delete(id);
      };
    }, [id]);
  }
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }
  var Unset$1 = Symbol("unset");
  /**
   * Given an input value, returns a constant getter function that can be used
   * inside of `useEffect` and friends without including it in the dependency array.
   *
   * This uses `options.diffed` in order to run before everything, even
   * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
   *
   * @param value
   * @returns
   */
  function useStableGetter(value) {
    var ref = _(Unset$1);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return T$1(() => {
      if (ref.current === Unset$1) {
        throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
      }
      return ref.current;
    }, []);
  }
  function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return h$1(p$1, {}, lhs, rhs);
    }
  }

  /**
   * Given two sets of props, merges their `class` and `className` properties.
   * Duplicate classes are removed (order doesn't matter anyway).
   *
   * @param lhs Classes of the first component
   * @param rhs Classes of the second component
   * @returns A string representing all combined classes from both arguments.
   */
  function useMergedClasses(lhsClass, lhsClassName, rhsClass, rhsClassName) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    if (lhsClass || rhsClass || lhsClassName || rhsClassName) {
      var lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
      var rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
      var allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
      return Array.from(allClasses).join(" ");
    } else {
      return undefined;
    }
  }
  function processRef(instance, ref) {
    if (typeof ref === "function") {
      ref(instance);
    } else if (ref != null) {
      ref.current = instance;
    } else {
      /* eslint-disable no-debugger */
      debugger;
      console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  /**
   * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
   * @param lhs
   * @param rhs
   * @returns
   */
  function useMergedRefs(rhs, lhs) {
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return combined;
    }
    function combined(current) {
      processRef(current, lhs);
      processRef(current, rhs);
    }
  }
  function styleStringToObject(style) {
    // TODO: This sucks D:
    return Object.fromEntries(style.split(";").map(statement => statement.split(":")));
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
      if (!lhs && rhs) return rhs;
      // They're both non-null but different types.
      // Convert the string type to an object bag type and run it again.
      if (lhs && rhs) {
        // (useMergedStyles isn't a true hook -- this isn't a violation)
        if (typeof lhs == "string") return useMergedStyles(styleStringToObject(lhs), rhs);
        if (typeof rhs == "string") return useMergedStyles(lhs, styleStringToObject(rhs));
      }
      // Logic???
      return undefined;
    }
    // They're both strings, just concatenate them.
    if (typeof lhs == "string") {
      return "".concat(lhs, ";").concat(rhs !== null && rhs !== void 0 ? rhs : "");
    }
    // They're both objects, just merge them.
    return _objectSpread(_objectSpread({}, lhs !== null && lhs !== void 0 ? lhs : {}), rhs !== null && rhs !== void 0 ? rhs : {});
  }
  var log = console.warn;
  /**
   * Given two sets of props, merges them and returns the result.
   *
   * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
   * @param lhs2
   * @param rhs2
   * @returns
   */
  function useMergedProps() {
    for (var _len3 = arguments.length, allProps = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      allProps[_key3] = arguments[_key3];
    }
    useEnsureStability("useMergedProps", allProps.length);
    var ret = {};
    for (var nextProps of allProps) {
      ret = useMergedProps2(ret, nextProps);
    }
    return ret;
  }
  var knowns = new Set(["children", "ref", "className", "class", "style"]);
  function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
      // They're both functions that can be merged (or one's a function and the other's null).
      // Not an *easy* case, but a well-defined one.
      var merged = mergeFunctions(lhsValue, rhsValue);
      return merged;
    } else {
      // Uh...we're here because one of them's null, right?
      if (lhsValue == null && rhsValue == null) {
        if (rhsValue === null && lhsValue === undefined) return rhsValue;else return lhsValue;
      }
      if (lhsValue == null) return rhsValue;else if (rhsValue == null) return lhsValue;else if (rhsValue == lhsValue) {
        // I mean, they're the same value at least
        // so we don't need to do anything.
        // Not really ideal though.
        return rhsValue;
      } else {
        // Ugh.
        // No good strategies here, just log it if requested
        log === null || log === void 0 ? void 0 : log("The prop \"".concat(key, "\" cannot simultaneously be the values ").concat(lhsValue, " and ").concat(rhsValue, ". One must be chosen outside of useMergedProps."));
        return rhsValue;
      }
    }
  }
  /**
   * Helper function.
   *
   * This is one of the most commonly called functions in this and consumer libraries,
   * so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
   */
  function useMergedProps2(lhsAll, rhsAll) {
    var ret = {
      ref: useMergedRefs(lhsAll.ref, rhsAll.ref),
      style: useMergedStyles(lhsAll.style, rhsAll.style),
      className: useMergedClasses(lhsAll["class"], lhsAll.className, rhsAll["class"], rhsAll.className),
      children: useMergedChildren(lhsAll.children, rhsAll.children)
    };
    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret["class"] === undefined) delete ret["class"];
    if (ret.children === undefined) delete ret.children;
    for (var lhsKeyU in lhsAll) {
      var lhsKey = lhsKeyU;
      if (knowns.has(lhsKey)) continue;
      ret[lhsKey] = lhsAll[lhsKey];
    }
    for (var rhsKeyU in rhsAll) {
      var rhsKey = rhsKeyU;
      if (knowns.has(rhsKey)) continue;
      ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
  }
  function mergeFunctions(lhs, rhs) {
    if (!lhs) return rhs;
    if (!rhs) return lhs;
    return function () {
      var lv = lhs(...arguments);
      var rv = rhs(...arguments);
      if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
    };
  }
  /*
  function test<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {
       const id0: GenericGet<{}, "id", string> = "";
      const id3: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id4: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id5: GenericGet<{ id: undefined }, "id", string> = undefined;
      const id6: GenericGet<{ id: undefined }, "id", string> = undefined;
      //const id2: ZipSingle<string | undefined, string | undefined> = undefined;
      const id1: ZipObject<{ id: undefined }, { id: string }> = { id: undefined };
       type M1 = GenericGet<P, "style", string>;
      type M2 = GenericGet<{}, "style", string>;
      const m1: M1 = "";
      const m2: M1 = undefined;
      /// @ts-expect-error    Because number isn't assignable to string
      const m3: M1 = 0;
       const m4: M2 = "";
      const m5: M2 = undefined;
      /// @ts-expect-error    Because number isn't assignable to string
      const m6: M2 = 0;
       const p1: MergedProps<HTMLInputElement, {}, { id: string }> = useMergedProps<HTMLInputElement>()({}, { id: "string" });
      const p2: MergedProps<HTMLInputElement, { id: undefined }, { id: string }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: "string" });
      const p3: MergedProps<HTMLInputElement, { id: undefined }, { id: undefined }> = useMergedProps<HTMLInputElement>()({ id: undefined }, { id: undefined });
      const p4: MergedProps<HTMLInputElement, {}, {}> = useMergedProps<HTMLInputElement>()({}, {});
      const p5 = useMergedProps<HTMLInputElement>()(props, {});
      const p6 = useMergedProps<HTMLInputElement>()(props, { id: undefined });
      const p7 = useMergedProps<HTMLInputElement>()(props, { id: "string" });
        p1.id?.concat("");
      p2.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      p3.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      p4.id?.concat("");
        p5.id?.concat("");
      p6.id?.concat("");
      p7.id?.concat("");
       /// @ts-expect-error    id must contain undefined
      p5.id.concat("");
      /// @ts-expect-error    id must contain undefined
      p6.id.concat("");
      /// @ts-expect-error    id must contain undefined
      p7.id.concat("");
        if (p5.allowFullScreen === undefined) {}
      else if (p5.allowFullScreen === false) {}
      else if (p5.allowFullScreen === true) {}
      else {
          acceptsNever(p5.allowFullScreen);
      }
        if (p6.allowFullScreen === undefined) {}
      else if (p6.allowFullScreen === false) {}
      else if (p6.allowFullScreen === true) {}
      else {
          acceptsNever(p6.allowFullScreen);
      }
        if (p7.allowFullScreen === undefined) {}
      else if (p7.allowFullScreen === false) {}
      else if (p7.allowFullScreen === true) {}
      else {
          acceptsNever(p7.allowFullScreen);
      }
        // Make sure it works recursively
      const r1a = useMergedProps<HTMLInputElement>()({}, p1);
      const r1b = useMergedProps<HTMLInputElement>()(props, p1);
      const r2a = useMergedProps<HTMLInputElement>()({}, p2);
      const r2b = useMergedProps<HTMLInputElement>()(props, p2);
      const r3a = useMergedProps<HTMLInputElement>()({}, p3);
      const r3b = useMergedProps<HTMLInputElement>()(props, p3);
      const r4a = useMergedProps<HTMLInputElement>()({}, p4);
      const r4b = useMergedProps<HTMLInputElement>()(props, p4);
      const r5a = useMergedProps<HTMLInputElement>()({}, p5);
      const r5b = useMergedProps<HTMLInputElement>()(props, p5);
      const r6a = useMergedProps<HTMLInputElement>()({}, p6);
      const r6b = useMergedProps<HTMLInputElement>()(props, p6);
      const r7a = useMergedProps<HTMLInputElement>()({}, p7);
      const r7b = useMergedProps<HTMLInputElement>()(props, p7);
        r1a.id?.concat("");
      r1b.id?.concat("");
      r2a.id?.concat("");
      r2b.id?.concat("");
      // @ts-expect-error    id can't be anything but undefined
      r3a.id?.concat("");
      r3b.id?.concat("");
      /// @ts-expect-error    id can't be anything but undefined
      r4a.id?.concat("");
      r4b.id?.concat("");
        r5a.id?.concat("");
      r5b.id?.concat("");
      r6a.id?.concat("");
      r6b.id?.concat("");
      r7a.id?.concat("");
      r7b.id?.concat("");
       /// @ts-expect-error    id must contain undefined
      r5a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r5b.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r6a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r6b.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r7a.id.concat("");
      /// @ts-expect-error    id must contain undefined
      r7b.id.concat("");
        if (r5a.allowFullScreen === undefined) {}
      else if (r5a.allowFullScreen === false) {}
      else if (r5a.allowFullScreen === true) {}
      else {
          acceptsNever(r5a.allowFullScreen);
      }
        if (r5b.allowFullScreen === undefined) {}
      else if (r5b.allowFullScreen === false) {}
      else if (r5b.allowFullScreen === true) {}
      else {
          acceptsNever(r5b.allowFullScreen);
      }
        if (r6a.allowFullScreen === undefined) {}
      else if (r6a.allowFullScreen === false) {}
      else if (r6a.allowFullScreen === true) {}
      else {
          acceptsNever(r6a.allowFullScreen);
      }
        if (r6b.allowFullScreen === undefined) {}
      else if (r6b.allowFullScreen === false) {}
      else if (r6b.allowFullScreen === true) {}
      else {
          acceptsNever(r6b.allowFullScreen);
      }
        if (r7a.allowFullScreen === undefined) {}
      else if (r7a.allowFullScreen === false) {}
      else if (r7a.allowFullScreen === true) {}
      else {
          acceptsNever(r7a.allowFullScreen);
      }
        if (r7b.allowFullScreen === undefined) {}
      else if (r7b.allowFullScreen === false) {}
      else if (r7b.allowFullScreen === true) {}
      else {
          acceptsNever(r7b.allowFullScreen);
      }
   }
  function acceptsNever(n: never) {}
  */

  /*
  export function useRefElementProps<E extends Element>(r: UseRefElementReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
      return [r.refElementReturn.propsStable, ...otherProps];
  }*/
  /**
   * Allows accessing the element a ref references as soon as it does so.
   * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
   * adding a RefCallback and merging it with any existing ref that existed on the props.
   *
   * Don't forget to provide the Element as the type argument!
   *
   * @returns The element, and the sub-hook that makes it retrievable.
   */
  function useRefElement(args) {
    var {
      onElementChange,
      onMount,
      onUnmount
    } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    // Called (indirectly) by the ref that the element receives.
    var handler = T$1((e, prevValue) => {
      var cleanup = onElementChange === null || onElementChange === void 0 ? void 0 : onElementChange(e, prevValue);
      if (prevValue) onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(prevValue);
      if (e) onMount === null || onMount === void 0 ? void 0 : onMount(e);
      return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    var [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    var propsStable = _({
      ref: setElement
    });
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
      refElementReturn: {
        getElement,
        propsStable: propsStable.current
      }
    };
  }

  /**
   * @license
   * Copyright 2016 Google Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  (() => {
    var _a, _b, _c;
    /* Symbols for private properties */
    var _blockingElements = Symbol();
    var _alreadyInertElements = Symbol();
    var _topElParents = Symbol();
    var _siblingsToRestore = Symbol();
    var _parentMO = Symbol();
    /* Symbols for private static methods */
    var _topChanged = Symbol();
    var _swapInertedSibling = Symbol();
    var _inertSiblings = Symbol();
    var _restoreInertedSiblings = Symbol();
    var _getParents = Symbol();
    var _getDistributedChildren = Symbol();
    var _isInertable = Symbol();
    var _handleMutations = Symbol();
    class BlockingElementsImpl {
      constructor() {
        /**
         * The blocking elements.
         */
        this[_a] = [];
        /**
         * Used to keep track of the parents of the top element, from the element
         * itself up to body. When top changes, the old top might have been removed
         * from the document, so we need to memoize the inerted parents' siblings
         * in order to restore their inerteness when top changes.
         */
        this[_b] = [];
        /**
         * Elements that are already inert before the first blocking element is
         * pushed.
         */
        this[_c] = new Set();
      }
      destructor() {
        // Restore original inertness.
        this[_restoreInertedSiblings](this[_topElParents]);
        // Note we don't want to make these properties nullable on the class,
        // since then we'd need non-null casts in many places. Calling a method on
        // a BlockingElements instance after calling destructor will result in an
        // exception.
        var nullable = this;
        nullable[_blockingElements] = null;
        nullable[_topElParents] = null;
        nullable[_alreadyInertElements] = null;
      }
      get top() {
        var elems = this[_blockingElements];
        return elems[elems.length - 1] || null;
      }
      push(element) {
        if (!element || element === this.top) {
          return;
        }
        // Remove it from the stack, we'll bring it to the top.
        this.remove(element);
        this[_topChanged](element);
        this[_blockingElements].push(element);
      }
      remove(element) {
        var i = this[_blockingElements].indexOf(element);
        if (i === -1) {
          return false;
        }
        this[_blockingElements].splice(i, 1);
        // Top changed only if the removed element was the top element.
        if (i === this[_blockingElements].length) {
          this[_topChanged](this.top);
        }
        return true;
      }
      pop() {
        var top = this.top;
        top && this.remove(top);
        return top;
      }
      has(element) {
        return this[_blockingElements].indexOf(element) !== -1;
      }
      /**
       * Sets `inert` to all document elements except the new top element, its
       * parents, and its distributed content.
       */
      [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
        var toKeepInert = this[_alreadyInertElements];
        var oldParents = this[_topElParents];
        // No new top, reset old top if any.
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        var newParents = this[_getParents](newTop);
        // New top is not contained in the main document!
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error('Non-connected element cannot be a blocking element');
        }
        // Cast here because we know we'll call _inertSiblings on newParents
        // below.
        this[_topElParents] = newParents;
        var toSkip = this[_getDistributedChildren](newTop);
        // No previous top element.
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        var i = oldParents.length - 1;
        var j = newParents.length - 1;
        // Find common parent. Index 0 is the element itself (so stop before it).
        while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
          i--;
          j--;
        }
        // If up the parents tree there are 2 elements that are siblings, swap
        // the inerted sibling.
        if (oldParents[i] !== newParents[j]) {
          this[_swapInertedSibling](oldParents[i], newParents[j]);
        }
        // Restore old parents siblings inertness.
        i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
        // Make new parents siblings inert.
        j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_swapInertedSibling](oldInert, newInert) {
        var siblingsToRestore = oldInert[_siblingsToRestore];
        // oldInert is not contained in siblings to restore, so we have to check
        // if it's inertable and if already inert.
        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        }
        // If newInert was already between the siblings to restore, it means it is
        // inertable and must be restored.
        if (siblingsToRestore.has(newInert)) {
          newInert.inert = false;
          siblingsToRestore.delete(newInert);
        }
        newInert[_parentMO] = oldInert[_parentMO];
        newInert[_siblingsToRestore] = siblingsToRestore;
        oldInert[_parentMO] = undefined;
        oldInert[_siblingsToRestore] = undefined;
      }
      /**
       * Restores original inertness to the siblings of the elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_restoreInertedSiblings](elements) {
        for (var element of elements) {
          var mo = element[_parentMO];
          mo.disconnect();
          element[_parentMO] = undefined;
          var siblings = element[_siblingsToRestore];
          for (var sibling of siblings) {
            sibling.inert = false;
          }
          element[_siblingsToRestore] = undefined;
        }
      }
      /**
       * Inerts the siblings of the elements except the elements to skip. Stores
       * the inerted siblings into the element's symbol `_siblingsToRestore`.
       * Pass `toKeepInert` to collect the already inert elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */
      [_inertSiblings](elements, toSkip, toKeepInert) {
        for (var element of elements) {
          // Assume element is not a Document, so it must have a parentNode.
          var parent = element.parentNode;
          var children = parent.children;
          var inertedSiblings = new Set();
          for (var _j = 0; _j < children.length; _j++) {
            var sibling = children[_j];
            // Skip the input element, if not inertable or to be skipped.
            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            }
            // Should be collected since already inerted.
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          }
          // Store the siblings that were inerted.
          element[_siblingsToRestore] = inertedSiblings;
          // Observe only immediate children mutations on the parent.
          var mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          var parentToObserve = parent;
          // If we're using the ShadyDOM polyfill, then our parent could be a
          // shady root, which is an object that acts like a ShadowRoot, but isn't
          // actually a node in the real DOM. Observe the real DOM parent instead.
          var maybeShadyRoot = parentToObserve;
          if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
            parentToObserve = maybeShadyRoot.host;
          }
          mo.observe(parentToObserve, {
            childList: true
          });
        }
      }
      /**
       * Handles newly added/removed nodes by toggling their inertness.
       * It also checks if the current top Blocking Element has been removed,
       * notifying and removing it.
       */
      [_handleMutations](mutations) {
        var parents = this[_topElParents];
        var toKeepInert = this[_alreadyInertElements];
        for (var mutation of mutations) {
          // If the target is a shadowRoot, get its host as we skip shadowRoots when
          // computing _topElParents.
          var target = mutation.target.host || mutation.target;
          var idx = target === document.body ? parents.length : parents.indexOf(target);
          var inertedChild = parents[idx - 1];
          var inertedSiblings = inertedChild[_siblingsToRestore];
          // To restore.
          for (var _i2 = 0; _i2 < mutation.removedNodes.length; _i2++) {
            var sibling = mutation.removedNodes[_i2];
            if (sibling === inertedChild) {
              console.info('Detected removal of the top Blocking Element.');
              this.pop();
              return;
            }
            if (inertedSiblings.has(sibling)) {
              sibling.inert = false;
              inertedSiblings.delete(sibling);
            }
          }
          // To inert.
          for (var _i3 = 0; _i3 < mutation.addedNodes.length; _i3++) {
            var _sibling = mutation.addedNodes[_i3];
            if (!this[_isInertable](_sibling)) {
              continue;
            }
            if (toKeepInert && _sibling.inert) {
              toKeepInert.add(_sibling);
            } else {
              _sibling.inert = true;
              inertedSiblings.add(_sibling);
            }
          }
        }
      }
      /**
       * Returns if the element is inertable.
       */
      [_isInertable](element) {
        return false === /^(style|template|script)$/.test(element.localName);
      }
      /**
       * Returns the list of newParents of an element, starting from element
       * (included) up to `document.body` (excluded).
       */
      [_getParents](element) {
        var parents = [];
        var current = element;
        // Stop to body.
        while (current && current !== document.body) {
          // Skip shadow roots.
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          }
          // ShadowDom v1
          if (current.assignedSlot) {
            // Collect slots from deepest slot to top.
            while (current = current.assignedSlot) {
              parents.push(current);
            }
            // Continue the search on the top slot.
            current = parents.pop();
            continue;
          }
          current = current.parentNode || current.host;
        }
        return parents;
      }
      /**
       * Returns the distributed children of the element's shadow root.
       * Returns null if the element doesn't have a shadow root.
       */
      [_getDistributedChildren](element) {
        var shadowRoot = element.shadowRoot;
        if (!shadowRoot) {
          return null;
        }
        var result = new Set();
        var i;
        var j;
        var nodes;
        var slots = shadowRoot.querySelectorAll('slot');
        if (slots.length && slots[0].assignedNodes) {
          for (i = 0; i < slots.length; i++) {
            nodes = slots[i].assignedNodes({
              flatten: true
            });
            for (j = 0; j < nodes.length; j++) {
              if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                result.add(nodes[j]);
              }
            }
          }
          // No need to search for <content>.
        }

        return result;
      }
    }
    document.$blockingElements = new BlockingElementsImpl();
  })();
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  (function (module, exports) {
    (function (global, factory) {
      factory();
    })(commonjsGlobal, function () {
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * This work is licensed under the W3C Software and Document License
       * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
       */

      (function () {
        // Return early if we're not running inside of the browser.
        if (typeof window === 'undefined') {
          return;
        }

        // Convenience function for converting NodeLists.
        /** @type {typeof Array.prototype.slice} */
        var slice = Array.prototype.slice;

        /**
         * IE has a non-standard name for "matches".
         * @type {typeof Element.prototype.matches}
         */
        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;

        /** @type {string} */
        var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');

        /**
         * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
         * attribute.
         *
         * Its main functions are:
         *
         * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
         *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
         *   each focusable node in the subtree with the singleton `InertManager` which manages all known
         *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
         *   instance exists for each focusable node which has at least one inert root as an ancestor.
         *
         * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
         *   attribute is removed from the root node). This is handled in the destructor, which calls the
         *   `deregister` method on `InertManager` for each managed inert node.
         */

        var InertRoot = function () {
          /**
           * @param {!HTMLElement} rootElement The HTMLElement at the root of the inert subtree.
           * @param {!InertManager} inertManager The global singleton InertManager object.
           */
          function InertRoot(rootElement, inertManager) {
            _classCallCheck(this, InertRoot);

            /** @type {!InertManager} */
            this._inertManager = inertManager;

            /** @type {!HTMLElement} */
            this._rootElement = rootElement;

            /**
             * @type {!Set<!InertNode>}
             * All managed focusable nodes in this InertRoot's subtree.
             */
            this._managedNodes = new Set();

            // Make the subtree hidden from assistive technology
            if (this._rootElement.hasAttribute('aria-hidden')) {
              /** @type {?string} */
              this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
            } else {
              this._savedAriaHidden = null;
            }
            this._rootElement.setAttribute('aria-hidden', 'true');

            // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
            this._makeSubtreeUnfocusable(this._rootElement);

            // Watch for:
            // - any additions in the subtree: make them unfocusable too
            // - any removals from the subtree: remove them from this inert root's managed nodes
            // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
            //   element, make that node a managed node.
            this._observer = new MutationObserver(this._onMutation.bind(this));
            this._observer.observe(this._rootElement, {
              attributes: true,
              childList: true,
              subtree: true
            });
          }

          /**
           * Call this whenever this object is about to become obsolete.  This unwinds all of the state
           * stored in this object and updates the state of all of the managed nodes.
           */

          _createClass(InertRoot, [{
            key: 'destructor',
            value: function destructor() {
              this._observer.disconnect();
              if (this._rootElement) {
                if (this._savedAriaHidden !== null) {
                  this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
                } else {
                  this._rootElement.removeAttribute('aria-hidden');
                }
              }
              this._managedNodes.forEach(function (inertNode) {
                this._unmanageNode(inertNode.node);
              }, this);

              // Note we cast the nulls to the ANY type here because:
              // 1) We want the class properties to be declared as non-null, or else we
              //    need even more casts throughout this code. All bets are off if an
              //    instance has been destroyed and a method is called.
              // 2) We don't want to cast "this", because we want type-aware optimizations
              //    to know which properties we're setting.
              this._observer = /** @type {?} */null;
              this._rootElement = /** @type {?} */null;
              this._managedNodes = /** @type {?} */null;
              this._inertManager = /** @type {?} */null;
            }

            /**
             * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
             */
          }, {
            key: '_makeSubtreeUnfocusable',
            /**
             * @param {!Node} startNode
             */
            value: function _makeSubtreeUnfocusable(startNode) {
              var _this2 = this;
              composedTreeWalk(startNode, function (node) {
                return _this2._visitNode(node);
              });
              var activeElement = document.activeElement;
              if (!document.body.contains(startNode)) {
                // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
                var node = startNode;
                /** @type {!ShadowRoot|undefined} */
                var root = undefined;
                while (node) {
                  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    root = /** @type {!ShadowRoot} */node;
                    break;
                  }
                  node = node.parentNode;
                }
                if (root) {
                  activeElement = root.activeElement;
                }
              }
              if (startNode.contains(activeElement)) {
                activeElement.blur();
                // In IE11, if an element is already focused, and then set to tabindex=-1
                // calling blur() will not actually move the focus.
                // To work around this we call focus() on the body instead.
                if (activeElement === document.activeElement) {
                  document.body.focus();
                }
              }
            }

            /**
             * @param {!Node} node
             */
          }, {
            key: '_visitNode',
            value: function _visitNode(node) {
              if (node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }
              var element = /** @type {!HTMLElement} */node;

              // If a descendant inert root becomes un-inert, its descendants will still be inert because of
              // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
              if (element !== this._rootElement && element.hasAttribute('inert')) {
                this._adoptInertRoot(element);
              }
              if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
                this._manageNode(element);
              }
            }

            /**
             * Register the given node with this InertRoot and with InertManager.
             * @param {!Node} node
             */
          }, {
            key: '_manageNode',
            value: function _manageNode(node) {
              var inertNode = this._inertManager.register(node, this);
              this._managedNodes.add(inertNode);
            }

            /**
             * Unregister the given node with this InertRoot and with InertManager.
             * @param {!Node} node
             */
          }, {
            key: '_unmanageNode',
            value: function _unmanageNode(node) {
              var inertNode = this._inertManager.deregister(node, this);
              if (inertNode) {
                this._managedNodes['delete'](inertNode);
              }
            }

            /**
             * Unregister the entire subtree starting at `startNode`.
             * @param {!Node} startNode
             */
          }, {
            key: '_unmanageSubtree',
            value: function _unmanageSubtree(startNode) {
              var _this3 = this;
              composedTreeWalk(startNode, function (node) {
                return _this3._unmanageNode(node);
              });
            }

            /**
             * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
             * @param {!HTMLElement} node
             */
          }, {
            key: '_adoptInertRoot',
            value: function _adoptInertRoot(node) {
              var inertSubroot = this._inertManager.getInertRoot(node);

              // During initialisation this inert root may not have been registered yet,
              // so register it now if need be.
              if (!inertSubroot) {
                this._inertManager.setInert(node, true);
                inertSubroot = this._inertManager.getInertRoot(node);
              }
              inertSubroot.managedNodes.forEach(function (savedInertNode) {
                this._manageNode(savedInertNode.node);
              }, this);
            }

            /**
             * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
             * @param {!Array<!MutationRecord>} records
             * @param {!MutationObserver} self
             */
          }, {
            key: '_onMutation',
            value: function _onMutation(records, self) {
              records.forEach(function (record) {
                var target = /** @type {!HTMLElement} */record.target;
                if (record.type === 'childList') {
                  // Manage added nodes
                  slice.call(record.addedNodes).forEach(function (node) {
                    this._makeSubtreeUnfocusable(node);
                  }, this);

                  // Un-manage removed nodes
                  slice.call(record.removedNodes).forEach(function (node) {
                    this._unmanageSubtree(node);
                  }, this);
                } else if (record.type === 'attributes') {
                  if (record.attributeName === 'tabindex') {
                    // Re-initialise inert node if tabindex changes
                    this._manageNode(target);
                  } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                    // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                    // already managed nodes from this inert subroot.
                    this._adoptInertRoot(target);
                    var inertSubroot = this._inertManager.getInertRoot(target);
                    this._managedNodes.forEach(function (managedNode) {
                      if (target.contains(managedNode.node)) {
                        inertSubroot._manageNode(managedNode.node);
                      }
                    });
                  }
                }
              }, this);
            }
          }, {
            key: 'managedNodes',
            get: function get() {
              return new Set(this._managedNodes);
            }

            /** @return {boolean} */
          }, {
            key: 'hasSavedAriaHidden',
            get: function get() {
              return this._savedAriaHidden !== null;
            }

            /** @param {?string} ariaHidden */
          }, {
            key: 'savedAriaHidden',
            set: function set(ariaHidden) {
              this._savedAriaHidden = ariaHidden;
            }

            /** @return {?string} */,

            get: function get() {
              return this._savedAriaHidden;
            }
          }]);
          return InertRoot;
        }();

        /**
         * `InertNode` initialises and manages a single inert node.
         * A node is inert if it is a descendant of one or more inert root elements.
         *
         * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
         * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
         * is intrinsically focusable or not.
         *
         * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
         * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
         * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
         * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
         * or removes the `tabindex` attribute if the element is intrinsically focusable.
         */

        var InertNode = function () {
          /**
           * @param {!Node} node A focusable element to be made inert.
           * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
           */
          function InertNode(node, inertRoot) {
            _classCallCheck(this, InertNode);

            /** @type {!Node} */
            this._node = node;

            /** @type {boolean} */
            this._overrodeFocusMethod = false;

            /**
             * @type {!Set<!InertRoot>} The set of descendant inert roots.
             *    If and only if this set becomes empty, this node is no longer inert.
             */
            this._inertRoots = new Set([inertRoot]);

            /** @type {?number} */
            this._savedTabIndex = null;

            /** @type {boolean} */
            this._destroyed = false;

            // Save any prior tabindex info and make this node untabbable
            this.ensureUntabbable();
          }

          /**
           * Call this whenever this object is about to become obsolete.
           * This makes the managed node focusable again and deletes all of the previously stored state.
           */

          _createClass(InertNode, [{
            key: 'destructor',
            value: function destructor() {
              this._throwIfDestroyed();
              if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                var element = /** @type {!HTMLElement} */this._node;
                if (this._savedTabIndex !== null) {
                  element.setAttribute('tabindex', this._savedTabIndex);
                } else {
                  element.removeAttribute('tabindex');
                }

                // Use `delete` to restore native focus method.
                if (this._overrodeFocusMethod) {
                  delete element.focus;
                }
              }

              // See note in InertRoot.destructor for why we cast these nulls to ANY.
              this._node = /** @type {?} */null;
              this._inertRoots = /** @type {?} */null;
              this._destroyed = true;
            }

            /**
             * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
             * If the object has been destroyed, any attempt to access it will cause an exception.
             */
          }, {
            key: '_throwIfDestroyed',
            /**
             * Throw if user tries to access destroyed InertNode.
             */
            value: function _throwIfDestroyed() {
              if (this.destroyed) {
                throw new Error('Trying to access destroyed InertNode');
              }
            }

            /** @return {boolean} */
          }, {
            key: 'ensureUntabbable',
            /** Save the existing tabindex value and make the node untabbable and unfocusable */
            value: function ensureUntabbable() {
              if (this.node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }
              var element = /** @type {!HTMLElement} */this.node;
              if (matches.call(element, _focusableElementsString)) {
                if ( /** @type {!HTMLElement} */element.tabIndex === -1 && this.hasSavedTabIndex) {
                  return;
                }
                if (element.hasAttribute('tabindex')) {
                  this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
                }
                element.setAttribute('tabindex', '-1');
                if (element.nodeType === Node.ELEMENT_NODE) {
                  element.focus = function () {};
                  this._overrodeFocusMethod = true;
                }
              } else if (element.hasAttribute('tabindex')) {
                this._savedTabIndex = /** @type {!HTMLElement} */element.tabIndex;
                element.removeAttribute('tabindex');
              }
            }

            /**
             * Add another inert root to this inert node's set of managing inert roots.
             * @param {!InertRoot} inertRoot
             */
          }, {
            key: 'addInertRoot',
            value: function addInertRoot(inertRoot) {
              this._throwIfDestroyed();
              this._inertRoots.add(inertRoot);
            }

            /**
             * Remove the given inert root from this inert node's set of managing inert roots.
             * If the set of managing inert roots becomes empty, this node is no longer inert,
             * so the object should be destroyed.
             * @param {!InertRoot} inertRoot
             */
          }, {
            key: 'removeInertRoot',
            value: function removeInertRoot(inertRoot) {
              this._throwIfDestroyed();
              this._inertRoots['delete'](inertRoot);
              if (this._inertRoots.size === 0) {
                this.destructor();
              }
            }
          }, {
            key: 'destroyed',
            get: function get() {
              return (/** @type {!InertNode} */this._destroyed
              );
            }
          }, {
            key: 'hasSavedTabIndex',
            get: function get() {
              return this._savedTabIndex !== null;
            }

            /** @return {!Node} */
          }, {
            key: 'node',
            get: function get() {
              this._throwIfDestroyed();
              return this._node;
            }

            /** @param {?number} tabIndex */
          }, {
            key: 'savedTabIndex',
            set: function set(tabIndex) {
              this._throwIfDestroyed();
              this._savedTabIndex = tabIndex;
            }

            /** @return {?number} */,

            get: function get() {
              this._throwIfDestroyed();
              return this._savedTabIndex;
            }
          }]);
          return InertNode;
        }();

        /**
         * InertManager is a per-document singleton object which manages all inert roots and nodes.
         *
         * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
         * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
         * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
         * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
         * is created for each such node, via the `_managedNodes` map.
         */

        var InertManager = function () {
          /**
           * @param {!Document} document
           */
          function InertManager(document) {
            _classCallCheck(this, InertManager);
            if (!document) {
              throw new Error('Missing required argument; InertManager needs to wrap a document.');
            }

            /** @type {!Document} */
            this._document = document;

            /**
             * All managed nodes known to this InertManager. In a map to allow looking up by Node.
             * @type {!Map<!Node, !InertNode>}
             */
            this._managedNodes = new Map();

            /**
             * All inert roots known to this InertManager. In a map to allow looking up by Node.
             * @type {!Map<!Node, !InertRoot>}
             */
            this._inertRoots = new Map();

            /**
             * Observer for mutations on `document.body`.
             * @type {!MutationObserver}
             */
            this._observer = new MutationObserver(this._watchForInert.bind(this));

            // Add inert style.
            addInertStyle(document.head || document.body || document.documentElement);

            // Wait for document to be loaded.
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
            } else {
              this._onDocumentLoaded();
            }
          }

          /**
           * Set whether the given element should be an inert root or not.
           * @param {!HTMLElement} root
           * @param {boolean} inert
           */

          _createClass(InertManager, [{
            key: 'setInert',
            value: function setInert(root, inert) {
              if (inert) {
                if (this._inertRoots.has(root)) {
                  // element is already inert
                  return;
                }
                var inertRoot = new InertRoot(root, this);
                root.setAttribute('inert', '');
                this._inertRoots.set(root, inertRoot);
                // If not contained in the document, it must be in a shadowRoot.
                // Ensure inert styles are added there.
                if (!this._document.body.contains(root)) {
                  var parent = root.parentNode;
                  while (parent) {
                    if (parent.nodeType === 11) {
                      addInertStyle(parent);
                    }
                    parent = parent.parentNode;
                  }
                }
              } else {
                if (!this._inertRoots.has(root)) {
                  // element is already non-inert
                  return;
                }
                var _inertRoot = this._inertRoots.get(root);
                _inertRoot.destructor();
                this._inertRoots['delete'](root);
                root.removeAttribute('inert');
              }
            }

            /**
             * Get the InertRoot object corresponding to the given inert root element, if any.
             * @param {!Node} element
             * @return {!InertRoot|undefined}
             */
          }, {
            key: 'getInertRoot',
            value: function getInertRoot(element) {
              return this._inertRoots.get(element);
            }

            /**
             * Register the given InertRoot as managing the given node.
             * In the case where the node has a previously existing inert root, this inert root will
             * be added to its set of inert roots.
             * @param {!Node} node
             * @param {!InertRoot} inertRoot
             * @return {!InertNode} inertNode
             */
          }, {
            key: 'register',
            value: function register(node, inertRoot) {
              var inertNode = this._managedNodes.get(node);
              if (inertNode !== undefined) {
                // node was already in an inert subtree
                inertNode.addInertRoot(inertRoot);
              } else {
                inertNode = new InertNode(node, inertRoot);
              }
              this._managedNodes.set(node, inertNode);
              return inertNode;
            }

            /**
             * De-register the given InertRoot as managing the given inert node.
             * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
             * node from the InertManager's set of managed nodes if it is destroyed.
             * If the node is not currently managed, this is essentially a no-op.
             * @param {!Node} node
             * @param {!InertRoot} inertRoot
             * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
             */
          }, {
            key: 'deregister',
            value: function deregister(node, inertRoot) {
              var inertNode = this._managedNodes.get(node);
              if (!inertNode) {
                return null;
              }
              inertNode.removeInertRoot(inertRoot);
              if (inertNode.destroyed) {
                this._managedNodes['delete'](node);
              }
              return inertNode;
            }

            /**
             * Callback used when document has finished loading.
             */
          }, {
            key: '_onDocumentLoaded',
            value: function _onDocumentLoaded() {
              // Find all inert roots in document and make them actually inert.
              var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
              inertElements.forEach(function (inertElement) {
                this.setInert(inertElement, true);
              }, this);

              // Comment this out to use programmatic API only.
              this._observer.observe(this._document.body || this._document.documentElement, {
                attributes: true,
                subtree: true,
                childList: true
              });
            }

            /**
             * Callback used when mutation observer detects attribute changes.
             * @param {!Array<!MutationRecord>} records
             * @param {!MutationObserver} self
             */
          }, {
            key: '_watchForInert',
            value: function _watchForInert(records, self) {
              var _this = this;
              records.forEach(function (record) {
                switch (record.type) {
                  case 'childList':
                    slice.call(record.addedNodes).forEach(function (node) {
                      if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                      }
                      var inertElements = slice.call(node.querySelectorAll('[inert]'));
                      if (matches.call(node, '[inert]')) {
                        inertElements.unshift(node);
                      }
                      inertElements.forEach(function (inertElement) {
                        this.setInert(inertElement, true);
                      }, _this);
                    }, _this);
                    break;
                  case 'attributes':
                    if (record.attributeName !== 'inert') {
                      return;
                    }
                    var target = /** @type {!HTMLElement} */record.target;
                    var inert = target.hasAttribute('inert');
                    _this.setInert(target, inert);
                    break;
                }
              }, this);
            }
          }]);
          return InertManager;
        }();

        /**
         * Recursively walk the composed tree from |node|.
         * @param {!Node} node
         * @param {(function (!HTMLElement))=} callback Callback to be called for each element traversed,
         *     before descending into child nodes.
         * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
         */

        function composedTreeWalk(node, callback, shadowRootAncestor) {
          if (node.nodeType == Node.ELEMENT_NODE) {
            var element = /** @type {!HTMLElement} */node;
            if (callback) {
              callback(element);
            }

            // Descend into node:
            // If it has a ShadowRoot, ignore all child elements - these will be picked
            // up by the <content> or <shadow> elements. Descend straight into the
            // ShadowRoot.
            var shadowRoot = /** @type {!HTMLElement} */element.shadowRoot;
            if (shadowRoot) {
              composedTreeWalk(shadowRoot, callback);
              return;
            }

            // If it is a <content> element, descend into distributed elements - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.
            if (element.localName == 'content') {
              var content = /** @type {!HTMLContentElement} */element;
              // Verifies if ShadowDom v0 is supported.
              var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];
              for (var i = 0; i < distributedNodes.length; i++) {
                composedTreeWalk(distributedNodes[i], callback);
              }
              return;
            }

            // If it is a <slot> element, descend into assigned nodes - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.
            if (element.localName == 'slot') {
              var slot = /** @type {!HTMLSlotElement} */element;
              // Verify if ShadowDom v1 is supported.
              var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
                flatten: true
              }) : [];
              for (var _i = 0; _i < _distributedNodes.length; _i++) {
                composedTreeWalk(_distributedNodes[_i], callback);
              }
              return;
            }
          }

          // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
          // element, nor a <shadow> element recurse normally.
          var child = node.firstChild;
          while (child != null) {
            composedTreeWalk(child, callback);
            child = child.nextSibling;
          }
        }

        /**
         * Adds a style element to the node containing the inert specific styles
         * @param {!Node} node
         */
        function addInertStyle(node) {
          if (node.querySelector('style#inert-style, link#inert-style')) {
            return;
          }
          var style = document.createElement('style');
          style.setAttribute('id', 'inert-style');
          style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
          node.appendChild(style);
        }
        if (!HTMLElement.prototype.hasOwnProperty('inert')) {
          /** @type {!InertManager} */
          var inertManager = new InertManager(document);
          Object.defineProperty(HTMLElement.prototype, 'inert', {
            enumerable: true,
            /** @this {!HTMLElement} */
            get: function get() {
              return this.hasAttribute('inert');
            },
            /** @this {!HTMLElement} */
            set: function set(inert) {
              inertManager.setInert(this, inert);
            }
          });
        }
      })();
    });
  })();

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$2.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Built-in value references. */
  var Buffer = moduleExports$1 ? root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  Buffer ? Buffer.isBuffer : undefined;

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  /* Node.js helper references. */
  nodeUtil && nodeUtil.isTypedArray;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function () {
    return root.Date.now();
  };

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
    nativeMin = Math.min;

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs,
        thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }
    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(),
        isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  function isPromise(p) {
    return p instanceof Promise;
  }
  var Unset = Symbol("Unset");
  /**
   * lodash-ish function that's like debounce + (throttle w/ async handling) combined.
   *
   * Requires a lot of callbacks to meaningfully turn a red function into a blue one, but you *can* do it!
   * Note that part of this is emulating the fact that the sync handler cannot have a return value,
   * so you'll need to use `setResolve` and the other related functions to do that in whatever way works for your specific scenario.
   *
   * The comments are numbered in approximate execution order for your reading pleasure (1 is near the bottom).
   */
  function asyncToSync(_ref) {
    var {
      asyncInput,
      onInvoke,
      onFinally: onFinallyAny,
      onReject,
      onResolve,
      onHasError,
      onHasResult,
      onError,
      onReturnValue,
      capture,
      onAsyncDebounce,
      onSyncDebounce,
      onPending,
      throttle,
      wait
    } = _ref;
    var pending = false;
    var syncDebouncing = false;
    var asyncDebouncing = false;
    var currentCapture = Unset;
    var onFinally = () => {
      // 8. This is run at the end of every invocation of the async handler,
      // whether it completed or not, and whether it was async or not.
      onFinallyAny();
      onPending(pending = false);
      onAsyncDebounce(asyncDebouncing = false);
      if (!asyncDebouncing) ;else {
        // 9b. Another request to run the async handler came in while we were running this one.
        // Instead of stopping, we're just going to immediately run again using the arguments that were given to us most recently.
        // We also clear that flag, because we're handling it now. It'll be set again if the handler is called again while *this* one is running
        //onAsyncDebounce(asyncDebouncing = false);
        console.assert(currentCapture !== Unset);
        if (currentCapture != Unset) {
          onSyncDebounce(syncDebouncing = true);
          syncDebounced();
        }
      }
    };
    var sync = function () {
      // 5. We're finally running the async version of the function, so notify the caller that the return value is pending.
      // And because the fact that we're here means the debounce/throttle period is over, we can clear that flag too.
      onPending(pending = true);
      console.assert(syncDebouncing == false);
      onHasError(null);
      onHasResult(null);
      var promiseOrReturn;
      var hadSyncError = false;
      try {
        // 6. Run the function we were given.
        // Because it may be sync, or it may throw before returning, we must still wrap it in a try/catch...
        // Also important is that we preserve the async-ness (or lack thereof) on the original input function.
        onInvoke();
        promiseOrReturn = asyncInput(...arguments);
        onHasError(false);
      } catch (ex) {
        hadSyncError = true;
        onError(ex);
      }
      // 7. Either end immediately, or schedule to end when completed.
      if (isPromise(promiseOrReturn)) {
        promiseOrReturn.then(r => {
          onResolve();
          onHasResult(true);
          onReturnValue(r);
          return r;
        }).catch(e => {
          onReject();
          onHasError(true);
          onError(e);
          return e;
        }).finally(onFinally);
      } else {
        if (!hadSyncError) {
          onResolve();
          onHasResult(true);
          onHasError(false);
        } else {
          onReject();
          onHasResult(false);
          onHasError(true);
        }
        onReturnValue(promiseOrReturn);
        onPending(pending = false);
        onFinally();
      }
    };
    var syncDebounced = debounce(() => {
      // 3. Instead of calling the sync version of our function directly, we allow it to be throttled/debounced.
      onSyncDebounce(syncDebouncing = false);
      if (!pending) {
        // 4a. If this is the first invocation, or if we're not still waiting for a previous invocation to finish its async call,
        // then we can just go ahead and run the debounced version of our function.
        console.assert(currentCapture != Unset);
        sync(...currentCapture);
      } else {
        // 4b. If we were called while still waiting for the (or a) previous invocation to finish,
        // then we'll need to delay this one. When that previous invocation finishes, it'll check
        // to see if it needs to run again, and it will use these new captured arguments from step 2.
        onAsyncDebounce(asyncDebouncing = true);
      }
    }, wait, {
      leading: true,
      trailing: true,
      maxWait: throttle
    });
    return {
      syncOutput: function () {
        // 1. We call the sync version of our async function.
        // 2. We capture the arguments into a form that won't become stale if/when the function is called with a (possibly seconds-long) delay (e.g. event.currentTarget.value on an <input> element).
        currentCapture = capture(...arguments);
        onSyncDebounce(syncDebouncing = true);
        syncDebounced();
      },
      flush: () => {
        syncDebounced.flush();
      },
      cancel: () => {
        syncDebounced.cancel();
      }
    };
  }
  var {
    syncOutput
  } = asyncToSync({
    asyncInput: function () {
      var _ref2 = _asyncToGenerator(function* (async) {
        return 0;
      });
      return function asyncInput(_x) {
        return _ref2.apply(this, arguments);
      };
    }(),
    capture: sync => ["async"],
    onInvoke: () => {},
    onFinally: () => {},
    onReject: () => {},
    onResolve: () => {},
    onAsyncDebounce: () => {},
    onError: () => {},
    onHasError: () => {},
    onHasResult: () => {},
    onPending: () => {},
    onReturnValue: () => {},
    onSyncDebounce: () => {},
    throttle: 0,
    wait: 0
  });
  syncOutput("sync");
  function g(n, t) {
    for (var e in t) n[e] = t[e];
    return n;
  }
  function C(n, t) {
    for (var e in n) if ("__source" !== e && !(e in t)) return !0;
    for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
    return !1;
  }
  function w(n) {
    this.props = n;
  }
  function R(n, e) {
    function r(n) {
      var t = this.props.ref,
        r = t == n.ref;
      return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
      return this.shouldComponentUpdate = r, h$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new d$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var x = l$1.__b;
  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), x && x(n);
  };
  var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function k(n) {
    function t(t) {
      var e = g({}, t);
      return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = N, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
  }
  var T = l$1.__e;
  l$1.__e = function (n, t, e, r) {
    if (n.then) for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    T(n, t, e, r);
  };
  var I = l$1.unmount;
  function L(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
      "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
      return L(n, t, e);
    })), n;
  }
  function U(n, t, e) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
      return U(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
  }
  function D() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function F(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }
  function V() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), I && I(n);
  }, (D.prototype = new d$1()).__c = function (n, t) {
    var e = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = F(r.__v),
      o = !1,
      i = function () {
        o || (o = !0, e.__R = null, u ? u(l) : l());
      };
    e.__R = i;
    var l = function () {
        if (! --r.__u) {
          if (r.state.__a) {
            var n = r.state.__a;
            r.__v.__k[0] = U(n, n.__c.__P, n.__c.__O);
          }
          var t;
          for (r.setState({
            __a: r.__b = null
          }); t = r.t.pop();) t.forceUpdate();
        }
      },
      c = !0 === t.__h;
    r.__u++ || c || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), n.then(i, i);
  }, D.prototype.componentWillUnmount = function () {
    this.t = [];
  }, D.prototype.render = function (n, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          o = this.__v.__k[0].__c;
        this.__v.__k[0] = L(this.__b, r, o.__O = o.__P);
      }
      this.__b = null;
    }
    var i = e.__a && h$1(p$1, null, n.fallback);
    return i && (i.__h = null), [h$1(p$1, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (V.prototype = new d$1()).__a = function (n) {
    var t = this,
      e = F(t.__v),
      r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
      };
      e ? e(o) : o();
    };
  }, V.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = x$1(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
    return n.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      W(n, e, t);
    });
  };
  var z = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    B = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    H = "undefined" != typeof document,
    Z = function (n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
    };
  d$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(d$1.prototype, t, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + t];
      },
      set: function (n) {
        Object.defineProperty(this, t, {
          configurable: !0,
          writable: !0,
          value: n
        });
      }
    });
  });
  var G = l$1.event;
  function J() {}
  function K() {
    return this.cancelBubble;
  }
  function Q() {
    return this.defaultPrevented;
  }
  l$1.event = function (n) {
    return G && (n = G(n)), n.persist = J, n.isPropagationStopped = K, n.isDefaultPrevented = Q, n.nativeEvent = n;
  };
  var nn = {
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    tn = l$1.vnode;
  l$1.vnode = function (n) {
    var t = n.type,
      e = n.props,
      u = e;
    if ("string" == typeof t) {
      var o = -1 === t.indexOf("-");
      for (var i in u = {}, e) {
        var l = e[i];
        H && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !Z(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && B.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
      }
      "select" == t && u.multiple && Array.isArray(u.value) && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == t && null != u.defaultValue && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
    }
    n.$$typeof = z, tn && tn(n);
  };
  var en = l$1.__r;
  l$1.__r = function (n) {
    en && en(n), n.__c;
  };
  B$2(null);
  var SwappableContext = B$2({
    getAnimateOnMount: () => false
  });
  var CssClassContext = B$2({
    GetBaseClass: () => "ptl",
    GetEnterClass: () => "n",
    GetExitClass: () => "x",
    GetMeasureClass: () => "m",
    GetInitClass: () => "i",
    GetTransitionClass: () => "t",
    GetFinalizeClass: () => "f"
  });
  function useCssClasses() {
    var {
      GetBaseClass,
      GetEnterClass,
      GetExitClass,
      GetMeasureClass,
      GetInitClass,
      GetTransitionClass,
      GetFinalizeClass
    } = q(CssClassContext);
    var GetDirectionClass = T$1(direction => {
      switch (direction) {
        case "enter":
          return GetEnterClass();
        case "exit":
          return GetExitClass();
      }
    }, []);
    var GetPhaseClass = T$1(phase => {
      switch (phase) {
        case "measure":
          return GetMeasureClass();
        case "init":
          return GetInitClass();
        case "transition":
          return GetTransitionClass();
        case "finalize":
          return GetFinalizeClass();
      }
    }, []);
    return {
      GetBaseClass,
      GetEnterClass,
      GetExitClass,
      GetMeasureClass,
      GetInitClass,
      GetTransitionClass,
      GetFinalizeClass,
      GetDirectionClass,
      GetPhaseClass
    };
  }
  /*
  export function getCssClass(): string
  export function getCssClass(direction: TransitionDirection): string
  export function getCssClass(direction: TransitionDirection, phase: TransitionPhase): string
  export function getCssClass(direction?: TransitionDirection, phase?: TransitionPhase): string {
      const phasePart = `${phase == null ? "" : `-${CssClasses[phase]}`}`;
      const directionPart = `${direction == null ? "" : `-${CssClasses[direction]}${phasePart}`}`;
      return `${CssClasses.base}${directionPart}`
  }
   export function setCssClass(which: keyof typeof CssClasses, value: string) {
      CssClasses[which] = value;
  }
  */

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   *
   * TODO: Still needed?
   */
  function forwardElementRef(Component) {
    var ForwardedComponent = k(Component);
    return ForwardedComponent;
  }
  /**
   * Useful in particular for Slides with a Tab Panel --
   * if we do Math.sign(currentIndex - slideIndex), it
   * transitions nicely in the expected direction,
   * but we need to "remember" which direction to use
   * when it's the current panel (and the difference is 0)
   */
  function useLastNonNullValue(value) {
    var lastNonNullValue = _(null);
    h(() => {
      if (value != null) lastNonNullValue.current = value;
    }, [value]);
    return value !== null && value !== void 0 ? value : lastNonNullValue.current;
  }

  /**
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateSwappableProps(_ref3, otherProps) {
    var {
      inline
    } = _ref3;
    var {
      GetBaseClass
    } = useCssClasses();
    return useMergedProps({
      className: clsx("".concat(GetBaseClass(), "-swap-container"), inline && "".concat(GetBaseClass(), "-swap-container-inline"))
    }, otherProps);
  }
  /**
   * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
   *
   * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
   *
   * If you pass a regular element (like a div) or other single component, then thee props and ref will be forwarded onto that element. Otherwise, all the children will be wrapped in a div or span depending on the `inline` prop.
   * @param param0
   * @returns
   */
  var Swappable = R(forwardElementRef(function Swappable(_ref4, ref) {
    var _inline;
    var {
        children: c,
        inline,
        childrenAnimateOnMount
      } = _ref4,
      p = _objectWithoutProperties(_ref4, _excluded);
    var children = c;
    if (!children.type) children = !inline ? h$1("div", null, children) : h$1("span", null, children);
    (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    var transitionProps = useCreateSwappableProps({
      inline
    }, _objectSpread(_objectSpread({}, p), {}, {
      ref
    }));
    var mergedWithChildren = useMergedProps(transitionProps, children.props);
    var animateOnMount = _(childrenAnimateOnMount !== null && childrenAnimateOnMount !== void 0 ? childrenAnimateOnMount : false);
    h(() => {
      animateOnMount.current = true;
    }, []);
    var contextValue = _({
      getAnimateOnMount: () => {
        return animateOnMount.current;
      }
    });
    return h$1(SwappableContext.Provider, {
      value: contextValue.current
    }, q$1(children, mergedWithChildren));
  }));
  // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
  // Not perfect, but it's not supposed to be. `inline` is for perfect.
  var inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);
  function getTimeoutDuration(element) {
    return Math.max(...window.getComputedStyle(element || document.body).getPropertyValue("transition-duration").split(",").map(str => {
      if (str.endsWith("ms")) return +str.substring(0, str.length - 2);
      if (str.endsWith("s")) return +str.substring(0, str.length - 1) * 1000;
      return 1000;
    }));
  }
  function parseState(nextState) {
    return nextState.split("-");
  }
  /**
   * Provide props that can be used to animate a transition.
   *
   * @param param0
   * @returns
   */
  function useTransition(_ref5) {
    var _animateOnMount, _measure, _easingIn, _easingOut;
    var {
        transitionParameters: {
          propsIncoming: {
            children
          },
          show,
          animateOnMount,
          measure,
          exitVisibility,
          duration,
          delayMountUntilShown,
          easing,
          easingIn,
          easingOut,
          onVisibilityChange
        }
      } = _ref5,
      p = _objectWithoutProperties(_ref5.transitionParameters.propsIncoming, _excluded2);
    //const [isVisible, setIsVisible] = useState(false);
    var {
      getAnimateOnMount
    } = q(SwappableContext);
    exitVisibility || (exitVisibility = "hidden");
    (_animateOnMount = animateOnMount) !== null && _animateOnMount !== void 0 ? _animateOnMount : animateOnMount = getAnimateOnMount();
    (_measure = measure) !== null && _measure !== void 0 ? _measure : measure = false;
    //const getDurationOverride = useStableGetter(d);
    useEnsureStability("useTransition", onVisibilityChange);
    var getExitVisibility = useStableGetter(exitVisibility);
    var {
      GetBaseClass,
      GetEnterClass,
      GetExitClass,
      GetMeasureClass,
      GetInitClass,
      GetTransitionClass,
      GetFinalizeClass,
      GetDirectionClass,
      GetPhaseClass
    } = useCssClasses();
    var {
      refElementReturn,
      refElementReturn: {
        getElement,
        propsStable
      }
    } = useRefElement({});
    var cssProperties = _({});
    var classNames = _(new Set([// This is removed during useLayoutEffect on the first render
    // (at least once `show` is non-null)
    "".concat(GetBaseClass(), "-pending")]));
    var handleTransitionFinished = T$1(() => {
      var state = getState();
      console.assert(!!state);
      if (state) {
        var [direction, phase] = parseState(state);
        if (phase == "transition") {
          setState("".concat(direction, "-finalize"));
          if (timeoutHandle.current > 0) {
            var _timeoutClearFunction;
            (_timeoutClearFunction = timeoutClearFunction.current) === null || _timeoutClearFunction === void 0 ? void 0 : _timeoutClearFunction.call(timeoutClearFunction, timeoutHandle.current);
            timeoutHandle.current = -1;
          }
        }
      }
    }, []);
    var otherProps = _({
      onTransitionEnd: e => {
        if (e.target == getElement() && e.elapsedTime) {
          handleTransitionFinished();
        }
      }
    });
    var hasMounted = _(false);
    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    var updateClasses = T$1((element, direction, phase) => {
      if (element == null) return;
      var exitVisibility = getExitVisibility();
      var allClassesToRemove = ["".concat(GetBaseClass(), "-").concat(GetEnterClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetMeasureClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetInitClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetTransitionClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetFinalizeClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetMeasureClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetInitClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetTransitionClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetFinalizeClass()), "".concat(GetBaseClass(), "-ev-", "inert"), "".concat(GetBaseClass(), "-ev-", "removed"), "".concat(GetBaseClass(), "-ev-", "hidden"), "".concat(GetBaseClass(), "-ev-", "visible"), "".concat(GetBaseClass(), "-pending")];
      var allClassesToAdd = ["".concat(GetBaseClass()), "".concat(GetBaseClass(), "-").concat(GetDirectionClass(direction)), phase ? "".concat(GetBaseClass(), "-").concat(GetDirectionClass(direction), "-").concat(GetPhaseClass(phase)) : "", "".concat(GetBaseClass(), "-ev-").concat(exitVisibility)];
      element.classList.remove(...allClassesToRemove);
      allClassesToRemove.map(v => classNames.current.delete(v));
      element.classList.add(...allClassesToAdd);
      allClassesToAdd.map(v => classNames.current.add(v));
    }, []);
    /**
     * Updates a single "measure" variable (or removes it)
     */
    var updateSizeProperty = T$1((element, varName, value) => {
      if (value != null) {
        value = "".concat(value, "px");
        element.style.setProperty(varName, value);
        cssProperties.current[varName] = value;
      } else {
        element.style.removeProperty(varName);
        delete cssProperties.current[varName];
      }
    }, []);
    /**
     * Adds the "measure" variupdateClassesables to the element if requested.
     */
    var measureElementAndUpdateProperties = T$1((element, measure) => {
      if (element) {
        var _size, _size2, _size3, _size4;
        var size = null;
        if (measure) {
          size = element.getBoundingClientRect();
        }
        updateSizeProperty(element, "--".concat(GetBaseClass(), "-measure-top"), (_size = size) === null || _size === void 0 ? void 0 : _size.top);
        updateSizeProperty(element, "--".concat(GetBaseClass(), "-measure-left"), (_size2 = size) === null || _size2 === void 0 ? void 0 : _size2.left);
        updateSizeProperty(element, "--".concat(GetBaseClass(), "-measure-width"), (_size3 = size) === null || _size3 === void 0 ? void 0 : _size3.width);
        updateSizeProperty(element, "--".concat(GetBaseClass(), "-measure-height"), (_size4 = size) === null || _size4 === void 0 ? void 0 : _size4.height);
      }
    }, []);
    // We use both useTimeout and requestAnimationFrame for timing certain things --
    // raf is used for changing from init to transition (would use queueMicrotask but it can't be cancelled)
    // setTimeout is used for changing from transition to finalize (as a backup in case transitionend doesn't fire)
    //
    // In order to avoid stale callbacks running (i.e. when we rapidly switch between visible and not)
    // we need to make sure we accurately cancel anything that can change our state on a delay.
    //
    // Also of note, we store "(f) => window.clearTimeout(f)" instead of just "window.clearTimeout" because
    // of the implicit window object -- problems with a missing `this` object and all that nonsense.
    var timeoutHandle = _(-1);
    var timeoutClearFunction = _(null);
    /**
     * Any time the state changes, there's some logic we need to run:
     *
     * * If we're changing to an `init` phase, update the classes, then wait a moment and then change to the `transition` phase.
     * * If we're changing to a `transition` phase, update the classes, then wait until the transition completes, then change to the `finalize` phase.
     *
     * Any change in state or classes/styles does not implicitly cause a re-render.
     */
    var onStateChange = T$1((nextState, prevState, reason) => {
      if (nextState == null) return;
      var [nextDirection, nextPhase] = parseState(nextState);
      var element = getElement();
      // Make sure no stale change code ever runs
      if (timeoutHandle.current >= 0 && timeoutClearFunction.current) timeoutClearFunction.current(timeoutHandle.current);
      // Handle inert props/property
      var exitVisibility = getExitVisibility();
      if (exitVisibility) {
        var inert = exitVisibility == "inert" && nextDirection == "exit" && nextPhase == "finalize" ? true : undefined;
        if (inert) otherProps.current.inert = true;else delete otherProps.current["inert"];
        if (element) element.inert = inert || false;
      }
      onVisibilityChange === null || onVisibilityChange === void 0 ? void 0 : onVisibilityChange(nextDirection == "enter" || nextDirection == "exit" && nextPhase != "finalize");
      updateClasses(element, nextDirection, nextPhase);
      if (element && (nextPhase == "init" || nextPhase == "transition")) forceReflow(element);
      switch (nextPhase) {
        case "measure":
          {
            if (element) measureElementAndUpdateProperties(element, true);
            //setState(`${nextDirection}-init`);
            updateClasses(element, nextDirection, "init");
            if (element) forceReflow(element);
            // !!Intentional fall-through!!
          }

        case "init":
          {
            timeoutHandle.current = requestAnimationFrame(() => {
              setState("".concat(nextDirection, "-transition"));
            });
            timeoutClearFunction.current = f => cancelAnimationFrame(f);
            break;
          }
        case "transition":
          {
            timeoutHandle.current = setTimeout(() => {
              handleTransitionFinished();
            }, getTimeoutDuration(element) * 1.5);
            timeoutClearFunction.current = f => clearTimeout(f);
            break;
          }
        case "finalize":
          {
            // Nothing to do or schedule or anything -- we just update our classes and we're done.
            timeoutClearFunction.current = null; // Does this make it more or less clear?
            break;
          }
        default:
          {
            debugger; // Intentional
            console.log("Invalid state used in transition: ".concat(nextState, ". Previous state was ").concat(prevState !== null && prevState !== void 0 ? prevState : "null"));
            break;
          }
      }
    }, []);
    var [getState, setState] = usePassiveState(onStateChange, returnNull, runImmediately);
    // When we mount, and every time thereafter that `show` changes,
    // change our current state according to that `show` value.
    s(() => {
      // If `show` is null, then we don't change anything.
      if (show == null) return;
      // `show` is true or false (as opposed to null).
      // If this is our first time seeing a non-null value, 
      // then remove the class that indicates the no transition logic has started.
      // (Because this is useLayoutEffect, it will take effect before the class's effects are painted)
      if (!hasMounted.current) {
        classNames.current.delete("".concat(GetBaseClass(), "-pending"));
        var element = getElement();
        if (element) {
          element.classList.remove("".concat(GetBaseClass(), "-pending"));
          // Because the pending class often makes this hidden or d-none, 
          // force a reflow juuust to be safe.
          forceReflow(element);
        }
      }
      var currentState = getState();
      var nextPhase = measure ? "measure" : "init";
      if (currentState) {
        var [currentDirection, currentPhase] = parseState(currentState);
        if (currentPhase != "finalize") nextPhase = "transition";
      }
      // Note: the setState change handler runs immediately with no debounce.
      if (show) {
        if (hasMounted.current || animateOnMount) setState("enter-".concat(nextPhase));else setState("enter-finalize");
      } else {
        if (hasMounted.current || animateOnMount) setState("exit-".concat(nextPhase));else setState("exit-finalize");
      }
      hasMounted.current = true;
    }, [measure, show]);
    if (duration != null) cssProperties.current["--".concat(GetBaseClass(), "-duration")] = duration + "ms";else delete cssProperties.current["--".concat(GetBaseClass(), "-duration")];
    (_easingIn = easingIn) !== null && _easingIn !== void 0 ? _easingIn : easingIn = easing;
    (_easingOut = easingOut) !== null && _easingOut !== void 0 ? _easingOut : easingOut = easing;
    if (easingOut != null) cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetExitClass(), "-timing-function")] = easingOut;else delete cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetExitClass(), "-timing-function")];
    if (easingIn != null) cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-timing-function")] = easingIn;else delete cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-timing-function")];
    // No matter what delayMountUntilShown is,
    // once we've rendered our children once, 
    // ensure that we don't unmount them again and waste all that work.
    // (If you really need this you can just unmount the entire transition itself)
    var definitelyShouldMountChildren = show || !delayMountUntilShown;
    var hasRenderedChildren = _(false);
    var renderChildren = definitelyShouldMountChildren || hasRenderedChildren.current;
    h(() => {
      if (definitelyShouldMountChildren) hasRenderedChildren.current || (hasRenderedChildren.current = true);
    }, [hasRenderedChildren.current ? false : definitelyShouldMountChildren]);
    var childrenIsVnode = children && children.type && children.props;
    var finalProps = useMergedProps(p, propsStable, otherProps.current, {
      className: [...classNames.current, "".concat(GetBaseClass(), "-ev-").concat(exitVisibility), "".concat(GetBaseClass(), "-inline-direction-", "ltr"), "".concat(GetBaseClass(), "-block-direction-", "ttb")].join(" "),
      style: cssProperties.current
    }, childrenIsVnode ? _objectSpread({
      ref: children.ref
    }, children.props) : {});
    var context = _({
      getAnimateOnMount: returnFalse
    }).current;
    var modifiedChildren;
    if (childrenIsVnode) {
      modifiedChildren = h$1(SwappableContext.Provider, {
        value: context
      }, q$1(children, finalProps));
    } else {
      modifiedChildren = h$1(SwappableContext.Provider, {
        value: context
      }, h$1("span", _objectSpread({}, finalProps), children));
    }
    return renderChildren ? modifiedChildren : null;
  }
  function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    var p = globalThis._dummy;
    globalThis._dummy = e.getBoundingClientRect();
    globalThis._dummy = e.style.opacity;
    globalThis._dummy = e.style.transform;
    globalThis._dummy = p;
    return e;
  }

  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useBasePropsFade(_ref6) {
    var {
      fadeParameters: {
        fadeMin,
        fadeMax
      }
    } = _ref6;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-fade"),
      style: {
        ["--".concat(GetBaseClass(), "-fade-min")]: fadeMin !== null && fadeMin !== void 0 ? fadeMin : 0,
        ["--".concat(GetBaseClass(), "-fade-max")]: fadeMax !== null && fadeMax !== void 0 ? fadeMax : 1
      }
    };
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
  var Fade = R(forwardElementRef(function Fade(_ref7, ref) {
    var {
        duration,
        delayMountUntilShown,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref7,
      rest = _objectWithoutProperties(_ref7, _excluded3);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(_objectSpread({
          ref
        }, rest), useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }))
      }
    });
  }));
  function useBasePropsClip(_ref8) {
    var _ref9, _ref10, _ref11, _ref12;
    var {
      clipParameters: {
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline
      }
    } = _ref8;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: clsx("".concat(GetBaseClass(), "-clip")),
      style: {
        ["--".concat(GetBaseClass(), "-clip-origin-inline")]: (_ref9 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref9 !== void 0 ? _ref9 : 0.5,
        ["--".concat(GetBaseClass(), "-clip-origin-block")]: (_ref10 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref10 !== void 0 ? _ref10 : 0,
        ["--".concat(GetBaseClass(), "-clip-min-inline")]: (_ref11 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref11 !== void 0 ? _ref11 : 1,
        ["--".concat(GetBaseClass(), "-clip-min-block")]: (_ref12 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref12 !== void 0 ? _ref12 : 0
      }
    };
  }
  var Clip = R(forwardElementRef(function Clip(_ref13, ref) {
    var {
        duration,
        delayMountUntilShown,
        clipOrigin,
        clipOriginInline,
        clipOriginBlock,
        clipMin,
        clipMinInline,
        clipMinBlock,
        show,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref13,
      rest = _objectWithoutProperties(_ref13, _excluded4);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsClip({
          clipParameters: {
            clipMin,
            clipMinInline,
            clipMinBlock,
            clipOrigin,
            clipOriginInline,
            clipOriginBlock
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  var ClipFade = R(forwardElementRef(function ClipFade(_ref14, ref) {
    var {
        delayMountUntilShown,
        duration,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline,
        exitVisibility,
        onVisibilityChange
      } = _ref14,
      rest = _objectWithoutProperties(_ref14, _excluded5);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsClip({
          clipParameters: {
            clipMin,
            clipMinInline,
            clipMinBlock,
            clipOrigin,
            clipOriginInline,
            clipOriginBlock
          }
        }), useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */
  function useBasePropsCollapse(_ref15) {
    var {
      collapseParameters: {
        minBlockSize
      }
    } = _ref15;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-collapse"),
      style: {
        ["--".concat(GetBaseClass(), "-collapse-min-block")]: minBlockSize !== null && minBlockSize !== void 0 ? minBlockSize : 0
      }
    };
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
  var Collapse = R(forwardElementRef(function Collapse(_ref16, ref) {
    var {
        show,
        duration,
        delayMountUntilShown,
        minBlockSize,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref16,
      rest = _objectWithoutProperties(_ref16, _excluded6);
    return useTransition({
      transitionParameters: {
        measure: true,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsCollapse({
          collapseParameters: {
            minBlockSize
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  var CollapseFade = R(forwardElementRef(function CollapseFade(_ref17, ref) {
    var {
        show,
        duration,
        animateOnMount,
        delayMountUntilShown,
        fadeMin,
        fadeMax,
        exitVisibility,
        minBlockSize,
        onVisibilityChange
      } = _ref17,
      rest = _objectWithoutProperties(_ref17, _excluded7);
    return useTransition({
      transitionParameters: {
        measure: true,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), useBasePropsCollapse({
          collapseParameters: {
            minBlockSize
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));

  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsFlip(_ref18) {
    var _useLastNonNullValue, _useLastNonNullValue2;
    var {
      flipParameters: {
        flipAngleBlock,
        flipAngleInline,
        flipPerspective
      }
    } = _ref18;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-flip"),
      style: {
        ["--".concat(GetBaseClass(), "-flip-angle-inline")]: "".concat((_useLastNonNullValue = useLastNonNullValue(flipAngleInline)) !== null && _useLastNonNullValue !== void 0 ? _useLastNonNullValue : 0, "deg"),
        ["--".concat(GetBaseClass(), "-flip-angle-block")]: "".concat((_useLastNonNullValue2 = useLastNonNullValue(flipAngleBlock)) !== null && _useLastNonNullValue2 !== void 0 ? _useLastNonNullValue2 : 0, "deg"),
        ["--".concat(GetBaseClass(), "-perspective")]: "".concat(flipPerspective !== null && flipPerspective !== void 0 ? flipPerspective : 800, "px")
      }
    };
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
  var Flip = R(forwardElementRef(function Flip(_ref19, ref) {
    var {
        duration,
        delayMountUntilShown,
        flipAngleInline,
        flipAngleBlock,
        flipPerspective,
        show,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref19,
      rest = _objectWithoutProperties(_ref19, _excluded8);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsFlip({
          flipParameters: {
            flipAngleBlock,
            flipAngleInline,
            flipPerspective
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));

  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsSlide(_ref20) {
    var _slideTargetInline, _slideTargetBlock;
    var {
      slideParameters: {
        slideTargetInline,
        slideTargetBlock
      }
    } = _ref20;
    slideTargetInline = useLastNonNullValue(slideTargetInline);
    slideTargetBlock = useLastNonNullValue(slideTargetBlock);
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-slide"),
      style: {
        ["--".concat(GetBaseClass(), "-slide-target-inline")]: "".concat((_slideTargetInline = slideTargetInline) !== null && _slideTargetInline !== void 0 ? _slideTargetInline : 0),
        ["--".concat(GetBaseClass(), "-slide-target-block")]: "".concat((_slideTargetBlock = slideTargetBlock) !== null && _slideTargetBlock !== void 0 ? _slideTargetBlock : 0)
      }
    };
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
  var Slide = R(forwardElementRef(function Slide(_ref21, ref) {
    var {
        duration,
        slideTargetInline,
        slideTargetBlock,
        show,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown
      } = _ref21,
      rest = _objectWithoutProperties(_ref21, _excluded9);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        propsIncoming: useMergedProps(useBasePropsSlide({
          slideParameters: {
            slideTargetBlock,
            slideTargetInline
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  var SlideFade = R(forwardElementRef(function SlideFade(_ref22, ref) {
    var {
        duration,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        delayMountUntilShown,
        slideTargetBlock,
        slideTargetInline,
        exitVisibility,
        onVisibilityChange
      } = _ref22,
      rest = _objectWithoutProperties(_ref22, _excluded10);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), useBasePropsSlide({
          slideParameters: {
            slideTargetBlock,
            slideTargetInline
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsZoom(_ref23) {
    var _ref24, _ref25, _ref26, _ref27;
    var {
      zoomParameters: {
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock
      }
    } = _ref23;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-zoom"),
      style: {
        ["--".concat(GetBaseClass(), "-zoom-origin-inline")]: "".concat((_ref24 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref24 !== void 0 ? _ref24 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-origin-block")]: "".concat((_ref25 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref25 !== void 0 ? _ref25 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-min-inline")]: "".concat((_ref26 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref26 !== void 0 ? _ref26 : 0),
        ["--".concat(GetBaseClass(), "-zoom-min-block")]: "".concat((_ref27 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref27 !== void 0 ? _ref27 : 0)
      }
    };
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  var Zoom = R(forwardElementRef(function Zoom(_ref28, ref) {
    var {
        duration,
        delayMountUntilShown,
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock,
        show,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref28,
      rest = _objectWithoutProperties(_ref28, _excluded11);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsZoom({
          zoomParameters: {
            zoomMin,
            zoomMinBlock,
            zoomMinInline,
            zoomOrigin,
            zoomOriginBlock,
            zoomOriginInline
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  var SlideZoom = R(forwardElementRef(function SlideZoom(_ref29, ref) {
    var {
        duration,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        show,
        animateOnMount,
        delayMountUntilShown,
        slideTargetBlock,
        slideTargetInline,
        exitVisibility,
        onVisibilityChange
      } = _ref29,
      rest = _objectWithoutProperties(_ref29, _excluded12);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(_objectSpread({
          ref
        }, rest), useBasePropsZoom({
          zoomParameters: {
            zoomMin,
            zoomMinBlock,
            zoomMinInline,
            zoomOrigin,
            zoomOriginBlock,
            zoomOriginInline
          }
        }), useBasePropsSlide({
          slideParameters: {
            slideTargetBlock,
            slideTargetInline
          }
        }))
      }
    });
  }));
  var SlideZoomFade = R(forwardElementRef(function SlideZoomFade(_ref30, ref) {
    var {
        duration,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        show,
        animateOnMount,
        delayMountUntilShown,
        slideTargetBlock,
        slideTargetInline,
        fadeMax,
        fadeMin,
        exitVisibility,
        onVisibilityChange
      } = _ref30,
      rest = _objectWithoutProperties(_ref30, _excluded13);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsZoom({
          zoomParameters: {
            zoomMin,
            zoomMinBlock,
            zoomMinInline,
            zoomOrigin,
            zoomOriginBlock,
            zoomOriginInline
          }
        }), useBasePropsSlide({
          slideParameters: {
            slideTargetBlock,
            slideTargetInline
          }
        }), useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  var ZoomFade = R(forwardElementRef(function ZoomFade(_ref31, ref) {
    var {
        duration,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        delayMountUntilShown,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        exitVisibility,
        onVisibilityChange
      } = _ref31,
      rest = _objectWithoutProperties(_ref31, _excluded14);
    return useTransition({
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), useBasePropsZoom({
          zoomParameters: {
            zoomMin,
            zoomMinBlock,
            zoomMinInline,
            zoomOrigin,
            zoomOriginBlock,
            zoomOriginInline
          }
        }), _objectSpread({
          ref
        }, rest))
      }
    });
  }));
  function halfText(input, times) {
    if (times <= 0) return input;
    input = input.substr(input.length / 2);
    if (times == 1) return input;
    return halfText(input, times - 1);
  }
  function Demo() {
    //const [mounted, setMounted] = useState(false);
    var [animateOnMount, setAnimateOnMount] = p(true);
    var [writingMode, setWritingMode] = p("horizontal");
    var [show1, setShow1] = p("pending");
    var [show3, setShow3] = p(0);
    var [reflow, setReflow] = p("hidden");
    var [duration, setDuration] = p(500);
    var [text, setText] = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    var [flicker, setFlicker] = p(0);
    s(() => {
      if (flicker > 0) {
        setShow1(s => s == "showing" ? "hiding" : "showing");
        setFlicker(f => f - 1);
      }
    }, [flicker]);
    //const onInput1 = useCallback((e: h.JSX.TargetedEvent<HTMLInputElement>) => { setShow1(o => !o); e.preventDefault(); }, []);
    var onInput3 = T$1(e => {
      setText(e.target.value);
      e.preventDefault();
    }, []);
    var onInput4 = T$1(e => {
      setReflow("hidden");
      e.preventDefault();
    }, []);
    var onInput5 = T$1(e => {
      setReflow("removed");
      e.preventDefault();
    }, []);
    var onInput5b = T$1(e => {
      setReflow("visible");
      e.preventDefault();
    }, []);
    var onInput6 = T$1(e => {
      setWritingMode("horizontal");
      e.preventDefault();
    }, []);
    var onInput7 = T$1(e => {
      setWritingMode("vertical");
      e.preventDefault();
    }, []);
    var onInput8 = T$1(e => {
      setDuration(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onInputA = T$1(e => {
      setShow3(0);
      e.preventDefault();
    }, []);
    var onInputB = T$1(e => {
      setShow3(1);
      e.preventDefault();
    }, []);
    var onInputC = T$1(e => {
      setShow3(2);
      e.preventDefault();
    }, []);
    return h$1(p$1, null, h$1("div", {
      id: "controls"
    }, h$1("h1", null, "Preact Transition"), h$1("div", {
      className: "radiogroup"
    }, h$1("button", {
      onClick: () => setFlicker(1)
    }, "Flicker 1"), h$1("button", {
      onClick: () => setFlicker(2)
    }, "Flicker 2"), h$1("button", {
      onClick: () => setFlicker(3)
    }, "Flicker 3"), h$1("button", {
      onClick: () => setFlicker(4)
    }, "Flicker 4")), h$1("div", {
      className: "radiogroup"
    }, h$1("div", null, "Outer card visible state: "), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("unmounted");
      },
      checked: show1 == "unmounted"
    }), "Unmounted"), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("pending");
      },
      checked: show1 == "pending"
    }), "Mounted, `show` is `null`"), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("hiding");
      },
      checked: show1 == "hiding"
    }), "Mounted, `show` is `false`"), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("showing");
      },
      checked: show1 == "showing"
    }), "Mounted, `show` is `true`")), h$1("div", {
      className: "radiogroup"
    }, h$1("div", null, "Outer card mount animation: "), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-mount-animate",
      onInput: e => {
        e.preventDefault();
        setAnimateOnMount(false);
      },
      checked: animateOnMount == false
    }), "Don't animate on mount"), h$1("label", {
      className: ""
    }, h$1("input", {
      type: "radio",
      name: "outer-card-mount-animate",
      onInput: e => {
        e.preventDefault();
        setAnimateOnMount(true);
      },
      checked: animateOnMount == true
    }), "Animate on mount")), h$1("div", {
      className: "radiogroup"
    }, h$1("div", null, "Visible Swappable child: "), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputA,
      checked: show3 == 0
    }), "#0"), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputB,
      checked: show3 == 1
    }), "#1"), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputC,
      checked: show3 == 2
    }), "#2")), h$1("div", {
      className: "radiogroup"
    }, h$1("div", null, "When transitioned out:"), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput5b,
      checked: reflow == "visible"
    }), "Do not hide (incl. focusables)"), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput4,
      checked: reflow == "hidden"
    }), "visibility: hidden"), h$1("label", {
      className: "code-mimic"
    }, h$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput5,
      checked: reflow == "removed"
    }), "display: none")), h$1("div", null, h$1("label", null, h$1("input", {
      onInput: onInput8,
      type: "number",
      value: duration
    }), " Duration")), h$1("div", {
      className: "radiogroup"
    }, h$1("div", null, "Demo's writing mode: "), h$1("label", null, h$1("input", {
      type: "radio",
      name: "writing-mode",
      onInput: onInput6,
      checked: writingMode == "horizontal"
    }), "Horizontal"), h$1("label", null, h$1("input", {
      type: "radio",
      name: "writing-mode",
      onInput: onInput7,
      checked: writingMode == "vertical"
    }), "Vertical")), h$1("textarea", {
      cols: 30,
      rows: 5,
      onInput: onInput3,
      value: text
    })), h$1("div", {
      id: "root-body",
      className: "writing-mode-".concat(writingMode),
      style: {
        ["--".concat(useCssClasses().GetBaseClass(), "-duration")]: "".concat(duration, "ms")
      },
      key: writingMode
    }, h$1(FadeDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(SlideDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ZoomDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ClipDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(FlipDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ZoomSlideDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(CollapseDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    })));
  }
  function FadeDemo(_ref32) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref32;
    var [min, setMin] = p(0);
    var [max, setMax] = p(1);
    var onMinInput = T$1(e => {
      setMin(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMaxInput = T$1(e => {
      setMax(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var C = Fade;
    var CS = "Fade";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      fadeMin: min,
      fadeMax: max
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Fade"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Minimum fade ", h$1("input", {
      onInput: onMinInput,
      value: min,
      type: "number",
      min: 0,
      max: 1,
      step: 0.0125
    })), h$1("label", null, "Maximum fade ", h$1("input", {
      onInput: onMaxInput,
      value: max,
      type: "number",
      min: 0,
      max: 1,
      step: 0.0125
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      fadeMin: min,
      fadeMax: max
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(min != 0 ? " \n  fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n  fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(min != 0 ? " \n        fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n        fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  function ClipDemo(_ref33) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref33;
    var [originX, setOriginX] = p(0.5);
    var [originY, setOriginY] = p(0);
    var [minX, setMinX] = p(1);
    var [minY, setMinY] = p(0);
    var [withFade, setWithFade] = p(true);
    p(false);
    var onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    var C = withFade ? ClipFade : Clip;
    var CS = withFade ? "ClipFade" : "Clip";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      clipOriginInline: originX,
      clipOriginBlock: originY,
      clipMinInline: minX,
      clipMinBlock: minY
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Clip"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Origin to center the effect around on the inline-axis position (X-axis in English, etc.) ", h$1("input", {
      onInput: onOriginXInput,
      value: originX,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  ", h$1("input", {
      onInput: onOriginYInput,
      value: originY,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Minimum size on the inline-axis ", h$1("input", {
      onInput: onMinXInput,
      value: minX,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "Minimum size on the block-axis  ", h$1("input", {
      onInput: onMinYInput,
      value: minY,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "With fade", h$1("input", {
      checked: withFade,
      onInput: onWithFadeInput,
      type: "checkbox"
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      clipMinInline: minX,
      clipMinBlock: minY,
      clipOriginInline: originX,
      clipOriginBlock: originY
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  function ZoomSlideDemo(_ref34) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref34;
    var [originX, setOriginX] = p(0.5);
    var [originY, setOriginY] = p(0);
    var [minX, setMinX] = p(0.75);
    var [minY, setMinY] = p(0.75);
    var [slideX, setSlideX] = p(0.25);
    var [slideY, setSlideY] = p(0);
    var [withFade, setWithFade] = p(true);
    var onSlideXInput = T$1(e => {
      setSlideX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onSlideYInput = T$1(e => {
      setSlideY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    var onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var C = withFade ? SlideZoomFade : SlideZoom;
    var CS = withFade ? "SlideZoomFade" : "SlideZoom";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX * Math.sign(i - contentIndex) || null,
      slideTargetBlock: slideY * Math.sign(i - contentIndex) || null,
      zoomOriginInline: originX,
      zoomOriginBlock: originY,
      zoomMinInline: minX,
      zoomMinBlock: minY
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Zoom & Slide"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Transform origin on the inline-axis position (X-axis in English, etc.) ", h$1("input", {
      onInput: onOriginXInput,
      value: originX,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Transform origin on the block-axis position (Y-axis in English, etc.)  ", h$1("input", {
      onInput: onOriginYInput,
      value: originY,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Target block-axis position (X-axis in English, etc.) ", h$1("input", {
      onInput: onSlideXInput,
      value: slideX,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Target inline-axis position (Y-axis in English, etc.)  ", h$1("input", {
      onInput: onSlideYInput,
      value: slideY,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Minimum size on the inline-axis ", h$1("input", {
      onInput: onMinXInput,
      value: minX,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "Minimum size on the block-axis  ", h$1("input", {
      onInput: onMinYInput,
      value: minY,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "With fade", h$1("input", {
      checked: withFade,
      onInput: onWithFadeInput,
      type: "checkbox"
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX || null,
      slideTargetBlock: slideY || null,
      zoomMinInline: minX,
      zoomMinBlock: minY,
      zoomOriginInline: originX,
      zoomOriginBlock: originY
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n  slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n  slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}").concat(originX != 0.5 ? " \n        originX={".concat(originX, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n        slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n        slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  function ZoomDemo(_ref35) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref35;
    var [originX, setOriginX] = p(0.5);
    var [originY, setOriginY] = p(0);
    var [minX, setMinX] = p(0.75);
    var [minY, setMinY] = p(0.75);
    var [withFade, setWithFade] = p(true);
    var onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    var C = withFade ? ZoomFade : Zoom;
    var CS = withFade ? "ZoomFade" : "Zoom";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      zoomOriginInline: originX,
      zoomOriginBlock: originY,
      zoomMinInline: minX,
      zoomMinBlock: minY
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Zoom"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Transform origin on the inline-axis position (X-axis in English, etc.) ", h$1("input", {
      onInput: onOriginXInput,
      value: originX,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Transform origin on the block-axis position (Y-axis in English, etc.)  ", h$1("input", {
      onInput: onOriginYInput,
      value: originY,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Minimum size on the inline-axis ", h$1("input", {
      onInput: onMinXInput,
      value: minX,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "Minimum size on the block-axis  ", h$1("input", {
      onInput: onMinYInput,
      value: minY,
      type: "number",
      step: 0.125,
      min: 0,
      max: 1
    })), h$1("label", null, "With fade", h$1("input", {
      checked: withFade,
      onInput: onWithFadeInput,
      type: "checkbox"
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      zoomMinInline: minX,
      zoomMinBlock: minY,
      zoomOriginInline: originX,
      zoomOriginBlock: originY
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(exitVisibility ? " \n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  function SlideDemo(_ref36) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref36;
    var [slideX, setSlideX] = p(0.25);
    var [slideY, setSlideY] = p(0);
    var [withFade, setWithFade] = p(true);
    var onSlideXInput = T$1(e => {
      setSlideX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onSlideYInput = T$1(e => {
      setSlideY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    //const [bare, setBare] = useState(false);
    // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
    var C = withFade ? SlideFade : Slide;
    var CS = withFade ? "SlideFade" : "Slide";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX * Math.sign(i - contentIndex) || null,
      slideTargetBlock: slideY * Math.sign(i - contentIndex)
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Slide"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Target block-axis position (X-axis in English, etc.) ", h$1("input", {
      onInput: onSlideXInput,
      value: slideX,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "Target inline-axis position (Y-axis in English, etc.)  ", h$1("input", {
      onInput: onSlideYInput,
      value: slideY,
      type: "number",
      step: 0.125,
      min: -2,
      max: 2
    })), h$1("label", null, "With fade", h$1("input", {
      checked: withFade,
      onInput: onWithFadeInput,
      type: "checkbox"
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX || null,
      slideTargetBlock: slideY || null
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  slideTargetInline={").concat(slideX, "}\n  slideTargetBlock={").concat(slideY, "}\n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex, "}\n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}\n        slideTargetInline={").concat(slideX, " * Math.sign(0 - ").concat(contentIndex, ")}\n        slideTargetBlock={").concat(slideY, " * Math.sign(0 - ").concat(contentIndex, "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex, "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex, "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  function CollapseDemo(_ref37) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref37;
    var [minBlockSize, setMinBlockSize] = p("0px");
    var onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    var [withFade, setWithFade] = p(true);
    var C = withFade ? CollapseFade : Collapse;
    var CS = withFade ? "CollapseFade" : "Collapse";
    var onMinSize = T$1(e => {
      setMinBlockSize(e.target.value);
      e.preventDefault();
    }, []);
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      minBlockSize: minBlockSize
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Collapse"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Minimum size: ", h$1("input", {
      type: "text",
      value: minBlockSize,
      onInput: onMinSize
    })), h$1("label", null, "With fade", h$1("input", {
      checked: withFade,
      onInput: onWithFadeInput,
      type: "checkbox"
    })), h$1("div", null, "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."), h$1("div", null, "In general, only use this component if you ", h$1("em", null, "specifically"), " need its reflow transitioning properties, because it's very taxing on, well, ", h$1("em", null, "most"), " devices, unless you take other precautions. If you want a \"disappear in place without zooming out\", consider a Clip effect.")), h$1("div", null, cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      minBlockSize: minBlockSize
    }, h$1("div", null, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))))), h$1("code", null, h$1("pre", null, "<".concat(CS, " show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(minBlockSize && minBlockSize != "0px" ? " minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  {/* These cards have padding, \n      and height doesn't include that, \n      but a wrapper's would */}\n  <div>\n    <Swappable>\n      <div className=\"card\">\n        <").concat(CS, " \n          show={").concat(contentIndex.toString(), " == 0}").concat(minBlockSize && minBlockSize != "0px" ? " \n          minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " \n          exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n          <div className=\"card-contents\">\n             {text}\n          </div>\n        </").concat(CS, ">\n      </div>\n    </Swappable>\n  </div>\n</").concat(CS, ">\n<").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n<").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />")))));
  }
  function FlipDemo(_ref38) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref38;
    var [flipX, setFlipX] = p(0);
    var [flipY, setFlipY] = p(180);
    var onFlipXInput = T$1(e => {
      setFlipX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var onFlipYInput = T$1(e => {
      setFlipY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    var C = Flip;
    var CS = "Flip";
    var makeChild = i => h$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      flipAngleInline: flipX * Math.sign(i - contentIndex) || null,
      flipAngleBlock: flipY * Math.sign(i - contentIndex) || null
    }, h$1("div", {
      className: "card-contents"
    }, halfText(text, i), h$1("div", null, h$1("button", null, "Focusable element"))));
    return h$1("div", {
      className: "demo-section"
    }, h$1("h2", null, "Flip"), h$1("div", {
      className: "demo"
    }, h$1("div", {
      className: "demo-controls"
    }, h$1("label", null, "Rotate on inline axis ", h$1("input", {
      type: "number",
      onInput: onFlipXInput,
      value: flipX
    })), h$1("label", null, "Rotate along block axis ", h$1("input", {
      type: "number",
      onInput: onFlipYInput,
      value: flipY
    }))), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      flipAngleInline: flipX,
      flipAngleBlock: flipY
    }, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  flipAngleInline={").concat(JSON.stringify(flipX), "} \n  flipAngleBlock={").concat(JSON.stringify(flipY), "} \n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}\n        flipAngleInline={").concat(JSON.stringify(flipX), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        flipAngleBlock={").concat(JSON.stringify(flipY), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  requestAnimationFrame(() => {
    P(h$1(Demo, null), document.getElementById("root"));
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMDIzOTc5ODY3NmViODJjNTg1NmEzMzYzOWUyZTAxZDVlNmQzYTBmYl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMDIzOTc5ODY3NmViODJjNTg1NmEzMzYzOWUyZTAxZDVlNmQzYTBmYl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtZ2V0dGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4udHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMDIzOTc5ODY3NmViODJjNTg1NmEzMzYzOWUyZTAxZDVlNmQzYTBmYl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AwMjM5Nzk4Njc2ZWI4MmM1ODU2YTMzNjM5ZTJlMDFkNWU2ZDNhMGZiX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AwMjM5Nzk4Njc2ZWI4MmM1ODU2YTMzNjM5ZTJlMDFkNWU2ZDNhMGZiX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXByb3BzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vYmxvY2tpbmctZWxlbWVudHNAMC4xLjEvbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL3NyYy9ibG9ja2luZy1lbGVtZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbm9kZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL25vdy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL190cmltbWVkRW5kSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRyaW0uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL3RvTnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AwMjM5Nzk4Njc2ZWI4MmM1ODU2YTMzNjM5ZTJlMDFkNWU2ZDNhMGZiX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYXN5bmMudHN4Iiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy91dGlsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9QdXJlQ29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9tZW1vLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9mb3J3YXJkUmVmLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9DaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvc3VzcGVuc2UuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3N1c3BlbnNlLWxpc3QuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3JlbmRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDAyMzk3OTg2NzZlYjgyYzU4NTZhMzM2MzllMmUwMWQ1ZTZkM2EwZmJfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3RpbWluZy91c2UtYW5pbWF0aW9uLWZyYW1lLnRzeCIsIi4uL3NyYy91dGlsL2NvbnRleHQudHN4IiwiLi4vc3JjL3V0aWwvdXRpbC50c3giLCIuLi9zcmMvc3dhcHBhYmxlLnRzeCIsIi4uL3NyYy90cmFuc2l0aW9uYWJsZS50c3giLCIuLi9zcmMvZmFkZS50c3giLCIuLi9zcmMvY2xpcC50c3giLCIuLi9zcmMvY2xpcC1mYWRlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS50c3giLCIuLi9zcmMvY29sbGFwc2UtZmFkZS50c3giLCIuLi9zcmMvZmxpcC50c3giLCIuLi9zcmMvc2xpZGUudHN4IiwiLi4vc3JjL3NsaWRlLWZhZGUudHN4IiwiLi4vc3JjL3pvb20udHN4IiwiLi4vc3JjL3NsaWRlLXpvb20udHN4IiwiLi4vc3JjL3NsaWRlLXpvb20tZmFkZS50c3giLCIuLi9zcmMvem9vbS1mYWRlLnRzeCIsIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNUFRZX0FSUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdC8vIEB0cy1pZ25vcmUgV2UgY2hhbmdlIHRoZSB0eXBlIG9mIGBvYmpgIHRvIGJlIGBPICYgUGBcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yXG4gKiBJRTExIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlKClgLiBVc2luZyB0aGlzIGZ1bmN0aW9uXG4gKiBpcyBzbWFsbGVyIHRoYW4gaW5jbHVkaW5nIGEgZGVkaWNhdGVkIHBvbHlmaWxsLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwiaW1wb3J0IHsgX2NhdGNoRXJyb3IgfSBmcm9tICcuL2RpZmYvY2F0Y2gtZXJyb3InO1xuXG4vKipcbiAqIFRoZSBgb3B0aW9uYCBvYmplY3QgY2FuIHBvdGVudGlhbGx5IGNvbnRhaW4gY2FsbGJhY2sgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBjYWxsZWQgZHVyaW5nIHZhcmlvdXMgc3RhZ2VzIG9mIG91ciByZW5kZXJlci4gVGhpcyBpcyB0aGVcbiAqIGZvdW5kYXRpb24gb24gd2hpY2ggYWxsIG91ciBhZGRvbnMgbGlrZSBgcHJlYWN0L2RlYnVnYCwgYHByZWFjdC9jb21wYXRgLFxuICogYW5kIGBwcmVhY3QvaG9va3NgIGFyZSBiYXNlZCBvbi4gU2VlIHRoZSBgT3B0aW9uc2AgdHlwZSBpbiBgaW50ZXJuYWwuZC50c2BcbiAqIGZvciBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9uIGhvb2tzIChtb3N0IGVkaXRvcnMvSURFcyBhbGxvdyB5b3UgdG9cbiAqIGN0cmwrY2xpY2sgb3IgY21kK2NsaWNrIG9uIG1hYyB0aGUgdHlwZSBkZWZpbml0aW9uIGJlbG93KS5cbiAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfVxuICovXG5jb25zdCBvcHRpb25zID0ge1xuXHRfY2F0Y2hFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucztcbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gdmlydHVhbCBub2RlICh1c2VkIGZvciBKU1gpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogY29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IFtwcm9wc10gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4nKS5Db21wb25lbnRDaGlsZHJlbj59IFtjaGlsZHJlbl0gVGhlIGNoaWxkcmVuIG9mIHRoZSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IG51bGwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgbnVsbCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdC8vIF9uZXh0RG9tIG11c3QgYmUgaW5pdGlhbGl6ZWQgdG8gdW5kZWZpbmVkIGIvYyBpdCB3aWxsIGV2ZW50dWFsbHlcblx0XHQvLyBiZSBzZXQgdG8gZG9tLm5leHRTaWJsaW5nIHdoaWNoIGNhbiByZXR1cm4gYG51bGxgIGFuZCBpdCBpcyBpbXBvcnRhbnRcblx0XHQvLyB0byBiZSBhYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYW4gdW5pbml0aWFsaXplZCBfbmV4dERvbSBhbmRcblx0XHQvLyBhIF9uZXh0RG9tIHRoYXQgaGFzIGJlZW4gc2V0IHRvIGBudWxsYFxuXHRcdF9uZXh0RG9tOiB1bmRlZmluZWQsXG5cdFx0X2NvbXBvbmVudDogbnVsbCxcblx0XHRfaHlkcmF0aW5nOiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiBvcmlnaW5hbCA9PSBudWxsID8gKyt2bm9kZUlkIDogb3JpZ2luYWxcblx0fTtcblxuXHQvLyBPbmx5IGludm9rZSB0aGUgdm5vZGUgaG9vayBpZiB0aGlzIHdhcyAqbm90KiBhIGRpcmVjdCBjb3B5OlxuXHRpZiAob3JpZ2luYWwgPT0gbnVsbCAmJiBvcHRpb25zLnZub2RlICE9IG51bGwpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHsgY3VycmVudDogbnVsbCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGhlIGFyZ3VtZW50IGlzIGEgdmFsaWQgUHJlYWN0IFZOb2RlLlxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHJldHVybnMge3Zub2RlIGlzIGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEVsZW1lbnQgPSB2bm9kZSA9PlxuXHR2bm9kZSAhPSBudWxsICYmIHZub2RlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYW5kIHNjaGVkdWxlIGEgcmUtcmVuZGVyLlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7b2JqZWN0IHwgKChzOiBvYmplY3QsIHA6IG9iamVjdCkgPT4gb2JqZWN0KX0gdXBkYXRlIEEgaGFzaCBvZiBzdGF0ZVxuICogcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzIG9yIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiB0aGUgY3VycmVudFxuICogc3RhdGUgYW5kIHByb3BzIHJldHVybnMgYSBuZXcgcGFydGlhbCBzdGF0ZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG4gKiB1cGRhdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbih1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gbnVsbCAmJiB0aGlzLl9uZXh0U3RhdGUgIT09IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5fc3RhdGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdC8vIFNldCByZW5kZXIgbW9kZSBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHdoZXJlIHRoZSByZW5kZXIgcmVxdWVzdFxuXHRcdC8vIGlzIGNvbWluZyBmcm9tLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSBmb3JjZVVwZGF0ZSBzaG91bGQgbmV2ZXIgY2FsbFxuXHRcdC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdHRoaXMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAqIFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW5kZXgnKS5Db21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IG51bGwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9wYXJlbnQuX2NoaWxkcmVuLmluZGV4T2Yodm5vZGUpICsgMSlcblx0XHRcdDogbnVsbDtcblx0fVxuXG5cdGxldCBzaWJsaW5nO1xuXHRmb3IgKDsgY2hpbGRJbmRleCA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuXHRcdHNpYmxpbmcgPSB2bm9kZS5fY2hpbGRyZW5bY2hpbGRJbmRleF07XG5cblx0XHRpZiAoc2libGluZyAhPSBudWxsICYmIHNpYmxpbmcuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHQvLyBTaW5jZSB1cGRhdGVQYXJlbnREb21Qb2ludGVycyBrZWVwcyBfZG9tIHBvaW50ZXIgY29ycmVjdCxcblx0XHRcdC8vIHdlIGNhbiByZWx5IG9uIF9kb20gdG8gdGVsbCB1cyBpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYVxuXHRcdFx0Ly8gcmVuZGVyZWQgRE9NIG5vZGUsIGFuZCB3aGF0IHRoZSBmaXJzdCByZW5kZXJlZCBET00gbm9kZSBpc1xuXHRcdFx0cmV0dXJuIHNpYmxpbmcuX2RvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBnZXQgaGVyZSwgd2UgaGF2ZSBub3QgZm91bmQgYSBET00gbm9kZSBpbiB0aGlzIHZub2RlJ3MgY2hpbGRyZW4uXG5cdC8vIFdlIG11c3QgcmVzdW1lIGZyb20gdGhpcyB2bm9kZSdzIHNpYmxpbmcgKGluIGl0J3MgcGFyZW50IF9jaGlsZHJlbiBhcnJheSlcblx0Ly8gT25seSBjbGltYiB1cCBhbmQgc2VhcmNoIHRoZSBwYXJlbnQgaWYgd2UgYXJlbid0IHNlYXJjaGluZyB0aHJvdWdoIGEgRE9NXG5cdC8vIFZOb2RlIChtZWFuaW5nIHdlIHJlYWNoZWQgdGhlIERPTSBwYXJlbnQgb2YgdGhlIG9yaWdpbmFsIHZub2RlIHRoYXQgYmVnYW5cblx0Ly8gdGhlIHNlYXJjaClcblx0cmV0dXJuIHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IG51bGw7XG59XG5cbi8qKlxuICogVHJpZ2dlciBpbi1wbGFjZSByZS1yZW5kZXJpbmcgb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRsZXQgdm5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdG9sZERvbSA9IHZub2RlLl9kb20sXG5cdFx0cGFyZW50RG9tID0gY29tcG9uZW50Ll9wYXJlbnREb207XG5cblx0aWYgKHBhcmVudERvbSkge1xuXHRcdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRcdGNvbnN0IG9sZFZOb2RlID0gYXNzaWduKHt9LCB2bm9kZSk7XG5cdFx0b2xkVk5vZGUuX29yaWdpbmFsID0gdm5vZGUuX29yaWdpbmFsICsgMTtcblxuXHRcdGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHR2bm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZyAhPSBudWxsID8gW29sZERvbV0gOiBudWxsLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gbnVsbCA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogb2xkRG9tLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZ1xuXHRcdCk7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUpO1xuXG5cdFx0aWYgKHZub2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0XHR1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpIHtcblx0aWYgKCh2bm9kZSA9IHZub2RlLl9wYXJlbnQpICE9IG51bGwgJiYgdm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IHZub2RlLl9jaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLl9kb20gIT0gbnVsbCkge1xuXHRcdFx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgcXVldWVcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgcmVyZW5kZXJRdWV1ZSA9IFtdO1xuXG4vKlxuICogVGhlIHZhbHVlIG9mIGBDb21wb25lbnQuZGVib3VuY2VgIG11c3QgYXN5bmNocm9ub3VzbHkgaW52b2tlIHRoZSBwYXNzZWQgaW4gY2FsbGJhY2suIEl0IGlzXG4gKiBpbXBvcnRhbnQgdGhhdCBjb250cmlidXRvcnMgdG8gUHJlYWN0IGNhbiBjb25zaXN0ZW50bHkgcmVhc29uIGFib3V0IHdoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCwgZXRjLlxuICogZG8sIGFuZCB3aGVuIHRoZWlyIGVmZmVjdHMgd2lsbCBiZSBhcHBsaWVkLiBTZWUgdGhlIGxpbmtzIGJlbG93IGZvciBzb21lIGZ1cnRoZXIgcmVhZGluZyBvbiBkZXNpZ25pbmdcbiAqIGFzeW5jaHJvbm91cyBBUElzLlxuICogKiBbRGVzaWduaW5nIEFQSXMgZm9yIEFzeW5jaHJvbnldKGh0dHBzOi8vYmxvZy5penMubWUvMjAxMy8wOC9kZXNpZ25pbmctYXBpcy1mb3ItYXN5bmNocm9ueSlcbiAqICogW0NhbGxiYWNrcyBzeW5jaHJvbm91cyBhbmQgYXN5bmNocm9ub3VzXShodHRwczovL2Jsb2cub21ldGVyLmNvbS8yMDExLzA3LzI0L2NhbGxiYWNrcy1zeW5jaHJvbm91cy1hbmQtYXN5bmNocm9ub3VzLylcbiAqL1xuXG5sZXQgcHJldkRlYm91bmNlO1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPT0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ1xuXHQpIHtcblx0XHRwcmV2RGVib3VuY2UgPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nO1xuXHRcdChwcmV2RGVib3VuY2UgfHwgc2V0VGltZW91dCkocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHRsZXQgcXVldWU7XG5cdHdoaWxlICgocHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoKSkge1xuXHRcdHF1ZXVlID0gcmVyZW5kZXJRdWV1ZS5zb3J0KChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGgpO1xuXHRcdHJlcmVuZGVyUXVldWUgPSBbXTtcblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRpZiAoYy5fZGlydHkpIHJlbmRlckNvbXBvbmVudChjKTtcblx0XHR9KTtcblx0fVxufVxuXG5wcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcbiIsImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCBsZXQgaSA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY29udGV4dElkKSB7XG5cdGNvbnRleHRJZCA9ICdfX2NDJyArIGkrKztcblxuXHRjb25zdCBjb250ZXh0ID0ge1xuXHRcdF9pZDogY29udGV4dElkLFxuXHRcdF9kZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRcdENvbnN1bWVyKHByb3BzLCBjb250ZXh0VmFsdWUpIHtcblx0XHRcdC8vIHJldHVybiBwcm9wcy5jaGlsZHJlbihcblx0XHRcdC8vIFx0Y29udGV4dFtjb250ZXh0SWRdID8gY29udGV4dFtjb250ZXh0SWRdLnByb3BzLnZhbHVlIDogZGVmYXVsdFZhbHVlXG5cdFx0XHQvLyApO1xuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuKGNvbnRleHRWYWx1ZSk7XG5cdFx0fSxcblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRcdFByb3ZpZGVyKHByb3BzKSB7XG5cdFx0XHRpZiAoIXRoaXMuZ2V0Q2hpbGRDb250ZXh0KSB7XG5cdFx0XHRcdGxldCBzdWJzID0gW107XG5cdFx0XHRcdGxldCBjdHggPSB7fTtcblx0XHRcdFx0Y3R4W2NvbnRleHRJZF0gPSB0aGlzO1xuXG5cdFx0XHRcdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gY3R4O1xuXG5cdFx0XHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24oX3Byb3BzKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHJvcHMudmFsdWUgIT09IF9wcm9wcy52YWx1ZSkge1xuXHRcdFx0XHRcdFx0Ly8gSSB0aGluayB0aGUgZm9yY2VkIHZhbHVlIHByb3BhZ2F0aW9uIGhlcmUgd2FzIG9ubHkgbmVlZGVkIHdoZW4gYG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdgIHdhcyBiZWluZyBieXBhc3NlZDpcblx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvY29tbWl0LzRkMzM5ZmI4MDNiZWEwOWU5ZjE5OGFiZjM4Y2ExYmY4ZWE0Yjc3NzEjZGlmZi01NDY4MmNlMzgwOTM1YTcxN2U0MWI4YmZjNTQ3MzdmNlIzNThcblx0XHRcdFx0XHRcdC8vIEluIHRob3NlIGNhc2VzIHRob3VnaCwgZXZlbiB3aXRoIHRoZSB2YWx1ZSBjb3JyZWN0ZWQsIHdlJ3JlIGRvdWJsZS1yZW5kZXJpbmcgYWxsIG5vZGVzLlxuXHRcdFx0XHRcdFx0Ly8gSXQgbWlnaHQgYmUgYmV0dGVyIHRvIGp1c3QgdGVsbCBmb2xrcyBub3QgdG8gdXNlIGZvcmNlLXN5bmMgbW9kZS5cblx0XHRcdFx0XHRcdC8vIEN1cnJlbnRseSwgdXNpbmcgYHVzZUNvbnRleHQoKWAgaW4gYSBjbGFzcyBjb21wb25lbnQgd2lsbCBvdmVyd3JpdGUgaXRzIGB0aGlzLmNvbnRleHRgIHZhbHVlLlxuXHRcdFx0XHRcdFx0Ly8gc3Vicy5zb21lKGMgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gXHRjLmNvbnRleHQgPSBfcHJvcHMudmFsdWU7XG5cdFx0XHRcdFx0XHQvLyBcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0XHQvLyB9KTtcblxuXHRcdFx0XHRcdFx0Ly8gc3Vicy5zb21lKGMgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gXHRjLmNvbnRleHRbY29udGV4dElkXSA9IF9wcm9wcy52YWx1ZTtcblx0XHRcdFx0XHRcdC8vIFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHRcdFx0c3Vicy5zb21lKGVucXVldWVSZW5kZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRcdHN1YnMucHVzaChjKTtcblx0XHRcdFx0XHRsZXQgb2xkID0gYy5jb21wb25lbnRXaWxsVW5tb3VudDtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3Vicy5zcGxpY2Uoc3Vicy5pbmRleE9mKGMpLCAxKTtcblx0XHRcdFx0XHRcdGlmIChvbGQpIG9sZC5jYWxsKGMpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdH07XG5cblx0Ly8gRGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB3aGVuIGl0XG5cdC8vIGVuY291bnRlcnMgYSBQcm92aWRlci4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc3VwcG9ydFxuXHQvLyBzZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gdGhlIGNvbnRleHQgb2JqZWN0IGluc3RlYWRcblx0Ly8gb2Ygb24gdGhlIGNvbXBvbmVudCBpdHNlbGYuIFNlZTpcblx0Ly8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2NvbnRleHQuaHRtbCNjb250ZXh0ZGlzcGxheW5hbWVcblxuXHRyZXR1cm4gKGNvbnRleHQuUHJvdmlkZXIuX2NvbnRleHRSZWYgPSBjb250ZXh0LkNvbnN1bWVyLmNvbnRleHRUeXBlID0gY29udGV4dCk7XG59XG4iLCJleHBvcnQgY29uc3QgRU1QVFlfT0JKID0ge307XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkosIEVNUFRZX0FSUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB3aG9zZVxuICogY2hpbGRyZW4gYXJlIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsXG4gKiBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRQYXJlbnRWTm9kZSBUaGUgb2xkIHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QgLSBtb2RpZmllZCBieSBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NXG4gKiBlbGVtZW50IGFueSBuZXcgZG9tIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0XG4gKiByZW5kZXIgKGV4Y2VwdCB3aGVuIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nXG4gKiBGcmFnbWVudHMgdGhhdCBoYXZlIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IGksIGosIG9sZFZOb2RlLCBjaGlsZFZOb2RlLCBuZXdEb20sIGZpcnN0Q2hpbGREb20sIHJlZnM7XG5cblx0Ly8gVGhpcyBpcyBhIGNvbXByZXNzaW9uIG9mIG9sZFBhcmVudFZOb2RlIT1udWxsICYmIG9sZFBhcmVudFZOb2RlICE9IEVNUFRZX09CSiAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4gfHwgRU1QVFlfQVJSXG5cdC8vIGFzIEVNUFRZX09CSi5fY2hpbGRyZW4gc2hvdWxkIGJlIGB1bmRlZmluZWRgLlxuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG9sZENoaWxkcmVuTGVuZ3RoID0gb2xkQ2hpbGRyZW4ubGVuZ3RoO1xuXG5cdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRmb3IgKGkgPSAwOyBpIDwgcmVuZGVyUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChjaGlsZFZOb2RlID09IG51bGwgfHwgdHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnXG5cdFx0KSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGVcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkVk5vZGUpKSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHR7IGNoaWxkcmVuOiBjaGlsZFZOb2RlIH0sXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNoaWxkVk5vZGU7XG5cdFx0fVxuXG5cdFx0Ly8gVGVyc2VyIHJlbW92ZXMgdGhlIGBjb250aW51ZWAgaGVyZSBhbmQgd3JhcHMgdGhlIGxvb3AgYm9keVxuXHRcdC8vIGluIGEgYGlmIChjaGlsZFZOb2RlKSB7IC4uLiB9IGNvbmRpdGlvblxuXHRcdGlmIChjaGlsZFZOb2RlID09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGZpbmQgYSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgaW4gb2xkQ2hpbGRyZW4uXG5cdFx0Ly8gSWYgZm91bmQsIGRlbGV0ZSB0aGUgYXJyYXkgaXRlbSBieSBzZXR0aW5nIHRvIGB1bmRlZmluZWRgLlxuXHRcdC8vIFdlIHVzZSBgdW5kZWZpbmVkYCwgYXMgYG51bGxgIGlzIHJlc2VydmVkIGZvciBlbXB0eSBwbGFjZWhvbGRlcnNcblx0XHQvLyAoaG9sZXMpLlxuXHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5baV07XG5cblx0XHRpZiAoXG5cdFx0XHRvbGRWTm9kZSA9PT0gbnVsbCB8fFxuXHRcdFx0KG9sZFZOb2RlICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGUpXG5cdFx0KSB7XG5cdFx0XHRvbGRDaGlsZHJlbltpXSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRWl0aGVyIG9sZFZOb2RlID09PSB1bmRlZmluZWQgb3Igb2xkQ2hpbGRyZW5MZW5ndGggPiAwLFxuXHRcdFx0Ly8gc28gYWZ0ZXIgdGhpcyBsb29wIG9sZFZOb2RlID09IG51bGwgb3Igb2xkVk5vZGUgaXMgYSB2YWxpZCB2YWx1ZS5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBvbGRDaGlsZHJlbkxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bal07XG5cdFx0XHRcdC8vIElmIGNoaWxkVk5vZGUgaXMgdW5rZXllZCwgd2Ugb25seSBtYXRjaCBzaW1pbGFybHkgdW5rZXllZCBub2Rlcywgb3RoZXJ3aXNlIHdlIG1hdGNoIGJ5IGtleS5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIG1hdGNoIGJ5IHR5cGUgKGluIGVpdGhlciBjYXNlKS5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG9sZFZOb2RlICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlID09PSBvbGRWTm9kZS50eXBlXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdG9sZENoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9sZFZOb2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvbGRWTm9kZSA9IG9sZFZOb2RlIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRpc1N2Zyxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdCk7XG5cblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cblx0XHRpZiAoKGogPSBjaGlsZFZOb2RlLnJlZikgJiYgb2xkVk5vZGUucmVmICE9IGopIHtcblx0XHRcdGlmICghcmVmcykgcmVmcyA9IFtdO1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikgcmVmcy5wdXNoKG9sZFZOb2RlLnJlZiwgbnVsbCwgY2hpbGRWTm9kZSk7XG5cdFx0XHRyZWZzLnB1c2goaiwgY2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSwgY2hpbGRWTm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG5ld0RvbSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBudWxsKSB7XG5cdFx0XHRcdGZpcnN0Q2hpbGREb20gPSBuZXdEb207XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NoaWxkcmVuID09PSBvbGRWTm9kZS5fY2hpbGRyZW5cblx0XHRcdCkge1xuXHRcdFx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKFxuXHRcdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRcdHBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkRG9tID0gcGxhY2VDaGlsZChcblx0XHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdFx0XHRuZXdEb20sXG5cdFx0XHRcdFx0b2xkRG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgbmV3UGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIEJlY2F1c2UgdGhlIG5ld1BhcmVudFZOb2RlIGlzIEZyYWdtZW50LWxpa2UsIHdlIG5lZWQgdG8gc2V0IGl0J3Ncblx0XHRcdFx0Ly8gX25leHREb20gcHJvcGVydHkgdG8gdGhlIG5leHRTaWJsaW5nIG9mIGl0cyBsYXN0IGNoaWxkIERPTSBub2RlLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBgb2xkRG9tYCBjb250YWlucyB0aGUgY29ycmVjdCB2YWx1ZSBoZXJlIGJlY2F1c2UgaWYgdGhlIGxhc3QgY2hpbGRcblx0XHRcdFx0Ly8gaXMgYSBGcmFnbWVudC1saWtlLCB0aGVuIG9sZERvbSBoYXMgYWxyZWFkeSBiZWVuIHNldCB0byB0aGF0IGNoaWxkJ3MgX25leHREb20uXG5cdFx0XHRcdC8vIElmIHRoZSBsYXN0IGNoaWxkIGlzIGEgRE9NIFZOb2RlLCB0aGVuIG9sZERvbSB3aWxsIGJlIHNldCB0byB0aGF0IERPTVxuXHRcdFx0XHQvLyBub2RlJ3MgbmV4dFNpYmxpbmcuXG5cdFx0XHRcdG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRvbGREb20gJiZcblx0XHRcdG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tICYmXG5cdFx0XHRvbGREb20ucGFyZW50Tm9kZSAhPSBwYXJlbnREb21cblx0XHQpIHtcblx0XHRcdC8vIFRoZSBhYm92ZSBjb25kaXRpb24gaXMgdG8gaGFuZGxlIG51bGwgcGxhY2Vob2xkZXJzLiBTZWUgdGVzdCBpbiBwbGFjZWhvbGRlci50ZXN0LmpzOlxuXHRcdFx0Ly8gYGVmZmljaWVudGx5IHJlcGxhY2UgbnVsbCBwbGFjZWhvbGRlcnMgaW4gcGFyZW50IHJlcmVuZGVyc2Bcblx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS5cblx0Zm9yIChpID0gb2xkQ2hpbGRyZW5MZW5ndGg7IGktLTsgKSB7XG5cdFx0aWYgKG9sZENoaWxkcmVuW2ldICE9IG51bGwpIHtcblx0XHRcdHVubW91bnQob2xkQ2hpbGRyZW5baV0sIG9sZENoaWxkcmVuW2ldKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgcmVmcyBvbmx5IGFmdGVyIHVubW91bnRcblx0aWYgKHJlZnMpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXBwbHlSZWYocmVmc1tpXSwgcmVmc1srK2ldLCByZWZzWysraV0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZW9yZGVyQ2hpbGRyZW4oY2hpbGRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20pIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXHRsZXQgYyA9IGNoaWxkVk5vZGUuX2NoaWxkcmVuO1xuXHRsZXQgdG1wID0gMDtcblx0Zm9yICg7IGMgJiYgdG1wIDwgYy5sZW5ndGg7IHRtcCsrKSB7XG5cdFx0bGV0IHZub2RlID0gY1t0bXBdO1xuXHRcdGlmICh2bm9kZSkge1xuXHRcdFx0Ly8gV2UgdHlwaWNhbGx5IGVudGVyIHRoaXMgY29kZSBwYXRoIG9uIHNDVSBiYWlsb3V0LCB3aGVyZSB3ZSBjb3B5XG5cdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLiBJZiB0aGF0IGlzIHRoZSBjYXNlLCB3ZSBuZWVkXG5cdFx0XHQvLyB0byB1cGRhdGUgdGhlIG9sZCBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGVcblx0XHRcdC8vIChjaGlsZFZOb2RlIGhlcmUpLlxuXHRcdFx0dm5vZGUuX3BhcmVudCA9IGNoaWxkVk5vZGU7XG5cblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG9sZERvbSA9IHJlb3JkZXJDaGlsZHJlbih2bm9kZSwgb2xkRG9tLCBwYXJlbnREb20pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkRG9tID0gcGxhY2VDaGlsZChwYXJlbnREb20sIHZub2RlLCB2bm9kZSwgYywgdm5vZGUuX2RvbSwgb2xkRG9tKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW5kIGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWRcbiAqIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBwbGFjZUNoaWxkKFxuXHRwYXJlbnREb20sXG5cdGNoaWxkVk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0bmV3RG9tLFxuXHRvbGREb21cbikge1xuXHRsZXQgbmV4dERvbTtcblx0aWYgKGNoaWxkVk5vZGUuX25leHREb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIE9ubHkgRnJhZ21lbnRzIG9yIGNvbXBvbmVudHMgdGhhdCByZXR1cm4gRnJhZ21lbnQgbGlrZSBWTm9kZXMgd2lsbFxuXHRcdC8vIGhhdmUgYSBub24tdW5kZWZpbmVkIF9uZXh0RG9tLiBDb250aW51ZSB0aGUgZGlmZiBmcm9tIHRoZSBzaWJsaW5nXG5cdFx0Ly8gb2YgbGFzdCBET00gY2hpbGQgb2YgdGhpcyBjaGlsZCBWTm9kZVxuXHRcdG5leHREb20gPSBjaGlsZFZOb2RlLl9uZXh0RG9tO1xuXG5cdFx0Ly8gRWFnZXJseSBjbGVhbnVwIF9uZXh0RG9tLiBXZSBkb24ndCBuZWVkIHRvIHBlcnNpc3QgdGhlIHZhbHVlIGJlY2F1c2Vcblx0XHQvLyBpdCBpcyBvbmx5IHVzZWQgYnkgYGRpZmZDaGlsZHJlbmAgdG8gZGV0ZXJtaW5lIHdoZXJlIHRvIHJlc3VtZSB0aGUgZGlmZiBhZnRlclxuXHRcdC8vIGRpZmZpbmcgQ29tcG9uZW50cyBhbmQgRnJhZ21lbnRzLiBPbmNlIHdlIHN0b3JlIGl0IHRoZSBuZXh0RE9NIGxvY2FsIHZhciwgd2Vcblx0XHQvLyBjYW4gY2xlYW4gdXAgdGhlIHByb3BlcnR5XG5cdFx0Y2hpbGRWTm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChcblx0XHRvbGRWTm9kZSA9PSBudWxsIHx8XG5cdFx0bmV3RG9tICE9IG9sZERvbSB8fFxuXHRcdG5ld0RvbS5wYXJlbnROb2RlID09IG51bGxcblx0KSB7XG5cdFx0b3V0ZXI6IGlmIChvbGREb20gPT0gbnVsbCB8fCBvbGREb20ucGFyZW50Tm9kZSAhPT0gcGFyZW50RG9tKSB7XG5cdFx0XHRwYXJlbnREb20uYXBwZW5kQ2hpbGQobmV3RG9tKTtcblx0XHRcdG5leHREb20gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBgajxvbGRDaGlsZHJlbkxlbmd0aDsgais9MmAgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYGorKzxvbGRDaGlsZHJlbkxlbmd0aC8yYFxuXHRcdFx0Zm9yIChcblx0XHRcdFx0bGV0IHNpYkRvbSA9IG9sZERvbSwgaiA9IDA7XG5cdFx0XHRcdChzaWJEb20gPSBzaWJEb20ubmV4dFNpYmxpbmcpICYmIGogPCBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdGogKz0gMVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChzaWJEb20gPT0gbmV3RG9tKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHBhcmVudERvbS5pbnNlcnRCZWZvcmUobmV3RG9tLCBvbGREb20pO1xuXHRcdFx0bmV4dERvbSA9IG9sZERvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIHByZS1jYWxjdWxhdGVkIHRoZSBuZXh0RE9NIG5vZGUsIHVzZSBpdC4gRWxzZSBjYWxjdWxhdGUgaXQgbm93XG5cdC8vIFN0cmljdGx5IGNoZWNrIGZvciBgdW5kZWZpbmVkYCBoZXJlIGN1eiBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZSBvZiBgbmV4dERvbWAuXG5cdC8vIFNlZSBtb3JlIGRldGFpbCBpbiBjcmVhdGUtZWxlbWVudC5qczpjcmVhdGVWTm9kZVxuXHRpZiAobmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2xkRG9tID0gbmV4dERvbTtcblx0fSBlbHNlIHtcblx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuIiwiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIERpZmYgdGhlIG9sZCBhbmQgbmV3IHByb3BlcnRpZXMgb2YgYSBWTm9kZSBhbmQgYXBwbHkgY2hhbmdlcyB0byB0aGUgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gYXBwbHlcbiAqIGNoYW5nZXMgdG9cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXdQcm9wcyBUaGUgbmV3IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gb2xkUHJvcHMgVGhlIG9sZCBwcm9wc1xuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaHlkcmF0ZSBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZQcm9wcyhkb20sIG5ld1Byb3BzLCBvbGRQcm9wcywgaXNTdmcsIGh5ZHJhdGUpIHtcblx0bGV0IGk7XG5cblx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0aWYgKGkgIT09ICdjaGlsZHJlbicgJiYgaSAhPT0gJ2tleScgJiYgIShpIGluIG5ld1Byb3BzKSkge1xuXHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBudWxsLCBvbGRQcm9wc1tpXSwgaXNTdmcpO1xuXHRcdH1cblx0fVxuXG5cdGZvciAoaSBpbiBuZXdQcm9wcykge1xuXHRcdGlmIChcblx0XHRcdCghaHlkcmF0ZSB8fCB0eXBlb2YgbmV3UHJvcHNbaV0gPT0gJ2Z1bmN0aW9uJykgJiZcblx0XHRcdGkgIT09ICdjaGlsZHJlbicgJiZcblx0XHRcdGkgIT09ICdrZXknICYmXG5cdFx0XHRpICE9PSAndmFsdWUnICYmXG5cdFx0XHRpICE9PSAnY2hlY2tlZCcgJiZcblx0XHRcdG9sZFByb3BzW2ldICE9PSBuZXdQcm9wc1tpXVxuXHRcdCkge1xuXHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBuZXdQcm9wc1tpXSwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIGtleSwgdmFsdWUpIHtcblx0aWYgKGtleVswXSA9PT0gJy0nKSB7XG5cdFx0c3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdHN0eWxlW2tleV0gPSAnJztcblx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgfHwgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3Qoa2V5KSkge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWUgKyAncHgnO1xuXHR9XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdmFsdWUgb24gYSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCB0aGUgcHJvcGVydHkgdG9cbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSB0aGUgcHJvcGVydHkgaGFkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShkb20sIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSwgaXNTdmcpIHtcblx0bGV0IHVzZUNhcHR1cmU7XG5cblx0bzogaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZFZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gb2xkVmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiBvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdGlmICghKHZhbHVlICYmIG5hbWUgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghb2xkVmFsdWUgfHwgdmFsdWVbbmFtZV0gIT09IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09PSAnbycgJiYgbmFtZVsxXSA9PT0gJ24nKSB7XG5cdFx0dXNlQ2FwdHVyZSA9IG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9DYXB0dXJlJC8sICcnKSk7XG5cblx0XHQvLyBJbmZlciBjb3JyZWN0IGNhc2luZyBmb3IgRE9NIGJ1aWx0LWluIGV2ZW50czpcblx0XHRpZiAobmFtZS50b0xvd2VyQ2FzZSgpIGluIGRvbSkgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGhhbmRsZXIgPSB1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5O1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgIT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRpZiAoaXNTdmcpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSBpbmNvcnJlY3QgcHJvcCB1c2FnZSBmb3IgU1ZHOlxuXHRcdFx0Ly8gLSB4bGluazpocmVmIC8geGxpbmtIcmVmIC0tPiBocmVmICh4bGluazpocmVmIHdhcyByZW1vdmVkIGZyb20gU1ZHIGFuZCBpc24ndCBuZWVkZWQpXG5cdFx0XHQvLyAtIGNsYXNzTmFtZSAtLT4gY2xhc3Ncblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL3hsaW5rKEh8OmgpLywgJ2gnKS5yZXBsYWNlKC9zTmFtZSQvLCAncycpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRuYW1lICE9PSAnaHJlZicgJiZcblx0XHRcdG5hbWUgIT09ICdsaXN0JyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPT0gJ3RhYkluZGV4JyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2Rvd25sb2FkJyAmJlxuXHRcdFx0bmFtZSBpbiBkb21cblx0XHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRvbVtuYW1lXSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuXHRcdFx0XHQvLyBsYWJlbGxlZCBicmVhayBpcyAxYiBzbWFsbGVyIGhlcmUgdGhhbiBhIHJldHVybiBzdGF0ZW1lbnQgKHNvcnJ5KVxuXHRcdFx0XHRicmVhayBvO1xuXHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHR9XG5cblx0XHQvLyBBUklBLWF0dHJpYnV0ZXMgaGF2ZSBhIGRpZmZlcmVudCBub3Rpb24gb2YgYm9vbGVhbiB2YWx1ZXMuXG5cdFx0Ly8gVGhlIHZhbHVlIGBmYWxzZWAgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3Rcblx0XHQvLyBleGlzdGluZyBvbiB0aGUgRE9NLCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhblxuXHRcdC8vIEFSSUEtYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHVzIHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIFZET00gZnJhbWV3b3JrcyBhbHNvIGFsd2F5cyBzdHJpbmdpZnkgYGZhbHNlYC5cblxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdC8vIG5ldmVyIHNlcmlhbGl6ZSBmdW5jdGlvbnMgYXMgYXR0cmlidXRlIHZhbHVlc1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgIT09IGZhbHNlIHx8IG5hbWUuaW5kZXhPZignLScpICE9IC0xKSkge1xuXHRcdFx0ZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3NlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG5cdHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyBmYWxzZV0ob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRQcm94eUNhcHR1cmUoZSkge1xuXHR0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgdHJ1ZV0ob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcbn1cbiIsImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IGRpZmZQcm9wcywgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgcGFyZW50IG9mIHRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieSBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNIeWRyYXRpbmddIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5faHlkcmF0aW5nICE9IG51bGwpIHtcblx0XHRpc0h5ZHJhdGluZyA9IG9sZFZOb2RlLl9oeWRyYXRpbmc7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0Ly8gaWYgd2UgcmVzdW1lLCB3ZSB3YW50IHRoZSB0cmVlIHRvIGJlIFwidW5sb2NrZWRcIlxuXHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSBudWxsO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdHRyeSB7XG5cdFx0b3V0ZXI6IGlmICh0eXBlb2YgbmV3VHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgYywgaXNOZXcsIG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QsIGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbjtcblx0XHRcdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmICgncHJvdG90eXBlJyBpbiBuZXdUeXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVGhlIGNoZWNrIGFib3ZlIHZlcmlmaWVzIHRoYXQgbmV3VHlwZSBpcyBzdXBwb3NlIHRvIGJlIGNvbnN0cnVjdGVkXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgbmV3VHlwZShuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVHJ1c3QgbWUsIENvbXBvbmVudCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2Ugd2Ugd2FudFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IENvbXBvbmVudChuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IG51bGwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGMuX25leHRTdGF0ZSA9PSBjLnN0YXRlKSB7XG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCBjLl9uZXh0U3RhdGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXNzaWduKFxuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXdQcm9wcywgYy5fbmV4dFN0YXRlKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbGRQcm9wcyA9IGMucHJvcHM7XG5cdFx0XHRvbGRTdGF0ZSA9IGMuc3RhdGU7XG5cblx0XHRcdC8vIEludm9rZSBwcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IG51bGwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnREaWRNb3VudCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5jb21wb25lbnREaWRNb3VudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBudWxsICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWMuX2ZvcmNlICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPSBudWxsICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZShcblx0XHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdFx0KSA9PT0gZmFsc2UpIHx8XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0Ly8gTW9yZSBpbmZvIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vSm92aURlQ3Jvb2NrL2JlYzVmMmNlOTM1NDRkMmU2MDcwZWY4ZTAwMzZlNGU4XG5cdFx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9vcmlnaW5hbCAhPT0gb2xkVk5vZGUuX29yaWdpbmFsKSBjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbi5mb3JFYWNoKHZub2RlID0+IHtcblx0XHRcdFx0XHRcdGlmICh2bm9kZSkgdm5vZGUuX3BhcmVudCA9IG5ld1ZOb2RlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjLl9zdGF0ZUNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5fc3RhdGVDYWxsYmFja3NbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXG5cdFx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnRXaWxsVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVcGRhdGUobmV3UHJvcHMsIGMuX25leHRTdGF0ZSwgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnREaWRVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKCgpID0+IHtcblx0XHRcdFx0XHRcdGMuY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGMuY29udGV4dCA9IGNvbXBvbmVudENvbnRleHQ7XG5cdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRjLl92bm9kZSA9IG5ld1ZOb2RlO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXG5cdFx0XHRsZXQgcmVuZGVySG9vayA9IG9wdGlvbnMuX3JlbmRlcixcblx0XHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjLl9zdGF0ZUNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzTmV3ICYmIGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRzbmFwc2hvdCA9IGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlzVG9wTGV2ZWxGcmFnbWVudCA9XG5cdFx0XHRcdHRtcCAhPSBudWxsICYmIHRtcC50eXBlID09PSBGcmFnbWVudCAmJiB0bXAua2V5ID09IG51bGw7XG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID0gaXNUb3BMZXZlbEZyYWdtZW50ID8gdG1wLnByb3BzLmNoaWxkcmVuIDogdG1wO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gbnVsbDtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gbnVsbCAmJlxuXHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0XHQpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gZGlmZkVsZW1lbnROb2Rlcyhcblx0XHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2Zyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdGlmIChpc0h5ZHJhdGluZyB8fCBleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9ICEhaXNIeWRyYXRpbmc7XG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbltleGNlc3NEb21DaGlsZHJlbi5pbmRleE9mKG9sZERvbSldID0gbnVsbDtcblx0XHRcdC8vIF4gY291bGQgcG9zc2libHkgYmUgc2ltcGxpZmllZCB0bzpcblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aCA9IDA7XG5cdFx0fVxuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290KSB7XG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgU2VlIGFib3ZlIHRzLWlnbm9yZSBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmdcbiAqIHRoZSB2aXJ0dWFsIG5vZGVzIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7Kn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHJldHVybnMge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgb2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcztcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cdGxldCBpID0gMDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgU1ZHIG5hbWVzcGFjZSB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09PSAnc3ZnJykgaXNTdmcgPSB0cnVlO1xuXG5cdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0Zm9yICg7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY2hpbGQgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0Y2hpbGQgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gY2hpbGQgPT09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gY2hpbGQubG9jYWxOYW1lID09PSBub2RlVHlwZSA6IGNoaWxkLm5vZGVUeXBlID09PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IGNoaWxkO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gbnVsbCkge1xuXHRcdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBjcmVhdGVUZXh0Tm9kZSByZXR1cm5zIFRleHQsIHdlIGV4cGVjdCBQcmVhY3RFbGVtZW50XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGlmIChpc1N2Zykge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0XHQnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0XHRuZXdQcm9wcy5pcyAmJiBuZXdQcm9wc1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gbnVsbDtcblx0XHQvLyB3ZSBhcmUgY3JlYXRpbmcgYSBuZXcgbm9kZSwgc28gd2UgY2FuIGFzc3VtZSB0aGlzIGlzIGEgbmV3IHN1YnRyZWUgKGluIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPT0gbmV3UHJvcHMpKSB7XG5cdFx0XHRkb20uZGF0YSA9IG5ld1Byb3BzO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBJZiBleGNlc3NEb21DaGlsZHJlbiB3YXMgbm90IG51bGwsIHJlcG9wdWxhdGUgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50J3MgY2hpbGRyZW46XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBleGNlc3NEb21DaGlsZHJlbiAmJiBzbGljZS5jYWxsKGRvbS5jaGlsZE5vZGVzKTtcblxuXHRcdG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXG5cdFx0bGV0IG9sZEh0bWwgPSBvbGRQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblx0XHRsZXQgbmV3SHRtbCA9IG5ld1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0Ly8gQnV0LCBpZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIHVzaW5nIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSlcblx0XHRcdC8vIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET00gYXR0cmlidXRlcyB0byBkaWZmIHRoZW1cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdG9sZFByb3BzID0ge307XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG9sZFByb3BzW2RvbS5hdHRyaWJ1dGVzW2ldLm5hbWVdID0gZG9tLmF0dHJpYnV0ZXNbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld0h0bWwgfHwgb2xkSHRtbCkge1xuXHRcdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCFuZXdIdG1sIHx8XG5cdFx0XHRcdFx0KCghb2xkSHRtbCB8fCBuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCkgJiZcblx0XHRcdFx0XHRcdG5ld0h0bWwuX19odG1sICE9PSBkb20uaW5uZXJIVE1MKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRkb20uaW5uZXJIVE1MID0gKG5ld0h0bWwgJiYgbmV3SHRtbC5fX2h0bWwpIHx8ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGlmZlByb3BzKGRvbSwgbmV3UHJvcHMsIG9sZFByb3BzLCBpc1N2ZywgaXNIeWRyYXRpbmcpO1xuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdGkgPSBuZXdWTm9kZS5wcm9wcy5jaGlsZHJlbjtcblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0ZG9tLFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KGkpID8gaSA6IFtpXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2ZyAmJiBub2RlVHlwZSAhPT0gJ2ZvcmVpZ25PYmplY3QnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuXG5cdFx0XHRcdFx0PyBleGNlc3NEb21DaGlsZHJlblswXVxuXHRcdFx0XHRcdDogb2xkVk5vZGUuX2NoaWxkcmVuICYmIGdldERvbVNpYmxpbmcob2xkVk5vZGUsIDApLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW5baV0gIT0gbnVsbCkgcmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAoYXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvbilcblx0XHRpZiAoIWlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCd2YWx1ZScgaW4gbmV3UHJvcHMgJiZcblx0XHRcdFx0KGkgPSBuZXdQcm9wcy52YWx1ZSkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGkgIT09IGRvbS52YWx1ZSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ3Byb2dyZXNzJyAmJiAhaSkgfHxcblx0XHRcdFx0XHQvLyBUaGlzIGlzIG9ubHkgZm9yIElFIDExIHRvIGZpeCA8c2VsZWN0PiB2YWx1ZSBub3QgYmVpbmcgdXBkYXRlZC5cblx0XHRcdFx0XHQvLyBUbyBhdm9pZCBhIHN0YWxlIHNlbGVjdCB2YWx1ZSB3ZSBuZWVkIHRvIHNldCB0aGUgb3B0aW9uLnZhbHVlXG5cdFx0XHRcdFx0Ly8gYWdhaW4sIHdoaWNoIHRyaWdnZXJzIElFMTEgdG8gcmUtZXZhbHVhdGUgdGhlIHNlbGVjdCB2YWx1ZVxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ29wdGlvbicgJiYgaSAhPT0gb2xkUHJvcHMudmFsdWUpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ3ZhbHVlJywgaSwgb2xkUHJvcHMudmFsdWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0J2NoZWNrZWQnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMuY2hlY2tlZCkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHRpICE9PSBkb20uY2hlY2tlZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ2NoZWNrZWQnLCBpLCBvbGRQcm9wcy5jaGVja2VkLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuLyoqXG4gKiBJbnZva2Ugb3IgdXBkYXRlIGEgcmVmLCBkZXBlbmRpbmcgb24gd2hldGhlciBpdCBpcyBhIGZ1bmN0aW9uIG9yIG9iamVjdCByZWYuXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcmVmXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSByZWYodmFsdWUpO1xuXHRcdGVsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgdm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVW5tb3VudCBhIHZpcnR1YWwgbm9kZSBmcm9tIHRoZSB0cmVlIGFuZCBhcHBseSBET00gY2hhbmdlc1xuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXRcbiAqIGluaXRpYXRlZCB0aGUgdW5tb3VudFxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcFJlbW92ZV0gRmxhZyB0aGF0IGluZGljYXRlcyB0aGF0IGEgcGFyZW50IG5vZGUgb2YgdGhlXG4gKiBjdXJyZW50IGVsZW1lbnQgaXMgYWxyZWFkeSBkZXRhY2hlZCBmcm9tIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KHZub2RlLCBwYXJlbnRWTm9kZSwgc2tpcFJlbW92ZSkge1xuXHRsZXQgcjtcblx0aWYgKG9wdGlvbnMudW5tb3VudCkgb3B0aW9ucy51bm1vdW50KHZub2RlKTtcblxuXHRpZiAoKHIgPSB2bm9kZS5yZWYpKSB7XG5cdFx0aWYgKCFyLmN1cnJlbnQgfHwgci5jdXJyZW50ID09PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBudWxsLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gbnVsbCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IG51bGw7XG5cdFx0dm5vZGUuX2NvbXBvbmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9PSAnZnVuY3Rpb24nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFza2lwUmVtb3ZlICYmIHZub2RlLl9kb20gIT0gbnVsbCkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHQvLyBNdXN0IGJlIHNldCB0byBgdW5kZWZpbmVkYCB0byBwcm9wZXJseSBjbGVhbiB1cCBgX25leHREb21gXG5cdC8vIGZvciB3aGljaCBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZS4gU2VlIGNvbW1lbnQgaW4gYGNyZWF0ZS1lbGVtZW50LmpzYFxuXHR2bm9kZS5fcGFyZW50ID0gdm5vZGUuX2RvbSA9IHZub2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PT0gJ2Z1bmN0aW9uJztcblxuXHQvLyBUbyBiZSBhYmxlIHRvIHN1cHBvcnQgY2FsbGluZyBgcmVuZGVyKClgIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lXG5cdC8vIERPTSBub2RlLCB3ZSBuZWVkIHRvIG9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgdHJlZS4gV2UgZG9cblx0Ly8gdGhpcyBieSBhc3NpZ25pbmcgYSBuZXcgYF9jaGlsZHJlbmAgcHJvcGVydHkgdG8gRE9NIG5vZGVzIHdoaWNoIHBvaW50c1xuXHQvLyB0byB0aGUgbGFzdCByZW5kZXJlZCB0cmVlLiBCeSBkZWZhdWx0IHRoaXMgcHJvcGVydHkgaXMgbm90IHByZXNlbnQsIHdoaWNoXG5cdC8vIG1lYW5zIHRoYXQgd2UgYXJlIG1vdW50aW5nIGEgbmV3IHRyZWUgZm9yIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgb2xkVk5vZGUgPSBpc0h5ZHJhdGluZ1xuXHRcdD8gbnVsbFxuXHRcdDogKHJlcGxhY2VOb2RlICYmIHJlcGxhY2VOb2RlLl9jaGlsZHJlbikgfHwgcGFyZW50RG9tLl9jaGlsZHJlbjtcblxuXHR2bm9kZSA9IChcblx0XHQoIWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlKSB8fFxuXHRcdHBhcmVudERvbVxuXHQpLl9jaGlsZHJlbiA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHQ/IG51bGxcblx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGRcblx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdDogbnVsbCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZCxcblx0XHRpc0h5ZHJhdGluZ1xuXHQpO1xuXG5cdC8vIEZsdXNoIGFsbCBxdWV1ZWQgZWZmZWN0c1xuXHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50IHdpdGggZGF0YSBmcm9tIGEgUHJlYWN0IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0b1xuICogdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwiaW1wb3J0IHsgYXNzaWduLCBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHMgY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdG51bGxcblx0KTtcbn1cbiIsIi8qKlxuICogRmluZCB0aGUgY2xvc2VzdCBlcnJvciBib3VuZGFyeSB0byBhIHRocm93biBlcnJvciBhbmQgY2FsbCBpdFxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIFRoZSB0aHJvd24gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdGhhdCB0aHJld1xuICogdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0IGZvciB1bm1vdW50aW5nIHdoZW4gdGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZyB1bm1vdW50ZWQpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gW29sZFZOb2RlXVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuRXJyb3JJbmZvfSBbZXJyb3JJbmZvXVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoRXJyb3IoZXJyb3IsIHZub2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCwgY3RvciwgaGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IG51bGwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxubGV0IEVNUFRZID0gW107XG5cbmxldCBvbGRCZWZvcmVEaWZmID0gb3B0aW9ucy5fZGlmZjtcbmxldCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5sZXQgb2xkQWZ0ZXJEaWZmID0gb3B0aW9ucy5kaWZmZWQ7XG5sZXQgb2xkQ29tbWl0ID0gb3B0aW9ucy5fY29tbWl0O1xubGV0IG9sZEJlZm9yZVVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5cbmNvbnN0IFJBRl9USU1FT1VUID0gMTAwO1xubGV0IHByZXZSYWY7XG5cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSAhPT0gRU1QVFkpIHtcblx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZTtcblx0XHRcdH1cblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nVmFsdWUgPSBFTVBUWTtcblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxub3B0aW9ucy5fY29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xuXHRjb21taXRRdWV1ZS5zb21lKGNvbXBvbmVudCA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZpbHRlcihjYiA9PlxuXHRcdFx0XHRjYi5fdmFsdWUgPyBpbnZva2VFZmZlY3QoY2IpIDogdHJ1ZVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzKSBjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0pO1xuXHRcdFx0Y29tbWl0UXVldWUgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAob2xkQ29tbWl0KSBvbGRDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5cbm9wdGlvbnMudW5tb3VudCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVVubW91bnQpIG9sZEJlZm9yZVVubW91bnQodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRsZXQgaGFzRXJyb3JlZDtcblx0XHRjLl9faG9va3MuX2xpc3QuZm9yRWFjaChzID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGludm9rZUNsZWFudXAocyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGhhc0Vycm9yZWQgPSBlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGMuX19ob29rcyA9IHVuZGVmaW5lZDtcblx0XHRpZiAoaGFzRXJyb3JlZCkgb3B0aW9ucy5fY2F0Y2hFcnJvcihoYXNFcnJvcmVkLCBjLl92bm9kZSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0IGEgaG9vaydzIHN0YXRlIGZyb20gdGhlIGN1cnJlbnRDb21wb25lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBnZXRIb29rU3RhdGUoaW5kZXgsIHR5cGUpIHtcblx0aWYgKG9wdGlvbnMuX2hvb2spIHtcblx0XHRvcHRpb25zLl9ob29rKGN1cnJlbnRDb21wb25lbnQsIGluZGV4LCBjdXJyZW50SG9vayB8fCB0eXBlKTtcblx0fVxuXHRjdXJyZW50SG9vayA9IDA7XG5cblx0Ly8gTGFyZ2VseSBpbnNwaXJlZCBieTpcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iL2Y2YmU3MzQ2OGU2ZWM0NmIwZmY1YWEzY2M0YzliYWY3MmEyOTAyNWEvc3JjL2hvb2tzL2NvcmVfaG9va3MubWpzXG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi82NTBiZWFhNThjNDNjMzNhNzQ4MjBhM2M5OGIzYzcwNzljZjJlMzMzL3NyYy9yZW5kZXJlci5tanNcblx0Ly8gT3RoZXIgaW1wbGVtZW50YXRpb25zIHRvIGxvb2sgYXQ6XG5cdC8vICogaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL21ub3gwNXFwOFxuXHRjb25zdCBob29rcyA9XG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzIHx8XG5cdFx0KGN1cnJlbnRDb21wb25lbnQuX19ob29rcyA9IHtcblx0XHRcdF9saXN0OiBbXSxcblx0XHRcdF9wZW5kaW5nRWZmZWN0czogW11cblx0XHR9KTtcblxuXHRpZiAoaW5kZXggPj0gaG9va3MuX2xpc3QubGVuZ3RoKSB7XG5cdFx0aG9va3MuX2xpc3QucHVzaCh7IF9wZW5kaW5nVmFsdWU6IEVNUFRZIH0pO1xuXHR9XG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gW2luaXRpYWxTdGF0ZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuUmVkdWNlcjxhbnksIGFueT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPGFueT59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgYW55LCAoc3RhdGU6IGFueSkgPT4gdm9pZCBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXQpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5SZWR1Y2VySG9va1N0YXRlfSAqL1xuXHRjb25zdCBob29rU3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDIpO1xuXHRob29rU3RhdGUuX3JlZHVjZXIgPSByZWR1Y2VyO1xuXHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50KSB7XG5cdFx0aG9va1N0YXRlLl92YWx1ZSA9IFtcblx0XHRcdCFpbml0ID8gaW52b2tlT3JSZXR1cm4odW5kZWZpbmVkLCBpbml0aWFsU3RhdGUpIDogaW5pdChpbml0aWFsU3RhdGUpLFxuXG5cdFx0XHRhY3Rpb24gPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rU3RhdGUuX25leHRWYWx1ZVxuXHRcdFx0XHRcdD8gaG9va1N0YXRlLl9uZXh0VmFsdWVbMF1cblx0XHRcdFx0XHQ6IGhvb2tTdGF0ZS5fdmFsdWVbMF07XG5cdFx0XHRcdGNvbnN0IG5leHRWYWx1ZSA9IGhvb2tTdGF0ZS5fcmVkdWNlcihjdXJyZW50VmFsdWUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9uZXh0VmFsdWUgPSBbbmV4dFZhbHVlLCBob29rU3RhdGUuX3ZhbHVlWzFdXTtcblx0XHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5zZXRTdGF0ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aG9va1N0YXRlLl9jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuXG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MpIHtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcyA9IHRydWU7XG5cdFx0XHRjb25zdCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24ocCwgcywgYykge1xuXHRcdFx0XHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MpIHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHN0YXRlSG9va3MgPSBob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZpbHRlcihcblx0XHRcdFx0XHR4ID0+IHguX2NvbXBvbmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBhbGxIb29rc0VtcHR5ID0gc3RhdGVIb29rcy5ldmVyeSh4ID0+ICF4Ll9uZXh0VmFsdWUpO1xuXHRcdFx0XHQvLyBXaGVuIHdlIGhhdmUgbm8gdXBkYXRlZCBob29rcyBpbiB0aGUgY29tcG9uZW50IHdlIGludm9rZSB0aGUgcHJldmlvdXMgU0NVIG9yXG5cdFx0XHRcdC8vIHRyYXZlcnNlIHRoZSBWRE9NIHRyZWUgZnVydGhlci5cblx0XHRcdFx0aWYgKGFsbEhvb2tzRW1wdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldlNjdSA/IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKSA6IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRzdGF0ZUhvb2tzLmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rSXRlbS5fdmFsdWVbMF07XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IGhvb2tJdGVtLl92YWx1ZVswXSkgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBzaG91bGRVcGRhdGUgfHwgaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHBcblx0XHRcdFx0XHQ/IHByZXZTY3Vcblx0XHRcdFx0XHRcdD8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpXG5cdFx0XHRcdFx0XHQ6IHRydWVcblx0XHRcdFx0XHQ6IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiByZWYobnVsbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlZikge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IGNyZWF0ZUhhbmRsZSgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcmdzID09IG51bGwgPyBhcmdzIDogYXJncy5jb25jYXQocmVmKVxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmYWN0b3J5XG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnksIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5NZW1vSG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNyk7XG5cdGlmIChhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fcGVuZGluZ1ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHRcdHJldHVybiBzdGF0ZS5fcGVuZGluZ1ZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWx1ZSkgOiB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogYW55LCBlcnJvckluZm86IGltcG9ydCgncHJlYWN0JykuRXJyb3JJbmZvKSA9PiB2b2lkfSBjYlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKCkge1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTEpO1xuXHRpZiAoIXN0YXRlLl92YWx1ZSkge1xuXHRcdC8vIEdyYWIgZWl0aGVyIHRoZSByb290IG5vZGUgb3IgdGhlIG5lYXJlc3QgYXN5bmMgYm91bmRhcnkgbm9kZS5cblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbC5kJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cbi8qKlxuICogQWZ0ZXIgcGFpbnQgZWZmZWN0cyBjb25zdW1lci5cbiAqL1xuZnVuY3Rpb24gZmx1c2hBZnRlclBhaW50RWZmZWN0cygpIHtcblx0bGV0IGNvbXBvbmVudDtcblx0d2hpbGUgKChjb21wb25lbnQgPSBhZnRlclBhaW50RWZmZWN0cy5zaGlmdCgpKSkge1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWNvbXBvbmVudC5fX2hvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VDbGVhbnVwKGhvb2spIHtcblx0Ly8gQSBob29rIGNsZWFudXAgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0bGV0IGNsZWFudXAgPSBob29rLl9jbGVhbnVwO1xuXHRpZiAodHlwZW9mIGNsZWFudXAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhvb2suX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogSW52b2tlIGEgSG9vaydzIGVmZmVjdFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IG9sZEFyZ3NcbiAqIEBwYXJhbSB7YW55W119IG5ld0FyZ3NcbiAqL1xuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuXHRyZXR1cm4gKFxuXHRcdCFvbGRBcmdzIHx8XG5cdFx0b2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3MubGVuZ3RoIHx8XG5cdFx0bmV3QXJncy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuLyoqIFRha2VzIGEgbmV3IHZhbHVlIG9yIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIGEgdmFsdWUsIHVubGlrZSBgT25QYXNzaXZlU3RhdGVDaGFuZ2VgIHdoaWNoIHJlYWN0cyB0byB0aG9zZSB1cGRhdGVzICovXG5leHBvcnQgdHlwZSBQYXNzaXZlU3RhdGVVcGRhdGVyPFMsIFI+ID0gKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uPzogUikgPT4gdm9pZCk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKSA6ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbjogUikgPT4gdm9pZCk7XG4vKiogUmVzcG9uZHMgdG8gYSBjaGFuZ2UgaW4gYSB2YWx1ZSwgdW5saWtlIGBQYXNzaXZlU3RhdGVVcGRhdGVyYCB3aGljaCBjYXVzZXMgdGhlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFMsIFI+ID0gKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb24/OiBSKSA9PiAodm9pZCB8ICgoKSA9PiB2b2lkKSkpOy8vW1JdIGV4dGVuZHMgW25ldmVyXT8gKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb24/OiBSKSA9PiAodm9pZCB8ICgoKSA9PiB2b2lkKSkpIDogKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb246IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7XG5cblxuXG4vKipcbiAqIERlYnVnIGhvb2suXG4gKiBcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKiBcbiAqIEV2ZW50dWFsbHksIHdoZW4gdXNlRXZlbnQgbGFuZHMsIHdlIGhvcGVmdWxseSB3b24ndCBuZWVkIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHk8VCBleHRlbmRzIGFueVtdPihwYXJlbnRIb29rTmFtZTogc3RyaW5nLCAuLi52YWx1ZXM6IFQpIHtcbiAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZjxBcnJheTxUPj4oW10pO1xuICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWY8QXJyYXk8Ym9vbGVhbj4+KFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCBhcyBhbnksIC0xKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcblxuXG4gICAgZnVuY3Rpb24gdXNlSGVscGVyPFUgZXh0ZW5kcyBUPih2YWx1ZTogVSwgaTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMD8gSlNPTi5zdHJpbmdpZnkodmFsdWVzW2ldKSA6IFwidGhlIG51bWJlciBvZiBzdXBwb3NlZGx5IHN0YWJsZSBlbGVtZW50c1wifSkuYCk7XG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZVJlbmRlcmluZyhmOiAoKSA9PiB2b2lkKSB7XG4gICAgKG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPz8gc2V0VGltZW91dCkoZik7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqIFxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKiBcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKiBcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICogXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqIFxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgQnkgZGVmYXVsdCwgY2hhbmdlcyB0byBwYXNzaXZlIHN0YXRlIGFyZSBkZWxheWVkIGJ5IG9uZSB0aWNrIHNvIHRoYXQgd2Ugb25seSBjaGVjayBmb3IgY2hhbmdlcyBpbiBhIHNpbWlsYXIgd2F5IHRvIFByZWFjdC4gWW91IGNhbiBvdmVycmlkZSB0aGlzIHRvLCBmb3IgZXhhbXBsZSwgYWx3YXlzIHJ1biBpbW1lZGlhdGVseSBpbnN0ZWFkLlxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGU8VCwgUj4ob25DaGFuZ2U6IHVuZGVmaW5lZCB8IG51bGwgfCBPblBhc3NpdmVTdGF0ZUNoYW5nZTxULCBSPiwgZ2V0SW5pdGlhbFZhbHVlPzogKCkgPT4gVCwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmc/OiB0eXBlb2YgZGVib3VuY2VSZW5kZXJpbmcpOiByZWFkb25seSBbZ2V0U3RhdGVTdGFibGU6ICgpID0+IFQsIHNldFN0YXRlU3RhYmxlOiBQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+XSB7XG5cbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZjxUIHwgdHlwZW9mIFVuc2V0PihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmPFIgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZjxUIHwgKHR5cGVvZiBVbnNldCk+KFVuc2V0KTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWY8dW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpPih1bmRlZmluZWQpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG5cbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXG4gICAgLy8gdmFsdWUgaW4gcGxhY2Ugb2YgaGF2aW5nIG5vIHZhbHVlIGF0IGFsbCB5ZXQuXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxuICAgIGNvbnN0IHRyeUVuc3VyZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBnZXRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCEpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcblxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xuXG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQhIDogdmFsdWVSZWYuY3VycmVudCEpIGFzIFQ7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcblxuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+KChhcmc6IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj5bMF0sIHJlYXNvbjogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlsxXSkgPT4ge1xuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3Mgb2YgYW55dGhpbmcgZWxzZSwgZmlndXJlIG91dCB3aGF0IG91ciBuZXh0IHZhbHVlIGlzIGFib3V0IHRvIGJlLlxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSAoYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KSA6IGFyZyk7XG5cblxuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgdmFsdWUgc28gdGhhdCB3ZSBjYW4gY29tcGFyZSBhZ2FpbnN0IGl0IGxhdGVyXG4gICAgICAgICAgICAvLyAoaWYgd2UgZmxpcCBiYWNrIHRvIHRoaXMgc3RhdGUsIHRoZW4gd2Ugd29uJ3Qgc2VuZCB0aGUgb25DaGFuZ2UgZnVuY3Rpb24pXG4gICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gdmFsdWVSZWYuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdXBkYXRlIHRoaXMgaGVyZSAoYXMgd2VsbCBhcyBiZWxvdykgaW4gY2FzZSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBpbnZva2VzIHRoaXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICByZWFzb25SZWYuY3VycmVudCA9IHJlYXNvbiBhcyBSO1xuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0aGUgYWN0dWFsIGNoZWNrIGFuZCBpbnZvY2F0aW9uIG9mIG9uQ2hhbmdlIGxhdGVyIHRvIGxldCBlZmZlY3RzIHNldHRsZVxuICAgICAgICAgICAgKGN1c3RvbURlYm91bmNlUmVuZGVyaW5nID8/IGRlYm91bmNlUmVuZGVyaW5nKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFJlYXNvbiA9IHJlYXNvblJlZi5jdXJyZW50ISBhcyBSO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50ISBhcyBUO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ICE9IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJlZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4obmV4dERlcCwgcHJldkRlcCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBwcmV2RGVwLCBuZXh0UmVhc29uKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHREZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZmluaXNoZWQgd2l0aCBldmVyeXRoaW5nLCBzbyBtYXJrIHVzIGFzIGJlaW5nIG9uIGEgY2xlYW4gc2xhdGUgYWdhaW4uXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IFVuc2V0O1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXSBhcyBjb25zdDtcbn1cblxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcblxuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cblxuLyoqIFxuICogQW4gYWx0ZXJuYXRpdmUgdG8gdXNlIGZvciBgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmdgIHRoYXQgY2F1c2VzIGB1c2VQYXNzaXZlU3RhdGVgIHRvIHJ1biBjaGFuZ2VzIHdpdGhvdXQgd2FpdGluZyBhIHRpY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5JbW1lZGlhdGVseShmOiAoKSA9PiB2b2lkKSB7IGYoKTsgfSIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBvcHRpb25zLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEVmZmVjdENhbGxiYWNrLCBJbnB1dHMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cblxuXG5jb25zdCBUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlfLVwiO1xuXG5mdW5jdGlvbiBiYXNlNjQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xufVxuXG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICogXG4gKiBcbiAqIChUaGlzIGlzIGhlcmUsIGluIHRoaXMgcGFydGljdWxhciBmaWxlLCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAqIHdpdGhvdXQgYWxzbyBtYWtpbmcgYSB1dGlsaXRpZXMgZmlsZS5cbiAqIE9uY2Ugd2UgY2FuIHJlbW92ZSB0aGlzIGhvb2ssIHdlIGNhbiBwdXQgdGhpcyBmdW5jdGlvbiBiYWNrIHdpdGggdXNlUmFuZG9tSWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeD86IHN0cmluZykge1xuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xufVxuXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXA8c3RyaW5nLCBJbnB1dHMgfCB1bmRlZmluZWQ+KCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXA8c3RyaW5nLCB7IGVmZmVjdDogRWZmZWN0Q2FsbGJhY2ssIGlucHV0cz86IElucHV0cywgY2xlYW51cDogbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWQgfCAoKCkgPT4gdm9pZCkgfT4oKTtcblxuXG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcblxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdIGFzICh2bm9kZTogVk5vZGUsIGNvbW1pdFF1ZXVlOiBDb21wb25lbnRbXSkgPT4gdm9pZDtcbmNvbnN0IG5ld0NvbW1pdDogdHlwZW9mIG9yaWdpbmFsQ29tbWl0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZWZmZWN0SW5mb10gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgZWZmZWN0SW5mby5pbnB1dHMpKSB7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXA/LigpO1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgZWZmZWN0SW5mby5pbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvUnVuLmNsZWFyKCk7XG4gICAgb3JpZ2luYWxDb21taXQ/LiguLi5hcmdzKTtcbn1cbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQgYXMgbmV2ZXJcblxuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKiBcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqIFxuICogQHBhcmFtIGVmZmVjdCBcbiAqIEBwYXJhbSBpbnB1dHMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0OiBFZmZlY3RDYWxsYmFjayB8IG51bGwsIGlucHV0cz86IElucHV0cykge1xuXG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cblxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIGlmIChlZmZlY3QpXG4gICAgICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICBlbHNlXG4gICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9LCBbaWRdKVxufVxuXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzPzogSW5wdXRzLCBuZXdBcmdzPzogSW5wdXRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgICAhb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG4gICAgKTtcbn0iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuXG5cbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqIFxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqIFxuICogQHBhcmFtIHZhbHVlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXI8VD4odmFsdWU6IFQpIHtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxUPihVbnNldCBhcyB1bmtub3duIGFzIFQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKCkgPT4geyByZWYuY3VycmVudCA9IHZhbHVlOyB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgYXMgdW5rbm93biA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cblxuXG4vKipcbiAqIExpa2UgYHVzZVN0YWJsZUdldHRlcmAsIGJ1dCAqKipyZXF1aXJlcyoqKiB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlIG9iamVjdCBpcyBhbHNvIHN0YWJsZSxcbiAqIGFuZCBpbiB0dXJuIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXRzZWxmIGlzIHN0YWJsZS5cbiAqIEBwYXJhbSB0IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVPYmplY3Q8VCBleHRlbmRzIHt9Pih0OiBUKTogVCB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xudHlwZSBDID0gaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2xhc3NOYW1lXCJdO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqIFxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxoc0NsYXNzOiBDLCBsaHNDbGFzc05hbWU6IEMsIHJoc0NsYXNzOiBDLCByaHNDbGFzc05hbWU6IEMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSlcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgUmVmLCBSZWZPYmplY3QgfSBmcm9tIFwicHJlYWN0XCI7XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlZjxUPihpbnN0YW5jZTogVCB8IG51bGwsIHJlZjogUmVmPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgKHJlZiBhcyBSZWZPYmplY3Q8VCB8IG51bGw+KS5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxocyBcbiAqIEBwYXJhbSByaHMgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihyaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdLCBsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdKSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQhO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzITtcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocyE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21iaW5lZChjdXJyZW50OiBFIHwgbnVsbCkge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcblxuZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZTogc3RyaW5nKTogaC5KU1guQ1NTUHJvcGVydGllcyB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICogXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdIHtcblxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgaWYgKCFsaHMgJiYgcmhzKVxuICAgICAgICAgICAgcmV0dXJuIHJocztcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMgYXMgc3RyaW5nKSwgcmhzKSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMgYXMgc3RyaW5nKSkgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzID8/IFwiXCJ9YCBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXG4gICAgICAgIC4uLihyaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbiAgICB9IGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xufVxuXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5cbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5cbi8qXG50eXBlIElzRW1wdHlPYmplY3Q8VD4gPSBba2V5b2YgVF0gZXh0ZW5kcyBbbmV2ZXJdPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCB0eXBlIEV4dHJhY3RlZFByb3BzPE8gZXh0ZW5kcyB7fT4gPSB7IFtLIGluIGtleW9mIE9dOiBQaWNrPE9bS10sIChcInByb3BzU3RhYmxlXCIgfCBcInByb3BzVW5zdGFibGVcIikgJiBrZXlvZiBPW0tdPiB9O1xuXG5jb25zdCBvOiBFeHRyYWN0ZWRQcm9wczxVc2VHcmlkTmF2aWdhdGlvblJvd1JldHVyblR5cGU8YW55LCBhbnk+PiA9IHtcbiAgICBhc0NoaWxkUm93T2ZUYWJsZToge1xuXG4gICAgfSxcbiAgICBhc1BhcmVudFJvd09mQ2VsbHM6IHt9XG59Ki9cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzI6IHR5cGVvZiBjb25zb2xlW1wibG9nXCJdKSB7XG4gICAgbG9nID0gbG9nMlxufVxuXG5cbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gKiBcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMiBcbiAqIEBwYXJhbSByaHMyIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wczxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KC4uLmFsbFByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTWVyZ2VkUHJvcHNcIiwgYWxsUHJvcHMubGVuZ3RoKTtcbiAgICBsZXQgcmV0OiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczI8RT4ocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IGtub3ducyA9IG5ldyBTZXQ8c3RyaW5nPihbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pXG5cbmZ1bmN0aW9uIG1lcmdlVW5rbm93bihrZXk6IHN0cmluZywgbGhzVmFsdWU6IHVua25vd24sIHJoc1ZhbHVlOiB1bmtub3duKSB7XG5cbiAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUgYXMgbmV2ZXIsIHJoc1ZhbHVlIGFzIG5ldmVyKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZCBhcyBuZXZlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKChyaHNWYWx1ZSBhcyBhbnkpID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcbiAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgIGxvZz8uKGBUaGUgcHJvcCBcIiR7a2V5fVwiIGNhbm5vdCBzaW11bHRhbmVvdXNseSBiZSB0aGUgdmFsdWVzICR7bGhzVmFsdWV9IGFuZCAke3Joc1ZhbHVlfS4gT25lIG11c3QgYmUgY2hvc2VuIG91dHNpZGUgb2YgdXNlTWVyZ2VkUHJvcHMuYCk7XG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4obGhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgcmhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPik6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+IHtcblxuICAgIFxuICAgIGNvbnN0IHJldDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gPSB7XG4gICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmczxFPihsaHNBbGwucmVmLCByaHNBbGwucmVmKSxcbiAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHNBbGwuc3R5bGUsIHJoc0FsbC5zdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHNBbGxbXCJjbGFzc1wiXSwgbGhzQWxsLmNsYXNzTmFtZSwgcmhzQWxsW1wiY2xhc3NcIl0sIHJoc0FsbC5jbGFzc05hbWUpLFxuICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzQWxsLmNoaWxkcmVuLCByaHNBbGwuY2hpbGRyZW4pLFxuICAgIH0gYXMgYW55O1xuXG4gICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5yZWY7XG4gICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LnN0eWxlO1xuICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgIGlmIChyZXRbXCJjbGFzc1wiXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0W1wiY2xhc3NcIl07XG4gICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LmNoaWxkcmVuO1xuXG4gICAgZm9yIChjb25zdCBsaHNLZXlVIGluIGxoc0FsbCkge1xuICAgICAgICBjb25zdCBsaHNLZXkgPSBsaHNLZXlVIGFzIGtleW9mIHR5cGVvZiBsaHNBbGw7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHJoc0tleVUgaW4gcmhzQWxsKSB7XG4gICAgICAgIGNvbnN0IHJoc0tleSA9IHJoc0tleVUgYXMga2V5b2YgdHlwZW9mIHJoc0FsbDtcbiAgICAgICAgaWYgKGtub3ducy5oYXMocmhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlVW5rbm93bihyaHNLZXksIHJldFtyaHNLZXldLCByaHNBbGxbcmhzS2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcblxufVxuXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9uczxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIFUgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4obGhzOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCwgcmhzOiBVIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuXG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuXG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuXG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQgZXh0ZW5kcyBFdmVudFRhcmdldD4ge1xuICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICAgICAgZ2V0RWxlbWVudCgpOiBUIHwgbnVsbDtcbiAgICAgICAgcHJvcHNTdGFibGU6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+O1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPiB7XG4gICAgLyoqXG4gICAgICogRm9yIHRoZSBzYWtlIG9mIGNvbnZlbmllbmNlLFxuICAgICAqIHRoaXMgb25lIGlzIG9wdGlvbmFsLCBzaW5jZSB1c2luZyB0aGlzIGhvb2sgaXMgc28gY29tbW9uLFxuICAgICAqIGJ1dCB1c2luZyBpdHMgcGFyYW1ldGVyIG9wdGlvbnMgaXMgc28gdW5jb21tb24sIGFuZCBpdCdzXG4gICAgICogYWJzZW5zZSBpc24ndCB1c3VhbGx5IGJlY2F1c2UgaXQgd2FzIGZvcmdvdHRlbiwgaXQncyBiZWNhdXNlXG4gICAgICogaXQgZG9lc24ndCBtYXR0ZXIuXG4gICAgICovXG4gICAgcmVmRWxlbWVudFBhcmFtZXRlcnM/OiB7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZT86IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQgfCBudWxsLCBuZXZlcj47XG4gICAgICAgIG9uTW91bnQ/OiAoZWxlbWVudDogVCkgPT4gdm9pZDtcbiAgICAgICAgb25Vbm1vdW50PzogKGVsZW1lbnQ6IFQpID0+IHZvaWQ7XG4gICAgfVxufVxuXG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudFByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PihyOiBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxFPiwgLi4ub3RoZXJQcm9wczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10ge1xuICAgIHJldHVybiBbci5yZWZFbGVtZW50UmV0dXJuLnByb3BzU3RhYmxlLCAuLi5vdGhlclByb3BzXTtcbn0qL1xuXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LCBcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICogXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqIFxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQ8VCBleHRlbmRzIEV2ZW50VGFyZ2V0PihhcmdzOiBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPik6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQ+IHtcbiAgICBjb25zdCB7IG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50IH0gPSAoYXJncy5yZWZFbGVtZW50UGFyYW1ldGVycyB8fCB7fSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUmVmRWxlbWVudFwiLCBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCk7XG5cbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2s8T25QYXNzaXZlU3RhdGVDaGFuZ2U8VCB8IG51bGwsIG5ldmVyPj4oKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSEpO1xuXG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuXG4gICAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGU8VCB8IG51bGwsIG5ldmVyPihoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8VD4+KHsgcmVmOiBzZXRFbGVtZW50IH0pO1xuXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIGBCbG9ja2luZ0VsZW1lbnRzYCBtYW5hZ2VzIGEgc3RhY2sgb2YgZWxlbWVudHMgdGhhdCBpbmVydCB0aGUgaW50ZXJhY3Rpb25cbiAqIG91dHNpZGUgdGhlbS4gVGhlIHRvcCBlbGVtZW50IGlzIHRoZSBpbnRlcmFjdGl2ZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC5cbiAqIFRoZSBzdGFjayBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBtZXRob2RzIGBwdXNoLCByZW1vdmUsIHBvcGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tpbmdFbGVtZW50cyB7XG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiBUaGlzIGVtcHRpZXNcbiAgICogdGhlIGJsb2NraW5nIGVsZW1lbnRzXG4gICAqL1xuICBkZXN0cnVjdG9yKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIHRvcDogSFRNTEVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogQWRkcyB0aGUgZWxlbWVudCB0byB0aGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAqL1xuICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZyBlbGVtZW50cy4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgKiBlbGVtZW50IHdhcyByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICovXG4gIHBvcCgpOiBIVE1MRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGEgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIGhhcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50cyBleHRlbmRzIERvY3VtZW50IHtcbiAgJGJsb2NraW5nRWxlbWVudHM6IEJsb2NraW5nRWxlbWVudHM7XG59XG5cbigoKSA9PiB7XG4gIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG5cbiAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG5cbiAgaW50ZXJmYWNlIEluZXJ0YWJsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBpbmVydD86IGJvb2xlYW47XG4gIH1cblxuICBpbnRlcmZhY2UgSW50ZXJuYWxTdGF0ZSB7XG4gICAgW19zaWJsaW5nc1RvUmVzdG9yZV06IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+O1xuICAgIFtfcGFyZW50TU9dOiBNdXRhdGlvbk9ic2VydmVyO1xuICB9XG4gIGludGVyZmFjZSBIYXNJbnRlcm5hbFN0YXRlIGV4dGVuZHMgSW5lcnRhYmxlLCBJbnRlcm5hbFN0YXRlIHt9XG4gIGludGVyZmFjZSBNYXliZUhhc0ludGVybmFsU3RhdGUgZXh0ZW5kcyBJbmVydGFibGUsIFBhcnRpYWw8SW50ZXJuYWxTdGF0ZT4ge31cblxuICAvKipcbiAgICogU2hhZHlET00gc2hhZHkgcm9vdHMgbG9vayBhIGxvdCBsaWtlIHJlYWwgU2hhZG93Um9vdHMuIFRoZSBfX3NoYWR5IHByb3BlcnR5XG4gICAqIGdpdmVzIHRoZW0gYXdheSwgdGhvdWdoLlxuICAgKi9cbiAgaW50ZXJmYWNlIE1heWJlU2hhZHlSb290IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgX19zaGFkeTogdW5rbm93bjtcbiAgICBob3N0OiBFbGVtZW50O1xuICB9XG5cbiAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwgaW1wbGVtZW50cyBCbG9ja2luZ0VsZW1lbnRzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYmxvY2tpbmdFbGVtZW50c106IE1heWJlSGFzSW50ZXJuYWxTdGF0ZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcEVsUGFyZW50c106IEhhc0ludGVybmFsU3RhdGVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgKiBwdXNoZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbmV3IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+KCk7XG5cbiAgICBkZXN0cnVjdG9yKCk6IHZvaWQge1xuICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcyBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgW19ibG9ja2luZ0VsZW1lbnRzXTogbnVsbDtcbiAgICAgICAgW190b3BFbFBhcmVudHNdOiBudWxsO1xuICAgICAgICBbX2FscmVhZHlJbmVydEVsZW1lbnRzXTogbnVsbDtcbiAgICAgIH07XG4gICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IHRvcCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9wKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgaGFzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcENoYW5nZWRdKG5ld1RvcDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlfG51bGwpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICB9XG4gICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgLy8gYmVsb3cuXG4gICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cyBhcyBBcnJheTxIYXNJbnRlcm5hbFN0YXRlPjtcblxuICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcblxuICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICBpLS07XG4gICAgICAgIGotLTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgfVxuICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX3N3YXBJbmVydGVkU2libGluZ10oXG4gICAgICAgIG9sZEluZXJ0OiBIYXNJbnRlcm5hbFN0YXRlLCBuZXdJbmVydDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlKTogdm9pZCB7XG4gICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgfVxuICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAob2xkSW5lcnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgKG9sZEluZXJ0IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50czogSGFzSW50ZXJuYWxTdGF0ZVtdKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgKGVsZW1lbnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIChlbGVtZW50IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfaW5lcnRTaWJsaW5nc10oXG4gICAgICAgIGVsZW1lbnRzOiBNYXliZUhhc0ludGVybmFsU3RhdGVbXSwgdG9Ta2lwOiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwsXG4gICAgICAgIHRvS2VlcEluZXJ0OiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlITtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmUgYXMgTWF5YmVTaGFkeVJvb3Q7XG4gICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICB9XG4gICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICBjb25zdCB0YXJnZXQgPSAobXV0YXRpb24udGFyZ2V0IGFzIFNoYWRvd1Jvb3QpLmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCBhcyBIYXNJbnRlcm5hbFN0YXRlKTtcbiAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG5cbiAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgKi9cbiAgICBwcml2YXRlW19pc0luZXJ0YWJsZV0oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2dldFBhcmVudHNdKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQXJyYXk8SFRNTEVsZW1lbnQ+IHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBjdXJyZW50OiBIVE1MRWxlbWVudHxudWxsfHVuZGVmaW5lZCA9IGVsZW1lbnQ7XG4gICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8fFxuICAgICAgICAgICAgKGN1cnJlbnQgYXMgTm9kZSBhcyBTaGFkb3dSb290KS5ob3N0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudDogSFRNTEVsZW1lbnQpOlxuICAgICAgICBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwge1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICBsZXQgaTtcbiAgICAgIGxldCBqO1xuICAgICAgbGV0IG5vZGVzO1xuICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIChkb2N1bWVudCBhcyBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzKS4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290RWxlbWVudCBUaGUgSFRNTEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFIVE1MRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgYmFzZUlzQXJndW1lbnRzIGZyb20gJy4vX2Jhc2VJc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5pbXBvcnQgc3R1YkZhbHNlIGZyb20gJy4vc3R1YkZhbHNlLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBpc0J1ZmZlcjtcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBub2RlVXRpbDtcbiIsImltcG9ydCBiYXNlSXNUeXBlZEFycmF5IGZyb20gJy4vX2Jhc2VJc1R5cGVkQXJyYXkuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub3c7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1tZWRFbmRJbmRleDtcbiIsImltcG9ydCB0cmltbWVkRW5kSW5kZXggZnJvbSAnLi9fdHJpbW1lZEVuZEluZGV4LmpzJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVHJpbTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTeW1ib2w7XG4iLCJpbXBvcnQgYmFzZVRyaW0gZnJvbSAnLi9fYmFzZVRyaW0uanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGlzU3ltYm9sIGZyb20gJy4vaXNTeW1ib2wuanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gYmFzZVRyaW0odmFsdWUpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9OdW1iZXI7XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgbm93IGZyb20gJy4vbm93LmpzJztcbmltcG9ydCB0b051bWJlciBmcm9tICcuL3RvTnVtYmVyLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlYm91bmNlO1xuIiwiXG5pbXBvcnQgTG9kYXNoRGVib3VuY2UgZnJvbSBcImxvZGFzaC1lcy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi91c2Utc3RhdGVcIjtcblxuLy90eXBlIEZ1bmMgPSAoLi4uYXJnczogYW55KSA9PiBQcm9taXNlPHVua25vd24+IHwgdW5rbm93bjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VBc3luY1BhcmFtZXRlcnM8QVAgZXh0ZW5kcyB1bmtub3duW10sIFNQIGV4dGVuZHMgdW5rbm93bltdID0gQVA+IHtcbiAgICAvKipcbiAgICAgKiBJZiBwcm92aWRlZCwgYWRkcyBhIGRlYm91bmNlIGJlaGF2aW9yICppbiBhZGRpdGlvbiogdG9cbiAgICAgKiB0aGUgZGVmYXVsdCBcIndhaXQgdW50aWwgcmVzb2x2ZWRcIiB0aHJvdHRsaW5nIGJlaGF2aW9yLlxuICAgICAqL1xuICAgIGRlYm91bmNlPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgYHVzZUFzeW5jYCB3aXRoIGF1dG8tdGhyb3R0bGUgYmFzZWQgb24gaG93IGxvbmcgaXQgdGFrZXNcbiAgICAgKiBmb3IgdGhlIG9wZXJhdGlvbiB0byBjb21wbGV0ZS4gIElmIHlvdSB3b3VsZCBsaWtlIHRoZXJlIHRvIGJlIGFcbiAgICAgKiBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGFsbG93aW5nIGEgc2Vjb25kIG9wZXJhdGlvbixcbiAgICAgKiB0aGUgYHRocm90dGxlYCBwYXJhbWV0ZXIgY2FuIGJlIHVzZWQgaW4gYWRkaXRpb24gdG8gdGhhdCBiZWhhdmlvci5cbiAgICAgKiBcbiAgICAgKiBgdGhyb3R0bGVgICppbmNsdWRlcyogdGhlIHRpbWUgaXQgdGFrZXMgZm9yIHRoZSBhc3luYyBvcGVyYXRpb24gdG8gZmluaXNoLlxuICAgICAqIElmIGB0aHJvdHRsZWAgaXMgNTAwbXMsIGFuZCB0aGUgYXN5bmMgZnVuY3Rpb24gZmluaXNoZXMgaW4gNzAwbXMsIHRoZW5cbiAgICAgKiBhbm90aGVyIG9uZSB3aWxsIGJlIHJ1biBpbW1lZGlhdGVseS4gSWYgaXQgdG9vayAxMDBtcywgdGhlbiB3ZSdkIHdhaXRcbiAgICAgKiBmb3IgdGhlIHJlbWFpbmluZyA0MDBtcyB1bnRpbCBhbGxvd2luZyBhIHNlY29uZCBydW4uXG4gICAgICovXG4gICAgdGhyb3R0bGU/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGFuIGFzeW5jIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBkdWUgdG8gb25lIGFscmVhZHkgcnVubmluZyxcbiAgICAgKiBpdCB3aWxsIHJ1biBvbiBhIGRlbGF5IGFuZCwgYXMgYSByZXN1bHQsIHRoZSBvcmlnaW5hbCBhcmd1bWVudHNcbiAgICAgKiB0aGF0IHdlcmUgcGFzc2VkIHRvIGl0IG1heSBuZWVkIHRvIGJlIGFkanVzdGVkIHRvIGFjY291bnQgZm9yIHRoYXQuXG4gICAgICogXG4gICAgICogRm9yIGV4YW1wbGUsIGR1cmluZyBgb25JbnB1dGAsIHRoZSBgdmFsdWVgIG9mIHRoYXQgZXZlbnQgaXNuJ3Qgc3RvcmVkXG4gICAgICogaW4gdGhlIGV2ZW50IGl0c2VsZiwgaXQncyBzdG9yZWQgaW4gdGhlIGBIVE1MSW5wdXRFbGVtZW50YCB0aGF0IHJhaXNlZCBpdC5cbiAgICAgKiBTbyB3aGVuIG91ciBoYW5kbGVyIGFjdHVhbGx5IHJ1bnMgYSBmZXcgc2Vjb25kcyBsYXRlciwgaXQnbGwgcmVhZCB0aGUgKipuZXh0KipcbiAgICAgKiBgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZWAsIGluc3RlYWQgb2YgdGhlIG9uZSBmcm9tIGEgZmV3IHNlY29uZHMgYWdvIFxuICAgICAqIHRoYXQgYWN0dWFsbHkgcmFpc2VkIHRoZSBldmVudCFcbiAgICAgKiBcbiAgICAgKiBJZiB0aGUgYXJndW1lbnRzIHRvIHlvdXIgaGFuZGxlciByZXF1aXJlIHJlZmVyZW5jaW5nIGRhdGEgaW4gdGhlIGFyZ3VtZW50c1xuICAgICAqIHRoYXQgbWF5IGJlY29tZSBcInN0YWxlXCIgYnkgdGhlIHRpbWUgdGhlIGZ1bmN0aW9uIGFjdHVhbGx5IHJ1bnMgKGdlbmVyYWxseSBldmVudFxuICAgICAqIGhhbmRsZXJzIGFuZCBvdGhlciB0aGluZ3MgdGhhdCByZWZlcmVuY2UgdGhlIHByb3BlcnRpZXMgb2YgZXhpc3Rpbmcgb2JqZWN0cyksXG4gICAgICogdGhlIGBjYXB0dXJlYCBwYXJhbWV0ZXIgYWxsb3dzIHlvdSB0byB0cmFuc2Zvcm0gdGhlIHBhcmFtZXRlcnMgeW91IHdlcmUgZ2l2ZW5cbiAgICAgKiB3aGVuIHRoZSByZXF1ZXN0IHRvIHJ1biB3YXMgaW5pdGlhbGx5IG1hZGUgaW50byBwYXJhbWV0ZXJzIHRoYXQgeW91IGhhdmVcbiAgICAgKiBndWFyYW50ZWVkIHdpbGwgc3RpbGwgYmUgZ29vZCBieSB0aGUgdGltZSB0aGUgaGFuZGxlciBhY3R1YWxseSBydW5zLlxuICAgICAqL1xuICAgIGNhcHR1cmU/OiBDYXB0dXJlRnVuY3Rpb25UeXBlPEFQLCBTUD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQXN5bmNSZXR1cm5UeXBlPFNQIGV4dGVuZHMgdW5rbm93bltdLCBSPiB7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBhc3luYyBoYW5kbGVyIGlzIGN1cnJlbnRseSBleGVjdXRpbmcsIHRoaXMgaXMgdHJ1ZS5cbiAgICAgKiBXaGVuIGl0IGZpbmlzaGVzLCB0aGlzIGJlY29tZXMgZmFsc2UuXG4gICAgICovXG4gICAgcGVuZGluZzogYm9vbGVhbjtcblxuICAgIC8qKiBcbiAgICAgKiBUcnVlIHdoZW4gd2UncmUgd2FpdGluZyBmb3IgYSBkZWJvdW5jZSBvciB0aHJvdHRsZSB0byBlbmQgKHRoYXQncyBub3QgZHVlIHdhaXRpbmcgZm9yIHRoZSBhc3luYyBmdW5jdGlvbiB0byBjb21wbGV0ZSlcbiAgICAgKi9cbiAgICBkZWJvdW5jaW5nU3luYzogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFRydWUgd2hlbiBhIHNlY29uZCBpbnZvY2F0aW9uIG9mIHRoZSBoYW5kbGVyIGhhcyBiZWVuIGNhbGxlZCwgYW5kIGl0J3Mgd2FpdGluZyB1bnRpbCB0aGUgZmlyc3QgYmVmb3JlIGl0IHJ1bnMuXG4gICAgICovXG4gICAgZGVib3VuY2luZ0FzeW5jOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgaGFuZGxlciBoYXMgcnVuLlxuICAgICAqIERvZXMgbm90IGluY2x1ZGUgdGltZXMgd2hlcmUgaXQgd2FzIHRocm90dGxlZCBvciBkZWJvdW5jZWQgYXdheS5cbiAgICAgKiBcbiAgICAgKiBVc2VmdWwgZm9yIGtub3dpbmcgaWYgdGhlIGhhbmRsZXIgaGFzIGJlZW4gY2FsbGVkIHlldCwgb3IgZm9yXG4gICAgICogc2V0dGluZyBhIG5ldyB0aW1lb3V0IHRvIHNob3cgYSBzcGlubmVyLlxuICAgICAqL1xuICAgIGNhbGxDb3VudDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiB0aW1lcyB0aGUgaGFuZGxlciBoYXMgc2V0dGxlZFxuICAgICAqIChyZXNvbHZlZCBvciByZWplY3RlZCksIHNpbWlsYXJseSB0byBgY2FsbENvdW50YC5cbiAgICAgKiBcbiAgICAgKiBVc2VmdWwgZm9yIGtub3dpbmcgaWYgdGhlIGhhbmRsZXIgaGFzIGNvbXBsZXRlZCBldmVuIG9uY2UgeWV0LFxuICAgICAqIG9yIGp1c3QgZm9yIHdoZW4gdGhlIGhhbmRsZXIgaGFzIGZpbmlzaGVkXG4gICAgICovXG4gICAgc2V0dGxlQ291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIGhhbmRsZXIgaGFzIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHksIFxuICAgICAqIHNpbWlsYXJseSB0byBgc2V0dGxlQ291bnRgLlxuICAgICAqL1xuICAgIHJlc29sdmVDb3VudDogbnVtYmVyO1xuXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSBoYW5kbGVyIGhhcyBmYWlsZWQgdG8gY29tcGxldGUsIFxuICAgICAqIHNpbWlsYXJseSB0byBgcmVzb2x2ZUNvdW50YC5cbiAgICAgKi9cbiAgICByZWplY3RDb3VudDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyB0aGUgdmFsdWUgbW9zdCByZWNlbnRseSByZXR1cm5lZCBmcm9tIGEgc3VjY2Vzc2Z1bCBoYW5kbGVyIGludm9jYXRpb24sXG4gICAgICogb3IgdW5kZWZpbmVkIGlmIG5vIGhhbmRsZXIgaGFzIHN1Y2Nlc3NmdWxseSByZXR1cm5lZCB5ZXQuXG4gICAgICogXG4gICAgICogSWYgdGhlIGhhbmRsZXIgcmVqZWN0cyBhZnRlciBoYXZpbmcgc3VjY2VlZGVkIHByZXZpb3VzbHksIHRoZW5cbiAgICAgKiBgcmVzdWx0YCB3aWxsIHN0aWxsIGtlZXAgaXRzIHZhbHVlOyBpdCB3b24ndCBiZSBcImVyYXNlZFwiIGR1ZSB0byB0aGUgZXJyb3IuXG4gICAgICogVGhpcyBtZWFucyB0aGF0IGByZXN1bHRgIGFuZCBgZXJyb3JgIGNhbiBib3RoIGJlIHBvcHVsYXRlZCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIFxuICAgICAqIEBzZWUgaGFzUmVzdWx0IGZvciBpZiBgcmVzdWx0YCBiZWluZyBgdW5kZWZpbmVkYCBtZWFucyBpdCdzIHVuZmluaXNoZWQgb3IgdGhlIGZ1bmN0aW9uIGl0c2VsZiByZXR1cm5lZCBgdW5kZWZpbmVkYC5cbiAgICAgKi9cbiAgICByZXN1bHQ6IFIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIHdoZW4gdGhlIG1vc3QgcmVjZW50bHktcnVuIGhhbmRsZXIgY29tcGxldGVkIHN1Y2Nlc3NmdWxseSxcbiAgICAgKiBhbHNvIG1lYW5pbmcgdGhhdCB0aGF0IGl0J3MgcmV0dXJuZWQgYSB2YWx1ZSB0aGF0IHdlIGN1cnJlbnRseSBoYXZlLlxuICAgICAqIFxuICAgICAqIFdoaWxlIGBwZW5kaW5nYCBpcyB0cnVlLCAqKmBoYXNSZXN1bHRgIGFuZCBgaGFzRXJyb3JgIG1heSBiZSBzaW11bHRhbmVvdXNseSB0cnVlKiosXG4gICAgICogYnV0IGluIGFsbCBvdGhlciBjYXNlcyB0aGV5J3JlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cbiAgICAgKi9cbiAgICBoYXNSZXN1bHQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXJyb3IgdGhlIGhhbmRsZXIgdGhyZXcuIGB1bmRlZmluZWRgIG90aGVyd2lzZSwgdGhvdWdoIG5vdGVcbiAgICAgKiB0aGF0IGB1bmRlZmluZWRgIGlzIGEgdmFsaWQgdGhpbmcgdG8gdGhyb3csIHNvIGNoZWNrIGBoYXNFcnJvcmAgdG9vLlxuICAgICAqIFxuICAgICAqIEBzZWUgaGFzRXJyb3JcbiAgICAgKi9cbiAgICBlcnJvcjogdW5rbm93bjtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtb3N0IHJlY2VudCBoYW5kbGVyIGZpbmlzaGVkIHdpdGggYW4gZXJyb3IuXG4gICAgICogXG4gICAgICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSwgdGVjaG5pY2FsbHksIGBlcnJvcmAgY2FuIGJlIGB1bmRlZmluZWRgLlxuICAgICAqL1xuICAgIGhhc0Vycm9yOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogSWYgeW91IHdvdWxkIGxpa2UgYW55IGN1cnJlbnRseSBkZWJvdW5jZWQtYnV0LWV2ZW50dWFsbHktcGVuZGluZyBwcm9taXNlcyB0byBpbW1lZGlhdGVseSBiZSBjb25zaWRlcmVkIGJ5IGNhbmNlbGxpbmcgdGhlaXIgZGVib3VuY2UgdGltZW91dCxcbiAgICAgKiB5b3UgY2FuIGNhbGwgdGhpcyBmdW5jdGlvbi4gIE5vcm1hbCBwcm9jZWR1cmUgYXBwbGllcyBhcyBpZiB0aGUgZGVib3VuY2VkIGVuZGVkIG5vcm1hbGx5IC0tIGlmIHRoZXJlJ3Mgbm8gcHJvbWlzZSB3YWl0aW5nIGluIHRoZSBxdWV1ZSxcbiAgICAgKiB0aGUgZGVib3VuY2VkIHByb21pc2UgcnVucyBub3JtYWxseSwgb3RoZXJ3aXNlLCBpdCB3YWl0cyBpdHMgdHVybiB1bnRpbCB0aGUgY3VycmVudCBvbmUgZW5kcywgcG90ZW50aWFsbHkgYmVpbmcgb3ZlcndyaXR0ZW4gbGF0ZXIgb25cbiAgICAgKiBpZiBhIG5ldyBwcm9taXNlIHJ1bnMgb3V0ICppdHMqIGRlYm91bmNlIHRpbWVyIGJlZm9yZSB0aGlzIG9uZSBnb3QgYSBjaGFuY2UgdG8gcnVuLlxuICAgICAqIFxuICAgICAqICoqUXVhc2ktc3RhYmxlKiogKGRvbid0IHVzZSBkdXJpbmcgcmVuZGVyKVxuICAgICAqL1xuICAgIGZsdXNoRGVib3VuY2VkUHJvbWlzZTogKCkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqIEJhc2VkIG9uIHRoZSB0eXBlIG9mIGhhbmRsZXIgcGFzc2VkIGluLCB0aGlzIHJldHVybmVkIHZhbHVlIHdpbGxcbiAgICAgKiByZXByZXNlbnQgd2hhdCB0eXBlIG9mIGhhbmRsZXIgaXQgd2FzLCBqdXN0IGluIGNhc2UgeW91XG4gICAgICogeW91cnNlbGYgbmVlZCB0byBrbm93IHRoYXQgYW5kIGRvbid0IGhhdmUgYWNjZXNzIHRvIHRoZSBvcmlnaW5hbFxuICAgICAqIHRvIGZpbmQgb3V0IHdpdGhvdXQgaXQgYWN0dWFsbHkgYmVpbmcgcnVuLlxuICAgICAqIFxuICAgICAqIFVudGlsIGEgaGFuZGxlciBpcyBjYWxsZWQsIHRoaXMgd2lsbCBiZSBudWxsLiAgTmF0dXJhbGx5LCBpZiBcbiAgICAgKiBkaWZmZXJlbnQgaGFuZGxlcnMgYXJlIHBhc3NlZCBpbiwgaXQgY2FuIGZsaXAgYmFjayBhbmRcbiAgICAgKiBmb3J0aCBiZXR3ZWVuIFwiYXN5bmNcIiBhbmQgXCJzeW5jXCIgYXMgd2VsbC5cbiAgICAgKi9cbiAgICAvL2N1cnJlbnRUeXBlOiBudWxsIHwgXCJzeW5jXCIgfCBcImFzeW5jXCI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHJhbnNmb3JtZWQgdmVyc2lvbiBvZiB0aGUgYXN5bmMgaGFuZGxlciBwcm92aWRlZCxcbiAgICAgKiBub3cgc3luY2hyb25vdXMgYW5kL29yIHRocm90dGxlZCBhbmQvb3IgZGVib3VuY2VkXG4gICAgICogXG4gICAgICogKipRdWFzaS1zdGFibGUqKiAoZG9uJ3QgdXNlIGR1cmluZyByZW5kZXIpXG4gICAgICovXG4gICAgc3luY0hhbmRsZXI6IFN5bmNGdW5jdGlvblR5cGU8U1AsIHZvaWQ+O1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eTxBUCBleHRlbmRzIHVua25vd25bXSwgU1AgZXh0ZW5kcyB1bmtub3duW10+KC4uLnQ6IFNQKSB7IHJldHVybiB0IGFzIHVua25vd25bXSBhcyBBUDsgfVxuXG4vKipcbiAqIFJldHVybnMgYSB0aHJvdHRsZWQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gKHN0YWJsZSkgY2FsbGJhY2sgdXNpbmcgTG9kYXNoJ3MgYHRocm90dGxlYCBmdW5jdGlvbi5cbiAqIFxuICogSWYgdGhlIGNhbGxiYWNrIGlzIGBudWxsYCwgdGhlbiBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZCwgb3RoZXJ3aXNlIGBjYWxsYmFja2AgbXVzdCBiZSBzdGFibGUgZm9yIHRoaXMgdG8gd29yayBhcyBpbnRlbnRlZC5cbiAqL1xuLypleHBvcnQgZnVuY3Rpb24gdXNlVGhyb3R0bGVkPEYgZXh0ZW5kcyBGdW5jPihjYWxsYmFjazogRiB8IG51bGwsIHdhaXQ6IG51bWJlciwgb3B0aW9ucz86IFRocm90dGxlU2V0dGluZ3MpOiBEZWJvdW5jZWRGdW5jPEY+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRocm90dGxlZDxGIGV4dGVuZHMgRnVuYz4oY2FsbGJhY2s6IEYgfCBudWxsLCB3YWl0OiBudW1iZXIsIG9wdGlvbnM/OiBUaHJvdHRsZVNldHRpbmdzKTogRGVib3VuY2VkRnVuYzxGPiB8IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gdXNlVGhyb3R0bGVkPEYgZXh0ZW5kcyBGdW5jPihjYWxsYmFja1Vuc3RhYmxlOiBGIHwgbnVsbCwgd2FpdDogbnVtYmVyLCBvcHRpb25zPzogVGhyb3R0bGVTZXR0aW5ncyk6IERlYm91bmNlZEZ1bmM8Rj4gfCBudWxsIHtcbiAgICBsZXQgeyBsZWFkaW5nLCB0cmFpbGluZyB9ID0gKG9wdGlvbnMgfHwge30pO1xuICAgIC8vIFRoZXNlIGFyZSB0aGUgbG9kYXNoIGRlZmF1bHRzLCBidXQgbG9kYXNoIHRyZWF0cyBub25leGlzdGVuY2UgYW5kIGJlaW5nIHVuZGVmaW5lZCBhcyBzZXBhcmF0ZSB0aGluZ3MuLi5cbiAgICBsZWFkaW5nID8/PSB0cnVlO1xuICAgIHRyYWlsaW5nID8/PSB0cnVlO1xuICAgIGNvbnN0IGVuYWJsZWQgPSAoY2FsbGJhY2tVbnN0YWJsZSAhPSBudWxsKTtcbiAgICBjb25zdCBjYWxsYmFja1N0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrVW5zdGFibGUgPz8gbm9vcCk7XG4gICAgY29uc3QgdGhyb3R0bGVkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmFibGVkID8gdGhyb3R0bGUoY2FsbGJhY2tTdGFibGUsIHdhaXQsIHsgbGVhZGluZywgdHJhaWxpbmcgfSkgOiBudWxsO1xuICAgIH0sIFtlbmFibGVkLCB3YWl0LCBvcHRpb25zPy5sZWFkaW5nLCBvcHRpb25zPy50cmFpbGluZ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHsgY29uc29sZS5sb2coXCJjYW5jZWwgdGhyb3R0bGVcIik7IHRocm90dGxlZD8uY2FuY2VsKCk7IH1cbiAgICB9LCBbdGhyb3R0bGVkXSlcblxuICAgIHJldHVybiB0aHJvdHRsZWQ7XG59Ki9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgdGhlIGdpdmVuIChzdGFibGUpIGNhbGxiYWNrIHVzaW5nIExvZGFzaCdzIGBkZWJvdW5jZWRgIGZ1bmN0aW9uLlxuICogXG4gKiBJZiB0aGUgY2FsbGJhY2sgaXMgYG51bGxgLCB0aGVuIGBudWxsYCB3aWxsIGJlIHJldHVybmVkLCBvdGhlcndpc2UgYGNhbGxiYWNrYCBtdXN0IGJlIHN0YWJsZSBmb3IgdGhpcyB0byB3b3JrIGFzIGludGVudGVkLlxuICovXG4vKmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJvdW5jZWQ8RiBleHRlbmRzIEZ1bmM+KGNhbGxiYWNrOiBGLCB3YWl0OiBudW1iZXIsIG9wdGlvbnM/OiBEZWJvdW5jZVNldHRpbmdzKTogRGVib3VuY2VkRnVuYzxGPjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJvdW5jZWQ8RiBleHRlbmRzIEZ1bmM+KGNhbGxiYWNrOiBGIHwgbnVsbCwgd2FpdDogbnVtYmVyLCBvcHRpb25zPzogRGVib3VuY2VTZXR0aW5ncyk6IERlYm91bmNlZEZ1bmM8Rj4gfCBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYm91bmNlZDxGIGV4dGVuZHMgRnVuYz4oY2FsbGJhY2tVbnN0YWJsZTogRiB8IG51bGwsIHdhaXQ6IG51bWJlciwgb3B0aW9ucz86IERlYm91bmNlU2V0dGluZ3MpOiBEZWJvdW5jZWRGdW5jPEY+IHwgbnVsbCB7XG4gICAgbGV0IHsgbGVhZGluZywgbWF4V2FpdCwgdHJhaWxpbmcgfSA9IChvcHRpb25zIHx8IHt9KTtcbiAgICAvLyBUaGVzZSBhcmUgdGhlIGxvZGFzaCBkZWZhdWx0cywgYnV0IGxvZGFzaCB0cmVhdHMgbm9uZXhpc3RlbmNlIGFuZCBiZWluZyB1bmRlZmluZWQgYXMgc2VwYXJhdGUgdGhpbmdzLi4uXG4gICAgbGVhZGluZyA/Pz0gZmFsc2U7XG4gICAgdHJhaWxpbmcgPz89IHRydWU7XG4gICAgbWF4V2FpdCA/Pz0gMWU5OTtcbiAgICBjb25zdCBlbmFibGVkID0gKGNhbGxiYWNrVW5zdGFibGUgIT0gbnVsbCk7XG4gICAgY29uc3QgY2FsbGJhY2tTdGFibGUgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFja1Vuc3RhYmxlID8/IG5vb3ApO1xuICAgIGNvbnN0IGRlYm91bmNlZCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICByZXR1cm4gZW5hYmxlZCA/IGRlYm91bmNlKGNhbGxiYWNrU3RhYmxlLCB3YWl0LCB7IGxlYWRpbmcsIHRyYWlsaW5nLCBtYXhXYWl0IH0pIDogbnVsbDtcbiAgICB9LCBbZW5hYmxlZCwgd2FpdCwgbGVhZGluZywgbWF4V2FpdCwgdHJhaWxpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7IGNvbnNvbGUubG9nKFwiY2FuY2VsIGRlYm91bmNlXCIpOyBkZWJvdW5jZWQ/LmNhbmNlbCgpOyB9XG4gICAgfSwgW2RlYm91bmNlZF0pXG5cbiAgICByZXR1cm4gZGVib3VuY2VkO1xufSovXG5cbnR5cGUgU3luY0Z1bmN0aW9uVHlwZTxTUCBleHRlbmRzIHVua25vd25bXSwgUj4gPSAoLi4uYXJnczogU1ApID0+IChSIHwgdW5kZWZpbmVkKTtcbnR5cGUgQXN5bmNGdW5jdGlvblR5cGU8QVAgZXh0ZW5kcyB1bmtub3duW10sIFI+ID0gKCguLi5hcmdzOiBBUCkgPT4gKFIgfCBQcm9taXNlPFI+KSk7XG4vL3R5cGUgR2x1ZUZ1bmN0aW9uVHlwZTxBUCBleHRlbmRzIHVua25vd25bXSwgUj4gPSAoZW5xdWV1ZTogYm9vbGVhbiwgLi4uYXJnczogQVApID0+IFIgfCB1bmRlZmluZWQ7XG50eXBlIENhcHR1cmVGdW5jdGlvblR5cGU8QVAgZXh0ZW5kcyB1bmtub3duW10sIFNQIGV4dGVuZHMgdW5rbm93bltdID0gQVA+ID0gKC4uLmFyZ3M6IFNQKSA9PiBBUDtcblxuLyoqXG4gKiBHaXZlbiBhbiBhc3luYyBmdW5jdGlvbiwgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQncyBzdWl0YWJsZSBmb3Igbm9uLWFzeW5jIEFQSXMsIFxuICogYWxvbmcgd2l0aCBvdGhlciBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBydW4ncyBzdGF0dXMuXG4gKiBcbiAqIFNlZSBhbHNvIGB1c2VBc3luY0hhbmRsZXJgIGZvciBhIHZlcnNpb24gdGhhdCdzIHNwZWNpYWxpemVkIGZvciBET00gZXZlbnQgaGFuZGxlcnMuXG4gKiBcbiAqIFdoZW4gY2FsbGVkIG11bHRpcGxlIHRpbWVzIGluIHF1aWNrIHN1Y2Nlc3Npb24sIChpLmUuIGJlZm9yZSB0aGUgaGFuZGxlciBoYXMgZmluaXNoZWQpLCBcbiAqIHRoaXMgd29ya3MgbGlrZSBMb2Rhc2gncyBgdGhyb3R0bGVgIGZ1bmN0aW9uIHdpdGggdGhlIGB3YWl0YCBvcHRpb24gYWx3YXlzXG4gKiBzZXQgdG8gaG93ZXZlciBsb25nIHRoZSBoYW5kbGVyIHRha2VzIHRvIGNvbXBsZXRlLiBBIHNlY29uZCBjYWxsIHRvIHRoZSBzeW5jIGZ1bmN0aW9uIHdpbGwgYmUgXG4gKiB0aHJvdHRsZWQgdW50aWwgdGhlIGZpcnN0IGNhbGwgaGFzIGZpbmlzaGVkLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiBpcyB0aGUgcmVzdWx0IFxuICogb2YgdGhlIHByZXZpb3VzIGludm9jYXRpb24sIG9yIGB1bmRlZmluZWRgIG9uIHRoZSBmaXJzdCBjYWxsLlxuICogXG4gKiBUaGUgaGFuZGxlciBpcyBvbmx5IGV2ZXIgZGVsYXllZCBpZiBvbmUgaXMgY3VycmVudGx5IHJ1bm5pbmcsIHNvLCBlLmcuIGZvciBpT1MgdG91Y2ggZXZlbnRzIHRoZVxuICogZmlyc3QgY2FsbCBoYXBwZW5zIGluIHRoZSBzYW1lIGV2ZW50IGhhbmRsZXIgKHdoaWNoIG1lYW5zIHRoaW5ncyBsaWtlIGNhbGxzIHRvIGBlbGVtZW50LmZvY3VzKClgXG4gKiB3aWxsIHdvcmsgYXMgaW50ZW5kZWQsIHNpbmNlIHRoYXQgZmFpbHMgd2hlbiB0aGUgZXZlbnQgaXMgXCJzcGxpdCB1cFwiKVxuICogXG4gKiBGaW5hbGx5LCBiZWNhdXNlIHRoZSBzeW5jIGhhbmRsZXIgbWF5IGJlIGludm9rZWQgb24gYSBkZWxheSwgYW55IHByb3BlcnR5IHJlZmVyZW5jZXMgb24gdGhlIGFyZ3VtZW50c1xuICogcHJvdmlkZWQgbWlnaHQgYmUgc3RhbGUgYnkgdGhlIHRpbWUgaXQncyBhY3R1YWxseSBpbnZva2VkIChlLmcuIGFjY2Vzc2luZyBgZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkYFxuICogaXMgbm90IHN0YWJsZSBhY3Jvc3MgdGltZSBiZWNhdXNlIGl0J3MgYSBcImxpdmVcIiB2YWx1ZSAtLSB5b3UgYWxtb3N0IGFsd2F5cyB3YW50IHRoZSB2YWx1ZSB0aGF0IGl0XG4gKiBoYWQgYXQgdGhlIG9yaWdpbmFsIHRpbWUgdGhlIGhhbmRsZXIgd2FzIGNhbGxlZCkuIFRoZSBgY2FwdHVyZWAgb3B0aW9uIGFsbG93cyB5b3UgdG8gc2F2ZSB0aGF0IGtpbmQgb2ZcbiAqIGR5bmFtaWMgZGF0YSBhdCB0aGUgdGltZSBpdCBydW5zOyB0aGUgYEFQYCBhbmQgYFNQYCB0eXBlIHBhcmFtZXRlcnMgbGlrZXdpc2UgY29udHJvbFxuICogdGhlIHBhcmFtZXRlcnMgdGhlIGFzeW5jIGhhbmRsZXIgYW5kIHN5bmMgaGFuZGxlciBleHBlY3QgcmVzcGVjdGl2ZWx5LlxuICogXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBc3luYzxBUCBleHRlbmRzIHVua25vd25bXSwgUiwgU1AgZXh0ZW5kcyB1bmtub3duW10gPSBBUD4oYXN5bmNIYW5kbGVyMjogQXN5bmNGdW5jdGlvblR5cGU8QVAsIFI+IHwgbnVsbCwgb3B0aW9ucz86IFVzZUFzeW5jUGFyYW1ldGVyczxBUCwgU1A+KTogVXNlQXN5bmNSZXR1cm5UeXBlPFNQLCBSPiB7XG5cblxuICAgIC8vIFRoaW5ncyByZWxhdGVkIHRvIGN1cnJlbnQgZXhlY3V0aW9uXG4gICAgLy8gQmVjYXVzZSB3ZSBjYW4gYm90aCByZXR1cm4gYW5kIHRocm93IHVuZGVmaW5lZCwgXG4gICAgLy8gd2UgbmVlZCBzZXBhcmF0ZSBzdGF0ZSB0byB0cmFjayB0aGVpciBleGlzdGFuY2UgdG9vLlxuICAgIGNvbnN0IFtwZW5kaW5nLCBzZXRQZW5kaW5nLCBfZ2V0UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0LCBfZ2V0UmVzdWx0XSA9IHVzZVN0YXRlPFI+KHVuZGVmaW5lZCEpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3IsIF9nZXRFcnJvcl0gPSB1c2VTdGF0ZTx1bmtub3duPih1bmRlZmluZWQhKTtcbiAgICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yLCBfZ2V0SGFzRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KGZhbHNlKTtcbiAgICBjb25zdCBbaGFzUmVzdWx0LCBzZXRIYXNSZXN1bHQsIF9nZXRIYXNSZXN1bHRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KGZhbHNlKTtcbiAgICBjb25zdCBbYXN5bmNEZWJvdW5jaW5nLCBzZXRBc3luY0RlYm91bmNpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzeW5jRGVib3VuY2luZywgc2V0U3luY0RlYm91bmNpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vY29uc3QgW2N1cnJlbnRDYXB0dXJlLCBzZXRDdXJyZW50Q2FwdHVyZV0gPSB1c2VTdGF0ZTxBUCB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgICBjb25zdCBpbmNyZW1lbnRDYWxsQ291bnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFJ1bkNvdW50KGMgPT4gYyArIDEpIH0sIFtdKTtcbiAgICBjb25zdCBpbmNyZW1lbnRSZXNvbHZlQ291bnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFJlc29sdmVDb3VudChjID0+IGMgKyAxKSB9LCBbXSk7XG4gICAgY29uc3QgaW5jcmVtZW50UmVqZWN0Q291bnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFJlamVjdENvdW50KGMgPT4gYyArIDEpIH0sIFtdKTtcbiAgICBjb25zdCBpbmNyZW1lbnRGaW5hbGx5Q291bnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7IHNldFNldHRsZUNvdW50KGMgPT4gYyArIDEpIH0sIFtdKTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuICAgIGxldCB7IHRocm90dGxlLCBkZWJvdW5jZSwgY2FwdHVyZTogY2FwdHVyZVVuc3RhYmxlIH0gPSAob3B0aW9ucyA/PyB7fSk7XG4gICAgY29uc3QgY2FwdHVyZVN0YWJsZSA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhcHR1cmVVbnN0YWJsZSA/PyBpZGVudGl0eSk7XG4gICAgY29uc3QgYXN5bmNIYW5kbGVyU3RhYmxlID0gdXNlU3RhYmxlQ2FsbGJhY2s8KC4uLmFyZ3M6IEFQKSA9PiBSIHwgUHJvbWlzZTxSPj4oYXN5bmNIYW5kbGVyMiA/PyAoaWRlbnRpdHkgYXMgYW55KSk7XG4gICAgY29uc3QgeyBmbHVzaCwgc3luY091dHB1dCwgY2FuY2VsIH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFzeW5jVG9TeW5jPEFQLCBTUCwgUj4oe1xuICAgICAgICAgICAgYXN5bmNJbnB1dDogYXN5bmNIYW5kbGVyU3RhYmxlLFxuICAgICAgICAgICAgY2FwdHVyZTogY2FwdHVyZVN0YWJsZSxcbiAgICAgICAgICAgIG9uQXN5bmNEZWJvdW5jZTogc2V0QXN5bmNEZWJvdW5jaW5nLFxuICAgICAgICAgICAgb25FcnJvcjogc2V0RXJyb3IsXG4gICAgICAgICAgICBvblBlbmRpbmc6IHNldFBlbmRpbmcsXG4gICAgICAgICAgICBvblJldHVyblZhbHVlOiBzZXRSZXN1bHQsXG4gICAgICAgICAgICBvblN5bmNEZWJvdW5jZTogc2V0U3luY0RlYm91bmNpbmcsXG4gICAgICAgICAgICBvbkhhc0Vycm9yOiBzZXRIYXNFcnJvcixcbiAgICAgICAgICAgIG9uSGFzUmVzdWx0OiBzZXRIYXNSZXN1bHQsXG4gICAgICAgICAgICBvbkludm9rZTogaW5jcmVtZW50Q2FsbENvdW50LFxuICAgICAgICAgICAgb25GaW5hbGx5OiBpbmNyZW1lbnRGaW5hbGx5Q291bnQsXG4gICAgICAgICAgICBvblJlamVjdDogaW5jcmVtZW50UmVqZWN0Q291bnQsXG4gICAgICAgICAgICBvblJlc29sdmU6IGluY3JlbWVudFJlc29sdmVDb3VudCxcbiAgICAgICAgICAgIHRocm90dGxlOiBvcHRpb25zPy50aHJvdHRsZSxcbiAgICAgICAgICAgIHdhaXQ6IG9wdGlvbnM/LmRlYm91bmNlXG4gICAgICAgIH0pXG4gICAgfSwgW3Rocm90dGxlLCBkZWJvdW5jZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbCgpO1xuICAgIH0sIFtjYW5jZWxdKVxuXG4gICAgLy8gV2Uga2VlcCwgbGlrZSwgYSBsb3Qgb2YgcmVuZGVyLXN0YXRlLCBidXQgaXQgb25seSBldmVyIHRyaWdnZXJzIGEgcmUtcmVuZGVyXG4gICAgLy8gd2hlbiB3ZSBzdGFydC9zdG9wIGFuIGFzeW5jIGFjdGlvbi5cblxuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhpcyBmb3IgdGhlIGNhbGxlcidzIHNha2UgLS0gd2UgZG9uJ3QgcmVhbGx5IGNhcmUuXG4gICAgLypjb25zdCBbY3VycmVudFR5cGUsIHNldEN1cnJlbnRUeXBlXSA9IHVzZVN0YXRlPG51bGwgfCBcInN5bmNcIiB8IFwiYXN5bmNcIj4obnVsbCk7Ki9cbiAgICBjb25zdCBbcnVuQ291bnQsIHNldFJ1bkNvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzZXR0bGVDb3VudCwgc2V0U2V0dGxlQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Jlc29sdmVDb3VudCwgc2V0UmVzb2x2ZUNvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtyZWplY3RDb3VudCwgc2V0UmVqZWN0Q291bnRdID0gdXNlU3RhdGUoMCk7XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN5bmNIYW5kbGVyOiBzeW5jT3V0cHV0LFxuICAgICAgICAvL2N1cnJlbnRUeXBlLFxuICAgICAgICBwZW5kaW5nLFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBoYXNFcnJvcjogaGFzRXJyb3IgfHwgZmFsc2UsXG4gICAgICAgIGhhc1Jlc3VsdDogaGFzUmVzdWx0IHx8IGZhbHNlLFxuICAgICAgICByZXNvbHZlQ291bnQsXG4gICAgICAgIHJlamVjdENvdW50LFxuICAgICAgICBzZXR0bGVDb3VudCxcbiAgICAgICAgZGVib3VuY2luZ0FzeW5jOiBhc3luY0RlYm91bmNpbmcsXG4gICAgICAgIGRlYm91bmNpbmdTeW5jOiBzeW5jRGVib3VuY2luZyxcbiAgICAgICAgY2FsbENvdW50OiBydW5Db3VudCxcbiAgICAgICAgZmx1c2hEZWJvdW5jZWRQcm9taXNlOiBmbHVzaFxuICAgIH1cblxuXG59XG5cblxuXG5cblxuXG5cbmludGVyZmFjZSBBc3luY1RvU3luY1BhcmFtZXRlcnM8QXN5bmNBcmdzIGV4dGVuZHMgYW55W10sIFN5bmNBcmdzIGV4dGVuZHMgYW55W10sIFJldHVybj4ge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHN5bmMgdmVyc2lvbiBvZlxuICAgICAqL1xuICAgIGFzeW5jSW5wdXQ6ICguLi5hcmdzOiBBc3luY0FyZ3MpID0+IChSZXR1cm4gfCBQcm9taXNlPFJldHVybj4pO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgZnVuY3Rpb24gc3RhcnRzIHJ1bm5pbmcsIHRoaXMgaXMgc2V0IHRvIHRydWUuXG4gICAgICogV2hlbiBpdCBzdG9wcyBydW5uaW5nLCB0aGlzIGlzIHNldCB0byBmYWxzZS5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIHRoZSBzYW1lIGZvciBzeW5jIGFuZCBhc3luYyBmdW5jdGlvbnMuIFdoZW5cbiAgICAgKiBhIHN5bmMgZnVuY3Rpb24gaXMgdXNlZCwgb25QZW5kaW5nIHdpbGwgYmUgY2FsbGVkIHR3aWNlIG9uIHRoZSBzYW1lIGZyYW1lLlxuICAgICAqL1xuICAgIG9uUGVuZGluZyhwZW5kaW5nOiBib29sZWFuKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlICpzeW5jIGhhbmRsZXIgaXMgaW52b2tlZCogKGV2ZW4gaWYgdGhlIGFzeW5jIGhhbmRsZXIgZG9lc24ndCBydW4geWV0KSwgdGhpcyBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIGRlYm91bmNlIHBlcmlvZCwgYXMgc3BlY2lmaWVkIGJ5IGVpdGhlciBgd2FpdGAgb3IgYHRocm90dGxlYCwgYXMgZW5kZWQsIHRoaXMgaXMgc2V0IHRvIGBmYWxzZS5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIHRoZSBzYW1lIGV2ZW4gd2hlbiBub3QgdXNpbmcgYHdhaXRgIG9yIGB0aHJvdHRsZWAuIEluIHRoaXMgY2FzZSwgYG9uU3luY0RlYm91bmNlYCB3aWxsIGJlIGNhbGxlZCB0d2ljZSBvbiB0aGUgc2FtZSBmcmFtZS5cbiAgICAgKiBAcGFyYW0gZGVib3VuY2luZyBcbiAgICAgKi9cbiAgICBvblN5bmNEZWJvdW5jZShkZWJvdW5jaW5nOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBhc3luYyBoYW5kbGVyIGlzIGFib3V0IHRvIHN0YXJ0IHJ1bm5pbmcgKGFmdGVyIGRlYm91bmNpbmcgYW5kIHRocm90dGxpbmcgaGF2ZSBmaW5pc2hlZCksIFxuICAgICAqIGJ1dCBtdXN0IHdhaXQgZm9yIGFub3RoZXIgaW4tcHJvY2VzcyBoYW5kbGVyIHRvIGZpbmlzaCwgdGhpcyBpcyBzZXQgdG8gYHRydWVgLlxuICAgICAqIFxuICAgICAqIFdoZW4gdGhlIGhhbmRsZXIgZmluaXNoZXMgKHJlZ2FyZGxlc3Mgb2YgaWYgaXQgd2FzIHN5bmMgb3IgYXN5bmMpLCB0aGlzIGlzIHNldCB0byBgZmFsc2VgLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBkZWJvdW5jaW5nIFxuICAgICAqL1xuICAgIG9uQXN5bmNEZWJvdW5jZShkZWJvdW5jaW5nOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBoYW5kbGVyIHJldHVybnMsIGl0cyByZXR1cm4gdmFsdWUgd2lsbCBiZSBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiAoYWZ0ZXIgYXdhaXRpbmcgaXQgaWYgbmVjZXNzYXJ5KS5cbiAgICAgKiBcbiAgICAgKiBFdmVuIGlmIHRoZSBoYW5kbGVyIGRvZXMgbm90IHJldHVybiBhbnl0aGluZywgdGhpcyB3aWxsIHN0aWxsIGJlIGNhbGxlZCAod2l0aCBgdW5kZWZpbmVkYClcbiAgICAgKiBcbiAgICAgKiBUaGlzIHZhbHVlIGlzIG5vdCByZXNldCBhdCBhbnkgdGltZSEgU2VlIGBzZXRIYXNSZXR1cm5gIHRvIGRldGVybWluZSBpZiB0aGVyZSBpcyBhIHZhbHVlIGF0IGFueSBnaXZlbiB0aW1lLlxuICAgICAqIEBwYXJhbSByZXQgXG4gICAgICovXG4gICAgb25SZXR1cm5WYWx1ZShyZXQ6IFJldHVybik6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBoYW5kbGVyIGB0aHJvd2BzLCB0aGUgdmFsdWUgdGhyb3duIHdpbGwgYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24uXG4gICAgICogXG4gICAgICogVGhpcyB2YWx1ZSBpcyBub3QgcmVzZXQgYXQgYW55IHRpbWUhIFNlZSBgc2V0SGFzRXJyb3JgIHRvIGRldGVybWluZSBpZiB0aGVyZSBpcyBhIHZhbHVlIGF0IGFueSBnaXZlbiB0aW1lLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBleCBcbiAgICAgKi9cbiAgICBvbkVycm9yKGV4OiB1bmtub3duKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGhhbmRsZXIgaXMgYWJvdXQgdG8gYmUgY2FsbGVkIChhZnRlciBhbGwgbWV0aG9kcyBvZiBkZWJvdW5jaW5nIGFuZCB0aHJvdHRsaW5nIGFuZCBzdWNoKVxuICAgICAqIHRoaXMgaXMgYWx3YXlzIGNhbGxlZCBvbmNlLlxuICAgICAqL1xuICAgIG9uSW52b2tlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgaGFuZGxlciByZXR1cm5zIHN1Y2Nlc3NmdWxseSwgdGhpcyB3aWxsIGJlIGNhbGxlZCBvbmNlLlxuICAgICAqL1xuICAgIG9uUmVzb2x2ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGhhbmRsZXIgcmVqZWN0cywgZm9yIGFueSByZWFzb24sIHRoaXMgd2lsbCBiZSBjYWxsZWQgb25jZS5cbiAgICAgKi9cbiAgICBvblJlamVjdCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGhhbmRsZXIgcmVzb2x2ZXMsIGZvciBhbnkgcmVhc29uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIG9uY2UuXG4gICAgICovXG4gICAgb25GaW5hbGx5KCk6IHZvaWQ7XG5cbiAgICAvL29uUmVzb2x2ZTIodHlwZTogXCJyZXNvbHZlXCIsIHZhbHVlOiBSZXR1cm4pOiB2b2lkO1xuICAgIC8vb25SZXNvbHZlMih0eXBlOiBcInJlamVjdFwiLCB2YWx1ZTogRXJyb3IpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogSXQncyBmcmVxdWVudGx5IG5lY2Vzc2FyeSAoZXNwZWNpYWxseSB3aXRoIERPTSBldmVudHMpIHRvIHNhdmVcbiAgICAgKiB2YWx1ZXMgc28gdGhhdCB0aGV5IGRvbid0IGJlY29tZSBzdGFsZS4gIEZvciBleGFtcGxlLCByZWZlcmVuY2luZ1xuICAgICAqIGBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlYCBpcyBhICpsaXZlKiB2YWx1ZSwgc28geW91ciBoYW5kbGVyXG4gICAgICogY291bGQgYmUgY2FsbGVkIHdpdGgsIHNlZW1pbmdseSwgZGlmZmVyZW50IGFyZ3VtZW50cyB0aGFuIHdlcmUgaW5pdGlhbGx5IHBhc3NlZC5cbiAgICAgKiBcbiAgICAgKiBUbyBwcmV2ZW50IHRoaXMgXCJzdGFsZSBhcmd1bWVudFwiIHByb2JsZW0sIHlvdSBjYW4gY2FwdHVyZSB0aGUgdXNlZnVsIHBhcnRzXG4gICAgICogb2Ygd2hhdGV2ZXIgdGhlIGFzeW5jIGZ1bmN0aW9uJ3MgYXJndW1lbnRzIGFyZSBpbnRvIGFuIG9iamVjdCB0aGF0J3Mgbm90IGxpdmUuXG4gICAgICogXG4gICAgICogYGNhcHR1cmVgIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGFyZ3VtZW50cyB5b3VyIHN5bmMgaGFuZGxlciB0YWtlcywgXG4gICAgICogYW5kIHNob3VsZCByZXR1cm4gdGhlIGFyZ3VtZW50cyB5b3VyIGFzeW5jIGhhbmRsZXIgdGFrZXMgYXMgYW4gYXJyYXkuXG4gICAgICogXG4gICAgICogRm9yIGV4YW1wbGUsIGBlID0+IFtlLCBlLmN1cnJlbnRUYXJnZXQudmFsdWVdYFxuICAgICAqL1xuICAgIGNhcHR1cmU6IENhcHR1cmVGdW5jdGlvblR5cGU8QXN5bmNBcmdzLCBTeW5jQXJncz47XG5cbiAgICAvKipcbiAgICAgKiBJZGVudGljYWwgdG8gTG9kYXNoJ3MgYHRocm90dGxlYCBmdW5jdGlvbiwgYXBwbHlpbmcgKmJlZm9yZSogd2FpdGluZyBmb3IgYW55IHByaW9yIGFzeW5jIGhhbmRsZXJzIHRvIGZpbmlzaC5cbiAgICAgKi9cbiAgICB0aHJvdHRsZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogSWRlbnRpY2FsIHRvIExvZGFzaCdzIGBkZWJvdW5jZWAgZnVuY3Rpb24sIGFwcGx5aW5nICpiZWZvcmUqIHdhaXRpbmcgZm9yIGFueSBwcmlvciBhc3luYyBoYW5kbGVycyB0byBmaW5pc2guXG4gICAgICovXG4gICAgd2FpdDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgaGFuZGxlciBpcyBhYm91dCB0byBydW4sIHRoaXMgaXMgc2V0IHRvIGBudWxsYC5cbiAgICAgKiBcbiAgICAgKiBJZiB0aGUgaGFuZGxlciB0aHJvd3MsIHRoZW4gdGhpcyB3aWxsIGJlIHNldCB0byBgdHJ1ZWAuIElmIGl0IHJlc29sdmVzLCB0aGlzIHdpbGwgYmUgc2V0IHRvIGBmYWxzZWAuXG4gICAgICogXG4gICAgICogVGhpcyBpcyB0aGUgc2FtZSBmb3Igc3luYyBhbmQgYXN5bmMgZnVuY3Rpb25zOyBcbiAgICAgKiBzeW5jIGZ1bmN0aW9ucyB3aWxsIHJlc3VsdCBpbiB0aGlzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCB0d2ljZSBpbiBvbmUgZnJhbWUuXG4gICAgICovXG4gICAgb25IYXNFcnJvcihoYXNFcnJvcjogYm9vbGVhbiB8IG51bGwpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgaGFuZGxlciBpcyBhYm91dCB0byBydW4sIHRoaXMgaXMgc2V0IHRvIGBudWxsYC5cbiAgICAgKiBcbiAgICAgKiBJZiB0aGUgaGFuZGxlciByZXNvbHZlcyBzdWNjZXNzZnVsbHksIHRoZW4gdGhpcyB3aWxsIGJlIHNldCB0byBgdHJ1ZWAuIElmIGl0IHRocm93cywgdGhpcyB3aWxsIGJlIHNldCB0byBgZmFsc2VgLlxuICAgICAqIFxuICAgICAqIFRoaXMgaXMgdGhlIHNhbWUgZm9yIHN5bmMgYW5kIGFzeW5jIGZ1bmN0aW9uczsgXG4gICAgICogc3luYyBmdW5jdGlvbnMgd2lsbCByZXN1bHQgaW4gdGhpcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgdHdpY2UgaW4gb25lIGZyYW1lLlxuICAgICAqL1xuICAgIG9uSGFzUmVzdWx0KGhhc1Jlc3VsdDogYm9vbGVhbiB8IG51bGwpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQXN5bmNUb1N5bmNSZXR1cm48U3luY0FyZ3MgZXh0ZW5kcyBhbnlbXT4ge1xuICAgIC8qKlxuICAgICAqIFRoZSBzeW5jIHZlcnNpb24gb2YgdGhlIGhhbmRsZXIgeW91IHNwZWNpZmllZC5cbiAgICAgKiBcbiAgICAgKiBJdCBkb2Vzbid0IHJldHVybiBhIHZhbHVlIChiZWNhdXNlIGl0IGNhbid0IGluIGNhc2UgdGhlIGhhbmRsZXIgd2FzIGFzeW5jKS5cbiAgICAgKi9cbiAgICBzeW5jT3V0cHV0OiAoLi4uYXJnczogU3luY0FyZ3MpID0+IHZvaWQ7XG4gICAgZmx1c2goKTogdm9pZDtcbiAgICBjYW5jZWwoKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlPFQ+KHA6IFQgfCBQcm9taXNlPFQ+KTogcCBpcyBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gcCBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwiVW5zZXRcIik7XG5cbi8qKlxuICogbG9kYXNoLWlzaCBmdW5jdGlvbiB0aGF0J3MgbGlrZSBkZWJvdW5jZSArICh0aHJvdHRsZSB3LyBhc3luYyBoYW5kbGluZykgY29tYmluZWQuXG4gKiBcbiAqIFJlcXVpcmVzIGEgbG90IG9mIGNhbGxiYWNrcyB0byBtZWFuaW5nZnVsbHkgdHVybiBhIHJlZCBmdW5jdGlvbiBpbnRvIGEgYmx1ZSBvbmUsIGJ1dCB5b3UgKmNhbiogZG8gaXQhXG4gKiBOb3RlIHRoYXQgcGFydCBvZiB0aGlzIGlzIGVtdWxhdGluZyB0aGUgZmFjdCB0aGF0IHRoZSBzeW5jIGhhbmRsZXIgY2Fubm90IGhhdmUgYSByZXR1cm4gdmFsdWUsXG4gKiBzbyB5b3UnbGwgbmVlZCB0byB1c2UgYHNldFJlc29sdmVgIGFuZCB0aGUgb3RoZXIgcmVsYXRlZCBmdW5jdGlvbnMgdG8gZG8gdGhhdCBpbiB3aGF0ZXZlciB3YXkgd29ya3MgZm9yIHlvdXIgc3BlY2lmaWMgc2NlbmFyaW8uXG4gKiBcbiAqIFRoZSBjb21tZW50cyBhcmUgbnVtYmVyZWQgaW4gYXBwcm94aW1hdGUgZXhlY3V0aW9uIG9yZGVyIGZvciB5b3VyIHJlYWRpbmcgcGxlYXN1cmUgKDEgaXMgbmVhciB0aGUgYm90dG9tKS5cbiAqL1xuZnVuY3Rpb24gYXN5bmNUb1N5bmM8QXN5bmNBcmdzIGV4dGVuZHMgYW55W10sIFN5bmNBcmdzIGV4dGVuZHMgYW55W10sIFJldHVybj4oeyBhc3luY0lucHV0LCBvbkludm9rZSwgb25GaW5hbGx5OiBvbkZpbmFsbHlBbnksIG9uUmVqZWN0LCBvblJlc29sdmUsIG9uSGFzRXJyb3IsIG9uSGFzUmVzdWx0LCBvbkVycm9yLCBvblJldHVyblZhbHVlLCBjYXB0dXJlLCBvbkFzeW5jRGVib3VuY2UsIG9uU3luY0RlYm91bmNlLCBvblBlbmRpbmcsIHRocm90dGxlLCB3YWl0IH06IEFzeW5jVG9TeW5jUGFyYW1ldGVyczxBc3luY0FyZ3MsIFN5bmNBcmdzLCBSZXR1cm4+KTogQXN5bmNUb1N5bmNSZXR1cm48U3luY0FyZ3M+IHtcbiAgICBsZXQgcGVuZGluZyA9IGZhbHNlO1xuICAgIGxldCBzeW5jRGVib3VuY2luZyA9IGZhbHNlO1xuICAgIGxldCBhc3luY0RlYm91bmNpbmcgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudENhcHR1cmU6IEFzeW5jQXJncyB8IHR5cGVvZiBVbnNldCA9IFVuc2V0O1xuXG4gICAgY29uc3Qgb25GaW5hbGx5ID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIDguIFRoaXMgaXMgcnVuIGF0IHRoZSBlbmQgb2YgZXZlcnkgaW52b2NhdGlvbiBvZiB0aGUgYXN5bmMgaGFuZGxlcixcbiAgICAgICAgLy8gd2hldGhlciBpdCBjb21wbGV0ZWQgb3Igbm90LCBhbmQgd2hldGhlciBpdCB3YXMgYXN5bmMgb3Igbm90LlxuICAgICAgICBvbkZpbmFsbHlBbnkoKTtcbiAgICAgICAgb25QZW5kaW5nKHBlbmRpbmcgPSBmYWxzZSk7XG5cbiAgICAgICAgb25Bc3luY0RlYm91bmNlKGFzeW5jRGVib3VuY2luZyA9IGZhbHNlKTtcbiAgICAgICAgaWYgKCFhc3luY0RlYm91bmNpbmcpIHtcbiAgICAgICAgICAgIC8vIDlhLiBBZnRlciBjb21wbGV0aW5nIHRoZSBhc3luYyBoYW5kbGVyLCB3ZSBmb3VuZCB0aGF0IGl0IHdhc24ndCBjYWxsZWQgYWdhaW4gc2luY2UgdGhlIGxhc3QgdGltZS5cbiAgICAgICAgICAgIC8vIFRoaXMgbWVhbnMgd2UgY2FuIGp1c3QgZW5kLiBXZSdyZSBkb25lLiBNaXNzaW9uIGFjY29tcGxpc2hlZC5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIDliLiBBbm90aGVyIHJlcXVlc3QgdG8gcnVuIHRoZSBhc3luYyBoYW5kbGVyIGNhbWUgaW4gd2hpbGUgd2Ugd2VyZSBydW5uaW5nIHRoaXMgb25lLlxuICAgICAgICAgICAgLy8gSW5zdGVhZCBvZiBzdG9wcGluZywgd2UncmUganVzdCBnb2luZyB0byBpbW1lZGlhdGVseSBydW4gYWdhaW4gdXNpbmcgdGhlIGFyZ3VtZW50cyB0aGF0IHdlcmUgZ2l2ZW4gdG8gdXMgbW9zdCByZWNlbnRseS5cbiAgICAgICAgICAgIC8vIFdlIGFsc28gY2xlYXIgdGhhdCBmbGFnLCBiZWNhdXNlIHdlJ3JlIGhhbmRsaW5nIGl0IG5vdy4gSXQnbGwgYmUgc2V0IGFnYWluIGlmIHRoZSBoYW5kbGVyIGlzIGNhbGxlZCBhZ2FpbiB3aGlsZSAqdGhpcyogb25lIGlzIHJ1bm5pbmdcbiAgICAgICAgICAgIC8vb25Bc3luY0RlYm91bmNlKGFzeW5jRGVib3VuY2luZyA9IGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGN1cnJlbnRDYXB0dXJlICE9PSBVbnNldCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudENhcHR1cmUgIT0gVW5zZXQpIHtcbiAgICAgICAgICAgICAgICBvblN5bmNEZWJvdW5jZShzeW5jRGVib3VuY2luZyA9IHRydWUpO1xuICAgICAgICAgICAgICAgIHN5bmNEZWJvdW5jZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHN5bmMgPSAoLi4uYXJnczogQXN5bmNBcmdzKSA9PiB7XG4gICAgICAgIC8vIDUuIFdlJ3JlIGZpbmFsbHkgcnVubmluZyB0aGUgYXN5bmMgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb24sIHNvIG5vdGlmeSB0aGUgY2FsbGVyIHRoYXQgdGhlIHJldHVybiB2YWx1ZSBpcyBwZW5kaW5nLlxuICAgICAgICAvLyBBbmQgYmVjYXVzZSB0aGUgZmFjdCB0aGF0IHdlJ3JlIGhlcmUgbWVhbnMgdGhlIGRlYm91bmNlL3Rocm90dGxlIHBlcmlvZCBpcyBvdmVyLCB3ZSBjYW4gY2xlYXIgdGhhdCBmbGFnIHRvby5cbiAgICAgICAgb25QZW5kaW5nKHBlbmRpbmcgPSB0cnVlKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoc3luY0RlYm91bmNpbmcgPT0gZmFsc2UpO1xuICAgICAgICBvbkhhc0Vycm9yKG51bGwpO1xuICAgICAgICBvbkhhc1Jlc3VsdChudWxsKTtcbiAgICAgICAgbGV0IHByb21pc2VPclJldHVybjogUHJvbWlzZTxSZXR1cm4+IHwgUmV0dXJuIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGxldCBoYWRTeW5jRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIDYuIFJ1biB0aGUgZnVuY3Rpb24gd2Ugd2VyZSBnaXZlbi5cbiAgICAgICAgICAgIC8vIEJlY2F1c2UgaXQgbWF5IGJlIHN5bmMsIG9yIGl0IG1heSB0aHJvdyBiZWZvcmUgcmV0dXJuaW5nLCB3ZSBtdXN0IHN0aWxsIHdyYXAgaXQgaW4gYSB0cnkvY2F0Y2guLi5cbiAgICAgICAgICAgIC8vIEFsc28gaW1wb3J0YW50IGlzIHRoYXQgd2UgcHJlc2VydmUgdGhlIGFzeW5jLW5lc3MgKG9yIGxhY2sgdGhlcmVvZikgb24gdGhlIG9yaWdpbmFsIGlucHV0IGZ1bmN0aW9uLlxuICAgICAgICAgICAgb25JbnZva2UoKTtcbiAgICAgICAgICAgIHByb21pc2VPclJldHVybiA9IGFzeW5jSW5wdXQoLi4uYXJncyk7XG4gICAgICAgICAgICBvbkhhc0Vycm9yKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIGhhZFN5bmNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBvbkVycm9yKGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDcuIEVpdGhlciBlbmQgaW1tZWRpYXRlbHksIG9yIHNjaGVkdWxlIHRvIGVuZCB3aGVuIGNvbXBsZXRlZC5cbiAgICAgICAgaWYgKGlzUHJvbWlzZShwcm9taXNlT3JSZXR1cm4pKSB7XG4gICAgICAgICAgICBwcm9taXNlT3JSZXR1cm5cbiAgICAgICAgICAgICAgICAudGhlbihyID0+IHsgb25SZXNvbHZlKCk7IG9uSGFzUmVzdWx0KHRydWUpOyBvblJldHVyblZhbHVlKHIpOyByZXR1cm4gcjsgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7IG9uUmVqZWN0KCk7IG9uSGFzRXJyb3IodHJ1ZSk7IG9uRXJyb3IoZSk7IHJldHVybiBlOyB9KVxuICAgICAgICAgICAgICAgIC5maW5hbGx5KG9uRmluYWxseSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhZFN5bmNFcnJvcikge1xuICAgICAgICAgICAgICAgIG9uUmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIG9uSGFzUmVzdWx0KHRydWUpO1xuICAgICAgICAgICAgICAgIG9uSGFzRXJyb3IoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb25SZWplY3QoKTtcbiAgICAgICAgICAgICAgICBvbkhhc1Jlc3VsdChmYWxzZSk7XG4gICAgICAgICAgICAgICAgb25IYXNFcnJvcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uUmV0dXJuVmFsdWUocHJvbWlzZU9yUmV0dXJuIGFzIFJldHVybik7XG4gICAgICAgICAgICBvblBlbmRpbmcocGVuZGluZyA9IGZhbHNlKTtcbiAgICAgICAgICAgIG9uRmluYWxseSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3luY0RlYm91bmNlZCA9IExvZGFzaERlYm91bmNlKCgpID0+IHtcbiAgICAgICAgLy8gMy4gSW5zdGVhZCBvZiBjYWxsaW5nIHRoZSBzeW5jIHZlcnNpb24gb2Ygb3VyIGZ1bmN0aW9uIGRpcmVjdGx5LCB3ZSBhbGxvdyBpdCB0byBiZSB0aHJvdHRsZWQvZGVib3VuY2VkLlxuICAgICAgICBvblN5bmNEZWJvdW5jZShzeW5jRGVib3VuY2luZyA9IGZhbHNlKTtcbiAgICAgICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICAgICAgICAvLyA0YS4gSWYgdGhpcyBpcyB0aGUgZmlyc3QgaW52b2NhdGlvbiwgb3IgaWYgd2UncmUgbm90IHN0aWxsIHdhaXRpbmcgZm9yIGEgcHJldmlvdXMgaW52b2NhdGlvbiB0byBmaW5pc2ggaXRzIGFzeW5jIGNhbGwsXG4gICAgICAgICAgICAvLyB0aGVuIHdlIGNhbiBqdXN0IGdvIGFoZWFkIGFuZCBydW4gdGhlIGRlYm91bmNlZCB2ZXJzaW9uIG9mIG91ciBmdW5jdGlvbi5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGN1cnJlbnRDYXB0dXJlICE9IFVuc2V0KTtcbiAgICAgICAgICAgIHN5bmMoLi4uKGN1cnJlbnRDYXB0dXJlIGFzIEFzeW5jQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gNGIuIElmIHdlIHdlcmUgY2FsbGVkIHdoaWxlIHN0aWxsIHdhaXRpbmcgZm9yIHRoZSAob3IgYSkgcHJldmlvdXMgaW52b2NhdGlvbiB0byBmaW5pc2gsXG4gICAgICAgICAgICAvLyB0aGVuIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBvbmUuIFdoZW4gdGhhdCBwcmV2aW91cyBpbnZvY2F0aW9uIGZpbmlzaGVzLCBpdCdsbCBjaGVja1xuICAgICAgICAgICAgLy8gdG8gc2VlIGlmIGl0IG5lZWRzIHRvIHJ1biBhZ2FpbiwgYW5kIGl0IHdpbGwgdXNlIHRoZXNlIG5ldyBjYXB0dXJlZCBhcmd1bWVudHMgZnJvbSBzdGVwIDIuXG4gICAgICAgICAgICBvbkFzeW5jRGVib3VuY2UoYXN5bmNEZWJvdW5jaW5nID0gdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH0sIHdhaXQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUsIG1heFdhaXQ6IHRocm90dGxlIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3luY091dHB1dDogKC4uLmFyZ3M6IFN5bmNBcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyAxLiBXZSBjYWxsIHRoZSBzeW5jIHZlcnNpb24gb2Ygb3VyIGFzeW5jIGZ1bmN0aW9uLlxuICAgICAgICAgICAgLy8gMi4gV2UgY2FwdHVyZSB0aGUgYXJndW1lbnRzIGludG8gYSBmb3JtIHRoYXQgd29uJ3QgYmVjb21lIHN0YWxlIGlmL3doZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGEgKHBvc3NpYmx5IHNlY29uZHMtbG9uZykgZGVsYXkgKGUuZy4gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSBvbiBhbiA8aW5wdXQ+IGVsZW1lbnQpLlxuICAgICAgICAgICAgY3VycmVudENhcHR1cmUgPSBjYXB0dXJlKC4uLmFyZ3MpO1xuICAgICAgICAgICAgb25TeW5jRGVib3VuY2Uoc3luY0RlYm91bmNpbmcgPSB0cnVlKTtcbiAgICAgICAgICAgIHN5bmNEZWJvdW5jZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmx1c2g6ICgpID0+IHtcbiAgICAgICAgICAgIHN5bmNEZWJvdW5jZWQuZmx1c2goKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsOiAoKSA9PiB7XG4gICAgICAgICAgICBzeW5jRGVib3VuY2VkLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG5jb25zdCB7IHN5bmNPdXRwdXQgfSA9IGFzeW5jVG9TeW5jPFthc3luYzogXCJhc3luY1wiXSwgW3N5bmM6IFwic3luY1wiXSwgbnVtYmVyPih7XG4gICAgYXN5bmNJbnB1dDogYXN5bmMgKGFzeW5jKSA9PiB7IHJldHVybiAwIH0sXG4gICAgY2FwdHVyZTogKHN5bmMpID0+IFtcImFzeW5jXCJdLFxuICAgIG9uSW52b2tlOiAoKSA9PiB7IH0sXG4gICAgb25GaW5hbGx5OiAoKSA9PiB7IH0sXG4gICAgb25SZWplY3Q6ICgpID0+IHsgfSxcbiAgICBvblJlc29sdmU6ICgpID0+IHsgfSxcbiAgICBvbkFzeW5jRGVib3VuY2U6ICgpID0+IHsgfSxcbiAgICBvbkVycm9yOiAoKSA9PiB7IH0sXG4gICAgb25IYXNFcnJvcjogKCkgPT4geyB9LFxuICAgIG9uSGFzUmVzdWx0OiAoKSA9PiB7IH0sXG4gICAgb25QZW5kaW5nOiAoKSA9PiB7IH0sXG4gICAgb25SZXR1cm5WYWx1ZTogKCkgPT4geyB9LFxuICAgIG9uU3luY0RlYm91bmNlOiAoKSA9PiB7IH0sXG4gICAgdGhyb3R0bGU6IDAsXG4gICAgd2FpdDogMFxufSlcblxuY29uc3QgdmFsdWUgPSBzeW5jT3V0cHV0KFwic3luY1wiKVxuIiwiLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgYSBkaWZmZXJlbnQgc2hhcGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXG4gKiBAcGFyYW0ge29iamVjdH0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RGlmZmVycyhhLCBiKSB7XG5cdGZvciAobGV0IGkgaW4gYSkgaWYgKGkgIT09ICdfX3NvdXJjZScgJiYgIShpIGluIGIpKSByZXR1cm4gdHJ1ZTtcblx0Zm9yIChsZXQgaSBpbiBiKSBpZiAoaSAhPT0gJ19fc291cmNlJyAmJiBhW2ldICE9PSBiW2ldKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSB2YWx1ZVxuICogQHBhcmFtIHsqfSB4XG4gKiBAcGFyYW0geyp9IHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXMoeCwgeSkge1xuXHRyZXR1cm4gKHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSkgfHwgKHggIT09IHggJiYgeSAhPT0geSk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc2hhbGxvd0RpZmZlcnMgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIENvbXBvbmVudCBjbGFzcyB3aXRoIGEgcHJlZGVmaW5lZCBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCBpbXBsZW1lbnRhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwKSB7XG5cdHRoaXMucHJvcHMgPSBwO1xufVxuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG4vLyBTb21lIHRoaXJkLXBhcnR5IGxpYnJhcmllcyBjaGVjayBpZiB0aGlzIHByb3BlcnR5IGlzIHByZXNlbnRcblB1cmVDb21wb25lbnQucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblB1cmVDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKHByb3BzLCBzdGF0ZSkge1xuXHRyZXR1cm4gc2hhbGxvd0RpZmZlcnModGhpcy5wcm9wcywgcHJvcHMpIHx8IHNoYWxsb3dEaWZmZXJzKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHNoYWxsb3dEaWZmZXJzIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBNZW1vaXplIGEgY29tcG9uZW50LCBzbyB0aGF0IGl0IG9ubHkgdXBkYXRlcyB3aGVuIHRoZSBwcm9wcyBhY3R1YWxseSBoYXZlXG4gKiBjaGFuZ2VkLiBUaGlzIHdhcyBwcmV2aW91c2x5IGtub3duIGFzIGBSZWFjdC5wdXJlYC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9IGMgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAqIEBwYXJhbSB7KHByZXY6IG9iamVjdCwgbmV4dDogb2JqZWN0KSA9PiBib29sZWFufSBbY29tcGFyZXJdIEN1c3RvbSBlcXVhbGl0eSBmdW5jdGlvblxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVtbyhjLCBjb21wYXJlcikge1xuXHRmdW5jdGlvbiBzaG91bGRVcGRhdGUobmV4dFByb3BzKSB7XG5cdFx0bGV0IHJlZiA9IHRoaXMucHJvcHMucmVmO1xuXHRcdGxldCB1cGRhdGVSZWYgPSByZWYgPT0gbmV4dFByb3BzLnJlZjtcblx0XHRpZiAoIXVwZGF0ZVJlZiAmJiByZWYpIHtcblx0XHRcdHJlZi5jYWxsID8gcmVmKG51bGwpIDogKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb21wYXJlcikge1xuXHRcdFx0cmV0dXJuIHNoYWxsb3dEaWZmZXJzKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICFjb21wYXJlcih0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICF1cGRhdGVSZWY7XG5cdH1cblxuXHRmdW5jdGlvbiBNZW1vZWQocHJvcHMpIHtcblx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHNob3VsZFVwZGF0ZTtcblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChjLCBwcm9wcyk7XG5cdH1cblx0TWVtb2VkLmRpc3BsYXlOYW1lID0gJ01lbW8oJyArIChjLmRpc3BsYXlOYW1lIHx8IGMubmFtZSkgKyAnKSc7XG5cdE1lbW9lZC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cdE1lbW9lZC5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0cmV0dXJuIE1lbW9lZDtcbn1cbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcblxubGV0IG9sZERpZmZIb29rID0gb3B0aW9ucy5fZGlmZjtcbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGlmICh2bm9kZS50eXBlICYmIHZub2RlLnR5cGUuX2ZvcndhcmRlZCAmJiB2bm9kZS5yZWYpIHtcblx0XHR2bm9kZS5wcm9wcy5yZWYgPSB2bm9kZS5yZWY7XG5cdFx0dm5vZGUucmVmID0gbnVsbDtcblx0fVxuXHRpZiAob2xkRGlmZkhvb2spIG9sZERpZmZIb29rKHZub2RlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBSRUFDVF9GT1JXQVJEX1NZTUJPTCA9XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmXG5cdFx0U3ltYm9sLmZvciAmJlxuXHRcdFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykpIHx8XG5cdDB4ZjQ3O1xuXG4vKipcbiAqIFBhc3MgcmVmIGRvd24gdG8gYSBjaGlsZC4gVGhpcyBpcyBtYWlubHkgdXNlZCBpbiBsaWJyYXJpZXMgd2l0aCBIT0NzIHRoYXRcbiAqIHdyYXAgY29tcG9uZW50cy4gVXNpbmcgYGZvcndhcmRSZWZgIHRoZXJlIGlzIGFuIGVhc3kgd2F5IHRvIGdldCBhIHJlZmVyZW5jZVxuICogb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IGluc3RlYWQgb2Ygb25lIG9mIHRoZSB3cmFwcGVyIGl0c2VsZi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRm9yd2FyZEZufSBmblxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZFJlZihmbikge1xuXHRmdW5jdGlvbiBGb3J3YXJkZWQocHJvcHMpIHtcblx0XHRsZXQgY2xvbmUgPSBhc3NpZ24oe30sIHByb3BzKTtcblx0XHRkZWxldGUgY2xvbmUucmVmO1xuXHRcdHJldHVybiBmbihjbG9uZSwgcHJvcHMucmVmIHx8IG51bGwpO1xuXHR9XG5cblx0Ly8gbW9ieC1yZWFjdCBjaGVja3MgZm9yIHRoaXMgYmVpbmcgcHJlc2VudFxuXHRGb3J3YXJkZWQuJCR0eXBlb2YgPSBSRUFDVF9GT1JXQVJEX1NZTUJPTDtcblx0Ly8gbW9ieC1yZWFjdCBoZWF2aWx5IHJlbGllcyBvbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLlxuXHQvLyBJdCBleHBlY3RzIGFuIG9iamVjdCBoZXJlIHdpdGggYSBgcmVuZGVyYCBwcm9wZXJ0eSxcblx0Ly8gYW5kIHByb3RvdHlwZS5yZW5kZXIgd2lsbCBmYWlsLiBXaXRob3V0IHRoaXNcblx0Ly8gbW9ieC1yZWFjdCB0aHJvd3MuXG5cdEZvcndhcmRlZC5yZW5kZXIgPSBGb3J3YXJkZWQ7XG5cblx0Rm9yd2FyZGVkLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0gRm9yd2FyZGVkLl9mb3J3YXJkZWQgPSB0cnVlO1xuXHRGb3J3YXJkZWQuZGlzcGxheU5hbWUgPSAnRm9yd2FyZFJlZignICsgKGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUpICsgJyknO1xuXHRyZXR1cm4gRm9yd2FyZGVkO1xufVxuIiwiaW1wb3J0IHsgdG9DaGlsZEFycmF5IH0gZnJvbSAncHJlYWN0JztcblxuY29uc3QgbWFwRm4gPSAoY2hpbGRyZW4sIGZuKSA9PiB7XG5cdGlmIChjaGlsZHJlbiA9PSBudWxsKSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIHRvQ2hpbGRBcnJheSh0b0NoaWxkQXJyYXkoY2hpbGRyZW4pLm1hcChmbikpO1xufTtcblxuLy8gVGhpcyBBUEkgaXMgY29tcGxldGVseSB1bm5lY2Vzc2FyeSBmb3IgUHJlYWN0LCBzbyBpdCdzIGJhc2ljYWxseSBwYXNzdGhyb3VnaC5cbmV4cG9ydCBjb25zdCBDaGlsZHJlbiA9IHtcblx0bWFwOiBtYXBGbixcblx0Zm9yRWFjaDogbWFwRm4sXG5cdGNvdW50KGNoaWxkcmVuKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuID8gdG9DaGlsZEFycmF5KGNoaWxkcmVuKS5sZW5ndGggOiAwO1xuXHR9LFxuXHRvbmx5KGNoaWxkcmVuKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZCA9IHRvQ2hpbGRBcnJheShjaGlsZHJlbik7XG5cdFx0aWYgKG5vcm1hbGl6ZWQubGVuZ3RoICE9PSAxKSB0aHJvdyAnQ2hpbGRyZW4ub25seSc7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZWRbMF07XG5cdH0sXG5cdHRvQXJyYXk6IHRvQ2hpbGRBcnJheVxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3Qgb2xkQ2F0Y2hFcnJvciA9IG9wdGlvbnMuX2NhdGNoRXJyb3I7XG5vcHRpb25zLl9jYXRjaEVycm9yID0gZnVuY3Rpb24oZXJyb3IsIG5ld1ZOb2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdGlmIChlcnJvci50aGVuKSB7XG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdFx0bGV0IGNvbXBvbmVudDtcblx0XHRsZXQgdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmIGNvbXBvbmVudC5fY2hpbGREaWRTdXNwZW5kKSB7XG5cdFx0XHRcdGlmIChuZXdWTm9kZS5fZG9tID09IG51bGwpIHtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRG9uJ3QgY2FsbCBvbGRDYXRjaEVycm9yIGlmIHdlIGZvdW5kIGEgU3VzcGVuc2Vcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5fY2hpbGREaWRTdXNwZW5kKGVycm9yLCBuZXdWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdG9sZENhdGNoRXJyb3IoZXJyb3IsIG5ld1ZOb2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKTtcbn07XG5cbmNvbnN0IG9sZFVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5vcHRpb25zLnVubW91bnQgPSBmdW5jdGlvbih2bm9kZSkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0Y29uc3QgY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuX29uUmVzb2x2ZSkge1xuXHRcdGNvbXBvbmVudC5fb25SZXNvbHZlKCk7XG5cdH1cblxuXHQvLyBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIGh5ZHJhdGluZ1xuXHQvLyBtb3N0IGxpa2VseSBpdCBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnQgaXMgc3VzcGVuZGVkXG5cdC8vIHdlIHNldCB0aGUgdm5vZGUudHlwZSBhcyBgbnVsbGAgc28gdGhhdCBpdCBpcyBub3QgYSB0eXBlb2YgZnVuY3Rpb25cblx0Ly8gc28gdGhlIHVubW91bnQgd2lsbCByZW1vdmUgdGhlIHZub2RlLl9kb21cblx0aWYgKGNvbXBvbmVudCAmJiB2bm9kZS5faHlkcmF0aW5nID09PSB0cnVlKSB7XG5cdFx0dm5vZGUudHlwZSA9IG51bGw7XG5cdH1cblxuXHRpZiAob2xkVW5tb3VudCkgb2xkVW5tb3VudCh2bm9kZSk7XG59O1xuXG5mdW5jdGlvbiBkZXRhY2hlZENsb25lKHZub2RlLCBkZXRhY2hlZFBhcmVudCwgcGFyZW50RG9tKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50ICYmIHZub2RlLl9jb21wb25lbnQuX19ob29rcykge1xuXHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZvckVhY2goZWZmZWN0ID0+IHtcblx0XHRcdFx0aWYgKHR5cGVvZiBlZmZlY3QuX2NsZWFudXAgPT0gJ2Z1bmN0aW9uJykgZWZmZWN0Ll9jbGVhbnVwKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzID0gbnVsbDtcblx0XHR9XG5cblx0XHR2bm9kZSA9IGFzc2lnbih7fSwgdm5vZGUpO1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPT09IHBhcmVudERvbSkge1xuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPSBkZXRhY2hlZFBhcmVudDtcblx0XHRcdH1cblx0XHRcdHZub2RlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHZub2RlLl9jaGlsZHJlbiA9XG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4gJiZcblx0XHRcdHZub2RlLl9jaGlsZHJlbi5tYXAoY2hpbGQgPT5cblx0XHRcdFx0ZGV0YWNoZWRDbG9uZShjaGlsZCwgZGV0YWNoZWRQYXJlbnQsIHBhcmVudERvbSlcblx0XHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU9yaWdpbmFsKHZub2RlLCBkZXRhY2hlZFBhcmVudCwgb3JpZ2luYWxQYXJlbnQpIHtcblx0aWYgKHZub2RlKSB7XG5cdFx0dm5vZGUuX29yaWdpbmFsID0gbnVsbDtcblx0XHR2bm9kZS5fY2hpbGRyZW4gPVxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuICYmXG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4ubWFwKGNoaWxkID0+XG5cdFx0XHRcdHJlbW92ZU9yaWdpbmFsKGNoaWxkLCBkZXRhY2hlZFBhcmVudCwgb3JpZ2luYWxQYXJlbnQpXG5cdFx0XHQpO1xuXG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQpIHtcblx0XHRcdGlmICh2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPT09IGRldGFjaGVkUGFyZW50KSB7XG5cdFx0XHRcdGlmICh2bm9kZS5fZG9tKSB7XG5cdFx0XHRcdFx0b3JpZ2luYWxQYXJlbnQuaW5zZXJ0QmVmb3JlKHZub2RlLl9kb20sIHZub2RlLl9uZXh0RG9tKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9IG9yaWdpbmFsUGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuLy8gaGF2aW5nIGN1c3RvbSBpbmhlcml0YW5jZSBpbnN0ZWFkIG9mIGEgY2xhc3MgaGVyZSBzYXZlcyBhIGxvdCBvZiBieXRlc1xuZXhwb3J0IGZ1bmN0aW9uIFN1c3BlbnNlKCkge1xuXHQvLyB3ZSBkbyBub3QgY2FsbCBzdXBlciBoZXJlIHRvIGdvbGYgc29tZSBieXRlcy4uLlxuXHR0aGlzLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50ID0gMDtcblx0dGhpcy5fc3VzcGVuZGVycyA9IG51bGw7XG5cdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGw7XG59XG5cbi8vIFRoaW5ncyB3ZSBkbyBoZXJlIHRvIHNhdmUgc29tZSBieXRlcyBidXQgYXJlIG5vdCBwcm9wZXIgSlMgaW5oZXJpdGFuY2U6XG4vLyAtIGNhbGwgYG5ldyBDb21wb25lbnQoKWAgYXMgdGhlIHByb3RvdHlwZVxuLy8gLSBkbyBub3Qgc2V0IGBTdXNwZW5zZS5wcm90b3R5cGUuY29uc3RydWN0b3JgIHRvIGBTdXNwZW5zZWBcblN1c3BlbnNlLnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9XG4gKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgVGhlIHRocm93biBwcm9taXNlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlPGFueSwgYW55Pn0gc3VzcGVuZGluZ1ZOb2RlIFRoZSBzdXNwZW5kaW5nIGNvbXBvbmVudFxuICovXG5TdXNwZW5zZS5wcm90b3R5cGUuX2NoaWxkRGlkU3VzcGVuZCA9IGZ1bmN0aW9uKHByb21pc2UsIHN1c3BlbmRpbmdWTm9kZSkge1xuXHRjb25zdCBzdXNwZW5kaW5nQ29tcG9uZW50ID0gc3VzcGVuZGluZ1ZOb2RlLl9jb21wb25lbnQ7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH0gKi9cblx0Y29uc3QgYyA9IHRoaXM7XG5cblx0aWYgKGMuX3N1c3BlbmRlcnMgPT0gbnVsbCkge1xuXHRcdGMuX3N1c3BlbmRlcnMgPSBbXTtcblx0fVxuXHRjLl9zdXNwZW5kZXJzLnB1c2goc3VzcGVuZGluZ0NvbXBvbmVudCk7XG5cblx0Y29uc3QgcmVzb2x2ZSA9IHN1c3BlbmRlZChjLl92bm9kZSk7XG5cblx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdGNvbnN0IG9uUmVzb2x2ZWQgPSAoKSA9PiB7XG5cdFx0aWYgKHJlc29sdmVkKSByZXR1cm47XG5cblx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0c3VzcGVuZGluZ0NvbXBvbmVudC5fb25SZXNvbHZlID0gbnVsbDtcblxuXHRcdGlmIChyZXNvbHZlKSB7XG5cdFx0XHRyZXNvbHZlKG9uU3VzcGVuc2lvbkNvbXBsZXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b25TdXNwZW5zaW9uQ29tcGxldGUoKTtcblx0XHR9XG5cdH07XG5cblx0c3VzcGVuZGluZ0NvbXBvbmVudC5fb25SZXNvbHZlID0gb25SZXNvbHZlZDtcblxuXHRjb25zdCBvblN1c3BlbnNpb25Db21wbGV0ZSA9ICgpID0+IHtcblx0XHRpZiAoIS0tYy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCkge1xuXHRcdFx0Ly8gSWYgdGhlIHN1c3BlbnNpb24gd2FzIGR1cmluZyBoeWRyYXRpb24gd2UgZG9uJ3QgbmVlZCB0byByZXN0b3JlIHRoZVxuXHRcdFx0Ly8gc3VzcGVuZGVkIGNoaWxkcmVuIGludG8gdGhlIF9jaGlsZHJlbiBhcnJheVxuXHRcdFx0aWYgKGMuc3RhdGUuX3N1c3BlbmRlZCkge1xuXHRcdFx0XHRjb25zdCBzdXNwZW5kZWRWTm9kZSA9IGMuc3RhdGUuX3N1c3BlbmRlZDtcblx0XHRcdFx0Yy5fdm5vZGUuX2NoaWxkcmVuWzBdID0gcmVtb3ZlT3JpZ2luYWwoXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUsXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tLFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLl9jb21wb25lbnQuX29yaWdpbmFsUGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGMuc2V0U3RhdGUoeyBfc3VzcGVuZGVkOiAoYy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbCkgfSk7XG5cblx0XHRcdGxldCBzdXNwZW5kZWQ7XG5cdFx0XHR3aGlsZSAoKHN1c3BlbmRlZCA9IGMuX3N1c3BlbmRlcnMucG9wKCkpKSB7XG5cdFx0XHRcdHN1c3BlbmRlZC5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogV2UgZG8gbm90IHNldCBgc3VzcGVuZGVkOiB0cnVlYCBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2Ugd2Ugd2FudCB0aGUgYWN0dWFsIG1hcmt1cFxuXHQgKiB0byByZW1haW4gb24gc2NyZWVuIGFuZCBoeWRyYXRlIGl0IHdoZW4gdGhlIHN1c3BlbnNlIGFjdHVhbGx5IGdldHMgcmVzb2x2ZWQuXG5cdCAqIFdoaWxlIGluIG5vbi1oeWRyYXRpb24gY2FzZXMgdGhlIHVzdWFsIGZhbGxiYWNrIC0+IGNvbXBvbmVudCBmbG93IHdvdWxkIG9jY291ci5cblx0ICovXG5cdGNvbnN0IHdhc0h5ZHJhdGluZyA9IHN1c3BlbmRpbmdWTm9kZS5faHlkcmF0aW5nID09PSB0cnVlO1xuXHRpZiAoIWMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQrKyAmJiAhd2FzSHlkcmF0aW5nKSB7XG5cdFx0Yy5zZXRTdGF0ZSh7IF9zdXNwZW5kZWQ6IChjLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBjLl92bm9kZS5fY2hpbGRyZW5bMF0pIH0pO1xuXHR9XG5cdHByb21pc2UudGhlbihvblJlc29sdmVkLCBvblJlc29sdmVkKTtcbn07XG5cblN1c3BlbnNlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9zdXNwZW5kZXJzID0gW107XG59O1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnRbXCJwcm9wc1wiXX0gcHJvcHNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VTdGF0ZX0gc3RhdGVcbiAqL1xuU3VzcGVuc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHByb3BzLCBzdGF0ZSkge1xuXHRpZiAodGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyKSB7XG5cdFx0Ly8gV2hlbiB0aGUgU3VzcGVuc2UncyBfdm5vZGUgd2FzIGNyZWF0ZWQgYnkgYSBjYWxsIHRvIGNyZWF0ZVZOb2RlXG5cdFx0Ly8gKGkuZS4gZHVlIHRvIGEgc2V0U3RhdGUgZnVydGhlciB1cCBpbiB0aGUgdHJlZSlcblx0XHQvLyBpdCdzIF9jaGlsZHJlbiBwcm9wIGlzIG51bGwsIGluIHRoaXMgY2FzZSB3ZSBcImZvcmdldFwiIGFib3V0IHRoZSBwYXJrZWQgdm5vZGVzIHRvIGRldGFjaFxuXHRcdGlmICh0aGlzLl92bm9kZS5fY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IGRldGFjaGVkUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjb25zdCBkZXRhY2hlZENvbXBvbmVudCA9IHRoaXMuX3Zub2RlLl9jaGlsZHJlblswXS5fY29tcG9uZW50O1xuXHRcdFx0dGhpcy5fdm5vZGUuX2NoaWxkcmVuWzBdID0gZGV0YWNoZWRDbG9uZShcblx0XHRcdFx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyLFxuXHRcdFx0XHRkZXRhY2hlZFBhcmVudCxcblx0XHRcdFx0KGRldGFjaGVkQ29tcG9uZW50Ll9vcmlnaW5hbFBhcmVudERvbSA9IGRldGFjaGVkQ29tcG9uZW50Ll9wYXJlbnREb20pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGw7XG5cdH1cblxuXHQvLyBXcmFwIGZhbGxiYWNrIHRyZWUgaW4gYSBWTm9kZSB0aGF0IHByZXZlbnRzIGl0c2VsZiBmcm9tIGJlaW5nIG1hcmtlZCBhcyBhYm9ydGluZyBtaWQtaHlkcmF0aW9uOlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRjb25zdCBmYWxsYmFjayA9XG5cdFx0c3RhdGUuX3N1c3BlbmRlZCAmJiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBwcm9wcy5mYWxsYmFjayk7XG5cdGlmIChmYWxsYmFjaykgZmFsbGJhY2suX2h5ZHJhdGluZyA9IG51bGw7XG5cblx0cmV0dXJuIFtcblx0XHRjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBzdGF0ZS5fc3VzcGVuZGVkID8gbnVsbCA6IHByb3BzLmNoaWxkcmVuKSxcblx0XHRmYWxsYmFja1xuXHRdO1xufTtcblxuLyoqXG4gKiBDaGVja3MgYW5kIGNhbGxzIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgX3N1c3BlbmRlZCBtZXRob2QsIHBhc3NpbmcgaW4gdGhlXG4gKiBzdXNwZW5kZWQgdm5vZGUuIFRoaXMgaXMgYSB3YXkgZm9yIGEgcGFyZW50IChlLmcuIFN1c3BlbnNlTGlzdCkgdG8gZ2V0IG5vdGlmaWVkXG4gKiB0aGF0IG9uZSBvZiBpdHMgY2hpbGRyZW4vZGVzY2VuZGFudHMgc3VzcGVuZGVkLlxuICpcbiAqIFRoZSBwYXJlbnQgTUFZIHJldHVybiBhIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBnZXQgY2FsbGVkIHdoZW4gdGhlXG4gKiBzdXNwZW5zaW9uIHJlc29sdmVzLCBub3RpZnlpbmcgdGhlIHBhcmVudCBvZiB0aGUgZmFjdC5cbiAqIE1vcmVvdmVyLCB0aGUgY2FsbGJhY2sgZ2V0cyBmdW5jdGlvbiBgdW5zdXNwZW5kYCBhcyBhIHBhcmFtZXRlci4gVGhlIHJlc29sdmVkXG4gKiBjaGlsZCBkZXNjZW5kYW50IHdpbGwgbm90IGFjdHVhbGx5IGdldCB1bnN1c3BlbmRlZCB1bnRpbCBgdW5zdXNwZW5kYCBnZXRzIGNhbGxlZC5cbiAqIFRoaXMgaXMgYSB3YXkgZm9yIHRoZSBwYXJlbnQgdG8gZGVsYXkgdW5zdXNwZW5kaW5nLlxuICpcbiAqIElmIHRoZSBwYXJlbnQgZG9lcyBub3QgcmV0dXJuIGEgY2FsbGJhY2sgdGhlbiB0aGUgcmVzb2x2ZWQgdm5vZGVcbiAqIGdldHMgdW5zdXNwZW5kZWQgaW1tZWRpYXRlbHkgd2hlbiBpdCByZXNvbHZlcy5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHJldHVybnMgeygodW5zdXNwZW5kOiAoKSA9PiB2b2lkKSA9PiB2b2lkKT99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXNwZW5kZWQodm5vZGUpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQgPSB2bm9kZS5fcGFyZW50Ll9jb21wb25lbnQ7XG5cdHJldHVybiBjb21wb25lbnQgJiYgY29tcG9uZW50Ll9zdXNwZW5kZWQgJiYgY29tcG9uZW50Ll9zdXNwZW5kZWQodm5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF6eShsb2FkZXIpIHtcblx0bGV0IHByb207XG5cdGxldCBjb21wb25lbnQ7XG5cdGxldCBlcnJvcjtcblxuXHRmdW5jdGlvbiBMYXp5KHByb3BzKSB7XG5cdFx0aWYgKCFwcm9tKSB7XG5cdFx0XHRwcm9tID0gbG9hZGVyKCk7XG5cdFx0XHRwcm9tLnRoZW4oXG5cdFx0XHRcdGV4cG9ydHMgPT4ge1xuXHRcdFx0XHRcdGNvbXBvbmVudCA9IGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoIWNvbXBvbmVudCkge1xuXHRcdFx0dGhyb3cgcHJvbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKTtcblx0fVxuXG5cdExhenkuZGlzcGxheU5hbWUgPSAnTGF6eSc7XG5cdExhenkuX2ZvcndhcmRlZCA9IHRydWU7XG5cdHJldHVybiBMYXp5O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCB0b0NoaWxkQXJyYXkgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc3VzcGVuZGVkIH0gZnJvbSAnLi9zdXNwZW5zZS5qcyc7XG5cbi8vIEluZGV4ZXMgdG8gbGlua2VkIGxpc3Qgbm9kZXMgKG5vZGVzIGFyZSBzdG9yZWQgYXMgYXJyYXlzIHRvIHNhdmUgYnl0ZXMpLlxuY29uc3QgU1VTUEVOREVEX0NPVU5UID0gMDtcbmNvbnN0IFJFU09MVkVEX0NPVU5UID0gMTtcbmNvbnN0IE5FWFRfTk9ERSA9IDI7XG5cbi8vIEhhdmluZyBjdXN0b20gaW5oZXJpdGFuY2UgaW5zdGVhZCBvZiBhIGNsYXNzIGhlcmUgc2F2ZXMgYSBsb3Qgb2YgYnl0ZXMuXG5leHBvcnQgZnVuY3Rpb24gU3VzcGVuc2VMaXN0KCkge1xuXHR0aGlzLl9uZXh0ID0gbnVsbDtcblx0dGhpcy5fbWFwID0gbnVsbDtcbn1cblxuLy8gTWFyayBvbmUgb2YgY2hpbGQncyBlYXJsaWVyIHN1c3BlbnNpb25zIGFzIHJlc29sdmVkLlxuLy8gU29tZSBwZW5kaW5nIGNhbGxiYWNrcyBtYXkgYmVjb21lIGNhbGxhYmxlIGR1ZSB0byB0aGlzXG4vLyAoZS5nLiB0aGUgbGFzdCBzdXNwZW5kZWQgZGVzY2VuZGFudCBnZXRzIHJlc29sdmVkIHdoZW5cbi8vIHJldmVhbE9yZGVyID09PSAndG9nZXRoZXInKS4gUHJvY2VzcyB0aG9zZSBjYWxsYmFja3MgYXMgd2VsbC5cbmNvbnN0IHJlc29sdmUgPSAobGlzdCwgY2hpbGQsIG5vZGUpID0+IHtcblx0aWYgKCsrbm9kZVtSRVNPTFZFRF9DT1VOVF0gPT09IG5vZGVbU1VTUEVOREVEX0NPVU5UXSkge1xuXHRcdC8vIFRoZSBudW1iZXIgYSBjaGlsZCAob3IgYW55IG9mIGl0cyBkZXNjZW5kYW50cykgaGFzIGJlZW4gc3VzcGVuZGVkXG5cdFx0Ly8gbWF0Y2hlcyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0J3MgYmVlbiByZXNvbHZlZC4gVGhlcmVmb3JlIHdlXG5cdFx0Ly8gbWFyayB0aGUgY2hpbGQgYXMgY29tcGxldGVseSByZXNvbHZlZCBieSBkZWxldGluZyBpdCBmcm9tIC5fbWFwLlxuXHRcdC8vIFRoaXMgaXMgdXNlZCB0byBmaWd1cmUgb3V0IHdoZW4gKmFsbCogY2hpbGRyZW4gaGF2ZSBiZWVuIGNvbXBsZXRlbHlcblx0XHQvLyByZXNvbHZlZCB3aGVuIHJldmVhbE9yZGVyIGlzICd0b2dldGhlcicuXG5cdFx0bGlzdC5fbWFwLmRlbGV0ZShjaGlsZCk7XG5cdH1cblxuXHQvLyBJZiByZXZlYWxPcmRlciBpcyBmYWxzeSB0aGVuIHdlIGNhbiBkbyBhbiBlYXJseSBleGl0LCBhcyB0aGVcblx0Ly8gY2FsbGJhY2tzIHdvbid0IGdldCBxdWV1ZWQgaW4gdGhlIG5vZGUgYW55d2F5LlxuXHQvLyBJZiByZXZlYWxPcmRlciBpcyAndG9nZXRoZXInIHRoZW4gYWxzbyBkbyBhbiBlYXJseSBleGl0XG5cdC8vIGlmIGFsbCBzdXNwZW5kZWQgZGVzY2VuZGFudHMgaGF2ZSBub3QgeWV0IGJlZW4gcmVzb2x2ZWQuXG5cdGlmIChcblx0XHQhbGlzdC5wcm9wcy5yZXZlYWxPcmRlciB8fFxuXHRcdChsaXN0LnByb3BzLnJldmVhbE9yZGVyWzBdID09PSAndCcgJiYgbGlzdC5fbWFwLnNpemUpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFdhbGsgdGhlIGN1cnJlbnRseSBzdXNwZW5kZWQgY2hpbGRyZW4gaW4gb3JkZXIsIGNhbGxpbmcgdGhlaXJcblx0Ly8gc3RvcmVkIGNhbGxiYWNrcyBvbiB0aGUgd2F5LiBTdG9wIGlmIHdlIGVuY291bnRlciBhIGNoaWxkIHRoYXRcblx0Ly8gaGFzIG5vdCBiZWVuIGNvbXBsZXRlbHkgcmVzb2x2ZWQgeWV0LlxuXHRub2RlID0gbGlzdC5fbmV4dDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHR3aGlsZSAobm9kZS5sZW5ndGggPiAzKSB7XG5cdFx0XHRub2RlLnBvcCgpKCk7XG5cdFx0fVxuXHRcdGlmIChub2RlW1JFU09MVkVEX0NPVU5UXSA8IG5vZGVbU1VTUEVOREVEX0NPVU5UXSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxpc3QuX25leHQgPSBub2RlID0gbm9kZVtORVhUX05PREVdO1xuXHR9XG59O1xuXG4vLyBUaGluZ3Mgd2UgZG8gaGVyZSB0byBzYXZlIHNvbWUgYnl0ZXMgYnV0IGFyZSBub3QgcHJvcGVyIEpTIGluaGVyaXRhbmNlOlxuLy8gLSBjYWxsIGBuZXcgQ29tcG9uZW50KClgIGFzIHRoZSBwcm90b3R5cGVcbi8vIC0gZG8gbm90IHNldCBgU3VzcGVuc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yYCB0byBgU3VzcGVuc2VgXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLl9zdXNwZW5kZWQgPSBmdW5jdGlvbihjaGlsZCkge1xuXHRjb25zdCBsaXN0ID0gdGhpcztcblx0Y29uc3QgZGVsZWdhdGVkID0gc3VzcGVuZGVkKGxpc3QuX3Zub2RlKTtcblxuXHRsZXQgbm9kZSA9IGxpc3QuX21hcC5nZXQoY2hpbGQpO1xuXHRub2RlW1NVU1BFTkRFRF9DT1VOVF0rKztcblxuXHRyZXR1cm4gdW5zdXNwZW5kID0+IHtcblx0XHRjb25zdCB3cmFwcGVkVW5zdXNwZW5kID0gKCkgPT4ge1xuXHRcdFx0aWYgKCFsaXN0LnByb3BzLnJldmVhbE9yZGVyKSB7XG5cdFx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0aGUgdW5kZWZpbmVkIChmYWxzeSkgcmV2ZWFsT3JkZXIsIGFzIHRoZXJlXG5cdFx0XHRcdC8vIGlzIG5vIG5lZWQgdG8gY29vcmRpbmF0ZSBhIHNwZWNpZmljIG9yZGVyIG9yIHVuc3VzcGVuZHMuXG5cdFx0XHRcdHVuc3VzcGVuZCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZS5wdXNoKHVuc3VzcGVuZCk7XG5cdFx0XHRcdHJlc29sdmUobGlzdCwgY2hpbGQsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0aWYgKGRlbGVnYXRlZCkge1xuXHRcdFx0ZGVsZWdhdGVkKHdyYXBwZWRVbnN1c3BlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3cmFwcGVkVW5zdXNwZW5kKCk7XG5cdFx0fVxuXHR9O1xufTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihwcm9wcykge1xuXHR0aGlzLl9uZXh0ID0gbnVsbDtcblx0dGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKTtcblx0aWYgKHByb3BzLnJldmVhbE9yZGVyICYmIHByb3BzLnJldmVhbE9yZGVyWzBdID09PSAnYicpIHtcblx0XHQvLyBJZiBvcmRlciA9PT0gJ2JhY2t3YXJkcycgKG9yLCB3ZWxsLCBhbnl0aGluZyBzdGFydGluZyB3aXRoIGEgJ2InKVxuXHRcdC8vIHRoZW4gZmxpcCB0aGUgY2hpbGQgbGlzdCBhcm91bmQgc28gdGhhdCB0aGUgbGFzdCBjaGlsZCB3aWxsIGJlXG5cdFx0Ly8gdGhlIGZpcnN0IGluIHRoZSBsaW5rZWQgbGlzdC5cblx0XHRjaGlsZHJlbi5yZXZlcnNlKCk7XG5cdH1cblx0Ly8gQnVpbGQgdGhlIGxpbmtlZCBsaXN0LiBJdGVyYXRlIHRocm91Z2ggdGhlIGNoaWxkcmVuIGluIHJldmVyc2Ugb3JkZXJcblx0Ly8gc28gdGhhdCBgX25leHRgIHBvaW50cyB0byB0aGUgZmlyc3QgbGlua2VkIGxpc3Qgbm9kZSB0byBiZSByZXNvbHZlZC5cblx0Zm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHQvLyBDcmVhdGUgYSBuZXcgbGlua2VkIGxpc3Qgbm9kZSBhcyBhbiBhcnJheSBvZiBmb3JtOlxuXHRcdC8vIFx0W3N1c3BlbmRlZF9jb3VudCwgcmVzb2x2ZWRfY291bnQsIG5leHRfbm9kZV1cblx0XHQvLyB3aGVyZSBzdXNwZW5kZWRfY291bnQgYW5kIHJlc29sdmVkX2NvdW50IGFyZSBudW1lcmljIGNvdW50ZXJzIGZvclxuXHRcdC8vIGtlZXBpbmcgdHJhY2sgaG93IG1hbnkgdGltZXMgYSBub2RlIGhhcyBiZWVuIHN1c3BlbmRlZCBhbmQgcmVzb2x2ZWQuXG5cdFx0Ly9cblx0XHQvLyBOb3RlIHRoYXQgc3VzcGVuZGVkX2NvdW50IHN0YXJ0cyBmcm9tIDEgaW5zdGVhZCBvZiAwLCBzbyB3ZSBjYW4gYmxvY2tcblx0XHQvLyBwcm9jZXNzaW5nIGNhbGxiYWNrcyB1bnRpbCBjb21wb25lbnREaWRNb3VudCBoYXMgYmVlbiBjYWxsZWQuIEluIGEgc2Vuc2Vcblx0XHQvLyBub2RlIGlzIHN1c3BlbmRlZCBhdCBsZWFzdCB1bnRpbCBjb21wb25lbnREaWRNb3VudCBnZXRzIGNhbGxlZCFcblx0XHQvL1xuXHRcdC8vIFBlbmRpbmcgY2FsbGJhY2tzIGFyZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBub2RlOlxuXHRcdC8vIFx0W3N1c3BlbmRlZF9jb3VudCwgcmVzb2x2ZWRfY291bnQsIG5leHRfbm9kZSwgY2FsbGJhY2tfMCwgY2FsbGJhY2tfMSwgLi4uXVxuXHRcdHRoaXMuX21hcC5zZXQoY2hpbGRyZW5baV0sICh0aGlzLl9uZXh0ID0gWzEsIDAsIHRoaXMuX25leHRdKSk7XG5cdH1cblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBTdXNwZW5zZUxpc3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24oKSB7XG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWZ0ZXIgbW91bnRpbmcgZm9yIHR3byByZWFzb25zOlxuXHQvLyAxLiBBcyBlYWNoIG5vZGVbU1VTUEVOREVEX0NPVU5UXSBzdGFydHMgZnJvbSAxLCB0aGlzIGl0ZXJhdGlvbiBpbmNyZWFzZXNcblx0Ly8gICAgZWFjaCBub2RlW1JFTEVBU0VEX0NPVU5UXSBieSAxLCB0aGVyZWZvcmUgYmFsYW5jaW5nIHRoZSBjb3VudGVycy5cblx0Ly8gICAgVGhlIG5vZGVzIGNhbiBub3cgYmUgY29tcGxldGVseSBjb25zdW1lZCBmcm9tIHRoZSBsaW5rZWQgbGlzdC5cblx0Ly8gMi4gSGFuZGxlIG5vZGVzIHRoYXQgbWlnaHQgaGF2ZSBnb3R0ZW4gcmVzb2x2ZWQgYmV0d2VlbiByZW5kZXIgYW5kXG5cdC8vICAgIGNvbXBvbmVudERpZE1vdW50LlxuXHR0aGlzLl9tYXAuZm9yRWFjaCgobm9kZSwgY2hpbGQpID0+IHtcblx0XHRyZXNvbHZlKHRoaXMsIGNoaWxkLCBub2RlKTtcblx0fSk7XG59O1xuIiwiaW1wb3J0IHtcblx0cmVuZGVyIGFzIHByZWFjdFJlbmRlcixcblx0aHlkcmF0ZSBhcyBwcmVhY3RIeWRyYXRlLFxuXHRvcHRpb25zLFxuXHR0b0NoaWxkQXJyYXksXG5cdENvbXBvbmVudFxufSBmcm9tICdwcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUkVBQ1RfRUxFTUVOVF9UWVBFID1cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdDB4ZWFjNztcblxuY29uc3QgQ0FNRUxfUFJPUFMgPSAvXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlfGxldHRlcnxsaWdodGluZ3xtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8cG9pbnRlcnxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx0cmFuc2Zvcm18dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLztcblxuY29uc3QgSVNfRE9NID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSW5wdXQgdHlwZXMgZm9yIHdoaWNoIG9uY2hhbmdlIHNob3VsZCBub3QgYmUgY29udmVydGVkIHRvIG9uaW5wdXQuXG4vLyB0eXBlPVwiZmlsZXxjaGVja2JveHxyYWRpb1wiLCBwbHVzIFwicmFuZ2VcIiBpbiBJRTExLlxuLy8gKElFMTEgZG9lc24ndCBzdXBwb3J0IFN5bWJvbCwgd2hpY2ggd2UgdXNlIGhlcmUgdG8gdHVybiBgcmFkYCBpbnRvIGByYWAgd2hpY2ggbWF0Y2hlcyBcInJhbmdlXCIpXG5jb25zdCBvbkNoYW5nZUlucHV0VHlwZSA9IHR5cGUgPT5cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFN5bWJvbCgpID09ICdzeW1ib2wnXG5cdFx0PyAvZmlsfGNoZXxyYWQvaVxuXHRcdDogL2ZpbHxjaGV8cmEvaVxuXHQpLnRlc3QodHlwZSk7XG5cbi8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYHJlYWN0LXZpcnR1YWxpemVkYCBleHBsaWNpdGx5IGNoZWNrIGZvciB0aGlzLlxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8vIGBVTlNBRkVfKmAgbGlmZWN5Y2xlIGhvb2tzXG4vLyBQcmVhY3Qgb25seSBldmVyIGludm9rZXMgdGhlIHVucHJlZml4ZWQgbWV0aG9kcy5cbi8vIEhlcmUgd2UgcHJvdmlkZSBhIGJhc2UgXCJmYWxsYmFja1wiIGltcGxlbWVudGF0aW9uIHRoYXQgY2FsbHMgYW55IGRlZmluZWQgVU5TQUZFXyBwcmVmaXhlZCBtZXRob2QuXG4vLyAtIElmIGEgY29tcG9uZW50IGRlZmluZXMgaXRzIG93biBgY29tcG9uZW50RGlkTW91bnQoKWAgKGluY2x1ZGluZyB2aWEgZGVmaW5lUHJvcGVydHkpLCB1c2UgdGhhdC5cbi8vIC0gSWYgYSBjb21wb25lbnQgZGVmaW5lcyBgVU5TQUZFX2NvbXBvbmVudERpZE1vdW50KClgLCBgY29tcG9uZW50RGlkTW91bnRgIGlzIHRoZSBhbGlhcyBnZXR0ZXIvc2V0dGVyLlxuLy8gLSBJZiBhbnl0aGluZyBhc3NpZ25zIHRvIGFuIGBVTlNBRkVfKmAgcHJvcGVydHksIHRoZSBhc3NpZ25tZW50IGlzIGZvcndhcmRlZCB0byB0aGUgdW5wcmVmaXhlZCBwcm9wZXJ0eS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8xOTQxXG5bXG5cdCdjb21wb25lbnRXaWxsTW91bnQnLFxuXHQnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdCdjb21wb25lbnRXaWxsVXBkYXRlJ1xuXS5mb3JFYWNoKGtleSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBrZXksIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ1VOU0FGRV8nICsga2V5XTtcblx0XHR9LFxuXHRcdHNldCh2KSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdHZhbHVlOiB2XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8qKlxuICogUHJveHkgcmVuZGVyKCkgc2luY2UgUmVhY3QgcmV0dXJucyBhIENvbXBvbmVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBWTm9kZSB0cmVlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnQgRE9NIG5vZGUgdG8gcmVuZGVyIHZub2RlIHRyZWUgaW50b1xuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50IHwgbnVsbH0gVGhlIHJvb3QgY29tcG9uZW50IHJlZmVyZW5jZSBvciBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudCwgY2FsbGJhY2spIHtcblx0Ly8gUmVhY3QgZGVzdHJveXMgYW55IGV4aXN0aW5nIERPTSBub2Rlcywgc2VlICMxNzI3XG5cdC8vIC4uLmJ1dCBvbmx5IG9uIHRoZSBmaXJzdCByZW5kZXIsIHNlZSAjMTgyOFxuXHRpZiAocGFyZW50Ll9jaGlsZHJlbiA9PSBudWxsKSB7XG5cdFx0cGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cdH1cblxuXHRwcmVhY3RSZW5kZXIodm5vZGUsIHBhcmVudCk7XG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcblxuXHRyZXR1cm4gdm5vZGUgPyB2bm9kZS5fY29tcG9uZW50IDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudCwgY2FsbGJhY2spIHtcblx0cHJlYWN0SHlkcmF0ZSh2bm9kZSwgcGFyZW50KTtcblx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuXG5cdHJldHVybiB2bm9kZSA/IHZub2RlLl9jb21wb25lbnQgOiBudWxsO1xufVxuXG5sZXQgb2xkRXZlbnRIb29rID0gb3B0aW9ucy5ldmVudDtcbm9wdGlvbnMuZXZlbnQgPSBlID0+IHtcblx0aWYgKG9sZEV2ZW50SG9vaykgZSA9IG9sZEV2ZW50SG9vayhlKTtcblx0ZS5wZXJzaXN0ID0gZW1wdHk7XG5cdGUuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBpc1Byb3BhZ2F0aW9uU3RvcHBlZDtcblx0ZS5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cdHJldHVybiAoZS5uYXRpdmVFdmVudCA9IGUpO1xufTtcblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5mdW5jdGlvbiBpc1Byb3BhZ2F0aW9uU3RvcHBlZCgpIHtcblx0cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcmV2ZW50ZWQoKSB7XG5cdHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ7XG59XG5cbmxldCBjbGFzc05hbWVEZXNjcmlwdG9yID0ge1xuXHRjb25maWd1cmFibGU6IHRydWUsXG5cdGdldCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzcztcblx0fVxufTtcblxubGV0IG9sZFZOb2RlSG9vayA9IG9wdGlvbnMudm5vZGU7XG5vcHRpb25zLnZub2RlID0gdm5vZGUgPT4ge1xuXHRsZXQgdHlwZSA9IHZub2RlLnR5cGU7XG5cdGxldCBwcm9wcyA9IHZub2RlLnByb3BzO1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHM7XG5cblx0Ly8gb25seSBub3JtYWxpemUgcHJvcHMgb24gRWxlbWVudCBub2Rlc1xuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Y29uc3Qgbm9uQ3VzdG9tRWxlbWVudCA9IHR5cGUuaW5kZXhPZignLScpID09PSAtMTtcblx0XHRub3JtYWxpemVkUHJvcHMgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgaW4gcHJvcHMpIHtcblx0XHRcdGxldCB2YWx1ZSA9IHByb3BzW2ldO1xuXG5cdFx0XHRpZiAoSVNfRE9NICYmIGkgPT09ICdjaGlsZHJlbicgJiYgdHlwZSA9PT0gJ25vc2NyaXB0Jykge1xuXHRcdFx0XHQvLyBFbXVsYXRlIFJlYWN0J3MgYmVoYXZpb3Igb2Ygbm90IHJlbmRlcmluZyB0aGUgY29udGVudHMgb2Ygbm9zY3JpcHQgdGFncyBvbiB0aGUgY2xpZW50LlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyAmJiB2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFNraXAgYXBwbHlpbmcgdmFsdWUgaWYgaXQgaXMgbnVsbC91bmRlZmluZWQgYW5kIHdlIGFscmVhZHkgc2V0XG5cdFx0XHRcdC8vIGEgZGVmYXVsdCB2YWx1ZVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGkgPT09ICdkZWZhdWx0VmFsdWUnICYmXG5cdFx0XHRcdCd2YWx1ZScgaW4gcHJvcHMgJiZcblx0XHRcdFx0cHJvcHMudmFsdWUgPT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGBkZWZhdWx0VmFsdWVgIGlzIHRyZWF0ZWQgYXMgYSBmYWxsYmFjayBgdmFsdWVgIHdoZW4gYSB2YWx1ZSBwcm9wIGlzIHByZXNlbnQgYnV0IG51bGwvdW5kZWZpbmVkLlxuXHRcdFx0XHQvLyBgZGVmYXVsdFZhbHVlYCBmb3IgRWxlbWVudHMgd2l0aCBubyB2YWx1ZSBwcm9wIGlzIHRoZSBzYW1lIGFzIHRoZSBET00gZGVmYXVsdFZhbHVlIHByb3BlcnR5LlxuXHRcdFx0XHRpID0gJ3ZhbHVlJztcblx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gJ2Rvd25sb2FkJyAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBDYWxsaW5nIGBzZXRBdHRyaWJ1dGVgIHdpdGggYSB0cnV0aHkgdmFsdWUgd2lsbCBsZWFkIHRvIGl0IGJlaW5nXG5cdFx0XHRcdC8vIHBhc3NlZCBhcyBhIHN0cmluZ2lmaWVkIHZhbHVlLCBlLmcuIGBkb3dubG9hZD1cInRydWVcImAuIFJlYWN0XG5cdFx0XHRcdC8vIGNvbnZlcnRzIGl0IHRvIGFuIGVtcHR5IHN0cmluZyBpbnN0ZWFkLCBvdGhlcndpc2UgdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgdGhlIGZpbGUgbmFtZSBhbmQgdGhlIGZpbGUgd2lsbCBiZSBjYWxsZWRcblx0XHRcdFx0Ly8gXCJ0cnVlXCIgdXBvbiBkb3dubG9hZGluZyBpdC5cblx0XHRcdFx0dmFsdWUgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoL29uZG91YmxlY2xpY2svaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25kYmxjbGljayc7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQvXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QoaSArIHR5cGUpICYmXG5cdFx0XHRcdCFvbkNoYW5nZUlucHV0VHlwZShwcm9wcy50eXBlKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGkgPSAnb25pbnB1dCc7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb25mb2N1cyQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25mb2N1c2luJztcblx0XHRcdH0gZWxzZSBpZiAoL15vbmJsdXIkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZm9jdXNvdXQnO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAobm9uQ3VzdG9tRWxlbWVudCAmJiBDQU1FTF9QUk9QUy50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnJlcGxhY2UoL1tBLVowLTldL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHN1cHBvcnQgZm9yIG9uSW5wdXQgYW5kIG9uQ2hhbmdlLCBzZWUgIzM1NjFcblx0XHRcdC8vIGlmIHdlIGhhdmUgYW4gb25pbnB1dCBwcm9wIGFscmVhZHkgY2hhbmdlIGl0IHRvIG9uaW5wdXRDYXB0dXJlXG5cdFx0XHRpZiAoL15vbmlucHV0JC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSkge1xuXHRcdFx0XHRcdGkgPSAnb25pbnB1dENhcHR1cmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBzdXBwb3J0IGZvciBhcnJheSBzZWxlY3QgdmFsdWVzOiA8c2VsZWN0IG11bHRpcGxlIHZhbHVlPXtbXX0gLz5cblx0XHRpZiAoXG5cdFx0XHR0eXBlID09ICdzZWxlY3QnICYmXG5cdFx0XHRub3JtYWxpemVkUHJvcHMubXVsdGlwbGUgJiZcblx0XHRcdEFycmF5LmlzQXJyYXkobm9ybWFsaXplZFByb3BzLnZhbHVlKVxuXHRcdCkge1xuXHRcdFx0Ly8gZm9yRWFjaCgpIGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZCwgd2hpY2ggd2UgYWJ1c2UgaGVyZSB0byB1bnNldCB0aGUgdmFsdWUgcHJvcC5cblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgIT0gLTE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBBZGRpbmcgc3VwcG9ydCBmb3IgZGVmYXVsdFZhbHVlIGluIHNlbGVjdCB0YWdcblx0XHRpZiAodHlwZSA9PSAnc2VsZWN0JyAmJiBub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcHMubXVsdGlwbGUpIHtcblx0XHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpICE9IC0xO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUgPT0gY2hpbGQucHJvcHMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZub2RlLnByb3BzID0gbm9ybWFsaXplZFByb3BzO1xuXG5cdFx0aWYgKHByb3BzLmNsYXNzICE9IHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2xhc3NOYW1lRGVzY3JpcHRvci5lbnVtZXJhYmxlID0gJ2NsYXNzTmFtZScgaW4gcHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIG5vcm1hbGl6ZWRQcm9wcy5jbGFzcyA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub3JtYWxpemVkUHJvcHMsICdjbGFzc05hbWUnLCBjbGFzc05hbWVEZXNjcmlwdG9yKTtcblx0XHR9XG5cdH1cblxuXHR2bm9kZS4kJHR5cGVvZiA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcblxuXHRpZiAob2xkVk5vZGVIb29rKSBvbGRWTm9kZUhvb2sodm5vZGUpO1xufTtcblxuLy8gT25seSBuZWVkZWQgZm9yIHJlYWN0LXJlbGF5XG5sZXQgY3VycmVudENvbXBvbmVudDtcbmNvbnN0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbm9wdGlvbnMuX3JlbmRlciA9IGZ1bmN0aW9uKHZub2RlKSB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIHtcblx0XHRvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXHR9XG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xufTtcblxuLy8gVGhpcyBpcyBhIHZlcnkgdmVyeSBwcml2YXRlIGludGVybmFsIGZ1bmN0aW9uIGZvciBSZWFjdCBpdFxuLy8gaXMgdXNlZCB0byBzb3J0LW9mIGRvIHJ1bnRpbWUgZGVwZW5kZW5jeSBpbmplY3Rpb24uIFNvIGZhclxuLy8gb25seSBgcmVhY3QtcmVsYXlgIG1ha2VzIHVzZSBvZiBpdC4gSXQgdXNlcyBpdCB0byByZWFkIHRoZVxuLy8gY29udGV4dCB2YWx1ZS5cbmV4cG9ydCBjb25zdCBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IHtcblx0UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjoge1xuXHRcdGN1cnJlbnQ6IHtcblx0XHRcdHJlYWRDb250ZXh0KGNvbnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRDb21wb25lbnQuX2dsb2JhbENvbnRleHRbY29udGV4dC5faWRdLnByb3BzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbiIsImltcG9ydCBub29wIGZyb20gXCJsb2Rhc2gtZXMvbm9vcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5cbnR5cGUgUmFmQ2FsbGJhY2tUeXBlID0gKG1zU2luY2VMYXN0OiBudW1iZXIsIHRhZz86IGFueSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIENvbnRleHRUeXBlIHtcbiAgICBhZGRDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUsIHRhZz86IGFueSkgPT4gdm9pZDtcbiAgICByZW1vdmVDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IENvbnRleHRUeXBlPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVCYXRjaGVkQW5pbWF0aW9uRnJhbWVzKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcImFkZENhbGxiYWNrXCJdPigoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcInJlbW92ZUNhbGxiYWNrXCJdPigoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuXG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWY8Q29udGV4dFR5cGU+KG51bGwhKTtcbiAgICBpZiAoY29udGV4dEluZm8uY3VycmVudCA9PSBudWxsKVxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcbiAgICBjb25zdCBhbGxDYWxsYmFja3MgPSB1c2VSZWY8TWFwPFJhZkNhbGxiYWNrVHlwZSwgYW55Pj4obnVsbCEpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAtMTtcblxuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdDogbnVtYmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0SW5mby5jdXJyZW50fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXI+KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyB7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgd2l0aCBlZmZlY3RpdmVseSB0aGUgc2FtZSBydWxlcyBhcyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuICAgICAqIFxuICAgICAqIERvZXNuJ3QgbmVlZCB0byBiZSBzdGFibGUuXG4gICAgICovXG4gICAgY2FsbGJhY2s6IG51bGwgfCAoKG1zU2luY2VMYXN0OiBudW1iZXIpID0+IHZvaWQpO1xufVxuXG4vKipcbiAqIFRoZSAob3B0aW9uYWxseSBub24tc3RhYmxlKSBgY2FsbGJhY2tgIHlvdSBwcm92aWRlIHdpbGwgc3RhcnQgcnVubmluZyBldmVyeSBmcmFtZSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAqIFxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKiBcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH06IFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyk6IHZvaWQge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcblxuICAgIGNvbnN0IHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IHVzZUNvbnRleHQoU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtczogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LCBoYXNDYWxsYmFja10pXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBoLCBSZW5kZXJhYmxlUHJvcHMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBTd2FwcGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiBib29sZWFuIH0+KHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IGZhbHNlIH0pO1xuXG5cbi8qXG5jb25zdCBDc3NDbGFzc2VzID0ge1xuICAgIGJhc2U6IFwicHRsXCIsXG4gICAgZW50ZXI6IFwiblwiLFxuICAgIGV4aXQ6IFwieFwiLFxuICAgIGluaXQ6IFwiaVwiLFxuICAgIHRyYW5zaXRpb246IFwidFwiLFxuICAgIGZpbmFsaXplOiBcImZcIlxufSovXG5cbmludGVyZmFjZSBDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIGVudGVyOiBzdHJpbmc7XG4gICAgZXhpdDogc3RyaW5nO1xuICAgIG1lYXN1cmU6IHN0cmluZztcbiAgICBpbml0OiBzdHJpbmc7XG4gICAgdHJhbnNpdGlvbjogc3RyaW5nO1xuICAgIGZpbmFsaXplOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDc3NDbGFzc0NvbnRleHRUeXBlIHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IHN0cmluZztcbiAgICBHZXRFbnRlckNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0SW5pdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBDc3NDbGFzc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENzc0NsYXNzQ29udGV4dFR5cGU+KHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IFwicHRsXCIsXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gXCJuXCIsXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBcInhcIixcbiAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IFwibVwiLFxuICAgIEdldEluaXRDbGFzczogKCkgPT4gXCJpXCIsXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBcInRcIixcbiAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBcImZcIixcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBDc3NDbGFzc2VzUHJvdmlkZXIoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUsIGNoaWxkcmVuLCAuLi5yZXN0IH06IFJlbmRlcmFibGVQcm9wczxQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPj4pIHtcbiAgICBjb25zdCBjb250ZXh0T2JqZWN0ID0gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUgfSk7XG4gICAgcmV0dXJuICg8Q3NzQ2xhc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0T2JqZWN0fSAgey4uLnJlc3R9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDc3NDbGFzc2VzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxuICAgICAgICBHZXRFbnRlckNsYXNzLFxuICAgICAgICBHZXRFeGl0Q2xhc3MsXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcbiAgICAgICAgR2V0SW5pdENsYXNzLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3MsXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3NcbiAgICB9ID0gdXNlQ29udGV4dChDc3NDbGFzc0NvbnRleHQpO1xuICAgIGNvbnN0IEdldERpcmVjdGlvbkNsYXNzID0gdXNlQ2FsbGJhY2soKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZyA9PiB7IHN3aXRjaCAoZGlyZWN0aW9uKSB7IGNhc2UgXCJlbnRlclwiOiByZXR1cm4gR2V0RW50ZXJDbGFzcygpOyBjYXNlIFwiZXhpdFwiOiByZXR1cm4gR2V0RXhpdENsYXNzKCk7IH0gfSwgW10pO1xuICAgIGNvbnN0IEdldFBoYXNlQ2xhc3MgPSB1c2VDYWxsYmFjaygocGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyA9PiB7IHN3aXRjaCAocGhhc2UpIHsgY2FzZSBcIm1lYXN1cmVcIjogcmV0dXJuIEdldE1lYXN1cmVDbGFzcygpOyBjYXNlIFwiaW5pdFwiOiByZXR1cm4gR2V0SW5pdENsYXNzKCk7IGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHJldHVybiBHZXRUcmFuc2l0aW9uQ2xhc3MoKTsgY2FzZSBcImZpbmFsaXplXCI6IHJldHVybiBHZXRGaW5hbGl6ZUNsYXNzKCk7IH0gfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIEdldEJhc2VDbGFzcyxcbiAgICAgICAgR2V0RW50ZXJDbGFzcyxcbiAgICAgICAgR2V0RXhpdENsYXNzLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3MsXG4gICAgICAgIEdldEluaXRDbGFzcyxcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzLFxuICAgICAgICBHZXREaXJlY3Rpb25DbGFzcyxcbiAgICAgICAgR2V0UGhhc2VDbGFzc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUobmV3VmFsdWVzOiBQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPik6IENzc0NsYXNzQ29udGV4dFR5cGUge1xuICAgIGNvbnN0IG9sZFZhbHVlcyA9IHVzZUNvbnRleHQoQ3NzQ2xhc3NDb250ZXh0KTtcbiAgICBjb25zdCBiYXNlID0gKG5ld1ZhbHVlcz8uYmFzZSA/PyBvbGRWYWx1ZXMuR2V0QmFzZUNsYXNzKCkpO1xuICAgIGNvbnN0IGVudGVyID0gKG5ld1ZhbHVlcz8uZW50ZXIgPz8gb2xkVmFsdWVzLkdldEVudGVyQ2xhc3MoKSk7XG4gICAgY29uc3QgZXhpdCA9IChuZXdWYWx1ZXM/LmV4aXQgPz8gb2xkVmFsdWVzLkdldEV4aXRDbGFzcygpKTtcbiAgICBjb25zdCBtZWFzdXJlID0gKG5ld1ZhbHVlcz8ubWVhc3VyZSA/PyBvbGRWYWx1ZXMuR2V0TWVhc3VyZUNsYXNzKCkpO1xuICAgIGNvbnN0IGluaXQgPSAobmV3VmFsdWVzPy5pbml0ID8/IG9sZFZhbHVlcy5HZXRJbml0Q2xhc3MoKSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdWYWx1ZXM/LnRyYW5zaXRpb24gPz8gb2xkVmFsdWVzLkdldFRyYW5zaXRpb25DbGFzcygpKTtcbiAgICBjb25zdCBmaW5hbGl6ZSA9IChuZXdWYWx1ZXM/LmZpbmFsaXplID8/IG9sZFZhbHVlcy5HZXRGaW5hbGl6ZUNsYXNzKCkpO1xuXG4gICAgcmV0dXJuIHVzZU1lbW88Q3NzQ2xhc3NDb250ZXh0VHlwZT4oKCkgPT4gKHtcbiAgICAgICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBiYXNlISxcbiAgICAgICAgR2V0RW50ZXJDbGFzczogKCkgPT4gZW50ZXIhLFxuICAgICAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IGV4aXQhLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IG1lYXN1cmUhLFxuICAgICAgICBHZXRJbml0Q2xhc3M6ICgpID0+IGluaXQhLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IHRyYW5zaXRpb24hLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBmaW5hbGl6ZSEsXG4gICAgfSksIFtiYXNlLCBlbnRlciwgZXhpdCwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemVdKVxufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKCk6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbiwgcGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbj86IFRyYW5zaXRpb25EaXJlY3Rpb24sIHBoYXNlPzogVHJhbnNpdGlvblBoYXNlKTogc3RyaW5nIHtcbiAgICBjb25zdCBwaGFzZVBhcnQgPSBgJHtwaGFzZSA9PSBudWxsID8gXCJcIiA6IGAtJHtDc3NDbGFzc2VzW3BoYXNlXX1gfWA7XG4gICAgY29uc3QgZGlyZWN0aW9uUGFydCA9IGAke2RpcmVjdGlvbiA9PSBudWxsID8gXCJcIiA6IGAtJHtDc3NDbGFzc2VzW2RpcmVjdGlvbl19JHtwaGFzZVBhcnR9YH1gO1xuICAgIHJldHVybiBgJHtDc3NDbGFzc2VzLmJhc2V9JHtkaXJlY3Rpb25QYXJ0fWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENzc0NsYXNzKHdoaWNoOiBrZXlvZiB0eXBlb2YgQ3NzQ2xhc3NlcywgdmFsdWU6IHN0cmluZykge1xuICAgIENzc0NsYXNzZXNbd2hpY2hdID0gdmFsdWU7XG59XG4qL1xuIiwiXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnQsIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcbnR5cGUgRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+ID0gT21pdDxQLCBcInJlZlwiPiAmIHsgcmVmPzogUmVmPEU+IH1cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50PFAsIEU+ID0gKHA6IEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPikgPT4gVk5vZGU8Rm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+PlxyXG5cclxudHlwZSBFbGVtZW50RnJvbVByb3BzPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+PiA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBFdmVudFRhcmdldDtcclxudHlwZSBQcm9wc0Zyb21Db21wb25lbnQ8QyBleHRlbmRzIEZ1bmN0aW9uYWxDb21wb25lbnQ8YW55Pj4gPSBDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxpbmZlciBQPiA/IFAgOiB1bmtub3duO1xyXG5cclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICogXHJcbiAqIFRPRE86IFN0aWxsIG5lZWRlZD9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZjxDIGV4dGVuZHMgPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ocDogYW55LCByZWY6IFJlZjxFPikgPT4gKFZOb2RlPGFueT4gfCBudWxsKT4oQ29tcG9uZW50OiBDKSB7XHJcbiAgICB0eXBlIFAgPSBQcm9wc0Zyb21Db21wb25lbnQ8Qz47XHJcblxyXG5cclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQgYXMgQztcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWZ1bCBpbiBwYXJ0aWN1bGFyIGZvciBTbGlkZXMgd2l0aCBhIFRhYiBQYW5lbCAtLVxyXG4gKiBpZiB3ZSBkbyBNYXRoLnNpZ24oY3VycmVudEluZGV4IC0gc2xpZGVJbmRleCksIGl0XHJcbiAqIHRyYW5zaXRpb25zIG5pY2VseSBpbiB0aGUgZXhwZWN0ZWQgZGlyZWN0aW9uLFxyXG4gKiBidXQgd2UgbmVlZCB0byBcInJlbWVtYmVyXCIgd2hpY2ggZGlyZWN0aW9uIHRvIHVzZVxyXG4gKiB3aGVuIGl0J3MgdGhlIGN1cnJlbnQgcGFuZWwgKGFuZCB0aGUgZGlmZmVyZW5jZSBpcyAwKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhc3ROb25OdWxsVmFsdWU8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGwge1xyXG4gICAgY29uc3QgbGFzdE5vbk51bGxWYWx1ZSA9IHVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgIH0sIFt2YWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSA/PyBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnRDaGlsZHJlbiwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3YXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTd2FwcGFibGVQcm9wcz4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHtcclxuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTd2FwcGFibGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBjb21wb25lbnQgaXMgaW5saW5lLWdyaWQgb3IgZ3JpZC4gXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBjaGlsZCBlbGVtZW50IGlzIGxvb2tlZCBhdC4gSWYgaXQncyBhIHNwYW4gb3Igb3RoZXIgaW5saW5lIGVsZW1lbnQsIGlubGluZSBpcyBhc3N1bWVkLiBcclxuICAgICAqIChBIHNpbXBseS1mb29sZWQgaGV1cmlzdGljLS1wcm92aWRlIHRoaXMgcHJvcCBpZiBuZWNlc3NhcnkpXHJcbiAgICAgKi9cclxuICAgIGlubGluZTogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyB0byBgdXNlVHJhbnNpdGlvbmAncyBgYW5pbWF0ZU9uTW91bnRgLiBJZiBudWxsLCB0aGUgZGVmYXVsdCB2YWx1ZSBwcm92aWRlZCB3aWxsIGJlIGBmYWxzZWAgaW5pdGlhbGx5LCB0aGVuIGB0cnVlYCBhZnRlciB0aGUgYFN3YXBwYWJsZWAgaXRzZWxmIGhhcyBtb3VudGVkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbkFuaW1hdGVPbk1vdW50PzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHM8UCBleHRlbmRzIHt9Pih7IGlubGluZSB9OiBDcmVhdGVTd2FwcGFibGVQcm9wcywgb3RoZXJQcm9wczogUCkge1xyXG4gICAgdHlwZSBFID0gUCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGluZmVyIEU+ID8gRSA6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wczxFPih7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke0dldEJhc2VDbGFzcygpfS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtHZXRCYXNlQ2xhc3MoKX0tc3dhcC1jb250YWluZXItaW5saW5lYClcclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXHJcbiAqIFxyXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXHJcbiAqIFxyXG4gKiBJZiB5b3UgcGFzcyBhIHJlZ3VsYXIgZWxlbWVudCAobGlrZSBhIGRpdikgb3Igb3RoZXIgc2luZ2xlIGNvbXBvbmVudCwgdGhlbiB0aGVlIHByb3BzIGFuZCByZWYgd2lsbCBiZSBmb3J3YXJkZWQgb250byB0aGF0IGVsZW1lbnQuIE90aGVyd2lzZSwgYWxsIHRoZSBjaGlsZHJlbiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBkaXYgb3Igc3BhbiBkZXBlbmRpbmcgb24gdGhlIGBpbmxpbmVgIHByb3AuXHJcbiAqIEBwYXJhbSBwYXJhbTAgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjaGlsZHJlbjogYywgaW5saW5lLCBjaGlsZHJlbkFuaW1hdGVPbk1vdW50LCAuLi5wIH06IFN3YXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGMgYXMgVk5vZGU7XHJcbiAgICBpZiAoIShjaGlsZHJlbiBhcyBWTm9kZSkudHlwZSlcclxuICAgICAgICBjaGlsZHJlbiA9ICghaW5saW5lPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPilcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHM8RT4odHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoY2hpbGRyZW5BbmltYXRlT25Nb3VudD8/IGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZU9uTW91bnQuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiB7IHJldHVybiBhbmltYXRlT25Nb3VudC5jdXJyZW50OyB9IH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PlxyXG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4gYXMgdHlwZW9mIHRyYW5zaXRpb25Qcm9wcyl9XHJcbiAgICAgICAgPC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSkpXHJcblxyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4iLCJpbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGgsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJldHVybkZhbHNlLCBydW5JbW1lZGlhdGVseSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSwgVHJhbnNpdGlvblN0YXRlLCBVc2VUcmFuc2l0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcblxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0RHVyYXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50PihlbGVtZW50OiBFIHwgbnVsbCkge1xuICAgIHJldHVybiBNYXRoLm1heCguLi4od2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCB8fCBkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKGB0cmFuc2l0aW9uLWR1cmF0aW9uYCkpLnNwbGl0KFwiLFwiKS5tYXAoc3RyID0+IHtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcIm1zXCIpKVxuICAgICAgICAgICAgcmV0dXJuICtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcInNcIikpXG4gICAgICAgICAgICByZXR1cm4gKCtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSkgKiAxMDAwO1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlOiBUcmFuc2l0aW9uU3RhdGUpIHtcbiAgICByZXR1cm4gbmV4dFN0YXRlLnNwbGl0KFwiLVwiKSBhcyBbVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlXTtcbn1cblxuLyoqXG4gKiBQcm92aWRlIHByb3BzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYW5pbWF0ZSBhIHRyYW5zaXRpb24uXG4gKiBcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHByb3BzSW5jb21pbmc6IHsgY2hpbGRyZW4sIC4uLnAgfSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG1lYXN1cmUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgb25WaXNpYmlsaXR5Q2hhbmdlIH0gfTogVXNlVHJhbnNpdGlvblBhcmFtZXRlcnM8RT4pOiBWTm9kZTxoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4gfCBudWxsIHtcbiAgICAvL2NvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBnZXRBbmltYXRlT25Nb3VudCB9ID0gdXNlQ29udGV4dChTd2FwcGFibGVDb250ZXh0KTtcbiAgICBleGl0VmlzaWJpbGl0eSB8fD0gXCJoaWRkZW5cIlxuICAgIGFuaW1hdGVPbk1vdW50ID8/PSBnZXRBbmltYXRlT25Nb3VudCgpO1xuICAgIG1lYXN1cmUgPz89IGZhbHNlO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZXhpdFZpc2liaWxpdHkpO1xuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzLCBHZXRFbnRlckNsYXNzLCBHZXRFeGl0Q2xhc3MsIEdldE1lYXN1cmVDbGFzcywgR2V0SW5pdENsYXNzLCBHZXRUcmFuc2l0aW9uQ2xhc3MsIEdldEZpbmFsaXplQ2xhc3MsIEdldERpcmVjdGlvbkNsYXNzLCBHZXRQaGFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XG5cbiAgICBjb25zdCB7IHJlZkVsZW1lbnRSZXR1cm4sIHJlZkVsZW1lbnRSZXR1cm46IHsgZ2V0RWxlbWVudCwgcHJvcHNTdGFibGUgfSB9ID0gdXNlUmVmRWxlbWVudDxFPih7IH0pXG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZjxoLkpTWC5DU1NQcm9wZXJ0aWVzPih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgICAvLyBUaGlzIGlzIHJlbW92ZWQgZHVyaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgZmlyc3QgcmVuZGVyXG4gICAgICAgIC8vIChhdCBsZWFzdCBvbmNlIGBzaG93YCBpcyBub24tbnVsbClcbiAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxuICAgIF0pKTtcbiAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoISFzdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGlvbiwgcGhhc2VdID0gcGFyc2VTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtkaXJlY3Rpb259LWZpbmFsaXplYCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHtcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kOiAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGdldEVsZW1lbnQoKSAmJiBlLmVsYXBzZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzIHRvIG1hdGNoIHRoZSBnaXZlbiBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZUNsYXNzZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSB8IG51bGwsIGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbiwgcGhhc2U/OiBUcmFuc2l0aW9uUGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuXG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRNZWFzdXJlQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0SW5pdENsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRGaW5hbGl6ZUNsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEluaXRDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcInJlbW92ZWRcIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJoaWRkZW5cIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1wZW5kaW5nYCxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9BZGQgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RGlyZWN0aW9uQ2xhc3MoZGlyZWN0aW9uKX1gLFxuICAgICAgICAgICAgcGhhc2UgPyBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXREaXJlY3Rpb25DbGFzcyhkaXJlY3Rpb24pfS0ke0dldFBoYXNlQ2xhc3MocGhhc2UpfWAgOiBcIlwiLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YFxuICAgICAgICBdO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5hbGxDbGFzc2VzVG9SZW1vdmUpO1xuICAgICAgICBhbGxDbGFzc2VzVG9SZW1vdmUubWFwKHYgPT4gY2xhc3NOYW1lcy5jdXJyZW50LmRlbGV0ZSh2KSk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcblxuICAgIH0sIFtdKTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBzaW5nbGUgXCJtZWFzdXJlXCIgdmFyaWFibGUgKG9yIHJlbW92ZXMgaXQpXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlU2l6ZVByb3BlcnR5ID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUsIHZhck5hbWU6IChrZXlvZiBoLkpTWC5DU1NQcm9wZXJ0aWVzKSAmIHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUgfCBudWxsLCBtZWFzdXJlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS10b3BgLCBzaXplPy50b3ApO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtbGVmdGAsIHNpemU/LmxlZnQpO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtd2lkdGhgLCBzaXplPy53aWR0aCk7XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1oZWlnaHRgLCBzaXplPy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gV2UgdXNlIGJvdGggdXNlVGltZW91dCBhbmQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciB0aW1pbmcgY2VydGFpbiB0aGluZ3MgLS1cbiAgICAvLyByYWYgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSBpbml0IHRvIHRyYW5zaXRpb24gKHdvdWxkIHVzZSBxdWV1ZU1pY3JvdGFzayBidXQgaXQgY2FuJ3QgYmUgY2FuY2VsbGVkKVxuICAgIC8vIHNldFRpbWVvdXQgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSB0cmFuc2l0aW9uIHRvIGZpbmFsaXplIChhcyBhIGJhY2t1cCBpbiBjYXNlIHRyYW5zaXRpb25lbmQgZG9lc24ndCBmaXJlKVxuICAgIC8vXG4gICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgc3RhbGUgY2FsbGJhY2tzIHJ1bm5pbmcgKGkuZS4gd2hlbiB3ZSByYXBpZGx5IHN3aXRjaCBiZXR3ZWVuIHZpc2libGUgYW5kIG5vdClcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhY2N1cmF0ZWx5IGNhbmNlbCBhbnl0aGluZyB0aGF0IGNhbiBjaGFuZ2Ugb3VyIHN0YXRlIG9uIGEgZGVsYXkuXG4gICAgLy9cbiAgICAvLyBBbHNvIG9mIG5vdGUsIHdlIHN0b3JlIFwiKGYpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQoZilcIiBpbnN0ZWFkIG9mIGp1c3QgXCJ3aW5kb3cuY2xlYXJUaW1lb3V0XCIgYmVjYXVzZVxuICAgIC8vIG9mIHRoZSBpbXBsaWNpdCB3aW5kb3cgb2JqZWN0IC0tIHByb2JsZW1zIHdpdGggYSBtaXNzaW5nIGB0aGlzYCBvYmplY3QgYW5kIGFsbCB0aGF0IG5vbnNlbnNlLlxuICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSB1c2VSZWY8bnVtYmVyPigtMSk7XG4gICAgY29uc3QgdGltZW91dENsZWFyRnVuY3Rpb24gPSB1c2VSZWY8KHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSkgfCAodHlwZW9mIGNsZWFyVGltZW91dCkgfCBudWxsPihudWxsKTtcblxuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLCB0aGVyZSdzIHNvbWUgbG9naWMgd2UgbmVlZCB0byBydW46XG4gICAgICogXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYSBgdHJhbnNpdGlvbmAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IHVudGlsIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgdGhlbiBjaGFuZ2UgdG8gdGhlIGBmaW5hbGl6ZWAgcGhhc2UuXG4gICAgICogXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+PigobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIG5vIHN0YWxlIGNoYW5nZSBjb2RlIGV2ZXIgcnVuc1xuICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID49IDAgJiYgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudClcbiAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcblxuICAgICAgICAvLyBIYW5kbGUgaW5lcnQgcHJvcHMvcHJvcGVydHlcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBpZiAoZXhpdFZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZXJ0ID0gKGV4aXRWaXNpYmlsaXR5ID09IFwiaW5lcnRcIiAmJiAobmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiAmJiBuZXh0UGhhc2UgPT0gXCJmaW5hbGl6ZVwiKSA/IHRydWUgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGluZXJ0KVxuICAgICAgICAgICAgICAgIChvdGhlclByb3BzLmN1cnJlbnQgYXMgYW55KS5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCIgYXMgbmV2ZXJdO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICBlbGVtZW50LmluZXJ0ID0gKGluZXJ0IHx8IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZT8uKG5leHREaXJlY3Rpb24gPT0gXCJlbnRlclwiIHx8IChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSAhPSBcImZpbmFsaXplXCIpKTtcblxuICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIChuZXh0UGhhc2UgPT0gXCJpbml0XCIgfHwgbmV4dFBoYXNlID09IFwidHJhbnNpdGlvblwiKSlcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG5cblxuICAgICAgICBzd2l0Y2ggKG5leHRQaGFzZSkge1xuICAgICAgICAgICAgY2FzZSBcIm1lYXN1cmVcIjoge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy9zZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS1pbml0YCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImluaXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gISFJbnRlbnRpb25hbCBmYWxsLXRocm91Z2ghIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHNldFN0YXRlKGAke25leHREaXJlY3Rpb259LXRyYW5zaXRpb25gKTsgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH0sIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSAqIDEuNSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNsZWFyVGltZW91dChmKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZpbmFsaXplXCI6IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIG9yIHNjaGVkdWxlIG9yIGFueXRoaW5nIC0tIHdlIGp1c3QgdXBkYXRlIG91ciBjbGFzc2VzIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSBudWxsOyAgICAvLyBEb2VzIHRoaXMgbWFrZSBpdCBtb3JlIG9yIGxlc3MgY2xlYXI/XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgW2dldFN0YXRlLCBzZXRTdGF0ZV0gPSB1c2VQYXNzaXZlU3RhdGU8VHJhbnNpdGlvblN0YXRlIHwgbnVsbCwgdW5kZWZpbmVkPihvblN0YXRlQ2hhbmdlLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG5cblxuICAgIC8vIFdoZW4gd2UgbW91bnQsIGFuZCBldmVyeSB0aW1lIHRoZXJlYWZ0ZXIgdGhhdCBgc2hvd2AgY2hhbmdlcyxcbiAgICAvLyBjaGFuZ2Ugb3VyIGN1cnJlbnQgc3RhdGUgYWNjb3JkaW5nIHRvIHRoYXQgYHNob3dgIHZhbHVlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgLy8gSWYgYHNob3dgIGlzIG51bGwsIHRoZW4gd2UgZG9uJ3QgY2hhbmdlIGFueXRoaW5nLlxuICAgICAgICBpZiAoc2hvdyA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIGBzaG93YCBpcyB0cnVlIG9yIGZhbHNlIChhcyBvcHBvc2VkIHRvIG51bGwpLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIHNlZWluZyBhIG5vbi1udWxsIHZhbHVlLCBcbiAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgaW5kaWNhdGVzIHRoZSBubyB0cmFuc2l0aW9uIGxvZ2ljIGhhcyBzdGFydGVkLlxuICAgICAgICAvLyAoQmVjYXVzZSB0aGlzIGlzIHVzZUxheW91dEVmZmVjdCwgaXQgd2lsbCB0YWtlIGVmZmVjdCBiZWZvcmUgdGhlIGNsYXNzJ3MgZWZmZWN0cyBhcmUgcGFpbnRlZClcbiAgICAgICAgaWYgKCFoYXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuY3VycmVudC5kZWxldGUoYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgKTtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtHZXRCYXNlQ2xhc3MoKX0tcGVuZGluZ2ApO1xuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHBlbmRpbmcgY2xhc3Mgb2Z0ZW4gbWFrZXMgdGhpcyBoaWRkZW4gb3IgZC1ub25lLCBcbiAgICAgICAgICAgICAgICAvLyBmb3JjZSBhIHJlZmxvdyBqdXV1c3QgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2U6IFRyYW5zaXRpb25QaGFzZSA9IG1lYXN1cmUgPyBcIm1lYXN1cmVcIiA6IFwiaW5pdFwiO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbY3VycmVudERpcmVjdGlvbiwgY3VycmVudFBoYXNlXSA9IHBhcnNlU3RhdGUoY3VycmVudFN0YXRlKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGhhc2UgIT0gXCJmaW5hbGl6ZVwiKVxuICAgICAgICAgICAgICAgIG5leHRQaGFzZSA9IFwidHJhbnNpdGlvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90ZTogdGhlIHNldFN0YXRlIGNoYW5nZSBoYW5kbGVyIHJ1bnMgaW1tZWRpYXRlbHkgd2l0aCBubyBkZWJvdW5jZS5cbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgIGlmIChoYXNNb3VudGVkLmN1cnJlbnQgfHwgYW5pbWF0ZU9uTW91bnQpXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYGVudGVyLSR7bmV4dFBoYXNlfWApO1xuXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJlbnRlci1maW5hbGl6ZVwiKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhbmltYXRlT25Nb3VudClcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZXhpdC0ke25leHRQaGFzZX1gKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImV4aXQtZmluYWxpemVcIik7XG4gICAgICAgIH1cblxuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFttZWFzdXJlLCBzaG93XSk7XG5cblxuICAgIGlmIChkdXJhdGlvbiAhPSBudWxsKVxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZHVyYXRpb25gXSA9IGR1cmF0aW9uICsgXCJtc1wiO1xuICAgIGVsc2VcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS1kdXJhdGlvbmBdO1xuXG4gICAgZWFzaW5nSW4gPz89IGVhc2luZztcbiAgICBlYXNpbmdPdXQgPz89IGVhc2luZztcblxuICAgIGlmIChlYXNpbmdPdXQgIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdID0gZWFzaW5nT3V0O1xuICAgIGVsc2VcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXTtcblxuXG4gICAgaWYgKGVhc2luZ0luICE9IG51bGwpXG4gICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF0gPSBlYXNpbmdJbjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdO1xuXG5cblxuICAgIC8vIFRPRE9cbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBudWxsO1xuICAgIGNvbnN0IGJsb2NrRGlyZWN0aW9uID0gbnVsbDtcblxuXG5cbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBkZWxheU1vdW50VW50aWxTaG93biBpcyxcbiAgICAvLyBvbmNlIHdlJ3ZlIHJlbmRlcmVkIG91ciBjaGlsZHJlbiBvbmNlLCBcbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBkb24ndCB1bm1vdW50IHRoZW0gYWdhaW4gYW5kIHdhc3RlIGFsbCB0aGF0IHdvcmsuXG4gICAgLy8gKElmIHlvdSByZWFsbHkgbmVlZCB0aGlzIHlvdSBjYW4ganVzdCB1bm1vdW50IHRoZSBlbnRpcmUgdHJhbnNpdGlvbiBpdHNlbGYpXG4gICAgY29uc3QgZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW4gPSAoc2hvdyB8fCAhZGVsYXlNb3VudFVudGlsU2hvd24pO1xuICAgIGNvbnN0IGhhc1JlbmRlcmVkQ2hpbGRyZW4gPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHJlbmRlckNoaWxkcmVuID0gZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW4gfHwgaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbilcbiAgICAgICAgICAgIGhhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudCB8fD0gdHJ1ZTtcbiAgICB9LCBbaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50ID8gZmFsc2UgOiBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbl0pO1xuXG5cbiAgICBjb25zdCBjaGlsZHJlbklzVm5vZGUgPSAoY2hpbGRyZW4gJiYgKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlICYmIChjaGlsZHJlbiBhcyBWTm9kZSkucHJvcHMpO1xuICAgIGNvbnN0IGZpbmFsUHJvcHMgPSB1c2VNZXJnZWRQcm9wczxFPihwLCBwcm9wc1N0YWJsZSwgb3RoZXJQcm9wcy5jdXJyZW50LCB7XG4gICAgICAgIGNsYXNzTmFtZTogW1xuICAgICAgICAgICAgLi4uY2xhc3NOYW1lcy5jdXJyZW50LFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWBcbiAgICAgICAgXS5qb2luKFwiIFwiKSxcbiAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudFxuICAgIH0sIGNoaWxkcmVuSXNWbm9kZSA/IHsgcmVmOiAoY2hpbGRyZW4gYXMgVk5vZGUpLnJlZiwgLi4uKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyB9IDoge30pO1xuXG5cblxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogcmV0dXJuRmFsc2UgfSkuY3VycmVudDtcblxuICAgIGxldCBtb2RpZmllZENoaWxkcmVuOiBWTm9kZTtcblxuICAgIGlmIChjaGlsZHJlbklzVm5vZGUpIHtcbiAgICAgICAgbW9kaWZpZWRDaGlsZHJlbiA9IDxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT57Y2xvbmVFbGVtZW50KGNoaWxkcmVuIGFzIFZOb2RlLCBmaW5hbFByb3BzKX08L1N3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBtb2RpZmllZENoaWxkcmVuID0gPFN3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PjxzcGFuIHsuLi5maW5hbFByb3BzIGFzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGFueT59PntjaGlsZHJlbn08L3NwYW4+PC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIH1cblxuXG5cbiAgICByZXR1cm4gcmVuZGVyQ2hpbGRyZW4gPyBtb2RpZmllZENoaWxkcmVuIDogbnVsbDtcbn1cblxuXG5cbmZ1bmN0aW9uIGZvcmNlUmVmbG93PEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oZTogRSkge1xuXG4gICAgLy8gVHJ5IHJlYWxseSBoYXJkIHRvIG1ha2Ugc3VyZSB0aGlzIGlzbid0IG9wdGltaXplZCBvdXQgYnkgYW55dGhpbmcuXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cbiAgICBjb25zdCBwID0gKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXk7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBwO1xuICAgIHJldHVybiBlO1xufVxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgbWluaW11bSBvciBtYXhpbXVtIG9wYWNpdHkgdmFsdWVzIHRvIHVzZSBmb3IgdGhlIGZhZGUgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBmYWRlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIG91dC5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmFkZU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gZmFkZWQgaW4uXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZhZGVNYXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzRmFkZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWluLCBmYWRlTWF4IH0gfTogVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZhZGVgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxyXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXHJcbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXHJcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oeyByZWYsIC4uLnJlc3QgfSwgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgY2xpcFBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwT3JpZ2luSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBjbGlwIHRvL2Zyb20sIGZyb20gMCB0byAxICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBjbGlwIHRvL2Zyb20sIGZyb20gMCB0byAxIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDFcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0NsaXA8RSBleHRlbmRzIEVsZW1lbnQ+KHsgY2xpcFBhcmFtZXRlcnM6IHsgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSB9OiBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7R2V0QmFzZUNsYXNzKCl9LWNsaXBgKSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXHJcbiAgICAgICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllcyxcclxuICAgICAgICB9XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+LCBcImNsaXBQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ2xpcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDbGlwKHsgY2xpcFBhcmFtZXRlcnM6IHsgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2sgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSkpXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzQ2xpcCwgVXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnMgfSBmcm9tIFwiLi9jbGlwXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGlwRmFkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+LCBcImNsaXBQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlwRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGRlbGF5TW91bnRVbnRpbFNob3duLCBkdXJhdGlvbiwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENsaXBGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ2xpcCh7IGNsaXBQYXJhbWV0ZXJzOiB7IGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KSk7XHJcblxyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNvbGxhcHNlIGVmZmVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuXHJcbiAgICBjb2xsYXBzZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFRoZSBzbWFsbGVzdCBzaXplIHRoZSBjb21wb25lbnQgY29sbGFwc2VzIHRvLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgbWluQmxvY2tTaXplOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKiBcclxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0NvbGxhcHNlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9OiBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWNvbGxhcHNlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPiwgXCJjb2xsYXBzZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxyXG4gKiBcclxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSEgXHJcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXHJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBzaG93LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIG1pbkJsb2NrU2l6ZSwgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ29sbGFwc2VQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuXHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDb2xsYXBzZSh7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNDb2xsYXBzZSwgVXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vY29sbGFwc2VcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGFwc2VGYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPiwgXCJjb2xsYXBzZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIG1pbkJsb2NrU2l6ZSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENvbGxhcHNlRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NvbGxhcHNlKHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiwgdXNlTGFzdE5vbk51bGxWYWx1ZSB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBhbmQgZXh0ZW50IG9mIHRoZSBmbGlwIGVmZmVjdC4gXG4gKiBWYWx1ZXMgYXJlIHJlbGF0aXZlLCB3aXRoIDEgb3IgLTEgYmVpbmcgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGF0IGRpcmVjdGlvbi5cbiAqIGAwLjVgLCBmb3IgZXhhbXBsZSwgd291bGQgZmxpcCB0byB0aGUgcmlnaHQgYnkgNTAlIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xuICAgIGZsaXBQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgaW5saW5lIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBBbmdsZUlubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhcmdldCBhbmdsZSAoaW4gZGVncmVlcykgdG8gcm90YXRlIHRvd2FyZHMgb24gdGhlIGJsb2NrIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGlzIGlzIGEgM0QgZWZmZWN0LCBhIHBlcnNwZWN0aXZlIHZhbHVlIGlzIG5lZWRlZC5cbiAgICAgICAgICogQGRlZmF1bHQgODAwcHhcbiAgICAgICAgICovXG4gICAgICAgIGZsaXBQZXJzcGVjdGl2ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNGbGlwPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH06IFVzZUJhc2VQcm9wc0ZsaXBQYXJhbWV0ZXJzPEU+KSB7XG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1mbGlwYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVJbmxpbmUpID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVCbG9jaykgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1wZXJzcGVjdGl2ZWBdOiBgJHsoZmxpcFBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4sIFwiZmxpcFBhcmFtZXRlcnNcIj4+IHsgfTtcblxuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXG4gKiBcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKiBcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcbiAqIChgZmxpcElubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pIFxuICogXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXA8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgZmxpcFBlcnNwZWN0aXZlLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBGbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGbGlwKHsgZmxpcFBhcmFtZXRlcnM6IHsgZmxpcEFuZ2xlQmxvY2ssIGZsaXBBbmdsZUlubGluZSwgZmxpcFBlcnNwZWN0aXZlIH0gfSksXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH0pO1xufSkpO1xuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmLCB1c2VMYXN0Tm9uTnVsbFZhbHVlIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIHNsaWRlIGVmZmVjdC4gXHJcbiAqIFZhbHVlcyBhcmUgcmVsYXRpdmUsIHdpdGggMSBvciAtMSBiZWluZyB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGluIHRoYXQgZGlyZWN0aW9uLlxyXG4gKiBgMC41YCwgZm9yIGV4YW1wbGUsIHdvdWxkIHNsaWRlIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIHNsaWRlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gc2xpZGUgdG8vZnJvbSAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzbGlkZVRhcmdldElubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBzbGlkZSB0by9mcm9tIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2s6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgU2xpZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc1NsaWRlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9IH06IFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPikge1xyXG4gICAgc2xpZGVUYXJnZXRJbmxpbmUgPSB1c2VMYXN0Tm9uTnVsbFZhbHVlKHNsaWRlVGFyZ2V0SW5saW5lKTtcclxuICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSB1c2VMYXN0Tm9uTnVsbFZhbHVlKHNsaWRlVGFyZ2V0QmxvY2spO1xyXG5cclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGUtdGFyZ2V0LWlubGluZWBdOiBgJHsoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgc2xpZGVJbmxpbmVgIGFuZCBgc2xpZGVCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICogXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxyXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93biwgLi4ucmVzdCB9OiBTbGlkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgb3JpZ2luLCBtaW5pbXVtIHNpemUsIGFuZCBkaXJlY3Rpb24gb2YgdGhlIHpvb20gZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICB6b29tUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKFggY29tcG9uZW50KVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWSBjb21wb25lbnQpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbCkuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc1pvb208RSBleHRlbmRzIEVsZW1lbnQ+KHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSB9OiBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LXpvb21gLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1taW4taW5saW5lYF06IGAkeyh6b29tTWluSW5saW5lID8/IHpvb21NaW4gPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllcyxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFpvb21Qcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBab29tUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG59KSk7XHJcblxyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVpvb21Qcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVab29tUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVpvb21GYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZmFkZU1heCwgZmFkZU1pbiwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZVpvb21GYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFpvb21GYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBab29tRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn0pKTtcclxuIixudWxsXSwibmFtZXMiOlsic2xpY2UiLCJvcHRpb25zIiwidm5vZGVJZCIsInJlcmVuZGVyUXVldWUiLCJwcmV2RGVib3VuY2UiLCJpIiwiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiSVNfTk9OX0RJTUVOU0lPTkFMIiwiYXNzaWduIiwib2JqIiwicHJvcHMiLCJyZW1vdmVOb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY2hpbGRyZW4iLCJrZXkiLCJyZWYiLCJub3JtYWxpemVkUHJvcHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiY3JlYXRlVk5vZGUiLCJvcmlnaW5hbCIsInZub2RlIiwiX19rIiwiX18iLCJfX2IiLCJfX2UiLCJfX2QiLCJfX2MiLCJfX2giLCJjb25zdHJ1Y3RvciIsIl9fdiIsIkZyYWdtZW50IiwiQ29tcG9uZW50IiwiY29udGV4dCIsInRoaXMiLCJnZXREb21TaWJsaW5nIiwiY2hpbGRJbmRleCIsImluZGV4T2YiLCJzaWJsaW5nIiwidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCJjaGlsZCIsImJhc2UiLCJlbnF1ZXVlUmVuZGVyIiwiYyIsInB1c2giLCJwcm9jZXNzIiwiZGVib3VuY2VSZW5kZXJpbmciLCJzZXRUaW1lb3V0IiwicXVldWUiLCJfX3IiLCJzb3J0IiwiYSIsImIiLCJzb21lIiwiY29tcG9uZW50IiwiY29tbWl0UXVldWUiLCJvbGRWTm9kZSIsIm9sZERvbSIsInBhcmVudERvbSIsIl9fUCIsImRpZmYiLCJvd25lclNWR0VsZW1lbnQiLCJjb21taXRSb290IiwiZGlmZkNoaWxkcmVuIiwicmVuZGVyUmVzdWx0IiwibmV3UGFyZW50Vk5vZGUiLCJvbGRQYXJlbnRWTm9kZSIsImdsb2JhbENvbnRleHQiLCJpc1N2ZyIsImV4Y2Vzc0RvbUNoaWxkcmVuIiwiaXNIeWRyYXRpbmciLCJqIiwiY2hpbGRWTm9kZSIsIm5ld0RvbSIsImZpcnN0Q2hpbGREb20iLCJyZWZzIiwib2xkQ2hpbGRyZW4iLCJvbGRDaGlsZHJlbkxlbmd0aCIsIkFycmF5IiwiaXNBcnJheSIsInJlb3JkZXJDaGlsZHJlbiIsInBsYWNlQ2hpbGQiLCJ1bm1vdW50IiwiYXBwbHlSZWYiLCJ0bXAiLCJ0b0NoaWxkQXJyYXkiLCJvdXQiLCJuZXh0RG9tIiwic2liRG9tIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiZGlmZlByb3BzIiwiZG9tIiwibmV3UHJvcHMiLCJvbGRQcm9wcyIsImh5ZHJhdGUiLCJzZXRQcm9wZXJ0eSIsInNldFN0eWxlIiwic3R5bGUiLCJ2YWx1ZSIsInRlc3QiLCJuYW1lIiwib2xkVmFsdWUiLCJ1c2VDYXB0dXJlIiwibyIsImNzc1RleHQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50UHJveHlDYXB0dXJlIiwiZXZlbnRQcm94eSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJuZXdWTm9kZSIsImlzTmV3Iiwib2xkU3RhdGUiLCJzbmFwc2hvdCIsImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsInByb3ZpZGVyIiwiY29tcG9uZW50Q29udGV4dCIsInJlbmRlckhvb2siLCJjb3VudCIsIm5ld1R5cGUiLCJjb250ZXh0VHlwZSIsIl9fRSIsInByb3RvdHlwZSIsInJlbmRlciIsImRvUmVuZGVyIiwic3ViIiwic3RhdGUiLCJfc2IiLCJfX3MiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJjb21wb25lbnRXaWxsTW91bnQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJmb3JFYWNoIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImdldENoaWxkQ29udGV4dCIsImdldFNuYXBzaG90QmVmb3JlVXBkYXRlIiwiZGlmZkVsZW1lbnROb2RlcyIsImRpZmZlZCIsInJvb3QiLCJjYiIsIm9sZEh0bWwiLCJuZXdIdG1sIiwibm9kZVR5cGUiLCJsb2NhbE5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiaXMiLCJkYXRhIiwiY2hpbGROb2RlcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYXR0cmlidXRlcyIsIl9faHRtbCIsImlubmVySFRNTCIsImNoZWNrZWQiLCJjdXJyZW50IiwicGFyZW50Vk5vZGUiLCJza2lwUmVtb3ZlIiwiciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVwbGFjZU5vZGUiLCJmaXJzdENoaWxkIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsImRlZmF1bHRWYWx1ZSIsImNvbnRleHRJZCIsIkNvbnN1bWVyIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJzdWJzIiwiY3R4IiwiX3Byb3BzIiwib2xkIiwic3BsaWNlIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjdG9yIiwiaGFuZGxlZCIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJ1cGRhdGUiLCJjYWxsYmFjayIsInMiLCJmb3JjZVVwZGF0ZSIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2aW91c0NvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwiRU1QVFkiLCJvbGRCZWZvcmVEaWZmIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwiaG9va3MiLCJfX0giLCJfX1YiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJhY3Rpb24iLCJjdXJyZW50VmFsdWUiLCJfX04iLCJuZXh0VmFsdWUiLCJfaGFzU2N1RnJvbUhvb2tzIiwicHJldlNjdSIsInAiLCJzdGF0ZUhvb2tzIiwiZmlsdGVyIiwieCIsImV2ZXJ5Iiwic2hvdWxkVXBkYXRlIiwiaG9va0l0ZW0iLCJ1c2VFZmZlY3QiLCJhcmdzIiwiYXJnc0NoYW5nZWQiLCJfcGVuZGluZ0FyZ3MiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJzaGlmdCIsImludm9rZUNsZWFudXAiLCJpbnZva2VFZmZlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZnRlck5leHRGcmFtZSIsImhhc0Vycm9yZWQiLCJIQVNfUkFGIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImhvb2siLCJjb21wIiwiY2xlYW51cCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsInQiLCJuIiwiY2xzeCIsInVzZUVuc3VyZVN0YWJpbGl0eSIsInBhcmVudEhvb2tOYW1lIiwidmFsdWVzIiwiaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkiLCJzaG93bkVycm9yIiwidXNlSGVscGVyIiwiY29uc29sZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsImN1c3RvbURlYm91bmNlUmVuZGVyaW5nIiwidmFsdWVSZWYiLCJVbnNldCIsInJlYXNvblJlZiIsIndhcm5pbmdSZWYiLCJkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCIsImNsZWFudXBDYWxsYmFja1JlZiIsIm9uU2hvdWxkQ2xlYW5VcCIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiZXgiLCJnZXRWYWx1ZSIsIndhcm4iLCJzZXRWYWx1ZSIsInJlYXNvbiIsIkZ1bmN0aW9uIiwibmV4dFJlYXNvbiIsIm5leHREZXAiLCJwcmV2RGVwIiwiU3ltYm9sIiwicmV0dXJuRmFsc2UiLCJyZXR1cm5OdWxsIiwicnVuSW1tZWRpYXRlbHkiLCJUYWJsZSIsImJhc2U2NCIsInJhbmRvbTZCaXRzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tNjRCaXRzIiwiZ2VuZXJhdGVSYW5kb21JZCIsInByZWZpeCIsIm1hcCIsImpvaW4iLCJwcmV2aW91c0lucHV0cyIsIk1hcCIsInRvUnVuIiwiY29tbWl0TmFtZSIsIm9yaWdpbmFsQ29tbWl0IiwibmV3Q29tbWl0IiwiaWQiLCJlZmZlY3RJbmZvIiwib2xkSW5wdXRzIiwiZ2V0IiwiaW5wdXRzIiwiZWZmZWN0Iiwic2V0IiwiY2xlYXIiLCJ1c2VCZWZvcmVMYXlvdXRFZmZlY3QiLCJkZWxldGUiLCJ1c2VTdGFibGVHZXR0ZXIiLCJFcnJvciIsInVzZU1lcmdlZENoaWxkcmVuIiwibGhzIiwicmhzIiwidXNlTWVyZ2VkQ2xhc3NlcyIsImxoc0NsYXNzIiwibGhzQ2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwic3BsaXQiLCJyaHNDbGFzc2VzIiwiYWxsQ2xhc3NlcyIsIlNldCIsImZyb20iLCJwcm9jZXNzUmVmIiwiaW5zdGFuY2UiLCJhc3NlcnQiLCJ1c2VNZXJnZWRSZWZzIiwiY29tYmluZWQiLCJzdHlsZVN0cmluZ1RvT2JqZWN0IiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzdGF0ZW1lbnQiLCJ1c2VNZXJnZWRTdHlsZXMiLCJsb2ciLCJ1c2VNZXJnZWRQcm9wcyIsImFsbFByb3BzIiwicmV0IiwibmV4dFByb3BzIiwidXNlTWVyZ2VkUHJvcHMyIiwia25vd25zIiwibWVyZ2VVbmtub3duIiwibGhzVmFsdWUiLCJyaHNWYWx1ZSIsIm1lcmdlZCIsIm1lcmdlRnVuY3Rpb25zIiwibGhzQWxsIiwicmhzQWxsIiwiY2xhc3NOYW1lIiwibGhzS2V5VSIsImxoc0tleSIsImhhcyIsInJoc0tleVUiLCJyaHNLZXkiLCJsdiIsInJ2IiwiUHJvbWlzZSIsImFsbCIsInVzZVJlZkVsZW1lbnQiLCJvbkVsZW1lbnRDaGFuZ2UiLCJvbk1vdW50Iiwib25Vbm1vdW50IiwicmVmRWxlbWVudFBhcmFtZXRlcnMiLCJoYW5kbGVyIiwicHJldlZhbHVlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJwcm9wc1N0YWJsZSIsInJlZkVsZW1lbnRSZXR1cm4iLCJfYmxvY2tpbmdFbGVtZW50cyIsIl9hbHJlYWR5SW5lcnRFbGVtZW50cyIsIl90b3BFbFBhcmVudHMiLCJfc2libGluZ3NUb1Jlc3RvcmUiLCJfcGFyZW50TU8iLCJfdG9wQ2hhbmdlZCIsIl9zd2FwSW5lcnRlZFNpYmxpbmciLCJfaW5lcnRTaWJsaW5ncyIsIl9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzIiwiX2dldFBhcmVudHMiLCJfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiIsIl9pc0luZXJ0YWJsZSIsIl9oYW5kbGVNdXRhdGlvbnMiLCJCbG9ja2luZ0VsZW1lbnRzSW1wbCIsIl9hIiwiX2IiLCJfYyIsImRlc3RydWN0b3IiLCJudWxsYWJsZSIsInRvcCIsImVsZW1zIiwiZWxlbWVudCIsInJlbW92ZSIsInBvcCIsIm5ld1RvcCIsInRvS2VlcEluZXJ0Iiwib2xkUGFyZW50cyIsIm5ld1BhcmVudHMiLCJib2R5IiwidG9Ta2lwIiwib2xkSW5lcnQiLCJuZXdJbmVydCIsInNpYmxpbmdzVG9SZXN0b3JlIiwiaW5lcnQiLCJhZGQiLCJlbGVtZW50cyIsIm1vIiwiZGlzY29ubmVjdCIsInNpYmxpbmdzIiwicGFyZW50IiwiaW5lcnRlZFNpYmxpbmdzIiwiTXV0YXRpb25PYnNlcnZlciIsImJpbmQiLCJwYXJlbnRUb09ic2VydmUiLCJtYXliZVNoYWR5Um9vdCIsIl9fc2hhZHkiLCJob3N0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsInRhcmdldCIsImlkeCIsImluZXJ0ZWRDaGlsZCIsInJlbW92ZWROb2RlcyIsImluZm8iLCJhZGRlZE5vZGVzIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImFzc2lnbmVkU2xvdCIsInNoYWRvd1Jvb3QiLCJyZXN1bHQiLCJub2RlcyIsInNsb3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiJGJsb2NraW5nRWxlbWVudHMiLCJnbG9iYWwiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIl9vbk11dGF0aW9uIiwic3VidHJlZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJfYWRvcHRJbmVydFJvb3QiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsImNvbnRlbnQiLCJkaXN0cmlidXRlZE5vZGVzIiwiZ2V0RGlzdHJpYnV0ZWROb2RlcyIsInNsb3QiLCJfZGlzdHJpYnV0ZWROb2RlcyIsIl9pIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiSFRNTEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsIm9iamVjdFByb3RvIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJmcmVlUHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsImlzVHlwZWRBcnJheSIsImlzT2JqZWN0Iiwibm93IiwiRGF0ZSIsInJlV2hpdGVzcGFjZSIsInRyaW1tZWRFbmRJbmRleCIsInN0cmluZyIsImNoYXJBdCIsInJlVHJpbVN0YXJ0IiwiYmFzZVRyaW0iLCJzeW1ib2xUYWciLCJpc1N5bWJvbCIsIk5BTiIsInJlSXNCYWRIZXgiLCJyZUlzQmluYXJ5IiwicmVJc09jdGFsIiwiZnJlZVBhcnNlSW50IiwicGFyc2VJbnQiLCJ0b051bWJlciIsIm90aGVyIiwidmFsdWVPZiIsImlzQmluYXJ5IiwiRlVOQ19FUlJPUl9URVhUIiwibmF0aXZlTWF4IiwibWF4IiwibmF0aXZlTWluIiwibWluIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwiaW52b2tlRnVuYyIsInRpbWUiLCJ0aGlzQXJnIiwiYXBwbHkiLCJsZWFkaW5nRWRnZSIsInRpbWVyRXhwaXJlZCIsInJlbWFpbmluZ1dhaXQiLCJ0aW1lU2luY2VMYXN0Q2FsbCIsInRpbWVTaW5jZUxhc3RJbnZva2UiLCJ0aW1lV2FpdGluZyIsInNob3VsZEludm9rZSIsInRyYWlsaW5nRWRnZSIsImNhbmNlbCIsImZsdXNoIiwiZGVib3VuY2VkIiwiaXNJbnZva2luZyIsImlzUHJvbWlzZSIsImFzeW5jVG9TeW5jIiwiYXN5bmNJbnB1dCIsIm9uSW52b2tlIiwib25GaW5hbGx5Iiwib25GaW5hbGx5QW55Iiwib25SZWplY3QiLCJvblJlc29sdmUiLCJvbkhhc0Vycm9yIiwib25IYXNSZXN1bHQiLCJvbkVycm9yIiwib25SZXR1cm5WYWx1ZSIsImNhcHR1cmUiLCJvbkFzeW5jRGVib3VuY2UiLCJvblN5bmNEZWJvdW5jZSIsIm9uUGVuZGluZyIsInRocm90dGxlIiwicGVuZGluZyIsInN5bmNEZWJvdW5jaW5nIiwiYXN5bmNEZWJvdW5jaW5nIiwiY3VycmVudENhcHR1cmUiLCJzeW5jRGVib3VuY2VkIiwic3luYyIsInByb21pc2VPclJldHVybiIsImhhZFN5bmNFcnJvciIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJMb2Rhc2hEZWJvdW5jZSIsInN5bmNPdXRwdXQiLCJhc3luYyIsInNoYWxsb3dEaWZmZXJzIiwiUHVyZUNvbXBvbmVudCIsIm1lbW8iLCJjb21wYXJlciIsInVwZGF0ZVJlZiIsIk1lbW9lZCIsImRpc3BsYXlOYW1lIiwiaXNSZWFjdENvbXBvbmVudCIsImlzUHVyZVJlYWN0Q29tcG9uZW50Iiwib2xkRGlmZkhvb2siLCJfX2YiLCJSRUFDVF9GT1JXQVJEX1NZTUJPTCIsImZvciIsImZvcndhcmRSZWYiLCJmbiIsIkZvcndhcmRlZCIsImNsb25lIiwiJCR0eXBlb2YiLCJvbGRDYXRjaEVycm9yIiwib2xkVW5tb3VudCIsImRldGFjaGVkQ2xvbmUiLCJkZXRhY2hlZFBhcmVudCIsInJlbW92ZU9yaWdpbmFsIiwib3JpZ2luYWxQYXJlbnQiLCJTdXNwZW5zZSIsIl9fdSIsIl9zdXNwZW5kZXJzIiwic3VzcGVuZGVkIiwiX19hIiwiU3VzcGVuc2VMaXN0IiwiX25leHQiLCJfbWFwIiwiX19SIiwicHJvbWlzZSIsInN1c3BlbmRpbmdWTm9kZSIsInN1c3BlbmRpbmdDb21wb25lbnQiLCJyZXNvbHZlIiwicmVzb2x2ZWQiLCJvblJlc29sdmVkIiwib25TdXNwZW5zaW9uQ29tcGxldGUiLCJzdXNwZW5kZWRWTm9kZSIsIndhc0h5ZHJhdGluZyIsImRldGFjaGVkQ29tcG9uZW50IiwiX19PIiwiZmFsbGJhY2siLCJsaXN0IiwicmV2ZWFsT3JkZXIiLCJkZWxlZ2F0ZWQiLCJ1bnN1c3BlbmQiLCJ3cmFwcGVkVW5zdXNwZW5kIiwicmV2ZXJzZSIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIkNBTUVMX1BST1BTIiwiSVNfRE9NIiwib25DaGFuZ2VJbnB1dFR5cGUiLCJ2Iiwib2xkRXZlbnRIb29rIiwiZW1wdHkiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImNhbmNlbEJ1YmJsZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwZXJzaXN0IiwibmF0aXZlRXZlbnQiLCJjbGFzc05hbWVEZXNjcmlwdG9yIiwiY2xhc3MiLCJvbGRWTm9kZUhvb2siLCJub25DdXN0b21FbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiU3dhcHBhYmxlQ29udGV4dCIsImdldEFuaW1hdGVPbk1vdW50IiwiQ3NzQ2xhc3NDb250ZXh0IiwiR2V0QmFzZUNsYXNzIiwiR2V0RW50ZXJDbGFzcyIsIkdldEV4aXRDbGFzcyIsIkdldE1lYXN1cmVDbGFzcyIsIkdldEluaXRDbGFzcyIsIkdldFRyYW5zaXRpb25DbGFzcyIsIkdldEZpbmFsaXplQ2xhc3MiLCJ1c2VDc3NDbGFzc2VzIiwiR2V0RGlyZWN0aW9uQ2xhc3MiLCJkaXJlY3Rpb24iLCJHZXRQaGFzZUNsYXNzIiwicGhhc2UiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsInVzZUxhc3ROb25OdWxsVmFsdWUiLCJsYXN0Tm9uTnVsbFZhbHVlIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJvdGhlclByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiY2hpbGRyZW5BbmltYXRlT25Nb3VudCIsImgiLCJpbmxpbmVFbGVtZW50cyIsInRyYW5zaXRpb25Qcm9wcyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImFuaW1hdGVPbk1vdW50IiwiZ2V0VGltZW91dER1cmF0aW9uIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHIiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInBhcnNlU3RhdGUiLCJuZXh0U3RhdGUiLCJ1c2VUcmFuc2l0aW9uIiwidHJhbnNpdGlvblBhcmFtZXRlcnMiLCJwcm9wc0luY29taW5nIiwic2hvdyIsIm1lYXN1cmUiLCJleGl0VmlzaWJpbGl0eSIsImR1cmF0aW9uIiwiZGVsYXlNb3VudFVudGlsU2hvd24iLCJlYXNpbmciLCJlYXNpbmdJbiIsImVhc2luZ091dCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsImdldEV4aXRWaXNpYmlsaXR5IiwiY3NzUHJvcGVydGllcyIsImNsYXNzTmFtZXMiLCJoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQiLCJnZXRTdGF0ZSIsInRpbWVvdXRIYW5kbGUiLCJ0aW1lb3V0Q2xlYXJGdW5jdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvblN0YXRlQ2hhbmdlIiwicHJldlN0YXRlIiwibmV4dERpcmVjdGlvbiIsIm5leHRQaGFzZSIsImZvcmNlUmVmbG93IiwiY3VycmVudFN0YXRlIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRQaGFzZSIsImRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuIiwiaGFzUmVuZGVyZWRDaGlsZHJlbiIsInJlbmRlckNoaWxkcmVuIiwiY2hpbGRyZW5Jc1Zub2RlIiwiZmluYWxQcm9wcyIsIm1vZGlmaWVkQ2hpbGRyZW4iLCJnbG9iYWxUaGlzIiwiX2R1bW15Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInVzZUJhc2VQcm9wc0ZhZGUiLCJmYWRlUGFyYW1ldGVycyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsInJlc3QiLCJ1c2VCYXNlUHJvcHNDbGlwIiwiY2xpcFBhcmFtZXRlcnMiLCJjbGlwTWluIiwiY2xpcE1pbkJsb2NrIiwiY2xpcE1pbklubGluZSIsImNsaXBPcmlnaW4iLCJjbGlwT3JpZ2luQmxvY2siLCJjbGlwT3JpZ2luSW5saW5lIiwiQ2xpcCIsIkNsaXBGYWRlIiwidXNlQmFzZVByb3BzQ29sbGFwc2UiLCJjb2xsYXBzZVBhcmFtZXRlcnMiLCJtaW5CbG9ja1NpemUiLCJDb2xsYXBzZSIsIkNvbGxhcHNlRmFkZSIsInVzZUJhc2VQcm9wc0ZsaXAiLCJmbGlwUGFyYW1ldGVycyIsImZsaXBBbmdsZUJsb2NrIiwiZmxpcEFuZ2xlSW5saW5lIiwiZmxpcFBlcnNwZWN0aXZlIiwiRmxpcCIsInVzZUJhc2VQcm9wc1NsaWRlIiwic2xpZGVQYXJhbWV0ZXJzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwiU2xpZGUiLCJTbGlkZUZhZGUiLCJ1c2VCYXNlUHJvcHNab29tIiwiem9vbVBhcmFtZXRlcnMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIlNsaWRlWm9vbSIsIlNsaWRlWm9vbUZhZGUiLCJab29tRmFkZSIsImhhbGZUZXh0IiwiaW5wdXQiLCJ0aW1lcyIsInN1YnN0ciIsIkRlbW8iLCJzZXRBbmltYXRlT25Nb3VudCIsIndyaXRpbmdNb2RlIiwic2V0V3JpdGluZ01vZGUiLCJzaG93MSIsInNldFNob3cxIiwic2hvdzMiLCJzZXRTaG93MyIsInJlZmxvdyIsInNldFJlZmxvdyIsInNldER1cmF0aW9uIiwidGV4dCIsInNldFRleHQiLCJmbGlja2VyIiwic2V0RmxpY2tlciIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uQ2xpY2siLCJvbklucHV0IiwiY29scyIsInJvd3MiLCJGYWRlRGVtbyIsImNhcmRTaG93IiwiY29udGVudEluZGV4IiwiU2xpZGVEZW1vIiwiWm9vbURlbW8iLCJDbGlwRGVtbyIsIkZsaXBEZW1vIiwiWm9vbVNsaWRlRGVtbyIsIkNvbGxhcHNlRGVtbyIsInNldE1pbiIsInNldE1heCIsIm9uTWluSW5wdXQiLCJvbk1heElucHV0IiwiQyIsIkNTIiwibWFrZUNoaWxkIiwic3RlcCIsIm9yaWdpblgiLCJzZXRPcmlnaW5YIiwib3JpZ2luWSIsInNldE9yaWdpblkiLCJtaW5YIiwic2V0TWluWCIsIm1pblkiLCJzZXRNaW5ZIiwid2l0aEZhZGUiLCJzZXRXaXRoRmFkZSIsIm9uT3JpZ2luWElucHV0Iiwib25PcmlnaW5ZSW5wdXQiLCJvbk1pblhJbnB1dCIsIm9uTWluWUlucHV0Iiwib25XaXRoRmFkZUlucHV0Iiwic2xpZGVYIiwic2V0U2xpZGVYIiwic2xpZGVZIiwic2V0U2xpZGVZIiwib25TbGlkZVhJbnB1dCIsIm9uU2xpZGVZSW5wdXQiLCJzaWduIiwic2V0TWluQmxvY2tTaXplIiwib25NaW5TaXplIiwiZmxpcFgiLCJzZXRGbGlwWCIsImZsaXBZIiwic2V0RmxpcFkiLCJvbkZsaXBYSW5wdXQiLCJvbkZsaXBZSW5wdXQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQmFBLElBQUFBLENBQUFBO0lDZlBDLEdDUkZDO0lBQUFBLEdBQUFBO0lDeUtBQyxHQUFBQTtJQVdBQztJQ3JMT0MsR0NGRUM7SUFBQUEsR0FBQUEsR0FBWSxFQUFsQjtJQUNNQyxHQUFZLEdBQUEsRUFBQTtJQUNaQyxHQUFxQixHQUFBLG1FQUFBO0VMT2xCQyxTQUFBQSxHQUFPQyxDQUFBQSxDQUFBQSxFQUFLQyxDQUUzQixFQUFBO0lBQUEsS0FBSyxJQUFJTixDQUFBQSxJQUFLTSxDQUFPRCxFQUFBQSxDQUFBQSxDQUFJTCxLQUFLTSxDQUFNTixDQUFBQSxDQUFBQSxDQUFBQTtJQUNwQyxPQUE2Qkss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
