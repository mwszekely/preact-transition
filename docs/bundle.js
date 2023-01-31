var _excluded = ["delayMountUntilShown", "animateOnMount", "duration", "classBase", "exitVisibility", "measure", "show", "children"],
  _excluded2 = ["classBase", "duration", "delayMountUntilShown", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "show", "animateOnMount", "exitVisibility"],
  _excluded3 = ["classBase", "duration", "delayMountUntilShown", "fadeMin", "fadeMax", "show", "animateOnMount", "exitVisibility"],
  _excluded4 = ["delayMountUntilShown", "classBase", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "clipMin", "clipMinBlock", "clipMinInline", "clipOrigin", "clipOriginBlock", "clipOriginInline", "exitVisibility"],
  _excluded5 = ["classBase", "show", "duration", "delayMountUntilShown", "minBlockSize", "animateOnMount", "exitVisibility"],
  _excluded6 = ["classBase", "show", "duration", "animateOnMount", "delayMountUntilShown", "fadeMin", "fadeMax", "exitVisibility", "minBlockSize"],
  _excluded7 = ["classBase", "duration", "slideTargetInline", "slideTargetBlock", "show", "animateOnMount", "exitVisibility", "delayMountUntilShown"],
  _excluded8 = ["classBase", "delayMountUntilShown", "duration", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "fadeMin", "fadeMax", "exitVisibility"],
  _excluded9 = ["classBase", "duration", "delayMountUntilShown", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "show", "animateOnMount", "exitVisibility"],
  _excluded10 = ["classBase", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "delayMountUntilShown", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded11 = ["classBase", "duration", "delayMountUntilShown", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded12 = ["classBase", "duration", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "delayMountUntilShown", "fadeMax", "fadeMin", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded13 = ["classBase", "duration", "delayMountUntilShown", "flipAngleInline", "flipAngleBlock", "perspective", "show", "animateOnMount", "exitVisibility"],
  _excluded14 = ["children", "classBase", "inline"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   */
  function forwardElementRef(Component) {
    var ForwardedComponent = k(Component);
    return ForwardedComponent;
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
    var valueRef = _(Unset$1);
    var reasonRef = _(Unset$1);
    var warningRef = _(false);
    var dependencyToCompareAgainst = _(Unset$1);
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
      if (valueRef.current === Unset$1 && getInitialValue != undefined) {
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
      if (valueRef.current === Unset$1) tryEnsureValue();
      return valueRef.current === Unset$1 ? undefined : valueRef.current;
    }, []);
    s(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    var setValue = T$1((arg, reason) => {
      // Regardless of anything else, figure out what our next value is about to be.
      var nextValue = arg instanceof Function ? arg(valueRef.current === Unset$1 ? undefined : valueRef.current) : arg;
      if (dependencyToCompareAgainst.current === Unset$1 && nextValue !== valueRef.current) {
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
              cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(nextDep, prevDep === Unset$1 ? undefined : prevDep, nextReason)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
              valueRef.current = nextDep;
            } finally {
              // Allow the user to normally call getValue again
              warningRef.current = false;
            }
          }
          // We've finished with everything, so mark us as being on a clean slate again.
          dependencyToCompareAgainst.current = Unset$1;
        });
      }
      // Update the value immediately.
      // This will be checked against prevDep to see if we should actually call onChange
      valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
  }
  var Unset$1 = Symbol();
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
  var Unset = Symbol("unset");
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
    var ref = _(Unset);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return T$1(() => {
      if (ref.current === Unset) {
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
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      }
    } = args;
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

  /**
   * Slightly enhanced version of `useState` that includes a getter that remains constant
   * (i.e. you can use it in `useEffect` and friends without it being a dependency).
   *
   * @param initialState
   * @returns
   */
  function useState(initialState) {
    // We keep both, but overrride the `setState` functionality
    var [state, setStateP] = p(initialState);
    var ref = _(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    var setState = T$1(value => {
      if (typeof value === "function") {
        var callback = value;
        setStateP(prevValue => {
          var nextValue = callback(prevValue);
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        ref.current = value;
        setStateP(value);
      }
    }, []);
    var getState = () => {
      return ref.current;
    };
    console.assert(ref.current === state || typeof state === "number" && isNaN(state));
    return [state, setState, getState];
  }

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
  B$2(null);
  var SwappableContext = B$2({
    getAnimateOnMount: () => false
  });
  function defaultClassBase(given) {
    return given !== null && given !== void 0 ? given : "ptl";
  }
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
  function useTransition(_ref) {
    var _a2, _m;
    var {
      show: v,
      animateOnMount: a,
      measure: m,
      classBase,
      exitVisibility: e,
      duration: d
    } = _ref;
    var [isVisible, setIsVisible] = useState(false);
    var {
      getAnimateOnMount
    } = q(SwappableContext);
    classBase || (classBase = defaultClassBase(classBase));
    e || (e = "hidden");
    (_a2 = a) !== null && _a2 !== void 0 ? _a2 : a = getAnimateOnMount();
    (_m = m) !== null && _m !== void 0 ? _m : m = false;
    var getMeasure = useStableGetter(m);
    //const getDurationOverride = useStableGetter(d);
    useEnsureStability("useTransition", classBase);
    var getExitVisibility = useStableGetter(e);
    var {
      refElementReturn: {
        getElement,
        propsStable
      }
    } = useRefElement({
      refElementParameters: {}
    });
    var cssProperties = _({});
    var classNames = _(new Set([// This is removed during useLayoutEffect on the first render
    // (at least once `show` is non-null)
    "".concat(classBase, "-pending")]));
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
    // The very first time 
    var hasMounted = _(false);
    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    var updateClasses = T$1((element, direction, phase) => {
      if (element == null) return;
      var exitVisibility = getExitVisibility();
      var allClassesToRemove = ["".concat(classBase, "-enter"), "".concat(classBase, "-exit"), "".concat(classBase, "-enter-init"), "".concat(classBase, "-enter-transition"), "".concat(classBase, "-enter-finalize"), "".concat(classBase, "-exit-init"), "".concat(classBase, "-exit-transition"), "".concat(classBase, "-exit-finalize"), "".concat(classBase, "-ev-", "inert"), "".concat(classBase, "-ev-", "removed"), "".concat(classBase, "-ev-", "hidden"), "".concat(classBase, "-ev-", "visible"), "".concat(classBase, "-pending")];
      var allClassesToAdd = ["".concat(classBase), "".concat(classBase, "-").concat(direction), "".concat(classBase, "-").concat(direction, "-").concat(phase), "".concat(classBase, "-ev-").concat(exitVisibility)];
      //(measure ? allClassesToAdd : allClassesToRemove).push(`${classBase}-measure`);
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
     * Updates all "measure" variables (or removes them)
     */
    var updateSizeProperties = T$1((element, nextSize) => {
      updateSizeProperty(element, "--".concat(classBase, "-measure-top"), nextSize === null || nextSize === void 0 ? void 0 : nextSize.top);
      updateSizeProperty(element, "--".concat(classBase, "-measure-left"), nextSize === null || nextSize === void 0 ? void 0 : nextSize.left);
      updateSizeProperty(element, "--".concat(classBase, "-measure-width"), nextSize === null || nextSize === void 0 ? void 0 : nextSize.width);
      updateSizeProperty(element, "--".concat(classBase, "-measure-height"), nextSize === null || nextSize === void 0 ? void 0 : nextSize.height);
    }, []);
    /**
     * Adds the "measure" variupdateClassesables to the element if requested.
     */
    var measureElementAndUpdateProperties = T$1((element, measure) => {
      if (element) {
        var size = null;
        if (measure) {
          size = element.getBoundingClientRect();
        }
        updateSizeProperties(element, size);
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
      setIsVisible(nextDirection == "enter" || nextDirection == "exit" && nextPhase != "finalize");
      var element = getElement();
      var measure = getMeasure();
      //const durationOverride = getDurationOverride();
      /*if (durationOverride != null) {
          cssProperties.current[`--${classBase}-duration`] = durationOverride + "ms";
          element?.style.setProperty(`--${classBase}-duration`, `${durationOverride}ms`);
      }*/
      if (measure && element && nextPhase == "init") {
        // We actually need all these reflows, either to make things like block-size work, or to make things like opacity work.
        element.classList.add("".concat(classBase, "-measure"));
        updateClasses(element, nextDirection, "finalize");
        forceReflow(element); // By measuring the element below we implicitly reflow, but this is a reminder that it happens.
        measureElementAndUpdateProperties(element, measure);
        updateClasses(element, nextDirection, nextPhase);
        forceReflow(element);
        element.classList.remove("".concat(classBase, "-measure"));
        forceReflow(element);
      } else {
        updateClasses(element, nextDirection, nextPhase);
        // TODO: Unnecessary reflow?
        // It might only be necessary when changing from -init to -transition
        if (element) forceReflow(element);
      }
      var exitVisibility = getExitVisibility();
      if (exitVisibility) {
        var inert = exitVisibility == "inert" && nextDirection == "exit" ? true : undefined;
        if (inert) otherProps.current.inert = true;else delete otherProps.current["inert"];
        if (element) element.inert = inert || false;
      }
      switch (nextPhase) {
        case "init":
          {
            var _timeoutClearFunction2;
            if (timeoutHandle.current >= 0) (_timeoutClearFunction2 = timeoutClearFunction.current) === null || _timeoutClearFunction2 === void 0 ? void 0 : _timeoutClearFunction2.call(timeoutClearFunction, timeoutHandle.current);
            timeoutHandle.current = requestAnimationFrame(() => {
              setState("".concat(nextDirection, "-transition"));
            });
            timeoutClearFunction.current = f => cancelAnimationFrame(f);
            break;
          }
        case "transition":
          {
            var _timeoutClearFunction3;
            if (timeoutHandle.current >= 0) (_timeoutClearFunction3 = timeoutClearFunction.current) === null || _timeoutClearFunction3 === void 0 ? void 0 : _timeoutClearFunction3.call(timeoutClearFunction, timeoutHandle.current);
            timeoutHandle.current = setTimeout(() => {
              handleTransitionFinished();
            }, getTimeoutDuration(element) * 1.5);
            timeoutClearFunction.current = f => clearTimeout(f);
            break;
          }
        case "finalize":
          {
            // Nothing to do or schedule or anything -- we just update our classes and we're done.
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
      if (v == null) return;
      // `show` is true or false (as opposed to null).
      // If this is our first time seeing a non-null value, 
      // then remove the class that indicates the no transition logic has started.
      // (Because this is useLayoutEffect, it will take effect before the class's effects are painted)
      if (!hasMounted.current) {
        classNames.current.delete("".concat(classBase, "-pending"));
        var element = getElement();
        if (element) {
          element.classList.remove("".concat(classBase, "-pending"));
          // Because the pending class often makes this hidden or d-none, 
          // force a reflow juuust to be safe.
          forceReflow(element);
        }
      }
      var currentState = getState();
      var nextPhase = "init";
      if (currentState) {
        var [currentDirection, currentPhase] = parseState(currentState);
        if (currentPhase != "finalize") nextPhase = "transition";
      }
      // Note: the setState change handler runs immediately with no debounce.
      if (v) {
        if (hasMounted.current || a) setState("enter-".concat(nextPhase));else setState("enter-finalize");
      } else {
        if (hasMounted.current || a) setState("exit-".concat(nextPhase));else setState("exit-finalize");
      }
      hasMounted.current = true;
    }, [v]);
    if (d != null) cssProperties.current["--".concat(classBase, "-duration")] = d + "ms";else delete cssProperties.current["--".concat(classBase, "-duration")];
    return {
      isVisible,
      props: useMergedProps(propsStable, _objectSpread({
        className: [...classNames.current, "".concat(classBase, "-ev-").concat(e), "".concat(classBase, "-inline-direction-", "ltr"), "".concat(classBase, "-block-direction-", "ttb")].join(" "),
        style: cssProperties.current
      }, otherProps.current))
    };
  }
  var IsVisibleContext = B$2(false);
  var Transitionable = R(forwardElementRef(function Transitionable(_ref2, ref) {
    var {
        delayMountUntilShown,
        animateOnMount,
        duration,
        classBase,
        exitVisibility,
        measure,
        show,
        children
      } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);
    var {
      props: transitionProps,
      isVisible
    } = useTransition({
      animateOnMount,
      classBase,
      duration,
      exitVisibility,
      measure,
      show
    });
    var childrenIsVnode = children && children.type && children.props;
    var finalProps = useMergedProps(props, transitionProps, _objectSpread(_objectSpread({}, props), {}, {
      ref
    }), childrenIsVnode ? _objectSpread({
      ref: children.ref
    }, children.props) : {});
    // No matter what delayMountUntilShown is,
    // once we've rendered our children once, 
    // ensure that we don't unmount them again and waste all that work.
    // (If you really need this you can just unmount the entire transition itself)
    var renderChildren = show || !delayMountUntilShown;
    var hasRenderedChildren = _(false);
    h(() => {
      if (renderChildren) hasRenderedChildren.current || (hasRenderedChildren.current = true);
    }, [hasRenderedChildren.current ? false : renderChildren]);
    if (!renderChildren && !hasRenderedChildren.current) return null;
    var context = _({
      getAnimateOnMount: () => false
    }).current;
    var ret;
    if (childrenIsVnode) {
      ret = h$1(SwappableContext.Provider, {
        value: context
      }, q$1(children, finalProps));
    } else {
      ret = h$1(SwappableContext.Provider, {
        value: context
      }, h$1("span", _objectSpread({}, finalProps), children));
    }
    return h$1(IsVisibleContext.Provider, {
      value: isVisible
    }, ret);
  }));
  function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    e.getBoundingClientRect();
    e.style.opacity;
    e.style.transform;
    return e;
  }
  function createClipProps(_ref3) {
    var _ref4, _ref5, _ref6, _ref7;
    var {
      classBase,
      clipMin,
      clipMinBlock,
      clipMinInline,
      clipOrigin,
      clipOriginBlock,
      clipOriginInline
    } = _ref3;
    classBase = defaultClassBase(classBase);
    return {
      className: clsx("".concat(classBase, "-clip")),
      style: {
        ["--".concat(classBase, "-clip-origin-inline")]: (_ref4 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref4 !== void 0 ? _ref4 : 0.5,
        ["--".concat(classBase, "-clip-origin-block")]: (_ref5 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref5 !== void 0 ? _ref5 : 0,
        ["--".concat(classBase, "-clip-min-inline")]: (_ref6 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref6 !== void 0 ? _ref6 : 1,
        ["--".concat(classBase, "-clip-min-block")]: (_ref7 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref7 !== void 0 ? _ref7 : 0
      }
    };
  }
  var Clip = R(forwardElementRef(function Clip(_ref8, ref) {
    var {
        classBase,
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
        exitVisibility
      } = _ref8,
      rest = _objectWithoutProperties(_ref8, _excluded2);
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createClipProps({
      classBase,
      clipMin,
      clipMinBlock,
      clipMinInline,
      clipOrigin,
      clipOriginBlock,
      clipOriginInline
    }))));
  }));

  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function createFadeProps(_ref9) {
    var {
      classBase,
      fadeMin,
      fadeMax
    } = _ref9;
    classBase = defaultClassBase(classBase);
    return {
      className: "".concat(classBase, "-fade"),
      style: {
        ["--".concat(classBase, "-fade-min")]: fadeMin !== null && fadeMin !== void 0 ? fadeMin : 0,
        ["--".concat(classBase, "-fade-max")]: fadeMax !== null && fadeMax !== void 0 ? fadeMax : 1
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
  var Fade = R(forwardElementRef(function Fade(_ref10, ref) {
    var {
        classBase,
        duration,
        delayMountUntilShown,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        exitVisibility
      } = _ref10,
      rest = _objectWithoutProperties(_ref10, _excluded3);
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createFadeProps({
      classBase,
      fadeMax,
      fadeMin
    }))));
  }));
  var ClipFade = R(forwardElementRef(function ClipFade(_ref11, ref) {
    var {
        delayMountUntilShown,
        classBase,
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
        exitVisibility
      } = _ref11,
      rest = _objectWithoutProperties(_ref11, _excluded4);
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createClipProps({
      classBase,
      clipMin,
      clipMinBlock,
      clipMinInline,
      clipOrigin,
      clipOriginBlock,
      clipOriginInline
    }), createFadeProps({
      classBase,
      fadeMax,
      fadeMin
    }))));
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */
  function createCollapseProps(_ref12) {
    var {
      classBase,
      minBlockSize
    } = _ref12;
    classBase = defaultClassBase(classBase);
    return {
      className: "".concat(classBase, "-collapse"),
      style: {
        ["--".concat(classBase, "-collapse-min-block")]: minBlockSize !== null && minBlockSize !== void 0 ? minBlockSize : 0
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
  var Collapse = R(forwardElementRef(function Collapse(_ref13, ref) {
    var {
        classBase,
        show,
        duration,
        delayMountUntilShown,
        minBlockSize,
        animateOnMount,
        exitVisibility
      } = _ref13,
      rest = _objectWithoutProperties(_ref13, _excluded5);
    return h$1(Transitionable, _objectSpread({
      measure: true,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createCollapseProps({
      classBase,
      minBlockSize
    }))));
  }));
  var CollapseFade = R(forwardElementRef(function CollapseFade(_ref14, ref) {
    var {
        classBase,
        show,
        duration,
        animateOnMount,
        delayMountUntilShown,
        fadeMin,
        fadeMax,
        exitVisibility,
        minBlockSize
      } = _ref14,
      rest = _objectWithoutProperties(_ref14, _excluded6);
    return h$1(Transitionable, _objectSpread({
      measure: true,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }), createCollapseProps({
      classBase,
      minBlockSize
    }))));
  }));

  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function createSlideProps(_ref15) {
    var {
      classBase,
      slideTargetInline,
      slideTargetBlock
    } = _ref15;
    classBase = defaultClassBase(classBase);
    return {
      className: "".concat(classBase, "-slide"),
      style: {
        ["--".concat(classBase, "-slide-target-inline")]: "".concat(slideTargetInline !== null && slideTargetInline !== void 0 ? slideTargetInline : 0),
        ["--".concat(classBase, "-slide-target-block")]: "".concat(slideTargetBlock !== null && slideTargetBlock !== void 0 ? slideTargetBlock : 0)
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
  var Slide = R(forwardElementRef(function Slide(_ref16, ref) {
    var {
        classBase,
        duration,
        slideTargetInline,
        slideTargetBlock,
        show,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown
      } = _ref16,
      rest = _objectWithoutProperties(_ref16, _excluded7);
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createSlideProps({
      classBase,
      slideTargetBlock,
      slideTargetInline
    }))));
  }));
  // TODO: This logic was required for slides at one point to ensure that slideTargetInline={index - currentIndex} works right,
  // but it works without it now, so, like, we're good then? Which I'm okay with because I can't explain the logic here honestly.
  /*export function useSlideThing({ targetBlock, targetInline }: { targetInline?: number | null, targetBlock?: number | null }): { targetInline: number | undefined, targetBlock: number | undefined } {
       const lastValidTargetInline = useRef(targetInline ?? 1);
      const lastValidTargetBlock = useRef(targetBlock ?? 0);
       
      useEffect(() => { if (targetInline) lastValidTargetInline.current = targetInline; }, [targetInline]);
      useEffect(() => { if (targetBlock) lastValidTargetBlock.current = targetBlock; }, [targetBlock]);
       if (targetInline == 0)
          targetInline = lastValidTargetInline.current;
      if (targetBlock == 0)
          targetBlock = lastValidTargetBlock.current;
       targetInline ??= undefined;
      targetBlock ??= undefined;
      return { targetInline, targetBlock };
  }*/

  var SlideFade = R(forwardElementRef(function SlideFade(_ref17, ref) {
    var {
        classBase,
        delayMountUntilShown,
        duration,
        slideTargetBlock,
        slideTargetInline,
        show,
        animateOnMount,
        fadeMin,
        fadeMax,
        exitVisibility
      } = _ref17,
      rest = _objectWithoutProperties(_ref17, _excluded8);
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }), createSlideProps({
      classBase,
      slideTargetBlock,
      slideTargetInline
    }))));
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function createZoomProps(_ref18) {
    var _ref19, _ref20, _ref21, _ref22;
    var {
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock
    } = _ref18;
    classBase = defaultClassBase(classBase);
    return {
      className: "".concat(classBase, "-zoom"),
      style: {
        ["--".concat(classBase, "-zoom-origin-inline")]: "".concat((_ref19 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref19 !== void 0 ? _ref19 : 0.5),
        ["--".concat(classBase, "-zoom-origin-block")]: "".concat((_ref20 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref20 !== void 0 ? _ref20 : 0.5),
        ["--".concat(classBase, "-zoom-min-inline")]: "".concat((_ref21 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref21 !== void 0 ? _ref21 : 0),
        ["--".concat(classBase, "-zoom-min-block")]: "".concat((_ref22 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref22 !== void 0 ? _ref22 : 0)
      }
    };
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  var Zoom = R(forwardElementRef(function Zoom(_ref23, ref) {
    var {
        classBase,
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
        exitVisibility
      } = _ref23,
      rest = _objectWithoutProperties(_ref23, _excluded9);
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(createZoomProps({
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock
    }), _objectSpread(_objectSpread({}, rest), {}, {
      ref
    }))));
  }));
  var ZoomFade = R(forwardElementRef(function ZoomFade(_ref24, ref) {
    var {
        classBase,
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
        exitVisibility
      } = _ref24,
      rest = _objectWithoutProperties(_ref24, _excluded10);
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createZoomProps({
      classBase,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline
    }), createFadeProps({
      classBase,
      fadeMax,
      fadeMin
    }))));
  }));
  var SlideZoom = R(forwardElementRef(function SlideZoom(_ref25, ref) {
    var {
        classBase,
        duration,
        delayMountUntilShown,
        slideTargetBlock,
        slideTargetInline,
        show,
        animateOnMount,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        exitVisibility
      } = _ref25,
      rest = _objectWithoutProperties(_ref25, _excluded11);
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createZoomProps({
      classBase,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline
    }), createSlideProps({
      classBase,
      slideTargetBlock,
      slideTargetInline
    }))));
  }));
  var SlideZoomFade = R(forwardElementRef(function SlideZoomFade(_ref26, ref) {
    var {
        classBase,
        duration,
        slideTargetBlock,
        slideTargetInline,
        show,
        animateOnMount,
        delayMountUntilShown,
        fadeMax,
        fadeMin,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        exitVisibility
      } = _ref26,
      rest = _objectWithoutProperties(_ref26, _excluded12);
    //  ({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(_objectSpread({
      ref
    }, rest), createZoomProps({
      classBase,
      zoomMin,
      zoomMinBlock,
      zoomMinInline,
      zoomOrigin,
      zoomOriginBlock,
      zoomOriginInline
    }), createSlideProps({
      classBase,
      slideTargetBlock,
      slideTargetInline
    }), createFadeProps({
      classBase,
      fadeMax,
      fadeMin
    }))));
  }));

  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function createFlipProps(_ref27) {
    var {
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective
    } = _ref27;
    classBase = defaultClassBase(classBase);
    return {
      className: "".concat(classBase, "-flip"),
      style: {
        ["--".concat(classBase, "-flip-angle-inline")]: "".concat(flipAngleInline !== null && flipAngleInline !== void 0 ? flipAngleInline : 0, "deg"),
        ["--".concat(classBase, "-flip-angle-block")]: "".concat(flipAngleBlock !== null && flipAngleBlock !== void 0 ? flipAngleBlock : 0, "deg"),
        ["--".concat(classBase, "-perspective")]: "".concat(perspective !== null && perspective !== void 0 ? perspective : 800, "px")
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
  var Flip = R(forwardElementRef(function Flip(_ref28, ref) {
    var _flipAngleInline, _flipAngleBlock;
    var {
        classBase,
        duration,
        delayMountUntilShown,
        flipAngleInline,
        flipAngleBlock,
        perspective,
        show,
        animateOnMount,
        exitVisibility
      } = _ref28,
      rest = _objectWithoutProperties(_ref28, _excluded13);
    var lastValidTargetInline = _((_flipAngleInline = flipAngleInline) !== null && _flipAngleInline !== void 0 ? _flipAngleInline : 90);
    var lastValidTargetBlock = _((_flipAngleBlock = flipAngleBlock) !== null && _flipAngleBlock !== void 0 ? _flipAngleBlock : 0);
    h(() => {
      if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
    }, [flipAngleInline]);
    h(() => {
      if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
    }, [flipAngleBlock]);
    if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
    if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
    return h$1(Transitionable, _objectSpread({
      measure: false,
      show: show,
      duration: duration,
      animateOnMount: animateOnMount,
      classBase: classBase,
      exitVisibility: exitVisibility,
      delayMountUntilShown: delayMountUntilShown
    }, useMergedProps(createFlipProps({
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective
    }), _objectSpread(_objectSpread({}, rest), {}, {
      ref
    }))));
  }));

  /**
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateSwappableProps(_ref29, otherProps) {
    var {
      inline,
      classBase
    } = _ref29;
    classBase = defaultClassBase(classBase);
    return useMergedProps({
      className: clsx("".concat(classBase, "-swap-container"), inline && "".concat(classBase, "-swap-container-inline"))
    }, otherProps);
  }
  /**
   * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
   *
   * You must manage each child `<Transitionable>` component's `show` prop -- this component *does not* manage any sort of state in that regard.
   *
   * Like `<Transitionable>`, *this wraps an HTMLElement (or other ref-forwarding component)*. This will be your container that holds each `<Transitionable>` (or component that uses it). Strictly speaking it could be anything, not a `<Transitionable>`, but if it doesnt't transition out then it's just going to be hanging around 100% of the time.
   *
   * Long way of saying, if you get a cryptic error with this component, make sure it has a single `<div>` child or something.
   * @param param0
   * @returns
   */
  var Swappable = R(forwardElementRef(function Swappable(_ref30, ref) {
    var _inline;
    var {
        children: c,
        classBase,
        inline
      } = _ref30,
      p = _objectWithoutProperties(_ref30, _excluded14);
    var children = c;
    console.assert(!!children.type);
    (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    var transitionProps = useCreateSwappableProps({
      classBase,
      inline
    }, _objectSpread(_objectSpread({}, p), {}, {
      ref
    }));
    var mergedWithChildren = useMergedProps(transitionProps, children.props);
    var animateOnMount = _(false);
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
        ["--".concat(defaultClassBase(null), "-duration")]: "".concat(duration, "ms")
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
    }), h$1(CollapseDemo, {
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
    }), h$1(FlipDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    })));
  }
  function FadeDemo(_ref31) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref31;
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
  function ClipDemo(_ref32) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref32;
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
  function ZoomSlideDemo(_ref33) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref33;
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
      slideTargetInline: slideX * Math.sign(i - contentIndex),
      slideTargetBlock: slideY * Math.sign(i - contentIndex),
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
  function ZoomDemo(_ref34) {
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
  function SlideDemo(_ref35) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref35;
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
      slideTargetInline: slideX * Math.sign(i - contentIndex),
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
  function CollapseDemo(_ref36) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref36;
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
    })), h$1("div", null, "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."), h$1("div", null, "In general, only use this component if you ", h$1("em", null, "specifically"), " need its reflow transitioning properties, because it's very taxing on, well, ", h$1("em", null, "most"), " devices, unless you take other precautions. If you want a \"disappear in place without zooming out\", consider a Clip effect.")), cardShow != "unmounted" && h$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      minBlockSize: minBlockSize
    }, h$1("div", null, h$1(Swappable, null, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2))))), h$1("code", null, h$1("pre", null, "<".concat(CS, " show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(minBlockSize && minBlockSize != "0px" ? " minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  {/* These cards have padding, \n      and height doesn't include that, \n      but a wrapper's would */}\n  <div>\n    <Swappable>\n      <div className=\"card\">\n        <").concat(CS, " \n          show={").concat(contentIndex.toString(), " == 0}").concat(minBlockSize && minBlockSize != "0px" ? " \n          minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " \n          exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n          <div className=\"card-contents\">\n             {text}\n          </div>\n        </").concat(CS, ">\n      </div>\n    </Swappable>\n  </div>\n</").concat(CS, ">\n<").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n<").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />")))));
  }
  function FlipDemo(_ref37) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref37;
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
      flipAngleInline: flipX * Math.sign(i - contentIndex),
      flipAngleBlock: flipY * Math.sign(i - contentIndex)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvUHVyZUNvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvbWVtby5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvZm9yd2FyZFJlZi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvQ2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3N1c3BlbnNlLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9zdXNwZW5zZS1saXN0LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9yZW5kZXIuanMiLCIuLi9zcmMvZm9yd2FyZC1lbGVtZW50LXJlZi50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZS50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODJhNTJjMzg4OGQ3NTMzYTJlYmE5MmM4MzIyYjViYTE4NGZiNTJjZV9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXN0YWJsZS1nZXR0ZXIudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODJhNTJjMzg4OGQ3NTMzYTJlYmE5MmM4MzIyYjViYTE4NGZiNTJjZV9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vY2xzeEAxLjIuMS9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDgyYTUyYzM4ODhkNzUzM2EyZWJhOTJjODMyMmI1YmExODRmYjUyY2VfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXJlZnMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODJhNTJjMzg4OGQ3NTMzYTJlYmE5MmM4MzIyYjViYTE4NGZiNTJjZV9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODJhNTJjMzg4OGQ3NTMzYTJlYmE5MmM4MzIyYjViYTE4NGZiNTJjZV9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtcmVmLWVsZW1lbnQudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Jsb2NraW5nLWVsZW1lbnRzQDAuMS4xL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9zcmMvYmxvY2tpbmctZWxlbWVudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4MmE1MmMzODg4ZDc1MzNhMmViYTkyYzgzMjJiNWJhMTg0ZmI1MmNlX3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19ub2RlVXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzVHlwZWRBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDgyYTUyYzM4ODhkNzUzM2EyZWJhOTJjODMyMmI1YmExODRmYjUyY2VfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3RpbWluZy91c2UtYW5pbWF0aW9uLWZyYW1lLnRzeCIsIi4uL3NyYy9jb250ZXh0LnRzeCIsIi4uL3NyYy90cmFuc2l0aW9uYWJsZS50c3giLCIuLi9zcmMvY2xpcC50c3giLCIuLi9zcmMvZmFkZS50c3giLCIuLi9zcmMvY2xpcC1mYWRlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS50c3giLCIuLi9zcmMvY29sbGFwc2UtZmFkZS50c3giLCIuLi9zcmMvc2xpZGUudHN4IiwiLi4vc3JjL3NsaWRlLWZhZGUudHN4IiwiLi4vc3JjL3pvb20udHN4IiwiLi4vc3JjL3pvb20tZmFkZS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS1mYWRlLnRzeCIsIi4uL3NyYy9mbGlwLnRzeCIsIi4uL3NyYy9zd2FwcGFibGUudHN4IiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWlnbm9yZSBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gbnVsbCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBudWxsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0Ly8gX25leHREb20gbXVzdCBiZSBpbml0aWFsaXplZCB0byB1bmRlZmluZWQgYi9jIGl0IHdpbGwgZXZlbnR1YWxseVxuXHRcdC8vIGJlIHNldCB0byBkb20ubmV4dFNpYmxpbmcgd2hpY2ggY2FuIHJldHVybiBgbnVsbGAgYW5kIGl0IGlzIGltcG9ydGFudFxuXHRcdC8vIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhbiB1bmluaXRpYWxpemVkIF9uZXh0RG9tIGFuZFxuXHRcdC8vIGEgX25leHREb20gdGhhdCBoYXMgYmVlbiBzZXQgdG8gYG51bGxgXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IG51bGwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBudWxsICYmIG9wdGlvbnMudm5vZGUgIT0gbnVsbCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IG51bGwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkaWZmLCBjb21taXRSb290IH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBudWxsICYmIHRoaXMuX25leHRTdGF0ZSAhPT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBudWxsKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gbnVsbCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX3BhcmVudC5fY2hpbGRyZW4uaW5kZXhPZih2bm9kZSkgKyAxKVxuXHRcdFx0OiBudWxsO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IG51bGwgJiYgc2libGluZy5fZG9tICE9IG51bGwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGxldCB2bm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0b2xkRG9tID0gdm5vZGUuX2RvbSxcblx0XHRwYXJlbnREb20gPSBjb21wb25lbnQuX3BhcmVudERvbTtcblxuXHRpZiAocGFyZW50RG9tKSB7XG5cdFx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdFx0Y29uc3Qgb2xkVk5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRvbGRWTm9kZS5fb3JpZ2luYWwgPSB2bm9kZS5fb3JpZ2luYWwgKyAxO1xuXG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdHZub2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nICE9IG51bGwgPyBbb2xkRG9tXSA6IG51bGwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBudWxsID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBvbGREb20sXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nXG5cdFx0KTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG5cblx0XHRpZiAodm5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gbnVsbCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gbnVsbDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gdm5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYyBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGMpIHtcblx0aWYgKFxuXHRcdCghYy5fZGlydHkgJiZcblx0XHRcdChjLl9kaXJ0eSA9IHRydWUpICYmXG5cdFx0XHRyZXJlbmRlclF1ZXVlLnB1c2goYykgJiZcblx0XHRcdCFwcm9jZXNzLl9yZXJlbmRlckNvdW50KyspIHx8XG5cdFx0cHJldkRlYm91bmNlICE9PSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBzZXRUaW1lb3V0KShwcm9jZXNzKTtcblx0fVxufVxuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdGxldCBxdWV1ZTtcblx0d2hpbGUgKChwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gcmVyZW5kZXJRdWV1ZS5sZW5ndGgpKSB7XG5cdFx0cXVldWUgPSByZXJlbmRlclF1ZXVlLnNvcnQoKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aCk7XG5cdFx0cmVyZW5kZXJRdWV1ZSA9IFtdO1xuXHRcdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHRcdC8vIHByb2Nlc3MoKSBjYWxscyBmcm9tIGdldHRpbmcgc2NoZWR1bGVkIHdoaWxlIGBxdWV1ZWAgaXMgc3RpbGwgYmVpbmcgY29uc3VtZWQuXG5cdFx0cXVldWUuc29tZShjID0+IHtcblx0XHRcdGlmIChjLl9kaXJ0eSkgcmVuZGVyQ29tcG9uZW50KGMpO1xuXHRcdH0pO1xuXHR9XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjb250ZXh0SWQpIHtcblx0Y29udGV4dElkID0gJ19fY0MnICsgaSsrO1xuXG5cdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0X2lkOiBjb250ZXh0SWQsXG5cdFx0X2RlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0Q29uc3VtZXIocHJvcHMsIGNvbnRleHRWYWx1ZSkge1xuXHRcdFx0Ly8gcmV0dXJuIHByb3BzLmNoaWxkcmVuKFxuXHRcdFx0Ly8gXHRjb250ZXh0W2NvbnRleHRJZF0gPyBjb250ZXh0W2NvbnRleHRJZF0ucHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWVcblx0XHRcdC8vICk7XG5cdFx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0XHR9LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0UHJvdmlkZXIocHJvcHMpIHtcblx0XHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdFx0bGV0IHN1YnMgPSBbXTtcblx0XHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0XHRjdHhbY29udGV4dElkXSA9IHRoaXM7XG5cblx0XHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihfcHJvcHMpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvLyBJIHRoaW5rIHRoZSBmb3JjZWQgdmFsdWUgcHJvcGFnYXRpb24gaGVyZSB3YXMgb25seSBuZWVkZWQgd2hlbiBgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ2Agd2FzIGJlaW5nIGJ5cGFzc2VkOlxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9jb21taXQvNGQzMzlmYjgwM2JlYTA5ZTlmMTk4YWJmMzhjYTFiZjhlYTRiNzc3MSNkaWZmLTU0NjgyY2UzODA5MzVhNzE3ZTQxYjhiZmM1NDczN2Y2UjM1OFxuXHRcdFx0XHRcdFx0Ly8gSW4gdGhvc2UgY2FzZXMgdGhvdWdoLCBldmVuIHdpdGggdGhlIHZhbHVlIGNvcnJlY3RlZCwgd2UncmUgZG91YmxlLXJlbmRlcmluZyBhbGwgbm9kZXMuXG5cdFx0XHRcdFx0XHQvLyBJdCBtaWdodCBiZSBiZXR0ZXIgdG8ganVzdCB0ZWxsIGZvbGtzIG5vdCB0byB1c2UgZm9yY2Utc3luYyBtb2RlLlxuXHRcdFx0XHRcdFx0Ly8gQ3VycmVudGx5LCB1c2luZyBgdXNlQ29udGV4dCgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudCB3aWxsIG92ZXJ3cml0ZSBpdHMgYHRoaXMuY29udGV4dGAgdmFsdWUuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dCA9IF9wcm9wcy52YWx1ZTtcblx0XHRcdFx0XHRcdC8vIFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdC8vIH0pO1xuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dFtjb250ZXh0SWRdID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0XHRzdWJzLnNvbWUoZW5xdWV1ZVJlbmRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdFx0c3Vicy5wdXNoKGMpO1xuXHRcdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJzLnNwbGljZShzdWJzLmluZGV4T2YoYyksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHdoZW4gaXRcblx0Ly8gZW5jb3VudGVycyBhIFByb3ZpZGVyLiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBzdXBwb3J0XG5cdC8vIHNldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiB0aGUgY29udGV4dCBvYmplY3QgaW5zdGVhZFxuXHQvLyBvZiBvbiB0aGUgY29tcG9uZW50IGl0c2VsZi4gU2VlOlxuXHQvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sI2NvbnRleHRkaXNwbGF5bmFtZVxuXG5cdHJldHVybiAoY29udGV4dC5Qcm92aWRlci5fY29udGV4dFJlZiA9IGNvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPSBjb250ZXh0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiwgRU1QVFlfQVJSIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlXG4gKiBjaGlsZHJlbiBhcmUgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgaSwgaiwgb2xkVk5vZGUsIGNoaWxkVk5vZGUsIG5ld0RvbSwgZmlyc3RDaGlsZERvbSwgcmVmcztcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCByZW5kZXJSZXN1bHQubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyBJZiB0aGlzIG5ld1ZOb2RlIGlzIGJlaW5nIHJldXNlZCAoZS5nLiA8ZGl2PntyZXVzZX17cmV1c2V9PC9kaXY+KSBpbiB0aGUgc2FtZSBkaWZmLFxuXHRcdC8vIG9yIHdlIGFyZSByZW5kZXJpbmcgYSBjb21wb25lbnQgKGUuZy4gc2V0U3RhdGUpIGNvcHkgdGhlIG9sZFZOb2RlcyBzbyBpdCBjYW4gaGF2ZVxuXHRcdC8vIGl0J3Mgb3duIERPTSAmIGV0Yy4gcG9pbnRlcnNcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnbnVtYmVyJyB8fFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2JpZ2ludCdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHQvLyBUZXJzZXIgcmVtb3ZlcyB0aGUgYGNvbnRpbnVlYCBoZXJlIGFuZCB3cmFwcyB0aGUgbG9vcCBib2R5XG5cdFx0Ly8gaW4gYSBgaWYgKGNoaWxkVk5vZGUpIHsgLi4uIH0gY29uZGl0aW9uXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UgZmluZCBhIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBpbiBvbGRDaGlsZHJlbi5cblx0XHQvLyBJZiBmb3VuZCwgZGVsZXRlIHRoZSBhcnJheSBpdGVtIGJ5IHNldHRpbmcgdG8gYHVuZGVmaW5lZGAuXG5cdFx0Ly8gV2UgdXNlIGB1bmRlZmluZWRgLCBhcyBgbnVsbGAgaXMgcmVzZXJ2ZWQgZm9yIGVtcHR5IHBsYWNlaG9sZGVyc1xuXHRcdC8vIChob2xlcykuXG5cdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblxuXHRcdGlmIChcblx0XHRcdG9sZFZOb2RlID09PSBudWxsIHx8XG5cdFx0XHQob2xkVk5vZGUgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSA9PT0gb2xkVk5vZGUudHlwZSlcblx0XHQpIHtcblx0XHRcdG9sZENoaWxkcmVuW2ldID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFaXRoZXIgb2xkVk5vZGUgPT09IHVuZGVmaW5lZCBvciBvbGRDaGlsZHJlbkxlbmd0aCA+IDAsXG5cdFx0XHQvLyBzbyBhZnRlciB0aGlzIGxvb3Agb2xkVk5vZGUgPT0gbnVsbCBvciBvbGRWTm9kZSBpcyBhIHZhbGlkIHZhbHVlLlxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9sZENoaWxkcmVuTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltqXTtcblx0XHRcdFx0Ly8gSWYgY2hpbGRWTm9kZSBpcyB1bmtleWVkLCB3ZSBvbmx5IG1hdGNoIHNpbWlsYXJseSB1bmtleWVkIG5vZGVzLCBvdGhlcndpc2Ugd2UgbWF0Y2ggYnkga2V5LlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgbWF0Y2ggYnkgdHlwZSAoaW4gZWl0aGVyIGNhc2UpLlxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0b2xkVk5vZGUgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLmtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0b2xkQ2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2xkVk5vZGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9sZFZOb2RlID0gb2xkVk5vZGUgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdGlzU3ZnLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0KTtcblxuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblxuXHRcdGlmICgoaiA9IGNoaWxkVk5vZGUucmVmKSAmJiBvbGRWTm9kZS5yZWYgIT0gaikge1xuXHRcdFx0aWYgKCFyZWZzKSByZWZzID0gW107XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSByZWZzLnB1c2gob2xkVk5vZGUucmVmLCBudWxsLCBjaGlsZFZOb2RlKTtcblx0XHRcdHJlZnMucHVzaChqLCBjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLCBjaGlsZFZOb2RlKTtcblx0XHR9XG5cblx0XHRpZiAobmV3RG9tICE9IG51bGwpIHtcblx0XHRcdGlmIChmaXJzdENoaWxkRG9tID09IG51bGwpIHtcblx0XHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgY2hpbGRWTm9kZS50eXBlID09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY2hpbGRyZW4gPT09IG9sZFZOb2RlLl9jaGlsZHJlblxuXHRcdFx0KSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX25leHREb20gPSBvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4oXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdFx0cGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0XHRcdG5ld0RvbSxcblx0XHRcdFx0XHRvbGREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBuZXdQYXJlbnRWTm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gQmVjYXVzZSB0aGUgbmV3UGFyZW50Vk5vZGUgaXMgRnJhZ21lbnQtbGlrZSwgd2UgbmVlZCB0byBzZXQgaXQnc1xuXHRcdFx0XHQvLyBfbmV4dERvbSBwcm9wZXJ0eSB0byB0aGUgbmV4dFNpYmxpbmcgb2YgaXRzIGxhc3QgY2hpbGQgRE9NIG5vZGUuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGBvbGREb21gIGNvbnRhaW5zIHRoZSBjb3JyZWN0IHZhbHVlIGhlcmUgYmVjYXVzZSBpZiB0aGUgbGFzdCBjaGlsZFxuXHRcdFx0XHQvLyBpcyBhIEZyYWdtZW50LWxpa2UsIHRoZW4gb2xkRG9tIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHRvIHRoYXQgY2hpbGQncyBfbmV4dERvbS5cblx0XHRcdFx0Ly8gSWYgdGhlIGxhc3QgY2hpbGQgaXMgYSBET00gVk5vZGUsIHRoZW4gb2xkRG9tIHdpbGwgYmUgc2V0IHRvIHRoYXQgRE9NXG5cdFx0XHRcdC8vIG5vZGUncyBuZXh0U2libGluZy5cblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBvbGREb207XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG9sZERvbSAmJlxuXHRcdFx0b2xkVk5vZGUuX2RvbSA9PSBvbGREb20gJiZcblx0XHRcdG9sZERvbS5wYXJlbnROb2RlICE9IHBhcmVudERvbVxuXHRcdCkge1xuXHRcdFx0Ly8gVGhlIGFib3ZlIGNvbmRpdGlvbiBpcyB0byBoYW5kbGUgbnVsbCBwbGFjZWhvbGRlcnMuIFNlZSB0ZXN0IGluIHBsYWNlaG9sZGVyLnRlc3QuanM6XG5cdFx0XHQvLyBgZWZmaWNpZW50bHkgcmVwbGFjZSBudWxsIHBsYWNlaG9sZGVycyBpbiBwYXJlbnQgcmVyZW5kZXJzYFxuXHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0bmV3UGFyZW50Vk5vZGUuX2RvbSA9IGZpcnN0Q2hpbGREb207XG5cblx0Ly8gUmVtb3ZlIHJlbWFpbmluZyBvbGRDaGlsZHJlbiBpZiB0aGVyZSBhcmUgYW55LlxuXHRmb3IgKGkgPSBvbGRDaGlsZHJlbkxlbmd0aDsgaS0tOyApIHtcblx0XHRpZiAob2xkQ2hpbGRyZW5baV0gIT0gbnVsbCkge1xuXHRcdFx0dW5tb3VudChvbGRDaGlsZHJlbltpXSwgb2xkQ2hpbGRyZW5baV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCByZWZzIG9ubHkgYWZ0ZXIgdW5tb3VudFxuXHRpZiAocmVmcykge1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZWZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcHBseVJlZihyZWZzW2ldLCByZWZzWysraV0sIHJlZnNbKytpXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSkge1xuXHQvLyBOb3RlOiBWTm9kZXMgaW4gbmVzdGVkIHN1c3BlbmRlZCB0cmVlcyBtYXkgYmUgbWlzc2luZyBfY2hpbGRyZW4uXG5cdGxldCBjID0gY2hpbGRWTm9kZS5fY2hpbGRyZW47XG5cdGxldCB0bXAgPSAwO1xuXHRmb3IgKDsgYyAmJiB0bXAgPCBjLmxlbmd0aDsgdG1wKyspIHtcblx0XHRsZXQgdm5vZGUgPSBjW3RtcF07XG5cdFx0aWYgKHZub2RlKSB7XG5cdFx0XHQvLyBXZSB0eXBpY2FsbHkgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdC8vIG9sZFZOb2RlLl9jaGlsZHJlbiB0byBuZXdWTm9kZS5fY2hpbGRyZW4uIElmIHRoYXQgaXMgdGhlIGNhc2UsIHdlIG5lZWRcblx0XHRcdC8vIHRvIHVwZGF0ZSB0aGUgb2xkIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZVxuXHRcdFx0Ly8gKGNoaWxkVk5vZGUgaGVyZSkuXG5cdFx0XHR2bm9kZS5fcGFyZW50ID0gY2hpbGRWTm9kZTtcblxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0b2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKHZub2RlLCBvbGREb20sIHBhcmVudERvbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKHBhcmVudERvbSwgdm5vZGUsIHZub2RlLCBjLCB2bm9kZS5fZG9tLCBvbGREb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2luZGV4JykuQ29tcG9uZW50Q2hpbGRyZW59IGNoaWxkcmVuIFRoZSB1bmZsYXR0ZW5lZFxuICogY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IG51bGwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ2hpbGQoXG5cdHBhcmVudERvbSxcblx0Y2hpbGRWTm9kZSxcblx0b2xkVk5vZGUsXG5cdG9sZENoaWxkcmVuLFxuXHRuZXdEb20sXG5cdG9sZERvbVxuKSB7XG5cdGxldCBuZXh0RG9tO1xuXHRpZiAoY2hpbGRWTm9kZS5fbmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gT25seSBGcmFnbWVudHMgb3IgY29tcG9uZW50cyB0aGF0IHJldHVybiBGcmFnbWVudCBsaWtlIFZOb2RlcyB3aWxsXG5cdFx0Ly8gaGF2ZSBhIG5vbi11bmRlZmluZWQgX25leHREb20uIENvbnRpbnVlIHRoZSBkaWZmIGZyb20gdGhlIHNpYmxpbmdcblx0XHQvLyBvZiBsYXN0IERPTSBjaGlsZCBvZiB0aGlzIGNoaWxkIFZOb2RlXG5cdFx0bmV4dERvbSA9IGNoaWxkVk5vZGUuX25leHREb207XG5cblx0XHQvLyBFYWdlcmx5IGNsZWFudXAgX25leHREb20uIFdlIGRvbid0IG5lZWQgdG8gcGVyc2lzdCB0aGUgdmFsdWUgYmVjYXVzZVxuXHRcdC8vIGl0IGlzIG9ubHkgdXNlZCBieSBgZGlmZkNoaWxkcmVuYCB0byBkZXRlcm1pbmUgd2hlcmUgdG8gcmVzdW1lIHRoZSBkaWZmIGFmdGVyXG5cdFx0Ly8gZGlmZmluZyBDb21wb25lbnRzIGFuZCBGcmFnbWVudHMuIE9uY2Ugd2Ugc3RvcmUgaXQgdGhlIG5leHRET00gbG9jYWwgdmFyLCB3ZVxuXHRcdC8vIGNhbiBjbGVhbiB1cCB0aGUgcHJvcGVydHlcblx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKFxuXHRcdG9sZFZOb2RlID09IG51bGwgfHxcblx0XHRuZXdEb20gIT0gb2xkRG9tIHx8XG5cdFx0bmV3RG9tLnBhcmVudE5vZGUgPT0gbnVsbFxuXHQpIHtcblx0XHRvdXRlcjogaWYgKG9sZERvbSA9PSBudWxsIHx8IG9sZERvbS5wYXJlbnROb2RlICE9PSBwYXJlbnREb20pIHtcblx0XHRcdHBhcmVudERvbS5hcHBlbmRDaGlsZChuZXdEb20pO1xuXHRcdFx0bmV4dERvbSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGBqPG9sZENoaWxkcmVuTGVuZ3RoOyBqKz0yYCBpcyBhbiBhbHRlcm5hdGl2ZSB0byBgaisrPG9sZENoaWxkcmVuTGVuZ3RoLzJgXG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgc2liRG9tID0gb2xkRG9tLCBqID0gMDtcblx0XHRcdFx0KHNpYkRvbSA9IHNpYkRvbS5uZXh0U2libGluZykgJiYgaiA8IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0aiArPSAxXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKHNpYkRvbSA9PSBuZXdEb20pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdEb20sIG9sZERvbSk7XG5cdFx0XHRuZXh0RG9tID0gb2xkRG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgcHJlLWNhbGN1bGF0ZWQgdGhlIG5leHRET00gbm9kZSwgdXNlIGl0LiBFbHNlIGNhbGN1bGF0ZSBpdCBub3dcblx0Ly8gU3RyaWN0bHkgY2hlY2sgZm9yIGB1bmRlZmluZWRgIGhlcmUgY3V6IGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlIG9mIGBuZXh0RG9tYC5cblx0Ly8gU2VlIG1vcmUgZGV0YWlsIGluIGNyZWF0ZS1lbGVtZW50LmpzOmNyZWF0ZVZOb2RlXG5cdGlmIChuZXh0RG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRvbGREb20gPSBuZXh0RG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG4iLCJpbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogRGlmZiB0aGUgb2xkIGFuZCBuZXcgcHJvcGVydGllcyBvZiBhIFZOb2RlIGFuZCBhcHBseSBjaGFuZ2VzIHRvIHRoZSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBhcHBseVxuICogY2hhbmdlcyB0b1xuICogQHBhcmFtIHtvYmplY3R9IG5ld1Byb3BzIFRoZSBuZXcgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvbGRQcm9wcyBUaGUgb2xkIHByb3BzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBoeWRyYXRlIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb24gbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZlByb3BzKGRvbSwgbmV3UHJvcHMsIG9sZFByb3BzLCBpc1N2ZywgaHlkcmF0ZSkge1xuXHRsZXQgaTtcblxuXHRmb3IgKGkgaW4gb2xkUHJvcHMpIHtcblx0XHRpZiAoaSAhPT0gJ2NoaWxkcmVuJyAmJiBpICE9PSAna2V5JyAmJiAhKGkgaW4gbmV3UHJvcHMpKSB7XG5cdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIG51bGwsIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0aWYgKFxuXHRcdFx0KCFoeWRyYXRlIHx8IHR5cGVvZiBuZXdQcm9wc1tpXSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0aSAhPT0gJ2NoaWxkcmVuJyAmJlxuXHRcdFx0aSAhPT0gJ2tleScgJiZcblx0XHRcdGkgIT09ICd2YWx1ZScgJiZcblx0XHRcdGkgIT09ICdjaGVja2VkJyAmJlxuXHRcdFx0b2xkUHJvcHNbaV0gIT09IG5ld1Byb3BzW2ldXG5cdFx0KSB7XG5cdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIG5ld1Byb3BzW2ldLCBvbGRQcm9wc1tpXSwgaXNTdmcpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09PSAnLScpIHtcblx0XHRzdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3R5bGVba2V5XSA9ICcnO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCBJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpKSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZSArICdweCc7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB2YWx1ZSBvbiBhIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIHRoZSBwcm9wZXJ0eSBoYWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGRvbSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlLCBpc1N2Zykge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkVmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSBvbGRWYWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2xkVmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCEodmFsdWUgJiYgbmFtZSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRWYWx1ZSB8fCB2YWx1ZVtuYW1lXSAhPT0gb2xkVmFsdWVbbmFtZV0pIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgdmFsdWVbbmFtZV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBCZW5jaG1hcmsgZm9yIGNvbXBhcmlzb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTc0Yzk1NGJkYjk2NWI5YTAwOTY1YWM2XG5cdGVsc2UgaWYgKG5hbWVbMF0gPT09ICdvJyAmJiBuYW1lWzFdID09PSAnbicpIHtcblx0XHR1c2VDYXB0dXJlID0gbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL0NhcHR1cmUkLywgJycpKTtcblxuXHRcdC8vIEluZmVyIGNvcnJlY3QgY2FzaW5nIGZvciBET00gYnVpbHQtaW4gZXZlbnRzOlxuXHRcdGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgaW4gZG9tKSBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpO1xuXHRcdGVsc2UgbmFtZSA9IG5hbWUuc2xpY2UoMik7XG5cblx0XHRpZiAoIWRvbS5fbGlzdGVuZXJzKSBkb20uX2xpc3RlbmVycyA9IHt9O1xuXHRcdGRvbS5fbGlzdGVuZXJzW25hbWUgKyB1c2VDYXB0dXJlXSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZFZhbHVlKSB7XG5cdFx0XHRcdGNvbnN0IGhhbmRsZXIgPSB1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5O1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSAhPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdGlmIChpc1N2Zykge1xuXHRcdFx0Ly8gTm9ybWFsaXplIGluY29ycmVjdCBwcm9wIHVzYWdlIGZvciBTVkc6XG5cdFx0XHQvLyAtIHhsaW5rOmhyZWYgLyB4bGlua0hyZWYgLS0+IGhyZWYgKHhsaW5rOmhyZWYgd2FzIHJlbW92ZWQgZnJvbSBTVkcgYW5kIGlzbid0IG5lZWRlZClcblx0XHRcdC8vIC0gY2xhc3NOYW1lIC0tPiBjbGFzc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgveGxpbmsoSHw6aCkvLCAnaCcpLnJlcGxhY2UoL3NOYW1lJC8sICdzJyk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG5hbWUgIT09ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9PSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9PSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9PSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIEFSSUEtYXR0cmlidXRlcyBoYXZlIGEgZGlmZmVyZW50IG5vdGlvbiBvZiBib29sZWFuIHZhbHVlcy5cblx0XHQvLyBUaGUgdmFsdWUgYGZhbHNlYCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdFxuXHRcdC8vIGV4aXN0aW5nIG9uIHRoZSBET00sIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdXMgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgVkRPTSBmcmFtZXdvcmtzIGFsc28gYWx3YXlzIHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZS5pbmRleE9mKCctJykgIT0gLTEpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0dGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIGZhbHNlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuXG5mdW5jdGlvbiBldmVudFByb3h5Q2FwdHVyZShlKSB7XG5cdHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB0cnVlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuIiwiaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgZGlmZlByb3BzLCBzZXRQcm9wZXJ0eSB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgYXNzaWduLCByZW1vdmVOb2RlLCBzbGljZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTVxuICogZWxlbWVudCBhbnkgbmV3IGRvbSBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdFxuICogcmVuZGVyIChleGNlcHQgd2hlbiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZ1xuICogRnJhZ21lbnRzIHRoYXQgaGF2ZSBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0h5ZHJhdGluZ10gV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9oeWRyYXRpbmcgIT0gbnVsbCkge1xuXHRcdGlzSHlkcmF0aW5nID0gb2xkVk5vZGUuX2h5ZHJhdGluZztcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHQvLyBpZiB3ZSByZXN1bWUsIHdlIHdhbnQgdGhlIHRyZWUgdG8gYmUgXCJ1bmxvY2tlZFwiXG5cdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBbb2xkRG9tXTtcblx0fVxuXG5cdGlmICgodG1wID0gb3B0aW9ucy5fZGlmZikpIHRtcChuZXdWTm9kZSk7XG5cblx0dHJ5IHtcblx0XHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQ29tcG9uZW50KG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0aWYgKCFjLnN0YXRlKSBjLnN0YXRlID0ge307XG5cdFx0XHRcdGMuY29udGV4dCA9IGNvbXBvbmVudENvbnRleHQ7XG5cdFx0XHRcdGMuX2dsb2JhbENvbnRleHQgPSBnbG9iYWxDb250ZXh0O1xuXHRcdFx0XHRpc05ldyA9IGMuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9XG5cblx0XHRcdC8vIEludm9rZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcblx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50ICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50ICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IG51bGwgJiZcblx0XHRcdFx0XHRuZXdQcm9wcyAhPT0gb2xkUHJvcHMgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IG51bGwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSkgfHxcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9PSBvbGRWTm9kZS5fb3JpZ2luYWwpIGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLmZvckVhY2godm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGMuX3N0YXRlQ2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLl9zdGF0ZUNhbGxiYWNrc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cdFx0XHRjLl9wYXJlbnREb20gPSBwYXJlbnREb207XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoJ3Byb3RvdHlwZScgaW4gbmV3VHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGMuX3N0YXRlQ2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5fc3RhdGVDYWxsYmFja3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaXNOZXcgJiYgYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdHNuYXBzaG90ID0gYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaXNUb3BMZXZlbEZyYWdtZW50ID1cblx0XHRcdFx0dG1wICE9IG51bGwgJiYgdG1wLnR5cGUgPT09IEZyYWdtZW50ICYmIHRtcC5rZXkgPT0gbnVsbDtcblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPSBpc1RvcExldmVsRnJhZ21lbnQgPyB0bXAucHJvcHMuY2hpbGRyZW4gOiB0bXA7XG5cblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KHJlbmRlclJlc3VsdCkgPyByZW5kZXJSZXN1bHQgOiBbcmVuZGVyUmVzdWx0XSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2Zyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSBudWxsO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjLl9mb3JjZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBudWxsICYmXG5cdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHRcdCkge1xuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBkaWZmRWxlbWVudE5vZGVzKFxuXHRcdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICgodG1wID0gb3B0aW9ucy5kaWZmZWQpKSB0bXAobmV3Vk5vZGUpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gbnVsbDtcblx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0aWYgKGlzSHlkcmF0aW5nIHx8IGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gISFpc0h5ZHJhdGluZztcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2V4Y2Vzc0RvbUNoaWxkcmVuLmluZGV4T2Yob2xkRG9tKV0gPSBudWxsO1xuXHRcdFx0Ly8gXiBjb3VsZCBwb3NzaWJseSBiZSBzaW1wbGlmaWVkIHRvOlxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoID0gMDtcblx0XHR9XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHJvb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHJvb3QpIHtcblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBTZWUgYWJvdmUgdHMtaWdub3JlIG9uIGNvbW1pdFF1ZXVlXG5cdFx0XHRcdGNiLmNhbGwoYyk7XG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGMuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgcmVwcmVzZW50aW5nIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZ1xuICogdGhlIHZpcnR1YWwgbm9kZXMgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHsqfSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCBvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gbmV3Vk5vZGUudHlwZTtcblx0bGV0IGkgPSAwO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBTVkcgbmFtZXNwYWNlIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT09ICdzdmcnKSBpc1N2ZyA9IHRydWU7XG5cblx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRmb3IgKDsgaSA8IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjaGlsZCA9IGV4Y2Vzc0RvbUNoaWxkcmVuW2ldO1xuXG5cdFx0XHQvLyBpZiBuZXdWTm9kZSBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4gb3IgdGhlIGBkb21gXG5cdFx0XHQvLyBhcmd1bWVudCBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4sIHJlbW92ZSBpdCBmcm9tXG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbiBzbyBpdCBpc24ndCBsYXRlciByZW1vdmVkIGluIGRpZmZDaGlsZHJlblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjaGlsZCAmJlxuXHRcdFx0XHQnc2V0QXR0cmlidXRlJyBpbiBjaGlsZCA9PT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyBjaGlsZC5sb2NhbE5hbWUgPT09IG5vZGVUeXBlIDogY2hpbGQubm9kZVR5cGUgPT09IDMpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tID0gY2hpbGQ7XG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2ldID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGRvbSA9PSBudWxsKSB7XG5cdFx0aWYgKG5vZGVUeXBlID09PSBudWxsKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIGNyZWF0ZVRleHROb2RlIHJldHVybnMgVGV4dCwgd2UgZXhwZWN0IFByZWFjdEVsZW1lbnRcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdQcm9wcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRcdCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgV2Uga25vdyBgbmV3Vk5vZGUudHlwZWAgaXMgYSBzdHJpbmdcblx0XHRcdFx0bm9kZVR5cGVcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgV2Uga25vdyBgbmV3Vk5vZGUudHlwZWAgaXMgYSBzdHJpbmdcblx0XHRcdFx0bm9kZVR5cGUsXG5cdFx0XHRcdG5ld1Byb3BzLmlzICYmIG5ld1Byb3BzXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHdlIGNyZWF0ZWQgYSBuZXcgcGFyZW50LCBzbyBub25lIG9mIHRoZSBwcmV2aW91c2x5IGF0dGFjaGVkIGNoaWxkcmVuIGNhbiBiZSByZXVzZWQ6XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBudWxsO1xuXHRcdC8vIHdlIGFyZSBjcmVhdGluZyBhIG5ldyBub2RlLCBzbyB3ZSBjYW4gYXNzdW1lIHRoaXMgaXMgYSBuZXcgc3VidHJlZSAoaW4gY2FzZSB3ZSBhcmUgaHlkcmF0aW5nKSwgdGhpcyBkZW9wdHMgdGhlIGh5ZHJhdGVcblx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKG5vZGVUeXBlID09PSBudWxsKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9PSBuZXdQcm9wcykpIHtcblx0XHRcdGRvbS5kYXRhID0gbmV3UHJvcHM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGV4Y2Vzc0RvbUNoaWxkcmVuIHdhcyBub3QgbnVsbCwgcmVwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQncyBjaGlsZHJlbjpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IGV4Y2Vzc0RvbUNoaWxkcmVuICYmIHNsaWNlLmNhbGwoZG9tLmNoaWxkTm9kZXMpO1xuXG5cdFx0b2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG5cblx0XHRsZXQgb2xkSHRtbCA9IG9sZFByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXHRcdGxldCBuZXdIdG1sID0gbmV3UHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCBwcm9wcyBhcmUgbm90IGRpZmZlZCBhdCBhbGwgKGluY2x1ZGluZyBkYW5nZXJvdXNseVNldElubmVySFRNTClcblx0XHQvLyBAVE9ETyB3ZSBzaG91bGQgd2FybiBpbiBkZWJ1ZyBtb2RlIHdoZW4gcHJvcHMgZG9uJ3QgbWF0Y2ggaGVyZS5cblx0XHRpZiAoIWlzSHlkcmF0aW5nKSB7XG5cdFx0XHQvLyBCdXQsIGlmIHdlIGFyZSBpbiBhIHNpdHVhdGlvbiB3aGVyZSB3ZSBhcmUgdXNpbmcgZXhpc3RpbmcgRE9NIChlLmcuIHJlcGxhY2VOb2RlKVxuXHRcdFx0Ly8gd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTSBhdHRyaWJ1dGVzIHRvIGRpZmYgdGhlbVxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0b2xkUHJvcHMgPSB7fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b2xkUHJvcHNbZG9tLmF0dHJpYnV0ZXNbaV0ubmFtZV0gPSBkb20uYXR0cmlidXRlc1tpXS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3SHRtbCB8fCBvbGRIdG1sKSB7XG5cdFx0XHRcdC8vIEF2b2lkIHJlLWFwcGx5aW5nIHRoZSBzYW1lICdfX2h0bWwnIGlmIGl0IGRpZCBub3QgY2hhbmdlZCBiZXR3ZWVuIHJlLXJlbmRlclxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IW5ld0h0bWwgfHxcblx0XHRcdFx0XHQoKCFvbGRIdG1sIHx8IG5ld0h0bWwuX19odG1sICE9IG9sZEh0bWwuX19odG1sKSAmJlxuXHRcdFx0XHRcdFx0bmV3SHRtbC5fX2h0bWwgIT09IGRvbS5pbm5lckhUTUwpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGRvbS5pbm5lckhUTUwgPSAobmV3SHRtbCAmJiBuZXdIdG1sLl9faHRtbCkgfHwgJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBpc0h5ZHJhdGluZyk7XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aSA9IG5ld1ZOb2RlLnByb3BzLmNoaWxkcmVuO1xuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRkb20sXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoaSkgPyBpIDogW2ldLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnICYmIG5vZGVUeXBlICE9PSAnZm9yZWlnbk9iamVjdCcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5cblx0XHRcdFx0XHQ/IGV4Y2Vzc0RvbUNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0OiBvbGRWTm9kZS5fY2hpbGRyZW4gJiYgZ2V0RG9tU2libGluZyhvbGRWTm9kZSwgMCksXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbltpXSAhPSBudWxsKSByZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIChhcyBhYm92ZSwgZG9uJ3QgZGlmZiBwcm9wcyBkdXJpbmcgaHlkcmF0aW9uKVxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0J3ZhbHVlJyBpbiBuZXdQcm9wcyAmJlxuXHRcdFx0XHQoaSA9IG5ld1Byb3BzLnZhbHVlKSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaSAhPT0gZG9tLnZhbHVlIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09PSAncHJvZ3Jlc3MnICYmICFpKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09PSAnb3B0aW9uJyAmJiBpICE9PSBvbGRQcm9wcy52YWx1ZSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCAndmFsdWUnLCBpLCBvbGRQcm9wcy52YWx1ZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQnY2hlY2tlZCcgaW4gbmV3UHJvcHMgJiZcblx0XHRcdFx0KGkgPSBuZXdQcm9wcy5jaGVja2VkKSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdGkgIT09IGRvbS5jaGVja2VkXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCAnY2hlY2tlZCcsIGksIG9sZFByb3BzLmNoZWNrZWQsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlZihyZWYsIHZhbHVlLCB2bm9kZSkge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHJlZih2YWx1ZSk7XG5cdFx0ZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byB1bm1vdW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdFxuICogaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT09IHZub2RlLl9kb20pIHtcblx0XHRcdGFwcGx5UmVmKHIsIG51bGwsIHBhcmVudFZOb2RlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY29tcG9uZW50KSAhPSBudWxsKSB7XG5cdFx0aWYgKHIuY29tcG9uZW50V2lsbFVubW91bnQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ci5iYXNlID0gci5fcGFyZW50RG9tID0gbnVsbDtcblx0XHR2bm9kZS5fY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT09ICdmdW5jdGlvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUgJiYgdm5vZGUuX2RvbSAhPSBudWxsKSB7XG5cdFx0cmVtb3ZlTm9kZSh2bm9kZS5fZG9tKTtcblx0fVxuXG5cdC8vIE11c3QgYmUgc2V0IHRvIGB1bmRlZmluZWRgIHRvIHByb3Blcmx5IGNsZWFuIHVwIGBfbmV4dERvbWBcblx0Ly8gZm9yIHdoaWNoIGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlLiBTZWUgY29tbWVudCBpbiBgY3JlYXRlLWVsZW1lbnQuanNgXG5cdHZub2RlLl9wYXJlbnQgPSB2bm9kZS5fZG9tID0gdm5vZGUuX25leHREb20gPSB1bmRlZmluZWQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbW1pdFJvb3QsIGRpZmYgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUmVuZGVyIGEgUHJlYWN0IHZpcnR1YWwgbm9kZSBpbnRvIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG9cbiAqIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBudWxsXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKFxuXHRcdCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8XG5cdFx0cGFyZW50RG9tXG5cdCkuX2NoaWxkcmVuID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgW3Zub2RlXSk7XG5cblx0Ly8gTGlzdCBvZiBlZmZlY3RzIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgZGlmZmluZy5cblx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IFtyZXBsYWNlTm9kZV1cblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gbnVsbFxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0OiBudWxsLFxuXHRcdGNvbW1pdFF1ZXVlLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyByZXBsYWNlTm9kZVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudERvbSkge1xuXHRyZW5kZXIodm5vZGUsIHBhcmVudERvbSwgaHlkcmF0ZSk7XG59XG4iLCJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0cyBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkIGFzIHJlcGxhY2VtZW50IGNoaWxkcmVuLlxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IGFzc2lnbih7fSwgdm5vZGUucHJvcHMpLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0bnVsbFxuXHQpO1xufVxuIiwiLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3XG4gKiB0aGUgZXJyb3IgdGhhdCB3YXMgY2F1Z2h0IChleGNlcHQgZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlclxuICogaXMgdGhlIGhpZ2hlc3QgcGFyZW50IHRoYXQgd2FzIGJlaW5nIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LCBjdG9yLCBoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IG51bGwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SW5kZXg7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IHByZXZpb3VzQ29tcG9uZW50O1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SG9vayA9IDA7XG5cbi8qKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn0gKi9cbmxldCBhZnRlclBhaW50RWZmZWN0cyA9IFtdO1xuXG5sZXQgRU1QVFkgPSBbXTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcblxuY29uc3QgUkFGX1RJTUVPVVQgPSAxMDA7XG5sZXQgcHJldlJhZjtcblxub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3JlbmRlciA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikgb2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0Y3VycmVudEluZGV4ID0gMDtcblxuXHRjb25zdCBob29rcyA9IGN1cnJlbnRDb21wb25lbnQuX19ob29rcztcblx0aWYgKGhvb2tzKSB7XG5cdFx0aWYgKHByZXZpb3VzQ29tcG9uZW50ID09PSBjdXJyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0aG9va3MuX2xpc3QuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRob29rSXRlbS5fcGVuZGluZ1ZhbHVlID0gRU1QVFk7XG5cdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdH1cblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ1ZhbHVlICE9PSBFTVBUWSkge1xuXHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ1ZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHsgX3BlbmRpbmdWYWx1ZTogRU1QVFkgfSk7XG5cdH1cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxhbnk+fSBbaW5pdGlhbFN0YXRlXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG5cdGN1cnJlbnRIb29rID0gMTtcblx0cmV0dXJuIHVzZVJlZHVjZXIoaW52b2tlT3JSZXR1cm4sIGluaXRpYWxTdGF0ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPGFueSwgYW55Pn0gcmVkdWNlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBhbnksIChzdGF0ZTogYW55KSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGNvbnN0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblxuXHRcdFx0Ly8gVGhpcyBTQ1UgaGFzIHRoZSBwdXJwb3NlIG9mIGJhaWxpbmcgb3V0IGFmdGVyIHJlcGVhdGVkIHVwZGF0ZXNcblx0XHRcdC8vIHRvIHN0YXRlZnVsIGhvb2tzLlxuXHRcdFx0Ly8gd2Ugc3RvcmUgdGhlIG5leHQgdmFsdWUgaW4gX25leHRWYWx1ZVswXSBhbmQga2VlcCBkb2luZyB0aGF0IGZvciBhbGxcblx0XHRcdC8vIHN0YXRlIHNldHRlcnMsIGlmIHdlIGhhdmUgbmV4dCBzdGF0ZXMgYW5kXG5cdFx0XHQvLyBhbGwgbmV4dCBzdGF0ZXMgd2l0aGluIGEgY29tcG9uZW50IGVuZCB1cCBiZWluZyBlcXVhbCB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuXHRcdFx0Ly8gd2UgYXJlIHNhZmUgdG8gYmFpbCBvdXQgZm9yIHRoaXMgc3BlY2lmaWMgY29tcG9uZW50LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Y29uc3Qgc3RhdGVIb29rcyA9IGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3QuZmlsdGVyKFxuXHRcdFx0XHRcdHggPT4geC5fY29tcG9uZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IGFsbEhvb2tzRW1wdHkgPSBzdGF0ZUhvb2tzLmV2ZXJ5KHggPT4gIXguX25leHRWYWx1ZSk7XG5cdFx0XHRcdC8vIFdoZW4gd2UgaGF2ZSBubyB1cGRhdGVkIGhvb2tzIGluIHRoZSBjb21wb25lbnQgd2UgaW52b2tlIHRoZSBwcmV2aW91cyBTQ1Ugb3Jcblx0XHRcdFx0Ly8gdHJhdmVyc2UgdGhlIFZET00gdHJlZSBmdXJ0aGVyLlxuXHRcdFx0XHRpZiAoYWxsSG9va3NFbXB0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2U2N1ID8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpIDogdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBjb21wb25lbnRzIHdpdGggYSBuZXh0VmFsdWUgc2V0IHRoYXRcblx0XHRcdFx0Ly8gaGF2ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgZXF1YWwgdG8gb25lIGFub3RoZXIgdGhpcyBwdXNoZXNcblx0XHRcdFx0Ly8gdXMgdG8gdXBkYXRlIGZ1cnRoZXIgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXRlSG9va3MuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHNob3VsZFVwZGF0ZSB8fCBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcFxuXHRcdFx0XHRcdD8gcHJldlNjdVxuXHRcdFx0XHRcdFx0PyBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYylcblx0XHRcdFx0XHRcdDogdHJ1ZVxuXHRcdFx0XHRcdDogZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHJlZihudWxsKTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZhY3RvcnlcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl9wZW5kaW5nVmFsdWUgPSBmYWN0b3J5KCk7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdFx0cmV0dXJuIHN0YXRlLl9wZW5kaW5nVmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoZm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7KGVycm9yOiBhbnksIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsLmQnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKCFjb21wb25lbnQuX3BhcmVudERvbSB8fCAhY29tcG9uZW50Ll9faG9va3MpIGNvbnRpbnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUVmZmVjdCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmxldCBIQVNfUkFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PSAnZnVuY3Rpb24nO1xuXG4vKipcbiAqIFNjaGVkdWxlIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgYnJvd3NlciBoYXMgYSBjaGFuY2UgdG8gcGFpbnQgYSBuZXcgZnJhbWUuXG4gKiBEbyB0aGlzIGJ5IGNvbWJpbmluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKHJBRikgKyBzZXRUaW1lb3V0IHRvIGludm9rZSBhIGNhbGxiYWNrIGFmdGVyXG4gKiB0aGUgbmV4dCBicm93c2VyIGZyYW1lLlxuICpcbiAqIEFsc28sIHNjaGVkdWxlIGEgdGltZW91dCBpbiBwYXJhbGxlbCB0byB0aGUgdGhlIHJBRiB0byBlbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGludm9rZWRcbiAqIGV2ZW4gaWYgUkFGIGRvZXNuJ3QgZmlyZSAoZm9yIGV4YW1wbGUgaWYgdGhlIGJyb3dzZXIgdGFiIGlzIG5vdCB2aXNpYmxlKVxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJOZXh0RnJhbWUoY2FsbGJhY2spIHtcblx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0aWYgKEhBU19SQUYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRvbmUsIFJBRl9USU1FT1VUKTtcblxuXHRsZXQgcmFmO1xuXHRpZiAoSEFTX1JBRikge1xuXHRcdHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkb25lKTtcblx0fVxufVxuXG4vLyBOb3RlOiBpZiBzb21lb25lIHVzZWQgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbi8vIHRoZW4gZWZmZWN0cyB3aWxsIEFMV0FZUyBydW4gb24gdGhlIE5FWFQgZnJhbWUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBvbmUsIGluY3VycmluZyBhIH4xNm1zIGRlbGF5LlxuLy8gUGVyaGFwcyB0aGlzIGlzIG5vdCBzdWNoIGEgYmlnIGRlYWwuXG4vKipcbiAqIFNjaGVkdWxlIGFmdGVyUGFpbnRFZmZlY3RzIGZsdXNoIGFmdGVyIHRoZSBicm93c2VyIHBhaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5ld1F1ZXVlTGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VFZmZlY3QoaG9vaykge1xuXHQvLyBBIGhvb2sgY2FsbCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRob29rLl9jbGVhbnVwID0gaG9vay5fdmFsdWUoKTtcblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gb2xkQXJnc1xuICogQHBhcmFtIHthbnlbXX0gbmV3QXJnc1xuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGludm9rZU9yUmV0dXJuKGFyZywgZikge1xuXHRyZXR1cm4gdHlwZW9mIGYgPT0gJ2Z1bmN0aW9uJyA/IGYoYXJnKSA6IGY7XG59XG4iLCIvKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBhIGRpZmZlcmVudCBzaGFwZVxuICogQHBhcmFtIHtvYmplY3R9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dEaWZmZXJzKGEsIGIpIHtcblx0Zm9yIChsZXQgaSBpbiBhKSBpZiAoaSAhPT0gJ19fc291cmNlJyAmJiAhKGkgaW4gYikpIHJldHVybiB0cnVlO1xuXHRmb3IgKGxldCBpIGluIGIpIGlmIChpICE9PSAnX19zb3VyY2UnICYmIGFbaV0gIT09IGJbaV0pIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIHZhbHVlXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpcyh4LCB5KSB7XG5cdHJldHVybiAoeCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpKSB8fCAoeCAhPT0geCAmJiB5ICE9PSB5KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzaGFsbG93RGlmZmVycyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGNsYXNzIHdpdGggYSBwcmVkZWZpbmVkIGBzaG91bGRDb21wb25lbnRVcGRhdGVgIGltcGxlbWVudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KHApIHtcblx0dGhpcy5wcm9wcyA9IHA7XG59XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcbi8vIFNvbWUgdGhpcmQtcGFydHkgbGlicmFyaWVzIGNoZWNrIGlmIHRoaXMgcHJvcGVydHkgaXMgcHJlc2VudFxuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24ocHJvcHMsIHN0YXRlKSB7XG5cdHJldHVybiBzaGFsbG93RGlmZmVycyh0aGlzLnByb3BzLCBwcm9wcykgfHwgc2hhbGxvd0RpZmZlcnModGhpcy5zdGF0ZSwgc3RhdGUpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc2hhbGxvd0RpZmZlcnMgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIE1lbW9pemUgYSBjb21wb25lbnQsIHNvIHRoYXQgaXQgb25seSB1cGRhdGVzIHdoZW4gdGhlIHByb3BzIGFjdHVhbGx5IGhhdmVcbiAqIGNoYW5nZWQuIFRoaXMgd2FzIHByZXZpb3VzbHkga25vd24gYXMgYFJlYWN0LnB1cmVgLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gYyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICogQHBhcmFtIHsocHJldjogb2JqZWN0LCBuZXh0OiBvYmplY3QpID0+IGJvb2xlYW59IFtjb21wYXJlcl0gQ3VzdG9tIGVxdWFsaXR5IGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW1vKGMsIGNvbXBhcmVyKSB7XG5cdGZ1bmN0aW9uIHNob3VsZFVwZGF0ZShuZXh0UHJvcHMpIHtcblx0XHRsZXQgcmVmID0gdGhpcy5wcm9wcy5yZWY7XG5cdFx0bGV0IHVwZGF0ZVJlZiA9IHJlZiA9PSBuZXh0UHJvcHMucmVmO1xuXHRcdGlmICghdXBkYXRlUmVmICYmIHJlZikge1xuXHRcdFx0cmVmLmNhbGwgPyByZWYobnVsbCkgOiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHR9XG5cblx0XHRpZiAoIWNvbXBhcmVyKSB7XG5cdFx0XHRyZXR1cm4gc2hhbGxvd0RpZmZlcnModGhpcy5wcm9wcywgbmV4dFByb3BzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIWNvbXBhcmVyKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXVwZGF0ZVJlZjtcblx0fVxuXG5cdGZ1bmN0aW9uIE1lbW9lZChwcm9wcykge1xuXHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gc2hvdWxkVXBkYXRlO1xuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KGMsIHByb3BzKTtcblx0fVxuXHRNZW1vZWQuZGlzcGxheU5hbWUgPSAnTWVtbygnICsgKGMuZGlzcGxheU5hbWUgfHwgYy5uYW1lKSArICcpJztcblx0TWVtb2VkLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblx0TWVtb2VkLl9mb3J3YXJkZWQgPSB0cnVlO1xuXHRyZXR1cm4gTWVtb2VkO1xufVxuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuXG5sZXQgb2xkRGlmZkhvb2sgPSBvcHRpb25zLl9kaWZmO1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5fZm9yd2FyZGVkICYmIHZub2RlLnJlZikge1xuXHRcdHZub2RlLnByb3BzLnJlZiA9IHZub2RlLnJlZjtcblx0XHR2bm9kZS5yZWYgPSBudWxsO1xuXHR9XG5cdGlmIChvbGREaWZmSG9vaykgb2xkRGlmZkhvb2sodm5vZGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0ZPUldBUkRfU1lNQk9MID1cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRTeW1ib2wuZm9yICYmXG5cdFx0U3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSkgfHxcblx0MHhmNDc7XG5cbi8qKlxuICogUGFzcyByZWYgZG93biB0byBhIGNoaWxkLiBUaGlzIGlzIG1haW5seSB1c2VkIGluIGxpYnJhcmllcyB3aXRoIEhPQ3MgdGhhdFxuICogd3JhcCBjb21wb25lbnRzLiBVc2luZyBgZm9yd2FyZFJlZmAgdGhlcmUgaXMgYW4gZWFzeSB3YXkgdG8gZ2V0IGEgcmVmZXJlbmNlXG4gKiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgaW5zdGVhZCBvZiBvbmUgb2YgdGhlIHdyYXBwZXIgaXRzZWxmLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5Gb3J3YXJkRm59IGZuXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUmVmKGZuKSB7XG5cdGZ1bmN0aW9uIEZvcndhcmRlZChwcm9wcykge1xuXHRcdGxldCBjbG9uZSA9IGFzc2lnbih7fSwgcHJvcHMpO1xuXHRcdGRlbGV0ZSBjbG9uZS5yZWY7XG5cdFx0cmV0dXJuIGZuKGNsb25lLCBwcm9wcy5yZWYgfHwgbnVsbCk7XG5cdH1cblxuXHQvLyBtb2J4LXJlYWN0IGNoZWNrcyBmb3IgdGhpcyBiZWluZyBwcmVzZW50XG5cdEZvcndhcmRlZC4kJHR5cGVvZiA9IFJFQUNUX0ZPUldBUkRfU1lNQk9MO1xuXHQvLyBtb2J4LXJlYWN0IGhlYXZpbHkgcmVsaWVzIG9uIGltcGxlbWVudGF0aW9uIGRldGFpbHMuXG5cdC8vIEl0IGV4cGVjdHMgYW4gb2JqZWN0IGhlcmUgd2l0aCBhIGByZW5kZXJgIHByb3BlcnR5LFxuXHQvLyBhbmQgcHJvdG90eXBlLnJlbmRlciB3aWxsIGZhaWwuIFdpdGhvdXQgdGhpc1xuXHQvLyBtb2J4LXJlYWN0IHRocm93cy5cblx0Rm9yd2FyZGVkLnJlbmRlciA9IEZvcndhcmRlZDtcblxuXHRGb3J3YXJkZWQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSBGb3J3YXJkZWQuX2ZvcndhcmRlZCA9IHRydWU7XG5cdEZvcndhcmRlZC5kaXNwbGF5TmFtZSA9ICdGb3J3YXJkUmVmKCcgKyAoZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSkgKyAnKSc7XG5cdHJldHVybiBGb3J3YXJkZWQ7XG59XG4iLCJpbXBvcnQgeyB0b0NoaWxkQXJyYXkgfSBmcm9tICdwcmVhY3QnO1xuXG5jb25zdCBtYXBGbiA9IChjaGlsZHJlbiwgZm4pID0+IHtcblx0aWYgKGNoaWxkcmVuID09IG51bGwpIHJldHVybiBudWxsO1xuXHRyZXR1cm4gdG9DaGlsZEFycmF5KHRvQ2hpbGRBcnJheShjaGlsZHJlbikubWFwKGZuKSk7XG59O1xuXG4vLyBUaGlzIEFQSSBpcyBjb21wbGV0ZWx5IHVubmVjZXNzYXJ5IGZvciBQcmVhY3QsIHNvIGl0J3MgYmFzaWNhbGx5IHBhc3N0aHJvdWdoLlxuZXhwb3J0IGNvbnN0IENoaWxkcmVuID0ge1xuXHRtYXA6IG1hcEZuLFxuXHRmb3JFYWNoOiBtYXBGbixcblx0Y291bnQoY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gY2hpbGRyZW4gPyB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA6IDA7XG5cdH0sXG5cdG9ubHkoY2hpbGRyZW4pIHtcblx0XHRjb25zdCBub3JtYWxpemVkID0gdG9DaGlsZEFycmF5KGNoaWxkcmVuKTtcblx0XHRpZiAobm9ybWFsaXplZC5sZW5ndGggIT09IDEpIHRocm93ICdDaGlsZHJlbi5vbmx5Jztcblx0XHRyZXR1cm4gbm9ybWFsaXplZFswXTtcblx0fSxcblx0dG9BcnJheTogdG9DaGlsZEFycmF5XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBvbGRDYXRjaEVycm9yID0gb3B0aW9ucy5fY2F0Y2hFcnJvcjtcbm9wdGlvbnMuX2NhdGNoRXJyb3IgPSBmdW5jdGlvbihlcnJvciwgbmV3Vk5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0aWYgKGVycm9yLnRoZW4pIHtcblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0XHRsZXQgY29tcG9uZW50O1xuXHRcdGxldCB2bm9kZSA9IG5ld1ZOb2RlO1xuXG5cdFx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgY29tcG9uZW50Ll9jaGlsZERpZFN1c3BlbmQpIHtcblx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9kb20gPT0gbnVsbCkge1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBEb24ndCBjYWxsIG9sZENhdGNoRXJyb3IgaWYgd2UgZm91bmQgYSBTdXNwZW5zZVxuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Ll9jaGlsZERpZFN1c3BlbmQoZXJyb3IsIG5ld1ZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0b2xkQ2F0Y2hFcnJvcihlcnJvciwgbmV3Vk5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pO1xufTtcblxuY29uc3Qgb2xkVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbm9wdGlvbnMudW5tb3VudCA9IGZ1bmN0aW9uKHZub2RlKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRjb25zdCBjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5fb25SZXNvbHZlKSB7XG5cdFx0Y29tcG9uZW50Ll9vblJlc29sdmUoKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgaHlkcmF0aW5nXG5cdC8vIG1vc3QgbGlrZWx5IGl0IGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBpcyBzdXNwZW5kZWRcblx0Ly8gd2Ugc2V0IHRoZSB2bm9kZS50eXBlIGFzIGBudWxsYCBzbyB0aGF0IGl0IGlzIG5vdCBhIHR5cGVvZiBmdW5jdGlvblxuXHQvLyBzbyB0aGUgdW5tb3VudCB3aWxsIHJlbW92ZSB0aGUgdm5vZGUuX2RvbVxuXHRpZiAoY29tcG9uZW50ICYmIHZub2RlLl9oeWRyYXRpbmcgPT09IHRydWUpIHtcblx0XHR2bm9kZS50eXBlID0gbnVsbDtcblx0fVxuXG5cdGlmIChvbGRVbm1vdW50KSBvbGRVbm1vdW50KHZub2RlKTtcbn07XG5cbmZ1bmN0aW9uIGRldGFjaGVkQ2xvbmUodm5vZGUsIGRldGFjaGVkUGFyZW50LCBwYXJlbnREb20pIHtcblx0aWYgKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQgJiYgdm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzKSB7XG5cdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3QuZm9yRWFjaChlZmZlY3QgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIGVmZmVjdC5fY2xlYW51cCA9PSAnZnVuY3Rpb24nKSBlZmZlY3QuX2NsZWFudXAoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9faG9va3MgPSBudWxsO1xuXHRcdH1cblxuXHRcdHZub2RlID0gYXNzaWduKHt9LCB2bm9kZSk7XG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9PT0gcGFyZW50RG9tKSB7XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9IGRldGFjaGVkUGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0dm5vZGUuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0dm5vZGUuX2NoaWxkcmVuID1cblx0XHRcdHZub2RlLl9jaGlsZHJlbiAmJlxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuLm1hcChjaGlsZCA9PlxuXHRcdFx0XHRkZXRhY2hlZENsb25lKGNoaWxkLCBkZXRhY2hlZFBhcmVudCwgcGFyZW50RG9tKVxuXHRcdFx0KTtcblx0fVxuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JpZ2luYWwodm5vZGUsIGRldGFjaGVkUGFyZW50LCBvcmlnaW5hbFBhcmVudCkge1xuXHRpZiAodm5vZGUpIHtcblx0XHR2bm9kZS5fb3JpZ2luYWwgPSBudWxsO1xuXHRcdHZub2RlLl9jaGlsZHJlbiA9XG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4gJiZcblx0XHRcdHZub2RlLl9jaGlsZHJlbi5tYXAoY2hpbGQgPT5cblx0XHRcdFx0cmVtb3ZlT3JpZ2luYWwoY2hpbGQsIGRldGFjaGVkUGFyZW50LCBvcmlnaW5hbFBhcmVudClcblx0XHRcdCk7XG5cblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0aWYgKHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9PT0gZGV0YWNoZWRQYXJlbnQpIHtcblx0XHRcdFx0aWYgKHZub2RlLl9kb20pIHtcblx0XHRcdFx0XHRvcmlnaW5hbFBhcmVudC5pbnNlcnRCZWZvcmUodm5vZGUuX2RvbSwgdm5vZGUuX25leHREb20pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX2ZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID0gb3JpZ2luYWxQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG4vLyBoYXZpbmcgY3VzdG9tIGluaGVyaXRhbmNlIGluc3RlYWQgb2YgYSBjbGFzcyBoZXJlIHNhdmVzIGEgbG90IG9mIGJ5dGVzXG5leHBvcnQgZnVuY3Rpb24gU3VzcGVuc2UoKSB7XG5cdC8vIHdlIGRvIG5vdCBjYWxsIHN1cGVyIGhlcmUgdG8gZ29sZiBzb21lIGJ5dGVzLi4uXG5cdHRoaXMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQgPSAwO1xuXHR0aGlzLl9zdXNwZW5kZXJzID0gbnVsbDtcblx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbDtcbn1cblxuLy8gVGhpbmdzIHdlIGRvIGhlcmUgdG8gc2F2ZSBzb21lIGJ5dGVzIGJ1dCBhcmUgbm90IHByb3BlciBKUyBpbmhlcml0YW5jZTpcbi8vIC0gY2FsbCBgbmV3IENvbXBvbmVudCgpYCBhcyB0aGUgcHJvdG90eXBlXG4vLyAtIGRvIG5vdCBzZXQgYFN1c3BlbnNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgdG8gYFN1c3BlbnNlYFxuU3VzcGVuc2UucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH1cbiAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZSBUaGUgdGhyb3duIHByb21pc2VcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGU8YW55LCBhbnk+fSBzdXNwZW5kaW5nVk5vZGUgVGhlIHN1c3BlbmRpbmcgY29tcG9uZW50XG4gKi9cblN1c3BlbnNlLnByb3RvdHlwZS5fY2hpbGREaWRTdXNwZW5kID0gZnVuY3Rpb24ocHJvbWlzZSwgc3VzcGVuZGluZ1ZOb2RlKSB7XG5cdGNvbnN0IHN1c3BlbmRpbmdDb21wb25lbnQgPSBzdXNwZW5kaW5nVk5vZGUuX2NvbXBvbmVudDtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fSAqL1xuXHRjb25zdCBjID0gdGhpcztcblxuXHRpZiAoYy5fc3VzcGVuZGVycyA9PSBudWxsKSB7XG5cdFx0Yy5fc3VzcGVuZGVycyA9IFtdO1xuXHR9XG5cdGMuX3N1c3BlbmRlcnMucHVzaChzdXNwZW5kaW5nQ29tcG9uZW50KTtcblxuXHRjb25zdCByZXNvbHZlID0gc3VzcGVuZGVkKGMuX3Zub2RlKTtcblxuXHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0Y29uc3Qgb25SZXNvbHZlZCA9ICgpID0+IHtcblx0XHRpZiAocmVzb2x2ZWQpIHJldHVybjtcblxuXHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHRzdXNwZW5kaW5nQ29tcG9uZW50Ll9vblJlc29sdmUgPSBudWxsO1xuXG5cdFx0aWYgKHJlc29sdmUpIHtcblx0XHRcdHJlc29sdmUob25TdXNwZW5zaW9uQ29tcGxldGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvblN1c3BlbnNpb25Db21wbGV0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRzdXNwZW5kaW5nQ29tcG9uZW50Ll9vblJlc29sdmUgPSBvblJlc29sdmVkO1xuXG5cdGNvbnN0IG9uU3VzcGVuc2lvbkNvbXBsZXRlID0gKCkgPT4ge1xuXHRcdGlmICghLS1jLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50KSB7XG5cdFx0XHQvLyBJZiB0aGUgc3VzcGVuc2lvbiB3YXMgZHVyaW5nIGh5ZHJhdGlvbiB3ZSBkb24ndCBuZWVkIHRvIHJlc3RvcmUgdGhlXG5cdFx0XHQvLyBzdXNwZW5kZWQgY2hpbGRyZW4gaW50byB0aGUgX2NoaWxkcmVuIGFycmF5XG5cdFx0XHRpZiAoYy5zdGF0ZS5fc3VzcGVuZGVkKSB7XG5cdFx0XHRcdGNvbnN0IHN1c3BlbmRlZFZOb2RlID0gYy5zdGF0ZS5fc3VzcGVuZGVkO1xuXHRcdFx0XHRjLl92bm9kZS5fY2hpbGRyZW5bMF0gPSByZW1vdmVPcmlnaW5hbChcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZSxcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20sXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUuX2NvbXBvbmVudC5fb3JpZ2luYWxQYXJlbnREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Yy5zZXRTdGF0ZSh7IF9zdXNwZW5kZWQ6IChjLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsKSB9KTtcblxuXHRcdFx0bGV0IHN1c3BlbmRlZDtcblx0XHRcdHdoaWxlICgoc3VzcGVuZGVkID0gYy5fc3VzcGVuZGVycy5wb3AoKSkpIHtcblx0XHRcdFx0c3VzcGVuZGVkLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBXZSBkbyBub3Qgc2V0IGBzdXNwZW5kZWQ6IHRydWVgIGR1cmluZyBoeWRyYXRpb24gYmVjYXVzZSB3ZSB3YW50IHRoZSBhY3R1YWwgbWFya3VwXG5cdCAqIHRvIHJlbWFpbiBvbiBzY3JlZW4gYW5kIGh5ZHJhdGUgaXQgd2hlbiB0aGUgc3VzcGVuc2UgYWN0dWFsbHkgZ2V0cyByZXNvbHZlZC5cblx0ICogV2hpbGUgaW4gbm9uLWh5ZHJhdGlvbiBjYXNlcyB0aGUgdXN1YWwgZmFsbGJhY2sgLT4gY29tcG9uZW50IGZsb3cgd291bGQgb2Njb3VyLlxuXHQgKi9cblx0Y29uc3Qgd2FzSHlkcmF0aW5nID0gc3VzcGVuZGluZ1ZOb2RlLl9oeWRyYXRpbmcgPT09IHRydWU7XG5cdGlmICghYy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCsrICYmICF3YXNIeWRyYXRpbmcpIHtcblx0XHRjLnNldFN0YXRlKHsgX3N1c3BlbmRlZDogKGMuX2RldGFjaE9uTmV4dFJlbmRlciA9IGMuX3Zub2RlLl9jaGlsZHJlblswXSkgfSk7XG5cdH1cblx0cHJvbWlzZS50aGVuKG9uUmVzb2x2ZWQsIG9uUmVzb2x2ZWQpO1xufTtcblxuU3VzcGVuc2UucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX3N1c3BlbmRlcnMgPSBbXTtcbn07XG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudFtcInByb3BzXCJdfSBwcm9wc1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZVN0YXRlfSBzdGF0ZVxuICovXG5TdXNwZW5zZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocHJvcHMsIHN0YXRlKSB7XG5cdGlmICh0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIpIHtcblx0XHQvLyBXaGVuIHRoZSBTdXNwZW5zZSdzIF92bm9kZSB3YXMgY3JlYXRlZCBieSBhIGNhbGwgdG8gY3JlYXRlVk5vZGVcblx0XHQvLyAoaS5lLiBkdWUgdG8gYSBzZXRTdGF0ZSBmdXJ0aGVyIHVwIGluIHRoZSB0cmVlKVxuXHRcdC8vIGl0J3MgX2NoaWxkcmVuIHByb3AgaXMgbnVsbCwgaW4gdGhpcyBjYXNlIHdlIFwiZm9yZ2V0XCIgYWJvdXQgdGhlIHBhcmtlZCB2bm9kZXMgdG8gZGV0YWNoXG5cdFx0aWYgKHRoaXMuX3Zub2RlLl9jaGlsZHJlbikge1xuXHRcdFx0Y29uc3QgZGV0YWNoZWRQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNvbnN0IGRldGFjaGVkQ29tcG9uZW50ID0gdGhpcy5fdm5vZGUuX2NoaWxkcmVuWzBdLl9jb21wb25lbnQ7XG5cdFx0XHR0aGlzLl92bm9kZS5fY2hpbGRyZW5bMF0gPSBkZXRhY2hlZENsb25lKFxuXHRcdFx0XHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIsXG5cdFx0XHRcdGRldGFjaGVkUGFyZW50LFxuXHRcdFx0XHQoZGV0YWNoZWRDb21wb25lbnQuX29yaWdpbmFsUGFyZW50RG9tID0gZGV0YWNoZWRDb21wb25lbnQuX3BhcmVudERvbSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbDtcblx0fVxuXG5cdC8vIFdyYXAgZmFsbGJhY2sgdHJlZSBpbiBhIFZOb2RlIHRoYXQgcHJldmVudHMgaXRzZWxmIGZyb20gYmVpbmcgbWFya2VkIGFzIGFib3J0aW5nIG1pZC1oeWRyYXRpb246XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdGNvbnN0IGZhbGxiYWNrID1cblx0XHRzdGF0ZS5fc3VzcGVuZGVkICYmIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHByb3BzLmZhbGxiYWNrKTtcblx0aWYgKGZhbGxiYWNrKSBmYWxsYmFjay5faHlkcmF0aW5nID0gbnVsbDtcblxuXHRyZXR1cm4gW1xuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHN0YXRlLl9zdXNwZW5kZWQgPyBudWxsIDogcHJvcHMuY2hpbGRyZW4pLFxuXHRcdGZhbGxiYWNrXG5cdF07XG59O1xuXG4vKipcbiAqIENoZWNrcyBhbmQgY2FsbHMgdGhlIHBhcmVudCBjb21wb25lbnQncyBfc3VzcGVuZGVkIG1ldGhvZCwgcGFzc2luZyBpbiB0aGVcbiAqIHN1c3BlbmRlZCB2bm9kZS4gVGhpcyBpcyBhIHdheSBmb3IgYSBwYXJlbnQgKGUuZy4gU3VzcGVuc2VMaXN0KSB0byBnZXQgbm90aWZpZWRcbiAqIHRoYXQgb25lIG9mIGl0cyBjaGlsZHJlbi9kZXNjZW5kYW50cyBzdXNwZW5kZWQuXG4gKlxuICogVGhlIHBhcmVudCBNQVkgcmV0dXJuIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGdldCBjYWxsZWQgd2hlbiB0aGVcbiAqIHN1c3BlbnNpb24gcmVzb2x2ZXMsIG5vdGlmeWluZyB0aGUgcGFyZW50IG9mIHRoZSBmYWN0LlxuICogTW9yZW92ZXIsIHRoZSBjYWxsYmFjayBnZXRzIGZ1bmN0aW9uIGB1bnN1c3BlbmRgIGFzIGEgcGFyYW1ldGVyLiBUaGUgcmVzb2x2ZWRcbiAqIGNoaWxkIGRlc2NlbmRhbnQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHVuc3VzcGVuZGVkIHVudGlsIGB1bnN1c3BlbmRgIGdldHMgY2FsbGVkLlxuICogVGhpcyBpcyBhIHdheSBmb3IgdGhlIHBhcmVudCB0byBkZWxheSB1bnN1c3BlbmRpbmcuXG4gKlxuICogSWYgdGhlIHBhcmVudCBkb2VzIG5vdCByZXR1cm4gYSBjYWxsYmFjayB0aGVuIHRoZSByZXNvbHZlZCB2bm9kZVxuICogZ2V0cyB1bnN1c3BlbmRlZCBpbW1lZGlhdGVseSB3aGVuIGl0IHJlc29sdmVzLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcmV0dXJucyB7KCh1bnN1c3BlbmQ6ICgpID0+IHZvaWQpID0+IHZvaWQpP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1c3BlbmRlZCh2bm9kZSkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCA9IHZub2RlLl9wYXJlbnQuX2NvbXBvbmVudDtcblx0cmV0dXJuIGNvbXBvbmVudCAmJiBjb21wb25lbnQuX3N1c3BlbmRlZCAmJiBjb21wb25lbnQuX3N1c3BlbmRlZCh2bm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5KGxvYWRlcikge1xuXHRsZXQgcHJvbTtcblx0bGV0IGNvbXBvbmVudDtcblx0bGV0IGVycm9yO1xuXG5cdGZ1bmN0aW9uIExhenkocHJvcHMpIHtcblx0XHRpZiAoIXByb20pIHtcblx0XHRcdHByb20gPSBsb2FkZXIoKTtcblx0XHRcdHByb20udGhlbihcblx0XHRcdFx0ZXhwb3J0cyA9PiB7XG5cdFx0XHRcdFx0Y29tcG9uZW50ID0gZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblxuXHRcdGlmICghY29tcG9uZW50KSB7XG5cdFx0XHR0aHJvdyBwcm9tO1xuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpO1xuXHR9XG5cblx0TGF6eS5kaXNwbGF5TmFtZSA9ICdMYXp5Jztcblx0TGF6eS5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0cmV0dXJuIExhenk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHRvQ2hpbGRBcnJheSB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzdXNwZW5kZWQgfSBmcm9tICcuL3N1c3BlbnNlLmpzJztcblxuLy8gSW5kZXhlcyB0byBsaW5rZWQgbGlzdCBub2RlcyAobm9kZXMgYXJlIHN0b3JlZCBhcyBhcnJheXMgdG8gc2F2ZSBieXRlcykuXG5jb25zdCBTVVNQRU5ERURfQ09VTlQgPSAwO1xuY29uc3QgUkVTT0xWRURfQ09VTlQgPSAxO1xuY29uc3QgTkVYVF9OT0RFID0gMjtcblxuLy8gSGF2aW5nIGN1c3RvbSBpbmhlcml0YW5jZSBpbnN0ZWFkIG9mIGEgY2xhc3MgaGVyZSBzYXZlcyBhIGxvdCBvZiBieXRlcy5cbmV4cG9ydCBmdW5jdGlvbiBTdXNwZW5zZUxpc3QoKSB7XG5cdHRoaXMuX25leHQgPSBudWxsO1xuXHR0aGlzLl9tYXAgPSBudWxsO1xufVxuXG4vLyBNYXJrIG9uZSBvZiBjaGlsZCdzIGVhcmxpZXIgc3VzcGVuc2lvbnMgYXMgcmVzb2x2ZWQuXG4vLyBTb21lIHBlbmRpbmcgY2FsbGJhY2tzIG1heSBiZWNvbWUgY2FsbGFibGUgZHVlIHRvIHRoaXNcbi8vIChlLmcuIHRoZSBsYXN0IHN1c3BlbmRlZCBkZXNjZW5kYW50IGdldHMgcmVzb2x2ZWQgd2hlblxuLy8gcmV2ZWFsT3JkZXIgPT09ICd0b2dldGhlcicpLiBQcm9jZXNzIHRob3NlIGNhbGxiYWNrcyBhcyB3ZWxsLlxuY29uc3QgcmVzb2x2ZSA9IChsaXN0LCBjaGlsZCwgbm9kZSkgPT4ge1xuXHRpZiAoKytub2RlW1JFU09MVkVEX0NPVU5UXSA9PT0gbm9kZVtTVVNQRU5ERURfQ09VTlRdKSB7XG5cdFx0Ly8gVGhlIG51bWJlciBhIGNoaWxkIChvciBhbnkgb2YgaXRzIGRlc2NlbmRhbnRzKSBoYXMgYmVlbiBzdXNwZW5kZWRcblx0XHQvLyBtYXRjaGVzIHRoZSBudW1iZXIgb2YgdGltZXMgaXQncyBiZWVuIHJlc29sdmVkLiBUaGVyZWZvcmUgd2Vcblx0XHQvLyBtYXJrIHRoZSBjaGlsZCBhcyBjb21wbGV0ZWx5IHJlc29sdmVkIGJ5IGRlbGV0aW5nIGl0IGZyb20gLl9tYXAuXG5cdFx0Ly8gVGhpcyBpcyB1c2VkIHRvIGZpZ3VyZSBvdXQgd2hlbiAqYWxsKiBjaGlsZHJlbiBoYXZlIGJlZW4gY29tcGxldGVseVxuXHRcdC8vIHJlc29sdmVkIHdoZW4gcmV2ZWFsT3JkZXIgaXMgJ3RvZ2V0aGVyJy5cblx0XHRsaXN0Ll9tYXAuZGVsZXRlKGNoaWxkKTtcblx0fVxuXG5cdC8vIElmIHJldmVhbE9yZGVyIGlzIGZhbHN5IHRoZW4gd2UgY2FuIGRvIGFuIGVhcmx5IGV4aXQsIGFzIHRoZVxuXHQvLyBjYWxsYmFja3Mgd29uJ3QgZ2V0IHF1ZXVlZCBpbiB0aGUgbm9kZSBhbnl3YXkuXG5cdC8vIElmIHJldmVhbE9yZGVyIGlzICd0b2dldGhlcicgdGhlbiBhbHNvIGRvIGFuIGVhcmx5IGV4aXRcblx0Ly8gaWYgYWxsIHN1c3BlbmRlZCBkZXNjZW5kYW50cyBoYXZlIG5vdCB5ZXQgYmVlbiByZXNvbHZlZC5cblx0aWYgKFxuXHRcdCFsaXN0LnByb3BzLnJldmVhbE9yZGVyIHx8XG5cdFx0KGxpc3QucHJvcHMucmV2ZWFsT3JkZXJbMF0gPT09ICd0JyAmJiBsaXN0Ll9tYXAuc2l6ZSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gV2FsayB0aGUgY3VycmVudGx5IHN1c3BlbmRlZCBjaGlsZHJlbiBpbiBvcmRlciwgY2FsbGluZyB0aGVpclxuXHQvLyBzdG9yZWQgY2FsbGJhY2tzIG9uIHRoZSB3YXkuIFN0b3AgaWYgd2UgZW5jb3VudGVyIGEgY2hpbGQgdGhhdFxuXHQvLyBoYXMgbm90IGJlZW4gY29tcGxldGVseSByZXNvbHZlZCB5ZXQuXG5cdG5vZGUgPSBsaXN0Ll9uZXh0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdHdoaWxlIChub2RlLmxlbmd0aCA+IDMpIHtcblx0XHRcdG5vZGUucG9wKCkoKTtcblx0XHR9XG5cdFx0aWYgKG5vZGVbUkVTT0xWRURfQ09VTlRdIDwgbm9kZVtTVVNQRU5ERURfQ09VTlRdKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0bGlzdC5fbmV4dCA9IG5vZGUgPSBub2RlW05FWFRfTk9ERV07XG5cdH1cbn07XG5cbi8vIFRoaW5ncyB3ZSBkbyBoZXJlIHRvIHNhdmUgc29tZSBieXRlcyBidXQgYXJlIG5vdCBwcm9wZXIgSlMgaW5oZXJpdGFuY2U6XG4vLyAtIGNhbGwgYG5ldyBDb21wb25lbnQoKWAgYXMgdGhlIHByb3RvdHlwZVxuLy8gLSBkbyBub3Qgc2V0IGBTdXNwZW5zZS5wcm90b3R5cGUuY29uc3RydWN0b3JgIHRvIGBTdXNwZW5zZWBcblN1c3BlbnNlTGlzdC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUuX3N1c3BlbmRlZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG5cdGNvbnN0IGxpc3QgPSB0aGlzO1xuXHRjb25zdCBkZWxlZ2F0ZWQgPSBzdXNwZW5kZWQobGlzdC5fdm5vZGUpO1xuXG5cdGxldCBub2RlID0gbGlzdC5fbWFwLmdldChjaGlsZCk7XG5cdG5vZGVbU1VTUEVOREVEX0NPVU5UXSsrO1xuXG5cdHJldHVybiB1bnN1c3BlbmQgPT4ge1xuXHRcdGNvbnN0IHdyYXBwZWRVbnN1c3BlbmQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIWxpc3QucHJvcHMucmV2ZWFsT3JkZXIpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRoZSB1bmRlZmluZWQgKGZhbHN5KSByZXZlYWxPcmRlciwgYXMgdGhlcmVcblx0XHRcdFx0Ly8gaXMgbm8gbmVlZCB0byBjb29yZGluYXRlIGEgc3BlY2lmaWMgb3JkZXIgb3IgdW5zdXNwZW5kcy5cblx0XHRcdFx0dW5zdXNwZW5kKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub2RlLnB1c2godW5zdXNwZW5kKTtcblx0XHRcdFx0cmVzb2x2ZShsaXN0LCBjaGlsZCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpZiAoZGVsZWdhdGVkKSB7XG5cdFx0XHRkZWxlZ2F0ZWQod3JhcHBlZFVuc3VzcGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdyYXBwZWRVbnN1c3BlbmQoKTtcblx0XHR9XG5cdH07XG59O1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHByb3BzKSB7XG5cdHRoaXMuX25leHQgPSBudWxsO1xuXHR0aGlzLl9tYXAgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuXHRpZiAocHJvcHMucmV2ZWFsT3JkZXIgJiYgcHJvcHMucmV2ZWFsT3JkZXJbMF0gPT09ICdiJykge1xuXHRcdC8vIElmIG9yZGVyID09PSAnYmFja3dhcmRzJyAob3IsIHdlbGwsIGFueXRoaW5nIHN0YXJ0aW5nIHdpdGggYSAnYicpXG5cdFx0Ly8gdGhlbiBmbGlwIHRoZSBjaGlsZCBsaXN0IGFyb3VuZCBzbyB0aGF0IHRoZSBsYXN0IGNoaWxkIHdpbGwgYmVcblx0XHQvLyB0aGUgZmlyc3QgaW4gdGhlIGxpbmtlZCBsaXN0LlxuXHRcdGNoaWxkcmVuLnJldmVyc2UoKTtcblx0fVxuXHQvLyBCdWlsZCB0aGUgbGlua2VkIGxpc3QuIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gaW4gcmV2ZXJzZSBvcmRlclxuXHQvLyBzbyB0aGF0IGBfbmV4dGAgcG9pbnRzIHRvIHRoZSBmaXJzdCBsaW5rZWQgbGlzdCBub2RlIHRvIGJlIHJlc29sdmVkLlxuXHRmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdC8vIENyZWF0ZSBhIG5ldyBsaW5rZWQgbGlzdCBub2RlIGFzIGFuIGFycmF5IG9mIGZvcm06XG5cdFx0Ly8gXHRbc3VzcGVuZGVkX2NvdW50LCByZXNvbHZlZF9jb3VudCwgbmV4dF9ub2RlXVxuXHRcdC8vIHdoZXJlIHN1c3BlbmRlZF9jb3VudCBhbmQgcmVzb2x2ZWRfY291bnQgYXJlIG51bWVyaWMgY291bnRlcnMgZm9yXG5cdFx0Ly8ga2VlcGluZyB0cmFjayBob3cgbWFueSB0aW1lcyBhIG5vZGUgaGFzIGJlZW4gc3VzcGVuZGVkIGFuZCByZXNvbHZlZC5cblx0XHQvL1xuXHRcdC8vIE5vdGUgdGhhdCBzdXNwZW5kZWRfY291bnQgc3RhcnRzIGZyb20gMSBpbnN0ZWFkIG9mIDAsIHNvIHdlIGNhbiBibG9ja1xuXHRcdC8vIHByb2Nlc3NpbmcgY2FsbGJhY2tzIHVudGlsIGNvbXBvbmVudERpZE1vdW50IGhhcyBiZWVuIGNhbGxlZC4gSW4gYSBzZW5zZVxuXHRcdC8vIG5vZGUgaXMgc3VzcGVuZGVkIGF0IGxlYXN0IHVudGlsIGNvbXBvbmVudERpZE1vdW50IGdldHMgY2FsbGVkIVxuXHRcdC8vXG5cdFx0Ly8gUGVuZGluZyBjYWxsYmFja3MgYXJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGU6XG5cdFx0Ly8gXHRbc3VzcGVuZGVkX2NvdW50LCByZXNvbHZlZF9jb3VudCwgbmV4dF9ub2RlLCBjYWxsYmFja18wLCBjYWxsYmFja18xLCAuLi5dXG5cdFx0dGhpcy5fbWFwLnNldChjaGlsZHJlbltpXSwgKHRoaXMuX25leHQgPSBbMSwgMCwgdGhpcy5fbmV4dF0pKTtcblx0fVxuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59O1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IFN1c3BlbnNlTGlzdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhZnRlciBtb3VudGluZyBmb3IgdHdvIHJlYXNvbnM6XG5cdC8vIDEuIEFzIGVhY2ggbm9kZVtTVVNQRU5ERURfQ09VTlRdIHN0YXJ0cyBmcm9tIDEsIHRoaXMgaXRlcmF0aW9uIGluY3JlYXNlc1xuXHQvLyAgICBlYWNoIG5vZGVbUkVMRUFTRURfQ09VTlRdIGJ5IDEsIHRoZXJlZm9yZSBiYWxhbmNpbmcgdGhlIGNvdW50ZXJzLlxuXHQvLyAgICBUaGUgbm9kZXMgY2FuIG5vdyBiZSBjb21wbGV0ZWx5IGNvbnN1bWVkIGZyb20gdGhlIGxpbmtlZCBsaXN0LlxuXHQvLyAyLiBIYW5kbGUgbm9kZXMgdGhhdCBtaWdodCBoYXZlIGdvdHRlbiByZXNvbHZlZCBiZXR3ZWVuIHJlbmRlciBhbmRcblx0Ly8gICAgY29tcG9uZW50RGlkTW91bnQuXG5cdHRoaXMuX21hcC5mb3JFYWNoKChub2RlLCBjaGlsZCkgPT4ge1xuXHRcdHJlc29sdmUodGhpcywgY2hpbGQsIG5vZGUpO1xuXHR9KTtcbn07XG4iLCJpbXBvcnQge1xuXHRyZW5kZXIgYXMgcHJlYWN0UmVuZGVyLFxuXHRoeWRyYXRlIGFzIHByZWFjdEh5ZHJhdGUsXG5cdG9wdGlvbnMsXG5cdHRvQ2hpbGRBcnJheSxcblx0Q29tcG9uZW50XG59IGZyb20gJ3ByZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSRUFDVF9FTEVNRU5UX1RZUEUgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcblx0MHhlYWM3O1xuXG5jb25zdCBDQU1FTF9QUk9QUyA9IC9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8aW1hZ2V8bGV0dGVyfGxpZ2h0aW5nfG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxwb2ludGVyfHNoYXBlfHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHRyYW5zZm9ybXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vO1xuXG5jb25zdCBJU19ET00gPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBJbnB1dCB0eXBlcyBmb3Igd2hpY2ggb25jaGFuZ2Ugc2hvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgdG8gb25pbnB1dC5cbi8vIHR5cGU9XCJmaWxlfGNoZWNrYm94fHJhZGlvXCIsIHBsdXMgXCJyYW5nZVwiIGluIElFMTEuXG4vLyAoSUUxMSBkb2Vzbid0IHN1cHBvcnQgU3ltYm9sLCB3aGljaCB3ZSB1c2UgaGVyZSB0byB0dXJuIGByYWRgIGludG8gYHJhYCB3aGljaCBtYXRjaGVzIFwicmFuZ2VcIilcbmNvbnN0IG9uQ2hhbmdlSW5wdXRUeXBlID0gdHlwZSA9PlxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT0gJ3N5bWJvbCdcblx0XHQ/IC9maWx8Y2hlfHJhZC9pXG5cdFx0OiAvZmlsfGNoZXxyYS9pXG5cdCkudGVzdCh0eXBlKTtcblxuLy8gU29tZSBsaWJyYXJpZXMgbGlrZSBgcmVhY3QtdmlydHVhbGl6ZWRgIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHRoaXMuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLy8gYFVOU0FGRV8qYCBsaWZlY3ljbGUgaG9va3Ncbi8vIFByZWFjdCBvbmx5IGV2ZXIgaW52b2tlcyB0aGUgdW5wcmVmaXhlZCBtZXRob2RzLlxuLy8gSGVyZSB3ZSBwcm92aWRlIGEgYmFzZSBcImZhbGxiYWNrXCIgaW1wbGVtZW50YXRpb24gdGhhdCBjYWxscyBhbnkgZGVmaW5lZCBVTlNBRkVfIHByZWZpeGVkIG1ldGhvZC5cbi8vIC0gSWYgYSBjb21wb25lbnQgZGVmaW5lcyBpdHMgb3duIGBjb21wb25lbnREaWRNb3VudCgpYCAoaW5jbHVkaW5nIHZpYSBkZWZpbmVQcm9wZXJ0eSksIHVzZSB0aGF0LlxuLy8gLSBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGBVTlNBRkVfY29tcG9uZW50RGlkTW91bnQoKWAsIGBjb21wb25lbnREaWRNb3VudGAgaXMgdGhlIGFsaWFzIGdldHRlci9zZXR0ZXIuXG4vLyAtIElmIGFueXRoaW5nIGFzc2lnbnMgdG8gYW4gYFVOU0FGRV8qYCBwcm9wZXJ0eSwgdGhlIGFzc2lnbm1lbnQgaXMgZm9yd2FyZGVkIHRvIHRoZSB1bnByZWZpeGVkIHByb3BlcnR5LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE5NDFcbltcblx0J2NvbXBvbmVudFdpbGxNb3VudCcsXG5cdCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0J2NvbXBvbmVudFdpbGxVcGRhdGUnXG5dLmZvckVhY2goa2V5ID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIGtleSwge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snVU5TQUZFXycgKyBrZXldO1xuXHRcdH0sXG5cdFx0c2V0KHYpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0dmFsdWU6IHZcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuLyoqXG4gKiBQcm94eSByZW5kZXIoKSBzaW5jZSBSZWFjdCByZXR1cm5zIGEgQ29tcG9uZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFZOb2RlIHRyZWUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudCBET00gbm9kZSB0byByZW5kZXIgdm5vZGUgdHJlZSBpbnRvXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBhZnRlciByZW5kZXJpbmdcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQgfCBudWxsfSBUaGUgcm9vdCBjb21wb25lbnQgcmVmZXJlbmNlIG9yIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50LCBjYWxsYmFjaykge1xuXHQvLyBSZWFjdCBkZXN0cm95cyBhbnkgZXhpc3RpbmcgRE9NIG5vZGVzLCBzZWUgIzE3Mjdcblx0Ly8gLi4uYnV0IG9ubHkgb24gdGhlIGZpcnN0IHJlbmRlciwgc2VlICMxODI4XG5cdGlmIChwYXJlbnQuX2NoaWxkcmVuID09IG51bGwpIHtcblx0XHRwYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblx0fVxuXG5cdHByZWFjdFJlbmRlcih2bm9kZSwgcGFyZW50KTtcblx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuXG5cdHJldHVybiB2bm9kZSA/IHZub2RlLl9jb21wb25lbnQgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50LCBjYWxsYmFjaykge1xuXHRwcmVhY3RIeWRyYXRlKHZub2RlLCBwYXJlbnQpO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuIHZub2RlID8gdm5vZGUuX2NvbXBvbmVudCA6IG51bGw7XG59XG5cbmxldCBvbGRFdmVudEhvb2sgPSBvcHRpb25zLmV2ZW50O1xub3B0aW9ucy5ldmVudCA9IGUgPT4ge1xuXHRpZiAob2xkRXZlbnRIb29rKSBlID0gb2xkRXZlbnRIb29rKGUpO1xuXHRlLnBlcnNpc3QgPSBlbXB0eTtcblx0ZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IGlzUHJvcGFnYXRpb25TdG9wcGVkO1xuXHRlLmlzRGVmYXVsdFByZXZlbnRlZCA9IGlzRGVmYXVsdFByZXZlbnRlZDtcblx0cmV0dXJuIChlLm5hdGl2ZUV2ZW50ID0gZSk7XG59O1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmZ1bmN0aW9uIGlzUHJvcGFnYXRpb25TdG9wcGVkKCkge1xuXHRyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGU7XG59XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdFByZXZlbnRlZCgpIHtcblx0cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZDtcbn1cblxubGV0IGNsYXNzTmFtZURlc2NyaXB0b3IgPSB7XG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0Z2V0KCkge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzO1xuXHR9XG59O1xuXG5sZXQgb2xkVk5vZGVIb29rID0gb3B0aW9ucy52bm9kZTtcbm9wdGlvbnMudm5vZGUgPSB2bm9kZSA9PiB7XG5cdGxldCB0eXBlID0gdm5vZGUudHlwZTtcblx0bGV0IHByb3BzID0gdm5vZGUucHJvcHM7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcztcblxuXHQvLyBvbmx5IG5vcm1hbGl6ZSBwcm9wcyBvbiBFbGVtZW50IG5vZGVzXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRjb25zdCBub25DdXN0b21FbGVtZW50ID0gdHlwZS5pbmRleE9mKCctJykgPT09IC0xO1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgaSBpbiBwcm9wcykge1xuXHRcdFx0bGV0IHZhbHVlID0gcHJvcHNbaV07XG5cblx0XHRcdGlmIChJU19ET00gJiYgaSA9PT0gJ2NoaWxkcmVuJyAmJiB0eXBlID09PSAnbm9zY3JpcHQnKSB7XG5cdFx0XHRcdC8vIEVtdWxhdGUgUmVhY3QncyBiZWhhdmlvciBvZiBub3QgcmVuZGVyaW5nIHRoZSBjb250ZW50cyBvZiBub3NjcmlwdCB0YWdzIG9uIHRoZSBjbGllbnQuXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09PSAndmFsdWUnICYmICdkZWZhdWx0VmFsdWUnIGluIHByb3BzICYmIHZhbHVlID09IG51bGwpIHtcblx0XHRcdFx0Ly8gU2tpcCBhcHBseWluZyB2YWx1ZSBpZiBpdCBpcyBudWxsL3VuZGVmaW5lZCBhbmQgd2UgYWxyZWFkeSBzZXRcblx0XHRcdFx0Ly8gYSBkZWZhdWx0IHZhbHVlXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aSA9PT0gJ2RlZmF1bHRWYWx1ZScgJiZcblx0XHRcdFx0J3ZhbHVlJyBpbiBwcm9wcyAmJlxuXHRcdFx0XHRwcm9wcy52YWx1ZSA9PSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gYGRlZmF1bHRWYWx1ZWAgaXMgdHJlYXRlZCBhcyBhIGZhbGxiYWNrIGB2YWx1ZWAgd2hlbiBhIHZhbHVlIHByb3AgaXMgcHJlc2VudCBidXQgbnVsbC91bmRlZmluZWQuXG5cdFx0XHRcdC8vIGBkZWZhdWx0VmFsdWVgIGZvciBFbGVtZW50cyB3aXRoIG5vIHZhbHVlIHByb3AgaXMgdGhlIHNhbWUgYXMgdGhlIERPTSBkZWZhdWx0VmFsdWUgcHJvcGVydHkuXG5cdFx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0fSBlbHNlIGlmIChpID09PSAnZG93bmxvYWQnICYmIHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIENhbGxpbmcgYHNldEF0dHJpYnV0ZWAgd2l0aCBhIHRydXRoeSB2YWx1ZSB3aWxsIGxlYWQgdG8gaXQgYmVpbmdcblx0XHRcdFx0Ly8gcGFzc2VkIGFzIGEgc3RyaW5naWZpZWQgdmFsdWUsIGUuZy4gYGRvd25sb2FkPVwidHJ1ZVwiYC4gUmVhY3Rcblx0XHRcdFx0Ly8gY29udmVydHMgaXQgdG8gYW4gZW1wdHkgc3RyaW5nIGluc3RlYWQsIG90aGVyd2lzZSB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyB0aGUgZmlsZSBuYW1lIGFuZCB0aGUgZmlsZSB3aWxsIGJlIGNhbGxlZFxuXHRcdFx0XHQvLyBcInRydWVcIiB1cG9uIGRvd25sb2FkaW5nIGl0LlxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmICgvb25kb3VibGVjbGljay9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmRibGNsaWNrJztcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdC9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChpICsgdHlwZSkgJiZcblx0XHRcdFx0IW9uQ2hhbmdlSW5wdXRUeXBlKHByb3BzLnR5cGUpXG5cdFx0XHQpIHtcblx0XHRcdFx0aSA9ICdvbmlucHV0Jztcblx0XHRcdH0gZWxzZSBpZiAoL15vbmZvY3VzJC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmZvY3VzaW4nO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uYmx1ciQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25mb2N1c291dCc7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChub25DdXN0b21FbGVtZW50ICYmIENBTUVMX1BST1BTLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkucmVwbGFjZSgvW0EtWjAtOV0vZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgc3VwcG9ydCBmb3Igb25JbnB1dCBhbmQgb25DaGFuZ2UsIHNlZSAjMzU2MVxuXHRcdFx0Ly8gaWYgd2UgaGF2ZSBhbiBvbmlucHV0IHByb3AgYWxyZWFkeSBjaGFuZ2UgaXQgdG8gb25pbnB1dENhcHR1cmVcblx0XHRcdGlmICgvXm9uaW5wdXQkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldKSB7XG5cdFx0XHRcdFx0aSA9ICdvbmlucHV0Q2FwdHVyZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHN1cHBvcnQgZm9yIGFycmF5IHNlbGVjdCB2YWx1ZXM6IDxzZWxlY3QgbXVsdGlwbGUgdmFsdWU9e1tdfSAvPlxuXHRcdGlmIChcblx0XHRcdHR5cGUgPT0gJ3NlbGVjdCcgJiZcblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5tdWx0aXBsZSAmJlxuXHRcdFx0QXJyYXkuaXNBcnJheShub3JtYWxpemVkUHJvcHMudmFsdWUpXG5cdFx0KSB7XG5cdFx0XHQvLyBmb3JFYWNoKCkgYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkLCB3aGljaCB3ZSBhYnVzZSBoZXJlIHRvIHVuc2V0IHRoZSB2YWx1ZSBwcm9wLlxuXHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPSAtMTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEFkZGluZyBzdXBwb3J0IGZvciBkZWZhdWx0VmFsdWUgaW4gc2VsZWN0IHRhZ1xuXHRcdGlmICh0eXBlID09ICdzZWxlY3QnICYmIG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wcy5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgIT0gLTE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZSA9PSBjaGlsZC5wcm9wcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dm5vZGUucHJvcHMgPSBub3JtYWxpemVkUHJvcHM7XG5cblx0XHRpZiAocHJvcHMuY2xhc3MgIT0gcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0XHRjbGFzc05hbWVEZXNjcmlwdG9yLmVudW1lcmFibGUgPSAnY2xhc3NOYW1lJyBpbiBwcm9wcztcblx0XHRcdGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkgbm9ybWFsaXplZFByb3BzLmNsYXNzID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbGl6ZWRQcm9wcywgJ2NsYXNzTmFtZScsIGNsYXNzTmFtZURlc2NyaXB0b3IpO1xuXHRcdH1cblx0fVxuXG5cdHZub2RlLiQkdHlwZW9mID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuXG5cdGlmIChvbGRWTm9kZUhvb2spIG9sZFZOb2RlSG9vayh2bm9kZSk7XG59O1xuXG4vLyBPbmx5IG5lZWRlZCBmb3IgcmVhY3QtcmVsYXlcbmxldCBjdXJyZW50Q29tcG9uZW50O1xuY29uc3Qgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xub3B0aW9ucy5fcmVuZGVyID0gZnVuY3Rpb24odm5vZGUpIHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikge1xuXHRcdG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cdH1cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG59O1xuXG4vLyBUaGlzIGlzIGEgdmVyeSB2ZXJ5IHByaXZhdGUgaW50ZXJuYWwgZnVuY3Rpb24gZm9yIFJlYWN0IGl0XG4vLyBpcyB1c2VkIHRvIHNvcnQtb2YgZG8gcnVudGltZSBkZXBlbmRlbmN5IGluamVjdGlvbi4gU28gZmFyXG4vLyBvbmx5IGByZWFjdC1yZWxheWAgbWFrZXMgdXNlIG9mIGl0LiBJdCB1c2VzIGl0IHRvIHJlYWQgdGhlXG4vLyBjb250ZXh0IHZhbHVlLlxuZXhwb3J0IGNvbnN0IF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0ge1xuXHRSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiB7XG5cdFx0Y3VycmVudDoge1xuXHRcdFx0cmVhZENvbnRleHQoY29udGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudENvbXBvbmVudC5fZ2xvYmFsQ29udGV4dFtjb250ZXh0Ll9pZF0ucHJvcHMudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuIiwiXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnQsIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50UHJvcHM8UCwgRT4gPSBPbWl0PFAsIFwicmVmXCI+ICYgeyByZWY/OiBSZWY8RT4gfVxyXG50eXBlIEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnQ8UCwgRT4gPSAocDogRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+KSA9PiBWTm9kZTxGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50UHJvcHM8UCwgRT4+XHJcblxyXG50eXBlIEVsZW1lbnRGcm9tUHJvcHM8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGFueT4+ID0gUCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGluZmVyIEU+ID8gRSA6IEV2ZW50VGFyZ2V0O1xyXG50eXBlIFByb3BzRnJvbUNvbXBvbmVudDxDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxhbnk+PiA9IEMgZXh0ZW5kcyBGdW5jdGlvbmFsQ29tcG9uZW50PGluZmVyIFA+ID8gUCA6IHVua25vd247XHJcblxyXG4vKipcclxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxyXG4gKiBOYW1lbHkgaXQgaW52b2x2ZXMgZGUtZ3Vua2luZyB0aGUgdHlwZSBzeXN0ZW0gYnkgbGV0dGluZyB1cyByZXR1cm4gKmdlbmVyaWMqIGZ1bmN0aW9uIGFuZCBwbGF5aW5nIG5pY2Ugd2l0aCBSZWFjdC4gSW4gYWxsIG90aGVyIHJlc3BlY3RzLCBpdCBhY3RzIGxpa2UgYGZvcndhcmRSZWZgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmPEMgZXh0ZW5kcyA8RSBleHRlbmRzIEhUTUxFbGVtZW50PihwOiBhbnksIHJlZjogUmVmPEU+KSA9PiAoVk5vZGU8YW55PiB8IG51bGwpPihDb21wb25lbnQ6IEMpIHtcclxuICAgIHR5cGUgUCA9IFByb3BzRnJvbUNvbXBvbmVudDxDPjtcclxuXHJcblxyXG4gICAgY29uc3QgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudCBhcyBDO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG4vKiogVGFrZXMgYSBuZXcgdmFsdWUgb3IgYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgYSB2YWx1ZSwgdW5saWtlIGBPblBhc3NpdmVTdGF0ZUNoYW5nZWAgd2hpY2ggcmVhY3RzIHRvIHRob3NlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIFBhc3NpdmVTdGF0ZVVwZGF0ZXI8UywgUj4gPSAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKTsvL1tSXSBleHRlbmRzIFtuZXZlcl0/ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbj86IFIpID0+IHZvaWQpIDogKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uOiBSKSA9PiB2b2lkKTtcbi8qKiBSZXNwb25kcyB0byBhIGNoYW5nZSBpbiBhIHZhbHVlLCB1bmxpa2UgYFBhc3NpdmVTdGF0ZVVwZGF0ZXJgIHdoaWNoIGNhdXNlcyB0aGUgdXBkYXRlcyAqL1xuZXhwb3J0IHR5cGUgT25QYXNzaXZlU3RhdGVDaGFuZ2U8UywgUj4gPSAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSkgOiAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbjogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKTtcblxuXG5cbi8qKlxuICogRGVidWcgaG9vay5cbiAqIFxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cbiAqIFxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eTxUIGV4dGVuZHMgYW55W10+KHBhcmVudEhvb2tOYW1lOiBzdHJpbmcsIC4uLnZhbHVlczogVCkge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmPEFycmF5PFQ+PihbXSk7XG4gICAgY29uc3Qgc2hvd25FcnJvciA9IHVzZVJlZjxBcnJheTxib29sZWFuPj4oW10pO1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoIGFzIGFueSwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuXG5cbiAgICBmdW5jdGlvbiB1c2VIZWxwZXI8VSBleHRlbmRzIFQ+KHZhbHVlOiBVLCBpOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpICsgMTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGhvb2sgJHtwYXJlbnRIb29rTmFtZX0gcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2l9LWluZGV4ZWQgYXJndW1lbnQgKCR7aSA+PSAwPyBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbaV0pIDogXCJ0aGUgbnVtYmVyIG9mIHN1cHBvc2VkbHkgc3RhYmxlIGVsZW1lbnRzXCJ9KS5gKTtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGY6ICgpID0+IHZvaWQpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxuICogXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqIFxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqIFxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKiBcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICogXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBCeSBkZWZhdWx0LCBjaGFuZ2VzIHRvIHBhc3NpdmUgc3RhdGUgYXJlIGRlbGF5ZWQgYnkgb25lIHRpY2sgc28gdGhhdCB3ZSBvbmx5IGNoZWNrIGZvciBjaGFuZ2VzIGluIGEgc2ltaWxhciB3YXkgdG8gUHJlYWN0LiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgdG8sIGZvciBleGFtcGxlLCBhbHdheXMgcnVuIGltbWVkaWF0ZWx5IGluc3RlYWQuXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZTxULCBSPihvbkNoYW5nZTogdW5kZWZpbmVkIHwgbnVsbCB8IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQsIFI+LCBnZXRJbml0aWFsVmFsdWU/OiAoKSA9PiBULCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZz86IHR5cGVvZiBkZWJvdW5jZVJlbmRlcmluZyk6IHJlYWRvbmx5IFtnZXRTdGF0ZVN0YWJsZTogKCkgPT4gVCwgc2V0U3RhdGVTdGFibGU6IFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj5dIHtcblxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmPFQgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCByZWFzb25SZWYgPSB1c2VSZWY8UiB8IHR5cGVvZiBVbnNldD4oVW5zZXQpO1xuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0ID0gdXNlUmVmPFQgfCAodHlwZW9mIFVuc2V0KT4oVW5zZXQpO1xuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZjx1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk+KHVuZGVmaW5lZCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUGFzc2l2ZVN0YXRlXCIsIG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUsIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nKTtcblxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkISkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG5cbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCEgOiB2YWx1ZVJlZi5jdXJyZW50ISkgYXMgVDtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG5cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2s8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj4oKGFyZzogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlswXSwgcmVhc29uOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+WzFdKSA9PiB7XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcyBvZiBhbnl0aGluZyBlbHNlLCBmaWd1cmUgb3V0IHdoYXQgb3VyIG5leHQgdmFsdWUgaXMgYWJvdXQgdG8gYmUuXG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IChhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpIDogYXJnKTtcblxuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID09PSBVbnNldCAmJiBuZXh0VmFsdWUgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IHJlcXVlc3QgdG8gY2hhbmdlIHRoaXMgdmFsdWUuXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgcmVxdWVzdCBpbW1lZGlhdGVseSwgdGhlbiBxdWV1ZSB1cCB0aGUgb25DaGFuZ2UgZnVuY3Rpb25cblxuICAgICAgICAgICAgLy8gU2F2ZSBvdXIgY3VycmVudCB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBjb21wYXJlIGFnYWluc3QgaXQgbGF0ZXJcbiAgICAgICAgICAgIC8vIChpZiB3ZSBmbGlwIGJhY2sgdG8gdGhpcyBzdGF0ZSwgdGhlbiB3ZSB3b24ndCBzZW5kIHRoZSBvbkNoYW5nZSBmdW5jdGlvbilcbiAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSB2YWx1ZVJlZi5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uIGFzIFI7XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRoZSBhY3R1YWwgY2hlY2sgYW5kIGludm9jYXRpb24gb2Ygb25DaGFuZ2UgbGF0ZXIgdG8gbGV0IGVmZmVjdHMgc2V0dGxlXG4gICAgICAgICAgICAoY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgPz8gZGVib3VuY2VSZW5kZXJpbmcpKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0UmVhc29uID0gcmVhc29uUmVmLmN1cnJlbnQhIGFzIFI7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dERlcCA9IHZhbHVlUmVmLmN1cnJlbnQhIGFzIFQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRlcCA9IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgIT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBmaW5pc2hlZCB3aXRoIGV2ZXJ5dGhpbmcsIHNvIG1hcmsgdXMgYXMgYmVpbmcgb24gYSBjbGVhbiBzbGF0ZSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gVW5zZXQ7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdIGFzIGNvbnN0O1xufVxuXG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuXG4vLyBFYXN5IGNvbnN0YW50cyBmb3IgZ2V0SW5pdGlhbFZhbHVlXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5GYWxzZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5VbmRlZmluZWQoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5aZXJvKCkgeyByZXR1cm4gMDsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PFQ+KHQ6IFQpIHsgcmV0dXJuIHQ7IH0gLy8gS2luZCBvZiBhbiBleHRyYSwgYnV0IGl0J3MgdXNlZnVsIGluIG90aGVyIHBsYWNlcyBhbnl3YXlcblxuLyoqIFxuICogQW4gYWx0ZXJuYXRpdmUgdG8gdXNlIGZvciBgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmdgIHRoYXQgY2F1c2VzIGB1c2VQYXNzaXZlU3RhdGVgIHRvIHJ1biBjaGFuZ2VzIHdpdGhvdXQgd2FpdGluZyBhIHRpY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5JbW1lZGlhdGVseShmOiAoKSA9PiB2b2lkKSB7IGYoKTsgfSIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBvcHRpb25zLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEVmZmVjdENhbGxiYWNrLCBJbnB1dHMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cblxuXG5jb25zdCBUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlfLVwiO1xuXG5mdW5jdGlvbiBiYXNlNjQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xufVxuXG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICogXG4gKiBcbiAqIChUaGlzIGlzIGhlcmUsIGluIHRoaXMgcGFydGljdWxhciBmaWxlLCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAqIHdpdGhvdXQgYWxzbyBtYWtpbmcgYSB1dGlsaXRpZXMgZmlsZS5cbiAqIE9uY2Ugd2UgY2FuIHJlbW92ZSB0aGlzIGhvb2ssIHdlIGNhbiBwdXQgdGhpcyBmdW5jdGlvbiBiYWNrIHdpdGggdXNlUmFuZG9tSWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeD86IHN0cmluZykge1xuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xufVxuXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXA8c3RyaW5nLCBJbnB1dHMgfCB1bmRlZmluZWQ+KCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXA8c3RyaW5nLCB7IGVmZmVjdDogRWZmZWN0Q2FsbGJhY2ssIGlucHV0cz86IElucHV0cywgY2xlYW51cDogbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWQgfCAoKCkgPT4gdm9pZCkgfT4oKTtcblxuXG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcblxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdIGFzICh2bm9kZTogVk5vZGUsIGNvbW1pdFF1ZXVlOiBDb21wb25lbnRbXSkgPT4gdm9pZDtcbmNvbnN0IG5ld0NvbW1pdDogdHlwZW9mIG9yaWdpbmFsQ29tbWl0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZWZmZWN0SW5mb10gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgZWZmZWN0SW5mby5pbnB1dHMpKSB7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXA/LigpO1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgZWZmZWN0SW5mby5pbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvUnVuLmNsZWFyKCk7XG4gICAgb3JpZ2luYWxDb21taXQ/LiguLi5hcmdzKTtcbn1cbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQgYXMgbmV2ZXJcblxuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKiBcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqIFxuICogQHBhcmFtIGVmZmVjdCBcbiAqIEBwYXJhbSBpbnB1dHMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0OiBFZmZlY3RDYWxsYmFjayB8IG51bGwsIGlucHV0cz86IElucHV0cykge1xuXG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cblxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIGlmIChlZmZlY3QpXG4gICAgICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICBlbHNlXG4gICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9LCBbaWRdKVxufVxuXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzPzogSW5wdXRzLCBuZXdBcmdzPzogSW5wdXRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgICAhb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG4gICAgKTtcbn0iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuXG5cbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqIFxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqIFxuICogQHBhcmFtIHZhbHVlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXI8VD4odmFsdWU6IFQpIHtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxUPihVbnNldCBhcyB1bmtub3duIGFzIFQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKCkgPT4geyByZWYuY3VycmVudCA9IHZhbHVlOyB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgYXMgdW5rbm93biA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cblxuXG4vKipcbiAqIExpa2UgYHVzZVN0YWJsZUdldHRlcmAsIGJ1dCAqKipyZXF1aXJlcyoqKiB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlIG9iamVjdCBpcyBhbHNvIHN0YWJsZSxcbiAqIGFuZCBpbiB0dXJuIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXRzZWxmIGlzIHN0YWJsZS5cbiAqIEBwYXJhbSB0IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVPYmplY3Q8VCBleHRlbmRzIHt9Pih0OiBUKTogVCB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbiIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xudHlwZSBDID0gaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2xhc3NOYW1lXCJdO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqIFxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxoc0NsYXNzOiBDLCBsaHNDbGFzc05hbWU6IEMsIHJoc0NsYXNzOiBDLCByaHNDbGFzc05hbWU6IEMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSlcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgUmVmLCBSZWZPYmplY3QgfSBmcm9tIFwicHJlYWN0XCI7XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlZjxUPihpbnN0YW5jZTogVCB8IG51bGwsIHJlZjogUmVmPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgKHJlZiBhcyBSZWZPYmplY3Q8VCB8IG51bGw+KS5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxocyBcbiAqIEBwYXJhbSByaHMgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihyaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdLCBsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdKSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQhO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzITtcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocyE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21iaW5lZChjdXJyZW50OiBFIHwgbnVsbCkge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcblxuZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZTogc3RyaW5nKTogaC5KU1guQ1NTUHJvcGVydGllcyB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICogXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdIHtcblxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgaWYgKCFsaHMgJiYgcmhzKVxuICAgICAgICAgICAgcmV0dXJuIHJocztcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMgYXMgc3RyaW5nKSwgcmhzKSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMgYXMgc3RyaW5nKSkgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzID8/IFwiXCJ9YCBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXG4gICAgICAgIC4uLihyaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbiAgICB9IGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xufVxuXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5cbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5cbi8qXG50eXBlIElzRW1wdHlPYmplY3Q8VD4gPSBba2V5b2YgVF0gZXh0ZW5kcyBbbmV2ZXJdPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCB0eXBlIEV4dHJhY3RlZFByb3BzPE8gZXh0ZW5kcyB7fT4gPSB7IFtLIGluIGtleW9mIE9dOiBQaWNrPE9bS10sIChcInByb3BzU3RhYmxlXCIgfCBcInByb3BzVW5zdGFibGVcIikgJiBrZXlvZiBPW0tdPiB9O1xuXG5jb25zdCBvOiBFeHRyYWN0ZWRQcm9wczxVc2VHcmlkTmF2aWdhdGlvblJvd1JldHVyblR5cGU8YW55LCBhbnk+PiA9IHtcbiAgICBhc0NoaWxkUm93T2ZUYWJsZToge1xuXG4gICAgfSxcbiAgICBhc1BhcmVudFJvd09mQ2VsbHM6IHt9XG59Ki9cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzI6IHR5cGVvZiBjb25zb2xlW1wibG9nXCJdKSB7XG4gICAgbG9nID0gbG9nMlxufVxuXG5cbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gKiBcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMiBcbiAqIEBwYXJhbSByaHMyIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wczxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KC4uLmFsbFByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTWVyZ2VkUHJvcHNcIiwgYWxsUHJvcHMubGVuZ3RoKTtcbiAgICBsZXQgcmV0OiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczI8RT4ocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IGtub3ducyA9IG5ldyBTZXQ8c3RyaW5nPihbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pXG5cbmZ1bmN0aW9uIG1lcmdlVW5rbm93bihrZXk6IHN0cmluZywgbGhzVmFsdWU6IHVua25vd24sIHJoc1ZhbHVlOiB1bmtub3duKSB7XG5cbiAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUgYXMgbmV2ZXIsIHJoc1ZhbHVlIGFzIG5ldmVyKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZCBhcyBuZXZlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKChyaHNWYWx1ZSBhcyBhbnkpID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcbiAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgIGxvZz8uKGBUaGUgcHJvcCBcIiR7a2V5fVwiIGNhbm5vdCBzaW11bHRhbmVvdXNseSBiZSB0aGUgdmFsdWVzICR7bGhzVmFsdWV9IGFuZCAke3Joc1ZhbHVlfS4gT25lIG11c3QgYmUgY2hvc2VuIG91dHNpZGUgb2YgdXNlTWVyZ2VkUHJvcHMuYCk7XG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4obGhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgcmhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPik6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+IHtcblxuICAgIFxuICAgIGNvbnN0IHJldDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gPSB7XG4gICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmczxFPihsaHNBbGwucmVmLCByaHNBbGwucmVmKSxcbiAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHNBbGwuc3R5bGUsIHJoc0FsbC5zdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHNBbGxbXCJjbGFzc1wiXSwgbGhzQWxsLmNsYXNzTmFtZSwgcmhzQWxsW1wiY2xhc3NcIl0sIHJoc0FsbC5jbGFzc05hbWUpLFxuICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzQWxsLmNoaWxkcmVuLCByaHNBbGwuY2hpbGRyZW4pLFxuICAgIH0gYXMgYW55O1xuXG4gICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5yZWY7XG4gICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LnN0eWxlO1xuICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgIGlmIChyZXRbXCJjbGFzc1wiXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0W1wiY2xhc3NcIl07XG4gICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LmNoaWxkcmVuO1xuXG4gICAgZm9yIChjb25zdCBsaHNLZXlVIGluIGxoc0FsbCkge1xuICAgICAgICBjb25zdCBsaHNLZXkgPSBsaHNLZXlVIGFzIGtleW9mIHR5cGVvZiBsaHNBbGw7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHJoc0tleVUgaW4gcmhzQWxsKSB7XG4gICAgICAgIGNvbnN0IHJoc0tleSA9IHJoc0tleVUgYXMga2V5b2YgdHlwZW9mIHJoc0FsbDtcbiAgICAgICAgaWYgKGtub3ducy5oYXMocmhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlVW5rbm93bihyaHNLZXksIHJldFtyaHNLZXldLCByaHNBbGxbcmhzS2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcblxufVxuXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9uczxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIFUgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4obGhzOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCwgcmhzOiBVIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuXG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuXG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuXG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQgZXh0ZW5kcyBFdmVudFRhcmdldD4ge1xuICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICAgICAgZ2V0RWxlbWVudCgpOiBUIHwgbnVsbDtcbiAgICAgICAgcHJvcHNTdGFibGU6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+O1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPiB7XG4gICAgcmVmRWxlbWVudFBhcmFtZXRlcnM6IHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlPzogT25QYXNzaXZlU3RhdGVDaGFuZ2U8VCB8IG51bGwsIG5ldmVyPjtcbiAgICAgICAgb25Nb3VudD86IChlbGVtZW50OiBUKSA9PiB2b2lkO1xuICAgICAgICBvblVubW91bnQ/OiAoZWxlbWVudDogVCkgPT4gdm9pZDtcbiAgICB9XG59XG5cblxuLypcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+KHI6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPEU+LCAuLi5vdGhlclByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSB7XG4gICAgcmV0dXJuIFtyLnJlZkVsZW1lbnRSZXR1cm4ucHJvcHNTdGFibGUsIC4uLm90aGVyUHJvcHNdO1xufSovXG5cbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsIFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKiBcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxuICogXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudDxUIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KGFyZ3M6IFVzZVJlZkVsZW1lbnRQYXJhbWV0ZXJzPFQ+KTogVXNlUmVmRWxlbWVudFJldHVyblR5cGU8VD4ge1xuICAgIGNvbnN0IHsgcmVmRWxlbWVudFBhcmFtZXRlcnM6IHsgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQgfSB9ID0gYXJncztcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VSZWZFbGVtZW50XCIsIG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50KTtcblxuICAgIC8vIENhbGxlZCAoaW5kaXJlY3RseSkgYnkgdGhlIHJlZiB0aGF0IHRoZSBlbGVtZW50IHJlY2VpdmVzLlxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUIHwgbnVsbCwgbmV2ZXI+PigoZSwgcHJldlZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBvbkVsZW1lbnRDaGFuZ2U/LihlLCBwcmV2VmFsdWUpO1xuICAgICAgICBpZiAocHJldlZhbHVlKVxuICAgICAgICAgICAgb25Vbm1vdW50Py4ocHJldlZhbHVlISk7XG5cbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBvbk1vdW50Py4oZSk7XG5cbiAgICAgICAgcmV0dXJuIGNsZWFudXA7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZTxUIHwgbnVsbCwgbmV2ZXI+KGhhbmRsZXIsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICBjb25zdCBwcm9wc1N0YWJsZSA9IHVzZVJlZjxoLkpTWC5IVE1MQXR0cmlidXRlczxUPj4oeyByZWY6IHNldEVsZW1lbnQgfSk7XG5cbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVmRWxlbWVudFJldHVybjoge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHByb3BzU3RhYmxlOiBwcm9wc1N0YWJsZS5jdXJyZW50XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogYEJsb2NraW5nRWxlbWVudHNgIG1hbmFnZXMgYSBzdGFjayBvZiBlbGVtZW50cyB0aGF0IGluZXJ0IHRoZSBpbnRlcmFjdGlvblxuICogb3V0c2lkZSB0aGVtLiBUaGUgdG9wIGVsZW1lbnQgaXMgdGhlIGludGVyYWN0aXZlIHBhcnQgb2YgdGhlIGRvY3VtZW50LlxuICogVGhlIHN0YWNrIGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIG1ldGhvZHMgYHB1c2gsIHJlbW92ZSwgcG9wYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbG9ja2luZ0VsZW1lbnRzIHtcbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuIFRoaXMgZW1wdGllc1xuICAgKiB0aGUgYmxvY2tpbmcgZWxlbWVudHNcbiAgICovXG4gIGRlc3RydWN0b3IoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIHRvcCBibG9ja2luZyBlbGVtZW50LlxuICAgKi9cbiAgdG9wOiBIVE1MRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBlbGVtZW50IHRvIHRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICovXG4gIHB1c2goZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nIGVsZW1lbnRzLiBSZXR1cm5zIHRydWUgaWYgdGhlXG4gICAqIGVsZW1lbnQgd2FzIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRvcCBibG9ja2luZyBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgKi9cbiAgcG9wKCk6IEhUTUxFbGVtZW50fG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgYSBibG9ja2luZyBlbGVtZW50LlxuICAgKi9cbiAgaGFzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzIGV4dGVuZHMgRG9jdW1lbnQge1xuICAkYmxvY2tpbmdFbGVtZW50czogQmxvY2tpbmdFbGVtZW50cztcbn1cblxuKCgpID0+IHtcbiAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcblxuICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcblxuICBpbnRlcmZhY2UgSW5lcnRhYmxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGluZXJ0PzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBJbnRlcm5hbFN0YXRlIHtcbiAgICBbX3NpYmxpbmdzVG9SZXN0b3JlXTogU2V0PE1heWJlSGFzSW50ZXJuYWxTdGF0ZT47XG4gICAgW19wYXJlbnRNT106IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIH1cbiAgaW50ZXJmYWNlIEhhc0ludGVybmFsU3RhdGUgZXh0ZW5kcyBJbmVydGFibGUsIEludGVybmFsU3RhdGUge31cbiAgaW50ZXJmYWNlIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSBleHRlbmRzIEluZXJ0YWJsZSwgUGFydGlhbDxJbnRlcm5hbFN0YXRlPiB7fVxuXG4gIC8qKlxuICAgKiBTaGFkeURPTSBzaGFkeSByb290cyBsb29rIGEgbG90IGxpa2UgcmVhbCBTaGFkb3dSb290cy4gVGhlIF9fc2hhZHkgcHJvcGVydHlcbiAgICogZ2l2ZXMgdGhlbSBhd2F5LCB0aG91Z2guXG4gICAqL1xuICBpbnRlcmZhY2UgTWF5YmVTaGFkeVJvb3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgICBfX3NoYWR5OiB1bmtub3duO1xuICAgIGhvc3Q6IEVsZW1lbnQ7XG4gIH1cblxuICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCBpbXBsZW1lbnRzIEJsb2NraW5nRWxlbWVudHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBwcml2YXRlW19ibG9ja2luZ0VsZW1lbnRzXTogTWF5YmVIYXNJbnRlcm5hbFN0YXRlW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfdG9wRWxQYXJlbnRzXTogSGFzSW50ZXJuYWxTdGF0ZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAqIHB1c2hlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBuZXcgU2V0PE1heWJlSGFzSW50ZXJuYWxTdGF0ZT4oKTtcblxuICAgIGRlc3RydWN0b3IoKTogdm9pZCB7XG4gICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzIGFzIHVua25vd24gYXMge1xuICAgICAgICBbX2Jsb2NraW5nRWxlbWVudHNdOiBudWxsO1xuICAgICAgICBbX3RvcEVsUGFyZW50c106IG51bGw7XG4gICAgICAgIFtfYWxyZWFkeUluZXJ0RWxlbWVudHNdOiBudWxsO1xuICAgICAgfTtcbiAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgdG9wKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgIH1cblxuICAgIHB1c2goZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwb3AoKTogSFRNTEVsZW1lbnR8bnVsbCB7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgcmV0dXJuIHRvcDtcbiAgICB9XG5cbiAgICBoYXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfdG9wQ2hhbmdlZF0obmV3VG9wOiBNYXliZUhhc0ludGVybmFsU3RhdGV8bnVsbCk6IHZvaWQge1xuICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgIH1cbiAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAvLyBiZWxvdy5cbiAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzIGFzIEFycmF5PEhhc0ludGVybmFsU3RhdGU+O1xuXG4gICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuXG4gICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgai0tO1xuICAgICAgfVxuICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICB9XG4gICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfc3dhcEluZXJ0ZWRTaWJsaW5nXShcbiAgICAgICAgb2xkSW5lcnQ6IEhhc0ludGVybmFsU3RhdGUsIG5ld0luZXJ0OiBNYXliZUhhc0ludGVybmFsU3RhdGUpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgfVxuICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICB9XG4gICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgIChvbGRJbmVydCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAob2xkSW5lcnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzOiBIYXNJbnRlcm5hbFN0YXRlW10pIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAoZWxlbWVudCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgKGVsZW1lbnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19pbmVydFNpYmxpbmdzXShcbiAgICAgICAgZWxlbWVudHM6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZVtdLCB0b1NraXA6IFNldDxIVE1MRWxlbWVudD58bnVsbCxcbiAgICAgICAgdG9LZWVwSW5lcnQ6IFNldDxIVE1MRWxlbWVudD58bnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUhO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZSBhcyBNYXliZVNoYWR5Um9vdDtcbiAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgIH1cbiAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGVbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IChtdXRhdGlvbi50YXJnZXQgYXMgU2hhZG93Um9vdCkuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0IGFzIEhhc0ludGVybmFsU3RhdGUpO1xuICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcblxuICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2lzSW5lcnRhYmxlXShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfZ2V0UGFyZW50c10oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBBcnJheTxIVE1MRWxlbWVudD4ge1xuICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgbGV0IGN1cnJlbnQ6IEhUTUxFbGVtZW50fG51bGx8dW5kZWZpbmVkID0gZWxlbWVudDtcbiAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHx8XG4gICAgICAgICAgICAoY3VycmVudCBhcyBOb2RlIGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50OiBIVE1MRWxlbWVudCk6XG4gICAgICAgIFNldDxIVE1MRWxlbWVudD58bnVsbCB7XG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgICAgIGxldCBpO1xuICAgICAgbGV0IGo7XG4gICAgICBsZXQgbm9kZXM7XG4gICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgKGRvY3VtZW50IGFzIERvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHMpLiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBIVE1MRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUhUTUxFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCJcbmltcG9ydCB7IFN0YXRlVXBkYXRlciwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgYXMgdXNlU3RhdGVQIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG4vKipcbiAqIFNsaWdodGx5IGVuaGFuY2VkIHZlcnNpb24gb2YgYHVzZVN0YXRlYCB0aGF0IGluY2x1ZGVzIGEgZ2V0dGVyIHRoYXQgcmVtYWlucyBjb25zdGFudFxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxuICogXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZTxUPihpbml0aWFsU3RhdGU6IFQgfCAoKCkgPT4gVCkpOiByZWFkb25seSBbdmFsdWU6IFQsIHNldFZhbHVlOiBTdGF0ZVVwZGF0ZXI8VD4sIGdldFZhbHVlOiAoKSA9PiBUXSB7XG5cbiAgICAvLyBXZSBrZWVwIGJvdGgsIGJ1dCBvdmVycnJpZGUgdGhlIGBzZXRTdGF0ZWAgZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVQXSA9IHVzZVN0YXRlUChpbml0aWFsU3RhdGUpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihzdGF0ZSk7XG5cbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjazxTdGF0ZVVwZGF0ZXI8VD4+KHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlIGFzICgoX3ByZXZWYWx1ZTogVCkgPT4gVCk7XG4gICAgICAgICAgICBzZXRTdGF0ZVAocHJldlZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZVAodmFsdWUpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcblxuXG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlIHx8ICh0eXBlb2Ygc3RhdGUgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4oc3RhdGUpKSk7XG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGUsIGdldFN0YXRlXSBhcyBjb25zdDtcbn0iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0FyZ3VtZW50cztcbiIsImltcG9ydCBiYXNlSXNBcmd1bWVudHMgZnJvbSAnLi9fYmFzZUlzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVVdGlsO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiaW1wb3J0IG5vb3AgZnJvbSBcImxvZGFzaC1lcy9ub29wXCI7XG5pbXBvcnQgeyBDb21wb25lbnRDaGlsZHJlbiwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcblxudHlwZSBSYWZDYWxsYmFja1R5cGUgPSAobXNTaW5jZUxhc3Q6IG51bWJlciwgdGFnPzogYW55KSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgQ29udGV4dFR5cGUge1xuICAgIGFkZENhbGxiYWNrOiAoY2FsbGJhY2s6IFJhZkNhbGxiYWNrVHlwZSwgdGFnPzogYW55KSA9PiB2b2lkO1xuICAgIHJlbW92ZUNhbGxiYWNrOiAoY2FsbGJhY2s6IFJhZkNhbGxiYWNrVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudWxsIHwgQ29udGV4dFR5cGU+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbiB9KSB7XG5cbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrPENvbnRleHRUeXBlW1wiYWRkQ2FsbGJhY2tcIl0+KChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrPENvbnRleHRUeXBlW1wicmVtb3ZlQ2FsbGJhY2tcIl0+KChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG5cbiAgICBjb25zdCBjb250ZXh0SW5mbyA9IHVzZVJlZjxDb250ZXh0VHlwZT4obnVsbCEpO1xuICAgIGlmIChjb250ZXh0SW5mby5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGNvbnRleHRJbmZvLmN1cnJlbnQgPSB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9O1xuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZjxNYXA8UmFmQ2FsbGJhY2tUeXBlLCBhbnk+PihudWxsISk7XG4gICAgaWYgKGFsbENhbGxiYWNrcy5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGFsbENhbGxiYWNrcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IC0xO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2JhdGNoZWRSYWZDYWxsYmFjaywgdGFnXSBvZiBhbGxDYWxsYmFja3MuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGJhdGNoZWRSYWZDYWxsYmFjayhtc1NpbmNlTGFzdCwgdGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRJbmZvLmN1cnJlbnR9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlcj4pXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQW5pbWF0aW9uRnJhbWVQYXJhbWV0ZXJzIHtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB3aXRoIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIHJ1bGVzIGFzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXG4gICAgICogXG4gICAgICogRG9lc24ndCBuZWVkIHRvIGJlIHN0YWJsZS5cbiAgICAgKi9cbiAgICBjYWxsYmFjazogbnVsbCB8ICgobXNTaW5jZUxhc3Q6IG51bWJlcikgPT4gdm9pZCk7XG59XG5cbi8qKlxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICogXG4gKiBQYXNzaW5nIGBudWxsYCBpcyBmaW5lIGFuZCBzaW1wbHkgc3RvcHMgdGhlIGVmZmVjdCB1bnRpbCB5b3UgcmVzdGFydCBpdCBieSBwcm92aWRpbmcgYSBub24tbnVsbCBjYWxsYmFjay5cbiAqIFxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfTogVXNlQW5pbWF0aW9uRnJhbWVQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/IG5vb3ApO1xuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xuXG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2sobXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSlcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTd2FwcGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiBib29sZWFuIH0+KHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IGZhbHNlIH0pO1xuIiwiaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGgsIFZOb2RlLCBSZWYsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJ1bkltbWVkaWF0ZWx5IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uUGhhc2UgPSAnaW5pdCcgfCAndHJhbnNpdGlvbicgfCAnZmluYWxpemUnO1xuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbkRpcmVjdGlvbiA9ICdlbnRlcicgfCAnZXhpdCc7XG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uU3RhdGUgPSBgJHtUcmFuc2l0aW9uRGlyZWN0aW9ufS0ke1RyYW5zaXRpb25QaGFzZX1gO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0Q2xhc3NCYXNlKGdpdmVuOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdpdmVuID8/IFwicHRsXCI7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VUcmFuc2l0aW9uUHJvcHMge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoaXMgZWxlbWVudCBzaG91bGQgbWFrZSBpdHNlbGYgdmlzaWJsZS5cbiAgICAgKi9cbiAgICBzaG93OiBib29sZWFuIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCB0aGUgZWxlbWVudCBtb3VudHMgaW4gYW4gYWxyZWFkeS10cmFuc2l0aW9uZWQgYXBwZWFyYW5jZSBvciBub3QuXG4gICAgICovXG4gICAgYW5pbWF0ZU9uTW91bnQ/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQ2VydGFpbiB0eXBlcyBvZiB0cmFuc2l0aW9ucyByZXF1aXJlIG1lYXN1cmluZyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCAobmFtZWx5IGNvbGxhcHNlKS5cbiAgICAgKiBcbiAgICAgKiBJdCBpbmN1cnMgYSByZWZsb3ctYmFzZWQgcGVyZm9ybWFuY2UgcGVuYWx0eSBldmVyeSB0aW1lIGB2aXNpYmxlYCBjaGFuZ2VzIHdoZW4gdXNlZC5cbiAgICAgKi9cbiAgICBtZWFzdXJlOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2Ugb2YgYWxsIENTUyBjbGFzc2VzIHVzZWQuIFxuICAgICAqIFxuICAgICAqIENhbm5vdCBjaGFuZ2Ugd2hpbGUgdGhlIGVsZW1lbnQgaXMgbW91bnRlZDsgaXQgKipNVVNUKiogcmVtYWluIHN0YWJsZSB0aHJvdWdob3V0IHRoZSBjb21wb25lbnQncyBsaWZldGltZS5cbiAgICAgKi9cbiAgICBjbGFzc0Jhc2U/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDYW4gYWxzbyBiZSBwcm92aWRlZCB2aWEgQ1NTIHByb3BlcnRpZXMgKGJ1dCB0aGlzIHdpbGwgbWF0Y2ggd2hhdGV2ZXIgYGNsYXNzQmFzZWAgeW91IHVzZSBmb3IgeW91KVxuICAgICAqL1xuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGZpbmlzaGVkIGl0cyBleGl0IGFuaW1hdGlvbiwgd2hhdCBoYXBwZW5zIHRvIGl0P1xuICAgICAqIFxuICAgICAqICogYFwicmVtb3ZlZFwiYDogYGRpc3BsYXk6IG5vbmVgIGlzIGFwcGxpZWQuXG4gICAgICogKiBgXCJoaWRkZW5cImA6IGB2aXNpYmlsaXR5OiBub25lYCBpcyBhcHBsaWVkLlxuICAgICAqICogYFwidmlzaWJsZVwiYDogTm8gYWRkaXRpb25hbCBzdHlsaW5nIGlzIGFwcGxpZWQuXG4gICAgICogKiBgXCJpbmVydFwiYDogTm8gYWRkaXRpb25hbCBzdHlsaW5nIGlzIGFwcGxpZWQsIGJ1dCB0aGUgYGluZXJ0YCBhdHRyaWJ1dGUgaXMgYXBwbGllZC4gWW91IHdpbGwgbGlrZWx5IG5lZWQgYSBwb2x5ZmlsbCB0byBtYWtlIHRoaXMgd29yayBvbiBvbGRlciBicm93c2Vycy5cbiAgICAgKi9cbiAgICBleGl0VmlzaWJpbGl0eT86IFwiaW5lcnRcIiB8IFwicmVtb3ZlZFwiIHwgXCJoaWRkZW5cIiB8IFwidmlzaWJsZVwiO1xufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0RHVyYXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50PihlbGVtZW50OiBFIHwgbnVsbCkge1xuICAgIHJldHVybiBNYXRoLm1heCguLi4od2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCB8fCBkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKGB0cmFuc2l0aW9uLWR1cmF0aW9uYCkpLnNwbGl0KFwiLFwiKS5tYXAoc3RyID0+IHtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcIm1zXCIpKVxuICAgICAgICAgICAgcmV0dXJuICtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcInNcIikpXG4gICAgICAgICAgICByZXR1cm4gKCtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSkgKiAxMDAwO1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlOiBUcmFuc2l0aW9uU3RhdGUpIHtcbiAgICByZXR1cm4gbmV4dFN0YXRlLnNwbGl0KFwiLVwiKSBhcyBbVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlXTtcbn1cblxuLyoqXG4gKiBQcm92aWRlIHByb3BzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYW5pbWF0ZSBhIHRyYW5zaXRpb24uXG4gKiBcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHNob3c6IHYsIGFuaW1hdGVPbk1vdW50OiBhLCBtZWFzdXJlOiBtLCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBlLCBkdXJhdGlvbjogZCB9OiBVc2VUcmFuc2l0aW9uUHJvcHMpIHtcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZ2V0QW5pbWF0ZU9uTW91bnQgfSA9IHVzZUNvbnRleHQoU3dhcHBhYmxlQ29udGV4dCk7XG4gICAgY2xhc3NCYXNlIHx8PSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgZSB8fD0gXCJoaWRkZW5cIlxuICAgIGEgPz89IGdldEFuaW1hdGVPbk1vdW50KCk7XG4gICAgbSA/Pz0gZmFsc2U7XG4gICAgY29uc3QgZ2V0TWVhc3VyZSA9IHVzZVN0YWJsZUdldHRlcihtKTtcbiAgICAvL2NvbnN0IGdldER1cmF0aW9uT3ZlcnJpZGUgPSB1c2VTdGFibGVHZXR0ZXIoZCk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlVHJhbnNpdGlvblwiLCBjbGFzc0Jhc2UpO1xuICAgIGNvbnN0IGdldEV4aXRWaXNpYmlsaXR5ID0gdXNlU3RhYmxlR2V0dGVyKGUpO1xuXG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQ8RT4oeyByZWZFbGVtZW50UGFyYW1ldGVyczoge30gfSlcbiAgICBjb25zdCBjc3NQcm9wZXJ0aWVzID0gdXNlUmVmPGguSlNYLkNTU1Byb3BlcnRpZXM+KHt9KTtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gdXNlUmVmKG5ldyBTZXQ8c3RyaW5nPihbXG4gICAgICAgIC8vIFRoaXMgaXMgcmVtb3ZlZCBkdXJpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBmaXJzdCByZW5kZXJcbiAgICAgICAgLy8gKGF0IGxlYXN0IG9uY2UgYHNob3dgIGlzIG5vbi1udWxsKVxuICAgICAgICBgJHtjbGFzc0Jhc2V9LXBlbmRpbmdgLFxuICAgIF0pKTtcbiAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoISFzdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGlvbiwgcGhhc2VdID0gcGFyc2VTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtkaXJlY3Rpb259LWZpbmFsaXplYCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHtcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kOiAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGdldEVsZW1lbnQoKSAmJiBlLmVsYXBzZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhlIHZlcnkgZmlyc3QgdGltZSBcbiAgICBjb25zdCBoYXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQncyBDU1MgY2xhc3MgdG8gbWF0Y2ggdGhlIGdpdmVuIGRpcmVjdGlvbiBhbmQgcGhhc2UuXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlQ2xhc3NlcyA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFIHwgbnVsbCwgZGlyZWN0aW9uOiBUcmFuc2l0aW9uRGlyZWN0aW9uLCBwaGFzZTogVHJhbnNpdGlvblBoYXNlKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuXG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb1JlbW92ZSA9IFtcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZW50ZXJgLCBgJHtjbGFzc0Jhc2V9LWV4aXRgLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV4aXQtaW5pdGAsIGAke2NsYXNzQmFzZX0tZXhpdC10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1leGl0LWZpbmFsaXplYCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcImluZXJ0XCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcInJlbW92ZWRcIn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke1wiaGlkZGVuXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcInZpc2libGVcIn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3Nlc1RvQWRkID0gW1xuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LSR7ZGlyZWN0aW9ufWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LSR7ZGlyZWN0aW9ufS0ke3BoYXNlfWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YFxuICAgICAgICBdO1xuXG4gICAgICAgIC8vKG1lYXN1cmUgPyBhbGxDbGFzc2VzVG9BZGQgOiBhbGxDbGFzc2VzVG9SZW1vdmUpLnB1c2goYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uYWxsQ2xhc3Nlc1RvQWRkKTtcbiAgICAgICAgYWxsQ2xhc3Nlc1RvQWRkLm1hcCh2ID0+IGNsYXNzTmFtZXMuY3VycmVudC5hZGQodikpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSwgdmFyTmFtZTogKGtleW9mIGguSlNYLkNTU1Byb3BlcnRpZXMpICYgc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFt2YXJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh2YXJOYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGFsbCBcIm1lYXN1cmVcIiB2YXJpYWJsZXMgKG9yIHJlbW92ZXMgdGhlbSlcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydGllcyA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFLCBuZXh0U2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCkgPT4ge1xuICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtjbGFzc0Jhc2V9LW1lYXN1cmUtdG9wYCwgbmV4dFNpemU/LnRvcCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS1sZWZ0YCwgbmV4dFNpemU/LmxlZnQpO1xuICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtjbGFzc0Jhc2V9LW1lYXN1cmUtd2lkdGhgLCBuZXh0U2l6ZT8ud2lkdGgpO1xuICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtjbGFzc0Jhc2V9LW1lYXN1cmUtaGVpZ2h0YCwgbmV4dFNpemU/LmhlaWdodCk7XG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUgfCBudWxsLCBtZWFzdXJlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydGllcyhlbGVtZW50LCBzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIC8vIFdlIHVzZSBib3RoIHVzZVRpbWVvdXQgYW5kIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmb3IgdGltaW5nIGNlcnRhaW4gdGhpbmdzIC0tXG4gICAgLy8gcmFmIGlzIHVzZWQgZm9yIGNoYW5naW5nIGZyb20gaW5pdCB0byB0cmFuc2l0aW9uICh3b3VsZCB1c2UgcXVldWVNaWNyb3Rhc2sgYnV0IGl0IGNhbid0IGJlIGNhbmNlbGxlZClcbiAgICAvLyBzZXRUaW1lb3V0IGlzIHVzZWQgZm9yIGNoYW5naW5nIGZyb20gdHJhbnNpdGlvbiB0byBmaW5hbGl6ZSAoYXMgYSBiYWNrdXAgaW4gY2FzZSB0cmFuc2l0aW9uZW5kIGRvZXNuJ3QgZmlyZSlcbiAgICAvL1xuICAgIC8vIEluIG9yZGVyIHRvIGF2b2lkIHN0YWxlIGNhbGxiYWNrcyBydW5uaW5nIChpLmUuIHdoZW4gd2UgcmFwaWRseSBzd2l0Y2ggYmV0d2VlbiB2aXNpYmxlIGFuZCBub3QpXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgYWNjdXJhdGVseSBjYW5jZWwgYW55dGhpbmcgdGhhdCBjYW4gY2hhbmdlIG91ciBzdGF0ZSBvbiBhIGRlbGF5LlxuICAgIC8vXG4gICAgLy8gQWxzbyBvZiBub3RlLCB3ZSBzdG9yZSBcIihmKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KGYpXCIgaW5zdGVhZCBvZiBqdXN0IFwid2luZG93LmNsZWFyVGltZW91dFwiIGJlY2F1c2VcbiAgICAvLyBvZiB0aGUgaW1wbGljaXQgd2luZG93IG9iamVjdCAtLSBwcm9ibGVtcyB3aXRoIGEgbWlzc2luZyBgdGhpc2Agb2JqZWN0IGFuZCBhbGwgdGhhdCBub25zZW5zZS5cbiAgICBjb25zdCB0aW1lb3V0SGFuZGxlID0gdXNlUmVmPG51bWJlcj4oLTEpO1xuICAgIGNvbnN0IHRpbWVvdXRDbGVhckZ1bmN0aW9uID0gdXNlUmVmPCh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHwgKHR5cGVvZiBjbGVhclRpbWVvdXQpIHwgbnVsbD4obnVsbCk7XG5cbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB0aGUgc3RhdGUgY2hhbmdlcywgdGhlcmUncyBzb21lIGxvZ2ljIHdlIG5lZWQgdG8gcnVuOlxuICAgICAqIFxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYW4gYGluaXRgIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCBhIG1vbWVudCBhbmQgdGhlbiBjaGFuZ2UgdG8gdGhlIGB0cmFuc2l0aW9uYCBwaGFzZS5cbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGEgYHRyYW5zaXRpb25gIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCB1bnRpbCB0aGUgdHJhbnNpdGlvbiBjb21wbGV0ZXMsIHRoZW4gY2hhbmdlIHRvIHRoZSBgZmluYWxpemVgIHBoYXNlLlxuICAgICAqIFxuICAgICAqIEFueSBjaGFuZ2UgaW4gc3RhdGUgb3IgY2xhc3Nlcy9zdHlsZXMgZG9lcyBub3QgaW1wbGljaXRseSBjYXVzZSBhIHJlLXJlbmRlci5cbiAgICAgKi9cbiAgICBjb25zdCBvblN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25QYXNzaXZlU3RhdGVDaGFuZ2U8VHJhbnNpdGlvblN0YXRlIHwgbnVsbCwgdW5kZWZpbmVkPj4oKG5leHRTdGF0ZSwgcHJldlN0YXRlLCByZWFzb24pID0+IHtcbiAgICAgICAgaWYgKG5leHRTdGF0ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IFtuZXh0RGlyZWN0aW9uLCBuZXh0UGhhc2VdID0gcGFyc2VTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICBzZXRJc1Zpc2libGUobmV4dERpcmVjdGlvbiA9PSBcImVudGVyXCIgfHwgKG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgJiYgbmV4dFBoYXNlICE9IFwiZmluYWxpemVcIikpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBtZWFzdXJlID0gZ2V0TWVhc3VyZSgpO1xuICAgICAgICAvL2NvbnN0IGR1cmF0aW9uT3ZlcnJpZGUgPSBnZXREdXJhdGlvbk92ZXJyaWRlKCk7XG4gICAgICAgIC8qaWYgKGR1cmF0aW9uT3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZHVyYXRpb25PdmVycmlkZSArIFwibXNcIjtcbiAgICAgICAgICAgIGVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmAsIGAke2R1cmF0aW9uT3ZlcnJpZGV9bXNgKTtcbiAgICAgICAgfSovXG4gICAgICAgIGlmIChtZWFzdXJlICYmIGVsZW1lbnQgJiYgbmV4dFBoYXNlID09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAvLyBXZSBhY3R1YWxseSBuZWVkIGFsbCB0aGVzZSByZWZsb3dzLCBlaXRoZXIgdG8gbWFrZSB0aGluZ3MgbGlrZSBibG9jay1zaXplIHdvcmssIG9yIHRvIG1ha2UgdGhpbmdzIGxpa2Ugb3BhY2l0eSB3b3JrLlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7ICAgLy8gQnkgbWVhc3VyaW5nIHRoZSBlbGVtZW50IGJlbG93IHdlIGltcGxpY2l0bHkgcmVmbG93LCBidXQgdGhpcyBpcyBhIHJlbWluZGVyIHRoYXQgaXQgaGFwcGVucy5cbiAgICAgICAgICAgIG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyhlbGVtZW50LCBtZWFzdXJlKTtcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlKTtcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBVbm5lY2Vzc2FyeSByZWZsb3c/XG4gICAgICAgICAgICAvLyBJdCBtaWdodCBvbmx5IGJlIG5lY2Vzc2FyeSB3aGVuIGNoYW5naW5nIGZyb20gLWluaXQgdG8gLXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBpZiAoZXhpdFZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZXJ0ID0gKGV4aXRWaXNpYmlsaXR5ID09IFwiaW5lcnRcIiAmJiBuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiID8gdHJ1ZSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaW5lcnQpXG4gICAgICAgICAgICAgICAgKG90aGVyUHJvcHMuY3VycmVudCBhcyBhbnkpLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXJQcm9wcy5jdXJyZW50W1wiaW5lcnRcIiBhcyBuZXZlcl07XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5lcnQgPSAoaW5lcnQgfHwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobmV4dFBoYXNlKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcblxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHNldFN0YXRlKGAke25leHREaXJlY3Rpb259LXRyYW5zaXRpb25gKTsgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcInRyYW5zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPj0gMClcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG5cbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGY6IG51bWJlcikgPT4gY2xlYXJUaW1lb3V0KGYpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZpbmFsaXplXCI6IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIG9yIHNjaGVkdWxlIG9yIGFueXRoaW5nIC0tIHdlIGp1c3QgdXBkYXRlIG91ciBjbGFzc2VzIGFuZCB3ZSdyZSBkb25lLlxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgc3RhdGUgdXNlZCBpbiB0cmFuc2l0aW9uOiAke25leHRTdGF0ZX0uIFByZXZpb3VzIHN0YXRlIHdhcyAke3ByZXZTdGF0ZSA/PyBcIm51bGxcIn1gKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IFtnZXRTdGF0ZSwgc2V0U3RhdGVdID0gdXNlUGFzc2l2ZVN0YXRlPFRyYW5zaXRpb25TdGF0ZSB8IG51bGwsIHVuZGVmaW5lZD4ob25TdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHkpO1xuXG5cbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIC8vIElmIGBzaG93YCBpcyBudWxsLCB0aGVuIHdlIGRvbid0IGNoYW5nZSBhbnl0aGluZy5cbiAgICAgICAgaWYgKHYgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyBgc2hvd2AgaXMgdHJ1ZSBvciBmYWxzZSAoYXMgb3Bwb3NlZCB0byBudWxsKS5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgdGltZSBzZWVpbmcgYSBub24tbnVsbCB2YWx1ZSwgXG4gICAgICAgIC8vIHRoZW4gcmVtb3ZlIHRoZSBjbGFzcyB0aGF0IGluZGljYXRlcyB0aGUgbm8gdHJhbnNpdGlvbiBsb2dpYyBoYXMgc3RhcnRlZC5cbiAgICAgICAgLy8gKEJlY2F1c2UgdGhpcyBpcyB1c2VMYXlvdXRFZmZlY3QsIGl0IHdpbGwgdGFrZSBlZmZlY3QgYmVmb3JlIHRoZSBjbGFzcydzIGVmZmVjdHMgYXJlIHBhaW50ZWQpXG4gICAgICAgIGlmICghaGFzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKGAke2NsYXNzQmFzZX0tcGVuZGluZ2ApO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tcGVuZGluZ2ApO1xuICAgICAgICAgICAgICAgIC8vIEJlY2F1c2UgdGhlIHBlbmRpbmcgY2xhc3Mgb2Z0ZW4gbWFrZXMgdGhpcyBoaWRkZW4gb3IgZC1ub25lLCBcbiAgICAgICAgICAgICAgICAvLyBmb3JjZSBhIHJlZmxvdyBqdXV1c3QgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2U6IFRyYW5zaXRpb25QaGFzZSA9IFwiaW5pdFwiO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbY3VycmVudERpcmVjdGlvbiwgY3VycmVudFBoYXNlXSA9IHBhcnNlU3RhdGUoY3VycmVudFN0YXRlKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGhhc2UgIT0gXCJmaW5hbGl6ZVwiKVxuICAgICAgICAgICAgICAgIG5leHRQaGFzZSA9IFwidHJhbnNpdGlvblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm90ZTogdGhlIHNldFN0YXRlIGNoYW5nZSBoYW5kbGVyIHJ1bnMgaW1tZWRpYXRlbHkgd2l0aCBubyBkZWJvdW5jZS5cbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgIGlmIChoYXNNb3VudGVkLmN1cnJlbnQgfHwgYSlcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZW50ZXItJHtuZXh0UGhhc2V9YCk7XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGEpXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYGV4aXQtJHtuZXh0UGhhc2V9YCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJleGl0LWZpbmFsaXplXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBbdl0pO1xuXG5cbiAgICBpZiAoZCAhPSBudWxsKVxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF0gPSBkICsgXCJtc1wiO1xuICAgIGVsc2VcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke2NsYXNzQmFzZX0tZHVyYXRpb25gXTtcblxuICAgIC8vIFRPRE9cbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBudWxsO1xuICAgIGNvbnN0IGJsb2NrRGlyZWN0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgcHJvcHM6IHVzZU1lcmdlZFByb3BzPEU+KHByb3BzU3RhYmxlLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICAgICAgICAuLi5jbGFzc05hbWVzLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V9YCxcbiAgICAgICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLFxuICAgICAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudCxcbiAgICAgICAgICAgIC4uLm90aGVyUHJvcHMuY3VycmVudFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLyoqXG4gKiBBbGwgYXR0cmlidXRlcyBhcmUgbWVyZ2VkLCBidXQgYXV0b2NvbXBsZXRlIGJlY29tZXMgcmVhbGx5IG5vaXN5IHRyeWluZyB0byBmaW5kIHRoZSBwcm9wcyB0aGF0IGFyZSByZWxldmFudCB0byB0aGUgYFRyYW5zaXRpb25hYmxlYCBpdHNlbGYuIFxuICogVG8gYXZvaWQgd2FkaW5nIHRocm91Z2ggYSBzZWEgb2YgZXZlbnQgaGFuZGxlcnMgYW5kIGF0dHJpYnV0ZXMgbm8gb25lIGV2ZXIgdXNlcywgb25seSB0aGUgbW9zdCBjb21tb24gb25lcyBhcmUgc2hvd24uXG4gKiBcbiAqIEFnYWluLCB0aG91Z2gsICoqYWxsIHByb3BzIGFyZSBtZXJnZWQgYW5kIGZvcndhcmRlZCwgbm90IGp1c3QgdGhlc2Ugb25lcyEqKiBZb3UgY2FuIHVzZSBhbnkvYWxsIG9mIHRoZSB1c3VhbCBhdHRyaWJ1dGVzLCBpbmNsdWRpbmcgYG9uVHJhbnNpdGlvbkVuZGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgUGljazxoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgXCJjaGlsZHJlblwiIHwgXCJyZWZcIiB8IFwic3R5bGVcIiB8IFwiY2xhc3NcIiB8IFwiY2xhc3NOYW1lXCI+IHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb25hYmxlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlVHJhbnNpdGlvblByb3BzLCBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiB7XG4gICAgZGVsYXlNb3VudFVudGlsU2hvd246IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IElzVmlzaWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzVHJhbnNpdGlvblZpc2libGUoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoSXNWaXNpYmxlQ29udGV4dCk7XG59XG5cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uYWJsZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbmFibGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGRlbGF5TW91bnRVbnRpbFNob3duLCBhbmltYXRlT25Nb3VudCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHksIG1lYXN1cmUsIHNob3csIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBUcmFuc2l0aW9uYWJsZVByb3BzPEU+LCByZWY/OiBSZWY8RT4pIHtcbiAgICBjb25zdCB7IHByb3BzOiB0cmFuc2l0aW9uUHJvcHMsIGlzVmlzaWJsZSB9ID0gdXNlVHJhbnNpdGlvbjxFPih7XG4gICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBleGl0VmlzaWJpbGl0eSxcbiAgICAgICAgbWVhc3VyZSxcbiAgICAgICAgc2hvd1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBjaGlsZHJlbklzVm5vZGUgPSAoY2hpbGRyZW4gJiYgKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlICYmIChjaGlsZHJlbiBhcyBWTm9kZSkucHJvcHMpO1xuICAgIGNvbnN0IGZpbmFsUHJvcHMgPSB1c2VNZXJnZWRQcm9wczxFPihwcm9wcywgdHJhbnNpdGlvblByb3BzLCB7IC4uLnByb3BzLCByZWYgfSwgY2hpbGRyZW5Jc1Zub2RlID8geyByZWY6IChjaGlsZHJlbiBhcyBWTm9kZSkucmVmLCAuLi4oY2hpbGRyZW4gYXMgVk5vZGUpLnByb3BzIH0gOiB7fSk7XG5cbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBkZWxheU1vdW50VW50aWxTaG93biBpcyxcbiAgICAvLyBvbmNlIHdlJ3ZlIHJlbmRlcmVkIG91ciBjaGlsZHJlbiBvbmNlLCBcbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBkb24ndCB1bm1vdW50IHRoZW0gYWdhaW4gYW5kIHdhc3RlIGFsbCB0aGF0IHdvcmsuXG4gICAgLy8gKElmIHlvdSByZWFsbHkgbmVlZCB0aGlzIHlvdSBjYW4ganVzdCB1bm1vdW50IHRoZSBlbnRpcmUgdHJhbnNpdGlvbiBpdHNlbGYpXG4gICAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoc2hvdyB8fCAhZGVsYXlNb3VudFVudGlsU2hvd24pO1xuICAgIGNvbnN0IGhhc1JlbmRlcmVkQ2hpbGRyZW4gPSB1c2VSZWYoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyZW5kZXJDaGlsZHJlbilcbiAgICAgICAgICAgIGhhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudCB8fD0gdHJ1ZTtcbiAgICB9LCBbaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50ID8gZmFsc2UgOiByZW5kZXJDaGlsZHJlbl0pXG5cbiAgICBpZiAoIXJlbmRlckNoaWxkcmVuICYmICFoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQpXG4gICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiBmYWxzZSB9KS5jdXJyZW50O1xuXG4gICAgbGV0IHJldDogVk5vZGU7XG5cbiAgICBpZiAoY2hpbGRyZW5Jc1Zub2RlKSB7XG4gICAgICAgIHJldCA9IDxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT57Y2xvbmVFbGVtZW50KGNoaWxkcmVuIGFzIFZOb2RlLCBmaW5hbFByb3BzKX08L1N3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXQgPSA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+PHNwYW4gey4uLmZpbmFsUHJvcHMgYXMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8YW55Pn0+e2NoaWxkcmVufTwvc3Bhbj48L1N3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPElzVmlzaWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2lzVmlzaWJsZX0+e3JldH08L0lzVmlzaWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSkpO1xuXG4vLyBUaGlzIGlzbid0IGFjdHVhbGx5IHB1YmxpY2x5IGV4cG9ydGVkLiBJdCdzIGp1c3QgdG8gdHJ5IHRvIG1ha2Ugc3VyZSBpdCdzIG5vdCBvcHRpbWl6ZWQgb3V0LlxuLy8gKFRPRE86IFVubmVlZGVkPylcbmV4cG9ydCBsZXQgX2R1bW15OiBhbnk7XG5mdW5jdGlvbiBmb3JjZVJlZmxvdzxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGU6IEUpIHtcbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxuICAgIF9kdW1teSA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgX2R1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIF9kdW1teSA9IGUuc3R5bGUudHJhbnNmb3JtO1xuICAgIHJldHVybiBlO1xufVxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcywgVHJhbnNpdGlvbmFibGUsIFRyYW5zaXRpb25hYmxlUHJvcHMsIFVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVDbGlwUHJvcHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbClcclxuICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICovXHJcbiAgICBjbGlwT3JpZ2luOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgKi9cclxuICAgIGNsaXBPcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXHJcbiAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgKi9cclxuICAgIGNsaXBPcmlnaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbCkuXHJcbiAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgKi9cclxuICAgIGNsaXBNaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgKi9cclxuICAgIGNsaXBNaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgKi9cclxuICAgIGNsaXBNaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBjdXN0b21pemluZyB0aGUgY2xhc3MgbmFtZSB1c2VkIChpbiB0aGUgZm9ybWF0IG9mIGAke2NsYXNzQmFzZX0tY2xpcGApXHJcbiAgICAgKiBAZGVmYXVsdCBcInRyYW5zaXRpb25cIlxyXG4gICAgICovXHJcbiAgICBjbGFzc0Jhc2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBkZWxheU1vdW50VW50aWxTaG93bj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZUNsaXBQcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lIH06IFBhcnRpYWw8Q3JlYXRlQ2xpcFByb3BzPikge1xyXG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtjbGFzc0Jhc2V9LWNsaXBgKSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4taW5saW5lYF06IChjbGlwT3JpZ2luSW5saW5lID8/IGNsaXBPcmlnaW4gPz8gMC41KSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1taW4tYmxvY2tgXTogKGNsaXBNaW5CbG9jayA/PyBjbGlwTWluID8/IDApLFxyXG4gICAgICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogQ2xpcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvbmFibGU8RT5cclxuICAgICAgICAgICAgbWVhc3VyZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQ9e2FuaW1hdGVPbk1vdW50fVxyXG4gICAgICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bj17ZGVsYXlNb3VudFVudGlsU2hvd259XHJcbiAgICAgICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPih7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lIH0pKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMsIFRyYW5zaXRpb25hYmxlLCBUcmFuc2l0aW9uYWJsZVByb3BzLCBVc2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBtaW5pbXVtIG9yIG1heGltdW0gb3BhY2l0eSB2YWx1ZXMgdG8gdXNlIGZvciB0aGUgZmFkZSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUZhZGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIG91dC5cclxuICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAqL1xyXG4gICAgZmFkZU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIGluLlxyXG4gICAgICogQGRlZmF1bHQgMVxyXG4gICAgICovXHJcbiAgICBmYWRlTWF4OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGN1c3RvbWl6aW5nIHRoZSBjbGFzcyBuYW1lIHVzZWQgKGluIHRoZSBmb3JtYXQgb2YgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lcmApXHJcbiAgICAgKiBAZGVmYXVsdCBcInRyYW5zaXRpb25cIlxyXG4gICAgICovXHJcbiAgICBjbGFzc0Jhc2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBkZWxheU1vdW50VW50aWxTaG93bj86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH06IFBhcnRpYWw8Q3JlYXRlRmFkZVByb3BzPikge1xyXG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmFkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBPbWl0PFBhcnRpYWw8Q3JlYXRlRmFkZVByb3BzPiwgXCJzaG93XCI+LCBPbWl0PFVzZVRyYW5zaXRpb25Qcm9wcywgXCJtZWFzdXJlXCI+LCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlczxFPiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZhZGUgZWZmZWN0LlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcclxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxyXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxyXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9OiBGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFuc2l0aW9uYWJsZTxFPlxyXG4gICAgICAgICAgICBtZWFzdXJlPXtmYWxzZX1cclxuICAgICAgICAgICAgc2hvdz17c2hvd31cclxuICAgICAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XHJcbiAgICAgICAgICAgIGNsYXNzQmFzZT17Y2xhc3NCYXNlfVxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eT17ZXhpdFZpc2liaWxpdHl9XHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cclxuICAgICAgICAgICAgey4uLnVzZU1lcmdlZFByb3BzPEU+KHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KSl9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzLCBUcmFuc2l0aW9uYWJsZSwgVXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgQ2xpcCwgQ2xpcFByb3BzLCBjcmVhdGVDbGlwUHJvcHMsIENyZWF0ZUNsaXBQcm9wcyB9IGZyb20gXCIuL2NsaXBcIjtcclxuaW1wb3J0IHsgRmFkZVByb3BzLCBjcmVhdGVGYWRlUHJvcHMsIENyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIlxyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVDbGlwRmFkZVByb3BzIGV4dGVuZHMgQ3JlYXRlQ2xpcFByb3BzLCBDcmVhdGVGYWRlUHJvcHMgeyB9XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcEZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVDbGlwRmFkZVByb3BzPiwgT21pdDxVc2VUcmFuc2l0aW9uUHJvcHMsIFwibWVhc3VyZVwiPiwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RT4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogQ2xpcEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlPEU+XHJcbiAgICAgICAgICAgIG1lYXN1cmU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb259XHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50PXthbmltYXRlT25Nb3VudH1cclxuICAgICAgICAgICAgY2xhc3NCYXNlPXtjbGFzc0Jhc2V9XHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5PXtleGl0VmlzaWJpbGl0eX1cclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd249e2RlbGF5TW91bnRVbnRpbFNob3dufVxyXG4gICAgICAgICAgICB7Li4udXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcywgVHJhbnNpdGlvbmFibGUsIFRyYW5zaXRpb25hYmxlUHJvcHMsIFVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29sbGFwc2UgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVDb2xsYXBzZVByb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNtYWxsZXN0IHNpemUgdGhlIGNvbXBvbmVudCBjb2xsYXBzZXMgdG8uXHJcbiAgICAgKi9cclxuICAgIG1pbkJsb2NrU2l6ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBjdXN0b21pemluZyB0aGUgY2xhc3MgbmFtZSB1c2VkIChpbiB0aGUgZm9ybWF0IG9mIGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgKVxyXG4gICAgICogQGRlZmF1bHQgXCJ0cmFuc2l0aW9uXCJcclxuICAgICAqL1xyXG4gICAgY2xhc3NCYXNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgZGVsYXlNb3VudFVudGlsU2hvd24/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKiBcclxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9OiBDcmVhdGVDb2xsYXBzZVByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFBhcnRpYWw8Q3JlYXRlQ29sbGFwc2VQcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxyXG4gKiBcclxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSEgXHJcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXHJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjbGFzc0Jhc2UsIHNob3csIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgbWluQmxvY2tTaXplLCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogQ29sbGFwc2VQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlPEU+XHJcbiAgICAgICAgICAgIG1lYXN1cmU9e3RydWV9XHJcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQ9e2FuaW1hdGVPbk1vdW50fVxyXG4gICAgICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bj17ZGVsYXlNb3VudFVudGlsU2hvd259XHJcbiAgICAgICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPih7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSkpfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29sbGFwc2VQcm9wcywgQ3JlYXRlQ29sbGFwc2VQcm9wcywgQ29sbGFwc2UsIENvbGxhcHNlUHJvcHMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGYWRlUHJvcHMsIENyZWF0ZUZhZGVQcm9wcywgRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzLCBUcmFuc2l0aW9uYWJsZSwgVXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVDb2xsYXBzZUZhZGVQcm9wcyBleHRlbmRzIENyZWF0ZUZhZGVQcm9wcywgQ3JlYXRlQ29sbGFwc2VQcm9wcyB7IH1cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZUZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVDb2xsYXBzZUZhZGVQcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCAuLi5yZXN0IH06IENvbGxhcHNlRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlPEU+XHJcbiAgICAgICAgICAgIG1lYXN1cmU9e3RydWV9XHJcbiAgICAgICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQ9e2FuaW1hdGVPbk1vdW50fVxyXG4gICAgICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bj17ZGVsYXlNb3VudFVudGlsU2hvd259XHJcbiAgICAgICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcywgVHJhbnNpdGlvbmFibGUsIFRyYW5zaXRpb25hYmxlUHJvcHMsIFVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIHNsaWRlIGVmZmVjdC4gXHJcbiAqIFZhbHVlcyBhcmUgcmVsYXRpdmUsIHdpdGggMSBvciAtMSBiZWluZyB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGluIHRoYXQgZGlyZWN0aW9uLlxyXG4gKiBgMC41YCwgZm9yIGV4YW1wbGUsIHdvdWxkIHNsaWRlIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU2xpZGVQcm9wcyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAqL1xyXG4gICAgc2xpZGVUYXJnZXRJbmxpbmU6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAqL1xyXG4gICAgc2xpZGVUYXJnZXRCbG9jazogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyBjdXN0b21pemluZyB0aGUgY2xhc3MgbmFtZSB1c2VkIChpbiB0aGUgZm9ybWF0IG9mIGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgKVxyXG4gICAgICogQGRlZmF1bHQgXCJ0cmFuc2l0aW9uXCJcclxuICAgICAqL1xyXG4gICAgY2xhc3NCYXNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgZGVsYXlNb3VudFVudGlsU2hvd24/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9OiBQYXJ0aWFsPENyZWF0ZVNsaWRlUHJvcHM+KSB7XHJcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBOb3RlOiBDcmVhdGVTbGlkZVByb3BzIGlzICppbnRlbnRpb25hbGx5KiBub3QgbWFkZSBwYXJ0aWFsIGhlcmUuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTbGlkZVByb3BzPiwgT21pdDxVc2VUcmFuc2l0aW9uUHJvcHMsIFwibWVhc3VyZVwiPiwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RT4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgc2xpZGVJbmxpbmVgIGFuZCBgc2xpZGVCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICogXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxyXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi5yZXN0IH06IFNsaWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcclxuXHJcbiAgICByZXR1cm4gPFRyYW5zaXRpb25hYmxlPEU+XHJcbiAgICBtZWFzdXJlPXtmYWxzZX1cclxuICAgIHNob3c9e3Nob3d9XHJcbiAgICBkdXJhdGlvbj17ZHVyYXRpb259XHJcbiAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XHJcbiAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgIGV4aXRWaXNpYmlsaXR5PXtleGl0VmlzaWJpbGl0eX1cclxuICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cclxuICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPih7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9KSl9XHJcbiAgICAvPlxyXG59KSk7XHJcblxyXG5cclxuLy8gVE9ETzogVGhpcyBsb2dpYyB3YXMgcmVxdWlyZWQgZm9yIHNsaWRlcyBhdCBvbmUgcG9pbnQgdG8gZW5zdXJlIHRoYXQgc2xpZGVUYXJnZXRJbmxpbmU9e2luZGV4IC0gY3VycmVudEluZGV4fSB3b3JrcyByaWdodCxcclxuLy8gYnV0IGl0IHdvcmtzIHdpdGhvdXQgaXQgbm93LCBzbywgbGlrZSwgd2UncmUgZ29vZCB0aGVuPyBXaGljaCBJJ20gb2theSB3aXRoIGJlY2F1c2UgSSBjYW4ndCBleHBsYWluIHRoZSBsb2dpYyBoZXJlIGhvbmVzdGx5LlxyXG5cclxuLypleHBvcnQgZnVuY3Rpb24gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmUgfTogeyB0YXJnZXRJbmxpbmU/OiBudW1iZXIgfCBudWxsLCB0YXJnZXRCbG9jaz86IG51bWJlciB8IG51bGwgfSk6IHsgdGFyZ2V0SW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQsIHRhcmdldEJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfSB7XHJcblxyXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHRhcmdldElubGluZSA/PyAxKTtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKHRhcmdldEJsb2NrID8/IDApO1xyXG5cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRhcmdldElubGluZSkgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSB0YXJnZXRJbmxpbmU7IH0sIFt0YXJnZXRJbmxpbmVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0YXJnZXRCbG9jaykgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IHRhcmdldEJsb2NrOyB9LCBbdGFyZ2V0QmxvY2tdKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0SW5saW5lID09IDApXHJcbiAgICAgICAgdGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XHJcbiAgICBpZiAodGFyZ2V0QmxvY2sgPT0gMClcclxuICAgICAgICB0YXJnZXRCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XHJcblxyXG4gICAgdGFyZ2V0SW5saW5lID8/PSB1bmRlZmluZWQ7XHJcbiAgICB0YXJnZXRCbG9jayA/Pz0gdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIHsgdGFyZ2V0SW5saW5lLCB0YXJnZXRCbG9jayB9O1xyXG59Ki9cclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2xpZGVQcm9wcywgQ3JlYXRlU2xpZGVQcm9wcywgU2xpZGUsIFNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVGYWRlUHJvcHMsIENyZWF0ZUZhZGVQcm9wcywgRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzLCBUcmFuc2l0aW9uYWJsZSwgVXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTbGlkZUZhZGVQcm9wcyBleHRlbmRzIENyZWF0ZUZhZGVQcm9wcywgQ3JlYXRlU2xpZGVQcm9wcyB7IH1cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZUZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTbGlkZUZhZGVQcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBkZWxheU1vdW50VW50aWxTaG93biwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogU2xpZGVGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICBcclxuICAgIC8vKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSA9IHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9KSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvbmFibGU8RT5cclxuICAgICAgICBtZWFzdXJlPXtmYWxzZX1cclxuICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XHJcbiAgICAgICAgY2xhc3NCYXNlPXtjbGFzc0Jhc2V9XHJcbiAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cclxuICAgICAgICB7Li4udXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UsIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzLCBUcmFuc2l0aW9uYWJsZSwgVHJhbnNpdGlvbmFibGVQcm9wcywgVXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBvcmlnaW4sIG1pbmltdW0gc2l6ZSwgYW5kIGRpcmVjdGlvbiBvZiB0aGUgem9vbSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVpvb21Qcm9wcyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAqL1xyXG4gICAgem9vbU9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWCBjb21wb25lbnQpXHJcbiAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAqL1xyXG4gICAgem9vbU9yaWdpbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWSBjb21wb25lbnQpXHJcbiAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAqL1xyXG4gICAgem9vbU9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICogQGRlZmF1bHQgMFxyXG4gICAgICovXHJcbiAgICB6b29tTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgKi9cclxuICAgIHpvb21NaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAqL1xyXG4gICAgem9vbU1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGN1c3RvbWl6aW5nIHRoZSBjbGFzcyBuYW1lIHVzZWQgKGluIHRoZSBmb3JtYXQgb2YgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lcmApXHJcbiAgICAgKiBAZGVmYXVsdCBcInRyYW5zaXRpb25cIlxyXG4gICAgICovXHJcbiAgICBjbGFzc0Jhc2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBkZWxheU1vdW50VW50aWxTaG93bj86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9OiBQYXJ0aWFsPENyZWF0ZVpvb21Qcm9wcz4pIHtcclxuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZVpvb21Qcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogWm9vbVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvbmFibGU8RT5cclxuICAgICAgICBtZWFzdXJlPXtmYWxzZX1cclxuICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XHJcbiAgICAgICAgY2xhc3NCYXNlPXtjbGFzc0Jhc2V9XHJcbiAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cclxuICAgICAgICB7Li4udXNlTWVyZ2VkUHJvcHM8RT4oY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9KSwgeyAuLi5yZXN0LCByZWYgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBVc2VUcmFuc2l0aW9uUHJvcHMsIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IENyZWF0ZUZhZGVQcm9wcywgY3JlYXRlRmFkZVByb3BzLCBGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBDcmVhdGVab29tUHJvcHMsIGNyZWF0ZVpvb21Qcm9wcywgWm9vbSwgWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVpvb21GYWRlUHJvcHMgZXh0ZW5kcyBDcmVhdGVab29tUHJvcHMsIENyZWF0ZUZhZGVQcm9wcyB7IH1cclxuZXhwb3J0IGludGVyZmFjZSBab29tRmFkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZVpvb21GYWRlUHJvcHM+LCBPbWl0PFVzZVRyYW5zaXRpb25Qcm9wcywgXCJtZWFzdXJlXCI+LCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlczxFPiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9OiBab29tRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvbmFibGU8RT5cclxuICAgICAgICBtZWFzdXJlPXtmYWxzZX1cclxuICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgIGR1cmF0aW9uPXtkdXJhdGlvbn1cclxuICAgICAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XHJcbiAgICAgICAgY2xhc3NCYXNlPXtjbGFzc0Jhc2V9XHJcbiAgICAgICAgZXhpdFZpc2liaWxpdHk9e2V4aXRWaXNpYmlsaXR5fVxyXG4gICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cclxuICAgICAgICB7Li4udXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9KSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGlkZVByb3BzLCBDcmVhdGVTbGlkZVByb3BzLCBTbGlkZSwgU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVpvb21Qcm9wcywgQ3JlYXRlWm9vbVByb3BzLCBab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMsIFRyYW5zaXRpb25hYmxlLCBVc2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVNsaWRlWm9vbVByb3BzIGV4dGVuZHMgQ3JlYXRlWm9vbVByb3BzLCBDcmVhdGVTbGlkZVByb3BzIHsgfVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZVNsaWRlWm9vbVByb3BzPiwgT21pdDxVc2VUcmFuc2l0aW9uUHJvcHMsIFwibWVhc3VyZVwiPiwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RT4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfTogU2xpZGVab29tUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFuc2l0aW9uYWJsZTxFPlxyXG4gICAgICAgIG1lYXN1cmU9e2ZhbHNlfVxyXG4gICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxyXG4gICAgICAgIGFuaW1hdGVPbk1vdW50PXthbmltYXRlT25Nb3VudH1cclxuICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgICAgICBleGl0VmlzaWJpbGl0eT17ZXhpdFZpc2liaWxpdHl9XHJcbiAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd249e2RlbGF5TW91bnRVbnRpbFNob3dufVxyXG4gICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0pLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KSk7XHJcbiIsImltcG9ydCB7IENyZWF0ZUZhZGVQcm9wcywgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGlkZVByb3BzLCBDcmVhdGVTbGlkZVByb3BzLCBTbGlkZSwgU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVpvb21Qcm9wcywgQ3JlYXRlWm9vbVByb3BzLCBab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMsIFRyYW5zaXRpb25hYmxlLCBVc2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVNsaWRlWm9vbUZhZGVQcm9wcyBleHRlbmRzIENyZWF0ZVpvb21Qcm9wcywgQ3JlYXRlU2xpZGVQcm9wcywgQ3JlYXRlRmFkZVByb3BzIHsgfVxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbUZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTbGlkZVpvb21GYWRlUHJvcHM+LCBPbWl0PFVzZVRyYW5zaXRpb25Qcm9wcywgXCJtZWFzdXJlXCI+LCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlczxFPiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1heCwgZmFkZU1pbiwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH06IFNsaWRlWm9vbUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIFxyXG4gIC8vICAoeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUcmFuc2l0aW9uYWJsZTxFPlxyXG4gICAgICAgIG1lYXN1cmU9e2ZhbHNlfVxyXG4gICAgICAgIHNob3c9e3Nob3d9XHJcbiAgICAgICAgZHVyYXRpb249e2R1cmF0aW9ufVxyXG4gICAgICAgIGFuaW1hdGVPbk1vdW50PXthbmltYXRlT25Nb3VudH1cclxuICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cclxuICAgICAgICBleGl0VmlzaWJpbGl0eT17ZXhpdFZpc2liaWxpdHl9XHJcbiAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd249e2RlbGF5TW91bnRVbnRpbFNob3dufVxyXG4gICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0pLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSksXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSlcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcywgVHJhbnNpdGlvbmFibGUsIFRyYW5zaXRpb25hYmxlUHJvcHMsIFVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gYW5kIGV4dGVudCBvZiB0aGUgZmxpcCBlZmZlY3QuIFxuICogVmFsdWVzIGFyZSByZWxhdGl2ZSwgd2l0aCAxIG9yIC0xIGJlaW5nIHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQgaW4gdGhhdCBkaXJlY3Rpb24uXG4gKiBgMC41YCwgZm9yIGV4YW1wbGUsIHdvdWxkIGZsaXAgdG8gdGhlIHJpZ2h0IGJ5IDUwJSBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZUZsaXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgaW5saW5lIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxuICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxuICAgICAqL1xuICAgIGZsaXBBbmdsZUlubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0YXJnZXQgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIHJvdGF0ZSB0b3dhcmRzIG9uIHRoZSBibG9jayBheGlzIChYIGF4aXMgZm9yIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcbiAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cbiAgICAgKi9cbiAgICBmbGlwQW5nbGVCbG9jazogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFNpbmNlIHRoaXMgaXMgYSAzRCBlZmZlY3QsIGEgcGVyc3BlY3RpdmUgdmFsdWUgaXMgbmVlZGVkLlxuICAgICAqIEBkZWZhdWx0IDgwMHB4XG4gICAgICovXG4gICAgcGVyc3BlY3RpdmU6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEFsbG93cyBjdXN0b21pemluZyB0aGUgY2xhc3MgbmFtZSB1c2VkIChpbiB0aGUgZm9ybWF0IG9mIGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgKVxuICAgICAqIEBkZWZhdWx0IFwidHJhbnNpdGlvblwiXG4gICAgICovXG4gICAgY2xhc3NCYXNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBkZWxheU1vdW50VW50aWxTaG93bj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmxpcFByb3BzPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfTogUGFydGlhbDxDcmVhdGVGbGlwUHJvcHM+KTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4ge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmxpcGAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyhmbGlwQW5nbGVJbmxpbmUgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tcGVyc3BlY3RpdmVgXTogYCR7KHBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xuICAgIH1cbn1cblxuXG4vLyBOb3RlOiBDcmVhdGVGbGlwUHJvcHMgaXMgKmludGVudGlvbmFsbHkqIG5vdCBtYWRlIHBhcnRpYWwgaGVyZS5cbmV4cG9ydCBpbnRlcmZhY2UgRmxpcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZUZsaXBQcm9wcz4sIE9taXQ8VXNlVHJhbnNpdGlvblByb3BzLCBcIm1lYXN1cmVcIj4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHsgfTtcblxuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXG4gKiBcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKiBcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcbiAqIChgZmxpcElubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pIFxuICogXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXA8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH06IEZsaXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDkwKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gZmxpcEFuZ2xlSW5saW5lOyB9LCBbZmxpcEFuZ2xlSW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xuXG4gICAgaWYgKGZsaXBBbmdsZUlubGluZSA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAoZmxpcEFuZ2xlQmxvY2sgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlQmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlPEU+XG4gICAgICAgICAgICBtZWFzdXJlPXtmYWxzZX1cbiAgICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgICBkdXJhdGlvbj17ZHVyYXRpb259XG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudD17YW5pbWF0ZU9uTW91bnR9XG4gICAgICAgICAgICBjbGFzc0Jhc2U9e2NsYXNzQmFzZX1cbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5PXtleGl0VmlzaWJpbGl0eX1cbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duPXtkZWxheU1vdW50VW50aWxTaG93bn1cbiAgICAgICAgICAgIHsuLi51c2VNZXJnZWRQcm9wczxFPihjcmVhdGVGbGlwUHJvcHM8RT4oeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pLCB7IC4uLnJlc3QsIHJlZiB9KX1cbiAgICAgICAgLz5cbiAgICApO1xufSkpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnRDaGlsZHJlbiwgY3JlYXRlQ29udGV4dCwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcyB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3YXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTd2FwcGFibGVQcm9wcz4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHtcclxuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTd2FwcGFibGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBjb21wb25lbnQgaXMgaW5saW5lLWdyaWQgb3IgZ3JpZC4gXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBjaGlsZCBlbGVtZW50IGlzIGxvb2tlZCBhdC4gSWYgaXQncyBhIHNwYW4gb3Igb3RoZXIgaW5saW5lIGVsZW1lbnQsIGlubGluZSBpcyBhc3N1bWVkLiBcclxuICAgICAqIChBIHNpbXBseS1mb29sZWQgaGV1cmlzdGljLS1wcm92aWRlIHRoaXMgcHJvcCBpZiBuZWNlc3NhcnkpXHJcbiAgICAgKi9cclxuICAgIGlubGluZTogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgY3VzdG9taXppbmcgdGhlIGNsYXNzIG5hbWUgdXNlZCAoaW4gdGhlIGZvcm1hdCBvZiBgJHtjbGFzc0Jhc2V9LXN3YXAtY29udGFpbmVyYClcclxuICAgICAqIEBkZWZhdWx0IFwidHJhbnNpdGlvblwiXHJcbiAgICAgKi9cclxuICAgIGNsYXNzQmFzZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wczxQIGV4dGVuZHMge30+KHsgaW5saW5lLCBjbGFzc0Jhc2UgfTogQ3JlYXRlU3dhcHBhYmxlUHJvcHMsIG90aGVyUHJvcHM6IFApIHtcclxuICAgIHR5cGUgRSA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBIVE1MRWxlbWVudDtcclxuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wczxFPih7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cclxuICogXHJcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC4gXHJcbiAqIFxyXG4gKiBMaWtlIGA8VHJhbnNpdGlvbmFibGU+YCwgKnRoaXMgd3JhcHMgYW4gSFRNTEVsZW1lbnQgKG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCkqLiBUaGlzIHdpbGwgYmUgeW91ciBjb250YWluZXIgdGhhdCBob2xkcyBlYWNoIGA8VHJhbnNpdGlvbmFibGU+YCAob3IgY29tcG9uZW50IHRoYXQgdXNlcyBpdCkuIFN0cmljdGx5IHNwZWFraW5nIGl0IGNvdWxkIGJlIGFueXRoaW5nLCBub3QgYSBgPFRyYW5zaXRpb25hYmxlPmAsIGJ1dCBpZiBpdCBkb2VzbnQndCB0cmFuc2l0aW9uIG91dCB0aGVuIGl0J3MganVzdCBnb2luZyB0byBiZSBoYW5naW5nIGFyb3VuZCAxMDAlIG9mIHRoZSB0aW1lLlxyXG4gKiBcclxuICogTG9uZyB3YXkgb2Ygc2F5aW5nLCBpZiB5b3UgZ2V0IGEgY3J5cHRpYyBlcnJvciB3aXRoIHRoaXMgY29tcG9uZW50LCBtYWtlIHN1cmUgaXQgaGFzIGEgc2luZ2xlIGA8ZGl2PmAgY2hpbGQgb3Igc29tZXRoaW5nLlxyXG4gKiBAcGFyYW0gcGFyYW0wIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2hpbGRyZW46IGMsIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH06IFN3YXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gYyBhcyBWTm9kZTtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KCEhY2hpbGRyZW4udHlwZSk7XHJcblxyXG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XHJcblxyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzPEU+KHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW4ucHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGFuaW1hdGVPbk1vdW50ID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZU9uTW91bnQuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiB7IHJldHVybiBhbmltYXRlT25Nb3VudC5jdXJyZW50OyB9IH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PlxyXG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4gYXMgdHlwZW9mIHRyYW5zaXRpb25Qcm9wcyl9XHJcbiAgICAgICAgPC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSkpXHJcblxyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4iLG51bGxdLCJuYW1lcyI6WyJzbGljZSIsIm9wdGlvbnMiLCJ2bm9kZUlkIiwicmVyZW5kZXJRdWV1ZSIsInByZXZEZWJvdW5jZSIsImkiLCJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsInJlbW92ZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjaGlsZHJlbiIsImtleSIsInJlZiIsIm5vcm1hbGl6ZWRQcm9wcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJjcmVhdGVWTm9kZSIsIm9yaWdpbmFsIiwidm5vZGUiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192IiwiRnJhZ21lbnQiLCJDb21wb25lbnQiLCJjb250ZXh0IiwidGhpcyIsImdldERvbVNpYmxpbmciLCJjaGlsZEluZGV4IiwiaW5kZXhPZiIsInNpYmxpbmciLCJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsImNoaWxkIiwiYmFzZSIsImVucXVldWVSZW5kZXIiLCJjIiwicHVzaCIsInByb2Nlc3MiLCJkZWJvdW5jZVJlbmRlcmluZyIsInNldFRpbWVvdXQiLCJxdWV1ZSIsIl9fciIsInNvcnQiLCJhIiwiYiIsInNvbWUiLCJjb21wb25lbnQiLCJjb21taXRRdWV1ZSIsIm9sZFZOb2RlIiwib2xkRG9tIiwicGFyZW50RG9tIiwiX19QIiwiZGlmZiIsIm93bmVyU1ZHRWxlbWVudCIsImNvbW1pdFJvb3QiLCJkaWZmQ2hpbGRyZW4iLCJyZW5kZXJSZXN1bHQiLCJuZXdQYXJlbnRWTm9kZSIsIm9sZFBhcmVudFZOb2RlIiwiZ2xvYmFsQ29udGV4dCIsImlzU3ZnIiwiZXhjZXNzRG9tQ2hpbGRyZW4iLCJpc0h5ZHJhdGluZyIsImoiLCJjaGlsZFZOb2RlIiwibmV3RG9tIiwiZmlyc3RDaGlsZERvbSIsInJlZnMiLCJvbGRDaGlsZHJlbiIsIm9sZENoaWxkcmVuTGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwicmVvcmRlckNoaWxkcmVuIiwicGxhY2VDaGlsZCIsInVubW91bnQiLCJhcHBseVJlZiIsInRtcCIsInRvQ2hpbGRBcnJheSIsIm91dCIsIm5leHREb20iLCJzaWJEb20iLCJvdXRlciIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJkaWZmUHJvcHMiLCJkb20iLCJuZXdQcm9wcyIsIm9sZFByb3BzIiwiaHlkcmF0ZSIsInNldFByb3BlcnR5Iiwic2V0U3R5bGUiLCJzdHlsZSIsInZhbHVlIiwidGVzdCIsIm5hbWUiLCJvbGRWYWx1ZSIsInVzZUNhcHR1cmUiLCJvIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRQcm94eUNhcHR1cmUiLCJldmVudFByb3h5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIm5ld1ZOb2RlIiwiaXNOZXciLCJvbGRTdGF0ZSIsInNuYXBzaG90IiwiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwicHJvdmlkZXIiLCJjb21wb25lbnRDb250ZXh0IiwicmVuZGVySG9vayIsImNvdW50IiwibmV3VHlwZSIsImNvbnRleHRUeXBlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiZG9SZW5kZXIiLCJzdWIiLCJzdGF0ZSIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJkaWZmRWxlbWVudE5vZGVzIiwiZGlmZmVkIiwicm9vdCIsImNiIiwib2xkSHRtbCIsIm5ld0h0bWwiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJpcyIsImRhdGEiLCJjaGlsZE5vZGVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJhdHRyaWJ1dGVzIiwiX19odG1sIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJwYXJlbnRWTm9kZSIsInNraXBSZW1vdmUiLCJyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZXBsYWNlTm9kZSIsImZpcnN0Q2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdFZhbHVlIiwiY29udGV4dElkIiwiQ29uc3VtZXIiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInN1YnMiLCJjdHgiLCJfcHJvcHMiLCJvbGQiLCJzcGxpY2UiLCJlcnJvciIsImVycm9ySW5mbyIsImN0b3IiLCJoYW5kbGVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsInVwZGF0ZSIsImNhbGxiYWNrIiwicyIsImZvcmNlVXBkYXRlIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZpb3VzQ29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJFTVBUWSIsIm9sZEJlZm9yZURpZmYiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJob29rcyIsIl9fSCIsIl9fViIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsImFjdGlvbiIsImN1cnJlbnRWYWx1ZSIsIl9fTiIsIm5leHRWYWx1ZSIsIl9oYXNTY3VGcm9tSG9va3MiLCJwcmV2U2N1IiwicCIsInN0YXRlSG9va3MiLCJmaWx0ZXIiLCJ4IiwiZXZlcnkiLCJzaG91bGRVcGRhdGUiLCJob29rSXRlbSIsInVzZUVmZmVjdCIsImFyZ3MiLCJhcmdzQ2hhbmdlZCIsIl9wZW5kaW5nQXJncyIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsInNoaWZ0IiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFmdGVyTmV4dEZyYW1lIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwic2hhbGxvd0RpZmZlcnMiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsImNvbXBhcmVyIiwibmV4dFByb3BzIiwidXBkYXRlUmVmIiwiTWVtb2VkIiwiZGlzcGxheU5hbWUiLCJpc1JlYWN0Q29tcG9uZW50IiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJvbGREaWZmSG9vayIsIl9fZiIsIlJFQUNUX0ZPUldBUkRfU1lNQk9MIiwiU3ltYm9sIiwiZm9yIiwiZm9yd2FyZFJlZiIsImZuIiwiRm9yd2FyZGVkIiwiY2xvbmUiLCIkJHR5cGVvZiIsIm9sZENhdGNoRXJyb3IiLCJ0aGVuIiwib2xkVW5tb3VudCIsImRldGFjaGVkQ2xvbmUiLCJkZXRhY2hlZFBhcmVudCIsImVmZmVjdCIsIm1hcCIsInJlbW92ZU9yaWdpbmFsIiwib3JpZ2luYWxQYXJlbnQiLCJTdXNwZW5zZSIsIl9fdSIsIl9zdXNwZW5kZXJzIiwic3VzcGVuZGVkIiwiX19hIiwiU3VzcGVuc2VMaXN0IiwiX25leHQiLCJfbWFwIiwiX19SIiwicHJvbWlzZSIsInN1c3BlbmRpbmdWTm9kZSIsInN1c3BlbmRpbmdDb21wb25lbnQiLCJyZXNvbHZlIiwicmVzb2x2ZWQiLCJvblJlc29sdmVkIiwib25TdXNwZW5zaW9uQ29tcGxldGUiLCJzdXNwZW5kZWRWTm9kZSIsInBvcCIsIndhc0h5ZHJhdGluZyIsImRldGFjaGVkQ29tcG9uZW50IiwiX19PIiwiZmFsbGJhY2siLCJsaXN0IiwiZGVsZXRlIiwicmV2ZWFsT3JkZXIiLCJzaXplIiwiZGVsZWdhdGVkIiwiZ2V0IiwidW5zdXNwZW5kIiwid3JhcHBlZFVuc3VzcGVuZCIsIk1hcCIsInJldmVyc2UiLCJzZXQiLCJfdGhpcyIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIkNBTUVMX1BST1BTIiwiSVNfRE9NIiwib25DaGFuZ2VJbnB1dFR5cGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsInYiLCJ3cml0YWJsZSIsIm9sZEV2ZW50SG9vayIsImVtcHR5IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjYW5jZWxCdWJibGUiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwicGVyc2lzdCIsIm5hdGl2ZUV2ZW50IiwiY2xhc3NOYW1lRGVzY3JpcHRvciIsImNsYXNzIiwib2xkVk5vZGVIb29rIiwibm9uQ3VzdG9tRWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWQiLCJjbGFzc05hbWUiLCJlbnVtZXJhYmxlIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsInVzZUVuc3VyZVN0YWJpbGl0eSIsInBhcmVudEhvb2tOYW1lIiwidmFsdWVzIiwiaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkiLCJzaG93bkVycm9yIiwidXNlSGVscGVyIiwiY29uc29sZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsImN1c3RvbURlYm91bmNlUmVuZGVyaW5nIiwidmFsdWVSZWYiLCJVbnNldCIsInJlYXNvblJlZiIsIndhcm5pbmdSZWYiLCJkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCIsImNsZWFudXBDYWxsYmFja1JlZiIsIm9uU2hvdWxkQ2xlYW5VcCIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiZXgiLCJnZXRWYWx1ZSIsIndhcm4iLCJzZXRWYWx1ZSIsInJlYXNvbiIsIkZ1bmN0aW9uIiwibmV4dFJlYXNvbiIsIm5leHREZXAiLCJwcmV2RGVwIiwicmV0dXJuTnVsbCIsInJ1bkltbWVkaWF0ZWx5IiwiVGFibGUiLCJiYXNlNjQiLCJyYW5kb202Qml0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbTY0Qml0cyIsImdlbmVyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJuIiwiam9pbiIsInByZXZpb3VzSW5wdXRzIiwidG9SdW4iLCJjb21taXROYW1lIiwib3JpZ2luYWxDb21taXQiLCJuZXdDb21taXQiLCJpZCIsImVmZmVjdEluZm8iLCJvbGRJbnB1dHMiLCJpbnB1dHMiLCJjbGVhciIsInVzZUJlZm9yZUxheW91dEVmZmVjdCIsInVzZVN0YWJsZUdldHRlciIsIkVycm9yIiwidXNlTWVyZ2VkQ2hpbGRyZW4iLCJsaHMiLCJyaHMiLCJ0IiwiY2xzeCIsInVzZU1lcmdlZENsYXNzZXMiLCJsaHNDbGFzcyIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwiYXNzZXJ0IiwidXNlTWVyZ2VkUmVmcyIsImNvbWJpbmVkIiwic3R5bGVTdHJpbmdUb09iamVjdCIsImZyb21FbnRyaWVzIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwibG9nIiwidXNlTWVyZ2VkUHJvcHMiLCJhbGxQcm9wcyIsInJldCIsInVzZU1lcmdlZFByb3BzMiIsImtub3ducyIsIm1lcmdlVW5rbm93biIsImxoc1ZhbHVlIiwicmhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImxoc0FsbCIsInJoc0FsbCIsImxoc0tleVUiLCJsaHNLZXkiLCJoYXMiLCJyaHNLZXlVIiwicmhzS2V5IiwibHYiLCJydiIsIlByb21pc2UiLCJhbGwiLCJ1c2VSZWZFbGVtZW50IiwicmVmRWxlbWVudFBhcmFtZXRlcnMiLCJvbkVsZW1lbnRDaGFuZ2UiLCJvbk1vdW50Iiwib25Vbm1vdW50IiwiaGFuZGxlciIsInByZXZWYWx1ZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwicHJvcHNTdGFibGUiLCJyZWZFbGVtZW50UmV0dXJuIiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJfYSIsIl9iIiwiX2MiLCJkZXN0cnVjdG9yIiwibnVsbGFibGUiLCJ0b3AiLCJlbGVtcyIsImVsZW1lbnQiLCJyZW1vdmUiLCJuZXdUb3AiLCJ0b0tlZXBJbmVydCIsIm9sZFBhcmVudHMiLCJuZXdQYXJlbnRzIiwiYm9keSIsInRvU2tpcCIsIm9sZEluZXJ0IiwibmV3SW5lcnQiLCJzaWJsaW5nc1RvUmVzdG9yZSIsImluZXJ0IiwiYWRkIiwiZWxlbWVudHMiLCJtbyIsImRpc2Nvbm5lY3QiLCJzaWJsaW5ncyIsInBhcmVudCIsImluZXJ0ZWRTaWJsaW5ncyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJtdXRhdGlvbnMiLCJwYXJlbnRzIiwibXV0YXRpb24iLCJ0YXJnZXQiLCJpZHgiLCJpbmVydGVkQ2hpbGQiLCJyZW1vdmVkTm9kZXMiLCJpbmZvIiwiYWRkZWROb2RlcyIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhc3NpZ25lZFNsb3QiLCJzaGFkb3dSb290IiwicmVzdWx0Iiwibm9kZXMiLCJzbG90cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIiRibG9ja2luZ0VsZW1lbnRzIiwiZ2xvYmFsIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIndpbmRvdyIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiX29uTXV0YXRpb24iLCJzdWJ0cmVlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIl9hZG9wdEluZXJ0Um9vdCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsIl9vbkRvY3VtZW50TG9hZGVkIiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJpbmVydEVsZW1lbnQiLCJ1bnNoaWZ0Iiwic2hhZG93Um9vdEFuY2VzdG9yIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiX2kiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJIVE1MRWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic2V0U3RhdGVQIiwidXNlU3RhdGVQIiwiZ2V0U3RhdGUiLCJpc05hTiIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsIm9iamVjdFByb3RvIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJmcmVlUHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsImlzVHlwZWRBcnJheSIsIlN3YXBwYWJsZUNvbnRleHQiLCJnZXRBbmltYXRlT25Nb3VudCIsImRlZmF1bHRDbGFzc0Jhc2UiLCJnaXZlbiIsImdldFRpbWVvdXREdXJhdGlvbiIsIm1heCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3RyIiwiZW5kc1dpdGgiLCJzdWJzdHJpbmciLCJwYXJzZVN0YXRlIiwibmV4dFN0YXRlIiwidXNlVHJhbnNpdGlvbiIsInNob3ciLCJhbmltYXRlT25Nb3VudCIsIm1lYXN1cmUiLCJtIiwiY2xhc3NCYXNlIiwiZXhpdFZpc2liaWxpdHkiLCJkdXJhdGlvbiIsImQiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJnZXRNZWFzdXJlIiwiZ2V0RXhpdFZpc2liaWxpdHkiLCJjc3NQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lcyIsImhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCIsImRpcmVjdGlvbiIsInBoYXNlIiwidGltZW91dEhhbmRsZSIsInRpbWVvdXRDbGVhckZ1bmN0aW9uIiwib3RoZXJQcm9wcyIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJ1cGRhdGVTaXplUHJvcGVydGllcyIsIm5leHRTaXplIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib25TdGF0ZUNoYW5nZSIsInByZXZTdGF0ZSIsIm5leHREaXJlY3Rpb24iLCJuZXh0UGhhc2UiLCJmb3JjZVJlZmxvdyIsImN1cnJlbnRTdGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50UGhhc2UiLCJJc1Zpc2libGVDb250ZXh0IiwiVHJhbnNpdGlvbmFibGUiLCJkZWxheU1vdW50VW50aWxTaG93biIsInRyYW5zaXRpb25Qcm9wcyIsImNoaWxkcmVuSXNWbm9kZSIsImZpbmFsUHJvcHMiLCJyZW5kZXJDaGlsZHJlbiIsImhhc1JlbmRlcmVkQ2hpbGRyZW4iLCJoIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImNyZWF0ZUNsaXBQcm9wcyIsImNsaXBNaW4iLCJjbGlwTWluQmxvY2siLCJjbGlwTWluSW5saW5lIiwiY2xpcE9yaWdpbiIsImNsaXBPcmlnaW5CbG9jayIsImNsaXBPcmlnaW5JbmxpbmUiLCJDbGlwIiwicmVzdCIsImNyZWF0ZUZhZGVQcm9wcyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsIkNsaXBGYWRlIiwiY3JlYXRlQ29sbGFwc2VQcm9wcyIsIm1pbkJsb2NrU2l6ZSIsIkNvbGxhcHNlIiwiQ29sbGFwc2VGYWRlIiwiY3JlYXRlU2xpZGVQcm9wcyIsInNsaWRlVGFyZ2V0SW5saW5lIiwic2xpZGVUYXJnZXRCbG9jayIsIlNsaWRlIiwiU2xpZGVGYWRlIiwiY3JlYXRlWm9vbVByb3BzIiwiem9vbU9yaWdpbiIsInpvb21PcmlnaW5JbmxpbmUiLCJ6b29tT3JpZ2luQmxvY2siLCJ6b29tTWluIiwiem9vbU1pbklubGluZSIsInpvb21NaW5CbG9jayIsIlpvb20iLCJab29tRmFkZSIsIlNsaWRlWm9vbSIsIlNsaWRlWm9vbUZhZGUiLCJjcmVhdGVGbGlwUHJvcHMiLCJmbGlwQW5nbGVJbmxpbmUiLCJmbGlwQW5nbGVCbG9jayIsInBlcnNwZWN0aXZlIiwiRmxpcCIsImxhc3RWYWxpZFRhcmdldElubGluZSIsImxhc3RWYWxpZFRhcmdldEJsb2NrIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJpbmxpbmUiLCJTd2FwcGFibGUiLCJpbmxpbmVFbGVtZW50cyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImhhbGZUZXh0IiwiaW5wdXQiLCJ0aW1lcyIsInN1YnN0ciIsIkRlbW8iLCJzZXRBbmltYXRlT25Nb3VudCIsIndyaXRpbmdNb2RlIiwic2V0V3JpdGluZ01vZGUiLCJzaG93MSIsInNldFNob3cxIiwic2hvdzMiLCJzZXRTaG93MyIsInJlZmxvdyIsInNldFJlZmxvdyIsInNldER1cmF0aW9uIiwidGV4dCIsInNldFRleHQiLCJmbGlja2VyIiwic2V0RmxpY2tlciIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uQ2xpY2siLCJvbklucHV0IiwiY29scyIsInJvd3MiLCJGYWRlRGVtbyIsImNhcmRTaG93IiwiY29udGVudEluZGV4IiwiU2xpZGVEZW1vIiwiWm9vbURlbW8iLCJDbGlwRGVtbyIsIkNvbGxhcHNlRGVtbyIsIlpvb21TbGlkZURlbW8iLCJGbGlwRGVtbyIsIm1pbiIsInNldE1pbiIsInNldE1heCIsIm9uTWluSW5wdXQiLCJvbk1heElucHV0IiwiQyIsIkNTIiwibWFrZUNoaWxkIiwic3RlcCIsIm9yaWdpblgiLCJzZXRPcmlnaW5YIiwib3JpZ2luWSIsInNldE9yaWdpblkiLCJtaW5YIiwic2V0TWluWCIsIm1pblkiLCJzZXRNaW5ZIiwid2l0aEZhZGUiLCJzZXRXaXRoRmFkZSIsIm9uT3JpZ2luWElucHV0Iiwib25PcmlnaW5ZSW5wdXQiLCJvbk1pblhJbnB1dCIsIm9uTWluWUlucHV0Iiwib25XaXRoRmFkZUlucHV0Iiwic2xpZGVYIiwic2V0U2xpZGVYIiwic2xpZGVZIiwic2V0U2xpZGVZIiwib25TbGlkZVhJbnB1dCIsIm9uU2xpZGVZSW5wdXQiLCJzaWduIiwic2V0TWluQmxvY2tTaXplIiwib25NaW5TaXplIiwiZmxpcFgiLCJzZXRGbGlwWCIsImZsaXBZIiwic2V0RmxpcFkiLCJvbkZsaXBYSW5wdXQiLCJvbkZsaXBZSW5wdXQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJhQSxJQUFBQSxDQUFBQTtJQ2ZQQyxHQ1JGQztJQUFBQSxHQUFBQTtJQ3lLQUMsR0FBQUE7SUFXQUM7SUNyTE9DLEdDRkVDO0lBQUFBLEdBQUFBLEdBQVksRUFBbEI7SUFDTUMsR0FBWSxHQUFBLEVBQUE7SUFDWkMsR0FBcUIsR0FBQSxtRUFBQTtFTE9sQkMsU0FBQUEsR0FBT0MsQ0FBQUEsQ0FBQUEsRUFBS0MsQ0FFM0IsRUFBQTtJQUFBLEtBQUssSUFBSU4sQ0FBQUEsSUFBS00sQ0FBT0QsRUFBQUEsQ0FBQUEsQ0FBSUwsS0FBS00sQ0FBTU4sQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFDcEMsT0FBNkJLLENBQzdCO0VBQUE7RUFRTSxTQUFTRSxHQUFBQSxDQUFXQyxDQUMxQixFQUFBO0lBQUEsSUFBSUMsSUFBYUQsQ0FBS0Ms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
