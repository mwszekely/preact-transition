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
  function useCreateSwappableProps(_ref, otherProps) {
    var {
      inline
    } = _ref;
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
  var Swappable = R(forwardElementRef(function Swappable(_ref2, ref) {
    var _inline;
    var {
        children: c,
        inline,
        childrenAnimateOnMount
      } = _ref2,
      p = _objectWithoutProperties(_ref2, _excluded);
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
  function useTransition(_ref3) {
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
      } = _ref3,
      p = _objectWithoutProperties(_ref3.transitionParameters.propsIncoming, _excluded2);
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
      // (If `show` is true/false, we'll remove the CSS classes during `onChange`)
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
      className: [...classNames.current, "".concat(GetBaseClass()), "".concat(GetBaseClass(), "-ev-").concat(exitVisibility), "".concat(GetBaseClass(), "-inline-direction-", "ltr"), "".concat(GetBaseClass(), "-block-direction-", "ttb")].join(" "),
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
  function useBasePropsFade(_ref4) {
    var {
      fadeParameters: {
        fadeMin,
        fadeMax
      }
    } = _ref4;
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
  var Fade = R(forwardElementRef(function Fade(_ref5, ref) {
    var {
        duration,
        delayMountUntilShown,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref5,
      rest = _objectWithoutProperties(_ref5, _excluded3);
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
  function useBasePropsClip(_ref6) {
    var _ref7, _ref8, _ref9, _ref10;
    var {
      clipParameters: {
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline
      }
    } = _ref6;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: clsx("".concat(GetBaseClass(), "-clip")),
      style: {
        ["--".concat(GetBaseClass(), "-clip-origin-inline")]: (_ref7 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref7 !== void 0 ? _ref7 : 0.5,
        ["--".concat(GetBaseClass(), "-clip-origin-block")]: (_ref8 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref8 !== void 0 ? _ref8 : 0,
        ["--".concat(GetBaseClass(), "-clip-min-inline")]: (_ref9 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref9 !== void 0 ? _ref9 : 1,
        ["--".concat(GetBaseClass(), "-clip-min-block")]: (_ref10 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref10 !== void 0 ? _ref10 : 0
      }
    };
  }
  var Clip = R(forwardElementRef(function Clip(_ref11, ref) {
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
      } = _ref11,
      rest = _objectWithoutProperties(_ref11, _excluded4);
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
  var ClipFade = R(forwardElementRef(function ClipFade(_ref12, ref) {
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
      } = _ref12,
      rest = _objectWithoutProperties(_ref12, _excluded5);
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
  function useBasePropsCollapse(_ref13) {
    var {
      collapseParameters: {
        minBlockSize
      }
    } = _ref13;
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
  var Collapse = R(forwardElementRef(function Collapse(_ref14, ref) {
    var {
        show,
        duration,
        delayMountUntilShown,
        minBlockSize,
        animateOnMount,
        exitVisibility,
        onVisibilityChange
      } = _ref14,
      rest = _objectWithoutProperties(_ref14, _excluded6);
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
  var CollapseFade = R(forwardElementRef(function CollapseFade(_ref15, ref) {
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
      } = _ref15,
      rest = _objectWithoutProperties(_ref15, _excluded7);
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
  function useBasePropsFlip(_ref16) {
    var _useLastNonNullValue, _useLastNonNullValue2;
    var {
      flipParameters: {
        flipAngleBlock,
        flipAngleInline,
        flipPerspective
      }
    } = _ref16;
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
  var Flip = R(forwardElementRef(function Flip(_ref17, ref) {
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
      } = _ref17,
      rest = _objectWithoutProperties(_ref17, _excluded8);
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
  function useBasePropsSlide(_ref18) {
    var _slideTargetInline, _slideTargetBlock;
    var {
      slideParameters: {
        slideTargetInline,
        slideTargetBlock
      }
    } = _ref18;
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
  var Slide = R(forwardElementRef(function Slide(_ref19, ref) {
    var {
        duration,
        slideTargetInline,
        slideTargetBlock,
        show,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown
      } = _ref19,
      rest = _objectWithoutProperties(_ref19, _excluded9);
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
  var SlideFade = R(forwardElementRef(function SlideFade(_ref20, ref) {
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
      } = _ref20,
      rest = _objectWithoutProperties(_ref20, _excluded10);
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
  function useBasePropsZoom(_ref21) {
    var _ref22, _ref23, _ref24, _ref25;
    var {
      zoomParameters: {
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock
      }
    } = _ref21;
    var {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-zoom"),
      style: {
        ["--".concat(GetBaseClass(), "-zoom-origin-inline")]: "".concat((_ref22 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref22 !== void 0 ? _ref22 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-origin-block")]: "".concat((_ref23 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref23 !== void 0 ? _ref23 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-min-inline")]: "".concat((_ref24 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref24 !== void 0 ? _ref24 : 0),
        ["--".concat(GetBaseClass(), "-zoom-min-block")]: "".concat((_ref25 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref25 !== void 0 ? _ref25 : 0)
      }
    };
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  var Zoom = R(forwardElementRef(function Zoom(_ref26, ref) {
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
      } = _ref26,
      rest = _objectWithoutProperties(_ref26, _excluded11);
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
  var SlideZoom = R(forwardElementRef(function SlideZoom(_ref27, ref) {
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
      } = _ref27,
      rest = _objectWithoutProperties(_ref27, _excluded12);
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
  var SlideZoomFade = R(forwardElementRef(function SlideZoomFade(_ref28, ref) {
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
      } = _ref28,
      rest = _objectWithoutProperties(_ref28, _excluded13);
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
  var ZoomFade = R(forwardElementRef(function ZoomFade(_ref29, ref) {
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
      } = _ref29,
      rest = _objectWithoutProperties(_ref29, _excluded14);
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
      checked: show1 == "pending",
      disabled: show1 == "hiding" || show1 == "showing"
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
  function FadeDemo(_ref30) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref30;
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
  function ClipDemo(_ref31) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref31;
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
  function ZoomSlideDemo(_ref32) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref32;
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
  function ZoomDemo(_ref33) {
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
  function SlideDemo(_ref34) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref34;
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
  function CollapseDemo(_ref35) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref35;
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
  function FlipDemo(_ref36) {
    var {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount
    } = _ref36;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAZGI3NTAxNjYyOTM5NmRjMjA5MmMyYzA5MDQzZjU0MGQ0MjIzYWNhNl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAZGI3NTAxNjYyOTM5NmRjMjA5MmMyYzA5MDQzZjU0MGQ0MjIzYWNhNl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQGRiNzUwMTY2MjkzOTZkYzIwOTJjMmMwOTA0M2Y1NDBkNDIyM2FjYTZfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtZ2V0dGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQGRiNzUwMTY2MjkzOTZkYzIwOTJjMmMwOTA0M2Y1NDBkNDIyM2FjYTZfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4udHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAZGI3NTAxNjYyOTM5NmRjMjA5MmMyYzA5MDQzZjU0MGQ0MjIzYWNhNl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQGRiNzUwMTY2MjkzOTZkYzIwOTJjMmMwOTA0M2Y1NDBkNDIyM2FjYTZfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0BkYjc1MDE2NjI5Mzk2ZGMyMDkyYzJjMDkwNDNmNTQwZDQyMjNhY2E2X3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0BkYjc1MDE2NjI5Mzk2ZGMyMDkyYzJjMDkwNDNmNTQwZDQyMjNhY2E2X3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXByb3BzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQGRiNzUwMTY2MjkzOTZkYzIwOTJjMmMwOTA0M2Y1NDBkNDIyM2FjYTZfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vYmxvY2tpbmctZWxlbWVudHNAMC4xLjEvbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL3NyYy9ibG9ja2luZy1lbGVtZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQGRiNzUwMTY2MjkzOTZkYzIwOTJjMmMwOTA0M2Y1NDBkNDIyM2FjYTZfcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbm9kZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3V0aWwuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL1B1cmVDb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL21lbW8uanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL2ZvcndhcmRSZWYuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL0NoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9zdXNwZW5zZS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvc3VzcGVuc2UtbGlzdC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvcmVuZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAZGI3NTAxNjYyOTM5NmRjMjA5MmMyYzA5MDQzZjU0MGQ0MjIzYWNhNl9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvdGltaW5nL3VzZS1hbmltYXRpb24tZnJhbWUudHN4IiwiLi4vc3JjL3V0aWwvY29udGV4dC50c3giLCIuLi9zcmMvdXRpbC91dGlsLnRzeCIsIi4uL3NyYy9zd2FwcGFibGUudHN4IiwiLi4vc3JjL3RyYW5zaXRpb25hYmxlLnRzeCIsIi4uL3NyYy9mYWRlLnRzeCIsIi4uL3NyYy9jbGlwLnRzeCIsIi4uL3NyYy9jbGlwLWZhZGUudHN4IiwiLi4vc3JjL2NvbGxhcHNlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS1mYWRlLnRzeCIsIi4uL3NyYy9mbGlwLnRzeCIsIi4uL3NyYy9zbGlkZS50c3giLCIuLi9zcmMvc2xpZGUtZmFkZS50c3giLCIuLi9zcmMvem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS1mYWRlLnRzeCIsIi4uL3NyYy96b29tLWZhZGUudHN4IiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWlnbm9yZSBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gbnVsbCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBudWxsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0Ly8gX25leHREb20gbXVzdCBiZSBpbml0aWFsaXplZCB0byB1bmRlZmluZWQgYi9jIGl0IHdpbGwgZXZlbnR1YWxseVxuXHRcdC8vIGJlIHNldCB0byBkb20ubmV4dFNpYmxpbmcgd2hpY2ggY2FuIHJldHVybiBgbnVsbGAgYW5kIGl0IGlzIGltcG9ydGFudFxuXHRcdC8vIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhbiB1bmluaXRpYWxpemVkIF9uZXh0RG9tIGFuZFxuXHRcdC8vIGEgX25leHREb20gdGhhdCBoYXMgYmVlbiBzZXQgdG8gYG51bGxgXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IG51bGwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBudWxsICYmIG9wdGlvbnMudm5vZGUgIT0gbnVsbCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IG51bGwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkaWZmLCBjb21taXRSb290IH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBudWxsICYmIHRoaXMuX25leHRTdGF0ZSAhPT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBudWxsKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gbnVsbCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX3BhcmVudC5fY2hpbGRyZW4uaW5kZXhPZih2bm9kZSkgKyAxKVxuXHRcdFx0OiBudWxsO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IG51bGwgJiYgc2libGluZy5fZG9tICE9IG51bGwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGxldCB2bm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0b2xkRG9tID0gdm5vZGUuX2RvbSxcblx0XHRwYXJlbnREb20gPSBjb21wb25lbnQuX3BhcmVudERvbTtcblxuXHRpZiAocGFyZW50RG9tKSB7XG5cdFx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdFx0Y29uc3Qgb2xkVk5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRvbGRWTm9kZS5fb3JpZ2luYWwgPSB2bm9kZS5fb3JpZ2luYWwgKyAxO1xuXG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdHZub2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nICE9IG51bGwgPyBbb2xkRG9tXSA6IG51bGwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBudWxsID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBvbGREb20sXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nXG5cdFx0KTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG5cblx0XHRpZiAodm5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gbnVsbCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gbnVsbDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gdm5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYyBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGMpIHtcblx0aWYgKFxuXHRcdCghYy5fZGlydHkgJiZcblx0XHRcdChjLl9kaXJ0eSA9IHRydWUpICYmXG5cdFx0XHRyZXJlbmRlclF1ZXVlLnB1c2goYykgJiZcblx0XHRcdCFwcm9jZXNzLl9yZXJlbmRlckNvdW50KyspIHx8XG5cdFx0cHJldkRlYm91bmNlICE9PSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBzZXRUaW1lb3V0KShwcm9jZXNzKTtcblx0fVxufVxuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdGxldCBxdWV1ZTtcblx0d2hpbGUgKChwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gcmVyZW5kZXJRdWV1ZS5sZW5ndGgpKSB7XG5cdFx0cXVldWUgPSByZXJlbmRlclF1ZXVlLnNvcnQoKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aCk7XG5cdFx0cmVyZW5kZXJRdWV1ZSA9IFtdO1xuXHRcdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHRcdC8vIHByb2Nlc3MoKSBjYWxscyBmcm9tIGdldHRpbmcgc2NoZWR1bGVkIHdoaWxlIGBxdWV1ZWAgaXMgc3RpbGwgYmVpbmcgY29uc3VtZWQuXG5cdFx0cXVldWUuc29tZShjID0+IHtcblx0XHRcdGlmIChjLl9kaXJ0eSkgcmVuZGVyQ29tcG9uZW50KGMpO1xuXHRcdH0pO1xuXHR9XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjb250ZXh0SWQpIHtcblx0Y29udGV4dElkID0gJ19fY0MnICsgaSsrO1xuXG5cdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0X2lkOiBjb250ZXh0SWQsXG5cdFx0X2RlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0Q29uc3VtZXIocHJvcHMsIGNvbnRleHRWYWx1ZSkge1xuXHRcdFx0Ly8gcmV0dXJuIHByb3BzLmNoaWxkcmVuKFxuXHRcdFx0Ly8gXHRjb250ZXh0W2NvbnRleHRJZF0gPyBjb250ZXh0W2NvbnRleHRJZF0ucHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWVcblx0XHRcdC8vICk7XG5cdFx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0XHR9LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0UHJvdmlkZXIocHJvcHMpIHtcblx0XHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdFx0bGV0IHN1YnMgPSBbXTtcblx0XHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0XHRjdHhbY29udGV4dElkXSA9IHRoaXM7XG5cblx0XHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihfcHJvcHMpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvLyBJIHRoaW5rIHRoZSBmb3JjZWQgdmFsdWUgcHJvcGFnYXRpb24gaGVyZSB3YXMgb25seSBuZWVkZWQgd2hlbiBgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ2Agd2FzIGJlaW5nIGJ5cGFzc2VkOlxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9jb21taXQvNGQzMzlmYjgwM2JlYTA5ZTlmMTk4YWJmMzhjYTFiZjhlYTRiNzc3MSNkaWZmLTU0NjgyY2UzODA5MzVhNzE3ZTQxYjhiZmM1NDczN2Y2UjM1OFxuXHRcdFx0XHRcdFx0Ly8gSW4gdGhvc2UgY2FzZXMgdGhvdWdoLCBldmVuIHdpdGggdGhlIHZhbHVlIGNvcnJlY3RlZCwgd2UncmUgZG91YmxlLXJlbmRlcmluZyBhbGwgbm9kZXMuXG5cdFx0XHRcdFx0XHQvLyBJdCBtaWdodCBiZSBiZXR0ZXIgdG8ganVzdCB0ZWxsIGZvbGtzIG5vdCB0byB1c2UgZm9yY2Utc3luYyBtb2RlLlxuXHRcdFx0XHRcdFx0Ly8gQ3VycmVudGx5LCB1c2luZyBgdXNlQ29udGV4dCgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudCB3aWxsIG92ZXJ3cml0ZSBpdHMgYHRoaXMuY29udGV4dGAgdmFsdWUuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dCA9IF9wcm9wcy52YWx1ZTtcblx0XHRcdFx0XHRcdC8vIFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdC8vIH0pO1xuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dFtjb250ZXh0SWRdID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0XHRzdWJzLnNvbWUoZW5xdWV1ZVJlbmRlcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdFx0c3Vicy5wdXNoKGMpO1xuXHRcdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJzLnNwbGljZShzdWJzLmluZGV4T2YoYyksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHdoZW4gaXRcblx0Ly8gZW5jb3VudGVycyBhIFByb3ZpZGVyLiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBzdXBwb3J0XG5cdC8vIHNldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiB0aGUgY29udGV4dCBvYmplY3QgaW5zdGVhZFxuXHQvLyBvZiBvbiB0aGUgY29tcG9uZW50IGl0c2VsZi4gU2VlOlxuXHQvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sI2NvbnRleHRkaXNwbGF5bmFtZVxuXG5cdHJldHVybiAoY29udGV4dC5Qcm92aWRlci5fY29udGV4dFJlZiA9IGNvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPSBjb250ZXh0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiwgRU1QVFlfQVJSIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlXG4gKiBjaGlsZHJlbiBhcmUgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgaSwgaiwgb2xkVk5vZGUsIGNoaWxkVk5vZGUsIG5ld0RvbSwgZmlyc3RDaGlsZERvbSwgcmVmcztcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCByZW5kZXJSZXN1bHQubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyBJZiB0aGlzIG5ld1ZOb2RlIGlzIGJlaW5nIHJldXNlZCAoZS5nLiA8ZGl2PntyZXVzZX17cmV1c2V9PC9kaXY+KSBpbiB0aGUgc2FtZSBkaWZmLFxuXHRcdC8vIG9yIHdlIGFyZSByZW5kZXJpbmcgYSBjb21wb25lbnQgKGUuZy4gc2V0U3RhdGUpIGNvcHkgdGhlIG9sZFZOb2RlcyBzbyBpdCBjYW4gaGF2ZVxuXHRcdC8vIGl0J3Mgb3duIERPTSAmIGV0Yy4gcG9pbnRlcnNcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnbnVtYmVyJyB8fFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2JpZ2ludCdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHQvLyBUZXJzZXIgcmVtb3ZlcyB0aGUgYGNvbnRpbnVlYCBoZXJlIGFuZCB3cmFwcyB0aGUgbG9vcCBib2R5XG5cdFx0Ly8gaW4gYSBgaWYgKGNoaWxkVk5vZGUpIHsgLi4uIH0gY29uZGl0aW9uXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UgZmluZCBhIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBpbiBvbGRDaGlsZHJlbi5cblx0XHQvLyBJZiBmb3VuZCwgZGVsZXRlIHRoZSBhcnJheSBpdGVtIGJ5IHNldHRpbmcgdG8gYHVuZGVmaW5lZGAuXG5cdFx0Ly8gV2UgdXNlIGB1bmRlZmluZWRgLCBhcyBgbnVsbGAgaXMgcmVzZXJ2ZWQgZm9yIGVtcHR5IHBsYWNlaG9sZGVyc1xuXHRcdC8vIChob2xlcykuXG5cdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblxuXHRcdGlmIChcblx0XHRcdG9sZFZOb2RlID09PSBudWxsIHx8XG5cdFx0XHQob2xkVk5vZGUgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSA9PT0gb2xkVk5vZGUudHlwZSlcblx0XHQpIHtcblx0XHRcdG9sZENoaWxkcmVuW2ldID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFaXRoZXIgb2xkVk5vZGUgPT09IHVuZGVmaW5lZCBvciBvbGRDaGlsZHJlbkxlbmd0aCA+IDAsXG5cdFx0XHQvLyBzbyBhZnRlciB0aGlzIGxvb3Agb2xkVk5vZGUgPT0gbnVsbCBvciBvbGRWTm9kZSBpcyBhIHZhbGlkIHZhbHVlLlxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9sZENoaWxkcmVuTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltqXTtcblx0XHRcdFx0Ly8gSWYgY2hpbGRWTm9kZSBpcyB1bmtleWVkLCB3ZSBvbmx5IG1hdGNoIHNpbWlsYXJseSB1bmtleWVkIG5vZGVzLCBvdGhlcndpc2Ugd2UgbWF0Y2ggYnkga2V5LlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgbWF0Y2ggYnkgdHlwZSAoaW4gZWl0aGVyIGNhc2UpLlxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0b2xkVk5vZGUgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLmtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0b2xkQ2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2xkVk5vZGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9sZFZOb2RlID0gb2xkVk5vZGUgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdGlzU3ZnLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0KTtcblxuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblxuXHRcdGlmICgoaiA9IGNoaWxkVk5vZGUucmVmKSAmJiBvbGRWTm9kZS5yZWYgIT0gaikge1xuXHRcdFx0aWYgKCFyZWZzKSByZWZzID0gW107XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSByZWZzLnB1c2gob2xkVk5vZGUucmVmLCBudWxsLCBjaGlsZFZOb2RlKTtcblx0XHRcdHJlZnMucHVzaChqLCBjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLCBjaGlsZFZOb2RlKTtcblx0XHR9XG5cblx0XHRpZiAobmV3RG9tICE9IG51bGwpIHtcblx0XHRcdGlmIChmaXJzdENoaWxkRG9tID09IG51bGwpIHtcblx0XHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgY2hpbGRWTm9kZS50eXBlID09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY2hpbGRyZW4gPT09IG9sZFZOb2RlLl9jaGlsZHJlblxuXHRcdFx0KSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX25leHREb20gPSBvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4oXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdFx0cGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0XHRcdG5ld0RvbSxcblx0XHRcdFx0XHRvbGREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBuZXdQYXJlbnRWTm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gQmVjYXVzZSB0aGUgbmV3UGFyZW50Vk5vZGUgaXMgRnJhZ21lbnQtbGlrZSwgd2UgbmVlZCB0byBzZXQgaXQnc1xuXHRcdFx0XHQvLyBfbmV4dERvbSBwcm9wZXJ0eSB0byB0aGUgbmV4dFNpYmxpbmcgb2YgaXRzIGxhc3QgY2hpbGQgRE9NIG5vZGUuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGBvbGREb21gIGNvbnRhaW5zIHRoZSBjb3JyZWN0IHZhbHVlIGhlcmUgYmVjYXVzZSBpZiB0aGUgbGFzdCBjaGlsZFxuXHRcdFx0XHQvLyBpcyBhIEZyYWdtZW50LWxpa2UsIHRoZW4gb2xkRG9tIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHRvIHRoYXQgY2hpbGQncyBfbmV4dERvbS5cblx0XHRcdFx0Ly8gSWYgdGhlIGxhc3QgY2hpbGQgaXMgYSBET00gVk5vZGUsIHRoZW4gb2xkRG9tIHdpbGwgYmUgc2V0IHRvIHRoYXQgRE9NXG5cdFx0XHRcdC8vIG5vZGUncyBuZXh0U2libGluZy5cblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBvbGREb207XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG9sZERvbSAmJlxuXHRcdFx0b2xkVk5vZGUuX2RvbSA9PSBvbGREb20gJiZcblx0XHRcdG9sZERvbS5wYXJlbnROb2RlICE9IHBhcmVudERvbVxuXHRcdCkge1xuXHRcdFx0Ly8gVGhlIGFib3ZlIGNvbmRpdGlvbiBpcyB0byBoYW5kbGUgbnVsbCBwbGFjZWhvbGRlcnMuIFNlZSB0ZXN0IGluIHBsYWNlaG9sZGVyLnRlc3QuanM6XG5cdFx0XHQvLyBgZWZmaWNpZW50bHkgcmVwbGFjZSBudWxsIHBsYWNlaG9sZGVycyBpbiBwYXJlbnQgcmVyZW5kZXJzYFxuXHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0bmV3UGFyZW50Vk5vZGUuX2RvbSA9IGZpcnN0Q2hpbGREb207XG5cblx0Ly8gUmVtb3ZlIHJlbWFpbmluZyBvbGRDaGlsZHJlbiBpZiB0aGVyZSBhcmUgYW55LlxuXHRmb3IgKGkgPSBvbGRDaGlsZHJlbkxlbmd0aDsgaS0tOyApIHtcblx0XHRpZiAob2xkQ2hpbGRyZW5baV0gIT0gbnVsbCkge1xuXHRcdFx0dW5tb3VudChvbGRDaGlsZHJlbltpXSwgb2xkQ2hpbGRyZW5baV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCByZWZzIG9ubHkgYWZ0ZXIgdW5tb3VudFxuXHRpZiAocmVmcykge1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZWZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcHBseVJlZihyZWZzW2ldLCByZWZzWysraV0sIHJlZnNbKytpXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSkge1xuXHQvLyBOb3RlOiBWTm9kZXMgaW4gbmVzdGVkIHN1c3BlbmRlZCB0cmVlcyBtYXkgYmUgbWlzc2luZyBfY2hpbGRyZW4uXG5cdGxldCBjID0gY2hpbGRWTm9kZS5fY2hpbGRyZW47XG5cdGxldCB0bXAgPSAwO1xuXHRmb3IgKDsgYyAmJiB0bXAgPCBjLmxlbmd0aDsgdG1wKyspIHtcblx0XHRsZXQgdm5vZGUgPSBjW3RtcF07XG5cdFx0aWYgKHZub2RlKSB7XG5cdFx0XHQvLyBXZSB0eXBpY2FsbHkgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdC8vIG9sZFZOb2RlLl9jaGlsZHJlbiB0byBuZXdWTm9kZS5fY2hpbGRyZW4uIElmIHRoYXQgaXMgdGhlIGNhc2UsIHdlIG5lZWRcblx0XHRcdC8vIHRvIHVwZGF0ZSB0aGUgb2xkIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZVxuXHRcdFx0Ly8gKGNoaWxkVk5vZGUgaGVyZSkuXG5cdFx0XHR2bm9kZS5fcGFyZW50ID0gY2hpbGRWTm9kZTtcblxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0b2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKHZub2RlLCBvbGREb20sIHBhcmVudERvbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKHBhcmVudERvbSwgdm5vZGUsIHZub2RlLCBjLCB2bm9kZS5fZG9tLCBvbGREb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2luZGV4JykuQ29tcG9uZW50Q2hpbGRyZW59IGNoaWxkcmVuIFRoZSB1bmZsYXR0ZW5lZFxuICogY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IG51bGwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ2hpbGQoXG5cdHBhcmVudERvbSxcblx0Y2hpbGRWTm9kZSxcblx0b2xkVk5vZGUsXG5cdG9sZENoaWxkcmVuLFxuXHRuZXdEb20sXG5cdG9sZERvbVxuKSB7XG5cdGxldCBuZXh0RG9tO1xuXHRpZiAoY2hpbGRWTm9kZS5fbmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gT25seSBGcmFnbWVudHMgb3IgY29tcG9uZW50cyB0aGF0IHJldHVybiBGcmFnbWVudCBsaWtlIFZOb2RlcyB3aWxsXG5cdFx0Ly8gaGF2ZSBhIG5vbi11bmRlZmluZWQgX25leHREb20uIENvbnRpbnVlIHRoZSBkaWZmIGZyb20gdGhlIHNpYmxpbmdcblx0XHQvLyBvZiBsYXN0IERPTSBjaGlsZCBvZiB0aGlzIGNoaWxkIFZOb2RlXG5cdFx0bmV4dERvbSA9IGNoaWxkVk5vZGUuX25leHREb207XG5cblx0XHQvLyBFYWdlcmx5IGNsZWFudXAgX25leHREb20uIFdlIGRvbid0IG5lZWQgdG8gcGVyc2lzdCB0aGUgdmFsdWUgYmVjYXVzZVxuXHRcdC8vIGl0IGlzIG9ubHkgdXNlZCBieSBgZGlmZkNoaWxkcmVuYCB0byBkZXRlcm1pbmUgd2hlcmUgdG8gcmVzdW1lIHRoZSBkaWZmIGFmdGVyXG5cdFx0Ly8gZGlmZmluZyBDb21wb25lbnRzIGFuZCBGcmFnbWVudHMuIE9uY2Ugd2Ugc3RvcmUgaXQgdGhlIG5leHRET00gbG9jYWwgdmFyLCB3ZVxuXHRcdC8vIGNhbiBjbGVhbiB1cCB0aGUgcHJvcGVydHlcblx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKFxuXHRcdG9sZFZOb2RlID09IG51bGwgfHxcblx0XHRuZXdEb20gIT0gb2xkRG9tIHx8XG5cdFx0bmV3RG9tLnBhcmVudE5vZGUgPT0gbnVsbFxuXHQpIHtcblx0XHRvdXRlcjogaWYgKG9sZERvbSA9PSBudWxsIHx8IG9sZERvbS5wYXJlbnROb2RlICE9PSBwYXJlbnREb20pIHtcblx0XHRcdHBhcmVudERvbS5hcHBlbmRDaGlsZChuZXdEb20pO1xuXHRcdFx0bmV4dERvbSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGBqPG9sZENoaWxkcmVuTGVuZ3RoOyBqKz0yYCBpcyBhbiBhbHRlcm5hdGl2ZSB0byBgaisrPG9sZENoaWxkcmVuTGVuZ3RoLzJgXG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgc2liRG9tID0gb2xkRG9tLCBqID0gMDtcblx0XHRcdFx0KHNpYkRvbSA9IHNpYkRvbS5uZXh0U2libGluZykgJiYgaiA8IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0aiArPSAxXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKHNpYkRvbSA9PSBuZXdEb20pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdEb20sIG9sZERvbSk7XG5cdFx0XHRuZXh0RG9tID0gb2xkRG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgcHJlLWNhbGN1bGF0ZWQgdGhlIG5leHRET00gbm9kZSwgdXNlIGl0LiBFbHNlIGNhbGN1bGF0ZSBpdCBub3dcblx0Ly8gU3RyaWN0bHkgY2hlY2sgZm9yIGB1bmRlZmluZWRgIGhlcmUgY3V6IGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlIG9mIGBuZXh0RG9tYC5cblx0Ly8gU2VlIG1vcmUgZGV0YWlsIGluIGNyZWF0ZS1lbGVtZW50LmpzOmNyZWF0ZVZOb2RlXG5cdGlmIChuZXh0RG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRvbGREb20gPSBuZXh0RG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG4iLCJpbXBvcnQgeyBJU19OT05fRElNRU5TSU9OQUwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogRGlmZiB0aGUgb2xkIGFuZCBuZXcgcHJvcGVydGllcyBvZiBhIFZOb2RlIGFuZCBhcHBseSBjaGFuZ2VzIHRvIHRoZSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBhcHBseVxuICogY2hhbmdlcyB0b1xuICogQHBhcmFtIHtvYmplY3R9IG5ld1Byb3BzIFRoZSBuZXcgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvbGRQcm9wcyBUaGUgb2xkIHByb3BzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtib29sZWFufSBoeWRyYXRlIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb24gbW9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZlByb3BzKGRvbSwgbmV3UHJvcHMsIG9sZFByb3BzLCBpc1N2ZywgaHlkcmF0ZSkge1xuXHRsZXQgaTtcblxuXHRmb3IgKGkgaW4gb2xkUHJvcHMpIHtcblx0XHRpZiAoaSAhPT0gJ2NoaWxkcmVuJyAmJiBpICE9PSAna2V5JyAmJiAhKGkgaW4gbmV3UHJvcHMpKSB7XG5cdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIG51bGwsIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0aWYgKFxuXHRcdFx0KCFoeWRyYXRlIHx8IHR5cGVvZiBuZXdQcm9wc1tpXSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0aSAhPT0gJ2NoaWxkcmVuJyAmJlxuXHRcdFx0aSAhPT0gJ2tleScgJiZcblx0XHRcdGkgIT09ICd2YWx1ZScgJiZcblx0XHRcdGkgIT09ICdjaGVja2VkJyAmJlxuXHRcdFx0b2xkUHJvcHNbaV0gIT09IG5ld1Byb3BzW2ldXG5cdFx0KSB7XG5cdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIG5ld1Byb3BzW2ldLCBvbGRQcm9wc1tpXSwgaXNTdmcpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09PSAnLScpIHtcblx0XHRzdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlKTtcblx0fSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3R5bGVba2V5XSA9ICcnO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnbnVtYmVyJyB8fCBJU19OT05fRElNRU5TSU9OQUwudGVzdChrZXkpKSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZSArICdweCc7XG5cdH1cbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSB2YWx1ZSBvbiBhIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIG1vZGlmeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0IHRoZSBwcm9wZXJ0eSB0b1xuICogQHBhcmFtIHsqfSBvbGRWYWx1ZSBUaGUgb2xkIHZhbHVlIHRoZSBwcm9wZXJ0eSBoYWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5KGRvbSwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlLCBpc1N2Zykge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0eXBlb2Ygb2xkVmFsdWUgPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSBvbGRWYWx1ZSA9ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAob2xkVmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIG9sZFZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCEodmFsdWUgJiYgbmFtZSBpbiB2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0Zm9yIChuYW1lIGluIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCFvbGRWYWx1ZSB8fCB2YWx1ZVtuYW1lXSAhPT0gb2xkVmFsdWVbbmFtZV0pIHtcblx0XHRcdFx0XHRcdHNldFN0eWxlKGRvbS5zdHlsZSwgbmFtZSwgdmFsdWVbbmFtZV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBCZW5jaG1hcmsgZm9yIGNvbXBhcmlzb246IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTc0Yzk1NGJkYjk2NWI5YTAwOTY1YWM2XG5cdGVsc2UgaWYgKG5hbWVbMF0gPT09ICdvJyAmJiBuYW1lWzFdID09PSAnbicpIHtcblx0XHR1c2VDYXB0dXJlID0gbmFtZSAhPT0gKG5hbWUgPSBuYW1lLnJlcGxhY2UoL0NhcHR1cmUkLywgJycpKTtcblxuXHRcdC8vIEluZmVyIGNvcnJlY3QgY2FzaW5nIGZvciBET00gYnVpbHQtaW4gZXZlbnRzOlxuXHRcdGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgaW4gZG9tKSBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpO1xuXHRcdGVsc2UgbmFtZSA9IG5hbWUuc2xpY2UoMik7XG5cblx0XHRpZiAoIWRvbS5fbGlzdGVuZXJzKSBkb20uX2xpc3RlbmVycyA9IHt9O1xuXHRcdGRvbS5fbGlzdGVuZXJzW25hbWUgKyB1c2VDYXB0dXJlXSA9IHZhbHVlO1xuXG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRpZiAoIW9sZFZhbHVlKSB7XG5cdFx0XHRcdGNvbnN0IGhhbmRsZXIgPSB1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5O1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobmFtZSAhPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdGlmIChpc1N2Zykge1xuXHRcdFx0Ly8gTm9ybWFsaXplIGluY29ycmVjdCBwcm9wIHVzYWdlIGZvciBTVkc6XG5cdFx0XHQvLyAtIHhsaW5rOmhyZWYgLyB4bGlua0hyZWYgLS0+IGhyZWYgKHhsaW5rOmhyZWYgd2FzIHJlbW92ZWQgZnJvbSBTVkcgYW5kIGlzbid0IG5lZWRlZClcblx0XHRcdC8vIC0gY2xhc3NOYW1lIC0tPiBjbGFzc1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgveGxpbmsoSHw6aCkvLCAnaCcpLnJlcGxhY2UoL3NOYW1lJC8sICdzJyk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG5hbWUgIT09ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9PSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9PSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9PSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIEFSSUEtYXR0cmlidXRlcyBoYXZlIGEgZGlmZmVyZW50IG5vdGlvbiBvZiBib29sZWFuIHZhbHVlcy5cblx0XHQvLyBUaGUgdmFsdWUgYGZhbHNlYCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdFxuXHRcdC8vIGV4aXN0aW5nIG9uIHRoZSBET00sIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdXMgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgVkRPTSBmcmFtZXdvcmtzIGFsc28gYWx3YXlzIHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZS5pbmRleE9mKCctJykgIT0gLTEpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0dGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIGZhbHNlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuXG5mdW5jdGlvbiBldmVudFByb3h5Q2FwdHVyZShlKSB7XG5cdHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB0cnVlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuIiwiaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgZGlmZlByb3BzLCBzZXRQcm9wZXJ0eSB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgYXNzaWduLCByZW1vdmVOb2RlLCBzbGljZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTVxuICogZWxlbWVudCBhbnkgbmV3IGRvbSBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdFxuICogcmVuZGVyIChleGNlcHQgd2hlbiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZ1xuICogRnJhZ21lbnRzIHRoYXQgaGF2ZSBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0h5ZHJhdGluZ10gV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9oeWRyYXRpbmcgIT0gbnVsbCkge1xuXHRcdGlzSHlkcmF0aW5nID0gb2xkVk5vZGUuX2h5ZHJhdGluZztcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHQvLyBpZiB3ZSByZXN1bWUsIHdlIHdhbnQgdGhlIHRyZWUgdG8gYmUgXCJ1bmxvY2tlZFwiXG5cdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBbb2xkRG9tXTtcblx0fVxuXG5cdGlmICgodG1wID0gb3B0aW9ucy5fZGlmZikpIHRtcChuZXdWTm9kZSk7XG5cblx0dHJ5IHtcblx0XHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQ29tcG9uZW50KG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0aWYgKCFjLnN0YXRlKSBjLnN0YXRlID0ge307XG5cdFx0XHRcdGMuY29udGV4dCA9IGNvbXBvbmVudENvbnRleHQ7XG5cdFx0XHRcdGMuX2dsb2JhbENvbnRleHQgPSBnbG9iYWxDb250ZXh0O1xuXHRcdFx0XHRpc05ldyA9IGMuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9XG5cblx0XHRcdC8vIEludm9rZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcblx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50ICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50ICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IG51bGwgJiZcblx0XHRcdFx0XHRuZXdQcm9wcyAhPT0gb2xkUHJvcHMgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IG51bGwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSkgfHxcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9PSBvbGRWTm9kZS5fb3JpZ2luYWwpIGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLmZvckVhY2godm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGMuX3N0YXRlQ2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLl9zdGF0ZUNhbGxiYWNrc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cdFx0XHRjLl9wYXJlbnREb20gPSBwYXJlbnREb207XG5cblx0XHRcdGxldCByZW5kZXJIb29rID0gb3B0aW9ucy5fcmVuZGVyLFxuXHRcdFx0XHRjb3VudCA9IDA7XG5cdFx0XHRpZiAoJ3Byb3RvdHlwZScgaW4gbmV3VHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblxuXHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGMuX3N0YXRlQ2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5fc3RhdGVDYWxsYmFja3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBudWxsKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghaXNOZXcgJiYgYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdHNuYXBzaG90ID0gYy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaXNUb3BMZXZlbEZyYWdtZW50ID1cblx0XHRcdFx0dG1wICE9IG51bGwgJiYgdG1wLnR5cGUgPT09IEZyYWdtZW50ICYmIHRtcC5rZXkgPT0gbnVsbDtcblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPSBpc1RvcExldmVsRnJhZ21lbnQgPyB0bXAucHJvcHMuY2hpbGRyZW4gOiB0bXA7XG5cblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KHJlbmRlclJlc3VsdCkgPyByZW5kZXJSZXN1bHQgOiBbcmVuZGVyUmVzdWx0XSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2Zyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSBudWxsO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjLl9mb3JjZSA9IGZhbHNlO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBudWxsICYmXG5cdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHRcdCkge1xuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBkaWZmRWxlbWVudE5vZGVzKFxuXHRcdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICgodG1wID0gb3B0aW9ucy5kaWZmZWQpKSB0bXAobmV3Vk5vZGUpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gbnVsbDtcblx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0aWYgKGlzSHlkcmF0aW5nIHx8IGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gISFpc0h5ZHJhdGluZztcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2V4Y2Vzc0RvbUNoaWxkcmVuLmluZGV4T2Yob2xkRG9tKV0gPSBudWxsO1xuXHRcdFx0Ly8gXiBjb3VsZCBwb3NzaWJseSBiZSBzaW1wbGlmaWVkIHRvOlxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoID0gMDtcblx0XHR9XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHJvb3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHJvb3QpIHtcblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBTZWUgYWJvdmUgdHMtaWdub3JlIG9uIGNvbW1pdFF1ZXVlXG5cdFx0XHRcdGNiLmNhbGwoYyk7XG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGMuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgcmVwcmVzZW50aW5nIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZ1xuICogdGhlIHZpcnR1YWwgbm9kZXMgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHsqfSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCBvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gbmV3Vk5vZGUudHlwZTtcblx0bGV0IGkgPSAwO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBTVkcgbmFtZXNwYWNlIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT09ICdzdmcnKSBpc1N2ZyA9IHRydWU7XG5cblx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRmb3IgKDsgaSA8IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjaGlsZCA9IGV4Y2Vzc0RvbUNoaWxkcmVuW2ldO1xuXG5cdFx0XHQvLyBpZiBuZXdWTm9kZSBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4gb3IgdGhlIGBkb21gXG5cdFx0XHQvLyBhcmd1bWVudCBtYXRjaGVzIGFuIGVsZW1lbnQgaW4gZXhjZXNzRG9tQ2hpbGRyZW4sIHJlbW92ZSBpdCBmcm9tXG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbiBzbyBpdCBpc24ndCBsYXRlciByZW1vdmVkIGluIGRpZmZDaGlsZHJlblxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjaGlsZCAmJlxuXHRcdFx0XHQnc2V0QXR0cmlidXRlJyBpbiBjaGlsZCA9PT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyBjaGlsZC5sb2NhbE5hbWUgPT09IG5vZGVUeXBlIDogY2hpbGQubm9kZVR5cGUgPT09IDMpXG5cdFx0XHQpIHtcblx0XHRcdFx0ZG9tID0gY2hpbGQ7XG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuW2ldID0gbnVsbDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKGRvbSA9PSBudWxsKSB7XG5cdFx0aWYgKG5vZGVUeXBlID09PSBudWxsKSB7XG5cdFx0XHQvLyBAdHMtaWdub3JlIGNyZWF0ZVRleHROb2RlIHJldHVybnMgVGV4dCwgd2UgZXhwZWN0IFByZWFjdEVsZW1lbnRcblx0XHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXdQcm9wcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRcdCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgV2Uga25vdyBgbmV3Vk5vZGUudHlwZWAgaXMgYSBzdHJpbmdcblx0XHRcdFx0bm9kZVR5cGVcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgV2Uga25vdyBgbmV3Vk5vZGUudHlwZWAgaXMgYSBzdHJpbmdcblx0XHRcdFx0bm9kZVR5cGUsXG5cdFx0XHRcdG5ld1Byb3BzLmlzICYmIG5ld1Byb3BzXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIHdlIGNyZWF0ZWQgYSBuZXcgcGFyZW50LCBzbyBub25lIG9mIHRoZSBwcmV2aW91c2x5IGF0dGFjaGVkIGNoaWxkcmVuIGNhbiBiZSByZXVzZWQ6XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBudWxsO1xuXHRcdC8vIHdlIGFyZSBjcmVhdGluZyBhIG5ldyBub2RlLCBzbyB3ZSBjYW4gYXNzdW1lIHRoaXMgaXMgYSBuZXcgc3VidHJlZSAoaW4gY2FzZSB3ZSBhcmUgaHlkcmF0aW5nKSwgdGhpcyBkZW9wdHMgdGhlIGh5ZHJhdGVcblx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKG5vZGVUeXBlID09PSBudWxsKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9PSBuZXdQcm9wcykpIHtcblx0XHRcdGRvbS5kYXRhID0gbmV3UHJvcHM7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIGV4Y2Vzc0RvbUNoaWxkcmVuIHdhcyBub3QgbnVsbCwgcmVwb3B1bGF0ZSBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQncyBjaGlsZHJlbjpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IGV4Y2Vzc0RvbUNoaWxkcmVuICYmIHNsaWNlLmNhbGwoZG9tLmNoaWxkTm9kZXMpO1xuXG5cdFx0b2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG5cblx0XHRsZXQgb2xkSHRtbCA9IG9sZFByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXHRcdGxldCBuZXdIdG1sID0gbmV3UHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCBwcm9wcyBhcmUgbm90IGRpZmZlZCBhdCBhbGwgKGluY2x1ZGluZyBkYW5nZXJvdXNseVNldElubmVySFRNTClcblx0XHQvLyBAVE9ETyB3ZSBzaG91bGQgd2FybiBpbiBkZWJ1ZyBtb2RlIHdoZW4gcHJvcHMgZG9uJ3QgbWF0Y2ggaGVyZS5cblx0XHRpZiAoIWlzSHlkcmF0aW5nKSB7XG5cdFx0XHQvLyBCdXQsIGlmIHdlIGFyZSBpbiBhIHNpdHVhdGlvbiB3aGVyZSB3ZSBhcmUgdXNpbmcgZXhpc3RpbmcgRE9NIChlLmcuIHJlcGxhY2VOb2RlKVxuXHRcdFx0Ly8gd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTSBhdHRyaWJ1dGVzIHRvIGRpZmYgdGhlbVxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0b2xkUHJvcHMgPSB7fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0b2xkUHJvcHNbZG9tLmF0dHJpYnV0ZXNbaV0ubmFtZV0gPSBkb20uYXR0cmlidXRlc1tpXS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3SHRtbCB8fCBvbGRIdG1sKSB7XG5cdFx0XHRcdC8vIEF2b2lkIHJlLWFwcGx5aW5nIHRoZSBzYW1lICdfX2h0bWwnIGlmIGl0IGRpZCBub3QgY2hhbmdlZCBiZXR3ZWVuIHJlLXJlbmRlclxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IW5ld0h0bWwgfHxcblx0XHRcdFx0XHQoKCFvbGRIdG1sIHx8IG5ld0h0bWwuX19odG1sICE9IG9sZEh0bWwuX19odG1sKSAmJlxuXHRcdFx0XHRcdFx0bmV3SHRtbC5fX2h0bWwgIT09IGRvbS5pbm5lckhUTUwpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGRvbS5pbm5lckhUTUwgPSAobmV3SHRtbCAmJiBuZXdIdG1sLl9faHRtbCkgfHwgJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBpc0h5ZHJhdGluZyk7XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aSA9IG5ld1ZOb2RlLnByb3BzLmNoaWxkcmVuO1xuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRkb20sXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoaSkgPyBpIDogW2ldLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnICYmIG5vZGVUeXBlICE9PSAnZm9yZWlnbk9iamVjdCcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5cblx0XHRcdFx0XHQ/IGV4Y2Vzc0RvbUNoaWxkcmVuWzBdXG5cdFx0XHRcdFx0OiBvbGRWTm9kZS5fY2hpbGRyZW4gJiYgZ2V0RG9tU2libGluZyhvbGRWTm9kZSwgMCksXG5cdFx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IG51bGwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbltpXSAhPSBudWxsKSByZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIChhcyBhYm92ZSwgZG9uJ3QgZGlmZiBwcm9wcyBkdXJpbmcgaHlkcmF0aW9uKVxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0J3ZhbHVlJyBpbiBuZXdQcm9wcyAmJlxuXHRcdFx0XHQoaSA9IG5ld1Byb3BzLnZhbHVlKSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaSAhPT0gZG9tLnZhbHVlIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09PSAncHJvZ3Jlc3MnICYmICFpKSB8fFxuXHRcdFx0XHRcdC8vIFRoaXMgaXMgb25seSBmb3IgSUUgMTEgdG8gZml4IDxzZWxlY3Q+IHZhbHVlIG5vdCBiZWluZyB1cGRhdGVkLlxuXHRcdFx0XHRcdC8vIFRvIGF2b2lkIGEgc3RhbGUgc2VsZWN0IHZhbHVlIHdlIG5lZWQgdG8gc2V0IHRoZSBvcHRpb24udmFsdWVcblx0XHRcdFx0XHQvLyBhZ2Fpbiwgd2hpY2ggdHJpZ2dlcnMgSUUxMSB0byByZS1ldmFsdWF0ZSB0aGUgc2VsZWN0IHZhbHVlXG5cdFx0XHRcdFx0KG5vZGVUeXBlID09PSAnb3B0aW9uJyAmJiBpICE9PSBvbGRQcm9wcy52YWx1ZSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCAndmFsdWUnLCBpLCBvbGRQcm9wcy52YWx1ZSwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQnY2hlY2tlZCcgaW4gbmV3UHJvcHMgJiZcblx0XHRcdFx0KGkgPSBuZXdQcm9wcy5jaGVja2VkKSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdGkgIT09IGRvbS5jaGVja2VkXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCAnY2hlY2tlZCcsIGksIG9sZFByb3BzLmNoZWNrZWQsIGZhbHNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZG9tO1xufVxuXG4vKipcbiAqIEludm9rZSBvciB1cGRhdGUgYSByZWYsIGRlcGVuZGluZyBvbiB3aGV0aGVyIGl0IGlzIGEgZnVuY3Rpb24gb3Igb2JqZWN0IHJlZi5cbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSByZWZcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlZihyZWYsIHZhbHVlLCB2bm9kZSkge1xuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHJlZih2YWx1ZSk7XG5cdFx0ZWxzZSByZWYuY3VycmVudCA9IHZhbHVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCB2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbm1vdW50IGEgdmlydHVhbCBub2RlIGZyb20gdGhlIHRyZWUgYW5kIGFwcGx5IERPTSBjaGFuZ2VzXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byB1bm1vdW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdFxuICogaW5pdGlhdGVkIHRoZSB1bm1vdW50XG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtza2lwUmVtb3ZlXSBGbGFnIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwYXJlbnQgbm9kZSBvZiB0aGVcbiAqIGN1cnJlbnQgZWxlbWVudCBpcyBhbHJlYWR5IGRldGFjaGVkIGZyb20gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnQodm5vZGUsIHBhcmVudFZOb2RlLCBza2lwUmVtb3ZlKSB7XG5cdGxldCByO1xuXHRpZiAob3B0aW9ucy51bm1vdW50KSBvcHRpb25zLnVubW91bnQodm5vZGUpO1xuXG5cdGlmICgociA9IHZub2RlLnJlZikpIHtcblx0XHRpZiAoIXIuY3VycmVudCB8fCByLmN1cnJlbnQgPT09IHZub2RlLl9kb20pIHtcblx0XHRcdGFwcGx5UmVmKHIsIG51bGwsIHBhcmVudFZOb2RlKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY29tcG9uZW50KSAhPSBudWxsKSB7XG5cdFx0aWYgKHIuY29tcG9uZW50V2lsbFVubW91bnQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHIuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ci5iYXNlID0gci5fcGFyZW50RG9tID0gbnVsbDtcblx0XHR2bm9kZS5fY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT09ICdmdW5jdGlvbidcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoIXNraXBSZW1vdmUgJiYgdm5vZGUuX2RvbSAhPSBudWxsKSB7XG5cdFx0cmVtb3ZlTm9kZSh2bm9kZS5fZG9tKTtcblx0fVxuXG5cdC8vIE11c3QgYmUgc2V0IHRvIGB1bmRlZmluZWRgIHRvIHByb3Blcmx5IGNsZWFuIHVwIGBfbmV4dERvbWBcblx0Ly8gZm9yIHdoaWNoIGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlLiBTZWUgY29tbWVudCBpbiBgY3JlYXRlLWVsZW1lbnQuanNgXG5cdHZub2RlLl9wYXJlbnQgPSB2bm9kZS5fZG9tID0gdm5vZGUuX25leHREb20gPSB1bmRlZmluZWQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbW1pdFJvb3QsIGRpZmYgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUmVuZGVyIGEgUHJlYWN0IHZpcnR1YWwgbm9kZSBpbnRvIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG9cbiAqIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09PSAnZnVuY3Rpb24nO1xuXG5cdC8vIFRvIGJlIGFibGUgdG8gc3VwcG9ydCBjYWxsaW5nIGByZW5kZXIoKWAgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWVcblx0Ly8gRE9NIG5vZGUsIHdlIG5lZWQgdG8gb2J0YWluIGEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyB0cmVlLiBXZSBkb1xuXHQvLyB0aGlzIGJ5IGFzc2lnbmluZyBhIG5ldyBgX2NoaWxkcmVuYCBwcm9wZXJ0eSB0byBET00gbm9kZXMgd2hpY2ggcG9pbnRzXG5cdC8vIHRvIHRoZSBsYXN0IHJlbmRlcmVkIHRyZWUuIEJ5IGRlZmF1bHQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgcHJlc2VudCwgd2hpY2hcblx0Ly8gbWVhbnMgdGhhdCB3ZSBhcmUgbW91bnRpbmcgYSBuZXcgdHJlZSBmb3IgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBvbGRWTm9kZSA9IGlzSHlkcmF0aW5nXG5cdFx0PyBudWxsXG5cdFx0OiAocmVwbGFjZU5vZGUgJiYgcmVwbGFjZU5vZGUuX2NoaWxkcmVuKSB8fCBwYXJlbnREb20uX2NoaWxkcmVuO1xuXG5cdHZub2RlID0gKFxuXHRcdCghaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGUpIHx8XG5cdFx0cGFyZW50RG9tXG5cdCkuX2NoaWxkcmVuID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgW3Zub2RlXSk7XG5cblx0Ly8gTGlzdCBvZiBlZmZlY3RzIHRoYXQgbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgZGlmZmluZy5cblx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IFtyZXBsYWNlTm9kZV1cblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gbnVsbFxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZFxuXHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0OiBudWxsLFxuXHRcdGNvbW1pdFF1ZXVlLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyByZXBsYWNlTm9kZVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkLFxuXHRcdGlzSHlkcmF0aW5nXG5cdCk7XG5cblx0Ly8gRmx1c2ggYWxsIHF1ZXVlZCBlZmZlY3RzXG5cdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgRE9NIGVsZW1lbnQgd2l0aCBkYXRhIGZyb20gYSBQcmVhY3QgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudERvbSkge1xuXHRyZW5kZXIodm5vZGUsIHBhcmVudERvbSwgaHlkcmF0ZSk7XG59XG4iLCJpbXBvcnQgeyBhc3NpZ24sIHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlIH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbi8qKlxuICogQ2xvbmVzIHRoZSBnaXZlbiBWTm9kZSwgb3B0aW9uYWxseSBhZGRpbmcgYXR0cmlidXRlcy9wcm9wcyBhbmQgcmVwbGFjaW5nIGl0cyBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkIGFzIHJlcGxhY2VtZW50IGNoaWxkcmVuLlxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFbGVtZW50KHZub2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IGFzc2lnbih7fSwgdm5vZGUucHJvcHMpLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0bnVsbFxuXHQpO1xufVxuIiwiLyoqXG4gKiBGaW5kIHRoZSBjbG9zZXN0IGVycm9yIGJvdW5kYXJ5IHRvIGEgdGhyb3duIGVycm9yIGFuZCBjYWxsIGl0XG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgVGhlIHRocm93biB2YWx1ZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2bm9kZSB0aGF0IHRocmV3XG4gKiB0aGUgZXJyb3IgdGhhdCB3YXMgY2F1Z2h0IChleGNlcHQgZm9yIHVubW91bnRpbmcgd2hlbiB0aGlzIHBhcmFtZXRlclxuICogaXMgdGhlIGhpZ2hlc3QgcGFyZW50IHRoYXQgd2FzIGJlaW5nIHVubW91bnRlZClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBbb2xkVk5vZGVdXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5FcnJvckluZm99IFtlcnJvckluZm9dXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfY2F0Y2hFcnJvcihlcnJvciwgdm5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50LCBjdG9yLCBoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IG51bGwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SW5kZXg7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IHByZXZpb3VzQ29tcG9uZW50O1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SG9vayA9IDA7XG5cbi8qKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn0gKi9cbmxldCBhZnRlclBhaW50RWZmZWN0cyA9IFtdO1xuXG5sZXQgRU1QVFkgPSBbXTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcblxuY29uc3QgUkFGX1RJTUVPVVQgPSAxMDA7XG5sZXQgcHJldlJhZjtcblxub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3JlbmRlciA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikgb2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0Y3VycmVudEluZGV4ID0gMDtcblxuXHRjb25zdCBob29rcyA9IGN1cnJlbnRDb21wb25lbnQuX19ob29rcztcblx0aWYgKGhvb2tzKSB7XG5cdFx0aWYgKHByZXZpb3VzQ29tcG9uZW50ID09PSBjdXJyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0aG9va3MuX2xpc3QuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRob29rSXRlbS5fcGVuZGluZ1ZhbHVlID0gRU1QVFk7XG5cdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdH1cblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ1ZhbHVlICE9PSBFTVBUWSkge1xuXHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ1ZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHsgX3BlbmRpbmdWYWx1ZTogRU1QVFkgfSk7XG5cdH1cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxhbnk+fSBbaW5pdGlhbFN0YXRlXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG5cdGN1cnJlbnRIb29rID0gMTtcblx0cmV0dXJuIHVzZVJlZHVjZXIoaW52b2tlT3JSZXR1cm4sIGluaXRpYWxTdGF0ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPGFueSwgYW55Pn0gcmVkdWNlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBhbnksIChzdGF0ZTogYW55KSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGNvbnN0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblxuXHRcdFx0Ly8gVGhpcyBTQ1UgaGFzIHRoZSBwdXJwb3NlIG9mIGJhaWxpbmcgb3V0IGFmdGVyIHJlcGVhdGVkIHVwZGF0ZXNcblx0XHRcdC8vIHRvIHN0YXRlZnVsIGhvb2tzLlxuXHRcdFx0Ly8gd2Ugc3RvcmUgdGhlIG5leHQgdmFsdWUgaW4gX25leHRWYWx1ZVswXSBhbmQga2VlcCBkb2luZyB0aGF0IGZvciBhbGxcblx0XHRcdC8vIHN0YXRlIHNldHRlcnMsIGlmIHdlIGhhdmUgbmV4dCBzdGF0ZXMgYW5kXG5cdFx0XHQvLyBhbGwgbmV4dCBzdGF0ZXMgd2l0aGluIGEgY29tcG9uZW50IGVuZCB1cCBiZWluZyBlcXVhbCB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuXHRcdFx0Ly8gd2UgYXJlIHNhZmUgdG8gYmFpbCBvdXQgZm9yIHRoaXMgc3BlY2lmaWMgY29tcG9uZW50LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Y29uc3Qgc3RhdGVIb29rcyA9IGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3QuZmlsdGVyKFxuXHRcdFx0XHRcdHggPT4geC5fY29tcG9uZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IGFsbEhvb2tzRW1wdHkgPSBzdGF0ZUhvb2tzLmV2ZXJ5KHggPT4gIXguX25leHRWYWx1ZSk7XG5cdFx0XHRcdC8vIFdoZW4gd2UgaGF2ZSBubyB1cGRhdGVkIGhvb2tzIGluIHRoZSBjb21wb25lbnQgd2UgaW52b2tlIHRoZSBwcmV2aW91cyBTQ1Ugb3Jcblx0XHRcdFx0Ly8gdHJhdmVyc2UgdGhlIFZET00gdHJlZSBmdXJ0aGVyLlxuXHRcdFx0XHRpZiAoYWxsSG9va3NFbXB0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2U2N1ID8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpIDogdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBjb21wb25lbnRzIHdpdGggYSBuZXh0VmFsdWUgc2V0IHRoYXRcblx0XHRcdFx0Ly8gaGF2ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgZXF1YWwgdG8gb25lIGFub3RoZXIgdGhpcyBwdXNoZXNcblx0XHRcdFx0Ly8gdXMgdG8gdXBkYXRlIGZ1cnRoZXIgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXRlSG9va3MuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHNob3VsZFVwZGF0ZSB8fCBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcFxuXHRcdFx0XHRcdD8gcHJldlNjdVxuXHRcdFx0XHRcdFx0PyBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYylcblx0XHRcdFx0XHRcdDogdHJ1ZVxuXHRcdFx0XHRcdDogZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHJlZihudWxsKTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZhY3RvcnlcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl9wZW5kaW5nVmFsdWUgPSBmYWN0b3J5KCk7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdFx0cmV0dXJuIHN0YXRlLl9wZW5kaW5nVmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoZm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7KGVycm9yOiBhbnksIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsLmQnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKCFjb21wb25lbnQuX3BhcmVudERvbSB8fCAhY29tcG9uZW50Ll9faG9va3MpIGNvbnRpbnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUVmZmVjdCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmxldCBIQVNfUkFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PSAnZnVuY3Rpb24nO1xuXG4vKipcbiAqIFNjaGVkdWxlIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgYnJvd3NlciBoYXMgYSBjaGFuY2UgdG8gcGFpbnQgYSBuZXcgZnJhbWUuXG4gKiBEbyB0aGlzIGJ5IGNvbWJpbmluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKHJBRikgKyBzZXRUaW1lb3V0IHRvIGludm9rZSBhIGNhbGxiYWNrIGFmdGVyXG4gKiB0aGUgbmV4dCBicm93c2VyIGZyYW1lLlxuICpcbiAqIEFsc28sIHNjaGVkdWxlIGEgdGltZW91dCBpbiBwYXJhbGxlbCB0byB0aGUgdGhlIHJBRiB0byBlbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGludm9rZWRcbiAqIGV2ZW4gaWYgUkFGIGRvZXNuJ3QgZmlyZSAoZm9yIGV4YW1wbGUgaWYgdGhlIGJyb3dzZXIgdGFiIGlzIG5vdCB2aXNpYmxlKVxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJOZXh0RnJhbWUoY2FsbGJhY2spIHtcblx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0aWYgKEhBU19SQUYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRvbmUsIFJBRl9USU1FT1VUKTtcblxuXHRsZXQgcmFmO1xuXHRpZiAoSEFTX1JBRikge1xuXHRcdHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkb25lKTtcblx0fVxufVxuXG4vLyBOb3RlOiBpZiBzb21lb25lIHVzZWQgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbi8vIHRoZW4gZWZmZWN0cyB3aWxsIEFMV0FZUyBydW4gb24gdGhlIE5FWFQgZnJhbWUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBvbmUsIGluY3VycmluZyBhIH4xNm1zIGRlbGF5LlxuLy8gUGVyaGFwcyB0aGlzIGlzIG5vdCBzdWNoIGEgYmlnIGRlYWwuXG4vKipcbiAqIFNjaGVkdWxlIGFmdGVyUGFpbnRFZmZlY3RzIGZsdXNoIGFmdGVyIHRoZSBicm93c2VyIHBhaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5ld1F1ZXVlTGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VFZmZlY3QoaG9vaykge1xuXHQvLyBBIGhvb2sgY2FsbCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRob29rLl9jbGVhbnVwID0gaG9vay5fdmFsdWUoKTtcblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gb2xkQXJnc1xuICogQHBhcmFtIHthbnlbXX0gbmV3QXJnc1xuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGludm9rZU9yUmV0dXJuKGFyZywgZikge1xuXHRyZXR1cm4gdHlwZW9mIGYgPT0gJ2Z1bmN0aW9uJyA/IGYoYXJnKSA6IGY7XG59XG4iLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG4vKiogVGFrZXMgYSBuZXcgdmFsdWUgb3IgYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgYSB2YWx1ZSwgdW5saWtlIGBPblBhc3NpdmVTdGF0ZUNoYW5nZWAgd2hpY2ggcmVhY3RzIHRvIHRob3NlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIFBhc3NpdmVTdGF0ZVVwZGF0ZXI8UywgUj4gPSAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKTsvL1tSXSBleHRlbmRzIFtuZXZlcl0/ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbj86IFIpID0+IHZvaWQpIDogKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uOiBSKSA9PiB2b2lkKTtcbi8qKiBSZXNwb25kcyB0byBhIGNoYW5nZSBpbiBhIHZhbHVlLCB1bmxpa2UgYFBhc3NpdmVTdGF0ZVVwZGF0ZXJgIHdoaWNoIGNhdXNlcyB0aGUgdXBkYXRlcyAqL1xuZXhwb3J0IHR5cGUgT25QYXNzaXZlU3RhdGVDaGFuZ2U8UywgUj4gPSAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSkgOiAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbjogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKTtcblxuXG5cbi8qKlxuICogRGVidWcgaG9vay5cbiAqIFxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cbiAqIFxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eTxUIGV4dGVuZHMgYW55W10+KHBhcmVudEhvb2tOYW1lOiBzdHJpbmcsIC4uLnZhbHVlczogVCkge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmPEFycmF5PFQ+PihbXSk7XG4gICAgY29uc3Qgc2hvd25FcnJvciA9IHVzZVJlZjxBcnJheTxib29sZWFuPj4oW10pO1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoIGFzIGFueSwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuXG5cbiAgICBmdW5jdGlvbiB1c2VIZWxwZXI8VSBleHRlbmRzIFQ+KHZhbHVlOiBVLCBpOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpICsgMTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGhvb2sgJHtwYXJlbnRIb29rTmFtZX0gcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2l9LWluZGV4ZWQgYXJndW1lbnQgKCR7aSA+PSAwPyBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbaV0pIDogXCJ0aGUgbnVtYmVyIG9mIHN1cHBvc2VkbHkgc3RhYmxlIGVsZW1lbnRzXCJ9KS5gKTtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGY6ICgpID0+IHZvaWQpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxuICogXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqIFxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqIFxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKiBcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICogXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBCeSBkZWZhdWx0LCBjaGFuZ2VzIHRvIHBhc3NpdmUgc3RhdGUgYXJlIGRlbGF5ZWQgYnkgb25lIHRpY2sgc28gdGhhdCB3ZSBvbmx5IGNoZWNrIGZvciBjaGFuZ2VzIGluIGEgc2ltaWxhciB3YXkgdG8gUHJlYWN0LiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgdG8sIGZvciBleGFtcGxlLCBhbHdheXMgcnVuIGltbWVkaWF0ZWx5IGluc3RlYWQuXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZTxULCBSPihvbkNoYW5nZTogdW5kZWZpbmVkIHwgbnVsbCB8IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQsIFI+LCBnZXRJbml0aWFsVmFsdWU/OiAoKSA9PiBULCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZz86IHR5cGVvZiBkZWJvdW5jZVJlbmRlcmluZyk6IHJlYWRvbmx5IFtnZXRTdGF0ZVN0YWJsZTogKCkgPT4gVCwgc2V0U3RhdGVTdGFibGU6IFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj5dIHtcblxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmPFQgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCByZWFzb25SZWYgPSB1c2VSZWY8UiB8IHR5cGVvZiBVbnNldD4oVW5zZXQpO1xuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0ID0gdXNlUmVmPFQgfCAodHlwZW9mIFVuc2V0KT4oVW5zZXQpO1xuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZjx1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk+KHVuZGVmaW5lZCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUGFzc2l2ZVN0YXRlXCIsIG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUsIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nKTtcblxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkISkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG5cbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCEgOiB2YWx1ZVJlZi5jdXJyZW50ISkgYXMgVDtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG5cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2s8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj4oKGFyZzogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlswXSwgcmVhc29uOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+WzFdKSA9PiB7XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcyBvZiBhbnl0aGluZyBlbHNlLCBmaWd1cmUgb3V0IHdoYXQgb3VyIG5leHQgdmFsdWUgaXMgYWJvdXQgdG8gYmUuXG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IChhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpIDogYXJnKTtcblxuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID09PSBVbnNldCAmJiBuZXh0VmFsdWUgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IHJlcXVlc3QgdG8gY2hhbmdlIHRoaXMgdmFsdWUuXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgcmVxdWVzdCBpbW1lZGlhdGVseSwgdGhlbiBxdWV1ZSB1cCB0aGUgb25DaGFuZ2UgZnVuY3Rpb25cblxuICAgICAgICAgICAgLy8gU2F2ZSBvdXIgY3VycmVudCB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBjb21wYXJlIGFnYWluc3QgaXQgbGF0ZXJcbiAgICAgICAgICAgIC8vIChpZiB3ZSBmbGlwIGJhY2sgdG8gdGhpcyBzdGF0ZSwgdGhlbiB3ZSB3b24ndCBzZW5kIHRoZSBvbkNoYW5nZSBmdW5jdGlvbilcbiAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSB2YWx1ZVJlZi5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uIGFzIFI7XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRoZSBhY3R1YWwgY2hlY2sgYW5kIGludm9jYXRpb24gb2Ygb25DaGFuZ2UgbGF0ZXIgdG8gbGV0IGVmZmVjdHMgc2V0dGxlXG4gICAgICAgICAgICAoY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgPz8gZGVib3VuY2VSZW5kZXJpbmcpKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0UmVhc29uID0gcmVhc29uUmVmLmN1cnJlbnQhIGFzIFI7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dERlcCA9IHZhbHVlUmVmLmN1cnJlbnQhIGFzIFQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRlcCA9IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgIT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBmaW5pc2hlZCB3aXRoIGV2ZXJ5dGhpbmcsIHNvIG1hcmsgdXMgYXMgYmVpbmcgb24gYSBjbGVhbiBzbGF0ZSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gVW5zZXQ7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdIGFzIGNvbnN0O1xufVxuXG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuXG4vLyBFYXN5IGNvbnN0YW50cyBmb3IgZ2V0SW5pdGlhbFZhbHVlXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5GYWxzZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5VbmRlZmluZWQoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5aZXJvKCkgeyByZXR1cm4gMDsgfVxuXG4vKiogXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byB1c2UgZm9yIGBjdXN0b21EZWJvdW5jZVJlbmRlcmluZ2AgdGhhdCBjYXVzZXMgYHVzZVBhc3NpdmVTdGF0ZWAgdG8gcnVuIGNoYW5nZXMgd2l0aG91dCB3YWl0aW5nIGEgdGljay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkltbWVkaWF0ZWx5KGY6ICgpID0+IHZvaWQpIHsgZigpOyB9IiwiXG5pbXBvcnQgeyBDb21wb25lbnQsIG9wdGlvbnMsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgRWZmZWN0Q2FsbGJhY2ssIElucHV0cywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuXG5cbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5cbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldIGFzIGNvbnN0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXG4gKiBOb3RlIHRoYXQgaWYgdGhlIHByZWZpeCBpcyAqZXhwbGljaXRseSogc2V0IHRvIFwiXCIsIHRoZW5cbiAqIElEcyB0aGF0IGFyZSBub3QgdmFsaWQgdW5kZXIgSFRNTDQgbWF5IGJlIGdlbmVyYXRlZC4gT2ggbm8uXG4gKiBcbiAqIFxuICogKFRoaXMgaXMgaGVyZSwgaW4gdGhpcyBwYXJ0aWN1bGFyIGZpbGUsIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICogd2l0aG91dCBhbHNvIG1ha2luZyBhIHV0aWxpdGllcyBmaWxlLlxuICogT25jZSB3ZSBjYW4gcmVtb3ZlIHRoaXMgaG9vaywgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIGJhY2sgd2l0aCB1c2VSYW5kb21JZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG5cbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcDxzdHJpbmcsIElucHV0cyB8IHVuZGVmaW5lZD4oKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcDxzdHJpbmcsIHsgZWZmZWN0OiBFZmZlY3RDYWxsYmFjaywgaW5wdXRzPzogSW5wdXRzLCBjbGVhbnVwOiBudWxsIHwgdW5kZWZpbmVkIHwgdm9pZCB8ICgoKSA9PiB2b2lkKSB9PigpO1xuXG5cbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG4vL1xuLy8gLi4uXG4vLyBXZWxsLCB1c2VFdmVudCBvciB3aGF0ZXZlciBpcyBmaW5hbGx5LCBmaW5hbGx5IDQgeWVhcnMgbGF0ZXIgZmluYWxseSBoZXJlXG4vLyB3aGljaCBpcyBjb29sIGFuZCBtZWFucyB3ZSB3b24ndCBuZWVkIHRoaXMgYXQgYWxsIHNvb24uXG4vLyBTbyBmb3Igbm93IHdlJ2xsIHN0aWNrIHdpdGggZGlmZiB0byBwcmV2ZW50IGFueSB3ZWlyZG5lc3Mgd2l0aFxuLy8gY29tbWl0IGJlaW5nIHByaXZhdGUgYW5kIGFsbC5cbmNvbnN0IGNvbW1pdE5hbWUgPSBcImRpZmZlZFwiO1xuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV0gYXMgKHZub2RlOiBWTm9kZSwgY29tbWl0UXVldWU6IENvbXBvbmVudFtdKSA9PiB2b2lkO1xuY29uc3QgbmV3Q29tbWl0OiB0eXBlb2Ygb3JpZ2luYWxDb21taXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufVxub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdCBhcyBuZXZlclxuXG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqIFxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxuICogXG4gKiBAcGFyYW0gZWZmZWN0IFxuICogQHBhcmFtIGlucHV0cyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3Q6IEVmZmVjdENhbGxiYWNrIHwgbnVsbCwgaW5wdXRzPzogSW5wdXRzKSB7XG5cbiAgICAvKigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSB1c2VSZWY8dm9pZCB8ICgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuICAgICAgICBjb25zdCBwcmV2QXJnc1JlZiA9IHVzZVJlZjxJbnB1dHM+KG51bGwhKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKGlucHV0cywgcHJldkFyZ3NSZWYuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHByZXZBcmdzUmVmLmN1cnJlbnQgPSBpbnB1dHMhO1xuICAgICAgICAgICAgaWYgKGNsZWFudXAuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSkoKTsqL1xuXG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSk7XG4gICAgaWYgKGVmZmVjdClcbiAgICAgICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzLCBjbGVhbnVwOiBudWxsIH0pO1xuICAgIGVsc2VcbiAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH0sIFtpZF0pXG59XG5cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3M/OiBJbnB1dHMsIG5ld0FyZ3M/OiBJbnB1dHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoXG4gICAgICAgICFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcbiAgICApO1xufSIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3RcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG5cblxuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIFxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxuICogXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICogXG4gKiBAcGFyYW0gdmFsdWUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcjxUPih2YWx1ZTogVCkge1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPFQ+KFVuc2V0IGFzIHVua25vd24gYXMgVCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0pLCBbdmFsdWVdKTtcblxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCBhcyB1bmtub3duID09PSBVbnNldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVHZXR0ZXIoKSBjYW5ub3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXIuJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xufVxuXG5cbi8qKlxuICogTGlrZSBgdXNlU3RhYmxlR2V0dGVyYCwgYnV0ICoqKnJlcXVpcmVzKioqIHRoYXQgZXZlcnl0aGluZyBpbiB0aGUgb2JqZWN0IGlzIGFsc28gc3RhYmxlLFxuICogYW5kIGluIHR1cm4gcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpdHNlbGYgaXMgc3RhYmxlLlxuICogQHBhcmFtIHQgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZU9iamVjdDxUIGV4dGVuZHMge30+KHQ6IFQpOiBUIHtcbiAgICBjb25zdCBlID0gT2JqZWN0LmVudHJpZXModCk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlU3RhYmxlT2JqZWN0XCIsIGUubGVuZ3RoLCAuLi5lLm1hcCgoW19rLCB2XSkgPT4gdikpO1xuICAgIHJldHVybiB1c2VSZWYodCkuY3VycmVudDtcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdLCByaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2hpbGRyZW5cIl0ge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG50eXBlIEMgPSBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjbGFzc05hbWVcIl07XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxuICogXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzQ2xhc3M6IEMsIGxoc0NsYXNzTmFtZTogQywgcmhzQ2xhc3M6IEMsIHJoc0NsYXNzTmFtZTogQyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXG5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKVxuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoLCBSZWYsIFJlZk9iamVjdCB9IGZyb20gXCJwcmVhY3RcIjtcblxuXG5mdW5jdGlvbiBwcm9jZXNzUmVmPFQ+KGluc3RhbmNlOiBUIHwgbnVsbCwgcmVmOiBSZWY8VD4gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICAocmVmIGFzIFJlZk9iamVjdDxUIHwgbnVsbD4pLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuXG5cbi8qKlxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXG4gKiBAcGFyYW0gbGhzIFxuICogQHBhcmFtIHJocyBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmczxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KHJoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXCJyZWZcIl0sIGxoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXCJyZWZcIl0pIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCE7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHMhO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzITtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNvbWJpbmVkKGN1cnJlbnQ6IEUgfCBudWxsKSB7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuXG5mdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlOiBzdHJpbmcpOiBoLkpTWC5DU1NQcm9wZXJ0aWVzIHtcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhzdHlsZS5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSkgYXMgdW5rbm93biBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xufVxuXG4vKipcbiAqIE1lcmdlcyB0d28gc3R5bGUgb2JqZWN0cywgcmV0dXJuaW5nIHRoZSByZXN1bHQuXG4gKiBcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdLCByaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wic3R5bGVcIl0ge1xuXG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXG4gICAgaWYgKCFsaHMgJiYgIXJocylcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cbiAgICAgICAgaWYgKGxocyAmJiByaHMpIHtcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhzdHlsZVN0cmluZ1RvT2JqZWN0KGxocyBhcyBzdHJpbmcpLCByaHMpIGFzIGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocyBhcyBzdHJpbmcpKSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTG9naWM/Pz9cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xoc307JHtyaHMgPz8gXCJcIn1gIGFzIHVua25vd24gYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocyA/PyB7fSkgYXMgaC5KU1guQ1NTUHJvcGVydGllcyxcbiAgICAgICAgLi4uKHJocyA/PyB7fSkgYXMgaC5KU1guQ1NTUHJvcGVydGllc1xuICAgIH0gYXMgdW5rbm93biBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXG59XG5cbiIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcblxubGV0IGxvZyA9IGNvbnNvbGUud2FybjtcblxuLypcbnR5cGUgSXNFbXB0eU9iamVjdDxUPiA9IFtrZXlvZiBUXSBleHRlbmRzIFtuZXZlcl0/IHRydWUgOiBmYWxzZTtcblxuZXhwb3J0IHR5cGUgRXh0cmFjdGVkUHJvcHM8TyBleHRlbmRzIHt9PiA9IHsgW0sgaW4ga2V5b2YgT106IFBpY2s8T1tLXSwgKFwicHJvcHNTdGFibGVcIiB8IFwicHJvcHNVbnN0YWJsZVwiKSAmIGtleW9mIE9bS10+IH07XG5cbmNvbnN0IG86IEV4dHJhY3RlZFByb3BzPFVzZUdyaWROYXZpZ2F0aW9uUm93UmV0dXJuVHlwZTxhbnksIGFueT4+ID0ge1xuICAgIGFzQ2hpbGRSb3dPZlRhYmxlOiB7XG5cbiAgICB9LFxuICAgIGFzUGFyZW50Um93T2ZDZWxsczoge31cbn0qL1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMjogdHlwZW9mIGNvbnNvbGVbXCJsb2dcIl0pIHtcbiAgICBsb2cgPSBsb2cyXG59XG5cblxuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqIFxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSBsaHMyIFxuICogQHBhcmFtIHJoczIgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4oLi4uYWxsUHJvcHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VNZXJnZWRQcm9wc1wiLCBhbGxQcm9wcy5sZW5ndGgpO1xuICAgIGxldCByZXQ6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+ID0ge307XG4gICAgZm9yIChsZXQgbmV4dFByb3BzIG9mIGFsbFByb3BzKSB7XG4gICAgICAgIHJldCA9IHVzZU1lcmdlZFByb3BzMjxFPihyZXQsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3Qga25vd25zID0gbmV3IFNldDxzdHJpbmc+KFtcImNoaWxkcmVuXCIsIFwicmVmXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xhc3NcIiwgXCJzdHlsZVwiXSlcblxuZnVuY3Rpb24gbWVyZ2VVbmtub3duKGtleTogc3RyaW5nLCBsaHNWYWx1ZTogdW5rbm93biwgcmhzVmFsdWU6IHVua25vd24pIHtcblxuICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSBhcyBuZXZlciwgcmhzVmFsdWUgYXMgbmV2ZXIpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkIGFzIG5ldmVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgZWxzZSBpZiAoKHJoc1ZhbHVlIGFzIGFueSkgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgbG9nPy4oYFRoZSBwcm9wIFwiJHtrZXl9XCIgY2Fubm90IHNpbXVsdGFuZW91c2x5IGJlIHRoZSB2YWx1ZXMgJHtsaHNWYWx1ZX0gYW5kICR7cmhzVmFsdWV9LiBPbmUgbXVzdCBiZSBjaG9zZW4gb3V0c2lkZSBvZiB1c2VNZXJnZWRQcm9wcy5gKTtcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlclxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBpcyBvbmUgb2YgdGhlIG1vc3QgY29tbW9ubHkgY2FsbGVkIGZ1bmN0aW9ucyBpbiB0aGlzIGFuZCBjb25zdW1lciBsaWJyYXJpZXMsXG4gKiBzbyBpdCB0cmFkZXMgYSBiaXQgb2YgcmVhZGFiaWxpdHkgZm9yIHNwZWVkIChpLmUuIHdlIGRvbid0IGRlY29tcG9zZSBvYmplY3RzIGFuZCBqdXN0IGRvIHJlZ3VsYXIgcHJvcGVydHkgYWNjZXNzLCBpdGVyYXRlIHdpdGggYGZvci4uLmluYCwgaW5zdGVhZCBvZiBgT2JqZWN0LmVudHJpZXNgLCBldGMuKVxuICovXG5mdW5jdGlvbiB1c2VNZXJnZWRQcm9wczI8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihsaHNBbGw6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCByaHNBbGw6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+KTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4ge1xuXG4gICAgXG4gICAgY29uc3QgcmV0OiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiA9IHtcbiAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzPEU+KGxoc0FsbC5yZWYsIHJoc0FsbC5yZWYpLFxuICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoc0FsbC5zdHlsZSwgcmhzQWxsLnN0eWxlKSxcbiAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoc0FsbFtcImNsYXNzXCJdLCBsaHNBbGwuY2xhc3NOYW1lLCByaHNBbGxbXCJjbGFzc1wiXSwgcmhzQWxsLmNsYXNzTmFtZSksXG4gICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHNBbGwuY2hpbGRyZW4sIHJoc0FsbC5jaGlsZHJlbiksXG4gICAgfSBhcyBhbnk7XG5cbiAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LnJlZjtcbiAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuc3R5bGU7XG4gICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5jbGFzc05hbWU7XG4gICAgaWYgKHJldFtcImNsYXNzXCJdID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXRbXCJjbGFzc1wiXTtcbiAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuY2hpbGRyZW47XG5cbiAgICBmb3IgKGNvbnN0IGxoc0tleVUgaW4gbGhzQWxsKSB7XG4gICAgICAgIGNvbnN0IGxoc0tleSA9IGxoc0tleVUgYXMga2V5b2YgdHlwZW9mIGxoc0FsbDtcbiAgICAgICAgaWYgKGtub3ducy5oYXMobGhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbbGhzS2V5XSA9IGxoc0FsbFtsaHNLZXldO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcmhzS2V5VSBpbiByaHNBbGwpIHtcbiAgICAgICAgY29uc3QgcmhzS2V5ID0gcmhzS2V5VSBhcyBrZXlvZiB0eXBlb2YgcmhzQWxsO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhyaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VVbmtub3duKHJoc0tleSwgcmV0W3Joc0tleV0sIHJoc0FsbFtyaHNLZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG59XG5cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueSwgVSBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55PihsaHM6IFQgfCBudWxsIHwgdW5kZWZpbmVkLCByaHM6IFUgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG5cbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcblxuICAgIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgICAgICBjb25zdCBsdiA9IGxocyguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgcnYgPSByaHMoLi4uYXJncyk7XG5cbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG5cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHksIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUmVmRWxlbWVudFJldHVyblR5cGU8VCBleHRlbmRzIEV2ZW50VGFyZ2V0PiB7XG4gICAgcmVmRWxlbWVudFJldHVybjoge1xuICAgICAgICAvKiogKipTVEFCTEUqKiAqL1xuICAgICAgICBnZXRFbGVtZW50KCk6IFQgfCBudWxsO1xuICAgICAgICBwcm9wc1N0YWJsZTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8VD47XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVJlZkVsZW1lbnRQYXJhbWV0ZXJzPFQ+IHtcbiAgICAvKipcbiAgICAgKiBGb3IgdGhlIHNha2Ugb2YgY29udmVuaWVuY2UsXG4gICAgICogdGhpcyBvbmUgaXMgb3B0aW9uYWwsIHNpbmNlIHVzaW5nIHRoaXMgaG9vayBpcyBzbyBjb21tb24sXG4gICAgICogYnV0IHVzaW5nIGl0cyBwYXJhbWV0ZXIgb3B0aW9ucyBpcyBzbyB1bmNvbW1vbiwgYW5kIGl0J3NcbiAgICAgKiBhYnNlbnNlIGlzbid0IHVzdWFsbHkgYmVjYXVzZSBpdCB3YXMgZm9yZ290dGVuLCBpdCdzIGJlY2F1c2VcbiAgICAgKiBpdCBkb2Vzbid0IG1hdHRlci5cbiAgICAgKi9cbiAgICByZWZFbGVtZW50UGFyYW1ldGVycz86IHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlPzogT25QYXNzaXZlU3RhdGVDaGFuZ2U8VCB8IG51bGwsIG5ldmVyPjtcbiAgICAgICAgb25Nb3VudD86IChlbGVtZW50OiBUKSA9PiB2b2lkO1xuICAgICAgICBvblVubW91bnQ/OiAoZWxlbWVudDogVCkgPT4gdm9pZDtcbiAgICB9XG59XG5cblxuLypcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+KHI6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPEU+LCAuLi5vdGhlclByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSB7XG4gICAgcmV0dXJuIFtyLnJlZkVsZW1lbnRSZXR1cm4ucHJvcHNTdGFibGUsIC4uLm90aGVyUHJvcHNdO1xufSovXG5cbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsIFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKiBcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxuICogXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudDxUIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KGFyZ3M6IFVzZVJlZkVsZW1lbnRQYXJhbWV0ZXJzPFQ+KTogVXNlUmVmRWxlbWVudFJldHVyblR5cGU8VD4ge1xuICAgIGNvbnN0IHsgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQgfSA9IChhcmdzLnJlZkVsZW1lbnRQYXJhbWV0ZXJzIHx8IHt9KTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VSZWZFbGVtZW50XCIsIG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50KTtcblxuICAgIC8vIENhbGxlZCAoaW5kaXJlY3RseSkgYnkgdGhlIHJlZiB0aGF0IHRoZSBlbGVtZW50IHJlY2VpdmVzLlxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUIHwgbnVsbCwgbmV2ZXI+PigoZSwgcHJldlZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBvbkVsZW1lbnRDaGFuZ2U/LihlLCBwcmV2VmFsdWUpO1xuICAgICAgICBpZiAocHJldlZhbHVlKVxuICAgICAgICAgICAgb25Vbm1vdW50Py4ocHJldlZhbHVlISk7XG5cbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBvbk1vdW50Py4oZSk7XG5cbiAgICAgICAgcmV0dXJuIGNsZWFudXA7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZTxUIHwgbnVsbCwgbmV2ZXI+KGhhbmRsZXIsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICBjb25zdCBwcm9wc1N0YWJsZSA9IHVzZVJlZjxoLkpTWC5IVE1MQXR0cmlidXRlczxUPj4oeyByZWY6IHNldEVsZW1lbnQgfSk7XG5cbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVmRWxlbWVudFJldHVybjoge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHByb3BzU3RhYmxlOiBwcm9wc1N0YWJsZS5jdXJyZW50XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogYEJsb2NraW5nRWxlbWVudHNgIG1hbmFnZXMgYSBzdGFjayBvZiBlbGVtZW50cyB0aGF0IGluZXJ0IHRoZSBpbnRlcmFjdGlvblxuICogb3V0c2lkZSB0aGVtLiBUaGUgdG9wIGVsZW1lbnQgaXMgdGhlIGludGVyYWN0aXZlIHBhcnQgb2YgdGhlIGRvY3VtZW50LlxuICogVGhlIHN0YWNrIGNhbiBiZSB1cGRhdGVkIHdpdGggdGhlIG1ldGhvZHMgYHB1c2gsIHJlbW92ZSwgcG9wYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCbG9ja2luZ0VsZW1lbnRzIHtcbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuIFRoaXMgZW1wdGllc1xuICAgKiB0aGUgYmxvY2tpbmcgZWxlbWVudHNcbiAgICovXG4gIGRlc3RydWN0b3IoKTogdm9pZDtcblxuICAvKipcbiAgICogVGhlIHRvcCBibG9ja2luZyBlbGVtZW50LlxuICAgKi9cbiAgdG9wOiBIVE1MRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBlbGVtZW50IHRvIHRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICovXG4gIHB1c2goZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IGZyb20gdGhlIGJsb2NraW5nIGVsZW1lbnRzLiBSZXR1cm5zIHRydWUgaWYgdGhlXG4gICAqIGVsZW1lbnQgd2FzIHJlbW92ZWQuXG4gICAqL1xuICByZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRvcCBibG9ja2luZyBlbGVtZW50IGFuZCByZXR1cm5zIGl0LlxuICAgKi9cbiAgcG9wKCk6IEhUTUxFbGVtZW50fG51bGw7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgYSBibG9ja2luZyBlbGVtZW50LlxuICAgKi9cbiAgaGFzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzIGV4dGVuZHMgRG9jdW1lbnQge1xuICAkYmxvY2tpbmdFbGVtZW50czogQmxvY2tpbmdFbGVtZW50cztcbn1cblxuKCgpID0+IHtcbiAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcblxuICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcblxuICBpbnRlcmZhY2UgSW5lcnRhYmxlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGluZXJ0PzogYm9vbGVhbjtcbiAgfVxuXG4gIGludGVyZmFjZSBJbnRlcm5hbFN0YXRlIHtcbiAgICBbX3NpYmxpbmdzVG9SZXN0b3JlXTogU2V0PE1heWJlSGFzSW50ZXJuYWxTdGF0ZT47XG4gICAgW19wYXJlbnRNT106IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIH1cbiAgaW50ZXJmYWNlIEhhc0ludGVybmFsU3RhdGUgZXh0ZW5kcyBJbmVydGFibGUsIEludGVybmFsU3RhdGUge31cbiAgaW50ZXJmYWNlIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSBleHRlbmRzIEluZXJ0YWJsZSwgUGFydGlhbDxJbnRlcm5hbFN0YXRlPiB7fVxuXG4gIC8qKlxuICAgKiBTaGFkeURPTSBzaGFkeSByb290cyBsb29rIGEgbG90IGxpa2UgcmVhbCBTaGFkb3dSb290cy4gVGhlIF9fc2hhZHkgcHJvcGVydHlcbiAgICogZ2l2ZXMgdGhlbSBhd2F5LCB0aG91Z2guXG4gICAqL1xuICBpbnRlcmZhY2UgTWF5YmVTaGFkeVJvb3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgICBfX3NoYWR5OiB1bmtub3duO1xuICAgIGhvc3Q6IEVsZW1lbnQ7XG4gIH1cblxuICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCBpbXBsZW1lbnRzIEJsb2NraW5nRWxlbWVudHMge1xuICAgIC8qKlxuICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBwcml2YXRlW19ibG9ja2luZ0VsZW1lbnRzXTogTWF5YmVIYXNJbnRlcm5hbFN0YXRlW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfdG9wRWxQYXJlbnRzXTogSGFzSW50ZXJuYWxTdGF0ZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAqIHB1c2hlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBuZXcgU2V0PE1heWJlSGFzSW50ZXJuYWxTdGF0ZT4oKTtcblxuICAgIGRlc3RydWN0b3IoKTogdm9pZCB7XG4gICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzIGFzIHVua25vd24gYXMge1xuICAgICAgICBbX2Jsb2NraW5nRWxlbWVudHNdOiBudWxsO1xuICAgICAgICBbX3RvcEVsUGFyZW50c106IG51bGw7XG4gICAgICAgIFtfYWxyZWFkeUluZXJ0RWxlbWVudHNdOiBudWxsO1xuICAgICAgfTtcbiAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICB9XG5cbiAgICBnZXQgdG9wKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgIH1cblxuICAgIHB1c2goZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwb3AoKTogSFRNTEVsZW1lbnR8bnVsbCB7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgcmV0dXJuIHRvcDtcbiAgICB9XG5cbiAgICBoYXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfdG9wQ2hhbmdlZF0obmV3VG9wOiBNYXliZUhhc0ludGVybmFsU3RhdGV8bnVsbCk6IHZvaWQge1xuICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgIH1cbiAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAvLyBiZWxvdy5cbiAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzIGFzIEFycmF5PEhhc0ludGVybmFsU3RhdGU+O1xuXG4gICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuXG4gICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgai0tO1xuICAgICAgfVxuICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICB9XG4gICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfc3dhcEluZXJ0ZWRTaWJsaW5nXShcbiAgICAgICAgb2xkSW5lcnQ6IEhhc0ludGVybmFsU3RhdGUsIG5ld0luZXJ0OiBNYXliZUhhc0ludGVybmFsU3RhdGUpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgfVxuICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICB9XG4gICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgIChvbGRJbmVydCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAob2xkSW5lcnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzOiBIYXNJbnRlcm5hbFN0YXRlW10pIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAoZWxlbWVudCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgKGVsZW1lbnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19pbmVydFNpYmxpbmdzXShcbiAgICAgICAgZWxlbWVudHM6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZVtdLCB0b1NraXA6IFNldDxIVE1MRWxlbWVudD58bnVsbCxcbiAgICAgICAgdG9LZWVwSW5lcnQ6IFNldDxIVE1MRWxlbWVudD58bnVsbCkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGUhO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZSBhcyBNYXliZVNoYWR5Um9vdDtcbiAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgIH1cbiAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAqL1xuICAgIHByaXZhdGVbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zOiBNdXRhdGlvblJlY29yZFtdKTogdm9pZCB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IChtdXRhdGlvbi50YXJnZXQgYXMgU2hhZG93Um9vdCkuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0IGFzIEhhc0ludGVybmFsU3RhdGUpO1xuICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcblxuICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2lzSW5lcnRhYmxlXShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfZ2V0UGFyZW50c10oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBBcnJheTxIVE1MRWxlbWVudD4ge1xuICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgbGV0IGN1cnJlbnQ6IEhUTUxFbGVtZW50fG51bGx8dW5kZWZpbmVkID0gZWxlbWVudDtcbiAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHx8XG4gICAgICAgICAgICAoY3VycmVudCBhcyBOb2RlIGFzIFNoYWRvd1Jvb3QpLmhvc3Q7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyZW50cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50OiBIVE1MRWxlbWVudCk6XG4gICAgICAgIFNldDxIVE1MRWxlbWVudD58bnVsbCB7XG4gICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcbiAgICAgIGxldCBpO1xuICAgICAgbGV0IGo7XG4gICAgICBsZXQgbm9kZXM7XG4gICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgKGRvY3VtZW50IGFzIERvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHMpLiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBIVE1MRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUhUTUxFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0FyZ3VtZW50cztcbiIsImltcG9ydCBiYXNlSXNBcmd1bWVudHMgZnJvbSAnLi9fYmFzZUlzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVVdGlsO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgYSBkaWZmZXJlbnQgc2hhcGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBhXG4gKiBAcGFyYW0ge29iamVjdH0gYlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RGlmZmVycyhhLCBiKSB7XG5cdGZvciAobGV0IGkgaW4gYSkgaWYgKGkgIT09ICdfX3NvdXJjZScgJiYgIShpIGluIGIpKSByZXR1cm4gdHJ1ZTtcblx0Zm9yIChsZXQgaSBpbiBiKSBpZiAoaSAhPT0gJ19fc291cmNlJyAmJiBhW2ldICE9PSBiW2ldKSByZXR1cm4gdHJ1ZTtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gdmFsdWVzIGFyZSB0aGUgc2FtZSB2YWx1ZVxuICogQHBhcmFtIHsqfSB4XG4gKiBAcGFyYW0geyp9IHlcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXMoeCwgeSkge1xuXHRyZXR1cm4gKHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSkgfHwgKHggIT09IHggJiYgeSAhPT0geSk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc2hhbGxvd0RpZmZlcnMgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIENvbXBvbmVudCBjbGFzcyB3aXRoIGEgcHJlZGVmaW5lZCBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCBpbXBsZW1lbnRhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwKSB7XG5cdHRoaXMucHJvcHMgPSBwO1xufVxuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG4vLyBTb21lIHRoaXJkLXBhcnR5IGxpYnJhcmllcyBjaGVjayBpZiB0aGlzIHByb3BlcnR5IGlzIHByZXNlbnRcblB1cmVDb21wb25lbnQucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblB1cmVDb21wb25lbnQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKHByb3BzLCBzdGF0ZSkge1xuXHRyZXR1cm4gc2hhbGxvd0RpZmZlcnModGhpcy5wcm9wcywgcHJvcHMpIHx8IHNoYWxsb3dEaWZmZXJzKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHNoYWxsb3dEaWZmZXJzIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBNZW1vaXplIGEgY29tcG9uZW50LCBzbyB0aGF0IGl0IG9ubHkgdXBkYXRlcyB3aGVuIHRoZSBwcm9wcyBhY3R1YWxseSBoYXZlXG4gKiBjaGFuZ2VkLiBUaGlzIHdhcyBwcmV2aW91c2x5IGtub3duIGFzIGBSZWFjdC5wdXJlYC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9IGMgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAqIEBwYXJhbSB7KHByZXY6IG9iamVjdCwgbmV4dDogb2JqZWN0KSA9PiBib29sZWFufSBbY29tcGFyZXJdIEN1c3RvbSBlcXVhbGl0eSBmdW5jdGlvblxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVtbyhjLCBjb21wYXJlcikge1xuXHRmdW5jdGlvbiBzaG91bGRVcGRhdGUobmV4dFByb3BzKSB7XG5cdFx0bGV0IHJlZiA9IHRoaXMucHJvcHMucmVmO1xuXHRcdGxldCB1cGRhdGVSZWYgPSByZWYgPT0gbmV4dFByb3BzLnJlZjtcblx0XHRpZiAoIXVwZGF0ZVJlZiAmJiByZWYpIHtcblx0XHRcdHJlZi5jYWxsID8gcmVmKG51bGwpIDogKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb21wYXJlcikge1xuXHRcdFx0cmV0dXJuIHNoYWxsb3dEaWZmZXJzKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICFjb21wYXJlcih0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICF1cGRhdGVSZWY7XG5cdH1cblxuXHRmdW5jdGlvbiBNZW1vZWQocHJvcHMpIHtcblx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHNob3VsZFVwZGF0ZTtcblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChjLCBwcm9wcyk7XG5cdH1cblx0TWVtb2VkLmRpc3BsYXlOYW1lID0gJ01lbW8oJyArIChjLmRpc3BsYXlOYW1lIHx8IGMubmFtZSkgKyAnKSc7XG5cdE1lbW9lZC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cdE1lbW9lZC5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0cmV0dXJuIE1lbW9lZDtcbn1cbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcblxubGV0IG9sZERpZmZIb29rID0gb3B0aW9ucy5fZGlmZjtcbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGlmICh2bm9kZS50eXBlICYmIHZub2RlLnR5cGUuX2ZvcndhcmRlZCAmJiB2bm9kZS5yZWYpIHtcblx0XHR2bm9kZS5wcm9wcy5yZWYgPSB2bm9kZS5yZWY7XG5cdFx0dm5vZGUucmVmID0gbnVsbDtcblx0fVxuXHRpZiAob2xkRGlmZkhvb2spIG9sZERpZmZIb29rKHZub2RlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBSRUFDVF9GT1JXQVJEX1NZTUJPTCA9XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmXG5cdFx0U3ltYm9sLmZvciAmJlxuXHRcdFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykpIHx8XG5cdDB4ZjQ3O1xuXG4vKipcbiAqIFBhc3MgcmVmIGRvd24gdG8gYSBjaGlsZC4gVGhpcyBpcyBtYWlubHkgdXNlZCBpbiBsaWJyYXJpZXMgd2l0aCBIT0NzIHRoYXRcbiAqIHdyYXAgY29tcG9uZW50cy4gVXNpbmcgYGZvcndhcmRSZWZgIHRoZXJlIGlzIGFuIGVhc3kgd2F5IHRvIGdldCBhIHJlZmVyZW5jZVxuICogb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IGluc3RlYWQgb2Ygb25lIG9mIHRoZSB3cmFwcGVyIGl0c2VsZi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRm9yd2FyZEZufSBmblxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZFJlZihmbikge1xuXHRmdW5jdGlvbiBGb3J3YXJkZWQocHJvcHMpIHtcblx0XHRsZXQgY2xvbmUgPSBhc3NpZ24oe30sIHByb3BzKTtcblx0XHRkZWxldGUgY2xvbmUucmVmO1xuXHRcdHJldHVybiBmbihjbG9uZSwgcHJvcHMucmVmIHx8IG51bGwpO1xuXHR9XG5cblx0Ly8gbW9ieC1yZWFjdCBjaGVja3MgZm9yIHRoaXMgYmVpbmcgcHJlc2VudFxuXHRGb3J3YXJkZWQuJCR0eXBlb2YgPSBSRUFDVF9GT1JXQVJEX1NZTUJPTDtcblx0Ly8gbW9ieC1yZWFjdCBoZWF2aWx5IHJlbGllcyBvbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLlxuXHQvLyBJdCBleHBlY3RzIGFuIG9iamVjdCBoZXJlIHdpdGggYSBgcmVuZGVyYCBwcm9wZXJ0eSxcblx0Ly8gYW5kIHByb3RvdHlwZS5yZW5kZXIgd2lsbCBmYWlsLiBXaXRob3V0IHRoaXNcblx0Ly8gbW9ieC1yZWFjdCB0aHJvd3MuXG5cdEZvcndhcmRlZC5yZW5kZXIgPSBGb3J3YXJkZWQ7XG5cblx0Rm9yd2FyZGVkLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0gRm9yd2FyZGVkLl9mb3J3YXJkZWQgPSB0cnVlO1xuXHRGb3J3YXJkZWQuZGlzcGxheU5hbWUgPSAnRm9yd2FyZFJlZignICsgKGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUpICsgJyknO1xuXHRyZXR1cm4gRm9yd2FyZGVkO1xufVxuIiwiaW1wb3J0IHsgdG9DaGlsZEFycmF5IH0gZnJvbSAncHJlYWN0JztcblxuY29uc3QgbWFwRm4gPSAoY2hpbGRyZW4sIGZuKSA9PiB7XG5cdGlmIChjaGlsZHJlbiA9PSBudWxsKSByZXR1cm4gbnVsbDtcblx0cmV0dXJuIHRvQ2hpbGRBcnJheSh0b0NoaWxkQXJyYXkoY2hpbGRyZW4pLm1hcChmbikpO1xufTtcblxuLy8gVGhpcyBBUEkgaXMgY29tcGxldGVseSB1bm5lY2Vzc2FyeSBmb3IgUHJlYWN0LCBzbyBpdCdzIGJhc2ljYWxseSBwYXNzdGhyb3VnaC5cbmV4cG9ydCBjb25zdCBDaGlsZHJlbiA9IHtcblx0bWFwOiBtYXBGbixcblx0Zm9yRWFjaDogbWFwRm4sXG5cdGNvdW50KGNoaWxkcmVuKSB7XG5cdFx0cmV0dXJuIGNoaWxkcmVuID8gdG9DaGlsZEFycmF5KGNoaWxkcmVuKS5sZW5ndGggOiAwO1xuXHR9LFxuXHRvbmx5KGNoaWxkcmVuKSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZCA9IHRvQ2hpbGRBcnJheShjaGlsZHJlbik7XG5cdFx0aWYgKG5vcm1hbGl6ZWQubGVuZ3RoICE9PSAxKSB0aHJvdyAnQ2hpbGRyZW4ub25seSc7XG5cdFx0cmV0dXJuIG5vcm1hbGl6ZWRbMF07XG5cdH0sXG5cdHRvQXJyYXk6IHRvQ2hpbGRBcnJheVxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3Qgb2xkQ2F0Y2hFcnJvciA9IG9wdGlvbnMuX2NhdGNoRXJyb3I7XG5vcHRpb25zLl9jYXRjaEVycm9yID0gZnVuY3Rpb24oZXJyb3IsIG5ld1ZOb2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdGlmIChlcnJvci50aGVuKSB7XG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdFx0bGV0IGNvbXBvbmVudDtcblx0XHRsZXQgdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmIGNvbXBvbmVudC5fY2hpbGREaWRTdXNwZW5kKSB7XG5cdFx0XHRcdGlmIChuZXdWTm9kZS5fZG9tID09IG51bGwpIHtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRG9uJ3QgY2FsbCBvbGRDYXRjaEVycm9yIGlmIHdlIGZvdW5kIGEgU3VzcGVuc2Vcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5fY2hpbGREaWRTdXNwZW5kKGVycm9yLCBuZXdWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdG9sZENhdGNoRXJyb3IoZXJyb3IsIG5ld1ZOb2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKTtcbn07XG5cbmNvbnN0IG9sZFVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5vcHRpb25zLnVubW91bnQgPSBmdW5jdGlvbih2bm9kZSkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0Y29uc3QgY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuX29uUmVzb2x2ZSkge1xuXHRcdGNvbXBvbmVudC5fb25SZXNvbHZlKCk7XG5cdH1cblxuXHQvLyBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIGh5ZHJhdGluZ1xuXHQvLyBtb3N0IGxpa2VseSBpdCBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnQgaXMgc3VzcGVuZGVkXG5cdC8vIHdlIHNldCB0aGUgdm5vZGUudHlwZSBhcyBgbnVsbGAgc28gdGhhdCBpdCBpcyBub3QgYSB0eXBlb2YgZnVuY3Rpb25cblx0Ly8gc28gdGhlIHVubW91bnQgd2lsbCByZW1vdmUgdGhlIHZub2RlLl9kb21cblx0aWYgKGNvbXBvbmVudCAmJiB2bm9kZS5faHlkcmF0aW5nID09PSB0cnVlKSB7XG5cdFx0dm5vZGUudHlwZSA9IG51bGw7XG5cdH1cblxuXHRpZiAob2xkVW5tb3VudCkgb2xkVW5tb3VudCh2bm9kZSk7XG59O1xuXG5mdW5jdGlvbiBkZXRhY2hlZENsb25lKHZub2RlLCBkZXRhY2hlZFBhcmVudCwgcGFyZW50RG9tKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50ICYmIHZub2RlLl9jb21wb25lbnQuX19ob29rcykge1xuXHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZvckVhY2goZWZmZWN0ID0+IHtcblx0XHRcdFx0aWYgKHR5cGVvZiBlZmZlY3QuX2NsZWFudXAgPT0gJ2Z1bmN0aW9uJykgZWZmZWN0Ll9jbGVhbnVwKCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzID0gbnVsbDtcblx0XHR9XG5cblx0XHR2bm9kZSA9IGFzc2lnbih7fSwgdm5vZGUpO1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHRcdGlmICh2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPT09IHBhcmVudERvbSkge1xuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPSBkZXRhY2hlZFBhcmVudDtcblx0XHRcdH1cblx0XHRcdHZub2RlLl9jb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblxuXHRcdHZub2RlLl9jaGlsZHJlbiA9XG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4gJiZcblx0XHRcdHZub2RlLl9jaGlsZHJlbi5tYXAoY2hpbGQgPT5cblx0XHRcdFx0ZGV0YWNoZWRDbG9uZShjaGlsZCwgZGV0YWNoZWRQYXJlbnQsIHBhcmVudERvbSlcblx0XHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU9yaWdpbmFsKHZub2RlLCBkZXRhY2hlZFBhcmVudCwgb3JpZ2luYWxQYXJlbnQpIHtcblx0aWYgKHZub2RlKSB7XG5cdFx0dm5vZGUuX29yaWdpbmFsID0gbnVsbDtcblx0XHR2bm9kZS5fY2hpbGRyZW4gPVxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuICYmXG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4ubWFwKGNoaWxkID0+XG5cdFx0XHRcdHJlbW92ZU9yaWdpbmFsKGNoaWxkLCBkZXRhY2hlZFBhcmVudCwgb3JpZ2luYWxQYXJlbnQpXG5cdFx0XHQpO1xuXG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQpIHtcblx0XHRcdGlmICh2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPT09IGRldGFjaGVkUGFyZW50KSB7XG5cdFx0XHRcdGlmICh2bm9kZS5fZG9tKSB7XG5cdFx0XHRcdFx0b3JpZ2luYWxQYXJlbnQuaW5zZXJ0QmVmb3JlKHZub2RlLl9kb20sIHZub2RlLl9uZXh0RG9tKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9IG9yaWdpbmFsUGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuLy8gaGF2aW5nIGN1c3RvbSBpbmhlcml0YW5jZSBpbnN0ZWFkIG9mIGEgY2xhc3MgaGVyZSBzYXZlcyBhIGxvdCBvZiBieXRlc1xuZXhwb3J0IGZ1bmN0aW9uIFN1c3BlbnNlKCkge1xuXHQvLyB3ZSBkbyBub3QgY2FsbCBzdXBlciBoZXJlIHRvIGdvbGYgc29tZSBieXRlcy4uLlxuXHR0aGlzLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50ID0gMDtcblx0dGhpcy5fc3VzcGVuZGVycyA9IG51bGw7XG5cdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGw7XG59XG5cbi8vIFRoaW5ncyB3ZSBkbyBoZXJlIHRvIHNhdmUgc29tZSBieXRlcyBidXQgYXJlIG5vdCBwcm9wZXIgSlMgaW5oZXJpdGFuY2U6XG4vLyAtIGNhbGwgYG5ldyBDb21wb25lbnQoKWAgYXMgdGhlIHByb3RvdHlwZVxuLy8gLSBkbyBub3Qgc2V0IGBTdXNwZW5zZS5wcm90b3R5cGUuY29uc3RydWN0b3JgIHRvIGBTdXNwZW5zZWBcblN1c3BlbnNlLnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9XG4gKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2UgVGhlIHRocm93biBwcm9taXNlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlPGFueSwgYW55Pn0gc3VzcGVuZGluZ1ZOb2RlIFRoZSBzdXNwZW5kaW5nIGNvbXBvbmVudFxuICovXG5TdXNwZW5zZS5wcm90b3R5cGUuX2NoaWxkRGlkU3VzcGVuZCA9IGZ1bmN0aW9uKHByb21pc2UsIHN1c3BlbmRpbmdWTm9kZSkge1xuXHRjb25zdCBzdXNwZW5kaW5nQ29tcG9uZW50ID0gc3VzcGVuZGluZ1ZOb2RlLl9jb21wb25lbnQ7XG5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH0gKi9cblx0Y29uc3QgYyA9IHRoaXM7XG5cblx0aWYgKGMuX3N1c3BlbmRlcnMgPT0gbnVsbCkge1xuXHRcdGMuX3N1c3BlbmRlcnMgPSBbXTtcblx0fVxuXHRjLl9zdXNwZW5kZXJzLnB1c2goc3VzcGVuZGluZ0NvbXBvbmVudCk7XG5cblx0Y29uc3QgcmVzb2x2ZSA9IHN1c3BlbmRlZChjLl92bm9kZSk7XG5cblx0bGV0IHJlc29sdmVkID0gZmFsc2U7XG5cdGNvbnN0IG9uUmVzb2x2ZWQgPSAoKSA9PiB7XG5cdFx0aWYgKHJlc29sdmVkKSByZXR1cm47XG5cblx0XHRyZXNvbHZlZCA9IHRydWU7XG5cdFx0c3VzcGVuZGluZ0NvbXBvbmVudC5fb25SZXNvbHZlID0gbnVsbDtcblxuXHRcdGlmIChyZXNvbHZlKSB7XG5cdFx0XHRyZXNvbHZlKG9uU3VzcGVuc2lvbkNvbXBsZXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b25TdXNwZW5zaW9uQ29tcGxldGUoKTtcblx0XHR9XG5cdH07XG5cblx0c3VzcGVuZGluZ0NvbXBvbmVudC5fb25SZXNvbHZlID0gb25SZXNvbHZlZDtcblxuXHRjb25zdCBvblN1c3BlbnNpb25Db21wbGV0ZSA9ICgpID0+IHtcblx0XHRpZiAoIS0tYy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCkge1xuXHRcdFx0Ly8gSWYgdGhlIHN1c3BlbnNpb24gd2FzIGR1cmluZyBoeWRyYXRpb24gd2UgZG9uJ3QgbmVlZCB0byByZXN0b3JlIHRoZVxuXHRcdFx0Ly8gc3VzcGVuZGVkIGNoaWxkcmVuIGludG8gdGhlIF9jaGlsZHJlbiBhcnJheVxuXHRcdFx0aWYgKGMuc3RhdGUuX3N1c3BlbmRlZCkge1xuXHRcdFx0XHRjb25zdCBzdXNwZW5kZWRWTm9kZSA9IGMuc3RhdGUuX3N1c3BlbmRlZDtcblx0XHRcdFx0Yy5fdm5vZGUuX2NoaWxkcmVuWzBdID0gcmVtb3ZlT3JpZ2luYWwoXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUsXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tLFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLl9jb21wb25lbnQuX29yaWdpbmFsUGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGMuc2V0U3RhdGUoeyBfc3VzcGVuZGVkOiAoYy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbCkgfSk7XG5cblx0XHRcdGxldCBzdXNwZW5kZWQ7XG5cdFx0XHR3aGlsZSAoKHN1c3BlbmRlZCA9IGMuX3N1c3BlbmRlcnMucG9wKCkpKSB7XG5cdFx0XHRcdHN1c3BlbmRlZC5mb3JjZVVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogV2UgZG8gbm90IHNldCBgc3VzcGVuZGVkOiB0cnVlYCBkdXJpbmcgaHlkcmF0aW9uIGJlY2F1c2Ugd2Ugd2FudCB0aGUgYWN0dWFsIG1hcmt1cFxuXHQgKiB0byByZW1haW4gb24gc2NyZWVuIGFuZCBoeWRyYXRlIGl0IHdoZW4gdGhlIHN1c3BlbnNlIGFjdHVhbGx5IGdldHMgcmVzb2x2ZWQuXG5cdCAqIFdoaWxlIGluIG5vbi1oeWRyYXRpb24gY2FzZXMgdGhlIHVzdWFsIGZhbGxiYWNrIC0+IGNvbXBvbmVudCBmbG93IHdvdWxkIG9jY291ci5cblx0ICovXG5cdGNvbnN0IHdhc0h5ZHJhdGluZyA9IHN1c3BlbmRpbmdWTm9kZS5faHlkcmF0aW5nID09PSB0cnVlO1xuXHRpZiAoIWMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQrKyAmJiAhd2FzSHlkcmF0aW5nKSB7XG5cdFx0Yy5zZXRTdGF0ZSh7IF9zdXNwZW5kZWQ6IChjLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBjLl92bm9kZS5fY2hpbGRyZW5bMF0pIH0pO1xuXHR9XG5cdHByb21pc2UudGhlbihvblJlc29sdmVkLCBvblJlc29sdmVkKTtcbn07XG5cblN1c3BlbnNlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuXHR0aGlzLl9zdXNwZW5kZXJzID0gW107XG59O1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnRbXCJwcm9wc1wiXX0gcHJvcHNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VTdGF0ZX0gc3RhdGVcbiAqL1xuU3VzcGVuc2UucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHByb3BzLCBzdGF0ZSkge1xuXHRpZiAodGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyKSB7XG5cdFx0Ly8gV2hlbiB0aGUgU3VzcGVuc2UncyBfdm5vZGUgd2FzIGNyZWF0ZWQgYnkgYSBjYWxsIHRvIGNyZWF0ZVZOb2RlXG5cdFx0Ly8gKGkuZS4gZHVlIHRvIGEgc2V0U3RhdGUgZnVydGhlciB1cCBpbiB0aGUgdHJlZSlcblx0XHQvLyBpdCdzIF9jaGlsZHJlbiBwcm9wIGlzIG51bGwsIGluIHRoaXMgY2FzZSB3ZSBcImZvcmdldFwiIGFib3V0IHRoZSBwYXJrZWQgdm5vZGVzIHRvIGRldGFjaFxuXHRcdGlmICh0aGlzLl92bm9kZS5fY2hpbGRyZW4pIHtcblx0XHRcdGNvbnN0IGRldGFjaGVkUGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjb25zdCBkZXRhY2hlZENvbXBvbmVudCA9IHRoaXMuX3Zub2RlLl9jaGlsZHJlblswXS5fY29tcG9uZW50O1xuXHRcdFx0dGhpcy5fdm5vZGUuX2NoaWxkcmVuWzBdID0gZGV0YWNoZWRDbG9uZShcblx0XHRcdFx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyLFxuXHRcdFx0XHRkZXRhY2hlZFBhcmVudCxcblx0XHRcdFx0KGRldGFjaGVkQ29tcG9uZW50Ll9vcmlnaW5hbFBhcmVudERvbSA9IGRldGFjaGVkQ29tcG9uZW50Ll9wYXJlbnREb20pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGw7XG5cdH1cblxuXHQvLyBXcmFwIGZhbGxiYWNrIHRyZWUgaW4gYSBWTm9kZSB0aGF0IHByZXZlbnRzIGl0c2VsZiBmcm9tIGJlaW5nIG1hcmtlZCBhcyBhYm9ydGluZyBtaWQtaHlkcmF0aW9uOlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSAqL1xuXHRjb25zdCBmYWxsYmFjayA9XG5cdFx0c3RhdGUuX3N1c3BlbmRlZCAmJiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBwcm9wcy5mYWxsYmFjayk7XG5cdGlmIChmYWxsYmFjaykgZmFsbGJhY2suX2h5ZHJhdGluZyA9IG51bGw7XG5cblx0cmV0dXJuIFtcblx0XHRjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBzdGF0ZS5fc3VzcGVuZGVkID8gbnVsbCA6IHByb3BzLmNoaWxkcmVuKSxcblx0XHRmYWxsYmFja1xuXHRdO1xufTtcblxuLyoqXG4gKiBDaGVja3MgYW5kIGNhbGxzIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgX3N1c3BlbmRlZCBtZXRob2QsIHBhc3NpbmcgaW4gdGhlXG4gKiBzdXNwZW5kZWQgdm5vZGUuIFRoaXMgaXMgYSB3YXkgZm9yIGEgcGFyZW50IChlLmcuIFN1c3BlbnNlTGlzdCkgdG8gZ2V0IG5vdGlmaWVkXG4gKiB0aGF0IG9uZSBvZiBpdHMgY2hpbGRyZW4vZGVzY2VuZGFudHMgc3VzcGVuZGVkLlxuICpcbiAqIFRoZSBwYXJlbnQgTUFZIHJldHVybiBhIGNhbGxiYWNrLiBUaGUgY2FsbGJhY2sgd2lsbCBnZXQgY2FsbGVkIHdoZW4gdGhlXG4gKiBzdXNwZW5zaW9uIHJlc29sdmVzLCBub3RpZnlpbmcgdGhlIHBhcmVudCBvZiB0aGUgZmFjdC5cbiAqIE1vcmVvdmVyLCB0aGUgY2FsbGJhY2sgZ2V0cyBmdW5jdGlvbiBgdW5zdXNwZW5kYCBhcyBhIHBhcmFtZXRlci4gVGhlIHJlc29sdmVkXG4gKiBjaGlsZCBkZXNjZW5kYW50IHdpbGwgbm90IGFjdHVhbGx5IGdldCB1bnN1c3BlbmRlZCB1bnRpbCBgdW5zdXNwZW5kYCBnZXRzIGNhbGxlZC5cbiAqIFRoaXMgaXMgYSB3YXkgZm9yIHRoZSBwYXJlbnQgdG8gZGVsYXkgdW5zdXNwZW5kaW5nLlxuICpcbiAqIElmIHRoZSBwYXJlbnQgZG9lcyBub3QgcmV0dXJuIGEgY2FsbGJhY2sgdGhlbiB0aGUgcmVzb2x2ZWQgdm5vZGVcbiAqIGdldHMgdW5zdXNwZW5kZWQgaW1tZWRpYXRlbHkgd2hlbiBpdCByZXNvbHZlcy5cbiAqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHJldHVybnMgeygodW5zdXNwZW5kOiAoKSA9PiB2b2lkKSA9PiB2b2lkKT99XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXNwZW5kZWQodm5vZGUpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQgPSB2bm9kZS5fcGFyZW50Ll9jb21wb25lbnQ7XG5cdHJldHVybiBjb21wb25lbnQgJiYgY29tcG9uZW50Ll9zdXNwZW5kZWQgJiYgY29tcG9uZW50Ll9zdXNwZW5kZWQodm5vZGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF6eShsb2FkZXIpIHtcblx0bGV0IHByb207XG5cdGxldCBjb21wb25lbnQ7XG5cdGxldCBlcnJvcjtcblxuXHRmdW5jdGlvbiBMYXp5KHByb3BzKSB7XG5cdFx0aWYgKCFwcm9tKSB7XG5cdFx0XHRwcm9tID0gbG9hZGVyKCk7XG5cdFx0XHRwcm9tLnRoZW4oXG5cdFx0XHRcdGV4cG9ydHMgPT4ge1xuXHRcdFx0XHRcdGNvbXBvbmVudCA9IGV4cG9ydHMuZGVmYXVsdCB8fCBleHBvcnRzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlID0+IHtcblx0XHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBlcnJvcjtcblx0XHR9XG5cblx0XHRpZiAoIWNvbXBvbmVudCkge1xuXHRcdFx0dGhyb3cgcHJvbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzKTtcblx0fVxuXG5cdExhenkuZGlzcGxheU5hbWUgPSAnTGF6eSc7XG5cdExhenkuX2ZvcndhcmRlZCA9IHRydWU7XG5cdHJldHVybiBMYXp5O1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCB0b0NoaWxkQXJyYXkgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc3VzcGVuZGVkIH0gZnJvbSAnLi9zdXNwZW5zZS5qcyc7XG5cbi8vIEluZGV4ZXMgdG8gbGlua2VkIGxpc3Qgbm9kZXMgKG5vZGVzIGFyZSBzdG9yZWQgYXMgYXJyYXlzIHRvIHNhdmUgYnl0ZXMpLlxuY29uc3QgU1VTUEVOREVEX0NPVU5UID0gMDtcbmNvbnN0IFJFU09MVkVEX0NPVU5UID0gMTtcbmNvbnN0IE5FWFRfTk9ERSA9IDI7XG5cbi8vIEhhdmluZyBjdXN0b20gaW5oZXJpdGFuY2UgaW5zdGVhZCBvZiBhIGNsYXNzIGhlcmUgc2F2ZXMgYSBsb3Qgb2YgYnl0ZXMuXG5leHBvcnQgZnVuY3Rpb24gU3VzcGVuc2VMaXN0KCkge1xuXHR0aGlzLl9uZXh0ID0gbnVsbDtcblx0dGhpcy5fbWFwID0gbnVsbDtcbn1cblxuLy8gTWFyayBvbmUgb2YgY2hpbGQncyBlYXJsaWVyIHN1c3BlbnNpb25zIGFzIHJlc29sdmVkLlxuLy8gU29tZSBwZW5kaW5nIGNhbGxiYWNrcyBtYXkgYmVjb21lIGNhbGxhYmxlIGR1ZSB0byB0aGlzXG4vLyAoZS5nLiB0aGUgbGFzdCBzdXNwZW5kZWQgZGVzY2VuZGFudCBnZXRzIHJlc29sdmVkIHdoZW5cbi8vIHJldmVhbE9yZGVyID09PSAndG9nZXRoZXInKS4gUHJvY2VzcyB0aG9zZSBjYWxsYmFja3MgYXMgd2VsbC5cbmNvbnN0IHJlc29sdmUgPSAobGlzdCwgY2hpbGQsIG5vZGUpID0+IHtcblx0aWYgKCsrbm9kZVtSRVNPTFZFRF9DT1VOVF0gPT09IG5vZGVbU1VTUEVOREVEX0NPVU5UXSkge1xuXHRcdC8vIFRoZSBudW1iZXIgYSBjaGlsZCAob3IgYW55IG9mIGl0cyBkZXNjZW5kYW50cykgaGFzIGJlZW4gc3VzcGVuZGVkXG5cdFx0Ly8gbWF0Y2hlcyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0J3MgYmVlbiByZXNvbHZlZC4gVGhlcmVmb3JlIHdlXG5cdFx0Ly8gbWFyayB0aGUgY2hpbGQgYXMgY29tcGxldGVseSByZXNvbHZlZCBieSBkZWxldGluZyBpdCBmcm9tIC5fbWFwLlxuXHRcdC8vIFRoaXMgaXMgdXNlZCB0byBmaWd1cmUgb3V0IHdoZW4gKmFsbCogY2hpbGRyZW4gaGF2ZSBiZWVuIGNvbXBsZXRlbHlcblx0XHQvLyByZXNvbHZlZCB3aGVuIHJldmVhbE9yZGVyIGlzICd0b2dldGhlcicuXG5cdFx0bGlzdC5fbWFwLmRlbGV0ZShjaGlsZCk7XG5cdH1cblxuXHQvLyBJZiByZXZlYWxPcmRlciBpcyBmYWxzeSB0aGVuIHdlIGNhbiBkbyBhbiBlYXJseSBleGl0LCBhcyB0aGVcblx0Ly8gY2FsbGJhY2tzIHdvbid0IGdldCBxdWV1ZWQgaW4gdGhlIG5vZGUgYW55d2F5LlxuXHQvLyBJZiByZXZlYWxPcmRlciBpcyAndG9nZXRoZXInIHRoZW4gYWxzbyBkbyBhbiBlYXJseSBleGl0XG5cdC8vIGlmIGFsbCBzdXNwZW5kZWQgZGVzY2VuZGFudHMgaGF2ZSBub3QgeWV0IGJlZW4gcmVzb2x2ZWQuXG5cdGlmIChcblx0XHQhbGlzdC5wcm9wcy5yZXZlYWxPcmRlciB8fFxuXHRcdChsaXN0LnByb3BzLnJldmVhbE9yZGVyWzBdID09PSAndCcgJiYgbGlzdC5fbWFwLnNpemUpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFdhbGsgdGhlIGN1cnJlbnRseSBzdXNwZW5kZWQgY2hpbGRyZW4gaW4gb3JkZXIsIGNhbGxpbmcgdGhlaXJcblx0Ly8gc3RvcmVkIGNhbGxiYWNrcyBvbiB0aGUgd2F5LiBTdG9wIGlmIHdlIGVuY291bnRlciBhIGNoaWxkIHRoYXRcblx0Ly8gaGFzIG5vdCBiZWVuIGNvbXBsZXRlbHkgcmVzb2x2ZWQgeWV0LlxuXHRub2RlID0gbGlzdC5fbmV4dDtcblx0d2hpbGUgKG5vZGUpIHtcblx0XHR3aGlsZSAobm9kZS5sZW5ndGggPiAzKSB7XG5cdFx0XHRub2RlLnBvcCgpKCk7XG5cdFx0fVxuXHRcdGlmIChub2RlW1JFU09MVkVEX0NPVU5UXSA8IG5vZGVbU1VTUEVOREVEX0NPVU5UXSkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxpc3QuX25leHQgPSBub2RlID0gbm9kZVtORVhUX05PREVdO1xuXHR9XG59O1xuXG4vLyBUaGluZ3Mgd2UgZG8gaGVyZSB0byBzYXZlIHNvbWUgYnl0ZXMgYnV0IGFyZSBub3QgcHJvcGVyIEpTIGluaGVyaXRhbmNlOlxuLy8gLSBjYWxsIGBuZXcgQ29tcG9uZW50KClgIGFzIHRoZSBwcm90b3R5cGVcbi8vIC0gZG8gbm90IHNldCBgU3VzcGVuc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yYCB0byBgU3VzcGVuc2VgXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLl9zdXNwZW5kZWQgPSBmdW5jdGlvbihjaGlsZCkge1xuXHRjb25zdCBsaXN0ID0gdGhpcztcblx0Y29uc3QgZGVsZWdhdGVkID0gc3VzcGVuZGVkKGxpc3QuX3Zub2RlKTtcblxuXHRsZXQgbm9kZSA9IGxpc3QuX21hcC5nZXQoY2hpbGQpO1xuXHRub2RlW1NVU1BFTkRFRF9DT1VOVF0rKztcblxuXHRyZXR1cm4gdW5zdXNwZW5kID0+IHtcblx0XHRjb25zdCB3cmFwcGVkVW5zdXNwZW5kID0gKCkgPT4ge1xuXHRcdFx0aWYgKCFsaXN0LnByb3BzLnJldmVhbE9yZGVyKSB7XG5cdFx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0aGUgdW5kZWZpbmVkIChmYWxzeSkgcmV2ZWFsT3JkZXIsIGFzIHRoZXJlXG5cdFx0XHRcdC8vIGlzIG5vIG5lZWQgdG8gY29vcmRpbmF0ZSBhIHNwZWNpZmljIG9yZGVyIG9yIHVuc3VzcGVuZHMuXG5cdFx0XHRcdHVuc3VzcGVuZCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZS5wdXNoKHVuc3VzcGVuZCk7XG5cdFx0XHRcdHJlc29sdmUobGlzdCwgY2hpbGQsIG5vZGUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0aWYgKGRlbGVnYXRlZCkge1xuXHRcdFx0ZGVsZWdhdGVkKHdyYXBwZWRVbnN1c3BlbmQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3cmFwcGVkVW5zdXNwZW5kKCk7XG5cdFx0fVxuXHR9O1xufTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihwcm9wcykge1xuXHR0aGlzLl9uZXh0ID0gbnVsbDtcblx0dGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0IGNoaWxkcmVuID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKTtcblx0aWYgKHByb3BzLnJldmVhbE9yZGVyICYmIHByb3BzLnJldmVhbE9yZGVyWzBdID09PSAnYicpIHtcblx0XHQvLyBJZiBvcmRlciA9PT0gJ2JhY2t3YXJkcycgKG9yLCB3ZWxsLCBhbnl0aGluZyBzdGFydGluZyB3aXRoIGEgJ2InKVxuXHRcdC8vIHRoZW4gZmxpcCB0aGUgY2hpbGQgbGlzdCBhcm91bmQgc28gdGhhdCB0aGUgbGFzdCBjaGlsZCB3aWxsIGJlXG5cdFx0Ly8gdGhlIGZpcnN0IGluIHRoZSBsaW5rZWQgbGlzdC5cblx0XHRjaGlsZHJlbi5yZXZlcnNlKCk7XG5cdH1cblx0Ly8gQnVpbGQgdGhlIGxpbmtlZCBsaXN0LiBJdGVyYXRlIHRocm91Z2ggdGhlIGNoaWxkcmVuIGluIHJldmVyc2Ugb3JkZXJcblx0Ly8gc28gdGhhdCBgX25leHRgIHBvaW50cyB0byB0aGUgZmlyc3QgbGlua2VkIGxpc3Qgbm9kZSB0byBiZSByZXNvbHZlZC5cblx0Zm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHQvLyBDcmVhdGUgYSBuZXcgbGlua2VkIGxpc3Qgbm9kZSBhcyBhbiBhcnJheSBvZiBmb3JtOlxuXHRcdC8vIFx0W3N1c3BlbmRlZF9jb3VudCwgcmVzb2x2ZWRfY291bnQsIG5leHRfbm9kZV1cblx0XHQvLyB3aGVyZSBzdXNwZW5kZWRfY291bnQgYW5kIHJlc29sdmVkX2NvdW50IGFyZSBudW1lcmljIGNvdW50ZXJzIGZvclxuXHRcdC8vIGtlZXBpbmcgdHJhY2sgaG93IG1hbnkgdGltZXMgYSBub2RlIGhhcyBiZWVuIHN1c3BlbmRlZCBhbmQgcmVzb2x2ZWQuXG5cdFx0Ly9cblx0XHQvLyBOb3RlIHRoYXQgc3VzcGVuZGVkX2NvdW50IHN0YXJ0cyBmcm9tIDEgaW5zdGVhZCBvZiAwLCBzbyB3ZSBjYW4gYmxvY2tcblx0XHQvLyBwcm9jZXNzaW5nIGNhbGxiYWNrcyB1bnRpbCBjb21wb25lbnREaWRNb3VudCBoYXMgYmVlbiBjYWxsZWQuIEluIGEgc2Vuc2Vcblx0XHQvLyBub2RlIGlzIHN1c3BlbmRlZCBhdCBsZWFzdCB1bnRpbCBjb21wb25lbnREaWRNb3VudCBnZXRzIGNhbGxlZCFcblx0XHQvL1xuXHRcdC8vIFBlbmRpbmcgY2FsbGJhY2tzIGFyZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBub2RlOlxuXHRcdC8vIFx0W3N1c3BlbmRlZF9jb3VudCwgcmVzb2x2ZWRfY291bnQsIG5leHRfbm9kZSwgY2FsbGJhY2tfMCwgY2FsbGJhY2tfMSwgLi4uXVxuXHRcdHRoaXMuX21hcC5zZXQoY2hpbGRyZW5baV0sICh0aGlzLl9uZXh0ID0gWzEsIDAsIHRoaXMuX25leHRdKSk7XG5cdH1cblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBTdXNwZW5zZUxpc3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24oKSB7XG5cdC8vIEl0ZXJhdGUgdGhyb3VnaCBhbGwgY2hpbGRyZW4gYWZ0ZXIgbW91bnRpbmcgZm9yIHR3byByZWFzb25zOlxuXHQvLyAxLiBBcyBlYWNoIG5vZGVbU1VTUEVOREVEX0NPVU5UXSBzdGFydHMgZnJvbSAxLCB0aGlzIGl0ZXJhdGlvbiBpbmNyZWFzZXNcblx0Ly8gICAgZWFjaCBub2RlW1JFTEVBU0VEX0NPVU5UXSBieSAxLCB0aGVyZWZvcmUgYmFsYW5jaW5nIHRoZSBjb3VudGVycy5cblx0Ly8gICAgVGhlIG5vZGVzIGNhbiBub3cgYmUgY29tcGxldGVseSBjb25zdW1lZCBmcm9tIHRoZSBsaW5rZWQgbGlzdC5cblx0Ly8gMi4gSGFuZGxlIG5vZGVzIHRoYXQgbWlnaHQgaGF2ZSBnb3R0ZW4gcmVzb2x2ZWQgYmV0d2VlbiByZW5kZXIgYW5kXG5cdC8vICAgIGNvbXBvbmVudERpZE1vdW50LlxuXHR0aGlzLl9tYXAuZm9yRWFjaCgobm9kZSwgY2hpbGQpID0+IHtcblx0XHRyZXNvbHZlKHRoaXMsIGNoaWxkLCBub2RlKTtcblx0fSk7XG59O1xuIiwiaW1wb3J0IHtcblx0cmVuZGVyIGFzIHByZWFjdFJlbmRlcixcblx0aHlkcmF0ZSBhcyBwcmVhY3RIeWRyYXRlLFxuXHRvcHRpb25zLFxuXHR0b0NoaWxkQXJyYXksXG5cdENvbXBvbmVudFxufSBmcm9tICdwcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgUkVBQ1RfRUxFTUVOVF9UWVBFID1cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG5cdDB4ZWFjNztcblxuY29uc3QgQ0FNRUxfUFJPUFMgPSAvXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlfGxldHRlcnxsaWdodGluZ3xtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8cG9pbnRlcnxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx0cmFuc2Zvcm18dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLztcblxuY29uc3QgSVNfRE9NID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSW5wdXQgdHlwZXMgZm9yIHdoaWNoIG9uY2hhbmdlIHNob3VsZCBub3QgYmUgY29udmVydGVkIHRvIG9uaW5wdXQuXG4vLyB0eXBlPVwiZmlsZXxjaGVja2JveHxyYWRpb1wiLCBwbHVzIFwicmFuZ2VcIiBpbiBJRTExLlxuLy8gKElFMTEgZG9lc24ndCBzdXBwb3J0IFN5bWJvbCwgd2hpY2ggd2UgdXNlIGhlcmUgdG8gdHVybiBgcmFkYCBpbnRvIGByYWAgd2hpY2ggbWF0Y2hlcyBcInJhbmdlXCIpXG5jb25zdCBvbkNoYW5nZUlucHV0VHlwZSA9IHR5cGUgPT5cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFN5bWJvbCgpID09ICdzeW1ib2wnXG5cdFx0PyAvZmlsfGNoZXxyYWQvaVxuXHRcdDogL2ZpbHxjaGV8cmEvaVxuXHQpLnRlc3QodHlwZSk7XG5cbi8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYHJlYWN0LXZpcnR1YWxpemVkYCBleHBsaWNpdGx5IGNoZWNrIGZvciB0aGlzLlxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG5cbi8vIGBVTlNBRkVfKmAgbGlmZWN5Y2xlIGhvb2tzXG4vLyBQcmVhY3Qgb25seSBldmVyIGludm9rZXMgdGhlIHVucHJlZml4ZWQgbWV0aG9kcy5cbi8vIEhlcmUgd2UgcHJvdmlkZSBhIGJhc2UgXCJmYWxsYmFja1wiIGltcGxlbWVudGF0aW9uIHRoYXQgY2FsbHMgYW55IGRlZmluZWQgVU5TQUZFXyBwcmVmaXhlZCBtZXRob2QuXG4vLyAtIElmIGEgY29tcG9uZW50IGRlZmluZXMgaXRzIG93biBgY29tcG9uZW50RGlkTW91bnQoKWAgKGluY2x1ZGluZyB2aWEgZGVmaW5lUHJvcGVydHkpLCB1c2UgdGhhdC5cbi8vIC0gSWYgYSBjb21wb25lbnQgZGVmaW5lcyBgVU5TQUZFX2NvbXBvbmVudERpZE1vdW50KClgLCBgY29tcG9uZW50RGlkTW91bnRgIGlzIHRoZSBhbGlhcyBnZXR0ZXIvc2V0dGVyLlxuLy8gLSBJZiBhbnl0aGluZyBhc3NpZ25zIHRvIGFuIGBVTlNBRkVfKmAgcHJvcGVydHksIHRoZSBhc3NpZ25tZW50IGlzIGZvcndhcmRlZCB0byB0aGUgdW5wcmVmaXhlZCBwcm9wZXJ0eS5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8xOTQxXG5bXG5cdCdjb21wb25lbnRXaWxsTW91bnQnLFxuXHQnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG5cdCdjb21wb25lbnRXaWxsVXBkYXRlJ1xuXS5mb3JFYWNoKGtleSA9PiB7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBrZXksIHtcblx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0Z2V0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXNbJ1VOU0FGRV8nICsga2V5XTtcblx0XHR9LFxuXHRcdHNldCh2KSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0d3JpdGFibGU6IHRydWUsXG5cdFx0XHRcdHZhbHVlOiB2XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xufSk7XG5cbi8qKlxuICogUHJveHkgcmVuZGVyKCkgc2luY2UgUmVhY3QgcmV0dXJucyBhIENvbXBvbmVudCByZWZlcmVuY2UuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBWTm9kZSB0cmVlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnQgRE9NIG5vZGUgdG8gcmVuZGVyIHZub2RlIHRyZWUgaW50b1xuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgcmVuZGVyaW5nXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50IHwgbnVsbH0gVGhlIHJvb3QgY29tcG9uZW50IHJlZmVyZW5jZSBvciBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudCwgY2FsbGJhY2spIHtcblx0Ly8gUmVhY3QgZGVzdHJveXMgYW55IGV4aXN0aW5nIERPTSBub2Rlcywgc2VlICMxNzI3XG5cdC8vIC4uLmJ1dCBvbmx5IG9uIHRoZSBmaXJzdCByZW5kZXIsIHNlZSAjMTgyOFxuXHRpZiAocGFyZW50Ll9jaGlsZHJlbiA9PSBudWxsKSB7XG5cdFx0cGFyZW50LnRleHRDb250ZW50ID0gJyc7XG5cdH1cblxuXHRwcmVhY3RSZW5kZXIodm5vZGUsIHBhcmVudCk7XG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcblxuXHRyZXR1cm4gdm5vZGUgPyB2bm9kZS5fY29tcG9uZW50IDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUodm5vZGUsIHBhcmVudCwgY2FsbGJhY2spIHtcblx0cHJlYWN0SHlkcmF0ZSh2bm9kZSwgcGFyZW50KTtcblx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuXG5cdHJldHVybiB2bm9kZSA/IHZub2RlLl9jb21wb25lbnQgOiBudWxsO1xufVxuXG5sZXQgb2xkRXZlbnRIb29rID0gb3B0aW9ucy5ldmVudDtcbm9wdGlvbnMuZXZlbnQgPSBlID0+IHtcblx0aWYgKG9sZEV2ZW50SG9vaykgZSA9IG9sZEV2ZW50SG9vayhlKTtcblx0ZS5wZXJzaXN0ID0gZW1wdHk7XG5cdGUuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSBpc1Byb3BhZ2F0aW9uU3RvcHBlZDtcblx0ZS5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cdHJldHVybiAoZS5uYXRpdmVFdmVudCA9IGUpO1xufTtcblxuZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG5mdW5jdGlvbiBpc1Byb3BhZ2F0aW9uU3RvcHBlZCgpIHtcblx0cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlO1xufVxuXG5mdW5jdGlvbiBpc0RlZmF1bHRQcmV2ZW50ZWQoKSB7XG5cdHJldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ7XG59XG5cbmxldCBjbGFzc05hbWVEZXNjcmlwdG9yID0ge1xuXHRjb25maWd1cmFibGU6IHRydWUsXG5cdGdldCgpIHtcblx0XHRyZXR1cm4gdGhpcy5jbGFzcztcblx0fVxufTtcblxubGV0IG9sZFZOb2RlSG9vayA9IG9wdGlvbnMudm5vZGU7XG5vcHRpb25zLnZub2RlID0gdm5vZGUgPT4ge1xuXHRsZXQgdHlwZSA9IHZub2RlLnR5cGU7XG5cdGxldCBwcm9wcyA9IHZub2RlLnByb3BzO1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gcHJvcHM7XG5cblx0Ly8gb25seSBub3JtYWxpemUgcHJvcHMgb24gRWxlbWVudCBub2Rlc1xuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0Y29uc3Qgbm9uQ3VzdG9tRWxlbWVudCA9IHR5cGUuaW5kZXhPZignLScpID09PSAtMTtcblx0XHRub3JtYWxpemVkUHJvcHMgPSB7fTtcblxuXHRcdGZvciAobGV0IGkgaW4gcHJvcHMpIHtcblx0XHRcdGxldCB2YWx1ZSA9IHByb3BzW2ldO1xuXG5cdFx0XHRpZiAoSVNfRE9NICYmIGkgPT09ICdjaGlsZHJlbicgJiYgdHlwZSA9PT0gJ25vc2NyaXB0Jykge1xuXHRcdFx0XHQvLyBFbXVsYXRlIFJlYWN0J3MgYmVoYXZpb3Igb2Ygbm90IHJlbmRlcmluZyB0aGUgY29udGVudHMgb2Ygbm9zY3JpcHQgdGFncyBvbiB0aGUgY2xpZW50LlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcyAmJiB2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFNraXAgYXBwbHlpbmcgdmFsdWUgaWYgaXQgaXMgbnVsbC91bmRlZmluZWQgYW5kIHdlIGFscmVhZHkgc2V0XG5cdFx0XHRcdC8vIGEgZGVmYXVsdCB2YWx1ZVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGkgPT09ICdkZWZhdWx0VmFsdWUnICYmXG5cdFx0XHRcdCd2YWx1ZScgaW4gcHJvcHMgJiZcblx0XHRcdFx0cHJvcHMudmFsdWUgPT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIGBkZWZhdWx0VmFsdWVgIGlzIHRyZWF0ZWQgYXMgYSBmYWxsYmFjayBgdmFsdWVgIHdoZW4gYSB2YWx1ZSBwcm9wIGlzIHByZXNlbnQgYnV0IG51bGwvdW5kZWZpbmVkLlxuXHRcdFx0XHQvLyBgZGVmYXVsdFZhbHVlYCBmb3IgRWxlbWVudHMgd2l0aCBubyB2YWx1ZSBwcm9wIGlzIHRoZSBzYW1lIGFzIHRoZSBET00gZGVmYXVsdFZhbHVlIHByb3BlcnR5LlxuXHRcdFx0XHRpID0gJ3ZhbHVlJztcblx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gJ2Rvd25sb2FkJyAmJiB2YWx1ZSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHQvLyBDYWxsaW5nIGBzZXRBdHRyaWJ1dGVgIHdpdGggYSB0cnV0aHkgdmFsdWUgd2lsbCBsZWFkIHRvIGl0IGJlaW5nXG5cdFx0XHRcdC8vIHBhc3NlZCBhcyBhIHN0cmluZ2lmaWVkIHZhbHVlLCBlLmcuIGBkb3dubG9hZD1cInRydWVcImAuIFJlYWN0XG5cdFx0XHRcdC8vIGNvbnZlcnRzIGl0IHRvIGFuIGVtcHR5IHN0cmluZyBpbnN0ZWFkLCBvdGhlcndpc2UgdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyB2YWx1ZSB3aWxsIGJlIHVzZWQgYXMgdGhlIGZpbGUgbmFtZSBhbmQgdGhlIGZpbGUgd2lsbCBiZSBjYWxsZWRcblx0XHRcdFx0Ly8gXCJ0cnVlXCIgdXBvbiBkb3dubG9hZGluZyBpdC5cblx0XHRcdFx0dmFsdWUgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoL29uZG91YmxlY2xpY2svaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25kYmxjbGljayc7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQvXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QoaSArIHR5cGUpICYmXG5cdFx0XHRcdCFvbkNoYW5nZUlucHV0VHlwZShwcm9wcy50eXBlKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGkgPSAnb25pbnB1dCc7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb25mb2N1cyQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25mb2N1c2luJztcblx0XHRcdH0gZWxzZSBpZiAoL15vbmJsdXIkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZm9jdXNvdXQnO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAobm9uQ3VzdG9tRWxlbWVudCAmJiBDQU1FTF9QUk9QUy50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnJlcGxhY2UoL1tBLVowLTldL2csICctJCYnKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHN1cHBvcnQgZm9yIG9uSW5wdXQgYW5kIG9uQ2hhbmdlLCBzZWUgIzM1NjFcblx0XHRcdC8vIGlmIHdlIGhhdmUgYW4gb25pbnB1dCBwcm9wIGFscmVhZHkgY2hhbmdlIGl0IHRvIG9uaW5wdXRDYXB0dXJlXG5cdFx0XHRpZiAoL15vbmlucHV0JC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSkge1xuXHRcdFx0XHRcdGkgPSAnb25pbnB1dENhcHR1cmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdC8vIEFkZCBzdXBwb3J0IGZvciBhcnJheSBzZWxlY3QgdmFsdWVzOiA8c2VsZWN0IG11bHRpcGxlIHZhbHVlPXtbXX0gLz5cblx0XHRpZiAoXG5cdFx0XHR0eXBlID09ICdzZWxlY3QnICYmXG5cdFx0XHRub3JtYWxpemVkUHJvcHMubXVsdGlwbGUgJiZcblx0XHRcdEFycmF5LmlzQXJyYXkobm9ybWFsaXplZFByb3BzLnZhbHVlKVxuXHRcdCkge1xuXHRcdFx0Ly8gZm9yRWFjaCgpIGFsd2F5cyByZXR1cm5zIHVuZGVmaW5lZCwgd2hpY2ggd2UgYWJ1c2UgaGVyZSB0byB1bnNldCB0aGUgdmFsdWUgcHJvcC5cblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgIT0gLTE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBBZGRpbmcgc3VwcG9ydCBmb3IgZGVmYXVsdFZhbHVlIGluIHNlbGVjdCB0YWdcblx0XHRpZiAodHlwZSA9PSAnc2VsZWN0JyAmJiBub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcHMubXVsdGlwbGUpIHtcblx0XHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpICE9IC0xO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUgPT0gY2hpbGQucHJvcHMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZub2RlLnByb3BzID0gbm9ybWFsaXplZFByb3BzO1xuXG5cdFx0aWYgKHByb3BzLmNsYXNzICE9IHByb3BzLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2xhc3NOYW1lRGVzY3JpcHRvci5lbnVtZXJhYmxlID0gJ2NsYXNzTmFtZScgaW4gcHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuY2xhc3NOYW1lICE9IG51bGwpIG5vcm1hbGl6ZWRQcm9wcy5jbGFzcyA9IHByb3BzLmNsYXNzTmFtZTtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub3JtYWxpemVkUHJvcHMsICdjbGFzc05hbWUnLCBjbGFzc05hbWVEZXNjcmlwdG9yKTtcblx0XHR9XG5cdH1cblxuXHR2bm9kZS4kJHR5cGVvZiA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcblxuXHRpZiAob2xkVk5vZGVIb29rKSBvbGRWTm9kZUhvb2sodm5vZGUpO1xufTtcblxuLy8gT25seSBuZWVkZWQgZm9yIHJlYWN0LXJlbGF5XG5sZXQgY3VycmVudENvbXBvbmVudDtcbmNvbnN0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbm9wdGlvbnMuX3JlbmRlciA9IGZ1bmN0aW9uKHZub2RlKSB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIHtcblx0XHRvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXHR9XG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xufTtcblxuLy8gVGhpcyBpcyBhIHZlcnkgdmVyeSBwcml2YXRlIGludGVybmFsIGZ1bmN0aW9uIGZvciBSZWFjdCBpdFxuLy8gaXMgdXNlZCB0byBzb3J0LW9mIGRvIHJ1bnRpbWUgZGVwZW5kZW5jeSBpbmplY3Rpb24uIFNvIGZhclxuLy8gb25seSBgcmVhY3QtcmVsYXlgIG1ha2VzIHVzZSBvZiBpdC4gSXQgdXNlcyBpdCB0byByZWFkIHRoZVxuLy8gY29udGV4dCB2YWx1ZS5cbmV4cG9ydCBjb25zdCBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IHtcblx0UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjoge1xuXHRcdGN1cnJlbnQ6IHtcblx0XHRcdHJlYWRDb250ZXh0KGNvbnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIGN1cnJlbnRDb21wb25lbnQuX2dsb2JhbENvbnRleHRbY29udGV4dC5faWRdLnByb3BzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcbiIsImltcG9ydCBub29wIGZyb20gXCJsb2Rhc2gtZXMvbm9vcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5cbnR5cGUgUmFmQ2FsbGJhY2tUeXBlID0gKG1zU2luY2VMYXN0OiBudW1iZXIsIHRhZz86IGFueSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIENvbnRleHRUeXBlIHtcbiAgICBhZGRDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUsIHRhZz86IGFueSkgPT4gdm9pZDtcbiAgICByZW1vdmVDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IENvbnRleHRUeXBlPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVCYXRjaGVkQW5pbWF0aW9uRnJhbWVzKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcImFkZENhbGxiYWNrXCJdPigoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcInJlbW92ZUNhbGxiYWNrXCJdPigoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuXG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWY8Q29udGV4dFR5cGU+KG51bGwhKTtcbiAgICBpZiAoY29udGV4dEluZm8uY3VycmVudCA9PSBudWxsKVxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcbiAgICBjb25zdCBhbGxDYWxsYmFja3MgPSB1c2VSZWY8TWFwPFJhZkNhbGxiYWNrVHlwZSwgYW55Pj4obnVsbCEpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAtMTtcblxuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdDogbnVtYmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0SW5mby5jdXJyZW50fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXI+KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyB7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgd2l0aCBlZmZlY3RpdmVseSB0aGUgc2FtZSBydWxlcyBhcyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuICAgICAqIFxuICAgICAqIERvZXNuJ3QgbmVlZCB0byBiZSBzdGFibGUuXG4gICAgICovXG4gICAgY2FsbGJhY2s6IG51bGwgfCAoKG1zU2luY2VMYXN0OiBudW1iZXIpID0+IHZvaWQpO1xufVxuXG4vKipcbiAqIFRoZSAob3B0aW9uYWxseSBub24tc3RhYmxlKSBgY2FsbGJhY2tgIHlvdSBwcm92aWRlIHdpbGwgc3RhcnQgcnVubmluZyBldmVyeSBmcmFtZSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAqIFxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKiBcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH06IFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyk6IHZvaWQge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcblxuICAgIGNvbnN0IHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IHVzZUNvbnRleHQoU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtczogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LCBoYXNDYWxsYmFja10pXG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBoLCBSZW5kZXJhYmxlUHJvcHMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBTd2FwcGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiBib29sZWFuIH0+KHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IGZhbHNlIH0pO1xuXG5cbi8qXG5jb25zdCBDc3NDbGFzc2VzID0ge1xuICAgIGJhc2U6IFwicHRsXCIsXG4gICAgZW50ZXI6IFwiblwiLFxuICAgIGV4aXQ6IFwieFwiLFxuICAgIGluaXQ6IFwiaVwiLFxuICAgIHRyYW5zaXRpb246IFwidFwiLFxuICAgIGZpbmFsaXplOiBcImZcIlxufSovXG5cbmludGVyZmFjZSBDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIGVudGVyOiBzdHJpbmc7XG4gICAgZXhpdDogc3RyaW5nO1xuICAgIG1lYXN1cmU6IHN0cmluZztcbiAgICBpbml0OiBzdHJpbmc7XG4gICAgdHJhbnNpdGlvbjogc3RyaW5nO1xuICAgIGZpbmFsaXplOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDc3NDbGFzc0NvbnRleHRUeXBlIHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IHN0cmluZztcbiAgICBHZXRFbnRlckNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0SW5pdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBDc3NDbGFzc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENzc0NsYXNzQ29udGV4dFR5cGU+KHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IFwicHRsXCIsXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gXCJuXCIsXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBcInhcIixcbiAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IFwibVwiLFxuICAgIEdldEluaXRDbGFzczogKCkgPT4gXCJpXCIsXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBcInRcIixcbiAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBcImZcIixcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBDc3NDbGFzc2VzUHJvdmlkZXIoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUsIGNoaWxkcmVuLCAuLi5yZXN0IH06IFJlbmRlcmFibGVQcm9wczxQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPj4pIHtcbiAgICBjb25zdCBjb250ZXh0T2JqZWN0ID0gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUgfSk7XG4gICAgcmV0dXJuICg8Q3NzQ2xhc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0T2JqZWN0fSAgey4uLnJlc3R9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDc3NDbGFzc2VzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxuICAgICAgICBHZXRFbnRlckNsYXNzLFxuICAgICAgICBHZXRFeGl0Q2xhc3MsXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcbiAgICAgICAgR2V0SW5pdENsYXNzLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3MsXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3NcbiAgICB9ID0gdXNlQ29udGV4dChDc3NDbGFzc0NvbnRleHQpO1xuICAgIGNvbnN0IEdldERpcmVjdGlvbkNsYXNzID0gdXNlQ2FsbGJhY2soKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZyA9PiB7IHN3aXRjaCAoZGlyZWN0aW9uKSB7IGNhc2UgXCJlbnRlclwiOiByZXR1cm4gR2V0RW50ZXJDbGFzcygpOyBjYXNlIFwiZXhpdFwiOiByZXR1cm4gR2V0RXhpdENsYXNzKCk7IH0gfSwgW10pO1xuICAgIGNvbnN0IEdldFBoYXNlQ2xhc3MgPSB1c2VDYWxsYmFjaygocGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyA9PiB7IHN3aXRjaCAocGhhc2UpIHsgY2FzZSBcIm1lYXN1cmVcIjogcmV0dXJuIEdldE1lYXN1cmVDbGFzcygpOyBjYXNlIFwiaW5pdFwiOiByZXR1cm4gR2V0SW5pdENsYXNzKCk7IGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHJldHVybiBHZXRUcmFuc2l0aW9uQ2xhc3MoKTsgY2FzZSBcImZpbmFsaXplXCI6IHJldHVybiBHZXRGaW5hbGl6ZUNsYXNzKCk7IH0gfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIEdldEJhc2VDbGFzcyxcbiAgICAgICAgR2V0RW50ZXJDbGFzcyxcbiAgICAgICAgR2V0RXhpdENsYXNzLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3MsXG4gICAgICAgIEdldEluaXRDbGFzcyxcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzLFxuICAgICAgICBHZXREaXJlY3Rpb25DbGFzcyxcbiAgICAgICAgR2V0UGhhc2VDbGFzc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUobmV3VmFsdWVzOiBQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPik6IENzc0NsYXNzQ29udGV4dFR5cGUge1xuICAgIGNvbnN0IG9sZFZhbHVlcyA9IHVzZUNvbnRleHQoQ3NzQ2xhc3NDb250ZXh0KTtcbiAgICBjb25zdCBiYXNlID0gKG5ld1ZhbHVlcz8uYmFzZSA/PyBvbGRWYWx1ZXMuR2V0QmFzZUNsYXNzKCkpO1xuICAgIGNvbnN0IGVudGVyID0gKG5ld1ZhbHVlcz8uZW50ZXIgPz8gb2xkVmFsdWVzLkdldEVudGVyQ2xhc3MoKSk7XG4gICAgY29uc3QgZXhpdCA9IChuZXdWYWx1ZXM/LmV4aXQgPz8gb2xkVmFsdWVzLkdldEV4aXRDbGFzcygpKTtcbiAgICBjb25zdCBtZWFzdXJlID0gKG5ld1ZhbHVlcz8ubWVhc3VyZSA/PyBvbGRWYWx1ZXMuR2V0TWVhc3VyZUNsYXNzKCkpO1xuICAgIGNvbnN0IGluaXQgPSAobmV3VmFsdWVzPy5pbml0ID8/IG9sZFZhbHVlcy5HZXRJbml0Q2xhc3MoKSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdWYWx1ZXM/LnRyYW5zaXRpb24gPz8gb2xkVmFsdWVzLkdldFRyYW5zaXRpb25DbGFzcygpKTtcbiAgICBjb25zdCBmaW5hbGl6ZSA9IChuZXdWYWx1ZXM/LmZpbmFsaXplID8/IG9sZFZhbHVlcy5HZXRGaW5hbGl6ZUNsYXNzKCkpO1xuXG4gICAgcmV0dXJuIHVzZU1lbW88Q3NzQ2xhc3NDb250ZXh0VHlwZT4oKCkgPT4gKHtcbiAgICAgICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBiYXNlISxcbiAgICAgICAgR2V0RW50ZXJDbGFzczogKCkgPT4gZW50ZXIhLFxuICAgICAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IGV4aXQhLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IG1lYXN1cmUhLFxuICAgICAgICBHZXRJbml0Q2xhc3M6ICgpID0+IGluaXQhLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IHRyYW5zaXRpb24hLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBmaW5hbGl6ZSEsXG4gICAgfSksIFtiYXNlLCBlbnRlciwgZXhpdCwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemVdKVxufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKCk6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbiwgcGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZ1xuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbj86IFRyYW5zaXRpb25EaXJlY3Rpb24sIHBoYXNlPzogVHJhbnNpdGlvblBoYXNlKTogc3RyaW5nIHtcbiAgICBjb25zdCBwaGFzZVBhcnQgPSBgJHtwaGFzZSA9PSBudWxsID8gXCJcIiA6IGAtJHtDc3NDbGFzc2VzW3BoYXNlXX1gfWA7XG4gICAgY29uc3QgZGlyZWN0aW9uUGFydCA9IGAke2RpcmVjdGlvbiA9PSBudWxsID8gXCJcIiA6IGAtJHtDc3NDbGFzc2VzW2RpcmVjdGlvbl19JHtwaGFzZVBhcnR9YH1gO1xuICAgIHJldHVybiBgJHtDc3NDbGFzc2VzLmJhc2V9JHtkaXJlY3Rpb25QYXJ0fWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENzc0NsYXNzKHdoaWNoOiBrZXlvZiB0eXBlb2YgQ3NzQ2xhc3NlcywgdmFsdWU6IHN0cmluZykge1xuICAgIENzc0NsYXNzZXNbd2hpY2hdID0gdmFsdWU7XG59XG4qL1xuIiwiXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnQsIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcbnR5cGUgRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+ID0gT21pdDxQLCBcInJlZlwiPiAmIHsgcmVmPzogUmVmPEU+IH1cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50PFAsIEU+ID0gKHA6IEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPikgPT4gVk5vZGU8Rm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+PlxyXG5cclxudHlwZSBFbGVtZW50RnJvbVByb3BzPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+PiA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBFdmVudFRhcmdldDtcclxudHlwZSBQcm9wc0Zyb21Db21wb25lbnQ8QyBleHRlbmRzIEZ1bmN0aW9uYWxDb21wb25lbnQ8YW55Pj4gPSBDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxpbmZlciBQPiA/IFAgOiB1bmtub3duO1xyXG5cclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICogXHJcbiAqIFRPRE86IFN0aWxsIG5lZWRlZD9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZjxDIGV4dGVuZHMgPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ocDogYW55LCByZWY6IFJlZjxFPikgPT4gKFZOb2RlPGFueT4gfCBudWxsKT4oQ29tcG9uZW50OiBDKSB7XHJcbiAgICB0eXBlIFAgPSBQcm9wc0Zyb21Db21wb25lbnQ8Qz47XHJcblxyXG5cclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQgYXMgQztcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWZ1bCBpbiBwYXJ0aWN1bGFyIGZvciBTbGlkZXMgd2l0aCBhIFRhYiBQYW5lbCAtLVxyXG4gKiBpZiB3ZSBkbyBNYXRoLnNpZ24oY3VycmVudEluZGV4IC0gc2xpZGVJbmRleCksIGl0XHJcbiAqIHRyYW5zaXRpb25zIG5pY2VseSBpbiB0aGUgZXhwZWN0ZWQgZGlyZWN0aW9uLFxyXG4gKiBidXQgd2UgbmVlZCB0byBcInJlbWVtYmVyXCIgd2hpY2ggZGlyZWN0aW9uIHRvIHVzZVxyXG4gKiB3aGVuIGl0J3MgdGhlIGN1cnJlbnQgcGFuZWwgKGFuZCB0aGUgZGlmZmVyZW5jZSBpcyAwKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhc3ROb25OdWxsVmFsdWU8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGwge1xyXG4gICAgY29uc3QgbGFzdE5vbk51bGxWYWx1ZSA9IHVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgIH0sIFt2YWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSA/PyBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnRDaGlsZHJlbiwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3YXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTd2FwcGFibGVQcm9wcz4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHtcclxuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTd2FwcGFibGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBjb21wb25lbnQgaXMgaW5saW5lLWdyaWQgb3IgZ3JpZC4gXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBjaGlsZCBlbGVtZW50IGlzIGxvb2tlZCBhdC4gSWYgaXQncyBhIHNwYW4gb3Igb3RoZXIgaW5saW5lIGVsZW1lbnQsIGlubGluZSBpcyBhc3N1bWVkLiBcclxuICAgICAqIChBIHNpbXBseS1mb29sZWQgaGV1cmlzdGljLS1wcm92aWRlIHRoaXMgcHJvcCBpZiBuZWNlc3NhcnkpXHJcbiAgICAgKi9cclxuICAgIGlubGluZTogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyB0byBgdXNlVHJhbnNpdGlvbmAncyBgYW5pbWF0ZU9uTW91bnRgLiBJZiBudWxsLCB0aGUgZGVmYXVsdCB2YWx1ZSBwcm92aWRlZCB3aWxsIGJlIGBmYWxzZWAgaW5pdGlhbGx5LCB0aGVuIGB0cnVlYCBhZnRlciB0aGUgYFN3YXBwYWJsZWAgaXRzZWxmIGhhcyBtb3VudGVkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbkFuaW1hdGVPbk1vdW50PzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHM8UCBleHRlbmRzIHt9Pih7IGlubGluZSB9OiBDcmVhdGVTd2FwcGFibGVQcm9wcywgb3RoZXJQcm9wczogUCkge1xyXG4gICAgdHlwZSBFID0gUCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGluZmVyIEU+ID8gRSA6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wczxFPih7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke0dldEJhc2VDbGFzcygpfS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtHZXRCYXNlQ2xhc3MoKX0tc3dhcC1jb250YWluZXItaW5saW5lYClcclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXHJcbiAqIFxyXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXHJcbiAqIFxyXG4gKiBJZiB5b3UgcGFzcyBhIHJlZ3VsYXIgZWxlbWVudCAobGlrZSBhIGRpdikgb3Igb3RoZXIgc2luZ2xlIGNvbXBvbmVudCwgdGhlbiB0aGVlIHByb3BzIGFuZCByZWYgd2lsbCBiZSBmb3J3YXJkZWQgb250byB0aGF0IGVsZW1lbnQuIE90aGVyd2lzZSwgYWxsIHRoZSBjaGlsZHJlbiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBkaXYgb3Igc3BhbiBkZXBlbmRpbmcgb24gdGhlIGBpbmxpbmVgIHByb3AuXHJcbiAqIEBwYXJhbSBwYXJhbTAgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjaGlsZHJlbjogYywgaW5saW5lLCBjaGlsZHJlbkFuaW1hdGVPbk1vdW50LCAuLi5wIH06IFN3YXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGMgYXMgVk5vZGU7XHJcbiAgICBpZiAoIShjaGlsZHJlbiBhcyBWTm9kZSkudHlwZSlcclxuICAgICAgICBjaGlsZHJlbiA9ICghaW5saW5lPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPilcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHM8RT4odHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoY2hpbGRyZW5BbmltYXRlT25Nb3VudD8/IGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYW5pbWF0ZU9uTW91bnQuY3VycmVudCA9IHRydWU7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiB7IHJldHVybiBhbmltYXRlT25Nb3VudC5jdXJyZW50OyB9IH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PlxyXG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4gYXMgdHlwZW9mIHRyYW5zaXRpb25Qcm9wcyl9XHJcbiAgICAgICAgPC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSkpXHJcblxyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4iLCJpbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGgsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJldHVybkZhbHNlLCBydW5JbW1lZGlhdGVseSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSwgVHJhbnNpdGlvblN0YXRlLCBVc2VUcmFuc2l0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcblxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0RHVyYXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50PihlbGVtZW50OiBFIHwgbnVsbCkge1xuICAgIHJldHVybiBNYXRoLm1heCguLi4od2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCB8fCBkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKGB0cmFuc2l0aW9uLWR1cmF0aW9uYCkpLnNwbGl0KFwiLFwiKS5tYXAoc3RyID0+IHtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcIm1zXCIpKVxuICAgICAgICAgICAgcmV0dXJuICtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAyKTtcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcInNcIikpXG4gICAgICAgICAgICByZXR1cm4gKCtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSkgKiAxMDAwO1xuICAgICAgICByZXR1cm4gMTAwMDtcbiAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlOiBUcmFuc2l0aW9uU3RhdGUpIHtcbiAgICByZXR1cm4gbmV4dFN0YXRlLnNwbGl0KFwiLVwiKSBhcyBbVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlXTtcbn1cblxuLyoqXG4gKiBQcm92aWRlIHByb3BzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYW5pbWF0ZSBhIHRyYW5zaXRpb24uXG4gKiBcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHByb3BzSW5jb21pbmc6IHsgY2hpbGRyZW4sIC4uLnAgfSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG1lYXN1cmUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgb25WaXNpYmlsaXR5Q2hhbmdlIH0gfTogVXNlVHJhbnNpdGlvblBhcmFtZXRlcnM8RT4pOiBWTm9kZTxoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4gfCBudWxsIHtcbiAgICAvL2NvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBnZXRBbmltYXRlT25Nb3VudCB9ID0gdXNlQ29udGV4dChTd2FwcGFibGVDb250ZXh0KTtcbiAgICBleGl0VmlzaWJpbGl0eSB8fD0gXCJoaWRkZW5cIlxuICAgIGFuaW1hdGVPbk1vdW50ID8/PSBnZXRBbmltYXRlT25Nb3VudCgpO1xuICAgIG1lYXN1cmUgPz89IGZhbHNlO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZXhpdFZpc2liaWxpdHkpO1xuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzLCBHZXRFbnRlckNsYXNzLCBHZXRFeGl0Q2xhc3MsIEdldE1lYXN1cmVDbGFzcywgR2V0SW5pdENsYXNzLCBHZXRUcmFuc2l0aW9uQ2xhc3MsIEdldEZpbmFsaXplQ2xhc3MsIEdldERpcmVjdGlvbkNsYXNzLCBHZXRQaGFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XG5cbiAgICBjb25zdCB7IHJlZkVsZW1lbnRSZXR1cm46IHsgZ2V0RWxlbWVudCwgcHJvcHNTdGFibGUgfSB9ID0gdXNlUmVmRWxlbWVudDxFPih7fSlcbiAgICBjb25zdCBjc3NQcm9wZXJ0aWVzID0gdXNlUmVmPGguSlNYLkNTU1Byb3BlcnRpZXM+KHt9KTtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gdXNlUmVmKG5ldyBTZXQ8c3RyaW5nPihbXG4gICAgICAgIC8vIFRoaXMgaXMgcmVtb3ZlZCBkdXJpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBmaXJzdCByZW5kZXJcbiAgICAgICAgLy8gKGF0IGxlYXN0IG9uY2UgYHNob3dgIGlzIG5vbi1udWxsKVxuICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tcGVuZGluZ2AsXG4gICAgXSkpO1xuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aW9uLCBwaGFzZV0gPSBwYXJzZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pXG4gICAgY29uc3Qgb3RoZXJQcm9wcyA9IHVzZVJlZjxoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4oe1xuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gZ2V0RWxlbWVudCgpICYmIGUuZWxhcHNlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBoYXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQncyBDU1MgY2xhc3MgdG8gbWF0Y2ggdGhlIGdpdmVuIGRpcmVjdGlvbiBhbmQgcGhhc2UuXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlQ2xhc3NlcyA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFIHwgbnVsbCwgZGlyZWN0aW9uOiBUcmFuc2l0aW9uRGlyZWN0aW9uLCBwaGFzZT86IFRyYW5zaXRpb25QaGFzZSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG5cbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuXG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb1JlbW92ZSA9IFtcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRJbml0Q2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0VHJhbnNpdGlvbkNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LSR7R2V0TWVhc3VyZUNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LSR7R2V0SW5pdENsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LSR7R2V0VHJhbnNpdGlvbkNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LSR7R2V0RmluYWxpemVDbGFzcygpfWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcImluZXJ0XCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ldi0ke1wicmVtb3ZlZFwifWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcImhpZGRlblwifWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcInZpc2libGVcIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXREaXJlY3Rpb25DbGFzcyhkaXJlY3Rpb24pfWAsXG4gICAgICAgICAgICBwaGFzZSA/IGAke0dldEJhc2VDbGFzcygpfS0ke0dldERpcmVjdGlvbkNsYXNzKGRpcmVjdGlvbil9LSR7R2V0UGhhc2VDbGFzcyhwaGFzZSl9YCA6IFwiXCIsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtleGl0VmlzaWJpbGl0eX1gXG4gICAgICAgIF07XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcblxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uYWxsQ2xhc3Nlc1RvQWRkKTtcbiAgICAgICAgYWxsQ2xhc3Nlc1RvQWRkLm1hcCh2ID0+IGNsYXNzTmFtZXMuY3VycmVudC5hZGQodikpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSwgdmFyTmFtZTogKGtleW9mIGguSlNYLkNTU1Byb3BlcnRpZXMpICYgc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFt2YXJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSh2YXJOYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBcIm1lYXN1cmVcIiB2YXJpdXBkYXRlQ2xhc3Nlc2FibGVzIHRvIHRoZSBlbGVtZW50IGlmIHJlcXVlc3RlZC5cbiAgICAgKi9cbiAgICBjb25zdCBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSB8IG51bGwsIG1lYXN1cmU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaXplOiBET01SZWN0UmVhZE9ubHkgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke0dldEJhc2VDbGFzcygpfS1tZWFzdXJlLXRvcGAsIHNpemU/LnRvcCk7XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1sZWZ0YCwgc2l6ZT8ubGVmdCk7XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS13aWR0aGAsIHNpemU/LndpZHRoKTtcbiAgICAgICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke0dldEJhc2VDbGFzcygpfS1tZWFzdXJlLWhlaWdodGAsIHNpemU/LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBXZSB1c2UgYm90aCB1c2VUaW1lb3V0IGFuZCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHRpbWluZyBjZXJ0YWluIHRoaW5ncyAtLVxuICAgIC8vIHJhZiBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIGluaXQgdG8gdHJhbnNpdGlvbiAod291bGQgdXNlIHF1ZXVlTWljcm90YXNrIGJ1dCBpdCBjYW4ndCBiZSBjYW5jZWxsZWQpXG4gICAgLy8gc2V0VGltZW91dCBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIHRyYW5zaXRpb24gdG8gZmluYWxpemUgKGFzIGEgYmFja3VwIGluIGNhc2UgdHJhbnNpdGlvbmVuZCBkb2Vzbid0IGZpcmUpXG4gICAgLy9cbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCBzdGFsZSBjYWxsYmFja3MgcnVubmluZyAoaS5lLiB3aGVuIHdlIHJhcGlkbHkgc3dpdGNoIGJldHdlZW4gdmlzaWJsZSBhbmQgbm90KVxuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFjY3VyYXRlbHkgY2FuY2VsIGFueXRoaW5nIHRoYXQgY2FuIGNoYW5nZSBvdXIgc3RhdGUgb24gYSBkZWxheS5cbiAgICAvL1xuICAgIC8vIEFsc28gb2Ygbm90ZSwgd2Ugc3RvcmUgXCIoZikgPT4gd2luZG93LmNsZWFyVGltZW91dChmKVwiIGluc3RlYWQgb2YganVzdCBcIndpbmRvdy5jbGVhclRpbWVvdXRcIiBiZWNhdXNlXG4gICAgLy8gb2YgdGhlIGltcGxpY2l0IHdpbmRvdyBvYmplY3QgLS0gcHJvYmxlbXMgd2l0aCBhIG1pc3NpbmcgYHRoaXNgIG9iamVjdCBhbmQgYWxsIHRoYXQgbm9uc2Vuc2UuXG4gICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHVzZVJlZjxudW1iZXI+KC0xKTtcbiAgICBjb25zdCB0aW1lb3V0Q2xlYXJGdW5jdGlvbiA9IHVzZVJlZjwodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lKSB8ICh0eXBlb2YgY2xlYXJUaW1lb3V0KSB8IG51bGw+KG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogQW55IHRpbWUgdGhlIHN0YXRlIGNoYW5nZXMsIHRoZXJlJ3Mgc29tZSBsb2dpYyB3ZSBuZWVkIHRvIHJ1bjpcbiAgICAgKiBcbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGFuIGBpbml0YCBwaGFzZSwgdXBkYXRlIHRoZSBjbGFzc2VzLCB0aGVuIHdhaXQgYSBtb21lbnQgYW5kIHRoZW4gY2hhbmdlIHRvIHRoZSBgdHJhbnNpdGlvbmAgcGhhc2UuXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhIGB0cmFuc2l0aW9uYCBwaGFzZSwgdXBkYXRlIHRoZSBjbGFzc2VzLCB0aGVuIHdhaXQgdW50aWwgdGhlIHRyYW5zaXRpb24gY29tcGxldGVzLCB0aGVuIGNoYW5nZSB0byB0aGUgYGZpbmFsaXplYCBwaGFzZS5cbiAgICAgKiBcbiAgICAgKiBBbnkgY2hhbmdlIGluIHN0YXRlIG9yIGNsYXNzZXMvc3R5bGVzIGRvZXMgbm90IGltcGxpY2l0bHkgY2F1c2UgYSByZS1yZW5kZXIuXG4gICAgICovXG4gICAgY29uc3Qgb25TdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrPE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFRyYW5zaXRpb25TdGF0ZSB8IG51bGwsIHVuZGVmaW5lZD4+KChuZXh0U3RhdGUsIHByZXZTdGF0ZSwgcmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCBbbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlXSA9IHBhcnNlU3RhdGUobmV4dFN0YXRlKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgbm8gc3RhbGUgY2hhbmdlIGNvZGUgZXZlciBydW5zXG4gICAgICAgIGlmICh0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPj0gMCAmJiB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50KVxuICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCh0aW1lb3V0SGFuZGxlLmN1cnJlbnQpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBpbmVydCBwcm9wcy9wcm9wZXJ0eVxuICAgICAgICBjb25zdCBleGl0VmlzaWJpbGl0eSA9IGdldEV4aXRWaXNpYmlsaXR5KCk7XG4gICAgICAgIGlmIChleGl0VmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgY29uc3QgaW5lcnQgPSAoZXhpdFZpc2liaWxpdHkgPT0gXCJpbmVydFwiICYmIChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSA9PSBcImZpbmFsaXplXCIpID8gdHJ1ZSA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICBpZiAoaW5lcnQpXG4gICAgICAgICAgICAgICAgKG90aGVyUHJvcHMuY3VycmVudCBhcyBhbnkpLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXJQcm9wcy5jdXJyZW50W1wiaW5lcnRcIiBhcyBuZXZlcl07XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5lcnQgPSAoaW5lcnQgfHwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlPy4obmV4dERpcmVjdGlvbiA9PSBcImVudGVyXCIgfHwgKG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgJiYgbmV4dFBoYXNlICE9IFwiZmluYWxpemVcIikpO1xuXG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgKG5leHRQaGFzZSA9PSBcImluaXRcIiB8fCBuZXh0UGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpKVxuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG5cblxuXG4gICAgICAgIHN3aXRjaCAobmV4dFBoYXNlKSB7XG4gICAgICAgICAgICBjYXNlIFwibWVhc3VyZVwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyhlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvL3NldFN0YXRlKGAke25leHREaXJlY3Rpb259LWluaXRgKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIFwiaW5pdFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyAhIUludGVudGlvbmFsIGZhbGwtdGhyb3VnaCEhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgc2V0U3RhdGUoYCR7bmV4dERpcmVjdGlvbn0tdHJhbnNpdGlvbmApOyB9KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGY6IG51bWJlcikgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoZilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGY6IG51bWJlcikgPT4gY2xlYXJUaW1lb3V0KGYpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiZmluYWxpemVcIjoge1xuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8gb3Igc2NoZWR1bGUgb3IgYW55dGhpbmcgLS0gd2UganVzdCB1cGRhdGUgb3VyIGNsYXNzZXMgYW5kIHdlJ3JlIGRvbmUuXG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IG51bGw7ICAgIC8vIERvZXMgdGhpcyBtYWtlIGl0IG1vcmUgb3IgbGVzcyBjbGVhcj9cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIHN0YXRlIHVzZWQgaW4gdHJhbnNpdGlvbjogJHtuZXh0U3RhdGV9LiBQcmV2aW91cyBzdGF0ZSB3YXMgJHtwcmV2U3RhdGUgPz8gXCJudWxsXCJ9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBcbiAgICBjb25zdCBbZ2V0U3RhdGUsIHNldFN0YXRlXSA9IHVzZVBhc3NpdmVTdGF0ZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+KG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcblxuXG4gICAgLy8gV2hlbiB3ZSBtb3VudCwgYW5kIGV2ZXJ5IHRpbWUgdGhlcmVhZnRlciB0aGF0IGBzaG93YCBjaGFuZ2VzLFxuICAgIC8vIGNoYW5nZSBvdXIgY3VycmVudCBzdGF0ZSBhY2NvcmRpbmcgdG8gdGhhdCBgc2hvd2AgdmFsdWUuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcblxuICAgICAgICAvLyBJZiBgc2hvd2AgaXMgbnVsbCwgdGhlbiB3ZSBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICAgIGlmIChzaG93ID09IG51bGwpIFxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIChJZiBgc2hvd2AgaXMgdHJ1ZS9mYWxzZSwgd2UnbGwgcmVtb3ZlIHRoZSBDU1MgY2xhc3NlcyBkdXJpbmcgYG9uQ2hhbmdlYClcblxuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBsZXQgbmV4dFBoYXNlOiBUcmFuc2l0aW9uUGhhc2UgPSBtZWFzdXJlID8gXCJtZWFzdXJlXCIgOiBcImluaXRcIjtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcbiAgICAgICAgICAgICAgICBuZXh0UGhhc2UgPSBcInRyYW5zaXRpb25cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vdGU6IHRoZSBzZXRTdGF0ZSBjaGFuZ2UgaGFuZGxlciBydW5zIGltbWVkaWF0ZWx5IHdpdGggbm8gZGVib3VuY2UuXG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGFuaW1hdGVPbk1vdW50KVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBlbnRlci0ke25leHRQaGFzZX1gKTtcblxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZW50ZXItZmluYWxpemVcIik7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoYXNNb3VudGVkLmN1cnJlbnQgfHwgYW5pbWF0ZU9uTW91bnQpXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYGV4aXQtJHtuZXh0UGhhc2V9YCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJleGl0LWZpbmFsaXplXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBbbWVhc3VyZSwgc2hvd10pO1xuXG5cbiAgICBpZiAoZHVyYXRpb24gIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LWR1cmF0aW9uYF0gPSBkdXJhdGlvbiArIFwibXNcIjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZHVyYXRpb25gXTtcblxuICAgIGVhc2luZ0luID8/PSBlYXNpbmc7XG4gICAgZWFzaW5nT3V0ID8/PSBlYXNpbmc7XG5cbiAgICBpZiAoZWFzaW5nT3V0ICE9IG51bGwpXG4gICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXSA9IGVhc2luZ091dDtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF07XG5cblxuICAgIGlmIChlYXNpbmdJbiAhPSBudWxsKVxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdID0gZWFzaW5nSW47XG4gICAgZWxzZVxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXTtcblxuXG5cbiAgICAvLyBUT0RPXG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbnVsbDtcbiAgICBjb25zdCBibG9ja0RpcmVjdGlvbiA9IG51bGw7XG5cblxuXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgZGVsYXlNb3VudFVudGlsU2hvd24gaXMsXG4gICAgLy8gb25jZSB3ZSd2ZSByZW5kZXJlZCBvdXIgY2hpbGRyZW4gb25jZSwgXG4gICAgLy8gZW5zdXJlIHRoYXQgd2UgZG9uJ3QgdW5tb3VudCB0aGVtIGFnYWluIGFuZCB3YXN0ZSBhbGwgdGhhdCB3b3JrLlxuICAgIC8vIChJZiB5b3UgcmVhbGx5IG5lZWQgdGhpcyB5b3UgY2FuIGp1c3QgdW5tb3VudCB0aGUgZW50aXJlIHRyYW5zaXRpb24gaXRzZWxmKVxuICAgIGNvbnN0IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuID0gKHNob3cgfHwgIWRlbGF5TW91bnRVbnRpbFNob3duKTtcbiAgICBjb25zdCBoYXNSZW5kZXJlZENoaWxkcmVuID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuIHx8IGhhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW4pXG4gICAgICAgICAgICBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgfHw9IHRydWU7XG4gICAgfSwgW2hhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudCA/IGZhbHNlIDogZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW5dKTtcblxuXG4gICAgY29uc3QgY2hpbGRyZW5Jc1Zub2RlID0gKGNoaWxkcmVuICYmIChjaGlsZHJlbiBhcyBWTm9kZSkudHlwZSAmJiAoY2hpbGRyZW4gYXMgVk5vZGUpLnByb3BzKTtcbiAgICBjb25zdCBmaW5hbFByb3BzID0gdXNlTWVyZ2VkUHJvcHM8RT4ocCwgcHJvcHNTdGFibGUsIG90aGVyUHJvcHMuY3VycmVudCwge1xuICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICAgIC4uLmNsYXNzTmFtZXMuY3VycmVudCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtleGl0VmlzaWJpbGl0eX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YFxuICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICBzdHlsZTogY3NzUHJvcGVydGllcy5jdXJyZW50XG4gICAgfSwgY2hpbGRyZW5Jc1Zub2RlID8geyByZWY6IChjaGlsZHJlbiBhcyBWTm9kZSkucmVmLCAuLi4oY2hpbGRyZW4gYXMgVk5vZGUpLnByb3BzIH0gOiB7fSk7XG5cblxuXG4gICAgY29uc3QgY29udGV4dCA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiByZXR1cm5GYWxzZSB9KS5jdXJyZW50O1xuXG4gICAgbGV0IG1vZGlmaWVkQ2hpbGRyZW46IFZOb2RlO1xuXG4gICAgaWYgKGNoaWxkcmVuSXNWbm9kZSkge1xuICAgICAgICBtb2RpZmllZENoaWxkcmVuID0gPFN3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PntjbG9uZUVsZW1lbnQoY2hpbGRyZW4gYXMgVk5vZGUsIGZpbmFsUHJvcHMpfTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1vZGlmaWVkQ2hpbGRyZW4gPSA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+PHNwYW4gey4uLmZpbmFsUHJvcHMgYXMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8YW55Pn0+e2NoaWxkcmVufTwvc3Bhbj48L1N3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgfVxuXG5cblxuICAgIHJldHVybiByZW5kZXJDaGlsZHJlbiA/IG1vZGlmaWVkQ2hpbGRyZW4gOiBudWxsO1xufVxuXG5cblxuZnVuY3Rpb24gZm9yY2VSZWZsb3c8RSBleHRlbmRzIEhUTUxFbGVtZW50PihlOiBFKSB7XG5cbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxuICAgIGNvbnN0IHAgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teTtcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teSA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLnN0eWxlLm9wYWNpdHk7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLnN0eWxlLnRyYW5zZm9ybTtcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teSA9IHA7XG4gICAgcmV0dXJuIGU7XG59XG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBtaW5pbXVtIG9yIG1heGltdW0gb3BhY2l0eSB2YWx1ZXMgdG8gdXNlIGZvciB0aGUgZmFkZSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIGZhZGVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gZmFkZWQgb3V0LlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBmYWRlTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3BhY2l0eSB0byB1c2Ugd2hlbiBmYWRlZCBpbi5cclxuICAgICAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmFkZU1heDogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGYWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNGYWRlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNaW4sIGZhZGVNYXggfSB9OiBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tZmFkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmFkZS1tYXhgXTogKGZhZGVNYXggPz8gMSksXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXHJcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cclxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcclxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPih7IHJlZiwgLi4ucmVzdCB9LCB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBjbGlwUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ2xpcDxFIGV4dGVuZHMgRWxlbWVudD4oeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9IH06IFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcGApLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcclxuICAgICAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlwID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NsaXAoeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jayB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KSlcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNDbGlwLCBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVycyB9IGZyb20gXCIuL2NsaXBcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsaXBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZGVsYXlNb3VudFVudGlsU2hvd24sIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ2xpcEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDbGlwKHsgY2xpcFBhcmFtZXRlcnM6IHsgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2sgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29sbGFwc2UgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG5cclxuICAgIGNvbGxhcHNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVGhlIHNtYWxsZXN0IHNpemUgdGhlIGNvbXBvbmVudCBjb2xsYXBzZXMgdG8uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBtaW5CbG9ja1NpemU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqIFxyXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cclxuICogXHJcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ29sbGFwc2U8RSBleHRlbmRzIEVsZW1lbnQ+KHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH06IFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tY29sbGFwc2VgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlISBcclxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2U8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHNob3csIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgbWluQmxvY2tTaXplLCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDb2xsYXBzZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NvbGxhcHNlKHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0NvbGxhcHNlLCBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ29sbGFwc2VGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ29sbGFwc2UoeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmLCB1c2VMYXN0Tm9uTnVsbFZhbHVlIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XG5cbi8qKlxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIGZsaXAgZWZmZWN0LiBcbiAqIFZhbHVlcyBhcmUgcmVsYXRpdmUsIHdpdGggMSBvciAtMSBiZWluZyB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGluIHRoYXQgZGlyZWN0aW9uLlxuICogYDAuNWAsIGZvciBleGFtcGxlLCB3b3VsZCBmbGlwIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNGbGlwUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XG4gICAgZmxpcFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0YXJnZXQgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIHJvdGF0ZSB0b3dhcmRzIG9uIHRoZSBpbmxpbmUgYXhpcyAoWCBheGlzIGZvciBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgYmxvY2sgYXhpcyAoWCBheGlzIGZvciBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcEFuZ2xlQmxvY2s6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoaXMgaXMgYSAzRCBlZmZlY3QsIGEgcGVyc3BlY3RpdmUgdmFsdWUgaXMgbmVlZGVkLlxuICAgICAgICAgKiBAZGVmYXVsdCA4MDBweFxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcFBlcnNwZWN0aXZlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0ZsaXA8RSBleHRlbmRzIEVsZW1lbnQ+KHsgZmxpcFBhcmFtZXRlcnM6IHsgZmxpcEFuZ2xlQmxvY2ssIGZsaXBBbmdsZUlubGluZSwgZmxpcFBlcnNwZWN0aXZlIH0gfTogVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4pIHtcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZsaXBgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyh1c2VMYXN0Tm9uTnVsbFZhbHVlKGZsaXBBbmdsZUlubGluZSkgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyh1c2VMYXN0Tm9uTnVsbFZhbHVlKGZsaXBBbmdsZUJsb2NrKSA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXBlcnNwZWN0aXZlYF06IGAkeyhmbGlwUGVyc3BlY3RpdmUgPz8gODAwKX1weGBcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsaXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGbGlwUGFyYW1ldGVyczxFPiwgXCJmbGlwUGFyYW1ldGVyc1wiPj4geyB9O1xuXG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cbiAqIFxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYGZsaXBJbmxpbmVgIGFuZCBgZmxpcEJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqIFxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXG4gKiBcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBmbGlwUGVyc3BlY3RpdmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IEZsaXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZsaXAoeyBmbGlwUGFyYW1ldGVyczogeyBmbGlwQW5nbGVCbG9jaywgZmxpcEFuZ2xlSW5saW5lLCBmbGlwUGVyc3BlY3RpdmUgfSB9KSxcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfSk7XG59KSk7XG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYsIHVzZUxhc3ROb25OdWxsVmFsdWUgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gYW5kIGV4dGVudCBvZiB0aGUgc2xpZGUgZWZmZWN0LiBcclxuICogVmFsdWVzIGFyZSByZWxhdGl2ZSwgd2l0aCAxIG9yIC0xIGJlaW5nIHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQgaW4gdGhhdCBkaXJlY3Rpb24uXHJcbiAqIGAwLjVgLCBmb3IgZXhhbXBsZSwgd291bGQgc2xpZGUgdG8gdGhlIHJpZ2h0IGJ5IDUwJSBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgc2xpZGVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBzbGlkZSB0by9mcm9tIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogV2hlbiAwLCB0aGUgbGFzdCBub24temVybyB2YWx1ZSB3aWxsIGJlIHVzZWQuIFBhc3MgbnVsbC91bmRlZmluZWQgdG8gYWN0dWFsbHkgdXNlIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jazogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzU2xpZGU8RSBleHRlbmRzIEVsZW1lbnQ+KHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0gfTogVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBzbGlkZVRhcmdldElubGluZSA9IHVzZUxhc3ROb25OdWxsVmFsdWUoc2xpZGVUYXJnZXRJbmxpbmUpO1xyXG4gICAgc2xpZGVUYXJnZXRCbG9jayA9IHVzZUxhc3ROb25OdWxsVmFsdWUoc2xpZGVUYXJnZXRCbG9jayk7XHJcblxyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGVgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGUtdGFyZ2V0LWJsb2NrYF06IGAkeyhzbGlkZVRhcmdldEJsb2NrID8/IDApfWBcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cclxuICogXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKiBcclxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcclxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmAgXHJcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKSBcclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNsaWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi5yZXN0IH06IFNsaWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVGYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBvcmlnaW4sIG1pbmltdW0gc2l6ZSwgYW5kIGRpcmVjdGlvbiBvZiB0aGUgem9vbSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIHpvb21QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWCBjb21wb25lbnQpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvIChZIGNvbXBvbmVudClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzWm9vbTxFIGV4dGVuZHMgRWxlbWVudD4oeyB6b29tUGFyYW1ldGVyczogeyB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9IH06IFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tem9vbWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tb3JpZ2luLWJsb2NrYF06IGAkeyh6b29tT3JpZ2luQmxvY2sgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb20gPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb208RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFpvb21Qcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb208RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZVpvb21Qcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBmYWRlTWF4LCBmYWRlTWluLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlWm9vbUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFpvb21GYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxufSkpO1xyXG4iLG51bGxdLCJuYW1lcyI6WyJzbGljZSIsIm9wdGlvbnMiLCJ2bm9kZUlkIiwicmVyZW5kZXJRdWV1ZSIsInByZXZEZWJvdW5jZSIsImkiLCJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsInJlbW92ZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjaGlsZHJlbiIsImtleSIsInJlZiIsIm5vcm1hbGl6ZWRQcm9wcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJjcmVhdGVWTm9kZSIsIm9yaWdpbmFsIiwidm5vZGUiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192IiwiRnJhZ21lbnQiLCJDb21wb25lbnQiLCJjb250ZXh0IiwidGhpcyIsImdldERvbVNpYmxpbmciLCJjaGlsZEluZGV4IiwiaW5kZXhPZiIsInNpYmxpbmciLCJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsImNoaWxkIiwiYmFzZSIsImVucXVldWVSZW5kZXIiLCJjIiwicHVzaCIsInByb2Nlc3MiLCJkZWJvdW5jZVJlbmRlcmluZyIsInNldFRpbWVvdXQiLCJxdWV1ZSIsIl9fciIsInNvcnQiLCJhIiwiYiIsInNvbWUiLCJjb21wb25lbnQiLCJjb21taXRRdWV1ZSIsIm9sZFZOb2RlIiwib2xkRG9tIiwicGFyZW50RG9tIiwiX19QIiwiZGlmZiIsIm93bmVyU1ZHRWxlbWVudCIsImNvbW1pdFJvb3QiLCJkaWZmQ2hpbGRyZW4iLCJyZW5kZXJSZXN1bHQiLCJuZXdQYXJlbnRWTm9kZSIsIm9sZFBhcmVudFZOb2RlIiwiZ2xvYmFsQ29udGV4dCIsImlzU3ZnIiwiZXhjZXNzRG9tQ2hpbGRyZW4iLCJpc0h5ZHJhdGluZyIsImoiLCJjaGlsZFZOb2RlIiwibmV3RG9tIiwiZmlyc3RDaGlsZERvbSIsInJlZnMiLCJvbGRDaGlsZHJlbiIsIm9sZENoaWxkcmVuTGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwicmVvcmRlckNoaWxkcmVuIiwicGxhY2VDaGlsZCIsInVubW91bnQiLCJhcHBseVJlZiIsInRtcCIsInRvQ2hpbGRBcnJheSIsIm91dCIsIm5leHREb20iLCJzaWJEb20iLCJvdXRlciIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJkaWZmUHJvcHMiLCJkb20iLCJuZXdQcm9wcyIsIm9sZFByb3BzIiwiaHlkcmF0ZSIsInNldFByb3BlcnR5Iiwic2V0U3R5bGUiLCJzdHlsZSIsInZhbHVlIiwidGVzdCIsIm5hbWUiLCJvbGRWYWx1ZSIsInVzZUNhcHR1cmUiLCJvIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRQcm94eUNhcHR1cmUiLCJldmVudFByb3h5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIm5ld1ZOb2RlIiwiaXNOZXciLCJvbGRTdGF0ZSIsInNuYXBzaG90IiwiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwicHJvdmlkZXIiLCJjb21wb25lbnRDb250ZXh0IiwicmVuZGVySG9vayIsImNvdW50IiwibmV3VHlwZSIsImNvbnRleHRUeXBlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiZG9SZW5kZXIiLCJzdWIiLCJzdGF0ZSIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJkaWZmRWxlbWVudE5vZGVzIiwiZGlmZmVkIiwicm9vdCIsImNiIiwib2xkSHRtbCIsIm5ld0h0bWwiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJpcyIsImRhdGEiLCJjaGlsZE5vZGVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJhdHRyaWJ1dGVzIiwiX19odG1sIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJwYXJlbnRWTm9kZSIsInNraXBSZW1vdmUiLCJyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZXBsYWNlTm9kZSIsImZpcnN0Q2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdFZhbHVlIiwiY29udGV4dElkIiwiQ29uc3VtZXIiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInN1YnMiLCJjdHgiLCJfcHJvcHMiLCJvbGQiLCJzcGxpY2UiLCJlcnJvciIsImVycm9ySW5mbyIsImN0b3IiLCJoYW5kbGVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsInVwZGF0ZSIsImNhbGxiYWNrIiwicyIsImZvcmNlVXBkYXRlIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZpb3VzQ29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJFTVBUWSIsIm9sZEJlZm9yZURpZmYiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJob29rcyIsIl9fSCIsIl9fViIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsImFjdGlvbiIsImN1cnJlbnRWYWx1ZSIsIl9fTiIsIm5leHRWYWx1ZSIsIl9oYXNTY3VGcm9tSG9va3MiLCJwcmV2U2N1IiwicCIsInN0YXRlSG9va3MiLCJmaWx0ZXIiLCJ4IiwiZXZlcnkiLCJzaG91bGRVcGRhdGUiLCJob29rSXRlbSIsInVzZUVmZmVjdCIsImFyZ3MiLCJhcmdzQ2hhbmdlZCIsIl9wZW5kaW5nQXJncyIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsInNoaWZ0IiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFmdGVyTmV4dEZyYW1lIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwidCIsIm4iLCJjbHN4IiwidXNlRW5zdXJlU3RhYmlsaXR5IiwicGFyZW50SG9va05hbWUiLCJ2YWx1ZXMiLCJoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSIsInNob3duRXJyb3IiLCJ1c2VIZWxwZXIiLCJjb25zb2xlIiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZVBhc3NpdmVTdGF0ZSIsIm9uQ2hhbmdlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiY3VzdG9tRGVib3VuY2VSZW5kZXJpbmciLCJ2YWx1ZVJlZiIsIlVuc2V0IiwicmVhc29uUmVmIiwid2FybmluZ1JlZiIsImRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0IiwiY2xlYW51cENhbGxiYWNrUmVmIiwib25TaG91bGRDbGVhblVwIiwiY2xlYW51cENhbGxiYWNrIiwidHJ5RW5zdXJlVmFsdWUiLCJleCIsImdldFZhbHVlIiwid2FybiIsInNldFZhbHVlIiwicmVhc29uIiwiRnVuY3Rpb24iLCJuZXh0UmVhc29uIiwibmV4dERlcCIsInByZXZEZXAiLCJTeW1ib2wiLCJyZXR1cm5GYWxzZSIsInJldHVybk51bGwiLCJydW5JbW1lZGlhdGVseSIsIlRhYmxlIiwiYmFzZTY0IiwicmFuZG9tNkJpdHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb202NEJpdHMiLCJnZW5lcmF0ZVJhbmRvbUlkIiwicHJlZml4IiwibWFwIiwiam9pbiIsInByZXZpb3VzSW5wdXRzIiwiTWFwIiwidG9SdW4iLCJjb21taXROYW1lIiwib3JpZ2luYWxDb21taXQiLCJuZXdDb21taXQiLCJpZCIsImVmZmVjdEluZm8iLCJvbGRJbnB1dHMiLCJnZXQiLCJpbnB1dHMiLCJlZmZlY3QiLCJzZXQiLCJjbGVhciIsInVzZUJlZm9yZUxheW91dEVmZmVjdCIsImRlbGV0ZSIsInVzZVN0YWJsZUdldHRlciIsIkVycm9yIiwidXNlTWVyZ2VkQ2hpbGRyZW4iLCJsaHMiLCJyaHMiLCJ1c2VNZXJnZWRDbGFzc2VzIiwibGhzQ2xhc3MiLCJsaHNDbGFzc05hbWUiLCJyaHNDbGFzcyIsInJoc0NsYXNzTmFtZSIsImxoc0NsYXNzZXMiLCJzcGxpdCIsInJoc0NsYXNzZXMiLCJhbGxDbGFzc2VzIiwiU2V0IiwiZnJvbSIsInByb2Nlc3NSZWYiLCJpbnN0YW5jZSIsImFzc2VydCIsInVzZU1lcmdlZFJlZnMiLCJjb21iaW5lZCIsInN0eWxlU3RyaW5nVG9PYmplY3QiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsInN0YXRlbWVudCIsInVzZU1lcmdlZFN0eWxlcyIsImxvZyIsInVzZU1lcmdlZFByb3BzIiwiYWxsUHJvcHMiLCJyZXQiLCJuZXh0UHJvcHMiLCJ1c2VNZXJnZWRQcm9wczIiLCJrbm93bnMiLCJtZXJnZVVua25vd24iLCJsaHNWYWx1ZSIsInJoc1ZhbHVlIiwibWVyZ2VkIiwibWVyZ2VGdW5jdGlvbnMiLCJsaHNBbGwiLCJyaHNBbGwiLCJjbGFzc05hbWUiLCJsaHNLZXlVIiwibGhzS2V5IiwiaGFzIiwicmhzS2V5VSIsInJoc0tleSIsImx2IiwicnYiLCJQcm9taXNlIiwiYWxsIiwidXNlUmVmRWxlbWVudCIsIm9uRWxlbWVudENoYW5nZSIsIm9uTW91bnQiLCJvblVubW91bnQiLCJyZWZFbGVtZW50UGFyYW1ldGVycyIsImhhbmRsZXIiLCJwcmV2VmFsdWUiLCJnZXRFbGVtZW50Iiwic2V0RWxlbWVudCIsInByb3BzU3RhYmxlIiwicmVmRWxlbWVudFJldHVybiIsIl9ibG9ja2luZ0VsZW1lbnRzIiwiX2FscmVhZHlJbmVydEVsZW1lbnRzIiwiX3RvcEVsUGFyZW50cyIsIl9zaWJsaW5nc1RvUmVzdG9yZSIsIl9wYXJlbnRNTyIsIl90b3BDaGFuZ2VkIiwiX3N3YXBJbmVydGVkU2libGluZyIsIl9pbmVydFNpYmxpbmdzIiwiX3Jlc3RvcmVJbmVydGVkU2libGluZ3MiLCJfZ2V0UGFyZW50cyIsIl9nZXREaXN0cmlidXRlZENoaWxkcmVuIiwiX2lzSW5lcnRhYmxlIiwiX2hhbmRsZU11dGF0aW9ucyIsIkJsb2NraW5nRWxlbWVudHNJbXBsIiwiX2EiLCJfYiIsIl9jIiwiZGVzdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJlbGVtZW50IiwicmVtb3ZlIiwicG9wIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsImJvZHkiLCJ0b1NraXAiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJpbmVydCIsImFkZCIsImVsZW1lbnRzIiwibW8iLCJkaXNjb25uZWN0Iiwic2libGluZ3MiLCJwYXJlbnQiLCJpbmVydGVkU2libGluZ3MiLCJNdXRhdGlvbk9ic2VydmVyIiwiYmluZCIsInBhcmVudFRvT2JzZXJ2ZSIsIm1heWJlU2hhZHlSb290IiwiX19zaGFkeSIsImhvc3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0IiwibXV0YXRpb25zIiwicGFyZW50cyIsIm11dGF0aW9uIiwidGFyZ2V0IiwiaWR4IiwiaW5lcnRlZENoaWxkIiwicmVtb3ZlZE5vZGVzIiwiaW5mbyIsImFkZGVkTm9kZXMiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiYXNzaWduZWRTbG90Iiwic2hhZG93Um9vdCIsInJlc3VsdCIsIm5vZGVzIiwic2xvdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCIkYmxvY2tpbmdFbGVtZW50cyIsImdsb2JhbCIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIndpbmRvdyIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiX29uTXV0YXRpb24iLCJzdWJ0cmVlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIl9hZG9wdEluZXJ0Um9vdCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJzaXplIiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJfb25Eb2N1bWVudExvYWRlZCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0Iiwic2hhZG93Um9vdEFuY2VzdG9yIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiX2kiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJIVE1MRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwiZnJlZU1vZHVsZSIsIm1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJpc0J1ZmZlciIsImZyZWVQcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwiaXNUeXBlZEFycmF5Iiwic2hhbGxvd0RpZmZlcnMiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsImNvbXBhcmVyIiwidXBkYXRlUmVmIiwiTWVtb2VkIiwiZGlzcGxheU5hbWUiLCJpc1JlYWN0Q29tcG9uZW50IiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJvbGREaWZmSG9vayIsIl9fZiIsIlJFQUNUX0ZPUldBUkRfU1lNQk9MIiwiZm9yIiwiZm9yd2FyZFJlZiIsImZuIiwiRm9yd2FyZGVkIiwiY2xvbmUiLCIkJHR5cGVvZiIsIm9sZENhdGNoRXJyb3IiLCJ0aGVuIiwib2xkVW5tb3VudCIsImRldGFjaGVkQ2xvbmUiLCJkZXRhY2hlZFBhcmVudCIsInJlbW92ZU9yaWdpbmFsIiwib3JpZ2luYWxQYXJlbnQiLCJTdXNwZW5zZSIsIl9fdSIsIl9zdXNwZW5kZXJzIiwic3VzcGVuZGVkIiwiX19hIiwiU3VzcGVuc2VMaXN0IiwiX25leHQiLCJfbWFwIiwiX19SIiwicHJvbWlzZSIsInN1c3BlbmRpbmdWTm9kZSIsInN1c3BlbmRpbmdDb21wb25lbnQiLCJyZXNvbHZlIiwicmVzb2x2ZWQiLCJvblJlc29sdmVkIiwib25TdXNwZW5zaW9uQ29tcGxldGUiLCJzdXNwZW5kZWRWTm9kZSIsIndhc0h5ZHJhdGluZyIsImRldGFjaGVkQ29tcG9uZW50IiwiX19PIiwiZmFsbGJhY2siLCJsaXN0IiwicmV2ZWFsT3JkZXIiLCJkZWxlZ2F0ZWQiLCJ1bnN1c3BlbmQiLCJ3cmFwcGVkVW5zdXNwZW5kIiwicmV2ZXJzZSIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIkNBTUVMX1BST1BTIiwiSVNfRE9NIiwib25DaGFuZ2VJbnB1dFR5cGUiLCJ2Iiwib2xkRXZlbnRIb29rIiwiZW1wdHkiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImNhbmNlbEJ1YmJsZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwZXJzaXN0IiwibmF0aXZlRXZlbnQiLCJjbGFzc05hbWVEZXNjcmlwdG9yIiwiY2xhc3MiLCJvbGRWTm9kZUhvb2siLCJub25DdXN0b21FbGVtZW50IiwibXVsdGlwbGUiLCJzZWxlY3RlZCIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiU3dhcHBhYmxlQ29udGV4dCIsImdldEFuaW1hdGVPbk1vdW50IiwiQ3NzQ2xhc3NDb250ZXh0IiwiR2V0QmFzZUNsYXNzIiwiR2V0RW50ZXJDbGFzcyIsIkdldEV4aXRDbGFzcyIsIkdldE1lYXN1cmVDbGFzcyIsIkdldEluaXRDbGFzcyIsIkdldFRyYW5zaXRpb25DbGFzcyIsIkdldEZpbmFsaXplQ2xhc3MiLCJ1c2VDc3NDbGFzc2VzIiwiR2V0RGlyZWN0aW9uQ2xhc3MiLCJkaXJlY3Rpb24iLCJHZXRQaGFzZUNsYXNzIiwicGhhc2UiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsInVzZUxhc3ROb25OdWxsVmFsdWUiLCJsYXN0Tm9uTnVsbFZhbHVlIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJvdGhlclByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiY2hpbGRyZW5BbmltYXRlT25Nb3VudCIsImgiLCJpbmxpbmVFbGVtZW50cyIsInRyYW5zaXRpb25Qcm9wcyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImFuaW1hdGVPbk1vdW50IiwiZ2V0VGltZW91dER1cmF0aW9uIiwibWF4IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHIiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInBhcnNlU3RhdGUiLCJuZXh0U3RhdGUiLCJ1c2VUcmFuc2l0aW9uIiwidHJhbnNpdGlvblBhcmFtZXRlcnMiLCJwcm9wc0luY29taW5nIiwic2hvdyIsIm1lYXN1cmUiLCJleGl0VmlzaWJpbGl0eSIsImR1cmF0aW9uIiwiZGVsYXlNb3VudFVudGlsU2hvd24iLCJlYXNpbmciLCJlYXNpbmdJbiIsImVhc2luZ091dCIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsImdldEV4aXRWaXNpYmlsaXR5IiwiY3NzUHJvcGVydGllcyIsImNsYXNzTmFtZXMiLCJoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQiLCJnZXRTdGF0ZSIsInRpbWVvdXRIYW5kbGUiLCJ0aW1lb3V0Q2xlYXJGdW5jdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvblN0YXRlQ2hhbmdlIiwicHJldlN0YXRlIiwibmV4dERpcmVjdGlvbiIsIm5leHRQaGFzZSIsImZvcmNlUmVmbG93IiwiY3VycmVudFN0YXRlIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRQaGFzZSIsImRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuIiwiaGFzUmVuZGVyZWRDaGlsZHJlbiIsInJlbmRlckNoaWxkcmVuIiwiY2hpbGRyZW5Jc1Zub2RlIiwiZmluYWxQcm9wcyIsIm1vZGlmaWVkQ2hpbGRyZW4iLCJnbG9iYWxUaGlzIiwiX2R1bW15Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInVzZUJhc2VQcm9wc0ZhZGUiLCJmYWRlUGFyYW1ldGVycyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsInJlc3QiLCJ1c2VCYXNlUHJvcHNDbGlwIiwiY2xpcFBhcmFtZXRlcnMiLCJjbGlwTWluIiwiY2xpcE1pbkJsb2NrIiwiY2xpcE1pbklubGluZSIsImNsaXBPcmlnaW4iLCJjbGlwT3JpZ2luQmxvY2siLCJjbGlwT3JpZ2luSW5saW5lIiwiQ2xpcCIsIkNsaXBGYWRlIiwidXNlQmFzZVByb3BzQ29sbGFwc2UiLCJjb2xsYXBzZVBhcmFtZXRlcnMiLCJtaW5CbG9ja1NpemUiLCJDb2xsYXBzZSIsIkNvbGxhcHNlRmFkZSIsInVzZUJhc2VQcm9wc0ZsaXAiLCJmbGlwUGFyYW1ldGVycyIsImZsaXBBbmdsZUJsb2NrIiwiZmxpcEFuZ2xlSW5saW5lIiwiZmxpcFBlcnNwZWN0aXZlIiwiRmxpcCIsInVzZUJhc2VQcm9wc1NsaWRlIiwic2xpZGVQYXJhbWV0ZXJzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwiU2xpZGUiLCJTbGlkZUZhZGUiLCJ1c2VCYXNlUHJvcHNab29tIiwiem9vbVBhcmFtZXRlcnMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIlNsaWRlWm9vbSIsIlNsaWRlWm9vbUZhZGUiLCJab29tRmFkZSIsImhhbGZUZXh0IiwiaW5wdXQiLCJ0aW1lcyIsInN1YnN0ciIsIkRlbW8iLCJzZXRBbmltYXRlT25Nb3VudCIsIndyaXRpbmdNb2RlIiwic2V0V3JpdGluZ01vZGUiLCJzaG93MSIsInNldFNob3cxIiwic2hvdzMiLCJzZXRTaG93MyIsInJlZmxvdyIsInNldFJlZmxvdyIsInNldER1cmF0aW9uIiwidGV4dCIsInNldFRleHQiLCJmbGlja2VyIiwic2V0RmxpY2tlciIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uQ2xpY2siLCJvbklucHV0IiwiZGlzYWJsZWQiLCJjb2xzIiwicm93cyIsIkZhZGVEZW1vIiwiY2FyZFNob3ciLCJjb250ZW50SW5kZXgiLCJTbGlkZURlbW8iLCJab29tRGVtbyIsIkNsaXBEZW1vIiwiRmxpcERlbW8iLCJab29tU2xpZGVEZW1vIiwiQ29sbGFwc2VEZW1vIiwibWluIiwic2V0TWluIiwic2V0TWF4Iiwib25NaW5JbnB1dCIsIm9uTWF4SW5wdXQiLCJDIiwiQ1MiLCJtYWtlQ2hpbGQiLCJzdGVwIiwib3JpZ2luWCIsInNldE9yaWdpblgiLCJvcmlnaW5ZIiwic2V0T3JpZ2luWSIsIm1pblgiLCJzZXRNaW5YIiwibWluWSIsInNldE1pblkiLCJ3aXRoRmFkZSIsInNldFdpdGhGYWRlIiwib25PcmlnaW5YSW5wdXQiLCJvbk9yaWdpbllJbnB1dCIsIm9uTWluWElucHV0Iiwib25NaW5ZSW5wdXQiLCJvbldpdGhGYWRlSW5wdXQiLCJzbGlkZVgiLCJzZXRTbGlkZVgiLCJzbGlkZVkiLCJzZXRTbGlkZVkiLCJvblNsaWRlWElucHV0Iiwib25TbGlkZVlJbnB1dCIsInNpZ24iLCJzZXRNaW5CbG9ja1NpemUiLCJvbk1pblNpemUiLCJmbGlwWCIsInNldEZsaXBYIiwiZmxpcFkiLCJzZXRGbGlwWSIsIm9uRmxpcFhJbnB1dCIsIm9uRmxpcFlJbnB1dCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQmFBLElBQUFBLENBQUFBO0lDZlBDLEdDUkZDO0lBQUFBLEdBQUFBO0lDeUtBQyxHQUFBQTtJQVdBQztJQ3JMT0MsR0NGRUM7SUFBQUEsR0FBQUEsR0FBWSxFQUFsQjtJQUNNQyxHQUFZLEdBQUEsRUFBQTtJQUNaQyxHQUFxQixHQUFBLG1FQUFBO0VMT2xCQyxTQUFBQSxHQUFPQyxDQUFBQSxDQUFBQSxFQUFLQyxDQUUzQixFQUFBO0lBQUEsS0FBSyxJQUFJTixDQUFBQSxJQUFLTSxDQUFPRCxFQUFBQSxDQUFBQSxDQUFJTCxLQUFLTSxDQUFNTixDQUFBQSxDQUFBQSxDQUFBQTtJQUNwQyxPQUE2QkssQ0FDN0I7RUFBQTtFQVFNLFNBQVNFLEdBQUFBLENBQVdDLENBQzFCLEVBQUE7SUFBQSxJQUFJQyxJQUFhRCxDQUFLQyxDQUFB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
