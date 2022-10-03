(function () {
  'use strict';

  var n,
      l$1,
      u$1,
      t,
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

  function b(n) {
    (!n.__d && (n.__d = !0) && t.push(n) && !g$2.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || setTimeout)(g$2);
  }

  function g$2() {
    for (var n; g$2.__r = t.length;) {
      n = t.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t = [], n.some(function (n) {
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
        j$2(n, k, d = d || f$1, t, o, r, c, s, a), b = k.__e, (y = k.ref) && d.ref != y && (w || (w = []), d.ref && w.push(d.ref, null, k), w.push(y, k.__c || b, k)), null != b ? (null == g && (g = b), "function" == typeof k.type && k.__k === d.__k ? k.__d = s = m$1(k, s, n) : s = A$1(n, k, d, x, b, s), "function" == typeof u.type && (u.__d = s)) : s && d.__e == s && s.parentNode != n && (s = _$1(d));
      }
    }

    for (u.__e = g, h = C; h--;) {
      null != x[h] && ("function" == typeof u.type && null != x[h].__e && x[h].__e == u.__d && (u.__d = _$1(i, h + 1)), N$1(x[h], x[h]));
    }

    if (w) for (h = 0; h < w.length; h++) {
      M$2(w[h], w[++h], w[++h]);
    }
  }

  function m$1(n, l, u) {
    for (var i, t = n.__k, o = 0; t && o < t.length; o++) {
      (i = t[o]) && (i.__ = n, l = "function" == typeof i.type ? m$1(i, l, u) : A$1(u, i, i, t, i.__e, l));
    }

    return l;
  }

  function x$1(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      x$1(n, l);
    }) : l.push(n)), l;
  }

  function A$1(n, l, u, i, t, o) {
    var r, f, e;
    if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
      for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) {
        if (f == t) break n;
      }

      n.insertBefore(t, o), r = o;
    }
    return void 0 !== r ? r : t.nextSibling;
  }

  function C$2(n, l, u, i, t) {
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
      "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
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
        H = u.type;

    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);

    try {
      n: if ("function" == typeof H) {
        if (g = u.props, m = (a = H.contextType) && t[a.__c], x = a ? m ? m.props.value : a.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in H && H.prototype.render ? u.__c = h = new H(g, x) : (u.__c = h = new d$1(g, x), h.constructor = H, h.render = O$1), m && m.sub(h), h.props = g, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != H.getDerivedStateFromProps && (h.__s == h.state && (h.__s = s$1({}, h.__s)), s$1(h.__s, H.getDerivedStateFromProps(g, h.__s))), y = h.props, _ = h.state, v) null == H.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == H.getDerivedStateFromProps && g !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(g, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(g, h.__s, x) || u.__v === i.__v) {
            h.props = g, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), h.__h.length && f.push(h);
            break n;
          }

          null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, _, k);
          });
        }
        if (h.context = x, h.props = g, h.__v = u, h.__P = n, A = l$1.__r, C = 0, "prototype" in H && H.prototype.render) h.state = h.__s, h.__d = !1, A && A(u), a = h.render(h.props, h.state, h.context);else do {
          h.__d = !1, A && A(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        } while (h.__d && ++C < 25);
        h.state = h.__s, null != h.getChildContext && (t = s$1(s$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, _)), $ = null != a && a.type === p$1 && null == a.key ? a.props.children : a, w$1(n, Array.isArray($) ? $ : [$], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
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

      if (C$2(l, p, y, o, c), v) u.__k = [];else if (k = u.props.children, w$1(l, Array.isArray(k) ? k : [k], u, i, t, o && "foreignObject" !== d, r, e, r ? r[0] : i.__k && _$1(i, 0), c), null != r) for (k = r.length; k--;) {
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
      t[o] && N$1(t[o], u, "function" != typeof n.type);
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

  function q$2(l, u, i) {
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
          this.props.value !== n.value && u.some(b);
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
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s$1({}, this.state), "function" == typeof n && (n = n(s$1({}, u), this.props)), n && s$1(u, n), null != n && this.__v && (l && this.__h.push(l), b(this));
  }, d$1.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), b(this));
  }, d$1.prototype.render = p$1, t = [], g$2.__r = 0, r$2 = 0;

  var r$1,
      u,
      i,
      o,
      f = 0,
      c = [],
      e = [],
      a = l$1.__b,
      v = l$1.__r,
      l = l$1.diffed,
      m = l$1.__c,
      d = l$1.unmount;

  function p(t, r) {
    l$1.__h && l$1.__h(u, t, f || r), f = 0;
    var i = u.__H || (u.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({
      __V: e
    }), i.__[t];
  }

  function y(n) {
    return f = 1, h(C$1, n);
  }

  function h(n, t, i) {
    var o = p(r$1++, 2);

    if (o.t = n, !o.__c && (o.__ = [i ? i(t) : C$1(void 0, t), function (n) {
      var t = o.__N ? o.__N[0] : o.__[0],
          r = o.t(t, n);
      t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
    }], o.__c = u, !u.u)) {
      u.u = !0;
      var f = u.shouldComponentUpdate;

      u.shouldComponentUpdate = function (n, t, r) {
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
        }), !!i && (!f || f.call(this, n, t, r));
      };
    }

    return o.__N || o.__;
  }

  function s(t, i) {
    var o = p(r$1++, 3);
    !l$1.__s && B$1(o.__H, i) && (o.__ = t, o.i = i, u.__H.__h.push(o));
  }

  function _(t, i) {
    var o = p(r$1++, 4);
    !l$1.__s && B$1(o.__H, i) && (o.__ = t, o.i = i, u.__h.push(o));
  }

  function A(n) {
    return f = 5, T$1(function () {
      return {
        current: n
      };
    }, []);
  }

  function T$1(n, t) {
    var u = p(r$1++, 7);
    return B$1(u.__H, t) ? (u.__V = n(), u.i = t, u.__h = n, u.__V) : u.__;
  }

  function q$1(n, t) {
    return f = 8, T$1(function () {
      return n;
    }, t);
  }

  function g$1() {
    for (var t; t = c.shift();) {
      if (t.__P && t.__H) try {
        t.__H.__h.forEach(w), t.__H.__h.forEach(z$1), t.__H.__h = [];
      } catch (r) {
        t.__H.__h = [], l$1.__e(r, t.__v);
      }
    }
  }

  l$1.__b = function (n) {
    "function" != typeof n.type || n.o || n.type === p$1 ? n.o || (n.o = n.__ && n.__.o ? n.__.o : "") : n.o = (n.__ && n.__.o ? n.__.o : "") + (n.__ && n.__.__k ? n.__.__k.indexOf(n) : 0), u = null, a && a(n);
  }, l$1.__r = function (n) {
    v && v(n), r$1 = 0;
    var t = (u = n.__c).__H;
    t && (i === u ? (t.__h = [], u.__h = [], t.__.forEach(function (n) {
      n.__N && (n.__ = n.__N), n.__V = e, n.__N = n.i = void 0;
    })) : (t.__h.forEach(w), t.__h.forEach(z$1), t.__h = [])), i = u;
  }, l$1.diffed = function (t) {
    l && l(t);
    var r = t.__c;
    r && r.__H && (r.__H.__h.length && (1 !== c.push(r) && o === l$1.requestAnimationFrame || ((o = l$1.requestAnimationFrame) || k)(g$1)), r.__H.__.forEach(function (n) {
      n.i && (n.__H = n.i), n.__V !== e && (n.__ = n.__V), n.i = void 0, n.__V = e;
    })), i = u = null;
  }, l$1.__c = function (t, r) {
    r.some(function (t) {
      try {
        t.__h.forEach(w), t.__h = t.__h.filter(function (n) {
          return !n.__ || z$1(n);
        });
      } catch (u) {
        r.some(function (n) {
          n.__h && (n.__h = []);
        }), r = [], l$1.__e(u, t.__v);
      }
    }), m && m(t, r);
  }, l$1.unmount = function (t) {
    d && d(t);
    var r,
        u = t.__c;
    u && u.__H && (u.__H.__.forEach(function (n) {
      try {
        w(n);
      } catch (n) {
        r = n;
      }
    }), u.__H = void 0, r && l$1.__e(r, u.__v));
  };
  var j$1 = "function" == typeof requestAnimationFrame;

  function k(n) {
    var t,
        r = function () {
      clearTimeout(u), j$1 && cancelAnimationFrame(t), setTimeout(n);
    },
        u = setTimeout(r, 100);

    j$1 && (t = requestAnimationFrame(r));
  }

  function w(n) {
    var t = u,
        r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), u = t;
  }

  function z$1(n) {
    var t = u;
    n.__c = n.__(), u = t;
  }

  function B$1(n, t) {
    return !n || n.length !== t.length || t.some(function (t, r) {
      return t !== n[r];
    });
  }

  function C$1(n, t) {
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
    var combined = q$1(current => {
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
      if (!(lhs !== null && lhs !== void 0 && lhs.style) && rhs !== null && rhs !== void 0 && rhs.style) return rhs.style; // They're both non-null but different types.
      // Convert the string type to an object bag type and run it again.

      if (lhs !== null && lhs !== void 0 && lhs.style && rhs !== null && rhs !== void 0 && rhs.style) {
        // (useMergedStyles isn't a true hook -- this isn't a violation)
        if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") return useMergedStyles({
          style: styleStringToObject(lhs === null || lhs === void 0 ? void 0 : lhs.style)
        }, rhs);
        if (typeof (rhs === null || rhs === void 0 ? void 0 : rhs.style) == "string") return useMergedStyles(lhs, {
          style: styleStringToObject(rhs === null || rhs === void 0 ? void 0 : rhs.style)
        });
      } // Logic???


      return undefined;
    } // They're both strings, just concatenate them.


    if (typeof (lhs === null || lhs === void 0 ? void 0 : lhs.style) == "string") {
      var _rhs$style;

      return "".concat(lhs.style, ";").concat((_rhs$style = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style !== void 0 ? _rhs$style : "");
    } // They're both objects, just merge them.


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
    if (ret.children === undefined) delete ret.children; // Now, do *everything* else
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
      var helperToEnsureStability = A(value);
      var shownError = A(false);

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
    var valueRef = A(Unset);
    var warningRef = A(false);
    var cleanupCallbackRef = A(undefined); // Make sure that the provided functions are perfectly stable across renders

    useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering); // Shared between "dependency changed" and "component unmounted".

    var onShouldCleanUp = q$1(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []); // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.

    var tryEnsureValue = q$1(() => {
      if (valueRef.current === Unset && getInitialValue != undefined) {
        try {
          var _onChange;

          var initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
        } catch (ex) {// Exceptions are intentional to allow bailout (without exposing the Unset symbol)
        }
      }
    }, [
      /* getInitialValue and onChange intentionally omitted */
    ]);
    var getValue = q$1(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.

      if (valueRef.current === Unset) tryEnsureValue();
      return valueRef.current === Unset ? undefined : valueRef.current;
    }, []);
    _(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []); // The actual code the user calls to (possibly) run a new effect.

    var r = A({
      prevDep: Unset
    });
    var setValue = q$1(arg => {
      // Regardless of anything else, figure out what our next value is about to be.
      var nextValue = arg instanceof Function ? arg(valueRef.current === Unset ? undefined : valueRef.current) : arg;

      if (r.current.prevDep === Unset && nextValue !== valueRef.current) {
        // This is the first request to change this value.
        // Evaluate the request immediately, then queue up the onChange function
        // Save our current value so that we can compare against it later
        // (if we flip back to this state, then we won't send the onChange function)
        r.current.prevDep = valueRef.current; // It's important to update this here (as well as below) in case customDebounceRendering invokes this immediately

        valueRef.current = nextValue; // Schedule the actual check and invocation of onChange later to let effects settle

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
          } // We've finished with everything, so mark us as being on a clean slate again.


          r.current.prevDep = Unset;
        });
      } // Update the value immediately.
      // This will be checked against prevDep to see if we should actually call onChange


      valueRef.current = nextValue;
    }, []);
    return [getValue, setValue];
  }
  var Unset = Symbol(); // Easy constants for getInitialValue
  function returnNull() {
    return null;
  }

  var previousInputs = new Map();
  var toRun = new Map(); // TODO: Whether this goes in options.diffed or options._commit
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
    useEnsureStability("useRefElement", onElementChange, onMount, onUnmount); // Called (indirectly) by the ref that the element receives.

    var handler = q$1((e, prevValue) => {
      var cleanup = onElementChange === null || onElementChange === void 0 ? void 0 : onElementChange(e, prevValue);
      if (prevValue) onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount(prevValue);
      if (e) onMount === null || onMount === void 0 ? void 0 : onMount(e);
      return cleanup;
    }, []); // Let us store the actual (reference to) the element we capture

    var [getElement, setElement] = usePassiveState(handler, returnNull, runImmediately);
    var useRefElementProps = q$1(props => useMergedProps({
      ref: setElement
    }, props), []); // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element

    return {
      useRefElementProps,
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
    var currentObserveBox = A(undefined);
    var needANewObserver = q$1((element, observeBox) => {
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
      useRefElementProps
    } = useRefElement({
      onElementChange: q$1(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
    });
    s(() => {
      if (getObserveBox) {
        if (currentObserveBox.current !== getObserveBox()) needANewObserver(getElement(), getObserveBox());
      }
    });
    return {
      getElement,
      getSize,
      useElementSizeProps: useRefElementProps
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
        } // Convenience function for converting NodeLists.

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

            this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

            if (this._rootElement.hasAttribute('aria-hidden')) {
              /** @type {?string} */
              this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
            } else {
              this._savedAriaHidden = null;
            }

            this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


            this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
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
              }, this); // Note we cast the nulls to the ANY type here because:
              // 1) We want the class properties to be declared as non-null, or else we
              //    need even more casts throughout this code. All bets are off if an
              //    instance has been destroyed and a method is called.
              // 2) We don't want to cast "this", because we want type-aware optimizations
              //    to know which properties we're setting.


              this._observer =
              /** @type {?} */
              null;
              this._rootElement =
              /** @type {?} */
              null;
              this._managedNodes =
              /** @type {?} */
              null;
              this._inertManager =
              /** @type {?} */
              null;
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
                    root =
                    /** @type {!ShadowRoot} */
                    node;
                    break;
                  }

                  node = node.parentNode;
                }

                if (root) {
                  activeElement = root.activeElement;
                }
              }

              if (startNode.contains(activeElement)) {
                activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
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

              var element =
              /** @type {!HTMLElement} */
              node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
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
              var inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
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
                var target =
                /** @type {!HTMLElement} */
                record.target;

                if (record.type === 'childList') {
                  // Manage added nodes
                  slice.call(record.addedNodes).forEach(function (node) {
                    this._makeSubtreeUnfocusable(node);
                  }, this); // Un-manage removed nodes

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
            /** @return {?string} */
            ,
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

            this._destroyed = false; // Save any prior tabindex info and make this node untabbable

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
                var element =
                /** @type {!HTMLElement} */
                this._node;

                if (this._savedTabIndex !== null) {
                  element.setAttribute('tabindex', this._savedTabIndex);
                } else {
                  element.removeAttribute('tabindex');
                } // Use `delete` to restore native focus method.


                if (this._overrodeFocusMethod) {
                  delete element.focus;
                }
              } // See note in InertRoot.destructor for why we cast these nulls to ANY.


              this._node =
              /** @type {?} */
              null;
              this._inertRoots =
              /** @type {?} */
              null;
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

              var element =
              /** @type {!HTMLElement} */
              this.node;

              if (matches.call(element, _focusableElementsString)) {
                if (
                /** @type {!HTMLElement} */
                element.tabIndex === -1 && this.hasSavedTabIndex) {
                  return;
                }

                if (element.hasAttribute('tabindex')) {
                  this._savedTabIndex =
                  /** @type {!HTMLElement} */
                  element.tabIndex;
                }

                element.setAttribute('tabindex', '-1');

                if (element.nodeType === Node.ELEMENT_NODE) {
                  element.focus = function () {};

                  this._overrodeFocusMethod = true;
                }
              } else if (element.hasAttribute('tabindex')) {
                this._savedTabIndex =
                /** @type {!HTMLElement} */
                element.tabIndex;
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
              return (
                /** @type {!InertNode} */
                this._destroyed
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
            /** @return {?number} */
            ,
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

            this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

            addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

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

                this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
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
              }, this); // Comment this out to use programmatic API only.

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

                    var target =
                    /** @type {!HTMLElement} */
                    record.target;
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
            var element =
            /** @type {!HTMLElement} */
            node;

            if (callback) {
              callback(element);
            } // Descend into node:
            // If it has a ShadowRoot, ignore all child elements - these will be picked
            // up by the <content> or <shadow> elements. Descend straight into the
            // ShadowRoot.


            var shadowRoot =
            /** @type {!HTMLElement} */
            element.shadowRoot;

            if (shadowRoot) {
              composedTreeWalk(shadowRoot, callback);
              return;
            } // If it is a <content> element, descend into distributed elements - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.


            if (element.localName == 'content') {
              var content =
              /** @type {!HTMLContentElement} */
              element; // Verifies if ShadowDom v0 is supported.

              var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

              for (var i = 0; i < distributedNodes.length; i++) {
                composedTreeWalk(distributedNodes[i], callback);
              }

              return;
            } // If it is a <slot> element, descend into assigned nodes - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.


            if (element.localName == 'slot') {
              var slot =
              /** @type {!HTMLSlotElement} */
              element; // Verify if ShadowDom v1 is supported.

              var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
                flatten: true
              }) : [];

              for (var _i = 0; _i < _distributedNodes.length; _i++) {
                composedTreeWalk(_distributedNodes[_i], callback);
              }

              return;
            }
          } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
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
        this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
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
        } // Remove it from the stack, we'll bring it to the top.


        this.remove(element);

        this[_topChanged](element);

        this[_blockingElements].push(element);
      }

      remove(element) {
        var i = this[_blockingElements].indexOf(element);

        if (i === -1) {
          return false;
        }

        this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


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
        var oldParents = this[_topElParents]; // No new top, reset old top if any.

        if (!newTop) {
          this[_restoreInertedSiblings](oldParents);

          toKeepInert.clear();
          this[_topElParents] = [];
          return;
        }

        var newParents = this[_getParents](newTop); // New top is not contained in the main document!


        if (newParents[newParents.length - 1].parentNode !== document.body) {
          throw Error('Non-connected element cannot be a blocking element');
        } // Cast here because we know we'll call _inertSiblings on newParents
        // below.


        this[_topElParents] = newParents;

        var toSkip = this[_getDistributedChildren](newTop); // No previous top element.


        if (!oldParents.length) {
          this[_inertSiblings](newParents, toSkip, toKeepInert);

          return;
        }

        var i = oldParents.length - 1;
        var j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

        while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
          i--;
          j--;
        } // If up the parents tree there are 2 elements that are siblings, swap
        // the inerted sibling.


        if (oldParents[i] !== newParents[j]) {
          this[_swapInertedSibling](oldParents[i], newParents[j]);
        } // Restore old parents siblings inertness.


        i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

        j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
      }
      /**
       * Swaps inertness between two sibling elements.
       * Sets the property `inert` over the attribute since the inert spec
       * doesn't specify if it should be reflected.
       * https://html.spec.whatwg.org/multipage/interaction.html#inert
       */


      [_swapInertedSibling](oldInert, newInert) {
        var siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
        // if it's inertable and if already inert.

        if (this[_isInertable](oldInert) && !oldInert.inert) {
          oldInert.inert = true;
          siblingsToRestore.add(oldInert);
        } // If newInert was already between the siblings to restore, it means it is
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
            var sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

            if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
              continue;
            } // Should be collected since already inerted.


            if (toKeepInert && sibling.inert) {
              toKeepInert.add(sibling);
            } else {
              sibling.inert = true;
              inertedSiblings.add(sibling);
            }
          } // Store the siblings that were inerted.


          element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

          var mo = new MutationObserver(this[_handleMutations].bind(this));
          element[_parentMO] = mo;
          var parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
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
          var inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

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
          } // To inert.


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
        var current = element; // Stop to body.

        while (current && current !== document.body) {
          // Skip shadow roots.
          if (current.nodeType === Node.ELEMENT_NODE) {
            parents.push(current);
          } // ShadowDom v1


          if (current.assignedSlot) {
            // Collect slots from deepest slot to top.
            while (current = current.assignedSlot) {
              parents.push(current);
            } // Continue the search on the top slot.


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
          } // No need to search for <content>.

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
      } // Legacy `process.binding('util')` for Node.js < 10.


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
      useRefElementProps
    } = useRefElement({
      onElementChange: q$1(element => {
        if (element) {
          setComputedStyles(window.getComputedStyle(element));
        }
      }, [])
    }); // TODO: There's no way to refresh which writing mode we have once mounted.
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
      onSizeChange: q$1(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
    });
    var getLogicalDirectionInfo = q$1(() => {
      var computedStyles = getComputedStyles();

      if (computedStyles) {
        var w = computedStyles.writingMode;
        var d = computedStyles.direction;
        var t = computedStyles.textOrientation;
        if (t == "upright") d = "ltr";
        return _objectSpread2({}, WritingModes[w || "horizontal-tb"][d || "ltr"]);
      }

      return null;
    }, []); //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);

    var convertToLogicalOrientation = q$1((elementOrientation, direction) => {
      var _direction, _direction2;

      (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
      if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, []);
    var convertToPhysicalSide = q$1((side, direction) => {
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
    var convertToLogicalSide = q$1((side, direction) => {
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
    var convertToPhysicalOrientation = q$1((elementOrientation, direction) => {
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
    var convertElementSize = q$1((elementSize, direction) => {
      var _direction14;

      (_direction14 = direction) !== null && _direction14 !== void 0 ? _direction14 : direction = getLogicalDirectionInfo();

      if (direction) {
        var {
          inlineSize,
          blockSize,
          inlineDirection,
          blockDirection
        } = direction; // Size is relatively simple

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
      useLogicalDirectionProps: q$1(props => useRefElementProps(useElementSizeProps(props)), []),
      getElement,
      getLogicalDirectionInfo,
      convertToLogicalSize: convertElementSize,
      convertToLogicalOrientation,
      convertToPhysicalOrientation,
      convertToLogicalSide,
      convertToPhysicalSide
    };
  } // Position requires us to sometimes use one property (like `left`)
  // or sometimes two (like `left` + `width`)

  function getPhysicalLeftTop(dir) {
    if (dir === "ltr" || dir == "rtl") return "left";
    return "top";
  }

  function getPhysicalRightBottom(dir) {
    if (dir === "rtl") return "width";
    if (dir === "btt") return "height";
    return null;
  } // Helper for extracting info from "ltr", "ttb", etc.


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
      useRefElementProps
    } = useRefElement({});
    var [phase, setPhase] = y(animateOnMount ? "init" : null);
    var [direction, setDirection] = y(show == null ? null : show ? "enter" : "exit");
    var [surfaceWidth, setSurfaceWidth] = y(null);
    var [surfaceHeight, setSurfaceHeight] = y(null);
    var [surfaceX, setSurfaceX] = y(null);
    var [surfaceY, setSurfaceY] = y(null);
    var [transitioningWidth, setTransitioningWidth] = y(null);
    var [transitioningHeight, setTransitioningHeight] = y(null);
    var [transitioningX, setTransitioningX] = y(null);
    var [transitioningY, setTransitioningY] = y(null);
    var [logicalDirectionInfo, setLogicalDirectionInfo] = y(null);
    var {
      getLogicalDirectionInfo,
      useLogicalDirectionProps
    } = useLogicalDirection({
      onLogicalDirectionChange: setLogicalDirectionInfo
    });
    var onTransitionUpdateRef = A(onTransitionUpdate);
    var phaseRef = A(phase);
    var directionRef = A(direction);
    var durationRef = A(duration);
    var tooEarlyTimeoutRef = A(null);
    var tooEarlyValueRef = A(true);
    var tooLateTimeoutRef = A(null);
    var onTransitionEnd = q$1(e => {
      if (e.target === getElement() && tooEarlyValueRef.current == false) {
        setPhase("finalize");
      }
    }, []);
    _(() => {
      onTransitionUpdateRef.current = onTransitionUpdate;
    }, [onTransitionUpdate]);
    _(() => {
      phaseRef.current = phase;
    }, [phase]);
    _(() => {
      directionRef.current = direction;
    }, [direction]);
    _(() => {
      durationRef.current = duration;
    }, [duration]);
    _(() => {
      var _onTransitionUpdateRe;

      if (direction && phase) (_onTransitionUpdateRe = onTransitionUpdateRef.current) === null || _onTransitionUpdateRe === void 0 ? void 0 : _onTransitionUpdateRe.call(onTransitionUpdateRef, direction, phase);
    }, [direction, phase]); // Every time the phase changes to "transition", add our transition timeout timeouts
    // to catch any time onTransitionEnd fails to report for whatever reason to be safe

    _(() => {
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
    }, [phase]); // Any time "show" changes, update our direction and phase.
    // In addition, measure the size of the element if requested.

    _(() => {
      var element = getElement();

      if (element && show != null) {
        var previousPhase = phaseRef.current; // Swap our direction

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
    }, [show, measure, classBase]); // Any time the phase changes to init, immediately before the screen is painted,
    // change the phase to "transition" and re-render ().

    _(() => {
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
        var almostDone = useRefElementProps(useLogicalDirectionProps(_objectSpread2(_objectSpread2({
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

    var [hasShownOnce, setHasShownOnce] = y(false);
    var shouldSetHasShownOnce = hasShownOnce === false && childMountBehavior === "mount-on-show" && show === true;
    s(() => {
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
    return q$2(child, mergedWithChildren);
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
    var lastValidTargetInline = A((_slideTargetInline = slideTargetInline) !== null && _slideTargetInline !== void 0 ? _slideTargetInline : 1);
    var lastValidTargetBlock = A((_slideTargetBlock = slideTargetBlock) !== null && _slideTargetBlock !== void 0 ? _slideTargetBlock : 0);
    s(() => {
      if (slideTargetInline) lastValidTargetInline.current = slideTargetInline;
    }, [slideTargetInline]);
    s(() => {
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
    var lastValidTargetInline = A((_flipAngleInline = flipAngleInline) !== null && _flipAngleInline !== void 0 ? _flipAngleInline : 180);
    var lastValidTargetBlock = A((_flipAngleBlock = flipAngleBlock) !== null && _flipAngleBlock !== void 0 ? _flipAngleBlock : 0);
    s(() => {
      if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
    }, [flipAngleInline]);
    s(() => {
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
    return q$2(children, mergedWithChildren);
  }); // If "inline" isn't explicitly provided, we try to implicitly do it based on the child's tag.
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
      const [writingMode, setWritingMode] = y("horizontal");
      const [show1, setShow1] = y(true);
      const [show3, setShow3] = y(0);
      const [reflow, setReflow] = y("hidden");
      const [duration, setDuration] = y(175);
      const [text, setText] = y("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      const onInput1 = q$1((e) => { setShow1(o => !o); e.preventDefault(); }, []);
      const onInput3 = q$1((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = q$1((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = q$1((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = q$1((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = q$1((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = q$1((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = q$1((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = q$1((e) => { setShow3(0); e.preventDefault(); }, []);
      const onInputB = q$1((e) => { setShow3(1); e.preventDefault(); }, []);
      const onInputC = q$1((e) => { setShow3(2); e.preventDefault(); }, []);
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
      const [min, setMin] = y(0);
      const [max, setMax] = y(1);
      const onMinInput = q$1((e) => { setMin((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMaxInput = q$1((e) => { setMax((e.target).valueAsNumber); e.preventDefault(); }, []);
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
      const [originX, setOriginX] = y(0.5);
      const [originY, setOriginY] = y(0);
      const [minX, setMinX] = y(1);
      const [minY, setMinY] = y(0);
      const [withFade, setWithFade] = y(true);
      y(false);
      const onOriginXInput = q$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = q$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = q$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = q$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = q$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const [originX, setOriginX] = y(0.5);
      const [originY, setOriginY] = y(0);
      const [minX, setMinX] = y(0.75);
      const [minY, setMinY] = y(0.75);
      const [slideX, setSlideX] = y(0.25);
      const [slideY, setSlideY] = y(0);
      const [withFade, setWithFade] = y(true);
      const onSlideXInput = q$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = q$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = q$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const onOriginXInput = q$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = q$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = q$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = q$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
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
      const [originX, setOriginX] = y(0.5);
      const [originY, setOriginY] = y(0);
      const [minX, setMinX] = y(0.75);
      const [minY, setMinY] = y(0.75);
      const [withFade, setWithFade] = y(true);
      const onOriginXInput = q$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = q$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = q$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = q$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = q$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const [slideX, setSlideX] = y(0.25);
      const [slideY, setSlideY] = y(0);
      const [withFade, setWithFade] = y(true);
      const onSlideXInput = q$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = q$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = q$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const [minBlockSize, setMinBlockSize] = y("0px");
      const onWithFadeInput = q$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = y(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = q$1((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
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
      const [flipX, setFlipX] = y(0);
      const [flipY, setFlipY] = y(180);
      const onFlipXInput = q$1((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = q$1((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYmVmb3JlLWxheW91dC1lZmZlY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtYW5pbWF0aW9uLWZyYW1lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1kb2N1bWVudC1jbGFzcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1lbGVtZW50LXNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvd2ljZy1pbmVydC9kaXN0L2luZXJ0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jsb2NraW5nLWVsZW1lbnRzL2Rpc3QvYmxvY2tpbmctZWxlbWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0J1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb24uanMiLCIuLi90cmFuc2l0aW9uYWJsZS5qcyIsIi4uL2NsaXAuanMiLCIuLi9mYWRlLmpzIiwiLi4vY2xpcC1mYWRlLmpzIiwiLi4vY29sbGFwc2UuanMiLCIuLi9jb2xsYXBzZS1mYWRlLmpzIiwiLi4vc2xpZGUuanMiLCIuLi9zbGlkZS1mYWRlLmpzIiwiLi4vem9vbS5qcyIsIi4uL3pvb20tZmFkZS5qcyIsIi4uL3NsaWRlLXpvb20uanMiLCIuLi9zbGlkZS16b29tLWZhZGUuanMiLCIuLi9mbGlwLmpzIiwiLi4vc3dhcHBhYmxlLmpzIiwibWFpbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG4sbCx1LGksdCxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHYobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB2KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsPT1yJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24geSgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBfKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9fKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP18obik6bnVsbH1mdW5jdGlvbiBrKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gayhuKX19ZnVuY3Rpb24gYihuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8c2V0VGltZW91dCkoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1zKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9fKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmayh0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGMscyxhKXt2YXIgaCx5LGQsayxiLGcsdyx4PWkmJmkuX19rfHxlLEM9eC5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHAse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksay5yZWY/ay5yZWY6bnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oZD14W2hdKXx8ZCYmay5rZXk9PWQua2V5JiZrLnR5cGU9PT1kLnR5cGUpeFtoXT12b2lkIDA7ZWxzZSBmb3IoeT0wO3k8Qzt5Kyspe2lmKChkPXhbeV0pJiZrLmtleT09ZC5rZXkmJmsudHlwZT09PWQudHlwZSl7eFt5XT12b2lkIDA7YnJlYWt9ZD1udWxsfWoobixrLGQ9ZHx8Zix0LG8scixjLHMsYSksYj1rLl9fZSwoeT1rLnJlZikmJmQucmVmIT15JiYod3x8KHc9W10pLGQucmVmJiZ3LnB1c2goZC5yZWYsbnVsbCxrKSx3LnB1c2goeSxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09ZyYmKGc9YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZrLl9faz09PWQuX19rP2suX19kPXM9bShrLHMsbik6cz1BKG4sayxkLHgsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmZC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9XyhkKSl9Zm9yKHUuX19lPWcsaD1DO2gtLTspbnVsbCE9eFtoXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9eFtoXS5fX2UmJnhbaF0uX19lPT11Ll9fZCYmKHUuX19kPV8oaSxoKzEpKSxOKHhbaF0seFtoXSkpO2lmKHcpZm9yKGg9MDtoPHcubGVuZ3RoO2grKylNKHdbaF0sd1srK2hdLHdbKytoXSl9ZnVuY3Rpb24gbShuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2ssbz0wO3QmJm88dC5sZW5ndGg7bysrKShpPXRbb10pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP20oaSxsLHUpOkEodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24geChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe3gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBBKG4sbCx1LGksdCxvKXt2YXIgcixmLGU7aWYodm9pZCAwIT09bC5fX2Qpcj1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1vfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1vfHxvLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCkscj1udWxsO2Vsc2V7Zm9yKGY9byxlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxvKSxyPW99cmV0dXJuIHZvaWQgMCE9PXI/cjp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztmb3IobyBpbiB1KVwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxvIGluIGx8fEgobixvLG51bGwsdVtvXSxpKTtmb3IobyBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbb118fFwiY2hpbGRyZW5cIj09PW98fFwia2V5XCI9PT1vfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxIKG4sbyxsW29dLHVbb10saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8Yy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciBvO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKW89bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtvXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwsbz9UOkksbyk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsbz9UOkksbyk7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBhLGgsdix5LF8sayxiLGcsbSx4LEEsQywkLEg9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKGE9bC5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIEgpe2lmKGc9dS5wcm9wcyxtPShhPUguY29udGV4dFR5cGUpJiZ0W2EuX19jXSx4PWE/bT9tLnByb3BzLnZhbHVlOmEuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIEgmJkgucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBIKGcseCk6KHUuX19jPWg9bmV3IGQoZyx4KSxoLmNvbnN0cnVjdG9yPUgsaC5yZW5kZXI9TyksbSYmbS5zdWIoaCksaC5wcm9wcz1nLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9SC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPXMoe30saC5fX3MpKSxzKGguX19zLEguZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGcsaC5fX3MpKSkseT1oLnByb3BzLF89aC5zdGF0ZSx2KW51bGw9PUguZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09SC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmchPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhnLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUoZyxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1nLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKGcsaC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LF8sayl9KX1pZihoLmNvbnRleHQ9eCxoLnByb3BzPWcsaC5fX3Y9dSxoLl9fUD1uLEE9bC5fX3IsQz0wLFwicHJvdG90eXBlXCJpbiBIJiZILnByb3RvdHlwZS5yZW5kZXIpaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSxBJiZBKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCk7ZWxzZSBkb3toLl9fZD0hMSxBJiZBKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fc313aGlsZShoLl9fZCYmKytDPDI1KTtoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1zKHMoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxfKSksJD1udWxsIT1hJiZhLnR5cGU9PT1wJiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsdyhuLEFycmF5LmlzQXJyYXkoJCk/JDpbJF0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhhPWwuZGlmZmVkKSYmYSh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZSxjKXt2YXIgcyxoLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxrPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7azxyLmxlbmd0aDtrKyspaWYoKHM9cltrXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxyW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9bz9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxyPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKHI9ciYmbi5jYWxsKGwuY2hpbGROb2RlcyksaD0oeT1pLnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPXIpZm9yKHk9e30saz0wO2s8bC5hdHRyaWJ1dGVzLmxlbmd0aDtrKyspeVtsLmF0dHJpYnV0ZXNba10ubmFtZV09bC5hdHRyaWJ1dGVzW2tdLnZhbHVlOyh2fHxoKSYmKHYmJihoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LG8sYyksdil1Ll9faz1bXTtlbHNlIGlmKGs9dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShrKT9rOltrXSx1LGksdCxvJiZcImZvcmVpZ25PYmplY3RcIiE9PWQscixlLHI/clswXTppLl9fayYmXyhpLDApLGMpLG51bGwhPXIpZm9yKGs9ci5sZW5ndGg7ay0tOyludWxsIT1yW2tdJiZhKHJba10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oaz1wLnZhbHVlKSYmKGshPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYha3x8XCJvcHRpb25cIj09PWQmJmshPT15LnZhbHVlKSYmSChsLFwidmFsdWVcIixrLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KGs9cC5jaGVja2VkKSYmayE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLGsseS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsLG4uX19jPXZvaWQgMH1pZih0PW4uX19rKWZvcihvPTA7bzx0Lmxlbmd0aDtvKyspdFtvXSYmTih0W29dLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8YShuLl9fZSksbi5fXz1uLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBQKHUsaSx0KXt2YXIgbyxyLGU7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZT1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz1oKHAsbnVsbCxbdV0pLHJ8fGYsZix2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGUsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGUsdSl9ZnVuY3Rpb24gUyhuLGwpe1AobixsLFMpfWZ1bmN0aW9uIHEobCx1LGkpe3ZhciB0LG8scixmPXMoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksdihsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBCKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK3IrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKGIpfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49ZS5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsaSl7Zm9yKHZhciB0LG8scjtsPWwuX187KWlmKCh0PWwuX19jKSYmIXQuX18pdHJ5e2lmKChvPXQuY29uc3RydWN0b3IpJiZudWxsIT1vLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHQuc2V0U3RhdGUoby5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHI9dC5fX2QpLG51bGwhPXQuY29tcG9uZW50RGlkQ2F0Y2gmJih0LmNvbXBvbmVudERpZENhdGNoKG4saXx8e30pLHI9dC5fX2QpLHIpcmV0dXJuIHQuX19FPXR9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHMoe30sdSksdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksYih0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxiKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXAsdD1bXSxnLl9fcj0wLHI9MDtleHBvcnR7ZCBhcyBDb21wb25lbnQscCBhcyBGcmFnbWVudCxxIGFzIGNsb25lRWxlbWVudCxCIGFzIGNyZWF0ZUNvbnRleHQsaCBhcyBjcmVhdGVFbGVtZW50LHkgYXMgY3JlYXRlUmVmLGgsUyBhcyBoeWRyYXRlLGkgYXMgaXNWYWxpZEVsZW1lbnQsbCBhcyBvcHRpb25zLFAgYXMgcmVuZGVyLHggYXMgdG9DaGlsZEFycmF5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBuLEZyYWdtZW50IGFzIHR9ZnJvbVwicHJlYWN0XCI7dmFyIHIsdSxpLG8sZj0wLGM9W10sZT1bXSxhPW4uX19iLHY9bi5fX3IsbD1uLmRpZmZlZCxtPW4uX19jLGQ9bi51bm1vdW50O2Z1bmN0aW9uIHAodCxyKXtuLl9faCYmbi5fX2godSx0LGZ8fHIpLGY9MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7X19WOmV9KSxpLl9fW3RdfWZ1bmN0aW9uIHkobil7cmV0dXJuIGY9MSxoKEMsbil9ZnVuY3Rpb24gaChuLHQsaSl7dmFyIG89cChyKyssMik7aWYoby50PW4sIW8uX19jJiYoby5fXz1baT9pKHQpOkModm9pZCAwLHQpLGZ1bmN0aW9uKG4pe3ZhciB0PW8uX19OP28uX19OWzBdOm8uX19bMF0scj1vLnQodCxuKTt0IT09ciYmKG8uX19OPVtyLG8uX19bMV1dLG8uX19jLnNldFN0YXRlKHt9KSl9XSxvLl9fYz11LCF1LnUpKXt1LnU9ITA7dmFyIGY9dS5zaG91bGRDb21wb25lbnRVcGRhdGU7dS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4gbi5fX2N9KTtpZih1LmV2ZXJ5KGZ1bmN0aW9uKG4pe3JldHVybiFuLl9fTn0pKXJldHVybiFmfHxmLmNhbGwodGhpcyxuLHQscik7dmFyIGk9ITE7cmV0dXJuIHUuZm9yRWFjaChmdW5jdGlvbihuKXtpZihuLl9fTil7dmFyIHQ9bi5fX1swXTtuLl9fPW4uX19OLG4uX19OPXZvaWQgMCx0IT09bi5fX1swXSYmKGk9ITApfX0pLCEhaSYmKCFmfHxmLmNhbGwodGhpcyxuLHQscikpfX1yZXR1cm4gby5fX058fG8uX199ZnVuY3Rpb24gcyh0LGkpe3ZhciBvPXAocisrLDMpOyFuLl9fcyYmQihvLl9fSCxpKSYmKG8uX189dCxvLmk9aSx1Ll9fSC5fX2gucHVzaChvKSl9ZnVuY3Rpb24gXyh0LGkpe3ZhciBvPXAocisrLDQpOyFuLl9fcyYmQihvLl9fSCxpKSYmKG8uX189dCxvLmk9aSx1Ll9faC5wdXNoKG8pKX1mdW5jdGlvbiBBKG4pe3JldHVybiBmPTUsVChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gRihuLHQscil7Zj02LF8oZnVuY3Rpb24oKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuPyhuKHQoKSksZnVuY3Rpb24oKXtyZXR1cm4gbihudWxsKX0pOm4/KG4uY3VycmVudD10KCksZnVuY3Rpb24oKXtyZXR1cm4gbi5jdXJyZW50PW51bGx9KTp2b2lkIDB9LG51bGw9PXI/cjpyLmNvbmNhdChuKSl9ZnVuY3Rpb24gVChuLHQpe3ZhciB1PXAocisrLDcpO3JldHVybiBCKHUuX19ILHQpPyh1Ll9fVj1uKCksdS5pPXQsdS5fX2g9bix1Ll9fVik6dS5fX31mdW5jdGlvbiBxKG4sdCl7cmV0dXJuIGY9OCxUKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIHgobil7dmFyIHQ9dS5jb250ZXh0W24uX19jXSxpPXAocisrLDkpO3JldHVybiBpLmM9bix0PyhudWxsPT1pLl9fJiYoaS5fXz0hMCx0LnN1Yih1KSksdC5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBQKHQscil7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUocj9yKHQpOnQpfWZ1bmN0aW9uIFYobil7dmFyIHQ9cChyKyssMTApLGk9eSgpO3JldHVybiB0Ll9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obixyKXt0Ll9fJiZ0Ll9fKG4sciksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gYigpe3ZhciBuPXAocisrLDExKTtyZXR1cm4gbi5fX3x8KG4uX189XCJQXCIrZnVuY3Rpb24obil7Zm9yKHZhciB0PTAscj1uLmxlbmd0aDtyPjA7KXQ9KHQ8PDUpLXQrbi5jaGFyQ29kZUF0KC0tcil8MDtyZXR1cm4gdH0odS5fX3Yubykrciksbi5fX31mdW5jdGlvbiBnKCl7Zm9yKHZhciB0O3Q9Yy5zaGlmdCgpOylpZih0Ll9fUCYmdC5fX0gpdHJ5e3QuX19ILl9faC5mb3JFYWNoKHcpLHQuX19ILl9faC5mb3JFYWNoKHopLHQuX19ILl9faD1bXX1jYXRjaChyKXt0Ll9fSC5fX2g9W10sbi5fX2Uocix0Ll9fdil9fW4uX19iPWZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZXx8bi5vfHxuLnR5cGU9PT10P24ub3x8KG4ubz1uLl9fJiZuLl9fLm8/bi5fXy5vOlwiXCIpOm4ubz0obi5fXyYmbi5fXy5vP24uX18ubzpcIlwiKSsobi5fXyYmbi5fXy5fX2s/bi5fXy5fX2suaW5kZXhPZihuKTowKSx1PW51bGwsYSYmYShuKX0sbi5fX3I9ZnVuY3Rpb24obil7diYmdihuKSxyPTA7dmFyIHQ9KHU9bi5fX2MpLl9fSDt0JiYoaT09PXU/KHQuX19oPVtdLHUuX19oPVtdLHQuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uX19WPWUsbi5fX049bi5pPXZvaWQgMH0pKToodC5fX2guZm9yRWFjaCh3KSx0Ll9faC5mb3JFYWNoKHopLHQuX19oPVtdKSksaT11fSxuLmRpZmZlZD1mdW5jdGlvbih0KXtsJiZsKHQpO3ZhciByPXQuX19jO3ImJnIuX19IJiYoci5fX0guX19oLmxlbmd0aCYmKDEhPT1jLnB1c2gocikmJm89PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChvPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8aykoZykpLHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7bi5pJiYobi5fX0g9bi5pKSxuLl9fViE9PWUmJihuLl9fPW4uX19WKSxuLmk9dm9pZCAwLG4uX19WPWV9KSksaT11PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQscil7ci5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKHcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8eihuKX0pfWNhdGNoKHUpe3Iuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHI9W10sbi5fX2UodSx0Ll9fdil9fSksbSYmbSh0LHIpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7ZCYmZCh0KTt2YXIgcix1PXQuX19jO3UmJnUuX19IJiYodS5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7dyhuKX1jYXRjaChuKXtyPW59fSksdS5fX0g9dm9pZCAwLHImJm4uX19lKHIsdS5fX3YpKX07dmFyIGo9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGsobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxqJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2omJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24gdyhuKXt2YXIgdD11LHI9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG4uX19jPXZvaWQgMCxyKCkpLHU9dH1mdW5jdGlvbiB6KG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBCKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEMobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7cSBhcyB1c2VDYWxsYmFjayx4IGFzIHVzZUNvbnRleHQsUCBhcyB1c2VEZWJ1Z1ZhbHVlLHMgYXMgdXNlRWZmZWN0LFYgYXMgdXNlRXJyb3JCb3VuZGFyeSxiIGFzIHVzZUlkLEYgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxfIGFzIHVzZUxheW91dEVmZmVjdCxUIGFzIHVzZU1lbW8saCBhcyB1c2VSZWR1Y2VyLEEgYXMgdXNlUmVmLHkgYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e0NvbXBvbmVudCBhcyBuLGNyZWF0ZUVsZW1lbnQgYXMgdCxvcHRpb25zIGFzIGUsdG9DaGlsZEFycmF5IGFzIHIsRnJhZ21lbnQgYXMgdSxyZW5kZXIgYXMgbyxoeWRyYXRlIGFzIGksY3JlYXRlQ29udGV4dCBhcyBsLGNyZWF0ZVJlZiBhcyBjLGNsb25lRWxlbWVudCBhcyBmfWZyb21cInByZWFjdFwiO2V4cG9ydHtDb21wb25lbnQsRnJhZ21lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVFbGVtZW50LGNyZWF0ZVJlZn1mcm9tXCJwcmVhY3RcIjtpbXBvcnR7dXNlU3RhdGUgYXMgYSx1c2VJZCBhcyBzLHVzZVJlZHVjZXIgYXMgaCx1c2VFZmZlY3QgYXMgdix1c2VMYXlvdXRFZmZlY3QgYXMgZCx1c2VSZWYgYXMgcCx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG0sdXNlTWVtbyBhcyB5LHVzZUNhbGxiYWNrIGFzIF8sdXNlQ29udGV4dCBhcyBiLHVzZURlYnVnVmFsdWUgYXMgU31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7ZnVuY3Rpb24gZyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIHcobixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0oRS5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIFI9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLFImJlIobil9O3ZhciB4PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiBOKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9Zyh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZnx8bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9eCx0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgaz1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LEE9e21hcDprLGZvckVhY2g6ayxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sTz1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7TyhuLHQsZSxyKX07dmFyIFQ9ZS51bm1vdW50O2Z1bmN0aW9uIEkobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWcoe30sbikpLl9fYyYmKG4uX19jLl9fUD09PWUmJihuLl9fYy5fX1A9dCksbi5fX2M9bnVsbCksbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gSShuLHQsZSl9KSksbn1mdW5jdGlvbiBMKG4sdCxlKXtyZXR1cm4gbiYmKG4uX192PW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gTChuLHQsZSl9KSxuLl9fYyYmbi5fX2MuX19QPT09dCYmKG4uX19lJiZlLmluc2VydEJlZm9yZShuLl9fZSxuLl9fZCksbi5fX2MuX19lPSEwLG4uX19jLl9fUD1lKSksbn1mdW5jdGlvbiBVKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIEQobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19hJiZ0Ll9fYShuKX1mdW5jdGlvbiBGKG4pe3ZhciBlLHIsdTtmdW5jdGlvbiBvKG8pe2lmKGV8fChlPW4oKSkudGhlbihmdW5jdGlvbihuKXtyPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7dT1ufSksdSl0aHJvdyB1O2lmKCFyKXRocm93IGU7cmV0dXJuIHQocixvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLl9fZj0hMCxvfWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1lLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxUJiZUKG4pfSwoVS5wcm90b3R5cGU9bmV3IG4pLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PUQoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Epe3ZhciBuPXIuc3RhdGUuX19hO3IuX192Ll9fa1swXT1MKG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fYTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2E6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LFUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxVLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obixlKXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09SSh0aGlzLl9fYixyLG8uX19PPW8uX19QKX10aGlzLl9fYj1udWxsfXZhciBpPWUuX19hJiZ0KHUsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gaSYmKGkuX19oPW51bGwpLFt0KHUsbnVsbCxlLl9fYT9udWxsOm4uY2hpbGRyZW4pLGldfTt2YXIgVj1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBXKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gUChuKXt2YXIgZT10aGlzLHI9bi5pO2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtvKG51bGwsZS5sKSxlLmw9bnVsbCxlLmk9bnVsbH0sZS5pJiZlLmkhPT1yJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KGUubHx8KGUuaT1yLGUubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOnIsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSxlLmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLHQpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksZS5pLnJlbW92ZUNoaWxkKG4pfX0pLG8odChXLHtjb250ZXh0OmUuY29udGV4dH0sbi5fX3YpLGUubCkpOmUubCYmZS5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uICQobixlKXt2YXIgcj10KFAse19fdjpuLGk6ZX0pO3JldHVybiByLmNvbnRhaW5lckluZm89ZSxyfShNLnByb3RvdHlwZT1uZXcgbikuX19hPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1EKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxWKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXIobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtWKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsej0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fGltYWdlfGxldHRlcnxsaWdodGluZ3xtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8cG9pbnRlcnxzaGFwZXxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx0cmFuc2Zvcm18dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCxIPWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gWihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxvKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiBZKG4sdCxlKXtyZXR1cm4gaShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9bi5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkobi5wcm90b3R5cGUsdCx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOm59KX19KX0pO3ZhciBxPWUuZXZlbnQ7ZnVuY3Rpb24gRygpe31mdW5jdGlvbiBKKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIEsoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWUuZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIHEmJihuPXEobikpLG4ucGVyc2lzdD1HLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9SixuLmlzRGVmYXVsdFByZXZlbnRlZD1LLG4ubmF0aXZlRXZlbnQ9bn07dmFyIFEsWD17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sbm49ZS52bm9kZTtlLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMsdT1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgbz0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBpIGluIHU9e30sZSl7dmFyIGw9ZVtpXTtCJiZcImNoaWxkcmVuXCI9PT1pJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1pJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09bHx8KFwiZGVmYXVsdFZhbHVlXCI9PT1pJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP2k9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PWkmJiEwPT09bD9sPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KGkpP2k9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KGkrdCkmJiFIKGUudHlwZSk/aT1cIm9uaW5wdXRcIjovXm9uZm9jdXMkL2kudGVzdChpKT9pPVwib25mb2N1c2luXCI6L15vbmJsdXIkL2kudGVzdChpKT9pPVwib25mb2N1c291dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wfENvbXBvKS8udGVzdChpKT9pPWkudG9Mb3dlckNhc2UoKTpvJiZ6LnRlc3QoaSk/aT1pLnJlcGxhY2UoL1tBLVowLTldL2csXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09bCYmKGw9dm9pZCAwKSwvXm9uaW5wdXQkL2kudGVzdChpKSYmKGk9aS50b0xvd2VyQ2FzZSgpLHVbaV0mJihpPVwib25pbnB1dENhcHR1cmVcIikpLHVbaV09bCl9XCJzZWxlY3RcIj09dCYmdS5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheSh1LnZhbHVlKSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT11LmRlZmF1bHRWYWx1ZSYmKHUudmFsdWU9cihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9dS5tdWx0aXBsZT8tMSE9dS5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTp1LmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXUsZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihYLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJih1LmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLFgpKX1uLiQkdHlwZW9mPWosbm4mJm5uKG4pfTt2YXIgdG49ZS5fX3I7ZS5fX3I9ZnVuY3Rpb24obil7dG4mJnRuKG4pLFE9bi5fX2N9O3ZhciBlbj17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIFEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0scm49XCIxNy4wLjJcIjtmdW5jdGlvbiB1bihuKXtyZXR1cm4gdC5iaW5kKG51bGwsbil9ZnVuY3Rpb24gb24obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBsbihuKXtyZXR1cm4gb24obik/Zi5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBjbihuKXtyZXR1cm4hIW4uX19rJiYobyhudWxsLG4pLCEwKX1mdW5jdGlvbiBmbihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBhbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxzbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxobj11O2Z1bmN0aW9uIHZuKG4pe24oKX1mdW5jdGlvbiBkbihuKXtyZXR1cm4gbn1mdW5jdGlvbiBwbigpe3JldHVyblshMSx2bl19dmFyIG1uPWQ7ZnVuY3Rpb24geW4obix0KXt2YXIgZT10KCkscj1hKHtoOntfXzplLHY6dH19KSx1PXJbMF0uaCxvPXJbMV07cmV0dXJuIGQoZnVuY3Rpb24oKXt1Ll9fPWUsdS52PXQsdS5fXyE9PXQoKSYmbyh7aDp1fSl9LFtuLGUsdF0pLHYoZnVuY3Rpb24oKXtyZXR1cm4gdS5fXyE9PXUudigpJiZvKHtoOnV9KSxuKGZ1bmN0aW9uKCl7dS5fXyE9PXUudigpJiZvKHtoOnV9KX0pfSxbbl0pLGV9dmFyIF9uPXt1c2VTdGF0ZTphLHVzZUlkOnMsdXNlUmVkdWNlcjpoLHVzZUVmZmVjdDp2LHVzZUxheW91dEVmZmVjdDpkLHVzZUluc2VydGlvbkVmZmVjdDptbix1c2VUcmFuc2l0aW9uOnBuLHVzZURlZmVycmVkVmFsdWU6ZG4sdXNlU3luY0V4dGVybmFsU3RvcmU6eW4sc3RhcnRUcmFuc2l0aW9uOnZuLHVzZVJlZjpwLHVzZUltcGVyYXRpdmVIYW5kbGU6bSx1c2VNZW1vOnksdXNlQ2FsbGJhY2s6Xyx1c2VDb250ZXh0OmIsdXNlRGVidWdWYWx1ZTpTLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjpBLHJlbmRlcjpaLGh5ZHJhdGU6WSx1bm1vdW50Q29tcG9uZW50QXROb2RlOmNuLGNyZWF0ZVBvcnRhbDokLGNyZWF0ZUVsZW1lbnQ6dCxjcmVhdGVDb250ZXh0OmwsY3JlYXRlRmFjdG9yeTp1bixjbG9uZUVsZW1lbnQ6bG4sY3JlYXRlUmVmOmMsRnJhZ21lbnQ6dSxpc1ZhbGlkRWxlbWVudDpvbixmaW5kRE9NTm9kZTpmbixDb21wb25lbnQ6bixQdXJlQ29tcG9uZW50OkUsbWVtbzp3LGZvcndhcmRSZWY6TixmbHVzaFN5bmM6c24sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6YW4sU3RyaWN0TW9kZTpobixTdXNwZW5zZTpVLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDplbn07ZXhwb3J0e0EgYXMgQ2hpbGRyZW4sRSBhcyBQdXJlQ29tcG9uZW50LGhuIGFzIFN0cmljdE1vZGUsVSBhcyBTdXNwZW5zZSxNIGFzIFN1c3BlbnNlTGlzdCxlbiBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxsbiBhcyBjbG9uZUVsZW1lbnQsdW4gYXMgY3JlYXRlRmFjdG9yeSwkIGFzIGNyZWF0ZVBvcnRhbCxfbiBhcyBkZWZhdWx0LGZuIGFzIGZpbmRET01Ob2RlLHNuIGFzIGZsdXNoU3luYyxOIGFzIGZvcndhcmRSZWYsWSBhcyBoeWRyYXRlLG9uIGFzIGlzVmFsaWRFbGVtZW50LEYgYXMgbGF6eSx3IGFzIG1lbW8sWiBhcyByZW5kZXIsdm4gYXMgc3RhcnRUcmFuc2l0aW9uLGNuIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsYW4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZG4gYXMgdXNlRGVmZXJyZWRWYWx1ZSxtbiBhcyB1c2VJbnNlcnRpb25FZmZlY3QseW4gYXMgdXNlU3luY0V4dGVybmFsU3RvcmUscG4gYXMgdXNlVHJhbnNpdGlvbixybiBhcyB2ZXJzaW9ufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmKENvbXBvbmVudCkge1xuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcbiAgICByZXR1cm4gRm9yd2FyZGVkQ29tcG9uZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDaGlsZHJlbih7IGNoaWxkcmVuOiBsaHMgfSwgeyBjaGlsZHJlbjogcmhzIH0pIHtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2hpbGRyZW4uanMubWFwIiwiZnVuY3Rpb24gcihlKXt2YXIgdCxmLG49XCJcIjtpZihcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGUpbis9ZTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBlKWlmKEFycmF5LmlzQXJyYXkoZSkpZm9yKHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdJiYoZj1yKGVbdF0pKSYmKG4mJihuKz1cIiBcIiksbis9Zik7ZWxzZSBmb3IodCBpbiBlKWVbdF0mJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBmdW5jdGlvbiBjbHN4KCl7Zm9yKHZhciBlLHQsZj0wLG49XCJcIjtmPGFyZ3VtZW50cy5sZW5ndGg7KShlPWFyZ3VtZW50c1tmKytdKSYmKHQ9cihlKSkmJihuJiYobis9XCIgXCIpLG4rPXQpO3JldHVybiBufWV4cG9ydCBkZWZhdWx0IGNsc3g7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSB9LCB7IGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUgfSkge1xuICAgIC8vIE5vdGU6IEZvciB0aGUgc2FrZSBvZiBmb3J3YXJkIGNvbXBhdGliaWxpdHksIHRoaXMgZnVuY3Rpb24gaXMgbGFiZWxsZWQgYXNcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XG4gICAgICAgIGNvbnN0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgY29uc3QgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWRlYnVnZ2VyICovXG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHsgcmVmOiByaHMgfSwgeyByZWY6IGxocyB9KSB7XG4gICAgY29uc3QgY29tYmluZWQgPSB1c2VDYWxsYmFjaygoY3VycmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICB9LCBbbGhzLCByaHNdKTtcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICB9XG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21iaW5lZDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXJlZnMuanMubWFwIiwiZnVuY3Rpb24gc3R5bGVTdHJpbmdUb09iamVjdChzdHlsZSkge1xuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcbn1cbi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxuICAgICAgICAgICAgcmV0dXJuIGxocy5zdHlsZTtcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcbiAgICAgICAgICAgIC8vICh1c2VNZXJnZWRTdHlsZXMgaXNuJ3QgYSB0cnVlIGhvb2sgLS0gdGhpcyBpc24ndCBhIHZpb2xhdGlvbilcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG9naWM/Pz9cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gVGhleSdyZSBib3RoIHN0cmluZ3MsIGp1c3QgY29uY2F0ZW5hdGUgdGhlbS5cbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLihsaHM/LnN0eWxlID8/IHt9KSxcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUmVmcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcmVmc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcbmxldCBsb2cgPSBjb25zb2xlLndhcm47XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcyhsaHNBbGwsIHJoc0FsbCkge1xuICAgIC8vIEZpcnN0LCBzZXBhcmF0ZSB0aGUgcHJvcHMgd2Ugd2VyZSBnaXZlbiBpbnRvIHR3byBncm91cHM6XG4gICAgLy8gbGhzQWxsIGFuZCByaHNBbGwgY29udGFpbiBhbGwgdGhlIHByb3BzIHdlIHdlcmUgZ2l2ZW4sIGFuZFxuICAgIC8vIGxoc01pc2MgYW5kIHJoc01pc2MgY29udGFpbiBhbGwgcHJvcHMgKmV4Y2VwdCogZm9yIHRoZSBlYXN5IG9uZXNcbiAgICAvLyBsaWtlIGNsYXNzTmFtZSBhbmQgc3R5bGUgdGhhdCB3ZSBhbHJlYWR5IGtub3cgaG93IHRvIG1lcmdlLlxuICAgIGNvbnN0IHsgY2hpbGRyZW46IF9saHNDaGlsZHJlbiwgY2xhc3M6IF9saHNDbGFzcywgY2xhc3NOYW1lOiBfbGhzQ2xhc3NOYW1lLCBzdHlsZTogX2xoc1N0eWxlLCByZWY6IF9saHNSZWYsIC4uLmxoc01pc2MgfSA9IGxoc0FsbDtcbiAgICBjb25zdCB7IGNoaWxkcmVuOiBfcmhzQ2hpbGRyZW4sIGNsYXNzOiBfcmhzQ2xhc3MsIGNsYXNzTmFtZTogX3Joc0NsYXNzTmFtZSwgc3R5bGU6IF9yaHNTdHlsZSwgcmVmOiBfcmhzUmVmLCAuLi5yaHNNaXNjIH0gPSByaHNBbGw7XG4gICAgY29uc3QgcmV0ID0ge1xuICAgICAgICAuLi5saHNNaXNjLFxuICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMobGhzQWxsLCByaHNBbGwpLFxuICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoc0FsbCwgcmhzQWxsKSxcbiAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoc0FsbCwgcmhzQWxsKSxcbiAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoc0FsbCwgcmhzQWxsKSxcbiAgICB9O1xuICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQucmVmO1xuICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcbiAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXG4gICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XG4gICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxuICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cbiAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xuICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHNNaXNjKTtcbiAgICBmb3IgKGNvbnN0IFtyaHNLZXlVLCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xuICAgICAgICBjb25zdCByaHNLZXkgPSByaHNLZXlVO1xuICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc01pc2NbcmhzS2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXG4gICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xuICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgIGxvZz8uKGBUaGUgcHJvcCBcIiR7cmhzS2V5fVwiIGNhbm5vdCBzaW11bHRhbmVvdXNseSBiZSB0aGUgdmFsdWVzICR7bGhzVmFsdWV9IGFuZCAke3Joc1ZhbHVlfS4gT25lIG11c3QgYmUgY2hvc2VuIG91dHNpZGUgb2YgdXNlTWVyZ2VkUHJvcHMuYCk7XG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcbiAgICBpZiAoIWxocylcbiAgICAgICAgcmV0dXJuIHJocztcbiAgICBpZiAoIXJocylcbiAgICAgICAgcmV0dXJuIGxocztcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbHYgPSBsaHMoLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuLyoqXG4gKiBEZWJ1ZyBob29rLlxuICpcbiAqIEdpdmVuIGEgdmFsdWUgb3Igc2V0IG9mIHZhbHVlcywgZW1pdHMgYSBjb25zb2xlIGVycm9yIGlmIGFueSBvZiB0aGVtIGNoYW5nZSBmcm9tIG9uZSByZW5kZXIgdG8gdGhlIG5leHQuXG4gKlxuICogRXZlbnR1YWxseSwgd2hlbiB1c2VFdmVudCBsYW5kcywgd2UgaG9wZWZ1bGx5IHdvbid0IG5lZWQgdGhpcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eShwYXJlbnRIb29rTmFtZSwgLi4udmFsdWVzKSB7XG4gICAgdXNlSGVscGVyKHZhbHVlcy5sZW5ndGgsIDApO1xuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XG4gICAgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIHVzZUhlbHBlcih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgICAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZih2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHNob3duRXJyb3IgPSB1c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudCAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzaG93bkVycm9yLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBob29rICR7cGFyZW50SG9va05hbWV9IHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCBhcmd1bWVudC5gKTtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlUmVuZGVyaW5nKGYpIHtcbiAgICAob3B0aW9ucy5kZWJvdW5jZVJlbmRlcmluZyA/PyBzZXRUaW1lb3V0KShmKTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cbiAqXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzdW1tYXJpemUsIGl0J3MgbGlrZSBhIGB1c2VTdGF0ZWAtYHVzZUVmZmVjdGAgbWFzaHVwOlxuICpcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxuICogMi4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB5b3UgY2FuIHJ1biBhIGZ1bmN0aW9uIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgdGhhdCBvcHRpb25hbGx5IHJldHVybnMgYSBjbGVhbnVwIGZ1bmN0aW9uXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxuICpcbiAqIEBwYXJhbSBvbkNoYW5nZSBUaGUgXCJlZmZlY3RcIiBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcy4gRWZmZWN0aXZlbHkgdGhlIHNhbWUgYXMgYHVzZUVmZmVjdGAncyBcImVmZmVjdFwiIGZ1bmN0aW9uLiAgTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGN1c3RvbURlYm91bmNlUmVuZGVyaW5nIEJ5IGRlZmF1bHQsIGNoYW5nZXMgdG8gcGFzc2l2ZSBzdGF0ZSBhcmUgZGVsYXllZCBieSBvbmUgdGljayBzbyB0aGF0IHdlIG9ubHkgY2hlY2sgZm9yIGNoYW5nZXMgaW4gYSBzaW1pbGFyIHdheSB0byBQcmVhY3QuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyB0bywgZm9yIGV4YW1wbGUsIGFsd2F5cyBydW4gaW1tZWRpYXRlbHkgaW5zdGVhZC5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSwgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3Qgd2FybmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZVBhc3NpdmVTdGF0ZVwiLCBvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlLCBjdXN0b21EZWJvdW5jZVJlbmRlcmluZyk7XG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsgLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBydW4gb3VyIGVmZmVjdCBhdCBsZWFzdCBvbmNlIG9uIG1vdW50LlxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXG4gICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXG4gICAgY29uc3QgciA9IHVzZVJlZih7IHByZXZEZXA6IFVuc2V0IH0pO1xuICAgIGNvbnN0IHNldFZhbHVlID0gdXNlQ2FsbGJhY2soKGFyZykgPT4ge1xuICAgICAgICAvLyBSZWdhcmRsZXNzIG9mIGFueXRoaW5nIGVsc2UsIGZpZ3VyZSBvdXQgd2hhdCBvdXIgbmV4dCB2YWx1ZSBpcyBhYm91dCB0byBiZS5cbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gKGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCkgOiBhcmcpO1xuICAgICAgICBpZiAoci5jdXJyZW50LnByZXZEZXAgPT09IFVuc2V0ICYmIG5leHRWYWx1ZSAhPT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgcmVxdWVzdCB0byBjaGFuZ2UgdGhpcyB2YWx1ZS5cbiAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRoZSByZXF1ZXN0IGltbWVkaWF0ZWx5LCB0aGVuIHF1ZXVlIHVwIHRoZSBvbkNoYW5nZSBmdW5jdGlvblxuICAgICAgICAgICAgLy8gU2F2ZSBvdXIgY3VycmVudCB2YWx1ZSBzbyB0aGF0IHdlIGNhbiBjb21wYXJlIGFnYWluc3QgaXQgbGF0ZXJcbiAgICAgICAgICAgIC8vIChpZiB3ZSBmbGlwIGJhY2sgdG8gdGhpcyBzdGF0ZSwgdGhlbiB3ZSB3b24ndCBzZW5kIHRoZSBvbkNoYW5nZSBmdW5jdGlvbilcbiAgICAgICAgICAgIHIuY3VycmVudC5wcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIHVwZGF0ZSB0aGlzIGhlcmUgKGFzIHdlbGwgYXMgYmVsb3cpIGluIGNhc2UgY3VzdG9tRGVib3VuY2VSZW5kZXJpbmcgaW52b2tlcyB0aGlzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgdGhlIGFjdHVhbCBjaGVjayBhbmQgaW52b2NhdGlvbiBvZiBvbkNoYW5nZSBsYXRlciB0byBsZXQgZWZmZWN0cyBzZXR0bGVcbiAgICAgICAgICAgIChjdXN0b21EZWJvdW5jZVJlbmRlcmluZyA/PyBkZWJvdW5jZVJlbmRlcmluZykoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHREZXAgPSB2YWx1ZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZEZXAgPSByLmN1cnJlbnQucHJldkRlcDtcbiAgICAgICAgICAgICAgICBpZiAoci5jdXJyZW50LnByZXZEZXAgIT0gdmFsdWVSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJlZCBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4obmV4dERlcCwgcHJldkRlcCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IG5leHREZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBXZSd2ZSBmaW5pc2hlZCB3aXRoIGV2ZXJ5dGhpbmcsIHNvIG1hcmsgdXMgYXMgYmVpbmcgb24gYSBjbGVhbiBzbGF0ZSBhZ2Fpbi5cbiAgICAgICAgICAgICAgICByLmN1cnJlbnQucHJldkRlcCA9IFVuc2V0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YWx1ZSBpbW1lZGlhdGVseS5cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIGNoZWNrZWQgYWdhaW5zdCBwcmV2RGVwIHRvIHNlZSBpZiB3ZSBzaG91bGQgYWN0dWFsbHkgY2FsbCBvbkNoYW5nZVxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59XG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xuLy8gRWFzeSBjb25zdGFudHMgZm9yIGdldEluaXRpYWxWYWx1ZVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVyblRydWUoKSB7IHJldHVybiB0cnVlOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7IHJldHVybiBmYWxzZTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuVW5kZWZpbmVkKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuWmVybygpIHsgcmV0dXJuIDA7IH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IG9wdGlvbnMgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICpcbiAqXG4gKiAoVGhpcyBpcyBoZXJlLCBpbiB0aGlzIHBhcnRpY3VsYXIgZmlsZSwgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG4gKiB3aXRob3V0IGFsc28gbWFraW5nIGEgdXRpbGl0aWVzIGZpbGUuXG4gKiBPbmNlIHdlIGNhbiByZW1vdmUgdGhpcyBob29rLCB3ZSBjYW4gcHV0IHRoaXMgZnVuY3Rpb24gYmFjayB3aXRoIHVzZVJhbmRvbUlkKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cbmNvbnN0IHByZXZpb3VzSW5wdXRzID0gbmV3IE1hcCgpO1xuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XG4vLyBUT0RPOiBXaGV0aGVyIHRoaXMgZ29lcyBpbiBvcHRpb25zLmRpZmZlZCBvciBvcHRpb25zLl9jb21taXRcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXG4vLyAqYWZ0ZXIqIHJlZnMgYXJlIGFwcGxpZWQsIGJ1dCB3ZSBuZWVkIHRvIGNvbWUgYmVmb3JlIGV2ZW4gdGhhdFxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXG4vLyBcbi8vIEFsc28gaXQncyBwcml2YXRlLlxuLy9cbi8vIC4uLlxuLy8gV2VsbCwgdXNlRXZlbnQgb3Igd2hhdGV2ZXIgaXMgZmluYWxseSwgZmluYWxseSA0IHllYXJzIGxhdGVyIGZpbmFsbHkgaGVyZVxuLy8gd2hpY2ggaXMgY29vbCBhbmQgbWVhbnMgd2Ugd29uJ3QgbmVlZCB0aGlzIGF0IGFsbCBzb29uLlxuLy8gU28gZm9yIG5vdyB3ZSdsbCBzdGljayB3aXRoIGRpZmYgdG8gcHJldmVudCBhbnkgd2VpcmRuZXNzIHdpdGhcbi8vIGNvbW1pdCBiZWluZyBwcml2YXRlIGFuZCBhbGwuXG5jb25zdCBjb21taXROYW1lID0gXCJkaWZmZWRcIjtcbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICguLi5hcmdzKSA9PiB7XG4gICAgZm9yIChjb25zdCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4oLi4uYXJncyk7XG59O1xub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICAvKigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSB1c2VSZWY8dm9pZCB8ICgoKSA9PiB2b2lkKSB8IG51bGw+KG51bGwpO1xuICAgICAgICBjb25zdCBwcmV2QXJnc1JlZiA9IHVzZVJlZjxJbnB1dHM+KG51bGwhKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKGlucHV0cywgcHJldkFyZ3NSZWYuY3VycmVudCkpIHtcbiAgICAgICAgICAgIHByZXZBcmdzUmVmLmN1cnJlbnQgPSBpbnB1dHMhO1xuICAgICAgICAgICAgaWYgKGNsZWFudXAuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGNsZWFudXAuY3VycmVudCA9IGVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfSkoKTsqL1xuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH07XG4gICAgfSwgW2lkXSk7XG59XG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInByZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtiYXRjaGVkUmFmQ2FsbGJhY2ssIHRhZ10gb2YgYWxsQ2FsbGJhY2tzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBiYXRjaGVkUmFmQ2FsbGJhY2sobXNTaW5jZUxhc3QsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0SW5mby5jdXJyZW50LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKlxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKlxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyBub29wKTtcbiAgICBjb25zdCBoYXNDYWxsYmFjayA9IChjYWxsYmFjayAhPSBudWxsKTtcbiAgICBjb25zdCBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCkge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYSB3cmFwcGVyIGFyb3VuZCB0aGUgd3JhcHBlciBhcm91bmQgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZkNhbGxiYWNrID0gKG1zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWFuaW1hdGlvbi1mcmFtZS5qcy5tYXAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5leHBvcnQgZGVmYXVsdCBmcmVlR2xvYmFsO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RUb1N0cmluZztcbiIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoZWxlbWVudCkgeyByZXR1cm4gKGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQgPz8gd2luZG93LmRvY3VtZW50ID8/IGdsb2JhbFRoaXMuZG9jdW1lbnQpOyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlRG9jdW1lbnRDbGFzcyhjbGFzc05hbWUsIGFjdGl2ZSwgZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPz89IGdldERvY3VtZW50KCkuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNsYXNzTmFtZSA9IGNsc3goY2xhc3NOYW1lKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbY2xhc3NOYW1lLCBhY3RpdmUsIGVsZW1lbnRdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1kb2N1bWVudC1jbGFzcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLyoqXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCxcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICpcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KGFyZ3MpIHtcbiAgICBjb25zdCB7IG9uRWxlbWVudENoYW5nZSwgb25Nb3VudCwgb25Vbm1vdW50IH0gPSAoYXJncyA/PyB7fSk7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlUmVmRWxlbWVudFwiLCBvbkVsZW1lbnRDaGFuZ2UsIG9uTW91bnQsIG9uVW5tb3VudCk7XG4gICAgLy8gQ2FsbGVkIChpbmRpcmVjdGx5KSBieSB0aGUgcmVmIHRoYXQgdGhlIGVsZW1lbnQgcmVjZWl2ZXMuXG4gICAgY29uc3QgaGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBwcmV2VmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW51cCA9IG9uRWxlbWVudENoYW5nZT8uKGUsIHByZXZWYWx1ZSk7XG4gICAgICAgIGlmIChwcmV2VmFsdWUpXG4gICAgICAgICAgICBvblVubW91bnQ/LihwcmV2VmFsdWUpO1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIG9uTW91bnQ/LihlKTtcbiAgICAgICAgcmV0dXJuIGNsZWFudXA7XG4gICAgfSwgW10pO1xuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUoaGFuZGxlciwgcmV0dXJuTnVsbCwgcnVuSW1tZWRpYXRlbHkpO1xuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoeyByZWY6IHNldEVsZW1lbnQgfSwgcHJvcHMpLCBbXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG5mdW5jdGlvbiBydW5JbW1lZGlhdGVseShmKSB7XG4gICAgZigpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGdldERvY3VtZW50IH0gZnJvbSBcIi4vdXNlLWRvY3VtZW50LWNsYXNzXCI7XG5pbXBvcnQgeyByZXR1cm5OdWxsLCB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShcInVzZUVsZW1lbnRTaXplXCIsIGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XG4gICAgY29uc3QgW2dldFNpemUsIHNldFNpemVdID0gdXNlUGFzc2l2ZVN0YXRlKG9uU2l6ZUNoYW5nZSwgcmV0dXJuTnVsbCk7XG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAod2luZG93ICYmIChcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChfZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcbiAgICAgICAgICAgICAgICBuZWVkQU5ld09ic2VydmVyKGdldEVsZW1lbnQoKSwgZ2V0T2JzZXJ2ZUJveCgpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHVzZUVsZW1lbnRTaXplUHJvcHM6IHVzZVJlZkVsZW1lbnRQcm9wc1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZWxlbWVudC1zaXplLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHJvb3RFbGVtZW50IFRoZSBIVE1MRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovbm9kZTtcblxuICAgICAgICAgIC8vIElmIGEgZGVzY2VuZGFudCBpbmVydCByb290IGJlY29tZXMgdW4taW5lcnQsIGl0cyBkZXNjZW5kYW50cyB3aWxsIHN0aWxsIGJlIGluZXJ0IGJlY2F1c2Ugb2ZcbiAgICAgICAgICAvLyB0aGlzIGluZXJ0IHJvb3QsIHNvIGFsbCBvZiBpdHMgbWFuYWdlZCBub2RlcyBuZWVkIHRvIGJlIGFkb3B0ZWQgYnkgdGhpcyBJbmVydFJvb3QuXG4gICAgICAgICAgaWYgKGVsZW1lbnQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdpbmVydCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdChlbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykgfHwgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLnJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5hZGQoaW5lcnROb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBnaXZlbiBub2RlIHdpdGggdGhpcyBJbmVydFJvb3QgYW5kIHdpdGggSW5lcnRNYW5hZ2VyLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKG5vZGUsIHRoaXMpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10oaW5lcnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZW50aXJlIHN1YnRyZWUgc3RhcnRpbmcgYXQgYHN0YXJ0Tm9kZWAuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VTdWJ0cmVlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZVN1YnRyZWUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuX3VubWFuYWdlTm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGRlc2NlbmRhbnQgbm9kZSBpcyBmb3VuZCB3aXRoIGFuIGBpbmVydGAgYXR0cmlidXRlLCBhZG9wdCBpdHMgbWFuYWdlZCBub2Rlcy5cbiAgICAgICAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi90aGlzLl9ub2RlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fc2F2ZWRUYWJJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGBkZWxldGVgIHRvIHJlc3RvcmUgbmF0aXZlIGZvY3VzIG1ldGhvZC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBlbGVtZW50LmZvY3VzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNlZSBub3RlIGluIEluZXJ0Um9vdC5kZXN0cnVjdG9yIGZvciB3aHkgd2UgY2FzdCB0aGVzZSBudWxscyB0byBBTlkuXG4gICAgICAgICAgdGhpcy5fbm9kZSA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufSBXaGV0aGVyIHRoaXMgb2JqZWN0IGlzIG9ic29sZXRlIGJlY2F1c2UgdGhlIG1hbmFnZWQgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqIElmIHRoZSBvYmplY3QgaGFzIGJlZW4gZGVzdHJveWVkLCBhbnkgYXR0ZW1wdCB0byBhY2Nlc3MgaXQgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ190aHJvd0lmRGVzdHJveWVkJyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaHJvdyBpZiB1c2VyIHRyaWVzIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90aHJvd0lmRGVzdHJveWVkKCkge1xuICAgICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdlbnN1cmVVbnRhYmJhYmxlJyxcblxuXG4gICAgICAgIC8qKiBTYXZlIHRoZSBleGlzdGluZyB0YWJpbmRleCB2YWx1ZSBhbmQgbWFrZSB0aGUgbm9kZSB1bnRhYmJhYmxlIGFuZCB1bmZvY3VzYWJsZSAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW5zdXJlVW50YWJiYWJsZSgpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9yZWNvcmQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBpbmVydCA9IHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0SW5lcnQodGFyZ2V0LCBpbmVydCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEluZXJ0TWFuYWdlcjtcbiAgICB9KCk7XG5cbiAgICAvKipcbiAgICAgKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBjb21wb3NlZCB0cmVlIGZyb20gfG5vZGV8LlxuICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgKiBAcGFyYW0geyhmdW5jdGlvbiAoIUhUTUxFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2luZXJ0JykpIHtcbiAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgIHZhciBpbmVydE1hbmFnZXIgPSBuZXcgSW5lcnRNYW5hZ2VyKGRvY3VtZW50KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoaW5lcnQpIHtcbiAgICAgICAgICBpbmVydE1hbmFnZXIuc2V0SW5lcnQodGhpcywgaW5lcnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG5cbn0pKSk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuKCgpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHByb3BlcnRpZXMgKi9cbiAgICBjb25zdCBfYmxvY2tpbmdFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9hbHJlYWR5SW5lcnRFbGVtZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF90b3BFbFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc2libGluZ3NUb1Jlc3RvcmUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcGFyZW50TU8gPSBTeW1ib2woKTtcbiAgICAvKiBTeW1ib2xzIGZvciBwcml2YXRlIHN0YXRpYyBtZXRob2RzICovXG4gICAgY29uc3QgX3RvcENoYW5nZWQgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfc3dhcEluZXJ0ZWRTaWJsaW5nID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2luZXJ0U2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXRQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4gPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaXNJbmVydGFibGUgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaGFuZGxlTXV0YXRpb25zID0gU3ltYm9sKCk7XG4gICAgY2xhc3MgQmxvY2tpbmdFbGVtZW50c0ltcGwge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhlIGJsb2NraW5nIGVsZW1lbnRzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19hXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBVc2VkIHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhcmVudHMgb2YgdGhlIHRvcCBlbGVtZW50LCBmcm9tIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgKiBpdHNlbGYgdXAgdG8gYm9keS4gV2hlbiB0b3AgY2hhbmdlcywgdGhlIG9sZCB0b3AgbWlnaHQgaGF2ZSBiZWVuIHJlbW92ZWRcbiAgICAgICAgICAgICAqIGZyb20gdGhlIGRvY3VtZW50LCBzbyB3ZSBuZWVkIHRvIG1lbW9pemUgdGhlIGluZXJ0ZWQgcGFyZW50cycgc2libGluZ3NcbiAgICAgICAgICAgICAqIGluIG9yZGVyIHRvIHJlc3RvcmUgdGhlaXIgaW5lcnRlbmVzcyB3aGVuIHRvcCBjaGFuZ2VzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19iXSA9IFtdO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFbGVtZW50cyB0aGF0IGFyZSBhbHJlYWR5IGluZXJ0IGJlZm9yZSB0aGUgZmlyc3QgYmxvY2tpbmcgZWxlbWVudCBpc1xuICAgICAgICAgICAgICogcHVzaGVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzW19jXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBvcmlnaW5hbCBpbmVydG5lc3MuXG4gICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXSh0aGlzW190b3BFbFBhcmVudHNdKTtcbiAgICAgICAgICAgIC8vIE5vdGUgd2UgZG9uJ3Qgd2FudCB0byBtYWtlIHRoZXNlIHByb3BlcnRpZXMgbnVsbGFibGUgb24gdGhlIGNsYXNzLFxuICAgICAgICAgICAgLy8gc2luY2UgdGhlbiB3ZSdkIG5lZWQgbm9uLW51bGwgY2FzdHMgaW4gbWFueSBwbGFjZXMuIENhbGxpbmcgYSBtZXRob2Qgb25cbiAgICAgICAgICAgIC8vIGEgQmxvY2tpbmdFbGVtZW50cyBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRlc3RydWN0b3Igd2lsbCByZXN1bHQgaW4gYW5cbiAgICAgICAgICAgIC8vIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IG51bGxhYmxlID0gdGhpcztcbiAgICAgICAgICAgIG51bGxhYmxlW19ibG9ja2luZ0VsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfdG9wRWxQYXJlbnRzXSA9IG51bGw7XG4gICAgICAgICAgICBudWxsYWJsZVtfYWxyZWFkeUluZXJ0RWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdG9wKCkge1xuICAgICAgICAgICAgY29uc3QgZWxlbXMgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtc1tlbGVtcy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHB1c2goZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQgPT09IHRoaXMudG9wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIGl0IGZyb20gdGhlIHN0YWNrLCB3ZSdsbCBicmluZyBpdCB0byB0aGUgdG9wLlxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgLy8gVG9wIGNoYW5nZWQgb25seSBpZiB0aGUgcmVtb3ZlZCBlbGVtZW50IHdhcyB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoaSA9PT0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0odGhpcy50b3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcG9wKCkge1xuICAgICAgICAgICAgY29uc3QgdG9wID0gdGhpcy50b3A7XG4gICAgICAgICAgICB0b3AgJiYgdGhpcy5yZW1vdmUodG9wKTtcbiAgICAgICAgICAgIHJldHVybiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgaGFzKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5pbmRleE9mKGVsZW1lbnQpICE9PSAtMTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBgaW5lcnRgIHRvIGFsbCBkb2N1bWVudCBlbGVtZW50cyBleGNlcHQgdGhlIG5ldyB0b3AgZWxlbWVudCwgaXRzXG4gICAgICAgICAqIHBhcmVudHMsIGFuZCBpdHMgZGlzdHJpYnV0ZWQgY29udGVudC5cbiAgICAgICAgICovXG4gICAgICAgIFsoX2EgPSBfYmxvY2tpbmdFbGVtZW50cywgX2IgPSBfdG9wRWxQYXJlbnRzLCBfYyA9IF9hbHJlYWR5SW5lcnRFbGVtZW50cywgX3RvcENoYW5nZWQpXShuZXdUb3ApIHtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgY29uc3Qgb2xkUGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICAvLyBObyBuZXcgdG9wLCByZXNldCBvbGQgdG9wIGlmIGFueS5cbiAgICAgICAgICAgIGlmICghbmV3VG9wKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cyk7XG4gICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3UGFyZW50cyA9IHRoaXNbX2dldFBhcmVudHNdKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBOZXcgdG9wIGlzIG5vdCBjb250YWluZWQgaW4gdGhlIG1haW4gZG9jdW1lbnQhXG4gICAgICAgICAgICBpZiAobmV3UGFyZW50c1tuZXdQYXJlbnRzLmxlbmd0aCAtIDFdLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignTm9uLWNvbm5lY3RlZCBlbGVtZW50IGNhbm5vdCBiZSBhIGJsb2NraW5nIGVsZW1lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc3QgaGVyZSBiZWNhdXNlIHdlIGtub3cgd2UnbGwgY2FsbCBfaW5lcnRTaWJsaW5ncyBvbiBuZXdQYXJlbnRzXG4gICAgICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBuZXdQYXJlbnRzO1xuICAgICAgICAgICAgY29uc3QgdG9Ta2lwID0gdGhpc1tfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5vIHByZXZpb3VzIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKCFvbGRQYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBpID0gb2xkUGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgbGV0IGogPSBuZXdQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBGaW5kIGNvbW1vbiBwYXJlbnQuIEluZGV4IDAgaXMgdGhlIGVsZW1lbnQgaXRzZWxmIChzbyBzdG9wIGJlZm9yZSBpdCkuXG4gICAgICAgICAgICB3aGlsZSAoaSA+IDAgJiYgaiA+IDAgJiYgb2xkUGFyZW50c1tpXSA9PT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cCB0aGUgcGFyZW50cyB0cmVlIHRoZXJlIGFyZSAyIGVsZW1lbnRzIHRoYXQgYXJlIHNpYmxpbmdzLCBzd2FwXG4gICAgICAgICAgICAvLyB0aGUgaW5lcnRlZCBzaWJsaW5nLlxuICAgICAgICAgICAgaWYgKG9sZFBhcmVudHNbaV0gIT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICB0aGlzW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZFBhcmVudHNbaV0sIG5ld1BhcmVudHNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgcGFyZW50cyBzaWJsaW5ncyBpbmVydG5lc3MuXG4gICAgICAgICAgICBpID4gMCAmJiB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzLnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICAgIC8vIE1ha2UgbmV3IHBhcmVudHMgc2libGluZ3MgaW5lcnQuXG4gICAgICAgICAgICBqID4gMCAmJiB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLnNsaWNlKDAsIGopLCB0b1NraXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTd2FwcyBpbmVydG5lc3MgYmV0d2VlbiB0d28gc2libGluZyBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRJbmVydCwgbmV3SW5lcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzVG9SZXN0b3JlID0gb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgIC8vIG9sZEluZXJ0IGlzIG5vdCBjb250YWluZWQgaW4gc2libGluZ3MgdG8gcmVzdG9yZSwgc28gd2UgaGF2ZSB0byBjaGVja1xuICAgICAgICAgICAgLy8gaWYgaXQncyBpbmVydGFibGUgYW5kIGlmIGFscmVhZHkgaW5lcnQuXG4gICAgICAgICAgICBpZiAodGhpc1tfaXNJbmVydGFibGVdKG9sZEluZXJ0KSAmJiAhb2xkSW5lcnQuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICBvbGRJbmVydC5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuYWRkKG9sZEluZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5ld0luZXJ0IHdhcyBhbHJlYWR5IGJldHdlZW4gdGhlIHNpYmxpbmdzIHRvIHJlc3RvcmUsIGl0IG1lYW5zIGl0IGlzXG4gICAgICAgICAgICAvLyBpbmVydGFibGUgYW5kIG11c3QgYmUgcmVzdG9yZWQuXG4gICAgICAgICAgICBpZiAoc2libGluZ3NUb1Jlc3RvcmUuaGFzKG5ld0luZXJ0KSkge1xuICAgICAgICAgICAgICAgIG5ld0luZXJ0LmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2libGluZ3NUb1Jlc3RvcmUuZGVsZXRlKG5ld0luZXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0luZXJ0W19wYXJlbnRNT10gPSBvbGRJbmVydFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgbmV3SW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHNpYmxpbmdzVG9SZXN0b3JlO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlc3RvcmVzIG9yaWdpbmFsIGluZXJ0bmVzcyB0byB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShlbGVtZW50cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBlbGVtZW50W19wYXJlbnRNT107XG4gICAgICAgICAgICAgICAgbW8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpYmxpbmcgb2Ygc2libGluZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluZXJ0cyB0aGUgc2libGluZ3Mgb2YgdGhlIGVsZW1lbnRzIGV4Y2VwdCB0aGUgZWxlbWVudHMgdG8gc2tpcC4gU3RvcmVzXG4gICAgICAgICAqIHRoZSBpbmVydGVkIHNpYmxpbmdzIGludG8gdGhlIGVsZW1lbnQncyBzeW1ib2wgYF9zaWJsaW5nc1RvUmVzdG9yZWAuXG4gICAgICAgICAqIFBhc3MgYHRvS2VlcEluZXJ0YCB0byBjb2xsZWN0IHRoZSBhbHJlYWR5IGluZXJ0IGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19pbmVydFNpYmxpbmdzXShlbGVtZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgLy8gQXNzdW1lIGVsZW1lbnQgaXMgbm90IGEgRG9jdW1lbnQsIHNvIGl0IG11c3QgaGF2ZSBhIHBhcmVudE5vZGUuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBjaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgaW5wdXQgZWxlbWVudCwgaWYgbm90IGluZXJ0YWJsZSBvciB0byBiZSBza2lwcGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCB8fCAhdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodG9Ta2lwICYmIHRvU2tpcC5oYXMoc2libGluZykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBTaG91bGQgYmUgY29sbGVjdGVkIHNpbmNlIGFscmVhZHkgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2libGluZ3MgdGhhdCB3ZXJlIGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gaW5lcnRlZFNpYmxpbmdzO1xuICAgICAgICAgICAgICAgIC8vIE9ic2VydmUgb25seSBpbW1lZGlhdGUgY2hpbGRyZW4gbXV0YXRpb25zIG9uIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgY29uc3QgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzW19oYW5kbGVNdXRhdGlvbnNdLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3BhcmVudE1PXSA9IG1vO1xuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRUb09ic2VydmUgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgdGhlIFNoYWR5RE9NIHBvbHlmaWxsLCB0aGVuIG91ciBwYXJlbnQgY291bGQgYmUgYVxuICAgICAgICAgICAgICAgIC8vIHNoYWR5IHJvb3QsIHdoaWNoIGlzIGFuIG9iamVjdCB0aGF0IGFjdHMgbGlrZSBhIFNoYWRvd1Jvb3QsIGJ1dCBpc24ndFxuICAgICAgICAgICAgICAgIC8vIGFjdHVhbGx5IGEgbm9kZSBpbiB0aGUgcmVhbCBET00uIE9ic2VydmUgdGhlIHJlYWwgRE9NIHBhcmVudCBpbnN0ZWFkLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1heWJlU2hhZHlSb290ID0gcGFyZW50VG9PYnNlcnZlO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVNoYWR5Um9vdC5fX3NoYWR5ICYmIG1heWJlU2hhZHlSb290Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VG9PYnNlcnZlID0gbWF5YmVTaGFkeVJvb3QuaG9zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW8ub2JzZXJ2ZShwYXJlbnRUb09ic2VydmUsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIG5ld2x5IGFkZGVkL3JlbW92ZWQgbm9kZXMgYnkgdG9nZ2xpbmcgdGhlaXIgaW5lcnRuZXNzLlxuICAgICAgICAgKiBJdCBhbHNvIGNoZWNrcyBpZiB0aGUgY3VycmVudCB0b3AgQmxvY2tpbmcgRWxlbWVudCBoYXMgYmVlbiByZW1vdmVkLFxuICAgICAgICAgKiBub3RpZnlpbmcgYW5kIHJlbW92aW5nIGl0LlxuICAgICAgICAgKi9cbiAgICAgICAgW19oYW5kbGVNdXRhdGlvbnNdKG11dGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IHRoaXNbX3RvcEVsUGFyZW50c107XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHRhcmdldCBpcyBhIHNoYWRvd1Jvb3QsIGdldCBpdHMgaG9zdCBhcyB3ZSBza2lwIHNoYWRvd1Jvb3RzIHdoZW5cbiAgICAgICAgICAgICAgICAvLyBjb21wdXRpbmcgX3RvcEVsUGFyZW50cy5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXQuaG9zdCB8fCBtdXRhdGlvbi50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5ID9cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5sZW5ndGggOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkQ2hpbGQgPSBwYXJlbnRzW2lkeCAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRTaWJsaW5ncyA9IGluZXJ0ZWRDaGlsZFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIC8vIFRvIHJlc3RvcmUuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5yZW1vdmVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLnJlbW92ZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGluZXJ0ZWRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKCdEZXRlY3RlZCByZW1vdmFsIG9mIHRoZSB0b3AgQmxvY2tpbmcgRWxlbWVudC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZXJ0ZWRTaWJsaW5ncy5oYXMoc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5kZWxldGUoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG8gaW5lcnQuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbi5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvS2VlcEluZXJ0ICYmIHNpYmxpbmcuaW5lcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmFkZChzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBpZiB0aGUgZWxlbWVudCBpcyBpbmVydGFibGUuXG4gICAgICAgICAqL1xuICAgICAgICBbX2lzSW5lcnRhYmxlXShlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgPT09IC9eKHN0eWxlfHRlbXBsYXRlfHNjcmlwdCkkLy50ZXN0KGVsZW1lbnQubG9jYWxOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgbGlzdCBvZiBuZXdQYXJlbnRzIG9mIGFuIGVsZW1lbnQsIHN0YXJ0aW5nIGZyb20gZWxlbWVudFxuICAgICAgICAgKiAoaW5jbHVkZWQpIHVwIHRvIGBkb2N1bWVudC5ib2R5YCAoZXhjbHVkZWQpLlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXRQYXJlbnRzXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gW107XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAvLyBTdG9wIHRvIGJvZHkuXG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gU2tpcCBzaGFkb3cgcm9vdHMuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2hhZG93RG9tIHYxXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxlY3Qgc2xvdHMgZnJvbSBkZWVwZXN0IHNsb3QgdG8gdG9wLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCA9IGN1cnJlbnQuYXNzaWduZWRTbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHNlYXJjaCBvbiB0aGUgdG9wIHNsb3QuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBwYXJlbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZSB8fFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Lmhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyB0aGUgZGlzdHJpYnV0ZWQgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQncyBzaGFkb3cgcm9vdC5cbiAgICAgICAgICogUmV0dXJucyBudWxsIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhIHNoYWRvdyByb290LlxuICAgICAgICAgKi9cbiAgICAgICAgW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBqO1xuICAgICAgICAgICAgbGV0IG5vZGVzO1xuICAgICAgICAgICAgY29uc3Qgc2xvdHMgPSBzaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgICAgICAgICAgIGlmIChzbG90cy5sZW5ndGggJiYgc2xvdHNbMF0uYXNzaWduZWROb2Rlcykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzbG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IHNsb3RzW2ldLmFzc2lnbmVkTm9kZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBub2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVzW2pdLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobm9kZXNbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vIG5lZWQgdG8gc2VhcmNoIGZvciA8Y29udGVudD4uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LiRibG9ja2luZ0VsZW1lbnRzID1cbiAgICAgICAgbmV3IEJsb2NraW5nRWxlbWVudHNJbXBsKCk7XG59KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmxvY2tpbmctZWxlbWVudHMuanMubWFwIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzQXJndW1lbnRzO1xuIiwiaW1wb3J0IGJhc2VJc0FyZ3VtZW50cyBmcm9tICcuL19iYXNlSXNBcmd1bWVudHMuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FyZ3VtZW50cztcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuaW1wb3J0IHN0dWJGYWxzZSBmcm9tICcuL3N0dWJGYWxzZS5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaXNCdWZmZXI7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZUVsZW1lbnRTaXplIH0gZnJvbSBcIi4vdXNlLWVsZW1lbnQtc2l6ZVwiO1xuaW1wb3J0IHsgcmV0dXJuTnVsbCwgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cmluZygxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KFwidXNlTG9naWNhbERpcmVjdGlvblwiLCBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRDb21wdXRlZFN0eWxlcywgc2V0Q29tcHV0ZWRTdHlsZXNdID0gdXNlUGFzc2l2ZVN0YXRlKG51bGwsIHJldHVybk51bGwpO1xuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgIH0pO1xuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxuICAgIC8vICAgQS4gVGhlcmUncyBubyB3YXkgdG8gd2F0Y2ggZm9yIENTUyBzdHlsZSBjaGFuZ2VzXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXG4gICAgLy9cbiAgICAvLyBBcyBhIHNvbHV0aW9uLCBoZXJlJ3MgYSBjaGVhcCB3b3JrYXJvdW5kIHRoYXQgY2hlY2tzIHdoZW4gdGhlIGVsZW1lbnQncyBzaXplIGhhcyBjaGFuZ2VkLFxuICAgIC8vIGFuZCBpZiBzbywgdGVzdHMgaWYgdGhlIHdyaXRpbmcgbW9kZSBoYXMgY2hhbmdlZCB0b28uXG4gICAgLy9cbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgYXQgbGVhc3Qgc29tZSBudW1iZXIgb2YgY2FzZXMsIGJ1dCBhIGJldHRlciBzb2x1dGlvbiBpcyBzdGlsbCBuZWVkZWQuXG4gICAgY29uc3QgeyB1c2VFbGVtZW50U2l6ZVByb3BzIH0gPSB1c2VFbGVtZW50U2l6ZSh7IG9uU2l6ZUNoYW5nZTogdXNlQ2FsbGJhY2soXyA9PiBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2U/LihnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpKSwgW10pIH0pO1xuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XG4gICAgICAgIGlmIChjb21wdXRlZFN0eWxlcykge1xuICAgICAgICAgICAgY29uc3QgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XG4gICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICAgICAgZCA9IFwibHRyXCI7XG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMl1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XG4gICAgICAgICAgICBjYXNlIFwiaW5saW5lLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1kZWJ1Z2dlciAqL1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxuICAgICAgICAgICAgY29uc3QgY2xpZW50SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBjb25zdCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjMgPSBnZXRQaHlzaWNhbExlZnRUb3AoYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSkpO1xuICAgICAgICAgICAgY29uc3QgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNsaWVudElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIGNsaWVudElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxuICAgICAgICAgICAgICAgIGNsaWVudEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcbiAgICAgICAgZ2V0RWxlbWVudCxcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaXplOiBjb252ZXJ0RWxlbWVudFNpemUsXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpZGUsXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsU2lkZVxuICAgIH07XG59XG4vLyBQb3NpdGlvbiByZXF1aXJlcyB1cyB0byBzb21ldGltZXMgdXNlIG9uZSBwcm9wZXJ0eSAobGlrZSBgbGVmdGApXG4vLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXG5mdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXG4gICAgcmV0dXJuIFwibGVmdFwiOyByZXR1cm4gXCJ0b3BcIjsgfVxuZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcbiAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxuICAgIHJldHVybiBcImhlaWdodFwiOyByZXR1cm4gbnVsbDsgfVxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXG5jb25zdCBNID0ge1xuICAgIHQ6IFwidG9wXCIsXG4gICAgYjogXCJib3R0b21cIixcbiAgICBsOiBcImxlZnRcIixcbiAgICByOiBcInJpZ2h0XCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VMb2dpY2FsRGlyZWN0aW9uLCB1c2VNZXJnZWRQcm9wcywgdXNlUmVmRWxlbWVudCB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmZ1bmN0aW9uIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIHNob3csIHBoYXNlKSB7XG4gICAgaWYgKHBoYXNlKVxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9LSR7cGhhc2V9YDtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7c2hvd31gO1xufVxubGV0IGR1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBlO1xufVxuLyoqXG4gKiBBIGhvb2sgdGhhdCBhZGRzICYgcmVtb3ZlcyBjbGFzcyBuYW1lcyBpbiBhIHdheSB0aGF0IGZhY2lsaXRhdGVzIHByb3BlciB0cmFuc2l0aW9ucy5cbiAqXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgY29udGFpbnMgdGhlIHByb3BzIHJlbGF0ZWQgZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVGhlIHNlY29uZCBhcmd1bWVudCBjb250YWlucyBhbnkgb3RoZXIgcHJvcHMgeW91IG1pZ2h0IHdhbnQgbWVyZ2VkIGludG8gdGhlIGZpbmFsIHByb2R1Y3QgKHRoZXNlIGFyZSBub3QgcmVhZCBvciBtYW5pcHVsYXRlZCBvciBhbnl0aGluZyAtLSBpdCdzIHB1cmVseSBzaG9ydGhhbmQgYW5kIGNhbiBiZSBvbWl0dGVkIHdpdGggYHt9YCBhbmQgdGhlbiB5b3VyIG93biBgdXNlTWVyZ2VkUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb25hYmxlKHsgbWVhc3VyZSwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgb25UcmFuc2l0aW9uVXBkYXRlLCBleGl0VmlzaWJpbGl0eSwgZHVyYXRpb24sIHNob3csIHJlZiB9KSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgW3BoYXNlLCBzZXRQaGFzZV0gPSB1c2VTdGF0ZShhbmltYXRlT25Nb3VudCA/IFwiaW5pdFwiIDogbnVsbCk7XG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKHNob3cgPT0gbnVsbCA/IG51bGwgOiBzaG93ID8gXCJlbnRlclwiIDogXCJleGl0XCIpO1xuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZUhlaWdodCwgc2V0U3VyZmFjZUhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZVgsIHNldFN1cmZhY2VYXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdXaWR0aCwgc2V0VHJhbnNpdGlvbmluZ1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nSGVpZ2h0LCBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdZLCBzZXRUcmFuc2l0aW9uaW5nWV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogc2V0TG9naWNhbERpcmVjdGlvbkluZm8gfSk7XG4gICAgY29uc3Qgb25UcmFuc2l0aW9uVXBkYXRlUmVmID0gdXNlUmVmKG9uVHJhbnNpdGlvblVwZGF0ZSk7XG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IGR1cmF0aW9uUmVmID0gdXNlUmVmKGR1cmF0aW9uKTtcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0b29MYXRlVGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldEVsZW1lbnQoKSAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQgPSBvblRyYW5zaXRpb25VcGRhdGU7IH0sIFtvblRyYW5zaXRpb25VcGRhdGVdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBwaGFzZVJlZi5jdXJyZW50ID0gcGhhc2U7IH0sIFtwaGFzZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZHVyYXRpb25SZWYuY3VycmVudCA9IGR1cmF0aW9uOyB9LCBbZHVyYXRpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIHBoYXNlKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQ/LihkaXJlY3Rpb24sIHBoYXNlKTtcbiAgICB9LCBbZGlyZWN0aW9uLCBwaGFzZV0pO1xuICAgIC8vIEV2ZXJ5IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gXCJ0cmFuc2l0aW9uXCIsIGFkZCBvdXIgdHJhbnNpdGlvbiB0aW1lb3V0IHRpbWVvdXRzXG4gICAgLy8gdG8gY2F0Y2ggYW55IHRpbWUgb25UcmFuc2l0aW9uRW5kIGZhaWxzIHRvIHJlcG9ydCBmb3Igd2hhdGV2ZXIgcmVhc29uIHRvIGJlIHNhZmVcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IGR1cmF0aW9uUmVmLmN1cnJlbnQgPz8gMTAwMDtcbiAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b29MYXRlVGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgfSwgW3BoYXNlXSk7XG4gICAgLy8gQW55IHRpbWUgXCJzaG93XCIgY2hhbmdlcywgdXBkYXRlIG91ciBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgIC8vIEluIGFkZGl0aW9uLCBtZWFzdXJlIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGlmIHJlcXVlc3RlZC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBzaG93ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGhhc2UgPSBwaGFzZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gU3dhcCBvdXIgZGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoc2hvdylcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJlbnRlclwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJleGl0XCIpO1xuICAgICAgICAgICAgc2V0UGhhc2UocHJldmlvdXNQaGFzZSA9PT0gbnVsbCA/IFwiZmluYWxpemVcIiA6IFwiaW5pdFwiKTtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1koeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzUGhhc2UgPT09IFwiZmluYWxpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBnb2luZyB0byBiZSBtZXNzaW5nIHdpdGggdGhlIGFjdHVhbCBlbGVtZW50J3MgY2xhc3MsIFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSdsbCB3YW50IGFuIGVhc3kgd2F5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2t1cCA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsIGAke2NsYXNzQmFzZX0tZXhpdGAsIGAke2NsYXNzQmFzZX0tZXhpdC1pbml0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWV4aXQtZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVXaXRob3V0VHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZVdpdGhvdXRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVkoeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBiYWNrdXA7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaG93LCBtZWFzdXJlLCBjbGFzc0Jhc2VdKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBpbml0LCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIHNjcmVlbiBpcyBwYWludGVkLFxuICAgIC8vIGNoYW5nZSB0aGUgcGhhc2UgdG8gXCJ0cmFuc2l0aW9uXCIgYW5kIHJlLXJlbmRlciAoKS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgICAgICAgICAgaWYgKHBoYXNlID09PSBcImluaXRcIikge1xuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XG4gICAgICAgICAgICAgICAgLy8gTm93IHNldCBvdXIgdHJhbnNpdGlvbiBzdHlsZS5cbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcInRyYW5zaXRpb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3BoYXNlLCBtZWFzdXJlXSk7XG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmlubGluZURpcmVjdGlvbjtcbiAgICBjb25zdCBibG9ja0RpcmVjdGlvbiA9IGxvZ2ljYWxEaXJlY3Rpb25JbmZvPy5ibG9ja0RpcmVjdGlvbjtcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGhhc2UsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgICAgdXNlVHJhbnNpdGlvbmFibGVQcm9wczogZnVuY3Rpb24gdXNlVHJhbnNpdGlvbmFibGVQcm9wcyhvdGhlclByb3BzKSB7XG4gICAgICAgICAgICBsZXQgYWxtb3N0RG9uZSA9IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMoe1xuICAgICAgICAgICAgICAgIHJlZixcbiAgICAgICAgICAgICAgICBzdHlsZTogcmVtb3ZlRW1wdHkoe1xuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF06IGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UteGBdOiBzdXJmYWNlWCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXlgXTogc3VyZmFjZVksXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS13aWR0aGBdOiBzdXJmYWNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1oZWlnaHRgXTogc3VyZmFjZUhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWlubGluZS1pbnNldGBdOiBzdXJmYWNlSW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1pbnNldGBdOiBzdXJmYWNlQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWlubGluZS1zaXplYF06IHN1cmZhY2VJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2stc2l6ZWBdOiBzdXJmYWNlQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteGBdOiB0cmFuc2l0aW9uaW5nWCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXlgXTogdHJhbnNpdGlvbmluZ1ksXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy13aWR0aGBdOiB0cmFuc2l0aW9uaW5nV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1oZWlnaHRgXTogdHJhbnNpdGlvbmluZ0hlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWlubGluZS1pbnNldGBdOiB0cmFuc2l0aW9uaW5nSW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1pbnNldGBdOiB0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWlubGluZS1zaXplYF06IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctYmxvY2stc2l6ZWBdOiB0cmFuc2l0aW9uaW5nQmxvY2tTaXplXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kLFxuICAgICAgICAgICAgICAgIC4uLih7IFwiYXJpYS1oaWRkZW5cIjogc2hvdyA/IHVuZGVmaW5lZCA6IFwidHJ1ZVwiIH0pLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xzeChkaXJlY3Rpb24gJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uKSwgZGlyZWN0aW9uICYmIHBoYXNlICYmIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIGRpcmVjdGlvbiwgcGhhc2UpLCBleGl0VmlzaWJpbGl0eSA9PSBcInJlbW92ZWRcIiAmJiBgJHtjbGFzc0Jhc2V9LXJlbW92ZWQtb24tZXhpdGAsIGV4aXRWaXNpYmlsaXR5ID09IFwidmlzaWJsZVwiICYmIGAke2NsYXNzQmFzZX0tdmlzaWJsZS1vbi1leGl0YCwgYCR7Y2xhc3NCYXNlfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCwgYCR7Y2xhc3NCYXNlfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWApLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKGFsbW9zdERvbmUsIG90aGVyUHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtfLCB2XSkgPT4gdiAhPSBudWxsKSk7XG59XG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgKndyYXBzIGFuIEhUTUxFbGVtZW50IG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCogYW5kIGFsbG93cyBpdCB0byB1c2UgQ1NTIHRvIHRyYW5zaXRpb24gaW4vb3V0LlxuICogQ29tYmluZXMgdGhlIHByb3BzIHBhc3NlZCB0byBpdCwgdGhlIHByb3BzIGl0cyBjaGlsZCBoYXMsIGFuZCB0aGUgcHJvcHMgbmVlZGVkIGZvciB0aGUgQ1NTIHRyYW5zaXRpb24sIGFuZCBwYXNzZXMgdGhlbVxuICogYWxsIHRvIHRoZSBjaGlsZCBlbGVtZW50IHlvdSBwcm92aWRlLlxuICpcbiAqIFRoaXMgaXMgdGhlIG1vc3QgZ2VuZXJhbCBjb21wb25lbnQgdGhhdCBvdGhlcnMgdXNlIGFzIGEgYmFzZS4gQnkgZGVmYXVsdCwgdGhpcyBjb21wb25lbnQgYnkgaXRzZWxmIGRvZXNuJ3QgYWN0dWFsbHkgYWRkIGFueSBDU1MgY2xhc3NlcyB0aGF0IGFuaW1hdGUgYW55dGhpbmcgKGxpa2Ugb3BhY2l0eSwgZm9yIGV4YW1wbGUpLlxuICogSXQgYWRkcyBjbGFzc2VzIGxpa2UgYHRyYW5zaXRpb24tZW50ZXItZmluYWxpemVgLCBidXQgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBlLmcuIGBmYWRlYCBjbGFzcyB0aGF0IHJlYWN0cyB0byBpdC5cbiAqXG4gKiBVc2UgdGhpcyBpZiB0aGUgb3RoZXIsIG1vcmUgc3BlY2lhbGl6ZWQgVHJhbnNpdGlvbiBjb21wb25lbnRzIGRvbid0IGZpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30gey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT48ZGl2PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30+PGRpdiB7Li4udXNlQ3JlYXRlRmFkZVByb3BzKC4uLil9PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuOiBjaGlsZCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIHNob3csIG9uVHJhbnNpdGlvblVwZGF0ZSwgYW5pbWF0ZU9uTW91bnQsIGNoaWxkTW91bnRCZWhhdmlvciwgLi4ucHJvcHMgfSwgcikge1xuICAgIGNvbnN0IFtoYXNTaG93bk9uY2UsIHNldEhhc1Nob3duT25jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvdWxkU2V0SGFzU2hvd25PbmNlID0gKGhhc1Nob3duT25jZSA9PT0gZmFsc2UgJiYgY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiBzaG93ID09PSB0cnVlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2hvdWxkU2V0SGFzU2hvd25PbmNlKVxuICAgICAgICBzZXRIYXNTaG93bk9uY2UodHJ1ZSk7IH0sIFtzaG91bGRTZXRIYXNTaG93bk9uY2VdKTtcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LXdoZW4tc2hvd2luZ1wiICYmICFzaG93KVxuICAgICAgICBjaGlsZCA9IGgoXCJkaXZcIiwgbnVsbCk7XG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgIXNob3cgJiYgaGFzU2hvd25PbmNlID09PSBmYWxzZSlcbiAgICAgICAgY2hpbGQgPSBoKFwiZGl2XCIsIG51bGwpO1xuICAgIGlmICghY2hpbGRJc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBUcmFuc2l0aW9uYWJsZSBjb21wb25lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGNvbXBvbmVudCBjaGlsZCAoZS5nLiBhIDxkaXYgLz4sIGJ1dCBub3QgXFxcImEgc3RyaW5nXFxcIikuXCIpO1xuICAgIH1cbiAgICBjb25zdCB7IGRpcmVjdGlvbiwgcGhhc2UsIHVzZVRyYW5zaXRpb25hYmxlUHJvcHMgfSA9IHVzZVRyYW5zaXRpb25hYmxlKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgbWVhc3VyZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG9uVHJhbnNpdGlvblVwZGF0ZSwgcmVmOiByLCBleGl0VmlzaWJpbGl0eSB9KTtcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcyh1c2VUcmFuc2l0aW9uYWJsZVByb3BzKHByb3BzKSwgeyAuLi5jaGlsZC5wcm9wcywgcmVmOiBjaGlsZC5yZWYgfSk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgbWVyZ2VkV2l0aENoaWxkcmVuKTtcbn0pO1xuZnVuY3Rpb24gY2hpbGRJc1ZOb2RlKGNoaWxkKSB7XG4gICAgaWYgKCFjaGlsZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2hpbGQgIT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXCJwcm9wc1wiIGluIGNoaWxkKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25hYmxlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIENsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2sgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICAuLi51c2VNZXJnZWRQcm9wcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlfS1jbGlwYCksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4taW5saW5lYF06IChjbGlwT3JpZ2luSW5saW5lID8/IGNsaXBPcmlnaW4gPz8gMC41KSxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1taW4tYmxvY2tgXTogKGNsaXBNaW5CbG9jayA/PyBjbGlwTWluID8/IDApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgb3RoZXJQcm9wcylcbiAgICB9O1xufVxuO1xuZXhwb3J0IGNvbnN0IENsaXAgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgLi4udXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmFkZS1tYXhgXTogKGZhZGVNYXggPz8gMSksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG90aGVyUHJvcHMpXG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZhZGUgZWZmZWN0LlxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ2xpcCB9IGZyb20gXCIuL2NsaXBcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuO1xuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoQ2xpcCwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cbiAqXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgbWVhc3VyZTogdHJ1ZSxcbiAgICAgICAgLi4udXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWNvbGxhcHNlYCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3RoZXJQcm9wcylcbiAgICB9O1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxuICpcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXG4gKiBNYWtlIHN1cmUgeW91IGRvIHRlc3Rpbmcgb24gbG93ZXIgcG93ZXIgZGV2aWNlcywgb3IgcHJlZmVyIGEgbGlnaHRlclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBDb2xsYXBzZSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgQ29sbGFwc2VgIGBGYWRlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2VGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKENvbGxhcHNlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgU2xpZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHNsaWRlVGFyZ2V0SW5saW5lID8/IDEpO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHNsaWRlVGFyZ2V0SW5saW5lKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IHNsaWRlVGFyZ2V0SW5saW5lOyB9LCBbc2xpZGVUYXJnZXRJbmxpbmVdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRCbG9jaylcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IHNsaWRlVGFyZ2V0QmxvY2s7IH0sIFtzbGlkZVRhcmdldEJsb2NrXSk7XG4gICAgaWYgKHNsaWRlVGFyZ2V0SW5saW5lID09IDApXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKHNsaWRlVGFyZ2V0QmxvY2sgPT0gMClcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICAuLi51c2VNZXJnZWRQcm9wcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tc2xpZGVgLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvdGhlclByb3BzKVxuICAgIH07XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXG4gKlxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxuICpcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxuICogKGBzbGlkZUlubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIEZhZGUgZWZmZWN0cy5cbiAqXG4gKiBgc2xpZGVJbmxpbmU9eyhpbmRleCAtIHNlbGVjdGVkSW5kZXgpIC8gMTB9YCB3b3VsZCBtYWtlIHRoZSBlbGVtZW50IGxvb2sgbGlrZSBpdCBmYWRlcyBvdXQgYmVmb3JlIGl0IHRyYXZlbHMgdG8gaXRzIHRhcmdldCBkZXN0aW5hdGlvbi5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21gXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoU2xpZGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiAoe1xuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIC4uLnVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4taW5saW5lYF06IGAkeyh6b29tTWluSW5saW5lID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgb3RoZXJQcm9wcylcbiAgICB9KTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFpvb20gfSBmcm9tIFwiLi96b29tXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBab29tIGFuZCBGYWRlIGVmZmVjdHMuXG4gKlxuICogVGhpcyBpcyBhbiBpZGVhbCB0aW1lIHRvIHVzZSB0aGUgbWluaW11bSBzaXplIFpvb20gcHJvcGVydGllcy5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21gXG4gKi9cbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFpvb20sIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIFpvb20gZWZmZWN0cy5cbiAqXG4gKiBQcm9iYWJseSBiZXN0IGNvbWJpbmVkIHdpdGggYHVzZUNyZWF0ZUZhZGVQcm9wc2AgKG9yIGp1c3QgdXNpbmcgYSBgU2xpZGVab29tRmFkZWA/KS5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFNsaWRlRmFkZVpvb21gIGBab29tYCBgRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbSh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoU2xpZGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBTbGlkZVpvb20gfSBmcm9tIFwiLi9zbGlkZS16b29tXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggWm9vbSwgU2xpZGUsIGFuZCBGYWRlIGVmZmVjdHMuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgaXMgYmFzaWNhbGx5IGp1c3Qgc2hvcnRoYW5kIGZvciBzb21lIHByb3AgY3JlYXRpb24gYW5kIHByb3AgbWVyZ2luZyBmdW5jdGlvbnMuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZWAgYFpvb21gIGBGYWRlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoU2xpZGVab29tLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKGZsaXBBbmdsZUlubGluZSA/PyAxODApO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gZmxpcEFuZ2xlSW5saW5lOyB9LCBbZmxpcEFuZ2xlSW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xuICAgIGlmIChmbGlwQW5nbGVJbmxpbmUgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXG4gICAgICAgIGZsaXBBbmdsZUJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcbiAgICByZXR1cm4ge1xuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIC4uLnVzZU1lcmdlZFByb3BzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mbGlwYCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXG4gICAgICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyhmbGlwQW5nbGVCbG9jayA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tcGVyc3BlY3RpdmVgXTogYCR7KHBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG90aGVyUHJvcHMpXG4gICAgfTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtjbGFzc0Jhc2UgPz8gXCJ0cmFuc2l0aW9uXCJ9LXN3YXAtY29udGFpbmVyLWlubGluZWApXG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG4vKipcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxuICpcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cbiAqXG4gKiBMaWtlIGA8VHJhbnNpdGlvbmFibGU+YCwgKnRoaXMgd3JhcHMgYW4gSFRNTEVsZW1lbnQgKG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCkqLiBUaGlzIHdpbGwgYmUgeW91ciBjb250YWluZXIgdGhhdCBob2xkcyBlYWNoIGA8VHJhbnNpdGlvbmFibGU+YCAob3IgY29tcG9uZW50IHRoYXQgdXNlcyBpdCkuIFN0cmljdGx5IHNwZWFraW5nIGl0IGNvdWxkIGJlIGFueXRoaW5nLCBub3QgYSBgPFRyYW5zaXRpb25hYmxlPmAsIGJ1dCBpZiBpdCBkb2VzbnQndCB0cmFuc2l0aW9uIG91dCB0aGVuIGl0J3MganVzdCBnb2luZyB0byBiZSBoYW5naW5nIGFyb3VuZCAxMDAlIG9mIHRoZSB0aW1lLlxuICpcbiAqIExvbmcgd2F5IG9mIHNheWluZywgaWYgeW91IGdldCBhIGNyeXB0aWMgZXJyb3Igd2l0aCB0aGlzIGNvbXBvbmVudCwgbWFrZSBzdXJlIGl0IGhhcyBhIHNpbmdsZSBgPGRpdj5gIGNoaWxkIG9yIHNvbWV0aGluZy5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTd2FwcGFibGUoeyBjaGlsZHJlbiwgY2xhc3NCYXNlLCBpbmxpbmUsIC4uLnAgfSwgcmVmKSB7XG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcyh0cmFuc2l0aW9uUHJvcHMsIGNoaWxkcmVuLnByb3BzKTtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xufSk7XG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cbi8vIE5vdCBwZXJmZWN0LCBidXQgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUuIGBpbmxpbmVgIGlzIGZvciBwZXJmZWN0LlxuY29uc3QgaW5saW5lRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgICBcImFcIixcbiAgICBcImFiYnJcIixcbiAgICBcImFjcm9ueW1cIixcbiAgICBcImF1ZGlvXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiZGlcIixcbiAgICBcImJkb1wiLFxuICAgIFwiYmlnXCIsXG4gICAgXCJiclwiLFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJjYW52YXNcIixcbiAgICBcImNpdGVcIixcbiAgICBcImNvZGVcIixcbiAgICBcImRhdGFcIixcbiAgICBcImRhdGFsaXN0XCIsXG4gICAgXCJkZWxcIixcbiAgICBcImRmblwiLFxuICAgIFwiZW1cIixcbiAgICBcImVtYmVkXCIsXG4gICAgXCJpXCIsXG4gICAgXCJpZnJhbWVcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImluc1wiLFxuICAgIFwia2JkXCIsXG4gICAgXCJsYWJlbFwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJtYXJrXCIsXG4gICAgXCJtZXRlclwiLFxuICAgIFwibm9zY3JpcHRcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwaWN0dXJlXCIsXG4gICAgXCJwcm9ncmVzc1wiLFxuICAgIFwicVwiLFxuICAgIFwicnVieVwiLFxuICAgIFwic1wiLFxuICAgIFwic2FtcFwiLFxuICAgIFwic2NyaXB0XCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcInNsb3RcIixcbiAgICBcInNtYWxsXCIsXG4gICAgXCJzcGFuXCIsXG4gICAgXCJzdHJvbmdcIixcbiAgICBcInN1YlwiLFxuICAgIFwic3VwXCIsXG4gICAgXCJzdmdcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIFwidGltZVwiLFxuICAgIFwidVwiLFxuICAgIFwidHRcIixcbiAgICBcInZhclwiLFxuICAgIFwidmlkZW9cIixcbiAgICBcIndiclwiXG5dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3YXBwYWJsZS5qcy5tYXAiLG51bGxdLCJuYW1lcyI6WyJzbGljZSIsImFzc2lnbiIsIm9iaiIsInByb3BzIiwiaSIsInJlbW92ZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiRU1QVFlfQVJSIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZpb3VzQ29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJFTVBUWSIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwiX19yIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJfX2giLCJob29rcyIsIl9fIiwibGVuZ3RoIiwicHVzaCIsIl9fViIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsIl9fYyIsInVuZGVmaW5lZCIsImN1cnJlbnRWYWx1ZSIsIl9fTiIsIm5leHRWYWx1ZSIsImFjdGlvbiIsInNldFN0YXRlIiwiX2hhc1NjdUZyb21Ib29rcyIsInByZXZTY3UiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJwIiwicyIsImMiLCJfX0giLCJzdGF0ZUhvb2tzIiwiZmlsdGVyIiwieCIsImV2ZXJ5IiwiY2FsbCIsInRoaXMiLCJzaG91bGRVcGRhdGUiLCJmb3JFYWNoIiwiaG9va0l0ZW0iLCJ1c2VFZmZlY3QiLCJjYWxsYmFjayIsImFyZ3MiLCJzdGF0ZSIsImFyZ3NDaGFuZ2VkIiwiX3BlbmRpbmdBcmdzIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImN1cnJlbnQiLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiY29tcG9uZW50Iiwic2hpZnQiLCJfX1AiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsIl9fZSIsIl9fdiIsIl9fYiIsInZub2RlIiwiX21hc2siLCJGcmFnbWVudCIsImluZGV4T2YiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZnRlck5leHRGcmFtZSIsImNvbW1pdFF1ZXVlIiwic29tZSIsImNiIiwiaGFzRXJyb3JlZCIsIkhBU19SQUYiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImhvb2siLCJjb21wIiwiY2xlYW51cCIsIm9sZEFyZ3MiLCJuZXdBcmdzIiwiYXJnIiwiZiIsInNoYWxsb3dEaWZmZXJzIiwiYSIsImIiLCJmb3J3YXJkRWxlbWVudFJlZiIsIkNvbXBvbmVudCIsIkZvcndhcmRlZENvbXBvbmVudCIsImZvcndhcmRSZWYiLCJ1c2VNZXJnZWRDaGlsZHJlbiIsImNoaWxkcmVuIiwibGhzIiwicmhzIiwiY3JlYXRlRWxlbWVudCIsInIiLCJ0IiwibiIsIkFycmF5IiwiaXNBcnJheSIsImNsc3giLCJhcmd1bWVudHMiLCJ1c2VNZXJnZWRDbGFzc2VzIiwiY2xhc3MiLCJsaHNDbGFzcyIsImNsYXNzTmFtZSIsImxoc0NsYXNzTmFtZSIsInJoc0NsYXNzIiwicmhzQ2xhc3NOYW1lIiwibGhzQ2xhc3NlcyIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwiam9pbiIsInByb2Nlc3NSZWYiLCJpbnN0YW5jZSIsInJlZiIsImNvbnNvbGUiLCJhc3NlcnQiLCJ1c2VNZXJnZWRSZWZzIiwiY29tYmluZWQiLCJzdHlsZVN0cmluZ1RvT2JqZWN0Iiwic3R5bGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsIm1hcCIsInN0YXRlbWVudCIsInVzZU1lcmdlZFN0eWxlcyIsIl9vYmplY3RTcHJlYWQiLCJsb2ciLCJ3YXJuIiwidXNlTWVyZ2VkUHJvcHMiLCJsaHNBbGwiLCJyaHNBbGwiLCJsaHNNaXNjIiwiX2V4Y2x1ZGVkIiwicmhzTWlzYyIsInJldCIsInJoc0VudHJpZXMiLCJlbnRyaWVzIiwicmhzS2V5VSIsInJoc1ZhbHVlIiwicmhzS2V5IiwibGhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImx2IiwicnYiLCJQcm9taXNlIiwiYWxsIiwidXNlRW5zdXJlU3RhYmlsaXR5IiwicGFyZW50SG9va05hbWUiLCJ2YWx1ZXMiLCJ1c2VIZWxwZXIiLCJ2YWx1ZSIsImhlbHBlclRvRW5zdXJlU3RhYmlsaXR5Iiwic2hvd25FcnJvciIsImVycm9yIiwiZGVib3VuY2VSZW5kZXJpbmciLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsImN1c3RvbURlYm91bmNlUmVuZGVyaW5nIiwidmFsdWVSZWYiLCJVbnNldCIsIndhcm5pbmdSZWYiLCJjbGVhbnVwQ2FsbGJhY2tSZWYiLCJvblNob3VsZENsZWFuVXAiLCJjbGVhbnVwQ2FsbGJhY2siLCJ0cnlFbnN1cmVWYWx1ZSIsImV4IiwiZ2V0VmFsdWUiLCJwcmV2RGVwIiwic2V0VmFsdWUiLCJGdW5jdGlvbiIsIm5leHREZXAiLCJTeW1ib2wiLCJyZXR1cm5OdWxsIiwicHJldmlvdXNJbnB1dHMiLCJNYXAiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImdldCIsImlucHV0cyIsImVmZmVjdCIsInNldCIsImNsZWFyIiwiY3JlYXRlQ29udGV4dCIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJ0YWciLCJ1bm1hc2tlZCIsInJlc3VsdCIsIm9iamVjdFRvU3RyaW5nIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsImJhc2VHZXRUYWciLCJpc09iamVjdExpa2UiLCJnZXREb2N1bWVudCIsImVsZW1lbnQiLCJvd25lckRvY3VtZW50IiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJnbG9iYWxUaGlzIiwidXNlUmVmRWxlbWVudCIsIm9uRWxlbWVudENoYW5nZSIsIm9uTW91bnQiLCJvblVubW91bnQiLCJoYW5kbGVyIiwicHJldlZhbHVlIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJydW5JbW1lZGlhdGVseSIsInVzZVJlZkVsZW1lbnRQcm9wcyIsInVzZUVsZW1lbnRTaXplIiwiZ2V0T2JzZXJ2ZUJveCIsIm9uU2l6ZUNoYW5nZSIsImdldFNpemUiLCJzZXRTaXplIiwiY3VycmVudE9ic2VydmVCb3giLCJuZWVkQU5ld09ic2VydmVyIiwib2JzZXJ2ZUJveCIsImRlZmF1bHRWaWV3IiwiaGFuZGxlVXBkYXRlIiwiaXNDb25uZWN0ZWQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsTGVmdCIsIm9mZnNldExlZnQiLCJjbGllbnRUb3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiX2VudHJpZXMiLCJvYnNlcnZlIiwiYm94IiwiZGlzY29ubmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUVsZW1lbnRTaXplUHJvcHMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJUeXBlRXJyb3IiLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsImJpbmQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImRlc3RydWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiYm9keSIsImNvbnRhaW5zIiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsIl9hZG9wdEluZXJ0Um9vdCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJhZGQiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwicmVjb3JkIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJFcnJvciIsInRhYkluZGV4IiwiaGFzU2F2ZWRUYWJJbmRleCIsImFkZEluZXJ0Um9vdCIsInJlbW92ZUluZXJ0Um9vdCIsInNpemUiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJIVE1MRWxlbWVudCIsIl9ibG9ja2luZ0VsZW1lbnRzIiwiX2FscmVhZHlJbmVydEVsZW1lbnRzIiwiX3RvcEVsUGFyZW50cyIsIl9zaWJsaW5nc1RvUmVzdG9yZSIsIl9wYXJlbnRNTyIsIl90b3BDaGFuZ2VkIiwiX3N3YXBJbmVydGVkU2libGluZyIsIl9pbmVydFNpYmxpbmdzIiwiX3Jlc3RvcmVJbmVydGVkU2libGluZ3MiLCJfZ2V0UGFyZW50cyIsIl9nZXREaXN0cmlidXRlZENoaWxkcmVuIiwiX2lzSW5lcnRhYmxlIiwiX2hhbmRsZU11dGF0aW9ucyIsIkJsb2NraW5nRWxlbWVudHNJbXBsIiwiY29uc3RydWN0b3IiLCJudWxsYWJsZSIsInRvcCIsImVsZW1zIiwicmVtb3ZlIiwic3BsaWNlIiwicG9wIiwiX2EiLCJfYiIsIl9jIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsInRvU2tpcCIsImoiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJkZWxldGUiLCJlbGVtZW50cyIsIm1vIiwic2libGluZ3MiLCJzaWJsaW5nIiwiaW5lcnRlZFNpYmxpbmdzIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsImlkeCIsImluZXJ0ZWRDaGlsZCIsImluZm8iLCJ0ZXN0IiwiYXNzaWduZWRTbG90Iiwibm9kZXMiLCJzbG90cyIsIiRibG9ja2luZ0VsZW1lbnRzIiwiYXJnc1RhZyIsImJhc2VJc0FyZ3VtZW50cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiZnJlZUV4cG9ydHMiLCJleHBvcnRzIiwiZnJlZU1vZHVsZSIsIm1vZHVsZSIsIm1vZHVsZUV4cG9ydHMiLCJCdWZmZXIiLCJpc0J1ZmZlciIsImZyZWVQcm9jZXNzIiwicHJvY2VzcyIsIm5vZGVVdGlsIiwidHlwZXMiLCJyZXF1aXJlIiwiYmluZGluZyIsImlzVHlwZWRBcnJheSIsImNhcGl0YWxpemUiLCJzdHIiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInVzZUxvZ2ljYWxEaXJlY3Rpb24iLCJvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UiLCJnZXRDb21wdXRlZFN0eWxlcyIsInNldENvbXB1dGVkU3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIl8iLCJnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyIsImNvbXB1dGVkU3R5bGVzIiwidyIsIndyaXRpbmdNb2RlIiwiZCIsImRpcmVjdGlvbiIsInRleHRPcmllbnRhdGlvbiIsIldyaXRpbmdNb2RlcyIsImNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiIsImVsZW1lbnRPcmllbnRhdGlvbiIsImlubGluZU9yaWVudGF0aW9uIiwiY29udmVydFRvUGh5c2ljYWxTaWRlIiwic2lkZSIsIk0iLCJibG9ja0RpcmVjdGlvbiIsImlubGluZURpcmVjdGlvbiIsImNvbnZlcnRUb0xvZ2ljYWxTaWRlIiwiY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiIsImJsb2NrT3JpZW50YXRpb24iLCJjb252ZXJ0RWxlbWVudFNpemUiLCJlbGVtZW50U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJjbGllbnRJbmxpbmVTaXplIiwiY2xpZW50QmxvY2tTaXplIiwib2Zmc2V0SW5saW5lU2l6ZSIsIm9mZnNldEJsb2NrU2l6ZSIsInNjcm9sbElubGluZVNpemUiLCJzY3JvbGxCbG9ja1NpemUiLCJmMSIsImdldFBoeXNpY2FsTGVmdFRvcCIsImYyIiwiZ2V0UGh5c2ljYWxSaWdodEJvdHRvbSIsImYzIiwiZjQiLCJjbGllbnRJbmxpbmVJbnNldCIsInNjcm9sbElubGluZUluc2V0Iiwib2Zmc2V0SW5saW5lSW5zZXQiLCJjbGllbnRCbG9ja0luc2V0Iiwic2Nyb2xsQmxvY2tJbnNldCIsIm9mZnNldEJsb2NrSW5zZXQiLCJ1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMiLCJjb252ZXJ0VG9Mb2dpY2FsU2l6ZSIsImRpciIsImwiLCJIb3Jpem9udGFsVGJMdHIiLCJsZWZ0UmlnaHREaXJlY3Rpb24iLCJvdmVyVW5kZXJEaXJlY3Rpb24iLCJIb3Jpem9udGFsVGJSdGwiLCJWZXJ0aWNhbFJsTHRyIiwiVmVydGljYWxSbFJ0bCIsIlNpZGV3YXlzUmxMdHIiLCJTaWRld2F5c1JsUnRsIiwiVmVydGljYWxMckx0ciIsIlZlcnRpY2FsTHJSdGwiLCJTaWRld2F5c0x0THRyIiwiU2lkZXdheXNMdFJ0bCIsIkhvcml6b250YWxUYiIsImx0ciIsInJ0bCIsIlZlcnRpY2FsUmwiLCJWZXJ0aWNhbExyIiwiU2lkZXdheXNSbCIsIlNpZGV3YXlzTHIiLCJnZXRDbGFzc05hbWUiLCJjbGFzc0Jhc2UiLCJzaG93IiwicGhhc2UiLCJmb3JjZVJlZmxvdyIsImR1bW15IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXNlVHJhbnNpdGlvbmFibGUiLCJtZWFzdXJlIiwiYW5pbWF0ZU9uTW91bnQiLCJvblRyYW5zaXRpb25VcGRhdGUiLCJleGl0VmlzaWJpbGl0eSIsImR1cmF0aW9uIiwic2V0UGhhc2UiLCJzZXREaXJlY3Rpb24iLCJzdXJmYWNlV2lkdGgiLCJzZXRTdXJmYWNlV2lkdGgiLCJzdXJmYWNlSGVpZ2h0Iiwic2V0U3VyZmFjZUhlaWdodCIsInN1cmZhY2VYIiwic2V0U3VyZmFjZVgiLCJzdXJmYWNlWSIsInNldFN1cmZhY2VZIiwidHJhbnNpdGlvbmluZ1dpZHRoIiwic2V0VHJhbnNpdGlvbmluZ1dpZHRoIiwidHJhbnNpdGlvbmluZ0hlaWdodCIsInNldFRyYW5zaXRpb25pbmdIZWlnaHQiLCJ0cmFuc2l0aW9uaW5nWCIsInNldFRyYW5zaXRpb25pbmdYIiwidHJhbnNpdGlvbmluZ1kiLCJzZXRUcmFuc2l0aW9uaW5nWSIsImxvZ2ljYWxEaXJlY3Rpb25JbmZvIiwic2V0TG9naWNhbERpcmVjdGlvbkluZm8iLCJvblRyYW5zaXRpb25VcGRhdGVSZWYiLCJwaGFzZVJlZiIsImRpcmVjdGlvblJlZiIsImR1cmF0aW9uUmVmIiwidG9vRWFybHlUaW1lb3V0UmVmIiwidG9vRWFybHlWYWx1ZVJlZiIsInRvb0xhdGVUaW1lb3V0UmVmIiwib25UcmFuc2l0aW9uRW5kIiwidGltZW91dER1cmF0aW9uIiwicHJldmlvdXNQaGFzZSIsImN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24iLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrdXAiLCJjbGFzc0xpc3QiLCJzaXplV2l0aG91dFRyYW5zaXRpb24iLCJ3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCIsInN1cmZhY2VJbmxpbmVJbnNldCIsInN1cmZhY2VCbG9ja0luc2V0Iiwic3VyZmFjZUlubGluZVNpemUiLCJzdXJmYWNlQmxvY2tTaXplIiwidHJhbnNpdGlvbmluZ0lubGluZUluc2V0IiwidHJhbnNpdGlvbmluZ0Jsb2NrSW5zZXQiLCJ0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSIsInRyYW5zaXRpb25pbmdCbG9ja1NpemUiLCJ1c2VUcmFuc2l0aW9uYWJsZVByb3BzIiwib3RoZXJQcm9wcyIsImFsbW9zdERvbmUiLCJyZW1vdmVFbXB0eSIsInYiLCJUcmFuc2l0aW9uYWJsZSIsIlRyYW5zaXRpb24iLCJjaGlsZE1vdW50QmVoYXZpb3IiLCJoYXNTaG93bk9uY2UiLCJzZXRIYXNTaG93bk9uY2UiLCJzaG91bGRTZXRIYXNTaG93bk9uY2UiLCJoIiwiY2hpbGRJc1ZOb2RlIiwibWVyZ2VkV2l0aENoaWxkcmVuIiwiY2xvbmVFbGVtZW50IiwidXNlQ3JlYXRlQ2xpcFByb3BzIiwiY2xpcE9yaWdpbiIsImNsaXBPcmlnaW5JbmxpbmUiLCJjbGlwT3JpZ2luQmxvY2siLCJjbGlwTWluIiwiY2xpcE1pbklubGluZSIsImNsaXBNaW5CbG9jayIsIkNsaXAiLCJyZXN0IiwidXNlQ3JlYXRlRmFkZVByb3BzIiwiZmFkZU1pbiIsImZhZGVNYXgiLCJGYWRlIiwiQ2xpcEZhZGUiLCJ1c2VDcmVhdGVDb2xsYXBzZVByb3BzIiwibWluQmxvY2tTaXplIiwiQ29sbGFwc2UiLCJDb2xsYXBzZUZhZGUiLCJ1c2VDcmVhdGVTbGlkZVByb3BzIiwic2xpZGVUYXJnZXRJbmxpbmUiLCJzbGlkZVRhcmdldEJsb2NrIiwibGFzdFZhbGlkVGFyZ2V0SW5saW5lIiwibGFzdFZhbGlkVGFyZ2V0QmxvY2siLCJTbGlkZSIsIlNsaWRlRmFkZSIsInVzZUNyZWF0ZVpvb21Qcm9wcyIsInpvb21PcmlnaW4iLCJ6b29tT3JpZ2luSW5saW5lIiwiem9vbU9yaWdpbkJsb2NrIiwiem9vbU1pbiIsInpvb21NaW5JbmxpbmUiLCJ6b29tTWluQmxvY2siLCJab29tIiwiWm9vbUZhZGUiLCJTbGlkZVpvb20iLCJTbGlkZVpvb21GYWRlIiwidXNlQ3JlYXRlRmxpcFByb3BzIiwiZmxpcEFuZ2xlSW5saW5lIiwiZmxpcEFuZ2xlQmxvY2siLCJwZXJzcGVjdGl2ZSIsIkZsaXAiLCJ1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyIsImlubGluZSIsIlN3YXBwYWJsZSIsImlubGluZUVsZW1lbnRzIiwidHJhbnNpdGlvblByb3BzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7QUEwQmFBLE1BQUFBLENBQUFBLENBQUFBOzs7Ozs7Ozs7O0VBakJHQyxTQUFPQyxHQUFBQSxDQUFBQSxDQUFQRCxFQUFZRSxDQUFaRixFQUFZRTtJQUUzQixLQUFLLElBQUlDLENBQVQsSUFBY0QsQ0FBZCxFQUFBO0VBQXFCRCxJQUFBQSxDQUFBQSxDQUFJRSxDQUFKRixDQUFBQSxHQUFTQyxDQUFNQyxDQUFBQSxDQUFORCxDQUFURCxDQUFBQTtFQUFyQixHQUFBOztFQUNBLEVBQUEsT0FBNkJBLENBQTdCLENBQUE7RUFTTSxDQUFBOztFQUFBLFNBQVNHLEdBQVQsQ0FBb0JDLENBQXBCLEVBQW9CQTtJQUMxQixJQUFJQyxDQUFBQSxHQUFhRCxFQUFLQyxVQUF0QixDQUFBO0VBQ0lBLEVBQUFBLENBQUFBLElBQVlBLENBQVdDLENBQUFBLFdBQVhELENBQXVCRCxDQUF2QkMsQ0FBWkEsQ0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxFQUFBLEVBQUEsU0FBUyxFQUFDLGVBQWUsRUFBQTtFQUFFLFlBQUEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7RUFBQyxZQUFBQSxHQUFBLENBQUEsS0FBQSxFQUFBLElBQUE7a0JBQUtBLEdBQWtDLENBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxtQkFBQSxDQUFBLENBQU0sQ0FBTSxDQUFJLENBQUE7TUFFclMsT0FBT0EsR0FBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLFNBQVMsRUFBQyxjQUFjLEVBQUE7VUFDaENBLEdBQWEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsQ0FBQTtVQUNiQSxHQUFLLENBQUEsS0FBQSxFQUFBLEVBQUEsU0FBUyxFQUFDLE1BQU0sRUFBQTtjQUNqQkEsR0FBSyxDQUFBLEtBQUEsRUFBQSxFQUFBLFNBQVMsRUFBQyxlQUFlLEVBQUE7RUFDMUIsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQThFQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDcEwsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQThFQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDcEwsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQXVDQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUs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
