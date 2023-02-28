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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2pzeC1ydW50aW1lL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNANTQ4ZDkyNmQ2ZmJiMjIwNzJhZDQxN2NkMTExZTk2NjdlNjk3NGIzMF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNANTQ4ZDkyNmQ2ZmJiMjIwNzJhZDQxN2NkMTExZTk2NjdlNjk3NGIzMF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtZ2V0dGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2sudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNANTQ4ZDkyNmQ2ZmJiMjIwNzJhZDQxN2NkMTExZTk2NjdlNjk3NGIzMF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A1NDhkOTI2ZDZmYmIyMjA3MmFkNDE3Y2QxMTFlOTY2N2U2OTc0YjMwX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNANTQ4ZDkyNmQ2ZmJiMjIwNzJhZDQxN2NkMTExZTk2NjdlNjk3NGIzMF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNANTQ4ZDkyNmQ2ZmJiMjIwNzJhZDQxN2NkMTExZTk2NjdlNjk3NGIzMF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1tYW5hZ2VkLWNoaWxkcmVuLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ibG9ja2luZy1lbGVtZW50c0AwLjEuMS9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvc3JjL2Jsb2NraW5nLWVsZW1lbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3dpY2ctaW5lcnRAMy4xLjIvbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0A1NDhkOTI2ZDZmYmIyMjA3MmFkNDE3Y2QxMTFlOTY2N2U2OTc0YjMwX3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhdGUudHN4Iiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy91dGlsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9QdXJlQ29tcG9uZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9tZW1vLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9mb3J3YXJkUmVmLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9DaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvc3VzcGVuc2UuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3N1c3BlbnNlLWxpc3QuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3BvcnRhbHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3JlbmRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDU0OGQ5MjZkNmZiYjIyMDcyYWQ0MTdjZDExMWU5NjY3ZTY5NzRiMzBfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3RpbWluZy91c2UtYW5pbWF0aW9uLWZyYW1lLnRzeCIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNGdW5jdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcmVKc0RhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc01hc2tlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvU291cmNlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzTmF0aXZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VmFsdWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXROYXRpdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2VxLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlQ3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaENsZWFyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaERlbGV0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hHZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoSGFzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaFNldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVDbGVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Fzc29jSW5kZXhPZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUdldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUhhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZVNldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0xpc3RDYWNoZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX01hcC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlQ2xlYXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc0tleWFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRNYXBEYXRhLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVEZWxldGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUdldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlSGFzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVTZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19NYXBDYWNoZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvbWVtb2l6ZS5qcyIsIi4uL3NyYy91dGlsL2NvbnRleHQudHN4IiwiLi4vc3JjL2V4Y2x1c2l2ZS50c3giLCIuLi9zcmMvdXRpbC91dGlsLnRzeCIsIi4uL3NyYy9zd2FwcGFibGUudHN4IiwiLi4vc3JjL3RyYW5zaXRpb25hYmxlLnRzeCIsIi4uL3NyYy9mYWRlLnRzeCIsIi4uL3NyYy9jbGlwLnRzeCIsIi4uL3NyYy9jbGlwLWZhZGUudHN4IiwiLi4vc3JjL2NvbGxhcHNlLnRzeCIsIi4uL3NyYy9jb2xsYXBzZS1mYWRlLnRzeCIsIi4uL3NyYy9mbGlwLnRzeCIsIi4uL3NyYy9zbGlkZS50c3giLCIuLi9zcmMvc2xpZGUtZmFkZS50c3giLCIuLi9zcmMvem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS50c3giLCIuLi9zcmMvc2xpZGUtem9vbS1mYWRlLnRzeCIsIi4uL3NyYy96b29tLWZhZGUudHN4IiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRU1QVFlfQVJSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Ly8gQHRzLWlnbm9yZSBXZSBjaGFuZ2UgdGhlIHR5cGUgb2YgYG9iamAgdG8gYmUgYE8gJiBQYFxuXHRmb3IgKGxldCBpIGluIHByb3BzKSBvYmpbaV0gPSBwcm9wc1tpXTtcblx0cmV0dXJuIC8qKiBAdHlwZSB7TyAmIFB9ICovIChvYmopO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNoaWxkIG5vZGUgZnJvbSBpdHMgcGFyZW50IGlmIGF0dGFjaGVkLiBUaGlzIGlzIGEgd29ya2Fyb3VuZCBmb3JcbiAqIElFMTEgd2hpY2ggZG9lc24ndCBzdXBwb3J0IGBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUoKWAuIFVzaW5nIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHNtYWxsZXIgdGhhbiBpbmNsdWRpbmcgYSBkZWRpY2F0ZWQgcG9seWZpbGwuXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgVGhlIG5vZGUgdG8gcmVtb3ZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5leHBvcnQgY29uc3Qgc2xpY2UgPSBFTVBUWV9BUlIuc2xpY2U7XG4iLCJpbXBvcnQgeyBfY2F0Y2hFcnJvciB9IGZyb20gJy4vZGlmZi9jYXRjaC1lcnJvcic7XG5cbi8qKlxuICogVGhlIGBvcHRpb25gIG9iamVjdCBjYW4gcG90ZW50aWFsbHkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcbiAqIHRoYXQgYXJlIGNhbGxlZCBkdXJpbmcgdmFyaW91cyBzdGFnZXMgb2Ygb3VyIHJlbmRlcmVyLiBUaGlzIGlzIHRoZVxuICogZm91bmRhdGlvbiBvbiB3aGljaCBhbGwgb3VyIGFkZG9ucyBsaWtlIGBwcmVhY3QvZGVidWdgLCBgcHJlYWN0L2NvbXBhdGAsXG4gKiBhbmQgYHByZWFjdC9ob29rc2AgYXJlIGJhc2VkIG9uLiBTZWUgdGhlIGBPcHRpb25zYCB0eXBlIGluIGBpbnRlcm5hbC5kLnRzYFxuICogZm9yIGEgZnVsbCBsaXN0IG9mIGF2YWlsYWJsZSBvcHRpb24gaG9va3MgKG1vc3QgZWRpdG9ycy9JREVzIGFsbG93IHlvdSB0b1xuICogY3RybCtjbGljayBvciBjbWQrY2xpY2sgb24gbWFjIHRoZSB0eXBlIGRlZmluaXRpb24gYmVsb3cpLlxuICogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk9wdGlvbnN9XG4gKi9cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdF9jYXRjaEVycm9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHt9LFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2Ugbm9ybWFsaXplZFByb3BzW2ldID0gcHJvcHNbaV07XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wc1xuXHQvLyBOb3RlOiB0eXBlIG1heSBiZSB1bmRlZmluZWQgaW4gZGV2ZWxvcG1lbnQsIG11c3QgbmV2ZXIgZXJyb3IgaGVyZS5cblx0aWYgKHR5cGVvZiB0eXBlID09ICdmdW5jdGlvbicgJiYgdHlwZS5kZWZhdWx0UHJvcHMgIT0gbnVsbCkge1xuXHRcdGZvciAoaSBpbiB0eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHR5cGUuZGVmYXVsdFByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZSh0eXBlLCBub3JtYWxpemVkUHJvcHMsIGtleSwgcmVmLCBudWxsKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBWTm9kZSAodXNlZCBpbnRlcm5hbGx5IGJ5IFByZWFjdClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50XG4gKiBDb25zdHJ1Y3RvciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgc3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0gcHJvcHMgVGhlIHByb3BlcnRpZXMgb2YgdGhpcyB2aXJ0dWFsIG5vZGUuXG4gKiBJZiB0aGlzIHZpcnR1YWwgbm9kZSByZXByZXNlbnRzIGEgdGV4dCBub2RlLCB0aGlzIGlzIHRoZSB0ZXh0IG9mIHRoZSBub2RlIChzdHJpbmcgb3IgbnVtYmVyKS5cbiAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgbnVsbH0ga2V5IFRoZSBrZXkgZm9yIHRoaXMgdmlydHVhbCBub2RlLCB1c2VkIHdoZW5cbiAqIGRpZmZpbmcgaXQgYWdhaW5zdCBpdHMgY2hpbGRyZW5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJyZWZcIl19IHJlZiBUaGUgcmVmIHByb3BlcnR5IHRoYXQgd2lsbFxuICogcmVjZWl2ZSBhIHJlZmVyZW5jZSB0byBpdHMgY3JlYXRlZCBjaGlsZFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUodHlwZSwgcHJvcHMsIGtleSwgcmVmLCBvcmlnaW5hbCkge1xuXHQvLyBWOCBzZWVtcyB0byBiZSBiZXR0ZXIgYXQgZGV0ZWN0aW5nIHR5cGUgc2hhcGVzIGlmIHRoZSBvYmplY3QgaXMgYWxsb2NhdGVkIGZyb20gdGhlIHNhbWUgY2FsbCBzaXRlXG5cdC8vIERvIG5vdCBpbmxpbmUgaW50byBjcmVhdGVFbGVtZW50IGFuZCBjb2VyY2VUb1ZOb2RlIVxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzLFxuXHRcdGtleSxcblx0XHRyZWYsXG5cdFx0X2NoaWxkcmVuOiBudWxsLFxuXHRcdF9wYXJlbnQ6IG51bGwsXG5cdFx0X2RlcHRoOiAwLFxuXHRcdF9kb206IG51bGwsXG5cdFx0Ly8gX25leHREb20gbXVzdCBiZSBpbml0aWFsaXplZCB0byB1bmRlZmluZWQgYi9jIGl0IHdpbGwgZXZlbnR1YWxseVxuXHRcdC8vIGJlIHNldCB0byBkb20ubmV4dFNpYmxpbmcgd2hpY2ggY2FuIHJldHVybiBgbnVsbGAgYW5kIGl0IGlzIGltcG9ydGFudFxuXHRcdC8vIHRvIGJlIGFibGUgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBhbiB1bmluaXRpYWxpemVkIF9uZXh0RG9tIGFuZFxuXHRcdC8vIGEgX25leHREb20gdGhhdCBoYXMgYmVlbiBzZXQgdG8gYG51bGxgXG5cdFx0X25leHREb206IHVuZGVmaW5lZCxcblx0XHRfY29tcG9uZW50OiBudWxsLFxuXHRcdF9oeWRyYXRpbmc6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IG51bGwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBudWxsICYmIG9wdGlvbnMudm5vZGUgIT0gbnVsbCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBudWxsIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IG51bGwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBkaWZmLCBjb21taXRSb290IH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIEJhc2UgQ29tcG9uZW50IGNsYXNzLiBQcm92aWRlcyBgc2V0U3RhdGUoKWAgYW5kIGBmb3JjZVVwZGF0ZSgpYCwgd2hpY2hcbiAqIHRyaWdnZXIgcmVuZGVyaW5nXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgVGhlIGluaXRpYWwgY29tcG9uZW50IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBUaGUgaW5pdGlhbCBjb250ZXh0IGZyb20gcGFyZW50IGNvbXBvbmVudHMnXG4gKiBnZXRDaGlsZENvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCkge1xuXHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbi8qKlxuICogVXBkYXRlIGNvbXBvbmVudCBzdGF0ZSBhbmQgc2NoZWR1bGUgYSByZS1yZW5kZXIuXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fVxuICogQHBhcmFtIHtvYmplY3QgfCAoKHM6IG9iamVjdCwgcDogb2JqZWN0KSA9PiBvYmplY3QpfSB1cGRhdGUgQSBoYXNoIG9mIHN0YXRlXG4gKiBwcm9wZXJ0aWVzIHRvIHVwZGF0ZSB3aXRoIG5ldyB2YWx1ZXMgb3IgYSBmdW5jdGlvbiB0aGF0IGdpdmVuIHRoZSBjdXJyZW50XG4gKiBzdGF0ZSBhbmQgcHJvcHMgcmV0dXJucyBhIG5ldyBwYXJ0aWFsIHN0YXRlXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb25jZSBjb21wb25lbnQgc3RhdGUgaXNcbiAqIHVwZGF0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uKHVwZGF0ZSwgY2FsbGJhY2spIHtcblx0Ly8gb25seSBjbG9uZSBzdGF0ZSB3aGVuIGNvcHlpbmcgdG8gbmV4dFN0YXRlIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgcztcblx0aWYgKHRoaXMuX25leHRTdGF0ZSAhPSBudWxsICYmIHRoaXMuX25leHRTdGF0ZSAhPT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBudWxsKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0Ly8gU2V0IHJlbmRlciBtb2RlIHNvIHRoYXQgd2UgY2FuIGRpZmZlcmVudGlhdGUgd2hlcmUgdGhlIHJlbmRlciByZXF1ZXN0XG5cdFx0Ly8gaXMgY29taW5nIGZyb20uIFdlIG5lZWQgdGhpcyBiZWNhdXNlIGZvcmNlVXBkYXRlIHNob3VsZCBuZXZlciBjYWxsXG5cdFx0Ly8gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5cdFx0dGhpcy5fZm9yY2UgPSB0cnVlO1xuXHRcdGlmIChjYWxsYmFjaykgdGhpcy5fcmVuZGVyQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdGVucXVldWVSZW5kZXIodGhpcyk7XG5cdH1cbn07XG5cbi8qKlxuICogQWNjZXB0cyBgcHJvcHNgIGFuZCBgc3RhdGVgLCBhbmQgcmV0dXJucyBhIG5ldyBWaXJ0dWFsIERPTSB0cmVlIHRvIGJ1aWxkLlxuICogVmlydHVhbCBET00gaXMgZ2VuZXJhbGx5IGNvbnN0cnVjdGVkIHZpYSBbSlNYXShodHRwOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge2ltcG9ydCgnLi9pbmRleCcpLkNvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPSBGcmFnbWVudDtcblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICogQHBhcmFtIHtudW1iZXIgfCBudWxsfSBbY2hpbGRJbmRleF1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERvbVNpYmxpbmcodm5vZGUsIGNoaWxkSW5kZXgpIHtcblx0aWYgKGNoaWxkSW5kZXggPT0gbnVsbCkge1xuXHRcdC8vIFVzZSBjaGlsZEluZGV4PT1udWxsIGFzIGEgc2lnbmFsIHRvIHJlc3VtZSB0aGUgc2VhcmNoIGZyb20gdGhlIHZub2RlJ3Mgc2libGluZ1xuXHRcdHJldHVybiB2bm9kZS5fcGFyZW50XG5cdFx0XHQ/IGdldERvbVNpYmxpbmcodm5vZGUuX3BhcmVudCwgdm5vZGUuX3BhcmVudC5fY2hpbGRyZW4uaW5kZXhPZih2bm9kZSkgKyAxKVxuXHRcdFx0OiBudWxsO1xuXHR9XG5cblx0bGV0IHNpYmxpbmc7XG5cdGZvciAoOyBjaGlsZEluZGV4IDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgY2hpbGRJbmRleCsrKSB7XG5cdFx0c2libGluZyA9IHZub2RlLl9jaGlsZHJlbltjaGlsZEluZGV4XTtcblxuXHRcdGlmIChzaWJsaW5nICE9IG51bGwgJiYgc2libGluZy5fZG9tICE9IG51bGwpIHtcblx0XHRcdC8vIFNpbmNlIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIGtlZXBzIF9kb20gcG9pbnRlciBjb3JyZWN0LFxuXHRcdFx0Ly8gd2UgY2FuIHJlbHkgb24gX2RvbSB0byB0ZWxsIHVzIGlmIHRoaXMgc3VidHJlZSBjb250YWlucyBhXG5cdFx0XHQvLyByZW5kZXJlZCBET00gbm9kZSwgYW5kIHdoYXQgdGhlIGZpcnN0IHJlbmRlcmVkIERPTSBub2RlIGlzXG5cdFx0XHRyZXR1cm4gc2libGluZy5fZG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGdldCBoZXJlLCB3ZSBoYXZlIG5vdCBmb3VuZCBhIERPTSBub2RlIGluIHRoaXMgdm5vZGUncyBjaGlsZHJlbi5cblx0Ly8gV2UgbXVzdCByZXN1bWUgZnJvbSB0aGlzIHZub2RlJ3Mgc2libGluZyAoaW4gaXQncyBwYXJlbnQgX2NoaWxkcmVuIGFycmF5KVxuXHQvLyBPbmx5IGNsaW1iIHVwIGFuZCBzZWFyY2ggdGhlIHBhcmVudCBpZiB3ZSBhcmVuJ3Qgc2VhcmNoaW5nIHRocm91Z2ggYSBET01cblx0Ly8gVk5vZGUgKG1lYW5pbmcgd2UgcmVhY2hlZCB0aGUgRE9NIHBhcmVudCBvZiB0aGUgb3JpZ2luYWwgdm5vZGUgdGhhdCBiZWdhblxuXHQvLyB0aGUgc2VhcmNoKVxuXHRyZXR1cm4gdHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyA/IGdldERvbVNpYmxpbmcodm5vZGUpIDogbnVsbDtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGluLXBsYWNlIHJlLXJlbmRlcmluZyBvZiBhIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5mdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cdGxldCB2bm9kZSA9IGNvbXBvbmVudC5fdm5vZGUsXG5cdFx0b2xkRG9tID0gdm5vZGUuX2RvbSxcblx0XHRwYXJlbnREb20gPSBjb21wb25lbnQuX3BhcmVudERvbTtcblxuXHRpZiAocGFyZW50RG9tKSB7XG5cdFx0bGV0IGNvbW1pdFF1ZXVlID0gW107XG5cdFx0Y29uc3Qgb2xkVk5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRvbGRWTm9kZS5fb3JpZ2luYWwgPSB2bm9kZS5fb3JpZ2luYWwgKyAxO1xuXG5cdFx0ZGlmZihcblx0XHRcdHBhcmVudERvbSxcblx0XHRcdHZub2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRwYXJlbnREb20ub3duZXJTVkdFbGVtZW50ICE9PSB1bmRlZmluZWQsXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nICE9IG51bGwgPyBbb2xkRG9tXSA6IG51bGwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBudWxsID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBvbGREb20sXG5cdFx0XHR2bm9kZS5faHlkcmF0aW5nXG5cdFx0KTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG5cblx0XHRpZiAodm5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRcdHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5mdW5jdGlvbiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSkge1xuXHRpZiAoKHZub2RlID0gdm5vZGUuX3BhcmVudCkgIT0gbnVsbCAmJiB2bm9kZS5fY29tcG9uZW50ICE9IG51bGwpIHtcblx0XHR2bm9kZS5fZG9tID0gdm5vZGUuX2NvbXBvbmVudC5iYXNlID0gbnVsbDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZub2RlLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gdm5vZGUuX2NoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKGNoaWxkICE9IG51bGwgJiYgY2hpbGQuX2RvbSAhPSBudWxsKSB7XG5cdFx0XHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIHJlbmRlciBxdWV1ZVxuICogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59XG4gKi9cbmxldCByZXJlbmRlclF1ZXVlID0gW107XG5cbi8qXG4gKiBUaGUgdmFsdWUgb2YgYENvbXBvbmVudC5kZWJvdW5jZWAgbXVzdCBhc3luY2hyb25vdXNseSBpbnZva2UgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay4gSXQgaXNcbiAqIGltcG9ydGFudCB0aGF0IGNvbnRyaWJ1dG9ycyB0byBQcmVhY3QgY2FuIGNvbnNpc3RlbnRseSByZWFzb24gYWJvdXQgd2hhdCBjYWxscyB0byBgc2V0U3RhdGVgLCBldGMuXG4gKiBkbywgYW5kIHdoZW4gdGhlaXIgZWZmZWN0cyB3aWxsIGJlIGFwcGxpZWQuIFNlZSB0aGUgbGlua3MgYmVsb3cgZm9yIHNvbWUgZnVydGhlciByZWFkaW5nIG9uIGRlc2lnbmluZ1xuICogYXN5bmNocm9ub3VzIEFQSXMuXG4gKiAqIFtEZXNpZ25pbmcgQVBJcyBmb3IgQXN5bmNocm9ueV0oaHR0cHM6Ly9ibG9nLml6cy5tZS8yMDEzLzA4L2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogKiBbQ2FsbGJhY2tzIHN5bmNocm9ub3VzIGFuZCBhc3luY2hyb25vdXNdKGh0dHBzOi8vYmxvZy5vbWV0ZXIuY29tLzIwMTEvMDcvMjQvY2FsbGJhY2tzLXN5bmNocm9ub3VzLWFuZC1hc3luY2hyb25vdXMvKVxuICovXG5cbmxldCBwcmV2RGVib3VuY2U7XG5cbmNvbnN0IGRlZmVyID1cblx0dHlwZW9mIFByb21pc2UgPT0gJ2Z1bmN0aW9uJ1xuXHRcdD8gUHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKVxuXHRcdDogc2V0VGltZW91dDtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT09IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdcblx0KSB7XG5cdFx0cHJldkRlYm91bmNlID0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZztcblx0XHQocHJldkRlYm91bmNlIHx8IGRlZmVyKShwcm9jZXNzKTtcblx0fVxufVxuXG4vKiogRmx1c2ggdGhlIHJlbmRlciBxdWV1ZSBieSByZXJlbmRlcmluZyBhbGwgcXVldWVkIGNvbXBvbmVudHMgKi9cbmZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cdGxldCBjO1xuXHRyZXJlbmRlclF1ZXVlLnNvcnQoKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aCk7XG5cdC8vIERvbid0IHVwZGF0ZSBgcmVuZGVyQ291bnRgIHlldC4gS2VlcCBpdHMgdmFsdWUgbm9uLXplcm8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeVxuXHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHR3aGlsZSAoKGMgPSByZXJlbmRlclF1ZXVlLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKGMuX2RpcnR5KSB7XG5cdFx0XHRsZXQgcmVuZGVyUXVldWVMZW5ndGggPSByZXJlbmRlclF1ZXVlLmxlbmd0aDtcblx0XHRcdHJlbmRlckNvbXBvbmVudChjKTtcblx0XHRcdGlmIChyZXJlbmRlclF1ZXVlLmxlbmd0aCA+IHJlbmRlclF1ZXVlTGVuZ3RoKSB7XG5cdFx0XHRcdC8vIFdoZW4gaS5lLiByZXJlbmRlcmluZyBhIHByb3ZpZGVyIGFkZGl0aW9uYWwgbmV3IGl0ZW1zIGNhbiBiZSBpbmplY3RlZCwgd2Ugd2FudCB0b1xuXHRcdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdFx0Ly8gc2luZ2xlIHBhc3Ncblx0XHRcdFx0cmVyZW5kZXJRdWV1ZS5zb3J0KChhLCBiKSA9PiBhLl92bm9kZS5fZGVwdGggLSBiLl92bm9kZS5fZGVwdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwcm9jZXNzLl9yZXJlbmRlckNvdW50ID0gMDtcbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNvbnRleHRJZCkge1xuXHRjb250ZXh0SWQgPSAnX19jQycgKyBpKys7XG5cblx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRfaWQ6IGNvbnRleHRJZCxcblx0XHRfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRDb25zdW1lcihwcm9wcywgY29udGV4dFZhbHVlKSB7XG5cdFx0XHQvLyByZXR1cm4gcHJvcHMuY2hpbGRyZW4oXG5cdFx0XHQvLyBcdGNvbnRleHRbY29udGV4dElkXSA/IGNvbnRleHRbY29udGV4dElkXS5wcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXHRcdFx0Ly8gKTtcblx0XHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0VmFsdWUpO1xuXHRcdH0sXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRQcm92aWRlcihwcm9wcykge1xuXHRcdFx0aWYgKCF0aGlzLmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudFtdfSAqL1xuXHRcdFx0XHRsZXQgc3VicyA9IFtdO1xuXHRcdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRcdGN0eFtjb250ZXh0SWRdID0gdGhpcztcblxuXHRcdFx0XHR0aGlzLmdldENoaWxkQ29udGV4dCA9ICgpID0+IGN0eDtcblxuXHRcdFx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKF9wcm9wcykge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRcdC8vIEkgdGhpbmsgdGhlIGZvcmNlZCB2YWx1ZSBwcm9wYWdhdGlvbiBoZXJlIHdhcyBvbmx5IG5lZWRlZCB3aGVuIGBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nYCB3YXMgYmVpbmcgYnlwYXNzZWQ6XG5cdFx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2NvbW1pdC80ZDMzOWZiODAzYmVhMDllOWYxOThhYmYzOGNhMWJmOGVhNGI3NzcxI2RpZmYtNTQ2ODJjZTM4MDkzNWE3MTdlNDFiOGJmYzU0NzM3ZjZSMzU4XG5cdFx0XHRcdFx0XHQvLyBJbiB0aG9zZSBjYXNlcyB0aG91Z2gsIGV2ZW4gd2l0aCB0aGUgdmFsdWUgY29ycmVjdGVkLCB3ZSdyZSBkb3VibGUtcmVuZGVyaW5nIGFsbCBub2Rlcy5cblx0XHRcdFx0XHRcdC8vIEl0IG1pZ2h0IGJlIGJldHRlciB0byBqdXN0IHRlbGwgZm9sa3Mgbm90IHRvIHVzZSBmb3JjZS1zeW5jIG1vZGUuXG5cdFx0XHRcdFx0XHQvLyBDdXJyZW50bHksIHVzaW5nIGB1c2VDb250ZXh0KClgIGluIGEgY2xhc3MgY29tcG9uZW50IHdpbGwgb3ZlcndyaXRlIGl0cyBgdGhpcy5jb250ZXh0YCB2YWx1ZS5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0ID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0W2NvbnRleHRJZF0gPSBfcHJvcHMudmFsdWU7XG5cdFx0XHRcdFx0XHQvLyBcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRcdHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdFx0Yy5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHRoaXMuc3ViID0gYyA9PiB7XG5cdFx0XHRcdFx0c3Vicy5wdXNoKGMpO1xuXHRcdFx0XHRcdGxldCBvbGQgPSBjLmNvbXBvbmVudFdpbGxVbm1vdW50O1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdWJzLnNwbGljZShzdWJzLmluZGV4T2YoYyksIDEpO1xuXHRcdFx0XHRcdFx0aWYgKG9sZCkgb2xkLmNhbGwoYyk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHRcdH1cblx0fTtcblxuXHQvLyBEZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHdoZW4gaXRcblx0Ly8gZW5jb3VudGVycyBhIFByb3ZpZGVyLiBUaGlzIGlzIG5lY2Vzc2FyeSB0byBzdXBwb3J0XG5cdC8vIHNldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiB0aGUgY29udGV4dCBvYmplY3QgaW5zdGVhZFxuXHQvLyBvZiBvbiB0aGUgY29tcG9uZW50IGl0c2VsZi4gU2VlOlxuXHQvLyBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29udGV4dC5odG1sI2NvbnRleHRkaXNwbGF5bmFtZVxuXG5cdHJldHVybiAoY29udGV4dC5Qcm92aWRlci5fY29udGV4dFJlZiA9IGNvbnRleHQuQ29uc3VtZXIuY29udGV4dFR5cGUgPSBjb250ZXh0KTtcbn1cbiIsImV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlIgPSBbXTtcbmV4cG9ydCBjb25zdCBJU19OT05fRElNRU5TSU9OQUwgPSAvYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO1xuIiwiaW1wb3J0IHsgZGlmZiwgdW5tb3VudCwgYXBwbHlSZWYgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZVZOb2RlLCBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiwgRU1QVFlfQVJSIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIERpZmYgdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlXG4gKiBjaGlsZHJlbiBhcmUgYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbltdfSByZW5kZXJSZXN1bHRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdQYXJlbnRWTm9kZSBUaGUgbmV3IHZpcnR1YWxcbiAqIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlIGRpZmYnZWQgYWdhaW5zdCBvbGRQYXJlbnRWTm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5IGdldENoaWxkQ29udGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBpc0h5ZHJhdGluZyBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ2hpbGRyZW4oXG5cdHBhcmVudERvbSxcblx0cmVuZGVyUmVzdWx0LFxuXHRuZXdQYXJlbnRWTm9kZSxcblx0b2xkUGFyZW50Vk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdG9sZERvbSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgaSwgaiwgb2xkVk5vZGUsIGNoaWxkVk5vZGUsIG5ld0RvbSwgZmlyc3RDaGlsZERvbSwgcmVmcztcblxuXHQvLyBUaGlzIGlzIGEgY29tcHJlc3Npb24gb2Ygb2xkUGFyZW50Vk5vZGUhPW51bGwgJiYgb2xkUGFyZW50Vk5vZGUgIT0gRU1QVFlfT0JKICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbiB8fCBFTVBUWV9BUlJcblx0Ly8gYXMgRU1QVFlfT0JKLl9jaGlsZHJlbiBzaG91bGQgYmUgYHVuZGVmaW5lZGAuXG5cdGxldCBvbGRDaGlsZHJlbiA9IChvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS5fY2hpbGRyZW4pIHx8IEVNUFRZX0FSUjtcblxuXHRsZXQgb2xkQ2hpbGRyZW5MZW5ndGggPSBvbGRDaGlsZHJlbi5sZW5ndGg7XG5cblx0bmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCByZW5kZXJSZXN1bHQubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdH1cblx0XHQvLyBJZiB0aGlzIG5ld1ZOb2RlIGlzIGJlaW5nIHJldXNlZCAoZS5nLiA8ZGl2PntyZXVzZX17cmV1c2V9PC9kaXY+KSBpbiB0aGUgc2FtZSBkaWZmLFxuXHRcdC8vIG9yIHdlIGFyZSByZW5kZXJpbmcgYSBjb21wb25lbnQgKGUuZy4gc2V0U3RhdGUpIGNvcHkgdGhlIG9sZFZOb2RlcyBzbyBpdCBjYW4gaGF2ZVxuXHRcdC8vIGl0J3Mgb3duIERPTSAmIGV0Yy4gcG9pbnRlcnNcblx0XHRlbHNlIGlmIChcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdzdHJpbmcnIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnbnVtYmVyJyB8fFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZhbGlkLXR5cGVvZlxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ2JpZ2ludCdcblx0XHQpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRWTm9kZSkpIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRcdHsgY2hpbGRyZW46IGNoaWxkVk5vZGUgfSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbFxuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IG51bGwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZFZOb2RlID0gbmV3UGFyZW50Vk5vZGUuX2NoaWxkcmVuW2ldID0gY2hpbGRWTm9kZTtcblx0XHR9XG5cblx0XHQvLyBUZXJzZXIgcmVtb3ZlcyB0aGUgYGNvbnRpbnVlYCBoZXJlIGFuZCB3cmFwcyB0aGUgbG9vcCBib2R5XG5cdFx0Ly8gaW4gYSBgaWYgKGNoaWxkVk5vZGUpIHsgLi4uIH0gY29uZGl0aW9uXG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gbnVsbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UgZmluZCBhIGNvcnJlc3BvbmRpbmcgZWxlbWVudCBpbiBvbGRDaGlsZHJlbi5cblx0XHQvLyBJZiBmb3VuZCwgZGVsZXRlIHRoZSBhcnJheSBpdGVtIGJ5IHNldHRpbmcgdG8gYHVuZGVmaW5lZGAuXG5cdFx0Ly8gV2UgdXNlIGB1bmRlZmluZWRgLCBhcyBgbnVsbGAgaXMgcmVzZXJ2ZWQgZm9yIGVtcHR5IHBsYWNlaG9sZGVyc1xuXHRcdC8vIChob2xlcykuXG5cdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltpXTtcblxuXHRcdGlmIChcblx0XHRcdG9sZFZOb2RlID09PSBudWxsIHx8XG5cdFx0XHQob2xkVk5vZGUgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5rZXkgPT0gb2xkVk5vZGUua2V5ICYmXG5cdFx0XHRcdGNoaWxkVk5vZGUudHlwZSA9PT0gb2xkVk5vZGUudHlwZSlcblx0XHQpIHtcblx0XHRcdG9sZENoaWxkcmVuW2ldID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBFaXRoZXIgb2xkVk5vZGUgPT09IHVuZGVmaW5lZCBvciBvbGRDaGlsZHJlbkxlbmd0aCA+IDAsXG5cdFx0XHQvLyBzbyBhZnRlciB0aGlzIGxvb3Agb2xkVk5vZGUgPT0gbnVsbCBvciBvbGRWTm9kZSBpcyBhIHZhbGlkIHZhbHVlLlxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IG9sZENoaWxkcmVuTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0b2xkVk5vZGUgPSBvbGRDaGlsZHJlbltqXTtcblx0XHRcdFx0Ly8gSWYgY2hpbGRWTm9kZSBpcyB1bmtleWVkLCB3ZSBvbmx5IG1hdGNoIHNpbWlsYXJseSB1bmtleWVkIG5vZGVzLCBvdGhlcndpc2Ugd2UgbWF0Y2ggYnkga2V5LlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgbWF0Y2ggYnkgdHlwZSAoaW4gZWl0aGVyIGNhc2UpLlxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0b2xkVk5vZGUgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLmtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUgPT09IG9sZFZOb2RlLnR5cGVcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0b2xkQ2hpbGRyZW5bal0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0b2xkVk5vZGUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG9sZFZOb2RlID0gb2xkVk5vZGUgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gTW9ycGggdGhlIG9sZCBlbGVtZW50IGludG8gdGhlIG5ldyBvbmUsIGJ1dCBkb24ndCBhcHBlbmQgaXQgdG8gdGhlIGRvbSB5ZXRcblx0XHRkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdGlzU3ZnLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nXG5cdFx0KTtcblxuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblxuXHRcdGlmICgoaiA9IGNoaWxkVk5vZGUucmVmKSAmJiBvbGRWTm9kZS5yZWYgIT0gaikge1xuXHRcdFx0aWYgKCFyZWZzKSByZWZzID0gW107XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSByZWZzLnB1c2gob2xkVk5vZGUucmVmLCBudWxsLCBjaGlsZFZOb2RlKTtcblx0XHRcdHJlZnMucHVzaChqLCBjaGlsZFZOb2RlLl9jb21wb25lbnQgfHwgbmV3RG9tLCBjaGlsZFZOb2RlKTtcblx0XHR9XG5cblx0XHRpZiAobmV3RG9tICE9IG51bGwpIHtcblx0XHRcdGlmIChmaXJzdENoaWxkRG9tID09IG51bGwpIHtcblx0XHRcdFx0Zmlyc3RDaGlsZERvbSA9IG5ld0RvbTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgY2hpbGRWTm9kZS50eXBlID09ICdmdW5jdGlvbicgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY2hpbGRyZW4gPT09IG9sZFZOb2RlLl9jaGlsZHJlblxuXHRcdFx0KSB7XG5cdFx0XHRcdGNoaWxkVk5vZGUuX25leHREb20gPSBvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4oXG5cdFx0XHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdFx0XHRvbGREb20sXG5cdFx0XHRcdFx0cGFyZW50RG9tXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKFxuXHRcdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0XHRcdG5ld0RvbSxcblx0XHRcdFx0XHRvbGREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBuZXdQYXJlbnRWTm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Ly8gQmVjYXVzZSB0aGUgbmV3UGFyZW50Vk5vZGUgaXMgRnJhZ21lbnQtbGlrZSwgd2UgbmVlZCB0byBzZXQgaXQnc1xuXHRcdFx0XHQvLyBfbmV4dERvbSBwcm9wZXJ0eSB0byB0aGUgbmV4dFNpYmxpbmcgb2YgaXRzIGxhc3QgY2hpbGQgRE9NIG5vZGUuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIGBvbGREb21gIGNvbnRhaW5zIHRoZSBjb3JyZWN0IHZhbHVlIGhlcmUgYmVjYXVzZSBpZiB0aGUgbGFzdCBjaGlsZFxuXHRcdFx0XHQvLyBpcyBhIEZyYWdtZW50LWxpa2UsIHRoZW4gb2xkRG9tIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHRvIHRoYXQgY2hpbGQncyBfbmV4dERvbS5cblx0XHRcdFx0Ly8gSWYgdGhlIGxhc3QgY2hpbGQgaXMgYSBET00gVk5vZGUsIHRoZW4gb2xkRG9tIHdpbGwgYmUgc2V0IHRvIHRoYXQgRE9NXG5cdFx0XHRcdC8vIG5vZGUncyBuZXh0U2libGluZy5cblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBvbGREb207XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdG9sZERvbSAmJlxuXHRcdFx0b2xkVk5vZGUuX2RvbSA9PSBvbGREb20gJiZcblx0XHRcdG9sZERvbS5wYXJlbnROb2RlICE9IHBhcmVudERvbVxuXHRcdCkge1xuXHRcdFx0Ly8gVGhlIGFib3ZlIGNvbmRpdGlvbiBpcyB0byBoYW5kbGUgbnVsbCBwbGFjZWhvbGRlcnMuIFNlZSB0ZXN0IGluIHBsYWNlaG9sZGVyLnRlc3QuanM6XG5cdFx0XHQvLyBgZWZmaWNpZW50bHkgcmVwbGFjZSBudWxsIHBsYWNlaG9sZGVycyBpbiBwYXJlbnQgcmVyZW5kZXJzYFxuXHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0bmV3UGFyZW50Vk5vZGUuX2RvbSA9IGZpcnN0Q2hpbGREb207XG5cblx0Ly8gUmVtb3ZlIHJlbWFpbmluZyBvbGRDaGlsZHJlbiBpZiB0aGVyZSBhcmUgYW55LlxuXHRmb3IgKGkgPSBvbGRDaGlsZHJlbkxlbmd0aDsgaS0tOyApIHtcblx0XHRpZiAob2xkQ2hpbGRyZW5baV0gIT0gbnVsbCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0eXBlb2YgbmV3UGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0XHRcdG9sZENoaWxkcmVuW2ldLl9kb20gIT0gbnVsbCAmJlxuXHRcdFx0XHRvbGRDaGlsZHJlbltpXS5fZG9tID09IG5ld1BhcmVudFZOb2RlLl9uZXh0RG9tXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSWYgdGhlIG5ld1BhcmVudFZOb2RlLl9fbmV4dERvbSBwb2ludHMgdG8gYSBkb20gbm9kZSB0aGF0IGlzIGFib3V0IHRvXG5cdFx0XHRcdC8vIGJlIHVubW91bnRlZCwgdGhlbiBnZXQgdGhlIG5leHQgc2libGluZyBvZiB0aGF0IHZub2RlIGFuZCBzZXRcblx0XHRcdFx0Ly8gX25leHREb20gdG8gaXRcblx0XHRcdFx0bmV3UGFyZW50Vk5vZGUuX25leHREb20gPSBnZXRMYXN0RG9tKG9sZFBhcmVudFZOb2RlKS5uZXh0U2libGluZztcblx0XHRcdH1cblxuXHRcdFx0dW5tb3VudChvbGRDaGlsZHJlbltpXSwgb2xkQ2hpbGRyZW5baV0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCByZWZzIG9ubHkgYWZ0ZXIgdW5tb3VudFxuXHRpZiAocmVmcykge1xuXHRcdGZvciAoaSA9IDA7IGkgPCByZWZzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcHBseVJlZihyZWZzW2ldLCByZWZzWysraV0sIHJlZnNbKytpXSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJDaGlsZHJlbihjaGlsZFZOb2RlLCBvbGREb20sIHBhcmVudERvbSkge1xuXHQvLyBOb3RlOiBWTm9kZXMgaW4gbmVzdGVkIHN1c3BlbmRlZCB0cmVlcyBtYXkgYmUgbWlzc2luZyBfY2hpbGRyZW4uXG5cdGxldCBjID0gY2hpbGRWTm9kZS5fY2hpbGRyZW47XG5cdGxldCB0bXAgPSAwO1xuXHRmb3IgKDsgYyAmJiB0bXAgPCBjLmxlbmd0aDsgdG1wKyspIHtcblx0XHRsZXQgdm5vZGUgPSBjW3RtcF07XG5cdFx0aWYgKHZub2RlKSB7XG5cdFx0XHQvLyBXZSB0eXBpY2FsbHkgZW50ZXIgdGhpcyBjb2RlIHBhdGggb24gc0NVIGJhaWxvdXQsIHdoZXJlIHdlIGNvcHlcblx0XHRcdC8vIG9sZFZOb2RlLl9jaGlsZHJlbiB0byBuZXdWTm9kZS5fY2hpbGRyZW4uIElmIHRoYXQgaXMgdGhlIGNhc2UsIHdlIG5lZWRcblx0XHRcdC8vIHRvIHVwZGF0ZSB0aGUgb2xkIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZVxuXHRcdFx0Ly8gKGNoaWxkVk5vZGUgaGVyZSkuXG5cdFx0XHR2bm9kZS5fcGFyZW50ID0gY2hpbGRWTm9kZTtcblxuXHRcdFx0aWYgKHR5cGVvZiB2bm9kZS50eXBlID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0b2xkRG9tID0gcmVvcmRlckNoaWxkcmVuKHZub2RlLCBvbGREb20sIHBhcmVudERvbSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbGREb20gPSBwbGFjZUNoaWxkKHBhcmVudERvbSwgdm5vZGUsIHZub2RlLCBjLCB2bm9kZS5fZG9tLCBvbGREb20pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogRmxhdHRlbiBhbmQgbG9vcCB0aHJvdWdoIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2luZGV4JykuQ29tcG9uZW50Q2hpbGRyZW59IGNoaWxkcmVuIFRoZSB1bmZsYXR0ZW5lZFxuICogY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IG51bGwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWNlQ2hpbGQoXG5cdHBhcmVudERvbSxcblx0Y2hpbGRWTm9kZSxcblx0b2xkVk5vZGUsXG5cdG9sZENoaWxkcmVuLFxuXHRuZXdEb20sXG5cdG9sZERvbVxuKSB7XG5cdGxldCBuZXh0RG9tO1xuXHRpZiAoY2hpbGRWTm9kZS5fbmV4dERvbSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8gT25seSBGcmFnbWVudHMgb3IgY29tcG9uZW50cyB0aGF0IHJldHVybiBGcmFnbWVudCBsaWtlIFZOb2RlcyB3aWxsXG5cdFx0Ly8gaGF2ZSBhIG5vbi11bmRlZmluZWQgX25leHREb20uIENvbnRpbnVlIHRoZSBkaWZmIGZyb20gdGhlIHNpYmxpbmdcblx0XHQvLyBvZiBsYXN0IERPTSBjaGlsZCBvZiB0aGlzIGNoaWxkIFZOb2RlXG5cdFx0bmV4dERvbSA9IGNoaWxkVk5vZGUuX25leHREb207XG5cblx0XHQvLyBFYWdlcmx5IGNsZWFudXAgX25leHREb20uIFdlIGRvbid0IG5lZWQgdG8gcGVyc2lzdCB0aGUgdmFsdWUgYmVjYXVzZVxuXHRcdC8vIGl0IGlzIG9ubHkgdXNlZCBieSBgZGlmZkNoaWxkcmVuYCB0byBkZXRlcm1pbmUgd2hlcmUgdG8gcmVzdW1lIHRoZSBkaWZmIGFmdGVyXG5cdFx0Ly8gZGlmZmluZyBDb21wb25lbnRzIGFuZCBGcmFnbWVudHMuIE9uY2Ugd2Ugc3RvcmUgaXQgdGhlIG5leHRET00gbG9jYWwgdmFyLCB3ZVxuXHRcdC8vIGNhbiBjbGVhbiB1cCB0aGUgcHJvcGVydHlcblx0XHRjaGlsZFZOb2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xuXHR9IGVsc2UgaWYgKFxuXHRcdG9sZFZOb2RlID09IG51bGwgfHxcblx0XHRuZXdEb20gIT0gb2xkRG9tIHx8XG5cdFx0bmV3RG9tLnBhcmVudE5vZGUgPT0gbnVsbFxuXHQpIHtcblx0XHRvdXRlcjogaWYgKG9sZERvbSA9PSBudWxsIHx8IG9sZERvbS5wYXJlbnROb2RlICE9PSBwYXJlbnREb20pIHtcblx0XHRcdHBhcmVudERvbS5hcHBlbmRDaGlsZChuZXdEb20pO1xuXHRcdFx0bmV4dERvbSA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGBqPG9sZENoaWxkcmVuTGVuZ3RoOyBqKz0yYCBpcyBhbiBhbHRlcm5hdGl2ZSB0byBgaisrPG9sZENoaWxkcmVuTGVuZ3RoLzJgXG5cdFx0XHRmb3IgKFxuXHRcdFx0XHRsZXQgc2liRG9tID0gb2xkRG9tLCBqID0gMDtcblx0XHRcdFx0KHNpYkRvbSA9IHNpYkRvbS5uZXh0U2libGluZykgJiYgaiA8IG9sZENoaWxkcmVuLmxlbmd0aDtcblx0XHRcdFx0aiArPSAxXG5cdFx0XHQpIHtcblx0XHRcdFx0aWYgKHNpYkRvbSA9PSBuZXdEb20pIHtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdEb20sIG9sZERvbSk7XG5cdFx0XHRuZXh0RG9tID0gb2xkRG9tO1xuXHRcdH1cblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgcHJlLWNhbGN1bGF0ZWQgdGhlIG5leHRET00gbm9kZSwgdXNlIGl0LiBFbHNlIGNhbGN1bGF0ZSBpdCBub3dcblx0Ly8gU3RyaWN0bHkgY2hlY2sgZm9yIGB1bmRlZmluZWRgIGhlcmUgY3V6IGBudWxsYCBpcyBhIHZhbGlkIHZhbHVlIG9mIGBuZXh0RG9tYC5cblx0Ly8gU2VlIG1vcmUgZGV0YWlsIGluIGNyZWF0ZS1lbGVtZW50LmpzOmNyZWF0ZVZOb2RlXG5cdGlmIChuZXh0RG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHRvbGREb20gPSBuZXh0RG9tO1xuXHR9IGVsc2Uge1xuXHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0fVxuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIGdldExhc3REb20odm5vZGUpIHtcblx0aWYgKHZub2RlLnR5cGUgPT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUudHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gdm5vZGUuX2RvbTtcblx0fVxuXG5cdGlmICh2bm9kZS5fY2hpbGRyZW4pIHtcblx0XHRmb3IgKGxldCBpID0gdm5vZGUuX2NoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB2bm9kZS5fY2hpbGRyZW5baV07XG5cdFx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdFx0bGV0IGxhc3REb20gPSBnZXRMYXN0RG9tKGNoaWxkKTtcblx0XHRcdFx0aWYgKGxhc3REb20pIHtcblx0XHRcdFx0XHRyZXR1cm4gbGFzdERvbTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIERpZmYgdGhlIG9sZCBhbmQgbmV3IHByb3BlcnRpZXMgb2YgYSBWTm9kZSBhbmQgYXBwbHkgY2hhbmdlcyB0byB0aGUgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gYXBwbHlcbiAqIGNoYW5nZXMgdG9cbiAqIEBwYXJhbSB7b2JqZWN0fSBuZXdQcm9wcyBUaGUgbmV3IHByb3BzXG4gKiBAcGFyYW0ge29iamVjdH0gb2xkUHJvcHMgVGhlIG9sZCBwcm9wc1xuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaHlkcmF0ZSBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uIG1vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZQcm9wcyhkb20sIG5ld1Byb3BzLCBvbGRQcm9wcywgaXNTdmcsIGh5ZHJhdGUpIHtcblx0bGV0IGk7XG5cblx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0aWYgKGkgIT09ICdjaGlsZHJlbicgJiYgaSAhPT0gJ2tleScgJiYgIShpIGluIG5ld1Byb3BzKSkge1xuXHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBudWxsLCBvbGRQcm9wc1tpXSwgaXNTdmcpO1xuXHRcdH1cblx0fVxuXG5cdGZvciAoaSBpbiBuZXdQcm9wcykge1xuXHRcdGlmIChcblx0XHRcdCghaHlkcmF0ZSB8fCB0eXBlb2YgbmV3UHJvcHNbaV0gPT0gJ2Z1bmN0aW9uJykgJiZcblx0XHRcdGkgIT09ICdjaGlsZHJlbicgJiZcblx0XHRcdGkgIT09ICdrZXknICYmXG5cdFx0XHRpICE9PSAndmFsdWUnICYmXG5cdFx0XHRpICE9PSAnY2hlY2tlZCcgJiZcblx0XHRcdG9sZFByb3BzW2ldICE9PSBuZXdQcm9wc1tpXVxuXHRcdCkge1xuXHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBuZXdQcm9wc1tpXSwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoc3R5bGUsIGtleSwgdmFsdWUpIHtcblx0aWYgKGtleVswXSA9PT0gJy0nKSB7XG5cdFx0c3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZSk7XG5cdH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCkge1xuXHRcdHN0eWxlW2tleV0gPSAnJztcblx0fSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgfHwgSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3Qoa2V5KSkge1xuXHRcdHN0eWxlW2tleV0gPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWUgKyAncHgnO1xuXHR9XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgdmFsdWUgb24gYSBET00gbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gbm9kZSB0byBtb2RpZnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCB0aGUgcHJvcGVydHkgdG9cbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWUgVGhlIG9sZCB2YWx1ZSB0aGUgcHJvcGVydHkgaGFkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGUgb3Igbm90XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9wZXJ0eShkb20sIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSwgaXNTdmcpIHtcblx0bGV0IHVzZUNhcHR1cmU7XG5cblx0bzogaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodHlwZW9mIG9sZFZhbHVlID09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvbS5zdHlsZS5jc3NUZXh0ID0gb2xkVmFsdWUgPSAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9sZFZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiBvbGRWYWx1ZSkge1xuXHRcdFx0XHRcdGlmICghKHZhbHVlICYmIG5hbWUgaW4gdmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRcdGZvciAobmFtZSBpbiB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICghb2xkVmFsdWUgfHwgdmFsdWVbbmFtZV0gIT09IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09PSAnbycgJiYgbmFtZVsxXSA9PT0gJ24nKSB7XG5cdFx0dXNlQ2FwdHVyZSA9IG5hbWUgIT09IChuYW1lID0gbmFtZS5yZXBsYWNlKC9DYXB0dXJlJC8sICcnKSk7XG5cblx0XHQvLyBJbmZlciBjb3JyZWN0IGNhc2luZyBmb3IgRE9NIGJ1aWx0LWluIGV2ZW50czpcblx0XHRpZiAobmFtZS50b0xvd2VyQ2FzZSgpIGluIGRvbSkgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdFx0ZG9tLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGhhbmRsZXIgPSB1c2VDYXB0dXJlID8gZXZlbnRQcm94eUNhcHR1cmUgOiBldmVudFByb3h5O1xuXHRcdFx0ZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgIT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRpZiAoaXNTdmcpIHtcblx0XHRcdC8vIE5vcm1hbGl6ZSBpbmNvcnJlY3QgcHJvcCB1c2FnZSBmb3IgU1ZHOlxuXHRcdFx0Ly8gLSB4bGluazpocmVmIC8geGxpbmtIcmVmIC0tPiBocmVmICh4bGluazpocmVmIHdhcyByZW1vdmVkIGZyb20gU1ZHIGFuZCBpc24ndCBuZWVkZWQpXG5cdFx0XHQvLyAtIGNsYXNzTmFtZSAtLT4gY2xhc3Ncblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL3hsaW5rKEh8OmgpLywgJ2gnKS5yZXBsYWNlKC9zTmFtZSQvLCAncycpO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRuYW1lICE9PSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9PSAnaGVpZ2h0JyAmJlxuXHRcdFx0bmFtZSAhPT0gJ2hyZWYnICYmXG5cdFx0XHRuYW1lICE9PSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT09ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT09ICd0YWJJbmRleCcgJiZcblx0XHRcdG5hbWUgIT09ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgaW4gZG9tXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkb21bbmFtZV0gPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0Ly8gbGFiZWxsZWQgYnJlYWsgaXMgMWIgc21hbGxlciBoZXJlIHRoYW4gYSByZXR1cm4gc3RhdGVtZW50IChzb3JyeSlcblx0XHRcdFx0YnJlYWsgbztcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbm90aW9uIG9mIGJvb2xlYW4gdmFsdWVzLlxuXHRcdC8vIFRoZSB2YWx1ZSBgZmFsc2VgIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90XG5cdFx0Ly8gZXhpc3Rpbmcgb24gdGhlIERPTSwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW5cblx0XHQvLyBBUklBLWF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB1cyB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBWRE9NIGZyYW1ld29ya3MgYWxzbyBhbHdheXMgc3RyaW5naWZ5IGBmYWxzZWAuXG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lLmluZGV4T2YoJy0nKSAhPSAtMSkpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuXHRyZXR1cm4gdGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIGZhbHNlXShvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xufVxuXG5mdW5jdGlvbiBldmVudFByb3h5Q2FwdHVyZShlKSB7XG5cdHJldHVybiB0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgdHJ1ZV0ob3B0aW9ucy5ldmVudCA/IG9wdGlvbnMuZXZlbnQoZSkgOiBlKTtcbn1cbiIsImltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgeyBkaWZmQ2hpbGRyZW4gfSBmcm9tICcuL2NoaWxkcmVuJztcbmltcG9ydCB7IGRpZmZQcm9wcywgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIERpZmYgdHdvIHZpcnR1YWwgbm9kZXMgYW5kIGFwcGx5IHByb3BlciBjaGFuZ2VzIHRvIHRoZSBET01cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgcGFyZW50IG9mIHRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0LiBNb2RpZmllZCBieSBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBlbGVtZW50IGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50Pn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IG9sZERvbSBUaGUgY3VycmVudCBhdHRhY2hlZCBET01cbiAqIGVsZW1lbnQgYW55IG5ldyBkb20gZWxlbWVudHMgc2hvdWxkIGJlIHBsYWNlZCBhcm91bmQuIExpa2VseSBgbnVsbGAgb24gZmlyc3RcbiAqIHJlbmRlciAoZXhjZXB0IHdoZW4gaHlkcmF0aW5nKS4gQ2FuIGJlIGEgc2libGluZyBET00gZWxlbWVudCB3aGVuIGRpZmZpbmdcbiAqIEZyYWdtZW50cyB0aGF0IGhhdmUgc2libGluZ3MuIEluIG1vc3QgY2FzZXMsIGl0IHN0YXJ0cyBvdXQgYXMgYG9sZENoaWxkcmVuWzBdLl9kb21gLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNIeWRyYXRpbmddIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoXG5cdHBhcmVudERvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRpc1N2Zyxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IHRtcCxcblx0XHRuZXdUeXBlID0gbmV3Vk5vZGUudHlwZTtcblxuXHQvLyBXaGVuIHBhc3NpbmcgdGhyb3VnaCBjcmVhdGVFbGVtZW50IGl0IGFzc2lnbnMgdGhlIG9iamVjdFxuXHQvLyBjb25zdHJ1Y3RvciBhcyB1bmRlZmluZWQuIFRoaXMgdG8gcHJldmVudCBKU09OLWluamVjdGlvbi5cblx0aWYgKG5ld1ZOb2RlLmNvbnN0cnVjdG9yICE9PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG5cdC8vIElmIHRoZSBwcmV2aW91cyBkaWZmIGJhaWxlZCBvdXQsIHJlc3VtZSBjcmVhdGluZy9oeWRyYXRpbmcuXG5cdGlmIChvbGRWTm9kZS5faHlkcmF0aW5nICE9IG51bGwpIHtcblx0XHRpc0h5ZHJhdGluZyA9IG9sZFZOb2RlLl9oeWRyYXRpbmc7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0Ly8gaWYgd2UgcmVzdW1lLCB3ZSB3YW50IHRoZSB0cmVlIHRvIGJlIFwidW5sb2NrZWRcIlxuXHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSBudWxsO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdHRyeSB7XG5cdFx0b3V0ZXI6IGlmICh0eXBlb2YgbmV3VHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgYywgaXNOZXcsIG9sZFByb3BzLCBvbGRTdGF0ZSwgc25hcHNob3QsIGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbjtcblx0XHRcdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXG5cdFx0XHQvLyBOZWNlc3NhcnkgZm9yIGNyZWF0ZUNvbnRleHQgYXBpLiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgd2lsbCBwYXNzXG5cdFx0XHQvLyB0aGUgY29udGV4dCB2YWx1ZSBhcyBgdGhpcy5jb250ZXh0YCBqdXN0IGZvciB0aGlzIGNvbXBvbmVudC5cblx0XHRcdHRtcCA9IG5ld1R5cGUuY29udGV4dFR5cGU7XG5cdFx0XHRsZXQgcHJvdmlkZXIgPSB0bXAgJiYgZ2xvYmFsQ29udGV4dFt0bXAuX2lkXTtcblx0XHRcdGxldCBjb21wb25lbnRDb250ZXh0ID0gdG1wXG5cdFx0XHRcdD8gcHJvdmlkZXJcblx0XHRcdFx0XHQ/IHByb3ZpZGVyLnByb3BzLnZhbHVlXG5cdFx0XHRcdFx0OiB0bXAuX2RlZmF1bHRWYWx1ZVxuXHRcdFx0XHQ6IGdsb2JhbENvbnRleHQ7XG5cblx0XHRcdC8vIEdldCBjb21wb25lbnQgYW5kIHNldCBpdCB0byBgY2Bcblx0XHRcdGlmIChvbGRWTm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRcdGMgPSBuZXdWTm9kZS5fY29tcG9uZW50ID0gb2xkVk5vZGUuX2NvbXBvbmVudDtcblx0XHRcdFx0Y2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3BlbmRpbmdFcnJvcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEluc3RhbnRpYXRlIHRoZSBuZXcgY29tcG9uZW50XG5cdFx0XHRcdGlmICgncHJvdG90eXBlJyBpbiBuZXdUeXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVGhlIGNoZWNrIGFib3ZlIHZlcmlmaWVzIHRoYXQgbmV3VHlwZSBpcyBzdXBwb3NlIHRvIGJlIGNvbnN0cnVjdGVkXG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NvbXBvbmVudCA9IGMgPSBuZXcgbmV3VHlwZShuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEB0cy1pZ25vcmUgVHJ1c3QgbWUsIENvbXBvbmVudCBpbXBsZW1lbnRzIHRoZSBpbnRlcmZhY2Ugd2Ugd2FudFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IENvbXBvbmVudChuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdFx0Yy5jb25zdHJ1Y3RvciA9IG5ld1R5cGU7XG5cdFx0XHRcdFx0Yy5yZW5kZXIgPSBkb1JlbmRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocHJvdmlkZXIpIHByb3ZpZGVyLnN1YihjKTtcblxuXHRcdFx0XHRjLnByb3BzID0gbmV3UHJvcHM7XG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoYy5fbmV4dFN0YXRlID09IG51bGwpIHtcblx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYy5zdGF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKGMuX25leHRTdGF0ZSA9PSBjLnN0YXRlKSB7XG5cdFx0XHRcdFx0Yy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCBjLl9uZXh0U3RhdGUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXNzaWduKFxuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSxcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXdQcm9wcywgYy5fbmV4dFN0YXRlKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRvbGRQcm9wcyA9IGMucHJvcHM7XG5cdFx0XHRvbGRTdGF0ZSA9IGMuc3RhdGU7XG5cdFx0XHRjLl92bm9kZSA9IG5ld1ZOb2RlO1xuXG5cdFx0XHQvLyBJbnZva2UgcHJlLXJlbmRlciBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdFx0aWYgKGlzTmV3KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBudWxsICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuY29tcG9uZW50RGlkTW91bnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKSB8fFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIE1vcmUgaW5mbyBhYm91dCB0aGlzIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0pvdmlEZUNyb29jay9iZWM1ZjJjZTkzNTQ0ZDJlNjA3MGVmOGUwMDM2ZTRlOFxuXHRcdFx0XHRcdGlmIChuZXdWTm9kZS5fb3JpZ2luYWwgIT09IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIEluIGNhc2VzIG9mIGJhaWxpbmcgZHVlIHRvIHN0cmljdC1lcXVhbGl0eSB3ZSBoYXZlIHRvIHJlc2V0IGZvcmNlIGFzIHdlbGxcblx0XHRcdFx0XHRjLl9mb3JjZSA9IGZhbHNlO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uZm9yRWFjaCh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYy5fc3RhdGVDYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblxuXHRcdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50V2lsbFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVXBkYXRlKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXG5cdFx0XHRsZXQgcmVuZGVySG9vayA9IG9wdGlvbnMuX3JlbmRlcixcblx0XHRcdFx0Y291bnQgPSAwO1xuXHRcdFx0aWYgKCdwcm90b3R5cGUnIGluIG5ld1R5cGUgJiYgbmV3VHlwZS5wcm90b3R5cGUucmVuZGVyKSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjLl9zdGF0ZUNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdFx0dG1wID0gYy5yZW5kZXIoYy5wcm9wcywgYy5zdGF0ZSwgYy5jb250ZXh0KTtcblxuXHRcdFx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHR9IHdoaWxlIChjLl9kaXJ0eSAmJiArK2NvdW50IDwgMjUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXG5cdFx0XHRpZiAoYy5nZXRDaGlsZENvbnRleHQgIT0gbnVsbCkge1xuXHRcdFx0XHRnbG9iYWxDb250ZXh0ID0gYXNzaWduKGFzc2lnbih7fSwgZ2xvYmFsQ29udGV4dCksIGMuZ2V0Q2hpbGRDb250ZXh0KCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzTmV3ICYmIGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUgIT0gbnVsbCkge1xuXHRcdFx0XHRzbmFwc2hvdCA9IGMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUob2xkUHJvcHMsIG9sZFN0YXRlKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGlzVG9wTGV2ZWxGcmFnbWVudCA9XG5cdFx0XHRcdHRtcCAhPSBudWxsICYmIHRtcC50eXBlID09PSBGcmFnbWVudCAmJiB0bXAua2V5ID09IG51bGw7XG5cdFx0XHRsZXQgcmVuZGVyUmVzdWx0ID0gaXNUb3BMZXZlbEZyYWdtZW50ID8gdG1wLnByb3BzLmNoaWxkcmVuIDogdG1wO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0b2xkRG9tLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Yy5iYXNlID0gbmV3Vk5vZGUuX2RvbTtcblxuXHRcdFx0Ly8gV2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkIHRoaXMgVk5vZGUsIHVuc2V0IGFueSBzdG9yZWQgaHlkcmF0aW9uL2JhaWxvdXQgc3RhdGU6XG5cdFx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gbnVsbDtcblxuXHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0XHRjLl9wZW5kaW5nRXJyb3IgPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPT0gbnVsbCAmJlxuXHRcdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09PSBvbGRWTm9kZS5fb3JpZ2luYWxcblx0XHQpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gZGlmZkVsZW1lbnROb2Rlcyhcblx0XHRcdFx0b2xkVk5vZGUuX2RvbSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2Zyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0Ly8gaWYgaHlkcmF0aW5nIG9yIGNyZWF0aW5nIGluaXRpYWwgdHJlZSwgYmFpbG91dCBwcmVzZXJ2ZXMgRE9NOlxuXHRcdGlmIChpc0h5ZHJhdGluZyB8fCBleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkRG9tO1xuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9ICEhaXNIeWRyYXRpbmc7XG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbltleGNlc3NEb21DaGlsZHJlbi5pbmRleE9mKG9sZERvbSldID0gbnVsbDtcblx0XHRcdC8vIF4gY291bGQgcG9zc2libHkgYmUgc2ltcGxpZmllZCB0bzpcblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aCA9IDA7XG5cdFx0fVxuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgbmV3Vk5vZGUsIG9sZFZOb2RlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290KSB7XG5cdGlmIChvcHRpb25zLl9jb21taXQpIG9wdGlvbnMuX2NvbW1pdChyb290LCBjb21taXRRdWV1ZSk7XG5cblx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBSZXVzZSB0aGUgY29tbWl0UXVldWUgdmFyaWFibGUgaGVyZSBzbyB0aGUgdHlwZSBjaGFuZ2VzXG5cdFx0XHRjb21taXRRdWV1ZSA9IGMuX3JlbmRlckNhbGxiYWNrcztcblx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjYiA9PiB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgU2VlIGFib3ZlIHRzLWlnbm9yZSBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gZG9tIFRoZSBET00gZWxlbWVudCByZXByZXNlbnRpbmdcbiAqIHRoZSB2aXJ0dWFsIG5vZGVzIGJlaW5nIGRpZmZlZFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7Kn0gZXhjZXNzRG9tQ2hpbGRyZW5cbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50c1xuICogd2hpY2ggaGF2ZSBjYWxsYmFja3MgdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNIeWRyYXRpbmcgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvblxuICogQHJldHVybnMge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fVxuICovXG5mdW5jdGlvbiBkaWZmRWxlbWVudE5vZGVzKFxuXHRkb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmdcbikge1xuXHRsZXQgb2xkUHJvcHMgPSBvbGRWTm9kZS5wcm9wcztcblx0bGV0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG5cdGxldCBub2RlVHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cdGxldCBpID0gMDtcblxuXHQvLyBUcmFja3MgZW50ZXJpbmcgYW5kIGV4aXRpbmcgU1ZHIG5hbWVzcGFjZSB3aGVuIGRlc2NlbmRpbmcgdGhyb3VnaCB0aGUgdHJlZS5cblx0aWYgKG5vZGVUeXBlID09PSAnc3ZnJykgaXNTdmcgPSB0cnVlO1xuXG5cdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0Zm9yICg7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY2hpbGQgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0Y2hpbGQgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gY2hpbGQgPT09ICEhbm9kZVR5cGUgJiZcblx0XHRcdFx0KG5vZGVUeXBlID8gY2hpbGQubG9jYWxOYW1lID09PSBub2RlVHlwZSA6IGNoaWxkLm5vZGVUeXBlID09PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IGNoaWxkO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IG51bGw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gbnVsbCkge1xuXHRcdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gQHRzLWlnbm9yZSBjcmVhdGVUZXh0Tm9kZSByZXR1cm5zIFRleHQsIHdlIGV4cGVjdCBQcmVhY3RFbGVtZW50XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGlmIChpc1N2Zykge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0XHQnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFdlIGtub3cgYG5ld1ZOb2RlLnR5cGVgIGlzIGEgc3RyaW5nXG5cdFx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0XHRuZXdQcm9wcy5pcyAmJiBuZXdQcm9wc1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gbnVsbDtcblx0XHQvLyB3ZSBhcmUgY3JlYXRpbmcgYSBuZXcgbm9kZSwgc28gd2UgY2FuIGFzc3VtZSB0aGlzIGlzIGEgbmV3IHN1YnRyZWUgKGluIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aXNIeWRyYXRpbmcgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PT0gbnVsbCkge1xuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHdlIHN0aWxsIGhhdmUgdG8gc3BsaXQgbWVyZ2VkIHRleHQgZnJvbSBTU1InZCBIVE1MLlxuXHRcdGlmIChvbGRQcm9wcyAhPT0gbmV3UHJvcHMgJiYgKCFpc0h5ZHJhdGluZyB8fCBkb20uZGF0YSAhPT0gbmV3UHJvcHMpKSB7XG5cdFx0XHRkb20uZGF0YSA9IG5ld1Byb3BzO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHQvLyBJZiBleGNlc3NEb21DaGlsZHJlbiB3YXMgbm90IG51bGwsIHJlcG9wdWxhdGUgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50J3MgY2hpbGRyZW46XG5cdFx0ZXhjZXNzRG9tQ2hpbGRyZW4gPSBleGNlc3NEb21DaGlsZHJlbiAmJiBzbGljZS5jYWxsKGRvbS5jaGlsZE5vZGVzKTtcblxuXHRcdG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXG5cdFx0bGV0IG9sZEh0bWwgPSBvbGRQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblx0XHRsZXQgbmV3SHRtbCA9IG5ld1Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0Ly8gQnV0LCBpZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIHVzaW5nIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSlcblx0XHRcdC8vIHdlIHNob3VsZCByZWFkIHRoZSBleGlzdGluZyBET00gYXR0cmlidXRlcyB0byBkaWZmIHRoZW1cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdG9sZFByb3BzID0ge307XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG9sZFByb3BzW2RvbS5hdHRyaWJ1dGVzW2ldLm5hbWVdID0gZG9tLmF0dHJpYnV0ZXNbaV0udmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG5ld0h0bWwgfHwgb2xkSHRtbCkge1xuXHRcdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCFuZXdIdG1sIHx8XG5cdFx0XHRcdFx0KCghb2xkSHRtbCB8fCBuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCkgJiZcblx0XHRcdFx0XHRcdG5ld0h0bWwuX19odG1sICE9PSBkb20uaW5uZXJIVE1MKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRkb20uaW5uZXJIVE1MID0gKG5ld0h0bWwgJiYgbmV3SHRtbC5fX2h0bWwpIHx8ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGlmZlByb3BzKGRvbSwgbmV3UHJvcHMsIG9sZFByb3BzLCBpc1N2ZywgaXNIeWRyYXRpbmcpO1xuXG5cdFx0Ly8gSWYgdGhlIG5ldyB2bm9kZSBkaWRuJ3QgaGF2ZSBkYW5nZXJvdXNseVNldElubmVySFRNTCwgZGlmZiBpdHMgY2hpbGRyZW5cblx0XHRpZiAobmV3SHRtbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gW107XG5cdFx0fSBlbHNlIHtcblx0XHRcdGkgPSBuZXdWTm9kZS5wcm9wcy5jaGlsZHJlbjtcblx0XHRcdGRpZmZDaGlsZHJlbihcblx0XHRcdFx0ZG9tLFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KGkpID8gaSA6IFtpXSxcblx0XHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRcdG9sZFZOb2RlLFxuXHRcdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0XHRpc1N2ZyAmJiBub2RlVHlwZSAhPT0gJ2ZvcmVpZ25PYmplY3QnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuXG5cdFx0XHRcdFx0PyBleGNlc3NEb21DaGlsZHJlblswXVxuXHRcdFx0XHRcdDogb2xkVk5vZGUuX2NoaWxkcmVuICYmIGdldERvbVNpYmxpbmcob2xkVk5vZGUsIDApLFxuXHRcdFx0XHRpc0h5ZHJhdGluZ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIGFueSB2bm9kZS5cblx0XHRcdGlmIChleGNlc3NEb21DaGlsZHJlbiAhPSBudWxsKSB7XG5cdFx0XHRcdGZvciAoaSA9IGV4Y2Vzc0RvbUNoaWxkcmVuLmxlbmd0aDsgaS0tOyApIHtcblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW5baV0gIT0gbnVsbCkgcmVtb3ZlTm9kZShleGNlc3NEb21DaGlsZHJlbltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyAoYXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvbilcblx0XHRpZiAoIWlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCd2YWx1ZScgaW4gbmV3UHJvcHMgJiZcblx0XHRcdFx0KGkgPSBuZXdQcm9wcy52YWx1ZSkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHQvLyAjMjc1NiBGb3IgdGhlIDxwcm9ncmVzcz4tZWxlbWVudCB0aGUgaW5pdGlhbCB2YWx1ZSBpcyAwLFxuXHRcdFx0XHQvLyBkZXNwaXRlIHRoZSBhdHRyaWJ1dGUgbm90IGJlaW5nIHByZXNlbnQuIFdoZW4gdGhlIGF0dHJpYnV0ZVxuXHRcdFx0XHQvLyBpcyBtaXNzaW5nIHRoZSBwcm9ncmVzcyBiYXIgaXMgdHJlYXRlZCBhcyBpbmRldGVybWluYXRlLlxuXHRcdFx0XHQvLyBUbyBmaXggdGhhdCB3ZSdsbCBhbHdheXMgdXBkYXRlIGl0IHdoZW4gaXQgaXMgMCBmb3IgcHJvZ3Jlc3MgZWxlbWVudHNcblx0XHRcdFx0KGkgIT09IGRvbS52YWx1ZSB8fFxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ3Byb2dyZXNzJyAmJiAhaSkgfHxcblx0XHRcdFx0XHQvLyBUaGlzIGlzIG9ubHkgZm9yIElFIDExIHRvIGZpeCA8c2VsZWN0PiB2YWx1ZSBub3QgYmVpbmcgdXBkYXRlZC5cblx0XHRcdFx0XHQvLyBUbyBhdm9pZCBhIHN0YWxlIHNlbGVjdCB2YWx1ZSB3ZSBuZWVkIHRvIHNldCB0aGUgb3B0aW9uLnZhbHVlXG5cdFx0XHRcdFx0Ly8gYWdhaW4sIHdoaWNoIHRyaWdnZXJzIElFMTEgdG8gcmUtZXZhbHVhdGUgdGhlIHNlbGVjdCB2YWx1ZVxuXHRcdFx0XHRcdChub2RlVHlwZSA9PT0gJ29wdGlvbicgJiYgaSAhPT0gb2xkUHJvcHMudmFsdWUpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ3ZhbHVlJywgaSwgb2xkUHJvcHMudmFsdWUsIGZhbHNlKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0J2NoZWNrZWQnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMuY2hlY2tlZCkgIT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHRpICE9PSBkb20uY2hlY2tlZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgJ2NoZWNrZWQnLCBpLCBvbGRQcm9wcy5jaGVja2VkLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGRvbTtcbn1cblxuLyoqXG4gKiBJbnZva2Ugb3IgdXBkYXRlIGEgcmVmLCBkZXBlbmRpbmcgb24gd2hldGhlciBpdCBpcyBhIGZ1bmN0aW9uIG9yIG9iamVjdCByZWYuXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcmVmXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSByZWYodmFsdWUpO1xuXHRcdGVsc2UgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgdm5vZGUpO1xuXHR9XG59XG5cbi8qKlxuICogVW5tb3VudCBhIHZpcnR1YWwgbm9kZSBmcm9tIHRoZSB0cmVlIGFuZCBhcHBseSBET00gY2hhbmdlc1xuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IHBhcmVudFZOb2RlIFRoZSBwYXJlbnQgb2YgdGhlIFZOb2RlIHRoYXRcbiAqIGluaXRpYXRlZCB0aGUgdW5tb3VudFxuICogQHBhcmFtIHtib29sZWFufSBbc2tpcFJlbW92ZV0gRmxhZyB0aGF0IGluZGljYXRlcyB0aGF0IGEgcGFyZW50IG5vZGUgb2YgdGhlXG4gKiBjdXJyZW50IGVsZW1lbnQgaXMgYWxyZWFkeSBkZXRhY2hlZCBmcm9tIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KHZub2RlLCBwYXJlbnRWTm9kZSwgc2tpcFJlbW92ZSkge1xuXHRsZXQgcjtcblx0aWYgKG9wdGlvbnMudW5tb3VudCkgb3B0aW9ucy51bm1vdW50KHZub2RlKTtcblxuXHRpZiAoKHIgPSB2bm9kZS5yZWYpKSB7XG5cdFx0aWYgKCFyLmN1cnJlbnQgfHwgci5jdXJyZW50ID09PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBudWxsLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gbnVsbCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IG51bGw7XG5cdFx0dm5vZGUuX2NvbXBvbmVudCA9IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jaGlsZHJlbikpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChyW2ldKSB7XG5cdFx0XHRcdHVubW91bnQoXG5cdFx0XHRcdFx0cltpXSxcblx0XHRcdFx0XHRwYXJlbnRWTm9kZSxcblx0XHRcdFx0XHRza2lwUmVtb3ZlIHx8IHR5cGVvZiB2bm9kZS50eXBlICE9PSAnZnVuY3Rpb24nXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFza2lwUmVtb3ZlICYmIHZub2RlLl9kb20gIT0gbnVsbCkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHQvLyBNdXN0IGJlIHNldCB0byBgdW5kZWZpbmVkYCB0byBwcm9wZXJseSBjbGVhbiB1cCBgX25leHREb21gXG5cdC8vIGZvciB3aGljaCBgbnVsbGAgaXMgYSB2YWxpZCB2YWx1ZS4gU2VlIGNvbW1lbnQgaW4gYGNyZWF0ZS1lbGVtZW50LmpzYFxuXHR2bm9kZS5fcGFyZW50ID0gdm5vZGUuX2RvbSA9IHZub2RlLl9uZXh0RG9tID0gdW5kZWZpbmVkO1xufVxuXG4vKiogVGhlIGAucmVuZGVyKClgIG1ldGhvZCBmb3IgYSBQRkMgYmFja2luZyBpbnN0YW5jZS4gKi9cbmZ1bmN0aW9uIGRvUmVuZGVyKHByb3BzLCBzdGF0ZSwgY29udGV4dCkge1xuXHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvXG4gKiByZW5kZXIgaW50b1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50IHwgb2JqZWN0fSBbcmVwbGFjZU5vZGVdIE9wdGlvbmFsOiBBdHRlbXB0IHRvIHJlLXVzZSBhblxuICogZXhpc3RpbmcgRE9NIHRyZWUgcm9vdGVkIGF0IGByZXBsYWNlTm9kZWBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCByZXBsYWNlTm9kZSkge1xuXHRpZiAob3B0aW9ucy5fcm9vdCkgb3B0aW9ucy5fcm9vdCh2bm9kZSwgcGFyZW50RG9tKTtcblxuXHQvLyBXZSBhYnVzZSB0aGUgYHJlcGxhY2VOb2RlYCBwYXJhbWV0ZXIgaW4gYGh5ZHJhdGUoKWAgdG8gc2lnbmFsIGlmIHdlIGFyZSBpblxuXHQvLyBoeWRyYXRpb24gbW9kZSBvciBub3QgYnkgcGFzc2luZyB0aGUgYGh5ZHJhdGVgIGZ1bmN0aW9uIGluc3RlYWQgb2YgYSBET01cblx0Ly8gZWxlbWVudC4uXG5cdGxldCBpc0h5ZHJhdGluZyA9IHR5cGVvZiByZXBsYWNlTm9kZSA9PT0gJ2Z1bmN0aW9uJztcblxuXHQvLyBUbyBiZSBhYmxlIHRvIHN1cHBvcnQgY2FsbGluZyBgcmVuZGVyKClgIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lXG5cdC8vIERPTSBub2RlLCB3ZSBuZWVkIHRvIG9idGFpbiBhIHJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgdHJlZS4gV2UgZG9cblx0Ly8gdGhpcyBieSBhc3NpZ25pbmcgYSBuZXcgYF9jaGlsZHJlbmAgcHJvcGVydHkgdG8gRE9NIG5vZGVzIHdoaWNoIHBvaW50c1xuXHQvLyB0byB0aGUgbGFzdCByZW5kZXJlZCB0cmVlLiBCeSBkZWZhdWx0IHRoaXMgcHJvcGVydHkgaXMgbm90IHByZXNlbnQsIHdoaWNoXG5cdC8vIG1lYW5zIHRoYXQgd2UgYXJlIG1vdW50aW5nIGEgbmV3IHRyZWUgZm9yIHRoZSBmaXJzdCB0aW1lLlxuXHRsZXQgb2xkVk5vZGUgPSBpc0h5ZHJhdGluZ1xuXHRcdD8gbnVsbFxuXHRcdDogKHJlcGxhY2VOb2RlICYmIHJlcGxhY2VOb2RlLl9jaGlsZHJlbikgfHwgcGFyZW50RG9tLl9jaGlsZHJlbjtcblxuXHR2bm9kZSA9IChcblx0XHQoIWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlKSB8fFxuXHRcdHBhcmVudERvbVxuXHQpLl9jaGlsZHJlbiA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdO1xuXHRkaWZmKFxuXHRcdHBhcmVudERvbSxcblx0XHQvLyBEZXRlcm1pbmUgdGhlIG5ldyB2bm9kZSB0cmVlIGFuZCBzdG9yZSBpdCBvbiB0aGUgRE9NIGVsZW1lbnQgb25cblx0XHQvLyBvdXIgY3VzdG9tIGBfY2hpbGRyZW5gIHByb3BlcnR5LlxuXHRcdHZub2RlLFxuXHRcdG9sZFZOb2RlIHx8IEVNUFRZX09CSixcblx0XHRFTVBUWV9PQkosXG5cdFx0cGFyZW50RG9tLm93bmVyU1ZHRWxlbWVudCAhPT0gdW5kZWZpbmVkLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHQ/IG51bGxcblx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGRcblx0XHRcdD8gc2xpY2UuY2FsbChwYXJlbnREb20uY2hpbGROb2Rlcylcblx0XHRcdDogbnVsbCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdD8gb2xkVk5vZGUuX2RvbVxuXHRcdFx0OiBwYXJlbnREb20uZmlyc3RDaGlsZCxcblx0XHRpc0h5ZHJhdGluZ1xuXHQpO1xuXG5cdC8vIEZsdXNoIGFsbCBxdWV1ZWQgZWZmZWN0c1xuXHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCB2bm9kZSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIERPTSBlbGVtZW50IHdpdGggZGF0YSBmcm9tIGEgUHJlYWN0IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0b1xuICogdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwiaW1wb3J0IHsgYXNzaWduLCBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuXG4vKipcbiAqIENsb25lcyB0aGUgZ2l2ZW4gVk5vZGUsIG9wdGlvbmFsbHkgYWRkaW5nIGF0dHJpYnV0ZXMvcHJvcHMgYW5kIHJlcGxhY2luZyBpdHMgY2hpbGRyZW4uXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBET00gZWxlbWVudCB0byBjbG9uZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIEF0dHJpYnV0ZXMvcHJvcHMgdG8gYWRkIHdoZW4gY2xvbmluZ1xuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZHJlbj59IHJlc3QgQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIHdpbGwgYmUgdXNlZCBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUoXG5cdFx0dm5vZGUudHlwZSxcblx0XHRub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5IHx8IHZub2RlLmtleSxcblx0XHRyZWYgfHwgdm5vZGUucmVmLFxuXHRcdG51bGxcblx0KTtcbn1cbiIsIi8qKlxuICogRmluZCB0aGUgY2xvc2VzdCBlcnJvciBib3VuZGFyeSB0byBhIHRocm93biBlcnJvciBhbmQgY2FsbCBpdFxuICogQHBhcmFtIHtvYmplY3R9IGVycm9yIFRoZSB0aHJvd24gdmFsdWVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdGhhdCB0aHJld1xuICogdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0IGZvciB1bm1vdW50aW5nIHdoZW4gdGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZyB1bm1vdW50ZWQpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gW29sZFZOb2RlXVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuRXJyb3JJbmZvfSBbZXJyb3JJbmZvXVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NhdGNoRXJyb3IoZXJyb3IsIHZub2RlLCBvbGRWTm9kZSwgZXJyb3JJbmZvKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCwgY3RvciwgaGFuZGxlZDtcblxuXHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgIWNvbXBvbmVudC5fcHJvY2Vzc2luZ0V4Y2VwdGlvbikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y3RvciA9IGNvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuXHRcdFx0XHRpZiAoY3RvciAmJiBjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LnNldFN0YXRlKGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoICE9IG51bGwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbyB8fCB7fSk7XG5cdFx0XHRcdFx0aGFuZGxlZCA9IGNvbXBvbmVudC5fZGlydHk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUaGlzIGlzIGFuIGVycm9yIGJvdW5kYXJ5LiBNYXJrIGl0IGFzIGhhdmluZyBiYWlsZWQgb3V0LCBhbmQgd2hldGhlciBpdCB3YXMgbWlkLWh5ZHJhdGlvbi5cblx0XHRcdFx0aWYgKGhhbmRsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGNvbXBvbmVudC5fcGVuZGluZ0Vycm9yID0gY29tcG9uZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRlcnJvciA9IGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgZXJyb3I7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdwcmVhY3QnKS5WTm9kZX0gVk5vZGUgKi9cblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRyZWYsXG5cdFx0aTtcblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ3JlZicpIHtcblx0XHRcdHJlZiA9IHByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB2bm9kZSA9IHtcblx0XHR0eXBlLFxuXHRcdHByb3BzOiBub3JtYWxpemVkUHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHRfbmV4dERvbTogdW5kZWZpbmVkLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0X2h5ZHJhdGluZzogbnVsbCxcblx0XHRjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuXHRcdF9vcmlnaW5hbDogLS12bm9kZUlkLFxuXHRcdF9fc291cmNlLFxuXHRcdF9fc2VsZlxuXHR9O1xuXG5cdC8vIElmIGEgQ29tcG9uZW50IFZOb2RlLCBjaGVjayBmb3IgYW5kIGFwcGx5IGRlZmF1bHRQcm9wcy5cblx0Ly8gTm90ZTogYHR5cGVgIGlzIG9mdGVuIGEgU3RyaW5nLCBhbmQgY2FuIGJlIGB1bmRlZmluZWRgIGluIGRldmVsb3BtZW50LlxuXHRpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgJiYgKHJlZiA9IHR5cGUuZGVmYXVsdFByb3BzKSkge1xuXHRcdGZvciAoaSBpbiByZWYpXG5cdFx0XHRpZiAodHlwZW9mIG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gcmVmW2ldO1xuXHRcdFx0fVxuXHR9XG5cblx0aWYgKG9wdGlvbnMudm5vZGUpIG9wdGlvbnMudm5vZGUodm5vZGUpO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudFxufTtcbiIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICdwcmVhY3QnO1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SW5kZXg7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xubGV0IHByZXZpb3VzQ29tcG9uZW50O1xuXG4vKiogQHR5cGUge251bWJlcn0gKi9cbmxldCBjdXJyZW50SG9vayA9IDA7XG5cbi8qKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn0gKi9cbmxldCBhZnRlclBhaW50RWZmZWN0cyA9IFtdO1xuXG5sZXQgRU1QVFkgPSBbXTtcblxubGV0IG9sZEJlZm9yZURpZmYgPSBvcHRpb25zLl9kaWZmO1xubGV0IG9sZEJlZm9yZVJlbmRlciA9IG9wdGlvbnMuX3JlbmRlcjtcbmxldCBvbGRBZnRlckRpZmYgPSBvcHRpb25zLmRpZmZlZDtcbmxldCBvbGRDb21taXQgPSBvcHRpb25zLl9jb21taXQ7XG5sZXQgb2xkQmVmb3JlVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcblxuY29uc3QgUkFGX1RJTUVPVVQgPSAxMDA7XG5sZXQgcHJldlJhZjtcblxub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3JlbmRlciA9IHZub2RlID0+IHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikgb2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcblx0Y3VycmVudEluZGV4ID0gMDtcblxuXHRjb25zdCBob29rcyA9IGN1cnJlbnRDb21wb25lbnQuX19ob29rcztcblx0aWYgKGhvb2tzKSB7XG5cdFx0aWYgKHByZXZpb3VzQ29tcG9uZW50ID09PSBjdXJyZW50Q29tcG9uZW50KSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0aG9va3MuX2xpc3QuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdGlmIChob29rSXRlbS5fbmV4dFZhbHVlKSB7XG5cdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRob29rSXRlbS5fcGVuZGluZ1ZhbHVlID0gRU1QVFk7XG5cdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LmZvckVhY2goaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdH1cblx0XHRcdGlmIChob29rSXRlbS5fcGVuZGluZ1ZhbHVlICE9PSBFTVBUWSkge1xuXHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fcGVuZGluZ1ZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdWYWx1ZSA9IEVNUFRZO1xuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG5vcHRpb25zLl9jb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XG5cdGNvbW1pdFF1ZXVlLnNvbWUoY29tcG9uZW50ID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gY29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MuZmlsdGVyKGNiID0+XG5cdFx0XHRcdGNiLl92YWx1ZSA/IGludm9rZUVmZmVjdChjYikgOiB0cnVlXG5cdFx0XHQpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MpIGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fSk7XG5cdFx0XHRjb21taXRRdWV1ZSA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChvbGRDb21taXQpIG9sZENvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUpO1xufTtcblxub3B0aW9ucy51bm1vdW50ID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlVW5tb3VudCkgb2xkQmVmb3JlVW5tb3VudCh2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGxldCBoYXNFcnJvcmVkO1xuXHRcdGMuX19ob29rcy5fbGlzdC5mb3JFYWNoKHMgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aW52b2tlQ2xlYW51cChzKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0aGFzRXJyb3JlZCA9IGU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Yy5fX2hvb2tzID0gdW5kZWZpbmVkO1xuXHRcdGlmIChoYXNFcnJvcmVkKSBvcHRpb25zLl9jYXRjaEVycm9yKGhhc0Vycm9yZWQsIGMuX3Zub2RlKTtcblx0fVxufTtcblxuLyoqXG4gKiBHZXQgYSBob29rJ3Mgc3RhdGUgZnJvbSB0aGUgY3VycmVudENvbXBvbmVudFxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIFRoZSBpbmRleCBvZiB0aGUgaG9vayB0byBnZXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGdldEhvb2tTdGF0ZShpbmRleCwgdHlwZSkge1xuXHRpZiAob3B0aW9ucy5faG9vaykge1xuXHRcdG9wdGlvbnMuX2hvb2soY3VycmVudENvbXBvbmVudCwgaW5kZXgsIGN1cnJlbnRIb29rIHx8IHR5cGUpO1xuXHR9XG5cdGN1cnJlbnRIb29rID0gMDtcblxuXHQvLyBMYXJnZWx5IGluc3BpcmVkIGJ5OlxuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvZjZiZTczNDY4ZTZlYzQ2YjBmZjVhYTNjYzRjOWJhZjcyYTI5MDI1YS9zcmMvaG9va3MvY29yZV9ob29rcy5tanNcblx0Ly8gKiBodHRwczovL2dpdGh1Yi5jb20vbWljaGFlbC1rbGVpbi9mdW5jeS5qcy9ibG9iLzY1MGJlYWE1OGM0M2MzM2E3NDgyMGEzYzk4YjNjNzA3OWNmMmUzMzMvc3JjL3JlbmRlcmVyLm1qc1xuXHQvLyBPdGhlciBpbXBsZW1lbnRhdGlvbnMgdG8gbG9vayBhdDpcblx0Ly8gKiBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvbW5veDA1cXA4XG5cdGNvbnN0IGhvb2tzID1cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgfHxcblx0XHQoY3VycmVudENvbXBvbmVudC5fX2hvb2tzID0ge1xuXHRcdFx0X2xpc3Q6IFtdLFxuXHRcdFx0X3BlbmRpbmdFZmZlY3RzOiBbXVxuXHRcdH0pO1xuXG5cdGlmIChpbmRleCA+PSBob29rcy5fbGlzdC5sZW5ndGgpIHtcblx0XHRob29rcy5fbGlzdC5wdXNoKHsgX3BlbmRpbmdWYWx1ZTogRU1QVFkgfSk7XG5cdH1cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxhbnk+fSBbaW5pdGlhbFN0YXRlXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG5cdGN1cnJlbnRIb29rID0gMTtcblx0cmV0dXJuIHVzZVJlZHVjZXIoaW52b2tlT3JSZXR1cm4sIGluaXRpYWxTdGF0ZSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5SZWR1Y2VyPGFueSwgYW55Pn0gcmVkdWNlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5TdGF0ZVVwZGF0ZXI8YW55Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBhbnksIChzdGF0ZTogYW55KSA9PiB2b2lkIF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgaW5pdCkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlJlZHVjZXJIb29rU3RhdGV9ICovXG5cdGNvbnN0IGhvb2tTdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMik7XG5cdGhvb2tTdGF0ZS5fcmVkdWNlciA9IHJlZHVjZXI7XG5cdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQpIHtcblx0XHRob29rU3RhdGUuX3ZhbHVlID0gW1xuXHRcdFx0IWluaXQgPyBpbnZva2VPclJldHVybih1bmRlZmluZWQsIGluaXRpYWxTdGF0ZSkgOiBpbml0KGluaXRpYWxTdGF0ZSksXG5cblx0XHRcdGFjdGlvbiA9PiB7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tTdGF0ZS5fbmV4dFZhbHVlXG5cdFx0XHRcdFx0PyBob29rU3RhdGUuX25leHRWYWx1ZVswXVxuXHRcdFx0XHRcdDogaG9va1N0YXRlLl92YWx1ZVswXTtcblx0XHRcdFx0Y29uc3QgbmV4dFZhbHVlID0gaG9va1N0YXRlLl9yZWR1Y2VyKGN1cnJlbnRWYWx1ZSwgYWN0aW9uKTtcblxuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBuZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rU3RhdGUuX25leHRWYWx1ZSA9IFtuZXh0VmFsdWUsIGhvb2tTdGF0ZS5fdmFsdWVbMV1dO1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50LnNldFN0YXRlKHt9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF07XG5cblx0XHRob29rU3RhdGUuX2NvbXBvbmVudCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cblx0XHRpZiAoIWN1cnJlbnRDb21wb25lbnQuX2hhc1NjdUZyb21Ib29rcykge1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzID0gdHJ1ZTtcblx0XHRcdGNvbnN0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblxuXHRcdFx0Ly8gVGhpcyBTQ1UgaGFzIHRoZSBwdXJwb3NlIG9mIGJhaWxpbmcgb3V0IGFmdGVyIHJlcGVhdGVkIHVwZGF0ZXNcblx0XHRcdC8vIHRvIHN0YXRlZnVsIGhvb2tzLlxuXHRcdFx0Ly8gd2Ugc3RvcmUgdGhlIG5leHQgdmFsdWUgaW4gX25leHRWYWx1ZVswXSBhbmQga2VlcCBkb2luZyB0aGF0IGZvciBhbGxcblx0XHRcdC8vIHN0YXRlIHNldHRlcnMsIGlmIHdlIGhhdmUgbmV4dCBzdGF0ZXMgYW5kXG5cdFx0XHQvLyBhbGwgbmV4dCBzdGF0ZXMgd2l0aGluIGEgY29tcG9uZW50IGVuZCB1cCBiZWluZyBlcXVhbCB0byB0aGVpciBvcmlnaW5hbCBzdGF0ZVxuXHRcdFx0Ly8gd2UgYXJlIHNhZmUgdG8gYmFpbCBvdXQgZm9yIHRoaXMgc3BlY2lmaWMgY29tcG9uZW50LlxuXHRcdFx0Y3VycmVudENvbXBvbmVudC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwLCBzLCBjKSB7XG5cdFx0XHRcdGlmICghaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcykgcmV0dXJuIHRydWU7XG5cblx0XHRcdFx0Y29uc3Qgc3RhdGVIb29rcyA9IGhvb2tTdGF0ZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3QuZmlsdGVyKFxuXHRcdFx0XHRcdHggPT4geC5fY29tcG9uZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNvbnN0IGFsbEhvb2tzRW1wdHkgPSBzdGF0ZUhvb2tzLmV2ZXJ5KHggPT4gIXguX25leHRWYWx1ZSk7XG5cdFx0XHRcdC8vIFdoZW4gd2UgaGF2ZSBubyB1cGRhdGVkIGhvb2tzIGluIHRoZSBjb21wb25lbnQgd2UgaW52b2tlIHRoZSBwcmV2aW91cyBTQ1Ugb3Jcblx0XHRcdFx0Ly8gdHJhdmVyc2UgdGhlIFZET00gdHJlZSBmdXJ0aGVyLlxuXHRcdFx0XHRpZiAoYWxsSG9va3NFbXB0eSkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2U2N1ID8gcHJldlNjdS5jYWxsKHRoaXMsIHAsIHMsIGMpIDogdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBjb21wb25lbnRzIHdpdGggYSBuZXh0VmFsdWUgc2V0IHRoYXRcblx0XHRcdFx0Ly8gaGF2ZSB2YWx1ZXMgdGhhdCBhcmVuJ3QgZXF1YWwgdG8gb25lIGFub3RoZXIgdGhpcyBwdXNoZXNcblx0XHRcdFx0Ly8gdXMgdG8gdXBkYXRlIGZ1cnRoZXIgZG93biB0aGUgdHJlZVxuXHRcdFx0XHRsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG5cdFx0XHRcdHN0YXRlSG9va3MuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGhvb2tJdGVtLl92YWx1ZVswXTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdFx0XHRob29rSXRlbS5fbmV4dFZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSAhPT0gaG9va0l0ZW0uX3ZhbHVlWzBdKSBzaG91bGRVcGRhdGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHNob3VsZFVwZGF0ZSB8fCBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcFxuXHRcdFx0XHRcdD8gcHJldlNjdVxuXHRcdFx0XHRcdFx0PyBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYylcblx0XHRcdFx0XHRcdDogdHJ1ZVxuXHRcdFx0XHRcdDogZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHJlZihudWxsKTtcblx0XHRcdH0gZWxzZSBpZiAocmVmKSB7XG5cdFx0XHRcdHJlZi5jdXJyZW50ID0gY3JlYXRlSGFuZGxlKCk7XG5cdFx0XHRcdHJldHVybiAoKSA9PiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFyZ3MgPT0gbnVsbCA/IGFyZ3MgOiBhcmdzLmNvbmNhdChyZWYpXG5cdCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiBhbnl9IGZhY3RvcnlcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lbW8oZmFjdG9yeSwgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLk1lbW9Ib29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCA3KTtcblx0aWYgKGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl9wZW5kaW5nVmFsdWUgPSBmYWN0b3J5KCk7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdFx0cmV0dXJuIHN0YXRlLl9wZW5kaW5nVmFsdWU7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoZm9ybWF0dGVyID8gZm9ybWF0dGVyKHZhbHVlKSA6IHZhbHVlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7KGVycm9yOiBhbnksIGVycm9ySW5mbzogaW1wb3J0KCdwcmVhY3QnKS5FcnJvckluZm8pID0+IHZvaWR9IGNiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSWQoKSB7XG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAxMSk7XG5cdGlmICghc3RhdGUuX3ZhbHVlKSB7XG5cdFx0Ly8gR3JhYiBlaXRoZXIgdGhlIHJvb3Qgbm9kZSBvciB0aGUgbmVhcmVzdCBhc3luYyBib3VuZGFyeSBub2RlLlxuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsLmQnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuLyoqXG4gKiBBZnRlciBwYWludCBlZmZlY3RzIGNvbnN1bWVyLlxuICovXG5mdW5jdGlvbiBmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKCkge1xuXHRsZXQgY29tcG9uZW50O1xuXHR3aGlsZSAoKGNvbXBvbmVudCA9IGFmdGVyUGFpbnRFZmZlY3RzLnNoaWZ0KCkpKSB7XG5cdFx0aWYgKCFjb21wb25lbnQuX3BhcmVudERvbSB8fCAhY29tcG9uZW50Ll9faG9va3MpIGNvbnRpbnVlO1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUVmZmVjdCk7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRjb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgY29tcG9uZW50Ll92bm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmxldCBIQVNfUkFGID0gdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PSAnZnVuY3Rpb24nO1xuXG4vKipcbiAqIFNjaGVkdWxlIGEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgYnJvd3NlciBoYXMgYSBjaGFuY2UgdG8gcGFpbnQgYSBuZXcgZnJhbWUuXG4gKiBEbyB0aGlzIGJ5IGNvbWJpbmluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKHJBRikgKyBzZXRUaW1lb3V0IHRvIGludm9rZSBhIGNhbGxiYWNrIGFmdGVyXG4gKiB0aGUgbmV4dCBicm93c2VyIGZyYW1lLlxuICpcbiAqIEFsc28sIHNjaGVkdWxlIGEgdGltZW91dCBpbiBwYXJhbGxlbCB0byB0aGUgdGhlIHJBRiB0byBlbnN1cmUgdGhlIGNhbGxiYWNrIGlzIGludm9rZWRcbiAqIGV2ZW4gaWYgUkFGIGRvZXNuJ3QgZmlyZSAoZm9yIGV4YW1wbGUgaWYgdGhlIGJyb3dzZXIgdGFiIGlzIG5vdCB2aXNpYmxlKVxuICpcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJOZXh0RnJhbWUoY2FsbGJhY2spIHtcblx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0aWYgKEhBU19SQUYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRvbmUsIFJBRl9USU1FT1VUKTtcblxuXHRsZXQgcmFmO1xuXHRpZiAoSEFTX1JBRikge1xuXHRcdHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkb25lKTtcblx0fVxufVxuXG4vLyBOb3RlOiBpZiBzb21lb25lIHVzZWQgb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSxcbi8vIHRoZW4gZWZmZWN0cyB3aWxsIEFMV0FZUyBydW4gb24gdGhlIE5FWFQgZnJhbWUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBvbmUsIGluY3VycmluZyBhIH4xNm1zIGRlbGF5LlxuLy8gUGVyaGFwcyB0aGlzIGlzIG5vdCBzdWNoIGEgYmlnIGRlYWwuXG4vKipcbiAqIFNjaGVkdWxlIGFmdGVyUGFpbnRFZmZlY3RzIGZsdXNoIGFmdGVyIHRoZSBicm93c2VyIHBhaW50c1xuICogQHBhcmFtIHtudW1iZXJ9IG5ld1F1ZXVlTGVuZ3RoXG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKi9cbmZ1bmN0aW9uIGludm9rZUNsZWFudXAoaG9vaykge1xuXHQvLyBBIGhvb2sgY2xlYW51cCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRsZXQgY2xlYW51cCA9IGhvb2suX2NsZWFudXA7XG5cdGlmICh0eXBlb2YgY2xlYW51cCA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0aG9vay5fY2xlYW51cCA9IHVuZGVmaW5lZDtcblx0XHRjbGVhbnVwKCk7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBJbnZva2UgYSBIb29rJ3MgZWZmZWN0XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gaG9va1xuICovXG5mdW5jdGlvbiBpbnZva2VFZmZlY3QoaG9vaykge1xuXHQvLyBBIGhvb2sgY2FsbCBjYW4gaW50cm9kdWNlIGEgY2FsbCB0byByZW5kZXIgd2hpY2ggY3JlYXRlcyBhIG5ldyByb290LCB0aGlzIHdpbGwgY2FsbCBvcHRpb25zLnZub2RlXG5cdC8vIGFuZCBtb3ZlIHRoZSBjdXJyZW50Q29tcG9uZW50IGF3YXkuXG5cdGNvbnN0IGNvbXAgPSBjdXJyZW50Q29tcG9uZW50O1xuXHRob29rLl9jbGVhbnVwID0gaG9vay5fdmFsdWUoKTtcblx0Y3VycmVudENvbXBvbmVudCA9IGNvbXA7XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnlbXX0gb2xkQXJnc1xuICogQHBhcmFtIHthbnlbXX0gbmV3QXJnc1xuICovXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG5cdHJldHVybiAoXG5cdFx0IW9sZEFyZ3MgfHxcblx0XHRvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncy5sZW5ndGggfHxcblx0XHRuZXdBcmdzLnNvbWUoKGFyZywgaW5kZXgpID0+IGFyZyAhPT0gb2xkQXJnc1tpbmRleF0pXG5cdCk7XG59XG5cbmZ1bmN0aW9uIGludm9rZU9yUmV0dXJuKGFyZywgZikge1xuXHRyZXR1cm4gdHlwZW9mIGYgPT0gJ2Z1bmN0aW9uJyA/IGYoYXJnKSA6IGY7XG59XG4iLCJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG4vKiogVGFrZXMgYSBuZXcgdmFsdWUgb3IgYSBmdW5jdGlvbiB0aGF0IHVwZGF0ZXMgYSB2YWx1ZSwgdW5saWtlIGBPblBhc3NpdmVTdGF0ZUNoYW5nZWAgd2hpY2ggcmVhY3RzIHRvIHRob3NlIHVwZGF0ZXMgKi9cbmV4cG9ydCB0eXBlIFBhc3NpdmVTdGF0ZVVwZGF0ZXI8UywgUj4gPSAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb24/OiBSKSA9PiB2b2lkKTsvL1tSXSBleHRlbmRzIFtuZXZlcl0/ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbj86IFIpID0+IHZvaWQpIDogKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uOiBSKSA9PiB2b2lkKTtcbi8qKiBSZXNwb25kcyB0byBhIGNoYW5nZSBpbiBhIHZhbHVlLCB1bmxpa2UgYFBhc3NpdmVTdGF0ZVVwZGF0ZXJgIHdoaWNoIGNhdXNlcyB0aGUgdXBkYXRlcyAqL1xuZXhwb3J0IHR5cGUgT25QYXNzaXZlU3RhdGVDaGFuZ2U8UywgUj4gPSAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSk7Ly9bUl0gZXh0ZW5kcyBbbmV2ZXJdPyAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbj86IFIpID0+ICh2b2lkIHwgKCgpID0+IHZvaWQpKSkgOiAoKHZhbHVlOiBTLCBwcmV2VmFsdWU6IFMgfCB1bmRlZmluZWQsIHJlYXNvbjogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKTtcblxuXG5cbi8qKlxuICogRGVidWcgaG9vay5cbiAqIFxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cbiAqIFxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eTxUIGV4dGVuZHMgYW55W10+KHBhcmVudEhvb2tOYW1lOiBzdHJpbmcsIC4uLnZhbHVlczogVCkge1xuICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmPEFycmF5PFQ+PihbXSk7XG4gICAgY29uc3Qgc2hvd25FcnJvciA9IHVzZVJlZjxBcnJheTxib29sZWFuPj4oW10pO1xuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoIGFzIGFueSwgLTEpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuXG5cbiAgICBmdW5jdGlvbiB1c2VIZWxwZXI8VSBleHRlbmRzIFQ+KHZhbHVlOiBVLCBpOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpICsgMTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gPSB2YWx1ZTtcblxuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudFtpbmRleF0gIT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghc2hvd25FcnJvci5jdXJyZW50W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIGhvb2sgJHtwYXJlbnRIb29rTmFtZX0gcmVxdWlyZXMgc29tZSBvciBhbGwgb2YgaXRzIGFyZ3VtZW50cyByZW1haW4gc3RhYmxlIGFjcm9zcyBlYWNoIHJlbmRlcjsgcGxlYXNlIGNoZWNrIHRoZSAke2l9LWluZGV4ZWQgYXJndW1lbnQgKCR7aSA+PSAwPyBKU09OLnN0cmluZ2lmeSh2YWx1ZXNbaV0pIDogXCJ0aGUgbnVtYmVyIG9mIHN1cHBvc2VkbHkgc3RhYmxlIGVsZW1lbnRzXCJ9KS5gKTtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGY6ICgpID0+IHZvaWQpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxuICogXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqIFxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqIFxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKiBcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICogXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyBCeSBkZWZhdWx0LCBjaGFuZ2VzIHRvIHBhc3NpdmUgc3RhdGUgYXJlIGRlbGF5ZWQgYnkgb25lIHRpY2sgc28gdGhhdCB3ZSBvbmx5IGNoZWNrIGZvciBjaGFuZ2VzIGluIGEgc2ltaWxhciB3YXkgdG8gUHJlYWN0LiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgdG8sIGZvciBleGFtcGxlLCBhbHdheXMgcnVuIGltbWVkaWF0ZWx5IGluc3RlYWQuXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZTxULCBSPihvbkNoYW5nZTogdW5kZWZpbmVkIHwgbnVsbCB8IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQsIFI+LCBnZXRJbml0aWFsVmFsdWU/OiAoKSA9PiBULCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZz86IHR5cGVvZiBkZWJvdW5jZVJlbmRlcmluZyk6IHJlYWRvbmx5IFtnZXRTdGF0ZVN0YWJsZTogKCkgPT4gVCwgc2V0U3RhdGVTdGFibGU6IFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj5dIHtcblxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmPFQgfCB0eXBlb2YgVW5zZXQ+KFVuc2V0KTtcbiAgICBjb25zdCByZWFzb25SZWYgPSB1c2VSZWY8UiB8IHR5cGVvZiBVbnNldD4oVW5zZXQpO1xuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0ID0gdXNlUmVmPFQgfCAodHlwZW9mIFVuc2V0KT4oVW5zZXQpO1xuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZjx1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCk+KHVuZGVmaW5lZCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUGFzc2l2ZVN0YXRlXCIsIG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUsIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nKTtcblxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkISkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xuXG5cbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG5cbiAgICAgICAgLy8gVGhlIGZpcnN0IHRpbWUgd2UgY2FsbCBnZXRWYWx1ZSwgaWYgd2UgaGF2ZW4ndCBiZWVuIGdpdmVuIGEgdmFsdWUgeWV0LFxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldClcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCEgOiB2YWx1ZVJlZi5jdXJyZW50ISkgYXMgVDtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxuICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuXG5cbiAgICB9LCBbXSk7XG5cbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2s8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj4oKGFyZzogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PlswXSwgcmVhc29uOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+WzFdKSA9PiB7XG5cbiAgICAgICAgLy8gUmVnYXJkbGVzcyBvZiBhbnl0aGluZyBlbHNlLCBmaWd1cmUgb3V0IHdoYXQgb3VyIG5leHQgdmFsdWUgaXMgYWJvdXQgdG8gYmUuXG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IChhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpIDogYXJnKTtcblxuXG4gICAgICAgIGlmIChkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID09PSBVbnNldCAmJiBuZXh0VmFsdWUgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IHJlcXVlc3QgdG8gY2hhbmdlIHRoaXMgdmFsdWUuXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgcmVxdWVzdCBpbW1lZGlhdGVseSwgdGhlbiBxdWV1ZSB1cCB0aGUgb25DaGFuZ2UgZnVuY3Rpb25cblxuICAgICAgICAgICAgLy8gU2F2ZSBvdXIgY3VycmVudCB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBjb21wYXJlIGFnYWluc3QgaXQgbGF0ZXJcbiAgICAgICAgICAgIC8vIChpZiB3ZSBmbGlwIGJhY2sgdG8gdGhpcyBzdGF0ZSwgdGhlbiB3ZSB3b24ndCBzZW5kIHRoZSBvbkNoYW5nZSBmdW5jdGlvbilcbiAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSB2YWx1ZVJlZi5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJdCdzIGltcG9ydGFudCB0byB1cGRhdGUgdGhpcyBoZXJlIChhcyB3ZWxsIGFzIGJlbG93KSBpbiBjYXNlIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIGludm9rZXMgdGhpcyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHJlYXNvblJlZi5jdXJyZW50ID0gcmVhc29uIGFzIFI7XG5cbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIHRoZSBhY3R1YWwgY2hlY2sgYW5kIGludm9jYXRpb24gb2Ygb25DaGFuZ2UgbGF0ZXIgdG8gbGV0IGVmZmVjdHMgc2V0dGxlXG4gICAgICAgICAgICAoY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgPz8gZGVib3VuY2VSZW5kZXJpbmcpKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0UmVhc29uID0gcmVhc29uUmVmLmN1cnJlbnQhIGFzIFI7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dERlcCA9IHZhbHVlUmVmLmN1cnJlbnQhIGFzIFQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkRlcCA9IGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgIT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmVkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihuZXh0RGVwLCBwcmV2RGVwID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHByZXZEZXAsIG5leHRSZWFzb24pID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dERlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBmaW5pc2hlZCB3aXRoIGV2ZXJ5dGhpbmcsIHNvIG1hcmsgdXMgYXMgYmVpbmcgb24gYSBjbGVhbiBzbGF0ZSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdC5jdXJyZW50ID0gVW5zZXQ7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdIGFzIGNvbnN0O1xufVxuXG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuXG4vLyBFYXN5IGNvbnN0YW50cyBmb3IgZ2V0SW5pdGlhbFZhbHVlXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHsgcmV0dXJuIHRydWU7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5GYWxzZSgpIHsgcmV0dXJuIGZhbHNlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuTnVsbCgpIHsgcmV0dXJuIG51bGw7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5VbmRlZmluZWQoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5aZXJvKCkgeyByZXR1cm4gMDsgfVxuXG4vKiogXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byB1c2UgZm9yIGBjdXN0b21EZWJvdW5jZVJlbmRlcmluZ2AgdGhhdCBjYXVzZXMgYHVzZVBhc3NpdmVTdGF0ZWAgdG8gcnVuIGNoYW5nZXMgd2l0aG91dCB3YWl0aW5nIGEgdGljay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkltbWVkaWF0ZWx5KGY6ICgpID0+IHZvaWQpIHsgZigpOyB9IiwiXG5pbXBvcnQgeyBDb21wb25lbnQsIG9wdGlvbnMsIFZOb2RlIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgRWZmZWN0Q2FsbGJhY2ssIElucHV0cywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcblxuXG5cbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XG5cbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tNkJpdHMoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDBiMTAwMDAwMCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldIGFzIGNvbnN0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXG4gKiBOb3RlIHRoYXQgaWYgdGhlIHByZWZpeCBpcyAqZXhwbGljaXRseSogc2V0IHRvIFwiXCIsIHRoZW5cbiAqIElEcyB0aGF0IGFyZSBub3QgdmFsaWQgdW5kZXIgSFRNTDQgbWF5IGJlIGdlbmVyYXRlZC4gT2ggbm8uXG4gKiBcbiAqIFxuICogKFRoaXMgaXMgaGVyZSwgaW4gdGhpcyBwYXJ0aWN1bGFyIGZpbGUsIHRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llc1xuICogd2l0aG91dCBhbHNvIG1ha2luZyBhIHV0aWxpdGllcyBmaWxlLlxuICogT25jZSB3ZSBjYW4gcmVtb3ZlIHRoaXMgaG9vaywgd2UgY2FuIHB1dCB0aGlzIGZ1bmN0aW9uIGJhY2sgd2l0aCB1c2VSYW5kb21JZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke3ByZWZpeCA/PyBcImlkLVwifSR7cmFuZG9tNjRCaXRzKCkubWFwKG4gPT4gYmFzZTY0KG4pKS5qb2luKFwiXCIpfWA7XG59XG5cbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcDxzdHJpbmcsIElucHV0cyB8IHVuZGVmaW5lZD4oKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcDxzdHJpbmcsIHsgZWZmZWN0OiBFZmZlY3RDYWxsYmFjaywgaW5wdXRzPzogSW5wdXRzLCBjbGVhbnVwOiBudWxsIHwgdW5kZWZpbmVkIHwgdm9pZCB8ICgoKSA9PiB2b2lkKSB9PigpO1xuXG5cbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG4vL1xuLy8gLi4uXG4vLyBXZWxsLCB1c2VFdmVudCBvciB3aGF0ZXZlciBpcyBmaW5hbGx5LCBmaW5hbGx5IDQgeWVhcnMgbGF0ZXIgZmluYWxseSBoZXJlXG4vLyB3aGljaCBpcyBjb29sIGFuZCBtZWFucyB3ZSB3b24ndCBuZWVkIHRoaXMgYXQgYWxsIHNvb24uXG4vLyBTbyBmb3Igbm93IHdlJ2xsIHN0aWNrIHdpdGggZGlmZiB0byBwcmV2ZW50IGFueSB3ZWlyZG5lc3Mgd2l0aFxuLy8gY29tbWl0IGJlaW5nIHByaXZhdGUgYW5kIGFsbC5cbmNvbnN0IGNvbW1pdE5hbWUgPSBcImRpZmZlZFwiO1xuXG5jb25zdCBvcmlnaW5hbENvbW1pdCA9IG9wdGlvbnNbY29tbWl0TmFtZV0gYXMgKHZub2RlOiBWTm9kZSwgY29tbWl0UXVldWU6IENvbXBvbmVudFtdKSA9PiB2b2lkO1xuY29uc3QgbmV3Q29tbWl0OiB0eXBlb2Ygb3JpZ2luYWxDb21taXQgPSAoLi4uYXJncykgPT4ge1xuICAgIGZvciAoY29uc3QgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XG4gICAgICAgICAgICBlZmZlY3RJbmZvLmNsZWFudXAgPSBlZmZlY3RJbmZvLmVmZmVjdCgpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9SdW4uY2xlYXIoKTtcbiAgICBvcmlnaW5hbENvbW1pdD8uKC4uLmFyZ3MpO1xufVxub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdCBhcyBuZXZlclxuXG4vKipcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cbiAqIFxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxuICogXG4gKiBAcGFyYW0gZWZmZWN0IFxuICogQHBhcmFtIGlucHV0cyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3Q6IEVmZmVjdENhbGxiYWNrIHwgbnVsbCwgaW5wdXRzPzogSW5wdXRzKSB7XG5cbiAgICAvKigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSB1c2VSZWY8dm9pZCB8ICgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuICAgICAgICBjb25zdCBwcmV2QXJnc1JlZiA9IHVzZVJlZjxJbnB1dHM+KG51bGwhKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKGlucHV0cywgcHJldkFyZ3NSZWYuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHByZXZBcmdzUmVmLmN1cnJlbnQgPSBpbnB1dHMhO1xuICAgICAgICAgICAgaWYgKGNsZWFudXAuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSkoKTsqL1xuXG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSk7XG4gICAgaWYgKGVmZmVjdClcbiAgICAgICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzLCBjbGVhbnVwOiBudWxsIH0pO1xuICAgIGVsc2VcbiAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH0sIFtpZF0pXG59XG5cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3M/OiBJbnB1dHMsIG5ld0FyZ3M/OiBJbnB1dHMpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEoXG4gICAgICAgICFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcbiAgICApO1xufSIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanNcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlLmpzXCI7XG5cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG5cblxuLyoqXG4gKiBHaXZlbiBhbiBpbnB1dCB2YWx1ZSwgcmV0dXJucyBhIGNvbnN0YW50IGdldHRlciBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIFxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxuICogXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICogXG4gKiBAcGFyYW0gdmFsdWUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcjxUPih2YWx1ZTogVCkge1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPFQ+KFVuc2V0IGFzIHVua25vd24gYXMgVCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0pLCBbdmFsdWVdKTtcblxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmIChyZWYuY3VycmVudCBhcyB1bmtub3duID09PSBVbnNldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVHZXR0ZXIoKSBjYW5ub3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXIuJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG4gICAgfSwgW10pO1xufVxuXG5cbi8qKlxuICogTGlrZSBgdXNlU3RhYmxlR2V0dGVyYCwgYnV0ICoqKnJlcXVpcmVzKioqIHRoYXQgZXZlcnl0aGluZyBpbiB0aGUgb2JqZWN0IGlzIGFsc28gc3RhYmxlLFxuICogYW5kIGluIHR1cm4gcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpdHNlbGYgaXMgc3RhYmxlLlxuICogQHBhcmFtIHQgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZU9iamVjdDxUIGV4dGVuZHMge30+KHQ6IFQpOiBUIHtcbiAgICBjb25zdCBlID0gT2JqZWN0LmVudHJpZXModCk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlU3RhYmxlT2JqZWN0XCIsIGUubGVuZ3RoLCAuLi5lLm1hcCgoW19rLCB2XSkgPT4gdikpO1xuICAgIHJldHVybiB1c2VSZWYodCkuY3VycmVudDtcbn1cblxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgYXMgdXNlQ2FsbGJhY2tOYXRpdmUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHkgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZS5qc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXIuanNcIjtcblxuXG4vL2NvbnN0IF9JU19TVEFCTEVfR0VUVEVSID0gU3ltYm9sKFwiU1RBQkxFXCIpO1xuZXhwb3J0IHR5cGUgU3RhYmxlPFQ+ID0gVDsvLyAmIHsgW19TVEFCTEVdOiB0cnVlIH07XG5cbi8qKlxuICogV2Uga2VlcCB0cmFjayBvZiB3aGljaCBjYWxsYmFja3MgYXJlIHN0YWJsZSB3aXRoIGEgV2Vha01hcCBpbnN0ZWFkIG9mLCBzYXksIGEgc3ltYm9sIGJlY2F1c2VcbiAqIGB1c2VDYWxsYmFja2Agd2lsbCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0J3Mgc3RhYmxlIGFjcm9zcyAqYWxsKiByZW5kZXJzLCBtZWFuaW5nXG4gKiB3ZSBjYW4ndCB1c2Ugb3VyIGZ1bm55IFwiYGlmYCBvbmx5IHdvcmtzIGhlcmUgYmVjYXVzZSBpdCBkb2Vzbid0IGJyZWFrIHRoZSBydWxlcyBvZiBob29rc1wiIHRyaWNrIHRoZW4uXG4gKi9cbmNvbnN0IG1hcCA9IG5ldyBXZWFrTWFwPEZ1bmN0aW9uLCBib29sZWFuPigpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTdGFibGVHZXR0ZXI8VCBleHRlbmRzIEZ1bmN0aW9uPihvYmo6IFQpOiBvYmogaXMgU3RhYmxlPFQ+IHtcbiAgICByZXR1cm4gKG1hcC5nZXQob2JqKSA/PyBmYWxzZSk7XG59XG5mdW5jdGlvbiBzZXRJc1N0YWJsZUdldHRlcjxUIGV4dGVuZHMgKC4uLl9hcmdzOiBhbnlbXSkgPT4gYW55PihvYmo6IFQpOiBTdGFibGU8VD4ge1xuICAgIG1hcC5zZXQob2JqLCB0cnVlKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5cbi8qKlxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXG4gKiBcbiAqIEluIGdlbmVyYWwsIGp1c3QgcGFzcyB0aGUgZnVuY3Rpb24geW91IHdhbnQgdG8gYmUgc3RhYmxlIChidXQgeW91IGNhbid0IHVzZSBpdCBkdXJpbmcgcmVuZGVyLFxuICogc28gYmUgY2FyZWZ1bCEpLiAgQWx0ZXJuYXRpdmVseSwgaWYgeW91IG5lZWQgYSBzdGFibGUgY2FsbGJhY2sgdGhhdCAqKmNhbioqIGJlIHVzZWRcbiAqIGR1cmluZyByZW5kZXIsIHBhc3MgYW4gZW1wdHkgZGVwZW5kZW5jeSBhcnJheSBhbmQgaXQnbGwgYWN0IGxpa2UgYHVzZUNhbGxiYWNrYCB3aXRoIGFuXG4gKiBlbXB0eSBkZXBlbmRlbmN5IGFycmF5LCBidXQgd2l0aCB0aGUgYXNzb2NpYXRlZCBzdGFibGUgdHlwaW5nLiBJbiB0aGlzIGNhc2UsIHlvdSAqKiptdXN0KioqIGVuc3VyZSB0aGF0IGl0XG4gKiB0cnVseSBoYXMgbm8gZGVwZW5kZW5jaWVzL29ubHkgc3RhYmxlIGRlcGVuZGVuY2llcyEhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGFibGVDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24gfCBudWxsIHwgdW5kZWZpbmVkPihmbjogTm9uTnVsbGFibGU8VD4sIG5vRGVwcz86IFtdIHwgbnVsbCB8IHVuZGVmaW5lZCk6IFN0YWJsZTxOb25OdWxsYWJsZTxUPj4ge1xuICAgIHR5cGUgVSA9IChOb25OdWxsYWJsZTxUPiAmICgoLi4uYXJnczogYW55KSA9PiBhbnkpKTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VTdGFibGVDYWxsYmFja1wiLCBub0RlcHMgPT0gbnVsbCwgbm9EZXBzPy5sZW5ndGgsIGlzU3RhYmxlR2V0dGVyPFU+KGZuIGFzIFUpKTtcbiAgICBpZiAoaXNTdGFibGVHZXR0ZXIoZm4pKVxuICAgICAgICByZXR1cm4gZm47XG5cbiAgICBpZiAobm9EZXBzID09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrR2V0dGVyID0gdXNlU3RhYmxlR2V0dGVyPFU+KGZuKTtcbiAgICAgICAgcmV0dXJuIHNldElzU3RhYmxlR2V0dGVyKHVzZUNhbGxiYWNrTmF0aXZlPFU+KCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRDYWxsYmFja0dldHRlcigpKC4uLmFyZ3MpO1xuICAgICAgICB9KSBhcyBVLCBbXSkpO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmFzc2VydChub0RlcHMubGVuZ3RoID09PSAwKTtcbiAgICAgICAgcmV0dXJuIHNldElzU3RhYmxlR2V0dGVyKHVzZUNhbGxiYWNrTmF0aXZlPFU+KGZuLCBbXSkpO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbihsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdLCByaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNoaWxkcmVuXCJdKTogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2hpbGRyZW5cIl0ge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzO1xuICAgIH1cbiAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGhzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xudHlwZSBDID0gaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2xhc3NOYW1lXCJdO1xuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXG4gKiBEdXBsaWNhdGUgY2xhc3NlcyBhcmUgcmVtb3ZlZCAob3JkZXIgZG9lc24ndCBtYXR0ZXIgYW55d2F5KS5cbiAqIFxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxoc0NsYXNzOiBDLCBsaHNDbGFzc05hbWU6IEMsIHJoc0NsYXNzOiBDLCByaHNDbGFzc05hbWU6IEMpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuXG4gICAgaWYgKGxoc0NsYXNzIHx8IHJoc0NsYXNzIHx8IGxoc0NsYXNzTmFtZSB8fCByaHNDbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCByaHNDbGFzc2VzID0gY2xzeChyaHNDbGFzcywgcmhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IGFsbENsYXNzZXMgPSBuZXcgU2V0KFsuLi5BcnJheS5mcm9tKGxoc0NsYXNzZXMpLCAuLi5BcnJheS5mcm9tKHJoc0NsYXNzZXMpXSlcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaCwgUmVmLCBSZWZPYmplY3QgfSBmcm9tIFwicHJlYWN0XCI7XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1JlZjxUPihpbnN0YW5jZTogVCB8IG51bGwsIHJlZjogUmVmPFQ+IHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgKHJlZiBhcyBSZWZPYmplY3Q8VCB8IG51bGw+KS5jdXJyZW50ID0gaW5zdGFuY2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxocyBcbiAqIEBwYXJhbSByaHMgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PihyaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdLCBsaHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W1wicmVmXCJdKSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQhO1xuICAgIH1cbiAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcmhzITtcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocyE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjb21iaW5lZChjdXJyZW50OiBFIHwgbnVsbCkge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcblxuZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZTogc3RyaW5nKTogaC5KU1guQ1NTUHJvcGVydGllcyB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICogXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSwgcmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcInN0eWxlXCJdIHtcblxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzICYmICFyaHMpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocyAmJiAhcmhzKVxuICAgICAgICAgICAgcmV0dXJuIGxocztcbiAgICAgICAgaWYgKCFsaHMgJiYgcmhzKVxuICAgICAgICAgICAgcmV0dXJuIHJocztcblxuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoc3R5bGVTdHJpbmdUb09iamVjdChsaHMgYXMgc3RyaW5nKSwgcmhzKSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgc3R5bGVTdHJpbmdUb09iamVjdChyaHMgYXMgc3RyaW5nKSkgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHN9OyR7cmhzID8/IFwiXCJ9YCBhcyB1bmtub3duIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXG4gICAgICAgIC4uLihyaHMgPz8ge30pIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbiAgICB9IGFzIHVua25vd24gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xufVxuXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlLmpzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW4uanNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZENsYXNzZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNsYXNzZXMuanNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnMuanNcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzLmpzXCI7XG5cbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyOiB0eXBlb2YgY29uc29sZVtcImxvZ1wiXSkge1xuICAgIGxvZyA9IGxvZzJcbn1cblxuXG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICogXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIGxoczIgXG4gKiBAcGFyYW0gcmhzMiBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PiguLi5hbGxQcm9wczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1lcmdlZFByb3BzXCIsIGFsbFByb3BzLmxlbmd0aCk7XG4gICAgbGV0IHJldDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gPSB7fTtcbiAgICBmb3IgKGxldCBuZXh0UHJvcHMgb2YgYWxsUHJvcHMpIHtcbiAgICAgICAgcmV0ID0gdXNlTWVyZ2VkUHJvcHMyPEU+KHJldCwgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBrbm93bnMgPSBuZXcgU2V0PHN0cmluZz4oW1wiY2hpbGRyZW5cIiwgXCJyZWZcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGFzc1wiLCBcInN0eWxlXCJdKVxuXG5mdW5jdGlvbiBtZXJnZVVua25vd24oa2V5OiBzdHJpbmcsIGxoc1ZhbHVlOiB1bmtub3duLCByaHNWYWx1ZTogdW5rbm93bikge1xuXG4gICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlIGFzIG5ldmVyLCByaHNWYWx1ZSBhcyBuZXZlcik7XG4gICAgICAgIHJldHVybiBtZXJnZWQgYXMgbmV2ZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICBlbHNlIGlmICgocmhzVmFsdWUgYXMgYW55KSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICBsb2c/LihgVGhlIHByb3AgXCIke2tleX1cIiBjYW5ub3Qgc2ltdWx0YW5lb3VzbHkgYmUgdGhlIHZhbHVlcyAke2xoc1ZhbHVlfSBhbmQgJHtyaHNWYWx1ZX0uIE9uZSBtdXN0IGJlIGNob3NlbiBvdXRzaWRlIG9mIHVzZU1lcmdlZFByb3BzLmApO1xuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uLlxuICogXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgbW9zdCBjb21tb25seSBjYWxsZWQgZnVuY3Rpb25zIGluIHRoaXMgYW5kIGNvbnN1bWVyIGxpYnJhcmllcyxcbiAqIHNvIGl0IHRyYWRlcyBhIGJpdCBvZiByZWFkYWJpbGl0eSBmb3Igc3BlZWQgKGkuZS4gd2UgZG9uJ3QgZGVjb21wb3NlIG9iamVjdHMgYW5kIGp1c3QgZG8gcmVndWxhciBwcm9wZXJ0eSBhY2Nlc3MsIGl0ZXJhdGUgd2l0aCBgZm9yLi4uaW5gLCBpbnN0ZWFkIG9mIGBPYmplY3QuZW50cmllc2AsIGV0Yy4pXG4gKi9cbmZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzMjxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KGxoc0FsbDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIHJoc0FsbDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiB7XG5cbiAgICBcbiAgICBjb25zdCByZXQ6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+ID0ge1xuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnM8RT4obGhzQWxsLnJlZiwgcmhzQWxsLnJlZiksXG4gICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzQWxsLnN0eWxlLCByaHNBbGwuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzQWxsW1wiY2xhc3NcIl0sIGxoc0FsbC5jbGFzc05hbWUsIHJoc0FsbFtcImNsYXNzXCJdLCByaHNBbGwuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbC5jaGlsZHJlbiwgcmhzQWxsLmNoaWxkcmVuKSxcbiAgICB9IGFzIGFueTtcblxuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0W1wiY2xhc3NcIl0gPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldFtcImNsYXNzXCJdO1xuICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5jaGlsZHJlbjtcblxuICAgIGZvciAoY29uc3QgbGhzS2V5VSBpbiBsaHNBbGwpIHtcbiAgICAgICAgY29uc3QgbGhzS2V5ID0gbGhzS2V5VSBhcyBrZXlvZiB0eXBlb2YgbGhzQWxsO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhsaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtsaHNLZXldID0gbGhzQWxsW2xoc0tleV07XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCByaHNLZXlVIGluIHJoc0FsbCkge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVIGFzIGtleW9mIHR5cGVvZiByaHNBbGw7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKHJoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZVVua25vd24ocmhzS2V5LCByZXRbcmhzS2V5XSwgcmhzQWxsW3Joc0tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+ICh2b2lkIHwgUHJvbWlzZTx2b2lkPiksIFUgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+ICh2b2lkIHwgUHJvbWlzZTx2b2lkPik+KGxoczogVCB8IG51bGwgfCB1bmRlZmluZWQsIHJoczogVSB8IG51bGwgfCB1bmRlZmluZWQpIHtcblxuICAgIGlmICghbGhzKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmICghcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuXG4gICAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBydiA9IHJocyguLi5hcmdzKTtcblxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgT25QYXNzaXZlU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5LCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZS5qc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQgZXh0ZW5kcyBFdmVudFRhcmdldD4ge1xuICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICAgICAgZ2V0RWxlbWVudCgpOiBUIHwgbnVsbDtcbiAgICAgICAgcHJvcHNTdGFibGU6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+O1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPiB7XG4gICAgLyoqXG4gICAgICogRm9yIHRoZSBzYWtlIG9mIGNvbnZlbmllbmNlLFxuICAgICAqIHRoaXMgb25lIGlzIG9wdGlvbmFsLCBzaW5jZSB1c2luZyB0aGlzIGhvb2sgaXMgc28gY29tbW9uLFxuICAgICAqIGJ1dCB1c2luZyBpdHMgcGFyYW1ldGVyIG9wdGlvbnMgaXMgc28gdW5jb21tb24sIGFuZCBpdCdzXG4gICAgICogYWJzZW5zZSBpc24ndCB1c3VhbGx5IGJlY2F1c2UgaXQgd2FzIGZvcmdvdHRlbiwgaXQncyBiZWNhdXNlXG4gICAgICogaXQgZG9lc24ndCBtYXR0ZXIuXG4gICAgICovXG4gICAgcmVmRWxlbWVudFBhcmFtZXRlcnM/OiB7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZT86IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQgfCBudWxsLCBuZXZlcj47XG4gICAgICAgIG9uTW91bnQ/OiAoZWxlbWVudDogVCkgPT4gdm9pZDtcbiAgICAgICAgb25Vbm1vdW50PzogKGVsZW1lbnQ6IFQpID0+IHZvaWQ7XG4gICAgfVxufVxuXG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudFByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PihyOiBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxFPiwgLi4ub3RoZXJQcm9wczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSk6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10ge1xuICAgIHJldHVybiBbci5yZWZFbGVtZW50UmV0dXJuLnByb3BzU3RhYmxlLCAuLi5vdGhlclByb3BzXTtcbn0qL1xuXG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LCBcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICogXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqIFxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQ8VCBleHRlbmRzIEV2ZW50VGFyZ2V0PihhcmdzOiBVc2VSZWZFbGVtZW50UGFyYW1ldGVyczxUPik6IFVzZVJlZkVsZW1lbnRSZXR1cm5UeXBlPFQ+IHtcbiAgICBjb25zdCB7IG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50IH0gPSAoYXJncy5yZWZFbGVtZW50UGFyYW1ldGVycyB8fCB7fSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUmVmRWxlbWVudFwiLCBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCk7XG5cbiAgICAvLyBDYWxsZWQgKGluZGlyZWN0bHkpIGJ5IHRoZSByZWYgdGhhdCB0aGUgZWxlbWVudCByZWNlaXZlcy5cbiAgICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2s8T25QYXNzaXZlU3RhdGVDaGFuZ2U8VCB8IG51bGwsIG5ldmVyPj4oKGUsIHByZXZWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwID0gb25FbGVtZW50Q2hhbmdlPy4oZSwgcHJldlZhbHVlKTtcbiAgICAgICAgaWYgKHByZXZWYWx1ZSlcbiAgICAgICAgICAgIG9uVW5tb3VudD8uKHByZXZWYWx1ZSEpO1xuXG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgb25Nb3VudD8uKGUpO1xuXG4gICAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGU8VCB8IG51bGwsIG5ldmVyPihoYW5kbGVyLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSk7XG4gICAgY29uc3QgcHJvcHNTdGFibGUgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8VD4+KHsgcmVmOiBzZXRFbGVtZW50IH0pO1xuXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZkVsZW1lbnRSZXR1cm46IHtcbiAgICAgICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgICAgICBwcm9wc1N0YWJsZTogcHJvcHNTdGFibGUuY3VycmVudFxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZGVib3VuY2VSZW5kZXJpbmcsIE9uUGFzc2l2ZVN0YXRlQ2hhbmdlLCBQYXNzaXZlU3RhdGVVcGRhdGVyLCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlLmpzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2suanNcIjtcbmltcG9ydCB7IHVzZVN0YWJsZU9iamVjdCB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyLmpzXCI7XG5cbi8qKlxuICogUmVtaW5kZXIgb2Ygb3JkZXIgb2YgZXhlY3V0aW9uOlxuICogXG4gKiAqICh0cmVlIG1vdW50cylcbiAqICogUGFyZW50IHJlbmRlcnNcbiAqICogQ2hpbGRyZW4gcmVuZGVyXG4gKiAqIENoaWxkcmVuIHJlY2VpdmUgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBQYXJlbnQgcmVjZWl2ZXMgcmVmIChpZiBhcHBsaWNhYmxlKVxuICogKiBDaGlsZHJlbiBydW4gZWZmZWN0c1xuICogKiBQYXJlbnQgcnVucyBlZmZlY3RzXG4gKiBcbiAqICogKHRyZWUgdW5tb3VudHMpXG4gKiAqIFBhcmVudCBydW5zIGVmZmVjdC1jbGVhbnVwXG4gKiAqIFBhcmVudCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqICogQ2hpbGQgcnVucyBlZmZlY3QtY2xlYW51cFxuICogKiBDaGlsZCBkZWxldGVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqIFxuICogVHdvIHRoaW5ncyB0byBub3RlIGhlcmU6XG4gKiAqIFJlbmRlcmluZyBzdGFydHMgYXQgdGhlIHJvb3QsICBidXQgZWZmZWN0cyBhbmQgcmVmcyBzdGFydCBhdCB0aGUgbGVhdmVzLlxuICogKiByZWZzIGFyZSAqdXN1YWxseSogY2FsbGVkIGJlZm9yZSBlZmZlY3RzLCBidXQgb25seSB3aGVuIHRoYXQgSFRNTEVsZW1lbnQgcmVuZGVycy4gQmFzaWNhbGx5IGp1c3QgYSByZW1pbmRlciB0aGF0IGEgY29tcG9uZW50IGNhbiBiZSBtb3VudGVkIHdpdGhvdXQgaXQgZXhpc3RpbmcgaW4gdGhlIERPTS5cbiAqL1xuY29uc3QgX2NvbW1lbnRzID0gdm9pZCAoMCk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgLy9tYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TT5bXCJtYW5hZ2VkQ2hpbGRyZW5SZXR1cm5cIl1cblxuICAgIG1hbmFnZWRDaGlsZENvbnRleHQ6IHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheTogSW50ZXJuYWxDaGlsZEluZm88TT47XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkTW91bnRlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0sIG1vdW50ZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZDogKGluZGV4OiBNW1wiaW5kZXhcIl0pID0+ICgoKSA9PiB2b2lkKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBEb2VzIG5vdGhpbmcgYXQgcnVudGltZSAtLSB0eXBlIGNoZWNraW5nIG9ubHkuXG4gKiBcbiAqIFRocm93cyBhIChUeXBlc2NyaXB0IGNvbXBpbGVyKSBlcnJvciBpZiB0aGUgcGFzc2VkIG9iamVjdCBpcyBhbnl0aGluZyBidXQgdGhlIGVtcHR5IG9iamVjdCB7fS5cbiAqIFxuICogVXNlIHRoaXMgdG8gZW5zdXJlIHRoYXQgeW91ciBzcHJlYWQgb3BlcmF0b3JzIHdvcmsgY29ycmVjdGx5IGFuZCBjb3ZlciBhbGwgY2FzZXMuXG4gKiBcbiAqIEBwYXJhbSBfYSBUaGUgcmVtYWluaW5nIHNwcmVhZCBwYXJhbWV0ZXJzIG9mIGEgZ2l2ZW4gb2JqZWN0IHRoYXQgeW91IGV4cGVjdCB0byBiZSBlbXB0eSAoYmVjYXVzZSB5b3UgcHJvcGVybHkgYWNjb3VudGVkIGZvciBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiBpdCwgYW5kIHdhbnQgdG8gZW5zdXJlIGl0IHN0YXlzIHRoYXQgd2F5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RW1wdHlPYmplY3Q8VCBleHRlbmRzIHt9PihfYTogW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXSA/IFQgOiBgVW5oYW5kbGVkIGtleXMgaW4gdGhpcyByZXN0IHNwcmVhZCBvYmplY3QhYCk6IHZvaWQgeyB9XG5cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIHRoYXQgY2hpbGRyZW4gYW5kIHBhcmVudHMgdXNlIHRvIGNvbW11bmljYXRlIHdpdGggZWFjaCBvdGhlci5cbiAqIFxuICogKiBgaW5kZXhgIHJlZmVycyB0byB3aGljaCBjaGlsZCB0aGlzIGlzLlxuICogKiBgZmxhZ3NgIGFyZSBxdWljay1hbmQtZWFzeSBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgeW91IGNhbiBvcHRpb25hbGx5IHVzZVxuICogKiBgc3ViSW5mb2AgaXMgYW55dGhpbmcgdXNlZCBieSBhIGRlcml2ZWQgaG9vay4gYHVzZVJvdmluZ1RhYkluZGV4YCwgZm9yIGV4YW1wbGUsIG5lZWRzIHRvIGtub3cgaG93IHRvIGZvY3VzIGFuIGFyYml0cmFyeSBjaGlsZCwgc28gdGhlIGNoaWxkIHBvcHVsYXRlcyBgaW5mb2Agd2l0aCBhbiBvYmplY3QgY29udGFpbmluZyBhIG1ldGhvZCBjYWxsZWQgYGZvY3VzU2VsZmAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFuYWdlZENoaWxkSW5mbzxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgaW5kZXg6IFQ7XG4gICAgLy9mbGFnczogUGFydGlhbDxSZWNvcmQ8SywgQ2hpbGRGbGFnT3BlcmF0aW9ucz4+O1xuICAgIC8vc3ViSW5mbzogTUNTdWJJbmZvO1xufVxuXG5cblxuZXhwb3J0IHR5cGUgT25DaGlsZHJlbk1vdW50Q2hhbmdlPFQgZXh0ZW5kcyBzdHJpbmcgfCBudW1iZXI+ID0gKChtb3VudGVkOiBTZXQ8VD4sIHVubW91bnRlZDogU2V0PFQ+KSA9PiB2b2lkKTtcbmV4cG9ydCB0eXBlIE9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdDxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiA9ICgoY2F1c2VyczogSXRlcmFibGU8VD4pID0+IHZvaWQpO1xuXG5pbnRlcmZhY2UgTUNQPFQgZXh0ZW5kcyBudW1iZXIgfCBzdHJpbmc+IHtcbiAgICAvKipcbiAgICAgKiBSdW5zIGFmdGVyIG9uZSBvciBtb3JlIGNoaWxkcmVuIGhhdmUgdXBkYXRlZCB0aGVpciBpbmZvcm1hdGlvbiAoaW5kZXgsIGV0Yy4pLlxuICAgICAqIFxuICAgICAqIE9ubHkgb25lIHdpbGwgcnVuIHBlciB0aWNrLCBqdXN0IGxpa2UgbGF5b3V0RWZmZWN0LCBidXQgaXQgaXNuJ3RcbiAgICAgKiAqZ3VhcmFudGVlZCogdG8gaGF2ZSBhY3R1YWxseSBiZWVuIGEgY2hhbmdlLlxuICAgICAqIFxuICAgICAqIFRPRE86IFRoaXMgZW5kZWQgdXAgbm90IGJlaW5nIG5lZWRlZCBieSBhbnl0aGluZy4gSXMgaXQgbmVjZXNzYXJ5PyBEb2VzIGl0IGNvc3QgYW55dGhpbmc/XG4gICAgICovXG4gICAgb25BZnRlckNoaWxkTGF5b3V0RWZmZWN0PzogbnVsbCB8IHVuZGVmaW5lZCB8IE9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdDxUPjtcblxuICAgIC8qKlxuICAgICAqIFNhbWUgYXMgdGhlIGFib3ZlLCBidXQgb25seSBmb3IgbW91bnQvdW5tb3VudCAob3Igd2hlbiBhIGNoaWxkIGNoYW5nZXMgaXRzIGluZGV4KVxuICAgICAqL1xuICAgIG9uQ2hpbGRyZW5Nb3VudENoYW5nZT86IG51bGwgfCB1bmRlZmluZWQgfCBPbkNoaWxkcmVuTW91bnRDaGFuZ2U8VD47XG5cbiAgICBvbkNoaWxkQ291bnRDaGFuZ2U/OiBudWxsIHwgdW5kZWZpbmVkIHwgKChjb3VudDogbnVtYmVyKSA9PiB2b2lkKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICBtYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzOiBNQ1A8TVtcImluZGV4XCJdPjtcbn1cblxuLy8gTUNTdWJJbmZvIGNvbnRhaW5zIHRoZSBlbnRpcmV0eSBvZiB0aGUgc2F2ZWQgZGF0YSBmb3IgdGhpcyBjaGlsZC4gIEFsbCBvZiBpdC4gRXZlbiB0eXBlcyB0aGUgdXNlciB3aWxsIG5ldmVyIGJlIGFibGUgdG8gcGFzcyBpbiBiZWNhdXNlIHRoZXkncmUgaW50ZXJuYWxseSBkZXJpdmVkLlxuLy8gU3ViYmVzdEluZm8gcmVmZXJzIHRvIHRoZSBhY3R1YWwgcGFyYW1ldGVycyB0aGUgdXNlciBwYXNzZXMgaW4gdGhhdCBjb3VsZCBiZSB0b3RhbGx5IHVucmVsYXRlZC4gXG5leHBvcnQgaW50ZXJmYWNlIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnM8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8vIFRoaXMgaXMgdGhlIG9ubHkgcHJvcGVydHkgc2hhcmVkIGFtb25nIGFsbCBtYW5hZ2VkIGNoaWxkcmVuLlxuICAgIC8vIFRlY2huaWNhbGx5IHRoaXMgaXMgcmVkdW5kYW50IHdpdGggdGhlIHNlY29uZCBhcmd1bWVudCwgd2hpY2ggaXMuLi5laC4gQnV0IHRoZSB0eXBlcyBhcmUgY2xlYXIuXG4gICAgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogUGljazxNLCBcImluZGV4XCI+O1xuXG4gICAgLyoqXG4gICAgICogSW4gZ2VuZXJhbCwgdGhpcyBzaG91bGRuJ3QgYmUgbnVsbCwgYnV0IGZvciBjb252ZW5pZW5jZSdzIHNha2UgeW91IGFyZSBhbGxvd2VkIHRvLCB3aGljaCBkaXNhYmxlcyBhbGwgYmVoYXZpb3IsIGFuZCBhbHNvIG1lYW5zIGBnZXRDaGlsZHJlbmAgd2lsbCBiZSBgdW5kZWZpbmVkYCFcbiAgICAgKi9cbiAgICBjb250ZXh0OiBVc2VNYW5hZ2VkQ2hpbGRyZW5Db250ZXh0PE0+IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZU1hbmFnZWRDaGlsZHJlblJldHVyblR5cGU8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNoaWxkIHRoYXQgcmVuZGVyZWQgaXRzZWxmIHdpdGggdGhlIHJlcXVlc3RlZCBrZXkuXG4gICAgICogXG4gICAgICogKipTVEFCTEUqKiAoZXZlbiB0aG91Z2ggaXQncyBub3QgYSBmdW5jdGlvbiwgdGhlIGlkZW50aXR5IG9mIHRoaXMgb2JqZWN0IG5ldmVyIGNoYW5nZXMpXG4gICAgICovXG4gICAgbWFuYWdlZENoaWxkcmVuUmV0dXJuOiB7XG4gICAgICAgIC8qKiBcbiAgICAgICAgICogKioqU1RBQkxFKioqXG4gICAgICAgICAqXG4gICAgICAgICAqIE5vdGUgdGhhdCAqKmJvdGgqKiBgZ2V0Q2hpbGRyZW5gIGFuZCB0aGUgYE1hbmFnZWRDaGlsZHJlbmAgb2JqZWN0IGl0IHJldHVybnMgYXJlIHN0YWJsZSFcbiAgICAgICAgICogXG4gICAgICAgICAqIFRoaXMgaXMgYSBnZXR0ZXIgaW5zdGVhZCBvZiBhbiBvYmplY3QgYmVjYXVzZSB3aGVuIGZ1bmN0aW9uIGNhbGxzIGhhcHBlbiBvdXQgb2Ygb3JkZXIgaXQncyBlYXNpZXIgdG8ganVzdCBoYXZlIGFsd2F5cyBiZWVuIHBhc3NpbmcgYW5kIHJldHVybiBnZXR0ZXJzIGV2ZXJ5d2hlcmUgXG4gICAgICAgICAqL1xuICAgICAgICBnZXRDaGlsZHJlbigpOiBNYW5hZ2VkQ2hpbGRyZW48TT47XG5cbiAgICB9O1xuXG4gICAgY29udGV4dDogVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRSZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICBtYW5hZ2VkQ2hpbGRSZXR1cm46IHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuICAgIH1cbn1cblxuLy9leHBvcnQgdHlwZSBVc2VNYW5hZ2VkQ2hpbGQ8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4gPSAoYTogVXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxNPikgPT4gVXNlTWFuYWdlZENoaWxkUmV0dXJuVHlwZTxNPjtcblxuXG5cblxuXG5cbi8qKlxuICogQWJzdHJhY3Rpb24gb3ZlciB0aGUgbWFuYWdlZCBjaGlsZHJlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hbmFnZWRDaGlsZHJlbjxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgLyoqIFNUQUJMRSAqL1xuICAgIGdldEF0KGluZGV4OiBNW1wiaW5kZXhcIl0pOiBNIHwgdW5kZWZpbmVkO1xuICAgIC8qKiBTVEFCTEUgKi9cbiAgICBnZXRIaWdoZXN0SW5kZXgoKTogbnVtYmVyO1xuICAgIC8qKiBTVEFCTEUgKi9cbiAgICBmb3JFYWNoOiAoZjogKGNoaWxkOiBNKSA9PiB2b2lkKSA9PiB2b2lkO1xuXG4gICAgLyoqICoqVU5TVEFCTEUqKiwgYWxzbyBpbnRlcm5hbC11c2Ugb25seSwgYWxzbyBUT0RPIG5lZWQgYSB3b3JrYXJvdW5kIGZvciB0aGlzIGZvciBzb3J0YWJsZSBjaGlsZHJlbiAqL1xuICAgIGFycmF5U2xpY2U6ICgpID0+IE1bXTtcbn1cblxuaW50ZXJmYWNlIEludGVybmFsQ2hpbGRJbmZvPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPHN0cmluZyB8IG51bWJlcj4+IHtcbiAgICBhcnI6IEFycmF5PE0+O1xuICAgIHJlYzogUGFydGlhbDxSZWNvcmQ8TVtcImluZGV4XCJdLCBNPj47XG4gICAgaGlnaGVzdEluZGV4OiBudW1iZXI7XG4gICAgbG93ZXN0SW5kZXg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBbGxvd3MgYSBwYXJlbnQgY29tcG9uZW50IHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCBjZXJ0YWluXG4gKiBjaGlsZCBjb21wb25lbnRzIG9uY2UgdGhleSBoYXZlIHJlbmRlcmVkLlxuICogXG4gKiBUaGlzIGhvb2sgaXMgZGVzaWduZWQgdG8gYmUgbGlnaHR3ZWlnaHQsIGluIHRoYXQgdGhlIHBhcmVudCBrZWVwcyBubyBzdGF0ZVxuICogYW5kIHJ1bnMgbm8gZWZmZWN0cy4gIEVhY2ggY2hpbGQgKmRvZXMqIHJ1biBhbiBlZmZlY3QsIGJ1dCB3aXRoIG5vIHN0YXRlXG4gKiBjaGFuZ2VzIHVubGVzcyB5b3UgZXhwbGljaXRseSByZXF1ZXN0IHRoZW0uXG4gKiBcbiAqIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZENoaWxkcmVuPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPHN0cmluZyB8IG51bWJlcj4+KHBhcmVudFBhcmFtZXRlcnM6IFVzZU1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnM8TT4pOiBVc2VNYW5hZ2VkQ2hpbGRyZW5SZXR1cm5UeXBlPE0+IHtcbiAgICB0eXBlIEluZGV4VHlwZSA9IE1bXCJpbmRleFwiXTtcbiAgICB0eXBlIEluZm8gPSBNO1xuXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzOiB7IG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCwgb25DaGlsZHJlbk1vdW50Q2hhbmdlLCBvbkNoaWxkQ291bnRDaGFuZ2UgfSwgLi4ucmVzdCB9ID0gcGFyZW50UGFyYW1ldGVycztcbiAgICBhc3NlcnRFbXB0eU9iamVjdChyZXN0KTtcblxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1hbmFnZWRDaGlsZHJlblwiLCBvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QsIG9uQ2hpbGRyZW5Nb3VudENoYW5nZSwgb25DaGlsZENvdW50Q2hhbmdlKTtcblxuICAgIC8vY29uc3QgW2dldE1vdW50Q291bnQsIHNldE1vdW50Q291bnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hpbGRDb3VudENoYW5nZSwgcmV0dXJuWmVybywgcnVuSW1tZWRpYXRlbHkpO1xuXG4gICAgY29uc3QgZ2V0SGlnaGVzdEluZGV4ID0gdXNlQ2FsbGJhY2soKCk6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleDtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBBbGwgdGhlIGluZm9ybWF0aW9uIHdlIGhhdmUgYWJvdXQgb3VyIGNoaWxkcmVuIGlzIHN0b3JlZCBpbiB0aGlzICoqc3RhYmxlKiogYXJyYXkuXG4gICAgLy8gQW55IG11dGF0aW9ucyB0byB0aGlzIGFycmF5ICoqRE8gTk9UKiogdHJpZ2dlciBhbnkgc29ydCBvZiBhIHJlLXJlbmRlci5cbiAgICBjb25zdCBtYW5hZ2VkQ2hpbGRyZW5BcnJheSA9IHVzZVJlZjxJbnRlcm5hbENoaWxkSW5mbzxNPj4oeyBhcnI6IFtdLCByZWM6IHt9LCBoaWdoZXN0SW5kZXg6IDAsIGxvd2VzdEluZGV4OiAwIH0pO1xuXG4gICAgLy8gRm9yIGluZGlyZWN0IGFjY2VzcyB0byBlYWNoIGNoaWxkXG4gICAgLy8gQ29tcGFyZSBnZXRNYW5hZ2VkQ2hpbGRJbmZvXG4gICAgLy8gVE9ETzogVGhlIHByaW1hcnkgdXNlIGZvciB0aGlzIGlzIGZsYWdnYWJsZSBjbG9zZXN0IGZpdHNcbiAgICAvLyB3aGljaCBuZWVkcyB0byBzZWFyY2ggYWxsIGNoaWxkcmVuIGZvciB0aGF0IGNsb3Nlc3QgZml0LlxuICAgIC8vIEl0IHdvdWxkIGJlIG5pY2UgaWYgdGhlcmUgd2FzIHNvbWV0aGluZyBiZXR0ZXIgZm9yIHRoYXQuXG4gICAgY29uc3QgZm9yRWFjaENoaWxkID0gdXNlQ2FsbGJhY2soKGY6IChjaGlsZDogSW5mbykgPT4gdm9pZCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgICAgICAgICAgZihjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBpbiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlYykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQ6IEluZm8gfCB1bmRlZmluZWQgPSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LnJlY1tmaWVsZCBhcyBrZXlvZiBSZWNvcmQ8SW5kZXhUeXBlLCBJbmZvPl07XG4gICAgICAgICAgICBpZiAoY2hpbGQpXG4gICAgICAgICAgICAgICAgZihjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIC8vIFJldHJpZXZlcyB0aGUgaW5mb3JtYXRpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSBjaGlsZCB3aXRoIHRoZSBnaXZlbiBpbmRleC5cbiAgICAvLyBgdW5kZWZpbmVkYCBpZiBub3QgY2hpbGQgdGhlcmUsIG9yIGl0J3MgdW5tb3VudGVkLlxuICAgIGNvbnN0IGdldE1hbmFnZWRDaGlsZEluZm8gPSB1c2VDYWxsYmFjazxNYW5hZ2VkQ2hpbGRyZW48TT5bXCJnZXRBdFwiXT4oKGluZGV4OiBJbmRleFR5cGUpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW2luZGV4IGFzIG51bWJlcl0hO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWNbaW5kZXggYXMgSW5kZXhUeXBlXSE7XG4gICAgfSwgW10pXG5cbiAgICAvLyB0bDtkciB0aGlzIGlzIGEgd2F5IHRvIGhhdmUgcnVuIHVzZUxheW91dEVmZmVjdCBvbmNlIGFmdGVyIGFsbCBOIGNoaWxkcmVuXG4gICAgLy8gaGF2ZSBtb3VudGVkIGFuZCBydW4gKnRoZWlyKiB1c2VMYXlvdXRFZmZlY3QsIGJ1dCBhbHNvICp3aXRob3V0KiByZS1yZW5kZXJpbmdcbiAgICAvLyBvdXJzZWx2ZXMgYmVjYXVzZSBvZiBoYXZpbmcgYSBgY2hpbGRDb3VudGAgc3RhdGUgb3IgYW55dGhpbmcgc2ltaWxhci5cbiAgICAvL1xuICAgIC8vIFdoZW4gdGhlIGNoaWxkIGNvdW50IHJlZiB1cGRhdGVzLCB3ZSB3YW50IHRoZSBwYXJlbnQgdG8gYWxzbyBydW4gYW4gZWZmZWN0XG4gICAgLy8gdG8gbWF5YmUgZG8gc29tZXRoaW5nIHdpdGggYWxsIHRoZXNlIGNoaWxkcmVuIHRoYXQganVzdCBtb3VudGVkLlxuICAgIC8vIFRoZSBlYXNpZXN0IHdheSB3b3VsZCBiZSB1c2VFZmZlY3QoLi4uLCBbY2hpbGRDb3VudF0pIGJ1dFxuICAgIC8vIHRoYXQgd291bGQgcmVxdWlyZSB1cyBoYXZpbmcgYSBjaGlsZENvdW50IHN0YXRlLCB0aGVuIGNhbGxpbmdcbiAgICAvLyBzZXRDaGlsZENvdW50IGFuZCByZS1yZW5kZXJpbmcgZXZlcnkgdGltZSBjaGlsZHJlbiBtb3VudFxuICAgIC8vIChvbmx5IG9uZSByZS1yZW5kZXIgYXQgYSB0aW1lIHVubGVzcyBjaGlsZHJlbiBhcmUgc3RhZ2dlcmVkLCBidXQgc3RpbGwpXG4gICAgLy8gXG4gICAgLy8gQXMgYW4gYWx0ZXJuYXRlIHNvbHV0aW9uLCBhbnkgdGltZSBhIGNoaWxkIHVzZXMgVUxFIG9uIG1vdW50LCBpdCBxdWV1ZXMgYSBtaWNyb3Rhc2tcbiAgICAvLyB0byBlbXVsYXRlIHJ1bm5pbmcgVUxFIG9uIHRoZSBwYXJlbnQuIE9ubHkgdGhlIGZpcnN0IGNoaWxkIHdpbGwgYWN0dWFsbHkgcXVldWVcbiAgICAvLyB0aGUgbWljcm90YXNrIChieSBjaGVja2luZyBoYXNSZW1vdGVVTEUgZmlyc3QpIHNvIHRoYXQgdGhlIFwiZWZmZWN0XCIgb25seVxuICAgIC8vIHJ1bnMgb25jZS4gV2hlbiBpdCdzIGRvbmUsIGhhc1JlbW90ZVVMRSBpcyByZXNldCBzbyBpdCBjYW4gcnVuIGFnYWluIGlmXG4gICAgLy8gbW9yZSBjaGlsZHJlbiBtb3VudC91bm1vdW50LlxuICAgIGNvbnN0IGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZCA9IHVzZVJlZjx7IG1vdW50czogU2V0PEluZGV4VHlwZT4sIHVubW91bnRzOiBTZXQ8SW5kZXhUeXBlPiB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2VycyA9IHVzZVJlZihuZXcgU2V0PEluZGV4VHlwZT4oKSk7XG4gICAgY29uc3QgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkID0gdXNlQ2FsbGJhY2soKGluZGV4OiBJbmRleFR5cGUpID0+IHtcblxuICAgICAgICBpZiAocmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2Vycy5jdXJyZW50LnNpemUgPT0gMCkge1xuICAgICAgICAgICAgaWYgKG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VSZW5kZXJpbmcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3Q/LihyZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMuY3VycmVudC5hZGQoaW5kZXgpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7IH07XG5cbiAgICB9LCBbLyogTXVzdCByZW1haW4gc3RhYmxlICovXSk7XG5cbiAgICBjb25zdCByZW1vdGVVTEVDaGlsZE1vdW50ZWQgPSB1c2VDYWxsYmFjaygoaW5kZXg6IEluZGV4VHlwZSwgbW91bnRlZDogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgICAgICBpZiAoIWhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBtb3VudHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgICAgICB1bm1vdW50czogbmV3IFNldCgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChvbkNoaWxkQ291bnRDaGFuZ2UgfHwgb25DaGlsZHJlbk1vdW50Q2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZGVib3VuY2VSZW5kZXJpbmcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkNoaWxkcmVuTW91bnRDaGFuZ2U/LihoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCEubW91bnRzLCBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCEudW5tb3VudHMpO1xuICAgICAgICAgICAgICAgICAgICBvbkNoaWxkQ291bnRDaGFuZ2U/LihnZXRDaGlsZHJlbigpLmdldEhpZ2hlc3RJbmRleCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb3VudGVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5oaWdoZXN0SW5kZXggPSBNYXRoLm1heChtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleCwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW2luZGV4IGFzIG51bWJlcl07XG4gICAgICAgICAgICAgICAgbGV0IHNoYXZlID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2hhdmUgPD0gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoICYmIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyW21hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLmxlbmd0aCAtIDEgLSBzaGF2ZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICArK3NoYXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5zcGxpY2UobWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoIC0gc2hhdmUsIHNoYXZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkZWxldGUgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWNbaW5kZXggYXMgSW5kZXhUeXBlXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuaGlnaGVzdEluZGV4ID0gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZC5jdXJyZW50W21vdW50ZWQgPyBcIm1vdW50c1wiIDogXCJ1bm1vdW50c1wiXS5hZGQoaW5kZXgpO1xuICAgIH0sIFsvKiBNdXN0IHJlbWFpbiBzdGFibGUgKi9dKTtcblxuXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuID0gdXNlU3RhYmxlT2JqZWN0PE1hbmFnZWRDaGlsZHJlbjxNPj4oe1xuICAgICAgICAuLi57IF86IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQgfSBhcyB7fSxcbiAgICAgICAgZm9yRWFjaDogZm9yRWFjaENoaWxkLFxuICAgICAgICBnZXRBdDogZ2V0TWFuYWdlZENoaWxkSW5mbyxcbiAgICAgICAgZ2V0SGlnaGVzdEluZGV4OiBnZXRIaWdoZXN0SW5kZXgsXG4gICAgICAgIGFycmF5U2xpY2U6IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5zbGljZSgpO1xuICAgICAgICB9LCBbXSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldENoaWxkcmVuID0gdXNlQ2FsbGJhY2soKCkgPT4gbWFuYWdlZENoaWxkcmVuLCBbXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250ZXh0OiB1c2VTdGFibGVPYmplY3Qoe1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkQ29udGV4dDogdXNlU3RhYmxlT2JqZWN0KHtcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheTogbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudCxcbiAgICAgICAgICAgICAgICByZW1vdGVVTEVDaGlsZE1vdW50ZWQsXG4gICAgICAgICAgICAgICAgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkLFxuICAgICAgICAgICAgICAgIGdldENoaWxkcmVuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KSxcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuUmV0dXJuOiB7IGdldENoaWxkcmVuIH1cbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYW5hZ2VkQ2hpbGQ8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88bnVtYmVyIHwgc3RyaW5nPj4oaW5mbzogVXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxNPiwgbWFuYWdlZENoaWxkUGFyYW1ldGVyczogTSk6IFVzZU1hbmFnZWRDaGlsZFJldHVyblR5cGU8TT4ge1xuICAgIHR5cGUgSW5kZXhUeXBlID0gTVtcImluZGV4XCJdO1xuXG4gICAgY29uc3QgeyBtYW5hZ2VkQ2hpbGRDb250ZXh0OiB7IGdldENoaWxkcmVuLCBtYW5hZ2VkQ2hpbGRyZW5BcnJheSwgcmVtb3RlVUxFQ2hpbGRNb3VudGVkLCByZW1vdGVVTEVDaGlsZENoYW5nZWQgfSB9ID0gKGluZm8uY29udGV4dCA/PyB7IG1hbmFnZWRDaGlsZENvbnRleHQ6IHt9IH0pO1xuICAgIGNvbnN0IGluZGV4ID0gbWFuYWdlZENoaWxkUGFyYW1ldGVycy5pbmRleDtcbiAgICAvLyBBbnkgdGltZSBvdXIgY2hpbGQgcHJvcHMgY2hhbmdlLCBtYWtlIHRoYXQgaW5mb3JtYXRpb24gYXZhaWxhYmxlXG4gICAgLy8gdGhlIHBhcmVudCBpZiB0aGV5IG5lZWQgaXQuXG4gICAgLy8gVGhlIHBhcmVudCBjYW4gbGlzdGVuIGZvciBhbGwgdXBkYXRlcyBhbmQgb25seSBhY3Qgb24gdGhlIG9uZXMgaXQgY2FyZXMgYWJvdXQsXG4gICAgLy8gYW5kIG11bHRpcGxlIGNoaWxkcmVuIHVwZGF0aW5nIGluIHRoZSBzYW1lIHRpY2sgd2lsbCBhbGwgYmUgc2VudCBhdCBvbmNlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChtYW5hZ2VkQ2hpbGRyZW5BcnJheSA9PSBudWxsIHx8IHJlbW90ZVVMRUNoaWxkQ2hhbmdlZCA9PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgLy8gSW5zZXJ0IHRoaXMgaW5mb3JtYXRpb24gaW4tcGxhY2VcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5hcnJbaW5kZXggYXMgbnVtYmVyXSA9IHsgLi4ubWFuYWdlZENoaWxkUGFyYW1ldGVycyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkucmVjW2luZGV4IGFzIEluZGV4VHlwZV0gPSB7IC4uLm1hbmFnZWRDaGlsZFBhcmFtZXRlcnMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkKGluZGV4IGFzIEluZGV4VHlwZSk7XG4gICAgfSwgWy4uLk9iamVjdC5lbnRyaWVzKGluZm8pLmZsYXQoOSldKTsgIC8vIDkgaXMgaW5maW5pdHksIHJpZ2h0PyBTdXJlLiBVbnJlbGF0ZWQ6IFRPRE8uXG5cbiAgICAvLyBXaGVuIHdlIG1vdW50LCBub3RpZnkgdGhlIHBhcmVudCB2aWEgcXVldWVNaWNyb3Rhc2tcbiAgICAvLyAoZXZlcnkgY2hpbGQgZG9lcyB0aGlzLCBzbyBldmVyeXRoaW5nJ3MgY29vcmRpbmF0ZWQgdG8gb25seSBxdWV1ZSBhIHNpbmdsZSBtaWNyb3Rhc2sgcGVyIHRpY2spXG4gICAgLy8gRG8gdGhlIHNhbWUgb24gdW5tb3VudC5cbiAgICAvLyBOb3RlOiBJdCdzIGltcG9ydGFudCB0aGF0IHRoaXMgY29tZXMgQUZURVIgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkXG4gICAgLy8gc28gdGhhdCByZW1vdGVVTEVDaGlsZE1vdW50ZWQgaGFzIGFjY2VzcyB0byBhbGwgdGhlIGluZm8gb24gbW91bnQuXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVtb3RlVUxFQ2hpbGRNb3VudGVkPy4oaW5kZXggYXMgSW5kZXhUeXBlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHJlbW90ZVVMRUNoaWxkTW91bnRlZD8uKGluZGV4IGFzIEluZGV4VHlwZSwgZmFsc2UpO1xuICAgIH0sIFtpbmRleF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFuYWdlZENoaWxkUmV0dXJuOiB7IGdldENoaWxkcmVuOiBnZXRDaGlsZHJlbiEgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUNoaWxkcmVuRmxhZ1BhcmFtZXRlcnM8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55PiwgUj4ge1xuXG4gICAgLyoqXG4gICAgICogV2hpY2ggY2hpbGQgaXMgY29uc2lkZXJlZCBhY3RpdmUgb24gbW91bnQuXG4gICAgICogXG4gICAgICogQWZ0ZXIgbW91bnQsIGNoYW5nZSB0aGUgY3VycmVudCBhY3RpdmUgY2hpbGQgd2l0aCBgY2hhbmdlSW5kZXhgLlxuICAgICAqL1xuICAgIGluaXRpYWxJbmRleDogTVtcImluZGV4XCJdIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gcHJvdmlkZWQsIGlmIHRoZSBnaXZlbiBhY3RpdmF0ZWRJbmRleCBkb2Vzbid0IG1hcCBvbnRvIGFueVxuICAgICAqIHByb3ZpZGVkIGNoaWxkIChlaXRoZXIgYmVjYXVzZSBpdCdzIHRvbyBsYXJnZSBvciB0aGF0IGNoaWxkXG4gICAgICogZG9lc24ndCBleGlzdCksIHRoZSBjbG9zZXN0IGNoaWxkIHRvIHRoZSBnaXZlbiBhY3RpdmF0ZWRJbmRleFxuICAgICAqIHdpbGwgaGF2ZSBpdHMgZmxhZyBzZXQgaW5zdGVhZC5cbiAgICAgKiBcbiAgICAgKiBVc2Ugd2l0aCBjYXV0aW9uLCBhbmQgY29uc2lkZXIgaG93IGEgY2hpbGQgaGF2aW5nIGl0cyBmbGFnIHNldFxuICAgICAqIHdoaWxlIHRoZSBwYXJlbnQgdGhpbmtzIGl0IHNob3VsZG4ndCBiZSBjb3VsZCBjYXVzZSBpc3N1ZXMuXG4gICAgICovXG4gICAgY2xvc2VzdEZpdDogYm9vbGVhbjtcblxuICAgIGdldENoaWxkcmVuKCk6IE1hbmFnZWRDaGlsZHJlbjxNPjtcblxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW5ldmVyIGEgbmV3IGluZGV4IGlzIHNlbGVjdGVkLlxuICAgICAqIFxuICAgICAqIE5vdGFibHksIHRoZSB2YWx1ZSBjYW4gYmUgZGlmZmVyZW50IHRoYW4gd2hhdCB3YXMgY2FsbGVkIHdpdGggY2hhbmdlSW5kZXgoKVxuICAgICAqIGlmIHRoZSByZXF1ZXN0ZWQgaW5kZXggZGlkbid0IGV4aXN0IG9yIHdhcyBoaWRkZW4uXG4gICAgICovXG4gICAgb25JbmRleENoYW5nZTogbnVsbCB8IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+O1xuXG4gICAgc2V0QXQoaW5kZXg6IE0sIHZhbHVlOiBib29sZWFuLCBuZXdTZWxlY3RlZEluZGV4OiBNW1wiaW5kZXhcIl0gfCBudWxsLCBwcmV2U2VsZWN0ZWRJbmRleDogTVtcImluZGV4XCJdIHwgbnVsbCk6IHZvaWQ7XG4gICAgZ2V0QXQoaW5kZXg6IE0pOiBib29sZWFuO1xuICAgIGlzVmFsaWQoaW5kZXg6IE0pOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpbGRGbGFnT3BlcmF0aW9ucyB7XG5cbiAgICAvKipcbiAgICAgKiBNdXN0IHJldHVybiB3aGV0aGVyIHRoZSBjdXJyZW50IGNoaWxkIGlzIGFjdGl2ZVxuICAgICAqL1xuICAgIGdldDogKCkgPT4gYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGQgbXVzdCBzZXQgaXRzZWxmIGFzIGFjdGl2ZS9pbmFjdGl2ZSwgd2hhdGV2ZXIgdGhhdCBlbnRhaWxzLlxuICAgICAqIFRoaXMgY291bGQgYmUgYXMgc2ltcGxlIGFzIGEgc2V0U3RhdGUgZnVuY3Rpb24uXG4gICAgICovXG4gICAgc2V0OiAoYWN0aXZlOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE11c3QgcmV0dXJuIHRydWUgaWYgdGhpcyBjaGlsZCBpcyBhIHZhbGlkIGNhbmRpZGF0ZSB0byBiZSBmbGFnZ2VkLCBhbmQgZmFsc2UgaWYgbm90LlxuICAgICAqIE1vc3QgY2hpbGRyZW4gc2hvdWxkIHJldHVybiB0cnVlLiBSZXR1cm5pbmcgZmFsc2UgaXMgb25seSB1c2VmdWwgdG8gbWFyayBhIGNoaWxkIGFzIFwiaW52YWxpZFwiIGluIHNvbWUgd2F5LlxuICAgICAqIFJlbW92aW5nIGEgY2hpbGQgZnJvbSB0aGUgbGlzdCBkb2VzIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIHRoaW5nLCBidXQgdGhpcyBsZXRzIHlvdSBrZWVwIHRoZSBjaGlsZCBhcm91bmQuXG4gICAgICovXG4gICAgaXNWYWxpZCgpOiBib29sZWFuO1xufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VDaGlsZHJlbkZsYWdSZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4sIFI+IHtcbiAgICAvKiogXG4gICAgICogKipTVEFCTEUqKlxuICAgICAqIFxuICAgICAqIE1hbnVhbGx5IGNoYW5nZXMgdGhlIGN1cnJlbnQgaW5kZXggdGhhdCBpcyAoZm9jdXNlZC9zZWxlY3RlZC90YWJiYWJsZS93aGF0ZXZlcikuXG4gICAgICogXG4gICAgICogVGhlIHBhcmVudCBjYW4gdXNlIHRoaXMgdG8gbm90aWZ5IGVhY2ggcmVsZXZhbnQgY2hpbGQgb2Ygd2hhdCBpdCBtdXN0IGRvIGluIG9yZGVyIHRvIG1ha2UgdGhpcyBjaGFuZ2UgaGFwcGVuLlxuICAgICAqIFxuICAgICAqIFRoZSByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIHRoZSBuZXcgaW5kZXggdGhhdCB3aWxsIGJlIHVzZWQuIElmIGBjbG9zZXN0Rml0YCBpcyBmYWxzZSwgaXQgd2lsbCBhbHdheXMgYmUgdGhlIHNhbWUgYXMgd2hhdCB5b3UgcGFzc2VkIGluLlxuICAgICAqL1xuICAgIGNoYW5nZUluZGV4OiBQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+O1xuICAgIC8qKiBcbiAgICAgKiAqKlNUQUJMRSoqXG4gICAgICogXG4gICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIGEgY2hpbGQgbW91bnRzL3VubW91bnRzLCBvciB3aGVuZXZlciBjYWxsaW5nIGEgY2hpbGQncyBpc1ZhbGlkKCkgd291bGQgY2hhbmdlXG4gICAgICogICovXG4gICAgcmVldmFsdWF0ZUNsb3Nlc3RGaXQ6ICgpID0+IHZvaWQ7XG4gICAgLyoqICoqU1RBQkxFKiogKi9cbiAgICBnZXRDdXJyZW50SW5kZXg6ICgpID0+IE1bXCJpbmRleFwiXSB8IG51bGw7XG59XG5cbi8qKlxuICogQW4gZXh0ZW5zaW9uIHRvIHVzZU1hbmFnZWRDaGlsZHJlbiB0aGF0IGhhbmRsZXMgdGhlIGZvbGxvd2luZyBjb21tb24gY2FzZTpcbiAqIDEuIFlvdSBoYXZlIGEgYnVuY2ggb2YgY2hpbGRyZW5cbiAqIDIuIEF0IGFueSBnaXZlbiB0aW1lLCBvbmx5IDEgb2YgdGhlbSBpcyBcInNlbGVjdGVkXCIsIFwiYWN0aXZhdGVkXCIsIFwiZm9jdXNhYmxlXCIsIHdoYXRldmVyIChvciAwIG9mIHRoZW0sIHRoYXQncyBjb29sIHRvbywganVzdCAwIG9yIDEgdGhvdWdoKS5cbiAqIDMuIFRoZSBwYXJlbnQgaGFzIGNvbnRyb2wgb3ZlciB3aG8gaXMgXCJzZWxlY3RlZFwiIHZpYSBhIG51bWVyaWNhbCBpbmRleC5cbiAqIFxuICogVGhpcyBob29rIGFsbG93cyBmb3IgbXVjaCBlYXNpZXIgY29udHJvbCBvdmVyIHNlbGVjdGlvbiBtYW5hZ2VtZW50LlxuICogXG4gKiBOb3RlIHRoYXQgYmVjYXVzZSB5b3UgbWF5IHdhbnQgdG8gdXNlIG11bHRpcGxlIGZsYWdzIHdpdGggdGhlIHNhbWUgY2hpbGRyZW4sIHRoaXMgaG9vayAqZG9lcyBub3QqIHVzZSBgdXNlTWFuYWdlZENoaWxkcmVuYCFcbiAqIFlvdSBuZWVkIHRvIHBhc3MgaXQgdGhlIGV4aXN0aW5nIGNoaWxkcmVuLCBhbmQgeW91IG11c3QgcGFzcyB5b3VyIGludm9jYXRpb24gb2YgYHVzZU1hbmFnZWRDaGlsZHJlbmAgdGhlIHJldHVybmVkIGBvbkNoaWxkcmVuTW91bnRDaGFuZ2VgIGhhbmRsZXIhXG4gKiBcbiAqIEFsc28gYmVjYXVzZSBvZiB0aGF0LCB0aGUgdHlwZXMgb2YgdGhpcyBmdW5jdGlvbiBhcmUgcmF0aGVyIG9kZC4gIEl0J3MgYmV0dGVyIHRvIHN0YXJ0IG9mZiB1c2luZyBhIGhvb2sgdGhhdCBhbHJlYWR5IHVzZXMgYSBmbGFnLCBzdWNoIGFzIGB1c2VSb3ZpbmdUYWJJbmRleGAsIGFzIGFuIGV4YW1wbGUuXG4gKiBcbiAqIFxuICogQHBhcmFtIHBhcmFtMCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hpbGRyZW5GbGFnPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPG51bWJlciB8IHN0cmluZz4sIFI+KHsgZ2V0Q2hpbGRyZW4sIGluaXRpYWxJbmRleCwgY2xvc2VzdEZpdCwgb25JbmRleENoYW5nZSwgZ2V0QXQsIHNldEF0LCBpc1ZhbGlkLCB9OiBVc2VDaGlsZHJlbkZsYWdQYXJhbWV0ZXJzPE0sIFI+KTogVXNlQ2hpbGRyZW5GbGFnUmV0dXJuVHlwZTxNLCBSPiB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlQ2hpbGRyZW5GbGFnXCIsIG9uSW5kZXhDaGFuZ2UsIGdldEF0LCBzZXRBdCwgaXNWYWxpZCk7XG5cbiAgICAvLyBUT0RPIChtYXliZT8pOiBFdmVuIGlmIHRoZXJlIGlzIGFuIGluaXRpYWwgaW5kZXgsIGl0J3Mgbm90IHNldCB1bnRpbCBtb3VudC4gSXMgdGhhdCBmaW5lP1xuICAgIGNvbnN0IFtnZXRDdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VQYXNzaXZlU3RhdGU8bnVsbCB8IE1bXCJpbmRleFwiXSwgUj4ob25JbmRleENoYW5nZSk7XG5cbiAgICBjb25zdCBbZ2V0UmVxdWVzdGVkSW5kZXgsIHNldFJlcXVlc3RlZEluZGV4XSA9IHVzZVBhc3NpdmVTdGF0ZTxudWxsIHwgTVtcImluZGV4XCJdLCBSPihudWxsKTtcblxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIG9uQ2hpbGRyZW5Nb3VudENoYW5nZSBhbmQgY2hhbmdlSW5kZXgsIG5vdCBwdWJsaWNcbiAgICAvLyBPbmx5IGNhbGxlZCB3aGVuIGBjbG9zZXN0Rml0YCBpcyBmYWxzZSwgbmF0dXJhbGx5LlxuICAgIGNvbnN0IGdldENsb3Nlc3RGaXQgPSB1c2VDYWxsYmFjaygocmVxdWVzdGVkSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGdldENoaWxkcmVuKCk7XG4gICAgICAgIGxldCBjbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IGNsb3Nlc3RJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQgIT0gbnVsbCAmJiBpc1ZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiBjaGlsZC5pbmRleCA9PSBcIm51bWJlclwiLCBcImNsb3Nlc3RGaXQgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIGVhY2ggY2hpbGQgaGFzIGEgbnVtZXJpYyBpbmRleCwgYW5kIGNhbm5vdCBiZSB1c2VkIHdoZW4gY2hpbGRyZW4gdXNlIHN0cmluZyBpbmRpY2VzIGluc3RlYWQuXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Rpc3RhbmNlID0gTWF0aC5hYnMoKGNoaWxkLmluZGV4IGFzIG51bWJlcikgLSByZXF1ZXN0ZWRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0Rpc3RhbmNlIDwgY2xvc2VzdERpc3RhbmNlIHx8IChuZXdEaXN0YW5jZSA9PSBjbG9zZXN0RGlzdGFuY2UgJiYgKGNoaWxkLmluZGV4IGFzIG51bWJlcikgPCByZXF1ZXN0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gbmV3RGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3RJbmRleCA9IChjaGlsZC5pbmRleCBhcyBudW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZXN0SW5kZXg7XG4gICAgfSwgWy8qIE11c3QgcmVtYWluIHN0YWJsZSEgKi9dKTtcblxuICAgIC8vIEFueSB0aW1lIGEgY2hpbGQgbW91bnRzL3VubW91bnRzLCB3ZSBuZWVkIHRvIGRvdWJsZS1jaGVjayB0byBzZWUgaWYgdGhhdCBhZmZlY3RzIFxuICAgIC8vIHRoZSBcImN1cnJlbnRseSBzZWxlY3RlZFwiIChvciB3aGF0ZXZlcikgaW5kZXguICBUaGUgdHdvIGNhc2VzIHdlJ3JlIGxvb2tpbmcgZm9yOlxuICAgIC8vIDEuIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgY2hpbGQgdW5tb3VudGVkXG4gICAgLy8gMi4gQSBjaGlsZCBtb3VudGVkLCBhbmQgaXQgbW91bnRzIHdpdGggdGhlIGluZGV4IHdlJ3JlIGxvb2tpbmcgZm9yXG4gICAgY29uc3QgcmVldmFsdWF0ZUNsb3Nlc3RGaXQgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkSW5kZXggPSBnZXRSZXF1ZXN0ZWRJbmRleCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcbiAgICAgICAgY29uc3QgY3VycmVudENoaWxkID0gY3VycmVudEluZGV4ID09IG51bGwgPyBudWxsIDogY2hpbGRyZW4uZ2V0QXQoY3VycmVudEluZGV4KTtcblxuICAgICAgICBpZiAocmVxdWVzdGVkSW5kZXggIT0gbnVsbCAmJiBjbG9zZXN0Rml0ICYmIChyZXF1ZXN0ZWRJbmRleCAhPSBjdXJyZW50SW5kZXggfHwgY3VycmVudENoaWxkID09IG51bGwgfHwgIWlzVmFsaWQoY3VycmVudENoaWxkKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KHR5cGVvZiByZXF1ZXN0ZWRJbmRleCA9PSBcIm51bWJlclwiLCBcImNsb3Nlc3RGaXQgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIGVhY2ggY2hpbGQgaGFzIGEgbnVtZXJpYyBpbmRleCwgYW5kIGNhbm5vdCBiZSB1c2VkIHdoZW4gY2hpbGRyZW4gdXNlIHN0cmluZyBpbmRpY2VzIGluc3RlYWQuXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0Rml0SW5kZXggPSBnZXRDbG9zZXN0Rml0KHJlcXVlc3RlZEluZGV4IGFzIG51bWJlcik7XG4gICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY2xvc2VzdEZpdEluZGV4LCB1bmRlZmluZWQhKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q2hpbGQpXG4gICAgICAgICAgICAgICAgc2V0QXQoY3VycmVudENoaWxkLCBmYWxzZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VzdEZpdENoaWxkID0gY2hpbGRyZW4uZ2V0QXQoY2xvc2VzdEZpdEluZGV4KSE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY2xvc2VzdEZpdENoaWxkICE9IG51bGwsIFwiSW50ZXJuYWwgbG9naWM/Pz9cIik7XG4gICAgICAgICAgICAgICAgc2V0QXQoY2xvc2VzdEZpdENoaWxkLCB0cnVlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG5cblxuXG4gICAgY29uc3QgY2hhbmdlSW5kZXggPSB1c2VDYWxsYmFjazxQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+PigoYXJnOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8TVtcImluZGV4XCJdIHwgbnVsbCwgUj4+WzBdLCByZWFzb246IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPj5bMV0pID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbigpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ZWRJbmRleCA9IChhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhnZXRSZXF1ZXN0ZWRJbmRleCgpKSA6IGFyZykgYXMgTVtcImluZGV4XCJdO1xuXG4gICAgICAgIHNldFJlcXVlc3RlZEluZGV4KHJlcXVlc3RlZEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgpO1xuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09IHJlcXVlc3RlZEluZGV4KVxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RlZEluZGV4O1xuXG4gICAgICAgIGxldCBuZXdNYXRjaGluZ0NoaWxkID0gKHJlcXVlc3RlZEluZGV4ID09IG51bGwgPyBudWxsIDogY2hpbGRyZW4uZ2V0QXQocmVxdWVzdGVkSW5kZXgpKTtcbiAgICAgICAgY29uc3Qgb2xkTWF0Y2hpbmdDaGlsZCA9IChjdXJyZW50SW5kZXggPT0gbnVsbCA/IG51bGwgOiBjaGlsZHJlbi5nZXRBdChjdXJyZW50SW5kZXgpKTtcbiAgICAgICAgaWYgKHJlcXVlc3RlZEluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIEVhc3kgY2FzZVxuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KG51bGwsIHJlYXNvbiBhcyBSKTtcbiAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCByZXF1ZXN0ZWRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRJc1ZhbGlkID0gKG5ld01hdGNoaW5nQ2hpbGQgJiYgaXNWYWxpZChuZXdNYXRjaGluZ0NoaWxkKSk7XG4gICAgICAgICAgICBpZiAoY2hpbGRJc1ZhbGlkIHx8ICFjbG9zZXN0Rml0KSB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KHJlcXVlc3RlZEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgICAgICAgICAgaWYgKG9sZE1hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCByZXF1ZXN0ZWRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3TWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgc2V0QXQobmV3TWF0Y2hpbmdDaGlsZCwgdHJ1ZSwgcmVxdWVzdGVkSW5kZXgsIGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdGVkSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgcmVxdWVzdGVkSW5kZXggPT0gXCJudW1iZXJcIiwgXCJjbG9zZXN0Rml0IGNhbiBvbmx5IGJlIHVzZWQgd2hlbiBlYWNoIGNoaWxkIGhhcyBhIG51bWVyaWMgaW5kZXgsIGFuZCBjYW5ub3QgYmUgdXNlZCB3aGVuIGNoaWxkcmVuIHVzZSBzdHJpbmcgaW5kaWNlcyBpbnN0ZWFkLlwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RGaXRJbmRleCA9IGdldENsb3Nlc3RGaXQocmVxdWVzdGVkSW5kZXggYXMgbnVtYmVyKTtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoY2xvc2VzdEZpdEluZGV4LCByZWFzb24gYXMgUik7XG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3RGaXRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld01hdGNoaW5nQ2hpbGQgPSBjaGlsZHJlbi5nZXRBdChjbG9zZXN0Rml0SW5kZXgpITtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQobmV3TWF0Y2hpbmdDaGlsZCAhPSBudWxsLCBcIkludGVybmFsIGxvZ2ljPz8/XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkTWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEF0KG5ld01hdGNoaW5nQ2hpbGQsIHRydWUsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb3Nlc3RGaXRJbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXQob2xkTWF0Y2hpbmdDaGlsZCwgZmFsc2UsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gUnVuIG9uY2UsIG9uIG1vdW50XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY2hhbmdlSW5kZXgoaW5pdGlhbEluZGV4ID8/IG51bGwsIHVuZGVmaW5lZCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4geyBjaGFuZ2VJbmRleCwgcmVldmFsdWF0ZUNsb3Nlc3RGaXQsIGdldEN1cnJlbnRJbmRleCB9O1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIGBCbG9ja2luZ0VsZW1lbnRzYCBtYW5hZ2VzIGEgc3RhY2sgb2YgZWxlbWVudHMgdGhhdCBpbmVydCB0aGUgaW50ZXJhY3Rpb25cbiAqIG91dHNpZGUgdGhlbS4gVGhlIHRvcCBlbGVtZW50IGlzIHRoZSBpbnRlcmFjdGl2ZSBwYXJ0IG9mIHRoZSBkb2N1bWVudC5cbiAqIFRoZSBzdGFjayBjYW4gYmUgdXBkYXRlZCB3aXRoIHRoZSBtZXRob2RzIGBwdXNoLCByZW1vdmUsIHBvcGAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tpbmdFbGVtZW50cyB7XG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiBUaGlzIGVtcHRpZXNcbiAgICogdGhlIGJsb2NraW5nIGVsZW1lbnRzXG4gICAqL1xuICBkZXN0cnVjdG9yKCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIHRvcDogSFRNTEVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogQWRkcyB0aGUgZWxlbWVudCB0byB0aGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAqL1xuICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgZWxlbWVudCBmcm9tIHRoZSBibG9ja2luZyBlbGVtZW50cy4gUmV0dXJucyB0cnVlIGlmIHRoZVxuICAgKiBlbGVtZW50IHdhcyByZW1vdmVkLlxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbjtcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0b3AgYmxvY2tpbmcgZWxlbWVudCBhbmQgcmV0dXJucyBpdC5cbiAgICovXG4gIHBvcCgpOiBIVE1MRWxlbWVudHxudWxsO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGEgYmxvY2tpbmcgZWxlbWVudC5cbiAgICovXG4gIGhhcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50cyBleHRlbmRzIERvY3VtZW50IHtcbiAgJGJsb2NraW5nRWxlbWVudHM6IEJsb2NraW5nRWxlbWVudHM7XG59XG5cbigoKSA9PiB7XG4gIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG5cbiAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG5cbiAgaW50ZXJmYWNlIEluZXJ0YWJsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBpbmVydD86IGJvb2xlYW47XG4gIH1cblxuICBpbnRlcmZhY2UgSW50ZXJuYWxTdGF0ZSB7XG4gICAgW19zaWJsaW5nc1RvUmVzdG9yZV06IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+O1xuICAgIFtfcGFyZW50TU9dOiBNdXRhdGlvbk9ic2VydmVyO1xuICB9XG4gIGludGVyZmFjZSBIYXNJbnRlcm5hbFN0YXRlIGV4dGVuZHMgSW5lcnRhYmxlLCBJbnRlcm5hbFN0YXRlIHt9XG4gIGludGVyZmFjZSBNYXliZUhhc0ludGVybmFsU3RhdGUgZXh0ZW5kcyBJbmVydGFibGUsIFBhcnRpYWw8SW50ZXJuYWxTdGF0ZT4ge31cblxuICAvKipcbiAgICogU2hhZHlET00gc2hhZHkgcm9vdHMgbG9vayBhIGxvdCBsaWtlIHJlYWwgU2hhZG93Um9vdHMuIFRoZSBfX3NoYWR5IHByb3BlcnR5XG4gICAqIGdpdmVzIHRoZW0gYXdheSwgdGhvdWdoLlxuICAgKi9cbiAgaW50ZXJmYWNlIE1heWJlU2hhZHlSb290IGV4dGVuZHMgRWxlbWVudCB7XG4gICAgX19zaGFkeTogdW5rbm93bjtcbiAgICBob3N0OiBFbGVtZW50O1xuICB9XG5cbiAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwgaW1wbGVtZW50cyBCbG9ja2luZ0VsZW1lbnRzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYmxvY2tpbmdFbGVtZW50c106IE1heWJlSGFzSW50ZXJuYWxTdGF0ZVtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcEVsUGFyZW50c106IEhhc0ludGVybmFsU3RhdGVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgKiBwdXNoZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbmV3IFNldDxNYXliZUhhc0ludGVybmFsU3RhdGU+KCk7XG5cbiAgICBkZXN0cnVjdG9yKCk6IHZvaWQge1xuICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcyBhcyB1bmtub3duIGFzIHtcbiAgICAgICAgW19ibG9ja2luZ0VsZW1lbnRzXTogbnVsbDtcbiAgICAgICAgW190b3BFbFBhcmVudHNdOiBudWxsO1xuICAgICAgICBbX2FscmVhZHlJbmVydEVsZW1lbnRzXTogbnVsbDtcbiAgICAgIH07XG4gICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0IHRvcCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICBwdXNoKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9wKCk6IEhUTUxFbGVtZW50fG51bGwge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgIHJldHVybiB0b3A7XG4gICAgfVxuXG4gICAgaGFzKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAqL1xuICAgIHByaXZhdGVbX3RvcENoYW5nZWRdKG5ld1RvcDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlfG51bGwpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICB9XG4gICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgLy8gYmVsb3cuXG4gICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cyBhcyBBcnJheTxIYXNJbnRlcm5hbFN0YXRlPjtcblxuICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcblxuICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICBpLS07XG4gICAgICAgIGotLTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgfVxuICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX3N3YXBJbmVydGVkU2libGluZ10oXG4gICAgICAgIG9sZEluZXJ0OiBIYXNJbnRlcm5hbFN0YXRlLCBuZXdJbmVydDogTWF5YmVIYXNJbnRlcm5hbFN0YXRlKTogdm9pZCB7XG4gICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgIH1cbiAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgfVxuICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAob2xkSW5lcnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgKG9sZEluZXJ0IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50czogSGFzSW50ZXJuYWxTdGF0ZVtdKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgKGVsZW1lbnQgYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlKVtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIChlbGVtZW50IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfaW5lcnRTaWJsaW5nc10oXG4gICAgICAgIGVsZW1lbnRzOiBNYXliZUhhc0ludGVybmFsU3RhdGVbXSwgdG9Ta2lwOiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwsXG4gICAgICAgIHRvS2VlcEluZXJ0OiBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlITtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal0gYXMgTWF5YmVIYXNJbnRlcm5hbFN0YXRlO1xuICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmUgYXMgTWF5YmVTaGFkeVJvb3Q7XG4gICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICB9XG4gICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgKi9cbiAgICBwcml2YXRlW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQge1xuICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICBjb25zdCB0YXJnZXQgPSAobXV0YXRpb24udGFyZ2V0IGFzIFNoYWRvd1Jvb3QpLmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCBhcyBIYXNJbnRlcm5hbFN0YXRlKTtcbiAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG5cbiAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgKi9cbiAgICBwcml2YXRlW19pc0luZXJ0YWJsZV0oZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2dldFBhcmVudHNdKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQXJyYXk8SFRNTEVsZW1lbnQ+IHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgIGxldCBjdXJyZW50OiBIVE1MRWxlbWVudHxudWxsfHVuZGVmaW5lZCA9IGVsZW1lbnQ7XG4gICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8fFxuICAgICAgICAgICAgKGN1cnJlbnQgYXMgTm9kZSBhcyBTaGFkb3dSb290KS5ob3N0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudDogSFRNTEVsZW1lbnQpOlxuICAgICAgICBTZXQ8SFRNTEVsZW1lbnQ+fG51bGwge1xuICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG4gICAgICBsZXQgaTtcbiAgICAgIGxldCBqO1xuICAgICAgbGV0IG5vZGVzO1xuICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIChkb2N1bWVudCBhcyBEb2N1bWVudFdpdGhCbG9ja2luZ0VsZW1lbnRzKS4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4iLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICovXG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgLyoqXG4gICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgKi9cbiAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgLyoqXG4gICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgKiBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAqXG4gICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAqXG4gICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICovXG5cbiAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgKi9cbiAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgfVxuXG4gICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSW5lcnRSb290O1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICpcbiAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICpcbiAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgKi9cblxuXG4gIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAqL1xuICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnbm9kZScsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgIH1cblxuICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAqXG4gICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICovXG5cblxuICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgfVxuXG4gICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAqL1xuICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICovXG4gICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICovXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gIH0oKTtcblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUhUTUxFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgfSxcbiAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcbiIsIlxuaW1wb3J0IHsgU3RhdGVVcGRhdGVyLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKiBcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCB8ICgoKSA9PiBUKSk6IHJlYWRvbmx5IFt2YWx1ZTogVCwgc2V0VmFsdWU6IFN0YXRlVXBkYXRlcjxUPiwgZ2V0VmFsdWU6ICgpID0+IFRdIHtcblxuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcblxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrPFN0YXRlVXBkYXRlcjxUPj4odmFsdWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUgYXMgKChfcHJldlZhbHVlOiBUKSA9PiBUKTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuXG5cbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdIGFzIGNvbnN0O1xufSIsIi8qKlxuICogQXNzaWduIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgIHRvIGBvYmpgXG4gKiBAdGVtcGxhdGUgTywgUCBUaGUgb2JqIGFuZCBwcm9wcyB0eXBlc1xuICogQHBhcmFtIHtPfSBvYmogVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG9cbiAqIEBwYXJhbSB7UH0gcHJvcHMgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHJldHVybnMge08gJiBQfVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKG9iaiwgcHJvcHMpIHtcblx0Zm9yIChsZXQgaSBpbiBwcm9wcykgb2JqW2ldID0gcHJvcHNbaV07XG5cdHJldHVybiAvKiogQHR5cGUge08gJiBQfSAqLyAob2JqKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGEgZGlmZmVyZW50IHNoYXBlXG4gKiBAcGFyYW0ge29iamVjdH0gYVxuICogQHBhcmFtIHtvYmplY3R9IGJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hhbGxvd0RpZmZlcnMoYSwgYikge1xuXHRmb3IgKGxldCBpIGluIGEpIGlmIChpICE9PSAnX19zb3VyY2UnICYmICEoaSBpbiBiKSkgcmV0dXJuIHRydWU7XG5cdGZvciAobGV0IGkgaW4gYikgaWYgKGkgIT09ICdfX3NvdXJjZScgJiYgYVtpXSAhPT0gYltpXSkgcmV0dXJuIHRydWU7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgdGhlIHNhbWUgdmFsdWVcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHsqfSB5XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzKHgsIHkpIHtcblx0cmV0dXJuICh4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkpIHx8ICh4ICE9PSB4ICYmIHkgIT09IHkpO1xufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHNoYWxsb3dEaWZmZXJzIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDb21wb25lbnQgY2xhc3Mgd2l0aCBhIHByZWRlZmluZWQgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgaW1wbGVtZW50YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFB1cmVDb21wb25lbnQocCkge1xuXHR0aGlzLnByb3BzID0gcDtcbn1cblB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuLy8gU29tZSB0aGlyZC1wYXJ0eSBsaWJyYXJpZXMgY2hlY2sgaWYgdGhpcyBwcm9wZXJ0eSBpcyBwcmVzZW50XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0cmV0dXJuIHNoYWxsb3dEaWZmZXJzKHRoaXMucHJvcHMsIHByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBzdGF0ZSk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzaGFsbG93RGlmZmVycyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogTWVtb2l6ZSBhIGNvbXBvbmVudCwgc28gdGhhdCBpdCBvbmx5IHVwZGF0ZXMgd2hlbiB0aGUgcHJvcHMgYWN0dWFsbHkgaGF2ZVxuICogY2hhbmdlZC4gVGhpcyB3YXMgcHJldmlvdXNseSBrbm93biBhcyBgUmVhY3QucHVyZWAuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSBjIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gKiBAcGFyYW0geyhwcmV2OiBvYmplY3QsIG5leHQ6IG9iamVjdCkgPT4gYm9vbGVhbn0gW2NvbXBhcmVyXSBDdXN0b20gZXF1YWxpdHkgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW8oYywgY29tcGFyZXIpIHtcblx0ZnVuY3Rpb24gc2hvdWxkVXBkYXRlKG5leHRQcm9wcykge1xuXHRcdGxldCByZWYgPSB0aGlzLnByb3BzLnJlZjtcblx0XHRsZXQgdXBkYXRlUmVmID0gcmVmID09IG5leHRQcm9wcy5yZWY7XG5cdFx0aWYgKCF1cGRhdGVSZWYgJiYgcmVmKSB7XG5cdFx0XHRyZWYuY2FsbCA/IHJlZihudWxsKSA6IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdH1cblxuXHRcdGlmICghY29tcGFyZXIpIHtcblx0XHRcdHJldHVybiBzaGFsbG93RGlmZmVycyh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiAhY29tcGFyZXIodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhdXBkYXRlUmVmO1xuXHR9XG5cblx0ZnVuY3Rpb24gTWVtb2VkKHByb3BzKSB7XG5cdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBzaG91bGRVcGRhdGU7XG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoYywgcHJvcHMpO1xuXHR9XG5cdE1lbW9lZC5kaXNwbGF5TmFtZSA9ICdNZW1vKCcgKyAoYy5kaXNwbGF5TmFtZSB8fCBjLm5hbWUpICsgJyknO1xuXHRNZW1vZWQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXHRNZW1vZWQuX2ZvcndhcmRlZCA9IHRydWU7XG5cdHJldHVybiBNZW1vZWQ7XG59XG4iLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmxldCBvbGREaWZmSG9vayA9IG9wdGlvbnMuX2RpZmY7XG5vcHRpb25zLl9kaWZmID0gdm5vZGUgPT4ge1xuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLl9mb3J3YXJkZWQgJiYgdm5vZGUucmVmKSB7XG5cdFx0dm5vZGUucHJvcHMucmVmID0gdm5vZGUucmVmO1xuXHRcdHZub2RlLnJlZiA9IG51bGw7XG5cdH1cblx0aWYgKG9sZERpZmZIb29rKSBvbGREaWZmSG9vayh2bm9kZSk7XG59O1xuXG5leHBvcnQgY29uc3QgUkVBQ1RfRk9SV0FSRF9TWU1CT0wgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJlxuXHRcdFN5bWJvbC5mb3IgJiZcblx0XHRTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpKSB8fFxuXHQweGY0NztcblxuLyoqXG4gKiBQYXNzIHJlZiBkb3duIHRvIGEgY2hpbGQuIFRoaXMgaXMgbWFpbmx5IHVzZWQgaW4gbGlicmFyaWVzIHdpdGggSE9DcyB0aGF0XG4gKiB3cmFwIGNvbXBvbmVudHMuIFVzaW5nIGBmb3J3YXJkUmVmYCB0aGVyZSBpcyBhbiBlYXN5IHdheSB0byBnZXQgYSByZWZlcmVuY2VcbiAqIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpbnN0ZWFkIG9mIG9uZSBvZiB0aGUgd3JhcHBlciBpdHNlbGYuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLkZvcndhcmRGbn0gZm5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRSZWYoZm4pIHtcblx0ZnVuY3Rpb24gRm9yd2FyZGVkKHByb3BzKSB7XG5cdFx0bGV0IGNsb25lID0gYXNzaWduKHt9LCBwcm9wcyk7XG5cdFx0ZGVsZXRlIGNsb25lLnJlZjtcblx0XHRyZXR1cm4gZm4oY2xvbmUsIHByb3BzLnJlZiB8fCBudWxsKTtcblx0fVxuXG5cdC8vIG1vYngtcmVhY3QgY2hlY2tzIGZvciB0aGlzIGJlaW5nIHByZXNlbnRcblx0Rm9yd2FyZGVkLiQkdHlwZW9mID0gUkVBQ1RfRk9SV0FSRF9TWU1CT0w7XG5cdC8vIG1vYngtcmVhY3QgaGVhdmlseSByZWxpZXMgb24gaW1wbGVtZW50YXRpb24gZGV0YWlscy5cblx0Ly8gSXQgZXhwZWN0cyBhbiBvYmplY3QgaGVyZSB3aXRoIGEgYHJlbmRlcmAgcHJvcGVydHksXG5cdC8vIGFuZCBwcm90b3R5cGUucmVuZGVyIHdpbGwgZmFpbC4gV2l0aG91dCB0aGlzXG5cdC8vIG1vYngtcmVhY3QgdGhyb3dzLlxuXHRGb3J3YXJkZWQucmVuZGVyID0gRm9yd2FyZGVkO1xuXG5cdEZvcndhcmRlZC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IEZvcndhcmRlZC5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0Rm9yd2FyZGVkLmRpc3BsYXlOYW1lID0gJ0ZvcndhcmRSZWYoJyArIChmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lKSArICcpJztcblx0cmV0dXJuIEZvcndhcmRlZDtcbn1cbiIsImltcG9ydCB7IHRvQ2hpbGRBcnJheSB9IGZyb20gJ3ByZWFjdCc7XG5cbmNvbnN0IG1hcEZuID0gKGNoaWxkcmVuLCBmbikgPT4ge1xuXHRpZiAoY2hpbGRyZW4gPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cdHJldHVybiB0b0NoaWxkQXJyYXkodG9DaGlsZEFycmF5KGNoaWxkcmVuKS5tYXAoZm4pKTtcbn07XG5cbi8vIFRoaXMgQVBJIGlzIGNvbXBsZXRlbHkgdW5uZWNlc3NhcnkgZm9yIFByZWFjdCwgc28gaXQncyBiYXNpY2FsbHkgcGFzc3Rocm91Z2guXG5leHBvcnQgY29uc3QgQ2hpbGRyZW4gPSB7XG5cdG1hcDogbWFwRm4sXG5cdGZvckVhY2g6IG1hcEZuLFxuXHRjb3VudChjaGlsZHJlbikge1xuXHRcdHJldHVybiBjaGlsZHJlbiA/IHRvQ2hpbGRBcnJheShjaGlsZHJlbikubGVuZ3RoIDogMDtcblx0fSxcblx0b25seShjaGlsZHJlbikge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWQgPSB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pO1xuXHRcdGlmIChub3JtYWxpemVkLmxlbmd0aCAhPT0gMSkgdGhyb3cgJ0NoaWxkcmVuLm9ubHknO1xuXHRcdHJldHVybiBub3JtYWxpemVkWzBdO1xuXHR9LFxuXHR0b0FycmF5OiB0b0NoaWxkQXJyYXlcbn07XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQsIG9wdGlvbnMsIEZyYWdtZW50IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IGFzc2lnbiB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IG9sZENhdGNoRXJyb3IgPSBvcHRpb25zLl9jYXRjaEVycm9yO1xub3B0aW9ucy5fY2F0Y2hFcnJvciA9IGZ1bmN0aW9uKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHRpZiAoZXJyb3IudGhlbikge1xuXHRcdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRcdGxldCBjb21wb25lbnQ7XG5cdFx0bGV0IHZub2RlID0gbmV3Vk5vZGU7XG5cblx0XHRmb3IgKDsgKHZub2RlID0gdm5vZGUuX3BhcmVudCk7ICkge1xuXHRcdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZCkge1xuXHRcdFx0XHRpZiAobmV3Vk5vZGUuX2RvbSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIERvbid0IGNhbGwgb2xkQ2F0Y2hFcnJvciBpZiB3ZSBmb3VuZCBhIFN1c3BlbnNlXG5cdFx0XHRcdHJldHVybiBjb21wb25lbnQuX2NoaWxkRGlkU3VzcGVuZChlcnJvciwgbmV3Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRvbGRDYXRjaEVycm9yKGVycm9yLCBuZXdWTm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbyk7XG59O1xuXG5jb25zdCBvbGRVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xub3B0aW9ucy51bm1vdW50ID0gZnVuY3Rpb24odm5vZGUpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGNvbnN0IGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50Ll9vblJlc29sdmUpIHtcblx0XHRjb21wb25lbnQuX29uUmVzb2x2ZSgpO1xuXHR9XG5cblx0Ly8gaWYgdGhlIGNvbXBvbmVudCBpcyBzdGlsbCBoeWRyYXRpbmdcblx0Ly8gbW9zdCBsaWtlbHkgaXQgaXMgYmVjYXVzZSB0aGUgY29tcG9uZW50IGlzIHN1c3BlbmRlZFxuXHQvLyB3ZSBzZXQgdGhlIHZub2RlLnR5cGUgYXMgYG51bGxgIHNvIHRoYXQgaXQgaXMgbm90IGEgdHlwZW9mIGZ1bmN0aW9uXG5cdC8vIHNvIHRoZSB1bm1vdW50IHdpbGwgcmVtb3ZlIHRoZSB2bm9kZS5fZG9tXG5cdGlmIChjb21wb25lbnQgJiYgdm5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZSkge1xuXHRcdHZub2RlLnR5cGUgPSBudWxsO1xuXHR9XG5cblx0aWYgKG9sZFVubW91bnQpIG9sZFVubW91bnQodm5vZGUpO1xufTtcblxuZnVuY3Rpb24gZGV0YWNoZWRDbG9uZSh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIHBhcmVudERvbSkge1xuXHRpZiAodm5vZGUpIHtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAmJiB2bm9kZS5fY29tcG9uZW50Ll9faG9va3MpIHtcblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5mb3JFYWNoKGVmZmVjdCA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZWZmZWN0Ll9jbGVhbnVwID09ICdmdW5jdGlvbicpIGVmZmVjdC5fY2xlYW51cCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHZub2RlLl9jb21wb25lbnQuX19ob29rcyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0dm5vZGUgPSBhc3NpZ24oe30sIHZub2RlKTtcblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCAhPSBudWxsKSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBwYXJlbnREb20pIHtcblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID0gZGV0YWNoZWRQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0XHR2bm9kZS5fY29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cblx0XHR2bm9kZS5fY2hpbGRyZW4gPVxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuICYmXG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4ubWFwKGNoaWxkID0+XG5cdFx0XHRcdGRldGFjaGVkQ2xvbmUoY2hpbGQsIGRldGFjaGVkUGFyZW50LCBwYXJlbnREb20pXG5cdFx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVPcmlnaW5hbCh2bm9kZSwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdHZub2RlLl9vcmlnaW5hbCA9IG51bGw7XG5cdFx0dm5vZGUuX2NoaWxkcmVuID1cblx0XHRcdHZub2RlLl9jaGlsZHJlbiAmJlxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuLm1hcChjaGlsZCA9PlxuXHRcdFx0XHRyZW1vdmVPcmlnaW5hbChjaGlsZCwgZGV0YWNoZWRQYXJlbnQsIG9yaWdpbmFsUGFyZW50KVxuXHRcdFx0KTtcblxuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB7XG5cdFx0XHRpZiAodm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID09PSBkZXRhY2hlZFBhcmVudCkge1xuXHRcdFx0XHRpZiAodm5vZGUuX2RvbSkge1xuXHRcdFx0XHRcdG9yaWdpbmFsUGFyZW50Lmluc2VydEJlZm9yZSh2bm9kZS5fZG9tLCB2bm9kZS5fbmV4dERvbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fZm9yY2UgPSB0cnVlO1xuXHRcdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20gPSBvcmlnaW5hbFBhcmVudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbi8vIGhhdmluZyBjdXN0b20gaW5oZXJpdGFuY2UgaW5zdGVhZCBvZiBhIGNsYXNzIGhlcmUgc2F2ZXMgYSBsb3Qgb2YgYnl0ZXNcbmV4cG9ydCBmdW5jdGlvbiBTdXNwZW5zZSgpIHtcblx0Ly8gd2UgZG8gbm90IGNhbGwgc3VwZXIgaGVyZSB0byBnb2xmIHNvbWUgYnl0ZXMuLi5cblx0dGhpcy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCA9IDA7XG5cdHRoaXMuX3N1c3BlbmRlcnMgPSBudWxsO1xuXHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xufVxuXG4vLyBUaGluZ3Mgd2UgZG8gaGVyZSB0byBzYXZlIHNvbWUgYnl0ZXMgYnV0IGFyZSBub3QgcHJvcGVyIEpTIGluaGVyaXRhbmNlOlxuLy8gLSBjYWxsIGBuZXcgQ29tcG9uZW50KClgIGFzIHRoZSBwcm90b3R5cGVcbi8vIC0gZG8gbm90IHNldCBgU3VzcGVuc2UucHJvdG90eXBlLmNvbnN0cnVjdG9yYCB0byBgU3VzcGVuc2VgXG5TdXNwZW5zZS5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fVxuICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIFRoZSB0aHJvd24gcHJvbWlzZVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZTxhbnksIGFueT59IHN1c3BlbmRpbmdWTm9kZSBUaGUgc3VzcGVuZGluZyBjb21wb25lbnRcbiAqL1xuU3VzcGVuc2UucHJvdG90eXBlLl9jaGlsZERpZFN1c3BlbmQgPSBmdW5jdGlvbihwcm9taXNlLCBzdXNwZW5kaW5nVk5vZGUpIHtcblx0Y29uc3Qgc3VzcGVuZGluZ0NvbXBvbmVudCA9IHN1c3BlbmRpbmdWTm9kZS5fY29tcG9uZW50O1xuXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9ICovXG5cdGNvbnN0IGMgPSB0aGlzO1xuXG5cdGlmIChjLl9zdXNwZW5kZXJzID09IG51bGwpIHtcblx0XHRjLl9zdXNwZW5kZXJzID0gW107XG5cdH1cblx0Yy5fc3VzcGVuZGVycy5wdXNoKHN1c3BlbmRpbmdDb21wb25lbnQpO1xuXG5cdGNvbnN0IHJlc29sdmUgPSBzdXNwZW5kZWQoYy5fdm5vZGUpO1xuXG5cdGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXHRjb25zdCBvblJlc29sdmVkID0gKCkgPT4ge1xuXHRcdGlmIChyZXNvbHZlZCkgcmV0dXJuO1xuXG5cdFx0cmVzb2x2ZWQgPSB0cnVlO1xuXHRcdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG51bGw7XG5cblx0XHRpZiAocmVzb2x2ZSkge1xuXHRcdFx0cmVzb2x2ZShvblN1c3BlbnNpb25Db21wbGV0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9uU3VzcGVuc2lvbkNvbXBsZXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHN1c3BlbmRpbmdDb21wb25lbnQuX29uUmVzb2x2ZSA9IG9uUmVzb2x2ZWQ7XG5cblx0Y29uc3Qgb25TdXNwZW5zaW9uQ29tcGxldGUgPSAoKSA9PiB7XG5cdFx0aWYgKCEtLWMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQpIHtcblx0XHRcdC8vIElmIHRoZSBzdXNwZW5zaW9uIHdhcyBkdXJpbmcgaHlkcmF0aW9uIHdlIGRvbid0IG5lZWQgdG8gcmVzdG9yZSB0aGVcblx0XHRcdC8vIHN1c3BlbmRlZCBjaGlsZHJlbiBpbnRvIHRoZSBfY2hpbGRyZW4gYXJyYXlcblx0XHRcdGlmIChjLnN0YXRlLl9zdXNwZW5kZWQpIHtcblx0XHRcdFx0Y29uc3Qgc3VzcGVuZGVkVk5vZGUgPSBjLnN0YXRlLl9zdXNwZW5kZWQ7XG5cdFx0XHRcdGMuX3Zub2RlLl9jaGlsZHJlblswXSA9IHJlbW92ZU9yaWdpbmFsKFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLFxuXHRcdFx0XHRcdHN1c3BlbmRlZFZOb2RlLl9jb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZS5fY29tcG9uZW50Ll9vcmlnaW5hbFBhcmVudERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjLnNldFN0YXRlKHsgX3N1c3BlbmRlZDogKGMuX2RldGFjaE9uTmV4dFJlbmRlciA9IG51bGwpIH0pO1xuXG5cdFx0XHRsZXQgc3VzcGVuZGVkO1xuXHRcdFx0d2hpbGUgKChzdXNwZW5kZWQgPSBjLl9zdXNwZW5kZXJzLnBvcCgpKSkge1xuXHRcdFx0XHRzdXNwZW5kZWQuZm9yY2VVcGRhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFdlIGRvIG5vdCBzZXQgYHN1c3BlbmRlZDogdHJ1ZWAgZHVyaW5nIGh5ZHJhdGlvbiBiZWNhdXNlIHdlIHdhbnQgdGhlIGFjdHVhbCBtYXJrdXBcblx0ICogdG8gcmVtYWluIG9uIHNjcmVlbiBhbmQgaHlkcmF0ZSBpdCB3aGVuIHRoZSBzdXNwZW5zZSBhY3R1YWxseSBnZXRzIHJlc29sdmVkLlxuXHQgKiBXaGlsZSBpbiBub24taHlkcmF0aW9uIGNhc2VzIHRoZSB1c3VhbCBmYWxsYmFjayAtPiBjb21wb25lbnQgZmxvdyB3b3VsZCBvY2NvdXIuXG5cdCAqL1xuXHRjb25zdCB3YXNIeWRyYXRpbmcgPSBzdXNwZW5kaW5nVk5vZGUuX2h5ZHJhdGluZyA9PT0gdHJ1ZTtcblx0aWYgKCFjLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50KysgJiYgIXdhc0h5ZHJhdGluZykge1xuXHRcdGMuc2V0U3RhdGUoeyBfc3VzcGVuZGVkOiAoYy5fZGV0YWNoT25OZXh0UmVuZGVyID0gYy5fdm5vZGUuX2NoaWxkcmVuWzBdKSB9KTtcblx0fVxuXHRwcm9taXNlLnRoZW4ob25SZXNvbHZlZCwgb25SZXNvbHZlZCk7XG59O1xuXG5TdXNwZW5zZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5fc3VzcGVuZGVycyA9IFtdO1xufTtcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCcuL2ludGVybmFsJykuU3VzcGVuc2VDb21wb25lbnR9XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50W1wicHJvcHNcIl19IHByb3BzXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlU3RhdGV9IHN0YXRlXG4gKi9cblN1c3BlbnNlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihwcm9wcywgc3RhdGUpIHtcblx0aWYgKHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcikge1xuXHRcdC8vIFdoZW4gdGhlIFN1c3BlbnNlJ3MgX3Zub2RlIHdhcyBjcmVhdGVkIGJ5IGEgY2FsbCB0byBjcmVhdGVWTm9kZVxuXHRcdC8vIChpLmUuIGR1ZSB0byBhIHNldFN0YXRlIGZ1cnRoZXIgdXAgaW4gdGhlIHRyZWUpXG5cdFx0Ly8gaXQncyBfY2hpbGRyZW4gcHJvcCBpcyBudWxsLCBpbiB0aGlzIGNhc2Ugd2UgXCJmb3JnZXRcIiBhYm91dCB0aGUgcGFya2VkIHZub2RlcyB0byBkZXRhY2hcblx0XHRpZiAodGhpcy5fdm5vZGUuX2NoaWxkcmVuKSB7XG5cdFx0XHRjb25zdCBkZXRhY2hlZFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29uc3QgZGV0YWNoZWRDb21wb25lbnQgPSB0aGlzLl92bm9kZS5fY2hpbGRyZW5bMF0uX2NvbXBvbmVudDtcblx0XHRcdHRoaXMuX3Zub2RlLl9jaGlsZHJlblswXSA9IGRldGFjaGVkQ2xvbmUoXG5cdFx0XHRcdHRoaXMuX2RldGFjaE9uTmV4dFJlbmRlcixcblx0XHRcdFx0ZGV0YWNoZWRQYXJlbnQsXG5cdFx0XHRcdChkZXRhY2hlZENvbXBvbmVudC5fb3JpZ2luYWxQYXJlbnREb20gPSBkZXRhY2hlZENvbXBvbmVudC5fcGFyZW50RG9tKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsO1xuXHR9XG5cblx0Ly8gV3JhcCBmYWxsYmFjayB0cmVlIGluIGEgVk5vZGUgdGhhdCBwcmV2ZW50cyBpdHNlbGYgZnJvbSBiZWluZyBtYXJrZWQgYXMgYWJvcnRpbmcgbWlkLWh5ZHJhdGlvbjpcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3QgZmFsbGJhY2sgPVxuXHRcdHN0YXRlLl9zdXNwZW5kZWQgJiYgY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgcHJvcHMuZmFsbGJhY2spO1xuXHRpZiAoZmFsbGJhY2spIGZhbGxiYWNrLl9oeWRyYXRpbmcgPSBudWxsO1xuXG5cdHJldHVybiBbXG5cdFx0Y3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgc3RhdGUuX3N1c3BlbmRlZCA/IG51bGwgOiBwcm9wcy5jaGlsZHJlbiksXG5cdFx0ZmFsbGJhY2tcblx0XTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGFuZCBjYWxscyB0aGUgcGFyZW50IGNvbXBvbmVudCdzIF9zdXNwZW5kZWQgbWV0aG9kLCBwYXNzaW5nIGluIHRoZVxuICogc3VzcGVuZGVkIHZub2RlLiBUaGlzIGlzIGEgd2F5IGZvciBhIHBhcmVudCAoZS5nLiBTdXNwZW5zZUxpc3QpIHRvIGdldCBub3RpZmllZFxuICogdGhhdCBvbmUgb2YgaXRzIGNoaWxkcmVuL2Rlc2NlbmRhbnRzIHN1c3BlbmRlZC5cbiAqXG4gKiBUaGUgcGFyZW50IE1BWSByZXR1cm4gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgZ2V0IGNhbGxlZCB3aGVuIHRoZVxuICogc3VzcGVuc2lvbiByZXNvbHZlcywgbm90aWZ5aW5nIHRoZSBwYXJlbnQgb2YgdGhlIGZhY3QuXG4gKiBNb3Jlb3ZlciwgdGhlIGNhbGxiYWNrIGdldHMgZnVuY3Rpb24gYHVuc3VzcGVuZGAgYXMgYSBwYXJhbWV0ZXIuIFRoZSByZXNvbHZlZFxuICogY2hpbGQgZGVzY2VuZGFudCB3aWxsIG5vdCBhY3R1YWxseSBnZXQgdW5zdXNwZW5kZWQgdW50aWwgYHVuc3VzcGVuZGAgZ2V0cyBjYWxsZWQuXG4gKiBUaGlzIGlzIGEgd2F5IGZvciB0aGUgcGFyZW50IHRvIGRlbGF5IHVuc3VzcGVuZGluZy5cbiAqXG4gKiBJZiB0aGUgcGFyZW50IGRvZXMgbm90IHJldHVybiBhIGNhbGxiYWNrIHRoZW4gdGhlIHJlc29sdmVkIHZub2RlXG4gKiBnZXRzIHVuc3VzcGVuZGVkIGltbWVkaWF0ZWx5IHdoZW4gaXQgcmVzb2x2ZXMuXG4gKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEByZXR1cm5zIHsoKHVuc3VzcGVuZDogKCkgPT4gdm9pZCkgPT4gdm9pZCk/fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VzcGVuZGVkKHZub2RlKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRsZXQgY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudC5fY29tcG9uZW50O1xuXHRyZXR1cm4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkICYmIGNvbXBvbmVudC5fc3VzcGVuZGVkKHZub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenkobG9hZGVyKSB7XG5cdGxldCBwcm9tO1xuXHRsZXQgY29tcG9uZW50O1xuXHRsZXQgZXJyb3I7XG5cblx0ZnVuY3Rpb24gTGF6eShwcm9wcykge1xuXHRcdGlmICghcHJvbSkge1xuXHRcdFx0cHJvbSA9IGxvYWRlcigpO1xuXHRcdFx0cHJvbS50aGVuKFxuXHRcdFx0XHRleHBvcnRzID0+IHtcblx0XHRcdFx0XHRjb21wb25lbnQgPSBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cztcblx0XHRcdFx0fSxcblx0XHRcdFx0ZSA9PiB7XG5cdFx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fVxuXG5cdFx0aWYgKCFjb21wb25lbnQpIHtcblx0XHRcdHRocm93IHByb207XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG5cdH1cblxuXHRMYXp5LmRpc3BsYXlOYW1lID0gJ0xhenknO1xuXHRMYXp5Ll9mb3J3YXJkZWQgPSB0cnVlO1xuXHRyZXR1cm4gTGF6eTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgdG9DaGlsZEFycmF5IH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCB7IHN1c3BlbmRlZCB9IGZyb20gJy4vc3VzcGVuc2UuanMnO1xuXG4vLyBJbmRleGVzIHRvIGxpbmtlZCBsaXN0IG5vZGVzIChub2RlcyBhcmUgc3RvcmVkIGFzIGFycmF5cyB0byBzYXZlIGJ5dGVzKS5cbmNvbnN0IFNVU1BFTkRFRF9DT1VOVCA9IDA7XG5jb25zdCBSRVNPTFZFRF9DT1VOVCA9IDE7XG5jb25zdCBORVhUX05PREUgPSAyO1xuXG4vLyBIYXZpbmcgY3VzdG9tIGluaGVyaXRhbmNlIGluc3RlYWQgb2YgYSBjbGFzcyBoZXJlIHNhdmVzIGEgbG90IG9mIGJ5dGVzLlxuZXhwb3J0IGZ1bmN0aW9uIFN1c3BlbnNlTGlzdCgpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG51bGw7XG59XG5cbi8vIE1hcmsgb25lIG9mIGNoaWxkJ3MgZWFybGllciBzdXNwZW5zaW9ucyBhcyByZXNvbHZlZC5cbi8vIFNvbWUgcGVuZGluZyBjYWxsYmFja3MgbWF5IGJlY29tZSBjYWxsYWJsZSBkdWUgdG8gdGhpc1xuLy8gKGUuZy4gdGhlIGxhc3Qgc3VzcGVuZGVkIGRlc2NlbmRhbnQgZ2V0cyByZXNvbHZlZCB3aGVuXG4vLyByZXZlYWxPcmRlciA9PT0gJ3RvZ2V0aGVyJykuIFByb2Nlc3MgdGhvc2UgY2FsbGJhY2tzIGFzIHdlbGwuXG5jb25zdCByZXNvbHZlID0gKGxpc3QsIGNoaWxkLCBub2RlKSA9PiB7XG5cdGlmICgrK25vZGVbUkVTT0xWRURfQ09VTlRdID09PSBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHQvLyBUaGUgbnVtYmVyIGEgY2hpbGQgKG9yIGFueSBvZiBpdHMgZGVzY2VuZGFudHMpIGhhcyBiZWVuIHN1c3BlbmRlZFxuXHRcdC8vIG1hdGNoZXMgdGhlIG51bWJlciBvZiB0aW1lcyBpdCdzIGJlZW4gcmVzb2x2ZWQuIFRoZXJlZm9yZSB3ZVxuXHRcdC8vIG1hcmsgdGhlIGNoaWxkIGFzIGNvbXBsZXRlbHkgcmVzb2x2ZWQgYnkgZGVsZXRpbmcgaXQgZnJvbSAuX21hcC5cblx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gZmlndXJlIG91dCB3aGVuICphbGwqIGNoaWxkcmVuIGhhdmUgYmVlbiBjb21wbGV0ZWx5XG5cdFx0Ly8gcmVzb2x2ZWQgd2hlbiByZXZlYWxPcmRlciBpcyAndG9nZXRoZXInLlxuXHRcdGxpc3QuX21hcC5kZWxldGUoY2hpbGQpO1xuXHR9XG5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgZmFsc3kgdGhlbiB3ZSBjYW4gZG8gYW4gZWFybHkgZXhpdCwgYXMgdGhlXG5cdC8vIGNhbGxiYWNrcyB3b24ndCBnZXQgcXVldWVkIGluIHRoZSBub2RlIGFueXdheS5cblx0Ly8gSWYgcmV2ZWFsT3JkZXIgaXMgJ3RvZ2V0aGVyJyB0aGVuIGFsc28gZG8gYW4gZWFybHkgZXhpdFxuXHQvLyBpZiBhbGwgc3VzcGVuZGVkIGRlc2NlbmRhbnRzIGhhdmUgbm90IHlldCBiZWVuIHJlc29sdmVkLlxuXHRpZiAoXG5cdFx0IWxpc3QucHJvcHMucmV2ZWFsT3JkZXIgfHxcblx0XHQobGlzdC5wcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ3QnICYmIGxpc3QuX21hcC5zaXplKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBXYWxrIHRoZSBjdXJyZW50bHkgc3VzcGVuZGVkIGNoaWxkcmVuIGluIG9yZGVyLCBjYWxsaW5nIHRoZWlyXG5cdC8vIHN0b3JlZCBjYWxsYmFja3Mgb24gdGhlIHdheS4gU3RvcCBpZiB3ZSBlbmNvdW50ZXIgYSBjaGlsZCB0aGF0XG5cdC8vIGhhcyBub3QgYmVlbiBjb21wbGV0ZWx5IHJlc29sdmVkIHlldC5cblx0bm9kZSA9IGxpc3QuX25leHQ7XG5cdHdoaWxlIChub2RlKSB7XG5cdFx0d2hpbGUgKG5vZGUubGVuZ3RoID4gMykge1xuXHRcdFx0bm9kZS5wb3AoKSgpO1xuXHRcdH1cblx0XHRpZiAobm9kZVtSRVNPTFZFRF9DT1VOVF0gPCBub2RlW1NVU1BFTkRFRF9DT1VOVF0pIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsaXN0Ll9uZXh0ID0gbm9kZSA9IG5vZGVbTkVYVF9OT0RFXTtcblx0fVxufTtcblxuLy8gVGhpbmdzIHdlIGRvIGhlcmUgdG8gc2F2ZSBzb21lIGJ5dGVzIGJ1dCBhcmUgbm90IHByb3BlciBKUyBpbmhlcml0YW5jZTpcbi8vIC0gY2FsbCBgbmV3IENvbXBvbmVudCgpYCBhcyB0aGUgcHJvdG90eXBlXG4vLyAtIGRvIG5vdCBzZXQgYFN1c3BlbnNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgdG8gYFN1c3BlbnNlYFxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcblxuU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5fc3VzcGVuZGVkID0gZnVuY3Rpb24oY2hpbGQpIHtcblx0Y29uc3QgbGlzdCA9IHRoaXM7XG5cdGNvbnN0IGRlbGVnYXRlZCA9IHN1c3BlbmRlZChsaXN0Ll92bm9kZSk7XG5cblx0bGV0IG5vZGUgPSBsaXN0Ll9tYXAuZ2V0KGNoaWxkKTtcblx0bm9kZVtTVVNQRU5ERURfQ09VTlRdKys7XG5cblx0cmV0dXJuIHVuc3VzcGVuZCA9PiB7XG5cdFx0Y29uc3Qgd3JhcHBlZFVuc3VzcGVuZCA9ICgpID0+IHtcblx0XHRcdGlmICghbGlzdC5wcm9wcy5yZXZlYWxPcmRlcikge1xuXHRcdFx0XHQvLyBTcGVjaWFsIGNhc2UgdGhlIHVuZGVmaW5lZCAoZmFsc3kpIHJldmVhbE9yZGVyLCBhcyB0aGVyZVxuXHRcdFx0XHQvLyBpcyBubyBuZWVkIHRvIGNvb3JkaW5hdGUgYSBzcGVjaWZpYyBvcmRlciBvciB1bnN1c3BlbmRzLlxuXHRcdFx0XHR1bnN1c3BlbmQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vZGUucHVzaCh1bnN1c3BlbmQpO1xuXHRcdFx0XHRyZXNvbHZlKGxpc3QsIGNoaWxkLCBub2RlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGlmIChkZWxlZ2F0ZWQpIHtcblx0XHRcdGRlbGVnYXRlZCh3cmFwcGVkVW5zdXNwZW5kKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d3JhcHBlZFVuc3VzcGVuZCgpO1xuXHRcdH1cblx0fTtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocHJvcHMpIHtcblx0dGhpcy5fbmV4dCA9IG51bGw7XG5cdHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcblxuXHRjb25zdCBjaGlsZHJlbiA9IHRvQ2hpbGRBcnJheShwcm9wcy5jaGlsZHJlbik7XG5cdGlmIChwcm9wcy5yZXZlYWxPcmRlciAmJiBwcm9wcy5yZXZlYWxPcmRlclswXSA9PT0gJ2InKSB7XG5cdFx0Ly8gSWYgb3JkZXIgPT09ICdiYWNrd2FyZHMnIChvciwgd2VsbCwgYW55dGhpbmcgc3RhcnRpbmcgd2l0aCBhICdiJylcblx0XHQvLyB0aGVuIGZsaXAgdGhlIGNoaWxkIGxpc3QgYXJvdW5kIHNvIHRoYXQgdGhlIGxhc3QgY2hpbGQgd2lsbCBiZVxuXHRcdC8vIHRoZSBmaXJzdCBpbiB0aGUgbGlua2VkIGxpc3QuXG5cdFx0Y2hpbGRyZW4ucmV2ZXJzZSgpO1xuXHR9XG5cdC8vIEJ1aWxkIHRoZSBsaW5rZWQgbGlzdC4gSXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBpbiByZXZlcnNlIG9yZGVyXG5cdC8vIHNvIHRoYXQgYF9uZXh0YCBwb2ludHMgdG8gdGhlIGZpcnN0IGxpbmtlZCBsaXN0IG5vZGUgdG8gYmUgcmVzb2x2ZWQuXG5cdGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0Ly8gQ3JlYXRlIGEgbmV3IGxpbmtlZCBsaXN0IG5vZGUgYXMgYW4gYXJyYXkgb2YgZm9ybTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGVdXG5cdFx0Ly8gd2hlcmUgc3VzcGVuZGVkX2NvdW50IGFuZCByZXNvbHZlZF9jb3VudCBhcmUgbnVtZXJpYyBjb3VudGVycyBmb3Jcblx0XHQvLyBrZWVwaW5nIHRyYWNrIGhvdyBtYW55IHRpbWVzIGEgbm9kZSBoYXMgYmVlbiBzdXNwZW5kZWQgYW5kIHJlc29sdmVkLlxuXHRcdC8vXG5cdFx0Ly8gTm90ZSB0aGF0IHN1c3BlbmRlZF9jb3VudCBzdGFydHMgZnJvbSAxIGluc3RlYWQgb2YgMCwgc28gd2UgY2FuIGJsb2NrXG5cdFx0Ly8gcHJvY2Vzc2luZyBjYWxsYmFja3MgdW50aWwgY29tcG9uZW50RGlkTW91bnQgaGFzIGJlZW4gY2FsbGVkLiBJbiBhIHNlbnNlXG5cdFx0Ly8gbm9kZSBpcyBzdXNwZW5kZWQgYXQgbGVhc3QgdW50aWwgY29tcG9uZW50RGlkTW91bnQgZ2V0cyBjYWxsZWQhXG5cdFx0Ly9cblx0XHQvLyBQZW5kaW5nIGNhbGxiYWNrcyBhcmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbm9kZTpcblx0XHQvLyBcdFtzdXNwZW5kZWRfY291bnQsIHJlc29sdmVkX2NvdW50LCBuZXh0X25vZGUsIGNhbGxiYWNrXzAsIGNhbGxiYWNrXzEsIC4uLl1cblx0XHR0aGlzLl9tYXAuc2V0KGNoaWxkcmVuW2ldLCAodGhpcy5fbmV4dCA9IFsxLCAwLCB0aGlzLl9uZXh0XSkpO1xuXHR9XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn07XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gU3VzcGVuc2VMaXN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uKCkge1xuXHQvLyBJdGVyYXRlIHRocm91Z2ggYWxsIGNoaWxkcmVuIGFmdGVyIG1vdW50aW5nIGZvciB0d28gcmVhc29uczpcblx0Ly8gMS4gQXMgZWFjaCBub2RlW1NVU1BFTkRFRF9DT1VOVF0gc3RhcnRzIGZyb20gMSwgdGhpcyBpdGVyYXRpb24gaW5jcmVhc2VzXG5cdC8vICAgIGVhY2ggbm9kZVtSRUxFQVNFRF9DT1VOVF0gYnkgMSwgdGhlcmVmb3JlIGJhbGFuY2luZyB0aGUgY291bnRlcnMuXG5cdC8vICAgIFRoZSBub2RlcyBjYW4gbm93IGJlIGNvbXBsZXRlbHkgY29uc3VtZWQgZnJvbSB0aGUgbGlua2VkIGxpc3QuXG5cdC8vIDIuIEhhbmRsZSBub2RlcyB0aGF0IG1pZ2h0IGhhdmUgZ290dGVuIHJlc29sdmVkIGJldHdlZW4gcmVuZGVyIGFuZFxuXHQvLyAgICBjb21wb25lbnREaWRNb3VudC5cblx0dGhpcy5fbWFwLmZvckVhY2goKG5vZGUsIGNoaWxkKSA9PiB7XG5cdFx0cmVzb2x2ZSh0aGlzLCBjaGlsZCwgbm9kZSk7XG5cdH0pO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHJlbmRlciB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4uLy4uL3NyYy9pbmRleCcpLlJlbmRlcmFibGVQcm9wczx7IGNvbnRleHQ6IGFueSB9Pn0gcHJvcHNcbiAqL1xuZnVuY3Rpb24gQ29udGV4dFByb3ZpZGVyKHByb3BzKSB7XG5cdHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gKCkgPT4gcHJvcHMuY29udGV4dDtcblx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xufVxuXG4vKipcbiAqIFBvcnRhbCBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8IG51bGwgfCB1bmRlZmluZWR9IHByb3BzXG4gKlxuICogVE9ETzogdXNlIGNyZWF0ZVJvb3QoKSBpbnN0ZWFkIG9mIGZha2Ugcm9vdFxuICovXG5mdW5jdGlvbiBQb3J0YWwocHJvcHMpIHtcblx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRsZXQgY29udGFpbmVyID0gcHJvcHMuX2NvbnRhaW5lcjtcblxuXHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlbmRlcihudWxsLCBfdGhpcy5fdGVtcCk7XG5cdFx0X3RoaXMuX3RlbXAgPSBudWxsO1xuXHRcdF90aGlzLl9jb250YWluZXIgPSBudWxsO1xuXHR9O1xuXG5cdC8vIFdoZW4gd2UgY2hhbmdlIGNvbnRhaW5lciB3ZSBzaG91bGQgY2xlYXIgb3VyIG9sZCBjb250YWluZXIgYW5kXG5cdC8vIGluZGljYXRlIGEgbmV3IG1vdW50LlxuXHRpZiAoX3RoaXMuX2NvbnRhaW5lciAmJiBfdGhpcy5fY29udGFpbmVyICE9PSBjb250YWluZXIpIHtcblx0XHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHR9XG5cblx0Ly8gV2hlbiBwcm9wcy52bm9kZSBpcyB1bmRlZmluZWQvZmFsc2UvbnVsbCB3ZSBhcmUgZGVhbGluZyB3aXRoIHNvbWUga2luZCBvZlxuXHQvLyBjb25kaXRpb25hbCB2bm9kZS4gVGhpcyBzaG91bGQgbm90IHRyaWdnZXIgYSByZW5kZXIuXG5cdGlmIChwcm9wcy5fdm5vZGUpIHtcblx0XHRpZiAoIV90aGlzLl90ZW1wKSB7XG5cdFx0XHRfdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXG5cdFx0XHQvLyBDcmVhdGUgYSBmYWtlIERPTSBwYXJlbnQgbm9kZSB0aGF0IG1hbmFnZXMgYSBzdWJzZXQgb2YgYGNvbnRhaW5lcmAncyBjaGlsZHJlbjpcblx0XHRcdF90aGlzLl90ZW1wID0ge1xuXHRcdFx0XHRub2RlVHlwZTogMSxcblx0XHRcdFx0cGFyZW50Tm9kZTogY29udGFpbmVyLFxuXHRcdFx0XHRjaGlsZE5vZGVzOiBbXSxcblx0XHRcdFx0YXBwZW5kQ2hpbGQoY2hpbGQpIHtcblx0XHRcdFx0XHR0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG5cdFx0XHRcdFx0X3RoaXMuX2NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGluc2VydEJlZm9yZShjaGlsZCwgYmVmb3JlKSB7XG5cdFx0XHRcdFx0dGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuXHRcdFx0XHRcdF90aGlzLl9jb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRyZW1vdmVDaGlsZChjaGlsZCkge1xuXHRcdFx0XHRcdHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpID4+PiAxLCAxKTtcblx0XHRcdFx0XHRfdGhpcy5fY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBSZW5kZXIgb3VyIHdyYXBwaW5nIGVsZW1lbnQgaW50byB0ZW1wLlxuXHRcdHJlbmRlcihcblx0XHRcdGNyZWF0ZUVsZW1lbnQoQ29udGV4dFByb3ZpZGVyLCB7IGNvbnRleHQ6IF90aGlzLmNvbnRleHQgfSwgcHJvcHMuX3Zub2RlKSxcblx0XHRcdF90aGlzLl90ZW1wXG5cdFx0KTtcblx0fVxuXHQvLyBXaGVuIHdlIGNvbWUgZnJvbSBhIGNvbmRpdGlvbmFsIHJlbmRlciwgb24gYSBtb3VudGVkXG5cdC8vIHBvcnRhbCB3ZSBzaG91bGQgY2xlYXIgdGhlIERPTS5cblx0ZWxzZSBpZiAoX3RoaXMuX3RlbXApIHtcblx0XHRfdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHR9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFBvcnRhbGAgdG8gY29udGludWUgcmVuZGVyaW5nIHRoZSB2bm9kZSB0cmVlIGF0IGEgZGlmZmVyZW50IERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdm5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGNvbnRhaW5lciBUaGUgRE9NIG5vZGUgdG8gY29udGludWUgcmVuZGVyaW5nIGluIHRvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9ydGFsKHZub2RlLCBjb250YWluZXIpIHtcblx0Y29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KFBvcnRhbCwgeyBfdm5vZGU6IHZub2RlLCBfY29udGFpbmVyOiBjb250YWluZXIgfSk7XG5cdGVsLmNvbnRhaW5lckluZm8gPSBjb250YWluZXI7XG5cdHJldHVybiBlbDtcbn1cbiIsImltcG9ydCB7XG5cdHJlbmRlciBhcyBwcmVhY3RSZW5kZXIsXG5cdGh5ZHJhdGUgYXMgcHJlYWN0SHlkcmF0ZSxcblx0b3B0aW9ucyxcblx0dG9DaGlsZEFycmF5LFxuXHRDb21wb25lbnRcbn0gZnJvbSAncHJlYWN0JztcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0VMRU1FTlRfVFlQRSA9XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIFN5bWJvbC5mb3IgJiYgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuXHQweGVhYzc7XG5cbmNvbnN0IENBTUVMX1BST1BTID0gL14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZXxsZXR0ZXJ8bGlnaHRpbmd8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHBvaW50ZXJ8c2hhcGV8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dHJhbnNmb3JtfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS87XG5cbmNvbnN0IElTX0RPTSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIElucHV0IHR5cGVzIGZvciB3aGljaCBvbmNoYW5nZSBzaG91bGQgbm90IGJlIGNvbnZlcnRlZCB0byBvbmlucHV0LlxuLy8gdHlwZT1cImZpbGV8Y2hlY2tib3h8cmFkaW9cIiwgcGx1cyBcInJhbmdlXCIgaW4gSUUxMS5cbi8vIChJRTExIGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wsIHdoaWNoIHdlIHVzZSBoZXJlIHRvIHR1cm4gYHJhZGAgaW50byBgcmFgIHdoaWNoIG1hdGNoZXMgXCJyYW5nZVwiKVxuY29uc3Qgb25DaGFuZ2VJbnB1dFR5cGUgPSB0eXBlID0+XG5cdCh0eXBlb2YgU3ltYm9sICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBTeW1ib2woKSA9PSAnc3ltYm9sJ1xuXHRcdD8gL2ZpbHxjaGV8cmFkL2lcblx0XHQ6IC9maWx8Y2hlfHJhL2lcblx0KS50ZXN0KHR5cGUpO1xuXG4vLyBTb21lIGxpYnJhcmllcyBsaWtlIGByZWFjdC12aXJ0dWFsaXplZGAgZXhwbGljaXRseSBjaGVjayBmb3IgdGhpcy5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vLyBgVU5TQUZFXypgIGxpZmVjeWNsZSBob29rc1xuLy8gUHJlYWN0IG9ubHkgZXZlciBpbnZva2VzIHRoZSB1bnByZWZpeGVkIG1ldGhvZHMuXG4vLyBIZXJlIHdlIHByb3ZpZGUgYSBiYXNlIFwiZmFsbGJhY2tcIiBpbXBsZW1lbnRhdGlvbiB0aGF0IGNhbGxzIGFueSBkZWZpbmVkIFVOU0FGRV8gcHJlZml4ZWQgbWV0aG9kLlxuLy8gLSBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGl0cyBvd24gYGNvbXBvbmVudERpZE1vdW50KClgIChpbmNsdWRpbmcgdmlhIGRlZmluZVByb3BlcnR5KSwgdXNlIHRoYXQuXG4vLyAtIElmIGEgY29tcG9uZW50IGRlZmluZXMgYFVOU0FGRV9jb21wb25lbnREaWRNb3VudCgpYCwgYGNvbXBvbmVudERpZE1vdW50YCBpcyB0aGUgYWxpYXMgZ2V0dGVyL3NldHRlci5cbi8vIC0gSWYgYW55dGhpbmcgYXNzaWducyB0byBhbiBgVU5TQUZFXypgIHByb3BlcnR5LCB0aGUgYXNzaWdubWVudCBpcyBmb3J3YXJkZWQgdG8gdGhlIHVucHJlZml4ZWQgcHJvcGVydHkuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3ByZWFjdGpzL3ByZWFjdC9pc3N1ZXMvMTk0MVxuW1xuXHQnY29tcG9uZW50V2lsbE1vdW50Jyxcblx0J2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuXHQnY29tcG9uZW50V2lsbFVwZGF0ZSdcbl0uZm9yRWFjaChrZXkgPT4ge1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwga2V5LCB7XG5cdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiB0aGlzWydVTlNBRkVfJyArIGtleV07XG5cdFx0fSxcblx0XHRzZXQodikge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwge1xuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHR2YWx1ZTogdlxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuXG4vKipcbiAqIFByb3h5IHJlbmRlcigpIHNpbmNlIFJlYWN0IHJldHVybnMgYSBDb21wb25lbnQgcmVmZXJlbmNlLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVk5vZGUgdHJlZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50IERPTSBub2RlIHRvIHJlbmRlciB2bm9kZSB0cmVlIGludG9cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHJlbmRlcmluZ1xuICogQHJldHVybnMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudCB8IG51bGx9IFRoZSByb290IGNvbXBvbmVudCByZWZlcmVuY2Ugb3IgbnVsbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdC8vIFJlYWN0IGRlc3Ryb3lzIGFueSBleGlzdGluZyBET00gbm9kZXMsIHNlZSAjMTcyN1xuXHQvLyAuLi5idXQgb25seSBvbiB0aGUgZmlyc3QgcmVuZGVyLCBzZWUgIzE4Mjhcblx0aWYgKHBhcmVudC5fY2hpbGRyZW4gPT0gbnVsbCkge1xuXHRcdHBhcmVudC50ZXh0Q29udGVudCA9ICcnO1xuXHR9XG5cblx0cHJlYWN0UmVuZGVyKHZub2RlLCBwYXJlbnQpO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuIHZub2RlID8gdm5vZGUuX2NvbXBvbmVudCA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnQsIGNhbGxiYWNrKSB7XG5cdHByZWFjdEh5ZHJhdGUodm5vZGUsIHBhcmVudCk7XG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcblxuXHRyZXR1cm4gdm5vZGUgPyB2bm9kZS5fY29tcG9uZW50IDogbnVsbDtcbn1cblxubGV0IG9sZEV2ZW50SG9vayA9IG9wdGlvbnMuZXZlbnQ7XG5vcHRpb25zLmV2ZW50ID0gZSA9PiB7XG5cdGlmIChvbGRFdmVudEhvb2spIGUgPSBvbGRFdmVudEhvb2soZSk7XG5cdGUucGVyc2lzdCA9IGVtcHR5O1xuXHRlLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gaXNQcm9wYWdhdGlvblN0b3BwZWQ7XG5cdGUuaXNEZWZhdWx0UHJldmVudGVkID0gaXNEZWZhdWx0UHJldmVudGVkO1xuXHRyZXR1cm4gKGUubmF0aXZlRXZlbnQgPSBlKTtcbn07XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxuZnVuY3Rpb24gaXNQcm9wYWdhdGlvblN0b3BwZWQoKSB7XG5cdHJldHVybiB0aGlzLmNhbmNlbEJ1YmJsZTtcbn1cblxuZnVuY3Rpb24gaXNEZWZhdWx0UHJldmVudGVkKCkge1xuXHRyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkO1xufVxuXG5sZXQgY2xhc3NOYW1lRGVzY3JpcHRvciA9IHtcblx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRnZXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xhc3M7XG5cdH1cbn07XG5cbmxldCBvbGRWTm9kZUhvb2sgPSBvcHRpb25zLnZub2RlO1xub3B0aW9ucy52bm9kZSA9IHZub2RlID0+IHtcblx0bGV0IHR5cGUgPSB2bm9kZS50eXBlO1xuXHRsZXQgcHJvcHMgPSB2bm9kZS5wcm9wcztcblx0bGV0IG5vcm1hbGl6ZWRQcm9wcyA9IHByb3BzO1xuXG5cdC8vIG9ubHkgbm9ybWFsaXplIHByb3BzIG9uIEVsZW1lbnQgbm9kZXNcblx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuXHRcdGNvbnN0IG5vbkN1c3RvbUVsZW1lbnQgPSB0eXBlLmluZGV4T2YoJy0nKSA9PT0gLTE7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cblx0XHRmb3IgKGxldCBpIGluIHByb3BzKSB7XG5cdFx0XHRsZXQgdmFsdWUgPSBwcm9wc1tpXTtcblxuXHRcdFx0aWYgKElTX0RPTSAmJiBpID09PSAnY2hpbGRyZW4nICYmIHR5cGUgPT09ICdub3NjcmlwdCcpIHtcblx0XHRcdFx0Ly8gRW11bGF0ZSBSZWFjdCdzIGJlaGF2aW9yIG9mIG5vdCByZW5kZXJpbmcgdGhlIGNvbnRlbnRzIG9mIG5vc2NyaXB0IHRhZ3Mgb24gdGhlIGNsaWVudC5cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICd2YWx1ZScgJiYgJ2RlZmF1bHRWYWx1ZScgaW4gcHJvcHMgJiYgdmFsdWUgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBTa2lwIGFwcGx5aW5nIHZhbHVlIGlmIGl0IGlzIG51bGwvdW5kZWZpbmVkIGFuZCB3ZSBhbHJlYWR5IHNldFxuXHRcdFx0XHQvLyBhIGRlZmF1bHQgdmFsdWVcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpID09PSAnZGVmYXVsdFZhbHVlJyAmJlxuXHRcdFx0XHQndmFsdWUnIGluIHByb3BzICYmXG5cdFx0XHRcdHByb3BzLnZhbHVlID09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBgZGVmYXVsdFZhbHVlYCBpcyB0cmVhdGVkIGFzIGEgZmFsbGJhY2sgYHZhbHVlYCB3aGVuIGEgdmFsdWUgcHJvcCBpcyBwcmVzZW50IGJ1dCBudWxsL3VuZGVmaW5lZC5cblx0XHRcdFx0Ly8gYGRlZmF1bHRWYWx1ZWAgZm9yIEVsZW1lbnRzIHdpdGggbm8gdmFsdWUgcHJvcCBpcyB0aGUgc2FtZSBhcyB0aGUgRE9NIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eS5cblx0XHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGkgPT09ICdkb3dubG9hZCcgJiYgdmFsdWUgPT09IHRydWUpIHtcblx0XHRcdFx0Ly8gQ2FsbGluZyBgc2V0QXR0cmlidXRlYCB3aXRoIGEgdHJ1dGh5IHZhbHVlIHdpbGwgbGVhZCB0byBpdCBiZWluZ1xuXHRcdFx0XHQvLyBwYXNzZWQgYXMgYSBzdHJpbmdpZmllZCB2YWx1ZSwgZS5nLiBgZG93bmxvYWQ9XCJ0cnVlXCJgLiBSZWFjdFxuXHRcdFx0XHQvLyBjb252ZXJ0cyBpdCB0byBhbiBlbXB0eSBzdHJpbmcgaW5zdGVhZCwgb3RoZXJ3aXNlIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBmaWxlIG5hbWUgYW5kIHRoZSBmaWxlIHdpbGwgYmUgY2FsbGVkXG5cdFx0XHRcdC8vIFwidHJ1ZVwiIHVwb24gZG93bmxvYWRpbmcgaXQuXG5cdFx0XHRcdHZhbHVlID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKC9vbmRvdWJsZWNsaWNrL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZGJsY2xpY2snO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkgKyB0eXBlKSAmJlxuXHRcdFx0XHQhb25DaGFuZ2VJbnB1dFR5cGUocHJvcHMudHlwZSlcblx0XHRcdCkge1xuXHRcdFx0XHRpID0gJ29uaW5wdXQnO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uZm9jdXMkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gJ29uZm9jdXNpbic7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb25ibHVyJC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmZvY3Vzb3V0Jztcblx0XHRcdH0gZWxzZSBpZiAoL15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLy50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vbkN1c3RvbUVsZW1lbnQgJiYgQ0FNRUxfUFJPUFMudGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS5yZXBsYWNlKC9bQS1aMC05XS9nLCAnLSQmJykudG9Mb3dlckNhc2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0dmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBzdXBwb3J0IGZvciBvbklucHV0IGFuZCBvbkNoYW5nZSwgc2VlICMzNTYxXG5cdFx0XHQvLyBpZiB3ZSBoYXZlIGFuIG9uaW5wdXQgcHJvcCBhbHJlYWR5IGNoYW5nZSBpdCB0byBvbmlucHV0Q2FwdHVyZVxuXHRcdFx0aWYgKC9eb25pbnB1dCQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSBpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0pIHtcblx0XHRcdFx0XHRpID0gJ29uaW5wdXRDYXB0dXJlJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgc3VwcG9ydCBmb3IgYXJyYXkgc2VsZWN0IHZhbHVlczogPHNlbGVjdCBtdWx0aXBsZSB2YWx1ZT17W119IC8+XG5cdFx0aWYgKFxuXHRcdFx0dHlwZSA9PSAnc2VsZWN0JyAmJlxuXHRcdFx0bm9ybWFsaXplZFByb3BzLm11bHRpcGxlICYmXG5cdFx0XHRBcnJheS5pc0FycmF5KG5vcm1hbGl6ZWRQcm9wcy52YWx1ZSlcblx0XHQpIHtcblx0XHRcdC8vIGZvckVhY2goKSBhbHdheXMgcmV0dXJucyB1bmRlZmluZWQsIHdoaWNoIHdlIGFidXNlIGhlcmUgdG8gdW5zZXQgdGhlIHZhbHVlIHByb3AuXG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpICE9IC0xO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkaW5nIHN1cHBvcnQgZm9yIGRlZmF1bHRWYWx1ZSBpbiBzZWxlY3QgdGFnXG5cdFx0aWYgKHR5cGUgPT0gJ3NlbGVjdCcgJiYgbm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHMudmFsdWUgPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BzLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPSAtMTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5wcm9wcy5zZWxlY3RlZCA9XG5cdFx0XHRcdFx0XHRub3JtYWxpemVkUHJvcHMuZGVmYXVsdFZhbHVlID09IGNoaWxkLnByb3BzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHR2bm9kZS5wcm9wcyA9IG5vcm1hbGl6ZWRQcm9wcztcblxuXHRcdGlmIChwcm9wcy5jbGFzcyAhPSBwcm9wcy5jbGFzc05hbWUpIHtcblx0XHRcdGNsYXNzTmFtZURlc2NyaXB0b3IuZW51bWVyYWJsZSA9ICdjbGFzc05hbWUnIGluIHByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmNsYXNzTmFtZSAhPSBudWxsKSBub3JtYWxpemVkUHJvcHMuY2xhc3MgPSBwcm9wcy5jbGFzc05hbWU7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobm9ybWFsaXplZFByb3BzLCAnY2xhc3NOYW1lJywgY2xhc3NOYW1lRGVzY3JpcHRvcik7XG5cdFx0fVxuXHR9XG5cblx0dm5vZGUuJCR0eXBlb2YgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cblx0aWYgKG9sZFZOb2RlSG9vaykgb2xkVk5vZGVIb29rKHZub2RlKTtcbn07XG5cbi8vIE9ubHkgbmVlZGVkIGZvciByZWFjdC1yZWxheVxubGV0IGN1cnJlbnRDb21wb25lbnQ7XG5jb25zdCBvbGRCZWZvcmVSZW5kZXIgPSBvcHRpb25zLl9yZW5kZXI7XG5vcHRpb25zLl9yZW5kZXIgPSBmdW5jdGlvbih2bm9kZSkge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSB7XG5cdFx0b2xkQmVmb3JlUmVuZGVyKHZub2RlKTtcblx0fVxuXHRjdXJyZW50Q29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudDtcbn07XG5cbmNvbnN0IG9sZERpZmZlZCA9IG9wdGlvbnMuZGlmZmVkO1xuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKX0gKi9cbm9wdGlvbnMuZGlmZmVkID0gZnVuY3Rpb24odm5vZGUpIHtcblx0aWYgKG9sZERpZmZlZCkge1xuXHRcdG9sZERpZmZlZCh2bm9kZSk7XG5cdH1cblxuXHRjb25zdCBwcm9wcyA9IHZub2RlLnByb3BzO1xuXHRjb25zdCBkb20gPSB2bm9kZS5fZG9tO1xuXHRpZiAoXG5cdFx0ZG9tICE9IG51bGwgJiZcblx0XHR2bm9kZS50eXBlID09PSAndGV4dGFyZWEnICYmXG5cdFx0J3ZhbHVlJyBpbiBwcm9wcyAmJlxuXHRcdHByb3BzLnZhbHVlICE9PSBkb20udmFsdWVcblx0KSB7XG5cdFx0ZG9tLnZhbHVlID0gcHJvcHMudmFsdWUgPT0gbnVsbCA/ICcnIDogcHJvcHMudmFsdWU7XG5cdH1cblxuXHRjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcbn07XG5cbi8vIFRoaXMgaXMgYSB2ZXJ5IHZlcnkgcHJpdmF0ZSBpbnRlcm5hbCBmdW5jdGlvbiBmb3IgUmVhY3QgaXRcbi8vIGlzIHVzZWQgdG8gc29ydC1vZiBkbyBydW50aW1lIGRlcGVuZGVuY3kgaW5qZWN0aW9uLiBTbyBmYXJcbi8vIG9ubHkgYHJlYWN0LXJlbGF5YCBtYWtlcyB1c2Ugb2YgaXQuIEl0IHVzZXMgaXQgdG8gcmVhZCB0aGVcbi8vIGNvbnRleHQgdmFsdWUuXG5leHBvcnQgY29uc3QgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSB7XG5cdFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IHtcblx0XHRjdXJyZW50OiB7XG5cdFx0XHRyZWFkQ29udGV4dChjb250ZXh0KSB7XG5cdFx0XHRcdHJldHVybiBjdXJyZW50Q29tcG9uZW50Ll9nbG9iYWxDb250ZXh0W2NvbnRleHQuX2lkXS5wcm9wcy52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG4iLCJpbXBvcnQgeyBub29wIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50Q2hpbGRyZW4sIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2Utc3RhYmxlLWNhbGxiYWNrLmpzXCI7XG5cbnR5cGUgUmFmQ2FsbGJhY2tUeXBlID0gKG1zU2luY2VMYXN0OiBudW1iZXIsIHRhZz86IGFueSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIENvbnRleHRUeXBlIHtcbiAgICBhZGRDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUsIHRhZz86IGFueSkgPT4gdm9pZDtcbiAgICByZW1vdmVDYWxsYmFjazogKGNhbGxiYWNrOiBSYWZDYWxsYmFja1R5cGUpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IENvbnRleHRUeXBlPihudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFByb3ZpZGVCYXRjaGVkQW5pbWF0aW9uRnJhbWVzKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogQ29tcG9uZW50Q2hpbGRyZW4gfSkge1xuXG4gICAgY29uc3QgYWRkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcImFkZENhbGxiYWNrXCJdPigoY2FsbGJhY2tUb0JlQmF0Y2hlZCwgdGFnKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LnNldChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpOyB9LCBbXSk7XG4gICAgY29uc3QgcmVtb3ZlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjazxDb250ZXh0VHlwZVtcInJlbW92ZUNhbGxiYWNrXCJdPigoY2FsbGJhY2spID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuZGVsZXRlKGNhbGxiYWNrKTsgfSwgW10pO1xuXG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWY8Q29udGV4dFR5cGU+KG51bGwhKTtcbiAgICBpZiAoY29udGV4dEluZm8uY3VycmVudCA9PSBudWxsKVxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcbiAgICBjb25zdCBhbGxDYWxsYmFja3MgPSB1c2VSZWY8TWFwPFJhZkNhbGxiYWNrVHlwZSwgYW55Pj4obnVsbCEpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYW5kbGUgPSAtMTtcblxuICAgICAgICBmdW5jdGlvbiByYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyhtc1NpbmNlTGFzdDogbnVtYmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0SW5mby5jdXJyZW50fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9TaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXI+KVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyB7XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgd2l0aCBlZmZlY3RpdmVseSB0aGUgc2FtZSBydWxlcyBhcyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYFxuICAgICAqIFxuICAgICAqIERvZXNuJ3QgbmVlZCB0byBiZSBzdGFibGUuXG4gICAgICovXG4gICAgY2FsbGJhY2s6IG51bGwgfCAoKG1zU2luY2VMYXN0OiBudW1iZXIpID0+IHZvaWQpO1xufVxuXG4vKipcbiAqIFRoZSAob3B0aW9uYWxseSBub24tc3RhYmxlKSBgY2FsbGJhY2tgIHlvdSBwcm92aWRlIHdpbGwgc3RhcnQgcnVubmluZyBldmVyeSBmcmFtZSBhZnRlciB0aGUgY29tcG9uZW50IG1vdW50cy5cbiAqIFxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKiBcbiAqICoqVGhpcyBob29rIGRvZXMgbm90IHJldHVybiBhbnl0aGluZyBhdCBhbGwsIGluY2x1ZGluZyBubyBwcm9wLW1vZGlmeWluZyBob29rcyoqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH06IFVzZUFuaW1hdGlvbkZyYW1lUGFyYW1ldGVycyk6IHZvaWQge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcblxuICAgIGNvbnN0IHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCA9IHVzZUNvbnRleHQoU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtczogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LCBoYXNDYWxsYmFja10pXG59XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0O1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZUpzRGF0YTtcbiIsImltcG9ydCBjb3JlSnNEYXRhIGZyb20gJy4vX2NvcmVKc0RhdGEuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9Tb3VyY2U7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTWFza2VkIGZyb20gJy4vX2lzTWFza2VkLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCB0b1NvdXJjZSBmcm9tICcuL190b1NvdXJjZS5qcyc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc05hdGl2ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWYWx1ZTtcbiIsImltcG9ydCBiYXNlSXNOYXRpdmUgZnJvbSAnLi9fYmFzZUlzTmF0aXZlLmpzJztcbmltcG9ydCBnZXRWYWx1ZSBmcm9tICcuL19nZXRWYWx1ZS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE5hdGl2ZTtcbiIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlcTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlQ3JlYXRlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaERlbGV0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoR2V0O1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hIYXM7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoU2V0O1xuIiwiaW1wb3J0IGhhc2hDbGVhciBmcm9tICcuL19oYXNoQ2xlYXIuanMnO1xuaW1wb3J0IGhhc2hEZWxldGUgZnJvbSAnLi9faGFzaERlbGV0ZS5qcyc7XG5pbXBvcnQgaGFzaEdldCBmcm9tICcuL19oYXNoR2V0LmpzJztcbmltcG9ydCBoYXNoSGFzIGZyb20gJy4vX2hhc2hIYXMuanMnO1xuaW1wb3J0IGhhc2hTZXQgZnJvbSAnLi9faGFzaFNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBIYXNoO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVDbGVhcjtcbiIsImltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzb2NJbmRleE9mO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlR2V0O1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlSGFzO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZVNldDtcbiIsImltcG9ydCBsaXN0Q2FjaGVDbGVhciBmcm9tICcuL19saXN0Q2FjaGVDbGVhci5qcyc7XG5pbXBvcnQgbGlzdENhY2hlRGVsZXRlIGZyb20gJy4vX2xpc3RDYWNoZURlbGV0ZS5qcyc7XG5pbXBvcnQgbGlzdENhY2hlR2V0IGZyb20gJy4vX2xpc3RDYWNoZUdldC5qcyc7XG5pbXBvcnQgbGlzdENhY2hlSGFzIGZyb20gJy4vX2xpc3RDYWNoZUhhcy5qcyc7XG5pbXBvcnQgbGlzdENhY2hlU2V0IGZyb20gJy4vX2xpc3RDYWNoZVNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdENhY2hlO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iLCJpbXBvcnQgSGFzaCBmcm9tICcuL19IYXNoLmpzJztcbmltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcbmltcG9ydCBNYXAgZnJvbSAnLi9fTWFwLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc0tleWFibGU7XG4iLCJpbXBvcnQgaXNLZXlhYmxlIGZyb20gJy4vX2lzS2V5YWJsZS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TWFwRGF0YTtcbiIsImltcG9ydCBnZXRNYXBEYXRhIGZyb20gJy4vX2dldE1hcERhdGEuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVEZWxldGU7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZUdldDtcbiIsImltcG9ydCBnZXRNYXBEYXRhIGZyb20gJy4vX2dldE1hcERhdGEuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZUhhcztcbiIsImltcG9ydCBnZXRNYXBEYXRhIGZyb20gJy4vX2dldE1hcERhdGEuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlU2V0O1xuIiwiaW1wb3J0IG1hcENhY2hlQ2xlYXIgZnJvbSAnLi9fbWFwQ2FjaGVDbGVhci5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVEZWxldGUgZnJvbSAnLi9fbWFwQ2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IG1hcENhY2hlR2V0IGZyb20gJy4vX21hcENhY2hlR2V0LmpzJztcbmltcG9ydCBtYXBDYWNoZUhhcyBmcm9tICcuL19tYXBDYWNoZUhhcy5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVTZXQgZnJvbSAnLi9fbWFwQ2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuZXhwb3J0IGRlZmF1bHQgTWFwQ2FjaGU7XG4iLCJpbXBvcnQgTWFwQ2FjaGUgZnJvbSAnLi9fTWFwQ2FjaGUuanMnO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgY2xlYXJgLCBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgIT0gbnVsbCAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KSB8fCBjYWNoZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gRXhwb3NlIGBNYXBDYWNoZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBtZW1vaXplIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgaCwgUmVuZGVyYWJsZVByb3BzIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFeGNsdXNpdmVDb250ZXh0VHlwZSwgU3dhcHBhYmxlQ29udGV4dFR5cGUsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5cbmZ1bmN0aW9uIGdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24oZXhjbHVzaXZpdHlLZXk6IHN0cmluZyk6IENvbnRleHQ8RXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsPjtcbmZ1bmN0aW9uIGdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24oZXhjbHVzaXZpdHlLZXk6IG51bGwgfCB1bmRlZmluZWQpOiBudWxsO1xuZnVuY3Rpb24gZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbihleGNsdXNpdml0eUtleTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IENvbnRleHQ8RXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsPiB8IG51bGw7XG5mdW5jdGlvbiBnZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dFByZW1lbW9pemF0aW9uKGV4Y2x1c2l2aXR5S2V5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogQ29udGV4dDxFeGNsdXNpdmVDb250ZXh0VHlwZSB8IG51bGw+IHwgbnVsbCB7XG4gICAgaWYgKGV4Y2x1c2l2aXR5S2V5ID09IG51bGwpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiBjcmVhdGVDb250ZXh0PEV4Y2x1c2l2ZUNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG59XG5cbmV4cG9ydCBjb25zdCBTd2FwcGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTd2FwcGFibGVDb250ZXh0VHlwZT4oeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29udGV4dCBmb3IgYSBnaXZlbiBgZXhjbHVzaXZpdHlLZXlgLCBjcmVhdGluZyBvbmUgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxuICogXG4gKiBJZiBcbiAqL1xuZXhwb3J0IGNvbnN0IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0OiB0eXBlb2YgZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbiA9IG1lbW9pemUoZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbik7XG5cbmludGVyZmFjZSBDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIGVudGVyOiBzdHJpbmc7XG4gICAgZXhpdDogc3RyaW5nO1xuICAgIG1lYXN1cmU6IHN0cmluZztcbiAgICBpbml0OiBzdHJpbmc7XG4gICAgdHJhbnNpdGlvbjogc3RyaW5nO1xuICAgIGZpbmFsaXplOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDc3NDbGFzc0NvbnRleHRUeXBlIHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IHN0cmluZztcbiAgICBHZXRFbnRlckNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0SW5pdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBDc3NDbGFzc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENzc0NsYXNzQ29udGV4dFR5cGU+KHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IFwicHRsXCIsXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gXCJuXCIsXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBcInhcIixcbiAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IFwibVwiLFxuICAgIEdldEluaXRDbGFzczogKCkgPT4gXCJpXCIsXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBcInRcIixcbiAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBcImZcIixcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBDc3NDbGFzc2VzUHJvdmlkZXIoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUsIGNoaWxkcmVuLCAuLi5yZXN0IH06IFJlbmRlcmFibGVQcm9wczxQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPj4pIHtcbiAgICBjb25zdCBjb250ZXh0T2JqZWN0ID0gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUgfSk7XG4gICAgcmV0dXJuICg8Q3NzQ2xhc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0T2JqZWN0fSAgey4uLnJlc3R9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDc3NDbGFzc2VzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxuICAgICAgICBHZXRFbnRlckNsYXNzLFxuICAgICAgICBHZXRFeGl0Q2xhc3MsXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcbiAgICAgICAgR2V0SW5pdENsYXNzLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3MsXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3NcbiAgICB9ID0gdXNlQ29udGV4dChDc3NDbGFzc0NvbnRleHQpO1xuICAgIGNvbnN0IEdldERpcmVjdGlvbkNsYXNzID0gdXNlQ2FsbGJhY2soKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZyA9PiB7IHN3aXRjaCAoZGlyZWN0aW9uKSB7IGNhc2UgXCJlbnRlclwiOiByZXR1cm4gR2V0RW50ZXJDbGFzcygpOyBjYXNlIFwiZXhpdFwiOiByZXR1cm4gR2V0RXhpdENsYXNzKCk7IH0gfSwgW10pO1xuICAgIGNvbnN0IEdldFBoYXNlQ2xhc3MgPSB1c2VDYWxsYmFjaygocGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyA9PiB7IHN3aXRjaCAocGhhc2UpIHsgY2FzZSBcIm1lYXN1cmVcIjogcmV0dXJuIEdldE1lYXN1cmVDbGFzcygpOyBjYXNlIFwiaW5pdFwiOiByZXR1cm4gR2V0SW5pdENsYXNzKCk7IGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHJldHVybiBHZXRUcmFuc2l0aW9uQ2xhc3MoKTsgY2FzZSBcImZpbmFsaXplXCI6IHJldHVybiBHZXRGaW5hbGl6ZUNsYXNzKCk7IH0gfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIEdldEJhc2VDbGFzcyxcbiAgICAgICAgR2V0RW50ZXJDbGFzcyxcbiAgICAgICAgR2V0RXhpdENsYXNzLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3MsXG4gICAgICAgIEdldEluaXRDbGFzcyxcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzLFxuICAgICAgICBHZXREaXJlY3Rpb25DbGFzcyxcbiAgICAgICAgR2V0UGhhc2VDbGFzc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUobmV3VmFsdWVzOiBQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPik6IENzc0NsYXNzQ29udGV4dFR5cGUge1xuICAgIGNvbnN0IG9sZFZhbHVlcyA9IHVzZUNvbnRleHQoQ3NzQ2xhc3NDb250ZXh0KTtcbiAgICBjb25zdCBiYXNlID0gKG5ld1ZhbHVlcz8uYmFzZSA/PyBvbGRWYWx1ZXMuR2V0QmFzZUNsYXNzKCkpO1xuICAgIGNvbnN0IGVudGVyID0gKG5ld1ZhbHVlcz8uZW50ZXIgPz8gb2xkVmFsdWVzLkdldEVudGVyQ2xhc3MoKSk7XG4gICAgY29uc3QgZXhpdCA9IChuZXdWYWx1ZXM/LmV4aXQgPz8gb2xkVmFsdWVzLkdldEV4aXRDbGFzcygpKTtcbiAgICBjb25zdCBtZWFzdXJlID0gKG5ld1ZhbHVlcz8ubWVhc3VyZSA/PyBvbGRWYWx1ZXMuR2V0TWVhc3VyZUNsYXNzKCkpO1xuICAgIGNvbnN0IGluaXQgPSAobmV3VmFsdWVzPy5pbml0ID8/IG9sZFZhbHVlcy5HZXRJbml0Q2xhc3MoKSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdWYWx1ZXM/LnRyYW5zaXRpb24gPz8gb2xkVmFsdWVzLkdldFRyYW5zaXRpb25DbGFzcygpKTtcbiAgICBjb25zdCBmaW5hbGl6ZSA9IChuZXdWYWx1ZXM/LmZpbmFsaXplID8/IG9sZFZhbHVlcy5HZXRGaW5hbGl6ZUNsYXNzKCkpO1xuXG4gICAgcmV0dXJuIHVzZU1lbW88Q3NzQ2xhc3NDb250ZXh0VHlwZT4oKCkgPT4gKHtcbiAgICAgICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBiYXNlISxcbiAgICAgICAgR2V0RW50ZXJDbGFzczogKCkgPT4gZW50ZXIhLFxuICAgICAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IGV4aXQhLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IG1lYXN1cmUhLFxuICAgICAgICBHZXRJbml0Q2xhc3M6ICgpID0+IGluaXQhLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IHRyYW5zaXRpb24hLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBmaW5hbGl6ZSEsXG4gICAgfSksIFtiYXNlLCBlbnRlciwgZXhpdCwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemVdKVxufVxuXG4iLCJpbXBvcnQgeyBGcmFnbWVudCwgaCwgUmVuZGVyYWJsZVByb3BzLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNoaWxkcmVuRmxhZywgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNYW5hZ2VkQ2hpbGQsIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnMsIHVzZU1hbmFnZWRDaGlsZHJlbiwgdXNlUGFzc2l2ZVN0YXRlLCB1c2VTdGFibGVPYmplY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBHZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xuaW1wb3J0IHsgRXhjbHVzaXZlQ29udGV4dFR5cGUsIEV4Y2x1c2l2ZUluZm8sIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcblxuXG5cbmxldCBnbG9iYWxDb3VudCA9IC0xO1xuXG5leHBvcnQgZnVuY3Rpb24gRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyKHsgZXhjbHVzaXZpdHlLZXksIGNoaWxkcmVuIH06IFJlbmRlcmFibGVQcm9wczx7IGV4Y2x1c2l2aXR5S2V5Pzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB9Pikge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcIkV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlclwiLCBleGNsdXNpdml0eUtleSk7XG5cbiAgICBjb25zdCBbZ2V0TmV4dEluZGV4SW5MaW5lLCBzZXROZXh0SW5kZXhJbkxpbmVdID0gdXNlUGFzc2l2ZVN0YXRlPHN0cmluZyB8IG51bGwsIG5ldmVyPihudWxsKTtcblxuICAgIGNvbnN0IHsgY29udGV4dCwgbWFuYWdlZENoaWxkcmVuUmV0dXJuLCBtYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IHsgZ2V0Q2hpbGRyZW4gfSB9ID0gdXNlTWFuYWdlZENoaWxkcmVuPEV4Y2x1c2l2ZUluZm8+KHsgbWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgeyBjaGFuZ2VJbmRleCwgZ2V0Q3VycmVudEluZGV4IH0gPSB1c2VDaGlsZHJlbkZsYWc8RXhjbHVzaXZlSW5mbywgbmV2ZXI+KHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4sXG4gICAgICAgIGNsb3Nlc3RGaXQ6IGZhbHNlLFxuICAgICAgICBpbml0aWFsSW5kZXg6IG51bGwsXG4gICAgICAgIG9uSW5kZXhDaGFuZ2U6IG51bGwsXG4gICAgICAgIHNldEF0OiB1c2VDYWxsYmFjaygobSwgdikgPT4geyBtLnNldEV4Y2x1c2l2ZWx5T3Blbih2KTsgfSwgW10pLFxuICAgICAgICBnZXRBdDogdXNlQ2FsbGJhY2soKG0pID0+IG0uZ2V0RXhjbHVzaXZlbHlPcGVuKCksIFtdKSxcbiAgICAgICAgaXNWYWxpZDogdXNlQ2FsbGJhY2soKG0pID0+IHsgcmV0dXJuIHRydWUgfSwgW10pLFxuICAgIH0pXG5cbiAgICBjb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXg6IHN0cmluZywgdmlzaWJsZTogXCJzaG93XCIgfCBcImhpZGRlblwiKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zdCBuZXh0SW5MaW5lID0gZ2V0TmV4dEluZGV4SW5MaW5lKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbkxpbmUgPSBnZXRDdXJyZW50SW5kZXgoKTtcblxuICAgICAgICBpZiAodmlzaWJsZSA9PSBcInNob3dcIiAmJiBpbmRleCAhPSBjdXJyZW50SW5MaW5lKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gYSBjaGlsZCB0cmFuc2l0aW9uIHNob3dzIGl0c2VsZiBpbml0aWFsbHlcbiAgICAgICAgICAgICAqIChpLmUuIHJlcXVlc3RzIGl0c2VsZiB0byBiZSB0aGUgZXhjbHVzaXZlIHRyYW5zaXRpb24pXG4gICAgICAgICAgICAgKiB3ZSBlaXRoZXIgbGV0IGl0IG9wZW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBvbmUgZmluaXNoaW5nIHRoZWlyIGV4aXQsXG4gICAgICAgICAgICAgKiBvciB3YWl0IHVudGlsIHRoYXQgYWZvcmVtZW50aW9uZWQgZXhpdCBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5MaW5lID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VJbmRleChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRDaGlsZHJlbigpLmdldEF0KGN1cnJlbnRJbkxpbmUpPy5mb3JjZUNsb3NlPy4oKTtcbiAgICAgICAgICAgICAgICBzZXROZXh0SW5kZXhJbkxpbmUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZpc2libGUgPT0gXCJoaWRkZW5cIikge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIGEgY2hpbGQgdHJhbnNpdGlvbiBoYXMgZmluaXNoZWQgaXRzIGV4aXQgdHJhbnNpdGlvbixcbiAgICAgICAgICAgICAqIG1ha2Ugc3VyZSB0aGF0IGlmIHNvbWVvbmUgcmVxdWVzdGVkIHRvIGJlIHNob3duIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICogdGhhdCB3ZSBkbyBzby5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG5leHRJbkxpbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZUluZGV4KG5leHRJbkxpbmUpO1xuICAgICAgICAgICAgICAgIHNldE5leHRJbmRleEluTGluZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgY29udGV4dDI6IEV4Y2x1c2l2ZUNvbnRleHRUeXBlID0gdXNlU3RhYmxlT2JqZWN0KHtcbiAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQ6IHVzZVN0YWJsZU9iamVjdCh7XG4gICAgICAgICAgICBleGNsdXNpdml0eUtleSxcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0ID0gR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQoZXhjbHVzaXZpdHlLZXkpO1xuXG4gICAgcmV0dXJuIChFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCA9PSBudWxsKSA/ICgoY2hpbGRyZW4gYXMgVk5vZGUpID8/IG51bGwpIDogPEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0Mn0+e2NoaWxkcmVufTwvRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VFeGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycyBleHRlbmRzIE9taXQ8VXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxFeGNsdXNpdmVJbmZvPiwgXCJtYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzXCIgfCBcImNvbnRleHRcIj4ge1xuICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiBQaWNrPFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxhbnk+LCBcInNob3dcIj47XG4gICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZm9yY2VDbG9zZTogKCkgPT4gdm9pZDsgZXhjbHVzaXZpdHlLZXk/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFeGNsdXNpdmVUcmFuc2l0aW9uKHsgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgc2hvdyB9LCBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBmb3JjZUNsb3NlLCBleGNsdXNpdml0eUtleSB9IH06IFVzZUV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgY29uc3QgYyA9IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0KGV4Y2x1c2l2aXR5S2V5KTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VFeGNsdXNpdmVUcmFuc2l0aW9uXCIsIGMgPT0gbnVsbCk7XG4gICAgY29uc3QgY29udGV4dCA9IGM/IHVzZUNvbnRleHQoYykgOiBudWxsO1xuXG4gICAgLy9jb25zdCBpbmRleCA9IHVzZU1lbW8oKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpLCBbXSk7XG4gICAgY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IHsgZ2xvYmFsQ291bnQgKz0gMTsgcmV0dXJuIChnbG9iYWxDb3VudCkudG9TdHJpbmcoKSB9LCBbXSk7XG4gICAgY29uc3QgW2V4Y2x1c2l2ZWx5T3Blbiwgc2V0RXhjbHVzaXZlbHlPcGVuLCBnZXRFeGNsdXNpdmVseU9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oISFzaG93KTtcbiAgICBjb25zdCB7XG4gICAgICAgIG1hbmFnZWRDaGlsZFJldHVybjogeyBnZXRDaGlsZHJlbiB9XG4gICAgfSA9IHVzZU1hbmFnZWRDaGlsZDxFeGNsdXNpdmVJbmZvPih7IGNvbnRleHQsIG1hbmFnZWRDaGlsZFBhcmFtZXRlcnM6IHsgaW5kZXggfSB9LCB7IGluZGV4LCBnZXRFeGNsdXNpdmVseU9wZW4sIHNldEV4Y2x1c2l2ZWx5T3BlbiwgZm9yY2VDbG9zZSB9KTtcblxuICAgIGNvbnN0IHBhcmVudE9uVmlzQ2hhbmdlID0gY29udGV4dD8uZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQub25WaXNpYmlsaXR5Q2hhbmdlO1xuXG4gICAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gdXNlQ2FsbGJhY2s8Tm9uTnVsbGFibGU8VHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPGFueT5bXCJvblZpc2liaWxpdHlDaGFuZ2VcIl0+PigodmlzaWJsZSkgPT4ge1xuICAgICAgICBwYXJlbnRPblZpc0NoYW5nZT8uKGluZGV4LCB2aXNpYmxlID09IGZhbHNlID8gXCJoaWRkZW5cIiA6IFwic2hvd1wiKTtcbiAgICB9LCBbcGFyZW50T25WaXNDaGFuZ2UsIGluZGV4XSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdylcbiAgICAgICAgICAgIHBhcmVudE9uVmlzQ2hhbmdlPy4oaW5kZXgsIFwic2hvd1wiKTtcbiAgICB9LCBbc2hvdywgcGFyZW50T25WaXNDaGFuZ2UsIGluZGV4XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuOiB7XG4gICAgICAgICAgICBpc0V4Y2x1c2l2ZTogKGNvbnRleHQgIT0gbnVsbCksXG4gICAgICAgICAgICBleGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBzZXRFeGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBnZXRFeGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuIiwiXHJcbmltcG9ydCB7IEZ1bmN0aW9uYWxDb21wb25lbnQsIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuXHJcbnR5cGUgRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+ID0gT21pdDxQLCBcInJlZlwiPiAmIHsgcmVmPzogUmVmPEU+IH1cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50PFAsIEU+ID0gKHA6IEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnRQcm9wczxQLCBFPikgPT4gVk5vZGU8Rm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+PlxyXG5cclxudHlwZSBFbGVtZW50RnJvbVByb3BzPFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+PiA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBFdmVudFRhcmdldDtcclxudHlwZSBQcm9wc0Zyb21Db21wb25lbnQ8QyBleHRlbmRzIEZ1bmN0aW9uYWxDb21wb25lbnQ8YW55Pj4gPSBDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxpbmZlciBQPiA/IFAgOiB1bmtub3duO1xyXG5cclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICogXHJcbiAqIFRPRE86IFN0aWxsIG5lZWRlZD9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZjxDIGV4dGVuZHMgPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4ocDogYW55LCByZWY6IFJlZjxFPikgPT4gKFZOb2RlPGFueT4gfCBudWxsKT4oQ29tcG9uZW50OiBDKSB7XHJcbiAgICB0eXBlIFAgPSBQcm9wc0Zyb21Db21wb25lbnQ8Qz47XHJcblxyXG5cclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQgYXMgQztcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWZ1bCBpbiBwYXJ0aWN1bGFyIGZvciBTbGlkZXMgd2l0aCBhIFRhYiBQYW5lbCAtLVxyXG4gKiBpZiB3ZSBkbyBNYXRoLnNpZ24oY3VycmVudEluZGV4IC0gc2xpZGVJbmRleCksIGl0XHJcbiAqIHRyYW5zaXRpb25zIG5pY2VseSBpbiB0aGUgZXhwZWN0ZWQgZGlyZWN0aW9uLFxyXG4gKiBidXQgd2UgbmVlZCB0byBcInJlbWVtYmVyXCIgd2hpY2ggZGlyZWN0aW9uIHRvIHVzZVxyXG4gKiB3aGVuIGl0J3MgdGhlIGN1cnJlbnQgcGFuZWwgKGFuZCB0aGUgZGlmZmVyZW5jZSBpcyAwKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhc3ROb25OdWxsVmFsdWU8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogVCB8IG51bGwge1xyXG4gICAgY29uc3QgbGFzdE5vbk51bGxWYWx1ZSA9IHVzZVJlZjxUIHwgbnVsbD4obnVsbCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQgPSB2YWx1ZTtcclxuICAgIH0sIFt2YWx1ZV0pO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZSA/PyBsYXN0Tm9uTnVsbFZhbHVlLmN1cnJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgQ29tcG9uZW50Q2hpbGRyZW4sIGgsIFJlZiwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBFeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi9leGNsdXNpdmUuanNcIjtcclxuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCwgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5pbXBvcnQgeyBOb25JbnRydXNpdmVFbGVtZW50QXR0cmlidXRlcyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dhcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZVN3YXBwYWJsZVByb3BzPiwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RT4ge1xyXG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnkgZGVmYXVsdCwgZWFjaCBjaGlsZCB0cmFuc2l0aW9ucyBpbi9vdXQgYXQgdGhlIHNhbWUgdGltZSwgaW4gc3luYyB3aXRoIGVhY2ggb3RoZXIuXHJcbiAgICAgKiBcclxuICAgICAqIElmIHlvdSB3YW50IHRvIGd1YXJhbnRlZSB0aGF0LCBubyBtYXR0ZXIgd2hhdCwgb25seSBvbmUgaXMgZXZlciB2aXNpYmxlIGF0IGFsbCxcclxuICAgICAqIHBhc3MgYSBzdHJpbmcgdG8gYGV4Y2x1c2l2aXR5S2V5YCwgYW5kIGFsbCB0cmFuc2l0aW9ucyB0aGF0IHVzZSB0aGF0IHNhbWVcclxuICAgICAqIGBleGNsdXNpdml0eUtleWAgd2lsbCBjb29yZGluYXRlIHRoaXMgYmVoYXZpb3IgYW1vbmcgdGhlbXNlbHZlcy5cclxuICAgICAqIFxyXG4gICAgICogVGhpcyBpcyBhbHNvIGF2YWlsYWJsZSBhcyBhIHNlcGFyYXRlIGNvbXBvbmVudCAoYEV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlcmApXHJcbiAgICAgKiBpZiB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIGluIHVucmVsYXRlZCBjaXJjdW1zdGFuY2VzLlxyXG4gICAgICovXHJcbiAgICBleGNsdXNpdml0eUtleT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU3dhcHBhYmxlUHJvcHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgY29tcG9uZW50IGlzIGlubGluZS1ncmlkIG9yIGdyaWQuIFxyXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCB0aGUgY2hpbGQgZWxlbWVudCBpcyBsb29rZWQgYXQuIElmIGl0J3MgYSBzcGFuIG9yIG90aGVyIGlubGluZSBlbGVtZW50LCBpbmxpbmUgaXMgYXNzdW1lZC4gXHJcbiAgICAgKiAoQSBzaW1wbHktZm9vbGVkIGhldXJpc3RpYy0tcHJvdmlkZSB0aGlzIHByb3AgaWYgbmVjZXNzYXJ5KVxyXG4gICAgICovXHJcbiAgICBpbmxpbmU6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgdG8gYHVzZVRyYW5zaXRpb25gJ3MgYGFuaW1hdGVPbk1vdW50YC4gSWYgbnVsbCwgdGhlIGRlZmF1bHQgdmFsdWUgcHJvdmlkZWQgd2lsbCBiZSBgZmFsc2VgIGluaXRpYWxseSwgdGhlbiBgdHJ1ZWAgYWZ0ZXIgdGhlIGBTd2FwcGFibGVgIGl0c2VsZiBoYXMgbW91bnRlZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW5BbmltYXRlT25Nb3VudD86IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIHN3YXAgY29udGFpbmVyLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzPFAgZXh0ZW5kcyB7fT4oeyBpbmxpbmUgfTogQ3JlYXRlU3dhcHBhYmxlUHJvcHMsIG90aGVyUHJvcHM6IFApIHtcclxuICAgIHR5cGUgRSA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHM8RT4oe1xyXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtHZXRCYXNlQ2xhc3MoKX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7R2V0QmFzZUNsYXNzKCl9LXN3YXAtY29udGFpbmVyLWlubGluZWApXHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxyXG4gKiBcclxuICogWW91IG11c3QgbWFuYWdlIGVhY2ggY2hpbGQgYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudCdzIGBzaG93YCBwcm9wIC0tIHRoaXMgY29tcG9uZW50ICpkb2VzIG5vdCogbWFuYWdlIGFueSBzb3J0IG9mIHN0YXRlIGluIHRoYXQgcmVnYXJkLlxyXG4gKiBcclxuICogSWYgeW91IHBhc3MgYSByZWd1bGFyIGVsZW1lbnQgKGxpa2UgYSBkaXYpIG9yIG90aGVyIHNpbmdsZSBjb21wb25lbnQsIHRoZW4gdGhlZSBwcm9wcyBhbmQgcmVmIHdpbGwgYmUgZm9yd2FyZGVkIG9udG8gdGhhdCBlbGVtZW50LiBPdGhlcndpc2UsIGFsbCB0aGUgY2hpbGRyZW4gd2lsbCBiZSB3cmFwcGVkIGluIGEgZGl2IG9yIHNwYW4gZGVwZW5kaW5nIG9uIHRoZSBgaW5saW5lYCBwcm9wLlxyXG4gKiBAcGFyYW0gcGFyYW0wIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2hpbGRyZW46IGMsIGlubGluZSwgY2hpbGRyZW5BbmltYXRlT25Nb3VudCwgZXhjbHVzaXZpdHlLZXksIC4uLnAgfTogU3dhcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gYyBhcyBWTm9kZTtcclxuICAgIGlmICghKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlKVxyXG4gICAgICAgIGNoaWxkcmVuID0gKCFpbmxpbmUgPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPilcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHM8RT4odHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoY2hpbGRyZW5BbmltYXRlT25Nb3VudCA/PyBmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4geyByZXR1cm4gYW5pbWF0ZU9uTW91bnQuY3VycmVudDsgfSB9KTtcclxuICAgIGxldCByZXQgPSBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbiBhcyB0eXBlb2YgdHJhbnNpdGlvblByb3BzKTtcclxuICAgIHJldCA9ICg8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PntyZXR9PC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPilcclxuICAgIGlmIChleGNsdXNpdml0eUtleSkge1xyXG4gICAgICAgIHJldCA9ICg8RXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyIGtleT17ZXhjbHVzaXZpdHlLZXl9IGV4Y2x1c2l2aXR5S2V5PXtleGNsdXNpdml0eUtleX0+e3JldH08L0V4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlcj4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59KSlcclxuXHJcbi8vIElmIFwiaW5saW5lXCIgaXNuJ3QgZXhwbGljaXRseSBwcm92aWRlZCwgd2UgdHJ5IHRvIGltcGxpY2l0bHkgZG8gaXQgYmFzZWQgb24gdGhlIGNoaWxkJ3MgdGFnLlxyXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cclxuY29uc3QgaW5saW5lRWxlbWVudHMgPSBuZXcgU2V0KFtcclxuICAgIFwiYVwiLFxyXG4gICAgXCJhYmJyXCIsXHJcbiAgICBcImFjcm9ueW1cIixcclxuICAgIFwiYXVkaW9cIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiZGlcIixcclxuICAgIFwiYmRvXCIsXHJcbiAgICBcImJpZ1wiLFxyXG4gICAgXCJiclwiLFxyXG4gICAgXCJidXR0b25cIixcclxuICAgIFwiY2FudmFzXCIsXHJcbiAgICBcImNpdGVcIixcclxuICAgIFwiY29kZVwiLFxyXG4gICAgXCJkYXRhXCIsXHJcbiAgICBcImRhdGFsaXN0XCIsXHJcbiAgICBcImRlbFwiLFxyXG4gICAgXCJkZm5cIixcclxuICAgIFwiZW1cIixcclxuICAgIFwiZW1iZWRcIixcclxuICAgIFwiaVwiLFxyXG4gICAgXCJpZnJhbWVcIixcclxuICAgIFwiaW1nXCIsXHJcbiAgICBcImlucHV0XCIsXHJcbiAgICBcImluc1wiLFxyXG4gICAgXCJrYmRcIixcclxuICAgIFwibGFiZWxcIixcclxuICAgIFwibWFwXCIsXHJcbiAgICBcIm1hcmtcIixcclxuICAgIFwibWV0ZXJcIixcclxuICAgIFwibm9zY3JpcHRcIixcclxuICAgIFwib2JqZWN0XCIsXHJcbiAgICBcIm91dHB1dFwiLFxyXG4gICAgXCJwaWN0dXJlXCIsXHJcbiAgICBcInByb2dyZXNzXCIsXHJcbiAgICBcInFcIixcclxuICAgIFwicnVieVwiLFxyXG4gICAgXCJzXCIsXHJcbiAgICBcInNhbXBcIixcclxuICAgIFwic2NyaXB0XCIsXHJcbiAgICBcInNlbGVjdFwiLFxyXG4gICAgXCJzbG90XCIsXHJcbiAgICBcInNtYWxsXCIsXHJcbiAgICBcInNwYW5cIixcclxuICAgIFwic3Ryb25nXCIsXHJcbiAgICBcInN1YlwiLFxyXG4gICAgXCJzdXBcIixcclxuICAgIFwic3ZnXCIsXHJcbiAgICBcInRlbXBsYXRlXCIsXHJcbiAgICBcInRleHRhcmVhXCIsXHJcbiAgICBcInRpbWVcIixcclxuICAgIFwidVwiLFxyXG4gICAgXCJ0dFwiLFxyXG4gICAgXCJ2YXJcIixcclxuICAgIFwidmlkZW9cIixcclxuICAgIFwid2JyXCJcclxuXSk7XHJcbiIsImltcG9ydCB7IGNsb25lRWxlbWVudCwgaCwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJldHVybkZhbHNlLCBydW5JbW1lZGlhdGVseSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24gfSBmcm9tIFwiLi9leGNsdXNpdmUuanNcIjtcbmltcG9ydCB7IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LCB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0VHlwZSwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlLCBUcmFuc2l0aW9uU3RhdGUsIFVzZVRyYW5zaXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xuXG5cbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbjxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IEUgfCBudWxsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwibXNcIikpXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcbiAgICAgICAgICAgIHJldHVybiAoK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGF0ZShuZXh0U3RhdGU6IFRyYW5zaXRpb25TdGF0ZSkge1xuICAgIHJldHVybiBuZXh0U3RhdGUuc3BsaXQoXCItXCIpIGFzIFtUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uUGhhc2VdO1xufVxuXG4vKipcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cbiAqIFxuICogQHBhcmFtIHBhcmFtMCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNpdGlvbjxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgcHJvcHNJbmNvbWluZzogeyBjaGlsZHJlbiwgLi4ucCB9LCBzaG93LCBhbmltYXRlT25Nb3VudCwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBvblZpc2liaWxpdHlDaGFuZ2UgfSwgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfSB9OiBVc2VUcmFuc2l0aW9uUGFyYW1ldGVyczxFPik6IFZOb2RlPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+PiB8IG51bGwge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVRyYW5zaXRpb25cIiwgb25WaXNpYmlsaXR5Q2hhbmdlKTtcblxuICAgIGNvbnN0IHsgZ2V0QW5pbWF0ZU9uTW91bnQgfSA9IHVzZUNvbnRleHQoU3dhcHBhYmxlQ29udGV4dCk7XG4gICAgZXhpdFZpc2liaWxpdHkgfHw9IFwiaGlkZGVuXCJcbiAgICBhbmltYXRlT25Nb3VudCA/Pz0gZ2V0QW5pbWF0ZU9uTW91bnQoKTtcbiAgICBtZWFzdXJlID8/PSBmYWxzZTtcblxuICAgIGNvbnN0IGdldEV4aXRWaXNpYmlsaXR5ID0gdXNlU3RhYmxlR2V0dGVyKGV4aXRWaXNpYmlsaXR5KTtcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcywgR2V0RW50ZXJDbGFzcywgR2V0RXhpdENsYXNzLCBHZXRNZWFzdXJlQ2xhc3MsIEdldEluaXRDbGFzcywgR2V0VHJhbnNpdGlvbkNsYXNzLCBHZXRGaW5hbGl6ZUNsYXNzLCBHZXREaXJlY3Rpb25DbGFzcywgR2V0UGhhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xuICAgIGNvbnN0IGdldE1lYXN1cmUgPSB1c2VTdGFibGVHZXR0ZXIobWVhc3VyZSk7XG4gICAgY29uc3QgeyBleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuOiB7IGV4Y2x1c2l2ZWx5T3BlbiwgaXNFeGNsdXNpdmUsIG9uVmlzaWJpbGl0eUNoYW5nZTogZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2UgfSB9ID0gdXNlRXhjbHVzaXZlVHJhbnNpdGlvbih7XG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHNob3cgfSxcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXksIGZvcmNlQ2xvc2U6IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgaW50ZXJuYWxPblNob3dDaGFuZ2VkKGZhbHNlLCBnZXRNZWFzdXJlKCkpOyB9KSB9XG4gICAgfSk7XG5cbiAgICBpZiAoaXNFeGNsdXNpdmUpIHtcbiAgICAgICAgc2hvdyA9IChzaG93ICYmIGV4Y2x1c2l2ZWx5T3Blbik7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQ8RT4oe30pXG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZjxoLkpTWC5DU1NQcm9wZXJ0aWVzPih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgICAvLyBUaGlzIGlzIHJlbW92ZWQgZHVyaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgZmlyc3QgcmVuZGVyXG4gICAgICAgIC8vIChhdCBsZWFzdCBvbmNlIGBzaG93YCBpcyBub24tbnVsbClcbiAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxuICAgIF0pKTtcbiAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoISFzdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGlvbiwgcGhhc2VdID0gcGFyc2VTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtkaXJlY3Rpb259LWZpbmFsaXplYCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHtcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kOiAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGdldEVsZW1lbnQoKSAmJiBlLmVsYXBzZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzIHRvIG1hdGNoIHRoZSBnaXZlbiBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZUNsYXNzZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSB8IG51bGwsIGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbiwgcGhhc2U/OiBUcmFuc2l0aW9uUGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuXG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRNZWFzdXJlQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0SW5pdENsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRGaW5hbGl6ZUNsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEluaXRDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcInJlbW92ZWRcIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJoaWRkZW5cIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1wZW5kaW5nYCxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9BZGQgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RGlyZWN0aW9uQ2xhc3MoZGlyZWN0aW9uKX1gLFxuICAgICAgICAgICAgcGhhc2UgPyBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXREaXJlY3Rpb25DbGFzcyhkaXJlY3Rpb24pfS0ke0dldFBoYXNlQ2xhc3MocGhhc2UpfWAgOiBcIlwiLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YFxuICAgICAgICBdO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5hbGxDbGFzc2VzVG9SZW1vdmUpO1xuICAgICAgICBhbGxDbGFzc2VzVG9SZW1vdmUubWFwKHYgPT4gY2xhc3NOYW1lcy5jdXJyZW50LmRlbGV0ZSh2KSk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcblxuICAgIH0sIFtdKTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBzaW5nbGUgXCJtZWFzdXJlXCIgdmFyaWFibGUgKG9yIHJlbW92ZXMgaXQpXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlU2l6ZVByb3BlcnR5ID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUsIHZhck5hbWU6IChrZXlvZiBoLkpTWC5DU1NQcm9wZXJ0aWVzKSAmIHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUgfCBudWxsLCBtZWFzdXJlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS10b3BgLCBzaXplPy50b3ApO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtbGVmdGAsIHNpemU/LmxlZnQpO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtd2lkdGhgLCBzaXplPy53aWR0aCk7XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1oZWlnaHRgLCBzaXplPy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gV2UgdXNlIGJvdGggdXNlVGltZW91dCBhbmQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciB0aW1pbmcgY2VydGFpbiB0aGluZ3MgLS1cbiAgICAvLyByYWYgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSBpbml0IHRvIHRyYW5zaXRpb24gKHdvdWxkIHVzZSBxdWV1ZU1pY3JvdGFzayBidXQgaXQgY2FuJ3QgYmUgY2FuY2VsbGVkKVxuICAgIC8vIHNldFRpbWVvdXQgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSB0cmFuc2l0aW9uIHRvIGZpbmFsaXplIChhcyBhIGJhY2t1cCBpbiBjYXNlIHRyYW5zaXRpb25lbmQgZG9lc24ndCBmaXJlKVxuICAgIC8vXG4gICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgc3RhbGUgY2FsbGJhY2tzIHJ1bm5pbmcgKGkuZS4gd2hlbiB3ZSByYXBpZGx5IHN3aXRjaCBiZXR3ZWVuIHZpc2libGUgYW5kIG5vdClcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhY2N1cmF0ZWx5IGNhbmNlbCBhbnl0aGluZyB0aGF0IGNhbiBjaGFuZ2Ugb3VyIHN0YXRlIG9uIGEgZGVsYXkuXG4gICAgLy9cbiAgICAvLyBBbHNvIG9mIG5vdGUsIHdlIHN0b3JlIFwiKGYpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQoZilcIiBpbnN0ZWFkIG9mIGp1c3QgXCJ3aW5kb3cuY2xlYXJUaW1lb3V0XCIgYmVjYXVzZVxuICAgIC8vIG9mIHRoZSBpbXBsaWNpdCB3aW5kb3cgb2JqZWN0IC0tIHByb2JsZW1zIHdpdGggYSBtaXNzaW5nIGB0aGlzYCBvYmplY3QgYW5kIGFsbCB0aGF0IG5vbnNlbnNlLlxuICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSB1c2VSZWY8bnVtYmVyPigtMSk7XG4gICAgY29uc3QgdGltZW91dENsZWFyRnVuY3Rpb24gPSB1c2VSZWY8KHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSkgfCAodHlwZW9mIGNsZWFyVGltZW91dCkgfCBudWxsPihudWxsKTtcblxuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLCB0aGVyZSdzIHNvbWUgbG9naWMgd2UgbmVlZCB0byBydW46XG4gICAgICogXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYSBgdHJhbnNpdGlvbmAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IHVudGlsIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgdGhlbiBjaGFuZ2UgdG8gdGhlIGBmaW5hbGl6ZWAgcGhhc2UuXG4gICAgICogXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+PigobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIG5vIHN0YWxlIGNoYW5nZSBjb2RlIGV2ZXIgcnVuc1xuICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID49IDAgJiYgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudClcbiAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcblxuICAgICAgICAvLyBIYW5kbGUgaW5lcnQgcHJvcHMvcHJvcGVydHlcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBpZiAoZXhpdFZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZXJ0ID0gKGV4aXRWaXNpYmlsaXR5ID09IFwiaW5lcnRcIiAmJiAobmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiAmJiBuZXh0UGhhc2UgPT0gXCJmaW5hbGl6ZVwiKSA/IHRydWUgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGluZXJ0KVxuICAgICAgICAgICAgICAgIChvdGhlclByb3BzLmN1cnJlbnQgYXMgYW55KS5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCIgYXMgbmV2ZXJdO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICBlbGVtZW50LmluZXJ0ID0gKGluZXJ0IHx8IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQmVpbmdQYWludGVkID0gKG5leHREaXJlY3Rpb24gPT0gXCJlbnRlclwiIHx8IChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSAhPSBcImZpbmFsaXplXCIpKTtcbiAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlPy4oaXNCZWluZ1BhaW50ZWQpO1xuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uVmlzaWJpbGl0eUNoYW5nZT8uKGlzQmVpbmdQYWludGVkKTtcblxuICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIChuZXh0UGhhc2UgPT0gXCJpbml0XCIgfHwgbmV4dFBoYXNlID09IFwidHJhbnNpdGlvblwiKSlcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG5cblxuICAgICAgICBzd2l0Y2ggKG5leHRQaGFzZSkge1xuICAgICAgICAgICAgY2FzZSBcIm1lYXN1cmVcIjoge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy9zZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS1pbml0YCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImluaXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gISFJbnRlbnRpb25hbCBmYWxsLXRocm91Z2ghIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHNldFN0YXRlKGAke25leHREaXJlY3Rpb259LXRyYW5zaXRpb25gKTsgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH0sIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSAqIDEuNSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNsZWFyVGltZW91dChmKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZpbmFsaXplXCI6IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIG9yIHNjaGVkdWxlIG9yIGFueXRoaW5nIC0tIHdlIGp1c3QgdXBkYXRlIG91ciBjbGFzc2VzIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSBudWxsOyAgICAvLyBEb2VzIHRoaXMgbWFrZSBpdCBtb3JlIG9yIGxlc3MgY2xlYXI/XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBbZ2V0U3RhdGUsIHNldFN0YXRlXSA9IHVzZVBhc3NpdmVTdGF0ZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+KG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcblxuICAgIC8vIFdoZW4gd2UgbW91bnQsIGFuZCBldmVyeSB0aW1lIHRoZXJlYWZ0ZXIgdGhhdCBgc2hvd2AgY2hhbmdlcyxcbiAgICAvLyBjaGFuZ2Ugb3VyIGN1cnJlbnQgc3RhdGUgYWNjb3JkaW5nIHRvIHRoYXQgYHNob3dgIHZhbHVlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBpbnRlcm5hbE9uU2hvd0NoYW5nZWQoc2hvdywgbWVhc3VyZSksIFttZWFzdXJlLCBzaG93XSk7XG5cblxuICAgIC8vIFRoaXMgaGFzIG5vIGRlcGVuZGVuY2VzIGFuZCBpcyByZWxpZWQgb24gaW4gdHdvIGRpZmZlcmVudCBhcmVhc1xuICAgIGZ1bmN0aW9uIGludGVybmFsT25TaG93Q2hhbmdlZChzaG93OiBib29sZWFuIHwgbnVsbCwgbWVhc3VyZTogYm9vbGVhbikge1xuXG4gICAgICAgIC8vIElmIGBzaG93YCBpcyBudWxsLCB0aGVuIHdlIGRvbid0IGNoYW5nZSBhbnl0aGluZy5cbiAgICAgICAgaWYgKHNob3cgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyAoSWYgYHNob3dgIGlzIHRydWUvZmFsc2UsIHdlJ2xsIHJlbW92ZSB0aGUgQ1NTIGNsYXNzZXMgZHVyaW5nIGBvbkNoYW5nZWApXG5cbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgbGV0IG5leHRQaGFzZTogVHJhbnNpdGlvblBoYXNlID0gbWVhc3VyZSA/IFwibWVhc3VyZVwiIDogXCJpbml0XCI7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IFtjdXJyZW50RGlyZWN0aW9uLCBjdXJyZW50UGhhc2VdID0gcGFyc2VTdGF0ZShjdXJyZW50U3RhdGUpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQaGFzZSAhPSBcImZpbmFsaXplXCIpXG4gICAgICAgICAgICAgICAgbmV4dFBoYXNlID0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhbmltYXRlT25Nb3VudClcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZW50ZXItJHtuZXh0UGhhc2V9YCk7XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGFuaW1hdGVPbk1vdW50KVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICE9IG51bGwpXG4gICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS1kdXJhdGlvbmBdID0gZHVyYXRpb24gKyBcIm1zXCI7XG4gICAgZWxzZVxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LWR1cmF0aW9uYF07XG5cbiAgICBlYXNpbmdJbiA/Pz0gZWFzaW5nO1xuICAgIGVhc2luZ091dCA/Pz0gZWFzaW5nO1xuXG4gICAgaWYgKGVhc2luZ091dCAhPSBudWxsKVxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF0gPSBlYXNpbmdPdXQ7XG4gICAgZWxzZVxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdO1xuXG5cbiAgICBpZiAoZWFzaW5nSW4gIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXSA9IGVhc2luZ0luO1xuICAgIGVsc2VcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF07XG5cblxuXG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuXG5cblxuICAgIC8vIE5vIG1hdHRlciB3aGF0IGRlbGF5TW91bnRVbnRpbFNob3duIGlzLFxuICAgIC8vIG9uY2Ugd2UndmUgcmVuZGVyZWQgb3VyIGNoaWxkcmVuIG9uY2UsIFxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGRvbid0IHVubW91bnQgdGhlbSBhZ2FpbiBhbmQgd2FzdGUgYWxsIHRoYXQgd29yay5cbiAgICAvLyAoSWYgeW91IHJlYWxseSBuZWVkIHRoaXMgeW91IGNhbiBqdXN0IHVubW91bnQgdGhlIGVudGlyZSB0cmFuc2l0aW9uIGl0c2VsZilcbiAgICBjb25zdCBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiA9IChzaG93IHx8ICFkZWxheU1vdW50VW50aWxTaG93bik7XG4gICAgY29uc3QgaGFzUmVuZGVyZWRDaGlsZHJlbiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiB8fCBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQ7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuKVxuICAgICAgICAgICAgaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50IHx8PSB0cnVlO1xuICAgIH0sIFtoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgPyBmYWxzZSA6IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuXSk7XG5cblxuICAgIGNvbnN0IGNoaWxkcmVuSXNWbm9kZSA9IChjaGlsZHJlbiAmJiAoY2hpbGRyZW4gYXMgVk5vZGUpLnR5cGUgJiYgKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyk7XG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHVzZU1lcmdlZFByb3BzPEU+KHAsIHByb3BzU3RhYmxlLCBvdGhlclByb3BzLmN1cnJlbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgICAuLi5jbGFzc05hbWVzLmN1cnJlbnQsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWBcbiAgICAgICAgXS5qb2luKFwiIFwiKSxcbiAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudFxuICAgIH0sIGNoaWxkcmVuSXNWbm9kZSA/IHsgcmVmOiAoY2hpbGRyZW4gYXMgVk5vZGUpLnJlZiwgLi4uKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyB9IDoge30pO1xuXG5cblxuICAgIGNvbnN0IHJlc2V0Q29udGV4dCA9IHVzZVJlZjxTd2FwcGFibGVDb250ZXh0VHlwZT4oeyBnZXRBbmltYXRlT25Nb3VudDogcmV0dXJuRmFsc2UgfSkuY3VycmVudDtcblxuICAgIGxldCBtb2RpZmllZENoaWxkcmVuOiBWTm9kZTtcblxuICAgIGlmIChjaGlsZHJlbklzVm5vZGUpIHtcbiAgICAgICAgbW9kaWZpZWRDaGlsZHJlbiA9IDxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXNldENvbnRleHR9PntjbG9uZUVsZW1lbnQoY2hpbGRyZW4gYXMgVk5vZGUsIGZpbmFsUHJvcHMpfTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1vZGlmaWVkQ2hpbGRyZW4gPSA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cmVzZXRDb250ZXh0fT48c3BhbiB7Li4uZmluYWxQcm9wcyBhcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+fT57Y2hpbGRyZW59PC9zcGFuPjwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyQ2hpbGRyZW4gPyBtb2RpZmllZENoaWxkcmVuIDogbnVsbDtcbn1cblxuXG5cbmZ1bmN0aW9uIGZvcmNlUmVmbG93PEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oZTogRSkge1xuXG4gICAgLy8gVHJ5IHJlYWxseSBoYXJkIHRvIG1ha2Ugc3VyZSB0aGlzIGlzbid0IG9wdGltaXplZCBvdXQgYnkgYW55dGhpbmcuXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cbiAgICBjb25zdCBwID0gKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXk7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBwO1xuICAgIHJldHVybiBlO1xufVxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dC5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgbWluaW11bSBvciBtYXhpbXVtIG9wYWNpdHkgdmFsdWVzIHRvIHVzZSBmb3IgdGhlIGZhZGUgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBmYWRlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIG91dC5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmFkZU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gZmFkZWQgaW4uXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZhZGVNYXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzRmFkZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWluLCBmYWRlTWF4IH0gfTogVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZhZGVgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxyXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXHJcbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXHJcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oeyByZWYsIC4uLnJlc3QgfSwgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgY2xpcFBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwT3JpZ2luSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIGNsaXAgYXJvdW5kIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBjbGlwIHRvL2Zyb20sIGZyb20gMCB0byAxICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBjbGlwIHRvL2Zyb20sIGZyb20gMCB0byAxIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDFcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0NsaXA8RSBleHRlbmRzIEVsZW1lbnQ+KHsgY2xpcFBhcmFtZXRlcnM6IHsgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUgfSB9OiBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7R2V0QmFzZUNsYXNzKCl9LWNsaXBgKSxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcclxuICAgICAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXHJcbiAgICAgICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllcyxcclxuICAgICAgICB9XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2xpcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+LCBcImNsaXBQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ2xpcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NsaXAoeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jayB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzQ2xpcCwgVXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnMgfSBmcm9tIFwiLi9jbGlwLmpzXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGUuanNcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsLmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGlwRmFkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+LCBcImNsaXBQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlwRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGRlbGF5TW91bnRVbnRpbFNob3duLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkdXJhdGlvbiwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGNsaXBNaW4sIGNsaXBNaW5CbG9jaywgY2xpcE1pbklubGluZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENsaXBGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDbGlwKHsgY2xpcFBhcmFtZXRlcnM6IHsgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2sgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcblxyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGNvbGxhcHNlIGVmZmVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuXHJcbiAgICBjb2xsYXBzZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAqIFRoZSBzbWFsbGVzdCBzaXplIHRoZSBjb21wb25lbnQgY29sbGFwc2VzIHRvLlxyXG4gICAgICAgICovXHJcbiAgICAgICAgbWluQmxvY2tTaXplOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKiBcclxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0NvbGxhcHNlPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9OiBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWNvbGxhcHNlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPiwgXCJjb2xsYXBzZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxyXG4gKiBcclxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSEgXHJcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXHJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBzaG93LCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkdXJhdGlvbiwgZGVsYXlNb3VudFVudGlsU2hvd24sIG1pbkJsb2NrU2l6ZSwgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ29sbGFwc2VQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuXHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NvbGxhcHNlKHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNDb2xsYXBzZSwgVXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vY29sbGFwc2UuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGFwc2VGYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPiwgXCJjb2xsYXBzZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgc2hvdywgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZHVyYXRpb24sIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgZmFkZU1pbiwgZmFkZU1heCwgZXhpdFZpc2liaWxpdHksIG1pbkJsb2NrU2l6ZSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IENvbGxhcHNlRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ29sbGFwc2UoeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzLmpzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiwgdXNlTGFzdE5vbk51bGxWYWx1ZSB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBhbmQgZXh0ZW50IG9mIHRoZSBmbGlwIGVmZmVjdC4gXG4gKiBWYWx1ZXMgYXJlIHJlbGF0aXZlLCB3aXRoIDEgb3IgLTEgYmVpbmcgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGF0IGRpcmVjdGlvbi5cbiAqIGAwLjVgLCBmb3IgZXhhbXBsZSwgd291bGQgZmxpcCB0byB0aGUgcmlnaHQgYnkgNTAlIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xuICAgIGZsaXBQYXJhbWV0ZXJzOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgaW5saW5lIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBBbmdsZUlubGluZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhcmdldCBhbmdsZSAoaW4gZGVncmVlcykgdG8gcm90YXRlIHRvd2FyZHMgb24gdGhlIGJsb2NrIGF4aXMgKFggYXhpcyBmb3IgaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cbiAgICAgICAgICovXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaW5jZSB0aGlzIGlzIGEgM0QgZWZmZWN0LCBhIHBlcnNwZWN0aXZlIHZhbHVlIGlzIG5lZWRlZC5cbiAgICAgICAgICogQGRlZmF1bHQgODAwcHhcbiAgICAgICAgICovXG4gICAgICAgIGZsaXBQZXJzcGVjdGl2ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNGbGlwPEUgZXh0ZW5kcyBFbGVtZW50Pih7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH06IFVzZUJhc2VQcm9wc0ZsaXBQYXJhbWV0ZXJzPEU+KSB7XG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1mbGlwYCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVJbmxpbmUpID8/IDApfWRlZ2AsXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsodXNlTGFzdE5vbk51bGxWYWx1ZShmbGlwQW5nbGVCbG9jaykgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1wZXJzcGVjdGl2ZWBdOiBgJHsoZmxpcFBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4sIFwiZmxpcFBhcmFtZXRlcnNcIj4+IHsgfTtcblxuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXG4gKiBcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKiBcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiBleGNsdXNpdml0eUtleSBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcbiAqIChgZmxpcElubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pIFxuICogXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZsaXAgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXA8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkZWxheU1vdW50VW50aWxTaG93biwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgZmxpcFBlcnNwZWN0aXZlLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBGbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXG4gICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBlYXNpbmdJbixcbiAgICAgICAgICAgIGVhc2luZ091dCxcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZsaXAoeyBmbGlwUGFyYW1ldGVyczogeyBmbGlwQW5nbGVCbG9jaywgZmxpcEFuZ2xlSW5saW5lLCBmbGlwUGVyc3BlY3RpdmUgfSB9KSxcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxuICAgICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XG4gICAgfSk7XG59KSk7XG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYsIHVzZUxhc3ROb25OdWxsVmFsdWUgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBkaXJlY3Rpb24gYW5kIGV4dGVudCBvZiB0aGUgc2xpZGUgZWZmZWN0LiBcclxuICogVmFsdWVzIGFyZSByZWxhdGl2ZSwgd2l0aCAxIG9yIC0xIGJlaW5nIHRoZSBzaXplIG9mIHRoZSBjb21wb25lbnQgaW4gdGhhdCBkaXJlY3Rpb24uXHJcbiAqIGAwLjVgLCBmb3IgZXhhbXBsZSwgd291bGQgc2xpZGUgdG8gdGhlIHJpZ2h0IGJ5IDUwJSBvZiB0aGUgZWxlbWVudCdzIHdpZHRoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgc2xpZGVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBzbGlkZSB0by9mcm9tIChYIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogV2hlbiAwLCB0aGUgbGFzdCBub24temVybyB2YWx1ZSB3aWxsIGJlIHVzZWQuIFBhc3MgbnVsbC91bmRlZmluZWQgdG8gYWN0dWFsbHkgdXNlIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jazogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzU2xpZGU8RSBleHRlbmRzIEVsZW1lbnQ+KHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0gfTogVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBzbGlkZVRhcmdldElubGluZSA9IHVzZUxhc3ROb25OdWxsVmFsdWUoc2xpZGVUYXJnZXRJbmxpbmUpO1xyXG4gICAgc2xpZGVUYXJnZXRCbG9jayA9IHVzZUxhc3ROb25OdWxsVmFsdWUoc2xpZGVUYXJnZXRCbG9jayk7XHJcblxyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGVgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tc2xpZGUtdGFyZ2V0LWJsb2NrYF06IGAkeyhzbGlkZVRhcmdldEJsb2NrID8/IDApfWBcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cclxuICogXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKiBcclxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcclxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmAgXHJcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKSBcclxuICogXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNsaWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIG9uVmlzaWJpbGl0eUNoYW5nZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgZGVsYXlNb3VudFVudGlsU2hvd24sIC4uLnJlc3QgfTogU2xpZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGUuanNcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBTbGlkZUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBoLCBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0LmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0aWVzIHRoYXQgYWxsb3cgYWRqdXN0aW5nIHRoZSBvcmlnaW4sIG1pbmltdW0gc2l6ZSwgYW5kIGRpcmVjdGlvbiBvZiB0aGUgem9vbSBlZmZlY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzPEU+IHtcclxuICAgIHpvb21QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW46IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gem9vbSBvdXQgb2YvaW50byAoWCBjb21wb25lbnQpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvIChZIGNvbXBvbmVudClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxICh3aXRoIFggJiBZIGNvbXBvbmVudHMgaWRlbnRpY2FsKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gc2hyaW5rIHRvL2Zyb20sIGZyb20gMCB0byAxIChZIGNvbXBvbmVudCBpbiBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluQmxvY2s6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzWm9vbTxFIGV4dGVuZHMgRWxlbWVudD4oeyB6b29tUGFyYW1ldGVyczogeyB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9IH06IFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tem9vbWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tb3JpZ2luLWJsb2NrYF06IGAkeyh6b29tT3JpZ2luQmxvY2sgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb20gPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb208RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkZWxheU1vdW50VW50aWxTaG93biwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFpvb21Qcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxufSkpO1xyXG5cclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGUuanNcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlLmpzXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbC5qc1wiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb20uanNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVab29tUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVyczxFPiwgXCJ6b29tUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlWm9vbVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGUuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzU2xpZGUsIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL3NsaWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlWm9vbUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBmYWRlTWF4LCBmYWRlTWluLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlWm9vbUZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlLmpzXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZS5qc1wiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXMuanNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWwuanNcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzWm9vbSwgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnMgfSBmcm9tIFwiLi96b29tLmpzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFpvb21GYWRlUHJvcHM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBab29tRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNGYWRlKHsgZmFkZVBhcmFtZXRlcnM6IHsgZmFkZU1heCwgZmFkZU1pbiB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1pvb20oeyB6b29tUGFyYW1ldGVyczogeyB6b29tTWluLCB6b29tTWluQmxvY2ssIHpvb21NaW5JbmxpbmUsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5CbG9jaywgem9vbU9yaWdpbklubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgICAgICB9KVxyXG4gICAgKTtcclxufSkpO1xyXG4iLG51bGxdLCJuYW1lcyI6WyJzbGljZSIsIm9wdGlvbnMiLCJ2bm9kZUlkIiwicmVyZW5kZXJRdWV1ZSIsInByZXZEZWJvdW5jZSIsImRlZmVyIiwiaSIsIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImFzc2lnbiIsIm9iaiIsInByb3BzIiwicmVtb3ZlTm9kZSIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNoaWxkcmVuIiwia2V5IiwicmVmIiwibm9ybWFsaXplZFByb3BzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImNyZWF0ZVZOb2RlIiwib3JpZ2luYWwiLCJ2bm9kZSIsIl9fayIsIl9fIiwiX19iIiwiX19lIiwiX19kIiwiX19jIiwiX19oIiwiY29uc3RydWN0b3IiLCJfX3YiLCJGcmFnbWVudCIsIkNvbXBvbmVudCIsImNvbnRleHQiLCJ0aGlzIiwiZ2V0RG9tU2libGluZyIsImNoaWxkSW5kZXgiLCJpbmRleE9mIiwic2libGluZyIsInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwiY2hpbGQiLCJiYXNlIiwiZW5xdWV1ZVJlbmRlciIsImMiLCJwdXNoIiwicHJvY2VzcyIsIl9fciIsImRlYm91bmNlUmVuZGVyaW5nIiwibSQxIiwicmVuZGVyUXVldWVMZW5ndGgiLCJjb21wb25lbnQiLCJjb21taXRRdWV1ZSIsIm9sZFZOb2RlIiwib2xkRG9tIiwicGFyZW50RG9tIiwic29ydCIsImEiLCJiIiwic2hpZnQiLCJkaWZmIiwib3duZXJTVkdFbGVtZW50IiwiY29tbWl0Um9vdCIsImRpZmZDaGlsZHJlbiIsInJlbmRlclJlc3VsdCIsIm5ld1BhcmVudFZOb2RlIiwib2xkUGFyZW50Vk5vZGUiLCJnbG9iYWxDb250ZXh0IiwiaXNTdmciLCJleGNlc3NEb21DaGlsZHJlbiIsImlzSHlkcmF0aW5nIiwiaiIsImNoaWxkVk5vZGUiLCJuZXdEb20iLCJmaXJzdENoaWxkRG9tIiwicmVmcyIsIm9sZENoaWxkcmVuIiwib2xkQ2hpbGRyZW5MZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJyZW9yZGVyQ2hpbGRyZW4iLCJwbGFjZUNoaWxkIiwiZ2V0TGFzdERvbSIsIm5leHRTaWJsaW5nIiwidW5tb3VudCIsImFwcGx5UmVmIiwidG1wIiwidG9DaGlsZEFycmF5Iiwib3V0Iiwic29tZSIsIm5leHREb20iLCJzaWJEb20iLCJvdXRlciIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwibGFzdERvbSIsImRpZmZQcm9wcyIsImRvbSIsIm5ld1Byb3BzIiwib2xkUHJvcHMiLCJoeWRyYXRlIiwic2V0UHJvcGVydHkiLCJzZXRTdHlsZSIsInN0eWxlIiwidmFsdWUiLCJ0ZXN0IiwibmFtZSIsIm9sZFZhbHVlIiwidXNlQ2FwdHVyZSIsIm8iLCJjc3NUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudFByb3h5Q2FwdHVyZSIsImV2ZW50UHJveHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwibmV3Vk5vZGUiLCJpc05ldyIsIm9sZFN0YXRlIiwic25hcHNob3QiLCJjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24iLCJwcm92aWRlciIsImNvbXBvbmVudENvbnRleHQiLCJyZW5kZXJIb29rIiwiY291bnQiLCJuZXdUeXBlIiwiY29udGV4dFR5cGUiLCJfX0UiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJkb1JlbmRlciIsInN1YiIsInN0YXRlIiwiX19uIiwiX3NiIiwiX19zIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiZm9yRWFjaCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJfX1AiLCJnZXRDaGlsZENvbnRleHQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsImRpZmZFbGVtZW50Tm9kZXMiLCJkaWZmZWQiLCJyb290IiwiY2IiLCJvbGRIdG1sIiwibmV3SHRtbCIsIm5vZGVUeXBlIiwibG9jYWxOYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsImlzIiwiZGF0YSIsImNoaWxkTm9kZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImF0dHJpYnV0ZXMiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJjaGVja2VkIiwiY3VycmVudCIsInBhcmVudFZOb2RlIiwic2tpcFJlbW92ZSIsInIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlcGxhY2VOb2RlIiwiZmlyc3RDaGlsZCIsImNsb25lRWxlbWVudCIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0VmFsdWUiLCJjb250ZXh0SWQiLCJDb25zdW1lciIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwic3VicyIsImN0eCIsIl9wcm9wcyIsIm9sZCIsInNwbGljZSIsImVycm9yIiwiZXJyb3JJbmZvIiwiY3RvciIsImhhbmRsZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZENhdGNoIiwidXBkYXRlIiwiY2FsbGJhY2siLCJzIiwiZm9yY2VVcGRhdGUiLCJQcm9taXNlIiwidGhlbiIsImJpbmQiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImlzU3RhdGljQ2hpbGRyZW4iLCJfX3NvdXJjZSIsIl9fc2VsZiIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2aW91c0NvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwiRU1QVFkiLCJvbGRCZWZvcmVEaWZmIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwiaG9va3MiLCJfX0giLCJfX1YiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJhY3Rpb24iLCJjdXJyZW50VmFsdWUiLCJfX04iLCJuZXh0VmFsdWUiLCJfaGFzU2N1RnJvbUhvb2tzIiwicHJldlNjdSIsInAiLCJzdGF0ZUhvb2tzIiwiZmlsdGVyIiwieCIsImV2ZXJ5Iiwic2hvdWxkVXBkYXRlIiwiaG9va0l0ZW0iLCJ1c2VFZmZlY3QiLCJhcmdzIiwiYXJnc0NoYW5nZWQiLCJfcGVuZGluZ0FyZ3MiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWZ0ZXJOZXh0RnJhbWUiLCJoYXNFcnJvcmVkIiwiSEFTX1JBRiIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJob29rIiwiY29tcCIsImNsZWFudXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJ0IiwibiIsImNsc3giLCJ1c2VFbnN1cmVTdGFiaWxpdHkiLCJwYXJlbnRIb29rTmFtZSIsIl9sZW4iLCJ2YWx1ZXMiLCJfa2V5IiwiaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkiLCJzaG93bkVycm9yIiwidXNlSGVscGVyIiwiY29uc29sZSIsImNvbmNhdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJfbCQxJGRlYm91bmNlUmVuZGVyaW4iLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsImN1c3RvbURlYm91bmNlUmVuZGVyaW5nIiwidmFsdWVSZWYiLCJVbnNldCIsInJlYXNvblJlZiIsIndhcm5pbmdSZWYiLCJkZXBlbmRlbmN5VG9Db21wYXJlQWdhaW5zdCIsImNsZWFudXBDYWxsYmFja1JlZiIsIm9uU2hvdWxkQ2xlYW5VcCIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiX29uQ2hhbmdlIiwiZXgiLCJnZXRWYWx1ZSIsIndhcm4iLCJzZXRWYWx1ZSIsInJlYXNvbiIsIkZ1bmN0aW9uIiwibmV4dFJlYXNvbiIsIm5leHREZXAiLCJwcmV2RGVwIiwiX29uQ2hhbmdlMiIsIlN5bWJvbCIsInJldHVybkZhbHNlIiwicmV0dXJuTnVsbCIsInJ1bkltbWVkaWF0ZWx5IiwiVGFibGUiLCJiYXNlNjQiLCJyYW5kb202Qml0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbTY0Qml0cyIsImdlbmVyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJtYXAiLCJqb2luIiwicHJldmlvdXNJbnB1dHMiLCJNYXAiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImdldCIsImlucHV0cyIsIl9lZmZlY3RJbmZvJGNsZWFudXAiLCJlZmZlY3QiLCJzZXQiLCJjbGVhciIsIl9sZW4yIiwiX2tleTIiLCJ1c2VCZWZvcmVMYXlvdXRFZmZlY3QiLCJkZWxldGUiLCJ1c2VTdGFibGVHZXR0ZXIiLCJFcnJvciIsInVzZVN0YWJsZU9iamVjdCIsIk9iamVjdCIsImVudHJpZXMiLCJfcmVmIiwiX2siLCJ2IiwiV2Vha01hcCIsImlzU3RhYmxlR2V0dGVyIiwiX21hcCRnZXQiLCJzZXRJc1N0YWJsZUdldHRlciIsInVzZVN0YWJsZUNhbGxiYWNrIiwiZm4iLCJub0RlcHMiLCJjdXJyZW50Q2FsbGJhY2tHZXR0ZXIiLCJ1c2VDYWxsYmFja05hdGl2ZSIsImFzc2VydCIsInVzZU1lcmdlZENoaWxkcmVuIiwibGhzIiwicmhzIiwidXNlTWVyZ2VkQ2xhc3NlcyIsImxoc0NsYXNzIiwibGhzQ2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwic3BsaXQiLCJyaHNDbGFzc2VzIiwiYWxsQ2xhc3NlcyIsIlNldCIsImZyb20iLCJwcm9jZXNzUmVmIiwiaW5zdGFuY2UiLCJ1c2VNZXJnZWRSZWZzIiwiY29tYmluZWQiLCJzdHlsZVN0cmluZ1RvT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJzdGF0ZW1lbnQiLCJ1c2VNZXJnZWRTdHlsZXMiLCJsb2ciLCJ1c2VNZXJnZWRQcm9wcyIsIl9sZW4zIiwiYWxsUHJvcHMiLCJfa2V5MyIsInJldCIsIm5leHRQcm9wcyIsInVzZU1lcmdlZFByb3BzMiIsImtub3ducyIsIm1lcmdlVW5rbm93biIsImxoc1ZhbHVlIiwicmhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImxoc0FsbCIsInJoc0FsbCIsImNsYXNzTmFtZSIsImxoc0tleVUiLCJsaHNLZXkiLCJoYXMiLCJyaHNLZXlVIiwicmhzS2V5IiwibHYiLCJydiIsImFsbCIsInVzZVJlZkVsZW1lbnQiLCJvbkVsZW1lbnRDaGFuZ2UiLCJvbk1vdW50Iiwib25Vbm1vdW50IiwicmVmRWxlbWVudFBhcmFtZXRlcnMiLCJoYW5kbGVyIiwicHJldlZhbHVlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJwcm9wc1N0YWJsZSIsInJlZkVsZW1lbnRSZXR1cm4iLCJ1c2VNYW5hZ2VkQ2hpbGRyZW4iLCJwYXJlbnRQYXJhbWV0ZXJzIiwibWFuYWdlZENoaWxkcmVuUGFyYW1ldGVycyIsIm9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdCIsIm9uQ2hpbGRyZW5Nb3VudENoYW5nZSIsIm9uQ2hpbGRDb3VudENoYW5nZSIsInJlc3QiLCJnZXRIaWdoZXN0SW5kZXgiLCJtYW5hZ2VkQ2hpbGRyZW5BcnJheSIsImhpZ2hlc3RJbmRleCIsImFyciIsInJlYyIsImxvd2VzdEluZGV4IiwiZm9yRWFjaENoaWxkIiwiZmllbGQiLCJnZXRNYW5hZ2VkQ2hpbGRJbmZvIiwiaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkIiwicmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2VycyIsInJlbW90ZVVMRUNoaWxkQ2hhbmdlZCIsInNpemUiLCJhZGQiLCJyZW1vdGVVTEVDaGlsZE1vdW50ZWQiLCJtb3VudGVkIiwibW91bnRzIiwidW5tb3VudHMiLCJnZXRDaGlsZHJlbiIsIm1heCIsInNoYXZlIiwibWFuYWdlZENoaWxkcmVuIiwiXyIsImdldEF0IiwiYXJyYXlTbGljZSIsIm1hbmFnZWRDaGlsZENvbnRleHQiLCJtYW5hZ2VkQ2hpbGRyZW5SZXR1cm4iLCJ1c2VNYW5hZ2VkQ2hpbGQiLCJpbmZvIiwibWFuYWdlZENoaWxkUGFyYW1ldGVycyIsIl9pbmZvJGNvbnRleHQiLCJmbGF0IiwibWFuYWdlZENoaWxkUmV0dXJuIiwidXNlQ2hpbGRyZW5GbGFnIiwiX3JlZjIiLCJpbml0aWFsSW5kZXgiLCJjbG9zZXN0Rml0Iiwib25JbmRleENoYW5nZSIsInNldEF0IiwiaXNWYWxpZCIsImdldEN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImdldFJlcXVlc3RlZEluZGV4Iiwic2V0UmVxdWVzdGVkSW5kZXgiLCJnZXRDbG9zZXN0Rml0IiwicmVxdWVzdGVkSW5kZXgiLCJjbG9zZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsImNsb3Nlc3RJbmRleCIsIm5ld0Rpc3RhbmNlIiwiYWJzIiwicmVldmFsdWF0ZUNsb3Nlc3RGaXQiLCJjdXJyZW50Q2hpbGQiLCJjbG9zZXN0Rml0SW5kZXgiLCJjbG9zZXN0Rml0Q2hpbGQiLCJjaGFuZ2VJbmRleCIsIm5ld01hdGNoaW5nQ2hpbGQiLCJvbGRNYXRjaGluZ0NoaWxkIiwiY2hpbGRJc1ZhbGlkIiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJfYSIsIl9iIiwiX2MiLCJkZXN0cnVjdG9yIiwibnVsbGFibGUiLCJ0b3AiLCJlbGVtcyIsImVsZW1lbnQiLCJyZW1vdmUiLCJwb3AiLCJuZXdUb3AiLCJ0b0tlZXBJbmVydCIsIm9sZFBhcmVudHMiLCJuZXdQYXJlbnRzIiwiYm9keSIsInRvU2tpcCIsIm9sZEluZXJ0IiwibmV3SW5lcnQiLCJzaWJsaW5nc1RvUmVzdG9yZSIsImluZXJ0IiwiZWxlbWVudHMiLCJtbyIsImRpc2Nvbm5lY3QiLCJzaWJsaW5ncyIsInBhcmVudCIsImluZXJ0ZWRTaWJsaW5ncyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJwYXJlbnRUb09ic2VydmUiLCJtYXliZVNoYWR5Um9vdCIsIl9fc2hhZHkiLCJob3N0Iiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsInRhcmdldCIsImlkeCIsImluZXJ0ZWRDaGlsZCIsInJlbW92ZWROb2RlcyIsImFkZGVkTm9kZXMiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiYXNzaWduZWRTbG90Iiwic2hhZG93Um9vdCIsInJlc3VsdCIsIm5vZGVzIiwic2xvdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCIkYmxvY2tpbmdFbGVtZW50cyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIndpbmRvdyIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiX29uTXV0YXRpb24iLCJzdWJ0cmVlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImNvbnRhaW5zIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIl9hZG9wdEluZXJ0Um9vdCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsIl9vbkRvY3VtZW50TG9hZGVkIiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJfaSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIkhUTUxFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJzZXRTdGF0ZVAiLCJ1c2VTdGF0ZVAiLCJnZXRTdGF0ZSIsImlzTmFOIiwic2hhbGxvd0RpZmZlcnMiLCJQdXJlQ29tcG9uZW50IiwibWVtbyIsImNvbXBhcmVyIiwidXBkYXRlUmVmIiwiTWVtb2VkIiwiZGlzcGxheU5hbWUiLCJpc1JlYWN0Q29tcG9uZW50IiwiX19mIiwiaXNQdXJlUmVhY3RDb21wb25lbnQiLCJvbGREaWZmSG9vayIsIlJFQUNUX0ZPUldBUkRfU1lNQk9MIiwiZm9yIiwiZm9yd2FyZFJlZiIsIkZvcndhcmRlZCIsImNsb25lIiwiJCR0eXBlb2YiLCJtYXBGbiIsIm9sZENhdGNoRXJyb3IiLCJvbGRVbm1vdW50IiwiZGV0YWNoZWRDbG9uZSIsImRldGFjaGVkUGFyZW50IiwicmVtb3ZlT3JpZ2luYWwiLCJvcmlnaW5hbFBhcmVudCIsIlN1c3BlbnNlIiwiX191IiwiX3N1c3BlbmRlcnMiLCJzdXNwZW5kZWQiLCJfX2EiLCJTdXNwZW5zZUxpc3QiLCJfbmV4dCIsIl9tYXAiLCJfX1IiLCJwcm9taXNlIiwic3VzcGVuZGluZ1ZOb2RlIiwic3VzcGVuZGluZ0NvbXBvbmVudCIsInJlc29sdmVkIiwib25SZXNvbHZlZCIsIm9uU3VzcGVuc2lvbkNvbXBsZXRlIiwic3VzcGVuZGVkVk5vZGUiLCJfX08iLCJ3YXNIeWRyYXRpbmciLCJkZXRhY2hlZENvbXBvbmVudCIsImZhbGxiYWNrIiwiVyIsImxpc3QiLCJyZXZlYWxPcmRlciIsImRlbGVnYXRlZCIsInVuc3VzcGVuZCIsIndyYXBwZWRVbnN1c3BlbmQiLCJyZXZlcnNlIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiQ0FNRUxfUFJPUFMiLCJJU19ET00iLCJvbkNoYW5nZUlucHV0VHlwZSIsIloiLCJvbGRFdmVudEhvb2siLCJlbXB0eSIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY2FuY2VsQnViYmxlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInBlcnNpc3QiLCJuYXRpdmVFdmVudCIsImNsYXNzTmFtZURlc2NyaXB0b3IiLCJjbGFzcyIsIm9sZFZOb2RlSG9vayIsIm5vbkN1c3RvbUVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkIiwib2xkRGlmZmVkIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImZyZWVHbG9iYWwkMSIsImZyZWVTZWxmIiwicm9vdCQxIiwiU3ltYm9sJDIiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJpc09iamVjdCIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImNvcmVKc0RhdGEiLCJjb3JlSnNEYXRhJDEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJvYmplY3QiLCJnZXROYXRpdmUiLCJlcSIsIm90aGVyIiwibmF0aXZlQ3JlYXRlIiwibmF0aXZlQ3JlYXRlJDEiLCJoYXNoQ2xlYXIiLCJfX2RhdGFfXyIsImhhc2hEZWxldGUiLCJIQVNIX1VOREVGSU5FRCIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJlbnRyeSIsImxpc3RDYWNoZUNsZWFyIiwiYXNzb2NJbmRleE9mIiwiYXJyYXkiLCJhcnJheVByb3RvIiwibGlzdENhY2hlRGVsZXRlIiwibGFzdEluZGV4IiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiTWFwJDIiLCJtYXBDYWNoZUNsZWFyIiwiaXNLZXlhYmxlIiwiZ2V0TWFwRGF0YSIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiTWFwQ2FjaGUiLCJGVU5DX0VSUk9SX1RFWFQiLCJtZW1vaXplIiwicmVzb2x2ZXIiLCJtZW1vaXplZCIsImFwcGx5IiwiY2FjaGUiLCJDYWNoZSIsImdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24iLCJleGNsdXNpdml0eUtleSIsIlN3YXBwYWJsZUNvbnRleHQiLCJnZXRBbmltYXRlT25Nb3VudCIsIkdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0IiwiQ3NzQ2xhc3NDb250ZXh0IiwiR2V0QmFzZUNsYXNzIiwiR2V0RW50ZXJDbGFzcyIsIkdldEV4aXRDbGFzcyIsIkdldE1lYXN1cmVDbGFzcyIsIkdldEluaXRDbGFzcyIsIkdldFRyYW5zaXRpb25DbGFzcyIsIkdldEZpbmFsaXplQ2xhc3MiLCJ1c2VDc3NDbGFzc2VzIiwiR2V0RGlyZWN0aW9uQ2xhc3MiLCJkaXJlY3Rpb24iLCJHZXRQaGFzZUNsYXNzIiwicGhhc2UiLCJnbG9iYWxDb3VudCIsIkV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlciIsIl9yZWYzIiwiZ2V0TmV4dEluZGV4SW5MaW5lIiwic2V0TmV4dEluZGV4SW5MaW5lIiwibSIsInNldEV4Y2x1c2l2ZWx5T3BlbiIsImdldEV4Y2x1c2l2ZWx5T3BlbiIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInZpc2libGUiLCJuZXh0SW5MaW5lIiwiY3VycmVudEluTGluZSIsIl9nZXRDaGlsZHJlbiRnZXRBdCIsIl9nZXRDaGlsZHJlbiRnZXRBdCRmbyIsImZvcmNlQ2xvc2UiLCJjb250ZXh0MiIsImV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0IiwiRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQiLCJfanN4IiwidXNlRXhjbHVzaXZlVHJhbnNpdGlvbiIsIl9yZWY0IiwidHJhbnNpdGlvblBhcmFtZXRlcnMiLCJzaG93IiwiZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnMiLCJleGNsdXNpdmVseU9wZW4iLCJwYXJlbnRPblZpc0NoYW5nZSIsImV4Y2x1c2l2ZVRyYW5zaXRpb25SZXR1cm4iLCJpc0V4Y2x1c2l2ZSIsImZvcndhcmRFbGVtZW50UmVmIiwiRm9yd2FyZGVkQ29tcG9uZW50IiwidXNlTGFzdE5vbk51bGxWYWx1ZSIsImxhc3ROb25OdWxsVmFsdWUiLCJ1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyIsIl9yZWY1Iiwib3RoZXJQcm9wcyIsImlubGluZSIsIlN3YXBwYWJsZSIsIl9yZWY2IiwiX2lubGluZSIsImNoaWxkcmVuQW5pbWF0ZU9uTW91bnQiLCJpbmxpbmVFbGVtZW50cyIsInRyYW5zaXRpb25Qcm9wcyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImFuaW1hdGVPbk1vdW50IiwiZ2V0VGltZW91dER1cmF0aW9uIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJzdHIiLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInBhcnNlU3RhdGUiLCJuZXh0U3RhdGUiLCJ1c2VUcmFuc2l0aW9uIiwiX3JlZjciLCJfYW5pbWF0ZU9uTW91bnQiLCJfbWVhc3VyZSIsIl9lYXNpbmdJbiIsIl9lYXNpbmdPdXQiLCJwcm9wc0luY29taW5nIiwibWVhc3VyZSIsImV4aXRWaXNpYmlsaXR5IiwiZHVyYXRpb24iLCJkZWxheU1vdW50VW50aWxTaG93biIsImVhc2luZyIsImVhc2luZ0luIiwiZWFzaW5nT3V0IiwiZ2V0RXhpdFZpc2liaWxpdHkiLCJnZXRNZWFzdXJlIiwiZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2UiLCJpbnRlcm5hbE9uU2hvd0NoYW5nZWQiLCJjc3NQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lcyIsImhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCIsInRpbWVvdXRIYW5kbGUiLCJfdGltZW91dENsZWFyRnVuY3Rpb24iLCJ0aW1lb3V0Q2xlYXJGdW5jdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJfc2l6ZSIsIl9zaXplMiIsIl9zaXplMyIsIl9zaXplNCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsIm9uU3RhdGVDaGFuZ2UiLCJwcmV2U3RhdGUiLCJuZXh0RGlyZWN0aW9uIiwibmV4dFBoYXNlIiwiaXNCZWluZ1BhaW50ZWQiLCJmb3JjZVJlZmxvdyIsImN1cnJlbnRTdGF0ZSIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50UGhhc2UiLCJkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiIsImhhc1JlbmRlcmVkQ2hpbGRyZW4iLCJyZW5kZXJDaGlsZHJlbiIsImNoaWxkcmVuSXNWbm9kZSIsImZpbmFsUHJvcHMiLCJyZXNldENvbnRleHQiLCJtb2RpZmllZENoaWxkcmVuIiwiZ2xvYmFsVGhpcyIsIl9kdW1teSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ1c2VCYXNlUHJvcHNGYWRlIiwiX3JlZjgiLCJmYWRlUGFyYW1ldGVycyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsIl9yZWY5IiwidXNlQmFzZVByb3BzQ2xpcCIsIl9yZWYxMCIsIl9yZWYxMSIsIl9yZWYxMiIsIl9yZWYxMyIsIl9yZWYxNCIsImNsaXBQYXJhbWV0ZXJzIiwiY2xpcE1pbiIsImNsaXBNaW5CbG9jayIsImNsaXBNaW5JbmxpbmUiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE9yaWdpbklubGluZSIsIkNsaXAiLCJfcmVmMTUiLCJDbGlwRmFkZSIsIl9yZWYxNiIsInVzZUJhc2VQcm9wc0NvbGxhcHNlIiwiX3JlZjE3IiwiY29sbGFwc2VQYXJhbWV0ZXJzIiwibWluQmxvY2tTaXplIiwiQ29sbGFwc2UiLCJfcmVmMTgiLCJDb2xsYXBzZUZhZGUiLCJfcmVmMTkiLCJ1c2VCYXNlUHJvcHNGbGlwIiwiX3JlZjIwIiwiX3VzZUxhc3ROb25OdWxsVmFsdWUiLCJfdXNlTGFzdE5vbk51bGxWYWx1ZTIiLCJmbGlwUGFyYW1ldGVycyIsImZsaXBBbmdsZUJsb2NrIiwiZmxpcEFuZ2xlSW5saW5lIiwiZmxpcFBlcnNwZWN0aXZlIiwiRmxpcCIsIl9yZWYyMSIsInVzZUJhc2VQcm9wc1NsaWRlIiwiX3JlZjIyIiwiX3NsaWRlVGFyZ2V0SW5saW5lIiwiX3NsaWRlVGFyZ2V0QmxvY2siLCJzbGlkZVBhcmFtZXRlcnMiLCJzbGlkZVRhcmdldElubGluZSIsInNsaWRlVGFyZ2V0QmxvY2siLCJTbGlkZSIsIl9yZWYyMyIsIlNsaWRlRmFkZSIsIl9yZWYyNCIsInVzZUJhc2VQcm9wc1pvb20iLCJfcmVmMjUiLCJfcmVmMjYiLCJfcmVmMjciLCJfcmVmMjgiLCJfcmVmMjkiLCJ6b29tUGFyYW1ldGVycyIsInpvb21PcmlnaW4iLCJ6b29tT3JpZ2luSW5saW5lIiwiem9vbU9yaWdpbkJsb2NrIiwiem9vbU1pbiIsInpvb21NaW5JbmxpbmUiLCJ6b29tTWluQmxvY2siLCJab29tIiwiX3JlZjMwIiwiU2xpZGVab29tIiwiX3JlZjMxIiwiU2xpZGVab29tRmFkZSIsIl9yZWYzMiIsIlpvb21GYWRlIiwiX3JlZjMzIiwiaGFsZlRleHQiLCJpbnB1dCIsInRpbWVzIiwic3Vic3RyIiwiRGVtbyIsImV4Y2x1c2l2ZSIsInNldEV4Y2x1c2l2ZSIsInNldEFuaW1hdGVPbk1vdW50Iiwid3JpdGluZ01vZGUiLCJzZXRXcml0aW5nTW9kZSIsInNob3cxIiwic2V0U2hvdzEiLCJzaG93MyIsInNldFNob3czIiwicmVmbG93Iiwic2V0UmVmbG93Iiwic2V0RHVyYXRpb24iLCJ0ZXh0Iiwic2V0VGV4dCIsImZsaWNrZXIiLCJzZXRGbGlja2VyIiwib25JbnB1dDMiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW5wdXQ0Iiwib25JbnB1dDUiLCJvbklucHV0NWIiLCJvbklucHV0NiIsIm9uSW5wdXQ3Iiwib25JbnB1dDgiLCJ2YWx1ZUFzTnVtYmVyIiwib25JbnB1dDkiLCJvbklucHV0QSIsIm9uSW5wdXRCIiwib25JbnB1dEMiLCJfanN4cyIsIm9uQ2xpY2siLCJvbklucHV0IiwiZGlzYWJsZWQiLCJjb2xzIiwicm93cyIsIkZhZGVEZW1vIiwiY2FyZFNob3ciLCJjb250ZW50SW5kZXgiLCJTbGlkZURlbW8iLCJab29tRGVtbyIsIkNsaXBEZW1vIiwiRmxpcERlbW8iLCJab29tU2xpZGVEZW1vIiwiQ29sbGFwc2VEZW1vIiwiX3JlZjM0IiwibWluIiwic2V0TWluIiwic2V0TWF4Iiwib25NaW5JbnB1dCIsIm9uTWF4SW5wdXQiLCJDIiwiQ1MiLCJFIiwibWFrZUNoaWxkIiwic3RlcCIsIl9yZWYzNSIsIm9yaWdpblgiLCJzZXRPcmlnaW5YIiwib3JpZ2luWSIsInNldE9yaWdpblkiLCJtaW5YIiwic2V0TWluWCIsIm1pblkiLCJzZXRNaW5ZIiwid2l0aEZhZGUiLCJzZXRXaXRoRmFkZSIsIm9uT3JpZ2luWElucHV0Iiwib25PcmlnaW5ZSW5wdXQiLCJvbk1pblhJbnB1dCIsIm9uTWluWUlucHV0Iiwib25XaXRoRmFkZUlucHV0IiwiX3JlZjM2Iiwic2xpZGVYIiwic2V0U2xpZGVYIiwic2xpZGVZIiwic2V0U2xpZGVZIiwib25TbGlkZVhJbnB1dCIsIm9uU2xpZGVZSW5wdXQiLCJzaWduIiwiX3JlZjM3IiwiX3JlZjM4IiwiX3JlZjM5Iiwic2V0TWluQmxvY2tTaXplIiwib25NaW5TaXplIiwiX3JlZjQwIiwiZmxpcFgiLCJzZXRGbGlwWCIsImZsaXBZIiwic2V0RmxpcFkiLCJvbkZsaXBYSW5wdXQiLCJvbkZsaXBZSW5wdXQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7O0VBMEJhQSxJQUFBQSxDQUFBQTtJQ2ZQQyxHQ1JGQztJ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
