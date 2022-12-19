var _excluded = ["children"],
  _excluded2 = ["classBase", "duration", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "show", "animateOnMount", "exitVisibility"],
  _excluded3 = ["classBase", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "exitVisibility"],
  _excluded4 = ["classBase", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "clipMin", "clipMinBlock", "clipMinInline", "clipOrigin", "clipOriginBlock", "clipOriginInline", "exitVisibility"],
  _excluded5 = ["classBase", "show", "duration", "minBlockSize", "animateOnMount", "exitVisibility"],
  _excluded6 = ["classBase", "show", "duration", "animateOnMount", "fadeMin", "fadeMax", "exitVisibility", "minBlockSize"],
  _excluded7 = ["classBase", "duration", "slideTargetInline", "slideTargetBlock", "show", "animateOnMount", "exitVisibility"],
  _excluded8 = ["classBase", "duration", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "fadeMin", "fadeMax", "exitVisibility"],
  _excluded9 = ["classBase", "duration", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "show", "animateOnMount", "exitVisibility"],
  _excluded10 = ["classBase", "duration", "fadeMin", "fadeMax", "show", "animateOnMount", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded11 = ["classBase", "duration", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded12 = ["classBase", "duration", "slideTargetBlock", "slideTargetInline", "show", "animateOnMount", "fadeMax", "fadeMin", "zoomMin", "zoomMinBlock", "zoomMinInline", "zoomOrigin", "zoomOriginBlock", "zoomOriginInline", "exitVisibility"],
  _excluded13 = ["classBase", "duration", "flipAngleInline", "flipAngleBlock", "perspective", "show", "animateOnMount", "exitVisibility"],
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
  function q(l, u, i) {
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
    classBase || (classBase = defaultClassBase(classBase));
    e || (e = "hidden");
    (_a2 = a) !== null && _a2 !== void 0 ? _a2 : a = false;
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
            clearTimeout(timeoutHandle.current);
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
    // When a transition starts, we read the transition-duration and use it as an emergency timeout in case onTransitionEnd doesn't work.
    // So we need a way to cancel that timeout if needed.
    var timeoutHandle = _(-1);
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
            requestAnimationFrame(() => {
              setState("".concat(nextDirection, "-transition"));
            });
            break;
          }
        case "transition":
          {
            if (timeoutHandle.current >= 0) clearTimeout(timeoutHandle.current);
            timeoutHandle.current = setTimeout(() => {
              handleTransitionFinished();
            }, getTimeoutDuration(element) * 1.5);
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
      props: useMergedProps(propsStable, _objectSpread({
        className: [...classNames.current, "".concat(classBase, "-ev-").concat(e), "".concat(classBase, "-inline-direction-", "ltr"), "".concat(classBase, "-block-direction-", "ttb")].join(" "),
        style: cssProperties.current
      }, otherProps.current))
    };
  }
  function Transitionable(_ref2) {
    var {
        transition: {
          animateOnMount,
          duration,
          classBase,
          exitVisibility,
          measure,
          show
        },
        props: {
          children
        }
      } = _ref2,
      props = _objectWithoutProperties(_ref2.props, _excluded);
    var {
      props: transitionProps
    } = useTransition({
      animateOnMount,
      classBase,
      duration,
      exitVisibility,
      measure,
      show
    });
    var childrenIsVnode = children && children.type && children.props;
    var finalProps = useMergedProps(props, transitionProps, childrenIsVnode ? _objectSpread({
      ref: children.ref
    }, children.props) : {});
    if (childrenIsVnode) {
      return q(children, finalProps);
    } else {
      return h$1("span", _objectSpread({}, finalProps), children);
    }
  }
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
  var Clip = forwardElementRef(function Clip(_ref8, ref) {
    var {
        classBase,
        duration,
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createClipProps({
        classBase,
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline
      }))
    });
  });

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
  var Fade = forwardElementRef(function Fade(_ref10, ref) {
    var {
        classBase,
        duration,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        exitVisibility
      } = _ref10,
      rest = _objectWithoutProperties(_ref10, _excluded3);
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createFadeProps({
        classBase,
        fadeMax,
        fadeMin
      }))
    });
  });
  var ClipFade = forwardElementRef(function ClipFade(_ref11, ref) {
    var {
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
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
      }))
    });
  });

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
  var Collapse = forwardElementRef(function Collapse(_ref13, ref) {
    var {
        classBase,
        show,
        duration,
        minBlockSize,
        animateOnMount,
        exitVisibility
      } = _ref13,
      rest = _objectWithoutProperties(_ref13, _excluded5);
    return h$1(Transitionable, {
      transition: {
        measure: true,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createCollapseProps({
        classBase,
        minBlockSize
      }))
    });
  });
  var CollapseFade = forwardElementRef(function CollapseFade(_ref14, ref) {
    var {
        classBase,
        show,
        duration,
        animateOnMount,
        fadeMin,
        fadeMax,
        exitVisibility,
        minBlockSize
      } = _ref14,
      rest = _objectWithoutProperties(_ref14, _excluded6);
    return h$1(Transitionable, {
      transition: {
        measure: true,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createFadeProps({
        classBase,
        fadeMin,
        fadeMax
      }), createCollapseProps({
        classBase,
        minBlockSize
      }))
    });
  });

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
  var Slide = forwardElementRef(function Slide(_ref16, ref) {
    var {
        classBase,
        duration,
        slideTargetInline,
        slideTargetBlock,
        show,
        animateOnMount,
        exitVisibility
      } = _ref16,
      rest = _objectWithoutProperties(_ref16, _excluded7);
    //({ targetBlock: slideTargetBlock, targetInline: slideTargetInline } = useSlideThing({ targetBlock: slideTargetBlock, targetInline: slideTargetInline }));
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createSlideProps({
        classBase,
        slideTargetBlock,
        slideTargetInline
      }))
    });
  });
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

  var SlideFade = forwardElementRef(function SlideFade(_ref17, ref) {
    var {
        classBase,
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
        ref
      }, rest), createFadeProps({
        classBase,
        fadeMin,
        fadeMax
      }), createSlideProps({
        classBase,
        slideTargetBlock,
        slideTargetInline
      }))
    });
  });

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
  var Zoom = forwardElementRef(function Zoom(_ref23, ref) {
    var {
        classBase,
        duration,
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(createZoomProps({
        classBase,
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock
      }), _objectSpread(_objectSpread({}, rest), {}, {
        ref
      }))
    });
  });
  var ZoomFade = forwardElementRef(function ZoomFade(_ref24, ref) {
    var {
        classBase,
        duration,
        fadeMin,
        fadeMax,
        show,
        animateOnMount,
        zoomMin,
        zoomMinBlock,
        zoomMinInline,
        zoomOrigin,
        zoomOriginBlock,
        zoomOriginInline,
        exitVisibility
      } = _ref24,
      rest = _objectWithoutProperties(_ref24, _excluded10);
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
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
      }))
    });
  });
  var SlideZoom = forwardElementRef(function SlideZoom(_ref25, ref) {
    var {
        classBase,
        duration,
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
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
      }))
    });
  });
  var SlideZoomFade = forwardElementRef(function SlideZoomFade(_ref26, ref) {
    var {
        classBase,
        duration,
        slideTargetBlock,
        slideTargetInline,
        show,
        animateOnMount,
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
    return h$1(Transitionable, {
      transition: {
        measure: false,
        show,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(_objectSpread({
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
      }))
    });
  });

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
  var Flip = forwardElementRef(function Flip(_ref28, ref) {
    var _flipAngleInline, _flipAngleBlock;
    var {
        classBase,
        duration,
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
    return h$1(Transitionable, {
      transition: {
        show,
        measure: false,
        duration,
        animateOnMount,
        classBase,
        exitVisibility
      },
      props: useMergedProps(createFlipProps({
        classBase,
        flipAngleInline,
        flipAngleBlock,
        perspective
      }), _objectSpread(_objectSpread({}, rest), {}, {
        ref
      }))
    });
  });

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
  var Swappable = forwardElementRef(function Swappable(_ref30, ref) {
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
    return q(children, mergedWithChildren);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy90aW1pbmcvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL3RyYW5zaXRpb25hYmxlLmpzIiwiLi4vY2xpcC5qcyIsIi4uL2ZhZGUuanMiLCIuLi9jbGlwLWZhZGUuanMiLCIuLi9jb2xsYXBzZS5qcyIsIi4uL2NvbGxhcHNlLWZhZGUuanMiLCIuLi9zbGlkZS5qcyIsIi4uL3NsaWRlLWZhZGUuanMiLCIuLi96b29tLmpzIiwiLi4vem9vbS1mYWRlLmpzIiwiLi4vc2xpZGUtem9vbS5qcyIsIi4uL3NsaWRlLXpvb20tZmFkZS5qcyIsIi4uL2ZsaXAuanMiLCIuLi9zd2FwcGFibGUuanMiLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LG8scixmPXt9LGU9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBoKGwsdSxpKXt2YXIgdCxvLHIsZj17fTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihyIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbcl0mJihmW3JdPWwuZGVmYXVsdFByb3BzW3JdKTtyZXR1cm4gdihsLGYsdCxvLG51bGwpfWZ1bmN0aW9uIHYobixpLHQsbyxyKXt2YXIgZj17dHlwZTpuLHByb3BzOmksa2V5OnQscmVmOm8sX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09cj8rK3U6cn07cmV0dXJuIG51bGw9PXImJm51bGwhPWwudm5vZGUmJmwudm5vZGUoZiksZn1mdW5jdGlvbiB5KCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBkKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIF8obixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP18obi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/XyhuKTpudWxsfWZ1bmN0aW9uIGsobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBrKG4pfX1mdW5jdGlvbiBiKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJnQucHVzaChuKSYmIWcuX19yKyt8fG8hPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChvPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxzZXRUaW1lb3V0KShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBuO2cuX19yPXQubGVuZ3RoOyluPXQuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBuLl9fdi5fX2ItbC5fX3YuX19ifSksdD1bXSxuLnNvbWUoZnVuY3Rpb24obil7dmFyIGwsdSxpLHQsbyxyO24uX19kJiYobz0odD0obD1uKS5fX3YpLl9fZSwocj1sLl9fUCkmJih1PVtdLChpPXMoe30sdCkpLl9fdj10Ll9fdisxLGoocix0LGksbC5fX24sdm9pZCAwIT09ci5vd25lclNWR0VsZW1lbnQsbnVsbCE9dC5fX2g/W29dOm51bGwsdSxudWxsPT1vP18odCk6byx0Ll9faCkseih1LHQpLHQuX19lIT1vJiZrKHQpKSl9KX1mdW5jdGlvbiB3KG4sbCx1LGksdCxvLHIsYyxzLGEpe3ZhciBoLHksZCxrLGIsZyx3LHg9aSYmaS5fX2t8fGUsQz14Lmxlbmd0aDtmb3IodS5fX2s9W10saD0wO2g8bC5sZW5ndGg7aCsrKWlmKG51bGwhPShrPXUuX19rW2hdPW51bGw9PShrPWxbaF0pfHxcImJvb2xlYW5cIj09dHlwZW9mIGs/bnVsbDpcInN0cmluZ1wiPT10eXBlb2Yga3x8XCJudW1iZXJcIj09dHlwZW9mIGt8fFwiYmlnaW50XCI9PXR5cGVvZiBrP3YobnVsbCxrLG51bGwsbnVsbCxrKTpBcnJheS5pc0FycmF5KGspP3YocCx7Y2hpbGRyZW46a30sbnVsbCxudWxsLG51bGwpOmsuX19iPjA/dihrLnR5cGUsay5wcm9wcyxrLmtleSxrLnJlZj9rLnJlZjpudWxsLGsuX192KTprKSl7aWYoay5fXz11LGsuX19iPXUuX19iKzEsbnVsbD09PShkPXhbaF0pfHxkJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl4W2hdPXZvaWQgMDtlbHNlIGZvcih5PTA7eTxDO3krKyl7aWYoKGQ9eFt5XSkmJmsua2V5PT1kLmtleSYmay50eXBlPT09ZC50eXBlKXt4W3ldPXZvaWQgMDticmVha31kPW51bGx9aihuLGssZD1kfHxmLHQsbyxyLGMscyxhKSxiPWsuX19lLCh5PWsucmVmKSYmZC5yZWYhPXkmJih3fHwodz1bXSksZC5yZWYmJncucHVzaChkLnJlZixudWxsLGspLHcucHVzaCh5LGsuX19jfHxiLGspKSxudWxsIT1iPyhudWxsPT1nJiYoZz1iKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBrLnR5cGUmJmsuX19rPT09ZC5fX2s/ay5fX2Q9cz1tKGsscyxuKTpzPUEobixrLGQseCxiLHMpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmKHUuX19kPXMpKTpzJiZkLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1fKGQpKX1mb3IodS5fX2U9ZyxoPUM7aC0tOyludWxsIT14W2hdJiZOKHhbaF0seFtoXSk7aWYodylmb3IoaD0wO2g8dy5sZW5ndGg7aCsrKU0od1toXSx3WysraF0sd1srK2hdKX1mdW5jdGlvbiBtKG4sbCx1KXtmb3IodmFyIGksdD1uLl9fayxvPTA7dCYmbzx0Lmxlbmd0aDtvKyspKGk9dFtvXSkmJihpLl9fPW4sbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnR5cGU/bShpLGwsdSk6QSh1LGksaSx0LGkuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiB4KG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7eChuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIEEobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0xKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8SChuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEgobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxjLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rKEh8OmgpLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGw9PXV8fCExPT09dSYmLTE9PWwuaW5kZXhPZihcIi1cIik/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBhLGgsdix5LF8sayxiLGcsbSx4LEEsQywkLEgsSSxUPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwscj1bZV0pLChhPWwuX19iKSYmYSh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBUKXtpZihnPXUucHJvcHMsbT0oYT1ULmNvbnRleHRUeXBlKSYmdFthLl9fY10seD1hP20/bS5wcm9wcy52YWx1ZTphLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBUJiZULnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgVChnLHgpOih1Ll9fYz1oPW5ldyBkKGcseCksaC5jb25zdHJ1Y3Rvcj1ULGgucmVuZGVyPU8pLG0mJm0uc3ViKGgpLGgucHJvcHM9ZyxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdLGguX3NiPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1zKHt9LGguX19zKSkscyhoLl9fcyxULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhnLGguX19zKSkpLHk9aC5wcm9wcyxfPWguc3RhdGUsdiludWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZnIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoZyx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKGcsaC5fX3MseCl8fHUuX192PT09aS5fX3Ype2ZvcihoLnByb3BzPWcsaC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLEE9MDtBPGguX3NiLmxlbmd0aDtBKyspaC5fX2gucHVzaChoLl9zYltBXSk7aC5fc2I9W10saC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShnLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxfLGspfSl9aWYoaC5jb250ZXh0PXgsaC5wcm9wcz1nLGguX192PXUsaC5fX1A9bixDPWwuX19yLCQ9MCxcInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyKXtmb3IoaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSxDJiZDKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksSD0wO0g8aC5fc2IubGVuZ3RoO0grKyloLl9faC5wdXNoKGguX3NiW0hdKTtoLl9zYj1bXX1lbHNlIGRve2guX19kPSExLEMmJkModSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zfXdoaWxlKGguX19kJiYrKyQ8MjUpO2guc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PXMocyh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LF8pKSxJPW51bGwhPWEmJmEudHlwZT09PXAmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSx3KG4sQXJyYXkuaXNBcnJheShJKT9JOltJXSx1LGksdCxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09ciYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQsbyxyLGYsYyk7KGE9bC5kaWZmZWQpJiZhKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPXIpJiYodS5fX2U9ZSx1Ll9faD0hIWMscltyLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LG8scixlLGMpe3ZhciBzLGgsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLGs9MDtpZihcInN2Z1wiPT09ZCYmKG89ITApLG51bGwhPXIpZm9yKDtrPHIubGVuZ3RoO2srKylpZigocz1yW2tdKSYmXCJzZXRBdHRyaWJ1dGVcImluIHM9PSEhZCYmKGQ/cy5sb2NhbE5hbWU9PT1kOjM9PT1zLm5vZGVUeXBlKSl7bD1zLHJba109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1vP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLHI9bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYocj1yJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxoPSh5PWkucHJvcHN8fGYpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9cilmb3IoeT17fSxrPTA7azxsLmF0dHJpYnV0ZXMubGVuZ3RoO2srKyl5W2wuYXR0cmlidXRlc1trXS5uYW1lXT1sLmF0dHJpYnV0ZXNba10udmFsdWU7KHZ8fGgpJiYodiYmKGgmJnYuX19odG1sPT1oLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHksbyxjKSx2KXUuX19rPVtdO2Vsc2UgaWYoaz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KGspP2s6W2tdLHUsaSx0LG8mJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxyLGUscj9yWzBdOmkuX19rJiZfKGksMCksYyksbnVsbCE9cilmb3Ioaz1yLmxlbmd0aDtrLS07KW51bGwhPXJba10mJmEocltrXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShrPXAudmFsdWUpJiYoayE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFrfHxcIm9wdGlvblwiPT09ZCYmayE9PXkudmFsdWUpJiZIKGwsXCJ2YWx1ZVwiLGsseS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLmNoZWNrZWQpJiZrIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsayx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGwsbi5fX2M9dm9pZCAwfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxhKG4uX19lKSxuLl9fPW4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFAodSxpLHQpe3ZhciBvLHIsZTtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxlPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPWgocCxudWxsLFt1XSkscnx8ZixmLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZSwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZSx1KX1mdW5jdGlvbiBTKG4sbCl7UChuLGwsUyl9ZnVuY3Rpb24gcShsLHUsaSl7dmFyIHQsbyxyLGY9cyh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx2KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEIobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrcisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUoYil9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1lLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwsdSxpKXtmb3IodmFyIHQsbyxyO2w9bC5fXzspaWYoKHQ9bC5fX2MpJiYhdC5fXyl0cnl7aWYoKG89dC5jb25zdHJ1Y3RvcikmJm51bGwhPW8uZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodC5zZXRTdGF0ZShvLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSkscj10Ll9fZCksbnVsbCE9dC5jb21wb25lbnREaWRDYXRjaCYmKHQuY29tcG9uZW50RGlkQ2F0Y2gobixpfHx7fSkscj10Ll9fZCkscilyZXR1cm4gdC5fX0U9dH1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxkLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4ocyh7fSx1KSx0aGlzLnByb3BzKSksbiYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fc2IucHVzaChsKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGIodGhpcykpfSxkLnByb3RvdHlwZS5yZW5kZXI9cCx0PVtdLGcuX19yPTAscj0wO2V4cG9ydHtkIGFzIENvbXBvbmVudCxwIGFzIEZyYWdtZW50LHEgYXMgY2xvbmVFbGVtZW50LEIgYXMgY3JlYXRlQ29udGV4dCxoIGFzIGNyZWF0ZUVsZW1lbnQseSBhcyBjcmVhdGVSZWYsaCxTIGFzIGh5ZHJhdGUsaSBhcyBpc1ZhbGlkRWxlbWVudCxsIGFzIG9wdGlvbnMsUCBhcyByZW5kZXIseCBhcyB0b0NoaWxkQXJyYXl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQscix1LGksbz0wLGY9W10sYz1bXSxlPW4uX19iLGE9bi5fX3Isdj1uLmRpZmZlZCxsPW4uX19jLG09bi51bm1vdW50O2Z1bmN0aW9uIGQodCx1KXtuLl9faCYmbi5fX2gocix0LG98fHUpLG89MDt2YXIgaT1yLl9fSHx8KHIuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7X19WOmN9KSxpLl9fW3RdfWZ1bmN0aW9uIHAobil7cmV0dXJuIG89MSx5KEIsbil9ZnVuY3Rpb24geShuLHUsaSl7dmFyIG89ZCh0KyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHUpOkIodm9pZCAwLHUpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz1yLCFyLnUpKXtyLnU9ITA7dmFyIGY9ci5zaG91bGRDb21wb25lbnRVcGRhdGU7ci5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFmfHxmLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEoIWkmJm8uX19jLnByb3BzPT09bikmJighZnx8Zi5jYWxsKHRoaXMsbix0LHIpKX19cmV0dXJuIG8uX19OfHxvLl9ffWZ1bmN0aW9uIGgodSxpKXt2YXIgbz1kKHQrKywzKTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX0guX19oLnB1c2gobykpfWZ1bmN0aW9uIHModSxpKXt2YXIgbz1kKHQrKyw0KTshbi5fX3MmJnooby5fX0gsaSkmJihvLl9fPXUsby5pPWksci5fX2gucHVzaChvKSl9ZnVuY3Rpb24gXyhuKXtyZXR1cm4gbz01LEYoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIEEobix0LHIpe289NixzKGZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj8obih0KCkpLGZ1bmN0aW9uKCl7cmV0dXJuIG4obnVsbCl9KTpuPyhuLmN1cnJlbnQ9dCgpLGZ1bmN0aW9uKCl7cmV0dXJuIG4uY3VycmVudD1udWxsfSk6dm9pZCAwfSxudWxsPT1yP3I6ci5jb25jYXQobikpfWZ1bmN0aW9uIEYobixyKXt2YXIgdT1kKHQrKyw3KTtyZXR1cm4geih1Ll9fSCxyKT8odS5fX1Y9bigpLHUuaT1yLHUuX19oPW4sdS5fX1YpOnUuX199ZnVuY3Rpb24gVChuLHQpe3JldHVybiBvPTgsRihmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBxKG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1kKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24geCh0LHIpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHI/cih0KTp0KX1mdW5jdGlvbiBQKG4pe3ZhciB1PWQodCsrLDEwKSxpPXAoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIFYoKXt2YXIgbj1kKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gYigpe2Zvcih2YXIgdDt0PWYuc2hpZnQoKTspaWYodC5fX1AmJnQuX19IKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChrKSx0Ll9fSC5fX2guZm9yRWFjaCh3KSx0Ll9fSC5fX2g9W119Y2F0Y2gocil7dC5fX0guX19oPVtdLG4uX19lKHIsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sbi5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uX19WPWMsbi5fX049bi5pPXZvaWQgMH0pKTooaS5fX2guZm9yRWFjaChrKSxpLl9faC5mb3JFYWNoKHcpLGkuX19oPVtdKSksdT1yfSxuLmRpZmZlZD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiYoby5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2gobykmJmk9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8aikoYikpLG8uX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLl9fViE9PWMmJihuLl9fPW4uX19WKSxuLmk9dm9pZCAwLG4uX19WPWN9KSksdT1yPW51bGx9LG4uX19jPWZ1bmN0aW9uKHQscil7ci5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGspLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8dyhuKX0pfWNhdGNoKHUpe3Iuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHI9W10sbi5fX2UodSx0Ll9fdil9fSksbCYmbCh0LHIpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7bSYmbSh0KTt2YXIgcix1PXQuX19jO3UmJnUuX19IJiYodS5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ayhuKX1jYXRjaChuKXtyPW59fSksdS5fX0g9dm9pZCAwLHImJm4uX19lKHIsdS5fX3YpKX07dmFyIGc9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGoobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxnJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24gayhuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiB3KG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEIobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7VCBhcyB1c2VDYWxsYmFjayxxIGFzIHVzZUNvbnRleHQseCBhcyB1c2VEZWJ1Z1ZhbHVlLGggYXMgdXNlRWZmZWN0LFAgYXMgdXNlRXJyb3JCb3VuZGFyeSxWIGFzIHVzZUlkLEEgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxzIGFzIHVzZUxheW91dEVmZmVjdCxGIGFzIHVzZU1lbW8seSBhcyB1c2VSZWR1Y2VyLF8gYXMgdXNlUmVmLHAgYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e0NvbXBvbmVudCBhcyBuLGNyZWF0ZUVsZW1lbnQgYXMgdCxvcHRpb25zIGFzIGUsdG9DaGlsZEFycmF5IGFzIHIsRnJhZ21lbnQgYXMgdSxyZW5kZXIgYXMgbyxoeWRyYXRlIGFzIGksY3JlYXRlQ29udGV4dCBhcyBsLGNyZWF0ZVJlZiBhcyBjLGNsb25lRWxlbWVudCBhcyBmfWZyb21cInByZWFjdFwiO2V4cG9ydHtDb21wb25lbnQsRnJhZ21lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVFbGVtZW50LGNyZWF0ZVJlZn1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlU3RhdGUgYXMgYSx1c2VJZCBhcyBzLHVzZVJlZHVjZXIgYXMgaCx1c2VFZmZlY3QgYXMgdix1c2VMYXlvdXRFZmZlY3QgYXMgZCx1c2VSZWYgYXMgcCx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG0sdXNlTWVtbyBhcyB5LHVzZUNhbGxiYWNrIGFzIF8sdXNlQ29udGV4dCBhcyBiLHVzZURlYnVnVmFsdWUgYXMgU31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7ZnVuY3Rpb24gZyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobix0KXtyZXR1cm4gbj09PXQmJigwIT09bnx8MS9uPT0xL3QpfHxuIT1uJiZ0IT10fWZ1bmN0aW9uIHcobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIFIobixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0ody5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLHcucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHg9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHgmJngobil9O3ZhciBOPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiBrKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9Zyh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZnx8bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Tix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgQT1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LE89e21hcDpBLGZvckVhY2g6QSxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sVD1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7VChuLHQsZSxyKX07dmFyIEk9ZS51bm1vdW50O2Z1bmN0aW9uIEwobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWcoe30sbikpLl9fYyYmKG4uX19jLl9fUD09PWUmJihuLl9fYy5fX1A9dCksbi5fX2M9bnVsbCksbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gTChuLHQsZSl9KSksbn1mdW5jdGlvbiBVKG4sdCxlKXtyZXR1cm4gbiYmKG4uX192PW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gVShuLHQsZSl9KSxuLl9fYyYmbi5fX2MuX19QPT09dCYmKG4uX19lJiZlLmluc2VydEJlZm9yZShuLl9fZSxuLl9fZCksbi5fX2MuX19lPSEwLG4uX19jLl9fUD1lKSksbn1mdW5jdGlvbiBEKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIEYobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19hJiZ0Ll9fYShuKX1mdW5jdGlvbiBNKG4pe3ZhciBlLHIsdTtmdW5jdGlvbiBvKG8pe2lmKGV8fChlPW4oKSkudGhlbihmdW5jdGlvbihuKXtyPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7dT1ufSksdSl0aHJvdyB1O2lmKCFyKXRocm93IGU7cmV0dXJuIHQocixvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLl9fZj0hMCxvfWZ1bmN0aW9uIFYoKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1lLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxJJiZJKG4pfSwoRC5wcm90b3R5cGU9bmV3IG4pLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PUYoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Epe3ZhciBuPXIuc3RhdGUuX19hO3IuX192Ll9fa1swXT1VKG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fYTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2E6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxELnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obixlKXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09TCh0aGlzLl9fYixyLG8uX19PPW8uX19QKX10aGlzLl9fYj1udWxsfXZhciBpPWUuX19hJiZ0KHUsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gaSYmKGkuX19oPW51bGwpLFt0KHUsbnVsbCxlLl9fYT9udWxsOm4uY2hpbGRyZW4pLGldfTt2YXIgVz1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBQKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gJChuKXt2YXIgZT10aGlzLHI9bi5pO2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtvKG51bGwsZS5sKSxlLmw9bnVsbCxlLmk9bnVsbH0sZS5pJiZlLmkhPT1yJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KGUubHx8KGUuaT1yLGUubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOnIsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLHQpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksZS5pLnJlbW92ZUNoaWxkKG4pfX0pLG8odChQLHtjb250ZXh0OmUuY29udGV4dH0sbi5fX3YpLGUubCkpOmUubCYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIGoobixlKXt2YXIgcj10KCQse19fdjpuLGk6ZX0pO3JldHVybiByLmNvbnRhaW5lckluZm89ZSxyfShWLnByb3RvdHlwZT1uZXcgbikuX19hPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1GKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxXKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sVi5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXIobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LFYucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1WLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtXKG4sZSx0KX0pfTt2YXIgej1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsQj0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlfGxldHRlcnxsaWdodGluZ3xtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8cG9pbnRlcnxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx0cmFuc2Zvcm18dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxIPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCxaPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gWShuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxvKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBxKG4sdCxlKXtyZXR1cm4gaShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9bi5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkobi5wcm90b3R5cGUsdCx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KX19KX0pO3ZhciBHPWUuZXZlbnQ7ZnVuY3Rpb24gSigpe31mdW5jdGlvbiBLKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIFEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWUuZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEcmJihuPUcobikpLG4ucGVyc2lzdD1KLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9SyxuLmlzRGVmYXVsdFByZXZlbnRlZD1RLG4ubmF0aXZlRXZlbnQ9bn07dmFyIFgsbm49e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LHRuPWUudm5vZGU7ZS52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHU9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIG89LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgaSBpbiB1PXt9LGUpe3ZhciBsPWVbaV07SCYmXCJjaGlsZHJlblwiPT09aSYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09aSYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWx8fChcImRlZmF1bHRWYWx1ZVwiPT09aSYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9pPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1pJiYhMD09PWw/bD1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChpKT9pPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChpK3QpJiYhWihlLnR5cGUpP2k9XCJvbmlucHV0XCI6L15vbmZvY3VzJC9pLnRlc3QoaSk/aT1cIm9uZm9jdXNpblwiOi9eb25ibHVyJC9pLnRlc3QoaSk/aT1cIm9uZm9jdXNvdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucHxDb21wbykvLnRlc3QoaSk/aT1pLnRvTG93ZXJDYXNlKCk6byYmQi50ZXN0KGkpP2k9aS5yZXBsYWNlKC9bQS1aMC05XS9nLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWwmJihsPXZvaWQgMCksL15vbmlucHV0JC9pLnRlc3QoaSkmJihpPWkudG9Mb3dlckNhc2UoKSx1W2ldJiYoaT1cIm9uaW5wdXRDYXB0dXJlXCIpKSx1W2ldPWwpfVwic2VsZWN0XCI9PXQmJnUubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkodS52YWx1ZSkmJih1LnZhbHVlPXIoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT11LnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9dS5kZWZhdWx0VmFsdWUmJih1LnZhbHVlPXIoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXUubXVsdGlwbGU/LTEhPXUuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6dS5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz11LGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYobm4uZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHUuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh1LFwiY2xhc3NOYW1lXCIsbm4pKX1uLiQkdHlwZW9mPXosdG4mJnRuKG4pfTt2YXIgZW49ZS5fX3I7ZS5fX3I9ZnVuY3Rpb24obil7ZW4mJmVuKG4pLFg9bi5fX2N9O3ZhciBybj17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIFguX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sdW49XCIxNy4wLjJcIjtmdW5jdGlvbiBvbihuKXtyZXR1cm4gdC5iaW5kKG51bGwsbil9ZnVuY3Rpb24gbG4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09en1mdW5jdGlvbiBjbihuKXtyZXR1cm4gbG4obik/Zi5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBmbihuKXtyZXR1cm4hIW4uX19rJiYobyhudWxsLG4pLCEwKX1mdW5jdGlvbiBhbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBzbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxobj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSx2bj11O2Z1bmN0aW9uIGRuKG4pe24oKX1mdW5jdGlvbiBwbihuKXtyZXR1cm4gbn1mdW5jdGlvbiBtbigpe3JldHVyblshMSxkbl19dmFyIHluPWQ7ZnVuY3Rpb24gX24obix0KXt2YXIgZT10KCkscj1hKHtoOntfXzplLHY6dH19KSx1PXJbMF0uaCxvPXJbMV07cmV0dXJuIGQoZnVuY3Rpb24oKXt1Ll9fPWUsdS52PXQsRSh1Ll9fLHQoKSl8fG8oe2g6dX0pfSxbbixlLHRdKSx2KGZ1bmN0aW9uKCl7cmV0dXJuIEUodS5fXyx1LnYoKSl8fG8oe2g6dX0pLG4oZnVuY3Rpb24oKXtFKHUuX18sdS52KCkpfHxvKHtoOnV9KX0pfSxbbl0pLGV9dmFyIGJuPXt1c2VTdGF0ZTphLHVzZUlkOnMsdXNlUmVkdWNlcjpoLHVzZUVmZmVjdDp2LHVzZUxheW91dEVmZmVjdDpkLHVzZUluc2VydGlvbkVmZmVjdDp5bix1c2VUcmFuc2l0aW9uOm1uLHVzZURlZmVycmVkVmFsdWU6cG4sdXNlU3luY0V4dGVybmFsU3RvcmU6X24sc3RhcnRUcmFuc2l0aW9uOmRuLHVzZVJlZjpwLHVzZUltcGVyYXRpdmVIYW5kbGU6bSx1c2VNZW1vOnksdXNlQ2FsbGJhY2s6Xyx1c2VDb250ZXh0OmIsdXNlRGVidWdWYWx1ZTpTLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjpPLHJlbmRlcjpZLGh5ZHJhdGU6cSx1bm1vdW50Q29tcG9uZW50QXROb2RlOmZuLGNyZWF0ZVBvcnRhbDpqLGNyZWF0ZUVsZW1lbnQ6dCxjcmVhdGVDb250ZXh0OmwsY3JlYXRlRmFjdG9yeTpvbixjbG9uZUVsZW1lbnQ6Y24sY3JlYXRlUmVmOmMsRnJhZ21lbnQ6dSxpc1ZhbGlkRWxlbWVudDpsbixmaW5kRE9NTm9kZTphbixDb21wb25lbnQ6bixQdXJlQ29tcG9uZW50OncsbWVtbzpSLGZvcndhcmRSZWY6ayxmbHVzaFN5bmM6aG4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6c24sU3RyaWN0TW9kZTp2bixTdXNwZW5zZTpELFN1c3BlbnNlTGlzdDpWLGxhenk6TSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpybn07ZXhwb3J0e08gYXMgQ2hpbGRyZW4sdyBhcyBQdXJlQ29tcG9uZW50LHZuIGFzIFN0cmljdE1vZGUsRCBhcyBTdXNwZW5zZSxWIGFzIFN1c3BlbnNlTGlzdCxybiBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxjbiBhcyBjbG9uZUVsZW1lbnQsb24gYXMgY3JlYXRlRmFjdG9yeSxqIGFzIGNyZWF0ZVBvcnRhbCxibiBhcyBkZWZhdWx0LGFuIGFzIGZpbmRET01Ob2RlLGhuIGFzIGZsdXNoU3luYyxrIGFzIGZvcndhcmRSZWYscSBhcyBoeWRyYXRlLGxuIGFzIGlzVmFsaWRFbGVtZW50LE0gYXMgbGF6eSxSIGFzIG1lbW8sWSBhcyByZW5kZXIsZG4gYXMgc3RhcnRUcmFuc2l0aW9uLGZuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsc24gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMscG4gYXMgdXNlRGVmZXJyZWRWYWx1ZSx5biBhcyB1c2VJbnNlcnRpb25FZmZlY3QsX24gYXMgdXNlU3luY0V4dGVybmFsU3RvcmUsbW4gYXMgdXNlVHJhbnNpdGlvbix1biBhcyB2ZXJzaW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmKENvbXBvbmVudCkge1xuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcbiAgICByZXR1cm4gRm9yd2FyZGVkQ29tcG9uZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuLyoqXG4gKiBEZWJ1ZyBob29rLlxuICpcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKlxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eShwYXJlbnRIb29rTmFtZSwgLi4udmFsdWVzKSB7XG4gICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWYoW10pO1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAtMSk7XG4gICAgdmFsdWVzLmZvckVhY2godXNlSGVscGVyKTtcbiAgICByZXR1cm47XG4gICAgZnVuY3Rpb24gdXNlSGVscGVyKHZhbHVlLCBpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGhvb2sgJHtwYXJlbnRIb29rTmFtZX0gcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2l9LWluZGV4ZWQgYXJndW1lbnQgKCR7aSA+PSAwID8gSlNPTi5zdHJpbmdpZnkodmFsdWVzW2ldKSA6IFwidGhlIG51bWJlciBvZiBzdXBwb3NlZGx5IHN0YWJsZSBlbGVtZW50c1wifSkuYCk7XG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VSZW5kZXJpbmcoZikge1xuICAgIChvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID8/IHNldFRpbWVvdXQpKGYpO1xufVxuLyoqXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxuICpcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxuICpcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKlxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXG4gKlxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgQnkgZGVmYXVsdCwgY2hhbmdlcyB0byBwYXNzaXZlIHN0YXRlIGFyZSBkZWxheWVkIGJ5IG9uZSB0aWNrIHNvIHRoYXQgd2Ugb25seSBjaGVjayBmb3IgY2hhbmdlcyBpbiBhIHNpbWlsYXIgd2F5IHRvIFByZWFjdC4gWW91IGNhbiBvdmVycmlkZSB0aGlzIHRvLCBmb3IgZXhhbXBsZSwgYWx3YXlzIHJ1biBpbW1lZGlhdGVseSBpbnN0ZWFkLlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZykge1xuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCByZWFzb25SZWYgPSB1c2VSZWYoVW5zZXQpO1xuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0ID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUGFzc2l2ZVN0YXRlXCIsIG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUsIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nKTtcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbIC8qIGdldEluaXRpYWxWYWx1ZSBhbmQgb25DaGFuZ2UgaW50ZW50aW9uYWxseSBvbWl0dGVkICovXSk7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXG4gICAgICAgIC8vIChhbmQgd2Ugd2VyZSBnaXZlbiBhbiBpbml0aWFsIHZhbHVlIHRvIHVzZSlcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBpbml0aWFsIHZhbHVlIGluc3RlYWQgb2Ygbm90aGluZy5cbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxuICAgICAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKGFyZywgcmVhc29uKSA9PiB7XG4gICAgICAgIC8vIFJlZ2FyZGxlc3Mgb2YgYW55dGhpbmcgZWxzZSwgZmlndXJlIG91dCB3aGF0IG91ciBuZXh0IHZhbHVlIGlzIGFib3V0IHRvIGJlLlxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSAoYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KSA6IGFyZyk7XG4gICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID09PSBVbnNldCAmJiBuZXh0VmFsdWUgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IHJlcXVlc3QgdG8gY2hhbmdlIHRoaXMgdmFsdWUuXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgcmVxdWVzdCBpbW1lZGlhdGVseSwgdGhlbiBxdWV1ZSB1cCB0aGUgb25DaGFuZ2UgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgdmFsdWUgc28gdGhhdCB3ZSBjYW4gY29tcGFyZSBhZ2FpbnN0IGl0IGxhdGVyXG4gICAgICAgICAgICAvLyAoaWYgd2UgZmxpcCBiYWNrIHRvIHRoaXMgc3RhdGUsIHRoZW4gd2Ugd29uJ3Qgc2VuZCB0aGUgb25DaGFuZ2UgZnVuY3Rpb24pXG4gICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHVwZGF0ZSB0aGlzIGhlcmUgKGFzIHdlbGwgYXMgYmVsb3cpIGluIGNhc2UgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgaW52b2tlcyB0aGlzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgcmVhc29uUmVmLmN1cnJlbnQgPSByZWFzb247XG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0aGUgYWN0dWFsIGNoZWNrIGFuZCBpbnZvY2F0aW9uIG9mIG9uQ2hhbmdlIGxhdGVyIHRvIGxldCBlZmZlY3RzIHNldHRsZVxuICAgICAgICAgICAgKGN1c3RvbURlYm91bmNlUmVuZGVyaW5nID8/IGRlYm91bmNlUmVuZGVyaW5nKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFJlYXNvbiA9IHJlYXNvblJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ICE9IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGwgYW55IHJlZ2lzdGVyZWQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKG5leHREZXAsIHByZXZEZXAgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogcHJldkRlcCwgbmV4dFJlYXNvbikgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0RGVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbm9ybWFsbHkgY2FsbCBnZXRWYWx1ZSBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZmluaXNoZWQgd2l0aCBldmVyeXRoaW5nLCBzbyBtYXJrIHVzIGFzIGJlaW5nIG9uIGEgY2xlYW4gc2xhdGUgYWdhaW4uXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IFVuc2V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eSh0KSB7IHJldHVybiB0OyB9IC8vIEtpbmQgb2YgYW4gZXh0cmEsIGJ1dCBpdCdzIHVzZWZ1bCBpbiBvdGhlciBwbGFjZXMgYW55d2F5XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIHVzZSBmb3IgYGN1c3RvbURlYm91bmNlUmVuZGVyaW5nYCB0aGF0IGNhdXNlcyBgdXNlUGFzc2l2ZVN0YXRlYCB0byBydW4gY2hhbmdlcyB3aXRob3V0IHdhaXRpbmcgYSB0aWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuSW1tZWRpYXRlbHkoZikgeyBmKCk7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICpcbiAqXG4gKiAoVGhpcyBpcyBoZXJlLCBpbiB0aGlzIHBhcnRpY3VsYXIgZmlsZSwgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gKiB3aXRob3V0IGFsc28gbWFraW5nIGEgdXRpbGl0aWVzIGZpbGUuXG4gKiBPbmNlIHdlIGNhbiByZW1vdmUgdGhpcyBob29rLCB3ZSBjYW4gcHV0IHRoaXMgZnVuY3Rpb24gYmFjayB3aXRoIHVzZVJhbmRvbUlkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4oLi4uYXJncyk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICAvKigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSB1c2VSZWY8dm9pZCB8ICgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuICAgICAgICBjb25zdCBwcmV2QXJnc1JlZiA9IHVzZVJlZjxJbnB1dHM+KG51bGwhKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKGlucHV0cywgcHJldkFyZ3NSZWYuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHByZXZBcmdzUmVmLmN1cnJlbnQgPSBpbnB1dHMhO1xuICAgICAgICAgICAgaWYgKGNsZWFudXAuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSkoKTsqL1xuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIGlmIChlZmZlY3QpXG4gICAgICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICBlbHNlXG4gICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9O1xuICAgIH0sIFtpZF0pO1xufVxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuY29uc3QgVW5zZXQgPSBTeW1ib2woXCJ1bnNldFwiKTtcbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZFxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxuICpcbiAqIFRoaXMgdXNlcyBgb3B0aW9ucy5kaWZmZWRgIGluIG9yZGVyIHRvIHJ1biBiZWZvcmUgZXZlcnl0aGluZywgZXZlblxuICogcmVmIGFzc2lnbm1lbnQuIFRoaXMgbWVhbnMgdGhpcyBnZXR0ZXIgaXMgc2FmZSB0byB1c2UgYW55d2hlcmUgKioqZXhjZXB0IHRoZSByZW5kZXIgcGhhc2UqKiouXG4gKlxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyKHZhbHVlKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoKCgpID0+IHsgcmVmLmN1cnJlbnQgPSB2YWx1ZTsgfSksIFt2YWx1ZV0pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG4vKipcbiAqIExpa2UgYHVzZVN0YWJsZUdldHRlcmAsIGJ1dCAqKipyZXF1aXJlcyoqKiB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlIG9iamVjdCBpcyBhbHNvIHN0YWJsZSxcbiAqIGFuZCBpbiB0dXJuIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXRzZWxmIGlzIHN0YWJsZS5cbiAqIEBwYXJhbSB0XG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlT2JqZWN0KHQpIHtcbiAgICBjb25zdCBlID0gT2JqZWN0LmVudHJpZXModCk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlU3RhYmxlT2JqZWN0XCIsIGUubGVuZ3RoLCAuLi5lLm1hcCgoW19rLCB2XSkgPT4gdikpO1xuICAgIHJldHVybiB1c2VSZWYodCkuY3VycmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxocywgcmhzKSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxuICpcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHNDbGFzcywgbGhzQ2xhc3NOYW1lLCByaHNDbGFzcywgcmhzQ2xhc3NOYW1lKSB7XG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZnVuY3Rpb24gcHJvY2Vzc1JlZihpbnN0YW5jZSwgcmVmKSB7XG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZWYoaW5zdGFuY2UpO1xuICAgIH1cbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMocmhzLCBsaHMpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcbiAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xuICAgIH0sIFtsaHMsIHJoc10pO1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xufVxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHMgJiYgIXJocylcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIGlmICghbGhzICYmIHJocylcbiAgICAgICAgICAgIHJldHVybiByaHM7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cbiAgICAgICAgaWYgKGxocyAmJiByaHMpIHtcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhzdHlsZVN0cmluZ1RvT2JqZWN0KGxocyksIHJocyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzfTske3JocyA/PyBcIlwifWA7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocyA/PyB7fSksXG4gICAgICAgIC4uLihyaHMgPz8ge30pXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IGNvbnNvbGUud2Fybjtcbi8qXG50eXBlIElzRW1wdHlPYmplY3Q8VD4gPSBba2V5b2YgVF0gZXh0ZW5kcyBbbmV2ZXJdPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCB0eXBlIEV4dHJhY3RlZFByb3BzPE8gZXh0ZW5kcyB7fT4gPSB7IFtLIGluIGtleW9mIE9dOiBQaWNrPE9bS10sIChcInByb3BzU3RhYmxlXCIgfCBcInByb3BzVW5zdGFibGVcIikgJiBrZXlvZiBPW0tdPiB9O1xuXG5jb25zdCBvOiBFeHRyYWN0ZWRQcm9wczxVc2VHcmlkTmF2aWdhdGlvblJvd1JldHVyblR5cGU8YW55LCBhbnk+PiA9IHtcbiAgICBhc0NoaWxkUm93T2ZUYWJsZToge1xuXG4gICAgfSxcbiAgICBhc1BhcmVudFJvd09mQ2VsbHM6IHt9XG59Ki9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyKSB7XG4gICAgbG9nID0gbG9nMjtcbn1cbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gKlxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSBsaHMyXG4gKiBAcGFyYW0gcmhzMlxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKC4uLmFsbFByb3BzKSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTWVyZ2VkUHJvcHNcIiwgYWxsUHJvcHMubGVuZ3RoKTtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgZm9yIChsZXQgbmV4dFByb3BzIG9mIGFsbFByb3BzKSB7XG4gICAgICAgIHJldCA9IHVzZU1lcmdlZFByb3BzMihyZXQsIG5leHRQcm9wcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5jb25zdCBrbm93bnMgPSBuZXcgU2V0KFtcImNoaWxkcmVuXCIsIFwicmVmXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xhc3NcIiwgXCJzdHlsZVwiXSk7XG5mdW5jdGlvbiBtZXJnZVVua25vd24oa2V5LCBsaHNWYWx1ZSwgcmhzVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmhzVmFsdWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlO1xuICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICBsb2c/LihgVGhlIHByb3AgXCIke2tleX1cIiBjYW5ub3Qgc2ltdWx0YW5lb3VzbHkgYmUgdGhlIHZhbHVlcyAke2xoc1ZhbHVlfSBhbmQgJHtyaHNWYWx1ZX0uIE9uZSBtdXN0IGJlIGNob3NlbiBvdXRzaWRlIG9mIHVzZU1lcmdlZFByb3BzLmApO1xuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIG1vc3QgY29tbW9ubHkgY2FsbGVkIGZ1bmN0aW9ucyBpbiB0aGlzIGFuZCBjb25zdW1lciBsaWJyYXJpZXMsXG4gKiBzbyBpdCB0cmFkZXMgYSBiaXQgb2YgcmVhZGFiaWxpdHkgZm9yIHNwZWVkIChpLmUuIHdlIGRvbid0IGRlY29tcG9zZSBvYmplY3RzIGFuZCBqdXN0IGRvIHJlZ3VsYXIgcHJvcGVydHkgYWNjZXNzLCBpdGVyYXRlIHdpdGggYGZvci4uLmluYCwgaW5zdGVhZCBvZiBgT2JqZWN0LmVudHJpZXNgLCBldGMuKVxuICovXG5mdW5jdGlvbiB1c2VNZXJnZWRQcm9wczIobGhzQWxsLCByaHNBbGwpIHtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmcyhsaHNBbGwucmVmLCByaHNBbGwucmVmKSxcbiAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHNBbGwuc3R5bGUsIHJoc0FsbC5zdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHNBbGxbXCJjbGFzc1wiXSwgbGhzQWxsLmNsYXNzTmFtZSwgcmhzQWxsW1wiY2xhc3NcIl0sIHJoc0FsbC5jbGFzc05hbWUpLFxuICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzQWxsLmNoaWxkcmVuLCByaHNBbGwuY2hpbGRyZW4pLFxuICAgIH07XG4gICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5yZWY7XG4gICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LnN0eWxlO1xuICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgIGlmIChyZXRbXCJjbGFzc1wiXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0W1wiY2xhc3NcIl07XG4gICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xuICAgIGZvciAoY29uc3QgbGhzS2V5VSBpbiBsaHNBbGwpIHtcbiAgICAgICAgY29uc3QgbGhzS2V5ID0gbGhzS2V5VTtcbiAgICAgICAgaWYgKGtub3ducy5oYXMobGhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbbGhzS2V5XSA9IGxoc0FsbFtsaHNLZXldO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHJoc0tleVUgaW4gcmhzQWxsKSB7XG4gICAgICAgIGNvbnN0IHJoc0tleSA9IHJoc0tleVU7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKHJoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZVVua25vd24ocmhzS2V5LCByZXRbcmhzS2V5XSwgcmhzQWxsW3Joc0tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHksIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnRQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4ocjogVXNlUmVmRWxlbWVudFJldHVyblR5cGU8RT4sIC4uLm90aGVyUHJvcHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdIHtcbiAgICByZXR1cm4gW3IucmVmRWxlbWVudFJldHVybi5wcm9wc1N0YWJsZSwgLi4ub3RoZXJQcm9wc107XG59Ki9cbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudChhcmdzKSB7XG4gICAgY29uc3QgeyByZWZFbGVtZW50UGFyYW1ldGVyczogeyBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCB9IH0gPSBhcmdzO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVJlZkVsZW1lbnRcIiwgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQpO1xuICAgIC8vIENhbGxlZCAoaW5kaXJlY3RseSkgYnkgdGhlIHJlZiB0aGF0IHRoZSBlbGVtZW50IHJlY2VpdmVzLlxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgcHJldlZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBvbkVsZW1lbnRDaGFuZ2U/LihlLCBwcmV2VmFsdWUpO1xuICAgICAgICBpZiAocHJldlZhbHVlKVxuICAgICAgICAgICAgb25Vbm1vdW50Py4ocHJldlZhbHVlKTtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBvbk1vdW50Py4oZSk7XG4gICAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0sIFtdKTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKGhhbmRsZXIsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICBjb25zdCBwcm9wc1N0YWJsZSA9IHVzZVJlZih7IHJlZjogc2V0RWxlbWVudCB9KTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVmRWxlbWVudFJldHVybjoge1xuICAgICAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIHByb3BzU3RhYmxlOiBwcm9wc1N0YWJsZS5jdXJyZW50XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290RWxlbWVudCBUaGUgSFRNTEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFIVE1MRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2U7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgYmFzZUlzQXJndW1lbnRzIGZyb20gJy4vX2Jhc2VJc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5pbXBvcnQgc3R1YkZhbHNlIGZyb20gJy4vc3R1YkZhbHNlLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBpc0J1ZmZlcjtcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBub2RlVXRpbDtcbiIsImltcG9ydCBiYXNlSXNUeXBlZEFycmF5IGZyb20gJy4vX2Jhc2VJc1R5cGVkQXJyYXkuanMnO1xuaW1wb3J0IGJhc2VVbmFyeSBmcm9tICcuL19iYXNlVW5hcnkuanMnO1xuaW1wb3J0IG5vZGVVdGlsIGZyb20gJy4vX25vZGVVdGlsLmpzJztcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzVHlwZWRBcnJheTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInByZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCBub29wIGZyb20gXCJsb2Rhc2gtZXMvbm9vcFwiO1xuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0SW5mby5jdXJyZW50LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKlxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKlxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcbiAgICBjb25zdCBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1hbmltYXRpb24tZnJhbWUuanMubWFwIiwiaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgcnVuSW1tZWRpYXRlbHkgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRDbGFzc0Jhc2UoZ2l2ZW4pIHtcbiAgICByZXR1cm4gZ2l2ZW4gPz8gXCJwdGxcIjtcbn1cbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwibXNcIikpXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcbiAgICAgICAgICAgIHJldHVybiAoK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH0pKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3RhdGUobmV4dFN0YXRlKSB7XG4gICAgcmV0dXJuIG5leHRTdGF0ZS5zcGxpdChcIi1cIik7XG59XG4vKipcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNpdGlvbih7IHNob3c6IHYsIGFuaW1hdGVPbk1vdW50OiBhLCBtZWFzdXJlOiBtLCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5OiBlLCBkdXJhdGlvbjogZCB9KSB7XG4gICAgY2xhc3NCYXNlIHx8PSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgZSB8fD0gXCJoaWRkZW5cIjtcbiAgICBhID8/PSBmYWxzZTtcbiAgICBtID8/PSBmYWxzZTtcbiAgICBjb25zdCBnZXRNZWFzdXJlID0gdXNlU3RhYmxlR2V0dGVyKG0pO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIGNsYXNzQmFzZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZSk7XG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQoeyByZWZFbGVtZW50UGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0KFtcbiAgICAgICAgLy8gVGhpcyBpcyByZW1vdmVkIGR1cmluZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAvLyAoYXQgbGVhc3Qgb25jZSBgc2hvd2AgaXMgbm9uLW51bGwpXG4gICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgXSkpO1xuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aW9uLCBwaGFzZV0gPSBwYXJzZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWYoe1xuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gZ2V0RWxlbWVudCgpICYmIGUuZWxhcHNlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IHRpbWUgXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCdzIENTUyBjbGFzcyB0byBtYXRjaCB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGFuZCBwaGFzZS5cbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVDbGFzc2VzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIGRpcmVjdGlvbiwgcGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZW50ZXItaW5pdGAsIGAke2NsYXNzQmFzZX0tZW50ZXItdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZW50ZXItZmluYWxpemVgLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJyZW1vdmVkXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcImhpZGRlblwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn0tJHtwaGFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V4aXRWaXNpYmlsaXR5fWBcbiAgICAgICAgXTtcbiAgICAgICAgLy8obWVhc3VyZSA/IGFsbENsYXNzZXNUb0FkZCA6IGFsbENsYXNzZXNUb1JlbW92ZSkucHVzaChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgdmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWxsIFwibWVhc3VyZVwiIHZhcmlhYmxlcyAob3IgcmVtb3ZlcyB0aGVtKVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZVNpemVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG5leHRTaXplKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS10b3BgLCBuZXh0U2l6ZT8udG9wKTtcbiAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7Y2xhc3NCYXNlfS1tZWFzdXJlLWxlZnRgLCBuZXh0U2l6ZT8ubGVmdCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS13aWR0aGAsIG5leHRTaXplPy53aWR0aCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS1oZWlnaHRgLCBuZXh0U2l6ZT8uaGVpZ2h0KTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG1lYXN1cmUpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydGllcyhlbGVtZW50LCBzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBXaGVuIGEgdHJhbnNpdGlvbiBzdGFydHMsIHdlIHJlYWQgdGhlIHRyYW5zaXRpb24tZHVyYXRpb24gYW5kIHVzZSBpdCBhcyBhbiBlbWVyZ2VuY3kgdGltZW91dCBpbiBjYXNlIG9uVHJhbnNpdGlvbkVuZCBkb2Vzbid0IHdvcmsuXG4gICAgLy8gU28gd2UgbmVlZCBhIHdheSB0byBjYW5jZWwgdGhhdCB0aW1lb3V0IGlmIG5lZWRlZC5cbiAgICBjb25zdCB0aW1lb3V0SGFuZGxlID0gdXNlUmVmKC0xKTtcbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB0aGUgc3RhdGUgY2hhbmdlcywgdGhlcmUncyBzb21lIGxvZ2ljIHdlIG5lZWQgdG8gcnVuOlxuICAgICAqXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYSBgdHJhbnNpdGlvbmAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IHVudGlsIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgdGhlbiBjaGFuZ2UgdG8gdGhlIGBmaW5hbGl6ZWAgcGhhc2UuXG4gICAgICpcbiAgICAgKiBBbnkgY2hhbmdlIGluIHN0YXRlIG9yIGNsYXNzZXMvc3R5bGVzIGRvZXMgbm90IGltcGxpY2l0bHkgY2F1c2UgYSByZS1yZW5kZXIuXG4gICAgICovXG4gICAgY29uc3Qgb25TdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXh0U3RhdGUsIHByZXZTdGF0ZSwgcmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IG1lYXN1cmUgPSBnZXRNZWFzdXJlKCk7XG4gICAgICAgIC8vY29uc3QgZHVyYXRpb25PdmVycmlkZSA9IGdldER1cmF0aW9uT3ZlcnJpZGUoKTtcbiAgICAgICAgLyppZiAoZHVyYXRpb25PdmVycmlkZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF0gPSBkdXJhdGlvbk92ZXJyaWRlICsgXCJtc1wiO1xuICAgICAgICAgICAgZWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYCwgYCR7ZHVyYXRpb25PdmVycmlkZX1tc2ApO1xuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKG1lYXN1cmUgJiYgZWxlbWVudCAmJiBuZXh0UGhhc2UgPT0gXCJpbml0XCIpIHtcbiAgICAgICAgICAgIC8vIFdlIGFjdHVhbGx5IG5lZWQgYWxsIHRoZXNlIHJlZmxvd3MsIGVpdGhlciB0byBtYWtlIHRoaW5ncyBsaWtlIGJsb2NrLXNpemUgd29yaywgb3IgdG8gbWFrZSB0aGluZ3MgbGlrZSBvcGFjaXR5IHdvcmsuXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIFwiZmluYWxpemVcIik7XG4gICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTsgLy8gQnkgbWVhc3VyaW5nIHRoZSBlbGVtZW50IGJlbG93IHdlIGltcGxpY2l0bHkgcmVmbG93LCBidXQgdGhpcyBpcyBhIHJlbWluZGVyIHRoYXQgaXQgaGFwcGVucy5cbiAgICAgICAgICAgIG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyhlbGVtZW50LCBtZWFzdXJlKTtcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlKTtcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBVbm5lY2Vzc2FyeSByZWZsb3c/XG4gICAgICAgICAgICAvLyBJdCBtaWdodCBvbmx5IGJlIG5lY2Vzc2FyeSB3aGVuIGNoYW5naW5nIGZyb20gLWluaXQgdG8gLXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcbiAgICAgICAgaWYgKGV4aXRWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBpbmVydCA9IChleGl0VmlzaWJpbGl0eSA9PSBcImluZXJ0XCIgJiYgbmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiA/IHRydWUgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGluZXJ0KVxuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMuY3VycmVudC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCJdO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbmVydCA9IChpbmVydCB8fCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChuZXh0UGhhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS10cmFuc2l0aW9uYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJmaW5hbGl6ZVwiOiB7XG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbyBvciBzY2hlZHVsZSBvciBhbnl0aGluZyAtLSB3ZSBqdXN0IHVwZGF0ZSBvdXIgY2xhc3NlcyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IFtnZXRTdGF0ZSwgc2V0U3RhdGVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBJZiBgc2hvd2AgaXMgbnVsbCwgdGhlbiB3ZSBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICAgIGlmICh2ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGBzaG93YCBpcyB0cnVlIG9yIGZhbHNlIChhcyBvcHBvc2VkIHRvIG51bGwpLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIHNlZWluZyBhIG5vbi1udWxsIHZhbHVlLCBcbiAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgaW5kaWNhdGVzIHRoZSBubyB0cmFuc2l0aW9uIGxvZ2ljIGhhcyBzdGFydGVkLlxuICAgICAgICAvLyAoQmVjYXVzZSB0aGlzIGlzIHVzZUxheW91dEVmZmVjdCwgaXQgd2lsbCB0YWtlIGVmZmVjdCBiZWZvcmUgdGhlIGNsYXNzJ3MgZWZmZWN0cyBhcmUgcGFpbnRlZClcbiAgICAgICAgaWYgKCFoYXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuY3VycmVudC5kZWxldGUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgcGVuZGluZyBjbGFzcyBvZnRlbiBtYWtlcyB0aGlzIGhpZGRlbiBvciBkLW5vbmUsIFxuICAgICAgICAgICAgICAgIC8vIGZvcmNlIGEgcmVmbG93IGp1dXVzdCB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2UgPSBcImluaXRcIjtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcbiAgICAgICAgICAgICAgICBuZXh0UGhhc2UgPSBcInRyYW5zaXRpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBlbnRlci0ke25leHRQaGFzZX1gKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFt2XSk7XG4gICAgaWYgKGQgIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZCArIFwibXNcIjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF07XG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhwcm9wc1N0YWJsZSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgICAgICAgLi4uY2xhc3NOYW1lcy5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtlfWAsXG4gICAgICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCxcbiAgICAgICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YFxuICAgICAgICAgICAgXS5qb2luKFwiIFwiKSxcbiAgICAgICAgICAgIHN0eWxlOiBjc3NQcm9wZXJ0aWVzLmN1cnJlbnQsXG4gICAgICAgICAgICAuLi5vdGhlclByb3BzLmN1cnJlbnRcbiAgICAgICAgfSlcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb25hYmxlKHsgdHJhbnNpdGlvbjogeyBhbmltYXRlT25Nb3VudCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHksIG1lYXN1cmUsIHNob3cgfSwgcHJvcHM6IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gfSkge1xuICAgIGNvbnN0IHsgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyB9ID0gdXNlVHJhbnNpdGlvbih7XG4gICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBleGl0VmlzaWJpbGl0eSxcbiAgICAgICAgbWVhc3VyZSxcbiAgICAgICAgc2hvd1xuICAgIH0pO1xuICAgIGNvbnN0IGNoaWxkcmVuSXNWbm9kZSA9IChjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlICYmIGNoaWxkcmVuLnByb3BzKTtcbiAgICBjb25zdCBmaW5hbFByb3BzID0gdXNlTWVyZ2VkUHJvcHMocHJvcHMsIHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW5Jc1Zub2RlID8geyByZWY6IGNoaWxkcmVuLnJlZiwgLi4uY2hpbGRyZW4ucHJvcHMgfSA6IHt9KTtcbiAgICBpZiAoY2hpbGRyZW5Jc1Zub2RlKSB7XG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGZpbmFsUHJvcHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgLi4uZmluYWxQcm9wcyB9LCBjaGlsZHJlbik7XG4gICAgfVxufVxubGV0IGR1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGR1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIGR1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgcmV0dXJuIGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgQ2xpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXAoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGYWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmFkZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcbiAgICAgICAgfVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpcFByb3BzIH0gZnJvbSBcIi4vY2xpcFwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG47XG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IHRyYW5zaXRpb246IHsgbWVhc3VyZTogZmFsc2UsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKlxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXG4gKlxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cbiAqXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlIVxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZSh7IGNsYXNzQmFzZSwgc2hvdywgZHVyYXRpb24sIG1pbkJsb2NrU2l6ZSwgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IHRydWUsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbGxhcHNlUHJvcHMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IHRydWUsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pLCBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXG4gICAgICAgIH1cbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KTtcbn0pO1xuLy8gVE9ETzogVGhpcyBsb2dpYyB3YXMgcmVxdWlyZWQgZm9yIHNsaWRlcyBhdCBvbmUgcG9pbnQgdG8gZW5zdXJlIHRoYXQgc2xpZGVUYXJnZXRJbmxpbmU9e2luZGV4IC0gY3VycmVudEluZGV4fSB3b3JrcyByaWdodCxcbi8vIGJ1dCBpdCB3b3JrcyB3aXRob3V0IGl0IG5vdywgc28sIGxpa2UsIHdlJ3JlIGdvb2QgdGhlbj8gV2hpY2ggSSdtIG9rYXkgd2l0aCBiZWNhdXNlIEkgY2FuJ3QgZXhwbGFpbiB0aGUgbG9naWMgaGVyZSBob25lc3RseS5cbi8qZXhwb3J0IGZ1bmN0aW9uIHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lIH06IHsgdGFyZ2V0SW5saW5lPzogbnVtYmVyIHwgbnVsbCwgdGFyZ2V0QmxvY2s/OiBudW1iZXIgfCBudWxsIH0pOiB7IHRhcmdldElubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkLCB0YXJnZXRCbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIH0ge1xuXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHRhcmdldElubGluZSA/PyAxKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZih0YXJnZXRCbG9jayA/PyAwKTtcblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0YXJnZXRJbmxpbmUpIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gdGFyZ2V0SW5saW5lOyB9LCBbdGFyZ2V0SW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRhcmdldEJsb2NrKSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gdGFyZ2V0QmxvY2s7IH0sIFt0YXJnZXRCbG9ja10pO1xuXG4gICAgaWYgKHRhcmdldElubGluZSA9PSAwKVxuICAgICAgICB0YXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAodGFyZ2V0QmxvY2sgPT0gMClcbiAgICAgICAgdGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuXG4gICAgdGFyZ2V0SW5saW5lID8/PSB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0QmxvY2sgPz89IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB0YXJnZXRJbmxpbmUsIHRhcmdldEJsb2NrIH07XG59Ki9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KSkgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XG5pbXBvcnQgeyBjcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG47XG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0pLCBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9KSkgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBmYWRlTWF4LCBmYWRlTWluLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8gICh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0gPSB1c2VTbGlkZVRoaW5nKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSkpO1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pLCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtYmxvY2tgXTogYCR7KGZsaXBBbmdsZUJsb2NrID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gOTApO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gZmxpcEFuZ2xlSW5saW5lOyB9LCBbZmxpcEFuZ2xlSW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xuICAgIGlmIChmbGlwQW5nbGVJbmxpbmUgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBzaG93LCBtZWFzdXJlOiBmYWxzZSwgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuLyoqXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cbiAqXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXG4gKlxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cbiAqXG4gKiBMb25nIHdheSBvZiBzYXlpbmcsIGlmIHlvdSBnZXQgYSBjcnlwdGljIGVycm9yIHdpdGggdGhpcyBjb21wb25lbnQsIG1ha2Ugc3VyZSBpdCBoYXMgYSBzaW5nbGUgYDxkaXY+YCBjaGlsZCBvciBzb21ldGhpbmcuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW46IGMsIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gYztcbiAgICBjb25zb2xlLmFzc2VydCghIWNoaWxkcmVuLnR5cGUpO1xuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBpbmxpbmUgfSwgeyAuLi5wLCByZWYgfSk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHModHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZHJlbiwgbWVyZ2VkV2l0aENoaWxkcmVuKTtcbn0pO1xuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhXCIsXG4gICAgXCJhYmJyXCIsXG4gICAgXCJhY3JvbnltXCIsXG4gICAgXCJhdWRpb1wiLFxuICAgIFwiYlwiLFxuICAgIFwiYmRpXCIsXG4gICAgXCJiZG9cIixcbiAgICBcImJpZ1wiLFxuICAgIFwiYnJcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiY2FudmFzXCIsXG4gICAgXCJjaXRlXCIsXG4gICAgXCJjb2RlXCIsXG4gICAgXCJkYXRhXCIsXG4gICAgXCJkYXRhbGlzdFwiLFxuICAgIFwiZGVsXCIsXG4gICAgXCJkZm5cIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaVwiLFxuICAgIFwiaWZyYW1lXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnNcIixcbiAgICBcImtiZFwiLFxuICAgIFwibGFiZWxcIixcbiAgICBcIm1hcFwiLFxuICAgIFwibWFya1wiLFxuICAgIFwibWV0ZXJcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGljdHVyZVwiLFxuICAgIFwicHJvZ3Jlc3NcIixcbiAgICBcInFcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNhbXBcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJzbG90XCIsXG4gICAgXCJzbWFsbFwiLFxuICAgIFwic3BhblwiLFxuICAgIFwic3Ryb25nXCIsXG4gICAgXCJzdWJcIixcbiAgICBcInN1cFwiLFxuICAgIFwic3ZnXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBcInRpbWVcIixcbiAgICBcInVcIixcbiAgICBcInR0XCIsXG4gICAgXCJ2YXJcIixcbiAgICBcInZpZGVvXCIsXG4gICAgXCJ3YnJcIlxuXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsibiIsImwiLCJ1IiwidCIsIm8iLCJyIiwiZiIsImUiLCJjIiwicyIsImEiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJoIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2FsbCIsImRlZmF1bHRQcm9wcyIsInYiLCJ0eXBlIiwicHJvcHMiLCJrZXkiLCJyZWYiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192Iiwidm5vZGUiLCJwIiwiZCIsImNvbnRleHQiLCJfIiwiaW5kZXhPZiIsImsiLCJiYXNlIiwiYiIsInB1c2giLCJnIiwiX19yIiwiZGVib3VuY2VSZW5kZXJpbmciLCJzZXRUaW1lb3V0Iiwic29ydCIsInNvbWUiLCJfX1AiLCJqIiwiX19uIiwib3duZXJTVkdFbGVtZW50IiwieiIsInciLCJ5IiwieCIsIkMiLCJBcnJheSIsImlzQXJyYXkiLCJtIiwiQSIsIk4iLCJNIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsIkgiLCIkIiwic2V0UHJvcGVydHkiLCJ0ZXN0Iiwic3R5bGUiLCJjc3NUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiVCIsIkkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJjb250ZXh0VHlwZSIsInZhbHVlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiTyIsInN1YiIsInN0YXRlIiwiX3NiIiwiX19zIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiZm9yRWFjaCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsIkwiLCJkaWZmZWQiLCJsb2NhbE5hbWUiLCJub2RlVHlwZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJjcmVhdGVFbGVtZW50IiwiaXMiLCJkYXRhIiwiY2hpbGROb2RlcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJjaGVja2VkIiwiY3VycmVudCIsInVubW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIlAiLCJmaXJzdENoaWxkIiwicSIsIkIiLCJDb25zdW1lciIsIlByb3ZpZGVyIiwic3BsaWNlIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsImZvcmNlVXBkYXRlIiwiX19IIiwiX19WIiwiX19OIiwiZmlsdGVyIiwiZXZlcnkiLCJGIiwic2hpZnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImlzUHVyZVJlYWN0Q29tcG9uZW50IiwiX19mIiwiU3ltYm9sIiwiZm9yIiwiJCR0eXBlb2YiLCJpc1JlYWN0Q29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJ0aGVuIiwibWFwIiwiVSIsIkQiLCJfX3UiLCJfX2EiLCJWIiwiX19SIiwiX19PIiwicG9wIiwiZmFsbGJhY2siLCJXIiwiZGVsZXRlIiwicmV2ZWFsT3JkZXIiLCJzaXplIiwiZ2V0IiwiTWFwIiwicmV2ZXJzZSIsInNldCIsIloiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiRyIsIkoiLCJLIiwiY2FuY2VsQnViYmxlIiwiUSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwZXJzaXN0IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJuYXRpdmVFdmVudCIsIm5uIiwiY2xhc3MiLCJ0biIsIm11bHRpcGxlIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWUiLCJjbGFzc05hbWUiLCJlbnVtZXJhYmxlIiwiZW4iLCJmb3J3YXJkRWxlbWVudFJlZiIsIkNvbXBvbmVudCIsIkZvcndhcmRlZENvbXBvbmVudCIsImZvcndhcmRSZWYiLCJ1c2VFbnN1cmVTdGFiaWxpdHkiLCJwYXJlbnRIb29rTmFtZSIsInZhbHVlcyIsImhlbHBlclRvRW5zdXJlU3RhYmlsaXR5IiwidXNlUmVmIiwic2hvd25FcnJvciIsInVzZUhlbHBlciIsImluZGV4IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wdGlvbnMiLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsImN1c3RvbURlYm91bmNlUmVuZGVyaW5nIiwidmFsdWVSZWYiLCJVbnNldCIsInJlYXNvblJlZiIsIndhcm5pbmdSZWYiLCJkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCIsImNsZWFudXBDYWxsYmFja1JlZiIsIm9uU2hvdWxkQ2xlYW5VcCIsInVzZUNhbGxiYWNrIiwiY2xlYW51cENhbGxiYWNrIiwidHJ5RW5zdXJlVmFsdWUiLCJpbml0aWFsVmFsdWUiLCJleCIsImdldFZhbHVlIiwid2FybiIsInVzZUxheW91dEVmZmVjdCIsInNldFZhbHVlIiwiYXJnIiwicmVhc29uIiwibmV4dFZhbHVlIiwiRnVuY3Rpb24iLCJuZXh0UmVhc29uIiwibmV4dERlcCIsInByZXZEZXAiLCJyZXR1cm5OdWxsIiwicnVuSW1tZWRpYXRlbHkiLCJUYWJsZSIsImJhc2U2NCIsInJhbmRvbTZCaXRzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tNjRCaXRzIiwiZ2VuZXJhdGVSYW5kb21JZCIsInByZWZpeCIsImpvaW4iLCJwcmV2aW91c0lucHV0cyIsInRvUnVuIiwiY29tbWl0TmFtZSIsIm9yaWdpbmFsQ29tbWl0IiwibmV3Q29tbWl0IiwiaWQiLCJlZmZlY3RJbmZvIiwib2xkSW5wdXRzIiwiYXJnc0NoYW5nZWQiLCJpbnB1dHMiLCJjbGVhbnVwIiwiZWZmZWN0IiwiY2xlYXIiLCJhcmdzIiwidXNlQmVmb3JlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvbGRBcmdzIiwibmV3QXJncyIsInVzZVN0YWJsZUdldHRlciIsIkVycm9yIiwidXNlTWVyZ2VkQ2hpbGRyZW4iLCJsaHMiLCJyaHMiLCJGcmFnbWVudCIsImNsc3giLCJ1c2VNZXJnZWRDbGFzc2VzIiwibGhzQ2xhc3MiLCJsaHNDbGFzc05hbWUiLCJyaHNDbGFzcyIsInJoc0NsYXNzTmFtZSIsImxoc0NsYXNzZXMiLCJzcGxpdCIsInJoc0NsYXNzZXMiLCJhbGxDbGFzc2VzIiwiU2V0IiwiZnJvbSIsInByb2Nlc3NSZWYiLCJpbnN0YW5jZSIsImFzc2VydCIsInVzZU1lcmdlZFJlZnMiLCJjb21iaW5lZCIsInN0eWxlU3RyaW5nVG9PYmplY3QiLCJmcm9tRW50cmllcyIsInN0YXRlbWVudCIsInVzZU1lcmdlZFN0eWxlcyIsImxvZyIsInVzZU1lcmdlZFByb3BzIiwiYWxsUHJvcHMiLCJyZXQiLCJuZXh0UHJvcHMiLCJ1c2VNZXJnZWRQcm9wczIiLCJrbm93bnMiLCJtZXJnZVVua25vd24iLCJsaHNWYWx1ZSIsInJoc1ZhbHVlIiwibWVyZ2VkIiwibWVyZ2VGdW5jdGlvbnMiLCJsaHNBbGwiLCJyaHNBbGwiLCJsaHNLZXlVIiwibGhzS2V5IiwiaGFzIiwicmhzS2V5VSIsInJoc0tleSIsImx2IiwicnYiLCJQcm9taXNlIiwiYWxsIiwidXNlUmVmRWxlbWVudCIsInJlZkVsZW1lbnRQYXJhbWV0ZXJzIiwib25FbGVtZW50Q2hhbmdlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsImhhbmRsZXIiLCJwcmV2VmFsdWUiLCJnZXRFbGVtZW50Iiwic2V0RWxlbWVudCIsInByb3BzU3RhYmxlIiwicmVmRWxlbWVudFJldHVybiIsIl9hIiwiX2IiLCJfYyIsIl9ibG9ja2luZ0VsZW1lbnRzIiwiX2FscmVhZHlJbmVydEVsZW1lbnRzIiwiX3RvcEVsUGFyZW50cyIsIl9zaWJsaW5nc1RvUmVzdG9yZSIsIl9wYXJlbnRNTyIsIl90b3BDaGFuZ2VkIiwiX3N3YXBJbmVydGVkU2libGluZyIsIl9pbmVydFNpYmxpbmdzIiwiX3Jlc3RvcmVJbmVydGVkU2libGluZ3MiLCJfZ2V0UGFyZW50cyIsIl9nZXREaXN0cmlidXRlZENoaWxkcmVuIiwiX2lzSW5lcnRhYmxlIiwiX2hhbmRsZU11dGF0aW9ucyIsIkJsb2NraW5nRWxlbWVudHNJbXBsIiwiZGVzdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJlbGVtZW50IiwicmVtb3ZlIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsImJvZHkiLCJ0b1NraXAiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJpbmVydCIsImFkZCIsImVsZW1lbnRzIiwibW8iLCJkaXNjb25uZWN0Iiwic2libGluZ3MiLCJzaWJsaW5nIiwicGFyZW50IiwiaW5lcnRlZFNpYmxpbmdzIiwiTXV0YXRpb25PYnNlcnZlciIsImJpbmQiLCJwYXJlbnRUb09ic2VydmUiLCJtYXliZVNoYWR5Um9vdCIsIl9fc2hhZHkiLCJob3N0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsInRhcmdldCIsImlkeCIsImluZXJ0ZWRDaGlsZCIsInJlbW92ZWROb2RlcyIsImluZm8iLCJhZGRlZE5vZGVzIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImFzc2lnbmVkU2xvdCIsInNoYWRvd1Jvb3QiLCJyZXN1bHQiLCJub2RlcyIsInNsb3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiJGJsb2NraW5nRWxlbWVudHMiLCJnbG9iYWwiLCJmYWN0b3J5IiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIl9vbk11dGF0aW9uIiwic3VidHJlZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJub2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJyb290IiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIl9hZG9wdEluZXJ0Um9vdCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsIl9vbkRvY3VtZW50TG9hZGVkIiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJjYWxsYmFjayIsInNoYWRvd1Jvb3RBbmNlc3RvciIsImNvbnRlbnQiLCJkaXN0cmlidXRlZE5vZGVzIiwiZ2V0RGlzdHJpYnV0ZWROb2RlcyIsInNsb3QiLCJfZGlzdHJpYnV0ZWROb2RlcyIsIl9pIiwiY2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJIVE1MRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiZnJlZUdsb2JhbCIsImZyZWVTZWxmIiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsImdldFJhd1RhZyIsImlzT3duIiwidGFnIiwidW5tYXNrZWQiLCJvYmplY3RUb1N0cmluZyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJiYXNlR2V0VGFnIiwiaXNPYmplY3RMaWtlIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwiZnJlZU1vZHVsZSIsIm1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJpc0J1ZmZlciIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsImlzVHlwZWRBcnJheSIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0Q2xhc3NCYXNlIiwiZ2l2ZW4iLCJnZXRUaW1lb3V0RHVyYXRpb24iLCJtYXgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0ciIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VTdGF0ZSIsIm5leHRTdGF0ZSIsInVzZVRyYW5zaXRpb24iLCJzaG93IiwiYW5pbWF0ZU9uTW91bnQiLCJtZWFzdXJlIiwiY2xhc3NCYXNlIiwiZXhpdFZpc2liaWxpdHkiLCJkdXJhdGlvbiIsImdldE1lYXN1cmUiLCJnZXRFeGl0VmlzaWJpbGl0eSIsImNzc1Byb3BlcnRpZXMiLCJjbGFzc05hbWVzIiwiaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkIiwiZ2V0U3RhdGUiLCJkaXJlY3Rpb24iLCJwaGFzZSIsInRpbWVvdXRIYW5kbGUiLCJvdGhlclByb3BzIiwib25UcmFuc2l0aW9uRW5kIiwiZWxhcHNlZFRpbWUiLCJoYXNNb3VudGVkIiwidXBkYXRlQ2xhc3NlcyIsImFsbENsYXNzZXNUb1JlbW92ZSIsImFsbENsYXNzZXNUb0FkZCIsImNsYXNzTGlzdCIsInVwZGF0ZVNpemVQcm9wZXJ0eSIsInZhck5hbWUiLCJyZW1vdmVQcm9wZXJ0eSIsInVwZGF0ZVNpemVQcm9wZXJ0aWVzIiwibmV4dFNpemUiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvblN0YXRlQ2hhbmdlIiwicHJldlN0YXRlIiwibmV4dERpcmVjdGlvbiIsIm5leHRQaGFzZSIsImZvcmNlUmVmbG93IiwiY3VycmVudFN0YXRlIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRQaGFzZSIsIlRyYW5zaXRpb25hYmxlIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Qcm9wcyIsImNoaWxkcmVuSXNWbm9kZSIsImZpbmFsUHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiY3JlYXRlQ2xpcFByb3BzIiwiY2xpcE1pbiIsImNsaXBNaW5CbG9jayIsImNsaXBNaW5JbmxpbmUiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE9yaWdpbklubGluZSIsIkNsaXAiLCJyZXN0IiwiY3JlYXRlRmFkZVByb3BzIiwiZmFkZU1pbiIsImZhZGVNYXgiLCJGYWRlIiwiQ2xpcEZhZGUiLCJjcmVhdGVDb2xsYXBzZVByb3BzIiwibWluQmxvY2tTaXplIiwiQ29sbGFwc2UiLCJDb2xsYXBzZUZhZGUiLCJjcmVhdGVTbGlkZVByb3BzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwiU2xpZGUiLCJTbGlkZUZhZGUiLCJjcmVhdGVab29tUHJvcHMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIlpvb21GYWRlIiwiU2xpZGVab29tIiwiU2xpZGVab29tRmFkZSIsImNyZWF0ZUZsaXBQcm9wcyIsImZsaXBBbmdsZUlubGluZSIsImZsaXBBbmdsZUJsb2NrIiwicGVyc3BlY3RpdmUiLCJGbGlwIiwibGFzdFZhbGlkVGFyZ2V0SW5saW5lIiwibGFzdFZhbGlkVGFyZ2V0QmxvY2siLCJ1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyIsImlubGluZSIsIlN3YXBwYWJsZSIsImlubGluZUVsZW1lbnRzIiwibWVyZ2VkV2l0aENoaWxkcmVuIiwiaGFsZlRleHQiLCJpbnB1dCIsInRpbWVzIiwic3Vic3RyIiwiRGVtbyIsInNldEFuaW1hdGVPbk1vdW50Iiwid3JpdGluZ01vZGUiLCJzZXRXcml0aW5nTW9kZSIsInNob3cxIiwic2V0U2hvdzEiLCJzaG93MyIsInNldFNob3czIiwicmVmbG93Iiwic2V0UmVmbG93Iiwic2V0RHVyYXRpb24iLCJ0ZXh0Iiwic2V0VGV4dCIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uSW5wdXQiLCJjb2xzIiwicm93cyIsIkZhZGVEZW1vIiwiY2FyZFNob3ciLCJjb250ZW50SW5kZXgiLCJTbGlkZURlbW8iLCJab29tRGVtbyIsIkNsaXBEZW1vIiwiQ29sbGFwc2VEZW1vIiwiWm9vbVNsaWRlRGVtbyIsIkZsaXBEZW1vIiwibWluIiwic2V0TWluIiwic2V0TWF4Iiwib25NaW5JbnB1dCIsIm9uTWF4SW5wdXQiLCJDUyIsIm1ha2VDaGlsZCIsInN0ZXAiLCJvcmlnaW5YIiwic2V0T3JpZ2luWCIsIm9yaWdpblkiLCJzZXRPcmlnaW5ZIiwibWluWCIsInNldE1pblgiLCJtaW5ZIiwic2V0TWluWSIsIndpdGhGYWRlIiwic2V0V2l0aEZhZGUiLCJvbk9yaWdpblhJbnB1dCIsIm9uT3JpZ2luWUlucHV0Iiwib25NaW5YSW5wdXQiLCJvbk1pbllJbnB1dCIsIm9uV2l0aEZhZGVJbnB1dCIsInNsaWRlWCIsInNldFNsaWRlWCIsInNsaWRlWSIsInNldFNsaWRlWSIsIm9uU2xpZGVYSW5wdXQiLCJvblNsaWRlWUlucHV0Iiwic2lnbiIsInNldE1pbkJsb2NrU2l6ZSIsIm9uTWluU2l6ZSIsImZsaXBYIiwic2V0RmxpcFgiLCJmbGlwWSIsInNldEZsaXBZIiwib25GbGlwWElucHV0Iiwib25GbGlwWUlucHV0IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFHLElBQUNBLENBQUM7SUFBQ0MsR0FBQztJQUFDQyxHQUFDO0lBQUdDLEdBQUM7SUFBQ0MsR0FBQztJQUFDQyxHQUFDO0lBQUNDLEdBQUMsR0FBQyxFQUFFO0lBQUNDLEdBQUMsR0FBQyxFQUFFO0lBQUNDLEdBQUMsR0FBQyxtRUFBQTtFQUFvRSxTQUFTQyxHQUFDLENBQUNULENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0lBQUMsS0FBSSxJQUFJQyxDQUFDLElBQUlELENBQUM7TUFBQ0QsQ0FBQyxDQUFDRSxDQUFDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDQyxDQUFDLENBQUM7SUFBQztJQUFBLE9BQU9GLENBQUM7RUFBQTtFQUFDLFNBQVNVLEdBQUMsQ0FBQ1YsQ0FBQyxFQUFDO0lBQUMsSUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNXLFVBQVU7SUFBQ1YsQ0FBQyxJQUFFQSxDQUFDLENBQUNXLFdBQVcsQ0FBQ1osQ0FBQyxDQUFBO0VBQUM7RUFBQyxTQUFT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RUFBQzVCLENBQUMsQ0FBQzRCLEdBQUcsR0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUcsSUFBSSxJQUFFM0IsQ0FBQyxJQUFFQyxDQUFDLElBQUVDLENBQUMsSUFBRSxJQUFJLElBQUVELENBQUMsQ0FBQ1EsVUFBVSxFQUFDWCxDQUFDLEVBQUMsSUFBRyxJQUFJLElBQUVJLENBQUMsSUFBRUEsQ0FBQyxDQUFDTyxVQUFVLEtBQUdYLENBQUMsRUFBQ0EsQ0FBQyxDQUFDaUUsV0FBVyxDQUFDOUQsQ0FBQyxDQUFDLEVBQUNFLENBQUMsR0FBQyxJQUFJLENBQUMsS0FBSTtNQUFDLEtBQUlDLENBQUMsR0FBQ0YsQ0FBQyxFQUFDRyxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUNELENBQUMsR0FBQ0EsQ0FBQyxDQUFDNEQsV0FBVyxLQUFHM0QsQ0FBQyxHQUFDTyxDQUFDLENBQUNFLE1BQU0sRUFBQ1QsQ0FBQyxJQUFFLENBQUM7UUFBQyxJQUFHRCxDQUFDLElBQUVILENBQUMsRUFBQyxNQUFNSCxDQUFDO01BQUM7TUFBQUEsQ0FBQyxDQUFDbUUsWUFBWSxDQUFDaEUsQ0FBQyxFQUFDQyxDQUFDLENBQUMsRUFBQ0MsQ0FBQyxHQUFDRCxDQUFBO0lBQUM7SUFBQyxPQUFPLEtBQUssQ0FBQyxLQUFHQyxDQUFDLEdBQUNBLENBQUMsR0FBQ0YsQ0FBQyxDQUFDK0QsV0FBVztFQUFBO0VBQUMsU0FBU1IsR0FBQyxDQUFDMUQsQ0FBQyxFQUFDQyxDQUFDLEVBQUNDLENBQUMsRUFBQ1ksQ0FBQyxFQUFDWCxDQUFDLEVBQUM7SUFBQyxJQUFJQyxDQUFDO0lBQUMsS0FBSUEsQ0FBQyxJQUFJRixDQUFDO01BQUMsVUFBVSxLQUFHRSxDQUFDLElBQUUsS0FBSyxLQUFHQSxDQUFDLElBQUVBLENBQUMsSUFBSUgsQ0FBQyxJQUFFbUUsR0FBQyxDQUFDcEUsQ0FBQyxFQUFDSSxDQUFDLEVBQUMsSUFBSSxFQUFDRixDQUFDLENBQUNFLENBQUMsQ0FBQyxFQUFDVSxDQUFDLENBQUM7SUFBQztJQUFBLEtBQUlWLENBQUMsSUFB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RUFBRUMsR0FBRyxDQUFDO0lBQy9DO0VBQ0w7RUNkQSxTQUFTOVEsQ0FBQyxDQUFDRSxDQUFDLEVBQUM7SUFBQyxJQUFJSixDQUFDO01BQUNHLENBQUM7TUFBQ04sQ0FBQyxHQUFDLEVBQUU7SUFBQyxJQUFHLFFBQVEsSUFBRSxPQUFPTyxDQUFDLElBQUUsUUFBUSxJQUFFLE9BQU9BLENBQUMsRUFBQ1AsQ0FBQyxJQUFFTyxDQUFDLENBQUMsS0FBSyxJQUFHLFFBQVEsSUFBRSxPQUFPQSxDQUFDLEVBQUMsSUFBR29ELEtBQUssQ0FBQ0MsT0FBTyxDQUFDckQsQ0FBQyxDQUFDLEVBQUMsS0FBSUosQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDSSxDQUFDLENBQUNTLE1BQU0sRUFBQ2IsQ0FBQyxFQUFFO01BQUNJLENBQUMsQ0FBQ0osQ0FBQyxDQUFDLEtBQUdHLENBQUMsR0FBQ0QsQ0FBQyxDQUFDRSxDQUFDLENBQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBR0gsQ0FBQyxLQUFHQSxDQUFDLElBQUUsR0FBRyxDQUFDLEVBQUNBLENBQUMsSUFBRU0sQ0FBQyxDQUFDO0lBQUMsT0FBSyxLQUFJSCxDQUFDLElBQUlJLENBQUM7TUFBQ0EsQ0FBQyxDQUFDSixDQUFDLENBQUMsS0FBR0gsQ0FBQyxLQUFHQSxDQUFDLElBQUUsR0FBRyxDQUFDLEVBQUNBLENBQUMsSUFBRUcsQ0FBQyxDQUFDO0lBQUM7SUFBQSxPQUFPSCxDQUFDO0VBQUE7RUFBUSxTQUFTcVIsSUFBSSxHQUFFO0lBQUMsS0FBSSxJQUFJOVEsQ0FBQyxFQUFDSixDQUFDLEVBQUNHLENBQUMsR0FBQyxDQUFDLEVBQUNOLENBQUMsR0FBQyxFQUFFLEVBQUNNLENBQUMsR0FBQ1MsU0FBUyxDQUFDQyxNQUFNO01BQUUsQ0FBQ1QsQ0FBQyxHQUFDUSxTQUFTLENBQUNULENBQUMsRUFBRSxDQUFDLE1BQUlILENBQUMsR0FBQ0UsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQyxLQUFHUCxDQUFDLEtBQUdBLENBQUMsSUFBRSxHQUFHLENBQUMs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
