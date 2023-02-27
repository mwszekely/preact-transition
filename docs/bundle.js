(function () {
  'use strict';

  var n,
    l$1,
    u$1,
    t$1,
    r$2,
    o$2,
    f$1,
    e$1 = {},
    c$1 = [],
    s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a$1(n, l) {
    for (var u in l) n[u] = l[u];
    return n;
  }
  function h$1(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }
  function v$1(l, u, i) {
    var t,
      r,
      o,
      f = {};
    for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
    return y$1(l, f, t, r, null);
  }
  function y$1(n, i, t, r, o) {
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
  function d$1(n) {
    return n.children;
  }
  function _$2(n, l) {
    this.props = n, this.context = l;
  }
  function k$2(n, l) {
    if (null == l) return n.__ ? k$2(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? k$2(n) : null;
  }
  function b$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
      return b$1(n);
    }
  }
  function g$2(n) {
    (!n.__d && (n.__d = !0) && t$1.push(n) && !m$1.__r++ || r$2 !== l$1.debounceRendering) && ((r$2 = l$1.debounceRendering) || o$2)(m$1);
  }
  function m$1() {
    var n, l, u, i, r, o, f, e;
    for (t$1.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }); n = t$1.shift();) n.__d && (l = t$1.length, i = void 0, r = void 0, f = (o = (u = n).__v).__e, (e = u.__P) && (i = [], (r = a$1({}, o)).__v = o.__v + 1, z$2(e, o, r, u.__n, void 0 !== e.ownerSVGElement, null != o.__h ? [f] : null, i, null == f ? k$2(o) : f, o.__h), L$1(i, o), o.__e != f && b$1(o)), t$1.length > l && t$1.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }));
    m$1.__r = 0;
  }
  function w$2(n, l, u, i, t, r, o, f, s, a) {
    var h,
      v,
      p,
      _,
      b,
      g,
      m,
      w = i && i.__k || c$1,
      A = w.length;
    for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d$1, {
      children: _
    }, null, null, null) : _.__b > 0 ? y$1(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _)) {
      if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
        if ((p = w[v]) && _.key == p.key && _.type === p.type) {
          w[v] = void 0;
          break;
        }
        p = null;
      }
      z$2(n, _, p = p || e$1, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (m || (m = []), p.ref && m.push(p.ref, null, _), m.push(v, _.__c || b, _)), null != b ? (null == g && (g = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$1(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$2(p));
    }
    for (u.__e = g, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = C$1(i).nextSibling), O(w[h], w[h]));
    if (m) for (h = 0; h < m.length; h++) N$1(m[h], m[++h], m[++h]);
  }
  function x$1(n, l, u) {
    for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x$1(i, l, u) : P(u, i, i, t, i.__e, l));
    return l;
  }
  function A(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      A(n, l);
    }) : l.push(n)), l;
  }
  function P(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
      for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 1) if (f == t) break n;
      n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
  }
  function C$1(n) {
    var l, u, i;
    if (null == n.type || "string" == typeof n.type) return n.__e;
    if (n.__k) for (l = n.__k.length - 1; l >= 0; l--) if ((u = n.__k[l]) && (i = C$1(u))) return i;
    return null;
  }
  function $(n, l, u, i, t) {
    var r;
    for (r in u) "children" === r || "key" === r || r in l || I$1(n, r, null, u[r], i);
    for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || I$1(n, r, l[r], u[r], i);
  }
  function H$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
  }
  function I$1(n, l, u, i, t) {
    var r;
    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || H$1(n.style, l, "");
        if (u) for (l in u) i && u[l] === i[l] || H$1(n.style, l, u[l]);
      }
    } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? j$1 : T$2, r) : n.removeEventListener(l, r ? j$1 : T$2, r);else if ("dangerouslySetInnerHTML" !== l) {
      if (t) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null == u || !1 === u && -1 == l.indexOf("-") ? n.removeAttribute(l) : n.setAttribute(l, u));
    }
  }
  function T$2(n) {
    return this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }
  function j$1(n) {
    return this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }
  function z$2(n, u, i, t, r, o, f, e, c) {
    var s,
      h,
      v,
      y,
      p,
      k,
      b,
      g,
      m,
      x,
      A,
      P,
      C,
      $,
      H,
      I = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l$1.__b) && s(u);
    try {
      n: if ("function" == typeof I) {
        if (g = u.props, m = (s = I.contextType) && t[s.__c], x = s ? m ? m.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in I && I.prototype.render ? u.__c = h = new I(g, x) : (u.__c = h = new _$2(g, x), h.constructor = I, h.render = S), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != I.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a$1({}, h.__s)), a$1(h.__s, I.getDerivedStateFromProps(g, h.__s))), y = h.props, p = h.state, h.__v = u, v) null == I.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == I.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
            for (u.__v !== i.__v && (h.props = g, h.state = h.__s, h.__d = !1), h.__e = !1, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), A = 0; A < h._sb.length; A++) h.__h.push(h._sb[A]);
            h._sb = [], h.__h.length && f.push(h);
            break n;
          }
          null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, p, k);
          });
        }
        if (h.context = x, h.props = g, h.__P = n, P = l$1.__r, C = 0, "prototype" in I && I.prototype.render) {
          for (h.state = h.__s, h.__d = !1, P && P(u), s = h.render(h.props, h.state, h.context), $ = 0; $ < h._sb.length; $++) h.__h.push(h._sb[$]);
          h._sb = [];
        } else do {
          h.__d = !1, P && P(u), s = h.render(h.props, h.state, h.context), h.state = h.__s;
        } while (h.__d && ++C < 25);
        h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), H = null != s && s.type === d$1 && null == s.key ? s.props.children : s, w$2(n, Array.isArray(H) ? H : [H], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
      } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = M(i.__e, u, i, t, r, o, f, c);
      (s = l$1.diffed) && s(u);
    } catch (n) {
      u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }
  function L$1(n, u) {
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
  function M(l, u, i, t, r, o, f, c) {
    var s,
      a,
      v,
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
      l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
    }
    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (o = o && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
        (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }
      if ($(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k$2(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h$1(o[_]);
      c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_ || "option" === d && _ !== y.value) && I$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && I$1(l, "checked", _, y.checked, !1));
    }
    return l;
  }
  function N$1(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }
  function O(n, u, i) {
    var t, r;
    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || N$1(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null, n.__c = void 0;
    }
    if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && O(t[r], u, i || "function" != typeof n.type);
    i || null == n.__e || h$1(n.__e), n.__ = n.__e = n.__d = void 0;
  }
  function S(n, l, u) {
    return this.constructor(n, u);
  }
  function q$1(u, i, t) {
    var r, o, f;
    l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], z$2(i, u = (!r && t || i).__k = v$1(d$1, null, [u]), o || e$1, e$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), L$1(f, u);
  }
  function D$1(l, u, i) {
    var t,
      r,
      o,
      f = a$1({}, l.props);
    for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y$1(l.type, f, t || l.key, r || l.ref, null);
  }
  function E(n, l) {
    var u = {
      __c: l = "__cC" + f$1++,
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
            n.__e = !0, g$2(n);
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
  n = c$1.slice, l$1 = {
    __e: function (n, l, u, i) {
      for (var t, r, o; l = l.__;) if ((t = l.__c) && !t.__) try {
        if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(n)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(n, i || {}), o = t.__d), o) return t.__E = t;
      } catch (l) {
        n = l;
      }
      throw n;
    }
  }, u$1 = 0, _$2.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n && (n = n(a$1({}, u), this.props)), n && a$1(u, n), null != n && this.__v && (l && this._sb.push(l), g$2(this));
  }, _$2.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), g$2(this));
  }, _$2.prototype.render = d$1, t$1 = [], o$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m$1.__r = 0, f$1 = 0;
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
  function getBuildModeUnmemoized() {
    try {
      var _process, _process$env;
      if (((_process = process) === null || _process === void 0 ? void 0 : (_process$env = _process.env) === null || _process$env === void 0 ? void 0 : _process$env.NODE_ENV) === 'development') return 'development';
      return 'production';
    } catch (_e) {
      return "production";
    }
  }
  const getBuildMode = memoize(getBuildModeUnmemoized);

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
    if (getBuildMode() == 'production') return;
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
      return v$1(d$1, {}, lhs, rhs);
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
  function x(n, e) {
    function r(n) {
      var t = this.props.ref,
        r = t == n.ref;
      return !r && t && (t.call ? t(null) : t.current = null), e ? !e(this.props, n) || !r : C(this.props, n);
    }
    function u(e) {
      return this.shouldComponentUpdate = r, v$1(n, e);
    }
    return u.displayName = "Memo(" + (n.displayName || n.name) + ")", u.prototype.isReactComponent = !0, u.__f = !0, u;
  }
  (w.prototype = new _$2()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function (n, t) {
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
  }, (D.prototype = new _$2()).__c = function (n, t) {
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
    var i = e.__a && v$1(d$1, null, n.fallback);
    return i && (i.__h = null), [v$1(d$1, null, e.__a ? null : n.children), i];
  };
  var W = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) e.pop()();
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (V.prototype = new _$2()).__a = function (n) {
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
    var t = A(n.children);
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
  _$2.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (t) {
    Object.defineProperty(_$2.prototype, t, {
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
      "select" == t && u.multiple && Array.isArray(u.value) && (u.value = A(e.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == t && null != u.defaultValue && (u.value = A(e.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), n.props = u, e.class != e.className && (nn.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", nn));
    }
    n.$$typeof = z, tn && tn(n);
  };
  var en = l$1.__r;
  l$1.__r = function (n) {
    en && en(n), n.__c;
  };
  var rn = l$1.diffed;
  l$1.diffed = function (n) {
    rn && rn(n);
    var t = n.props,
      e = n.__e;
    null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value);
  };
  E(null);
  function getExclusiveTransitionContextPrememoization(exclusivityKey) {
    if (exclusivityKey == null) return null;
    return E(null);
  }
  const SwappableContext = E({
    getAnimateOnMount: () => false
  });
  /**
   * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
   *
   * If
   */
  const GetExclusiveTransitionContext = memoize(getExclusiveTransitionContextPrememoization);
  const CssClassContext = E({
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
  let globalCount = -1;
  function ExclusiveTransitionProvider(_ref3) {
    let {
      exclusivityKey,
      children
    } = _ref3;
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
  function useExclusiveTransition(_ref4) {
    let {
      transitionParameters: {
        show
      },
      exclusiveTransitionParameters: {
        forceClose,
        exclusivityKey
      }
    } = _ref4;
    const c = GetExclusiveTransitionContext(exclusivityKey);
    useEnsureStability("useExclusiveTransition", c == null);
    const context = c ? q(c) : null;
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
  const Swappable = x(forwardElementRef(function Swappable(_ref6, ref) {
    var _inline;
    let {
      children: c,
      inline,
      childrenAnimateOnMount,
      exclusivityKey,
      ...p
    } = _ref6;
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
    let ret = D$1(children, mergedWithChildren);
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
      },
      exclusiveTransitionParameters: {
        exclusivityKey
      }
    } = _ref7;
    useEnsureStability("useTransition", onVisibilityChange);
    const {
      getAnimateOnMount
    } = q(SwappableContext);
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
      modifiedChildren = o$1(SwappableContext.Provider, {
        value: resetContext,
        children: D$1(children, finalProps)
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
  const Fade = x(forwardElementRef(function Fade(_ref9, ref) {
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
      },
      exclusiveTransitionParameters: {
        exclusivityKey
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
  const Clip = x(forwardElementRef(function Clip(_ref15, ref) {
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
  const ClipFade = x(forwardElementRef(function ClipFade(_ref16, ref) {
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
  const Collapse = x(forwardElementRef(function Collapse(_ref18, ref) {
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
  const CollapseFade = x(forwardElementRef(function CollapseFade(_ref19, ref) {
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
   * exclusivityKey allows for convenient setups inside of a `SwapContainer`
   * (`flipInline={index - selectedIndex}` or similar.)
   *
   * @see `Transitionable`
   */
  const Flip = x(forwardElementRef(function Flip(_ref21, ref) {
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
  const Slide = x(forwardElementRef(function Slide(_ref23, ref) {
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
  const SlideFade = x(forwardElementRef(function SlideFade(_ref24, ref) {
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
  const Zoom = x(forwardElementRef(function Zoom(_ref30, ref) {
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
  const SlideZoom = x(forwardElementRef(function SlideZoom(_ref31, ref) {
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
  const SlideZoomFade = x(forwardElementRef(function SlideZoomFade(_ref32, ref) {
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
  const ZoomFade = x(forwardElementRef(function ZoomFade(_ref33, ref) {
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
    const [exclusive, setExclusive] = p(false);
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
    return o$1(d$1, {
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
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(min != 0 ? " \n  fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n  fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(min != 0 ? " \n        fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n        fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ClipDemo(_ref35) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref35;
    const [originX, setOriginX] = p(0.5);
    const [originY, setOriginY] = p(0);
    const [minX, setMinX] = p(1);
    const [minY, setMinY] = p(0);
    const [withFade, setWithFade] = p(true);
    p(false);
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
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ZoomSlideDemo(_ref36) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref36;
    const [originX, setOriginX] = p(0.5);
    const [originY, setOriginY] = p(0);
    const [minX, setMinX] = p(0.75);
    const [minY, setMinY] = p(0.75);
    const [slideX, setSlideX] = p(0.25);
    const [slideY, setSlideY] = p(0);
    const [withFade, setWithFade] = p(true);
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
      slideTargetInline: slideX * Math.sign(i - contentIndex) || null,
      slideTargetBlock: slideY * Math.sign(i - contentIndex) || null,
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
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n  slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n  slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}").concat(originX != 0.5 ? " \n        originX={".concat(originX, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n        slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n        slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function ZoomDemo(_ref37) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref37;
    const [originX, setOriginX] = p(0.5);
    const [originY, setOriginY] = p(0);
    const [minX, setMinX] = p(0.75);
    const [minY, setMinY] = p(0.75);
    const [withFade, setWithFade] = p(true);
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
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(exitVisibility ? " \n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  function SlideDemo(_ref38) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref38;
    const [slideX, setSlideX] = p(0.25);
    const [slideY, setSlideY] = p(0);
    const [withFade, setWithFade] = p(true);
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
      slideTargetInline: slideX * Math.sign(i - contentIndex) || null,
      slideTargetBlock: slideY * Math.sign(i - contentIndex),
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
  function CollapseDemo(_ref39) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref39;
    const [minBlockSize, setMinBlockSize] = p("0px");
    const onWithFadeInput = T$1(e => {
      setWithFade(e.target.checked);
      e.preventDefault();
    }, []);
    const [withFade, setWithFade] = p(true);
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
            children: "<".concat(CS, " show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(minBlockSize && minBlockSize != "0px" ? " minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  {/* These cards have padding, \n      and height doesn't include that, \n      but a wrapper's would */}\n  <div>\n    <Swappable>\n      <div className=\"card\">\n        <").concat(CS, " \n          show={").concat(contentIndex.toString(), " == 0}").concat(minBlockSize && minBlockSize != "0px" ? " \n          minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " \n          exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n          <div className=\"card-contents\">\n             {text}\n          </div>\n        </").concat(CS, ">\n      </div>\n    </Swappable>\n  </div>\n</").concat(CS, ">\n<").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n<").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />")
          })
        })]
      })]
    });
  }
  function FlipDemo(_ref40) {
    let {
      cardShow,
      contentIndex,
      exitVisibility,
      text,
      animateOnMount,
      exclusive
    } = _ref40;
    const [flipX, setFlipX] = p(0);
    const [flipY, setFlipY] = p(180);
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
      flipAngleInline: flipX * Math.sign(i - contentIndex) || null,
      flipAngleBlock: flipY * Math.sign(i - contentIndex) || null,
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
            children: "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  flipAngleInline={").concat(JSON.stringify(flipX), "} \n  flipAngleBlock={").concat(JSON.stringify(flipY), "} \n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}\n        flipAngleInline={").concat(JSON.stringify(flipX), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        flipAngleBlock={").concat(JSON.stringify(flipY), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")
          })
        })]
      })]
    });
  }
  requestAnimationFrame(() => {
    q$1(o$1(Demo, {}), document.getElementById("root"));
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29yZUpzRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc01hc2tlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL190b1NvdXJjZS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNOYXRpdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0TmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hDbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXNzb2NJbmRleE9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19MaXN0Q2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNLZXlhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE1hcERhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVEZWxldGUuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVHZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwQ2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZW1vaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODY0NTg3OGFhMjhhZGUzMDhhODNlZDIxZTg1YWVlMzA4ZDM4YmExMl9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvdXRpbC9tb2RlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDg2NDU4NzhhYTI4YWRlMzA4YTgzZWQyMWU4NWFlZTMwOGQzOGJhMTJfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDg2NDU4NzhhYTI4YWRlMzA4YTgzZWQyMWU4NWFlZTMwOGQzOGJhMTJfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4NjQ1ODc4YWEyOGFkZTMwOGE4M2VkMjFlODVhZWUzMDhkMzhiYTEyX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWdldHRlci50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4NjQ1ODc4YWEyOGFkZTMwOGE4M2VkMjFlODVhZWUzMDhkMzhiYTEyX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDg2NDU4NzhhYTI4YWRlMzA4YTgzZWQyMWU4NWFlZTMwOGQzOGJhMTJfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtY2hpbGRyZW4udHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODY0NTg3OGFhMjhhZGUzMDhhODNlZDIxZTg1YWVlMzA4ZDM4YmExMl9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDg2NDU4NzhhYTI4YWRlMzA4YTgzZWQyMWU4NWFlZTMwOGQzOGJhMTJfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4NjQ1ODc4YWEyOGFkZTMwOGE4M2VkMjFlODVhZWUzMDhkMzhiYTEyX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4NjQ1ODc4YWEyOGFkZTMwOGE4M2VkMjFlODVhZWUzMDhkMzhiYTEyX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLXByb3BzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDg2NDU4NzhhYTI4YWRlMzA4YTgzZWQyMWU4NWFlZTMwOGQzOGJhMTJfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vYmxvY2tpbmctZWxlbWVudHNAMC4xLjEvbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL3NyYy9ibG9ja2luZy1lbGVtZW50cy50cyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS93aWNnLWluZXJ0QDMuMS4yL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuZXNtLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODY0NTg3OGFhMjhhZGUzMDhhODNlZDIxZTg1YWVlMzA4ZDM4YmExMl9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLW1hbmFnZWQtY2hpbGRyZW4udHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAODY0NTg3OGFhMjhhZGUzMDhhODNlZDIxZTg1YWVlMzA4ZDM4YmExMl9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXN0YXRlLnRzeCIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvUHVyZUNvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvbWVtby5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvZm9yd2FyZFJlZi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvQ2hpbGRyZW4uanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3N1c3BlbnNlLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9zdXNwZW5zZS1saXN0LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9wb3J0YWxzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9yZW5kZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A4NjQ1ODc4YWEyOGFkZTMwOGE4M2VkMjFlODVhZWUzMDhkMzhiYTEyX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy90aW1pbmcvdXNlLWFuaW1hdGlvbi1mcmFtZS50c3giLCIuLi9zcmMvdXRpbC9jb250ZXh0LnRzeCIsIi4uL3NyYy9leGNsdXNpdmUudHN4IiwiLi4vc3JjL3V0aWwvdXRpbC50c3giLCIuLi9zcmMvc3dhcHBhYmxlLnRzeCIsIi4uL3NyYy90cmFuc2l0aW9uYWJsZS50c3giLCIuLi9zcmMvZmFkZS50c3giLCIuLi9zcmMvY2xpcC50c3giLCIuLi9zcmMvY2xpcC1mYWRlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS50c3giLCIuLi9zcmMvY29sbGFwc2UtZmFkZS50c3giLCIuLi9zcmMvZmxpcC50c3giLCIuLi9zcmMvc2xpZGUudHN4IiwiLi4vc3JjL3NsaWRlLWZhZGUudHN4IiwiLi4vc3JjL3pvb20udHN4IiwiLi4vc3JjL3NsaWRlLXpvb20udHN4IiwiLi4vc3JjL3NsaWRlLXpvb20tZmFkZS50c3giLCIuLi9zcmMvem9vbS1mYWRlLnRzeCIsIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVNUFRZX0FSUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdC8vIEB0cy1pZ25vcmUgV2UgY2hhbmdlIHRoZSB0eXBlIG9mIGBvYmpgIHRvIGJlIGBPICYgUGBcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBjaGlsZCBub2RlIGZyb20gaXRzIHBhcmVudCBpZiBhdHRhY2hlZC4gVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yXG4gKiBJRTExIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlKClgLiBVc2luZyB0aGlzIGZ1bmN0aW9uXG4gKiBpcyBzbWFsbGVyIHRoYW4gaW5jbHVkaW5nIGEgZGVkaWNhdGVkIHBvbHlmaWxsLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHRvIHJlbW92ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG5cdGxldCBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuXHRpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwiaW1wb3J0IHsgX2NhdGNoRXJyb3IgfSBmcm9tICcuL2RpZmYvY2F0Y2gtZXJyb3InO1xuXG4vKipcbiAqIFRoZSBgb3B0aW9uYCBvYmplY3QgY2FuIHBvdGVudGlhbGx5IGNvbnRhaW4gY2FsbGJhY2sgZnVuY3Rpb25zXG4gKiB0aGF0IGFyZSBjYWxsZWQgZHVyaW5nIHZhcmlvdXMgc3RhZ2VzIG9mIG91ciByZW5kZXJlci4gVGhpcyBpcyB0aGVcbiAqIGZvdW5kYXRpb24gb24gd2hpY2ggYWxsIG91ciBhZGRvbnMgbGlrZSBgcHJlYWN0L2RlYnVnYCwgYHByZWFjdC9jb21wYXRgLFxuICogYW5kIGBwcmVhY3QvaG9va3NgIGFyZSBiYXNlZCBvbi4gU2VlIHRoZSBgT3B0aW9uc2AgdHlwZSBpbiBgaW50ZXJuYWwuZC50c2BcbiAqIGZvciBhIGZ1bGwgbGlzdCBvZiBhdmFpbGFibGUgb3B0aW9uIGhvb2tzIChtb3N0IGVkaXRvcnMvSURFcyBhbGxvdyB5b3UgdG9cbiAqIGN0cmwrY2xpY2sgb3IgY21kK2NsaWNrIG9uIG1hYyB0aGUgdHlwZSBkZWZpbml0aW9uIGJlbG93KS5cbiAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfVxuICovXG5jb25zdCBvcHRpb25zID0ge1xuXHRfY2F0Y2hFcnJvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgb3B0aW9ucztcbiIsImltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBDcmVhdGUgYW4gdmlydHVhbCBub2RlICh1c2VkIGZvciBKU1gpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogY29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IFtwcm9wc10gVGhlIHByb3BlcnRpZXMgb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4nKS5Db21wb25lbnRDaGlsZHJlbj59IFtjaGlsZHJlbl0gVGhlIGNoaWxkcmVuIG9mIHRoZSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IG51bGwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgbnVsbCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdC8vIF9uZXh0RG9tIG11c3QgYmUgaW5pdGlhbGl6ZWQgdG8gdW5kZWZpbmVkIGIvYyBpdCB3aWxsIGV2ZW50dWFsbHlcblx0XHQvLyBiZSBzZXQgdG8gZG9tLm5leHRTaWJsaW5nIHdoaWNoIGNhbiByZXR1cm4gYG51bGxgIGFuZCBpdCBpcyBpbXBvcnRhbnRcblx0XHQvLyB0byBiZSBhYmxlIHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gYW4gdW5pbml0aWFsaXplZCBfbmV4dERvbSBhbmRcblx0XHQvLyBhIF9uZXh0RG9tIHRoYXQgaGFzIGJlZW4gc2V0IHRvIGBudWxsYFxuXHRcdF9uZXh0RG9tOiB1bmRlZmluZWQsXG5cdFx0X2NvbXBvbmVudDogbnVsbCxcblx0XHRfaHlkcmF0aW5nOiBudWxsLFxuXHRcdGNvbnN0cnVjdG9yOiB1bmRlZmluZWQsXG5cdFx0X29yaWdpbmFsOiBvcmlnaW5hbCA9PSBudWxsID8gKyt2bm9kZUlkIDogb3JpZ2luYWxcblx0fTtcblxuXHQvLyBPbmx5IGludm9rZSB0aGUgdm5vZGUgaG9vayBpZiB0aGlzIHdhcyAqbm90KiBhIGRpcmVjdCBjb3B5OlxuXHRpZiAob3JpZ2luYWwgPT0gbnVsbCAmJiBvcHRpb25zLnZub2RlICE9IG51bGwpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcblx0cmV0dXJuIHsgY3VycmVudDogbnVsbCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQocHJvcHMpIHtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGhlIGFyZ3VtZW50IGlzIGEgdmFsaWQgUHJlYWN0IFZOb2RlLlxuICogQHBhcmFtIHsqfSB2bm9kZVxuICogQHJldHVybnMge3Zub2RlIGlzIGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZEVsZW1lbnQgPSB2bm9kZSA9PlxuXHR2bm9kZSAhPSBudWxsICYmIHZub2RlLmNvbnN0cnVjdG9yID09PSB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpIHtcblx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBjb21wb25lbnQgc3RhdGUgYW5kIHNjaGVkdWxlIGEgcmUtcmVuZGVyLlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7b2JqZWN0IHwgKChzOiBvYmplY3QsIHA6IG9iamVjdCkgPT4gb2JqZWN0KX0gdXBkYXRlIEEgaGFzaCBvZiBzdGF0ZVxuICogcHJvcGVydGllcyB0byB1cGRhdGUgd2l0aCBuZXcgdmFsdWVzIG9yIGEgZnVuY3Rpb24gdGhhdCBnaXZlbiB0aGUgY3VycmVudFxuICogc3RhdGUgYW5kIHByb3BzIHJldHVybnMgYSBuZXcgcGFydGlhbCBzdGF0ZVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uY2UgY29tcG9uZW50IHN0YXRlIGlzXG4gKiB1cGRhdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbih1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gbnVsbCAmJiB0aGlzLl9uZXh0U3RhdGUgIT09IHRoaXMuc3RhdGUpIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGUgPSBhc3NpZ24oe30sIHRoaXMuc3RhdGUpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB1cGRhdGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIFNvbWUgbGlicmFyaWVzIGxpa2UgYGltbWVyYCBtYXJrIHRoZSBjdXJyZW50IHN0YXRlIGFzIHJlYWRvbmx5LFxuXHRcdC8vIHByZXZlbnRpbmcgdXMgZnJvbSBtdXRhdGluZyBpdCwgc28gd2UgbmVlZCB0byBjbG9uZSBpdC4gU2VlICMyNzE2XG5cdFx0dXBkYXRlID0gdXBkYXRlKGFzc2lnbih7fSwgcyksIHRoaXMucHJvcHMpO1xuXHR9XG5cblx0aWYgKHVwZGF0ZSkge1xuXHRcdGFzc2lnbihzLCB1cGRhdGUpO1xuXHR9XG5cblx0Ly8gU2tpcCB1cGRhdGUgaWYgdXBkYXRlciBmdW5jdGlvbiByZXR1cm5lZCBudWxsXG5cdGlmICh1cGRhdGUgPT0gbnVsbCkgcmV0dXJuO1xuXG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0dGhpcy5fc3RhdGVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0fVxuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogSW1tZWRpYXRlbHkgcGVyZm9ybSBhIHN5bmNocm9ub3VzIHJlLXJlbmRlciBvZiB0aGUgY29tcG9uZW50XG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBbY2FsbGJhY2tdIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpc1xuICogcmUtcmVuZGVyZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdGlmICh0aGlzLl92bm9kZSkge1xuXHRcdC8vIFNldCByZW5kZXIgbW9kZSBzbyB0aGF0IHdlIGNhbiBkaWZmZXJlbnRpYXRlIHdoZXJlIHRoZSByZW5kZXIgcmVxdWVzdFxuXHRcdC8vIGlzIGNvbWluZyBmcm9tLiBXZSBuZWVkIHRoaXMgYmVjYXVzZSBmb3JjZVVwZGF0ZSBzaG91bGQgbmV2ZXIgY2FsbFxuXHRcdC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuXHRcdHRoaXMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRpZiAoY2FsbGJhY2spIHRoaXMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEFjY2VwdHMgYHByb3BzYCBhbmQgYHN0YXRlYCwgYW5kIHJldHVybnMgYSBuZXcgVmlydHVhbCBET00gdHJlZSB0byBidWlsZC5cbiAqIFZpcnR1YWwgRE9NIGlzIGdlbmVyYWxseSBjb25zdHJ1Y3RlZCB2aWEgW0pTWF0oaHR0cDovL2phc29uZm9ybWF0LmNvbS93dGYtaXMtanN4KS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBQcm9wcyAoZWc6IEpTWCBhdHRyaWJ1dGVzKSByZWNlaXZlZCBmcm9tIHBhcmVudFxuICogZWxlbWVudC9jb21wb25lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSBUaGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgQ29udGV4dCBvYmplY3QsIGFzIHJldHVybmVkIGJ5IHRoZSBuZWFyZXN0XG4gKiBhbmNlc3RvcidzIGBnZXRDaGlsZENvbnRleHQoKWBcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW5kZXgnKS5Db21wb25lbnRDaGlsZHJlbiB8IHZvaWR9XG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IG51bGwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9wYXJlbnQuX2NoaWxkcmVuLmluZGV4T2Yodm5vZGUpICsgMSlcblx0XHRcdDogbnVsbDtcblx0fVxuXG5cdGxldCBzaWJsaW5nO1xuXHRmb3IgKDsgY2hpbGRJbmRleCA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGNoaWxkSW5kZXgrKykge1xuXHRcdHNpYmxpbmcgPSB2bm9kZS5fY2hpbGRyZW5bY2hpbGRJbmRleF07XG5cblx0XHRpZiAoc2libGluZyAhPSBudWxsICYmIHNpYmxpbmcuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHQvLyBTaW5jZSB1cGRhdGVQYXJlbnREb21Qb2ludGVycyBrZWVwcyBfZG9tIHBvaW50ZXIgY29ycmVjdCxcblx0XHRcdC8vIHdlIGNhbiByZWx5IG9uIF9kb20gdG8gdGVsbCB1cyBpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYVxuXHRcdFx0Ly8gcmVuZGVyZWQgRE9NIG5vZGUsIGFuZCB3aGF0IHRoZSBmaXJzdCByZW5kZXJlZCBET00gbm9kZSBpc1xuXHRcdFx0cmV0dXJuIHNpYmxpbmcuX2RvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBnZXQgaGVyZSwgd2UgaGF2ZSBub3QgZm91bmQgYSBET00gbm9kZSBpbiB0aGlzIHZub2RlJ3MgY2hpbGRyZW4uXG5cdC8vIFdlIG11c3QgcmVzdW1lIGZyb20gdGhpcyB2bm9kZSdzIHNpYmxpbmcgKGluIGl0J3MgcGFyZW50IF9jaGlsZHJlbiBhcnJheSlcblx0Ly8gT25seSBjbGltYiB1cCBhbmQgc2VhcmNoIHRoZSBwYXJlbnQgaWYgd2UgYXJlbid0IHNlYXJjaGluZyB0aHJvdWdoIGEgRE9NXG5cdC8vIFZOb2RlIChtZWFuaW5nIHdlIHJlYWNoZWQgdGhlIERPTSBwYXJlbnQgb2YgdGhlIG9yaWdpbmFsIHZub2RlIHRoYXQgYmVnYW5cblx0Ly8gdGhlIHNlYXJjaClcblx0cmV0dXJuIHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IG51bGw7XG59XG5cbi8qKlxuICogVHJpZ2dlciBpbi1wbGFjZSByZS1yZW5kZXJpbmcgb2YgYSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXHRsZXQgdm5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdG9sZERvbSA9IHZub2RlLl9kb20sXG5cdFx0cGFyZW50RG9tID0gY29tcG9uZW50Ll9wYXJlbnREb207XG5cblx0aWYgKHBhcmVudERvbSkge1xuXHRcdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRcdGNvbnN0IG9sZFZOb2RlID0gYXNzaWduKHt9LCB2bm9kZSk7XG5cdFx0b2xkVk5vZGUuX29yaWdpbmFsID0gdm5vZGUuX29yaWdpbmFsICsgMTtcblxuXHRcdGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHR2bm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Y29tcG9uZW50Ll9nbG9iYWxDb250ZXh0LFxuXHRcdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZyAhPSBudWxsID8gW29sZERvbV0gOiBudWxsLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20gPT0gbnVsbCA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogb2xkRG9tLFxuXHRcdFx0dm5vZGUuX2h5ZHJhdGluZ1xuXHRcdCk7XG5cdFx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUpO1xuXG5cdFx0aWYgKHZub2RlLl9kb20gIT0gb2xkRG9tKSB7XG5cdFx0XHR1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpIHtcblx0aWYgKCh2bm9kZSA9IHZub2RlLl9wYXJlbnQpICE9IG51bGwgJiYgdm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjaGlsZCA9IHZub2RlLl9jaGlsZHJlbltpXTtcblx0XHRcdGlmIChjaGlsZCAhPSBudWxsICYmIGNoaWxkLl9kb20gIT0gbnVsbCkge1xuXHRcdFx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gY2hpbGQuX2RvbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFRoZSByZW5kZXIgcXVldWVcbiAqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fVxuICovXG5sZXQgcmVyZW5kZXJRdWV1ZSA9IFtdO1xuXG4vKlxuICogVGhlIHZhbHVlIG9mIGBDb21wb25lbnQuZGVib3VuY2VgIG11c3QgYXN5bmNocm9ub3VzbHkgaW52b2tlIHRoZSBwYXNzZWQgaW4gY2FsbGJhY2suIEl0IGlzXG4gKiBpbXBvcnRhbnQgdGhhdCBjb250cmlidXRvcnMgdG8gUHJlYWN0IGNhbiBjb25zaXN0ZW50bHkgcmVhc29uIGFib3V0IHdoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCwgZXRjLlxuICogZG8sIGFuZCB3aGVuIHRoZWlyIGVmZmVjdHMgd2lsbCBiZSBhcHBsaWVkLiBTZWUgdGhlIGxpbmtzIGJlbG93IGZvciBzb21lIGZ1cnRoZXIgcmVhZGluZyBvbiBkZXNpZ25pbmdcbiAqIGFzeW5jaHJvbm91cyBBUElzLlxuICogKiBbRGVzaWduaW5nIEFQSXMgZm9yIEFzeW5jaHJvbnldKGh0dHBzOi8vYmxvZy5penMubWUvMjAxMy8wOC9kZXNpZ25pbmctYXBpcy1mb3ItYXN5bmNocm9ueSlcbiAqICogW0NhbGxiYWNrcyBzeW5jaHJvbm91cyBhbmQgYXN5bmNocm9ub3VzXShodHRwczovL2Jsb2cub21ldGVyLmNvbS8yMDExLzA3LzI0L2NhbGxiYWNrcy1zeW5jaHJvbm91cy1hbmQtYXN5bmNocm9ub3VzLylcbiAqL1xuXG5sZXQgcHJldkRlYm91bmNlO1xuXG5jb25zdCBkZWZlciA9XG5cdHR5cGVvZiBQcm9taXNlID09ICdmdW5jdGlvbidcblx0XHQ/IFByb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSlcblx0XHQ6IHNldFRpbWVvdXQ7XG5cbi8qKlxuICogRW5xdWV1ZSBhIHJlcmVuZGVyIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYyBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnF1ZXVlUmVuZGVyKGMpIHtcblx0aWYgKFxuXHRcdCghYy5fZGlydHkgJiZcblx0XHRcdChjLl9kaXJ0eSA9IHRydWUpICYmXG5cdFx0XHRyZXJlbmRlclF1ZXVlLnB1c2goYykgJiZcblx0XHRcdCFwcm9jZXNzLl9yZXJlbmRlckNvdW50KyspIHx8XG5cdFx0cHJldkRlYm91bmNlICE9PSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHRsZXQgYztcblx0cmVyZW5kZXJRdWV1ZS5zb3J0KChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGgpO1xuXHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0Ly8gcHJvY2VzcygpIGNhbGxzIGZyb20gZ2V0dGluZyBzY2hlZHVsZWQgd2hpbGUgYHF1ZXVlYCBpcyBzdGlsbCBiZWluZyBjb25zdW1lZC5cblx0d2hpbGUgKChjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpKSkge1xuXHRcdGlmIChjLl9kaXJ0eSkge1xuXHRcdFx0bGV0IHJlbmRlclF1ZXVlTGVuZ3RoID0gcmVyZW5kZXJRdWV1ZS5sZW5ndGg7XG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiByZW5kZXJRdWV1ZUxlbmd0aCkge1xuXHRcdFx0XHQvLyBXaGVuIGkuZS4gcmVyZW5kZXJpbmcgYSBwcm92aWRlciBhZGRpdGlvbmFsIG5ldyBpdGVtcyBjYW4gYmUgaW5qZWN0ZWQsIHdlIHdhbnQgdG9cblx0XHRcdFx0Ly8ga2VlcCB0aGUgb3JkZXIgZnJvbSB0b3AgdG8gYm90dG9tIHdpdGggdGhvc2UgbmV3IGl0ZW1zIHNvIHdlIGNhbiBoYW5kbGUgdGhlbSBpbiBhXG5cdFx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydCgoYSwgYikgPT4gYS5fdm5vZGUuX2RlcHRoIC0gYi5fdm5vZGUuX2RlcHRoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG59XG5cbnByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSAwO1xuIiwiaW1wb3J0IHsgZW5xdWV1ZVJlbmRlciB9IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IGxldCBpID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjb250ZXh0SWQpIHtcblx0Y29udGV4dElkID0gJ19fY0MnICsgaSsrO1xuXG5cdGNvbnN0IGNvbnRleHQgPSB7XG5cdFx0X2lkOiBjb250ZXh0SWQsXG5cdFx0X2RlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0Q29uc3VtZXIocHJvcHMsIGNvbnRleHRWYWx1ZSkge1xuXHRcdFx0Ly8gcmV0dXJuIHByb3BzLmNoaWxkcmVuKFxuXHRcdFx0Ly8gXHRjb250ZXh0W2NvbnRleHRJZF0gPyBjb250ZXh0W2NvbnRleHRJZF0ucHJvcHMudmFsdWUgOiBkZWZhdWx0VmFsdWVcblx0XHRcdC8vICk7XG5cdFx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0XHR9LFxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9ICovXG5cdFx0UHJvdmlkZXIocHJvcHMpIHtcblx0XHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXX0gKi9cblx0XHRcdFx0bGV0IHN1YnMgPSBbXTtcblx0XHRcdFx0bGV0IGN0eCA9IHt9O1xuXHRcdFx0XHRjdHhbY29udGV4dElkXSA9IHRoaXM7XG5cblx0XHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihfcHJvcHMpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gX3Byb3BzLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHQvLyBJIHRoaW5rIHRoZSBmb3JjZWQgdmFsdWUgcHJvcGFnYXRpb24gaGVyZSB3YXMgb25seSBuZWVkZWQgd2hlbiBgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZ2Agd2FzIGJlaW5nIGJ5cGFzc2VkOlxuXHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9jb21taXQvNGQzMzlmYjgwM2JlYTA5ZTlmMTk4YWJmMzhjYTFiZjhlYTRiNzc3MSNkaWZmLTU0NjgyY2UzODA5MzVhNzE3ZTQxYjhiZmM1NDczN2Y2UjM1OFxuXHRcdFx0XHRcdFx0Ly8gSW4gdGhvc2UgY2FzZXMgdGhvdWdoLCBldmVuIHdpdGggdGhlIHZhbHVlIGNvcnJlY3RlZCwgd2UncmUgZG91YmxlLXJlbmRlcmluZyBhbGwgbm9kZXMuXG5cdFx0XHRcdFx0XHQvLyBJdCBtaWdodCBiZSBiZXR0ZXIgdG8ganVzdCB0ZWxsIGZvbGtzIG5vdCB0byB1c2UgZm9yY2Utc3luYyBtb2RlLlxuXHRcdFx0XHRcdFx0Ly8gQ3VycmVudGx5LCB1c2luZyBgdXNlQ29udGV4dCgpYCBpbiBhIGNsYXNzIGNvbXBvbmVudCB3aWxsIG92ZXJ3cml0ZSBpdHMgYHRoaXMuY29udGV4dGAgdmFsdWUuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dCA9IF9wcm9wcy52YWx1ZTtcblx0XHRcdFx0XHRcdC8vIFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdC8vIH0pO1xuXG5cdFx0XHRcdFx0XHQvLyBzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHQvLyBcdGMuY29udGV4dFtjb250ZXh0SWRdID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0XHRzdWJzLnNvbWUoYyA9PiB7XG5cdFx0XHRcdFx0XHRcdGMuX2ZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0ZW5xdWV1ZVJlbmRlcihjKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRcdHN1YnMucHVzaChjKTtcblx0XHRcdFx0XHRsZXQgb2xkID0gYy5jb21wb25lbnRXaWxsVW5tb3VudDtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3Vicy5zcGxpY2Uoc3Vicy5pbmRleE9mKGMpLCAxKTtcblx0XHRcdFx0XHRcdGlmIChvbGQpIG9sZC5jYWxsKGMpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcblx0XHR9XG5cdH07XG5cblx0Ly8gRGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB3aGVuIGl0XG5cdC8vIGVuY291bnRlcnMgYSBQcm92aWRlci4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gc3VwcG9ydFxuXHQvLyBzZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gdGhlIGNvbnRleHQgb2JqZWN0IGluc3RlYWRcblx0Ly8gb2Ygb24gdGhlIGNvbXBvbmVudCBpdHNlbGYuIFNlZTpcblx0Ly8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2NvbnRleHQuaHRtbCNjb250ZXh0ZGlzcGxheW5hbWVcblxuXHRyZXR1cm4gKGNvbnRleHQuUHJvdmlkZXIuX2NvbnRleHRSZWYgPSBjb250ZXh0LkNvbnN1bWVyLmNvbnRleHRUeXBlID0gY29udGV4dCk7XG59XG4iLCJleHBvcnQgY29uc3QgRU1QVFlfT0JKID0ge307XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID0gL2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkosIEVNUFRZX0FSUiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB3aG9zZVxuICogY2hpbGRyZW4gYXJlIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsXG4gKiBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBvbGRQYXJlbnRWTm9kZSBUaGUgb2xkIHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBuZXdQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QgLSBtb2RpZmllZCBieSBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBET00gbm9kZSBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NXG4gKiBlbGVtZW50IGFueSBuZXcgZG9tIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0XG4gKiByZW5kZXIgKGV4Y2VwdCB3aGVuIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nXG4gKiBGcmFnbWVudHMgdGhhdCBoYXZlIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IGksIGosIG9sZFZOb2RlLCBjaGlsZFZOb2RlLCBuZXdEb20sIGZpcnN0Q2hpbGREb20sIHJlZnM7XG5cblx0Ly8gVGhpcyBpcyBhIGNvbXByZXNzaW9uIG9mIG9sZFBhcmVudFZOb2RlIT1udWxsICYmIG9sZFBhcmVudFZOb2RlICE9IEVNUFRZX09CSiAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4gfHwgRU1QVFlfQVJSXG5cdC8vIGFzIEVNUFRZX09CSi5fY2hpbGRyZW4gc2hvdWxkIGJlIGB1bmRlZmluZWRgLlxuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG9sZENoaWxkcmVuTGVuZ3RoID0gb2xkQ2hpbGRyZW4ubGVuZ3RoO1xuXG5cdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRmb3IgKGkgPSAwOyBpIDwgcmVuZGVyUmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRWTm9kZSA9IHJlbmRlclJlc3VsdFtpXTtcblxuXHRcdGlmIChjaGlsZFZOb2RlID09IG51bGwgfHwgdHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnXG5cdFx0KSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGVcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkVk5vZGUpKSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdEZyYWdtZW50LFxuXHRcdFx0XHR7IGNoaWxkcmVuOiBjaGlsZFZOb2RlIH0sXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChjaGlsZFZOb2RlLl9kZXB0aCA+IDApIHtcblx0XHRcdC8vIFZOb2RlIGlzIGFscmVhZHkgaW4gdXNlLCBjbG9uZSBpdC4gVGhpcyBjYW4gaGFwcGVuIGluIHRoZSBmb2xsb3dpbmdcblx0XHRcdC8vIHNjZW5hcmlvOlxuXHRcdFx0Ly8gICBjb25zdCByZXVzZSA9IDxkaXYgLz5cblx0XHRcdC8vICAgPGRpdj57cmV1c2V9PHNwYW4gLz57cmV1c2V9PC9kaXY+XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY3JlYXRlVk5vZGUoXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5wcm9wcyxcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXksXG5cdFx0XHRcdGNoaWxkVk5vZGUucmVmID8gY2hpbGRWTm9kZS5yZWYgOiBudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNoaWxkVk5vZGU7XG5cdFx0fVxuXG5cdFx0Ly8gVGVyc2VyIHJlbW92ZXMgdGhlIGBjb250aW51ZWAgaGVyZSBhbmQgd3JhcHMgdGhlIGxvb3AgYm9keVxuXHRcdC8vIGluIGEgYGlmIChjaGlsZFZOb2RlKSB7IC4uLiB9IGNvbmRpdGlvblxuXHRcdGlmIChjaGlsZFZOb2RlID09IG51bGwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNoaWxkVk5vZGUuX3BhcmVudCA9IG5ld1BhcmVudFZOb2RlO1xuXHRcdGNoaWxkVk5vZGUuX2RlcHRoID0gbmV3UGFyZW50Vk5vZGUuX2RlcHRoICsgMTtcblxuXHRcdC8vIENoZWNrIGlmIHdlIGZpbmQgYSBjb3JyZXNwb25kaW5nIGVsZW1lbnQgaW4gb2xkQ2hpbGRyZW4uXG5cdFx0Ly8gSWYgZm91bmQsIGRlbGV0ZSB0aGUgYXJyYXkgaXRlbSBieSBzZXR0aW5nIHRvIGB1bmRlZmluZWRgLlxuXHRcdC8vIFdlIHVzZSBgdW5kZWZpbmVkYCwgYXMgYG51bGxgIGlzIHJlc2VydmVkIGZvciBlbXB0eSBwbGFjZWhvbGRlcnNcblx0XHQvLyAoaG9sZXMpLlxuXHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5baV07XG5cblx0XHRpZiAoXG5cdFx0XHRvbGRWTm9kZSA9PT0gbnVsbCB8fFxuXHRcdFx0KG9sZFZOb2RlICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGUpXG5cdFx0KSB7XG5cdFx0XHRvbGRDaGlsZHJlbltpXSA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRWl0aGVyIG9sZFZOb2RlID09PSB1bmRlZmluZWQgb3Igb2xkQ2hpbGRyZW5MZW5ndGggPiAwLFxuXHRcdFx0Ly8gc28gYWZ0ZXIgdGhpcyBsb29wIG9sZFZOb2RlID09IG51bGwgb3Igb2xkVk5vZGUgaXMgYSB2YWxpZCB2YWx1ZS5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBvbGRDaGlsZHJlbkxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bal07XG5cdFx0XHRcdC8vIElmIGNoaWxkVk5vZGUgaXMgdW5rZXllZCwgd2Ugb25seSBtYXRjaCBzaW1pbGFybHkgdW5rZXllZCBub2Rlcywgb3RoZXJ3aXNlIHdlIG1hdGNoIGJ5IGtleS5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIG1hdGNoIGJ5IHR5cGUgKGluIGVpdGhlciBjYXNlKS5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG9sZFZOb2RlICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlID09PSBvbGRWTm9kZS50eXBlXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdG9sZENoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9sZFZOb2RlID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRvbGRWTm9kZSA9IG9sZFZOb2RlIHx8IEVNUFRZX09CSjtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRpc1N2Zyxcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRvbGREb20sXG5cdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdCk7XG5cblx0XHRuZXdEb20gPSBjaGlsZFZOb2RlLl9kb207XG5cblx0XHRpZiAoKGogPSBjaGlsZFZOb2RlLnJlZikgJiYgb2xkVk5vZGUucmVmICE9IGopIHtcblx0XHRcdGlmICghcmVmcykgcmVmcyA9IFtdO1xuXHRcdFx0aWYgKG9sZFZOb2RlLnJlZikgcmVmcy5wdXNoKG9sZFZOb2RlLnJlZiwgbnVsbCwgY2hpbGRWTm9kZSk7XG5cdFx0XHRyZWZzLnB1c2goaiwgY2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSwgY2hpbGRWTm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG5ld0RvbSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBudWxsKSB7XG5cdFx0XHRcdGZpcnN0Q2hpbGREb20gPSBuZXdEb207XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUuX2NoaWxkcmVuID09PSBvbGRWTm9kZS5fY2hpbGRyZW5cblx0XHRcdCkge1xuXHRcdFx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKFxuXHRcdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRcdHBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkRG9tID0gcGxhY2VDaGlsZChcblx0XHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0XHRvbGRDaGlsZHJlbixcblx0XHRcdFx0XHRuZXdEb20sXG5cdFx0XHRcdFx0b2xkRG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgbmV3UGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIEJlY2F1c2UgdGhlIG5ld1BhcmVudFZOb2RlIGlzIEZyYWdtZW50LWxpa2UsIHdlIG5lZWQgdG8gc2V0IGl0J3Ncblx0XHRcdFx0Ly8gX25leHREb20gcHJvcGVydHkgdG8gdGhlIG5leHRTaWJsaW5nIG9mIGl0cyBsYXN0IGNoaWxkIERPTSBub2RlLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBgb2xkRG9tYCBjb250YWlucyB0aGUgY29ycmVjdCB2YWx1ZSBoZXJlIGJlY2F1c2UgaWYgdGhlIGxhc3QgY2hpbGRcblx0XHRcdFx0Ly8gaXMgYSBGcmFnbWVudC1saWtlLCB0aGVuIG9sZERvbSBoYXMgYWxyZWFkeSBiZWVuIHNldCB0byB0aGF0IGNoaWxkJ3MgX25leHREb20uXG5cdFx0XHRcdC8vIElmIHRoZSBsYXN0IGNoaWxkIGlzIGEgRE9NIFZOb2RlLCB0aGVuIG9sZERvbSB3aWxsIGJlIHNldCB0byB0aGF0IERPTVxuXHRcdFx0XHQvLyBub2RlJ3MgbmV4dFNpYmxpbmcuXG5cdFx0XHRcdG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tID0gb2xkRG9tO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRvbGREb20gJiZcblx0XHRcdG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tICYmXG5cdFx0XHRvbGREb20ucGFyZW50Tm9kZSAhPSBwYXJlbnREb21cblx0XHQpIHtcblx0XHRcdC8vIFRoZSBhYm92ZSBjb25kaXRpb24gaXMgdG8gaGFuZGxlIG51bGwgcGxhY2Vob2xkZXJzLiBTZWUgdGVzdCBpbiBwbGFjZWhvbGRlci50ZXN0LmpzOlxuXHRcdFx0Ly8gYGVmZmljaWVudGx5IHJlcGxhY2UgbnVsbCBwbGFjZWhvbGRlcnMgaW4gcGFyZW50IHJlcmVuZGVyc2Bcblx0XHRcdG9sZERvbSA9IGdldERvbVNpYmxpbmcob2xkVk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS5cblx0Zm9yIChpID0gb2xkQ2hpbGRyZW5MZW5ndGg7IGktLTsgKSB7XG5cdFx0aWYgKG9sZENoaWxkcmVuW2ldICE9IG51bGwpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIG5ld1BhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0XHRvbGRDaGlsZHJlbltpXS5fZG9tICE9IG51bGwgJiZcblx0XHRcdFx0b2xkQ2hpbGRyZW5baV0uX2RvbSA9PSBuZXdQYXJlbnRWTm9kZS5fbmV4dERvbVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIElmIHRoZSBuZXdQYXJlbnRWTm9kZS5fX25leHREb20gcG9pbnRzIHRvIGEgZG9tIG5vZGUgdGhhdCBpcyBhYm91dCB0b1xuXHRcdFx0XHQvLyBiZSB1bm1vdW50ZWQsIHRoZW4gZ2V0IHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhhdCB2bm9kZSBhbmQgc2V0XG5cdFx0XHRcdC8vIF9uZXh0RG9tIHRvIGl0XG5cdFx0XHRcdG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tID0gZ2V0TGFzdERvbShvbGRQYXJlbnRWTm9kZSkubmV4dFNpYmxpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHVubW91bnQob2xkQ2hpbGRyZW5baV0sIG9sZENoaWxkcmVuW2ldKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgcmVmcyBvbmx5IGFmdGVyIHVubW91bnRcblx0aWYgKHJlZnMpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcmVmcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXBwbHlSZWYocmVmc1tpXSwgcmVmc1srK2ldLCByZWZzWysraV0pO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZW9yZGVyQ2hpbGRyZW4oY2hpbGRWTm9kZSwgb2xkRG9tLCBwYXJlbnREb20pIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXHRsZXQgYyA9IGNoaWxkVk5vZGUuX2NoaWxkcmVuO1xuXHRsZXQgdG1wID0gMDtcblx0Zm9yICg7IGMgJiYgdG1wIDwgYy5sZW5ndGg7IHRtcCsrKSB7XG5cdFx0bGV0IHZub2RlID0gY1t0bXBdO1xuXHRcdGlmICh2bm9kZSkge1xuXHRcdFx0Ly8gV2UgdHlwaWNhbGx5IGVudGVyIHRoaXMgY29kZSBwYXRoIG9uIHNDVSBiYWlsb3V0LCB3aGVyZSB3ZSBjb3B5XG5cdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLiBJZiB0aGF0IGlzIHRoZSBjYXNlLCB3ZSBuZWVkXG5cdFx0XHQvLyB0byB1cGRhdGUgdGhlIG9sZCBjaGlsZHJlbidzIF9wYXJlbnQgcG9pbnRlciB0byBwb2ludCB0byB0aGUgbmV3Vk5vZGVcblx0XHRcdC8vIChjaGlsZFZOb2RlIGhlcmUpLlxuXHRcdFx0dm5vZGUuX3BhcmVudCA9IGNoaWxkVk5vZGU7XG5cblx0XHRcdGlmICh0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG9sZERvbSA9IHJlb3JkZXJDaGlsZHJlbih2bm9kZSwgb2xkRG9tLCBwYXJlbnREb20pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2xkRG9tID0gcGxhY2VDaGlsZChwYXJlbnREb20sIHZub2RlLCB2bm9kZSwgYywgdm5vZGUuX2RvbSwgb2xkRG9tKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYW5kIGxvb3AgdGhyb3VnaCB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWRcbiAqIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0NoaWxkQXJyYXkoY2hpbGRyZW4sIG91dCkge1xuXHRvdXQgPSBvdXQgfHwgW107XG5cdGlmIChjaGlsZHJlbiA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZHJlbiA9PSAnYm9vbGVhbicpIHtcblx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuXHRcdGNoaWxkcmVuLnNvbWUoY2hpbGQgPT4ge1xuXHRcdFx0dG9DaGlsZEFycmF5KGNoaWxkLCBvdXQpO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG91dC5wdXNoKGNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBwbGFjZUNoaWxkKFxuXHRwYXJlbnREb20sXG5cdGNoaWxkVk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0bmV3RG9tLFxuXHRvbGREb21cbikge1xuXHRsZXQgbmV4dERvbTtcblx0aWYgKGNoaWxkVk5vZGUuX25leHREb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdC8vIE9ubHkgRnJhZ21lbnRzIG9yIGNvbXBvbmVudHMgdGhhdCByZXR1cm4gRnJhZ21lbnQgbGlrZSBWTm9kZXMgd2lsbFxuXHRcdC8vIGhhdmUgYSBub24tdW5kZWZpbmVkIF9uZXh0RG9tLiBDb250aW51ZSB0aGUgZGlmZiBmcm9tIHRoZSBzaWJsaW5nXG5cdFx0Ly8gb2YgbGFzdCBET00gY2hpbGQgb2YgdGhpcyBjaGlsZCBWTm9kZVxuXHRcdG5leHREb20gPSBjaGlsZFZOb2RlLl9uZXh0RG9tO1xuXG5cdFx0Ly8gRWFnZXJseSBjbGVhbnVwIF9uZXh0RG9tLiBXZSBkb24ndCBuZWVkIHRvIHBlcnNpc3QgdGhlIHZhbHVlIGJlY2F1c2Vcblx0XHQvLyBpdCBpcyBvbmx5IHVzZWQgYnkgYGRpZmZDaGlsZHJlbmAgdG8gZGV0ZXJtaW5lIHdoZXJlIHRvIHJlc3VtZSB0aGUgZGlmZiBhZnRlclxuXHRcdC8vIGRpZmZpbmcgQ29tcG9uZW50cyBhbmQgRnJhZ21lbnRzLiBPbmNlIHdlIHN0b3JlIGl0IHRoZSBuZXh0RE9NIGxvY2FsIHZhciwgd2Vcblx0XHQvLyBjYW4gY2xlYW4gdXAgdGhlIHByb3BlcnR5XG5cdFx0Y2hpbGRWTm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmIChcblx0XHRvbGRWTm9kZSA9PSBudWxsIHx8XG5cdFx0bmV3RG9tICE9IG9sZERvbSB8fFxuXHRcdG5ld0RvbS5wYXJlbnROb2RlID09IG51bGxcblx0KSB7XG5cdFx0b3V0ZXI6IGlmIChvbGREb20gPT0gbnVsbCB8fCBvbGREb20ucGFyZW50Tm9kZSAhPT0gcGFyZW50RG9tKSB7XG5cdFx0XHRwYXJlbnREb20uYXBwZW5kQ2hpbGQobmV3RG9tKTtcblx0XHRcdG5leHREb20gPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBgajxvbGRDaGlsZHJlbkxlbmd0aDsgais9MmAgaXMgYW4gYWx0ZXJuYXRpdmUgdG8gYGorKzxvbGRDaGlsZHJlbkxlbmd0aC8yYFxuXHRcdFx0Zm9yIChcblx0XHRcdFx0bGV0IHNpYkRvbSA9IG9sZERvbSwgaiA9IDA7XG5cdFx0XHRcdChzaWJEb20gPSBzaWJEb20ubmV4dFNpYmxpbmcpICYmIGogPCBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cdFx0XHRcdGogKz0gMVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlmIChzaWJEb20gPT0gbmV3RG9tKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHBhcmVudERvbS5pbnNlcnRCZWZvcmUobmV3RG9tLCBvbGREb20pO1xuXHRcdFx0bmV4dERvbSA9IG9sZERvbTtcblx0XHR9XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIHByZS1jYWxjdWxhdGVkIHRoZSBuZXh0RE9NIG5vZGUsIHVzZSBpdC4gRWxzZSBjYWxjdWxhdGUgaXQgbm93XG5cdC8vIFN0cmljdGx5IGNoZWNrIGZvciBgdW5kZWZpbmVkYCBoZXJlIGN1eiBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZSBvZiBgbmV4dERvbWAuXG5cdC8vIFNlZSBtb3JlIGRldGFpbCBpbiBjcmVhdGUtZWxlbWVudC5qczpjcmVhdGVWTm9kZVxuXHRpZiAobmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2xkRG9tID0gbmV4dERvbTtcblx0fSBlbHNlIHtcblx0XHRvbGREb20gPSBuZXdEb20ubmV4dFNpYmxpbmc7XG5cdH1cblxuXHRyZXR1cm4gb2xkRG9tO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiBnZXRMYXN0RG9tKHZub2RlKSB7XG5cdGlmICh2bm9kZS50eXBlID09IG51bGwgfHwgdHlwZW9mIHZub2RlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHZub2RlLl9kb207XG5cdH1cblxuXHRpZiAodm5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0Zm9yIChsZXQgaSA9IHZub2RlLl9jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0bGV0IGNoaWxkID0gdm5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRcdGxldCBsYXN0RG9tID0gZ2V0TGFzdERvbShjaGlsZCk7XG5cdFx0XHRcdGlmIChsYXN0RG9tKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxhc3REb207XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHRoZSBvbGQgYW5kIG5ldyBwcm9wZXJ0aWVzIG9mIGEgVk5vZGUgYW5kIGFwcGx5IGNoYW5nZXMgdG8gdGhlIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIGFwcGx5XG4gKiBjaGFuZ2VzIHRvXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IG9sZFByb3BzIFRoZSBvbGQgcHJvcHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh5ZHJhdGUgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvbiBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBoeWRyYXRlKSB7XG5cdGxldCBpO1xuXG5cdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdGlmIChpICE9PSAnY2hpbGRyZW4nICYmIGkgIT09ICdrZXknICYmICEoaSBpbiBuZXdQcm9wcykpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbnVsbCwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGkgaW4gbmV3UHJvcHMpIHtcblx0XHRpZiAoXG5cdFx0XHQoIWh5ZHJhdGUgfHwgdHlwZW9mIG5ld1Byb3BzW2ldID09ICdmdW5jdGlvbicpICYmXG5cdFx0XHRpICE9PSAnY2hpbGRyZW4nICYmXG5cdFx0XHRpICE9PSAna2V5JyAmJlxuXHRcdFx0aSAhPT0gJ3ZhbHVlJyAmJlxuXHRcdFx0aSAhPT0gJ2NoZWNrZWQnICYmXG5cdFx0XHRvbGRQcm9wc1tpXSAhPT0gbmV3UHJvcHNbaV1cblx0XHQpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbmV3UHJvcHNbaV0sIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIGlzU3ZnKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9PSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PT0gJ28nICYmIG5hbWVbMV0gPT09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKG5hbWUudG9Mb3dlckNhc2UoKSBpbiBkb20pIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lICE9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPT0gJ3dpZHRoJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2hlaWdodCcgJiZcblx0XHRcdG5hbWUgIT09ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2xpc3QnICYmXG5cdFx0XHRuYW1lICE9PSAnZm9ybScgJiZcblx0XHRcdC8vIERlZmF1bHQgdmFsdWUgaW4gYnJvd3NlcnMgaXMgYC0xYCBhbmQgYW4gZW1wdHkgc3RyaW5nIGlzXG5cdFx0XHQvLyBjYXN0IHRvIGAwYCBpbnN0ZWFkXG5cdFx0XHRuYW1lICE9PSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9PSAnZG93bmxvYWQnICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIEFSSUEtYXR0cmlidXRlcyBoYXZlIGEgZGlmZmVyZW50IG5vdGlvbiBvZiBib29sZWFuIHZhbHVlcy5cblx0XHQvLyBUaGUgdmFsdWUgYGZhbHNlYCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgYXR0cmlidXRlIG5vdFxuXHRcdC8vIGV4aXN0aW5nIG9uIHRoZSBET00sIHNvIHdlIGNhbid0IHJlbW92ZSBpdC4gRm9yIG5vbi1ib29sZWFuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIHdlIGNvdWxkIHRyZWF0IGZhbHNlIGFzIGEgcmVtb3ZhbCwgYnV0IHRoZVxuXHRcdC8vIGFtb3VudCBvZiBleGNlcHRpb25zIHdvdWxkIGNvc3QgdXMgdG9vIG1hbnkgYnl0ZXMuIE9uIHRvcCBvZlxuXHRcdC8vIHRoYXQgb3RoZXIgVkRPTSBmcmFtZXdvcmtzIGFsc28gYWx3YXlzIHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gbmV2ZXIgc2VyaWFsaXplIGZ1bmN0aW9ucyBhcyBhdHRyaWJ1dGUgdmFsdWVzXG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSAhPT0gZmFsc2UgfHwgbmFtZS5pbmRleE9mKCctJykgIT0gLTEpKSB7XG5cdFx0XHRkb20uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBQcm94eSBhbiBldmVudCB0byBob29rZWQgZXZlbnQgaGFuZGxlcnNcbiAqIEBwYXJhbSB7RXZlbnR9IGUgVGhlIGV2ZW50IG9iamVjdCBmcm9tIHRoZSBicm93c2VyXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBldmVudFByb3h5KGUpIHtcblx0cmV0dXJuIHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyBmYWxzZV0ob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRQcm94eUNhcHR1cmUoZSkge1xuXHRyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIHRydWVdKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG59XG4iLCJpbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGlmZkNoaWxkcmVuIH0gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBkaWZmUHJvcHMsIHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIGFuZCBhcHBseSBwcm9wZXIgY2hhbmdlcyB0byB0aGUgRE9NXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdC4gTW9kaWZpZWQgYnkgZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NXG4gKiBlbGVtZW50IGFueSBuZXcgZG9tIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0XG4gKiByZW5kZXIgKGV4Y2VwdCB3aGVuIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nXG4gKiBGcmFnbWVudHMgdGhhdCBoYXZlIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzSHlkcmF0aW5nXSBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKFxuXHRwYXJlbnREb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCB0bXAsXG5cdFx0bmV3VHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cblx0Ly8gV2hlbiBwYXNzaW5nIHRocm91Z2ggY3JlYXRlRWxlbWVudCBpdCBhc3NpZ25zIHRoZSBvYmplY3Rcblx0Ly8gY29uc3RydWN0b3IgYXMgdW5kZWZpbmVkLiBUaGlzIHRvIHByZXZlbnQgSlNPTi1pbmplY3Rpb24uXG5cdGlmIChuZXdWTm9kZS5jb25zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXHQvLyBJZiB0aGUgcHJldmlvdXMgZGlmZiBiYWlsZWQgb3V0LCByZXN1bWUgY3JlYXRpbmcvaHlkcmF0aW5nLlxuXHRpZiAob2xkVk5vZGUuX2h5ZHJhdGluZyAhPSBudWxsKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSBvbGRWTm9kZS5faHlkcmF0aW5nO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdC8vIGlmIHdlIHJlc3VtZSwgd2Ugd2FudCB0aGUgdHJlZSB0byBiZSBcInVubG9ja2VkXCJcblx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gbnVsbDtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHR0cnkge1xuXHRcdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblxuXHRcdFx0Ly8gTmVjZXNzYXJ5IGZvciBjcmVhdGVDb250ZXh0IGFwaS4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgcGFzc1xuXHRcdFx0Ly8gdGhlIGNvbnRleHQgdmFsdWUgYXMgYHRoaXMuY29udGV4dGAganVzdCBmb3IgdGhpcyBjb21wb25lbnQuXG5cdFx0XHR0bXAgPSBuZXdUeXBlLmNvbnRleHRUeXBlO1xuXHRcdFx0bGV0IHByb3ZpZGVyID0gdG1wICYmIGdsb2JhbENvbnRleHRbdG1wLl9pZF07XG5cdFx0XHRsZXQgY29tcG9uZW50Q29udGV4dCA9IHRtcFxuXHRcdFx0XHQ/IHByb3ZpZGVyXG5cdFx0XHRcdFx0PyBwcm92aWRlci5wcm9wcy52YWx1ZVxuXHRcdFx0XHRcdDogdG1wLl9kZWZhdWx0VmFsdWVcblx0XHRcdFx0OiBnbG9iYWxDb250ZXh0O1xuXG5cdFx0XHQvLyBHZXQgY29tcG9uZW50IGFuZCBzZXQgaXQgdG8gYGNgXG5cdFx0XHRpZiAob2xkVk5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRjID0gbmV3Vk5vZGUuX2NvbXBvbmVudCA9IG9sZFZOb2RlLl9jb21wb25lbnQ7XG5cdFx0XHRcdGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wZW5kaW5nRXJyb3I7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJbnN0YW50aWF0ZSB0aGUgbmV3IGNvbXBvbmVudFxuXHRcdFx0XHRpZiAoJ3Byb3RvdHlwZScgaW4gbmV3VHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBDb21wb25lbnQobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHRcdGMuY29uc3RydWN0b3IgPSBuZXdUeXBlO1xuXHRcdFx0XHRcdGMucmVuZGVyID0gZG9SZW5kZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByb3ZpZGVyKSBwcm92aWRlci5zdWIoYyk7XG5cblx0XHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0XHRpZiAoIWMuc3RhdGUpIGMuc3RhdGUgPSB7fTtcblx0XHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdFx0Yy5fZ2xvYmFsQ29udGV4dCA9IGdsb2JhbENvbnRleHQ7XG5cdFx0XHRcdGlzTmV3ID0gYy5fZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW52b2tlIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXHRcdFx0aWYgKGMuX25leHRTdGF0ZSA9PSBudWxsKSB7XG5cdFx0XHRcdGMuX25leHRTdGF0ZSA9IGMuc3RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50ICE9IG51bGxcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZE1vdW50ICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IG51bGwgJiZcblx0XHRcdFx0XHRuZXdQcm9wcyAhPT0gb2xkUHJvcHMgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghYy5fZm9yY2UgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlICE9IG51bGwgJiZcblx0XHRcdFx0XHRcdGMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRuZXdQcm9wcyxcblx0XHRcdFx0XHRcdFx0Yy5fbmV4dFN0YXRlLFxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0XHQpID09PSBmYWxzZSkgfHxcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9PSBvbGRWTm9kZS5fb3JpZ2luYWwpIHtcblx0XHRcdFx0XHRcdC8vIFdoZW4gd2UgYXJlIGRlYWxpbmcgd2l0aCBhIGJhaWwgYmVjYXVzZSBvZiBzQ1Ugd2UgaGF2ZSB0byB1cGRhdGVcblx0XHRcdFx0XHRcdC8vIHRoZSBwcm9wcywgc3RhdGUgYW5kIGRpcnR5LXN0YXRlLlxuXHRcdFx0XHRcdFx0Ly8gd2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIHN0cmljdC1lcXVhbGl0eSB3ZSBkb24ndCBhcyB0aGUgY2hpbGQgY291bGQgc3RpbGxcblx0XHRcdFx0XHRcdC8vIGJlIGRpcnRpZWQgc2VlICMzODgzXG5cdFx0XHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJbiBjYXNlcyBvZiBiYWlsaW5nIGR1ZSB0byBzdHJpY3QtZXF1YWxpdHkgd2UgaGF2ZSB0byByZXNldCBmb3JjZSBhcyB3ZWxsXG5cdFx0XHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuLmZvckVhY2godm5vZGUgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZub2RlKSB2bm9kZS5fcGFyZW50ID0gbmV3Vk5vZGU7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGMuX3N0YXRlQ2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLl9zdGF0ZUNhbGxiYWNrc1tpXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudERpZFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdFx0XHRcdFx0Yy5jb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlLCBzbmFwc2hvdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdGMuX3BhcmVudERvbSA9IHBhcmVudERvbTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmICgncHJvdG90eXBlJyBpbiBuZXdUeXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYy5fc3RhdGVDYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLl9zdGF0ZUNhbGxiYWNrc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0fSB3aGlsZSAoYy5fZGlydHkgJiYgKytjb3VudCA8IDI1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblxuXHRcdFx0aWYgKGMuZ2V0Q2hpbGRDb250ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCA9IGFzc2lnbihhc3NpZ24oe30sIGdsb2JhbENvbnRleHQpLCBjLmdldENoaWxkQ29udGV4dCgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpc1RvcExldmVsRnJhZ21lbnQgPVxuXHRcdFx0XHR0bXAgIT0gbnVsbCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBudWxsO1xuXHRcdFx0bGV0IHJlbmRlclJlc3VsdCA9IGlzVG9wTGV2ZWxGcmFnbWVudCA/IHRtcC5wcm9wcy5jaGlsZHJlbiA6IHRtcDtcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdGMuYmFzZSA9IG5ld1ZOb2RlLl9kb207XG5cblx0XHRcdC8vIFdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZCB0aGlzIFZOb2RlLCB1bnNldCBhbnkgc3RvcmVkIGh5ZHJhdGlvbi9iYWlsb3V0IHN0YXRlOlxuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cblx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdFx0Yy5fcGVuZGluZ0Vycm9yID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID09IG51bGwgJiZcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0KSB7XG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRcdG9sZFZOb2RlLl9kb20sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBudWxsO1xuXHRcdC8vIGlmIGh5ZHJhdGluZyBvciBjcmVhdGluZyBpbml0aWFsIHRyZWUsIGJhaWxvdXQgcHJlc2VydmVzIERPTTpcblx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZERvbTtcblx0XHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSAhIWlzSHlkcmF0aW5nO1xuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IG51bGw7XG5cdFx0XHQvLyBeIGNvdWxkIHBvc3NpYmx5IGJlIHNpbXBsaWZpZWQgdG86XG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGggPSAwO1xuXHRcdH1cblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIG5ld1ZOb2RlLCBvbGRWTm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCkge1xuXHRpZiAob3B0aW9ucy5fY29tbWl0KSBvcHRpb25zLl9jb21taXQocm9vdCwgY29tbWl0UXVldWUpO1xuXG5cdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgUmV1c2UgdGhlIGNvbW1pdFF1ZXVlIHZhcmlhYmxlIGhlcmUgc28gdGhlIHR5cGUgY2hhbmdlc1xuXHRcdFx0Y29tbWl0UXVldWUgPSBjLl9yZW5kZXJDYWxsYmFja3M7XG5cdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoY2IgPT4ge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFNlZSBhYm92ZSB0cy1pZ25vcmUgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nXG4gKiB0aGUgdmlydHVhbCBub2RlcyBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0geyp9IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZGlmZkVsZW1lbnROb2Rlcyhcblx0ZG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHM7XG5cdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXHRsZXQgbm9kZVR5cGUgPSBuZXdWTm9kZS50eXBlO1xuXHRsZXQgaSA9IDA7XG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIFNWRyBuYW1lc3BhY2Ugd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlmIChub2RlVHlwZSA9PT0gJ3N2ZycpIGlzU3ZnID0gdHJ1ZTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdGZvciAoOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNoaWxkID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNoaWxkICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIGNoaWxkID09PSAhIW5vZGVUeXBlICYmXG5cdFx0XHRcdChub2RlVHlwZSA/IGNoaWxkLmxvY2FsTmFtZSA9PT0gbm9kZVR5cGUgOiBjaGlsZC5ub2RlVHlwZSA9PT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSBjaGlsZDtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IG51bGwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgY3JlYXRlVGV4dE5vZGUgcmV0dXJucyBUZXh0LCB3ZSBleHBlY3QgUHJlYWN0RWxlbWVudFxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRpZiAoaXNTdmcpIHtcblx0XHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdFx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZSxcblx0XHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IG51bGw7XG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpbiBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlzSHlkcmF0aW5nID0gZmFsc2U7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCB3ZSBzdGlsbCBoYXZlIHRvIHNwbGl0IG1lcmdlZCB0ZXh0IGZyb20gU1NSJ2QgSFRNTC5cblx0XHRpZiAob2xkUHJvcHMgIT09IG5ld1Byb3BzICYmICghaXNIeWRyYXRpbmcgfHwgZG9tLmRhdGEgIT09IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHRvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblxuXHRcdGxldCBvbGRIdG1sID0gb2xkUHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cdFx0bGV0IG5ld0h0bWwgPSBuZXdQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdC8vIEJ1dCwgaWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSB1c2luZyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpXG5cdFx0XHQvLyB3ZSBzaG91bGQgcmVhZCB0aGUgZXhpc3RpbmcgRE9NIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZG9tLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvbGRQcm9wc1tkb20uYXR0cmlidXRlc1tpXS5uYW1lXSA9IGRvbS5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdIdG1sIHx8IG9sZEh0bWwpIHtcblx0XHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhbmV3SHRtbCB8fFxuXHRcdFx0XHRcdCgoIW9sZEh0bWwgfHwgbmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwpICYmXG5cdFx0XHRcdFx0XHRuZXdIdG1sLl9faHRtbCAhPT0gZG9tLmlubmVySFRNTClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IChuZXdIdG1sICYmIG5ld0h0bWwuX19odG1sKSB8fCAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRpZmZQcm9wcyhkb20sIG5ld1Byb3BzLCBvbGRQcm9wcywgaXNTdmcsIGlzSHlkcmF0aW5nKTtcblxuXHRcdC8vIElmIHRoZSBuZXcgdm5vZGUgZGlkbid0IGhhdmUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGRpZmYgaXRzIGNoaWxkcmVuXG5cdFx0aWYgKG5ld0h0bWwpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpID0gbmV3Vk5vZGUucHJvcHMuY2hpbGRyZW47XG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdGRvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShpKSA/IGkgOiBbaV0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcgJiYgbm9kZVR5cGUgIT09ICdmb3JlaWduT2JqZWN0Jyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgcGFydCBvZiBhbnkgdm5vZGUuXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldICE9IG51bGwpIHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gKGFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb24pXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQndmFsdWUnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMudmFsdWUpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0Ly8gIzI3NTYgRm9yIHRoZSA8cHJvZ3Jlc3M+LWVsZW1lbnQgdGhlIGluaXRpYWwgdmFsdWUgaXMgMCxcblx0XHRcdFx0Ly8gZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZyBwcmVzZW50LiBXaGVuIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gaXMgbWlzc2luZyB0aGUgcHJvZ3Jlc3MgYmFyIGlzIHRyZWF0ZWQgYXMgaW5kZXRlcm1pbmF0ZS5cblx0XHRcdFx0Ly8gVG8gZml4IHRoYXQgd2UnbGwgYWx3YXlzIHVwZGF0ZSBpdCB3aGVuIGl0IGlzIDAgZm9yIHByb2dyZXNzIGVsZW1lbnRzXG5cdFx0XHRcdChpICE9PSBkb20udmFsdWUgfHxcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdwcm9ncmVzcycgJiYgIWkpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdvcHRpb24nICYmIGkgIT09IG9sZFByb3BzLnZhbHVlKSlcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICd2YWx1ZScsIGksIG9sZFByb3BzLnZhbHVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCdjaGVja2VkJyBpbiBuZXdQcm9wcyAmJlxuXHRcdFx0XHQoaSA9IG5ld1Byb3BzLmNoZWNrZWQpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0aSAhPT0gZG9tLmNoZWNrZWRcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICdjaGVja2VkJywgaSwgb2xkUHJvcHMuY2hlY2tlZCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtcblx0XHRlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBwYXJlbnRWTm9kZSBUaGUgcGFyZW50IG9mIHRoZSBWTm9kZSB0aGF0XG4gKiBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgbnVsbCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IG51bGwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSBudWxsO1xuXHRcdHZub2RlLl9jb21wb25lbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY2hpbGRyZW4pKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocltpXSkge1xuXHRcdFx0XHR1bm1vdW50KFxuXHRcdFx0XHRcdHJbaV0sXG5cdFx0XHRcdFx0cGFyZW50Vk5vZGUsXG5cdFx0XHRcdFx0c2tpcFJlbW92ZSB8fCB0eXBlb2Ygdm5vZGUudHlwZSAhPT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSAmJiB2bm9kZS5fZG9tICE9IG51bGwpIHtcblx0XHRyZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXHR9XG5cblx0Ly8gTXVzdCBiZSBzZXQgdG8gYHVuZGVmaW5lZGAgdG8gcHJvcGVybHkgY2xlYW4gdXAgYF9uZXh0RG9tYFxuXHQvLyBmb3Igd2hpY2ggYG51bGxgIGlzIGEgdmFsaWQgdmFsdWUuIFNlZSBjb21tZW50IGluIGBjcmVhdGUtZWxlbWVudC5qc2Bcblx0dm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSB2bm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcbn1cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29tbWl0Um9vdCwgZGlmZiB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBSZW5kZXIgYSBQcmVhY3QgdmlydHVhbCBub2RlIGludG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0b1xuICogcmVuZGVyIGludG9cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudCB8IG9iamVjdH0gW3JlcGxhY2VOb2RlXSBPcHRpb25hbDogQXR0ZW1wdCB0byByZS11c2UgYW5cbiAqIGV4aXN0aW5nIERPTSB0cmVlIHJvb3RlZCBhdCBgcmVwbGFjZU5vZGVgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudERvbSwgcmVwbGFjZU5vZGUpIHtcblx0aWYgKG9wdGlvbnMuX3Jvb3QpIG9wdGlvbnMuX3Jvb3Qodm5vZGUsIHBhcmVudERvbSk7XG5cblx0Ly8gV2UgYWJ1c2UgdGhlIGByZXBsYWNlTm9kZWAgcGFyYW1ldGVyIGluIGBoeWRyYXRlKClgIHRvIHNpZ25hbCBpZiB3ZSBhcmUgaW5cblx0Ly8gaHlkcmF0aW9uIG1vZGUgb3Igbm90IGJ5IHBhc3NpbmcgdGhlIGBoeWRyYXRlYCBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgRE9NXG5cdC8vIGVsZW1lbnQuLlxuXHRsZXQgaXNIeWRyYXRpbmcgPSB0eXBlb2YgcmVwbGFjZU5vZGUgPT09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IG51bGxcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoXG5cdFx0KCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHxcblx0XHRwYXJlbnREb21cblx0KS5fY2hpbGRyZW4gPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBbdm5vZGVdKTtcblxuXHQvLyBMaXN0IG9mIGVmZmVjdHMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBkaWZmaW5nLlxuXHRsZXQgY29tbWl0UXVldWUgPSBbXTtcblx0ZGlmZihcblx0XHRwYXJlbnREb20sXG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBuZXcgdm5vZGUgdHJlZSBhbmQgc3RvcmUgaXQgb24gdGhlIERPTSBlbGVtZW50IG9uXG5cdFx0Ly8gb3VyIGN1c3RvbSBgX2NoaWxkcmVuYCBwcm9wZXJ0eS5cblx0XHR2bm9kZSxcblx0XHRvbGRWTm9kZSB8fCBFTVBUWV9PQkosXG5cdFx0RU1QVFlfT0JKLFxuXHRcdHBhcmVudERvbS5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZCxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gW3JlcGxhY2VOb2RlXVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0PyBudWxsXG5cdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHQ/IHNsaWNlLmNhbGwocGFyZW50RG9tLmNoaWxkTm9kZXMpXG5cdFx0XHQ6IG51bGwsXG5cdFx0Y29tbWl0UXVldWUsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IHJlcGxhY2VOb2RlXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHQ/IG9sZFZOb2RlLl9kb21cblx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmdcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG9cbiAqIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzIGNoaWxkcmVuLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgRE9NIGVsZW1lbnQgdG8gY2xvbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBBdHRyaWJ1dGVzL3Byb3BzIHRvIGFkZCB3aGVuIGNsb25pbmdcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW4+fSByZXN0IEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB3aWxsIGJlIHVzZWQgYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKFxuXHRcdHZub2RlLnR5cGUsXG5cdFx0bm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSB8fCB2bm9kZS5rZXksXG5cdFx0cmVmIHx8IHZub2RlLnJlZixcblx0XHRudWxsXG5cdCk7XG59XG4iLCIvKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXdcbiAqIHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdCBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyXG4gKiBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmcgdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsIGN0b3IsIGhhbmRsZWQ7XG5cblx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmICFjb21wb25lbnQuX3Byb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGN0b3IgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG5cblx0XHRcdFx0aWYgKGN0b3IgJiYgY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRTdGF0ZShjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikpO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8gfHwge30pO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBhbiBlcnJvciBib3VuZGFyeS4gTWFyayBpdCBhcyBoYXZpbmcgYmFpbGVkIG91dCwgYW5kIHdoZXRoZXIgaXQgd2FzIG1pZC1oeWRyYXRpb24uXG5cdFx0XHRcdGlmIChoYW5kbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChjb21wb25lbnQuX3BlbmRpbmdFcnJvciA9IGNvbXBvbmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRocm93IGVycm9yO1xufVxuIiwiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgncHJlYWN0JykuVk5vZGV9IFZOb2RlICovXG5cbmxldCB2bm9kZUlkID0gMDtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBUaGlzIGZpbGUgZXhwb3J0cyB2YXJpb3VzIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQmFiZWwncyBcImF1dG9tYXRpY1wiIEpTWCBydW50aW1lIEFQSTpcbiAqIC0ganN4KHR5cGUsIHByb3BzLCBrZXkpXG4gKiAtIGpzeHModHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIF9fc291cmNlLCBfX3NlbGYpXG4gKlxuICogVGhlIGltcGxlbWVudGF0aW9uIG9mIGNyZWF0ZVZOb2RlIGhlcmUgaXMgb3B0aW1pemVkIGZvciBwZXJmb3JtYW5jZS5cbiAqIEJlbmNobWFya3M6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWY2YjU0YTBiNDYzMjEwMGE3ZGNkMmIzXG4gKi9cblxuLyoqXG4gKiBKU1guRWxlbWVudCBmYWN0b3J5IHVzZWQgYnkgQmFiZWwncyB7cnVudGltZTpcImF1dG9tYXRpY1wifSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1ZOb2RlWyd0eXBlJ119IHR5cGVcbiAqIEBwYXJhbSB7Vk5vZGVbJ3Byb3BzJ119IHByb3BzXG4gKiBAcGFyYW0ge1ZOb2RlWydrZXknXX0gW2tleV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW2lzU3RhdGljQ2hpbGRyZW5dXG4gKiBAcGFyYW0ge3Vua25vd259IFtfX3NvdXJjZV1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc2VsZl1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgX19zb3VyY2UsIF9fc2VsZikge1xuXHQvLyBXZSdsbCB3YW50IHRvIHByZXNlcnZlIGByZWZgIGluIHByb3BzIHRvIGdldCByaWQgb2YgdGhlIG5lZWQgZm9yXG5cdC8vIGZvcndhcmRSZWYgY29tcG9uZW50cyBpbiB0aGUgZnV0dXJlLCBidXQgdGhhdCBzaG91bGQgaGFwcGVuIHZpYVxuXHQvLyBhIHNlcGFyYXRlIFBSLlxuXHRsZXQgbm9ybWFsaXplZFByb3BzID0ge30sXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdyZWYnKSB7XG5cdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wczogbm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKHR5cGVvZiBub3JtYWxpemVkUHJvcHNbaV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQge1xuXHRjcmVhdGVWTm9kZSBhcyBqc3gsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeHMsXG5cdGNyZWF0ZVZOb2RlIGFzIGpzeERFVixcblx0RnJhZ21lbnRcbn07XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxubGV0IEVNUFRZID0gW107XG5cbmxldCBvbGRCZWZvcmVEaWZmID0gb3B0aW9ucy5fZGlmZjtcbmxldCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5sZXQgb2xkQWZ0ZXJEaWZmID0gb3B0aW9ucy5kaWZmZWQ7XG5sZXQgb2xkQ29tbWl0ID0gb3B0aW9ucy5fY29tbWl0O1xubGV0IG9sZEJlZm9yZVVubW91bnQgPSBvcHRpb25zLnVubW91bnQ7XG5cbmNvbnN0IFJBRl9USU1FT1VUID0gMTAwO1xubGV0IHByZXZSYWY7XG5cbm9wdGlvbnMuX2RpZmYgPSB2bm9kZSA9PiB7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xuXHRpZiAob2xkQmVmb3JlRGlmZikgb2xkQmVmb3JlRGlmZih2bm9kZSk7XG59O1xuXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUNsZWFudXApO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlRWZmZWN0KTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH1cblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG59O1xuXG5vcHRpb25zLmRpZmZlZCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEFmdGVyRGlmZikgb2xkQWZ0ZXJEaWZmKHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0aWYgKGMuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMubGVuZ3RoKSBhZnRlclBhaW50KGFmdGVyUGFpbnRFZmZlY3RzLnB1c2goYykpO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKGhvb2tJdGVtID0+IHtcblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ0FyZ3MpIHtcblx0XHRcdFx0aG9va0l0ZW0uX2FyZ3MgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSAhPT0gRU1QVFkpIHtcblx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX3BlbmRpbmdWYWx1ZTtcblx0XHRcdH1cblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nVmFsdWUgPSBFTVBUWTtcblx0XHR9KTtcblx0fVxuXHRwcmV2aW91c0NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQgPSBudWxsO1xufTtcblxub3B0aW9ucy5fY29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xuXHRjb21taXRRdWV1ZS5zb21lKGNvbXBvbmVudCA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLmZpbHRlcihjYiA9PlxuXHRcdFx0XHRjYi5fdmFsdWUgPyBpbnZva2VFZmZlY3QoY2IpIDogdHJ1ZVxuXHRcdFx0KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzKSBjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0pO1xuXHRcdFx0Y29tbWl0UXVldWUgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAob2xkQ29tbWl0KSBvbGRDb21taXQodm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5cbm9wdGlvbnMudW5tb3VudCA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVVubW91bnQpIG9sZEJlZm9yZVVubW91bnQodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRsZXQgaGFzRXJyb3JlZDtcblx0XHRjLl9faG9va3MuX2xpc3QuZm9yRWFjaChzID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGludm9rZUNsZWFudXAocyk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGhhc0Vycm9yZWQgPSBlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGMuX19ob29rcyA9IHVuZGVmaW5lZDtcblx0XHRpZiAoaGFzRXJyb3JlZCkgb3B0aW9ucy5fY2F0Y2hFcnJvcihoYXNFcnJvcmVkLCBjLl92bm9kZSk7XG5cdH1cbn07XG5cbi8qKlxuICogR2V0IGEgaG9vaydzIHN0YXRlIGZyb20gdGhlIGN1cnJlbnRDb21wb25lbnRcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gdHlwZSBUaGUgaW5kZXggb2YgdGhlIGhvb2sgdG8gZ2V0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBnZXRIb29rU3RhdGUoaW5kZXgsIHR5cGUpIHtcblx0aWYgKG9wdGlvbnMuX2hvb2spIHtcblx0XHRvcHRpb25zLl9ob29rKGN1cnJlbnRDb21wb25lbnQsIGluZGV4LCBjdXJyZW50SG9vayB8fCB0eXBlKTtcblx0fVxuXHRjdXJyZW50SG9vayA9IDA7XG5cblx0Ly8gTGFyZ2VseSBpbnNwaXJlZCBieTpcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iL2Y2YmU3MzQ2OGU2ZWM0NmIwZmY1YWEzY2M0YzliYWY3MmEyOTAyNWEvc3JjL2hvb2tzL2NvcmVfaG9va3MubWpzXG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi82NTBiZWFhNThjNDNjMzNhNzQ4MjBhM2M5OGIzYzcwNzljZjJlMzMzL3NyYy9yZW5kZXJlci5tanNcblx0Ly8gT3RoZXIgaW1wbGVtZW50YXRpb25zIHRvIGxvb2sgYXQ6XG5cdC8vICogaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL21ub3gwNXFwOFxuXHRjb25zdCBob29rcyA9XG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzIHx8XG5cdFx0KGN1cnJlbnRDb21wb25lbnQuX19ob29rcyA9IHtcblx0XHRcdF9saXN0OiBbXSxcblx0XHRcdF9wZW5kaW5nRWZmZWN0czogW11cblx0XHR9KTtcblxuXHRpZiAoaW5kZXggPj0gaG9va3MuX2xpc3QubGVuZ3RoKSB7XG5cdFx0aG9va3MuX2xpc3QucHVzaCh7IF9wZW5kaW5nVmFsdWU6IEVNUFRZIH0pO1xuXHR9XG5cdHJldHVybiBob29rcy5fbGlzdFtpbmRleF07XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gW2luaXRpYWxTdGF0ZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuUmVkdWNlcjxhbnksIGFueT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPGFueT59IGluaXRpYWxTdGF0ZVxuICogQHBhcmFtIHsoaW5pdGlhbFN0YXRlOiBhbnkpID0+IHZvaWR9IFtpbml0XVxuICogQHJldHVybnMge1sgYW55LCAoc3RhdGU6IGFueSkgPT4gdm9pZCBdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGluaXQpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5SZWR1Y2VySG9va1N0YXRlfSAqL1xuXHRjb25zdCBob29rU3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDIpO1xuXHRob29rU3RhdGUuX3JlZHVjZXIgPSByZWR1Y2VyO1xuXHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50KSB7XG5cdFx0aG9va1N0YXRlLl92YWx1ZSA9IFtcblx0XHRcdCFpbml0ID8gaW52b2tlT3JSZXR1cm4odW5kZWZpbmVkLCBpbml0aWFsU3RhdGUpIDogaW5pdChpbml0aWFsU3RhdGUpLFxuXG5cdFx0XHRhY3Rpb24gPT4ge1xuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rU3RhdGUuX25leHRWYWx1ZVxuXHRcdFx0XHRcdD8gaG9va1N0YXRlLl9uZXh0VmFsdWVbMF1cblx0XHRcdFx0XHQ6IGhvb2tTdGF0ZS5fdmFsdWVbMF07XG5cdFx0XHRcdGNvbnN0IG5leHRWYWx1ZSA9IGhvb2tTdGF0ZS5fcmVkdWNlcihjdXJyZW50VmFsdWUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9uZXh0VmFsdWUgPSBbbmV4dFZhbHVlLCBob29rU3RhdGUuX3ZhbHVlWzFdXTtcblx0XHRcdFx0XHRob29rU3RhdGUuX2NvbXBvbmVudC5zZXRTdGF0ZSh7fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdO1xuXG5cdFx0aG9va1N0YXRlLl9jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuXG5cdFx0aWYgKCFjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MpIHtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcyA9IHRydWU7XG5cdFx0XHRjb25zdCBwcmV2U2N1ID0gY3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGU7XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24ocCwgcywgYykge1xuXHRcdFx0XHRpZiAoIWhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MpIHJldHVybiB0cnVlO1xuXG5cdFx0XHRcdGNvbnN0IHN0YXRlSG9va3MgPSBob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzLl9saXN0LmZpbHRlcihcblx0XHRcdFx0XHR4ID0+IHguX2NvbXBvbmVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjb25zdCBhbGxIb29rc0VtcHR5ID0gc3RhdGVIb29rcy5ldmVyeSh4ID0+ICF4Ll9uZXh0VmFsdWUpO1xuXHRcdFx0XHQvLyBXaGVuIHdlIGhhdmUgbm8gdXBkYXRlZCBob29rcyBpbiB0aGUgY29tcG9uZW50IHdlIGludm9rZSB0aGUgcHJldmlvdXMgU0NVIG9yXG5cdFx0XHRcdC8vIHRyYXZlcnNlIHRoZSBWRE9NIHRyZWUgZnVydGhlci5cblx0XHRcdFx0aWYgKGFsbEhvb2tzRW1wdHkpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJldlNjdSA/IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKSA6IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRzdGF0ZUhvb2tzLmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBob29rSXRlbS5fdmFsdWVbMF07XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IGhvb2tJdGVtLl92YWx1ZVswXSkgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBzaG91bGRVcGRhdGUgfHwgaG9va1N0YXRlLl9jb21wb25lbnQucHJvcHMgIT09IHBcblx0XHRcdFx0XHQ/IHByZXZTY3Vcblx0XHRcdFx0XHRcdD8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpXG5cdFx0XHRcdFx0XHQ6IHRydWVcblx0XHRcdFx0XHQ6IGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaG9va1N0YXRlLl9uZXh0VmFsdWUgfHwgaG9va1N0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDMpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA0KTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goc3RhdGUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG5cdGN1cnJlbnRIb29rID0gNTtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gKHsgY3VycmVudDogaW5pdGlhbFZhbHVlIH0pLCBbXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHJlZlxuICogQHBhcmFtIHsoKSA9PiBvYmplY3R9IGNyZWF0ZUhhbmRsZVxuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZUhhbmRsZSwgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDY7XG5cdHVzZUxheW91dEVmZmVjdChcblx0XHQoKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJlZihjcmVhdGVIYW5kbGUoKSk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiByZWYobnVsbCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlZikge1xuXHRcdFx0XHRyZWYuY3VycmVudCA9IGNyZWF0ZUhhbmRsZSgpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gKHJlZi5jdXJyZW50ID0gbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcmdzID09IG51bGwgPyBhcmdzIDogYXJncy5jb25jYXQocmVmKVxuXHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gYW55fSBmYWN0b3J5XG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZW1vKGZhY3RvcnksIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5NZW1vSG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNyk7XG5cdGlmIChhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fcGVuZGluZ1ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cdFx0c3RhdGUuX2ZhY3RvcnkgPSBmYWN0b3J5O1xuXHRcdHJldHVybiBzdGF0ZS5fcGVuZGluZ1ZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgYXJncykge1xuXHRjdXJyZW50SG9vayA9IDg7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+IGNhbGxiYWNrLCBhcmdzKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdENvbnRleHR9IGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRleHQoY29udGV4dCkge1xuXHRjb25zdCBwcm92aWRlciA9IGN1cnJlbnRDb21wb25lbnQuY29udGV4dFtjb250ZXh0Ll9pZF07XG5cdC8vIFdlIGNvdWxkIHNraXAgdGhpcyBjYWxsIGhlcmUsIGJ1dCB0aGFuIHdlJ2Qgbm90IGNhbGxcblx0Ly8gYG9wdGlvbnMuX2hvb2tgLiBXZSBuZWVkIHRvIGRvIHRoYXQgaW4gb3JkZXIgdG8gbWFrZVxuXHQvLyB0aGUgZGV2dG9vbHMgYXdhcmUgb2YgdGhpcyBob29rLlxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbnRleHRIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA5KTtcblx0Ly8gVGhlIGRldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3QgdG9cblx0Ly8gYmUgYWJsZSB0byBwdWxsIG9mIHRoZSBkZWZhdWx0IHZhbHVlIHdoZW4gbm8gcHJvdmlkZXJcblx0Ly8gaXMgcHJlc2VudCBpbiB0aGUgdHJlZS5cblx0c3RhdGUuX2NvbnRleHQgPSBjb250ZXh0O1xuXHRpZiAoIXByb3ZpZGVyKSByZXR1cm4gY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuXHQvLyBUaGlzIGlzIHByb2JhYmx5IG5vdCBzYWZlIHRvIGNvbnZlcnQgdG8gXCIhXCJcblx0aWYgKHN0YXRlLl92YWx1ZSA9PSBudWxsKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gdHJ1ZTtcblx0XHRwcm92aWRlci5zdWIoY3VycmVudENvbXBvbmVudCk7XG5cdH1cblx0cmV0dXJuIHByb3ZpZGVyLnByb3BzLnZhbHVlO1xufVxuXG4vKipcbiAqIERpc3BsYXkgYSBjdXN0b20gbGFiZWwgZm9yIGEgY3VzdG9tIGhvb2sgZm9yIHRoZSBkZXZ0b29scyBwYW5lbFxuICogQHR5cGUgezxUPih2YWx1ZTogVCwgY2I/OiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlcikge1xuXHRpZiAob3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKSB7XG5cdFx0b3B0aW9ucy51c2VEZWJ1Z1ZhbHVlKGZvcm1hdHRlciA/IGZvcm1hdHRlcih2YWx1ZSkgOiB2YWx1ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogYW55LCBlcnJvckluZm86IGltcG9ydCgncHJlYWN0JykuRXJyb3JJbmZvKSA9PiB2b2lkfSBjYlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JCb3VuZGFyeShjYikge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVycm9yQm91bmRhcnlIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMCk7XG5cdGNvbnN0IGVyclN0YXRlID0gdXNlU3RhdGUoKTtcblx0c3RhdGUuX3ZhbHVlID0gY2I7XG5cdGlmICghY3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCkge1xuXHRcdGN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyLCBlcnJvckluZm8pID0+IHtcblx0XHRcdGlmIChzdGF0ZS5fdmFsdWUpIHN0YXRlLl92YWx1ZShlcnIsIGVycm9ySW5mbyk7XG5cdFx0XHRlcnJTdGF0ZVsxXShlcnIpO1xuXHRcdH07XG5cdH1cblx0cmV0dXJuIFtcblx0XHRlcnJTdGF0ZVswXSxcblx0XHQoKSA9PiB7XG5cdFx0XHRlcnJTdGF0ZVsxXSh1bmRlZmluZWQpO1xuXHRcdH1cblx0XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlkKCkge1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTEpO1xuXHRpZiAoIXN0YXRlLl92YWx1ZSkge1xuXHRcdC8vIEdyYWIgZWl0aGVyIHRoZSByb290IG5vZGUgb3IgdGhlIG5lYXJlc3QgYXN5bmMgYm91bmRhcnkgbm9kZS5cblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbC5kJykuVk5vZGV9ICovXG5cdFx0bGV0IHJvb3QgPSBjdXJyZW50Q29tcG9uZW50Ll92bm9kZTtcblx0XHR3aGlsZSAocm9vdCAhPT0gbnVsbCAmJiAhcm9vdC5fbWFzayAmJiByb290Ll9wYXJlbnQgIT09IG51bGwpIHtcblx0XHRcdHJvb3QgPSByb290Ll9wYXJlbnQ7XG5cdFx0fVxuXG5cdFx0bGV0IG1hc2sgPSByb290Ll9tYXNrIHx8IChyb290Ll9tYXNrID0gWzAsIDBdKTtcblx0XHRzdGF0ZS5fdmFsdWUgPSAnUCcgKyBtYXNrWzBdICsgJy0nICsgbWFza1sxXSsrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlLl92YWx1ZTtcbn1cbi8qKlxuICogQWZ0ZXIgcGFpbnQgZWZmZWN0cyBjb25zdW1lci5cbiAqL1xuZnVuY3Rpb24gZmx1c2hBZnRlclBhaW50RWZmZWN0cygpIHtcblx0bGV0IGNvbXBvbmVudDtcblx0d2hpbGUgKChjb21wb25lbnQgPSBhZnRlclBhaW50RWZmZWN0cy5zaGlmdCgpKSkge1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWNvbXBvbmVudC5fX2hvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICovXG5mdW5jdGlvbiBhZnRlclBhaW50KG5ld1F1ZXVlTGVuZ3RoKSB7XG5cdGlmIChuZXdRdWV1ZUxlbmd0aCA9PT0gMSB8fCBwcmV2UmFmICE9PSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdHByZXZSYWYgPSBvcHRpb25zLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHQocHJldlJhZiB8fCBhZnRlck5leHRGcmFtZSkoZmx1c2hBZnRlclBhaW50RWZmZWN0cyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VDbGVhbnVwKGhvb2spIHtcblx0Ly8gQSBob29rIGNsZWFudXAgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0bGV0IGNsZWFudXAgPSBob29rLl9jbGVhbnVwO1xuXHRpZiAodHlwZW9mIGNsZWFudXAgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGhvb2suX2NsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0Y2xlYW51cCgpO1xuXHR9XG5cblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogSW52b2tlIGEgSG9vaydzIGVmZmVjdFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7YW55W119IG9sZEFyZ3NcbiAqIEBwYXJhbSB7YW55W119IG5ld0FyZ3NcbiAqL1xuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncywgbmV3QXJncykge1xuXHRyZXR1cm4gKFxuXHRcdCFvbGRBcmdzIHx8XG5cdFx0b2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3MubGVuZ3RoIHx8XG5cdFx0bmV3QXJncy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbmV4cG9ydCBkZWZhdWx0IFN5bWJvbDtcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdDtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0Z1bmN0aW9uO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmVKc0RhdGE7XG4iLCJpbXBvcnQgY29yZUpzRGF0YSBmcm9tICcuL19jb3JlSnNEYXRhLmpzJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNNYXNrZWQ7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvU291cmNlO1xuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uLmpzJztcbmltcG9ydCBpc01hc2tlZCBmcm9tICcuL19pc01hc2tlZC5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5pbXBvcnQgdG9Tb3VyY2UgZnJvbSAnLi9fdG9Tb3VyY2UuanMnO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNOYXRpdmU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VmFsdWU7XG4iLCJpbXBvcnQgYmFzZUlzTmF0aXZlIGZyb20gJy4vX2Jhc2VJc05hdGl2ZS5qcyc7XG5pbXBvcnQgZ2V0VmFsdWUgZnJvbSAnLi9fZ2V0VmFsdWUuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXROYXRpdmU7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXE7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUNyZWF0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hEZWxldGU7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaEdldDtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoSGFzO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaFNldDtcbiIsImltcG9ydCBoYXNoQ2xlYXIgZnJvbSAnLi9faGFzaENsZWFyLmpzJztcbmltcG9ydCBoYXNoRGVsZXRlIGZyb20gJy4vX2hhc2hEZWxldGUuanMnO1xuaW1wb3J0IGhhc2hHZXQgZnJvbSAnLi9faGFzaEdldC5qcyc7XG5pbXBvcnQgaGFzaEhhcyBmcm9tICcuL19oYXNoSGFzLmpzJztcbmltcG9ydCBoYXNoU2V0IGZyb20gJy4vX2hhc2hTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuZXhwb3J0IGRlZmF1bHQgSGFzaDtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlQ2xlYXI7XG4iLCJpbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc29jSW5kZXhPZjtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVEZWxldGU7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUdldDtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUhhcztcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVTZXQ7XG4iLCJpbXBvcnQgbGlzdENhY2hlQ2xlYXIgZnJvbSAnLi9fbGlzdENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IGxpc3RDYWNoZURlbGV0ZSBmcm9tICcuL19saXN0Q2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUdldCBmcm9tICcuL19saXN0Q2FjaGVHZXQuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUhhcyBmcm9tICcuL19saXN0Q2FjaGVIYXMuanMnO1xuaW1wb3J0IGxpc3RDYWNoZVNldCBmcm9tICcuL19saXN0Q2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDYWNoZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiaW1wb3J0IEhhc2ggZnJvbSAnLi9fSGFzaC5qcyc7XG5pbXBvcnQgTGlzdENhY2hlIGZyb20gJy4vX0xpc3RDYWNoZS5qcyc7XG5pbXBvcnQgTWFwIGZyb20gJy4vX01hcC5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVDbGVhcjtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLZXlhYmxlO1xuIiwiaW1wb3J0IGlzS2V5YWJsZSBmcm9tICcuL19pc0tleWFibGUuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1hcERhdGE7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVHZXQ7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVIYXM7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZVNldDtcbiIsImltcG9ydCBtYXBDYWNoZUNsZWFyIGZyb20gJy4vX21hcENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IG1hcENhY2hlRGVsZXRlIGZyb20gJy4vX21hcENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBtYXBDYWNoZUdldCBmcm9tICcuL19tYXBDYWNoZUdldC5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVIYXMgZnJvbSAnLi9fbWFwQ2FjaGVIYXMuanMnO1xuaW1wb3J0IG1hcENhY2hlU2V0IGZyb20gJy4vX21hcENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENhY2hlO1xuIiwiaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vX01hcENhY2hlLmpzJztcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiaW1wb3J0IHsgbWVtb2l6ZSB9IGZyb20gXCJsb2Rhc2gtZXNcIlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgY29uc3QgcHJvY2VzczogeyBlbnY6IHsgTk9ERV9FTlY/OiBzdHJpbmcgfCB1bmRlZmluZWQgfSB8IHVuZGVmaW5lZCB9IHwgdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBnZXRCdWlsZE1vZGVVbm1lbW9pemVkKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChwcm9jZXNzPy5lbnY/Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKVxuICAgICAgICAgICAgcmV0dXJuICdkZXZlbG9wbWVudCc7XG4gICAgICAgIHJldHVybiAncHJvZHVjdGlvbic7XG4gICAgfVxuICAgIGNhdGNoIChfZSkge1xuICAgICAgICByZXR1cm4gXCJwcm9kdWN0aW9uXCI7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0QnVpbGRNb2RlID0gbWVtb2l6ZShnZXRCdWlsZE1vZGVVbm1lbW9pemVkKSBhcyB0eXBlb2YgZ2V0QnVpbGRNb2RlVW5tZW1vaXplZDsiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0QnVpbGRNb2RlIH0gZnJvbSBcIi4uL3V0aWwvbW9kZS5qc1wiO1xuXG4vKiogVGFrZXMgYSBuZXcgdmFsdWUgb3IgYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgYSB2YWx1ZSwgdW5saWtlIGBPblBhc3NpdmVTdGF0ZUNoYW5nZWAgd2hpY2ggcmVhY3RzIHRvIHRob3NlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIFBhc3NpdmVTdGF0ZVVwZGF0ZXI8UywgUj4gPSAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKTsvL1tSXSBleHRlbmRzIFtuZXZlcl0/ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbj86IFIpID0+IHZvaWQpIDogKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uOiBSKSA9PiB2b2lkKTtcbi8qKiBSZXNwb25kcyB0byBhIGNoYW5nZSBpbiBhIHZhbHVlLCB1bmxpa2UgYFBhc3NpdmVTdGF0ZVVwZGF0ZXJgIHdoaWNoIGNhdXNlcyB0aGUgdXBkYXRlcyAqL1xuZXhwb3J0IHR5cGUgT25QYXNzaXZlU3RhdGVDaGFuZ2U8UywgUj4gPSAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSkgOiAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbjogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKTtcblxuXG5cbi8qKlxuICogRGVidWcgaG9vay5cbiAqIFxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cbiAqIFxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eTxUIGV4dGVuZHMgYW55W10+KHBhcmVudEhvb2tOYW1lOiBzdHJpbmcsIC4uLnZhbHVlczogVCkge1xuICAgIGlmIChnZXRCdWlsZE1vZGUoKSA9PSAncHJvZHVjdGlvbicpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZjxBcnJheTxUPj4oW10pO1xuICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWY8QXJyYXk8Ym9vbGVhbj4+KFtdKTtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCBhcyBhbnksIC0xKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xuICAgIHJldHVybjtcblxuXG4gICAgZnVuY3Rpb24gdXNlSGVscGVyPFUgZXh0ZW5kcyBUPih2YWx1ZTogVSwgaTogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudFtpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpfS1pbmRleGVkIGFyZ3VtZW50ICgke2kgPj0gMD8gSlNPTi5zdHJpbmdpZnkodmFsdWVzW2ldKSA6IFwidGhlIG51bWJlciBvZiBzdXBwb3NlZGx5IHN0YWJsZSBlbGVtZW50c1wifSkuYCk7XG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZVJlbmRlcmluZyhmOiAoKSA9PiB2b2lkKSB7XG4gICAgKG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPz8gc2V0VGltZW91dCkoZik7XG59XG5cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqIFxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKiBcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKiBcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICogXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqIFxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgQnkgZGVmYXVsdCwgY2hhbmdlcyB0byBwYXNzaXZlIHN0YXRlIGFyZSBkZWxheWVkIGJ5IG9uZSB0aWNrIHNvIHRoYXQgd2Ugb25seSBjaGVjayBmb3IgY2hhbmdlcyBpbiBhIHNpbWlsYXIgd2F5IHRvIFByZWFjdC4gWW91IGNhbiBvdmVycmlkZSB0aGlzIHRvLCBmb3IgZXhhbXBsZSwgYWx3YXlzIHJ1biBpbW1lZGlhdGVseSBpbnN0ZWFkLlxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGU8VCwgUj4ob25DaGFuZ2U6IHVuZGVmaW5lZCB8IG51bGwgfCBPblBhc3NpdmVTdGF0ZUNoYW5nZTxULCBSPiwgZ2V0SW5pdGlhbFZhbHVlPzogKCkgPT4gVCwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmc/OiB0eXBlb2YgZGVib3VuY2VSZW5kZXJpbmcpOiByZWFkb25seSBbZ2V0U3RhdGVTdGFibGU6ICgpID0+IFQsIHNldFN0YXRlU3RhYmxlOiBQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+XSB7XG5cbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZjxUIHwgdHlwZW9mIFVuc2V0PihVbnNldCk7XG4gICAgY29uc3QgcmVhc29uUmVmID0gdXNlUmVmPFIgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCA9IHVzZVJlZjxUIHwgKHR5cGVvZiBVbnNldCk+KFVuc2V0KTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWY8dW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpPih1bmRlZmluZWQpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG5cbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXG4gICAgLy8gdmFsdWUgaW4gcGxhY2Ugb2YgaGF2aW5nIG5vIHZhbHVlIGF0IGFsbCB5ZXQuXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxuICAgIGNvbnN0IHRyeUVuc3VyZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBnZXRJbml0aWFsVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCEpID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcblxuXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh3YXJuaW5nUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xuXG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQhIDogdmFsdWVSZWYuY3VycmVudCEpIGFzIFQ7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXG4gICAgICAgIC8vIChJZiB3ZSBoYXZlIGFuIGluaXRpYWwgdmFsdWUsIG9mIGNvdXJzZSlcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcblxuXG4gICAgfSwgW10pO1xuXG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+KChhcmc6IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj5bMF0sIHJlYXNvbjogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlsxXSkgPT4ge1xuXG4gICAgICAgIC8vIFJlZ2FyZGxlc3Mgb2YgYW55dGhpbmcgZWxzZSwgZmlndXJlIG91dCB3aGF0IG91ciBuZXh0IHZhbHVlIGlzIGFib3V0IHRvIGJlLlxuICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSAoYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KSA6IGFyZyk7XG5cblxuICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9PT0gVW5zZXQgJiYgbmV4dFZhbHVlICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCByZXF1ZXN0IHRvIGNoYW5nZSB0aGlzIHZhbHVlLlxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgdGhlIHJlcXVlc3QgaW1tZWRpYXRlbHksIHRoZW4gcXVldWUgdXAgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uXG5cbiAgICAgICAgICAgIC8vIFNhdmUgb3VyIGN1cnJlbnQgdmFsdWUgc28gdGhhdCB3ZSBjYW4gY29tcGFyZSBhZ2FpbnN0IGl0IGxhdGVyXG4gICAgICAgICAgICAvLyAoaWYgd2UgZmxpcCBiYWNrIHRvIHRoaXMgc3RhdGUsIHRoZW4gd2Ugd29uJ3Qgc2VuZCB0aGUgb25DaGFuZ2UgZnVuY3Rpb24pXG4gICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gdmFsdWVSZWYuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gSXQncyBpbXBvcnRhbnQgdG8gdXBkYXRlIHRoaXMgaGVyZSAoYXMgd2VsbCBhcyBiZWxvdykgaW4gY2FzZSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBpbnZva2VzIHRoaXMgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICByZWFzb25SZWYuY3VycmVudCA9IHJlYXNvbiBhcyBSO1xuXG4gICAgICAgICAgICAvLyBTY2hlZHVsZSB0aGUgYWN0dWFsIGNoZWNrIGFuZCBpbnZvY2F0aW9uIG9mIG9uQ2hhbmdlIGxhdGVyIHRvIGxldCBlZmZlY3RzIHNldHRsZVxuICAgICAgICAgICAgKGN1c3RvbURlYm91bmNlUmVuZGVyaW5nID8/IGRlYm91bmNlUmVuZGVyaW5nKSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFJlYXNvbiA9IHJlYXNvblJlZi5jdXJyZW50ISBhcyBSO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50ISBhcyBUO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ICE9IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJlZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4obmV4dERlcCwgcHJldkRlcCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBwcmV2RGVwLCBuZXh0UmVhc29uKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHREZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2UndmUgZmluaXNoZWQgd2l0aCBldmVyeXRoaW5nLCBzbyBtYXJrIHVzIGFzIGJlaW5nIG9uIGEgY2xlYW4gc2xhdGUgYWdhaW4uXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IFVuc2V0O1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgaW1tZWRpYXRlbHkuXG4gICAgICAgIC8vIFRoaXMgd2lsbCBiZSBjaGVja2VkIGFnYWluc3QgcHJldkRlcCB0byBzZWUgaWYgd2Ugc2hvdWxkIGFjdHVhbGx5IGNhbGwgb25DaGFuZ2VcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXSBhcyBjb25zdDtcbn1cblxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcblxuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cblxuLyoqIFxuICogQW4gYWx0ZXJuYXRpdmUgdG8gdXNlIGZvciBgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmdgIHRoYXQgY2F1c2VzIGB1c2VQYXNzaXZlU3RhdGVgIHRvIHJ1biBjaGFuZ2VzIHdpdGhvdXQgd2FpdGluZyBhIHRpY2suXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5JbW1lZGlhdGVseShmOiAoKSA9PiB2b2lkKSB7IGYoKTsgfSIsIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBvcHRpb25zLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IEVmZmVjdENhbGxiYWNrLCBJbnB1dHMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cblxuXG5jb25zdCBUYWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlfLVwiO1xuXG5mdW5jdGlvbiBiYXNlNjQodmFsdWU6IG51bWJlcikge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTZCaXRzKCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xufVxuXG5mdW5jdGlvbiByYW5kb202NEJpdHMoKSB7XG4gICAgcmV0dXJuIFtyYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpLCByYW5kb202Qml0cygpXSBhcyBjb25zdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICogXG4gKiBcbiAqIChUaGlzIGlzIGhlcmUsIGluIHRoaXMgcGFydGljdWxhciBmaWxlLCB0byBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAqIHdpdGhvdXQgYWxzbyBtYWtpbmcgYSB1dGlsaXRpZXMgZmlsZS5cbiAqIE9uY2Ugd2UgY2FuIHJlbW92ZSB0aGlzIGhvb2ssIHdlIGNhbiBwdXQgdGhpcyBmdW5jdGlvbiBiYWNrIHdpdGggdXNlUmFuZG9tSWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUlkKHByZWZpeD86IHN0cmluZykge1xuICAgIHJldHVybiBgJHtwcmVmaXggPz8gXCJpZC1cIn0ke3JhbmRvbTY0Qml0cygpLm1hcChuID0+IGJhc2U2NChuKSkuam9pbihcIlwiKX1gO1xufVxuXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXA8c3RyaW5nLCBJbnB1dHMgfCB1bmRlZmluZWQ+KCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXA8c3RyaW5nLCB7IGVmZmVjdDogRWZmZWN0Q2FsbGJhY2ssIGlucHV0cz86IElucHV0cywgY2xlYW51cDogbnVsbCB8IHVuZGVmaW5lZCB8IHZvaWQgfCAoKCkgPT4gdm9pZCkgfT4oKTtcblxuXG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcblxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdIGFzICh2bm9kZTogVk5vZGUsIGNvbW1pdFF1ZXVlOiBDb21wb25lbnRbXSkgPT4gdm9pZDtcbmNvbnN0IG5ld0NvbW1pdDogdHlwZW9mIG9yaWdpbmFsQ29tbWl0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICBmb3IgKGNvbnN0IFtpZCwgZWZmZWN0SW5mb10gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgZWZmZWN0SW5mby5pbnB1dHMpKSB7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXA/LigpO1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgZWZmZWN0SW5mby5pbnB1dHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvUnVuLmNsZWFyKCk7XG4gICAgb3JpZ2luYWxDb21taXQ/LiguLi5hcmdzKTtcbn1cbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQgYXMgbmV2ZXJcblxuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKiBcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqIFxuICogQHBhcmFtIGVmZmVjdCBcbiAqIEBwYXJhbSBpbnB1dHMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0OiBFZmZlY3RDYWxsYmFjayB8IG51bGwsIGlucHV0cz86IElucHV0cykge1xuXG4gICAgLyooKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gdXNlUmVmPHZvaWQgfCAoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgICAgICAgY29uc3QgcHJldkFyZ3NSZWYgPSB1c2VSZWY8SW5wdXRzPihudWxsISk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChpbnB1dHMsIHByZXZBcmdzUmVmLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBwcmV2QXJnc1JlZi5jdXJyZW50ID0gaW5wdXRzITtcbiAgICAgICAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50KCk7XG4gICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBlZmZlY3QoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7Ki9cblxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIGlmIChlZmZlY3QpXG4gICAgICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICBlbHNlXG4gICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9LCBbaWRdKVxufVxuXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzPzogSW5wdXRzLCBuZXdBcmdzPzogSW5wdXRzKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhKFxuICAgICAgICAhb2xkQXJncyB8fFxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XG4gICAgICAgIG5ld0FyZ3M/LnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG4gICAgKTtcbn0iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlQmVmb3JlTGF5b3V0RWZmZWN0IH0gZnJvbSBcIi4vdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZS5qc1wiO1xuXG5jb25zdCBVbnNldCA9IFN5bWJvbChcInVuc2V0XCIpO1xuXG5cbi8qKlxuICogR2l2ZW4gYW4gaW5wdXQgdmFsdWUsIHJldHVybnMgYSBjb25zdGFudCBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqIFxuICogVGhpcyB1c2VzIGBvcHRpb25zLmRpZmZlZGAgaW4gb3JkZXIgdG8gcnVuIGJlZm9yZSBldmVyeXRoaW5nLCBldmVuXG4gKiByZWYgYXNzaWdubWVudC4gVGhpcyBtZWFucyB0aGlzIGdldHRlciBpcyBzYWZlIHRvIHVzZSBhbnl3aGVyZSAqKipleGNlcHQgdGhlIHJlbmRlciBwaGFzZSoqKi5cbiAqIFxuICogQHBhcmFtIHZhbHVlIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVHZXR0ZXI8VD4odmFsdWU6IFQpIHtcblxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxUPihVbnNldCBhcyB1bmtub3duIGFzIFQpO1xuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKCkgPT4geyByZWYuY3VycmVudCA9IHZhbHVlOyB9KSwgW3ZhbHVlXSk7XG5cbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAocmVmLmN1cnJlbnQgYXMgdW5rbm93biA9PT0gVW5zZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cblxuXG4vKipcbiAqIExpa2UgYHVzZVN0YWJsZUdldHRlcmAsIGJ1dCAqKipyZXF1aXJlcyoqKiB0aGF0IGV2ZXJ5dGhpbmcgaW4gdGhlIG9iamVjdCBpcyBhbHNvIHN0YWJsZSxcbiAqIGFuZCBpbiB0dXJuIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgaXRzZWxmIGlzIHN0YWJsZS5cbiAqIEBwYXJhbSB0IFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVPYmplY3Q8VCBleHRlbmRzIHt9Pih0OiBUKTogVCB7XG4gICAgY29uc3QgZSA9IE9iamVjdC5lbnRyaWVzKHQpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZU9iamVjdFwiLCBlLmxlbmd0aCwgLi4uZS5tYXAoKFtfaywgdl0pID0+IHYpKTtcbiAgICByZXR1cm4gdXNlUmVmKHQpLmN1cnJlbnQ7XG59XG5cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIGFzIHVzZUNhbGxiYWNrTmF0aXZlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGUuanNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyLmpzXCI7XG5cblxuLy9jb25zdCBfSVNfU1RBQkxFX0dFVFRFUiA9IFN5bWJvbChcIlNUQUJMRVwiKTtcbmV4cG9ydCB0eXBlIFN0YWJsZTxUPiA9IFQ7Ly8gJiB7IFtfU1RBQkxFXTogdHJ1ZSB9O1xuXG4vKipcbiAqIFdlIGtlZXAgdHJhY2sgb2Ygd2hpY2ggY2FsbGJhY2tzIGFyZSBzdGFibGUgd2l0aCBhIFdlYWtNYXAgaW5zdGVhZCBvZiwgc2F5LCBhIHN5bWJvbCBiZWNhdXNlXG4gKiBgdXNlQ2FsbGJhY2tgIHdpbGwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCdzIHN0YWJsZSBhY3Jvc3MgKmFsbCogcmVuZGVycywgbWVhbmluZ1xuICogd2UgY2FuJ3QgdXNlIG91ciBmdW5ueSBcImBpZmAgb25seSB3b3JrcyBoZXJlIGJlY2F1c2UgaXQgZG9lc24ndCBicmVhayB0aGUgcnVsZXMgb2YgaG9va3NcIiB0cmljayB0aGVuLlxuICovXG5jb25zdCBtYXAgPSBuZXcgV2Vha01hcDxGdW5jdGlvbiwgYm9vbGVhbj4oKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhYmxlR2V0dGVyPFQgZXh0ZW5kcyBGdW5jdGlvbj4ob2JqOiBUKTogb2JqIGlzIFN0YWJsZTxUPiB7XG4gICAgcmV0dXJuIChtYXAuZ2V0KG9iaikgPz8gZmFsc2UpO1xufVxuZnVuY3Rpb24gc2V0SXNTdGFibGVHZXR0ZXI8VCBleHRlbmRzICguLi5fYXJnczogYW55W10pID0+IGFueT4ob2JqOiBUKTogU3RhYmxlPFQ+IHtcbiAgICBtYXAuc2V0KG9iaiwgdHJ1ZSk7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuXG4vKipcbiAqIEFsdGVybmF0ZSB1c2VDYWxsYmFjaygpIHdoaWNoIGFsd2F5cyByZXR1cm5zIHRoZSBzYW1lICh3cmFwcGVkKSBmdW5jdGlvbiByZWZlcmVuY2VcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxuICogXG4gKiBJbiBnZW5lcmFsLCBqdXN0IHBhc3MgdGhlIGZ1bmN0aW9uIHlvdSB3YW50IHRvIGJlIHN0YWJsZSAoYnV0IHlvdSBjYW4ndCB1c2UgaXQgZHVyaW5nIHJlbmRlcixcbiAqIHNvIGJlIGNhcmVmdWwhKS4gIEFsdGVybmF0aXZlbHksIGlmIHlvdSBuZWVkIGEgc3RhYmxlIGNhbGxiYWNrIHRoYXQgKipjYW4qKiBiZSB1c2VkXG4gKiBkdXJpbmcgcmVuZGVyLCBwYXNzIGFuIGVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgYW5kIGl0J2xsIGFjdCBsaWtlIGB1c2VDYWxsYmFja2Agd2l0aCBhblxuICogZW1wdHkgZGVwZW5kZW5jeSBhcnJheSwgYnV0IHdpdGggdGhlIGFzc29jaWF0ZWQgc3RhYmxlIHR5cGluZy4gSW4gdGhpcyBjYXNlLCB5b3UgKioqbXVzdCoqKiBlbnN1cmUgdGhhdCBpdFxuICogdHJ1bHkgaGFzIG5vIGRlcGVuZGVuY2llcy9vbmx5IHN0YWJsZSBkZXBlbmRlbmNpZXMhIVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZD4oZm46IE5vbk51bGxhYmxlPFQ+LCBub0RlcHM/OiBbXSB8IG51bGwgfCB1bmRlZmluZWQpOiBTdGFibGU8Tm9uTnVsbGFibGU8VD4+IHtcbiAgICB0eXBlIFUgPSAoTm9uTnVsbGFibGU8VD4gJiAoKC4uLmFyZ3M6IGFueSkgPT4gYW55KSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlU3RhYmxlQ2FsbGJhY2tcIiwgbm9EZXBzID09IG51bGwsIG5vRGVwcz8ubGVuZ3RoLCBpc1N0YWJsZUdldHRlcjxVPihmbiBhcyBVKSk7XG4gICAgaWYgKGlzU3RhYmxlR2V0dGVyKGZuKSlcbiAgICAgICAgcmV0dXJuIGZuO1xuXG4gICAgaWYgKG5vRGVwcyA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcjxVPihmbik7XG4gICAgICAgIHJldHVybiBzZXRJc1N0YWJsZUdldHRlcih1c2VDYWxsYmFja05hdGl2ZTxVPigoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIoKSguLi5hcmdzKTtcbiAgICAgICAgfSkgYXMgVSwgW10pKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5hc3NlcnQobm9EZXBzLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIHJldHVybiBzZXRJc1N0YWJsZUdldHRlcih1c2VDYWxsYmFja05hdGl2ZTxVPihmbiwgW10pKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbnR5cGUgQyA9IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNsYXNzTmFtZVwiXTtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKiBcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHNDbGFzczogQywgbGhzQ2xhc3NOYW1lOiBDLCByaHNDbGFzczogQywgcmhzQ2xhc3NOYW1lOiBDKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cblxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pXG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGgsIFJlZiwgUmVmT2JqZWN0IH0gZnJvbSBcInByZWFjdFwiO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWY8VD4oaW5zdGFuY2U6IFQgfCBudWxsLCByZWY6IFJlZjxUPiB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIChyZWYgYXMgUmVmT2JqZWN0PFQgfCBudWxsPikuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHMgXG4gKiBAcGFyYW0gcmhzIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4ocmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltcInJlZlwiXSwgbGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltcInJlZlwiXSkge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkITtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocyE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHMhO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY29tYmluZWQoY3VycmVudDogRSB8IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5cbmZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGU6IHN0cmluZyk6IGguSlNYLkNTU1Byb3BlcnRpZXMge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKSBhcyB1bmtub3duIGFzIGguSlNYLkNTU1Byb3BlcnRpZXM7XG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqIFxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wic3R5bGVcIl0sIHJoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wic3R5bGVcIl0pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSB7XG5cbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHMgJiYgIXJocylcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIGlmICghbGhzICYmIHJocylcbiAgICAgICAgICAgIHJldHVybiByaHM7XG5cbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzICYmIHJocykge1xuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHN0eWxlU3RyaW5nVG9PYmplY3QobGhzIGFzIHN0cmluZyksIHJocykgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHN0eWxlU3RyaW5nVG9PYmplY3QocmhzIGFzIHN0cmluZykpIGFzIGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzfTske3JocyA/PyBcIlwifWAgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzID8/IHt9KSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxuICAgICAgICAuLi4ocmhzID8/IHt9KSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXG4gICAgfSBhcyB1bmtub3duIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbn1cblxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZS5qc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzLmpzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzLmpzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlcy5qc1wiO1xuXG5sZXQgbG9nID0gY29uc29sZS53YXJuO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMjogdHlwZW9mIGNvbnNvbGVbXCJsb2dcIl0pIHtcbiAgICBsb2cgPSBsb2cyXG59XG5cblxuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqIFxuICogVGhlIGhvb2sgaXMgYXdhcmUgb2YgYW5kIGNhbiBpbnRlbGxpZ2VudGx5IG1lcmdlIGBjbGFzc05hbWVgLCBgY2xhc3NgLCBgc3R5bGVgLCBgcmVmYCwgYW5kIGFsbCBldmVudCBoYW5kbGVycy5cbiAqIEBwYXJhbSBsaHMyIFxuICogQHBhcmFtIHJoczIgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4oLi4uYWxsUHJvcHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VNZXJnZWRQcm9wc1wiLCBhbGxQcm9wcy5sZW5ndGgpO1xuICAgIGxldCByZXQ6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+ID0ge307XG4gICAgZm9yIChsZXQgbmV4dFByb3BzIG9mIGFsbFByb3BzKSB7XG4gICAgICAgIHJldCA9IHVzZU1lcmdlZFByb3BzMjxFPihyZXQsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbn1cblxuY29uc3Qga25vd25zID0gbmV3IFNldDxzdHJpbmc+KFtcImNoaWxkcmVuXCIsIFwicmVmXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xhc3NcIiwgXCJzdHlsZVwiXSlcblxuZnVuY3Rpb24gbWVyZ2VVbmtub3duKGtleTogc3RyaW5nLCBsaHNWYWx1ZTogdW5rbm93biwgcmhzVmFsdWU6IHVua25vd24pIHtcblxuICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSBhcyBuZXZlciwgcmhzVmFsdWUgYXMgbmV2ZXIpO1xuICAgICAgICByZXR1cm4gbWVyZ2VkIGFzIG5ldmVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiBsaHNWYWx1ZSBhcyBuZXZlcjtcbiAgICAgICAgZWxzZSBpZiAoKHJoc1ZhbHVlIGFzIGFueSkgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgbG9nPy4oYFRoZSBwcm9wIFwiJHtrZXl9XCIgY2Fubm90IHNpbXVsdGFuZW91c2x5IGJlIHRoZSB2YWx1ZXMgJHtsaHNWYWx1ZX0gYW5kICR7cmhzVmFsdWV9LiBPbmUgbXVzdCBiZSBjaG9zZW4gb3V0c2lkZSBvZiB1c2VNZXJnZWRQcm9wcy5gKTtcbiAgICAgICAgICAgIHJldHVybiByaHNWYWx1ZSBhcyBuZXZlclxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbi5cbiAqIFxuICogVGhpcyBpcyBvbmUgb2YgdGhlIG1vc3QgY29tbW9ubHkgY2FsbGVkIGZ1bmN0aW9ucyBpbiB0aGlzIGFuZCBjb25zdW1lciBsaWJyYXJpZXMsXG4gKiBzbyBpdCB0cmFkZXMgYSBiaXQgb2YgcmVhZGFiaWxpdHkgZm9yIHNwZWVkIChpLmUuIHdlIGRvbid0IGRlY29tcG9zZSBvYmplY3RzIGFuZCBqdXN0IGRvIHJlZ3VsYXIgcHJvcGVydHkgYWNjZXNzLCBpdGVyYXRlIHdpdGggYGZvci4uLmluYCwgaW5zdGVhZCBvZiBgT2JqZWN0LmVudHJpZXNgLCBldGMuKVxuICovXG5mdW5jdGlvbiB1c2VNZXJnZWRQcm9wczI8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihsaHNBbGw6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCByaHNBbGw6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+KTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4ge1xuXG4gICAgXG4gICAgY29uc3QgcmV0OiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiA9IHtcbiAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzPEU+KGxoc0FsbC5yZWYsIHJoc0FsbC5yZWYpLFxuICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoc0FsbC5zdHlsZSwgcmhzQWxsLnN0eWxlKSxcbiAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoc0FsbFtcImNsYXNzXCJdLCBsaHNBbGwuY2xhc3NOYW1lLCByaHNBbGxbXCJjbGFzc1wiXSwgcmhzQWxsLmNsYXNzTmFtZSksXG4gICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHNBbGwuY2hpbGRyZW4sIHJoc0FsbC5jaGlsZHJlbiksXG4gICAgfSBhcyBhbnk7XG5cbiAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LnJlZjtcbiAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuc3R5bGU7XG4gICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5jbGFzc05hbWU7XG4gICAgaWYgKHJldFtcImNsYXNzXCJdID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXRbXCJjbGFzc1wiXTtcbiAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQuY2hpbGRyZW47XG5cbiAgICBmb3IgKGNvbnN0IGxoc0tleVUgaW4gbGhzQWxsKSB7XG4gICAgICAgIGNvbnN0IGxoc0tleSA9IGxoc0tleVUgYXMga2V5b2YgdHlwZW9mIGxoc0FsbDtcbiAgICAgICAgaWYgKGtub3ducy5oYXMobGhzS2V5KSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICByZXRbbGhzS2V5XSA9IGxoc0FsbFtsaHNLZXldO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcmhzS2V5VSBpbiByaHNBbGwpIHtcbiAgICAgICAgY29uc3QgcmhzS2V5ID0gcmhzS2V5VSBhcyBrZXlvZiB0eXBlb2YgcmhzQWxsO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhyaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VVbmtub3duKHJoc0tleSwgcmV0W3Joc0tleV0sIHJoc0FsbFtyaHNLZXldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUZ1bmN0aW9uczxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiAodm9pZCB8IFByb21pc2U8dm9pZD4pLCBVIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiAodm9pZCB8IFByb21pc2U8dm9pZD4pPihsaHM6IFQgfCBudWxsIHwgdW5kZWZpbmVkLCByaHM6IFUgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG5cbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcblxuICAgIHJldHVybiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4ge1xuICAgICAgICBjb25zdCBsdiA9IGxocyguLi5hcmdzKTtcbiAgICAgICAgY29uc3QgcnYgPSByaHMoLi4uYXJncyk7XG5cbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2x2LCBydl0pO1xuICAgIH07XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUuanNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxUIGV4dGVuZHMgRXZlbnRUYXJnZXQ+IHtcbiAgICByZWZFbGVtZW50UmV0dXJuOiB7XG4gICAgICAgIC8qKiAqKlNUQUJMRSoqICovXG4gICAgICAgIGdldEVsZW1lbnQoKTogVCB8IG51bGw7XG4gICAgICAgIHByb3BzU3RhYmxlOiBoLkpTWC5IVE1MQXR0cmlidXRlczxUPjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUmVmRWxlbWVudFBhcmFtZXRlcnM8VD4ge1xuICAgIC8qKlxuICAgICAqIEZvciB0aGUgc2FrZSBvZiBjb252ZW5pZW5jZSxcbiAgICAgKiB0aGlzIG9uZSBpcyBvcHRpb25hbCwgc2luY2UgdXNpbmcgdGhpcyBob29rIGlzIHNvIGNvbW1vbixcbiAgICAgKiBidXQgdXNpbmcgaXRzIHBhcmFtZXRlciBvcHRpb25zIGlzIHNvIHVuY29tbW9uLCBhbmQgaXQnc1xuICAgICAqIGFic2Vuc2UgaXNuJ3QgdXN1YWxseSBiZWNhdXNlIGl0IHdhcyBmb3Jnb3R0ZW4sIGl0J3MgYmVjYXVzZVxuICAgICAqIGl0IGRvZXNuJ3QgbWF0dGVyLlxuICAgICAqL1xuICAgIHJlZkVsZW1lbnRQYXJhbWV0ZXJzPzoge1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U/OiBPblBhc3NpdmVTdGF0ZUNoYW5nZTxUIHwgbnVsbCwgbmV2ZXI+O1xuICAgICAgICBvbk1vdW50PzogKGVsZW1lbnQ6IFQpID0+IHZvaWQ7XG4gICAgICAgIG9uVW5tb3VudD86IChlbGVtZW50OiBUKSA9PiB2b2lkO1xuICAgIH1cbn1cblxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnRQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4ocjogVXNlUmVmRWxlbWVudFJldHVyblR5cGU8RT4sIC4uLm90aGVyUHJvcHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdIHtcbiAgICByZXR1cm4gW3IucmVmRWxlbWVudFJldHVybi5wcm9wc1N0YWJsZSwgLi4ub3RoZXJQcm9wc107XG59Ki9cblxuLyoqXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCwgXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqIFxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKiBcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50PFQgZXh0ZW5kcyBFdmVudFRhcmdldD4oYXJnczogVXNlUmVmRWxlbWVudFBhcmFtZXRlcnM8VD4pOiBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxUPiB7XG4gICAgY29uc3QgeyBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCB9ID0gKGFyZ3MucmVmRWxlbWVudFBhcmFtZXRlcnMgfHwge30pO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVJlZkVsZW1lbnRcIiwgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQpO1xuXG4gICAgLy8gQ2FsbGVkIChpbmRpcmVjdGx5KSBieSB0aGUgcmVmIHRoYXQgdGhlIGVsZW1lbnQgcmVjZWl2ZXMuXG4gICAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrPE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQgfCBudWxsLCBuZXZlcj4+KChlLCBwcmV2VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG9uRWxlbWVudENoYW5nZT8uKGUsIHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChwcmV2VmFsdWUpXG4gICAgICAgICAgICBvblVubW91bnQ/LihwcmV2VmFsdWUhKTtcblxuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIG9uTW91bnQ/LihlKTtcblxuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlPFQgfCBudWxsLCBuZXZlcj4oaGFuZGxlciwgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHkpO1xuICAgIGNvbnN0IHByb3BzU3RhYmxlID0gdXNlUmVmPGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+Pih7IHJlZjogc2V0RWxlbWVudCB9KTtcblxuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICByZWZFbGVtZW50UmV0dXJuOiB7XG4gICAgICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICAgICAgcHJvcHNTdGFibGU6IHByb3BzU3RhYmxlLmN1cnJlbnRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBgQmxvY2tpbmdFbGVtZW50c2AgbWFuYWdlcyBhIHN0YWNrIG9mIGVsZW1lbnRzIHRoYXQgaW5lcnQgdGhlIGludGVyYWN0aW9uXG4gKiBvdXRzaWRlIHRoZW0uIFRoZSB0b3AgZWxlbWVudCBpcyB0aGUgaW50ZXJhY3RpdmUgcGFydCBvZiB0aGUgZG9jdW1lbnQuXG4gKiBUaGUgc3RhY2sgY2FuIGJlIHVwZGF0ZWQgd2l0aCB0aGUgbWV0aG9kcyBgcHVzaCwgcmVtb3ZlLCBwb3BgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NraW5nRWxlbWVudHMge1xuICAvKipcbiAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gVGhpcyBlbXB0aWVzXG4gICAqIHRoZSBibG9ja2luZyBlbGVtZW50c1xuICAgKi9cbiAgZGVzdHJ1Y3RvcigpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgdG9wIGJsb2NraW5nIGVsZW1lbnQuXG4gICAqL1xuICB0b3A6IEhUTUxFbGVtZW50fG51bGw7XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGVsZW1lbnQgdG8gdGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVzaChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmcgZWxlbWVudHMuIFJldHVybnMgdHJ1ZSBpZiB0aGVcbiAgICogZWxlbWVudCB3YXMgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdG9wIGJsb2NraW5nIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXG4gICAqL1xuICBwb3AoKTogSFRNTEVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBhIGJsb2NraW5nIGVsZW1lbnQuXG4gICAqL1xuICBoYXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHMgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICRibG9ja2luZ0VsZW1lbnRzOiBCbG9ja2luZ0VsZW1lbnRzO1xufVxuXG4oKCkgPT4ge1xuICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuXG4gIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuXG4gIGludGVyZmFjZSBJbmVydGFibGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW5lcnQ/OiBib29sZWFuO1xuICB9XG5cbiAgaW50ZXJmYWNlIEludGVybmFsU3RhdGUge1xuICAgIFtfc2libGluZ3NUb1Jlc3RvcmVdOiBTZXQ8TWF5YmVIYXNJbnRlcm5hbFN0YXRlPjtcbiAgICBbX3BhcmVudE1PXTogTXV0YXRpb25PYnNlcnZlcjtcbiAgfVxuICBpbnRlcmZhY2UgSGFzSW50ZXJuYWxTdGF0ZSBleHRlbmRzIEluZXJ0YWJsZSwgSW50ZXJuYWxTdGF0ZSB7fVxuICBpbnRlcmZhY2UgTWF5YmVIYXNJbnRlcm5hbFN0YXRlIGV4dGVuZHMgSW5lcnRhYmxlLCBQYXJ0aWFsPEludGVybmFsU3RhdGU+IHt9XG5cbiAgLyoqXG4gICAqIFNoYWR5RE9NIHNoYWR5IHJvb3RzIGxvb2sgYSBsb3QgbGlrZSByZWFsIFNoYWRvd1Jvb3RzLiBUaGUgX19zaGFkeSBwcm9wZXJ0eVxuICAgKiBnaXZlcyB0aGVtIGF3YXksIHRob3VnaC5cbiAgICovXG4gIGludGVyZmFjZSBNYXliZVNoYWR5Um9vdCBleHRlbmRzIEVsZW1lbnQge1xuICAgIF9fc2hhZHk6IHVua25vd247XG4gICAgaG9zdDogRWxlbWVudDtcbiAgfVxuXG4gIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIGltcGxlbWVudHMgQmxvY2tpbmdFbGVtZW50cyB7XG4gICAgLyoqXG4gICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2Jsb2NraW5nRWxlbWVudHNdOiBNYXliZUhhc0ludGVybmFsU3RhdGVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlW190b3BFbFBhcmVudHNdOiBIYXNJbnRlcm5hbFN0YXRlW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICogcHVzaGVkLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG5ldyBTZXQ8TWF5YmVIYXNJbnRlcm5hbFN0YXRlPigpO1xuXG4gICAgZGVzdHJ1Y3RvcigpOiB2b2lkIHtcbiAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAvLyBleGNlcHRpb24uXG4gICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXMgYXMgdW5rbm93biBhcyB7XG4gICAgICAgIFtfYmxvY2tpbmdFbGVtZW50c106IG51bGw7XG4gICAgICAgIFtfdG9wRWxQYXJlbnRzXTogbnVsbDtcbiAgICAgICAgW19hbHJlYWR5SW5lcnRFbGVtZW50c106IG51bGw7XG4gICAgICB9O1xuICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgIH1cblxuICAgIGdldCB0b3AoKTogSFRNTEVsZW1lbnR8bnVsbCB7XG4gICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvcCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICByZXR1cm4gdG9wO1xuICAgIH1cblxuICAgIGhhcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlW190b3BDaGFuZ2VkXShuZXdUb3A6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZXxudWxsKTogdm9pZCB7XG4gICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgfVxuICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgIC8vIGJlbG93LlxuICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHMgYXMgQXJyYXk8SGFzSW50ZXJuYWxTdGF0ZT47XG5cbiAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG5cbiAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgaS0tO1xuICAgICAgICBqLS07XG4gICAgICB9XG4gICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19zd2FwSW5lcnRlZFNpYmxpbmddKFxuICAgICAgICBvbGRJbmVydDogSGFzSW50ZXJuYWxTdGF0ZSwgbmV3SW5lcnQ6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZSk6IHZvaWQge1xuICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICB9XG4gICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgIH1cbiAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgKG9sZEluZXJ0IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgIChvbGRJbmVydCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHM6IEhhc0ludGVybmFsU3RhdGVbXSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgIChlbGVtZW50IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAoZWxlbWVudCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX2luZXJ0U2libGluZ3NdKFxuICAgICAgICBlbGVtZW50czogTWF5YmVIYXNJbnRlcm5hbFN0YXRlW10sIHRvU2tpcDogU2V0PEhUTUxFbGVtZW50PnxudWxsLFxuICAgICAgICB0b0tlZXBJbmVydDogU2V0PEhUTUxFbGVtZW50PnxudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSE7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlIGFzIE1heWJlU2hhZHlSb290O1xuICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgfVxuICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gKG11dGF0aW9uLnRhcmdldCBhcyBTaGFkb3dSb290KS5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQgYXMgSGFzSW50ZXJuYWxTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuXG4gICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfaXNJbmVydGFibGVdKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgKi9cbiAgICBwcml2YXRlW19nZXRQYXJlbnRzXShlbGVtZW50OiBIVE1MRWxlbWVudCk6IEFycmF5PEhUTUxFbGVtZW50PiB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICBsZXQgY3VycmVudDogSFRNTEVsZW1lbnR8bnVsbHx1bmRlZmluZWQgPSBlbGVtZW50O1xuICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgICAgIChjdXJyZW50IGFzIE5vZGUgYXMgU2hhZG93Um9vdCkuaG9zdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAqL1xuICAgIHByaXZhdGVbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTpcbiAgICAgICAgU2V0PEhUTUxFbGVtZW50PnxudWxsIHtcbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuICAgICAgbGV0IGk7XG4gICAgICBsZXQgajtcbiAgICAgIGxldCBub2RlcztcbiAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICAoZG9jdW1lbnQgYXMgRG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50cykuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuIiwidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAqL1xuXG4oZnVuY3Rpb24gKCkge1xuICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gIC8qKlxuICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICovXG4gIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gIC8qKlxuICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICogYXR0cmlidXRlLlxuICAgKlxuICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgKlxuICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgKlxuICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAqL1xuXG4gIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBIVE1MRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICovXG4gICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAqXG4gICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAqXG4gICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICovXG5cblxuICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ25vZGUnLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgfVxuXG4gICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbmVydE5vZGU7XG4gIH0oKTtcblxuICAvKipcbiAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgKlxuICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAqL1xuXG5cbiAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgIH1cblxuICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAvKipcbiAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgKi9cbiAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgKi9cblxuXG4gICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFIVE1MRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgaWYgKCFIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgIH0sXG4gICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBhc3NlcnRFbXB0eU9iamVjdCB9IGZyb20gXCIuLi91dGlsL2Fzc2VydC5qc1wiO1xuaW1wb3J0IHsgZGVib3VuY2VSZW5kZXJpbmcsIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlLCBQYXNzaXZlU3RhdGVVcGRhdGVyLCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlLmpzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2suanNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZU9iamVjdCB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyLmpzXCI7XG5cbi8qKlxuICogUmVtaW5kZXIgb2Ygb3JkZXIgb2YgZXhlY3V0aW9uOlxuICogXG4gKiAqICh0cmVlIG1vdW50cylcbiAqICogUGFyZW50IHJlbmRlcnNcbiAqICogQ2hpbGRyZW4gcmVuZGVyXG4gKiAqIENoaWxkcmVuIHJlY2VpdmUgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBQYXJlbnQgcmVjZWl2ZXMgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBDaGlsZHJlbiBydW4gZWZmZWN0c1xuICogKiBQYXJlbnQgcnVucyBlZmZlY3RzXG4gKiBcbiAqICogKHRyZWUgdW5tb3VudHMpXG4gKiAqIFBhcmVudCBydW5zIGVmZmVjdC1jbGVhbnVwXG4gKiAqIFBhcmVudCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqICogQ2hpbGQgcnVucyBlZmZlY3QtY2xlYW51cFxuICogKiBDaGlsZCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqIFxuICogVHdvIHRoaW5ncyB0byBub3RlIGhlcmU6XG4gKiAqIFJlbmRlcmluZyBzdGFydHMgYXQgdGhlIHJvb3QsICBidXQgZWZmZWN0cyBhbmQgcmVmcyBzdGFydCBhdCB0aGUgbGVhdmVzLlxuICogKiByZWZzIGFyZSAqdXN1YWxseSogY2FsbGVkIGJlZm9yZSBlZmZlY3RzLCBidXQgb25seSB3aGVuIHRoYXQgSFRNTEVsZW1lbnQgcmVuZGVycy4gQmFzaWNhbGx5IGp1c3QgYSByZW1pbmRlciB0aGF0IGEgY29tcG9uZW50IGNhbiBiZSBtb3VudGVkIHdpdGhvdXQgaXQgZXhpc3RpbmcgaW4gdGhlIERPTS5cbiAqL1xuY29uc3QgX2NvbW1lbnRzID0gdm9pZCAoMCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgLy9tYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TT5bXCJtYW5hZ2VkQ2hpbGRyZW5SZXR1cm5cIl1cblxuICAgIG1hbmFnZWRDaGlsZENvbnRleHQ6IHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheTogSW50ZXJuYWxDaGlsZEluZm88TT47XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkTW91bnRlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0sIG1vdW50ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0pID0+ICgoKSA9PiB2b2lkKTtcbiAgICB9XG59XG5cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIHRoYXQgY2hpbGRyZW4gYW5kIHBhcmVudHMgdXNlIHRvIGNvbW11bmljYXRlIHdpdGggZWFjaCBvdGhlci5cbiAqIFxuICogKiBgaW5kZXhgIHJlZmVycyB0byB3aGljaCBjaGlsZCB0aGlzIGlzLlxuICogKiBgZmxhZ3NgIGFyZSBxdWljay1hbmQtZWFzeSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgeW91IGNhbiBvcHRpb25hbGx5IHVzZVxuICogKiBgc3ViSW5mb2AgaXMgYW55dGhpbmcgdXNlZCBieSBhIGRlcml2ZWQgaG9vay4gYHVzZVJvdmluZ1RhYkluZGV4YCwgZm9yIGV4YW1wbGUsIG5lZWRzIHRvIGtub3cgaG93IHRvIGZvY3VzIGFuIGFyYml0cmFyeSBjaGlsZCwgc28gdGhlIGNoaWxkIHBvcHVsYXRlcyBgaW5mb2Agd2l0aCBhbiBvYmplY3QgY29udGFpbmluZyBhIG1ldGhvZCBjYWxsZWQgYGZvY3VzU2VsZmAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFuYWdlZENoaWxkSW5mbzxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgaW5kZXg6IFQ7XG59XG5cblxuXG5leHBvcnQgdHlwZSBPbkNoaWxkcmVuTW91bnRDaGFuZ2U8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4gPSAoKG1vdW50ZWQ6IFNldDxUPiwgdW5tb3VudGVkOiBTZXQ8VD4pID0+IHZvaWQpO1xuZXhwb3J0IHR5cGUgT25BZnRlckNoaWxkTGF5b3V0RWZmZWN0PFQgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXI+ID0gKChjYXVzZXJzOiBJdGVyYWJsZTxUPikgPT4gdm9pZCk7XG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICBtYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSdW5zIGFmdGVyIG9uZSBvciBtb3JlIGNoaWxkcmVuIGhhdmUgdXBkYXRlZCB0aGVpciBpbmZvcm1hdGlvbiAoaW5kZXgsIGV0Yy4pLlxuICAgICAgICAgKiBcbiAgICAgICAgICogT25seSBvbmUgd2lsbCBydW4gcGVyIHRpY2ssIGp1c3QgbGlrZSBsYXlvdXRFZmZlY3QsIGJ1dCBpdCBpc24ndFxuICAgICAgICAgKiAqZ3VhcmFudGVlZCogdG8gaGF2ZSBhY3R1YWxseSBiZWVuIGEgY2hhbmdlLlxuICAgICAgICAgKiBcbiAgICAgICAgICogVE9ETzogVGhpcyBlbmRlZCB1cCBub3QgYmVpbmcgbmVlZGVkIGJ5IGFueXRoaW5nLiBJcyBpdCBuZWNlc3Nhcnk/IERvZXMgaXQgY29zdCBhbnl0aGluZz9cbiAgICAgICAgICovXG4gICAgICAgIG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdD86IG51bGwgfCB1bmRlZmluZWQgfCBPbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3Q8TVtcImluZGV4XCJdPjtcbiAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhbWUgYXMgdGhlIGFib3ZlLCBidXQgb25seSBmb3IgbW91bnQvdW5tb3VudCAob3Igd2hlbiBhIGNoaWxkIGNoYW5nZXMgaXRzIGluZGV4KVxuICAgICAgICAgKi9cbiAgICAgICAgb25DaGlsZHJlbk1vdW50Q2hhbmdlPzogbnVsbCB8IHVuZGVmaW5lZCB8IE9uQ2hpbGRyZW5Nb3VudENoYW5nZTxNW1wiaW5kZXhcIl0+O1xuICAgIFxuICAgICAgICBvbkNoaWxkQ291bnRDaGFuZ2U/OiBudWxsIHwgdW5kZWZpbmVkIHwgKChjb3VudDogbnVtYmVyKSA9PiB2b2lkKTtcbiAgICB9XG59XG5cbi8vIE1DU3ViSW5mbyBjb250YWlucyB0aGUgZW50aXJldHkgb2YgdGhlIHNhdmVkIGRhdGEgZm9yIHRoaXMgY2hpbGQuICBBbGwgb2YgaXQuIEV2ZW4gdHlwZXMgdGhlIHVzZXIgd2lsbCBuZXZlciBiZSBhYmxlIHRvIHBhc3MgaW4gYmVjYXVzZSB0aGV5J3JlIGludGVybmFsbHkgZGVyaXZlZC5cbi8vIFN1YmJlc3RJbmZvIHJlZmVycyB0byB0aGUgYWN0dWFsIHBhcmFtZXRlcnMgdGhlIHVzZXIgcGFzc2VzIGluIHRoYXQgY291bGQgYmUgdG90YWxseSB1bnJlbGF0ZWQuIFxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHByb3BlcnR5IHNoYXJlZCBhbW9uZyBhbGwgbWFuYWdlZCBjaGlsZHJlbi5cbiAgICAvLyBUZWNobmljYWxseSB0aGlzIGlzIHJlZHVuZGFudCB3aXRoIHRoZSBzZWNvbmQgYXJndW1lbnQsIHdoaWNoIGlzLi4uZWguIEJ1dCB0aGUgdHlwZXMgYXJlIGNsZWFyLlxuICAgIG1hbmFnZWRDaGlsZFBhcmFtZXRlcnM6IFBpY2s8TSwgXCJpbmRleFwiPjtcblxuICAgIC8qKlxuICAgICAqIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkbid0IGJlIG51bGwsIGJ1dCBmb3IgY29udmVuaWVuY2UncyBzYWtlIHlvdSBhcmUgYWxsb3dlZCB0bywgd2hpY2ggZGlzYWJsZXMgYWxsIGJlaGF2aW9yLCBhbmQgYWxzbyBtZWFucyBgZ2V0Q2hpbGRyZW5gIHdpbGwgYmUgYHVuZGVmaW5lZGAhXG4gICAgICovXG4gICAgY29udGV4dDogVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNPiB8IG51bGw7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRyZW5SZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjaGlsZCB0aGF0IHJlbmRlcmVkIGl0c2VsZiB3aXRoIHRoZSByZXF1ZXN0ZWQga2V5LlxuICAgICAqIFxuICAgICAqICoqU1RBQkxFKiogKGV2ZW4gdGhvdWdoIGl0J3Mgbm90IGEgZnVuY3Rpb24sIHRoZSBpZGVudGl0eSBvZiB0aGlzIG9iamVjdCBuZXZlciBjaGFuZ2VzKVxuICAgICAqL1xuICAgIG1hbmFnZWRDaGlsZHJlblJldHVybjoge1xuICAgICAgICAvKiogXG4gICAgICAgICAqICoqKlNUQUJMRSoqKlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlIHRoYXQgKipib3RoKiogYGdldENoaWxkcmVuYCBhbmQgdGhlIGBNYW5hZ2VkQ2hpbGRyZW5gIG9iamVjdCBpdCByZXR1cm5zIGFyZSBzdGFibGUhXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUaGlzIGlzIGEgZ2V0dGVyIGluc3RlYWQgb2YgYW4gb2JqZWN0IGJlY2F1c2Ugd2hlbiBmdW5jdGlvbiBjYWxscyBoYXBwZW4gb3V0IG9mIG9yZGVyIGl0J3MgZWFzaWVyIHRvIGp1c3QgaGF2ZSBhbHdheXMgYmVlbiBwYXNzaW5nIGFuZCByZXR1cm4gZ2V0dGVycyBldmVyeXdoZXJlIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuXG4gICAgfTtcblxuICAgIGNvbnRleHQ6IFVzZU1hbmFnZWRDaGlsZHJlbkNvbnRleHQ8TT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkUmV0dXJuVHlwZTxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgbWFuYWdlZENoaWxkUmV0dXJuOiB7XG4gICAgICAgIGdldENoaWxkcmVuKCk6IE1hbmFnZWRDaGlsZHJlbjxNPjtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBBYnN0cmFjdGlvbiBvdmVyIHRoZSBtYW5hZ2VkIGNoaWxkcmVuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFuYWdlZENoaWxkcmVuPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICAvKiogU1RBQkxFICovXG4gICAgZ2V0QXQoaW5kZXg6IE1bXCJpbmRleFwiXSk6IE0gfCB1bmRlZmluZWQ7XG4gICAgLyoqIFNUQUJMRSAqL1xuICAgIGdldEhpZ2hlc3RJbmRleCgpOiBudW1iZXI7XG4gICAgLyoqIFNUQUJMRSAqL1xuICAgIGZvckVhY2g6IChmOiAoY2hpbGQ6IE0pID0+IHZvaWQpID0+IHZvaWQ7XG5cbiAgICAvKiogKipVTlNUQUJMRSoqLCBhbHNvIGludGVybmFsLXVzZSBvbmx5LCBhbHNvIFRPRE8gbmVlZCBhIHdvcmthcm91bmQgZm9yIHRoaXMgZm9yIHNvcnRhYmxlIGNoaWxkcmVuICovXG4gICAgYXJyYXlTbGljZTogKCkgPT4gTVtdO1xufVxuXG5pbnRlcmZhY2UgSW50ZXJuYWxDaGlsZEluZm88TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88c3RyaW5nIHwgbnVtYmVyPj4ge1xuICAgIGFycjogQXJyYXk8TT47XG4gICAgcmVjOiBQYXJ0aWFsPFJlY29yZDxNW1wiaW5kZXhcIl0sIE0+PjtcbiAgICBoaWdoZXN0SW5kZXg6IG51bWJlcjtcbiAgICBsb3dlc3RJbmRleDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEFsbG93cyBhIHBhcmVudCBjb21wb25lbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGNlcnRhaW5cbiAqIGNoaWxkIGNvbXBvbmVudHMgb25jZSB0aGV5IGhhdmUgcmVuZGVyZWQuXG4gKiBcbiAqIFRoaXMgaG9vayBpcyBkZXNpZ25lZCB0byBiZSBsaWdodHdlaWdodCwgaW4gdGhhdCB0aGUgcGFyZW50IGtlZXBzIG5vIHN0YXRlXG4gKiBhbmQgcnVucyBubyBlZmZlY3RzLiAgRWFjaCBjaGlsZCAqZG9lcyogcnVuIGFuIGVmZmVjdCwgYnV0IHdpdGggbm8gc3RhdGVcbiAqIGNoYW5nZXMgdW5sZXNzIHlvdSBleHBsaWNpdGx5IHJlcXVlc3QgdGhlbS5cbiAqIFxuICogXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYW5hZ2VkQ2hpbGRyZW48TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88c3RyaW5nIHwgbnVtYmVyPj4ocGFyZW50UGFyYW1ldGVyczogVXNlTWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczxNPik6IFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TT4ge1xuICAgIHR5cGUgSW5kZXhUeXBlID0gTVtcImluZGV4XCJdO1xuICAgIHR5cGUgSW5mbyA9IE07XG5cbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnM6IHsgb25BZnRlckNoaWxkTGF5b3V0RWZmZWN0LCBvbkNoaWxkcmVuTW91bnRDaGFuZ2UsIG9uQ2hpbGRDb3VudENoYW5nZSB9LCAuLi5yZXN0IH0gPSBwYXJlbnRQYXJhbWV0ZXJzO1xuICAgIGFzc2VydEVtcHR5T2JqZWN0KHJlc3QpO1xuXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTWFuYWdlZENoaWxkcmVuXCIsIG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCwgb25DaGlsZHJlbk1vdW50Q2hhbmdlLCBvbkNoaWxkQ291bnRDaGFuZ2UpO1xuXG4gICAgLy9jb25zdCBbZ2V0TW91bnRDb3VudCwgc2V0TW91bnRDb3VudF0gPSB1c2VQYXNzaXZlU3RhdGUob25DaGlsZENvdW50Q2hhbmdlLCByZXR1cm5aZXJvLCBydW5JbW1lZGlhdGVseSk7XG5cbiAgICBjb25zdCBnZXRIaWdoZXN0SW5kZXggPSB1c2VDYWxsYmFjaygoKTogbnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuaGlnaGVzdEluZGV4O1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEFsbCB0aGUgaW5mb3JtYXRpb24gd2UgaGF2ZSBhYm91dCBvdXIgY2hpbGRyZW4gaXMgc3RvcmVkIGluIHRoaXMgKipzdGFibGUqKiBhcnJheS5cbiAgICAvLyBBbnkgbXV0YXRpb25zIHRvIHRoaXMgYXJyYXkgKipETyBOT1QqKiB0cmlnZ2VyIGFueSBzb3J0IG9mIGEgcmUtcmVuZGVyLlxuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbkFycmF5ID0gdXNlUmVmPEludGVybmFsQ2hpbGRJbmZvPE0+Pih7IGFycjogW10sIHJlYzoge30sIGhpZ2hlc3RJbmRleDogMCwgbG93ZXN0SW5kZXg6IDAgfSk7XG5cbiAgICAvLyBGb3IgaW5kaXJlY3QgYWNjZXNzIHRvIGVhY2ggY2hpbGRcbiAgICAvLyBDb21wYXJlIGdldE1hbmFnZWRDaGlsZEluZm9cbiAgICAvLyBUT0RPOiBUaGUgcHJpbWFyeSB1c2UgZm9yIHRoaXMgaXMgZmxhZ2dhYmxlIGNsb3Nlc3QgZml0c1xuICAgIC8vIHdoaWNoIG5lZWRzIHRvIHNlYXJjaCBhbGwgY2hpbGRyZW4gZm9yIHRoYXQgY2xvc2VzdCBmaXQuXG4gICAgLy8gSXQgd291bGQgYmUgbmljZSBpZiB0aGVyZSB3YXMgc29tZXRoaW5nIGJldHRlciBmb3IgdGhhdC5cbiAgICBjb25zdCBmb3JFYWNoQ2hpbGQgPSB1c2VDYWxsYmFjaygoZjogKGNoaWxkOiBJbmZvKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZClcbiAgICAgICAgICAgICAgICBmKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIGluIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQucmVjKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZDogSW5mbyB8IHVuZGVmaW5lZCA9IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQucmVjW2ZpZWxkIGFzIGtleW9mIFJlY29yZDxJbmRleFR5cGUsIEluZm8+XTtcbiAgICAgICAgICAgIGlmIChjaGlsZClcbiAgICAgICAgICAgICAgICBmKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgLy8gUmV0cmlldmVzIHRoZSBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIGNoaWxkIHdpdGggdGhlIGdpdmVuIGluZGV4LlxuICAgIC8vIGB1bmRlZmluZWRgIGlmIG5vdCBjaGlsZCB0aGVyZSwgb3IgaXQncyB1bm1vdW50ZWQuXG4gICAgY29uc3QgZ2V0TWFuYWdlZENoaWxkSW5mbyA9IHVzZUNhbGxiYWNrPE1hbmFnZWRDaGlsZHJlbjxNPltcImdldEF0XCJdPigoaW5kZXg6IEluZGV4VHlwZSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnJbaW5kZXggYXMgbnVtYmVyXSE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlY1tpbmRleCBhcyBJbmRleFR5cGVdITtcbiAgICB9LCBbXSlcblxuICAgIC8vIHRsO2RyIHRoaXMgaXMgYSB3YXkgdG8gaGF2ZSBydW4gdXNlTGF5b3V0RWZmZWN0IG9uY2UgYWZ0ZXIgYWxsIE4gY2hpbGRyZW5cbiAgICAvLyBoYXZlIG1vdW50ZWQgYW5kIHJ1biAqdGhlaXIqIHVzZUxheW91dEVmZmVjdCwgYnV0IGFsc28gKndpdGhvdXQqIHJlLXJlbmRlcmluZ1xuICAgIC8vIG91cnNlbHZlcyBiZWNhdXNlIG9mIGhhdmluZyBhIGBjaGlsZENvdW50YCBzdGF0ZSBvciBhbnl0aGluZyBzaW1pbGFyLlxuICAgIC8vXG4gICAgLy8gV2hlbiB0aGUgY2hpbGQgY291bnQgcmVmIHVwZGF0ZXMsIHdlIHdhbnQgdGhlIHBhcmVudCB0byBhbHNvIHJ1biBhbiBlZmZlY3RcbiAgICAvLyB0byBtYXliZSBkbyBzb21ldGhpbmcgd2l0aCBhbGwgdGhlc2UgY2hpbGRyZW4gdGhhdCBqdXN0IG1vdW50ZWQuXG4gICAgLy8gVGhlIGVhc2llc3Qgd2F5IHdvdWxkIGJlIHVzZUVmZmVjdCguLi4sIFtjaGlsZENvdW50XSkgYnV0XG4gICAgLy8gdGhhdCB3b3VsZCByZXF1aXJlIHVzIGhhdmluZyBhIGNoaWxkQ291bnQgc3RhdGUsIHRoZW4gY2FsbGluZ1xuICAgIC8vIHNldENoaWxkQ291bnQgYW5kIHJlLXJlbmRlcmluZyBldmVyeSB0aW1lIGNoaWxkcmVuIG1vdW50XG4gICAgLy8gKG9ubHkgb25lIHJlLXJlbmRlciBhdCBhIHRpbWUgdW5sZXNzIGNoaWxkcmVuIGFyZSBzdGFnZ2VyZWQsIGJ1dCBzdGlsbClcbiAgICAvLyBcbiAgICAvLyBBcyBhbiBhbHRlcm5hdGUgc29sdXRpb24sIGFueSB0aW1lIGEgY2hpbGQgdXNlcyBVTEUgb24gbW91bnQsIGl0IHF1ZXVlcyBhIG1pY3JvdGFza1xuICAgIC8vIHRvIGVtdWxhdGUgcnVubmluZyBVTEUgb24gdGhlIHBhcmVudC4gT25seSB0aGUgZmlyc3QgY2hpbGQgd2lsbCBhY3R1YWxseSBxdWV1ZVxuICAgIC8vIHRoZSBtaWNyb3Rhc2sgKGJ5IGNoZWNraW5nIGhhc1JlbW90ZVVMRSBmaXJzdCkgc28gdGhhdCB0aGUgXCJlZmZlY3RcIiBvbmx5XG4gICAgLy8gcnVucyBvbmNlLiBXaGVuIGl0J3MgZG9uZSwgaGFzUmVtb3RlVUxFIGlzIHJlc2V0IHNvIGl0IGNhbiBydW4gYWdhaW4gaWZcbiAgICAvLyBtb3JlIGNoaWxkcmVuIG1vdW50L3VubW91bnQuXG4gICAgY29uc3QgaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkID0gdXNlUmVmPHsgbW91bnRzOiBTZXQ8SW5kZXhUeXBlPiwgdW5tb3VudHM6IFNldDxJbmRleFR5cGU+IH0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCByZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzID0gdXNlUmVmKG5ldyBTZXQ8SW5kZXhUeXBlPigpKTtcbiAgICBjb25zdCByZW1vdGVVTEVDaGlsZENoYW5nZWQgPSB1c2VDYWxsYmFjaygoaW5kZXg6IEluZGV4VHlwZSkgPT4ge1xuXG4gICAgICAgIGlmIChyZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQuc2l6ZSA9PSAwKSB7XG4gICAgICAgICAgICBpZiAob25BZnRlckNoaWxkTGF5b3V0RWZmZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVJlbmRlcmluZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdD8uKHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMuY3VycmVudC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2Vycy5jdXJyZW50LmFkZChpbmRleCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHsgfTtcblxuICAgIH0sIFsvKiBNdXN0IHJlbWFpbiBzdGFibGUgKi9dKTtcblxuICAgIGNvbnN0IHJlbW90ZVVMRUNoaWxkTW91bnRlZCA9IHVzZUNhbGxiYWNrKChpbmRleDogSW5kZXhUeXBlLCBtb3VudGVkOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmICghaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgIG1vdW50czogbmV3IFNldCgpLFxuICAgICAgICAgICAgICAgIHVubW91bnRzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKG9uQ2hpbGRDb3VudENoYW5nZSB8fCBvbkNoaWxkcmVuTW91bnRDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkZWJvdW5jZVJlbmRlcmluZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hpbGRyZW5Nb3VudENoYW5nZT8uKGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50IS5tb3VudHMsIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50IS51bm1vdW50cyk7XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hpbGRDb3VudENoYW5nZT8uKGdldENoaWxkcmVuKCkuZ2V0SGlnaGVzdEluZGV4KCkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vdW50ZWQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleCA9IE1hdGgubWF4KG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuaGlnaGVzdEluZGV4LCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnJbaW5kZXggYXMgbnVtYmVyXTtcbiAgICAgICAgICAgICAgICBsZXQgc2hhdmUgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChzaGF2ZSA8PSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5sZW5ndGggJiYgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnJbbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoIC0gMSAtIHNoYXZlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICsrc2hhdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLnNwbGljZShtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5sZW5ndGggLSBzaGF2ZSwgc2hhdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlY1tpbmRleCBhcyBJbmRleFR5cGVdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5oaWdoZXN0SW5kZXggPSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnRbbW91bnRlZCA/IFwibW91bnRzXCIgOiBcInVubW91bnRzXCJdLmFkZChpbmRleCk7XG4gICAgfSwgWy8qIE11c3QgcmVtYWluIHN0YWJsZSAqL10pO1xuXG5cbiAgICBjb25zdCBtYW5hZ2VkQ2hpbGRyZW4gPSB1c2VTdGFibGVPYmplY3Q8TWFuYWdlZENoaWxkcmVuPE0+Pih7XG4gICAgICAgIC4uLnsgXzogbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudCB9IGFzIHt9LFxuICAgICAgICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGQsXG4gICAgICAgIGdldEF0OiBnZXRNYW5hZ2VkQ2hpbGRJbmZvLFxuICAgICAgICBnZXRIaWdoZXN0SW5kZXg6IGdldEhpZ2hlc3RJbmRleCxcbiAgICAgICAgYXJyYXlTbGljZTogdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLnNsaWNlKCk7XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuXG4gICAgY29uc3QgZ2V0Q2hpbGRyZW4gPSB1c2VDYWxsYmFjaygoKSA9PiBtYW5hZ2VkQ2hpbGRyZW4sIFtdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRleHQ6IHVzZVN0YWJsZU9iamVjdCh7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRDb250ZXh0OiB1c2VTdGFibGVPYmplY3Qoe1xuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5OiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHJlbW90ZVVMRUNoaWxkTW91bnRlZCxcbiAgICAgICAgICAgICAgICByZW1vdGVVTEVDaGlsZENoYW5nZWQsXG4gICAgICAgICAgICAgICAgZ2V0Q2hpbGRyZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLFxuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IHsgZ2V0Q2hpbGRyZW4gfVxuICAgIH1cbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hbmFnZWRDaGlsZDxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxudW1iZXIgfCBzdHJpbmc+PihpbmZvOiBVc2VNYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzPE0+LCBtYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzOiBNKTogVXNlTWFuYWdlZENoaWxkUmV0dXJuVHlwZTxNPiB7XG4gICAgdHlwZSBJbmRleFR5cGUgPSBNW1wiaW5kZXhcIl07XG5cbiAgICBjb25zdCB7IG1hbmFnZWRDaGlsZENvbnRleHQ6IHsgZ2V0Q2hpbGRyZW4sIG1hbmFnZWRDaGlsZHJlbkFycmF5LCByZW1vdGVVTEVDaGlsZE1vdW50ZWQsIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZCB9IH0gPSAoaW5mby5jb250ZXh0ID8/IHsgbWFuYWdlZENoaWxkQ29udGV4dDoge30gfSk7XG4gICAgY29uc3QgaW5kZXggPSBtYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzLmluZGV4O1xuICAgIC8vIEFueSB0aW1lIG91ciBjaGlsZCBwcm9wcyBjaGFuZ2UsIG1ha2UgdGhhdCBpbmZvcm1hdGlvbiBhdmFpbGFibGVcbiAgICAvLyB0aGUgcGFyZW50IGlmIHRoZXkgbmVlZCBpdC5cbiAgICAvLyBUaGUgcGFyZW50IGNhbiBsaXN0ZW4gZm9yIGFsbCB1cGRhdGVzIGFuZCBvbmx5IGFjdCBvbiB0aGUgb25lcyBpdCBjYXJlcyBhYm91dCxcbiAgICAvLyBhbmQgbXVsdGlwbGUgY2hpbGRyZW4gdXBkYXRpbmcgaW4gdGhlIHNhbWUgdGljayB3aWxsIGFsbCBiZSBzZW50IGF0IG9uY2UuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG1hbmFnZWRDaGlsZHJlbkFycmF5ID09IG51bGwgfHwgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkID09IG51bGwpIHJldHVybjtcblxuICAgICAgICAvLyBJbnNlcnQgdGhpcyBpbmZvcm1hdGlvbiBpbi1wbGFjZVxuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LmFycltpbmRleCBhcyBudW1iZXJdID0geyAuLi5tYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5yZWNbaW5kZXggYXMgSW5kZXhUeXBlXSA9IHsgLi4ubWFuYWdlZENoaWxkUGFyYW1ldGVycyB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZW1vdGVVTEVDaGlsZENoYW5nZWQoaW5kZXggYXMgSW5kZXhUeXBlKTtcbiAgICB9LCBbLi4uT2JqZWN0LmVudHJpZXMoaW5mbykuZmxhdCg5KV0pOyAgLy8gOSBpcyBpbmZpbml0eSwgcmlnaHQ/IFN1cmUuIFVucmVsYXRlZDogVE9ETy5cblxuICAgIC8vIFdoZW4gd2UgbW91bnQsIG5vdGlmeSB0aGUgcGFyZW50IHZpYSBxdWV1ZU1pY3JvdGFza1xuICAgIC8vIChldmVyeSBjaGlsZCBkb2VzIHRoaXMsIHNvIGV2ZXJ5dGhpbmcncyBjb29yZGluYXRlZCB0byBvbmx5IHF1ZXVlIGEgc2luZ2xlIG1pY3JvdGFzayBwZXIgdGljaylcbiAgICAvLyBEbyB0aGUgc2FtZSBvbiB1bm1vdW50LlxuICAgIC8vIE5vdGU6IEl0J3MgaW1wb3J0YW50IHRoYXQgdGhpcyBjb21lcyBBRlRFUiByZW1vdGVVTEVDaGlsZENoYW5nZWRcbiAgICAvLyBzbyB0aGF0IHJlbW90ZVVMRUNoaWxkTW91bnRlZCBoYXMgYWNjZXNzIHRvIGFsbCB0aGUgaW5mbyBvbiBtb3VudC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZW1vdGVVTEVDaGlsZE1vdW50ZWQ/LihpbmRleCBhcyBJbmRleFR5cGUsIHRydWUpO1xuICAgICAgICByZXR1cm4gKCkgPT4gcmVtb3RlVUxFQ2hpbGRNb3VudGVkPy4oaW5kZXggYXMgSW5kZXhUeXBlLCBmYWxzZSk7XG4gICAgfSwgW2luZGV4XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYW5hZ2VkQ2hpbGRSZXR1cm46IHsgZ2V0Q2hpbGRyZW46IGdldENoaWxkcmVuISB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQ2hpbGRyZW5GbGFnUGFyYW1ldGVyczxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+LCBSPiB7XG5cbiAgICAvKipcbiAgICAgKiBXaGljaCBjaGlsZCBpcyBjb25zaWRlcmVkIGFjdGl2ZSBvbiBtb3VudC5cbiAgICAgKiBcbiAgICAgKiBBZnRlciBtb3VudCwgY2hhbmdlIHRoZSBjdXJyZW50IGFjdGl2ZSBjaGlsZCB3aXRoIGBjaGFuZ2VJbmRleGAuXG4gICAgICovXG4gICAgaW5pdGlhbEluZGV4OiBNW1wiaW5kZXhcIl0gfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiBwcm92aWRlZCwgaWYgdGhlIGdpdmVuIGFjdGl2YXRlZEluZGV4IGRvZXNuJ3QgbWFwIG9udG8gYW55XG4gICAgICogcHJvdmlkZWQgY2hpbGQgKGVpdGhlciBiZWNhdXNlIGl0J3MgdG9vIGxhcmdlIG9yIHRoYXQgY2hpbGRcbiAgICAgKiBkb2Vzbid0IGV4aXN0KSwgdGhlIGNsb3Nlc3QgY2hpbGQgdG8gdGhlIGdpdmVuIGFjdGl2YXRlZEluZGV4XG4gICAgICogd2lsbCBoYXZlIGl0cyBmbGFnIHNldCBpbnN0ZWFkLlxuICAgICAqIFxuICAgICAqIFVzZSB3aXRoIGNhdXRpb24sIGFuZCBjb25zaWRlciBob3cgYSBjaGlsZCBoYXZpbmcgaXRzIGZsYWcgc2V0XG4gICAgICogd2hpbGUgdGhlIHBhcmVudCB0aGlua3MgaXQgc2hvdWxkbid0IGJlIGNvdWxkIGNhdXNlIGlzc3Vlcy5cbiAgICAgKi9cbiAgICBjbG9zZXN0Rml0OiBib29sZWFuO1xuXG4gICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbmV2ZXIgYSBuZXcgaW5kZXggaXMgc2VsZWN0ZWQuXG4gICAgICogXG4gICAgICogTm90YWJseSwgdGhlIHZhbHVlIGNhbiBiZSBkaWZmZXJlbnQgdGhhbiB3aGF0IHdhcyBjYWxsZWQgd2l0aCBjaGFuZ2VJbmRleCgpXG4gICAgICogaWYgdGhlIHJlcXVlc3RlZCBpbmRleCBkaWRuJ3QgZXhpc3Qgb3Igd2FzIGhpZGRlbi5cbiAgICAgKi9cbiAgICBvbkluZGV4Q2hhbmdlOiBudWxsIHwgT25QYXNzaXZlU3RhdGVDaGFuZ2U8TVtcImluZGV4XCJdIHwgbnVsbCwgUj47XG5cbiAgICBzZXRBdChpbmRleDogTSwgdmFsdWU6IGJvb2xlYW4sIG5ld1NlbGVjdGVkSW5kZXg6IE1bXCJpbmRleFwiXSB8IG51bGwsIHByZXZTZWxlY3RlZEluZGV4OiBNW1wiaW5kZXhcIl0gfCBudWxsKTogdm9pZDtcbiAgICBnZXRBdChpbmRleDogTSk6IGJvb2xlYW47XG4gICAgaXNWYWxpZChpbmRleDogTSk6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBDaGlsZEZsYWdPcGVyYXRpb25zIHtcblxuICAgIC8qKlxuICAgICAqIE11c3QgcmV0dXJuIHdoZXRoZXIgdGhlIGN1cnJlbnQgY2hpbGQgaXMgYWN0aXZlXG4gICAgICovXG4gICAgZ2V0OiAoKSA9PiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZCBtdXN0IHNldCBpdHNlbGYgYXMgYWN0aXZlL2luYWN0aXZlLCB3aGF0ZXZlciB0aGF0IGVudGFpbHMuXG4gICAgICogVGhpcyBjb3VsZCBiZSBhcyBzaW1wbGUgYXMgYSBzZXRTdGF0ZSBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBzZXQ6IChhY3RpdmU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTXVzdCByZXR1cm4gdHJ1ZSBpZiB0aGlzIGNoaWxkIGlzIGEgdmFsaWQgY2FuZGlkYXRlIHRvIGJlIGZsYWdnZWQsIGFuZCBmYWxzZSBpZiBub3QuXG4gICAgICogTW9zdCBjaGlsZHJlbiBzaG91bGQgcmV0dXJuIHRydWUuIFJldHVybmluZyBmYWxzZSBpcyBvbmx5IHVzZWZ1bCB0byBtYXJrIGEgY2hpbGQgYXMgXCJpbnZhbGlkXCIgaW4gc29tZSB3YXkuXG4gICAgICogUmVtb3ZpbmcgYSBjaGlsZCBmcm9tIHRoZSBsaXN0IGRvZXMgZWZmZWN0aXZlbHkgdGhlIHNhbWUgdGhpbmcsIGJ1dCB0aGlzIGxldHMgeW91IGtlZXAgdGhlIGNoaWxkIGFyb3VuZC5cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCk6IGJvb2xlYW47XG59XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUNoaWxkcmVuRmxhZ1JldHVyblR5cGU8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55PiwgUj4ge1xuICAgIC8qKiBcbiAgICAgKiAqKlNUQUJMRSoqXG4gICAgICogXG4gICAgICogTWFudWFsbHkgY2hhbmdlcyB0aGUgY3VycmVudCBpbmRleCB0aGF0IGlzIChmb2N1c2VkL3NlbGVjdGVkL3RhYmJhYmxlL3doYXRldmVyKS5cbiAgICAgKiBcbiAgICAgKiBUaGUgcGFyZW50IGNhbiB1c2UgdGhpcyB0byBub3RpZnkgZWFjaCByZWxldmFudCBjaGlsZCBvZiB3aGF0IGl0IG11c3QgZG8gaW4gb3JkZXIgdG8gbWFrZSB0aGlzIGNoYW5nZSBoYXBwZW4uXG4gICAgICogXG4gICAgICogVGhlIHJldHVybmVkIHZhbHVlIHdpbGwgYmUgdGhlIG5ldyBpbmRleCB0aGF0IHdpbGwgYmUgdXNlZC4gSWYgYGNsb3Nlc3RGaXRgIGlzIGZhbHNlLCBpdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyB3aGF0IHlvdSBwYXNzZWQgaW4uXG4gICAgICovXG4gICAgY2hhbmdlSW5kZXg6IFBhc3NpdmVTdGF0ZVVwZGF0ZXI8TVtcImluZGV4XCJdIHwgbnVsbCwgUj47XG4gICAgLyoqIFxuICAgICAqICoqU1RBQkxFKipcbiAgICAgKiBcbiAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgYSBjaGlsZCBtb3VudHMvdW5tb3VudHMsIG9yIHdoZW5ldmVyIGNhbGxpbmcgYSBjaGlsZCdzIGlzVmFsaWQoKSB3b3VsZCBjaGFuZ2VcbiAgICAgKiAgKi9cbiAgICByZWV2YWx1YXRlQ2xvc2VzdEZpdDogKCkgPT4gdm9pZDtcbiAgICAvKiogKipTVEFCTEUqKiAqL1xuICAgIGdldEN1cnJlbnRJbmRleDogKCkgPT4gTVtcImluZGV4XCJdIHwgbnVsbDtcbn1cblxuLyoqXG4gKiBBbiBleHRlbnNpb24gdG8gdXNlTWFuYWdlZENoaWxkcmVuIHRoYXQgaGFuZGxlcyB0aGUgZm9sbG93aW5nIGNvbW1vbiBjYXNlOlxuICogMS4gWW91IGhhdmUgYSBidW5jaCBvZiBjaGlsZHJlblxuICogMi4gQXQgYW55IGdpdmVuIHRpbWUsIG9ubHkgMSBvZiB0aGVtIGlzIFwic2VsZWN0ZWRcIiwgXCJhY3RpdmF0ZWRcIiwgXCJmb2N1c2FibGVcIiwgd2hhdGV2ZXIgKG9yIDAgb2YgdGhlbSwgdGhhdCdzIGNvb2wgdG9vLCBqdXN0IDAgb3IgMSB0aG91Z2gpLlxuICogMy4gVGhlIHBhcmVudCBoYXMgY29udHJvbCBvdmVyIHdobyBpcyBcInNlbGVjdGVkXCIgdmlhIGEgbnVtZXJpY2FsIGluZGV4LlxuICogXG4gKiBUaGlzIGhvb2sgYWxsb3dzIGZvciBtdWNoIGVhc2llciBjb250cm9sIG92ZXIgc2VsZWN0aW9uIG1hbmFnZW1lbnQuXG4gKiBcbiAqIE5vdGUgdGhhdCBiZWNhdXNlIHlvdSBtYXkgd2FudCB0byB1c2UgbXVsdGlwbGUgZmxhZ3Mgd2l0aCB0aGUgc2FtZSBjaGlsZHJlbiwgdGhpcyBob29rICpkb2VzIG5vdCogdXNlIGB1c2VNYW5hZ2VkQ2hpbGRyZW5gIVxuICogWW91IG5lZWQgdG8gcGFzcyBpdCB0aGUgZXhpc3RpbmcgY2hpbGRyZW4sIGFuZCB5b3UgbXVzdCBwYXNzIHlvdXIgaW52b2NhdGlvbiBvZiBgdXNlTWFuYWdlZENoaWxkcmVuYCB0aGUgcmV0dXJuZWQgYG9uQ2hpbGRyZW5Nb3VudENoYW5nZWAgaGFuZGxlciFcbiAqIFxuICogQWxzbyBiZWNhdXNlIG9mIHRoYXQsIHRoZSB0eXBlcyBvZiB0aGlzIGZ1bmN0aW9uIGFyZSByYXRoZXIgb2RkLiAgSXQncyBiZXR0ZXIgdG8gc3RhcnQgb2ZmIHVzaW5nIGEgaG9vayB0aGF0IGFscmVhZHkgdXNlcyBhIGZsYWcsIHN1Y2ggYXMgYHVzZVJvdmluZ1RhYkluZGV4YCwgYXMgYW4gZXhhbXBsZS5cbiAqIFxuICogXG4gKiBAcGFyYW0gcGFyYW0wIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGlsZHJlbkZsYWc8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88bnVtYmVyIHwgc3RyaW5nPiwgUj4oeyBnZXRDaGlsZHJlbiwgaW5pdGlhbEluZGV4LCBjbG9zZXN0Rml0LCBvbkluZGV4Q2hhbmdlLCBnZXRBdCwgc2V0QXQsIGlzVmFsaWQsIH06IFVzZUNoaWxkcmVuRmxhZ1BhcmFtZXRlcnM8TSwgUj4pOiBVc2VDaGlsZHJlbkZsYWdSZXR1cm5UeXBlPE0sIFI+IHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VDaGlsZHJlbkZsYWdcIiwgb25JbmRleENoYW5nZSwgZ2V0QXQsIHNldEF0LCBpc1ZhbGlkKTtcblxuICAgIC8vIFRPRE8gKG1heWJlPyk6IEV2ZW4gaWYgdGhlcmUgaXMgYW4gaW5pdGlhbCBpbmRleCwgaXQncyBub3Qgc2V0IHVudGlsIG1vdW50LiBJcyB0aGF0IGZpbmU/XG4gICAgY29uc3QgW2dldEN1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVBhc3NpdmVTdGF0ZTxudWxsIHwgTVtcImluZGV4XCJdLCBSPihvbkluZGV4Q2hhbmdlKTtcblxuICAgIGNvbnN0IFtnZXRSZXF1ZXN0ZWRJbmRleCwgc2V0UmVxdWVzdGVkSW5kZXhdID0gdXNlUGFzc2l2ZVN0YXRlPG51bGwgfCBNW1wiaW5kZXhcIl0sIFI+KG51bGwpO1xuXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gb25DaGlsZHJlbk1vdW50Q2hhbmdlIGFuZCBjaGFuZ2VJbmRleCwgbm90IHB1YmxpY1xuICAgIC8vIE9ubHkgY2FsbGVkIHdoZW4gYGNsb3Nlc3RGaXRgIGlzIGZhbHNlLCBuYXR1cmFsbHkuXG4gICAgY29uc3QgZ2V0Q2xvc2VzdEZpdCA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0ZWRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgICBsZXQgY2xvc2VzdEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZCAhPSBudWxsICYmIGlzVmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodHlwZW9mIGNoaWxkLmluZGV4ID09IFwibnVtYmVyXCIsIFwiY2xvc2VzdEZpdCBjYW4gb25seSBiZSB1c2VkIHdoZW4gZWFjaCBjaGlsZCBoYXMgYSBudW1lcmljIGluZGV4LCBhbmQgY2Fubm90IGJlIHVzZWQgd2hlbiBjaGlsZHJlbiB1c2Ugc3RyaW5nIGluZGljZXMgaW5zdGVhZC5cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RGlzdGFuY2UgPSBNYXRoLmFicygoY2hpbGQuaW5kZXggYXMgbnVtYmVyKSAtIHJlcXVlc3RlZEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3RGlzdGFuY2UgPCBjbG9zZXN0RGlzdGFuY2UgfHwgKG5ld0Rpc3RhbmNlID09IGNsb3Nlc3REaXN0YW5jZSAmJiAoY2hpbGQuaW5kZXggYXMgbnVtYmVyKSA8IHJlcXVlc3RlZEluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBuZXdEaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gKGNoaWxkLmluZGV4IGFzIG51bWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RJbmRleDtcbiAgICB9LCBbLyogTXVzdCByZW1haW4gc3RhYmxlISAqL10pO1xuXG4gICAgLy8gQW55IHRpbWUgYSBjaGlsZCBtb3VudHMvdW5tb3VudHMsIHdlIG5lZWQgdG8gZG91YmxlLWNoZWNrIHRvIHNlZSBpZiB0aGF0IGFmZmVjdHMgXG4gICAgLy8gdGhlIFwiY3VycmVudGx5IHNlbGVjdGVkXCIgKG9yIHdoYXRldmVyKSBpbmRleC4gIFRoZSB0d28gY2FzZXMgd2UncmUgbG9va2luZyBmb3I6XG4gICAgLy8gMS4gVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBjaGlsZCB1bm1vdW50ZWRcbiAgICAvLyAyLiBBIGNoaWxkIG1vdW50ZWQsIGFuZCBpdCBtb3VudHMgd2l0aCB0aGUgaW5kZXggd2UncmUgbG9va2luZyBmb3JcbiAgICBjb25zdCByZWV2YWx1YXRlQ2xvc2VzdEZpdCA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRJbmRleCA9IGdldFJlcXVlc3RlZEluZGV4KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q2hpbGQgPSBjdXJyZW50SW5kZXggPT0gbnVsbCA/IG51bGwgOiBjaGlsZHJlbi5nZXRBdChjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgIGlmIChyZXF1ZXN0ZWRJbmRleCAhPSBudWxsICYmIGNsb3Nlc3RGaXQgJiYgKHJlcXVlc3RlZEluZGV4ICE9IGN1cnJlbnRJbmRleCB8fCBjdXJyZW50Q2hpbGQgPT0gbnVsbCB8fCAhaXNWYWxpZChjdXJyZW50Q2hpbGQpKSkge1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodHlwZW9mIHJlcXVlc3RlZEluZGV4ID09IFwibnVtYmVyXCIsIFwiY2xvc2VzdEZpdCBjYW4gb25seSBiZSB1c2VkIHdoZW4gZWFjaCBjaGlsZCBoYXMgYSBudW1lcmljIGluZGV4LCBhbmQgY2Fubm90IGJlIHVzZWQgd2hlbiBjaGlsZHJlbiB1c2Ugc3RyaW5nIGluZGljZXMgaW5zdGVhZC5cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RGaXRJbmRleCA9IGdldENsb3Nlc3RGaXQocmVxdWVzdGVkSW5kZXggYXMgbnVtYmVyKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChjbG9zZXN0Rml0SW5kZXgsIHVuZGVmaW5lZCEpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRDaGlsZClcbiAgICAgICAgICAgICAgICBzZXRBdChjdXJyZW50Q2hpbGQsIGZhbHNlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBpZiAoY2xvc2VzdEZpdEluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Rml0Q2hpbGQgPSBjaGlsZHJlbi5nZXRBdChjbG9zZXN0Rml0SW5kZXgpITtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChjbG9zZXN0Rml0Q2hpbGQgIT0gbnVsbCwgXCJJbnRlcm5hbCBsb2dpYz8/P1wiKTtcbiAgICAgICAgICAgICAgICBzZXRBdChjbG9zZXN0Rml0Q2hpbGQsIHRydWUsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG5cblxuXG5cbiAgICBjb25zdCBjaGFuZ2VJbmRleCA9IHVzZUNhbGxiYWNrPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8TVtcImluZGV4XCJdIHwgbnVsbCwgUj4+KChhcmc6IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPj5bMF0sIHJlYXNvbjogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+PlsxXSkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGdldENoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZEluZGV4ID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKGdldFJlcXVlc3RlZEluZGV4KCkpIDogYXJnKSBhcyBNW1wiaW5kZXhcIl07XG5cbiAgICAgICAgc2V0UmVxdWVzdGVkSW5kZXgocmVxdWVzdGVkSW5kZXgsIHJlYXNvbiBhcyBSKTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KCk7XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT0gcmVxdWVzdGVkSW5kZXgpXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdGVkSW5kZXg7XG5cbiAgICAgICAgbGV0IG5ld01hdGNoaW5nQ2hpbGQgPSAocmVxdWVzdGVkSW5kZXggPT0gbnVsbCA/IG51bGwgOiBjaGlsZHJlbi5nZXRBdChyZXF1ZXN0ZWRJbmRleCkpO1xuICAgICAgICBjb25zdCBvbGRNYXRjaGluZ0NoaWxkID0gKGN1cnJlbnRJbmRleCA9PSBudWxsID8gbnVsbCA6IGNoaWxkcmVuLmdldEF0KGN1cnJlbnRJbmRleCkpO1xuICAgICAgICBpZiAocmVxdWVzdGVkSW5kZXggPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gRWFzeSBjYXNlXG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgobnVsbCwgcmVhc29uIGFzIFIpO1xuICAgICAgICAgICAgaWYgKG9sZE1hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgc2V0QXQob2xkTWF0Y2hpbmdDaGlsZCwgZmFsc2UsIHJlcXVlc3RlZEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZElzVmFsaWQgPSAobmV3TWF0Y2hpbmdDaGlsZCAmJiBpc1ZhbGlkKG5ld01hdGNoaW5nQ2hpbGQpKTtcbiAgICAgICAgICAgIGlmIChjaGlsZElzVmFsaWQgfHwgIWNsb3Nlc3RGaXQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgocmVxdWVzdGVkSW5kZXgsIHJlYXNvbiBhcyBSKTtcbiAgICAgICAgICAgICAgICBpZiAob2xkTWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgc2V0QXQob2xkTWF0Y2hpbmdDaGlsZCwgZmFsc2UsIHJlcXVlc3RlZEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICBzZXRBdChuZXdNYXRjaGluZ0NoaWxkLCB0cnVlLCByZXF1ZXN0ZWRJbmRleCwgY3VycmVudEluZGV4KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0ZWRJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiByZXF1ZXN0ZWRJbmRleCA9PSBcIm51bWJlclwiLCBcImNsb3Nlc3RGaXQgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIGVhY2ggY2hpbGQgaGFzIGEgbnVtZXJpYyBpbmRleCwgYW5kIGNhbm5vdCBiZSB1c2VkIHdoZW4gY2hpbGRyZW4gdXNlIHN0cmluZyBpbmRpY2VzIGluc3RlYWQuXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEZpdEluZGV4ID0gZ2V0Q2xvc2VzdEZpdChyZXF1ZXN0ZWRJbmRleCBhcyBudW1iZXIpO1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChjbG9zZXN0Rml0SW5kZXgsIHJlYXNvbiBhcyBSKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEZpdEluZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TWF0Y2hpbmdDaGlsZCA9IGNoaWxkcmVuLmdldEF0KGNsb3Nlc3RGaXRJbmRleCkhO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydChuZXdNYXRjaGluZ0NoaWxkICE9IG51bGwsIFwiSW50ZXJuYWwgbG9naWM/Pz9cIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXQob2xkTWF0Y2hpbmdDaGlsZCwgZmFsc2UsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QXQobmV3TWF0Y2hpbmdDaGlsZCwgdHJ1ZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xvc2VzdEZpdEluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZE1hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdChvbGRNYXRjaGluZ0NoaWxkLCBmYWxzZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBSdW4gb25jZSwgb24gbW91bnRcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjaGFuZ2VJbmRleChpbml0aWFsSW5kZXggPz8gbnVsbCwgdW5kZWZpbmVkKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiB7IGNoYW5nZUluZGV4LCByZWV2YWx1YXRlQ2xvc2VzdEZpdCwgZ2V0Q3VycmVudEluZGV4IH07XG59XG5cbiIsIlxuaW1wb3J0IHsgU3RhdGVVcGRhdGVyLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKiBcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCB8ICgoKSA9PiBUKSk6IHJlYWRvbmx5IFt2YWx1ZTogVCwgc2V0VmFsdWU6IFN0YXRlVXBkYXRlcjxUPiwgZ2V0VmFsdWU6ICgpID0+IFRdIHtcblxuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcblxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrPFN0YXRlVXBkYXRlcjxUPj4odmFsdWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUgYXMgKChfcHJldlZhbHVlOiBUKSA9PiBUKTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuXG5cbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdIGFzIGNvbnN0O1xufSIsIi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGEgZGlmZmVyZW50IHNoYXBlXG4gKiBAcGFyYW0ge29iamVjdH0gYVxuICogQHBhcmFtIHtvYmplY3R9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0RpZmZlcnMoYSwgYikge1xuXHRmb3IgKGxldCBpIGluIGEpIGlmIChpICE9PSAnX19zb3VyY2UnICYmICEoaSBpbiBiKSkgcmV0dXJuIHRydWU7XG5cdGZvciAobGV0IGkgaW4gYikgaWYgKGkgIT09ICdfX3NvdXJjZScgJiYgYVtpXSAhPT0gYltpXSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgdmFsdWVcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHsqfSB5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0cmV0dXJuICh4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkpIHx8ICh4ICE9PSB4ICYmIHkgIT09IHkpO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHNoYWxsb3dEaWZmZXJzIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDb21wb25lbnQgY2xhc3Mgd2l0aCBhIHByZWRlZmluZWQgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgaW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFB1cmVDb21wb25lbnQocCkge1xuXHR0aGlzLnByb3BzID0gcDtcbn1cblB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuLy8gU29tZSB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgY2hlY2sgaWYgdGhpcyBwcm9wZXJ0eSBpcyBwcmVzZW50XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0cmV0dXJuIHNoYWxsb3dEaWZmZXJzKHRoaXMucHJvcHMsIHByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBzdGF0ZSk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzaGFsbG93RGlmZmVycyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogTWVtb2l6ZSBhIGNvbXBvbmVudCwgc28gdGhhdCBpdCBvbmx5IHVwZGF0ZXMgd2hlbiB0aGUgcHJvcHMgYWN0dWFsbHkgaGF2ZVxuICogY2hhbmdlZC4gVGhpcyB3YXMgcHJldmlvdXNseSBrbm93biBhcyBgUmVhY3QucHVyZWAuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSBjIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gKiBAcGFyYW0geyhwcmV2OiBvYmplY3QsIG5leHQ6IG9iamVjdCkgPT4gYm9vbGVhbn0gW2NvbXBhcmVyXSBDdXN0b20gZXF1YWxpdHkgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW8oYywgY29tcGFyZXIpIHtcblx0ZnVuY3Rpb24gc2hvdWxkVXBkYXRlKG5leHRQcm9wcykge1xuXHRcdGxldCByZWYgPSB0aGlzLnByb3BzLnJlZjtcblx0XHRsZXQgdXBkYXRlUmVmID0gcmVmID09IG5leHRQcm9wcy5yZWY7XG5cdFx0aWYgKCF1cGRhdGVSZWYgJiYgcmVmKSB7XG5cdFx0XHRyZWYuY2FsbCA/IHJlZihudWxsKSA6IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdH1cblxuXHRcdGlmICghY29tcGFyZXIpIHtcblx0XHRcdHJldHVybiBzaGFsbG93RGlmZmVycyh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiAhY29tcGFyZXIodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhdXBkYXRlUmVmO1xuXHR9XG5cblx0ZnVuY3Rpb24gTWVtb2VkKHByb3BzKSB7XG5cdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBzaG91bGRVcGRhdGU7XG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoYywgcHJvcHMpO1xuXHR9XG5cdE1lbW9lZC5kaXNwbGF5TmFtZSA9ICdNZW1vKCcgKyAoYy5kaXNwbGF5TmFtZSB8fCBjLm5hbWUpICsgJyknO1xuXHRNZW1vZWQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXHRNZW1vZWQuX2ZvcndhcmRlZCA9IHRydWU7XG5cdHJldHVybiBNZW1vZWQ7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmxldCBvbGREaWZmSG9vayA9IG9wdGlvbnMuX2RpZmY7XG5vcHRpb25zLl9kaWZmID0gdm5vZGUgPT4ge1xuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLl9mb3J3YXJkZWQgJiYgdm5vZGUucmVmKSB7XG5cdFx0dm5vZGUucHJvcHMucmVmID0gdm5vZGUucmVmO1xuXHRcdHZub2RlLnJlZiA9IG51bGw7XG5cdH1cblx0aWYgKG9sZERpZmZIb29rKSBvbGREaWZmSG9vayh2bm9kZSk7XG59O1xuXG5leHBvcnQgY29uc3QgUkVBQ1RfRk9SV0FSRF9TWU1CT0wgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJlxuXHRcdFN5bWJvbC5mb3IgJiZcblx0XHRTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpKSB8fFxuXHQweGY0NztcblxuLyoqXG4gKiBQYXNzIHJlZiBkb3duIHRvIGEgY2hpbGQuIFRoaXMgaXMgbWFpbmx5IHVzZWQgaW4gbGlicmFyaWVzIHdpdGggSE9DcyB0aGF0XG4gKiB3cmFwIGNvbXBvbmVudHMuIFVzaW5nIGBmb3J3YXJkUmVmYCB0aGVyZSBpcyBhbiBlYXN5IHdheSB0byBnZXQgYSByZWZlcmVuY2VcbiAqIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpbnN0ZWFkIG9mIG9uZSBvZiB0aGUgd3JhcHBlciBpdHNlbGYuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkZvcndhcmRGbn0gZm5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRSZWYoZm4pIHtcblx0ZnVuY3Rpb24gRm9yd2FyZGVkKHByb3BzKSB7XG5cdFx0bGV0IGNsb25lID0gYXNzaWduKHt9LCBwcm9wcyk7XG5cdFx0ZGVsZXRlIGNsb25lLnJlZjtcblx0XHRyZXR1cm4gZm4oY2xvbmUsIHByb3BzLnJlZiB8fCBudWxsKTtcblx0fVxuXG5cdC8vIG1vYngtcmVhY3QgY2hlY2tzIGZvciB0aGlzIGJlaW5nIHByZXNlbnRcblx0Rm9yd2FyZGVkLiQkdHlwZW9mID0gUkVBQ1RfRk9SV0FSRF9TWU1CT0w7XG5cdC8vIG1vYngtcmVhY3QgaGVhdmlseSByZWxpZXMgb24gaW1wbGVtZW50YXRpb24gZGV0YWlscy5cblx0Ly8gSXQgZXhwZWN0cyBhbiBvYmplY3QgaGVyZSB3aXRoIGEgYHJlbmRlcmAgcHJvcGVydHksXG5cdC8vIGFuZCBwcm90b3R5cGUucmVuZGVyIHdpbGwgZmFpbC4gV2l0aG91dCB0aGlzXG5cdC8vIG1vYngtcmVhY3QgdGhyb3dzLlxuXHRGb3J3YXJkZWQucmVuZGVyID0gRm9yd2FyZGVkO1xuXG5cdEZvcndhcmRlZC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IEZvcndhcmRlZC5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0Rm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gJ0ZvcndhcmRSZWYoJyArIChmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lKSArICcpJztcblx0cmV0dXJuIEZvcndhcmRlZDtcbn1cbiIsImltcG9ydCB7IHRvQ2hpbGRBcnJheSB9IGZyb20gJ3ByZWFjdCc7XG5cbmNvbnN0IG1hcEZuID0gKGNoaWxkcmVuLCBmbikgPT4ge1xuXHRpZiAoY2hpbGRyZW4gPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdHJldHVybiB0b0NoaWxkQXJyYXkodG9DaGlsZEFycmF5KGNoaWxkcmVuKS5tYXAoZm4pKTtcbn07XG5cbi8vIFRoaXMgQVBJIGlzIGNvbXBsZXRlbHkgdW5uZWNlc3NhcnkgZm9yIFByZWFjdCwgc28gaXQncyBiYXNpY2FsbHkgcGFzc3Rocm91Z2guXG5leHBvcnQgY29uc3QgQ2hpbGRyZW4gPSB7XG5cdG1hcDogbWFwRm4sXG5cdGZvckVhY2g6IG1hcEZuLFxuXHRjb3VudChjaGlsZHJlbikge1xuXHRcdHJldHVybiBjaGlsZHJlbiA/IHRvQ2hpbGRBcnJheShjaGlsZHJlbikubGVuZ3RoIDogMDtcblx0fSxcblx0b25seShjaGlsZHJlbikge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pO1xuXHRcdGlmIChub3JtYWxpemVkLmxlbmd0aCAhPT0gMSkgdGhyb3cgJ0NoaWxkcmVuLm9ubHknO1xuXHRcdHJldHVybiBub3JtYWxpemVkWzBdO1xuXHR9LFxuXHR0b0FycmF5OiB0b0NoaWxkQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQsIG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IG9sZENhdGNoRXJyb3IgPSBvcHRpb25zLl9jYXRjaEVycm9yO1xub3B0aW9ucy5fY2F0Y2hFcnJvciA9IGZ1bmN0aW9uKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHRpZiAoZXJyb3IudGhlbikge1xuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRcdGxldCBjb21wb25lbnQ7XG5cdFx0bGV0IHZub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZCkge1xuXHRcdFx0XHRpZiAobmV3Vk5vZGUuX2RvbSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIERvbid0IGNhbGwgb2xkQ2F0Y2hFcnJvciBpZiB3ZSBmb3VuZCBhIFN1c3BlbnNlXG5cdFx0XHRcdHJldHVybiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZChlcnJvciwgbmV3Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRvbGRDYXRjaEVycm9yKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbyk7XG59O1xuXG5jb25zdCBvbGRVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xub3B0aW9ucy51bm1vdW50ID0gZnVuY3Rpb24odm5vZGUpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGNvbnN0IGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Ll9vblJlc29sdmUpIHtcblx0XHRjb21wb25lbnQuX29uUmVzb2x2ZSgpO1xuXHR9XG5cblx0Ly8gaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBoeWRyYXRpbmdcblx0Ly8gbW9zdCBsaWtlbHkgaXQgaXMgYmVjYXVzZSB0aGUgY29tcG9uZW50IGlzIHN1c3BlbmRlZFxuXHQvLyB3ZSBzZXQgdGhlIHZub2RlLnR5cGUgYXMgYG51bGxgIHNvIHRoYXQgaXQgaXMgbm90IGEgdHlwZW9mIGZ1bmN0aW9uXG5cdC8vIHNvIHRoZSB1bm1vdW50IHdpbGwgcmVtb3ZlIHRoZSB2bm9kZS5fZG9tXG5cdGlmIChjb21wb25lbnQgJiYgdm5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZSkge1xuXHRcdHZub2RlLnR5cGUgPSBudWxsO1xuXHR9XG5cblx0aWYgKG9sZFVubW91bnQpIG9sZFVubW91bnQodm5vZGUpO1xufTtcblxuZnVuY3Rpb24gZGV0YWNoZWRDbG9uZSh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIHBhcmVudERvbSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAmJiB2bm9kZS5fY29tcG9uZW50Ll9faG9va3MpIHtcblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5mb3JFYWNoKGVmZmVjdCA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZWZmZWN0Ll9jbGVhbnVwID09ICdmdW5jdGlvbicpIGVmZmVjdC5fY2xlYW51cCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0dm5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBwYXJlbnREb20pIHtcblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID0gZGV0YWNoZWRQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHR2bm9kZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHR2bm9kZS5fY2hpbGRyZW4gPVxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuICYmXG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4ubWFwKGNoaWxkID0+XG5cdFx0XHRcdGRldGFjaGVkQ2xvbmUoY2hpbGQsIGRldGFjaGVkUGFyZW50LCBwYXJlbnREb20pXG5cdFx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVPcmlnaW5hbCh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdHZub2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0dm5vZGUuX2NoaWxkcmVuID1cblx0XHRcdHZub2RlLl9jaGlsZHJlbiAmJlxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuLm1hcChjaGlsZCA9PlxuXHRcdFx0XHRyZW1vdmVPcmlnaW5hbChjaGlsZCwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KVxuXHRcdFx0KTtcblxuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBkZXRhY2hlZFBhcmVudCkge1xuXHRcdFx0XHRpZiAodm5vZGUuX2RvbSkge1xuXHRcdFx0XHRcdG9yaWdpbmFsUGFyZW50Lmluc2VydEJlZm9yZSh2bm9kZS5fZG9tLCB2bm9kZS5fbmV4dERvbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPSBvcmlnaW5hbFBhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8vIGhhdmluZyBjdXN0b20gaW5oZXJpdGFuY2UgaW5zdGVhZCBvZiBhIGNsYXNzIGhlcmUgc2F2ZXMgYSBsb3Qgb2YgYnl0ZXNcbmV4cG9ydCBmdW5jdGlvbiBTdXNwZW5zZSgpIHtcblx0Ly8gd2UgZG8gbm90IGNhbGwgc3VwZXIgaGVyZSB0byBnb2xmIHNvbWUgYnl0ZXMuLi5cblx0dGhpcy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCA9IDA7XG5cdHRoaXMuX3N1c3BlbmRlcnMgPSBudWxsO1xuXHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xufVxuXG4vLyBUaGluZ3Mgd2UgZG8gaGVyZSB0byBzYXZlIHNvbWUgYnl0ZXMgYnV0IGFyZSBub3QgcHJvcGVyIEpTIGluaGVyaXRhbmNlOlxuLy8gLSBjYWxsIGBuZXcgQ29tcG9uZW50KClgIGFzIHRoZSBwcm90b3R5cGVcbi8vIC0gZG8gbm90IHNldCBgU3VzcGVuc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yYCB0byBgU3VzcGVuc2VgXG5TdXNwZW5zZS5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fVxuICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIFRoZSB0aHJvd24gcHJvbWlzZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZTxhbnksIGFueT59IHN1c3BlbmRpbmdWTm9kZSBUaGUgc3VzcGVuZGluZyBjb21wb25lbnRcbiAqL1xuU3VzcGVuc2UucHJvdG90eXBlLl9jaGlsZERpZFN1c3BlbmQgPSBmdW5jdGlvbihwcm9taXNlLCBzdXNwZW5kaW5nVk5vZGUpIHtcblx0Y29uc3Qgc3VzcGVuZGluZ0NvbXBvbmVudCA9IHN1c3BlbmRpbmdWTm9kZS5fY29tcG9uZW50O1xuXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9ICovXG5cdGNvbnN0IGMgPSB0aGlzO1xuXG5cdGlmIChjLl9zdXNwZW5kZXJzID09IG51bGwpIHtcblx0XHRjLl9zdXNwZW5kZXJzID0gW107XG5cdH1cblx0Yy5fc3VzcGVuZGVycy5wdXNoKHN1c3BlbmRpbmdDb21wb25lbnQpO1xuXG5cdGNvbnN0IHJlc29sdmUgPSBzdXNwZW5kZWQoYy5fdm5vZGUpO1xuXG5cdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRjb25zdCBvblJlc29sdmVkID0gKCkgPT4ge1xuXHRcdGlmIChyZXNvbHZlZCkgcmV0dXJuO1xuXG5cdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG51bGw7XG5cblx0XHRpZiAocmVzb2x2ZSkge1xuXHRcdFx0cmVzb2x2ZShvblN1c3BlbnNpb25Db21wbGV0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9uU3VzcGVuc2lvbkNvbXBsZXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG9uUmVzb2x2ZWQ7XG5cblx0Y29uc3Qgb25TdXNwZW5zaW9uQ29tcGxldGUgPSAoKSA9PiB7XG5cdFx0aWYgKCEtLWMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQpIHtcblx0XHRcdC8vIElmIHRoZSBzdXNwZW5zaW9uIHdhcyBkdXJpbmcgaHlkcmF0aW9uIHdlIGRvbid0IG5lZWQgdG8gcmVzdG9yZSB0aGVcblx0XHRcdC8vIHN1c3BlbmRlZCBjaGlsZHJlbiBpbnRvIHRoZSBfY2hpbGRyZW4gYXJyYXlcblx0XHRcdGlmIChjLnN0YXRlLl9zdXNwZW5kZWQpIHtcblx0XHRcdFx0Y29uc3Qgc3VzcGVuZGVkVk5vZGUgPSBjLnN0YXRlLl9zdXNwZW5kZWQ7XG5cdFx0XHRcdGMuX3Zub2RlLl9jaGlsZHJlblswXSA9IHJlbW92ZU9yaWdpbmFsKFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLl9jb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZS5fY29tcG9uZW50Ll9vcmlnaW5hbFBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjLnNldFN0YXRlKHsgX3N1c3BlbmRlZDogKGMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGwpIH0pO1xuXG5cdFx0XHRsZXQgc3VzcGVuZGVkO1xuXHRcdFx0d2hpbGUgKChzdXNwZW5kZWQgPSBjLl9zdXNwZW5kZXJzLnBvcCgpKSkge1xuXHRcdFx0XHRzdXNwZW5kZWQuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFdlIGRvIG5vdCBzZXQgYHN1c3BlbmRlZDogdHJ1ZWAgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHdlIHdhbnQgdGhlIGFjdHVhbCBtYXJrdXBcblx0ICogdG8gcmVtYWluIG9uIHNjcmVlbiBhbmQgaHlkcmF0ZSBpdCB3aGVuIHRoZSBzdXNwZW5zZSBhY3R1YWxseSBnZXRzIHJlc29sdmVkLlxuXHQgKiBXaGlsZSBpbiBub24taHlkcmF0aW9uIGNhc2VzIHRoZSB1c3VhbCBmYWxsYmFjayAtPiBjb21wb25lbnQgZmxvdyB3b3VsZCBvY2NvdXIuXG5cdCAqL1xuXHRjb25zdCB3YXNIeWRyYXRpbmcgPSBzdXNwZW5kaW5nVk5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZTtcblx0aWYgKCFjLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50KysgJiYgIXdhc0h5ZHJhdGluZykge1xuXHRcdGMuc2V0U3RhdGUoeyBfc3VzcGVuZGVkOiAoYy5fZGV0YWNoT25OZXh0UmVuZGVyID0gYy5fdm5vZGUuX2NoaWxkcmVuWzBdKSB9KTtcblx0fVxuXHRwcm9taXNlLnRoZW4ob25SZXNvbHZlZCwgb25SZXNvbHZlZCk7XG59O1xuXG5TdXNwZW5zZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fc3VzcGVuZGVycyA9IFtdO1xufTtcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50W1wicHJvcHNcIl19IHByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlU3RhdGV9IHN0YXRlXG4gKi9cblN1c3BlbnNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0aWYgKHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcikge1xuXHRcdC8vIFdoZW4gdGhlIFN1c3BlbnNlJ3MgX3Zub2RlIHdhcyBjcmVhdGVkIGJ5IGEgY2FsbCB0byBjcmVhdGVWTm9kZVxuXHRcdC8vIChpLmUuIGR1ZSB0byBhIHNldFN0YXRlIGZ1cnRoZXIgdXAgaW4gdGhlIHRyZWUpXG5cdFx0Ly8gaXQncyBfY2hpbGRyZW4gcHJvcCBpcyBudWxsLCBpbiB0aGlzIGNhc2Ugd2UgXCJmb3JnZXRcIiBhYm91dCB0aGUgcGFya2VkIHZub2RlcyB0byBkZXRhY2hcblx0XHRpZiAodGhpcy5fdm5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBkZXRhY2hlZFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29uc3QgZGV0YWNoZWRDb21wb25lbnQgPSB0aGlzLl92bm9kZS5fY2hpbGRyZW5bMF0uX2NvbXBvbmVudDtcblx0XHRcdHRoaXMuX3Zub2RlLl9jaGlsZHJlblswXSA9IGRldGFjaGVkQ2xvbmUoXG5cdFx0XHRcdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcixcblx0XHRcdFx0ZGV0YWNoZWRQYXJlbnQsXG5cdFx0XHRcdChkZXRhY2hlZENvbXBvbmVudC5fb3JpZ2luYWxQYXJlbnREb20gPSBkZXRhY2hlZENvbXBvbmVudC5fcGFyZW50RG9tKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xuXHR9XG5cblx0Ly8gV3JhcCBmYWxsYmFjayB0cmVlIGluIGEgVk5vZGUgdGhhdCBwcmV2ZW50cyBpdHNlbGYgZnJvbSBiZWluZyBtYXJrZWQgYXMgYWJvcnRpbmcgbWlkLWh5ZHJhdGlvbjpcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3QgZmFsbGJhY2sgPVxuXHRcdHN0YXRlLl9zdXNwZW5kZWQgJiYgY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgcHJvcHMuZmFsbGJhY2spO1xuXHRpZiAoZmFsbGJhY2spIGZhbGxiYWNrLl9oeWRyYXRpbmcgPSBudWxsO1xuXG5cdHJldHVybiBbXG5cdFx0Y3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgc3RhdGUuX3N1c3BlbmRlZCA/IG51bGwgOiBwcm9wcy5jaGlsZHJlbiksXG5cdFx0ZmFsbGJhY2tcblx0XTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGFuZCBjYWxscyB0aGUgcGFyZW50IGNvbXBvbmVudCdzIF9zdXNwZW5kZWQgbWV0aG9kLCBwYXNzaW5nIGluIHRoZVxuICogc3VzcGVuZGVkIHZub2RlLiBUaGlzIGlzIGEgd2F5IGZvciBhIHBhcmVudCAoZS5nLiBTdXNwZW5zZUxpc3QpIHRvIGdldCBub3RpZmllZFxuICogdGhhdCBvbmUgb2YgaXRzIGNoaWxkcmVuL2Rlc2NlbmRhbnRzIHN1c3BlbmRlZC5cbiAqXG4gKiBUaGUgcGFyZW50IE1BWSByZXR1cm4gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgZ2V0IGNhbGxlZCB3aGVuIHRoZVxuICogc3VzcGVuc2lvbiByZXNvbHZlcywgbm90aWZ5aW5nIHRoZSBwYXJlbnQgb2YgdGhlIGZhY3QuXG4gKiBNb3Jlb3ZlciwgdGhlIGNhbGxiYWNrIGdldHMgZnVuY3Rpb24gYHVuc3VzcGVuZGAgYXMgYSBwYXJhbWV0ZXIuIFRoZSByZXNvbHZlZFxuICogY2hpbGQgZGVzY2VuZGFudCB3aWxsIG5vdCBhY3R1YWxseSBnZXQgdW5zdXNwZW5kZWQgdW50aWwgYHVuc3VzcGVuZGAgZ2V0cyBjYWxsZWQuXG4gKiBUaGlzIGlzIGEgd2F5IGZvciB0aGUgcGFyZW50IHRvIGRlbGF5IHVuc3VzcGVuZGluZy5cbiAqXG4gKiBJZiB0aGUgcGFyZW50IGRvZXMgbm90IHJldHVybiBhIGNhbGxiYWNrIHRoZW4gdGhlIHJlc29sdmVkIHZub2RlXG4gKiBnZXRzIHVuc3VzcGVuZGVkIGltbWVkaWF0ZWx5IHdoZW4gaXQgcmVzb2x2ZXMuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEByZXR1cm5zIHsoKHVuc3VzcGVuZDogKCkgPT4gdm9pZCkgPT4gdm9pZCk/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VzcGVuZGVkKHZub2RlKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudC5fY29tcG9uZW50O1xuXHRyZXR1cm4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkKHZub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenkobG9hZGVyKSB7XG5cdGxldCBwcm9tO1xuXHRsZXQgY29tcG9uZW50O1xuXHRsZXQgZXJyb3I7XG5cblx0ZnVuY3Rpb24gTGF6eShwcm9wcykge1xuXHRcdGlmICghcHJvbSkge1xuXHRcdFx0cHJvbSA9IGxvYWRlcigpO1xuXHRcdFx0cHJvbS50aGVuKFxuXHRcdFx0XHRleHBvcnRzID0+IHtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cztcblx0XHRcdFx0fSxcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb21wb25lbnQpIHtcblx0XHRcdHRocm93IHByb207XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG5cdH1cblxuXHRMYXp5LmRpc3BsYXlOYW1lID0gJ0xhenknO1xuXHRMYXp5Ll9mb3J3YXJkZWQgPSB0cnVlO1xuXHRyZXR1cm4gTGF6eTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgdG9DaGlsZEFycmF5IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHN1c3BlbmRlZCB9IGZyb20gJy4vc3VzcGVuc2UuanMnO1xuXG4vLyBJbmRleGVzIHRvIGxpbmtlZCBsaXN0IG5vZGVzIChub2RlcyBhcmUgc3RvcmVkIGFzIGFycmF5cyB0byBzYXZlIGJ5dGVzKS5cbmNvbnN0IFNVU1BFTkRFRF9DT1VOVCA9IDA7XG5jb25zdCBSRVNPTFZFRF9DT1VOVCA9IDE7XG5jb25zdCBORVhUX05PREUgPSAyO1xuXG4vLyBIYXZpbmcgY3VzdG9tIGluaGVyaXRhbmNlIGluc3RlYWQgb2YgYSBjbGFzcyBoZXJlIHNhdmVzIGEgbG90IG9mIGJ5dGVzLlxuZXhwb3J0IGZ1bmN0aW9uIFN1c3BlbnNlTGlzdCgpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG51bGw7XG59XG5cbi8vIE1hcmsgb25lIG9mIGNoaWxkJ3MgZWFybGllciBzdXNwZW5zaW9ucyBhcyByZXNvbHZlZC5cbi8vIFNvbWUgcGVuZGluZyBjYWxsYmFja3MgbWF5IGJlY29tZSBjYWxsYWJsZSBkdWUgdG8gdGhpc1xuLy8gKGUuZy4gdGhlIGxhc3Qgc3VzcGVuZGVkIGRlc2NlbmRhbnQgZ2V0cyByZXNvbHZlZCB3aGVuXG4vLyByZXZlYWxPcmRlciA9PT0gJ3RvZ2V0aGVyJykuIFByb2Nlc3MgdGhvc2UgY2FsbGJhY2tzIGFzIHdlbGwuXG5jb25zdCByZXNvbHZlID0gKGxpc3QsIGNoaWxkLCBub2RlKSA9PiB7XG5cdGlmICgrK25vZGVbUkVTT0xWRURfQ09VTlRdID09PSBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHQvLyBUaGUgbnVtYmVyIGEgY2hpbGQgKG9yIGFueSBvZiBpdHMgZGVzY2VuZGFudHMpIGhhcyBiZWVuIHN1c3BlbmRlZFxuXHRcdC8vIG1hdGNoZXMgdGhlIG51bWJlciBvZiB0aW1lcyBpdCdzIGJlZW4gcmVzb2x2ZWQuIFRoZXJlZm9yZSB3ZVxuXHRcdC8vIG1hcmsgdGhlIGNoaWxkIGFzIGNvbXBsZXRlbHkgcmVzb2x2ZWQgYnkgZGVsZXRpbmcgaXQgZnJvbSAuX21hcC5cblx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gZmlndXJlIG91dCB3aGVuICphbGwqIGNoaWxkcmVuIGhhdmUgYmVlbiBjb21wbGV0ZWx5XG5cdFx0Ly8gcmVzb2x2ZWQgd2hlbiByZXZlYWxPcmRlciBpcyAndG9nZXRoZXInLlxuXHRcdGxpc3QuX21hcC5kZWxldGUoY2hpbGQpO1xuXHR9XG5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgZmFsc3kgdGhlbiB3ZSBjYW4gZG8gYW4gZWFybHkgZXhpdCwgYXMgdGhlXG5cdC8vIGNhbGxiYWNrcyB3b24ndCBnZXQgcXVldWVkIGluIHRoZSBub2RlIGFueXdheS5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgJ3RvZ2V0aGVyJyB0aGVuIGFsc28gZG8gYW4gZWFybHkgZXhpdFxuXHQvLyBpZiBhbGwgc3VzcGVuZGVkIGRlc2NlbmRhbnRzIGhhdmUgbm90IHlldCBiZWVuIHJlc29sdmVkLlxuXHRpZiAoXG5cdFx0IWxpc3QucHJvcHMucmV2ZWFsT3JkZXIgfHxcblx0XHQobGlzdC5wcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ3QnICYmIGxpc3QuX21hcC5zaXplKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBXYWxrIHRoZSBjdXJyZW50bHkgc3VzcGVuZGVkIGNoaWxkcmVuIGluIG9yZGVyLCBjYWxsaW5nIHRoZWlyXG5cdC8vIHN0b3JlZCBjYWxsYmFja3Mgb24gdGhlIHdheS4gU3RvcCBpZiB3ZSBlbmNvdW50ZXIgYSBjaGlsZCB0aGF0XG5cdC8vIGhhcyBub3QgYmVlbiBjb21wbGV0ZWx5IHJlc29sdmVkIHlldC5cblx0bm9kZSA9IGxpc3QuX25leHQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0d2hpbGUgKG5vZGUubGVuZ3RoID4gMykge1xuXHRcdFx0bm9kZS5wb3AoKSgpO1xuXHRcdH1cblx0XHRpZiAobm9kZVtSRVNPTFZFRF9DT1VOVF0gPCBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsaXN0Ll9uZXh0ID0gbm9kZSA9IG5vZGVbTkVYVF9OT0RFXTtcblx0fVxufTtcblxuLy8gVGhpbmdzIHdlIGRvIGhlcmUgdG8gc2F2ZSBzb21lIGJ5dGVzIGJ1dCBhcmUgbm90IHByb3BlciBKUyBpbmhlcml0YW5jZTpcbi8vIC0gY2FsbCBgbmV3IENvbXBvbmVudCgpYCBhcyB0aGUgcHJvdG90eXBlXG4vLyAtIGRvIG5vdCBzZXQgYFN1c3BlbnNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgdG8gYFN1c3BlbnNlYFxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5fc3VzcGVuZGVkID0gZnVuY3Rpb24oY2hpbGQpIHtcblx0Y29uc3QgbGlzdCA9IHRoaXM7XG5cdGNvbnN0IGRlbGVnYXRlZCA9IHN1c3BlbmRlZChsaXN0Ll92bm9kZSk7XG5cblx0bGV0IG5vZGUgPSBsaXN0Ll9tYXAuZ2V0KGNoaWxkKTtcblx0bm9kZVtTVVNQRU5ERURfQ09VTlRdKys7XG5cblx0cmV0dXJuIHVuc3VzcGVuZCA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlZFVuc3VzcGVuZCA9ICgpID0+IHtcblx0XHRcdGlmICghbGlzdC5wcm9wcy5yZXZlYWxPcmRlcikge1xuXHRcdFx0XHQvLyBTcGVjaWFsIGNhc2UgdGhlIHVuZGVmaW5lZCAoZmFsc3kpIHJldmVhbE9yZGVyLCBhcyB0aGVyZVxuXHRcdFx0XHQvLyBpcyBubyBuZWVkIHRvIGNvb3JkaW5hdGUgYSBzcGVjaWZpYyBvcmRlciBvciB1bnN1c3BlbmRzLlxuXHRcdFx0XHR1bnN1c3BlbmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUucHVzaCh1bnN1c3BlbmQpO1xuXHRcdFx0XHRyZXNvbHZlKGxpc3QsIGNoaWxkLCBub2RlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGlmIChkZWxlZ2F0ZWQpIHtcblx0XHRcdGRlbGVnYXRlZCh3cmFwcGVkVW5zdXNwZW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d3JhcHBlZFVuc3VzcGVuZCgpO1xuXHRcdH1cblx0fTtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocHJvcHMpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbik7XG5cdGlmIChwcm9wcy5yZXZlYWxPcmRlciAmJiBwcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ2InKSB7XG5cdFx0Ly8gSWYgb3JkZXIgPT09ICdiYWNrd2FyZHMnIChvciwgd2VsbCwgYW55dGhpbmcgc3RhcnRpbmcgd2l0aCBhICdiJylcblx0XHQvLyB0aGVuIGZsaXAgdGhlIGNoaWxkIGxpc3QgYXJvdW5kIHNvIHRoYXQgdGhlIGxhc3QgY2hpbGQgd2lsbCBiZVxuXHRcdC8vIHRoZSBmaXJzdCBpbiB0aGUgbGlua2VkIGxpc3QuXG5cdFx0Y2hpbGRyZW4ucmV2ZXJzZSgpO1xuXHR9XG5cdC8vIEJ1aWxkIHRoZSBsaW5rZWQgbGlzdC4gSXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBpbiByZXZlcnNlIG9yZGVyXG5cdC8vIHNvIHRoYXQgYF9uZXh0YCBwb2ludHMgdG8gdGhlIGZpcnN0IGxpbmtlZCBsaXN0IG5vZGUgdG8gYmUgcmVzb2x2ZWQuXG5cdGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgbmV3IGxpbmtlZCBsaXN0IG5vZGUgYXMgYW4gYXJyYXkgb2YgZm9ybTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGVdXG5cdFx0Ly8gd2hlcmUgc3VzcGVuZGVkX2NvdW50IGFuZCByZXNvbHZlZF9jb3VudCBhcmUgbnVtZXJpYyBjb3VudGVycyBmb3Jcblx0XHQvLyBrZWVwaW5nIHRyYWNrIGhvdyBtYW55IHRpbWVzIGEgbm9kZSBoYXMgYmVlbiBzdXNwZW5kZWQgYW5kIHJlc29sdmVkLlxuXHRcdC8vXG5cdFx0Ly8gTm90ZSB0aGF0IHN1c3BlbmRlZF9jb3VudCBzdGFydHMgZnJvbSAxIGluc3RlYWQgb2YgMCwgc28gd2UgY2FuIGJsb2NrXG5cdFx0Ly8gcHJvY2Vzc2luZyBjYWxsYmFja3MgdW50aWwgY29tcG9uZW50RGlkTW91bnQgaGFzIGJlZW4gY2FsbGVkLiBJbiBhIHNlbnNlXG5cdFx0Ly8gbm9kZSBpcyBzdXNwZW5kZWQgYXQgbGVhc3QgdW50aWwgY29tcG9uZW50RGlkTW91bnQgZ2V0cyBjYWxsZWQhXG5cdFx0Ly9cblx0XHQvLyBQZW5kaW5nIGNhbGxiYWNrcyBhcmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbm9kZTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGUsIGNhbGxiYWNrXzAsIGNhbGxiYWNrXzEsIC4uLl1cblx0XHR0aGlzLl9tYXAuc2V0KGNoaWxkcmVuW2ldLCAodGhpcy5fbmV4dCA9IFsxLCAwLCB0aGlzLl9uZXh0XSkpO1xuXHR9XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJdGVyYXRlIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFmdGVyIG1vdW50aW5nIGZvciB0d28gcmVhc29uczpcblx0Ly8gMS4gQXMgZWFjaCBub2RlW1NVU1BFTkRFRF9DT1VOVF0gc3RhcnRzIGZyb20gMSwgdGhpcyBpdGVyYXRpb24gaW5jcmVhc2VzXG5cdC8vICAgIGVhY2ggbm9kZVtSRUxFQVNFRF9DT1VOVF0gYnkgMSwgdGhlcmVmb3JlIGJhbGFuY2luZyB0aGUgY291bnRlcnMuXG5cdC8vICAgIFRoZSBub2RlcyBjYW4gbm93IGJlIGNvbXBsZXRlbHkgY29uc3VtZWQgZnJvbSB0aGUgbGlua2VkIGxpc3QuXG5cdC8vIDIuIEhhbmRsZSBub2RlcyB0aGF0IG1pZ2h0IGhhdmUgZ290dGVuIHJlc29sdmVkIGJldHdlZW4gcmVuZGVyIGFuZFxuXHQvLyAgICBjb21wb25lbnREaWRNb3VudC5cblx0dGhpcy5fbWFwLmZvckVhY2goKG5vZGUsIGNoaWxkKSA9PiB7XG5cdFx0cmVzb2x2ZSh0aGlzLCBjaGlsZCwgbm9kZSk7XG5cdH0pO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4uLy4uL3NyYy9pbmRleCcpLlJlbmRlcmFibGVQcm9wczx7IGNvbnRleHQ6IGFueSB9Pn0gcHJvcHNcbiAqL1xuZnVuY3Rpb24gQ29udGV4dFByb3ZpZGVyKHByb3BzKSB7XG5cdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gcHJvcHMuY29udGV4dDtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIFBvcnRhbCBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IHByb3BzXG4gKlxuICogVE9ETzogdXNlIGNyZWF0ZVJvb3QoKSBpbnN0ZWFkIG9mIGZha2Ugcm9vdFxuICovXG5mdW5jdGlvbiBQb3J0YWwocHJvcHMpIHtcblx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRsZXQgY29udGFpbmVyID0gcHJvcHMuX2NvbnRhaW5lcjtcblxuXHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlbmRlcihudWxsLCBfdGhpcy5fdGVtcCk7XG5cdFx0X3RoaXMuX3RlbXAgPSBudWxsO1xuXHRcdF90aGlzLl9jb250YWluZXIgPSBudWxsO1xuXHR9O1xuXG5cdC8vIFdoZW4gd2UgY2hhbmdlIGNvbnRhaW5lciB3ZSBzaG91bGQgY2xlYXIgb3VyIG9sZCBjb250YWluZXIgYW5kXG5cdC8vIGluZGljYXRlIGEgbmV3IG1vdW50LlxuXHRpZiAoX3RoaXMuX2NvbnRhaW5lciAmJiBfdGhpcy5fY29udGFpbmVyICE9PSBjb250YWluZXIpIHtcblx0XHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHR9XG5cblx0Ly8gV2hlbiBwcm9wcy52bm9kZSBpcyB1bmRlZmluZWQvZmFsc2UvbnVsbCB3ZSBhcmUgZGVhbGluZyB3aXRoIHNvbWUga2luZCBvZlxuXHQvLyBjb25kaXRpb25hbCB2bm9kZS4gVGhpcyBzaG91bGQgbm90IHRyaWdnZXIgYSByZW5kZXIuXG5cdGlmIChwcm9wcy5fdm5vZGUpIHtcblx0XHRpZiAoIV90aGlzLl90ZW1wKSB7XG5cdFx0XHRfdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBmYWtlIERPTSBwYXJlbnQgbm9kZSB0aGF0IG1hbmFnZXMgYSBzdWJzZXQgb2YgYGNvbnRhaW5lcmAncyBjaGlsZHJlbjpcblx0XHRcdF90aGlzLl90ZW1wID0ge1xuXHRcdFx0XHRub2RlVHlwZTogMSxcblx0XHRcdFx0cGFyZW50Tm9kZTogY29udGFpbmVyLFxuXHRcdFx0XHRjaGlsZE5vZGVzOiBbXSxcblx0XHRcdFx0YXBwZW5kQ2hpbGQoY2hpbGQpIHtcblx0XHRcdFx0XHR0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG5cdFx0XHRcdFx0X3RoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGluc2VydEJlZm9yZShjaGlsZCwgYmVmb3JlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuXHRcdFx0XHRcdF90aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVDaGlsZChjaGlsZCkge1xuXHRcdFx0XHRcdHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpID4+PiAxLCAxKTtcblx0XHRcdFx0XHRfdGhpcy5fY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBSZW5kZXIgb3VyIHdyYXBwaW5nIGVsZW1lbnQgaW50byB0ZW1wLlxuXHRcdHJlbmRlcihcblx0XHRcdGNyZWF0ZUVsZW1lbnQoQ29udGV4dFByb3ZpZGVyLCB7IGNvbnRleHQ6IF90aGlzLmNvbnRleHQgfSwgcHJvcHMuX3Zub2RlKSxcblx0XHRcdF90aGlzLl90ZW1wXG5cdFx0KTtcblx0fVxuXHQvLyBXaGVuIHdlIGNvbWUgZnJvbSBhIGNvbmRpdGlvbmFsIHJlbmRlciwgb24gYSBtb3VudGVkXG5cdC8vIHBvcnRhbCB3ZSBzaG91bGQgY2xlYXIgdGhlIERPTS5cblx0ZWxzZSBpZiAoX3RoaXMuX3RlbXApIHtcblx0XHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFBvcnRhbGAgdG8gY29udGludWUgcmVuZGVyaW5nIHRoZSB2bm9kZSB0cmVlIGF0IGEgZGlmZmVyZW50IERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgRE9NIG5vZGUgdG8gY29udGludWUgcmVuZGVyaW5nIGluIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9ydGFsKHZub2RlLCBjb250YWluZXIpIHtcblx0Y29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KFBvcnRhbCwgeyBfdm5vZGU6IHZub2RlLCBfY29udGFpbmVyOiBjb250YWluZXIgfSk7XG5cdGVsLmNvbnRhaW5lckluZm8gPSBjb250YWluZXI7XG5cdHJldHVybiBlbDtcbn1cbiIsImltcG9ydCB7XG5cdHJlbmRlciBhcyBwcmVhY3RSZW5kZXIsXG5cdGh5ZHJhdGUgYXMgcHJlYWN0SHlkcmF0ZSxcblx0b3B0aW9ucyxcblx0dG9DaGlsZEFycmF5LFxuXHRDb21wb25lbnRcbn0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0VMRU1FTlRfVFlQRSA9XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuXHQweGVhYzc7XG5cbmNvbnN0IENBTUVMX1BST1BTID0gL14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS87XG5cbmNvbnN0IElTX0RPTSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIElucHV0IHR5cGVzIGZvciB3aGljaCBvbmNoYW5nZSBzaG91bGQgbm90IGJlIGNvbnZlcnRlZCB0byBvbmlucHV0LlxuLy8gdHlwZT1cImZpbGV8Y2hlY2tib3h8cmFkaW9cIiwgcGx1cyBcInJhbmdlXCIgaW4gSUUxMS5cbi8vIChJRTExIGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wsIHdoaWNoIHdlIHVzZSBoZXJlIHRvIHR1cm4gYHJhZGAgaW50byBgcmFgIHdoaWNoIG1hdGNoZXMgXCJyYW5nZVwiKVxuY29uc3Qgb25DaGFuZ2VJbnB1dFR5cGUgPSB0eXBlID0+XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBTeW1ib2woKSA9PSAnc3ltYm9sJ1xuXHRcdD8gL2ZpbHxjaGV8cmFkL2lcblx0XHQ6IC9maWx8Y2hlfHJhL2lcblx0KS50ZXN0KHR5cGUpO1xuXG4vLyBTb21lIGxpYnJhcmllcyBsaWtlIGByZWFjdC12aXJ0dWFsaXplZGAgZXhwbGljaXRseSBjaGVjayBmb3IgdGhpcy5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vLyBgVU5TQUZFXypgIGxpZmVjeWNsZSBob29rc1xuLy8gUHJlYWN0IG9ubHkgZXZlciBpbnZva2VzIHRoZSB1bnByZWZpeGVkIG1ldGhvZHMuXG4vLyBIZXJlIHdlIHByb3ZpZGUgYSBiYXNlIFwiZmFsbGJhY2tcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGNhbGxzIGFueSBkZWZpbmVkIFVOU0FGRV8gcHJlZml4ZWQgbWV0aG9kLlxuLy8gLSBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGl0cyBvd24gYGNvbXBvbmVudERpZE1vdW50KClgIChpbmNsdWRpbmcgdmlhIGRlZmluZVByb3BlcnR5KSwgdXNlIHRoYXQuXG4vLyAtIElmIGEgY29tcG9uZW50IGRlZmluZXMgYFVOU0FGRV9jb21wb25lbnREaWRNb3VudCgpYCwgYGNvbXBvbmVudERpZE1vdW50YCBpcyB0aGUgYWxpYXMgZ2V0dGVyL3NldHRlci5cbi8vIC0gSWYgYW55dGhpbmcgYXNzaWducyB0byBhbiBgVU5TQUZFXypgIHByb3BlcnR5LCB0aGUgYXNzaWdubWVudCBpcyBmb3J3YXJkZWQgdG8gdGhlIHVucHJlZml4ZWQgcHJvcGVydHkuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTk0MVxuW1xuXHQnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0J2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQnY29tcG9uZW50V2lsbFVwZGF0ZSdcbl0uZm9yRWFjaChrZXkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwga2V5LCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzWydVTlNBRkVfJyArIGtleV07XG5cdFx0fSxcblx0XHRzZXQodikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogdlxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vKipcbiAqIFByb3h5IHJlbmRlcigpIHNpbmNlIFJlYWN0IHJldHVybnMgYSBDb21wb25lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVk5vZGUgdHJlZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50IERPTSBub2RlIHRvIHJlbmRlciB2bm9kZSB0cmVlIGludG9cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHJlbmRlcmluZ1xuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudCB8IG51bGx9IFRoZSByb290IGNvbXBvbmVudCByZWZlcmVuY2Ugb3IgbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdC8vIFJlYWN0IGRlc3Ryb3lzIGFueSBleGlzdGluZyBET00gbm9kZXMsIHNlZSAjMTcyN1xuXHQvLyAuLi5idXQgb25seSBvbiB0aGUgZmlyc3QgcmVuZGVyLCBzZWUgIzE4Mjhcblx0aWYgKHBhcmVudC5fY2hpbGRyZW4gPT0gbnVsbCkge1xuXHRcdHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXHR9XG5cblx0cHJlYWN0UmVuZGVyKHZub2RlLCBwYXJlbnQpO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuIHZub2RlID8gdm5vZGUuX2NvbXBvbmVudCA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdHByZWFjdEh5ZHJhdGUodm5vZGUsIHBhcmVudCk7XG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcblxuXHRyZXR1cm4gdm5vZGUgPyB2bm9kZS5fY29tcG9uZW50IDogbnVsbDtcbn1cblxubGV0IG9sZEV2ZW50SG9vayA9IG9wdGlvbnMuZXZlbnQ7XG5vcHRpb25zLmV2ZW50ID0gZSA9PiB7XG5cdGlmIChvbGRFdmVudEhvb2spIGUgPSBvbGRFdmVudEhvb2soZSk7XG5cdGUucGVyc2lzdCA9IGVtcHR5O1xuXHRlLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gaXNQcm9wYWdhdGlvblN0b3BwZWQ7XG5cdGUuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXHRyZXR1cm4gKGUubmF0aXZlRXZlbnQgPSBlKTtcbn07XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuZnVuY3Rpb24gaXNQcm9wYWdhdGlvblN0b3BwZWQoKSB7XG5cdHJldHVybiB0aGlzLmNhbmNlbEJ1YmJsZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0UHJldmVudGVkKCkge1xuXHRyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkO1xufVxuXG5sZXQgY2xhc3NOYW1lRGVzY3JpcHRvciA9IHtcblx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRnZXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3M7XG5cdH1cbn07XG5cbmxldCBvbGRWTm9kZUhvb2sgPSBvcHRpb25zLnZub2RlO1xub3B0aW9ucy52bm9kZSA9IHZub2RlID0+IHtcblx0bGV0IHR5cGUgPSB2bm9kZS50eXBlO1xuXHRsZXQgcHJvcHMgPSB2bm9kZS5wcm9wcztcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzO1xuXG5cdC8vIG9ubHkgbm9ybWFsaXplIHByb3BzIG9uIEVsZW1lbnQgbm9kZXNcblx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuXHRcdGNvbnN0IG5vbkN1c3RvbUVsZW1lbnQgPSB0eXBlLmluZGV4T2YoJy0nKSA9PT0gLTE7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cblx0XHRmb3IgKGxldCBpIGluIHByb3BzKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBwcm9wc1tpXTtcblxuXHRcdFx0aWYgKElTX0RPTSAmJiBpID09PSAnY2hpbGRyZW4nICYmIHR5cGUgPT09ICdub3NjcmlwdCcpIHtcblx0XHRcdFx0Ly8gRW11bGF0ZSBSZWFjdCdzIGJlaGF2aW9yIG9mIG5vdCByZW5kZXJpbmcgdGhlIGNvbnRlbnRzIG9mIG5vc2NyaXB0IHRhZ3Mgb24gdGhlIGNsaWVudC5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgJiYgdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBTa2lwIGFwcGx5aW5nIHZhbHVlIGlmIGl0IGlzIG51bGwvdW5kZWZpbmVkIGFuZCB3ZSBhbHJlYWR5IHNldFxuXHRcdFx0XHQvLyBhIGRlZmF1bHQgdmFsdWVcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpID09PSAnZGVmYXVsdFZhbHVlJyAmJlxuXHRcdFx0XHQndmFsdWUnIGluIHByb3BzICYmXG5cdFx0XHRcdHByb3BzLnZhbHVlID09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBgZGVmYXVsdFZhbHVlYCBpcyB0cmVhdGVkIGFzIGEgZmFsbGJhY2sgYHZhbHVlYCB3aGVuIGEgdmFsdWUgcHJvcCBpcyBwcmVzZW50IGJ1dCBudWxsL3VuZGVmaW5lZC5cblx0XHRcdFx0Ly8gYGRlZmF1bHRWYWx1ZWAgZm9yIEVsZW1lbnRzIHdpdGggbm8gdmFsdWUgcHJvcCBpcyB0aGUgc2FtZSBhcyB0aGUgRE9NIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS5cblx0XHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICdkb3dubG9hZCcgJiYgdmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gQ2FsbGluZyBgc2V0QXR0cmlidXRlYCB3aXRoIGEgdHJ1dGh5IHZhbHVlIHdpbGwgbGVhZCB0byBpdCBiZWluZ1xuXHRcdFx0XHQvLyBwYXNzZWQgYXMgYSBzdHJpbmdpZmllZCB2YWx1ZSwgZS5nLiBgZG93bmxvYWQ9XCJ0cnVlXCJgLiBSZWFjdFxuXHRcdFx0XHQvLyBjb252ZXJ0cyBpdCB0byBhbiBlbXB0eSBzdHJpbmcgaW5zdGVhZCwgb3RoZXJ3aXNlIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBmaWxlIG5hbWUgYW5kIHRoZSBmaWxlIHdpbGwgYmUgY2FsbGVkXG5cdFx0XHRcdC8vIFwidHJ1ZVwiIHVwb24gZG93bmxvYWRpbmcgaXQuXG5cdFx0XHRcdHZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKC9vbmRvdWJsZWNsaWNrL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZGJsY2xpY2snO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkgKyB0eXBlKSAmJlxuXHRcdFx0XHQhb25DaGFuZ2VJbnB1dFR5cGUocHJvcHMudHlwZSlcblx0XHRcdCkge1xuXHRcdFx0XHRpID0gJ29uaW5wdXQnO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uZm9jdXMkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZm9jdXNpbic7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb25ibHVyJC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmZvY3Vzb3V0Jztcblx0XHRcdH0gZWxzZSBpZiAoL15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vbkN1c3RvbUVsZW1lbnQgJiYgQ0FNRUxfUFJPUFMudGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS5yZXBsYWNlKC9bQS1aMC05XS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBzdXBwb3J0IGZvciBvbklucHV0IGFuZCBvbkNoYW5nZSwgc2VlICMzNTYxXG5cdFx0XHQvLyBpZiB3ZSBoYXZlIGFuIG9uaW5wdXQgcHJvcCBhbHJlYWR5IGNoYW5nZSBpdCB0byBvbmlucHV0Q2FwdHVyZVxuXHRcdFx0aWYgKC9eb25pbnB1dCQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0pIHtcblx0XHRcdFx0XHRpID0gJ29uaW5wdXRDYXB0dXJlJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgc3VwcG9ydCBmb3IgYXJyYXkgc2VsZWN0IHZhbHVlczogPHNlbGVjdCBtdWx0aXBsZSB2YWx1ZT17W119IC8+XG5cdFx0aWYgKFxuXHRcdFx0dHlwZSA9PSAnc2VsZWN0JyAmJlxuXHRcdFx0bm9ybWFsaXplZFByb3BzLm11bHRpcGxlICYmXG5cdFx0XHRBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSlcblx0XHQpIHtcblx0XHRcdC8vIGZvckVhY2goKSBhbHdheXMgcmV0dXJucyB1bmRlZmluZWQsIHdoaWNoIHdlIGFidXNlIGhlcmUgdG8gdW5zZXQgdGhlIHZhbHVlIHByb3AuXG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpICE9IC0xO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkaW5nIHN1cHBvcnQgZm9yIGRlZmF1bHRWYWx1ZSBpbiBzZWxlY3QgdGFnXG5cdFx0aWYgKHR5cGUgPT0gJ3NlbGVjdCcgJiYgbm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BzLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPSAtMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlID09IGNoaWxkLnByb3BzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR2bm9kZS5wcm9wcyA9IG5vcm1hbGl6ZWRQcm9wcztcblxuXHRcdGlmIChwcm9wcy5jbGFzcyAhPSBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRcdGNsYXNzTmFtZURlc2NyaXB0b3IuZW51bWVyYWJsZSA9ICdjbGFzc05hbWUnIGluIHByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSBub3JtYWxpemVkUHJvcHMuY2xhc3MgPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsaXplZFByb3BzLCAnY2xhc3NOYW1lJywgY2xhc3NOYW1lRGVzY3JpcHRvcik7XG5cdFx0fVxuXHR9XG5cblx0dm5vZGUuJCR0eXBlb2YgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cblx0aWYgKG9sZFZOb2RlSG9vaykgb2xkVk5vZGVIb29rKHZub2RlKTtcbn07XG5cbi8vIE9ubHkgbmVlZGVkIGZvciByZWFjdC1yZWxheVxubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5jb25zdCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5vcHRpb25zLl9yZW5kZXIgPSBmdW5jdGlvbih2bm9kZSkge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSB7XG5cdFx0b2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblx0fVxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcbn07XG5cbmNvbnN0IG9sZERpZmZlZCA9IG9wdGlvbnMuZGlmZmVkO1xuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKX0gKi9cbm9wdGlvbnMuZGlmZmVkID0gZnVuY3Rpb24odm5vZGUpIHtcblx0aWYgKG9sZERpZmZlZCkge1xuXHRcdG9sZERpZmZlZCh2bm9kZSk7XG5cdH1cblxuXHRjb25zdCBwcm9wcyA9IHZub2RlLnByb3BzO1xuXHRjb25zdCBkb20gPSB2bm9kZS5fZG9tO1xuXHRpZiAoXG5cdFx0ZG9tICE9IG51bGwgJiZcblx0XHR2bm9kZS50eXBlID09PSAndGV4dGFyZWEnICYmXG5cdFx0J3ZhbHVlJyBpbiBwcm9wcyAmJlxuXHRcdHByb3BzLnZhbHVlICE9PSBkb20udmFsdWVcblx0KSB7XG5cdFx0ZG9tLnZhbHVlID0gcHJvcHMudmFsdWUgPT0gbnVsbCA/ICcnIDogcHJvcHMudmFsdWU7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcbn07XG5cbi8vIFRoaXMgaXMgYSB2ZXJ5IHZlcnkgcHJpdmF0ZSBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgUmVhY3QgaXRcbi8vIGlzIHVzZWQgdG8gc29ydC1vZiBkbyBydW50aW1lIGRlcGVuZGVuY3kgaW5qZWN0aW9uLiBTbyBmYXJcbi8vIG9ubHkgYHJlYWN0LXJlbGF5YCBtYWtlcyB1c2Ugb2YgaXQuIEl0IHVzZXMgaXQgdG8gcmVhZCB0aGVcbi8vIGNvbnRleHQgdmFsdWUuXG5leHBvcnQgY29uc3QgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSB7XG5cdFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IHtcblx0XHRjdXJyZW50OiB7XG5cdFx0XHRyZWFkQ29udGV4dChjb250ZXh0KSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50Q29tcG9uZW50Ll9nbG9iYWxDb250ZXh0W2NvbnRleHQuX2lkXS5wcm9wcy52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzXCI7XG5cbnR5cGUgUmFmQ2FsbGJhY2tUeXBlID0gKG1zU2luY2VMYXN0OiBudW1iZXIsIHRhZz86IGFueSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIENvbnRleHRUeXBlIHtcbiAgICBhZGRDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUsIHRhZz86IGFueSkgPT4gdm9pZDtcbiAgICByZW1vdmVDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IENvbnRleHRUeXBlPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVCYXRjaGVkQW5pbWF0aW9uRnJhbWVzKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcImFkZENhbGxiYWNrXCJdPigoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcInJlbW92ZUNhbGxiYWNrXCJdPigoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuXG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWY8Q29udGV4dFR5cGU+KG51bGwhKTtcbiAgICBpZiAoY29udGV4dEluZm8uY3VycmVudCA9PSBudWxsKVxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcbiAgICBjb25zdCBhbGxDYWxsYmFja3MgPSB1c2VSZWY8TWFwPFJhZkNhbGxiYWNrVHlwZSwgYW55Pj4obnVsbCEpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAtMTtcblxuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdDogbnVtYmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0SW5mby5jdXJyZW50fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXI+KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyB7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgd2l0aCBlZmZlY3RpdmVseSB0aGUgc2FtZSBydWxlcyBhcyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuICAgICAqIFxuICAgICAqIERvZXNuJ3QgbmVlZCB0byBiZSBzdGFibGUuXG4gICAgICovXG4gICAgY2FsbGJhY2s6IG51bGwgfCAoKG1zU2luY2VMYXN0OiBudW1iZXIpID0+IHZvaWQpO1xufVxuXG4vKipcbiAqIFRoZSAob3B0aW9uYWxseSBub24tc3RhYmxlKSBgY2FsbGJhY2tgIHlvdSBwcm92aWRlIHdpbGwgc3RhcnQgcnVubmluZyBldmVyeSBmcmFtZSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAqIFxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKiBcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH06IFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyk6IHZvaWQge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcblxuICAgIGNvbnN0IHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IHVzZUNvbnRleHQoU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtczogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LCBoYXNDYWxsYmFja10pXG59XG4iLCJpbXBvcnQgeyBtZW1vaXplIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0LCBjcmVhdGVDb250ZXh0LCBoLCBSZW5kZXJhYmxlUHJvcHMgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFeGNsdXNpdmVDb250ZXh0VHlwZSwgU3dhcHBhYmxlQ29udGV4dFR5cGUsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dFByZW1lbW9pemF0aW9uKGV4Y2x1c2l2aXR5S2V5OiBzdHJpbmcpOiBDb250ZXh0PEV4Y2x1c2l2ZUNvbnRleHRUeXBlIHwgbnVsbD47XHJcbmZ1bmN0aW9uIGdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24oZXhjbHVzaXZpdHlLZXk6IG51bGwgfCB1bmRlZmluZWQpOiBudWxsO1xyXG5mdW5jdGlvbiBnZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dFByZW1lbW9pemF0aW9uKGV4Y2x1c2l2aXR5S2V5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogQ29udGV4dDxFeGNsdXNpdmVDb250ZXh0VHlwZSB8IG51bGw+IHwgbnVsbDtcclxuZnVuY3Rpb24gZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbihleGNsdXNpdml0eUtleTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IENvbnRleHQ8RXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsPiB8IG51bGwge1xyXG4gICAgaWYgKGV4Y2x1c2l2aXR5S2V5ID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gY3JlYXRlQ29udGV4dDxFeGNsdXNpdmVDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3dhcHBhYmxlQ29udGV4dFR5cGU+KHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IGZhbHNlIH0pO1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNvbnRleHQgZm9yIGEgZ2l2ZW4gYGV4Y2x1c2l2aXR5S2V5YCwgY3JlYXRpbmcgb25lIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdC5cclxuICogXHJcbiAqIElmIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0OiB0eXBlb2YgZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbiA9IG1lbW9pemUoZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbik7XHJcblxyXG5pbnRlcmZhY2UgQ3NzQ2xhc3Nlc1Byb3ZpZGVyUHJvcHMge1xyXG4gICAgYmFzZTogc3RyaW5nO1xyXG4gICAgZW50ZXI6IHN0cmluZztcclxuICAgIGV4aXQ6IHN0cmluZztcclxuICAgIG1lYXN1cmU6IHN0cmluZztcclxuICAgIGluaXQ6IHN0cmluZztcclxuICAgIHRyYW5zaXRpb246IHN0cmluZztcclxuICAgIGZpbmFsaXplOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDc3NDbGFzc0NvbnRleHRUeXBlIHtcclxuICAgIEdldEJhc2VDbGFzczogKCkgPT4gc3RyaW5nO1xyXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gc3RyaW5nO1xyXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBzdHJpbmc7XHJcbiAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IHN0cmluZztcclxuICAgIEdldEluaXRDbGFzczogKCkgPT4gc3RyaW5nO1xyXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBzdHJpbmc7XHJcbiAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENzc0NsYXNzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q3NzQ2xhc3NDb250ZXh0VHlwZT4oe1xyXG4gICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBcInB0bFwiLFxyXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gXCJuXCIsXHJcbiAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IFwieFwiLFxyXG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBcIm1cIixcclxuICAgIEdldEluaXRDbGFzczogKCkgPT4gXCJpXCIsXHJcbiAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IFwidFwiLFxyXG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gXCJmXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3NzQ2xhc3Nlc1Byb3ZpZGVyKHsgYmFzZSwgZW50ZXIsIGV4aXQsIG1lYXN1cmUsIGluaXQsIHRyYW5zaXRpb24sIGZpbmFsaXplLCBjaGlsZHJlbiwgLi4ucmVzdCB9OiBSZW5kZXJhYmxlUHJvcHM8UGFydGlhbDxDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcz4+KSB7XHJcbiAgICBjb25zdCBjb250ZXh0T2JqZWN0ID0gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUgfSk7XHJcbiAgICByZXR1cm4gKDxDc3NDbGFzc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRPYmplY3R9ICB7Li4ucmVzdH0gY2hpbGRyZW49e2NoaWxkcmVufSAvPilcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNzc0NsYXNzZXMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxyXG4gICAgICAgIEdldEVudGVyQ2xhc3MsXHJcbiAgICAgICAgR2V0RXhpdENsYXNzLFxyXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcclxuICAgICAgICBHZXRJbml0Q2xhc3MsXHJcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxyXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3NcclxuICAgIH0gPSB1c2VDb250ZXh0KENzc0NsYXNzQ29udGV4dCk7XHJcbiAgICBjb25zdCBHZXREaXJlY3Rpb25DbGFzcyA9IHVzZUNhbGxiYWNrKChkaXJlY3Rpb246IFRyYW5zaXRpb25EaXJlY3Rpb24pOiBzdHJpbmcgPT4geyBzd2l0Y2ggKGRpcmVjdGlvbikgeyBjYXNlIFwiZW50ZXJcIjogcmV0dXJuIEdldEVudGVyQ2xhc3MoKTsgY2FzZSBcImV4aXRcIjogcmV0dXJuIEdldEV4aXRDbGFzcygpOyB9IH0sIFtdKTtcclxuICAgIGNvbnN0IEdldFBoYXNlQ2xhc3MgPSB1c2VDYWxsYmFjaygocGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyA9PiB7IHN3aXRjaCAocGhhc2UpIHsgY2FzZSBcIm1lYXN1cmVcIjogcmV0dXJuIEdldE1lYXN1cmVDbGFzcygpOyBjYXNlIFwiaW5pdFwiOiByZXR1cm4gR2V0SW5pdENsYXNzKCk7IGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHJldHVybiBHZXRUcmFuc2l0aW9uQ2xhc3MoKTsgY2FzZSBcImZpbmFsaXplXCI6IHJldHVybiBHZXRGaW5hbGl6ZUNsYXNzKCk7IH0gfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBHZXRCYXNlQ2xhc3MsXHJcbiAgICAgICAgR2V0RW50ZXJDbGFzcyxcclxuICAgICAgICBHZXRFeGl0Q2xhc3MsXHJcbiAgICAgICAgR2V0TWVhc3VyZUNsYXNzLFxyXG4gICAgICAgIEdldEluaXRDbGFzcyxcclxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3MsXHJcbiAgICAgICAgR2V0RmluYWxpemVDbGFzcyxcclxuICAgICAgICBHZXREaXJlY3Rpb25DbGFzcyxcclxuICAgICAgICBHZXRQaGFzZUNsYXNzXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNzc0NsYXNzQ29udGV4dFZhbHVlKG5ld1ZhbHVlczogUGFydGlhbDxDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcz4pOiBDc3NDbGFzc0NvbnRleHRUeXBlIHtcclxuICAgIGNvbnN0IG9sZFZhbHVlcyA9IHVzZUNvbnRleHQoQ3NzQ2xhc3NDb250ZXh0KTtcclxuICAgIGNvbnN0IGJhc2UgPSAobmV3VmFsdWVzPy5iYXNlID8/IG9sZFZhbHVlcy5HZXRCYXNlQ2xhc3MoKSk7XHJcbiAgICBjb25zdCBlbnRlciA9IChuZXdWYWx1ZXM/LmVudGVyID8/IG9sZFZhbHVlcy5HZXRFbnRlckNsYXNzKCkpO1xyXG4gICAgY29uc3QgZXhpdCA9IChuZXdWYWx1ZXM/LmV4aXQgPz8gb2xkVmFsdWVzLkdldEV4aXRDbGFzcygpKTtcclxuICAgIGNvbnN0IG1lYXN1cmUgPSAobmV3VmFsdWVzPy5tZWFzdXJlID8/IG9sZFZhbHVlcy5HZXRNZWFzdXJlQ2xhc3MoKSk7XHJcbiAgICBjb25zdCBpbml0ID0gKG5ld1ZhbHVlcz8uaW5pdCA/PyBvbGRWYWx1ZXMuR2V0SW5pdENsYXNzKCkpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdWYWx1ZXM/LnRyYW5zaXRpb24gPz8gb2xkVmFsdWVzLkdldFRyYW5zaXRpb25DbGFzcygpKTtcclxuICAgIGNvbnN0IGZpbmFsaXplID0gKG5ld1ZhbHVlcz8uZmluYWxpemUgPz8gb2xkVmFsdWVzLkdldEZpbmFsaXplQ2xhc3MoKSk7XHJcblxyXG4gICAgcmV0dXJuIHVzZU1lbW88Q3NzQ2xhc3NDb250ZXh0VHlwZT4oKCkgPT4gKHtcclxuICAgICAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IGJhc2UhLFxyXG4gICAgICAgIEdldEVudGVyQ2xhc3M6ICgpID0+IGVudGVyISxcclxuICAgICAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IGV4aXQhLFxyXG4gICAgICAgIEdldE1lYXN1cmVDbGFzczogKCkgPT4gbWVhc3VyZSEsXHJcbiAgICAgICAgR2V0SW5pdENsYXNzOiAoKSA9PiBpbml0ISxcclxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IHRyYW5zaXRpb24hLFxyXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3M6ICgpID0+IGZpbmFsaXplISxcclxuICAgIH0pLCBbYmFzZSwgZW50ZXIsIGV4aXQsIGluaXQsIHRyYW5zaXRpb24sIGZpbmFsaXplXSlcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIGgsIFJlbmRlcmFibGVQcm9wcywgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNoaWxkcmVuRmxhZywgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNYW5hZ2VkQ2hpbGQsIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnMsIHVzZU1hbmFnZWRDaGlsZHJlbiwgdXNlUGFzc2l2ZVN0YXRlLCB1c2VTdGFibGVPYmplY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQgfSBmcm9tIFwiLi91dGlsL2NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgRXhjbHVzaXZlQ29udGV4dFR5cGUsIEV4Y2x1c2l2ZUluZm8sIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuXHJcblxyXG5cclxubGV0IGdsb2JhbENvdW50ID0gLTE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyKHsgZXhjbHVzaXZpdHlLZXksIGNoaWxkcmVuIH06IFJlbmRlcmFibGVQcm9wczx7IGV4Y2x1c2l2aXR5S2V5Pzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB9Pikge1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwiRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyXCIsIGV4Y2x1c2l2aXR5S2V5KTtcclxuXHJcbiAgICBjb25zdCBbZ2V0TmV4dEluZGV4SW5MaW5lLCBzZXROZXh0SW5kZXhJbkxpbmVdID0gdXNlUGFzc2l2ZVN0YXRlPHN0cmluZyB8IG51bGwsIG5ldmVyPihudWxsKTtcclxuXHJcbiAgICBjb25zdCB7IGNvbnRleHQsIG1hbmFnZWRDaGlsZHJlblJldHVybiwgbWFuYWdlZENoaWxkcmVuUmV0dXJuOiB7IGdldENoaWxkcmVuIH0gfSA9IHVzZU1hbmFnZWRDaGlsZHJlbjxFeGNsdXNpdmVJbmZvPih7IG1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnM6IHt9IH0pO1xyXG4gICAgY29uc3QgeyBjaGFuZ2VJbmRleCwgZ2V0Q3VycmVudEluZGV4IH0gPSB1c2VDaGlsZHJlbkZsYWc8RXhjbHVzaXZlSW5mbywgbmV2ZXI+KHtcclxuICAgICAgICBnZXRDaGlsZHJlbixcclxuICAgICAgICBjbG9zZXN0Rml0OiBmYWxzZSxcclxuICAgICAgICBpbml0aWFsSW5kZXg6IG51bGwsXHJcbiAgICAgICAgb25JbmRleENoYW5nZTogbnVsbCxcclxuICAgICAgICBzZXRBdDogdXNlQ2FsbGJhY2soKG0sIHYpID0+IHsgbS5zZXRFeGNsdXNpdmVseU9wZW4odik7IH0sIFtdKSxcclxuICAgICAgICBnZXRBdDogdXNlQ2FsbGJhY2soKG0pID0+IG0uZ2V0RXhjbHVzaXZlbHlPcGVuKCksIFtdKSxcclxuICAgICAgICBpc1ZhbGlkOiB1c2VDYWxsYmFjaygobSkgPT4geyByZXR1cm4gdHJ1ZSB9LCBbXSksXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9IHVzZUNhbGxiYWNrKChpbmRleDogc3RyaW5nLCB2aXNpYmxlOiBcInNob3dcIiB8IFwiaGlkZGVuXCIpID0+IHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICBjb25zdCBuZXh0SW5MaW5lID0gZ2V0TmV4dEluZGV4SW5MaW5lKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEluTGluZSA9IGdldEN1cnJlbnRJbmRleCgpO1xyXG5cclxuICAgICAgICBpZiAodmlzaWJsZSA9PSBcInNob3dcIiAmJiBpbmRleCAhPSBjdXJyZW50SW5MaW5lKSB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBXaGVuIGEgY2hpbGQgdHJhbnNpdGlvbiBzaG93cyBpdHNlbGYgaW5pdGlhbGx5XHJcbiAgICAgICAgICAgICAqIChpLmUuIHJlcXVlc3RzIGl0c2VsZiB0byBiZSB0aGUgZXhjbHVzaXZlIHRyYW5zaXRpb24pXHJcbiAgICAgICAgICAgICAqIHdlIGVpdGhlciBsZXQgaXQgb3BlbiBpbW1lZGlhdGVseSBpZiB0aGVyZSdzIG5vIG9uZSBmaW5pc2hpbmcgdGhlaXIgZXhpdCxcclxuICAgICAgICAgICAgICogb3Igd2FpdCB1bnRpbCB0aGF0IGFmb3JlbWVudGlvbmVkIGV4aXQgaGFzIGZpbmlzaGVkLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbkxpbmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q2hpbGRyZW4oKS5nZXRBdChjdXJyZW50SW5MaW5lKT8uZm9yY2VDbG9zZT8uKCk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0SW5kZXhJbkxpbmUoaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZpc2libGUgPT0gXCJoaWRkZW5cIikge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogV2hlbiBhIGNoaWxkIHRyYW5zaXRpb24gaGFzIGZpbmlzaGVkIGl0cyBleGl0IHRyYW5zaXRpb24sXHJcbiAgICAgICAgICAgICAqIG1ha2Ugc3VyZSB0aGF0IGlmIHNvbWVvbmUgcmVxdWVzdGVkIHRvIGJlIHNob3duIGluIHRoZSBtZWFudGltZVxyXG4gICAgICAgICAgICAgKiB0aGF0IHdlIGRvIHNvLlxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYgKG5leHRJbkxpbmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlSW5kZXgobmV4dEluTGluZSk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0SW5kZXhJbkxpbmUobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBjb250ZXh0MjogRXhjbHVzaXZlQ29udGV4dFR5cGUgPSB1c2VTdGFibGVPYmplY3Qoe1xyXG4gICAgICAgIC4uLmNvbnRleHQsXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQ6IHVzZVN0YWJsZU9iamVjdCh7XHJcbiAgICAgICAgICAgIGV4Y2x1c2l2aXR5S2V5LFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0ID0gR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQoZXhjbHVzaXZpdHlLZXkpO1xyXG5cclxuICAgIHJldHVybiAoRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQgPT0gbnVsbCkgPyAoKGNoaWxkcmVuIGFzIFZOb2RlKSA/PyBudWxsKSA6IDxFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dDJ9PntjaGlsZHJlbn08L0V4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzIGV4dGVuZHMgT21pdDxVc2VNYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzPEV4Y2x1c2l2ZUluZm8+LCBcIm1hbmFnZWRDaGlsZFBhcmFtZXRlcnNcIiB8IFwiY29udGV4dFwiPiB7XHJcbiAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczogUGljazxUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8YW55PiwgXCJzaG93XCI+O1xyXG4gICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZm9yY2VDbG9zZTogKCkgPT4gdm9pZDsgZXhjbHVzaXZpdHlLZXk/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFeGNsdXNpdmVUcmFuc2l0aW9uKHsgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgc2hvdyB9LCBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBmb3JjZUNsb3NlLCBleGNsdXNpdml0eUtleSB9IH06IFVzZUV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzKSB7XHJcbiAgICBjb25zdCBjID0gR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQoZXhjbHVzaXZpdHlLZXkpO1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlRXhjbHVzaXZlVHJhbnNpdGlvblwiLCBjID09IG51bGwpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGM/IHVzZUNvbnRleHQoYykgOiBudWxsO1xyXG5cclxuICAgIC8vY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSwgW10pO1xyXG4gICAgY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IHsgZ2xvYmFsQ291bnQgKz0gMTsgcmV0dXJuIChnbG9iYWxDb3VudCkudG9TdHJpbmcoKSB9LCBbXSk7XHJcbiAgICBjb25zdCBbZXhjbHVzaXZlbHlPcGVuLCBzZXRFeGNsdXNpdmVseU9wZW4sIGdldEV4Y2x1c2l2ZWx5T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPighIXNob3cpO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIG1hbmFnZWRDaGlsZFJldHVybjogeyBnZXRDaGlsZHJlbiB9XHJcbiAgICB9ID0gdXNlTWFuYWdlZENoaWxkPEV4Y2x1c2l2ZUluZm8+KHsgY29udGV4dCwgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogeyBpbmRleCB9IH0sIHsgaW5kZXgsIGdldEV4Y2x1c2l2ZWx5T3Blbiwgc2V0RXhjbHVzaXZlbHlPcGVuLCBmb3JjZUNsb3NlIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhcmVudE9uVmlzQ2hhbmdlID0gY29udGV4dD8uZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQub25WaXNpYmlsaXR5Q2hhbmdlO1xyXG5cclxuICAgIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9IHVzZUNhbGxiYWNrPE5vbk51bGxhYmxlPFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxhbnk+W1wib25WaXNpYmlsaXR5Q2hhbmdlXCJdPj4oKHZpc2libGUpID0+IHtcclxuICAgICAgICBwYXJlbnRPblZpc0NoYW5nZT8uKGluZGV4LCB2aXNpYmxlID09IGZhbHNlID8gXCJoaWRkZW5cIiA6IFwic2hvd1wiKTtcclxuICAgIH0sIFtwYXJlbnRPblZpc0NoYW5nZSwgaW5kZXhdKTtcclxuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzaG93KVxyXG4gICAgICAgICAgICBwYXJlbnRPblZpc0NoYW5nZT8uKGluZGV4LCBcInNob3dcIik7XHJcbiAgICB9LCBbc2hvdywgcGFyZW50T25WaXNDaGFuZ2UsIGluZGV4XSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuOiB7XHJcbiAgICAgICAgICAgIGlzRXhjbHVzaXZlOiAoY29udGV4dCAhPSBudWxsKSxcclxuICAgICAgICAgICAgZXhjbHVzaXZlbHlPcGVuLFxyXG4gICAgICAgICAgICBzZXRFeGNsdXNpdmVseU9wZW4sXHJcbiAgICAgICAgICAgIGdldEV4Y2x1c2l2ZWx5T3BlbixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBGdW5jdGlvbmFsQ29tcG9uZW50LCBoLCBSZWYsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcblxyXG50eXBlIEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPiA9IE9taXQ8UCwgXCJyZWZcIj4gJiB7IHJlZj86IFJlZjxFPiB9XHJcbnR5cGUgRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudDxQLCBFPiA9IChwOiBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50UHJvcHM8UCwgRT4pID0+IFZOb2RlPEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPj5cclxuXHJcbnR5cGUgRWxlbWVudEZyb21Qcm9wczxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8YW55Pj4gPSBQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8aW5mZXIgRT4gPyBFIDogRXZlbnRUYXJnZXQ7XHJcbnR5cGUgUHJvcHNGcm9tQ29tcG9uZW50PEMgZXh0ZW5kcyBGdW5jdGlvbmFsQ29tcG9uZW50PGFueT4+ID0gQyBleHRlbmRzIEZ1bmN0aW9uYWxDb21wb25lbnQ8aW5mZXIgUD4gPyBQIDogdW5rbm93bjtcclxuXHJcbi8qKlxyXG4gKiBTaG9ydGN1dCBmb3IgcHJlYWN0L2NvbXBhdCdzIGBmb3J3YXJkUmVmYCB0aGF0IGF1dG8tYXNzdW1lcyBzb21lIHRoaW5ncyB0aGF0IGFyZSB1c2VmdWwgZm9yIGZvcndhcmRpbmcgcmVmcyB0byBgSFRNTEVsZW1lbnRzYCBzcGVjaWZpY2FsbHkuXHJcbiAqIE5hbWVseSBpdCBpbnZvbHZlcyBkZS1ndW5raW5nIHRoZSB0eXBlIHN5c3RlbSBieSBsZXR0aW5nIHVzIHJldHVybiAqZ2VuZXJpYyogZnVuY3Rpb24gYW5kIHBsYXlpbmcgbmljZSB3aXRoIFJlYWN0LiBJbiBhbGwgb3RoZXIgcmVzcGVjdHMsIGl0IGFjdHMgbGlrZSBgZm9yd2FyZFJlZmAuXHJcbiAqIFxyXG4gKiBUT0RPOiBTdGlsbCBuZWVkZWQ/XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEVsZW1lbnRSZWY8QyBleHRlbmRzIDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHA6IGFueSwgcmVmOiBSZWY8RT4pID0+IChWTm9kZTxhbnk+IHwgbnVsbCk+KENvbXBvbmVudDogQykge1xyXG4gICAgdHlwZSBQID0gUHJvcHNGcm9tQ29tcG9uZW50PEM+O1xyXG5cclxuXHJcbiAgICBjb25zdCBGb3J3YXJkZWRDb21wb25lbnQgPSBmb3J3YXJkUmVmKENvbXBvbmVudCk7XHJcbiAgICByZXR1cm4gRm9yd2FyZGVkQ29tcG9uZW50IGFzIEM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VmdWwgaW4gcGFydGljdWxhciBmb3IgU2xpZGVzIHdpdGggYSBUYWIgUGFuZWwgLS1cclxuICogaWYgd2UgZG8gTWF0aC5zaWduKGN1cnJlbnRJbmRleCAtIHNsaWRlSW5kZXgpLCBpdFxyXG4gKiB0cmFuc2l0aW9ucyBuaWNlbHkgaW4gdGhlIGV4cGVjdGVkIGRpcmVjdGlvbixcclxuICogYnV0IHdlIG5lZWQgdG8gXCJyZW1lbWJlclwiIHdoaWNoIGRpcmVjdGlvbiB0byB1c2VcclxuICogd2hlbiBpdCdzIHRoZSBjdXJyZW50IHBhbmVsIChhbmQgdGhlIGRpZmZlcmVuY2UgaXMgMClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMYXN0Tm9uTnVsbFZhbHVlPFQ+KHZhbHVlOiBUIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFQgfCBudWxsIHtcclxuICAgIGNvbnN0IGxhc3ROb25OdWxsVmFsdWUgPSB1c2VSZWY8VCB8IG51bGw+KG51bGwpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbClcclxuICAgICAgICAgICAgbGFzdE5vbk51bGxWYWx1ZS5jdXJyZW50ID0gdmFsdWU7XHJcbiAgICB9LCBbdmFsdWVdKTtcclxuXHJcbiAgICByZXR1cm4gdmFsdWUgPz8gbGFzdE5vbk51bGxWYWx1ZS5jdXJyZW50O1xyXG59XHJcbiIsImltcG9ydCB7IGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIENvbXBvbmVudENoaWxkcmVuLCBoLCBSZWYsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyIH0gZnJvbSBcIi4vZXhjbHVzaXZlLmpzXCI7XHJcbmltcG9ydCB7IFN3YXBwYWJsZUNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3YXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgUGFydGlhbDxDcmVhdGVTd2FwcGFibGVQcm9wcz4sIE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzPEU+IHtcclxuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ5IGRlZmF1bHQsIGVhY2ggY2hpbGQgdHJhbnNpdGlvbnMgaW4vb3V0IGF0IHRoZSBzYW1lIHRpbWUsIGluIHN5bmMgd2l0aCBlYWNoIG90aGVyLlxyXG4gICAgICogXHJcbiAgICAgKiBJZiB5b3Ugd2FudCB0byBndWFyYW50ZWUgdGhhdCwgbm8gbWF0dGVyIHdoYXQsIG9ubHkgb25lIGlzIGV2ZXIgdmlzaWJsZSBhdCBhbGwsXHJcbiAgICAgKiBwYXNzIGEgc3RyaW5nIHRvIGBleGNsdXNpdml0eUtleWAsIGFuZCBhbGwgdHJhbnNpdGlvbnMgdGhhdCB1c2UgdGhhdCBzYW1lXHJcbiAgICAgKiBgZXhjbHVzaXZpdHlLZXlgIHdpbGwgY29vcmRpbmF0ZSB0aGlzIGJlaGF2aW9yIGFtb25nIHRoZW1zZWx2ZXMuXHJcbiAgICAgKiBcclxuICAgICAqIFRoaXMgaXMgYWxzbyBhdmFpbGFibGUgYXMgYSBzZXBhcmF0ZSBjb21wb25lbnQgKGBFeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXJgKVxyXG4gICAgICogaWYgeW91IG5lZWQgdGhpcyBiZWhhdmlvciBpbiB1bnJlbGF0ZWQgY2lyY3Vtc3RhbmNlcy5cclxuICAgICAqL1xyXG4gICAgZXhjbHVzaXZpdHlLZXk/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWF0ZVN3YXBwYWJsZVByb3BzIHtcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGNvbXBvbmVudCBpcyBpbmxpbmUtZ3JpZCBvciBncmlkLiBcclxuICAgICAqIElmIG5vdCBwcm92aWRlZCwgdGhlIGNoaWxkIGVsZW1lbnQgaXMgbG9va2VkIGF0LiBJZiBpdCdzIGEgc3BhbiBvciBvdGhlciBpbmxpbmUgZWxlbWVudCwgaW5saW5lIGlzIGFzc3VtZWQuIFxyXG4gICAgICogKEEgc2ltcGx5LWZvb2xlZCBoZXVyaXN0aWMtLXByb3ZpZGUgdGhpcyBwcm9wIGlmIG5lY2Vzc2FyeSlcclxuICAgICAqL1xyXG4gICAgaW5saW5lOiBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb3ZpZGVzIGRlZmF1bHQgdmFsdWVzIHRvIGB1c2VUcmFuc2l0aW9uYCdzIGBhbmltYXRlT25Nb3VudGAuIElmIG51bGwsIHRoZSBkZWZhdWx0IHZhbHVlIHByb3ZpZGVkIHdpbGwgYmUgYGZhbHNlYCBpbml0aWFsbHksIHRoZW4gYHRydWVgIGFmdGVyIHRoZSBgU3dhcHBhYmxlYCBpdHNlbGYgaGFzIG1vdW50ZWQuXHJcbiAgICAgKi9cclxuICAgIGNoaWxkcmVuQW5pbWF0ZU9uTW91bnQ/OiBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wczxQIGV4dGVuZHMge30+KHsgaW5saW5lIH06IENyZWF0ZVN3YXBwYWJsZVByb3BzLCBvdGhlclByb3BzOiBQKSB7XHJcbiAgICB0eXBlIEUgPSBQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8aW5mZXIgRT4gPyBFIDogSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzPEU+KHtcclxuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7R2V0QmFzZUNsYXNzKCl9LXN3YXAtY29udGFpbmVyYCwgaW5saW5lICYmIGAke0dldEJhc2VDbGFzcygpfS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cclxuICogXHJcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cclxuICogXHJcbiAqIElmIHlvdSBwYXNzIGEgcmVndWxhciBlbGVtZW50IChsaWtlIGEgZGl2KSBvciBvdGhlciBzaW5nbGUgY29tcG9uZW50LCB0aGVuIHRoZWUgcHJvcHMgYW5kIHJlZiB3aWxsIGJlIGZvcndhcmRlZCBvbnRvIHRoYXQgZWxlbWVudC4gT3RoZXJ3aXNlLCBhbGwgdGhlIGNoaWxkcmVuIHdpbGwgYmUgd3JhcHBlZCBpbiBhIGRpdiBvciBzcGFuIGRlcGVuZGluZyBvbiB0aGUgYGlubGluZWAgcHJvcC5cclxuICogQHBhcmFtIHBhcmFtMCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTd2FwcGFibGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGNoaWxkcmVuOiBjLCBpbmxpbmUsIGNoaWxkcmVuQW5pbWF0ZU9uTW91bnQsIGV4Y2x1c2l2aXR5S2V5LCAuLi5wIH06IFN3YXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIGxldCBjaGlsZHJlbiA9IGMgYXMgVk5vZGU7XHJcbiAgICBpZiAoIShjaGlsZHJlbiBhcyBWTm9kZSkudHlwZSlcclxuICAgICAgICBjaGlsZHJlbiA9ICghaW5saW5lID8gPGRpdj57Y2hpbGRyZW59PC9kaXY+IDogPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj4pXHJcbiAgICBpbmxpbmUgPz89IHR5cGVvZiBjaGlsZHJlbi50eXBlID09PSBcInN0cmluZ1wiICYmIGlubGluZUVsZW1lbnRzLmhhcyhjaGlsZHJlbi50eXBlKTtcclxuXHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzPEU+KHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW4ucHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGFuaW1hdGVPbk1vdW50ID0gdXNlUmVmKGNoaWxkcmVuQW5pbWF0ZU9uTW91bnQgPz8gZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhbmltYXRlT25Nb3VudC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgY29udGV4dFZhbHVlID0gdXNlUmVmKHsgZ2V0QW5pbWF0ZU9uTW91bnQ6ICgpID0+IHsgcmV0dXJuIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQ7IH0gfSk7XHJcbiAgICBsZXQgcmV0ID0gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4gYXMgdHlwZW9mIHRyYW5zaXRpb25Qcm9wcyk7XHJcbiAgICByZXQgPSAoPFN3YXBwYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZS5jdXJyZW50fT57cmV0fTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj4pXHJcbiAgICBpZiAoZXhjbHVzaXZpdHlLZXkpIHtcclxuICAgICAgICByZXQgPSAoPEV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlciBrZXk9e2V4Y2x1c2l2aXR5S2V5fSBleGNsdXNpdml0eUtleT17ZXhjbHVzaXZpdHlLZXl9PntyZXR9PC9FeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXI+KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufSkpXHJcblxyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4iLCJpbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGgsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgcmV0dXJuRmFsc2UsIHJ1bkltbWVkaWF0ZWx5IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24gfSBmcm9tIFwiLi9leGNsdXNpdmUuanNcIjtcclxuaW1wb3J0IHsgR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQsIHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dFR5cGUsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSwgVHJhbnNpdGlvblN0YXRlLCBVc2VUcmFuc2l0aW9uUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbjxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IEUgfCBudWxsKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoLi4uKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShgdHJhbnNpdGlvbi1kdXJhdGlvbmApKS5zcGxpdChcIixcIikubWFwKHN0ciA9PiB7XHJcbiAgICAgICAgaWYgKHN0ci5lbmRzV2l0aChcIm1zXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgIGlmIChzdHIuZW5kc1dpdGgoXCJzXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gKCtzdHIuc3Vic3RyaW5nKDAsIHN0ci5sZW5ndGggLSAxKSkgKiAxMDAwO1xyXG4gICAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVN0YXRlKG5leHRTdGF0ZTogVHJhbnNpdGlvblN0YXRlKSB7XHJcbiAgICByZXR1cm4gbmV4dFN0YXRlLnNwbGl0KFwiLVwiKSBhcyBbVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cclxuICogXHJcbiAqIEBwYXJhbSBwYXJhbTAgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb248RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHByb3BzSW5jb21pbmc6IHsgY2hpbGRyZW4sIC4uLnAgfSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG1lYXN1cmUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgb25WaXNpYmlsaXR5Q2hhbmdlIH0sIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH0gfTogVXNlVHJhbnNpdGlvblBhcmFtZXRlcnM8RT4pOiBWTm9kZTxoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4gfCBudWxsIHtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVRyYW5zaXRpb25cIiwgb25WaXNpYmlsaXR5Q2hhbmdlKTtcclxuXHJcbiAgICBjb25zdCB7IGdldEFuaW1hdGVPbk1vdW50IH0gPSB1c2VDb250ZXh0KFN3YXBwYWJsZUNvbnRleHQpO1xyXG4gICAgZXhpdFZpc2liaWxpdHkgfHw9IFwiaGlkZGVuXCJcclxuICAgIGFuaW1hdGVPbk1vdW50ID8/PSBnZXRBbmltYXRlT25Nb3VudCgpO1xyXG4gICAgbWVhc3VyZSA/Pz0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgZ2V0RXhpdFZpc2liaWxpdHkgPSB1c2VTdGFibGVHZXR0ZXIoZXhpdFZpc2liaWxpdHkpO1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MsIEdldEVudGVyQ2xhc3MsIEdldEV4aXRDbGFzcywgR2V0TWVhc3VyZUNsYXNzLCBHZXRJbml0Q2xhc3MsIEdldFRyYW5zaXRpb25DbGFzcywgR2V0RmluYWxpemVDbGFzcywgR2V0RGlyZWN0aW9uQ2xhc3MsIEdldFBoYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIGNvbnN0IGdldE1lYXN1cmUgPSB1c2VTdGFibGVHZXR0ZXIobWVhc3VyZSk7XHJcbiAgICBjb25zdCB7IGV4Y2x1c2l2ZVRyYW5zaXRpb25SZXR1cm46IHsgZXhjbHVzaXZlbHlPcGVuLCBpc0V4Y2x1c2l2ZSwgb25WaXNpYmlsaXR5Q2hhbmdlOiBleGNsdXNpdmVUcmFuc2l0aW9uVmlzaWJpbGl0eUNoYW5nZSB9IH0gPSB1c2VFeGNsdXNpdmVUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczogeyBzaG93IH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXksIGZvcmNlQ2xvc2U6IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgaW50ZXJuYWxPblNob3dDaGFuZ2VkKGZhbHNlLCBnZXRNZWFzdXJlKCkpOyB9KSB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNFeGNsdXNpdmUpIHtcclxuICAgICAgICBzaG93ID0gKHNob3cgJiYgZXhjbHVzaXZlbHlPcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7IHJlZkVsZW1lbnRSZXR1cm46IHsgZ2V0RWxlbWVudCwgcHJvcHNTdGFibGUgfSB9ID0gdXNlUmVmRWxlbWVudDxFPih7fSlcclxuICAgIGNvbnN0IGNzc1Byb3BlcnRpZXMgPSB1c2VSZWY8aC5KU1guQ1NTUHJvcGVydGllcz4oe30pO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0PHN0cmluZz4oW1xyXG4gICAgICAgIC8vIFRoaXMgaXMgcmVtb3ZlZCBkdXJpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBmaXJzdCByZW5kZXJcclxuICAgICAgICAvLyAoYXQgbGVhc3Qgb25jZSBgc2hvd2AgaXMgbm9uLW51bGwpXHJcbiAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxyXG4gICAgXSkpO1xyXG4gICAgY29uc3QgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydCghIXN0YXRlKTtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGlvbiwgcGhhc2VdID0gcGFyc2VTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoYCR7ZGlyZWN0aW9ufS1maW5hbGl6ZWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50Py4odGltZW91dEhhbmRsZS5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SGFuZGxlLmN1cnJlbnQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3Qgb3RoZXJQcm9wcyA9IHVzZVJlZjxoLkpTWC5IVE1MQXR0cmlidXRlczxFPj4oe1xyXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZDogKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGdldEVsZW1lbnQoKSAmJiBlLmVsYXBzZWRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzIHRvIG1hdGNoIHRoZSBnaXZlbiBkaXJlY3Rpb24gYW5kIHBoYXNlLlxyXG4gICAgICovXHJcbiAgICBjb25zdCB1cGRhdGVDbGFzc2VzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUgfCBudWxsLCBkaXJlY3Rpb246IFRyYW5zaXRpb25EaXJlY3Rpb24sIHBoYXNlPzogVHJhbnNpdGlvblBoYXNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xyXG5cclxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0TWVhc3VyZUNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldEluaXRDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRUcmFuc2l0aW9uQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0RmluYWxpemVDbGFzcygpfWAsXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEluaXRDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcImluZXJ0XCJ9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJyZW1vdmVkXCJ9YCxcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJoaWRkZW5cIn1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcInZpc2libGVcIn1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tcGVuZGluZ2AsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsQ2xhc3Nlc1RvQWRkID0gW1xyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXREaXJlY3Rpb25DbGFzcyhkaXJlY3Rpb24pfWAsXHJcbiAgICAgICAgICAgIHBoYXNlID8gYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RGlyZWN0aW9uQ2xhc3MoZGlyZWN0aW9uKX0tJHtHZXRQaGFzZUNsYXNzKHBoYXNlKX1gIDogXCJcIixcclxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5hbGxDbGFzc2VzVG9SZW1vdmUpO1xyXG4gICAgICAgIGFsbENsYXNzZXNUb1JlbW92ZS5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuZGVsZXRlKHYpKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XHJcbiAgICAgICAgYWxsQ2xhc3Nlc1RvQWRkLm1hcCh2ID0+IGNsYXNzTmFtZXMuY3VycmVudC5hZGQodikpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgYSBzaW5nbGUgXCJtZWFzdXJlXCIgdmFyaWFibGUgKG9yIHJlbW92ZXMgaXQpXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IHVwZGF0ZVNpemVQcm9wZXJ0eSA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFLCB2YXJOYW1lOiAoa2V5b2YgaC5KU1guQ1NTUHJvcGVydGllcykgJiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyA9IHVzZUNhbGxiYWNrKChlbGVtZW50OiBFIHwgbnVsbCwgbWVhc3VyZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBzaXplOiBET01SZWN0UmVhZE9ubHkgfCBudWxsID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS10b3BgLCBzaXplPy50b3ApO1xyXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1sZWZ0YCwgc2l6ZT8ubGVmdCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNpemVQcm9wZXJ0eShlbGVtZW50LCBgLS0ke0dldEJhc2VDbGFzcygpfS1tZWFzdXJlLXdpZHRoYCwgc2l6ZT8ud2lkdGgpO1xyXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1oZWlnaHRgLCBzaXplPy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyBXZSB1c2UgYm90aCB1c2VUaW1lb3V0IGFuZCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZm9yIHRpbWluZyBjZXJ0YWluIHRoaW5ncyAtLVxyXG4gICAgLy8gcmFmIGlzIHVzZWQgZm9yIGNoYW5naW5nIGZyb20gaW5pdCB0byB0cmFuc2l0aW9uICh3b3VsZCB1c2UgcXVldWVNaWNyb3Rhc2sgYnV0IGl0IGNhbid0IGJlIGNhbmNlbGxlZClcclxuICAgIC8vIHNldFRpbWVvdXQgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSB0cmFuc2l0aW9uIHRvIGZpbmFsaXplIChhcyBhIGJhY2t1cCBpbiBjYXNlIHRyYW5zaXRpb25lbmQgZG9lc24ndCBmaXJlKVxyXG4gICAgLy9cclxuICAgIC8vIEluIG9yZGVyIHRvIGF2b2lkIHN0YWxlIGNhbGxiYWNrcyBydW5uaW5nIChpLmUuIHdoZW4gd2UgcmFwaWRseSBzd2l0Y2ggYmV0d2VlbiB2aXNpYmxlIGFuZCBub3QpXHJcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhY2N1cmF0ZWx5IGNhbmNlbCBhbnl0aGluZyB0aGF0IGNhbiBjaGFuZ2Ugb3VyIHN0YXRlIG9uIGEgZGVsYXkuXHJcbiAgICAvL1xyXG4gICAgLy8gQWxzbyBvZiBub3RlLCB3ZSBzdG9yZSBcIihmKSA9PiB3aW5kb3cuY2xlYXJUaW1lb3V0KGYpXCIgaW5zdGVhZCBvZiBqdXN0IFwid2luZG93LmNsZWFyVGltZW91dFwiIGJlY2F1c2VcclxuICAgIC8vIG9mIHRoZSBpbXBsaWNpdCB3aW5kb3cgb2JqZWN0IC0tIHByb2JsZW1zIHdpdGggYSBtaXNzaW5nIGB0aGlzYCBvYmplY3QgYW5kIGFsbCB0aGF0IG5vbnNlbnNlLlxyXG4gICAgY29uc3QgdGltZW91dEhhbmRsZSA9IHVzZVJlZjxudW1iZXI+KC0xKTtcclxuICAgIGNvbnN0IHRpbWVvdXRDbGVhckZ1bmN0aW9uID0gdXNlUmVmPCh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHwgKHR5cGVvZiBjbGVhclRpbWVvdXQpIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbnkgdGltZSB0aGUgc3RhdGUgY2hhbmdlcywgdGhlcmUncyBzb21lIGxvZ2ljIHdlIG5lZWQgdG8gcnVuOlxyXG4gICAgICogXHJcbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGFuIGBpbml0YCBwaGFzZSwgdXBkYXRlIHRoZSBjbGFzc2VzLCB0aGVuIHdhaXQgYSBtb21lbnQgYW5kIHRoZW4gY2hhbmdlIHRvIHRoZSBgdHJhbnNpdGlvbmAgcGhhc2UuXHJcbiAgICAgKiAqIElmIHdlJ3JlIGNoYW5naW5nIHRvIGEgYHRyYW5zaXRpb25gIHBoYXNlLCB1cGRhdGUgdGhlIGNsYXNzZXMsIHRoZW4gd2FpdCB1bnRpbCB0aGUgdHJhbnNpdGlvbiBjb21wbGV0ZXMsIHRoZW4gY2hhbmdlIHRvIHRoZSBgZmluYWxpemVgIHBoYXNlLlxyXG4gICAgICogXHJcbiAgICAgKiBBbnkgY2hhbmdlIGluIHN0YXRlIG9yIGNsYXNzZXMvc3R5bGVzIGRvZXMgbm90IGltcGxpY2l0bHkgY2F1c2UgYSByZS1yZW5kZXIuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+PigobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xyXG4gICAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBbbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlXSA9IHBhcnNlU3RhdGUobmV4dFN0YXRlKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG5cclxuICAgICAgICAvLyBNYWtlIHN1cmUgbm8gc3RhbGUgY2hhbmdlIGNvZGUgZXZlciBydW5zXHJcbiAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+PSAwICYmIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGluZXJ0IHByb3BzL3Byb3BlcnR5XHJcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIGlmIChleGl0VmlzaWJpbGl0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmVydCA9IChleGl0VmlzaWJpbGl0eSA9PSBcImluZXJ0XCIgJiYgKG5leHREaXJlY3Rpb24gPT0gXCJleGl0XCIgJiYgbmV4dFBoYXNlID09IFwiZmluYWxpemVcIikgPyB0cnVlIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaWYgKGluZXJ0KVxyXG4gICAgICAgICAgICAgICAgKG90aGVyUHJvcHMuY3VycmVudCBhcyBhbnkpLmluZXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCIgYXMgbmV2ZXJdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmluZXJ0ID0gKGluZXJ0IHx8IGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQmVpbmdQYWludGVkID0gKG5leHREaXJlY3Rpb24gPT0gXCJlbnRlclwiIHx8IChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSAhPSBcImZpbmFsaXplXCIpKTtcclxuICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2U/Lihpc0JlaW5nUGFpbnRlZCk7XHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2U/Lihpc0JlaW5nUGFpbnRlZCk7XHJcblxyXG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoZWxlbWVudCwgbmV4dERpcmVjdGlvbiwgbmV4dFBoYXNlKTtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiAobmV4dFBoYXNlID09IFwiaW5pdFwiIHx8IG5leHRQaGFzZSA9PSBcInRyYW5zaXRpb25cIikpXHJcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAobmV4dFBoYXNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJtZWFzdXJlXCI6IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIG1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyhlbGVtZW50LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vc2V0U3RhdGUoYCR7bmV4dERpcmVjdGlvbn0taW5pdGApO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImluaXRcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAhIUludGVudGlvbmFsIGZhbGwtdGhyb3VnaCEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHsgc2V0U3RhdGUoYCR7bmV4dERpcmVjdGlvbn0tdHJhbnNpdGlvbmApOyB9KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSAoZjogbnVtYmVyKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShmKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcInRyYW5zaXRpb25cIjoge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBnZXRUaW1lb3V0RHVyYXRpb24oZWxlbWVudCkgKiAxLjUpO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNsZWFyVGltZW91dChmKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImZpbmFsaXplXCI6IHtcclxuICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgdG8gZG8gb3Igc2NoZWR1bGUgb3IgYW55dGhpbmcgLS0gd2UganVzdCB1cGRhdGUgb3VyIGNsYXNzZXMgYW5kIHdlJ3JlIGRvbmUuXHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0Q2xlYXJGdW5jdGlvbi5jdXJyZW50ID0gbnVsbDsgICAgLy8gRG9lcyB0aGlzIG1ha2UgaXQgbW9yZSBvciBsZXNzIGNsZWFyP1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEludmFsaWQgc3RhdGUgdXNlZCBpbiB0cmFuc2l0aW9uOiAke25leHRTdGF0ZX0uIFByZXZpb3VzIHN0YXRlIHdhcyAke3ByZXZTdGF0ZSA/PyBcIm51bGxcIn1gKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZ2V0U3RhdGUsIHNldFN0YXRlXSA9IHVzZVBhc3NpdmVTdGF0ZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+KG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcclxuXHJcbiAgICAvLyBXaGVuIHdlIG1vdW50LCBhbmQgZXZlcnkgdGltZSB0aGVyZWFmdGVyIHRoYXQgYHNob3dgIGNoYW5nZXMsXHJcbiAgICAvLyBjaGFuZ2Ugb3VyIGN1cnJlbnQgc3RhdGUgYWNjb3JkaW5nIHRvIHRoYXQgYHNob3dgIHZhbHVlLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IGludGVybmFsT25TaG93Q2hhbmdlZChzaG93LCBtZWFzdXJlKSwgW21lYXN1cmUsIHNob3ddKTtcclxuXHJcblxyXG4gICAgLy8gVGhpcyBoYXMgbm8gZGVwZW5kZW5jZXMgYW5kIGlzIHJlbGllZCBvbiBpbiB0d28gZGlmZmVyZW50IGFyZWFzXHJcbiAgICBmdW5jdGlvbiBpbnRlcm5hbE9uU2hvd0NoYW5nZWQoc2hvdzogYm9vbGVhbiB8IG51bGwsIG1lYXN1cmU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgLy8gSWYgYHNob3dgIGlzIG51bGwsIHRoZW4gd2UgZG9uJ3QgY2hhbmdlIGFueXRoaW5nLlxyXG4gICAgICAgIGlmIChzaG93ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gKElmIGBzaG93YCBpcyB0cnVlL2ZhbHNlLCB3ZSdsbCByZW1vdmUgdGhlIENTUyBjbGFzc2VzIGR1cmluZyBgb25DaGFuZ2VgKVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIGxldCBuZXh0UGhhc2U6IFRyYW5zaXRpb25QaGFzZSA9IG1lYXN1cmUgPyBcIm1lYXN1cmVcIiA6IFwiaW5pdFwiO1xyXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgW2N1cnJlbnREaXJlY3Rpb24sIGN1cnJlbnRQaGFzZV0gPSBwYXJzZVN0YXRlKGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGhhc2UgIT0gXCJmaW5hbGl6ZVwiKVxyXG4gICAgICAgICAgICAgICAgbmV4dFBoYXNlID0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxyXG4gICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNNb3VudGVkLmN1cnJlbnQgfHwgYW5pbWF0ZU9uTW91bnQpXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZW50ZXItJHtuZXh0UGhhc2V9YCk7XHJcblxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNNb3VudGVkLmN1cnJlbnQgfHwgYW5pbWF0ZU9uTW91bnQpXHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZXhpdC0ke25leHRQaGFzZX1gKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0U3RhdGUoXCJleGl0LWZpbmFsaXplXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFzTW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZHVyYXRpb24gIT0gbnVsbClcclxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZHVyYXRpb25gXSA9IGR1cmF0aW9uICsgXCJtc1wiO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIGRlbGV0ZSBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZHVyYXRpb25gXTtcclxuXHJcbiAgICBlYXNpbmdJbiA/Pz0gZWFzaW5nO1xyXG4gICAgZWFzaW5nT3V0ID8/PSBlYXNpbmc7XHJcblxyXG4gICAgaWYgKGVhc2luZ091dCAhPSBudWxsKVxyXG4gICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXSA9IGVhc2luZ091dDtcclxuICAgIGVsc2VcclxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdO1xyXG5cclxuXHJcbiAgICBpZiAoZWFzaW5nSW4gIT0gbnVsbClcclxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdID0gZWFzaW5nSW47XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF07XHJcblxyXG5cclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBudWxsO1xyXG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgZGVsYXlNb3VudFVudGlsU2hvd24gaXMsXHJcbiAgICAvLyBvbmNlIHdlJ3ZlIHJlbmRlcmVkIG91ciBjaGlsZHJlbiBvbmNlLCBcclxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGRvbid0IHVubW91bnQgdGhlbSBhZ2FpbiBhbmQgd2FzdGUgYWxsIHRoYXQgd29yay5cclxuICAgIC8vIChJZiB5b3UgcmVhbGx5IG5lZWQgdGhpcyB5b3UgY2FuIGp1c3QgdW5tb3VudCB0aGUgZW50aXJlIHRyYW5zaXRpb24gaXRzZWxmKVxyXG4gICAgY29uc3QgZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW4gPSAoc2hvdyB8fCAhZGVsYXlNb3VudFVudGlsU2hvd24pO1xyXG4gICAgY29uc3QgaGFzUmVuZGVyZWRDaGlsZHJlbiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCByZW5kZXJDaGlsZHJlbiA9IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuIHx8IGhhc1JlbmRlcmVkQ2hpbGRyZW4uY3VycmVudDtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuKVxyXG4gICAgICAgICAgICBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgfHw9IHRydWU7XHJcbiAgICB9LCBbaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50ID8gZmFsc2UgOiBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbl0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBjaGlsZHJlbklzVm5vZGUgPSAoY2hpbGRyZW4gJiYgKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlICYmIChjaGlsZHJlbiBhcyBWTm9kZSkucHJvcHMpO1xyXG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHVzZU1lcmdlZFByb3BzPEU+KHAsIHByb3BzU3RhYmxlLCBvdGhlclByb3BzLmN1cnJlbnQsIHtcclxuICAgICAgICBjbGFzc05hbWU6IFtcclxuICAgICAgICAgICAgLi4uY2xhc3NOYW1lcy5jdXJyZW50LFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtleGl0VmlzaWJpbGl0eX1gLFxyXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0taW5saW5lLWRpcmVjdGlvbi0ke2lubGluZURpcmVjdGlvbiA/PyBcImx0clwifWAsXHJcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWBcclxuICAgICAgICBdLmpvaW4oXCIgXCIpLFxyXG4gICAgICAgIHN0eWxlOiBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRcclxuICAgIH0sIGNoaWxkcmVuSXNWbm9kZSA/IHsgcmVmOiAoY2hpbGRyZW4gYXMgVk5vZGUpLnJlZiwgLi4uKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyB9IDoge30pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcmVzZXRDb250ZXh0ID0gdXNlUmVmPFN3YXBwYWJsZUNvbnRleHRUeXBlPih7IGdldEFuaW1hdGVPbk1vdW50OiByZXR1cm5GYWxzZSB9KS5jdXJyZW50O1xyXG5cclxuICAgIGxldCBtb2RpZmllZENoaWxkcmVuOiBWTm9kZTtcclxuXHJcbiAgICBpZiAoY2hpbGRyZW5Jc1Zub2RlKSB7XHJcbiAgICAgICAgbW9kaWZpZWRDaGlsZHJlbiA9IDxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXNldENvbnRleHR9PntjbG9uZUVsZW1lbnQoY2hpbGRyZW4gYXMgVk5vZGUsIGZpbmFsUHJvcHMpfTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1vZGlmaWVkQ2hpbGRyZW4gPSA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cmVzZXRDb250ZXh0fT48c3BhbiB7Li4uZmluYWxQcm9wcyBhcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+fT57Y2hpbGRyZW59PC9zcGFuPjwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVuZGVyQ2hpbGRyZW4gPyBtb2RpZmllZENoaWxkcmVuIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb3JjZVJlZmxvdzxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGU6IEUpIHtcclxuXHJcbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cclxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXHJcbiAgICBjb25zdCBwID0gKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXk7XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teSA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teSA9IGUuc3R5bGUub3BhY2l0eTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLl9kdW1teSA9IHA7XHJcbiAgICByZXR1cm4gZTtcclxufVxyXG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBtaW5pbXVtIG9yIG1heGltdW0gb3BhY2l0eSB2YWx1ZXMgdG8gdXNlIGZvciB0aGUgZmFkZSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIGZhZGVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gZmFkZWQgb3V0LlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBmYWRlTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3BhY2l0eSB0byB1c2Ugd2hlbiBmYWRlZCBpbi5cclxuICAgICAgICAgKiBAZGVmYXVsdCAxXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmFkZU1heDogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGYWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNGYWRlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNaW4sIGZhZGVNYXggfSB9OiBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tZmFkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmFkZS1tYXhgXTogKGZhZGVNYXggPz8gMSksXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZhZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXHJcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cclxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcclxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPih7IHJlZiwgLi4ucmVzdCB9LCB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBjbGlwUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ2xpcDxFIGV4dGVuZHMgRWxlbWVudD4oeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9IH06IFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcGApLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcclxuICAgICAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlwID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ2xpcCh7IGNsaXBQYXJhbWV0ZXJzOiB7IGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSlcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNDbGlwLCBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVycyB9IGZyb20gXCIuL2NsaXAuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsaXBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZGVsYXlNb3VudFVudGlsU2hvd24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ2xpcEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NsaXAoeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jayB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHQuanNcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29sbGFwc2UgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG5cclxuICAgIGNvbGxhcHNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVGhlIHNtYWxsZXN0IHNpemUgdGhlIGNvbXBvbmVudCBjb2xsYXBzZXMgdG8uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBtaW5CbG9ja1NpemU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqIFxyXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cclxuICogXHJcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ29sbGFwc2U8RSBleHRlbmRzIEVsZW1lbnQ+KHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH06IFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tY29sbGFwc2VgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlISBcclxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2U8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHNob3csIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgbWluQmxvY2tTaXplLCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDb2xsYXBzZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ29sbGFwc2UoeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0NvbGxhcHNlLCBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9jb2xsYXBzZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGUuanNcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBzaG93LCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ29sbGFwc2VGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDb2xsYXBzZSh7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmLCB1c2VMYXN0Tm9uTnVsbFZhbHVlIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIGZsaXAgZWZmZWN0LiBcclxuICogVmFsdWVzIGFyZSByZWxhdGl2ZSwgd2l0aCAxIG9yIC0xIGJlaW5nIHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQgaW4gdGhhdCBkaXJlY3Rpb24uXHJcbiAqIGAwLjVgLCBmb3IgZXhhbXBsZSwgd291bGQgZmxpcCB0byB0aGUgcmlnaHQgYnkgNTAlIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc0ZsaXBQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIGZsaXBQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBhbmdsZSAoaW4gZGVncmVlcykgdG8gcm90YXRlIHRvd2FyZHMgb24gdGhlIGlubGluZSBheGlzIChYIGF4aXMgZm9yIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmbGlwQW5nbGVJbmxpbmU6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIHJvdGF0ZSB0b3dhcmRzIG9uIHRoZSBibG9jayBheGlzIChYIGF4aXMgZm9yIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBmbGlwQW5nbGVCbG9jazogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2luY2UgdGhpcyBpcyBhIDNEIGVmZmVjdCwgYSBwZXJzcGVjdGl2ZSB2YWx1ZSBpcyBuZWVkZWQuXHJcbiAgICAgICAgICogQGRlZmF1bHQgODAwcHhcclxuICAgICAgICAgKi9cclxuICAgICAgICBmbGlwUGVyc3BlY3RpdmU6IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNGbGlwPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH06IFVzZUJhc2VQcm9wc0ZsaXBQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1mbGlwYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmxpcC1hbmdsZS1pbmxpbmVgXTogYCR7KHVzZUxhc3ROb25OdWxsVmFsdWUoZmxpcEFuZ2xlSW5saW5lKSA/PyAwKX1kZWdgLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVCbG9jaykgPz8gMCl9ZGVnYCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXBlcnNwZWN0aXZlYF06IGAkeyhmbGlwUGVyc3BlY3RpdmUgPz8gODAwKX1weGBcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4sIFwiZmxpcFBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXHJcbiAqIFxyXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgZmxpcElubGluZWAgYW5kIGBmbGlwQmxvY2tgLFxyXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXHJcbiAqIFxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiBleGNsdXNpdml0eUtleSBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcclxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGbGlwID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGbGlwPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIGZsaXBQZXJzcGVjdGl2ZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogRmxpcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmxpcCh7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmLCB1c2VMYXN0Tm9uTnVsbFZhbHVlIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIHNsaWRlIGVmZmVjdC4gXHJcbiAqIFZhbHVlcyBhcmUgcmVsYXRpdmUsIHdpdGggMSBvciAtMSBiZWluZyB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGluIHRoYXQgZGlyZWN0aW9uLlxyXG4gKiBgMC41YCwgZm9yIGV4YW1wbGUsIHdvdWxkIHNsaWRlIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIHNsaWRlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gc2xpZGUgdG8vZnJvbSAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzbGlkZVRhcmdldElubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBzbGlkZSB0by9mcm9tIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2s6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgU2xpZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc1NsaWRlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9IH06IFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPikge1xyXG4gICAgc2xpZGVUYXJnZXRJbmxpbmUgPSB1c2VMYXN0Tm9uTnVsbFZhbHVlKHNsaWRlVGFyZ2V0SW5saW5lKTtcclxuICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSB1c2VMYXN0Tm9uTnVsbFZhbHVlKHNsaWRlVGFyZ2V0QmxvY2spO1xyXG5cclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGUtdGFyZ2V0LWlubGluZWBdOiBgJHsoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgc2xpZGVJbmxpbmVgIGFuZCBgc2xpZGVCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICogXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxyXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBvblZpc2liaWxpdHlDaGFuZ2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIGRlbGF5TW91bnRVbnRpbFNob3duLCAuLi5yZXN0IH06IFNsaWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVGYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgb3JpZ2luLCBtaW5pbXVtIHNpemUsIGFuZCBkaXJlY3Rpb24gb2YgdGhlIHpvb20gZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICB6b29tUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKFggY29tcG9uZW50KVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWSBjb21wb25lbnQpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAod2l0aCBYICYgWSBjb21wb25lbnRzIGlkZW50aWNhbCkuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc1pvb208RSBleHRlbmRzIEVsZW1lbnQ+KHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSB9OiBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LXpvb21gLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1taW4taW5saW5lYF06IGAkeyh6b29tTWluSW5saW5lID8/IHpvb21NaW4gPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllcyxcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFpvb21Qcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBab29tUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb208RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZVpvb21Qcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbS5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVpvb21GYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZmFkZU1heCwgZmFkZU1pbiwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZVpvb21GYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbS5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogWm9vbUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNab29tKHsgem9vbVBhcmFtZXRlcnM6IHsgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbn0pKTtcclxuIixudWxsXSwibmFtZXMiOlsic2xpY2UiLCJvcHRpb25zIiwidm5vZGVJZCIsInJlcmVuZGVyUXVldWUiLCJwcmV2RGVib3VuY2UiLCJkZWZlciIsImkiLCJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsInJlbW92ZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjaGlsZHJlbiIsImtleSIsInJlZiIsIm5vcm1hbGl6ZWRQcm9wcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNhbGwiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJjcmVhdGVWTm9kZSIsIm9yaWdpbmFsIiwidm5vZGUiLCJfX2siLCJfXyIsIl9fYiIsIl9fZSIsIl9fZCIsIl9fYyIsIl9faCIsImNvbnN0cnVjdG9yIiwiX192IiwiRnJhZ21lbnQiLCJDb21wb25lbnQiLCJjb250ZXh0IiwidGhpcyIsImdldERvbVNpYmxpbmciLCJjaGlsZEluZGV4IiwiaW5kZXhPZiIsInNpYmxpbmciLCJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsImNoaWxkIiwiYmFzZSIsImVucXVldWVSZW5kZXIiLCJjIiwicHVzaCIsInByb2Nlc3MiLCJfX3IiLCJkZWJvdW5jZVJlbmRlcmluZyIsIm0kMSIsInJlbmRlclF1ZXVlTGVuZ3RoIiwiY29tcG9uZW50IiwiY29tbWl0UXVldWUiLCJvbGRWTm9kZSIsIm9sZERvbSIsInBhcmVudERvbSIsInNvcnQiLCJhIiwiYiIsInNoaWZ0IiwiZGlmZiIsIm93bmVyU1ZHRWxlbWVudCIsImNvbW1pdFJvb3QiLCJkaWZmQ2hpbGRyZW4iLCJyZW5kZXJSZXN1bHQiLCJuZXdQYXJlbnRWTm9kZSIsIm9sZFBhcmVudFZOb2RlIiwiZ2xvYmFsQ29udGV4dCIsImlzU3ZnIiwiZXhjZXNzRG9tQ2hpbGRyZW4iLCJpc0h5ZHJhdGluZyIsImoiLCJjaGlsZFZOb2RlIiwibmV3RG9tIiwiZmlyc3RDaGlsZERvbSIsInJlZnMiLCJvbGRDaGlsZHJlbiIsIm9sZENoaWxkcmVuTGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwicmVvcmRlckNoaWxkcmVuIiwicGxhY2VDaGlsZCIsImdldExhc3REb20iLCJuZXh0U2libGluZyIsInVubW91bnQiLCJhcHBseVJlZiIsInRtcCIsInRvQ2hpbGRBcnJheSIsIm91dCIsInNvbWUiLCJuZXh0RG9tIiwic2liRG9tIiwib3V0ZXIiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImxhc3REb20iLCJkaWZmUHJvcHMiLCJkb20iLCJuZXdQcm9wcyIsIm9sZFByb3BzIiwiaHlkcmF0ZSIsInNldFByb3BlcnR5Iiwic2V0U3R5bGUiLCJzdHlsZSIsInZhbHVlIiwidGVzdCIsIm5hbWUiLCJvbGRWYWx1ZSIsInVzZUNhcHR1cmUiLCJvIiwiY3NzVGV4dCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRQcm94eUNhcHR1cmUiLCJldmVudFByb3h5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIm5ld1ZOb2RlIiwiaXNOZXciLCJvbGRTdGF0ZSIsInNuYXBzaG90IiwiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwicHJvdmlkZXIiLCJjb21wb25lbnRDb250ZXh0IiwicmVuZGVySG9vayIsImNvdW50IiwibmV3VHlwZSIsImNvbnRleHRUeXBlIiwiX19FIiwicHJvdG90eXBlIiwicmVuZGVyIiwiZG9SZW5kZXIiLCJzdWIiLCJzdGF0ZSIsIl9fbiIsIl9zYiIsIl9fcyIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImZvckVhY2giLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwiX19QIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCJkaWZmRWxlbWVudE5vZGVzIiwiZGlmZmVkIiwicm9vdCIsImNiIiwib2xkSHRtbCIsIm5ld0h0bWwiLCJub2RlVHlwZSIsImxvY2FsTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjcmVhdGVFbGVtZW50TlMiLCJpcyIsImRhdGEiLCJjaGlsZE5vZGVzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJhdHRyaWJ1dGVzIiwiX19odG1sIiwiaW5uZXJIVE1MIiwiY2hlY2tlZCIsImN1cnJlbnQiLCJwYXJlbnRWTm9kZSIsInNraXBSZW1vdmUiLCJyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZXBsYWNlTm9kZSIsImZpcnN0Q2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJjcmVhdGVDb250ZXh0IiwiZGVmYXVsdFZhbHVlIiwiY29udGV4dElkIiwiQ29uc3VtZXIiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInN1YnMiLCJjdHgiLCJfcHJvcHMiLCJvbGQiLCJzcGxpY2UiLCJlcnJvciIsImVycm9ySW5mbyIsImN0b3IiLCJoYW5kbGVkIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRDYXRjaCIsInVwZGF0ZSIsImNhbGxiYWNrIiwicyIsImZvcmNlVXBkYXRlIiwiUHJvbWlzZSIsInRoZW4iLCJiaW5kIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpc1N0YXRpY0NoaWxkcmVuIiwiX19zb3VyY2UiLCJfX3NlbGYiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldmlvdXNDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIkVNUFRZIiwib2xkQmVmb3JlRGlmZiIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsImhvb2tzIiwiX19IIiwiX19WIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwiYWN0aW9uIiwiY3VycmVudFZhbHVlIiwiX19OIiwibmV4dFZhbHVlIiwiX2hhc1NjdUZyb21Ib29rcyIsInByZXZTY3UiLCJwIiwic3RhdGVIb29rcyIsImZpbHRlciIsIngiLCJldmVyeSIsInNob3VsZFVwZGF0ZSIsImhvb2tJdGVtIiwidXNlRWZmZWN0IiwiYXJncyIsImFyZ3NDaGFuZ2VkIiwiX3BlbmRpbmdBcmdzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFmdGVyTmV4dEZyYW1lIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwidCIsIm4iLCJjbHN4IiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIk9iamVjdCIsImZyZWVHbG9iYWwkMSIsImZyZWVTZWxmIiwic2VsZiIsIkZ1bmN0aW9uIiwicm9vdCQxIiwiU3ltYm9sIiwiU3ltYm9sJDIiLCJvYmplY3RQcm90byIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwicmVzdWx0Iiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0IiwiYXN5bmNUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwicHJveHlUYWciLCJpc0Z1bmN0aW9uIiwiY29yZUpzRGF0YSIsImNvcmVKc0RhdGEkMSIsIm1hc2tTcmNLZXkiLCJ1aWQiLCJleGVjIiwia2V5cyIsIklFX1BST1RPIiwiaXNNYXNrZWQiLCJmdW5jIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwidG9Tb3VyY2UiLCJyZVJlZ0V4cENoYXIiLCJyZUlzSG9zdEN0b3IiLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwiYmFzZUlzTmF0aXZlIiwicGF0dGVybiIsImdldFZhbHVlIiwib2JqZWN0IiwiZ2V0TmF0aXZlIiwiZXEiLCJvdGhlciIsIm5hdGl2ZUNyZWF0ZSIsIm5hdGl2ZUNyZWF0ZSQxIiwiaGFzaENsZWFyIiwiX19kYXRhX18iLCJzaXplIiwiaGFzaERlbGV0ZSIsImhhcyIsIkhBU0hfVU5ERUZJTkVEIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsImVudHJpZXMiLCJjbGVhciIsImVudHJ5Iiwic2V0IiwiZ2V0IiwibGlzdENhY2hlQ2xlYXIiLCJhc3NvY0luZGV4T2YiLCJhcnJheSIsImFycmF5UHJvdG8iLCJsaXN0Q2FjaGVEZWxldGUiLCJsYXN0SW5kZXgiLCJwb3AiLCJsaXN0Q2FjaGVHZXQiLCJsaXN0Q2FjaGVIYXMiLCJsaXN0Q2FjaGVTZXQiLCJMaXN0Q2FjaGUiLCJNYXAiLCJNYXAkMiIsIm1hcENhY2hlQ2xlYXIiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwibWFwIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIkZVTkNfRVJST1JfVEVYVCIsIm1lbW9pemUiLCJyZXNvbHZlciIsIlR5cGVFcnJvciIsIm1lbW9pemVkIiwiYXBwbHkiLCJjYWNoZSIsIkNhY2hlIiwiZ2V0QnVpbGRNb2RlVW5tZW1vaXplZCIsIl9wcm9jZXNzIiwiX3Byb2Nlc3MkZW52IiwiZW52IiwiTk9ERV9FTlYiLCJfZSIsImdldEJ1aWxkTW9kZSIsInVzZUVuc3VyZVN0YWJpbGl0eSIsInBhcmVudEhvb2tOYW1lIiwiX2xlbiIsInZhbHVlcyIsIl9rZXkiLCJoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSIsInNob3duRXJyb3IiLCJ1c2VIZWxwZXIiLCJjb25zb2xlIiwiY29uY2F0IiwiSlNPTiIsInN0cmluZ2lmeSIsIl9sJDEkZGVib3VuY2VSZW5kZXJpbiIsInVzZVBhc3NpdmVTdGF0ZSIsIm9uQ2hhbmdlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiY3VzdG9tRGVib3VuY2VSZW5kZXJpbmciLCJ2YWx1ZVJlZiIsIlVuc2V0IiwicmVhc29uUmVmIiwid2FybmluZ1JlZiIsImRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0IiwiY2xlYW51cENhbGxiYWNrUmVmIiwib25TaG91bGRDbGVhblVwIiwiY2xlYW51cENhbGxiYWNrIiwidHJ5RW5zdXJlVmFsdWUiLCJfb25DaGFuZ2UiLCJleCIsIndhcm4iLCJzZXRWYWx1ZSIsInJlYXNvbiIsIm5leHRSZWFzb24iLCJuZXh0RGVwIiwicHJldkRlcCIsIl9vbkNoYW5nZTIiLCJyZXR1cm5GYWxzZSIsInJldHVybk51bGwiLCJydW5JbW1lZGlhdGVseSIsIlRhYmxlIiwiYmFzZTY0IiwicmFuZG9tNkJpdHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb202NEJpdHMiLCJnZW5lcmF0ZVJhbmRvbUlkIiwicHJlZml4Iiwiam9pbiIsInByZXZpb3VzSW5wdXRzIiwidG9SdW4iLCJjb21taXROYW1lIiwib3JpZ2luYWxDb21taXQiLCJuZXdDb21taXQiLCJpZCIsImVmZmVjdEluZm8iLCJvbGRJbnB1dHMiLCJpbnB1dHMiLCJfZWZmZWN0SW5mbyRjbGVhbnVwIiwiZWZmZWN0IiwiX2xlbjIiLCJfa2V5MiIsInVzZUJlZm9yZUxheW91dEVmZmVjdCIsImRlbGV0ZSIsInVzZVN0YWJsZUdldHRlciIsIkVycm9yIiwidXNlU3RhYmxlT2JqZWN0IiwiX3JlZiIsIl9rIiwidiIsIldlYWtNYXAiLCJpc1N0YWJsZUdldHRlciIsIl9tYXAkZ2V0Iiwic2V0SXNTdGFibGVHZXR0ZXIiLCJ1c2VTdGFibGVDYWxsYmFjayIsImZuIiwibm9EZXBzIiwiY3VycmVudENhbGxiYWNrR2V0dGVyIiwidXNlQ2FsbGJhY2tOYXRpdmUiLCJhc3NlcnQiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImxocyIsInJocyIsInVzZU1lcmdlZENsYXNzZXMiLCJsaHNDbGFzcyIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwidXNlTWVyZ2VkUmVmcyIsImNvbWJpbmVkIiwic3R5bGVTdHJpbmdUb09iamVjdCIsImZyb21FbnRyaWVzIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwibG9nIiwidXNlTWVyZ2VkUHJvcHMiLCJfbGVuMyIsImFsbFByb3BzIiwiX2tleTMiLCJyZXQiLCJuZXh0UHJvcHMiLCJ1c2VNZXJnZWRQcm9wczIiLCJrbm93bnMiLCJtZXJnZVVua25vd24iLCJsaHNWYWx1ZSIsInJoc1ZhbHVlIiwibWVyZ2VkIiwibWVyZ2VGdW5jdGlvbnMiLCJsaHNBbGwiLCJyaHNBbGwiLCJjbGFzc05hbWUiLCJsaHNLZXlVIiwibGhzS2V5IiwicmhzS2V5VSIsInJoc0tleSIsImx2IiwicnYiLCJhbGwiLCJ1c2VSZWZFbGVtZW50Iiwib25FbGVtZW50Q2hhbmdlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsInJlZkVsZW1lbnRQYXJhbWV0ZXJzIiwiaGFuZGxlciIsInByZXZWYWx1ZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwicHJvcHNTdGFibGUiLCJyZWZFbGVtZW50UmV0dXJuIiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJfYSIsIl9iIiwiX2MiLCJkZXN0cnVjdG9yIiwibnVsbGFibGUiLCJ0b3AiLCJlbGVtcyIsImVsZW1lbnQiLCJyZW1vdmUiLCJuZXdUb3AiLCJ0b0tlZXBJbmVydCIsIm9sZFBhcmVudHMiLCJuZXdQYXJlbnRzIiwiYm9keSIsInRvU2tpcCIsIm9sZEluZXJ0IiwibmV3SW5lcnQiLCJzaWJsaW5nc1RvUmVzdG9yZSIsImluZXJ0IiwiYWRkIiwiZWxlbWVudHMiLCJtbyIsImRpc2Nvbm5lY3QiLCJzaWJsaW5ncyIsInBhcmVudCIsImluZXJ0ZWRTaWJsaW5ncyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwYXJlbnRUb09ic2VydmUiLCJtYXliZVNoYWR5Um9vdCIsIl9fc2hhZHkiLCJob3N0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsInRhcmdldCIsImlkeCIsImluZXJ0ZWRDaGlsZCIsInJlbW92ZWROb2RlcyIsImluZm8iLCJhZGRlZE5vZGVzIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSIsImFzc2lnbmVkU2xvdCIsInNoYWRvd1Jvb3QiLCJub2RlcyIsInNsb3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiJGJsb2NraW5nRWxlbWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ3aW5kb3ciLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIl9vbk11dGF0aW9uIiwic3VidHJlZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJjb250YWlucyIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJibHVyIiwiZm9jdXMiLCJfYWRvcHRJbmVydFJvb3QiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInJlY29yZCIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsIl9vbkRvY3VtZW50TG9hZGVkIiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJfaSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIkhUTUxFbGVtZW50IiwidXNlTWFuYWdlZENoaWxkcmVuIiwicGFyZW50UGFyYW1ldGVycyIsIm1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnMiLCJvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QiLCJvbkNoaWxkcmVuTW91bnRDaGFuZ2UiLCJvbkNoaWxkQ291bnRDaGFuZ2UiLCJyZXN0IiwiZ2V0SGlnaGVzdEluZGV4IiwibWFuYWdlZENoaWxkcmVuQXJyYXkiLCJoaWdoZXN0SW5kZXgiLCJhcnIiLCJyZWMiLCJsb3dlc3RJbmRleCIsImZvckVhY2hDaGlsZCIsImZpZWxkIiwiZ2V0TWFuYWdlZENoaWxkSW5mbyIsImhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZCIsInJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMiLCJyZW1vdGVVTEVDaGlsZENoYW5nZWQiLCJyZW1vdGVVTEVDaGlsZE1vdW50ZWQiLCJtb3VudGVkIiwibW91bnRzIiwidW5tb3VudHMiLCJnZXRDaGlsZHJlbiIsIm1heCIsInNoYXZlIiwibWFuYWdlZENoaWxkcmVuIiwiXyIsImdldEF0IiwiYXJyYXlTbGljZSIsIm1hbmFnZWRDaGlsZENvbnRleHQiLCJtYW5hZ2VkQ2hpbGRyZW5SZXR1cm4iLCJ1c2VNYW5hZ2VkQ2hpbGQiLCJtYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzIiwiX2luZm8kY29udGV4dCIsImZsYXQiLCJtYW5hZ2VkQ2hpbGRSZXR1cm4iLCJ1c2VDaGlsZHJlbkZsYWciLCJfcmVmMiIsImluaXRpYWxJbmRleCIsImNsb3Nlc3RGaXQiLCJvbkluZGV4Q2hhbmdlIiwic2V0QXQiLCJpc1ZhbGlkIiwiZ2V0Q3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZ2V0UmVxdWVzdGVkSW5kZXgiLCJzZXRSZXF1ZXN0ZWRJbmRleCIsImdldENsb3Nlc3RGaXQiLCJyZXF1ZXN0ZWRJbmRleCIsImNsb3Nlc3REaXN0YW5jZSIsIkluZmluaXR5IiwiY2xvc2VzdEluZGV4IiwibmV3RGlzdGFuY2UiLCJhYnMiLCJyZWV2YWx1YXRlQ2xvc2VzdEZpdCIsImN1cnJlbnRDaGlsZCIsImNsb3Nlc3RGaXRJbmRleCIsImNsb3Nlc3RGaXRDaGlsZCIsImNoYW5nZUluZGV4IiwibmV3TWF0Y2hpbmdDaGlsZCIsIm9sZE1hdGNoaW5nQ2hpbGQiLCJjaGlsZElzVmFsaWQiLCJzZXRTdGF0ZVAiLCJ1c2VTdGF0ZVAiLCJnZXRTdGF0ZSIsImlzTmFOIiwic2hhbGxvd0RpZmZlcnMiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsImNvbXBhcmVyIiwidXBkYXRlUmVmIiwiTWVtb2VkIiwiZGlzcGxheU5hbWUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX19mIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJvbGREaWZmSG9vayIsIlJFQUNUX0ZPUldBUkRfU1lNQk9MIiwiZm9yIiwiZm9yd2FyZFJlZiIsIkZvcndhcmRlZCIsImNsb25lIiwiJCR0eXBlb2YiLCJtYXBGbiIsIm9sZENhdGNoRXJyb3IiLCJvbGRVbm1vdW50IiwiZGV0YWNoZWRDbG9uZSIsImRldGFjaGVkUGFyZW50IiwicmVtb3ZlT3JpZ2luYWwiLCJvcmlnaW5hbFBhcmVudCIsIlN1c3BlbnNlIiwiX191IiwiX3N1c3BlbmRlcnMiLCJzdXNwZW5kZWQiLCJfX2EiLCJTdXNwZW5zZUxpc3QiLCJfbmV4dCIsIl9tYXAiLCJfX1IiLCJwcm9taXNlIiwic3VzcGVuZGluZ1ZOb2RlIiwic3VzcGVuZGluZ0NvbXBvbmVudCIsInJlc29sdmVkIiwib25SZXNvbHZlZCIsIm9uU3VzcGVuc2lvbkNvbXBsZXRlIiwic3VzcGVuZGVkVk5vZGUiLCJfX08iLCJ3YXNIeWRyYXRpbmciLCJkZXRhY2hlZENvbXBvbmVudCIsImZhbGxiYWNrIiwiVyIsImxpc3QiLCJyZXZlYWxPcmRlciIsImRlbGVnYXRlZCIsInVuc3VzcGVuZCIsIndyYXBwZWRVbnN1c3BlbmQiLCJyZXZlcnNlIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiQ0FNRUxfUFJPUFMiLCJJU19ET00iLCJvbkNoYW5nZUlucHV0VHlwZSIsIloiLCJvbGRFdmVudEhvb2siLCJlbXB0eSIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY2FuY2VsQnViYmxlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInBlcnNpc3QiLCJuYXRpdmVFdmVudCIsImNsYXNzTmFtZURlc2NyaXB0b3IiLCJjbGFzcyIsIm9sZFZOb2RlSG9vayIsIm5vbkN1c3RvbUVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkIiwib2xkRGlmZmVkIiwiZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbiIsImV4Y2x1c2l2aXR5S2V5IiwiU3dhcHBhYmxlQ29udGV4dCIsImdldEFuaW1hdGVPbk1vdW50IiwiR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQiLCJDc3NDbGFzc0NvbnRleHQiLCJHZXRCYXNlQ2xhc3MiLCJHZXRFbnRlckNsYXNzIiwiR2V0RXhpdENsYXNzIiwiR2V0TWVhc3VyZUNsYXNzIiwiR2V0SW5pdENsYXNzIiwiR2V0VHJhbnNpdGlvbkNsYXNzIiwiR2V0RmluYWxpemVDbGFzcyIsInVzZUNzc0NsYXNzZXMiLCJHZXREaXJlY3Rpb25DbGFzcyIsImRpcmVjdGlvbiIsIkdldFBoYXNlQ2xhc3MiLCJwaGFzZSIsImdsb2JhbENvdW50IiwiRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyIiwiX3JlZjMiLCJnZXROZXh0SW5kZXhJbkxpbmUiLCJzZXROZXh0SW5kZXhJbkxpbmUiLCJtIiwic2V0RXhjbHVzaXZlbHlPcGVuIiwiZ2V0RXhjbHVzaXZlbHlPcGVuIiwib25WaXNpYmlsaXR5Q2hhbmdlIiwidmlzaWJsZSIsIm5leHRJbkxpbmUiLCJjdXJyZW50SW5MaW5lIiwiX2dldENoaWxkcmVuJGdldEF0IiwiX2dldENoaWxkcmVuJGdldEF0JGZvIiwiZm9yY2VDbG9zZSIsImNvbnRleHQyIiwiZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQiLCJFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCIsIl9qc3giLCJ1c2VFeGNsdXNpdmVUcmFuc2l0aW9uIiwiX3JlZjQiLCJ0cmFuc2l0aW9uUGFyYW1ldGVycyIsInNob3ciLCJleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycyIsImV4Y2x1c2l2ZWx5T3BlbiIsInBhcmVudE9uVmlzQ2hhbmdlIiwiZXhjbHVzaXZlVHJhbnNpdGlvblJldHVybiIsImlzRXhjbHVzaXZlIiwiZm9yd2FyZEVsZW1lbnRSZWYiLCJGb3J3YXJkZWRDb21wb25lbnQiLCJ1c2VMYXN0Tm9uTnVsbFZhbHVlIiwibGFzdE5vbk51bGxWYWx1ZSIsInVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzIiwiX3JlZjUiLCJvdGhlclByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiX3JlZjYiLCJfaW5saW5lIiwiY2hpbGRyZW5BbmltYXRlT25Nb3VudCIsImlubGluZUVsZW1lbnRzIiwidHJhbnNpdGlvblByb3BzIiwibWVyZ2VkV2l0aENoaWxkcmVuIiwiYW5pbWF0ZU9uTW91bnQiLCJnZXRUaW1lb3V0RHVyYXRpb24iLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0ciIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VTdGF0ZSIsIm5leHRTdGF0ZSIsInVzZVRyYW5zaXRpb24iLCJfcmVmNyIsIl9hbmltYXRlT25Nb3VudCIsIl9tZWFzdXJlIiwiX2Vhc2luZ0luIiwiX2Vhc2luZ091dCIsInByb3BzSW5jb21pbmciLCJtZWFzdXJlIiwiZXhpdFZpc2liaWxpdHkiLCJkdXJhdGlvbiIsImRlbGF5TW91bnRVbnRpbFNob3duIiwiZWFzaW5nIiwiZWFzaW5nSW4iLCJlYXNpbmdPdXQiLCJnZXRFeGl0VmlzaWJpbGl0eSIsImdldE1lYXN1cmUiLCJleGNsdXNpdmVUcmFuc2l0aW9uVmlzaWJpbGl0eUNoYW5nZSIsImludGVybmFsT25TaG93Q2hhbmdlZCIsImNzc1Byb3BlcnRpZXMiLCJjbGFzc05hbWVzIiwiaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkIiwidGltZW91dEhhbmRsZSIsIl90aW1lb3V0Q2xlYXJGdW5jdGlvbiIsInRpbWVvdXRDbGVhckZ1bmN0aW9uIiwib25UcmFuc2l0aW9uRW5kIiwiZWxhcHNlZFRpbWUiLCJoYXNNb3VudGVkIiwidXBkYXRlQ2xhc3NlcyIsImFsbENsYXNzZXNUb1JlbW92ZSIsImFsbENsYXNzZXNUb0FkZCIsImNsYXNzTGlzdCIsInVwZGF0ZVNpemVQcm9wZXJ0eSIsInZhck5hbWUiLCJyZW1vdmVQcm9wZXJ0eSIsIm1lYXN1cmVFbGVtZW50QW5kVXBkYXRlUHJvcGVydGllcyIsIl9zaXplIiwiX3NpemUyIiwiX3NpemUzIiwiX3NpemU0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25TdGF0ZUNoYW5nZSIsInByZXZTdGF0ZSIsIm5leHREaXJlY3Rpb24iLCJuZXh0UGhhc2UiLCJpc0JlaW5nUGFpbnRlZCIsImZvcmNlUmVmbG93IiwiY3VycmVudFN0YXRlIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRQaGFzZSIsImRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuIiwiaGFzUmVuZGVyZWRDaGlsZHJlbiIsInJlbmRlckNoaWxkcmVuIiwiY2hpbGRyZW5Jc1Zub2RlIiwiZmluYWxQcm9wcyIsInJlc2V0Q29udGV4dCIsIm1vZGlmaWVkQ2hpbGRyZW4iLCJnbG9iYWxUaGlzIiwiX2R1bW15Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInVzZUJhc2VQcm9wc0ZhZGUiLCJfcmVmOCIsImZhZGVQYXJhbWV0ZXJzIiwiZmFkZU1pbiIsImZhZGVNYXgiLCJGYWRlIiwiX3JlZjkiLCJ1c2VCYXNlUHJvcHNDbGlwIiwiX3JlZjEwIiwiX3JlZjExIiwiX3JlZjEyIiwiX3JlZjEzIiwiX3JlZjE0IiwiY2xpcFBhcmFtZXRlcnMiLCJjbGlwTWluIiwiY2xpcE1pbkJsb2NrIiwiY2xpcE1pbklubGluZSIsImNsaXBPcmlnaW4iLCJjbGlwT3JpZ2luQmxvY2siLCJjbGlwT3JpZ2luSW5saW5lIiwiQ2xpcCIsIl9yZWYxNSIsIkNsaXBGYWRlIiwiX3JlZjE2IiwidXNlQmFzZVByb3BzQ29sbGFwc2UiLCJfcmVmMTciLCJjb2xsYXBzZVBhcmFtZXRlcnMiLCJtaW5CbG9ja1NpemUiLCJDb2xsYXBzZSIsIl9yZWYxOCIsIkNvbGxhcHNlRmFkZSIsIl9yZWYxOSIsInVzZUJhc2VQcm9wc0ZsaXAiLCJfcmVmMjAiLCJfdXNlTGFzdE5vbk51bGxWYWx1ZSIsIl91c2VMYXN0Tm9uTnVsbFZhbHVlMiIsImZsaXBQYXJhbWV0ZXJzIiwiZmxpcEFuZ2xlQmxvY2siLCJmbGlwQW5nbGVJbmxpbmUiLCJmbGlwUGVyc3BlY3RpdmUiLCJGbGlwIiwiX3JlZjIxIiwidXNlQmFzZVByb3BzU2xpZGUiLCJfcmVmMjIiLCJfc2xpZGVUYXJnZXRJbmxpbmUiLCJfc2xpZGVUYXJnZXRCbG9jayIsInNsaWRlUGFyYW1ldGVycyIsInNsaWRlVGFyZ2V0SW5saW5lIiwic2xpZGVUYXJnZXRCbG9jayIsIlNsaWRlIiwiX3JlZjIzIiwiU2xpZGVGYWRlIiwiX3JlZjI0IiwidXNlQmFzZVByb3BzWm9vbSIsIl9yZWYyNSIsIl9yZWYyNiIsIl9yZWYyNyIsIl9yZWYyOCIsIl9yZWYyOSIsInpvb21QYXJhbWV0ZXJzIiwiem9vbU9yaWdpbiIsInpvb21PcmlnaW5JbmxpbmUiLCJ6b29tT3JpZ2luQmxvY2siLCJ6b29tTWluIiwiem9vbU1pbklubGluZSIsInpvb21NaW5CbG9jayIsIlpvb20iLCJfcmVmMzAiLCJTbGlkZVpvb20iLCJfcmVmMzEiLCJTbGlkZVpvb21GYWRlIiwiX3JlZjMyIiwiWm9vbUZhZGUiLCJfcmVmMzMiLCJoYWxmVGV4dCIsImlucHV0IiwidGltZXMiLCJzdWJzdHIiLCJEZW1vIiwiZXhjbHVzaXZlIiwic2V0RXhjbHVzaXZlIiwic2V0QW5pbWF0ZU9uTW91bnQiLCJ3cml0aW5nTW9kZSIsInNldFdyaXRpbmdNb2RlIiwic2hvdzEiLCJzZXRTaG93MSIsInNob3czIiwic2V0U2hvdzMiLCJyZWZsb3ciLCJzZXRSZWZsb3ciLCJzZXREdXJhdGlvbiIsInRleHQiLCJzZXRUZXh0IiwiZmxpY2tlciIsInNldEZsaWNrZXIiLCJvbklucHV0MyIsInByZXZlbnREZWZhdWx0Iiwib25JbnB1dDQiLCJvbklucHV0NSIsIm9uSW5wdXQ1YiIsIm9uSW5wdXQ2Iiwib25JbnB1dDciLCJvbklucHV0OCIsInZhbHVlQXNOdW1iZXIiLCJvbklucHV0OSIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIl9qc3hzIiwib25DbGljayIsIm9uSW5wdXQiLCJkaXNhYmxlZCIsImNvbHMiLCJyb3dzIiwiRmFkZURlbW8iLCJjYXJkU2hvdyIsImNvbnRlbnRJbmRleCIsIlNsaWRlRGVtbyIsIlpvb21EZW1vIiwiQ2xpcERlbW8iLCJGbGlwRGVtbyIsIlpvb21TbGlkZURlbW8iLCJDb2xsYXBzZURlbW8iLCJfcmVmMzQiLCJtaW4iLCJzZXRNaW4iLCJzZXRNYXgiLCJvbk1pbklucHV0Iiwib25NYXhJbnB1dCIsIkMiLCJDUyIsIkUiLCJtYWtlQ2hpbGQiLCJzdGVwIiwiX3JlZjM1Iiwib3JpZ2luWCIsInNldE9yaWdpblgiLCJvcmlnaW5ZIiwic2V0T3JpZ2luWSIsIm1pblgiLCJzZXRNaW5YIiwibWluWSIsInNldE1pblkiLCJ3aXRoRmFkZSIsInNldFdpdGhGYWRlIiwib25PcmlnaW5YSW5wdXQiLCJvbk9yaWdpbllJbnB1dCIsIm9uTWluWElucHV0Iiwib25NaW5ZSW5wdXQiLCJvbldpdGhGYWRlSW5wdXQiLCJfcmVmMzYiLCJzbGlkZVgiLCJzZXRTbGlkZVgiLCJzbGlkZVkiLCJzZXRTbGlkZVkiLCJvblNsaWRlWElucHV0Iiwib25TbGlkZVlJbnB1dCIsInNpZ24iLCJfcmVmMzciLCJfcmVmMzgiLCJfcmVmMzkiLCJzZXRNaW5CbG9ja1NpemUiLCJvbk1pblNpemUiLCJfcmVmNDAiLCJmbGlwWCIsInNldEZsaXBYIiwiZmxpcFkiLCJzZXRGbGlwWSIsIm9uRmxpcFhJbnB1dCIsIm9uRmxpcFlJbnB1dCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdz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
