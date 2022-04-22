(function () {
  'use strict';

  var n,
      l$1,
      u$1,
      t$1,
      r$1,
      o$1,
      f$1,
      e$1 = {},
      c$1 = [],
      s$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function a$1(n, l) {
    for (var u in l) {
      n[u] = l[u];
    }

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

    for (o in u) {
      "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    }

    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) {
      void 0 === f[o] && (f[o] = l.defaultProps[o]);
    }
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

  function _(n, l) {
    this.props = n, this.context = l;
  }

  function k$1(n, l) {
    if (null == l) return n.__ ? k$1(n.__, n.__.__k.indexOf(n) + 1) : null;

    for (var u; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    }

    return "function" == typeof n.type ? k$1(n) : null;
  }

  function b$1(n) {
    var l, u;

    if (null != (n = n.__) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
        if (null != (u = n.__k[l]) && null != u.__e) {
          n.__e = n.__c.base = u.__e;
          break;
        }
      }

      return b$1(n);
    }
  }

  function m$1(n) {
    (!n.__d && (n.__d = !0) && t$1.push(n) && !g$1.__r++ || o$1 !== l$1.debounceRendering) && ((o$1 = l$1.debounceRendering) || r$1)(g$1);
  }

  function g$1() {
    for (var n; g$1.__r = t$1.length;) {
      n = t$1.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t$1 = [], n.some(function (n) {
        var l, u, i, t, r, o;
        n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a$1({}, t)).__v = t.__v + 1, j$2(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? k$1(t) : r, t.__h), z$1(u, t), t.__e != r && b$1(t)));
      });
    }
  }

  function w$2(n, l, u, i, t, r, o, f, s, a) {
    var h,
        v,
        p,
        _,
        b,
        m,
        g,
        w = i && i.__k || c$1,
        A = w.length;

    for (u.__k = [], h = 0; h < l.length; h++) {
      if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d$1, {
        children: _
      }, null, null, null) : _.__b > 0 ? y$1(_.type, _.props, _.key, null, _.__v) : _)) {
        if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
          if ((p = w[v]) && _.key == p.key && _.type === p.type) {
            w[v] = void 0;
            break;
          }

          p = null;
        }
        j$2(n, _, p = p || e$1, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x$2(_, s, n) : s = P$1(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k$1(p));
      }
    }

    for (u.__e = m, h = A; h--;) {
      null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k$1(i, h + 1)), N(w[h], w[h]));
    }

    if (g) for (h = 0; h < g.length; h++) {
      M$2(g[h], g[++h], g[++h]);
    }
  }

  function x$2(n, l, u) {
    for (var i, t = n.__k, r = 0; t && r < t.length; r++) {
      (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x$2(i, l, u) : P$1(u, i, i, t, i.__e, l));
    }

    return l;
  }

  function A$2(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      A$2(n, l);
    }) : l.push(n)), l;
  }

  function P$1(n, l, u, i, t, r) {
    var o, f, e;
    if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
      for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) {
        if (f == t) break n;
      }

      n.insertBefore(t, r), o = r;
    }
    return void 0 !== o ? o : t.nextSibling;
  }

  function C$1(n, l, u, i, t) {
    var r;

    for (r in u) {
      "children" === r || "key" === r || r in l || H$1(n, r, null, u[r], i);
    }

    for (r in l) {
      t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H$1(n, r, l[r], u[r], i);
    }
  }

  function $(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
  }

  function H$1(n, l, u, i, t) {
    var r;

    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) {
          u && l in u || $(n.style, l, "");
        }
        if (u) for (l in u) {
          i && u[l] === i[l] || $(n.style, l, u[l]);
        }
      }
    } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T$1 : I, r) : n.removeEventListener(l, r ? T$1 : I, r);else if ("dangerouslySetInnerHTML" !== l) {
      if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
        n[l] = null == u ? "" : u;
        break n;
      } catch (n) {}
      "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
    }
  }

  function I(n) {
    this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
  }

  function T$1(n) {
    this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
  }

  function j$2(n, u, i, t, r, o, f, e, c) {
    var s,
        h,
        v,
        y,
        p,
        k,
        b,
        m,
        g,
        x,
        A,
        P = u.type;
    if (void 0 !== u.constructor) return null;
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l$1.__b) && s(u);

    try {
      n: if ("function" == typeof P) {
        if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O$1), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a$1({}, h.__s)), a$1(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
          if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
            h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
              n && (n.__ = u);
            }), h.__h.length && f.push(h);
            break n;
          }

          null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
            h.componentDidUpdate(y, p, k);
          });
        }
        h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d$1 && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
      } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, r, o, f, c);

      (s = l$1.diffed) && s(u);
    } catch (n) {
      u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }

  function z$1(n, u) {
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

  function L$1(l, u, i, t, r, o, f, c) {
    var s,
        a,
        v,
        y = i.props,
        p = u.props,
        d = u.type,
        _ = 0;
    if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) {
      if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
        l = s, o[_] = null;
        break;
      }
    }

    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
    }

    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (o = o && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) {
          y[l.attributes[_].name] = l.attributes[_].value;
        }
        (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }

      if (C$1(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k$1(i, 0), c), null != o) for (_ = o.length; _--;) {
        null != o[_] && h$1(o[_]);
      }
      c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$1(l, "checked", _, y.checked, !1));
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

  function N(n, u, i) {
    var t, r;

    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$2(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null;
    }

    if (t = n.__k) for (r = 0; r < t.length; r++) {
      t[r] && N(t[r], u, "function" != typeof n.type);
    }
    i || null == n.__e || h$1(n.__e), n.__e = n.__d = void 0;
  }

  function O$1(n, l, u) {
    return this.constructor(n, u);
  }

  function S$1(u, i, t) {
    var r, o, f;
    l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d$1, null, [u]), o || e$1, e$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
  }

  function B(l, u, i) {
    var t,
        r,
        o,
        f = a$1({}, l.props);

    for (o in u) {
      "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];
    }

    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y$1(l.type, f, t || l.key, r || l.ref, null);
  }

  function D(n, l) {
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
          this.props.value !== n.value && u.some(m$1);
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
    __e: function (n, l) {
      for (var u, i, t; l = l.__;) {
        if ((u = l.__c) && !u.__) try {
          if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
        } catch (l) {
          n = l;
        }
      }

      throw n;
    }
  }, u$1 = 0, _.prototype.setState = function (n, l) {
    var u;
    u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$1({}, this.state), "function" == typeof n && (n = n(a$1({}, u), this.props)), n && a$1(u, n), null != n && this.__v && (l && this.__h.push(l), m$1(this));
  }, _.prototype.forceUpdate = function (n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), m$1(this));
  }, _.prototype.render = d$1, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0, f$1 = 0;

  var t,
      u,
      r,
      o = 0,
      i = [],
      c = l$1.__b,
      f = l$1.__r,
      e = l$1.diffed,
      a = l$1.__c,
      v = l$1.unmount;

  function m(t, r) {
    l$1.__h && l$1.__h(u, t, o || r), o = 0;
    var i = u.__H || (u.__H = {
      __: [],
      __h: []
    });
    return t >= i.__.length && i.__.push({}), i.__[t];
  }

  function l(n) {
    return o = 1, p(w$1, n);
  }

  function p(n, r, o) {
    var i = m(t++, 2);
    return i.t = n, i.__c || (i.__ = [o ? o(r) : w$1(void 0, r), function (n) {
      var t = i.t(i.__[0], n);
      i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
    }], i.__c = u), i.__;
  }

  function y(r, o) {
    var i = m(t++, 3);
    !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
  }

  function h(r, o) {
    var i = m(t++, 4);
    !l$1.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
  }

  function s(n) {
    return o = 5, d(function () {
      return {
        current: n
      };
    }, []);
  }

  function d(n, u) {
    var r = m(t++, 7);
    return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
  }

  function A$1(n, t) {
    return o = 8, d(function () {
      return n;
    }, t);
  }

  function x$1() {
    var t;

    for (i.sort(function (n, t) {
      return n.__v.__b - t.__v.__b;
    }); t = i.pop();) {
      if (t.__P) try {
        t.__H.__h.forEach(g), t.__H.__h.forEach(j$1), t.__H.__h = [];
      } catch (u) {
        t.__H.__h = [], l$1.__e(u, t.__v);
      }
    }
  }

  l$1.__b = function (n) {
    u = null, c && c(n);
  }, l$1.__r = function (n) {
    f && f(n), t = 0;
    var r = (u = n.__c).__H;
    r && (r.__h.forEach(g), r.__h.forEach(j$1), r.__h = []);
  }, l$1.diffed = function (t) {
    e && e(t);
    var o = t.__c;
    o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === l$1.requestAnimationFrame || ((r = l$1.requestAnimationFrame) || function (n) {
      var t,
          u = function () {
        clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
      },
          r = setTimeout(u, 100);

      b && (t = requestAnimationFrame(u));
    })(x$1)), u = null;
  }, l$1.__c = function (t, u) {
    u.some(function (t) {
      try {
        t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
          return !n.__ || j$1(n);
        });
      } catch (r) {
        u.some(function (n) {
          n.__h && (n.__h = []);
        }), u = [], l$1.__e(r, t.__v);
      }
    }), a && a(t, u);
  }, l$1.unmount = function (t) {
    v && v(t);
    var u,
        r = t.__c;
    r && r.__H && (r.__H.__.forEach(function (n) {
      try {
        g(n);
      } catch (n) {
        u = n;
      }
    }), u && l$1.__e(u, r.__v));
  };
  var b = "function" == typeof requestAnimationFrame;

  function g(n) {
    var t = u,
        r = n.__c;
    "function" == typeof r && (n.__c = void 0, r()), u = t;
  }

  function j$1(n) {
    var t = u;
    n.__c = n.__(), u = t;
  }

  function k(n, t) {
    return !n || n.length !== t.length || t.some(function (t, u) {
      return t !== n[u];
    });
  }

  function w$1(n, t) {
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

  function S(n, t) {
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

  (E.prototype = new _()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
    return C(this.props, n) || C(this.state, t);
  };
  var w = l$1.__b;

  l$1.__b = function (n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
  };

  var R = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

  function x(n) {
    function t(t, e) {
      var r = S({}, t);
      return delete r.ref, n(r, (e = t.ref || e) && ("object" != typeof e || "current" in e) ? e : null);
    }

    return t.$$typeof = R, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t;
  }

  var A = l$1.__e;

  l$1.__e = function (n, t, e) {
    if (n.then) for (var r, u = t; u = u.__;) {
      if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
    }
    A(n, t, e);
  };

  var O = l$1.unmount;

  function L() {
    this.__u = 0, this.t = null, this.__b = null;
  }

  function U(n) {
    var t = n.__.__c;
    return t && t.__e && t.__e(n);
  }

  function M$1() {
    this.u = null, this.o = null;
  }

  l$1.unmount = function (n) {
    var t = n.__c;
    t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
  }, (L.prototype = new _()).__c = function (n, t) {
    var e = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(e);

    var u = U(r.__v),
        o = !1,
        i = function () {
      o || (o = !0, e.__R = null, u ? u(l) : l());
    };

    e.__R = i;

    var l = function () {
      if (! --r.__u) {
        if (r.state.__e) {
          var n = r.state.__e;

          r.__v.__k[0] = function n(t, e, r) {
            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
              return n(t, e, r);
            }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
          }(n, n.__c.__P, n.__c.__O);
        }

        var t;

        for (r.setState({
          __e: r.__b = null
        }); t = r.t.pop();) {
          t.forceUpdate();
        }
      }
    },
        c = !0 === t.__h;

    r.__u++ || c || r.setState({
      __e: r.__b = r.__v.__k[0]
    }), n.then(i, i);
  }, L.prototype.componentWillUnmount = function () {
    this.t = [];
  }, L.prototype.render = function (n, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"),
            r = this.__v.__k[0].__c;

        this.__v.__k[0] = function n(t, e, r) {
          return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
            "function" == typeof n.__c && n.__c();
          }), t.__c.__H = null), null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
            return n(t, e, r);
          })), t;
        }(this.__b, e, r.__O = r.__P);
      }

      this.__b = null;
    }

    var u = t.__e && v$1(d$1, null, n.fallback);
    return u && (u.__h = null), [v$1(d$1, null, t.__e ? null : n.children), u];
  };

  var T = function (n, t, e) {
    if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
      for (; e.length > 3;) {
        e.pop()();
      }

      if (e[1] < e[0]) break;
      n.u = e = e[2];
    }
  };

  (M$1.prototype = new _()).__e = function (n) {
    var t = this,
        e = U(t.__v),
        r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
      };

      e ? e(o) : o();
    };
  }, M$1.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = A$2(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

    for (var e = t.length; e--;) {
      this.o.set(t[e], this.u = [1, 0, this.u]);
    }

    return n.children;
  }, M$1.prototype.componentDidUpdate = M$1.prototype.componentDidMount = function () {
    var n = this;
    this.o.forEach(function (t, e) {
      T(n, e, t);
    });
  };

  var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
      P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      V = "undefined" != typeof document,
      z = function (n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
  };

  _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
    Object.defineProperty(_.prototype, n, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + n];
      },
      set: function (t) {
        Object.defineProperty(this, n, {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
    });
  });
  var H = l$1.event;

  function Z() {}

  function Y() {
    return this.cancelBubble;
  }

  function q() {
    return this.defaultPrevented;
  }

  l$1.event = function (n) {
    return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = q, n.nativeEvent = n;
  };

  var J = {
    configurable: !0,
    get: function () {
      return this.class;
    }
  },
      K = l$1.vnode;

  l$1.vnode = function (n) {
    var t = n.type,
        e = n.props,
        r = e;

    if ("string" == typeof t) {
      var u = -1 === t.indexOf("-");

      for (var o in r = {}, e) {
        var i = e[o];
        V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = -1 != r.value.indexOf(n.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
      })), n.props = r, e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J));
    }

    n.$$typeof = j, K && K(n);
  };

  var Q = l$1.__r;

  l$1.__r = function (n) {
    Q && Q(n);
  };

  /**
   * Shortcut for preact/compat's `forwardRef` that auto-assumes some things that are useful for forwarding refs to `HTMLElements` specifically.
   * Namely it involves de-gunking the type system by letting us return *generic* function and playing nice with React. In all other respects, it acts like `forwardRef`.
   */

  function forwardElementRef(Component) {
    var ForwardedComponent = x(Component);
    return ForwardedComponent;
  }

  function useMergedChildren(lhsProps, rhsProps) {
    var lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.children;
    var rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.children;

    if (lhs == null && rhs == null) {
      return undefined;
    } else if (lhs == null) {
      return rhs;
    } else if (rhs == null) {
      return lhs;
    } else {
      var ret = v$1(d$1, {}, lhs, rhs);
      return ret;
    }
  }

  function toVal(mix) {
    var k,
        y,
        str = '';

    if (typeof mix === 'string' || typeof mix === 'number') {
      str += mix;
    } else if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k]) {
            if (y = toVal(mix[k])) {
              str && (str += ' ');
              str += y;
            }
          }
        }
      } else {
        for (k in mix) {
          if (mix[k]) {
            str && (str += ' ');
            str += k;
          }
        }
      }
    }

    return str;
  }

  function clsx () {
    var i = 0,
        tmp,
        x,
        str = '';

    while (i < arguments.length) {
      if (tmp = arguments[i++]) {
        if (x = toVal(tmp)) {
          str && (str += ' ');
          str += x;
        }
      }
    }

    return str;
  }

  /**
   * Given two sets of props, merges their `class` and `className` properties.
   * Duplicate classes are removed (order doesn't matter anyway).
   *
   * @param lhs Classes of the first component
   * @param rhs Classes of the second component
   * @returns A string representing all combined classes from both arguments.
   */

  function useMergedClasses(lhs, rhs) {
    // Note: For the sake of forward compatibility, this function is labelled as
    // a hook, but as it uses no other hooks it technically isn't one.
    return mergeClasses(lhs, rhs);
  }

  function mergeClasses(lhs, rhs) {
    var lhsClass = lhs === null || lhs === void 0 ? void 0 : lhs.class;
    var lhsClassName = lhs === null || lhs === void 0 ? void 0 : lhs.className;
    var rhsClass = rhs === null || rhs === void 0 ? void 0 : rhs.class;
    var rhsClassName = rhs === null || rhs === void 0 ? void 0 : rhs.className;

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
      debugger; // Intentional

      console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
    }
  }
  /**
   * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
   * @param lhs
   * @param rhs
   * @returns
   */


  function useMergedRefs() {
    return function (lhsProps, rhsProps) {
      var lhs = lhsProps === null || lhsProps === void 0 ? void 0 : lhsProps.ref;
      var rhs = rhsProps === null || rhsProps === void 0 ? void 0 : rhsProps.ref;
      var combined = A$1(current => {
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
    };
  }
  /*
  function typetest<P extends h.JSX.HTMLAttributes<HTMLInputElement>>(props: P) {

      const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

      function acceptsRef(ref: Ref<any>) { }
      function acceptsOptionalRef(ref: Ref<any> | undefined) { }

      const c = [
          useMergedRefs<HTMLInputElement>()(undefined, undefined),
          useMergedRefs<HTMLInputElement>()({}, undefined),
          useMergedRefs<HTMLInputElement>()(props, undefined),
          useMergedRefs<HTMLInputElement>()(undefined, props),
          useMergedRefs<HTMLInputElement>()(props, props),
          useMergedRefs<HTMLInputElement>()({ ref }, props),
          useMergedRefs<HTMLInputElement>()({ ref }, { ref: undefined }),
          useMergedRefs<HTMLInputElement>()({ ref: undefined }, { ref }),
          useMergedRefs<HTMLInputElement>()({ ref }, { ref }),
      ] as const;

      /// @ts-expect-error
      acceptsRef(c[0]);
      /// @ts-expect-error
      acceptsRef(c[1]);

      acceptsOptionalRef(c[2]);
      acceptsOptionalRef(c[3]);
      acceptsOptionalRef(c[4]);

      /// @ts-expect-error TODO
      acceptsRef(c[5]);
      acceptsRef(c[6]);
      acceptsRef(c[7]);
      acceptsRef(c[8]);
  }
  */

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

  var log = str => {
    debugger;
    console.warn("Trying to merge two props with the same name: ".concat(str));
    /* Intentional */
  };
  /**
   * Given two sets of props, merges them and returns the result.
   *
   * The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, and all event handlers.
   * @param lhs2
   * @param rhs2
   * @returns
   */

  function useMergedProps() {
    return function (lhs2, rhs2) {
      // First, put in all the properties that are easy to reason about
      // and all lhs props. We're going to merge in rhs just after.
      var lhs = _objectWithoutProperties(lhs2, _excluded$e);

      var rhs = _objectWithoutProperties(rhs2, _excluded2);

      var ret = _objectSpread2(_objectSpread2({}, lhs), {}, {
        ref: useMergedRefs()(lhs2, rhs2),
        style: useMergedStyles(lhs2, rhs2),
        className: useMergedClasses(lhs2, rhs2),
        children: useMergedChildren(lhs2, rhs2)
      });

      if (ret.ref === undefined) delete ret.ref;
      if (ret.style === undefined) delete ret.style;
      if (ret.className === undefined) delete ret.className;
      if (ret.children === undefined) delete ret.children; // Now, do *everything* else
      // Merge every remaining existing entry in lhs with what we've already put in ret.
      //const lhsEntries = Object.entries(lhs) as [keyof T, T[keyof T]][];

      var rhsEntries = Object.entries(rhs);

      for (var [rhsKey, rhsValue] of rhsEntries) {
        var lhsValue = lhs[rhsKey];

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
            (_log = log) === null || _log === void 0 ? void 0 : _log("Could not merge incompatible prop \"".concat(rhsKey, "\" (type: ").concat(typeof rhsValue, ", values: [").concat(lhsValue, ", ").concat(rhsValue, "])"));
            ret[rhsKey] = rhsValue;
          }
        }
      }

      return ret;
    };
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
   */

  function useEnsureStability() {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    useHelper(values.length, 0);
    values.forEach(useHelper);
    return;

    function useHelper(value, index) {
      // Make sure that the provided functions are perfectly stable across renders
      var helperToEnsureStability = s(value);
      var shownError = s(false);

      if (helperToEnsureStability.current != value) {
        if (!shownError.current) {
          console.error("This hook requires some or all of its arguments remain stable across each render; please check the ".concat(index, "-indexed value that was checked."));
          debugger;
          shownError.current = true;
        }
      }
    }
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
   * @returns
   */

  function usePassiveState(onChange, getInitialValue) {
    var valueRef = s(Unset);
    var warningRef = s(false);
    var cleanupCallbackRef = s(undefined); // Make sure that the provided functions are perfectly stable across renders

    useEnsureStability(onChange, getInitialValue); // Shared between "dependency changed" and "component unmounted".

    var onShouldCleanUp = A$1(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []); // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.

    var tryEnsureValue = A$1(() => {
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
    var getValue = A$1(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.

      if (valueRef.current === Unset) tryEnsureValue();
      return valueRef.current === Unset ? undefined : valueRef.current;
    }, []);
    h(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []); // The actual code the user calls to (possibly) run a new effect.

    var setValue = A$1(arg => {
      var prevDep = valueRef.current === Unset ? undefined : getValue();
      var dep = arg instanceof Function ? arg(prevDep) : arg;

      if (dep !== valueRef.current) {
        var _onChange2;

        // Indicate to the user that they shouldn't call getValue during onChange
        warningRef.current = true; // Call any registerd cleanup function

        onShouldCleanUp();
        cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(dep, prevDep)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
        valueRef.current = dep; // Allow the user to normally call getValue again

        warningRef.current = false;
      }
    }, []);
    return [getValue, setValue];
  }
  var Unset = Symbol();

  function returnNull$1() {
    return null;
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
    var onElementChange = args === null || args === void 0 ? void 0 : args.onElementChange; // Let us store the actual (reference to) the element we capture

    var [getElement, setElement] = usePassiveState(onElementChange, returnNull$1); // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it

    var myRef = A$1(e => {
      if (e) setElement(() => e);
    }, []);
    var useRefElementProps = A$1(props => useMergedProps()({
      ref: myRef
    }, props), []); // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element

    return {
      useRefElementProps,
      getElement
    };
  }

  function returnNull() {
    return null;
  }

  function useElementSize(_ref) {
    var {
      getObserveBox,
      onSizeChange
    } = _ref;
    useEnsureStability(getObserveBox, onSizeChange);
    var [getSize, setSize] = usePassiveState(onSizeChange, returnNull);
    var currentObserveBox = s(undefined);
    var needANewObserver = A$1((element, observeBox) => {
      if (element) {
        var document = element.ownerDocument;
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
          var observer = new ResizeObserver(entries => {
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
      onElementChange: A$1(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
    });
    y(() => {
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

  function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1);
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
    useEnsureStability(onLogicalDirectionChange);
    var [getComputedStyles, setComputedStyles] = usePassiveState(null);
    var {
      getElement,
      useRefElementProps
    } = useRefElement({
      onElementChange: A$1(element => {
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
      onSizeChange: A$1(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
    });
    var getLogicalDirectionInfo = A$1(() => {
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

    var convertToLogicalOrientation = A$1((elementOrientation, direction) => {
      var _direction, _direction2;

      (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
      if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, []);
    var convertToPhysicalSide = A$1((side, direction) => {
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
    var convertToLogicalSide = A$1((side, direction) => {
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

      debugger;
      console.assert(false);
      return "inline-start";
    }, []);
    var convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
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
    var convertElementSize = A$1((elementSize, direction) => {
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
        var scrollBlockSize = elementSize["scroll".concat(capitalize(blockSize))]; // Position requires us to sometimes use one property (like `left`)
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
      useLogicalDirectionProps: A$1(props => useRefElementProps(useElementSizeProps(props)), []),
      getElement,
      getLogicalDirectionInfo,
      convertToLogicalSize: convertElementSize,
      convertToLogicalOrientation,
      convertToPhysicalOrientation,
      convertToLogicalSide,
      convertToPhysicalSide
    };
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

  var previousInputs = new Map();
  var toRun = new Map();
  var commitName = "__c" in l$1 ? "__c" : "commit" in l$1 ? "commit" : "_commit" in l$1 ? "_commit" : "__c"; // TODO: Whether this goes in options.diffed or options._commit
  // is a post-suspense question.
  // Right now, using options._commit has the problem of running
  // *after* refs are applied, but we need to come before even that
  // so `ref={someStableFunction}` works.
  // 
  // Also it's private.

  var originalCommit = l$1[commitName];

  var newCommit = (vnode, commitQueue) => {
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
    originalCommit === null || originalCommit === void 0 ? void 0 : originalCommit(vnode, commitQueue);
  };

  l$1[commitName] = newCommit;

  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }

  D(null);

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
           * @param {!Element} rootElement The Element at the root of the inert subtree.
           * @param {!InertManager} inertManager The global singleton InertManager object.
           */
          function InertRoot(rootElement, inertManager) {
            _classCallCheck(this, InertRoot);
            /** @type {!InertManager} */


            this._inertManager = inertManager;
            /** @type {!Element} */

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
              /** @type {!Element} */
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
             * @param {!Element} node
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
                /** @type {!Element} */
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
                /** @type {!Element} */
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
              /** @type {!Element} */
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
           * @param {!Element} root
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
                    /** @type {!Element} */
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
         * @param {(function (!Element))=} callback Callback to be called for each element traversed,
         *     before descending into child nodes.
         * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
         */


        function composedTreeWalk(node, callback, shadowRootAncestor) {
          if (node.nodeType == Node.ELEMENT_NODE) {
            var element =
            /** @type {!Element} */
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

        if (!Element.prototype.hasOwnProperty('inert')) {
          /** @type {!InertManager} */
          var inertManager = new InertManager(document);
          Object.defineProperty(Element.prototype, 'inert', {
            enumerable: true,

            /** @this {!Element} */
            get: function get() {
              return this.hasAttribute('inert');
            },

            /** @this {!Element} */
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


  function useCreateTransitionableProps(_ref, otherProps) {
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
    var [phase, setPhase] = l(animateOnMount ? "init" : null);
    var [direction, setDirection] = l(show == null ? null : show ? "enter" : "exit");
    var [surfaceWidth, setSurfaceWidth] = l(null);
    var [surfaceHeight, setSurfaceHeight] = l(null);
    var [surfaceX, setSurfaceX] = l(null);
    var [surfaceY, setSurfaceY] = l(null);
    var [transitioningWidth, setTransitioningWidth] = l(null);
    var [transitioningHeight, setTransitioningHeight] = l(null);
    var [transitioningX, setTransitioningX] = l(null);
    var [transitioningY, setTransitioningY] = l(null);
    var [logicalDirectionInfo, setLogicalDirectionInfo] = l(null);
    var {
      getLogicalDirectionInfo,
      useLogicalDirectionProps
    } = useLogicalDirection({
      onLogicalDirectionChange: setLogicalDirectionInfo
    });
    var onTransitionUpdateRef = s(onTransitionUpdate);
    var phaseRef = s(phase);
    var directionRef = s(direction);
    var durationRef = s(duration);
    var tooEarlyTimeoutRef = s(null);
    var tooEarlyValueRef = s(true);
    var tooLateTimeoutRef = s(null);
    var onTransitionEnd = A$1(e => {
      if (e.target === getElement() && tooEarlyValueRef.current == false) {
        setPhase("finalize");
      }
    }, []);
    h(() => {
      onTransitionUpdateRef.current = onTransitionUpdate;
    }, [onTransitionUpdate]);
    h(() => {
      phaseRef.current = phase;
    }, [phase]);
    h(() => {
      directionRef.current = direction;
    }, [direction]);
    h(() => {
      durationRef.current = duration;
    }, [duration]);
    h(() => {
      var _onTransitionUpdateRe;

      if (direction && phase) (_onTransitionUpdateRe = onTransitionUpdateRef.current) === null || _onTransitionUpdateRe === void 0 ? void 0 : _onTransitionUpdateRe.call(onTransitionUpdateRef, direction, phase);
    }, [direction, phase]); // Every time the phase changes to "transition", add our transition timeout timeouts
    // to catch any time onTransitionEnd fails to report for whatever reason to be safe

    h(() => {
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

    h(() => {
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

    h(() => {
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
    return useMergedProps()(almostDone, otherProps);
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

    var [hasShownOnce, setHasShownOnce] = l(false);
    var shouldSetHasShownOnce = hasShownOnce === false && childMountBehavior === "mount-on-show" && show === true;
    y(() => {
      if (shouldSetHasShownOnce) setHasShownOnce(true);
    }, [shouldSetHasShownOnce]);
    if (childMountBehavior === "mount-when-showing" && !show) child = v$1("div", null);
    if (childMountBehavior === "mount-on-show" && !show && hasShownOnce === false) child = v$1("div", null);

    if (!childIsVNode(child)) {
      throw new Error("A Transitionable component must have exactly one component child (e.g. a <div>, but not \"a string\").");
    }

    var transitionProps = useCreateTransitionableProps({
      classBase,
      duration,
      measure,
      show,
      animateOnMount,
      onTransitionUpdate,
      ref: r,
      exitVisibility
    }, props);
    var mergedWithChildren = useMergedProps()(transitionProps, _objectSpread2(_objectSpread2({}, child.props), {}, {
      ref: child.ref
    }));
    return B(child, mergedWithChildren);
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
    return useMergedProps()({
      className: clsx("".concat(classBase, "-clip")),
      classBase,
      style: {
        ["--".concat(classBase, "-clip-origin-inline")]: (_ref2 = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5,
        ["--".concat(classBase, "-clip-origin-block")]: (_ref3 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0,
        ["--".concat(classBase, "-clip-min-inline")]: (_ref4 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref4 !== void 0 ? _ref4 : 1,
        ["--".concat(classBase, "-clip-min-block")]: (_ref5 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref5 !== void 0 ? _ref5 : 0
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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
    return useMergedProps()({
      className: "".concat(classBase, "-fade"),
      classBase,
      style: {
        ["--".concat(classBase, "-fade-min")]: fadeMin !== null && fadeMin !== void 0 ? fadeMin : 0,
        ["--".concat(classBase, "-fade-max")]: fadeMax !== null && fadeMax !== void 0 ? fadeMax : 1
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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

    return v$1(Clip, _objectSpread2({
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
    return useMergedProps()({
      classBase,
      measure: true,
      className: "".concat(classBase, "-collapse"),
      style: {
        ["--".concat(classBase, "-collapse-min-block")]: minBlockSize !== null && minBlockSize !== void 0 ? minBlockSize : 0
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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

    return v$1(Collapse, _objectSpread2({
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
    var lastValidTargetInline = s((_slideTargetInline = slideTargetInline) !== null && _slideTargetInline !== void 0 ? _slideTargetInline : 1);
    var lastValidTargetBlock = s((_slideTargetBlock = slideTargetBlock) !== null && _slideTargetBlock !== void 0 ? _slideTargetBlock : 0);
    y(() => {
      if (slideTargetInline) lastValidTargetInline.current = slideTargetInline;
    }, [slideTargetInline]);
    y(() => {
      if (slideTargetBlock) lastValidTargetBlock.current = slideTargetBlock;
    }, [slideTargetBlock]);
    if (slideTargetInline == 0) slideTargetInline = lastValidTargetInline.current;
    if (slideTargetBlock == 0) slideTargetBlock = lastValidTargetBlock.current;
    return useMergedProps()({
      className: "".concat(classBase, "-slide"),
      classBase,
      style: {
        ["--".concat(classBase, "-slide-target-inline")]: "".concat((_slideTargetInline2 = slideTargetInline) !== null && _slideTargetInline2 !== void 0 ? _slideTargetInline2 : 0),
        ["--".concat(classBase, "-slide-target-block")]: "".concat((_slideTargetBlock2 = slideTargetBlock) !== null && _slideTargetBlock2 !== void 0 ? _slideTargetBlock2 : 0)
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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

    return v$1(Slide, _objectSpread2({
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
    return useMergedProps()({
      className: "".concat(classBase, "-zoom"),
      classBase,
      style: {
        ["--".concat(classBase, "-zoom-origin-inline")]: "".concat((_ref2 = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5),
        ["--".concat(classBase, "-zoom-origin-block")]: "".concat((_ref3 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref3 !== void 0 ? _ref3 : 0.5),
        ["--".concat(classBase, "-zoom-min-inline")]: "".concat((_ref4 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref4 !== void 0 ? _ref4 : 0),
        ["--".concat(classBase, "-zoom-min-block")]: "".concat((_ref5 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref5 !== void 0 ? _ref5 : 0)
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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

    return v$1(Zoom, _objectSpread2({
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

    return v$1(Slide, _objectSpread2({
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

    return v$1(SlideZoom, _objectSpread2({
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
    var lastValidTargetInline = s((_flipAngleInline = flipAngleInline) !== null && _flipAngleInline !== void 0 ? _flipAngleInline : 180);
    var lastValidTargetBlock = s((_flipAngleBlock = flipAngleBlock) !== null && _flipAngleBlock !== void 0 ? _flipAngleBlock : 0);
    y(() => {
      if (flipAngleInline) lastValidTargetInline.current = flipAngleInline;
    }, [flipAngleInline]);
    y(() => {
      if (flipAngleBlock) lastValidTargetBlock.current = flipAngleBlock;
    }, [flipAngleBlock]);
    if (flipAngleInline == 0) flipAngleInline = lastValidTargetInline.current;
    if (flipAngleBlock == 0) flipAngleBlock = lastValidTargetBlock.current;
    return useMergedProps()({
      className: "".concat(classBase, "-flip"),
      classBase,
      style: {
        ["--".concat(classBase, "-flip-angle-inline")]: "".concat((_flipAngleInline2 = flipAngleInline) !== null && _flipAngleInline2 !== void 0 ? _flipAngleInline2 : 0, "deg"),
        ["--".concat(classBase, "-flip-angle-block")]: "".concat((_flipAngleBlock2 = flipAngleBlock) !== null && _flipAngleBlock2 !== void 0 ? _flipAngleBlock2 : 0, "deg"),
        ["--".concat(classBase, "-perspective")]: "".concat(perspective !== null && perspective !== void 0 ? perspective : 800, "px")
      }
    }, otherProps);
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

    return v$1(Transitionable, _objectSpread2({
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
    return useMergedProps()({
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
    var mergedWithChildren = useMergedProps()(transitionProps, children.props);
    return B(children, mergedWithChildren);
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
      const [writingMode, setWritingMode] = l("horizontal");
      const [show1, setShow1] = l(true);
      const [show3, setShow3] = l(0);
      const [reflow, setReflow] = l("hidden");
      const [duration, setDuration] = l(175);
      const [text, setText] = l("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      const onInput1 = A$1((e) => { setShow1(o => !o); e.preventDefault(); }, []);
      const onInput3 = A$1((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = A$1((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = A$1((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = A$1((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = A$1((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = A$1((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = A$1((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = A$1((e) => { setShow3(0); e.preventDefault(); }, []);
      const onInputB = A$1((e) => { setShow3(1); e.preventDefault(); }, []);
      const onInputC = A$1((e) => { setShow3(2); e.preventDefault(); }, []);
      return (v$1(d$1, null,
          v$1("div", { id: "controls" },
              v$1("h1", null, "Preact Transition"),
              v$1("label", null,
                  v$1("input", { onInput: onInput1, type: "checkbox", checked: show1 }),
                  " Card show"),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "Visible Swappable child: "),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputA, checked: show3 == 0 }),
                      "#0"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputB, checked: show3 == 1 }),
                      "#1"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputC, checked: show3 == 2 }),
                      "#2")),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "When transitioned out:"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput5b, checked: reflow == "visible" }),
                      "Do not hide (incl. focusables)"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput4, checked: reflow == "hidden" }),
                      "visibility: hidden"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "hidden-type", onInput: onInput5, checked: reflow == "removed" }),
                      "display: none")),
              v$1("div", null,
                  v$1("label", null,
                      v$1("input", { onInput: onInput8, type: "number", value: duration }),
                      " Duration")),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "Demo's writing mode: "),
                  v$1("label", null,
                      v$1("input", { type: "radio", name: "writing-mode", onInput: onInput6, checked: writingMode == "horizontal" }),
                      "Horizontal"),
                  v$1("label", null,
                      v$1("input", { type: "radio", name: "writing-mode", onInput: onInput7, checked: writingMode == "vertical" }),
                      "Vertical")),
              v$1("textarea", { cols: 30, rows: 5, onInput: onInput3, value: text })),
          v$1("div", { id: "root-body", className: `writing-mode-${writingMode}`, style: { "--transition-duration": `${duration}ms` }, key: writingMode },
              v$1(FadeDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(ClipDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(ZoomDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(SlideDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(ZoomSlideDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(CollapseDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }),
              v$1(FlipDemo, { cardShow: show1, contentIndex: show3, exitVisibility: reflow, text: text }))));
  }
  function FadeDemo({ cardShow, contentIndex, exitVisibility, text }) {
      const [min, setMin] = l(0);
      const [max, setMax] = l(1);
      const onMinInput = A$1((e) => { setMin((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMaxInput = A$1((e) => { setMax((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Fade;
      const CS = "Fade";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Fade"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Minimum fade ",
                      v$1("input", { onInput: onMinInput, value: min, type: "number", min: 0, max: 1, step: 0.0125 })),
                  v$1("label", null,
                      "Maximum fade ",
                      v$1("input", { onInput: onMaxInput, value: max, type: "number", min: 0, max: 1, step: 0.0125 }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0);
      const [minX, setMinX] = l(1);
      const [minY, setMinY] = l(0);
      const [withFade, setWithFade] = l(true);
      l(false);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ClipFade : Clip;
      const CS = withFade ? "ClipFade" : "Clip";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, clipOriginInline: originX, clipOriginBlock: originY, clipMinInline: minX, clipMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Clip"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Origin to center the effect around on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Origin to center the effect around on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, clipMinInline: minX, clipMinBlock: minY, clipOriginInline: originX, clipOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0);
      const [minX, setMinX] = l(0.75);
      const [minY, setMinY] = l(0.75);
      const [slideX, setSlideX] = l(0.25);
      const [slideY, setSlideY] = l(0);
      const [withFade, setWithFade] = l(true);
      const onSlideXInput = A$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = A$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = withFade ? SlideZoomFade : SlideZoom;
      const CS = withFade ? "SlideZoomFade" : "SlideZoom";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: slideX * Math.sign(i - contentIndex), slideTargetBlock: slideY * Math.sign(i - contentIndex), zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Zoom & Slide"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      const [originX, setOriginX] = l(0.5);
      const [originY, setOriginY] = l(0);
      const [minX, setMinX] = l(0.75);
      const [minY, setMinY] = l(0.75);
      const [withFade, setWithFade] = l(true);
      const onOriginXInput = A$1((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = A$1((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = A$1((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = A$1((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const C = withFade ? ZoomFade : Zoom;
      const CS = withFade ? "ZoomFade" : "Zoom";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Zoom"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Transform origin on the inline-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onOriginXInput, value: originX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Transform origin on the block-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onOriginYInput, value: originY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Minimum size on the inline-axis ",
                      v$1("input", { onInput: onMinXInput, value: minX, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "Minimum size on the block-axis  ",
                      v$1("input", { onInput: onMinYInput, value: minY, type: "number", step: 0.125, min: 0, max: 1 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      const [slideX, setSlideX] = l(0.25);
      const [slideY, setSlideY] = l(0);
      const [withFade, setWithFade] = l(true);
      const onSlideXInput = A$1((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = A$1((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      //const [bare, setBare] = useState(false);
      // const onBare = useCallback((e: Event) => { setBare(((e.target) as HTMLInputElement).checked); e.preventDefault(); }, []);
      const C = withFade ? SlideFade : Slide;
      const CS = withFade ? "SlideFade" : "Slide";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: (slideX * Math.sign(i - contentIndex)), slideTargetBlock: slideY * Math.sign(i - contentIndex) },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Slide"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Target block-axis position (X-axis in English, etc.) ",
                      v$1("input", { onInput: onSlideXInput, value: slideX, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "Target inline-axis position (Y-axis in English, etc.)  ",
                      v$1("input", { onInput: onSlideYInput, value: slideY, type: "number", step: 0.125, min: -2, max: 2 })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      const [minBlockSize, setMinBlockSize] = l("0px");
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = l(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = A$1((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return (v$1("div", { className: "demo-section" },
          v$1("h2", null, "Collapse"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Minimum size: ",
                      v$1("input", { type: "text", value: minBlockSize, onInput: onMinSize })),
                  v$1("label", null,
                      "With fade",
                      v$1("input", { checked: withFade, onInput: onWithFadeInput, type: "checkbox" })),
                  v$1("div", null, "Direction cannot be directly controlled. Only the size along the block axis (Y-axis in horizontal languages) can be resized."),
                  v$1("div", null,
                      "In general, only use this component if you ",
                      v$1("em", null, "specifically"),
                      " need its reflow transitioning properties. If you want a \"disappear in place without zooming out\", consider a Clip effect")),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
                  v$1("div", null,
                      v$1(Swappable, null,
                          v$1("div", { className: "card" },
                              makeChild(0),
                              makeChild(1),
                              makeChild(2))))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} show={${cardShow.toString()}}${minBlockSize && minBlockSize != "0px" ? ` minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
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
      const [flipX, setFlipX] = l(0);
      const [flipY, setFlipY] = l(180);
      const onFlipXInput = A$1((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = A$1((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Flip;
      const CS = "Flip";
      const makeChild = (i) => v$1(C, { show: contentIndex === i, exitVisibility: exitVisibility, flipAngleInline: flipX * Math.sign(i - contentIndex), flipAngleBlock: flipY * Math.sign(i - contentIndex) },
          v$1("div", { className: "card-contents" },
              halfText(text, i),
              v$1("div", null,
                  v$1("button", null, "Focusable element"))));
      return v$1("div", { className: "demo-section" },
          v$1("h2", null, "Flip"),
          v$1("div", { className: "demo" },
              v$1("div", { className: "demo-controls" },
                  v$1("label", null,
                      "Rotate on inline axis ",
                      v$1("input", { type: "number", onInput: onFlipXInput, value: flipX })),
                  v$1("label", null,
                      "Rotate along block axis ",
                      v$1("input", { type: "number", onInput: onFlipYInput, value: flipY }))),
              v$1(C, { show: cardShow, exitVisibility: exitVisibility, flipAngleInline: flipX, flipAngleBlock: flipY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
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
      S$1(v$1(Demo, null), document.getElementById("root"));
  });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL3RyYW5zaXRpb25hYmxlLmpzIiwiLi4vY2xpcC5qcyIsIi4uL2ZhZGUuanMiLCIuLi9jbGlwLWZhZGUuanMiLCIuLi9jb2xsYXBzZS5qcyIsIi4uL2NvbGxhcHNlLWZhZGUuanMiLCIuLi9zbGlkZS5qcyIsIi4uL3NsaWRlLWZhZGUuanMiLCIuLi96b29tLmpzIiwiLi4vem9vbS1mYWRlLmpzIiwiLi4vc2xpZGUtem9vbS5qcyIsIi4uL3NsaWRlLXpvb20tZmFkZS5qcyIsIi4uL2ZsaXAuanMiLCIuLi9zd2FwcGFibGUuanMiLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJlwic2V0QXR0cmlidXRlXCJpbiBzPT0hIWQmJihkP3MubG9jYWxOYW1lPT09ZDozPT09cy5ub2RlVHlwZSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT15LnZhbHVlfHxfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXt2YXIgdDtmb3IoaS5zb3J0KGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4uX192Ll9fYi10Ll9fdi5fX2J9KTt0PWkucG9wKCk7KWlmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHUscj10Ll9fYztyJiZyLl9fSCYmKHIuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7dHJ5e2cobil9Y2F0Y2gobil7dT1ufX0pLHUmJm4uX19lKHUsci5fX3YpKX07dmFyIGI9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIGcobil7dmFyIHQ9dSxyPW4uX19jO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJihuLl9fYz12b2lkIDAscigpKSx1PXR9ZnVuY3Rpb24gaihuKXt2YXIgdD11O24uX19jPW4uX18oKSx1PXR9ZnVuY3Rpb24gayhuLHQpe3JldHVybiFufHxuLmxlbmd0aCE9PXQubGVuZ3RofHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiB3KG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9ZXhwb3J0e2wgYXMgdXNlU3RhdGUscCBhcyB1c2VSZWR1Y2VyLHkgYXMgdXNlRWZmZWN0LGggYXMgdXNlTGF5b3V0RWZmZWN0LHMgYXMgdXNlUmVmLF8gYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxkIGFzIHVzZU1lbW8sQSBhcyB1c2VDYWxsYmFjayxGIGFzIHVzZUNvbnRleHQsVCBhcyB1c2VEZWJ1Z1ZhbHVlLHEgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIHUsdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyBvLHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBsLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGZ9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgYSxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyBkLEZyYWdtZW50IGFzIHYscmVuZGVyIGFzIHAsaHlkcmF0ZSBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgX31mcm9tXCJwcmVhY3RcIjtleHBvcnR7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250ZXh0LGNyZWF0ZVJlZixGcmFnbWVudCxDb21wb25lbnR9ZnJvbVwicHJlYWN0XCI7ZnVuY3Rpb24gUyhuLHQpe2Zvcih2YXIgZSBpbiB0KW5bZV09dFtlXTtyZXR1cm4gbn1mdW5jdGlvbiBDKG4sdCl7Zm9yKHZhciBlIGluIG4paWYoXCJfX3NvdXJjZVwiIT09ZSYmIShlIGluIHQpKXJldHVybiEwO2Zvcih2YXIgciBpbiB0KWlmKFwiX19zb3VyY2VcIiE9PXImJm5bcl0hPT10W3JdKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIEUobil7dGhpcy5wcm9wcz1ufWZ1bmN0aW9uIGcobix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjpDKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sdCl9cmV0dXJuIHIuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5fX2Y9ITAscn0oRS5wcm90b3R5cGU9bmV3IGEpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLEUucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBDKHRoaXMucHJvcHMsbil8fEModGhpcy5zdGF0ZSx0KX07dmFyIHc9aC5fX2I7aC5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLHcmJncobil9O3ZhciBSPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiB4KG4pe2Z1bmN0aW9uIHQodCxlKXt2YXIgcj1TKHt9LHQpO3JldHVybiBkZWxldGUgci5yZWYsbihyLChlPXQucmVmfHxlKSYmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxcImN1cnJlbnRcImluIGUpP2U6bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9Uix0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTj1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6ZChkKG4pLm1hcCh0KSl9LGs9e21hcDpOLGZvckVhY2g6Tixjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9kKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PWQobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6ZH0sQT1oLl9fZTtoLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcix1PXQ7dT11Ll9fOylpZigocj11Ll9fYykmJnIuX19jKXJldHVybiBudWxsPT10Ll9fZSYmKHQuX19lPWUuX19lLHQuX19rPWUuX19rKSxyLl9fYyhuLHQpO0Eobix0LGUpfTt2YXIgTz1oLnVubW91bnQ7ZnVuY3Rpb24gTCgpe3RoaXMuX191PTAsdGhpcy50PW51bGwsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Ll9fZSYmdC5fX2Uobil9ZnVuY3Rpb24gRihuKXt2YXIgdCxlLHI7ZnVuY3Rpb24gdSh1KXtpZih0fHwodD1uKCkpLnRoZW4oZnVuY3Rpb24obil7ZT1uLmRlZmF1bHR8fG59LGZ1bmN0aW9uKG4pe3I9bn0pLHIpdGhyb3cgcjtpZighZSl0aHJvdyB0O3JldHVybiBzKGUsdSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJMYXp5XCIsdS5fX2Y9ITAsdX1mdW5jdGlvbiBNKCl7dGhpcy51PW51bGwsdGhpcy5vPW51bGx9aC51bm1vdW50PWZ1bmN0aW9uKG4pe3ZhciB0PW4uX19jO3QmJnQuX19SJiZ0Ll9fUigpLHQmJiEwPT09bi5fX2gmJihuLnR5cGU9bnVsbCksTyYmTyhuKX0sKEwucHJvdG90eXBlPW5ldyBhKS5fX2M9ZnVuY3Rpb24obix0KXt2YXIgZT10Ll9fYyxyPXRoaXM7bnVsbD09ci50JiYoci50PVtdKSxyLnQucHVzaChlKTt2YXIgdT1VKHIuX192KSxvPSExLGk9ZnVuY3Rpb24oKXtvfHwobz0hMCxlLl9fUj1udWxsLHU/dShsKTpsKCkpfTtlLl9fUj1pO3ZhciBsPWZ1bmN0aW9uKCl7aWYoIS0tci5fX3Upe2lmKHIuc3RhdGUuX19lKXt2YXIgbj1yLnN0YXRlLl9fZTtyLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fdj1udWxsLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSksdC5fX2MmJnQuX19jLl9fUD09PWUmJih0Ll9fZSYmci5pbnNlcnRCZWZvcmUodC5fX2UsdC5fX2QpLHQuX19jLl9fZT0hMCx0Ll9fYy5fX1A9cikpLHR9KG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fZTpyLl9fYj1udWxsfSk7dD1yLnQucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19LGM9ITA9PT10Ll9faDtyLl9fdSsrfHxjfHxyLnNldFN0YXRlKHtfX2U6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LEwucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy50PVtdfSxMLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHI9dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09ZnVuY3Rpb24gbih0LGUscil7cmV0dXJuIHQmJih0Ll9fYyYmdC5fX2MuX19IJiYodC5fX2MuX19ILl9fLmZvckVhY2goZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCl9KSx0Ll9fYy5fX0g9bnVsbCksbnVsbCE9KHQ9Uyh7fSx0KSkuX19jJiYodC5fX2MuX19QPT09ciYmKHQuX19jLl9fUD1lKSx0Ll9fYz1udWxsKSx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pKSx0fSh0aGlzLl9fYixlLHIuX19PPXIuX19QKX10aGlzLl9fYj1udWxsfXZhciB1PXQuX19lJiZzKHYsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gdSYmKHUuX19oPW51bGwpLFtzKHYsbnVsbCx0Ll9fZT9udWxsOm4uY2hpbGRyZW4pLHVdfTt2YXIgVD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5vLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5vLnNpemUpKWZvcihlPW4udTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24udT1lPWVbMl19fTtmdW5jdGlvbiBEKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gSShuKXt2YXIgdD10aGlzLGU9bi5pO3QuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtwKG51bGwsdC5sKSx0Lmw9bnVsbCx0Lmk9bnVsbH0sdC5pJiZ0LmkhPT1lJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCksbi5fX3Y/KHQubHx8KHQuaT1lLHQubD17bm9kZVR5cGU6MSxwYXJlbnROb2RlOmUsY2hpbGROb2RlczpbXSxhcHBlbmRDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LGluc2VydEJlZm9yZTpmdW5jdGlvbihuLGUpe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnNwbGljZSh0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihuKT4+PjEsMSksdC5pLnJlbW92ZUNoaWxkKG4pfX0pLHAocyhELHtjb250ZXh0OnQuY29udGV4dH0sbi5fX3YpLHQubCkpOnQubCYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWZ1bmN0aW9uIFcobix0KXtyZXR1cm4gcyhJLHtfX3Y6bixpOnR9KX0oTS5wcm90b3R5cGU9bmV3IGEpLl9fZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10Lm8uZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksVCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLm89bmV3IE1hcDt2YXIgdD1kKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5vLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxNLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9TS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMuby5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7VChuLGUsdCl9KX07dmFyIGo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLFA9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxtYXJrZXIoPyFIfFd8VSl8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0KD8hTCl8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eCg/IUMpKVtBLVpdLyxWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCx6PWZ1bmN0aW9uKG4pe3JldHVybihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKCk/L2ZpbHxjaGV8cmFkL2k6L2ZpbHxjaGV8cmEvaSkudGVzdChuKX07ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG51bGw9PXQuX19rJiYodC50ZXh0Q29udGVudD1cIlwiKSxwKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1mdW5jdGlvbiAkKG4sdCxlKXtyZXR1cm4gbShuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9YS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fSxbXCJjb21wb25lbnRXaWxsTW91bnRcIixcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcImNvbXBvbmVudFdpbGxVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoYS5wcm90b3R5cGUsbix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK25dfSxzZXQ6ZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsbix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnR9KX19KX0pO3ZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gWigpe31mdW5jdGlvbiBZKCl7cmV0dXJuIHRoaXMuY2FuY2VsQnViYmxlfWZ1bmN0aW9uIHEoKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1aLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9WSxuLmlzRGVmYXVsdFByZXZlbnRlZD1xLG4ubmF0aXZlRXZlbnQ9bn07dmFyIEcsSj17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sSz1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcyxyPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB1PS0xPT09dC5pbmRleE9mKFwiLVwiKTtmb3IodmFyIG8gaW4gcj17fSxlKXt2YXIgaT1lW29dO1YmJlwiY2hpbGRyZW5cIj09PW8mJlwibm9zY3JpcHRcIj09PXR8fFwidmFsdWVcIj09PW8mJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1pfHwoXCJkZWZhdWx0VmFsdWVcIj09PW8mJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/bz1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09byYmITA9PT1pP2k9XCJcIjovb25kb3VibGVjbGljay9pLnRlc3Qobyk/bz1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3Qobyt0KSYmIXooZS50eXBlKT9vPVwib25pbnB1dFwiOi9eb25mb2N1cyQvaS50ZXN0KG8pP289XCJvbmZvY3VzaW5cIjovXm9uYmx1ciQvaS50ZXN0KG8pP289XCJvbmZvY3Vzb3V0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cixlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpfW4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTokLHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlciwkIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXHJcbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcclxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xyXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXHJcbiAgICByZXR1cm4gbWVyZ2VDbGFzc2VzKGxocywgcmhzKTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIGNvbnN0IGxoc0NsYXNzID0gbGhzPy5jbGFzcztcclxuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgcmhzQ2xhc3NOYW1lID0gcmhzPy5jbGFzc05hbWU7XHJcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgIF07XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1swXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1syXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1szXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s2XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s5XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzExXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxM107XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcclxuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZWYoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cclxuICogQHBhcmFtIGxoc1xyXG4gKiBAcGFyYW0gcmhzXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcclxuICAgICAgICBjb25zdCByaHMgPSByaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGxldCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xyXG4gICAgICAgIH0sIFtsaHMsIHJoc10pO1xyXG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNSZWYocmVmOiBSZWY8YW55PikgeyB9XHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XHJcblxyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmIH0pLFxyXG4gICAgXSBhcyBjb25zdDtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMV0pO1xyXG5cclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXHJcbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzZdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s3XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xyXG59XHJcbiovXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XHJcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XHJcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcclxufVxyXG4vKipcclxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXHJcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcclxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxyXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XHJcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gbGhzLnN0eWxlO1xyXG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xyXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcclxuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2dpYz8/P1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxyXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxyXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XHJcbmxldCBsb2cgPSAoc3RyKSA9PiB7IGRlYnVnZ2VyOyBjb25zb2xlLndhcm4oYFRyeWluZyB0byBtZXJnZSB0d28gcHJvcHMgd2l0aCB0aGUgc2FtZSBuYW1lOiAke3N0cn1gKTsgLyogSW50ZW50aW9uYWwgKi8gfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcclxuICAgIGxvZyA9IGxvZzI7XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxyXG4gKiBAcGFyYW0gbGhzMlxyXG4gKiBAcGFyYW0gcmhzMlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XHJcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcclxuICAgICAgICAvLyBhbmQgYWxsIGxocyBwcm9wcy4gV2UncmUgZ29pbmcgdG8gbWVyZ2UgaW4gcmhzIGp1c3QgYWZ0ZXIuXHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogbGhzQ2hpbGRyZW4sIGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIC4uLmxocyxcclxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcclxuICAgICAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuc3R5bGU7XHJcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5jbGFzc05hbWU7XHJcbiAgICAgICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcclxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXHJcbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcclxuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XHJcbiAgICBpZiAoIWxocylcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgaWYgKCFyaHMpXHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBsdiA9IGxocyguLi5hcmdzKTtcclxuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XHJcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcclxuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XHJcblxyXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XHJcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTM6IE0xID0gMDtcclxuXHJcbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xyXG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG02OiBNMiA9IDA7XHJcblxyXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcclxuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xyXG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcblxyXG5cclxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxyXG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xyXG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xyXG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xyXG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xyXG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xyXG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xyXG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xyXG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xyXG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xyXG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xyXG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xyXG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xyXG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xyXG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xyXG5cclxuXHJcbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cclxuKi8gXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG4vKipcclxuICogRGVidWcgaG9vay5cclxuICpcclxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbnN1cmVTdGFiaWxpdHkoLi4udmFsdWVzKSB7XHJcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCwgMCk7XHJcbiAgICB2YWx1ZXMuZm9yRWFjaCh1c2VIZWxwZXIpO1xyXG4gICAgcmV0dXJuO1xyXG4gICAgZnVuY3Rpb24gdXNlSGVscGVyKHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcclxuICAgICAgICBjb25zdCBoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSA9IHVzZVJlZih2YWx1ZSk7XHJcbiAgICAgICAgY29uc3Qgc2hvd25FcnJvciA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICAgICAgaWYgKGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5LmN1cnJlbnQgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCFzaG93bkVycm9yLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoaXMgaG9vayByZXF1aXJlcyBzb21lIG9yIGFsbCBvZiBpdHMgYXJndW1lbnRzIHJlbWFpbiBzdGFibGUgYWNyb3NzIGVhY2ggcmVuZGVyOyBwbGVhc2UgY2hlY2sgdGhlICR7aW5kZXh9LWluZGV4ZWQgdmFsdWUgdGhhdCB3YXMgY2hlY2tlZC5gKTtcclxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgc2hvd25FcnJvci5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cclxuICpcclxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XHJcbiAqXHJcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxyXG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cclxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xyXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cclxuICpcclxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxyXG4gKiBAcGFyYW0gZ2V0SW5pdGlhbFZhbHVlIElmIHByb3ZpZGVkLCB0aGUgZWZmZWN0IHdpbGwgYmUgaW52b2tlZCBvbmNlIHdpdGggdGhpcyB2YWx1ZSBvbiBtb3VudC4gTVVTVCBCRSBTVEFCTEUsIGVpdGhlciBiZWNhdXNlIGl0IGhhcyBubyBkZXBlbmRlbmNpZXMsIG9yIGJlY2F1c2UgaXQncyBmcm9tIHVzZVN0YWJsZUNhbGxiYWNrLCBidXQgdGhpcyB3aWxsIG1lYW4geW91IGNhbm5vdCB1c2UgZ2V0U3RhdGUgb3Igc2V0U3RhdGUgZHVyaW5nIHJlbmRlci5cclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VQYXNzaXZlU3RhdGUob25DaGFuZ2UsIGdldEluaXRpYWxWYWx1ZSkge1xyXG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYoVW5zZXQpO1xyXG4gICAgY29uc3Qgd2FybmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBwcm92aWRlZCBmdW5jdGlvbnMgYXJlIHBlcmZlY3RseSBzdGFibGUgYWNyb3NzIHJlbmRlcnNcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlKTtcclxuICAgIC8vIFNoYXJlZCBiZXR3ZWVuIFwiZGVwZW5kZW5jeSBjaGFuZ2VkXCIgYW5kIFwiY29tcG9uZW50IHVubW91bnRlZFwiLlxyXG4gICAgY29uc3Qgb25TaG91bGRDbGVhblVwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGxldCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoY2xlYW51cENhbGxiYWNrKVxyXG4gICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2soKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFRoZXJlIGFyZSBhIGNvdXBsZSBwbGFjZXMgd2hlcmUgd2UnZCBsaWtlIHRvIHVzZSBvdXIgaW5pdGlhbFxyXG4gICAgLy8gdmFsdWUgaW4gcGxhY2Ugb2YgaGF2aW5nIG5vIHZhbHVlIGF0IGFsbCB5ZXQuXHJcbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcclxuICAgIC8vIGdldFZhbHVlIGlzIGNhbGxlZC5cclxuICAgIGNvbnN0IHRyeUVuc3VyZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSBnZXRJbml0aWFsVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudCA9IChvbkNoYW5nZT8uKGluaXRpYWxWYWx1ZSwgdW5kZWZpbmVkKSA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXhjZXB0aW9ucyBhcmUgaW50ZW50aW9uYWwgdG8gYWxsb3cgYmFpbG91dCAod2l0aG91dCBleHBvc2luZyB0aGUgVW5zZXQgc3ltYm9sKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyAvKiBnZXRJbml0aWFsVmFsdWUgYW5kIG9uQ2hhbmdlIGludGVudGlvbmFsbHkgb21pdHRlZCAqL10pO1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcclxuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXHJcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXHJcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxyXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xyXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3ZlIHJ1biBvdXIgZWZmZWN0IGF0IGxlYXN0IG9uY2Ugb24gbW91bnQuXHJcbiAgICAgICAgLy8gKElmIHdlIGhhdmUgYW4gaW5pdGlhbCB2YWx1ZSwgb2YgY291cnNlKVxyXG4gICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBUaGUgYWN0dWFsIGNvZGUgdGhlIHVzZXIgY2FsbHMgdG8gKHBvc3NpYmx5KSBydW4gYSBuZXcgZWZmZWN0LlxyXG4gICAgY29uc3Qgc2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoYXJnKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBkZXAgPSBhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhwcmV2RGVwKSA6IGFyZztcclxuICAgICAgICBpZiAoZGVwICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcclxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJkIGNsZWFudXAgZnVuY3Rpb25cclxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xyXG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXHJcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiBbZ2V0VmFsdWUsIHNldFZhbHVlXTtcclxufVxyXG5jb25zdCBVbnNldCA9IFN5bWJvbCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcGFzc2l2ZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxyXG4vKipcclxuICogQWxsb3dzIGFjY2Vzc2luZyB0aGUgZWxlbWVudCBhIHJlZiByZWZlcmVuY2VzIGFzIHNvb24gYXMgaXQgZG9lcyBzby5cclxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCxcclxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXHJcbiAqXHJcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgZWxlbWVudCwgYW5kIHRoZSBzdWItaG9vayB0aGF0IG1ha2VzIGl0IHJldHJpZXZhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoYXJncykge1xyXG4gICAgY29uc3Qgb25FbGVtZW50Q2hhbmdlID0gYXJncz8ub25FbGVtZW50Q2hhbmdlO1xyXG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxyXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgcmV0dXJuTnVsbCk7XHJcbiAgICAvLyBDcmVhdGUgYSBSZWZDYWxsYmFjayB0aGF0J3MgZmlyZWQgd2hlbiBtb3VudGVkIFxyXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUpXHJcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1c2VSZWZFbGVtZW50UHJvcHMgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZU1lcmdlZFByb3BzKCkoeyByZWY6IG15UmVmIH0sIHByb3BzKSwgW10pO1xyXG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXHJcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgICBmdW5jdGlvbiBmb28ocHJvcHMpIHtcclxuICAgICAgICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgICAgICBjb25zdCB7IHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogc2V0RWxlbWVudCB9KTtcclxuICAgICAgICBjb25zdCBwMSA9IHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcDEuc3R5bGUgPT09IFwic3RyaW5nXCIpIHsgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmVmLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuZnVuY3Rpb24gZXh0cmFjdEVsZW1lbnRTaXplKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmV0cmlldmUgdGhlIHNpemUgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXRcIik7XHJcbiAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICByZXR1cm4gKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UgfSkge1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlLCByZXR1cm5OdWxsKTtcclxuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICBjb25zdCBuZWVkQU5ld09ic2VydmVyID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQsIG9ic2VydmVCb3gpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcclxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNpemUoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAod2luZG93ICYmIChcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7IGJveDogb2JzZXJ2ZUJveCB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZSkgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBnZXRPYnNlcnZlQm94Py4oKSksIFtdKSB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldE9ic2VydmVCb3gpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IGdldE9ic2VydmVCb3goKSlcclxuICAgICAgICAgICAgICAgIG5lZWRBTmV3T2JzZXJ2ZXIoZ2V0RWxlbWVudCgpLCBnZXRPYnNlcnZlQm94KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldFNpemUsXHJcbiAgICAgICAgdXNlRWxlbWVudFNpemVQcm9wczogdXNlUmVmRWxlbWVudFByb3BzXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1lbGVtZW50LXNpemUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlRWxlbWVudFNpemUgfSBmcm9tIFwiLi91c2UtZWxlbWVudC1zaXplXCI7XHJcbmltcG9ydCB7IHVzZUVuc3VyZVN0YWJpbGl0eSwgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcclxufVxyXG4vKipcclxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxyXG4gKlxyXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxyXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cclxuICpcclxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxyXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxyXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cclxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcclxuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xyXG4gICAgY29uc3QgW2dldENvbXB1dGVkU3R5bGVzLCBzZXRDb21wdXRlZFN0eWxlc10gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XHJcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiB1c2VDYWxsYmFjaygoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tcHV0ZWRTdHlsZXMod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICB9KTtcclxuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxyXG4gICAgLy8gICBBLiBUaGVyZSdzIG5vIHdheSB0byB3YXRjaCBmb3IgQ1NTIHN0eWxlIGNoYW5nZXNcclxuICAgIC8vICAgQi4gQ2FsbGluZyBnZXRDb21wdXRlZFN0eWxlIGFmdGVyIGV2ZXJ5IHJlbmRlciBmb3IgZXZlcnkgZWxlbWVudCBnZXRzIGV4cGVuc2l2ZSBmYXN0IGFuZFxyXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XHJcbiAgICAvLyAgICAgIChUaG9zZSB0aGF0IGRvIHdpbGwgbmVlZCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29tcG9uZW50IHRoYXQgdXNlcyBpdClcclxuICAgIC8vXHJcbiAgICAvLyBBcyBhIHNvbHV0aW9uLCBoZXJlJ3MgYSBjaGVhcCB3b3JrYXJvdW5kIHRoYXQgY2hlY2tzIHdoZW4gdGhlIGVsZW1lbnQncyBzaXplIGhhcyBjaGFuZ2VkLFxyXG4gICAgLy8gYW5kIGlmIHNvLCB0ZXN0cyBpZiB0aGUgd3JpdGluZyBtb2RlIGhhcyBjaGFuZ2VkIHRvby5cclxuICAgIC8vXHJcbiAgICAvLyBUaGlzIHdpbGwgd29yayBmb3IgYXQgbGVhc3Qgc29tZSBudW1iZXIgb2YgY2FzZXMsIGJ1dCBhIGJldHRlciBzb2x1dGlvbiBpcyBzdGlsbCBuZWVkZWQuXHJcbiAgICBjb25zdCB7IHVzZUVsZW1lbnRTaXplUHJvcHMgfSA9IHVzZUVsZW1lbnRTaXplKHsgb25TaXplQ2hhbmdlOiB1c2VDYWxsYmFjayhfID0+IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZT8uKGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCkpLCBbXSkgfSk7XHJcbiAgICBjb25zdCBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGVzKCk7XHJcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgICAgIGxldCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBsZXQgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcclxuICAgICAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXHJcbiAgICAgICAgICAgICAgICBkID0gXCJsdHJcIjtcclxuICAgICAgICAgICAgcmV0dXJuICh7IC4uLldyaXRpbmdNb2Rlc1t3IHx8IFwiaG9yaXpvbnRhbC10YlwiXVtkIHx8IFwibHRyXCJdIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vY29uc3QgW2dldExvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VQYXNzaXZlU3RhdGU8TG9naWNhbERpcmVjdGlvbkluZm8+KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsU2lkZSA9IHVzZUNhbGxiYWNrKChzaWRlLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1zdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMF1dO1xyXG4gICAgICAgICAgICBjYXNlIFwiYmxvY2stZW5kXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVsyXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtc3RhcnRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVswXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtZW5kXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMl1dO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInR0YlwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcInJ0bFwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gXCJpbmxpbmUtc3RhcnRcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcclxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxyXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxTaXplOiBjb252ZXJ0RWxlbWVudFNpemUsXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxyXG4gICAgICAgIGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpZGUsXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxTaWRlXHJcbiAgICB9O1xyXG59XHJcbi8vIEhlbHBlciBmb3IgZXh0cmFjdGluZyBpbmZvIGZyb20gXCJsdHJcIiwgXCJ0dGJcIiwgZXRjLlxyXG5jb25zdCBNID0ge1xyXG4gICAgdDogXCJ0b3BcIixcclxuICAgIGI6IFwiYm90dG9tXCIsXHJcbiAgICBsOiBcImxlZnRcIixcclxuICAgIHI6IFwicmlnaHRcIlxyXG59O1xyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgb3B0aW9ucyB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21JZCB9IGZyb20gXCIuL3VzZS1yYW5kb20taWRcIjtcclxuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xyXG5jb25zdCBjb21taXROYW1lID0gKFwiX19jXCIgaW4gb3B0aW9ucyA/IFwiX19jXCIgOiBcImNvbW1pdFwiIGluIG9wdGlvbnMgPyBcImNvbW1pdFwiIDogXCJfY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiX2NvbW1pdFwiIDogXCJfX2NcIik7XHJcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxyXG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXHJcbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXHJcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XHJcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxyXG4vLyBcclxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXHJcbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcclxuY29uc3QgbmV3Q29tbWl0ID0gKHZub2RlLCBjb21taXRRdWV1ZSkgPT4ge1xyXG4gICAgZm9yIChsZXQgW2lkLCBlZmZlY3RJbmZvXSBvZiB0b1J1bikge1xyXG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XHJcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgZWZmZWN0SW5mby5pbnB1dHMpKSB7XHJcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cD8uKCk7XHJcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgZWZmZWN0SW5mby5pbnB1dHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvUnVuLmNsZWFyKCk7XHJcbiAgICBvcmlnaW5hbENvbW1pdD8uKHZub2RlLCBjb21taXRRdWV1ZSk7XHJcbn07XHJcbm9wdGlvbnNbY29tbWl0TmFtZV0gPSBuZXdDb21taXQ7XHJcbi8qKlxyXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXHJcbiAqXHJcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXHJcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxyXG4gKlxyXG4gKiBAcGFyYW0gZWZmZWN0XHJcbiAqIEBwYXJhbSBpbnB1dHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcclxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xyXG4gICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzLCBjbGVhbnVwOiBudWxsIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaWRdKTtcclxufVxyXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XHJcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcclxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XHJcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJwcmVhY3QvanN4LXJ1bnRpbWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcclxuO1xyXG5jb25zdCBTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZnVuY3Rpb24gUHJvdmlkZUJhdGNoZWRBbmltYXRpb25GcmFtZXMoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcclxuICAgIGNvbnN0IHJlbW92ZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGNhbGxiYWNrKSA9PiB7IGFsbENhbGxiYWNrcy5jdXJyZW50LmRlbGV0ZShjYWxsYmFjayk7IH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnRleHRJbmZvID0gdXNlUmVmKG51bGwpO1xyXG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcclxuICAgICAgICBjb250ZXh0SW5mby5jdXJyZW50ID0geyBhZGRDYWxsYmFjaywgcmVtb3ZlQ2FsbGJhY2sgfTtcclxuICAgIGNvbnN0IGFsbENhbGxiYWNrcyA9IHVzZVJlZihudWxsKTtcclxuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxyXG4gICAgICAgIGFsbENhbGxiYWNrcy5jdXJyZW50ID0gbmV3IE1hcCgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XHJcbiAgICAgICAgZnVuY3Rpb24gcmFmV2l0aEJhdGNoZWRDYWxsYmFja3MobXNTaW5jZUxhc3QpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgW2JhdGNoZWRSYWZDYWxsYmFjaywgdGFnXSBvZiBhbGxDYWxsYmFja3MuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmV2l0aEJhdGNoZWRDYWxsYmFja3MpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChfanN4KFNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dEluZm8uY3VycmVudCwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcclxufVxyXG4vKipcclxuICogVGhlIChvcHRpb25hbGx5IG5vbi1zdGFibGUpIGBjYWxsYmFja2AgeW91IHByb3ZpZGUgd2lsbCBzdGFydCBydW5uaW5nIGV2ZXJ5IGZyYW1lIGFmdGVyIHRoZSBjb21wb25lbnQgbW91bnRzLlxyXG4gKlxyXG4gKiBQYXNzaW5nIGBudWxsYCBpcyBmaW5lIGFuZCBzaW1wbHkgc3RvcHMgdGhlIGVmZmVjdCB1bnRpbCB5b3UgcmVzdGFydCBpdCBieSBwcm92aWRpbmcgYSBub24tbnVsbCBjYWxsYmFjay5cclxuICpcclxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBbmltYXRpb25GcmFtZSh7IGNhbGxiYWNrIH0pIHtcclxuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXHJcbiAgICBjb25zdCBzdGFibGVDYWxsYmFjayA9IHVzZVN0YWJsZUNhbGxiYWNrKGNhbGxiYWNrID8/ICgoKSA9PiB7IH0pKTtcclxuICAgIGNvbnN0IGhhc0NhbGxiYWNrID0gKGNhbGxiYWNrICE9IG51bGwpO1xyXG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LmFkZENhbGxiYWNrKHN0YWJsZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5yZW1vdmVDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBhbHNvIGNhbGxzIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGFnYWluLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFmQ2FsbGJhY2sgPSAobXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWJsZUNhbGxiYWNrKG1zKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dCwgaGFzQ2FsbGJhY2tdKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgc2hvdywgcGhhc2UpIHtcclxuICAgIGlmIChwaGFzZSlcclxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9LSR7cGhhc2V9YDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9YDtcclxufVxyXG5sZXQgZHVtbXk7XHJcbmZ1bmN0aW9uIGZvcmNlUmVmbG93KGUpIHtcclxuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxyXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cclxuICAgIGR1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiBlO1xyXG59XHJcbi8qKlxyXG4gKiBBIGhvb2sgdGhhdCBhZGRzICYgcmVtb3ZlcyBjbGFzcyBuYW1lcyBpbiBhIHdheSB0aGF0IGZhY2lsaXRhdGVzIHByb3BlciB0cmFuc2l0aW9ucy5cclxuICpcclxuICogVGhlIGZpcnN0IGFyZ3VtZW50IGNvbnRhaW5zIHRoZSBwcm9wcyByZWxhdGVkIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBUaGUgc2Vjb25kIGFyZ3VtZW50IGNvbnRhaW5zIGFueSBvdGhlciBwcm9wcyB5b3UgbWlnaHQgd2FudCBtZXJnZWQgaW50byB0aGUgZmluYWwgcHJvZHVjdCAodGhlc2UgYXJlIG5vdCByZWFkIG9yIG1hbmlwdWxhdGVkIG9yIGFueXRoaW5nIC0tIGl0J3MgcHVyZWx5IHNob3J0aGFuZCBhbmQgY2FuIGJlIG9taXR0ZWQgd2l0aCBge31gIGFuZCB0aGVuIHlvdXIgb3duIGB1c2VNZXJnZWRQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBtZWFzdXJlLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBvblRyYW5zaXRpb25VcGRhdGUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgc2hvdywgcmVmIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICBjb25zdCBbcGhhc2UsIHNldFBoYXNlXSA9IHVzZVN0YXRlKGFuaW1hdGVPbk1vdW50ID8gXCJpbml0XCIgOiBudWxsKTtcclxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShzaG93ID09IG51bGwgPyBudWxsIDogc2hvdyA/IFwiZW50ZXJcIiA6IFwiZXhpdFwiKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlSGVpZ2h0LCBzZXRTdXJmYWNlSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VYLCBzZXRTdXJmYWNlWF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1dpZHRoLCBzZXRUcmFuc2l0aW9uaW5nV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ0hlaWdodCwgc2V0VHJhbnNpdGlvbmluZ0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1ksIHNldFRyYW5zaXRpb25pbmdZXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogc2V0TG9naWNhbERpcmVjdGlvbkluZm8gfSk7XHJcbiAgICBjb25zdCBvblRyYW5zaXRpb25VcGRhdGVSZWYgPSB1c2VSZWYob25UcmFuc2l0aW9uVXBkYXRlKTtcclxuICAgIGNvbnN0IHBoYXNlUmVmID0gdXNlUmVmKHBoYXNlKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgZHVyYXRpb25SZWYgPSB1c2VSZWYoZHVyYXRpb24pO1xyXG4gICAgY29uc3QgdG9vRWFybHlUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IHRvb0xhdGVUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgb25UcmFuc2l0aW9uRW5kID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldEVsZW1lbnQoKSAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc2V0UGhhc2UoXCJmaW5hbGl6ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudCA9IG9uVHJhbnNpdGlvblVwZGF0ZTsgfSwgW29uVHJhbnNpdGlvblVwZGF0ZV0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgcGhhc2VSZWYuY3VycmVudCA9IHBoYXNlOyB9LCBbcGhhc2VdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkdXJhdGlvblJlZi5jdXJyZW50ID0gZHVyYXRpb247IH0sIFtkdXJhdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIHBoYXNlKVxyXG4gICAgICAgICAgICBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudD8uKGRpcmVjdGlvbiwgcGhhc2UpO1xyXG4gICAgfSwgW2RpcmVjdGlvbiwgcGhhc2VdKTtcclxuICAgIC8vIEV2ZXJ5IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gXCJ0cmFuc2l0aW9uXCIsIGFkZCBvdXIgdHJhbnNpdGlvbiB0aW1lb3V0IHRpbWVvdXRzXHJcbiAgICAvLyB0byBjYXRjaCBhbnkgdGltZSBvblRyYW5zaXRpb25FbmQgZmFpbHMgdG8gcmVwb3J0IGZvciB3aGF0ZXZlciByZWFzb24gdG8gYmUgc2FmZVxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dER1cmF0aW9uID0gZHVyYXRpb25SZWYuY3VycmVudCA/PyAxMDAwO1xyXG4gICAgICAgICAgICB0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3BoYXNlXSk7XHJcbiAgICAvLyBBbnkgdGltZSBcInNob3dcIiBjaGFuZ2VzLCB1cGRhdGUgb3VyIGRpcmVjdGlvbiBhbmQgcGhhc2UuXHJcbiAgICAvLyBJbiBhZGRpdGlvbiwgbWVhc3VyZSB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgc2hvdyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGhhc2UgPSBwaGFzZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAvLyBTd2FwIG91ciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgaWYgKHNob3cpXHJcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJlbnRlclwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9uKFwiZXhpdFwiKTtcclxuICAgICAgICAgICAgc2V0UGhhc2UocHJldmlvdXNQaGFzZSA9PT0gbnVsbCA/IFwiZmluYWxpemVcIiA6IFwiaW5pdFwiKTtcclxuICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1goeCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1koeSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1dpZHRoKHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0KGhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNQaGFzZSA9PT0gXCJmaW5hbGl6ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUgZ29pbmcgdG8gYmUgbWVzc2luZyB3aXRoIHRoZSBhY3R1YWwgZWxlbWVudCdzIGNsYXNzLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSdsbCB3YW50IGFuIGVhc3kgd2F5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja3VwID0gZWxlbWVudC5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsIGAke2NsYXNzQmFzZX0tZXhpdGAsIGAke2NsYXNzQmFzZX0tZXhpdC1pbml0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWV4aXQtZmluYWxpemVgKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplV2l0aG91dFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZVdpdGhvdXRUcmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VYKHggKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VZKHkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VXaWR0aCh3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZUhlaWdodChoZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYmFja3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nob3csIG1lYXN1cmUsIGNsYXNzQmFzZV0pO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gaW5pdCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBzY3JlZW4gaXMgcGFpbnRlZCxcclxuICAgIC8vIGNoYW5nZSB0aGUgcGhhc2UgdG8gXCJ0cmFuc2l0aW9uXCIgYW5kIHJlLXJlbmRlciAoKS5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgc2V0IG91ciB0cmFuc2l0aW9uIHN0eWxlLlxyXG4gICAgICAgICAgICAgICAgc2V0UGhhc2UoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwaGFzZSwgbWVhc3VyZV0pO1xyXG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmlubGluZURpcmVjdGlvbjtcclxuICAgIGNvbnN0IGJsb2NrRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmJsb2NrRGlyZWN0aW9uO1xyXG4gICAgY29uc3Qgd3JpdGluZ01vZGVJc0hvcml6b250YWwgPSAoaW5saW5lRGlyZWN0aW9uID09IFwicnRsXCIgfHwgaW5saW5lRGlyZWN0aW9uID09IFwibHRyXCIpO1xyXG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xyXG4gICAgY29uc3Qgc3VyZmFjZUJsb2NrSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VZIDogc3VyZmFjZVg7XHJcbiAgICBjb25zdCBzdXJmYWNlSW5saW5lU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gc3VyZmFjZVdpZHRoIDogc3VyZmFjZUhlaWdodDtcclxuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nSW5saW5lSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdYIDogdHJhbnNpdGlvbmluZ1k7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ1kgOiB0cmFuc2l0aW9uaW5nWDtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ0hlaWdodCA6IHRyYW5zaXRpb25pbmdXaWR0aDtcclxuICAgIGxldCBhbG1vc3REb25lID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh7XHJcbiAgICAgICAgcmVmLFxyXG4gICAgICAgIHN0eWxlOiByZW1vdmVFbXB0eSh7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZHVyYXRpb25gXTogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS14YF06IHN1cmZhY2VYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UteWBdOiBzdXJmYWNlWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXdpZHRoYF06IHN1cmZhY2VXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWhlaWdodGBdOiBzdXJmYWNlSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLWluc2V0YF06IHN1cmZhY2VJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWJsb2NrLWluc2V0YF06IHN1cmZhY2VCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLXNpemVgXTogc3VyZmFjZUlubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1zaXplYF06IHN1cmZhY2VCbG9ja1NpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy14YF06IHRyYW5zaXRpb25pbmdYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteWBdOiB0cmFuc2l0aW9uaW5nWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXdpZHRoYF06IHRyYW5zaXRpb25pbmdXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWhlaWdodGBdOiB0cmFuc2l0aW9uaW5nSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLWluc2V0YF06IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLWluc2V0YF06IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLXNpemVgXTogdHJhbnNpdGlvbmluZ0lubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1zaXplYF06IHRyYW5zaXRpb25pbmdCbG9ja1NpemVcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblRyYW5zaXRpb25FbmQsXHJcbiAgICAgICAgLi4uKHsgXCJhcmlhLWhpZGRlblwiOiBzaG93ID8gdW5kZWZpbmVkIDogXCJ0cnVlXCIgfSksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGRpcmVjdGlvbiAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24pLCBkaXJlY3Rpb24gJiYgcGhhc2UgJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uLCBwaGFzZSksIGV4aXRWaXNpYmlsaXR5ID09IFwicmVtb3ZlZFwiICYmIGAke2NsYXNzQmFzZX0tcmVtb3ZlZC1vbi1leGl0YCwgZXhpdFZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIgJiYgYCR7Y2xhc3NCYXNlfS12aXNpYmxlLW9uLWV4aXRgLCBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLCBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YCksXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbG1vc3REb25lLCBvdGhlclByb3BzKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVFbXB0eShvYmopIHtcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtfLCB2XSkgPT4gdiAhPSBudWxsKSk7XHJcbn1cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IHRoYXQgKndyYXBzIGFuIEhUTUxFbGVtZW50IG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCogYW5kIGFsbG93cyBpdCB0byB1c2UgQ1NTIHRvIHRyYW5zaXRpb24gaW4vb3V0LlxyXG4gKiBDb21iaW5lcyB0aGUgcHJvcHMgcGFzc2VkIHRvIGl0LCB0aGUgcHJvcHMgaXRzIGNoaWxkIGhhcywgYW5kIHRoZSBwcm9wcyBuZWVkZWQgZm9yIHRoZSBDU1MgdHJhbnNpdGlvbiwgYW5kIHBhc3NlcyB0aGVtXHJcbiAqIGFsbCB0byB0aGUgY2hpbGQgZWxlbWVudCB5b3UgcHJvdmlkZS5cclxuICpcclxuICogVGhpcyBpcyB0aGUgbW9zdCBnZW5lcmFsIGNvbXBvbmVudCB0aGF0IG90aGVycyB1c2UgYXMgYSBiYXNlLiBCeSBkZWZhdWx0LCB0aGlzIGNvbXBvbmVudCBieSBpdHNlbGYgZG9lc24ndCBhY3R1YWxseSBhZGQgYW55IENTUyBjbGFzc2VzIHRoYXQgYW5pbWF0ZSBhbnl0aGluZyAobGlrZSBvcGFjaXR5LCBmb3IgZXhhbXBsZSkuXHJcbiAqIEl0IGFkZHMgY2xhc3NlcyBsaWtlIGB0cmFuc2l0aW9uLWVudGVyLWZpbmFsaXplYCwgYnV0IHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgZS5nLiBgZmFkZWAgY2xhc3MgdGhhdCByZWFjdHMgdG8gaXQuXHJcbiAqXHJcbiAqIFVzZSB0aGlzIGlmIHRoZSBvdGhlciwgbW9yZSBzcGVjaWFsaXplZCBUcmFuc2l0aW9uIGNvbXBvbmVudHMgZG9uJ3QgZml0IHlvdXIgbmVlZHMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30gey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT48ZGl2PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcclxuICogQGV4YW1wbGUgYDxUcmFuc2l0aW9uYWJsZSBzaG93PXtzaG93fT48ZGl2IHsuLi51c2VDcmVhdGVGYWRlUHJvcHMoLi4uKX0+e2NoaWxkcmVufTwvZGl2PjwvVHJhbnNpdGlvbmFibGU+YFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuOiBjaGlsZCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIHNob3csIG9uVHJhbnNpdGlvblVwZGF0ZSwgYW5pbWF0ZU9uTW91bnQsIGNoaWxkTW91bnRCZWhhdmlvciwgLi4ucHJvcHMgfSwgcikge1xyXG4gICAgY29uc3QgW2hhc1Nob3duT25jZSwgc2V0SGFzU2hvd25PbmNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3VsZFNldEhhc1Nob3duT25jZSA9IChoYXNTaG93bk9uY2UgPT09IGZhbHNlICYmIGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgc2hvdyA9PT0gdHJ1ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2hvdWxkU2V0SGFzU2hvd25PbmNlKVxyXG4gICAgICAgIHNldEhhc1Nob3duT25jZSh0cnVlKTsgfSwgW3Nob3VsZFNldEhhc1Nob3duT25jZV0pO1xyXG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC13aGVuLXNob3dpbmdcIiAmJiAhc2hvdylcclxuICAgICAgICBjaGlsZCA9IGgoXCJkaXZcIiwgbnVsbCk7XHJcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiAhc2hvdyAmJiBoYXNTaG93bk9uY2UgPT09IGZhbHNlKVxyXG4gICAgICAgIGNoaWxkID0gaChcImRpdlwiLCBudWxsKTtcclxuICAgIGlmICghY2hpbGRJc1ZOb2RlKGNoaWxkKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgVHJhbnNpdGlvbmFibGUgY29tcG9uZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBjb21wb25lbnQgY2hpbGQgKGUuZy4gYSA8ZGl2PiwgYnV0IG5vdCBcXFwiYSBzdHJpbmdcXFwiKS5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgbWVhc3VyZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG9uVHJhbnNpdGlvblVwZGF0ZSwgcmVmOiByLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wcyk7XHJcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcygpKHRyYW5zaXRpb25Qcm9wcywgeyAuLi5jaGlsZC5wcm9wcywgcmVmOiBjaGlsZC5yZWYgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xyXG59KTtcclxuZnVuY3Rpb24gY2hpbGRJc1ZOb2RlKGNoaWxkKSB7XHJcbiAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hpbGQgIT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gKFwicHJvcHNcIiBpbiBjaGlsZCk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbmFibGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgQ2xpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtjbGFzc0Jhc2V9LWNsaXBgKSxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXHJcbiAgICAgICAgfSxcclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuZXhwb3J0IGNvbnN0IENsaXAgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mYWRlYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcclxuICAgICAgICB9XHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXHJcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cclxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcclxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IENsaXAgfSBmcm9tIFwiLi9jbGlwXCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbjtcclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChDbGlwLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICpcclxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NCYXNlLFxyXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWNvbGxhcHNlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXHJcbiAqXHJcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXHJcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXHJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCIuL2NvbGxhcHNlXCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBDb2xsYXBzZSBhbmQgRmFkZSBlZmZlY3RzLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYENvbGxhcHNlYCBgRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChDb2xsYXBzZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihzbGlkZVRhcmdldElubGluZSA/PyAxKTtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRJbmxpbmUpXHJcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBzbGlkZVRhcmdldElubGluZTsgfSwgW3NsaWRlVGFyZ2V0SW5saW5lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRCbG9jaylcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gc2xpZGVUYXJnZXRCbG9jazsgfSwgW3NsaWRlVGFyZ2V0QmxvY2tdKTtcclxuICAgIGlmIChzbGlkZVRhcmdldElubGluZSA9PSAwKVxyXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XHJcbiAgICBpZiAoc2xpZGVUYXJnZXRCbG9jayA9PSAwKVxyXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXHJcbiAgICAgICAgY2xhc3NCYXNlLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc2xpZGUtdGFyZ2V0LWlubGluZWBdOiBgJHsoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXHJcbiAqXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKlxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxyXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIGBzbGlkZUlubGluZT17KGluZGV4IC0gc2VsZWN0ZWRJbmRleCkgLyAxMH1gIHdvdWxkIG1ha2UgdGhlIGVsZW1lbnQgbG9vayBsaWtlIGl0IGZhZGVzIG91dCBiZWZvcmUgaXQgdHJhdmVscyB0byBpdHMgdGFyZ2V0IGRlc3RpbmF0aW9uLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoU2xpZGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gKHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LCBvdGhlclByb3BzKSk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFpvb20gfSBmcm9tIFwiLi96b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBab29tIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYW4gaWRlYWwgdGltZSB0byB1c2UgdGhlIG1pbmltdW0gc2l6ZSBab29tIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIFpvb20gZWZmZWN0cy5cclxuICpcclxuICogUHJvYmFibHkgYmVzdCBjb21iaW5lZCB3aXRoIGB1c2VDcmVhdGVGYWRlUHJvcHNgIChvciBqdXN0IHVzaW5nIGEgYFNsaWRlWm9vbUZhZGVgPykuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVGYWRlWm9vbWAgYFpvb21gIGBGYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbSh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBTbGlkZVpvb20gfSBmcm9tIFwiLi9zbGlkZS16b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggWm9vbSwgU2xpZGUsIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IHNob3J0aGFuZCBmb3Igc29tZSBwcm9wIGNyZWF0aW9uIGFuZCBwcm9wIG1lcmdpbmcgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFNsaWRlYCBgWm9vbWAgYEZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZVpvb20sIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDE4MCk7XHJcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXHJcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBmbGlwQW5nbGVJbmxpbmU7IH0sIFtmbGlwQW5nbGVJbmxpbmVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVCbG9jaylcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xyXG4gICAgaWYgKGZsaXBBbmdsZUlubGluZSA9PSAwKVxyXG4gICAgICAgIGZsaXBBbmdsZUlubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xyXG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXHJcbiAgICAgICAgZmxpcEFuZ2xlQmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mbGlwYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1wZXJzcGVjdGl2ZWBdOiBgJHsocGVyc3BlY3RpdmUgPz8gODAwKX1weGBcclxuICAgICAgICB9XHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXHJcbiAqXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICpcclxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcclxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcclxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBpbmxpbmUsIGNsYXNzQmFzZSB9LCBvdGhlclByb3BzKSB7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZSA/PyBcInRyYW5zaXRpb25cIn0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxyXG4gKlxyXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXHJcbiAqXHJcbiAqIExpa2UgYDxUcmFuc2l0aW9uYWJsZT5gLCAqdGhpcyB3cmFwcyBhbiBIVE1MRWxlbWVudCAob3Igb3RoZXIgcmVmLWZvcndhcmRpbmcgY29tcG9uZW50KSouIFRoaXMgd2lsbCBiZSB5b3VyIGNvbnRhaW5lciB0aGF0IGhvbGRzIGVhY2ggYDxUcmFuc2l0aW9uYWJsZT5gIChvciBjb21wb25lbnQgdGhhdCB1c2VzIGl0KS4gU3RyaWN0bHkgc3BlYWtpbmcgaXQgY291bGQgYmUgYW55dGhpbmcsIG5vdCBhIGA8VHJhbnNpdGlvbmFibGU+YCwgYnV0IGlmIGl0IGRvZXNudCd0IHRyYW5zaXRpb24gb3V0IHRoZW4gaXQncyBqdXN0IGdvaW5nIHRvIGJlIGhhbmdpbmcgYXJvdW5kIDEwMCUgb2YgdGhlIHRpbWUuXHJcbiAqXHJcbiAqIExvbmcgd2F5IG9mIHNheWluZywgaWYgeW91IGdldCBhIGNyeXB0aWMgZXJyb3Igd2l0aCB0aGlzIGNvbXBvbmVudCwgbWFrZSBzdXJlIGl0IGhhcyBhIHNpbmdsZSBgPGRpdj5gIGNoaWxkIG9yIHNvbWV0aGluZy5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZSh7IGNoaWxkcmVuLCBjbGFzc0Jhc2UsIGlubGluZSwgLi4ucCB9LCByZWYpIHtcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKCkodHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xyXG59KTtcclxuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXHJcbi8vIE5vdCBwZXJmZWN0LCBidXQgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUuIGBpbmxpbmVgIGlzIGZvciBwZXJmZWN0LlxyXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xyXG4gICAgXCJhXCIsXHJcbiAgICBcImFiYnJcIixcclxuICAgIFwiYWNyb255bVwiLFxyXG4gICAgXCJhdWRpb1wiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJkaVwiLFxyXG4gICAgXCJiZG9cIixcclxuICAgIFwiYmlnXCIsXHJcbiAgICBcImJyXCIsXHJcbiAgICBcImJ1dHRvblwiLFxyXG4gICAgXCJjYW52YXNcIixcclxuICAgIFwiY2l0ZVwiLFxyXG4gICAgXCJjb2RlXCIsXHJcbiAgICBcImRhdGFcIixcclxuICAgIFwiZGF0YWxpc3RcIixcclxuICAgIFwiZGVsXCIsXHJcbiAgICBcImRmblwiLFxyXG4gICAgXCJlbVwiLFxyXG4gICAgXCJlbWJlZFwiLFxyXG4gICAgXCJpXCIsXHJcbiAgICBcImlmcmFtZVwiLFxyXG4gICAgXCJpbWdcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwiaW5zXCIsXHJcbiAgICBcImtiZFwiLFxyXG4gICAgXCJsYWJlbFwiLFxyXG4gICAgXCJtYXBcIixcclxuICAgIFwibWFya1wiLFxyXG4gICAgXCJtZXRlclwiLFxyXG4gICAgXCJub3NjcmlwdFwiLFxyXG4gICAgXCJvYmplY3RcIixcclxuICAgIFwib3V0cHV0XCIsXHJcbiAgICBcInBpY3R1cmVcIixcclxuICAgIFwicHJvZ3Jlc3NcIixcclxuICAgIFwicVwiLFxyXG4gICAgXCJydWJ5XCIsXHJcbiAgICBcInNcIixcclxuICAgIFwic2FtcFwiLFxyXG4gICAgXCJzY3JpcHRcIixcclxuICAgIFwic2VsZWN0XCIsXHJcbiAgICBcInNsb3RcIixcclxuICAgIFwic21hbGxcIixcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzdHJvbmdcIixcclxuICAgIFwic3ViXCIsXHJcbiAgICBcInN1cFwiLFxyXG4gICAgXCJzdmdcIixcclxuICAgIFwidGVtcGxhdGVcIixcclxuICAgIFwidGV4dGFyZWFcIixcclxuICAgIFwidGltZVwiLFxyXG4gICAgXCJ1XCIsXHJcbiAgICBcInR0XCIsXHJcbiAgICBcInZhclwiLFxyXG4gICAgXCJ2aWRlb1wiLFxyXG4gICAgXCJ3YnJcIlxyXG5dKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dhcHBhYmxlLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJ1bmRlZmluZWQiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJjb21wb25lbnQiLCJzb3J0IiwiYSIsImIiLCJwb3AiLCJmb3JFYWNoIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJ2bm9kZSIsImMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsIkhBU19SQUYiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhhc0Vycm9yZWQiLCJzIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiYXNzaWduIiwib2JqIiwicHJvcHMiLCJpIiwic2hhbGxvd0RpZmZlcnMiLCJmb3J3YXJkUmVmIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidG9WYWwiLCJtaXgiLCJrIiwieSIsInN0ciIsIkFycmF5IiwiaXNBcnJheSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJyZXR1cm5OdWxsIiwiY3JlYXRlQ29udGV4dCIsImdsb2JhbCIsInRoaXMiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIndpbmRvdyIsInNsaWNlIiwibWF0Y2hlcyIsIkVsZW1lbnQiLCJtc01hdGNoZXNTZWxlY3RvciIsIl9mb2N1c2FibGVFbGVtZW50c1N0cmluZyIsImpvaW4iLCJJbmVydFJvb3QiLCJyb290RWxlbWVudCIsImluZXJ0TWFuYWdlciIsIl9pbmVydE1hbmFnZXIiLCJfcm9vdEVsZW1lbnQiLCJfbWFuYWdlZE5vZGVzIiwiU2V0IiwiaGFzQXR0cmlidXRlIiwiX3NhdmVkQXJpYUhpZGRlbiIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlIiwiX29ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIl9vbk11dGF0aW9uIiwiYmluZCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInZhbHVlIiwiZGVzdHJ1Y3RvciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwibm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsImNvbnRhaW5zIiwicm9vdCIsIm5vZGVUeXBlIiwiTm9kZSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJwYXJlbnROb2RlIiwiYmx1ciIsImZvY3VzIiwiRUxFTUVOVF9OT0RFIiwiZWxlbWVudCIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiZ2V0Iiwic2V0IiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIk1hcCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbkRvY3VtZW50TG9hZGVkIiwiaW5lcnQiLCJoYXMiLCJwYXJlbnQiLCJfaW5lcnRSb290IiwiaW5lcnRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmVydEVsZW1lbnQiLCJfdGhpcyIsInVuc2hpZnQiLCJzaGFkb3dSb290QW5jZXN0b3IiLCJzaGFkb3dSb290IiwibG9jYWxOYW1lIiwiY29udGVudCIsImRpc3RyaWJ1dGVkTm9kZXMiLCJnZXREaXN0cmlidXRlZE5vZGVzIiwic2xvdCIsIl9kaXN0cmlidXRlZE5vZGVzIiwiYXNzaWduZWROb2RlcyIsImZsYXR0ZW4iLCJfaSIsImNoaWxkIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhhc093blByb3BlcnR5IiwiaCIsImNsb25l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QUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDOUYsTUFBTSxTQUFTLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQy9GLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0RyxNQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEcsTUFBTSxRQUFRLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLE1BQTJCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRW5JLE1BQU0sUUFBUSxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNyRixNQUFNLFFBQVEsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDckYsTUFBTSxRQUFRLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENB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
