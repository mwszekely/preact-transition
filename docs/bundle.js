(function (_process, _globalThis$_process, _globalThis$process, _env, _globalThis$process$_, _globalThis$process$e, _NODE_ENV, _globalThis$process$e2, _window, _window$requestIdleCa) {
  'use strict';

  var n,
    l$1,
    u$1,
    i$1,
    o$2,
    r$2,
    f$1,
    e$1,
    c$1 = {},
    s$1 = [],
    a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    h$1 = Array.isArray;
  function v$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function p$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function y$1(l, u, t) {
    var i,
      o,
      r,
      f = {};
    for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
    return d$1(l, f, i, o, null);
  }
  function d$1(n, t, i, o, r) {
    var f = {
      type: n,
      props: t,
      key: i,
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
  function k$2(n) {
    return n.children;
  }
  function b$1(n, l) {
    this.props = n, this.context = l;
  }
  function g$2(n, l) {
    if (null == l) return n.__ ? g$2(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? g$2(n) : null;
  }
  function m$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return m$1(n);
    }
  }
  function w$2(n) {
    (!n.__d && (n.__d = !0) && i$1.push(n) && !x$1.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$2)(x$1);
  }
  function x$1() {
    var n, l, u, t, o, r, e, c, s;
    for (i$1.sort(f$1); n = i$1.shift();) n.__d && (l = i$1.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v$1({}, e)).__v = e.__v + 1, L$1(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [c] : null, t, null == c ? g$2(e) : c, e.__h, o), M(t, e, o), e.__e != c && m$1(e)), i$1.length > l && i$1.sort(f$1));
    x$1.__r = 0;
  }
  function P(n, l, u, t, i, o, r, f, e, a, v) {
    var p,
      y,
      _,
      b,
      g,
      m,
      w,
      x,
      P,
      S,
      H = 0,
      I = t && t.__k || s$1,
      T = I.length,
      j = T,
      z = l.length;
    for (u.__k = [], p = 0; p < z; p++) null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d$1(null, b, null, null, b) : h$1(b) ? d$1(k$2, {
      children: b
    }, null, null, null) : b.__b > 0 ? d$1(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) && (b.__ = u, b.__b = u.__b + 1, -1 === (x = A$1(b, I, w = p + H, j)) ? _ = c$1 : (_ = I[x] || c$1, I[x] = void 0, j--), L$1(n, b, _, i, o, r, f, e, a, v), g = b.__e, (y = b.ref) && _.ref != y && (_.ref && O(_.ref, null, b), v.push(y, b.__c || g, b)), null != g && (null == m && (m = g), S = !(P = _ === c$1 || null === _.__v) && x === w, P ? -1 == x && H-- : x !== w && (x === w + 1 ? (H++, S = !0) : x > w ? j > z - w ? (H += x - w, S = !0) : H-- : H = x < w && x == w - 1 ? x - w : 0), w = p + H, S = S || x == p && !P, "function" != typeof b.type || x === w && _.__k !== b.__k ? "function" == typeof b.type || S ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = g.nextSibling : e = $$1(n, g, e) : e = C$1(b, e, n), "function" == typeof u.type && (u.__d = e)));
    for (u.__e = m, p = T; p--;) null != I[p] && ("function" == typeof u.type && null != I[p].__e && I[p].__e == u.__d && (u.__d = I[p].__e.nextSibling), q$2(I[p], I[p]));
  }
  function C$1(n, l, u) {
    for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? C$1(t, l, u) : $$1(u, t.__e, l));
    return l;
  }
  function S(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (h$1(n) ? n.some(function (n) {
      S(n, l);
    }) : l.push(n)), l;
  }
  function $$1(n, l, u) {
    return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
  }
  function A$1(n, l, u, t) {
    var i = n.key,
      o = n.type,
      r = u - 1,
      f = u + 1,
      e = l[u];
    if (null === e || e && i == e.key && o === e.type) return u;
    if (t > (null != e ? 1 : 0)) for (; r >= 0 || f < l.length;) {
      if (r >= 0) {
        if ((e = l[r]) && i == e.key && o === e.type) return r;
        r--;
      }
      if (f < l.length) {
        if ((e = l[f]) && i == e.key && o === e.type) return f;
        f++;
      }
    }
    return -1;
  }
  function H$1(n, l, u, t, i) {
    var o;
    for (o in u) "children" === o || "key" === o || o in l || T$2(n, o, null, u[o], t);
    for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || T$2(n, o, l[o], u[o], t);
  }
  function I$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a$1.test(l) ? u : u + "px";
  }
  function T$2(n, l, u, t, i) {
    var o;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || I$1(n.style, l, "");
        if (u) for (l in u) t && u[l] === t[l] || I$1(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z$1 : j$1, o) : n.removeEventListener(l, o ? z$1 : j$1, o);else if ("dangerouslySetInnerHTML" !== l) {
      if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function j$1(n) {
    return this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }
  function z$1(n) {
    return this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }
  function L$1(n, u, t, i, o, r, f, e, c, s) {
    var a,
      p,
      y,
      d,
      _,
      g,
      m,
      w,
      x,
      C,
      S,
      $,
      A,
      H,
      I,
      T = u.type;
    if (void 0 !== u.constructor) return null;
    null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);
    try {
      n: if ("function" == typeof T) {
        if (w = u.props, x = (a = T.contextType) && i[a.__c], C = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in T && T.prototype.render ? u.__c = p = new T(w, C) : (u.__c = p = new b$1(w, C), p.constructor = T, p.render = B$2), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = C, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != T.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v$1({}, p.__s)), v$1(p.__s, T.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == T.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);else {
          if (null == T.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, C), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, C) || u.__v === t.__v)) {
            for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), S = 0; S < p._sb.length; S++) p.__h.push(p._sb[S]);
            p._sb = [], p.__h.length && f.push(p);
            break n;
          }
          null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, C), null != p.componentDidUpdate && p.__h.push(function () {
            p.componentDidUpdate(d, _, g);
          });
        }
        if (p.context = C, p.props = w, p.__P = n, p.__e = !1, $ = l$1.__r, A = 0, "prototype" in T && T.prototype.render) {
          for (p.state = p.__s, p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), H = 0; H < p._sb.length; H++) p.__h.push(p._sb[H]);
          p._sb = [];
        } else do {
          p.__d = !1, $ && $(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
        } while (p.__d && ++A < 25);
        p.state = p.__s, null != p.getChildContext && (i = v$1(v$1({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P(n, h$1(I = null != a && a.type === k$2 && null == a.key ? a.props.children : a) ? I : [I], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
      } else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N$1(t.__e, u, t, i, o, r, f, c, s);
      (a = l$1.diffed) && a(u);
    } catch (n) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, t);
    }
  }
  function M(n, u, t) {
    for (var i = 0; i < t.length; i++) O(t[i], t[++i], t[++i]);
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
  function N$1(l, u, t, i, o, r, f, e, s) {
    var a,
      v,
      y,
      d = t.props,
      _ = u.props,
      k = u.type,
      b = 0;
    if ("svg" === k && (o = !0), null != r) for (; b < r.length; b++) if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
      l = a, r[b] = null;
      break;
    }
    if (null == l) {
      if (null === k) return document.createTextNode(_);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
    }
    if (null === k) d === _ || e && l.data === _ || (l.data = _);else {
      if (r = r && n.call(l.childNodes), v = (d = t.props || c$1).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
        if (null != r) for (d = {}, b = 0; b < l.attributes.length; b++) d[l.attributes[b].name] = l.attributes[b].value;
        (y || v) && (y && (v && y.__html == v.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
      }
      if (H$1(l, _, d, o, e), y) u.__k = [];else if (P(l, h$1(b = u.props.children) ? b : [b], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g$2(t, 0), e, s), null != r) for (b = r.length; b--;) null != r[b] && p$1(r[b]);
      e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && T$2(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && T$2(l, "checked", b, d.checked, !1));
    }
    return l;
  }
  function O(n, u, t) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, t);
    }
  }
  function q$2(n, u, t) {
    var i, o;
    if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), null != (i = n.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      i.base = i.__P = null, n.__c = void 0;
    }
    if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q$2(i[o], u, t || "function" != typeof n.type);
    t || null == n.__e || p$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function B$2(n, l, u) {
    return this.constructor(n, u);
  }
  function D$1(u, t, i) {
    var o, r, f, e;
    l$1.__ && l$1.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], L$1(t, u = (!o && i || t).__k = y$1(k$2, null, [u]), r || c$1, c$1, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
  }
  function F$2(l, u, t) {
    var i,
      o,
      r,
      f,
      e = v$1({}, l.props);
    for (r in l.type && l.type.defaultProps && (f = l.type.defaultProps), u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : e[r] = void 0 === u[r] && void 0 !== f ? f[r] : u[r];
    return arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : t), d$1(l.type, e, i || l.key, o || l.ref, null);
  }
  function G(n, l) {
    var u = {
      __c: l = "__cC" + e$1++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var u, t;
        return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function () {
          return t;
        }, this.shouldComponentUpdate = function (n) {
          this.props.value !== n.value && u.some(function (n) {
            n.__e = !0, w$2(n);
          });
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
  n = s$1.slice, l$1 = {
    __e: function (n, l, u, t) {
      for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
        if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, b$1.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state), "function" == typeof n && (n = n(v$1({}, u), this.props)), n && v$1(u, n), null != n && this.__v && (l && this._sb.push(l), w$2(this));
  }, b$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), w$2(this));
  }, b$1.prototype.render = k$2, i$1 = [], r$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function (n, l) {
    return n.__v.__b - l.__v.__b;
  }, x$1.__r = 0, e$1 = 0;
  var _$1 = 0;
  function o$1(o, e, n, t, f, l) {
    var s,
      u,
      a = {};
    for (u in e) "ref" == u ? s = e[u] : a[u] = e[u];
    var i = {
      type: o,
      props: a,
      key: n,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --_$1,
      __source: f,
      __self: l
    };
    if ("function" == typeof o && (s = o.defaultProps)) for (u in s) void 0 === a[u] && (a[u] = s[u]);
    return l$1.vnode && l$1.vnode(i), i;
  }
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
  function h(n) {
    return o = 1, s(B$1, n);
  }
  function s(n, u, i) {
    var o = d(t++, 2);
    if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function (n) {
      var t = o.__N ? o.__N[0] : o.__[0],
        r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = r$1, !r$1.u)) {
      var f = function (n, t, r) {
        if (!o.__c.__H) return !0;
        var u = o.__c.__H.__.filter(function (n) {
          return n.__c;
        });
        if (u.every(function (n) {
          return !n.__N;
        })) return !c || c.call(this, n, t, r);
        var i = !1;
        return u.forEach(function (n) {
          if (n.__N) {
            var t = n.__[0];
            n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
          }
        }), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
      };
      r$1.u = !0;
      var c = r$1.shouldComponentUpdate,
        e = r$1.componentWillUpdate;
      r$1.componentWillUpdate = function (n, t, r) {
        if (this.__e) {
          var u = c;
          c = void 0, f(n, t, r), c = u;
        }
        e && e.call(this, n, t, r);
      }, r$1.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
  }
  function p(u, i) {
    var o = d(t++, 3);
    !l$1.__s && z(o.__H, i) && (o.__ = u, o.i = i, r$1.__H.__h.push(o));
  }
  function y(u, i) {
    var o = d(t++, 4);
    !l$1.__s && z(o.__H, i) && (o.__ = u, o.i = i, r$1.__h.push(o));
  }
  function _(n) {
    return o = 5, F$1(function () {
      return {
        current: n
      };
    }, []);
  }
  function A(n, t, r) {
    o = 6, y(function () {
      return "function" == typeof n ? (n(t()), function () {
        return n(null);
      }) : n ? (n.current = t(), function () {
        return n.current = null;
      }) : void 0;
    }, null == r ? r : r.concat(n));
  }
  function F$1(n, r) {
    var u = d(t++, 7);
    return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
  }
  function T$1(n, t) {
    return o = 8, F$1(function () {
      return n;
    }, t);
  }
  function q$1(n) {
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
    })) : (i.__h.forEach(k$1), i.__h.forEach(w$1), i.__h = [], t = 0)), u = r$1;
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
  function z(n, t) {
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
  function x(n, e) {
    function r(n) {
      var t = this.props.ref,
        r = t == n.ref;
      return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
      return this.shouldComponentUpdate = r, y$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new b$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var R = l$1.__b;
  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
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
  }, (D.prototype = new b$1()).__c = function (n, t) {
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
    var i = e.__a && y$1(k$2, null, n.fallback);
    return i && (i.__h = null), [y$1(k$2, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (V.prototype = new b$1()).__a = function (n) {
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
    var t = S(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);
    return n.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      W(n, e, t);
    });
  };
  var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Y = /[A-Z0-9]/g,
    $ = "undefined" != typeof document,
    q = function (n) {
      return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
    };
  b$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(b$1.prototype, t, {
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
  var K = l$1.event;
  function Q() {}
  function X() {
    return this.cancelBubble;
  }
  function nn() {
    return this.defaultPrevented;
  }
  l$1.event = function (n) {
    return K && (n = K(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn, n.nativeEvent = n;
  };
  var en = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    rn = l$1.vnode;
  l$1.vnode = function (n) {
    "string" == typeof n.type && function (n) {
      var t = n.props,
        e = n.type,
        u = {};
      for (var o in t) {
        var i = t[o];
        if (!("value" === o && "defaultValue" in t && null == i || $ && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
          var l = o.toLowerCase();
          "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
        }
      }
      "select" == e && u.multiple && Array.isArray(u.value) && (u.value = S(t.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == e && null != u.defaultValue && (u.value = S(t.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
    }(n), n.$$typeof = B, rn && rn(n);
  };
  var un = l$1.__r;
  l$1.__r = function (n) {
    un && un(n), n.__c;
  };
  var on = l$1.diffed;
  l$1.diffed = function (n) {
    on && on(n);
    var t = n.props,
      e = n.__e;
    null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value);
  };

  /** These are all the event mappings that are shared between Preact/React */
  const EventMapping$1 = {
    abort: "onAbort",
    animationend: "onAnimationEnd",
    animationstart: "onAnimationStart",
    animationiteration: "onAnimationIteration",
    beforeinput: "onBeforeInput",
    blur: "onBlur",
    canplay: "onCanPlay",
    canplaythrough: "onCanPlayThrough",
    change: "onChange",
    click: "onClick",
    compositionend: "onCompositionEnd",
    compositionstart: "onCompositionStart",
    compositionupdate: "onCompositionUpdate",
    contextmenu: "onContextMenu",
    cut: "onCut",
    drag: "onDrag",
    dragend: "onDragEnd",
    dragenter: "onDragEnter",
    dragleave: "onDragLeave",
    dragover: "onDragOver",
    dragstart: "onDragStart",
    drop: "onDrop",
    durationchange: "onDurationChange",
    emptied: "onEmptied",
    ended: "onEnded",
    error: "onError",
    focus: "onFocus",
    gotpointercapture: "onGotPointerCapture",
    input: "onInput",
    invalid: "onInvalid",
    keydown: "onKeyDown",
    keypress: "onKeyPress",
    keyup: "onKeyUp",
    load: "onLoad",
    loadeddata: "onLoadedData",
    loadedmetadata: "onLoadedMetadata",
    loadstart: "onLoadStart",
    lostpointercapture: "onLostPointerCapture",
    mousedown: "onMouseDown",
    mouseenter: "onMouseEnter",
    mouseleave: "onMouseLeave",
    mousemove: "onMouseMove",
    mouseout: "onMouseOut",
    mouseover: "onMouseOver",
    mouseup: "onMouseUp",
    paste: "onPaste",
    pause: "onPause",
    play: "onPlay",
    playing: "onPlaying",
    pointercancel: "onPointerCancel",
    pointerdown: "onPointerDown",
    pointerenter: "onPointerEnter",
    pointerleave: "onPointerLeave",
    pointermove: "onPointerMove",
    pointerout: "onPointerOut",
    pointerover: "onPointerOver",
    pointerup: "onPointerUp",
    progress: "onProgress",
    reset: "onReset",
    scroll: "onScroll",
    seeked: "onSeeked",
    seeking: "onSeeking",
    select: "onSelect",
    stalled: "onStalled",
    submit: "onSubmit",
    suspend: "onSuspend",
    timeupdate: "onTimeUpdate",
    touchcancel: "onTouchCancel",
    touchend: "onTouchEnd",
    touchmove: "onTouchMove",
    touchstart: "onTouchStart",
    transitionend: "onTransitionEnd",
    volumechange: "onVolumeChange",
    waiting: "onWaiting",
    wheel: "onWheel",
    fullscreenchange: null,
    animationcancel: null,
    auxclick: null,
    cancel: null,
    close: null,
    copy: null,
    cuechange: null,
    fullscreenerror: null,
    ratechange: null,
    resize: null,
    securitypolicyviolation: null,
    selectionchange: null,
    selectstart: null,
    slotchange: null,
    transitioncancel: null,
    transitionrun: null,
    transitionstart: null,
    webkitanimationend: null,
    webkitanimationiteration: null,
    webkitanimationstart: null,
    webkittransitionend: null
  };

  // Get the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
  // (i.e. in a way that doesn't throw an error but has isDevMode be a constant)
  (_globalThis$_process = globalThis[_process = "process"]) !== null && _globalThis$_process !== void 0 ? _globalThis$_process : globalThis[_process] = {};
  (_globalThis$process$_ = (_globalThis$process = globalThis["process"])[_env = "env"]) !== null && _globalThis$process$_ !== void 0 ? _globalThis$process$_ : _globalThis$process[_env] = {};
  (_globalThis$process$e2 = (_globalThis$process$e = globalThis["process"]["env"])[_NODE_ENV = "NODE_ENV"]) !== null && _globalThis$process$e2 !== void 0 ? _globalThis$process$e2 : _globalThis$process$e[_NODE_ENV] = "production";

  // TODO: This shouldn't be in every build, I don't think it's in core-js? I think?
  // And it's extremely small anyway and basically does nothing.
  (_window$requestIdleCa = (_window = window).requestIdleCallback) !== null && _window$requestIdleCa !== void 0 ? _window$requestIdleCa : _window.requestIdleCallback = callback => {
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => {
          return 0;
        }
      });
    }, 5);
  };
  let timeoutHandle = null;
  /**
   * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
   *
   * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
   */
  function monitorCallCount(hook) {
    var _window2, _window2$_hookCallCou, _window$_hookCallCoun, _window$_hookCallCoun2;
    const name = hook.name;
    if (filters.has(name)) return;
    console.assert(name.length > 0);
    (_window2$_hookCallCou = (_window2 = window)._hookCallCount) !== null && _window2$_hookCallCou !== void 0 ? _window2$_hookCallCou : _window2._hookCallCount = {
      callCounts: {}
    };
    (_window$_hookCallCoun2 = (_window$_hookCallCoun = window._hookCallCount.callCounts)[name]) !== null && _window$_hookCallCoun2 !== void 0 ? _window$_hookCallCoun2 : _window$_hookCallCoun[name] = {
      moment: 0,
      total: 0
    };
    window._hookCallCount.callCounts[name].moment += 1;
    window._hookCallCount.callCounts[name].total += 1;
    if (timeoutHandle == null) {
      timeoutHandle = requestIdleCallback(() => {
        //console.log((window as WindowWithHookCallCount)._hookCallCount.callCountsMoment);
        //(window as WindowWithHookCallCount)._hookCallCount.callCountsMoment = {};
        const o = Object.entries(window._hookCallCount.callCounts).map(_ref => {
          let [hook, counts] = _ref;
          return {
            Hook: hook || "?",
            Now: (counts === null || counts === void 0 ? void 0 : counts.moment) || 0,
            Total: (counts === null || counts === void 0 ? void 0 : counts.total) || 0
          };
        }).filter(_ref2 => {
          let {
            Now
          } = _ref2;
          return !!Now;
        }).sort((_ref3, _ref4) => {
          let {
            Now: lhsM
          } = _ref3;
          let {
            Now: rhsM
          } = _ref4;
          if (!lhsM && !rhsM) return 0;
          lhsM || (lhsM = Infinity);
          rhsM || (rhsM = Infinity);
          return lhsM - rhsM;
        });
        console.table(o, ['Hook', 'Now', 'Total']);
        Object.entries(window._hookCallCount.callCounts).forEach(_ref5 => {
          let [, counts] = _ref5;
          counts.moment = 0;
        });
        timeoutHandle = null;
      });
    }
  }
  const filters = new Set();
  const toRun = new Map();
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
  //
  // Also, in theory this could be replaced with `useInsertionEffect`,
  // but that probably won't be available in Preact for awhile.
  const commitName = "diffed";
  const newCommit = function (vnode) {
    for (const [id, effectInfo] of toRun) {
      const oldInputs = effectInfo.prevInputs;
      if (argsChanged(oldInputs, effectInfo.inputs)) {
        var _effectInfo$cleanup;
        (_effectInfo$cleanup = effectInfo.cleanup) === null || _effectInfo$cleanup === void 0 ? void 0 : _effectInfo$cleanup.call(effectInfo);
        effectInfo.cleanup = effectInfo.effect();
        effectInfo.prevInputs = effectInfo.inputs;
      }
    }
    toRun.clear();
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(vnode, ...args);
  };
  const originalCommit = l$1[commitName];
  l$1[commitName] = newCommit;
  let incrementingId = 0;
  function nextId() {
    let next = ++incrementingId;
    // TODO: This seems reasonable, but is is necessary or are we orders of magnitude from having to worry about overflow?
    if (incrementingId >= Number.MAX_SAFE_INTEGER) incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
  }
  /**
   * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
   *
   * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
   * which happens before.
   *
   * @param effect
   * @param inputs
   */
  function useBeforeLayoutEffect(effect, inputs) {
    var _ref$current;
    monitorCallCount(useBeforeLayoutEffect);
    // Note to self: This is by far the most called hook by sheer volume of dependencies.
    // So it should ideally be as quick as possible.
    const ref = _(null);
    (_ref$current = ref.current) !== null && _ref$current !== void 0 ? _ref$current : ref.current = nextId();
    const id = ref.current;
    if (effect) toRun.set(id, {
      effect,
      inputs,
      cleanup: null
    });else toRun.delete(id);
    // Not needed, because the insertion cleanup would run before useEffect anyway, I think?
    /*useEffect(() => {
        return () => {
            toRun.delete(id);
        }
    }, [id])*/
  }

  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }
  function debounceRendering(f) {
    var _l$1$debounceRenderin;
    ((_l$1$debounceRenderin = l$1.debounceRendering) !== null && _l$1$debounceRenderin !== void 0 ? _l$1$debounceRenderin : queueMicrotask)(f);
  }
  const EventMapping = {
    dblclick: "onDblClick",
    focusin: "onfocusin",
    focusout: "onfocusout",
    formdata: "onFormData",
    toggle: "onToggle",
    ...EventMapping$1
  };

  /**
   * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
   *
   * @remarks Eventually, when useEvent lands, we hopefully won't need this.
   */
  function useEnsureStability(parentHookName) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }
    const helperToEnsureStability = _([]);
    const shownError = _([]);
    useHelper(values.length, -1);
    values.forEach(useHelper);
    return;
    function useHelper(value, i) {
      const index = i + 1;
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
  /**
   * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
   *
   * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
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
   * {@include } {@link OnPassiveStateChange}
   *
   * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
   * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
   * @returns
   */
  function usePassiveState(onChange, getInitialValue, customDebounceRendering) {
    monitorCallCount(usePassiveState);
    //let [id, ,getId] = useState(() => generateRandomId());
    const valueRef = _(Unset$1);
    const reasonRef = _(Unset$1);
    const warningRef = _(false);
    const dependencyToCompareAgainst = _(Unset$1);
    const cleanupCallbackRef = _(undefined);
    // Make sure that the provided functions are perfectly stable across renders
    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = T$1(() => {
      const cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []);
    // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.
    const tryEnsureValue = T$1(() => {
      if (valueRef.current === Unset$1 && getInitialValue != undefined) {
        try {
          var _onChange;
          const initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
        } catch (ex) {
          // Exceptions are intentional to allow bailout (without exposing the Unset symbol)
        }
      }
    }, [/* getInitialValue and onChange intentionally omitted */]);
    const getValue = T$1(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
      // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.
      if (valueRef.current === Unset$1) tryEnsureValue();
      return valueRef.current === Unset$1 ? undefined : valueRef.current;
    }, []);
    y(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = T$1((arg, reason) => {
      // Regardless of anything else, figure out what our next value is about to be.
      const nextValue = arg instanceof Function ? arg(valueRef.current === Unset$1 ? undefined : valueRef.current) : arg;
      //let id = getId();
      //console.log((nextValue !== valueRef.current? "" : "NOT ") + "Scheduling effect ", id, " with value ", nextValue);
      if ( /*dependencyToCompareAgainst.current === Unset &&*/nextValue !== valueRef.current) {
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
          const nextReason = reasonRef.current;
          const nextDep = valueRef.current;
          const prevDep = dependencyToCompareAgainst.current;
          //let id = getId();
          //console.log(((dependencyToCompareAgainst.current != valueRef.current)? "" : "NOT ") + "Running effect ", id, " with value ", nextDep);
          if (dependencyToCompareAgainst.current != valueRef.current) {
            // TODO: This needs to happen here in order to make recursive onChanges work
            // but it feels better to have it happen after onChange...
            valueRef.current = dependencyToCompareAgainst.current = Unset$1;
            warningRef.current = true;
            try {
              var _onChange2;
              // Call any registered cleanup function
              onShouldCleanUp();
              valueRef.current = nextDep; // Needs to happen before onChange in case onChange is recursive (e.g. focusing causing a focus causing a focus)
              cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(nextDep, prevDep === Unset$1 ? undefined : prevDep, nextReason)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
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
      //valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
  }
  const Unset$1 = Symbol();
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
  const Unset = Symbol("unset");
  /**
   * Given an input value, returns a constant getter function that can be used
   * inside of `useEffect` and friends without including it in the dependency array.
   *
   * @remarks This uses `options.diffed` in order to run before everything, even
   * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
   */
  function useStableGetter(value) {
    monitorCallCount(useStableGetter);
    const ref = _(Unset);
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
  function useMemoObject(t) {
    return F$1(() => {
      return t;
    }, Object.values(t));
  }

  /**
   * We keep track of which callbacks are stable with a WeakMap instead of, say, a symbol because
   * `useCallback` will return a function that's stable across *all* renders, meaning
   * we can't use our funny "`if` only works here because it doesn't break the rules of hooks" trick then.
   */
  const map = new WeakMap();
  function isStableGetter(obj) {
    var _map$get;
    return (_map$get = map.get(obj)) !== null && _map$get !== void 0 ? _map$get : false;
  }
  function setIsStableGetter(obj) {
    map.set(obj, true);
    return obj;
  }
  /**
   * Alternate useCallback() which always returns the same (wrapped) function reference
   * so that it can be excluded from the dependency arrays of `useEffect` and friends.
   *
   * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
   * so be careful!).  Alternatively, if you need a stable callback that **can** be used
   * during render, pass an empty dependency array and it'll act like `useCallback` with an
   * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
   * truly has no dependencies/only stable dependencies!!
   */
  function useStableCallback(fn, noDeps) {
    monitorCallCount(useStableCallback);
    useEnsureStability("useStableCallback", noDeps == null, noDeps === null || noDeps === void 0 ? void 0 : noDeps.length, isStableGetter(fn));
    if (isStableGetter(fn)) return fn;
    if (noDeps == null) {
      const currentCallbackGetter = useStableGetter(fn);
      return setIsStableGetter(T$1(function () {
        return currentCallbackGetter()(...arguments);
      }, []));
    } else {
      console.assert(noDeps.length === 0);
      return setIsStableGetter(T$1(fn, []));
    }
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  var freeGlobal$1 = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal$1 || freeSelf || Function('return this')();
  var root$1 = root;

  /** Built-in value references. */
  var Symbol$1 = root$1.Symbol;
  var Symbol$2 = Symbol$1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$4.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
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
  var objectProto$3 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$3.toString;

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
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

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

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root$1['__core-js_shared__'];
  var coreJsData$1 = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');
  var nativeCreate$1 = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
      index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /* Built-in method references that are verified to be native. */
  var Map$1 = getNative(root$1, 'Map');
  var Map$2 = Map$1;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$2 || ListCache)(),
      'string': new Hash()
    };
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
      size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
      length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
      var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  /**
   * Combines two `children`.
   *
   * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
   *
   * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
   */
  function useMergedChildren(lhs, rhs) {
    monitorCallCount(useMergedChildren);
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y$1(k$2, {}, lhs, rhs);
    }
  }

  /**
   * Merged the `class` and `className` properties of two sets of props into a single string.
   *
   * @remarks Duplicate classes are removed (order doesn't matter anyway).
   */
  function useMergedClasses() {
    monitorCallCount(useMergedClasses);
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    let classesSet = new Set();
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }
    for (let c of classes) {
      if (typeof c == "string" && c.trim()) classesSet.add(c);
    }
    if (classesSet.size) {
      return Array.from(classesSet).join(" ");
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
   *
   * @remarks Or just use {@link useMergedProps}
   */
  function useMergedRefs(rhs, lhs) {
    monitorCallCount(useMergedRefs);
    // This *must* be stable in order to prevent repeated reset `null` calls after every render.
    const combined = useStableCallback(function combined(current) {
      processRef(current, lhs);
      processRef(current, rhs);
    });
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
   * @param style - The user-given style prop for this component
   * @param obj - The CSS properties you want added to the user-given style
   * @returns A CSS object containing the properties of both objects.
   */
  function useMergedStyles(lhs, rhs) {
    monitorCallCount(useMergedStyles);
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
    return {
      ...(lhs !== null && lhs !== void 0 ? lhs : {}),
      ...(rhs !== null && rhs !== void 0 ? rhs : {})
    };
  }
  let log = console.warn;
  /**
   * Given two sets of props, merges them and returns the result.
   *
   * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
   *
   * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
   *
   * {@include } {@link enableLoggingPropConflicts}
   *
   * @see {@link useMergedRefs}
   * @see {@link useMergedStyles}
   * @see {@link useMergedClasses}
   * @see {@link useMergedChildren}
   *
   * @param allProps - A variadic number of props to merge into one
   *
   * @returns A single object with all the provided props merged into one.
   */
  function useMergedProps() {
    monitorCallCount(useMergedProps);
    for (var _len4 = arguments.length, allProps = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      allProps[_key4] = arguments[_key4];
    }
    useEnsureStability("useMergedProps", allProps.length);
    let ret = {};
    for (let nextProps of allProps) {
      ret = useMergedProps2(ret, nextProps);
    }
    return ret;
  }
  const knowns = new Set(["children", "ref", "className", "class", "style"]);
  function mergeUnknown(key, lhsValue, rhsValue) {
    if (typeof lhsValue === "function" || typeof rhsValue === "function") {
      // They're both functions that can be merged (or one's a function and the other's null).
      // Not an *easy* case, but a well-defined one.
      const merged = mergeFunctions(lhsValue, rhsValue);
      return merged;
    } else {
      // Uh...they're not both functions so we're here because one of them's null, right?
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
    const ret = {
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
    for (const lhsKeyU in lhsAll) {
      const lhsKey = lhsKeyU;
      if (knowns.has(lhsKey)) continue;
      ret[lhsKey] = lhsAll[lhsKey];
    }
    for (const rhsKeyU in rhsAll) {
      const rhsKey = rhsKeyU;
      if (knowns.has(rhsKey)) continue;
      ret[rhsKey] = mergeUnknown(rhsKey, ret[rhsKey], rhsAll[rhsKey]);
    }
    return ret;
  }
  function mergeFunctions(lhs, rhs) {
    if (!lhs) return rhs;
    if (!rhs) return lhs;
    return function () {
      const lv = lhs(...arguments);
      const rv = rhs(...arguments);
      if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
    };
  }
  function generateStack() {
    if (window._generate_setState_stacks) {
      try {
        throw new Error();
      } catch (e) {
        return e.stack;
      }
    }
    return undefined;
  }
  /**
   * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
   *
   *
   */
  function useStack() {
    {
      const stack = F$1(generateStack, []);
      const getStack = T$1(() => stack, []);
      return getStack;
    }
  }

  /**
   * Runs a function the specified number of milliseconds after the component renders.
   *
   * @remarks This is particularly useful to function as "useEffect on a delay".
   *
   * @remarks
   * {@include } {@link UseTimeoutParameters}
   */
  function useTimeout(_ref6) {
    let {
      timeout,
      callback,
      triggerIndex
    } = _ref6;
    monitorCallCount(useTimeout);
    const stableCallback = useStableCallback(() => {
      startTimeRef.current = null;
      callback();
    });
    const getTimeout = useStableGetter(timeout);
    // Set any time we start timeout.
    // Unset any time the timeout completes
    const startTimeRef = _(null);
    const timeoutIsNull = timeout == null;
    // Any time the triggerIndex changes (including on mount)
    // restart the timeout.  The timeout does NOT reset
    // when the duration or callback changes, only triggerIndex.
    p(() => {
      if (!timeoutIsNull) {
        const timeout = getTimeout();
        console.assert(timeoutIsNull == (timeout == null));
        if (timeout != null) {
          startTimeRef.current = +new Date();
          const handle = setTimeout(stableCallback, timeout);
          return () => clearTimeout(handle);
        }
      }
    }, [triggerIndex, timeoutIsNull]);
    const getElapsedTime = T$1(() => {
      var _startTimeRef$current;
      return +new Date() - +((_startTimeRef$current = startTimeRef.current) !== null && _startTimeRef$current !== void 0 ? _startTimeRef$current : new Date());
    }, []);
    const getRemainingTime = T$1(() => {
      const timeout = getTimeout();
      return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
    }, []);
    return {
      getElapsedTime,
      getRemainingTime
    };
  }
  let idIndex = 0;
  /**
   * Debug function that yells at you if your forgot to use the props a hook returns.
   *
   * @remarks Like other debug hooks, only has any effect IFF there is a global variable called `"development"` and it contains the value `"development"`.
   *
   * @param props - The props to return a modified copy of
   * @param tag - Should be unique
   * @returns A modified copy of the given props
   */
  function useTagProps(props, tag) {
    {
      const [id] = h(() => ++idIndex);
      const propsIdTag = "data-props-".concat(tag, "-").concat(id);
      const getStack = useStack();
      // Don't have multiple tags of the same type on the same props, means a hook has been called twice!
      console.assert(!(props && typeof props == "object" && tag in props));
      useTimeout({
        callback: () => {
          let element = document.querySelectorAll("[".concat(propsIdTag, "]"));
          if (element.length != 1) {
            console.error("A hook returned props that were not properly spread to any HTMLElement:");
            console.log(getStack());
            /* eslint-disable no-debugger */
            debugger;
          }
        },
        timeout: 250,
        triggerIndex: tag
      });
      return F$1(() => {
        return {
          ...props,
          [propsIdTag]: true /*, [tag as never]: true*/
        };
      }, [props, tag]);
    }
  }

  /**
   * Allows a parent component to access information about certain
   * child components once they have rendered.
   *
   * @remarks This hook is designed to be lightweight, in that the parent keeps no state
   * and runs no effects.  Each child *does* run an effect, but with no state
   * changes unless you explicitly request them.
   *
   * {@include } {@link ManagedChildren}
   *
   * @hasChild {@link useManagedChild}
   *
   * @compositeParams
   */
  function useManagedChildren(parentParameters) {
    monitorCallCount(useManagedChildren);
    const {
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildrenCountChange
      },
      ...rest
    } = parentParameters;
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
    const getHighestIndex = T$1(() => {
      return managedChildrenArray.current.highestIndex;
    }, []);
    const getLowestIndex = T$1(() => {
      return managedChildrenArray.current.lowestIndex;
    }, []);
    // All the information we have about our children is stored in this **stable** array.
    // Any mutations to this array **DO NOT** trigger any sort of a re-render.
    const managedChildrenArray = _({
      arr: [],
      rec: {},
      highestIndex: 0,
      lowestIndex: 0
    });
    // For indirect access to each child
    // Compare getManagedChildInfo
    // TODO: The primary use for this is flaggable closest fits
    // which needs to search all children for that closest fit.
    // It would be nice if there was something better for that.
    const forEachChild = T$1(f => {
      for (const child of managedChildrenArray.current.arr) {
        if (child) {
          if (f(child) == 'break') return;
        }
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) if (f(child) == 'break') return;
      }
    }, []);
    // Retrieves the information associated with the child with the given index.
    // `undefined` if not child there, or it's unmounted.
    const getManagedChildInfo = T$1(index => {
      if (typeof index == "number") return managedChildrenArray.current.arr[index];else return managedChildrenArray.current.rec[index];
    }, []);
    // tl;dr this is a way to have run useLayoutEffect once after all N children
    // have mounted and run *their* useLayoutEffect, but also *without* re-rendering
    // ourselves because of having a `childCount` state or anything similar.
    //
    // When the child count ref updates, we want the parent to also run an effect
    // to maybe do something with all these children that just mounted.
    // The easiest way would be useEffect(..., [childCount]) but
    // that would require us having a childCount state, then calling
    // setChildCount and re-rendering every time children mount
    // (only one re-render at a time unless children are staggered, but still)
    // 
    // As an alternate solution, any time a child uses ULE on mount, it queues a microtask
    // to emulate running ULE on the parent. Only the first child will actually queue
    // the microtask (by checking hasRemoteULE first) so that the "effect" only
    // runs once. When it's done, hasRemoteULE is reset so it can run again if
    // more children mount/unmount.
    const hasRemoteULEChildMounted = _(null);
    const remoteULEChildChangedCausers = _(new Set());
    const remoteULEChildChanged = T$1(index => {
      if (remoteULEChildChangedCausers.current.size == 0) {
        if (onAfterChildLayoutEffect != null) {
          debounceRendering(() => {
            onAfterChildLayoutEffect === null || onAfterChildLayoutEffect === void 0 ? void 0 : onAfterChildLayoutEffect(remoteULEChildChangedCausers.current);
            remoteULEChildChangedCausers.current.clear();
          });
        }
      }
      remoteULEChildChangedCausers.current.add(index);
      return () => {};
    }, [/* Must remain stable */]);
    const remoteULEChildMounted = T$1((index, mounted) => {
      var _hasRemoteULEChildMou, _hasRemoteULEChildMou2;
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: new Set(),
          unmounts: new Set()
        };
        debounceRendering(() => {
          if (onChildrenCountChange || onChildrenMountChange) {
            onChildrenMountChange === null || onChildrenMountChange === void 0 ? void 0 : onChildrenMountChange(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildrenCountChange === null || onChildrenCountChange === void 0 ? void 0 : onChildrenCountChange(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          }
        });
      }
      if (mounted) {
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
          managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
        }
      } else {
        if (typeof index == "number") {
          delete managedChildrenArray.current.arr[index];
          let shave = 0;
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == undefined) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") {
          managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
          // TODO: length automatically adjusts to give us the highest index,
          // but there's no corresponding property to get the lowest index when it changes...
          // managedChildrenArray.current.lowestIndex = managedChildrenArray.current.arr.length - 1;
        }
      }

      hasRemoteULEChildMounted === null || hasRemoteULEChildMounted === void 0 || (_hasRemoteULEChildMou = hasRemoteULEChildMounted.current) === null || _hasRemoteULEChildMou === void 0 || (_hasRemoteULEChildMou = _hasRemoteULEChildMou[mounted ? "mounts" : "unmounts"]) === null || _hasRemoteULEChildMou === void 0 || (_hasRemoteULEChildMou2 = _hasRemoteULEChildMou.add) === null || _hasRemoteULEChildMou2 === void 0 ? void 0 : _hasRemoteULEChildMou2.call(_hasRemoteULEChildMou, index);
    }, [/* Must remain stable */]);
    const managedChildren = useMemoObject({
      ...{
        _: managedChildrenArray.current
      },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex: getHighestIndex,
      getLowestIndex: getLowestIndex,
      _arraySlice: T$1(() => {
        let ret = managedChildrenArray.current.arr.slice();
        const max = getHighestIndex();
        for (let i = 0; i <= max; ++i) {
          if (ret[i] == null) ret[i] = {
            index: i
          };
        }
        return ret;
      }, [])
    });
    const getChildren = T$1(() => managedChildren, []);
    return {
      context: useMemoObject({
        managedChildContext: useMemoObject({
          managedChildrenArray: managedChildrenArray.current,
          remoteULEChildMounted,
          remoteULEChildChanged,
          getChildren
        })
      }),
      managedChildrenReturn: {
        getChildren
      }
    };
  }
  /**
   * @compositeParams
   */
  function useManagedChild(_ref7) {
    let {
      context,
      info
    } = _ref7;
    monitorCallCount(useManagedChild);
    const {
      managedChildContext: {
        getChildren,
        managedChildrenArray,
        remoteULEChildMounted,
        remoteULEChildChanged
      }
    } = context !== null && context !== void 0 ? context : {
      managedChildContext: {}
    };
    const index = info.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    y(() => {
      if (managedChildrenArray == null || remoteULEChildChanged == null) return;
      // Insert this information in-place
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = {
          ...info
        };
      } else {
        managedChildrenArray.rec[index] = {
          ...info
        };
      }
      return remoteULEChildChanged(index);
    }, [...Object.entries(info).flat(9)]); // 9 is infinity, right? Sure. Unrelated: TODO.
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    y(() => {
      remoteULEChildMounted === null || remoteULEChildMounted === void 0 ? void 0 : remoteULEChildMounted(index, true);
      return () => remoteULEChildMounted === null || remoteULEChildMounted === void 0 ? void 0 : remoteULEChildMounted(index, false);
    }, [index]);
    return {
      managedChildReturn: {
        getChildren: getChildren
      }
    };
  }
  /**
   * An extension to useManagedChildren that handles the following common case:
   * 1. You have a bunch of children
   * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
   * 3. The parent has control over who is "selected" via a numerical index.
   *
   * This hook allows for much easier control over selection management.
   *
   * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
   * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
   *
   * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
   *
   */
  function useChildrenFlag(_ref8) {
    let {
      getChildren,
      initialIndex,
      closestFit,
      onClosestFit,
      onIndexChange,
      getAt,
      setAt,
      isValid
    } = _ref8;
    useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid);
    // TODO (maybe?): Even if there is an initial index, it's not set until mount. Is that fine?
    const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange);
    const [getRequestedIndex, setRequestedIndex] = usePassiveState(null);
    // Shared between onChildrenMountChange and changeIndex, not public
    // Only called when `closestFit` is false, naturally.
    const getClosestFit = T$1(requestedIndex => {
      const children = getChildren();
      let closestDistance = Infinity;
      let closestIndex = null;
      children.forEach(child => {
        if (child != null && isValid(child)) {
          console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          const newDistance = Math.abs(child.index - requestedIndex);
          if (newDistance < closestDistance || newDistance == closestDistance && child.index < requestedIndex) {
            closestDistance = newDistance;
            closestIndex = child.index;
          }
        }
      });
      return closestIndex;
    }, [/* Must remain stable! */]);
    if (closestFit) {
      console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
    }
    // Any time a child mounts/unmounts, we need to double-check to see if that affects 
    // the "currently selected" (or whatever) index.  The two cases we're looking for:
    // 1. The currently selected child unmounted
    // 2. A child mounted, and it mounts with the index we're looking for
    const reevaluateClosestFit = useStableCallback(() => {
      const children = getChildren();
      const requestedIndex = getRequestedIndex();
      const currentIndex = getCurrentIndex();
      const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
        console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
        const closestFitIndex = getClosestFit(requestedIndex);
        setCurrentIndex(closestFitIndex, undefined);
        if (currentChild) setAt(currentChild, false, closestFitIndex, currentIndex);
        if (closestFitIndex != null) {
          const closestFitChild = children.getAt(closestFitIndex);
          console.assert(closestFitChild != null, "Internal logic???");
          setAt(closestFitChild, true, closestFitIndex, currentIndex);
          onClosestFit(closestFitIndex);
        } else {
          onClosestFit(null);
        }
      }
    });
    const changeIndex = T$1((arg, reason) => {
      const children = getChildren();
      const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
      setRequestedIndex(requestedIndex, reason);
      const currentIndex = getCurrentIndex();
      if (currentIndex == requestedIndex) return requestedIndex;
      let newMatchingChild = requestedIndex == null ? null : children.getAt(requestedIndex);
      const oldMatchingChild = currentIndex == null ? null : children.getAt(currentIndex);
      if (requestedIndex == null) {
        // Easy case
        setCurrentIndex(null, reason);
        if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
        return null;
      } else {
        const childIsValid = newMatchingChild && isValid(newMatchingChild);
        if (childIsValid || !closestFit) {
          setCurrentIndex(requestedIndex, reason);
          if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
          if (newMatchingChild) setAt(newMatchingChild, true, requestedIndex, currentIndex);
          return requestedIndex;
        } else {
          console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
          const closestFitIndex = getClosestFit(requestedIndex);
          setCurrentIndex(closestFitIndex, reason);
          if (closestFitIndex != null) {
            newMatchingChild = children.getAt(closestFitIndex);
            console.assert(newMatchingChild != null, "Internal logic???");
            if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            setAt(newMatchingChild, true, closestFitIndex, currentIndex);
            return closestFitIndex;
          } else {
            if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
            return null;
          }
        }
      }
    }, []);
    // Run once, on mount
    y(() => {
      changeIndex(initialIndex !== null && initialIndex !== void 0 ? initialIndex : null, undefined);
    }, []);
    return {
      changeIndex,
      reevaluateClosestFit,
      getCurrentIndex
    };
  }

  /**
   * Slightly enhanced version of `useState` that includes a getter that remains constant
   * (i.e. you can use it in `useEffect` and friends without it being a dependency).
   *
   * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
   * take the stack at the time the hook was called and save it to `window._setState_stack`.
   * Useful if you want to trace whose state is being updated.
   *
   * @param initialState - Same as the built-in `setState`'s
   */
  function useState(initialState) {
    const getStack = useStack();
    monitorCallCount(useState);
    // We keep both, but override the `setState` functionality
    const [state, setStateP] = h(initialState);
    const ref = _(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = T$1(value => {
      {
        window._setState_stack = getStack();
      }
      if (typeof value === "function") {
        const callback = value;
        setStateP(prevValue => {
          const nextValue = callback(prevValue);
          if (ref.current !== nextValue) {
            // put a breakpoint here if you want
            ref.current = nextValue;
          }
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        if (ref.current !== value) {
          // put a breakpoint here if you want
          ref.current = value;
        }
        ref.current = value;
        setStateP(value);
      }
    }, []);
    const getState = T$1(() => {
      return ref.current;
    }, []);
    return [state, setState, getState];
  }

  /**
   * Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
   *
   * @remarks
   *
   * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
   *
   * ```md-literal
   * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
   * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
   * ```
   *
   * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
   *
   * @example
   * Easiest way to use (but setElement causes an extra re-render when it's called...)
   * ```typescript
   * const [element, setElement] = useState<HTMLButtonElement | null>(null);
   * const { propsStable } = useRefElement({ onElementChange: setElement });
   * useEffect(() => {
   *     element.doSomethingFunny();
   * }, [element])
   * ```
   *
   * @example
   * Fastest (but slightly more verbose)
   * ```typescript
   * // The code in useEffect is moved into this callback, but runs at the same time
   * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
   * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
   * const { propsStable } = useRefElement({ onElementChange: setElement });
   * ```
   *
   * @compositeParams
   */
  function useRefElement(args) {
    monitorCallCount(useRefElement);
    const nonElementWarn = _(false);
    if (nonElementWarn.current) {
      nonElementWarn.current = false;
      // There are two of these to catch the problem in the two most useful areas --
      // when it initially happens, and also in the component stack.
      console.assert(false, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.");
    }
    const {
      onElementChange,
      onMount,
      onUnmount
    } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    // Called (indirectly) by the ref that the element receives.
    const handler = T$1((e, prevValue) => {
      if (!(e == null || e instanceof Element)) {
        console.assert(e == null || e instanceof Element, "useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.");
        nonElementWarn.current = true;
      }
      const cleanup = onElementChange === null || onElementChange === void 0 ? void 0 : onElementChange(e, prevValue);
      if (prevValue) onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(prevValue);
      if (e) onMount === null || onMount === void 0 ? void 0 : onMount(e);
      return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _(useTagProps({
      ref: setElement
    }, "data-use-ref-element"));
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
      propsStable: propsStable.current,
      refElementReturn: {
        getElement
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
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    /* Symbols for private static methods */
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
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
        const nullable = this;
        nullable[_blockingElements] = null;
        nullable[_topElParents] = null;
        nullable[_alreadyInertElements] = null;
      }
      get top() {
        const elems = this[_blockingElements];
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
        const i = this[_blockingElements].indexOf(element);
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
        const top = this.top;
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
        const toKeepInert = this[_alreadyInertElements];
        const oldParents = this[_topElParents];
        // No new top, reset old top if any.
        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);
          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }
        const newParents = this[_getParents](newTop);
        // New top is not contained in the main document!
        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error('Non-connected element cannot be a blocking element');
        }
        // Cast here because we know we'll call _inertSiblings on newParents
        // below.
        this[_topElParents] = newParents;
        const toSkip = this[_getDistributedChildren](newTop);
        // No previous top element.
        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);
          return;
        }
        let i = oldParents.length - 1;
        let j = newParents.length - 1;
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
        const siblingsToRestore = oldInert[_siblingsToRestore];
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
        for (const element of elements) {
          const mo = element[_parentMO];
          mo.disconnect();
          element[_parentMO] = undefined;
          const siblings = element[_siblingsToRestore];
          for (const sibling of siblings) {
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
        for (const element of elements) {
          // Assume element is not a Document, so it must have a parentNode.
          const parent = element.parentNode;
          const children = parent.children;
          const inertedSiblings = new Set();
          for (let j = 0; j < children.length; j++) {
            const sibling = children[j];
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
          const mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          let parentToObserve = parent;
          // If we're using the ShadyDOM polyfill, then our parent could be a
          // shady root, which is an object that acts like a ShadowRoot, but isn't
          // actually a node in the real DOM. Observe the real DOM parent instead.
          const maybeShadyRoot = parentToObserve;
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
        const parents = this[_topElParents];
        const toKeepInert = this[_alreadyInertElements];
        for (const mutation of mutations) {
          // If the target is a shadowRoot, get its host as we skip shadowRoots when
          // computing _topElParents.
          const target = mutation.target.host || mutation.target;
          const idx = target === document.body ? parents.length : parents.indexOf(target);
          const inertedChild = parents[idx - 1];
          const inertedSiblings = inertedChild[_siblingsToRestore];
          // To restore.
          for (let i = 0; i < mutation.removedNodes.length; i++) {
            const sibling = mutation.removedNodes[i];
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
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const sibling = mutation.addedNodes[i];
            if (!this[_isInertable](sibling)) {
              continue;
            }
            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
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
        const parents = [];
        let current = element;
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
        const shadowRoot = element.shadowRoot;
        if (!shadowRoot) {
          return null;
        }
        const result = new Set();
        let i;
        let j;
        let nodes;
        const slots = shadowRoot.querySelectorAll('slot');
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
  let templateElement = null;
  function htmlToElement(parent, html) {
    var _templateElement;
    const document = parent.ownerDocument;
    (_templateElement = templateElement) !== null && _templateElement !== void 0 ? _templateElement : templateElement = document.createElement("template");
    templateElement.innerHTML = html.trim(); // TODO: Trim ensures whitespace doesn't add anything, but with a better explanation of why
    return templateElement.content.firstChild;
  }
  /**
   * Easy access to an HTMLElement that can be controlled imperatively.
   *
   * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
   *
   * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
   */
  x(k(ImperativeElementU));
  /**
   * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
   *
   * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
   *
   * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
   *
   * @compositeParams
   */
  function useImperativeProps(_ref9) {
    let {
      refElementReturn: {
        getElement
      }
    } = _ref9;
    monitorCallCount(useImperativeProps);
    const currentImperativeProps = _({
      className: new Set(),
      style: {},
      children: null,
      html: null,
      others: {}
    });
    const hasClass = T$1(cls => {
      return currentImperativeProps.current.className.has(cls);
    }, []);
    const setClass = T$1((cls, enabled) => {
      if (hasClass(cls) == !enabled) {
        var _getElement;
        (_getElement = getElement()) === null || _getElement === void 0 ? void 0 : _getElement.classList[enabled ? "add" : "remove"](cls);
        currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
      }
    }, []);
    const setStyle = T$1((prop, value) => {
      const element = getElement();
      if (element) {
        if (currentImperativeProps.current.style[prop] != value) {
          currentImperativeProps.current.style[prop] = value;
          if (prop.startsWith("--")) {
            if (value != null) element.style.setProperty(prop, "".concat(value));else element.style.removeProperty(prop);
          } else {
            element.style[prop] = value !== null && value !== void 0 ? value : "";
          }
        }
      }
    }, []);
    const setChildren = T$1(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.children != children) {
        currentImperativeProps.current.children = children;
        currentImperativeProps.current.html = null;
        e.textContent = children;
      }
    }, []);
    const dangerouslySetInnerHTML = T$1(children => {
      let e = getElement();
      if (e && currentImperativeProps.current.html != children) {
        currentImperativeProps.current.children = null;
        currentImperativeProps.current.html = children;
        e.innerHTML = children;
      }
    }, []);
    const dangerouslyAppendHTML = T$1(children => {
      let e = getElement();
      if (e && children) {
        const newChild = htmlToElement(e, children);
        console.assert(newChild && newChild instanceof Node);
        if (newChild && newChild instanceof Node) {
          var _currentImperativePro;
          currentImperativeProps.current.children = null;
          (_currentImperativePro = currentImperativeProps.current).html || (_currentImperativePro.html = "");
          currentImperativeProps.current.html += children;
          e.appendChild(newChild);
          return newChild;
        }
      }
      return null;
    }, []);
    const getAttribute = T$1(prop => {
      return currentImperativeProps.current.others[prop];
    }, []);
    const setAttribute = T$1((prop, value) => {
      if (value != null) {
        if (getAttribute(prop) != value) {
          var _getElement2;
          currentImperativeProps.current.others[prop] = value;
          (_getElement2 = getElement()) === null || _getElement2 === void 0 ? void 0 : _getElement2.setAttribute(prop, value);
        }
      } else {
        if (getAttribute(prop) != undefined) {
          var _getElement3;
          delete currentImperativeProps.current.others[prop];
          (_getElement3 = getElement()) === null || _getElement3 === void 0 ? void 0 : _getElement3.removeAttribute(prop);
        }
      }
    }, []);
    const setEventHandler = T$1((type, handler, options) => {
      const element = getElement();
      const mappedKey = EventMapping[type];
      if (element) {
        if (handler) {
          element.addEventListener(type, handler, options);
          currentImperativeProps.current.others[mappedKey] = handler;
        } else if (currentImperativeProps.current.others[mappedKey]) {
          element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
          currentImperativeProps.current.others[mappedKey] = undefined;
        }
      }
    }, []);
    return {
      imperativePropsReturn: _({
        hasClass,
        setClass,
        setStyle,
        getAttribute,
        setAttribute,
        setEventHandler,
        setChildren,
        dangerouslySetInnerHTML,
        dangerouslyAppendHTML
      }).current,
      props: useMergedProps({
        className: [...currentImperativeProps.current.className].join(" "),
        style: currentImperativeProps.current.style
      }, currentImperativeProps.current.html ? {
        dangerouslySetInnerHTML: {
          __html: currentImperativeProps.current.html
        }
      } : {}, {
        children: currentImperativeProps.current.children
      }, currentImperativeProps.current.others)
    };
  }
  function ImperativeElementU(_ref10, ref) {
    let {
      tag: Tag,
      handle,
      ...props
    } = _ref10;
    const {
      propsStable,
      refElementReturn
    } = useRefElement({
      refElementParameters: {}
    });
    const {
      props: imperativeProps,
      imperativePropsReturn: imperativeHandle
    } = useImperativeProps({
      refElementReturn
    });
    A(handle, () => imperativeHandle);
    return y$1(Tag, useMergedProps(propsStable, imperativeProps, props, {
      ref
    }));
  }
  G(null);
  function getExclusiveTransitionContextPrememoization(exclusivityKey) {
    if (exclusivityKey == null) return null;
    return G(null);
  }
  const SwappableContext = G({
    getAnimateOnMount: () => false
  });
  /**
   * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
   *
   * If
   */
  const GetExclusiveTransitionContext = memoize(getExclusiveTransitionContextPrememoization);
  const CssClassContext = G({
    GetBaseClass: () => "ptl",
    GetEnterClass: () => "n",
    GetExitClass: () => "x",
    GetMeasureClass: () => "m",
    GetInitClass: () => "i",
    GetTransitionClass: () => "t",
    GetFinalizeClass: () => "f"
  });
  function useCssClasses() {
    const {
      GetBaseClass,
      GetEnterClass,
      GetExitClass,
      GetMeasureClass,
      GetInitClass,
      GetTransitionClass,
      GetFinalizeClass
    } = q$1(CssClassContext);
    const GetDirectionClass = T$1(direction => {
      switch (direction) {
        case "enter":
          return GetEnterClass();
        case "exit":
          return GetExitClass();
      }
    }, []);
    const GetPhaseClass = T$1(phase => {
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
  let globalCount = -1;
  function ExclusiveTransitionProvider(_ref11) {
    let {
      exclusivityKey,
      children
    } = _ref11;
    useEnsureStability("ExclusiveTransitionProvider", exclusivityKey);
    const [getNextIndexInLine, setNextIndexInLine] = usePassiveState(null);
    const {
      context,
      managedChildrenReturn,
      managedChildrenReturn: {
        getChildren
      }
    } = useManagedChildren({
      managedChildrenParameters: {}
    });
    const {
      changeIndex,
      getCurrentIndex
    } = useChildrenFlag({
      getChildren,
      closestFit: false,
      initialIndex: null,
      onIndexChange: null,
      setAt: T$1((m, v) => {
        m.setExclusivelyOpen(v);
      }, []),
      getAt: T$1(m => m.getExclusivelyOpen(), []),
      isValid: T$1(m => {
        return true;
      }, []),
      onClosestFit: null
    });
    const onVisibilityChange = T$1((index, visible) => {
      const nextInLine = getNextIndexInLine();
      const currentInLine = getCurrentIndex();
      if (visible == "show" && index != currentInLine) {
        /**
         * When a child transition shows itself initially
         * (i.e. requests itself to be the exclusive transition)
         * we either let it open immediately if there's no one finishing their exit,
         * or wait until that aforementioned exit has finished.
         */
        if (currentInLine == null) {
          changeIndex(index);
        } else {
          var _getChildren$getAt, _getChildren$getAt$fo;
          (_getChildren$getAt = getChildren().getAt(currentInLine)) === null || _getChildren$getAt === void 0 || (_getChildren$getAt$fo = _getChildren$getAt.forceClose) === null || _getChildren$getAt$fo === void 0 ? void 0 : _getChildren$getAt$fo.call(_getChildren$getAt);
          setNextIndexInLine(index);
        }
      } else if (visible == "hidden") {
        /**
         * When a child transition has finished its exit transition,
         * make sure that if someone requested to be shown in the meantime
         * that we do so.
         */
        if (nextInLine != null) {
          changeIndex(nextInLine);
          setNextIndexInLine(null);
        } else {
          changeIndex(null);
        }
      }
    }, []);
    const context2 = useMemoObject({
      ...context,
      exclusiveTransitionContext: useMemoObject({
        exclusivityKey,
        onVisibilityChange
      })
    });
    const ExclusiveTransitionContext = GetExclusiveTransitionContext(exclusivityKey);
    return ExclusiveTransitionContext == null ? children !== null && children !== void 0 ? children : null : o$1(ExclusiveTransitionContext.Provider, {
      value: context2,
      children: children
    });
  }
  function useExclusiveTransition(_ref12) {
    let {
      transitionParameters: {
        show
      },
      exclusiveTransitionParameters: {
        forceClose,
        exclusivityKey
      }
    } = _ref12;
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c ? q$1(c) : null;
    const index = F$1(() => {
      globalCount += 1;
      return globalCount.toString();
    }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState(!!show);
    useManagedChild({
      context,
      info: {
        index,
        getExclusivelyOpen,
        setExclusivelyOpen,
        forceClose
      }
    });
    const parentOnVisChange = context === null || context === void 0 ? void 0 : context.exclusiveTransitionContext.onVisibilityChange;
    const onVisibilityChange = T$1(visible => {
      parentOnVisChange === null || parentOnVisChange === void 0 ? void 0 : parentOnVisChange(index, visible == false ? "hidden" : "show");
    }, [parentOnVisChange, index]);
    y(() => {
      if (show) parentOnVisChange === null || parentOnVisChange === void 0 ? void 0 : parentOnVisChange(index, "show");
    }, [show, parentOnVisChange, index]);
    return {
      exclusiveTransitionReturn: {
        isExclusive: context != null,
        exclusivelyOpen,
        setExclusivelyOpen,
        getExclusivelyOpen,
        onVisibilityChange
      }
    };
  }

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   *
   * TODO: Still needed?
   */
  function forwardElementRef(Component) {
    const ForwardedComponent = k(Component);
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
    const lastNonNullValue = _(null);
    p(() => {
      if (value != null) lastNonNullValue.current = value;
    }, [value]);
    return value !== null && value !== void 0 ? value : lastNonNullValue.current;
  }

  /**
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateSwappableProps(_ref13, otherProps) {
    let {
      inline
    } = _ref13;
    const {
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
  const Swappable = x(forwardElementRef(function Swappable(_ref14, ref) {
    var _inline;
    let {
      children: c,
      inline,
      childrenAnimateOnMount,
      exclusivityKey,
      ...p$1
    } = _ref14;
    let children = c;
    if (!children.type) children = !inline ? o$1("div", {
      children: children
    }) : o$1("span", {
      children: children
    });
    (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    const transitionProps = useCreateSwappableProps({
      inline
    }, {
      ...p$1,
      ref
    });
    const mergedWithChildren = useMergedProps(transitionProps, children.props);
    const animateOnMount = _(childrenAnimateOnMount !== null && childrenAnimateOnMount !== void 0 ? childrenAnimateOnMount : false);
    p(() => {
      animateOnMount.current = true;
    }, []);
    const contextValue = _({
      getAnimateOnMount: () => {
        return animateOnMount.current;
      }
    });
    let ret = F$2(children, mergedWithChildren);
    ret = o$1(SwappableContext.Provider, {
      value: contextValue.current,
      children: ret
    });
    if (exclusivityKey) {
      ret = o$1(ExclusiveTransitionProvider, {
        exclusivityKey: exclusivityKey,
        children: ret
      }, exclusivityKey);
    }
    return ret;
  }));
  // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
  // Not perfect, but it's not supposed to be. `inline` is for perfect.
  const inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);
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
   * @compositeParams
   */
  function useTransition(_ref15) {
    var _animateOnMount, _measure, _easingIn, _easingOut;
    let {
      transitionParameters: {
        propsIncoming: {
          children,
          ...p$1
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
        onVisibilityChange,
        ...void2
      },
      exclusiveTransitionParameters: {
        exclusivityKey,
        ...void3
      },
      refElementParameters,
      ...void1
    } = _ref15;
    useEnsureStability("useTransition", onVisibilityChange);
    const {
      getAnimateOnMount
    } = q$1(SwappableContext);
    exitVisibility || (exitVisibility = "hidden");
    (_animateOnMount = animateOnMount) !== null && _animateOnMount !== void 0 ? _animateOnMount : animateOnMount = getAnimateOnMount();
    (_measure = measure) !== null && _measure !== void 0 ? _measure : measure = false;
    const getExitVisibility = useStableGetter(exitVisibility);
    const {
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
    const getMeasure = useStableGetter(measure);
    const {
      exclusiveTransitionReturn: {
        exclusivelyOpen,
        isExclusive,
        onVisibilityChange: exclusiveTransitionVisibilityChange
      }
    } = useExclusiveTransition({
      transitionParameters: {
        show
      },
      exclusiveTransitionParameters: {
        exclusivityKey,
        forceClose: useStableCallback(() => {
          internalOnShowChanged(false, getMeasure());
        })
      }
    });
    if (isExclusive) {
      show = show && exclusivelyOpen;
    }
    const {
      refElementReturn: {
        getElement
      },
      propsStable
    } = useRefElement({
      refElementParameters
    });
    const cssProperties = _({});
    const classNames = _(new Set([// This is removed during useLayoutEffect on the first render
    // (at least once `show` is non-null)
    "".concat(GetBaseClass(), "-pending")]));
    const handleTransitionFinished = T$1(() => {
      const state = getState();
      console.assert(!!state);
      if (state) {
        const [direction, phase] = parseState(state);
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
    const otherProps = _({
      onTransitionEnd: e => {
        if (e.target == getElement() && e.elapsedTime) {
          handleTransitionFinished();
        }
      }
    });
    const hasMounted = _(false);
    /**
     * Sets the element's CSS class to match the given direction and phase.
     */
    const updateClasses = T$1((element, direction, phase) => {
      if (element == null) return;
      const exitVisibility = getExitVisibility();
      const allClassesToRemove = ["".concat(GetBaseClass(), "-").concat(GetEnterClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetMeasureClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetInitClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetTransitionClass()), "".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-").concat(GetFinalizeClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetMeasureClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetInitClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetTransitionClass()), "".concat(GetBaseClass(), "-").concat(GetExitClass(), "-").concat(GetFinalizeClass()), "".concat(GetBaseClass(), "-ev-", "inert"), "".concat(GetBaseClass(), "-ev-", "removed"), "".concat(GetBaseClass(), "-ev-", "hidden"), "".concat(GetBaseClass(), "-ev-", "visible"), "".concat(GetBaseClass(), "-pending")];
      const allClassesToAdd = ["".concat(GetBaseClass()), "".concat(GetBaseClass(), "-").concat(GetDirectionClass(direction)), phase ? "".concat(GetBaseClass(), "-").concat(GetDirectionClass(direction), "-").concat(GetPhaseClass(phase)) : "", "".concat(GetBaseClass(), "-ev-").concat(exitVisibility)];
      element.classList.remove(...allClassesToRemove);
      allClassesToRemove.map(v => classNames.current.delete(v));
      element.classList.add(...allClassesToAdd);
      allClassesToAdd.map(v => classNames.current.add(v));
    }, []);
    /**
     * Updates a single "measure" variable (or removes it)
     */
    const updateSizeProperty = T$1((element, varName, value) => {
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
    const measureElementAndUpdateProperties = T$1((element, measure) => {
      if (element) {
        var _size, _size2, _size3, _size4;
        let size = null;
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
    const timeoutHandle = _(-1);
    const timeoutClearFunction = _(null);
    /**
     * Any time the state changes, there's some logic we need to run:
     *
     * * If we're changing to an `init` phase, update the classes, then wait a moment and then change to the `transition` phase.
     * * If we're changing to a `transition` phase, update the classes, then wait until the transition completes, then change to the `finalize` phase.
     *
     * Any change in state or classes/styles does not implicitly cause a re-render.
     */
    const onStateChange = T$1((nextState, prevState, reason) => {
      if (nextState == null) return;
      const [nextDirection, nextPhase] = parseState(nextState);
      const element = getElement();
      // Make sure no stale change code ever runs
      if (timeoutHandle.current >= 0 && timeoutClearFunction.current) timeoutClearFunction.current(timeoutHandle.current);
      // Handle inert props/property
      const exitVisibility = getExitVisibility();
      if (exitVisibility) {
        const inert = exitVisibility == "inert" && nextDirection == "exit" && nextPhase == "finalize" ? true : undefined;
        if (inert) otherProps.current.inert = true;else delete otherProps.current["inert"];
        if (element) element.inert = inert || false;
      }
      const isBeingPainted = nextDirection == "enter" || nextDirection == "exit" && nextPhase != "finalize";
      onVisibilityChange === null || onVisibilityChange === void 0 ? void 0 : onVisibilityChange(isBeingPainted);
      exclusiveTransitionVisibilityChange === null || exclusiveTransitionVisibilityChange === void 0 ? void 0 : exclusiveTransitionVisibilityChange(isBeingPainted);
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
    const [getState, setState] = usePassiveState(onStateChange, returnNull, runImmediately);
    // When we mount, and every time thereafter that `show` changes,
    // change our current state according to that `show` value.
    y(() => internalOnShowChanged(show, measure), [measure, show]);
    // This has no dependences and is relied on in two different areas
    function internalOnShowChanged(show, measure) {
      // If `show` is null, then we don't change anything.
      if (show == null) return;
      // (If `show` is true/false, we'll remove the CSS classes during `onChange`)
      const currentState = getState();
      let nextPhase = measure ? "measure" : "init";
      if (currentState) {
        const [currentDirection, currentPhase] = parseState(currentState);
        if (currentPhase != "finalize") nextPhase = "transition";
      }
      // Note: the setState change handler runs immediately with no debounce.
      if (show) {
        if (hasMounted.current || animateOnMount) setState("enter-".concat(nextPhase));else setState("enter-finalize");
      } else {
        if (hasMounted.current || animateOnMount) setState("exit-".concat(nextPhase));else setState("exit-finalize");
      }
      hasMounted.current = true;
    }
    if (duration != null) cssProperties.current["--".concat(GetBaseClass(), "-duration")] = duration + "ms";else delete cssProperties.current["--".concat(GetBaseClass(), "-duration")];
    (_easingIn = easingIn) !== null && _easingIn !== void 0 ? _easingIn : easingIn = easing;
    (_easingOut = easingOut) !== null && _easingOut !== void 0 ? _easingOut : easingOut = easing;
    if (easingOut != null) cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetExitClass(), "-timing-function")] = easingOut;else delete cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetExitClass(), "-timing-function")];
    if (easingIn != null) cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-timing-function")] = easingIn;else delete cssProperties.current["--".concat(GetBaseClass(), "-").concat(GetEnterClass(), "-timing-function")];
    // No matter what delayMountUntilShown is,
    // once we've rendered our children once, 
    // ensure that we don't unmount them again and waste all that work.
    // (If you really need this you can just unmount the entire transition itself)
    const definitelyShouldMountChildren = show || !delayMountUntilShown;
    const hasRenderedChildren = _(false);
    const renderChildren = definitelyShouldMountChildren || hasRenderedChildren.current;
    p(() => {
      if (definitelyShouldMountChildren) hasRenderedChildren.current || (hasRenderedChildren.current = true);
    }, [hasRenderedChildren.current ? false : definitelyShouldMountChildren]);
    const childrenIsVnode = children && children.type && children.props;
    const finalProps = useMergedProps(p$1, propsStable, otherProps.current, {
      className: [...classNames.current, "".concat(GetBaseClass()), "".concat(GetBaseClass(), "-ev-").concat(exitVisibility), "".concat(GetBaseClass(), "-inline-direction-", "ltr"), "".concat(GetBaseClass(), "-block-direction-", "ttb")].join(" "),
      style: cssProperties.current
    }, childrenIsVnode ? {
      ref: children.ref,
      ...children.props
    } : {});
    const resetContext = _({
      getAnimateOnMount: returnFalse
    }).current;
    let modifiedChildren;
    if (childrenIsVnode) {
      modifiedChildren = o$1(SwappableContext.Provider, {
        value: resetContext,
        children: F$2(children, finalProps)
      });
    } else {
      modifiedChildren = o$1(SwappableContext.Provider, {
        value: resetContext,
        children: o$1("span", {
          ...finalProps,
          children: children
        })
      });
    }
    return renderChildren ? modifiedChildren : null;
  }
  function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    const p = globalThis._dummy;
    globalThis._dummy = e.getBoundingClientRect();
    globalThis._dummy = e.style.opacity;
    globalThis._dummy = e.style.transform;
    globalThis._dummy = p;
    return e;
  }

  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useBasePropsFade(_ref16) {
    let {
      fadeParameters: {
        fadeMin,
        fadeMax
      }
    } = _ref16;
    const {
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
  const Fade = x(forwardElementRef(function Fade(_ref17, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref17;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        propsIncoming: useMergedProps({
          ref,
          ...rest
        }, useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }))
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  function useBasePropsClip(_ref18) {
    var _ref19, _ref20, _ref21, _ref22;
    let {
      clipParameters: {
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline
      }
    } = _ref18;
    const {
      GetBaseClass
    } = useCssClasses();
    return {
      className: clsx("".concat(GetBaseClass(), "-clip")),
      style: {
        ["--".concat(GetBaseClass(), "-clip-origin-inline")]: (_ref19 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref19 !== void 0 ? _ref19 : 0.5,
        ["--".concat(GetBaseClass(), "-clip-origin-block")]: (_ref20 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref20 !== void 0 ? _ref20 : 0,
        ["--".concat(GetBaseClass(), "-clip-min-inline")]: (_ref21 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref21 !== void 0 ? _ref21 : 1,
        ["--".concat(GetBaseClass(), "-clip-min-block")]: (_ref22 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref22 !== void 0 ? _ref22 : 0
      }
    };
  }
  const Clip = x(forwardElementRef(function Clip(_ref23, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref23;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps(useBasePropsClip({
          clipParameters: {
            clipMin,
            clipMinInline,
            clipMinBlock,
            clipOrigin,
            clipOriginInline,
            clipOriginBlock
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const ClipFade = x(forwardElementRef(function ClipFade(_ref24, ref) {
    let {
      delayMountUntilShown,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref24;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
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
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */
  function useBasePropsCollapse(_ref25) {
    let {
      collapseParameters: {
        minBlockSize
      }
    } = _ref25;
    const {
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
  const Collapse = x(forwardElementRef(function Collapse(_ref26, ref) {
    let {
      show,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      duration,
      delayMountUntilShown,
      minBlockSize,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref26;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: true,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps(useBasePropsCollapse({
          collapseParameters: {
            minBlockSize
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const CollapseFade = x(forwardElementRef(function CollapseFade(_ref27, ref) {
    let {
      show,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      duration,
      animateOnMount,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      exitVisibility,
      minBlockSize,
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref27;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: true,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps(useBasePropsFade({
          fadeParameters: {
            fadeMax,
            fadeMin
          }
        }), useBasePropsCollapse({
          collapseParameters: {
            minBlockSize
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));

  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
   */
  function useBasePropsFlip(_ref28) {
    var _useLastNonNullValue, _useLastNonNullValue2;
    let {
      flipParameters: {
        flipAngleBlock,
        flipAngleInline,
        flipPerspective
      }
    } = _ref28;
    const {
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
   * exclusivityKey allows for convenient setups inside of a `SwapContainer`
   * (`flipInline={index - selectedIndex}` or similar.)
   *
   * @see `Transitionable`
   */
  const Flip = x(forwardElementRef(function Flip(_ref29, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      delayMountUntilShown,
      flipAngleInline,
      flipAngleBlock,
      flipPerspective,
      show,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref29;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps(useBasePropsFlip({
          flipParameters: {
            flipAngleBlock,
            flipAngleInline,
            flipPerspective
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));

  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
   */
  function useBasePropsSlide(_ref30) {
    var _slideTargetInline, _slideTargetBlock;
    let {
      slideParameters: {
        slideTargetInline,
        slideTargetBlock
      }
    } = _ref30;
    slideTargetInline = useLastNonNullValue(slideTargetInline);
    slideTargetBlock = useLastNonNullValue(slideTargetBlock);
    const {
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
  const Slide = x(forwardElementRef(function Slide(_ref31, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      onVisibilityChange,
      slideTargetInline,
      slideTargetBlock,
      show,
      animateOnMount,
      exitVisibility,
      delayMountUntilShown,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref31;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        easing,
        easingIn,
        easingOut,
        onVisibilityChange,
        propsIncoming: useMergedProps(useBasePropsSlide({
          slideParameters: {
            slideTargetBlock,
            slideTargetInline
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const SlideFade = x(forwardElementRef(function SlideFade(_ref32, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      delayMountUntilShown,
      slideTargetBlock,
      slideTargetInline,
      exitVisibility,
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref32;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
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
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tandem with a `Transitionable` component (or `useTransition`).
   */
  function useBasePropsZoom(_ref33) {
    var _ref34, _ref35, _ref36, _ref37;
    let {
      zoomParameters: {
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock
      }
    } = _ref33;
    const {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-zoom"),
      style: {
        ["--".concat(GetBaseClass(), "-zoom-origin-inline")]: "".concat((_ref34 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref34 !== void 0 ? _ref34 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-origin-block")]: "".concat((_ref35 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref35 !== void 0 ? _ref35 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-min-inline")]: "".concat((_ref36 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref36 !== void 0 ? _ref36 : 0),
        ["--".concat(GetBaseClass(), "-zoom-min-block")]: "".concat((_ref37 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref37 !== void 0 ? _ref37 : 0)
      }
    };
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  const Zoom = x(forwardElementRef(function Zoom(_ref38, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref38;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps(useBasePropsZoom({
          zoomParameters: {
            zoomMin,
            zoomMinBlock,
            zoomMinInline,
            zoomOrigin,
            zoomOriginBlock,
            zoomOriginInline
          }
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const SlideZoom = x(forwardElementRef(function SlideZoom(_ref39, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref39;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
        propsIncoming: useMergedProps({
          ref,
          ...rest
        }, useBasePropsZoom({
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
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const SlideZoomFade = x(forwardElementRef(function SlideZoomFade(_ref40, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref40;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
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
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    });
  }));
  const ZoomFade = x(forwardElementRef(function ZoomFade(_ref41, ref) {
    let {
      duration,
      exclusivityKey,
      easing,
      easingIn,
      easingOut,
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
      onVisibilityChange,
      onElementChange,
      onMount,
      onUnmount,
      ...rest
    } = _ref41;
    return useTransition({
      refElementParameters: {
        onElementChange,
        onMount,
        onUnmount
      },
      transitionParameters: {
        measure: false,
        show,
        duration,
        animateOnMount,
        exitVisibility,
        delayMountUntilShown,
        onVisibilityChange,
        easing,
        easingIn,
        easingOut,
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
        }), {
          ref,
          ...rest
        })
      },
      exclusiveTransitionParameters: {
        exclusivityKey
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
    const [exclusive, setExclusive] = h(false);
    const [animateOnMount, setAnimateOnMount] = h(true);
    const [writingMode, setWritingMode] = h("horizontal");
    const [show1, setShow1] = h("pending");
    const [show3, setShow3] = h(0);
    const [reflow, setReflow] = h("hidden");
    const [duration, setDuration] = h(500);
    const [text, setText] = h("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    const [flicker, setFlicker] = h(0);
    y(() => {
      if (flicker > 0) {
        setShow1(s => s == "showing" ? "hiding" : "showing");
        setFlicker(f => f - 1);
      }
    }, [flicker]);
    //const onInput1 = useCallback((e: h.JSX.TargetedEvent<HTMLInputElement>) => { setShow1(o => !o); e.preventDefault(); }, []);
    const onInput3 = T$1(e => {
      setText(e.target.value);
      e.preventDefault();
    }, []);
    const onInput4 = T$1(e => {
      setReflow("hidden");
      e.preventDefault();
    }, []);
    const onInput5 = T$1(e => {
      setReflow("removed");
      e.preventDefault();
    }, []);
    const onInput5b = T$1(e => {
      setReflow("visible");
      e.preventDefault();
    }, []);
    const onInput6 = T$1(e => {
      setWritingMode("horizontal");
      e.preventDefault();
    }, []);
    const onInput7 = T$1(e => {
      setWritingMode("vertical");
      e.preventDefault();
    }, []);
    const onInput8 = T$1(e => {
      setDuration(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onInput9 = T$1(e => {
      setExclusive(e.target.checked);
      e.preventDefault();
    }, []);
    const onInputA = T$1(e => {
      setShow3(0);
      e.preventDefault();
    }, []);
    const onInputB = T$1(e => {
      setShow3(1);
      e.preventDefault();
    }, []);
    const onInputC = T$1(e => {
      setShow3(2);
      e.preventDefault();
    }, []);
    const onInputD = T$1(e => {
      setShow3(null);
      e.preventDefault();
    }, []);
    return o$1(k$2, {
      children: [o$1("div", {
        id: "controls",
        children: [o$1("h1", {
          children: "Preact Transition"
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("button", {
            onClick: () => setFlicker(1),
            children: "Flicker 1"
          }), o$1("button", {
            onClick: () => setFlicker(2),
            children: "Flicker 2"
          }), o$1("button", {
            onClick: () => setFlicker(3),
            children: "Flicker 3"
          }), o$1("button", {
            onClick: () => setFlicker(4),
            children: "Flicker 4"
          })]
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("div", {
            children: "Outer card visible state: "
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-show",
              onInput: e => {
                e.preventDefault();
                setShow1("unmounted");
              },
              checked: show1 == "unmounted"
            }), "Unmounted"]
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-show",
              onInput: e => {
                e.preventDefault();
                setShow1("pending");
              },
              checked: show1 == "pending",
              disabled: show1 == "hiding" || show1 == "showing"
            }), "Mounted, `show` is `null`"]
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-show",
              onInput: e => {
                e.preventDefault();
                setShow1("hiding");
              },
              checked: show1 == "hiding"
            }), "Mounted, `show` is `false`"]
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-show",
              onInput: e => {
                e.preventDefault();
                setShow1("showing");
              },
              checked: show1 == "showing"
            }), "Mounted, `show` is `true`"]
          })]
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("div", {
            children: "Outer card mount animation: "
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-mount-animate",
              onInput: e => {
                e.preventDefault();
                setAnimateOnMount(false);
              },
              checked: animateOnMount == false
            }), "Don't animate on mount"]
          }), o$1("label", {
            className: "",
            children: [o$1("input", {
              type: "radio",
              name: "outer-card-mount-animate",
              onInput: e => {
                e.preventDefault();
                setAnimateOnMount(true);
              },
              checked: animateOnMount == true
            }), "Animate on mount"]
          })]
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("div", {
            children: "Visible Swappable child: "
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "swap-index",
              onInput: onInputD,
              checked: show3 == null
            }), "(none)"]
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "swap-index",
              onInput: onInputA,
              checked: show3 == 0
            }), "#0"]
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "swap-index",
              onInput: onInputB,
              checked: show3 == 1
            }), "#1"]
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "swap-index",
              onInput: onInputC,
              checked: show3 == 2
            }), "#2"]
          }), o$1("label", {
            children: [o$1("input", {
              type: "checkbox",
              onInput: onInput9,
              checked: exclusive
            }), "Exclusive"]
          })]
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("div", {
            children: "When transitioned out:"
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "hidden-type",
              onInput: onInput5b,
              checked: reflow == "visible"
            }), "Do not hide (incl. focusables)"]
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "hidden-type",
              onInput: onInput4,
              checked: reflow == "hidden"
            }), "visibility: hidden"]
          }), o$1("label", {
            className: "code-mimic",
            children: [o$1("input", {
              type: "radio",
              name: "hidden-type",
              onInput: onInput5,
              checked: reflow == "removed"
            }), "display: none"]
          })]
        }), o$1("div", {
          children: o$1("label", {
            children: [o$1("input", {
              onInput: onInput8,
              type: "number",
              value: duration
            }), " Duration"]
          })
        }), o$1("div", {
          className: "radiogroup",
          children: [o$1("div", {
            children: "Demo's writing mode: "
          }), o$1("label", {
            children: [o$1("input", {
              type: "radio",
              name: "writing-mode",
              onInput: onInput6,
              checked: writingMode == "horizontal"
            }), "Horizontal"]
          }), o$1("label", {
            children: [o$1("input", {
              type: "radio",
              name: "writing-mode",
              onInput: onInput7,
              checked: writingMode == "vertical"
            }), "Vertical"]
          })]
        }), o$1("textarea", {
          cols: 30,
          rows: 5,
          onInput: onInput3,
          value: text
        })]
      }), o$1("div", {
        id: "root-body",
        className: "writing-mode-".concat(writingMode),
        style: {
          ["--".concat(useCssClasses().GetBaseClass(), "-duration")]: "".concat(duration, "ms")
        },
        children: [o$1(FadeDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(SlideDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(ZoomDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(ClipDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(FlipDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(ZoomSlideDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        }), o$1(CollapseDemo, {
          cardShow: show1,
          animateOnMount: animateOnMount,
          exclusive: exclusive,
          contentIndex: show3,
          exitVisibility: reflow,
          text: text
        })]
      }, writingMode)]
    });
  }
  function FadeDemo(_ref42) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref42;
    const [min, setMin] = h(0);
    const [max, setMax] = h(1);
    const onMinInput = T$1(e => {
      setMin(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMaxInput = T$1(e => {
      setMax(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const C = Fade;
    const CS = "Fade";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      fadeMin: min,
      fadeMax: max,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Fade"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Minimum fade ", o$1("input", {
              onInput: onMinInput,
              value: min,
              type: "number",
              min: 0,
              max: 1,
              step: 0.0125
            })]
          }), o$1("label", {
            children: ["Maximum fade ", o$1("input", {
              onInput: onMaxInput,
              value: max,
              type: "number",
              min: 0,
              max: 1,
              step: 0.0125
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          fadeMin: min,
          fadeMax: max,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(min != 0 ? " \n  fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n  fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 0}").concat(min != 0 ? " \n        fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n        fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ClipDemo(_ref43) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref43;
    const [originX, setOriginX] = h(0.5);
    const [originY, setOriginY] = h(0);
    const [minX, setMinX] = h(1);
    const [minY, setMinY] = h(0);
    const [withFade, setWithFade] = h(true);
    h(false);
    const onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    const C = withFade ? ClipFade : Clip;
    const CS = withFade ? "ClipFade" : "Clip";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      clipOriginInline: originX,
      clipOriginBlock: originY,
      clipMinInline: minX,
      clipMinBlock: minY,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Clip"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Origin to center the effect around on the inline-axis position (X-axis in English, etc.) ", o$1("input", {
              onInput: onOriginXInput,
              value: originX,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  ", o$1("input", {
              onInput: onOriginYInput,
              value: originY,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Minimum size on the inline-axis ", o$1("input", {
              onInput: onMinXInput,
              value: minX,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["Minimum size on the block-axis  ", o$1("input", {
              onInput: onMinYInput,
              value: minY,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["With fade", o$1("input", {
              checked: withFade,
              onInput: onWithFadeInput,
              type: "checkbox"
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          clipMinInline: minX,
          clipMinBlock: minY,
          clipOriginInline: originX,
          clipOriginBlock: originY,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 0}").concat(originX != 0.5 ? " \n        clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ZoomSlideDemo(_ref44) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref44;
    const [originX, setOriginX] = h(0.5);
    const [originY, setOriginY] = h(0);
    const [minX, setMinX] = h(0.75);
    const [minY, setMinY] = h(0.75);
    const [slideX, setSlideX] = h(0.25);
    const [slideY, setSlideY] = h(0);
    const [withFade, setWithFade] = h(true);
    const onSlideXInput = T$1(e => {
      setSlideX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onSlideYInput = T$1(e => {
      setSlideY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    const onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const C = withFade ? SlideZoomFade : SlideZoom;
    const CS = withFade ? "SlideZoomFade" : "SlideZoom";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)) || null,
      slideTargetBlock: slideY * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)) || null,
      zoomOriginInline: originX,
      zoomOriginBlock: originY,
      zoomMinInline: minX,
      zoomMinBlock: minY,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Zoom & Slide"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Transform origin on the inline-axis position (X-axis in English, etc.) ", o$1("input", {
              onInput: onOriginXInput,
              value: originX,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Transform origin on the block-axis position (Y-axis in English, etc.)  ", o$1("input", {
              onInput: onOriginYInput,
              value: originY,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Target block-axis position (X-axis in English, etc.) ", o$1("input", {
              onInput: onSlideXInput,
              value: slideX,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Target inline-axis position (Y-axis in English, etc.)  ", o$1("input", {
              onInput: onSlideYInput,
              value: slideY,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Minimum size on the inline-axis ", o$1("input", {
              onInput: onMinXInput,
              value: minX,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["Minimum size on the block-axis  ", o$1("input", {
              onInput: onMinYInput,
              value: minY,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["With fade", o$1("input", {
              checked: withFade,
              onInput: onWithFadeInput,
              type: "checkbox"
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          slideTargetInline: slideX || null,
          slideTargetBlock: slideY || null,
          zoomMinInline: minX,
          zoomMinBlock: minY,
          zoomOriginInline: originX,
          zoomOriginBlock: originY,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n  slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n  slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "}").concat(originX != 0.5 ? " \n        originX={".concat(originX, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n        slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n        slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ZoomDemo(_ref45) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref45;
    const [originX, setOriginX] = h(0.5);
    const [originY, setOriginY] = h(0);
    const [minX, setMinX] = h(0.75);
    const [minY, setMinY] = h(0.75);
    const [withFade, setWithFade] = h(true);
    const onOriginXInput = T$1(e => {
      setOriginX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onOriginYInput = T$1(e => {
      setOriginY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinXInput = T$1(e => {
      setMinX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onMinYInput = T$1(e => {
      setMinY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    const C = withFade ? ZoomFade : Zoom;
    const CS = withFade ? "ZoomFade" : "Zoom";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      zoomOriginInline: originX,
      zoomOriginBlock: originY,
      zoomMinInline: minX,
      zoomMinBlock: minY,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Zoom"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Transform origin on the inline-axis position (X-axis in English, etc.) ", o$1("input", {
              onInput: onOriginXInput,
              value: originX,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Transform origin on the block-axis position (Y-axis in English, etc.)  ", o$1("input", {
              onInput: onOriginYInput,
              value: originY,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Minimum size on the inline-axis ", o$1("input", {
              onInput: onMinXInput,
              value: minX,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["Minimum size on the block-axis  ", o$1("input", {
              onInput: onMinYInput,
              value: minY,
              type: "number",
              step: 0.125,
              min: 0,
              max: 1
            })]
          }), o$1("label", {
            children: ["With fade", o$1("input", {
              checked: withFade,
              onInput: onWithFadeInput,
              type: "checkbox"
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          zoomMinInline: minX,
          zoomMinBlock: minY,
          zoomOriginInline: originX,
          zoomOriginBlock: originY,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 0}").concat(originX != 0.5 ? " \n        originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(exitVisibility ? " \n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function SlideDemo(_ref46) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref46;
    const [slideX, setSlideX] = h(0.25);
    const [slideY, setSlideY] = h(0);
    const [withFade, setWithFade] = h(true);
    const onSlideXInput = T$1(e => {
      setSlideX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onSlideYInput = T$1(e => {
      setSlideY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    //const [bare, setBare] = useState(false);
    // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
    const C = withFade ? SlideFade : Slide;
    const CS = withFade ? "SlideFade" : "Slide";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      slideTargetInline: slideX * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)) || null,
      slideTargetBlock: slideY * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)),
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Slide"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Target block-axis position (X-axis in English, etc.) ", o$1("input", {
              onInput: onSlideXInput,
              value: slideX,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["Target inline-axis position (Y-axis in English, etc.)  ", o$1("input", {
              onInput: onSlideYInput,
              value: slideY,
              type: "number",
              step: 0.125,
              min: -2,
              max: 2
            })]
          }), o$1("label", {
            children: ["With fade", o$1("input", {
              checked: withFade,
              onInput: onWithFadeInput,
              type: "checkbox"
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          slideTargetInline: slideX || null,
          slideTargetBlock: slideY || null,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  slideTargetInline={").concat(slideX, "}\n  slideTargetBlock={").concat(slideY, "}\n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex, "}\n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}\n        slideTargetInline={").concat(slideX, " * Math.sign(0 - ").concat(contentIndex, ")}\n        slideTargetBlock={").concat(slideY, " * Math.sign(0 - ").concat(contentIndex, "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex, "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex, "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function CollapseDemo(_ref47) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref47;
    const [minBlockSize, setMinBlockSize] = h("0px");
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    const [withFade, setWithFade] = h(true);
    const C = withFade ? CollapseFade : Collapse;
    const CS = withFade ? "CollapseFade" : "Collapse";
    const E = exclusive ? "e" : null;
    const onMinSize = T$1(e => {
      setMinBlockSize(e.target.value);
      e.preventDefault();
    }, []);
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      minBlockSize: minBlockSize,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Collapse"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Minimum size: ", o$1("input", {
              type: "text",
              value: minBlockSize,
              onInput: onMinSize
            })]
          }), o$1("label", {
            children: ["With fade", o$1("input", {
              checked: withFade,
              onInput: onWithFadeInput,
              type: "checkbox"
            })]
          }), o$1("div", {
            children: "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."
          }), o$1("div", {
            children: ["In general, only use this component if you ", o$1("em", {
              children: "specifically"
            }), " need its reflow transitioning properties, because it's very taxing on, well, ", o$1("em", {
              children: "most"
            }), " devices, unless you take other precautions. If you want a \"disappear in place without zooming out\", consider a Clip effect."]
          })]
        }), o$1("div", {
          children: cardShow != "unmounted" && o$1(C, {
            show: cardShow == "pending" ? null : cardShow == "showing",
            animateOnMount: animateOnMount,
            exitVisibility: exitVisibility,
            minBlockSize: minBlockSize,
            children: o$1("div", {
              children: o$1(Swappable, {
                exclusivityKey: E,
                children: o$1("div", {
                  className: "card",
                  children: [makeChild(0), makeChild(1), makeChild(2)]
                })
              }, E)
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(minBlockSize && minBlockSize != "0px" ? " minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  {/* These cards have padding, \n      and height doesn't include that, \n      but a wrapper's would */}\n  <div>\n    <Swappable>\n      <div className=\"card\">\n        <").concat(CS, " \n          show={").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", " == 0}").concat(minBlockSize && minBlockSize != "0px" ? " \n          minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " \n          exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n          <div className=\"card-contents\">\n             {text}\n          </div>\n        </").concat(CS, ">\n      </div>\n    </Swappable>\n  </div>\n</").concat(CS, ">\n<").concat(CS, " show={1 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />\n<").concat(CS, " show={2 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />")
          })
        })]
      })]
    });
  }
  function FlipDemo(_ref48) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref48;
    const [flipX, setFlipX] = h(0);
    const [flipY, setFlipY] = h(180);
    const onFlipXInput = T$1(e => {
      setFlipX(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const onFlipYInput = T$1(e => {
      setFlipY(e.target.valueAsNumber);
      e.preventDefault();
    }, []);
    const C = Flip;
    const CS = "Flip";
    const E = exclusive ? "e" : null;
    const makeChild = i => o$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
      exitVisibility: exitVisibility,
      flipAngleInline: flipX * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)) || null,
      flipAngleBlock: flipY * Math.sign(i - (contentIndex !== null && contentIndex !== void 0 ? contentIndex : 0)) || null,
      children: o$1("div", {
        className: "card-contents",
        children: [halfText(text, i), o$1("div", {
          children: o$1("button", {
            children: "Focusable element"
          })
        })]
      })
    });
    return o$1("div", {
      className: "demo-section",
      children: [o$1("h2", {
        children: "Flip"
      }), o$1("div", {
        className: "demo",
        children: [o$1("div", {
          className: "demo-controls",
          children: [o$1("label", {
            children: ["Rotate on inline axis ", o$1("input", {
              type: "number",
              onInput: onFlipXInput,
              value: flipX
            })]
          }), o$1("label", {
            children: ["Rotate along block axis ", o$1("input", {
              type: "number",
              onInput: onFlipYInput,
              value: flipY
            })]
          })]
        }), cardShow != "unmounted" && o$1(C, {
          show: cardShow == "pending" ? null : cardShow == "showing",
          animateOnMount: animateOnMount,
          exitVisibility: exitVisibility,
          flipAngleInline: flipX,
          flipAngleBlock: flipY,
          children: o$1(Swappable, {
            exclusivityKey: E,
            children: o$1("div", {
              className: "card",
              children: [makeChild(0), makeChild(1), makeChild(2)]
            })
          })
        }), o$1("code", {
          children: o$1("pre", {
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  flipAngleInline={").concat(JSON.stringify(flipX), "} \n  flipAngleBlock={").concat(JSON.stringify(flipY), "} \n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "}\n        flipAngleInline={").concat(JSON.stringify(flipX), " * Math.sign(0 - ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", ")} \n        flipAngleBlock={").concat(JSON.stringify(flipY), " * Math.sign(0 - ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", ")} \n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex !== null && contentIndex !== void 0 ? contentIndex : "null", "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  requestAnimationFrame(() => {
    D$1(o$1(Demo, {}), document.getElementById("root"));
  });
})();
//# sourceMappingURL=bundle.js.map
