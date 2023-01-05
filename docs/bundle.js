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
    for (var u in l) {
      n[u] = l[u];
    }
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
    for (r in u) {
      "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    }
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) {
      void 0 === f[r] && (f[r] = l.defaultProps[r]);
    }
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
    for (var u; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    }
    return "function" == typeof n.type ? _$1(n) : null;
  }
  function k$2(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }
      }
      return k$2(n);
    }
  }
  function b$1(n) {
    (!n.__d && (n.__d = !0) && t$1.push(n) && !g$2.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || setTimeout)(g$2);
  }
  function g$2() {
    for (var n; g$2.__r = t$1.length;) {
      n = t$1.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t$1 = [], n.some(function (n) {
        var l, u, i, t, o, r;
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s$1({}, t)).__v = t.__v + 1, j$1(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _$1(t) : o, t.__h), z$2(u, t), t.__e != o && k$2(t)));
      });
    }
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
    for (u.__k = [], h = 0; h < l.length; h++) {
      if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v$1(null, k, null, null, k) : Array.isArray(k) ? v$1(p$1, {
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
    }
    for (u.__e = g, h = C; h--;) {
      null != x[h] && N$1(x[h], x[h]);
    }
    if (w) for (h = 0; h < w.length; h++) {
      M(w[h], w[++h], w[++h]);
    }
  }
  function m$1(n, l, u) {
    for (var i, t = n.__k, o = 0; t && o < t.length; o++) {
      (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m$1(i, l, u) : A(u, i, i, t, i.__e, l));
    }
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
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 1) {
        if (f == t) break n;
      }
      n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
  }
  function C$1(n, l, u, i, t) {
    var o;
    for (o in u) {
      "children" === o || "key" === o || o in l || H$1(n, o, null, u[o], i);
    }
    for (o in l) {
      t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$1(n, o, l[o], u[o], i);
    }
  }
  function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || c$1.test(l) ? u : u + "px";
  }
  function H$1(n, l, u, i, t) {
    var o;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) {
          u && l in u || $(n.style, l, "");
        }
        if (u) for (l in u) {
          i && u[l] === i[l] || $(n.style, l, u[l]);
        }
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
            }), A = 0; A < h._sb.length; A++) {
              h.__h.push(h._sb[A]);
            }
            h._sb = [], h.__h.length && f.push(h);
            break n;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, _, k);
          });
        }
        if (h.context = x, h.props = g, h.__v = u, h.__P = n, C = l$1.__r, $ = 0, "prototype" in T && T.prototype.render) {
          for (h.state = h.__s, h.__d = !1, C && C(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++) {
            h.__h.push(h._sb[H]);
          }
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
    if ("svg" === d && (o = !0), null != r) for (; k < r.length; k++) {
      if ((s = r[k]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
        l = s, r[k] = null;
        break;
      }
    }
    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (r = r && n.call(l.childNodes), h = (y = i.props || f$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != r) for (y = {}, k = 0; k < l.attributes.length; k++) {
          y[l.attributes[k].name] = l.attributes[k].value;
        }
        (v || h) && (v && (h && v.__html == h.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }
      if (C$1(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$2(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$1(i, 0), c), null != r) for (k = r.length; k--;) {
        null != r[k] && a$1(r[k]);
      }
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
    if (t = n.__k) for (o = 0; o < t.length; o++) {
      t[o] && N$1(t[o], u, i || "function" != typeof n.type);
    }
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
    for (r in u) {
      "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    }
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
      for (var t, o, r; l = l.__;) {
        if ((t = l.__c) && !t.__) try {
          if ((o = t.constructor) && null != o.getDerivedStateFromError && (t.setState(o.getDerivedStateFromError(n)), r = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), r = t.__d), r) return t.__E = t;
        } catch (l) {
          n = l;
        }
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
    for (var t; t = f.shift();) {
      if (t.__P && t.__H) try {
        t.__H.__h.forEach(k$1), t.__H.__h.forEach(w$1), t.__H.__h = [];
      } catch (r) {
        t.__H.__h = [], l$1.__e(r, t.__v);
      }
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
    for (var e in t) {
      n[e] = t[e];
    }
    return n;
  }
  function C(n, t) {
    for (var e in n) {
      if ("__source" !== e && !(e in t)) return !0;
    }
    for (var r in t) {
      if ("__source" !== r && n[r] !== t[r]) return !0;
    }
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
    if (n.then) for (var u, o = t; o = o.__;) {
      if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
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
          }); t = r.t.pop();) {
            t.forceUpdate();
          }
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
      for (; e.length > 3;) {
        e.pop()();
      }
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
    for (var e = t.length; e--;) {
      this.o.set(t[e], this.u = [1, 0, this.u]);
    }
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
    if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) {
      e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (t in e) {
      e[t] && (n && (n += " "), n += t);
    }
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = ""; f < arguments.length;) {
      (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy90aW1pbmcvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL2NvbnRleHQuanMiLCIuLi90cmFuc2l0aW9uYWJsZS5qcyIsIi4uL2NsaXAuanMiLCIuLi9mYWRlLmpzIiwiLi4vY2xpcC1mYWRlLmpzIiwiLi4vY29sbGFwc2UuanMiLCIuLi9jb2xsYXBzZS1mYWRlLmpzIiwiLi4vc2xpZGUuanMiLCIuLi9zbGlkZS1mYWRlLmpzIiwiLi4vem9vbS5qcyIsIi4uL3pvb20tZmFkZS5qcyIsIi4uL3NsaWRlLXpvb20uanMiLCIuLi9zbGlkZS16b29tLWZhZGUuanMiLCIuLi9mbGlwLmpzIiwiLi4vc3dhcHBhYmxlLmpzIiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB2KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24geSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBfKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9fKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP18obik6bnVsbH1mdW5jdGlvbiBrKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gayhuKX19ZnVuY3Rpb24gYihuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8c2V0VGltZW91dCkoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1zKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9fKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmayh0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGMscyxhKXt2YXIgaCx5LGQsayxiLGcsdyx4PWkmJmkuX19rfHxlLEM9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHAse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksay5yZWY/ay5yZWY6bnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oZD14W2hdKXx8ZCYmay5rZXk9PWQua2V5JiZrLnR5cGU9PT1kLnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IoeT0wO3k8Qzt5Kyspe2lmKChkPXhbeV0pJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl7eFt5XT12b2lkIDA7YnJlYWt9ZD1udWxsfWoobixrLGQ9ZHx8Zix0LG8scixjLHMsYSksYj1rLl9fZSwoeT1rLnJlZikmJmQucmVmIT15JiYod3x8KHc9W10pLGQucmVmJiZ3LnB1c2goZC5yZWYsbnVsbCxrKSx3LnB1c2goeSxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09ZyYmKGc9YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZrLl9faz09PWQuX19rP2suX19kPXM9bShrLHMsbik6cz1BKG4sayxkLHgsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmZC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9XyhkKSl9Zm9yKHUuX19lPWcsaD1DO2gtLTspbnVsbCE9eFtoXSYmTih4W2hdLHhbaF0pO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylNKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gbShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP20oaSxsLHUpOkEodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24geChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBBKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MSlpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJi0xPT1sLmluZGV4T2YoXCItXCIpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgYSxoLHYseSxfLGssYixnLG0seCxBLEMsJCxILEksVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1sLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl7aWYoZz11LnByb3BzLG09KGE9VC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT9tP20ucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFQoZyx4KToodS5fX2M9aD1uZXcgZChnLHgpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1PKSxtJiZtLnN1YihoKSxoLnByb3BzPWcsaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSxoLl9zYj1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyxoLl9fcykpKSx5PWgucHJvcHMsXz1oLnN0YXRlLHYpbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShnLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtmb3IoaC5wcm9wcz1nLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxBPTA7QTxoLl9zYi5sZW5ndGg7QSsrKWguX19oLnB1c2goaC5fc2JbQV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoZyxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHksXyxrKX0pfWlmKGguY29udGV4dD14LGgucHJvcHM9ZyxoLl9fdj11LGguX19QPW4sQz1sLl9fciwkPTAsXCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcil7Zm9yKGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsQyYmQyh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLEg9MDtIPGguX3NiLmxlbmd0aDtIKyspaC5fX2gucHVzaChoLl9zYltIXSk7aC5fc2I9W119ZWxzZSBkb3toLl9fZD0hMSxDJiZDKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKyskPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxfKSksST1udWxsIT1hJiZhLnR5cGU9PT1wJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsdyhuLEFycmF5LmlzQXJyYXkoSSk/STpbSV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPWwuZGlmZmVkKSYmYSh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZSxjKXt2YXIgcyxoLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksaD0oeT1pLnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyh2fHxoKSYmKHYmJihoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKGs9dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShrKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixlLHI/clswXTppLl9fayYmXyhpLDApLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZhKHJba10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYha3x8XCJvcHRpb25cIj09PWQmJmshPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KGs9cC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsaXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8YShuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBQKHUsaSx0KXt2YXIgbyxyLGU7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZT1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz1oKHAsbnVsbCxbdV0pLHJ8fGYsZix2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGUsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGUsdSl9ZnVuY3Rpb24gUyhuLGwpe1AobixsLFMpfWZ1bmN0aW9uIHEobCx1LGkpe3ZhciB0LG8scixmPXMoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksdihsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBCKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGIpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49ZS5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksYih0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXAsdD1bXSxnLl9fcj0wLHI9MDtleHBvcnR7ZCBhcyBDb21wb25lbnQscCBhcyBGcmFnbWVudCxxIGFzIGNsb25lRWxlbWVudCxCIGFzIGNyZWF0ZUNvbnRleHQsaCBhcyBjcmVhdGVFbGVtZW50LHkgYXMgY3JlYXRlUmVmLGgsUyBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLFAgYXMgcmVuZGVyLHggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9W10sZT1uLl9fYixhPW4uX19yLHY9bi5kaWZmZWQsbD1uLl9fYyxtPW4udW5tb3VudDtmdW5jdGlvbiBkKHQsdSl7bi5fX2gmJm4uX19oKHIsdCxvfHx1KSxvPTA7dmFyIGk9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe19fVjpjfSksaS5fX1t0XX1mdW5jdGlvbiBwKG4pe3JldHVybiBvPTEseShCLG4pfWZ1bmN0aW9uIHkobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpCKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7ci51PSEwO3ZhciBmPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlO3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hZnx8Zi5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPSExO3JldHVybiB1LmZvckVhY2goZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSwhKCFpJiZvLl9fYy5wcm9wcz09PW4pJiYoIWZ8fGYuY2FsbCh0aGlzLG4sdCxyKSl9fXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiBoKHUsaSl7dmFyIG89ZCh0KyssMyk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiBzKHUsaSl7dmFyIG89ZCh0KyssNCk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19oLnB1c2gobykpfWZ1bmN0aW9uIF8obil7cmV0dXJuIG89NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCxyKXtvPTYscyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIHoodS5fX0gscik/KHUuX19WPW4oKSx1Lmk9cix1Ll9faD1uLHUuX19WKTp1Ll9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbz04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCxyKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShyP3IodCk6dCl9ZnVuY3Rpb24gUChuKXt2YXIgdT1kKHQrKywxMCksaT1wKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBWKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGIoKXtmb3IodmFyIHQ7dD1mLnNoaWZ0KCk7KWlmKHQuX19QJiZ0Ll9fSCl0cnl7dC5fX0guX19oLmZvckVhY2goayksdC5fX0guX19oLmZvckVhY2godyksdC5fX0guX19oPVtdfWNhdGNoKHIpe3QuX19ILl9faD1bXSxuLl9fZShyLHQuX192KX19bi5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LG4uX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLl9fVj1jLG4uX19OPW4uaT12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goayksaS5fX2guZm9yRWFjaCh3KSxpLl9faD1bXSkpLHU9cn0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmKG8uX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKG8pJiZpPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGopKGIpKSxvLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uaSYmKG4uX19IPW4uaSksbi5fX1YhPT1jJiYobi5fXz1uLl9fViksbi5pPXZvaWQgMCxuLl9fVj1jfSkpLHU9cj1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHIpe3Iuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChrKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fHcobil9KX1jYXRjaCh1KXtyLnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSxyPVtdLG4uX19lKHUsdC5fX3YpfX0pLGwmJmwodCxyKX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe20mJm0odCk7dmFyIHIsdT10Ll9fYzt1JiZ1Ll9fSCYmKHUuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2sobil9Y2F0Y2gobil7cj1ufX0pLHUuX19IPXZvaWQgMCxyJiZuLl9fZShyLHUuX192KSl9O3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBqKG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIGsobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gdyhuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24geihuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBCKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e1QgYXMgdXNlQ2FsbGJhY2sscSBhcyB1c2VDb250ZXh0LHggYXMgdXNlRGVidWdWYWx1ZSxoIGFzIHVzZUVmZmVjdCxQIGFzIHVzZUVycm9yQm91bmRhcnksViBhcyB1c2VJZCxBIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUscyBhcyB1c2VMYXlvdXRFZmZlY3QsRiBhcyB1c2VNZW1vLHkgYXMgdXNlUmVkdWNlcixfIGFzIHVzZVJlZixwIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtDb21wb25lbnQgYXMgbixjcmVhdGVFbGVtZW50IGFzIHQsb3B0aW9ucyBhcyBlLHRvQ2hpbGRBcnJheSBhcyByLEZyYWdtZW50IGFzIHUscmVuZGVyIGFzIG8saHlkcmF0ZSBhcyBpLGNyZWF0ZUNvbnRleHQgYXMgbCxjcmVhdGVSZWYgYXMgYyxjbG9uZUVsZW1lbnQgYXMgZn1mcm9tXCJwcmVhY3RcIjtleHBvcnR7Q29tcG9uZW50LEZyYWdtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlRWxlbWVudCxjcmVhdGVSZWZ9ZnJvbVwicHJlYWN0XCI7aW1wb3J0e3VzZVN0YXRlIGFzIGEsdXNlSWQgYXMgcyx1c2VSZWR1Y2VyIGFzIGgsdXNlRWZmZWN0IGFzIHYsdXNlTGF5b3V0RWZmZWN0IGFzIGQsdXNlUmVmIGFzIHAsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBtLHVzZU1lbW8gYXMgeSx1c2VDYWxsYmFjayBhcyBfLHVzZUNvbnRleHQgYXMgYix1c2VEZWJ1Z1ZhbHVlIGFzIFN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2Z1bmN0aW9uIGcobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuIG49PT10JiYoMCE9PW58fDEvbj09MS90KXx8biE9biYmdCE9dH1mdW5jdGlvbiB3KG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBSKG4sZSl7ZnVuY3Rpb24gcihuKXt2YXIgdD10aGlzLnByb3BzLnJlZixyPXQ9PW4ucmVmO3JldHVybiFyJiZ0JiYodC5jYWxsP3QobnVsbCk6dC5jdXJyZW50PW51bGwpLGU/IWUodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPXIsdChuLGUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix1LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHUuX19mPSEwLHV9KHcucHJvdG90eXBlPW5ldyBuKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCx3LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB4PWUuX19iO2UuX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx4JiZ4KG4pfTt2YXIgTj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24gayhuKXtmdW5jdGlvbiB0KHQpe3ZhciBlPWcoe30sdCk7cmV0dXJuIGRlbGV0ZSBlLnJlZixuKGUsdC5yZWZ8fG51bGwpfXJldHVybiB0LiQkdHlwZW9mPU4sdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIEE9ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnIocihuKS5tYXAodCkpfSxPPXttYXA6QSxmb3JFYWNoOkEsY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/cihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1yKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnJ9LFQ9ZS5fX2U7ZS5fX2U9ZnVuY3Rpb24obix0LGUscil7aWYobi50aGVuKWZvcih2YXIgdSxvPXQ7bz1vLl9fOylpZigodT1vLl9fYykmJnUuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSx1Ll9fYyhuLHQpO1Qobix0LGUscil9O3ZhciBJPWUudW5tb3VudDtmdW5jdGlvbiBMKG4sdCxlKXtyZXR1cm4gbiYmKG4uX19jJiZuLl9fYy5fX0gmJihuLl9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLG4uX19jLl9fSD1udWxsKSxudWxsIT0obj1nKHt9LG4pKS5fX2MmJihuLl9fYy5fX1A9PT1lJiYobi5fX2MuX19QPXQpLG4uX19jPW51bGwpLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIEwobix0LGUpfSkpLG59ZnVuY3Rpb24gVShuLHQsZSl7cmV0dXJuIG4mJihuLl9fdj1udWxsLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIFUobix0LGUpfSksbi5fX2MmJm4uX19jLl9fUD09PXQmJihuLl9fZSYmZS5pbnNlcnRCZWZvcmUobi5fX2Usbi5fX2QpLG4uX19jLl9fZT0hMCxuLl9fYy5fX1A9ZSkpLG59ZnVuY3Rpb24gRCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBGKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fYSYmdC5fX2Eobil9ZnVuY3Rpb24gTShuKXt2YXIgZSxyLHU7ZnVuY3Rpb24gbyhvKXtpZihlfHwoZT1uKCkpLnRoZW4oZnVuY3Rpb24obil7cj1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3U9bn0pLHUpdGhyb3cgdTtpZighcil0aHJvdyBlO3JldHVybiB0KHIsbyl9cmV0dXJuIG8uZGlzcGxheU5hbWU9XCJMYXp5XCIsby5fX2Y9ITAsb31mdW5jdGlvbiBWKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9ZS51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksSSYmSShuKX0sKEQucHJvdG90eXBlPW5ldyBuKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1GKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19hKXt2YXIgbj1yLnN0YXRlLl9fYTtyLl9fdi5fX2tbMF09VShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2E6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19hOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxELnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sRC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sZSl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxvPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPUwodGhpcy5fX2IscixvLl9fTz1vLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgaT1lLl9fYSYmdCh1LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIGkmJihpLl9faD1udWxsKSxbdCh1LG51bGwsZS5fX2E/bnVsbDpuLmNoaWxkcmVuKSxpXX07dmFyIFc9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gUChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uICQobil7dmFyIGU9dGhpcyxyPW4uaTtlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7byhudWxsLGUubCksZS5sPW51bGwsZS5pPW51bGx9LGUuaSYmZS5pIT09ciYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192PyhlLmx8fChlLmk9cixlLmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTpyLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obix0KXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLGUuaS5yZW1vdmVDaGlsZChuKX19KSxvKHQoUCx7Y29udGV4dDplLmNvbnRleHR9LG4uX192KSxlLmwpKTplLmwmJmUuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBqKG4sZSl7dmFyIHI9dCgkLHtfX3Y6bixpOmV9KTtyZXR1cm4gci5jb250YWluZXJJbmZvPWUscn0oVi5wcm90b3R5cGU9bmV3IG4pLl9fYT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9Rih0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVyh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LFYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1yKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxWLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Vi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VyhuLGUsdCl9KX07dmFyIHo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLEI9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sSD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsWj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIFkobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksbyhuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gcShuLHQsZSl7cmV0dXJuIGkobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfW4ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4ucHJvdG90eXBlLHQse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIit0XX0sc2V0OmZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSl9fSl9KTt2YXIgRz1lLmV2ZW50O2Z1bmN0aW9uIEooKXt9ZnVuY3Rpb24gSygpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBRKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1lLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBHJiYobj1HKG4pKSxuLnBlcnNpc3Q9SixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPUssbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9USxuLm5hdGl2ZUV2ZW50PW59O3ZhciBYLG5uPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSx0bj1lLnZub2RlO2Uudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyx1PWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBvPS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIGkgaW4gdT17fSxlKXt2YXIgbD1lW2ldO0gmJlwiY2hpbGRyZW5cIj09PWkmJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PWkmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1sfHwoXCJkZWZhdWx0VmFsdWVcIj09PWkmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/aT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09aSYmITA9PT1sP2w9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QoaSk/aT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QoaSt0KSYmIVooZS50eXBlKT9pPVwib25pbnB1dFwiOi9eb25mb2N1cyQvaS50ZXN0KGkpP2k9XCJvbmZvY3VzaW5cIjovXm9uYmx1ciQvaS50ZXN0KGkpP2k9XCJvbmZvY3Vzb3V0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpP2k9aS50b0xvd2VyQ2FzZSgpOm8mJkIudGVzdChpKT9pPWkucmVwbGFjZSgvW0EtWjAtOV0vZyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1sJiYobD12b2lkIDApLC9eb25pbnB1dCQvaS50ZXN0KGkpJiYoaT1pLnRvTG93ZXJDYXNlKCksdVtpXSYmKGk9XCJvbmlucHV0Q2FwdHVyZVwiKSksdVtpXT1sKX1cInNlbGVjdFwiPT10JiZ1Lm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHUudmFsdWUpJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9dS52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXUuZGVmYXVsdFZhbHVlJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD11Lm11bHRpcGxlPy0xIT11LmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnUuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9dSxlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKG5uLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJih1LmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLG5uKSl9bi4kJHR5cGVvZj16LHRuJiZ0bihuKX07dmFyIGVuPWUuX19yO2UuX19yPWZ1bmN0aW9uKG4pe2VuJiZlbihuKSxYPW4uX19jfTt2YXIgcm49e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBYLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LHVuPVwiMTcuMC4yXCI7ZnVuY3Rpb24gb24obil7cmV0dXJuIHQuYmluZChudWxsLG4pfWZ1bmN0aW9uIGxuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PXp9ZnVuY3Rpb24gY24obil7cmV0dXJuIGxuKG4pP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gZm4obil7cmV0dXJuISFuLl9fayYmKG8obnVsbCxuKSwhMCl9ZnVuY3Rpb24gYW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgc249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0saG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sdm49dTtmdW5jdGlvbiBkbihuKXtuKCl9ZnVuY3Rpb24gcG4obil7cmV0dXJuIG59ZnVuY3Rpb24gbW4oKXtyZXR1cm5bITEsZG5dfXZhciB5bj1kO2Z1bmN0aW9uIF9uKG4sdCl7dmFyIGU9dCgpLHI9YSh7aDp7X186ZSx2OnR9fSksdT1yWzBdLmgsbz1yWzFdO3JldHVybiBkKGZ1bmN0aW9uKCl7dS5fXz1lLHUudj10LEUodS5fXyx0KCkpfHxvKHtoOnV9KX0sW24sZSx0XSksdihmdW5jdGlvbigpe3JldHVybiBFKHUuX18sdS52KCkpfHxvKHtoOnV9KSxuKGZ1bmN0aW9uKCl7RSh1Ll9fLHUudigpKXx8byh7aDp1fSl9KX0sW25dKSxlfXZhciBibj17dXNlU3RhdGU6YSx1c2VJZDpzLHVzZVJlZHVjZXI6aCx1c2VFZmZlY3Q6dix1c2VMYXlvdXRFZmZlY3Q6ZCx1c2VJbnNlcnRpb25FZmZlY3Q6eW4sdXNlVHJhbnNpdGlvbjptbix1c2VEZWZlcnJlZFZhbHVlOnBuLHVzZVN5bmNFeHRlcm5hbFN0b3JlOl9uLHN0YXJ0VHJhbnNpdGlvbjpkbix1c2VSZWY6cCx1c2VJbXBlcmF0aXZlSGFuZGxlOm0sdXNlTWVtbzp5LHVzZUNhbGxiYWNrOl8sdXNlQ29udGV4dDpiLHVzZURlYnVnVmFsdWU6Uyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46TyxyZW5kZXI6WSxoeWRyYXRlOnEsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpmbixjcmVhdGVQb3J0YWw6aixjcmVhdGVFbGVtZW50OnQsY3JlYXRlQ29udGV4dDpsLGNyZWF0ZUZhY3Rvcnk6b24sY2xvbmVFbGVtZW50OmNuLGNyZWF0ZVJlZjpjLEZyYWdtZW50OnUsaXNWYWxpZEVsZW1lbnQ6bG4sZmluZERPTU5vZGU6YW4sQ29tcG9uZW50Om4sUHVyZUNvbXBvbmVudDp3LG1lbW86Uixmb3J3YXJkUmVmOmssZmx1c2hTeW5jOmhuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnNuLFN0cmljdE1vZGU6dm4sU3VzcGVuc2U6RCxTdXNwZW5zZUxpc3Q6VixsYXp5Ok0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6cm59O2V4cG9ydHtPIGFzIENoaWxkcmVuLHcgYXMgUHVyZUNvbXBvbmVudCx2biBhcyBTdHJpY3RNb2RlLEQgYXMgU3VzcGVuc2UsViBhcyBTdXNwZW5zZUxpc3Qscm4gYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsY24gYXMgY2xvbmVFbGVtZW50LG9uIGFzIGNyZWF0ZUZhY3RvcnksaiBhcyBjcmVhdGVQb3J0YWwsYm4gYXMgZGVmYXVsdCxhbiBhcyBmaW5kRE9NTm9kZSxobiBhcyBmbHVzaFN5bmMsayBhcyBmb3J3YXJkUmVmLHEgYXMgaHlkcmF0ZSxsbiBhcyBpc1ZhbGlkRWxlbWVudCxNIGFzIGxhenksUiBhcyBtZW1vLFkgYXMgcmVuZGVyLGRuIGFzIHN0YXJ0VHJhbnNpdGlvbixmbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLHNuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHBuIGFzIHVzZURlZmVycmVkVmFsdWUseW4gYXMgdXNlSW5zZXJ0aW9uRWZmZWN0LF9uIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLG1uIGFzIHVzZVRyYW5zaXRpb24sdW4gYXMgdmVyc2lvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG4vKipcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cbiAqIE5hbWVseSBpdCBpbnZvbHZlcyBkZS1ndW5raW5nIHRoZSB0eXBlIHN5c3RlbSBieSBsZXR0aW5nIHVzIHJldHVybiAqZ2VuZXJpYyogZnVuY3Rpb24gYW5kIHBsYXlpbmcgbmljZSB3aXRoIFJlYWN0LiBJbiBhbGwgb3RoZXIgcmVzcGVjdHMsIGl0IGFjdHMgbGlrZSBgZm9yd2FyZFJlZmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcbiAgICBjb25zdCBGb3J3YXJkZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcndhcmQtZWxlbWVudC1yZWYuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICpcbiAqIEV2ZW50dWFsbHksIHdoZW4gdXNlRXZlbnQgbGFuZHMsIHdlIGhvcGVmdWxseSB3b24ndCBuZWVkIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHkocGFyZW50SG9va05hbWUsIC4uLnZhbHVlcykge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMCA/IEpTT04uc3RyaW5naWZ5KHZhbHVlc1tpXSkgOiBcInRoZSBudW1iZXIgb2Ygc3VwcG9zZWRseSBzdGFibGUgZWxlbWVudHNcIn0pLmApO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudFtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGYpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcsIHJlYXNvbikgPT4ge1xuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBTYXZlIG91ciBjdXJyZW50IHZhbHVlIHNvIHRoYXQgd2UgY2FuIGNvbXBhcmUgYWdhaW5zdCBpdCBsYXRlclxuICAgICAgICAgICAgLy8gKGlmIHdlIGZsaXAgYmFjayB0byB0aGlzIHN0YXRlLCB0aGVuIHdlIHdvbid0IHNlbmQgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uKVxuICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IHZhbHVlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRSZWFzb24gPSByZWFzb25SZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RGVwID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGVwID0gZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCAhPSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGZpbmlzaGVkIHdpdGggZXZlcnl0aGluZywgc28gbWFyayB1cyBhcyBiZWluZyBvbiBhIGNsZWFuIHNsYXRlIGFnYWluLlxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSBVbnNldDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcbi8vIEVhc3kgY29uc3RhbnRzIGZvciBnZXRJbml0aWFsVmFsdWVcbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblVuZGVmaW5lZCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblplcm8oKSB7IHJldHVybiAwOyB9XG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfSAvLyBLaW5kIG9mIGFuIGV4dHJhLCBidXQgaXQncyB1c2VmdWwgaW4gb3RoZXIgcGxhY2VzIGFueXdheVxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byB1c2UgZm9yIGBjdXN0b21EZWJvdW5jZVJlbmRlcmluZ2AgdGhhdCBjYXVzZXMgYHVzZVBhc3NpdmVTdGF0ZWAgdG8gcnVuIGNoYW5nZXMgd2l0aG91dCB3YWl0aW5nIGEgdGljay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkltbWVkaWF0ZWx5KGYpIHsgZigpOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqXG4gKlxuICogKFRoaXMgaXMgaGVyZSwgaW4gdGhpcyBwYXJ0aWN1bGFyIGZpbGUsIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICogd2l0aG91dCBhbHNvIG1ha2luZyBhIHV0aWxpdGllcyBmaWxlLlxuICogT25jZSB3ZSBjYW4gcmVtb3ZlIHRoaXMgaG9vaywgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIGJhY2sgd2l0aCB1c2VSYW5kb21JZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbi8vXG4vLyAuLi5cbi8vIFdlbGwsIHVzZUV2ZW50IG9yIHdoYXRldmVyIGlzIGZpbmFsbHksIGZpbmFsbHkgNCB5ZWFycyBsYXRlciBmaW5hbGx5IGhlcmVcbi8vIHdoaWNoIGlzIGNvb2wgYW5kIG1lYW5zIHdlIHdvbid0IG5lZWQgdGhpcyBhdCBhbGwgc29vbi5cbi8vIFNvIGZvciBub3cgd2UnbGwgc3RpY2sgd2l0aCBkaWZmIHRvIHByZXZlbnQgYW55IHdlaXJkbmVzcyB3aXRoXG4vLyBjb21taXQgYmVpbmcgcHJpdmF0ZSBhbmQgYWxsLlxuY29uc3QgY29tbWl0TmFtZSA9IFwiZGlmZmVkXCI7XG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufTtcbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQ7XG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICBpZiAoZWZmZWN0KVxuICAgICAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgZWxzZVxuICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaWRdKTtcbn1cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcbiAgICAgICAgb2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3M/Lmxlbmd0aCB8fFxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUJlZm9yZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0pLCBbdmFsdWVdKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgPT09IFVuc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZHVyaW5nIHJlbmRlci4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xufVxuLyoqXG4gKiBMaWtlIGB1c2VTdGFibGVHZXR0ZXJgLCBidXQgKioqcmVxdWlyZXMqKiogdGhhdCBldmVyeXRoaW5nIGluIHRoZSBvYmplY3QgaXMgYWxzbyBzdGFibGUsXG4gKiBhbmQgaW4gdHVybiByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGl0c2VsZiBpcyBzdGFibGUuXG4gKiBAcGFyYW0gdFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZU9iamVjdCh0KSB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHMsIHJocykge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSwgcmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJmdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cbi8qKlxuICogQ29tYmluZXMgdHdvIHJlZnMgaW50byBvbmUuIFRoaXMgYWxsb3dzIGEgY29tcG9uZW50IHRvIGJvdGggdXNlIGl0cyBvd24gcmVmICphbmQqIGZvcndhcmQgYSByZWYgdGhhdCB3YXMgZ2l2ZW4gdG8gaXQuXG4gKiBAcGFyYW0gbGhzXG4gKiBAcGFyYW0gcmhzXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcyhyaHMsIGxocykge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21iaW5lZChjdXJyZW50KSB7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xuICAgIH1cbiAgICA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMpLCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xoc307JHtyaHMgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pLFxuICAgICAgICAuLi4ocmhzID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG4vKlxudHlwZSBJc0VtcHR5T2JqZWN0PFQ+ID0gW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXT8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgdHlwZSBFeHRyYWN0ZWRQcm9wczxPIGV4dGVuZHMge30+ID0geyBbSyBpbiBrZXlvZiBPXTogUGljazxPW0tdLCAoXCJwcm9wc1N0YWJsZVwiIHwgXCJwcm9wc1Vuc3RhYmxlXCIpICYga2V5b2YgT1tLXT4gfTtcblxuY29uc3QgbzogRXh0cmFjdGVkUHJvcHM8VXNlR3JpZE5hdmlnYXRpb25Sb3dSZXR1cm5UeXBlPGFueSwgYW55Pj4gPSB7XG4gICAgYXNDaGlsZFJvd09mVGFibGU6IHtcblxuICAgIH0sXG4gICAgYXNQYXJlbnRSb3dPZkNlbGxzOiB7fVxufSovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcyguLi5hbGxQcm9wcykge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1lcmdlZFByb3BzXCIsIGFsbFByb3BzLmxlbmd0aCk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczIocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3Qga25vd25zID0gbmV3IFNldChbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pO1xuZnVuY3Rpb24gbWVyZ2VVbmtub3duKGtleSwgbGhzVmFsdWUsIHJoc1ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgbG9nPy4oYFRoZSBwcm9wIFwiJHtrZXl9XCIgY2Fubm90IHNpbXVsdGFuZW91c2x5IGJlIHRoZSB2YWx1ZXMgJHtsaHNWYWx1ZX0gYW5kICR7cmhzVmFsdWV9LiBPbmUgbXVzdCBiZSBjaG9zZW4gb3V0c2lkZSBvZiB1c2VNZXJnZWRQcm9wcy5gKTtcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyKGxoc0FsbCwgcmhzQWxsKSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMobGhzQWxsLnJlZiwgcmhzQWxsLnJlZiksXG4gICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzQWxsLnN0eWxlLCByaHNBbGwuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzQWxsW1wiY2xhc3NcIl0sIGxoc0FsbC5jbGFzc05hbWUsIHJoc0FsbFtcImNsYXNzXCJdLCByaHNBbGwuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbC5jaGlsZHJlbiwgcmhzQWxsLmNoaWxkcmVuKSxcbiAgICB9O1xuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0W1wiY2xhc3NcIl0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldFtcImNsYXNzXCJdO1xuICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcbiAgICBmb3IgKGNvbnN0IGxoc0tleVUgaW4gbGhzQWxsKSB7XG4gICAgICAgIGNvbnN0IGxoc0tleSA9IGxoc0tleVU7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG4gICAgZm9yIChjb25zdCByaHNLZXlVIGluIHJoc0FsbCkge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhyaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VVbmtub3duKHJoc0tleSwgcmV0W3Joc0tleV0sIHJoc0FsbFtyaHNLZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBydiA9IHJocyguLi5hcmdzKTtcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLypcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+KHI6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPEU+LCAuLi5vdGhlclByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSB7XG4gICAgcmV0dXJuIFtyLnJlZkVsZW1lbnRSZXR1cm4ucHJvcHNTdGFibGUsIC4uLm90aGVyUHJvcHNdO1xufSovXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IHsgcmVmRWxlbWVudFBhcmFtZXRlcnM6IHsgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQgfSB9ID0gYXJncztcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VSZWZFbGVtZW50XCIsIG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50KTtcbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBbXSk7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWYoeyByZWY6IHNldEVsZW1lbnQgfSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghSFRNTEVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuaW1wb3J0IHN0dWJGYWxzZSBmcm9tICcuL3N0dWJGYWxzZS5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCdWZmZXI7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJwcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwibG9kYXNoLWVzL25vb3BcIjtcbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChjb250ZXh0SW5mby5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGNvbnRleHRJbmZvLmN1cnJlbnQgPSB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9O1xuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZihudWxsKTtcbiAgICBpZiAoYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IC0xO1xuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dEluZm8uY3VycmVudCwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn1cbi8qKlxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICpcbiAqIFBhc3NpbmcgYG51bGxgIGlzIGZpbmUgYW5kIHNpbXBseSBzdG9wcyB0aGUgZWZmZWN0IHVudGlsIHlvdSByZXN0YXJ0IGl0IGJ5IHByb3ZpZGluZyBhIG5vbi1udWxsIGNhbGxiYWNrLlxuICpcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2sgPz8gbm9vcCk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgY29uc3QgU3dhcHBhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsImltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBoLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJ1bkltbWVkaWF0ZWx5IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRDbGFzc0Jhc2UoZ2l2ZW4pIHtcbiAgICByZXR1cm4gZ2l2ZW4gPz8gXCJwdGxcIjtcbn1cbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwibXNcIikpXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcbiAgICAgICAgICAgIHJldHVybiAoK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIG5leHRTdGF0ZS5zcGxpdChcIi1cIik7XG59XG4vKipcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNpdGlvbih7IHNob3c6IHYsIGFuaW1hdGVPbk1vdW50OiBhLCBtZWFzdXJlOiBtLCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBlLCBkdXJhdGlvbjogZCB9KSB7XG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGdldEFuaW1hdGVPbk1vdW50IH0gPSB1c2VDb250ZXh0KFN3YXBwYWJsZUNvbnRleHQpO1xuICAgIGNsYXNzQmFzZSB8fD0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIGUgfHw9IFwiaGlkZGVuXCI7XG4gICAgYSA/Pz0gZ2V0QW5pbWF0ZU9uTW91bnQoKTtcbiAgICBtID8/PSBmYWxzZTtcbiAgICBjb25zdCBnZXRNZWFzdXJlID0gdXNlU3RhYmxlR2V0dGVyKG0pO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIGNsYXNzQmFzZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZSk7XG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQoeyByZWZFbGVtZW50UGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0KFtcbiAgICAgICAgLy8gVGhpcyBpcyByZW1vdmVkIGR1cmluZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAvLyAoYXQgbGVhc3Qgb25jZSBgc2hvd2AgaXMgbm9uLW51bGwpXG4gICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgXSkpO1xuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aW9uLCBwaGFzZV0gPSBwYXJzZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWYoe1xuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gZ2V0RWxlbWVudCgpICYmIGUuZWxhcHNlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IHRpbWUgXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCdzIENTUyBjbGFzcyB0byBtYXRjaCB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGFuZCBwaGFzZS5cbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVDbGFzc2VzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIGRpcmVjdGlvbiwgcGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZW50ZXItaW5pdGAsIGAke2NsYXNzQmFzZX0tZW50ZXItdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZW50ZXItZmluYWxpemVgLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJyZW1vdmVkXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcImhpZGRlblwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn0tJHtwaGFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V4aXRWaXNpYmlsaXR5fWBcbiAgICAgICAgXTtcbiAgICAgICAgLy8obWVhc3VyZSA/IGFsbENsYXNzZXNUb0FkZCA6IGFsbENsYXNzZXNUb1JlbW92ZSkucHVzaChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgdmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWxsIFwibWVhc3VyZVwiIHZhcmlhYmxlcyAob3IgcmVtb3ZlcyB0aGVtKVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZVNpemVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG5leHRTaXplKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS10b3BgLCBuZXh0U2l6ZT8udG9wKTtcbiAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7Y2xhc3NCYXNlfS1tZWFzdXJlLWxlZnRgLCBuZXh0U2l6ZT8ubGVmdCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS13aWR0aGAsIG5leHRTaXplPy53aWR0aCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS1oZWlnaHRgLCBuZXh0U2l6ZT8uaGVpZ2h0KTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG1lYXN1cmUpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydGllcyhlbGVtZW50LCBzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBXZSB1c2UgYm90aCB1c2VUaW1lb3V0IGFuZCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHRpbWluZyBjZXJ0YWluIHRoaW5ncyAtLVxuICAgIC8vIHJhZiBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIGluaXQgdG8gdHJhbnNpdGlvbiAod291bGQgdXNlIHF1ZXVlTWljcm90YXNrIGJ1dCBpdCBjYW4ndCBiZSBjYW5jZWxsZWQpXG4gICAgLy8gc2V0VGltZW91dCBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIHRyYW5zaXRpb24gdG8gZmluYWxpemUgKGFzIGEgYmFja3VwIGluIGNhc2UgdHJhbnNpdGlvbmVuZCBkb2Vzbid0IGZpcmUpXG4gICAgLy9cbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCBzdGFsZSBjYWxsYmFja3MgcnVubmluZyAoaS5lLiB3aGVuIHdlIHJhcGlkbHkgc3dpdGNoIGJldHdlZW4gdmlzaWJsZSBhbmQgbm90KVxuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFjY3VyYXRlbHkgY2FuY2VsIGFueXRoaW5nIHRoYXQgY2FuIGNoYW5nZSBvdXIgc3RhdGUgb24gYSBkZWxheS5cbiAgICAvL1xuICAgIC8vIEFsc28gb2Ygbm90ZSwgd2Ugc3RvcmUgXCIoZikgPT4gd2luZG93LmNsZWFyVGltZW91dChmKVwiIGluc3RlYWQgb2YganVzdCBcIndpbmRvdy5jbGVhclRpbWVvdXRcIiBiZWNhdXNlXG4gICAgLy8gb2YgdGhlIGltcGxpY2l0IHdpbmRvdyBvYmplY3QgLS0gcHJvYmxlbXMgd2l0aCBhIG1pc3NpbmcgYHRoaXNgIG9iamVjdCBhbmQgYWxsIHRoYXQgbm9uc2Vuc2UuXG4gICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHVzZVJlZigtMSk7XG4gICAgY29uc3QgdGltZW91dENsZWFyRnVuY3Rpb24gPSB1c2VSZWYobnVsbCk7XG4gICAgLyoqXG4gICAgICogQW55IHRpbWUgdGhlIHN0YXRlIGNoYW5nZXMsIHRoZXJlJ3Mgc29tZSBsb2dpYyB3ZSBuZWVkIHRvIHJ1bjpcbiAgICAgKlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYW4gYGluaXRgIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCBhIG1vbWVudCBhbmQgdGhlbiBjaGFuZ2UgdG8gdGhlIGB0cmFuc2l0aW9uYCBwaGFzZS5cbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGEgYHRyYW5zaXRpb25gIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCB1bnRpbCB0aGUgdHJhbnNpdGlvbiBjb21wbGV0ZXMsIHRoZW4gY2hhbmdlIHRvIHRoZSBgZmluYWxpemVgIHBoYXNlLlxuICAgICAqXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IFtuZXh0RGlyZWN0aW9uLCBuZXh0UGhhc2VdID0gcGFyc2VTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICBzZXRJc1Zpc2libGUobmV4dERpcmVjdGlvbiA9PSBcImVudGVyXCIgfHwgKG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgJiYgbmV4dFBoYXNlICE9IFwiZmluYWxpemVcIikpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBtZWFzdXJlID0gZ2V0TWVhc3VyZSgpO1xuICAgICAgICAvL2NvbnN0IGR1cmF0aW9uT3ZlcnJpZGUgPSBnZXREdXJhdGlvbk92ZXJyaWRlKCk7XG4gICAgICAgIC8qaWYgKGR1cmF0aW9uT3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZHVyYXRpb25PdmVycmlkZSArIFwibXNcIjtcbiAgICAgICAgICAgIGVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmAsIGAke2R1cmF0aW9uT3ZlcnJpZGV9bXNgKTtcbiAgICAgICAgfSovXG4gICAgICAgIGlmIChtZWFzdXJlICYmIGVsZW1lbnQgJiYgbmV4dFBoYXNlID09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAvLyBXZSBhY3R1YWxseSBuZWVkIGFsbCB0aGVzZSByZWZsb3dzLCBlaXRoZXIgdG8gbWFrZSB0aGluZ3MgbGlrZSBibG9jay1zaXplIHdvcmssIG9yIHRvIG1ha2UgdGhpbmdzIGxpa2Ugb3BhY2l0eSB3b3JrLlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7IC8vIEJ5IG1lYXN1cmluZyB0aGUgZWxlbWVudCBiZWxvdyB3ZSBpbXBsaWNpdGx5IHJlZmxvdywgYnV0IHRoaXMgaXMgYSByZW1pbmRlciB0aGF0IGl0IGhhcHBlbnMuXG4gICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgbWVhc3VyZSk7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBuZXh0UGhhc2UpO1xuICAgICAgICAgICAgLy8gVE9ETzogVW5uZWNlc3NhcnkgcmVmbG93P1xuICAgICAgICAgICAgLy8gSXQgbWlnaHQgb25seSBiZSBuZWNlc3Nhcnkgd2hlbiBjaGFuZ2luZyBmcm9tIC1pbml0IHRvIC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleGl0VmlzaWJpbGl0eSA9IGdldEV4aXRWaXNpYmlsaXR5KCk7XG4gICAgICAgIGlmIChleGl0VmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgY29uc3QgaW5lcnQgPSAoZXhpdFZpc2liaWxpdHkgPT0gXCJpbmVydFwiICYmIG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgPyB0cnVlIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGlmIChpbmVydClcbiAgICAgICAgICAgICAgICBvdGhlclByb3BzLmN1cnJlbnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdGhlclByb3BzLmN1cnJlbnRbXCJpbmVydFwiXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5lcnQgPSAoaW5lcnQgfHwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobmV4dFBoYXNlKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyBzZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS10cmFuc2l0aW9uYCk7IH0pO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSAoZikgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoZik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGYpID0+IGNsZWFyVGltZW91dChmKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJmaW5hbGl6ZVwiOiB7XG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbyBvciBzY2hlZHVsZSBvciBhbnl0aGluZyAtLSB3ZSBqdXN0IHVwZGF0ZSBvdXIgY2xhc3NlcyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IFtnZXRTdGF0ZSwgc2V0U3RhdGVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBJZiBgc2hvd2AgaXMgbnVsbCwgdGhlbiB3ZSBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICAgIGlmICh2ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGBzaG93YCBpcyB0cnVlIG9yIGZhbHNlIChhcyBvcHBvc2VkIHRvIG51bGwpLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIHNlZWluZyBhIG5vbi1udWxsIHZhbHVlLCBcbiAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgaW5kaWNhdGVzIHRoZSBubyB0cmFuc2l0aW9uIGxvZ2ljIGhhcyBzdGFydGVkLlxuICAgICAgICAvLyAoQmVjYXVzZSB0aGlzIGlzIHVzZUxheW91dEVmZmVjdCwgaXQgd2lsbCB0YWtlIGVmZmVjdCBiZWZvcmUgdGhlIGNsYXNzJ3MgZWZmZWN0cyBhcmUgcGFpbnRlZClcbiAgICAgICAgaWYgKCFoYXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuY3VycmVudC5kZWxldGUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgcGVuZGluZyBjbGFzcyBvZnRlbiBtYWtlcyB0aGlzIGhpZGRlbiBvciBkLW5vbmUsIFxuICAgICAgICAgICAgICAgIC8vIGZvcmNlIGEgcmVmbG93IGp1dXVzdCB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2UgPSBcImluaXRcIjtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcbiAgICAgICAgICAgICAgICBuZXh0UGhhc2UgPSBcInRyYW5zaXRpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBlbnRlci0ke25leHRQaGFzZX1gKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFt2XSk7XG4gICAgaWYgKGQgIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZCArIFwibXNcIjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF07XG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHByb3BzU3RhYmxlLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICAgICAgICAuLi5jbGFzc05hbWVzLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V9YCxcbiAgICAgICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLFxuICAgICAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudCxcbiAgICAgICAgICAgIC4uLm90aGVyUHJvcHMuY3VycmVudFxuICAgICAgICB9KVxuICAgIH07XG59XG5jb25zdCBJc1Zpc2libGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlSXNUcmFuc2l0aW9uVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChJc1Zpc2libGVDb250ZXh0KTtcbn1cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uYWJsZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbmFibGUoeyBkZWxheU1vdW50VW50aWxTaG93biwgYW5pbWF0ZU9uTW91bnQsIGR1cmF0aW9uLCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5LCBtZWFzdXJlLCBzaG93LCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSB7XG4gICAgY29uc3QgeyBwcm9wczogdHJhbnNpdGlvblByb3BzLCBpc1Zpc2libGUgfSA9IHVzZVRyYW5zaXRpb24oe1xuICAgICAgICBhbmltYXRlT25Nb3VudCxcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZXhpdFZpc2liaWxpdHksXG4gICAgICAgIG1lYXN1cmUsXG4gICAgICAgIHNob3dcbiAgICB9KTtcbiAgICBjb25zdCBjaGlsZHJlbklzVm5vZGUgPSAoY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSAmJiBjaGlsZHJlbi5wcm9wcyk7XG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHVzZU1lcmdlZFByb3BzKHByb3BzLCB0cmFuc2l0aW9uUHJvcHMsIHsgLi4ucHJvcHMsIHJlZiB9LCBjaGlsZHJlbklzVm5vZGUgPyB7IHJlZjogY2hpbGRyZW4ucmVmLCAuLi5jaGlsZHJlbi5wcm9wcyB9IDoge30pO1xuICAgIC8vIE5vIG1hdHRlciB3aGF0IGRlbGF5TW91bnRVbnRpbFNob3duIGlzLFxuICAgIC8vIG9uY2Ugd2UndmUgcmVuZGVyZWQgb3VyIGNoaWxkcmVuIG9uY2UsIFxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGRvbid0IHVubW91bnQgdGhlbSBhZ2FpbiBhbmQgd2FzdGUgYWxsIHRoYXQgd29yay5cbiAgICAvLyAoSWYgeW91IHJlYWxseSBuZWVkIHRoaXMgeW91IGNhbiBqdXN0IHVubW91bnQgdGhlIGVudGlyZSB0cmFuc2l0aW9uIGl0c2VsZilcbiAgICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IChzaG93IHx8ICFkZWxheU1vdW50VW50aWxTaG93bik7XG4gICAgY29uc3QgaGFzUmVuZGVyZWRDaGlsZHJlbiA9IHVzZVJlZihmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJlbmRlckNoaWxkcmVuKVxuICAgICAgICAgICAgaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50IHx8PSB0cnVlO1xuICAgIH0sIFtoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgPyBmYWxzZSA6IHJlbmRlckNoaWxkcmVuXSk7XG4gICAgaWYgKCFyZW5kZXJDaGlsZHJlbiAmJiAhaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50KVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlUmVmKHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IGZhbHNlIH0pLmN1cnJlbnQ7XG4gICAgbGV0IHJldDtcbiAgICBpZiAoY2hpbGRyZW5Jc1Zub2RlKSB7XG4gICAgICAgIHJldCA9IGgoU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dCB9LCBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGZpbmFsUHJvcHMpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldCA9IGgoU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dCB9LFxuICAgICAgICAgICAgaChcInNwYW5cIiwgeyAuLi5maW5hbFByb3BzIH0sIGNoaWxkcmVuKSk7XG4gICAgfVxuICAgIHJldHVybiAoaChJc1Zpc2libGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBpc1Zpc2libGUgfSwgcmV0KSk7XG59KSk7XG4vLyBUaGlzIGlzbid0IGFjdHVhbGx5IHB1YmxpY2x5IGV4cG9ydGVkLiBJdCdzIGp1c3QgdG8gdHJ5IHRvIG1ha2Ugc3VyZSBpdCdzIG5vdCBvcHRpbWl6ZWQgb3V0LlxuLy8gKFRPRE86IFVubmVlZGVkPylcbmV4cG9ydCBsZXQgX2R1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgX2R1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBfZHVtbXkgPSBlLnN0eWxlLm9wYWNpdHk7XG4gICAgX2R1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgcmV0dXJuIGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiAoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlfS1jbGlwYCksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1taW4taW5saW5lYF06IChjbGlwTWluSW5saW5lID8/IGNsaXBNaW4gPz8gMSksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmV4cG9ydCBjb25zdCBDbGlwID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UsIFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmFkZS1tYXhgXTogKGZhZGVNYXggPz8gMSksXG4gICAgICAgIH1cbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaXBQcm9wcyB9IGZyb20gXCIuL2NsaXBcIjtcbmltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXBGYWRlKHsgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lIH0pLCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cbiAqXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWNvbGxhcHNlYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXG4gICAgICAgIH1cbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxuICpcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXG4gKiBNYWtlIHN1cmUgeW91IGRvIHRlc3Rpbmcgb24gbG93ZXIgcG93ZXIgZGV2aWNlcywgb3IgcHJlZmVyIGEgbGlnaHRlclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2UoeyBjbGFzc0Jhc2UsIHNob3csIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgbWluQmxvY2tTaXplLCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IHRydWUsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9KSkgfSkpO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGFwc2VQcm9wcyB9IGZyb20gXCIuL2NvbGxhcHNlXCI7XG5pbXBvcnQgeyBjcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbjtcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIG1pbkJsb2NrU2l6ZSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogdHJ1ZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pLCBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXG4gICAgICAgIH1cbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSkpIH0pO1xufSkpO1xuLy8gVE9ETzogVGhpcyBsb2dpYyB3YXMgcmVxdWlyZWQgZm9yIHNsaWRlcyBhdCBvbmUgcG9pbnQgdG8gZW5zdXJlIHRoYXQgc2xpZGVUYXJnZXRJbmxpbmU9e2luZGV4IC0gY3VycmVudEluZGV4fSB3b3JrcyByaWdodCxcbi8vIGJ1dCBpdCB3b3JrcyB3aXRob3V0IGl0IG5vdywgc28sIGxpa2UsIHdlJ3JlIGdvb2QgdGhlbj8gV2hpY2ggSSdtIG9rYXkgd2l0aCBiZWNhdXNlIEkgY2FuJ3QgZXhwbGFpbiB0aGUgbG9naWMgaGVyZSBob25lc3RseS5cbi8qZXhwb3J0IGZ1bmN0aW9uIHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lIH06IHsgdGFyZ2V0SW5saW5lPzogbnVtYmVyIHwgbnVsbCwgdGFyZ2V0QmxvY2s/OiBudW1iZXIgfCBudWxsIH0pOiB7IHRhcmdldElubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkLCB0YXJnZXRCbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIH0ge1xuXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHRhcmdldElubGluZSA/PyAxKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZih0YXJnZXRCbG9jayA/PyAwKTtcblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0YXJnZXRJbmxpbmUpIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gdGFyZ2V0SW5saW5lOyB9LCBbdGFyZ2V0SW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRhcmdldEJsb2NrKSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gdGFyZ2V0QmxvY2s7IH0sIFt0YXJnZXRCbG9ja10pO1xuXG4gICAgaWYgKHRhcmdldElubGluZSA9PSAwKVxuICAgICAgICB0YXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAodGFyZ2V0QmxvY2sgPT0gMClcbiAgICAgICAgdGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuXG4gICAgdGFyZ2V0SW5saW5lID8/PSB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0QmxvY2sgPz89IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB0YXJnZXRJbmxpbmUsIHRhcmdldEJsb2NrIH07XG59Ki9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGUoeyBjbGFzc0Jhc2UsIGRlbGF5TW91bnRVbnRpbFNob3duLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICAvLyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0gPSB1c2VTbGlkZVRoaW5nKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSkpO1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pLCBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9KSkgfSkpO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UsIFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiAoe1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tem9vbWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4taW5saW5lYF06IGAkeyh6b29tTWluSW5saW5lID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyhjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVpvb21Qcm9wcyB9IGZyb20gXCIuL3pvb21cIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuO1xuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9KSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XG5pbXBvcnQgeyBjcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbjtcbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICAvLyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0gPSB1c2VTbGlkZVRoaW5nKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSkpO1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9KSwgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20uanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XG5pbXBvcnQgeyBjcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbjtcbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1heCwgZmFkZU1pbiwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIC8vICAoeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pLCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UsIFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtYmxvY2tgXTogYCR7KGZsaXBBbmdsZUJsb2NrID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcCh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gOTApO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gZmxpcEFuZ2xlSW5saW5lOyB9LCBbZmxpcEFuZ2xlSW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xuICAgIGlmIChmbGlwQW5nbGVJbmxpbmUgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKGNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSksIHsgLi4ucmVzdCwgcmVmIH0pIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIHN3YXAgY29udGFpbmVyLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lLCBjbGFzc0Jhc2UgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtjbGFzc0Jhc2V9LXN3YXAtY29udGFpbmVyLWlubGluZWApXG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG4vKipcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxuICpcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cbiAqXG4gKiBMaWtlIGA8VHJhbnNpdGlvbmFibGU+YCwgKnRoaXMgd3JhcHMgYW4gSFRNTEVsZW1lbnQgKG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCkqLiBUaGlzIHdpbGwgYmUgeW91ciBjb250YWluZXIgdGhhdCBob2xkcyBlYWNoIGA8VHJhbnNpdGlvbmFibGU+YCAob3IgY29tcG9uZW50IHRoYXQgdXNlcyBpdCkuIFN0cmljdGx5IHNwZWFraW5nIGl0IGNvdWxkIGJlIGFueXRoaW5nLCBub3QgYSBgPFRyYW5zaXRpb25hYmxlPmAsIGJ1dCBpZiBpdCBkb2VzbnQndCB0cmFuc2l0aW9uIG91dCB0aGVuIGl0J3MganVzdCBnb2luZyB0byBiZSBoYW5naW5nIGFyb3VuZCAxMDAlIG9mIHRoZSB0aW1lLlxuICpcbiAqIExvbmcgd2F5IG9mIHNheWluZywgaWYgeW91IGdldCBhIGNyeXB0aWMgZXJyb3Igd2l0aCB0aGlzIGNvbXBvbmVudCwgbWFrZSBzdXJlIGl0IGhhcyBhIHNpbmdsZSBgPGRpdj5gIGNoaWxkIG9yIHNvbWV0aGluZy5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZSh7IGNoaWxkcmVuOiBjLCBjbGFzc0Jhc2UsIGlubGluZSwgLi4ucCB9LCByZWYpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGM7XG4gICAgY29uc29sZS5hc3NlcnQoISFjaGlsZHJlbi50eXBlKTtcbiAgICBpbmxpbmUgPz89IHR5cGVvZiBjaGlsZHJlbi50eXBlID09PSBcInN0cmluZ1wiICYmIGlubGluZUVsZW1lbnRzLmhhcyhjaGlsZHJlbi50eXBlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGNsYXNzQmFzZSwgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW4ucHJvcHMpO1xuICAgIGNvbnN0IGFuaW1hdGVPbk1vdW50ID0gdXNlUmVmKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhbmltYXRlT25Nb3VudC5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlUmVmKHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IHsgcmV0dXJuIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQ7IH0gfSk7XG4gICAgcmV0dXJuIChoKFN3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHRWYWx1ZS5jdXJyZW50IH0sIGNsb25lRWxlbWVudChjaGlsZHJlbiwgbWVyZ2VkV2l0aENoaWxkcmVuKSkpO1xufSkpO1xuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhXCIsXG4gICAgXCJhYmJyXCIsXG4gICAgXCJhY3JvbnltXCIsXG4gICAgXCJhdWRpb1wiLFxuICAgIFwiYlwiLFxuICAgIFwiYmRpXCIsXG4gICAgXCJiZG9cIixcbiAgICBcImJpZ1wiLFxuICAgIFwiYnJcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiY2FudmFzXCIsXG4gICAgXCJjaXRlXCIsXG4gICAgXCJjb2RlXCIsXG4gICAgXCJkYXRhXCIsXG4gICAgXCJkYXRhbGlzdFwiLFxuICAgIFwiZGVsXCIsXG4gICAgXCJkZm5cIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaVwiLFxuICAgIFwiaWZyYW1lXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnNcIixcbiAgICBcImtiZFwiLFxuICAgIFwibGFiZWxcIixcbiAgICBcIm1hcFwiLFxuICAgIFwibWFya1wiLFxuICAgIFwibWV0ZXJcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGljdHVyZVwiLFxuICAgIFwicHJvZ3Jlc3NcIixcbiAgICBcInFcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNhbXBcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJzbG90XCIsXG4gICAgXCJzbWFsbFwiLFxuICAgIFwic3BhblwiLFxuICAgIFwic3Ryb25nXCIsXG4gICAgXCJzdWJcIixcbiAgICBcInN1cFwiLFxuICAgIFwic3ZnXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBcInRpbWVcIixcbiAgICBcInVcIixcbiAgICBcInR0XCIsXG4gICAgXCJ2YXJcIixcbiAgICBcInZpZGVvXCIsXG4gICAgXCJ3YnJcIlxuXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsibiIsImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJoIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2FsbCIsImRlZmF1bHRQcm9wcyIsInYiLCJ0eXBlIiwicHJvcHMiLCJrZXkiLCJyZWYiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192Iiwidm5vZGUiLCJwIiwiZCIsImNvbnRleHQiLCJfIiwiaW5kZXhPZiIsImsiLCJiYXNlIiwiYiIsInB1c2giLCJnIiwiX19yIiwiZGVib3VuY2VSZW5kZXJpbmciLCJzZXRUaW1lb3V0Iiwic29ydCIsInNvbWUiLCJfX1AiLCJqIiwiX19uIiwib3duZXJTVkdFbGVtZW50IiwieiIsInciLCJ5IiwieCIsIkMiLCJBcnJheSIsImlzQXJyYXkiLCJtIiwiQSIsIk4iLCJNIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsIkgiLCIkIiwic2V0UHJvcGVydHkiLCJ0ZXN0Iiwic3R5bGUiLCJjc3NUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiVCIsIkkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJjb250ZXh0VHlwZSIsInZhbHVlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiTyIsInN1YiIsInN0YXRlIiwiX3NiIiwiX19zIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiZm9yRWFjaCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsIkwiLCJkaWZmZWQiLCJsb2NhbE5hbWUiLCJub2RlVHlwZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiaXMiLCJkYXRhIiwiY2hpbGROb2RlcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJjaGVja2VkIiwiY3VycmVudCIsInVubW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIlAiLCJmaXJzdENoaWxkIiwicSIsIkIiLCJDb25zdW1lciIsIlByb3ZpZGVyIiwic3BsaWNlIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsImZvcmNlVXBkYXRlIiwiX19IIiwiX19WIiwiX19OIiwiZmlsdGVyIiwiZXZlcnkiLCJGIiwic2hpZnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIlIiLCJkaXNwbGF5TmFtZSIsImlzUmVhY3RDb21wb25lbnQiLCJfX2YiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIlN5bWJvbCIsImZvciIsIiQkdHlwZW9mIiwidGhlbiIsIm1hcCIsIlUiLCJEIiwiX191IiwiX19hIiwiViIsIl9fUiIsIl9fTyIsInBvcCIsImZhbGxiYWNrIiwiVyIsImRlbGV0ZSIsInJldmVhbE9yZGVyIiwic2l6ZSIsImdldCIsIk1hcCIsInJldmVyc2UiLCJzZXQiLCJaIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkciLCJKIiwiSyIsImNhbmNlbEJ1YmJsZSIsIlEiLCJkZWZhdWx0UHJldmVudGVkIiwicGVyc2lzdCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwibmF0aXZlRXZlbnQiLCJubiIsImNsYXNzIiwidG4iLCJtdWx0aXBsZSIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlIiwiY2xhc3NOYW1lIiwiZW51bWVyYWJsZSIsImVuIiwiZm9yd2FyZEVsZW1lbnRSZWYiLCJDb21wb25lbnQiLCJGb3J3YXJkZWRDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwidXNlRW5zdXJlU3RhYmlsaXR5IiwicGFyZW50SG9va05hbWUiLCJ2YWx1ZXMiLCJoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSIsInVzZVJlZiIsInNob3duRXJyb3IiLCJ1c2VIZWxwZXIiLCJpbmRleCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwidXNlUGFzc2l2ZVN0YXRlIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsVmFsdWUiLCJjdXN0b21EZWJvdW5jZVJlbmRlcmluZyIsInZhbHVlUmVmIiwiVW5zZXQiLCJyZWFzb25SZWYiLCJ3YXJuaW5nUmVmIiwiZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QiLCJjbGVhbnVwQ2FsbGJhY2tSZWYiLCJvblNob3VsZENsZWFuVXAiLCJ1c2VDYWxsYmFjayIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiZXgiLCJnZXRWYWx1ZSIsIndhcm4iLCJ1c2VMYXlvdXRFZmZlY3QiLCJzZXRWYWx1ZSIsImFyZyIsInJlYXNvbiIsIm5leHRWYWx1ZSIsIkZ1bmN0aW9uIiwibmV4dFJlYXNvbiIsIm5leHREZXAiLCJwcmV2RGVwIiwicmV0dXJuTnVsbCIsInJ1bkltbWVkaWF0ZWx5IiwiVGFibGUiLCJiYXNlNjQiLCJyYW5kb202Qml0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbTY0Qml0cyIsImdlbmVyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJqb2luIiwicHJldmlvdXNJbnB1dHMiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImFyZ3NDaGFuZ2VkIiwiaW5wdXRzIiwiY2xlYW51cCIsImVmZmVjdCIsImNsZWFyIiwiYXJncyIsInVzZUJlZm9yZUxheW91dEVmZmVjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib2xkQXJncyIsIm5ld0FyZ3MiLCJ1c2VTdGFibGVHZXR0ZXIiLCJFcnJvciIsInVzZU1lcmdlZENoaWxkcmVuIiwibGhzIiwicmhzIiwiRnJhZ21lbnQiLCJjbHN4IiwidXNlTWVyZ2VkQ2xhc3NlcyIsImxoc0NsYXNzIiwibGhzQ2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwic3BsaXQiLCJyaHNDbGFzc2VzIiwiYWxsQ2xhc3NlcyIsIlNldCIsImZyb20iLCJwcm9jZXNzUmVmIiwiaW5zdGFuY2UiLCJhc3NlcnQiLCJ1c2VNZXJnZWRSZWZzIiwiY29tYmluZWQiLCJzdHlsZVN0cmluZ1RvT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzdGF0ZW1lbnQiLCJ1c2VNZXJnZWRTdHlsZXMiLCJsb2ciLCJ1c2VNZXJnZWRQcm9wcyIsImFsbFByb3BzIiwicmV0IiwibmV4dFByb3BzIiwidXNlTWVyZ2VkUHJvcHMyIiwia25vd25zIiwibWVyZ2VVbmtub3duIiwibGhzVmFsdWUiLCJyaHNWYWx1ZSIsIm1lcmdlZCIsIm1lcmdlRnVuY3Rpb25zIiwibGhzQWxsIiwicmhzQWxsIiwibGhzS2V5VSIsImxoc0tleSIsImhhcyIsInJoc0tleVUiLCJyaHNLZXkiLCJsdiIsInJ2IiwiUHJvbWlzZSIsImFsbCIsInVzZVJlZkVsZW1lbnQiLCJyZWZFbGVtZW50UGFyYW1ldGVycyIsIm9uRWxlbWVudENoYW5nZSIsIm9uTW91bnQiLCJvblVubW91bnQiLCJoYW5kbGVyIiwicHJldlZhbHVlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJwcm9wc1N0YWJsZSIsInJlZkVsZW1lbnRSZXR1cm4iLCJfYSIsIl9iIiwiX2MiLCJfYmxvY2tpbmdFbGVtZW50cyIsIl9hbHJlYWR5SW5lcnRFbGVtZW50cyIsIl90b3BFbFBhcmVudHMiLCJfc2libGluZ3NUb1Jlc3RvcmUiLCJfcGFyZW50TU8iLCJfdG9wQ2hhbmdlZCIsIl9zd2FwSW5lcnRlZFNpYmxpbmciLCJfaW5lcnRTaWJsaW5ncyIsIl9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzIiwiX2dldFBhcmVudHMiLCJfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiIsIl9pc0luZXJ0YWJsZSIsIl9oYW5kbGVNdXRhdGlvbnMiLCJCbG9ja2luZ0VsZW1lbnRzSW1wbCIsImRlc3RydWN0b3IiLCJudWxsYWJsZSIsInRvcCIsImVsZW1zIiwiZWxlbWVudCIsInJlbW92ZSIsIm5ld1RvcCIsInRvS2VlcEluZXJ0Iiwib2xkUGFyZW50cyIsIm5ld1BhcmVudHMiLCJib2R5IiwidG9Ta2lwIiwib2xkSW5lcnQiLCJuZXdJbmVydCIsInNpYmxpbmdzVG9SZXN0b3JlIiwiaW5lcnQiLCJhZGQiLCJlbGVtZW50cyIsIm1vIiwiZGlzY29ubmVjdCIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudCIsImluZXJ0ZWRTaWJsaW5ncyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJtdXRhdGlvbnMiLCJwYXJlbnRzIiwibXV0YXRpb24iLCJ0YXJnZXQiLCJpZHgiLCJpbmVydGVkQ2hpbGQiLCJyZW1vdmVkTm9kZXMiLCJpbmZvIiwiYWRkZWROb2RlcyIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhc3NpZ25lZFNsb3QiLCJzaGFkb3dSb290IiwicmVzdWx0Iiwibm9kZXMiLCJzbG90cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIiRibG9ja2luZ0VsZW1lbnRzIiwiZ2xvYmFsIiwiZmFjdG9yeSIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiVHlwZUVycm9yIiwid2luZG93IiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsInN1YnRyZWUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwibm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwicm9vdCIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJfYWRvcHRJbmVydFJvb3QiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290IiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJfb25Eb2N1bWVudExvYWRlZCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0IiwiY2FsbGJhY2siLCJzaGFkb3dSb290QW5jZXN0b3IiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJfaSIsImNoaWxkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiSFRNTEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXRpYWxTdGF0ZSIsInNldFN0YXRlUCIsInVzZVN0YXRlUCIsImdldFN0YXRlIiwiaXNOYU4iLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsImlzQnVmZmVyIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwiaXNUeXBlZEFycmF5IiwiY3JlYXRlQ29udGV4dCIsIlN3YXBwYWJsZUNvbnRleHQiLCJnZXRBbmltYXRlT25Nb3VudCIsImRlZmF1bHRDbGFzc0Jhc2UiLCJnaXZlbiIsImdldFRpbWVvdXREdXJhdGlvbiIsIm1heCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3RyIiwiZW5kc1dpdGgiLCJzdWJzdHJpbmciLCJwYXJzZVN0YXRlIiwibmV4dFN0YXRlIiwidXNlVHJhbnNpdGlvbiIsInNob3ciLCJhbmltYXRlT25Nb3VudCIsIm1lYXN1cmUiLCJjbGFzc0Jhc2UiLCJleGl0VmlzaWJpbGl0eSIsImR1cmF0aW9uIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidXNlQ29udGV4dCIsImdldE1lYXN1cmUiLCJnZXRFeGl0VmlzaWJpbGl0eSIsImNzc1Byb3BlcnRpZXMiLCJjbGFzc05hbWVzIiwiaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkIiwiZGlyZWN0aW9uIiwicGhhc2UiLCJ0aW1lb3V0SGFuZGxlIiwidGltZW91dENsZWFyRnVuY3Rpb24iLCJvdGhlclByb3BzIiwib25UcmFuc2l0aW9uRW5kIiwiZWxhcHNlZFRpbWUiLCJoYXNNb3VudGVkIiwidXBkYXRlQ2xhc3NlcyIsImFsbENsYXNzZXNUb1JlbW92ZSIsImFsbENsYXNzZXNUb0FkZCIsImNsYXNzTGlzdCIsInVwZGF0ZVNpemVQcm9wZXJ0eSIsInZhck5hbWUiLCJyZW1vdmVQcm9wZXJ0eSIsInVwZGF0ZVNpemVQcm9wZXJ0aWVzIiwibmV4dFNpemUiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvblN0YXRlQ2hhbmdlIiwicHJldlN0YXRlIiwibmV4dERpcmVjdGlvbiIsIm5leHRQaGFzZSIsImZvcmNlUmVmbG93IiwiY3VycmVudFN0YXRlIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRQaGFzZSIsIklzVmlzaWJsZUNvbnRleHQiLCJUcmFuc2l0aW9uYWJsZSIsIm1lbW8iLCJkZWxheU1vdW50VW50aWxTaG93biIsInRyYW5zaXRpb25Qcm9wcyIsImNoaWxkcmVuSXNWbm9kZSIsImZpbmFsUHJvcHMiLCJyZW5kZXJDaGlsZHJlbiIsImhhc1JlbmRlcmVkQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiY3JlYXRlQ2xpcFByb3BzIiwiY2xpcE1pbiIsImNsaXBNaW5CbG9jayIsImNsaXBNaW5JbmxpbmUiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE9yaWdpbklubGluZSIsIkNsaXAiLCJyZXN0IiwiY3JlYXRlRmFkZVByb3BzIiwiZmFkZU1pbiIsImZhZGVNYXgiLCJGYWRlIiwiQ2xpcEZhZGUiLCJjcmVhdGVDb2xsYXBzZVByb3BzIiwibWluQmxvY2tTaXplIiwiQ29sbGFwc2UiLCJDb2xsYXBzZUZhZGUiLCJjcmVhdGVTbGlkZVByb3BzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwiU2xpZGUiLCJTbGlkZUZhZGUiLCJjcmVhdGVab29tUHJvcHMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIlpvb21GYWRlIiwiU2xpZGVab29tIiwiU2xpZGVab29tRmFkZSIsImNyZWF0ZUZsaXBQcm9wcyIsImZsaXBBbmdsZUlubGluZSIsImZsaXBBbmdsZUJsb2NrIiwicGVyc3BlY3RpdmUiLCJGbGlwIiwibGFzdFZhbGlkVGFyZ2V0SW5saW5lIiwibGFzdFZhbGlkVGFyZ2V0QmxvY2siLCJ1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyIsImlubGluZSIsIlN3YXBwYWJsZSIsImlubGluZUVsZW1lbnRzIiwibWVyZ2VkV2l0aENoaWxkcmVuIiwiY29udGV4dFZhbHVlIiwiaGFsZlRleHQiLCJpbnB1dCIsInRpbWVzIiwic3Vic3RyIiwiRGVtbyIsInNldEFuaW1hdGVPbk1vdW50Iiwid3JpdGluZ01vZGUiLCJzZXRXcml0aW5nTW9kZSIsInNob3cxIiwic2V0U2hvdzEiLCJzaG93MyIsInNldFNob3czIiwicmVmbG93Iiwic2V0UmVmbG93Iiwic2V0RHVyYXRpb24iLCJ0ZXh0Iiwic2V0VGV4dCIsImZsaWNrZXIiLCJzZXRGbGlja2VyIiwib25JbnB1dDMiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW5wdXQ0Iiwib25JbnB1dDUiLCJvbklucHV0NWIiLCJvbklucHV0NiIsIm9uSW5wdXQ3Iiwib25JbnB1dDgiLCJ2YWx1ZUFzTnVtYmVyIiwib25JbnB1dEEiLCJvbklucHV0QiIsIm9uSW5wdXRDIiwib25DbGljayIsIm9uSW5wdXQiLCJjb2xzIiwicm93cyIsIkZhZGVEZW1vIiwiY2FyZFNob3ciLCJjb250ZW50SW5kZXgiLCJTbGlkZURlbW8iLCJab29tRGVtbyIsIkNsaXBEZW1vIiwiQ29sbGFwc2VEZW1vIiwiWm9vbVNsaWRlRGVtbyIsIkZsaXBEZW1vIiwibWluIiwic2V0TWluIiwic2V0TWF4Iiwib25NaW5JbnB1dCIsIm9uTWF4SW5wdXQiLCJDUyIsIm1ha2VDaGlsZCIsInN0ZXAiLCJvcmlnaW5YIiwic2V0T3JpZ2luWCIsIm9yaWdpblkiLCJzZXRPcmlnaW5ZIiwibWluWCIsInNldE1pblgiLCJtaW5ZIiwic2V0TWluWSIsIndpdGhGYWRlIiwic2V0V2l0aEZhZGUiLCJvbk9yaWdpblhJbnB1dCIsIm9uT3JpZ2luWUlucHV0Iiwib25NaW5YSW5wdXQiLCJvbk1pbllJbnB1dCIsIm9uV2l0aEZhZGVJbnB1dCIsInNsaWRlWCIsInNldFNsaWRlWCIsInNsaWRlWSIsInNldFNsaWRlWSIsIm9uU2xpZGVYSW5wdXQiLCJvblNsaWRlWUlucHV0Iiwic2lnbiIsInNldE1pbkJsb2NrU2l6ZSIsIm9uTWluU2l6ZSIsImZsaXBYIiwic2V0RmxpcFgiLCJmbGlwWSIsInNldEZsaXBZIiwib25GbGlwWElucHV0Iiwib25GbGlwWUlucHV0IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFHLElBQUNBLENBQUM7SUFBQ0MsR0FBQztJQUFDQyxHQUFDO0lBQUdDLEdBQUM7SUFBQ0MsR0FBQztJQUFDQyxHQUFDO0lBQUNDLEdBQUMsR0FBQyxFQUFFO0lBQUNDLEdBQUMsR0FBQyxFQUFFO0lBQUNDLEdBQUMsR0FBQyxtRUFBQTtFQUFvRSxTQUFTQyxHQUFDLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxF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SUFBSTBDLEVBQUUsWUFBWUUsT0FBTyxJQUFJRCxFQUFFLFlBQVlDLE9BQU8sRUFDOUMsT0FBT0EsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0gsRUFBRSxFQUFFQyxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFLO0VBQ0w7RUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VDalFBO0FBQ0E7QUFDQTtBQUNBO0VBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ08sU0FBU0csYUFBYSxDQUFDeEQsSUFBSSxFQUFFO0lBQ2hDLElBQU07TUFBRXlELG9CQUFvQixFQUFFO1FBQUVDLGVBQWU7UUFBRUMsT0FBTztRQUFFQztNQUFTO0lBQUksQ0FBQSxHQUFHNUQsSUFBSTtJQUM5RWxFLGtCQUFrQixDQUFDLGVBQWUsRUFBRTRILGVBQWUsRUFBRUMsT0FBTyxFQUFFQyxTQUFTLENBQUM7SUFDNUU7SUFDSSxJQUFNQyxPQUFPLEdBQUd0RyxHQUFXLENBQUMsQ0FBQzFOLENBQUMsRUFBRWlVLFNBQVMsS0FBSztNQUMxQyxJQUFNakUsT0FBTyxHQUFHNkQsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUc3VCxDQUFDLEVBQUVpVSxTQUFTLENBQUM7TUFDL0MsSUFBSUEsU0FBUyxFQUNURixTQUFTLGFBQVRBLFNBQVMsdUJBQVRBLFNBQVMsQ0FBR0UsU0FBUyxDQUFDO01BQzFCLElBQUlqVSxDQUFDLEVBQ0Q4VCxPQUFPLGFBQVBBLE9BQU8sdUJBQVBBLE9BQU8sQ0FBRzlULENBQUMsQ0FBQztNQUNoQixPQUFPZ1EsT0FBTztJQUNqQixDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ1Y7SUFDSSxJQUFNLENBQUNrRSxVQUFVLEVBQUVDLFVBQVUsQ0FBQyxHQUFHcEgsZUFBZSxDQUFDaUgsT0FBTyxFQUFFdEYsVUFBVSxFQUFFQyxjQUFjLENBQUM7SUFDckYsSUFBTXlGLFdBQVcsR0FBRy9ILENBQU0sQ0FBQztNQUFFcEwsR0FBRyxFQUFFa1Q7SUFBWSxDQUFBLENBQUM7SUFDbkQ7SUFDQTtJQUNJLE9BQU87TUFDSEUsZ0JBQWdCLEVBQUU7UUFDZEgsVUFBVTtRQUNWRSxXQUFXLEVBQUVBLFdBQVcsQ0FBQ2xOO01BQzVCO0lBQ1QsQ0FBSztFQUNMOztFQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBLENBQUMsTUFBTTtJQUNILElBQUlvTixFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRTtJQUNsQjtJQUNJLElBQU1DLGlCQUFpQixHQUFHMUwsTUFBTSxFQUFFO0lBQ2xDLElBQU0yTCxxQkFBcUIsR0FBRzNMLE1BQU0sRUFBRTtJQUN0QyxJQUFNNEwsYUFBYSxHQUFHNUwsTUFBTSxFQUFFO0lBQzlCLElBQU02TCxrQkFBa0IsR0FBRzdMLE1BQU0sRUFBRTtJQUNuQyxJQUFNOEwsU0FBUyxHQUFHOUwsTUFBTSxFQUFFO0lBQzlCO0lBQ0ksSUFBTStMLFdBQVcsR0FBRy9MLE1BQU0sRUFBRTtJQUM1QixJQUFNZ00sbUJBQW1CLEdBQUdoTSxNQUFNLEVBQUU7SUFDcEMsSUFBTWlNLGNBQWMsR0FBR2pNLE1BQU0sRUFBRTtJQUMvQixJQUFNa00sdUJBQXVCLEdBQUdsTSxNQUFNLEVBQUU7SUFDeEMsSUFBTW1NLFdBQVcsR0FBR25NLE1BQU0sRUFBRTtJQUM1QixJQUFNb00sdUJBQXVCLEdBQUdwTSxNQUFNLEVBQUU7SUFDeEMsSUFBTXFNLFlBQVksR0FBR3JNLE1BQU0sRUFBRTtJQUM3QixJQUFNc00sZ0JBQWdCLEdBQUd0TSxNQUFNLEVBQUU7SUFDakMsTUFBTXVNLG9CQUFvQixDQUFDO01BQ3ZCN1QsV0FBVyxHQUFHO1FBQ3RCO0FBQ0E7QUFDQTtRQUNZLElBQUksQ0FBQzZTLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ1ksSUFBSSxDQUFDQyxFQUFFLENBQUMsR0FBRyxFQUFFO1FBQ3pCO0FBQ0E7QUFDQTtBQUNBO1FBQ1ksSUFBSSxDQUFDQyxFQUFFLENBQUMsR0FBRyxJQUFJL0MsR0FBRyxFQUFFO01BQ3ZCO01BQ0Q4RCxVQUFVLEdBQUc7UUFDckI7UUFDWSxJQUFJLENBQUNOLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDTixhQUFhLENBQUMsQ0FBQztRQUM5RDtRQUNBO1FBQ0E7UUFDQTtRQUNZLElBQU1hLFFBQVEsR0FBRyxJQUFJO1FBQ3JCQSxRQUFRLENBQUNmLGlCQUFpQixDQUFDLEdBQUcsSUFBSTtRQUNsQ2UsUUFBUSxDQUFDYixhQUFhLENBQUMsR0FBRyxJQUFJO1FBQzlCYSxRQUFRLENBQUNkLHFCQUFxQixDQUFDLEdBQUcsSUFBSTtNQUN6QztNQUNELElBQUllLEdBQUcsR0FBRztRQUNOLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNqQixpQkFBaUIsQ0FBQztRQUNyQyxPQUFPaUIsS0FBSyxDQUFDQSxLQUFLLENBQUNqVixNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSTtNQUN6QztNQUNEMkIsSUFBSSxDQUFDdVQsT0FBTyxFQUFFO1FBQ1YsSUFBSSxDQUFDQSxPQUFPLElBQUlBLE9BQU8sS0FBSyxJQUFJLENBQUNGLEdBQUcsRUFBRTtVQUNsQztRQUNIO1FBQ2I7UUFDWSxJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDO1FBQ3BCLElBQUksQ0FBQ2IsV0FBVyxDQUFDLENBQUNhLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUNsQixpQkFBaUIsQ0FBQyxDQUFDclMsSUFBSSxDQUFDdVQsT0FBTyxDQUFDO01BQ3hDO01BQ0RDLE1BQU0sQ0FBQ0QsT0FBTyxFQUFFO1FBQ1osSUFBTXBWLENBQUMsR0FBRyxJQUFJLENBQUNrVSxpQkFBaUIsQ0FBQyxDQUFDelMsT0FBTyxDQUFDMlQsT0FBTyxDQUFDO1FBQ2xELElBQUlwVixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7VUFDVixPQUFPLEtBQUs7UUFDZjtRQUNELElBQUksQ0FBQ2tVLGlCQUFpQixDQUFDLENBQUM5TSxNQUFNLENBQUNwSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hEO1FBQ1ksSUFBSUEsQ0FBQyxLQUFLLElBQUksQ0FBQ2tVLGlCQUFpQixDQUFDLENBQUNoVSxNQUFNLEVBQUU7VUFDdEMsSUFBSSxDQUFDcVUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDVyxHQUFHLENBQUM7UUFDOUI7UUFDRCxPQUFPLElBQUk7TUFDZDtNQUNEOUwsR0FBRyxHQUFHO1FBQ0YsSUFBTThMLEdBQUcsR0FBRyxJQUFJLENBQUNBLEdBQUc7UUFDcEJBLEdBQUcsSUFBSSxJQUFJLENBQUNHLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDO1FBQ3ZCLE9BQU9BLEdBQUc7TUFDYjtNQUNEckMsR0FBRyxDQUFDdUMsT0FBTyxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUNsQixpQkFBaUIsQ0FBQyxDQUFDelMsT0FBTyxDQUFDMlQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO01BQ3pEO01BQ1Q7QUFDQTtBQUNBO0FBQ0E7TUFDUSxFQUFFckIsRUFBRSxHQUFHRyxpQkFBaUIsRUFBRUYsRUFBRSxHQUFHSSxhQUFhLEVBQUVILEVBQUUsR0FBR0UscUJBQXFCLEVBQUVJLFdBQVcsR0FBR2UsTUFBTSxFQUFFO1FBQzVGLElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNwQixxQkFBcUIsQ0FBQztRQUMvQyxJQUFNcUIsVUFBVSxHQUFHLElBQUksQ0FBQ3BCLGFBQWEsQ0FBQztRQUNsRDtRQUNZLElBQUksQ0FBQ2tCLE1BQU0sRUFBRTtVQUNULElBQUksQ0FBQ1osdUJBQXVCLENBQUMsQ0FBQ2MsVUFBVSxDQUFDO1VBQ3pDRCxXQUFXLENBQUM1RixLQUFLLEVBQUU7VUFDbkIsSUFBSSxDQUFDeUUsYUFBYSxDQUFDLEdBQUcsRUFBRTtVQUN4QjtRQUNIO1FBQ0QsSUFBTXFCLFVBQVUsR0FBRyxJQUFJLENBQUNkLFdBQVcsQ0FBQyxDQUFDVyxNQUFNLENBQUM7UUFDeEQ7UUFDWSxJQUFJRyxVQUFVLENBQUNBLFVBQVUsQ0FBQ3ZWLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQ0wsVUFBVSxLQUFLaUcsUUFBUSxDQUFDNFAsSUFBSSxFQUFFO1VBQ2hFLE1BQU12RixLQUFLLENBQUMsb0RBQW9ELENBQUM7UUFDcEU7UUFDYjtRQUNBO1FBQ1ksSUFBSSxDQUFDaUUsYUFBYSxDQUFDLEdBQUdxQixVQUFVO1FBQ2hDLElBQU1FLE1BQU0sR0FBRyxJQUFJLENBQUNmLHVCQUF1QixDQUFDLENBQUNVLE1BQU0sQ0FBQztRQUNoRTtRQUNZLElBQUksQ0FBQ0UsVUFBVSxDQUFDdFYsTUFBTSxFQUFFO1VBQ3BCLElBQUksQ0FBQ3VVLGNBQWMsQ0FBQyxDQUFDZ0IsVUFBVSxFQUFFRSxNQUFNLEVBQUVKLFdBQVcsQ0FBQztVQUNyRDtRQUNIO1FBQ0QsSUFBSXZWLENBQUMsR0FBR3dWLFVBQVUsQ0FBQ3RWLE1BQU0sR0FBRyxDQUFDO1FBQzdCLElBQUltQyxDQUFDLEdBQUdvVCxVQUFVLENBQUN2VixNQUFNLEdBQUcsQ0FBQztRQUN6QztRQUNZLE9BQU9GLENBQUMsR0FBRyxDQUFDLElBQUlxQyxDQUFDLEdBQUcsQ0FBQyxJQUFJbVQsVUFBVSxDQUFDeFYsQ0FBQyxDQUFDLEtBQUt5VixVQUFVLENBQUNwVCxDQUFDLENBQUMsRUFBRTtVQUN0RHJDLENBQUMsRUFBRTtVQUNIcUMsQ0FBQyxFQUFFO1FBQ047UUFDYjtRQUNBO1FBQ1ksSUFBSW1ULFVBQVUsQ0FBQ3hWLENBQUMsQ0FBQyxLQUFLeVYsVUFBVSxDQUFDcFQsQ0FBQyxDQUFDLEVBQUU7VUFDakMsSUFBSSxDQUFDbVMsbUJBQW1CLENBQUMsQ0FBQ2dCLFVBQVUsQ0FBQ3hWLENBQUMsQ0FBQyxFQUFFeVYsVUFBVSxDQUFDcFQsQ0FBQyxDQUFDLENBQUM7UUFDMUQ7UUFDYjtRQUNZckMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMwVSx1QkFBdUIsQ0FBQyxDQUFDYyxVQUFVLENBQUMxUixLQUFLLENBQUMsQ0FBQyxFQUFFOUQsQ0FBQyxDQUFDLENBQUM7UUFDMUU7UUFDWXFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDb1MsY0FBYyxDQUFDLENBQUNnQixVQUFVLENBQUMzUixLQUFLLENBQUMsQ0FBQyxFQUFFekIsQ0FBQyxDQUFDLEVBQUVzVCxNQUFNLEVBQUUsSUFBSSxDQUFDO01BQ3RFO01BQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ1EsQ0FBQ25CLG1CQUFtQixFQUFFb0IsUUFBUSxFQUFFQyxRQUFRLEVBQUU7UUFDdEMsSUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ3ZCLGtCQUFrQixDQUFDO1FBQ2xFO1FBQ0E7UUFDWSxJQUFJLElBQUksQ0FBQ1EsWUFBWSxDQUFDLENBQUNlLFFBQVEsQ0FBQyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0csS0FBSyxFQUFFO1VBQ2pESCxRQUFRLENBQUNHLEtBQUssR0FBRyxJQUFJO1VBQ3JCRCxpQkFBaUIsQ0FBQ0UsR0FBRyxDQUFDSixRQUFRLENBQUM7UUFDbEM7UUFDYjtRQUNBO1FBQ1ksSUFBSUUsaUJBQWlCLENBQUNqRCxHQUFHLENBQUNnRCxRQUFRLENBQUMsRUFBRTtVQUNqQ0EsUUFBUSxDQUFDRSxLQUFLLEdBQUcsS0FBSztVQUN0QkQsaUJBQWlCLENBQUN2TSxNQUFNLENBQUNzTSxRQUFRLENBQUM7UUFDckM7UUFDREEsUUFBUSxDQUFDdkIsU0FBUyxDQUFDLEdBQUdzQixRQUFRLENBQUN0QixTQUFTLENBQUM7UUFDekN1QixRQUFRLENBQUN4QixrQkFBa0IsQ0FBQyxHQUFHeUIsaUJBQWlCO1FBQ2hERixRQUFRLENBQUN0QixTQUFTLENBQUMsR0FBR3BJLFNBQVM7UUFDL0IwSixRQUFRLENBQUN2QixrQkFBa0IsQ0FBQyxHQUFHbkksU0FBUztNQUMzQztNQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNRLENBQUN3SSx1QkFBdUIsRUFBRXVCLFFBQVEsRUFBRTtRQUNoQyxLQUFLLElBQU1iLE9BQU8sSUFBSWEsUUFBUSxFQUFFO1VBQzVCLElBQU1DLEVBQUUsR0FBR2QsT0FBTyxDQUFDZCxTQUFTLENBQUM7VUFDN0I0QixFQUFFLENBQUNDLFVBQVUsRUFBRTtVQUNmZixPQUFPLENBQUNkLFNBQVMsQ0FBQyxHQUFHcEksU0FBUztVQUM5QixJQUFNa0ssUUFBUSxHQUFHaEIsT0FBTyxDQUFDZixrQkFBa0IsQ0FBQztVQUM1QyxLQUFLLElBQU1nQyxPQUFPLElBQUlELFFBQVEsRUFBRTtZQUM1QkMsT0FBTyxDQUFDTixLQUFLLEdBQUcsS0FBSztVQUN4QjtVQUNEWCxPQUFPLENBQUNmLGtCQUFrQixDQUFDLEdBQUduSSxTQUFTO1FBQzFDO01BQ0o7TUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ1EsQ0FBQ3VJLGNBQWMsRUFBRXdCLFFBQVEsRUFBRU4sTUFBTSxFQUFFSixXQUFXLEVBQUU7UUFDNUMsS0FBSyxJQUFNSCxPQUFPLElBQUlhLFFBQVEsRUFBRTtVQUM1QztVQUNnQixJQUFNSyxNQUFNLEdBQUdsQixPQUFPLENBQUN2VixVQUFVO1VBQ2pDLElBQU1NLFFBQVEsR0FBR21XLE1BQU0sQ0FBQ25XLFFBQVE7VUFDaEMsSUFBTW9XLGVBQWUsR0FBRyxJQUFJckYsR0FBRyxFQUFFO1VBQ2pDLEtBQUssSUFBSTdPLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR2xDLFFBQVEsQ0FBQ0QsTUFBTSxFQUFFbUMsRUFBQyxFQUFFLEVBQUU7WUFDdEMsSUFBTWdVLE9BQU8sR0FBR2xXLFFBQVEsQ0FBQ2tDLEVBQUMsQ0FBQztZQUMvQztZQUNvQixJQUFJZ1UsT0FBTyxLQUFLakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDUCxZQUFZLENBQUMsQ0FBQ3dCLE9BQU8sQ0FBQyxJQUNsRFYsTUFBTSxJQUFJQSxNQUFNLENBQUM5QyxHQUFHLENBQUN3RCxPQUFPLENBQUUsRUFBRTtjQUNqQztZQUNIO1lBQ3JCO1lBQ29CLElBQUlkLFdBQVcsSUFBSWMsT0FBTyxDQUFDTixLQUFLLEVBQUU7Y0FDOUJSLFdBQVcsQ0FBQ1MsR0FBRyxDQUFDSyxPQUFPLENBQUM7WUFDM0IsQ0FBQSxNQUNJO2NBQ0RBLE9BQU8sQ0FBQ04sS0FBSyxHQUFHLElBQUk7Y0FDcEJRLGVBQWUsQ0FBQ1AsR0FBRyxDQUFDSyxPQUFPLENBQUM7WUFDL0I7VUFDSjtVQUNqQjtVQUNnQmpCLE9BQU8sQ0FBQ2Ysa0JBQWtCLENBQUMsR0FBR2tDLGVBQWU7VUFDN0Q7VUFDZ0IsSUFBTUwsRUFBRSxHQUFHLElBQUlNLGdCQUFnQixDQUFDLElBQUksQ0FBQzFCLGdCQUFnQixDQUFDLENBQUMyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7VUFDbEVyQixPQUFPLENBQUNkLFNBQVMsQ0FBQyxHQUFHNEIsRUFBRTtVQUN2QixJQUFJUSxlQUFlLEdBQUdKLE1BQU07VUFDNUM7VUFDQTtVQUNBO1VBQ2dCLElBQU1LLGNBQWMsR0FBR0QsZUFBZTtVQUN0QyxJQUFJQyxjQUFjLENBQUNDLE9BQU8sSUFBSUQsY0FBYyxDQUFDRSxJQUFJLEVBQUU7WUFDL0NILGVBQWUsR0FBR0MsY0FBYyxDQUFDRSxJQUFJO1VBQ3hDO1VBQ0RYLEVBQUUsQ0FBQ1ksT0FBTyxDQUFDSixlQUFlLEVBQUU7WUFDeEJLLFNBQVMsRUFBRTtVQUMvQixDQUFpQixDQUFDO1FBQ0w7TUFDSjtNQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDUSxDQUFDakMsZ0JBQWdCLEVBQUVrQyxTQUFTLEVBQUU7UUFDMUIsSUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQzdDLGFBQWEsQ0FBQztRQUNuQyxJQUFNbUIsV0FBVyxHQUFHLElBQUksQ0FBQ3BCLHFCQUFxQixDQUFDO1FBQy9DLEtBQUssSUFBTStDLFFBQVEsSUFBSUYsU0FBUyxFQUFFO1VBQzlDO1VBQ0E7VUFDZ0IsSUFBTUcsTUFBTSxHQUFHRCxRQUFRLENBQUNDLE1BQU0sQ0FBQ04sSUFBSSxJQUFJSyxRQUFRLENBQUNDLE1BQU07VUFDdEQsSUFBTUMsR0FBRyxHQUFHRCxNQUFNLEtBQUtyUixRQUFRLENBQUM0UCxJQUFJLEdBQ2hDdUIsT0FBTyxDQUFDL1csTUFBTSxHQUNkK1csT0FBTyxDQUFDeFYsT0FBTyxDQUFDMFYsTUFBTSxDQUFDO1VBQzNCLElBQU1FLFlBQVksR0FBR0osT0FBTyxDQUFDRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1VBQ3JDLElBQU1iLGVBQWUsR0FBR2MsWUFBWSxDQUFDaEQsa0JBQWtCLENBQUM7VUFDeEU7VUFDZ0IsS0FBSyxJQUFJclUsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHa1gsUUFBUSxDQUFDSSxZQUFZLENBQUNwWCxNQUFNLEVBQUVGLEdBQUMsRUFBRSxFQUFFO1lBQ25ELElBQU1xVyxPQUFPLEdBQUdhLFFBQVEsQ0FBQ0ksWUFBWSxDQUFDdFgsR0FBQyxDQUFDO1lBQ3hDLElBQUlxVyxPQUFPLEtBQUtnQixZQUFZLEVBQUU7Y0FDMUJsTCxPQUFPLENBQUNvTCxJQUFJLENBQUMsK0NBQStDLENBQUM7Y0FDN0QsSUFBSSxDQUFDbk8sR0FBRyxFQUFFO2NBQ1Y7WUFDSDtZQUNELElBQUltTixlQUFlLENBQUMxRCxHQUFHLENBQUN3RCxPQUFPLENBQUMsRUFBRTtjQUM5QkEsT0FBTyxDQUFDTixLQUFLLEdBQUcsS0FBSztjQUNyQlEsZUFBZSxDQUFDaE4sTUFBTSxDQUFDOE0sT0FBTyxDQUFDO1lBQ2xDO1VBQ0o7VUFDakI7VUFDZ0IsS0FBSyxJQUFJclcsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHa1gsUUFBUSxDQUFDTSxVQUFVLENBQUN0WCxNQUFNLEVBQUVGLEdBQUMsRUFBRSxFQUFFO1lBQ2pELElBQU1xVyxRQUFPLEdBQUdhLFFBQVEsQ0FBQ00sVUFBVSxDQUFDeFgsR0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUM2VSxZQUFZLENBQUMsQ0FBQ3dCLFFBQU8sQ0FBQyxFQUFFO2NBQzlCO1lBQ0g7WUFDRCxJQUFJZCxXQUFXLElBQUljLFFBQU8sQ0FBQ04sS0FBSyxFQUFFO2NBQzlCUixXQUFXLENBQUNTLEdBQUcsQ0FBQ0ssUUFBTyxDQUFDO1lBQzNCLENBQUEsTUFDSTtjQUNEQSxRQUFPLENBQUNOLEtBQUssR0FBRyxJQUFJO2NBQ3BCUSxlQUFlLENBQUNQLEdBQUcsQ0FBQ0ssUUFBTyxDQUFDO1lBQy9CO1VBQ0o7UUFDSjtNQUNKO01BQ1Q7QUFDQTtBQUNBO01BQ1EsQ0FBQ3hCLFlBQVksRUFBRU8sT0FBTyxFQUFFO1FBQ3BCLE9BQU8sS0FBSyxLQUFLLDJCQUEyQixDQUFDM1IsSUFBSSxDQUFDMlIsT0FBTyxDQUFDeFAsU0FBUyxDQUFDO01BQ3ZFO01BQ1Q7QUFDQTtBQUNBO0FBQ0E7TUFDUSxDQUFDK08sV0FBVyxFQUFFUyxPQUFPLEVBQUU7UUFDbkIsSUFBTTZCLE9BQU8sR0FBRyxFQUFFO1FBQ2xCLElBQUl0USxPQUFPLEdBQUd5TyxPQUFPO1FBQ2pDO1FBQ1ksT0FBT3pPLE9BQU8sSUFBSUEsT0FBTyxLQUFLYixRQUFRLENBQUM0UCxJQUFJLEVBQUU7VUFDekQ7VUFDZ0IsSUFBSS9PLE9BQU8sQ0FBQ2QsUUFBUSxLQUFLNFIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7WUFDeENULE9BQU8sQ0FBQ3BWLElBQUksQ0FBQzhFLE9BQU8sQ0FBQztVQUN4QjtVQUNqQjtVQUNnQixJQUFJQSxPQUFPLENBQUNnUixZQUFZLEVBQUU7WUFDMUM7WUFDb0IsT0FBT2hSLE9BQU8sR0FBR0EsT0FBTyxDQUFDZ1IsWUFBWSxFQUFFO2NBQ25DVixPQUFPLENBQUNwVixJQUFJLENBQUM4RSxPQUFPLENBQUM7WUFDeEI7WUFDckI7WUFDb0JBLE9BQU8sR0FBR3NRLE9BQU8sQ0FBQzdOLEdBQUcsRUFBRTtZQUN2QjtVQUNIO1VBQ0R6QyxPQUFPLEdBQUdBLE9BQU8sQ0FBQzlHLFVBQVUsSUFDeEI4RyxPQUFPLENBQUNrUSxJQUFJO1FBQ25CO1FBQ0QsT0FBT0ksT0FBTztNQUNqQjtNQUNUO0FBQ0E7QUFDQTtBQUNBO01BQ1EsQ0FBQ3JDLHVCQUF1QixFQUFFUSxPQUFPLEVBQUU7UUFDL0IsSUFBTXdDLFVBQVUsR0FBR3hDLE9BQU8sQ0FBQ3dDLFVBQVU7UUFDckMsSUFBSSxDQUFDQSxVQUFVLEVBQUU7VUFDYixPQUFPLElBQUk7UUFDZDtRQUNELElBQU1DLE1BQU0sR0FBRyxJQUFJM0csR0FBRyxFQUFFO1FBQ3hCLElBQUlsUixDQUFDO1FBQ0wsSUFBSXFDLENBQUM7UUFDTCxJQUFJeVYsS0FBSztRQUNULElBQU1DLEtBQUssR0FBR0gsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSUQsS0FBSyxDQUFDN1gsTUFBTSxJQUFJNlgsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxhQUFhLEVBQUU7VUFDeEMsS0FBS2pZLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRytYLEtBQUssQ0FBQzdYLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7WUFDL0I4WCxLQUFLLEdBQUdDLEtBQUssQ0FBQy9YLENBQUMsQ0FBQyxDQUFDaVksYUFBYSxDQUFDO2NBQzNCQyxPQUFPLEVBQUU7WUFDakMsQ0FBcUIsQ0FBQztZQUNGLEtBQUs3VixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUd5VixLQUFLLENBQUM1WCxNQUFNLEVBQUVtQyxDQUFDLEVBQUUsRUFBRTtjQUMvQixJQUFJeVYsS0FBSyxDQUFDelYsQ0FBQyxDQUFDLENBQUN3RCxRQUFRLEtBQUs0UixJQUFJLENBQUNDLFlBQVksRUFBRTtnQkFDekNHLE1BQU0sQ0FBQzdCLEdBQUcsQ0FBQzhCLEtBQUssQ0FBQ3pWLENBQUMsQ0FBQyxDQUFDO2NBQ3ZCO1lBQ0o7VUFDSjtVQUNqQjtRQUNhOztRQUNELE9BQU93VixNQUFNO01BQ2hCO0lBQ0o7SUFDRC9SLFFBQVEsQ0FBQ3FTLGlCQUFpQixHQUN0QixJQUFJcEQsb0JBQW9CLEVBQUU7RUFDbEMsQ0FBQyxHQUFHOzs7SUN6VkgsV0FBVXFELE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQ3FDQSxPQUFPLEVBQUU7SUFHMUUsQ0FBQyxFQUFDQyxjQUFJLEVBQUcsWUFBWTtNQUVuQixJQUFJQyxZQUFZLEdBQUcsWUFBWTtRQUFFLFNBQVNDLGdCQUFnQixDQUFDckIsTUFBTSxFQUFFM1csS0FBSyxFQUFFO1VBQUUsS0FBSyxJQUFJUixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdRLEtBQUssQ0FBQ04sTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtZQUFFLElBQUl5WSxVQUFVLEdBQUdqWSxLQUFLLENBQUNSLENBQUMsQ0FBQztZQUFFeVksVUFBVSxDQUFDck4sVUFBVSxHQUFHcU4sVUFBVSxDQUFDck4sVUFBVSxJQUFJLEtBQUs7WUFBRXFOLFVBQVUsQ0FBQ3hPLFlBQVksR0FBRyxJQUFJO1lBQUUsSUFBSSxPQUFPLElBQUl3TyxVQUFVLEVBQUVBLFVBQVUsQ0FBQ3ZPLFFBQVEsR0FBRyxJQUFJO1lBQUVILE1BQU0sQ0FBQ0MsY0FBYyxDQUFDbU4sTUFBTSxFQUFFc0IsVUFBVSxDQUFDaFksR0FBRyxFQUFFZ1ksVUFBVSxDQUFDO1VBQUM7UUFBSTtRQUFDLE9BQU8sVUFBVUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtVQUFFLElBQUlELFVBQVUsRUFBRUgsZ0JBQWdCLENBQUNFLFdBQVcsQ0FBQ2pVLFNBQVMsRUFBRWtVLFVBQVUsQ0FBQztVQUFFLElBQUlDLFdBQVcsRUFBRUosZ0JBQWdCLENBQUNFLFdBQVcsRUFBRUUsV0FBVyxDQUFDO1VBQUUsT0FBT0YsV0FBVztRQUFHLENBQUE7TUFBRyxDQUFBLEVBQUU7TUFFbmpCLFNBQVNHLGVBQWUsQ0FBQ3hILFFBQVEsRUFBRXFILFdBQVcsRUFBRTtRQUFFLElBQUksRUFBRXJILFFBQVEsWUFBWXFILFdBQVcsQ0FBQyxFQUFFO1VBQUUsTUFBTSxJQUFJSSxTQUFTLENBQUMsbUNBQW1DLENBQUM7UUFBQztNQUFJOztNQUUzSjtBQUNBO0FBQ0E7QUFDQTs7TUFFRSxDQUFDLFlBQVk7UUFDZjtRQUNJLElBQUksT0FBT0MsTUFBTSxLQUFLLFdBQVcsRUFBRTtVQUNqQztRQUNEOztRQUVMO1FBQ0E7UUFDSSxJQUFJalYsS0FBSyxHQUFHakIsS0FBSyxDQUFDNEIsU0FBUyxDQUFDWCxLQUFLOztRQUVyQztBQUNBO0FBQ0E7QUFDQTtRQUNJLElBQUlrVixPQUFPLEdBQUdDLE9BQU8sQ0FBQ3hVLFNBQVMsQ0FBQ3VVLE9BQU8sSUFBSUMsT0FBTyxDQUFDeFUsU0FBUyxDQUFDeVUsaUJBQWlCOztRQUVsRjtRQUNJLElBQUlDLHdCQUF3QixHQUFHLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUNySyxJQUFJLENBQUMsR0FBRyxDQUFDOztRQUV2UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7UUFFSSxJQUFJc0ssU0FBUyxHQUFHLFlBQVk7VUFDaEM7QUFDQTtBQUNBO0FBQ0E7VUFDTSxTQUFTQSxTQUFTLENBQUNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFO1lBQzVDVCxlQUFlLENBQUMsSUFBSSxFQUFFTyxTQUFTLENBQUM7O1lBRXhDO1lBQ1EsSUFBSSxDQUFDRyxhQUFhLEdBQUdELFlBQVk7O1lBRXpDO1lBQ1EsSUFBSSxDQUFDRSxZQUFZLEdBQUdILFdBQVc7O1lBRXZDO0FBQ0E7QUFDQTtBQUNBO1lBQ1EsSUFBSSxDQUFDSSxhQUFhLEdBQUcsSUFBSXZJLEdBQUcsRUFBRTs7WUFFdEM7WUFDUSxJQUFJLElBQUksQ0FBQ3NJLFlBQVksQ0FBQ0UsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2NBQzNEO2NBQ1UsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNILFlBQVksQ0FBQ0ksWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUMvRSxDQUFTLE1BQU07Y0FDTCxJQUFJLENBQUNELGdCQUFnQixHQUFHLElBQUk7WUFDN0I7WUFDRCxJQUFJLENBQUNILFlBQVksQ0FBQ3BWLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDOztZQUU3RDtZQUNRLElBQUksQ0FBQ3lWLHVCQUF1QixDQUFDLElBQUksQ0FBQ0wsWUFBWSxDQUFDOztZQUV2RDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ1EsSUFBSSxDQUFDTSxTQUFTLEdBQUcsSUFBSXRELGdCQUFnQixDQUFDLElBQUksQ0FBQ3VELFdBQVcsQ0FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUNxRCxTQUFTLENBQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDMEMsWUFBWSxFQUFFO2NBQUVsVCxVQUFVLEVBQUUsSUFBSTtjQUFFeVEsU0FBUyxFQUFFLElBQUk7Y0FBRWlELE9BQU8sRUFBRTtZQUFNLENBQUEsQ0FBQztVQUNoRzs7VUFFUDtBQUNBO0FBQ0E7QUFDQTs7VUFHTXpCLFlBQVksQ0FBQ2EsU0FBUyxFQUFFLENBQUM7WUFDdkIzWSxHQUFHLEVBQUUsWUFBWTtZQUNqQjhELEtBQUssRUFBRSxTQUFTeVEsVUFBVSxHQUFHO2NBQzNCLElBQUksQ0FBQzhFLFNBQVMsQ0FBQzNELFVBQVUsRUFBRTtjQUUzQixJQUFJLElBQUksQ0FBQ3FELFlBQVksRUFBRTtnQkFDckIsSUFBSSxJQUFJLENBQUNHLGdCQUFnQixLQUFLLElBQUksRUFBRTtrQkFDbEMsSUFBSSxDQUFDSCxZQUFZLENBQUNwVixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQ3VWLGdCQUFnQixDQUFDO2dCQUNsRixDQUFhLE1BQU07a0JBQ0wsSUFBSSxDQUFDSCxZQUFZLENBQUNyVixlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUNqRDtjQUNGO2NBRUQsSUFBSSxDQUFDc1YsYUFBYSxDQUFDcFUsT0FBTyxDQUFDLFVBQVU0VSxTQUFTLEVBQUU7Z0JBQzlDLElBQUksQ0FBQ0MsYUFBYSxDQUFDRCxTQUFTLENBQUNFLElBQUksQ0FBQztjQUNuQyxDQUFBLEVBQUUsSUFBSSxDQUFDOztjQUVsQjtjQUNBO2NBQ0E7Y0FDQTtjQUNBO2NBQ0E7Y0FDVSxJQUFJLENBQUNMLFNBQVMsR0FBQSxnQkFBbUIsSUFBSTtjQUNyQyxJQUFJLENBQUNOLFlBQVksR0FBQSxnQkFBbUIsSUFBSTtjQUN4QyxJQUFJLENBQUNDLGFBQWEsR0FBQSxnQkFBbUIsSUFBSTtjQUN6QyxJQUFJLENBQUNGLGFBQWEsR0FBQSxnQkFBbUIsSUFBSTtZQUMxQzs7WUFFVDtBQUNBO0FBQ0E7VUFFQSxDQUFPLEVBQUU7WUFDRDlZLEdBQUcsRUFBRSx5QkFBeUI7WUFHdEM7QUFDQTtBQUNBO1lBQ1E4RCxLQUFLLEVBQUUsU0FBU3NWLHVCQUF1QixDQUFDTyxTQUFTLEVBQUU7Y0FDakQsSUFBSUMsTUFBTSxHQUFHLElBQUk7Y0FFakJDLGdCQUFnQixDQUFDRixTQUFTLEVBQUUsVUFBVUQsSUFBSSxFQUFFO2dCQUMxQyxPQUFPRSxNQUFNLENBQUNFLFVBQVUsQ0FBQ0osSUFBSSxDQUFDO2NBQzFDLENBQVcsQ0FBQztjQUVGLElBQUlLLGFBQWEsR0FBRzFVLFFBQVEsQ0FBQzBVLGFBQWE7Y0FFMUMsSUFBSSxDQUFDMVUsUUFBUSxDQUFDNFAsSUFBSSxDQUFDK0UsUUFBUSxDQUFDTCxTQUFTLENBQUMsRUFBRTtnQkFDbEQ7Z0JBQ1ksSUFBSUQsSUFBSSxHQUFHQyxTQUFTO2dCQUNoQztnQkFDWSxJQUFJTSxJQUFJLEdBQUd4TyxTQUFTO2dCQUNwQixPQUFPaU8sSUFBSSxFQUFFO2tCQUNYLElBQUlBLElBQUksQ0FBQ3RVLFFBQVEsS0FBSzRSLElBQUksQ0FBQ2tELHNCQUFzQixFQUFFO29CQUNqREQsSUFBSSxHQUE2QiwwQkFBQVAsSUFBSTtvQkFDckM7a0JBQ0Q7a0JBQ0RBLElBQUksR0FBR0EsSUFBSSxDQUFDdGEsVUFBVTtnQkFDdkI7Z0JBQ0QsSUFBSTZhLElBQUksRUFBRTtrQkFDUkYsYUFBYSxHQUFHRSxJQUFJLENBQUNGLGFBQWE7Z0JBQ25DO2NBQ0Y7Y0FDRCxJQUFJSixTQUFTLENBQUNLLFFBQVEsQ0FBQ0QsYUFBYSxDQUFDLEVBQUU7Z0JBQ3JDQSxhQUFhLENBQUNJLElBQUksRUFBRTtnQkFDaEM7Z0JBQ0E7Z0JBQ0E7Z0JBQ1ksSUFBSUosYUFBYSxLQUFLMVUsUUFBUSxDQUFDMFUsYUFBYSxFQUFFO2tCQUM1QzFVLFFBQVEsQ0FBQzRQLElBQUksQ0FBQ21GLEtBQUssRUFBRTtnQkFDdEI7Y0FDRjtZQUNGOztZQUVUO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEcGEsR0FBRyxFQUFFLFlBQVk7WUFDakI4RCxLQUFLLEVBQUUsU0FBU2dXLFVBQVUsQ0FBQ0osSUFBSSxFQUFFO2NBQy9CLElBQUlBLElBQUksQ0FBQ3RVLFFBQVEsS0FBSzRSLElBQUksQ0FBQ0MsWUFBWSxFQUFFO2dCQUN2QztjQUNEO2NBQ0QsSUFBSXRDLE9BQU8sR0FBOEIsMkJBQUErRSxJQUFJOztjQUV2RDtjQUNBO2NBQ1UsSUFBSS9FLE9BQU8sS0FBSyxJQUFJLENBQUNvRSxZQUFZLElBQUlwRSxPQUFPLENBQUNzRSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQ29CLGVBQWUsQ0FBQzFGLE9BQU8sQ0FBQztjQUM5QjtjQUVELElBQUk0RCxPQUFPLENBQUM1WSxJQUFJLENBQUNnVixPQUFPLEVBQUUrRCx3QkFBd0IsQ0FBQyxJQUFJL0QsT0FBTyxDQUFDc0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2RixJQUFJLENBQUNxQixXQUFXLENBQUMzRixPQUFPLENBQUM7Y0FDMUI7WUFDRjs7WUFFVDtBQUNBO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEM1UsR0FBRyxFQUFFLGFBQWE7WUFDbEI4RCxLQUFLLEVBQUUsU0FBU3dXLFdBQVcsQ0FBQ1osSUFBSSxFQUFFO2NBQ2hDLElBQUlGLFNBQVMsR0FBRyxJQUFJLENBQUNWLGFBQWEsQ0FBQ3lCLFFBQVEsQ0FBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQztjQUN2RCxJQUFJLENBQUNWLGFBQWEsQ0FBQ3pELEdBQUcsQ0FBQ2lFLFNBQVMsQ0FBQztZQUNsQzs7WUFFVDtBQUNBO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEeFosR0FBRyxFQUFFLGVBQWU7WUFDcEI4RCxLQUFLLEVBQUUsU0FBUzJWLGFBQWEsQ0FBQ0MsSUFBSSxFQUFFO2NBQ2xDLElBQUlGLFNBQVMsR0FBRyxJQUFJLENBQUNWLGFBQWEsQ0FBQzBCLFVBQVUsQ0FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQztjQUN6RCxJQUFJRixTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDUixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNRLFNBQVMsQ0FBQztjQUN4QztZQUNGOztZQUVUO0FBQ0E7QUFDQTtBQUNBO1VBRUEsQ0FBTyxFQUFFO1lBQ0R4WixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCOEQsS0FBSyxFQUFFLFNBQVMyVyxnQkFBZ0IsQ0FBQ2QsU0FBUyxFQUFFO2NBQzFDLElBQUllLE1BQU0sR0FBRyxJQUFJO2NBRWpCYixnQkFBZ0IsQ0FBQ0YsU0FBUyxFQUFFLFVBQVVELElBQUksRUFBRTtnQkFDMUMsT0FBT2dCLE1BQU0sQ0FBQ2pCLGFBQWEsQ0FBQ0MsSUFBSSxDQUFDO2NBQzdDLENBQVcsQ0FBQztZQUNIOztZQUVUO0FBQ0E7QUFDQTtBQUNBO1VBRUEsQ0FBTyxFQUFFO1lBQ0QxWixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCOEQsS0FBSyxFQUFFLFNBQVN1VyxlQUFlLENBQUNYLElBQUksRUFBRTtjQUNwQyxJQUFJaUIsWUFBWSxHQUFHLElBQUksQ0FBQzdCLGFBQWEsQ0FBQzhCLFlBQVksQ0FBQ2xCLElBQUksQ0FBQzs7Y0FFbEU7Y0FDQTtjQUNVLElBQUksQ0FBQ2lCLFlBQVksRUFBRTtnQkFDakIsSUFBSSxDQUFDN0IsYUFBYSxDQUFDK0IsUUFBUSxDQUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDdkNpQixZQUFZLEdBQUcsSUFBSSxDQUFDN0IsYUFBYSxDQUFDOEIsWUFBWSxDQUFDbEIsSUFBSSxDQUFDO2NBQ3JEO2NBRURpQixZQUFZLENBQUNHLFlBQVksQ0FBQ2xXLE9BQU8sQ0FBQyxVQUFVbVcsY0FBYyxFQUFFO2dCQUMxRCxJQUFJLENBQUNULFdBQVcsQ0FBQ1MsY0FBYyxDQUFDckIsSUFBSSxDQUFDO2NBQ3RDLENBQUEsRUFBRSxJQUFJLENBQUM7WUFDVDs7WUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO1VBRUEsQ0FBTyxFQUFFO1lBQ0QxWixHQUFHLEVBQUUsYUFBYTtZQUNsQjhELEtBQUssRUFBRSxTQUFTd1YsV0FBVyxDQUFDMEIsT0FBTyxFQUFFQyxJQUFJLEVBQUU7Y0FDekNELE9BQU8sQ0FBQ3BXLE9BQU8sQ0FBQyxVQUFVc1csTUFBTSxFQUFFO2dCQUNoQyxJQUFJeEUsTUFBTSxHQUFBLDJCQUE4QndFLE1BQU0sQ0FBQ3hFLE1BQU07Z0JBQ3JELElBQUl3RSxNQUFNLENBQUNwYixJQUFJLEtBQUssV0FBVyxFQUFFO2tCQUM3QztrQkFDY3VELEtBQUssQ0FBQzFELElBQUksQ0FBQ3ViLE1BQU0sQ0FBQ25FLFVBQVUsQ0FBQyxDQUFDblMsT0FBTyxDQUFDLFVBQVU4VSxJQUFJLEVBQUU7b0JBQ3BELElBQUksQ0FBQ04sdUJBQXVCLENBQUNNLElBQUksQ0FBQztrQkFDbkMsQ0FBQSxFQUFFLElBQUksQ0FBQzs7a0JBRXRCO2tCQUNjclcsS0FBSyxDQUFDMUQsSUFBSSxDQUFDdWIsTUFBTSxDQUFDckUsWUFBWSxDQUFDLENBQUNqUyxPQUFPLENBQUMsVUFBVThVLElBQUksRUFBRTtvQkFDdEQsSUFBSSxDQUFDZSxnQkFBZ0IsQ0FBQ2YsSUFBSSxDQUFDO2tCQUM1QixDQUFBLEVBQUUsSUFBSSxDQUFDO2dCQUN0QixDQUFhLE1BQU0sSUFBSXdCLE1BQU0sQ0FBQ3BiLElBQUksS0FBSyxZQUFZLEVBQUU7a0JBQ3ZDLElBQUlvYixNQUFNLENBQUNDLGFBQWEsS0FBSyxVQUFVLEVBQUU7b0JBQ3ZEO29CQUNnQixJQUFJLENBQUNiLFdBQVcsQ0FBQzVELE1BQU0sQ0FBQztrQkFDekIsQ0FBQSxNQUFNLElBQUlBLE1BQU0sS0FBSyxJQUFJLENBQUNxQyxZQUFZLElBQUltQyxNQUFNLENBQUNDLGFBQWEsS0FBSyxPQUFPLElBQUl6RSxNQUFNLENBQUN1QyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzNIO29CQUNBO29CQUNnQixJQUFJLENBQUNvQixlQUFlLENBQUMzRCxNQUFNLENBQUM7b0JBQzVCLElBQUlpRSxZQUFZLEdBQUcsSUFBSSxDQUFDN0IsYUFBYSxDQUFDOEIsWUFBWSxDQUFDbEUsTUFBTSxDQUFDO29CQUMxRCxJQUFJLENBQUNzQyxhQUFhLENBQUNwVSxPQUFPLENBQUMsVUFBVXdXLFdBQVcsRUFBRTtzQkFDaEQsSUFBSTFFLE1BQU0sQ0FBQ3NELFFBQVEsQ0FBQ29CLFdBQVcsQ0FBQzFCLElBQUksQ0FBQyxFQUFFO3dCQUNyQ2lCLFlBQVksQ0FBQ0wsV0FBVyxDQUFDYyxXQUFXLENBQUMxQixJQUFJLENBQUM7c0JBQzNDO29CQUNuQixDQUFpQixDQUFDO2tCQUNIO2dCQUNGO2NBQ0YsQ0FBQSxFQUFFLElBQUksQ0FBQztZQUNUO1VBQ1QsQ0FBTyxFQUFFO1lBQ0QxWixHQUFHLEVBQUUsY0FBYztZQUNuQmlKLEdBQUcsRUFBRSxTQUFTQSxHQUFHLEdBQUc7Y0FDbEIsT0FBTyxJQUFJd0gsR0FBRyxDQUFDLElBQUksQ0FBQ3VJLGFBQWEsQ0FBQztZQUNuQzs7WUFFVDtVQUVBLENBQU8sRUFBRTtZQUNEaFosR0FBRyxFQUFFLG9CQUFvQjtZQUN6QmlKLEdBQUcsRUFBRSxTQUFTQSxHQUFHLEdBQUc7Y0FDbEIsT0FBTyxJQUFJLENBQUNpUSxnQkFBZ0IsS0FBSyxJQUFJO1lBQ3RDOztZQUVUO1VBRUEsQ0FBTyxFQUFFO1lBQ0RsWixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCb0osR0FBRyxFQUFFLFNBQVNBLEdBQUcsQ0FBQ2lTLFVBQVUsRUFBRTtjQUM1QixJQUFJLENBQUNuQyxnQkFBZ0IsR0FBR21DLFVBQVU7WUFDbkM7O1lBRVQ7O1lBRVFwUyxHQUFHLEVBQUUsU0FBU0EsR0FBRyxHQUFHO2NBQ2xCLE9BQU8sSUFBSSxDQUFDaVEsZ0JBQWdCO1lBQzdCO1VBQ0YsQ0FBQSxDQUFDLENBQUM7VUFFSCxPQUFPUCxTQUFTO1FBQ3RCLENBQUssRUFBRTs7UUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztRQUdJLElBQUkyQyxTQUFTLEdBQUcsWUFBWTtVQUNoQztBQUNBO0FBQ0E7QUFDQTtVQUNNLFNBQVNBLFNBQVMsQ0FBQzVCLElBQUksRUFBRTZCLFNBQVMsRUFBRTtZQUNsQ25ELGVBQWUsQ0FBQyxJQUFJLEVBQUVrRCxTQUFTLENBQUM7O1lBRXhDO1lBQ1EsSUFBSSxDQUFDRSxLQUFLLEdBQUc5QixJQUFJOztZQUV6QjtZQUNRLElBQUksQ0FBQytCLG9CQUFvQixHQUFHLEtBQUs7O1lBRXpDO0FBQ0E7QUFDQTtBQUNBO1lBQ1EsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSWpMLEdBQUcsQ0FBQyxDQUFDOEssU0FBUyxDQUFDLENBQUM7O1lBRS9DO1lBQ1EsSUFBSSxDQUFDSSxjQUFjLEdBQUcsSUFBSTs7WUFFbEM7WUFDUSxJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLOztZQUUvQjtZQUNRLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUU7VUFDeEI7O1VBRVA7QUFDQTtBQUNBO0FBQ0E7O1VBR00vRCxZQUFZLENBQUN3RCxTQUFTLEVBQUUsQ0FBQztZQUN2QnRiLEdBQUcsRUFBRSxZQUFZO1lBQ2pCOEQsS0FBSyxFQUFFLFNBQVN5USxVQUFVLEdBQUc7Y0FDM0IsSUFBSSxDQUFDdUgsaUJBQWlCLEVBQUU7Y0FFeEIsSUFBSSxJQUFJLENBQUNOLEtBQUssSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ3BXLFFBQVEsS0FBSzRSLElBQUksQ0FBQ0MsWUFBWSxFQUFFO2dCQUMzRCxJQUFJdEMsT0FBTyxHQUFBLDJCQUE4QixJQUFJLENBQUM2RyxLQUFLO2dCQUNuRCxJQUFJLElBQUksQ0FBQ0csY0FBYyxLQUFLLElBQUksRUFBRTtrQkFDaENoSCxPQUFPLENBQUNoUixZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ2dZLGNBQWMsQ0FBQztnQkFDbkUsQ0FBYSxNQUFNO2tCQUNMaEgsT0FBTyxDQUFDalIsZUFBZSxDQUFDLFVBQVUsQ0FBQztnQkFDcEM7O2dCQUViO2dCQUNZLElBQUksSUFBSSxDQUFDK1gsb0JBQW9CLEVBQUU7a0JBQzdCLE9BQU85RyxPQUFPLENBQUN5RixLQUFLO2dCQUNyQjtjQUNGOztjQUVYO2NBQ1UsSUFBSSxDQUFDb0IsS0FBSyxHQUFBLGdCQUFtQixJQUFJO2NBQ2pDLElBQUksQ0FBQ0UsV0FBVyxHQUFBLGdCQUFtQixJQUFJO2NBQ3ZDLElBQUksQ0FBQ0UsVUFBVSxHQUFHLElBQUk7WUFDdkI7O1lBRVQ7QUFDQTtBQUNBO0FBQ0E7VUFFQSxDQUFPLEVBQUU7WUFDRDViLEdBQUcsRUFBRSxtQkFBbUI7WUFHaEM7QUFDQTtBQUNBO1lBQ1E4RCxLQUFLLEVBQUUsU0FBU2dZLGlCQUFpQixHQUFHO2NBQ2xDLElBQUksSUFBSSxDQUFDQyxTQUFTLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSXJNLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQztjQUN4RDtZQUNGOztZQUVUO1VBRUEsQ0FBTyxFQUFFO1lBQ0QxUCxHQUFHLEVBQUUsa0JBQWtCO1lBRy9CO1lBQ1E4RCxLQUFLLEVBQUUsU0FBUytYLGdCQUFnQixHQUFHO2NBQ2pDLElBQUksSUFBSSxDQUFDbkMsSUFBSSxDQUFDdFUsUUFBUSxLQUFLNFIsSUFBSSxDQUFDQyxZQUFZLEVBQUU7Z0JBQzVDO2NBQ0Q7Y0FDRCxJQUFJdEMsT0FBTyxHQUFBLDJCQUE4QixJQUFJLENBQUMrRSxJQUFJO2NBQ2xELElBQUluQixPQUFPLENBQUM1WSxJQUFJLENBQUNnVixPQUFPLEVBQUUrRCx3QkFBd0IsQ0FBQyxFQUFFO2dCQUNuRCxLQUFBLDJCQUFnQy9ELE9BQU8sQ0FBQ3FILFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixFQUFFO2tCQUNoRjtnQkFDRDtnQkFFRCxJQUFJdEgsT0FBTyxDQUFDc0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2tCQUNwQyxJQUFJLENBQUMwQyxjQUFjLDhCQUE4QmhILE9BQU8sQ0FBQ3FILFFBQVE7Z0JBQ2xFO2dCQUNEckgsT0FBTyxDQUFDaFIsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7Z0JBQ3RDLElBQUlnUixPQUFPLENBQUN2UCxRQUFRLEtBQUs0UixJQUFJLENBQUNDLFlBQVksRUFBRTtrQkFDMUN0QyxPQUFPLENBQUN5RixLQUFLLEdBQUcsWUFBWSxFQUFFO2tCQUM5QixJQUFJLENBQUNxQixvQkFBb0IsR0FBRyxJQUFJO2dCQUNqQztjQUNGLENBQUEsTUFBTSxJQUFJOUcsT0FBTyxDQUFDc0UsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMwQyxjQUFjLDhCQUE4QmhILE9BQU8sQ0FBQ3FILFFBQVE7Z0JBQ2pFckgsT0FBTyxDQUFDalIsZUFBZSxDQUFDLFVBQVUsQ0FBQztjQUNwQztZQUNGOztZQUVUO0FBQ0E7QUFDQTtBQUNBO1VBRUEsQ0FBTyxFQUFFO1lBQ0QxRCxHQUFHLEVBQUUsY0FBYztZQUNuQjhELEtBQUssRUFBRSxTQUFTb1ksWUFBWSxDQUFDWCxTQUFTLEVBQUU7Y0FDdEMsSUFBSSxDQUFDTyxpQkFBaUIsRUFBRTtjQUN4QixJQUFJLENBQUNKLFdBQVcsQ0FBQ25HLEdBQUcsQ0FBQ2dHLFNBQVMsQ0FBQztZQUNoQzs7WUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFFQSxDQUFPLEVBQUU7WUFDRHZiLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEI4RCxLQUFLLEVBQUUsU0FBU3FZLGVBQWUsQ0FBQ1osU0FBUyxFQUFFO2NBQ3pDLElBQUksQ0FBQ08saUJBQWlCLEVBQUU7Y0FDeEIsSUFBSSxDQUFDSixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUNILFNBQVMsQ0FBQztjQUNyQyxJQUFJLElBQUksQ0FBQ0csV0FBVyxDQUFDMVMsSUFBSSxLQUFLLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDdUwsVUFBVSxFQUFFO2NBQ2xCO1lBQ0Y7VUFDVCxDQUFPLEVBQUU7WUFDRHZVLEdBQUcsRUFBRSxXQUFXO1lBQ2hCaUosR0FBRyxFQUFFLFNBQVNBLEdBQUcsR0FBRztjQUNsQixPQUFBLDBCQUFpQyxJQUFJLENBQUMyUztjQUFVO1lBRWpEO1VBQ1QsQ0FBTyxFQUFFO1lBQ0Q1YixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCaUosR0FBRyxFQUFFLFNBQVNBLEdBQUcsR0FBRztjQUNsQixPQUFPLElBQUksQ0FBQzBTLGNBQWMsS0FBSyxJQUFJO1lBQ3BDOztZQUVUO1VBRUEsQ0FBTyxFQUFFO1lBQ0QzYixHQUFHLEVBQUUsTUFBTTtZQUNYaUosR0FBRyxFQUFFLFNBQVNBLEdBQUcsR0FBRztjQUNsQixJQUFJLENBQUM2UyxpQkFBaUIsRUFBRTtjQUN4QixPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNsQjs7WUFFVDtVQUVBLENBQU8sRUFBRTtZQUNEeGIsR0FBRyxFQUFFLGVBQWU7WUFDcEJvSixHQUFHLEVBQUUsU0FBU0EsR0FBRyxDQUFDNFMsUUFBUSxFQUFFO2NBQzFCLElBQUksQ0FBQ0YsaUJBQWlCLEVBQUU7Y0FDeEIsSUFBSSxDQUFDSCxjQUFjLEdBQUdLLFFBQVE7WUFDL0I7O1lBRVQ7O1lBRVEvUyxHQUFHLEVBQUUsU0FBU0EsR0FBRyxHQUFHO2NBQ2xCLElBQUksQ0FBQzZTLGlCQUFpQixFQUFFO2NBQ3hCLE9BQU8sSUFBSSxDQUFDSCxjQUFjO1lBQzNCO1VBQ0YsQ0FBQSxDQUFDLENBQUM7VUFFSCxPQUFPTCxTQUFTO1FBQ3RCLENBQUssRUFBRTs7UUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1FBR0ksSUFBSWMsWUFBWSxHQUFHLFlBQVk7VUFDbkM7QUFDQTtBQUNBO1VBQ00sU0FBU0EsWUFBWSxDQUFDL1csUUFBUSxFQUFFO1lBQzlCK1MsZUFBZSxDQUFDLElBQUksRUFBRWdFLFlBQVksQ0FBQztZQUVuQyxJQUFJLENBQUMvVyxRQUFRLEVBQUU7Y0FDYixNQUFNLElBQUlxSyxLQUFLLENBQUMsbUVBQW1FLENBQUM7WUFDckY7O1lBRVQ7WUFDUSxJQUFJLENBQUMyTSxTQUFTLEdBQUdoWCxRQUFROztZQUVqQztBQUNBO0FBQ0E7QUFDQTtZQUNRLElBQUksQ0FBQzJULGFBQWEsR0FBRyxJQUFJOVAsR0FBRyxFQUFFOztZQUV0QztBQUNBO0FBQ0E7QUFDQTtZQUNRLElBQUksQ0FBQ3dTLFdBQVcsR0FBRyxJQUFJeFMsR0FBRyxFQUFFOztZQUVwQztBQUNBO0FBQ0E7QUFDQTtZQUNRLElBQUksQ0FBQ21RLFNBQVMsR0FBRyxJQUFJdEQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDdUcsY0FBYyxDQUFDdEcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUU3RTtZQUNRdUcsYUFBYSxDQUFDbFgsUUFBUSxDQUFDbVgsSUFBSSxJQUFJblgsUUFBUSxDQUFDNFAsSUFBSSxJQUFJNVAsUUFBUSxDQUFDb1gsZUFBZSxDQUFDOztZQUVqRjtZQUNRLElBQUlwWCxRQUFRLENBQUNxWCxVQUFVLEtBQUssU0FBUyxFQUFFO2NBQ3JDclgsUUFBUSxDQUFDL0IsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDcVosaUJBQWlCLENBQUMzRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUYsQ0FBUyxNQUFNO2NBQ0wsSUFBSSxDQUFDMkcsaUJBQWlCLEVBQUU7WUFDekI7VUFDRjs7VUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztVQUdNN0UsWUFBWSxDQUFDc0UsWUFBWSxFQUFFLENBQUM7WUFDMUJwYyxHQUFHLEVBQUUsVUFBVTtZQUNmOEQsS0FBSyxFQUFFLFNBQVMrVyxRQUFRLENBQUNaLElBQUksRUFBRTNFLEtBQUssRUFBRTtjQUNwQyxJQUFJQSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxJQUFJLENBQUNvRyxXQUFXLENBQUN0SixHQUFHLENBQUM2SCxJQUFJLENBQUMsRUFBRTtrQkFDNUM7a0JBQ2M7Z0JBQ0Q7Z0JBRUQsSUFBSXNCLFNBQVMsR0FBRyxJQUFJNUMsU0FBUyxDQUFDc0IsSUFBSSxFQUFFLElBQUksQ0FBQztnQkFDekNBLElBQUksQ0FBQ3RXLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMrWCxXQUFXLENBQUN0UyxHQUFHLENBQUM2USxJQUFJLEVBQUVzQixTQUFTLENBQUM7Z0JBQ2pEO2dCQUNBO2dCQUNZLElBQUksQ0FBQyxJQUFJLENBQUNjLFNBQVMsQ0FBQ3BILElBQUksQ0FBQytFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLEVBQUU7a0JBQ3ZDLElBQUlwRSxNQUFNLEdBQUdvRSxJQUFJLENBQUM3YSxVQUFVO2tCQUM1QixPQUFPeVcsTUFBTSxFQUFFO29CQUNiLElBQUlBLE1BQU0sQ0FBQ3pRLFFBQVEsS0FBSyxFQUFFLEVBQUU7c0JBQzFCbVgsYUFBYSxDQUFDMUcsTUFBTSxDQUFDO29CQUN0QjtvQkFDREEsTUFBTSxHQUFHQSxNQUFNLENBQUN6VyxVQUFVO2tCQUMzQjtnQkFDRjtjQUNiLENBQVcsTUFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxDQUFDc2MsV0FBVyxDQUFDdEosR0FBRyxDQUFDNkgsSUFBSSxDQUFDLEVBQUU7a0JBQzdDO2tCQUNjO2dCQUNEO2dCQUVELElBQUkyQyxVQUFVLEdBQUcsSUFBSSxDQUFDbEIsV0FBVyxDQUFDelMsR0FBRyxDQUFDZ1IsSUFBSSxDQUFDO2dCQUMzQzJDLFVBQVUsQ0FBQ3JJLFVBQVUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDbUgsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDekIsSUFBSSxDQUFDO2dCQUNoQ0EsSUFBSSxDQUFDdlcsZUFBZSxDQUFDLE9BQU8sQ0FBQztjQUM5QjtZQUNGOztZQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFFQSxDQUFPLEVBQUU7WUFDRDFELEdBQUcsRUFBRSxjQUFjO1lBQ25COEQsS0FBSyxFQUFFLFNBQVM4VyxZQUFZLENBQUNqRyxPQUFPLEVBQUU7Y0FDcEMsT0FBTyxJQUFJLENBQUMrRyxXQUFXLENBQUN6UyxHQUFHLENBQUMwTCxPQUFPLENBQUM7WUFDckM7O1lBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEM1UsR0FBRyxFQUFFLFVBQVU7WUFDZjhELEtBQUssRUFBRSxTQUFTeVcsUUFBUSxDQUFDYixJQUFJLEVBQUU2QixTQUFTLEVBQUU7Y0FDeEMsSUFBSS9CLFNBQVMsR0FBRyxJQUFJLENBQUNSLGFBQWEsQ0FBQy9QLEdBQUcsQ0FBQ3lRLElBQUksQ0FBQztjQUM1QyxJQUFJRixTQUFTLEtBQUsvTixTQUFTLEVBQUU7Z0JBQ3ZDO2dCQUNZK04sU0FBUyxDQUFDMEMsWUFBWSxDQUFDWCxTQUFTLENBQUM7Y0FDN0MsQ0FBVyxNQUFNO2dCQUNML0IsU0FBUyxHQUFHLElBQUk4QixTQUFTLENBQUM1QixJQUFJLEVBQUU2QixTQUFTLENBQUM7Y0FDM0M7Y0FFRCxJQUFJLENBQUN2QyxhQUFhLENBQUM1UCxHQUFHLENBQUNzUSxJQUFJLEVBQUVGLFNBQVMsQ0FBQztjQUV2QyxPQUFPQSxTQUFTO1lBQ2pCOztZQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEeFosR0FBRyxFQUFFLFlBQVk7WUFDakI4RCxLQUFLLEVBQUUsU0FBUzBXLFVBQVUsQ0FBQ2QsSUFBSSxFQUFFNkIsU0FBUyxFQUFFO2NBQzFDLElBQUkvQixTQUFTLEdBQUcsSUFBSSxDQUFDUixhQUFhLENBQUMvUCxHQUFHLENBQUN5USxJQUFJLENBQUM7Y0FDNUMsSUFBSSxDQUFDRixTQUFTLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJO2NBQ1o7Y0FFREEsU0FBUyxDQUFDMkMsZUFBZSxDQUFDWixTQUFTLENBQUM7Y0FDcEMsSUFBSS9CLFNBQVMsQ0FBQ3VDLFNBQVMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDL0MsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDVSxJQUFJLENBQUM7Y0FDbkM7Y0FFRCxPQUFPRixTQUFTO1lBQ2pCOztZQUVUO0FBQ0E7QUFDQTtVQUVBLENBQU8sRUFBRTtZQUNEeFosR0FBRyxFQUFFLG1CQUFtQjtZQUN4QjhELEtBQUssRUFBRSxTQUFTNlksaUJBQWlCLEdBQUc7Y0FDNUM7Y0FDVSxJQUFJRSxhQUFhLEdBQUd4WixLQUFLLENBQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDMGMsU0FBUyxDQUFDOUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7Y0FDMUVzRixhQUFhLENBQUNqWSxPQUFPLENBQUMsVUFBVWtZLFlBQVksRUFBRTtnQkFDNUMsSUFBSSxDQUFDakMsUUFBUSxDQUFDaUMsWUFBWSxFQUFFLElBQUksQ0FBQztjQUNsQyxDQUFBLEVBQUUsSUFBSSxDQUFDOztjQUVsQjtjQUNVLElBQUksQ0FBQ3pELFNBQVMsQ0FBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUNnRyxTQUFTLENBQUNwSCxJQUFJLElBQUksSUFBSSxDQUFDb0gsU0FBUyxDQUFDSSxlQUFlLEVBQUU7Z0JBQUU1VyxVQUFVLEVBQUUsSUFBSTtnQkFBRTBULE9BQU8sRUFBRSxJQUFJO2dCQUFFakQsU0FBUyxFQUFFO2NBQUksQ0FBRSxDQUFDO1lBQ3BJOztZQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFFQSxDQUFPLEVBQUU7WUFDRHRXLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckI4RCxLQUFLLEVBQUUsU0FBU3dZLGNBQWMsQ0FBQ3RCLE9BQU8sRUFBRUMsSUFBSSxFQUFFO2NBQzVDLElBQUk4QixLQUFLLEdBQUcsSUFBSTtjQUNoQi9CLE9BQU8sQ0FBQ3BXLE9BQU8sQ0FBQyxVQUFVc1csTUFBTSxFQUFFO2dCQUNoQyxRQUFRQSxNQUFNLENBQUNwYixJQUFJO2tCQUNqQixLQUFLLFdBQVc7b0JBQ2R1RCxLQUFLLENBQUMxRCxJQUFJLENBQUN1YixNQUFNLENBQUNuRSxVQUFVLENBQUMsQ0FBQ25TLE9BQU8sQ0FBQyxVQUFVOFUsSUFBSSxFQUFFO3NCQUNwRCxJQUFJQSxJQUFJLENBQUN0VSxRQUFRLEtBQUs0UixJQUFJLENBQUNDLFlBQVksRUFBRTt3QkFDdkM7c0JBQ0Q7c0JBQ0QsSUFBSTRGLGFBQWEsR0FBR3haLEtBQUssQ0FBQzFELElBQUksQ0FBQytaLElBQUksQ0FBQ25DLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO3NCQUNoRSxJQUFJZ0IsT0FBTyxDQUFDNVksSUFBSSxDQUFDK1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO3dCQUNqQ21ELGFBQWEsQ0FBQ0csT0FBTyxDQUFDdEQsSUFBSSxDQUFDO3NCQUM1QjtzQkFDRG1ELGFBQWEsQ0FBQ2pZLE9BQU8sQ0FBQyxVQUFVa1ksWUFBWSxFQUFFO3dCQUM1QyxJQUFJLENBQUNqQyxRQUFRLENBQUNpQyxZQUFZLEVBQUUsSUFBSSxDQUFDO3NCQUNsQyxDQUFBLEVBQUVDLEtBQUssQ0FBQztvQkFDVixDQUFBLEVBQUVBLEtBQUssQ0FBQztvQkFDVDtrQkFDRixLQUFLLFlBQVk7b0JBQ2YsSUFBSTdCLE1BQU0sQ0FBQ0MsYUFBYSxLQUFLLE9BQU8sRUFBRTtzQkFDcEM7b0JBQ0Q7b0JBQ0QsSUFBSXpFLE1BQU0sR0FBQSwyQkFBOEJ3RSxNQUFNLENBQUN4RSxNQUFNO29CQUNyRCxJQUFJcEIsS0FBSyxHQUFHb0IsTUFBTSxDQUFDdUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztvQkFDeEM4RCxLQUFLLENBQUNsQyxRQUFRLENBQUNuRSxNQUFNLEVBQUVwQixLQUFLLENBQUM7b0JBQzdCO2dCQUFNO2NBRVgsQ0FBQSxFQUFFLElBQUksQ0FBQztZQUNUO1VBQ0YsQ0FBQSxDQUFDLENBQUM7VUFFSCxPQUFPOEcsWUFBWTtRQUN6QixDQUFLLEVBQUU7O1FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1FBR0ksU0FBU3ZDLGdCQUFnQixDQUFDSCxJQUFJLEVBQUV1RCxRQUFRLEVBQUVDLGtCQUFrQixFQUFFO1VBQzVELElBQUl4RCxJQUFJLENBQUN0VSxRQUFRLElBQUk0UixJQUFJLENBQUNDLFlBQVksRUFBRTtZQUN0QyxJQUFJdEMsT0FBTyxHQUE4QiwyQkFBQStFLElBQUk7WUFDN0MsSUFBSXVELFFBQVEsRUFBRTtjQUNaQSxRQUFRLENBQUN0SSxPQUFPLENBQUM7WUFDbEI7O1lBRVQ7WUFDQTtZQUNBO1lBQ0E7WUFDUSxJQUFJd0MsVUFBVSxHQUFBLDJCQUE4QnhDLE9BQU8sQ0FBQ3dDLFVBQVU7WUFDOUQsSUFBSUEsVUFBVSxFQUFFO2NBQ2QwQyxnQkFBZ0IsQ0FBQzFDLFVBQVUsRUFBRThGLFFBQW9CLENBQUM7Y0FDbEQ7WUFDRDs7WUFFVDtZQUNBO1lBQ0E7WUFDUSxJQUFJdEksT0FBTyxDQUFDeFAsU0FBUyxJQUFJLFNBQVMsRUFBRTtjQUNsQyxJQUFJZ1ksT0FBTyxHQUFxQyxrQ0FBQXhJLE9BQU87Y0FDakU7Y0FDVSxJQUFJeUksZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQ0UsbUJBQW1CLEdBQUdGLE9BQU8sQ0FBQ0UsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO2NBQ3ZGLEtBQUssSUFBSTlkLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzZkLGdCQUFnQixDQUFDM2QsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtnQkFDaERzYSxnQkFBZ0IsQ0FBQ3VELGdCQUFnQixDQUFDN2QsQ0FBQyxDQUFDLEVBQUUwZCxRQUE0QixDQUFDO2NBQ3BFO2NBQ0Q7WUFDRDs7WUFFVDtZQUNBO1lBQ0E7WUFDUSxJQUFJdEksT0FBTyxDQUFDeFAsU0FBUyxJQUFJLE1BQU0sRUFBRTtjQUMvQixJQUFJbVksSUFBSSxHQUFrQywrQkFBQTNJLE9BQU87Y0FDM0Q7Y0FDVSxJQUFJNEksaUJBQWlCLEdBQUdELElBQUksQ0FBQzlGLGFBQWEsR0FBRzhGLElBQUksQ0FBQzlGLGFBQWEsQ0FBQztnQkFBRUMsT0FBTyxFQUFFO2VBQU0sQ0FBQyxHQUFHLEVBQUU7Y0FDdkYsS0FBSyxJQUFJK0YsRUFBRSxHQUFHLENBQUMsRUFBRUEsRUFBRSxHQUFHRCxpQkFBaUIsQ0FBQzlkLE1BQU0sRUFBRStkLEVBQUUsRUFBRSxFQUFFO2dCQUNwRDNELGdCQUFnQixDQUFDMEQsaUJBQWlCLENBQUNDLEVBQUUsQ0FBQyxFQUFFUCxRQUE0QixDQUFDO2NBQ3RFO2NBQ0Q7WUFDRDtVQUNGOztVQUVQO1VBQ0E7VUFDTSxJQUFJUSxLQUFLLEdBQUcvRCxJQUFJLENBQUNwVCxVQUFVO1VBQzNCLE9BQU9tWCxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3BCNUQsZ0JBQWdCLENBQUM0RCxLQUFLLEVBQUVSLFFBQTRCLENBQUM7WUFDckRRLEtBQUssR0FBR0EsS0FBSyxDQUFDOWEsV0FBVztVQUMxQjtRQUNGOztRQUVMO0FBQ0E7QUFDQTtBQUNBO1FBQ0ksU0FBUzRaLGFBQWEsQ0FBQzdDLElBQUksRUFBRTtVQUMzQixJQUFJQSxJQUFJLENBQUNnRSxhQUFhLENBQUMscUNBQXFDLENBQUMsRUFBRTtZQUM3RDtVQUNEO1VBQ0QsSUFBSXphLEtBQUssR0FBR29DLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztVQUMzQ3ZDLEtBQUssQ0FBQ1UsWUFBWSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7VUFDdkNWLEtBQUssQ0FBQzBhLFdBQVcsR0FBRyxJQUFJLEdBQUcsYUFBYSxHQUFHLDJCQUEyQixHQUFHLHNCQUFzQixHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsd0JBQXdCLEdBQUcsZ0NBQWdDLEdBQUcsNkJBQTZCLEdBQUcsNEJBQTRCLEdBQUcsd0JBQXdCLEdBQUcsS0FBSztVQUM5UWpFLElBQUksQ0FBQ2hYLFdBQVcsQ0FBQ08sS0FBSyxDQUFDO1FBQ3hCO1FBRUQsSUFBSSxDQUFDMmEsV0FBVyxDQUFDNVosU0FBUyxDQUFDNlosY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1VBQ3hEO1VBQ00sSUFBSWhGLFlBQVksR0FBRyxJQUFJdUQsWUFBWSxDQUFDL1csUUFBUSxDQUFDO1VBRTdDaUUsTUFBTSxDQUFDQyxjQUFjLENBQUNxVSxXQUFXLENBQUM1WixTQUFTLEVBQUUsT0FBTyxFQUFFO1lBQ3BEMkcsVUFBVSxFQUFFLElBQUk7WUFDeEI7WUFDUTFCLEdBQUcsRUFBRSxTQUFTQSxHQUFHLEdBQUc7Y0FDbEIsT0FBTyxJQUFJLENBQUNnUSxZQUFZLENBQUMsT0FBTyxDQUFDO1lBQ2xDLENBQUE7WUFDVDtZQUNRN1AsR0FBRyxFQUFFLFNBQVNBLEdBQUcsQ0FBQ2tNLEtBQUssRUFBRTtjQUN2QnVELFlBQVksQ0FBQ2dDLFFBQVEsQ0FBQyxJQUFJLEVBQUV2RixLQUFLLENBQUM7WUFDbkM7VUFDVCxDQUFPLENBQUM7UUFDSDtNQUNMLENBQUcsR0FBRztJQUVOLENBQUMsQ0FBRTs7O0VDdDBCSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNPLFNBQVNqRyxRQUFRLENBQUN5TyxZQUFZLEVBQUU7SUFDdkM7SUFDSSxJQUFNLENBQUMxWixLQUFLLEVBQUUyWixTQUFTLENBQUMsR0FBR0MsQ0FBUyxDQUFDRixZQUFZLENBQUM7SUFDbEQsSUFBTTdkLEdBQUcsR0FBR29MLENBQU0sQ0FBQ2pILEtBQUssQ0FBQztJQUM3QjtJQUNBO0lBQ0ksSUFBTXlDLFFBQVEsR0FBRzZGLEdBQVcsQ0FBQzVJLEtBQUssSUFBSTtNQUNsQyxJQUFJLE9BQU9BLEtBQUssS0FBSyxVQUFVLEVBQUU7UUFDN0IsSUFBTW1aLFFBQVEsR0FBR25aLEtBQUs7UUFDdEJpYSxTQUFTLENBQUM5SyxTQUFTLElBQUk7VUFDbkIsSUFBTTVGLFNBQVMsR0FBRzRQLFFBQVEsQ0FBQ2hLLFNBQVMsQ0FBQztVQUNyQ2hULEdBQUcsQ0FBQ2lHLE9BQU8sR0FBR21ILFNBQVM7VUFDdkIsT0FBT0EsU0FBUztRQUNoQyxDQUFhLENBQUM7TUFDTCxDQUFBLE1BQ0k7UUFDRHBOLEdBQUcsQ0FBQ2lHLE9BQU8sR0FBR3BDLEtBQUs7UUFDbkJpYSxTQUFTLENBQUNqYSxLQUFLLENBQUM7TUFDbkI7SUFDSixDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ04sSUFBTW1hLFFBQVEsR0FBRyxNQUFNO01BQUUsT0FBT2hlLEdBQUcsQ0FBQ2lHLE9BQU87SUFBQyxDQUFFO0lBQzlDd0YsT0FBTyxDQUFDbUYsTUFBTSxDQUFDNVEsR0FBRyxDQUFDaUcsT0FBTyxLQUFLOUIsS0FBSyxJQUFLLE9BQU9BLEtBQUssS0FBSyxRQUFRLElBQUk4WixLQUFLLENBQUM5WixLQUFLLENBQUUsQ0FBQztJQUNwRixPQUFPLENBQUNBLEtBQUssRUFBRXlDLFFBQVEsRUFBRW9YLFFBQVEsQ0FBQztFQUN0Qzs7RUMvQkE7RUFDQSxJQUFJRSxVQUFVLEdBQUcsT0FBT3hHLE1BQU0sSUFBSSxRQUFRLElBQUlBLE1BQU0sSUFBSUEsTUFBTSxDQUFDck8sTUFBTSxLQUFLQSxNQUFNLElBQUlxTyxNQUFNOztFQ0MxRjtFQUNBLElBQUl5RyxRQUFRLEdBQUcsT0FBT25ELElBQUksSUFBSSxRQUFRLElBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDM1IsTUFBTSxLQUFLQSxNQUFNLElBQUkyUixJQUFJOztFQUVoRjtFQUNBLElBQUloQixJQUFJLEdBQUdrRSxVQUFVLElBQUlDLFFBQVEsSUFBSTlRLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTs7RUNKOUQ7RUFDQSxJQUFJdkYsUUFBTSxHQUFHa1MsSUFBSSxDQUFDbFMsTUFBTTs7RUNEeEI7RUFDQSxJQUFJc1csYUFBVyxHQUFHL1UsTUFBTSxDQUFDdEYsU0FBUzs7RUFFbEM7RUFDQSxJQUFJNlosZ0JBQWMsR0FBR1EsYUFBVyxDQUFDUixjQUFjOztFQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0EsSUFBSVMsc0JBQW9CLEdBQUdELGFBQVcsQ0FBQ0UsUUFBUTs7RUFFL0M7RUFDQSxJQUFJQyxnQkFBYyxHQUFHelcsUUFBTSxHQUFHQSxRQUFNLENBQUMwVyxXQUFXLEdBQUdoVCxTQUFTOztFQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBLFNBQVNpVCxTQUFTLENBQUM1YSxLQUFLLEVBQUU7SUFDeEIsSUFBSTZhLEtBQUssR0FBR2QsZ0JBQWMsQ0FBQ2xlLElBQUksQ0FBQ21FLEtBQUssRUFBRTBhLGdCQUFjLENBQUM7TUFDbERJLEdBQUcsR0FBRzlhLEtBQUssQ0FBQzBhLGdCQUFjLENBQUM7SUFFL0IsSUFBSTtNQUNGMWEsS0FBSyxDQUFDMGEsZ0JBQWMsQ0FBQyxHQUFHL1MsU0FBUztNQUNqQyxJQUFJb1QsUUFBUSxHQUFHLElBQUk7SUFDdkIsQ0FBRyxDQUFDLE9BQU83ZixDQUFDLEVBQUUsQ0FBRTtJQUVkLElBQUlvWSxNQUFNLEdBQUdrSCxzQkFBb0IsQ0FBQzNlLElBQUksQ0FBQ21FLEtBQUssQ0FBQztJQUM3QyxJQUFJK2EsUUFBUSxFQUFFO01BQ1osSUFBSUYsS0FBSyxFQUFFO1FBQ1Q3YSxLQUFLLENBQUMwYSxnQkFBYyxDQUFDLEdBQUdJLEdBQUc7TUFDakMsQ0FBSyxNQUFNO1FBQ0wsT0FBTzlhLEtBQUssQ0FBQzBhLGdCQUFjLENBQUM7TUFDN0I7SUFDRjtJQUNELE9BQU9wSCxNQUFNO0VBQ2Y7O0VDM0NBO0VBQ0EsSUFBSWlILGFBQVcsR0FBRy9VLE1BQU0sQ0FBQ3RGLFNBQVM7O0VBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxJQUFJc2Esb0JBQW9CLEdBQUdELGFBQVcsQ0FBQ0UsUUFBUTs7RUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxTQUFTTyxjQUFjLENBQUNoYixLQUFLLEVBQUU7SUFDN0IsT0FBT3dhLG9CQUFvQixDQUFDM2UsSUFBSSxDQUFDbUUsS0FBSyxDQUFDO0VBQ3pDOztFQ2ZBO0VBQ0EsSUFBSWliLE9BQU8sR0FBRyxlQUFlO0lBQ3pCQyxZQUFZLEdBQUcsb0JBQW9COztFQUV2QztFQUNBLElBQUlSLGNBQWMsR0FBR3pXLFFBQU0sR0FBR0EsUUFBTSxDQUFDMFcsV0FBVyxHQUFHaFQsU0FBUzs7RUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxTQUFTd1QsVUFBVSxDQUFDbmIsS0FBSyxFQUFFO0lBQ3pCLElBQUlBLEtBQUssSUFBSSxJQUFJLEVBQUU7TUFDakIsT0FBT0EsS0FBSyxLQUFLMkgsU0FBUyxHQUFHdVQsWUFBWSxHQUFHRCxPQUFPO0lBQ3BEO0lBQ0QsT0FBUVAsY0FBYyxJQUFJQSxjQUFjLElBQUlsVixNQUFNLENBQUN4RixLQUFLLENBQUMsR0FDckQ0YSxTQUFTLENBQUM1YSxLQUFLLENBQUMsR0FDaEJnYixjQUFjLENBQUNoYixLQUFLLENBQUM7RUFDM0I7O0VDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNBLFNBQVNvYixZQUFZLENBQUNwYixLQUFLLEVBQUU7SUFDM0IsT0FBT0EsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPQSxLQUFLLElBQUksUUFBUTtFQUNsRDs7RUN2QkE7RUFDQSxJQUFJcWIsT0FBTyxHQUFHLG9CQUFvQjs7RUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDQSxTQUFTQyxlQUFlLENBQUN0YixLQUFLLEVBQUU7SUFDOUIsT0FBT29iLFlBQVksQ0FBQ3BiLEtBQUssQ0FBQyxJQUFJbWIsVUFBVSxDQUFDbmIsS0FBSyxDQUFDLElBQUlxYixPQUFPO0VBQzVEOztFQ1pBO0VBQ0EsSUFBSWQsV0FBVyxHQUFHL1UsTUFBTSxDQUFDdEYsU0FBUzs7RUFFbEM7RUFDQSxJQUFJNlosY0FBYyxHQUFHUSxXQUFXLENBQUNSLGNBQWM7O0VBRS9DO0VBQ0EsSUFBSXdCLG9CQUFvQixHQUFHaEIsV0FBVyxDQUFDZ0Isb0JBQW9COztFQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDa0JELGVBQWUsQ0FBQyxZQUFXO0lBQUUsT0FBTzVmLFNBQVM7RUFBQyxDQUFFLEVBQUUsQ0FBQyxHQUFHNGYsZUFBZSxHQUFHLFVBQVN0YixLQUFLLEVBQUU7SUFDeEcsT0FBT29iLFlBQVksQ0FBQ3BiLEtBQUssQ0FBQyxJQUFJK1osY0FBYyxDQUFDbGUsSUFBSSxDQUFDbUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUNoRSxDQUFDdWIsb0JBQW9CLENBQUMxZixJQUFJLENBQUNtRSxLQUFLLEVBQUUsUUFBUSxDQUFDO0VBQy9DLENBQUE7O0VDOUJBO0VBQ0EsSUFBSXdiLGFBQVcsR0FBRyxPQUFPQyxPQUFPLElBQUksUUFBUSxJQUFJQSxPQUFPLElBQUksQ0FBQ0EsT0FBTyxDQUFDbmEsUUFBUSxJQUFJbWEsT0FBTzs7RUFFdkY7RUFDQSxJQUFJQyxZQUFVLEdBQUdGLGFBQVcsSUFBSSxPQUFPRyxNQUFNLElBQUksUUFBUSxJQUFJQSxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDcmEsUUFBUSxJQUFJcWEsTUFBTTs7RUFFakc7RUFDQSxJQUFJQyxlQUFhLEdBQUdGLFlBQVUsSUFBSUEsWUFBVSxDQUFDRCxPQUFPLEtBQUtELGFBQVc7O0VBRXBFO0VBQ0EsSUFBSUssTUFBTSxHQUFHRCxlQUFhLEdBQUd6RixJQUFJLENBQUMwRixNQUFNLEdBQUdsVSxTQUFTOztFQUVwRDtFQUNxQmtVLE1BQU0sR0FBR0EsTUFBTSxDQUFDQyxRQUFRLEdBQUduVSxTQUFBOztFQ2RoRDtFQUNBLElBQUk2VCxXQUFXLEdBQUcsT0FBT0MsT0FBTyxJQUFJLFFBQVEsSUFBSUEsT0FBTyxJQUFJLENBQUNBLE9BQU8sQ0FBQ25hLFFBQVEsSUFBSW1hLE9BQU87O0VBRXZGO0VBQ0EsSUFBSUMsVUFBVSxHQUFHRixXQUFXLElBQUksT0FBT0csTUFBTSxJQUFJLFFBQVEsSUFBSUEsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3JhLFFBQVEsSUFBSXFhLE1BQU07O0VBRWpHO0VBQ0EsSUFBSUMsYUFBYSxHQUFHRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0QsT0FBTyxLQUFLRCxXQUFXOztFQUVwRTtFQUNBLElBQUlPLFdBQVcsR0FBR0gsYUFBYSxJQUFJdkIsVUFBVSxDQUFDMkIsT0FBTzs7RUFFckQ7RUFDQSxJQUFJQyxRQUFRLEdBQUksWUFBVztJQUN6QixJQUFJO01BQ047TUFDSSxJQUFJQyxLQUFLLEdBQUdSLFVBQVUsSUFBSUEsVUFBVSxDQUFDUyxPQUFPLElBQUlULFVBQVUsQ0FBQ1MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDRCxLQUFLO01BRWhGLElBQUlBLEtBQUssRUFBRTtRQUNULE9BQU9BLEtBQUs7TUFDYjs7TUFFTDtNQUNJLE9BQU9ILFdBQVcsSUFBSUEsV0FBVyxDQUFDSyxPQUFPLElBQUlMLFdBQVcsQ0FBQ0ssT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFHLENBQUMsT0FBT2xoQixDQUFDLEVBQUUsQ0FBRTtFQUNoQixDQUFDLEVBQUc7O0VDdkJKO0VBQ3VCK2dCLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxZQUFBO0VDQVJDLEdBQWEsQ0FBQyxJQUFJLENBQUE7RUNKL0MsSUFBTUMsZ0JBQWdCLEdBQUdELEdBQWEsQ0FBQztJQUFFRSxpQkFBaUIsRUFBRSxNQUFNO0VBQUssQ0FBRSxDQUFDO0VDTTFFLFNBQVNDLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU7SUFDcEMsT0FBT0EsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxLQUFLO0VBQ3pCO0VBQ0EsU0FBU0Msa0JBQWtCLENBQUM5TCxPQUFPLEVBQUU7SUFDakMsT0FBTzVHLElBQUksQ0FBQzJTLEdBQUcsQ0FBQyxHQUFJcEksTUFBTSxDQUFDcUksZ0JBQWdCLENBQUNoTSxPQUFPLElBQUl0UCxRQUFRLENBQUM0UCxJQUFJLENBQUMsQ0FBQzJMLGdCQUFnQix1QkFBdUIsQ0FBRXRRLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ25JLEdBQUcsQ0FBQzBZLEdBQUcsSUFBSTtNQUNqSSxJQUFJQSxHQUFHLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFDbEIsT0FBTyxDQUFDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUVGLEdBQUcsQ0FBQ3BoQixNQUFNLEdBQUcsQ0FBQyxDQUFDO01BQzVDLElBQUlvaEIsR0FBRyxDQUFDQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQVEsQ0FBQ0QsR0FBRyxDQUFDRSxTQUFTLENBQUMsQ0FBQyxFQUFFRixHQUFHLENBQUNwaEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFJLElBQUk7TUFDckQsT0FBTyxJQUFJO0lBQ2QsQ0FBQSxDQUFDLENBQUM7RUFDUDtFQUNBLFNBQVN1aEIsVUFBVSxDQUFDQyxTQUFTLEVBQUU7SUFDM0IsT0FBT0EsU0FBUyxDQUFDM1EsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUMvQjtFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNPLFNBQVM0USxhQUFhLE9BQXdGO0lBQUE7SUFBQSxJQUF2RjtNQUFFQyxJQUFJLEVBQUV0aEIsQ0FBQztNQUFFdWhCLGNBQWMsRUFBRWppQixDQUFDO01BQUVraUIsT0FBTyxFQUFFL2UsQ0FBQztNQUFFZ2YsU0FBUztNQUFFQyxjQUFjLEVBQUV2aUIsQ0FBQztNQUFFd2lCLFFBQVEsRUFBRTNnQjtJQUFDLENBQUU7SUFDL0csSUFBTSxDQUFDNGdCLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdyUyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2pELElBQU07TUFBRWlSO0lBQWlCLENBQUUsR0FBR3FCLENBQVUsQ0FBQ3RCLGdCQUFnQixDQUFDO0lBQzFEaUIsU0FBUyxLQUFUQSxTQUFTLEdBQUtmLGdCQUFnQixDQUFDZSxTQUFTLENBQUM7SUFDekN0aUIsQ0FBQyxLQUFEQSxDQUFDLEdBQUssUUFBUTtJQUNkLE9BQUFHLENBQUMscUNBQURBLENBQUMsR0FBS21oQixpQkFBaUIsRUFBRTtJQUN6QixNQUFBaGUsQ0FBQyxtQ0FBREEsQ0FBQyxHQUFLLEtBQUs7SUFDWCxJQUFNc2YsVUFBVSxHQUFHblMsZUFBZSxDQUFDbk4sQ0FBQyxDQUFDO0lBQ3pDO0lBQ0kySSxrQkFBa0IsQ0FBQyxlQUFlLEVBQUVxVyxTQUFTLENBQUM7SUFDOUMsSUFBTU8saUJBQWlCLEdBQUdwUyxlQUFlLENBQUN6USxDQUFDLENBQUM7SUFDNUMsSUFBTTtNQUFFcVUsZ0JBQWdCLEVBQUU7UUFBRUgsVUFBVTtRQUFFRTtNQUFXO0tBQUksR0FBR1QsYUFBYSxDQUFDO01BQUVDLG9CQUFvQixFQUFFLENBQUU7SUFBQSxDQUFFLENBQUM7SUFDckcsSUFBTWtQLGFBQWEsR0FBR3pXLENBQU0sQ0FBQyxDQUFBLENBQUUsQ0FBQztJQUNoQyxJQUFNMFcsVUFBVSxHQUFHMVcsQ0FBTSxDQUFDLElBQUlvRixHQUFHLENBQUMsQ0FDdEM7SUFDQTtJQUFBLFVBQ1c2USxTQUFTLGNBQ2YsQ0FBQyxDQUFDO0lBQ0gsSUFBTVUsd0JBQXdCLEdBQUd0VixHQUFXLENBQUMsTUFBTTtNQUMvQyxJQUFNdEksS0FBSyxHQUFHNlosUUFBUSxFQUFFO01BQ3hCdlMsT0FBTyxDQUFDbUYsTUFBTSxDQUFDLENBQUMsQ0FBQ3pNLEtBQUssQ0FBQztNQUN2QixJQUFJQSxLQUFLLEVBQUU7UUFDUCxJQUFNLENBQUM2ZCxTQUFTLEVBQUVDLEtBQUssQ0FBQyxHQUFHbEIsVUFBVSxDQUFDNWMsS0FBSyxDQUFDO1FBQzVDLElBQUk4ZCxLQUFLLElBQUksWUFBWSxFQUFFO1VBQ3ZCcmIsUUFBUSxXQUFJb2IsU0FBUyxlQUFZO1VBQ2pDLElBQUlFLGFBQWEsQ0FBQ2pjLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFBQTtZQUMzQix5QkFBQWtjLG9CQUFvQixDQUFDbGMsT0FBTywwREFBNUIsMkJBQUFrYyxvQkFBb0IsRUFBV0QsYUFBYSxDQUFDamMsT0FBTyxDQUFDO1lBQ3JEaWMsYUFBYSxDQUFDamMsT0FBTyxHQUFHLENBQUMsQ0FBQztVQUM3QjtRQUNKO01BQ0o7SUFDSixDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ04sSUFBTW1jLFVBQVUsR0FBR2hYLENBQU0sQ0FBQztNQUN0QmlYLGVBQWUsRUFBR3RqQixDQUFDLElBQUs7UUFDcEIsSUFBSUEsQ0FBQyxDQUFDMFgsTUFBTSxJQUFJeEQsVUFBVSxFQUFFLElBQUlsVSxDQUFDLENBQUN1akIsV0FBVyxFQUFFO1VBQzNDUCx3QkFBd0IsRUFBRTtRQUM3QjtNQUNKO0lBQ1QsQ0FBSyxDQUFDO0lBQ047SUFDSSxJQUFNUSxVQUFVLEdBQUduWCxDQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3BDO0FBQ0E7QUFDQTtJQUNJLElBQU1vWCxhQUFhLEdBQUcvVixHQUFXLENBQUMsQ0FBQ2lJLE9BQU8sRUFBRXNOLFNBQVMsRUFBRUMsS0FBSyxLQUFLO01BQzdELElBQUl2TixPQUFPLElBQUksSUFBSSxFQUNmO01BQ0osSUFBTTRNLGNBQWMsR0FBR00saUJBQWlCLEVBQUU7TUFDMUMsSUFBTWEsa0JBQWtCLEdBQUcsV0FDcEJwQixTQUFTLHVCQUFhQSxTQUFTLHNCQUMvQkEsU0FBUyw0QkFBa0JBLFNBQVMsa0NBQXdCQSxTQUFTLGdDQUNyRUEsU0FBUywyQkFBaUJBLFNBQVMsaUNBQXVCQSxTQUFTLCtCQUNuRUEsU0FBUyxVQUFPLE9BQU8sYUFDdkJBLFNBQVMsVUFBTyxTQUFTLGFBQ3pCQSxTQUFTLFVBQU8sUUFBUSxhQUN4QkEsU0FBUyxVQUFPLFNBQVMsYUFDekJBLFNBQVMsY0FDZjtNQUNELElBQU1xQixlQUFlLEdBQUcsV0FDakJyQixTQUFTLGFBQ1RBLFNBQVMsY0FBSVcsU0FBUyxhQUN0QlgsU0FBUyxjQUFJVyxTQUFTLGNBQUlDLEtBQUssYUFDL0JaLFNBQVMsaUJBQU9DLGNBQWMsRUFDcEM7TUFDVDtNQUNRNU0sT0FBTyxDQUFDaU8sU0FBUyxDQUFDaE8sTUFBTSxDQUFDLEdBQUc4TixrQkFBa0IsQ0FBQztNQUMvQ0Esa0JBQWtCLENBQUN2YSxHQUFHLENBQUN0SSxDQUFDLElBQUlraUIsVUFBVSxDQUFDN2IsT0FBTyxDQUFDNEMsTUFBTSxDQUFDakosQ0FBQyxDQUFDLENBQUM7TUFDekQ4VSxPQUFPLENBQUNpTyxTQUFTLENBQUNyTixHQUFHLENBQUMsR0FBR29OLGVBQWUsQ0FBQztNQUN6Q0EsZUFBZSxDQUFDeGEsR0FBRyxDQUFDdEksQ0FBQyxJQUFJa2lCLFVBQVUsQ0FBQzdiLE9BQU8sQ0FBQ3FQLEdBQUcsQ0FBQzFWLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUEsRUFBRSxFQUFFLENBQUM7SUFDVjtBQUNBO0FBQ0E7SUFDSSxJQUFNZ2pCLGtCQUFrQixHQUFHblcsR0FBVyxDQUFDLENBQUNpSSxPQUFPLEVBQUVtTyxPQUFPLEVBQUVoZixLQUFLLEtBQUs7TUFDaEUsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRTtRQUNmQSxLQUFLLGFBQU1BLEtBQUssT0FBSTtRQUNwQjZRLE9BQU8sQ0FBQzFSLEtBQUssQ0FBQ0YsV0FBVyxDQUFDK2YsT0FBTyxFQUFFaGYsS0FBSyxDQUFDO1FBQ3pDZ2UsYUFBYSxDQUFDNWIsT0FBTyxDQUFDNGMsT0FBTyxDQUFDLEdBQUdoZixLQUFLO01BQ3pDLENBQUEsTUFDSTtRQUNENlEsT0FBTyxDQUFDMVIsS0FBSyxDQUFDOGYsY0FBYyxDQUFDRCxPQUFPLENBQUM7UUFDckMsT0FBT2hCLGFBQWEsQ0FBQzViLE9BQU8sQ0FBQzRjLE9BQU8sQ0FBQztNQUN4QztJQUNKLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDVjtBQUNBO0FBQ0E7SUFDSSxJQUFNRSxvQkFBb0IsR0FBR3RXLEdBQVcsQ0FBQyxDQUFDaUksT0FBTyxFQUFFc08sUUFBUSxLQUFLO01BQzVESixrQkFBa0IsQ0FBQ2xPLE9BQU8sY0FBTzJNLFNBQVMsbUJBQWdCMkIsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUV4TyxHQUFHLENBQUM7TUFDeEVvTyxrQkFBa0IsQ0FBQ2xPLE9BQU8sY0FBTzJNLFNBQVMsb0JBQWlCMkIsUUFBUSxhQUFSQSxRQUFRLHVCQUFSQSxRQUFRLENBQUVDLElBQUksQ0FBQztNQUMxRUwsa0JBQWtCLENBQUNsTyxPQUFPLGNBQU8yTSxTQUFTLHFCQUFrQjJCLFFBQVEsYUFBUkEsUUFBUSx1QkFBUkEsUUFBUSxDQUFFRSxLQUFLLENBQUM7TUFDNUVOLGtCQUFrQixDQUFDbE8sT0FBTyxjQUFPMk0sU0FBUyxzQkFBbUIyQixRQUFRLGFBQVJBLFFBQVEsdUJBQVJBLFFBQVEsQ0FBRUcsTUFBTSxDQUFDO0lBQ2pGLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDVjtBQUNBO0FBQ0E7SUFDSSxJQUFNQyxpQ0FBaUMsR0FBRzNXLEdBQVcsQ0FBQyxDQUFDaUksT0FBTyxFQUFFME0sT0FBTyxLQUFLO01BQ3hFLElBQUkxTSxPQUFPLEVBQUU7UUFDVCxJQUFJM0wsSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJcVksT0FBTyxFQUFFO1VBQ1RyWSxJQUFJLEdBQUcyTCxPQUFPLENBQUMyTyxxQkFBcUIsRUFBRTtRQUN6QztRQUNETixvQkFBb0IsQ0FBQ3JPLE9BQU8sRUFBRTNMLElBQUksQ0FBQztNQUN0QztJQUNKLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDVjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDSSxJQUFNbVosYUFBYSxHQUFHOVcsQ0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQU0rVyxvQkFBb0IsR0FBRy9XLENBQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJLElBQU1rWSxhQUFhLEdBQUc3VyxHQUFXLENBQUMsQ0FBQ3VVLFNBQVMsRUFBRXVDLFNBQVMsRUFBRXBXLE1BQU0sS0FBSztNQUNoRSxJQUFJNlQsU0FBUyxJQUFJLElBQUksRUFDakI7TUFDSixJQUFNLENBQUN3QyxhQUFhLEVBQUVDLFNBQVMsQ0FBQyxHQUFHMUMsVUFBVSxDQUFDQyxTQUFTLENBQUM7TUFDeERTLFlBQVksQ0FBQytCLGFBQWEsSUFBSSxPQUFPLElBQUtBLGFBQWEsSUFBSSxNQUFNLElBQUlDLFNBQVMsSUFBSSxVQUFXLENBQUM7TUFDOUYsSUFBTS9PLE9BQU8sR0FBR3pCLFVBQVUsRUFBRTtNQUM1QixJQUFNbU8sT0FBTyxHQUFHTyxVQUFVLEVBQUU7TUFDcEM7TUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNRLElBQUlQLE9BQU8sSUFBSTFNLE9BQU8sSUFBSStPLFNBQVMsSUFBSSxNQUFNLEVBQUU7UUFDdkQ7UUFDWS9PLE9BQU8sQ0FBQ2lPLFNBQVMsQ0FBQ3JOLEdBQUcsV0FBSStMLFNBQVMsY0FBVztRQUM3Q21CLGFBQWEsQ0FBQzlOLE9BQU8sRUFBRThPLGFBQWEsRUFBRSxVQUFVLENBQUM7UUFDakRFLFdBQVcsQ0FBQ2hQLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDckIwTyxpQ0FBaUMsQ0FBQzFPLE9BQU8sRUFBRTBNLE9BQU8sQ0FBQztRQUNuRG9CLGFBQWEsQ0FBQzlOLE9BQU8sRUFBRThPLGFBQWEsRUFBRUMsU0FBUyxDQUFDO1FBQ2hEQyxXQUFXLENBQUNoUCxPQUFPLENBQUM7UUFDcEJBLE9BQU8sQ0FBQ2lPLFNBQVMsQ0FBQ2hPLE1BQU0sV0FBSTBNLFNBQVMsY0FBVztRQUNoRHFDLFdBQVcsQ0FBQ2hQLE9BQU8sQ0FBQztNQUN2QixDQUFBLE1BQ0k7UUFDRDhOLGFBQWEsQ0FBQzlOLE9BQU8sRUFBRThPLGFBQWEsRUFBRUMsU0FBUyxDQUFDO1FBQzVEO1FBQ0E7UUFDWSxJQUFJL08sT0FBTyxFQUNQZ1AsV0FBVyxDQUFDaFAsT0FBTyxDQUFDO01BQzNCO01BQ0QsSUFBTTRNLGNBQWMsR0FBR00saUJBQWlCLEVBQUU7TUFDMUMsSUFBSU4sY0FBYyxFQUFFO1FBQ2hCLElBQU1qTSxLQUFLLEdBQUlpTSxjQUFjLElBQUksT0FBTyxJQUFJa0MsYUFBYSxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUdoWSxTQUFVO1FBQ3ZGLElBQUk2SixLQUFLLEVBQ0wrTSxVQUFVLENBQUNuYyxPQUFPLENBQUNvUCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBRWhDLE9BQU8rTSxVQUFVLENBQUNuYyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUl5TyxPQUFPLEVBQ1BBLE9BQU8sQ0FBQ1csS0FBSyxHQUFJQSxLQUFLLElBQUksS0FBTTtNQUN2QztNQUNELFFBQVFvTyxTQUFTO1FBQ2IsS0FBSyxNQUFNO1VBQUU7WUFBQTtZQUNULElBQUl2QixhQUFhLENBQUNqYyxPQUFPLElBQUksQ0FBQyxFQUMxQiwwQkFBQWtjLG9CQUFvQixDQUFDbGMsT0FBTywyREFBNUIsNEJBQUFrYyxvQkFBb0IsRUFBV0QsYUFBYSxDQUFDamMsT0FBTyxDQUFDO1lBQ3pEaWMsYUFBYSxDQUFDamMsT0FBTyxHQUFHcUIscUJBQXFCLENBQUMsTUFBTTtjQUFFVixRQUFRLFdBQUk0YyxhQUFhLGlCQUFjO1lBQUMsQ0FBRSxDQUFDO1lBQ2pHckIsb0JBQW9CLENBQUNsYyxPQUFPLEdBQUluSCxDQUFDLElBQUswSSxvQkFBb0IsQ0FBQzFJLENBQUMsQ0FBQztZQUM3RDtVQUNIO1FBQ0QsS0FBSyxZQUFZO1VBQUU7WUFBQTtZQUNmLElBQUlvakIsYUFBYSxDQUFDamMsT0FBTyxJQUFJLENBQUMsRUFDMUIsMEJBQUFrYyxvQkFBb0IsQ0FBQ2xjLE9BQU8sMkRBQTVCLDRCQUFBa2Msb0JBQW9CLEVBQVdELGFBQWEsQ0FBQ2pjLE9BQU8sQ0FBQztZQUN6RGljLGFBQWEsQ0FBQ2pjLE9BQU8sR0FBRzFFLFVBQVUsQ0FBQyxNQUFNO2NBQ3JDd2dCLHdCQUF3QixFQUFFO1lBQzdCLENBQUEsRUFBRXZCLGtCQUFrQixDQUFDOUwsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3JDeU4sb0JBQW9CLENBQUNsYyxPQUFPLEdBQUluSCxDQUFDLElBQUt5SSxZQUFZLENBQUN6SSxDQUFDLENBQUM7WUFDckQ7VUFDSDtRQUNELEtBQUssVUFBVTtVQUFFO1lBQzdCO1lBQ2dCO1VBQ0g7UUFDRDtVQUFTO1lBQ0wsU0FBUyxDQUFBO1lBQ1QyTSxPQUFPLENBQUMwRixHQUFHLDZDQUFzQzZQLFNBQVMsa0NBQXdCdUMsU0FBUyxhQUFUQSxTQUFTLGNBQVRBLFNBQVMsR0FBSSxNQUFNLEVBQUc7WUFDeEc7VUFDSDtNQUFBO0lBRVIsQ0FBQSxFQUFFLEVBQUUsQ0FBQztJQUNOLElBQU0sQ0FBQ3ZGLFFBQVEsRUFBRXBYLFFBQVEsQ0FBQyxHQUFHa0YsZUFBZSxDQUFDd1gsYUFBYSxFQUFFN1YsVUFBVSxFQUFFQyxjQUFjLENBQUM7SUFDM0Y7SUFDQTtJQUNJVixDQUFlLENBQUMsTUFBTTtNQUMxQjtNQUNRLElBQUlwTixDQUFDLElBQUksSUFBSSxFQUNUO01BQ1o7TUFDQTtNQUNBO01BQ0E7TUFDUSxJQUFJLENBQUMyaUIsVUFBVSxDQUFDdGMsT0FBTyxFQUFFO1FBQ3JCNmIsVUFBVSxDQUFDN2IsT0FBTyxDQUFDNEMsTUFBTSxXQUFJd1ksU0FBUyxjQUFXO1FBQ2pELElBQU0zTSxPQUFPLEdBQUd6QixVQUFVLEVBQUU7UUFDNUIsSUFBSXlCLE9BQU8sRUFBRTtVQUNUQSxPQUFPLENBQUNpTyxTQUFTLENBQUNoTyxNQUFNLFdBQUkwTSxTQUFTLGNBQVc7VUFDaEU7VUFDQTtVQUNnQnFDLFdBQVcsQ0FBQ2hQLE9BQU8sQ0FBQztRQUN2QjtNQUNKO01BQ0QsSUFBTWlQLFlBQVksR0FBRzNGLFFBQVEsRUFBRTtNQUMvQixJQUFJeUYsU0FBUyxHQUFHLE1BQU07TUFDdEIsSUFBSUUsWUFBWSxFQUFFO1FBQ2QsSUFBTSxDQUFDQyxnQkFBZ0IsRUFBRUMsWUFBWSxDQUFDLEdBQUc5QyxVQUFVLENBQUM0QyxZQUFZLENBQUM7UUFDakUsSUFBSUUsWUFBWSxJQUFJLFVBQVUsRUFDMUJKLFNBQVMsR0FBRyxZQUFZO01BQy9CO01BQ1Q7TUFDUSxJQUFJN2pCLENBQUMsRUFBRTtRQUNILElBQUkyaUIsVUFBVSxDQUFDdGMsT0FBTyxJQUFJL0csQ0FBQyxFQUN2QjBILFFBQVEsaUJBQVU2YyxTQUFTLEVBQUcsQ0FBQyxLQUUvQjdjLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNqQyxDQUFBLE1BQ0k7UUFDRCxJQUFJMmIsVUFBVSxDQUFDdGMsT0FBTyxJQUFJL0csQ0FBQyxFQUN2QjBILFFBQVEsZ0JBQVM2YyxTQUFTLEVBQUcsQ0FBQyxLQUU5QjdjLFFBQVEsQ0FBQyxlQUFlLENBQUM7TUFDaEM7TUFDRDJiLFVBQVUsQ0FBQ3RjLE9BQU8sR0FBRyxJQUFJO0lBQ2pDLENBQUssRUFBRSxDQUFDckcsQ0FBQyxDQUFDLENBQUM7SUFDUCxJQUFJZ0IsQ0FBQyxJQUFJLElBQUksRUFDVGloQixhQUFhLENBQUM1YixPQUFPLGFBQU1vYixTQUFTLGVBQVksR0FBR3pnQixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBRTVELE9BQU9paEIsYUFBYSxDQUFDNWIsT0FBTyxhQUFNb2IsU0FBUyxlQUFZO0lBSTNELE9BQU87TUFDSEcsU0FBUztNQUNUMWhCLEtBQUssRUFBRXNSLGNBQWMsQ0FBQytCLFdBQVc7UUFDN0IxSSxTQUFTLEVBQUUsQ0FDUCxHQUFHcVgsVUFBVSxDQUFDN2IsT0FBTyxZQUNsQm9iLFNBQVMsaUJBQU90aUIsQ0FBQyxhQUNqQnNpQixTQUFTLHdCQUF3QyxLQUFLLGFBQ3REQSxTQUFTLHVCQUFzQyxLQUFLLEVBQzFELENBQUNqVCxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ1hwTCxLQUFLLEVBQUU2ZSxhQUFhLENBQUM1YjtNQUFPLEdBQ3pCbWMsVUFBVSxDQUFDbmMsT0FBTztJQUVqQyxDQUFLO0VBQ0w7RUFDQSxJQUFNNmQsZ0JBQWdCLEdBQUczRCxHQUFhLENBQUMsS0FBSyxDQUFDO0VBSXRDLElBQU00RCxjQUFjLEdBQUdDLENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVNtWixjQUFjLFFBQW1IL2pCLEdBQUcsRUFBRTtJQUFBLElBQXZIO1FBQUVpa0Isb0JBQW9CO1FBQUU5QyxjQUFjO1FBQUVJLFFBQVE7UUFBRUYsU0FBUztRQUFFQyxjQUFjO1FBQUVGLE9BQU87UUFBRUYsSUFBSTtRQUFFemhCO01BQW9CLENBQUE7TUFBUEssS0FBSztJQUN2TCxJQUFNO01BQUVBLEtBQUssRUFBRW9rQixlQUFlO01BQUUxQztJQUFTLENBQUUsR0FBR1AsYUFBYSxDQUFDO01BQ3hERSxjQUFjO01BQ2RFLFNBQVM7TUFDVEUsUUFBUTtNQUNSRCxjQUFjO01BQ2RGLE9BQU87TUFDUEY7SUFDUixDQUFLLENBQUM7SUFDRixJQUFNaUQsZUFBZSxHQUFJMWtCLFFBQVEsSUFBSUEsUUFBUSxDQUFDSSxJQUFJLElBQUlKLFFBQVEsQ0FBQ0ssS0FBTTtJQUNyRSxJQUFNc2tCLFVBQVUsR0FBR2hULGNBQWMsQ0FBQ3RSLEtBQUssRUFBRW9rQixlQUFlLGtDQUFPcGtCLEtBQUs7TUFBRUU7SUFBRyxJQUFJbWtCLGVBQWU7TUFBS25rQixHQUFHLEVBQUVQLFFBQVEsQ0FBQ087SUFBRyxHQUFLUCxRQUFRLENBQUNLLEtBQUssSUFBSyxDQUFBLENBQUUsQ0FBQztJQUNqSjtJQUNBO0lBQ0E7SUFDQTtJQUNJLElBQU11a0IsY0FBYyxHQUFJbkQsSUFBSSxJQUFJLENBQUMrQyxvQkFBcUI7SUFDdEQsSUFBTUssbUJBQW1CLEdBQUdsWixDQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pDaUUsQ0FBUyxDQUFDLE1BQU07TUFDWixJQUFJZ1YsY0FBYyxFQUNkQyxtQkFBbUIsQ0FBQ3JlLE9BQU8sS0FBM0JxZSxtQkFBbUIsQ0FBQ3JlLE9BQU8sR0FBSyxJQUFJO0lBQzNDLENBQUEsRUFBRSxDQUFDcWUsbUJBQW1CLENBQUNyZSxPQUFPLEdBQUcsS0FBSyxHQUFHb2UsY0FBYyxDQUFDLENBQUM7SUFDMUQsSUFBSSxDQUFDQSxjQUFjLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNyZSxPQUFPLEVBQy9DLE9BQU8sSUFBSTtJQUNmLElBQU1wRixPQUFPLEdBQUd1SyxDQUFNLENBQUM7TUFBRWlWLGlCQUFpQixFQUFFLE1BQU07SUFBSyxDQUFFLENBQUMsQ0FBQ3BhLE9BQU87SUFDbEUsSUFBSXFMLEdBQUc7SUFDUCxJQUFJNlMsZUFBZSxFQUFFO01BQ2pCN1MsR0FBRyxHQUFHalMsR0FBQyxDQUFDK2dCLGdCQUFnQixDQUFDM1osUUFBUSxFQUFFO1FBQUU1QyxLQUFLLEVBQUVoRDtNQUFPLENBQUUsRUFBRTBqQixHQUFZLENBQUM5a0IsUUFBUSxFQUFFMmtCLFVBQVUsQ0FBQyxDQUFDO0lBQzdGLENBQUEsTUFDSTtNQUNEOVMsR0FBRyxHQUFHalMsR0FBQyxDQUFDK2dCLGdCQUFnQixDQUFDM1osUUFBUSxFQUFFO1FBQUU1QyxLQUFLLEVBQUVoRDtNQUFTLENBQUEsRUFDakR4QixHQUFDLENBQUMsTUFBTSxvQkFBTytrQixVQUFVLEdBQUkza0IsUUFBUSxDQUFDLENBQUM7SUFDOUM7SUFDRCxPQUFRSixHQUFDLENBQUN5a0IsZ0JBQWdCLENBQUNyZCxRQUFRLEVBQUU7TUFBRTVDLEtBQUssRUFBRTJkO0lBQVMsQ0FBRSxFQUFFbFEsR0FBRyxDQUFDO0VBQ25FLENBQUMsQ0FBQyxDQUFDO0VBSUgsU0FBU29TLFdBQVcsQ0FBQzNrQixDQUFDLEVBQUU7SUFDeEI7SUFDQTtJQUNhQSxDQUFDLENBQUNza0IscUJBQXFCLEVBQUU7SUFDekJ0a0IsQ0FBQyxDQUFDaUUsS0FBSyxDQUFDd2hCLE9BQU87SUFDZnpsQixDQUFDLENBQUNpRSxLQUFLLENBQUN5aEIsU0FBUztJQUMxQixPQUFPMWxCLENBQUM7RUFDWjtFQ3JVTyxTQUFTMmxCLGVBQWUsUUFBcUc7SUFBQTtJQUFBLElBQXBHO01BQUVyRCxTQUFTO01BQUVzRCxPQUFPO01BQUVDLFlBQVk7TUFBRUMsYUFBYTtNQUFFQyxVQUFVO01BQUVDLGVBQWU7TUFBRUM7S0FBa0I7SUFDOUgzRCxTQUFTLEdBQUdmLGdCQUFnQixDQUFDZSxTQUFTLENBQUM7SUFDdkMsT0FBUTtNQUNKNVcsU0FBUyxFQUFFcUYsSUFBSSxXQUFJdVIsU0FBUyxXQUFRO01BQ3BDcmUsS0FBSyxFQUFFO1FBQ0gsYUFBTXFlLFNBQVMsb0NBQXlCMkQsZ0JBQWdCLGFBQWhCQSxnQkFBZ0IsY0FBaEJBLGdCQUFnQixHQUFJRixVQUFVLHlDQUFJLEdBQUk7UUFDOUUsYUFBTXpELFNBQVMsbUNBQXdCMEQsZUFBZSxhQUFmQSxlQUFlLGNBQWZBLGVBQWUsR0FBSUQsVUFBVSx5Q0FBSSxDQUFFO1FBQzFFLGFBQU16RCxTQUFTLGlDQUFzQndELGFBQWEsYUFBYkEsYUFBYSxjQUFiQSxhQUFhLEdBQUlGLE9BQU8seUNBQUksQ0FBRTtRQUNuRSxhQUFNdEQsU0FBUyxnQ0FBcUJ1RCxZQUFZLGFBQVpBLFlBQVksY0FBWkEsWUFBWSxHQUFJRCxPQUFPLHlDQUFJO01BQ2xFO0lBQ1QsQ0FBSztFQUNMO0VBQ08sSUFBTU0sSUFBSSxHQUFHakIsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBU3FhLElBQUksUUFBb0xqbEIsR0FBRyxFQUFFO0lBQUEsSUFBeEw7UUFBRXFoQixTQUFTO1FBQUVFLFFBQVE7UUFBRTBDLG9CQUFvQjtRQUFFYSxVQUFVO1FBQUVFLGdCQUFnQjtRQUFFRCxlQUFlO1FBQUVKLE9BQU87UUFBRUUsYUFBYTtRQUFFRCxZQUFZO1FBQUUxRCxJQUFJO1FBQUVDLGNBQWM7UUFBRUc7TUFBeUIsQ0FBQTtNQUFONEQsSUFBSTtJQUNwTyxPQUFRN2xCLEdBQUMsQ0FBQzBrQixjQUFjO01BQUkzQyxPQUFPLEVBQUUsS0FBSztNQUFFRixJQUFJLEVBQUVBLElBQUk7TUFBRUssUUFBUSxFQUFFQSxRQUFRO01BQUVKLGNBQWMsRUFBRUEsY0FBYztNQUFFRSxTQUFTLEVBQUVBLFNBQVM7TUFBRUMsY0FBYyxFQUFFQSxjQUFjO01BQUUyQyxvQkFBb0IsRUFBRUE7SUFBb0IsR0FBSzdTLGNBQWM7TUFBR3BSO0lBQUcsR0FBS2tsQixJQUFJLEdBQUlSLGVBQWUsQ0FBQztNQUFFckQsU0FBUztNQUFFc0QsT0FBTztNQUFFQyxZQUFZO01BQUVDLGFBQWE7TUFBRUMsVUFBVTtNQUFFQyxlQUFlO01BQUVDO0lBQWtCLENBQUEsQ0FBQyxDQUFDLEVBQUc7RUFDN1csQ0FBQyxDQUFDLENBQUM7O0VDaEJIO0FBQ0E7QUFDQTtBQUNBO0VBQ08sU0FBU0csZUFBZSxRQUFrQztJQUFBLElBQWpDO01BQUU5RCxTQUFTO01BQUUrRCxPQUFPO01BQUVDO0lBQU8sQ0FBRTtJQUMzRGhFLFNBQVMsR0FBR2YsZ0JBQWdCLENBQUNlLFNBQVMsQ0FBQztJQUN2QyxPQUFPO01BQ0g1VyxTQUFTLFlBQUs0VyxTQUFTLFVBQU87TUFDOUJyZSxLQUFLLEVBQUU7UUFDSCxhQUFNcWUsU0FBUyxpQkFBZStELE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxPQUFPLEdBQUksQ0FBRTtRQUMzQyxhQUFNL0QsU0FBUyxpQkFBZWdFLE9BQU8sYUFBUEEsT0FBTyxjQUFQQSxPQUFPLEdBQUk7TUFDNUM7SUFDVCxDQUFLO0VBQ0w7RUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNPLElBQU1DLElBQUksR0FBR3RCLENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVMwYSxJQUFJLFNBQWlIdGxCLEdBQUcsRUFBRTtJQUFBLElBQXJIO1FBQUVxaEIsU0FBUztRQUFFRSxRQUFRO1FBQUUwQyxvQkFBb0I7UUFBRW1CLE9BQU87UUFBRUMsT0FBTztRQUFFbkUsSUFBSTtRQUFFQyxjQUFjO1FBQUVHO01BQXlCLENBQUE7TUFBTjRELElBQUk7SUFDakssT0FBUTdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLEtBQUs7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJQyxlQUFlLENBQUM7TUFBRTlELFNBQVM7TUFBRWdFLE9BQU87TUFBRUQ7SUFBTyxDQUFFLENBQUMsQ0FBQyxFQUFHO0VBQzFTLENBQUMsQ0FBQyxDQUFDO0VDeEJJLElBQU1HLFFBQVEsR0FBR3ZCLENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVMyYSxRQUFRLFNBQXNNdmxCLEdBQUcsRUFBRTtJQUFBLElBQTFNO1FBQUVpa0Isb0JBQW9CO1FBQUU1QyxTQUFTO1FBQUVFLFFBQVE7UUFBRTZELE9BQU87UUFBRUMsT0FBTztRQUFFbkUsSUFBSTtRQUFFQyxjQUFjO1FBQUV3RCxPQUFPO1FBQUVDLFlBQVk7UUFBRUMsYUFBYTtRQUFFQyxVQUFVO1FBQUVDLGVBQWU7UUFBRUMsZ0JBQWdCO1FBQUUxRDtNQUF5QixDQUFBO01BQU40RCxJQUFJO0lBQzlQLE9BQVE3bEIsR0FBQyxDQUFDMGtCLGNBQWM7TUFBSTNDLE9BQU8sRUFBRSxLQUFLO01BQUVGLElBQUksRUFBRUEsSUFBSTtNQUFFSyxRQUFRLEVBQUVBLFFBQVE7TUFBRUosY0FBYyxFQUFFQSxjQUFjO01BQUVFLFNBQVMsRUFBRUEsU0FBUztNQUFFQyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJDLG9CQUFvQixFQUFFQTtJQUFvQixHQUFLN1MsY0FBYztNQUFHcFI7SUFBRyxHQUFLa2xCLElBQUksR0FBSVIsZUFBZSxDQUFDO01BQUVyRCxTQUFTO01BQUVzRCxPQUFPO01BQUVDLFlBQVk7TUFBRUMsYUFBYTtNQUFFQyxVQUFVO01BQUVDLGVBQWU7TUFBRUM7S0FBa0IsQ0FBQyxFQUFFRyxlQUFlLENBQUM7TUFBRTlELFNBQVM7TUFBRWdFLE9BQU87TUFBRUQ7SUFBUyxDQUFBLENBQUMsQ0FBQyxFQUFHO0VBQy9aLENBQUMsQ0FBQyxDQUFDOztFQ0xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDTyxTQUFTSSxtQkFBbUIsU0FBOEI7SUFBQSxJQUE3QjtNQUFFbkUsU0FBUztNQUFFb0U7S0FBYztJQUMzRHBFLFNBQVMsR0FBR2YsZ0JBQWdCLENBQUNlLFNBQVMsQ0FBQztJQUN2QyxPQUFPO01BQ0g1VyxTQUFTLFlBQUs0VyxTQUFTLGNBQVc7TUFDbENyZSxLQUFLLEVBQUU7UUFDSCxhQUFNcWUsU0FBUywyQkFBd0JvRSxZQUFZLGFBQVpBLFlBQVksY0FBWkEsWUFBWSxHQUFJO01BQzFEO0lBQ1QsQ0FBSztFQUNMO0VBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ08sSUFBTUMsUUFBUSxHQUFHMUIsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBUzhhLFFBQVEsU0FBNkcxbEIsR0FBRyxFQUFFO0lBQUEsSUFBakg7UUFBRXFoQixTQUFTO1FBQUVILElBQUk7UUFBRUssUUFBUTtRQUFFMEMsb0JBQW9CO1FBQUV3QixZQUFZO1FBQUV0RSxjQUFjO1FBQUVHO01BQXlCLENBQUE7TUFBTjRELElBQUk7SUFDckssT0FBUTdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLElBQUk7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJTSxtQkFBbUIsQ0FBQztNQUFFbkUsU0FBUztNQUFFb0U7SUFBWSxDQUFFLENBQUMsQ0FBQyxFQUFHO0VBQ3pTLENBQUMsQ0FBQyxDQUFDO0VDMUJJLElBQU1FLFlBQVksR0FBRzNCLENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVMrYSxZQUFZLFNBQStIM2xCLEdBQUcsRUFBRTtJQUFBLElBQW5JO1FBQUVxaEIsU0FBUztRQUFFSCxJQUFJO1FBQUVLLFFBQVE7UUFBRUosY0FBYztRQUFFOEMsb0JBQW9CO1FBQUVtQixPQUFPO1FBQUVDLE9BQU87UUFBRS9ELGNBQWM7UUFBRW1FO01BQXVCLENBQUE7TUFBTlAsSUFBSTtJQUMvTCxPQUFRN2xCLEdBQUMsQ0FBQzBrQixjQUFjO01BQUkzQyxPQUFPLEVBQUUsSUFBSTtNQUFFRixJQUFJLEVBQUVBLElBQUk7TUFBRUssUUFBUSxFQUFFQSxRQUFRO01BQUVKLGNBQWMsRUFBRUEsY0FBYztNQUFFRSxTQUFTLEVBQUVBLFNBQVM7TUFBRUMsY0FBYyxFQUFFQSxjQUFjO01BQUUyQyxvQkFBb0IsRUFBRUE7SUFBb0IsR0FBSzdTLGNBQWM7TUFBR3BSO0lBQUcsR0FBS2tsQixJQUFJLEdBQUlDLGVBQWUsQ0FBQztNQUFFOUQsU0FBUztNQUFFK0QsT0FBTztNQUFFQztJQUFTLENBQUEsQ0FBQyxFQUFFRyxtQkFBbUIsQ0FBQztNQUFFbkUsU0FBUztNQUFFb0U7SUFBYyxDQUFBLENBQUMsQ0FBQyxFQUFHO0VBQzNWLENBQUMsQ0FBQyxDQUFDOztFQ0xIO0FBQ0E7QUFDQTtFQUNPLFNBQVNHLGdCQUFnQixTQUFxRDtJQUFBLElBQXBEO01BQUV2RSxTQUFTO01BQUV3RSxpQkFBaUI7TUFBRUM7SUFBZ0IsQ0FBRTtJQUMvRXpFLFNBQVMsR0FBR2YsZ0JBQWdCLENBQUNlLFNBQVMsQ0FBQztJQUN2QyxPQUFPO01BQ0g1VyxTQUFTLFlBQUs0VyxTQUFTLFdBQVE7TUFDL0JyZSxLQUFLLEVBQUU7UUFDSCxhQUFNcWUsU0FBUyxzQ0FBNkJ3RSxpQkFBaUIsYUFBakJBLGlCQUFpQixjQUFqQkEsaUJBQWlCLEdBQUksQ0FBQyxDQUFHO1FBQ3JFLGFBQU14RSxTQUFTLHFDQUE0QnlFLGdCQUFnQixhQUFoQkEsZ0JBQWdCLGNBQWhCQSxnQkFBZ0IsR0FBSSxDQUFDO01BQ25FO0lBQ1QsQ0FBSztFQUNMO0VBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ08sSUFBTUMsS0FBSyxHQUFHL0IsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBU21iLEtBQUssU0FBb0kvbEIsR0FBRyxFQUFFO0lBQUEsSUFBeEk7UUFBRXFoQixTQUFTO1FBQUVFLFFBQVE7UUFBRXNFLGlCQUFpQjtRQUFFQyxnQkFBZ0I7UUFBRTVFLElBQUk7UUFBRUMsY0FBYztRQUFFRyxjQUFjO1FBQUUyQztNQUErQixDQUFBO01BQU5pQixJQUFJO0lBQzFMO0lBQ0ksT0FBTzdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLEtBQUs7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJVSxnQkFBZ0IsQ0FBQztNQUFFdkUsU0FBUztNQUFFeUUsZ0JBQWdCO01BQUVEO0lBQWlCLENBQUUsQ0FBQyxDQUFDLEVBQUc7RUFDN1QsQ0FBQyxDQUFDLENBQUM7RUFDSDtFQUNBO0VBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUMxQ08sSUFBTUcsU0FBUyxHQUFHaEMsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBU29iLFNBQVMsU0FBc0pobUIsR0FBRyxFQUFFO0lBQUEsSUFBMUo7UUFBRXFoQixTQUFTO1FBQUU0QyxvQkFBb0I7UUFBRTFDLFFBQVE7UUFBRXVFLGdCQUFnQjtRQUFFRCxpQkFBaUI7UUFBRTNFLElBQUk7UUFBRUMsY0FBYztRQUFFaUUsT0FBTztRQUFFQyxPQUFPO1FBQUUvRDtNQUF5QixDQUFBO01BQU40RCxJQUFJO0lBQ3BOO0lBQ0ksT0FBUTdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLEtBQUs7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJQyxlQUFlLENBQUM7TUFBRTlELFNBQVM7TUFBRStELE9BQU87TUFBRUM7SUFBUyxDQUFBLENBQUMsRUFBRU8sZ0JBQWdCLENBQUM7TUFBRXZFLFNBQVM7TUFBRXlFLGdCQUFnQjtNQUFFRDtJQUFtQixDQUFBLENBQUMsQ0FBQyxFQUFHO0VBQ2hYLENBQUMsQ0FBQyxDQUFDOztFQ05IO0FBQ0E7QUFDQTtFQUNPLFNBQVNJLGVBQWUsU0FBcUc7SUFBQTtJQUFBLElBQXBHO01BQUU1RSxTQUFTO01BQUU2RSxVQUFVO01BQUVDLGdCQUFnQjtNQUFFQyxlQUFlO01BQUVDLE9BQU87TUFBRUMsYUFBYTtNQUFFQztLQUFjO0lBQzlIbEYsU0FBUyxHQUFHZixnQkFBZ0IsQ0FBQ2UsU0FBUyxDQUFDO0lBQ3ZDLE9BQVE7TUFDSjVXLFNBQVMsWUFBSzRXLFNBQVMsVUFBTztNQUM5QnJlLEtBQUssRUFBRTtRQUNILGFBQU1xZSxTQUFTLCtDQUE0QjhFLGdCQUFnQixhQUFoQkEsZ0JBQWdCLGNBQWhCQSxnQkFBZ0IsR0FBSUQsVUFBVSwyQ0FBSSxHQUFHLENBQUc7UUFDbkYsYUFBTTdFLFNBQVMsOENBQTJCK0UsZUFBZSxhQUFmQSxlQUFlLGNBQWZBLGVBQWUsR0FBSUYsVUFBVSwyQ0FBSSxHQUFHLENBQUc7UUFDakYsYUFBTTdFLFNBQVMsNENBQXlCaUYsYUFBYSxhQUFiQSxhQUFhLGNBQWJBLGFBQWEsR0FBSUQsT0FBTywyQ0FBSSxDQUFDLENBQUc7UUFDeEUsYUFBTWhGLFNBQVMsMkNBQXdCa0YsWUFBWSxhQUFaQSxZQUFZLGNBQVpBLFlBQVksR0FBSUYsT0FBTywyQ0FBSSxDQUFDO01BQ3RFO0lBQ1QsQ0FBSztFQUNMO0VBRUE7QUFDQTtBQUNBO0FBQ0E7RUFDTyxJQUFNRyxJQUFJLEdBQUd4QyxDQUFJLENBQUNwWixpQkFBaUIsQ0FBQyxTQUFTNGIsSUFBSSxTQUFvTHhtQixHQUFHLEVBQUU7SUFBQSxJQUF4TDtRQUFFcWhCLFNBQVM7UUFBRUUsUUFBUTtRQUFFMEMsb0JBQW9CO1FBQUVpQyxVQUFVO1FBQUVDLGdCQUFnQjtRQUFFQyxlQUFlO1FBQUVDLE9BQU87UUFBRUMsYUFBYTtRQUFFQyxZQUFZO1FBQUVyRixJQUFJO1FBQUVDLGNBQWM7UUFBRUc7TUFBeUIsQ0FBQTtNQUFONEQsSUFBSTtJQUNwTyxPQUFRN2xCLEdBQUMsQ0FBQzBrQixjQUFjO01BQUkzQyxPQUFPLEVBQUUsS0FBSztNQUFFRixJQUFJLEVBQUVBLElBQUk7TUFBRUssUUFBUSxFQUFFQSxRQUFRO01BQUVKLGNBQWMsRUFBRUEsY0FBYztNQUFFRSxTQUFTLEVBQUVBLFNBQVM7TUFBRUMsY0FBYyxFQUFFQSxjQUFjO01BQUUyQyxvQkFBb0IsRUFBRUE7SUFBb0IsR0FBSzdTLGNBQWMsQ0FBQzZVLGVBQWUsQ0FBQztNQUFFNUUsU0FBUztNQUFFNkUsVUFBVTtNQUFFQyxnQkFBZ0I7TUFBRUMsZUFBZTtNQUFFQyxPQUFPO01BQUVDLGFBQWE7TUFBRUM7SUFBYyxDQUFBLENBQUMsa0NBQU9yQixJQUFJO01BQUVsbEI7SUFBRyxHQUFHLEVBQUc7RUFDN1csQ0FBQyxDQUFDLENBQUM7RUNuQkksSUFBTXltQixRQUFRLEdBQUd6QyxDQUFJLENBQUNwWixpQkFBaUIsQ0FBQyxTQUFTNmIsUUFBUSxTQUFzTXptQixHQUFHLEVBQUU7SUFBQSxJQUExTTtRQUFFcWhCLFNBQVM7UUFBRUUsUUFBUTtRQUFFNkQsT0FBTztRQUFFQyxPQUFPO1FBQUVuRSxJQUFJO1FBQUVDLGNBQWM7UUFBRThDLG9CQUFvQjtRQUFFb0MsT0FBTztRQUFFRSxZQUFZO1FBQUVELGFBQWE7UUFBRUosVUFBVTtRQUFFRSxlQUFlO1FBQUVELGdCQUFnQjtRQUFFN0U7TUFBeUIsQ0FBQTtNQUFONEQsSUFBSTtJQUM5UCxPQUFRN2xCLEdBQUMsQ0FBQzBrQixjQUFjO01BQUkzQyxPQUFPLEVBQUUsS0FBSztNQUFFRixJQUFJLEVBQUVBLElBQUk7TUFBRUssUUFBUSxFQUFFQSxRQUFRO01BQUVKLGNBQWMsRUFBRUEsY0FBYztNQUFFRSxTQUFTLEVBQUVBLFNBQVM7TUFBRUMsY0FBYyxFQUFFQSxjQUFjO01BQUUyQyxvQkFBb0IsRUFBRUE7SUFBb0IsR0FBSzdTLGNBQWM7TUFBR3BSO0lBQUcsR0FBS2tsQixJQUFJLEdBQUllLGVBQWUsQ0FBQztNQUFFNUUsU0FBUztNQUFFZ0YsT0FBTztNQUFFRSxZQUFZO01BQUVELGFBQWE7TUFBRUosVUFBVTtNQUFFRSxlQUFlO01BQUVEO0tBQWtCLENBQUMsRUFBRWhCLGVBQWUsQ0FBQztNQUFFOUQsU0FBUztNQUFFZ0UsT0FBTztNQUFFRDtJQUFTLENBQUEsQ0FBQyxDQUFDLEVBQUc7RUFDL1osQ0FBQyxDQUFDLENBQUM7RUNGSSxJQUFNc0IsU0FBUyxHQUFHMUMsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBUzhiLFNBQVMsU0FBeU4xbUIsR0FBRyxFQUFFO0lBQUEsSUFBN047UUFBRXFoQixTQUFTO1FBQUVFLFFBQVE7UUFBRTBDLG9CQUFvQjtRQUFFNkIsZ0JBQWdCO1FBQUVELGlCQUFpQjtRQUFFM0UsSUFBSTtRQUFFQyxjQUFjO1FBQUVrRixPQUFPO1FBQUVFLFlBQVk7UUFBRUQsYUFBYTtRQUFFSixVQUFVO1FBQUVFLGVBQWU7UUFBRUQsZ0JBQWdCO1FBQUU3RTtNQUF5QixDQUFBO01BQU40RCxJQUFJO0lBQ3ZSO0lBQ0ksT0FBUTdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLEtBQUs7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJZSxlQUFlLENBQUM7TUFBRTVFLFNBQVM7TUFBRWdGLE9BQU87TUFBRUUsWUFBWTtNQUFFRCxhQUFhO01BQUVKLFVBQVU7TUFBRUUsZUFBZTtNQUFFRDtLQUFrQixDQUFDLEVBQUVQLGdCQUFnQixDQUFDO01BQUV2RSxTQUFTO01BQUV5RSxnQkFBZ0I7TUFBRUQ7SUFBbUIsQ0FBQSxDQUFDLENBQUMsRUFBRztFQUNuYixDQUFDLENBQUMsQ0FBQztFQ0ZJLElBQU1jLGFBQWEsR0FBRzNDLENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVMrYixhQUFhLFNBQTJPM21CLEdBQUcsRUFBRTtJQUFBLElBQS9PO1FBQUVxaEIsU0FBUztRQUFFRSxRQUFRO1FBQUV1RSxnQkFBZ0I7UUFBRUQsaUJBQWlCO1FBQUUzRSxJQUFJO1FBQUVDLGNBQWM7UUFBRThDLG9CQUFvQjtRQUFFb0IsT0FBTztRQUFFRCxPQUFPO1FBQUVpQixPQUFPO1FBQUVFLFlBQVk7UUFBRUQsYUFBYTtRQUFFSixVQUFVO1FBQUVFLGVBQWU7UUFBRUQsZ0JBQWdCO1FBQUU3RTtNQUF1QixDQUFFO01BQU40RCxJQUFJO0lBQ2pUO0lBQ0ksT0FBUTdsQixHQUFDLENBQUMwa0IsY0FBYztNQUFJM0MsT0FBTyxFQUFFLEtBQUs7TUFBRUYsSUFBSSxFQUFFQSxJQUFJO01BQUVLLFFBQVEsRUFBRUEsUUFBUTtNQUFFSixjQUFjLEVBQUVBLGNBQWM7TUFBRUUsU0FBUyxFQUFFQSxTQUFTO01BQUVDLGNBQWMsRUFBRUEsY0FBYztNQUFFMkMsb0JBQW9CLEVBQUVBO0lBQW9CLEdBQUs3UyxjQUFjO01BQUdwUjtJQUFHLEdBQUtrbEIsSUFBSSxHQUFJZSxlQUFlLENBQUM7TUFBRTVFLFNBQVM7TUFBRWdGLE9BQU87TUFBRUUsWUFBWTtNQUFFRCxhQUFhO01BQUVKLFVBQVU7TUFBRUUsZUFBZTtNQUFFRDtLQUFrQixDQUFDLEVBQUVQLGdCQUFnQixDQUFDO01BQUV2RSxTQUFTO01BQUV5RSxnQkFBZ0I7TUFBRUQ7S0FBbUIsQ0FBQyxFQUFFVixlQUFlLENBQUM7TUFBRTlELFNBQVM7TUFBRWdFLE9BQU87TUFBRUQ7SUFBTyxDQUFFLENBQUMsQ0FBQyxFQUFHO0VBQ3JlLENBQUMsQ0FBQyxDQUFDOztFQ05IO0FBQ0E7QUFDQTtFQUNPLFNBQVN3QixlQUFlLFNBQThEO0lBQUEsSUFBN0Q7TUFBRXZGLFNBQVM7TUFBRXdGLGVBQWU7TUFBRUMsY0FBYztNQUFFQztJQUFXLENBQUU7SUFDdkYxRixTQUFTLEdBQUdmLGdCQUFnQixDQUFDZSxTQUFTLENBQUM7SUFDdkMsT0FBTztNQUNINVcsU0FBUyxZQUFLNFcsU0FBUyxVQUFPO01BQzlCcmUsS0FBSyxFQUFFO1FBQ0gsYUFBTXFlLFNBQVMsb0NBQTJCd0YsZUFBZSxhQUFmQSxlQUFlLGNBQWZBLGVBQWUsR0FBSSxDQUFDLFFBQU07UUFDcEUsYUFBTXhGLFNBQVMsbUNBQTBCeUYsY0FBYyxhQUFkQSxjQUFjLGNBQWRBLGNBQWMsR0FBSSxDQUFDLFFBQU07UUFDbEUsYUFBTXpGLFNBQVMsOEJBQXFCMEYsV0FBVyxhQUFYQSxXQUFXLGNBQVhBLFdBQVcsR0FBSSxHQUFHO01BQ3pEO0lBQ1QsQ0FBSztFQUNMO0VBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ08sSUFBTUMsSUFBSSxHQUFHaEQsQ0FBSSxDQUFDcFosaUJBQWlCLENBQUMsU0FBU29jLElBQUksU0FBNklobkIsR0FBRyxFQUFFO0lBQUE7SUFBQSxJQUFqSjtRQUFFcWhCLFNBQVM7UUFBRUUsUUFBUTtRQUFFMEMsb0JBQW9CO1FBQUU0QyxlQUFlO1FBQUVDLGNBQWM7UUFBRUMsV0FBVztRQUFFN0YsSUFBSTtRQUFFQyxjQUFjO1FBQUVHO01BQXlCLENBQUE7TUFBTjRELElBQUk7SUFDN0wsSUFBTStCLHFCQUFxQixHQUFHN2IsQ0FBTSxxQkFBQ3liLGVBQWUsK0RBQUksRUFBRSxDQUFDO0lBQzNELElBQU1LLG9CQUFvQixHQUFHOWIsQ0FBTSxvQkFBQzBiLGNBQWMsNkRBQUksQ0FBQyxDQUFDO0lBQ3hEelgsQ0FBUyxDQUFDLE1BQU07TUFBRSxJQUFJd1gsZUFBZSxFQUNqQ0kscUJBQXFCLENBQUNoaEIsT0FBTyxHQUFHNGdCLGVBQWU7SUFBRyxDQUFBLEVBQUUsQ0FBQ0EsZUFBZSxDQUFDLENBQUM7SUFDMUV4WCxDQUFTLENBQUMsTUFBTTtNQUFFLElBQUl5WCxjQUFjLEVBQ2hDSSxvQkFBb0IsQ0FBQ2poQixPQUFPLEdBQUc2Z0IsY0FBYztJQUFHLENBQUEsRUFBRSxDQUFDQSxjQUFjLENBQUMsQ0FBQztJQUN2RSxJQUFJRCxlQUFlLElBQUksQ0FBQyxFQUNwQkEsZUFBZSxHQUFHSSxxQkFBcUIsQ0FBQ2hoQixPQUFPO0lBQ25ELElBQUk2Z0IsY0FBYyxJQUFJLENBQUMsRUFDbkJBLGNBQWMsR0FBR0ksb0JBQW9CLENBQUNqaEIsT0FBTztJQUNqRCxPQUFRNUcsR0FBQyxDQUFDMGtCLGNBQWM7TUFBSTNDLE9BQU8sRUFBRSxLQUFLO01BQUVGLElBQUksRUFBRUEsSUFBSTtNQUFFSyxRQUFRLEVBQUVBLFFBQVE7TUFBRUosY0FBYyxFQUFFQSxjQUFjO01BQUVFLFNBQVMsRUFBRUEsU0FBUztNQUFFQyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJDLG9CQUFvQixFQUFFQTtJQUFvQixHQUFLN1MsY0FBYyxDQUFDd1YsZUFBZSxDQUFDO01BQUV2RixTQUFTO01BQUV3RixlQUFlO01BQUVDLGNBQWM7TUFBRUM7SUFBYSxDQUFBLENBQUMsa0NBQU83QixJQUFJO01BQUVsbEI7SUFBRyxHQUFHLEVBQUc7RUFDdFUsQ0FBQyxDQUFDLENBQUM7O0VDckNIO0FBQ0E7QUFDQTtBQUNBO0VBQ08sU0FBU21uQix1QkFBdUIsU0FBd0IvRSxVQUFVLEVBQUU7SUFBQSxJQUFuQztNQUFFZ0YsTUFBTTtNQUFFL0Y7SUFBUyxDQUFFO0lBQ3pEQSxTQUFTLEdBQUdmLGdCQUFnQixDQUFDZSxTQUFTLENBQUM7SUFDdkMsT0FBT2pRLGNBQWMsQ0FBQztNQUNsQjNHLFNBQVMsRUFBRXFGLElBQUksV0FBSXVSLFNBQVMsc0JBQW1CK0YsTUFBTSxjQUFPL0YsU0FBUywyQkFBd0I7SUFDaEcsQ0FBQSxFQUFFZSxVQUFVLENBQUM7RUFDbEI7RUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ08sSUFBTWlGLFNBQVMsR0FBR3JELENBQUksQ0FBQ3BaLGlCQUFpQixDQUFDLFNBQVN5YyxTQUFTLFNBQTJDcm5CLEdBQUcsRUFBRTtJQUFBO0lBQUEsSUFBL0M7UUFBRVAsUUFBUSxFQUFFVCxDQUFDO1FBQUVxaUIsU0FBUztRQUFFK0Y7TUFBWSxDQUFFO01BQUh6bUIsQ0FBQztJQUNyRyxJQUFNbEIsUUFBUSxHQUFHVCxDQUFDO0lBQ2xCeU0sT0FBTyxDQUFDbUYsTUFBTSxDQUFDLENBQUMsQ0FBQ25SLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDO0lBQy9CLFdBQUF1bkIsTUFBTSw2Q0FBTkEsTUFBTSxHQUFLLE9BQU8zbkIsUUFBUSxDQUFDSSxJQUFJLEtBQUssUUFBUSxJQUFJeW5CLGNBQWMsQ0FBQ25WLEdBQUcsQ0FBQzFTLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDO0lBQ2pGLElBQU1xa0IsZUFBZSxHQUFHaUQsdUJBQXVCLENBQUM7TUFBRTlGLFNBQVM7TUFBRStGO0lBQVEsQ0FBQSxrQ0FBT3ptQixDQUFDO01BQUVYO0lBQUcsR0FBRztJQUNyRixJQUFNdW5CLGtCQUFrQixHQUFHblcsY0FBYyxDQUFDOFMsZUFBZSxFQUFFemtCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDO0lBQzFFLElBQU1xaEIsY0FBYyxHQUFHL1YsQ0FBTSxDQUFDLEtBQUssQ0FBQztJQUNwQ2lFLENBQVMsQ0FBQyxNQUFNO01BQ1o4UixjQUFjLENBQUNsYixPQUFPLEdBQUcsSUFBSTtJQUNoQyxDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ04sSUFBTXVoQixZQUFZLEdBQUdwYyxDQUFNLENBQUM7TUFBRWlWLGlCQUFpQixFQUFFLE1BQU07UUFBRSxPQUFPYyxjQUFjLENBQUNsYixPQUFPO01BQUc7SUFBQSxDQUFFLENBQUM7SUFDNUYsT0FBUTVHLEdBQUMsQ0FBQytnQixnQkFBZ0IsQ0FBQzNaLFFBQVEsRUFBRTtNQUFFNUMsS0FBSyxFQUFFMmpCLFlBQVksQ0FBQ3ZoQjtJQUFPLENBQUUsRUFBRXNlLEdBQVksQ0FBQzlrQixRQUFRLEVBQUU4bkIsa0JBQWtCLENBQUMsQ0FBQztFQUNySCxDQUFDLENBQUMsQ0FBQztFQUNIO0VBQ0E7RUFDQSxJQUFNRCxjQUFjLEdBQUcsSUFBSTlXLEdBQUcsQ0FBQyxDQUMzQixHQUFHLEVBQ0gsTUFBTSxFQUNOLFNBQVMsRUFDVCxPQUFPLEVBQ1AsR0FBRyxFQUNILEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLFVBQVUsRUFDVixLQUFLLEVBQ0wsS0FBSyxFQUNMLElBQUksRUFDSixPQUFPLEVBQ1AsR0FBRyxFQUNILFFBQVEsRUFDUixLQUFLLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxLQUFLLEVBQ0wsT0FBTyxFQUNQLEtBQUssRUFDTCxNQUFNLEVBQ04sT0FBTyxFQUNQLFVBQVUsRUFDVixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsR0FBRyxFQUNILE1BQU0sRUFDTixHQUFHLEVBQ0gsTUFBTSxFQUNOLFFBQVEsRUFDUixRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFDTCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLE9BQU8sRUFDUCxLQUFLLENBQ1IsQ0FBQztFQzlGRixTQUFTaVgsUUFBUSxDQUFDQyxLQUFhLEVBQUVDLEtBQWEsRUFBQTtJQUM1QyxJQUFJQSxLQUFLLElBQUksQ0FBQyxFQUNaLE9BQU9ELEtBQUs7SUFDZEEsS0FBSyxHQUFHQSxLQUFLLENBQUNFLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDbG9CLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSW1vQixLQUFLLElBQUksQ0FBQyxFQUNaLE9BQU9ELEtBQUs7SUFFZCxPQUFPRCxRQUFRLENBQUNDLEtBQUssRUFBRUMsS0FBSyxHQUFHLENBQUMsQ0FBQztFQUNuQztFQUlBLFNBQVNFLElBQUksR0FBQTs7SUFFWCxJQUFNLENBQUMxRyxjQUFjLEVBQUUyRyxpQkFBaUIsQ0FBQyxHQUFHMVksQ0FBUSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFNLENBQUMyWSxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHNVksQ0FBUSxDQUE0QixZQUFZLENBQUM7SUFDdkYsSUFBTSxDQUFDNlksS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzlZLENBQVEsQ0FBVSxTQUFTLENBQUM7SUFDdEQsSUFBTSxDQUFDK1ksS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR2haLENBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBTSxDQUFDaVosTUFBTSxFQUFFQyxTQUFTLENBQUMsR0FBR2xaLENBQVEsQ0FBbUMsUUFBUSxDQUFDO0lBQ2hGLElBQU0sQ0FBQ21TLFFBQVEsRUFBRWdILFdBQVcsQ0FBQyxHQUFHblosQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUM3QyxJQUFNLENBQUNvWixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHclosQ0FBUSxDQUFDLCtiQUErYixDQUFDO0lBRWplLElBQU0sQ0FBQ3NaLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd2WixDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpDcEMsQ0FBZSxDQUFDLE1BQUs7TUFDbkIsSUFBSTBiLE9BQU8sR0FBRyxDQUFDLEVBQUU7UUFDZlIsUUFBUSxDQUFDanBCLENBQUMsSUFBSUEsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3BEMHBCLFVBQVUsQ0FBQzdwQixDQUFDLElBQUlBLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDdkI7SUFDSCxDQUFDLEVBQUUsQ0FBQzRwQixPQUFPLENBQUMsQ0FBQzs7SUFHYixJQUFNRSxRQUFRLEdBQUduYyxHQUFXLENBQUUxTixDQUEyQyxJQUFPO01BQUEwcEIsT0FBTyxDQUFFMXBCLENBQUMsQ0FBQzBYLE1BQThCLENBQUM1UyxLQUFLLENBQUM7TUFBRTlFLENBQUMsQ0FBQzhwQixjQUFjLEVBQUU7SUFBRyxDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQzVKLElBQU1DLFFBQVEsR0FBR3JjLEdBQVcsQ0FBRTFOLENBQXdDLElBQU87TUFBQXVwQixTQUFTLENBQUMsUUFBUSxDQUFDO01BQUV2cEIsQ0FBQyxDQUFDOHBCLGNBQWMsRUFBRTtJQUFHLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDNUgsSUFBTUUsUUFBUSxHQUFHdGMsR0FBVyxDQUFFMU4sQ0FBd0MsSUFBTztNQUFBdXBCLFNBQVMsQ0FBQyxTQUFTLENBQUM7TUFBRXZwQixDQUFDLENBQUM4cEIsY0FBYyxFQUFFO0lBQUcsQ0FBQSxFQUFFLEVBQUUsQ0FBQztJQUM3SCxJQUFNRyxTQUFTLEdBQUd2YyxHQUFXLENBQUUxTixDQUF3QyxJQUFPO01BQUF1cEIsU0FBUyxDQUFDLFNBQVMsQ0FBQztNQUFFdnBCLENBQUMsQ0FBQzhwQixjQUFjLEVBQUU7SUFBRyxDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQzlILElBQU1JLFFBQVEsR0FBR3hjLEdBQVcsQ0FBRTFOLENBQXdDLElBQU87TUFBQWlwQixjQUFjLENBQUMsWUFBWSxDQUFDO01BQUVqcEIsQ0FBQyxDQUFDOHBCLGNBQWMsRUFBRTtJQUFHLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDckksSUFBTUssUUFBUSxHQUFHemMsR0FBVyxDQUFFMU4sQ0FBd0MsSUFBTztNQUFBaXBCLGNBQWMsQ0FBQyxVQUFVLENBQUM7TUFBRWpwQixDQUFDLENBQUM4cEIsY0FBYyxFQUFFO0lBQUcsQ0FBQSxFQUFFLEVBQUUsQ0FBQztJQUNuSSxJQUFNTSxRQUFRLEdBQUcxYyxHQUFXLENBQUUxTixDQUF3QyxJQUFPO01BQUF3cEIsV0FBVyxDQUFFeHBCLENBQUMsQ0FBQzBYLE1BQTJCLENBQUMyUyxhQUFhLENBQUM7TUFBRXJxQixDQUFDLENBQUM4cEIsY0FBYyxFQUFFO0lBQUcsQ0FBQSxFQUFFLEVBQUUsQ0FBQztJQUNsSyxJQUFNUSxRQUFRLEdBQUc1YyxHQUFXLENBQUUxTixDQUF3QyxJQUFPO01BQUFxcEIsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUFFcnBCLENBQUMsQ0FBQzhwQixjQUFjLEVBQUU7SUFBRyxDQUFBLEVBQUUsRUFBRSxDQUFDO0lBQ3BILElBQU1TLFFBQVEsR0FBRzdjLEdBQVcsQ0FBRTFOLENBQXdDLElBQU87TUFBQXFwQixRQUFRLENBQUMsQ0FBQyxDQUFDO01BQUVycEIsQ0FBQyxDQUFDOHBCLGNBQWMsRUFBRTtJQUFHLENBQUEsRUFBRSxFQUFFLENBQUM7SUFDcEgsSUFBTVUsUUFBUSxHQUFHOWMsR0FBVyxDQUFFMU4sQ0FBd0MsSUFBTztNQUFBcXBCLFFBQVEsQ0FBQyxDQUFDLENBQUM7TUFBRXJwQixDQUFDLENBQUM4cEIsY0FBYyxFQUFFO0lBQUcsQ0FBQSxFQUFFLEVBQUUsQ0FBQztJQUVwSCxPQUNFeHBCLEdBQUEsQ0FBQXdRLEdBQUEsRUFBQSxJQUFBLEVBQ0V4USxHQUFLLENBQUEsS0FBQSxFQUFBO01BQUFxUCxFQUFFLEVBQUM7SUFBVSxDQUFBLEVBQ2hCclAsR0FBMEIsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLG1CQUFBLENBQUEsRUFDMUJBLEdBQUssQ0FBQSxLQUFBLEVBQUE7TUFBQW9MLFNBQVMsRUFBQztJQUFZLENBQUEsRUFDekJwTCxHQUFRLENBQUEsUUFBQSxFQUFBO01BQUFtcUIsT0FBTyxFQUFFLE1BQU1iLFVBQVUsQ0FBQyxDQUFDO0lBQXFCLENBQUEsRUFBQSxXQUFBLENBQUEsRUFDeER0cEIsR0FBUSxDQUFBLFFBQUEsRUFBQTtNQUFBbXFCLE9BQU8sRUFBRSxNQUFNYixVQUFVLENBQUMsQ0FBQztJQUFxQixDQUFBLEVBQUEsV0FBQSxDQUFBLEVBQ3hEdHBCLEdBQVEsQ0FBQSxRQUFBLEVBQUE7TUFBQW1xQixPQUFPLEVBQUUsTUFBTWIsVUFBVSxDQUFDLENBQUM7SUFBcUIsQ0FBQSxFQUFBLFdBQUEsQ0FBQSxFQUN4RHRwQixHQUFRLENBQUEsUUFBQSxFQUFBO01BQUFtcUIsT0FBTyxFQUFFLE1BQU1iLFVBQVUsQ0FBQyxDQUFDO0lBQUMsQ0FBQSxFQUFBLFdBQUEsQ0FBb0IsQ0FDcEQsRUFDTnRwQixHQUFLLENBQUEsS0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQ3pCcEwsR0FBcUMsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLDRCQUFBLENBQUEsRUFDckNBLEdBQU8sQ0FBQSxPQUFBLEVBQUE7TUFBQW9MLFNBQVMsRUFBQztJQUFFLENBQUEsRUFBQ3BMLEdBQUEsQ0FBQSxPQUFBLEVBQUE7TUFBT1EsSUFBSSxFQUFDLE9BQU87TUFBQ2dHLElBQUksRUFBQyxpQkFBaUI7TUFBQzRqQixPQUFPLEVBQUUxcUIsQ0FBQztRQUFNQSxDQUFDLENBQUM4cEIsY0FBYyxFQUFFO1FBQUVYLFFBQVEsQ0FBQyxXQUFXLENBQUM7TUFBQSxDQUFFO01BQUVsaUIsT0FBTyxFQUFFaWlCLEtBQUssSUFBSTtLQUFlLENBQUEsRUFBaUIsV0FBQSxDQUFBLEVBQzlLNW9CLEdBQU8sQ0FBQSxPQUFBLEVBQUE7TUFBQW9MLFNBQVMsRUFBQztJQUFFLENBQUEsRUFBQ3BMLEdBQUEsQ0FBQSxPQUFBLEVBQUE7TUFBT1EsSUFBSSxFQUFDLE9BQU87TUFBQ2dHLElBQUksRUFBQyxpQkFBaUI7TUFBQzRqQixPQUFPLEVBQUUxcUIsQ0FBQztRQUFNQSxDQUFDLENBQUM4cEIsY0FBYyxFQUFFO1FBQUVYLFFBQVEsQ0FBQyxTQUFTLENBQUM7TUFBQSxDQUFFO01BQUVsaUIsT0FBTyxFQUFFaWlCLEtBQUssSUFBSTtLQUFhLENBQUEsRUFBaUMsMkJBQUEsQ0FBQSxFQUMxTDVvQixHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBRSxDQUFBLEVBQUNwTCxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsaUJBQWlCO01BQUM0akIsT0FBTyxFQUFFMXFCLENBQUM7UUFBTUEsQ0FBQyxDQUFDOHBCLGNBQWMsRUFBRTtRQUFFWCxRQUFRLENBQUMsUUFBUSxDQUFDO01BQUEsQ0FBRTtNQUFFbGlCLE9BQU8sRUFBRWlpQixLQUFLLElBQUk7S0FBWSxDQUFBLEVBQWtDLDRCQUFBLENBQUEsRUFDekw1b0IsR0FBTyxDQUFBLE9BQUEsRUFBQTtNQUFBb0wsU0FBUyxFQUFDO0lBQUUsQ0FBQSxFQUFDcEwsR0FBQSxDQUFBLE9BQUEsRUFBQTtNQUFPUSxJQUFJLEVBQUMsT0FBTztNQUFDZ0csSUFBSSxFQUFDLGlCQUFpQjtNQUFDNGpCLE9BQU8sRUFBRTFxQixDQUFDO1FBQU1BLENBQUMsQ0FBQzhwQixjQUFjLEVBQUU7UUFBRVgsUUFBUSxDQUFDLFNBQVMsQ0FBQztNQUFBLENBQUU7TUFBRWxpQixPQUFPLEVBQUVpaUIsS0FBSyxJQUFJO0tBQWEsQ0FBQSw4QkFBaUMsQ0FDdEwsRUFDTjVvQixHQUFLLENBQUEsS0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQ3pCcEwsR0FBdUMsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLDhCQUFBLENBQUEsRUFDdkNBLEdBQU8sQ0FBQSxPQUFBLEVBQUE7TUFBQW9MLFNBQVMsRUFBQztJQUFFLENBQUEsRUFBQ3BMLEdBQUEsQ0FBQSxPQUFBLEVBQUE7TUFBT1EsSUFBSSxFQUFDLE9BQU87TUFBQ2dHLElBQUksRUFBQywwQkFBMEI7TUFBQzRqQixPQUFPLEVBQUUxcUIsQ0FBQztRQUFNQSxDQUFDLENBQUM4cEIsY0FBYyxFQUFFO1FBQUVmLGlCQUFpQixDQUFDLEtBQUssQ0FBQztNQUFBLENBQUU7TUFBRTloQixPQUFPLEVBQUVtYixjQUFjLElBQUk7S0FBUyxDQUFBLEVBQThCLHdCQUFBLENBQUEsRUFDMU05aEIsR0FBTyxDQUFBLE9BQUEsRUFBQTtNQUFBb0wsU0FBUyxFQUFDO0lBQUUsQ0FBQSxFQUFDcEwsR0FBQSxDQUFBLE9BQUEsRUFBQTtNQUFPUSxJQUFJLEVBQUMsT0FBTztNQUFDZ0csSUFBSSxFQUFDLDBCQUEwQjtNQUFDNGpCLE9BQU8sRUFBRTFxQixDQUFDO1FBQU1BLENBQUMsQ0FBQzhwQixjQUFjLEVBQUU7UUFBRWYsaUJBQWlCLENBQUMsSUFBSSxDQUFDO01BQUEsQ0FBRTtNQUFFOWhCLE9BQU8sRUFBRW1iLGNBQWMsSUFBSTtLQUFRLENBQUEscUJBQXdCLENBQzlMLEVBR045aEIsR0FBSyxDQUFBLEtBQUEsRUFBQTtNQUFBb0wsU0FBUyxFQUFDO0lBQVksQ0FBQSxFQUN6QnBMLEdBQW9DLENBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSwyQkFBQSxDQUFBLEVBQ3BDQSxHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQUNwTCxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsWUFBWTtNQUFDNGpCLE9BQU8sRUFBRUosUUFBUTtNQUFFcmpCLE9BQU8sRUFBRW1pQixLQUFLLElBQUk7SUFBQyxDQUFJLENBQUEsRUFBVSxJQUFBLENBQUEsRUFDeEg5b0IsR0FBTyxDQUFBLE9BQUEsRUFBQTtNQUFBb0wsU0FBUyxFQUFDO0lBQVksQ0FBQSxFQUFDcEwsR0FBQSxDQUFBLE9BQUEsRUFBQTtNQUFPUSxJQUFJLEVBQUMsT0FBTztNQUFDZ0csSUFBSSxFQUFDLFlBQVk7TUFBQzRqQixPQUFPLEVBQUVILFFBQVE7TUFBRXRqQixPQUFPLEVBQUVtaUIsS0FBSyxJQUFJO0lBQUMsQ0FBSSxDQUFBLEVBQVUsSUFBQSxDQUFBLEVBQ3hIOW9CLEdBQU8sQ0FBQSxPQUFBLEVBQUE7TUFBQW9MLFNBQVMsRUFBQztJQUFZLENBQUEsRUFBQ3BMLEdBQUEsQ0FBQSxPQUFBLEVBQUE7TUFBT1EsSUFBSSxFQUFDLE9BQU87TUFBQ2dHLElBQUksRUFBQyxZQUFZO01BQUM0akIsT0FBTyxFQUFFRixRQUFRO01BQUV2akIsT0FBTyxFQUFFbWlCLEtBQUssSUFBSTtJQUFDLENBQUksQ0FBQSxPQUFVLENBQ3BILEVBRU45b0IsR0FBSyxDQUFBLEtBQUEsRUFBQTtNQUFBb0wsU0FBUyxFQUFDO0lBQVksQ0FBQSxFQUN6QnBMLEdBQWlDLENBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSx3QkFBQSxDQUFBLEVBQ2pDQSxHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQUNwTCxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsYUFBYTtNQUFDNGpCLE9BQU8sRUFBRVQsU0FBUztNQUFFaGpCLE9BQU8sRUFBRXFpQixNQUFNLElBQUk7SUFBUyxDQUFJLENBQUEsRUFBc0MsZ0NBQUEsQ0FBQSxFQUMvSmhwQixHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQUNwTCxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsYUFBYTtNQUFDNGpCLE9BQU8sRUFBRVgsUUFBUTtNQUFFOWlCLE9BQU8sRUFBRXFpQixNQUFNLElBQUk7SUFBUSxDQUFJLENBQUEsRUFBMEIsb0JBQUEsQ0FBQSxFQUNqSmhwQixHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQUNwTCxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsYUFBYTtNQUFDNGpCLE9BQU8sRUFBRVYsUUFBUTtNQUFFL2lCLE9BQU8sRUFBRXFpQixNQUFNLElBQUk7SUFBUyxDQUFJLENBQUEsa0JBQXFCLENBQ3pJLEVBRU5ocEIsR0FBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUtBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFPQSxHQUFPLENBQUEsT0FBQSxFQUFBO01BQUFvcUIsT0FBTyxFQUFFTixRQUFRO01BQUV0cEIsSUFBSSxFQUFDLFFBQVE7TUFBQ2dFLEtBQUssRUFBRTBkO0tBQWtCLENBQUEsY0FBaUIsQ0FBTSxFQUVwR2xpQixHQUFLLENBQUEsS0FBQSxFQUFBO01BQUFvTCxTQUFTLEVBQUM7SUFBWSxDQUFBLEVBQ3pCcEwsR0FBZ0MsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUFBLHVCQUFBLENBQUEsRUFDaENBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFPQSxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsY0FBYztNQUFDNGpCLE9BQU8sRUFBRVIsUUFBUTtNQUFFampCLE9BQU8sRUFBRStoQixXQUFXLElBQUk7SUFBWSxDQUFJLENBQUEsRUFBa0IsWUFBQSxDQUFBLEVBQzVIMW9CLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUFPQSxHQUFBLENBQUEsT0FBQSxFQUFBO01BQU9RLElBQUksRUFBQyxPQUFPO01BQUNnRyxJQUFJLEVBQUMsY0FBYztNQUFDNGpCLE9BQU8sRUFBRVAsUUFBUTtNQUFFbGpCLE9BQU8sRUFBRStoQixXQUFXLElBQUk7SUFBVSxDQUFJLENBQUEsYUFBZ0IsQ0FDcEgsRUFDTjFvQixHQUFBLENBQUEsVUFBQSxFQUFBO01BQVVxcUIsSUFBSSxFQUFFLEVBQUU7TUFBRUMsSUFBSSxFQUFFLENBQUM7TUFBRUYsT0FBTyxFQUFFYixRQUFRO01BQUUva0IsS0FBSyxFQUFFMmtCO01BQVEsQ0FFM0QsRUFDTm5wQixHQUFBLENBQUEsS0FBQSxFQUFBO01BQUtxUCxFQUFFLEVBQUMsV0FBVztNQUFDakUsU0FBUyx5QkFBa0JzZCxXQUFXLENBQUU7TUFBRS9rQixLQUFLLEVBQUU7UUFBRSxhQUFNc2QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLDJCQUFpQmlCLFFBQVE7TUFBSSxDQUFFO01BQUV4aEIsR0FBRyxFQUFFZ29CO0lBQVcsQ0FBQSxFQUNsSjFvQixHQUFDLENBQUF1cUIsUUFBUTtNQUFDQyxRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJLENBQUksQ0FBQSxFQUN0SG5wQixHQUFDLENBQUEwcUIsU0FBUztNQUFDRixRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJLENBQUksQ0FBQSxFQUN2SG5wQixHQUFDLENBQUEycUIsUUFBUTtNQUFDSCxRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJLENBQUksQ0FBQSxFQUN0SG5wQixHQUFDLENBQUE0cUIsUUFBUTtNQUFDSixRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJLENBQUksQ0FBQSxFQUN0SG5wQixHQUFDLENBQUE2cUIsWUFBWTtNQUFDTCxRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJLENBQUksQ0FBQSxFQUMxSG5wQixHQUFDLENBQUE4cUIsYUFBYTtNQUFDTixRQUFRLEVBQUU1QixLQUFLO01BQUU5RyxjQUFjLEVBQUVBLGNBQWM7TUFBRTJJLFlBQVksRUFBRTNCLEtBQUs7TUFBRTdHLGNBQWMsRUFBRStHLE1BQU07TUFBRUcsSUFBSSxFQUFFQTtJQUFJ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
