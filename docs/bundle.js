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
  function k$1(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }
      }
      return k$1(n);
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
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = s$1({}, t)).__v = t.__v + 1, j$2(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? _$1(t) : o, t.__h), z$2(u, t), t.__e != o && k$1(t)));
      });
    }
  }
  function w$1(n, l, u, i, t, o, r, c, s, a) {
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
        j$2(n, k, d = d || f$1, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m$1(k, s, n) : s = A(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _$1(d));
      }
    }
    for (u.__e = g, h = C; h--;) {
      null != x[h] && N$1(x[h], x[h]);
    }
    if (w) for (h = 0; h < w.length; h++) {
      M$2(w[h], w[++h], w[++h]);
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
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) {
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
  function j$2(n, u, i, t, o, r, f, e, c) {
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
        if (g = u.props, m = (a = T.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in T && T.prototype.render ? u.__c = h = new T(g, x) : (u.__c = h = new d$1(g, x), h.constructor = T, h.render = O$1), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = [], h._sb = []), null == h.__s && (h.__s = h.state), null != T.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s$1({}, h.__s)), s$1(h.__s, T.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == T.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
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
        h.state = h.__s, null != h.getChildContext && (t = s$1(s$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), I = null != a && a.type === p$1 && null == a.key ? a.props.children : a, w$1(n, Array.isArray(I) ? I : [I], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
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
      if (C$1(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$1(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$1(i, 0), c), null != r) for (k = r.length; k--;) {
        null != r[k] && a$1(r[k]);
      }
      c || ("value" in p && void 0 !== (k = p.value) && (k !== l.value || "progress" === d && !k || "option" === d && k !== y.value) && H$1(l, "value", k, y.value, !1), "checked" in p && void 0 !== (k = p.checked) && k !== l.checked && H$1(l, "checked", k, y.checked, !1));
    }
    return l;
  }
  function M$2(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }
  function N$1(n, u, i) {
    var t, o;
    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$2(t, null, u)), null != (t = n.__c)) {
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
  function O$1(n, l, u) {
    return this.constructor(n, u);
  }
  function P(u, i, t) {
    var o, r, e;
    l$1.__ && l$1.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, e = [], j$2(i, u = (!o && t || i).__k = h$1(p$1, null, [u]), r || f$1, f$1, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, e, !o && t ? t : r ? r.__e : i.firstChild, o), z$2(e, u);
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
    return o = 5, F(function () {
      return {
        current: n
      };
    }, []);
  }
  function F(n, r) {
    var u = d(t++, 7);
    return z$1(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
  }
  function T$1(n, t) {
    return o = 8, F(function () {
      return n;
    }, t);
  }
  function b() {
    for (var t; t = f.shift();) {
      if (t.__P && t.__H) try {
        t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
      } catch (r) {
        t.__H.__h = [], l$1.__e(r, t.__v);
      }
    }
  }
  l$1.__b = function (n) {
    "function" != typeof n.type || n.__m || null === n.__ ? n.__m || (n.__m = n.__ && n.__.__m ? n.__.__m : "") : n.__m = (n.__ && n.__.__m ? n.__.__m : "") + (n.__ && n.__.__k ? n.__.__k.indexOf(n) : 0), r$1 = null, e && e(n);
  }, l$1.__r = function (n) {
    a && a(n), t = 0;
    var i = (r$1 = n.__c).__H;
    i && (u === r$1 ? (i.__h = [], r$1.__h = [], i.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
    })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r$1;
  }, l$1.diffed = function (t) {
    v && v(t);
    var o = t.__c;
    o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o.__H.__.forEach(function (n) {
      n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
    })), u = r$1 = null;
  }, l$1.__c = function (t, r) {
    r.some(function (t) {
      try {
        t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
          return !n.__ || w(n);
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
        k(n);
      } catch (n) {
        r = n;
      }
    }), u.__H = void 0, r && l$1.__e(r, u.__v));
  };
  var g$1 = "function" == typeof requestAnimationFrame;
  function j$1(n) {
    var t,
      r = function () {
        clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
      },
      u = setTimeout(r, 100);
    g$1 && (t = requestAnimationFrame(r));
  }
  function k(n) {
    var t = r$1,
      u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), r$1 = t;
  }
  function w(n) {
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
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
  function E(n) {
    this.props = n;
  }
  (E.prototype = new d$1()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var R = l$1.__b;
  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
  };
  var x = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function N(n) {
    function t(t) {
      var e = g({}, t);
      return delete e.ref, n(e, t.ref || null);
    }
    return t.$$typeof = x, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
  }
  var O = l$1.__e;
  l$1.__e = function (n, t, e, r) {
    if (n.then) for (var u, o = t; o = o.__;) {
      if ((u = o.__c) && u.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
    }
    O(n, t, e, r);
  };
  var T = l$1.unmount;
  function I(n, t, e) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function (n) {
      "function" == typeof n.__c && n.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function (n) {
      return I(n, t, e);
    })), n;
  }
  function L(n, t, e) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function (n) {
      return L(n, t, e);
    }), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
  }
  function U() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function D(n) {
    var t = n.__.__c;
    return t && t.__a && t.__a(n);
  }
  function M$1() {
    this.u = null, this.o = null;
  }
  l$1.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), T && T(n);
  }, (U.prototype = new d$1()).__c = function (n, t) {
    var e = t.__c,
      r = this;
    null == r.t && (r.t = []), r.t.push(e);
    var u = D(r.__v),
      o = !1,
      i = function () {
        o || (o = !0, e.__R = null, u ? u(l) : l());
      };
    e.__R = i;
    var l = function () {
        if (! --r.__u) {
          if (r.state.__a) {
            var n = r.state.__a;
            r.__v.__k[0] = L(n, n.__c.__P, n.__c.__O);
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
  }, U.prototype.componentWillUnmount = function () {
    this.t = [];
  }, U.prototype.render = function (n, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var r = document.createElement("div"),
          o = this.__v.__k[0].__c;
        this.__v.__k[0] = I(this.__b, r, o.__O = o.__P);
      }
      this.__b = null;
    }
    var i = e.__a && h$1(p$1, null, n.fallback);
    return i && (i.__h = null), [h$1(p$1, null, e.__a ? null : n.children), i];
  };
  var V = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) {
        e.pop()();
      }
      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };
  (M$1.prototype = new d$1()).__a = function (n) {
    var t = this,
      e = D(t.__v),
      r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), V(t, n, r)) : u();
      };
      e ? e(o) : o();
    };
  }, M$1.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = x$1(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
    for (var e = t.length; e--;) {
      this.o.set(t[e], this.u = [1, 0, this.u]);
    }
    return n.children;
  }, M$1.prototype.componentDidUpdate = M$1.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      V(n, e, t);
    });
  };
  var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    z = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    B = "undefined" != typeof document,
    H = function (n) {
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
  var q = l$1.event;
  function G() {}
  function J() {
    return this.cancelBubble;
  }
  function K() {
    return this.defaultPrevented;
  }
  l$1.event = function (n) {
    return q && (n = q(n)), n.persist = G, n.isPropagationStopped = J, n.isDefaultPrevented = K, n.nativeEvent = n;
  };
  var X = {
      configurable: !0,
      get: function () {
        return this.class;
      }
    },
    nn = l$1.vnode;
  l$1.vnode = function (n) {
    var t = n.type,
      e = n.props,
      u = e;
    if ("string" == typeof t) {
      var o = -1 === t.indexOf("-");
      for (var i in u = {}, e) {
        var l = e[i];
        B && "children" === i && "noscript" === t || "value" === i && "defaultValue" in e && null == l || ("defaultValue" === i && "value" in e && null == e.value ? i = "value" : "download" === i && !0 === l ? l = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + t) && !H(e.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : o && z.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === l && (l = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), u[i] && (i = "oninputCapture")), u[i] = l);
      }
      "select" == t && u.multiple && Array.isArray(u.value) && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = -1 != u.value.indexOf(n.props.value);
      })), "select" == t && null != u.defaultValue && (u.value = x$1(e.children).forEach(function (n) {
        n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
      })), n.props = u, e.class != e.className && (X.enumerable = "className" in e, null != e.className && (u.class = e.className), Object.defineProperty(u, "className", X));
    }
    n.$$typeof = j, nn && nn(n);
  };
  var tn = l$1.__r;
  l$1.__r = function (n) {
    tn && tn(n), n.__c;
  };

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   */
  function forwardElementRef(Component) {
    var ForwardedComponent = N(Component);
    return ForwardedComponent;
  }

  function useMergedChildren(_ref, _ref2) {
    var {
      children: lhs
    } = _ref;
    var {
      children: rhs
    } = _ref2;
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
  function useMergedClasses(_ref, _ref2) {
    var {
      class: lhsClass,
      className: lhsClassName
    } = _ref;
    var {
      class: rhsClass,
      className: rhsClassName
    } = _ref2;
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
  function useMergedRefs(_ref, _ref2) {
    var {
      ref: rhs
    } = _ref;
    var {
      ref: lhs
    } = _ref2;
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
    var _lhs$style, _rhs$style2;
    // Easy case, when there are no styles to merge return nothing.
    if (!(lhs !== null && lhs !== void 0 && lhs.style) && !(rhs !== null && rhs !== void 0 && rhs.style)) return undefined;
    if (typeof lhs != typeof rhs) {
      // Easy cases, when one is null and the other isn't.
      if (lhs !== null && lhs !== void 0 && lhs.style && !(rhs !== null && rhs !== void 0 && rhs.style)) return lhs.style;
      if (!(lhs !== null && lhs !== void 0 && lhs.style) && rhs !== null && rhs !== void 0 && rhs.style) return rhs.style;
      // They're both non-null but different types.
      // Convert the string type to an object bag type and run it again.
      if (lhs !== null && lhs !== void 0 && lhs.style && rhs !== null && rhs !== void 0 && rhs.style) {
        // (useMergedStyles isn't a true hook -- this isn't a violation)
        if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") return useMergedStyles({
          style: styleStringToObject(lhs === null || lhs === void 0 ? void 0 : lhs.style)
        }, rhs);
        if (typeof (rhs === null || rhs === void 0 ? void 0 : rhs.style) == "string") return useMergedStyles(lhs, {
          style: styleStringToObject(rhs === null || rhs === void 0 ? void 0 : rhs.style)
        });
      }
      // Logic???
      return undefined;
    }
    // They're both strings, just concatenate them.
    if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") {
      var _rhs$style;
      return "".concat(lhs.style, ";").concat((_rhs$style = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style !== void 0 ? _rhs$style : "");
    }
    // They're both objects, just merge them.
    return _objectSpread2(_objectSpread2({}, (_lhs$style = lhs === null || lhs === void 0 ? void 0 : lhs.style) !== null && _lhs$style !== void 0 ? _lhs$style : {}), (_rhs$style2 = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style2 !== void 0 ? _rhs$style2 : {});
  }

  var _excluded$e = ["children", "class", "className", "style", "ref"],
    _excluded2 = ["children", "class", "className", "style", "ref"];
  var log = console.warn;
  /**
   * Given two sets of props, merges them and returns the result.
   *
   * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
   * @param lhs2
   * @param rhs2
   * @returns
   */
  function useMergedProps(lhsAll, rhsAll) {
    // First, separate the props we were given into two groups:
    // lhsAll and rhsAll contain all the props we were given, and
    // lhsMisc and rhsMisc contain all props *except* for the easy ones
    // like className and style that we already know how to merge.
    var lhsMisc = _objectWithoutProperties(lhsAll, _excluded$e);
    var rhsMisc = _objectWithoutProperties(rhsAll, _excluded2);
    var ret = _objectSpread2(_objectSpread2({}, lhsMisc), {}, {
      ref: useMergedRefs(lhsAll, rhsAll),
      style: useMergedStyles(lhsAll, rhsAll),
      className: useMergedClasses(lhsAll, rhsAll),
      children: useMergedChildren(lhsAll, rhsAll)
    });
    if (ret.ref === undefined) delete ret.ref;
    if (ret.style === undefined) delete ret.style;
    if (ret.className === undefined) delete ret.className;
    if (ret.children === undefined) delete ret.children;
    // Now, do *everything* else
    // Merge every remaining existing entry in lhs with what we've already put in ret.
    //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];
    var rhsEntries = Object.entries(rhsMisc);
    for (var [rhsKeyU, rhsValue] of rhsEntries) {
      var rhsKey = rhsKeyU;
      var lhsValue = lhsMisc[rhsKey];
      if (typeof lhsValue === "function" || typeof rhsValue === "function") {
        // They're both functions that can be merged (or one's a function and the other's null).
        // Not an *easy* case, but a well-defined one.
        var merged = mergeFunctions(lhsValue, rhsValue);
        ret[rhsKey] = merged;
      } else {
        // Uh...we're here because one of them's null, right?
        if (lhsValue == null && rhsValue == null) {
          if (rhsValue === null && lhsValue === undefined) ret[rhsKey] = rhsValue;else ret[rhsKey] = lhsValue;
        }
        if (lhsValue == null) ret[rhsKey] = rhsValue;else if (rhsValue == null) ret[rhsKey] = lhsValue;else if (rhsValue == lhsValue) ; else {
          var _log;
          // Ugh.
          // No good strategies here, just log it if requested
          (_log = log) === null || _log === void 0 ? void 0 : _log("The prop \"".concat(rhsKey, "\" cannot simultaneously be the values ").concat(lhsValue, " and ").concat(rhsValue, ". One must be chosen outside of useMergedProps."));
          ret[rhsKey] = rhsValue;
        }
      }
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
    useHelper(values.length, 0);
    values.forEach(useHelper);
    return;
    function useHelper(value, index) {
      // Make sure that the provided functions are perfectly stable across renders
      var helperToEnsureStability = _(value);
      var shownError = _(false);
      if (helperToEnsureStability.current != value) {
        if (!shownError.current) {
          /* eslint-disable no-debugger */
          debugger;
          console.error("The hook ".concat(parentHookName, " requires some or all of its arguments remain stable across each render; please check the ").concat(index, "-indexed argument."));
          shownError.current = true;
        }
      }
    }
  }
  function debounceRendering(f) {
    var _options$debounceRend;
    ((_options$debounceRend = l$1.debounceRendering) !== null && _options$debounceRend !== void 0 ? _options$debounceRend : setTimeout)(f);
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
    var valueRef = _(Unset);
    var warningRef = _(false);
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
      if (valueRef.current === Unset && getInitialValue != undefined) {
        try {
          var _onChange;
          var initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
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
      if (valueRef.current === Unset) tryEnsureValue();
      return valueRef.current === Unset ? undefined : valueRef.current;
    }, []);
    s(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []);
    // The actual code the user calls to (possibly) run a new effect.
    var r = _({
      prevDep: Unset
    });
    var setValue = T$1(arg => {
      // Regardless of anything else, figure out what our next value is about to be.
      var nextValue = arg instanceof Function ? arg(valueRef.current === Unset ? undefined : valueRef.current) : arg;
      if (r.current.prevDep === Unset && nextValue !== valueRef.current) {
        // This is the first request to change this value.
        // Evaluate the request immediately, then queue up the onChange function
        // Save our current value so that we can compare against it later
        // (if we flip back to this state, then we won't send the onChange function)
        r.current.prevDep = valueRef.current;
        // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately
        valueRef.current = nextValue;
        // Schedule the actual check and invocation of onChange later to let effects settle
        (customDebounceRendering !== null && customDebounceRendering !== void 0 ? customDebounceRendering : debounceRendering)(() => {
          var nextDep = valueRef.current;
          var prevDep = r.current.prevDep;
          if (r.current.prevDep != valueRef.current) {
            warningRef.current = true;
            try {
              var _onChange2;
              // Call any registered cleanup function
              onShouldCleanUp();
              cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(nextDep, prevDep === Unset ? undefined : prevDep)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
              valueRef.current = nextDep;
            } finally {
              // Allow the user to normally call getValue again
              warningRef.current = false;
            }
          }
          // We've finished with everything, so mark us as being on a clean slate again.
          r.current.prevDep = Unset;
        });
      }
      // Update the value immediately.
      // This will be checked against prevDep to see if we should actually call onChange
      valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
  }
  var Unset = Symbol();
  function returnNull() {
    return null;
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
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(...args);
  };
  l$1[commitName] = newCommit;
  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }

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

  function getDocument(element) {
    var _ref, _ref2, _element$ownerDocumen;
    return (_ref = (_ref2 = (_element$ownerDocumen = element === null || element === void 0 ? void 0 : element.ownerDocument) !== null && _element$ownerDocumen !== void 0 ? _element$ownerDocumen : document) !== null && _ref2 !== void 0 ? _ref2 : window.document) !== null && _ref !== void 0 ? _ref : globalThis.document;
  }

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
    } = args !== null && args !== void 0 ? args : {};
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
    var refElementProps = {
      ref: setElement
    };
    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    return {
      refElementProps,
      getElement
    };
  }
  function runImmediately(f) {
    f();
  }

  function useElementSize(_ref) {
    var {
      getObserveBox,
      onSizeChange
    } = _ref;
    useEnsureStability("useElementSize", getObserveBox, onSizeChange);
    var [getSize, setSize] = usePassiveState(onSizeChange, returnNull);
    var currentObserveBox = _(undefined);
    var needANewObserver = T$1((element, observeBox) => {
      if (element) {
        var document = getDocument(element);
        var window = document.defaultView;
        var handleUpdate = () => {
          if (element.isConnected) {
            var {
              clientWidth,
              scrollWidth,
              offsetWidth,
              clientHeight,
              scrollHeight,
              offsetHeight,
              clientLeft,
              scrollLeft,
              offsetLeft,
              clientTop,
              scrollTop,
              offsetTop
            } = element;
            setSize({
              clientWidth,
              scrollWidth,
              offsetWidth,
              clientHeight,
              scrollHeight,
              offsetHeight,
              clientLeft,
              scrollLeft,
              offsetLeft,
              clientTop,
              scrollTop,
              offsetTop
            });
          }
        };
        if (window && "ResizeObserver" in window) {
          var observer = new ResizeObserver(_entries => {
            handleUpdate();
          });
          observer.observe(element, {
            box: observeBox
          });
          return () => observer.disconnect();
        } else {
          document.addEventListener("resize", handleUpdate, {
            passive: true
          });
          return () => document.removeEventListener("resize", handleUpdate);
        }
      }
    }, []);
    var {
      getElement,
      refElementProps
    } = useRefElement({
      onElementChange: T$1(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
    });
    h(() => {
      if (getObserveBox) {
        if (currentObserveBox.current !== getObserveBox()) needANewObserver(getElement(), getObserveBox());
      }
    });
    return {
      getElement,
      getSize,
      useElementSizeProps: refElementProps
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  (function (module, exports) {
    (function (global, factory) {
      factory() ;
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
          for (var j = 0; j < children.length; j++) {
            var sibling = children[j];
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
          for (var i = 0; i < mutation.removedNodes.length; i++) {
            var sibling = mutation.removedNodes[i];
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
          for (var _i = 0; _i < mutation.addedNodes.length; _i++) {
            var _sibling = mutation.addedNodes[_i];
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

  function capitalize(str) {
    return str[0].toUpperCase() + str.substring(1);
  }
  /**
   * Inspects the element's style and determines the logical direction that text flows.
   *
   * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
   * But `transform`, `clip`, etc. don't.
   *
   * This is provided so that CSS properties can consistently use those logical properties.
   *
   * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
   *
   * @returns An object containing the following functions:
   * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
   * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
   * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
   * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
   */
  function useLogicalDirection(_ref) {
    var {
      onLogicalDirectionChange
    } = _ref;
    useEnsureStability("useLogicalDirection", onLogicalDirectionChange);
    var [getComputedStyles, setComputedStyles] = usePassiveState(null, returnNull);
    var {
      getElement,
      refElementProps
    } = useRefElement({
      onElementChange: T$1(element => {
        if (element) {
          setComputedStyles(window.getComputedStyle(element));
        }
      }, [])
    });
    // TODO: There's no way to refresh which writing mode we have once mounted.
    //   A. There's no way to watch for CSS style changes
    //   B. Calling getComputedStyle after every render for every element gets expensive fast and
    //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
    //      (Those that do will need to mount and unmount the component that uses it)
    //
    // As a solution, here's a cheap workaround that checks when the element's size has changed,
    // and if so, tests if the writing mode has changed too.
    //
    // This will work for at least some number of cases, but a better solution is still needed.
    var {
      useElementSizeProps
    } = useElementSize({
      onSizeChange: T$1(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
    });
    var getLogicalDirectionInfo = T$1(() => {
      var computedStyles = getComputedStyles();
      if (computedStyles) {
        var w = computedStyles.writingMode;
        var d = computedStyles.direction;
        var t = computedStyles.textOrientation;
        if (t == "upright") d = "ltr";
        return _objectSpread2({}, WritingModes[w || "horizontal-tb"][d || "ltr"]);
      }
      return null;
    }, []);
    //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);
    var convertToLogicalOrientation = T$1((elementOrientation, direction) => {
      var _direction, _direction2;
      (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
      if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, []);
    var convertToPhysicalSide = T$1((side, direction) => {
      var _direction3, _direction$blockDirec, _direction4, _direction$blockDirec2, _direction5, _direction$inlineDire, _direction6, _direction$inlineDire2, _direction7;
      (_direction3 = direction) !== null && _direction3 !== void 0 ? _direction3 : direction = getLogicalDirectionInfo();
      switch (side) {
        case "block-start":
          return M[((_direction$blockDirec = (_direction4 = direction) === null || _direction4 === void 0 ? void 0 : _direction4.blockDirection) !== null && _direction$blockDirec !== void 0 ? _direction$blockDirec : "ttb")[0]];
        case "block-end":
          return M[((_direction$blockDirec2 = (_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.blockDirection) !== null && _direction$blockDirec2 !== void 0 ? _direction$blockDirec2 : "ttb")[2]];
        case "inline-start":
          return M[((_direction$inlineDire = (_direction6 = direction) === null || _direction6 === void 0 ? void 0 : _direction6.inlineDirection) !== null && _direction$inlineDire !== void 0 ? _direction$inlineDire : "ltr")[0]];
        case "inline-end":
          return M[((_direction$inlineDire2 = (_direction7 = direction) === null || _direction7 === void 0 ? void 0 : _direction7.inlineDirection) !== null && _direction$inlineDire2 !== void 0 ? _direction$inlineDire2 : "ltr")[2]];
      }
    }, []);
    var convertToLogicalSide = T$1((side, direction) => {
      var _direction8, _direction9, _direction10;
      (_direction8 = direction) !== null && _direction8 !== void 0 ? _direction8 : direction = getLogicalDirectionInfo();
      if (((_direction9 = direction) === null || _direction9 === void 0 ? void 0 : _direction9.inlineOrientation) === "vertical") {
        switch (side) {
          case "top":
            return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";
          case "bottom":
            return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";
          case "left":
            return direction.blockDirection === "ltr" ? "block-start" : "block-end";
          case "right":
            return direction.blockDirection === "rtl" ? "block-start" : "block-end";
        }
      } else if (((_direction10 = direction) === null || _direction10 === void 0 ? void 0 : _direction10.inlineOrientation) === "horizontal") {
        switch (side) {
          case "top":
            return direction.blockDirection === "ttb" ? "block-start" : "block-end";
          case "bottom":
            return direction.blockDirection === "btt" ? "block-start" : "block-end";
          case "left":
            return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";
          case "right":
            return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
        }
      }
      /* eslint-disable no-debugger */
      debugger;
      console.assert(false);
      return "inline-start";
    }, []);
    var convertToPhysicalOrientation = T$1((elementOrientation, direction) => {
      var _direction11;
      (_direction11 = direction) !== null && _direction11 !== void 0 ? _direction11 : direction = getLogicalDirectionInfo();
      if (elementOrientation == "inline") {
        var _direction12;
        if (((_direction12 = direction) === null || _direction12 === void 0 ? void 0 : _direction12.inlineOrientation) == "horizontal") return "horizontal";
        return "vertical";
      } else {
        var _direction13;
        if (((_direction13 = direction) === null || _direction13 === void 0 ? void 0 : _direction13.blockOrientation) == "vertical") return "vertical";
        return "horizontal";
      }
    }, []);
    var convertElementSize = T$1((elementSize, direction) => {
      var _direction14;
      (_direction14 = direction) !== null && _direction14 !== void 0 ? _direction14 : direction = getLogicalDirectionInfo();
      if (direction) {
        var {
          inlineSize,
          blockSize,
          inlineDirection,
          blockDirection
        } = direction;
        // Size is relatively simple
        var clientInlineSize = elementSize["client".concat(capitalize(inlineSize))];
        var clientBlockSize = elementSize["client".concat(capitalize(blockSize))];
        var offsetInlineSize = elementSize["offset".concat(capitalize(inlineSize))];
        var offsetBlockSize = elementSize["offset".concat(capitalize(blockSize))];
        var scrollInlineSize = elementSize["scroll".concat(capitalize(inlineSize))];
        var scrollBlockSize = elementSize["scroll".concat(capitalize(blockSize))];
        var f1 = getPhysicalLeftTop(inlineDirection);
        var f2 = getPhysicalRightBottom(inlineDirection);
        var f3 = getPhysicalLeftTop(blockDirection);
        var f4 = getPhysicalRightBottom(blockDirection);
        var clientInlineInset = elementSize["client".concat(capitalize(f1))] + (!f2 ? 0 : elementSize["client".concat(capitalize(f2))]);
        var scrollInlineInset = elementSize["scroll".concat(capitalize(f1))] + (!f2 ? 0 : elementSize["scroll".concat(capitalize(f2))]);
        var offsetInlineInset = elementSize["offset".concat(capitalize(f1))] == undefined ? undefined : elementSize["offset".concat(capitalize(f1))] + (!f2 ? 0 : elementSize["offset".concat(capitalize(f2))]);
        var clientBlockInset = elementSize["client".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["client".concat(capitalize(f4))]);
        var scrollBlockInset = elementSize["scroll".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["scroll".concat(capitalize(f4))]);
        var offsetBlockInset = elementSize["offset".concat(capitalize(f3))] == undefined ? undefined : elementSize["offset".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["offset".concat(capitalize(f4))]);
        return {
          clientInlineSize,
          scrollInlineSize,
          offsetInlineSize,
          clientBlockSize,
          scrollBlockSize,
          offsetBlockSize,
          clientInlineInset,
          scrollInlineInset,
          offsetInlineInset,
          clientBlockInset,
          scrollBlockInset,
          offsetBlockInset
        };
      }
      return null;
    }, []);
    return {
      useLogicalDirectionProps: props => useMergedProps(useMergedProps(refElementProps, useElementSizeProps), props),
      getElement,
      getLogicalDirectionInfo,
      convertToLogicalSize: convertElementSize,
      convertToLogicalOrientation,
      convertToPhysicalOrientation,
      convertToLogicalSide,
      convertToPhysicalSide
    };
  }
  // Position requires us to sometimes use one property (like `left`)
  // or sometimes two (like `left` + `width`)
  function getPhysicalLeftTop(dir) {
    if (dir === "ltr" || dir == "rtl") return "left";
    return "top";
  }
  function getPhysicalRightBottom(dir) {
    if (dir === "rtl") return "width";
    if (dir === "btt") return "height";
    return null;
  }
  // Helper for extracting info from "ltr", "ttb", etc.
  var M = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
  };
  var HorizontalTbLtr = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
  };
  var HorizontalTbRtl = _objectSpread2(_objectSpread2({}, HorizontalTbLtr), {}, {
    inlineDirection: "rtl"
  });
  var VerticalRlLtr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
  };
  var VerticalRlRtl = _objectSpread2(_objectSpread2({}, VerticalRlLtr), {}, {
    inlineDirection: "btt"
  });
  var SidewaysRlLtr = _objectSpread2({}, VerticalRlLtr);
  var SidewaysRlRtl = _objectSpread2({}, VerticalRlRtl);
  var VerticalLrLtr = _objectSpread2(_objectSpread2({}, VerticalRlLtr), {}, {
    blockDirection: "ltr"
  });
  var VerticalLrRtl = _objectSpread2(_objectSpread2({}, VerticalRlRtl), {}, {
    blockDirection: "ltr"
  });
  var SidewaysLtLtr = _objectSpread2(_objectSpread2({}, VerticalLrLtr), {}, {
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
  });
  var SidewaysLtRtl = _objectSpread2(_objectSpread2({}, SidewaysLtLtr), {}, {
    inlineDirection: "ttb"
  });
  var HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
  };
  var VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
  };
  var VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
  };
  var SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
  };
  var SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
  };
  var WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
  };

  var _excluded$d = ["children", "duration", "classBase", "measure", "exitVisibility", "show", "onTransitionUpdate", "animateOnMount", "childMountBehavior"];
  function getClassName(classBase, show, phase) {
    if (phase) return "".concat(classBase || "transition", "-").concat(show, "-").concat(phase);else return "".concat(classBase || "transition", "-").concat(show);
  }
  function forceReflow(e) {
    // Try really hard to make sure this isn't optimized out by anything.
    // We need it for its document reflow side effect.
    e.getBoundingClientRect();
    return e;
  }
  /**
   * A hook that adds & removes class names in a way that facilitates proper transitions.
   *
   * The first argument contains the props related directly to the transition.
   *
   * The second argument contains any other props you might want merged into the final product (these are not read or manipulated or anything -- it's purely shorthand and can be omitted with `{}` and then your own `useMergedProps`).
   */
  function useTransitionable(_ref) {
    var _classBase;
    var {
      measure,
      animateOnMount,
      classBase,
      onTransitionUpdate,
      exitVisibility,
      duration,
      show,
      ref
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    var {
      getElement,
      refElementProps
    } = useRefElement({});
    var [phase, setPhase] = p(animateOnMount ? "init" : null);
    var [direction, setDirection] = p(show == null ? null : show ? "enter" : "exit");
    var [surfaceWidth, setSurfaceWidth] = p(null);
    var [surfaceHeight, setSurfaceHeight] = p(null);
    var [surfaceX, setSurfaceX] = p(null);
    var [surfaceY, setSurfaceY] = p(null);
    var [transitioningWidth, setTransitioningWidth] = p(null);
    var [transitioningHeight, setTransitioningHeight] = p(null);
    var [transitioningX, setTransitioningX] = p(null);
    var [transitioningY, setTransitioningY] = p(null);
    var [logicalDirectionInfo, setLogicalDirectionInfo] = p(null);
    var {
      getLogicalDirectionInfo,
      useLogicalDirectionProps
    } = useLogicalDirection({
      onLogicalDirectionChange: setLogicalDirectionInfo
    });
    var onTransitionUpdateRef = _(onTransitionUpdate);
    var phaseRef = _(phase);
    var directionRef = _(direction);
    var durationRef = _(duration);
    var tooEarlyTimeoutRef = _(null);
    var tooEarlyValueRef = _(true);
    var tooLateTimeoutRef = _(null);
    var onTransitionEnd = T$1(e => {
      if (e.target === getElement() && tooEarlyValueRef.current == false) {
        setPhase("finalize");
      }
    }, []);
    s(() => {
      onTransitionUpdateRef.current = onTransitionUpdate;
    }, [onTransitionUpdate]);
    s(() => {
      phaseRef.current = phase;
    }, [phase]);
    s(() => {
      directionRef.current = direction;
    }, [direction]);
    s(() => {
      durationRef.current = duration;
    }, [duration]);
    s(() => {
      var _onTransitionUpdateRe;
      if (direction && phase) (_onTransitionUpdateRe = onTransitionUpdateRef.current) === null || _onTransitionUpdateRe === void 0 ? void 0 : _onTransitionUpdateRe.call(onTransitionUpdateRef, direction, phase);
    }, [direction, phase]);
    // Every time the phase changes to "transition", add our transition timeout timeouts
    // to catch any time onTransitionEnd fails to report for whatever reason to be safe
    s(() => {
      if (phase == "transition") {
        var _durationRef$current;
        var timeoutDuration = (_durationRef$current = durationRef.current) !== null && _durationRef$current !== void 0 ? _durationRef$current : 1000;
        tooEarlyTimeoutRef.current = window.setTimeout(() => {
          tooEarlyValueRef.current = false;
          tooEarlyTimeoutRef.current = null;
        }, 50);
        tooLateTimeoutRef.current = window.setTimeout(() => {
          tooEarlyValueRef.current = true;
          tooLateTimeoutRef.current = null;
          setPhase("finalize");
        }, timeoutDuration);
      }
      return () => {
        if (tooEarlyTimeoutRef.current) clearTimeout(tooEarlyTimeoutRef.current);
        if (tooLateTimeoutRef.current) clearTimeout(tooLateTimeoutRef.current);
      };
    }, [phase]);
    // Any time "show" changes, update our direction and phase.
    // In addition, measure the size of the element if requested.
    s(() => {
      var element = getElement();
      if (element && show != null) {
        var previousPhase = phaseRef.current;
        // Swap our direction
        if (show) setDirection("enter");else setDirection("exit");
        setPhase(previousPhase === null ? "finalize" : "init");
        if (measure) {
          var currentSizeWithTransition = element.getBoundingClientRect();
          {
            var {
              x,
              y,
              width,
              height
            } = currentSizeWithTransition;
            setTransitioningX(x + "px");
            setTransitioningY(y + "px");
            setTransitioningWidth(width + "px");
            setTransitioningHeight(height + "px");
          }
          if (previousPhase === "finalize") {
            // We're going to be messing with the actual element's class, 
            // so we'll want an easy way to restore it later.
            var backup = element.className;
            element.classList.add("".concat(classBase, "-measure"));
            element.classList.remove("".concat(classBase, "-enter"), "".concat(classBase, "-enter-init"), "".concat(classBase, "-enter-transition"), "".concat(classBase, "-enter-finalize"), "".concat(classBase, "-exit"), "".concat(classBase, "-exit-init"), "".concat(classBase, "-exit-transition"), "".concat(classBase, "-exit-finalize"));
            forceReflow(element);
            var sizeWithoutTransition = element.getBoundingClientRect();
            var {
              x: _x,
              y: _y,
              width: _width,
              height: _height
            } = sizeWithoutTransition;
            setSurfaceX(_x + "px");
            setSurfaceY(_y + "px");
            setSurfaceWidth(_width + "px");
            setSurfaceHeight(_height + "px");
            element.className = backup;
            forceReflow(element);
          }
        }
      }
    }, [show, measure, classBase]);
    // Any time the phase changes to init, immediately before the screen is painted,
    // change the phase to "transition" and re-render ().
    s(() => {
      var element = getElement();
      if (element && directionRef.current != null) {
        var _classBase2;
        (_classBase2 = classBase) !== null && _classBase2 !== void 0 ? _classBase2 : classBase = "transition";
        if (phase === "init") {
          // Preact just finished rendering init
          // Now set our transition style.
          setPhase("transition");
          if (measure) {
            forceReflow(element);
          }
        }
      }
    }, [phase, measure]);
    var inlineDirection = logicalDirectionInfo === null || logicalDirectionInfo === void 0 ? void 0 : logicalDirectionInfo.inlineDirection;
    var blockDirection = logicalDirectionInfo === null || logicalDirectionInfo === void 0 ? void 0 : logicalDirectionInfo.blockDirection;
    var writingModeIsHorizontal = inlineDirection == "rtl" || inlineDirection == "ltr";
    var surfaceInlineInset = writingModeIsHorizontal ? surfaceX : surfaceY;
    var surfaceBlockInset = writingModeIsHorizontal ? surfaceY : surfaceX;
    var surfaceInlineSize = writingModeIsHorizontal ? surfaceWidth : surfaceHeight;
    var surfaceBlockSize = writingModeIsHorizontal ? surfaceHeight : surfaceWidth;
    var transitioningInlineInset = writingModeIsHorizontal ? transitioningX : transitioningY;
    var transitioningBlockInset = writingModeIsHorizontal ? transitioningY : transitioningX;
    var transitioningInlineSize = writingModeIsHorizontal ? transitioningWidth : transitioningHeight;
    var transitioningBlockSize = writingModeIsHorizontal ? transitioningHeight : transitioningWidth;
    return {
      phase,
      direction,
      useTransitionableProps: function useTransitionableProps(otherProps) {
        var almostDone = useMergedProps(refElementProps, useLogicalDirectionProps(_objectSpread2(_objectSpread2({
          ref,
          style: removeEmpty({
            ["--".concat(classBase, "-duration")]: duration,
            ["--".concat(classBase, "-surface-x")]: surfaceX,
            ["--".concat(classBase, "-surface-y")]: surfaceY,
            ["--".concat(classBase, "-surface-width")]: surfaceWidth,
            ["--".concat(classBase, "-surface-height")]: surfaceHeight,
            ["--".concat(classBase, "-surface-inline-inset")]: surfaceInlineInset,
            ["--".concat(classBase, "-surface-block-inset")]: surfaceBlockInset,
            ["--".concat(classBase, "-surface-inline-size")]: surfaceInlineSize,
            ["--".concat(classBase, "-surface-block-size")]: surfaceBlockSize,
            ["--".concat(classBase, "-transitioning-x")]: transitioningX,
            ["--".concat(classBase, "-transitioning-y")]: transitioningY,
            ["--".concat(classBase, "-transitioning-width")]: transitioningWidth,
            ["--".concat(classBase, "-transitioning-height")]: transitioningHeight,
            ["--".concat(classBase, "-transitioning-inline-inset")]: transitioningInlineInset,
            ["--".concat(classBase, "-transitioning-block-inset")]: transitioningBlockInset,
            ["--".concat(classBase, "-transitioning-inline-size")]: transitioningInlineSize,
            ["--".concat(classBase, "-transitioning-block-size")]: transitioningBlockSize
          }),
          onTransitionEnd
        }, {
          "aria-hidden": show ? undefined : "true"
        }), {}, {
          className: clsx(direction && getClassName(classBase, direction), direction && phase && getClassName(classBase, direction, phase), exitVisibility == "removed" && "".concat(classBase, "-removed-on-exit"), exitVisibility == "visible" && "".concat(classBase, "-visible-on-exit"), "".concat(classBase, "-inline-direction-").concat(inlineDirection !== null && inlineDirection !== void 0 ? inlineDirection : "ltr"), "".concat(classBase, "-block-direction-").concat(blockDirection !== null && blockDirection !== void 0 ? blockDirection : "ttb"))
        })));
        return useMergedProps(almostDone, otherProps);
      }
    };
  }
  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(_ref2 => {
      var [_, v] = _ref2;
      return v != null;
    }));
  }
  /**
   * A component that *wraps an HTMLElement or other ref-forwarding component* and allows it to use CSS to transition in/out.
   * Combines the props passed to it, the props its child has, and the props needed for the CSS transition, and passes them
   * all to the child element you provide.
   *
   * This is the most general component that others use as a base. By default, this component by itself doesn't actually add any CSS classes that animate anything (like opacity, for example).
   * It adds classes like `transition-enter-finalize`, but you need to provide the additional e.g. `fade` class that reacts to it.
   *
   * Use this if the other, more specialized Transition components don't fit your needs.
   *
   * @example `<Transitionable show={show} {...useCreateFadeProps(...)}><div>{children}</div></Transitionable>`
   * @example `<Transitionable show={show}><div {...useCreateFadeProps(...)}>{children}</div></Transitionable>`
   */
  var Transitionable = forwardElementRef(function Transition(_ref3, r) {
    var {
        children: child,
        duration,
        classBase,
        measure,
        exitVisibility,
        show,
        onTransitionUpdate,
        animateOnMount,
        childMountBehavior
      } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded$d);
    var [hasShownOnce, setHasShownOnce] = p(false);
    var shouldSetHasShownOnce = hasShownOnce === false && childMountBehavior === "mount-on-show" && show === true;
    h(() => {
      if (shouldSetHasShownOnce) setHasShownOnce(true);
    }, [shouldSetHasShownOnce]);
    if (childMountBehavior === "mount-when-showing" && !show) child = h$1("div", null);
    if (childMountBehavior === "mount-on-show" && !show && hasShownOnce === false) child = h$1("div", null);
    if (!childIsVNode(child)) {
      debugger; // Intentional
      throw new Error("A Transitionable component must have exactly one component child (e.g. a <div />, but not \"a string\").");
    }
    var {
      direction,
      phase,
      useTransitionableProps
    } = useTransitionable({
      classBase,
      duration,
      measure,
      show,
      animateOnMount,
      onTransitionUpdate,
      ref: r,
      exitVisibility
    });
    var mergedWithChildren = useMergedProps(useTransitionableProps(props), _objectSpread2(_objectSpread2({}, child.props), {}, {
      ref: child.ref
    }));
    return q$1(child, mergedWithChildren);
  });
  function childIsVNode(child) {
    if (!child) return false;
    if (Array.isArray(child)) {
      return false;
    }
    if (typeof child != "object") return false;
    return "props" in child;
  }

  var _excluded$c = ["classBase", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "show"];
  /**
   * Creates a set of props that implement a Clip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateClipProps(_ref, otherProps) {
    var _classBase, _ref2, _ref3, _ref4, _ref5;
    var {
      classBase,
      clipOrigin,
      clipOriginInline,
      clipOriginBlock,
      clipMin,
      clipMinInline,
      clipMinBlock
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return _objectSpread2({
      classBase
    }, useMergedProps({
      className: clsx("".concat(classBase, "-clip")),
      style: {
        ["--".concat(classBase, "-clip-origin-inline")]: (_ref2 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5,
        ["--".concat(classBase, "-clip-origin-block")]: (_ref3 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0,
        ["--".concat(classBase, "-clip-min-inline")]: (_ref4 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref4 !== void 0 ? _ref4 : 1,
        ["--".concat(classBase, "-clip-min-block")]: (_ref5 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref5 !== void 0 ? _ref5 : 0
      }
    }, otherProps));
  }
  var Clip = forwardElementRef(function Clip(_ref6, ref) {
    var {
        classBase,
        clipOrigin,
        clipOriginInline,
        clipOriginBlock,
        clipMin,
        clipMinInline,
        clipMinBlock,
        show
      } = _ref6,
      rest = _objectWithoutProperties(_ref6, _excluded$c);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateClipProps({
      classBase,
      clipOrigin,
      clipOriginInline,
      clipOriginBlock,
      clipMin,
      clipMinInline,
      clipMinBlock
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$b = ["classBase", "fadeMin", "fadeMax", "show"];
  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateFadeProps(_ref, otherProps) {
    var _classBase;
    var {
      classBase,
      fadeMin,
      fadeMax
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return _objectSpread2({
      classBase
    }, useMergedProps({
      className: "".concat(classBase, "-fade"),
      style: {
        ["--".concat(classBase, "-fade-min")]: fadeMin !== null && fadeMin !== void 0 ? fadeMin : 0,
        ["--".concat(classBase, "-fade-max")]: fadeMax !== null && fadeMax !== void 0 ? fadeMax : 1
      }
    }, otherProps));
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
  var Fade = forwardElementRef(function Fade(_ref2, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded$b);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$a = ["classBase", "fadeMin", "fadeMax", "show"];
  var ClipFade = forwardElementRef(function ClipFade(_ref, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$a);
    return h$1(Clip, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$9 = ["classBase", "show", "minBlockSize"];
  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */
  function useCreateCollapseProps(_ref, otherProps) {
    var _classBase;
    var {
      classBase,
      minBlockSize
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return _objectSpread2({
      classBase,
      measure: true
    }, useMergedProps({
      className: "".concat(classBase, "-collapse"),
      style: {
        ["--".concat(classBase, "-collapse-min-block")]: minBlockSize !== null && minBlockSize !== void 0 ? minBlockSize : 0
      }
    }, otherProps));
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
  var Collapse = forwardElementRef(function Collapse(_ref2, ref) {
    var {
        classBase,
        show,
        minBlockSize
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded$9);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateCollapseProps({
      classBase,
      minBlockSize
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$8 = ["classBase", "fadeMin", "fadeMax", "show"];
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Collapse and Fade effects.
   *
   * @see `Transitionable` `Collapse` `Fade`
   */
  var CollapseFade = forwardElementRef(function CollapseFade(_ref, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$8);
    return h$1(Collapse, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$7 = ["classBase", "slideTargetInline", "slideTargetBlock", "show"];
  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useCreateSlideProps(_ref, otherProps) {
    var _classBase, _slideTargetInline, _slideTargetBlock, _slideTargetInline2, _slideTargetBlock2;
    var {
      classBase,
      slideTargetInline,
      slideTargetBlock
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    var lastValidTargetInline = _((_slideTargetInline = slideTargetInline) !== null && _slideTargetInline !== void 0 ? _slideTargetInline : 1);
    var lastValidTargetBlock = _((_slideTargetBlock = slideTargetBlock) !== null && _slideTargetBlock !== void 0 ? _slideTargetBlock : 0);
    h(() => {
      if (slideTargetInline) lastValidTargetInline.current = slideTargetInline;
    }, [slideTargetInline]);
    h(() => {
      if (slideTargetBlock) lastValidTargetBlock.current = slideTargetBlock;
    }, [slideTargetBlock]);
    if (slideTargetInline == 0) slideTargetInline = lastValidTargetInline.current;
    if (slideTargetBlock == 0) slideTargetBlock = lastValidTargetBlock.current;
    return _objectSpread2({
      classBase
    }, useMergedProps({
      className: "".concat(classBase, "-slide"),
      style: {
        ["--".concat(classBase, "-slide-target-inline")]: "".concat((_slideTargetInline2 = slideTargetInline) !== null && _slideTargetInline2 !== void 0 ? _slideTargetInline2 : 0),
        ["--".concat(classBase, "-slide-target-block")]: "".concat((_slideTargetBlock2 = slideTargetBlock) !== null && _slideTargetBlock2 !== void 0 ? _slideTargetBlock2 : 0)
      }
    }, otherProps));
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
  var Slide = forwardElementRef(function Slide(_ref2, ref) {
    var {
        classBase,
        slideTargetInline,
        slideTargetBlock,
        show
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded$7);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateSlideProps({
      classBase,
      slideTargetInline,
      slideTargetBlock
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$6 = ["classBase", "fadeMin", "fadeMax", "show"];
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Fade effects.
   *
   * `slideInline={(index - selectedIndex) / 10}` would make the element look like it fades out before it travels to its target destination.
   *
   * @see `Transitionable` `Zoom`
   */
  var SlideFade = forwardElementRef(function SlideFade(_ref, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$6);
    return h$1(Slide, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$5 = ["classBase", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "show"];
  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useCreateZoomProps(_ref, otherProps) {
    var _classBase, _ref2, _ref3, _ref4, _ref5;
    var {
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return _objectSpread2({
      classBase
    }, useMergedProps({
      className: "".concat(classBase, "-zoom"),
      style: {
        ["--".concat(classBase, "-zoom-origin-inline")]: "".concat((_ref2 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5),
        ["--".concat(classBase, "-zoom-origin-block")]: "".concat((_ref3 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0.5),
        ["--".concat(classBase, "-zoom-min-inline")]: "".concat((_ref4 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref4 !== void 0 ? _ref4 : 0),
        ["--".concat(classBase, "-zoom-min-block")]: "".concat((_ref5 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref5 !== void 0 ? _ref5 : 0)
      }
    }, otherProps));
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */
  var Zoom = forwardElementRef(function Zoom(_ref6, ref) {
    var {
        classBase,
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        zoomMin,
        zoomMinInline,
        zoomMinBlock,
        show
      } = _ref6,
      rest = _objectWithoutProperties(_ref6, _excluded$5);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateZoomProps({
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$4 = ["classBase", "fadeMin", "fadeMax", "show"];
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Zoom and Fade effects.
   *
   * This is an ideal time to use the minimum size Zoom properties.
   *
   * @see `Transitionable` `Zoom`
   */
  var ZoomFade = forwardElementRef(function ZoomFade(_ref, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$4);
    return h$1(Zoom, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$3 = ["classBase", "zoomMin", "zoomMinInline", "zoomMinBlock", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "show"];
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with both Slide and Zoom effects.
   *
   * Probably best combined with `useCreateFadeProps` (or just using a `SlideZoomFade`?).
   *
   * @see `Transitionable` `SlideFadeZoom` `Zoom` `Fade`
   */
  var SlideZoom = forwardElementRef(function SlideZoom(_ref, ref) {
    var {
        classBase,
        zoomMin,
        zoomMinInline,
        zoomMinBlock,
        zoomOrigin,
        zoomOriginInline,
        zoomOriginBlock,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$3);
    return h$1(Slide, _objectSpread2({
      show: show
    }, useCreateZoomProps({
      classBase,
      zoomMin,
      zoomMinInline,
      zoomMinBlock,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$2 = ["classBase", "fadeMin", "fadeMax", "show"];
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with Zoom, Slide, and Fade effects.
   *
   * Note that this is basically just shorthand for some prop creation and prop merging functions.
   *
   * @see `Transitionable` `Slide` `Zoom` `Fade`
   */
  var SlideZoomFade = forwardElementRef(function SlideZoomFade(_ref, ref) {
    var {
        classBase,
        fadeMin,
        fadeMax,
        show
      } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded$2);
    return h$1(SlideZoom, _objectSpread2({
      show: show
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$1 = ["classBase", "flipAngleInline", "flipAngleBlock", "perspective", "show"];
  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */
  function useCreateFlipProps(_ref, otherProps) {
    var _classBase, _flipAngleInline, _flipAngleBlock, _flipAngleInline2, _flipAngleBlock2;
    var {
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective
    } = _ref;
    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    var lastValidTargetInline = _((_flipAngleInline = flipAngleInline) !== null && _flipAngleInline !== void 0 ? _flipAngleInline : 180);
    var lastValidTargetBlock = _((_flipAngleBlock = flipAngleBlock) !== null && _flipAngleBlock !== void 0 ? _flipAngleBlock : 0);
    h(() => {
      if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
    }, [flipAngleInline]);
    h(() => {
      if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
    }, [flipAngleBlock]);
    if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
    if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
    return _objectSpread2({
      classBase
    }, useMergedProps({
      className: "".concat(classBase, "-flip"),
      style: {
        ["--".concat(classBase, "-flip-angle-inline")]: "".concat((_flipAngleInline2 = flipAngleInline) !== null && _flipAngleInline2 !== void 0 ? _flipAngleInline2 : 0, "deg"),
        ["--".concat(classBase, "-flip-angle-block")]: "".concat((_flipAngleBlock2 = flipAngleBlock) !== null && _flipAngleBlock2 !== void 0 ? _flipAngleBlock2 : 0, "deg"),
        ["--".concat(classBase, "-perspective")]: "".concat(perspective !== null && perspective !== void 0 ? perspective : 800, "px")
      }
    }, otherProps));
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
  var Flip = forwardElementRef(function Flip(_ref2, ref) {
    var {
        classBase,
        flipAngleInline,
        flipAngleBlock,
        perspective,
        show
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded$1);
    return h$1(Transitionable, _objectSpread2({
      show: show
    }, useCreateFlipProps({
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded = ["children", "classBase", "inline"];
  /**
   * Creates a set of props that implement a swap container.
   * Be sure to merge these returned props with whatever the user passed in.
   */
  function useCreateSwappableProps(_ref, otherProps) {
    var {
      inline,
      classBase
    } = _ref;
    return useMergedProps({
      className: clsx("".concat(classBase !== null && classBase !== void 0 ? classBase : "transition", "-swap-container"), inline && "".concat(classBase !== null && classBase !== void 0 ? classBase : "transition", "-swap-container-inline"))
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
  var Swappable = forwardElementRef(function Swappable(_ref2, ref) {
    var _inline;
    var {
        children,
        classBase,
        inline
      } = _ref2,
      p = _objectWithoutProperties(_ref2, _excluded);
    (_inline = inline) !== null && _inline !== void 0 ? _inline : inline = typeof children.type === "string" && inlineElements.has(children.type);
    var transitionProps = useCreateSwappableProps({
      classBase,
      inline
    }, _objectSpread2(_objectSpread2({}, p), {}, {
      ref
    }));
    var mergedWithChildren = useMergedProps(transitionProps, children.props);
    return q$1(children, mergedWithChildren);
  });
  // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
  // Not perfect, but it's not supposed to be. `inline` is for perfect.
  var inlineElements = new Set(["a", "abbr", "acronym", "audio", "b", "bdi", "bdo", "big", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "label", "map", "mark", "meter", "noscript", "object", "output", "picture", "progress", "q", "ruby", "s", "samp", "script", "select", "slot", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "tt", "var", "video", "wbr"]);

  function halfText(input, times) {
      if (times <= 0)
          return input;
      input = input.substr(input.length / 2);
      if (times == 1)
          return input;
      return halfText(input, times - 1);
  }
  function Demo() {
      const [writingMode, setWritingMode] = p("horizontal");
      const [show1, setShow1] = p(true);
      const [show3, setShow3] = p(0);
      const [reflow, setReflow] = p("hidden");
      const [duration, setDuration] = p(175);
      const [text, setText] = p("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      const onInput1 = T$1((e) => { setShow1(o => !o); e.preventDefault(); }, []);
      const onInput3 = T$1((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = T$1((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = T$1((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = T$1((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = T$1((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = T$1((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = T$1((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = T$1((e) => { setShow3(0); e.preventDefault(); }, []);
      const onInputB = T$1((e) => { setShow3(1); e.preventDefault(); }, []);
      const onInputC = T$1((e) => { setShow3(2); e.preventDefault(); }, []);
      return (h$1(p$1, null,
          h$1("div", { id: "controls" },
              h$1("h1", null, "Preact Transition"),
              h$1("label", null,
                  h$1("input", { onInput: onInput1, type: "checkbox", checked: show1 }),
                  " Card show"),
              h$1("div", { className: "radiogroup" },
                  h$1("div", null, "Visible Swappable child: "),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "swap-index", onInput: onInputA, checked: show3 == 0 }),
                      "#0"),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "swap-index", onInput: onInputB, checked: show3 == 1 }),
                      "#1"),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "swap-index", onInput: onInputC, checked: show3 == 2 }),
                      "#2")),
              h$1("div", { className: "radiogroup" },
                  h$1("div", null, "When transitioned out:"),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "hidden-type", onInput: onInput5b, checked: reflow == "visible" }),
                      "Do not hide (incl. focusables)"),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "hidden-type", onInput: onInput4, checked: reflow == "hidden" }),
                      "visibility: hidden"),
                  h$1("label", { className: "code-mimic" },
                      h$1("input", { type: "radio", name: "hidden-type", onInput: onInput5, checked: reflow == "removed" }),
                      "display: none")),
              h$1("div", null,
                  h$1("label", null,
                      h$1("input", { onInput: onInput8, type: "number", value: duration }),
                      " Duration")),
              h$1("div", { className: "radiogroup" },
                  h$1("div", null, "Demo's writing mode: "),
                  h$1("label", null,
                      h$1("input", { type: "radio", name: "writing-mode", onInput: onInput6, checked: writingMode == "horizontal" }),
                      "Horizontal"),
                  h$1("label", null,
                      h$1("input", { type: "radio", name: "writing-mode", onInput: onInput7, checked: writingMode == "vertical" }),
                      "Vertical")),
              h$1("textarea", { cols: 30, rows: 5, onInput: onInput3, value: text })),
          h$1("div", { id: "root-body", className: `writing-mode-${writingMode}`, style: { "--transition-duration": `${duration}ms` }, key: writingMode },
              h$1(FadeDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(ClipDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(ZoomDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(SlideDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(ZoomSlideDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(CollapseDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              h$1(FlipDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }))));
  }
  function FadeDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [min, setMin] = p(0);
      const [max, setMax] = p(1);
      const onMinInput = T$1((e) => { setMin((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMaxInput = T$1((e) => { setMax((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Fade;
      const CS = "Fade";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Fade"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Minimum fade ",
                      h$1("input", { onInput: onMinInput, value: min, type: "number", min: 0, max: 1, step: 0.0125 })),
                  h$1("label", null,
                      "Maximum fade ",
                      h$1("input", { onInput: onMaxInput, value: max, type: "number", min: 0, max: 1, step: 0.0125 }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}}${min != 0 ? ` 
  fadeMin={${min}}` : ``}${max != 1 ? ` 
  fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${min != 0 ? ` 
        fadeMin={${min}}` : ``}${max != 1 ? ` 
        fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ClipDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = p(0.5);
      const [originY, setOriginY] = p(0);
      const [minX, setMinX] = p(1);
      const [minY, setMinY] = p(0);
      const [withFade, setWithFade] = p(true);
      p(false);
      const onOriginXInput = T$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = T$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = T$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = T$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = T$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ClipFade : Clip;
      const CS = withFade ? "ClipFade" : "Clip";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, clipOriginInline: originX, clipOriginBlock: originY, clipMinInline: minX, clipMinBlock: minY },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Clip"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Origin to center the effect around on the inline-axis position (X-axis in English, etc.) ",
                      h$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  ",
                      h$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Minimum size on the inline-axis ",
                      h$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "Minimum size on the block-axis  ",
                      h$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "With fade",
                      h$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, clipMinInline: minX, clipMinBlock: minY, clipOriginInline: originX, clipOriginBlock: originY },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
  clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
  clipMinX={${minX}}` : ``}${minY != 0 ? ` 
  clipMinY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
        clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
        clipMinX={${minX}}` : ``}${minY != 0 ? ` 
        clipMinY={${minY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomSlideDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = p(0.5);
      const [originY, setOriginY] = p(0);
      const [minX, setMinX] = p(0.75);
      const [minY, setMinY] = p(0.75);
      const [slideX, setSlideX] = p(0.25);
      const [slideY, setSlideY] = p(0);
      const [withFade, setWithFade] = p(true);
      const onSlideXInput = T$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = T$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = T$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const onOriginXInput = T$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = T$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = T$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = T$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = withFade ? SlideZoomFade : SlideZoom;
      const CS = withFade ? "SlideZoomFade" : "SlideZoom";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: slideX * Math.sign(i - contentIndex), slideTargetBlock: slideY * Math.sign(i - contentIndex), zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Zoom & Slide"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      h$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      h$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      h$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      h$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Minimum size on the inline-axis ",
                      h$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "Minimum size on the block-axis  ",
                      h$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "With fade",
                      h$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${slideX != 0 ? ` 
  slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
  slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex.toString()}}${originX != 0.5 ? ` 
        originX={${originX} * Math.sign(0 - ${contentIndex}}` : ``}${originY != 0.5 ? ` 
        originY={${originY} * Math.sign(0 - ${contentIndex}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${slideX != 0 ? ` 
        slideTargetInline={${slideX}}` : ``}${slideY != 0 ? ` 
        slideTargetBlock={${slideY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex.toString()}} [...] />
      <${CS} show={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [originX, setOriginX] = p(0.5);
      const [originY, setOriginY] = p(0);
      const [minX, setMinX] = p(0.75);
      const [minY, setMinY] = p(0.75);
      const [withFade, setWithFade] = p(true);
      const onOriginXInput = T$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = T$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = T$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = T$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = T$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ZoomFade : Zoom;
      const CS = withFade ? "ZoomFade" : "Zoom";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Zoom"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      h$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      h$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Minimum size on the inline-axis ",
                      h$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "Minimum size on the block-axis  ",
                      h$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  h$1("label", null,
                      "With fade",
                      h$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        show={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        originX={${originX}}` : ``}${originY != 0.5 ? ` 
        originY={${originY}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${exitVisibility ? ` 
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={${contentIndex.toString()} == 1} [...] />
      <${CS} show={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function SlideDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [slideX, setSlideX] = p(0.25);
      const [slideY, setSlideY] = p(0);
      const [withFade, setWithFade] = p(true);
      const onSlideXInput = T$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = T$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = T$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      //const [bare, setBare] = useState(false);
      // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
      const C = withFade ? SlideFade : Slide;
      const CS = withFade ? "SlideFade" : "Slide";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: (slideX * Math.sign(i - contentIndex)), slideTargetBlock: slideY * Math.sign(i - contentIndex) },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Slide"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      h$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      h$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  h$1("label", null,
                      "With fade",
                      h$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}} 
  slideTargetInline={${slideX}}
  slideTargetBlock={${slideY}}
  exitVisibility={${JSON.stringify(exitVisibility)}}>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex}}
        exitVisibility={${JSON.stringify(exitVisibility)}}
        slideTargetInline={${slideX} * Math.sign(0 - ${contentIndex})}
        slideTargetBlock={${slideY} * Math.sign(0 - ${contentIndex}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex}} [...] />
      <${CS} show={2 == ${contentIndex}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function CollapseDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [minBlockSize, setMinBlockSize] = p("0px");
      const onWithFadeInput = T$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = p(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = T$1((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return (h$1("div", { className: "demo-section" },
          h$1("h2", null, "Collapse"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Minimum size: ",
                      h$1("input", { type: "text", value: minBlockSize, onInput: onMinSize })),
                  h$1("label", null,
                      "With fade",
                      h$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" })),
                  h$1("div", null, "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."),
                  h$1("div", null,
                      "In general, only use this component if you ",
                      h$1("em", null, "specifically"),
                      " need its reflow transitioning properties. If you want a \"disappear in place without zooming out\", consider a Clip effect")),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
                  h$1("div", null,
                      h$1(Swappable, null,
                          h$1("div", { className: "card" },
                              makeChild(0),
                              makeChild(1),
                              makeChild(2))))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} show={${cardShow.toString()}}${minBlockSize && minBlockSize != "0px" ? ` minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  {/* These cards have padding, 
      and height doesn't include that, 
      but a wrapper's would */}
  <div>
    <Swappable>
      <div className="card">
        <${CS} 
          show={${contentIndex.toString()} == 0}${minBlockSize && minBlockSize != "0px" ? ` 
          minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` 
          exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
          <div className="card-contents">
             {text}
          </div>
        </${CS}>
      </div>
    </Swappable>
  </div>
</${CS}>
<${CS} show={1 == ${contentIndex.toString()}} [...] />
<${CS} show={2 == ${contentIndex.toString()}} [...] />`)))));
  }
  function FlipDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [flipX, setFlipX] = p(0);
      const [flipY, setFlipY] = p(180);
      const onFlipXInput = T$1((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = T$1((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Flip;
      const CS = "Flip";
      const makeChild = (i) => h$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, flipAngleInline: flipX * Math.sign(i - contentIndex), flipAngleBlock: flipY * Math.sign(i - contentIndex) },
          h$1("div", { className: "card-contents" },
              halfText(text, i),
              h$1("div", null,
                  h$1("button", null, "Focusable element"))));
      return h$1("div", { className: "demo-section" },
          h$1("h2", null, "Flip"),
          h$1("div", { className: "demo" },
              h$1("div", { className: "demo-controls" },
                  h$1("label", null,
                      "Rotate on inline axis ",
                      h$1("input", { type: "number", onInput: onFlipXInput, value: flipX })),
                  h$1("label", null,
                      "Rotate along block axis ",
                      h$1("input", { type: "number", onInput: onFlipYInput, value: flipY }))),
              h$1(C, { show: cardShow, exitVisibility: exitVisibility, flipAngleInline: flipX, flipAngleBlock: flipY },
                  h$1(Swappable, null,
                      h$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              h$1("code", null,
                  h$1("pre", null, `<${CS} 
  show={${cardShow.toString()}} 
  flipAngleInline={${JSON.stringify(flipX)}} 
  flipAngleBlock={${JSON.stringify(flipY)}} 
  exitVisibility={${JSON.stringify(exitVisibility)}}}>
    <div className="card">
      <${CS} 
        show={0 == ${contentIndex.toString()}}
        flipAngleInline={${JSON.stringify(flipX)} * Math.sign(0 - ${contentIndex.toString()})} 
        flipAngleBlock={${JSON.stringify(flipY)} * Math.sign(0 - ${contentIndex.toString()})} 
        exitVisibility={${JSON.stringify(exitVisibility)}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} show={1 == ${contentIndex.toString()}} [...] />
      <${CS} show={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  requestAnimationFrame(() => {
      P(h$1(Demo, null), document.getElementById("root"));
  });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kb2N1bWVudC1jbGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi90cmFuc2l0aW9uYWJsZS5qcyIsIi4uL2NsaXAuanMiLCIuLi9mYWRlLmpzIiwiLi4vY2xpcC1mYWRlLmpzIiwiLi4vY29sbGFwc2UuanMiLCIuLi9jb2xsYXBzZS1mYWRlLmpzIiwiLi4vc2xpZGUuanMiLCIuLi9zbGlkZS1mYWRlLmpzIiwiLi4vem9vbS5qcyIsIi4uL3pvb20tZmFkZS5qcyIsIi4uL3NsaWRlLXpvb20uanMiLCIuLi9zbGlkZS16b29tLWZhZGUuanMiLCIuLi9mbGlwLmpzIiwiLi4vc3dhcHBhYmxlLmpzIiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB2KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24geSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBfKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9fKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP18obik6bnVsbH1mdW5jdGlvbiBrKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gayhuKX19ZnVuY3Rpb24gYihuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8c2V0VGltZW91dCkoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1zKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9fKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmayh0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGMscyxhKXt2YXIgaCx5LGQsayxiLGcsdyx4PWkmJmkuX19rfHxlLEM9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHAse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksay5yZWY/ay5yZWY6bnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oZD14W2hdKXx8ZCYmay5rZXk9PWQua2V5JiZrLnR5cGU9PT1kLnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IoeT0wO3k8Qzt5Kyspe2lmKChkPXhbeV0pJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl7eFt5XT12b2lkIDA7YnJlYWt9ZD1udWxsfWoobixrLGQ9ZHx8Zix0LG8scixjLHMsYSksYj1rLl9fZSwoeT1rLnJlZikmJmQucmVmIT15JiYod3x8KHc9W10pLGQucmVmJiZ3LnB1c2goZC5yZWYsbnVsbCxrKSx3LnB1c2goeSxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09ZyYmKGc9YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZrLl9faz09PWQuX19rP2suX19kPXM9bShrLHMsbik6cz1BKG4sayxkLHgsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmZC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9XyhkKSl9Zm9yKHUuX19lPWcsaD1DO2gtLTspbnVsbCE9eFtoXSYmTih4W2hdLHhbaF0pO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylNKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gbShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP20oaSxsLHUpOkEodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24geChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBBKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsPT11fHwhMT09PXUmJi0xPT1sLmluZGV4T2YoXCItXCIpP24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgYSxoLHYseSxfLGssYixnLG0seCxBLEMsJCxILEksVD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1sLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgVCl7aWYoZz11LnByb3BzLG09KGE9VC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT9tP20ucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gVCYmVC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFQoZyx4KToodS5fX2M9aD1uZXcgZChnLHgpLGguY29uc3RydWN0b3I9VCxoLnJlbmRlcj1PKSxtJiZtLnN1YihoKSxoLnByb3BzPWcsaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSxoLl9zYj1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsVC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyxoLl9fcykpKSx5PWgucHJvcHMsXz1oLnN0YXRlLHYpbnVsbD09VC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1ULmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShnLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtmb3IoaC5wcm9wcz1nLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxBPTA7QTxoLl9zYi5sZW5ndGg7QSsrKWguX19oLnB1c2goaC5fc2JbQV0pO2guX3NiPVtdLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoZyxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHksXyxrKX0pfWlmKGguY29udGV4dD14LGgucHJvcHM9ZyxoLl9fdj11LGguX19QPW4sQz1sLl9fciwkPTAsXCJwcm90b3R5cGVcImluIFQmJlQucHJvdG90eXBlLnJlbmRlcil7Zm9yKGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsQyYmQyh1KSxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLEg9MDtIPGguX3NiLmxlbmd0aDtIKyspaC5fX2gucHVzaChoLl9zYltIXSk7aC5fc2I9W119ZWxzZSBkb3toLl9fZD0hMSxDJiZDKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKyskPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxfKSksST1udWxsIT1hJiZhLnR5cGU9PT1wJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsdyhuLEFycmF5LmlzQXJyYXkoSSk/STpbSV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPWwuZGlmZmVkKSYmYSh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZSxjKXt2YXIgcyxoLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksaD0oeT1pLnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyh2fHxoKSYmKHYmJihoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKGs9dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShrKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixlLHI/clswXTppLl9fayYmXyhpLDApLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZhKHJba10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYha3x8XCJvcHRpb25cIj09PWQmJmshPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KGs9cC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsaXx8XCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8YShuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBQKHUsaSx0KXt2YXIgbyxyLGU7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZT1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz1oKHAsbnVsbCxbdV0pLHJ8fGYsZix2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGUsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGUsdSl9ZnVuY3Rpb24gUyhuLGwpe1AobixsLFMpfWZ1bmN0aW9uIHEobCx1LGkpe3ZhciB0LG8scixmPXMoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksdihsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBCKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGIpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49ZS5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksYih0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXAsdD1bXSxnLl9fcj0wLHI9MDtleHBvcnR7ZCBhcyBDb21wb25lbnQscCBhcyBGcmFnbWVudCxxIGFzIGNsb25lRWxlbWVudCxCIGFzIGNyZWF0ZUNvbnRleHQsaCBhcyBjcmVhdGVFbGVtZW50LHkgYXMgY3JlYXRlUmVmLGgsUyBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLFAgYXMgcmVuZGVyLHggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHIsdSxpLG89MCxmPVtdLGM9W10sZT1uLl9fYixhPW4uX19yLHY9bi5kaWZmZWQsbD1uLl9fYyxtPW4udW5tb3VudDtmdW5jdGlvbiBkKHQsdSl7bi5fX2gmJm4uX19oKHIsdCxvfHx1KSxvPTA7dmFyIGk9ci5fX0h8fChyLl9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe19fVjpjfSksaS5fX1t0XX1mdW5jdGlvbiBwKG4pe3JldHVybiBvPTEseShCLG4pfWZ1bmN0aW9uIHkobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpCKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7ci51PSEwO3ZhciBmPXIuc2hvdWxkQ29tcG9uZW50VXBkYXRlO3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZighby5fX2MuX19IKXJldHVybiEwO3ZhciB1PW8uX19jLl9fSC5fXy5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIG4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hZnx8Zi5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPSExO3JldHVybiB1LmZvckVhY2goZnVuY3Rpb24obil7aWYobi5fX04pe3ZhciB0PW4uX19bMF07bi5fXz1uLl9fTixuLl9fTj12b2lkIDAsdCE9PW4uX19bMF0mJihpPSEwKX19KSwhKCFpJiZvLl9fYy5wcm9wcz09PW4pJiYoIWZ8fGYuY2FsbCh0aGlzLG4sdCxyKSl9fXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiBoKHUsaSl7dmFyIG89ZCh0KyssMyk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19ILl9faC5wdXNoKG8pKX1mdW5jdGlvbiBzKHUsaSl7dmFyIG89ZCh0KyssNCk7IW4uX19zJiZ6KG8uX19ILGkpJiYoby5fXz11LG8uaT1pLHIuX19oLnB1c2gobykpfWZ1bmN0aW9uIF8obil7cmV0dXJuIG89NSxGKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBBKG4sdCxyKXtvPTYscyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBGKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIHoodS5fX0gscik/KHUuX19WPW4oKSx1Lmk9cix1Ll9faD1uLHUuX19WKTp1Ll9ffWZ1bmN0aW9uIFQobix0KXtyZXR1cm4gbz04LEYoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gcShuKXt2YXIgdT1yLmNvbnRleHRbbi5fX2NdLGk9ZCh0KyssOSk7cmV0dXJuIGkuYz1uLHU/KG51bGw9PWkuX18mJihpLl9fPSEwLHUuc3ViKHIpKSx1LnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIHgodCxyKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShyP3IodCk6dCl9ZnVuY3Rpb24gUChuKXt2YXIgdT1kKHQrKywxMCksaT1wKCk7cmV0dXJuIHUuX189bixyLmNvbXBvbmVudERpZENhdGNofHwoci5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuLHQpe3UuX18mJnUuX18obix0KSxpWzFdKG4pfSksW2lbMF0sZnVuY3Rpb24oKXtpWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiBWKCl7dmFyIG49ZCh0KyssMTEpO3JldHVybiBuLl9ffHwobi5fXz1cIlBcIitmdW5jdGlvbihuKXtmb3IodmFyIHQ9MCxyPW4ubGVuZ3RoO3I+MDspdD0odDw8NSktdCtuLmNoYXJDb2RlQXQoLS1yKXwwO3JldHVybiB0fShyLl9fdi5fX20pK3QpLG4uX199ZnVuY3Rpb24gYigpe2Zvcih2YXIgdDt0PWYuc2hpZnQoKTspaWYodC5fX1AmJnQuX19IKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChrKSx0Ll9fSC5fX2guZm9yRWFjaCh3KSx0Ll9fSC5fX2g9W119Y2F0Y2gocil7dC5fX0guX19oPVtdLG4uX19lKHIsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGV8fG4uX19tfHxudWxsPT09bi5fXz9uLl9fbXx8KG4uX19tPW4uX18mJm4uX18uX19tP24uX18uX19tOlwiXCIpOm4uX19tPShuLl9fJiZuLl9fLl9fbT9uLl9fLl9fbTpcIlwiKSsobi5fXyYmbi5fXy5fX2s/bi5fXy5fX2suaW5kZXhPZihuKTowKSxyPW51bGwsZSYmZShuKX0sbi5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uX19WPWMsbi5fX049bi5pPXZvaWQgMH0pKTooaS5fX2guZm9yRWFjaChrKSxpLl9faC5mb3JFYWNoKHcpLGkuX19oPVtdKSksdT1yfSxuLmRpZmZlZD1mdW5jdGlvbih0KXt2JiZ2KHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiYoby5fX0guX19oLmxlbmd0aCYmKDEhPT1mLnB1c2gobykmJmk9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChpPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8aikoYikpLG8uX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLl9fViE9PWMmJihuLl9fPW4uX19WKSxuLmk9dm9pZCAwLG4uX19WPWN9KSksdT1yPW51bGx9LG4uX19jPWZ1bmN0aW9uKHQscil7ci5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGspLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8dyhuKX0pfWNhdGNoKHUpe3Iuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHI9W10sbi5fX2UodSx0Ll9fdil9fSksbCYmbCh0LHIpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7bSYmbSh0KTt2YXIgcix1PXQuX19jO3UmJnUuX19IJiYodS5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ayhuKX1jYXRjaChuKXtyPW59fSksdS5fX0g9dm9pZCAwLHImJm4uX19lKHIsdS5fX3YpKX07dmFyIGc9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGoobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxnJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24gayhuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiB3KG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiB6KG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEIobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7VCBhcyB1c2VDYWxsYmFjayxxIGFzIHVzZUNvbnRleHQseCBhcyB1c2VEZWJ1Z1ZhbHVlLGggYXMgdXNlRWZmZWN0LFAgYXMgdXNlRXJyb3JCb3VuZGFyeSxWIGFzIHVzZUlkLEEgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxzIGFzIHVzZUxheW91dEVmZmVjdCxGIGFzIHVzZU1lbW8seSBhcyB1c2VSZWR1Y2VyLF8gYXMgdXNlUmVmLHAgYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e0NvbXBvbmVudCBhcyBuLGNyZWF0ZUVsZW1lbnQgYXMgdCxvcHRpb25zIGFzIGUsdG9DaGlsZEFycmF5IGFzIHIsRnJhZ21lbnQgYXMgdSxyZW5kZXIgYXMgbyxoeWRyYXRlIGFzIGksY3JlYXRlQ29udGV4dCBhcyBsLGNyZWF0ZVJlZiBhcyBjLGNsb25lRWxlbWVudCBhcyBmfWZyb21cInByZWFjdFwiO2V4cG9ydHtDb21wb25lbnQsRnJhZ21lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVFbGVtZW50LGNyZWF0ZVJlZn1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlU3RhdGUgYXMgYSx1c2VJZCBhcyBzLHVzZVJlZHVjZXIgYXMgaCx1c2VFZmZlY3QgYXMgdix1c2VMYXlvdXRFZmZlY3QgYXMgZCx1c2VSZWYgYXMgcCx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG0sdXNlTWVtbyBhcyB5LHVzZUNhbGxiYWNrIGFzIF8sdXNlQ29udGV4dCBhcyBiLHVzZURlYnVnVmFsdWUgYXMgU31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7ZnVuY3Rpb24gZyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIHcobixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0oRS5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIFI9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLFImJlIobil9O3ZhciB4PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiBOKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9Zyh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZnx8bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9eCx0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgaz1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LEE9e21hcDprLGZvckVhY2g6ayxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sTz1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7TyhuLHQsZSxyKX07dmFyIFQ9ZS51bm1vdW50O2Z1bmN0aW9uIEkobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWcoe30sbikpLl9fYyYmKG4uX19jLl9fUD09PWUmJihuLl9fYy5fX1A9dCksbi5fX2M9bnVsbCksbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gSShuLHQsZSl9KSksbn1mdW5jdGlvbiBMKG4sdCxlKXtyZXR1cm4gbiYmKG4uX192PW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gTChuLHQsZSl9KSxuLl9fYyYmbi5fX2MuX19QPT09dCYmKG4uX19lJiZlLmluc2VydEJlZm9yZShuLl9fZSxuLl9fZCksbi5fX2MuX19lPSEwLG4uX19jLl9fUD1lKSksbn1mdW5jdGlvbiBVKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIEQobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19hJiZ0Ll9fYShuKX1mdW5jdGlvbiBGKG4pe3ZhciBlLHIsdTtmdW5jdGlvbiBvKG8pe2lmKGV8fChlPW4oKSkudGhlbihmdW5jdGlvbihuKXtyPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7dT1ufSksdSl0aHJvdyB1O2lmKCFyKXRocm93IGU7cmV0dXJuIHQocixvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLl9fZj0hMCxvfWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1lLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxUJiZUKG4pfSwoVS5wcm90b3R5cGU9bmV3IG4pLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PUQoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Epe3ZhciBuPXIuc3RhdGUuX19hO3IuX192Ll9fa1swXT1MKG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fYTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2E6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LFUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxVLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obixlKXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09SSh0aGlzLl9fYixyLG8uX19PPW8uX19QKX10aGlzLl9fYj1udWxsfXZhciBpPWUuX19hJiZ0KHUsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gaSYmKGkuX19oPW51bGwpLFt0KHUsbnVsbCxlLl9fYT9udWxsOm4uY2hpbGRyZW4pLGldfTt2YXIgVj1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBXKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gUChuKXt2YXIgZT10aGlzLHI9bi5pO2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtvKG51bGwsZS5sKSxlLmw9bnVsbCxlLmk9bnVsbH0sZS5pJiZlLmkhPT1yJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KGUubHx8KGUuaT1yLGUubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOnIsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLHQpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksZS5pLnJlbW92ZUNoaWxkKG4pfX0pLG8odChXLHtjb250ZXh0OmUuY29udGV4dH0sbi5fX3YpLGUubCkpOmUubCYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uICQobixlKXt2YXIgcj10KFAse19fdjpuLGk6ZX0pO3JldHVybiByLmNvbnRhaW5lckluZm89ZSxyfShNLnByb3RvdHlwZT1uZXcgbikuX19hPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1EKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxWKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXIobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtWKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsej0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlfGxldHRlcnxsaWdodGluZ3xtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8cG9pbnRlcnxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx0cmFuc2Zvcm18dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCxIPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gWihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxvKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBZKG4sdCxlKXtyZXR1cm4gaShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9bi5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkobi5wcm90b3R5cGUsdCx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KX19KX0pO3ZhciBxPWUuZXZlbnQ7ZnVuY3Rpb24gRygpe31mdW5jdGlvbiBKKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIEsoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWUuZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIHEmJihuPXEobikpLG4ucGVyc2lzdD1HLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9SixuLmlzRGVmYXVsdFByZXZlbnRlZD1LLG4ubmF0aXZlRXZlbnQ9bn07dmFyIFEsWD17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sbm49ZS52bm9kZTtlLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMsdT1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgbz0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBpIGluIHU9e30sZSl7dmFyIGw9ZVtpXTtCJiZcImNoaWxkcmVuXCI9PT1pJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1pJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09bHx8KFwiZGVmYXVsdFZhbHVlXCI9PT1pJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP2k9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PWkmJiEwPT09bD9sPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KGkpP2k9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkrdCkmJiFIKGUudHlwZSk/aT1cIm9uaW5wdXRcIjovXm9uZm9jdXMkL2kudGVzdChpKT9pPVwib25mb2N1c2luXCI6L15vbmJsdXIkL2kudGVzdChpKT9pPVwib25mb2N1c291dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChpKT9pPWkudG9Mb3dlckNhc2UoKTpvJiZ6LnRlc3QoaSk/aT1pLnJlcGxhY2UoL1tBLVowLTldL2csXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09bCYmKGw9dm9pZCAwKSwvXm9uaW5wdXQkL2kudGVzdChpKSYmKGk9aS50b0xvd2VyQ2FzZSgpLHVbaV0mJihpPVwib25pbnB1dENhcHR1cmVcIikpLHVbaV09bCl9XCJzZWxlY3RcIj09dCYmdS5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheSh1LnZhbHVlKSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT11LmRlZmF1bHRWYWx1ZSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9dS5tdWx0aXBsZT8tMSE9dS5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTp1LmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXUsZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihYLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJih1LmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLFgpKX1uLiQkdHlwZW9mPWosbm4mJm5uKG4pfTt2YXIgdG49ZS5fX3I7ZS5fX3I9ZnVuY3Rpb24obil7dG4mJnRuKG4pLFE9bi5fX2N9O3ZhciBlbj17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIFEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0scm49XCIxNy4wLjJcIjtmdW5jdGlvbiB1bihuKXtyZXR1cm4gdC5iaW5kKG51bGwsbil9ZnVuY3Rpb24gb24obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBsbihuKXtyZXR1cm4gb24obik/Zi5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBjbihuKXtyZXR1cm4hIW4uX19rJiYobyhudWxsLG4pLCEwKX1mdW5jdGlvbiBmbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBhbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxzbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxobj11O2Z1bmN0aW9uIHZuKG4pe24oKX1mdW5jdGlvbiBkbihuKXtyZXR1cm4gbn1mdW5jdGlvbiBwbigpe3JldHVyblshMSx2bl19dmFyIG1uPWQ7ZnVuY3Rpb24geW4obix0KXt2YXIgZT10KCkscj1hKHtoOntfXzplLHY6dH19KSx1PXJbMF0uaCxvPXJbMV07cmV0dXJuIGQoZnVuY3Rpb24oKXt1Ll9fPWUsdS52PXQsdS5fXyE9PXQoKSYmbyh7aDp1fSl9LFtuLGUsdF0pLHYoZnVuY3Rpb24oKXtyZXR1cm4gdS5fXyE9PXUudigpJiZvKHtoOnV9KSxuKGZ1bmN0aW9uKCl7dS5fXyE9PXUudigpJiZvKHtoOnV9KX0pfSxbbl0pLGV9dmFyIF9uPXt1c2VTdGF0ZTphLHVzZUlkOnMsdXNlUmVkdWNlcjpoLHVzZUVmZmVjdDp2LHVzZUxheW91dEVmZmVjdDpkLHVzZUluc2VydGlvbkVmZmVjdDptbix1c2VUcmFuc2l0aW9uOnBuLHVzZURlZmVycmVkVmFsdWU6ZG4sdXNlU3luY0V4dGVybmFsU3RvcmU6eW4sc3RhcnRUcmFuc2l0aW9uOnZuLHVzZVJlZjpwLHVzZUltcGVyYXRpdmVIYW5kbGU6bSx1c2VNZW1vOnksdXNlQ2FsbGJhY2s6Xyx1c2VDb250ZXh0OmIsdXNlRGVidWdWYWx1ZTpTLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjpBLHJlbmRlcjpaLGh5ZHJhdGU6WSx1bm1vdW50Q29tcG9uZW50QXROb2RlOmNuLGNyZWF0ZVBvcnRhbDokLGNyZWF0ZUVsZW1lbnQ6dCxjcmVhdGVDb250ZXh0OmwsY3JlYXRlRmFjdG9yeTp1bixjbG9uZUVsZW1lbnQ6bG4sY3JlYXRlUmVmOmMsRnJhZ21lbnQ6dSxpc1ZhbGlkRWxlbWVudDpvbixmaW5kRE9NTm9kZTpmbixDb21wb25lbnQ6bixQdXJlQ29tcG9uZW50OkUsbWVtbzp3LGZvcndhcmRSZWY6TixmbHVzaFN5bmM6c24sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6YW4sU3RyaWN0TW9kZTpobixTdXNwZW5zZTpVLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDplbn07ZXhwb3J0e0EgYXMgQ2hpbGRyZW4sRSBhcyBQdXJlQ29tcG9uZW50LGhuIGFzIFN0cmljdE1vZGUsVSBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxlbiBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxsbiBhcyBjbG9uZUVsZW1lbnQsdW4gYXMgY3JlYXRlRmFjdG9yeSwkIGFzIGNyZWF0ZVBvcnRhbCxfbiBhcyBkZWZhdWx0LGZuIGFzIGZpbmRET01Ob2RlLHNuIGFzIGZsdXNoU3luYyxOIGFzIGZvcndhcmRSZWYsWSBhcyBoeWRyYXRlLG9uIGFzIGlzVmFsaWRFbGVtZW50LEYgYXMgbGF6eSx3IGFzIG1lbW8sWiBhcyByZW5kZXIsdm4gYXMgc3RhcnRUcmFuc2l0aW9uLGNuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsYW4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZG4gYXMgdXNlRGVmZXJyZWRWYWx1ZSxtbiBhcyB1c2VJbnNlcnRpb25FZmZlY3QseW4gYXMgdXNlU3luY0V4dGVybmFsU3RvcmUscG4gYXMgdXNlVHJhbnNpdGlvbixybiBhcyB2ZXJzaW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmKENvbXBvbmVudCkge1xuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcbiAgICByZXR1cm4gRm9yd2FyZGVkQ29tcG9uZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbih7IGNoaWxkcmVuOiBsaHMgfSwgeyBjaGlsZHJlbjogcmhzIH0pIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSB9LCB7IGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUgfSkge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHsgcmVmOiByaHMgfSwgeyByZWY6IGxocyB9KSB7XG4gICAgY29uc3QgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9LCBbbGhzLCByaHNdKTtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIGxocy5zdHlsZTtcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9naWM/Pz9cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcyhsaHNBbGwsIHJoc0FsbCkge1xuICAgIC8vIEZpcnN0LCBzZXBhcmF0ZSB0aGUgcHJvcHMgd2Ugd2VyZSBnaXZlbiBpbnRvIHR3byBncm91cHM6XG4gICAgLy8gbGhzQWxsIGFuZCByaHNBbGwgY29udGFpbiBhbGwgdGhlIHByb3BzIHdlIHdlcmUgZ2l2ZW4sIGFuZFxuICAgIC8vIGxoc01pc2MgYW5kIHJoc01pc2MgY29udGFpbiBhbGwgcHJvcHMgKmV4Y2VwdCogZm9yIHRoZSBlYXN5IG9uZXNcbiAgICAvLyBsaWtlIGNsYXNzTmFtZSBhbmQgc3R5bGUgdGhhdCB3ZSBhbHJlYWR5IGtub3cgaG93IHRvIG1lcmdlLlxuICAgIGNvbnN0IHsgY2hpbGRyZW46IF9saHNDaGlsZHJlbiwgY2xhc3M6IF9saHNDbGFzcywgY2xhc3NOYW1lOiBfbGhzQ2xhc3NOYW1lLCBzdHlsZTogX2xoc1N0eWxlLCByZWY6IF9saHNSZWYsIC4uLmxoc01pc2MgfSA9IGxoc0FsbDtcbiAgICBjb25zdCB7IGNoaWxkcmVuOiBfcmhzQ2hpbGRyZW4sIGNsYXNzOiBfcmhzQ2xhc3MsIGNsYXNzTmFtZTogX3Joc0NsYXNzTmFtZSwgc3R5bGU6IF9yaHNTdHlsZSwgcmVmOiBfcmhzUmVmLCAuLi5yaHNNaXNjIH0gPSByaHNBbGw7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAuLi5saHNNaXNjLFxuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMobGhzQWxsLCByaHNBbGwpLFxuICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoc0FsbCwgcmhzQWxsKSxcbiAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoc0FsbCwgcmhzQWxsKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbCwgcmhzQWxsKSxcbiAgICB9O1xuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XG4gICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxuICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xuICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHNNaXNjKTtcbiAgICBmb3IgKGNvbnN0IFtyaHNLZXlVLCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVO1xuICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc01pc2NbcmhzS2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgIGxvZz8uKGBUaGUgcHJvcCBcIiR7cmhzS2V5fVwiIGNhbm5vdCBzaW11bHRhbmVvdXNseSBiZSB0aGUgdmFsdWVzICR7bGhzVmFsdWV9IGFuZCAke3Joc1ZhbHVlfS4gT25lIG11c3QgYmUgY2hvc2VuIG91dHNpZGUgb2YgdXNlTWVyZ2VkUHJvcHMuYCk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuLyoqXG4gKiBEZWJ1ZyBob29rLlxuICpcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKlxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eShwYXJlbnRIb29rTmFtZSwgLi4udmFsdWVzKSB7XG4gICAgdXNlSGVscGVyKHZhbHVlcy5sZW5ndGgsIDApO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZih2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzaG93bkVycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCBhcmd1bWVudC5gKTtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGYpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3Qgd2FybmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsgLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBydW4gb3VyIGVmZmVjdCBhdCBsZWFzdCBvbmNlIG9uIG1vdW50LlxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXG4gICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXG4gICAgY29uc3QgciA9IHVzZVJlZih7IHByZXZEZXA6IFVuc2V0IH0pO1xuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKGFyZykgPT4ge1xuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuICAgICAgICBpZiAoci5jdXJyZW50LnByZXZEZXAgPT09IFVuc2V0ICYmIG5leHRWYWx1ZSAhPT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgcmVxdWVzdCB0byBjaGFuZ2UgdGhpcyB2YWx1ZS5cbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRoZSByZXF1ZXN0IGltbWVkaWF0ZWx5LCB0aGVuIHF1ZXVlIHVwIHRoZSBvbkNoYW5nZSBmdW5jdGlvblxuICAgICAgICAgICAgLy8gU2F2ZSBvdXIgY3VycmVudCB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBjb21wYXJlIGFnYWluc3QgaXQgbGF0ZXJcbiAgICAgICAgICAgIC8vIChpZiB3ZSBmbGlwIGJhY2sgdG8gdGhpcyBzdGF0ZSwgdGhlbiB3ZSB3b24ndCBzZW5kIHRoZSBvbkNoYW5nZSBmdW5jdGlvbilcbiAgICAgICAgICAgIHIuY3VycmVudC5wcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHVwZGF0ZSB0aGlzIGhlcmUgKGFzIHdlbGwgYXMgYmVsb3cpIGluIGNhc2UgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgaW52b2tlcyB0aGlzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSByLmN1cnJlbnQucHJldkRlcDtcbiAgICAgICAgICAgICAgICBpZiAoci5jdXJyZW50LnByZXZEZXAgIT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJlZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4obmV4dERlcCwgcHJldkRlcCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHREZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBmaW5pc2hlZCB3aXRoIGV2ZXJ5dGhpbmcsIHNvIG1hcmsgdXMgYXMgYmVpbmcgb24gYSBjbGVhbiBzbGF0ZSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICByLmN1cnJlbnQucHJldkRlcCA9IFVuc2V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICpcbiAqXG4gKiAoVGhpcyBpcyBoZXJlLCBpbiB0aGlzIHBhcnRpY3VsYXIgZmlsZSwgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gKiB3aXRob3V0IGFsc28gbWFraW5nIGEgdXRpbGl0aWVzIGZpbGUuXG4gKiBPbmNlIHdlIGNhbiByZW1vdmUgdGhpcyBob29rLCB3ZSBjYW4gcHV0IHRoaXMgZnVuY3Rpb24gYmFjayB3aXRoIHVzZVJhbmRvbUlkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4oLi4uYXJncyk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICAvKigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSB1c2VSZWY8dm9pZCB8ICgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuICAgICAgICBjb25zdCBwcmV2QXJnc1JlZiA9IHVzZVJlZjxJbnB1dHM+KG51bGwhKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKGlucHV0cywgcHJldkFyZ3NSZWYuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHByZXZBcmdzUmVmLmN1cnJlbnQgPSBpbnB1dHMhO1xuICAgICAgICAgICAgaWYgKGNsZWFudXAuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSkoKTsqL1xuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH07XG4gICAgfSwgW2lkXSk7XG59XG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInByZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0SW5mby5jdXJyZW50LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKlxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKlxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcbiAgICBjb25zdCBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFuaW1hdGlvbi1mcmFtZS5qcy5tYXAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoZWxlbWVudCkgeyByZXR1cm4gKGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQgPz8gd2luZG93LmRvY3VtZW50ID8/IGdsb2JhbFRoaXMuZG9jdW1lbnQpOyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlRG9jdW1lbnRDbGFzcyhjbGFzc05hbWUsIGFjdGl2ZSwgZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPz89IGdldERvY3VtZW50KCkuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNsYXNzTmFtZSA9IGNsc3goY2xhc3NOYW1lKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY2xhc3NOYW1lLCBhY3RpdmUsIGVsZW1lbnRdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kb2N1bWVudC1jbGFzcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHJldHVybk51bGwsIHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcbi8qKlxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cbiAqICpUaGlzIGhvb2sgaXRzZWxmIHJldHVybnMgYSBob29rKi0tdXNlUmVmRWxlbWVudFByb3BzIG1vZGlmaWVzIHRoZSBwcm9wcyB0aGF0IHlvdSB3ZXJlIGdvaW5nIHRvIHBhc3MgdG8gYW4gSFRNTEVsZW1lbnQsXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cbiAqXG4gKiBEb24ndCBmb3JnZXQgdG8gcHJvdmlkZSB0aGUgRWxlbWVudCBhcyB0aGUgdHlwZSBhcmd1bWVudCFcbiAqXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudChhcmdzKSB7XG4gICAgY29uc3QgeyBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCB9ID0gKGFyZ3MgPz8ge30pO1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVJlZkVsZW1lbnRcIiwgb25FbGVtZW50Q2hhbmdlLCBvbk1vdW50LCBvblVubW91bnQpO1xuICAgIC8vIENhbGxlZCAoaW5kaXJlY3RseSkgYnkgdGhlIHJlZiB0aGF0IHRoZSBlbGVtZW50IHJlY2VpdmVzLlxuICAgIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSwgcHJldlZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSBvbkVsZW1lbnRDaGFuZ2U/LihlLCBwcmV2VmFsdWUpO1xuICAgICAgICBpZiAocHJldlZhbHVlKVxuICAgICAgICAgICAgb25Vbm1vdW50Py4ocHJldlZhbHVlKTtcbiAgICAgICAgaWYgKGUpXG4gICAgICAgICAgICBvbk1vdW50Py4oZSk7XG4gICAgICAgIHJldHVybiBjbGVhbnVwO1xuICAgIH0sIFtdKTtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKGhhbmRsZXIsIHJldHVybk51bGwsIHJ1bkltbWVkaWF0ZWx5KTtcbiAgICBjb25zdCByZWZFbGVtZW50UHJvcHMgPSB7IHJlZjogc2V0RWxlbWVudCB9O1xuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcbiAgICByZXR1cm4ge1xuICAgICAgICByZWZFbGVtZW50UHJvcHMsXG4gICAgICAgIGdldEVsZW1lbnRcbiAgICB9O1xufVxuZnVuY3Rpb24gcnVuSW1tZWRpYXRlbHkoZikge1xuICAgIGYoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gXCIuL3VzZS1kb2N1bWVudC1jbGFzc1wiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVsZW1lbnRTaXplKHsgZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlIH0pIHtcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoXCJ1c2VFbGVtZW50U2l6ZVwiLCBnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRTaXplLCBzZXRTaXplXSA9IHVzZVBhc3NpdmVTdGF0ZShvblNpemVDaGFuZ2UsIHJldHVybk51bGwpO1xuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgbmVlZEFOZXdPYnNlcnZlciA9IHVzZUNhbGxiYWNrKChlbGVtZW50LCBvYnNlcnZlQm94KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGdldERvY3VtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHdpbmRvdyAmJiAoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoX2VudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgeyBib3g6IG9ic2VydmVCb3ggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGUpID0+IG5lZWRBTmV3T2JzZXJ2ZXIoZSwgZ2V0T2JzZXJ2ZUJveD8uKCkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGdldE9ic2VydmVCb3gpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZUJveC5jdXJyZW50ICE9PSBnZXRPYnNlcnZlQm94KCkpXG4gICAgICAgICAgICAgICAgbmVlZEFOZXdPYnNlcnZlcihnZXRFbGVtZW50KCksIGdldE9ic2VydmVCb3goKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiByZWZFbGVtZW50UHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoJ2luZXJ0JywgZmFjdG9yeSkgOlxuICAoZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuICAvKipcbiAgICogVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBXM0MgU29mdHdhcmUgYW5kIERvY3VtZW50IExpY2Vuc2VcbiAgICogKGh0dHA6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50KS5cbiAgICovXG5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZXR1cm4gZWFybHkgaWYgd2UncmUgbm90IHJ1bm5pbmcgaW5zaWRlIG9mIHRoZSBicm93c2VyLlxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENvbnZlbmllbmNlIGZ1bmN0aW9uIGZvciBjb252ZXJ0aW5nIE5vZGVMaXN0cy5cbiAgICAvKiogQHR5cGUge3R5cGVvZiBBcnJheS5wcm90b3R5cGUuc2xpY2V9ICovXG4gICAgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4gICAgLyoqXG4gICAgICogSUUgaGFzIGEgbm9uLXN0YW5kYXJkIG5hbWUgZm9yIFwibWF0Y2hlc1wiLlxuICAgICAqIEB0eXBlIHt0eXBlb2YgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc31cbiAgICAgKi9cbiAgICB2YXIgbWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I7XG5cbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nID0gWydhW2hyZWZdJywgJ2FyZWFbaHJlZl0nLCAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pJywgJ3NlbGVjdDpub3QoW2Rpc2FibGVkXSknLCAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pJywgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSknLCAnZGV0YWlscycsICdzdW1tYXJ5JywgJ2lmcmFtZScsICdvYmplY3QnLCAnZW1iZWQnLCAnW2NvbnRlbnRlZGl0YWJsZV0nXS5qb2luKCcsJyk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnRSb290YCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IHN1YnRyZWUsIGkuZS4gYSBET00gc3VidHJlZSB3aG9zZSByb290IGVsZW1lbnQgaGFzIGFuIGBpbmVydGBcbiAgICAgKiBhdHRyaWJ1dGUuXG4gICAgICpcbiAgICAgKiBJdHMgbWFpbiBmdW5jdGlvbnMgYXJlOlxuICAgICAqXG4gICAgICogLSB0byBjcmVhdGUgYW5kIG1haW50YWluIGEgc2V0IG9mIG1hbmFnZWQgYEluZXJ0Tm9kZWBzLCBpbmNsdWRpbmcgd2hlbiBtdXRhdGlvbnMgb2NjdXIgaW4gdGhlXG4gICAgICogICBzdWJ0cmVlLiBUaGUgYG1ha2VTdWJ0cmVlVW5mb2N1c2FibGUoKWAgbWV0aG9kIGhhbmRsZXMgY29sbGVjdGluZyBgSW5lcnROb2RlYHMgdmlhIHJlZ2lzdGVyaW5nXG4gICAgICogICBlYWNoIGZvY3VzYWJsZSBub2RlIGluIHRoZSBzdWJ0cmVlIHdpdGggdGhlIHNpbmdsZXRvbiBgSW5lcnRNYW5hZ2VyYCB3aGljaCBtYW5hZ2VzIGFsbCBrbm93blxuICAgICAqICAgZm9jdXNhYmxlIG5vZGVzIHdpdGhpbiBpbmVydCBzdWJ0cmVlcy4gYEluZXJ0TWFuYWdlcmAgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIGBJbmVydE5vZGVgXG4gICAgICogICBpbnN0YW5jZSBleGlzdHMgZm9yIGVhY2ggZm9jdXNhYmxlIG5vZGUgd2hpY2ggaGFzIGF0IGxlYXN0IG9uZSBpbmVydCByb290IGFzIGFuIGFuY2VzdG9yLlxuICAgICAqXG4gICAgICogLSB0byBub3RpZnkgYWxsIG1hbmFnZWQgYEluZXJ0Tm9kZWBzIHdoZW4gdGhpcyBzdWJ0cmVlIHN0b3BzIGJlaW5nIGluZXJ0IChpLmUuIHdoZW4gdGhlIGBpbmVydGBcbiAgICAgKiAgIGF0dHJpYnV0ZSBpcyByZW1vdmVkIGZyb20gdGhlIHJvb3Qgbm9kZSkuIFRoaXMgaXMgaGFuZGxlZCBpbiB0aGUgZGVzdHJ1Y3Rvciwgd2hpY2ggY2FsbHMgdGhlXG4gICAgICogICBgZGVyZWdpc3RlcmAgbWV0aG9kIG9uIGBJbmVydE1hbmFnZXJgIGZvciBlYWNoIG1hbmFnZWQgaW5lcnQgbm9kZS5cbiAgICAgKi9cblxuICAgIHZhciBJbmVydFJvb3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSByb290RWxlbWVudCBUaGUgSFRNTEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Tm9kZT59XG4gICAgICAgICAqIEFsbCBtYW5hZ2VkIGZvY3VzYWJsZSBub2RlcyBpbiB0aGlzIEluZXJ0Um9vdCdzIHN1YnRyZWUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgc3VidHJlZSBoaWRkZW4gZnJvbSBhc3Npc3RpdmUgdGVjaG5vbG9neVxuICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgICAgLyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IHRoaXMuX3Jvb3RFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIC8vIE1ha2UgYWxsIGZvY3VzYWJsZSBlbGVtZW50cyBpbiB0aGUgc3VidHJlZSB1bmZvY3VzYWJsZSBhbmQgYWRkIHRoZW0gdG8gX21hbmFnZWROb2Rlc1xuICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHRoaXMuX3Jvb3RFbGVtZW50KTtcblxuICAgICAgICAvLyBXYXRjaCBmb3I6XG4gICAgICAgIC8vIC0gYW55IGFkZGl0aW9ucyBpbiB0aGUgc3VidHJlZTogbWFrZSB0aGVtIHVuZm9jdXNhYmxlIHRvb1xuICAgICAgICAvLyAtIGFueSByZW1vdmFscyBmcm9tIHRoZSBzdWJ0cmVlOiByZW1vdmUgdGhlbSBmcm9tIHRoaXMgaW5lcnQgcm9vdCdzIG1hbmFnZWQgbm9kZXNcbiAgICAgICAgLy8gLSBhdHRyaWJ1dGUgY2hhbmdlczogaWYgYHRhYmluZGV4YCBpcyBhZGRlZCwgb3IgcmVtb3ZlZCBmcm9tIGFuIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlXG4gICAgICAgIC8vICAgZWxlbWVudCwgbWFrZSB0aGF0IG5vZGUgYSBtYW5hZ2VkIG5vZGUuXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fb25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9yb290RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS4gIFRoaXMgdW53aW5kcyBhbGwgb2YgdGhlIHN0YXRlXG4gICAgICAgKiBzdG9yZWQgaW4gdGhpcyBvYmplY3QgYW5kIHVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBvZiB0aGUgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydFJvb3QsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fcm9vdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRoaXMuX3NhdmVkQXJpYUhpZGRlbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VOb2RlKGluZXJ0Tm9kZS5ub2RlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIE5vdGUgd2UgY2FzdCB0aGUgbnVsbHMgdG8gdGhlIEFOWSB0eXBlIGhlcmUgYmVjYXVzZTpcbiAgICAgICAgICAvLyAxKSBXZSB3YW50IHRoZSBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGRlY2xhcmVkIGFzIG5vbi1udWxsLCBvciBlbHNlIHdlXG4gICAgICAgICAgLy8gICAgbmVlZCBldmVuIG1vcmUgY2FzdHMgdGhyb3VnaG91dCB0aGlzIGNvZGUuIEFsbCBiZXRzIGFyZSBvZmYgaWYgYW5cbiAgICAgICAgICAvLyAgICBpbnN0YW5jZSBoYXMgYmVlbiBkZXN0cm95ZWQgYW5kIGEgbWV0aG9kIGlzIGNhbGxlZC5cbiAgICAgICAgICAvLyAyKSBXZSBkb24ndCB3YW50IHRvIGNhc3QgXCJ0aGlzXCIsIGJlY2F1c2Ugd2Ugd2FudCB0eXBlLWF3YXJlIG9wdGltaXphdGlvbnNcbiAgICAgICAgICAvLyAgICB0byBrbm93IHdoaWNoIHByb3BlcnRpZXMgd2UncmUgc2V0dGluZy5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7IVNldDwhSW5lcnROb2RlPn0gQSBjb3B5IG9mIHRoaXMgSW5lcnRSb290J3MgbWFuYWdlZCBub2RlcyBzZXQuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYWtlU3VidHJlZVVuZm9jdXNhYmxlJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5fdmlzaXROb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHN0YXJ0Tm9kZSkpIHtcbiAgICAgICAgICAgIC8vIHN0YXJ0Tm9kZSBtYXkgYmUgaW4gc2hhZG93IERPTSwgc28gZmluZCBpdHMgbmVhcmVzdCBzaGFkb3dSb290IHRvIGdldCB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICAgICAgICAgIHZhciBub2RlID0gc3RhcnROb2RlO1xuICAgICAgICAgICAgLyoqIEB0eXBlIHshU2hhZG93Um9vdHx1bmRlZmluZWR9ICovXG4gICAgICAgICAgICB2YXIgcm9vdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICByb290ID0gLyoqIEB0eXBlIHshU2hhZG93Um9vdH0gKi9ub2RlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm9vdCkge1xuICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gcm9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhcnROb2RlLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgICAgIC8vIEluIElFMTEsIGlmIGFuIGVsZW1lbnQgaXMgYWxyZWFkeSBmb2N1c2VkLCBhbmQgdGhlbiBzZXQgdG8gdGFiaW5kZXg9LTFcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYmx1cigpIHdpbGwgbm90IGFjdHVhbGx5IG1vdmUgdGhlIGZvY3VzLlxuICAgICAgICAgICAgLy8gVG8gd29yayBhcm91bmQgdGhpcyB3ZSBjYWxsIGZvY3VzKCkgb24gdGhlIGJvZHkgaW5zdGVhZC5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdmlzaXROb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92aXNpdE5vZGUobm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAvLyBNYW5hZ2UgYWRkZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgICAgIC8vIFVuLW1hbmFnZSByZW1vdmVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLnJlbW92ZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlU3VidHJlZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycpIHtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAndGFiaW5kZXgnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmUtaW5pdGlhbGlzZSBpbmVydCBub2RlIGlmIHRhYmluZGV4IGNoYW5nZXNcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHRhcmdldCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiByZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2luZXJ0JyAmJiB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBuZXcgaW5lcnQgcm9vdCBpcyBhZGRlZCwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMgYW5kIG1ha2Ugc3VyZSBpdCBrbm93cyBhYm91dCB0aGVcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IG1hbmFnZWQgbm9kZXMgZnJvbSB0aGlzIGluZXJ0IHN1YnJvb3QuXG4gICAgICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChtYW5hZ2VkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5jb250YWlucyhtYW5hZ2VkTm9kZS5ub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydFN1YnJvb3QuX21hbmFnZU5vZGUobWFuYWdlZE5vZGUubm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdtYW5hZ2VkTm9kZXMnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNldCh0aGlzLl9tYW5hZ2VkTm9kZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzU2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9zdHJpbmd9IGFyaWFIaWRkZW4gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChhcmlhSGlkZGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gYXJpYUhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/c3RyaW5nfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0Um9vdDtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBgSW5lcnROb2RlYCBpbml0aWFsaXNlcyBhbmQgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBub2RlLlxuICAgICAqIEEgbm9kZSBpcyBpbmVydCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2Ygb25lIG9yIG1vcmUgaW5lcnQgcm9vdCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIE9uIGNvbnN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgc2F2ZXMgdGhlIGV4aXN0aW5nIGB0YWJpbmRleGAgdmFsdWUgZm9yIHRoZSBub2RlLCBpZiBhbnksIGFuZFxuICAgICAqIGVpdGhlciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBvciBzZXRzIGl0IHRvIGAtMWAsIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50XG4gICAgICogaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUgb3Igbm90LlxuICAgICAqXG4gICAgICogYEluZXJ0Tm9kZWAgbWFpbnRhaW5zIGEgc2V0IG9mIGBJbmVydFJvb3RgcyB3aGljaCBhcmUgZGVzY2VuZGFudHMgb2YgdGhpcyBgSW5lcnROb2RlYC4gV2hlbiBhblxuICAgICAqIGBJbmVydFJvb3RgIGlzIGRlc3Ryb3llZCwgYW5kIGNhbGxzIGBJbmVydE1hbmFnZXIuZGVyZWdpc3RlcigpYCwgdGhlIGBJbmVydE1hbmFnZXJgIG5vdGlmaWVzIHRoZVxuICAgICAqIGBJbmVydE5vZGVgIHZpYSBgcmVtb3ZlSW5lcnRSb290KClgLCB3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIHRoZSBgSW5lcnROb2RlYCBpZiBubyBgSW5lcnRSb290YHNcbiAgICAgKiByZW1haW4gaW4gdGhlIHNldC4gT24gZGVzdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHJlaW5zdGF0ZXMgdGhlIHN0b3JlZCBgdGFiaW5kZXhgIGlmIG9uZSBleGlzdHMsXG4gICAgICogb3IgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgaWYgdGhlIGVsZW1lbnQgaXMgaW50cmluc2ljYWxseSBmb2N1c2FibGUuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgQSBmb2N1c2FibGUgZWxlbWVudCB0byBiZSBtYWRlIGluZXJ0LlxuICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3QgVGhlIGluZXJ0IHJvb3QgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggdGhpcyBpbmVydCBub2RlLlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IU5vZGV9ICovXG4gICAgICAgIHRoaXMuX25vZGUgPSBub2RlO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IGZhbHNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnRSb290Pn0gVGhlIHNldCBvZiBkZXNjZW5kYW50IGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiAgICBJZiBhbmQgb25seSBpZiB0aGlzIHNldCBiZWNvbWVzIGVtcHR5LCB0aGlzIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBTZXQoW2luZXJ0Um9vdF0pO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7P251bWJlcn0gKi9cbiAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IG51bGw7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIGFueSBwcmlvciB0YWJpbmRleCBpbmZvIGFuZCBtYWtlIHRoaXMgbm9kZSB1bnRhYmJhYmxlXG4gICAgICAgIHRoaXMuZW5zdXJlVW50YWJiYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuXG4gICAgICAgKiBUaGlzIG1ha2VzIHRoZSBtYW5hZ2VkIG5vZGUgZm9jdXNhYmxlIGFnYWluIGFuZCBkZWxldGVzIGFsbCBvZiB0aGUgcHJldmlvdXNseSBzdG9yZWQgc3RhdGUuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnROb2RlLCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX25vZGUgJiYgdGhpcy5fbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RcbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5lcnRcbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE1hbmFnZXIsIFt7XG4gICAgICAgIGtleTogJ3NldEluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEluZXJ0KHJvb3QsIGluZXJ0KSB7XG4gICAgICAgICAgaWYgKGluZXJ0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IGluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGluZXJ0Um9vdCA9IG5ldyBJbmVydFJvb3Qocm9vdCwgdGhpcyk7XG4gICAgICAgICAgICByb290LnNldEF0dHJpYnV0ZSgnaW5lcnQnLCAnJyk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzLnNldChyb290LCBpbmVydFJvb3QpO1xuICAgICAgICAgICAgLy8gSWYgbm90IGNvbnRhaW5lZCBpbiB0aGUgZG9jdW1lbnQsIGl0IG11c3QgYmUgaW4gYSBzaGFkb3dSb290LlxuICAgICAgICAgICAgLy8gRW5zdXJlIGluZXJ0IHN0eWxlcyBhcmUgYWRkZWQgdGhlcmUuXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RvY3VtZW50LmJvZHkuY29udGFpbnMocm9vdCkpIHtcbiAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHJvb3QucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZVR5cGUgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgICBhZGRJbmVydFN0eWxlKHBhcmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5lcnRSb290cy5oYXMocm9vdCkpIHtcbiAgICAgICAgICAgICAgLy8gZWxlbWVudCBpcyBhbHJlYWR5IG5vbi1pbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfaW5lcnRSb290ID0gdGhpcy5faW5lcnRSb290cy5nZXQocm9vdCk7XG4gICAgICAgICAgICBfaW5lcnRSb290LmRlc3RydWN0b3IoKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHNbJ2RlbGV0ZSddKHJvb3QpO1xuICAgICAgICAgICAgcm9vdC5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgSW5lcnRSb290IG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBpbmVydCByb290IGVsZW1lbnQsIGlmIGFueS5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnRSb290fHVuZGVmaW5lZH1cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZXJ0Um9vdChlbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2luZXJ0Um9vdHMuZ2V0KGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIG5vZGUuXG4gICAgICAgICAqIEluIHRoZSBjYXNlIHdoZXJlIHRoZSBub2RlIGhhcyBhIHByZXZpb3VzbHkgZXhpc3RpbmcgaW5lcnQgcm9vdCwgdGhpcyBpbmVydCByb290IHdpbGxcbiAgICAgICAgICogYmUgYWRkZWQgdG8gaXRzIHNldCBvZiBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHshSW5lcnROb2RlfSBpbmVydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBub2RlIHdhcyBhbHJlYWR5IGluIGFuIGluZXJ0IHN1YnRyZWVcbiAgICAgICAgICAgIGluZXJ0Tm9kZS5hZGRJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5lcnROb2RlID0gbmV3IEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5zZXQobm9kZSwgaW5lcnROb2RlKTtcblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGUtcmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gaW5lcnQgbm9kZS5cbiAgICAgICAgICogUmVtb3ZlcyB0aGUgaW5lcnQgcm9vdCBmcm9tIHRoZSBJbmVydE5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMsIGFuZCByZW1vdmUgdGhlIGluZXJ0XG4gICAgICAgICAqIG5vZGUgZnJvbSB0aGUgSW5lcnRNYW5hZ2VyJ3Mgc2V0IG9mIG1hbmFnZWQgbm9kZXMgaWYgaXQgaXMgZGVzdHJveWVkLlxuICAgICAgICAgKiBJZiB0aGUgbm9kZSBpcyBub3QgY3VycmVudGx5IG1hbmFnZWQsIHRoaXMgaXMgZXNzZW50aWFsbHkgYSBuby1vcC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKiBAcmV0dXJuIHs/SW5lcnROb2RlfSBUaGUgcG90ZW50aWFsbHkgZGVzdHJveWVkIEluZXJ0Tm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBub2RlLCBpZiBhbnkuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlcmVnaXN0ZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVyZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoIWluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5lcnROb2RlLnJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbmVydE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIGRvY3VtZW50IGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25Eb2N1bWVudExvYWRlZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgICAvLyBGaW5kIGFsbCBpbmVydCByb290cyBpbiBkb2N1bWVudCBhbmQgbWFrZSB0aGVtIGFjdHVhbGx5IGluZXJ0LlxuICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbCh0aGlzLl9kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBDb21tZW50IHRoaXMgb3V0IHRvIHVzZSBwcm9ncmFtbWF0aWMgQVBJIG9ubHkuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9kb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgeyBhdHRyaWJ1dGVzOiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfd2F0Y2hGb3JJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfd2F0Y2hGb3JJbmVydChyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgc3dpdGNoIChyZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdjaGlsZExpc3QnOlxuICAgICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdbaW5lcnRdJykpO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChub2RlLCAnW2luZXJ0XScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGluZXJ0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAhPT0gJ2luZXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFIVE1MRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXNjZW5kIGludG8gbm9kZTpcbiAgICAgICAgLy8gSWYgaXQgaGFzIGEgU2hhZG93Um9vdCwgaWdub3JlIGFsbCBjaGlsZCBlbGVtZW50cyAtIHRoZXNlIHdpbGwgYmUgcGlja2VkXG4gICAgICAgIC8vIHVwIGJ5IHRoZSA8Y29udGVudD4gb3IgPHNoYWRvdz4gZWxlbWVudHMuIERlc2NlbmQgc3RyYWlnaHQgaW50byB0aGVcbiAgICAgICAgLy8gU2hhZG93Um9vdC5cbiAgICAgICAgdmFyIHNoYWRvd1Jvb3QgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgIGlmIChzaGFkb3dSb290KSB7XG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzaGFkb3dSb290LCBjYWxsYmFjaywgc2hhZG93Um9vdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8Y29udGVudD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGRpc3RyaWJ1dGVkIGVsZW1lbnRzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdjb250ZW50Jykge1xuICAgICAgICAgIHZhciBjb250ZW50ID0gLyoqIEB0eXBlIHshSFRNTENvbnRlbnRFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZpZXMgaWYgU2hhZG93RG9tIHYwIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgZGlzdHJpYnV0ZWROb2RlcyA9IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcyA/IGNvbnRlbnQuZ2V0RGlzdHJpYnV0ZWROb2RlcygpIDogW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGRpc3RyaWJ1dGVkTm9kZXNbaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxzbG90PiBlbGVtZW50LCBkZXNjZW5kIGludG8gYXNzaWduZWQgbm9kZXMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgdmFyIHNsb3QgPSAvKiogQHR5cGUgeyFIVE1MU2xvdEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZnkgaWYgU2hhZG93RG9tIHYxIGlzIHN1cHBvcnRlZC5cbiAgICAgICAgICB2YXIgX2Rpc3RyaWJ1dGVkTm9kZXMgPSBzbG90LmFzc2lnbmVkTm9kZXMgPyBzbG90LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pIDogW107XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IF9kaXN0cmlidXRlZE5vZGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhfZGlzdHJpYnV0ZWROb2Rlc1tfaV0sIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXMgbmVpdGhlciB0aGUgcGFyZW50IG9mIGEgU2hhZG93Um9vdCwgYSA8Y29udGVudD4gZWxlbWVudCwgYSA8c2xvdD5cbiAgICAgIC8vIGVsZW1lbnQsIG5vciBhIDxzaGFkb3c+IGVsZW1lbnQgcmVjdXJzZSBub3JtYWxseS5cbiAgICAgIHZhciBjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIHdoaWxlIChjaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoY2hpbGQsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpO1xuICAgICAgICBjaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBzdHlsZSBlbGVtZW50IHRvIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIGluZXJ0IHNwZWNpZmljIHN0eWxlc1xuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJbmVydFN0eWxlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlI2luZXJ0LXN0eWxlLCBsaW5rI2luZXJ0LXN0eWxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5lcnQtc3R5bGUnKTtcbiAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gJ1xcbicgKyAnW2luZXJ0XSB7XFxuJyArICcgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbicgKyAnICBjdXJzb3I6IGRlZmF1bHQ7XFxuJyArICd9XFxuJyArICdcXG4nICsgJ1tpbmVydF0sIFtpbmVydF0gKiB7XFxuJyArICcgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICd9XFxuJztcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGlmICghSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqIEB0aGlzIHshSFRNTEVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc0FyZ3VtZW50cztcbiIsImltcG9ydCBiYXNlSXNBcmd1bWVudHMgZnJvbSAnLi9fYmFzZUlzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgLy8gVXNlIGB1dGlsLnR5cGVzYCBmb3IgTm9kZS5qcyAxMCsuXG4gICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKCd1dGlsJykudHlwZXM7XG5cbiAgICBpZiAodHlwZXMpIHtcbiAgICAgIHJldHVybiB0eXBlcztcbiAgICB9XG5cbiAgICAvLyBMZWdhY3kgYHByb2Nlc3MuYmluZGluZygndXRpbCcpYCBmb3IgTm9kZS5qcyA8IDEwLlxuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGVVdGlsO1xuIiwiaW1wb3J0IGJhc2VJc1R5cGVkQXJyYXkgZnJvbSAnLi9fYmFzZUlzVHlwZWRBcnJheS5qcyc7XG5pbXBvcnQgYmFzZVVuYXJ5IGZyb20gJy4vX2Jhc2VVbmFyeS5qcyc7XG5pbXBvcnQgbm9kZVV0aWwgZnJvbSAnLi9fbm9kZVV0aWwuanMnO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgaXNUeXBlZEFycmF5O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZUVsZW1lbnRTaXplIH0gZnJvbSBcIi4vdXNlLWVsZW1lbnQtc2l6ZVwiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTG9naWNhbERpcmVjdGlvblwiLCBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRDb21wdXRlZFN0eWxlcywgc2V0Q29tcHV0ZWRTdHlsZXNdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwsIHJldHVybk51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgcmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxuICAgIC8vICAgQS4gVGhlcmUncyBubyB3YXkgdG8gd2F0Y2ggZm9yIENTUyBzdHlsZSBjaGFuZ2VzXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXG4gICAgLy9cbiAgICAvLyBBcyBhIHNvbHV0aW9uLCBoZXJlJ3MgYSBjaGVhcCB3b3JrYXJvdW5kIHRoYXQgY2hlY2tzIHdoZW4gdGhlIGVsZW1lbnQncyBzaXplIGhhcyBjaGFuZ2VkLFxuICAgIC8vIGFuZCBpZiBzbywgdGVzdHMgaWYgdGhlIHdyaXRpbmcgbW9kZSBoYXMgY2hhbmdlZCB0b28uXG4gICAgLy9cbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgYXQgbGVhc3Qgc29tZSBudW1iZXIgb2YgY2FzZXMsIGJ1dCBhIGJldHRlciBzb2x1dGlvbiBpcyBzdGlsbCBuZWVkZWQuXG4gICAgY29uc3QgeyB1c2VFbGVtZW50U2l6ZVByb3BzIH0gPSB1c2VFbGVtZW50U2l6ZSh7IG9uU2l6ZUNoYW5nZTogdXNlQ2FsbGJhY2soXyA9PiBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U/LihnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpKSwgW10pIH0pO1xuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlcykge1xuICAgICAgICAgICAgY29uc3QgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XG4gICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBjb25zdCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjMgPSBnZXRQaHlzaWNhbExlZnRUb3AoYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSkpO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiAocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKHVzZU1lcmdlZFByb3BzKHJlZkVsZW1lbnRQcm9wcywgdXNlRWxlbWVudFNpemVQcm9wcyksIHByb3BzKSxcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaXplOiBjb252ZXJ0RWxlbWVudFNpemUsXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpZGUsXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsU2lkZVxuICAgIH07XG59XG4vLyBQb3NpdGlvbiByZXF1aXJlcyB1cyB0byBzb21ldGltZXMgdXNlIG9uZSBwcm9wZXJ0eSAobGlrZSBgbGVmdGApXG4vLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXG5mdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXG4gICAgcmV0dXJuIFwibGVmdFwiOyByZXR1cm4gXCJ0b3BcIjsgfVxuZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcbiAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxuICAgIHJldHVybiBcImhlaWdodFwiOyByZXR1cm4gbnVsbDsgfVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2dpY2FsRGlyZWN0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmZ1bmN0aW9uIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIHNob3csIHBoYXNlKSB7XG4gICAgaWYgKHBoYXNlKVxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9LSR7cGhhc2V9YDtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7c2hvd31gO1xufVxubGV0IGR1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBlO1xufVxuLyoqXG4gKiBBIGhvb2sgdGhhdCBhZGRzICYgcmVtb3ZlcyBjbGFzcyBuYW1lcyBpbiBhIHdheSB0aGF0IGZhY2lsaXRhdGVzIHByb3BlciB0cmFuc2l0aW9ucy5cbiAqXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgY29udGFpbnMgdGhlIHByb3BzIHJlbGF0ZWQgZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVGhlIHNlY29uZCBhcmd1bWVudCBjb250YWlucyBhbnkgb3RoZXIgcHJvcHMgeW91IG1pZ2h0IHdhbnQgbWVyZ2VkIGludG8gdGhlIGZpbmFsIHByb2R1Y3QgKHRoZXNlIGFyZSBub3QgcmVhZCBvciBtYW5pcHVsYXRlZCBvciBhbnl0aGluZyAtLSBpdCdzIHB1cmVseSBzaG9ydGhhbmQgYW5kIGNhbiBiZSBvbWl0dGVkIHdpdGggYHt9YCBhbmQgdGhlbiB5b3VyIG93biBgdXNlTWVyZ2VkUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb25hYmxlKHsgbWVhc3VyZSwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgb25UcmFuc2l0aW9uVXBkYXRlLCBleGl0VmlzaWJpbGl0eSwgZHVyYXRpb24sIHNob3csIHJlZiB9KSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgW3BoYXNlLCBzZXRQaGFzZV0gPSB1c2VTdGF0ZShhbmltYXRlT25Nb3VudCA/IFwiaW5pdFwiIDogbnVsbCk7XG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKHNob3cgPT0gbnVsbCA/IG51bGwgOiBzaG93ID8gXCJlbnRlclwiIDogXCJleGl0XCIpO1xuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZUhlaWdodCwgc2V0U3VyZmFjZUhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZVgsIHNldFN1cmZhY2VYXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdXaWR0aCwgc2V0VHJhbnNpdGlvbmluZ1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nSGVpZ2h0LCBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdZLCBzZXRUcmFuc2l0aW9uaW5nWV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogc2V0TG9naWNhbERpcmVjdGlvbkluZm8gfSk7XG4gICAgY29uc3Qgb25UcmFuc2l0aW9uVXBkYXRlUmVmID0gdXNlUmVmKG9uVHJhbnNpdGlvblVwZGF0ZSk7XG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IGR1cmF0aW9uUmVmID0gdXNlUmVmKGR1cmF0aW9uKTtcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0b29MYXRlVGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldEVsZW1lbnQoKSAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQgPSBvblRyYW5zaXRpb25VcGRhdGU7IH0sIFtvblRyYW5zaXRpb25VcGRhdGVdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBwaGFzZVJlZi5jdXJyZW50ID0gcGhhc2U7IH0sIFtwaGFzZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZHVyYXRpb25SZWYuY3VycmVudCA9IGR1cmF0aW9uOyB9LCBbZHVyYXRpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIHBoYXNlKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQ/LihkaXJlY3Rpb24sIHBoYXNlKTtcbiAgICB9LCBbZGlyZWN0aW9uLCBwaGFzZV0pO1xuICAgIC8vIEV2ZXJ5IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gXCJ0cmFuc2l0aW9uXCIsIGFkZCBvdXIgdHJhbnNpdGlvbiB0aW1lb3V0IHRpbWVvdXRzXG4gICAgLy8gdG8gY2F0Y2ggYW55IHRpbWUgb25UcmFuc2l0aW9uRW5kIGZhaWxzIHRvIHJlcG9ydCBmb3Igd2hhdGV2ZXIgcmVhc29uIHRvIGJlIHNhZmVcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IGR1cmF0aW9uUmVmLmN1cnJlbnQgPz8gMTAwMDtcbiAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b29MYXRlVGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgfSwgW3BoYXNlXSk7XG4gICAgLy8gQW55IHRpbWUgXCJzaG93XCIgY2hhbmdlcywgdXBkYXRlIG91ciBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgIC8vIEluIGFkZGl0aW9uLCBtZWFzdXJlIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGlmIHJlcXVlc3RlZC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBzaG93ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGhhc2UgPSBwaGFzZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gU3dhcCBvdXIgZGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoc2hvdylcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJlbnRlclwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJleGl0XCIpO1xuICAgICAgICAgICAgc2V0UGhhc2UocHJldmlvdXNQaGFzZSA9PT0gbnVsbCA/IFwiZmluYWxpemVcIiA6IFwiaW5pdFwiKTtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1koeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzUGhhc2UgPT09IFwiZmluYWxpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBnb2luZyB0byBiZSBtZXNzaW5nIHdpdGggdGhlIGFjdHVhbCBlbGVtZW50J3MgY2xhc3MsIFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSdsbCB3YW50IGFuIGVhc3kgd2F5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2t1cCA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsIGAke2NsYXNzQmFzZX0tZXhpdGAsIGAke2NsYXNzQmFzZX0tZXhpdC1pbml0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWV4aXQtZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVXaXRob3V0VHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZVdpdGhvdXRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVkoeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBiYWNrdXA7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaG93LCBtZWFzdXJlLCBjbGFzc0Jhc2VdKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBpbml0LCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIHNjcmVlbiBpcyBwYWludGVkLFxuICAgIC8vIGNoYW5nZSB0aGUgcGhhc2UgdG8gXCJ0cmFuc2l0aW9uXCIgYW5kIHJlLXJlbmRlciAoKS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgICAgICAgICAgaWYgKHBoYXNlID09PSBcImluaXRcIikge1xuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XG4gICAgICAgICAgICAgICAgLy8gTm93IHNldCBvdXIgdHJhbnNpdGlvbiBzdHlsZS5cbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcInRyYW5zaXRpb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3BoYXNlLCBtZWFzdXJlXSk7XG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmlubGluZURpcmVjdGlvbjtcbiAgICBjb25zdCBibG9ja0RpcmVjdGlvbiA9IGxvZ2ljYWxEaXJlY3Rpb25JbmZvPy5ibG9ja0RpcmVjdGlvbjtcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGhhc2UsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgdXNlVHJhbnNpdGlvbmFibGVQcm9wczogZnVuY3Rpb24gdXNlVHJhbnNpdGlvbmFibGVQcm9wcyhvdGhlclByb3BzKSB7XG4gICAgICAgICAgICBsZXQgYWxtb3N0RG9uZSA9IHVzZU1lcmdlZFByb3BzKHJlZkVsZW1lbnRQcm9wcywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzKHtcbiAgICAgICAgICAgICAgICByZWYsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHJlbW92ZUVtcHR5KHtcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXhgXTogc3VyZmFjZVgsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS15YF06IHN1cmZhY2VZLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2Utd2lkdGhgXTogc3VyZmFjZVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaGVpZ2h0YF06IHN1cmZhY2VIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1pbmxpbmUtaW5zZXRgXTogc3VyZmFjZUlubGluZUluc2V0LFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2staW5zZXRgXTogc3VyZmFjZUJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1pbmxpbmUtc2l6ZWBdOiBzdXJmYWNlSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWJsb2NrLXNpemVgXTogc3VyZmFjZUJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXhgXTogdHJhbnNpdGlvbmluZ1gsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy15YF06IHRyYW5zaXRpb25pbmdZLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctd2lkdGhgXTogdHJhbnNpdGlvbmluZ1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaGVpZ2h0YF06IHRyYW5zaXRpb25pbmdIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtaW5zZXRgXTogdHJhbnNpdGlvbmluZ0lubGluZUluc2V0LFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctYmxvY2staW5zZXRgXTogdHJhbnNpdGlvbmluZ0Jsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtc2l6ZWBdOiB0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLXNpemVgXTogdHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG9uVHJhbnNpdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAuLi4oeyBcImFyaWEtaGlkZGVuXCI6IHNob3cgPyB1bmRlZmluZWQgOiBcInRydWVcIiB9KSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goZGlyZWN0aW9uICYmIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIGRpcmVjdGlvbiksIGRpcmVjdGlvbiAmJiBwaGFzZSAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24sIHBoYXNlKSwgZXhpdFZpc2liaWxpdHkgPT0gXCJyZW1vdmVkXCIgJiYgYCR7Y2xhc3NCYXNlfS1yZW1vdmVkLW9uLWV4aXRgLCBleGl0VmlzaWJpbGl0eSA9PSBcInZpc2libGVcIiAmJiBgJHtjbGFzc0Jhc2V9LXZpc2libGUtb24tZXhpdGAsIGAke2NsYXNzQmFzZX0taW5saW5lLWRpcmVjdGlvbi0ke2lubGluZURpcmVjdGlvbiA/PyBcImx0clwifWAsIGAke2NsYXNzQmFzZX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcyhhbG1vc3REb25lLCBvdGhlclByb3BzKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiByZW1vdmVFbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG9iaikuZmlsdGVyKChbXywgdl0pID0+IHYgIT0gbnVsbCkpO1xufVxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0ICp3cmFwcyBhbiBIVE1MRWxlbWVudCBvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQqIGFuZCBhbGxvd3MgaXQgdG8gdXNlIENTUyB0byB0cmFuc2l0aW9uIGluL291dC5cbiAqIENvbWJpbmVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gaXQsIHRoZSBwcm9wcyBpdHMgY2hpbGQgaGFzLCBhbmQgdGhlIHByb3BzIG5lZWRlZCBmb3IgdGhlIENTUyB0cmFuc2l0aW9uLCBhbmQgcGFzc2VzIHRoZW1cbiAqIGFsbCB0byB0aGUgY2hpbGQgZWxlbWVudCB5b3UgcHJvdmlkZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBtb3N0IGdlbmVyYWwgY29tcG9uZW50IHRoYXQgb3RoZXJzIHVzZSBhcyBhIGJhc2UuIEJ5IGRlZmF1bHQsIHRoaXMgY29tcG9uZW50IGJ5IGl0c2VsZiBkb2Vzbid0IGFjdHVhbGx5IGFkZCBhbnkgQ1NTIGNsYXNzZXMgdGhhdCBhbmltYXRlIGFueXRoaW5nIChsaWtlIG9wYWNpdHksIGZvciBleGFtcGxlKS5cbiAqIEl0IGFkZHMgY2xhc3NlcyBsaWtlIGB0cmFuc2l0aW9uLWVudGVyLWZpbmFsaXplYCwgYnV0IHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgZS5nLiBgZmFkZWAgY2xhc3MgdGhhdCByZWFjdHMgdG8gaXQuXG4gKlxuICogVXNlIHRoaXMgaWYgdGhlIG90aGVyLCBtb3JlIHNwZWNpYWxpemVkIFRyYW5zaXRpb24gY29tcG9uZW50cyBkb24ndCBmaXQgeW91ciBuZWVkcy5cbiAqXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIHNob3c9e3Nob3d9IHsuLi51c2VDcmVhdGVGYWRlUHJvcHMoLi4uKX0+PGRpdj57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIHNob3c9e3Nob3d9PjxkaXYgey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXG4gKi9cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uYWJsZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24oeyBjaGlsZHJlbjogY2hpbGQsIGR1cmF0aW9uLCBjbGFzc0Jhc2UsIG1lYXN1cmUsIGV4aXRWaXNpYmlsaXR5LCBzaG93LCBvblRyYW5zaXRpb25VcGRhdGUsIGFuaW1hdGVPbk1vdW50LCBjaGlsZE1vdW50QmVoYXZpb3IsIC4uLnByb3BzIH0sIHIpIHtcbiAgICBjb25zdCBbaGFzU2hvd25PbmNlLCBzZXRIYXNTaG93bk9uY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNob3VsZFNldEhhc1Nob3duT25jZSA9IChoYXNTaG93bk9uY2UgPT09IGZhbHNlICYmIGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgc2hvdyA9PT0gdHJ1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHNob3VsZFNldEhhc1Nob3duT25jZSlcbiAgICAgICAgc2V0SGFzU2hvd25PbmNlKHRydWUpOyB9LCBbc2hvdWxkU2V0SGFzU2hvd25PbmNlXSk7XG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC13aGVuLXNob3dpbmdcIiAmJiAhc2hvdylcbiAgICAgICAgY2hpbGQgPSBoKFwiZGl2XCIsIG51bGwpO1xuICAgIGlmIChjaGlsZE1vdW50QmVoYXZpb3IgPT09IFwibW91bnQtb24tc2hvd1wiICYmICFzaG93ICYmIGhhc1Nob3duT25jZSA9PT0gZmFsc2UpXG4gICAgICAgIGNoaWxkID0gaChcImRpdlwiLCBudWxsKTtcbiAgICBpZiAoIWNoaWxkSXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgVHJhbnNpdGlvbmFibGUgY29tcG9uZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBjb21wb25lbnQgY2hpbGQgKGUuZy4gYSA8ZGl2IC8+LCBidXQgbm90IFxcXCJhIHN0cmluZ1xcXCIpLlwiKTtcbiAgICB9XG4gICAgY29uc3QgeyBkaXJlY3Rpb24sIHBoYXNlLCB1c2VUcmFuc2l0aW9uYWJsZVByb3BzIH0gPSB1c2VUcmFuc2l0aW9uYWJsZSh7IGNsYXNzQmFzZSwgZHVyYXRpb24sIG1lYXN1cmUsIHNob3csIGFuaW1hdGVPbk1vdW50LCBvblRyYW5zaXRpb25VcGRhdGUsIHJlZjogciwgZXhpdFZpc2liaWxpdHkgfSk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHModXNlVHJhbnNpdGlvbmFibGVQcm9wcyhwcm9wcyksIHsgLi4uY2hpbGQucHJvcHMsIHJlZjogY2hpbGQucmVmIH0pO1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlZFdpdGhDaGlsZHJlbik7XG59KTtcbmZ1bmN0aW9uIGNoaWxkSXNWTm9kZShjaGlsZCkge1xuICAgIGlmICghY2hpbGQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkICE9IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFwicHJvcHNcIiBpbiBjaGlsZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBDbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgLi4udXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIG90aGVyUHJvcHMpXG4gICAgfTtcbn1cbjtcbmV4cG9ydCBjb25zdCBDbGlwID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcCh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIC4uLnVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mYWRlYCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvdGhlclByb3BzKVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgaXQgaXMgYWJzb2x1dGVseSBwb3NzaWJsZSB0byB3cmFwIGFub3RoZXIgdHJhbnNpdGlvbiB3aXRoIGA8RmFkZT5gLFxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcbiAqIG9yIGp1c3QgZGlyZWN0bHkgYSBgPFRyYW5zaXRpb25hYmxlPmAgb24geW91ciBvd24uXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IENsaXAgfSBmcm9tIFwiLi9jbGlwXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbjtcbmV4cG9ydCBjb25zdCBDbGlwRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXBGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKENsaXAsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKlxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXG4gKlxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXG4gICAgICAgIC4uLnVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG90aGVyUHJvcHMpXG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cbiAqXG4gKiAqSW1wb3J0YW50KjogVGhpcyBjb21wb25lbnQgaXMgKm5vdCogZWZmaWNpZW50IGZvciB0aGUgYnJvd3NlciB0byBhbmltYXRlIVxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2UgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZSh7IGNsYXNzQmFzZSwgc2hvdywgbWluQmxvY2tTaXplLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcIi4vY29sbGFwc2VcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggQ29sbGFwc2UgYW5kIEZhZGUgZWZmZWN0cy5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYENvbGxhcHNlYCBgRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChDb2xsYXBzZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihzbGlkZVRhcmdldElubGluZSA/PyAxKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihzbGlkZVRhcmdldEJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldElubGluZSlcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBzbGlkZVRhcmdldElubGluZTsgfSwgW3NsaWRlVGFyZ2V0SW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHNsaWRlVGFyZ2V0QmxvY2spXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBzbGlkZVRhcmdldEJsb2NrOyB9LCBbc2xpZGVUYXJnZXRCbG9ja10pO1xuICAgIGlmIChzbGlkZVRhcmdldElubGluZSA9PSAwKVxuICAgICAgICBzbGlkZVRhcmdldElubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xuICAgIGlmIChzbGlkZVRhcmdldEJsb2NrID09IDApXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgLi4udXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXNsaWRlYCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc2xpZGUtdGFyZ2V0LWJsb2NrYF06IGAkeyhzbGlkZVRhcmdldEJsb2NrID8/IDApfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3RoZXJQcm9wcylcbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBGYWRlIGVmZmVjdHMuXG4gKlxuICogYHNsaWRlSW5saW5lPXsoaW5kZXggLSBzZWxlY3RlZEluZGV4KSAvIDEwfWAgd291bGQgbWFrZSB0aGUgZWxlbWVudCBsb29rIGxpa2UgaXQgZmFkZXMgb3V0IGJlZm9yZSBpdCB0cmF2ZWxzIHRvIGl0cyB0YXJnZXQgZGVzdGluYXRpb24uXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4gKHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICAuLi51c2VNZXJnZWRQcm9wcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tem9vbWAsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIG90aGVyUHJvcHMpXG4gICAgfSk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbSh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBab29tIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggWm9vbSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIFRoaXMgaXMgYW4gaWRlYWwgdGltZSB0byB1c2UgdGhlIG1pbmltdW0gc2l6ZSBab29tIHByb3BlcnRpZXMuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxuICovXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChab29tLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZVpvb21Qcm9wcyB9IGZyb20gXCIuL3pvb21cIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBab29tIGVmZmVjdHMuXG4gKlxuICogUHJvYmFibHkgYmVzdCBjb21iaW5lZCB3aXRoIGB1c2VDcmVhdGVGYWRlUHJvcHNgIChvciBqdXN0IHVzaW5nIGEgYFNsaWRlWm9vbUZhZGVgPykuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZUZhZGVab29tYCBgWm9vbWAgYEZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb20oeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGVab29tIH0gZnJvbSBcIi4vc2xpZGUtem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIFpvb20sIFNsaWRlLCBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IHNob3J0aGFuZCBmb3Igc29tZSBwcm9wIGNyZWF0aW9uIGFuZCBwcm9wIG1lcmdpbmcgZnVuY3Rpb25zLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVgIGBab29tYCBgRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gMTgwKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoZmxpcEFuZ2xlSW5saW5lKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IGZsaXBBbmdsZUlubGluZTsgfSwgW2ZsaXBBbmdsZUlubGluZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVCbG9jaylcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IGZsaXBBbmdsZUJsb2NrOyB9LCBbZmxpcEFuZ2xlQmxvY2tdKTtcbiAgICBpZiAoZmxpcEFuZ2xlSW5saW5lID09IDApXG4gICAgICAgIGZsaXBBbmdsZUlubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xuICAgIGlmIChmbGlwQW5nbGVCbG9jayA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICAuLi51c2VNZXJnZWRQcm9wcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmxpcGAsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1pbmxpbmVgXTogYCR7KGZsaXBBbmdsZUlubGluZSA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvdGhlclByb3BzKVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cbiAqXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgZmxpcElubGluZWAgYW5kIGBmbGlwQmxvY2tgLFxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxuICpcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZsaXAgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGbGlwKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mbGlwLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBpbmxpbmUsIGNsYXNzQmFzZSB9LCBvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZSA/PyBcInRyYW5zaXRpb25cIn0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuLyoqXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cbiAqXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXG4gKlxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cbiAqXG4gKiBMb25nIHdheSBvZiBzYXlpbmcsIGlmIHlvdSBnZXQgYSBjcnlwdGljIGVycm9yIHdpdGggdGhpcyBjb21wb25lbnQsIG1ha2Ugc3VyZSBpdCBoYXMgYSBzaW5nbGUgYDxkaXY+YCBjaGlsZCBvciBzb21ldGhpbmcuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW4sIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBpbmxpbmUgfSwgeyAuLi5wLCByZWYgfSk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHModHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZHJlbiwgbWVyZ2VkV2l0aENoaWxkcmVuKTtcbn0pO1xuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhXCIsXG4gICAgXCJhYmJyXCIsXG4gICAgXCJhY3JvbnltXCIsXG4gICAgXCJhdWRpb1wiLFxuICAgIFwiYlwiLFxuICAgIFwiYmRpXCIsXG4gICAgXCJiZG9cIixcbiAgICBcImJpZ1wiLFxuICAgIFwiYnJcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiY2FudmFzXCIsXG4gICAgXCJjaXRlXCIsXG4gICAgXCJjb2RlXCIsXG4gICAgXCJkYXRhXCIsXG4gICAgXCJkYXRhbGlzdFwiLFxuICAgIFwiZGVsXCIsXG4gICAgXCJkZm5cIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaVwiLFxuICAgIFwiaWZyYW1lXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnNcIixcbiAgICBcImtiZFwiLFxuICAgIFwibGFiZWxcIixcbiAgICBcIm1hcFwiLFxuICAgIFwibWFya1wiLFxuICAgIFwibWV0ZXJcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGljdHVyZVwiLFxuICAgIFwicHJvZ3Jlc3NcIixcbiAgICBcInFcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNhbXBcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJzbG90XCIsXG4gICAgXCJzbWFsbFwiLFxuICAgIFwic3BhblwiLFxuICAgIFwic3Ryb25nXCIsXG4gICAgXCJzdWJcIixcbiAgICBcInN1cFwiLFxuICAgIFwic3ZnXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBcInRpbWVcIixcbiAgICBcInVcIixcbiAgICBcInR0XCIsXG4gICAgXCJ2YXJcIixcbiAgICBcInZpZGVvXCIsXG4gICAgXCJ3YnJcIlxuXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsic2xpY2UiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsImkiLCJyZW1vdmVOb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIkVNUFRZX0FSUiIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2aW91c0NvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwiRU1QVFkiLCJvbGRCZWZvcmVEaWZmIiwib3B0aW9ucyIsIl9fYiIsIm9sZEJlZm9yZVJlbmRlciIsIl9fciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIl9fYyIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJ0eXBlIiwiX19oIiwiaG9va3MiLCJfX0giLCJfXyIsImxlbmd0aCIsInB1c2giLCJfX1YiLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJ1bmRlZmluZWQiLCJjdXJyZW50VmFsdWUiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsIl9oYXNTY3VGcm9tSG9va3MiLCJwcmV2U2N1Iiwic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwicCIsInMiLCJjIiwic3RhdGVIb29rcyIsImZpbHRlciIsIngiLCJldmVyeSIsIl9fTiIsImNhbGwiLCJ0aGlzIiwic2hvdWxkVXBkYXRlIiwiZm9yRWFjaCIsImhvb2tJdGVtIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJfX3MiLCJhcmdzQ2hhbmdlZCIsIl9wZW5kaW5nQXJncyIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImNvbXBvbmVudCIsInNoaWZ0IiwiX19QIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJfX3YiLCJ2bm9kZSIsIl9fbSIsImluZGV4T2YiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZnRlck5leHRGcmFtZSIsImNvbW1pdFF1ZXVlIiwic29tZSIsImNiIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImhvb2siLCJjb21wIiwiY2xlYW51cCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsInNoYWxsb3dEaWZmZXJzIiwiYSIsImIiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkNvbXBvbmVudCIsIkZvcndhcmRlZENvbXBvbmVudCIsImZvcndhcmRSZWYiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImNoaWxkcmVuIiwibGhzIiwicmhzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiciIsInQiLCJuIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xzeCIsImFyZ3VtZW50cyIsInVzZU1lcmdlZENsYXNzZXMiLCJjbGFzcyIsImxoc0NsYXNzIiwiY2xhc3NOYW1lIiwibGhzQ2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwic3BsaXQiLCJyaHNDbGFzc2VzIiwiYWxsQ2xhc3NlcyIsIlNldCIsImZyb20iLCJqb2luIiwicHJvY2Vzc1JlZiIsImluc3RhbmNlIiwicmVmIiwiY29uc29sZSIsImFzc2VydCIsInVzZU1lcmdlZFJlZnMiLCJjb21iaW5lZCIsInN0eWxlU3RyaW5nVG9PYmplY3QiLCJzdHlsZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwibWFwIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwiX29iamVjdFNwcmVhZCIsImxvZyIsIndhcm4iLCJ1c2VNZXJnZWRQcm9wcyIsImxoc0FsbCIsInJoc0FsbCIsImxoc01pc2MiLCJfZXhjbHVkZWQiLCJyaHNNaXNjIiwicmV0IiwicmhzRW50cmllcyIsImVudHJpZXMiLCJyaHNLZXlVIiwicmhzVmFsdWUiLCJyaHNLZXkiLCJsaHNWYWx1ZSIsIm1lcmdlZCIsIm1lcmdlRnVuY3Rpb25zIiwibHYiLCJydiIsIlByb21pc2UiLCJhbGwiLCJ1c2VFbnN1cmVTdGFiaWxpdHkiLCJwYXJlbnRIb29rTmFtZSIsInZhbHVlcyIsInVzZUhlbHBlciIsInZhbHVlIiwiaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkiLCJzaG93bkVycm9yIiwiZXJyb3IiLCJkZWJvdW5jZVJlbmRlcmluZyIsInVzZVBhc3NpdmVTdGF0ZSIsIm9uQ2hhbmdlIiwiZ2V0SW5pdGlhbFZhbHVlIiwiY3VzdG9tRGVib3VuY2VSZW5kZXJpbmciLCJ2YWx1ZVJlZiIsIlVuc2V0Iiwid2FybmluZ1JlZiIsImNsZWFudXBDYWxsYmFja1JlZiIsIm9uU2hvdWxkQ2xlYW5VcCIsImNsZWFudXBDYWxsYmFjayIsInRyeUVuc3VyZVZhbHVlIiwiZXgiLCJnZXRWYWx1ZSIsInByZXZEZXAiLCJzZXRWYWx1ZSIsIkZ1bmN0aW9uIiwibmV4dERlcCIsIlN5bWJvbCIsInJldHVybk51bGwiLCJwcmV2aW91c0lucHV0cyIsIk1hcCIsInRvUnVuIiwiY29tbWl0TmFtZSIsIm9yaWdpbmFsQ29tbWl0IiwibmV3Q29tbWl0IiwiaWQiLCJlZmZlY3RJbmZvIiwib2xkSW5wdXRzIiwiZ2V0IiwiaW5wdXRzIiwiZWZmZWN0Iiwic2V0IiwiY2xlYXIiLCJjcmVhdGVDb250ZXh0IiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJpc093biIsInRhZyIsInVubWFza2VkIiwicmVzdWx0Iiwib2JqZWN0VG9TdHJpbmciLCJudWxsVGFnIiwidW5kZWZpbmVkVGFnIiwiYmFzZUdldFRhZyIsImlzT2JqZWN0TGlrZSIsImdldERvY3VtZW50IiwiZWxlbWVudCIsIm93bmVyRG9jdW1lbnQiLCJkb2N1bWVudCIsIndpbmRvdyIsImdsb2JhbFRoaXMiLCJ1c2VSZWZFbGVtZW50Iiwib25FbGVtZW50Q2hhbmdlIiwib25Nb3VudCIsIm9uVW5tb3VudCIsImhhbmRsZXIiLCJwcmV2VmFsdWUiLCJnZXRFbGVtZW50Iiwic2V0RWxlbWVudCIsInJ1bkltbWVkaWF0ZWx5IiwicmVmRWxlbWVudFByb3BzIiwidXNlRWxlbWVudFNpemUiLCJnZXRPYnNlcnZlQm94Iiwib25TaXplQ2hhbmdlIiwiZ2V0U2l6ZSIsInNldFNpemUiLCJjdXJyZW50T2JzZXJ2ZUJveCIsIm5lZWRBTmV3T2JzZXJ2ZXIiLCJvYnNlcnZlQm94IiwiZGVmYXVsdFZpZXciLCJoYW5kbGVVcGRhdGUiLCJpc0Nvbm5lY3RlZCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudExlZnQiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0TGVmdCIsImNsaWVudFRvcCIsInNjcm9sbFRvcCIsIm9mZnNldFRvcCIsIm9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJfZW50cmllcyIsIm9ic2VydmUiLCJib3giLCJkaXNjb25uZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlRWxlbWVudFNpemVQcm9wcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9vbk11dGF0aW9uIiwiYmluZCIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGVzdHJ1Y3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJib2R5IiwiY29udGFpbnMiLCJub2RlVHlwZSIsIk5vZGUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiYmx1ciIsImZvY3VzIiwiRUxFTUVOVF9OT0RFIiwiX2Fkb3B0SW5lcnRSb290IiwiX21hbmFnZU5vZGUiLCJyZWdpc3RlciIsImFkZCIsImRlcmVnaXN0ZXIiLCJfdW5tYW5hZ2VTdWJ0cmVlIiwiX3RoaXMzIiwiaW5lcnRTdWJyb290IiwiZ2V0SW5lcnRSb290Iiwic2V0SW5lcnQiLCJtYW5hZ2VkTm9kZXMiLCJzYXZlZEluZXJ0Tm9kZSIsInJlY29yZHMiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsIkhUTUxFbGVtZW50IiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJjb25zdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJyZW1vdmUiLCJzcGxpY2UiLCJwb3AiLCJuZXdUb3AiLCJ0b0tlZXBJbmVydCIsIm9sZFBhcmVudHMiLCJuZXdQYXJlbnRzIiwidG9Ta2lwIiwiaiIsIm9sZEluZXJ0IiwibmV3SW5lcnQiLCJzaWJsaW5nc1RvUmVzdG9yZSIsImRlbGV0ZSIsImVsZW1lbnRzIiwibW8iLCJzaWJsaW5ncyIsInNpYmxpbmciLCJpbmVydGVkU2libGluZ3MiLCJwYXJlbnRUb09ic2VydmUiLCJtYXliZVNoYWR5Um9vdCIsIl9fc2hhZHkiLCJob3N0IiwibXV0YXRpb25zIiwicGFyZW50cyIsIm11dGF0aW9uIiwiaWR4IiwiaW5lcnRlZENoaWxkIiwiaW5mbyIsInRlc3QiLCJhc3NpZ25lZFNsb3QiLCJub2RlcyIsInNsb3RzIiwiJGJsb2NraW5nRWxlbWVudHMiLCJhcmdzVGFnIiwiYmFzZUlzQXJndW1lbnRzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwibW9kdWxlRXhwb3J0cyIsIkJ1ZmZlciIsImlzQnVmZmVyIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJ0eXBlcyIsInJlcXVpcmUiLCJiaW5kaW5nIiwiaXNUeXBlZEFycmF5IiwiY2FwaXRhbGl6ZSIsInN0ciIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwidXNlTG9naWNhbERpcmVjdGlvbiIsIm9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSIsImdldENvbXB1dGVkU3R5bGVzIiwic2V0Q29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiXyIsImdldExvZ2ljYWxEaXJlY3Rpb25JbmZvIiwiY29tcHV0ZWRTdHlsZXMiLCJ3Iiwid3JpdGluZ01vZGUiLCJkIiwiZGlyZWN0aW9uIiwidGV4dE9yaWVudGF0aW9uIiwiV3JpdGluZ01vZGVzIiwiY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uIiwiZWxlbWVudE9yaWVudGF0aW9uIiwiaW5saW5lT3JpZW50YXRpb24iLCJjb252ZXJ0VG9QaHlzaWNhbFNpZGUiLCJzaWRlIiwiTSIsImJsb2NrRGlyZWN0aW9uIiwiaW5saW5lRGlyZWN0aW9uIiwiY29udmVydFRvTG9naWNhbFNpZGUiLCJjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uIiwiYmxvY2tPcmllbnRhdGlvbiIsImNvbnZlcnRFbGVtZW50U2l6ZSIsImVsZW1lbnRTaXplIiwiaW5saW5lU2l6ZSIsImJsb2NrU2l6ZSIsImNsaWVudElubGluZVNpemUiLCJjbGllbnRCbG9ja1NpemUiLCJvZmZzZXRJbmxpbmVTaXplIiwib2Zmc2V0QmxvY2tTaXplIiwic2Nyb2xsSW5saW5lU2l6ZSIsInNjcm9sbEJsb2NrU2l6ZSIsImYxIiwiZ2V0UGh5c2ljYWxMZWZ0VG9wIiwiZjIiLCJnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tIiwiZjMiLCJmNCIsImNsaWVudElubGluZUluc2V0Iiwic2Nyb2xsSW5saW5lSW5zZXQiLCJvZmZzZXRJbmxpbmVJbnNldCIsImNsaWVudEJsb2NrSW5zZXQiLCJzY3JvbGxCbG9ja0luc2V0Iiwib2Zmc2V0QmxvY2tJbnNldCIsInVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyIsImNvbnZlcnRUb0xvZ2ljYWxTaXplIiwiZGlyIiwibCIsIkhvcml6b250YWxUYkx0ciIsImxlZnRSaWdodERpcmVjdGlvbiIsIm92ZXJVbmRlckRpcmVjdGlvbiIsIkhvcml6b250YWxUYlJ0bCIsIlZlcnRpY2FsUmxMdHIiLCJWZXJ0aWNhbFJsUnRsIiwiU2lkZXdheXNSbEx0ciIsIlNpZGV3YXlzUmxSdGwiLCJWZXJ0aWNhbExyTHRyIiwiVmVydGljYWxMclJ0bCIsIlNpZGV3YXlzTHRMdHIiLCJTaWRld2F5c0x0UnRsIiwiSG9yaXpvbnRhbFRiIiwibHRyIiwicnRsIiwiVmVydGljYWxSbCIsIlZlcnRpY2FsTHIiLCJTaWRld2F5c1JsIiwiU2lkZXdheXNMciIsImdldENsYXNzTmFtZSIsImNsYXNzQmFzZSIsInNob3ciLCJwaGFzZSIsImZvcmNlUmVmbG93IiwiZHVtbXkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1c2VUcmFuc2l0aW9uYWJsZSIsIm1lYXN1cmUiLCJhbmltYXRlT25Nb3VudCIsIm9uVHJhbnNpdGlvblVwZGF0ZSIsImV4aXRWaXNpYmlsaXR5IiwiZHVyYXRpb24iLCJzZXRQaGFzZSIsInNldERpcmVjdGlvbiIsInN1cmZhY2VXaWR0aCIsInNldFN1cmZhY2VXaWR0aCIsInN1cmZhY2VIZWlnaHQiLCJzZXRTdXJmYWNlSGVpZ2h0Iiwic3VyZmFjZVgiLCJzZXRTdXJmYWNlWCIsInN1cmZhY2VZIiwic2V0U3VyZmFjZVkiLCJ0cmFuc2l0aW9uaW5nV2lkdGgiLCJzZXRUcmFuc2l0aW9uaW5nV2lkdGgiLCJ0cmFuc2l0aW9uaW5nSGVpZ2h0Iiwic2V0VHJhbnNpdGlvbmluZ0hlaWdodCIsInRyYW5zaXRpb25pbmdYIiwic2V0VHJhbnNpdGlvbmluZ1giLCJ0cmFuc2l0aW9uaW5nWSIsInNldFRyYW5zaXRpb25pbmdZIiwibG9naWNhbERpcmVjdGlvbkluZm8iLCJzZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyIsIm9uVHJhbnNpdGlvblVwZGF0ZVJlZiIsInBoYXNlUmVmIiwiZGlyZWN0aW9uUmVmIiwiZHVyYXRpb25SZWYiLCJ0b29FYXJseVRpbWVvdXRSZWYiLCJ0b29FYXJseVZhbHVlUmVmIiwidG9vTGF0ZVRpbWVvdXRSZWYiLCJvblRyYW5zaXRpb25FbmQiLCJ0aW1lb3V0RHVyYXRpb24iLCJwcmV2aW91c1BoYXNlIiwiY3VycmVudFNpemVXaXRoVHJhbnNpdGlvbiIsInkiLCJ3aWR0aCIsImhlaWdodCIsImJhY2t1cCIsImNsYXNzTGlzdCIsInNpemVXaXRob3V0VHJhbnNpdGlvbiIsIndyaXRpbmdNb2RlSXNIb3Jpem9udGFsIiwic3VyZmFjZUlubGluZUluc2V0Iiwic3VyZmFjZUJsb2NrSW5zZXQiLCJzdXJmYWNlSW5saW5lU2l6ZSIsInN1cmZhY2VCbG9ja1NpemUiLCJ0cmFuc2l0aW9uaW5nSW5saW5lSW5zZXQiLCJ0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCIsInRyYW5zaXRpb25pbmdJbmxpbmVTaXplIiwidHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZSIsInVzZVRyYW5zaXRpb25hYmxlUHJvcHMiLCJvdGhlclByb3BzIiwiYWxtb3N0RG9uZSIsInJlbW92ZUVtcHR5IiwidiIsIlRyYW5zaXRpb25hYmxlIiwiVHJhbnNpdGlvbiIsImNoaWxkTW91bnRCZWhhdmlvciIsImhhc1Nob3duT25jZSIsInNldEhhc1Nob3duT25jZSIsInNob3VsZFNldEhhc1Nob3duT25jZSIsImgiLCJjaGlsZElzVk5vZGUiLCJtZXJnZWRXaXRoQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJ1c2VDcmVhdGVDbGlwUHJvcHMiLCJjbGlwT3JpZ2luIiwiY2xpcE9yaWdpbklubGluZSIsImNsaXBPcmlnaW5CbG9jayIsImNsaXBNaW4iLCJjbGlwTWluSW5saW5lIiwiY2xpcE1pbkJsb2NrIiwiQ2xpcCIsInJlc3QiLCJ1c2VDcmVhdGVGYWRlUHJvcHMiLCJmYWRlTWluIiwiZmFkZU1heCIsIkZhZGUiLCJDbGlwRmFkZSIsInVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMiLCJtaW5CbG9ja1NpemUiLCJDb2xsYXBzZSIsIkNvbGxhcHNlRmFkZSIsInVzZUNyZWF0ZVNsaWRlUHJvcHMiLCJzbGlkZVRhcmdldElubGluZSIsInNsaWRlVGFyZ2V0QmxvY2siLCJsYXN0VmFsaWRUYXJnZXRJbmxpbmUiLCJsYXN0VmFsaWRUYXJnZXRCbG9jayIsIlNsaWRlIiwiU2xpZGVGYWRlIiwidXNlQ3JlYXRlWm9vbVByb3BzIiwiem9vbU9yaWdpbiIsInpvb21PcmlnaW5JbmxpbmUiLCJ6b29tT3JpZ2luQmxvY2siLCJ6b29tTWluIiwiem9vbU1pbklubGluZSIsInpvb21NaW5CbG9jayIsIlpvb20iLCJab29tRmFkZSIsIlNsaWRlWm9vbSIsIlNsaWRlWm9vbUZhZGUiLCJ1c2VDcmVhdGVGbGlwUHJvcHMiLCJmbGlwQW5nbGVJbmxpbmUiLCJmbGlwQW5nbGVCbG9jayIsInBlcnNwZWN0aXZlIiwiRmxpcCIsInVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzIiwiaW5saW5lIiwiU3dhcHBhYmxlIiwiaW5saW5lRWxlbWVudHMiLCJ0cmFuc2l0aW9uUHJvcHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztBQTBCYUEsTUFBQUEsQ0FBQUEsQ0FBQUE7Ozs7Ozs7OztFQWpCR0MsU0FBQUEsR0FBQUEsQ0FBT0MsQ0FBS0MsRUFBQUEsQ0FBQUEsRUFBQUE7RUFFM0IsRUFBQSxLQUFLLElBQUlDLENBQUtELElBQUFBLENBQUFBLEVBQUFBO0VBQU9ELElBQUFBLENBQUFBLENBQUlFLEtBQUtELENBQU1DLENBQUFBLENBQUFBLENBQUFBLENBQUFBO0VBQ3BDLEdBQUE7RUFBQSxFQUFBLE9BQTZCRixDQUM3QixDQUFBO0VBQUEsQ0FBQTtFQVFNLFNBQVNHLEdBQVdDLENBQUFBLENBQUFBLEVBQUFBO0VBQzFCLEVBQUEsSUFBSUMsSUFBYUQsQ0FBS0MsQ0FBQUEsVUFBQUEsQ0FBQUE7SUFDbEJBLENBQVlBLElBQUFBLENBQUFBLENBQVdDLFlBQVlGLENBQ3ZDLENBQUEsQ0FBQTtFQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxHQUFBLFNBQVMsTUFBVEEsSUFBQUEsSUFBQUEsV0FBQUEsS0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsV0FBQUEsR0FBQUEsU0FBUyxHQUFLTCx1QkFBdUIsRUFBRSxDQUFBO0VBRXZDLElBQUEsUUFBUVksSUFBSTtFQUNSLE1BQUEsS0FBSyxhQUFhO0VBQ2QsUUFBQSxPQUFPQyxDQUFDLENBQUMsQ0FBQ1IsQ0FBQUEscUJBQUFBLEdBQUFBLENBQUFBLFdBQUFBLEdBQUFBLFNBQVMsTUFBVCxJQUFBLElBQUEsV0FBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLFdBQUEsQ0FBV1MsY0FBYyxNQUFBLElBQUEsSUFBQSxxQkFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLHFCQUFBLEdBQUksS0FBSyxFQUFFLENBQUMsQ0FBMEIsQ0FBQyxDQUFBO0VBQzlFLE1BQUEsS0FBSyxXQUFXO0VBQ1osUUFBQSxPQUFPRCxDQUFDLENBQUMsQ0FBQ1IsQ0FBQUEsc0JBQUFBLEdBQUFBLENBQUFBLFdBQUFBLEdBQUFBLFNBQVMsTUFBVCxJQUFBLElBQUEsV0FBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLFdBQUEsQ0FBV1MsY0FBYyxNQUFBLElBQUEsSUFBQSxzQkFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLHNCQUFBLEdBQUksS0FBSyxFQUFFLENBQUMsQ0FBMEIsQ0FBQyxDQUFBO0VBRTlFLE1BQUEsS0FBSyxjQUFjO0VBQ2YsUUFBQSxPQUFPRCxDQUFDLENBQUMsQ0FBQ1IsQ0FBQUEscUJBQUFBLEdBQUFBLENBQUFBLFdBQUFBLEdBQUFBLFNBQVMsTUFBVCxJQUFBLElBQUEsV0FBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLFdBQUEsQ0FBV1UsZUFBZSxNQUFBLElBQUEsSUFBQSxxQkFBQSxLQUFBLEtBQUEsQ0FBQSxHQUFBLHFCQUFBLEdBQUksS0FBSyxFQUFFLENBQUMsQ0FBMEIsQ0FBQyxDQUFBO0VBQy9FLE1BQUEsS0FBSyxZQUFZO0VBQ2IsUUFBQSxP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QUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMvRixNQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxLQUFPLEVBQUEsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0RyxNQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxLQUFPLEVBQUEsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUNwRyxJQUFBLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxXQUFXLENBQUUsQ0FBQyxDQUFDLE1BQTJCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRW5JLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3JGLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3JGLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBRXJGLElBQUEsUUFDSXVpQixHQUFBLENBQUEzZixHQUFBLEVB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RSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBSSxDQUFBO0VBQ3RGLFlBQUFBLEdBQUEsQ0FBQyxRQUFRLEVBQUMsRUFBQSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFJLENBQUE7RUFFdEYsWUFBQUEsR0FBQSxDQUFDLFFBQVEsRUFBQyxFQUFBLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUksQ0FBQTtFQUN0RixZQUFBQSxHQUFBLENBQUMsU0FBUyxFQUFDLEVBQUEsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBSSxDQUFBO0VBQ3ZGLFlBQUFBLEdBQUEsQ0FBQyxhQUFhLEVBQUMsRUFBQSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFJLENBQUE7RUFDM0YsWUFBQUEsR0FBQSxDQUFDLFlBQVksRUFBQyxFQUFBLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUksQ0FBQTtjQUMxRkEsR0FBQyxDQUFBLFFBQVEsSUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFJLENBQUEsQ0FFcEYsQ0FDUCxFQUNOO0VBQ0wsQ0FBQztFQUdELFNBQVMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFpRixFQUFBO01BQzdJLE1BQU0sQ0FB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
