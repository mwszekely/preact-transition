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
    var combined = T$1(current => {
      processRef(current, lhs);
      processRef(current, rhs);
    }, [lhs, rhs]);
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return combined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy90aW1pbmcvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL2NvbnRleHQuanMiLCIuLi90cmFuc2l0aW9uYWJsZS5qcyIsIi4uL2NsaXAuanMiLCIuLi9mYWRlLmpzIiwiLi4vY2xpcC1mYWRlLmpzIiwiLi4vY29sbGFwc2UuanMiLCIuLi9jb2xsYXBzZS1mYWRlLmpzIiwiLi4vc2xpZGUuanMiLCIuLi9zbGlkZS1mYWRlLmpzIiwiLi4vem9vbS5qcyIsIi4uL3pvb20tZmFkZS5qcyIsIi4uL3NsaWRlLXpvb20uanMiLCIuLi9zbGlkZS16b29tLWZhZGUuanMiLCIuLi9mbGlwLmpzIiwiLi4vc3dhcHBhYmxlLmpzIiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB2KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24geSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBfKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9fKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP18obik6bnVsbH1mdW5jdGlvbiBrKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gayhuKX19ZnVuY3Rpb24gYihuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8c2V0VGltZW91dCkoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1zKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9fKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmayh0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGMscyxhKXt2YXIgaCx5LGQsayxiLGcsdyx4PWkmJmkuX19rfHxlLEM9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHAse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksay5yZWY/ay5yZWY6bnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oZD14W2hdKXx8ZCYmay5rZXk9PWQua2V5JiZrLnR5cGU9PT1kLnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IoeT0wO3k8Qzt5Kyspe2lmKChkPXhbeV0pJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl7eFt5XT12b2lkIDA7YnJlYWt9ZD1udWxsfWoobixrLGQ9ZHx8Zix0LG8scixjLHMsYSksYj1rLl9fZSwoeT1rLnJlZikmJmQucmVmIT15JiYod3x8KHc9W10pLGQucmVmJiZ3LnB1c2goZC5yZWYsbnVsbCxrKSx3LnB1c2goeSxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09ZyYmKGc9YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZrLl9faz09PWQuX19rP2suX19kPXM9bShrLHMsbik6cz1BKG4sayxkLHgsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmZC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9XyhkKSl9Zm9yKHUuX19lPWcsaD1DO2gtLTspbnVsbCE9eFtoXSYmTih4W2hdLHhbaF0pO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylNKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gbShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP20oaSxsLHUpOkEodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24geChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBBKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MSlpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJi0xPT1sLmluZGV4T2YoXCItXCIpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgYSxoLHYseSxfLGssYixnLG0seCxBLEMsJCxILEksVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1sLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl7aWYoZz11LnByb3BzLG09KGE9VC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT9tP20ucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFQoZyx4KToodS5fX2M9aD1uZXcgZChnLHgpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1PKSxtJiZtLnN1YihoKSxoLnByb3BzPWcsaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSxoLl9zYj1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyxoLl9fcykpKSx5PWgucHJvcHMsXz1oLnN0YXRlLHYpbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShnLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtmb3IoaC5wcm9wcz1nLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxBPTA7QTxoLl9zYi5sZW5ndGg7QSsrKWguX19oLnB1c2goaC5fc2JbQV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoZyxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHksXyxrKX0pfWlmKGguY29udGV4dD14LGgucHJvcHM9ZyxoLl9fdj11LGguX19QPW4sQz1sLl9fciwkPTAsXCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcil7Zm9yKGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsQyYmQyh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLEg9MDtIPGguX3NiLmxlbmd0aDtIKyspaC5fX2gucHVzaChoLl9zYltIXSk7aC5fc2I9W119ZWxzZSBkb3toLl9fZD0hMSxDJiZDKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKyskPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxfKSksST1udWxsIT1hJiZhLnR5cGU9PT1wJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsdyhuLEFycmF5LmlzQXJyYXkoSSk/STpbSV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPWwuZGlmZmVkKSYmYSh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZSxjKXt2YXIgcyxoLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksaD0oeT1pLnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyh2fHxoKSYmKHYmJihoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKGs9dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShrKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixlLHI/clswXTppLl9fayYmXyhpLDApLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZhKHJba10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYha3x8XCJvcHRpb25cIj09PWQmJmshPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KGs9cC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsaXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8YShuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBQKHUsaSx0KXt2YXIgbyxyLGU7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZT1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz1oKHAsbnVsbCxbdV0pLHJ8fGYsZix2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGUsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGUsdSl9ZnVuY3Rpb24gUyhuLGwpe1AobixsLFMpfWZ1bmN0aW9uIHEobCx1LGkpe3ZhciB0LG8scixmPXMoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksdihsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBCKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGIpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49ZS5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksYih0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXAsdD1bXSxnLl9fcj0wLHI9MDtleHBvcnR7ZCBhcyBDb21wb25lbnQscCBhcyBGcmFnbWVudCxxIGFzIGNsb25lRWxlbWVudCxCIGFzIGNyZWF0ZUNvbnRleHQsaCBhcyBjcmVhdGVFbGVtZW50LHkgYXMgY3JlYXRlUmVmLGgsUyBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLFAgYXMgcmVuZGVyLHggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9W10sZT1uLl9fYixhPW4uX19yLHY9bi5kaWZmZWQsbD1uLl9fYyxtPW4udW5tb3VudDtmdW5jdGlvbiBkKHQsdSl7bi5fX2gmJm4uX19oKHIsdCxvfHx1KSxvPTA7dmFyIGk9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe19fVjpjfSksaS5fX1t0XX1mdW5jdGlvbiBwKG4pe3JldHVybiBvPTEseShCLG4pfWZ1bmN0aW9uIHkobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpCKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7ci51PSEwO3ZhciBmPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlO3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hZnx8Zi5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPSExO3JldHVybiB1LmZvckVhY2goZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSwhKCFpJiZvLl9fYy5wcm9wcz09PW4pJiYoIWZ8fGYuY2FsbCh0aGlzLG4sdCxyKSl9fXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiBoKHUsaSl7dmFyIG89ZCh0KyssMyk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiBzKHUsaSl7dmFyIG89ZCh0KyssNCk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19oLnB1c2gobykpfWZ1bmN0aW9uIF8obil7cmV0dXJuIG89NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCxyKXtvPTYscyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIHoodS5fX0gscik/KHUuX19WPW4oKSx1Lmk9cix1Ll9faD1uLHUuX19WKTp1Ll9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbz04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCxyKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShyP3IodCk6dCl9ZnVuY3Rpb24gUChuKXt2YXIgdT1kKHQrKywxMCksaT1wKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBWKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGIoKXtmb3IodmFyIHQ7dD1mLnNoaWZ0KCk7KWlmKHQuX19QJiZ0Ll9fSCl0cnl7dC5fX0guX19oLmZvckVhY2goayksdC5fX0guX19oLmZvckVhY2godyksdC5fX0guX19oPVtdfWNhdGNoKHIpe3QuX19ILl9faD1bXSxuLl9fZShyLHQuX192KX19bi5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LG4uX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLl9fVj1jLG4uX19OPW4uaT12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goayksaS5fX2guZm9yRWFjaCh3KSxpLl9faD1bXSkpLHU9cn0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmKG8uX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKG8pJiZpPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGopKGIpKSxvLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uaSYmKG4uX19IPW4uaSksbi5fX1YhPT1jJiYobi5fXz1uLl9fViksbi5pPXZvaWQgMCxuLl9fVj1jfSkpLHU9cj1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHIpe3Iuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChrKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fHcobil9KX1jYXRjaCh1KXtyLnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSxyPVtdLG4uX19lKHUsdC5fX3YpfX0pLGwmJmwodCxyKX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe20mJm0odCk7dmFyIHIsdT10Ll9fYzt1JiZ1Ll9fSCYmKHUuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2sobil9Y2F0Y2gobil7cj1ufX0pLHUuX19IPXZvaWQgMCxyJiZuLl9fZShyLHUuX192KSl9O3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBqKG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIGsobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gdyhuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24geihuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBCKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e1QgYXMgdXNlQ2FsbGJhY2sscSBhcyB1c2VDb250ZXh0LHggYXMgdXNlRGVidWdWYWx1ZSxoIGFzIHVzZUVmZmVjdCxQIGFzIHVzZUVycm9yQm91bmRhcnksViBhcyB1c2VJZCxBIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUscyBhcyB1c2VMYXlvdXRFZmZlY3QsRiBhcyB1c2VNZW1vLHkgYXMgdXNlUmVkdWNlcixfIGFzIHVzZVJlZixwIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtDb21wb25lbnQgYXMgbixjcmVhdGVFbGVtZW50IGFzIHQsb3B0aW9ucyBhcyBlLHRvQ2hpbGRBcnJheSBhcyByLEZyYWdtZW50IGFzIHUscmVuZGVyIGFzIG8saHlkcmF0ZSBhcyBpLGNyZWF0ZUNvbnRleHQgYXMgbCxjcmVhdGVSZWYgYXMgYyxjbG9uZUVsZW1lbnQgYXMgZn1mcm9tXCJwcmVhY3RcIjtleHBvcnR7Q29tcG9uZW50LEZyYWdtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlRWxlbWVudCxjcmVhdGVSZWZ9ZnJvbVwicHJlYWN0XCI7aW1wb3J0e3VzZVN0YXRlIGFzIGEsdXNlSWQgYXMgcyx1c2VSZWR1Y2VyIGFzIGgsdXNlRWZmZWN0IGFzIHYsdXNlTGF5b3V0RWZmZWN0IGFzIGQsdXNlUmVmIGFzIHAsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBtLHVzZU1lbW8gYXMgeSx1c2VDYWxsYmFjayBhcyBfLHVzZUNvbnRleHQgYXMgYix1c2VEZWJ1Z1ZhbHVlIGFzIFN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2Z1bmN0aW9uIGcobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuIG49PT10JiYoMCE9PW58fDEvbj09MS90KXx8biE9biYmdCE9dH1mdW5jdGlvbiB3KG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBSKG4sZSl7ZnVuY3Rpb24gcihuKXt2YXIgdD10aGlzLnByb3BzLnJlZixyPXQ9PW4ucmVmO3JldHVybiFyJiZ0JiYodC5jYWxsP3QobnVsbCk6dC5jdXJyZW50PW51bGwpLGU/IWUodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPXIsdChuLGUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix1LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHUuX19mPSEwLHV9KHcucHJvdG90eXBlPW5ldyBuKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCx3LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB4PWUuX19iO2UuX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx4JiZ4KG4pfTt2YXIgTj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24gayhuKXtmdW5jdGlvbiB0KHQpe3ZhciBlPWcoe30sdCk7cmV0dXJuIGRlbGV0ZSBlLnJlZixuKGUsdC5yZWZ8fG51bGwpfXJldHVybiB0LiQkdHlwZW9mPU4sdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIEE9ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnIocihuKS5tYXAodCkpfSxPPXttYXA6QSxmb3JFYWNoOkEsY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/cihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1yKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnJ9LFQ9ZS5fX2U7ZS5fX2U9ZnVuY3Rpb24obix0LGUscil7aWYobi50aGVuKWZvcih2YXIgdSxvPXQ7bz1vLl9fOylpZigodT1vLl9fYykmJnUuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSx1Ll9fYyhuLHQpO1Qobix0LGUscil9O3ZhciBJPWUudW5tb3VudDtmdW5jdGlvbiBMKG4sdCxlKXtyZXR1cm4gbiYmKG4uX19jJiZuLl9fYy5fX0gmJihuLl9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLG4uX19jLl9fSD1udWxsKSxudWxsIT0obj1nKHt9LG4pKS5fX2MmJihuLl9fYy5fX1A9PT1lJiYobi5fX2MuX19QPXQpLG4uX19jPW51bGwpLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIEwobix0LGUpfSkpLG59ZnVuY3Rpb24gVShuLHQsZSl7cmV0dXJuIG4mJihuLl9fdj1udWxsLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIFUobix0LGUpfSksbi5fX2MmJm4uX19jLl9fUD09PXQmJihuLl9fZSYmZS5pbnNlcnRCZWZvcmUobi5fX2Usbi5fX2QpLG4uX19jLl9fZT0hMCxuLl9fYy5fX1A9ZSkpLG59ZnVuY3Rpb24gRCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBGKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fYSYmdC5fX2Eobil9ZnVuY3Rpb24gTShuKXt2YXIgZSxyLHU7ZnVuY3Rpb24gbyhvKXtpZihlfHwoZT1uKCkpLnRoZW4oZnVuY3Rpb24obil7cj1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3U9bn0pLHUpdGhyb3cgdTtpZighcil0aHJvdyBlO3JldHVybiB0KHIsbyl9cmV0dXJuIG8uZGlzcGxheU5hbWU9XCJMYXp5XCIsby5fX2Y9ITAsb31mdW5jdGlvbiBWKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9ZS51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksSSYmSShuKX0sKEQucHJvdG90eXBlPW5ldyBuKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1GKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19hKXt2YXIgbj1yLnN0YXRlLl9fYTtyLl9fdi5fX2tbMF09VShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2E6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19hOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxELnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sRC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sZSl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxvPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPUwodGhpcy5fX2IscixvLl9fTz1vLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgaT1lLl9fYSYmdCh1LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIGkmJihpLl9faD1udWxsKSxbdCh1LG51bGwsZS5fX2E/bnVsbDpuLmNoaWxkcmVuKSxpXX07dmFyIFc9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gUChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uICQobil7dmFyIGU9dGhpcyxyPW4uaTtlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7byhudWxsLGUubCksZS5sPW51bGwsZS5pPW51bGx9LGUuaSYmZS5pIT09ciYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192PyhlLmx8fChlLmk9cixlLmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTpyLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obix0KXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLGUuaS5yZW1vdmVDaGlsZChuKX19KSxvKHQoUCx7Y29udGV4dDplLmNvbnRleHR9LG4uX192KSxlLmwpKTplLmwmJmUuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBqKG4sZSl7dmFyIHI9dCgkLHtfX3Y6bixpOmV9KTtyZXR1cm4gci5jb250YWluZXJJbmZvPWUscn0oVi5wcm90b3R5cGU9bmV3IG4pLl9fYT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9Rih0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVyh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LFYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1yKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxWLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Vi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VyhuLGUsdCl9KX07dmFyIHo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLEI9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sSD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsWj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIFkobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksbyhuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gcShuLHQsZSl7cmV0dXJuIGkobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfW4ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4ucHJvdG90eXBlLHQse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIit0XX0sc2V0OmZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSl9fSl9KTt2YXIgRz1lLmV2ZW50O2Z1bmN0aW9uIEooKXt9ZnVuY3Rpb24gSygpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBRKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1lLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBHJiYobj1HKG4pKSxuLnBlcnNpc3Q9SixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPUssbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9USxuLm5hdGl2ZUV2ZW50PW59O3ZhciBYLG5uPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSx0bj1lLnZub2RlO2Uudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyx1PWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBvPS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIGkgaW4gdT17fSxlKXt2YXIgbD1lW2ldO0gmJlwiY2hpbGRyZW5cIj09PWkmJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PWkmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1sfHwoXCJkZWZhdWx0VmFsdWVcIj09PWkmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/aT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09aSYmITA9PT1sP2w9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QoaSk/aT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QoaSt0KSYmIVooZS50eXBlKT9pPVwib25pbnB1dFwiOi9eb25mb2N1cyQvaS50ZXN0KGkpP2k9XCJvbmZvY3VzaW5cIjovXm9uYmx1ciQvaS50ZXN0KGkpP2k9XCJvbmZvY3Vzb3V0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpP2k9aS50b0xvd2VyQ2FzZSgpOm8mJkIudGVzdChpKT9pPWkucmVwbGFjZSgvW0EtWjAtOV0vZyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1sJiYobD12b2lkIDApLC9eb25pbnB1dCQvaS50ZXN0KGkpJiYoaT1pLnRvTG93ZXJDYXNlKCksdVtpXSYmKGk9XCJvbmlucHV0Q2FwdHVyZVwiKSksdVtpXT1sKX1cInNlbGVjdFwiPT10JiZ1Lm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHUudmFsdWUpJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9dS52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXUuZGVmYXVsdFZhbHVlJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD11Lm11bHRpcGxlPy0xIT11LmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnUuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9dSxlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKG5uLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJih1LmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLG5uKSl9bi4kJHR5cGVvZj16LHRuJiZ0bihuKX07dmFyIGVuPWUuX19yO2UuX19yPWZ1bmN0aW9uKG4pe2VuJiZlbihuKSxYPW4uX19jfTt2YXIgcm49e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBYLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LHVuPVwiMTcuMC4yXCI7ZnVuY3Rpb24gb24obil7cmV0dXJuIHQuYmluZChudWxsLG4pfWZ1bmN0aW9uIGxuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PXp9ZnVuY3Rpb24gY24obil7cmV0dXJuIGxuKG4pP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gZm4obil7cmV0dXJuISFuLl9fayYmKG8obnVsbCxuKSwhMCl9ZnVuY3Rpb24gYW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgc249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0saG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sdm49dTtmdW5jdGlvbiBkbihuKXtuKCl9ZnVuY3Rpb24gcG4obil7cmV0dXJuIG59ZnVuY3Rpb24gbW4oKXtyZXR1cm5bITEsZG5dfXZhciB5bj1kO2Z1bmN0aW9uIF9uKG4sdCl7dmFyIGU9dCgpLHI9YSh7aDp7X186ZSx2OnR9fSksdT1yWzBdLmgsbz1yWzFdO3JldHVybiBkKGZ1bmN0aW9uKCl7dS5fXz1lLHUudj10LEUodS5fXyx0KCkpfHxvKHtoOnV9KX0sW24sZSx0XSksdihmdW5jdGlvbigpe3JldHVybiBFKHUuX18sdS52KCkpfHxvKHtoOnV9KSxuKGZ1bmN0aW9uKCl7RSh1Ll9fLHUudigpKXx8byh7aDp1fSl9KX0sW25dKSxlfXZhciBibj17dXNlU3RhdGU6YSx1c2VJZDpzLHVzZVJlZHVjZXI6aCx1c2VFZmZlY3Q6dix1c2VMYXlvdXRFZmZlY3Q6ZCx1c2VJbnNlcnRpb25FZmZlY3Q6eW4sdXNlVHJhbnNpdGlvbjptbix1c2VEZWZlcnJlZFZhbHVlOnBuLHVzZVN5bmNFeHRlcm5hbFN0b3JlOl9uLHN0YXJ0VHJhbnNpdGlvbjpkbix1c2VSZWY6cCx1c2VJbXBlcmF0aXZlSGFuZGxlOm0sdXNlTWVtbzp5LHVzZUNhbGxiYWNrOl8sdXNlQ29udGV4dDpiLHVzZURlYnVnVmFsdWU6Uyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46TyxyZW5kZXI6WSxoeWRyYXRlOnEsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpmbixjcmVhdGVQb3J0YWw6aixjcmVhdGVFbGVtZW50OnQsY3JlYXRlQ29udGV4dDpsLGNyZWF0ZUZhY3Rvcnk6b24sY2xvbmVFbGVtZW50OmNuLGNyZWF0ZVJlZjpjLEZyYWdtZW50OnUsaXNWYWxpZEVsZW1lbnQ6bG4sZmluZERPTU5vZGU6YW4sQ29tcG9uZW50Om4sUHVyZUNvbXBvbmVudDp3LG1lbW86Uixmb3J3YXJkUmVmOmssZmx1c2hTeW5jOmhuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnNuLFN0cmljdE1vZGU6dm4sU3VzcGVuc2U6RCxTdXNwZW5zZUxpc3Q6VixsYXp5Ok0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6cm59O2V4cG9ydHtPIGFzIENoaWxkcmVuLHcgYXMgUHVyZUNvbXBvbmVudCx2biBhcyBTdHJpY3RNb2RlLEQgYXMgU3VzcGVuc2UsViBhcyBTdXNwZW5zZUxpc3Qscm4gYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsY24gYXMgY2xvbmVFbGVtZW50LG9uIGFzIGNyZWF0ZUZhY3RvcnksaiBhcyBjcmVhdGVQb3J0YWwsYm4gYXMgZGVmYXVsdCxhbiBhcyBmaW5kRE9NTm9kZSxobiBhcyBmbHVzaFN5bmMsayBhcyBmb3J3YXJkUmVmLHEgYXMgaHlkcmF0ZSxsbiBhcyBpc1ZhbGlkRWxlbWVudCxNIGFzIGxhenksUiBhcyBtZW1vLFkgYXMgcmVuZGVyLGRuIGFzIHN0YXJ0VHJhbnNpdGlvbixmbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLHNuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHBuIGFzIHVzZURlZmVycmVkVmFsdWUseW4gYXMgdXNlSW5zZXJ0aW9uRWZmZWN0LF9uIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLG1uIGFzIHVzZVRyYW5zaXRpb24sdW4gYXMgdmVyc2lvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG4vKipcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cbiAqIE5hbWVseSBpdCBpbnZvbHZlcyBkZS1ndW5raW5nIHRoZSB0eXBlIHN5c3RlbSBieSBsZXR0aW5nIHVzIHJldHVybiAqZ2VuZXJpYyogZnVuY3Rpb24gYW5kIHBsYXlpbmcgbmljZSB3aXRoIFJlYWN0LiBJbiBhbGwgb3RoZXIgcmVzcGVjdHMsIGl0IGFjdHMgbGlrZSBgZm9yd2FyZFJlZmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcbiAgICBjb25zdCBGb3J3YXJkZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcndhcmQtZWxlbWVudC1yZWYuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICpcbiAqIEV2ZW50dWFsbHksIHdoZW4gdXNlRXZlbnQgbGFuZHMsIHdlIGhvcGVmdWxseSB3b24ndCBuZWVkIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHkocGFyZW50SG9va05hbWUsIC4uLnZhbHVlcykge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMCA/IEpTT04uc3RyaW5naWZ5KHZhbHVlc1tpXSkgOiBcInRoZSBudW1iZXIgb2Ygc3VwcG9zZWRseSBzdGFibGUgZWxlbWVudHNcIn0pLmApO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudFtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGYpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcsIHJlYXNvbikgPT4ge1xuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBTYXZlIG91ciBjdXJyZW50IHZhbHVlIHNvIHRoYXQgd2UgY2FuIGNvbXBhcmUgYWdhaW5zdCBpdCBsYXRlclxuICAgICAgICAgICAgLy8gKGlmIHdlIGZsaXAgYmFjayB0byB0aGlzIHN0YXRlLCB0aGVuIHdlIHdvbid0IHNlbmQgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uKVxuICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IHZhbHVlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRSZWFzb24gPSByZWFzb25SZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RGVwID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGVwID0gZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCAhPSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGZpbmlzaGVkIHdpdGggZXZlcnl0aGluZywgc28gbWFyayB1cyBhcyBiZWluZyBvbiBhIGNsZWFuIHNsYXRlIGFnYWluLlxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSBVbnNldDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcbi8vIEVhc3kgY29uc3RhbnRzIGZvciBnZXRJbml0aWFsVmFsdWVcbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblVuZGVmaW5lZCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblplcm8oKSB7IHJldHVybiAwOyB9XG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfSAvLyBLaW5kIG9mIGFuIGV4dHJhLCBidXQgaXQncyB1c2VmdWwgaW4gb3RoZXIgcGxhY2VzIGFueXdheVxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byB1c2UgZm9yIGBjdXN0b21EZWJvdW5jZVJlbmRlcmluZ2AgdGhhdCBjYXVzZXMgYHVzZVBhc3NpdmVTdGF0ZWAgdG8gcnVuIGNoYW5nZXMgd2l0aG91dCB3YWl0aW5nIGEgdGljay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkltbWVkaWF0ZWx5KGYpIHsgZigpOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqXG4gKlxuICogKFRoaXMgaXMgaGVyZSwgaW4gdGhpcyBwYXJ0aWN1bGFyIGZpbGUsIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICogd2l0aG91dCBhbHNvIG1ha2luZyBhIHV0aWxpdGllcyBmaWxlLlxuICogT25jZSB3ZSBjYW4gcmVtb3ZlIHRoaXMgaG9vaywgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIGJhY2sgd2l0aCB1c2VSYW5kb21JZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbi8vXG4vLyAuLi5cbi8vIFdlbGwsIHVzZUV2ZW50IG9yIHdoYXRldmVyIGlzIGZpbmFsbHksIGZpbmFsbHkgNCB5ZWFycyBsYXRlciBmaW5hbGx5IGhlcmVcbi8vIHdoaWNoIGlzIGNvb2wgYW5kIG1lYW5zIHdlIHdvbid0IG5lZWQgdGhpcyBhdCBhbGwgc29vbi5cbi8vIFNvIGZvciBub3cgd2UnbGwgc3RpY2sgd2l0aCBkaWZmIHRvIHByZXZlbnQgYW55IHdlaXJkbmVzcyB3aXRoXG4vLyBjb21taXQgYmVpbmcgcHJpdmF0ZSBhbmQgYWxsLlxuY29uc3QgY29tbWl0TmFtZSA9IFwiZGlmZmVkXCI7XG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufTtcbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQ7XG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICBpZiAoZWZmZWN0KVxuICAgICAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgZWxzZVxuICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaWRdKTtcbn1cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcbiAgICAgICAgb2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3M/Lmxlbmd0aCB8fFxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUJlZm9yZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0pLCBbdmFsdWVdKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgPT09IFVuc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZHVyaW5nIHJlbmRlci4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xufVxuLyoqXG4gKiBMaWtlIGB1c2VTdGFibGVHZXR0ZXJgLCBidXQgKioqcmVxdWlyZXMqKiogdGhhdCBldmVyeXRoaW5nIGluIHRoZSBvYmplY3QgaXMgYWxzbyBzdGFibGUsXG4gKiBhbmQgaW4gdHVybiByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGl0c2VsZiBpcyBzdGFibGUuXG4gKiBAcGFyYW0gdFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZU9iamVjdCh0KSB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHMsIHJocykge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSwgcmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHJocywgbGhzKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9LCBbbGhzLCByaHNdKTtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMpLCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xoc307JHtyaHMgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pLFxuICAgICAgICAuLi4ocmhzID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG4vKlxudHlwZSBJc0VtcHR5T2JqZWN0PFQ+ID0gW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXT8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgdHlwZSBFeHRyYWN0ZWRQcm9wczxPIGV4dGVuZHMge30+ID0geyBbSyBpbiBrZXlvZiBPXTogUGljazxPW0tdLCAoXCJwcm9wc1N0YWJsZVwiIHwgXCJwcm9wc1Vuc3RhYmxlXCIpICYga2V5b2YgT1tLXT4gfTtcblxuY29uc3QgbzogRXh0cmFjdGVkUHJvcHM8VXNlR3JpZE5hdmlnYXRpb25Sb3dSZXR1cm5UeXBlPGFueSwgYW55Pj4gPSB7XG4gICAgYXNDaGlsZFJvd09mVGFibGU6IHtcblxuICAgIH0sXG4gICAgYXNQYXJlbnRSb3dPZkNlbGxzOiB7fVxufSovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcyguLi5hbGxQcm9wcykge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1lcmdlZFByb3BzXCIsIGFsbFByb3BzLmxlbmd0aCk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczIocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3Qga25vd25zID0gbmV3IFNldChbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pO1xuZnVuY3Rpb24gbWVyZ2VVbmtub3duKGtleSwgbGhzVmFsdWUsIHJoc1ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgbG9nPy4oYFRoZSBwcm9wIFwiJHtrZXl9XCIgY2Fubm90IHNpbXVsdGFuZW91c2x5IGJlIHRoZSB2YWx1ZXMgJHtsaHNWYWx1ZX0gYW5kICR7cmhzVmFsdWV9LiBPbmUgbXVzdCBiZSBjaG9zZW4gb3V0c2lkZSBvZiB1c2VNZXJnZWRQcm9wcy5gKTtcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyKGxoc0FsbCwgcmhzQWxsKSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMobGhzQWxsLnJlZiwgcmhzQWxsLnJlZiksXG4gICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzQWxsLnN0eWxlLCByaHNBbGwuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzQWxsW1wiY2xhc3NcIl0sIGxoc0FsbC5jbGFzc05hbWUsIHJoc0FsbFtcImNsYXNzXCJdLCByaHNBbGwuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbC5jaGlsZHJlbiwgcmhzQWxsLmNoaWxkcmVuKSxcbiAgICB9O1xuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0W1wiY2xhc3NcIl0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldFtcImNsYXNzXCJdO1xuICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcbiAgICBmb3IgKGNvbnN0IGxoc0tleVUgaW4gbGhzQWxsKSB7XG4gICAgICAgIGNvbnN0IGxoc0tleSA9IGxoc0tleVU7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG4gICAgZm9yIChjb25zdCByaHNLZXlVIGluIHJoc0FsbCkge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhyaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VVbmtub3duKHJoc0tleSwgcmV0W3Joc0tleV0sIHJoc0FsbFtyaHNLZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBydiA9IHJocyguLi5hcmdzKTtcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLypcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+KHI6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPEU+LCAuLi5vdGhlclByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSB7XG4gICAgcmV0dXJuIFtyLnJlZkVsZW1lbnRSZXR1cm4ucHJvcHNTdGFibGUsIC4uLm90aGVyUHJvcHNdO1xufSovXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IHsgcmVmRWxlbWVudFBhcmFtZXRlcnM6IHsgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQgfSB9ID0gYXJncztcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VSZWZFbGVtZW50XCIsIG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50KTtcbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBbXSk7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWYoeyByZWY6IHNldEVsZW1lbnQgfSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghSFRNTEVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0U3RhdGUgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7IHJldHVybiByZWYuY3VycmVudDsgfTtcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YXRlLmpzLm1hcCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuaW1wb3J0IHN0dWJGYWxzZSBmcm9tICcuL3N0dWJGYWxzZS5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCdWZmZXI7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJwcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwibG9kYXNoLWVzL25vb3BcIjtcbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChjb250ZXh0SW5mby5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGNvbnRleHRJbmZvLmN1cnJlbnQgPSB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9O1xuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZihudWxsKTtcbiAgICBpZiAoYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IC0xO1xuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dEluZm8uY3VycmVudCwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn1cbi8qKlxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICpcbiAqIFBhc3NpbmcgYG51bGxgIGlzIGZpbmUgYW5kIHNpbXBseSBzdG9wcyB0aGUgZWZmZWN0IHVudGlsIHlvdSByZXN0YXJ0IGl0IGJ5IHByb3ZpZGluZyBhIG5vbi1udWxsIGNhbGxiYWNrLlxuICpcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2sgPz8gbm9vcCk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgY29uc3QgU3dhcHBhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsImltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBoLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVHZXR0ZXIsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJ1bkltbWVkaWF0ZWx5IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRDbGFzc0Jhc2UoZ2l2ZW4pIHtcbiAgICByZXR1cm4gZ2l2ZW4gPz8gXCJwdGxcIjtcbn1cbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwibXNcIikpXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcbiAgICAgICAgICAgIHJldHVybiAoK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIG5leHRTdGF0ZS5zcGxpdChcIi1cIik7XG59XG4vKipcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNpdGlvbih7IHNob3c6IHYsIGFuaW1hdGVPbk1vdW50OiBhLCBtZWFzdXJlOiBtLCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBlLCBkdXJhdGlvbjogZCB9KSB7XG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGdldEFuaW1hdGVPbk1vdW50IH0gPSB1c2VDb250ZXh0KFN3YXBwYWJsZUNvbnRleHQpO1xuICAgIGNsYXNzQmFzZSB8fD0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIGUgfHw9IFwiaGlkZGVuXCI7XG4gICAgYSA/Pz0gZ2V0QW5pbWF0ZU9uTW91bnQoKTtcbiAgICBtID8/PSBmYWxzZTtcbiAgICBjb25zdCBnZXRNZWFzdXJlID0gdXNlU3RhYmxlR2V0dGVyKG0pO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIGNsYXNzQmFzZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZSk7XG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQoeyByZWZFbGVtZW50UGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0KFtcbiAgICAgICAgLy8gVGhpcyBpcyByZW1vdmVkIGR1cmluZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAvLyAoYXQgbGVhc3Qgb25jZSBgc2hvd2AgaXMgbm9uLW51bGwpXG4gICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgXSkpO1xuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aW9uLCBwaGFzZV0gPSBwYXJzZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWYoe1xuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gZ2V0RWxlbWVudCgpICYmIGUuZWxhcHNlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IHRpbWUgXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCdzIENTUyBjbGFzcyB0byBtYXRjaCB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGFuZCBwaGFzZS5cbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVDbGFzc2VzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIGRpcmVjdGlvbiwgcGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZW50ZXItaW5pdGAsIGAke2NsYXNzQmFzZX0tZW50ZXItdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZW50ZXItZmluYWxpemVgLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJyZW1vdmVkXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcImhpZGRlblwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn0tJHtwaGFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V4aXRWaXNpYmlsaXR5fWBcbiAgICAgICAgXTtcbiAgICAgICAgLy8obWVhc3VyZSA/IGFsbENsYXNzZXNUb0FkZCA6IGFsbENsYXNzZXNUb1JlbW92ZSkucHVzaChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgdmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWxsIFwibWVhc3VyZVwiIHZhcmlhYmxlcyAob3IgcmVtb3ZlcyB0aGVtKVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZVNpemVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG5leHRTaXplKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS10b3BgLCBuZXh0U2l6ZT8udG9wKTtcbiAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7Y2xhc3NCYXNlfS1tZWFzdXJlLWxlZnRgLCBuZXh0U2l6ZT8ubGVmdCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS13aWR0aGAsIG5leHRTaXplPy53aWR0aCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS1oZWlnaHRgLCBuZXh0U2l6ZT8uaGVpZ2h0KTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG1lYXN1cmUpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydGllcyhlbGVtZW50LCBzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBXZSB1c2UgYm90aCB1c2VUaW1lb3V0IGFuZCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHRpbWluZyBjZXJ0YWluIHRoaW5ncyAtLVxuICAgIC8vIHJhZiBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIGluaXQgdG8gdHJhbnNpdGlvbiAod291bGQgdXNlIHF1ZXVlTWljcm90YXNrIGJ1dCBpdCBjYW4ndCBiZSBjYW5jZWxsZWQpXG4gICAgLy8gc2V0VGltZW91dCBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIHRyYW5zaXRpb24gdG8gZmluYWxpemUgKGFzIGEgYmFja3VwIGluIGNhc2UgdHJhbnNpdGlvbmVuZCBkb2Vzbid0IGZpcmUpXG4gICAgLy9cbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCBzdGFsZSBjYWxsYmFja3MgcnVubmluZyAoaS5lLiB3aGVuIHdlIHJhcGlkbHkgc3dpdGNoIGJldHdlZW4gdmlzaWJsZSBhbmQgbm90KVxuICAgIC8vIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFjY3VyYXRlbHkgY2FuY2VsIGFueXRoaW5nIHRoYXQgY2FuIGNoYW5nZSBvdXIgc3RhdGUgb24gYSBkZWxheS5cbiAgICAvL1xuICAgIC8vIEFsc28gb2Ygbm90ZSwgd2Ugc3RvcmUgXCIoZikgPT4gd2luZG93LmNsZWFyVGltZW91dChmKVwiIGluc3RlYWQgb2YganVzdCBcIndpbmRvdy5jbGVhclRpbWVvdXRcIiBiZWNhdXNlXG4gICAgLy8gb2YgdGhlIGltcGxpY2l0IHdpbmRvdyBvYmplY3QgLS0gcHJvYmxlbXMgd2l0aCBhIG1pc3NpbmcgYHRoaXNgIG9iamVjdCBhbmQgYWxsIHRoYXQgbm9uc2Vuc2UuXG4gICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHVzZVJlZigtMSk7XG4gICAgY29uc3QgdGltZW91dENsZWFyRnVuY3Rpb24gPSB1c2VSZWYobnVsbCk7XG4gICAgLyoqXG4gICAgICogQW55IHRpbWUgdGhlIHN0YXRlIGNoYW5nZXMsIHRoZXJlJ3Mgc29tZSBsb2dpYyB3ZSBuZWVkIHRvIHJ1bjpcbiAgICAgKlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYW4gYGluaXRgIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCBhIG1vbWVudCBhbmQgdGhlbiBjaGFuZ2UgdG8gdGhlIGB0cmFuc2l0aW9uYCBwaGFzZS5cbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGEgYHRyYW5zaXRpb25gIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCB1bnRpbCB0aGUgdHJhbnNpdGlvbiBjb21wbGV0ZXMsIHRoZW4gY2hhbmdlIHRvIHRoZSBgZmluYWxpemVgIHBoYXNlLlxuICAgICAqXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IFtuZXh0RGlyZWN0aW9uLCBuZXh0UGhhc2VdID0gcGFyc2VTdGF0ZShuZXh0U3RhdGUpO1xuICAgICAgICBzZXRJc1Zpc2libGUobmV4dERpcmVjdGlvbiA9PSBcImVudGVyXCIgfHwgKG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgJiYgbmV4dFBoYXNlICE9IFwiZmluYWxpemVcIikpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBtZWFzdXJlID0gZ2V0TWVhc3VyZSgpO1xuICAgICAgICAvL2NvbnN0IGR1cmF0aW9uT3ZlcnJpZGUgPSBnZXREdXJhdGlvbk92ZXJyaWRlKCk7XG4gICAgICAgIC8qaWYgKGR1cmF0aW9uT3ZlcnJpZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZHVyYXRpb25PdmVycmlkZSArIFwibXNcIjtcbiAgICAgICAgICAgIGVsZW1lbnQ/LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmAsIGAke2R1cmF0aW9uT3ZlcnJpZGV9bXNgKTtcbiAgICAgICAgfSovXG4gICAgICAgIGlmIChtZWFzdXJlICYmIGVsZW1lbnQgJiYgbmV4dFBoYXNlID09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAvLyBXZSBhY3R1YWxseSBuZWVkIGFsbCB0aGVzZSByZWZsb3dzLCBlaXRoZXIgdG8gbWFrZSB0aGluZ3MgbGlrZSBibG9jay1zaXplIHdvcmssIG9yIHRvIG1ha2UgdGhpbmdzIGxpa2Ugb3BhY2l0eSB3b3JrLlxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7IC8vIEJ5IG1lYXN1cmluZyB0aGUgZWxlbWVudCBiZWxvdyB3ZSBpbXBsaWNpdGx5IHJlZmxvdywgYnV0IHRoaXMgaXMgYSByZW1pbmRlciB0aGF0IGl0IGhhcHBlbnMuXG4gICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgbWVhc3VyZSk7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBuZXh0UGhhc2UpO1xuICAgICAgICAgICAgLy8gVE9ETzogVW5uZWNlc3NhcnkgcmVmbG93P1xuICAgICAgICAgICAgLy8gSXQgbWlnaHQgb25seSBiZSBuZWNlc3Nhcnkgd2hlbiBjaGFuZ2luZyBmcm9tIC1pbml0IHRvIC10cmFuc2l0aW9uXG4gICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleGl0VmlzaWJpbGl0eSA9IGdldEV4aXRWaXNpYmlsaXR5KCk7XG4gICAgICAgIGlmIChleGl0VmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgY29uc3QgaW5lcnQgPSAoZXhpdFZpc2liaWxpdHkgPT0gXCJpbmVydFwiICYmIG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgPyB0cnVlIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGlmIChpbmVydClcbiAgICAgICAgICAgICAgICBvdGhlclByb3BzLmN1cnJlbnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdGhlclByb3BzLmN1cnJlbnRbXCJpbmVydFwiXTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5lcnQgPSAoaW5lcnQgfHwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobmV4dFBoYXNlKSB7XG4gICAgICAgICAgICBjYXNlIFwiaW5pdFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4geyBzZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS10cmFuc2l0aW9uYCk7IH0pO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSAoZikgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoZik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGYpID0+IGNsZWFyVGltZW91dChmKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJmaW5hbGl6ZVwiOiB7XG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbyBvciBzY2hlZHVsZSBvciBhbnl0aGluZyAtLSB3ZSBqdXN0IHVwZGF0ZSBvdXIgY2xhc3NlcyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IFtnZXRTdGF0ZSwgc2V0U3RhdGVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBJZiBgc2hvd2AgaXMgbnVsbCwgdGhlbiB3ZSBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICAgIGlmICh2ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGBzaG93YCBpcyB0cnVlIG9yIGZhbHNlIChhcyBvcHBvc2VkIHRvIG51bGwpLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIHNlZWluZyBhIG5vbi1udWxsIHZhbHVlLCBcbiAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgaW5kaWNhdGVzIHRoZSBubyB0cmFuc2l0aW9uIGxvZ2ljIGhhcyBzdGFydGVkLlxuICAgICAgICAvLyAoQmVjYXVzZSB0aGlzIGlzIHVzZUxheW91dEVmZmVjdCwgaXQgd2lsbCB0YWtlIGVmZmVjdCBiZWZvcmUgdGhlIGNsYXNzJ3MgZWZmZWN0cyBhcmUgcGFpbnRlZClcbiAgICAgICAgaWYgKCFoYXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuY3VycmVudC5kZWxldGUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgcGVuZGluZyBjbGFzcyBvZnRlbiBtYWtlcyB0aGlzIGhpZGRlbiBvciBkLW5vbmUsIFxuICAgICAgICAgICAgICAgIC8vIGZvcmNlIGEgcmVmbG93IGp1dXVzdCB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2UgPSBcImluaXRcIjtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcbiAgICAgICAgICAgICAgICBuZXh0UGhhc2UgPSBcInRyYW5zaXRpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBlbnRlci0ke25leHRQaGFzZX1gKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFt2XSk7XG4gICAgaWYgKGQgIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZCArIFwibXNcIjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF07XG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZSxcbiAgICAgICAgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHByb3BzU3RhYmxlLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFtcbiAgICAgICAgICAgICAgICAuLi5jbGFzc05hbWVzLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V9YCxcbiAgICAgICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLFxuICAgICAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gXG4gICAgICAgICAgICBdLmpvaW4oXCIgXCIpLFxuICAgICAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudCxcbiAgICAgICAgICAgIC4uLm90aGVyUHJvcHMuY3VycmVudFxuICAgICAgICB9KVxuICAgIH07XG59XG5leHBvcnQgY29uc3QgSXNWaXNpYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZmFsc2UpO1xuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uYWJsZSh7IGRlbGF5TW91bnRVbnRpbFNob3duLCBhbmltYXRlT25Nb3VudCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHksIG1lYXN1cmUsIHNob3csIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpIHtcbiAgICBjb25zdCB7IHByb3BzOiB0cmFuc2l0aW9uUHJvcHMsIGlzVmlzaWJsZSB9ID0gdXNlVHJhbnNpdGlvbih7XG4gICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBleGl0VmlzaWJpbGl0eSxcbiAgICAgICAgbWVhc3VyZSxcbiAgICAgICAgc2hvd1xuICAgIH0pO1xuICAgIGNvbnN0IGNoaWxkcmVuSXNWbm9kZSA9IChjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlICYmIGNoaWxkcmVuLnByb3BzKTtcbiAgICBjb25zdCBmaW5hbFByb3BzID0gdXNlTWVyZ2VkUHJvcHMocHJvcHMsIHRyYW5zaXRpb25Qcm9wcywgeyAuLi5wcm9wcywgcmVmIH0sIGNoaWxkcmVuSXNWbm9kZSA/IHsgcmVmOiBjaGlsZHJlbi5yZWYsIC4uLmNoaWxkcmVuLnByb3BzIH0gOiB7fSk7XG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgZGVsYXlNb3VudFVudGlsU2hvd24gaXMsXG4gICAgLy8gb25jZSB3ZSd2ZSByZW5kZXJlZCBvdXIgY2hpbGRyZW4gb25jZSwgXG4gICAgLy8gZW5zdXJlIHRoYXQgd2UgZG9uJ3QgdW5tb3VudCB0aGVtIGFnYWluIGFuZCB3YXN0ZSBhbGwgdGhhdCB3b3JrLlxuICAgIC8vIChJZiB5b3UgcmVhbGx5IG5lZWQgdGhpcyB5b3UgY2FuIGp1c3QgdW5tb3VudCB0aGUgZW50aXJlIHRyYW5zaXRpb24gaXRzZWxmKVxuICAgIGNvbnN0IHJlbmRlckNoaWxkcmVuID0gKHNob3cgfHwgIWRlbGF5TW91bnRVbnRpbFNob3duKTtcbiAgICBjb25zdCBoYXNSZW5kZXJlZENoaWxkcmVuID0gdXNlUmVmKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocmVuZGVyQ2hpbGRyZW4pXG4gICAgICAgICAgICBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgfHw9IHRydWU7XG4gICAgfSwgW2hhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudCA/IGZhbHNlIDogcmVuZGVyQ2hpbGRyZW5dKTtcbiAgICBpZiAoIXJlbmRlckNoaWxkcmVuICYmICFoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSkuY3VycmVudDtcbiAgICBsZXQgcmV0O1xuICAgIGlmIChjaGlsZHJlbklzVm5vZGUpIHtcbiAgICAgICAgcmV0ID0gaChTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sIGNsb25lRWxlbWVudChjaGlsZHJlbiwgZmluYWxQcm9wcykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0ID0gaChTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0IH0sXG4gICAgICAgICAgICBoKFwic3BhblwiLCB7IC4uLmZpbmFsUHJvcHMgfSwgY2hpbGRyZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIChoKElzVmlzaWJsZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGlzVmlzaWJsZSB9LCByZXQpKTtcbn0pKTtcbmxldCBkdW1teTtcbmZ1bmN0aW9uIGZvcmNlUmVmbG93KGUpIHtcbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxuICAgIGR1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkdW1teSA9IGUuc3R5bGUub3BhY2l0eTtcbiAgICBkdW1teSA9IGUuc3R5bGUudHJhbnNmb3JtO1xuICAgIHJldHVybiBlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbmFibGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgQ2xpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcCh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSkgfSkpO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mYWRlYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmFkZS1taW5gXTogKGZhZGVNaW4gPz8gMCksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZhZGUgZWZmZWN0LlxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGUoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGlwUHJvcHMgfSBmcm9tIFwiLi9jbGlwXCI7XG5pbXBvcnQgeyBjcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuO1xuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGRlbGF5TW91bnRVbnRpbFNob3duLCBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKlxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXG4gKlxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cbiAqXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlIVxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIG1pbkJsb2NrU2l6ZSwgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiB0cnVlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbGxhcHNlUHJvcHMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgY29uc3QgQ29sbGFwc2VGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZUZhZGUoeyBjbGFzc0Jhc2UsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIGV4aXRWaXNpYmlsaXR5LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IHRydWUsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9KSwgY3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgU2xpZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tc2xpZGVgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cbiAqXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgc2xpZGVJbmxpbmVgIGFuZCBgc2xpZGVCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIC8vKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSA9IHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9KSk7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KTtcbn0pKTtcbi8vIFRPRE86IFRoaXMgbG9naWMgd2FzIHJlcXVpcmVkIGZvciBzbGlkZXMgYXQgb25lIHBvaW50IHRvIGVuc3VyZSB0aGF0IHNsaWRlVGFyZ2V0SW5saW5lPXtpbmRleCAtIGN1cnJlbnRJbmRleH0gd29ya3MgcmlnaHQsXG4vLyBidXQgaXQgd29ya3Mgd2l0aG91dCBpdCBub3csIHNvLCBsaWtlLCB3ZSdyZSBnb29kIHRoZW4/IFdoaWNoIEknbSBva2F5IHdpdGggYmVjYXVzZSBJIGNhbid0IGV4cGxhaW4gdGhlIGxvZ2ljIGhlcmUgaG9uZXN0bHkuXG4vKmV4cG9ydCBmdW5jdGlvbiB1c2VTbGlkZVRoaW5nKHsgdGFyZ2V0QmxvY2ssIHRhcmdldElubGluZSB9OiB7IHRhcmdldElubGluZT86IG51bWJlciB8IG51bGwsIHRhcmdldEJsb2NrPzogbnVtYmVyIHwgbnVsbCB9KTogeyB0YXJnZXRJbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCwgdGFyZ2V0QmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB9IHtcblxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZih0YXJnZXRJbmxpbmUgPz8gMSk7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYodGFyZ2V0QmxvY2sgPz8gMCk7XG5cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAodGFyZ2V0SW5saW5lKSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IHRhcmdldElubGluZTsgfSwgW3RhcmdldElubGluZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0YXJnZXRCbG9jaykgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IHRhcmdldEJsb2NrOyB9LCBbdGFyZ2V0QmxvY2tdKTtcblxuICAgIGlmICh0YXJnZXRJbmxpbmUgPT0gMClcbiAgICAgICAgdGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKHRhcmdldEJsb2NrID09IDApXG4gICAgICAgIHRhcmdldEJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcblxuICAgIHRhcmdldElubGluZSA/Pz0gdW5kZWZpbmVkO1xuICAgIHRhcmdldEJsb2NrID8/PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgdGFyZ2V0SW5saW5lLCB0YXJnZXRCbG9jayB9O1xufSovXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBjcmVhdGVTbGlkZVByb3BzIH0gZnJvbSBcIi4vc2xpZGVcIjtcbmltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuO1xuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlKHsgY2xhc3NCYXNlLCBkZWxheU1vdW50VW50aWxTaG93biwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9KSwgY3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSkpIH0pKTtcbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXpvb21gLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWJsb2NrYF06IGAkeyh6b29tT3JpZ2luQmxvY2sgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICB9LFxuICAgIH0pO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxuICovXG5leHBvcnQgY29uc3QgWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyBtZWFzdXJlOiBmYWxzZSwgc2hvdzogc2hvdywgZHVyYXRpb246IGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudDogYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZTogY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eTogZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duOiBkZWxheU1vdW50VW50aWxTaG93biwgLi4udXNlTWVyZ2VkUHJvcHMoY3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9KSwgeyAuLi5yZXN0LCByZWYgfSkgfSkpO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBjcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbjtcbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KSkgfSkpO1xufSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb20oeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgbWVhc3VyZTogZmFsc2UsIHNob3c6IHNob3csIGR1cmF0aW9uOiBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQ6IGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2U6IGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93bjogZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG47XG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNYXgsIGZhZGVNaW4sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICAvLyAgKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSA9IHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9KSk7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0pLCBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9KSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mbGlwYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1pbmxpbmVgXTogYCR7KGZsaXBBbmdsZUlubGluZSA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyhmbGlwQW5nbGVCbG9jayA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1wZXJzcGVjdGl2ZWBdOiBgJHsocGVyc3BlY3RpdmUgPz8gODAwKX1weGBcbiAgICAgICAgfVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cbiAqXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgZmxpcElubGluZWAgYW5kIGBmbGlwQmxvY2tgLFxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxuICpcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDkwKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoZmxpcEFuZ2xlSW5saW5lKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IGZsaXBBbmdsZUlubGluZTsgfSwgW2ZsaXBBbmdsZUlubGluZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVCbG9jaylcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IGZsaXBBbmdsZUJsb2NrOyB9LCBbZmxpcEFuZ2xlQmxvY2tdKTtcbiAgICBpZiAoZmxpcEFuZ2xlSW5saW5lID09IDApXG4gICAgICAgIGZsaXBBbmdsZUlubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xuICAgIGlmIChmbGlwQW5nbGVCbG9jayA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IG1lYXN1cmU6IGZhbHNlLCBzaG93OiBzaG93LCBkdXJhdGlvbjogZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50OiBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlOiBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd246IGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi51c2VNZXJnZWRQcm9wcyhjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbGlwLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuLyoqXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cbiAqXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXG4gKlxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cbiAqXG4gKiBMb25nIHdheSBvZiBzYXlpbmcsIGlmIHlvdSBnZXQgYSBjcnlwdGljIGVycm9yIHdpdGggdGhpcyBjb21wb25lbnQsIG1ha2Ugc3VyZSBpdCBoYXMgYSBzaW5nbGUgYDxkaXY+YCBjaGlsZCBvciBzb21ldGhpbmcuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTd2FwcGFibGUoeyBjaGlsZHJlbjogYywgY2xhc3NCYXNlLCBpbmxpbmUsIC4uLnAgfSwgcmVmKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCEhY2hpbGRyZW4udHlwZSk7XG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcyh0cmFuc2l0aW9uUHJvcHMsIGNoaWxkcmVuLnByb3BzKTtcbiAgICBjb25zdCBhbmltYXRlT25Nb3VudCA9IHVzZVJlZihmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYW5pbWF0ZU9uTW91bnQuY3VycmVudCA9IHRydWU7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZVJlZih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiB7IHJldHVybiBhbmltYXRlT25Nb3VudC5jdXJyZW50OyB9IH0pO1xuICAgIHJldHVybiAoaChTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0VmFsdWUuY3VycmVudCB9LCBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbikpKTtcbn0pKTtcbi8vIElmIFwiaW5saW5lXCIgaXNuJ3QgZXhwbGljaXRseSBwcm92aWRlZCwgd2UgdHJ5IHRvIGltcGxpY2l0bHkgZG8gaXQgYmFzZWQgb24gdGhlIGNoaWxkJ3MgdGFnLlxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwiYVwiLFxuICAgIFwiYWJiclwiLFxuICAgIFwiYWNyb255bVwiLFxuICAgIFwiYXVkaW9cIixcbiAgICBcImJcIixcbiAgICBcImJkaVwiLFxuICAgIFwiYmRvXCIsXG4gICAgXCJiaWdcIixcbiAgICBcImJyXCIsXG4gICAgXCJidXR0b25cIixcbiAgICBcImNhbnZhc1wiLFxuICAgIFwiY2l0ZVwiLFxuICAgIFwiY29kZVwiLFxuICAgIFwiZGF0YVwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcImRlbFwiLFxuICAgIFwiZGZuXCIsXG4gICAgXCJlbVwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImlcIixcbiAgICBcImlmcmFtZVwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW5zXCIsXG4gICAgXCJrYmRcIixcbiAgICBcImxhYmVsXCIsXG4gICAgXCJtYXBcIixcbiAgICBcIm1hcmtcIixcbiAgICBcIm1ldGVyXCIsXG4gICAgXCJub3NjcmlwdFwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBpY3R1cmVcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJxXCIsXG4gICAgXCJydWJ5XCIsXG4gICAgXCJzXCIsXG4gICAgXCJzYW1wXCIsXG4gICAgXCJzY3JpcHRcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwic2xvdFwiLFxuICAgIFwic21hbGxcIixcbiAgICBcInNwYW5cIixcbiAgICBcInN0cm9uZ1wiLFxuICAgIFwic3ViXCIsXG4gICAgXCJzdXBcIixcbiAgICBcInN2Z1wiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJ0dFwiLFxuICAgIFwidmFyXCIsXG4gICAgXCJ2aWRlb1wiLFxuICAgIFwid2JyXCJcbl0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dhcHBhYmxlLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbIm4iLCJsIiwidSIsInQiLCJvIiwiciIsImYiLCJlIiwiYyIsInMiLCJhIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ2IiwidHlwZSIsInByb3BzIiwia2V5IiwicmVmIiwiX19rIiwiX18iLCJfX2IiLCJfX2UiLCJfX2QiLCJfX2MiLCJfX2giLCJjb25zdHJ1Y3RvciIsIl9fdiIsInZub2RlIiwicCIsImQiLCJjb250ZXh0IiwiXyIsImluZGV4T2YiLCJrIiwiYmFzZSIsImIiLCJwdXNoIiwiZyIsIl9fciIsImRlYm91bmNlUmVuZGVyaW5nIiwic2V0VGltZW91dCIsInNvcnQiLCJzb21lIiwiX19QIiwiaiIsIl9fbiIsIm93bmVyU1ZHRWxlbWVudCIsInoiLCJ3IiwieSIsIngiLCJDIiwiQXJyYXkiLCJpc0FycmF5IiwibSIsIkEiLCJOIiwiTSIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJIIiwiJCIsInNldFByb3BlcnR5IiwidGVzdCIsInN0eWxlIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlQiLCJJIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwiY29udGV4dFR5cGUiLCJ2YWx1ZSIsIl9fRSIsInByb3RvdHlwZSIsInJlbmRlciIsIk8iLCJzdWIiLCJzdGF0ZSIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJMIiwiZGlmZmVkIiwibG9jYWxOYW1lIiwibm9kZVR5cGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImlzIiwiZGF0YSIsImNoaWxkTm9kZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImF0dHJpYnV0ZXMiLCJuYW1lIiwiX19odG1sIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJ1bm1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJQIiwiZmlyc3RDaGlsZCIsInEiLCJCIiwiQ29uc3VtZXIiLCJQcm92aWRlciIsInNwbGljZSIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJmb3JjZVVwZGF0ZSIsIl9fSCIsIl9fViIsIl9fTiIsImZpbHRlciIsImV2ZXJ5IiwiRiIsInNoaWZ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJSIiwiZGlzcGxheU5hbWUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX19mIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJTeW1ib2wiLCJmb3IiLCIkJHR5cGVvZiIsInRoZW4iLCJtYXAiLCJVIiwiRCIsIl9fdSIsIl9fYSIsIlYiLCJfX1IiLCJfX08iLCJwb3AiLCJmYWxsYmFjayIsIlciLCJkZWxldGUiLCJyZXZlYWxPcmRlciIsInNpemUiLCJnZXQiLCJNYXAiLCJyZXZlcnNlIiwic2V0IiwiWiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJHIiwiSiIsIksiLCJjYW5jZWxCdWJibGUiLCJRIiwiZGVmYXVsdFByZXZlbnRlZCIsInBlcnNpc3QiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIm5hdGl2ZUV2ZW50Iiwibm4iLCJjbGFzcyIsInRuIiwibXVsdGlwbGUiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZSIsImNsYXNzTmFtZSIsImVudW1lcmFibGUiLCJlbiIsImZvcndhcmRFbGVtZW50UmVmIiwiQ29tcG9uZW50IiwiRm9yd2FyZGVkQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsInVzZUVuc3VyZVN0YWJpbGl0eSIsInBhcmVudEhvb2tOYW1lIiwidmFsdWVzIiwiaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkiLCJ1c2VSZWYiLCJzaG93bkVycm9yIiwidXNlSGVscGVyIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwib3B0aW9ucyIsInVzZVBhc3NpdmVTdGF0ZSIsIm9uQ2hhbmdlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiY3VzdG9tRGVib3VuY2VSZW5kZXJpbmciLCJ2YWx1ZVJlZiIsIlVuc2V0IiwicmVhc29uUmVmIiwid2FybmluZ1JlZiIsImRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0IiwiY2xlYW51cENhbGxiYWNrUmVmIiwib25TaG91bGRDbGVhblVwIiwidXNlQ2FsbGJhY2siLCJjbGVhbnVwQ2FsbGJhY2siLCJ0cnlFbnN1cmVWYWx1ZSIsImluaXRpYWxWYWx1ZSIsImV4IiwiZ2V0VmFsdWUiLCJ3YXJuIiwidXNlTGF5b3V0RWZmZWN0Iiwic2V0VmFsdWUiLCJhcmciLCJyZWFzb24iLCJuZXh0VmFsdWUiLCJGdW5jdGlvbiIsIm5leHRSZWFzb24iLCJuZXh0RGVwIiwicHJldkRlcCIsInJldHVybk51bGwiLCJydW5JbW1lZGlhdGVseSIsIlRhYmxlIiwiYmFzZTY0IiwicmFuZG9tNkJpdHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb202NEJpdHMiLCJnZW5lcmF0ZVJhbmRvbUlkIiwicHJlZml4Iiwiam9pbiIsInByZXZpb3VzSW5wdXRzIiwidG9SdW4iLCJjb21taXROYW1lIiwib3JpZ2luYWxDb21taXQiLCJuZXdDb21taXQiLCJpZCIsImVmZmVjdEluZm8iLCJvbGRJbnB1dHMiLCJhcmdzQ2hhbmdlZCIsImlucHV0cyIsImNsZWFudXAiLCJlZmZlY3QiLCJjbGVhciIsImFyZ3MiLCJ1c2VCZWZvcmVMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwidXNlU3RhYmxlR2V0dGVyIiwiRXJyb3IiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImxocyIsInJocyIsIkZyYWdtZW50IiwiY2xzeCIsInVzZU1lcmdlZENsYXNzZXMiLCJsaHNDbGFzcyIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwiYXNzZXJ0IiwidXNlTWVyZ2VkUmVmcyIsImNvbWJpbmVkIiwic3R5bGVTdHJpbmdUb09iamVjdCIsImZyb21FbnRyaWVzIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwibG9nIiwidXNlTWVyZ2VkUHJvcHMiLCJhbGxQcm9wcyIsInJldCIsIm5leHRQcm9wcyIsInVzZU1lcmdlZFByb3BzMiIsImtub3ducyIsIm1lcmdlVW5rbm93biIsImxoc1ZhbHVlIiwicmhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImxoc0FsbCIsInJoc0FsbCIsImxoc0tleVUiLCJsaHNLZXkiLCJoYXMiLCJyaHNLZXlVIiwicmhzS2V5IiwibHYiLCJydiIsIlByb21pc2UiLCJhbGwiLCJ1c2VSZWZFbGVtZW50IiwicmVmRWxlbWVudFBhcmFtZXRlcnMiLCJvbkVsZW1lbnRDaGFuZ2UiLCJvbk1vdW50Iiwib25Vbm1vdW50IiwiaGFuZGxlciIsInByZXZWYWx1ZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwicHJvcHNTdGFibGUiLCJyZWZFbGVtZW50UmV0dXJuIiwiX2EiLCJfYiIsIl9jIiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJkZXN0cnVjdG9yIiwibnVsbGFibGUiLCJ0b3AiLCJlbGVtcyIsImVsZW1lbnQiLCJyZW1vdmUiLCJuZXdUb3AiLCJ0b0tlZXBJbmVydCIsIm9sZFBhcmVudHMiLCJuZXdQYXJlbnRzIiwiYm9keSIsInRvU2tpcCIsIm9sZEluZXJ0IiwibmV3SW5lcnQiLCJzaWJsaW5nc1RvUmVzdG9yZSIsImluZXJ0IiwiYWRkIiwiZWxlbWVudHMiLCJtbyIsImRpc2Nvbm5lY3QiLCJzaWJsaW5ncyIsInNpYmxpbmciLCJwYXJlbnQiLCJpbmVydGVkU2libGluZ3MiLCJNdXRhdGlvbk9ic2VydmVyIiwiYmluZCIsInBhcmVudFRvT2JzZXJ2ZSIsIm1heWJlU2hhZHlSb290IiwiX19zaGFkeSIsImhvc3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0IiwibXV0YXRpb25zIiwicGFyZW50cyIsIm11dGF0aW9uIiwidGFyZ2V0IiwiaWR4IiwiaW5lcnRlZENoaWxkIiwicmVtb3ZlZE5vZGVzIiwiaW5mbyIsImFkZGVkTm9kZXMiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiYXNzaWduZWRTbG90Iiwic2hhZG93Um9vdCIsInJlc3VsdCIsIm5vZGVzIiwic2xvdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCIkYmxvY2tpbmdFbGVtZW50cyIsImdsb2JhbCIsImZhY3RvcnkiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIndpbmRvdyIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiX29uTXV0YXRpb24iLCJzdWJ0cmVlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsIm5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsInJvb3QiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiYmx1ciIsImZvY3VzIiwiX2Fkb3B0SW5lcnRSb290IiwiX21hbmFnZU5vZGUiLCJyZWdpc3RlciIsImRlcmVnaXN0ZXIiLCJfdW5tYW5hZ2VTdWJ0cmVlIiwiX3RoaXMzIiwiaW5lcnRTdWJyb290IiwiZ2V0SW5lcnRSb290Iiwic2V0SW5lcnQiLCJtYW5hZ2VkTm9kZXMiLCJzYXZlZEluZXJ0Tm9kZSIsInJlY29yZHMiLCJzZWxmIiwicmVjb3JkIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsInRhYkluZGV4IiwiaGFzU2F2ZWRUYWJJbmRleCIsImFkZEluZXJ0Um9vdCIsInJlbW92ZUluZXJ0Um9vdCIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsImNhbGxiYWNrIiwic2hhZG93Um9vdEFuY2VzdG9yIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiX2kiLCJjaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIkhUTUxFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJpbml0aWFsU3RhdGUiLCJzZXRTdGF0ZVAiLCJ1c2VTdGF0ZVAiLCJnZXRTdGF0ZSIsImlzTmFOIiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwiZnJlZU1vZHVsZSIsIm1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJpc0J1ZmZlciIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsImlzVHlwZWRBcnJheSIsImNyZWF0ZUNvbnRleHQiLCJTd2FwcGFibGVDb250ZXh0IiwiZ2V0QW5pbWF0ZU9uTW91bnQiLCJkZWZhdWx0Q2xhc3NCYXNlIiwiZ2l2ZW4iLCJnZXRUaW1lb3V0RHVyYXRpb24iLCJtYXgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0ciIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VTdGF0ZSIsIm5leHRTdGF0ZSIsInVzZVRyYW5zaXRpb24iLCJzaG93IiwiYW5pbWF0ZU9uTW91bnQiLCJtZWFzdXJlIiwiY2xhc3NCYXNlIiwiZXhpdFZpc2liaWxpdHkiLCJkdXJhdGlvbiIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInVzZUNvbnRleHQiLCJnZXRNZWFzdXJlIiwiZ2V0RXhpdFZpc2liaWxpdHkiLCJjc3NQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lcyIsImhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCIsImRpcmVjdGlvbiIsInBoYXNlIiwidGltZW91dEhhbmRsZSIsInRpbWVvdXRDbGVhckZ1bmN0aW9uIiwib3RoZXJQcm9wcyIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJ1cGRhdGVTaXplUHJvcGVydGllcyIsIm5leHRTaXplIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwibWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwib25TdGF0ZUNoYW5nZSIsInByZXZTdGF0ZSIsIm5leHREaXJlY3Rpb24iLCJuZXh0UGhhc2UiLCJmb3JjZVJlZmxvdyIsImN1cnJlbnRTdGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50UGhhc2UiLCJJc1Zpc2libGVDb250ZXh0IiwiVHJhbnNpdGlvbmFibGUiLCJtZW1vIiwiZGVsYXlNb3VudFVudGlsU2hvd24iLCJ0cmFuc2l0aW9uUHJvcHMiLCJjaGlsZHJlbklzVm5vZGUiLCJmaW5hbFByb3BzIiwicmVuZGVyQ2hpbGRyZW4iLCJoYXNSZW5kZXJlZENoaWxkcmVuIiwiY2xvbmVFbGVtZW50Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImNyZWF0ZUNsaXBQcm9wcyIsImNsaXBNaW4iLCJjbGlwTWluQmxvY2siLCJjbGlwTWluSW5saW5lIiwiY2xpcE9yaWdpbiIsImNsaXBPcmlnaW5CbG9jayIsImNsaXBPcmlnaW5JbmxpbmUiLCJDbGlwIiwicmVzdCIsImNyZWF0ZUZhZGVQcm9wcyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsIkNsaXBGYWRlIiwiY3JlYXRlQ29sbGFwc2VQcm9wcyIsIm1pbkJsb2NrU2l6ZSIsIkNvbGxhcHNlIiwiQ29sbGFwc2VGYWRlIiwiY3JlYXRlU2xpZGVQcm9wcyIsInNsaWRlVGFyZ2V0SW5saW5lIiwic2xpZGVUYXJnZXRCbG9jayIsIlNsaWRlIiwiU2xpZGVGYWRlIiwiY3JlYXRlWm9vbVByb3BzIiwiem9vbU9yaWdpbiIsInpvb21PcmlnaW5JbmxpbmUiLCJ6b29tT3JpZ2luQmxvY2siLCJ6b29tTWluIiwiem9vbU1pbklubGluZSIsInpvb21NaW5CbG9jayIsIlpvb20iLCJab29tRmFkZSIsIlNsaWRlWm9vbSIsIlNsaWRlWm9vbUZhZGUiLCJjcmVhdGVGbGlwUHJvcHMiLCJmbGlwQW5nbGVJbmxpbmUiLCJmbGlwQW5nbGVCbG9jayIsInBlcnNwZWN0aXZlIiwiRmxpcCIsImxhc3RWYWxpZFRhcmdldElubGluZSIsImxhc3RWYWxpZFRhcmdldEJsb2NrIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJpbmxpbmUiLCJTd2FwcGFibGUiLCJpbmxpbmVFbGVtZW50cyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImNvbnRleHRWYWx1ZSIsImhhbGZUZXh0IiwiaW5wdXQiLCJ0aW1lcyIsInN1YnN0ciIsIkRlbW8iLCJzZXRBbmltYXRlT25Nb3VudCIsIndyaXRpbmdNb2RlIiwic2V0V3JpdGluZ01vZGUiLCJzaG93MSIsInNldFNob3cxIiwic2hvdzMiLCJzZXRTaG93MyIsInJlZmxvdyIsInNldFJlZmxvdyIsInNldER1cmF0aW9uIiwidGV4dCIsInNldFRleHQiLCJmbGlja2VyIiwic2V0RmxpY2tlciIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uQ2xpY2siLCJvbklucHV0IiwiY29scyIsInJvd3MiLCJGYWRlRGVtbyIsImNhcmRTaG93IiwiY29udGVudEluZGV4IiwiU2xpZGVEZW1vIiwiWm9vbURlbW8iLCJDbGlwRGVtbyIsIkNvbGxhcHNlRGVtbyIsIlpvb21TbGlkZURlbW8iLCJGbGlwRGVtbyIsIm1pbiIsInNldE1pbiIsInNldE1heCIsIm9uTWluSW5wdXQiLCJvbk1heElucHV0IiwiQ1MiLCJtYWtlQ2hpbGQiLCJzdGVwIiwib3JpZ2luWCIsInNldE9yaWdpblgiLCJvcmlnaW5ZIiwic2V0T3JpZ2luWSIsIm1pblgiLCJzZXRNaW5YIiwibWluWSIsInNldE1pblkiLCJ3aXRoRmFkZSIsInNldFdpdGhGYWRlIiwib25PcmlnaW5YSW5wdXQiLCJvbk9yaWdpbllJbnB1dCIsIm9uTWluWElucHV0Iiwib25NaW5ZSW5wdXQiLCJvbldpdGhGYWRlSW5wdXQiLCJzbGlkZVgiLCJzZXRTbGlkZVgiLCJzbGlkZVkiLCJzZXRTbGlkZVkiLCJvblNsaWRlWElucHV0Iiwib25TbGlkZVlJbnB1dCIsInNpZ24iLCJzZXRNaW5CbG9ja1NpemUiLCJvbk1pblNpemUiLCJmbGlwWCIsInNldEZsaXBYIiwiZmxpcFkiLCJzZXRGbGlwWSIsIm9uRmxpcFhJbnB1dCIsIm9uRmxpcFlJbnB1dCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBRyxJQUFDQSxDQUFDO0lBQUNDLEdBQUM7SUFBQ0MsR0FBQztJQUFHQyxHQUFDO0lBQUNDLEdBQUM7SUFBQ0MsR0FBQztJQUFDQyxHQUFDLEdBQUMsRUFBRTtJQUFDQyxHQUFDLEdBQUMsRUFBRTtJQUFDQyxHQUFDLEdBQUMsbUVBQUE7RUFBb0UsU0FBU0MsR0FBQyxDQUFDVCxDQUFDLEVBQUNDLENBQUMsRUFBQztJQUFDLEtBQUksSUFBSUMsQ0FBQyxJQUFJRCxDQUFDO01BQUNELENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEdBQUNELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDO0lBQUM7SUFBQSxPQUFPRixDQUFDO0VBQUE7RUFBQyxTQUFTVSxHQUFDLENBQUNWLENBQUMs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QUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxHQUFDLElBQUk7SUFBQyxLQUFJLElBQUlFLENBQUMsRUFBQ0QsQ0FBQyxHQUFDRCxDQUFDLENBQUN5QixHQUFHLENBQUNULE1BQU0sRUFBQ2YsQ0FBQyxFQUFFO01BQUMsSUFBRyxJQUFJLEtBQUdDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDeUIsR0FBRyxDQUFDeEIsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLElBQUVDLENBQUMsQ0FBQzBCLEdBQUcsRUFBQyxPQUFPMUIsQ0FBQyxDQUFDMEIsR0FBRztJQUFDO0lBQUEsT0FBTSxVQUFVLElBQUUsT0FBTzVCLENBQUMsQ0FBQ3FCLElBQUksR0FBQ2lCLEdBQUMsQ0FBQ3RDLENBQUMsQ0FBQyxHQUFDLElBQUk7RUFBQTtFQUFDLFNBQVN3QyxHQUFDLENBQUN4QyxDQUFDLEVBQUM7SUFBQyxJQUFJQyxDQUFDLEVBQUNDLENBQUM7SUFBQyxJQUFHLElBQUksS0FBR0YsQ0FBQyxHQUFDQSxDQUFDLENBQUMwQixFQUFFLENBQUMsSUFBRSxJQUFJLElBQUUxQixDQUFDLENBQUM4QixHQUFHLEVBQUM7TUFBQyxLQUFJOUIsQ0FBQyxDQUFDNEIsR0FBRyxHQUFDNUIsQ0FBQyxDQUFDOEIsR0FBRyxDQUFDVyxJQUFJLEdBQUMsSUFBSSxFQUFDeEMsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDRCxDQUFDLENBQUN5QixHQUFHLENBQUNULE1BQU0sRUFBQ2YsQ0FBQyxFQUFFO1FBQUMsSUFBRyxJQUFJLEtBQUdDLENBQUMsR0FBQ0YsQ0FBQyxDQUFDeUIsR0FBRyxDQUFDeEIsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLElBQUVDLENBQUMsQ0FBQzBCLEdBQUcsRUFBQztVQUFDNUIsQ0FBQyxDQUFDNEIsR0FBRyxHQUFDNUIsQ0FBQyxDQUFDOEIsR0FBRyxDQUFDVyxJQUFJLEdBQUN2QyxDQUFDLENBQUMwQixHQUFHO1VBQUM7UUFBSztNQUFDO01BQUEsT0FBT1ksR0FBQyxDQUFDeEMsQ0FBQyxDQUFDO0lBQUE7RUFB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
