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

  /** Detect free variable `global` from Node.js. */
  var freeGlobal$1 = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

  /** Built-in value references. */
  var Symbol$2 = root$1.Symbol;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$3 = objectProto$7.toString;

  /** Built-in value references. */
  var symToStringTag$3 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$5.call(value, symToStringTag$3),
      tag = value[symToStringTag$3];
    try {
      value[symToStringTag$3] = undefined;
      var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString$3.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$3] = tag;
      } else {
        delete value[symToStringTag$3];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$2 = objectProto$6.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString$1(value) {
    return nativeObjectToString$2.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag$1 = '[object Null]',
    undefinedTag$1 = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$2 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag$1(value) {
    if (value == null) {
      return value === undefined ? undefinedTag$1 : nullTag$1;
    }
    return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
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
    return isObjectLike(value) && baseGetTag$1(value) == argsTag;
  }

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

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
    return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };

  /** Detect free variable `exports`. */
  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

  /** Built-in value references. */
  var Buffer = moduleExports$1 ? root$1.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  Buffer ? Buffer.isBuffer : undefined;

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal$1.process;

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

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

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
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

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
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
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

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
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
    if (nativeCreate) {
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
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
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
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
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
  var Map$1 = getNative(root, 'Map');

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
      'map': new (Map$1 || ListCache)(),
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
    return B$2(null);
  }
  const SwappableContext = B$2({
    getAnimateOnMount: () => false
  });
  /**
   * Returns the context for a given `exclusivityKey`, creating one if it doesn't already exist.
   *
   * If
   */
  const GetExclusiveTransitionContext = memoize(getExclusiveTransitionContextPrememoization);
  const CssClassContext = B$2({
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
    return ExclusiveTransitionContext == null ? children !== null && children !== void 0 ? children : null : h$1(ExclusiveTransitionContext.Provider, {
      value: context2
    }, children);
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
      exclusivityKey,
      ...p
    } = _ref6;
    let children = c;
    if (!children.type) children = !inline ? h$1("div", null, children) : h$1("span", null, children);
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
    let ret = q$1(children, mergedWithChildren);
    ret = h$1(SwappableContext.Provider, {
      value: contextValue.current
    }, ret);
    if (exclusivityKey) {
      ret = h$1(ExclusiveTransitionProvider, {
        key: exclusivityKey,
        exclusivityKey: exclusivityKey
      }, ret);
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
      modifiedChildren = h$1(SwappableContext.Provider, {
        value: resetContext
      }, q$1(children, finalProps));
    } else {
      modifiedChildren = h$1(SwappableContext.Provider, {
        value: resetContext
      }, h$1("span", {
        ...finalProps
      }, children));
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
  const Clip = R(forwardElementRef(function Clip(_ref15, ref) {
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
  const ClipFade = R(forwardElementRef(function ClipFade(_ref16, ref) {
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
  const Collapse = R(forwardElementRef(function Collapse(_ref18, ref) {
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
  const CollapseFade = R(forwardElementRef(function CollapseFade(_ref19, ref) {
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
  const Flip = R(forwardElementRef(function Flip(_ref21, ref) {
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
  const Slide = R(forwardElementRef(function Slide(_ref23, ref) {
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
  const SlideFade = R(forwardElementRef(function SlideFade(_ref24, ref) {
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
  const Zoom = R(forwardElementRef(function Zoom(_ref30, ref) {
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
  const SlideZoom = R(forwardElementRef(function SlideZoom(_ref31, ref) {
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
  const SlideZoomFade = R(forwardElementRef(function SlideZoomFade(_ref32, ref) {
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
  const ZoomFade = R(forwardElementRef(function ZoomFade(_ref33, ref) {
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
    }), "#2"), h$1("label", null, h$1("input", {
      type: "checkbox",
      onInput: onInput9,
      checked: exclusive
    }), "Exclusive")), h$1("div", {
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
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(SlideDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ZoomDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ClipDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(FlipDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(ZoomSlideDemo, {
      cardShow: show1,
      animateOnMount: animateOnMount,
      exclusive: exclusive,
      contentIndex: show3,
      exitVisibility: reflow,
      text: text
    }), h$1(CollapseDemo, {
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
    const E = exclusive ? "e" : null;
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(min != 0 ? " \n  fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n  fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(min != 0 ? " \n        fadeMin={".concat(min, "}") : "").concat(max != 1 ? " \n        fadeMax={".concat(max, "}") : "").concat(exitVisibility != "hidden" ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        clipOriginX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        clipOriginY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        clipMinX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        clipMinY={".concat(minY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n  slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n  slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}").concat(originX != 0.5 ? " \n        originX={".concat(originX, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, " * Math.sign(0 - ").concat(contentIndex, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(slideX != 0 ? " \n        slideTargetInline={".concat(slideX, "}") : "").concat(slideY != 0 ? " \n        slideTargetBlock={".concat(slideY, "}") : "").concat(exitVisibility ? "\n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(originX != 0.5 ? " \n  originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n  originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n  minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n  minY={".concat(minY, "}") : "").concat(exitVisibility ? "\n  exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  <Swappable>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={").concat(contentIndex.toString(), " == 0}").concat(originX != 0.5 ? " \n        originX={".concat(originX, "}") : "").concat(originY != 0.5 ? " \n        originY={".concat(originY, "}") : "").concat(minX != 0 ? " \n        minX={".concat(minX, "}") : "").concat(minY != 0 ? " \n        minY={".concat(minY, "}") : "").concat(exitVisibility ? " \n        exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 1} [...] />\n      <").concat(CS, " show={").concat(contentIndex.toString(), " == 2} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  slideTargetInline={").concat(slideX, "}\n  slideTargetBlock={").concat(slideY, "}\n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex, "}\n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}\n        slideTargetInline={").concat(slideX, " * Math.sign(0 - ").concat(contentIndex, ")}\n        slideTargetBlock={").concat(slideY, " * Math.sign(0 - ").concat(contentIndex, "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex, "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex, "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1("div", null, h$1(Swappable, {
      exclusivityKey: E,
      key: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))))), h$1("code", null, h$1("pre", null, "<".concat(CS, " show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "}").concat(minBlockSize && minBlockSize != "0px" ? " minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n  {/* These cards have padding, \n      and height doesn't include that, \n      but a wrapper's would */}\n  <div>\n    <Swappable>\n      <div className=\"card\">\n        <").concat(CS, " \n          show={").concat(contentIndex.toString(), " == 0}").concat(minBlockSize && minBlockSize != "0px" ? " \n          minBlockSize={".concat(JSON.stringify(minBlockSize), "}") : "").concat(exitVisibility ? " \n          exitVisibility={".concat(JSON.stringify(exitVisibility), "}") : "", ">\n          <div className=\"card-contents\">\n             {text}\n          </div>\n        </").concat(CS, ">\n      </div>\n    </Swappable>\n  </div>\n</").concat(CS, ">\n<").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n<").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />")))));
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
    const makeChild = i => h$1(C, {
      show: contentIndex === i,
      exclusivityKey: E,
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
    }, h$1(Swappable, {
      exclusivityKey: E
    }, h$1("div", {
      className: "card"
    }, makeChild(0), makeChild(1), makeChild(2)))), h$1("code", null, h$1("pre", null, "<".concat(CS, " \n  show={").concat((cardShow !== null && cardShow !== void 0 ? cardShow : "null").toString(), "} \n  flipAngleInline={").concat(JSON.stringify(flipX), "} \n  flipAngleBlock={").concat(JSON.stringify(flipY), "} \n  exitVisibility={").concat(JSON.stringify(exitVisibility), "}}>\n    <div className=\"card\">\n      <").concat(CS, " \n        show={0 == ").concat(contentIndex.toString(), "}\n        flipAngleInline={").concat(JSON.stringify(flipX), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        flipAngleBlock={").concat(JSON.stringify(flipY), " * Math.sign(0 - ").concat(contentIndex.toString(), ")} \n        exitVisibility={").concat(JSON.stringify(exitVisibility), "}>\n        <div className=\"card-contents\">\n          {text}\n        </div>\n      </").concat(CS, ">\n      <").concat(CS, " show={1 == ").concat(contentIndex.toString(), "} [...] />\n      <").concat(CS, " show={2 == ").concat(contentIndex.toString(), "} [...] />\n    </div>\n  </Swappable>\n</").concat(CS, ">")))));
  }
  requestAnimationFrame(() => {
    P(h$1(Demo, null), document.getElementById("root"));
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NyZWF0ZS1lbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jaGlsZHJlbi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDEuMi4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGUudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtZ2V0dGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2sudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi50c3giLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vZ2l0aHViLmNvbSttd3N6ZWtlbHkrcHJlYWN0LXByb3AtaGVscGVyc0AzNTY1ODdhYmVlZDNjMDJlZTIzNGJiMWQ3NzQ4NjNjODgyODQ3OGM4X3ByZWFjdEAxMC4xMy4wL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3NyYy9kb20taGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL2RvbS1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMudHN4IiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvZG9tLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9naXRodWIuY29tK213c3pla2VseStwcmVhY3QtcHJvcC1oZWxwZXJzQDM1NjU4N2FiZWVkM2MwMmVlMjM0YmIxZDc3NDg2M2M4ODI4NDc4YzhfcHJlYWN0QDEwLjEzLjAvbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvc3JjL3ByZWFjdC1leHRlbnNpb25zL3VzZS1tYW5hZ2VkLWNoaWxkcmVuLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9ibG9ja2luZy1lbGVtZW50c0AwLjEuMS9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvc3JjL2Jsb2NraW5nLWVsZW1lbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXN0YXRlLnRzeCIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy8ucG5wbS9sb2Rhc2gtZXNANC4xNy4yMS9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2xvZGFzaC1lc0A0LjE3LjIxL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNCdWZmZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbm9kZVV0aWwuanMiLCIuLi9ub2RlX21vZHVsZXMvLnBucG0vbG9kYXNoLWVzQDQuMTcuMjEvbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL3V0aWwuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL1B1cmVDb21wb25lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL21lbW8uanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL2ZvcndhcmRSZWYuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcHJlYWN0QDEwLjExLjMvbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvc3JjL0NoaWxkcmVuLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3ByZWFjdEAxMC4xMS4zL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L3NyYy9zdXNwZW5zZS5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvc3VzcGVuc2UtbGlzdC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9wcmVhY3RAMTAuMTEuMy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9zcmMvcmVuZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2dpdGh1Yi5jb20rbXdzemVrZWx5K3ByZWFjdC1wcm9wLWhlbHBlcnNAMzU2NTg3YWJlZWQzYzAyZWUyMzRiYjFkNzc0ODYzYzg4Mjg0NzhjOF9wcmVhY3RAMTAuMTMuMC9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy9zcmMvdGltaW5nL3VzZS1hbmltYXRpb24tZnJhbWUudHN4IiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0Z1bmN0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29yZUpzRGF0YS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzTWFza2VkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fdG9Tb3VyY2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNOYXRpdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRWYWx1ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE5hdGl2ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUNyZWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hDbGVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hEZWxldGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoR2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEhhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hTZXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19IYXNoLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlQ2xlYXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2VxLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXNzb2NJbmRleE9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlRGVsZXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlR2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlSGFzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlU2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTGlzdENhY2hlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVDbGVhci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzS2V5YWJsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE1hcERhdGEuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZURlbGV0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlR2V0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVIYXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZVNldC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX01hcENhY2hlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZW1vaXplLmpzIiwiLi4vc3JjL3V0aWwvY29udGV4dC50c3giLCIuLi9zcmMvdXRpbC91dGlsLnRzeCIsIi4uL3NyYy9leGNsdXNpdmUudHN4IiwiLi4vc3JjL3N3YXBwYWJsZS50c3giLCIuLi9zcmMvdHJhbnNpdGlvbmFibGUudHN4IiwiLi4vc3JjL2ZhZGUudHN4IiwiLi4vc3JjL2NsaXAudHN4IiwiLi4vc3JjL2NsaXAtZmFkZS50c3giLCIuLi9zcmMvY29sbGFwc2UudHN4IiwiLi4vc3JjL2NvbGxhcHNlLWZhZGUudHN4IiwiLi4vc3JjL2ZsaXAudHN4IiwiLi4vc3JjL3NsaWRlLnRzeCIsIi4uL3NyYy9zbGlkZS1mYWRlLnRzeCIsIi4uL3NyYy96b29tLnRzeCIsIi4uL3NyYy9zbGlkZS16b29tLnRzeCIsIi4uL3NyYy9zbGlkZS16b29tLWZhZGUudHN4IiwiLi4vc3JjL3pvb20tZmFkZS50c3giLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtaWdub3JlIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRsZXQgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0aWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmV4cG9ydCBjb25zdCBzbGljZSA9IEVNUFRZX0FSUi5zbGljZTtcbiIsImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCJpbXBvcnQgeyBzbGljZSB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbi8qKlxuICogQ3JlYXRlIGFuIHZpcnR1YWwgbm9kZSAodXNlZCBmb3IgSlNYKVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnRcbiAqIGNvbnN0cnVjdG9yIGZvciB0aGlzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBbcHJvcHNdIFRoZSBwcm9wZXJ0aWVzIG9mIHRoZSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuJykuQ29tcG9uZW50Q2hpbGRyZW4+fSBbY2hpbGRyZW5dIFRoZSBjaGlsZHJlbiBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0ge30sXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0Ly8gSWYgYSBDb21wb25lbnQgVk5vZGUsIGNoZWNrIGZvciBhbmQgYXBwbHkgZGVmYXVsdFByb3BzXG5cdC8vIE5vdGU6IHR5cGUgbWF5IGJlIHVuZGVmaW5lZCBpbiBkZXZlbG9wbWVudCwgbXVzdCBuZXZlciBlcnJvciBoZXJlLlxuXHRpZiAodHlwZW9mIHR5cGUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlLmRlZmF1bHRQcm9wcyAhPSBudWxsKSB7XG5cdFx0Zm9yIChpIGluIHR5cGUuZGVmYXVsdFByb3BzKSB7XG5cdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdHlwZS5kZWZhdWx0UHJvcHNbaV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKHR5cGUsIG5vcm1hbGl6ZWRQcm9wcywga2V5LCByZWYsIG51bGwpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIFZOb2RlICh1c2VkIGludGVybmFsbHkgYnkgUHJlYWN0KVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInR5cGVcIl19IHR5cGUgVGhlIG5vZGUgbmFtZSBvciBDb21wb25lbnRcbiAqIENvbnN0cnVjdG9yIGZvciB0aGlzIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3QgfCBzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBwcm9wcyBUaGUgcHJvcGVydGllcyBvZiB0aGlzIHZpcnR1YWwgbm9kZS5cbiAqIElmIHRoaXMgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSB0ZXh0IG5vZGUsIHRoaXMgaXMgdGhlIHRleHQgb2YgdGhlIG5vZGUgKHN0cmluZyBvciBudW1iZXIpLlxuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXIgfCBudWxsfSBrZXkgVGhlIGtleSBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHVzZWQgd2hlblxuICogZGlmZmluZyBpdCBhZ2FpbnN0IGl0cyBjaGlsZHJlblxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZVtcInJlZlwiXX0gcmVmIFRoZSByZWYgcHJvcGVydHkgdGhhdCB3aWxsXG4gKiByZWNlaXZlIGEgcmVmZXJlbmNlIHRvIGl0cyBjcmVhdGVkIGNoaWxkXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCByZWYsIG9yaWdpbmFsKSB7XG5cdC8vIFY4IHNlZW1zIHRvIGJlIGJldHRlciBhdCBkZXRlY3RpbmcgdHlwZSBzaGFwZXMgaWYgdGhlIG9iamVjdCBpcyBhbGxvY2F0ZWQgZnJvbSB0aGUgc2FtZSBjYWxsIHNpdGVcblx0Ly8gRG8gbm90IGlubGluZSBpbnRvIGNyZWF0ZUVsZW1lbnQgYW5kIGNvZXJjZVRvVk5vZGUhXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHMsXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRfY2hpbGRyZW46IG51bGwsXG5cdFx0X3BhcmVudDogbnVsbCxcblx0XHRfZGVwdGg6IDAsXG5cdFx0X2RvbTogbnVsbCxcblx0XHQvLyBfbmV4dERvbSBtdXN0IGJlIGluaXRpYWxpemVkIHRvIHVuZGVmaW5lZCBiL2MgaXQgd2lsbCBldmVudHVhbGx5XG5cdFx0Ly8gYmUgc2V0IHRvIGRvbS5uZXh0U2libGluZyB3aGljaCBjYW4gcmV0dXJuIGBudWxsYCBhbmQgaXQgaXMgaW1wb3J0YW50XG5cdFx0Ly8gdG8gYmUgYWJsZSB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIGFuIHVuaW5pdGlhbGl6ZWQgX25leHREb20gYW5kXG5cdFx0Ly8gYSBfbmV4dERvbSB0aGF0IGhhcyBiZWVuIHNldCB0byBgbnVsbGBcblx0XHRfbmV4dERvbTogdW5kZWZpbmVkLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0X2h5ZHJhdGluZzogbnVsbCxcblx0XHRjb25zdHJ1Y3RvcjogdW5kZWZpbmVkLFxuXHRcdF9vcmlnaW5hbDogb3JpZ2luYWwgPT0gbnVsbCA/ICsrdm5vZGVJZCA6IG9yaWdpbmFsXG5cdH07XG5cblx0Ly8gT25seSBpbnZva2UgdGhlIHZub2RlIGhvb2sgaWYgdGhpcyB3YXMgKm5vdCogYSBkaXJlY3QgY29weTpcblx0aWYgKG9yaWdpbmFsID09IG51bGwgJiYgb3B0aW9ucy52bm9kZSAhPSBudWxsKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblxuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG5cdHJldHVybiB7IGN1cnJlbnQ6IG51bGwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZyYWdtZW50KHByb3BzKSB7XG5cdHJldHVybiBwcm9wcy5jaGlsZHJlbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRoZSBhcmd1bWVudCBpcyBhIHZhbGlkIFByZWFjdCBWTm9kZS5cbiAqIEBwYXJhbSB7Kn0gdm5vZGVcbiAqIEByZXR1cm5zIHt2bm9kZSBpcyBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRFbGVtZW50ID0gdm5vZGUgPT5cblx0dm5vZGUgIT0gbnVsbCAmJiB2bm9kZS5jb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgYXNzaWduIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IGRpZmYsIGNvbW1pdFJvb3QgfSBmcm9tICcuL2RpZmYvaW5kZXgnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5cbi8qKlxuICogQmFzZSBDb21wb25lbnQgY2xhc3MuIFByb3ZpZGVzIGBzZXRTdGF0ZSgpYCBhbmQgYGZvcmNlVXBkYXRlKClgLCB3aGljaFxuICogdHJpZ2dlciByZW5kZXJpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBUaGUgaW5pdGlhbCBjb21wb25lbnQgcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFRoZSBpbml0aWFsIGNvbnRleHQgZnJvbSBwYXJlbnQgY29tcG9uZW50cydcbiAqIGdldENoaWxkQ29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24odXBkYXRlLCBjYWxsYmFjaykge1xuXHQvLyBvbmx5IGNsb25lIHN0YXRlIHdoZW4gY29weWluZyB0byBuZXh0U3RhdGUgdGhlIGZpcnN0IHRpbWUuXG5cdGxldCBzO1xuXHRpZiAodGhpcy5fbmV4dFN0YXRlICE9IG51bGwgJiYgdGhpcy5fbmV4dFN0YXRlICE9PSB0aGlzLnN0YXRlKSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZTtcblx0fSBlbHNlIHtcblx0XHRzID0gdGhpcy5fbmV4dFN0YXRlID0gYXNzaWduKHt9LCB0aGlzLnN0YXRlKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdXBkYXRlID09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBTb21lIGxpYnJhcmllcyBsaWtlIGBpbW1lcmAgbWFyayB0aGUgY3VycmVudCBzdGF0ZSBhcyByZWFkb25seSxcblx0XHQvLyBwcmV2ZW50aW5nIHVzIGZyb20gbXV0YXRpbmcgaXQsIHNvIHdlIG5lZWQgdG8gY2xvbmUgaXQuIFNlZSAjMjcxNlxuXHRcdHVwZGF0ZSA9IHVwZGF0ZShhc3NpZ24oe30sIHMpLCB0aGlzLnByb3BzKTtcblx0fVxuXG5cdGlmICh1cGRhdGUpIHtcblx0XHRhc3NpZ24ocywgdXBkYXRlKTtcblx0fVxuXG5cdC8vIFNraXAgdXBkYXRlIGlmIHVwZGF0ZXIgZnVuY3Rpb24gcmV0dXJuZWQgbnVsbFxuXHRpZiAodXBkYXRlID09IG51bGwpIHJldHVybjtcblxuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdHRoaXMuX3N0YXRlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHRcdH1cblx0XHRlbnF1ZXVlUmVuZGVyKHRoaXMpO1xuXHR9XG59O1xuXG4vKipcbiAqIEltbWVkaWF0ZWx5IHBlcmZvcm0gYSBzeW5jaHJvbm91cyByZS1yZW5kZXIgb2YgdGhlIGNvbXBvbmVudFxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH1cbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjb21wb25lbnQgaXNcbiAqIHJlLXJlbmRlcmVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHA6Ly9qYXNvbmZvcm1hdC5jb20vd3RmLWlzLWpzeCkuXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgUHJvcHMgKGVnOiBKU1ggYXR0cmlidXRlcykgcmVjZWl2ZWQgZnJvbSBwYXJlbnRcbiAqIGVsZW1lbnQvY29tcG9uZW50XG4gKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IENvbnRleHQgb2JqZWN0LCBhcyByZXR1cm5lZCBieSB0aGUgbmVhcmVzdFxuICogYW5jZXN0b3IncyBgZ2V0Q2hpbGRDb250ZXh0KClgXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2luZGV4JykuQ29tcG9uZW50Q2hpbGRyZW4gfCB2b2lkfVxuICovXG5Db21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IEZyYWdtZW50O1xuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcGFyYW0ge251bWJlciB8IG51bGx9IFtjaGlsZEluZGV4XVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tU2libGluZyh2bm9kZSwgY2hpbGRJbmRleCkge1xuXHRpZiAoY2hpbGRJbmRleCA9PSBudWxsKSB7XG5cdFx0Ly8gVXNlIGNoaWxkSW5kZXg9PW51bGwgYXMgYSBzaWduYWwgdG8gcmVzdW1lIHRoZSBzZWFyY2ggZnJvbSB0aGUgdm5vZGUncyBzaWJsaW5nXG5cdFx0cmV0dXJuIHZub2RlLl9wYXJlbnRcblx0XHRcdD8gZ2V0RG9tU2libGluZyh2bm9kZS5fcGFyZW50LCB2bm9kZS5fcGFyZW50Ll9jaGlsZHJlbi5pbmRleE9mKHZub2RlKSArIDEpXG5cdFx0XHQ6IG51bGw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gbnVsbCAmJiBzaWJsaW5nLl9kb20gIT0gbnVsbCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBudWxsO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0bGV0IHZub2RlID0gY29tcG9uZW50Ll92bm9kZSxcblx0XHRvbGREb20gPSB2bm9kZS5fZG9tLFxuXHRcdHBhcmVudERvbSA9IGNvbXBvbmVudC5fcGFyZW50RG9tO1xuXG5cdGlmIChwYXJlbnREb20pIHtcblx0XHRsZXQgY29tbWl0UXVldWUgPSBbXTtcblx0XHRjb25zdCBvbGRWTm9kZSA9IGFzc2lnbih7fSwgdm5vZGUpO1xuXHRcdG9sZFZOb2RlLl9vcmlnaW5hbCA9IHZub2RlLl9vcmlnaW5hbCArIDE7XG5cblx0XHRkaWZmKFxuXHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0dm5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGNvbXBvbmVudC5fZ2xvYmFsQ29udGV4dCxcblx0XHRcdHBhcmVudERvbS5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZCxcblx0XHRcdHZub2RlLl9oeWRyYXRpbmcgIT0gbnVsbCA/IFtvbGREb21dIDogbnVsbCxcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tID09IG51bGwgPyBnZXREb21TaWJsaW5nKHZub2RlKSA6IG9sZERvbSxcblx0XHRcdHZub2RlLl9oeWRyYXRpbmdcblx0XHQpO1xuXHRcdGNvbW1pdFJvb3QoY29tbWl0UXVldWUsIHZub2RlKTtcblxuXHRcdGlmICh2bm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnModm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBudWxsICYmIHZub2RlLl9jb21wb25lbnQgIT0gbnVsbCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBudWxsO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdm5vZGUuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgY2hpbGQgPSB2bm9kZS5fY2hpbGRyZW5baV07XG5cdFx0XHRpZiAoY2hpbGQgIT0gbnVsbCAmJiBjaGlsZC5fZG9tICE9IG51bGwpIHtcblx0XHRcdFx0dm5vZGUuX2RvbSA9IHZub2RlLl9jb21wb25lbnQuYmFzZSA9IGNoaWxkLl9kb207XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuLyoqXG4gKiBFbnF1ZXVlIGEgcmVyZW5kZXIgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSBjIFRoZSBjb21wb25lbnQgdG8gcmVyZW5kZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVucXVldWVSZW5kZXIoYykge1xuXHRpZiAoXG5cdFx0KCFjLl9kaXJ0eSAmJlxuXHRcdFx0KGMuX2RpcnR5ID0gdHJ1ZSkgJiZcblx0XHRcdHJlcmVuZGVyUXVldWUucHVzaChjKSAmJlxuXHRcdFx0IXByb2Nlc3MuX3JlcmVuZGVyQ291bnQrKykgfHxcblx0XHRwcmV2RGVib3VuY2UgIT09IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmdcblx0KSB7XG5cdFx0cHJldkRlYm91bmNlID0gb3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZztcblx0XHQocHJldkRlYm91bmNlIHx8IHNldFRpbWVvdXQpKHByb2Nlc3MpO1xuXHR9XG59XG5cbi8qKiBGbHVzaCB0aGUgcmVuZGVyIHF1ZXVlIGJ5IHJlcmVuZGVyaW5nIGFsbCBxdWV1ZWQgY29tcG9uZW50cyAqL1xuZnVuY3Rpb24gcHJvY2VzcygpIHtcblx0bGV0IHF1ZXVlO1xuXHR3aGlsZSAoKHByb2Nlc3MuX3JlcmVuZGVyQ291bnQgPSByZXJlbmRlclF1ZXVlLmxlbmd0aCkpIHtcblx0XHRxdWV1ZSA9IHJlcmVuZGVyUXVldWUuc29ydCgoYSwgYikgPT4gYS5fdm5vZGUuX2RlcHRoIC0gYi5fdm5vZGUuX2RlcHRoKTtcblx0XHRyZXJlbmRlclF1ZXVlID0gW107XG5cdFx0Ly8gRG9uJ3QgdXBkYXRlIGByZW5kZXJDb3VudGAgeWV0LiBLZWVwIGl0cyB2YWx1ZSBub24temVybyB0byBwcmV2ZW50IHVubmVjZXNzYXJ5XG5cdFx0Ly8gcHJvY2VzcygpIGNhbGxzIGZyb20gZ2V0dGluZyBzY2hlZHVsZWQgd2hpbGUgYHF1ZXVlYCBpcyBzdGlsbCBiZWluZyBjb25zdW1lZC5cblx0XHRxdWV1ZS5zb21lKGMgPT4ge1xuXHRcdFx0aWYgKGMuX2RpcnR5KSByZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fSk7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCJpbXBvcnQgeyBlbnF1ZXVlUmVuZGVyIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIGNvbnRleHRJZCkge1xuXHRjb250ZXh0SWQgPSAnX19jQycgKyBpKys7XG5cblx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRfaWQ6IGNvbnRleHRJZCxcblx0XHRfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRDb25zdW1lcihwcm9wcywgY29udGV4dFZhbHVlKSB7XG5cdFx0XHQvLyByZXR1cm4gcHJvcHMuY2hpbGRyZW4oXG5cdFx0XHQvLyBcdGNvbnRleHRbY29udGV4dElkXSA/IGNvbnRleHRbY29udGV4dElkXS5wcm9wcy52YWx1ZSA6IGRlZmF1bHRWYWx1ZVxuXHRcdFx0Ly8gKTtcblx0XHRcdHJldHVybiBwcm9wcy5jaGlsZHJlbihjb250ZXh0VmFsdWUpO1xuXHRcdH0sXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gKi9cblx0XHRQcm92aWRlcihwcm9wcykge1xuXHRcdFx0aWYgKCF0aGlzLmdldENoaWxkQ29udGV4dCkge1xuXHRcdFx0XHRsZXQgc3VicyA9IFtdO1xuXHRcdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRcdGN0eFtjb250ZXh0SWRdID0gdGhpcztcblxuXHRcdFx0XHR0aGlzLmdldENoaWxkQ29udGV4dCA9ICgpID0+IGN0eDtcblxuXHRcdFx0XHR0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKF9wcm9wcykge1xuXHRcdFx0XHRcdGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRcdC8vIEkgdGhpbmsgdGhlIGZvcmNlZCB2YWx1ZSBwcm9wYWdhdGlvbiBoZXJlIHdhcyBvbmx5IG5lZWRlZCB3aGVuIGBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nYCB3YXMgYmVpbmcgYnlwYXNzZWQ6XG5cdFx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2NvbW1pdC80ZDMzOWZiODAzYmVhMDllOWYxOThhYmYzOGNhMWJmOGVhNGI3NzcxI2RpZmYtNTQ2ODJjZTM4MDkzNWE3MTdlNDFiOGJmYzU0NzM3ZjZSMzU4XG5cdFx0XHRcdFx0XHQvLyBJbiB0aG9zZSBjYXNlcyB0aG91Z2gsIGV2ZW4gd2l0aCB0aGUgdmFsdWUgY29ycmVjdGVkLCB3ZSdyZSBkb3VibGUtcmVuZGVyaW5nIGFsbCBub2Rlcy5cblx0XHRcdFx0XHRcdC8vIEl0IG1pZ2h0IGJlIGJldHRlciB0byBqdXN0IHRlbGwgZm9sa3Mgbm90IHRvIHVzZSBmb3JjZS1zeW5jIG1vZGUuXG5cdFx0XHRcdFx0XHQvLyBDdXJyZW50bHksIHVzaW5nIGB1c2VDb250ZXh0KClgIGluIGEgY2xhc3MgY29tcG9uZW50IHdpbGwgb3ZlcndyaXRlIGl0cyBgdGhpcy5jb250ZXh0YCB2YWx1ZS5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0ID0gX3Byb3BzLnZhbHVlO1xuXHRcdFx0XHRcdFx0Ly8gXHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdFx0Ly8gfSk7XG5cblx0XHRcdFx0XHRcdC8vIHN1YnMuc29tZShjID0+IHtcblx0XHRcdFx0XHRcdC8vIFx0Yy5jb250ZXh0W2NvbnRleHRJZF0gPSBfcHJvcHMudmFsdWU7XG5cdFx0XHRcdFx0XHQvLyBcdGVucXVldWVSZW5kZXIoYyk7XG5cdFx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRcdHN1YnMuc29tZShlbnF1ZXVlUmVuZGVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5zdWIgPSBjID0+IHtcblx0XHRcdFx0XHRzdWJzLnB1c2goYyk7XG5cdFx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVW5tb3VudCA9ICgpID0+IHtcblx0XHRcdFx0XHRcdHN1YnMuc3BsaWNlKHN1YnMuaW5kZXhPZihjKSwgMSk7XG5cdFx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG5cdFx0fVxuXHR9O1xuXG5cdC8vIERldnRvb2xzIG5lZWRzIGFjY2VzcyB0byB0aGUgY29udGV4dCBvYmplY3Qgd2hlbiBpdFxuXHQvLyBlbmNvdW50ZXJzIGEgUHJvdmlkZXIuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHN1cHBvcnRcblx0Ly8gc2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIHRoZSBjb250ZXh0IG9iamVjdCBpbnN0ZWFkXG5cdC8vIG9mIG9uIHRoZSBjb21wb25lbnQgaXRzZWxmLiBTZWU6XG5cdC8vIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9jb250ZXh0Lmh0bWwjY29udGV4dGRpc3BsYXluYW1lXG5cblx0cmV0dXJuIChjb250ZXh0LlByb3ZpZGVyLl9jb250ZXh0UmVmID0gY29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9IGNvbnRleHQpO1xufVxuIiwiZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IHt9O1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9IC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCJpbXBvcnQgeyBkaWZmLCB1bm1vdW50LCBhcHBseVJlZiB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgRU1QVFlfT0JKLCBFTVBUWV9BUlIgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5cbi8qKlxuICogRGlmZiB0aGUgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgd2hvc2VcbiAqIGNoaWxkcmVuIGFyZSBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG5ld1BhcmVudFZOb2RlIFRoZSBuZXcgdmlydHVhbFxuICogbm9kZSB3aG9zZSBjaGlsZHJlbiBzaG91bGQgYmUgZGlmZidlZCBhZ2FpbnN0IG9sZFBhcmVudFZOb2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gb2xkUGFyZW50Vk5vZGUgVGhlIG9sZCB2aXJ0dWFsXG4gKiBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZSBkaWZmJ2VkIGFnYWluc3QgbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0IC0gbW9kaWZpZWQgYnkgZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgRE9NIG5vZGUgaXMgYW4gU1ZHIG5vZGVcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Pn0gY29tbWl0UXVldWUgTGlzdCBvZiBjb21wb25lbnRzXG4gKiB3aGljaCBoYXZlIGNhbGxiYWNrcyB0byBpbnZva2UgaW4gY29tbWl0Um9vdFxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTVxuICogZWxlbWVudCBhbnkgbmV3IGRvbSBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdFxuICogcmVuZGVyIChleGNlcHQgd2hlbiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZ1xuICogRnJhZ21lbnRzIHRoYXQgaGF2ZSBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGlsZHJlbihcblx0cGFyZW50RG9tLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRvbGRQYXJlbnRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCBpLCBqLCBvbGRWTm9kZSwgY2hpbGRWTm9kZSwgbmV3RG9tLCBmaXJzdENoaWxkRG9tLCByZWZzO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0bGV0IG9sZENoaWxkcmVuID0gKG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLl9jaGlsZHJlbikgfHwgRU1QVFlfQVJSO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBbXTtcblx0Zm9yIChpID0gMDsgaSA8IHJlbmRlclJlc3VsdC5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSByZW5kZXJSZXN1bHRbaV07XG5cblx0XHRpZiAoY2hpbGRWTm9kZSA9PSBudWxsIHx8IHR5cGVvZiBjaGlsZFZOb2RlID09ICdib29sZWFuJykge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIElmIHRoaXMgbmV3Vk5vZGUgaXMgYmVpbmcgcmV1c2VkIChlLmcuIDxkaXY+e3JldXNlfXtyZXVzZX08L2Rpdj4pIGluIHRoZSBzYW1lIGRpZmYsXG5cdFx0Ly8gb3Igd2UgYXJlIHJlbmRlcmluZyBhIGNvbXBvbmVudCAoZS5nLiBzZXRTdGF0ZSkgY29weSB0aGUgb2xkVk5vZGVzIHNvIGl0IGNhbiBoYXZlXG5cdFx0Ly8gaXQncyBvd24gRE9NICYgZXRjLiBwb2ludGVyc1xuXHRcdGVsc2UgaWYgKFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ3N0cmluZycgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdudW1iZXInIHx8XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdmFsaWQtdHlwZW9mXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYmlnaW50J1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRjaGlsZFZOb2RlXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5fZGVwdGggPiAwKSB7XG5cdFx0XHQvLyBWTm9kZSBpcyBhbHJlYWR5IGluIHVzZSwgY2xvbmUgaXQuIFRoaXMgY2FuIGhhcHBlbiBpbiB0aGUgZm9sbG93aW5nXG5cdFx0XHQvLyBzY2VuYXJpbzpcblx0XHRcdC8vICAgY29uc3QgcmV1c2UgPSA8ZGl2IC8+XG5cdFx0XHQvLyAgIDxkaXY+e3JldXNlfTxzcGFuIC8+e3JldXNlfTwvZGl2PlxuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnR5cGUsXG5cdFx0XHRcdGNoaWxkVk5vZGUucHJvcHMsXG5cdFx0XHRcdGNoaWxkVk5vZGUua2V5LFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZiA/IGNoaWxkVk5vZGUucmVmIDogbnVsbCxcblx0XHRcdFx0Y2hpbGRWTm9kZS5fb3JpZ2luYWxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdC8vIFRlcnNlciByZW1vdmVzIHRoZSBgY29udGludWVgIGhlcmUgYW5kIHdyYXBzIHRoZSBsb29wIGJvZHlcblx0XHQvLyBpbiBhIGBpZiAoY2hpbGRWTm9kZSkgeyAuLi4gfSBjb25kaXRpb25cblx0XHRpZiAoY2hpbGRWTm9kZSA9PSBudWxsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjaGlsZFZOb2RlLl9wYXJlbnQgPSBuZXdQYXJlbnRWTm9kZTtcblx0XHRjaGlsZFZOb2RlLl9kZXB0aCA9IG5ld1BhcmVudFZOb2RlLl9kZXB0aCArIDE7XG5cblx0XHQvLyBDaGVjayBpZiB3ZSBmaW5kIGEgY29ycmVzcG9uZGluZyBlbGVtZW50IGluIG9sZENoaWxkcmVuLlxuXHRcdC8vIElmIGZvdW5kLCBkZWxldGUgdGhlIGFycmF5IGl0ZW0gYnkgc2V0dGluZyB0byBgdW5kZWZpbmVkYC5cblx0XHQvLyBXZSB1c2UgYHVuZGVmaW5lZGAsIGFzIGBudWxsYCBpcyByZXNlcnZlZCBmb3IgZW1wdHkgcGxhY2Vob2xkZXJzXG5cdFx0Ly8gKGhvbGVzKS5cblx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0b2xkVk5vZGUgPT09IG51bGwgfHxcblx0XHRcdChvbGRWTm9kZSAmJlxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSA9PSBvbGRWTm9kZS5rZXkgJiZcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlID09PSBvbGRWTm9kZS50eXBlKVxuXHRcdCkge1xuXHRcdFx0b2xkQ2hpbGRyZW5baV0gPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEVpdGhlciBvbGRWTm9kZSA9PT0gdW5kZWZpbmVkIG9yIG9sZENoaWxkcmVuTGVuZ3RoID4gMCxcblx0XHRcdC8vIHNvIGFmdGVyIHRoaXMgbG9vcCBvbGRWTm9kZSA9PSBudWxsIG9yIG9sZFZOb2RlIGlzIGEgdmFsaWQgdmFsdWUuXG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgb2xkQ2hpbGRyZW5MZW5ndGg7IGorKykge1xuXHRcdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2pdO1xuXHRcdFx0XHQvLyBJZiBjaGlsZFZOb2RlIGlzIHVua2V5ZWQsIHdlIG9ubHkgbWF0Y2ggc2ltaWxhcmx5IHVua2V5ZWQgbm9kZXMsIG90aGVyd2lzZSB3ZSBtYXRjaCBieSBrZXkuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBtYXRjaCBieSB0eXBlIChpbiBlaXRoZXIgY2FzZSkuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRvbGRWTm9kZSAmJlxuXHRcdFx0XHRcdGNoaWxkVk5vZGUua2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHRcdGNoaWxkVk5vZGUudHlwZSA9PT0gb2xkVk5vZGUudHlwZVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRvbGRDaGlsZHJlbltqXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRvbGRWTm9kZSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0b2xkVk5vZGUgPSBvbGRWTm9kZSB8fCBFTVBUWV9PQko7XG5cblx0XHQvLyBNb3JwaCB0aGUgb2xkIGVsZW1lbnQgaW50byB0aGUgbmV3IG9uZSwgYnV0IGRvbid0IGFwcGVuZCBpdCB0byB0aGUgZG9tIHlldFxuXHRcdGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0aXNTdmcsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0b2xkRG9tLFxuXHRcdFx0aXNIeWRyYXRpbmdcblx0XHQpO1xuXG5cdFx0bmV3RG9tID0gY2hpbGRWTm9kZS5fZG9tO1xuXG5cdFx0aWYgKChqID0gY2hpbGRWTm9kZS5yZWYpICYmIG9sZFZOb2RlLnJlZiAhPSBqKSB7XG5cdFx0XHRpZiAoIXJlZnMpIHJlZnMgPSBbXTtcblx0XHRcdGlmIChvbGRWTm9kZS5yZWYpIHJlZnMucHVzaChvbGRWTm9kZS5yZWYsIG51bGwsIGNoaWxkVk5vZGUpO1xuXHRcdFx0cmVmcy5wdXNoKGosIGNoaWxkVk5vZGUuX2NvbXBvbmVudCB8fCBuZXdEb20sIGNoaWxkVk5vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChuZXdEb20gIT0gbnVsbCkge1xuXHRcdFx0aWYgKGZpcnN0Q2hpbGREb20gPT0gbnVsbCkge1xuXHRcdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdFx0XHRjaGlsZFZOb2RlLl9jaGlsZHJlbiA9PT0gb2xkVk5vZGUuX2NoaWxkcmVuXG5cdFx0XHQpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fbmV4dERvbSA9IG9sZERvbSA9IHJlb3JkZXJDaGlsZHJlbihcblx0XHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0XHRwYXJlbnREb21cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9sZERvbSA9IHBsYWNlQ2hpbGQoXG5cdFx0XHRcdFx0cGFyZW50RG9tLFxuXHRcdFx0XHRcdGNoaWxkVk5vZGUsXG5cdFx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdFx0b2xkQ2hpbGRyZW4sXG5cdFx0XHRcdFx0bmV3RG9tLFxuXHRcdFx0XHRcdG9sZERvbVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIG5ld1BhcmVudFZOb2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHQvLyBCZWNhdXNlIHRoZSBuZXdQYXJlbnRWTm9kZSBpcyBGcmFnbWVudC1saWtlLCB3ZSBuZWVkIHRvIHNldCBpdCdzXG5cdFx0XHRcdC8vIF9uZXh0RG9tIHByb3BlcnR5IHRvIHRoZSBuZXh0U2libGluZyBvZiBpdHMgbGFzdCBjaGlsZCBET00gbm9kZS5cblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gYG9sZERvbWAgY29udGFpbnMgdGhlIGNvcnJlY3QgdmFsdWUgaGVyZSBiZWNhdXNlIGlmIHRoZSBsYXN0IGNoaWxkXG5cdFx0XHRcdC8vIGlzIGEgRnJhZ21lbnQtbGlrZSwgdGhlbiBvbGREb20gaGFzIGFscmVhZHkgYmVlbiBzZXQgdG8gdGhhdCBjaGlsZCdzIF9uZXh0RG9tLlxuXHRcdFx0XHQvLyBJZiB0aGUgbGFzdCBjaGlsZCBpcyBhIERPTSBWTm9kZSwgdGhlbiBvbGREb20gd2lsbCBiZSBzZXQgdG8gdGhhdCBET01cblx0XHRcdFx0Ly8gbm9kZSdzIG5leHRTaWJsaW5nLlxuXHRcdFx0XHRuZXdQYXJlbnRWTm9kZS5fbmV4dERvbSA9IG9sZERvbTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0b2xkRG9tICYmXG5cdFx0XHRvbGRWTm9kZS5fZG9tID09IG9sZERvbSAmJlxuXHRcdFx0b2xkRG9tLnBhcmVudE5vZGUgIT0gcGFyZW50RG9tXG5cdFx0KSB7XG5cdFx0XHQvLyBUaGUgYWJvdmUgY29uZGl0aW9uIGlzIHRvIGhhbmRsZSBudWxsIHBsYWNlaG9sZGVycy4gU2VlIHRlc3QgaW4gcGxhY2Vob2xkZXIudGVzdC5qczpcblx0XHRcdC8vIGBlZmZpY2llbnRseSByZXBsYWNlIG51bGwgcGxhY2Vob2xkZXJzIGluIHBhcmVudCByZXJlbmRlcnNgXG5cdFx0XHRvbGREb20gPSBnZXREb21TaWJsaW5nKG9sZFZOb2RlKTtcblx0XHR9XG5cdH1cblxuXHRuZXdQYXJlbnRWTm9kZS5fZG9tID0gZmlyc3RDaGlsZERvbTtcblxuXHQvLyBSZW1vdmUgcmVtYWluaW5nIG9sZENoaWxkcmVuIGlmIHRoZXJlIGFyZSBhbnkuXG5cdGZvciAoaSA9IG9sZENoaWxkcmVuTGVuZ3RoOyBpLS07ICkge1xuXHRcdGlmIChvbGRDaGlsZHJlbltpXSAhPSBudWxsKSB7XG5cdFx0XHR1bm1vdW50KG9sZENoaWxkcmVuW2ldLCBvbGRDaGlsZHJlbltpXSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHJlZnMgb25seSBhZnRlciB1bm1vdW50XG5cdGlmIChyZWZzKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHJlZnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFwcGx5UmVmKHJlZnNbaV0sIHJlZnNbKytpXSwgcmVmc1srK2ldKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVvcmRlckNoaWxkcmVuKGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tKSB7XG5cdC8vIE5vdGU6IFZOb2RlcyBpbiBuZXN0ZWQgc3VzcGVuZGVkIHRyZWVzIG1heSBiZSBtaXNzaW5nIF9jaGlsZHJlbi5cblx0bGV0IGMgPSBjaGlsZFZOb2RlLl9jaGlsZHJlbjtcblx0bGV0IHRtcCA9IDA7XG5cdGZvciAoOyBjICYmIHRtcCA8IGMubGVuZ3RoOyB0bXArKykge1xuXHRcdGxldCB2bm9kZSA9IGNbdG1wXTtcblx0XHRpZiAodm5vZGUpIHtcblx0XHRcdC8vIFdlIHR5cGljYWxseSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0Ly8gb2xkVk5vZGUuX2NoaWxkcmVuIHRvIG5ld1ZOb2RlLl9jaGlsZHJlbi4gSWYgdGhhdCBpcyB0aGUgY2FzZSwgd2UgbmVlZFxuXHRcdFx0Ly8gdG8gdXBkYXRlIHRoZSBvbGQgY2hpbGRyZW4ncyBfcGFyZW50IHBvaW50ZXIgdG8gcG9pbnQgdG8gdGhlIG5ld1ZOb2RlXG5cdFx0XHQvLyAoY2hpbGRWTm9kZSBoZXJlKS5cblx0XHRcdHZub2RlLl9wYXJlbnQgPSBjaGlsZFZOb2RlO1xuXG5cdFx0XHRpZiAodHlwZW9mIHZub2RlLnR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRvbGREb20gPSByZW9yZGVyQ2hpbGRyZW4odm5vZGUsIG9sZERvbSwgcGFyZW50RG9tKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9sZERvbSA9IHBsYWNlQ2hpbGQocGFyZW50RG9tLCB2bm9kZSwgdm5vZGUsIGMsIHZub2RlLl9kb20sIG9sZERvbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW5kZXgnKS5Db21wb25lbnRDaGlsZHJlbn0gY2hpbGRyZW4gVGhlIHVuZmxhdHRlbmVkXG4gKiBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHJldHVybnMge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZVtdfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9DaGlsZEFycmF5KGNoaWxkcmVuLCBvdXQpIHtcblx0b3V0ID0gb3V0IHx8IFtdO1xuXHRpZiAoY2hpbGRyZW4gPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGRyZW4gPT0gJ2Jvb2xlYW4nKSB7XG5cdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcblx0XHRjaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdHRvQ2hpbGRBcnJheShjaGlsZCwgb3V0KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRvdXQucHVzaChjaGlsZHJlbik7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcGxhY2VDaGlsZChcblx0cGFyZW50RG9tLFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRWTm9kZSxcblx0b2xkQ2hpbGRyZW4sXG5cdG5ld0RvbSxcblx0b2xkRG9tXG4pIHtcblx0bGV0IG5leHREb207XG5cdGlmIChjaGlsZFZOb2RlLl9uZXh0RG9tICE9PSB1bmRlZmluZWQpIHtcblx0XHQvLyBPbmx5IEZyYWdtZW50cyBvciBjb21wb25lbnRzIHRoYXQgcmV0dXJuIEZyYWdtZW50IGxpa2UgVk5vZGVzIHdpbGxcblx0XHQvLyBoYXZlIGEgbm9uLXVuZGVmaW5lZCBfbmV4dERvbS4gQ29udGludWUgdGhlIGRpZmYgZnJvbSB0aGUgc2libGluZ1xuXHRcdC8vIG9mIGxhc3QgRE9NIGNoaWxkIG9mIHRoaXMgY2hpbGQgVk5vZGVcblx0XHRuZXh0RG9tID0gY2hpbGRWTm9kZS5fbmV4dERvbTtcblxuXHRcdC8vIEVhZ2VybHkgY2xlYW51cCBfbmV4dERvbS4gV2UgZG9uJ3QgbmVlZCB0byBwZXJzaXN0IHRoZSB2YWx1ZSBiZWNhdXNlXG5cdFx0Ly8gaXQgaXMgb25seSB1c2VkIGJ5IGBkaWZmQ2hpbGRyZW5gIHRvIGRldGVybWluZSB3aGVyZSB0byByZXN1bWUgdGhlIGRpZmYgYWZ0ZXJcblx0XHQvLyBkaWZmaW5nIENvbXBvbmVudHMgYW5kIEZyYWdtZW50cy4gT25jZSB3ZSBzdG9yZSBpdCB0aGUgbmV4dERPTSBsb2NhbCB2YXIsIHdlXG5cdFx0Ly8gY2FuIGNsZWFuIHVwIHRoZSBwcm9wZXJ0eVxuXHRcdGNoaWxkVk5vZGUuX25leHREb20gPSB1bmRlZmluZWQ7XG5cdH0gZWxzZSBpZiAoXG5cdFx0b2xkVk5vZGUgPT0gbnVsbCB8fFxuXHRcdG5ld0RvbSAhPSBvbGREb20gfHxcblx0XHRuZXdEb20ucGFyZW50Tm9kZSA9PSBudWxsXG5cdCkge1xuXHRcdG91dGVyOiBpZiAob2xkRG9tID09IG51bGwgfHwgb2xkRG9tLnBhcmVudE5vZGUgIT09IHBhcmVudERvbSkge1xuXHRcdFx0cGFyZW50RG9tLmFwcGVuZENoaWxkKG5ld0RvbSk7XG5cdFx0XHRuZXh0RG9tID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gYGo8b2xkQ2hpbGRyZW5MZW5ndGg7IGorPTJgIGlzIGFuIGFsdGVybmF0aXZlIHRvIGBqKys8b2xkQ2hpbGRyZW5MZW5ndGgvMmBcblx0XHRcdGZvciAoXG5cdFx0XHRcdGxldCBzaWJEb20gPSBvbGREb20sIGogPSAwO1xuXHRcdFx0XHQoc2liRG9tID0gc2liRG9tLm5leHRTaWJsaW5nKSAmJiBqIDwgb2xkQ2hpbGRyZW4ubGVuZ3RoO1xuXHRcdFx0XHRqICs9IDFcblx0XHRcdCkge1xuXHRcdFx0XHRpZiAoc2liRG9tID09IG5ld0RvbSkge1xuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKG5ld0RvbSwgb2xkRG9tKTtcblx0XHRcdG5leHREb20gPSBvbGREb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBwcmUtY2FsY3VsYXRlZCB0aGUgbmV4dERPTSBub2RlLCB1c2UgaXQuIEVsc2UgY2FsY3VsYXRlIGl0IG5vd1xuXHQvLyBTdHJpY3RseSBjaGVjayBmb3IgYHVuZGVmaW5lZGAgaGVyZSBjdXogYG51bGxgIGlzIGEgdmFsaWQgdmFsdWUgb2YgYG5leHREb21gLlxuXHQvLyBTZWUgbW9yZSBkZXRhaWwgaW4gY3JlYXRlLWVsZW1lbnQuanM6Y3JlYXRlVk5vZGVcblx0aWYgKG5leHREb20gIT09IHVuZGVmaW5lZCkge1xuXHRcdG9sZERvbSA9IG5leHREb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3RG9tLm5leHRTaWJsaW5nO1xuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cbiIsImltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHRoZSBvbGQgYW5kIG5ldyBwcm9wZXJ0aWVzIG9mIGEgVk5vZGUgYW5kIGFwcGx5IGNoYW5nZXMgdG8gdGhlIERPTSBub2RlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBub2RlIHRvIGFwcGx5XG4gKiBjaGFuZ2VzIHRvXG4gKiBAcGFyYW0ge29iamVjdH0gbmV3UHJvcHMgVGhlIG5ldyBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IG9sZFByb3BzIFRoZSBvbGQgcHJvcHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTdmcgV2hldGhlciBvciBub3QgdGhpcyBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGh5ZHJhdGUgV2hldGhlciBvciBub3Qgd2UgYXJlIGluIGh5ZHJhdGlvbiBtb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMoZG9tLCBuZXdQcm9wcywgb2xkUHJvcHMsIGlzU3ZnLCBoeWRyYXRlKSB7XG5cdGxldCBpO1xuXG5cdGZvciAoaSBpbiBvbGRQcm9wcykge1xuXHRcdGlmIChpICE9PSAnY2hpbGRyZW4nICYmIGkgIT09ICdrZXknICYmICEoaSBpbiBuZXdQcm9wcykpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbnVsbCwgb2xkUHJvcHNbaV0sIGlzU3ZnKTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGkgaW4gbmV3UHJvcHMpIHtcblx0XHRpZiAoXG5cdFx0XHQoIWh5ZHJhdGUgfHwgdHlwZW9mIG5ld1Byb3BzW2ldID09ICdmdW5jdGlvbicpICYmXG5cdFx0XHRpICE9PSAnY2hpbGRyZW4nICYmXG5cdFx0XHRpICE9PSAna2V5JyAmJlxuXHRcdFx0aSAhPT0gJ3ZhbHVlJyAmJlxuXHRcdFx0aSAhPT0gJ2NoZWNrZWQnICYmXG5cdFx0XHRvbGRQcm9wc1tpXSAhPT0gbmV3UHJvcHNbaV1cblx0XHQpIHtcblx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgbmV3UHJvcHNbaV0sIG9sZFByb3BzW2ldLCBpc1N2Zyk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlLCBrZXksIHZhbHVlKSB7XG5cdGlmIChrZXlbMF0gPT09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIGlzU3ZnKSB7XG5cdGxldCB1c2VDYXB0dXJlO1xuXG5cdG86IGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9PSBvbGRWYWx1ZVtuYW1lXSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCB2YWx1ZVtuYW1lXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEJlbmNobWFyayBmb3IgY29tcGFyaXNvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81NzRjOTU0YmRiOTY1YjlhMDA5NjVhYzZcblx0ZWxzZSBpZiAobmFtZVswXSA9PT0gJ28nICYmIG5hbWVbMV0gPT09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9PSAobmFtZSA9IG5hbWUucmVwbGFjZSgvQ2FwdHVyZSQvLCAnJykpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKG5hbWUudG9Mb3dlckNhc2UoKSBpbiBkb20pIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik7XG5cdFx0ZWxzZSBuYW1lID0gbmFtZS5zbGljZSgyKTtcblxuXHRcdGlmICghZG9tLl9saXN0ZW5lcnMpIGRvbS5fbGlzdGVuZXJzID0ge307XG5cdFx0ZG9tLl9saXN0ZW5lcnNbbmFtZSArIHVzZUNhcHR1cmVdID0gdmFsdWU7XG5cblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICghb2xkVmFsdWUpIHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlciA9IHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHk7XG5cdFx0XHRcdGRvbS5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBoYW5kbGVyID0gdXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eTtcblx0XHRcdGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChuYW1lICE9PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG5cdFx0aWYgKGlzU3ZnKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPT0gJ2hyZWYnICYmXG5cdFx0XHRuYW1lICE9PSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT09ICdmb3JtJyAmJlxuXHRcdFx0Ly8gRGVmYXVsdCB2YWx1ZSBpbiBicm93c2VycyBpcyBgLTFgIGFuZCBhbiBlbXB0eSBzdHJpbmcgaXNcblx0XHRcdC8vIGNhc3QgdG8gYDBgIGluc3RlYWRcblx0XHRcdG5hbWUgIT09ICd0YWJJbmRleCcgJiZcblx0XHRcdG5hbWUgIT09ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgaW4gZG9tXG5cdFx0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkb21bbmFtZV0gPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcblx0XHRcdFx0Ly8gbGFiZWxsZWQgYnJlYWsgaXMgMWIgc21hbGxlciBoZXJlIHRoYW4gYSByZXR1cm4gc3RhdGVtZW50IChzb3JyeSlcblx0XHRcdFx0YnJlYWsgbztcblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0fVxuXG5cdFx0Ly8gQVJJQS1hdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbm90aW9uIG9mIGJvb2xlYW4gdmFsdWVzLlxuXHRcdC8vIFRoZSB2YWx1ZSBgZmFsc2VgIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhdHRyaWJ1dGUgbm90XG5cdFx0Ly8gZXhpc3Rpbmcgb24gdGhlIERPTSwgc28gd2UgY2FuJ3QgcmVtb3ZlIGl0LiBGb3Igbm9uLWJvb2xlYW5cblx0XHQvLyBBUklBLWF0dHJpYnV0ZXMgd2UgY291bGQgdHJlYXQgZmFsc2UgYXMgYSByZW1vdmFsLCBidXQgdGhlXG5cdFx0Ly8gYW1vdW50IG9mIGV4Y2VwdGlvbnMgd291bGQgY29zdCB1cyB0b28gbWFueSBieXRlcy4gT24gdG9wIG9mXG5cdFx0Ly8gdGhhdCBvdGhlciBWRE9NIGZyYW1ld29ya3MgYWxzbyBhbHdheXMgc3RyaW5naWZ5IGBmYWxzZWAuXG5cblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lLmluZGV4T2YoJy0nKSAhPSAtMSkpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuICogQHBhcmFtIHtFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV2ZW50UHJveHkoZSkge1xuXHR0aGlzLl9saXN0ZW5lcnNbZS50eXBlICsgZmFsc2VdKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG59XG5cbmZ1bmN0aW9uIGV2ZW50UHJveHlDYXB0dXJlKGUpIHtcblx0dGhpcy5fbGlzdGVuZXJzW2UudHlwZSArIHRydWVdKG9wdGlvbnMuZXZlbnQgPyBvcHRpb25zLmV2ZW50KGUpIDogZSk7XG59XG4iLCJpbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBnZXREb21TaWJsaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50JztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAnLi4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGlmZkNoaWxkcmVuIH0gZnJvbSAnLi9jaGlsZHJlbic7XG5pbXBvcnQgeyBkaWZmUHJvcHMsIHNldFByb3BlcnR5IH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBhc3NpZ24sIHJlbW92ZU5vZGUsIHNsaWNlIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9vcHRpb25zJztcblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIGFuZCBhcHBseSBwcm9wZXIgY2hhbmdlcyB0byB0aGUgRE9NXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdC4gTW9kaWZpZWQgYnkgZ2V0Q2hpbGRDb250ZXh0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3ZnIFdoZXRoZXIgb3Igbm90IHRoaXMgZWxlbWVudCBpcyBhbiBTVkcgbm9kZVxuICogQHBhcmFtIHtBcnJheTxpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBvbGREb20gVGhlIGN1cnJlbnQgYXR0YWNoZWQgRE9NXG4gKiBlbGVtZW50IGFueSBuZXcgZG9tIGVsZW1lbnRzIHNob3VsZCBiZSBwbGFjZWQgYXJvdW5kLiBMaWtlbHkgYG51bGxgIG9uIGZpcnN0XG4gKiByZW5kZXIgKGV4Y2VwdCB3aGVuIGh5ZHJhdGluZykuIENhbiBiZSBhIHNpYmxpbmcgRE9NIGVsZW1lbnQgd2hlbiBkaWZmaW5nXG4gKiBGcmFnbWVudHMgdGhhdCBoYXZlIHNpYmxpbmdzLiBJbiBtb3N0IGNhc2VzLCBpdCBzdGFydHMgb3V0IGFzIGBvbGRDaGlsZHJlblswXS5fZG9tYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzSHlkcmF0aW5nXSBXaGV0aGVyIG9yIG5vdCB3ZSBhcmUgaW4gaHlkcmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKFxuXHRwYXJlbnREb20sXG5cdG5ld1ZOb2RlLFxuXHRvbGRWTm9kZSxcblx0Z2xvYmFsQ29udGV4dCxcblx0aXNTdmcsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZ1xuKSB7XG5cdGxldCB0bXAsXG5cdFx0bmV3VHlwZSA9IG5ld1ZOb2RlLnR5cGU7XG5cblx0Ly8gV2hlbiBwYXNzaW5nIHRocm91Z2ggY3JlYXRlRWxlbWVudCBpdCBhc3NpZ25zIHRoZSBvYmplY3Rcblx0Ly8gY29uc3RydWN0b3IgYXMgdW5kZWZpbmVkLiBUaGlzIHRvIHByZXZlbnQgSlNPTi1pbmplY3Rpb24uXG5cdGlmIChuZXdWTm9kZS5jb25zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuXHQvLyBJZiB0aGUgcHJldmlvdXMgZGlmZiBiYWlsZWQgb3V0LCByZXN1bWUgY3JlYXRpbmcvaHlkcmF0aW5nLlxuXHRpZiAob2xkVk5vZGUuX2h5ZHJhdGluZyAhPSBudWxsKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSBvbGRWTm9kZS5faHlkcmF0aW5nO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdC8vIGlmIHdlIHJlc3VtZSwgd2Ugd2FudCB0aGUgdHJlZSB0byBiZSBcInVubG9ja2VkXCJcblx0XHRuZXdWTm9kZS5faHlkcmF0aW5nID0gbnVsbDtcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IFtvbGREb21dO1xuXHR9XG5cblx0aWYgKCh0bXAgPSBvcHRpb25zLl9kaWZmKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHR0cnkge1xuXHRcdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblxuXHRcdFx0Ly8gTmVjZXNzYXJ5IGZvciBjcmVhdGVDb250ZXh0IGFwaS4gU2V0dGluZyB0aGlzIHByb3BlcnR5IHdpbGwgcGFzc1xuXHRcdFx0Ly8gdGhlIGNvbnRleHQgdmFsdWUgYXMgYHRoaXMuY29udGV4dGAganVzdCBmb3IgdGhpcyBjb21wb25lbnQuXG5cdFx0XHR0bXAgPSBuZXdUeXBlLmNvbnRleHRUeXBlO1xuXHRcdFx0bGV0IHByb3ZpZGVyID0gdG1wICYmIGdsb2JhbENvbnRleHRbdG1wLl9pZF07XG5cdFx0XHRsZXQgY29tcG9uZW50Q29udGV4dCA9IHRtcFxuXHRcdFx0XHQ/IHByb3ZpZGVyXG5cdFx0XHRcdFx0PyBwcm92aWRlci5wcm9wcy52YWx1ZVxuXHRcdFx0XHRcdDogdG1wLl9kZWZhdWx0VmFsdWVcblx0XHRcdFx0OiBnbG9iYWxDb250ZXh0O1xuXG5cdFx0XHQvLyBHZXQgY29tcG9uZW50IGFuZCBzZXQgaXQgdG8gYGNgXG5cdFx0XHRpZiAob2xkVk5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0XHRjID0gbmV3Vk5vZGUuX2NvbXBvbmVudCA9IG9sZFZOb2RlLl9jb21wb25lbnQ7XG5cdFx0XHRcdGNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wZW5kaW5nRXJyb3I7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJbnN0YW50aWF0ZSB0aGUgbmV3IGNvbXBvbmVudFxuXHRcdFx0XHRpZiAoJ3Byb3RvdHlwZScgaW4gbmV3VHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXIpIHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtaWdub3JlIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBDb21wb25lbnQobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHRcdGMuY29uc3RydWN0b3IgPSBuZXdUeXBlO1xuXHRcdFx0XHRcdGMucmVuZGVyID0gZG9SZW5kZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHByb3ZpZGVyKSBwcm92aWRlci5zdWIoYyk7XG5cblx0XHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0XHRpZiAoIWMuc3RhdGUpIGMuc3RhdGUgPSB7fTtcblx0XHRcdFx0Yy5jb250ZXh0ID0gY29tcG9uZW50Q29udGV4dDtcblx0XHRcdFx0Yy5fZ2xvYmFsQ29udGV4dCA9IGdsb2JhbENvbnRleHQ7XG5cdFx0XHRcdGlzTmV3ID0gYy5fZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSW52b2tlIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuXHRcdFx0aWYgKGMuX25leHRTdGF0ZSA9PSBudWxsKSB7XG5cdFx0XHRcdGMuX25leHRTdGF0ZSA9IGMuc3RhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBudWxsKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXG5cdFx0XHQvLyBJbnZva2UgcHJlLXJlbmRlciBsaWZlY3ljbGUgbWV0aG9kc1xuXHRcdFx0aWYgKGlzTmV3KSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBudWxsICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsTW91bnQgIT0gbnVsbFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkTW91bnQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuY29tcG9uZW50RGlkTW91bnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT0gbnVsbCAmJlxuXHRcdFx0XHRcdG5ld1Byb3BzICE9PSBvbGRQcm9wcyAmJlxuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPSBudWxsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcywgY29tcG9uZW50Q29udGV4dCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gbnVsbCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKSB8fFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRcdC8vIE1vcmUgaW5mbyBhYm91dCB0aGlzIGhlcmU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0pvdmlEZUNyb29jay9iZWM1ZjJjZTkzNTQ0ZDJlNjA3MGVmOGUwMDM2ZTRlOFxuXHRcdFx0XHRcdGlmIChuZXdWTm9kZS5fb3JpZ2luYWwgIT09IG9sZFZOb2RlLl9vcmlnaW5hbCkgYy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRjLl92bm9kZSA9IG5ld1ZOb2RlO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uZm9yRWFjaCh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYy5fc3RhdGVDYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcy5wdXNoKGMuX3N0YXRlQ2FsbGJhY2tzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblxuXHRcdFx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrIG91dGVyO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50V2lsbFVwZGF0ZSAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsVXBkYXRlKG5ld1Byb3BzLCBjLl9uZXh0U3RhdGUsIGNvbXBvbmVudENvbnRleHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGMuY29tcG9uZW50RGlkVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblx0XHRcdGMuX3BhcmVudERvbSA9IHBhcmVudERvbTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmICgncHJvdG90eXBlJyBpbiBuZXdUeXBlICYmIG5ld1R5cGUucHJvdG90eXBlLnJlbmRlcikge1xuXHRcdFx0XHRjLnN0YXRlID0gYy5fbmV4dFN0YXRlO1xuXHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXG5cdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYy5fc3RhdGVDYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLl9zdGF0ZUNhbGxiYWNrc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Yy5fc3RhdGVDYWxsYmFja3MgPSBbXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmIChyZW5kZXJIb29rKSByZW5kZXJIb29rKG5ld1ZOb2RlKTtcblxuXHRcdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0XHQvLyBIYW5kbGUgc2V0U3RhdGUgY2FsbGVkIGluIHJlbmRlciwgc2VlICMyNTUzXG5cdFx0XHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblx0XHRcdFx0fSB3aGlsZSAoYy5fZGlydHkgJiYgKytjb3VudCA8IDI1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0Yy5zdGF0ZSA9IGMuX25leHRTdGF0ZTtcblxuXHRcdFx0aWYgKGMuZ2V0Q2hpbGRDb250ZXh0ICE9IG51bGwpIHtcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCA9IGFzc2lnbihhc3NpZ24oe30sIGdsb2JhbENvbnRleHQpLCBjLmdldENoaWxkQ29udGV4dCgpKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IG51bGwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpc1RvcExldmVsRnJhZ21lbnQgPVxuXHRcdFx0XHR0bXAgIT0gbnVsbCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBudWxsO1xuXHRcdFx0bGV0IHJlbmRlclJlc3VsdCA9IGlzVG9wTGV2ZWxGcmFnbWVudCA/IHRtcC5wcm9wcy5jaGlsZHJlbiA6IHRtcDtcblxuXHRcdFx0ZGlmZkNoaWxkcmVuKFxuXHRcdFx0XHRwYXJlbnREb20sXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkocmVuZGVyUmVzdWx0KSA/IHJlbmRlclJlc3VsdCA6IFtyZW5kZXJSZXN1bHRdLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdGlzU3ZnLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdGMuYmFzZSA9IG5ld1ZOb2RlLl9kb207XG5cblx0XHRcdC8vIFdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZCB0aGlzIFZOb2RlLCB1bnNldCBhbnkgc3RvcmVkIGh5ZHJhdGlvbi9iYWlsb3V0IHN0YXRlOlxuXHRcdFx0bmV3Vk5vZGUuX2h5ZHJhdGluZyA9IG51bGw7XG5cblx0XHRcdGlmIChjLl9yZW5kZXJDYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbW1pdFF1ZXVlLnB1c2goYyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdFx0Yy5fcGVuZGluZ0Vycm9yID0gYy5fcHJvY2Vzc2luZ0V4Y2VwdGlvbiA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGMuX2ZvcmNlID0gZmFsc2U7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID09IG51bGwgJiZcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9PT0gb2xkVk5vZGUuX29yaWdpbmFsXG5cdFx0KSB7XG5cdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0XHRuZXdWTm9kZS5fZG9tID0gb2xkVk5vZGUuX2RvbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRcdG9sZFZOb2RlLl9kb20sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcsXG5cdFx0XHRcdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRcdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKCh0bXAgPSBvcHRpb25zLmRpZmZlZCkpIHRtcChuZXdWTm9kZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBudWxsO1xuXHRcdC8vIGlmIGh5ZHJhdGluZyBvciBjcmVhdGluZyBpbml0aWFsIHRyZWUsIGJhaWxvdXQgcHJlc2VydmVzIERPTTpcblx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZERvbTtcblx0XHRcdG5ld1ZOb2RlLl9oeWRyYXRpbmcgPSAhIWlzSHlkcmF0aW5nO1xuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IG51bGw7XG5cdFx0XHQvLyBeIGNvdWxkIHBvc3NpYmx5IGJlIHNpbXBsaWZpZWQgdG86XG5cdFx0XHQvLyBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGggPSAwO1xuXHRcdH1cblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIG5ld1ZOb2RlLCBvbGRWTm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gcm9vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWl0Um9vdChjb21taXRRdWV1ZSwgcm9vdCkge1xuXHRpZiAob3B0aW9ucy5fY29tbWl0KSBvcHRpb25zLl9jb21taXQocm9vdCwgY29tbWl0UXVldWUpO1xuXG5cdGNvbW1pdFF1ZXVlLnNvbWUoYyA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgUmV1c2UgdGhlIGNvbW1pdFF1ZXVlIHZhcmlhYmxlIGhlcmUgc28gdGhlIHR5cGUgY2hhbmdlc1xuXHRcdFx0Y29tbWl0UXVldWUgPSBjLl9yZW5kZXJDYWxsYmFja3M7XG5cdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGNvbW1pdFF1ZXVlLnNvbWUoY2IgPT4ge1xuXHRcdFx0XHQvLyBAdHMtaWdub3JlIFNlZSBhYm92ZSB0cy1pZ25vcmUgb24gY29tbWl0UXVldWVcblx0XHRcdFx0Y2IuY2FsbChjKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgYy5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyByZXByZXNlbnRpbmcgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIGVsZW1lbnQgcmVwcmVzZW50aW5nXG4gKiB0aGUgdmlydHVhbCBub2RlcyBiZWluZyBkaWZmZWRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IG9sZFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBpc1N2ZyBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlXG4gKiBAcGFyYW0geyp9IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4uL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZGlmZkVsZW1lbnROb2Rlcyhcblx0ZG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdGlzU3ZnLFxuXHRleGNlc3NEb21DaGlsZHJlbixcblx0Y29tbWl0UXVldWUsXG5cdGlzSHlkcmF0aW5nXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHM7XG5cdGxldCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuXHRsZXQgbm9kZVR5cGUgPSBuZXdWTm9kZS50eXBlO1xuXHRsZXQgaSA9IDA7XG5cblx0Ly8gVHJhY2tzIGVudGVyaW5nIGFuZCBleGl0aW5nIFNWRyBuYW1lc3BhY2Ugd2hlbiBkZXNjZW5kaW5nIHRocm91Z2ggdGhlIHRyZWUuXG5cdGlmIChub2RlVHlwZSA9PT0gJ3N2ZycpIGlzU3ZnID0gdHJ1ZTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdGZvciAoOyBpIDwgZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNoaWxkID0gZXhjZXNzRG9tQ2hpbGRyZW5baV07XG5cblx0XHRcdC8vIGlmIG5ld1ZOb2RlIG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiBvciB0aGUgYGRvbWBcblx0XHRcdC8vIGFyZ3VtZW50IG1hdGNoZXMgYW4gZWxlbWVudCBpbiBleGNlc3NEb21DaGlsZHJlbiwgcmVtb3ZlIGl0IGZyb21cblx0XHRcdC8vIGV4Y2Vzc0RvbUNoaWxkcmVuIHNvIGl0IGlzbid0IGxhdGVyIHJlbW92ZWQgaW4gZGlmZkNoaWxkcmVuXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNoaWxkICYmXG5cdFx0XHRcdCdzZXRBdHRyaWJ1dGUnIGluIGNoaWxkID09PSAhIW5vZGVUeXBlICYmXG5cdFx0XHRcdChub2RlVHlwZSA/IGNoaWxkLmxvY2FsTmFtZSA9PT0gbm9kZVR5cGUgOiBjaGlsZC5ub2RlVHlwZSA9PT0gMylcblx0XHRcdCkge1xuXHRcdFx0XHRkb20gPSBjaGlsZDtcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5baV0gPSBudWxsO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoZG9tID09IG51bGwpIHtcblx0XHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHRcdC8vIEB0cy1pZ25vcmUgY3JlYXRlVGV4dE5vZGUgcmV0dXJucyBUZXh0LCB3ZSBleHBlY3QgUHJlYWN0RWxlbWVudFxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ld1Byb3BzKTtcblx0XHR9XG5cblx0XHRpZiAoaXNTdmcpIHtcblx0XHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdFx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZSBXZSBrbm93IGBuZXdWTm9kZS50eXBlYCBpcyBhIHN0cmluZ1xuXHRcdFx0XHRub2RlVHlwZSxcblx0XHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gd2UgY3JlYXRlZCBhIG5ldyBwYXJlbnQsIHNvIG5vbmUgb2YgdGhlIHByZXZpb3VzbHkgYXR0YWNoZWQgY2hpbGRyZW4gY2FuIGJlIHJldXNlZDpcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9IG51bGw7XG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpbiBjYXNlIHdlIGFyZSBoeWRyYXRpbmcpLCB0aGlzIGRlb3B0cyB0aGUgaHlkcmF0ZVxuXHRcdGlzSHlkcmF0aW5nID0gZmFsc2U7XG5cdH1cblxuXHRpZiAobm9kZVR5cGUgPT09IG51bGwpIHtcblx0XHQvLyBEdXJpbmcgaHlkcmF0aW9uLCB3ZSBzdGlsbCBoYXZlIHRvIHNwbGl0IG1lcmdlZCB0ZXh0IGZyb20gU1NSJ2QgSFRNTC5cblx0XHRpZiAob2xkUHJvcHMgIT09IG5ld1Byb3BzICYmICghaXNIeWRyYXRpbmcgfHwgZG9tLmRhdGEgIT09IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHRvbGRQcm9wcyA9IG9sZFZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcblxuXHRcdGxldCBvbGRIdG1sID0gb2xkUHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw7XG5cdFx0bGV0IG5ld0h0bWwgPSBuZXdQcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblxuXHRcdC8vIER1cmluZyBoeWRyYXRpb24sIHByb3BzIGFyZSBub3QgZGlmZmVkIGF0IGFsbCAoaW5jbHVkaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKVxuXHRcdC8vIEBUT0RPIHdlIHNob3VsZCB3YXJuIGluIGRlYnVnIG1vZGUgd2hlbiBwcm9wcyBkb24ndCBtYXRjaCBoZXJlLlxuXHRcdGlmICghaXNIeWRyYXRpbmcpIHtcblx0XHRcdC8vIEJ1dCwgaWYgd2UgYXJlIGluIGEgc2l0dWF0aW9uIHdoZXJlIHdlIGFyZSB1c2luZyBleGlzdGluZyBET00gKGUuZy4gcmVwbGFjZU5vZGUpXG5cdFx0XHQvLyB3ZSBzaG91bGQgcmVhZCB0aGUgZXhpc3RpbmcgRE9NIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZG9tLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRvbGRQcm9wc1tkb20uYXR0cmlidXRlc1tpXS5uYW1lXSA9IGRvbS5hdHRyaWJ1dGVzW2ldLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChuZXdIdG1sIHx8IG9sZEh0bWwpIHtcblx0XHRcdFx0Ly8gQXZvaWQgcmUtYXBwbHlpbmcgdGhlIHNhbWUgJ19faHRtbCcgaWYgaXQgZGlkIG5vdCBjaGFuZ2VkIGJldHdlZW4gcmUtcmVuZGVyXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhbmV3SHRtbCB8fFxuXHRcdFx0XHRcdCgoIW9sZEh0bWwgfHwgbmV3SHRtbC5fX2h0bWwgIT0gb2xkSHRtbC5fX2h0bWwpICYmXG5cdFx0XHRcdFx0XHRuZXdIdG1sLl9faHRtbCAhPT0gZG9tLmlubmVySFRNTClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0ZG9tLmlubmVySFRNTCA9IChuZXdIdG1sICYmIG5ld0h0bWwuX19odG1sKSB8fCAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRpZmZQcm9wcyhkb20sIG5ld1Byb3BzLCBvbGRQcm9wcywgaXNTdmcsIGlzSHlkcmF0aW5nKTtcblxuXHRcdC8vIElmIHRoZSBuZXcgdm5vZGUgZGlkbid0IGhhdmUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIGRpZmYgaXRzIGNoaWxkcmVuXG5cdFx0aWYgKG5ld0h0bWwpIHtcblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpID0gbmV3Vk5vZGUucHJvcHMuY2hpbGRyZW47XG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdGRvbSxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShpKSA/IGkgOiBbaV0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0aXNTdmcgJiYgbm9kZVR5cGUgIT09ICdmb3JlaWduT2JqZWN0Jyxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmdcblx0XHRcdCk7XG5cblx0XHRcdC8vIFJlbW92ZSBjaGlsZHJlbiB0aGF0IGFyZSBub3QgcGFydCBvZiBhbnkgdm5vZGUuXG5cdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldICE9IG51bGwpIHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gKGFzIGFib3ZlLCBkb24ndCBkaWZmIHByb3BzIGR1cmluZyBoeWRyYXRpb24pXG5cdFx0aWYgKCFpc0h5ZHJhdGluZykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQndmFsdWUnIGluIG5ld1Byb3BzICYmXG5cdFx0XHRcdChpID0gbmV3UHJvcHMudmFsdWUpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0Ly8gIzI3NTYgRm9yIHRoZSA8cHJvZ3Jlc3M+LWVsZW1lbnQgdGhlIGluaXRpYWwgdmFsdWUgaXMgMCxcblx0XHRcdFx0Ly8gZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5vdCBiZWluZyBwcmVzZW50LiBXaGVuIHRoZSBhdHRyaWJ1dGVcblx0XHRcdFx0Ly8gaXMgbWlzc2luZyB0aGUgcHJvZ3Jlc3MgYmFyIGlzIHRyZWF0ZWQgYXMgaW5kZXRlcm1pbmF0ZS5cblx0XHRcdFx0Ly8gVG8gZml4IHRoYXQgd2UnbGwgYWx3YXlzIHVwZGF0ZSBpdCB3aGVuIGl0IGlzIDAgZm9yIHByb2dyZXNzIGVsZW1lbnRzXG5cdFx0XHRcdChpICE9PSBkb20udmFsdWUgfHxcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdwcm9ncmVzcycgJiYgIWkpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT09ICdvcHRpb24nICYmIGkgIT09IG9sZFByb3BzLnZhbHVlKSlcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICd2YWx1ZScsIGksIG9sZFByb3BzLnZhbHVlLCBmYWxzZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCdjaGVja2VkJyBpbiBuZXdQcm9wcyAmJlxuXHRcdFx0XHQoaSA9IG5ld1Byb3BzLmNoZWNrZWQpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0aSAhPT0gZG9tLmNoZWNrZWRcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sICdjaGVja2VkJywgaSwgb2xkUHJvcHMuY2hlY2tlZCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UmVmKHJlZiwgdmFsdWUsIHZub2RlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykgcmVmKHZhbHVlKTtcblx0XHRlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHVubW91bnRcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlZOb2RlfSBwYXJlbnRWTm9kZSBUaGUgcGFyZW50IG9mIHRoZSBWTm9kZSB0aGF0XG4gKiBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PT0gdm5vZGUuX2RvbSkge1xuXHRcdFx0YXBwbHlSZWYociwgbnVsbCwgcGFyZW50Vk5vZGUpO1xuXHRcdH1cblx0fVxuXG5cdGlmICgociA9IHZub2RlLl9jb21wb25lbnQpICE9IG51bGwpIHtcblx0XHRpZiAoci5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ci5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHBhcmVudFZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyLmJhc2UgPSByLl9wYXJlbnREb20gPSBudWxsO1xuXHRcdHZub2RlLl9jb21wb25lbnQgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoKHIgPSB2bm9kZS5fY2hpbGRyZW4pKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAocltpXSkge1xuXHRcdFx0XHR1bm1vdW50KFxuXHRcdFx0XHRcdHJbaV0sXG5cdFx0XHRcdFx0cGFyZW50Vk5vZGUsXG5cdFx0XHRcdFx0c2tpcFJlbW92ZSB8fCB0eXBlb2Ygdm5vZGUudHlwZSAhPT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSAmJiB2bm9kZS5fZG9tICE9IG51bGwpIHtcblx0XHRyZW1vdmVOb2RlKHZub2RlLl9kb20pO1xuXHR9XG5cblx0Ly8gTXVzdCBiZSBzZXQgdG8gYHVuZGVmaW5lZGAgdG8gcHJvcGVybHkgY2xlYW4gdXAgYF9uZXh0RG9tYFxuXHQvLyBmb3Igd2hpY2ggYG51bGxgIGlzIGEgdmFsaWQgdmFsdWUuIFNlZSBjb21tZW50IGluIGBjcmVhdGUtZWxlbWVudC5qc2Bcblx0dm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSB2bm9kZS5fbmV4dERvbSA9IHVuZGVmaW5lZDtcbn1cblxuLyoqIFRoZSBgLnJlbmRlcigpYCBtZXRob2QgZm9yIGEgUEZDIGJhY2tpbmcgaW5zdGFuY2UuICovXG5mdW5jdGlvbiBkb1JlbmRlcihwcm9wcywgc3RhdGUsIGNvbnRleHQpIHtcblx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29tbWl0Um9vdCwgZGlmZiB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IHNsaWNlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBSZW5kZXIgYSBQcmVhY3QgdmlydHVhbCBub2RlIGludG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRDaGlsZH0gdm5vZGUgVGhlIHZpcnR1YWwgbm9kZSB0byByZW5kZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudH0gcGFyZW50RG9tIFRoZSBET00gZWxlbWVudCB0b1xuICogcmVuZGVyIGludG9cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0RWxlbWVudCB8IG9iamVjdH0gW3JlcGxhY2VOb2RlXSBPcHRpb25hbDogQXR0ZW1wdCB0byByZS11c2UgYW5cbiAqIGV4aXN0aW5nIERPTSB0cmVlIHJvb3RlZCBhdCBgcmVwbGFjZU5vZGVgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIodm5vZGUsIHBhcmVudERvbSwgcmVwbGFjZU5vZGUpIHtcblx0aWYgKG9wdGlvbnMuX3Jvb3QpIG9wdGlvbnMuX3Jvb3Qodm5vZGUsIHBhcmVudERvbSk7XG5cblx0Ly8gV2UgYWJ1c2UgdGhlIGByZXBsYWNlTm9kZWAgcGFyYW1ldGVyIGluIGBoeWRyYXRlKClgIHRvIHNpZ25hbCBpZiB3ZSBhcmUgaW5cblx0Ly8gaHlkcmF0aW9uIG1vZGUgb3Igbm90IGJ5IHBhc3NpbmcgdGhlIGBoeWRyYXRlYCBmdW5jdGlvbiBpbnN0ZWFkIG9mIGEgRE9NXG5cdC8vIGVsZW1lbnQuLlxuXHRsZXQgaXNIeWRyYXRpbmcgPSB0eXBlb2YgcmVwbGFjZU5vZGUgPT09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IG51bGxcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoXG5cdFx0KCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHxcblx0XHRwYXJlbnREb21cblx0KS5fY2hpbGRyZW4gPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBbdm5vZGVdKTtcblxuXHQvLyBMaXN0IG9mIGVmZmVjdHMgdGhhdCBuZWVkIHRvIGJlIGNhbGxlZCBhZnRlciBkaWZmaW5nLlxuXHRsZXQgY29tbWl0UXVldWUgPSBbXTtcblx0ZGlmZihcblx0XHRwYXJlbnREb20sXG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBuZXcgdm5vZGUgdHJlZSBhbmQgc3RvcmUgaXQgb24gdGhlIERPTSBlbGVtZW50IG9uXG5cdFx0Ly8gb3VyIGN1c3RvbSBgX2NoaWxkcmVuYCBwcm9wZXJ0eS5cblx0XHR2bm9kZSxcblx0XHRvbGRWTm9kZSB8fCBFTVBUWV9PQkosXG5cdFx0RU1QVFlfT0JKLFxuXHRcdHBhcmVudERvbS5vd25lclNWR0VsZW1lbnQgIT09IHVuZGVmaW5lZCxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gW3JlcGxhY2VOb2RlXVxuXHRcdFx0OiBvbGRWTm9kZVxuXHRcdFx0PyBudWxsXG5cdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHQ/IHNsaWNlLmNhbGwocGFyZW50RG9tLmNoaWxkTm9kZXMpXG5cdFx0XHQ6IG51bGwsXG5cdFx0Y29tbWl0UXVldWUsXG5cdFx0IWlzSHlkcmF0aW5nICYmIHJlcGxhY2VOb2RlXG5cdFx0XHQ/IHJlcGxhY2VOb2RlXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHQ/IG9sZFZOb2RlLl9kb21cblx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmdcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG9cbiAqIHVwZGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50RG9tKSB7XG5cdHJlbmRlcih2bm9kZSwgcGFyZW50RG9tLCBoeWRyYXRlKTtcbn1cbiIsImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzIGNoaWxkcmVuLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZpcnR1YWwgRE9NIGVsZW1lbnQgdG8gY2xvbmVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyBBdHRyaWJ1dGVzL3Byb3BzIHRvIGFkZCB3aGVuIGNsb25pbmdcbiAqIEBwYXJhbSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW4+fSByZXN0IEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyB3aWxsIGJlIHVzZWQgYXMgcmVwbGFjZW1lbnQgY2hpbGRyZW4uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZUVsZW1lbnQodm5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuXHRsZXQgbm9ybWFsaXplZFByb3BzID0gYXNzaWduKHt9LCB2bm9kZS5wcm9wcyksXG5cdFx0a2V5LFxuXHRcdHJlZixcblx0XHRpO1xuXHRmb3IgKGkgaW4gcHJvcHMpIHtcblx0XHRpZiAoaSA9PSAna2V5Jykga2V5ID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBpZiAoaSA9PSAncmVmJykgcmVmID0gcHJvcHNbaV07XG5cdFx0ZWxzZSBub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0fVxuXG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuXHRcdG5vcm1hbGl6ZWRQcm9wcy5jaGlsZHJlbiA9XG5cdFx0XHRhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IGNoaWxkcmVuO1xuXHR9XG5cblx0cmV0dXJuIGNyZWF0ZVZOb2RlKFxuXHRcdHZub2RlLnR5cGUsXG5cdFx0bm9ybWFsaXplZFByb3BzLFxuXHRcdGtleSB8fCB2bm9kZS5rZXksXG5cdFx0cmVmIHx8IHZub2RlLnJlZixcblx0XHRudWxsXG5cdCk7XG59XG4iLCIvKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXdcbiAqIHRoZSBlcnJvciB0aGF0IHdhcyBjYXVnaHQgKGV4Y2VwdCBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyXG4gKiBpcyB0aGUgaGlnaGVzdCBwYXJlbnQgdGhhdCB3YXMgYmVpbmcgdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsIGN0b3IsIGhhbmRsZWQ7XG5cblx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRpZiAoKGNvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQpICYmICFjb21wb25lbnQuX3Byb2Nlc3NpbmdFeGNlcHRpb24pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGN0b3IgPSBjb21wb25lbnQuY29uc3RydWN0b3I7XG5cblx0XHRcdFx0aWYgKGN0b3IgJiYgY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zZXRTdGF0ZShjdG9yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikpO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCAhPSBudWxsKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8gfHwge30pO1xuXHRcdFx0XHRcdGhhbmRsZWQgPSBjb21wb25lbnQuX2RpcnR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVGhpcyBpcyBhbiBlcnJvciBib3VuZGFyeS4gTWFyayBpdCBhcyBoYXZpbmcgYmFpbGVkIG91dCwgYW5kIHdoZXRoZXIgaXQgd2FzIG1pZC1oeWRyYXRpb24uXG5cdFx0XHRcdGlmIChoYW5kbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChjb21wb25lbnQuX3BlbmRpbmdFcnJvciA9IGNvbXBvbmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0ZXJyb3IgPSBlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRocm93IGVycm9yO1xufVxuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRJbmRleDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgY3VycmVudENvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5sZXQgcHJldmlvdXNDb21wb25lbnQ7XG5cbi8qKiBAdHlwZSB7bnVtYmVyfSAqL1xubGV0IGN1cnJlbnRIb29rID0gMDtcblxuLyoqIEB0eXBlIHtBcnJheTxpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQ+fSAqL1xubGV0IGFmdGVyUGFpbnRFZmZlY3RzID0gW107XG5cbmxldCBFTVBUWSA9IFtdO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xuXG5jb25zdCBSQUZfVElNRU9VVCA9IDEwMDtcbmxldCBwcmV2UmFmO1xuXG5vcHRpb25zLl9kaWZmID0gdm5vZGUgPT4ge1xuXHRjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcblx0aWYgKG9sZEJlZm9yZURpZmYpIG9sZEJlZm9yZURpZmYodm5vZGUpO1xufTtcblxub3B0aW9ucy5fcmVuZGVyID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQmVmb3JlUmVuZGVyKSBvbGRCZWZvcmVSZW5kZXIodm5vZGUpO1xuXG5cdGN1cnJlbnRDb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRjdXJyZW50SW5kZXggPSAwO1xuXG5cdGNvbnN0IGhvb2tzID0gY3VycmVudENvbXBvbmVudC5fX2hvb2tzO1xuXHRpZiAoaG9va3MpIHtcblx0XHRpZiAocHJldmlvdXNDb21wb25lbnQgPT09IGN1cnJlbnRDb21wb25lbnQpIHtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0Y3VycmVudENvbXBvbmVudC5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRob29rcy5fbGlzdC5mb3JFYWNoKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0aWYgKGhvb2tJdGVtLl9uZXh0VmFsdWUpIHtcblx0XHRcdFx0XHRob29rSXRlbS5fdmFsdWUgPSBob29rSXRlbS5fbmV4dFZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhvb2tJdGVtLl9wZW5kaW5nVmFsdWUgPSBFTVBUWTtcblx0XHRcdFx0aG9va0l0ZW0uX25leHRWYWx1ZSA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncyA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuZm9yRWFjaChpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHR9XG5cdH1cblx0cHJldmlvdXNDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xufTtcblxub3B0aW9ucy5kaWZmZWQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRBZnRlckRpZmYpIG9sZEFmdGVyRGlmZih2bm9kZSk7XG5cblx0Y29uc3QgYyA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGlmIChjICYmIGMuX19ob29rcykge1xuXHRcdGlmIChjLl9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmxlbmd0aCkgYWZ0ZXJQYWludChhZnRlclBhaW50RWZmZWN0cy5wdXNoKGMpKTtcblx0XHRjLl9faG9va3MuX2xpc3QuZm9yRWFjaChob29rSXRlbSA9PiB7XG5cdFx0XHRpZiAoaG9va0l0ZW0uX3BlbmRpbmdBcmdzKSB7XG5cdFx0XHRcdGhvb2tJdGVtLl9hcmdzID0gaG9va0l0ZW0uX3BlbmRpbmdBcmdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nVmFsdWUgIT09IEVNUFRZKSB7XG5cdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9wZW5kaW5nVmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRob29rSXRlbS5fcGVuZGluZ0FyZ3MgPSB1bmRlZmluZWQ7XG5cdFx0XHRob29rSXRlbS5fcGVuZGluZ1ZhbHVlID0gRU1QVFk7XG5cdFx0fSk7XG5cdH1cblx0cHJldmlvdXNDb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50ID0gbnVsbDtcbn07XG5cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5mb3JFYWNoKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LmZvckVhY2gocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goeyBfcGVuZGluZ1ZhbHVlOiBFTVBUWSB9KTtcblx0fVxuXHRyZXR1cm4gaG9va3MuX2xpc3RbaW5kZXhdO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPGFueT59IFtpbml0aWFsU3RhdGVdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcblx0Y3VycmVudEhvb2sgPSAxO1xuXHRyZXR1cm4gdXNlUmVkdWNlcihpbnZva2VPclJldHVybiwgaW5pdGlhbFN0YXRlKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8YW55LCBhbnk+fSByZWR1Y2VyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlN0YXRlVXBkYXRlcjxhbnk+fSBpbml0aWFsU3RhdGVcbiAqIEBwYXJhbSB7KGluaXRpYWxTdGF0ZTogYW55KSA9PiB2b2lkfSBbaW5pdF1cbiAqIEByZXR1cm5zIHtbIGFueSwgKHN0YXRlOiBhbnkpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0Y29uc3QgcHJldlNjdSA9IGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlO1xuXG5cdFx0XHQvLyBUaGlzIFNDVSBoYXMgdGhlIHB1cnBvc2Ugb2YgYmFpbGluZyBvdXQgYWZ0ZXIgcmVwZWF0ZWQgdXBkYXRlc1xuXHRcdFx0Ly8gdG8gc3RhdGVmdWwgaG9va3MuXG5cdFx0XHQvLyB3ZSBzdG9yZSB0aGUgbmV4dCB2YWx1ZSBpbiBfbmV4dFZhbHVlWzBdIGFuZCBrZWVwIGRvaW5nIHRoYXQgZm9yIGFsbFxuXHRcdFx0Ly8gc3RhdGUgc2V0dGVycywgaWYgd2UgaGF2ZSBuZXh0IHN0YXRlcyBhbmRcblx0XHRcdC8vIGFsbCBuZXh0IHN0YXRlcyB3aXRoaW4gYSBjb21wb25lbnQgZW5kIHVwIGJlaW5nIGVxdWFsIHRvIHRoZWlyIG9yaWdpbmFsIHN0YXRlXG5cdFx0XHQvLyB3ZSBhcmUgc2FmZSB0byBiYWlsIG91dCBmb3IgdGhpcyBzcGVjaWZpYyBjb21wb25lbnQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCBzdGF0ZUhvb2tzID0gaG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5maWx0ZXIoXG5cdFx0XHRcdFx0eCA9PiB4Ll9jb21wb25lbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0Y29uc3QgYWxsSG9va3NFbXB0eSA9IHN0YXRlSG9va3MuZXZlcnkoeCA9PiAheC5fbmV4dFZhbHVlKTtcblx0XHRcdFx0Ly8gV2hlbiB3ZSBoYXZlIG5vIHVwZGF0ZWQgaG9va3MgaW4gdGhlIGNvbXBvbmVudCB3ZSBpbnZva2UgdGhlIHByZXZpb3VzIFNDVSBvclxuXHRcdFx0XHQvLyB0cmF2ZXJzZSB0aGUgVkRPTSB0cmVlIGZ1cnRoZXIuXG5cdFx0XHRcdGlmIChhbGxIb29rc0VtcHR5KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZXZTY3UgPyBwcmV2U2N1LmNhbGwodGhpcywgcCwgcywgYykgOiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgY2hlY2sgd2hldGhlciB3ZSBoYXZlIGNvbXBvbmVudHMgd2l0aCBhIG5leHRWYWx1ZSBzZXQgdGhhdFxuXHRcdFx0XHQvLyBoYXZlIHZhbHVlcyB0aGF0IGFyZW4ndCBlcXVhbCB0byBvbmUgYW5vdGhlciB0aGlzIHB1c2hlc1xuXHRcdFx0XHQvLyB1cyB0byB1cGRhdGUgZnVydGhlciBkb3duIHRoZSB0cmVlXG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBmYWxzZTtcblx0XHRcdFx0c3RhdGVIb29rcy5mb3JFYWNoKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gc2hvdWxkVXBkYXRlIHx8IGhvb2tTdGF0ZS5fY29tcG9uZW50LnByb3BzICE9PSBwXG5cdFx0XHRcdFx0PyBwcmV2U2N1XG5cdFx0XHRcdFx0XHQ/IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKVxuXHRcdFx0XHRcdFx0OiB0cnVlXG5cdFx0XHRcdFx0OiBmYWxzZTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGhvb2tTdGF0ZS5fbmV4dFZhbHVlIHx8IGhvb2tTdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3R9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2FueVtdfSBhcmdzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFZmZlY3QoY2FsbGJhY2ssIGFyZ3MpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9ICovXG5cdGNvbnN0IHN0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAzKTtcblx0aWYgKCFvcHRpb25zLl9za2lwRWZmZWN0cyAmJiBhcmdzQ2hhbmdlZChzdGF0ZS5fYXJncywgYXJncykpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSBjYWxsYmFjaztcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXG5cdFx0Y3VycmVudENvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgNCk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5wdXNoKHN0YXRlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuXHRjdXJyZW50SG9vayA9IDU7XG5cdHJldHVybiB1c2VNZW1vKCgpID0+ICh7IGN1cnJlbnQ6IGluaXRpYWxWYWx1ZSB9KSwgW10pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7KCkgPT4gb2JqZWN0fSBjcmVhdGVIYW5kbGVcbiAqIEBwYXJhbSB7YW55W119IGFyZ3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGVIYW5kbGUsIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA2O1xuXHR1c2VMYXlvdXRFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiByZWYgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZWYoY3JlYXRlSGFuZGxlKCkpO1xuXHRcdFx0XHRyZXR1cm4gKCkgPT4gcmVmKG51bGwpO1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geygpID0+IGFueX0gZmFjdG9yeVxuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3BlbmRpbmdWYWx1ZSA9IGZhY3RvcnkoKTtcblx0XHRzdGF0ZS5fcGVuZGluZ0FyZ3MgPSBhcmdzO1xuXHRcdHN0YXRlLl9mYWN0b3J5ID0gZmFjdG9yeTtcblx0XHRyZXR1cm4gc3RhdGUuX3BlbmRpbmdWYWx1ZTtcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICogQHBhcmFtIHthbnlbXX0gYXJnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGFyZ3MpIHtcblx0Y3VycmVudEhvb2sgPSA4O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiBjYWxsYmFjaywgYXJncyk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RDb250ZXh0fSBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250ZXh0KGNvbnRleHQpIHtcblx0Y29uc3QgcHJvdmlkZXIgPSBjdXJyZW50Q29tcG9uZW50LmNvbnRleHRbY29udGV4dC5faWRdO1xuXHQvLyBXZSBjb3VsZCBza2lwIHRoaXMgY2FsbCBoZXJlLCBidXQgdGhhbiB3ZSdkIG5vdCBjYWxsXG5cdC8vIGBvcHRpb25zLl9ob29rYC4gV2UgbmVlZCB0byBkbyB0aGF0IGluIG9yZGVyIHRvIG1ha2Vcblx0Ly8gdGhlIGRldnRvb2xzIGF3YXJlIG9mIHRoaXMgaG9vay5cblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db250ZXh0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgOSk7XG5cdC8vIFRoZSBkZXZ0b29scyBuZWVkcyBhY2Nlc3MgdG8gdGhlIGNvbnRleHQgb2JqZWN0IHRvXG5cdC8vIGJlIGFibGUgdG8gcHVsbCBvZiB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIG5vIHByb3ZpZGVyXG5cdC8vIGlzIHByZXNlbnQgaW4gdGhlIHRyZWUuXG5cdHN0YXRlLl9jb250ZXh0ID0gY29udGV4dDtcblx0aWYgKCFwcm92aWRlcikgcmV0dXJuIGNvbnRleHQuX2RlZmF1bHRWYWx1ZTtcblx0Ly8gVGhpcyBpcyBwcm9iYWJseSBub3Qgc2FmZSB0byBjb252ZXJ0IHRvIFwiIVwiXG5cdGlmIChzdGF0ZS5fdmFsdWUgPT0gbnVsbCkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IHRydWU7XG5cdFx0cHJvdmlkZXIuc3ViKGN1cnJlbnRDb21wb25lbnQpO1xuXHR9XG5cdHJldHVybiBwcm92aWRlci5wcm9wcy52YWx1ZTtcbn1cblxuLyoqXG4gKiBEaXNwbGF5IGEgY3VzdG9tIGxhYmVsIGZvciBhIGN1c3RvbSBob29rIGZvciB0aGUgZGV2dG9vbHMgcGFuZWxcbiAqIEB0eXBlIHs8VD4odmFsdWU6IFQsIGNiPzogKHZhbHVlOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIpID0+IHZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXIpIHtcblx0aWYgKG9wdGlvbnMudXNlRGVidWdWYWx1ZSkge1xuXHRcdG9wdGlvbnMudXNlRGVidWdWYWx1ZShmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogdmFsdWUpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHsoZXJyb3I6IGFueSwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVycm9yQm91bmRhcnkoY2IpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FcnJvckJvdW5kYXJ5SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMTApO1xuXHRjb25zdCBlcnJTdGF0ZSA9IHVzZVN0YXRlKCk7XG5cdHN0YXRlLl92YWx1ZSA9IGNiO1xuXHRpZiAoIWN1cnJlbnRDb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2gpIHtcblx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoID0gKGVyciwgZXJyb3JJbmZvKSA9PiB7XG5cdFx0XHRpZiAoc3RhdGUuX3ZhbHVlKSBzdGF0ZS5fdmFsdWUoZXJyLCBlcnJvckluZm8pO1xuXHRcdFx0ZXJyU3RhdGVbMV0oZXJyKTtcblx0XHR9O1xuXHR9XG5cdHJldHVybiBbXG5cdFx0ZXJyU3RhdGVbMF0sXG5cdFx0KCkgPT4ge1xuXHRcdFx0ZXJyU3RhdGVbMV0odW5kZWZpbmVkKTtcblx0XHR9XG5cdF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwuZCcpLlZOb2RlfSAqL1xuXHRcdGxldCByb290ID0gY3VycmVudENvbXBvbmVudC5fdm5vZGU7XG5cdFx0d2hpbGUgKHJvb3QgIT09IG51bGwgJiYgIXJvb3QuX21hc2sgJiYgcm9vdC5fcGFyZW50ICE9PSBudWxsKSB7XG5cdFx0XHRyb290ID0gcm9vdC5fcGFyZW50O1xuXHRcdH1cblxuXHRcdGxldCBtYXNrID0gcm9vdC5fbWFzayB8fCAocm9vdC5fbWFzayA9IFswLCAwXSk7XG5cdFx0c3RhdGUuX3ZhbHVlID0gJ1AnICsgbWFza1swXSArICctJyArIG1hc2tbMV0rKztcblx0fVxuXG5cdHJldHVybiBzdGF0ZS5fdmFsdWU7XG59XG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRpZiAoIWNvbXBvbmVudC5fcGFyZW50RG9tIHx8ICFjb21wb25lbnQuX19ob29rcykgY29udGludWU7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5mb3JFYWNoKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9faG9va3MuX3BlbmRpbmdFZmZlY3RzLmZvckVhY2goaW52b2tlRWZmZWN0KTtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbXBvbmVudC5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cyA9IFtdO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjb21wb25lbnQuX3Zub2RlKTtcblx0XHR9XG5cdH1cbn1cblxubGV0IEhBU19SQUYgPSB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09ICdmdW5jdGlvbic7XG5cbi8qKlxuICogU2NoZWR1bGUgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBicm93c2VyIGhhcyBhIGNoYW5jZSB0byBwYWludCBhIG5ldyBmcmFtZS5cbiAqIERvIHRoaXMgYnkgY29tYmluaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSAockFGKSArIHNldFRpbWVvdXQgdG8gaW52b2tlIGEgY2FsbGJhY2sgYWZ0ZXJcbiAqIHRoZSBuZXh0IGJyb3dzZXIgZnJhbWUuXG4gKlxuICogQWxzbywgc2NoZWR1bGUgYSB0aW1lb3V0IGluIHBhcmFsbGVsIHRvIHRoZSB0aGUgckFGIHRvIGVuc3VyZSB0aGUgY2FsbGJhY2sgaXMgaW52b2tlZFxuICogZXZlbiBpZiBSQUYgZG9lc24ndCBmaXJlIChmb3IgZXhhbXBsZSBpZiB0aGUgYnJvd3NlciB0YWIgaXMgbm90IHZpc2libGUpXG4gKlxuICogQHBhcmFtIHsoKSA9PiB2b2lkfSBjYWxsYmFja1xuICovXG5mdW5jdGlvbiBhZnRlck5leHRGcmFtZShjYWxsYmFjaykge1xuXHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRpZiAoSEFTX1JBRikgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoZG9uZSwgUkFGX1RJTUVPVVQpO1xuXG5cdGxldCByYWY7XG5cdGlmIChIQVNfUkFGKSB7XG5cdFx0cmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRvbmUpO1xuXHR9XG59XG5cbi8vIE5vdGU6IGlmIHNvbWVvbmUgdXNlZCBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxuLy8gdGhlbiBlZmZlY3RzIHdpbGwgQUxXQVlTIHJ1biBvbiB0aGUgTkVYVCBmcmFtZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IG9uZSwgaW5jdXJyaW5nIGEgfjE2bXMgZGVsYXkuXG4vLyBQZXJoYXBzIHRoaXMgaXMgbm90IHN1Y2ggYSBiaWcgZGVhbC5cbi8qKlxuICogU2NoZWR1bGUgYWZ0ZXJQYWludEVmZmVjdHMgZmx1c2ggYWZ0ZXIgdGhlIGJyb3dzZXIgcGFpbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gbmV3UXVldWVMZW5ndGhcbiAqL1xuZnVuY3Rpb24gYWZ0ZXJQYWludChuZXdRdWV1ZUxlbmd0aCkge1xuXHRpZiAobmV3UXVldWVMZW5ndGggPT09IDEgfHwgcHJldlJhZiAhPT0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcblx0XHRwcmV2UmFmID0gb3B0aW9ucy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0KHByZXZSYWYgfHwgYWZ0ZXJOZXh0RnJhbWUpKGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5FZmZlY3RIb29rU3RhdGV9IGhvb2tcbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKi9cbmZ1bmN0aW9uIGludm9rZUVmZmVjdChob29rKSB7XG5cdC8vIEEgaG9vayBjYWxsIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGhvb2suX2NsZWFudXAgPSBob29rLl92YWx1ZSgpO1xuXHRjdXJyZW50Q29tcG9uZW50ID0gY29tcDtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueVtdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge2FueVtdfSBuZXdBcmdzXG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuZnVuY3Rpb24gaW52b2tlT3JSZXR1cm4oYXJnLCBmKSB7XG5cdHJldHVybiB0eXBlb2YgZiA9PSAnZnVuY3Rpb24nID8gZihhcmcpIDogZjtcbn1cbiIsImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cbi8qKiBUYWtlcyBhIG5ldyB2YWx1ZSBvciBhIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBhIHZhbHVlLCB1bmxpa2UgYE9uUGFzc2l2ZVN0YXRlQ2hhbmdlYCB3aGljaCByZWFjdHMgdG8gdGhvc2UgdXBkYXRlcyAqL1xuZXhwb3J0IHR5cGUgUGFzc2l2ZVN0YXRlVXBkYXRlcjxTLCBSPiA9ICgodmFsdWU6IFMgfCAoKHByZXZTdGF0ZTogUyB8IHVuZGVmaW5lZCkgPT4gUyksIHJlYXNvbj86IFIpID0+IHZvaWQpOy8vW1JdIGV4dGVuZHMgW25ldmVyXT8gKCh2YWx1ZTogUyB8ICgocHJldlN0YXRlOiBTIHwgdW5kZWZpbmVkKSA9PiBTKSwgcmVhc29uPzogUikgPT4gdm9pZCkgOiAoKHZhbHVlOiBTIHwgKChwcmV2U3RhdGU6IFMgfCB1bmRlZmluZWQpID0+IFMpLCByZWFzb246IFIpID0+IHZvaWQpO1xuLyoqIFJlc3BvbmRzIHRvIGEgY2hhbmdlIGluIGEgdmFsdWUsIHVubGlrZSBgUGFzc2l2ZVN0YXRlVXBkYXRlcmAgd2hpY2ggY2F1c2VzIHRoZSB1cGRhdGVzICovXG5leHBvcnQgdHlwZSBPblBhc3NpdmVTdGF0ZUNoYW5nZTxTLCBSPiA9ICgodmFsdWU6IFMsIHByZXZWYWx1ZTogUyB8IHVuZGVmaW5lZCwgcmVhc29uPzogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKTsvL1tSXSBleHRlbmRzIFtuZXZlcl0/ICgodmFsdWU6IFMsIHByZXZWYWx1ZTogUyB8IHVuZGVmaW5lZCwgcmVhc29uPzogUikgPT4gKHZvaWQgfCAoKCkgPT4gdm9pZCkpKSA6ICgodmFsdWU6IFMsIHByZXZWYWx1ZTogUyB8IHVuZGVmaW5lZCwgcmVhc29uOiBSKSA9PiAodm9pZCB8ICgoKSA9PiB2b2lkKSkpO1xuXG5cblxuLyoqXG4gKiBEZWJ1ZyBob29rLlxuICogXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxuICogXG4gKiBFdmVudHVhbGx5LCB3aGVuIHVzZUV2ZW50IGxhbmRzLCB3ZSBob3BlZnVsbHkgd29uJ3QgbmVlZCB0aGlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5zdXJlU3RhYmlsaXR5PFQgZXh0ZW5kcyBhbnlbXT4ocGFyZW50SG9va05hbWU6IHN0cmluZywgLi4udmFsdWVzOiBUKSB7XG4gICAgY29uc3QgaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkgPSB1c2VSZWY8QXJyYXk8VD4+KFtdKTtcbiAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmPEFycmF5PGJvb2xlYW4+PihbXSk7XG4gICAgdXNlSGVscGVyKHZhbHVlcy5sZW5ndGggYXMgYW55LCAtMSk7XG4gICAgdmFsdWVzLmZvckVhY2godXNlSGVscGVyKTtcbiAgICByZXR1cm47XG5cblxuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcjxVIGV4dGVuZHMgVD4odmFsdWU6IFUsIGk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnRbaW5kZXhdID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50W2luZGV4XSAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzaG93bkVycm9yLmN1cnJlbnRbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgaG9vayAke3BhcmVudEhvb2tOYW1lfSByZXF1aXJlcyBzb21lIG9yIGFsbCBvZiBpdHMgYXJndW1lbnRzIHJlbWFpbiBzdGFibGUgYWNyb3NzIGVhY2ggcmVuZGVyOyBwbGVhc2UgY2hlY2sgdGhlICR7aX0taW5kZXhlZCBhcmd1bWVudCAoJHtpID49IDA/IEpTT04uc3RyaW5naWZ5KHZhbHVlc1tpXSkgOiBcInRoZSBudW1iZXIgb2Ygc3VwcG9zZWRseSBzdGFibGUgZWxlbWVudHNcIn0pLmApO1xuICAgICAgICAgICAgICAgIHNob3duRXJyb3IuY3VycmVudFtpbmRleF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VSZW5kZXJpbmcoZjogKCkgPT4gdm9pZCkge1xuICAgIChvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nID8/IHNldFRpbWVvdXQpKGYpO1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gYHVzZVN0YXRlYCwgYnV0IGZvciB2YWx1ZXMgdGhhdCBhcmVuJ3QgXCJyZW5kZXItaW1wb3J0YW50XCIgJm5kYXNoOyB1cGRhdGVzIGRvbid0IGNhdXNlIGEgcmUtcmVuZGVyIGFuZCBzbyB0aGUgdmFsdWUgc2hvdWxkbid0IGJlIHVzZWQgZHVyaW5nIHJlbmRlciAodGhvdWdoIGl0IGNlcnRhaW5seSBjYW4sIGF0IGxlYXN0IGJ5IHJlLXJlbmRlcmluZyBhZ2FpbikuXG4gKiBcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxuICogXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICogXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqIFxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXG4gKiBcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlPFQsIFI+KG9uQ2hhbmdlOiB1bmRlZmluZWQgfCBudWxsIHwgT25QYXNzaXZlU3RhdGVDaGFuZ2U8VCwgUj4sIGdldEluaXRpYWxWYWx1ZT86ICgpID0+IFQsIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nPzogdHlwZW9mIGRlYm91bmNlUmVuZGVyaW5nKTogcmVhZG9ubHkgW2dldFN0YXRlU3RhYmxlOiAoKSA9PiBULCBzZXRTdGF0ZVN0YWJsZTogUGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPl0ge1xuXG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWY8VCB8IHR5cGVvZiBVbnNldD4oVW5zZXQpO1xuICAgIGNvbnN0IHJlYXNvblJlZiA9IHVzZVJlZjxSIHwgdHlwZW9mIFVuc2V0PihVbnNldCk7XG4gICAgY29uc3Qgd2FybmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QgPSB1c2VSZWY8VCB8ICh0eXBlb2YgVW5zZXQpPihVbnNldCk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmPHVuZGVmaW5lZCB8ICgoKSA9PiB2b2lkKT4odW5kZWZpbmVkKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VQYXNzaXZlU3RhdGVcIiwgb25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpO1xuXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcblxuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQhKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgWy8qIGdldEluaXRpYWxWYWx1ZSBhbmQgb25DaGFuZ2UgaW50ZW50aW9uYWxseSBvbWl0dGVkICovXSk7XG5cblxuICAgIGNvbnN0IGdldFZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcblxuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXG4gICAgICAgIC8vIChhbmQgd2Ugd2VyZSBnaXZlbiBhbiBpbml0aWFsIHZhbHVlIHRvIHVzZSlcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBpbml0aWFsIHZhbHVlIGluc3RlYWQgb2Ygbm90aGluZy5cbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxuICAgICAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkISA6IHZhbHVlUmVmLmN1cnJlbnQhKSBhcyBUO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBydW4gb3VyIGVmZmVjdCBhdCBsZWFzdCBvbmNlIG9uIG1vdW50LlxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXG4gICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG5cblxuICAgIH0sIFtdKTtcblxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSB1c2VDYWxsYmFjazxQYXNzaXZlU3RhdGVVcGRhdGVyPFQsIFI+PigoYXJnOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8VCwgUj4+WzBdLCByZWFzb246IFBhcmFtZXRlcnM8UGFzc2l2ZVN0YXRlVXBkYXRlcjxULCBSPj5bMV0pID0+IHtcblxuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuXG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPT09IFVuc2V0ICYmIG5leHRWYWx1ZSAhPT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgcmVxdWVzdCB0byBjaGFuZ2UgdGhpcyB2YWx1ZS5cbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRoZSByZXF1ZXN0IGltbWVkaWF0ZWx5LCB0aGVuIHF1ZXVlIHVwIHRoZSBvbkNoYW5nZSBmdW5jdGlvblxuXG4gICAgICAgICAgICAvLyBTYXZlIG91ciBjdXJyZW50IHZhbHVlIHNvIHRoYXQgd2UgY2FuIGNvbXBhcmUgYWdhaW5zdCBpdCBsYXRlclxuICAgICAgICAgICAgLy8gKGlmIHdlIGZsaXAgYmFjayB0byB0aGlzIHN0YXRlLCB0aGVuIHdlIHdvbid0IHNlbmQgdGhlIG9uQ2hhbmdlIGZ1bmN0aW9uKVxuICAgICAgICAgICAgZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCA9IHZhbHVlUmVmLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHVwZGF0ZSB0aGlzIGhlcmUgKGFzIHdlbGwgYXMgYmVsb3cpIGluIGNhc2UgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgaW52b2tlcyB0aGlzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgcmVhc29uUmVmLmN1cnJlbnQgPSByZWFzb24gYXMgUjtcblxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRSZWFzb24gPSByZWFzb25SZWYuY3VycmVudCEgYXMgUjtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RGVwID0gdmFsdWVSZWYuY3VycmVudCEgYXMgVDtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2RGVwID0gZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudDtcbiAgICAgICAgICAgICAgICBpZiAoZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QuY3VycmVudCAhPSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGwgYW55IHJlZ2lzdGVyZWQgY2xlYW51cCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKG5leHREZXAsIHByZXZEZXAgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogcHJldkRlcCwgbmV4dFJlYXNvbikgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0RGVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbm9ybWFsbHkgY2FsbCBnZXRWYWx1ZSBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFdlJ3ZlIGZpbmlzaGVkIHdpdGggZXZlcnl0aGluZywgc28gbWFyayB1cyBhcyBiZWluZyBvbiBhIGNsZWFuIHNsYXRlIGFnYWluLlxuICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lUb0NvbXBhcmVBZ2FpbnN0LmN1cnJlbnQgPSBVbnNldDtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIGltbWVkaWF0ZWx5LlxuICAgICAgICAvLyBUaGlzIHdpbGwgYmUgY2hlY2tlZCBhZ2FpbnN0IHByZXZEZXAgdG8gc2VlIGlmIHdlIHNob3VsZCBhY3R1YWxseSBjYWxsIG9uQ2hhbmdlXG4gICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG5cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV0gYXMgY29uc3Q7XG59XG5cbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XG5cbi8vIEVhc3kgY29uc3RhbnRzIGZvciBnZXRJbml0aWFsVmFsdWVcbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5UcnVlKCkgeyByZXR1cm4gdHJ1ZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybkZhbHNlKCkgeyByZXR1cm4gZmFsc2U7IH1cbmV4cG9ydCBmdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblVuZGVmaW5lZCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblplcm8oKSB7IHJldHVybiAwOyB9XG5cbi8qKiBcbiAqIEFuIGFsdGVybmF0aXZlIHRvIHVzZSBmb3IgYGN1c3RvbURlYm91bmNlUmVuZGVyaW5nYCB0aGF0IGNhdXNlcyBgdXNlUGFzc2l2ZVN0YXRlYCB0byBydW4gY2hhbmdlcyB3aXRob3V0IHdhaXRpbmcgYSB0aWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuSW1tZWRpYXRlbHkoZjogKCkgPT4gdm9pZCkgeyBmKCk7IH0iLCJcbmltcG9ydCB7IENvbXBvbmVudCwgb3B0aW9ucywgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBFZmZlY3RDYWxsYmFjaywgSW5wdXRzLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuXG5cblxuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcblxuZnVuY3Rpb24gYmFzZTY0KHZhbHVlOiBudW1iZXIpIHtcbiAgICByZXR1cm4gVGFibGVbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tNjRCaXRzKCkge1xuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV0gYXMgY29uc3Q7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbWx5LWdlbmVyYXRlZCBJRCB3aXRoIGFuIG9wdGlvbmFsIHByZWZpeC5cbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxuICogSURzIHRoYXQgYXJlIG5vdCB2YWxpZCB1bmRlciBIVE1MNCBtYXkgYmUgZ2VuZXJhdGVkLiBPaCBuby5cbiAqIFxuICogXG4gKiAoVGhpcyBpcyBoZXJlLCBpbiB0aGlzIHBhcnRpY3VsYXIgZmlsZSwgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gKiB3aXRob3V0IGFsc28gbWFraW5nIGEgdXRpbGl0aWVzIGZpbGUuXG4gKiBPbmNlIHdlIGNhbiByZW1vdmUgdGhpcyBob29rLCB3ZSBjYW4gcHV0IHRoaXMgZnVuY3Rpb24gYmFjayB3aXRoIHVzZVJhbmRvbUlkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXg/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cblxuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwPHN0cmluZywgSW5wdXRzIHwgdW5kZWZpbmVkPigpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwPHN0cmluZywgeyBlZmZlY3Q6IEVmZmVjdENhbGxiYWNrLCBpbnB1dHM/OiBJbnB1dHMsIGNsZWFudXA6IG51bGwgfCB1bmRlZmluZWQgfCB2b2lkIHwgKCgpID0+IHZvaWQpIH0+KCk7XG5cblxuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbi8vXG4vLyAuLi5cbi8vIFdlbGwsIHVzZUV2ZW50IG9yIHdoYXRldmVyIGlzIGZpbmFsbHksIGZpbmFsbHkgNCB5ZWFycyBsYXRlciBmaW5hbGx5IGhlcmVcbi8vIHdoaWNoIGlzIGNvb2wgYW5kIG1lYW5zIHdlIHdvbid0IG5lZWQgdGhpcyBhdCBhbGwgc29vbi5cbi8vIFNvIGZvciBub3cgd2UnbGwgc3RpY2sgd2l0aCBkaWZmIHRvIHByZXZlbnQgYW55IHdlaXJkbmVzcyB3aXRoXG4vLyBjb21taXQgYmVpbmcgcHJpdmF0ZSBhbmQgYWxsLlxuY29uc3QgY29tbWl0TmFtZSA9IFwiZGlmZmVkXCI7XG5cbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXSBhcyAodm5vZGU6IFZOb2RlLCBjb21taXRRdWV1ZTogQ29tcG9uZW50W10pID0+IHZvaWQ7XG5jb25zdCBuZXdDb21taXQ6IHR5cGVvZiBvcmlnaW5hbENvbW1pdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4oLi4uYXJncyk7XG59XG5vcHRpb25zW2NvbW1pdE5hbWVdID0gbmV3Q29tbWl0IGFzIG5ldmVyXG5cbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICogXG4gKiBFdmVyeSByZW5kZXIsIHdlIHNlbmQgdGhlIGFyZ3VtZW50cyB0byBiZSBldmFsdWF0ZWQgYWZ0ZXIgZGlmZmluZyBoYXMgY29tcGxldGVkLFxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXG4gKiBcbiAqIEBwYXJhbSBlZmZlY3QgXG4gKiBAcGFyYW0gaW5wdXRzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQmVmb3JlTGF5b3V0RWZmZWN0KGVmZmVjdDogRWZmZWN0Q2FsbGJhY2sgfCBudWxsLCBpbnB1dHM/OiBJbnB1dHMpIHtcblxuICAgIC8qKCgpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IHVzZVJlZjx2b2lkIHwgKCgpID0+IHZvaWQpIHwgbnVsbD4obnVsbCk7XG4gICAgICAgIGNvbnN0IHByZXZBcmdzUmVmID0gdXNlUmVmPElucHV0cz4obnVsbCEpO1xuICAgICAgICBpZiAoYXJnc0NoYW5nZWQoaW5wdXRzLCBwcmV2QXJnc1JlZi5jdXJyZW50KSkge1xuICAgICAgICAgICAgcHJldkFyZ3NSZWYuY3VycmVudCA9IGlucHV0cyE7XG4gICAgICAgICAgICBpZiAoY2xlYW51cC5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCgpO1xuICAgICAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gZWZmZWN0KCk7XG4gICAgICAgIH1cbiAgICB9KSgpOyovXG5cbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICBpZiAoZWZmZWN0KVxuICAgICAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XG4gICAgZWxzZVxuICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfSwgW2lkXSlcbn1cblxuZnVuY3Rpb24gYXJnc0NoYW5nZWQob2xkQXJncz86IElucHV0cywgbmV3QXJncz86IElucHV0cyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIShcbiAgICAgICAgIW9sZEFyZ3MgfHxcbiAgICAgICAgb2xkQXJncy5sZW5ndGggIT09IG5ld0FyZ3M/Lmxlbmd0aCB8fFxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKVxuICAgICk7XG59IiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUJlZm9yZUxheW91dEVmZmVjdCB9IGZyb20gXCIuL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdFwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5IH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcblxuY29uc3QgVW5zZXQgPSBTeW1ib2woXCJ1bnNldFwiKTtcblxuXG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgXG4gKiBpbnNpZGUgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpbmNsdWRpbmcgaXQgaW4gdGhlIGRlcGVuZGVuY3kgYXJyYXkuXG4gKiBcbiAqIFRoaXMgdXNlcyBgb3B0aW9ucy5kaWZmZWRgIGluIG9yZGVyIHRvIHJ1biBiZWZvcmUgZXZlcnl0aGluZywgZXZlblxuICogcmVmIGFzc2lnbm1lbnQuIFRoaXMgbWVhbnMgdGhpcyBnZXR0ZXIgaXMgc2FmZSB0byB1c2UgYW55d2hlcmUgKioqZXhjZXB0IHRoZSByZW5kZXIgcGhhc2UqKiouXG4gKiBcbiAqIEBwYXJhbSB2YWx1ZSBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlR2V0dGVyPFQ+KHZhbHVlOiBUKSB7XG5cbiAgICBjb25zdCByZWYgPSB1c2VSZWY8VD4oVW5zZXQgYXMgdW5rbm93biBhcyBUKTtcbiAgICB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoKCgpID0+IHsgcmVmLmN1cnJlbnQgPSB2YWx1ZTsgfSksIFt2YWx1ZV0pO1xuXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50IGFzIHVua25vd24gPT09IFVuc2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHJldHJpZXZlZCBmcm9tIHVzZVN0YWJsZUdldHRlcigpIGNhbm5vdCBiZSBjYWxsZWQgZHVyaW5nIHJlbmRlci4nKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICB9LCBbXSk7XG59XG5cblxuLyoqXG4gKiBMaWtlIGB1c2VTdGFibGVHZXR0ZXJgLCBidXQgKioqcmVxdWlyZXMqKiogdGhhdCBldmVyeXRoaW5nIGluIHRoZSBvYmplY3QgaXMgYWxzbyBzdGFibGUsXG4gKiBhbmQgaW4gdHVybiByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGl0c2VsZiBpcyBzdGFibGUuXG4gKiBAcGFyYW0gdCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlT2JqZWN0PFQgZXh0ZW5kcyB7fT4odDogVCk6IFQge1xuICAgIGNvbnN0IGUgPSBPYmplY3QuZW50cmllcyh0KTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VTdGFibGVPYmplY3RcIiwgZS5sZW5ndGgsIC4uLmUubWFwKChbX2ssIHZdKSA9PiB2KSk7XG4gICAgcmV0dXJuIHVzZVJlZih0KS5jdXJyZW50O1xufVxuXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayBhcyB1c2VDYWxsYmFja05hdGl2ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVHZXR0ZXIgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuXG5cbi8vY29uc3QgX0lTX1NUQUJMRV9HRVRURVIgPSBTeW1ib2woXCJTVEFCTEVcIik7XG5leHBvcnQgdHlwZSBTdGFibGU8VD4gPSBUOy8vICYgeyBbX1NUQUJMRV06IHRydWUgfTtcblxuLyoqXG4gKiBXZSBrZWVwIHRyYWNrIG9mIHdoaWNoIGNhbGxiYWNrcyBhcmUgc3RhYmxlIHdpdGggYSBXZWFrTWFwIGluc3RlYWQgb2YsIHNheSwgYSBzeW1ib2wgYmVjYXVzZVxuICogYHVzZUNhbGxiYWNrYCB3aWxsIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQncyBzdGFibGUgYWNyb3NzICphbGwqIHJlbmRlcnMsIG1lYW5pbmdcbiAqIHdlIGNhbid0IHVzZSBvdXIgZnVubnkgXCJgaWZgIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIGl0IGRvZXNuJ3QgYnJlYWsgdGhlIHJ1bGVzIG9mIGhvb2tzXCIgdHJpY2sgdGhlbi5cbiAqL1xuY29uc3QgbWFwID0gbmV3IFdlYWtNYXA8RnVuY3Rpb24sIGJvb2xlYW4+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0YWJsZUdldHRlcjxUIGV4dGVuZHMgRnVuY3Rpb24+KG9iajogVCk6IG9iaiBpcyBTdGFibGU8VD4ge1xuICAgIHJldHVybiAobWFwLmdldChvYmopID8/IGZhbHNlKTtcbn1cbmZ1bmN0aW9uIHNldElzU3RhYmxlR2V0dGVyPFQgZXh0ZW5kcyAoLi4uX2FyZ3M6IGFueVtdKSA9PiBhbnk+KG9iajogVCk6IFN0YWJsZTxUPiB7XG4gICAgbWFwLnNldChvYmosIHRydWUpO1xuICAgIHJldHVybiBvYmo7XG59XG5cblxuLyoqXG4gKiBBbHRlcm5hdGUgdXNlQ2FsbGJhY2soKSB3aGljaCBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSAod3JhcHBlZCkgZnVuY3Rpb24gcmVmZXJlbmNlXG4gKiBzbyB0aGF0IGl0IGNhbiBiZSBleGNsdWRlZCBmcm9tIHRoZSBkZXBlbmRlbmN5IGFycmF5cyBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcy5cbiAqIFxuICogSW4gZ2VuZXJhbCwganVzdCBwYXNzIHRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBiZSBzdGFibGUgKGJ1dCB5b3UgY2FuJ3QgdXNlIGl0IGR1cmluZyByZW5kZXIsXG4gKiBzbyBiZSBjYXJlZnVsISkuICBBbHRlcm5hdGl2ZWx5LCBpZiB5b3UgbmVlZCBhIHN0YWJsZSBjYWxsYmFjayB0aGF0ICoqY2FuKiogYmUgdXNlZFxuICogZHVyaW5nIHJlbmRlciwgcGFzcyBhbiBlbXB0eSBkZXBlbmRlbmN5IGFycmF5IGFuZCBpdCdsbCBhY3QgbGlrZSBgdXNlQ2FsbGJhY2tgIHdpdGggYW5cbiAqIGVtcHR5IGRlcGVuZGVuY3kgYXJyYXksIGJ1dCB3aXRoIHRoZSBhc3NvY2lhdGVkIHN0YWJsZSB0eXBpbmcuIEluIHRoaXMgY2FzZSwgeW91ICoqKm11c3QqKiogZW5zdXJlIHRoYXQgaXRcbiAqIHRydWx5IGhhcyBubyBkZXBlbmRlbmNpZXMvb25seSBzdGFibGUgZGVwZW5kZW5jaWVzISFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUNhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbiB8IG51bGwgfCB1bmRlZmluZWQ+KGZuOiBOb25OdWxsYWJsZTxUPiwgbm9EZXBzPzogW10gfCBudWxsIHwgdW5kZWZpbmVkKTogU3RhYmxlPE5vbk51bGxhYmxlPFQ+PiB7XG4gICAgdHlwZSBVID0gKE5vbk51bGxhYmxlPFQ+ICYgKCguLi5hcmdzOiBhbnkpID0+IGFueSkpO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVN0YWJsZUNhbGxiYWNrXCIsIG5vRGVwcyA9PSBudWxsLCBub0RlcHM/Lmxlbmd0aCwgaXNTdGFibGVHZXR0ZXI8VT4oZm4gYXMgVSkpO1xuICAgIGlmIChpc1N0YWJsZUdldHRlcihmbikpXG4gICAgICAgIHJldHVybiBmbjtcblxuICAgIGlmIChub0RlcHMgPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXI8VT4oZm4pO1xuICAgICAgICByZXR1cm4gc2V0SXNTdGFibGVHZXR0ZXIodXNlQ2FsbGJhY2tOYXRpdmU8VT4oKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudENhbGxiYWNrR2V0dGVyKCkoLi4uYXJncyk7XG4gICAgICAgIH0pIGFzIFUsIFtdKSk7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG5vRGVwcy5sZW5ndGggPT09IDApO1xuICAgICAgICByZXR1cm4gc2V0SXNTdGFibGVHZXR0ZXIodXNlQ2FsbGJhY2tOYXRpdmU8VT4oZm4sIFtdKSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2hpbGRyZW5cIl0sIHJoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wiY2hpbGRyZW5cIl0pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJjaGlsZHJlblwiXSB7XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbnR5cGUgQyA9IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEV2ZW50VGFyZ2V0PltcImNsYXNzTmFtZVwiXTtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKiBcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIEEgc3RyaW5nIHJlcHJlc2VudGluZyBhbGwgY29tYmluZWQgY2xhc3NlcyBmcm9tIGJvdGggYXJndW1lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHNDbGFzczogQywgbGhzQ2xhc3NOYW1lOiBDLCByaHNDbGFzczogQywgcmhzQ2xhc3NOYW1lOiBDKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblxuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cblxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnN0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBjb25zdCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pXG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGgsIFJlZiwgUmVmT2JqZWN0IH0gZnJvbSBcInByZWFjdFwiO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NSZWY8VD4oaW5zdGFuY2U6IFQgfCBudWxsLCByZWY6IFJlZjxUPiB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIHJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJlZiAhPSBudWxsKSB7XG4gICAgICAgIChyZWYgYXMgUmVmT2JqZWN0PFQgfCBudWxsPikuY3VycmVudCA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZGVidWdnZXIgKi9cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlLCBcIlVua25vd24gcmVmIHR5cGUgZm91bmQgdGhhdCB3YXMgbmVpdGhlciBhIFJlZkNhbGxiYWNrIG5vciBhIFJlZk9iamVjdFwiKTtcbiAgICB9XG59XG5cblxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHMgXG4gKiBAcGFyYW0gcmhzIFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzPEUgZXh0ZW5kcyBFdmVudFRhcmdldD4ocmhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltcInJlZlwiXSwgbGhzOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltcInJlZlwiXSkge1xuICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkITtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocyE7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHMhO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY29tYmluZWQoY3VycmVudDogRSB8IG51bGwpIHtcbiAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5cbmZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGU6IHN0cmluZyk6IGguSlNYLkNTU1Byb3BlcnRpZXMge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKSBhcyB1bmtub3duIGFzIGguSlNYLkNTU1Byb3BlcnRpZXM7XG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqIFxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XG4gKiBAcGFyYW0gb2JqIFRoZSBDU1MgcHJvcGVydGllcyB5b3Ugd2FudCBhZGRlZCB0byB0aGUgdXNlci1naXZlbiBzdHlsZVxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkU3R5bGVzKGxoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wic3R5bGVcIl0sIHJoczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RXZlbnRUYXJnZXQ+W1wic3R5bGVcIl0pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFdmVudFRhcmdldD5bXCJzdHlsZVwiXSB7XG5cbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHMgJiYgIXJocylcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIGlmICghbGhzICYmIHJocylcbiAgICAgICAgICAgIHJldHVybiByaHM7XG5cbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxuICAgICAgICBpZiAobGhzICYmIHJocykge1xuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHN0eWxlU3RyaW5nVG9PYmplY3QobGhzIGFzIHN0cmluZyksIHJocykgYXMgaC5KU1guQ1NTUHJvcGVydGllcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHN0eWxlU3RyaW5nVG9PYmplY3QocmhzIGFzIHN0cmluZykpIGFzIGguSlNYLkNTU1Byb3BlcnRpZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzfTske3JocyA/PyBcIlwifWAgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gICAgfVxuXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi4obGhzID8/IHt9KSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxuICAgICAgICAuLi4ocmhzID8/IHt9KSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXG4gICAgfSBhcyB1bmtub3duIGFzIGguSlNYLkNTU1Byb3BlcnRpZXNcbn1cblxuIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSB9IGZyb20gXCIuLi9wcmVhY3QtZXh0ZW5zaW9ucy91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xuXG5sZXQgbG9nID0gY29uc29sZS53YXJuO1xuXG4vKlxudHlwZSBJc0VtcHR5T2JqZWN0PFQ+ID0gW2tleW9mIFRdIGV4dGVuZHMgW25ldmVyXT8gdHJ1ZSA6IGZhbHNlO1xuXG5leHBvcnQgdHlwZSBFeHRyYWN0ZWRQcm9wczxPIGV4dGVuZHMge30+ID0geyBbSyBpbiBrZXlvZiBPXTogUGljazxPW0tdLCAoXCJwcm9wc1N0YWJsZVwiIHwgXCJwcm9wc1Vuc3RhYmxlXCIpICYga2V5b2YgT1tLXT4gfTtcblxuY29uc3QgbzogRXh0cmFjdGVkUHJvcHM8VXNlR3JpZE5hdmlnYXRpb25Sb3dSZXR1cm5UeXBlPGFueSwgYW55Pj4gPSB7XG4gICAgYXNDaGlsZFJvd09mVGFibGU6IHtcblxuICAgIH0sXG4gICAgYXNQYXJlbnRSb3dPZkNlbGxzOiB7fVxufSovXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMb2dnaW5nUHJvcENvbmZsaWN0cyhsb2cyOiB0eXBlb2YgY29uc29sZVtcImxvZ1wiXSkge1xuICAgIGxvZyA9IGxvZzJcbn1cblxuXG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICogXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIGxoczIgXG4gKiBAcGFyYW0gcmhzMiBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHM8RSBleHRlbmRzIEV2ZW50VGFyZ2V0PiguLi5hbGxQcm9wczogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT5bXSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZU1lcmdlZFByb3BzXCIsIGFsbFByb3BzLmxlbmd0aCk7XG4gICAgbGV0IHJldDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4gPSB7fTtcbiAgICBmb3IgKGxldCBuZXh0UHJvcHMgb2YgYWxsUHJvcHMpIHtcbiAgICAgICAgcmV0ID0gdXNlTWVyZ2VkUHJvcHMyPEU+KHJldCwgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufVxuXG5jb25zdCBrbm93bnMgPSBuZXcgU2V0PHN0cmluZz4oW1wiY2hpbGRyZW5cIiwgXCJyZWZcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGFzc1wiLCBcInN0eWxlXCJdKVxuXG5mdW5jdGlvbiBtZXJnZVVua25vd24oa2V5OiBzdHJpbmcsIGxoc1ZhbHVlOiB1bmtub3duLCByaHNWYWx1ZTogdW5rbm93bikge1xuXG4gICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlIGFzIG5ldmVyLCByaHNWYWx1ZSBhcyBuZXZlcik7XG4gICAgICAgIHJldHVybiBtZXJnZWQgYXMgbmV2ZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGxoc1ZhbHVlIGFzIG5ldmVyO1xuICAgICAgICBlbHNlIGlmICgocmhzVmFsdWUgYXMgYW55KSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICByZXR1cm4gcmhzVmFsdWUgYXMgbmV2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICBsb2c/LihgVGhlIHByb3AgXCIke2tleX1cIiBjYW5ub3Qgc2ltdWx0YW5lb3VzbHkgYmUgdGhlIHZhbHVlcyAke2xoc1ZhbHVlfSBhbmQgJHtyaHNWYWx1ZX0uIE9uZSBtdXN0IGJlIGNob3NlbiBvdXRzaWRlIG9mIHVzZU1lcmdlZFByb3BzLmApO1xuICAgICAgICAgICAgcmV0dXJuIHJoc1ZhbHVlIGFzIG5ldmVyXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uLlxuICogXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgbW9zdCBjb21tb25seSBjYWxsZWQgZnVuY3Rpb25zIGluIHRoaXMgYW5kIGNvbnN1bWVyIGxpYnJhcmllcyxcbiAqIHNvIGl0IHRyYWRlcyBhIGJpdCBvZiByZWFkYWJpbGl0eSBmb3Igc3BlZWQgKGkuZS4gd2UgZG9uJ3QgZGVjb21wb3NlIG9iamVjdHMgYW5kIGp1c3QgZG8gcmVndWxhciBwcm9wZXJ0eSBhY2Nlc3MsIGl0ZXJhdGUgd2l0aCBgZm9yLi4uaW5gLCBpbnN0ZWFkIG9mIGBPYmplY3QuZW50cmllc2AsIGV0Yy4pXG4gKi9cbmZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzMjxFIGV4dGVuZHMgRXZlbnRUYXJnZXQ+KGxoc0FsbDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4sIHJoc0FsbDogaC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiB7XG5cbiAgICBcbiAgICBjb25zdCByZXQ6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+ID0ge1xuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnM8RT4obGhzQWxsLnJlZiwgcmhzQWxsLnJlZiksXG4gICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzQWxsLnN0eWxlLCByaHNBbGwuc3R5bGUpLFxuICAgICAgICBjbGFzc05hbWU6IHVzZU1lcmdlZENsYXNzZXMobGhzQWxsW1wiY2xhc3NcIl0sIGxoc0FsbC5jbGFzc05hbWUsIHJoc0FsbFtcImNsYXNzXCJdLCByaHNBbGwuY2xhc3NOYW1lKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbC5jaGlsZHJlbiwgcmhzQWxsLmNoaWxkcmVuKSxcbiAgICB9IGFzIGFueTtcblxuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0W1wiY2xhc3NcIl0gPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldFtcImNsYXNzXCJdO1xuICAgIGlmIChyZXQuY2hpbGRyZW4gPT09IHVuZGVmaW5lZCkgZGVsZXRlIHJldC5jaGlsZHJlbjtcblxuICAgIGZvciAoY29uc3QgbGhzS2V5VSBpbiBsaHNBbGwpIHtcbiAgICAgICAgY29uc3QgbGhzS2V5ID0gbGhzS2V5VSBhcyBrZXlvZiB0eXBlb2YgbGhzQWxsO1xuICAgICAgICBpZiAoa25vd25zLmhhcyhsaHNLZXkpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHJldFtsaHNLZXldID0gbGhzQWxsW2xoc0tleV07XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCByaHNLZXlVIGluIHJoc0FsbCkge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVIGFzIGtleW9mIHR5cGVvZiByaHNBbGw7XG4gICAgICAgIGlmIChrbm93bnMuaGFzKHJoc0tleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZVVua25vd24ocmhzS2V5LCByZXRbcmhzS2V5XSwgcmhzQWxsW3Joc0tleV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG5cbn1cblxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnM8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCBVIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KGxoczogVCB8IG51bGwgfCB1bmRlZmluZWQsIHJoczogVSB8IG51bGwgfCB1bmRlZmluZWQpIHtcblxuICAgIGlmICghbGhzKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmICghcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuXG4gICAgcmV0dXJuICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgICAgIGNvbnN0IGx2ID0gbGhzKC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBydiA9IHJocyguLi5hcmdzKTtcblxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cblxuLypcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNDogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xuICAgIC8vY29uc3QgaWQyOiBaaXBTaW5nbGU8c3RyaW5nIHwgdW5kZWZpbmVkLCBzdHJpbmcgfCB1bmRlZmluZWQ+ID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcblxuICAgIHR5cGUgTTEgPSBHZW5lcmljR2V0PFAsIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XG4gICAgY29uc3QgbTI6IE0xID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTM6IE0xID0gMDtcblxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXG4gICAgY29uc3QgbTY6IE0yID0gMDtcblxuICAgIGNvbnN0IHAxOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDQ6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7fT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7fSk7XG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDcgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuXG5cbiAgICBwMS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHAzLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDYuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDYuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA1LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxuICAgIGNvbnN0IHIxYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAxKTtcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xuICAgIGNvbnN0IHIyYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAyKTtcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xuICAgIGNvbnN0IHI0YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA0KTtcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xuICAgIGNvbnN0IHI1YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA1KTtcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xuICAgIGNvbnN0IHI3YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA3KTtcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XG5cblxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHIzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByNGEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjdiLmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjVhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjZiLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxufVxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxuKi8iLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IE9uUGFzc2l2ZVN0YXRlQ2hhbmdlLCByZXR1cm5OdWxsLCBydW5JbW1lZGlhdGVseSwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi4vcHJlYWN0LWV4dGVuc2lvbnMvdXNlLXBhc3NpdmUtc3RhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxUIGV4dGVuZHMgRXZlbnRUYXJnZXQ+IHtcbiAgICByZWZFbGVtZW50UmV0dXJuOiB7XG4gICAgICAgIC8qKiAqKlNUQUJMRSoqICovXG4gICAgICAgIGdldEVsZW1lbnQoKTogVCB8IG51bGw7XG4gICAgICAgIHByb3BzU3RhYmxlOiBoLkpTWC5IVE1MQXR0cmlidXRlczxUPjtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlUmVmRWxlbWVudFBhcmFtZXRlcnM8VD4ge1xuICAgIC8qKlxuICAgICAqIEZvciB0aGUgc2FrZSBvZiBjb252ZW5pZW5jZSxcbiAgICAgKiB0aGlzIG9uZSBpcyBvcHRpb25hbCwgc2luY2UgdXNpbmcgdGhpcyBob29rIGlzIHNvIGNvbW1vbixcbiAgICAgKiBidXQgdXNpbmcgaXRzIHBhcmFtZXRlciBvcHRpb25zIGlzIHNvIHVuY29tbW9uLCBhbmQgaXQnc1xuICAgICAqIGFic2Vuc2UgaXNuJ3QgdXN1YWxseSBiZWNhdXNlIGl0IHdhcyBmb3Jnb3R0ZW4sIGl0J3MgYmVjYXVzZVxuICAgICAqIGl0IGRvZXNuJ3QgbWF0dGVyLlxuICAgICAqL1xuICAgIHJlZkVsZW1lbnRQYXJhbWV0ZXJzPzoge1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U/OiBPblBhc3NpdmVTdGF0ZUNoYW5nZTxUIHwgbnVsbCwgbmV2ZXI+O1xuICAgICAgICBvbk1vdW50PzogKGVsZW1lbnQ6IFQpID0+IHZvaWQ7XG4gICAgICAgIG9uVW5tb3VudD86IChlbGVtZW50OiBUKSA9PiB2b2lkO1xuICAgIH1cbn1cblxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnRQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4ocjogVXNlUmVmRWxlbWVudFJldHVyblR5cGU8RT4sIC4uLm90aGVyUHJvcHM6IGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+W10pOiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPltdIHtcbiAgICByZXR1cm4gW3IucmVmRWxlbWVudFJldHVybi5wcm9wc1N0YWJsZSwgLi4ub3RoZXJQcm9wc107XG59Ki9cblxuLyoqXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCwgXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqIFxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKiBcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50PFQgZXh0ZW5kcyBFdmVudFRhcmdldD4oYXJnczogVXNlUmVmRWxlbWVudFBhcmFtZXRlcnM8VD4pOiBVc2VSZWZFbGVtZW50UmV0dXJuVHlwZTxUPiB7XG4gICAgY29uc3QgeyBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCB9ID0gKGFyZ3MucmVmRWxlbWVudFBhcmFtZXRlcnMgfHwge30pO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVJlZkVsZW1lbnRcIiwgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQpO1xuXG4gICAgLy8gQ2FsbGVkIChpbmRpcmVjdGx5KSBieSB0aGUgcmVmIHRoYXQgdGhlIGVsZW1lbnQgcmVjZWl2ZXMuXG4gICAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrPE9uUGFzc2l2ZVN0YXRlQ2hhbmdlPFQgfCBudWxsLCBuZXZlcj4+KChlLCBwcmV2VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG9uRWxlbWVudENoYW5nZT8uKGUsIHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChwcmV2VmFsdWUpXG4gICAgICAgICAgICBvblVubW91bnQ/LihwcmV2VmFsdWUhKTtcblxuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIG9uTW91bnQ/LihlKTtcblxuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlPFQgfCBudWxsLCBuZXZlcj4oaGFuZGxlciwgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHkpO1xuICAgIGNvbnN0IHByb3BzU3RhYmxlID0gdXNlUmVmPGguSlNYLkhUTUxBdHRyaWJ1dGVzPFQ+Pih7IHJlZjogc2V0RWxlbWVudCB9KTtcblxuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICByZWZFbGVtZW50UmV0dXJuOiB7XG4gICAgICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICAgICAgcHJvcHNTdGFibGU6IHByb3BzU3RhYmxlLmN1cnJlbnRcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gXCJsb2Rhc2gtZXNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGRlYm91bmNlUmVuZGVyaW5nLCBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgUGFzc2l2ZVN0YXRlVXBkYXRlciwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlU3RhYmxlQ2FsbGJhY2sgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWNhbGxiYWNrXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVPYmplY3QgfSBmcm9tIFwiLi91c2Utc3RhYmxlLWdldHRlclwiO1xuXG4vKipcbiAqIFJlbWluZGVyIG9mIG9yZGVyIG9mIGV4ZWN1dGlvbjpcbiAqIFxuICogKiAodHJlZSBtb3VudHMpXG4gKiAqIFBhcmVudCByZW5kZXJzXG4gKiAqIENoaWxkcmVuIHJlbmRlclxuICogKiBDaGlsZHJlbiByZWNlaXZlIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqICogUGFyZW50IHJlY2VpdmVzIHJlZiAoaWYgYXBwbGljYWJsZSlcbiAqICogQ2hpbGRyZW4gcnVuIGVmZmVjdHNcbiAqICogUGFyZW50IHJ1bnMgZWZmZWN0c1xuICogXG4gKiAqICh0cmVlIHVubW91bnRzKVxuICogKiBQYXJlbnQgcnVucyBlZmZlY3QtY2xlYW51cFxuICogKiBQYXJlbnQgZGVsZXRlcyByZWYgKGlmIGFwcGxpY2FibGUpXG4gKiAqIENoaWxkIHJ1bnMgZWZmZWN0LWNsZWFudXBcbiAqICogQ2hpbGQgZGVsZXRlcyByZWYgKGlmIGFwcGxpY2FibGUpXG4gKiBcbiAqIFR3byB0aGluZ3MgdG8gbm90ZSBoZXJlOlxuICogKiBSZW5kZXJpbmcgc3RhcnRzIGF0IHRoZSByb290LCAgYnV0IGVmZmVjdHMgYW5kIHJlZnMgc3RhcnQgYXQgdGhlIGxlYXZlcy5cbiAqICogcmVmcyBhcmUgKnVzdWFsbHkqIGNhbGxlZCBiZWZvcmUgZWZmZWN0cywgYnV0IG9ubHkgd2hlbiB0aGF0IEhUTUxFbGVtZW50IHJlbmRlcnMuIEJhc2ljYWxseSBqdXN0IGEgcmVtaW5kZXIgdGhhdCBhIGNvbXBvbmVudCBjYW4gYmUgbW91bnRlZCB3aXRob3V0IGl0IGV4aXN0aW5nIGluIHRoZSBET00uXG4gKi9cbmNvbnN0IF9jb21tZW50cyA9IHZvaWQgKDApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZU1hbmFnZWRDaGlsZHJlbkNvbnRleHQ8TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8vbWFuYWdlZENoaWxkcmVuUmV0dXJuOiBVc2VNYW5hZ2VkQ2hpbGRyZW5SZXR1cm5UeXBlPE0+W1wibWFuYWdlZENoaWxkcmVuUmV0dXJuXCJdXG5cbiAgICBtYW5hZ2VkQ2hpbGRDb250ZXh0OiB7XG4gICAgICAgIGdldENoaWxkcmVuKCk6IE1hbmFnZWRDaGlsZHJlbjxNPjtcbiAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXk6IEludGVybmFsQ2hpbGRJbmZvPE0+O1xuICAgICAgICByZW1vdGVVTEVDaGlsZE1vdW50ZWQ6IChpbmRleDogTVtcImluZGV4XCJdLCBtb3VudGVkOiBib29sZWFuKSA9PiB2b2lkO1xuICAgICAgICByZW1vdGVVTEVDaGlsZENoYW5nZWQ6IChpbmRleDogTVtcImluZGV4XCJdKSA9PiAoKCkgPT4gdm9pZCk7XG4gICAgfVxufVxuXG5cbi8qKlxuICogRG9lcyBub3RoaW5nIGF0IHJ1bnRpbWUgLS0gdHlwZSBjaGVja2luZyBvbmx5LlxuICogXG4gKiBUaHJvd3MgYSAoVHlwZXNjcmlwdCBjb21waWxlcikgZXJyb3IgaWYgdGhlIHBhc3NlZCBvYmplY3QgaXMgYW55dGhpbmcgYnV0IHRoZSBlbXB0eSBvYmplY3Qge30uXG4gKiBcbiAqIFVzZSB0aGlzIHRvIGVuc3VyZSB0aGF0IHlvdXIgc3ByZWFkIG9wZXJhdG9ycyB3b3JrIGNvcnJlY3RseSBhbmQgY292ZXIgYWxsIGNhc2VzLlxuICogXG4gKiBAcGFyYW0gX2EgVGhlIHJlbWFpbmluZyBzcHJlYWQgcGFyYW1ldGVycyBvZiBhIGdpdmVuIG9iamVjdCB0aGF0IHlvdSBleHBlY3QgdG8gYmUgZW1wdHkgKGJlY2F1c2UgeW91IHByb3Blcmx5IGFjY291bnRlZCBmb3IgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgZXhpc3QgaW4gaXQsIGFuZCB3YW50IHRvIGVuc3VyZSBpdCBzdGF5cyB0aGF0IHdheSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEVtcHR5T2JqZWN0PFQgZXh0ZW5kcyB7fT4oX2E6IFtrZXlvZiBUXSBleHRlbmRzIFtuZXZlcl0gPyBUIDogYFVuaGFuZGxlZCBrZXlzIGluIHRoaXMgcmVzdCBzcHJlYWQgb2JqZWN0IWApOiB2b2lkIHsgfVxuXG5cblxuLyoqXG4gKiBJbmZvcm1hdGlvbiB0aGF0IGNoaWxkcmVuIGFuZCBwYXJlbnRzIHVzZSB0byBjb21tdW5pY2F0ZSB3aXRoIGVhY2ggb3RoZXIuXG4gKiBcbiAqICogYGluZGV4YCByZWZlcnMgdG8gd2hpY2ggY2hpbGQgdGhpcyBpcy5cbiAqICogYGZsYWdzYCBhcmUgcXVpY2stYW5kLWVhc3kgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGF0IHlvdSBjYW4gb3B0aW9uYWxseSB1c2VcbiAqICogYHN1YkluZm9gIGlzIGFueXRoaW5nIHVzZWQgYnkgYSBkZXJpdmVkIGhvb2suIGB1c2VSb3ZpbmdUYWJJbmRleGAsIGZvciBleGFtcGxlLCBuZWVkcyB0byBrbm93IGhvdyB0byBmb2N1cyBhbiBhcmJpdHJhcnkgY2hpbGQsIHNvIHRoZSBjaGlsZCBwb3B1bGF0ZXMgYGluZm9gIHdpdGggYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBtZXRob2QgY2FsbGVkIGBmb2N1c1NlbGZgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hbmFnZWRDaGlsZEluZm88VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4ge1xuICAgIGluZGV4OiBUO1xuICAgIC8vZmxhZ3M6IFBhcnRpYWw8UmVjb3JkPEssIENoaWxkRmxhZ09wZXJhdGlvbnM+PjtcbiAgICAvL3N1YkluZm86IE1DU3ViSW5mbztcbn1cblxuXG5cbmV4cG9ydCB0eXBlIE9uQ2hpbGRyZW5Nb3VudENoYW5nZTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyPiA9ICgobW91bnRlZDogU2V0PFQ+LCB1bm1vdW50ZWQ6IFNldDxUPikgPT4gdm9pZCk7XG5leHBvcnQgdHlwZSBPbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3Q8VCBleHRlbmRzIHN0cmluZyB8IG51bWJlcj4gPSAoKGNhdXNlcnM6IEl0ZXJhYmxlPFQ+KSA9PiB2b2lkKTtcblxuaW50ZXJmYWNlIE1DUDxUIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgLyoqXG4gICAgICogUnVucyBhZnRlciBvbmUgb3IgbW9yZSBjaGlsZHJlbiBoYXZlIHVwZGF0ZWQgdGhlaXIgaW5mb3JtYXRpb24gKGluZGV4LCBldGMuKS5cbiAgICAgKiBcbiAgICAgKiBPbmx5IG9uZSB3aWxsIHJ1biBwZXIgdGljaywganVzdCBsaWtlIGxheW91dEVmZmVjdCwgYnV0IGl0IGlzbid0XG4gICAgICogKmd1YXJhbnRlZWQqIHRvIGhhdmUgYWN0dWFsbHkgYmVlbiBhIGNoYW5nZS5cbiAgICAgKiBcbiAgICAgKiBUT0RPOiBUaGlzIGVuZGVkIHVwIG5vdCBiZWluZyBuZWVkZWQgYnkgYW55dGhpbmcuIElzIGl0IG5lY2Vzc2FyeT8gRG9lcyBpdCBjb3N0IGFueXRoaW5nP1xuICAgICAqL1xuICAgIG9uQWZ0ZXJDaGlsZExheW91dEVmZmVjdD86IG51bGwgfCB1bmRlZmluZWQgfCBPbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3Q8VD47XG5cbiAgICAvKipcbiAgICAgKiBTYW1lIGFzIHRoZSBhYm92ZSwgYnV0IG9ubHkgZm9yIG1vdW50L3VubW91bnQgKG9yIHdoZW4gYSBjaGlsZCBjaGFuZ2VzIGl0cyBpbmRleClcbiAgICAgKi9cbiAgICBvbkNoaWxkcmVuTW91bnRDaGFuZ2U/OiBudWxsIHwgdW5kZWZpbmVkIHwgT25DaGlsZHJlbk1vdW50Q2hhbmdlPFQ+O1xuXG4gICAgb25DaGlsZENvdW50Q2hhbmdlPzogbnVsbCB8IHVuZGVmaW5lZCB8ICgoY291bnQ6IG51bWJlcikgPT4gdm9pZCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgbWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczogTUNQPE1bXCJpbmRleFwiXT47XG59XG5cbi8vIE1DU3ViSW5mbyBjb250YWlucyB0aGUgZW50aXJldHkgb2YgdGhlIHNhdmVkIGRhdGEgZm9yIHRoaXMgY2hpbGQuICBBbGwgb2YgaXQuIEV2ZW4gdHlwZXMgdGhlIHVzZXIgd2lsbCBuZXZlciBiZSBhYmxlIHRvIHBhc3MgaW4gYmVjYXVzZSB0aGV5J3JlIGludGVybmFsbHkgZGVyaXZlZC5cbi8vIFN1YmJlc3RJbmZvIHJlZmVycyB0byB0aGUgYWN0dWFsIHBhcmFtZXRlcnMgdGhlIHVzZXIgcGFzc2VzIGluIHRoYXQgY291bGQgYmUgdG90YWxseSB1bnJlbGF0ZWQuIFxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHByb3BlcnR5IHNoYXJlZCBhbW9uZyBhbGwgbWFuYWdlZCBjaGlsZHJlbi5cbiAgICAvLyBUZWNobmljYWxseSB0aGlzIGlzIHJlZHVuZGFudCB3aXRoIHRoZSBzZWNvbmQgYXJndW1lbnQsIHdoaWNoIGlzLi4uZWguIEJ1dCB0aGUgdHlwZXMgYXJlIGNsZWFyLlxuICAgIG1hbmFnZWRDaGlsZFBhcmFtZXRlcnM6IFBpY2s8TSwgXCJpbmRleFwiPjtcblxuICAgIC8qKlxuICAgICAqIEluIGdlbmVyYWwsIHRoaXMgc2hvdWxkbid0IGJlIG51bGwsIGJ1dCBmb3IgY29udmVuaWVuY2UncyBzYWtlIHlvdSBhcmUgYWxsb3dlZCB0bywgd2hpY2ggZGlzYWJsZXMgYWxsIGJlaGF2aW9yLCBhbmQgYWxzbyBtZWFucyBgZ2V0Q2hpbGRyZW5gIHdpbGwgYmUgYHVuZGVmaW5lZGAhXG4gICAgICovXG4gICAgY29udGV4dDogVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dDxNPiB8IG51bGw7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VNYW5hZ2VkQ2hpbGRyZW5SZXR1cm5UeXBlPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjaGlsZCB0aGF0IHJlbmRlcmVkIGl0c2VsZiB3aXRoIHRoZSByZXF1ZXN0ZWQga2V5LlxuICAgICAqIFxuICAgICAqICoqU1RBQkxFKiogKGV2ZW4gdGhvdWdoIGl0J3Mgbm90IGEgZnVuY3Rpb24sIHRoZSBpZGVudGl0eSBvZiB0aGlzIG9iamVjdCBuZXZlciBjaGFuZ2VzKVxuICAgICAqL1xuICAgIG1hbmFnZWRDaGlsZHJlblJldHVybjoge1xuICAgICAgICAvKiogXG4gICAgICAgICAqICoqKlNUQUJMRSoqKlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RlIHRoYXQgKipib3RoKiogYGdldENoaWxkcmVuYCBhbmQgdGhlIGBNYW5hZ2VkQ2hpbGRyZW5gIG9iamVjdCBpdCByZXR1cm5zIGFyZSBzdGFibGUhXG4gICAgICAgICAqIFxuICAgICAgICAgKiBUaGlzIGlzIGEgZ2V0dGVyIGluc3RlYWQgb2YgYW4gb2JqZWN0IGJlY2F1c2Ugd2hlbiBmdW5jdGlvbiBjYWxscyBoYXBwZW4gb3V0IG9mIG9yZGVyIGl0J3MgZWFzaWVyIHRvIGp1c3QgaGF2ZSBhbHdheXMgYmVlbiBwYXNzaW5nIGFuZCByZXR1cm4gZ2V0dGVycyBldmVyeXdoZXJlIFxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0Q2hpbGRyZW4oKTogTWFuYWdlZENoaWxkcmVuPE0+O1xuXG4gICAgfTtcblxuICAgIGNvbnRleHQ6IFVzZU1hbmFnZWRDaGlsZHJlbkNvbnRleHQ8TT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlTWFuYWdlZENoaWxkUmV0dXJuVHlwZTxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+PiB7XG4gICAgbWFuYWdlZENoaWxkUmV0dXJuOiB7XG4gICAgICAgIGdldENoaWxkcmVuKCk6IE1hbmFnZWRDaGlsZHJlbjxNPjtcbiAgICB9XG59XG5cbi8vZXhwb3J0IHR5cGUgVXNlTWFuYWdlZENoaWxkPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4+ID0gKGE6IFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnM8TT4pID0+IFVzZU1hbmFnZWRDaGlsZFJldHVyblR5cGU8TT47XG5cblxuXG5cblxuXG4vKipcbiAqIEFic3RyYWN0aW9uIG92ZXIgdGhlIG1hbmFnZWQgY2hpbGRyZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYW5hZ2VkQ2hpbGRyZW48TSBleHRlbmRzIE1hbmFnZWRDaGlsZEluZm88YW55Pj4ge1xuICAgIC8qKiBTVEFCTEUgKi9cbiAgICBnZXRBdChpbmRleDogTVtcImluZGV4XCJdKTogTSB8IHVuZGVmaW5lZDtcbiAgICAvKiogU1RBQkxFICovXG4gICAgZ2V0SGlnaGVzdEluZGV4KCk6IG51bWJlcjtcbiAgICAvKiogU1RBQkxFICovXG4gICAgZm9yRWFjaDogKGY6IChjaGlsZDogTSkgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAgIC8qKiAqKlVOU1RBQkxFKiosIGFsc28gaW50ZXJuYWwtdXNlIG9ubHksIGFsc28gVE9ETyBuZWVkIGEgd29ya2Fyb3VuZCBmb3IgdGhpcyBmb3Igc29ydGFibGUgY2hpbGRyZW4gKi9cbiAgICBhcnJheVNsaWNlOiAoKSA9PiBNW107XG59XG5cbmludGVyZmFjZSBJbnRlcm5hbENoaWxkSW5mbzxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxzdHJpbmcgfCBudW1iZXI+PiB7XG4gICAgYXJyOiBBcnJheTxNPjtcbiAgICByZWM6IFBhcnRpYWw8UmVjb3JkPE1bXCJpbmRleFwiXSwgTT4+O1xuICAgIGhpZ2hlc3RJbmRleDogbnVtYmVyO1xuICAgIGxvd2VzdEluZGV4OiBudW1iZXI7XG59XG5cbi8qKlxuICogQWxsb3dzIGEgcGFyZW50IGNvbXBvbmVudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgY2VydGFpblxuICogY2hpbGQgY29tcG9uZW50cyBvbmNlIHRoZXkgaGF2ZSByZW5kZXJlZC5cbiAqIFxuICogVGhpcyBob29rIGlzIGRlc2lnbmVkIHRvIGJlIGxpZ2h0d2VpZ2h0LCBpbiB0aGF0IHRoZSBwYXJlbnQga2VlcHMgbm8gc3RhdGVcbiAqIGFuZCBydW5zIG5vIGVmZmVjdHMuICBFYWNoIGNoaWxkICpkb2VzKiBydW4gYW4gZWZmZWN0LCBidXQgd2l0aCBubyBzdGF0ZVxuICogY2hhbmdlcyB1bmxlc3MgeW91IGV4cGxpY2l0bHkgcmVxdWVzdCB0aGVtLlxuICogXG4gKiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hbmFnZWRDaGlsZHJlbjxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxzdHJpbmcgfCBudW1iZXI+PihwYXJlbnRQYXJhbWV0ZXJzOiBVc2VNYW5hZ2VkQ2hpbGRyZW5QYXJhbWV0ZXJzPE0+KTogVXNlTWFuYWdlZENoaWxkcmVuUmV0dXJuVHlwZTxNPiB7XG4gICAgdHlwZSBJbmRleFR5cGUgPSBNW1wiaW5kZXhcIl07XG4gICAgdHlwZSBJbmZvID0gTTtcblxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczogeyBvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QsIG9uQ2hpbGRyZW5Nb3VudENoYW5nZSwgb25DaGlsZENvdW50Q2hhbmdlIH0sIC4uLnJlc3QgfSA9IHBhcmVudFBhcmFtZXRlcnM7XG4gICAgYXNzZXJ0RW1wdHlPYmplY3QocmVzdCk7XG5cbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VNYW5hZ2VkQ2hpbGRyZW5cIiwgb25BZnRlckNoaWxkTGF5b3V0RWZmZWN0LCBvbkNoaWxkcmVuTW91bnRDaGFuZ2UsIG9uQ2hpbGRDb3VudENoYW5nZSk7XG5cbiAgICAvL2NvbnN0IFtnZXRNb3VudENvdW50LCBzZXRNb3VudENvdW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkNoaWxkQ291bnRDaGFuZ2UsIHJldHVyblplcm8sIHJ1bkltbWVkaWF0ZWx5KTtcblxuICAgIGNvbnN0IGdldEhpZ2hlc3RJbmRleCA9IHVzZUNhbGxiYWNrKCgpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5oaWdoZXN0SW5kZXg7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gQWxsIHRoZSBpbmZvcm1hdGlvbiB3ZSBoYXZlIGFib3V0IG91ciBjaGlsZHJlbiBpcyBzdG9yZWQgaW4gdGhpcyAqKnN0YWJsZSoqIGFycmF5LlxuICAgIC8vIEFueSBtdXRhdGlvbnMgdG8gdGhpcyBhcnJheSAqKkRPIE5PVCoqIHRyaWdnZXIgYW55IHNvcnQgb2YgYSByZS1yZW5kZXIuXG4gICAgY29uc3QgbWFuYWdlZENoaWxkcmVuQXJyYXkgPSB1c2VSZWY8SW50ZXJuYWxDaGlsZEluZm88TT4+KHsgYXJyOiBbXSwgcmVjOiB7fSwgaGlnaGVzdEluZGV4OiAwLCBsb3dlc3RJbmRleDogMCB9KTtcblxuICAgIC8vIEZvciBpbmRpcmVjdCBhY2Nlc3MgdG8gZWFjaCBjaGlsZFxuICAgIC8vIENvbXBhcmUgZ2V0TWFuYWdlZENoaWxkSW5mb1xuICAgIC8vIFRPRE86IFRoZSBwcmltYXJ5IHVzZSBmb3IgdGhpcyBpcyBmbGFnZ2FibGUgY2xvc2VzdCBmaXRzXG4gICAgLy8gd2hpY2ggbmVlZHMgdG8gc2VhcmNoIGFsbCBjaGlsZHJlbiBmb3IgdGhhdCBjbG9zZXN0IGZpdC5cbiAgICAvLyBJdCB3b3VsZCBiZSBuaWNlIGlmIHRoZXJlIHdhcyBzb21ldGhpbmcgYmV0dGVyIGZvciB0aGF0LlxuICAgIGNvbnN0IGZvckVhY2hDaGlsZCA9IHVzZUNhbGxiYWNrKChmOiAoY2hpbGQ6IEluZm8pID0+IHZvaWQpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFycikge1xuICAgICAgICAgICAgaWYgKGNoaWxkKVxuICAgICAgICAgICAgICAgIGYoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgaW4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkOiBJbmZvIHwgdW5kZWZpbmVkID0gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5yZWNbZmllbGQgYXMga2V5b2YgUmVjb3JkPEluZGV4VHlwZSwgSW5mbz5dO1xuICAgICAgICAgICAgaWYgKGNoaWxkKVxuICAgICAgICAgICAgICAgIGYoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICAvLyBSZXRyaWV2ZXMgdGhlIGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgY2hpbGQgd2l0aCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgLy8gYHVuZGVmaW5lZGAgaWYgbm90IGNoaWxkIHRoZXJlLCBvciBpdCdzIHVubW91bnRlZC5cbiAgICBjb25zdCBnZXRNYW5hZ2VkQ2hpbGRJbmZvID0gdXNlQ2FsbGJhY2s8TWFuYWdlZENoaWxkcmVuPE0+W1wiZ2V0QXRcIl0+KChpbmRleDogSW5kZXhUeXBlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIHJldHVybiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFycltpbmRleCBhcyBudW1iZXJdITtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQucmVjW2luZGV4IGFzIEluZGV4VHlwZV0hO1xuICAgIH0sIFtdKVxuXG4gICAgLy8gdGw7ZHIgdGhpcyBpcyBhIHdheSB0byBoYXZlIHJ1biB1c2VMYXlvdXRFZmZlY3Qgb25jZSBhZnRlciBhbGwgTiBjaGlsZHJlblxuICAgIC8vIGhhdmUgbW91bnRlZCBhbmQgcnVuICp0aGVpciogdXNlTGF5b3V0RWZmZWN0LCBidXQgYWxzbyAqd2l0aG91dCogcmUtcmVuZGVyaW5nXG4gICAgLy8gb3Vyc2VsdmVzIGJlY2F1c2Ugb2YgaGF2aW5nIGEgYGNoaWxkQ291bnRgIHN0YXRlIG9yIGFueXRoaW5nIHNpbWlsYXIuXG4gICAgLy9cbiAgICAvLyBXaGVuIHRoZSBjaGlsZCBjb3VudCByZWYgdXBkYXRlcywgd2Ugd2FudCB0aGUgcGFyZW50IHRvIGFsc28gcnVuIGFuIGVmZmVjdFxuICAgIC8vIHRvIG1heWJlIGRvIHNvbWV0aGluZyB3aXRoIGFsbCB0aGVzZSBjaGlsZHJlbiB0aGF0IGp1c3QgbW91bnRlZC5cbiAgICAvLyBUaGUgZWFzaWVzdCB3YXkgd291bGQgYmUgdXNlRWZmZWN0KC4uLiwgW2NoaWxkQ291bnRdKSBidXRcbiAgICAvLyB0aGF0IHdvdWxkIHJlcXVpcmUgdXMgaGF2aW5nIGEgY2hpbGRDb3VudCBzdGF0ZSwgdGhlbiBjYWxsaW5nXG4gICAgLy8gc2V0Q2hpbGRDb3VudCBhbmQgcmUtcmVuZGVyaW5nIGV2ZXJ5IHRpbWUgY2hpbGRyZW4gbW91bnRcbiAgICAvLyAob25seSBvbmUgcmUtcmVuZGVyIGF0IGEgdGltZSB1bmxlc3MgY2hpbGRyZW4gYXJlIHN0YWdnZXJlZCwgYnV0IHN0aWxsKVxuICAgIC8vIFxuICAgIC8vIEFzIGFuIGFsdGVybmF0ZSBzb2x1dGlvbiwgYW55IHRpbWUgYSBjaGlsZCB1c2VzIFVMRSBvbiBtb3VudCwgaXQgcXVldWVzIGEgbWljcm90YXNrXG4gICAgLy8gdG8gZW11bGF0ZSBydW5uaW5nIFVMRSBvbiB0aGUgcGFyZW50LiBPbmx5IHRoZSBmaXJzdCBjaGlsZCB3aWxsIGFjdHVhbGx5IHF1ZXVlXG4gICAgLy8gdGhlIG1pY3JvdGFzayAoYnkgY2hlY2tpbmcgaGFzUmVtb3RlVUxFIGZpcnN0KSBzbyB0aGF0IHRoZSBcImVmZmVjdFwiIG9ubHlcbiAgICAvLyBydW5zIG9uY2UuIFdoZW4gaXQncyBkb25lLCBoYXNSZW1vdGVVTEUgaXMgcmVzZXQgc28gaXQgY2FuIHJ1biBhZ2FpbiBpZlxuICAgIC8vIG1vcmUgY2hpbGRyZW4gbW91bnQvdW5tb3VudC5cbiAgICBjb25zdCBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQgPSB1c2VSZWY8eyBtb3VudHM6IFNldDxJbmRleFR5cGU+LCB1bm1vdW50czogU2V0PEluZGV4VHlwZT4gfSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMgPSB1c2VSZWYobmV3IFNldDxJbmRleFR5cGU+KCkpO1xuICAgIGNvbnN0IHJlbW90ZVVMRUNoaWxkQ2hhbmdlZCA9IHVzZUNhbGxiYWNrKChpbmRleDogSW5kZXhUeXBlKSA9PiB7XG5cbiAgICAgICAgaWYgKHJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMuY3VycmVudC5zaXplID09IDApIHtcbiAgICAgICAgICAgIGlmIChvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlUmVuZGVyaW5nKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25BZnRlckNoaWxkTGF5b3V0RWZmZWN0Py4ocmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2Vycy5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkQ2F1c2Vycy5jdXJyZW50LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdGVVTEVDaGlsZENoYW5nZWRDYXVzZXJzLmN1cnJlbnQuYWRkKGluZGV4KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xuXG4gICAgfSwgWy8qIE11c3QgcmVtYWluIHN0YWJsZSAqL10pO1xuXG4gICAgY29uc3QgcmVtb3RlVUxFQ2hpbGRNb3VudGVkID0gdXNlQ2FsbGJhY2soKGluZGV4OiBJbmRleFR5cGUsIG1vdW50ZWQ6IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICAgICAgaWYgKCFoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgbW91bnRzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICAgICAgdW5tb3VudHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAob25DaGlsZENvdW50Q2hhbmdlIHx8IG9uQ2hpbGRyZW5Nb3VudENoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRlYm91bmNlUmVuZGVyaW5nKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGlsZHJlbk1vdW50Q2hhbmdlPy4oaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnQhLm1vdW50cywgaGFzUmVtb3RlVUxFQ2hpbGRNb3VudGVkLmN1cnJlbnQhLnVubW91bnRzKTtcbiAgICAgICAgICAgICAgICAgICAgb25DaGlsZENvdW50Q2hhbmdlPy4oZ2V0Q2hpbGRyZW4oKS5nZXRIaWdoZXN0SW5kZXgoKSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW91bnRlZCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PSBcIm51bWJlclwiKVxuICAgICAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuaGlnaGVzdEluZGV4ID0gTWF0aC5tYXgobWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5oaWdoZXN0SW5kZXgsIGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFycltpbmRleCBhcyBudW1iZXJdO1xuICAgICAgICAgICAgICAgIGxldCBzaGF2ZSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHNoYXZlIDw9IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLmxlbmd0aCAmJiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyclttYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmFyci5sZW5ndGggLSAxIC0gc2hhdmVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytzaGF2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIuc3BsaWNlKG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLmxlbmd0aCAtIHNoYXZlLCBzaGF2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQucmVjW2luZGV4IGFzIEluZGV4VHlwZV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgICAgICBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50LmhpZ2hlc3RJbmRleCA9IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQuYXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYXNSZW1vdGVVTEVDaGlsZE1vdW50ZWQuY3VycmVudFttb3VudGVkID8gXCJtb3VudHNcIiA6IFwidW5tb3VudHNcIl0uYWRkKGluZGV4KTtcbiAgICB9LCBbLyogTXVzdCByZW1haW4gc3RhYmxlICovXSk7XG5cblxuICAgIGNvbnN0IG1hbmFnZWRDaGlsZHJlbiA9IHVzZVN0YWJsZU9iamVjdDxNYW5hZ2VkQ2hpbGRyZW48TT4+KHtcbiAgICAgICAgLi4ueyBfOiBtYW5hZ2VkQ2hpbGRyZW5BcnJheS5jdXJyZW50IH0gYXMge30sXG4gICAgICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZCxcbiAgICAgICAgZ2V0QXQ6IGdldE1hbmFnZWRDaGlsZEluZm8sXG4gICAgICAgIGdldEhpZ2hlc3RJbmRleDogZ2V0SGlnaGVzdEluZGV4LFxuICAgICAgICBhcnJheVNsaWNlOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbWFuYWdlZENoaWxkcmVuQXJyYXkuY3VycmVudC5hcnIuc2xpY2UoKTtcbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRDaGlsZHJlbiA9IHVzZUNhbGxiYWNrKCgpID0+IG1hbmFnZWRDaGlsZHJlbiwgW10pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGV4dDogdXNlU3RhYmxlT2JqZWN0KHtcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZENvbnRleHQ6IHVzZVN0YWJsZU9iamVjdCh7XG4gICAgICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXk6IG1hbmFnZWRDaGlsZHJlbkFycmF5LmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcmVtb3RlVUxFQ2hpbGRNb3VudGVkLFxuICAgICAgICAgICAgICAgIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZCxcbiAgICAgICAgICAgICAgICBnZXRDaGlsZHJlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIG1hbmFnZWRDaGlsZHJlblJldHVybjogeyBnZXRDaGlsZHJlbiB9XG4gICAgfVxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZENoaWxkPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPG51bWJlciB8IHN0cmluZz4+KGluZm86IFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnM8TT4sIG1hbmFnZWRDaGlsZFBhcmFtZXRlcnM6IE0pOiBVc2VNYW5hZ2VkQ2hpbGRSZXR1cm5UeXBlPE0+IHtcbiAgICB0eXBlIEluZGV4VHlwZSA9IE1bXCJpbmRleFwiXTtcblxuICAgIGNvbnN0IHsgbWFuYWdlZENoaWxkQ29udGV4dDogeyBnZXRDaGlsZHJlbiwgbWFuYWdlZENoaWxkcmVuQXJyYXksIHJlbW90ZVVMRUNoaWxkTW91bnRlZCwgcmVtb3RlVUxFQ2hpbGRDaGFuZ2VkIH0gfSA9IChpbmZvLmNvbnRleHQgPz8geyBtYW5hZ2VkQ2hpbGRDb250ZXh0OiB7fSB9KTtcbiAgICBjb25zdCBpbmRleCA9IG1hbmFnZWRDaGlsZFBhcmFtZXRlcnMuaW5kZXg7XG4gICAgLy8gQW55IHRpbWUgb3VyIGNoaWxkIHByb3BzIGNoYW5nZSwgbWFrZSB0aGF0IGluZm9ybWF0aW9uIGF2YWlsYWJsZVxuICAgIC8vIHRoZSBwYXJlbnQgaWYgdGhleSBuZWVkIGl0LlxuICAgIC8vIFRoZSBwYXJlbnQgY2FuIGxpc3RlbiBmb3IgYWxsIHVwZGF0ZXMgYW5kIG9ubHkgYWN0IG9uIHRoZSBvbmVzIGl0IGNhcmVzIGFib3V0LFxuICAgIC8vIGFuZCBtdWx0aXBsZSBjaGlsZHJlbiB1cGRhdGluZyBpbiB0aGUgc2FtZSB0aWNrIHdpbGwgYWxsIGJlIHNlbnQgYXQgb25jZS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobWFuYWdlZENoaWxkcmVuQXJyYXkgPT0gbnVsbCB8fCByZW1vdGVVTEVDaGlsZENoYW5nZWQgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEluc2VydCB0aGlzIGluZm9ybWF0aW9uIGluLXBsYWNlXG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgbWFuYWdlZENoaWxkcmVuQXJyYXkuYXJyW2luZGV4IGFzIG51bWJlcl0gPSB7IC4uLm1hbmFnZWRDaGlsZFBhcmFtZXRlcnMgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1hbmFnZWRDaGlsZHJlbkFycmF5LnJlY1tpbmRleCBhcyBJbmRleFR5cGVdID0geyAuLi5tYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZChpbmRleCBhcyBJbmRleFR5cGUpO1xuICAgIH0sIFsuLi5PYmplY3QuZW50cmllcyhpbmZvKS5mbGF0KDkpXSk7ICAvLyA5IGlzIGluZmluaXR5LCByaWdodD8gU3VyZS4gVW5yZWxhdGVkOiBUT0RPLlxuXG4gICAgLy8gV2hlbiB3ZSBtb3VudCwgbm90aWZ5IHRoZSBwYXJlbnQgdmlhIHF1ZXVlTWljcm90YXNrXG4gICAgLy8gKGV2ZXJ5IGNoaWxkIGRvZXMgdGhpcywgc28gZXZlcnl0aGluZydzIGNvb3JkaW5hdGVkIHRvIG9ubHkgcXVldWUgYSBzaW5nbGUgbWljcm90YXNrIHBlciB0aWNrKVxuICAgIC8vIERvIHRoZSBzYW1lIG9uIHVubW91bnQuXG4gICAgLy8gTm90ZTogSXQncyBpbXBvcnRhbnQgdGhhdCB0aGlzIGNvbWVzIEFGVEVSIHJlbW90ZVVMRUNoaWxkQ2hhbmdlZFxuICAgIC8vIHNvIHRoYXQgcmVtb3RlVUxFQ2hpbGRNb3VudGVkIGhhcyBhY2Nlc3MgdG8gYWxsIHRoZSBpbmZvIG9uIG1vdW50LlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJlbW90ZVVMRUNoaWxkTW91bnRlZD8uKGluZGV4IGFzIEluZGV4VHlwZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiByZW1vdGVVTEVDaGlsZE1vdW50ZWQ/LihpbmRleCBhcyBJbmRleFR5cGUsIGZhbHNlKTtcbiAgICB9LCBbaW5kZXhdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1hbmFnZWRDaGlsZFJldHVybjogeyBnZXRDaGlsZHJlbjogZ2V0Q2hpbGRyZW4hIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VDaGlsZHJlbkZsYWdQYXJhbWV0ZXJzPE0gZXh0ZW5kcyBNYW5hZ2VkQ2hpbGRJbmZvPGFueT4sIFI+IHtcblxuICAgIC8qKlxuICAgICAqIFdoaWNoIGNoaWxkIGlzIGNvbnNpZGVyZWQgYWN0aXZlIG9uIG1vdW50LlxuICAgICAqIFxuICAgICAqIEFmdGVyIG1vdW50LCBjaGFuZ2UgdGhlIGN1cnJlbnQgYWN0aXZlIGNoaWxkIHdpdGggYGNoYW5nZUluZGV4YC5cbiAgICAgKi9cbiAgICBpbml0aWFsSW5kZXg6IE1bXCJpbmRleFwiXSB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHByb3ZpZGVkLCBpZiB0aGUgZ2l2ZW4gYWN0aXZhdGVkSW5kZXggZG9lc24ndCBtYXAgb250byBhbnlcbiAgICAgKiBwcm92aWRlZCBjaGlsZCAoZWl0aGVyIGJlY2F1c2UgaXQncyB0b28gbGFyZ2Ugb3IgdGhhdCBjaGlsZFxuICAgICAqIGRvZXNuJ3QgZXhpc3QpLCB0aGUgY2xvc2VzdCBjaGlsZCB0byB0aGUgZ2l2ZW4gYWN0aXZhdGVkSW5kZXhcbiAgICAgKiB3aWxsIGhhdmUgaXRzIGZsYWcgc2V0IGluc3RlYWQuXG4gICAgICogXG4gICAgICogVXNlIHdpdGggY2F1dGlvbiwgYW5kIGNvbnNpZGVyIGhvdyBhIGNoaWxkIGhhdmluZyBpdHMgZmxhZyBzZXRcbiAgICAgKiB3aGlsZSB0aGUgcGFyZW50IHRoaW5rcyBpdCBzaG91bGRuJ3QgYmUgY291bGQgY2F1c2UgaXNzdWVzLlxuICAgICAqL1xuICAgIGNsb3Nlc3RGaXQ6IGJvb2xlYW47XG5cbiAgICBnZXRDaGlsZHJlbigpOiBNYW5hZ2VkQ2hpbGRyZW48TT47XG5cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuZXZlciBhIG5ldyBpbmRleCBpcyBzZWxlY3RlZC5cbiAgICAgKiBcbiAgICAgKiBOb3RhYmx5LCB0aGUgdmFsdWUgY2FuIGJlIGRpZmZlcmVudCB0aGFuIHdoYXQgd2FzIGNhbGxlZCB3aXRoIGNoYW5nZUluZGV4KClcbiAgICAgKiBpZiB0aGUgcmVxdWVzdGVkIGluZGV4IGRpZG4ndCBleGlzdCBvciB3YXMgaGlkZGVuLlxuICAgICAqL1xuICAgIG9uSW5kZXhDaGFuZ2U6IG51bGwgfCBPblBhc3NpdmVTdGF0ZUNoYW5nZTxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPjtcblxuICAgIHNldEF0KGluZGV4OiBNLCB2YWx1ZTogYm9vbGVhbiwgbmV3U2VsZWN0ZWRJbmRleDogTVtcImluZGV4XCJdIHwgbnVsbCwgcHJldlNlbGVjdGVkSW5kZXg6IE1bXCJpbmRleFwiXSB8IG51bGwpOiB2b2lkO1xuICAgIGdldEF0KGluZGV4OiBNKTogYm9vbGVhbjtcbiAgICBpc1ZhbGlkKGluZGV4OiBNKTogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIENoaWxkRmxhZ09wZXJhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICogTXVzdCByZXR1cm4gd2hldGhlciB0aGUgY3VycmVudCBjaGlsZCBpcyBhY3RpdmVcbiAgICAgKi9cbiAgICBnZXQ6ICgpID0+IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkIG11c3Qgc2V0IGl0c2VsZiBhcyBhY3RpdmUvaW5hY3RpdmUsIHdoYXRldmVyIHRoYXQgZW50YWlscy5cbiAgICAgKiBUaGlzIGNvdWxkIGJlIGFzIHNpbXBsZSBhcyBhIHNldFN0YXRlIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIHNldDogKGFjdGl2ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBNdXN0IHJldHVybiB0cnVlIGlmIHRoaXMgY2hpbGQgaXMgYSB2YWxpZCBjYW5kaWRhdGUgdG8gYmUgZmxhZ2dlZCwgYW5kIGZhbHNlIGlmIG5vdC5cbiAgICAgKiBNb3N0IGNoaWxkcmVuIHNob3VsZCByZXR1cm4gdHJ1ZS4gUmV0dXJuaW5nIGZhbHNlIGlzIG9ubHkgdXNlZnVsIHRvIG1hcmsgYSBjaGlsZCBhcyBcImludmFsaWRcIiBpbiBzb21lIHdheS5cbiAgICAgKiBSZW1vdmluZyBhIGNoaWxkIGZyb20gdGhlIGxpc3QgZG9lcyBlZmZlY3RpdmVseSB0aGUgc2FtZSB0aGluZywgYnV0IHRoaXMgbGV0cyB5b3Uga2VlcCB0aGUgY2hpbGQgYXJvdW5kLlxuICAgICAqL1xuICAgIGlzVmFsaWQoKTogYm9vbGVhbjtcbn1cblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQ2hpbGRyZW5GbGFnUmV0dXJuVHlwZTxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxhbnk+LCBSPiB7XG4gICAgLyoqIFxuICAgICAqICoqU1RBQkxFKipcbiAgICAgKiBcbiAgICAgKiBNYW51YWxseSBjaGFuZ2VzIHRoZSBjdXJyZW50IGluZGV4IHRoYXQgaXMgKGZvY3VzZWQvc2VsZWN0ZWQvdGFiYmFibGUvd2hhdGV2ZXIpLlxuICAgICAqIFxuICAgICAqIFRoZSBwYXJlbnQgY2FuIHVzZSB0aGlzIHRvIG5vdGlmeSBlYWNoIHJlbGV2YW50IGNoaWxkIG9mIHdoYXQgaXQgbXVzdCBkbyBpbiBvcmRlciB0byBtYWtlIHRoaXMgY2hhbmdlIGhhcHBlbi5cbiAgICAgKiBcbiAgICAgKiBUaGUgcmV0dXJuZWQgdmFsdWUgd2lsbCBiZSB0aGUgbmV3IGluZGV4IHRoYXQgd2lsbCBiZSB1c2VkLiBJZiBgY2xvc2VzdEZpdGAgaXMgZmFsc2UsIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIHdoYXQgeW91IHBhc3NlZCBpbi5cbiAgICAgKi9cbiAgICBjaGFuZ2VJbmRleDogUGFzc2l2ZVN0YXRlVXBkYXRlcjxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPjtcbiAgICAvKiogXG4gICAgICogKipTVEFCTEUqKlxuICAgICAqIFxuICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciBhIGNoaWxkIG1vdW50cy91bm1vdW50cywgb3Igd2hlbmV2ZXIgY2FsbGluZyBhIGNoaWxkJ3MgaXNWYWxpZCgpIHdvdWxkIGNoYW5nZVxuICAgICAqICAqL1xuICAgIHJlZXZhbHVhdGVDbG9zZXN0Rml0OiAoKSA9PiB2b2lkO1xuICAgIC8qKiAqKlNUQUJMRSoqICovXG4gICAgZ2V0Q3VycmVudEluZGV4OiAoKSA9PiBNW1wiaW5kZXhcIl0gfCBudWxsO1xufVxuXG4vKipcbiAqIEFuIGV4dGVuc2lvbiB0byB1c2VNYW5hZ2VkQ2hpbGRyZW4gdGhhdCBoYW5kbGVzIHRoZSBmb2xsb3dpbmcgY29tbW9uIGNhc2U6XG4gKiAxLiBZb3UgaGF2ZSBhIGJ1bmNoIG9mIGNoaWxkcmVuXG4gKiAyLiBBdCBhbnkgZ2l2ZW4gdGltZSwgb25seSAxIG9mIHRoZW0gaXMgXCJzZWxlY3RlZFwiLCBcImFjdGl2YXRlZFwiLCBcImZvY3VzYWJsZVwiLCB3aGF0ZXZlciAob3IgMCBvZiB0aGVtLCB0aGF0J3MgY29vbCB0b28sIGp1c3QgMCBvciAxIHRob3VnaCkuXG4gKiAzLiBUaGUgcGFyZW50IGhhcyBjb250cm9sIG92ZXIgd2hvIGlzIFwic2VsZWN0ZWRcIiB2aWEgYSBudW1lcmljYWwgaW5kZXguXG4gKiBcbiAqIFRoaXMgaG9vayBhbGxvd3MgZm9yIG11Y2ggZWFzaWVyIGNvbnRyb2wgb3ZlciBzZWxlY3Rpb24gbWFuYWdlbWVudC5cbiAqIFxuICogTm90ZSB0aGF0IGJlY2F1c2UgeW91IG1heSB3YW50IHRvIHVzZSBtdWx0aXBsZSBmbGFncyB3aXRoIHRoZSBzYW1lIGNoaWxkcmVuLCB0aGlzIGhvb2sgKmRvZXMgbm90KiB1c2UgYHVzZU1hbmFnZWRDaGlsZHJlbmAhXG4gKiBZb3UgbmVlZCB0byBwYXNzIGl0IHRoZSBleGlzdGluZyBjaGlsZHJlbiwgYW5kIHlvdSBtdXN0IHBhc3MgeW91ciBpbnZvY2F0aW9uIG9mIGB1c2VNYW5hZ2VkQ2hpbGRyZW5gIHRoZSByZXR1cm5lZCBgb25DaGlsZHJlbk1vdW50Q2hhbmdlYCBoYW5kbGVyIVxuICogXG4gKiBBbHNvIGJlY2F1c2Ugb2YgdGhhdCwgdGhlIHR5cGVzIG9mIHRoaXMgZnVuY3Rpb24gYXJlIHJhdGhlciBvZGQuICBJdCdzIGJldHRlciB0byBzdGFydCBvZmYgdXNpbmcgYSBob29rIHRoYXQgYWxyZWFkeSB1c2VzIGEgZmxhZywgc3VjaCBhcyBgdXNlUm92aW5nVGFiSW5kZXhgLCBhcyBhbiBleGFtcGxlLlxuICogXG4gKiBcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoaWxkcmVuRmxhZzxNIGV4dGVuZHMgTWFuYWdlZENoaWxkSW5mbzxudW1iZXIgfCBzdHJpbmc+LCBSPih7IGdldENoaWxkcmVuLCBpbml0aWFsSW5kZXgsIGNsb3Nlc3RGaXQsIG9uSW5kZXhDaGFuZ2UsIGdldEF0LCBzZXRBdCwgaXNWYWxpZCwgfTogVXNlQ2hpbGRyZW5GbGFnUGFyYW1ldGVyczxNLCBSPik6IFVzZUNoaWxkcmVuRmxhZ1JldHVyblR5cGU8TSwgUj4ge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZUNoaWxkcmVuRmxhZ1wiLCBvbkluZGV4Q2hhbmdlLCBnZXRBdCwgc2V0QXQsIGlzVmFsaWQpO1xuXG4gICAgLy8gVE9ETyAobWF5YmU/KTogRXZlbiBpZiB0aGVyZSBpcyBhbiBpbml0aWFsIGluZGV4LCBpdCdzIG5vdCBzZXQgdW50aWwgbW91bnQuIElzIHRoYXQgZmluZT9cbiAgICBjb25zdCBbZ2V0Q3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlUGFzc2l2ZVN0YXRlPG51bGwgfCBNW1wiaW5kZXhcIl0sIFI+KG9uSW5kZXhDaGFuZ2UpO1xuXG4gICAgY29uc3QgW2dldFJlcXVlc3RlZEluZGV4LCBzZXRSZXF1ZXN0ZWRJbmRleF0gPSB1c2VQYXNzaXZlU3RhdGU8bnVsbCB8IE1bXCJpbmRleFwiXSwgUj4obnVsbCk7XG5cbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBvbkNoaWxkcmVuTW91bnRDaGFuZ2UgYW5kIGNoYW5nZUluZGV4LCBub3QgcHVibGljXG4gICAgLy8gT25seSBjYWxsZWQgd2hlbiBgY2xvc2VzdEZpdGAgaXMgZmFsc2UsIG5hdHVyYWxseS5cbiAgICBjb25zdCBnZXRDbG9zZXN0Rml0ID0gdXNlQ2FsbGJhY2soKHJlcXVlc3RlZEluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbigpO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgIGxldCBjbG9zZXN0SW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblxuICAgICAgICAgICAgaWYgKGNoaWxkICE9IG51bGwgJiYgaXNWYWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgY2hpbGQuaW5kZXggPT0gXCJudW1iZXJcIiwgXCJjbG9zZXN0Rml0IGNhbiBvbmx5IGJlIHVzZWQgd2hlbiBlYWNoIGNoaWxkIGhhcyBhIG51bWVyaWMgaW5kZXgsIGFuZCBjYW5ub3QgYmUgdXNlZCB3aGVuIGNoaWxkcmVuIHVzZSBzdHJpbmcgaW5kaWNlcyBpbnN0ZWFkLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEaXN0YW5jZSA9IE1hdGguYWJzKChjaGlsZC5pbmRleCBhcyBudW1iZXIpIC0gcmVxdWVzdGVkSW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdEaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZSB8fCAobmV3RGlzdGFuY2UgPT0gY2xvc2VzdERpc3RhbmNlICYmIGNoaWxkLmluZGV4IDwgcmVxdWVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0YW5jZSA9IG5ld0Rpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0SW5kZXggPSAoY2hpbGQuaW5kZXggYXMgbnVtYmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VzdEluZGV4O1xuICAgIH0sIFsvKiBNdXN0IHJlbWFpbiBzdGFibGUhICovXSk7XG5cbiAgICAvLyBBbnkgdGltZSBhIGNoaWxkIG1vdW50cy91bm1vdW50cywgd2UgbmVlZCB0byBkb3VibGUtY2hlY2sgdG8gc2VlIGlmIHRoYXQgYWZmZWN0cyBcbiAgICAvLyB0aGUgXCJjdXJyZW50bHkgc2VsZWN0ZWRcIiAob3Igd2hhdGV2ZXIpIGluZGV4LiAgVGhlIHR3byBjYXNlcyB3ZSdyZSBsb29raW5nIGZvcjpcbiAgICAvLyAxLiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGNoaWxkIHVubW91bnRlZFxuICAgIC8vIDIuIEEgY2hpbGQgbW91bnRlZCwgYW5kIGl0IG1vdW50cyB3aXRoIHRoZSBpbmRleCB3ZSdyZSBsb29raW5nIGZvclxuICAgIGNvbnN0IHJlZXZhbHVhdGVDbG9zZXN0Rml0ID0gdXNlU3RhYmxlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGdldENoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RlZEluZGV4ID0gZ2V0UmVxdWVzdGVkSW5kZXgoKTtcbiAgICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gZ2V0Q3VycmVudEluZGV4KCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDaGlsZCA9IGN1cnJlbnRJbmRleCA9PSBudWxsID8gbnVsbCA6IGNoaWxkcmVuLmdldEF0KGN1cnJlbnRJbmRleCk7XG5cbiAgICAgICAgaWYgKHJlcXVlc3RlZEluZGV4ICE9IG51bGwgJiYgY2xvc2VzdEZpdCAmJiAocmVxdWVzdGVkSW5kZXggIT0gY3VycmVudEluZGV4IHx8IGN1cnJlbnRDaGlsZCA9PSBudWxsIHx8ICFpc1ZhbGlkKGN1cnJlbnRDaGlsZCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCh0eXBlb2YgcmVxdWVzdGVkSW5kZXggPT0gXCJudW1iZXJcIiwgXCJjbG9zZXN0Rml0IGNhbiBvbmx5IGJlIHVzZWQgd2hlbiBlYWNoIGNoaWxkIGhhcyBhIG51bWVyaWMgaW5kZXgsIGFuZCBjYW5ub3QgYmUgdXNlZCB3aGVuIGNoaWxkcmVuIHVzZSBzdHJpbmcgaW5kaWNlcyBpbnN0ZWFkLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdEZpdEluZGV4ID0gZ2V0Q2xvc2VzdEZpdChyZXF1ZXN0ZWRJbmRleCBhcyBudW1iZXIpO1xuICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KGNsb3Nlc3RGaXRJbmRleCwgdW5kZWZpbmVkISk7XG4gICAgICAgICAgICBpZiAoY3VycmVudENoaWxkKVxuICAgICAgICAgICAgICAgIHNldEF0KGN1cnJlbnRDaGlsZCwgZmFsc2UsIGNsb3Nlc3RGaXRJbmRleCwgY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0SW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3RGaXRDaGlsZCA9IGNoaWxkcmVuLmdldEF0KGNsb3Nlc3RGaXRJbmRleCkhO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGNsb3Nlc3RGaXRDaGlsZCAhPSBudWxsLCBcIkludGVybmFsIGxvZ2ljPz8/XCIpO1xuICAgICAgICAgICAgICAgIHNldEF0KGNsb3Nlc3RGaXRDaGlsZCwgdHJ1ZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cblxuICAgIGNvbnN0IGNoYW5nZUluZGV4ID0gdXNlQ2FsbGJhY2s8UGFzc2l2ZVN0YXRlVXBkYXRlcjxNW1wiaW5kZXhcIl0gfCBudWxsLCBSPj4oKGFyZzogUGFyYW1ldGVyczxQYXNzaXZlU3RhdGVVcGRhdGVyPE1bXCJpbmRleFwiXSB8IG51bGwsIFI+PlswXSwgcmVhc29uOiBQYXJhbWV0ZXJzPFBhc3NpdmVTdGF0ZVVwZGF0ZXI8TVtcImluZGV4XCJdIHwgbnVsbCwgUj4+WzFdKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdGVkSW5kZXggPSAoYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcoZ2V0UmVxdWVzdGVkSW5kZXgoKSkgOiBhcmcpIGFzIE1bXCJpbmRleFwiXTtcblxuICAgICAgICBzZXRSZXF1ZXN0ZWRJbmRleChyZXF1ZXN0ZWRJbmRleCwgcmVhc29uIGFzIFIpO1xuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PSByZXF1ZXN0ZWRJbmRleClcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0ZWRJbmRleDtcblxuICAgICAgICBsZXQgbmV3TWF0Y2hpbmdDaGlsZCA9IChyZXF1ZXN0ZWRJbmRleCA9PSBudWxsID8gbnVsbCA6IGNoaWxkcmVuLmdldEF0KHJlcXVlc3RlZEluZGV4KSk7XG4gICAgICAgIGNvbnN0IG9sZE1hdGNoaW5nQ2hpbGQgPSAoY3VycmVudEluZGV4ID09IG51bGwgPyBudWxsIDogY2hpbGRyZW4uZ2V0QXQoY3VycmVudEluZGV4KSk7XG4gICAgICAgIGlmIChyZXF1ZXN0ZWRJbmRleCA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBFYXN5IGNhc2VcbiAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChudWxsLCByZWFzb24gYXMgUik7XG4gICAgICAgICAgICBpZiAob2xkTWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICBzZXRBdChvbGRNYXRjaGluZ0NoaWxkLCBmYWxzZSwgcmVxdWVzdGVkSW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkSXNWYWxpZCA9IChuZXdNYXRjaGluZ0NoaWxkICYmIGlzVmFsaWQobmV3TWF0Y2hpbmdDaGlsZCkpO1xuICAgICAgICAgICAgaWYgKGNoaWxkSXNWYWxpZCB8fCAhY2xvc2VzdEZpdCkge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChyZXF1ZXN0ZWRJbmRleCwgcmVhc29uIGFzIFIpO1xuICAgICAgICAgICAgICAgIGlmIChvbGRNYXRjaGluZ0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICBzZXRBdChvbGRNYXRjaGluZ0NoaWxkLCBmYWxzZSwgcmVxdWVzdGVkSW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld01hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgIHNldEF0KG5ld01hdGNoaW5nQ2hpbGQsIHRydWUsIHJlcXVlc3RlZEluZGV4LCBjdXJyZW50SW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RlZEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodHlwZW9mIHJlcXVlc3RlZEluZGV4ID09IFwibnVtYmVyXCIsIFwiY2xvc2VzdEZpdCBjYW4gb25seSBiZSB1c2VkIHdoZW4gZWFjaCBjaGlsZCBoYXMgYSBudW1lcmljIGluZGV4LCBhbmQgY2Fubm90IGJlIHVzZWQgd2hlbiBjaGlsZHJlbiB1c2Ugc3RyaW5nIGluZGljZXMgaW5zdGVhZC5cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0Rml0SW5kZXggPSBnZXRDbG9zZXN0Rml0KHJlcXVlc3RlZEluZGV4IGFzIG51bWJlcik7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEluZGV4KGNsb3Nlc3RGaXRJbmRleCwgcmVhc29uIGFzIFIpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0Rml0SW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdNYXRjaGluZ0NoaWxkID0gY2hpbGRyZW4uZ2V0QXQoY2xvc2VzdEZpdEluZGV4KSE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KG5ld01hdGNoaW5nQ2hpbGQgIT0gbnVsbCwgXCJJbnRlcm5hbCBsb2dpYz8/P1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZE1hdGNoaW5nQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdChvbGRNYXRjaGluZ0NoaWxkLCBmYWxzZSwgY2xvc2VzdEZpdEluZGV4LCBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRBdChuZXdNYXRjaGluZ0NoaWxkLCB0cnVlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbG9zZXN0Rml0SW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkTWF0Y2hpbmdDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEF0KG9sZE1hdGNoaW5nQ2hpbGQsIGZhbHNlLCBjbG9zZXN0Rml0SW5kZXgsIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIC8vIFJ1biBvbmNlLCBvbiBtb3VudFxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNoYW5nZUluZGV4KGluaXRpYWxJbmRleCA/PyBudWxsLCB1bmRlZmluZWQpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIHsgY2hhbmdlSW5kZXgsIHJlZXZhbHVhdGVDbG9zZXN0Rml0LCBnZXRDdXJyZW50SW5kZXggfTtcbn1cblxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBgQmxvY2tpbmdFbGVtZW50c2AgbWFuYWdlcyBhIHN0YWNrIG9mIGVsZW1lbnRzIHRoYXQgaW5lcnQgdGhlIGludGVyYWN0aW9uXG4gKiBvdXRzaWRlIHRoZW0uIFRoZSB0b3AgZWxlbWVudCBpcyB0aGUgaW50ZXJhY3RpdmUgcGFydCBvZiB0aGUgZG9jdW1lbnQuXG4gKiBUaGUgc3RhY2sgY2FuIGJlIHVwZGF0ZWQgd2l0aCB0aGUgbWV0aG9kcyBgcHVzaCwgcmVtb3ZlLCBwb3BgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NraW5nRWxlbWVudHMge1xuICAvKipcbiAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gVGhpcyBlbXB0aWVzXG4gICAqIHRoZSBibG9ja2luZyBlbGVtZW50c1xuICAgKi9cbiAgZGVzdHJ1Y3RvcigpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgdG9wIGJsb2NraW5nIGVsZW1lbnQuXG4gICAqL1xuICB0b3A6IEhUTUxFbGVtZW50fG51bGw7XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGVsZW1lbnQgdG8gdGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgKi9cbiAgcHVzaChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgZnJvbSB0aGUgYmxvY2tpbmcgZWxlbWVudHMuIFJldHVybnMgdHJ1ZSBpZiB0aGVcbiAgICogZWxlbWVudCB3YXMgcmVtb3ZlZC5cbiAgICovXG4gIHJlbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdG9wIGJsb2NraW5nIGVsZW1lbnQgYW5kIHJldHVybnMgaXQuXG4gICAqL1xuICBwb3AoKTogSFRNTEVsZW1lbnR8bnVsbDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBhIGJsb2NraW5nIGVsZW1lbnQuXG4gICAqL1xuICBoYXMoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50V2l0aEJsb2NraW5nRWxlbWVudHMgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICRibG9ja2luZ0VsZW1lbnRzOiBCbG9ja2luZ0VsZW1lbnRzO1xufVxuXG4oKCkgPT4ge1xuICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuXG4gIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuXG4gIGludGVyZmFjZSBJbmVydGFibGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgaW5lcnQ/OiBib29sZWFuO1xuICB9XG5cbiAgaW50ZXJmYWNlIEludGVybmFsU3RhdGUge1xuICAgIFtfc2libGluZ3NUb1Jlc3RvcmVdOiBTZXQ8TWF5YmVIYXNJbnRlcm5hbFN0YXRlPjtcbiAgICBbX3BhcmVudE1PXTogTXV0YXRpb25PYnNlcnZlcjtcbiAgfVxuICBpbnRlcmZhY2UgSGFzSW50ZXJuYWxTdGF0ZSBleHRlbmRzIEluZXJ0YWJsZSwgSW50ZXJuYWxTdGF0ZSB7fVxuICBpbnRlcmZhY2UgTWF5YmVIYXNJbnRlcm5hbFN0YXRlIGV4dGVuZHMgSW5lcnRhYmxlLCBQYXJ0aWFsPEludGVybmFsU3RhdGU+IHt9XG5cbiAgLyoqXG4gICAqIFNoYWR5RE9NIHNoYWR5IHJvb3RzIGxvb2sgYSBsb3QgbGlrZSByZWFsIFNoYWRvd1Jvb3RzLiBUaGUgX19zaGFkeSBwcm9wZXJ0eVxuICAgKiBnaXZlcyB0aGVtIGF3YXksIHRob3VnaC5cbiAgICovXG4gIGludGVyZmFjZSBNYXliZVNoYWR5Um9vdCBleHRlbmRzIEVsZW1lbnQge1xuICAgIF9fc2hhZHk6IHVua25vd247XG4gICAgaG9zdDogRWxlbWVudDtcbiAgfVxuXG4gIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIGltcGxlbWVudHMgQmxvY2tpbmdFbGVtZW50cyB7XG4gICAgLyoqXG4gICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2Jsb2NraW5nRWxlbWVudHNdOiBNYXliZUhhc0ludGVybmFsU3RhdGVbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwcml2YXRlW190b3BFbFBhcmVudHNdOiBIYXNJbnRlcm5hbFN0YXRlW10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICogcHVzaGVkLlxuICAgICAqL1xuICAgIHByaXZhdGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG5ldyBTZXQ8TWF5YmVIYXNJbnRlcm5hbFN0YXRlPigpO1xuXG4gICAgZGVzdHJ1Y3RvcigpOiB2b2lkIHtcbiAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAvLyBleGNlcHRpb24uXG4gICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXMgYXMgdW5rbm93biBhcyB7XG4gICAgICAgIFtfYmxvY2tpbmdFbGVtZW50c106IG51bGw7XG4gICAgICAgIFtfdG9wRWxQYXJlbnRzXTogbnVsbDtcbiAgICAgICAgW19hbHJlYWR5SW5lcnRFbGVtZW50c106IG51bGw7XG4gICAgICB9O1xuICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgIH1cblxuICAgIGdldCB0b3AoKTogSFRNTEVsZW1lbnR8bnVsbCB7XG4gICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvcCgpOiBIVE1MRWxlbWVudHxudWxsIHtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICByZXR1cm4gdG9wO1xuICAgIH1cblxuICAgIGhhcyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgKi9cbiAgICBwcml2YXRlW190b3BDaGFuZ2VkXShuZXdUb3A6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZXxudWxsKTogdm9pZCB7XG4gICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgfVxuICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgIC8vIGJlbG93LlxuICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHMgYXMgQXJyYXk8SGFzSW50ZXJuYWxTdGF0ZT47XG5cbiAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG5cbiAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgaS0tO1xuICAgICAgICBqLS07XG4gICAgICB9XG4gICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgIH1cbiAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgKi9cbiAgICBwcml2YXRlW19zd2FwSW5lcnRlZFNpYmxpbmddKFxuICAgICAgICBvbGRJbmVydDogSGFzSW50ZXJuYWxTdGF0ZSwgbmV3SW5lcnQ6IE1heWJlSGFzSW50ZXJuYWxTdGF0ZSk6IHZvaWQge1xuICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICB9XG4gICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgIH1cbiAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgKG9sZEluZXJ0IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgIChvbGRJbmVydCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICovXG4gICAgcHJpdmF0ZVtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHM6IEhhc0ludGVybmFsU3RhdGVbXSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgIChlbGVtZW50IGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZSlbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAoZWxlbWVudCBhcyBNYXliZUhhc0ludGVybmFsU3RhdGUpW19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAqL1xuICAgIHByaXZhdGVbX2luZXJ0U2libGluZ3NdKFxuICAgICAgICBlbGVtZW50czogTWF5YmVIYXNJbnRlcm5hbFN0YXRlW10sIHRvU2tpcDogU2V0PEhUTUxFbGVtZW50PnxudWxsLFxuICAgICAgICB0b0tlZXBJbmVydDogU2V0PEhUTUxFbGVtZW50PnxudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSE7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdIGFzIE1heWJlSGFzSW50ZXJuYWxTdGF0ZTtcbiAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlIGFzIE1heWJlU2hhZHlSb290O1xuICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgfVxuICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pOiB2b2lkIHtcbiAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gKG11dGF0aW9uLnRhcmdldCBhcyBTaGFkb3dSb290KS5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQgYXMgSGFzSW50ZXJuYWxTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuXG4gICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXSBhcyBNYXliZUhhc0ludGVybmFsU3RhdGU7XG4gICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICovXG4gICAgcHJpdmF0ZVtfaXNJbmVydGFibGVdKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgKi9cbiAgICBwcml2YXRlW19nZXRQYXJlbnRzXShlbGVtZW50OiBIVE1MRWxlbWVudCk6IEFycmF5PEhUTUxFbGVtZW50PiB7XG4gICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICBsZXQgY3VycmVudDogSFRNTEVsZW1lbnR8bnVsbHx1bmRlZmluZWQgPSBlbGVtZW50O1xuICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgICAgIChjdXJyZW50IGFzIE5vZGUgYXMgU2hhZG93Um9vdCkuaG9zdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAqL1xuICAgIHByaXZhdGVbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTpcbiAgICAgICAgU2V0PEhUTUxFbGVtZW50PnxudWxsIHtcbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PEhUTUxFbGVtZW50PigpO1xuICAgICAgbGV0IGk7XG4gICAgICBsZXQgajtcbiAgICAgIGxldCBub2RlcztcbiAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0gYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cblxuICAoZG9jdW1lbnQgYXMgRG9jdW1lbnRXaXRoQmxvY2tpbmdFbGVtZW50cykuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEhUTUxFbGVtZW50IGF0IHRoZSByb290IG9mIHRoZSBpbmVydCBzdWJ0cmVlLlxuICAgICAgICogQHBhcmFtIHshSW5lcnRNYW5hZ2VyfSBpbmVydE1hbmFnZXIgVGhlIGdsb2JhbCBzaW5nbGV0b24gSW5lcnRNYW5hZ2VyIG9iamVjdC5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRSb290KHJvb3RFbGVtZW50LCBpbmVydE1hbmFnZXIpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Um9vdCk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSBpbmVydE1hbmFnZXI7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfYWRvcHRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX2Fkb3B0SW5lcnRSb290KG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcblxuICAgICAgICAgIC8vIER1cmluZyBpbml0aWFsaXNhdGlvbiB0aGlzIGluZXJ0IHJvb3QgbWF5IG5vdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB5ZXQsXG4gICAgICAgICAgLy8gc28gcmVnaXN0ZXIgaXQgbm93IGlmIG5lZWQgYmUuXG4gICAgICAgICAgaWYgKCFpbmVydFN1YnJvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlci5zZXRJbmVydChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnRTdWJyb290Lm1hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChzYXZlZEluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShzYXZlZEluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBzdWJ0cmVlIGFkZGl0aW9ucywgcmVtb3ZhbHMsIG9yIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uTXV0YXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTXV0YXRpb24ocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5ub2RlO1xuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSkge1xuICAgICAgICAgICAgaWYgKCAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4ID09PSAtMSAmJiB0aGlzLmhhc1NhdmVkVGFiSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICBlbGVtZW50LmZvY3VzID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhbm90aGVyIGluZXJ0IHJvb3QgdG8gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdhZGRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYWRkSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLmFkZChpbmVydFJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBmcm9tIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogSWYgdGhlIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cyBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LFxuICAgICAgICAgKiBzbyB0aGUgb2JqZWN0IHNob3VsZCBiZSBkZXN0cm95ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rlc3Ryb3llZCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiAoLyoqIEB0eXBlIHshSW5lcnROb2RlfSAqL3RoaXMuX2Rlc3Ryb3llZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4geyFOb2RlfSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ25vZGUnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/bnVtYmVyfSB0YWJJbmRleCAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YWJJbmRleCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gdGFiSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P251bWJlcn0gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Tm9kZTtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBJbmVydE1hbmFnZXIgaXMgYSBwZXItZG9jdW1lbnQgc2luZ2xldG9uIG9iamVjdCB3aGljaCBtYW5hZ2VzIGFsbCBpbmVydCByb290cyBhbmQgbm9kZXMuXG4gICAgICpcbiAgICAgKiBXaGVuIGFuIGVsZW1lbnQgYmVjb21lcyBhbiBpbmVydCByb290IGJ5IGhhdmluZyBhbiBgaW5lcnRgIGF0dHJpYnV0ZSBzZXQgYW5kL29yIGl0cyBgaW5lcnRgXG4gICAgICogcHJvcGVydHkgc2V0IHRvIGB0cnVlYCwgdGhlIGBzZXRJbmVydGAgbWV0aG9kIGNyZWF0ZXMgYW4gYEluZXJ0Um9vdGAgb2JqZWN0IGZvciB0aGUgZWxlbWVudC5cbiAgICAgKiBUaGUgYEluZXJ0Um9vdGAgaW4gdHVybiByZWdpc3RlcnMgaXRzZWxmIGFzIG1hbmFnaW5nIGFsbCBvZiB0aGUgZWxlbWVudCdzIGZvY3VzYWJsZSBkZXNjZW5kYW50XG4gICAgICogbm9kZXMgdmlhIHRoZSBgcmVnaXN0ZXIoKWAgbWV0aG9kLiBUaGUgYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgIGluc3RhbmNlXG4gICAgICogaXMgY3JlYXRlZCBmb3IgZWFjaCBzdWNoIG5vZGUsIHZpYSB0aGUgYF9tYW5hZ2VkTm9kZXNgIG1hcC5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRG9jdW1lbnR9IGRvY3VtZW50XG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0TWFuYWdlcihkb2N1bWVudCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRNYW5hZ2VyKTtcblxuICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OyBJbmVydE1hbmFnZXIgbmVlZHMgdG8gd3JhcCBhIGRvY3VtZW50LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEB0eXBlIHshRG9jdW1lbnR9ICovXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIG5vZGVzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnROb2RlPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIGluZXJ0IHJvb3RzIGtub3duIHRvIHRoaXMgSW5lcnRNYW5hZ2VyLiBJbiBhIG1hcCB0byBhbGxvdyBsb29raW5nIHVwIGJ5IE5vZGUuXG4gICAgICAgICAqIEB0eXBlIHshTWFwPCFOb2RlLCAhSW5lcnRSb290Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9ic2VydmVyIGZvciBtdXRhdGlvbnMgb24gYGRvY3VtZW50LmJvZHlgLlxuICAgICAgICAgKiBAdHlwZSB7IU11dGF0aW9uT2JzZXJ2ZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX3dhdGNoRm9ySW5lcnQuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gQWRkIGluZXJ0IHN0eWxlLlxuICAgICAgICBhZGRJbmVydFN0eWxlKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhaXQgZm9yIGRvY3VtZW50IHRvIGJlIGxvYWRlZC5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLl9vbkRvY3VtZW50TG9hZGVkLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IHNob3VsZCBiZSBhbiBpbmVydCByb290IG9yIG5vdC5cbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghSFRNTEVsZW1lbnQpKT19IGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IHRyYXZlcnNlZCxcbiAgICAgKiAgICAgYmVmb3JlIGRlc2NlbmRpbmcgaW50byBjaGlsZCBub2Rlcy5cbiAgICAgKiBAcGFyYW0gez9TaGFkb3dSb290PX0gc2hhZG93Um9vdEFuY2VzdG9yIFRoZSBuZWFyZXN0IFNoYWRvd1Jvb3QgYW5jZXN0b3IsIGlmIGFueS5cbiAgICAgKi9cblxuXG4gICAgZnVuY3Rpb24gY29tcG9zZWRUcmVlV2Fsayhub2RlLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKSB7XG4gICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUhUTUxFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnaW5lcnQnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIlxuaW1wb3J0IHsgU3RhdGVVcGRhdGVyLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5cbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKiBcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgXG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCB8ICgoKSA9PiBUKSk6IHJlYWRvbmx5IFt2YWx1ZTogVCwgc2V0VmFsdWU6IFN0YXRlVXBkYXRlcjxUPiwgZ2V0VmFsdWU6ICgpID0+IFRdIHtcblxuICAgIC8vIFdlIGtlZXAgYm90aCwgYnV0IG92ZXJycmlkZSB0aGUgYHNldFN0YXRlYCBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZVBdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcblxuICAgIC8vIEhpamFjayB0aGUgbm9ybWFsIHNldHRlciBmdW5jdGlvbiBcbiAgICAvLyB0byBhbHNvIHNldCBvdXIgcmVmIHRvIHRoZSBuZXcgdmFsdWVcbiAgICBjb25zdCBzZXRTdGF0ZSA9IHVzZUNhbGxiYWNrPFN0YXRlVXBkYXRlcjxUPj4odmFsdWUgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWUgYXMgKChfcHJldlZhbHVlOiBUKSA9PiBUKTtcbiAgICAgICAgICAgIHNldFN0YXRlUChwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGNhbGxiYWNrKHByZXZWYWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIHNldFN0YXRlUCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHsgcmV0dXJuIHJlZi5jdXJyZW50OyB9O1xuXG5cbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUgfHwgKHR5cGVvZiBzdGF0ZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihzdGF0ZSkpKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZSwgZ2V0U3RhdGVdIGFzIGNvbnN0O1xufSIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuaW1wb3J0IHN0dWJGYWxzZSBmcm9tICcuL3N0dWJGYWxzZS5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCdWZmZXI7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCIvKipcbiAqIEFzc2lnbiBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYCB0byBgb2JqYFxuICogQHRlbXBsYXRlIE8sIFAgVGhlIG9iaiBhbmQgcHJvcHMgdHlwZXNcbiAqIEBwYXJhbSB7T30gb2JqIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvXG4gKiBAcGFyYW0ge1B9IHByb3BzIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm5zIHtPICYgUH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihvYmosIHByb3BzKSB7XG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBhIGRpZmZlcmVudCBzaGFwZVxuICogQHBhcmFtIHtvYmplY3R9IGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBiXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNoYWxsb3dEaWZmZXJzKGEsIGIpIHtcblx0Zm9yIChsZXQgaSBpbiBhKSBpZiAoaSAhPT0gJ19fc291cmNlJyAmJiAhKGkgaW4gYikpIHJldHVybiB0cnVlO1xuXHRmb3IgKGxldCBpIGluIGIpIGlmIChpICE9PSAnX19zb3VyY2UnICYmIGFbaV0gIT09IGJbaV0pIHJldHVybiB0cnVlO1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcblx0bGV0IHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIHRoZSBzYW1lIHZhbHVlXG4gKiBAcGFyYW0geyp9IHhcbiAqIEBwYXJhbSB7Kn0geVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpcyh4LCB5KSB7XG5cdHJldHVybiAoeCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpKSB8fCAoeCAhPT0geCAmJiB5ICE9PSB5KTtcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzaGFsbG93RGlmZmVycyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQ29tcG9uZW50IGNsYXNzIHdpdGggYSBwcmVkZWZpbmVkIGBzaG91bGRDb21wb25lbnRVcGRhdGVgIGltcGxlbWVudGF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQdXJlQ29tcG9uZW50KHApIHtcblx0dGhpcy5wcm9wcyA9IHA7XG59XG5QdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnQoKTtcbi8vIFNvbWUgdGhpcmQtcGFydHkgbGlicmFyaWVzIGNoZWNrIGlmIHRoaXMgcHJvcGVydHkgaXMgcHJlc2VudFxuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuUHVyZUNvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24ocHJvcHMsIHN0YXRlKSB7XG5cdHJldHVybiBzaGFsbG93RGlmZmVycyh0aGlzLnByb3BzLCBwcm9wcykgfHwgc2hhbGxvd0RpZmZlcnModGhpcy5zdGF0ZSwgc3RhdGUpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgc2hhbGxvd0RpZmZlcnMgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIE1lbW9pemUgYSBjb21wb25lbnQsIHNvIHRoYXQgaXQgb25seSB1cGRhdGVzIHdoZW4gdGhlIHByb3BzIGFjdHVhbGx5IGhhdmVcbiAqIGNoYW5nZWQuIFRoaXMgd2FzIHByZXZpb3VzbHkga25vd24gYXMgYFJlYWN0LnB1cmVgLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5GdW5jdGlvbkNvbXBvbmVudH0gYyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICogQHBhcmFtIHsocHJldjogb2JqZWN0LCBuZXh0OiBvYmplY3QpID0+IGJvb2xlYW59IFtjb21wYXJlcl0gQ3VzdG9tIGVxdWFsaXR5IGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZW1vKGMsIGNvbXBhcmVyKSB7XG5cdGZ1bmN0aW9uIHNob3VsZFVwZGF0ZShuZXh0UHJvcHMpIHtcblx0XHRsZXQgcmVmID0gdGhpcy5wcm9wcy5yZWY7XG5cdFx0bGV0IHVwZGF0ZVJlZiA9IHJlZiA9PSBuZXh0UHJvcHMucmVmO1xuXHRcdGlmICghdXBkYXRlUmVmICYmIHJlZikge1xuXHRcdFx0cmVmLmNhbGwgPyByZWYobnVsbCkgOiAocmVmLmN1cnJlbnQgPSBudWxsKTtcblx0XHR9XG5cblx0XHRpZiAoIWNvbXBhcmVyKSB7XG5cdFx0XHRyZXR1cm4gc2hhbGxvd0RpZmZlcnModGhpcy5wcm9wcywgbmV4dFByb3BzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIWNvbXBhcmVyKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXVwZGF0ZVJlZjtcblx0fVxuXG5cdGZ1bmN0aW9uIE1lbW9lZChwcm9wcykge1xuXHRcdHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gc2hvdWxkVXBkYXRlO1xuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KGMsIHByb3BzKTtcblx0fVxuXHRNZW1vZWQuZGlzcGxheU5hbWUgPSAnTWVtbygnICsgKGMuZGlzcGxheU5hbWUgfHwgYy5uYW1lKSArICcpJztcblx0TWVtb2VkLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblx0TWVtb2VkLl9mb3J3YXJkZWQgPSB0cnVlO1xuXHRyZXR1cm4gTWVtb2VkO1xufVxuIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuXG5sZXQgb2xkRGlmZkhvb2sgPSBvcHRpb25zLl9kaWZmO1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0aWYgKHZub2RlLnR5cGUgJiYgdm5vZGUudHlwZS5fZm9yd2FyZGVkICYmIHZub2RlLnJlZikge1xuXHRcdHZub2RlLnByb3BzLnJlZiA9IHZub2RlLnJlZjtcblx0XHR2bm9kZS5yZWYgPSBudWxsO1xuXHR9XG5cdGlmIChvbGREaWZmSG9vaykgb2xkRGlmZkhvb2sodm5vZGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IFJFQUNUX0ZPUldBUkRfU1lNQk9MID1cblx0KHR5cGVvZiBTeW1ib2wgIT0gJ3VuZGVmaW5lZCcgJiZcblx0XHRTeW1ib2wuZm9yICYmXG5cdFx0U3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSkgfHxcblx0MHhmNDc7XG5cbi8qKlxuICogUGFzcyByZWYgZG93biB0byBhIGNoaWxkLiBUaGlzIGlzIG1haW5seSB1c2VkIGluIGxpYnJhcmllcyB3aXRoIEhPQ3MgdGhhdFxuICogd3JhcCBjb21wb25lbnRzLiBVc2luZyBgZm9yd2FyZFJlZmAgdGhlcmUgaXMgYW4gZWFzeSB3YXkgdG8gZ2V0IGEgcmVmZXJlbmNlXG4gKiBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgaW5zdGVhZCBvZiBvbmUgb2YgdGhlIHdyYXBwZXIgaXRzZWxmLlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW5kZXgnKS5Gb3J3YXJkRm59IGZuXG4gKiBAcmV0dXJucyB7aW1wb3J0KCcuL2ludGVybmFsJykuRnVuY3Rpb25Db21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkUmVmKGZuKSB7XG5cdGZ1bmN0aW9uIEZvcndhcmRlZChwcm9wcykge1xuXHRcdGxldCBjbG9uZSA9IGFzc2lnbih7fSwgcHJvcHMpO1xuXHRcdGRlbGV0ZSBjbG9uZS5yZWY7XG5cdFx0cmV0dXJuIGZuKGNsb25lLCBwcm9wcy5yZWYgfHwgbnVsbCk7XG5cdH1cblxuXHQvLyBtb2J4LXJlYWN0IGNoZWNrcyBmb3IgdGhpcyBiZWluZyBwcmVzZW50XG5cdEZvcndhcmRlZC4kJHR5cGVvZiA9IFJFQUNUX0ZPUldBUkRfU1lNQk9MO1xuXHQvLyBtb2J4LXJlYWN0IGhlYXZpbHkgcmVsaWVzIG9uIGltcGxlbWVudGF0aW9uIGRldGFpbHMuXG5cdC8vIEl0IGV4cGVjdHMgYW4gb2JqZWN0IGhlcmUgd2l0aCBhIGByZW5kZXJgIHByb3BlcnR5LFxuXHQvLyBhbmQgcHJvdG90eXBlLnJlbmRlciB3aWxsIGZhaWwuIFdpdGhvdXQgdGhpc1xuXHQvLyBtb2J4LXJlYWN0IHRocm93cy5cblx0Rm9yd2FyZGVkLnJlbmRlciA9IEZvcndhcmRlZDtcblxuXHRGb3J3YXJkZWQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSBGb3J3YXJkZWQuX2ZvcndhcmRlZCA9IHRydWU7XG5cdEZvcndhcmRlZC5kaXNwbGF5TmFtZSA9ICdGb3J3YXJkUmVmKCcgKyAoZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSkgKyAnKSc7XG5cdHJldHVybiBGb3J3YXJkZWQ7XG59XG4iLCJpbXBvcnQgeyB0b0NoaWxkQXJyYXkgfSBmcm9tICdwcmVhY3QnO1xuXG5jb25zdCBtYXBGbiA9IChjaGlsZHJlbiwgZm4pID0+IHtcblx0aWYgKGNoaWxkcmVuID09IG51bGwpIHJldHVybiBudWxsO1xuXHRyZXR1cm4gdG9DaGlsZEFycmF5KHRvQ2hpbGRBcnJheShjaGlsZHJlbikubWFwKGZuKSk7XG59O1xuXG4vLyBUaGlzIEFQSSBpcyBjb21wbGV0ZWx5IHVubmVjZXNzYXJ5IGZvciBQcmVhY3QsIHNvIGl0J3MgYmFzaWNhbGx5IHBhc3N0aHJvdWdoLlxuZXhwb3J0IGNvbnN0IENoaWxkcmVuID0ge1xuXHRtYXA6IG1hcEZuLFxuXHRmb3JFYWNoOiBtYXBGbixcblx0Y291bnQoY2hpbGRyZW4pIHtcblx0XHRyZXR1cm4gY2hpbGRyZW4gPyB0b0NoaWxkQXJyYXkoY2hpbGRyZW4pLmxlbmd0aCA6IDA7XG5cdH0sXG5cdG9ubHkoY2hpbGRyZW4pIHtcblx0XHRjb25zdCBub3JtYWxpemVkID0gdG9DaGlsZEFycmF5KGNoaWxkcmVuKTtcblx0XHRpZiAobm9ybWFsaXplZC5sZW5ndGggIT09IDEpIHRocm93ICdDaGlsZHJlbi5vbmx5Jztcblx0XHRyZXR1cm4gbm9ybWFsaXplZFswXTtcblx0fSxcblx0dG9BcnJheTogdG9DaGlsZEFycmF5XG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBvcHRpb25zLCBGcmFnbWVudCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBvbGRDYXRjaEVycm9yID0gb3B0aW9ucy5fY2F0Y2hFcnJvcjtcbm9wdGlvbnMuX2NhdGNoRXJyb3IgPSBmdW5jdGlvbihlcnJvciwgbmV3Vk5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pIHtcblx0aWYgKGVycm9yLnRoZW4pIHtcblx0XHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0XHRsZXQgY29tcG9uZW50O1xuXHRcdGxldCB2bm9kZSA9IG5ld1ZOb2RlO1xuXG5cdFx0Zm9yICg7ICh2bm9kZSA9IHZub2RlLl9wYXJlbnQpOyApIHtcblx0XHRcdGlmICgoY29tcG9uZW50ID0gdm5vZGUuX2NvbXBvbmVudCkgJiYgY29tcG9uZW50Ll9jaGlsZERpZFN1c3BlbmQpIHtcblx0XHRcdFx0aWYgKG5ld1ZOb2RlLl9kb20gPT0gbnVsbCkge1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBEb24ndCBjYWxsIG9sZENhdGNoRXJyb3IgaWYgd2UgZm91bmQgYSBTdXNwZW5zZVxuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Ll9jaGlsZERpZFN1c3BlbmQoZXJyb3IsIG5ld1ZOb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0b2xkQ2F0Y2hFcnJvcihlcnJvciwgbmV3Vk5vZGUsIG9sZFZOb2RlLCBlcnJvckluZm8pO1xufTtcblxuY29uc3Qgb2xkVW5tb3VudCA9IG9wdGlvbnMudW5tb3VudDtcbm9wdGlvbnMudW5tb3VudCA9IGZ1bmN0aW9uKHZub2RlKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50fSAqL1xuXHRjb25zdCBjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5fb25SZXNvbHZlKSB7XG5cdFx0Y29tcG9uZW50Ll9vblJlc29sdmUoKTtcblx0fVxuXG5cdC8vIGlmIHRoZSBjb21wb25lbnQgaXMgc3RpbGwgaHlkcmF0aW5nXG5cdC8vIG1vc3QgbGlrZWx5IGl0IGlzIGJlY2F1c2UgdGhlIGNvbXBvbmVudCBpcyBzdXNwZW5kZWRcblx0Ly8gd2Ugc2V0IHRoZSB2bm9kZS50eXBlIGFzIGBudWxsYCBzbyB0aGF0IGl0IGlzIG5vdCBhIHR5cGVvZiBmdW5jdGlvblxuXHQvLyBzbyB0aGUgdW5tb3VudCB3aWxsIHJlbW92ZSB0aGUgdm5vZGUuX2RvbVxuXHRpZiAoY29tcG9uZW50ICYmIHZub2RlLl9oeWRyYXRpbmcgPT09IHRydWUpIHtcblx0XHR2bm9kZS50eXBlID0gbnVsbDtcblx0fVxuXG5cdGlmIChvbGRVbm1vdW50KSBvbGRVbm1vdW50KHZub2RlKTtcbn07XG5cbmZ1bmN0aW9uIGRldGFjaGVkQ2xvbmUodm5vZGUsIGRldGFjaGVkUGFyZW50LCBwYXJlbnREb20pIHtcblx0aWYgKHZub2RlKSB7XG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQgJiYgdm5vZGUuX2NvbXBvbmVudC5fX2hvb2tzKSB7XG5cdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9faG9va3MuX2xpc3QuZm9yRWFjaChlZmZlY3QgPT4ge1xuXHRcdFx0XHRpZiAodHlwZW9mIGVmZmVjdC5fY2xlYW51cCA9PSAnZnVuY3Rpb24nKSBlZmZlY3QuX2NsZWFudXAoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2bm9kZS5fY29tcG9uZW50Ll9faG9va3MgPSBudWxsO1xuXHRcdH1cblxuXHRcdHZub2RlID0gYXNzaWduKHt9LCB2bm9kZSk7XG5cdFx0aWYgKHZub2RlLl9jb21wb25lbnQgIT0gbnVsbCkge1xuXHRcdFx0aWYgKHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9PT0gcGFyZW50RG9tKSB7XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9IGRldGFjaGVkUGFyZW50O1xuXHRcdFx0fVxuXHRcdFx0dm5vZGUuX2NvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXG5cdFx0dm5vZGUuX2NoaWxkcmVuID1cblx0XHRcdHZub2RlLl9jaGlsZHJlbiAmJlxuXHRcdFx0dm5vZGUuX2NoaWxkcmVuLm1hcChjaGlsZCA9PlxuXHRcdFx0XHRkZXRhY2hlZENsb25lKGNoaWxkLCBkZXRhY2hlZFBhcmVudCwgcGFyZW50RG9tKVxuXHRcdFx0KTtcblx0fVxuXG5cdHJldHVybiB2bm9kZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlT3JpZ2luYWwodm5vZGUsIGRldGFjaGVkUGFyZW50LCBvcmlnaW5hbFBhcmVudCkge1xuXHRpZiAodm5vZGUpIHtcblx0XHR2bm9kZS5fb3JpZ2luYWwgPSBudWxsO1xuXHRcdHZub2RlLl9jaGlsZHJlbiA9XG5cdFx0XHR2bm9kZS5fY2hpbGRyZW4gJiZcblx0XHRcdHZub2RlLl9jaGlsZHJlbi5tYXAoY2hpbGQgPT5cblx0XHRcdFx0cmVtb3ZlT3JpZ2luYWwoY2hpbGQsIGRldGFjaGVkUGFyZW50LCBvcmlnaW5hbFBhcmVudClcblx0XHRcdCk7XG5cblx0XHRpZiAodm5vZGUuX2NvbXBvbmVudCkge1xuXHRcdFx0aWYgKHZub2RlLl9jb21wb25lbnQuX3BhcmVudERvbSA9PT0gZGV0YWNoZWRQYXJlbnQpIHtcblx0XHRcdFx0aWYgKHZub2RlLl9kb20pIHtcblx0XHRcdFx0XHRvcmlnaW5hbFBhcmVudC5pbnNlcnRCZWZvcmUodm5vZGUuX2RvbSwgdm5vZGUuX25leHREb20pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZub2RlLl9jb21wb25lbnQuX2ZvcmNlID0gdHJ1ZTtcblx0XHRcdFx0dm5vZGUuX2NvbXBvbmVudC5fcGFyZW50RG9tID0gb3JpZ2luYWxQYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG4vLyBoYXZpbmcgY3VzdG9tIGluaGVyaXRhbmNlIGluc3RlYWQgb2YgYSBjbGFzcyBoZXJlIHNhdmVzIGEgbG90IG9mIGJ5dGVzXG5leHBvcnQgZnVuY3Rpb24gU3VzcGVuc2UoKSB7XG5cdC8vIHdlIGRvIG5vdCBjYWxsIHN1cGVyIGhlcmUgdG8gZ29sZiBzb21lIGJ5dGVzLi4uXG5cdHRoaXMuX3BlbmRpbmdTdXNwZW5zaW9uQ291bnQgPSAwO1xuXHR0aGlzLl9zdXNwZW5kZXJzID0gbnVsbDtcblx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbDtcbn1cblxuLy8gVGhpbmdzIHdlIGRvIGhlcmUgdG8gc2F2ZSBzb21lIGJ5dGVzIGJ1dCBhcmUgbm90IHByb3BlciBKUyBpbmhlcml0YW5jZTpcbi8vIC0gY2FsbCBgbmV3IENvbXBvbmVudCgpYCBhcyB0aGUgcHJvdG90eXBlXG4vLyAtIGRvIG5vdCBzZXQgYFN1c3BlbnNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcmAgdG8gYFN1c3BlbnNlYFxuU3VzcGVuc2UucHJvdG90eXBlID0gbmV3IENvbXBvbmVudCgpO1xuXG4vKipcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudH1cbiAqIEBwYXJhbSB7UHJvbWlzZX0gcHJvbWlzZSBUaGUgdGhyb3duIHByb21pc2VcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGU8YW55LCBhbnk+fSBzdXNwZW5kaW5nVk5vZGUgVGhlIHN1c3BlbmRpbmcgY29tcG9uZW50XG4gKi9cblN1c3BlbnNlLnByb3RvdHlwZS5fY2hpbGREaWRTdXNwZW5kID0gZnVuY3Rpb24ocHJvbWlzZSwgc3VzcGVuZGluZ1ZOb2RlKSB7XG5cdGNvbnN0IHN1c3BlbmRpbmdDb21wb25lbnQgPSBzdXNwZW5kaW5nVk5vZGUuX2NvbXBvbmVudDtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fSAqL1xuXHRjb25zdCBjID0gdGhpcztcblxuXHRpZiAoYy5fc3VzcGVuZGVycyA9PSBudWxsKSB7XG5cdFx0Yy5fc3VzcGVuZGVycyA9IFtdO1xuXHR9XG5cdGMuX3N1c3BlbmRlcnMucHVzaChzdXNwZW5kaW5nQ29tcG9uZW50KTtcblxuXHRjb25zdCByZXNvbHZlID0gc3VzcGVuZGVkKGMuX3Zub2RlKTtcblxuXHRsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblx0Y29uc3Qgb25SZXNvbHZlZCA9ICgpID0+IHtcblx0XHRpZiAocmVzb2x2ZWQpIHJldHVybjtcblxuXHRcdHJlc29sdmVkID0gdHJ1ZTtcblx0XHRzdXNwZW5kaW5nQ29tcG9uZW50Ll9vblJlc29sdmUgPSBudWxsO1xuXG5cdFx0aWYgKHJlc29sdmUpIHtcblx0XHRcdHJlc29sdmUob25TdXNwZW5zaW9uQ29tcGxldGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvblN1c3BlbnNpb25Db21wbGV0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHRzdXNwZW5kaW5nQ29tcG9uZW50Ll9vblJlc29sdmUgPSBvblJlc29sdmVkO1xuXG5cdGNvbnN0IG9uU3VzcGVuc2lvbkNvbXBsZXRlID0gKCkgPT4ge1xuXHRcdGlmICghLS1jLl9wZW5kaW5nU3VzcGVuc2lvbkNvdW50KSB7XG5cdFx0XHQvLyBJZiB0aGUgc3VzcGVuc2lvbiB3YXMgZHVyaW5nIGh5ZHJhdGlvbiB3ZSBkb24ndCBuZWVkIHRvIHJlc3RvcmUgdGhlXG5cdFx0XHQvLyBzdXNwZW5kZWQgY2hpbGRyZW4gaW50byB0aGUgX2NoaWxkcmVuIGFycmF5XG5cdFx0XHRpZiAoYy5zdGF0ZS5fc3VzcGVuZGVkKSB7XG5cdFx0XHRcdGNvbnN0IHN1c3BlbmRlZFZOb2RlID0gYy5zdGF0ZS5fc3VzcGVuZGVkO1xuXHRcdFx0XHRjLl92bm9kZS5fY2hpbGRyZW5bMF0gPSByZW1vdmVPcmlnaW5hbChcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZSxcblx0XHRcdFx0XHRzdXNwZW5kZWRWTm9kZS5fY29tcG9uZW50Ll9wYXJlbnREb20sXG5cdFx0XHRcdFx0c3VzcGVuZGVkVk5vZGUuX2NvbXBvbmVudC5fb3JpZ2luYWxQYXJlbnREb21cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Yy5zZXRTdGF0ZSh7IF9zdXNwZW5kZWQ6IChjLl9kZXRhY2hPbk5leHRSZW5kZXIgPSBudWxsKSB9KTtcblxuXHRcdFx0bGV0IHN1c3BlbmRlZDtcblx0XHRcdHdoaWxlICgoc3VzcGVuZGVkID0gYy5fc3VzcGVuZGVycy5wb3AoKSkpIHtcblx0XHRcdFx0c3VzcGVuZGVkLmZvcmNlVXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBXZSBkbyBub3Qgc2V0IGBzdXNwZW5kZWQ6IHRydWVgIGR1cmluZyBoeWRyYXRpb24gYmVjYXVzZSB3ZSB3YW50IHRoZSBhY3R1YWwgbWFya3VwXG5cdCAqIHRvIHJlbWFpbiBvbiBzY3JlZW4gYW5kIGh5ZHJhdGUgaXQgd2hlbiB0aGUgc3VzcGVuc2UgYWN0dWFsbHkgZ2V0cyByZXNvbHZlZC5cblx0ICogV2hpbGUgaW4gbm9uLWh5ZHJhdGlvbiBjYXNlcyB0aGUgdXN1YWwgZmFsbGJhY2sgLT4gY29tcG9uZW50IGZsb3cgd291bGQgb2Njb3VyLlxuXHQgKi9cblx0Y29uc3Qgd2FzSHlkcmF0aW5nID0gc3VzcGVuZGluZ1ZOb2RlLl9oeWRyYXRpbmcgPT09IHRydWU7XG5cdGlmICghYy5fcGVuZGluZ1N1c3BlbnNpb25Db3VudCsrICYmICF3YXNIeWRyYXRpbmcpIHtcblx0XHRjLnNldFN0YXRlKHsgX3N1c3BlbmRlZDogKGMuX2RldGFjaE9uTmV4dFJlbmRlciA9IGMuX3Zub2RlLl9jaGlsZHJlblswXSkgfSk7XG5cdH1cblx0cHJvbWlzZS50aGVuKG9uUmVzb2x2ZWQsIG9uUmVzb2x2ZWQpO1xufTtcblxuU3VzcGVuc2UucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX3N1c3BlbmRlcnMgPSBbXTtcbn07XG5cbi8qKlxuICogQHRoaXMge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlN1c3BlbnNlQ29tcG9uZW50fVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZUNvbXBvbmVudFtcInByb3BzXCJdfSBwcm9wc1xuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5TdXNwZW5zZVN0YXRlfSBzdGF0ZVxuICovXG5TdXNwZW5zZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24ocHJvcHMsIHN0YXRlKSB7XG5cdGlmICh0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIpIHtcblx0XHQvLyBXaGVuIHRoZSBTdXNwZW5zZSdzIF92bm9kZSB3YXMgY3JlYXRlZCBieSBhIGNhbGwgdG8gY3JlYXRlVk5vZGVcblx0XHQvLyAoaS5lLiBkdWUgdG8gYSBzZXRTdGF0ZSBmdXJ0aGVyIHVwIGluIHRoZSB0cmVlKVxuXHRcdC8vIGl0J3MgX2NoaWxkcmVuIHByb3AgaXMgbnVsbCwgaW4gdGhpcyBjYXNlIHdlIFwiZm9yZ2V0XCIgYWJvdXQgdGhlIHBhcmtlZCB2bm9kZXMgdG8gZGV0YWNoXG5cdFx0aWYgKHRoaXMuX3Zub2RlLl9jaGlsZHJlbikge1xuXHRcdFx0Y29uc3QgZGV0YWNoZWRQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNvbnN0IGRldGFjaGVkQ29tcG9uZW50ID0gdGhpcy5fdm5vZGUuX2NoaWxkcmVuWzBdLl9jb21wb25lbnQ7XG5cdFx0XHR0aGlzLl92bm9kZS5fY2hpbGRyZW5bMF0gPSBkZXRhY2hlZENsb25lKFxuXHRcdFx0XHR0aGlzLl9kZXRhY2hPbk5leHRSZW5kZXIsXG5cdFx0XHRcdGRldGFjaGVkUGFyZW50LFxuXHRcdFx0XHQoZGV0YWNoZWRDb21wb25lbnQuX29yaWdpbmFsUGFyZW50RG9tID0gZGV0YWNoZWRDb21wb25lbnQuX3BhcmVudERvbSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fZGV0YWNoT25OZXh0UmVuZGVyID0gbnVsbDtcblx0fVxuXG5cdC8vIFdyYXAgZmFsbGJhY2sgdHJlZSBpbiBhIFZOb2RlIHRoYXQgcHJldmVudHMgaXRzZWxmIGZyb20gYmVpbmcgbWFya2VkIGFzIGFib3J0aW5nIG1pZC1oeWRyYXRpb246XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9ICovXG5cdGNvbnN0IGZhbGxiYWNrID1cblx0XHRzdGF0ZS5fc3VzcGVuZGVkICYmIGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHByb3BzLmZhbGxiYWNrKTtcblx0aWYgKGZhbGxiYWNrKSBmYWxsYmFjay5faHlkcmF0aW5nID0gbnVsbDtcblxuXHRyZXR1cm4gW1xuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIHN0YXRlLl9zdXNwZW5kZWQgPyBudWxsIDogcHJvcHMuY2hpbGRyZW4pLFxuXHRcdGZhbGxiYWNrXG5cdF07XG59O1xuXG4vKipcbiAqIENoZWNrcyBhbmQgY2FsbHMgdGhlIHBhcmVudCBjb21wb25lbnQncyBfc3VzcGVuZGVkIG1ldGhvZCwgcGFzc2luZyBpbiB0aGVcbiAqIHN1c3BlbmRlZCB2bm9kZS4gVGhpcyBpcyBhIHdheSBmb3IgYSBwYXJlbnQgKGUuZy4gU3VzcGVuc2VMaXN0KSB0byBnZXQgbm90aWZpZWRcbiAqIHRoYXQgb25lIG9mIGl0cyBjaGlsZHJlbi9kZXNjZW5kYW50cyBzdXNwZW5kZWQuXG4gKlxuICogVGhlIHBhcmVudCBNQVkgcmV0dXJuIGEgY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGdldCBjYWxsZWQgd2hlbiB0aGVcbiAqIHN1c3BlbnNpb24gcmVzb2x2ZXMsIG5vdGlmeWluZyB0aGUgcGFyZW50IG9mIHRoZSBmYWN0LlxuICogTW9yZW92ZXIsIHRoZSBjYWxsYmFjayBnZXRzIGZ1bmN0aW9uIGB1bnN1c3BlbmRgIGFzIGEgcGFyYW1ldGVyLiBUaGUgcmVzb2x2ZWRcbiAqIGNoaWxkIGRlc2NlbmRhbnQgd2lsbCBub3QgYWN0dWFsbHkgZ2V0IHVuc3VzcGVuZGVkIHVudGlsIGB1bnN1c3BlbmRgIGdldHMgY2FsbGVkLlxuICogVGhpcyBpcyBhIHdheSBmb3IgdGhlIHBhcmVudCB0byBkZWxheSB1bnN1c3BlbmRpbmcuXG4gKlxuICogSWYgdGhlIHBhcmVudCBkb2VzIG5vdCByZXR1cm4gYSBjYWxsYmFjayB0aGVuIHRoZSByZXNvbHZlZCB2bm9kZVxuICogZ2V0cyB1bnN1c3BlbmRlZCBpbW1lZGlhdGVseSB3aGVuIGl0IHJlc29sdmVzLlxuICpcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKiBAcmV0dXJucyB7KCh1bnN1c3BlbmQ6ICgpID0+IHZvaWQpID0+IHZvaWQpP31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1c3BlbmRlZCh2bm9kZSkge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cblx0bGV0IGNvbXBvbmVudCA9IHZub2RlLl9wYXJlbnQuX2NvbXBvbmVudDtcblx0cmV0dXJuIGNvbXBvbmVudCAmJiBjb21wb25lbnQuX3N1c3BlbmRlZCAmJiBjb21wb25lbnQuX3N1c3BlbmRlZCh2bm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5KGxvYWRlcikge1xuXHRsZXQgcHJvbTtcblx0bGV0IGNvbXBvbmVudDtcblx0bGV0IGVycm9yO1xuXG5cdGZ1bmN0aW9uIExhenkocHJvcHMpIHtcblx0XHRpZiAoIXByb20pIHtcblx0XHRcdHByb20gPSBsb2FkZXIoKTtcblx0XHRcdHByb20udGhlbihcblx0XHRcdFx0ZXhwb3J0cyA9PiB7XG5cdFx0XHRcdFx0Y29tcG9uZW50ID0gZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGUgPT4ge1xuXHRcdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblxuXHRcdGlmICghY29tcG9uZW50KSB7XG5cdFx0XHR0aHJvdyBwcm9tO1xuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpO1xuXHR9XG5cblx0TGF6eS5kaXNwbGF5TmFtZSA9ICdMYXp5Jztcblx0TGF6eS5fZm9yd2FyZGVkID0gdHJ1ZTtcblx0cmV0dXJuIExhenk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIHRvQ2hpbGRBcnJheSB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBzdXNwZW5kZWQgfSBmcm9tICcuL3N1c3BlbnNlLmpzJztcblxuLy8gSW5kZXhlcyB0byBsaW5rZWQgbGlzdCBub2RlcyAobm9kZXMgYXJlIHN0b3JlZCBhcyBhcnJheXMgdG8gc2F2ZSBieXRlcykuXG5jb25zdCBTVVNQRU5ERURfQ09VTlQgPSAwO1xuY29uc3QgUkVTT0xWRURfQ09VTlQgPSAxO1xuY29uc3QgTkVYVF9OT0RFID0gMjtcblxuLy8gSGF2aW5nIGN1c3RvbSBpbmhlcml0YW5jZSBpbnN0ZWFkIG9mIGEgY2xhc3MgaGVyZSBzYXZlcyBhIGxvdCBvZiBieXRlcy5cbmV4cG9ydCBmdW5jdGlvbiBTdXNwZW5zZUxpc3QoKSB7XG5cdHRoaXMuX25leHQgPSBudWxsO1xuXHR0aGlzLl9tYXAgPSBudWxsO1xufVxuXG4vLyBNYXJrIG9uZSBvZiBjaGlsZCdzIGVhcmxpZXIgc3VzcGVuc2lvbnMgYXMgcmVzb2x2ZWQuXG4vLyBTb21lIHBlbmRpbmcgY2FsbGJhY2tzIG1heSBiZWNvbWUgY2FsbGFibGUgZHVlIHRvIHRoaXNcbi8vIChlLmcuIHRoZSBsYXN0IHN1c3BlbmRlZCBkZXNjZW5kYW50IGdldHMgcmVzb2x2ZWQgd2hlblxuLy8gcmV2ZWFsT3JkZXIgPT09ICd0b2dldGhlcicpLiBQcm9jZXNzIHRob3NlIGNhbGxiYWNrcyBhcyB3ZWxsLlxuY29uc3QgcmVzb2x2ZSA9IChsaXN0LCBjaGlsZCwgbm9kZSkgPT4ge1xuXHRpZiAoKytub2RlW1JFU09MVkVEX0NPVU5UXSA9PT0gbm9kZVtTVVNQRU5ERURfQ09VTlRdKSB7XG5cdFx0Ly8gVGhlIG51bWJlciBhIGNoaWxkIChvciBhbnkgb2YgaXRzIGRlc2NlbmRhbnRzKSBoYXMgYmVlbiBzdXNwZW5kZWRcblx0XHQvLyBtYXRjaGVzIHRoZSBudW1iZXIgb2YgdGltZXMgaXQncyBiZWVuIHJlc29sdmVkLiBUaGVyZWZvcmUgd2Vcblx0XHQvLyBtYXJrIHRoZSBjaGlsZCBhcyBjb21wbGV0ZWx5IHJlc29sdmVkIGJ5IGRlbGV0aW5nIGl0IGZyb20gLl9tYXAuXG5cdFx0Ly8gVGhpcyBpcyB1c2VkIHRvIGZpZ3VyZSBvdXQgd2hlbiAqYWxsKiBjaGlsZHJlbiBoYXZlIGJlZW4gY29tcGxldGVseVxuXHRcdC8vIHJlc29sdmVkIHdoZW4gcmV2ZWFsT3JkZXIgaXMgJ3RvZ2V0aGVyJy5cblx0XHRsaXN0Ll9tYXAuZGVsZXRlKGNoaWxkKTtcblx0fVxuXG5cdC8vIElmIHJldmVhbE9yZGVyIGlzIGZhbHN5IHRoZW4gd2UgY2FuIGRvIGFuIGVhcmx5IGV4aXQsIGFzIHRoZVxuXHQvLyBjYWxsYmFja3Mgd29uJ3QgZ2V0IHF1ZXVlZCBpbiB0aGUgbm9kZSBhbnl3YXkuXG5cdC8vIElmIHJldmVhbE9yZGVyIGlzICd0b2dldGhlcicgdGhlbiBhbHNvIGRvIGFuIGVhcmx5IGV4aXRcblx0Ly8gaWYgYWxsIHN1c3BlbmRlZCBkZXNjZW5kYW50cyBoYXZlIG5vdCB5ZXQgYmVlbiByZXNvbHZlZC5cblx0aWYgKFxuXHRcdCFsaXN0LnByb3BzLnJldmVhbE9yZGVyIHx8XG5cdFx0KGxpc3QucHJvcHMucmV2ZWFsT3JkZXJbMF0gPT09ICd0JyAmJiBsaXN0Ll9tYXAuc2l6ZSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gV2FsayB0aGUgY3VycmVudGx5IHN1c3BlbmRlZCBjaGlsZHJlbiBpbiBvcmRlciwgY2FsbGluZyB0aGVpclxuXHQvLyBzdG9yZWQgY2FsbGJhY2tzIG9uIHRoZSB3YXkuIFN0b3AgaWYgd2UgZW5jb3VudGVyIGEgY2hpbGQgdGhhdFxuXHQvLyBoYXMgbm90IGJlZW4gY29tcGxldGVseSByZXNvbHZlZCB5ZXQuXG5cdG5vZGUgPSBsaXN0Ll9uZXh0O1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdHdoaWxlIChub2RlLmxlbmd0aCA+IDMpIHtcblx0XHRcdG5vZGUucG9wKCkoKTtcblx0XHR9XG5cdFx0aWYgKG5vZGVbUkVTT0xWRURfQ09VTlRdIDwgbm9kZVtTVVNQRU5ERURfQ09VTlRdKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0bGlzdC5fbmV4dCA9IG5vZGUgPSBub2RlW05FWFRfTk9ERV07XG5cdH1cbn07XG5cbi8vIFRoaW5ncyB3ZSBkbyBoZXJlIHRvIHNhdmUgc29tZSBieXRlcyBidXQgYXJlIG5vdCBwcm9wZXIgSlMgaW5oZXJpdGFuY2U6XG4vLyAtIGNhbGwgYG5ldyBDb21wb25lbnQoKWAgYXMgdGhlIHByb3RvdHlwZVxuLy8gLSBkbyBub3Qgc2V0IGBTdXNwZW5zZS5wcm90b3R5cGUuY29uc3RydWN0b3JgIHRvIGBTdXNwZW5zZWBcblN1c3BlbnNlTGlzdC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50KCk7XG5cblN1c3BlbnNlTGlzdC5wcm90b3R5cGUuX3N1c3BlbmRlZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG5cdGNvbnN0IGxpc3QgPSB0aGlzO1xuXHRjb25zdCBkZWxlZ2F0ZWQgPSBzdXNwZW5kZWQobGlzdC5fdm5vZGUpO1xuXG5cdGxldCBub2RlID0gbGlzdC5fbWFwLmdldChjaGlsZCk7XG5cdG5vZGVbU1VTUEVOREVEX0NPVU5UXSsrO1xuXG5cdHJldHVybiB1bnN1c3BlbmQgPT4ge1xuXHRcdGNvbnN0IHdyYXBwZWRVbnN1c3BlbmQgPSAoKSA9PiB7XG5cdFx0XHRpZiAoIWxpc3QucHJvcHMucmV2ZWFsT3JkZXIpIHtcblx0XHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRoZSB1bmRlZmluZWQgKGZhbHN5KSByZXZlYWxPcmRlciwgYXMgdGhlcmVcblx0XHRcdFx0Ly8gaXMgbm8gbmVlZCB0byBjb29yZGluYXRlIGEgc3BlY2lmaWMgb3JkZXIgb3IgdW5zdXNwZW5kcy5cblx0XHRcdFx0dW5zdXNwZW5kKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRub2RlLnB1c2godW5zdXNwZW5kKTtcblx0XHRcdFx0cmVzb2x2ZShsaXN0LCBjaGlsZCwgbm9kZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpZiAoZGVsZWdhdGVkKSB7XG5cdFx0XHRkZWxlZ2F0ZWQod3JhcHBlZFVuc3VzcGVuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdyYXBwZWRVbnN1c3BlbmQoKTtcblx0XHR9XG5cdH07XG59O1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHByb3BzKSB7XG5cdHRoaXMuX25leHQgPSBudWxsO1xuXHR0aGlzLl9tYXAgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3QgY2hpbGRyZW4gPSB0b0NoaWxkQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuXHRpZiAocHJvcHMucmV2ZWFsT3JkZXIgJiYgcHJvcHMucmV2ZWFsT3JkZXJbMF0gPT09ICdiJykge1xuXHRcdC8vIElmIG9yZGVyID09PSAnYmFja3dhcmRzJyAob3IsIHdlbGwsIGFueXRoaW5nIHN0YXJ0aW5nIHdpdGggYSAnYicpXG5cdFx0Ly8gdGhlbiBmbGlwIHRoZSBjaGlsZCBsaXN0IGFyb3VuZCBzbyB0aGF0IHRoZSBsYXN0IGNoaWxkIHdpbGwgYmVcblx0XHQvLyB0aGUgZmlyc3QgaW4gdGhlIGxpbmtlZCBsaXN0LlxuXHRcdGNoaWxkcmVuLnJldmVyc2UoKTtcblx0fVxuXHQvLyBCdWlsZCB0aGUgbGlua2VkIGxpc3QuIEl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gaW4gcmV2ZXJzZSBvcmRlclxuXHQvLyBzbyB0aGF0IGBfbmV4dGAgcG9pbnRzIHRvIHRoZSBmaXJzdCBsaW5rZWQgbGlzdCBub2RlIHRvIGJlIHJlc29sdmVkLlxuXHRmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdC8vIENyZWF0ZSBhIG5ldyBsaW5rZWQgbGlzdCBub2RlIGFzIGFuIGFycmF5IG9mIGZvcm06XG5cdFx0Ly8gXHRbc3VzcGVuZGVkX2NvdW50LCByZXNvbHZlZF9jb3VudCwgbmV4dF9ub2RlXVxuXHRcdC8vIHdoZXJlIHN1c3BlbmRlZF9jb3VudCBhbmQgcmVzb2x2ZWRfY291bnQgYXJlIG51bWVyaWMgY291bnRlcnMgZm9yXG5cdFx0Ly8ga2VlcGluZyB0cmFjayBob3cgbWFueSB0aW1lcyBhIG5vZGUgaGFzIGJlZW4gc3VzcGVuZGVkIGFuZCByZXNvbHZlZC5cblx0XHQvL1xuXHRcdC8vIE5vdGUgdGhhdCBzdXNwZW5kZWRfY291bnQgc3RhcnRzIGZyb20gMSBpbnN0ZWFkIG9mIDAsIHNvIHdlIGNhbiBibG9ja1xuXHRcdC8vIHByb2Nlc3NpbmcgY2FsbGJhY2tzIHVudGlsIGNvbXBvbmVudERpZE1vdW50IGhhcyBiZWVuIGNhbGxlZC4gSW4gYSBzZW5zZVxuXHRcdC8vIG5vZGUgaXMgc3VzcGVuZGVkIGF0IGxlYXN0IHVudGlsIGNvbXBvbmVudERpZE1vdW50IGdldHMgY2FsbGVkIVxuXHRcdC8vXG5cdFx0Ly8gUGVuZGluZyBjYWxsYmFja3MgYXJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIG5vZGU6XG5cdFx0Ly8gXHRbc3VzcGVuZGVkX2NvdW50LCByZXNvbHZlZF9jb3VudCwgbmV4dF9ub2RlLCBjYWxsYmFja18wLCBjYWxsYmFja18xLCAuLi5dXG5cdFx0dGhpcy5fbWFwLnNldChjaGlsZHJlbltpXSwgKHRoaXMuX25leHQgPSBbMSwgMCwgdGhpcy5fbmV4dF0pKTtcblx0fVxuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59O1xuXG5TdXNwZW5zZUxpc3QucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IFN1c3BlbnNlTGlzdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbigpIHtcblx0Ly8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBjaGlsZHJlbiBhZnRlciBtb3VudGluZyBmb3IgdHdvIHJlYXNvbnM6XG5cdC8vIDEuIEFzIGVhY2ggbm9kZVtTVVNQRU5ERURfQ09VTlRdIHN0YXJ0cyBmcm9tIDEsIHRoaXMgaXRlcmF0aW9uIGluY3JlYXNlc1xuXHQvLyAgICBlYWNoIG5vZGVbUkVMRUFTRURfQ09VTlRdIGJ5IDEsIHRoZXJlZm9yZSBiYWxhbmNpbmcgdGhlIGNvdW50ZXJzLlxuXHQvLyAgICBUaGUgbm9kZXMgY2FuIG5vdyBiZSBjb21wbGV0ZWx5IGNvbnN1bWVkIGZyb20gdGhlIGxpbmtlZCBsaXN0LlxuXHQvLyAyLiBIYW5kbGUgbm9kZXMgdGhhdCBtaWdodCBoYXZlIGdvdHRlbiByZXNvbHZlZCBiZXR3ZWVuIHJlbmRlciBhbmRcblx0Ly8gICAgY29tcG9uZW50RGlkTW91bnQuXG5cdHRoaXMuX21hcC5mb3JFYWNoKChub2RlLCBjaGlsZCkgPT4ge1xuXHRcdHJlc29sdmUodGhpcywgY2hpbGQsIG5vZGUpO1xuXHR9KTtcbn07XG4iLCJpbXBvcnQge1xuXHRyZW5kZXIgYXMgcHJlYWN0UmVuZGVyLFxuXHRoeWRyYXRlIGFzIHByZWFjdEh5ZHJhdGUsXG5cdG9wdGlvbnMsXG5cdHRvQ2hpbGRBcnJheSxcblx0Q29tcG9uZW50XG59IGZyb20gJ3ByZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBSRUFDVF9FTEVNRU5UX1RZUEUgPVxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuZm9yICYmIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcblx0MHhlYWM3O1xuXG5jb25zdCBDQU1FTF9QUk9QUyA9IC9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8aW1hZ2V8bGV0dGVyfGxpZ2h0aW5nfG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxwb2ludGVyfHNoYXBlfHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHRyYW5zZm9ybXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vO1xuXG5jb25zdCBJU19ET00gPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBJbnB1dCB0eXBlcyBmb3Igd2hpY2ggb25jaGFuZ2Ugc2hvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgdG8gb25pbnB1dC5cbi8vIHR5cGU9XCJmaWxlfGNoZWNrYm94fHJhZGlvXCIsIHBsdXMgXCJyYW5nZVwiIGluIElFMTEuXG4vLyAoSUUxMSBkb2Vzbid0IHN1cHBvcnQgU3ltYm9sLCB3aGljaCB3ZSB1c2UgaGVyZSB0byB0dXJuIGByYWRgIGludG8gYHJhYCB3aGljaCBtYXRjaGVzIFwicmFuZ2VcIilcbmNvbnN0IG9uQ2hhbmdlSW5wdXRUeXBlID0gdHlwZSA9PlxuXHQodHlwZW9mIFN5bWJvbCAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT0gJ3N5bWJvbCdcblx0XHQ/IC9maWx8Y2hlfHJhZC9pXG5cdFx0OiAvZmlsfGNoZXxyYS9pXG5cdCkudGVzdCh0eXBlKTtcblxuLy8gU29tZSBsaWJyYXJpZXMgbGlrZSBgcmVhY3QtdmlydHVhbGl6ZWRgIGV4cGxpY2l0bHkgY2hlY2sgZm9yIHRoaXMuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcblxuLy8gYFVOU0FGRV8qYCBsaWZlY3ljbGUgaG9va3Ncbi8vIFByZWFjdCBvbmx5IGV2ZXIgaW52b2tlcyB0aGUgdW5wcmVmaXhlZCBtZXRob2RzLlxuLy8gSGVyZSB3ZSBwcm92aWRlIGEgYmFzZSBcImZhbGxiYWNrXCIgaW1wbGVtZW50YXRpb24gdGhhdCBjYWxscyBhbnkgZGVmaW5lZCBVTlNBRkVfIHByZWZpeGVkIG1ldGhvZC5cbi8vIC0gSWYgYSBjb21wb25lbnQgZGVmaW5lcyBpdHMgb3duIGBjb21wb25lbnREaWRNb3VudCgpYCAoaW5jbHVkaW5nIHZpYSBkZWZpbmVQcm9wZXJ0eSksIHVzZSB0aGF0LlxuLy8gLSBJZiBhIGNvbXBvbmVudCBkZWZpbmVzIGBVTlNBRkVfY29tcG9uZW50RGlkTW91bnQoKWAsIGBjb21wb25lbnREaWRNb3VudGAgaXMgdGhlIGFsaWFzIGdldHRlci9zZXR0ZXIuXG4vLyAtIElmIGFueXRoaW5nIGFzc2lnbnMgdG8gYW4gYFVOU0FGRV8qYCBwcm9wZXJ0eSwgdGhlIGFzc2lnbm1lbnQgaXMgZm9yd2FyZGVkIHRvIHRoZSB1bnByZWZpeGVkIHByb3BlcnR5LlxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzE5NDFcbltcblx0J2NvbXBvbmVudFdpbGxNb3VudCcsXG5cdCdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcblx0J2NvbXBvbmVudFdpbGxVcGRhdGUnXG5dLmZvckVhY2goa2V5ID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIGtleSwge1xuXHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpc1snVU5TQUZFXycgKyBrZXldO1xuXHRcdH0sXG5cdFx0c2V0KHYpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0dmFsdWU6IHZcblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KTtcblxuLyoqXG4gKiBQcm94eSByZW5kZXIoKSBzaW5jZSBSZWFjdCByZXR1cm5zIGEgQ29tcG9uZW50IHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFZOb2RlIHRyZWUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudCBET00gbm9kZSB0byByZW5kZXIgdm5vZGUgdHJlZSBpbnRvXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gT3B0aW9uYWwgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGNhbGxlZCBhZnRlciByZW5kZXJpbmdcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnQgfCBudWxsfSBUaGUgcm9vdCBjb21wb25lbnQgcmVmZXJlbmNlIG9yIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50LCBjYWxsYmFjaykge1xuXHQvLyBSZWFjdCBkZXN0cm95cyBhbnkgZXhpc3RpbmcgRE9NIG5vZGVzLCBzZWUgIzE3Mjdcblx0Ly8gLi4uYnV0IG9ubHkgb24gdGhlIGZpcnN0IHJlbmRlciwgc2VlICMxODI4XG5cdGlmIChwYXJlbnQuX2NoaWxkcmVuID09IG51bGwpIHtcblx0XHRwYXJlbnQudGV4dENvbnRlbnQgPSAnJztcblx0fVxuXG5cdHByZWFjdFJlbmRlcih2bm9kZSwgcGFyZW50KTtcblx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuXG5cdHJldHVybiB2bm9kZSA/IHZub2RlLl9jb21wb25lbnQgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZSh2bm9kZSwgcGFyZW50LCBjYWxsYmFjaykge1xuXHRwcmVhY3RIeWRyYXRlKHZub2RlLCBwYXJlbnQpO1xuXHRpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG5cblx0cmV0dXJuIHZub2RlID8gdm5vZGUuX2NvbXBvbmVudCA6IG51bGw7XG59XG5cbmxldCBvbGRFdmVudEhvb2sgPSBvcHRpb25zLmV2ZW50O1xub3B0aW9ucy5ldmVudCA9IGUgPT4ge1xuXHRpZiAob2xkRXZlbnRIb29rKSBlID0gb2xkRXZlbnRIb29rKGUpO1xuXHRlLnBlcnNpc3QgPSBlbXB0eTtcblx0ZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IGlzUHJvcGFnYXRpb25TdG9wcGVkO1xuXHRlLmlzRGVmYXVsdFByZXZlbnRlZCA9IGlzRGVmYXVsdFByZXZlbnRlZDtcblx0cmV0dXJuIChlLm5hdGl2ZUV2ZW50ID0gZSk7XG59O1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbmZ1bmN0aW9uIGlzUHJvcGFnYXRpb25TdG9wcGVkKCkge1xuXHRyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGU7XG59XG5cbmZ1bmN0aW9uIGlzRGVmYXVsdFByZXZlbnRlZCgpIHtcblx0cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZDtcbn1cblxubGV0IGNsYXNzTmFtZURlc2NyaXB0b3IgPSB7XG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0Z2V0KCkge1xuXHRcdHJldHVybiB0aGlzLmNsYXNzO1xuXHR9XG59O1xuXG5sZXQgb2xkVk5vZGVIb29rID0gb3B0aW9ucy52bm9kZTtcbm9wdGlvbnMudm5vZGUgPSB2bm9kZSA9PiB7XG5cdGxldCB0eXBlID0gdm5vZGUudHlwZTtcblx0bGV0IHByb3BzID0gdm5vZGUucHJvcHM7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcztcblxuXHQvLyBvbmx5IG5vcm1hbGl6ZSBwcm9wcyBvbiBFbGVtZW50IG5vZGVzXG5cdGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRjb25zdCBub25DdXN0b21FbGVtZW50ID0gdHlwZS5pbmRleE9mKCctJykgPT09IC0xO1xuXHRcdG5vcm1hbGl6ZWRQcm9wcyA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgaSBpbiBwcm9wcykge1xuXHRcdFx0bGV0IHZhbHVlID0gcHJvcHNbaV07XG5cblx0XHRcdGlmIChJU19ET00gJiYgaSA9PT0gJ2NoaWxkcmVuJyAmJiB0eXBlID09PSAnbm9zY3JpcHQnKSB7XG5cdFx0XHRcdC8vIEVtdWxhdGUgUmVhY3QncyBiZWhhdmlvciBvZiBub3QgcmVuZGVyaW5nIHRoZSBjb250ZW50cyBvZiBub3NjcmlwdCB0YWdzIG9uIHRoZSBjbGllbnQuXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09PSAndmFsdWUnICYmICdkZWZhdWx0VmFsdWUnIGluIHByb3BzICYmIHZhbHVlID09IG51bGwpIHtcblx0XHRcdFx0Ly8gU2tpcCBhcHBseWluZyB2YWx1ZSBpZiBpdCBpcyBudWxsL3VuZGVmaW5lZCBhbmQgd2UgYWxyZWFkeSBzZXRcblx0XHRcdFx0Ly8gYSBkZWZhdWx0IHZhbHVlXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0aSA9PT0gJ2RlZmF1bHRWYWx1ZScgJiZcblx0XHRcdFx0J3ZhbHVlJyBpbiBwcm9wcyAmJlxuXHRcdFx0XHRwcm9wcy52YWx1ZSA9PSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gYGRlZmF1bHRWYWx1ZWAgaXMgdHJlYXRlZCBhcyBhIGZhbGxiYWNrIGB2YWx1ZWAgd2hlbiBhIHZhbHVlIHByb3AgaXMgcHJlc2VudCBidXQgbnVsbC91bmRlZmluZWQuXG5cdFx0XHRcdC8vIGBkZWZhdWx0VmFsdWVgIGZvciBFbGVtZW50cyB3aXRoIG5vIHZhbHVlIHByb3AgaXMgdGhlIHNhbWUgYXMgdGhlIERPTSBkZWZhdWx0VmFsdWUgcHJvcGVydHkuXG5cdFx0XHRcdGkgPSAndmFsdWUnO1xuXHRcdFx0fSBlbHNlIGlmIChpID09PSAnZG93bmxvYWQnICYmIHZhbHVlID09PSB0cnVlKSB7XG5cdFx0XHRcdC8vIENhbGxpbmcgYHNldEF0dHJpYnV0ZWAgd2l0aCBhIHRydXRoeSB2YWx1ZSB3aWxsIGxlYWQgdG8gaXQgYmVpbmdcblx0XHRcdFx0Ly8gcGFzc2VkIGFzIGEgc3RyaW5naWZpZWQgdmFsdWUsIGUuZy4gYGRvd25sb2FkPVwidHJ1ZVwiYC4gUmVhY3Rcblx0XHRcdFx0Ly8gY29udmVydHMgaXQgdG8gYW4gZW1wdHkgc3RyaW5nIGluc3RlYWQsIG90aGVyd2lzZSB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIHZhbHVlIHdpbGwgYmUgdXNlZCBhcyB0aGUgZmlsZSBuYW1lIGFuZCB0aGUgZmlsZSB3aWxsIGJlIGNhbGxlZFxuXHRcdFx0XHQvLyBcInRydWVcIiB1cG9uIGRvd25sb2FkaW5nIGl0LlxuXHRcdFx0XHR2YWx1ZSA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmICgvb25kb3VibGVjbGljay9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmRibGNsaWNrJztcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdC9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChpICsgdHlwZSkgJiZcblx0XHRcdFx0IW9uQ2hhbmdlSW5wdXRUeXBlKHByb3BzLnR5cGUpXG5cdFx0XHQpIHtcblx0XHRcdFx0aSA9ICdvbmlucHV0Jztcblx0XHRcdH0gZWxzZSBpZiAoL15vbmZvY3VzJC9pLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9ICdvbmZvY3VzaW4nO1xuXHRcdFx0fSBlbHNlIGlmICgvXm9uYmx1ciQvaS50ZXN0KGkpKSB7XG5cdFx0XHRcdGkgPSAnb25mb2N1c291dCc7XG5cdFx0XHR9IGVsc2UgaWYgKC9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChub25DdXN0b21FbGVtZW50ICYmIENBTUVMX1BST1BTLnRlc3QoaSkpIHtcblx0XHRcdFx0aSA9IGkucmVwbGFjZSgvW0EtWjAtOV0vZywgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgc3VwcG9ydCBmb3Igb25JbnB1dCBhbmQgb25DaGFuZ2UsIHNlZSAjMzU2MVxuXHRcdFx0Ly8gaWYgd2UgaGF2ZSBhbiBvbmlucHV0IHByb3AgYWxyZWFkeSBjaGFuZ2UgaXQgdG8gb25pbnB1dENhcHR1cmVcblx0XHRcdGlmICgvXm9uaW5wdXQkL2kudGVzdChpKSkge1xuXHRcdFx0XHRpID0gaS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZFByb3BzW2ldKSB7XG5cdFx0XHRcdFx0aSA9ICdvbmlucHV0Q2FwdHVyZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHN1cHBvcnQgZm9yIGFycmF5IHNlbGVjdCB2YWx1ZXM6IDxzZWxlY3QgbXVsdGlwbGUgdmFsdWU9e1tdfSAvPlxuXHRcdGlmIChcblx0XHRcdHR5cGUgPT0gJ3NlbGVjdCcgJiZcblx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5tdWx0aXBsZSAmJlxuXHRcdFx0QXJyYXkuaXNBcnJheShub3JtYWxpemVkUHJvcHMudmFsdWUpXG5cdFx0KSB7XG5cdFx0XHQvLyBmb3JFYWNoKCkgYWx3YXlzIHJldHVybnMgdW5kZWZpbmVkLCB3aGljaCB3ZSBhYnVzZSBoZXJlIHRvIHVuc2V0IHRoZSB2YWx1ZSBwcm9wLlxuXHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy52YWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKSAhPSAtMTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEFkZGluZyBzdXBwb3J0IGZvciBkZWZhdWx0VmFsdWUgaW4gc2VsZWN0IHRhZ1xuXHRcdGlmICh0eXBlID09ICdzZWxlY3QnICYmIG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUgIT0gbnVsbCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzLnZhbHVlID0gdG9DaGlsZEFycmF5KHByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wcy5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdGNoaWxkLnByb3BzLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdG5vcm1hbGl6ZWRQcm9wcy5kZWZhdWx0VmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgIT0gLTE7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucHJvcHMuc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0bm9ybWFsaXplZFByb3BzLmRlZmF1bHRWYWx1ZSA9PSBjaGlsZC5wcm9wcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dm5vZGUucHJvcHMgPSBub3JtYWxpemVkUHJvcHM7XG5cblx0XHRpZiAocHJvcHMuY2xhc3MgIT0gcHJvcHMuY2xhc3NOYW1lKSB7XG5cdFx0XHRjbGFzc05hbWVEZXNjcmlwdG9yLmVudW1lcmFibGUgPSAnY2xhc3NOYW1lJyBpbiBwcm9wcztcblx0XHRcdGlmIChwcm9wcy5jbGFzc05hbWUgIT0gbnVsbCkgbm9ybWFsaXplZFByb3BzLmNsYXNzID0gcHJvcHMuY2xhc3NOYW1lO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5vcm1hbGl6ZWRQcm9wcywgJ2NsYXNzTmFtZScsIGNsYXNzTmFtZURlc2NyaXB0b3IpO1xuXHRcdH1cblx0fVxuXG5cdHZub2RlLiQkdHlwZW9mID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuXG5cdGlmIChvbGRWTm9kZUhvb2spIG9sZFZOb2RlSG9vayh2bm9kZSk7XG59O1xuXG4vLyBPbmx5IG5lZWRlZCBmb3IgcmVhY3QtcmVsYXlcbmxldCBjdXJyZW50Q29tcG9uZW50O1xuY29uc3Qgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xub3B0aW9ucy5fcmVuZGVyID0gZnVuY3Rpb24odm5vZGUpIHtcblx0aWYgKG9sZEJlZm9yZVJlbmRlcikge1xuXHRcdG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cdH1cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG59O1xuXG4vLyBUaGlzIGlzIGEgdmVyeSB2ZXJ5IHByaXZhdGUgaW50ZXJuYWwgZnVuY3Rpb24gZm9yIFJlYWN0IGl0XG4vLyBpcyB1c2VkIHRvIHNvcnQtb2YgZG8gcnVudGltZSBkZXBlbmRlbmN5IGluamVjdGlvbi4gU28gZmFyXG4vLyBvbmx5IGByZWFjdC1yZWxheWAgbWFrZXMgdXNlIG9mIGl0LiBJdCB1c2VzIGl0IHRvIHJlYWQgdGhlXG4vLyBjb250ZXh0IHZhbHVlLlxuZXhwb3J0IGNvbnN0IF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0ge1xuXHRSZWFjdEN1cnJlbnREaXNwYXRjaGVyOiB7XG5cdFx0Y3VycmVudDoge1xuXHRcdFx0cmVhZENvbnRleHQoY29udGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gY3VycmVudENvbXBvbmVudC5fZ2xvYmFsQ29udGV4dFtjb250ZXh0Ll9pZF0ucHJvcHMudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuIiwiaW1wb3J0IG5vb3AgZnJvbSBcImxvZGFzaC1lcy9ub29wXCI7XG5pbXBvcnQgeyBDb21wb25lbnRDaGlsZHJlbiwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4uL3ByZWFjdC1leHRlbnNpb25zL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcblxudHlwZSBSYWZDYWxsYmFja1R5cGUgPSAobXNTaW5jZUxhc3Q6IG51bWJlciwgdGFnPzogYW55KSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgQ29udGV4dFR5cGUge1xuICAgIGFkZENhbGxiYWNrOiAoY2FsbGJhY2s6IFJhZkNhbGxiYWNrVHlwZSwgdGFnPzogYW55KSA9PiB2b2lkO1xuICAgIHJlbW92ZUNhbGxiYWNrOiAoY2FsbGJhY2s6IFJhZkNhbGxiYWNrVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudWxsIHwgQ29udGV4dFR5cGU+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbiB9KSB7XG5cbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrPENvbnRleHRUeXBlW1wiYWRkQ2FsbGJhY2tcIl0+KChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrPENvbnRleHRUeXBlW1wicmVtb3ZlQ2FsbGJhY2tcIl0+KChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG5cbiAgICBjb25zdCBjb250ZXh0SW5mbyA9IHVzZVJlZjxDb250ZXh0VHlwZT4obnVsbCEpO1xuICAgIGlmIChjb250ZXh0SW5mby5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGNvbnRleHRJbmZvLmN1cnJlbnQgPSB7IGFkZENhbGxiYWNrLCByZW1vdmVDYWxsYmFjayB9O1xuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZjxNYXA8UmFmQ2FsbGJhY2tUeXBlLCBhbnk+PihudWxsISk7XG4gICAgaWYgKGFsbENhbGxiYWNrcy5jdXJyZW50ID09IG51bGwpXG4gICAgICAgIGFsbENhbGxiYWNrcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGhhbmRsZSA9IC0xO1xuXG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2JhdGNoZWRSYWZDYWxsYmFjaywgdGFnXSBvZiBhbGxDYWxsYmFja3MuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGJhdGNoZWRSYWZDYWxsYmFjayhtc1NpbmNlTGFzdCwgdGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRJbmZvLmN1cnJlbnR9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlcj4pXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlQW5pbWF0aW9uRnJhbWVQYXJhbWV0ZXJzIHtcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB3aXRoIGVmZmVjdGl2ZWx5IHRoZSBzYW1lIHJ1bGVzIGFzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXG4gICAgICogXG4gICAgICogRG9lc24ndCBuZWVkIHRvIGJlIHN0YWJsZS5cbiAgICAgKi9cbiAgICBjYWxsYmFjazogbnVsbCB8ICgobXNTaW5jZUxhc3Q6IG51bWJlcikgPT4gdm9pZCk7XG59XG5cbi8qKlxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICogXG4gKiBQYXNzaW5nIGBudWxsYCBpcyBmaW5lIGFuZCBzaW1wbHkgc3RvcHMgdGhlIGVmZmVjdCB1bnRpbCB5b3UgcmVzdGFydCBpdCBieSBwcm92aWRpbmcgYSBub24tbnVsbCBjYWxsYmFjay5cbiAqIFxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfTogVXNlQW5pbWF0aW9uRnJhbWVQYXJhbWV0ZXJzKTogdm9pZCB7XG4gICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIGdpdmVuIGNhbGxiYWNrIHRoYXQncyBzdGFibGVcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/IG5vb3ApO1xuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xuXG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhYmxlQ2FsbGJhY2sobXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSlcbn1cbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlSnNEYXRhO1xuIiwiaW1wb3J0IGNvcmVKc0RhdGEgZnJvbSAnLi9fY29yZUpzRGF0YS5qcyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1NvdXJjZTtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNNYXNrZWQgZnJvbSAnLi9faXNNYXNrZWQuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXRpdmVDcmVhdGU7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoRGVsZXRlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hHZXQ7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaEhhcztcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hTZXQ7XG4iLCJpbXBvcnQgaGFzaENsZWFyIGZyb20gJy4vX2hhc2hDbGVhci5qcyc7XG5pbXBvcnQgaGFzaERlbGV0ZSBmcm9tICcuL19oYXNoRGVsZXRlLmpzJztcbmltcG9ydCBoYXNoR2V0IGZyb20gJy4vX2hhc2hHZXQuanMnO1xuaW1wb3J0IGhhc2hIYXMgZnJvbSAnLi9faGFzaEhhcy5qcyc7XG5pbXBvcnQgaGFzaFNldCBmcm9tICcuL19oYXNoU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2g7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxO1xuIiwiaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NvY0luZGV4T2Y7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVHZXQ7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVIYXM7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlU2V0O1xuIiwiaW1wb3J0IGxpc3RDYWNoZUNsZWFyIGZyb20gJy4vX2xpc3RDYWNoZUNsZWFyLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVEZWxldGUgZnJvbSAnLi9fbGlzdENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVHZXQgZnJvbSAnLi9fbGlzdENhY2hlR2V0LmpzJztcbmltcG9ydCBsaXN0Q2FjaGVIYXMgZnJvbSAnLi9fbGlzdENhY2hlSGFzLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVTZXQgZnJvbSAnLi9fbGlzdENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q2FjaGU7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImltcG9ydCBIYXNoIGZyb20gJy4vX0hhc2guanMnO1xuaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlQ2xlYXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2V5YWJsZTtcbiIsImltcG9ydCBpc0tleWFibGUgZnJvbSAnLi9faXNLZXlhYmxlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXBEYXRhO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBnZXRNYXBEYXRhIGZyb20gJy4vX2dldE1hcERhdGEuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlR2V0O1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlSGFzO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVTZXQ7XG4iLCJpbXBvcnQgbWFwQ2FjaGVDbGVhciBmcm9tICcuL19tYXBDYWNoZUNsZWFyLmpzJztcbmltcG9ydCBtYXBDYWNoZURlbGV0ZSBmcm9tICcuL19tYXBDYWNoZURlbGV0ZS5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVHZXQgZnJvbSAnLi9fbWFwQ2FjaGVHZXQuanMnO1xuaW1wb3J0IG1hcENhY2hlSGFzIGZyb20gJy4vX21hcENhY2hlSGFzLmpzJztcbmltcG9ydCBtYXBDYWNoZVNldCBmcm9tICcuL19tYXBDYWNoZVNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBDYWNoZTtcbiIsImltcG9ydCBNYXBDYWNoZSBmcm9tICcuL19NYXBDYWNoZS5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gXCJsb2Rhc2gtZXMvbWVtb2l6ZVwiO1xuaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgaCwgUmVuZGVyYWJsZVByb3BzIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBFeGNsdXNpdmVDb250ZXh0VHlwZSwgU3dhcHBhYmxlQ29udGV4dFR5cGUsIFRyYW5zaXRpb25EaXJlY3Rpb24sIFRyYW5zaXRpb25QaGFzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmZ1bmN0aW9uIGdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24oZXhjbHVzaXZpdHlLZXk6IHN0cmluZyk6IENvbnRleHQ8RXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsPjtcbmZ1bmN0aW9uIGdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0UHJlbWVtb2l6YXRpb24oZXhjbHVzaXZpdHlLZXk6IG51bGwgfCB1bmRlZmluZWQpOiBudWxsO1xuZnVuY3Rpb24gZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbihleGNsdXNpdml0eUtleTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IENvbnRleHQ8RXhjbHVzaXZlQ29udGV4dFR5cGUgfCBudWxsPiB8IG51bGw7XG5mdW5jdGlvbiBnZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dFByZW1lbW9pemF0aW9uKGV4Y2x1c2l2aXR5S2V5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogQ29udGV4dDxFeGNsdXNpdmVDb250ZXh0VHlwZSB8IG51bGw+IHwgbnVsbCB7XG4gICAgaWYgKGV4Y2x1c2l2aXR5S2V5ID09IG51bGwpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiBjcmVhdGVDb250ZXh0PEV4Y2x1c2l2ZUNvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG59XG5cbmV4cG9ydCBjb25zdCBTd2FwcGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTd2FwcGFibGVDb250ZXh0VHlwZT4oeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4gZmFsc2UgfSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29udGV4dCBmb3IgYSBnaXZlbiBgZXhjbHVzaXZpdHlLZXlgLCBjcmVhdGluZyBvbmUgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0LlxuICogXG4gKiBJZiBcbiAqL1xuZXhwb3J0IGNvbnN0IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0OiB0eXBlb2YgZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbiA9IG1lbW9pemUoZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbik7XG5cbmludGVyZmFjZSBDc3NDbGFzc2VzUHJvdmlkZXJQcm9wcyB7XG4gICAgYmFzZTogc3RyaW5nO1xuICAgIGVudGVyOiBzdHJpbmc7XG4gICAgZXhpdDogc3RyaW5nO1xuICAgIG1lYXN1cmU6IHN0cmluZztcbiAgICBpbml0OiBzdHJpbmc7XG4gICAgdHJhbnNpdGlvbjogc3RyaW5nO1xuICAgIGZpbmFsaXplOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDc3NDbGFzc0NvbnRleHRUeXBlIHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IHN0cmluZztcbiAgICBHZXRFbnRlckNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0TWVhc3VyZUNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0SW5pdENsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBzdHJpbmc7XG4gICAgR2V0RmluYWxpemVDbGFzczogKCkgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBDc3NDbGFzc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PENzc0NsYXNzQ29udGV4dFR5cGU+KHtcbiAgICBHZXRCYXNlQ2xhc3M6ICgpID0+IFwicHRsXCIsXG4gICAgR2V0RW50ZXJDbGFzczogKCkgPT4gXCJuXCIsXG4gICAgR2V0RXhpdENsYXNzOiAoKSA9PiBcInhcIixcbiAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IFwibVwiLFxuICAgIEdldEluaXRDbGFzczogKCkgPT4gXCJpXCIsXG4gICAgR2V0VHJhbnNpdGlvbkNsYXNzOiAoKSA9PiBcInRcIixcbiAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBcImZcIixcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBDc3NDbGFzc2VzUHJvdmlkZXIoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUsIGNoaWxkcmVuLCAuLi5yZXN0IH06IFJlbmRlcmFibGVQcm9wczxQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPj4pIHtcbiAgICBjb25zdCBjb250ZXh0T2JqZWN0ID0gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUoeyBiYXNlLCBlbnRlciwgZXhpdCwgbWVhc3VyZSwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemUgfSk7XG4gICAgcmV0dXJuICg8Q3NzQ2xhc3NDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0T2JqZWN0fSAgey4uLnJlc3R9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDc3NDbGFzc2VzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgR2V0QmFzZUNsYXNzLFxuICAgICAgICBHZXRFbnRlckNsYXNzLFxuICAgICAgICBHZXRFeGl0Q2xhc3MsXG4gICAgICAgIEdldE1lYXN1cmVDbGFzcyxcbiAgICAgICAgR2V0SW5pdENsYXNzLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3MsXG4gICAgICAgIEdldEZpbmFsaXplQ2xhc3NcbiAgICB9ID0gdXNlQ29udGV4dChDc3NDbGFzc0NvbnRleHQpO1xuICAgIGNvbnN0IEdldERpcmVjdGlvbkNsYXNzID0gdXNlQ2FsbGJhY2soKGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbik6IHN0cmluZyA9PiB7IHN3aXRjaCAoZGlyZWN0aW9uKSB7IGNhc2UgXCJlbnRlclwiOiByZXR1cm4gR2V0RW50ZXJDbGFzcygpOyBjYXNlIFwiZXhpdFwiOiByZXR1cm4gR2V0RXhpdENsYXNzKCk7IH0gfSwgW10pO1xuICAgIGNvbnN0IEdldFBoYXNlQ2xhc3MgPSB1c2VDYWxsYmFjaygocGhhc2U6IFRyYW5zaXRpb25QaGFzZSk6IHN0cmluZyA9PiB7IHN3aXRjaCAocGhhc2UpIHsgY2FzZSBcIm1lYXN1cmVcIjogcmV0dXJuIEdldE1lYXN1cmVDbGFzcygpOyBjYXNlIFwiaW5pdFwiOiByZXR1cm4gR2V0SW5pdENsYXNzKCk7IGNhc2UgXCJ0cmFuc2l0aW9uXCI6IHJldHVybiBHZXRUcmFuc2l0aW9uQ2xhc3MoKTsgY2FzZSBcImZpbmFsaXplXCI6IHJldHVybiBHZXRGaW5hbGl6ZUNsYXNzKCk7IH0gfSwgW10pO1xuICAgIHJldHVybiB7XG4gICAgICAgIEdldEJhc2VDbGFzcyxcbiAgICAgICAgR2V0RW50ZXJDbGFzcyxcbiAgICAgICAgR2V0RXhpdENsYXNzLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3MsXG4gICAgICAgIEdldEluaXRDbGFzcyxcbiAgICAgICAgR2V0VHJhbnNpdGlvbkNsYXNzLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzLFxuICAgICAgICBHZXREaXJlY3Rpb25DbGFzcyxcbiAgICAgICAgR2V0UGhhc2VDbGFzc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdXNlQ3NzQ2xhc3NDb250ZXh0VmFsdWUobmV3VmFsdWVzOiBQYXJ0aWFsPENzc0NsYXNzZXNQcm92aWRlclByb3BzPik6IENzc0NsYXNzQ29udGV4dFR5cGUge1xuICAgIGNvbnN0IG9sZFZhbHVlcyA9IHVzZUNvbnRleHQoQ3NzQ2xhc3NDb250ZXh0KTtcbiAgICBjb25zdCBiYXNlID0gKG5ld1ZhbHVlcz8uYmFzZSA/PyBvbGRWYWx1ZXMuR2V0QmFzZUNsYXNzKCkpO1xuICAgIGNvbnN0IGVudGVyID0gKG5ld1ZhbHVlcz8uZW50ZXIgPz8gb2xkVmFsdWVzLkdldEVudGVyQ2xhc3MoKSk7XG4gICAgY29uc3QgZXhpdCA9IChuZXdWYWx1ZXM/LmV4aXQgPz8gb2xkVmFsdWVzLkdldEV4aXRDbGFzcygpKTtcbiAgICBjb25zdCBtZWFzdXJlID0gKG5ld1ZhbHVlcz8ubWVhc3VyZSA/PyBvbGRWYWx1ZXMuR2V0TWVhc3VyZUNsYXNzKCkpO1xuICAgIGNvbnN0IGluaXQgPSAobmV3VmFsdWVzPy5pbml0ID8/IG9sZFZhbHVlcy5HZXRJbml0Q2xhc3MoKSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9IChuZXdWYWx1ZXM/LnRyYW5zaXRpb24gPz8gb2xkVmFsdWVzLkdldFRyYW5zaXRpb25DbGFzcygpKTtcbiAgICBjb25zdCBmaW5hbGl6ZSA9IChuZXdWYWx1ZXM/LmZpbmFsaXplID8/IG9sZFZhbHVlcy5HZXRGaW5hbGl6ZUNsYXNzKCkpO1xuXG4gICAgcmV0dXJuIHVzZU1lbW88Q3NzQ2xhc3NDb250ZXh0VHlwZT4oKCkgPT4gKHtcbiAgICAgICAgR2V0QmFzZUNsYXNzOiAoKSA9PiBiYXNlISxcbiAgICAgICAgR2V0RW50ZXJDbGFzczogKCkgPT4gZW50ZXIhLFxuICAgICAgICBHZXRFeGl0Q2xhc3M6ICgpID0+IGV4aXQhLFxuICAgICAgICBHZXRNZWFzdXJlQ2xhc3M6ICgpID0+IG1lYXN1cmUhLFxuICAgICAgICBHZXRJbml0Q2xhc3M6ICgpID0+IGluaXQhLFxuICAgICAgICBHZXRUcmFuc2l0aW9uQ2xhc3M6ICgpID0+IHRyYW5zaXRpb24hLFxuICAgICAgICBHZXRGaW5hbGl6ZUNsYXNzOiAoKSA9PiBmaW5hbGl6ZSEsXG4gICAgfSksIFtiYXNlLCBlbnRlciwgZXhpdCwgaW5pdCwgdHJhbnNpdGlvbiwgZmluYWxpemVdKVxufVxuXG4iLCJcclxuaW1wb3J0IHsgRnVuY3Rpb25hbENvbXBvbmVudCwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5cclxudHlwZSBGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50UHJvcHM8UCwgRT4gPSBPbWl0PFAsIFwicmVmXCI+ICYgeyByZWY/OiBSZWY8RT4gfVxyXG50eXBlIEZvcndhcmRlZEZ1bmN0aW9uYWxDb21wb25lbnQ8UCwgRT4gPSAocDogRm9yd2FyZGVkRnVuY3Rpb25hbENvbXBvbmVudFByb3BzPFAsIEU+KSA9PiBWTm9kZTxGb3J3YXJkZWRGdW5jdGlvbmFsQ29tcG9uZW50UHJvcHM8UCwgRT4+XHJcblxyXG50eXBlIEVsZW1lbnRGcm9tUHJvcHM8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGFueT4+ID0gUCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPGluZmVyIEU+ID8gRSA6IEV2ZW50VGFyZ2V0O1xyXG50eXBlIFByb3BzRnJvbUNvbXBvbmVudDxDIGV4dGVuZHMgRnVuY3Rpb25hbENvbXBvbmVudDxhbnk+PiA9IEMgZXh0ZW5kcyBGdW5jdGlvbmFsQ29tcG9uZW50PGluZmVyIFA+ID8gUCA6IHVua25vd247XHJcblxyXG4vKipcclxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxyXG4gKiBOYW1lbHkgaXQgaW52b2x2ZXMgZGUtZ3Vua2luZyB0aGUgdHlwZSBzeXN0ZW0gYnkgbGV0dGluZyB1cyByZXR1cm4gKmdlbmVyaWMqIGZ1bmN0aW9uIGFuZCBwbGF5aW5nIG5pY2Ugd2l0aCBSZWFjdC4gSW4gYWxsIG90aGVyIHJlc3BlY3RzLCBpdCBhY3RzIGxpa2UgYGZvcndhcmRSZWZgLlxyXG4gKiBcclxuICogVE9ETzogU3RpbGwgbmVlZGVkP1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmPEMgZXh0ZW5kcyA8RSBleHRlbmRzIEhUTUxFbGVtZW50PihwOiBhbnksIHJlZjogUmVmPEU+KSA9PiAoVk5vZGU8YW55PiB8IG51bGwpPihDb21wb25lbnQ6IEMpIHtcclxuICAgIHR5cGUgUCA9IFByb3BzRnJvbUNvbXBvbmVudDxDPjtcclxuXHJcblxyXG4gICAgY29uc3QgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudCBhcyBDO1xyXG59XHJcblxyXG4vKipcclxuICogVXNlZnVsIGluIHBhcnRpY3VsYXIgZm9yIFNsaWRlcyB3aXRoIGEgVGFiIFBhbmVsIC0tXHJcbiAqIGlmIHdlIGRvIE1hdGguc2lnbihjdXJyZW50SW5kZXggLSBzbGlkZUluZGV4KSwgaXRcclxuICogdHJhbnNpdGlvbnMgbmljZWx5IGluIHRoZSBleHBlY3RlZCBkaXJlY3Rpb24sXHJcbiAqIGJ1dCB3ZSBuZWVkIHRvIFwicmVtZW1iZXJcIiB3aGljaCBkaXJlY3Rpb24gdG8gdXNlXHJcbiAqIHdoZW4gaXQncyB0aGUgY3VycmVudCBwYW5lbCAoYW5kIHRoZSBkaWZmZXJlbmNlIGlzIDApXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGFzdE5vbk51bGxWYWx1ZTxUPih2YWx1ZTogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHwgbnVsbCB7XHJcbiAgICBjb25zdCBsYXN0Tm9uTnVsbFZhbHVlID0gdXNlUmVmPFQgfCBudWxsPihudWxsKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXHJcbiAgICAgICAgICAgIGxhc3ROb25OdWxsVmFsdWUuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlID8/IGxhc3ROb25OdWxsVmFsdWUuY3VycmVudDtcclxufVxyXG4iLCJpbXBvcnQgeyBDb250ZXh0LCBGcmFnbWVudCwgaCwgUmVuZGVyYWJsZVByb3BzLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNoaWxkcmVuRmxhZywgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNYW5hZ2VkQ2hpbGQsIFVzZU1hbmFnZWRDaGlsZFBhcmFtZXRlcnMsIHVzZU1hbmFnZWRDaGlsZHJlbiwgVXNlTWFuYWdlZENoaWxkcmVuQ29udGV4dCwgdXNlUGFzc2l2ZVN0YXRlLCB1c2VTdGFibGVPYmplY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBHZXRFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xuaW1wb3J0IHsgRXhjbHVzaXZlQ29udGV4dFR5cGUsIEV4Y2x1c2l2ZUluZm8sIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcblxuXG5cbmxldCBnbG9iYWxDb3VudCA9IC0xO1xuXG5leHBvcnQgZnVuY3Rpb24gRXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyKHsgZXhjbHVzaXZpdHlLZXksIGNoaWxkcmVuIH06IFJlbmRlcmFibGVQcm9wczx7IGV4Y2x1c2l2aXR5S2V5Pzogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB9Pikge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcIkV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlclwiLCBleGNsdXNpdml0eUtleSk7XG5cbiAgICBjb25zdCBbZ2V0TmV4dEluZGV4SW5MaW5lLCBzZXROZXh0SW5kZXhJbkxpbmVdID0gdXNlUGFzc2l2ZVN0YXRlPHN0cmluZyB8IG51bGwsIG5ldmVyPihudWxsKTtcblxuICAgIGNvbnN0IHsgY29udGV4dCwgbWFuYWdlZENoaWxkcmVuUmV0dXJuLCBtYW5hZ2VkQ2hpbGRyZW5SZXR1cm46IHsgZ2V0Q2hpbGRyZW4gfSB9ID0gdXNlTWFuYWdlZENoaWxkcmVuPEV4Y2x1c2l2ZUluZm8+KHsgbWFuYWdlZENoaWxkcmVuUGFyYW1ldGVyczoge30gfSk7XG4gICAgY29uc3QgeyBjaGFuZ2VJbmRleCwgZ2V0Q3VycmVudEluZGV4IH0gPSB1c2VDaGlsZHJlbkZsYWc8RXhjbHVzaXZlSW5mbywgbmV2ZXI+KHtcbiAgICAgICAgZ2V0Q2hpbGRyZW4sXG4gICAgICAgIGNsb3Nlc3RGaXQ6IGZhbHNlLFxuICAgICAgICBpbml0aWFsSW5kZXg6IG51bGwsXG4gICAgICAgIG9uSW5kZXhDaGFuZ2U6IG51bGwsXG4gICAgICAgIHNldEF0OiB1c2VDYWxsYmFjaygobSwgdikgPT4geyBtLnNldEV4Y2x1c2l2ZWx5T3Blbih2KTsgfSwgW10pLFxuICAgICAgICBnZXRBdDogdXNlQ2FsbGJhY2soKG0pID0+IG0uZ2V0RXhjbHVzaXZlbHlPcGVuKCksIFtdKSxcbiAgICAgICAgaXNWYWxpZDogdXNlQ2FsbGJhY2soKG0pID0+IHsgcmV0dXJuIHRydWUgfSwgW10pLFxuICAgIH0pXG5cbiAgICBjb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXg6IHN0cmluZywgdmlzaWJsZTogXCJzaG93XCIgfCBcImhpZGRlblwiKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zdCBuZXh0SW5MaW5lID0gZ2V0TmV4dEluZGV4SW5MaW5lKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbkxpbmUgPSBnZXRDdXJyZW50SW5kZXgoKTtcblxuICAgICAgICBpZiAodmlzaWJsZSA9PSBcInNob3dcIiAmJiBpbmRleCAhPSBjdXJyZW50SW5MaW5lKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gYSBjaGlsZCB0cmFuc2l0aW9uIHNob3dzIGl0c2VsZiBpbml0aWFsbHlcbiAgICAgICAgICAgICAqIChpLmUuIHJlcXVlc3RzIGl0c2VsZiB0byBiZSB0aGUgZXhjbHVzaXZlIHRyYW5zaXRpb24pXG4gICAgICAgICAgICAgKiB3ZSBlaXRoZXIgbGV0IGl0IG9wZW4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBvbmUgZmluaXNoaW5nIHRoZWlyIGV4aXQsXG4gICAgICAgICAgICAgKiBvciB3YWl0IHVudGlsIHRoYXQgYWZvcmVtZW50aW9uZWQgZXhpdCBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5MaW5lID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VJbmRleChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRDaGlsZHJlbigpLmdldEF0KGN1cnJlbnRJbkxpbmUpPy5mb3JjZUNsb3NlPy4oKTtcbiAgICAgICAgICAgICAgICBzZXROZXh0SW5kZXhJbkxpbmUoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZpc2libGUgPT0gXCJoaWRkZW5cIikge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBXaGVuIGEgY2hpbGQgdHJhbnNpdGlvbiBoYXMgZmluaXNoZWQgaXRzIGV4aXQgdHJhbnNpdGlvbixcbiAgICAgICAgICAgICAqIG1ha2Ugc3VyZSB0aGF0IGlmIHNvbWVvbmUgcmVxdWVzdGVkIHRvIGJlIHNob3duIGluIHRoZSBtZWFudGltZVxuICAgICAgICAgICAgICogdGhhdCB3ZSBkbyBzby5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG5leHRJbkxpbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoYW5nZUluZGV4KG5leHRJbkxpbmUpO1xuICAgICAgICAgICAgICAgIHNldE5leHRJbmRleEluTGluZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgY29udGV4dDI6IEV4Y2x1c2l2ZUNvbnRleHRUeXBlID0gdXNlU3RhYmxlT2JqZWN0KHtcbiAgICAgICAgLi4uY29udGV4dCxcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQ6IHVzZVN0YWJsZU9iamVjdCh7XG4gICAgICAgICAgICBleGNsdXNpdml0eUtleSxcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0ID0gR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQoZXhjbHVzaXZpdHlLZXkpO1xuXG4gICAgcmV0dXJuIChFeGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCA9PSBudWxsKSA/ICgoY2hpbGRyZW4gYXMgVk5vZGUpID8/IG51bGwpIDogPEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0Mn0+e2NoaWxkcmVufTwvRXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQuUHJvdmlkZXI+O1xufVxuXG5cblxuZXhwb3J0IGludGVyZmFjZSBVc2VFeGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycyBleHRlbmRzIE9taXQ8VXNlTWFuYWdlZENoaWxkUGFyYW1ldGVyczxFeGNsdXNpdmVJbmZvPiwgXCJtYW5hZ2VkQ2hpbGRQYXJhbWV0ZXJzXCIgfCBcImNvbnRleHRcIj4ge1xuICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiBQaWNrPFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxhbnk+LCBcInNob3dcIj47XG4gICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZm9yY2VDbG9zZTogKCkgPT4gdm9pZDsgZXhjbHVzaXZpdHlLZXk/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFeGNsdXNpdmVUcmFuc2l0aW9uKHsgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgc2hvdyB9LCBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBmb3JjZUNsb3NlLCBleGNsdXNpdml0eUtleSB9IH06IFVzZUV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzKSB7XG4gICAgY29uc3QgYyA9IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0KGV4Y2x1c2l2aXR5S2V5KTtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VFeGNsdXNpdmVUcmFuc2l0aW9uXCIsIGMgPT0gbnVsbCk7XG4gICAgY29uc3QgY29udGV4dCA9IGM/IHVzZUNvbnRleHQoYykgOiBudWxsO1xuXG4gICAgLy9jb25zdCBpbmRleCA9IHVzZU1lbW8oKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpLCBbXSk7XG4gICAgY29uc3QgaW5kZXggPSB1c2VNZW1vKCgpID0+IHsgZ2xvYmFsQ291bnQgKz0gMTsgcmV0dXJuIChnbG9iYWxDb3VudCkudG9TdHJpbmcoKSB9LCBbXSk7XG4gICAgY29uc3QgW2V4Y2x1c2l2ZWx5T3Blbiwgc2V0RXhjbHVzaXZlbHlPcGVuLCBnZXRFeGNsdXNpdmVseU9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oISFzaG93KTtcbiAgICBjb25zdCB7XG4gICAgICAgIG1hbmFnZWRDaGlsZFJldHVybjogeyBnZXRDaGlsZHJlbiB9XG4gICAgfSA9IHVzZU1hbmFnZWRDaGlsZDxFeGNsdXNpdmVJbmZvPih7IGNvbnRleHQsIG1hbmFnZWRDaGlsZFBhcmFtZXRlcnM6IHsgaW5kZXggfSB9LCB7IGluZGV4LCBnZXRFeGNsdXNpdmVseU9wZW4sIHNldEV4Y2x1c2l2ZWx5T3BlbiwgZm9yY2VDbG9zZSB9KTtcblxuICAgIGNvbnN0IHBhcmVudE9uVmlzQ2hhbmdlID0gY29udGV4dD8uZXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQub25WaXNpYmlsaXR5Q2hhbmdlO1xuXG4gICAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gdXNlQ2FsbGJhY2s8Tm9uTnVsbGFibGU8VHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPGFueT5bXCJvblZpc2liaWxpdHlDaGFuZ2VcIl0+PigodmlzaWJsZSkgPT4ge1xuICAgICAgICBwYXJlbnRPblZpc0NoYW5nZT8uKGluZGV4LCB2aXNpYmxlID09IGZhbHNlID8gXCJoaWRkZW5cIiA6IFwic2hvd1wiKTtcbiAgICB9LCBbcGFyZW50T25WaXNDaGFuZ2UsIGluZGV4XSk7XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2hvdylcbiAgICAgICAgICAgIHBhcmVudE9uVmlzQ2hhbmdlPy4oaW5kZXgsIFwic2hvd1wiKTtcbiAgICB9LCBbc2hvdywgcGFyZW50T25WaXNDaGFuZ2UsIGluZGV4XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuOiB7XG4gICAgICAgICAgICBpc0V4Y2x1c2l2ZTogKGNvbnRleHQgIT0gbnVsbCksXG4gICAgICAgICAgICBleGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBzZXRFeGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBnZXRFeGNsdXNpdmVseU9wZW4sXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBDb21wb25lbnRDaGlsZHJlbiwgaCwgUmVmLCBWTm9kZSB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LCBTd2FwcGFibGVDb250ZXh0LCB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IE5vbkludHJ1c2l2ZUVsZW1lbnRBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBFeGNsdXNpdmVUcmFuc2l0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi9leGNsdXNpdmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dhcFByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBQYXJ0aWFsPENyZWF0ZVN3YXBwYWJsZVByb3BzPiwgTm9uSW50cnVzaXZlRWxlbWVudEF0dHJpYnV0ZXM8RT4ge1xyXG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQnkgZGVmYXVsdCwgZWFjaCBjaGlsZCB0cmFuc2l0aW9ucyBpbi9vdXQgYXQgdGhlIHNhbWUgdGltZSwgaW4gc3luYyB3aXRoIGVhY2ggb3RoZXIuXHJcbiAgICAgKiBcclxuICAgICAqIElmIHlvdSB3YW50IHRvIGd1YXJhbnRlZSB0aGF0LCBubyBtYXR0ZXIgd2hhdCwgb25seSBvbmUgaXMgZXZlciB2aXNpYmxlIGF0IGFsbCxcclxuICAgICAqIHBhc3MgYSBzdHJpbmcgdG8gYGV4Y2x1c2l2aXR5S2V5YCwgYW5kIGFsbCB0cmFuc2l0aW9ucyB0aGF0IHVzZSB0aGF0IHNhbWVcclxuICAgICAqIGBleGNsdXNpdml0eUtleWAgd2lsbCBjb29yZGluYXRlIHRoaXMgYmVoYXZpb3IgYW1vbmcgdGhlbXNlbHZlcy5cclxuICAgICAqIFxyXG4gICAgICogVGhpcyBpcyBhbHNvIGF2YWlsYWJsZSBhcyBhIHNlcGFyYXRlIGNvbXBvbmVudCAoYEV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlcmApXHJcbiAgICAgKiBpZiB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIGluIHVucmVsYXRlZCBjaXJjdW1zdGFuY2VzLlxyXG4gICAgICovXHJcbiAgICBleGNsdXNpdml0eUtleT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlU3dhcHBhYmxlUHJvcHMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgY29tcG9uZW50IGlzIGlubGluZS1ncmlkIG9yIGdyaWQuIFxyXG4gICAgICogSWYgbm90IHByb3ZpZGVkLCB0aGUgY2hpbGQgZWxlbWVudCBpcyBsb29rZWQgYXQuIElmIGl0J3MgYSBzcGFuIG9yIG90aGVyIGlubGluZSBlbGVtZW50LCBpbmxpbmUgaXMgYXNzdW1lZC4gXHJcbiAgICAgKiAoQSBzaW1wbHktZm9vbGVkIGhldXJpc3RpYy0tcHJvdmlkZSB0aGlzIHByb3AgaWYgbmVjZXNzYXJ5KVxyXG4gICAgICovXHJcbiAgICBpbmxpbmU6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvdmlkZXMgZGVmYXVsdCB2YWx1ZXMgdG8gYHVzZVRyYW5zaXRpb25gJ3MgYGFuaW1hdGVPbk1vdW50YC4gSWYgbnVsbCwgdGhlIGRlZmF1bHQgdmFsdWUgcHJvdmlkZWQgd2lsbCBiZSBgZmFsc2VgIGluaXRpYWxseSwgdGhlbiBgdHJ1ZWAgYWZ0ZXIgdGhlIGBTd2FwcGFibGVgIGl0c2VsZiBoYXMgbW91bnRlZC5cclxuICAgICAqL1xyXG4gICAgY2hpbGRyZW5BbmltYXRlT25Nb3VudD86IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIHN3YXAgY29udGFpbmVyLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzPFAgZXh0ZW5kcyB7fT4oeyBpbmxpbmUgfTogQ3JlYXRlU3dhcHBhYmxlUHJvcHMsIG90aGVyUHJvcHM6IFApIHtcclxuICAgIHR5cGUgRSA9IFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxpbmZlciBFPiA/IEUgOiBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHM8RT4oe1xyXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtHZXRCYXNlQ2xhc3MoKX0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7R2V0QmFzZUNsYXNzKCl9LXN3YXAtY29udGFpbmVyLWlubGluZWApXHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxyXG4gKiBcclxuICogWW91IG11c3QgbWFuYWdlIGVhY2ggY2hpbGQgYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudCdzIGBzaG93YCBwcm9wIC0tIHRoaXMgY29tcG9uZW50ICpkb2VzIG5vdCogbWFuYWdlIGFueSBzb3J0IG9mIHN0YXRlIGluIHRoYXQgcmVnYXJkLlxyXG4gKiBcclxuICogSWYgeW91IHBhc3MgYSByZWd1bGFyIGVsZW1lbnQgKGxpa2UgYSBkaXYpIG9yIG90aGVyIHNpbmdsZSBjb21wb25lbnQsIHRoZW4gdGhlZSBwcm9wcyBhbmQgcmVmIHdpbGwgYmUgZm9yd2FyZGVkIG9udG8gdGhhdCBlbGVtZW50LiBPdGhlcndpc2UsIGFsbCB0aGUgY2hpbGRyZW4gd2lsbCBiZSB3cmFwcGVkIGluIGEgZGl2IG9yIHNwYW4gZGVwZW5kaW5nIG9uIHRoZSBgaW5saW5lYCBwcm9wLlxyXG4gKiBAcGFyYW0gcGFyYW0wIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgY2hpbGRyZW46IGMsIGlubGluZSwgY2hpbGRyZW5BbmltYXRlT25Nb3VudCwgZXhjbHVzaXZpdHlLZXksIC4uLnAgfTogU3dhcFByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gYyBhcyBWTm9kZTtcclxuICAgIGlmICghKGNoaWxkcmVuIGFzIFZOb2RlKS50eXBlKVxyXG4gICAgICAgIGNoaWxkcmVuID0gKCFpbmxpbmUgPyA8ZGl2PntjaGlsZHJlbn08L2Rpdj4gOiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPilcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHM8RT4odHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcblxyXG4gICAgY29uc3QgYW5pbWF0ZU9uTW91bnQgPSB1c2VSZWYoY2hpbGRyZW5BbmltYXRlT25Nb3VudCA/PyBmYWxzZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGVPbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBjb250ZXh0VmFsdWUgPSB1c2VSZWYoeyBnZXRBbmltYXRlT25Nb3VudDogKCkgPT4geyByZXR1cm4gYW5pbWF0ZU9uTW91bnQuY3VycmVudDsgfSB9KTtcclxuICAgIGxldCByZXQgPSBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbiBhcyB0eXBlb2YgdHJhbnNpdGlvblByb3BzKTtcclxuICAgIHJldCA9ICg8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlLmN1cnJlbnR9PntyZXR9PC9Td2FwcGFibGVDb250ZXh0LlByb3ZpZGVyPilcclxuICAgIGlmIChleGNsdXNpdml0eUtleSkge1xyXG4gICAgICAgIHJldCA9ICg8RXhjbHVzaXZlVHJhbnNpdGlvblByb3ZpZGVyIGtleT17ZXhjbHVzaXZpdHlLZXl9IGV4Y2x1c2l2aXR5S2V5PXtleGNsdXNpdml0eUtleX0+e3JldH08L0V4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlcj4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG59KSlcclxuXHJcbi8vIElmIFwiaW5saW5lXCIgaXNuJ3QgZXhwbGljaXRseSBwcm92aWRlZCwgd2UgdHJ5IHRvIGltcGxpY2l0bHkgZG8gaXQgYmFzZWQgb24gdGhlIGNoaWxkJ3MgdGFnLlxyXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cclxuY29uc3QgaW5saW5lRWxlbWVudHMgPSBuZXcgU2V0KFtcclxuICAgIFwiYVwiLFxyXG4gICAgXCJhYmJyXCIsXHJcbiAgICBcImFjcm9ueW1cIixcclxuICAgIFwiYXVkaW9cIixcclxuICAgIFwiYlwiLFxyXG4gICAgXCJiZGlcIixcclxuICAgIFwiYmRvXCIsXHJcbiAgICBcImJpZ1wiLFxyXG4gICAgXCJiclwiLFxyXG4gICAgXCJidXR0b25cIixcclxuICAgIFwiY2FudmFzXCIsXHJcbiAgICBcImNpdGVcIixcclxuICAgIFwiY29kZVwiLFxyXG4gICAgXCJkYXRhXCIsXHJcbiAgICBcImRhdGFsaXN0XCIsXHJcbiAgICBcImRlbFwiLFxyXG4gICAgXCJkZm5cIixcclxuICAgIFwiZW1cIixcclxuICAgIFwiZW1iZWRcIixcclxuICAgIFwiaVwiLFxyXG4gICAgXCJpZnJhbWVcIixcclxuICAgIFwiaW1nXCIsXHJcbiAgICBcImlucHV0XCIsXHJcbiAgICBcImluc1wiLFxyXG4gICAgXCJrYmRcIixcclxuICAgIFwibGFiZWxcIixcclxuICAgIFwibWFwXCIsXHJcbiAgICBcIm1hcmtcIixcclxuICAgIFwibWV0ZXJcIixcclxuICAgIFwibm9zY3JpcHRcIixcclxuICAgIFwib2JqZWN0XCIsXHJcbiAgICBcIm91dHB1dFwiLFxyXG4gICAgXCJwaWN0dXJlXCIsXHJcbiAgICBcInByb2dyZXNzXCIsXHJcbiAgICBcInFcIixcclxuICAgIFwicnVieVwiLFxyXG4gICAgXCJzXCIsXHJcbiAgICBcInNhbXBcIixcclxuICAgIFwic2NyaXB0XCIsXHJcbiAgICBcInNlbGVjdFwiLFxyXG4gICAgXCJzbG90XCIsXHJcbiAgICBcInNtYWxsXCIsXHJcbiAgICBcInNwYW5cIixcclxuICAgIFwic3Ryb25nXCIsXHJcbiAgICBcInN1YlwiLFxyXG4gICAgXCJzdXBcIixcclxuICAgIFwic3ZnXCIsXHJcbiAgICBcInRlbXBsYXRlXCIsXHJcbiAgICBcInRleHRhcmVhXCIsXHJcbiAgICBcInRpbWVcIixcclxuICAgIFwidVwiLFxyXG4gICAgXCJ0dFwiLFxyXG4gICAgXCJ2YXJcIixcclxuICAgIFwidmlkZW9cIixcclxuICAgIFwid2JyXCJcclxuXSk7XHJcbiIsImltcG9ydCB7IGNsb25lRWxlbWVudCwgaCwgVk5vZGUgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBPblBhc3NpdmVTdGF0ZUNoYW5nZSwgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VNZXJnZWRQcm9wcywgdXNlUGFzc2l2ZVN0YXRlLCB1c2VSZWZFbGVtZW50LCB1c2VTdGFibGVDYWxsYmFjaywgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IHJldHVybkZhbHNlLCBydW5JbW1lZGlhdGVseSB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3ByZWFjdC1leHRlbnNpb25zL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24gfSBmcm9tIFwiLi9leGNsdXNpdmVcIjtcbmltcG9ydCB7IEdldEV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0LCB1c2VDc3NDbGFzc2VzIH0gZnJvbSBcIi4vdXRpbC9jb250ZXh0XCI7XG5pbXBvcnQgeyBTd2FwcGFibGVDb250ZXh0VHlwZSwgVHJhbnNpdGlvbkRpcmVjdGlvbiwgVHJhbnNpdGlvblBoYXNlLCBUcmFuc2l0aW9uU3RhdGUsIFVzZVRyYW5zaXRpb25QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xuaW1wb3J0IHsgU3dhcHBhYmxlQ29udGV4dCB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xuXG5cbmZ1bmN0aW9uIGdldFRpbWVvdXREdXJhdGlvbjxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KGVsZW1lbnQ6IEUgfCBudWxsKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KC4uLih3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50IHx8IGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoYHRyYW5zaXRpb24tZHVyYXRpb25gKSkuc3BsaXQoXCIsXCIpLm1hcChzdHIgPT4ge1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwibXNcIikpXG4gICAgICAgICAgICByZXR1cm4gK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDIpO1xuICAgICAgICBpZiAoc3RyLmVuZHNXaXRoKFwic1wiKSlcbiAgICAgICAgICAgIHJldHVybiAoK3N0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiAxMDAwO1xuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGF0ZShuZXh0U3RhdGU6IFRyYW5zaXRpb25TdGF0ZSkge1xuICAgIHJldHVybiBuZXh0U3RhdGUuc3BsaXQoXCItXCIpIGFzIFtUcmFuc2l0aW9uRGlyZWN0aW9uLCBUcmFuc2l0aW9uUGhhc2VdO1xufVxuXG4vKipcbiAqIFByb3ZpZGUgcHJvcHMgdGhhdCBjYW4gYmUgdXNlZCB0byBhbmltYXRlIGEgdHJhbnNpdGlvbi5cbiAqIFxuICogQHBhcmFtIHBhcmFtMCBcbiAqIEByZXR1cm5zIFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVHJhbnNpdGlvbjxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgcHJvcHNJbmNvbWluZzogeyBjaGlsZHJlbiwgLi4ucCB9LCBzaG93LCBhbmltYXRlT25Nb3VudCwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBvblZpc2liaWxpdHlDaGFuZ2UgfSwgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfSB9OiBVc2VUcmFuc2l0aW9uUGFyYW1ldGVyczxFPik6IFZOb2RlPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+PiB8IG51bGwge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVRyYW5zaXRpb25cIiwgb25WaXNpYmlsaXR5Q2hhbmdlKTtcblxuICAgIGNvbnN0IHsgZ2V0QW5pbWF0ZU9uTW91bnQgfSA9IHVzZUNvbnRleHQoU3dhcHBhYmxlQ29udGV4dCk7XG4gICAgZXhpdFZpc2liaWxpdHkgfHw9IFwiaGlkZGVuXCJcbiAgICBhbmltYXRlT25Nb3VudCA/Pz0gZ2V0QW5pbWF0ZU9uTW91bnQoKTtcbiAgICBtZWFzdXJlID8/PSBmYWxzZTtcblxuICAgIGNvbnN0IGdldEV4aXRWaXNpYmlsaXR5ID0gdXNlU3RhYmxlR2V0dGVyKGV4aXRWaXNpYmlsaXR5KTtcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcywgR2V0RW50ZXJDbGFzcywgR2V0RXhpdENsYXNzLCBHZXRNZWFzdXJlQ2xhc3MsIEdldEluaXRDbGFzcywgR2V0VHJhbnNpdGlvbkNsYXNzLCBHZXRGaW5hbGl6ZUNsYXNzLCBHZXREaXJlY3Rpb25DbGFzcywgR2V0UGhhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xuICAgIGNvbnN0IGdldE1lYXN1cmUgPSB1c2VTdGFibGVHZXR0ZXIobWVhc3VyZSk7XG4gICAgY29uc3QgeyBleGNsdXNpdmVUcmFuc2l0aW9uUmV0dXJuOiB7IGV4Y2x1c2l2ZWx5T3BlbiwgaXNFeGNsdXNpdmUsIG9uVmlzaWJpbGl0eUNoYW5nZTogZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2UgfSB9ID0gdXNlRXhjbHVzaXZlVHJhbnNpdGlvbih7XG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IHNob3cgfSxcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXksIGZvcmNlQ2xvc2U6IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHsgaW50ZXJuYWxPblNob3dDaGFuZ2VkKGZhbHNlLCBnZXRNZWFzdXJlKCkpOyB9KSB9XG4gICAgfSk7XG5cbiAgICBpZiAoaXNFeGNsdXNpdmUpIHtcbiAgICAgICAgc2hvdyA9IChzaG93ICYmIGV4Y2x1c2l2ZWx5T3Blbik7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZWZFbGVtZW50UmV0dXJuOiB7IGdldEVsZW1lbnQsIHByb3BzU3RhYmxlIH0gfSA9IHVzZVJlZkVsZW1lbnQ8RT4oe30pXG4gICAgY29uc3QgY3NzUHJvcGVydGllcyA9IHVzZVJlZjxoLkpTWC5DU1NQcm9wZXJ0aWVzPih7fSk7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IHVzZVJlZihuZXcgU2V0PHN0cmluZz4oW1xuICAgICAgICAvLyBUaGlzIGlzIHJlbW92ZWQgZHVyaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgZmlyc3QgcmVuZGVyXG4gICAgICAgIC8vIChhdCBsZWFzdCBvbmNlIGBzaG93YCBpcyBub24tbnVsbClcbiAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LXBlbmRpbmdgLFxuICAgIF0pKTtcbiAgICBjb25zdCBoYW5kbGVUcmFuc2l0aW9uRmluaXNoZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoISFzdGF0ZSk7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgY29uc3QgW2RpcmVjdGlvbiwgcGhhc2VdID0gcGFyc2VTdGF0ZShzdGF0ZSk7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgJHtkaXJlY3Rpb259LWZpbmFsaXplYCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRIYW5kbGUuY3VycmVudCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudD8uKHRpbWVvdXRIYW5kbGUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIGNvbnN0IG90aGVyUHJvcHMgPSB1c2VSZWY8aC5KU1guSFRNTEF0dHJpYnV0ZXM8RT4+KHtcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kOiAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09IGdldEVsZW1lbnQoKSAmJiBlLmVsYXBzZWRUaW1lKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhbnNpdGlvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzIHRvIG1hdGNoIHRoZSBnaXZlbiBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgICAqL1xuICAgIGNvbnN0IHVwZGF0ZUNsYXNzZXMgPSB1c2VDYWxsYmFjaygoZWxlbWVudDogRSB8IG51bGwsIGRpcmVjdGlvbjogVHJhbnNpdGlvbkRpcmVjdGlvbiwgcGhhc2U/OiBUcmFuc2l0aW9uUGhhc2UpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuXG4gICAgICAgIGNvbnN0IGV4aXRWaXNpYmlsaXR5ID0gZ2V0RXhpdFZpc2liaWxpdHkoKTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9SZW1vdmUgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRNZWFzdXJlQ2xhc3MoKX1gLCBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFbnRlckNsYXNzKCl9LSR7R2V0SW5pdENsYXNzKCl9YCwgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tJHtHZXRGaW5hbGl6ZUNsYXNzKCl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldE1lYXN1cmVDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEluaXRDbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldFRyYW5zaXRpb25DbGFzcygpfWAsIGAke0dldEJhc2VDbGFzcygpfS0ke0dldEV4aXRDbGFzcygpfS0ke0dldEZpbmFsaXplQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJpbmVydFwifWAsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX0tZXYtJHtcInJlbW92ZWRcIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJoaWRkZW5cIn1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7XCJ2aXNpYmxlXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1wZW5kaW5nYCxcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBhbGxDbGFzc2VzVG9BZGQgPSBbXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RGlyZWN0aW9uQ2xhc3MoZGlyZWN0aW9uKX1gLFxuICAgICAgICAgICAgcGhhc2UgPyBgJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXREaXJlY3Rpb25DbGFzcyhkaXJlY3Rpb24pfS0ke0dldFBoYXNlQ2xhc3MocGhhc2UpfWAgOiBcIlwiLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YFxuICAgICAgICBdO1xuXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5hbGxDbGFzc2VzVG9SZW1vdmUpO1xuICAgICAgICBhbGxDbGFzc2VzVG9SZW1vdmUubWFwKHYgPT4gY2xhc3NOYW1lcy5jdXJyZW50LmRlbGV0ZSh2KSk7XG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmFsbENsYXNzZXNUb0FkZCk7XG4gICAgICAgIGFsbENsYXNzZXNUb0FkZC5tYXAodiA9PiBjbGFzc05hbWVzLmN1cnJlbnQuYWRkKHYpKTtcblxuICAgIH0sIFtdKTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBzaW5nbGUgXCJtZWFzdXJlXCIgdmFyaWFibGUgKG9yIHJlbW92ZXMgaXQpXG4gICAgICovXG4gICAgY29uc3QgdXBkYXRlU2l6ZVByb3BlcnR5ID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUsIHZhck5hbWU6IChrZXlvZiBoLkpTWC5DU1NQcm9wZXJ0aWVzKSAmIHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSh2YXJOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbdmFyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkodmFyTmFtZSk7XG4gICAgICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W3Zhck5hbWVdO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgXCJtZWFzdXJlXCIgdmFyaXVwZGF0ZUNsYXNzZXNhYmxlcyB0byB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXG4gICAgICovXG4gICAgY29uc3QgbWVhc3VyZUVsZW1lbnRBbmRVcGRhdGVQcm9wZXJ0aWVzID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQ6IEUgfCBudWxsLCBtZWFzdXJlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgc2l6ZTogRE9NUmVjdFJlYWRPbmx5IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS10b3BgLCBzaXplPy50b3ApO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtbGVmdGAsIHNpemU/LmxlZnQpO1xuICAgICAgICAgICAgdXBkYXRlU2l6ZVByb3BlcnR5KGVsZW1lbnQsIGAtLSR7R2V0QmFzZUNsYXNzKCl9LW1lYXN1cmUtd2lkdGhgLCBzaXplPy53aWR0aCk7XG4gICAgICAgICAgICB1cGRhdGVTaXplUHJvcGVydHkoZWxlbWVudCwgYC0tJHtHZXRCYXNlQ2xhc3MoKX0tbWVhc3VyZS1oZWlnaHRgLCBzaXplPy5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgLy8gV2UgdXNlIGJvdGggdXNlVGltZW91dCBhbmQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZvciB0aW1pbmcgY2VydGFpbiB0aGluZ3MgLS1cbiAgICAvLyByYWYgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSBpbml0IHRvIHRyYW5zaXRpb24gKHdvdWxkIHVzZSBxdWV1ZU1pY3JvdGFzayBidXQgaXQgY2FuJ3QgYmUgY2FuY2VsbGVkKVxuICAgIC8vIHNldFRpbWVvdXQgaXMgdXNlZCBmb3IgY2hhbmdpbmcgZnJvbSB0cmFuc2l0aW9uIHRvIGZpbmFsaXplIChhcyBhIGJhY2t1cCBpbiBjYXNlIHRyYW5zaXRpb25lbmQgZG9lc24ndCBmaXJlKVxuICAgIC8vXG4gICAgLy8gSW4gb3JkZXIgdG8gYXZvaWQgc3RhbGUgY2FsbGJhY2tzIHJ1bm5pbmcgKGkuZS4gd2hlbiB3ZSByYXBpZGx5IHN3aXRjaCBiZXR3ZWVuIHZpc2libGUgYW5kIG5vdClcbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhY2N1cmF0ZWx5IGNhbmNlbCBhbnl0aGluZyB0aGF0IGNhbiBjaGFuZ2Ugb3VyIHN0YXRlIG9uIGEgZGVsYXkuXG4gICAgLy9cbiAgICAvLyBBbHNvIG9mIG5vdGUsIHdlIHN0b3JlIFwiKGYpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQoZilcIiBpbnN0ZWFkIG9mIGp1c3QgXCJ3aW5kb3cuY2xlYXJUaW1lb3V0XCIgYmVjYXVzZVxuICAgIC8vIG9mIHRoZSBpbXBsaWNpdCB3aW5kb3cgb2JqZWN0IC0tIHByb2JsZW1zIHdpdGggYSBtaXNzaW5nIGB0aGlzYCBvYmplY3QgYW5kIGFsbCB0aGF0IG5vbnNlbnNlLlxuICAgIGNvbnN0IHRpbWVvdXRIYW5kbGUgPSB1c2VSZWY8bnVtYmVyPigtMSk7XG4gICAgY29uc3QgdGltZW91dENsZWFyRnVuY3Rpb24gPSB1c2VSZWY8KHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSkgfCAodHlwZW9mIGNsZWFyVGltZW91dCkgfCBudWxsPihudWxsKTtcblxuICAgIC8qKlxuICAgICAqIEFueSB0aW1lIHRoZSBzdGF0ZSBjaGFuZ2VzLCB0aGVyZSdzIHNvbWUgbG9naWMgd2UgbmVlZCB0byBydW46XG4gICAgICogXG4gICAgICogKiBJZiB3ZSdyZSBjaGFuZ2luZyB0byBhbiBgaW5pdGAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IGEgbW9tZW50IGFuZCB0aGVuIGNoYW5nZSB0byB0aGUgYHRyYW5zaXRpb25gIHBoYXNlLlxuICAgICAqICogSWYgd2UncmUgY2hhbmdpbmcgdG8gYSBgdHJhbnNpdGlvbmAgcGhhc2UsIHVwZGF0ZSB0aGUgY2xhc3NlcywgdGhlbiB3YWl0IHVudGlsIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgdGhlbiBjaGFuZ2UgdG8gdGhlIGBmaW5hbGl6ZWAgcGhhc2UuXG4gICAgICogXG4gICAgICogQW55IGNoYW5nZSBpbiBzdGF0ZSBvciBjbGFzc2VzL3N0eWxlcyBkb2VzIG5vdCBpbXBsaWNpdGx5IGNhdXNlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIGNvbnN0IG9uU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjazxPblBhc3NpdmVTdGF0ZUNoYW5nZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+PigobmV4dFN0YXRlLCBwcmV2U3RhdGUsIHJlYXNvbikgPT4ge1xuICAgICAgICBpZiAobmV4dFN0YXRlID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY29uc3QgW25leHREaXJlY3Rpb24sIG5leHRQaGFzZV0gPSBwYXJzZVN0YXRlKG5leHRTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIG5vIHN0YWxlIGNoYW5nZSBjb2RlIGV2ZXIgcnVuc1xuICAgICAgICBpZiAodGltZW91dEhhbmRsZS5jdXJyZW50ID49IDAgJiYgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudClcbiAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQodGltZW91dEhhbmRsZS5jdXJyZW50KTtcblxuICAgICAgICAvLyBIYW5kbGUgaW5lcnQgcHJvcHMvcHJvcGVydHlcbiAgICAgICAgY29uc3QgZXhpdFZpc2liaWxpdHkgPSBnZXRFeGl0VmlzaWJpbGl0eSgpO1xuICAgICAgICBpZiAoZXhpdFZpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZXJ0ID0gKGV4aXRWaXNpYmlsaXR5ID09IFwiaW5lcnRcIiAmJiAobmV4dERpcmVjdGlvbiA9PSBcImV4aXRcIiAmJiBuZXh0UGhhc2UgPT0gXCJmaW5hbGl6ZVwiKSA/IHRydWUgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgaWYgKGluZXJ0KVxuICAgICAgICAgICAgICAgIChvdGhlclByb3BzLmN1cnJlbnQgYXMgYW55KS5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgZGVsZXRlIG90aGVyUHJvcHMuY3VycmVudFtcImluZXJ0XCIgYXMgbmV2ZXJdO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudClcbiAgICAgICAgICAgICAgICBlbGVtZW50LmluZXJ0ID0gKGluZXJ0IHx8IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzQmVpbmdQYWludGVkID0gKG5leHREaXJlY3Rpb24gPT0gXCJlbnRlclwiIHx8IChuZXh0RGlyZWN0aW9uID09IFwiZXhpdFwiICYmIG5leHRQaGFzZSAhPSBcImZpbmFsaXplXCIpKTtcbiAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlPy4oaXNCZWluZ1BhaW50ZWQpO1xuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uVmlzaWJpbGl0eUNoYW5nZT8uKGlzQmVpbmdQYWludGVkKTtcblxuICAgICAgICB1cGRhdGVDbGFzc2VzKGVsZW1lbnQsIG5leHREaXJlY3Rpb24sIG5leHRQaGFzZSk7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIChuZXh0UGhhc2UgPT0gXCJpbml0XCIgfHwgbmV4dFBoYXNlID09IFwidHJhbnNpdGlvblwiKSlcbiAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG5cblxuICAgICAgICBzd2l0Y2ggKG5leHRQaGFzZSkge1xuICAgICAgICAgICAgY2FzZSBcIm1lYXN1cmVcIjoge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy9zZXRTdGF0ZShgJHtuZXh0RGlyZWN0aW9ufS1pbml0YCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2xhc3NlcyhlbGVtZW50LCBuZXh0RGlyZWN0aW9uLCBcImluaXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gISFJbnRlbnRpb25hbCBmYWxsLXRocm91Z2ghIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImluaXRcIjoge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRIYW5kbGUuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7IHNldFN0YXRlKGAke25leHREaXJlY3Rpb259LXRyYW5zaXRpb25gKTsgfSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNhbmNlbEFuaW1hdGlvbkZyYW1lKGYpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwidHJhbnNpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgdGltZW91dEhhbmRsZS5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCgpO1xuICAgICAgICAgICAgICAgIH0sIGdldFRpbWVvdXREdXJhdGlvbihlbGVtZW50KSAqIDEuNSk7XG4gICAgICAgICAgICAgICAgdGltZW91dENsZWFyRnVuY3Rpb24uY3VycmVudCA9IChmOiBudW1iZXIpID0+IGNsZWFyVGltZW91dChmKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImZpbmFsaXplXCI6IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIG9yIHNjaGVkdWxlIG9yIGFueXRoaW5nIC0tIHdlIGp1c3QgdXBkYXRlIG91ciBjbGFzc2VzIGFuZCB3ZSdyZSBkb25lLlxuICAgICAgICAgICAgICAgIHRpbWVvdXRDbGVhckZ1bmN0aW9uLmN1cnJlbnQgPSBudWxsOyAgICAvLyBEb2VzIHRoaXMgbWFrZSBpdCBtb3JlIG9yIGxlc3MgY2xlYXI/XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgSW52YWxpZCBzdGF0ZSB1c2VkIGluIHRyYW5zaXRpb246ICR7bmV4dFN0YXRlfS4gUHJldmlvdXMgc3RhdGUgd2FzICR7cHJldlN0YXRlID8/IFwibnVsbFwifWApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBbZ2V0U3RhdGUsIHNldFN0YXRlXSA9IHVzZVBhc3NpdmVTdGF0ZTxUcmFuc2l0aW9uU3RhdGUgfCBudWxsLCB1bmRlZmluZWQ+KG9uU3RhdGVDaGFuZ2UsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcblxuICAgIC8vIFdoZW4gd2UgbW91bnQsIGFuZCBldmVyeSB0aW1lIHRoZXJlYWZ0ZXIgdGhhdCBgc2hvd2AgY2hhbmdlcyxcbiAgICAvLyBjaGFuZ2Ugb3VyIGN1cnJlbnQgc3RhdGUgYWNjb3JkaW5nIHRvIHRoYXQgYHNob3dgIHZhbHVlLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBpbnRlcm5hbE9uU2hvd0NoYW5nZWQoc2hvdywgbWVhc3VyZSksIFttZWFzdXJlLCBzaG93XSk7XG5cblxuICAgIC8vIFRoaXMgaGFzIG5vIGRlcGVuZGVuY2VzIGFuZCBpcyByZWxpZWQgb24gaW4gdHdvIGRpZmZlcmVudCBhcmVhc1xuICAgIGZ1bmN0aW9uIGludGVybmFsT25TaG93Q2hhbmdlZChzaG93OiBib29sZWFuIHwgbnVsbCwgbWVhc3VyZTogYm9vbGVhbikge1xuXG4gICAgICAgIC8vIElmIGBzaG93YCBpcyBudWxsLCB0aGVuIHdlIGRvbid0IGNoYW5nZSBhbnl0aGluZy5cbiAgICAgICAgaWYgKHNob3cgPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyAoSWYgYHNob3dgIGlzIHRydWUvZmFsc2UsIHdlJ2xsIHJlbW92ZSB0aGUgQ1NTIGNsYXNzZXMgZHVyaW5nIGBvbkNoYW5nZWApXG5cbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICAgICAgbGV0IG5leHRQaGFzZTogVHJhbnNpdGlvblBoYXNlID0gbWVhc3VyZSA/IFwibWVhc3VyZVwiIDogXCJpbml0XCI7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IFtjdXJyZW50RGlyZWN0aW9uLCBjdXJyZW50UGhhc2VdID0gcGFyc2VTdGF0ZShjdXJyZW50U3RhdGUpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQaGFzZSAhPSBcImZpbmFsaXplXCIpXG4gICAgICAgICAgICAgICAgbmV4dFBoYXNlID0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3RlOiB0aGUgc2V0U3RhdGUgY2hhbmdlIGhhbmRsZXIgcnVucyBpbW1lZGlhdGVseSB3aXRoIG5vIGRlYm91bmNlLlxuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgaWYgKGhhc01vdW50ZWQuY3VycmVudCB8fCBhbmltYXRlT25Nb3VudClcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShgZW50ZXItJHtuZXh0UGhhc2V9YCk7XG5cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZShcImVudGVyLWZpbmFsaXplXCIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzTW91bnRlZC5jdXJyZW50IHx8IGFuaW1hdGVPbk1vdW50KVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKGBleGl0LSR7bmV4dFBoYXNlfWApO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldFN0YXRlKFwiZXhpdC1maW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc01vdW50ZWQuY3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGR1cmF0aW9uICE9IG51bGwpXG4gICAgICAgIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS1kdXJhdGlvbmBdID0gZHVyYXRpb24gKyBcIm1zXCI7XG4gICAgZWxzZVxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LWR1cmF0aW9uYF07XG5cbiAgICBlYXNpbmdJbiA/Pz0gZWFzaW5nO1xuICAgIGVhc2luZ091dCA/Pz0gZWFzaW5nO1xuXG4gICAgaWYgKGVhc2luZ091dCAhPSBudWxsKVxuICAgICAgICBjc3NQcm9wZXJ0aWVzLmN1cnJlbnRbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tJHtHZXRFeGl0Q2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF0gPSBlYXNpbmdPdXQ7XG4gICAgZWxzZVxuICAgICAgICBkZWxldGUgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RXhpdENsYXNzKCl9LXRpbWluZy1mdW5jdGlvbmBdO1xuXG5cbiAgICBpZiAoZWFzaW5nSW4gIT0gbnVsbClcbiAgICAgICAgY3NzUHJvcGVydGllcy5jdXJyZW50W2AtLSR7R2V0QmFzZUNsYXNzKCl9LSR7R2V0RW50ZXJDbGFzcygpfS10aW1pbmctZnVuY3Rpb25gXSA9IGVhc2luZ0luO1xuICAgIGVsc2VcbiAgICAgICAgZGVsZXRlIGNzc1Byb3BlcnRpZXMuY3VycmVudFtgLS0ke0dldEJhc2VDbGFzcygpfS0ke0dldEVudGVyQ2xhc3MoKX0tdGltaW5nLWZ1bmN0aW9uYF07XG5cblxuXG4gICAgLy8gVE9ET1xuICAgIGNvbnN0IGlubGluZURpcmVjdGlvbiA9IG51bGw7XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBudWxsO1xuXG5cblxuICAgIC8vIE5vIG1hdHRlciB3aGF0IGRlbGF5TW91bnRVbnRpbFNob3duIGlzLFxuICAgIC8vIG9uY2Ugd2UndmUgcmVuZGVyZWQgb3VyIGNoaWxkcmVuIG9uY2UsIFxuICAgIC8vIGVuc3VyZSB0aGF0IHdlIGRvbid0IHVubW91bnQgdGhlbSBhZ2FpbiBhbmQgd2FzdGUgYWxsIHRoYXQgd29yay5cbiAgICAvLyAoSWYgeW91IHJlYWxseSBuZWVkIHRoaXMgeW91IGNhbiBqdXN0IHVubW91bnQgdGhlIGVudGlyZSB0cmFuc2l0aW9uIGl0c2VsZilcbiAgICBjb25zdCBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiA9IChzaG93IHx8ICFkZWxheU1vdW50VW50aWxTaG93bik7XG4gICAgY29uc3QgaGFzUmVuZGVyZWRDaGlsZHJlbiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSBkZWZpbml0ZWx5U2hvdWxkTW91bnRDaGlsZHJlbiB8fCBoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQ7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuKVxuICAgICAgICAgICAgaGFzUmVuZGVyZWRDaGlsZHJlbi5jdXJyZW50IHx8PSB0cnVlO1xuICAgIH0sIFtoYXNSZW5kZXJlZENoaWxkcmVuLmN1cnJlbnQgPyBmYWxzZSA6IGRlZmluaXRlbHlTaG91bGRNb3VudENoaWxkcmVuXSk7XG5cblxuICAgIGNvbnN0IGNoaWxkcmVuSXNWbm9kZSA9IChjaGlsZHJlbiAmJiAoY2hpbGRyZW4gYXMgVk5vZGUpLnR5cGUgJiYgKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyk7XG4gICAgY29uc3QgZmluYWxQcm9wcyA9IHVzZU1lcmdlZFByb3BzPEU+KHAsIHByb3BzU3RhYmxlLCBvdGhlclByb3BzLmN1cnJlbnQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBbXG4gICAgICAgICAgICAuLi5jbGFzc05hbWVzLmN1cnJlbnQsXG4gICAgICAgICAgICBgJHtHZXRCYXNlQ2xhc3MoKX1gLFxuICAgICAgICAgICAgYCR7R2V0QmFzZUNsYXNzKCl9LWV2LSR7ZXhpdFZpc2liaWxpdHl9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCxcbiAgICAgICAgICAgIGAke0dldEJhc2VDbGFzcygpfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWBcbiAgICAgICAgXS5qb2luKFwiIFwiKSxcbiAgICAgICAgc3R5bGU6IGNzc1Byb3BlcnRpZXMuY3VycmVudFxuICAgIH0sIGNoaWxkcmVuSXNWbm9kZSA/IHsgcmVmOiAoY2hpbGRyZW4gYXMgVk5vZGUpLnJlZiwgLi4uKGNoaWxkcmVuIGFzIFZOb2RlKS5wcm9wcyB9IDoge30pO1xuXG5cblxuICAgIGNvbnN0IHJlc2V0Q29udGV4dCA9IHVzZVJlZjxTd2FwcGFibGVDb250ZXh0VHlwZT4oeyBnZXRBbmltYXRlT25Nb3VudDogcmV0dXJuRmFsc2UgfSkuY3VycmVudDtcblxuICAgIGxldCBtb2RpZmllZENoaWxkcmVuOiBWTm9kZTtcblxuICAgIGlmIChjaGlsZHJlbklzVm5vZGUpIHtcbiAgICAgICAgbW9kaWZpZWRDaGlsZHJlbiA9IDxTd2FwcGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXNldENvbnRleHR9PntjbG9uZUVsZW1lbnQoY2hpbGRyZW4gYXMgVk5vZGUsIGZpbmFsUHJvcHMpfTwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1vZGlmaWVkQ2hpbGRyZW4gPSA8U3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cmVzZXRDb250ZXh0fT48c3BhbiB7Li4uZmluYWxQcm9wcyBhcyBoLkpTWC5IVE1MQXR0cmlidXRlczxhbnk+fT57Y2hpbGRyZW59PC9zcGFuPjwvU3dhcHBhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyQ2hpbGRyZW4gPyBtb2RpZmllZENoaWxkcmVuIDogbnVsbDtcbn1cblxuXG5cbmZ1bmN0aW9uIGZvcmNlUmVmbG93PEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oZTogRSkge1xuXG4gICAgLy8gVHJ5IHJlYWxseSBoYXJkIHRvIG1ha2Ugc3VyZSB0aGlzIGlzbid0IG9wdGltaXplZCBvdXQgYnkgYW55dGhpbmcuXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cbiAgICBjb25zdCBwID0gKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXk7XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS5vcGFjaXR5O1xuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuX2R1bW15ID0gZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5fZHVtbXkgPSBwO1xuICAgIHJldHVybiBlO1xufVxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgdXNlQ3NzQ2xhc3NlcyB9IGZyb20gXCIuL3V0aWwvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSwgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG4vKipcclxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgbWluaW11bSBvciBtYXhpbXVtIG9wYWNpdHkgdmFsdWVzIHRvIHVzZSBmb3IgdGhlIGZhZGUgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBmYWRlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIGZhZGVkIG91dC5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZmFkZU1pbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG9wYWNpdHkgdG8gdXNlIHdoZW4gZmFkZWQgaW4uXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGZhZGVNYXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzRmFkZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWluLCBmYWRlTWF4IH0gfTogVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZhZGVgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxyXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXHJcbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXHJcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oeyByZWYsIC4uLnJlc3QgfSwgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBjbGlwUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byBjbGlwIGFyb3VuZCAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBPcmlnaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gY2xpcCBhcm91bmQgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcylcclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE9yaWdpbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGlwTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIGNsaXAgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsaXBNaW5JbmxpbmU6IG51bWJlciB8IHVuZGVmaW5lZCB8IG51bGw7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHNpemUgdG8gY2xpcCB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xpcE1pbkJsb2NrOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ2xpcDxFIGV4dGVuZHMgRWxlbWVudD4oeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluQmxvY2ssIGNsaXBNaW5JbmxpbmUsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5CbG9jaywgY2xpcE9yaWdpbklubGluZSB9IH06IFVzZUJhc2VQcm9wc0NsaXBQYXJhbWV0ZXJzPEU+KSB7XHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcGApLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXHJcbiAgICAgICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxyXG4gICAgICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcclxuICAgICAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzLFxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDbGlwUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGlwID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgZGVsYXlNb3VudFVudGlsU2hvd24sIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDbGlwUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcblxyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ2xpcCh7IGNsaXBQYXJhbWV0ZXJzOiB7IGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSlcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNDbGlwLCBVc2VCYXNlUHJvcHNDbGlwUGFyYW1ldGVycyB9IGZyb20gXCIuL2NsaXBcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24gfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG5pbXBvcnQgeyBHZXQsIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZSB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi91dGlsL3V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENsaXBGYWRlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ2xpcFBhcmFtZXRlcnM8RT4sIFwiY2xpcFBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVyczxFPiwgXCJmYWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZGVsYXlNb3VudFVudGlsU2hvd24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGR1cmF0aW9uLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgY2xpcE1pbiwgY2xpcE1pbkJsb2NrLCBjbGlwTWluSW5saW5lLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBPcmlnaW5JbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ2xpcEZhZGVQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0NsaXAoeyBjbGlwUGFyYW1ldGVyczogeyBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jayB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuXHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgY29sbGFwc2UgZWZmZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG5cclxuICAgIGNvbGxhcHNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICogVGhlIHNtYWxsZXN0IHNpemUgdGhlIGNvbXBvbmVudCBjb2xsYXBzZXMgdG8uXHJcbiAgICAgICAgKi9cclxuICAgICAgICBtaW5CbG9ja1NpemU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqIFxyXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cclxuICogXHJcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQmFzZVByb3BzQ29sbGFwc2U8RSBleHRlbmRzIEVsZW1lbnQ+KHsgY29sbGFwc2VQYXJhbWV0ZXJzOiB7IG1pbkJsb2NrU2l6ZSB9IH06IFVzZUJhc2VQcm9wc0NvbGxhcHNlUGFyYW1ldGVyczxFPikge1xyXG4gICAgY29uc3QgeyBHZXRCYXNlQ2xhc3MgfSA9IHVzZUNzc0NsYXNzZXMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtHZXRCYXNlQ2xhc3MoKX0tY29sbGFwc2VgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxhcHNlUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXHJcbiAqIFxyXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlISBcclxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXHJcbiAqIFxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2U8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IHNob3csIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGR1cmF0aW9uLCBkZWxheU1vdW50VW50aWxTaG93biwgbWluQmxvY2tTaXplLCBhbmltYXRlT25Nb3VudCwgZXhpdFZpc2liaWxpdHksIG9uVmlzaWJpbGl0eUNoYW5nZSwgLi4ucmVzdCB9OiBDb2xsYXBzZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiB1c2VUcmFuc2l0aW9uKHtcclxuICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBtZWFzdXJlOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzQ29sbGFwc2UoeyBjb2xsYXBzZVBhcmFtZXRlcnM6IHsgbWluQmxvY2tTaXplIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0NvbGxhcHNlLCBVc2VCYXNlUHJvcHNDb2xsYXBzZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsYXBzZUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzQ29sbGFwc2VQYXJhbWV0ZXJzPEU+LCBcImNvbGxhcHNlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBzaG93LCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBkdXJhdGlvbiwgYW5pbWF0ZU9uTW91bnQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBmYWRlTWluLCBmYWRlTWF4LCBleGl0VmlzaWJpbGl0eSwgbWluQmxvY2tTaXplLCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogQ29sbGFwc2VGYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2hvdyxcclxuICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICBleGl0VmlzaWJpbGl0eSxcclxuICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBwcm9wc0luY29taW5nOiB1c2VNZXJnZWRQcm9wczxFPihcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNDb2xsYXBzZSh7IGNvbGxhcHNlUGFyYW1ldGVyczogeyBtaW5CbG9ja1NpemUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgaCwgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlLCBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVycyB9IGZyb20gXCIuL3V0aWwvdHlwZXNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmLCB1c2VMYXN0Tm9uTnVsbFZhbHVlIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XG5cbi8qKlxuICogUHJvcGVydGllcyB0aGF0IGFsbG93IGFkanVzdGluZyB0aGUgZGlyZWN0aW9uIGFuZCBleHRlbnQgb2YgdGhlIGZsaXAgZWZmZWN0LiBcbiAqIFZhbHVlcyBhcmUgcmVsYXRpdmUsIHdpdGggMSBvciAtMSBiZWluZyB0aGUgc2l6ZSBvZiB0aGUgY29tcG9uZW50IGluIHRoYXQgZGlyZWN0aW9uLlxuICogYDAuNWAsIGZvciBleGFtcGxlLCB3b3VsZCBmbGlwIHRvIHRoZSByaWdodCBieSA1MCUgb2YgdGhlIGVsZW1lbnQncyB3aWR0aC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VCYXNlUHJvcHNGbGlwUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XG4gICAgZmxpcFBhcmFtZXRlcnM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0YXJnZXQgYW5nbGUgKGluIGRlZ3JlZXMpIHRvIHJvdGF0ZSB0b3dhcmRzIG9uIHRoZSBpbmxpbmUgYXhpcyAoWCBheGlzIGZvciBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGFyZ2V0IGFuZ2xlIChpbiBkZWdyZWVzKSB0byByb3RhdGUgdG93YXJkcyBvbiB0aGUgYmxvY2sgYXhpcyAoWCBheGlzIGZvciBob3Jpem9udGFsIHdyaXRpbmcgbW9kZXMpXG4gICAgICAgICAqIFdoZW4gMCwgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWUgd2lsbCBiZSB1c2VkLiBQYXNzIG51bGwvdW5kZWZpbmVkIHRvIGFjdHVhbGx5IHVzZSAwLlxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcEFuZ2xlQmxvY2s6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpbmNlIHRoaXMgaXMgYSAzRCBlZmZlY3QsIGEgcGVyc3BlY3RpdmUgdmFsdWUgaXMgbmVlZGVkLlxuICAgICAgICAgKiBAZGVmYXVsdCA4MDBweFxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcFBlcnNwZWN0aXZlOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJhc2VQcm9wc0ZsaXA8RSBleHRlbmRzIEVsZW1lbnQ+KHsgZmxpcFBhcmFtZXRlcnM6IHsgZmxpcEFuZ2xlQmxvY2ssIGZsaXBBbmdsZUlubGluZSwgZmxpcFBlcnNwZWN0aXZlIH0gfTogVXNlQmFzZVByb3BzRmxpcFBhcmFtZXRlcnM8RT4pIHtcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7R2V0QmFzZUNsYXNzKCl9LWZsaXBgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyh1c2VMYXN0Tm9uTnVsbFZhbHVlKGZsaXBBbmdsZUlubGluZSkgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyh1c2VMYXN0Tm9uTnVsbFZhbHVlKGZsaXBBbmdsZUJsb2NrKSA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXBlcnNwZWN0aXZlYF06IGAkeyhmbGlwUGVyc3BlY3RpdmUgPz8gODAwKX1weGBcbiAgICAgICAgfSBhcyBoLkpTWC5DU1NQcm9wZXJ0aWVzXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsaXBQcm9wczxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IGV4dGVuZHMgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlPEU+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNGbGlwUGFyYW1ldGVyczxFPiwgXCJmbGlwUGFyYW1ldGVyc1wiPj4geyB9O1xuXG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cbiAqIFxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYGZsaXBJbmxpbmVgIGFuZCBgZmxpcEJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqIFxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIGV4Y2x1c2l2aXR5S2V5IGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgIFxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLikgXG4gKiBcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcDxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGRlbGF5TW91bnRVbnRpbFNob3duLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBmbGlwUGVyc3BlY3RpdmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IEZsaXBQcm9wczxFPiwgcmVmOiBSZWY8RT4pIHtcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcbiAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgIGVhc2luZ0luLFxuICAgICAgICAgICAgZWFzaW5nT3V0LFxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmxpcCh7IGZsaXBQYXJhbWV0ZXJzOiB7IGZsaXBBbmdsZUJsb2NrLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBQZXJzcGVjdGl2ZSB9IH0pLFxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cbiAgICB9KTtcbn0pKTtcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiwgdXNlTGFzdE5vbk51bGxWYWx1ZSB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIGRpcmVjdGlvbiBhbmQgZXh0ZW50IG9mIHRoZSBzbGlkZSBlZmZlY3QuIFxyXG4gKiBWYWx1ZXMgYXJlIHJlbGF0aXZlLCB3aXRoIDEgb3IgLTEgYmVpbmcgdGhlIHNpemUgb2YgdGhlIGNvbXBvbmVudCBpbiB0aGF0IGRpcmVjdGlvbi5cclxuICogYDAuNWAsIGZvciBleGFtcGxlLCB3b3VsZCBzbGlkZSB0byB0aGUgcmlnaHQgYnkgNTAlIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGguXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBVc2VCYXNlUHJvcHNCYXNlUGFyYW1ldGVyczxFPiB7XHJcbiAgICBzbGlkZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHNsaWRlIHRvL2Zyb20gKFggY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogV2hlbiAwLCB0aGUgbGFzdCBub24temVybyB2YWx1ZSB3aWxsIGJlIHVzZWQuIFBhc3MgbnVsbC91bmRlZmluZWQgdG8gYWN0dWFsbHkgdXNlIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2xpZGVUYXJnZXRJbmxpbmU6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXQgcG9pbnQgdG8gc2xpZGUgdG8vZnJvbSAoWSBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBXaGVuIDAsIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlIHdpbGwgYmUgdXNlZC4gUGFzcyBudWxsL3VuZGVmaW5lZCB0byBhY3R1YWxseSB1c2UgMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzbGlkZVRhcmdldEJsb2NrOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNTbGlkZTxFIGV4dGVuZHMgRWxlbWVudD4oeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSB9OiBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gdXNlTGFzdE5vbk51bGxWYWx1ZShzbGlkZVRhcmdldElubGluZSk7XHJcbiAgICBzbGlkZVRhcmdldEJsb2NrID0gdXNlTGFzdE5vbk51bGxWYWx1ZShzbGlkZVRhcmdldEJsb2NrKTtcclxuXHJcbiAgICBjb25zdCB7IEdldEJhc2VDbGFzcyB9ID0gdXNlQ3NzQ2xhc3NlcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS1zbGlkZWAsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxyXG4gICAgICAgIH0gYXMgaC5KU1guQ1NTUHJvcGVydGllc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVByb3BzPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1NsaWRlUGFyYW1ldGVyczxFPiwgXCJzbGlkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxyXG4gKiBcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxyXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXHJcbiAqIFxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYCBcclxuICogKGBzbGlkZUlubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pIFxyXG4gKiBcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGUgPSBtZW1vKGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgb25WaXNpYmlsaXR5Q2hhbmdlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBkZWxheU1vdW50VW50aWxTaG93biwgLi4ucmVzdCB9OiBTbGlkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgZWFzaW5nLFxyXG4gICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzU2xpZGUoeyBzbGlkZVBhcmFtZXRlcnM6IHsgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUgfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlQmFzZVByb3BzRmFkZSwgVXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiB7IH07XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFNsaWRlRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc1NsaWRlKHsgc2xpZGVQYXJhbWV0ZXJzOiB7IHNsaWRlVGFyZ2V0QmxvY2ssIHNsaWRlVGFyZ2V0SW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV4Y2x1c2l2ZVRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7IGV4Y2x1c2l2aXR5S2V5IH1cclxuICAgIH0pO1xyXG59KSk7XHJcbiIsImltcG9ydCB7IGgsIFJlZiB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IHVzZUNzc0NsYXNzZXMgfSBmcm9tIFwiLi91dGlsL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UsIFVzZUJhc2VQcm9wc0Jhc2VQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdGhhdCBhbGxvdyBhZGp1c3RpbmcgdGhlIG9yaWdpbiwgbWluaW11bSBzaXplLCBhbmQgZGlyZWN0aW9uIG9mIHRoZSB6b29tIGVmZmVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RSBleHRlbmRzIEVsZW1lbnQ+IGV4dGVuZHMgVXNlQmFzZVByb3BzQmFzZVBhcmFtZXRlcnM8RT4ge1xyXG4gICAgem9vbVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpXHJcbiAgICAgICAgICogQGRlZmF1bHQgMC41XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU9yaWdpbjogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHRhcmdldCBwb2ludCB0byB6b29tIG91dCBvZi9pbnRvIChYIGNvbXBvbmVudClcclxuICAgICAgICAgKiBAZGVmYXVsdCAwLjVcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tT3JpZ2luSW5saW5lOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGFyZ2V0IHBvaW50IHRvIHpvb20gb3V0IG9mL2ludG8gKFkgY29tcG9uZW50KVxyXG4gICAgICAgICAqIEBkZWZhdWx0IDAuNVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21PcmlnaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKHdpdGggWCAmIFkgY29tcG9uZW50cyBpZGVudGljYWwpLlxyXG4gICAgICAgICAqIEBkZWZhdWx0IDBcclxuICAgICAgICAgKi9cclxuICAgICAgICB6b29tTWluOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbWluaW11bSBzaXplIHRvIHNocmluayB0by9mcm9tLCBmcm9tIDAgdG8gMSAoWCBjb21wb25lbnQgaW4gaG9yaXpvbnRhbCB3cml0aW5nIG1vZGVzKS5cclxuICAgICAgICAgKiBAZGVmYXVsdCAwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgem9vbU1pbklubGluZTogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1pbmltdW0gc2l6ZSB0byBzaHJpbmsgdG8vZnJvbSwgZnJvbSAwIHRvIDEgKFkgY29tcG9uZW50IGluIGhvcml6b250YWwgd3JpdGluZyBtb2RlcykuXHJcbiAgICAgICAgICogQGRlZmF1bHQgMFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHpvb21NaW5CbG9jazogbnVtYmVyIHwgdW5kZWZpbmVkIHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCYXNlUHJvcHNab29tPEUgZXh0ZW5kcyBFbGVtZW50Pih7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0gfTogVXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4pIHtcclxuICAgIGNvbnN0IHsgR2V0QmFzZUNsYXNzIH0gPSB1c2VDc3NDbGFzc2VzKCk7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBjbGFzc05hbWU6IGAke0dldEJhc2VDbGFzcygpfS16b29tYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtHZXRCYXNlQ2xhc3MoKX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7R2V0QmFzZUNsYXNzKCl9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke0dldEJhc2VDbGFzcygpfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcclxuICAgICAgICB9IGFzIGguSlNYLkNTU1Byb3BlcnRpZXMsXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBab29tUHJvcHM8RSBleHRlbmRzIEhUTUxFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbTxFIGV4dGVuZHMgSFRNTEVsZW1lbnQ+KHsgZHVyYXRpb24sIGV4Y2x1c2l2aXR5S2V5LCBlYXNpbmcsIGVhc2luZ0luLCBlYXNpbmdPdXQsIGRlbGF5TW91bnRVbnRpbFNob3duLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgYW5pbWF0ZU9uTW91bnQsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogWm9vbVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVPbk1vdW50LFxyXG4gICAgICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICAgICAgZWFzaW5nT3V0LFxyXG4gICAgICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG59KSk7XHJcblxyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1NsaWRlLCBVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnMgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgR2V0LCBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2UgfSBmcm9tIFwiLi91dGlsL3R5cGVzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc1pvb20sIFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZVpvb21Qcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc1pvb21QYXJhbWV0ZXJzPEU+LCBcInpvb21QYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzPEU+LCBcInNsaWRlUGFyYW1ldGVyc1wiPj4geyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVab29tUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gdXNlVHJhbnNpdGlvbih7XHJcbiAgICAgICAgdHJhbnNpdGlvblBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3csXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgZXhpdFZpc2liaWxpdHksXHJcbiAgICAgICAgICAgIGRlbGF5TW91bnRVbnRpbFNob3duLFxyXG4gICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgIGVhc2luZyxcclxuICAgICAgICAgICAgZWFzaW5nSW4sXHJcbiAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgcHJvcHNJbmNvbWluZzogdXNlTWVyZ2VkUHJvcHM8RT4oXHJcbiAgICAgICAgICAgICAgICB7IHJlZiwgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVyczogeyBleGNsdXNpdml0eUtleSB9XHJcbiAgICB9KTtcclxufSkpO1xyXG4iLCJpbXBvcnQgeyBSZWYgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJwcmVhY3QvY29tcGF0XCI7XHJcbmltcG9ydCB7IHVzZUJhc2VQcm9wc0ZhZGUsIFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNTbGlkZSwgVXNlQmFzZVByb3BzU2xpZGVQYXJhbWV0ZXJzIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVab29tRmFkZVByb3BzPEUgZXh0ZW5kcyBFbGVtZW50PiBleHRlbmRzIFRyYW5zaXRpb25QYXJhbWV0ZXJzQmFzZTxFPiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+LCBQYXJ0aWFsPEdldDxVc2VCYXNlUHJvcHNTbGlkZVBhcmFtZXRlcnM8RT4sIFwic2xpZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzRmFkZVBhcmFtZXRlcnM8RT4sIFwiZmFkZVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gbWVtbyhmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlPEUgZXh0ZW5kcyBIVE1MRWxlbWVudD4oeyBkdXJhdGlvbiwgZXhjbHVzaXZpdHlLZXksIGVhc2luZywgZWFzaW5nSW4sIGVhc2luZ091dCwgem9vbU1pbiwgem9vbU1pbkJsb2NrLCB6b29tTWluSW5saW5lLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luQmxvY2ssIHpvb21PcmlnaW5JbmxpbmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBkZWxheU1vdW50VW50aWxTaG93biwgc2xpZGVUYXJnZXRCbG9jaywgc2xpZGVUYXJnZXRJbmxpbmUsIGZhZGVNYXgsIGZhZGVNaW4sIGV4aXRWaXNpYmlsaXR5LCBvblZpc2liaWxpdHlDaGFuZ2UsIC4uLnJlc3QgfTogU2xpZGVab29tRmFkZVByb3BzPEU+LCByZWY6IFJlZjxFPikge1xyXG4gICAgcmV0dXJuIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgIHRyYW5zaXRpb25QYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIG1lYXN1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICBkdXJhdGlvbixcclxuICAgICAgICAgICAgYW5pbWF0ZU9uTW91bnQsXHJcbiAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICBkZWxheU1vdW50VW50aWxTaG93bixcclxuICAgICAgICAgICAgb25WaXNpYmlsaXR5Q2hhbmdlLFxyXG4gICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgIGVhc2luZ0luLFxyXG4gICAgICAgICAgICBlYXNpbmdPdXQsXHJcbiAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICB1c2VCYXNlUHJvcHNTbGlkZSh7IHNsaWRlUGFyYW1ldGVyczogeyBzbGlkZVRhcmdldEJsb2NrLCBzbGlkZVRhcmdldElubGluZSB9IH0pLFxyXG4gICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzRmFkZSh7IGZhZGVQYXJhbWV0ZXJzOiB7IGZhZGVNYXgsIGZhZGVNaW4gfSB9KSxcclxuICAgICAgICAgICAgICAgIHsgcmVmLCAuLi5yZXN0IH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuIiwiaW1wb3J0IHsgUmVmIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNGYWRlLCBVc2VCYXNlUHJvcHNGYWRlUGFyYW1ldGVycyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IEdldCwgVHJhbnNpdGlvblBhcmFtZXRlcnNCYXNlIH0gZnJvbSBcIi4vdXRpbC90eXBlc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgeyB1c2VCYXNlUHJvcHNab29tLCBVc2VCYXNlUHJvcHNab29tUGFyYW1ldGVycyB9IGZyb20gXCIuL3pvb21cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWm9vbUZhZGVQcm9wczxFIGV4dGVuZHMgRWxlbWVudD4gZXh0ZW5kcyBUcmFuc2l0aW9uUGFyYW1ldGVyc0Jhc2U8RT4sIFBhcnRpYWw8R2V0PFVzZUJhc2VQcm9wc0ZhZGVQYXJhbWV0ZXJzPEU+LCBcImZhZGVQYXJhbWV0ZXJzXCI+PiwgUGFydGlhbDxHZXQ8VXNlQmFzZVByb3BzWm9vbVBhcmFtZXRlcnM8RT4sIFwiem9vbVBhcmFtZXRlcnNcIj4+IHsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IG1lbW8oZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGU8RSBleHRlbmRzIEhUTUxFbGVtZW50Pih7IGR1cmF0aW9uLCBleGNsdXNpdml0eUtleSwgZWFzaW5nLCBlYXNpbmdJbiwgZWFzaW5nT3V0LCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCBhbmltYXRlT25Nb3VudCwgZGVsYXlNb3VudFVudGlsU2hvd24sIHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lLCBleGl0VmlzaWJpbGl0eSwgb25WaXNpYmlsaXR5Q2hhbmdlLCAuLi5yZXN0IH06IFpvb21GYWRlUHJvcHM8RT4sIHJlZjogUmVmPEU+KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHVzZVRyYW5zaXRpb24oe1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgICAgbWVhc3VyZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlT25Nb3VudCxcclxuICAgICAgICAgICAgICAgIGV4aXRWaXNpYmlsaXR5LFxyXG4gICAgICAgICAgICAgICAgZGVsYXlNb3VudFVudGlsU2hvd24sXHJcbiAgICAgICAgICAgICAgICBvblZpc2liaWxpdHlDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmcsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmdJbixcclxuICAgICAgICAgICAgICAgIGVhc2luZ091dCxcclxuICAgICAgICAgICAgICAgIHByb3BzSW5jb21pbmc6IHVzZU1lcmdlZFByb3BzPEU+KFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUJhc2VQcm9wc0ZhZGUoeyBmYWRlUGFyYW1ldGVyczogeyBmYWRlTWF4LCBmYWRlTWluIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlQmFzZVByb3BzWm9vbSh7IHpvb21QYXJhbWV0ZXJzOiB7IHpvb21NaW4sIHpvb21NaW5CbG9jaywgem9vbU1pbklubGluZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbkJsb2NrLCB6b29tT3JpZ2luSW5saW5lIH0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgeyByZWYsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhjbHVzaXZlVHJhbnNpdGlvblBhcmFtZXRlcnM6IHsgZXhjbHVzaXZpdHlLZXkgfVxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG59KSk7XHJcbiIsbnVsbF0sIm5hbWVzIjpbInNsaWNlIiwib3B0aW9ucyIsInZub2RlSWQiLCJyZXJlbmRlclF1ZXVlIiwicHJldkRlYm91bmNlIiwiaSIsIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImFzc2lnbiIsIm9iaiIsInByb3BzIiwicmVtb3ZlTm9kZSIsIm5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImNoaWxkcmVuIiwia2V5IiwicmVmIiwibm9ybWFsaXplZFByb3BzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiY2FsbCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImNyZWF0ZVZOb2RlIiwib3JpZ2luYWwiLCJ2bm9kZSIsIl9fayIsIl9fIiwiX19iIiwiX19lIiwiX19kIiwiX19jIiwiX19oIiwiY29uc3RydWN0b3IiLCJfX3YiLCJGcmFnbWVudCIsIkNvbXBvbmVudCIsImNvbnRleHQiLCJ0aGlzIiwiZ2V0RG9tU2libGluZyIsImNoaWxkSW5kZXgiLCJpbmRleE9mIiwic2libGluZyIsInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwiY2hpbGQiLCJiYXNlIiwiZW5xdWV1ZVJlbmRlciIsImMiLCJwdXNoIiwicHJvY2VzcyIsImRlYm91bmNlUmVuZGVyaW5nIiwic2V0VGltZW91dCIsInF1ZXVlIiwiX19yIiwic29ydCIsImEiLCJiIiwic29tZSIsImNvbXBvbmVudCIsImNvbW1pdFF1ZXVlIiwib2xkVk5vZGUiLCJvbGREb20iLCJwYXJlbnREb20iLCJfX1AiLCJkaWZmIiwib3duZXJTVkdFbGVtZW50IiwiY29tbWl0Um9vdCIsImRpZmZDaGlsZHJlbiIsInJlbmRlclJlc3VsdCIsIm5ld1BhcmVudFZOb2RlIiwib2xkUGFyZW50Vk5vZGUiLCJnbG9iYWxDb250ZXh0IiwiaXNTdmciLCJleGNlc3NEb21DaGlsZHJlbiIsImlzSHlkcmF0aW5nIiwiaiIsImNoaWxkVk5vZGUiLCJuZXdEb20iLCJmaXJzdENoaWxkRG9tIiwicmVmcyIsIm9sZENoaWxkcmVuIiwib2xkQ2hpbGRyZW5MZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJyZW9yZGVyQ2hpbGRyZW4iLCJwbGFjZUNoaWxkIiwidW5tb3VudCIsImFwcGx5UmVmIiwidG1wIiwidG9DaGlsZEFycmF5Iiwib3V0IiwibmV4dERvbSIsInNpYkRvbSIsIm91dGVyIiwiYXBwZW5kQ2hpbGQiLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImRpZmZQcm9wcyIsImRvbSIsIm5ld1Byb3BzIiwib2xkUHJvcHMiLCJoeWRyYXRlIiwic2V0UHJvcGVydHkiLCJzZXRTdHlsZSIsInN0eWxlIiwidmFsdWUiLCJ0ZXN0IiwibmFtZSIsIm9sZFZhbHVlIiwidXNlQ2FwdHVyZSIsIm8iLCJjc3NUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudFByb3h5Q2FwdHVyZSIsImV2ZW50UHJveHkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwibmV3Vk5vZGUiLCJpc05ldyIsIm9sZFN0YXRlIiwic25hcHNob3QiLCJjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24iLCJwcm92aWRlciIsImNvbXBvbmVudENvbnRleHQiLCJyZW5kZXJIb29rIiwiY291bnQiLCJuZXdUeXBlIiwiY29udGV4dFR5cGUiLCJfX0UiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJkb1JlbmRlciIsInN1YiIsInN0YXRlIiwiX3NiIiwiX19zIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwiZm9yRWFjaCIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsImRpZmZFbGVtZW50Tm9kZXMiLCJkaWZmZWQiLCJyb290IiwiY2IiLCJvbGRIdG1sIiwibmV3SHRtbCIsIm5vZGVUeXBlIiwibG9jYWxOYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImNyZWF0ZUVsZW1lbnROUyIsImlzIiwiZGF0YSIsImNoaWxkTm9kZXMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImF0dHJpYnV0ZXMiLCJfX2h0bWwiLCJpbm5lckhUTUwiLCJjaGVja2VkIiwiY3VycmVudCIsInBhcmVudFZOb2RlIiwic2tpcFJlbW92ZSIsInIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlcGxhY2VOb2RlIiwiZmlyc3RDaGlsZCIsImNsb25lRWxlbWVudCIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0VmFsdWUiLCJjb250ZXh0SWQiLCJDb25zdW1lciIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwic3VicyIsImN0eCIsIl9wcm9wcyIsIm9sZCIsInNwbGljZSIsImVycm9yIiwiZXJyb3JJbmZvIiwiY3RvciIsImhhbmRsZWQiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZENhdGNoIiwidXBkYXRlIiwiY2FsbGJhY2siLCJzIiwiZm9yY2VVcGRhdGUiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldmlvdXNDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIkVNUFRZIiwib2xkQmVmb3JlRGlmZiIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsImhvb2tzIiwiX19IIiwiX19WIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwiYWN0aW9uIiwiY3VycmVudFZhbHVlIiwiX19OIiwibmV4dFZhbHVlIiwiX2hhc1NjdUZyb21Ib29rcyIsInByZXZTY3UiLCJwIiwic3RhdGVIb29rcyIsImZpbHRlciIsIngiLCJldmVyeSIsInNob3VsZFVwZGF0ZSIsImhvb2tJdGVtIiwidXNlRWZmZWN0IiwiYXJncyIsImFyZ3NDaGFuZ2VkIiwiX3BlbmRpbmdBcmdzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwic2hpZnQiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWZ0ZXJOZXh0RnJhbWUiLCJoYXNFcnJvcmVkIiwiSEFTX1JBRiIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJob29rIiwiY29tcCIsImNsZWFudXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJ0IiwibiIsImNsc3giLCJ1c2VFbnN1cmVTdGFiaWxpdHkiLCJwYXJlbnRIb29rTmFtZSIsInZhbHVlcyIsImhlbHBlclRvRW5zdXJlU3RhYmlsaXR5Iiwic2hvd25FcnJvciIsInVzZUhlbHBlciIsImNvbnNvbGUiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlUGFzc2l2ZVN0YXRlIiwib25DaGFuZ2UiLCJnZXRJbml0aWFsVmFsdWUiLCJjdXN0b21EZWJvdW5jZVJlbmRlcmluZyIsInZhbHVlUmVmIiwiVW5zZXQiLCJyZWFzb25SZWYiLCJ3YXJuaW5nUmVmIiwiZGVwZW5kZW5jeVRvQ29tcGFyZUFnYWluc3QiLCJjbGVhbnVwQ2FsbGJhY2tSZWYiLCJvblNob3VsZENsZWFuVXAiLCJjbGVhbnVwQ2FsbGJhY2siLCJ0cnlFbnN1cmVWYWx1ZSIsImV4IiwiZ2V0VmFsdWUiLCJ3YXJuIiwic2V0VmFsdWUiLCJyZWFzb24iLCJGdW5jdGlvbiIsIm5leHRSZWFzb24iLCJuZXh0RGVwIiwicHJldkRlcCIsIlN5bWJvbCIsInJldHVybkZhbHNlIiwicmV0dXJuTnVsbCIsInJ1bkltbWVkaWF0ZWx5IiwiVGFibGUiLCJiYXNlNjQiLCJyYW5kb202Qml0cyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbTY0Qml0cyIsImdlbmVyYXRlUmFuZG9tSWQiLCJwcmVmaXgiLCJtYXAiLCJqb2luIiwicHJldmlvdXNJbnB1dHMiLCJNYXAiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImdldCIsImlucHV0cyIsImVmZmVjdCIsInNldCIsImNsZWFyIiwidXNlQmVmb3JlTGF5b3V0RWZmZWN0IiwiZGVsZXRlIiwidXNlU3RhYmxlR2V0dGVyIiwiRXJyb3IiLCJ1c2VTdGFibGVPYmplY3QiLCJPYmplY3QiLCJlbnRyaWVzIiwiX2siLCJ2IiwiV2Vha01hcCIsImlzU3RhYmxlR2V0dGVyIiwic2V0SXNTdGFibGVHZXR0ZXIiLCJ1c2VTdGFibGVDYWxsYmFjayIsImZuIiwibm9EZXBzIiwiY3VycmVudENhbGxiYWNrR2V0dGVyIiwidXNlQ2FsbGJhY2tOYXRpdmUiLCJhc3NlcnQiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImxocyIsInJocyIsInVzZU1lcmdlZENsYXNzZXMiLCJsaHNDbGFzcyIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwidXNlTWVyZ2VkUmVmcyIsImNvbWJpbmVkIiwic3R5bGVTdHJpbmdUb09iamVjdCIsImZyb21FbnRyaWVzIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwibG9nIiwidXNlTWVyZ2VkUHJvcHMiLCJhbGxQcm9wcyIsInJldCIsIm5leHRQcm9wcyIsInVzZU1lcmdlZFByb3BzMiIsImtub3ducyIsIm1lcmdlVW5rbm93biIsImxoc1ZhbHVlIiwicmhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImxoc0FsbCIsInJoc0FsbCIsImNsYXNzTmFtZSIsImxoc0tleVUiLCJsaHNLZXkiLCJoYXMiLCJyaHNLZXlVIiwicmhzS2V5IiwibHYiLCJydiIsIlByb21pc2UiLCJhbGwiLCJ1c2VSZWZFbGVtZW50Iiwib25FbGVtZW50Q2hhbmdlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsInJlZkVsZW1lbnRQYXJhbWV0ZXJzIiwiaGFuZGxlciIsInByZXZWYWx1ZSIsImdldEVsZW1lbnQiLCJzZXRFbGVtZW50IiwicHJvcHNTdGFibGUiLCJyZWZFbGVtZW50UmV0dXJuIiwidXNlTWFuYWdlZENoaWxkcmVuIiwicGFyZW50UGFyYW1ldGVycyIsIm1hbmFnZWRDaGlsZHJlblBhcmFtZXRlcnMiLCJvbkFmdGVyQ2hpbGRMYXlvdXRFZmZlY3QiLCJvbkNoaWxkcmVuTW91bnRDaGFuZ2UiLCJvbkNoaWxkQ291bnRDaGFuZ2UiLCJyZXN0IiwiZ2V0SGlnaGVzdEluZGV4IiwibWFuYWdlZENoaWxkcmVuQXJyYXkiLCJoaWdoZXN0SW5kZXgiLCJhcnIiLCJyZWMiLCJsb3dlc3RJbmRleCIsImZvckVhY2hDaGlsZCIsImZpZWxkIiwiZ2V0TWFuYWdlZENoaWxkSW5mbyIsImhhc1JlbW90ZVVMRUNoaWxkTW91bnRlZCIsInJlbW90ZVVMRUNoaWxkQ2hhbmdlZENhdXNlcnMiLCJyZW1vdGVVTEVDaGlsZENoYW5nZWQiLCJzaXplIiwiYWRkIiwicmVtb3RlVUxFQ2hpbGRNb3VudGVkIiwibW91bnRlZCIsIm1vdW50cyIsInVubW91bnRzIiwiZ2V0Q2hpbGRyZW4iLCJtYXgiLCJzaGF2ZSIsIm1hbmFnZWRDaGlsZHJlbiIsIl8iLCJnZXRBdCIsImFycmF5U2xpY2UiLCJtYW5hZ2VkQ2hpbGRDb250ZXh0IiwibWFuYWdlZENoaWxkcmVuUmV0dXJuIiwidXNlTWFuYWdlZENoaWxkIiwiaW5mbyIsIm1hbmFnZWRDaGlsZFBhcmFtZXRlcnMiLCJmbGF0IiwibWFuYWdlZENoaWxkUmV0dXJuIiwidXNlQ2hpbGRyZW5GbGFnIiwiaW5pdGlhbEluZGV4IiwiY2xvc2VzdEZpdCIsIm9uSW5kZXhDaGFuZ2UiLCJzZXRBdCIsImlzVmFsaWQiLCJnZXRDdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJnZXRSZXF1ZXN0ZWRJbmRleCIsInNldFJlcXVlc3RlZEluZGV4IiwiZ2V0Q2xvc2VzdEZpdCIsInJlcXVlc3RlZEluZGV4IiwiY2xvc2VzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJjbG9zZXN0SW5kZXgiLCJuZXdEaXN0YW5jZSIsImFicyIsInJlZXZhbHVhdGVDbG9zZXN0Rml0IiwiY3VycmVudENoaWxkIiwiY2xvc2VzdEZpdEluZGV4IiwiY2xvc2VzdEZpdENoaWxkIiwiY2hhbmdlSW5kZXgiLCJuZXdNYXRjaGluZ0NoaWxkIiwib2xkTWF0Y2hpbmdDaGlsZCIsImNoaWxkSXNWYWxpZCIsIl9ibG9ja2luZ0VsZW1lbnRzIiwiX2FscmVhZHlJbmVydEVsZW1lbnRzIiwiX3RvcEVsUGFyZW50cyIsIl9zaWJsaW5nc1RvUmVzdG9yZSIsIl9wYXJlbnRNTyIsIl90b3BDaGFuZ2VkIiwiX3N3YXBJbmVydGVkU2libGluZyIsIl9pbmVydFNpYmxpbmdzIiwiX3Jlc3RvcmVJbmVydGVkU2libGluZ3MiLCJfZ2V0UGFyZW50cyIsIl9nZXREaXN0cmlidXRlZENoaWxkcmVuIiwiX2lzSW5lcnRhYmxlIiwiX2hhbmRsZU11dGF0aW9ucyIsIkJsb2NraW5nRWxlbWVudHNJbXBsIiwiX2EiLCJfYiIsIl9jIiwiZGVzdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJlbGVtZW50IiwicmVtb3ZlIiwicG9wIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsImJvZHkiLCJ0b1NraXAiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJpbmVydCIsImVsZW1lbnRzIiwibW8iLCJkaXNjb25uZWN0Iiwic2libGluZ3MiLCJwYXJlbnQiLCJpbmVydGVkU2libGluZ3MiLCJNdXRhdGlvbk9ic2VydmVyIiwiYmluZCIsInBhcmVudFRvT2JzZXJ2ZSIsIm1heWJlU2hhZHlSb290IiwiX19zaGFkeSIsImhvc3QiLCJvYnNlcnZlIiwiY2hpbGRMaXN0IiwibXV0YXRpb25zIiwicGFyZW50cyIsIm11dGF0aW9uIiwidGFyZ2V0IiwiaWR4IiwiaW5lcnRlZENoaWxkIiwicmVtb3ZlZE5vZGVzIiwiYWRkZWROb2RlcyIsIk5vZGUiLCJFTEVNRU5UX05PREUiLCJhc3NpZ25lZFNsb3QiLCJzaGFkb3dSb290IiwicmVzdWx0Iiwibm9kZXMiLCJzbG90cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIiRibG9ja2luZ0VsZW1lbnRzIiwiZ2xvYmFsIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiVHlwZUVycm9yIiwid2luZG93IiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsInN1YnRyZWUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiY29udGFpbnMiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiYmx1ciIsImZvY3VzIiwiX2Fkb3B0SW5lcnRSb290IiwiX21hbmFnZU5vZGUiLCJyZWdpc3RlciIsImRlcmVnaXN0ZXIiLCJfdW5tYW5hZ2VTdWJ0cmVlIiwiX3RoaXMzIiwiaW5lcnRTdWJyb290IiwiZ2V0SW5lcnRSb290Iiwic2V0SW5lcnQiLCJtYW5hZ2VkTm9kZXMiLCJzYXZlZEluZXJ0Tm9kZSIsInJlY29yZHMiLCJzZWxmIiwicmVjb3JkIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsInRhYkluZGV4IiwiaGFzU2F2ZWRUYWJJbmRleCIsImFkZEluZXJ0Um9vdCIsInJlbW92ZUluZXJ0Um9vdCIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsImNvbnRlbnQiLCJkaXN0cmlidXRlZE5vZGVzIiwiZ2V0RGlzdHJpYnV0ZWROb2RlcyIsInNsb3QiLCJfZGlzdHJpYnV0ZWROb2RlcyIsIl9pIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiSFRNTEVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldFN0YXRlUCIsInVzZVN0YXRlUCIsImdldFN0YXRlIiwiaXNOYU4iLCJmcmVlR2xvYmFsIiwiZnJlZVNlbGYiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJpc09iamVjdExpa2UiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsImlzQnVmZmVyIiwiZnJlZVByb2Nlc3MiLCJub2RlVXRpbCIsInR5cGVzIiwicmVxdWlyZSIsImJpbmRpbmciLCJpc1R5cGVkQXJyYXkiLCJzaGFsbG93RGlmZmVycyIsIlB1cmVDb21wb25lbnQiLCJtZW1vIiwiY29tcGFyZXIiLCJ1cGRhdGVSZWYiLCJNZW1vZWQiLCJkaXNwbGF5TmFtZSIsImlzUmVhY3RDb21wb25lbnQiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIm9sZERpZmZIb29rIiwiX19mIiwiUkVBQ1RfRk9SV0FSRF9TWU1CT0wiLCJmb3IiLCJmb3J3YXJkUmVmIiwiRm9yd2FyZGVkIiwiY2xvbmUiLCIkJHR5cGVvZiIsIm9sZENhdGNoRXJyb3IiLCJ0aGVuIiwib2xkVW5tb3VudCIsImRldGFjaGVkQ2xvbmUiLCJkZXRhY2hlZFBhcmVudCIsInJlbW92ZU9yaWdpbmFsIiwib3JpZ2luYWxQYXJlbnQiLCJTdXNwZW5zZSIsIl9fdSIsIl9zdXNwZW5kZXJzIiwic3VzcGVuZGVkIiwiX19hIiwiU3VzcGVuc2VMaXN0IiwiX25leHQiLCJfbWFwIiwiX19SIiwicHJvbWlzZSIsInN1c3BlbmRpbmdWTm9kZSIsInN1c3BlbmRpbmdDb21wb25lbnQiLCJyZXNvbHZlIiwicmVzb2x2ZWQiLCJvblJlc29sdmVkIiwib25TdXNwZW5zaW9uQ29tcGxldGUiLCJzdXNwZW5kZWRWTm9kZSIsIndhc0h5ZHJhdGluZyIsImRldGFjaGVkQ29tcG9uZW50IiwiX19PIiwiZmFsbGJhY2siLCJsaXN0IiwicmV2ZWFsT3JkZXIiLCJkZWxlZ2F0ZWQiLCJ1bnN1c3BlbmQiLCJ3cmFwcGVkVW5zdXNwZW5kIiwicmV2ZXJzZSIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIkNBTUVMX1BST1BTIiwiSVNfRE9NIiwib25DaGFuZ2VJbnB1dFR5cGUiLCJvbGRFdmVudEhvb2siLCJlbXB0eSIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwiY2FuY2VsQnViYmxlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInBlcnNpc3QiLCJuYXRpdmVFdmVudCIsImNsYXNzTmFtZURlc2NyaXB0b3IiLCJjbGFzcyIsIm9sZFZOb2RlSG9vayIsIm5vbkN1c3RvbUVsZW1lbnQiLCJtdWx0aXBsZSIsInNlbGVjdGVkIiwiX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQiLCJpc09iamVjdCIsImFzeW5jVGFnIiwiZnVuY1RhZyIsImdlblRhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImNvcmVKc0RhdGEiLCJtYXNrU3JjS2V5IiwidWlkIiwiZXhlYyIsImtleXMiLCJJRV9QUk9UTyIsImlzTWFza2VkIiwiZnVuYyIsImZ1bmNQcm90byIsImZ1bmNUb1N0cmluZyIsInRvU291cmNlIiwicmVSZWdFeHBDaGFyIiwicmVJc0hvc3RDdG9yIiwicmVJc05hdGl2ZSIsIlJlZ0V4cCIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJvYmplY3QiLCJnZXROYXRpdmUiLCJuYXRpdmVDcmVhdGUiLCJoYXNoQ2xlYXIiLCJfX2RhdGFfXyIsImhhc2hEZWxldGUiLCJIQVNIX1VOREVGSU5FRCIsImhhc2hHZXQiLCJoYXNoSGFzIiwiaGFzaFNldCIsIkhhc2giLCJlbnRyeSIsImxpc3RDYWNoZUNsZWFyIiwiZXEiLCJvdGhlciIsImFzc29jSW5kZXhPZiIsImFycmF5IiwiYXJyYXlQcm90byIsImxpc3RDYWNoZURlbGV0ZSIsImxhc3RJbmRleCIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIkxpc3RDYWNoZSIsIm1hcENhY2hlQ2xlYXIiLCJpc0tleWFibGUiLCJnZXRNYXBEYXRhIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsIkZVTkNfRVJST1JfVEVYVCIsIm1lbW9pemUiLCJyZXNvbHZlciIsIm1lbW9pemVkIiwiYXBwbHkiLCJjYWNoZSIsIkNhY2hlIiwiZ2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHRQcmVtZW1vaXphdGlvbiIsImV4Y2x1c2l2aXR5S2V5IiwiU3dhcHBhYmxlQ29udGV4dCIsImdldEFuaW1hdGVPbk1vdW50IiwiR2V0RXhjbHVzaXZlVHJhbnNpdGlvbkNvbnRleHQiLCJDc3NDbGFzc0NvbnRleHQiLCJHZXRCYXNlQ2xhc3MiLCJHZXRFbnRlckNsYXNzIiwiR2V0RXhpdENsYXNzIiwiR2V0TWVhc3VyZUNsYXNzIiwiR2V0SW5pdENsYXNzIiwiR2V0VHJhbnNpdGlvbkNsYXNzIiwiR2V0RmluYWxpemVDbGFzcyIsInVzZUNzc0NsYXNzZXMiLCJHZXREaXJlY3Rpb25DbGFzcyIsImRpcmVjdGlvbiIsIkdldFBoYXNlQ2xhc3MiLCJwaGFzZSIsImZvcndhcmRFbGVtZW50UmVmIiwiRm9yd2FyZGVkQ29tcG9uZW50IiwidXNlTGFzdE5vbk51bGxWYWx1ZSIsImxhc3ROb25OdWxsVmFsdWUiLCJnbG9iYWxDb3VudCIsIkV4Y2x1c2l2ZVRyYW5zaXRpb25Qcm92aWRlciIsImdldE5leHRJbmRleEluTGluZSIsInNldE5leHRJbmRleEluTGluZSIsIm0iLCJzZXRFeGNsdXNpdmVseU9wZW4iLCJnZXRFeGNsdXNpdmVseU9wZW4iLCJvblZpc2liaWxpdHlDaGFuZ2UiLCJ2aXNpYmxlIiwibmV4dEluTGluZSIsImN1cnJlbnRJbkxpbmUiLCJmb3JjZUNsb3NlIiwiY29udGV4dDIiLCJleGNsdXNpdmVUcmFuc2l0aW9uQ29udGV4dCIsIkV4Y2x1c2l2ZVRyYW5zaXRpb25Db250ZXh0IiwiaCIsInVzZUV4Y2x1c2l2ZVRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uUGFyYW1ldGVycyIsInNob3ciLCJleGNsdXNpdmVUcmFuc2l0aW9uUGFyYW1ldGVycyIsImV4Y2x1c2l2ZWx5T3BlbiIsInBhcmVudE9uVmlzQ2hhbmdlIiwiZXhjbHVzaXZlVHJhbnNpdGlvblJldHVybiIsImlzRXhjbHVzaXZlIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJvdGhlclByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiY2hpbGRyZW5BbmltYXRlT25Nb3VudCIsImlubGluZUVsZW1lbnRzIiwidHJhbnNpdGlvblByb3BzIiwibWVyZ2VkV2l0aENoaWxkcmVuIiwiYW5pbWF0ZU9uTW91bnQiLCJnZXRUaW1lb3V0RHVyYXRpb24iLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0ciIsImVuZHNXaXRoIiwic3Vic3RyaW5nIiwicGFyc2VTdGF0ZSIsIm5leHRTdGF0ZSIsInVzZVRyYW5zaXRpb24iLCJwcm9wc0luY29taW5nIiwibWVhc3VyZSIsImV4aXRWaXNpYmlsaXR5IiwiZHVyYXRpb24iLCJkZWxheU1vdW50VW50aWxTaG93biIsImVhc2luZyIsImVhc2luZ0luIiwiZWFzaW5nT3V0IiwiZ2V0RXhpdFZpc2liaWxpdHkiLCJnZXRNZWFzdXJlIiwiZXhjbHVzaXZlVHJhbnNpdGlvblZpc2liaWxpdHlDaGFuZ2UiLCJpbnRlcm5hbE9uU2hvd0NoYW5nZWQiLCJjc3NQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lcyIsImhhbmRsZVRyYW5zaXRpb25GaW5pc2hlZCIsInRpbWVvdXRIYW5kbGUiLCJ0aW1lb3V0Q2xlYXJGdW5jdGlvbiIsIm9uVHJhbnNpdGlvbkVuZCIsImVsYXBzZWRUaW1lIiwiaGFzTW91bnRlZCIsInVwZGF0ZUNsYXNzZXMiLCJhbGxDbGFzc2VzVG9SZW1vdmUiLCJhbGxDbGFzc2VzVG9BZGQiLCJjbGFzc0xpc3QiLCJ1cGRhdGVTaXplUHJvcGVydHkiLCJ2YXJOYW1lIiwicmVtb3ZlUHJvcGVydHkiLCJtZWFzdXJlRWxlbWVudEFuZFVwZGF0ZVByb3BlcnRpZXMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJvblN0YXRlQ2hhbmdlIiwicHJldlN0YXRlIiwibmV4dERpcmVjdGlvbiIsIm5leHRQaGFzZSIsImlzQmVpbmdQYWludGVkIiwiZm9yY2VSZWZsb3ciLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudFBoYXNlIiwiZGVmaW5pdGVseVNob3VsZE1vdW50Q2hpbGRyZW4iLCJoYXNSZW5kZXJlZENoaWxkcmVuIiwicmVuZGVyQ2hpbGRyZW4iLCJjaGlsZHJlbklzVm5vZGUiLCJmaW5hbFByb3BzIiwicmVzZXRDb250ZXh0IiwibW9kaWZpZWRDaGlsZHJlbiIsImdsb2JhbFRoaXMiLCJfZHVtbXkiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwidXNlQmFzZVByb3BzRmFkZSIsImZhZGVQYXJhbWV0ZXJzIiwiZmFkZU1pbiIsImZhZGVNYXgiLCJGYWRlIiwidXNlQmFzZVByb3BzQ2xpcCIsImNsaXBQYXJhbWV0ZXJzIiwiY2xpcE1pbiIsImNsaXBNaW5CbG9jayIsImNsaXBNaW5JbmxpbmUiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE9yaWdpbklubGluZSIsIkNsaXAiLCJDbGlwRmFkZSIsInVzZUJhc2VQcm9wc0NvbGxhcHNlIiwiY29sbGFwc2VQYXJhbWV0ZXJzIiwibWluQmxvY2tTaXplIiwiQ29sbGFwc2UiLCJDb2xsYXBzZUZhZGUiLCJ1c2VCYXNlUHJvcHNGbGlwIiwiZmxpcFBhcmFtZXRlcnMiLCJmbGlwQW5nbGVCbG9jayIsImZsaXBBbmdsZUlubGluZSIsImZsaXBQZXJzcGVjdGl2ZSIsIkZsaXAiLCJ1c2VCYXNlUHJvcHNTbGlkZSIsInNsaWRlUGFyYW1ldGVycyIsInNsaWRlVGFyZ2V0SW5saW5lIiwic2xpZGVUYXJnZXRCbG9jayIsIlNsaWRlIiwiU2xpZGVGYWRlIiwidXNlQmFzZVByb3BzWm9vbSIsInpvb21QYXJhbWV0ZXJzIiwiem9vbU9yaWdpbiIsInpvb21PcmlnaW5JbmxpbmUiLCJ6b29tT3JpZ2luQmxvY2siLCJ6b29tTWluIiwiem9vbU1pbklubGluZSIsInpvb21NaW5CbG9jayIsIlpvb20iLCJTbGlkZVpvb20iLCJTbGlkZVpvb21GYWRlIiwiWm9vbUZhZGUiLCJoYWxmVGV4dCIsImlucHV0IiwidGltZXMiLCJzdWJzdHIiLCJEZW1vIiwiZXhjbHVzaXZlIiwic2V0RXhjbHVzaXZlIiwic2V0QW5pbWF0ZU9uTW91bnQiLCJ3cml0aW5nTW9kZSIsInNldFdyaXRpbmdNb2RlIiwic2hvdzEiLCJzZXRTaG93MSIsInNob3czIiwic2V0U2hvdzMiLCJyZWZsb3ciLCJzZXRSZWZsb3ciLCJzZXREdXJhdGlvbiIsInRleHQiLCJzZXRUZXh0IiwiZmxpY2tlciIsInNldEZsaWNrZXIiLCJvbklucHV0MyIsInByZXZlbnREZWZhdWx0Iiwib25JbnB1dDQiLCJvbklucHV0NSIsIm9uSW5wdXQ1YiIsIm9uSW5wdXQ2Iiwib25JbnB1dDciLCJvbklucHV0OCIsInZhbHVlQXNOdW1iZXIiLCJvbklucHV0OSIsIm9uSW5wdXRBIiwib25JbnB1dEIiLCJvbklucHV0QyIsIm9uQ2xpY2siLCJvbklucHV0IiwiZGlzYWJsZWQiLCJjb2xzIiwicm93cyIsIkZhZGVEZW1vIiwiY2FyZFNob3ciLCJjb250ZW50SW5kZXgiLCJTbGlkZURlbW8iLCJab29tRGVtbyIsIkNsaXBEZW1vIiwiRmxpcERlbW8iLCJab29tU2xpZGVEZW1vIiwiQ29sbGFwc2VEZW1vIiwibWluIiwic2V0TWluIiwic2V0TWF4Iiwib25NaW5JbnB1dCIsIm9uTWF4SW5wdXQiLCJDIiwiQ1MiLCJFIiwibWFrZUNoaWxkIiwic3RlcCIsIm9yaWdpblgiLCJzZXRPcmlnaW5YIiwib3JpZ2luWSIsInNldE9yaWdpblkiLCJtaW5YIiwic2V0TWluWCIsIm1pblkiLCJzZXRNaW5ZIiwid2l0aEZhZGUiLCJzZXRXaXRoRmFkZSIsIm9uT3JpZ2luWElucHV0Iiwib25PcmlnaW5ZSW5wdXQiLCJvbk1pblhJbnB1dCIsIm9uTWluWUlucHV0Iiwib25XaXRoRmFkZUlucHV0Iiwic2xpZGVYIiwic2V0U2xpZGVYIiwic2xpZGVZIiwic2V0U2xpZGVZIiwib25TbGlkZVhJbnB1dCIsIm9uU2xpZGVZSW5wdXQiLCJzaWduIiwic2V0TWluQmxvY2tTaXplIiwib25NaW5TaXplIiwiZmxpcFgiLCJzZXRGbGlwWCIsImZsaXBZIiwic2V0RmxpcFkiLCJvbkZsaXBYSW5wdXQiLCJvbkZsaXBZSW5wdXQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7O0VBMEJhQSxJQUFBQSxDQUFBQTtJQ2ZQQyxHQ1JGQztJQUFBQSxHQUFBQTtJQ3lLQUMsR0FBQUE7SUFXQUM7SUNyTE9DLEdDRkVDO0lBQUFBLEdBQUFBLEdBQVksRUFBbEI7SUFDTUMsR0FBWSxHQUFBLEVBQUE7SUFDWkMsR0FBcUIsR0FBQSxtRUFBQTtFTE9sQkMsU0FBQUEsR0FBT0MsQ0FBQUEsQ0FBQUEsRUFBS0MsQ0FFM0IsRUFBQTtJQUFBLEtBQUssSUFBSU4sQ0FBQUEsSUFBS00sQ0FBT0QsRUFBQUEsQ0FBQUEsQ0FBSUwsS0FBS00sQ0FBTU4sQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFDcEMsT0FBNkJLLENBQzdCO0VBQUE7RUFRTSxTQUFTRSxHQUFBQSxDQUFXQyxDQUMxQixFQUFBO0lBQUEsSUFBSUMsSUFBYUQsQ0FBS0MsQ0FBQUEsVUFBQUE7SUFDbEJBLENBQVlBLElBQUFBLENBQUFBLENBQVdD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
