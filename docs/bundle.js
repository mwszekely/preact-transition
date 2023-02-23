(function () {
  'use strict';

  var n,
    l$1,
    u$1,
    t$1,
    r$2,
    o$1,
    f$1,
    e$1,
    c$1 = {},
    s$1 = [],
    a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function v$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function y$1(l, u, i) {
    var t,
      r,
      o,
      f = {};
    for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
    return p$1(l, f, t, r, null);
  }
  function p$1(n, i, t, r, o) {
    var f = {
      type: n,
      props: i,
      key: t,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++u$1 : o
    };
    return null == o && null != l$1.vnode && l$1.vnode(f), f;
  }
  function _$1(n) {
    return n.children;
  }
  function k$2(n, l, u, i, t) {
    var r;
    for (r in u) "children" === r || "key" === r || r in l || g$2(n, r, null, u[r], i);
    for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || g$2(n, r, l[r], u[r], i);
  }
  function b$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a$1.test(l) ? u : u + "px";
  }
  function g$2(n, l, u, i, t) {
    var r;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || b$1(n.style, l, "");
        if (u) for (l in u) i && u[l] === i[l] || b$1(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? w$2 : m$1, r) : n.removeEventListener(l, r ? w$2 : m$1, r);else if ("dangerouslySetInnerHTML" !== l) {
      if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function m$1(n) {
    t$1 = !0;
    try {
      return this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
    } finally {
      t$1 = !1;
    }
  }
  function w$2(n) {
    t$1 = !0;
    try {
      return this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
    } finally {
      t$1 = !1;
    }
  }
  function x$1(n, l) {
    this.props = n, this.context = l;
  }
  function A(n, l) {
    if (null == l) return n.__ ? A(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? A(n) : null;
  }
  function P(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return P(n);
    }
  }
  function C$1(n) {
    t$1 ? setTimeout(n) : f$1(n);
  }
  function T$2(n) {
    (!n.__d && (n.__d = !0) && r$2.push(n) && !$.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || C$1)($);
  }
  function $() {
    var n, l, u, i, t, o, f, e;
    for (r$2.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }); n = r$2.shift();) n.__d && (l = r$2.length, i = void 0, t = void 0, f = (o = (u = n).__v).__e, (e = u.__P) && (i = [], (t = h$1({}, o)).__v = o.__v + 1, M(e, o, t, u.__n, void 0 !== e.ownerSVGElement, null != o.__h ? [f] : null, i, null == f ? A(o) : f, o.__h), N$1(i, o), o.__e != f && P(o)), r$2.length > l && r$2.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }));
    $.__r = 0;
  }
  function H$1(n, l, u, i, t, r, o, f, e, a) {
    var h,
      v,
      y,
      d,
      k,
      b,
      g,
      m = i && i.__k || s$1,
      w = m.length;
    for (u.__k = [], h = 0; h < l.length; h++) if (null != (d = u.__k[h] = null == (d = l[h]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p$1(null, d, null, null, d) : Array.isArray(d) ? p$1(_$1, {
      children: d
    }, null, null, null) : d.__b > 0 ? p$1(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
      if (d.__ = u, d.__b = u.__b + 1, null === (y = m[h]) || y && d.key == y.key && d.type === y.type) m[h] = void 0;else for (v = 0; v < w; v++) {
        if ((y = m[v]) && d.key == y.key && d.type === y.type) {
          m[v] = void 0;
          break;
        }
        y = null;
      }
      M(n, d, y = y || c$1, t, r, o, f, e, a), k = d.__e, (v = d.ref) && y.ref != v && (g || (g = []), y.ref && g.push(y.ref, null, d), g.push(v, d.__c || k, d)), null != k ? (null == b && (b = k), "function" == typeof d.type && d.__k === y.__k ? d.__d = e = I$1(d, e, n) : e = z$2(n, d, y, m, k, e), "function" == typeof u.type && (u.__d = e)) : e && y.__e == e && e.parentNode != n && (e = A(y));
    }
    for (u.__e = b, h = w; h--;) null != m[h] && ("function" == typeof u.type && null != m[h].__e && m[h].__e == u.__d && (u.__d = L$1(i).nextSibling), q$1(m[h], m[h]));
    if (g) for (h = 0; h < g.length; h++) S(g[h], g[++h], g[++h]);
  }
  function I$1(n, l, u) {
    for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? I$1(i, l, u) : z$2(u, i, i, t, i.__e, l));
    return l;
  }
  function j$1(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      j$1(n, l);
    }) : l.push(n)), l;
  }
  function z$2(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
      for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
      n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
  }
  function L$1(n) {
    var l, u, i;
    if (null == n.type || "string" == typeof n.type) return n.__e;
    if (n.__k) for (l = n.__k.length - 1; l >= 0; l--) if ((u = n.__k[l]) && (i = L$1(u))) return i;
    return null;
  }
  function M(n, u, i, t, r, o, f, e, c) {
    var s,
      a,
      v,
      y,
      p,
      d,
      k,
      b,
      g,
      m,
      w,
      A,
      P,
      C,
      T,
      $ = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l$1.__b) && s(u);
    try {
      n: if ("function" == typeof $) {
        if (b = u.props, g = (s = $.contextType) && t[s.__c], m = s ? g ? g.props.value : s.__ : t, i.__c ? k = (a = u.__c = i.__c).__ = a.__E : ("prototype" in $ && $.prototype.render ? u.__c = a = new $(b, m) : (u.__c = a = new x$1(b, m), a.constructor = $, a.render = B$2), g && g.sub(a), a.props = b, a.state || (a.state = {}), a.context = m, a.__n = t, v = a.__d = !0, a.__h = [], a._sb = []), null == a.__s && (a.__s = a.state), null != $.getDerivedStateFromProps && (a.__s == a.state && (a.__s = h$1({}, a.__s)), h$1(a.__s, $.getDerivedStateFromProps(b, a.__s))), y = a.props, p = a.state, a.__v = u, v) null == $.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), null != a.componentDidMount && a.__h.push(a.componentDidMount);else {
          if (null == $.getDerivedStateFromProps && b !== y && null != a.componentWillReceiveProps && a.componentWillReceiveProps(b, m), !a.__e && null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(b, a.__s, m) || u.__v === i.__v) {
            for (u.__v !== i.__v && (a.props = b, a.state = a.__s, a.__d = !1), u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), w = 0; w < a._sb.length; w++) a.__h.push(a._sb[w]);
            a._sb = [], a.__h.length && f.push(a);
            break n;
          }
          null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, m), null != a.componentDidUpdate && a.__h.push(function () {
            a.componentDidUpdate(y, p, d);
          });
        }
        if (a.context = m, a.props = b, a.__P = n, A = l$1.__r, P = 0, "prototype" in $ && $.prototype.render) {
          for (a.state = a.__s, a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), C = 0; C < a._sb.length; C++) a.__h.push(a._sb[C]);
          a._sb = [];
        } else do {
          a.__d = !1, A && A(u), s = a.render(a.props, a.state, a.context), a.state = a.__s;
        } while (a.__d && ++P < 25);
        a.state = a.__s, null != a.getChildContext && (t = h$1(h$1({}, t), a.getChildContext())), v || null == a.getSnapshotBeforeUpdate || (d = a.getSnapshotBeforeUpdate(y, p)), T = null != s && s.type === _$1 && null == s.key ? s.props.children : s, H$1(n, Array.isArray(T) ? T : [T], u, i, t, r, o, f, e, c), a.base = u.__e, u.__h = null, a.__h.length && f.push(a), k && (a.__E = a.__ = null), a.__e = !1;
      } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = O(i.__e, u, i, t, r, o, f, c);
      (s = l$1.diffed) && s(u);
    } catch (n) {
      u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }
  function N$1(n, u) {
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
  function O(l, u, i, t, r, o, f, e) {
    var s,
      a,
      h,
      y = i.props,
      p = u.props,
      d = u.type,
      _ = 0;
    if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
      l = s, o[_] = null;
      break;
    }
    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, e = !1;
    }
    if (null === d) y === p || e && l.data === p || (l.data = p);else {
      if (o = o && n.call(l.childNodes), a = (y = i.props || c$1).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !e) {
        if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
        (h || a) && (h && (a && h.__html == a.__html || h.__html === l.innerHTML) || (l.innerHTML = h && h.__html || ""));
      }
      if (k$2(l, p, y, r, e), h) u.__k = [];else if (_ = u.props.children, H$1(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && A(i, 0), e), null != o) for (_ = o.length; _--;) null != o[_] && v$1(o[_]);
      e || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && g$2(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && g$2(l, "checked", _, y.checked, !1));
    }
    return l;
  }
  function S(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }
  function q$1(n, u, i) {
    var t, r;
    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || S(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && q$1(t[r], u, i || "function" != typeof n.type);
    i || null == n.__e || v$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function B$2(n, l, u) {
    return this.constructor(n, u);
  }
  function D$1(u, i, t) {
    var r, o, f;
    l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], M(i, u = (!r && t || i).__k = y$1(_$1, null, [u]), o || c$1, c$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), N$1(f, u);
  }
  function F$2(l, u, i) {
    var t,
      r,
      o,
      f = h$1({}, l.props);
    for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), p$1(l.type, f, t || l.key, r || l.ref, null);
  }
  function G$1(n, l) {
    var u = {
      __c: l = "__cC" + e$1++,
      __: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var u, i;
        return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
          return i;
        }, this.shouldComponentUpdate = function (n) {
          this.props.value !== n.value && u.some(function (n) {
            n.__e = !0, T$2(n);
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
    __e: function (n, l, u, i) {
      for (var t, r, o; l = l.__;) if ((t = l.__c) && !t.__) try {
        if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, t$1 = !1, x$1.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$1({}, this.state), "function" == typeof n && (n = n(h$1({}, u), this.props)), n && h$1(u, n), null != n && this.__v && (l && this._sb.push(l), T$2(this));
  }, x$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), T$2(this));
  }, x$1.prototype.render = _$1, r$2 = [], f$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $.__r = 0, e$1 = 0;
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
    s(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    const setValue = T$1((arg, reason) => {
      // Regardless of anything else, figure out what our next value is about to be.
      const nextValue = arg instanceof Function ? arg(valueRef.current === Unset$1 ? undefined : valueRef.current) : arg;
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
          const nextReason = reasonRef.current;
          const nextDep = valueRef.current;
          const prevDep = dependencyToCompareAgainst.current;
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
  const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
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
  const previousInputs = new Map();
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
  const commitName = "diffed";
  const originalCommit = l$1[commitName];
  const newCommit = function () {
    for (const [id, effectInfo] of toRun) {
      const oldInputs = previousInputs.get(id);
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
    const [id] = p(() => generateRandomId());
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
  const Unset = Symbol("unset");
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
  /**
   * Like `useStableGetter`, but ***requires*** that everything in the object is also stable,
   * and in turn returns an object that itself is stable.
   * @param t
   * @returns
   */
  function useStableObject(t) {
    const e = Object.entries(t);
    useEnsureStability("useStableObject", e.length, ...e.map(_ref => {
      let [_k, v] = _ref;
      return v;
    }));
    return _(t).current;
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
   * In general, just pass the function you want to be stable (but you can't use it during render,
   * so be careful!).  Alternatively, if you need a stable callback that **can** be used
   * during render, pass an empty dependency array and it'll act like `useCallback` with an
   * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
   * truly has no dependencies/only stable dependencies!!
   */
  function useStableCallback(fn, noDeps) {
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
  function useMergedChildren(lhs, rhs) {
    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      return y$1(_$1, {}, lhs, rhs);
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
      const lhsClasses = clsx(lhsClass, lhsClassName).split(" ");
      const rhsClasses = clsx(rhsClass, rhsClassName).split(" ");
      const allClasses = new Set([...Array.from(lhsClasses), ...Array.from(rhsClasses)]);
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
    return {
      ...(lhs !== null && lhs !== void 0 ? lhs : {}),
      ...(rhs !== null && rhs !== void 0 ? rhs : {})
    };
  }
  let log = console.warn;
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
    const {
      onElementChange,
      onMount,
      onUnmount
    } = args.refElementParameters || {};
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
    // Called (indirectly) by the ref that the element receives.
    const handler = T$1((e, prevValue) => {
      const cleanup = onElementChange === null || onElementChange === void 0 ? void 0 : onElementChange(e, prevValue);
      if (prevValue) onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(prevValue);
      if (e) onMount === null || onMount === void 0 ? void 0 : onMount(e);
      return cleanup;
    }, []);
    // Let us store the actual (reference to) the element we capture
    const [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    const propsStable = _({
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
   * Allows a parent component to access information about certain
   * child components once they have rendered.
   *
   * This hook is designed to be lightweight, in that the parent keeps no state
   * and runs no effects.  Each child *does* run an effect, but with no state
   * changes unless you explicitly request them.
   *
   *
   */
  function useManagedChildren(parentParameters) {
    const {
      managedChildrenParameters: {
        onAfterChildLayoutEffect,
        onChildrenMountChange,
        onChildCountChange
      },
      ...rest
    } = parentParameters;
    useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildCountChange);
    //const [getMountCount, setMountCount] = usePassiveState(onChildCountChange, returnZero, runImmediately);
    const getHighestIndex = T$1(() => {
      return managedChildrenArray.current.highestIndex;
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
        if (child) f(child);
      }
      for (const field in managedChildrenArray.current.rec) {
        const child = managedChildrenArray.current.rec[field];
        if (child) f(child);
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
      if (!hasRemoteULEChildMounted.current) {
        hasRemoteULEChildMounted.current = {
          mounts: new Set(),
          unmounts: new Set()
        };
        if (onChildCountChange || onChildrenMountChange) {
          debounceRendering(() => {
            onChildrenMountChange === null || onChildrenMountChange === void 0 ? void 0 : onChildrenMountChange(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
            onChildCountChange === null || onChildCountChange === void 0 ? void 0 : onChildCountChange(getChildren().getHighestIndex() + 1);
            hasRemoteULEChildMounted.current = null;
          });
        }
      }
      if (mounted) {
        if (typeof index == "number") managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
      } else {
        if (typeof index == "number") {
          delete managedChildrenArray.current.arr[index];
          let shave = 0;
          while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] === undefined) {
            ++shave;
          }
          managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
        } else delete managedChildrenArray.current.rec[index];
        if (typeof index == "number") managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
      }
      hasRemoteULEChildMounted.current[mounted ? "mounts" : "unmounts"].add(index);
    }, [/* Must remain stable */]);
    const managedChildren = useStableObject({
      ...{
        _: managedChildrenArray.current
      },
      forEach: forEachChild,
      getAt: getManagedChildInfo,
      getHighestIndex: getHighestIndex,
      arraySlice: T$1(() => {
        return managedChildrenArray.current.arr.slice();
      }, [])
    });
    const getChildren = T$1(() => managedChildren, []);
    return {
      context: useStableObject({
        managedChildContext: useStableObject({
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
  function useManagedChild(info, managedChildParameters) {
    var _info$context;
    const {
      managedChildContext: {
        getChildren,
        managedChildrenArray,
        remoteULEChildMounted,
        remoteULEChildChanged
      }
    } = (_info$context = info.context) !== null && _info$context !== void 0 ? _info$context : {
      managedChildContext: {}
    };
    const index = managedChildParameters.index;
    // Any time our child props change, make that information available
    // the parent if they need it.
    // The parent can listen for all updates and only act on the ones it cares about,
    // and multiple children updating in the same tick will all be sent at once.
    s(() => {
      if (managedChildrenArray == null || remoteULEChildChanged == null) return;
      // Insert this information in-place
      if (typeof index == "number") {
        managedChildrenArray.arr[index] = {
          ...managedChildParameters
        };
      } else {
        managedChildrenArray.rec[index] = {
          ...managedChildParameters
        };
      }
      return remoteULEChildChanged(index);
    }, [...Object.entries(info).flat(9)]); // 9 is infinity, right? Sure. Unrelated: TODO.
    // When we mount, notify the parent via queueMicrotask
    // (every child does this, so everything's coordinated to only queue a single microtask per tick)
    // Do the same on unmount.
    // Note: It's important that this comes AFTER remoteULEChildChanged
    // so that remoteULEChildMounted has access to all the info on mount.
    s(() => {
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
   *
   * @param param0
   * @returns
   */
  function useChildrenFlag(_ref2) {
    let {
      getChildren,
      initialIndex,
      closestFit,
      onIndexChange,
      getAt,
      setAt,
      isValid
    } = _ref2;
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
    s(() => {
      changeIndex(initialIndex !== null && initialIndex !== void 0 ? initialIndex : null, undefined);
    }, []);
    return {
      changeIndex,
      reevaluateClosestFit,
      getCurrentIndex
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

  /**
   * Slightly enhanced version of `useState` that includes a getter that remains constant
   * (i.e. you can use it in `useEffect` and friends without it being a dependency).
   *
   * @param initialState
   * @returns
   */
  function useState(initialState) {
    // We keep both, but overrride the `setState` functionality
    const [state, setStateP] = p(initialState);
    const ref = _(state);
    // Hijack the normal setter function 
    // to also set our ref to the new value
    const setState = T$1(value => {
      if (typeof value === "function") {
        const callback = value;
        setStateP(prevValue => {
          const nextValue = callback(prevValue);
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        ref.current = value;
        setStateP(value);
      }
    }, []);
    const getState = () => {
      return ref.current;
    };
    console.assert(ref.current === state || typeof state === "number" && isNaN(state));
    return [state, setState, getState];
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
      return this.shouldComponentUpdate = r, y$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new x$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
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
  }, (D.prototype = new x$1()).__c = function (n, t) {
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
    var i = e.__a && y$1(_$1, null, n.fallback);
    return i && (i.__h = null), [y$1(_$1, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (V.prototype = new x$1()).__a = function (n) {
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
    var t = j$1(n.children);
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
  x$1.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(x$1.prototype, t, {
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
      "select" == t && u.multiple && Array.isArray(u.value) && (u.value = j$1(e.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == t && null != u.defaultValue && (u.value = j$1(e.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
    }
    n.$$typeof = z, tn && tn(n);
  };
  var en = l$1.__r;
  l$1.__r = function (n) {
    en && en(n), n.__c;
  };
  G$1(null);
  const SwappableContext = G$1({
    getAnimateOnMount: () => false
  });
  const ExclusiveTransitionContext = G$1(null);
  const CssClassContext = G$1({
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
    } = q(CssClassContext);
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
    h(() => {
      if (value != null) lastNonNullValue.current = value;
    }, [value]);
    return value !== null && value !== void 0 ? value : lastNonNullValue.current;
  }
  let globalCount = -1;
  function ExclusiveTransitionProvider(_ref3) {
    let {
      children
    } = _ref3;
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
      }, [])
    });
    const onVisibilityChange = T$1((index, visible) => {
      debugger;
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
          (_getChildren$getAt = getChildren().getAt(currentInLine)) === null || _getChildren$getAt === void 0 ? void 0 : (_getChildren$getAt$fo = _getChildren$getAt.forceClose) === null || _getChildren$getAt$fo === void 0 ? void 0 : _getChildren$getAt$fo.call(_getChildren$getAt);
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
        }
      }
    }, []);
    const context2 = useStableObject({
      ...context,
      exclusiveTransitionContext: useStableObject({
        onVisibilityChange
      })
    });
    return y$1(ExclusiveTransitionContext.Provider, {
      value: context2
    }, children);
  }
  function useExclusiveTransition(_ref4) {
    let {
      context,
      transitionParameters: {
        show
      },
      exclusiveTransitionParameters: {
        forceClose
      }
    } = _ref4;
    //const index = useMemo(() => generateRandomId(), []);
    const index = F$1(() => {
      globalCount += 1;
      return globalCount.toString();
    }, []);
    const [exclusivelyOpen, setExclusivelyOpen, getExclusivelyOpen] = useState(!!show);
    useManagedChild({
      context,
      managedChildParameters: {
        index
      }
    }, {
      index,
      getExclusivelyOpen,
      setExclusivelyOpen,
      forceClose
    });
    const parentOnVisChange = context === null || context === void 0 ? void 0 : context.exclusiveTransitionContext.onVisibilityChange;
    const onVisibilityChange = T$1(visible => {
      //if (visible == false)
      parentOnVisChange === null || parentOnVisChange === void 0 ? void 0 : parentOnVisChange(index, visible == false ? "hidden" : "show");
    }, [parentOnVisChange, index]);
    s(() => {
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
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateSwappableProps(_ref5, otherProps) {
    let {
      inline
    } = _ref5;
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
  const Swappable = R(forwardElementRef(function Swappable(_ref6, ref) {
    var _inline;
    let {
      children: c,
      inline,
      childrenAnimateOnMount,
      exclusive,
      ...p
    } = _ref6;
    let children = c;
    if (!children.type) children = !inline ? y$1("div", null, children) : y$1("span", null, children);
    (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    const transitionProps = useCreateSwappableProps({
      inline
    }, {
      ...p,
      ref
    });
    const mergedWithChildren = useMergedProps(transitionProps, children.props);
    const animateOnMount = _(childrenAnimateOnMount !== null && childrenAnimateOnMount !== void 0 ? childrenAnimateOnMount : false);
    h(() => {
      animateOnMount.current = true;
    }, []);
    const contextValue = _({
      getAnimateOnMount: () => {
        return animateOnMount.current;
      }
    });
    let ret = F$2(children, mergedWithChildren);
    ret = y$1(SwappableContext.Provider, {
      value: contextValue.current
    }, ret);
    if (exclusive) {
      ret = y$1(ExclusiveTransitionProvider, null, ret);
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
   * @param param0
   * @returns
   */
  function useTransition(_ref7) {
    var _animateOnMount, _measure, _easingIn, _easingOut;
    let {
      transitionParameters: {
        propsIncoming: {
          children,
          ...p
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
    } = _ref7;
    const {
      getAnimateOnMount
    } = q(SwappableContext);
    exitVisibility || (exitVisibility = "hidden");
    (_animateOnMount = animateOnMount) !== null && _animateOnMount !== void 0 ? _animateOnMount : animateOnMount = getAnimateOnMount();
    (_measure = measure) !== null && _measure !== void 0 ? _measure : measure = false;
    useEnsureStability("useTransition", onVisibilityChange);
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
        forceClose: useStableCallback(() => {
          internalOnShowChanged(false, getMeasure());
        })
      },
      context: q(ExclusiveTransitionContext)
    });
    if (isExclusive) {
      show = show && exclusivelyOpen;
    }
    const {
      refElementReturn: {
        getElement,
        propsStable
      }
    } = useRefElement({});
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
    s(() => internalOnShowChanged(show, measure), [measure, show]);
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
    h(() => {
      if (definitelyShouldMountChildren) hasRenderedChildren.current || (hasRenderedChildren.current = true);
    }, [hasRenderedChildren.current ? false : definitelyShouldMountChildren]);
    const childrenIsVnode = children && children.type && children.props;
    const finalProps = useMergedProps(p, propsStable, otherProps.current, {
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
      modifiedChildren = y$1(ExclusiveTransitionContext.Provider, {
        value: null
      }, y$1(SwappableContext.Provider, {
        value: resetContext
      }, F$2(children, finalProps)));
    } else {
      modifiedChildren = y$1(ExclusiveTransitionContext.Provider, {
        value: null
      }, y$1(SwappableContext.Provider, {
        value: resetContext
      }, y$1("span", {
        ...finalProps
      }, children)));
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
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useBasePropsFade(_ref8) {
    let {
      fadeParameters: {
        fadeMin,
        fadeMax
      }
    } = _ref8;
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
  const Fade = R(forwardElementRef(function Fade(_ref9, ref) {
    let {
      duration,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      ...rest
    } = _ref9;
    return useTransition({
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
      }
    });
  }));
  function useBasePropsClip(_ref10) {
    var _ref11, _ref12, _ref13, _ref14;
    let {
      clipParameters: {
        clipMin,
        clipMinBlock,
        clipMinInline,
        clipOrigin,
        clipOriginBlock,
        clipOriginInline
      }
    } = _ref10;
    const {
      GetBaseClass
    } = useCssClasses();
    return {
      className: clsx("".concat(GetBaseClass(), "-clip")),
      style: {
        ["--".concat(GetBaseClass(), "-clip-origin-inline")]: (_ref11 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref11 !== void 0 ? _ref11 : 0.5,
        ["--".concat(GetBaseClass(), "-clip-origin-block")]: (_ref12 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref12 !== void 0 ? _ref12 : 0,
        ["--".concat(GetBaseClass(), "-clip-min-inline")]: (_ref13 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref13 !== void 0 ? _ref13 : 1,
        ["--".concat(GetBaseClass(), "-clip-min-block")]: (_ref14 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref14 !== void 0 ? _ref14 : 0
      }
    };
  }
  R(forwardElementRef(function Clip(_ref15, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref15;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));
  R(forwardElementRef(function ClipFade(_ref16, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref16;
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
        }), {
          ref,
          ...rest
        })
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
  function useBasePropsCollapse(_ref17) {
    let {
      collapseParameters: {
        minBlockSize
      }
    } = _ref17;
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
  R(forwardElementRef(function Collapse(_ref18, ref) {
    let {
      show,
      duration,
      delayMountUntilShown,
      minBlockSize,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      ...rest
    } = _ref18;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));
  R(forwardElementRef(function CollapseFade(_ref19, ref) {
    let {
      show,
      duration,
      animateOnMount,
      delayMountUntilShown,
      fadeMin,
      fadeMax,
      exitVisibility,
      minBlockSize,
      onVisibilityChange,
      ...rest
    } = _ref19;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));

  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsFlip(_ref20) {
    var _useLastNonNullValue, _useLastNonNullValue2;
    let {
      flipParameters: {
        flipAngleBlock,
        flipAngleInline,
        flipPerspective
      }
    } = _ref20;
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
   * which allows for convenient setups inside of a `SwapContainer`
   * (`flipInline={index - selectedIndex}` or similar.)
   *
   * @see `Transitionable`
   */
  R(forwardElementRef(function Flip(_ref21, ref) {
    let {
      duration,
      delayMountUntilShown,
      flipAngleInline,
      flipAngleBlock,
      flipPerspective,
      show,
      animateOnMount,
      exitVisibility,
      onVisibilityChange,
      ...rest
    } = _ref21;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));

  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsSlide(_ref22) {
    var _slideTargetInline, _slideTargetBlock;
    let {
      slideParameters: {
        slideTargetInline,
        slideTargetBlock
      }
    } = _ref22;
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
  R(forwardElementRef(function Slide(_ref23, ref) {
    let {
      duration,
      slideTargetInline,
      slideTargetBlock,
      show,
      animateOnMount,
      exitVisibility,
      delayMountUntilShown,
      ...rest
    } = _ref23;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));
  R(forwardElementRef(function SlideFade(_ref24, ref) {
    let {
      duration,
      fadeMin,
      fadeMax,
      show,
      animateOnMount,
      delayMountUntilShown,
      slideTargetBlock,
      slideTargetInline,
      exitVisibility,
      onVisibilityChange,
      ...rest
    } = _ref24;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));

  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useBasePropsZoom(_ref25) {
    var _ref26, _ref27, _ref28, _ref29;
    let {
      zoomParameters: {
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock
      }
    } = _ref25;
    const {
      GetBaseClass
    } = useCssClasses();
    return {
      className: "".concat(GetBaseClass(), "-zoom"),
      style: {
        ["--".concat(GetBaseClass(), "-zoom-origin-inline")]: "".concat((_ref26 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref26 !== void 0 ? _ref26 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-origin-block")]: "".concat((_ref27 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref27 !== void 0 ? _ref27 : 0.5),
        ["--".concat(GetBaseClass(), "-zoom-min-inline")]: "".concat((_ref28 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref28 !== void 0 ? _ref28 : 0),
        ["--".concat(GetBaseClass(), "-zoom-min-block")]: "".concat((_ref29 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref29 !== void 0 ? _ref29 : 0)
      }
    };
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  R(forwardElementRef(function Zoom(_ref30, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref30;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));
  R(forwardElementRef(function SlideZoom(_ref31, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref31;
    return useTransition({
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
      }
    });
  }));
  R(forwardElementRef(function SlideZoomFade(_ref32, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref32;
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
        }), {
          ref,
          ...rest
        })
      }
    });
  }));
  R(forwardElementRef(function ZoomFade(_ref33, ref) {
    let {
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
      onVisibilityChange,
      ...rest
    } = _ref33;
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
        }), {
          ref,
          ...rest
        })
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
    const [exclusive, setExclusive] = p(true);
    const [animateOnMount, setAnimateOnMount] = p(true);
    const [writingMode, setWritingMode] = p("horizontal");
    const [show1, setShow1] = p("pending");
    const [show3, setShow3] = p(0);
    const [reflow, setReflow] = p("hidden");
    const [duration, setDuration] = p(500);
    const [text, setText] = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    const [flicker, setFlicker] = p(0);
    s(() => {
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
    return y$1(_$1, null, y$1("div", {
      id: "controls"
    }, y$1("h1", null, "Preact Transition"), y$1("div", {
      className: "radiogroup"
    }, y$1("button", {
      onClick: () => setFlicker(1)
    }, "Flicker 1"), y$1("button", {
      onClick: () => setFlicker(2)
    }, "Flicker 2"), y$1("button", {
      onClick: () => setFlicker(3)
    }, "Flicker 3"), y$1("button", {
      onClick: () => setFlicker(4)
    }, "Flicker 4")), y$1("div", {
      className: "radiogroup"
    }, y$1("div", null, "Outer card visible state: "), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("unmounted");
      },
      checked: show1 == "unmounted"
    }), "Unmounted"), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("pending");
      },
      checked: show1 == "pending",
      disabled: show1 == "hiding" || show1 == "showing"
    }), "Mounted, `show` is `null`"), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("hiding");
      },
      checked: show1 == "hiding"
    }), "Mounted, `show` is `false`"), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-show",
      onInput: e => {
        e.preventDefault();
        setShow1("showing");
      },
      checked: show1 == "showing"
    }), "Mounted, `show` is `true`")), y$1("div", {
      className: "radiogroup"
    }, y$1("div", null, "Outer card mount animation: "), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-mount-animate",
      onInput: e => {
        e.preventDefault();
        setAnimateOnMount(false);
      },
      checked: animateOnMount == false
    }), "Don't animate on mount"), y$1("label", {
      className: ""
    }, y$1("input", {
      type: "radio",
      name: "outer-card-mount-animate",
      onInput: e => {
        e.preventDefault();
        setAnimateOnMount(true);
      },
      checked: animateOnMount == true
    }), "Animate on mount")), y$1("div", {
      className: "radiogroup"
    }, y$1("div", null, "Visible Swappable child: "), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputA,
      checked: show3 == 0
    }), "#0"), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputB,
      checked: show3 == 1
    }), "#1"), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "swap-index",
      onInput: onInputC,
      checked: show3 == 2
    }), "#2"), y$1("label", null, y$1("input", {
      type: "checkbox",
      onInput: onInput9,
      checked: exclusive
    }), "Exclusive")), y$1("div", {
      className: "radiogroup"
    }, y$1("div", null, "When transitioned out:"), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput5b,
      checked: reflow == "visible"
    }), "Do not hide (incl. focusables)"), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput4,
      checked: reflow == "hidden"
    }), "visibility: hidden"), y$1("label", {
      className: "code-mimic"
    }, y$1("input", {
      type: "radio",
      name: "hidden-type",
      onInput: onInput5,
      checked: reflow == "removed"
    }), "display: none")), y$1("div", null, y$1("label", null, y$1("input", {
      onInput: onInput8,
      type: "number",
      value: duration
    }), " Duration")), y$1("div", {
      className: "radiogroup"
    }, y$1("div", null, "Demo's writing mode: "), y$1("label", null, y$1("input", {
      type: "radio",
      name: "writing-mode",
      onInput: onInput6,
      checked: writingMode == "horizontal"
    }), "Horizontal"), y$1("label", null, y$1("input", {
      type: "radio",
      name: "writing-mode",
      onInput: onInput7,
      checked: writingMode == "vertical"
    }), "Vertical")), y$1("textarea", {
      cols: 30,
      rows: 5,
      onInput: onInput3,
      value: text
    })), y$1("div", {
      id: "root-body",
      className: "writing-mode-".concat(writingMode),
      style: {
        ["--".concat(useCssClasses().GetBaseClass(), "-duration")]: "".concat(duration, "ms")
      },
      key: writingMode
    }, y$1(FadeDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    })));
  }
  function FadeDemo(_ref34) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref34;
    const [min, setMin] = p(0);
    const [max, setMax] = p(1);
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
    const makeChild = i => y$1(C, {
      show: contentIndex === i,
      exitVisibility: exitVisibility,
      fadeMin: min,
      fadeMax: max
    }, y$1("div", {
      className: "card-contents"
    }, halfText(text, i), y$1("div", null, y$1("button", null, "Focusable element"))));
    return y$1("div", {
      className: "demo-section"
    }, y$1("h2", null, "Fade"), y$1("div", {
      className: "demo"
    }, y$1("div", {
      className: "demo-controls"
    }, y$1("label", null, "Minimum fade ", y$1("input", {
      onInput: onMinInput,
      value: min,
      type: "number",
      min: 0,
      max: 1,
      step: 0.0125
    })), y$1("label", null, "Maximum fade ", y$1("input", {
      onInput: onMaxInput,
      value: max,
      type: "number",
      min: 0,
      max: 1,
      step: 0.0125
    }))), cardShow != "unmounted" && y$1(C, {
      show: cardShow == "pending" ? null : cardShow == "showing",
      animateOnMount: animateOnMount,
      exitVisibility: exitVisibility,
      fadeMin: min,
      fadeMax: max
    }, y$1(Swappable, {
      exclusive: exclusive
    }, y$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), y$1("code", null, y$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(min != 0 ? " \n  fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n  fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(min != 0 ? " \n        fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n        fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  requestAnimationFrame(() => {
    D$1(y$1(Demo, null), document.getElementById("root"));
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvcHJvcHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1jb250ZXh0LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL2NoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtZ2V0dGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2sudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AzNTY1ODdhYmVlZDNjMDJlZTIzNGJiMWQ3NzQ4NjNjODgyODQ3OGM4X3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1tYW5hZ2VkLWNoaWxkcmVuLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ibG9ja2luZy1lbGVtZW50c0AwLjEuMS9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvc3JjL2Jsb2NraW5nLWVsZW1lbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpY2ctaW5lcnRAMy4xLjIvbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AzNTY1ODdhYmVlZDNjMDJlZTIzNGJiMWQ3NzQ4NjNjODgyODQ3OGM4X3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhdGUudHN4Iiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy91dGlsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9QdXJlQ29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9tZW1vLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9mb3J3YXJkUmVmLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMi4xL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9DaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTIuMS9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvc3VzcGVuc2UuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3N1c3BlbnNlLWxpc3QuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3JlbmRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEyLjEvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3RpbWluZy91c2UtYW5pbWF0aW9uLWZyYW1lLnRzeCIsIi4uL3NyYy91dGlsL2NvbnRleHQudHN4IiwiLi4vc3JjL3V0aWwvdXRpbC50c3giLCIuLi9zcmMvZXhjbHVzaXZlLnRzeCIsIi4uL3NyYy9zd2FwcGFibGUudHN4IiwiLi4vc3JjL3RyYW5zaXRpb25hYmxlLnRzeCIsIi4uL3NyYy9mYWRlLnRzeCIsIi4uL3NyYy9jbGlwLnRzeCIsIi4uL3NyYy9jbGlwLWZhZGUudHN4IiwiLi4vc3JjL2NvbGxhcHNlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS1mYWRlLnRzeCIsIi4uL3NyYy9mbGlwLnRzeCIsIi4uL3NyYy9zbGlkZS50c3giLCIuLi9zcmMvc2xpZGUtZmFkZS50c3giLCIuLi9zcmMvem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS1mYWRlLnRzeCIsIi4uL3NyYy96b29tLWZhZGUudHN4IiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWlnbm9yZSBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gbnVsbCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBudWxsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0Ly8gX25leHREb20gbXVzdCBiZSBpbml0aWFsaXplZCB0byB1bmRlZmluZWQgYi9jIGl0IHdpbGwgZXZlbnR1YWxseVxuXHRcdC8vIGJlIHNldCB0byBkb20ubmV4dFNpYmxpbmcgd2hpY2ggY2FuIHJldHVybiBgbnVsbGAgYW5kIGl0IGlzIGltcG9ydGFudFxuXHRcdC8vIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhbiB1bmluaXRpYWxpemVkIF9uZXh0RG9tIGFuZFxuXHRcdC8vIGEgX25leHREb20gdGhhdCBoYXMgYmVlbiBzZXQgdG8gYG51bGxgXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IG51bGwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBudWxsICYmIG9wdGlvbnMudm5vZGUgIT0gbnVsbCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IG51bGwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHRoZSBvbGQgYW5kIG5ldyBwcm9wZXJ0aWVzIG9mIGEgVk5vZGUgYW5kIGFwcGx5IGNoYW5nZXMgdG8gdGhlIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIGFwcGx5XG4gKiBjaGFuZ2VzIHRvXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IG9sZFByb3BzIFRoZSBvbGQgcHJvcHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh5ZHJhdGUgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvbiBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBoeWRyYXRlKSB7XG5cdGxldCBpO1xuXG5cdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdGlmIChpICE9PSAnY2hpbGRyZW4nICYmIGkgIT09ICdrZXknICYmICEoaSBpbiBuZXdQcm9wcykpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbnVsbCwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGkgaW4gbmV3UHJvcHMpIHtcblx0XHRpZiAoXG5cdFx0XHQoIWh5ZHJhdGUgfHwgdHlwZW9mIG5ld1Byb3BzW2ldID09ICdmdW5jdGlvbicpICYmXG5cdFx0XHRpICE9PSAnY2hpbGRyZW4nICYmXG5cdFx0XHRpICE9PSAna2V5JyAmJlxuXHRcdFx0aSAhPT0gJ3ZhbHVlJyAmJlxuXHRcdFx0aSAhPT0gJ2NoZWNrZWQnICYmXG5cdFx0XHRvbGRQcm9wc1tpXSAhPT0gbmV3UHJvcHNbaV1cblx0XHQpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbmV3UHJvcHNbaV0sIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIGlzU3ZnKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9PSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PT0gJ28nICYmIG5hbWVbMV0gPT09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKG5hbWUudG9Mb3dlckNhc2UoKSBpbiBkb20pIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lICE9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPT0gJ3dpZHRoJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2hlaWdodCcgJiZcblx0XHRcdG5hbWUgIT09ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9PSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9PSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9PSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIEFSSUEtYXR0cmlidXRlcyBoYXZlIGEgZGlmZmVyZW50IG5vdGlvbiBvZiBib29sZWFuIHZhbHVlcy5cblx0XHQvLyBUaGUgdmFsdWUgYGZhbHNlYCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdFxuXHRcdC8vIGV4aXN0aW5nIG9uIHRoZSBET00sIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdXMgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgVkRPTSBmcmFtZXdvcmtzIGFsc28gYWx3YXlzIHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZS5pbmRleE9mKCctJykgIT0gLTEpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGxldCBpbkV2ZW50ID0gZmFsc2U7XG5cbi8qKlxuICogUHJveHkgYW4gZXZlbnQgdG8gaG9va2VkIGV2ZW50IGhhbmRsZXJzXG4gKiBAcGFyYW0ge0V2ZW50fSBlIFRoZSBldmVudCBvYmplY3QgZnJvbSB0aGUgYnJvd3NlclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXZlbnRQcm94eShlKSB7XG5cdGluRXZlbnQgPSB0cnVlO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgZmFsc2VdKFxuXHRcdFx0b3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlXG5cdFx0KTtcblx0fSBmaW5hbGx5IHtcblx0XHRpbkV2ZW50ID0gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gZXZlbnRQcm94eUNhcHR1cmUoZSkge1xuXHRpbkV2ZW50ID0gdHJ1ZTtcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIHRydWVdKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG5cdH0gZmluYWxseSB7XG5cdFx0aW5FdmVudCA9IGZhbHNlO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGluRXZlbnQgfSBmcm9tICcuL2RpZmYvcHJvcHMnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBudWxsICYmIHRoaXMuX25leHRTdGF0ZSAhPT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBudWxsKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gbnVsbCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX3BhcmVudC5fY2hpbGRyZW4uaW5kZXhPZih2bm9kZSkgKyAxKVxuXHRcdFx0OiBudWxsO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IG51bGwgJiYgc2libGluZy5fZG9tICE9IG51bGwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGxldCB2bm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0b2xkRG9tID0gdm5vZGUuX2RvbSxcblx0XHRwYXJlbnREb20gPSBjb21wb25lbnQuX3BhcmVudERvbTtcblxuXHRpZiAocGFyZW50RG9tKSB7XG5cdFx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdFx0Y29uc3Qgb2xkVk5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRvbGRWTm9kZS5fb3JpZ2luYWwgPSB2bm9kZS5fb3JpZ2luYWwgKyAxO1xuXG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdHZub2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nICE9IG51bGwgPyBbb2xkRG9tXSA6IG51bGwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBudWxsID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBvbGREb20sXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nXG5cdFx0KTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG5cblx0XHRpZiAodm5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gbnVsbCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gbnVsbDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gdm5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbmNvbnN0IG1pY3JvVGljayA9XG5cdHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbidcblx0XHQ/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSlcblx0XHQ6IHNldFRpbWVvdXQ7XG5mdW5jdGlvbiBkZWZlcihjYikge1xuXHRpZiAoaW5FdmVudCkge1xuXHRcdHNldFRpbWVvdXQoY2IpO1xuXHR9IGVsc2Uge1xuXHRcdG1pY3JvVGljayhjYik7XG5cdH1cbn1cblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT09IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdcblx0KSB7XG5cdFx0cHJldkRlYm91bmNlID0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZztcblx0XHQocHJldkRlYm91bmNlIHx8IGRlZmVyKShwcm9jZXNzKTtcblx0fVxufVxuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdGxldCBjO1xuXHRyZXJlbmRlclF1ZXVlLnNvcnQoKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aCk7XG5cdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHR3aGlsZSAoKGMgPSByZXJlbmRlclF1ZXVlLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKGMuX2RpcnR5KSB7XG5cdFx0XHRsZXQgcmVuZGVyUXVldWVMZW5ndGggPSByZXJlbmRlclF1ZXVlLmxlbmd0aDtcblx0XHRcdHJlbmRlckNvbXBvbmVudChjKTtcblx0XHRcdGlmIChyZXJlbmRlclF1ZXVlLmxlbmd0aCA+IHJlbmRlclF1ZXVlTGVuZ3RoKSB7XG5cdFx0XHRcdC8vIFdoZW4gaS5lLiByZXJlbmRlcmluZyBhIHByb3ZpZGVyIGFkZGl0aW9uYWwgbmV3IGl0ZW1zIGNhbiBiZSBpbmplY3RlZCwgd2Ugd2FudCB0b1xuXHRcdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdFx0Ly8gc2luZ2xlIHBhc3Ncblx0XHRcdFx0cmVyZW5kZXJRdWV1ZS5zb3J0KChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNvbnRleHRJZCkge1xuXHRjb250ZXh0SWQgPSAnX19jQycgKyBpKys7XG5cblx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRfaWQ6IGNvbnRleHRJZCxcblx0XHRfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRDb25zdW1lcihwcm9wcywgY29udGV4dFZhbHVlKSB7XG5cdFx0XHQvLyByZXR1cm4gcHJvcHMuY2hpbGRyZW4oXG5cdFx0XHQvLyBcdGNvbnRleHRbY29udGV4dElkXSA/IGNvbnRleHRbY29udGV4dElkXS5wcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXHRcdFx0Ly8gKTtcblx0XHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0VmFsdWUpO1xuXHRcdH0sXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRQcm92aWRlcihwcm9wcykge1xuXHRcdFx0aWYgKCF0aGlzLmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudFtdfSAqL1xuXHRcdFx0XHRsZXQgc3VicyA9IFtdO1xuXHRcdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRcdGN0eFtjb250ZXh0SWRdID0gdGhpcztcblxuXHRcdFx0XHR0aGlzLmdldENoaWxkQ29udGV4dCA9ICgpID0+IGN0eDtcblxuXHRcdFx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKF9wcm9wcykge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRcdC8vIEkgdGhpbmsgdGhlIGZvcmNlZCB2YWx1ZSBwcm9wYWdhdGlvbiBoZXJlIHdhcyBvbmx5IG5lZWRlZCB3aGVuIGBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nYCB3YXMgYmVpbmcgYnlwYXNzZWQ6XG5cdFx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2NvbW1pdC80ZDMzOWZiODAzYmVhMDllOWYxOThhYmYzOGNhMWJmOGVhNGI3NzcxI2RpZmYtNTQ2ODJjZTM4MDkzNWE3MTdlNDFiOGJmYzU0NzM3ZjZSMzU4XG5cdFx0XHRcdFx0XHQvLyBJbiB0aG9zZSBjYXNlcyB0aG91Z2gsIGV2ZW4gd2l0aCB0aGUgdmFsdWUgY29ycmVjdGVkLCB3ZSdyZSBkb3VibGUtcmVuZGVyaW5nIGFsbCBub2Rlcy5cblx0XHRcdFx0XHRcdC8vIEl0IG1pZ2h0IGJlIGJldHRlciB0byBqdXN0IHRlbGwgZm9sa3Mgbm90IHRvIHVzZSBmb3JjZS1zeW5jIG1vZGUuXG5cdFx0XHRcdFx0XHQvLyBDdXJyZW50bHksIHVzaW5nIGB1c2VDb250ZXh0KClgIGluIGEgY2xhc3MgY29tcG9uZW50IHdpbGwgb3ZlcndyaXRlIGl0cyBgdGhpcy5jb250ZXh0YCB2YWx1ZS5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0ID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0W2NvbnRleHRJZF0gPSBfcHJvcHMudmFsdWU7XG5cdFx0XHRcdFx0XHQvLyBcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRcdHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdFx0Yy5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdFx0c3Vicy5wdXNoKGMpO1xuXHRcdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJzLnNwbGljZShzdWJzLmluZGV4T2YoYyksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHdoZW4gaXRcblx0Ly8gZW5jb3VudGVycyBhIFByb3ZpZGVyLiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBzdXBwb3J0XG5cdC8vIHNldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiB0aGUgY29udGV4dCBvYmplY3QgaW5zdGVhZFxuXHQvLyBvZiBvbiB0aGUgY29tcG9uZW50IGl0c2VsZi4gU2VlOlxuXHQvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sI2NvbnRleHRkaXNwbGF5bmFtZVxuXG5cdHJldHVybiAoY29udGV4dC5Qcm92aWRlci5fY29udGV4dFJlZiA9IGNvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPSBjb250ZXh0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiwgRU1QVFlfQVJSIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlXG4gKiBjaGlsZHJlbiBhcmUgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgaSwgaiwgb2xkVk5vZGUsIGNoaWxkVk5vZGUsIG5ld0RvbSwgZmlyc3RDaGlsZERvbSwgcmVmcztcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCByZW5kZXJSZXN1bHQubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyBJZiB0aGlzIG5ld1ZOb2RlIGlzIGJlaW5nIHJldXNlZCAoZS5nLiA8ZGl2PntyZXVzZX17cmV1c2V9PC9kaXY+KSBpbiB0aGUgc2FtZSBkaWZmLFxuXHRcdC8vIG9yIHdlIGFyZSByZW5kZXJpbmcgYSBjb21wb25lbnQgKGUuZy4gc2V0U3RhdGUpIGNvcHkgdGhlIG9sZFZOb2RlcyBzbyBpdCBjYW4gaGF2ZVxuXHRcdC8vIGl0J3Mgb3duIERPTSAmIGV0Yy4gcG9pbnRlcnNcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnbnVtYmVyJyB8fFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2JpZ2ludCdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHQvLyBUZXJzZXIgcmVtb3ZlcyB0aGUgYGNvbnRpbnVlYCBoZXJlIGFuZCB3cmFwcyB0aGUgbG9vcCBib2R5XG5cdFx0Ly8gaW4gYSBgaWYgKGNoaWxkVk5vZGUpIHsgLi4uIH0gY29uZGl0aW9uXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UgZmluZCBhIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBpbiBvbGRDaGlsZHJlbi5cblx0XHQvLyBJZiBmb3VuZCwgZGVsZXRlIHRoZSBhcnJheSBpdGVtIGJ5IHNldHRpbmcgdG8gYHVuZGVmaW5lZGAuXG5cdFx0Ly8gV2UgdXNlIGB1bmRlZmluZWRgLCBhcyBgbnVsbGAgaXMgcmVzZXJ2ZWQgZm9yIGVtcHR5IHBsYWNlaG9sZGVyc1xuXHRcdC8vIChob2xlcykuXG5cdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblxuXHRcdGlmIChcblx0XHRcdG9sZFZOb2RlID09PSBudWxsIHx8XG5cdFx0XHQob2xkVk5vZGUgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSA9PT0gb2xkVk5vZGUudHlwZSlcblx0XHQpIHtcblx0XHRcdG9sZENoaWxkcmVuW2ldID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFaXRoZXIgb2xkVk5vZGUgPT09IHVuZGVmaW5lZCBvciBvbGRDaGlsZHJlbkxlbmd0aCA+IDAsXG5cdFx0XHQvLyBzbyBhZnRlciB0aGlzIGxvb3Agb2xkVk5vZGUgPT0gbnVsbCBvciBvbGRWTm9kZSBpcyBhIHZhbGlkIHZhbHVlLlxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9sZENoaWxkcmVuTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltqXTtcblx0XHRcdFx0Ly8gSWYgY2hpbGRWTm9kZSBpcyB1bmtleWVkLCB3ZSBvbmx5IG1hdGNoIHNpbWlsYXJseSB1bmtleWVkIG5vZGVzLCBvdGhlcndpc2Ugd2UgbWF0Y2ggYnkga2V5LlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgbWF0Y2ggYnkgdHlwZSAoaW4gZWl0aGVyIGNhc2UpLlxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0b2xkVk5vZGUgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLmtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0b2xkQ2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2xkVk5vZGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9sZFZOb2RlID0gb2xkVk5vZGUgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdGlzU3ZnLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0KTtcblxuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblxuXHRcdGlmICgoaiA9IGNoaWxkVk5vZGUucmVmKSAmJiBvbGRWTm9kZS5yZWYgIT0gaikge1xuXHRcdFx0aWYgKCFyZWZzKSByZWZzID0gW107XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSByZWZzLnB1c2gob2xkVk5vZGUucmVmLCBudWxsLCBjaGlsZFZOb2RlKTtcblx0XHRcdHJlZnMucHVzaChqLCBjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLCBjaGlsZFZOb2RlKTtcblx0XHR9XG5cblx0XHRpZiAobmV3RG9tICE9IG51bGwpIHtcblx0XHRcdGlmIChmaXJzdENoaWxkRG9tID09IG51bGwpIHtcblx0XHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgY2hpbGRWTm9kZS50eXBlID09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY2hpbGRyZW4gPT09IG9sZFZOb2RlLl9jaGlsZHJlblxuXHRcdFx0KSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX25leHREb20gPSBvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4oXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdFx0cGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0XHRcdG5ld0RvbSxcblx0XHRcdFx0XHRvbGREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBuZXdQYXJlbnRWTm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gQmVjYXVzZSB0aGUgbmV3UGFyZW50Vk5vZGUgaXMgRnJhZ21lbnQtbGlrZSwgd2UgbmVlZCB0byBzZXQgaXQnc1xuXHRcdFx0XHQvLyBfbmV4dERvbSBwcm9wZXJ0eSB0byB0aGUgbmV4dFNpYmxpbmcgb2YgaXRzIGxhc3QgY2hpbGQgRE9NIG5vZGUuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGBvbGREb21gIGNvbnRhaW5zIHRoZSBjb3JyZWN0IHZhbHVlIGhlcmUgYmVjYXVzZSBpZiB0aGUgbGFzdCBjaGlsZFxuXHRcdFx0XHQvLyBpcyBhIEZyYWdtZW50LWxpa2UsIHRoZW4gb2xkRG9tIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHRvIHRoYXQgY2hpbGQncyBfbmV4dERvbS5cblx0XHRcdFx0Ly8gSWYgdGhlIGxhc3QgY2hpbGQgaXMgYSBET00gVk5vZGUsIHRoZW4gb2xkRG9tIHdpbGwgYmUgc2V0IHRvIHRoYXQgRE9NXG5cdFx0XHRcdC8vIG5vZGUncyBuZXh0U2libGluZy5cblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBvbGREb207XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG9sZERvbSAmJlxuXHRcdFx0b2xkVk5vZGUuX2RvbSA9PSBvbGREb20gJiZcblx0XHRcdG9sZERvbS5wYXJlbnROb2RlICE9IHBhcmVudERvbVxuXHRcdCkge1xuXHRcdFx0Ly8gVGhlIGFib3ZlIGNvbmRpdGlvbiBpcyB0byBoYW5kbGUgbnVsbCBwbGFjZWhvbGRlcnMuIFNlZSB0ZXN0IGluIHBsYWNlaG9sZGVyLnRlc3QuanM6XG5cdFx0XHQvLyBgZWZmaWNpZW50bHkgcmVwbGFjZSBudWxsIHBsYWNlaG9sZGVycyBpbiBwYXJlbnQgcmVyZW5kZXJzYFxuXHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0bmV3UGFyZW50Vk5vZGUuX2RvbSA9IGZpcnN0Q2hpbGREb207XG5cblx0Ly8gUmVtb3ZlIHJlbWFpbmluZyBvbGRDaGlsZHJlbiBpZiB0aGVyZSBhcmUgYW55LlxuXHRmb3IgKGkgPSBvbGRDaGlsZHJlbkxlbmd0aDsgaS0tOyApIHtcblx0XHRpZiAob2xkQ2hpbGRyZW5baV0gIT0gbnVsbCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgbmV3UGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdG9sZENoaWxkcmVuW2ldLl9kb20gIT0gbnVsbCAmJlxuXHRcdFx0XHRvbGRDaGlsZHJlbltpXS5fZG9tID09IG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSWYgdGhlIG5ld1BhcmVudFZOb2RlLl9fbmV4dERvbSBwb2ludHMgdG8gYSBkb20gbm9kZSB0aGF0IGlzIGFib3V0IHRvXG5cdFx0XHRcdC8vIGJlIHVubW91bnRlZCwgdGhlbiBnZXQgdGhlIG5leHQgc2libGluZyBvZiB0aGF0IHZub2RlIGFuZCBzZXRcblx0XHRcdFx0Ly8gX25leHREb20gdG8gaXRcblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBnZXRMYXN0RG9tKG9sZFBhcmVudFZOb2RlKS5uZXh0U2libGluZztcblx0XHRcdH1cblxuXHRcdFx0dW5tb3VudChvbGRDaGlsZHJlbltpXSwgb2xkQ2hpbGRyZW5baV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCByZWZzIG9ubHkgYWZ0ZXIgdW5tb3VudFxuXHRpZiAocmVmcykge1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZWZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcHBseVJlZihyZWZzW2ldLCByZWZzWysraV0sIHJlZnNbKytpXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSkge1xuXHQvLyBOb3RlOiBWTm9kZXMgaW4gbmVzdGVkIHN1c3BlbmRlZCB0cmVlcyBtYXkgYmUgbWlzc2luZyBfY2hpbGRyZW4uXG5cdGxldCBjID0gY2hpbGRWTm9kZS5fY2hpbGRyZW47XG5cdGxldCB0bXAgPSAwO1xuXHRmb3IgKDsgYyAmJiB0bXAgPCBjLmxlbmd0aDsgdG1wKyspIHtcblx0XHRsZXQgdm5vZGUgPSBjW3RtcF07XG5cdFx0aWYgKHZub2RlKSB7XG5cdFx0XHQvLyBXZSB0eXBpY2FsbHkgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdC8vIG9sZFZOb2RlLl9jaGlsZHJlbiB0byBuZXdWTm9kZS5fY2hpbGRyZW4uIElmIHRoYXQgaXMgdGhlIGNhc2UsIHdlIG5lZWRcblx0XHRcdC8vIHRvIHVwZGF0ZSB0aGUgb2xkIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZVxuXHRcdFx0Ly8gKGNoaWxkVk5vZGUgaGVyZSkuXG5cdFx0XHR2bm9kZS5fcGFyZW50ID0gY2hpbGRWTm9kZTtcblxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0b2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKHZub2RlLCBvbGREb20sIHBhcmVudERvbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKHBhcmVudERvbSwgdm5vZGUsIHZub2RlLCBjLCB2bm9kZS5fZG9tLCBvbGREb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2luZGV4JykuQ29tcG9uZW50Q2hpbGRyZW59IGNoaWxkcmVuIFRoZSB1bmZsYXR0ZW5lZFxuICogY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IG51bGwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ2hpbGQoXG5cdHBhcmVudERvbSxcblx0Y2hpbGRWTm9kZSxcblx0b2xkVk5vZGUsXG5cdG9sZENoaWxkcmVuLFxuXHRuZXdEb20sXG5cdG9sZERvbVxuKSB7XG5cdGxldCBuZXh0RG9tO1xuXHRpZiAoY2hpbGRWTm9kZS5fbmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gT25seSBGcmFnbWVudHMgb3IgY29tcG9uZW50cyB0aGF0IHJldHVybiBGcmFnbWVudCBsaWtlIFZOb2RlcyB3aWxsXG5cdFx0Ly8gaGF2ZSBhIG5vbi11bmRlZmluZWQgX25leHREb20uIENvbnRpbnVlIHRoZSBkaWZmIGZyb20gdGhlIHNpYmxpbmdcblx0XHQvLyBvZiBsYXN0IERPTSBjaGlsZCBvZiB0aGlzIGNoaWxkIFZOb2RlXG5cdFx0bmV4dERvbSA9IGNoaWxkVk5vZGUuX25leHREb207XG5cblx0XHQvLyBFYWdlcmx5IGNsZWFudXAgX25leHREb20uIFdlIGRvbid0IG5lZWQgdG8gcGVyc2lzdCB0aGUgdmFsdWUgYmVjYXVzZVxuXHRcdC8vIGl0IGlzIG9ubHkgdXNlZCBieSBgZGlmZkNoaWxkcmVuYCB0byBkZXRlcm1pbmUgd2hlcmUgdG8gcmVzdW1lIHRoZSBkaWZmIGFmdGVyXG5cdFx0Ly8gZGlmZmluZyBDb21wb25lbnRzIGFuZCBGcmFnbWVudHMuIE9uY2Ugd2Ugc3RvcmUgaXQgdGhlIG5leHRET00gbG9jYWwgdmFyLCB3ZVxuXHRcdC8vIGNhbiBjbGVhbiB1cCB0aGUgcHJvcGVydHlcblx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKFxuXHRcdG9sZFZOb2RlID09IG51bGwgfHxcblx0XHRuZXdEb20gIT0gb2xkRG9tIHx8XG5cdFx0bmV3RG9tLnBhcmVudE5vZGUgPT0gbnVsbFxuXHQpIHtcblx0XHRvdXRlcjogaWYgKG9sZERvbSA9PSBudWxsIHx8IG9sZERvbS5wYXJlbnROb2RlICE9PSBwYXJlbnREb20pIHtcblx0XHRcdHBhcmVudERvbS5hcHBlbmRDaGlsZChuZXdEb20pO1xuXHRcdFx0bmV4dERvbSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGBqPG9sZENoaWxkcmVuTGVuZ3RoOyBqKz0yYCBpcyBhbiBhbHRlcm5hdGl2ZSB0byBgaisrPG9sZENoaWxkcmVuTGVuZ3RoLzJgXG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgc2liRG9tID0gb2xkRG9tLCBqID0gMDtcblx0XHRcdFx0KHNpYkRvbSA9IHNpYkRvbS5uZXh0U2libGluZykgJiYgaiA8IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0aiArPSAxXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKHNpYkRvbSA9PSBuZXdEb20pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdEb20sIG9sZERvbSk7XG5cdFx0XHRuZXh0RG9tID0gb2xkRG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgcHJlLWNhbGN1bGF0ZWQgdGhlIG5leHRET00gbm9kZSwgdXNlIGl0LiBFbHNlIGNhbGN1bGF0ZSBpdCBub3dcblx0Ly8gU3RyaWN0bHkgY2hlY2sgZm9yIGB1bmRlZmluZWRgIGhlcmUgY3V6IGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlIG9mIGBuZXh0RG9tYC5cblx0Ly8gU2VlIG1vcmUgZGV0YWlsIGluIGNyZWF0ZS1lbGVtZW50LmpzOmNyZWF0ZVZOb2RlXG5cdGlmIChuZXh0RG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRvbGREb20gPSBuZXh0RG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIGdldExhc3REb20odm5vZGUpIHtcblx0aWYgKHZub2RlLnR5cGUgPT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUudHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdm5vZGUuX2RvbTtcblx0fVxuXG5cdGlmICh2bm9kZS5fY2hpbGRyZW4pIHtcblx0XHRmb3IgKGxldCBpID0gdm5vZGUuX2NoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB2bm9kZS5fY2hpbGRyZW5baV07XG5cdFx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdFx0bGV0IGxhc3REb20gPSBnZXRMYXN0RG9tKGNoaWxkKTtcblx0XHRcdFx0aWYgKGxhc3REb20pIHtcblx0XHRcdFx0XHRyZXR1cm4gbGFzdERvbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IENvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgZGlmZlByb3BzLCBzZXRQcm9wZXJ0eSB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgYXNzaWduLCByZW1vdmVOb2RlLCBzbGljZSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vb3B0aW9ucyc7XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBwYXJlbnQgb2YgdGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTVxuICogZWxlbWVudCBhbnkgbmV3IGRvbSBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdFxuICogcmVuZGVyIChleGNlcHQgd2hlbiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZ1xuICogRnJhZ21lbnRzIHRoYXQgaGF2ZSBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0h5ZHJhdGluZ10gV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9oeWRyYXRpbmcgIT0gbnVsbCkge1xuXHRcdGlzSHlkcmF0aW5nID0gb2xkVk5vZGUuX2h5ZHJhdGluZztcblx0XHRvbGREb20gPSBuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHQvLyBpZiB3ZSByZXN1bWUsIHdlIHdhbnQgdGhlIHRyZWUgdG8gYmUgXCJ1bmxvY2tlZFwiXG5cdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBbb2xkRG9tXTtcblx0fVxuXG5cdGlmICgodG1wID0gb3B0aW9ucy5fZGlmZikpIHRtcChuZXdWTm9kZSk7XG5cblx0dHJ5IHtcblx0XHRvdXRlcjogaWYgKHR5cGVvZiBuZXdUeXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGxldCBjLCBpc05ldywgb2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCwgY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uO1xuXHRcdFx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUaGUgY2hlY2sgYWJvdmUgdmVyaWZpZXMgdGhhdCBuZXdUeXBlIGlzIHN1cHBvc2UgdG8gYmUgY29uc3RydWN0ZWRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBuZXdUeXBlKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBUcnVzdCBtZSwgQ29tcG9uZW50IGltcGxlbWVudHMgdGhlIGludGVyZmFjZSB3ZSB3YW50XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgQ29tcG9uZW50KG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0aWYgKCFjLnN0YXRlKSBjLnN0YXRlID0ge307XG5cdFx0XHRcdGMuY29udGV4dCA9IGNvbXBvbmVudENvbnRleHQ7XG5cdFx0XHRcdGMuX2dsb2JhbENvbnRleHQgPSBnbG9iYWxDb250ZXh0O1xuXHRcdFx0XHRpc05ldyA9IGMuX2RpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9XG5cblx0XHRcdC8vIEludm9rZSBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcblx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IGMuc3RhdGUpIHtcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIGMuX25leHRTdGF0ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhc3NpZ24oXG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdG9sZFByb3BzID0gYy5wcm9wcztcblx0XHRcdG9sZFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdGMuX3Zub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRcdC8vIEludm9rZSBwcmUtcmVuZGVyIGxpZmVjeWNsZSBtZXRob2RzXG5cdFx0XHRpZiAoaXNOZXcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IG51bGwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYy5jb21wb25lbnREaWRNb3VudCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goYy5jb21wb25lbnREaWRNb3VudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBudWxsICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWMuX2ZvcmNlICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZSAhPSBudWxsICYmXG5cdFx0XHRcdFx0XHRjLnNob3VsZENvbXBvbmVudFVwZGF0ZShcblx0XHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRcdFx0Y29tcG9uZW50Q29udGV4dFxuXHRcdFx0XHRcdFx0KSA9PT0gZmFsc2UpIHx8XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gTW9yZSBpbmZvIGFib3V0IHRoaXMgaGVyZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vSm92aURlQ3Jvb2NrL2JlYzVmMmNlOTM1NDRkMmU2MDcwZWY4ZTAwMzZlNGU4XG5cdFx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9vcmlnaW5hbCAhPT0gb2xkVk5vZGUuX29yaWdpbmFsKSB7XG5cdFx0XHRcdFx0XHQvLyBXaGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBiYWlsIGJlY2F1c2Ugb2Ygc0NVIHdlIGhhdmUgdG8gdXBkYXRlXG5cdFx0XHRcdFx0XHQvLyB0aGUgcHJvcHMsIHN0YXRlIGFuZCBkaXJ0eS1zdGF0ZS5cblx0XHRcdFx0XHRcdC8vIHdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBzdHJpY3QtZXF1YWxpdHkgd2UgZG9uJ3QgYXMgdGhlIGNoaWxkIGNvdWxkIHN0aWxsXG5cdFx0XHRcdFx0XHQvLyBiZSBkaXJ0aWVkIHNlZSAjMzg4M1xuXHRcdFx0XHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uZm9yRWFjaCh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYy5fc3RhdGVDYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblxuXHRcdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50V2lsbFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVXBkYXRlKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXG5cdFx0XHRsZXQgcmVuZGVySG9vayA9IG9wdGlvbnMuX3JlbmRlcixcblx0XHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjLl9zdGF0ZUNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzTmV3ICYmIGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRzbmFwc2hvdCA9IGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlzVG9wTGV2ZWxGcmFnbWVudCA9XG5cdFx0XHRcdHRtcCAhPSBudWxsICYmIHRtcC50eXBlID09PSBGcmFnbWVudCAmJiB0bXAua2V5ID09IG51bGw7XG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID0gaXNUb3BMZXZlbEZyYWdtZW50ID8gdG1wLnByb3BzLmNoaWxkcmVuIDogdG1wO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gbnVsbDtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gbnVsbCAmJlxuXHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0XHQpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gZGlmZkVsZW1lbnROb2Rlcyhcblx0XHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2Zyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdGlmIChpc0h5ZHJhdGluZyB8fCBleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9ICEhaXNIeWRyYXRpbmc7XG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbltleGNlc3NEb21DaGlsZHJlbi5pbmRleE9mKG9sZERvbSldID0gbnVsbDtcblx0XHRcdC8vIF4gY291bGQgcG9zc2libHkgYmUgc2ltcGxpZmllZCB0bzpcblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aCA9IDA7XG5cdFx0fVxuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290KSB7XG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgU2VlIGFib3ZlIHRzLWlnbm9yZSBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmdcbiAqIHRoZSB2aXJ0dWFsIG5vZGVzIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7Kn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHJldHVybnMge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgb2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcztcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cdGxldCBpID0gMDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgU1ZHIG5hbWVzcGFjZSB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09PSAnc3ZnJykgaXNTdmcgPSB0cnVlO1xuXG5cdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0Zm9yICg7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY2hpbGQgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0Y2hpbGQgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gY2hpbGQgPT09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gY2hpbGQubG9jYWxOYW1lID09PSBub2RlVHlwZSA6IGNoaWxkLm5vZGVUeXBlID09PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IGNoaWxkO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gbnVsbCkge1xuXHRcdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBjcmVhdGVUZXh0Tm9kZSByZXR1cm5zIFRleHQsIHdlIGV4cGVjdCBQcmVhY3RFbGVtZW50XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGlmIChpc1N2Zykge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0XHQnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0XHRuZXdQcm9wcy5pcyAmJiBuZXdQcm9wc1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gbnVsbDtcblx0XHQvLyB3ZSBhcmUgY3JlYXRpbmcgYSBuZXcgbm9kZSwgc28gd2UgY2FuIGFzc3VtZSB0aGlzIGlzIGEgbmV3IHN1YnRyZWUgKGluIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPT0gbmV3UHJvcHMpKSB7XG5cdFx0XHRkb20uZGF0YSA9IG5ld1Byb3BzO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBJZiBleGNlc3NEb21DaGlsZHJlbiB3YXMgbm90IG51bGwsIHJlcG9wdWxhdGUgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50J3MgY2hpbGRyZW46XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBleGNlc3NEb21DaGlsZHJlbiAmJiBzbGljZS5jYWxsKGRvbS5jaGlsZE5vZGVzKTtcblxuXHRcdG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXG5cdFx0bGV0IG9sZEh0bWwgPSBvbGRQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblx0XHRsZXQgbmV3SHRtbCA9IG5ld1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0Ly8gQnV0LCBpZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIHVzaW5nIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSlcblx0XHRcdC8vIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET00gYXR0cmlidXRlcyB0byBkaWZmIHRoZW1cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdG9sZFByb3BzID0ge307XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG9sZFByb3BzW2RvbS5hdHRyaWJ1dGVzW2ldLm5hbWVdID0gZG9tLmF0dHJpYnV0ZXNbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld0h0bWwgfHwgb2xkSHRtbCkge1xuXHRcdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCFuZXdIdG1sIHx8XG5cdFx0XHRcdFx0KCghb2xkSHRtbCB8fCBuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCkgJiZcblx0XHRcdFx0XHRcdG5ld0h0bWwuX19odG1sICE9PSBkb20uaW5uZXJIVE1MKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRkb20uaW5uZXJIVE1MID0gKG5ld0h0bWwgJiYgbmV3SHRtbC5fX2h0bWwpIHx8ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGlmZlByb3BzKGRvbSwgbmV3UHJvcHMsIG9sZFByb3BzLCBpc1N2ZywgaXNIeWRyYXRpbmcpO1xuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdGkgPSBuZXdWTm9kZS5wcm9wcy5jaGlsZHJlbjtcblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0ZG9tLFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KGkpID8gaSA6IFtpXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2ZyAmJiBub2RlVHlwZSAhPT0gJ2ZvcmVpZ25PYmplY3QnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuXG5cdFx0XHRcdFx0PyBleGNlc3NEb21DaGlsZHJlblswXVxuXHRcdFx0XHRcdDogb2xkVk5vZGUuX2NoaWxkcmVuICYmIGdldERvbVNpYmxpbmcob2xkVk5vZGUsIDApLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW5baV0gIT0gbnVsbCkgcmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAoYXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvbilcblx0XHRpZiAoIWlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCd2YWx1ZScgaW4gbmV3UHJvcHMgJiZcblx0XHRcdFx0KGkgPSBuZXdQcm9wcy52YWx1ZSkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGkgIT09IGRvbS52YWx1ZSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ3Byb2dyZXNzJyAmJiAhaSkgfHxcblx0XHRcdFx0XHQvLyBUaGlzIGlzIG9ubHkgZm9yIElFIDExIHRvIGZpeCA8c2VsZWN0PiB2YWx1ZSBub3QgYmVpbmcgdXBkYXRlZC5cblx0XHRcdFx0XHQvLyBUbyBhdm9pZCBhIHN0YWxlIHNlbGVjdCB2YWx1ZSB3ZSBuZWVkIHRvIHNldCB0aGUgb3B0aW9uLnZhbHVlXG5cdFx0XHRcdFx0Ly8gYWdhaW4sIHdoaWNoIHRyaWdnZXJzIElFMTEgdG8gcmUtZXZhbHVhdGUgdGhlIHNlbGVjdCB2YWx1ZVxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ29wdGlvbicgJiYgaSAhPT0gb2xkUHJvcHMudmFsdWUpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ3ZhbHVlJywgaSwgb2xkUHJvcHMudmFsdWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0J2NoZWNrZWQnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMuY2hlY2tlZCkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHRpICE9PSBkb20uY2hlY2tlZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ2NoZWNrZWQnLCBpLCBvbGRQcm9wcy5jaGVja2VkLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuLyoqXG4gKiBJbnZva2Ugb3IgdXBkYXRlIGEgcmVmLCBkZXBlbmRpbmcgb24gd2hldGhlciBpdCBpcyBhIGZ1bmN0aW9uIG9yIG9iamVjdCByZWYuXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcmVmXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSByZWYodmFsdWUpO1xuXHRcdGVsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgdm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVW5tb3VudCBhIHZpcnR1YWwgbm9kZSBmcm9tIHRoZSB0cmVlIGFuZCBhcHBseSBET00gY2hhbmdlc1xuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXRcbiAqIGluaXRpYXRlZCB0aGUgdW5tb3VudFxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcFJlbW92ZV0gRmxhZyB0aGF0IGluZGljYXRlcyB0aGF0IGEgcGFyZW50IG5vZGUgb2YgdGhlXG4gKiBjdXJyZW50IGVsZW1lbnQgaXMgYWxyZWFkeSBkZXRhY2hlZCBmcm9tIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KHZub2RlLCBwYXJlbnRWTm9kZSwgc2tpcFJlbW92ZSkge1xuXHRsZXQgcjtcblx0aWYgKG9wdGlvbnMudW5tb3VudCkgb3B0aW9ucy51bm1vdW50KHZub2RlKTtcblxuXHRpZiAoKHIgPSB2bm9kZS5yZWYpKSB7XG5cdFx0aWYgKCFyLmN1cnJlbnQgfHwgci5jdXJyZW50ID09PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBudWxsLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gbnVsbCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IG51bGw7XG5cdFx0dm5vZGUuX2NvbXBvbmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9PSAnZnVuY3Rpb24nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFza2lwUmVtb3ZlICYmIHZub2RlLl9kb20gIT0gbnVsbCkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHQvLyBNdXN0IGJlIHNldCB0byBgdW5kZWZpbmVkYCB0byBwcm9wZXJseSBjbGVhbiB1cCBgX25leHREb21gXG5cdC8vIGZvciB3aGljaCBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZS4gU2VlIGNvbW1lbnQgaW4gYGNyZWF0ZS1lbGVtZW50LmpzYFxuXHR2bm9kZS5fcGFyZW50ID0gdm5vZGUuX2RvbSA9IHZub2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PT0gJ2Z1bmN0aW9uJztcblxuXHQvLyBUbyBiZSBhYmxlIHRvIHN1cHBvcnQgY2FsbGluZyBgcmVuZGVyKClgIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lXG5cdC8vIERPTSBub2RlLCB3ZSBuZWVkIHRvIG9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgdHJlZS4gV2UgZG9cblx0Ly8gdGhpcyBieSBhc3NpZ25pbmcgYSBuZXcgYF9jaGlsZHJlbmAgcHJvcGVydHkgdG8gRE9NIG5vZGVzIHdoaWNoIHBvaW50c1xuXHQvLyB0byB0aGUgbGFzdCByZW5kZXJlZCB0cmVlLiBCeSBkZWZhdWx0IHRoaXMgcHJvcGVydHkgaXMgbm90IHByZXNlbnQsIHdoaWNoXG5cdC8vIG1lYW5zIHRoYXQgd2UgYXJlIG1vdW50aW5nIGEgbmV3IHRyZWUgZm9yIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgb2xkVk5vZGUgPSBpc0h5ZHJhdGluZ1xuXHRcdD8gbnVsbFxuXHRcdDogKHJlcGxhY2VOb2RlICYmIHJlcGxhY2VOb2RlLl9jaGlsZHJlbikgfHwgcGFyZW50RG9tLl9jaGlsZHJlbjtcblxuXHR2bm9kZSA9IChcblx0XHQoIWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlKSB8fFxuXHRcdHBhcmVudERvbVxuXHQpLl9jaGlsZHJlbiA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHQ/IG51bGxcblx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGRcblx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdDogbnVsbCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZCxcblx0XHRpc0h5ZHJhdGluZ1xuXHQpO1xuXG5cdC8vIEZsdXNoIGFsbCBxdWV1ZWQgZWZmZWN0c1xuXHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50IHdpdGggZGF0YSBmcm9tIGEgUHJlYWN0IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0b1xuICogdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwiaW1wb3J0IHsgYXNzaWduLCBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHMgY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdG51bGxcblx0KTtcbn1cbiIsIi8qKlxuICogRmluZCB0aGUgY2xvc2VzdCBlcnJvciBib3VuZGFyeSB0byBhIHRocm93biBlcnJvciBhbmQgY2FsbCBpdFxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIFRoZSB0aHJvd24gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdGhhdCB0aHJld1xuICogdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0IGZvciB1bm1vdW50aW5nIHdoZW4gdGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZyB1bm1vdW50ZWQpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gW29sZFZOb2RlXVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuRXJyb3JJbmZvfSBbZXJyb3JJbmZvXVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoRXJyb3IoZXJyb3IsIHZub2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCwgY3RvciwgaGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IG51bGwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxubGV0IEVNUFRZID0gW107XG5cbmxldCBvbGRCZWZvcmVEaWZmID0gb3B0aW9ucy5fZGlmZjtcbmxldCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5sZXQgb2xkQWZ0ZXJEaWZmID0gb3B0aW9ucy5kaWZmZWQ7XG5sZXQgb2xkQ29tbWl0ID0gb3B0aW9ucy5fY29tbWl0O1xubGV0IG9sZEJlZm9yZVVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5cbmNvbnN0IFJBRl9USU1FT1VUID0gMTAwO1xubGV0IHByZXZSYWY7XG5cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSAhPT0gRU1QVFkpIHtcblx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZTtcblx0XHRcdH1cblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nVmFsdWUgPSBFTVBUWTtcblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxub3B0aW9ucy5fY29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xuXHRjb21taXRRdWV1ZS5zb21lKGNvbXBvbmVudCA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZpbHRlcihjYiA9PlxuXHRcdFx0XHRjYi5fdmFsdWUgPyBpbnZva2VFZmZlY3QoY2IpIDogdHJ1ZVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzKSBjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0pO1xuXHRcdFx0Y29tbWl0UXVldWUgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAob2xkQ29tbWl0KSBvbGRDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5cbm9wdGlvbnMudW5tb3VudCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVVubW91bnQpIG9sZEJlZm9yZVVubW91bnQodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRsZXQgaGFzRXJyb3JlZDtcblx0XHRjLl9faG9va3MuX2xpc3QuZm9yRWFjaChzID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGludm9rZUNsZWFudXAocyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGhhc0Vycm9yZWQgPSBlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGMuX19ob29rcyA9IHVuZGVmaW5lZDtcblx0XHRpZiAoaGFzRXJyb3JlZCkgb3B0aW9ucy5fY2F0Y2hFcnJvcihoYXNFcnJvcmVkLCBjLl92bm9kZSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0IGEgaG9vaydzIHN0YXRlIGZyb20gdGhlIGN1cnJlbnRDb21wb25lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBnZXRIb29rU3RhdGUoaW5kZXgsIHR5cGUpIHtcblx0aWYgKG9wdGlvbnMuX2hvb2spIHtcblx0XHRvcHRpb25zLl9ob29rKGN1cnJlbnRDb21wb25lbnQsIGluZGV4LCBjdXJyZW50SG9vayB8fCB0eXBlKTtcblx0fVxuXHRjdXJyZW50SG9vayA9IDA7XG5cblx0Ly8gTGFyZ2VseSBpbnNwaXJlZCBieTpcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iL2Y2YmU3MzQ2OGU2ZWM0NmIwZmY1YWEzY2M0YzliYWY3MmEyOTAyNWEvc3JjL2hvb2tzL2NvcmVfaG9va3MubWpzXG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi82NTBiZWFhNThjNDNjMzNhNzQ4MjBhM2M5OGIzYzcwNzljZjJlMzMzL3NyYy9yZW5kZXJlci5tanNcblx0Ly8gT3RoZXIgaW1wbGVtZW50YXRpb25zIHRvIGxvb2sgYXQ6XG5cdC8vICogaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL21ub3gwNXFwOFxuXHRjb25zdCBob29rcyA9XG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzIHx8XG5cdFx0KGN1cnJlbnRDb21wb25lbnQuX19ob29rcyA9IHtcblx0XHRcdF9saXN0OiBbXSxcblx0XHRcdF9wZW5kaW5nRWZmZWN0czogW11cblx0XHR9KTtcblxuXHRpZiAoaW5kZXggPj0gaG9va3MuX2xpc3QubGVuZ3RoKSB7XG5cdFx0aG9va3MuX2xpc3QucHVzaCh7IF9wZW5kaW5nVmFsdWU6IEVNUFRZIH0pO1xuXHR9XG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gW2luaXRpYWxTdGF0ZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuUmVkdWNlcjxhbnksIGFueT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPGFueT59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgYW55LCAoc3RhdGU6IGFueSkgPT4gdm9pZCBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXQpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5SZWR1Y2VySG9va1N0YXRlfSAqL1xuXHRjb25zdCBob29rU3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDIpO1xuXHRob29rU3RhdGUuX3JlZHVjZXIgPSByZWR1Y2VyO1xuXHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50KSB7XG5cdFx0aG9va1N0YXRlLl92YWx1ZSA9IFtcblx0XHRcdCFpbml0ID8gaW52b2tlT3JSZXR1cm4odW5kZWZpbmVkLCBpbml0aWFsU3RhdGUpIDogaW5pdChpbml0aWFsU3RhdGUpLFxuXG5cdFx0XHRhY3Rpb24gPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rU3RhdGUuX25leHRWYWx1ZVxuXHRcdFx0XHRcdD8gaG9va1N0YXRlLl9uZXh0VmFsdWVbMF1cblx0XHRcdFx0XHQ6IGhvb2tTdGF0ZS5fdmFsdWVbMF07XG5cdFx0XHRcdGNvbnN0IG5leHRWYWx1ZSA9IGhvb2tTdGF0ZS5fcmVkdWNlcihjdXJyZW50VmFsdWUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9uZXh0VmFsdWUgPSBbbmV4dFZhbHVlLCBob29rU3RhdGUuX3ZhbHVlWzFdXTtcblx0XHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5zZXRTdGF0ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aG9va1N0YXRlLl9jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuXG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MpIHtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcyA9IHRydWU7XG5cdFx0XHRjb25zdCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24ocCwgcywgYykge1xuXHRcdFx0XHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MpIHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHN0YXRlSG9va3MgPSBob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZpbHRlcihcblx0XHRcdFx0XHR4ID0+IHguX2NvbXBvbmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBhbGxIb29rc0VtcHR5ID0gc3RhdGVIb29rcy5ldmVyeSh4ID0+ICF4Ll9uZXh0VmFsdWUpO1xuXHRcdFx0XHQvLyBXaGVuIHdlIGhhdmUgbm8gdXBkYXRlZCBob29rcyBpbiB0aGUgY29tcG9uZW50IHdlIGludm9rZSB0aGUgcHJldmlvdXMgU0NVIG9yXG5cdFx0XHRcdC8vIHRyYXZlcnNlIHRoZSBWRE9NIHRyZWUgZnVydGhlci5cblx0XHRcdFx0aWYgKGFsbEhvb2tzRW1wdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldlNjdSA/IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKSA6IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRzdGF0ZUhvb2tzLmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rSXRlbS5fdmFsdWVbMF07XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IGhvb2tJdGVtLl92YWx1ZVswXSkgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBzaG91bGRVcGRhdGUgfHwgaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHBcblx0XHRcdFx0XHQ/IHByZXZTY3Vcblx0XHRcdFx0XHRcdD8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpXG5cdFx0XHRcdFx0XHQ6IHRydWVcblx0XHRcdFx0XHQ6IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiByZWYobnVsbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlZikge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IGNyZWF0ZUhhbmRsZSgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcmdzID09IG51bGwgPyBhcmdzIDogYXJncy5jb25jYXQocmVmKVxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmYWN0b3J5XG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnksIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5NZW1vSG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNyk7XG5cdGlmIChhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fcGVuZGluZ1ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHRcdHJldHVybiBzdGF0ZS5fcGVuZGluZ1ZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWx1ZSkgOiB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogYW55LCBlcnJvckluZm86IGltcG9ydCgncHJlYWN0JykuRXJyb3JJbmZvKSA9PiB2b2lkfSBjYlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKCkge1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTEpO1xuXHRpZiAoIXN0YXRlLl92YWx1ZSkge1xuXHRcdC8vIEdyYWIgZWl0aGVyIHRoZSByb290IG5vZGUgb3IgdGhlIG5lYXJlc3QgYXN5bmMgYm91bmRhcnkgbm9kZS5cblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbC5kJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cbi8qKlxuICogQWZ0ZXIgcGFpbnQgZWZmZWN0cyBjb25zdW1lci5cbiAqL1xuZnVuY3Rpb24gZmx1c2hBZnRlclBhaW50RWZmZWN0cygpIHtcblx0bGV0IGNvbXBvbmVudDtcblx0d2hpbGUgKChjb21wb25lbnQgPSBhZnRlclBhaW50RWZmZWN0cy5zaGlmdCgpKSkge1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWNvbXBvbmVudC5fX2hvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VDbGVhbnVwKGhvb2spIHtcblx0Ly8gQSBob29rIGNsZWFudXAgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0bGV0IGNsZWFudXAgPSBob29rLl9jbGVhbnVwO1xuXHRpZiAodHlwZW9mIGNsZWFudXAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhvb2suX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogSW52b2tlIGEgSG9vaydzIGVmZmVjdFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IG9sZEFyZ3NcbiAqIEBwYXJhbSB7YW55W119IG5ld0FyZ3NcbiAqL1xuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuXHRyZXR1cm4gKFxuXHRcdCFvbGRBcmdzIHx8XG5cdFx0b2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3MubGVuZ3RoIHx8XG5cdFx0bmV3QXJncy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuLyoqIFRha2VzIGEgbmV3IHZhbHVlIG9yIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIGEgdmFsdWUsIHVubGlrZSBgT25QYXNzaXZlU3RhdGVDaGFuZ2VgIHdoaWNoIHJlYWN0cyB0byB0aG9zZSB1cGRhdGVzICovXG5leHBvcnQgdHlwZSBQYXNzaXZlU3RhdGVVcGRhdGVyPFMsIFI+ID0gKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uPzogUikgPT4gdm9pZCk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKSA6ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbjogUikgPT4gdm9pZCk7XG4vKiogUmVzcG9uZHMgdG8gYSBjaGFuZ2UgaW4gYSB2YWx1ZSwgdW5saWtlIGBQYXNzaXZlU3RhdGVVcGRhdGVyYCB3aGljaCBjYXVzZXMgdGhlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFMsIFI+ID0gKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb24/OiBSKSA9PiAodm9pZCB8ICgoKSA9PiB2b2lkKSkpOy8vW1JdIGV4dGVuZHMgW25ldmVyXT8gKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb24/OiBSKSA9PiAodm9pZCB8ICgoKSA9PiB2b2lkKSkpIDogKCh2YWx1ZTogUywgcHJldlZhbHVlOiBTIHwgdW5kZWZpbmVkLCByZWFzb246IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7XG5cblxuXG4vKipcbiAqIERlYnVnIGhvb2suXG4gKiBcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKiBcbiAqIEV2ZW50dWFsbHksIHdoZW4gdXNlRXZlbnQgbGFuZHMsIHdlIGhvcGVmdWxseSB3b24ndCBuZWVkIHRoaXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHk8VCBleHRlbmRzIGFueVtdPihwYXJlbnRIb29rTmFtZTogc3RyaW5nLCAuLi52YWx1ZXM6IFQpIHtcbiAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZjxBcnJheTxUPj4oW10pO1xuICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWY8QXJyYXk8Ym9vbGVhbj4+KFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCBhcyBhbnksIC0xKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcblxuXG4gICAgZnVuY3Rpb24gdXNlSGVscGVyPFUgZXh0ZW5kcyBUPih2YWx1ZTogVSwgaTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMD8gSlNPTi5zdHJpbmdpZnkodmFsdWVzW2ldKSA6IFwidGhlIG51bWJlciBvZiBzdXBwb3NlZGx5IHN0YWJsZSBlbGVtZW50c1wifSkuYCk7XG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZVJlbmRlcmluZyhmOiAoKSA9PiB2b2lkKSB7XG4gICAgKG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPz8gc2V0VGltZW91dCkoZik7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqIFxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKiBcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKiBcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICogXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqIFxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgQnkgZGVmYXVsdCwgY2hhbmdlcyB0byBwYXNzaXZlIHN0YXRlIGFyZSBkZWxheWVkIGJ5IG9uZSB0aWNrIHNvIHRoYXQgd2Ugb25seSBjaGVjayBmb3IgY2hhbmdlcyBpbiBhIHNpbWlsYXIgd2F5IHRvIFByZWFjdC4gWW91IGNhbiBvdmVycmlkZSB0aGlzIHRvLCBmb3IgZXhhbXBsZSwgYWx3YXlzIHJ1biBpbW1lZGlhdGVseSBpbnN0ZWFkLlxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGU8VCwgUj4ob25DaGFuZ2U6IHVuZGVmaW5lZCB8IG51bGwgfCBPblBhc3NpdmVTdGF0ZUNoYW5nZTxULCBSPiwgZ2V0SW5pdGlhbFZhbHVlPzogKCkgPT4gVCwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmc/OiB0eXBlb2YgZGVib3VuY2VSZW5kZXJpbmcpOiByZWFkb25seSBbZ2V0U3RhdGVTdGFibGU6ICgpID0+IFQsIHNldFN0YXRlU3RhYmxlOiBQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+XSB7XG5cbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZjxUIHwgdHlwZW9mIFVuc2V0PihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmPFIgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZjxUIHwgKHR5cGVvZiBVbnNldCk+KFVuc2V0KTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWY8dW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpPih1bmRlZmluZWQpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG5cbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXG4gICAgLy8gdmFsdWUgaW4gcGxhY2Ugb2YgaGF2aW5nIG5vIHZhbHVlIGF0IGFsbCB5ZXQuXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxuICAgIGNvbnN0IHRyeUVuc3VyZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBnZXRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCEpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcblxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xuXG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQhIDogdmFsdWVSZWYuY3VycmVudCEpIGFzIFQ7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcblxuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+KChhcmc6IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj5bMF0sIHJlYXNvbjogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlsxXSkgPT4ge1xuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3Mgb2YgYW55dGhpbmcgZWxzZSwgZmlndXJlIG91dCB3aGF0IG91ciBuZXh0IHZhbHVlIGlzIGFib3V0IHRvIGJlLlxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSAoYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KSA6IGFyZyk7XG5cblxuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgdmFsdWUgc28gdGhhdCB3ZSBjYW4gY29tcGFyZSBhZ2FpbnN0IGl0IGxhdGVyXG4gICAgICAgICAgICAvLyAoaWYgd2UgZmxpcCBiYWNrIHRvIHRoaXMgc3RhdGUsIHRoZW4gd2Ugd29uJ3Qgc2VuZCB0aGUgb25DaGFuZ2UgZnVuY3Rpb24pXG4gICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gdmFsdWVSZWYuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdXBkYXRlIHRoaXMgaGVyZSAoYXMgd2VsbCBhcyBiZWxvdykgaW4gY2FzZSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBpbnZva2VzIHRoaXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICByZWFzb25SZWYuY3VycmVudCA9IHJlYXNvbiBhcyBSO1xuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0aGUgYWN0dWFsIGNoZWNrIGFuZCBpbnZvY2F0aW9uIG9mIG9uQ2hhbmdlIGxhdGVyIHRvIGxldCBlZmZlY3RzIHNldHRsZVxuICAgICAgICAgICAgKGN1c3RvbURlYm91bmNlUmVuZGVyaW5nID8/IGRlYm91bmNlUmVuZGVyaW5nKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFJlYXNvbiA9IHJlYXNvblJlZi5jdXJyZW50ISBhcyBSO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50ISBhcyBUO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ICE9IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJlZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4obmV4dERlcCwgcHJldkRlcCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBwcmV2RGVwLCBuZXh0UmVhc29uKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHREZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZmluaXNoZWQgd2l0aCBldmVyeXRoaW5nLCBzbyBtYXJrIHVzIGFzIGJlaW5nIG9uIGEgY2xlYW4gc2xhdGUgYWdhaW4uXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IFVuc2V0O1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXSBhcyBjb25zdDtcbn1cblxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcblxuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cblxuLyoqIFxuICogQW4gYWx0ZXJuYXRpdmUgdG8gdXNlIGZvciBgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmdgIHRoYXQgY2F1c2VzIGB1c2VQYXNzaXZlU3RhdGVgIHRvIHJ1biBjaGFuZ2VzIHdpdGhvdXQgd2FpdGluZyBhIHRpY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5JbW1lZGlhdGVseShmOiAoKSA9PiB2b2lkKSB7IGYoKTsgfSIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBvcHRpb25zLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEVmZmVjdENhbGxiYWNrLCBJbnB1dHMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cblxuXG5jb25zdCBUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlfLVwiO1xuXG5mdW5jdGlvbiBiYXNlNjQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xufVxuXG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICogXG4gKiBcbiAqIChUaGlzIGlzIGhlcmUsIGluIHRoaXMgcGFydGljdWxhciBmaWxlLCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAqIHdpdGhvdXQgYWxzbyBtYWtpbmcgYSB1dGlsaXRpZXMgZmlsZS5cbiAqIE9uY2Ugd2UgY2FuIHJlbW92ZSB0aGlzIGhvb2ssIHdlIGNhbiBwdXQgdGhpcyBmdW5jdGlvbiBiYWNrIHdpdGggdXNlUmFuZG9tSWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeD86IHN0cmluZykge1xuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xufVxuXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXA8c3RyaW5nLCBJbnB1dHMgfCB1bmRlZmluZWQ+KCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXA8c3RyaW5nLCB7IGVmZmVjdDogRWZmZWN0Q2FsbGJhY2ssIGlucHV0cz86IElucHV0cywgY2xlYW51cDogbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWQgfCAoKCkgPT4gdm9pZCkgfT4oKTtcblxuXG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcblxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdIGFzICh2bm9kZTogVk5vZGUsIGNvbW1pdFF1ZXVlOiBDb21wb25lbnRbXSkgPT4gdm9pZDtcbmNvbnN0IG5ld0NvbW1pdDogdHlwZW9mIG9yaWdpbmFsQ29tbWl0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZWZmZWN0SW5mb10gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgZWZmZWN0SW5mby5pbnB1dHMpKSB7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXA/LigpO1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgZWZmZWN0SW5mby5pbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvUnVuLmNsZWFyKCk7XG4gICAgb3JpZ2luYWxDb21taXQ/LiguLi5hcmdzKTtcbn1cbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQgYXMgbmV2ZXJcblxuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKiBcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqIFxuICogQHBhcmFtIGVmZmVjdCBcbiAqIEBwYXJhbSBpbnB1dHMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0OiBFZmZlY3RDYWxsYmFjayB8IG51bGwsIGlucHV0cz86IElucHV0cykge1xuXG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cblxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIGlmIChlZmZlY3QpXG4gICAgICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICBlbHNlXG4gICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9LCBbaWRdKVxufVxuXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzPzogSW5wdXRzLCBuZXdBcmdzPzogSW5wdXRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgICAhb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG4gICAgKTtcbn0iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuXG5cbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqIFxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqIFxuICogQHBhcmFtIHZhbHVlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXI8VD4odmFsdWU6IFQpIHtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxUPihVbnNldCBhcyB1bmtub3duIGFzIFQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKCkgPT4geyByZWYuY3VycmVudCA9IHZhbHVlOyB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgYXMgdW5rbm93biA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cblxuXG4vKipcbiAqIExpa2UgYHVzZVN0YWJsZUdldHRlcmAsIGJ1dCAqKipyZXF1aXJlcyoqKiB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlIG9iamVjdCBpcyBhbHNvIHN0YWJsZSxcbiAqIGFuZCBpbiB0dXJuIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXRzZWxmIGlzIHN0YWJsZS5cbiAqIEBwYXJhbSB0IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVPYmplY3Q8VCBleHRlbmRzIHt9Pih0OiBUKTogVCB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG5cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIGFzIHVzZUNhbGxiYWNrTmF0aXZlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5cblxuLy9jb25zdCBfSVNfU1RBQkxFX0dFVFRFUiA9IFN5bWJvbChcIlNUQUJMRVwiKTtcbmV4cG9ydCB0eXBlIFN0YWJsZTxUPiA9IFQ7Ly8gJiB7IFtfU1RBQkxFXTogdHJ1ZSB9O1xuXG4vKipcbiAqIFdlIGtlZXAgdHJhY2sgb2Ygd2hpY2ggY2FsbGJhY2tzIGFyZSBzdGFibGUgd2l0aCBhIFdlYWtNYXAgaW5zdGVhZCBvZiwgc2F5LCBhIHN5bWJvbCBiZWNhdXNlXG4gKiBgdXNlQ2FsbGJhY2tgIHdpbGwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCdzIHN0YWJsZSBhY3Jvc3MgKmFsbCogcmVuZGVycywgbWVhbmluZ1xuICogd2UgY2FuJ3QgdXNlIG91ciBmdW5ueSBcImBpZmAgb25seSB3b3JrcyBoZXJlIGJlY2F1c2UgaXQgZG9lc24ndCBicmVhayB0aGUgcnVsZXMgb2YgaG9va3NcIiB0cmljayB0aGVuLlxuICovXG5jb25zdCBtYXAgPSBuZXcgV2Vha01hcDxGdW5jdGlvbiwgYm9vbGVhbj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhYmxlR2V0dGVyPFQgZXh0ZW5kcyBGdW5jdGlvbj4ob2JqOiBUKTogb2JqIGlzIFN0YWJsZTxUPiB7XG4gICAgcmV0dXJuIChtYXAuZ2V0KG9iaikgPz8gZmFsc2UpO1xufVxuZnVuY3Rpb24gc2V0SXNTdGFibGVHZXR0ZXI8VCBleHRlbmRzICguLi5fYXJnczogYW55W10pID0+IGFueT4ob2JqOiBUKTogU3RhYmxlPFQ+IHtcbiAgICBtYXAuc2V0KG9iaiwgdHJ1ZSk7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuXG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICogXG4gKiBJbiBnZW5lcmFsLCBqdXN0IHBhc3MgdGhlIGZ1bmN0aW9uIHlvdSB3YW50IHRvIGJlIHN0YWJsZSAoYnV0IHlvdSBjYW4ndCB1c2UgaXQgZHVyaW5nIHJlbmRlcixcbiAqIHNvIGJlIGNhcmVmdWwhKS4gIEFsdGVybmF0aXZlbHksIGlmIHlvdSBuZWVkIGEgc3RhYmxlIGNhbGxiYWNrIHRoYXQgKipjYW4qKiBiZSB1c2VkXG4gKiBkdXJpbmcgcmVuZGVyLCBwYXNzIGFuIGVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgYW5kIGl0J2xsIGFjdCBsaWtlIGB1c2VDYWxsYmFja2Agd2l0aCBhblxuICogZW1wdHkgZGVwZW5kZW5jeSBhcnJheSwgYnV0IHdpdGggdGhlIGFzc29jaWF0ZWQgc3RhYmxlIHR5cGluZy4gSW4gdGhpcyBjYXNlLCB5b3UgKioqbXVzdCoqKiBlbnN1cmUgdGhhdCBpdFxuICogdHJ1bHkgaGFzIG5vIGRlcGVuZGVuY2llcy9vbmx5IHN0YWJsZSBkZXBlbmRlbmNpZXMhIVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZD4oZm46IE5vbk51bGxhYmxlPFQ+LCBub0RlcHM/OiBbXSB8IG51bGwgfCB1bmRlZmluZWQpOiBTdGFibGU8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICB0eXBlIFUgPSAoTm9uTnVsbGFibGU8VD4gJiAoKC4uLmFyZ3M6IGFueSkgPT4gYW55KSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlU3RhYmxlQ2FsbGJhY2tcIiwgbm9EZXBzID09IG51bGwsIG5vRGVwcz8ubGVuZ3RoLCBpc1N0YWJsZUdldHRlcjxVPihmbiBhcyBVKSk7XG4gICAgaWYgKGlzU3RhYmxlR2V0dGVyKGZuKSlcbiAgICAgICAgcmV0dXJuIGZuO1xuXG4gICAgaWYgKG5vRGVwcyA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcjxVPihmbik7XG4gICAgICAgIHJldHVybiBzZXRJc1N0YWJsZUdldHRlcih1c2VDYWxsYmFja05hdGl2ZTxVPigoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIoKSguLi5hcmdzKTtcbiAgICAgICAgfSkgYXMgVSwgW10pKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5hc3NlcnQobm9EZXBzLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIHJldHVybiBzZXRJc1N0YWJsZUdldHRlcih1c2VDYWxsYmFja05hdGl2ZTxVPihmbiwgW10pKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xudHlwZSBDID0gaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2xhc3NOYW1lXCJdO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqIFxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxoc0NsYXNzOiBDLCBsaHNDbGFzc05hbWU6IEMsIHJoc0NsYXNzOiBDLCByaHNDbGFzc05hbWU6IEMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSlcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgUmVmLCBSZWZPYmplY3QgfSBmcm9tIFwicHJlYWN0XCI7XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlZjxUPihpbnN0YW5jZTogVCB8IG51bGwsIHJlZjogUmVmPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgKHJlZiBhcyBSZWZPYmplY3Q8VCB8IG51bGw+KS5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxocyBcbiAqIEBwYXJhbSByaHMgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihyaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdLCBsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdKSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQhO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzITtcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocyE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21iaW5lZChjdXJyZW50OiBFIHwgbnVsbCkge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcblxuZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZTogc3RyaW5nKTogaC5KU1guQ1NTUHJvcGVydGllcyB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICogXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdIHtcblxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgaWYgKCFsaHMgJiYgcmhzKVxuICAgICAgICAgICAgcmV0dXJuIHJocztcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMgYXMgc3RyaW5nKSwgcmhzKSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMgYXMgc3RyaW5nKSkgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzID8/IFwiXCJ9YCBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXG4gICAgICAgIC4uLihyaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbiAgICB9IGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xufVxuXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XG5cbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5cbi8qXG50eXBlIElzRW1wdHlPYmplY3Q8VD4gPSBba2V5b2YgVF0gZXh0ZW5kcyBbbmV2ZXJdPyB0cnVlIDogZmFsc2U7XG5cbmV4cG9ydCB0eXBlIEV4dHJhY3RlZFByb3BzPE8gZXh0ZW5kcyB7fT4gPSB7IFtLIGluIGtleW9mIE9dOiBQaWNrPE9bS10sIChcInByb3BzU3RhYmxlXCIgfCBcInByb3BzVW5zdGFibGVcIikgJiBrZXlvZiBPW0tdPiB9O1xuXG5jb25zdCBvOiBFeHRyYWN0ZWRQcm9wczxVc2VHcmlkTmF2aWdhdGlvblJvd1JldHVyblR5cGU8YW55LCBhbnk+PiA9IHtcbiAgICBhc0NoaWxkUm93T2ZUYWJsZToge1xuXG4gICAgfSxcbiAgICBhc1BhcmVudFJvd09mQ2VsbHM6IHt9XG59Ki9cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzI6IHR5cGVvZiBjb25zb2xlW1wibG9nXCJdKSB7XG4gICAgbG9nID0gbG9nMlxufVxuXG5cbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXG4gKiBcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMiBcbiAqIEBwYXJhbSByaHMyIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wczxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KC4uLmFsbFByb3BzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdKSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTWVyZ2VkUHJvcHNcIiwgYWxsUHJvcHMubGVuZ3RoKTtcbiAgICBsZXQgcmV0OiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiA9IHt9O1xuICAgIGZvciAobGV0IG5leHRQcm9wcyBvZiBhbGxQcm9wcykge1xuICAgICAgICByZXQgPSB1c2VNZXJnZWRQcm9wczI8RT4ocmV0LCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IGtub3ducyA9IG5ldyBTZXQ8c3RyaW5nPihbXCJjaGlsZHJlblwiLCBcInJlZlwiLCBcImNsYXNzTmFtZVwiLCBcImNsYXNzXCIsIFwic3R5bGVcIl0pXG5cbmZ1bmN0aW9uIG1lcmdlVW5rbm93bihrZXk6IHN0cmluZywgbGhzVmFsdWU6IHVua25vd24sIHJoc1ZhbHVlOiB1bmtub3duKSB7XG5cbiAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUgYXMgbmV2ZXIsIHJoc1ZhbHVlIGFzIG5ldmVyKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlZCBhcyBuZXZlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gbGhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIGVsc2UgaWYgKChyaHNWYWx1ZSBhcyBhbnkpID09IGxoc1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcbiAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFVnaC5cbiAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgIGxvZz8uKGBUaGUgcHJvcCBcIiR7a2V5fVwiIGNhbm5vdCBzaW11bHRhbmVvdXNseSBiZSB0aGUgdmFsdWVzICR7bGhzVmFsdWV9IGFuZCAke3Joc1ZhbHVlfS4gT25lIG11c3QgYmUgY2hvc2VuIG91dHNpZGUgb2YgdXNlTWVyZ2VkUHJvcHMuYCk7XG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXJcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24uXG4gKiBcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBtb3N0IGNvbW1vbmx5IGNhbGxlZCBmdW5jdGlvbnMgaW4gdGhpcyBhbmQgY29uc3VtZXIgbGlicmFyaWVzLFxuICogc28gaXQgdHJhZGVzIGEgYml0IG9mIHJlYWRhYmlsaXR5IGZvciBzcGVlZCAoaS5lLiB3ZSBkb24ndCBkZWNvbXBvc2Ugb2JqZWN0cyBhbmQganVzdCBkbyByZWd1bGFyIHByb3BlcnR5IGFjY2VzcywgaXRlcmF0ZSB3aXRoIGBmb3IuLi5pbmAsIGluc3RlYWQgb2YgYE9iamVjdC5lbnRyaWVzYCwgZXRjLilcbiAqL1xuZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMyPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4obGhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiwgcmhzQWxsOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPik6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+IHtcblxuICAgIFxuICAgIGNvbnN0IHJldDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gPSB7XG4gICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmczxFPihsaHNBbGwucmVmLCByaHNBbGwucmVmKSxcbiAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHNBbGwuc3R5bGUsIHJoc0FsbC5zdHlsZSksXG4gICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHNBbGxbXCJjbGFzc1wiXSwgbGhzQWxsLmNsYXNzTmFtZSwgcmhzQWxsW1wiY2xhc3NcIl0sIHJoc0FsbC5jbGFzc05hbWUpLFxuICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzQWxsLmNoaWxkcmVuLCByaHNBbGwuY2hpbGRyZW4pLFxuICAgIH0gYXMgYW55O1xuXG4gICAgaWYgKHJldC5yZWYgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5yZWY7XG4gICAgaWYgKHJldC5zdHlsZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LnN0eWxlO1xuICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuY2xhc3NOYW1lO1xuICAgIGlmIChyZXRbXCJjbGFzc1wiXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0W1wiY2xhc3NcIl07XG4gICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LmNoaWxkcmVuO1xuXG4gICAgZm9yIChjb25zdCBsaHNLZXlVIGluIGxoc0FsbCkge1xuICAgICAgICBjb25zdCBsaHNLZXkgPSBsaHNLZXlVIGFzIGtleW9mIHR5cGVvZiBsaHNBbGw7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKGxoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W2xoc0tleV0gPSBsaHNBbGxbbGhzS2V5XTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHJoc0tleVUgaW4gcmhzQWxsKSB7XG4gICAgICAgIGNvbnN0IHJoc0tleSA9IHJoc0tleVUgYXMga2V5b2YgdHlwZW9mIHJoc0FsbDtcbiAgICAgICAgaWYgKGtub3ducy5oYXMocmhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlVW5rbm93bihyaHNLZXksIHJldFtyaHNLZXldLCByaHNBbGxbcmhzS2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcblxufVxuXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9uczxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIFUgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IGFueT4obGhzOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCwgcmhzOiBVIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuXG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuXG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuXG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQgZXh0ZW5kcyBFdmVudFRhcmdldD4ge1xuICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICAgICAgZ2V0RWxlbWVudCgpOiBUIHwgbnVsbDtcbiAgICAgICAgcHJvcHNTdGFibGU6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+O1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPiB7XG4gICAgLyoqXG4gICAgICogRm9yIHRoZSBzYWtlIG9mIGNvbnZlbmllbmNlLFxuICAgICAqIHRoaXMgb25lIGlzIG9wdGlvbmFsLCBzaW5jZSB1c2luZyB0aGlzIGhvb2sgaXMgc28gY29tbW9uLFxuICAgICAqIGJ1dCB1c2luZyBpdHMgcGFyYW1ldGVyIG9wdGlvbnMgaXMgc28gdW5jb21tb24sIGFuZCBpdCdzXG4gICAgICogYWJzZW5zZSBpc24ndCB1c3VhbGx5IGJlY2F1c2UgaXQgd2FzIGZvcmdvdHRlbiwgaXQncyBiZWNhdXNlXG4gICAgICogaXQgZG9lc24ndCBtYXR0ZXIuXG4gICAgICovXG4gICAgcmVmRWxlbWVudFBhcmFtZXRlcnM/OiB7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZT86IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQgfCBudWxsLCBuZXZlcj47XG4gICAgICAgIG9uTW91bnQ/OiAoZWxlbWVudDogVCkgPT4gdm9pZDtcbiAgICAgICAgb25Vbm1vdW50PzogKGVsZW1lbnQ6IFQpID0+IHZvaWQ7XG4gICAgfVxufVxuXG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudFByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PihyOiBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxFPiwgLi4ub3RoZXJQcm9wczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10ge1xuICAgIHJldHVybiBbci5yZWZFbGVtZW50UmV0dXJuLnByb3BzU3RhYmxlLCAuLi5vdGhlclByb3BzXTtcbn0qL1xuXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LCBcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICogXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqIFxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQ8VCBleHRlbmRzIEV2ZW50VGFyZ2V0PihhcmdzOiBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPik6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQ+IHtcbiAgICBjb25zdCB7IG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50IH0gPSAoYXJncy5yZWZFbGVtZW50UGFyYW1ldGVycyB8fCB7fSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUmVmRWxlbWVudFwiLCBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCk7XG5cbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2s8T25QYXNzaXZlU3RhdGVDaGFuZ2U8VCB8IG51bGwsIG5ldmVyPj4oKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSEpO1xuXG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuXG4gICAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGU8VCB8IG51bGwsIG5ldmVyPihoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8VD4+KHsgcmVmOiBzZXRFbGVtZW50IH0pO1xuXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZGVib3VuY2VSZW5kZXJpbmcsIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlLCBQYXNzaXZlU3RhdGVVcGRhdGVyLCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbmltcG9ydCB7IHVzZVN0YWJsZU9iamVjdCB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XG5cbi8qKlxuICogUmVtaW5kZXIgb2Ygb3JkZXIgb2YgZXhlY3V0aW9uOlxuICogXG4gKiAqICh0cmVlIG1vdW50cylcbiAqICogUGFyZW50IHJlbmRlcnNcbiAqICogQ2hpbGRyZW4gcmVuZGVyXG4gKiAqIENoaWxkcmVuIHJlY2VpdmUgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBQYXJlbnQgcmVjZWl2ZXMgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBDaGlsZHJlbiBydW4gZWZmZWN0c1xuICogKiBQYXJlbnQgcnVucyBlZmZlY3RzXG4gKiBcbiAqICogKHRyZWUgdW5tb3VudHMpXG4gKiAqIFBhcmVudCBydW5zIGVmZmVjdC1jbGVhbnVwXG4gKiAqIFBhcmVudCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqICogQ2hpbGQgcnVucyBlZmZlY3QtY2xlYW51cFxuICogKiBDaGlsZCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqIFxuICogVHdvIHRoaW5ncyB0byBub3RlIGhlcmU6XG4gKiAqIFJlbmRlcmluZyBzdGFydHMgYXQgdGhlIHJvb3QsICBidXQgZWZmZWN0cyBhbmQgcmVmcyBzdGFydCBhdCB0aGUgbGVhdmVzLlxuICogKiByZWZzIGFyZSAqdXN1YWxseSogY2FsbGVkIGJlZm9yZSBlZmZlY3RzLCBidXQgb25seSB3aGVuIHRoYXQgSFRNTEVsZW1lbnQgcmVuZGVycy4gQmFzaWNhbGx5IGp1c3QgYSByZW1pbmRlciB0aGF0IGEgY29tcG9uZW50IGNhbiBiZSBtb3VudGVkIHdpdGhvdXQgaXQgZXhpc3RpbmcgaW4gdGhlIERPTS5cbiAqL1xuY29uc3QgX2NvbW1lbnRzID0gdm9pZCAoMCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgLy9tYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TT5bXCJtYW5hZ2VkQ2hpbGRyZW5SZXR1cm5cIl1cblxuICAgIG1hbmFnZWRDaGlsZENvbnRleHQ6IHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheTogSW50ZXJuYWxDaGlsZEluZm88TT47XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkTW91bnRlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0sIG1vdW50ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0pID0+ICgoKSA9PiB2b2lkKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBEb2VzIG5vdGhpbmcgYXQgcnVudGltZSAtLSB0eXBlIGNoZWNraW5nIG9ubHkuXG4gKiBcbiAqIFRocm93cyBhIChUeXBlc2NyaXB0IGNvbXBpbGVyKSBlcnJvciBpZiB0aGUgcGFzc2VkIG9iamVjdCBpcyBhbnl0aGluZyBidXQgdGhlIGVtcHR5IG9iamVjdCB7fS5cbiAqIFxuICogVXNlIHRoaXMgdG8gZW5zdXJlIHRoYXQgeW91ciBzcHJlYWQgb3BlcmF0b3JzIHdvcmsgY29ycmVjdGx5IGFuZCBjb3ZlciBhbGwgY2FzZXMuXG4gKiBcbiAqIEBwYXJhbSBfYSBUaGUgcmVtYWluaW5nIHNwcmVhZCBwYXJhbWV0ZXJzIG9mIGEgZ2l2ZW4gb2JqZWN0IHRoYXQgeW91IGV4cGVjdCB0byBiZSBlbXB0eSAoYmVjYXVzZSB5b3UgcHJvcGVybHkgYWNjb3VudGVkIGZvciBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiBpdCwgYW5kIHdhbnQgdG8gZW5zdXJlIGl0IHN0YXlzIHRoYXQgd2F5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RW1wdHlPYmplY3Q8VCBleHRlbmRzIHt9PihfYTogW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXSA/IFQgOiBgVW5oYW5kbGVkIGtleXMgaW4gdGhpcyByZXN0IHNwcmVhZCBvYmplY3QhYCk6IHZvaWQgeyB9XG5cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIHRoYXQgY2hpbGRyZW4gYW5kIHBhcmVudHMgdXNlIHRvIGNvbW11bmljYXRlIHdpdGggZWFjaCBvdGhlci5cbiAqIFxuICogKiBgaW5kZXhgIHJlZmVycyB0byB3aGljaCBjaGlsZCB0aGlzIGlzLlxuICogKiBgZmxhZ3NgIGFyZSBxdWljay1hbmQtZWFzeSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgeW91IGNhbiBvcHRpb25hbGx5IHVzZVxuICogKiBgc3ViSW5mb2AgaXMgYW55dGhpbmcgdXNlZCBieSBhIGRlcml2ZWQgaG9vay4gYHVzZVJvdmluZ1RhYkluZGV4YCwgZm9yIGV4YW1wbGUsIG5lZWRzIHRvIGtub3cgaG93IHRvIGZvY3VzIGFuIGFyYml0cmFyeSBjaGlsZCwgc28gdGhlIGNoaWxkIHBvcHVsYXRlcyBgaW5mb2Agd2l0aCBhbiBvYmplY3QgY29udGFpbmluZyBhIG1ldGhvZCBjYWxsZWQgYGZvY3VzU2VsZmAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFuYWdlZENoaWxkSW5mbzxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgaW5kZXg6IFQ7XG4gICAgLy9mbGFnczogUGFydGlhbDxSZWNvcmQ8SywgQ2hpbGRGbGFnT3BlcmF0aW9ucz4+O1xuICAgIC8vc3ViSW5mbzogTUNTdWJJbmZvO1xufVxuXG5cblxuZXhwb3J0IHR5cGUgT25DaGlsZHJlbk1vdW50Q2hhbmdlPFQgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXI+ID0gKChtb3VudGVkOiBTZXQ8VD4sIHVubW91bnRlZDogU2V0PFQ+KSA9PiB2b2lkKTtcbmV4cG9ydCB0eXBlIE9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiA9ICgoY2F1c2VyczogSXRlcmFibGU8VD4pID0+IHZvaWQpO1xuXG5pbnRlcmZhY2UgTUNQPFQgZXh0ZW5kcyBudW1iZXIgfCBzdHJpbmc+IHtcbiAgICAvKipcbiAgICAgKiBSdW5zIGFmdGVyIG9uZSBvciBtb3JlIGNoaWxkcmVuIGhhdmUgdXBkYXRlZCB0aGVpciBpbmZvcm1hdGlvbiAoaW5kZXgsIGV0Yy4pLlxuICAgICAqIFxuICAgICAqIE9ubHkgb25lIHdpbGwgcnVuIHBlciB0aWNrLCBqdXN0IGxpa2UgbGF5b3V0RWZmZWN0LCBidXQgaXQgaXNuJ3RcbiAgICAgKiAqZ3VhcmFudGVlZCogdG8gaGF2ZSBhY3R1YWxseSBiZWVuIGEgY2hhbmdlLlxuICAgICAqIFxuICAgICAqIFRPRE86IFRoaXMgZW5kZWQgdXAgbm90IGJlaW5nIG5lZWRlZCBieSBhbnl0aGluZy4gSXMgaXQgbmVjZXNzYXJ5PyBEb2VzIGl0IGNvc3QgYW55dGhpbmc/XG4gICAgICovXG4gICAgb25BZnRlckNoaWxkTGF5b3V0RWZmZWN0PzogbnVsbCB8IHVuZGVmaW5lZCB8IE9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdDxUPjtcblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgdGhlIGFib3ZlLCBidXQgb25seSBmb3IgbW91bnQvdW5tb3VudCAob3Igd2hlbiBhIGNoaWxkIGNoYW5nZXMgaXRzIGluZGV4KVxuICAgICAqL1xuICAgIG9uQ2hpbGRyZW5Nb3VudENoYW5nZT86IG51bGwgfCB1bmRlZmluZWQgfCBPbkNoaWxkcmVuTW91bnRDaGFuZ2U8VD47XG5cbiAgICBvbkNoaWxkQ291bnRDaGFuZ2U/OiBudWxsIHwgdW5kZWZpbmVkIHwgKChjb3VudDogbnVtYmVyKSA9PiB2b2lkKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICBtYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzOiBNQ1A8TVtcImluZGV4XCJdPjtcbn1cblxuLy8gTUNTdWJJbmZvIGNvbnRhaW5zIHRoZSBlbnRpcmV0eSBvZiB0aGUgc2F2ZWQgZGF0YSBmb3IgdGhpcyBjaGlsZC4gIEFsbCBvZiBpdC4gRXZlbiB0eXBlcyB0aGUgdXNlciB3aWxsIG5ldmVyIGJlIGFibGUgdG8gcGFzcyBpbiBiZWNhdXNlIHRoZXkncmUgaW50ZXJuYWxseSBkZXJpdmVkLlxuLy8gU3ViYmVzdEluZm8gcmVmZXJzIHRvIHRoZSBhY3R1YWwgcGFyYW1ldGVycyB0aGUgdXNlciBwYXNzZXMgaW4gdGhhdCBjb3VsZCBiZSB0b3RhbGx5IHVucmVsYXRlZC4gXG5leHBvcnQgaW50ZXJmYWNlIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnM8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgcHJvcGVydHkgc2hhcmVkIGFtb25nIGFsbCBtYW5hZ2VkIGNoaWxkcmVuLlxuICAgIC8vIFRlY2huaWNhbGx5IHRoaXMgaXMgcmVkdW5kYW50IHdpdGggdGhlIHNlY29uZCBhcmd1bWVudCwgd2hpY2ggaXMuLi5laC4gQnV0IHRoZSB0eXBlcyBhcmUgY2xlYXIuXG4gICAgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogUGljazxNLCBcImluZGV4XCI+O1xuXG4gICAgLyoqXG4gICAgICogSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGRuJ3QgYmUgbnVsbCwgYnV0IGZvciBjb252ZW5pZW5jZSdzIHNha2UgeW91IGFyZSBhbGxvd2VkIHRvLCB3aGljaCBkaXNhYmxlcyBhbGwgYmVoYXZpb3IsIGFuZCBhbHNvIG1lYW5zIGBnZXRDaGlsZHJlbmAgd2lsbCBiZSBgdW5kZWZpbmVkYCFcbiAgICAgKi9cbiAgICBjb250ZXh0OiBVc2VNYW5hZ2VkQ2hpbGRyZW5Db250ZXh0PE0+IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNoaWxkIHRoYXQgcmVuZGVyZWQgaXRzZWxmIHdpdGggdGhlIHJlcXVlc3RlZCBrZXkuXG4gICAgICogXG4gICAgICogKipTVEFCTEUqKiAoZXZlbiB0aG91Z2ggaXQncyBub3QgYSBmdW5jdGlvbiwgdGhlIGlkZW50aXR5IG9mIHRoaXMgb2JqZWN0IG5ldmVyIGNoYW5nZXMpXG4gICAgICovXG4gICAgbWFuYWdlZENoaWxkcmVuUmV0dXJuOiB7XG4gICAgICAgIC8qKiBcbiAgICAgICAgICogKioqU1RBQkxFKioqXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGUgdGhhdCAqKmJvdGgqKiBgZ2V0Q2hpbGRyZW5gIGFuZCB0aGUgYE1hbmFnZWRDaGlsZHJlbmAgb2JqZWN0IGl0IHJldHVybnMgYXJlIHN0YWJsZSFcbiAgICAgICAgICogXG4gICAgICAgICAqIFRoaXMgaXMgYSBnZXR0ZXIgaW5zdGVhZCBvZiBhbiBvYmplY3QgYmVjYXVzZSB3aGVuIGZ1bmN0aW9uIGNhbGxzIGhhcHBlbiBvdXQgb2Ygb3JkZXIgaXQncyBlYXNpZXIgdG8ganVzdCBoYXZlIGFsd2F5cyBiZWVuIHBhc3NpbmcgYW5kIHJldHVybiBnZXR0ZXJzIGV2ZXJ5d2hlcmUgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRDaGlsZHJlbigpOiBNYW5hZ2VkQ2hpbGRyZW48TT47XG5cbiAgICB9O1xuXG4gICAgY29udGV4dDogVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRSZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICBtYW5hZ2VkQ2hpbGRSZXR1cm46IHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuICAgIH1cbn1cblxuLy9leHBvcnQgdHlwZSBVc2VNYW5hZ2VkQ2hpbGQ8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4gPSAoYTogVXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxNPikgPT4gVXNlTWFuYWdlZENoaWxkUmV0dXJuVHlwZTxNPjtcblxuXG5cblxuXG5cbi8qKlxuICogQWJzdHJhY3Rpb24gb3ZlciB0aGUgbWFuYWdlZCBjaGlsZHJlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hbmFnZWRDaGlsZHJlbjxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgLyoqIFNUQUJMRSAqL1xuICAgIGdldEF0KGluZGV4OiBNW1wiaW5kZXhcIl0pOiBNIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTVEFCTEUgKi9cbiAgICBnZXRIaWdoZXN0SW5kZXgoKTogbnVtYmVyO1xuICAgIC8qKiBTVEFCTEUgKi9cbiAgICBmb3JFYWNoOiAoZjogKGNoaWxkOiBNKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gICAgLyoqICoqVU5TVEFCTEUqKiwgYWxzbyBpbnRlcm5hbC11c2Ugb25seSwgYWxzbyBUT0RPIG5lZWQgYSB3b3JrYXJvdW5kIGZvciB0aGlzIGZvciBzb3J0YWJsZSBjaGlsZHJlbiAqL1xuICAgIGFycmF5U2xpY2U6ICgpID0+IE1bXTtcbn1cblxuaW50ZXJmYWNlIEludGVybmFsQ2hpbGRJbmZvPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPHN0cmluZyB8IG51bWJlcj4+IHtcbiAgICBhcnI6IEFycmF5PE0+O1xuICAgIHJlYzogUGFydGlhbDxSZWNvcmQ8TVtcImluZGV4XCJdLCBNPj47XG4gICAgaGlnaGVzdEluZGV4OiBudW1iZXI7XG4gICAgbG93ZXN0SW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbGxvd3MgYSBwYXJlbnQgY29tcG9uZW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBjZXJ0YWluXG4gKiBjaGlsZCBjb21wb25lbnRzIG9uY2UgdGhleSBoYXZlIHJlbmRlcmVkLlxuICogXG4gKiBUaGlzIGhvb2sgaXMgZGVzaWduZWQgdG8gYmUgbGlnaHR3ZWlnaHQsIGluIHRoYXQgdGhlIHBhcmVudCBrZWVwcyBubyBzdGF0ZVxuICogYW5kIHJ1bnMgbm8gZWZmZWN0cy4gIEVhY2ggY2hpbGQgKmRvZXMqIHJ1biBhbiBlZmZlY3QsIGJ1dCB3aXRoIG5vIHN0YXRlXG4gKiBjaGFuZ2VzIHVubGVzcyB5b3UgZXhwbGljaXRseSByZXF1ZXN0IHRoZW0uXG4gKiBcbiAqIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZENoaWxkcmVuPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPHN0cmluZyB8IG51bWJlcj4+KHBhcmVudFBhcmFtZXRlcnM6IFVzZU1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnM8TT4pOiBVc2VNYW5hZ2VkQ2hpbGRyZW5SZXR1cm5UeXBlPE0+IHtcbiAgICB0eXBlIEluZGV4VHlwZSA9IE1bXCJpbmRleFwiXTtcbiAgICB0eXBlIEluZm8gPSBNO1xuXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzOiB7IG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCwgb25DaGlsZHJlbk1vdW50Q2hhbmdlLCBvbkNoaWxkQ291bnRDaGFuZ2UgfSwgLi4ucmVzdCB9ID0gcGFyZW50UGFyYW1ldGVycztcbiAgICBhc3NlcnRFbXB0eU9iamVjdChyZXN0KTtcblxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1hbmFnZWRDaGlsZHJlblwiLCBvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QsIG9uQ2hpbGRyZW5Nb3VudENoYW5nZSwgb25DaGlsZENvdW50Q2hhbmdlKTtcblxuICAgIC8vY29uc3QgW2dldE1vdW50Q291bnQsIHNldE1vdW50Q291bnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hpbGRDb3VudENoYW5nZSwgcmV0dXJuWmVybywgcnVuSW1tZWRpYXRlbHkpO1xuXG4gICAgY29uc3QgZ2V0SGlnaGVzdEluZGV4ID0gdXNlQ2FsbGJhY2soKCk6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleDtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBBbGwgdGhlIGluZm9ybWF0aW9uIHdlIGhhdmUgYWJvdXQgb3VyIGNoaWxkcmVuIGlzIHN0b3JlZCBpbiB0aGlzICoqc3RhYmxlKiogYXJyYXkuXG4gICAgLy8gQW55IG11dGF0aW9ucyB0byB0aGlzIGFycmF5ICoqRE8gTk9UKiogdHJpZ2dlciBhbnkgc29ydCBvZiBhIHJlLXJlbmRlci5cbiAgICBjb25zdCBtYW5hZ2VkQ2hpbGRyZW5BcnJheSA9IHVzZVJlZjxJbnRlcm5hbENoaWxkSW5mbzxNPj4oeyBhcnI6IFtdLCByZWM6IHt9LCBoaWdoZXN0SW5kZXg6IDAsIGxvd2VzdEluZGV4OiAwIH0pO1xuXG4gICAgLy8gRm9yIGluZGlyZWN0IGFjY2VzcyB0byBlYWNoIGNoaWxkXG4gICAgLy8gQ29tcGFyZSBnZXRNYW5hZ2VkQ2hpbGRJbmZvXG4gICAgLy8gVE9ETzogVGhlIHByaW1hcnkgdXNlIGZvciB0aGlzIGlzIGZsYWdnYWJsZSBjbG9zZXN0IGZpdHNcbiAgICAvLyB3aGljaCBuZWVkcyB0byBzZWFyY2ggYWxsIGNoaWxkcmVuIGZvciB0aGF0IGNsb3Nlc3QgZml0LlxuICAgIC8vIEl0IHdvdWxkIGJlIG5pY2UgaWYgdGhlcmUgd2FzIHNvbWV0aGluZyBiZXR0ZXIgZm9yIHRoYXQuXG4gICAgY29uc3QgZm9yRWFjaENoaWxkID0gdXNlQ2FsbGJhY2soKGY6IChjaGlsZDogSW5mbykgPT4gdm9pZCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgICAgICAgICAgZihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlYykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQ6IEluZm8gfCB1bmRlZmluZWQgPSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlY1tmaWVsZCBhcyBrZXlvZiBSZWNvcmQ8SW5kZXhUeXBlLCBJbmZvPl07XG4gICAgICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgICAgICAgICAgZihjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIC8vIFJldHJpZXZlcyB0aGUgaW5mb3JtYXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBjaGlsZCB3aXRoIHRoZSBnaXZlbiBpbmRleC5cbiAgICAvLyBgdW5kZWZpbmVkYCBpZiBub3QgY2hpbGQgdGhlcmUsIG9yIGl0J3MgdW5tb3VudGVkLlxuICAgIGNvbnN0IGdldE1hbmFnZWRDaGlsZEluZm8gPSB1c2VDYWxsYmFjazxNYW5hZ2VkQ2hpbGRyZW48TT5bXCJnZXRBdFwiXT4oKGluZGV4OiBJbmRleFR5cGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW2luZGV4IGFzIG51bWJlcl0hO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWNbaW5kZXggYXMgSW5kZXhUeXBlXSE7XG4gICAgfSwgW10pXG5cbiAgICAvLyB0bDtkciB0aGlzIGlzIGEgd2F5IHRvIGhhdmUgcnVuIHVzZUxheW91dEVmZmVjdCBvbmNlIGFmdGVyIGFsbCBOIGNoaWxkcmVuXG4gICAgLy8gaGF2ZSBtb3VudGVkIGFuZCBydW4gKnRoZWlyKiB1c2VMYXlvdXRFZmZlY3QsIGJ1dCBhbHNvICp3aXRob3V0KiByZS1yZW5kZXJpbmdcbiAgICAvLyBvdXJzZWx2ZXMgYmVjYXVzZSBvZiBoYXZpbmcgYSBgY2hpbGRDb3VudGAgc3RhdGUgb3IgYW55dGhpbmcgc2ltaWxhci5cbiAgICAvL1xuICAgIC8vIFdoZW4gdGhlIGNoaWxkIGNvdW50IHJlZiB1cGRhdGVzLCB3ZSB3YW50IHRoZSBwYXJlbnQgdG8gYWxzbyBydW4gYW4gZWZmZWN0XG4gICAgLy8gdG8gbWF5YmUgZG8gc29tZXRoaW5nIHdpdGggYWxsIHRoZXNlIGNoaWxkcmVuIHRoYXQganVzdCBtb3VudGVkLlxuICAgIC8vIFRoZSBlYXNpZXN0IHdheSB3b3VsZCBiZSB1c2VFZmZlY3QoLi4uLCBbY2hpbGRDb3VudF0pIGJ1dFxuICAgIC8vIHRoYXQgd291bGQgcmVxdWlyZSB1cyBoYXZpbmcgYSBjaGlsZENvdW50IHN0YXRlLCB0aGVuIGNhbGxpbmdcbiAgICAvLyBzZXRDaGlsZENvdW50IGFuZCByZS1yZW5kZXJpbmcgZXZlcnkgdGltZSBjaGlsZHJlbiBtb3VudFxuICAgIC8vIChvbmx5IG9uZSByZS1yZW5kZXIgYXQgYSB0aW1lIHVubGVzcyBjaGlsZHJlbiBhcmUgc3RhZ2dlcmVkLCBidXQgc3RpbGwpXG4gICAgLy8gXG4gICAgLy8gQXMgYW4gYWx0ZXJuYXRlIHNvbHV0aW9uLCBhbnkgdGltZSBhIGNoaWxkIHVzZXMgVUxFIG9uIG1vdW50LCBpdCBxdWV1ZXMgYSBtaWNyb3Rhc2tcbiAgICAvLyB0byBlbXVsYXRlIHJ1bm5pbmcgVUxFIG9uIHRoZSBwYXJlbnQuIE9ubHkgdGhlIGZpcnN0IGNoaWxkIHdpbGwgYWN0dWFsbHkgcXVldWVcbiAgICAvLyB0aGUgbWljcm90YXNrIChieSBjaGVja2luZyBoYXNSZW1vdGVVTEUgZmlyc3QpIHNvIHRoYXQgdGhlIFwiZWZmZWN0XCIgb25seVxuICAgIC8vIHJ1bnMgb25jZS4gV2hlbiBpdCdzIGRvbmUsIGhhc1JlbW90ZVVMRSBpcyByZXNldCBzbyBpdCBjYW4gcnVuIGFnYWluIGlmXG4gICAgLy8gbW9yZSBjaGlsZHJlbiBtb3VudC91bm1vdW50LlxuICAgIGNvbnN0IGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZCA9IHVzZVJlZjx7IG1vdW50czogU2V0PEluZGV4VHlwZT4sIHVubW91bnRzOiBTZXQ8SW5kZXhUeXBlPiB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2VycyA9IHVzZVJlZihuZXcgU2V0PEluZGV4VHlwZT4oKSk7XG4gICAgY29uc3QgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkID0gdXNlQ2FsbGJhY2soKGluZGV4OiBJbmRleFR5cGUpID0+IHtcblxuICAgICAgICBpZiAocmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2Vycy5jdXJyZW50LnNpemUgPT0gMCkge1xuICAgICAgICAgICAgaWYgKG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VSZW5kZXJpbmcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3Q/LihyZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMuY3VycmVudC5hZGQoaW5kZXgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7IH07XG5cbiAgICB9LCBbLyogTXVzdCByZW1haW4gc3RhYmxlICovXSk7XG5cbiAgICBjb25zdCByZW1vdGVVTEVDaGlsZE1vdW50ZWQgPSB1c2VDYWxsYmFjaygoaW5kZXg6IEluZGV4VHlwZSwgbW91bnRlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIWhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBtb3VudHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICB1bm1vdW50czogbmV3IFNldCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChvbkNoaWxkQ291bnRDaGFuZ2UgfHwgb25DaGlsZHJlbk1vdW50Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VSZW5kZXJpbmcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkNoaWxkcmVuTW91bnRDaGFuZ2U/LihoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCEubW91bnRzLCBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCEudW5tb3VudHMpO1xuICAgICAgICAgICAgICAgICAgICBvbkNoaWxkQ291bnRDaGFuZ2U/LihnZXRDaGlsZHJlbigpLmdldEhpZ2hlc3RJbmRleCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5oaWdoZXN0SW5kZXggPSBNYXRoLm1heChtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW2luZGV4IGFzIG51bWJlcl07XG4gICAgICAgICAgICAgICAgbGV0IHNoYXZlID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2hhdmUgPD0gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW21hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLmxlbmd0aCAtIDEgLSBzaGF2ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICArK3NoYXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5zcGxpY2UobWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoIC0gc2hhdmUsIHNoYXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWNbaW5kZXggYXMgSW5kZXhUeXBlXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuaGlnaGVzdEluZGV4ID0gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50W21vdW50ZWQgPyBcIm1vdW50c1wiIDogXCJ1bm1vdW50c1wiXS5hZGQoaW5kZXgpO1xuICAgIH0sIFsvKiBNdXN0IHJlbWFpbiBzdGFibGUgKi9dKTtcblxuXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlU3RhYmxlT2JqZWN0PE1hbmFnZWRDaGlsZHJlbjxNPj4oe1xuICAgICAgICAuLi57IF86IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQgfSBhcyB7fSxcbiAgICAgICAgZm9yRWFjaDogZm9yRWFjaENoaWxkLFxuICAgICAgICBnZXRBdDogZ2V0TWFuYWdlZENoaWxkSW5mbyxcbiAgICAgICAgZ2V0SGlnaGVzdEluZGV4OiBnZXRIaWdoZXN0SW5kZXgsXG4gICAgICAgIGFycmF5U2xpY2U6IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5zbGljZSgpO1xuICAgICAgICB9LCBbXSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldENoaWxkcmVuID0gdXNlQ2FsbGJhY2soKCkgPT4gbWFuYWdlZENoaWxkcmVuLCBbXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZXh0OiB1c2VTdGFibGVPYmplY3Qoe1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkQ29udGV4dDogdXNlU3RhYmxlT2JqZWN0KHtcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheTogbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudCxcbiAgICAgICAgICAgICAgICByZW1vdGVVTEVDaGlsZE1vdW50ZWQsXG4gICAgICAgICAgICAgICAgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkLFxuICAgICAgICAgICAgICAgIGdldENoaWxkcmVuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuUmV0dXJuOiB7IGdldENoaWxkcmVuIH1cbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYW5hZ2VkQ2hpbGQ8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88bnVtYmVyIHwgc3RyaW5nPj4oaW5mbzogVXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxNPiwgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogTSk6IFVzZU1hbmFnZWRDaGlsZFJldHVyblR5cGU8TT4ge1xuICAgIHR5cGUgSW5kZXhUeXBlID0gTVtcImluZGV4XCJdO1xuXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRDb250ZXh0OiB7IGdldENoaWxkcmVuLCBtYW5hZ2VkQ2hpbGRyZW5BcnJheSwgcmVtb3RlVUxFQ2hpbGRNb3VudGVkLCByZW1vdGVVTEVDaGlsZENoYW5nZWQgfSB9ID0gKGluZm8uY29udGV4dCA/PyB7IG1hbmFnZWRDaGlsZENvbnRleHQ6IHt9IH0pO1xuICAgIGNvbnN0IGluZGV4ID0gbWFuYWdlZENoaWxkUGFyYW1ldGVycy5pbmRleDtcbiAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlXG4gICAgLy8gdGhlIHBhcmVudCBpZiB0aGV5IG5lZWQgaXQuXG4gICAgLy8gVGhlIHBhcmVudCBjYW4gbGlzdGVuIGZvciBhbGwgdXBkYXRlcyBhbmQgb25seSBhY3Qgb24gdGhlIG9uZXMgaXQgY2FyZXMgYWJvdXQsXG4gICAgLy8gYW5kIG11bHRpcGxlIGNoaWxkcmVuIHVwZGF0aW5nIGluIHRoZSBzYW1lIHRpY2sgd2lsbCBhbGwgYmUgc2VudCBhdCBvbmNlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5BcnJheSA9PSBudWxsIHx8IHJlbW90ZVVMRUNoaWxkQ2hhbmdlZCA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgLy8gSW5zZXJ0IHRoaXMgaW5mb3JtYXRpb24gaW4tcGxhY2VcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5hcnJbaW5kZXggYXMgbnVtYmVyXSA9IHsgLi4ubWFuYWdlZENoaWxkUGFyYW1ldGVycyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkucmVjW2luZGV4IGFzIEluZGV4VHlwZV0gPSB7IC4uLm1hbmFnZWRDaGlsZFBhcmFtZXRlcnMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkKGluZGV4IGFzIEluZGV4VHlwZSk7XG4gICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoOSldKTsgIC8vIDkgaXMgaW5maW5pdHksIHJpZ2h0PyBTdXJlLiBVbnJlbGF0ZWQ6IFRPRE8uXG5cbiAgICAvLyBXaGVuIHdlIG1vdW50LCBub3RpZnkgdGhlIHBhcmVudCB2aWEgcXVldWVNaWNyb3Rhc2tcbiAgICAvLyAoZXZlcnkgY2hpbGQgZG9lcyB0aGlzLCBzbyBldmVyeXRoaW5nJ3MgY29vcmRpbmF0ZWQgdG8gb25seSBxdWV1ZSBhIHNpbmdsZSBtaWNyb3Rhc2sgcGVyIHRpY2spXG4gICAgLy8gRG8gdGhlIHNhbWUgb24gdW5tb3VudC5cbiAgICAvLyBOb3RlOiBJdCdzIGltcG9ydGFudCB0aGF0IHRoaXMgY29tZXMgQUZURVIgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkXG4gICAgLy8gc28gdGhhdCByZW1vdGVVTEVDaGlsZE1vdW50ZWQgaGFzIGFjY2VzcyB0byBhbGwgdGhlIGluZm8gb24gbW91bnQuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVtb3RlVUxFQ2hpbGRNb3VudGVkPy4oaW5kZXggYXMgSW5kZXhUeXBlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHJlbW90ZVVMRUNoaWxkTW91bnRlZD8uKGluZGV4IGFzIEluZGV4VHlwZSwgZmFsc2UpO1xuICAgIH0sIFtpbmRleF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFuYWdlZENoaWxkUmV0dXJuOiB7IGdldENoaWxkcmVuOiBnZXRDaGlsZHJlbiEgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUNoaWxkcmVuRmxhZ1BhcmFtZXRlcnM8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55PiwgUj4ge1xuXG4gICAgLyoqXG4gICAgICogV2hpY2ggY2hpbGQgaXMgY29uc2lkZXJlZCBhY3RpdmUgb24gbW91bnQuXG4gICAgICogXG4gICAgICogQWZ0ZXIgbW91bnQsIGNoYW5nZSB0aGUgY3VycmVudCBhY3RpdmUgY2hpbGQgd2l0aCBgY2hhbmdlSW5kZXhgLlxuICAgICAqL1xuICAgIGluaXRpYWxJbmRleDogTVtcImluZGV4XCJdIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gcHJvdmlkZWQsIGlmIHRoZSBnaXZlbiBhY3RpdmF0ZWRJbmRleCBkb2Vzbid0IG1hcCBvbnRvIGFueVxuICAgICAqIHByb3ZpZGVkIGNoaWxkIChlaXRoZXIgYmVjYXVzZSBpdCdzIHRvbyBsYXJnZSBvciB0aGF0IGNoaWxkXG4gICAgICogZG9lc24ndCBleGlzdCksIHRoZSBjbG9zZXN0IGNoaWxkIHRvIHRoZSBnaXZlbiBhY3RpdmF0ZWRJbmRleFxuICAgICAqIHdpbGwgaGF2ZSBpdHMgZmxhZyBzZXQgaW5zdGVhZC5cbiAgICAgKiBcbiAgICAgKiBVc2Ugd2l0aCBjYXV0aW9uLCBhbmQgY29uc2lkZXIgaG93IGEgY2hpbGQgaGF2aW5nIGl0cyBmbGFnIHNldFxuICAgICAqIHdoaWxlIHRoZSBwYXJlbnQgdGhpbmtzIGl0IHNob3VsZG4ndCBiZSBjb3VsZCBjYXVzZSBpc3N1ZXMuXG4gICAgICovXG4gICAgY2xvc2VzdEZpdDogYm9vbGVhbjtcblxuICAgIGdldENoaWxkcmVuKCk6IE1hbmFnZWRDaGlsZHJlbjxNPjtcblxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIGEgbmV3IGluZGV4IGlzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIE5vdGFibHksIHRoZSB2YWx1ZSBjYW4gYmUgZGlmZmVyZW50IHRoYW4gd2hhdCB3YXMgY2FsbGVkIHdpdGggY2hhbmdlSW5kZXgoKVxuICAgICAqIGlmIHRoZSByZXF1ZXN0ZWQgaW5kZXggZGlkbid0IGV4aXN0IG9yIHdhcyBoaWRkZW4uXG4gICAgICovXG4gICAgb25JbmRleENoYW5nZTogbnVsbCB8IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+O1xuXG4gICAgc2V0QXQoaW5kZXg6IE0sIHZhbHVlOiBib29sZWFuLCBuZXdTZWxlY3RlZEluZGV4OiBNW1wiaW5kZXhcIl0gfCBudWxsLCBwcmV2U2VsZWN0ZWRJbmRleDogTVtcImluZGV4XCJdIHwgbnVsbCk6IHZvaWQ7XG4gICAgZ2V0QXQoaW5kZXg6IE0pOiBib29sZWFuO1xuICAgIGlzVmFsaWQoaW5kZXg6IE0pOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpbGRGbGFnT3BlcmF0aW9ucyB7XG5cbiAgICAvKipcbiAgICAgKiBNdXN0IHJldHVybiB3aGV0aGVyIHRoZSBjdXJyZW50IGNoaWxkIGlzIGFjdGl2ZVxuICAgICAqL1xuICAgIGdldDogKCkgPT4gYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGQgbXVzdCBzZXQgaXRzZWxmIGFzIGFjdGl2ZS9pbmFjdGl2ZSwgd2hhdGV2ZXIgdGhhdCBlbnRhaWxzLlxuICAgICAqIFRoaXMgY291bGQgYmUgYXMgc2ltcGxlIGFzIGEgc2V0U3RhdGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgc2V0OiAoYWN0aXZlOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdGhpcyBjaGlsZCBpcyBhIHZhbGlkIGNhbmRpZGF0ZSB0byBiZSBmbGFnZ2VkLCBhbmQgZmFsc2UgaWYgbm90LlxuICAgICAqIE1vc3QgY2hpbGRyZW4gc2hvdWxkIHJldHVybiB0cnVlLiBSZXR1cm5pbmcgZmFsc2UgaXMgb25seSB1c2VmdWwgdG8gbWFyayBhIGNoaWxkIGFzIFwiaW52YWxpZFwiIGluIHNvbWUgd2F5LlxuICAgICAqIFJlbW92aW5nIGEgY2hpbGQgZnJvbSB0aGUgbGlzdCBkb2VzIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIHRoaW5nLCBidXQgdGhpcyBsZXRzIHlvdSBrZWVwIHRoZSBjaGlsZCBhcm91bmQuXG4gICAgICovXG4gICAgaXNWYWxpZCgpOiBib29sZWFuO1xufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VDaGlsZHJlbkZsYWdSZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4sIFI+IHtcbiAgICAvKiogXG4gICAgICogKipTVEFCTEUqKlxuICAgICAqIFxuICAgICAqIE1hbnVhbGx5IGNoYW5nZXMgdGhlIGN1cnJlbnQgaW5kZXggdGhhdCBpcyAoZm9jdXNlZC9zZWxlY3RlZC90YWJiYWJsZS93aGF0ZXZlcikuXG4gICAgICogXG4gICAgICogVGhlIHBhcmVudCBjYW4gdXNlIHRoaXMgdG8gbm90aWZ5IGVhY2ggcmVsZXZhbnQgY2hpbGQgb2Ygd2hhdCBpdCBtdXN0IGRvIGluIG9yZGVyIHRvIG1ha2UgdGhpcyBjaGFuZ2UgaGFwcGVuLlxuICAgICAqIFxuICAgICAqIFRoZSByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIHRoZSBuZXcgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQuIElmIGBjbG9zZXN0Rml0YCBpcyBmYWxzZSwgaXQgd2lsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgd2hhdCB5b3UgcGFzc2VkIGluLlxuICAgICAqL1xuICAgIGNoYW5nZUluZGV4OiBQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+O1xuICAgIC8qKiBcbiAgICAgKiAqKlNUQUJMRSoqXG4gICAgICogXG4gICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIGEgY2hpbGQgbW91bnRzL3VubW91bnRzLCBvciB3aGVuZXZlciBjYWxsaW5nIGEgY2hpbGQncyBpc1ZhbGlkKCkgd291bGQgY2hhbmdlXG4gICAgICogICovXG4gICAgcmVldmFsdWF0ZUNsb3Nlc3RGaXQ6ICgpID0+IHZvaWQ7XG4gICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICBnZXRDdXJyZW50SW5kZXg6ICgpID0+IE1bXCJpbmRleFwiXSB8IG51bGw7XG59XG5cbi8qKlxuICogQW4gZXh0ZW5zaW9uIHRvIHVzZU1hbmFnZWRDaGlsZHJlbiB0aGF0IGhhbmRsZXMgdGhlIGZvbGxvd2luZyBjb21tb24gY2FzZTpcbiAqIDEuIFlvdSBoYXZlIGEgYnVuY2ggb2YgY2hpbGRyZW5cbiAqIDIuIEF0IGFueSBnaXZlbiB0aW1lLCBvbmx5IDEgb2YgdGhlbSBpcyBcInNlbGVjdGVkXCIsIFwiYWN0aXZhdGVkXCIsIFwiZm9jdXNhYmxlXCIsIHdoYXRldmVyIChvciAwIG9mIHRoZW0sIHRoYXQncyBjb29sIHRvbywganVzdCAwIG9yIDEgdGhvdWdoKS5cbiAqIDMuIFRoZSBwYXJlbnQgaGFzIGNvbnRyb2wgb3ZlciB3aG8gaXMgXCJzZWxlY3RlZFwiIHZpYSBhIG51bWVyaWNhbCBpbmRleC5cbiAqIFxuICogVGhpcyBob29rIGFsbG93cyBmb3IgbXVjaCBlYXNpZXIgY29udHJvbCBvdmVyIHNlbGVjdGlvbiBtYW5hZ2VtZW50LlxuICogXG4gKiBOb3RlIHRoYXQgYmVjYXVzZSB5b3UgbWF5IHdhbnQgdG8gdXNlIG11bHRpcGxlIGZsYWdzIHdpdGggdGhlIHNhbWUgY2hpbGRyZW4sIHRoaXMgaG9vayAqZG9lcyBub3QqIHVzZSBgdXNlTWFuYWdlZENoaWxkcmVuYCFcbiAqIFlvdSBuZWVkIHRvIHBhc3MgaXQgdGhlIGV4aXN0aW5nIGNoaWxkcmVuLCBhbmQgeW91IG11c3QgcGFzcyB5b3VyIGludm9jYXRpb24gb2YgYHVzZU1hbmFnZWRDaGlsZHJlbmAgdGhlIHJldHVybmVkIGBvbkNoaWxkcmVuTW91bnRDaGFuZ2VgIGhhbmRsZXIhXG4gKiBcbiAqIEFsc28gYmVjYXVzZSBvZiB0aGF0LCB0aGUgdHlwZXMgb2YgdGhpcyBmdW5jdGlvbiBhcmUgcmF0aGVyIG9kZC4gIEl0J3MgYmV0dGVyIHRvIHN0YXJ0IG9mZiB1c2luZyBhIGhvb2sgdGhhdCBhbHJlYWR5IHVzZXMgYSBmbGFnLCBzdWNoIGFzIGB1c2VSb3ZpbmdUYWJJbmRleGAsIGFzIGFuIGV4YW1wbGUuXG4gKiBcbiAqIFxuICogQHBhcmFtIHBhcmFtMCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRyZW5GbGFnPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPG51bWJlciB8IHN0cmluZz4sIFI+KHsgZ2V0Q2hpbGRyZW4sIGluaXRpYWxJbmRleCwgY2xvc2VzdEZpdCwgb25JbmRleENoYW5nZSwgZ2V0QXQsIHNldEF0LCBpc1ZhbGlkLCB9OiBVc2VDaGlsZHJlbkZsYWdQYXJhbWV0ZXJzPE0sIFI+KTogVXNlQ2hpbGRyZW5GbGFnUmV0dXJuVHlwZTxNLCBSPiB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlQ2hpbGRyZW5GbGFnXCIsIG9uSW5kZXhDaGFuZ2UsIGdldEF0LCBzZXRBdCwgaXNWYWxpZCk7XG5cbiAgICAvLyBUT0RPIChtYXliZT8pOiBFdmVuIGlmIHRoZXJlIGlzIGFuIGluaXRpYWwgaW5kZXgsIGl0J3Mgbm90IHNldCB1bnRpbCBtb3VudC4gSXMgdGhhdCBmaW5lP1xuICAgIGNvbnN0IFtnZXRDdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VQYXNzaXZlU3RhdGU8bnVsbCB8IE1bXCJpbmRleFwiXSwgUj4ob25JbmRleENoYW5nZSk7XG5cbiAgICBjb25zdCBbZ2V0UmVxdWVzdGVkSW5kZXgsIHNldFJlcXVlc3RlZEluZGV4XSA9IHVzZVBhc3NpdmVTdGF0ZTxudWxsIHwgTVtcImluZGV4XCJdLCBSPihudWxsKTtcblxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIG9uQ2hpbGRyZW5Nb3VudENoYW5nZSBhbmQgY2hhbmdlSW5kZXgsIG5vdCBwdWJsaWNcbiAgICAvLyBPbmx5IGNhbGxlZCB3aGVuIGBjbG9zZXN0Rml0YCBpcyBmYWxzZSwgbmF0dXJhbGx5LlxuICAgIGNvbnN0IGdldENsb3Nlc3RGaXQgPSB1c2VDYWxsYmFjaygocmVxdWVzdGVkSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGdldENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBjbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IGNsb3Nlc3RJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQgIT0gbnVsbCAmJiBpc1ZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBjaGlsZC5pbmRleCA9PSBcIm51bWJlclwiLCBcImNsb3Nlc3RGaXQgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIGVhY2ggY2hpbGQgaGFzIGEgbnVtZXJpYyBpbmRleCwgYW5kIGNhbm5vdCBiZSB1c2VkIHdoZW4gY2hpbGRyZW4gdXNlIHN0cmluZyBpbmRpY2VzIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rpc3RhbmNlID0gTWF0aC5hYnMoKGNoaWxkLmluZGV4IGFzIG51bWJlcikgLSByZXF1ZXN0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0Rpc3RhbmNlIDwgY2xvc2VzdERpc3RhbmNlIHx8IChuZXdEaXN0YW5jZSA9PSBjbG9zZXN0RGlzdGFuY2UgJiYgY2hpbGQuaW5kZXggPCByZXF1ZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gbmV3RGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IChjaGlsZC5pbmRleCBhcyBudW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZXN0SW5kZXg7XG4gICAgfSwgWy8qIE11c3QgcmVtYWluIHN0YWJsZSEgKi9dKTtcblxuICAgIC8vIEFueSB0aW1lIGEgY2hpbGQgbW91bnRzL3VubW91bnRzLCB3ZSBuZWVkIHRvIGRvdWJsZS1jaGVjayB0byBzZWUgaWYgdGhhdCBhZmZlY3RzIFxuICAgIC8vIHRoZSBcImN1cnJlbnRseSBzZWxlY3RlZFwiIChvciB3aGF0ZXZlcikgaW5kZXguICBUaGUgdHdvIGNhc2VzIHdlJ3JlIGxvb2tpbmcgZm9yOlxuICAgIC8vIDEuIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2hpbGQgdW5tb3VudGVkXG4gICAgLy8gMi4gQSBjaGlsZCBtb3VudGVkLCBhbmQgaXQgbW91bnRzIHdpdGggdGhlIGluZGV4IHdlJ3JlIGxvb2tpbmcgZm9yXG4gICAgY29uc3QgcmVldmFsdWF0ZUNsb3Nlc3RGaXQgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkSW5kZXggPSBnZXRSZXF1ZXN0ZWRJbmRleCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcbiAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gY3VycmVudEluZGV4ID09IG51bGwgPyBudWxsIDogY2hpbGRyZW4uZ2V0QXQoY3VycmVudEluZGV4KTtcblxuICAgICAgICBpZiAocmVxdWVzdGVkSW5kZXggIT0gbnVsbCAmJiBjbG9zZXN0Rml0ICYmIChyZXF1ZXN0ZWRJbmRleCAhPSBjdXJyZW50SW5kZXggfHwgY3VycmVudENoaWxkID09IG51bGwgfHwgIWlzVmFsaWQoY3VycmVudENoaWxkKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiByZXF1ZXN0ZWRJbmRleCA9PSBcIm51bWJlclwiLCBcImNsb3Nlc3RGaXQgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIGVhY2ggY2hpbGQgaGFzIGEgbnVtZXJpYyBpbmRleCwgYW5kIGNhbm5vdCBiZSB1c2VkIHdoZW4gY2hpbGRyZW4gdXNlIHN0cmluZyBpbmRpY2VzIGluc3RlYWQuXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0Rml0SW5kZXggPSBnZXRDbG9zZXN0Rml0KHJlcXVlc3RlZEluZGV4IGFzIG51bWJlcik7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY2xvc2VzdEZpdEluZGV4LCB1bmRlZmluZWQhKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGQpXG4gICAgICAgICAgICAgICAgc2V0QXQoY3VycmVudENoaWxkLCBmYWxzZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEZpdENoaWxkID0gY2hpbGRyZW4uZ2V0QXQoY2xvc2VzdEZpdEluZGV4KSE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY2xvc2VzdEZpdENoaWxkICE9IG51bGwsIFwiSW50ZXJuYWwgbG9naWM/Pz9cIik7XG4gICAgICAgICAgICAgICAgc2V0QXQoY2xvc2VzdEZpdENoaWxkLCB0cnVlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuXG4gICAgY29uc3QgY2hhbmdlSW5kZXggPSB1c2VDYWxsYmFjazxQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+PigoYXJnOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8TVtcImluZGV4XCJdIHwgbnVsbCwgUj4+WzBdLCByZWFzb246IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPj5bMV0pID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRJbmRleCA9IChhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhnZXRSZXF1ZXN0ZWRJbmRleCgpKSA6IGFyZykgYXMgTVtcImluZGV4XCJdO1xuXG4gICAgICAgIHNldFJlcXVlc3RlZEluZGV4KHJlcXVlc3RlZEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgpO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09IHJlcXVlc3RlZEluZGV4KVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RlZEluZGV4O1xuXG4gICAgICAgIGxldCBuZXdNYXRjaGluZ0NoaWxkID0gKHJlcXVlc3RlZEluZGV4ID09IG51bGwgPyBudWxsIDogY2hpbGRyZW4uZ2V0QXQocmVxdWVzdGVkSW5kZXgpKTtcbiAgICAgICAgY29uc3Qgb2xkTWF0Y2hpbmdDaGlsZCA9IChjdXJyZW50SW5kZXggPT0gbnVsbCA/IG51bGwgOiBjaGlsZHJlbi5nZXRBdChjdXJyZW50SW5kZXgpKTtcbiAgICAgICAgaWYgKHJlcXVlc3RlZEluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEVhc3kgY2FzZVxuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KG51bGwsIHJlYXNvbiBhcyBSKTtcbiAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCByZXF1ZXN0ZWRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRJc1ZhbGlkID0gKG5ld01hdGNoaW5nQ2hpbGQgJiYgaXNWYWxpZChuZXdNYXRjaGluZ0NoaWxkKSk7XG4gICAgICAgICAgICBpZiAoY2hpbGRJc1ZhbGlkIHx8ICFjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHJlcXVlc3RlZEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgICAgICAgICAgaWYgKG9sZE1hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCByZXF1ZXN0ZWRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3TWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgc2V0QXQobmV3TWF0Y2hpbmdDaGlsZCwgdHJ1ZSwgcmVxdWVzdGVkSW5kZXgsIGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdGVkSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgcmVxdWVzdGVkSW5kZXggPT0gXCJudW1iZXJcIiwgXCJjbG9zZXN0Rml0IGNhbiBvbmx5IGJlIHVzZWQgd2hlbiBlYWNoIGNoaWxkIGhhcyBhIG51bWVyaWMgaW5kZXgsIGFuZCBjYW5ub3QgYmUgdXNlZCB3aGVuIGNoaWxkcmVuIHVzZSBzdHJpbmcgaW5kaWNlcyBpbnN0ZWFkLlwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RGaXRJbmRleCA9IGdldENsb3Nlc3RGaXQocmVxdWVzdGVkSW5kZXggYXMgbnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY2xvc2VzdEZpdEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdGNoaW5nQ2hpbGQgPSBjaGlsZHJlbi5nZXRBdChjbG9zZXN0Rml0SW5kZXgpITtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobmV3TWF0Y2hpbmdDaGlsZCAhPSBudWxsLCBcIkludGVybmFsIGxvZ2ljPz8/XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkTWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEF0KG5ld01hdGNoaW5nQ2hpbGQsIHRydWUsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3RGaXRJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXQob2xkTWF0Y2hpbmdDaGlsZCwgZmFsc2UsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gUnVuIG9uY2UsIG9uIG1vdW50XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hhbmdlSW5kZXgoaW5pdGlhbEluZGV4ID8/IG51bGwsIHVuZGVmaW5lZCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4geyBjaGFuZ2VJbmRleCwgcmVldmFsdWF0ZUNsb3Nlc3RGaXQsIGdldEN1cnJlbnRJbmRleCB9O1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIGBCbG9ja2luZ0VsZW1lbnRzYCBtYW5hZ2VzIGEgc3RhY2sgb2YgZWxlbWVudHMgdGhhdCBpbmVydCB0aGUgaW50ZXJhY3Rpb25cbiAqIG91dHNpZGUgdGhlbS4gVGhlIHRvcCBlbGVtZW50IGlzIHRoZSBpbnRlcmFjdGl2ZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC5cbiAqIFRoZSBzdGFjayBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBtZXRob2RzIGBwdXNoLCByZW1vdmUsIHBvcGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tpbmdFbGVtZW50cyB7XG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiBUaGlzIGVtcHRpZXNcbiAgICogdGhlIGJsb2NraW5nIGVsZW1lbnRzXG4gICAqL1xuICBkZXN0cnVjdG9yKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIHRvcDogSFRNTEVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogQWRkcyB0aGUgZWxlbWVudCB0byB0aGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAqL1xuICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZyBlbGVtZW50cy4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgKiBlbGVtZW50IHdhcyByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICovXG4gIHBvcCgpOiBIVE1MRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGEgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIGhhcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50cyBleHRlbmRzIERvY3VtZW50IHtcbiAgJGJsb2NraW5nRWxlbWVudHM6IEJsb2NraW5nRWxlbWVudHM7XG59XG5cbigoKSA9PiB7XG4gIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG5cbiAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG5cbiAgaW50ZXJmYWNlIEluZXJ0YWJsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBpbmVydD86IGJvb2xlYW47XG4gIH1cblxuICBpbnRlcmZhY2UgSW50ZXJuYWxTdGF0ZSB7XG4gICAgW19zaWJsaW5nc1RvUmVzdG9yZV06IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+O1xuICAgIFtfcGFyZW50TU9dOiBNdXRhdGlvbk9ic2VydmVyO1xuICB9XG4gIGludGVyZmFjZSBIYXNJbnRlcm5hbFN0YXRlIGV4dGVuZHMgSW5lcnRhYmxlLCBJbnRlcm5hbFN0YXRlIHt9XG4gIGludGVyZmFjZSBNYXliZUhhc0ludGVybmFsU3RhdGUgZXh0ZW5kcyBJbmVydGFibGUsIFBhcnRpYWw8SW50ZXJuYWxTdGF0ZT4ge31cblxuICAvKipcbiAgICogU2hhZHlET00gc2hhZHkgcm9vdHMgbG9vayBhIGxvdCBsaWtlIHJlYWwgU2hhZG93Um9vdHMuIFRoZSBfX3NoYWR5IHByb3BlcnR5XG4gICAqIGdpdmVzIHRoZW0gYXdheSwgdGhvdWdoLlxuICAgKi9cbiAgaW50ZXJmYWNlIE1heWJlU2hhZHlSb290IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgX19zaGFkeTogdW5rbm93bjtcbiAgICBob3N0OiBFbGVtZW50O1xuICB9XG5cbiAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwgaW1wbGVtZW50cyBCbG9ja2luZ0VsZW1lbnRzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYmxvY2tpbmdFbGVtZW50c106IE1heWJlSGFzSW50ZXJuYWxTdGF0ZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcEVsUGFyZW50c106IEhhc0ludGVybmFsU3RhdGVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgKiBwdXNoZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbmV3IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+KCk7XG5cbiAgICBkZXN0cnVjdG9yKCk6IHZvaWQge1xuICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcyBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgW19ibG9ja2luZ0VsZW1lbnRzXTogbnVsbDtcbiAgICAgICAgW190b3BFbFBhcmVudHNdOiBudWxsO1xuICAgICAgICBbX2FscmVhZHlJbmVydEVsZW1lbnRzXTogbnVsbDtcbiAgICAgIH07XG4gICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IHRvcCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9wKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgaGFzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcENoYW5nZWRdKG5ld1RvcDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlfG51bGwpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICB9XG4gICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgLy8gYmVsb3cuXG4gICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cyBhcyBBcnJheTxIYXNJbnRlcm5hbFN0YXRlPjtcblxuICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcblxuICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICBpLS07XG4gICAgICAgIGotLTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgfVxuICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX3N3YXBJbmVydGVkU2libGluZ10oXG4gICAgICAgIG9sZEluZXJ0OiBIYXNJbnRlcm5hbFN0YXRlLCBuZXdJbmVydDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlKTogdm9pZCB7XG4gICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgfVxuICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAob2xkSW5lcnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgKG9sZEluZXJ0IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50czogSGFzSW50ZXJuYWxTdGF0ZVtdKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgKGVsZW1lbnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIChlbGVtZW50IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfaW5lcnRTaWJsaW5nc10oXG4gICAgICAgIGVsZW1lbnRzOiBNYXliZUhhc0ludGVybmFsU3RhdGVbXSwgdG9Ta2lwOiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwsXG4gICAgICAgIHRvS2VlcEluZXJ0OiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlITtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmUgYXMgTWF5YmVTaGFkeVJvb3Q7XG4gICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICB9XG4gICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICBjb25zdCB0YXJnZXQgPSAobXV0YXRpb24udGFyZ2V0IGFzIFNoYWRvd1Jvb3QpLmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCBhcyBIYXNJbnRlcm5hbFN0YXRlKTtcbiAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG5cbiAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgKi9cbiAgICBwcml2YXRlW19pc0luZXJ0YWJsZV0oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2dldFBhcmVudHNdKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQXJyYXk8SFRNTEVsZW1lbnQ+IHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBjdXJyZW50OiBIVE1MRWxlbWVudHxudWxsfHVuZGVmaW5lZCA9IGVsZW1lbnQ7XG4gICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8fFxuICAgICAgICAgICAgKGN1cnJlbnQgYXMgTm9kZSBhcyBTaGFkb3dSb290KS5ob3N0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudDogSFRNTEVsZW1lbnQpOlxuICAgICAgICBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwge1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICBsZXQgaTtcbiAgICAgIGxldCBqO1xuICAgICAgbGV0IG5vZGVzO1xuICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIChkb2N1bWVudCBhcyBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzKS4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4iLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICovXG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLyoqXG4gICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgKi9cbiAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgLyoqXG4gICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgKiBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAqXG4gICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAqXG4gICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICovXG5cbiAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgfVxuXG4gICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW5lcnRSb290O1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICpcbiAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICpcbiAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgKi9cblxuXG4gIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnbm9kZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgIH1cblxuICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAqXG4gICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICovXG5cblxuICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgfVxuXG4gICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICovXG4gICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICovXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gIH0oKTtcblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUhUTUxFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgfSxcbiAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcbiIsIlxuaW1wb3J0IHsgU3RhdGVVcGRhdGVyLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKiBcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCB8ICgoKSA9PiBUKSk6IHJlYWRvbmx5IFt2YWx1ZTogVCwgc2V0VmFsdWU6IFN0YXRlVXBkYXRlcjxUPiwgZ2V0VmFsdWU6ICgpID0+IFRdIHtcblxuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcblxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrPFN0YXRlVXBkYXRlcjxUPj4odmFsdWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUgYXMgKChfcHJldlZhbHVlOiBUKSA9PiBUKTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuXG5cbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdIGFzIGNvbnN0O1xufSIsIi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGEgZGlmZmVyZW50IHNoYXBlXG4gKiBAcGFyYW0ge29iamVjdH0gYVxuICogQHBhcmFtIHtvYmplY3R9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0RpZmZlcnMoYSwgYikge1xuXHRmb3IgKGxldCBpIGluIGEpIGlmIChpICE9PSAnX19zb3VyY2UnICYmICEoaSBpbiBiKSkgcmV0dXJuIHRydWU7XG5cdGZvciAobGV0IGkgaW4gYikgaWYgKGkgIT09ICdfX3NvdXJjZScgJiYgYVtpXSAhPT0gYltpXSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgdmFsdWVcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHsqfSB5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0cmV0dXJuICh4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkpIHx8ICh4ICE9PSB4ICYmIHkgIT09IHkpO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHNoYWxsb3dEaWZmZXJzIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDb21wb25lbnQgY2xhc3Mgd2l0aCBhIHByZWRlZmluZWQgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgaW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFB1cmVDb21wb25lbnQocCkge1xuXHR0aGlzLnByb3BzID0gcDtcbn1cblB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuLy8gU29tZSB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgY2hlY2sgaWYgdGhpcyBwcm9wZXJ0eSBpcyBwcmVzZW50XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0cmV0dXJuIHNoYWxsb3dEaWZmZXJzKHRoaXMucHJvcHMsIHByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBzdGF0ZSk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzaGFsbG93RGlmZmVycyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogTWVtb2l6ZSBhIGNvbXBvbmVudCwgc28gdGhhdCBpdCBvbmx5IHVwZGF0ZXMgd2hlbiB0aGUgcHJvcHMgYWN0dWFsbHkgaGF2ZVxuICogY2hhbmdlZC4gVGhpcyB3YXMgcHJldmlvdXNseSBrbm93biBhcyBgUmVhY3QucHVyZWAuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSBjIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gKiBAcGFyYW0geyhwcmV2OiBvYmplY3QsIG5leHQ6IG9iamVjdCkgPT4gYm9vbGVhbn0gW2NvbXBhcmVyXSBDdXN0b20gZXF1YWxpdHkgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW8oYywgY29tcGFyZXIpIHtcblx0ZnVuY3Rpb24gc2hvdWxkVXBkYXRlKG5leHRQcm9wcykge1xuXHRcdGxldCByZWYgPSB0aGlzLnByb3BzLnJlZjtcblx0XHRsZXQgdXBkYXRlUmVmID0gcmVmID09IG5leHRQcm9wcy5yZWY7XG5cdFx0aWYgKCF1cGRhdGVSZWYgJiYgcmVmKSB7XG5cdFx0XHRyZWYuY2FsbCA/IHJlZihudWxsKSA6IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdH1cblxuXHRcdGlmICghY29tcGFyZXIpIHtcblx0XHRcdHJldHVybiBzaGFsbG93RGlmZmVycyh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiAhY29tcGFyZXIodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhdXBkYXRlUmVmO1xuXHR9XG5cblx0ZnVuY3Rpb24gTWVtb2VkKHByb3BzKSB7XG5cdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBzaG91bGRVcGRhdGU7XG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoYywgcHJvcHMpO1xuXHR9XG5cdE1lbW9lZC5kaXNwbGF5TmFtZSA9ICdNZW1vKCcgKyAoYy5kaXNwbGF5TmFtZSB8fCBjLm5hbWUpICsgJyknO1xuXHRNZW1vZWQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXHRNZW1vZWQuX2ZvcndhcmRlZCA9IHRydWU7XG5cdHJldHVybiBNZW1vZWQ7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmxldCBvbGREaWZmSG9vayA9IG9wdGlvbnMuX2RpZmY7XG5vcHRpb25zLl9kaWZmID0gdm5vZGUgPT4ge1xuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLl9mb3J3YXJkZWQgJiYgdm5vZGUucmVmKSB7XG5cdFx0dm5vZGUucHJvcHMucmVmID0gdm5vZGUucmVmO1xuXHRcdHZub2RlLnJlZiA9IG51bGw7XG5cdH1cblx0aWYgKG9sZERpZmZIb29rKSBvbGREaWZmSG9vayh2bm9kZSk7XG59O1xuXG5leHBvcnQgY29uc3QgUkVBQ1RfRk9SV0FSRF9TWU1CT0wgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJlxuXHRcdFN5bWJvbC5mb3IgJiZcblx0XHRTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpKSB8fFxuXHQweGY0NztcblxuLyoqXG4gKiBQYXNzIHJlZiBkb3duIHRvIGEgY2hpbGQuIFRoaXMgaXMgbWFpbmx5IHVzZWQgaW4gbGlicmFyaWVzIHdpdGggSE9DcyB0aGF0XG4gKiB3cmFwIGNvbXBvbmVudHMuIFVzaW5nIGBmb3J3YXJkUmVmYCB0aGVyZSBpcyBhbiBlYXN5IHdheSB0byBnZXQgYSByZWZlcmVuY2VcbiAqIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpbnN0ZWFkIG9mIG9uZSBvZiB0aGUgd3JhcHBlciBpdHNlbGYuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkZvcndhcmRGbn0gZm5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRSZWYoZm4pIHtcblx0ZnVuY3Rpb24gRm9yd2FyZGVkKHByb3BzKSB7XG5cdFx0bGV0IGNsb25lID0gYXNzaWduKHt9LCBwcm9wcyk7XG5cdFx0ZGVsZXRlIGNsb25lLnJlZjtcblx0XHRyZXR1cm4gZm4oY2xvbmUsIHByb3BzLnJlZiB8fCBudWxsKTtcblx0fVxuXG5cdC8vIG1vYngtcmVhY3QgY2hlY2tzIGZvciB0aGlzIGJlaW5nIHByZXNlbnRcblx0Rm9yd2FyZGVkLiQkdHlwZW9mID0gUkVBQ1RfRk9SV0FSRF9TWU1CT0w7XG5cdC8vIG1vYngtcmVhY3QgaGVhdmlseSByZWxpZXMgb24gaW1wbGVtZW50YXRpb24gZGV0YWlscy5cblx0Ly8gSXQgZXhwZWN0cyBhbiBvYmplY3QgaGVyZSB3aXRoIGEgYHJlbmRlcmAgcHJvcGVydHksXG5cdC8vIGFuZCBwcm90b3R5cGUucmVuZGVyIHdpbGwgZmFpbC4gV2l0aG91dCB0aGlzXG5cdC8vIG1vYngtcmVhY3QgdGhyb3dzLlxuXHRGb3J3YXJkZWQucmVuZGVyID0gRm9yd2FyZGVkO1xuXG5cdEZvcndhcmRlZC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IEZvcndhcmRlZC5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0Rm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gJ0ZvcndhcmRSZWYoJyArIChmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lKSArICcpJztcblx0cmV0dXJuIEZvcndhcmRlZDtcbn1cbiIsImltcG9ydCB7IHRvQ2hpbGRBcnJheSB9IGZyb20gJ3ByZWFjdCc7XG5cbmNvbnN0IG1hcEZuID0gKGNoaWxkcmVuLCBmbikgPT4ge1xuXHRpZiAoY2hpbGRyZW4gPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdHJldHVybiB0b0NoaWxkQXJyYXkodG9DaGlsZEFycmF5KGNoaWxkcmVuKS5tYXAoZm4pKTtcbn07XG5cbi8vIFRoaXMgQVBJIGlzIGNvbXBsZXRlbHkgdW5uZWNlc3NhcnkgZm9yIFByZWFjdCwgc28gaXQncyBiYXNpY2FsbHkgcGFzc3Rocm91Z2guXG5leHBvcnQgY29uc3QgQ2hpbGRyZW4gPSB7XG5cdG1hcDogbWFwRm4sXG5cdGZvckVhY2g6IG1hcEZuLFxuXHRjb3VudChjaGlsZHJlbikge1xuXHRcdHJldHVybiBjaGlsZHJlbiA/IHRvQ2hpbGRBcnJheShjaGlsZHJlbikubGVuZ3RoIDogMDtcblx0fSxcblx0b25seShjaGlsZHJlbikge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pO1xuXHRcdGlmIChub3JtYWxpemVkLmxlbmd0aCAhPT0gMSkgdGhyb3cgJ0NoaWxkcmVuLm9ubHknO1xuXHRcdHJldHVybiBub3JtYWxpemVkWzBdO1xuXHR9LFxuXHR0b0FycmF5OiB0b0NoaWxkQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQsIG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IG9sZENhdGNoRXJyb3IgPSBvcHRpb25zLl9jYXRjaEVycm9yO1xub3B0aW9ucy5fY2F0Y2hFcnJvciA9IGZ1bmN0aW9uKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHRpZiAoZXJyb3IudGhlbikge1xuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRcdGxldCBjb21wb25lbnQ7XG5cdFx0bGV0IHZub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZCkge1xuXHRcdFx0XHRpZiAobmV3Vk5vZGUuX2RvbSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIERvbid0IGNhbGwgb2xkQ2F0Y2hFcnJvciBpZiB3ZSBmb3VuZCBhIFN1c3BlbnNlXG5cdFx0XHRcdHJldHVybiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZChlcnJvciwgbmV3Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRvbGRDYXRjaEVycm9yKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbyk7XG59O1xuXG5jb25zdCBvbGRVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xub3B0aW9ucy51bm1vdW50ID0gZnVuY3Rpb24odm5vZGUpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGNvbnN0IGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Ll9vblJlc29sdmUpIHtcblx0XHRjb21wb25lbnQuX29uUmVzb2x2ZSgpO1xuXHR9XG5cblx0Ly8gaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBoeWRyYXRpbmdcblx0Ly8gbW9zdCBsaWtlbHkgaXQgaXMgYmVjYXVzZSB0aGUgY29tcG9uZW50IGlzIHN1c3BlbmRlZFxuXHQvLyB3ZSBzZXQgdGhlIHZub2RlLnR5cGUgYXMgYG51bGxgIHNvIHRoYXQgaXQgaXMgbm90IGEgdHlwZW9mIGZ1bmN0aW9uXG5cdC8vIHNvIHRoZSB1bm1vdW50IHdpbGwgcmVtb3ZlIHRoZSB2bm9kZS5fZG9tXG5cdGlmIChjb21wb25lbnQgJiYgdm5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZSkge1xuXHRcdHZub2RlLnR5cGUgPSBudWxsO1xuXHR9XG5cblx0aWYgKG9sZFVubW91bnQpIG9sZFVubW91bnQodm5vZGUpO1xufTtcblxuZnVuY3Rpb24gZGV0YWNoZWRDbG9uZSh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIHBhcmVudERvbSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAmJiB2bm9kZS5fY29tcG9uZW50Ll9faG9va3MpIHtcblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5mb3JFYWNoKGVmZmVjdCA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZWZmZWN0Ll9jbGVhbnVwID09ICdmdW5jdGlvbicpIGVmZmVjdC5fY2xlYW51cCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0dm5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBwYXJlbnREb20pIHtcblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID0gZGV0YWNoZWRQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHR2bm9kZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHR2bm9kZS5fY2hpbGRyZW4gPVxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuICYmXG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4ubWFwKGNoaWxkID0+XG5cdFx0XHRcdGRldGFjaGVkQ2xvbmUoY2hpbGQsIGRldGFjaGVkUGFyZW50LCBwYXJlbnREb20pXG5cdFx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVPcmlnaW5hbCh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdHZub2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0dm5vZGUuX2NoaWxkcmVuID1cblx0XHRcdHZub2RlLl9jaGlsZHJlbiAmJlxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuLm1hcChjaGlsZCA9PlxuXHRcdFx0XHRyZW1vdmVPcmlnaW5hbChjaGlsZCwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KVxuXHRcdFx0KTtcblxuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBkZXRhY2hlZFBhcmVudCkge1xuXHRcdFx0XHRpZiAodm5vZGUuX2RvbSkge1xuXHRcdFx0XHRcdG9yaWdpbmFsUGFyZW50Lmluc2VydEJlZm9yZSh2bm9kZS5fZG9tLCB2bm9kZS5fbmV4dERvbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPSBvcmlnaW5hbFBhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8vIGhhdmluZyBjdXN0b20gaW5oZXJpdGFuY2UgaW5zdGVhZCBvZiBhIGNsYXNzIGhlcmUgc2F2ZXMgYSBsb3Qgb2YgYnl0ZXNcbmV4cG9ydCBmdW5jdGlvbiBTdXNwZW5zZSgpIHtcblx0Ly8gd2UgZG8gbm90IGNhbGwgc3VwZXIgaGVyZSB0byBnb2xmIHNvbWUgYnl0ZXMuLi5cblx0dGhpcy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCA9IDA7XG5cdHRoaXMuX3N1c3BlbmRlcnMgPSBudWxsO1xuXHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xufVxuXG4vLyBUaGluZ3Mgd2UgZG8gaGVyZSB0byBzYXZlIHNvbWUgYnl0ZXMgYnV0IGFyZSBub3QgcHJvcGVyIEpTIGluaGVyaXRhbmNlOlxuLy8gLSBjYWxsIGBuZXcgQ29tcG9uZW50KClgIGFzIHRoZSBwcm90b3R5cGVcbi8vIC0gZG8gbm90IHNldCBgU3VzcGVuc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yYCB0byBgU3VzcGVuc2VgXG5TdXNwZW5zZS5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fVxuICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIFRoZSB0aHJvd24gcHJvbWlzZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZTxhbnksIGFueT59IHN1c3BlbmRpbmdWTm9kZSBUaGUgc3VzcGVuZGluZyBjb21wb25lbnRcbiAqL1xuU3VzcGVuc2UucHJvdG90eXBlLl9jaGlsZERpZFN1c3BlbmQgPSBmdW5jdGlvbihwcm9taXNlLCBzdXNwZW5kaW5nVk5vZGUpIHtcblx0Y29uc3Qgc3VzcGVuZGluZ0NvbXBvbmVudCA9IHN1c3BlbmRpbmdWTm9kZS5fY29tcG9uZW50O1xuXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9ICovXG5cdGNvbnN0IGMgPSB0aGlzO1xuXG5cdGlmIChjLl9zdXNwZW5kZXJzID09IG51bGwpIHtcblx0XHRjLl9zdXNwZW5kZXJzID0gW107XG5cdH1cblx0Yy5fc3VzcGVuZGVycy5wdXNoKHN1c3BlbmRpbmdDb21wb25lbnQpO1xuXG5cdGNvbnN0IHJlc29sdmUgPSBzdXNwZW5kZWQoYy5fdm5vZGUpO1xuXG5cdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRjb25zdCBvblJlc29sdmVkID0gKCkgPT4ge1xuXHRcdGlmIChyZXNvbHZlZCkgcmV0dXJuO1xuXG5cdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG51bGw7XG5cblx0XHRpZiAocmVzb2x2ZSkge1xuXHRcdFx0cmVzb2x2ZShvblN1c3BlbnNpb25Db21wbGV0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9uU3VzcGVuc2lvbkNvbXBsZXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG9uUmVzb2x2ZWQ7XG5cblx0Y29uc3Qgb25TdXNwZW5zaW9uQ29tcGxldGUgPSAoKSA9PiB7XG5cdFx0aWYgKCEtLWMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQpIHtcblx0XHRcdC8vIElmIHRoZSBzdXNwZW5zaW9uIHdhcyBkdXJpbmcgaHlkcmF0aW9uIHdlIGRvbid0IG5lZWQgdG8gcmVzdG9yZSB0aGVcblx0XHRcdC8vIHN1c3BlbmRlZCBjaGlsZHJlbiBpbnRvIHRoZSBfY2hpbGRyZW4gYXJyYXlcblx0XHRcdGlmIChjLnN0YXRlLl9zdXNwZW5kZWQpIHtcblx0XHRcdFx0Y29uc3Qgc3VzcGVuZGVkVk5vZGUgPSBjLnN0YXRlLl9zdXNwZW5kZWQ7XG5cdFx0XHRcdGMuX3Zub2RlLl9jaGlsZHJlblswXSA9IHJlbW92ZU9yaWdpbmFsKFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLl9jb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZS5fY29tcG9uZW50Ll9vcmlnaW5hbFBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjLnNldFN0YXRlKHsgX3N1c3BlbmRlZDogKGMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGwpIH0pO1xuXG5cdFx0XHRsZXQgc3VzcGVuZGVkO1xuXHRcdFx0d2hpbGUgKChzdXNwZW5kZWQgPSBjLl9zdXNwZW5kZXJzLnBvcCgpKSkge1xuXHRcdFx0XHRzdXNwZW5kZWQuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFdlIGRvIG5vdCBzZXQgYHN1c3BlbmRlZDogdHJ1ZWAgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHdlIHdhbnQgdGhlIGFjdHVhbCBtYXJrdXBcblx0ICogdG8gcmVtYWluIG9uIHNjcmVlbiBhbmQgaHlkcmF0ZSBpdCB3aGVuIHRoZSBzdXNwZW5zZSBhY3R1YWxseSBnZXRzIHJlc29sdmVkLlxuXHQgKiBXaGlsZSBpbiBub24taHlkcmF0aW9uIGNhc2VzIHRoZSB1c3VhbCBmYWxsYmFjayAtPiBjb21wb25lbnQgZmxvdyB3b3VsZCBvY2NvdXIuXG5cdCAqL1xuXHRjb25zdCB3YXNIeWRyYXRpbmcgPSBzdXNwZW5kaW5nVk5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZTtcblx0aWYgKCFjLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50KysgJiYgIXdhc0h5ZHJhdGluZykge1xuXHRcdGMuc2V0U3RhdGUoeyBfc3VzcGVuZGVkOiAoYy5fZGV0YWNoT25OZXh0UmVuZGVyID0gYy5fdm5vZGUuX2NoaWxkcmVuWzBdKSB9KTtcblx0fVxuXHRwcm9taXNlLnRoZW4ob25SZXNvbHZlZCwgb25SZXNvbHZlZCk7XG59O1xuXG5TdXNwZW5zZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fc3VzcGVuZGVycyA9IFtdO1xufTtcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50W1wicHJvcHNcIl19IHByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlU3RhdGV9IHN0YXRlXG4gKi9cblN1c3BlbnNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0aWYgKHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcikge1xuXHRcdC8vIFdoZW4gdGhlIFN1c3BlbnNlJ3MgX3Zub2RlIHdhcyBjcmVhdGVkIGJ5IGEgY2FsbCB0byBjcmVhdGVWTm9kZVxuXHRcdC8vIChpLmUuIGR1ZSB0byBhIHNldFN0YXRlIGZ1cnRoZXIgdXAgaW4gdGhlIHRyZWUpXG5cdFx0Ly8gaXQncyBfY2hpbGRyZW4gcHJvcCBpcyBudWxsLCBpbiB0aGlzIGNhc2Ugd2UgXCJmb3JnZXRcIiBhYm91dCB0aGUgcGFya2VkIHZub2RlcyB0byBkZXRhY2hcblx0XHRpZiAodGhpcy5fdm5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBkZXRhY2hlZFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29uc3QgZGV0YWNoZWRDb21wb25lbnQgPSB0aGlzLl92bm9kZS5fY2hpbGRyZW5bMF0uX2NvbXBvbmVudDtcblx0XHRcdHRoaXMuX3Zub2RlLl9jaGlsZHJlblswXSA9IGRldGFjaGVkQ2xvbmUoXG5cdFx0XHRcdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcixcblx0XHRcdFx0ZGV0YWNoZWRQYXJlbnQsXG5cdFx0XHRcdChkZXRhY2hlZENvbXBvbmVudC5fb3JpZ2luYWxQYXJlbnREb20gPSBkZXRhY2hlZENvbXBvbmVudC5fcGFyZW50RG9tKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xuXHR9XG5cblx0Ly8gV3JhcCBmYWxsYmFjayB0cmVlIGluIGEgVk5vZGUgdGhhdCBwcmV2ZW50cyBpdHNlbGYgZnJvbSBiZWluZyBtYXJrZWQgYXMgYWJvcnRpbmcgbWlkLWh5ZHJhdGlvbjpcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3QgZmFsbGJhY2sgPVxuXHRcdHN0YXRlLl9zdXNwZW5kZWQgJiYgY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgcHJvcHMuZmFsbGJhY2spO1xuXHRpZiAoZmFsbGJhY2spIGZhbGxiYWNrLl9oeWRyYXRpbmcgPSBudWxsO1xuXG5cdHJldHVybiBbXG5cdFx0Y3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgc3RhdGUuX3N1c3BlbmRlZCA/IG51bGwgOiBwcm9wcy5jaGlsZHJlbiksXG5cdFx0ZmFsbGJhY2tcblx0XTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGFuZCBjYWxscyB0aGUgcGFyZW50IGNvbXBvbmVudCdzIF9zdXNwZW5kZWQgbWV0aG9kLCBwYXNzaW5nIGluIHRoZVxuICogc3VzcGVuZGVkIHZub2RlLiBUaGlzIGlzIGEgd2F5IGZvciBhIHBhcmVudCAoZS5nLiBTdXNwZW5zZUxpc3QpIHRvIGdldCBub3RpZmllZFxuICogdGhhdCBvbmUgb2YgaXRzIGNoaWxkcmVuL2Rlc2NlbmRhbnRzIHN1c3BlbmRlZC5cbiAqXG4gKiBUaGUgcGFyZW50IE1BWSByZXR1cm4gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgZ2V0IGNhbGxlZCB3aGVuIHRoZVxuICogc3VzcGVuc2lvbiByZXNvbHZlcywgbm90aWZ5aW5nIHRoZSBwYXJlbnQgb2YgdGhlIGZhY3QuXG4gKiBNb3Jlb3ZlciwgdGhlIGNhbGxiYWNrIGdldHMgZnVuY3Rpb24gYHVuc3VzcGVuZGAgYXMgYSBwYXJhbWV0ZXIuIFRoZSByZXNvbHZlZFxuICogY2hpbGQgZGVzY2VuZGFudCB3aWxsIG5vdCBhY3R1YWxseSBnZXQgdW5zdXNwZW5kZWQgdW50aWwgYHVuc3VzcGVuZGAgZ2V0cyBjYWxsZWQuXG4gKiBUaGlzIGlzIGEgd2F5IGZvciB0aGUgcGFyZW50IHRvIGRlbGF5IHVuc3VzcGVuZGluZy5cbiAqXG4gKiBJZiB0aGUgcGFyZW50IGRvZXMgbm90IHJldHVybiBhIGNhbGxiYWNrIHRoZW4gdGhlIHJlc29sdmVkIHZub2RlXG4gKiBnZXRzIHVuc3VzcGVuZGVkIGltbWVkaWF0ZWx5IHdoZW4gaXQgcmVzb2x2ZXMuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEByZXR1cm5zIHsoKHVuc3VzcGVuZDogKCkgPT4gdm9pZCkgPT4gdm9pZCk/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VzcGVuZGVkKHZub2RlKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudC5fY29tcG9uZW50O1xuXHRyZXR1cm4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkKHZub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenkobG9hZGVyKSB7XG5cdGxldCBwcm9tO1xuXHRsZXQgY29tcG9uZW50O1xuXHRsZXQgZXJyb3I7XG5cblx0ZnVuY3Rpb24gTGF6eShwcm9wcykge1xuXHRcdGlmICghcHJvbSkge1xuXHRcdFx0cHJvbSA9IGxvYWRlcigpO1xuXHRcdFx0cHJvbS50aGVuKFxuXHRcdFx0XHRleHBvcnRzID0+IHtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cztcblx0XHRcdFx0fSxcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb21wb25lbnQpIHtcblx0XHRcdHRocm93IHByb207XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG5cdH1cblxuXHRMYXp5LmRpc3BsYXlOYW1lID0gJ0xhenknO1xuXHRMYXp5Ll9mb3J3YXJkZWQgPSB0cnVlO1xuXHRyZXR1cm4gTGF6eTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgdG9DaGlsZEFycmF5IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHN1c3BlbmRlZCB9IGZyb20gJy4vc3VzcGVuc2UuanMnO1xuXG4vLyBJbmRleGVzIHRvIGxpbmtlZCBsaXN0IG5vZGVzIChub2RlcyBhcmUgc3RvcmVkIGFzIGFycmF5cyB0byBzYXZlIGJ5dGVzKS5cbmNvbnN0IFNVU1BFTkRFRF9DT1VOVCA9IDA7XG5jb25zdCBSRVNPTFZFRF9DT1VOVCA9IDE7XG5jb25zdCBORVhUX05PREUgPSAyO1xuXG4vLyBIYXZpbmcgY3VzdG9tIGluaGVyaXRhbmNlIGluc3RlYWQgb2YgYSBjbGFzcyBoZXJlIHNhdmVzIGEgbG90IG9mIGJ5dGVzLlxuZXhwb3J0IGZ1bmN0aW9uIFN1c3BlbnNlTGlzdCgpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG51bGw7XG59XG5cbi8vIE1hcmsgb25lIG9mIGNoaWxkJ3MgZWFybGllciBzdXNwZW5zaW9ucyBhcyByZXNvbHZlZC5cbi8vIFNvbWUgcGVuZGluZyBjYWxsYmFja3MgbWF5IGJlY29tZSBjYWxsYWJsZSBkdWUgdG8gdGhpc1xuLy8gKGUuZy4gdGhlIGxhc3Qgc3VzcGVuZGVkIGRlc2NlbmRhbnQgZ2V0cyByZXNvbHZlZCB3aGVuXG4vLyByZXZlYWxPcmRlciA9PT0gJ3RvZ2V0aGVyJykuIFByb2Nlc3MgdGhvc2UgY2FsbGJhY2tzIGFzIHdlbGwuXG5jb25zdCByZXNvbHZlID0gKGxpc3QsIGNoaWxkLCBub2RlKSA9PiB7XG5cdGlmICgrK25vZGVbUkVTT0xWRURfQ09VTlRdID09PSBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHQvLyBUaGUgbnVtYmVyIGEgY2hpbGQgKG9yIGFueSBvZiBpdHMgZGVzY2VuZGFudHMpIGhhcyBiZWVuIHN1c3BlbmRlZFxuXHRcdC8vIG1hdGNoZXMgdGhlIG51bWJlciBvZiB0aW1lcyBpdCdzIGJlZW4gcmVzb2x2ZWQuIFRoZXJlZm9yZSB3ZVxuXHRcdC8vIG1hcmsgdGhlIGNoaWxkIGFzIGNvbXBsZXRlbHkgcmVzb2x2ZWQgYnkgZGVsZXRpbmcgaXQgZnJvbSAuX21hcC5cblx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gZmlndXJlIG91dCB3aGVuICphbGwqIGNoaWxkcmVuIGhhdmUgYmVlbiBjb21wbGV0ZWx5XG5cdFx0Ly8gcmVzb2x2ZWQgd2hlbiByZXZlYWxPcmRlciBpcyAndG9nZXRoZXInLlxuXHRcdGxpc3QuX21hcC5kZWxldGUoY2hpbGQpO1xuXHR9XG5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgZmFsc3kgdGhlbiB3ZSBjYW4gZG8gYW4gZWFybHkgZXhpdCwgYXMgdGhlXG5cdC8vIGNhbGxiYWNrcyB3b24ndCBnZXQgcXVldWVkIGluIHRoZSBub2RlIGFueXdheS5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgJ3RvZ2V0aGVyJyB0aGVuIGFsc28gZG8gYW4gZWFybHkgZXhpdFxuXHQvLyBpZiBhbGwgc3VzcGVuZGVkIGRlc2NlbmRhbnRzIGhhdmUgbm90IHlldCBiZWVuIHJlc29sdmVkLlxuXHRpZiAoXG5cdFx0IWxpc3QucHJvcHMucmV2ZWFsT3JkZXIgfHxcblx0XHQobGlzdC5wcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ3QnICYmIGxpc3QuX21hcC5zaXplKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBXYWxrIHRoZSBjdXJyZW50bHkgc3VzcGVuZGVkIGNoaWxkcmVuIGluIG9yZGVyLCBjYWxsaW5nIHRoZWlyXG5cdC8vIHN0b3JlZCBjYWxsYmFja3Mgb24gdGhlIHdheS4gU3RvcCBpZiB3ZSBlbmNvdW50ZXIgYSBjaGlsZCB0aGF0XG5cdC8vIGhhcyBub3QgYmVlbiBjb21wbGV0ZWx5IHJlc29sdmVkIHlldC5cblx0bm9kZSA9IGxpc3QuX25leHQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0d2hpbGUgKG5vZGUubGVuZ3RoID4gMykge1xuXHRcdFx0bm9kZS5wb3AoKSgpO1xuXHRcdH1cblx0XHRpZiAobm9kZVtSRVNPTFZFRF9DT1VOVF0gPCBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsaXN0Ll9uZXh0ID0gbm9kZSA9IG5vZGVbTkVYVF9OT0RFXTtcblx0fVxufTtcblxuLy8gVGhpbmdzIHdlIGRvIGhlcmUgdG8gc2F2ZSBzb21lIGJ5dGVzIGJ1dCBhcmUgbm90IHByb3BlciBKUyBpbmhlcml0YW5jZTpcbi8vIC0gY2FsbCBgbmV3IENvbXBvbmVudCgpYCBhcyB0aGUgcHJvdG90eXBlXG4vLyAtIGRvIG5vdCBzZXQgYFN1c3BlbnNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgdG8gYFN1c3BlbnNlYFxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5fc3VzcGVuZGVkID0gZnVuY3Rpb24oY2hpbGQpIHtcblx0Y29uc3QgbGlzdCA9IHRoaXM7XG5cdGNvbnN0IGRlbGVnYXRlZCA9IHN1c3BlbmRlZChsaXN0Ll92bm9kZSk7XG5cblx0bGV0IG5vZGUgPSBsaXN0Ll9tYXAuZ2V0KGNoaWxkKTtcblx0bm9kZVtTVVNQRU5ERURfQ09VTlRdKys7XG5cblx0cmV0dXJuIHVuc3VzcGVuZCA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlZFVuc3VzcGVuZCA9ICgpID0+IHtcblx0XHRcdGlmICghbGlzdC5wcm9wcy5yZXZlYWxPcmRlcikge1xuXHRcdFx0XHQvLyBTcGVjaWFsIGNhc2UgdGhlIHVuZGVmaW5lZCAoZmFsc3kpIHJldmVhbE9yZGVyLCBhcyB0aGVyZVxuXHRcdFx0XHQvLyBpcyBubyBuZWVkIHRvIGNvb3JkaW5hdGUgYSBzcGVjaWZpYyBvcmRlciBvciB1bnN1c3BlbmRzLlxuXHRcdFx0XHR1bnN1c3BlbmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUucHVzaCh1bnN1c3BlbmQpO1xuXHRcdFx0XHRyZXNvbHZlKGxpc3QsIGNoaWxkLCBub2RlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGlmIChkZWxlZ2F0ZWQpIHtcblx0XHRcdGRlbGVnYXRlZCh3cmFwcGVkVW5zdXNwZW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d3JhcHBlZFVuc3VzcGVuZCgpO1xuXHRcdH1cblx0fTtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocHJvcHMpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbik7XG5cdGlmIChwcm9wcy5yZXZlYWxPcmRlciAmJiBwcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ2InKSB7XG5cdFx0Ly8gSWYgb3JkZXIgPT09ICdiYWNrd2FyZHMnIChvciwgd2VsbCwgYW55dGhpbmcgc3RhcnRpbmcgd2l0aCBhICdiJylcblx0XHQvLyB0aGVuIGZsaXAgdGhlIGNoaWxkIGxpc3QgYXJvdW5kIHNvIHRoYXQgdGhlIGxhc3QgY2hpbGQgd2lsbCBiZVxuXHRcdC8vIHRoZSBmaXJzdCBpbiB0aGUgbGlua2VkIGxpc3QuXG5cdFx0Y2hpbGRyZW4ucmV2ZXJzZSgpO1xuXHR9XG5cdC8vIEJ1aWxkIHRoZSBsaW5rZWQgbGlzdC4gSXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBpbiByZXZlcnNlIG9yZGVyXG5cdC8vIHNvIHRoYXQgYF9uZXh0YCBwb2ludHMgdG8gdGhlIGZpcnN0IGxpbmtlZCBsaXN0IG5vZGUgdG8gYmUgcmVzb2x2ZWQuXG5cdGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgbmV3IGxpbmtlZCBsaXN0IG5vZGUgYXMgYW4gYXJyYXkgb2YgZm9ybTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGVdXG5cdFx0Ly8gd2hlcmUgc3VzcGVuZGVkX2NvdW50IGFuZCByZXNvbHZlZF9jb3VudCBhcmUgbnVtZXJpYyBjb3VudGVycyBmb3Jcblx0XHQvLyBrZWVwaW5nIHRyYWNrIGhvdyBtYW55IHRpbWVzIGEgbm9kZSBoYXMgYmVlbiBzdXNwZW5kZWQgYW5kIHJlc29sdmVkLlxuXHRcdC8vXG5cdFx0Ly8gTm90ZSB0aGF0IHN1c3BlbmRlZF9jb3VudCBzdGFydHMgZnJvbSAxIGluc3RlYWQgb2YgMCwgc28gd2UgY2FuIGJsb2NrXG5cdFx0Ly8gcHJvY2Vzc2luZyBjYWxsYmFja3MgdW50aWwgY29tcG9uZW50RGlkTW91bnQgaGFzIGJlZW4gY2FsbGVkLiBJbiBhIHNlbnNlXG5cdFx0Ly8gbm9kZSBpcyBzdXNwZW5kZWQgYXQgbGVhc3QgdW50aWwgY29tcG9uZW50RGlkTW91bnQgZ2V0cyBjYWxsZWQhXG5cdFx0Ly9cblx0XHQvLyBQZW5kaW5nIGNhbGxiYWNrcyBhcmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbm9kZTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGUsIGNhbGxiYWNrXzAsIGNhbGxiYWNrXzEsIC4uLl1cblx0XHR0aGlzLl9tYXAuc2V0KGNoaWxkcmVuW2ldLCAodGhpcy5fbmV4dCA9IFsxLCAwLCB0aGlzLl9uZXh0XSkpO1xuXHR9XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJdGVyYXRlIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFmdGVyIG1vdW50aW5nIGZvciB0d28gcmVhc29uczpcblx0Ly8gMS4gQXMgZWFjaCBub2RlW1NVU1BFTkRFRF9DT1VOVF0gc3RhcnRzIGZyb20gMSwgdGhpcyBpdGVyYXRpb24gaW5jcmVhc2VzXG5cdC8vICAgIGVhY2ggbm9kZVtSRUxFQVNFRF9DT1VOVF0gYnkgMSwgdGhlcmVmb3JlIGJhbGFuY2luZyB0aGUgY291bnRlcnMuXG5cdC8vICAgIFRoZSBub2RlcyBjYW4gbm93IGJlIGNvbXBsZXRlbHkgY29uc3VtZWQgZnJvbSB0aGUgbGlua2VkIGxpc3QuXG5cdC8vIDIuIEhhbmRsZSBub2RlcyB0aGF0IG1pZ2h0IGhhdmUgZ290dGVuIHJlc29sdmVkIGJldHdlZW4gcmVuZGVyIGFuZFxuXHQvLyAgICBjb21wb25lbnREaWRNb3VudC5cblx0dGhpcy5fbWFwLmZvckVhY2goKG5vZGUsIGNoaWxkKSA9PiB7XG5cdFx0cmVzb2x2ZSh0aGlzLCBjaGlsZCwgbm9kZSk7XG5cdH0pO1xufTtcbiIsImltcG9ydCB7XG5cdHJlbmRlciBhcyBwcmVhY3RSZW5kZXIsXG5cdGh5ZHJhdGUgYXMgcHJlYWN0SHlkcmF0ZSxcblx0b3B0aW9ucyxcblx0dG9DaGlsZEFycmF5LFxuXHRDb21wb25lbnRcbn0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0VMRU1FTlRfVFlQRSA9XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuXHQweGVhYzc7XG5cbmNvbnN0IENBTUVMX1BST1BTID0gL14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS87XG5cbmNvbnN0IElTX0RPTSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIElucHV0IHR5cGVzIGZvciB3aGljaCBvbmNoYW5nZSBzaG91bGQgbm90IGJlIGNvbnZlcnRlZCB0byBvbmlucHV0LlxuLy8gdHlwZT1cImZpbGV8Y2hlY2tib3h8cmFkaW9cIiwgcGx1cyBcInJhbmdlXCIgaW4gSUUxMS5cbi8vIChJRTExIGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wsIHdoaWNoIHdlIHVzZSBoZXJlIHRvIHR1cm4gYHJhZGAgaW50byBgcmFgIHdoaWNoIG1hdGNoZXMgXCJyYW5nZVwiKVxuY29uc3Qgb25DaGFuZ2VJbnB1dFR5cGUgPSB0eXBlID0+XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBTeW1ib2woKSA9PSAnc3ltYm9sJ1xuXHRcdD8gL2ZpbHxjaGV8cmFkL2lcblx0XHQ6IC9maWx8Y2hlfHJhL2lcblx0KS50ZXN0KHR5cGUpO1xuXG4vLyBTb21lIGxpYnJhcmllcyBsaWtlIGByZWFjdC12aXJ0dWFsaXplZGAgZXhwbGljaXRseSBjaGVjayBmb3IgdGhpcy5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vLyBgVU5TQUZFXypgIGxpZmVjeWNsZSBob29rc1xuLy8gUHJlYWN0IG9ubHkgZXZlciBpbnZva2VzIHRoZSB1bnByZWZpeGVkIG1ldGhvZHMuXG4vLyBIZXJlIHdlIHByb3ZpZGUgYSBiYXNlIFwiZmFsbGJhY2tcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGNhbGxzIGFueSBkZWZpbmVkIFVOU0FGRV8gcHJlZml4ZWQgbWV0aG9kLlxuLy8gLSBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGl0cyBvd24gYGNvbXBvbmVudERpZE1vdW50KClgIChpbmNsdWRpbmcgdmlhIGRlZmluZVByb3BlcnR5KSwgdXNlIHRoYXQuXG4vLyAtIElmIGEgY29tcG9uZW50IGRlZmluZXMgYFVOU0FGRV9jb21wb25lbnREaWRNb3VudCgpYCwgYGNvbXBvbmVudERpZE1vdW50YCBpcyB0aGUgYWxpYXMgZ2V0dGVyL3NldHRlci5cbi8vIC0gSWYgYW55dGhpbmcgYXNzaWducyB0byBhbiBgVU5TQUZFXypgIHByb3BlcnR5LCB0aGUgYXNzaWdubWVudCBpcyBmb3J3YXJkZWQgdG8gdGhlIHVucHJlZml4ZWQgcHJvcGVydHkuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTk0MVxuW1xuXHQnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0J2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQnY29tcG9uZW50V2lsbFVwZGF0ZSdcbl0uZm9yRWFjaChrZXkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwga2V5LCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzWydVTlNBRkVfJyArIGtleV07XG5cdFx0fSxcblx0XHRzZXQodikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogdlxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vKipcbiAqIFByb3h5IHJlbmRlcigpIHNpbmNlIFJlYWN0IHJldHVybnMgYSBDb21wb25lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVk5vZGUgdHJlZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50IERPTSBub2RlIHRvIHJlbmRlciB2bm9kZSB0cmVlIGludG9cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHJlbmRlcmluZ1xuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudCB8IG51bGx9IFRoZSByb290IGNvbXBvbmVudCByZWZlcmVuY2Ugb3IgbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdC8vIFJlYWN0IGRlc3Ryb3lzIGFueSBleGlzdGluZyBET00gbm9kZXMsIHNlZSAjMTcyN1xuXHQvLyAuLi5idXQgb25seSBvbiB0aGUgZmlyc3QgcmVuZGVyLCBzZWUgIzE4Mjhcblx0aWYgKHBhcmVudC5fY2hpbGRyZW4gPT0gbnVsbCkge1xuXHRcdHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXHR9XG5cblx0cHJlYWN0UmVuZGVyKHZub2RlLCBwYXJlbnQpO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuIHZub2RlID8gdm5vZGUuX2NvbXBvbmVudCA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdHByZWFjdEh5ZHJhdGUodm5vZGUsIHBhcmVudCk7XG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcblxuXHRyZXR1cm4gdm5vZGUgPyB2bm9kZS5fY29tcG9uZW50IDogbnVsbDtcbn1cblxubGV0IG9sZEV2ZW50SG9vayA9IG9wdGlvbnMuZXZlbnQ7XG5vcHRpb25zLmV2ZW50ID0gZSA9PiB7XG5cdGlmIChvbGRFdmVudEhvb2spIGUgPSBvbGRFdmVudEhvb2soZSk7XG5cdGUucGVyc2lzdCA9IGVtcHR5O1xuXHRlLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gaXNQcm9wYWdhdGlvblN0b3BwZWQ7XG5cdGUuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXHRyZXR1cm4gKGUubmF0aXZlRXZlbnQgPSBlKTtcbn07XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuZnVuY3Rpb24gaXNQcm9wYWdhdGlvblN0b3BwZWQoKSB7XG5cdHJldHVybiB0aGlzLmNhbmNlbEJ1YmJsZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0UHJldmVudGVkKCkge1xuXHRyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkO1xufVxuXG5sZXQgY2xhc3NOYW1lRGVzY3JpcHRvciA9IHtcblx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRnZXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3M7XG5cdH1cbn07XG5cbmxldCBvbGRWTm9kZUhvb2sgPSBvcHRpb25zLnZub2RlO1xub3B0aW9ucy52bm9kZSA9IHZub2RlID0+IHtcblx0bGV0IHR5cGUgPSB2bm9kZS50eXBlO1xuXHRsZXQgcHJvcHMgPSB2bm9kZS5wcm9wcztcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzO1xuXG5cdC8vIG9ubHkgbm9ybWFsaXplIHByb3BzIG9uIEVsZW1lbnQgbm9kZXNcblx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuXHRcdGNvbnN0IG5vbkN1c3RvbUVsZW1lbnQgPSB0eXBlLmluZGV4T2YoJy0nKSA9PT0gLTE7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cblx0XHRmb3IgKGxldCBpIGluIHByb3BzKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBwcm9wc1tpXTtcblxuXHRcdFx0aWYgKElTX0RPTSAmJiBpID09PSAnY2hpbGRyZW4nICYmIHR5cGUgPT09ICdub3NjcmlwdCcpIHtcblx0XHRcdFx0Ly8gRW11bGF0ZSBSZWFjdCdzIGJlaGF2aW9yIG9mIG5vdCByZW5kZXJpbmcgdGhlIGNvbnRlbnRzIG9mIG5vc2NyaXB0IHRhZ3Mgb24gdGhlIGNsaWVudC5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgJiYgdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBTa2lwIGFwcGx5aW5nIHZhbHVlIGlmIGl0IGlzIG51bGwvdW5kZWZpbmVkIGFuZCB3ZSBhbHJlYWR5IHNldFxuXHRcdFx0XHQvLyBhIGRlZmF1bHQgdmFsdWVcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpID09PSAnZGVmYXVsdFZhbHVlJyAmJlxuXHRcdFx0XHQndmFsdWUnIGluIHByb3BzICYmXG5cdFx0XHRcdHByb3BzLnZhbHVlID09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBgZGVmYXVsdFZhbHVlYCBpcyB0cmVhdGVkIGFzIGEgZmFsbGJhY2sgYHZhbHVlYCB3aGVuIGEgdmFsdWUgcHJvcCBpcyBwcmVzZW50IGJ1dCBudWxsL3VuZGVmaW5lZC5cblx0XHRcdFx0Ly8gYGRlZmF1bHRWYWx1ZWAgZm9yIEVsZW1lbnRzIHdpdGggbm8gdmFsdWUgcHJvcCBpcyB0aGUgc2FtZSBhcyB0aGUgRE9NIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS5cblx0XHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICdkb3dubG9hZCcgJiYgdmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gQ2FsbGluZyBgc2V0QXR0cmlidXRlYCB3aXRoIGEgdHJ1dGh5IHZhbHVlIHdpbGwgbGVhZCB0byBpdCBiZWluZ1xuXHRcdFx0XHQvLyBwYXNzZWQgYXMgYSBzdHJpbmdpZmllZCB2YWx1ZSwgZS5nLiBgZG93bmxvYWQ9XCJ0cnVlXCJgLiBSZWFjdFxuXHRcdFx0XHQvLyBjb252ZXJ0cyBpdCB0byBhbiBlbXB0eSBzdHJpbmcgaW5zdGVhZCwgb3RoZXJ3aXNlIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBmaWxlIG5hbWUgYW5kIHRoZSBmaWxlIHdpbGwgYmUgY2FsbGVkXG5cdFx0XHRcdC8vIFwidHJ1ZVwiIHVwb24gZG93bmxvYWRpbmcgaXQuXG5cdFx0XHRcdHZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKC9vbmRvdWJsZWNsaWNrL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZGJsY2xpY2snO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkgKyB0eXBlKSAmJlxuXHRcdFx0XHQhb25DaGFuZ2VJbnB1dFR5cGUocHJvcHMudHlwZSlcblx0XHRcdCkge1xuXHRcdFx0XHRpID0gJ29uaW5wdXQnO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uZm9jdXMkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZm9jdXNpbic7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb25ibHVyJC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmZvY3Vzb3V0Jztcblx0XHRcdH0gZWxzZSBpZiAoL15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vbkN1c3RvbUVsZW1lbnQgJiYgQ0FNRUxfUFJPUFMudGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS5yZXBsYWNlKC9bQS1aMC05XS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBzdXBwb3J0IGZvciBvbklucHV0IGFuZCBvbkNoYW5nZSwgc2VlICMzNTYxXG5cdFx0XHQvLyBpZiB3ZSBoYXZlIGFuIG9uaW5wdXQgcHJvcCBhbHJlYWR5IGNoYW5nZSBpdCB0byBvbmlucHV0Q2FwdHVyZVxuXHRcdFx0aWYgKC9eb25pbnB1dCQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0pIHtcblx0XHRcdFx0XHRpID0gJ29uaW5wdXRDYXB0dXJlJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgc3VwcG9ydCBmb3IgYXJyYXkgc2VsZWN0IHZhbHVlczogPHNlbGVjdCBtdWx0aXBsZSB2YWx1ZT17W119IC8+XG5cdFx0aWYgKFxuXHRcdFx0dHlwZSA9PSAnc2VsZWN0JyAmJlxuXHRcdFx0bm9ybWFsaXplZFByb3BzLm11bHRpcGxlICYmXG5cdFx0XHRBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSlcblx0XHQpIHtcblx0XHRcdC8vIGZvckVhY2goKSBhbHdheXMgcmV0dXJucyB1bmRlZmluZWQsIHdoaWNoIHdlIGFidXNlIGhlcmUgdG8gdW5zZXQgdGhlIHZhbHVlIHByb3AuXG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpICE9IC0xO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkaW5nIHN1cHBvcnQgZm9yIGRlZmF1bHRWYWx1ZSBpbiBzZWxlY3QgdGFnXG5cdFx0aWYgKHR5cGUgPT0gJ3NlbGVjdCcgJiYgbm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BzLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPSAtMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlID09IGNoaWxkLnByb3BzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR2bm9kZS5wcm9wcyA9IG5vcm1hbGl6ZWRQcm9wcztcblxuXHRcdGlmIChwcm9wcy5jbGFzcyAhPSBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRcdGNsYXNzTmFtZURlc2NyaXB0b3IuZW51bWVyYWJsZSA9ICdjbGFzc05hbWUnIGluIHByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSBub3JtYWxpemVkUHJvcHMuY2xhc3MgPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsaXplZFByb3BzLCAnY2xhc3NOYW1lJywgY2xhc3NOYW1lRGVzY3JpcHRvcik7XG5cdFx0fVxuXHR9XG5cblx0dm5vZGUuJCR0eXBlb2YgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cblx0aWYgKG9sZFZOb2RlSG9vaykgb2xkVk5vZGVIb29rKHZub2RlKTtcbn07XG5cbi8vIE9ubHkgbmVlZGVkIGZvciByZWFjdC1yZWxheVxubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5jb25zdCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5vcHRpb25zLl9yZW5kZXIgPSBmdW5jdGlvbih2bm9kZSkge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSB7XG5cdFx0b2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblx0fVxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcbn07XG5cbi8vIFRoaXMgaXMgYSB2ZXJ5IHZlcnkgcHJpdmF0ZSBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgUmVhY3QgaXRcbi8vIGlzIHVzZWQgdG8gc29ydC1vZiBkbyBydW50aW1lIGRlcGVuZGVuY3kgaW5qZWN0aW9uLiBTbyBmYXJcbi8vIG9ubHkgYHJlYWN0LXJlbGF5YCBtYWtlcyB1c2Ugb2YgaXQuIEl0IHVzZXMgaXQgdG8gcmVhZCB0aGVcbi8vIGNvbnRleHQgdmFsdWUuXG5leHBvcnQgY29uc3QgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSB7XG5cdFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IHtcblx0XHRjdXJyZW50OiB7XG5cdFx0XHRyZWFkQ29udGV4dChjb250ZXh0KSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50Q29tcG9uZW50Ll9nbG9iYWxDb250ZXh0W2NvbnRleHQuX2lkXS5wcm9wcy52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCJpbXBvcnQgbm9vcCBmcm9tIFwibG9kYXNoLWVzL25vb3BcIjtcbmltcG9ydCB7IENvbXBvbmVudENoaWxkcmVuLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuXG50eXBlIFJhZkNhbGxiYWNrVHlwZSA9IChtc1NpbmNlTGFzdDogbnVtYmVyLCB0YWc/OiBhbnkpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBDb250ZXh0VHlwZSB7XG4gICAgYWRkQ2FsbGJhY2s6IChjYWxsYmFjazogUmFmQ2FsbGJhY2tUeXBlLCB0YWc/OiBhbnkpID0+IHZvaWQ7XG4gICAgcmVtb3ZlQ2FsbGJhY2s6IChjYWxsYmFjazogUmFmQ2FsbGJhY2tUeXBlKSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PG51bGwgfCBDb250ZXh0VHlwZT4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuIH0pIHtcblxuICAgIGNvbnN0IGFkZENhbGxiYWNrID0gdXNlQ2FsbGJhY2s8Q29udGV4dFR5cGVbXCJhZGRDYWxsYmFja1wiXT4oKGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5zZXQoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKTsgfSwgW10pO1xuICAgIGNvbnN0IHJlbW92ZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s8Q29udGV4dFR5cGVbXCJyZW1vdmVDYWxsYmFja1wiXT4oKGNhbGxiYWNrKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LmRlbGV0ZShjYWxsYmFjayk7IH0sIFtdKTtcblxuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmPENvbnRleHRUeXBlPihudWxsISk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmPE1hcDxSYWZDYWxsYmFja1R5cGUsIGFueT4+KG51bGwhKTtcbiAgICBpZiAoYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgYWxsQ2FsbGJhY2tzLmN1cnJlbnQgPSBuZXcgTWFwKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG5cbiAgICAgICAgZnVuY3Rpb24gcmFmV2l0aEJhdGNoZWRDYWxsYmFja3MobXNTaW5jZUxhc3Q6IG51bWJlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dEluZm8uY3VycmVudH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyPilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VBbmltYXRpb25GcmFtZVBhcmFtZXRlcnMge1xuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHdpdGggZWZmZWN0aXZlbHkgdGhlIHNhbWUgcnVsZXMgYXMgYHJlcXVlc3RBbmltYXRpb25GcmFtZWBcbiAgICAgKiBcbiAgICAgKiBEb2Vzbid0IG5lZWQgdG8gYmUgc3RhYmxlLlxuICAgICAqL1xuICAgIGNhbGxiYWNrOiBudWxsIHwgKChtc1NpbmNlTGFzdDogbnVtYmVyKSA9PiB2b2lkKTtcbn1cblxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKiBcbiAqIFBhc3NpbmcgYG51bGxgIGlzIGZpbmUgYW5kIHNpbXBseSBzdG9wcyB0aGUgZWZmZWN0IHVudGlsIHlvdSByZXN0YXJ0IGl0IGJ5IHByb3ZpZGluZyBhIG5vbi1udWxsIGNhbGxiYWNrLlxuICogXG4gKiAqKlRoaXMgaG9vayBkb2VzIG5vdCByZXR1cm4gYW55dGhpbmcgYXQgYWxsLCBpbmNsdWRpbmcgbm8gcHJvcC1tb2RpZnlpbmcgaG9va3MqKlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQW5pbWF0aW9uRnJhbWUoeyBjYWxsYmFjayB9OiBVc2VBbmltYXRpb25GcmFtZVBhcmFtZXRlcnMpOiB2b2lkIHtcbiAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgZ2l2ZW4gY2FsbGJhY2sgdGhhdCdzIHN0YWJsZVxuICAgIGNvbnN0IHN0YWJsZUNhbGxiYWNrID0gdXNlU3RhYmxlQ2FsbGJhY2soY2FsbGJhY2sgPz8gbm9vcCk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG5cbiAgICBjb25zdCBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuYWRkQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LnJlbW92ZUNhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSB3cmFwcGVyIGFyb3VuZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGFsc28gY2FsbHMgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYWdhaW4uXG4gICAgICAgICAgICAgICAgY29uc3QgcmFmQ2FsbGJhY2sgPSAobXM6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgaCwgUmVuZGVyYWJsZVByb3BzIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXhjbHVzaXZlQ29udGV4dFR5cGUsIFN3YXBwYWJsZUNvbnRleHRUeXBlLCBUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uUGhhc2UgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFN3YXBwYWJsZUNvbnRleHRUeXBlPih7IGdldEFuaW1hdGVPbk1vdW50OiAoKSA9PiBmYWxzZSB9KTtcclxuZXhwb3J0IGNvbnN0IEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxFeGNsdXNpdmVDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xyXG5cclxuXHJcbi8qXHJcbmNvbnN0IENzc0NsYXNzZXMgPSB7XHJcbiAgICBiYXNlOiBcInB0bFwiLFxyXG4gICAgZW50ZXI6IFwiblwiLFxyXG4gICAgZXhpdDogXCJ4XCIsXHJcbiAgICBpbml0OiBcImlcIixcclxuICAgIHRyYW5zaXRpb246IFwidFwiLFxyXG4gICAgZmluYWxpemU6IFwiZlwiXHJcbn0qL1xyXG5cclxuaW50ZXJmYWNlIENzc0NsYXNzZXNQcm92aWRlclByb3BzIHtcclxuICAgIGJhc2U6IHN0cmluZztcclxuICAgIGVudGVyOiBzdHJpbmc7XHJcbiAgICBleGl0OiBzdHJpbmc7XHJcbiAgICBtZWFzdXJlOiBzdHJpbmc7XHJcbiAgICBpbml0OiBzdHJpbmc7XHJcbiAgICB0cmFuc2l0aW9uOiBzdHJpbmc7XHJcbiAgICBmaW5hbGl6ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3NzQ2xhc3NDb250ZXh0VHlwZSB7XHJcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IHN0cmluZztcclxuICAgIEdldEVudGVyQ2xhc3M6ICgpID0+IHN0cmluZztcclxuICAgIEdldEV4aXRDbGFzczogKCkgPT4gc3RyaW5nO1xyXG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBzdHJpbmc7XHJcbiAgICBHZXRJbml0Q2xhc3M6ICgpID0+IHN0cmluZztcclxuICAgIEdldFRyYW5zaXRpb25DbGFzczogKCkgPT4gc3RyaW5nO1xyXG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDc3NDbGFzc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENzc0NsYXNzQ29udGV4dFR5cGU+KHtcclxuICAgIEdldEJhc2VDbGFzczogKCkgPT4gXCJwdGxcIixcclxuICAgIEdldEVudGVyQ2xhc3M6ICgpID0+IFwiblwiLFxyXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBcInhcIixcclxuICAgIEdldE1lYXN1cmVDbGFzczogKCkgPT4gXCJtXCIsXHJcbiAgICBHZXRJbml0Q2xhc3M6ICgpID0+IFwiaVwiLFxyXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBcInRcIixcclxuICAgIEdldEZpbmFsaXplQ2xhc3M6ICgpID0+IFwiZlwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENzc0NsYXNzZXNQcm92aWRlcih7IGJhc2UsIGVudGVyLCBleGl0LCBtZWFzdXJlLCBpbml0LCB0cmFuc2l0aW9uLCBmaW5hbGl6ZSwgY2hpbGRyZW4sIC4uLnJlc3QgfTogUmVuZGVyYWJsZVByb3BzPFBhcnRpYWw8Q3NzQ2xhc3Nlc1Byb3ZpZGVyUHJvcHM+Pikge1xyXG4gICAgY29uc3QgY29udGV4dE9iamVjdCA9IHVzZUNzc0NsYXNzQ29udGV4dFZhbHVlKHsgYmFzZSwgZW50ZXIsIGV4aXQsIG1lYXN1cmUsIGluaXQsIHRyYW5zaXRpb24sIGZpbmFsaXplIH0pO1xyXG4gICAgcmV0dXJuICg8Q3NzQ2xhc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0T2JqZWN0fSAgey4uLnJlc3R9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDc3NDbGFzc2VzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIEdldEJhc2VDbGFzcyxcclxuICAgICAgICBHZXRFbnRlckNsYXNzLFxyXG4gICAgICAgIEdldEV4aXRDbGFzcyxcclxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3MsXHJcbiAgICAgICAgR2V0SW5pdENsYXNzLFxyXG4gICAgICAgIEdldFRyYW5zaXRpb25DbGFzcyxcclxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzXHJcbiAgICB9ID0gdXNlQ29udGV4dChDc3NDbGFzc0NvbnRleHQpO1xyXG4gICAgY29uc3QgR2V0RGlyZWN0aW9uQ2xhc3MgPSB1c2VDYWxsYmFjaygoZGlyZWN0aW9uOiBUcmFuc2l0aW9uRGlyZWN0aW9uKTogc3RyaW5nID0+IHsgc3dpdGNoIChkaXJlY3Rpb24pIHsgY2FzZSBcImVudGVyXCI6IHJldHVybiBHZXRFbnRlckNsYXNzKCk7IGNhc2UgXCJleGl0XCI6IHJldHVybiBHZXRFeGl0Q2xhc3MoKTsgfSB9LCBbXSk7XHJcbiAgICBjb25zdCBHZXRQaGFzZUNsYXNzID0gdXNlQ2FsbGJhY2soKHBoYXNlOiBUcmFuc2l0aW9uUGhhc2UpOiBzdHJpbmcgPT4geyBzd2l0Y2ggKHBoYXNlKSB7IGNhc2UgXCJtZWFzdXJlXCI6IHJldHVybiBHZXRNZWFzdXJlQ2xhc3MoKTsgY2FzZSBcImluaXRcIjogcmV0dXJuIEdldEluaXRDbGFzcygpOyBjYXNlIFwidHJhbnNpdGlvblwiOiByZXR1cm4gR2V0VHJhbnNpdGlvbkNsYXNzKCk7IGNhc2UgXCJmaW5hbGl6ZVwiOiByZXR1cm4gR2V0RmluYWxpemVDbGFzcygpOyB9IH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxyXG4gICAgICAgIEdldEVudGVyQ2xhc3MsXHJcbiAgICAgICAgR2V0RXhpdENsYXNzLFxyXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcclxuICAgICAgICBHZXRJbml0Q2xhc3MsXHJcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxyXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3MsXHJcbiAgICAgICAgR2V0RGlyZWN0aW9uQ2xhc3MsXHJcbiAgICAgICAgR2V0UGhhc2VDbGFzc1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VDc3NDbGFzc0NvbnRleHRWYWx1ZShuZXdWYWx1ZXM6IFBhcnRpYWw8Q3NzQ2xhc3Nlc1Byb3ZpZGVyUHJvcHM+KTogQ3NzQ2xhc3NDb250ZXh0VHlwZSB7XHJcbiAgICBjb25zdCBvbGRWYWx1ZXMgPSB1c2VDb250ZXh0KENzc0NsYXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBiYXNlID0gKG5ld1ZhbHVlcz8uYmFzZSA/PyBvbGRWYWx1ZXMuR2V0QmFzZUNsYXNzKCkpO1xyXG4gICAgY29uc3QgZW50ZXIgPSAobmV3VmFsdWVzPy5lbnRlciA/PyBvbGRWYWx1ZXMuR2V0RW50ZXJDbGFzcygpKTtcclxuICAgIGNvbnN0IGV4aXQgPSAobmV3VmFsdWVzPy5leGl0ID8/IG9sZFZhbHVlcy5HZXRFeGl0Q2xhc3MoKSk7XHJcbiAgICBjb25zdCBtZWFzdXJlID0gKG5ld1ZhbHVlcz8ubWVhc3VyZSA/PyBvbGRWYWx1ZXMuR2V0TWVhc3VyZUNsYXNzKCkpO1xyXG4gICAgY29uc3QgaW5pdCA9IChuZXdWYWx1ZXM/LmluaXQgPz8gb2xkVmFsdWVzLkdldEluaXRDbGFzcygpKTtcclxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAobmV3VmFsdWVzPy50cmFuc2l0aW9uID8/IG9sZFZhbHVlcy5HZXRUcmFuc2l0aW9uQ2xhc3MoKSk7XHJcbiAgICBjb25zdCBmaW5hbGl6ZSA9IChuZXdWYWx1ZXM/LmZpbmFsaXplID8/IG9sZFZhbHVlcy5HZXRGaW5hbGl6ZUNsYXNzKCkpO1xyXG5cclxuICAgIHJldHVybiB1c2VNZW1vPENzc0NsYXNzQ29udGV4dFR5cGU+KCgpID0+ICh7XHJcbiAgICAgICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBiYXNlISxcclxuICAgICAgICBHZXRFbnRlckNsYXNzOiAoKSA9PiBlbnRlciEsXHJcbiAgICAgICAgR2V0RXhpdENsYXNzOiAoKSA9PiBleGl0ISxcclxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IG1lYXN1cmUhLFxyXG4gICAgICAgIEdldEluaXRDbGFzczogKCkgPT4gaW5pdCEsXHJcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiB0cmFuc2l0aW9uISxcclxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBmaW5hbGl6ZSEsXHJcbiAgICB9KSwgW2Jhc2UsIGVudGVyLCBleGl0LCBpbml0LCB0cmFuc2l0aW9uLCBmaW5hbGl6ZV0pXHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDc3NDbGFzcygpOiBzdHJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENzc0NsYXNzKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3NzQ2xhc3MoZGlyZWN0aW9uOiBUcmFuc2l0aW9uRGlyZWN0aW9uLCBwaGFzZTogVHJhbnNpdGlvblBoYXNlKTogc3RyaW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDc3NDbGFzcyhkaXJlY3Rpb24/OiBUcmFuc2l0aW9uRGlyZWN0aW9uLCBwaGFzZT86IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBwaGFzZVBhcnQgPSBgJHtwaGFzZSA9PSBudWxsID8gXCJcIiA6IGAtJHtDc3NDbGFzc2VzW3BoYXNlXX1gfWA7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25QYXJ0ID0gYCR7ZGlyZWN0aW9uID09IG51bGwgPyBcIlwiIDogYC0ke0Nzc0NsYXNzZXNbZGlyZWN0aW9uXX0ke3BoYXNlUGFydH1gfWA7XHJcbiAgICByZXR1cm4gYCR7Q3NzQ2xhc3Nlcy5iYXNlfSR7ZGlyZWN0aW9uUGFydH1gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDc3NDbGFzcyh3aGljaDoga2V5b2YgdHlwZW9mIENzc0NsYXNzZXMsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIENzc0NsYXNzZXNbd2hpY2hdID0gdmFsdWU7XHJcbn1cclxuKi9cclxuIiwiXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnQsIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcbnR5cGUgRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+ID0gT21pdDxQLCBcInJlZlwiPiAmIHsgcmVmPzogUmVmPEU+IH1cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50PFAsIEU+ID0gKHA6IEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPikgPT4gVk5vZGU8Rm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+PlxyXG5cclxudHlwZSBFbGVtZW50RnJvbVByb3BzPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+PiA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBFdmVudFRhcmdldDtcclxudHlwZSBQcm9wc0Zyb21Db21wb25lbnQ8QyBleHRlbmRzIEZ1bmN0aW9uYWxDb21wb25lbnQ8YW55Pj4gPSBDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxpbmZlciBQPiA/IFAgOiB1bmtub3duO1xyXG5cclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICogXHJcbiAqIFRPRE86IFN0aWxsIG5lZWRlZD9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZjxDIGV4dGVuZHMgPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ocDogYW55LCByZWY6IFJlZjxFPikgPT4gKFZOb2RlPGFueT4gfCBudWxsKT4oQ29tcG9uZW50OiBDKSB7XHJcbiAgICB0eXBlIFAgPSBQcm9wc0Zyb21Db21wb25lbnQ8Qz47XHJcblxyXG5cclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQgYXMgQztcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWZ1bCBpbiBwYXJ0aWN1bGFyIGZvciBTbGlkZXMgd2l0aCBhIFRhYiBQYW5lbCAtLVxyXG4gKiBpZiB3ZSBkbyBNYXRoLnNpZ24oY3VycmVudEluZGV4IC0gc2xpZGVJbmRleCksIGl0XHJcbiAqIHRyYW5zaXRpb25zIG5pY2VseSBpbiB0aGUgZXhwZWN0ZWQgZGlyZWN0aW9uLFxyXG4gKiBidXQgd2UgbmVlZCB0byBcInJlbWVtYmVyXCIgd2hpY2ggZGlyZWN0aW9uIHRvIHVzZVxyXG4gKiB3aGVuIGl0J3MgdGhlIGN1cnJlbnQgcGFuZWwgKGFuZCB0aGUgZGlmZmVyZW5jZSBpcyAwKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhc3ROb25OdWxsVmFsdWU8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGwge1xyXG4gICAgY29uc3QgbGFzdE5vbk51bGxWYWx1ZSA9IHVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgIH0sIFt2YWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSA/PyBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIGgsIFJlbmRlcmFibGVQcm9wcyB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ2hpbGRyZW5GbGFnLCB1c2VNYW5hZ2VkQ2hpbGQsIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnMsIHVzZU1hbmFnZWRDaGlsZHJlbiwgdXNlUGFzc2l2ZVN0YXRlLCB1c2VTdGFibGVPYmplY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgRXhjbHVzaXZlQ29udGV4dFR5cGUsIEV4Y2x1c2l2ZUluZm8sIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuXHJcblxyXG5cclxubGV0IGdsb2JhbENvdW50ID0gLTE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUmVuZGVyYWJsZVByb3BzPHt9Pikge1xyXG5cclxuICAgIGNvbnN0IFtnZXROZXh0SW5kZXhJbkxpbmUsIHNldE5leHRJbmRleEluTGluZV0gPSB1c2VQYXNzaXZlU3RhdGU8c3RyaW5nIHwgbnVsbCwgbmV2ZXI+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHsgY29udGV4dCwgbWFuYWdlZENoaWxkcmVuUmV0dXJuLCBtYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IHsgZ2V0Q2hpbGRyZW4gfSB9ID0gdXNlTWFuYWdlZENoaWxkcmVuPEV4Y2x1c2l2ZUluZm8+KHsgbWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczoge30gfSk7XHJcbiAgICBjb25zdCB7IGNoYW5nZUluZGV4LCBnZXRDdXJyZW50SW5kZXggfSA9IHVzZUNoaWxkcmVuRmxhZzxFeGNsdXNpdmVJbmZvLCBuZXZlcj4oe1xyXG4gICAgICAgIGdldENoaWxkcmVuLFxyXG4gICAgICAgIGNsb3Nlc3RGaXQ6IGZhbHNlLFxyXG4gICAgICAgIGluaXRpYWxJbmRleDogbnVsbCxcclxuICAgICAgICBvbkluZGV4Q2hhbmdlOiBudWxsLFxyXG4gICAgICAgIHNldEF0OiB1c2VDYWxsYmFjaygobSwgdikgPT4geyBtLnNldEV4Y2x1c2l2ZWx5T3Blbih2KTsgfSwgW10pLFxyXG4gICAgICAgIGdldEF0OiB1c2VDYWxsYmFjaygobSkgPT4gbS5nZXRFeGNsdXNpdmVseU9wZW4oKSwgW10pLFxyXG4gICAgICAgIGlzVmFsaWQ6IHVzZUNhbGxiYWNrKChtKSA9PiB7IHJldHVybiB0cnVlIH0sIFtdKSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gdXNlQ2FsbGJhY2soKGluZGV4OiBzdHJpbmcsIHZpc2libGU6IFwic2hvd1wiIHwgXCJoaWRkZW5cIikgPT4ge1xyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbkxpbmUgPSBnZXROZXh0SW5kZXhJbkxpbmUoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5MaW5lID0gZ2V0Q3VycmVudEluZGV4KCk7XHJcblxyXG4gICAgICAgIGlmICh2aXNpYmxlID09IFwic2hvd1wiICYmIGluZGV4ICE9IGN1cnJlbnRJbkxpbmUpIHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFdoZW4gYSBjaGlsZCB0cmFuc2l0aW9uIHNob3dzIGl0c2VsZiBpbml0aWFsbHlcclxuICAgICAgICAgICAgICogKGkuZS4gcmVxdWVzdHMgaXRzZWxmIHRvIGJlIHRoZSBleGNsdXNpdmUgdHJhbnNpdGlvbilcclxuICAgICAgICAgICAgICogd2UgZWl0aGVyIGxldCBpdCBvcGVuIGltbWVkaWF0ZWx5IGlmIHRoZXJlJ3Mgbm8gb25lIGZpbmlzaGluZyB0aGVpciBleGl0LFxyXG4gICAgICAgICAgICAgKiBvciB3YWl0IHVudGlsIHRoYXQgYWZvcmVtZW50aW9uZWQgZXhpdCBoYXMgZmluaXNoZWQuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluTGluZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnZXRDaGlsZHJlbigpLmdldEF0KGN1cnJlbnRJbkxpbmUpPy5mb3JjZUNsb3NlPy4oKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRJbmRleEluTGluZShpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmlzaWJsZSA9PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBXaGVuIGEgY2hpbGQgdHJhbnNpdGlvbiBoYXMgZmluaXNoZWQgaXRzIGV4aXQgdHJhbnNpdGlvbixcclxuICAgICAgICAgICAgICogbWFrZSBzdXJlIHRoYXQgaWYgc29tZW9uZSByZXF1ZXN0ZWQgdG8gYmUgc2hvd24gaW4gdGhlIG1lYW50aW1lXHJcbiAgICAgICAgICAgICAqIHRoYXQgd2UgZG8gc28uXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZiAobmV4dEluTGluZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VJbmRleChuZXh0SW5MaW5lKTtcclxuICAgICAgICAgICAgICAgIHNldE5leHRJbmRleEluTGluZShudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGNvbnRleHQyOiBFeGNsdXNpdmVDb250ZXh0VHlwZSA9IHVzZVN0YWJsZU9iamVjdCh7XHJcbiAgICAgICAgLi4uY29udGV4dCxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dDogdXNlU3RhYmxlT2JqZWN0KHtcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dDJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9FeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzIGV4dGVuZHMgT21pdDxVc2VNYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzPEV4Y2x1c2l2ZUluZm8+LCBcIm1hbmFnZWRDaGlsZFBhcmFtZXRlcnNcIj4ge1xyXG4gICAgY29udGV4dDogRXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsO1xyXG4gICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IFBpY2s8VHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPGFueT4sIFwic2hvd1wiPjtcclxuICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGZvcmNlQ2xvc2U6ICgpID0+IHZvaWQ7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24oeyBjb250ZXh0LCB0cmFuc2l0aW9uUGFyYW1ldGVyczogeyBzaG93IH0sIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGZvcmNlQ2xvc2UgfSB9OiBVc2VFeGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycykge1xyXG5cclxuICAgIC8vY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSwgW10pO1xyXG4gICAgY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IHsgZ2xvYmFsQ291bnQgKz0gMTsgcmV0dXJuIChnbG9iYWxDb3VudCkudG9TdHJpbmcoKSB9LCBbXSk7XHJcbiAgICBjb25zdCBbZXhjbHVzaXZlbHlPcGVuLCBzZXRFeGNsdXNpdmVseU9wZW4sIGdldEV4Y2x1c2l2ZWx5T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPighIXNob3cpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZFJldHVybjogeyBnZXRDaGlsZHJlbiB9XHJcbiAgICB9ID0gdXNlTWFuYWdlZENoaWxkPEV4Y2x1c2l2ZUluZm8+KHsgY29udGV4dCwgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogeyBpbmRleCB9IH0sIHsgaW5kZXgsIGdldEV4Y2x1c2l2ZWx5T3Blbiwgc2V0RXhjbHVzaXZlbHlPcGVuLCBmb3JjZUNsb3NlIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhcmVudE9uVmlzQ2hhbmdlID0gY29udGV4dD8uZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQub25WaXNpYmlsaXR5Q2hhbmdlO1xyXG5cclxuICAgIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9IHVzZUNhbGxiYWNrPE5vbk51bGxhYmxlPFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxhbnk+W1wib25WaXNpYmlsaXR5Q2hhbmdlXCJdPj4oKHZpc2libGUpID0+IHtcclxuICAgICAgICAvL2lmICh2aXNpYmxlID09IGZhbHNlKVxyXG4gICAgICAgICAgICBwYXJlbnRPblZpc0NoYW5nZT8uKGluZGV4LCB2aXNpYmxlID09IGZhbHNlPyBcImhpZGRlblwiIDogXCJzaG93XCIpO1xyXG4gICAgfSwgW3BhcmVudE9uVmlzQ2hhbmdlLCBpbmRleF0pO1xyXG5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNob3cpXHJcbiAgICAgICAgICAgIHBhcmVudE9uVmlzQ2hhbmdlPy4oaW5kZXgsIFwic2hvd1wiKTtcclxuICAgIH0sIFtzaG93LCBwYXJlbnRPblZpc0NoYW5nZSwgaW5kZXhdKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25SZXR1cm46IHtcclxuICAgICAgICAgICAgaXNFeGNsdXNpdmU6IChjb250ZXh0ICE9IG51bGwpLFxyXG4gICAgICAgICAgICBleGNsdXNpdmVseU9wZW4sXHJcbiAgICAgICAgICAgIHNldEV4Y2x1c2l2ZWx5T3BlbixcclxuICAgICAgICAgICAgZ2V0RXhjbHVzaXZlbHlPcGVuLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnRDaGlsZHJlbiwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IEV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlciB9IGZyb20gXCIuL2V4Y2x1c2l2ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2FwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFBhcnRpYWw8Q3JlYXRlU3dhcHBhYmxlUHJvcHM+LCBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlczxFPiB7XHJcbiAgICBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCeSBkZWZhdWx0LCBlYWNoIGNoaWxkIHRyYW5zaXRpb25zIGluL291dCBhdCB0aGUgc2FtZSB0aW1lLCBpbiBzeW5jIHdpdGggZWFjaCBvdGhlci5cclxuICAgICAqIFxyXG4gICAgICogSWYgeW91IHdhbnQgdG8gZ3VhcmFudGVlIHRoYXQsIG5vIG1hdHRlciB3aGF0LCBvbmx5IG9uZSBpcyBldmVyIHZpc2libGUgYXQgYWxsLFxyXG4gICAgICogcGFzcyBgdHJ1ZWAgdG8gYGV4Y2x1c2l2ZWAuXHJcbiAgICAgKiBcclxuICAgICAqIFRoaXMgaXMgYWxzbyBhdmFpbGFibGUgYXMgYSBzZXBhcmF0ZSBjb21wb25lbnQgKGBFeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXJgKVxyXG4gICAgICogaWYgeW91IG5lZWQgdGhpcyBiZWhhdmlvciBpbiB1bnJlbGF0ZWQgY2lyY3Vtc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgZXhjbHVzaXZlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVTd2FwcGFibGVQcm9wcyB7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgdGhpcyBjb21wb25lbnQgaXMgaW5saW5lLWdyaWQgb3IgZ3JpZC4gXHJcbiAgICAgKiBJZiBub3QgcHJvdmlkZWQsIHRoZSBjaGlsZCBlbGVtZW50IGlzIGxvb2tlZCBhdC4gSWYgaXQncyBhIHNwYW4gb3Igb3RoZXIgaW5saW5lIGVsZW1lbnQsIGlubGluZSBpcyBhc3N1bWVkLiBcclxuICAgICAqIChBIHNpbXBseS1mb29sZWQgaGV1cmlzdGljLS1wcm92aWRlIHRoaXMgcHJvcCBpZiBuZWNlc3NhcnkpXHJcbiAgICAgKi9cclxuICAgIGlubGluZTogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyB0byBgdXNlVHJhbnNpdGlvbmAncyBgYW5pbWF0ZU9uTW91bnRgLiBJZiBudWxsLCB0aGUgZGVmYXVsdCB2YWx1ZSBwcm92aWRlZCB3aWxsIGJlIGBmYWxzZWAgaW5pdGlhbGx5LCB0aGVuIGB0cnVlYCBhZnRlciB0aGUgYFN3YXBwYWJsZWAgaXRzZWxmIGhhcyBtb3VudGVkLlxyXG4gICAgICovXHJcbiAgICBjaGlsZHJlbkFuaW1hdGVPbk1vdW50PzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHM8UCBleHRlbmRzIHt9Pih7IGlubGluZSB9OiBDcmVhdGVTd2FwcGFibGVQcm9wcywgb3RoZXJQcm9wczogUCkge1xyXG4gICAgdHlwZSBFID0gUCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGluZmVyIEU+ID8gRSA6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wczxFPih7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke0dldEJhc2VDbGFzcygpfS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtHZXRCYXNlQ2xhc3MoKX0tc3dhcC1jb250YWluZXItaW5saW5lYClcclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcblxyXG4vKipcclxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXHJcbiAqIFxyXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXHJcbiAqIFxyXG4gKiBJZiB5b3UgcGFzcyBhIHJlZ3VsYXIgZWxlbWVudCAobGlrZSBhIGRpdikgb3Igb3RoZXIgc2luZ2xlIGNvbXBvbmVudCwgdGhlbiB0aGVlIHByb3BzIGFuZCByZWYgd2lsbCBiZSBmb3J3YXJkZWQgb250byB0aGF0IGVsZW1lbnQuIE90aGVyd2lzZSwgYWxsIHRoZSBjaGlsZHJlbiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBkaXYgb3Igc3BhbiBkZXBlbmRpbmcgb24gdGhlIGBpbmxpbmVgIHByb3AuXHJcbiAqIEBwYXJhbSBwYXJhbTAgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBjaGlsZHJlbjogYywgaW5saW5lLCBjaGlsZHJlbkFuaW1hdGVPbk1vdW50LCBleGNsdXNpdmUsIC4uLnAgfTogU3dhcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gYyBhcyBWTm9kZTtcclxuICAgIGlmICghKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlKVxyXG4gICAgICAgIGNoaWxkcmVuID0gKCFpbmxpbmUgPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPilcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHM8RT4odHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoY2hpbGRyZW5BbmltYXRlT25Nb3VudCA/PyBmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4geyByZXR1cm4gYW5pbWF0ZU9uTW91bnQuY3VycmVudDsgfSB9KTtcclxuICAgIGxldCByZXQgPSBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbiBhcyB0eXBlb2YgdHJhbnNpdGlvblByb3BzKTtcclxuICAgIHJldCA9ICg8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PntyZXR9PC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPilcclxuICAgIGlmIChleGNsdXNpdmUpIHtcclxuICAgICAgICByZXQgPSAoPEV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlcj57cmV0fTwvRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyPilcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn0pKVxyXG5cclxuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXHJcbi8vIE5vdCBwZXJmZWN0LCBidXQgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUuIGBpbmxpbmVgIGlzIGZvciBwZXJmZWN0LlxyXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xyXG4gICAgXCJhXCIsXHJcbiAgICBcImFiYnJcIixcclxuICAgIFwiYWNyb255bVwiLFxyXG4gICAgXCJhdWRpb1wiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJkaVwiLFxyXG4gICAgXCJiZG9cIixcclxuICAgIFwiYmlnXCIsXHJcbiAgICBcImJyXCIsXHJcbiAgICBcImJ1dHRvblwiLFxyXG4gICAgXCJjYW52YXNcIixcclxuICAgIFwiY2l0ZVwiLFxyXG4gICAgXCJjb2RlXCIsXHJcbiAgICBcImRhdGFcIixcclxuICAgIFwiZGF0YWxpc3RcIixcclxuICAgIFwiZGVsXCIsXHJcbiAgICBcImRmblwiLFxyXG4gICAgXCJlbVwiLFxyXG4gICAgXCJlbWJlZFwiLFxyXG4gICAgXCJpXCIsXHJcbiAgICBcImlmcmFtZVwiLFxyXG4gICAgXCJpbWdcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwiaW5zXCIsXHJcbiAgICBcImtiZFwiLFxyXG4gICAgXCJsYWJlbFwiLFxyXG4gICAgXCJtYXBcIixcclxuICAgIFwibWFya1wiLFxyXG4gICAgXCJtZXRlclwiLFxyXG4gICAgXCJub3NjcmlwdFwiLFxyXG4gICAgXCJvYmplY3RcIixcclxuICAgIFwib3V0cHV0XCIsXHJcbiAgICBcInBpY3R1cmVcIixcclxuICAgIFwicHJvZ3Jlc3NcIixcclxuICAgIFwicVwiLFxyXG4gICAgXCJydWJ5XCIsXHJcbiAgICBcInNcIixcclxuICAgIFwic2FtcFwiLFxyXG4gICAgXCJzY3JpcHRcIixcclxuICAgIFwic2VsZWN0XCIsXHJcbiAgICBcInNsb3RcIixcclxuICAgIFwic21hbGxcIixcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzdHJvbmdcIixcclxuICAgIFwic3ViXCIsXHJcbiAgICBcInN1cFwiLFxyXG4gICAgXCJzdmdcIixcclxuICAgIFwidGVtcGxhdGVcIixcclxuICAgIFwidGV4dGFyZWFcIixcclxuICAgIFwidGltZVwiLFxyXG4gICAgXCJ1XCIsXHJcbiAgICBcInR0XCIsXHJcbiAgICBcInZhclwiLFxyXG4gICAgXCJ2aWRlb1wiLFxyXG4gICAgXCJ3YnJcIlxyXG5dKTtcclxuIiwiaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBoLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlTWVyZ2VkUHJvcHMsIHVzZVBhc3NpdmVTdGF0ZSwgdXNlUmVmRWxlbWVudCwgdXNlU3RhYmxlQ2FsbGJhY2ssIHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHJldHVybkZhbHNlLCBydW5JbW1lZGlhdGVseSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VFeGNsdXNpdmVUcmFuc2l0aW9uIH0gZnJvbSBcIi4vZXhjbHVzaXZlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dFR5cGUsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSwgVHJhbnNpdGlvblN0YXRlLCBVc2VUcmFuc2l0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCwgRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUaW1lb3V0RHVyYXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50PihlbGVtZW50OiBFIHwgbnVsbCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xyXG4gICAgICAgIGlmIChzdHIuZW5kc1dpdGgoXCJtc1wiKSlcclxuICAgICAgICAgICAgcmV0dXJuICtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAyKTtcclxuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcclxuICAgICAgICAgICAgcmV0dXJuICgrc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSkpICogMTAwMDtcclxuICAgICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0pKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VTdGF0ZShuZXh0U3RhdGU6IFRyYW5zaXRpb25TdGF0ZSkge1xyXG4gICAgcmV0dXJuIG5leHRTdGF0ZS5zcGxpdChcIi1cIikgYXMgW1RyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZV07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlIHByb3BzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYW5pbWF0ZSBhIHRyYW5zaXRpb24uXHJcbiAqIFxyXG4gKiBAcGFyYW0gcGFyYW0wIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUcmFuc2l0aW9uPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyB0cmFuc2l0aW9uUGFyYW1ldGVyczogeyBwcm9wc0luY29taW5nOiB7IGNoaWxkcmVuLCAuLi5wIH0sIHNob3csIGFuaW1hdGVPbk1vdW50LCBtZWFzdXJlLCBleGl0VmlzaWJpbGl0eSwgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIG9uVmlzaWJpbGl0eUNoYW5nZSB9IH06IFVzZVRyYW5zaXRpb25QYXJhbWV0ZXJzPEU+KTogVk5vZGU8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+IHwgbnVsbCB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCB7IGdldEFuaW1hdGVPbk1vdW50IH0gPSB1c2VDb250ZXh0KFN3YXBwYWJsZUNvbnRleHQpO1xyXG4gICAgZXhpdFZpc2liaWxpdHkgfHw9IFwiaGlkZGVuXCJcclxuICAgIGFuaW1hdGVPbk1vdW50ID8/PSBnZXRBbmltYXRlT25Nb3VudCgpO1xyXG4gICAgbWVhc3VyZSA/Pz0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VUcmFuc2l0aW9uXCIsIG9uVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICBjb25zdCBnZXRFeGl0VmlzaWJpbGl0eSA9IHVzZVN0YWJsZUdldHRlcihleGl0VmlzaWJpbGl0eSk7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcywgR2V0RW50ZXJDbGFzcywgR2V0RXhpdENsYXNzLCBHZXRNZWFzdXJlQ2xhc3MsIEdldEluaXRDbGFzcywgR2V0VHJhbnNpdGlvbkNsYXNzLCBHZXRGaW5hbGl6ZUNsYXNzLCBHZXREaXJlY3Rpb25DbGFzcywgR2V0UGhhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgY29uc3QgZ2V0TWVhc3VyZSA9IHVzZVN0YWJsZUdldHRlcihtZWFzdXJlKTtcclxuICAgIGNvbnN0IHsgZXhjbHVzaXZlVHJhbnNpdGlvblJldHVybjogeyBleGNsdXNpdmVseU9wZW4sIGlzRXhjbHVzaXZlLCBvblZpc2liaWxpdHlDaGFuZ2U6IGV4Y2x1c2l2ZVRyYW5zaXRpb25WaXNpYmlsaXR5Q2hhbmdlIH0gfSA9IHVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHNob3cgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBmb3JjZUNsb3NlOiB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7IGludGVybmFsT25TaG93Q2hhbmdlZChmYWxzZSwgZ2V0TWVhc3VyZSgpKTsgfSkgfSxcclxuICAgICAgICBjb250ZXh0OiB1c2VDb250ZXh0KEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0KVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGlzRXhjbHVzaXZlKSB7XHJcbiAgICAgICAgc2hvdyA9IChzaG93ICYmIGV4Y2x1c2l2ZWx5T3Blbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQ8RT4oe30pXHJcbiAgICBjb25zdCBjc3NQcm9wZXJ0aWVzID0gdXNlUmVmPGguSlNYLkNTU1Byb3BlcnRpZXM+KHt9KTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSB1c2VSZWYobmV3IFNldDxzdHJpbmc+KFtcclxuICAgICAgICAvLyBUaGlzIGlzIHJlbW92ZWQgZHVyaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgZmlyc3QgcmVuZGVyXHJcbiAgICAgICAgLy8gKGF0IGxlYXN0IG9uY2UgYHNob3dgIGlzIG5vbi1udWxsKVxyXG4gICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1wZW5kaW5nYCxcclxuICAgIF0pKTtcclxuICAgIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoISFzdGF0ZSk7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtkaXJlY3Rpb24sIHBoYXNlXSA9IHBhcnNlU3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGAke2RpcmVjdGlvbn0tZmluYWxpemVgKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHtcclxuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PSBnZXRFbGVtZW50KCkgJiYgZS5lbGFwc2VkVGltZSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGhhc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCdzIENTUyBjbGFzcyB0byBtYXRjaCB0aGUgZ2l2ZW4gZGlyZWN0aW9uIGFuZCBwaGFzZS5cclxuICAgICAqL1xyXG4gICAgY29uc3QgdXBkYXRlQ2xhc3NlcyA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFIHwgbnVsbCwgZGlyZWN0aW9uOiBUcmFuc2l0aW9uRGlyZWN0aW9uLCBwaGFzZT86IFRyYW5zaXRpb25QaGFzZSkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsQ2xhc3Nlc1RvUmVtb3ZlID0gW1xyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRJbml0Q2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0VHJhbnNpdGlvbkNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tJHtHZXRNZWFzdXJlQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tJHtHZXRJbml0Q2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tJHtHZXRUcmFuc2l0aW9uQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tJHtHZXRGaW5hbGl6ZUNsYXNzKCl9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJpbmVydFwifWAsXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ldi0ke1wicmVtb3ZlZFwifWAsXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ldi0ke1wiaGlkZGVuXCJ9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXNUb0FkZCA9IFtcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RGlyZWN0aW9uQ2xhc3MoZGlyZWN0aW9uKX1gLFxyXG4gICAgICAgICAgICBwaGFzZSA/IGAke0dldEJhc2VDbGFzcygpfS0ke0dldERpcmVjdGlvbkNsYXNzKGRpcmVjdGlvbil9LSR7R2V0UGhhc2VDbGFzcyhwaGFzZSl9YCA6IFwiXCIsXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ldi0ke2V4aXRWaXNpYmlsaXR5fWBcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4uYWxsQ2xhc3Nlc1RvUmVtb3ZlKTtcclxuICAgICAgICBhbGxDbGFzc2VzVG9SZW1vdmUubWFwKHYgPT4gY2xhc3NOYW1lcy5jdXJyZW50LmRlbGV0ZSh2KSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5hbGxDbGFzc2VzVG9BZGQpO1xyXG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGEgc2luZ2xlIFwibWVhc3VyZVwiIHZhcmlhYmxlIChvciByZW1vdmVzIGl0KVxyXG4gICAgICovXHJcbiAgICBjb25zdCB1cGRhdGVTaXplUHJvcGVydHkgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSwgdmFyTmFtZTogKGtleW9mIGguSlNYLkNTU1Byb3BlcnRpZXMpICYgc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHZhck5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHZhck5hbWUpO1xyXG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIFwibWVhc3VyZVwiIHZhcml1cGRhdGVDbGFzc2VzYWJsZXMgdG8gdGhlIGVsZW1lbnQgaWYgcmVxdWVzdGVkLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSB8IG51bGwsIG1lYXN1cmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XHJcbiAgICAgICAgICAgICAgICBzaXplID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtdG9wYCwgc2l6ZT8udG9wKTtcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtbGVmdGAsIHNpemU/LmxlZnQpO1xyXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS13aWR0aGAsIHNpemU/LndpZHRoKTtcclxuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtaGVpZ2h0YCwgc2l6ZT8uaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gV2UgdXNlIGJvdGggdXNlVGltZW91dCBhbmQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciB0aW1pbmcgY2VydGFpbiB0aGluZ3MgLS1cclxuICAgIC8vIHJhZiBpcyB1c2VkIGZvciBjaGFuZ2luZyBmcm9tIGluaXQgdG8gdHJhbnNpdGlvbiAod291bGQgdXNlIHF1ZXVlTWljcm90YXNrIGJ1dCBpdCBjYW4ndCBiZSBjYW5jZWxsZWQpXHJcbiAgICAvLyBzZXRUaW1lb3V0IGlzIHVzZWQgZm9yIGNoYW5naW5nIGZyb20gdHJhbnNpdGlvbiB0byBmaW5hbGl6ZSAoYXMgYSBiYWNrdXAgaW4gY2FzZSB0cmFuc2l0aW9uZW5kIGRvZXNuJ3QgZmlyZSlcclxuICAgIC8vXHJcbiAgICAvLyBJbiBvcmRlciB0byBhdm9pZCBzdGFsZSBjYWxsYmFja3MgcnVubmluZyAoaS5lLiB3aGVuIHdlIHJhcGlkbHkgc3dpdGNoIGJldHdlZW4gdmlzaWJsZSBhbmQgbm90KVxyXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgd2UgYWNjdXJhdGVseSBjYW5jZWwgYW55dGhpbmcgdGhhdCBjYW4gY2hhbmdlIG91ciBzdGF0ZSBvbiBhIGRlbGF5LlxyXG4gICAgLy9cclxuICAgIC8vIEFsc28gb2Ygbm90ZSwgd2Ugc3RvcmUgXCIoZikgPT4gd2luZG93LmNsZWFyVGltZW91dChmKVwiIGluc3RlYWQgb2YganVzdCBcIndpbmRvdy5jbGVhclRpbWVvdXRcIiBiZWNhdXNlXHJcbiAgICAvLyBvZiB0aGUgaW1wbGljaXQgd2luZG93IG9iamVjdCAtLSBwcm9ibGVtcyB3aXRoIGEgbWlzc2luZyBgdGhpc2Agb2JqZWN0IGFuZCBhbGwgdGhhdCBub25zZW5zZS5cclxuICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSB1c2VSZWY8bnVtYmVyPigtMSk7XHJcbiAgICBjb25zdCB0aW1lb3V0Q2xlYXJGdW5jdGlvbiA9IHVzZVJlZjwodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lKSB8ICh0eXBlb2YgY2xlYXJUaW1lb3V0KSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW55IHRpbWUgdGhlIHN0YXRlIGNoYW5nZXMsIHRoZXJlJ3Mgc29tZSBsb2dpYyB3ZSBuZWVkIHRvIHJ1bjpcclxuICAgICAqIFxyXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxyXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhIGB0cmFuc2l0aW9uYCBwaGFzZSwgdXBkYXRlIHRoZSBjbGFzc2VzLCB0aGVuIHdhaXQgdW50aWwgdGhlIHRyYW5zaXRpb24gY29tcGxldGVzLCB0aGVuIGNoYW5nZSB0byB0aGUgYGZpbmFsaXplYCBwaGFzZS5cclxuICAgICAqIFxyXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBvblN0YXRlQ2hhbmdlID0gdXNlQ2FsbGJhY2s8T25QYXNzaXZlU3RhdGVDaGFuZ2U8VHJhbnNpdGlvblN0YXRlIHwgbnVsbCwgdW5kZWZpbmVkPj4oKG5leHRTdGF0ZSwgcHJldlN0YXRlLCByZWFzb24pID0+IHtcclxuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIG5vIHN0YWxlIGNoYW5nZSBjb2RlIGV2ZXIgcnVuc1xyXG4gICAgICAgIGlmICh0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPj0gMCAmJiB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50KVxyXG4gICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50KHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBpbmVydCBwcm9wcy9wcm9wZXJ0eVxyXG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcclxuICAgICAgICBpZiAoZXhpdFZpc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5lcnQgPSAoZXhpdFZpc2liaWxpdHkgPT0gXCJpbmVydFwiICYmIChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSA9PSBcImZpbmFsaXplXCIpID8gdHJ1ZSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmVydClcclxuICAgICAgICAgICAgICAgIChvdGhlclByb3BzLmN1cnJlbnQgYXMgYW55KS5pbmVydCA9IHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdGhlclByb3BzLmN1cnJlbnRbXCJpbmVydFwiIGFzIG5ldmVyXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbmVydCA9IChpbmVydCB8fCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0JlaW5nUGFpbnRlZCA9IChuZXh0RGlyZWN0aW9uID09IFwiZW50ZXJcIiB8fCAobmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiAmJiBuZXh0UGhhc2UgIT0gXCJmaW5hbGl6ZVwiKSk7XHJcbiAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlPy4oaXNCZWluZ1BhaW50ZWQpO1xyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25WaXNpYmlsaXR5Q2hhbmdlPy4oaXNCZWluZ1BhaW50ZWQpO1xyXG5cclxuICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgKG5leHRQaGFzZSA9PSBcImluaXRcIiB8fCBuZXh0UGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpKVxyXG4gICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuXHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKG5leHRQaGFzZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibWVhc3VyZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAvL3NldFN0YXRlKGAke25leHREaXJlY3Rpb259LWluaXRgKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgXCJpbml0XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gISFJbnRlbnRpb25hbCBmYWxsLXRocm91Z2ghIVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbml0XCI6IHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHNldFN0YXRlKGAke25leHREaXJlY3Rpb259LXRyYW5zaXRpb25gKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gKGY6IG51bWJlcikgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoZilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgZ2V0VGltZW91dER1cmF0aW9uKGVsZW1lbnQpICogMS41KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSAoZjogbnVtYmVyKSA9PiBjbGVhclRpbWVvdXQoZilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJmaW5hbGl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIG9yIHNjaGVkdWxlIG9yIGFueXRoaW5nIC0tIHdlIGp1c3QgdXBkYXRlIG91ciBjbGFzc2VzIGFuZCB3ZSdyZSBkb25lLlxyXG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IG51bGw7ICAgIC8vIERvZXMgdGhpcyBtYWtlIGl0IG1vcmUgb3IgbGVzcyBjbGVhcj9cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJbnZhbGlkIHN0YXRlIHVzZWQgaW4gdHJhbnNpdGlvbjogJHtuZXh0U3RhdGV9LiBQcmV2aW91cyBzdGF0ZSB3YXMgJHtwcmV2U3RhdGUgPz8gXCJudWxsXCJ9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2dldFN0YXRlLCBzZXRTdGF0ZV0gPSB1c2VQYXNzaXZlU3RhdGU8VHJhbnNpdGlvblN0YXRlIHwgbnVsbCwgdW5kZWZpbmVkPihvblN0YXRlQ2hhbmdlLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XHJcblxyXG4gICAgLy8gV2hlbiB3ZSBtb3VudCwgYW5kIGV2ZXJ5IHRpbWUgdGhlcmVhZnRlciB0aGF0IGBzaG93YCBjaGFuZ2VzLFxyXG4gICAgLy8gY2hhbmdlIG91ciBjdXJyZW50IHN0YXRlIGFjY29yZGluZyB0byB0aGF0IGBzaG93YCB2YWx1ZS5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBpbnRlcm5hbE9uU2hvd0NoYW5nZWQoc2hvdywgbWVhc3VyZSksIFttZWFzdXJlLCBzaG93XSk7XHJcblxyXG5cclxuICAgIC8vIFRoaXMgaGFzIG5vIGRlcGVuZGVuY2VzIGFuZCBpcyByZWxpZWQgb24gaW4gdHdvIGRpZmZlcmVudCBhcmVhc1xyXG4gICAgZnVuY3Rpb24gaW50ZXJuYWxPblNob3dDaGFuZ2VkKHNob3c6IGJvb2xlYW4gfCBudWxsLCBtZWFzdXJlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIC8vIElmIGBzaG93YCBpcyBudWxsLCB0aGVuIHdlIGRvbid0IGNoYW5nZSBhbnl0aGluZy5cclxuICAgICAgICBpZiAoc2hvdyA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIChJZiBgc2hvd2AgaXMgdHJ1ZS9mYWxzZSwgd2UnbGwgcmVtb3ZlIHRoZSBDU1MgY2xhc3NlcyBkdXJpbmcgYG9uQ2hhbmdlYClcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICBsZXQgbmV4dFBoYXNlOiBUcmFuc2l0aW9uUGhhc2UgPSBtZWFzdXJlID8gXCJtZWFzdXJlXCIgOiBcImluaXRcIjtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtjdXJyZW50RGlyZWN0aW9uLCBjdXJyZW50UGhhc2VdID0gcGFyc2VTdGF0ZShjdXJyZW50U3RhdGUpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBoYXNlICE9IFwiZmluYWxpemVcIilcclxuICAgICAgICAgICAgICAgIG5leHRQaGFzZSA9IFwidHJhbnNpdGlvblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm90ZTogdGhlIHNldFN0YXRlIGNoYW5nZSBoYW5kbGVyIHJ1bnMgaW1tZWRpYXRlbHkgd2l0aCBubyBkZWJvdW5jZS5cclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGFuaW1hdGVPbk1vdW50KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYGVudGVyLSR7bmV4dFBoYXNlfWApO1xyXG5cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJlbnRlci1maW5hbGl6ZVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGFuaW1hdGVPbk1vdW50KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYGV4aXQtJHtuZXh0UGhhc2V9YCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc01vdW50ZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGR1cmF0aW9uICE9IG51bGwpXHJcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LWR1cmF0aW9uYF0gPSBkdXJhdGlvbiArIFwibXNcIjtcclxuICAgIGVsc2VcclxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LWR1cmF0aW9uYF07XHJcblxyXG4gICAgZWFzaW5nSW4gPz89IGVhc2luZztcclxuICAgIGVhc2luZ091dCA/Pz0gZWFzaW5nO1xyXG5cclxuICAgIGlmIChlYXNpbmdPdXQgIT0gbnVsbClcclxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF0gPSBlYXNpbmdPdXQ7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXTtcclxuXHJcblxyXG4gICAgaWYgKGVhc2luZ0luICE9IG51bGwpXHJcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXSA9IGVhc2luZ0luO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdO1xyXG5cclxuXHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbnVsbDtcclxuICAgIGNvbnN0IGJsb2NrRGlyZWN0aW9uID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIC8vIE5vIG1hdHRlciB3aGF0IGRlbGF5TW91bnRVbnRpbFNob3duIGlzLFxyXG4gICAgLy8gb25jZSB3ZSd2ZSByZW5kZXJlZCBvdXIgY2hpbGRyZW4gb25jZSwgXHJcbiAgICAvLyBlbnN1cmUgdGhhdCB3ZSBkb24ndCB1bm1vdW50IHRoZW0gYWdhaW4gYW5kIHdhc3RlIGFsbCB0aGF0IHdvcmsuXHJcbiAgICAvLyAoSWYgeW91IHJlYWxseSBuZWVkIHRoaXMgeW91IGNhbiBqdXN0IHVubW91bnQgdGhlIGVudGlyZSB0cmFuc2l0aW9uIGl0c2VsZilcclxuICAgIGNvbnN0IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuID0gKHNob3cgfHwgIWRlbGF5TW91bnRVbnRpbFNob3duKTtcclxuICAgIGNvbnN0IGhhc1JlbmRlcmVkQ2hpbGRyZW4gPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiB8fCBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQ7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbilcclxuICAgICAgICAgICAgaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50IHx8PSB0cnVlO1xyXG4gICAgfSwgW2hhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudCA/IGZhbHNlIDogZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW5dKTtcclxuXHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW5Jc1Zub2RlID0gKGNoaWxkcmVuICYmIChjaGlsZHJlbiBhcyBWTm9kZSkudHlwZSAmJiAoY2hpbGRyZW4gYXMgVk5vZGUpLnByb3BzKTtcclxuICAgIGNvbnN0IGZpbmFsUHJvcHMgPSB1c2VNZXJnZWRQcm9wczxFPihwLCBwcm9wc1N0YWJsZSwgb3RoZXJQcm9wcy5jdXJyZW50LCB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBbXHJcbiAgICAgICAgICAgIC4uLmNsYXNzTmFtZXMuY3VycmVudCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gXHJcbiAgICAgICAgXS5qb2luKFwiIFwiKSxcclxuICAgICAgICBzdHlsZTogY3NzUHJvcGVydGllcy5jdXJyZW50XHJcbiAgICB9LCBjaGlsZHJlbklzVm5vZGUgPyB7IHJlZjogKGNoaWxkcmVuIGFzIFZOb2RlKS5yZWYsIC4uLihjaGlsZHJlbiBhcyBWTm9kZSkucHJvcHMgfSA6IHt9KTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlc2V0Q29udGV4dCA9IHVzZVJlZjxTd2FwcGFibGVDb250ZXh0VHlwZT4oeyBnZXRBbmltYXRlT25Nb3VudDogcmV0dXJuRmFsc2UgfSkuY3VycmVudDtcclxuXHJcbiAgICBsZXQgbW9kaWZpZWRDaGlsZHJlbjogVk5vZGU7XHJcblxyXG4gICAgaWYgKGNoaWxkcmVuSXNWbm9kZSkge1xyXG4gICAgICAgIG1vZGlmaWVkQ2hpbGRyZW4gPSA8RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e251bGx9PjxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXNldENvbnRleHR9PntjbG9uZUVsZW1lbnQoY2hpbGRyZW4gYXMgVk5vZGUsIGZpbmFsUHJvcHMpfTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj48L0V4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LlByb3ZpZGVyPlxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbW9kaWZpZWRDaGlsZHJlbiA9IDxFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bnVsbH0+PFN3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Jlc2V0Q29udGV4dH0+PHNwYW4gey4uLmZpbmFsUHJvcHMgYXMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8YW55Pn0+e2NoaWxkcmVufTwvc3Bhbj48L1N3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXI+PC9FeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiByZW5kZXJDaGlsZHJlbiA/IG1vZGlmaWVkQ2hpbGRyZW4gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvcmNlUmVmbG93PEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oZTogRSkge1xyXG5cclxuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxyXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cclxuICAgIGNvbnN0IHAgPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xyXG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLnN0eWxlLnRyYW5zZm9ybTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gcDtcclxuICAgIHJldHVybiBlO1xyXG59XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIG1pbmltdW0gb3IgbWF4aW11bSBvcGFjaXR5IHZhbHVlcyB0byB1c2UgZm9yIHRoZSBmYWRlIGVmZmVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgZmFkZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3BhY2l0eSB0byB1c2Ugd2hlbiBmYWRlZCBvdXQuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZhZGVNaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIGluLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDFcclxuICAgICAgICAgKi9cclxuICAgICAgICBmYWRlTWF4OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0ZhZGU8RSBleHRlbmRzIEVsZW1lbnQ+KHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1pbiwgZmFkZU1heCB9IH06IFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1mYWRlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmFkZS1taW5gXTogKGZhZGVNaW4gPz8gMCksXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZhZGUgZWZmZWN0LlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcclxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxyXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxyXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KHsgcmVmLCAuLi5yZXN0IH0sIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSkpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIGNsaXBQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwT3JpZ2luOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwT3JpZ2luQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbCkuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBjbGlwIHRvL2Zyb20sIGZyb20gMCB0byAxIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNDbGlwPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGNsaXBQYXJhbWV0ZXJzOiB7IGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lIH0gfTogVXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke0dldEJhc2VDbGFzcygpfS1jbGlwYCksXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1vcmlnaW4taW5saW5lYF06IChjbGlwT3JpZ2luSW5saW5lID8/IGNsaXBPcmlnaW4gPz8gMC41KSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1taW4taW5saW5lYF06IChjbGlwTWluSW5saW5lID8/IGNsaXBNaW4gPz8gMSksXHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1taW4tYmxvY2tgXTogKGNsaXBNaW5CbG9jayA/PyBjbGlwTWluID8/IDApLFxyXG4gICAgICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsaXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFPiwgXCJjbGlwUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXA8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENsaXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuXHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ2xpcCh7IGNsaXBQYXJhbWV0ZXJzOiB7IGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pKVxyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0NsaXAsIFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vY2xpcFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcEZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFPiwgXCJjbGlwUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXBGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkZWxheU1vdW50VW50aWxTaG93biwgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDbGlwRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NsaXAoeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jayB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSkpO1xyXG5cclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjb2xsYXBzZSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcblxyXG4gICAgY29sbGFwc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgKiBUaGUgc21hbGxlc3Qgc2l6ZSB0aGUgY29tcG9uZW50IGNvbGxhcHNlcyB0by5cclxuICAgICAgICAqL1xyXG4gICAgICAgIG1pbkJsb2NrU2l6ZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICogXHJcbiAqIElNUE9SVEFOVDogSWYgdXNlZCBvdXRzaWRlIG9mIGEgYDxDb2xsYXBzZSAvPmAsIHlvdSBtdXN0IGluY2x1ZGUgdGhlIGBtZWFzdXJlYCBwcm9wIG9uIHRoZSBgPFRyYW5zaXRpb25hYmxlPmAgdGhhdCB5b3UgdXNlLlxyXG4gKiBcclxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNDb2xsYXBzZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfTogVXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1jb2xsYXBzZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGFwc2VQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RT4sIFwiY29sbGFwc2VQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cclxuICogXHJcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhIFxyXG4gKiBNYWtlIHN1cmUgeW91IGRvIHRlc3Rpbmcgb24gbG93ZXIgcG93ZXIgZGV2aWNlcywgb3IgcHJlZmVyIGEgbGlnaHRlclxyXG4gKiBhbHRlcm5hdGl2ZSwgbGlrZSBgPENsaXA+YC5cclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgc2hvdywgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCBtaW5CbG9ja1NpemUsIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENvbGxhcHNlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ29sbGFwc2UoeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzQ29sbGFwc2UsIFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVycyB9IGZyb20gXCIuL2NvbGxhcHNlXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RT4sIFwiY29sbGFwc2VQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgQ29sbGFwc2VGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHNob3csIGR1cmF0aW9uLCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIGV4aXRWaXNpYmlsaXR5LCBtaW5CbG9ja1NpemUsIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDb2xsYXBzZUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDb2xsYXBzZSh7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYsIHVzZUxhc3ROb25OdWxsVmFsdWUgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gYW5kIGV4dGVudCBvZiB0aGUgZmxpcCBlZmZlY3QuIFxyXG4gKiBWYWx1ZXMgYXJlIHJlbGF0aXZlLCB3aXRoIDEgb3IgLTEgYmVpbmcgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGF0IGRpcmVjdGlvbi5cclxuICogYDAuNWAsIGZvciBleGFtcGxlLCB3b3VsZCBmbGlwIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgZmxpcFBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgaW5saW5lIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZsaXBBbmdsZUlubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBhbmdsZSAoaW4gZGVncmVlcykgdG8gcm90YXRlIHRvd2FyZHMgb24gdGhlIGJsb2NrIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaW5jZSB0aGlzIGlzIGEgM0QgZWZmZWN0LCBhIHBlcnNwZWN0aXZlIHZhbHVlIGlzIG5lZWRlZC5cclxuICAgICAgICAgKiBAZGVmYXVsdCA4MDBweFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZsaXBQZXJzcGVjdGl2ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0ZsaXA8RSBleHRlbmRzIEVsZW1lbnQ+KHsgZmxpcFBhcmFtZXRlcnM6IHsgZmxpcEFuZ2xlQmxvY2ssIGZsaXBBbmdsZUlubGluZSwgZmxpcFBlcnNwZWN0aXZlIH0gfTogVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZsaXBgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVJbmxpbmUpID8/IDApfWRlZ2AsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyh1c2VMYXN0Tm9uTnVsbFZhbHVlKGZsaXBBbmdsZUJsb2NrKSA/PyAwKX1kZWdgLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tcGVyc3BlY3RpdmVgXTogYCR7KGZsaXBQZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsaXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGbGlwUGFyYW1ldGVyczxFPiwgXCJmbGlwUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cclxuICogXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICogXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxyXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKSBcclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXA8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgZmxpcFBlcnNwZWN0aXZlLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBGbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmxpcCh7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiwgdXNlTGFzdE5vbk51bGxWYWx1ZSB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBhbmQgZXh0ZW50IG9mIHRoZSBzbGlkZSBlZmZlY3QuIFxyXG4gKiBWYWx1ZXMgYXJlIHJlbGF0aXZlLCB3aXRoIDEgb3IgLTEgYmVpbmcgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGF0IGRpcmVjdGlvbi5cclxuICogYDAuNWAsIGZvciBleGFtcGxlLCB3b3VsZCBzbGlkZSB0byB0aGUgcmlnaHQgYnkgNTAlIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBzbGlkZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogV2hlbiAwLCB0aGUgbGFzdCBub24temVybyB2YWx1ZSB3aWxsIGJlIHVzZWQuIFBhc3MgbnVsbC91bmRlZmluZWQgdG8gYWN0dWFsbHkgdXNlIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2xpZGVUYXJnZXRJbmxpbmU6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gc2xpZGUgdG8vZnJvbSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzbGlkZVRhcmdldEJsb2NrOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNTbGlkZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSB9OiBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gdXNlTGFzdE5vbk51bGxWYWx1ZShzbGlkZVRhcmdldElubGluZSk7XHJcbiAgICBzbGlkZVRhcmdldEJsb2NrID0gdXNlTGFzdE5vbk51bGxWYWx1ZShzbGlkZVRhcmdldEJsb2NrKTtcclxuXHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1zbGlkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxyXG4gKiBcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxyXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXHJcbiAqIFxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcclxuICogKGBzbGlkZUlubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pIFxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnJlc3QgfTogU2xpZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIG9yaWdpbiwgbWluaW11bSBzaXplLCBhbmQgZGlyZWN0aW9uIG9mIHRoZSB6b29tIGVmZmVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgem9vbVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvIChYIGNvbXBvbmVudClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKFkgY29tcG9uZW50KVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNab29tPEUgZXh0ZW5kcyBFbGVtZW50Pih7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0gfTogVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS16b29tYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGRlbGF5TW91bnRVbnRpbFNob3duLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogWm9vbVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxufSkpO1xyXG5cclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVab29tUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlWm9vbVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVab29tRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGZhZGVNYXgsIGZhZGVNaW4sIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVab29tRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogWm9vbUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG59KSk7XHJcbiIsbnVsbF0sIm5hbWVzIjpbInNsaWNlIiwib3B0aW9ucyIsInZub2RlSWQiLCJpbkV2ZW50IiwicmVyZW5kZXJRdWV1ZSIsInByZXZEZWJvdW5jZSIsIm1pY3JvVGljayIsImkiLCJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsInJlbW92ZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjaGlsZHJlbiIsImtleSIsInJlZiIsIm5vcm1hbGl6ZWRQcm9wcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJjcmVhdGVWTm9kZSIsIm9yaWdpbmFsIiwidm5vZGUiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192IiwiRnJhZ21lbnQiLCJkaWZmUHJvcHMiLCJkb20iLCJuZXdQcm9wcyIsIm9sZFByb3BzIiwiaXNTdmciLCJoeWRyYXRlIiwic2V0UHJvcGVydHkiLCJzZXRTdHlsZSIsInN0eWxlIiwidmFsdWUiLCJ0ZXN0IiwibmFtZSIsIm9sZFZhbHVlIiwidXNlQ2FwdHVyZSIsIm8iLCJjc3NUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudFByb3h5Q2FwdHVyZSIsImV2ZW50UHJveHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsImluZGV4T2YiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0aGlzIiwiZXZlbnQiLCJDb21wb25lbnQiLCJjb250ZXh0IiwiZ2V0RG9tU2libGluZyIsImNoaWxkSW5kZXgiLCJzaWJsaW5nIiwidXBkYXRlUGFyZW50RG9tUG9pbnRlcnMiLCJjaGlsZCIsImJhc2UiLCJkZWZlciIsImNiIiwic2V0VGltZW91dCIsImVucXVldWVSZW5kZXIiLCJjIiwicHVzaCIsInByb2Nlc3MiLCJfX3IiLCJkZWJvdW5jZVJlbmRlcmluZyIsIiQiLCJyZW5kZXJRdWV1ZUxlbmd0aCIsImNvbXBvbmVudCIsImNvbW1pdFF1ZXVlIiwib2xkVk5vZGUiLCJvbGREb20iLCJwYXJlbnREb20iLCJzb3J0IiwiYSIsImIiLCJzaGlmdCIsIl9fUCIsImRpZmYiLCJvd25lclNWR0VsZW1lbnQiLCJjb21taXRSb290IiwiZGlmZkNoaWxkcmVuIiwicmVuZGVyUmVzdWx0IiwibmV3UGFyZW50Vk5vZGUiLCJvbGRQYXJlbnRWTm9kZSIsImdsb2JhbENvbnRleHQiLCJleGNlc3NEb21DaGlsZHJlbiIsImlzSHlkcmF0aW5nIiwiaiIsImNoaWxkVk5vZGUiLCJuZXdEb20iLCJmaXJzdENoaWxkRG9tIiwicmVmcyIsIm9sZENoaWxkcmVuIiwib2xkQ2hpbGRyZW5MZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJyZW9yZGVyQ2hpbGRyZW4iLCJwbGFjZUNoaWxkIiwiZ2V0TGFzdERvbSIsIm5leHRTaWJsaW5nIiwidW5tb3VudCIsImFwcGx5UmVmIiwidG1wIiwidG9DaGlsZEFycmF5Iiwib3V0Iiwic29tZSIsIm5leHREb20iLCJzaWJEb20iLCJvdXRlciIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwibGFzdERvbSIsIm5ld1ZOb2RlIiwiaXNOZXciLCJvbGRTdGF0ZSIsInNuYXBzaG90IiwiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwicHJvdmlkZXIiLCJjb21wb25lbnRDb250ZXh0IiwicmVuZGVySG9vayIsImNvdW50IiwibmV3VHlwZSIsImNvbnRleHRUeXBlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiZG9SZW5kZXIiLCJzdWIiLCJzdGF0ZSIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJkaWZmRWxlbWVudE5vZGVzIiwiZGlmZmVkIiwicm9vdCIsIm9sZEh0bWwiLCJuZXdIdG1sIiwibm9kZVR5cGUiLCJsb2NhbE5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiY3JlYXRlRWxlbWVudE5TIiwiaXMiLCJkYXRhIiwiY2hpbGROb2RlcyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiYXR0cmlidXRlcyIsIl9faHRtbCIsImlubmVySFRNTCIsImNoZWNrZWQiLCJjdXJyZW50IiwicGFyZW50Vk5vZGUiLCJza2lwUmVtb3ZlIiwiciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVwbGFjZU5vZGUiLCJmaXJzdENoaWxkIiwiY2xvbmVFbGVtZW50IiwiY3JlYXRlQ29udGV4dCIsImRlZmF1bHRWYWx1ZSIsImNvbnRleHRJZCIsIkNvbnN1bWVyIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJzdWJzIiwiY3R4IiwiX3Byb3BzIiwib2xkIiwic3BsaWNlIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjdG9yIiwiaGFuZGxlZCIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJ1cGRhdGUiLCJjYWxsYmFjayIsInMiLCJmb3JjZVVwZGF0ZSIsIlByb21pc2UiLCJ0aGVuIiwiYmluZCIsInJlc29sdmUiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldmlvdXNDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIkVNUFRZIiwib2xkQmVmb3JlRGlmZiIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsImhvb2tzIiwiX19IIiwiX19WIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwiYWN0aW9uIiwiY3VycmVudFZhbHVlIiwiX19OIiwibmV4dFZhbHVlIiwiX2hhc1NjdUZyb21Ib29rcyIsInByZXZTY3UiLCJwIiwic3RhdGVIb29rcyIsImZpbHRlciIsIngiLCJldmVyeSIsInNob3VsZFVwZGF0ZSIsImhvb2tJdGVtIiwidXNlRWZmZWN0IiwiYXJncyIsImFyZ3NDaGFuZ2VkIiwiX3BlbmRpbmdBcmdzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFmdGVyTmV4dEZyYW1lIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwidCIsIm4iLCJjbHN4IiwidXNlRW5zdXJlU3RhYmlsaXR5IiwicGFyZW50SG9va05hbWUiLCJfbGVuIiwidmFsdWVzIiwiX2tleSIsImhlbHBlclRvRW5zdXJlU3RhYmlsaXR5Iiwic2hvd25FcnJvciIsInVzZUhlbHBlciIsImNvbnNvbGUiLCJjb25jYXQiLCJKU09OIiwic3RyaW5naWZ5IiwiX2wkMSRkZWJvdW5jZVJlbmRlcmluIiwidXNlUGFzc2l2ZVN0YXRlIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsVmFsdWUiLCJjdXN0b21EZWJvdW5jZVJlbmRlcmluZyIsInZhbHVlUmVmIiwiVW5zZXQiLCJyZWFzb25SZWYiLCJ3YXJuaW5nUmVmIiwiZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QiLCJjbGVhbnVwQ2FsbGJhY2tSZWYiLCJvblNob3VsZENsZWFuVXAiLCJjbGVhbnVwQ2FsbGJhY2siLCJ0cnlFbnN1cmVWYWx1ZSIsIl9vbkNoYW5nZSIsImV4IiwiZ2V0VmFsdWUiLCJ3YXJuIiwic2V0VmFsdWUiLCJyZWFzb24iLCJGdW5jdGlvbiIsIm5leHRSZWFzb24iLCJuZXh0RGVwIiwicHJldkRlcCIsIl9vbkNoYW5nZTIiLCJTeW1ib2wiLCJyZXR1cm5GYWxzZSIsInJldHVybk51bGwiLCJydW5JbW1lZGlhdGVseSIsIlRhYmxlIiwiYmFzZTY0IiwicmFuZG9tNkJpdHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb202NEJpdHMiLCJnZW5lcmF0ZVJhbmRvbUlkIiwicHJlZml4IiwibWFwIiwiam9pbiIsInByZXZpb3VzSW5wdXRzIiwiTWFwIiwidG9SdW4iLCJjb21taXROYW1lIiwib3JpZ2luYWxDb21taXQiLCJuZXdDb21taXQiLCJpZCIsImVmZmVjdEluZm8iLCJvbGRJbnB1dHMiLCJnZXQiLCJpbnB1dHMiLCJfZWZmZWN0SW5mbyRjbGVhbnVwIiwiZWZmZWN0Iiwic2V0IiwiY2xlYXIiLCJfbGVuMiIsIl9rZXkyIiwidXNlQmVmb3JlTGF5b3V0RWZmZWN0IiwiZGVsZXRlIiwidXNlU3RhYmxlR2V0dGVyIiwiRXJyb3IiLCJ1c2VTdGFibGVPYmplY3QiLCJPYmplY3QiLCJlbnRyaWVzIiwiX3JlZiIsIl9rIiwidiIsIldlYWtNYXAiLCJpc1N0YWJsZUdldHRlciIsIl9tYXAkZ2V0Iiwic2V0SXNTdGFibGVHZXR0ZXIiLCJ1c2VTdGFibGVDYWxsYmFjayIsImZuIiwibm9EZXBzIiwiY3VycmVudENhbGxiYWNrR2V0dGVyIiwidXNlQ2FsbGJhY2tOYXRpdmUiLCJhc3NlcnQiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImxocyIsInJocyIsInVzZU1lcmdlZENsYXNzZXMiLCJsaHNDbGFzcyIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwidXNlTWVyZ2VkUmVmcyIsImNvbWJpbmVkIiwic3R5bGVTdHJpbmdUb09iamVjdCIsImZyb21FbnRyaWVzIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwibG9nIiwidXNlTWVyZ2VkUHJvcHMiLCJfbGVuMyIsImFsbFByb3BzIiwiX2tleTMiLCJyZXQiLCJuZXh0UHJvcHMiLCJ1c2VNZXJnZWRQcm9wczIiLCJrbm93bnMiLCJtZXJnZVVua25vd24iLCJsaHNWYWx1ZSIsInJoc1ZhbHVlIiwibWVyZ2VkIiwibWVyZ2VGdW5jdGlvbnMiLCJsaHNBbGwiLCJyaHNBbGwiLCJjbGFzc05hbWUiLCJsaHNLZXlVIiwibGhzS2V5IiwiaGFzIiwicmhzS2V5VSIsInJoc0tleSIsImx2IiwicnYiLCJhbGwiLCJ1c2VSZWZFbGVtZW50Iiwib25FbGVtZW50Q2hhbmdlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsInJlZkVsZW1lbnRQYXJhbWV0ZXJzIiwiaGFuZGxlciIsInByZXZWYWx1ZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwicHJvcHNTdGFibGUiLCJyZWZFbGVtZW50UmV0dXJuIiwidXNlTWFuYWdlZENoaWxkcmVuIiwicGFyZW50UGFyYW1ldGVycyIsIm1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnMiLCJvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QiLCJvbkNoaWxkcmVuTW91bnRDaGFuZ2UiLCJvbkNoaWxkQ291bnRDaGFuZ2UiLCJyZXN0IiwiZ2V0SGlnaGVzdEluZGV4IiwibWFuYWdlZENoaWxkcmVuQXJyYXkiLCJoaWdoZXN0SW5kZXgiLCJhcnIiLCJyZWMiLCJsb3dlc3RJbmRleCIsImZvckVhY2hDaGlsZCIsImZpZWxkIiwiZ2V0TWFuYWdlZENoaWxkSW5mbyIsImhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZCIsInJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMiLCJyZW1vdGVVTEVDaGlsZENoYW5nZWQiLCJzaXplIiwiYWRkIiwicmVtb3RlVUxFQ2hpbGRNb3VudGVkIiwibW91bnRlZCIsIm1vdW50cyIsInVubW91bnRzIiwiZ2V0Q2hpbGRyZW4iLCJtYXgiLCJzaGF2ZSIsIm1hbmFnZWRDaGlsZHJlbiIsIl8iLCJnZXRBdCIsImFycmF5U2xpY2UiLCJtYW5hZ2VkQ2hpbGRDb250ZXh0IiwibWFuYWdlZENoaWxkcmVuUmV0dXJuIiwidXNlTWFuYWdlZENoaWxkIiwiaW5mbyIsIm1hbmFnZWRDaGlsZFBhcmFtZXRlcnMiLCJfaW5mbyRjb250ZXh0IiwiZmxhdCIsIm1hbmFnZWRDaGlsZFJldHVybiIsInVzZUNoaWxkcmVuRmxhZyIsIl9yZWYyIiwiaW5pdGlhbEluZGV4IiwiY2xvc2VzdEZpdCIsIm9uSW5kZXhDaGFuZ2UiLCJzZXRBdCIsImlzVmFsaWQiLCJnZXRDdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJnZXRSZXF1ZXN0ZWRJbmRleCIsInNldFJlcXVlc3RlZEluZGV4IiwiZ2V0Q2xvc2VzdEZpdCIsInJlcXVlc3RlZEluZGV4IiwiY2xvc2VzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJjbG9zZXN0SW5kZXgiLCJuZXdEaXN0YW5jZSIsImFicyIsInJlZXZhbHVhdGVDbG9zZXN0Rml0IiwiY3VycmVudENoaWxkIiwiY2xvc2VzdEZpdEluZGV4IiwiY2xvc2VzdEZpdENoaWxkIiwiY2hhbmdlSW5kZXgiLCJuZXdNYXRjaGluZ0NoaWxkIiwib2xkTWF0Y2hpbmdDaGlsZCIsImNoaWxkSXNWYWxpZCIsIl9ibG9ja2luZ0VsZW1lbnRzIiwiX2FscmVhZHlJbmVydEVsZW1lbnRzIiwiX3RvcEVsUGFyZW50cyIsIl9zaWJsaW5nc1RvUmVzdG9yZSIsIl9wYXJlbnRNTyIsIl90b3BDaGFuZ2VkIiwiX3N3YXBJbmVydGVkU2libGluZyIsIl9pbmVydFNpYmxpbmdzIiwiX3Jlc3RvcmVJbmVydGVkU2libGluZ3MiLCJfZ2V0UGFyZW50cyIsIl9nZXREaXN0cmlidXRlZENoaWxkcmVuIiwiX2lzSW5lcnRhYmxlIiwiX2hhbmRsZU11dGF0aW9ucyIsIkJsb2NraW5nRWxlbWVudHNJbXBsIiwiX2EiLCJfYiIsIl9jIiwiZGVzdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJlbGVtZW50IiwicmVtb3ZlIiwicG9wIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsImJvZHkiLCJ0b1NraXAiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJpbmVydCIsImVsZW1lbnRzIiwibW8iLCJkaXNjb25uZWN0Iiwic2libGluZ3MiLCJwYXJlbnQiLCJpbmVydGVkU2libGluZ3MiLCJNdXRhdGlvbk9ic2VydmVyIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJtdXRhdGlvbnMiLCJwYXJlbnRzIiwibXV0YXRpb24iLCJ0YXJnZXQiLCJpZHgiLCJpbmVydGVkQ2hpbGQiLCJyZW1vdmVkTm9kZXMiLCJhZGRlZE5vZGVzIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImFzc2lnbmVkU2xvdCIsInNoYWRvd1Jvb3QiLCJyZXN1bHQiLCJub2RlcyIsInNsb3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiJGJsb2NraW5nRWxlbWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIl9vbk11dGF0aW9uIiwic3VidHJlZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJfYWRvcHRJbmVydFJvb3QiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290IiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJfb25Eb2N1bWVudExvYWRlZCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0Iiwic2hhZG93Um9vdEFuY2VzdG9yIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiX2kiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJIVE1MRWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic2V0U3RhdGVQIiwidXNlU3RhdGVQIiwiZ2V0U3RhdGUiLCJpc05hTiIsInNoYWxsb3dEaWZmZXJzIiwiUHVyZUNvbXBvbmVudCIsIm1lbW8iLCJjb21wYXJlciIsInVwZGF0ZVJlZiIsIk1lbW9lZCIsImRpc3BsYXlOYW1lIiwiaXNSZWFjdENvbXBvbmVudCIsImlzUHVyZVJlYWN0Q29tcG9uZW50Iiwib2xkRGlmZkhvb2siLCJfX2YiLCJSRUFDVF9GT1JXQVJEX1NZTUJPTCIsImZvciIsImZvcndhcmRSZWYiLCJGb3J3YXJkZWQiLCJjbG9uZSIsIiQkdHlwZW9mIiwib2xkQ2F0Y2hFcnJvciIsIm9sZFVubW91bnQiLCJkZXRhY2hlZENsb25lIiwiZGV0YWNoZWRQYXJlbnQiLCJyZW1vdmVPcmlnaW5hbCIsIm9yaWdpbmFsUGFyZW50IiwiU3VzcGVuc2UiLCJfX3UiLCJfc3VzcGVuZGVycyIsInN1c3BlbmRlZCIsIl9fYSIsIlN1c3BlbnNlTGlzdCIsIl9uZXh0IiwiX21hcCIsIl9fUiIsInByb21pc2UiLCJzdXNwZW5kaW5nVk5vZGUiLCJzdXNwZW5kaW5nQ29tcG9uZW50IiwicmVzb2x2ZWQiLCJvblJlc29sdmVkIiwib25TdXNwZW5zaW9uQ29tcGxldGUiLCJzdXNwZW5kZWRWTm9kZSIsIndhc0h5ZHJhdGluZyIsImRldGFjaGVkQ29tcG9uZW50IiwiX19PIiwiZmFsbGJhY2siLCJXIiwibGlzdCIsInJldmVhbE9yZGVyIiwiZGVsZWdhdGVkIiwidW5zdXNwZW5kIiwid3JhcHBlZFVuc3VzcGVuZCIsInJldmVyc2UiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJDQU1FTF9QUk9QUyIsIklTX0RPTSIsIm9uQ2hhbmdlSW5wdXRUeXBlIiwiWiIsIm9sZEV2ZW50SG9vayIsImVtcHR5IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjYW5jZWxCdWJibGUiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJkZWZhdWx0UHJldmVudGVkIiwicGVyc2lzdCIsIm5hdGl2ZUV2ZW50IiwiY2xhc3NOYW1lRGVzY3JpcHRvciIsImNsYXNzIiwib2xkVk5vZGVIb29rIiwibm9uQ3VzdG9tRWxlbWVudCIsIm11bHRpcGxlIiwic2VsZWN0ZWQiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlN3YXBwYWJsZUNvbnRleHQiLCJnZXRBbmltYXRlT25Nb3VudCIsIkV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0IiwiQ3NzQ2xhc3NDb250ZXh0IiwiR2V0QmFzZUNsYXNzIiwiR2V0RW50ZXJDbGFzcyIsIkdldEV4aXRDbGFzcyIsIkdldE1lYXN1cmVDbGFzcyIsIkdldEluaXRDbGFzcyIsIkdldFRyYW5zaXRpb25DbGFzcyIsIkdldEZpbmFsaXplQ2xhc3MiLCJ1c2VDc3NDbGFzc2VzIiwiR2V0RGlyZWN0aW9uQ2xhc3MiLCJkaXJlY3Rpb24iLCJHZXRQaGFzZUNsYXNzIiwicGhhc2UiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsInVzZUxhc3ROb25OdWxsVmFsdWUiLCJsYXN0Tm9uTnVsbFZhbHVlIiwiZ2xvYmFsQ291bnQiLCJFeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXIiLCJfcmVmMyIsImdldE5leHRJbmRleEluTGluZSIsInNldE5leHRJbmRleEluTGluZSIsIm0iLCJzZXRFeGNsdXNpdmVseU9wZW4iLCJnZXRFeGNsdXNpdmVseU9wZW4iLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmxlIiwibmV4dEluTGluZSIsImN1cnJlbnRJbkxpbmUiLCJfZ2V0Q2hpbGRyZW4kZ2V0QXQiLCJfZ2V0Q2hpbGRyZW4kZ2V0QXQkZm8iLCJmb3JjZUNsb3NlIiwiY29udGV4dDIiLCJleGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCIsImgiLCJ1c2VFeGNsdXNpdmVUcmFuc2l0aW9uIiwiX3JlZjQiLCJ0cmFuc2l0aW9uUGFyYW1ldGVycyIsInNob3ciLCJleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycyIsInRvU3RyaW5nIiwiZXhjbHVzaXZlbHlPcGVuIiwicGFyZW50T25WaXNDaGFuZ2UiLCJleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuIiwiaXNFeGNsdXNpdmUiLCJ1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyIsIl9yZWY1Iiwib3RoZXJQcm9wcyIsImlubGluZSIsIlN3YXBwYWJsZSIsIl9yZWY2IiwiX2lubGluZSIsImNoaWxkcmVuQW5pbWF0ZU9uTW91bnQiLCJleGNsdXNpdmUiLCJpbmxpbmVFbGVtZW50cyIsInRyYW5zaXRpb25Qcm9wcyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImFuaW1hdGVPbk1vdW50IiwiZ2V0VGltZW91dER1cmF0aW9uIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHIiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInBhcnNlU3RhdGUiLCJuZXh0U3RhdGUiLCJ1c2VUcmFuc2l0aW9uIiwiX3JlZjciLCJfYW5pbWF0ZU9uTW91bnQiLCJfbWVhc3VyZSIsIl9lYXNpbmdJbiIsIl9lYXNpbmdPdXQiLCJwcm9wc0luY29taW5nIiwibWVhc3VyZSIsImV4aXRWaXNpYmlsaXR5IiwiZHVyYXRpb24iLCJkZWxheU1vdW50VW50aWxTaG93biIsImVhc2luZyIsImVhc2luZ0luIiwiZWFzaW5nT3V0IiwiZ2V0RXhpdFZpc2liaWxpdHkiLCJnZXRNZWFzdXJlIiwiZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2UiLCJpbnRlcm5hbE9uU2hvd0NoYW5nZWQiLCJjc3NQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lcyIsImhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCIsInRpbWVvdXRIYW5kbGUiLCJfdGltZW91dENsZWFyRnVuY3Rpb24iLCJ0aW1lb3V0Q2xlYXJGdW5jdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJfc2l6ZSIsIl9zaXplMiIsIl9zaXplMyIsIl9zaXplNCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9uU3RhdGVDaGFuZ2UiLCJwcmV2U3RhdGUiLCJuZXh0RGlyZWN0aW9uIiwibmV4dFBoYXNlIiwiaXNCZWluZ1BhaW50ZWQiLCJmb3JjZVJlZmxvdyIsImN1cnJlbnRTdGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50UGhhc2UiLCJkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiIsImhhc1JlbmRlcmVkQ2hpbGRyZW4iLCJyZW5kZXJDaGlsZHJlbiIsImNoaWxkcmVuSXNWbm9kZSIsImZpbmFsUHJvcHMiLCJyZXNldENvbnRleHQiLCJtb2RpZmllZENoaWxkcmVuIiwiZ2xvYmFsVGhpcyIsIl9kdW1teSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ1c2VCYXNlUHJvcHNGYWRlIiwiX3JlZjgiLCJmYWRlUGFyYW1ldGVycyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsIl9yZWY5IiwidXNlQmFzZVByb3BzQ2xpcCIsIl9yZWYxMCIsIl9yZWYxMSIsIl9yZWYxMiIsIl9yZWYxMyIsIl9yZWYxNCIsImNsaXBQYXJhbWV0ZXJzIiwiY2xpcE1pbiIsImNsaXBNaW5CbG9jayIsImNsaXBNaW5JbmxpbmUiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE9yaWdpbklubGluZSIsIkNsaXAiLCJfcmVmMTUiLCJDbGlwRmFkZSIsIl9yZWYxNiIsInVzZUJhc2VQcm9wc0NvbGxhcHNlIiwiX3JlZjE3IiwiY29sbGFwc2VQYXJhbWV0ZXJzIiwibWluQmxvY2tTaXplIiwiUiIsIkNvbGxhcHNlIiwiX3JlZjE4IiwiQ29sbGFwc2VGYWRlIiwiX3JlZjE5IiwidXNlQmFzZVByb3BzRmxpcCIsIl9yZWYyMCIsIl91c2VMYXN0Tm9uTnVsbFZhbHVlIiwiX3VzZUxhc3ROb25OdWxsVmFsdWUyIiwiZmxpcFBhcmFtZXRlcnMiLCJmbGlwQW5nbGVCbG9jayIsImZsaXBBbmdsZUlubGluZSIsImZsaXBQZXJzcGVjdGl2ZSIsIkZsaXAiLCJfcmVmMjEiLCJ1c2VCYXNlUHJvcHNTbGlkZSIsIl9yZWYyMiIsIl9zbGlkZVRhcmdldElubGluZSIsIl9zbGlkZVRhcmdldEJsb2NrIiwic2xpZGVQYXJhbWV0ZXJzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwiU2xpZGUiLCJfcmVmMjMiLCJTbGlkZUZhZGUiLCJfcmVmMjQiLCJ1c2VCYXNlUHJvcHNab29tIiwiX3JlZjI1IiwiX3JlZjI2IiwiX3JlZjI3IiwiX3JlZjI4IiwiX3JlZjI5Iiwiem9vbVBhcmFtZXRlcnMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIl9yZWYzMCIsIlNsaWRlWm9vbSIsIl9yZWYzMSIsIlNsaWRlWm9vbUZhZGUiLCJfcmVmMzIiLCJab29tRmFkZSIsIl9yZWYzMyIsImhhbGZUZXh0IiwiaW5wdXQiLCJ0aW1lcyIsInN1YnN0ciIsIkRlbW8iLCJzZXRFeGNsdXNpdmUiLCJzZXRBbmltYXRlT25Nb3VudCIsIndyaXRpbmdNb2RlIiwic2V0V3JpdGluZ01vZGUiLCJzaG93MSIsInNldFNob3cxIiwic2hvdzMiLCJzZXRTaG93MyIsInJlZmxvdyIsInNldFJlZmxvdyIsInNldER1cmF0aW9uIiwidGV4dCIsInNldFRleHQiLCJmbGlja2VyIiwic2V0RmxpY2tlciIsIm9uSW5wdXQzIiwicHJldmVudERlZmF1bHQiLCJvbklucHV0NCIsIm9uSW5wdXQ1Iiwib25JbnB1dDViIiwib25JbnB1dDYiLCJvbklucHV0NyIsIm9uSW5wdXQ4IiwidmFsdWVBc051bWJlciIsIm9uSW5wdXQ5Iiwib25JbnB1dEEiLCJvbklucHV0QiIsIm9uSW5wdXRDIiwib25DbGljayIsIm9uSW5wdXQiLCJkaXNhYmxlZCIsImNvbHMiLCJyb3dzIiwiRmFkZURlbW8iLCJjYXJkU2hvdyIsImNvbnRlbnRJbmRleCIsIl9yZWYzNCIsIm1pbiIsInNldE1pbiIsInNldE1heCIsIm9uTWluSW5wdXQiLCJvbk1heElucHV0IiwiQyIsIkNTIiwibWFrZUNoaWxkIiwic3RlcCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7RUEwQmFBLElBQUFBLENBQUFBO0lDZlBDLEdD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
