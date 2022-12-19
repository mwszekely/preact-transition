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
      return q$1(children, finalProps);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWdldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy90aW1pbmcvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL2NvbnRleHQuanMiLCIuLi90cmFuc2l0aW9uYWJsZS5qcyIsIi4uL2NsaXAuanMiLCIuLi9mYWRlLmpzIiwiLi4vY2xpcC1mYWRlLmpzIiwiLi4vY29sbGFwc2UuanMiLCIuLi9jb2xsYXBzZS1mYWRlLmpzIiwiLi4vc2xpZGUuanMiLCIuLi9zbGlkZS1mYWRlLmpzIiwiLi4vem9vbS5qcyIsIi4uL3pvb20tZmFkZS5qcyIsIi4uL3NsaWRlLXpvb20uanMiLCIuLi9zbGlkZS16b29tLWZhZGUuanMiLCIuLi9mbGlwLmpzIiwiLi4vc3dhcHBhYmxlLmpzIiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB2KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24geSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBfKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9fKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP18obik6bnVsbH1mdW5jdGlvbiBrKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gayhuKX19ZnVuY3Rpb24gYihuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8c2V0VGltZW91dCkoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1zKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9fKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmayh0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGMscyxhKXt2YXIgaCx5LGQsayxiLGcsdyx4PWkmJmkuX19rfHxlLEM9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHAse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksay5yZWY/ay5yZWY6bnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oZD14W2hdKXx8ZCYmay5rZXk9PWQua2V5JiZrLnR5cGU9PT1kLnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IoeT0wO3k8Qzt5Kyspe2lmKChkPXhbeV0pJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl7eFt5XT12b2lkIDA7YnJlYWt9ZD1udWxsfWoobixrLGQ9ZHx8Zix0LG8scixjLHMsYSksYj1rLl9fZSwoeT1rLnJlZikmJmQucmVmIT15JiYod3x8KHc9W10pLGQucmVmJiZ3LnB1c2goZC5yZWYsbnVsbCxrKSx3LnB1c2goeSxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09ZyYmKGc9YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZrLl9faz09PWQuX19rP2suX19kPXM9bShrLHMsbik6cz1BKG4sayxkLHgsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmZC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9XyhkKSl9Zm9yKHUuX19lPWcsaD1DO2gtLTspbnVsbCE9eFtoXSYmTih4W2hdLHhbaF0pO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylNKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gbShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP20oaSxsLHUpOkEodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24geChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBBKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MSlpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJi0xPT1sLmluZGV4T2YoXCItXCIpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgYSxoLHYseSxfLGssYixnLG0seCxBLEMsJCxILEksVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1sLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl7aWYoZz11LnByb3BzLG09KGE9VC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT9tP20ucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFQoZyx4KToodS5fX2M9aD1uZXcgZChnLHgpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1PKSxtJiZtLnN1YihoKSxoLnByb3BzPWcsaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSxoLl9zYj1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyxoLl9fcykpKSx5PWgucHJvcHMsXz1oLnN0YXRlLHYpbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShnLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtmb3IoaC5wcm9wcz1nLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxBPTA7QTxoLl9zYi5sZW5ndGg7QSsrKWguX19oLnB1c2goaC5fc2JbQV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoZyxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHksXyxrKX0pfWlmKGguY29udGV4dD14LGgucHJvcHM9ZyxoLl9fdj11LGguX19QPW4sQz1sLl9fciwkPTAsXCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcil7Zm9yKGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsQyYmQyh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLEg9MDtIPGguX3NiLmxlbmd0aDtIKyspaC5fX2gucHVzaChoLl9zYltIXSk7aC5fc2I9W119ZWxzZSBkb3toLl9fZD0hMSxDJiZDKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKyskPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxfKSksST1udWxsIT1hJiZhLnR5cGU9PT1wJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsdyhuLEFycmF5LmlzQXJyYXkoSSk/STpbSV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPWwuZGlmZmVkKSYmYSh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZSxjKXt2YXIgcyxoLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksaD0oeT1pLnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyh2fHxoKSYmKHYmJihoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKGs9dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShrKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixlLHI/clswXTppLl9fayYmXyhpLDApLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZhKHJba10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYha3x8XCJvcHRpb25cIj09PWQmJmshPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KGs9cC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsaXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8YShuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBQKHUsaSx0KXt2YXIgbyxyLGU7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZT1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz1oKHAsbnVsbCxbdV0pLHJ8fGYsZix2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGUsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGUsdSl9ZnVuY3Rpb24gUyhuLGwpe1AobixsLFMpfWZ1bmN0aW9uIHEobCx1LGkpe3ZhciB0LG8scixmPXMoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksdihsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBCKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGIpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49ZS5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksYih0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXAsdD1bXSxnLl9fcj0wLHI9MDtleHBvcnR7ZCBhcyBDb21wb25lbnQscCBhcyBGcmFnbWVudCxxIGFzIGNsb25lRWxlbWVudCxCIGFzIGNyZWF0ZUNvbnRleHQsaCBhcyBjcmVhdGVFbGVtZW50LHkgYXMgY3JlYXRlUmVmLGgsUyBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLFAgYXMgcmVuZGVyLHggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9W10sZT1uLl9fYixhPW4uX19yLHY9bi5kaWZmZWQsbD1uLl9fYyxtPW4udW5tb3VudDtmdW5jdGlvbiBkKHQsdSl7bi5fX2gmJm4uX19oKHIsdCxvfHx1KSxvPTA7dmFyIGk9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe19fVjpjfSksaS5fX1t0XX1mdW5jdGlvbiBwKG4pe3JldHVybiBvPTEseShCLG4pfWZ1bmN0aW9uIHkobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpCKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7ci51PSEwO3ZhciBmPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlO3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hZnx8Zi5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPSExO3JldHVybiB1LmZvckVhY2goZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSwhKCFpJiZvLl9fYy5wcm9wcz09PW4pJiYoIWZ8fGYuY2FsbCh0aGlzLG4sdCxyKSl9fXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiBoKHUsaSl7dmFyIG89ZCh0KyssMyk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiBzKHUsaSl7dmFyIG89ZCh0KyssNCk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19oLnB1c2gobykpfWZ1bmN0aW9uIF8obil7cmV0dXJuIG89NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCxyKXtvPTYscyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIHoodS5fX0gscik/KHUuX19WPW4oKSx1Lmk9cix1Ll9faD1uLHUuX19WKTp1Ll9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbz04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCxyKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShyP3IodCk6dCl9ZnVuY3Rpb24gUChuKXt2YXIgdT1kKHQrKywxMCksaT1wKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBWKCl7dmFyIG49ZCh0KyssMTEpO2lmKCFuLl9fKXtmb3IodmFyIHU9ci5fX3Y7bnVsbCE9PXUmJiF1Ll9fbSYmbnVsbCE9PXUuX187KXU9dS5fXzt2YXIgaT11Ll9fbXx8KHUuX19tPVswLDBdKTtuLl9fPVwiUFwiK2lbMF0rXCItXCIraVsxXSsrfXJldHVybiBuLl9ffWZ1bmN0aW9uIGIoKXtmb3IodmFyIHQ7dD1mLnNoaWZ0KCk7KWlmKHQuX19QJiZ0Ll9fSCl0cnl7dC5fX0guX19oLmZvckVhY2goayksdC5fX0guX19oLmZvckVhY2godyksdC5fX0guX19oPVtdfWNhdGNoKHIpe3QuX19ILl9faD1bXSxuLl9fZShyLHQuX192KX19bi5fX2I9ZnVuY3Rpb24obil7cj1udWxsLGUmJmUobil9LG4uX19yPWZ1bmN0aW9uKG4pe2EmJmEobiksdD0wO3ZhciBpPShyPW4uX19jKS5fX0g7aSYmKHU9PT1yPyhpLl9faD1bXSxyLl9faD1bXSxpLl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5fX04mJihuLl9fPW4uX19OKSxuLl9fVj1jLG4uX19OPW4uaT12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goayksaS5fX2guZm9yRWFjaCh3KSxpLl9faD1bXSkpLHU9cn0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmKG8uX19ILl9faC5sZW5ndGgmJigxIT09Zi5wdXNoKG8pJiZpPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgoaT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGopKGIpKSxvLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe24uaSYmKG4uX19IPW4uaSksbi5fX1YhPT1jJiYobi5fXz1uLl9fViksbi5pPXZvaWQgMCxuLl9fVj1jfSkpLHU9cj1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHIpe3Iuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChrKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fHcobil9KX1jYXRjaCh1KXtyLnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSxyPVtdLG4uX19lKHUsdC5fX3YpfX0pLGwmJmwodCxyKX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe20mJm0odCk7dmFyIHIsdT10Ll9fYzt1JiZ1Ll9fSCYmKHUuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2sobil9Y2F0Y2gobil7cj1ufX0pLHUuX19IPXZvaWQgMCxyJiZuLl9fZShyLHUuX192KSl9O3ZhciBnPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBqKG4pe3ZhciB0LHI9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQodSksZyYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0sdT1zZXRUaW1lb3V0KHIsMTAwKTtnJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocikpfWZ1bmN0aW9uIGsobil7dmFyIHQ9cix1PW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHUmJihuLl9fYz12b2lkIDAsdSgpKSxyPXR9ZnVuY3Rpb24gdyhuKXt2YXIgdD1yO24uX19jPW4uX18oKSxyPXR9ZnVuY3Rpb24geihuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCxyKXtyZXR1cm4gdCE9PW5bcl19KX1mdW5jdGlvbiBCKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e1QgYXMgdXNlQ2FsbGJhY2sscSBhcyB1c2VDb250ZXh0LHggYXMgdXNlRGVidWdWYWx1ZSxoIGFzIHVzZUVmZmVjdCxQIGFzIHVzZUVycm9yQm91bmRhcnksViBhcyB1c2VJZCxBIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUscyBhcyB1c2VMYXlvdXRFZmZlY3QsRiBhcyB1c2VNZW1vLHkgYXMgdXNlUmVkdWNlcixfIGFzIHVzZVJlZixwIGFzIHVzZVN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtDb21wb25lbnQgYXMgbixjcmVhdGVFbGVtZW50IGFzIHQsb3B0aW9ucyBhcyBlLHRvQ2hpbGRBcnJheSBhcyByLEZyYWdtZW50IGFzIHUscmVuZGVyIGFzIG8saHlkcmF0ZSBhcyBpLGNyZWF0ZUNvbnRleHQgYXMgbCxjcmVhdGVSZWYgYXMgYyxjbG9uZUVsZW1lbnQgYXMgZn1mcm9tXCJwcmVhY3RcIjtleHBvcnR7Q29tcG9uZW50LEZyYWdtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlRWxlbWVudCxjcmVhdGVSZWZ9ZnJvbVwicHJlYWN0XCI7aW1wb3J0e3VzZVN0YXRlIGFzIGEsdXNlSWQgYXMgcyx1c2VSZWR1Y2VyIGFzIGgsdXNlRWZmZWN0IGFzIHYsdXNlTGF5b3V0RWZmZWN0IGFzIGQsdXNlUmVmIGFzIHAsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBtLHVzZU1lbW8gYXMgeSx1c2VDYWxsYmFjayBhcyBfLHVzZUNvbnRleHQgYXMgYix1c2VEZWJ1Z1ZhbHVlIGFzIFN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2Z1bmN0aW9uIGcobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuIG49PT10JiYoMCE9PW58fDEvbj09MS90KXx8biE9biYmdCE9dH1mdW5jdGlvbiB3KG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBSKG4sZSl7ZnVuY3Rpb24gcihuKXt2YXIgdD10aGlzLnByb3BzLnJlZixyPXQ9PW4ucmVmO3JldHVybiFyJiZ0JiYodC5jYWxsP3QobnVsbCk6dC5jdXJyZW50PW51bGwpLGU/IWUodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPXIsdChuLGUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix1LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHUuX19mPSEwLHV9KHcucHJvdG90eXBlPW5ldyBuKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCx3LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB4PWUuX19iO2UuX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx4JiZ4KG4pfTt2YXIgTj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24gayhuKXtmdW5jdGlvbiB0KHQpe3ZhciBlPWcoe30sdCk7cmV0dXJuIGRlbGV0ZSBlLnJlZixuKGUsdC5yZWZ8fG51bGwpfXJldHVybiB0LiQkdHlwZW9mPU4sdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIEE9ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnIocihuKS5tYXAodCkpfSxPPXttYXA6QSxmb3JFYWNoOkEsY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/cihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1yKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnJ9LFQ9ZS5fX2U7ZS5fX2U9ZnVuY3Rpb24obix0LGUscil7aWYobi50aGVuKWZvcih2YXIgdSxvPXQ7bz1vLl9fOylpZigodT1vLl9fYykmJnUuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSx1Ll9fYyhuLHQpO1Qobix0LGUscil9O3ZhciBJPWUudW5tb3VudDtmdW5jdGlvbiBMKG4sdCxlKXtyZXR1cm4gbiYmKG4uX19jJiZuLl9fYy5fX0gmJihuLl9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLG4uX19jLl9fSD1udWxsKSxudWxsIT0obj1nKHt9LG4pKS5fX2MmJihuLl9fYy5fX1A9PT1lJiYobi5fX2MuX19QPXQpLG4uX19jPW51bGwpLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIEwobix0LGUpfSkpLG59ZnVuY3Rpb24gVShuLHQsZSl7cmV0dXJuIG4mJihuLl9fdj1udWxsLG4uX19rPW4uX19rJiZuLl9fay5tYXAoZnVuY3Rpb24obil7cmV0dXJuIFUobix0LGUpfSksbi5fX2MmJm4uX19jLl9fUD09PXQmJihuLl9fZSYmZS5pbnNlcnRCZWZvcmUobi5fX2Usbi5fX2QpLG4uX19jLl9fZT0hMCxuLl9fYy5fX1A9ZSkpLG59ZnVuY3Rpb24gRCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBGKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fYSYmdC5fX2Eobil9ZnVuY3Rpb24gTShuKXt2YXIgZSxyLHU7ZnVuY3Rpb24gbyhvKXtpZihlfHwoZT1uKCkpLnRoZW4oZnVuY3Rpb24obil7cj1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3U9bn0pLHUpdGhyb3cgdTtpZighcil0aHJvdyBlO3JldHVybiB0KHIsbyl9cmV0dXJuIG8uZGlzcGxheU5hbWU9XCJMYXp5XCIsby5fX2Y9ITAsb31mdW5jdGlvbiBWKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9ZS51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksSSYmSShuKX0sKEQucHJvdG90eXBlPW5ldyBuKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1GKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19hKXt2YXIgbj1yLnN0YXRlLl9fYTtyLl9fdi5fX2tbMF09VShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2E6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19hOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxELnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sRC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sZSl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxvPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPUwodGhpcy5fX2IscixvLl9fTz1vLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgaT1lLl9fYSYmdCh1LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIGkmJihpLl9faD1udWxsKSxbdCh1LG51bGwsZS5fX2E/bnVsbDpuLmNoaWxkcmVuKSxpXX07dmFyIFc9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gUChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uICQobil7dmFyIGU9dGhpcyxyPW4uaTtlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7byhudWxsLGUubCksZS5sPW51bGwsZS5pPW51bGx9LGUuaSYmZS5pIT09ciYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192PyhlLmx8fChlLmk9cixlLmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTpyLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obix0KXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLGUuaS5yZW1vdmVDaGlsZChuKX19KSxvKHQoUCx7Y29udGV4dDplLmNvbnRleHR9LG4uX192KSxlLmwpKTplLmwmJmUuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBqKG4sZSl7dmFyIHI9dCgkLHtfX3Y6bixpOmV9KTtyZXR1cm4gci5jb250YWluZXJJbmZvPWUscn0oVi5wcm90b3R5cGU9bmV3IG4pLl9fYT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9Rih0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVyh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LFYucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1yKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxWLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Vi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VyhuLGUsdCl9KX07dmFyIHo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLEI9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sSD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsWj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIFkobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksbyhuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gcShuLHQsZSl7cmV0dXJuIGkobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfW4ucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4ucHJvdG90eXBlLHQse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIit0XX0sc2V0OmZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLHQse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpufSl9fSl9KTt2YXIgRz1lLmV2ZW50O2Z1bmN0aW9uIEooKXt9ZnVuY3Rpb24gSygpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBRKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1lLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBHJiYobj1HKG4pKSxuLnBlcnNpc3Q9SixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPUssbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9USxuLm5hdGl2ZUV2ZW50PW59O3ZhciBYLG5uPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSx0bj1lLnZub2RlO2Uudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyx1PWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciBvPS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIGkgaW4gdT17fSxlKXt2YXIgbD1lW2ldO0gmJlwiY2hpbGRyZW5cIj09PWkmJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PWkmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1sfHwoXCJkZWZhdWx0VmFsdWVcIj09PWkmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/aT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09aSYmITA9PT1sP2w9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QoaSk/aT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QoaSt0KSYmIVooZS50eXBlKT9pPVwib25pbnB1dFwiOi9eb25mb2N1cyQvaS50ZXN0KGkpP2k9XCJvbmZvY3VzaW5cIjovXm9uYmx1ciQvaS50ZXN0KGkpP2k9XCJvbmZvY3Vzb3V0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpP2k9aS50b0xvd2VyQ2FzZSgpOm8mJkIudGVzdChpKT9pPWkucmVwbGFjZSgvW0EtWjAtOV0vZyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1sJiYobD12b2lkIDApLC9eb25pbnB1dCQvaS50ZXN0KGkpJiYoaT1pLnRvTG93ZXJDYXNlKCksdVtpXSYmKGk9XCJvbmlucHV0Q2FwdHVyZVwiKSksdVtpXT1sKX1cInNlbGVjdFwiPT10JiZ1Lm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHUudmFsdWUpJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9dS52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXUuZGVmYXVsdFZhbHVlJiYodS52YWx1ZT1yKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD11Lm11bHRpcGxlPy0xIT11LmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnUuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9dSxlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKG5uLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJih1LmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLG5uKSl9bi4kJHR5cGVvZj16LHRuJiZ0bihuKX07dmFyIGVuPWUuX19yO2UuX19yPWZ1bmN0aW9uKG4pe2VuJiZlbihuKSxYPW4uX19jfTt2YXIgcm49e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBYLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LHVuPVwiMTcuMC4yXCI7ZnVuY3Rpb24gb24obil7cmV0dXJuIHQuYmluZChudWxsLG4pfWZ1bmN0aW9uIGxuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PXp9ZnVuY3Rpb24gY24obil7cmV0dXJuIGxuKG4pP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gZm4obil7cmV0dXJuISFuLl9fayYmKG8obnVsbCxuKSwhMCl9ZnVuY3Rpb24gYW4obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgc249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0saG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sdm49dTtmdW5jdGlvbiBkbihuKXtuKCl9ZnVuY3Rpb24gcG4obil7cmV0dXJuIG59ZnVuY3Rpb24gbW4oKXtyZXR1cm5bITEsZG5dfXZhciB5bj1kO2Z1bmN0aW9uIF9uKG4sdCl7dmFyIGU9dCgpLHI9YSh7aDp7X186ZSx2OnR9fSksdT1yWzBdLmgsbz1yWzFdO3JldHVybiBkKGZ1bmN0aW9uKCl7dS5fXz1lLHUudj10LEUodS5fXyx0KCkpfHxvKHtoOnV9KX0sW24sZSx0XSksdihmdW5jdGlvbigpe3JldHVybiBFKHUuX18sdS52KCkpfHxvKHtoOnV9KSxuKGZ1bmN0aW9uKCl7RSh1Ll9fLHUudigpKXx8byh7aDp1fSl9KX0sW25dKSxlfXZhciBibj17dXNlU3RhdGU6YSx1c2VJZDpzLHVzZVJlZHVjZXI6aCx1c2VFZmZlY3Q6dix1c2VMYXlvdXRFZmZlY3Q6ZCx1c2VJbnNlcnRpb25FZmZlY3Q6eW4sdXNlVHJhbnNpdGlvbjptbix1c2VEZWZlcnJlZFZhbHVlOnBuLHVzZVN5bmNFeHRlcm5hbFN0b3JlOl9uLHN0YXJ0VHJhbnNpdGlvbjpkbix1c2VSZWY6cCx1c2VJbXBlcmF0aXZlSGFuZGxlOm0sdXNlTWVtbzp5LHVzZUNhbGxiYWNrOl8sdXNlQ29udGV4dDpiLHVzZURlYnVnVmFsdWU6Uyx2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46TyxyZW5kZXI6WSxoeWRyYXRlOnEsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpmbixjcmVhdGVQb3J0YWw6aixjcmVhdGVFbGVtZW50OnQsY3JlYXRlQ29udGV4dDpsLGNyZWF0ZUZhY3Rvcnk6b24sY2xvbmVFbGVtZW50OmNuLGNyZWF0ZVJlZjpjLEZyYWdtZW50OnUsaXNWYWxpZEVsZW1lbnQ6bG4sZmluZERPTU5vZGU6YW4sQ29tcG9uZW50Om4sUHVyZUNvbXBvbmVudDp3LG1lbW86Uixmb3J3YXJkUmVmOmssZmx1c2hTeW5jOmhuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOnNuLFN0cmljdE1vZGU6dm4sU3VzcGVuc2U6RCxTdXNwZW5zZUxpc3Q6VixsYXp5Ok0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6cm59O2V4cG9ydHtPIGFzIENoaWxkcmVuLHcgYXMgUHVyZUNvbXBvbmVudCx2biBhcyBTdHJpY3RNb2RlLEQgYXMgU3VzcGVuc2UsViBhcyBTdXNwZW5zZUxpc3Qscm4gYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQsY24gYXMgY2xvbmVFbGVtZW50LG9uIGFzIGNyZWF0ZUZhY3RvcnksaiBhcyBjcmVhdGVQb3J0YWwsYm4gYXMgZGVmYXVsdCxhbiBhcyBmaW5kRE9NTm9kZSxobiBhcyBmbHVzaFN5bmMsayBhcyBmb3J3YXJkUmVmLHEgYXMgaHlkcmF0ZSxsbiBhcyBpc1ZhbGlkRWxlbWVudCxNIGFzIGxhenksUiBhcyBtZW1vLFkgYXMgcmVuZGVyLGRuIGFzIHN0YXJ0VHJhbnNpdGlvbixmbiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLHNuIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLHBuIGFzIHVzZURlZmVycmVkVmFsdWUseW4gYXMgdXNlSW5zZXJ0aW9uRWZmZWN0LF9uIGFzIHVzZVN5bmNFeHRlcm5hbFN0b3JlLG1uIGFzIHVzZVRyYW5zaXRpb24sdW4gYXMgdmVyc2lvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG4vKipcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cbiAqIE5hbWVseSBpdCBpbnZvbHZlcyBkZS1ndW5raW5nIHRoZSB0eXBlIHN5c3RlbSBieSBsZXR0aW5nIHVzIHJldHVybiAqZ2VuZXJpYyogZnVuY3Rpb24gYW5kIHBsYXlpbmcgbmljZSB3aXRoIFJlYWN0LiBJbiBhbGwgb3RoZXIgcmVzcGVjdHMsIGl0IGFjdHMgbGlrZSBgZm9yd2FyZFJlZmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcbiAgICBjb25zdCBGb3J3YXJkZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKENvbXBvbmVudCk7XG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcndhcmQtZWxlbWVudC1yZWYuanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogRGVidWcgaG9vay5cbiAqXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICpcbiAqIEV2ZW50dWFsbHksIHdoZW4gdXNlRXZlbnQgbGFuZHMsIHdlIGhvcGVmdWxseSB3b24ndCBuZWVkIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHkocGFyZW50SG9va05hbWUsIC4uLnZhbHVlcykge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMCA/IEpTT04uc3RyaW5naWZ5KHZhbHVlc1tpXSkgOiBcInRoZSBudW1iZXIgb2Ygc3VwcG9zZWRseSBzdGFibGUgZWxlbWVudHNcIn0pLmApO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudFtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGYpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmKFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcbiAgICB9LCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcsIHJlYXNvbikgPT4ge1xuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyBTYXZlIG91ciBjdXJyZW50IHZhbHVlIHNvIHRoYXQgd2UgY2FuIGNvbXBhcmUgYWdhaW5zdCBpdCBsYXRlclxuICAgICAgICAgICAgLy8gKGlmIHdlIGZsaXAgYmFjayB0byB0aGlzIHN0YXRlLCB0aGVuIHdlIHdvbid0IHNlbmQgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uKVxuICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IHZhbHVlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRSZWFzb24gPSByZWFzb25SZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RGVwID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGVwID0gZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCAhPSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGZpbmlzaGVkIHdpdGggZXZlcnl0aGluZywgc28gbWFyayB1cyBhcyBiZWluZyBvbiBhIGNsZWFuIHNsYXRlIGFnYWluLlxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSBVbnNldDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcbi8vIEVhc3kgY29uc3RhbnRzIGZvciBnZXRJbml0aWFsVmFsdWVcbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblVuZGVmaW5lZCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblplcm8oKSB7IHJldHVybiAwOyB9XG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkodCkgeyByZXR1cm4gdDsgfSAvLyBLaW5kIG9mIGFuIGV4dHJhLCBidXQgaXQncyB1c2VmdWwgaW4gb3RoZXIgcGxhY2VzIGFueXdheVxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byB1c2UgZm9yIGBjdXN0b21EZWJvdW5jZVJlbmRlcmluZ2AgdGhhdCBjYXVzZXMgYHVzZVBhc3NpdmVTdGF0ZWAgdG8gcnVuIGNoYW5nZXMgd2l0aG91dCB3YWl0aW5nIGEgdGljay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkltbWVkaWF0ZWx5KGYpIHsgZigpOyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5mdW5jdGlvbiBiYXNlNjQodmFsdWUpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqXG4gKlxuICogKFRoaXMgaXMgaGVyZSwgaW4gdGhpcyBwYXJ0aWN1bGFyIGZpbGUsIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICogd2l0aG91dCBhbHNvIG1ha2luZyBhIHV0aWxpdGllcyBmaWxlLlxuICogT25jZSB3ZSBjYW4gcmVtb3ZlIHRoaXMgaG9vaywgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIGJhY2sgd2l0aCB1c2VSYW5kb21JZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbi8vXG4vLyAuLi5cbi8vIFdlbGwsIHVzZUV2ZW50IG9yIHdoYXRldmVyIGlzIGZpbmFsbHksIGZpbmFsbHkgNCB5ZWFycyBsYXRlciBmaW5hbGx5IGhlcmVcbi8vIHdoaWNoIGlzIGNvb2wgYW5kIG1lYW5zIHdlIHdvbid0IG5lZWQgdGhpcyBhdCBhbGwgc29vbi5cbi8vIFNvIGZvciBub3cgd2UnbGwgc3RpY2sgd2l0aCBkaWZmIHRvIHByZXZlbnQgYW55IHdlaXJkbmVzcyB3aXRoXG4vLyBjb21taXQgYmVpbmcgcHJpdmF0ZSBhbmQgYWxsLlxuY29uc3QgY29tbWl0TmFtZSA9IFwiZGlmZmVkXCI7XG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV07XG5jb25zdCBuZXdDb21taXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufTtcbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQ7XG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKlxuICogQHBhcmFtIGVmZmVjdFxuICogQHBhcmFtIGlucHV0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdCwgaW5wdXRzKSB7XG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICBpZiAoZWZmZWN0KVxuICAgICAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgZWxzZVxuICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaWRdKTtcbn1cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcbiAgICAgICAgb2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3M/Lmxlbmd0aCB8fFxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUJlZm9yZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0pLCBbdmFsdWVdKTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgPT09IFVuc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZHVyaW5nIHJlbmRlci4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xufVxuLyoqXG4gKiBMaWtlIGB1c2VTdGFibGVHZXR0ZXJgLCBidXQgKioqcmVxdWlyZXMqKiogdGhhdCBldmVyeXRoaW5nIGluIHRoZSBvYmplY3QgaXMgYWxzbyBzdGFibGUsXG4gKiBhbmQgaW4gdHVybiByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGl0c2VsZiBpcyBzdGFibGUuXG4gKiBAcGFyYW0gdFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZU9iamVjdCh0KSB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhYmxlLWdldHRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHMsIHJocykge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxuICogQHBhcmFtIHJocyBDbGFzc2VzIG9mIHRoZSBzZWNvbmQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENsYXNzZXMobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSwgcmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHJocywgbGhzKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9LCBbbGhzLCByaHNdKTtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMpLCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGAke2xoc307JHtyaHMgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pLFxuICAgICAgICAuLi4ocmhzID8/IHt9KVxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG4vKlxudHlwZSBJc0VtcHR5T2JqZWN0PFQ+ID0gW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXT8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgdHlwZSBFeHRyYWN0ZWRQcm9wczxPIGV4dGVuZHMge30+ID0geyBbSyBpbiBrZXlvZiBPXTogUGljazxPW0tdLCAoXCJwcm9wc1N0YWJsZVwiIHwgXCJwcm9wc1Vuc3RhYmxlXCIpICYga2V5b2YgT1tLXT4gfTtcblxuY29uc3QgbzogRXh0cmFjdGVkUHJvcHM8VXNlR3JpZE5hdmlnYXRpb25Sb3dSZXR1cm5UeXBlPGFueSwgYW55Pj4gPSB7XG4gICAgYXNDaGlsZFJvd09mVGFibGU6IHtcblxuICAgIH0sXG4gICAgYXNQYXJlbnRSb3dPZkNlbGxzOiB7fVxufSovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcyguLi5hbGxQcm9wcykge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1lcmdlZFByb3BzXCIsIGFsbFByb3BzLmxlbmd0aCk7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczIocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuY29uc3Qga25vd25zID0gbmV3IFNldChbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pO1xuZnVuY3Rpb24gbWVyZ2VVbmtub3duKGtleSwgbGhzVmFsdWUsIHJoc1ZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZTtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgbG9nPy4oYFRoZSBwcm9wIFwiJHtrZXl9XCIgY2Fubm90IHNpbXVsdGFuZW91c2x5IGJlIHRoZSB2YWx1ZXMgJHtsaHNWYWx1ZX0gYW5kICR7cmhzVmFsdWV9LiBPbmUgbXVzdCBiZSBjaG9zZW4gb3V0c2lkZSBvZiB1c2VNZXJnZWRQcm9wcy5gKTtcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyKGxoc0FsbCwgcmhzQWxsKSB7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMobGhzQWxsLnJlZiwgcmhzQWxsLnJlZiksXG4gICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzQWxsLnN0eWxlLCByaHNBbGwuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzQWxsW1wiY2xhc3NcIl0sIGxoc0FsbC5jbGFzc05hbWUsIHJoc0FsbFtcImNsYXNzXCJdLCByaHNBbGwuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbC5jaGlsZHJlbiwgcmhzQWxsLmNoaWxkcmVuKSxcbiAgICB9O1xuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0W1wiY2xhc3NcIl0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldFtcImNsYXNzXCJdO1xuICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcbiAgICBmb3IgKGNvbnN0IGxoc0tleVUgaW4gbGhzQWxsKSB7XG4gICAgICAgIGNvbnN0IGxoc0tleSA9IGxoc0tleVU7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG4gICAgZm9yIChjb25zdCByaHNLZXlVIGluIHJoc0FsbCkge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhyaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VVbmtub3duKHJoc0tleSwgcmV0W3Joc0tleV0sIHJoc0FsbFtyaHNLZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBydiA9IHJocyguLi5hcmdzKTtcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLypcbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50UHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+KHI6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPEU+LCAuLi5vdGhlclByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSB7XG4gICAgcmV0dXJuIFtyLnJlZkVsZW1lbnRSZXR1cm4ucHJvcHNTdGFibGUsIC4uLm90aGVyUHJvcHNdO1xufSovXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xuICAgIGNvbnN0IHsgcmVmRWxlbWVudFBhcmFtZXRlcnM6IHsgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQgfSB9ID0gYXJncztcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VSZWZFbGVtZW50XCIsIG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50KTtcbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBbXSk7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWYoeyByZWY6IHNldEVsZW1lbnQgfSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghSFRNTEVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuaW1wb3J0IHN0dWJGYWxzZSBmcm9tICcuL3N0dWJGYWxzZS5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCdWZmZXI7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJwcmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwibG9kYXNoLWVzL25vb3BcIjtcbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChjb250ZXh0SW5mby5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGNvbnRleHRJbmZvLmN1cnJlbnQgPSB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9O1xuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZihudWxsKTtcbiAgICBpZiAoYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IC0xO1xuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChfanN4KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dEluZm8uY3VycmVudCwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn1cbi8qKlxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICpcbiAqIFBhc3NpbmcgYG51bGxgIGlzIGZpbmUgYW5kIHNpbXBseSBzdG9wcyB0aGUgZWZmZWN0IHVudGlsIHlvdSByZXN0YXJ0IGl0IGJ5IHByb3ZpZGluZyBhIG5vbi1udWxsIGNhbGxiYWNrLlxuICpcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2sgPz8gbm9vcCk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5leHBvcnQgY29uc3QgU3dhcHBhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsImltcG9ydCB7IGNsb25lRWxlbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHJldHVybk51bGwsIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJ1bkltbWVkaWF0ZWx5IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdENsYXNzQmFzZShnaXZlbikge1xuICAgIHJldHVybiBnaXZlbiA/PyBcInB0bFwiO1xufVxuZnVuY3Rpb24gZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShgdHJhbnNpdGlvbi1kdXJhdGlvbmApKS5zcGxpdChcIixcIikubWFwKHN0ciA9PiB7XG4gICAgICAgIGlmIChzdHIuZW5kc1dpdGgoXCJtc1wiKSlcbiAgICAgICAgICAgIHJldHVybiArc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMik7XG4gICAgICAgIGlmIChzdHIuZW5kc1dpdGgoXCJzXCIpKVxuICAgICAgICAgICAgcmV0dXJuICgrc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSkpICogMTAwMDtcbiAgICAgICAgcmV0dXJuIDEwMDA7XG4gICAgfSkpO1xufVxuZnVuY3Rpb24gcGFyc2VTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICByZXR1cm4gbmV4dFN0YXRlLnNwbGl0KFwiLVwiKTtcbn1cbi8qKlxuICogUHJvdmlkZSBwcm9wcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFuaW1hdGUgYSB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VUcmFuc2l0aW9uKHsgc2hvdzogdiwgYW5pbWF0ZU9uTW91bnQ6IGEsIG1lYXN1cmU6IG0sIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHk6IGUsIGR1cmF0aW9uOiBkIH0pIHtcbiAgICBjb25zdCB7IGdldEFuaW1hdGVPbk1vdW50IH0gPSB1c2VDb250ZXh0KFN3YXBwYWJsZUNvbnRleHQpO1xuICAgIGNsYXNzQmFzZSB8fD0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIGUgfHw9IFwiaGlkZGVuXCI7XG4gICAgYSA/Pz0gZ2V0QW5pbWF0ZU9uTW91bnQoKTtcbiAgICBtID8/PSBmYWxzZTtcbiAgICBjb25zdCBnZXRNZWFzdXJlID0gdXNlU3RhYmxlR2V0dGVyKG0pO1xuICAgIC8vY29uc3QgZ2V0RHVyYXRpb25PdmVycmlkZSA9IHVzZVN0YWJsZUdldHRlcihkKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIGNsYXNzQmFzZSk7XG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZSk7XG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQoeyByZWZFbGVtZW50UGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0KFtcbiAgICAgICAgLy8gVGhpcyBpcyByZW1vdmVkIGR1cmluZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIGZpcnN0IHJlbmRlclxuICAgICAgICAvLyAoYXQgbGVhc3Qgb25jZSBgc2hvd2AgaXMgbm9uLW51bGwpXG4gICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgXSkpO1xuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBbZGlyZWN0aW9uLCBwaGFzZV0gPSBwYXJzZVN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWYoe1xuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT0gZ2V0RWxlbWVudCgpICYmIGUuZWxhcHNlZFRpbWUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIFRoZSB2ZXJ5IGZpcnN0IHRpbWUgXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCdzIENTUyBjbGFzcyB0byBtYXRjaCB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGFuZCBwaGFzZS5cbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVDbGFzc2VzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIGRpcmVjdGlvbiwgcGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZW50ZXItaW5pdGAsIGAke2NsYXNzQmFzZX0tZW50ZXItdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZW50ZXItZmluYWxpemVgLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJyZW1vdmVkXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtcImhpZGRlblwifWAsXG4gICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tcGVuZGluZ2AsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcbiAgICAgICAgICAgIGAke2NsYXNzQmFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS0ke2RpcmVjdGlvbn0tJHtwaGFzZX1gLFxuICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1ldi0ke2V4aXRWaXNpYmlsaXR5fWBcbiAgICAgICAgXTtcbiAgICAgICAgLy8obWVhc3VyZSA/IGFsbENsYXNzZXNUb0FkZCA6IGFsbENsYXNzZXNUb1JlbW92ZSkucHVzaChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKC4uLmFsbENsYXNzZXNUb1JlbW92ZSk7XG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBhIHNpbmdsZSBcIm1lYXN1cmVcIiB2YXJpYWJsZSAob3IgcmVtb3ZlcyBpdClcbiAgICAgKi9cbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgdmFyTmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYWxsIFwibWVhc3VyZVwiIHZhcmlhYmxlcyAob3IgcmVtb3ZlcyB0aGVtKVxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZVNpemVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG5leHRTaXplKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS10b3BgLCBuZXh0U2l6ZT8udG9wKTtcbiAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7Y2xhc3NCYXNlfS1tZWFzdXJlLWxlZnRgLCBuZXh0U2l6ZT8ubGVmdCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS13aWR0aGAsIG5leHRTaXplPy53aWR0aCk7XG4gICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke2NsYXNzQmFzZX0tbWVhc3VyZS1oZWlnaHRgLCBuZXh0U2l6ZT8uaGVpZ2h0KTtcbiAgICB9LCBbXSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG1lYXN1cmUpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydGllcyhlbGVtZW50LCBzaXplKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBXaGVuIGEgdHJhbnNpdGlvbiBzdGFydHMsIHdlIHJlYWQgdGhlIHRyYW5zaXRpb24tZHVyYXRpb24gYW5kIHVzZSBpdCBhcyBhbiBlbWVyZ2VuY3kgdGltZW91dCBpbiBjYXNlIG9uVHJhbnNpdGlvbkVuZCBkb2Vzbid0IHdvcmsuXG4gICAgLy8gU28gd2UgbmVlZCBhIHdheSB0byBjYW5jZWwgdGhhdCB0aW1lb3V0IGlmIG5lZWRlZC5cbiAgICBjb25zdCB0aW1lb3V0SGFuZGxlID0gdXNlUmVmKC0xKTtcbiAgICAvKipcbiAgICAgKiBBbnkgdGltZSB0aGUgc3RhdGUgY2hhbmdlcywgdGhlcmUncyBzb21lIGxvZ2ljIHdlIG5lZWQgdG8gcnVuOlxuICAgICAqXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYSBgdHJhbnNpdGlvbmAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IHVudGlsIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgdGhlbiBjaGFuZ2UgdG8gdGhlIGBmaW5hbGl6ZWAgcGhhc2UuXG4gICAgICpcbiAgICAgKiBBbnkgY2hhbmdlIGluIHN0YXRlIG9yIGNsYXNzZXMvc3R5bGVzIGRvZXMgbm90IGltcGxpY2l0bHkgY2F1c2UgYSByZS1yZW5kZXIuXG4gICAgICovXG4gICAgY29uc3Qgb25TdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXh0U3RhdGUsIHByZXZTdGF0ZSwgcmVhc29uKSA9PiB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IG1lYXN1cmUgPSBnZXRNZWFzdXJlKCk7XG4gICAgICAgIC8vY29uc3QgZHVyYXRpb25PdmVycmlkZSA9IGdldER1cmF0aW9uT3ZlcnJpZGUoKTtcbiAgICAgICAgLyppZiAoZHVyYXRpb25PdmVycmlkZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF0gPSBkdXJhdGlvbk92ZXJyaWRlICsgXCJtc1wiO1xuICAgICAgICAgICAgZWxlbWVudD8uc3R5bGUuc2V0UHJvcGVydHkoYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYCwgYCR7ZHVyYXRpb25PdmVycmlkZX1tc2ApO1xuICAgICAgICB9Ki9cbiAgICAgICAgaWYgKG1lYXN1cmUgJiYgZWxlbWVudCAmJiBuZXh0UGhhc2UgPT0gXCJpbml0XCIpIHtcbiAgICAgICAgICAgIC8vIFdlIGFjdHVhbGx5IG5lZWQgYWxsIHRoZXNlIHJlZmxvd3MsIGVpdGhlciB0byBtYWtlIHRoaW5ncyBsaWtlIGJsb2NrLXNpemUgd29yaywgb3IgdG8gbWFrZSB0aGluZ3MgbGlrZSBvcGFjaXR5IHdvcmsuXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIFwiZmluYWxpemVcIik7XG4gICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTsgLy8gQnkgbWVhc3VyaW5nIHRoZSBlbGVtZW50IGJlbG93IHdlIGltcGxpY2l0bHkgcmVmbG93LCBidXQgdGhpcyBpcyBhIHJlbWluZGVyIHRoYXQgaXQgaGFwcGVucy5cbiAgICAgICAgICAgIG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyhlbGVtZW50LCBtZWFzdXJlKTtcbiAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlKTtcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xuICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgICAgICAvLyBUT0RPOiBVbm5lY2Vzc2FyeSByZWZsb3c/XG4gICAgICAgICAgICAvLyBJdCBtaWdodCBvbmx5IGJlIG5lY2Vzc2FyeSB3aGVuIGNoYW5naW5nIGZyb20gLWluaXQgdG8gLXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcbiAgICAgICAgaWYgKGV4aXRWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICBjb25zdCBpbmVydCA9IChleGl0VmlzaWJpbGl0eSA9PSBcImluZXJ0XCIgJiYgbmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiA/IHRydWUgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGluZXJ0KVxuICAgICAgICAgICAgICAgIG90aGVyUHJvcHMuY3VycmVudC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCJdO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbmVydCA9IChpbmVydCB8fCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChuZXh0UGhhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgXCJpbml0XCI6IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS10cmFuc2l0aW9uYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwKVxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJmaW5hbGl6ZVwiOiB7XG4gICAgICAgICAgICAgICAgLy8gTm90aGluZyB0byBkbyBvciBzY2hlZHVsZSBvciBhbnl0aGluZyAtLSB3ZSBqdXN0IHVwZGF0ZSBvdXIgY2xhc3NlcyBhbmQgd2UncmUgZG9uZS5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IFtnZXRTdGF0ZSwgc2V0U3RhdGVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBJZiBgc2hvd2AgaXMgbnVsbCwgdGhlbiB3ZSBkb24ndCBjaGFuZ2UgYW55dGhpbmcuXG4gICAgICAgIGlmICh2ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGBzaG93YCBpcyB0cnVlIG9yIGZhbHNlIChhcyBvcHBvc2VkIHRvIG51bGwpLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIHNlZWluZyBhIG5vbi1udWxsIHZhbHVlLCBcbiAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIGNsYXNzIHRoYXQgaW5kaWNhdGVzIHRoZSBubyB0cmFuc2l0aW9uIGxvZ2ljIGhhcyBzdGFydGVkLlxuICAgICAgICAvLyAoQmVjYXVzZSB0aGlzIGlzIHVzZUxheW91dEVmZmVjdCwgaXQgd2lsbCB0YWtlIGVmZmVjdCBiZWZvcmUgdGhlIGNsYXNzJ3MgZWZmZWN0cyBhcmUgcGFpbnRlZClcbiAgICAgICAgaWYgKCFoYXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuY3VycmVudC5kZWxldGUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYCR7Y2xhc3NCYXNlfS1wZW5kaW5nYCk7XG4gICAgICAgICAgICAgICAgLy8gQmVjYXVzZSB0aGUgcGVuZGluZyBjbGFzcyBvZnRlbiBtYWtlcyB0aGlzIGhpZGRlbiBvciBkLW5vbmUsIFxuICAgICAgICAgICAgICAgIC8vIGZvcmNlIGEgcmVmbG93IGp1dXVzdCB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGxldCBuZXh0UGhhc2UgPSBcImluaXRcIjtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcbiAgICAgICAgICAgICAgICBuZXh0UGhhc2UgPSBcInRyYW5zaXRpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBlbnRlci0ke25leHRQaGFzZX1gKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhKVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFt2XSk7XG4gICAgaWYgKGQgIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdID0gZCArIFwibXNcIjtcbiAgICBlbHNlXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF07XG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhwcm9wc1N0YWJsZSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgICAgICAgLi4uY2xhc3NOYW1lcy5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGAke2NsYXNzQmFzZX0tZXYtJHtlfWAsXG4gICAgICAgICAgICAgICAgYCR7Y2xhc3NCYXNlfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCxcbiAgICAgICAgICAgICAgICBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YFxuICAgICAgICAgICAgXS5qb2luKFwiIFwiKSxcbiAgICAgICAgICAgIHN0eWxlOiBjc3NQcm9wZXJ0aWVzLmN1cnJlbnQsXG4gICAgICAgICAgICAuLi5vdGhlclByb3BzLmN1cnJlbnRcbiAgICAgICAgfSlcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIFRyYW5zaXRpb25hYmxlKHsgdHJhbnNpdGlvbjogeyBhbmltYXRlT25Nb3VudCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHksIG1lYXN1cmUsIHNob3cgfSwgcHJvcHM6IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gfSkge1xuICAgIGNvbnN0IHsgcHJvcHM6IHRyYW5zaXRpb25Qcm9wcyB9ID0gdXNlVHJhbnNpdGlvbih7XG4gICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBleGl0VmlzaWJpbGl0eSxcbiAgICAgICAgbWVhc3VyZSxcbiAgICAgICAgc2hvd1xuICAgIH0pO1xuICAgIGNvbnN0IGNoaWxkcmVuSXNWbm9kZSA9IChjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlICYmIGNoaWxkcmVuLnByb3BzKTtcbiAgICBjb25zdCBmaW5hbFByb3BzID0gdXNlTWVyZ2VkUHJvcHMocHJvcHMsIHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW5Jc1Zub2RlID8geyByZWY6IGNoaWxkcmVuLnJlZiwgLi4uY2hpbGRyZW4ucHJvcHMgfSA6IHt9KTtcbiAgICBpZiAoY2hpbGRyZW5Jc1Zub2RlKSB7XG4gICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGZpbmFsUHJvcHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGgoXCJzcGFuXCIsIHsgLi4uZmluYWxQcm9wcyB9LCBjaGlsZHJlbik7XG4gICAgfVxufVxubGV0IGR1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGR1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIGR1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgcmV0dXJuIGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnQgY29uc3QgQ2xpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXAoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGYWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSkge1xuICAgIGNsYXNzQmFzZSA9IGRlZmF1bHRDbGFzc0Jhc2UoY2xhc3NCYXNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmFkZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcbiAgICAgICAgfVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpcFByb3BzIH0gZnJvbSBcIi4vY2xpcFwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG47XG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIChoKFRyYW5zaXRpb25hYmxlLCB7IHRyYW5zaXRpb246IHsgbWVhc3VyZTogZmFsc2UsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9KSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWF4LCBmYWRlTWluIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKlxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXG4gKlxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cbiAqXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlIVxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZSh7IGNsYXNzQmFzZSwgc2hvdywgZHVyYXRpb24sIG1pbkJsb2NrU2l6ZSwgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IHRydWUsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbGxhcHNlUHJvcHMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IHRydWUsIHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wczogdXNlTWVyZ2VkUHJvcHMoeyByZWYsIC4uLnJlc3QgfSwgY3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0pLCBjcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBkZWZhdWx0Q2xhc3NCYXNlLCBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9KSB7XG4gICAgY2xhc3NCYXNlID0gZGVmYXVsdENsYXNzQmFzZShjbGFzc0Jhc2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXG4gICAgICAgIH1cbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KTtcbn0pO1xuLy8gVE9ETzogVGhpcyBsb2dpYyB3YXMgcmVxdWlyZWQgZm9yIHNsaWRlcyBhdCBvbmUgcG9pbnQgdG8gZW5zdXJlIHRoYXQgc2xpZGVUYXJnZXRJbmxpbmU9e2luZGV4IC0gY3VycmVudEluZGV4fSB3b3JrcyByaWdodCxcbi8vIGJ1dCBpdCB3b3JrcyB3aXRob3V0IGl0IG5vdywgc28sIGxpa2UsIHdlJ3JlIGdvb2QgdGhlbj8gV2hpY2ggSSdtIG9rYXkgd2l0aCBiZWNhdXNlIEkgY2FuJ3QgZXhwbGFpbiB0aGUgbG9naWMgaGVyZSBob25lc3RseS5cbi8qZXhwb3J0IGZ1bmN0aW9uIHVzZVNsaWRlVGhpbmcoeyB0YXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lIH06IHsgdGFyZ2V0SW5saW5lPzogbnVtYmVyIHwgbnVsbCwgdGFyZ2V0QmxvY2s/OiBudW1iZXIgfCBudWxsIH0pOiB7IHRhcmdldElubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkLCB0YXJnZXRCbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIH0ge1xuXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHRhcmdldElubGluZSA/PyAxKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZih0YXJnZXRCbG9jayA/PyAwKTtcblxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmICh0YXJnZXRJbmxpbmUpIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gdGFyZ2V0SW5saW5lOyB9LCBbdGFyZ2V0SW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHRhcmdldEJsb2NrKSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gdGFyZ2V0QmxvY2s7IH0sIFt0YXJnZXRCbG9ja10pO1xuXG4gICAgaWYgKHRhcmdldElubGluZSA9PSAwKVxuICAgICAgICB0YXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAodGFyZ2V0QmxvY2sgPT0gMClcbiAgICAgICAgdGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuXG4gICAgdGFyZ2V0SW5saW5lID8/PSB1bmRlZmluZWQ7XG4gICAgdGFyZ2V0QmxvY2sgPz89IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB0YXJnZXRJbmxpbmUsIHRhcmdldEJsb2NrIH07XG59Ki9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pKSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuICh7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1heCwgZmFkZU1pbiB9KSkgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgY3JlYXRlU2xpZGVQcm9wcyB9IGZyb20gXCIuL3NsaWRlXCI7XG5pbXBvcnQgeyBjcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG47XG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8oeyB0YXJnZXRCbG9jazogc2xpZGVUYXJnZXRCbG9jaywgdGFyZ2V0SW5saW5lOiBzbGlkZVRhcmdldElubGluZSB9ID0gdXNlU2xpZGVUaGluZyh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0pKTtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBtZWFzdXJlOiBmYWxzZSwgc2hvdywgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyh7IHJlZiwgLi4ucmVzdCB9LCBjcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0pLCBjcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9KSkgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IGNyZWF0ZVNsaWRlUHJvcHMgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgY3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuO1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBmYWRlTWF4LCBmYWRlTWluLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgLy8gICh7IHRhcmdldEJsb2NrOiBzbGlkZVRhcmdldEJsb2NrLCB0YXJnZXRJbmxpbmU6IHNsaWRlVGFyZ2V0SW5saW5lIH0gPSB1c2VTbGlkZVRoaW5nKHsgdGFyZ2V0QmxvY2s6IHNsaWRlVGFyZ2V0QmxvY2ssIHRhcmdldElubGluZTogc2xpZGVUYXJnZXRJbmxpbmUgfSkpO1xuICAgIHJldHVybiAoaChUcmFuc2l0aW9uYWJsZSwgeyB0cmFuc2l0aW9uOiB7IG1lYXN1cmU6IGZhbHNlLCBzaG93LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgZXhpdFZpc2liaWxpdHkgfSwgcHJvcHM6IHVzZU1lcmdlZFByb3BzKHsgcmVmLCAuLi5yZXN0IH0sIGNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSksIGNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0pLCBjcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNYXgsIGZhZGVNaW4gfSkpIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgZGVmYXVsdENsYXNzQmFzZSwgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtYmxvY2tgXTogYCR7KGZsaXBBbmdsZUJsb2NrID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxuICAgICAgICB9XG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gOTApO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gZmxpcEFuZ2xlSW5saW5lOyB9LCBbZmxpcEFuZ2xlSW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xuICAgIGlmIChmbGlwQW5nbGVJbmxpbmUgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcbiAgICByZXR1cm4gKGgoVHJhbnNpdGlvbmFibGUsIHsgdHJhbnNpdGlvbjogeyBzaG93LCBtZWFzdXJlOiBmYWxzZSwgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzOiB1c2VNZXJnZWRQcm9wcyhjcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0pLCB7IC4uLnJlc3QsIHJlZiB9KSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGRlZmF1bHRDbGFzc0Jhc2UgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPSBkZWZhdWx0Q2xhc3NCYXNlKGNsYXNzQmFzZSk7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlfS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuLyoqXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cbiAqXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXG4gKlxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cbiAqXG4gKiBMb25nIHdheSBvZiBzYXlpbmcsIGlmIHlvdSBnZXQgYSBjcnlwdGljIGVycm9yIHdpdGggdGhpcyBjb21wb25lbnQsIG1ha2Ugc3VyZSBpdCBoYXMgYSBzaW5nbGUgYDxkaXY+YCBjaGlsZCBvciBzb21ldGhpbmcuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW46IGMsIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gYztcbiAgICBjb25zb2xlLmFzc2VydCghIWNoaWxkcmVuLnR5cGUpO1xuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBpbmxpbmUgfSwgeyAuLi5wLCByZWYgfSk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHModHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4geyByZXR1cm4gYW5pbWF0ZU9uTW91bnQuY3VycmVudDsgfSB9KTtcbiAgICByZXR1cm4gKGgoU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dFZhbHVlLmN1cnJlbnQgfSwgY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4pKSk7XG59KTtcbi8vIElmIFwiaW5saW5lXCIgaXNuJ3QgZXhwbGljaXRseSBwcm92aWRlZCwgd2UgdHJ5IHRvIGltcGxpY2l0bHkgZG8gaXQgYmFzZWQgb24gdGhlIGNoaWxkJ3MgdGFnLlxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwiYVwiLFxuICAgIFwiYWJiclwiLFxuICAgIFwiYWNyb255bVwiLFxuICAgIFwiYXVkaW9cIixcbiAgICBcImJcIixcbiAgICBcImJkaVwiLFxuICAgIFwiYmRvXCIsXG4gICAgXCJiaWdcIixcbiAgICBcImJyXCIsXG4gICAgXCJidXR0b25cIixcbiAgICBcImNhbnZhc1wiLFxuICAgIFwiY2l0ZVwiLFxuICAgIFwiY29kZVwiLFxuICAgIFwiZGF0YVwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcImRlbFwiLFxuICAgIFwiZGZuXCIsXG4gICAgXCJlbVwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImlcIixcbiAgICBcImlmcmFtZVwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW5zXCIsXG4gICAgXCJrYmRcIixcbiAgICBcImxhYmVsXCIsXG4gICAgXCJtYXBcIixcbiAgICBcIm1hcmtcIixcbiAgICBcIm1ldGVyXCIsXG4gICAgXCJub3NjcmlwdFwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBpY3R1cmVcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJxXCIsXG4gICAgXCJydWJ5XCIsXG4gICAgXCJzXCIsXG4gICAgXCJzYW1wXCIsXG4gICAgXCJzY3JpcHRcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwic2xvdFwiLFxuICAgIFwic21hbGxcIixcbiAgICBcInNwYW5cIixcbiAgICBcInN0cm9uZ1wiLFxuICAgIFwic3ViXCIsXG4gICAgXCJzdXBcIixcbiAgICBcInN2Z1wiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJ0dFwiLFxuICAgIFwidmFyXCIsXG4gICAgXCJ2aWRlb1wiLFxuICAgIFwid2JyXCJcbl0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dhcHBhYmxlLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbIm4iLCJsIiwidSIsInQiLCJvIiwiciIsImYiLCJlIiwiYyIsInMiLCJhIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjaGlsZHJlbiIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ2IiwidHlwZSIsInByb3BzIiwia2V5IiwicmVmIiwiX19rIiwiX18iLCJfX2IiLCJfX2UiLCJfX2QiLCJfX2MiLCJfX2giLCJjb25zdHJ1Y3RvciIsIl9fdiIsInZub2RlIiwicCIsImQiLCJjb250ZXh0IiwiXyIsImluZGV4T2YiLCJrIiwiYmFzZSIsImIiLCJwdXNoIiwiZyIsIl9fciIsImRlYm91bmNlUmVuZGVyaW5nIiwic2V0VGltZW91dCIsInNvcnQiLCJzb21lIiwiX19QIiwiaiIsIl9fbiIsIm93bmVyU1ZHRWxlbWVudCIsInoiLCJ3IiwieSIsIngiLCJDIiwiQXJyYXkiLCJpc0FycmF5IiwibSIsIkEiLCJOIiwiTSIsImFwcGVuZENoaWxkIiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJIIiwiJCIsInNldFByb3BlcnR5IiwidGVzdCIsInN0eWxlIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIlQiLCJJIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwiY29udGV4dFR5cGUiLCJ2YWx1ZSIsIl9fRSIsInByb3RvdHlwZSIsInJlbmRlciIsIk8iLCJzdWIiLCJzdGF0ZSIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJMIiwiZGlmZmVkIiwibG9jYWxOYW1lIiwibm9kZVR5cGUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImlzIiwiZGF0YSIsImNoaWxkTm9kZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImF0dHJpYnV0ZXMiLCJuYW1lIiwiX19odG1sIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJ1bm1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJQIiwiZmlyc3RDaGlsZCIsInEiLCJCIiwiQ29uc3VtZXIiLCJQcm92aWRlciIsInNwbGljZSIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJmb3JjZVVwZGF0ZSIsIl9fSCIsIl9fViIsIl9fTiIsImZpbHRlciIsImV2ZXJ5IiwiRiIsInNoaWZ0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIl9fZiIsIlN5bWJvbCIsImZvciIsIiQkdHlwZW9mIiwiaXNSZWFjdENvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwidGhlbiIsIm1hcCIsIlUiLCJEIiwiX191IiwiX19hIiwiViIsIl9fUiIsIl9fTyIsInBvcCIsImZhbGxiYWNrIiwiVyIsImRlbGV0ZSIsInJldmVhbE9yZGVyIiwic2l6ZSIsImdldCIsIk1hcCIsInJldmVyc2UiLCJzZXQiLCJaIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIkciLCJKIiwiSyIsImNhbmNlbEJ1YmJsZSIsIlEiLCJkZWZhdWx0UHJldmVudGVkIiwicGVyc2lzdCIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiaXNEZWZhdWx0UHJldmVudGVkIiwibmF0aXZlRXZlbnQiLCJubiIsImNsYXNzIiwidG4iLCJtdWx0aXBsZSIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlIiwiY2xhc3NOYW1lIiwiZW51bWVyYWJsZSIsImVuIiwiZm9yd2FyZEVsZW1lbnRSZWYiLCJDb21wb25lbnQiLCJGb3J3YXJkZWRDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwidXNlRW5zdXJlU3RhYmlsaXR5IiwicGFyZW50SG9va05hbWUiLCJ2YWx1ZXMiLCJoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSIsInVzZVJlZiIsInNob3duRXJyb3IiLCJ1c2VIZWxwZXIiLCJpbmRleCIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcHRpb25zIiwidXNlUGFzc2l2ZVN0YXRlIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsVmFsdWUiLCJjdXN0b21EZWJvdW5jZVJlbmRlcmluZyIsInZhbHVlUmVmIiwiVW5zZXQiLCJyZWFzb25SZWYiLCJ3YXJuaW5nUmVmIiwiZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QiLCJjbGVhbnVwQ2FsbGJhY2tSZWYiLCJvblNob3VsZENsZWFuVXAiLCJ1c2VDYWxsYmFjayIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiaW5pdGlhbFZhbHVlIiwiZXgiLCJnZXRWYWx1ZSIsIndhcm4iLCJ1c2VMYXlvdXRFZmZlY3QiLCJzZXRWYWx1ZSIsImFyZyIsInJlYXNvbiIsIm5leHRWYWx1ZSIsIkZ1bmN0aW9uIiwibmV4dFJlYXNvbiIsIm5leHREZXAiLCJwcmV2RGVwIiwicmV0dXJuTnVsbCIsInJ1bkltbWVkaWF0ZWx5IiwiVGFibGUiLCJiYXNlNjQiLCJyYW5kb202Qml0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbTY0Qml0cyIsImdlbmVyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJqb2luIiwicHJldmlvdXNJbnB1dHMiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImFyZ3NDaGFuZ2VkIiwiaW5wdXRzIiwiY2xlYW51cCIsImVmZmVjdCIsImNsZWFyIiwiYXJncyIsInVzZUJlZm9yZUxheW91dEVmZmVjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwib2xkQXJncyIsIm5ld0FyZ3MiLCJ1c2VTdGFibGVHZXR0ZXIiLCJFcnJvciIsInVzZU1lcmdlZENoaWxkcmVuIiwibGhzIiwicmhzIiwiRnJhZ21lbnQiLCJjbHN4IiwidXNlTWVyZ2VkQ2xhc3NlcyIsImxoc0NsYXNzIiwibGhzQ2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwic3BsaXQiLCJyaHNDbGFzc2VzIiwiYWxsQ2xhc3NlcyIsIlNldCIsImZyb20iLCJwcm9jZXNzUmVmIiwiaW5zdGFuY2UiLCJhc3NlcnQiLCJ1c2VNZXJnZWRSZWZzIiwiY29tYmluZWQiLCJzdHlsZVN0cmluZ1RvT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzdGF0ZW1lbnQiLCJ1c2VNZXJnZWRTdHlsZXMiLCJsb2ciLCJ1c2VNZXJnZWRQcm9wcyIsImFsbFByb3BzIiwicmV0IiwibmV4dFByb3BzIiwidXNlTWVyZ2VkUHJvcHMyIiwia25vd25zIiwibWVyZ2VVbmtub3duIiwibGhzVmFsdWUiLCJyaHNWYWx1ZSIsIm1lcmdlZCIsIm1lcmdlRnVuY3Rpb25zIiwibGhzQWxsIiwicmhzQWxsIiwibGhzS2V5VSIsImxoc0tleSIsImhhcyIsInJoc0tleVUiLCJyaHNLZXkiLCJsdiIsInJ2IiwiUHJvbWlzZSIsImFsbCIsInVzZVJlZkVsZW1lbnQiLCJyZWZFbGVtZW50UGFyYW1ldGVycyIsIm9uRWxlbWVudENoYW5nZSIsIm9uTW91bnQiLCJvblVubW91bnQiLCJoYW5kbGVyIiwicHJldlZhbHVlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJwcm9wc1N0YWJsZSIsInJlZkVsZW1lbnRSZXR1cm4iLCJfYSIsIl9iIiwiX2MiLCJfYmxvY2tpbmdFbGVtZW50cyIsIl9hbHJlYWR5SW5lcnRFbGVtZW50cyIsIl90b3BFbFBhcmVudHMiLCJfc2libGluZ3NUb1Jlc3RvcmUiLCJfcGFyZW50TU8iLCJfdG9wQ2hhbmdlZCIsIl9zd2FwSW5lcnRlZFNpYmxpbmciLCJfaW5lcnRTaWJsaW5ncyIsIl9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzIiwiX2dldFBhcmVudHMiLCJfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiIsIl9pc0luZXJ0YWJsZSIsIl9oYW5kbGVNdXRhdGlvbnMiLCJCbG9ja2luZ0VsZW1lbnRzSW1wbCIsImRlc3RydWN0b3IiLCJudWxsYWJsZSIsInRvcCIsImVsZW1zIiwiZWxlbWVudCIsInJlbW92ZSIsIm5ld1RvcCIsInRvS2VlcEluZXJ0Iiwib2xkUGFyZW50cyIsIm5ld1BhcmVudHMiLCJib2R5IiwidG9Ta2lwIiwib2xkSW5lcnQiLCJuZXdJbmVydCIsInNpYmxpbmdzVG9SZXN0b3JlIiwiaW5lcnQiLCJhZGQiLCJlbGVtZW50cyIsIm1vIiwiZGlzY29ubmVjdCIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudCIsImluZXJ0ZWRTaWJsaW5ncyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJtdXRhdGlvbnMiLCJwYXJlbnRzIiwibXV0YXRpb24iLCJ0YXJnZXQiLCJpZHgiLCJpbmVydGVkQ2hpbGQiLCJyZW1vdmVkTm9kZXMiLCJpbmZvIiwiYWRkZWROb2RlcyIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhc3NpZ25lZFNsb3QiLCJzaGFkb3dSb290IiwicmVzdWx0Iiwibm9kZXMiLCJzbG90cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIiRibG9ja2luZ0VsZW1lbnRzIiwiZ2xvYmFsIiwiZmFjdG9yeSIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiVHlwZUVycm9yIiwid2luZG93IiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsInN1YnRyZWUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwibm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwicm9vdCIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJfYWRvcHRJbmVydFJvb3QiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290IiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJfb25Eb2N1bWVudExvYWRlZCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0IiwiY2FsbGJhY2siLCJzaGFkb3dSb290QW5jZXN0b3IiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJfaSIsImNoaWxkIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiSFRNTEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImZyZWVHbG9iYWwiLCJmcmVlU2VsZiIsIm9iamVjdFByb3RvIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImFyZ3NUYWciLCJiYXNlSXNBcmd1bWVudHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJmcmVlUHJvY2VzcyIsInByb2Nlc3MiLCJub2RlVXRpbCIsInR5cGVzIiwicmVxdWlyZSIsImJpbmRpbmciLCJpc1R5cGVkQXJyYXkiLCJjcmVhdGVDb250ZXh0IiwiU3dhcHBhYmxlQ29udGV4dCIsImdldEFuaW1hdGVPbk1vdW50IiwiZGVmYXVsdENsYXNzQmFzZSIsImdpdmVuIiwiZ2V0VGltZW91dER1cmF0aW9uIiwibWF4IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHIiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInBhcnNlU3RhdGUiLCJuZXh0U3RhdGUiLCJ1c2VUcmFuc2l0aW9uIiwic2hvdyIsImFuaW1hdGVPbk1vdW50IiwibWVhc3VyZSIsImNsYXNzQmFzZSIsImV4aXRWaXNpYmlsaXR5IiwiZHVyYXRpb24iLCJ1c2VDb250ZXh0IiwiZ2V0TWVhc3VyZSIsImdldEV4aXRWaXNpYmlsaXR5IiwiY3NzUHJvcGVydGllcyIsImNsYXNzTmFtZXMiLCJoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQiLCJnZXRTdGF0ZSIsImRpcmVjdGlvbiIsInBoYXNlIiwidGltZW91dEhhbmRsZSIsIm90aGVyUHJvcHMiLCJvblRyYW5zaXRpb25FbmQiLCJlbGFwc2VkVGltZSIsImhhc01vdW50ZWQiLCJ1cGRhdGVDbGFzc2VzIiwiYWxsQ2xhc3Nlc1RvUmVtb3ZlIiwiYWxsQ2xhc3Nlc1RvQWRkIiwiY2xhc3NMaXN0IiwidXBkYXRlU2l6ZVByb3BlcnR5IiwidmFyTmFtZSIsInJlbW92ZVByb3BlcnR5IiwidXBkYXRlU2l6ZVByb3BlcnRpZXMiLCJuZXh0U2l6ZSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9uU3RhdGVDaGFuZ2UiLCJwcmV2U3RhdGUiLCJuZXh0RGlyZWN0aW9uIiwibmV4dFBoYXNlIiwiZm9yY2VSZWZsb3ciLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudFBoYXNlIiwiVHJhbnNpdGlvbmFibGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvblByb3BzIiwiY2hpbGRyZW5Jc1Zub2RlIiwiZmluYWxQcm9wcyIsImNsb25lRWxlbWVudCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJjcmVhdGVDbGlwUHJvcHMiLCJjbGlwTWluIiwiY2xpcE1pbkJsb2NrIiwiY2xpcE1pbklubGluZSIsImNsaXBPcmlnaW4iLCJjbGlwT3JpZ2luQmxvY2siLCJjbGlwT3JpZ2luSW5saW5lIiwiQ2xpcCIsInJlc3QiLCJjcmVhdGVGYWRlUHJvcHMiLCJmYWRlTWluIiwiZmFkZU1heCIsIkZhZGUiLCJDbGlwRmFkZSIsImNyZWF0ZUNvbGxhcHNlUHJvcHMiLCJtaW5CbG9ja1NpemUiLCJDb2xsYXBzZSIsIkNvbGxhcHNlRmFkZSIsImNyZWF0ZVNsaWRlUHJvcHMiLCJzbGlkZVRhcmdldElubGluZSIsInNsaWRlVGFyZ2V0QmxvY2siLCJTbGlkZSIsIlNsaWRlRmFkZSIsImNyZWF0ZVpvb21Qcm9wcyIsInpvb21PcmlnaW4iLCJ6b29tT3JpZ2luSW5saW5lIiwiem9vbU9yaWdpbkJsb2NrIiwiem9vbU1pbiIsInpvb21NaW5JbmxpbmUiLCJ6b29tTWluQmxvY2siLCJab29tIiwiWm9vbUZhZGUiLCJTbGlkZVpvb20iLCJTbGlkZVpvb21GYWRlIiwiY3JlYXRlRmxpcFByb3BzIiwiZmxpcEFuZ2xlSW5saW5lIiwiZmxpcEFuZ2xlQmxvY2siLCJwZXJzcGVjdGl2ZSIsIkZsaXAiLCJsYXN0VmFsaWRUYXJnZXRJbmxpbmUiLCJsYXN0VmFsaWRUYXJnZXRCbG9jayIsInVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiaW5saW5lRWxlbWVudHMiLCJtZXJnZWRXaXRoQ2hpbGRyZW4iLCJjb250ZXh0VmFsdWUiLCJoYWxmVGV4dCIsImlucHV0IiwidGltZXMiLCJzdWJzdHIiLCJEZW1vIiwic2V0QW5pbWF0ZU9uTW91bnQiLCJ3cml0aW5nTW9kZSIsInNldFdyaXRpbmdNb2RlIiwic2hvdzEiLCJzZXRTaG93MSIsInNob3czIiwic2V0U2hvdzMiLCJyZWZsb3ciLCJzZXRSZWZsb3ciLCJzZXREdXJhdGlvbiIsInRleHQiLCJzZXRUZXh0Iiwib25JbnB1dDMiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW5wdXQ0Iiwib25JbnB1dDUiLCJvbklucHV0NWIiLCJvbklucHV0NiIsIm9uSW5wdXQ3Iiwib25JbnB1dDgiLCJ2YWx1ZUFzTnVtYmVyIiwib25JbnB1dEEiLCJvbklucHV0QiIsIm9uSW5wdXRDIiwib25JbnB1dCIsImNvbHMiLCJyb3dzIiwiRmFkZURlbW8iLCJjYXJkU2hvdyIsImNvbnRlbnRJbmRleCIsIlNsaWRlRGVtbyIsIlpvb21EZW1vIiwiQ2xpcERlbW8iLCJDb2xsYXBzZURlbW8iLCJab29tU2xpZGVEZW1vIiwiRmxpcERlbW8iLCJtaW4iLCJzZXRNaW4iLCJzZXRNYXgiLCJvbk1pbklucHV0Iiwib25NYXhJbnB1dCIsIkNTIiwibWFrZUNoaWxkIiwic3RlcCIsIm9yaWdpblgiLCJzZXRPcmlnaW5YIiwib3JpZ2luWSIsInNldE9yaWdpblkiLCJtaW5YIiwic2V0TWluWCIsIm1pblkiLCJzZXRNaW5ZIiwid2l0aEZhZGUiLCJzZXRXaXRoRmFkZSIsIm9uT3JpZ2luWElucHV0Iiwib25PcmlnaW5ZSW5wdXQiLCJvbk1pblhJbnB1dCIsIm9uTWluWUlucHV0Iiwib25XaXRoRmFkZUlucHV0Iiwic2xpZGVYIiwic2V0U2xpZGVYIiwic2xpZGVZIiwic2V0U2xpZGVZIiwib25TbGlkZVhJbnB1dCIsIm9uU2xpZGVZSW5wdXQiLCJzaWduIiwic2V0TWluQmxvY2tTaXplIiwib25NaW5TaXplIiwiZmxpcFgiLCJzZXRGbGlwWCIsImZsaXBZIiwic2V0RmxpcFkiLCJvbkZsaXBYSW5wdXQiLCJvbkZsaXBZSW5wdXQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUcsSUFBQ0EsQ0FBQztJQUFDQyxHQUFDO0lBQUNDLEdBQUM7SUFBR0MsR0FBQztJQUFDQyxHQUFDO0lBQUNDLEdBQUM7SUFBQ0MsR0FBQyxHQUFDLEVBQUU7SUFBQ0MsR0FBQyxHQUFDLEVBQUU7SUFBQ0MsR0FBQyxHQUFDLG1FQUFBO0VBQW9FLFNBQVNDLEdBQUMsQ0FBQ1QsQ0FBQyxFQUFDQyxDQUFDLEVBQUM7SUFBQyxLQUFJLElBQUlDLENBQUMsSUFBSUQsQ0FBQztNQUFDRCxDQUFDLENBQUNFLENBQUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNDLENBQUMsQ0FBQztJQUFDO0lBQUEsT0FBT0YsQ0FBQztFQUFBO0VBQUMsU0FBU1UsR0FBQyxDQUFDVixDQUFDLEVBQUM7SUFBQyxJQUFJQyxDQUFDLEdBQUNELENBQUMsQ0FBQ1csVUFBVTtJQUFDVixDQUFDLElBQUVBLENBQUMsQ0FBQ1csV0FBVyxDQUFDWixDQUFDLENBQUE7RUFBQztFQUFDLFNBQVNhLEdBQUMsQ0FBQ1osQ0FBQyxFQUFDQyxDQUFDLEVBQUNZLENBQUMsRUFBQztJQUFDLElBQUlYLENBQUM7TUFBQ0MsQ0FBQztNQUFDQyxDQUFDO01BQUNDLENBQUMsR0FBQyxDQUFFLENBQUE7SUFBQyxLQUFJRCxDQUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUNqUUE7QUFDQTtBQUNBO0FBQ0E7RUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDTyxTQUFTRyxhQUFhLENBQUN4RCxJQUFJLEVBQUU7SUFDaEMsSUFBTTtNQUFFeUQsb0JBQW9CLEVBQUU7UUFBRUMsZUFBZTtRQUFFQyxPQUFPO1FBQUVDO01BQVM7SUFBSSxDQUFBLEdBQUc1RCxJQUFJO0lBQzlFbEUsa0JBQWtCLENBQUMsZUFBZSxFQUFFNEgsZUFBZSxFQUFFQyxPQUFPLEVBQUVD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
