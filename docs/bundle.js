(function () {
  'use strict';

  var n,
      l$1,
      u$1,
      t$1,
      r$1,
      o$1,
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
  }, _.prototype.render = d$1, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dpY2ctaW5lcnQvZGlzdC9pbmVydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ibG9ja2luZy1lbGVtZW50cy9kaXN0L2Jsb2NraW5nLWVsZW1lbnRzLmpzIiwiLi4vdHJhbnNpdGlvbmFibGUuanMiLCIuLi9jbGlwLmpzIiwiLi4vZmFkZS5qcyIsIi4uL2NsaXAtZmFkZS5qcyIsIi4uL2NvbGxhcHNlLmpzIiwiLi4vY29sbGFwc2UtZmFkZS5qcyIsIi4uL3NsaWRlLmpzIiwiLi4vc2xpZGUtZmFkZS5qcyIsIi4uL3pvb20uanMiLCIuLi96b29tLWZhZGUuanMiLCIuLi9zbGlkZS16b29tLmpzIiwiLi4vc2xpZGUtem9vbS1mYWRlLmpzIiwiLi4vZmxpcC5qcyIsIi4uL3N3YXBwYWJsZS5qcyIsIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQscixvLGY9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHkobCxmLHQscixudWxsKX1mdW5jdGlvbiB5KG4saSx0LHIsbyl7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om99O3JldHVybiBudWxsPT1vJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbztuLl9fZCYmKHI9KHQ9KGw9bikuX192KS5fX2UsKG89bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKG8sdCxpLGwuX19uLHZvaWQgMCE9PW8ub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tyXTpudWxsLHUsbnVsbD09cj9rKHQpOnIsdC5fX2gpLHoodSx0KSx0Ll9fZSE9ciYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQscixvLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LHIsbyxmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtmb3IociBpbiB1KVwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxyIGluIGx8fEgobixyLG51bGwsdVtyXSxpKTtmb3IociBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxIKG4scixsW3JdLHVbcl0saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciByO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKXI9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwscj9UOkkscik6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9UOkkscik7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LHIsbyxmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwsbz1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQscixvLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIWMsb1tvLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LHIsbyxmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKHI9ITApLG51bGwhPW8pZm9yKDtfPG8ubGVuZ3RoO18rKylpZigocz1vW19dKSYmXCJzZXRBdHRyaWJ1dGVcImluIHM9PSEhZCYmKGQ/cy5sb2NhbE5hbWU9PT1kOjM9PT1zLm5vZGVUeXBlKSl7bD1zLG9bX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1yP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLG89bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYobz1vJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9bylmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHkscixjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LHImJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxvLGYsbz9vWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9bylmb3IoXz1vLmxlbmd0aDtfLS07KW51bGwhPW9bX10mJmgob1tfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PXkudmFsdWV8fF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTih0W3JdLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFyJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxvfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQscikseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxyLG8sZj1hKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxkKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBkKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gQShuLHQpe3JldHVybiBvPTgsZChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBGKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gVCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe3ZhciB0O2ZvcihpLnNvcnQoZnVuY3Rpb24obix0KXtyZXR1cm4gbi5fX3YuX19iLXQuX192Ll9fYn0pO3Q9aS5wb3AoKTspaWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdSxyPXQuX19jO3ImJnIuX19IJiYoci5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7ZyhuKX1jYXRjaChuKXt1PW59fSksdSYmbi5fX2UodSxyLl9fdikpfTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11LHI9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKG4uX19jPXZvaWQgMCxyKCkpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uICQobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbmZvY3VzJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNpblwiOi9eb25ibHVyJC9pLnRlc3Qobyk/bz1cIm9uZm9jdXNvdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yLGUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSl9bi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOiQsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLCQgYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xyXG4vKipcclxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxyXG4gKiBOYW1lbHkgaXQgaW52b2x2ZXMgZGUtZ3Vua2luZyB0aGUgdHlwZSBzeXN0ZW0gYnkgbGV0dGluZyB1cyByZXR1cm4gKmdlbmVyaWMqIGZ1bmN0aW9uIGFuZCBwbGF5aW5nIG5pY2Ugd2l0aCBSZWFjdC4gSW4gYWxsIG90aGVyIHJlc3BlY3RzLCBpdCBhY3RzIGxpa2UgYGZvcndhcmRSZWZgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmKENvbXBvbmVudCkge1xyXG4gICAgY29uc3QgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihDb21wb25lbnQpO1xyXG4gICAgcmV0dXJuIEZvcndhcmRlZENvbXBvbmVudDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J3YXJkLWVsZW1lbnQtcmVmLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2hpbGRyZW4obGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XHJcbiAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHJldCA9IGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIHt9LCBsaHMsIHJocyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlaXIgYGNsYXNzYCBhbmQgYGNsYXNzTmFtZWAgcHJvcGVydGllcy5cclxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBsaHMgQ2xhc3NlcyBvZiB0aGUgZmlyc3QgY29tcG9uZW50XHJcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyBBIHN0cmluZyByZXByZXNlbnRpbmcgYWxsIGNvbWJpbmVkIGNsYXNzZXMgZnJvbSBib3RoIGFyZ3VtZW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XHJcbiAgICAvLyBOb3RlOiBGb3IgdGhlIHNha2Ugb2YgZm9yd2FyZCBjb21wYXRpYmlsaXR5LCB0aGlzIGZ1bmN0aW9uIGlzIGxhYmVsbGVkIGFzXHJcbiAgICAvLyBhIGhvb2ssIGJ1dCBhcyBpdCB1c2VzIG5vIG90aGVyIGhvb2tzIGl0IHRlY2huaWNhbGx5IGlzbid0IG9uZS5cclxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgbGhzQ2xhc3NOYW1lID0gbGhzPy5jbGFzc05hbWU7XHJcbiAgICBjb25zdCByaHNDbGFzcyA9IHJocz8uY2xhc3M7XHJcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcclxuICAgIGlmIChsaHNDbGFzcyB8fCByaHNDbGFzcyB8fCBsaHNDbGFzc05hbWUgfHwgcmhzQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgbGV0IGxoc0NsYXNzZXMgPSBjbHN4KGxoc0NsYXNzLCBsaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGxldCBhbGxDbGFzc2VzID0gbmV3IFNldChbLi4uQXJyYXkuZnJvbShsaHNDbGFzc2VzKSwgLi4uQXJyYXkuZnJvbShyaHNDbGFzc2VzKV0pO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGFsbENsYXNzZXMpLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0eXBldGVzdCgpIHtcclxuICAgIGNvbnN0IGMgPSBbXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwge30pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxyXG4gICAgXTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzBdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzNdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s1XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzZdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbN10uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s4XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzldLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTBdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbMTJdLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBjWzEzXTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNsYXNzZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xyXG4gICAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJlZihpbnN0YW5jZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xyXG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkZWJ1Z2dlcjsgLy8gSW50ZW50aW9uYWxcclxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxyXG4gKiBAcGFyYW0gbGhzXHJcbiAqIEBwYXJhbSByaHNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcclxuICAgICAgICBjb25zdCBsaHMgPSBsaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XHJcbiAgICAgICAgbGV0IGNvbWJpbmVkID0gdXNlQ2FsbGJhY2soKGN1cnJlbnQpID0+IHtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xyXG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XHJcbiAgICAgICAgfSwgW2xocywgcmhzXSk7XHJcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsaHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vKlxyXG5mdW5jdGlvbiB0eXBldGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cclxuXHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWY6IHVuZGVmaW5lZCB9LCB7IHJlZiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXHJcbiAgICBdIGFzIGNvbnN0O1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XHJcblxyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbMl0pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xyXG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cclxuICAgIGFjY2VwdHNSZWYoY1s1XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbNl0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzddKTtcclxuICAgIGFjY2VwdHNSZWYoY1s4XSk7XHJcbn1cclxuKi9cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsImZ1bmN0aW9uIHN0eWxlU3RyaW5nVG9PYmplY3Qoc3R5bGUpIHtcclxuICAgIC8vIFRPRE86IFRoaXMgc3Vja3MgRDpcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcclxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcclxuICogQHJldHVybnMgQSBDU1Mgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgYm90aCBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xyXG4gICAgLy8gRWFzeSBjYXNlLCB3aGVuIHRoZXJlIGFyZSBubyBzdHlsZXMgdG8gbWVyZ2UgcmV0dXJuIG5vdGhpbmcuXHJcbiAgICBpZiAoIWxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcclxuICAgICAgICAvLyBFYXN5IGNhc2VzLCB3aGVuIG9uZSBpcyBudWxsIGFuZCB0aGUgb3RoZXIgaXNuJ3QuXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiBsaHMuc3R5bGU7XHJcbiAgICAgICAgaWYgKCFsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpXHJcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XHJcbiAgICAgICAgLy8gVGhleSdyZSBib3RoIG5vbi1udWxsIGJ1dCBkaWZmZXJlbnQgdHlwZXMuXHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXHJcbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xyXG4gICAgICAgICAgICAvLyAodXNlTWVyZ2VkU3R5bGVzIGlzbid0IGEgdHJ1ZSBob29rIC0tIHRoaXMgaXNuJ3QgYSB2aW9sYXRpb24pXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IHN0eWxlU3RyaW5nVG9PYmplY3QocmhzPy5zdHlsZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljPz8/XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXHJcbiAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggb2JqZWN0cywganVzdCBtZXJnZSB0aGVtLlxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi4obGhzPy5zdHlsZSA/PyB7fSksXHJcbiAgICAgICAgLi4uKHJocz8uc3R5bGUgPz8ge30pXHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtc3R5bGVzLmpzLm1hcCIsImltcG9ydCB7IHVzZU1lcmdlZENoaWxkcmVuIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jaGlsZHJlblwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFJlZnMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXJlZnNcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkU3R5bGVzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1zdHlsZXNcIjtcclxubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xyXG4gICAgbG9nID0gbG9nMjtcclxufVxyXG4vKipcclxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVtIGFuZCByZXR1cm5zIHRoZSByZXN1bHQuXHJcbiAqXHJcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXHJcbiAqIEBwYXJhbSBsaHMyXHJcbiAqIEBwYXJhbSByaHMyXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcclxuICAgICAgICAvLyBGaXJzdCwgcHV0IGluIGFsbCB0aGUgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIHJlYXNvbiBhYm91dFxyXG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xyXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW46IHJoc0NoaWxkcmVuLCBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XHJcbiAgICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgICAgLi4ubGhzLFxyXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogdXNlTWVyZ2VkQ2hpbGRyZW4obGhzMiwgcmhzMilcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyZXQucmVmID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQucmVmO1xyXG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5zdHlsZTtcclxuICAgICAgICBpZiAocmV0LmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcclxuICAgICAgICBpZiAocmV0LmNoaWxkcmVuID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuY2hpbGRyZW47XHJcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxyXG4gICAgICAgIC8vIE1lcmdlIGV2ZXJ5IHJlbWFpbmluZyBleGlzdGluZyBlbnRyeSBpbiBsaHMgd2l0aCB3aGF0IHdlJ3ZlIGFscmVhZHkgcHV0IGluIHJldC5cclxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xyXG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW3Joc0tleSwgcmhzVmFsdWVdIG9mIHJoc0VudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGV5J3JlIGJvdGggZnVuY3Rpb25zIHRoYXQgY2FuIGJlIG1lcmdlZCAob3Igb25lJ3MgYSBmdW5jdGlvbiBhbmQgdGhlIG90aGVyJ3MgbnVsbCkuXHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBtZXJnZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVaC4uLndlJ3JlIGhlcmUgYmVjYXVzZSBvbmUgb2YgdGhlbSdzIG51bGwsIHJpZ2h0P1xyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEkgbWVhbiwgdGhleSdyZSB0aGUgc2FtZSB2YWx1ZSBhdCBsZWFzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gZ29vZCBzdHJhdGVnaWVzIGhlcmUsIGp1c3QgbG9nIGl0IGlmIHJlcXVlc3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VGdW5jdGlvbnMobGhzLCByaHMpIHtcclxuICAgIGlmICghbGhzKVxyXG4gICAgICAgIHJldHVybiByaHM7XHJcbiAgICBpZiAoIXJocylcclxuICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgbGV0IGx2ID0gbGhzKC4uLmFyZ3MpO1xyXG4gICAgICAgIGxldCBydiA9IHJocyguLi5hcmdzKTtcclxuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XHJcblxyXG4gICAgY29uc3QgaWQwOiBHZW5lcmljR2V0PHt9LCBcImlkXCIsIHN0cmluZz4gPSBcIlwiO1xyXG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNTogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkMTogWmlwT2JqZWN0PHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB7IGlkOiB1bmRlZmluZWQgfTtcclxuXHJcbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XHJcbiAgICB0eXBlIE0yID0gR2VuZXJpY0dldDx7fSwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcclxuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIEJlY2F1c2UgbnVtYmVyIGlzbid0IGFzc2lnbmFibGUgdG8gc3RyaW5nXHJcbiAgICBjb25zdCBtMzogTTEgPSAwO1xyXG5cclxuICAgIGNvbnN0IG00OiBNMiA9IFwiXCI7XHJcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTY6IE0yID0gMDtcclxuXHJcbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMjogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xyXG4gICAgY29uc3QgcDUgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7fSk7XHJcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcclxuXHJcblxyXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHAyLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNy5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA1LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDcuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XHJcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XHJcbiAgICBjb25zdCByMWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMSk7XHJcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XHJcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XHJcbiAgICBjb25zdCByM2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMyk7XHJcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XHJcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XHJcbiAgICBjb25zdCByNGIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNCk7XHJcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XHJcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XHJcbiAgICBjb25zdCByNmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNik7XHJcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XHJcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XHJcbiAgICBjb25zdCByN2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNyk7XHJcblxyXG5cclxuICAgIHIxYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIyYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXHJcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIzYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNGIuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgcjVhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjZiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG5cclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjZhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdiLmlkLmNvbmNhdChcIlwiKTtcclxuXHJcblxyXG4gICAgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2EuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcbn1cclxuZnVuY3Rpb24gYWNjZXB0c05ldmVyKG46IG5ldmVyKSB7fVxyXG4qLyBcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBEZWJ1ZyBob29rLlxyXG4gKlxyXG4gKiBHaXZlbiBhIHZhbHVlIG9yIHNldCBvZiB2YWx1ZXMsIGVtaXRzIGEgY29uc29sZSBlcnJvciBpZiBhbnkgb2YgdGhlbSBjaGFuZ2UgZnJvbSBvbmUgcmVuZGVyIHRvIHRoZSBuZXh0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eSguLi52YWx1ZXMpIHtcclxuICAgIHVzZUhlbHBlcih2YWx1ZXMubGVuZ3RoLCAwKTtcclxuICAgIHZhbHVlcy5mb3JFYWNoKHVzZUhlbHBlcik7XHJcbiAgICByZXR1cm47XHJcbiAgICBmdW5jdGlvbiB1c2VIZWxwZXIodmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xyXG4gICAgICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKHZhbHVlKTtcclxuICAgICAgICBjb25zdCBzaG93bkVycm9yID0gdXNlUmVmKGZhbHNlKTtcclxuICAgICAgICBpZiAoaGVscGVyVG9FbnN1cmVTdGFiaWxpdHkuY3VycmVudCAhPSB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhpcyBob29rIHJlcXVpcmVzIHNvbWUgb3IgYWxsIG9mIGl0cyBhcmd1bWVudHMgcmVtYWluIHN0YWJsZSBhY3Jvc3MgZWFjaCByZW5kZXI7IHBsZWFzZSBjaGVjayB0aGUgJHtpbmRleH0taW5kZXhlZCB2YWx1ZSB0aGF0IHdhcyBjaGVja2VkLmApO1xyXG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxyXG4gKlxyXG4gKiBUbyBjb21wZW5zYXRlIGZvciB0aGlzLCB5b3Ugc2hvdWxkIHBhc3MgYSBgdXNlRWZmZWN0YC1lc3F1ZSBjYWxsYmFjayB0aGF0IGlzIHJ1biB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcy4gIEp1c3QgbGlrZSBgdXNlRWZmZWN0YCwgdGhpcyBjYWxsYmFjayBjYW4gcmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0J3MgcnVuIGJlZm9yZSB0aGUgdmFsdWUgY2hhbmdlcy4gIElmIHlvdSB3b3VsZCBsaWtlIHRvIHJlLXJlbmRlciB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIChvciwgc2F5LCB3aGVuIHRoZSB2YWx1ZSBtZWV0cyBzb21lIGNyaXRlcmlhKSwgdGhpcyBpcyB3aGVyZSB5b3UnbGwgd2FudCB0byBwdXQgaW4gYSBjYWxsIHRvIGEgYHNldFN0YXRlYCBmdW5jdGlvbi5cclxuICpcclxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcclxuICpcclxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XHJcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxyXG4gKiAzLiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB5b3UgdHJpZ2dlciB0aGUgZWZmZWN0IGZ1bmN0aW9uIFwicmVtb3RlbHlcIiBpbnN0ZWFkIG9mIGl0IHJ1bm5pbmcgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBjYWxsaW5nIGBzZXRTdGF0ZWAgZG9lc24ndCBjYXVzZSBhbnkgcmUtcmVuZGVycywgeW91IGNhbiBkbyB0aGF0IHdpdGhpbiB5b3VyIGBvbkNoYW5nZWAgZnVuY3Rpb24sIGNhbGxlZCB3aGVuZXZlciB0aGUgdmFsdWUgY2hhbmdlcyB2aWEgdGhhdCBgc2V0U3RhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvbi4gIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXHJcbiAqIEBwYXJhbSBnZXRJbml0aWFsVmFsdWUgSWYgcHJvdmlkZWQsIHRoZSBlZmZlY3Qgd2lsbCBiZSBpbnZva2VkIG9uY2Ugd2l0aCB0aGlzIHZhbHVlIG9uIG1vdW50LiBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhc3NpdmVTdGF0ZShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlKSB7XHJcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XHJcbiAgICBjb25zdCB3YXJuaW5nUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGNsZWFudXBDYWxsYmFja1JlZiA9IHVzZVJlZih1bmRlZmluZWQpO1xyXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpO1xyXG4gICAgLy8gU2hhcmVkIGJldHdlZW4gXCJkZXBlbmRlbmN5IGNoYW5nZWRcIiBhbmQgXCJjb21wb25lbnQgdW5tb3VudGVkXCIuXHJcbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IGNsZWFudXBDYWxsYmFjayA9IGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmIChjbGVhbnVwQ2FsbGJhY2spXHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gVGhlcmUgYXJlIGEgY291cGxlIHBsYWNlcyB3aGVyZSB3ZSdkIGxpa2UgdG8gdXNlIG91ciBpbml0aWFsXHJcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cclxuICAgIC8vIFRoaXMgaXMgdGhlIHNoYXJlZCBjb2RlIGZvciB0aGF0LCB1c2VkIG9uIG1vdW50IGFuZCB3aGVuZXZlclxyXG4gICAgLy8gZ2V0VmFsdWUgaXMgY2FsbGVkLlxyXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ICYmIGdldEluaXRpYWxWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGluaXRpYWxWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oaW5pdGlhbFZhbHVlLCB1bmRlZmluZWQpID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeGNlcHRpb25zIGFyZSBpbnRlbnRpb25hbCB0byBhbGxvdyBiYWlsb3V0ICh3aXRob3V0IGV4cG9zaW5nIHRoZSBVbnNldCBzeW1ib2wpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbIC8qIGdldEluaXRpYWxWYWx1ZSBhbmQgb25DaGFuZ2UgaW50ZW50aW9uYWxseSBvbWl0dGVkICovXSk7XHJcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAod2FybmluZ1JlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJEdXJpbmcgb25DaGFuZ2UsIHByZWZlciB1c2luZyB0aGUgKHZhbHVlLCBwcmV2VmFsdWUpIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIGdldFZhbHVlIC0tIGl0J3MgYW1iaWd1b3VzIGFzIHRvIGlmIHlvdSdyZSBhc2tpbmcgZm9yIHRoZSBvbGQgb3IgbmV3IHZhbHVlIGF0IHRoaXMgcG9pbnQgaW4gdGltZSBmb3IgdGhpcyBjb21wb25lbnQuXCIpO1xyXG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcclxuICAgICAgICAvLyAoYW5kIHdlIHdlcmUgZ2l2ZW4gYW4gaW5pdGlhbCB2YWx1ZSB0byB1c2UpXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBpbml0aWFsIHZhbHVlIGluc3RlYWQgb2Ygbm90aGluZy5cclxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXHJcbiAgICAgICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XHJcbiAgICAgICAgcmV0dXJuICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cclxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXHJcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChhcmcpID0+IHtcclxuICAgICAgICBjb25zdCBwcmV2RGVwID0gdmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiBnZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRlcCA9IGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHByZXZEZXApIDogYXJnO1xyXG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgLy8gSW5kaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCB0aGV5IHNob3VsZG4ndCBjYWxsIGdldFZhbHVlIGR1cmluZyBvbkNoYW5nZVxyXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBDYWxsIGFueSByZWdpc3RlcmQgY2xlYW51cCBmdW5jdGlvblxyXG4gICAgICAgICAgICBvblNob3VsZENsZWFuVXAoKTtcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihkZXAsIHByZXZEZXApID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkZXA7XHJcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSB1c2VyIHRvIG5vcm1hbGx5IGNhbGwgZ2V0VmFsdWUgYWdhaW5cclxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xyXG59XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XHJcbi8qKlxyXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxyXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxyXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cclxuICpcclxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudChhcmdzKSB7XHJcbiAgICBjb25zdCBvbkVsZW1lbnRDaGFuZ2UgPSBhcmdzPy5vbkVsZW1lbnRDaGFuZ2U7XHJcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXHJcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25FbGVtZW50Q2hhbmdlLCByZXR1cm5OdWxsKTtcclxuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXHJcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcclxuICAgIGNvbnN0IG15UmVmID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZSlcclxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcclxuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBleHRyYWN0RWxlbWVudFNpemUoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcclxuICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IGdldE9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XHJcbiAgICB1c2VFbnN1cmVTdGFiaWxpdHkoZ2V0T2JzZXJ2ZUJveCwgb25TaXplQ2hhbmdlKTtcclxuICAgIGNvbnN0IFtnZXRTaXplLCBzZXRTaXplXSA9IHVzZVBhc3NpdmVTdGF0ZShvblNpemVDaGFuZ2UsIHJldHVybk51bGwpO1xyXG4gICAgY29uc3QgY3VycmVudE9ic2VydmVCb3ggPSB1c2VSZWYodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IG5lZWRBTmV3T2JzZXJ2ZXIgPSB1c2VDYWxsYmFjaygoZWxlbWVudCwgb2JzZXJ2ZUJveCkgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4geyBoYW5kbGVVcGRhdGUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHsgYm94OiBvYnNlcnZlQm94IH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVVcGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlKSA9PiBuZWVkQU5ld09ic2VydmVyKGUsIGdldE9ic2VydmVCb3g/LigpKSwgW10pIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZ2V0T2JzZXJ2ZUJveCkge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudE9ic2VydmVCb3guY3VycmVudCAhPT0gZ2V0T2JzZXJ2ZUJveCgpKVxyXG4gICAgICAgICAgICAgICAgbmVlZEFOZXdPYnNlcnZlcihnZXRFbGVtZW50KCksIGdldE9ic2VydmVCb3goKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0U2l6ZSxcclxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFbGVtZW50U2l6ZSB9IGZyb20gXCIuL3VzZS1lbGVtZW50LXNpemVcIjtcclxuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXHJcbiAqXHJcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXHJcbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxyXG4gKlxyXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXHJcbiAqXHJcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxyXG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXHJcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXHJcbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxyXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oeyBvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UgfSkge1xyXG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBbZ2V0Q29tcHV0ZWRTdHlsZXMsIHNldENvbXB1dGVkU3R5bGVzXSA9IHVzZVBhc3NpdmVTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHtcclxuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb21wdXRlZFN0eWxlcyh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbXSlcclxuICAgIH0pO1xyXG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcclxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxyXG4gICAgLy9cclxuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXHJcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cclxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IHVzZUNhbGxiYWNrKF8gPT4gb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlPy4oZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKSksIFtdKSB9KTtcclxuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoKTtcclxuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZXMpIHtcclxuICAgICAgICAgICAgbGV0IHcgPSBjb21wdXRlZFN0eWxlcy53cml0aW5nTW9kZTtcclxuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGxldCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xyXG4gICAgICAgICAgICBpZiAodCA9PSBcInVwcmlnaHRcIilcclxuICAgICAgICAgICAgICAgIGQgPSBcImx0clwiO1xyXG4gICAgICAgICAgICByZXR1cm4gKHsgLi4uV3JpdGluZ01vZGVzW3cgfHwgXCJob3Jpem9udGFsLXRiXCJdW2QgfHwgXCJsdHJcIl0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy9jb25zdCBbZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVBhc3NpdmVTdGF0ZTxMb2dpY2FsRGlyZWN0aW9uSW5mbz4ob25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcclxuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImJsb2NrLXN0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwiKVswXV07XHJcbiAgICAgICAgICAgIGNhc2UgXCJibG9jay1lbmRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmJsb2NrRGlyZWN0aW9uID8/IFwidHRiXCIpWzJdXTtcclxuICAgICAgICAgICAgY2FzZSBcImlubGluZS1zdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uaW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCIpWzBdXTtcclxuICAgICAgICAgICAgY2FzZSBcImlubGluZS1lbmRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmlubGluZURpcmVjdGlvbiA/PyBcImx0clwiKVsyXV07XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbFNpZGUgPSB1c2VDYWxsYmFjaygoc2lkZSwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwiYnR0XCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uYmxvY2tEaXJlY3Rpb24gPT09IFwibHRyXCIgPyBcImJsb2NrLXN0YXJ0XCIgOiBcImJsb2NrLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwidG9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYm90dG9tXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJidHRcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24uaW5saW5lRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJpbmxpbmUtc3RhcnRcIiA6IFwiaW5saW5lLWVuZFwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBcImlubGluZS1zdGFydFwiO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgLy8gUG9zaXRpb24gcmVxdWlyZXMgdXMgdG8gc29tZXRpbWVzIHVzZSBvbmUgcHJvcGVydHkgKGxpa2UgYGxlZnRgKVxyXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnRcIjsgcmV0dXJuIFwidG9wXCI7IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJoZWlnaHRcIjsgcmV0dXJuIG51bGw7IH1cclxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYzID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjIpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYyKX1gXSkpO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUVsZW1lbnRTaXplUHJvcHMocHJvcHMpKSwgW10pLFxyXG4gICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sXHJcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpemU6IGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbixcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2lkZSxcclxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbFNpZGVcclxuICAgIH07XHJcbn1cclxuLy8gSGVscGVyIGZvciBleHRyYWN0aW5nIGluZm8gZnJvbSBcImx0clwiLCBcInR0YlwiLCBldGMuXHJcbmNvbnN0IE0gPSB7XHJcbiAgICB0OiBcInRvcFwiLFxyXG4gICAgYjogXCJib3R0b21cIixcclxuICAgIGw6IFwibGVmdFwiLFxyXG4gICAgcjogXCJyaWdodFwiXHJcbn07XHJcbjtcclxuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXHJcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcclxufTtcclxuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xyXG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxyXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcclxufTtcclxuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcclxuICAgIC4uLlZlcnRpY2FsUmxMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcclxufTtcclxuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xyXG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XHJcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XHJcbiAgICAuLi5TaWRld2F5c0x0THRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcclxuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxSbCA9IHtcclxuICAgIGx0cjogVmVydGljYWxSbEx0cixcclxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyID0ge1xyXG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxyXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcclxufTtcclxuY29uc3QgU2lkZXdheXNMciA9IHtcclxuICAgIGx0cjogU2lkZXdheXNMdEx0cixcclxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxyXG59O1xyXG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XHJcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxyXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxyXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxyXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxyXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xyXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcclxuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XHJcbmNvbnN0IGNvbW1pdE5hbWUgPSAoXCJfX2NcIiBpbiBvcHRpb25zID8gXCJfX2NcIiA6IFwiY29tbWl0XCIgaW4gb3B0aW9ucyA/IFwiY29tbWl0XCIgOiBcIl9jb21taXRcIiBpbiBvcHRpb25zID8gXCJfY29tbWl0XCIgOiBcIl9fY1wiKTtcclxuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XHJcbi8vIGlzIGEgcG9zdC1zdXNwZW5zZSBxdWVzdGlvbi5cclxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcclxuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcclxuLy8gc28gYHJlZj17c29tZVN0YWJsZUZ1bmN0aW9ufWAgd29ya3MuXHJcbi8vIFxyXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cclxuY29uc3Qgb3JpZ2luYWxDb21taXQgPSBvcHRpb25zW2NvbW1pdE5hbWVdO1xyXG5jb25zdCBuZXdDb21taXQgPSAodm5vZGUsIGNvbW1pdFF1ZXVlKSA9PiB7XHJcbiAgICBmb3IgKGxldCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcclxuICAgICAgICBpZiAoYXJnc0NoYW5nZWQob2xkSW5wdXRzLCBlZmZlY3RJbmZvLmlucHV0cykpIHtcclxuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcclxuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwID0gZWZmZWN0SW5mby5lZmZlY3QoKTtcclxuICAgICAgICAgICAgcHJldmlvdXNJbnB1dHMuc2V0KGlkLCBlZmZlY3RJbmZvLmlucHV0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9SdW4uY2xlYXIoKTtcclxuICAgIG9yaWdpbmFsQ29tbWl0Py4odm5vZGUsIGNvbW1pdFF1ZXVlKTtcclxufTtcclxub3B0aW9uc1tjb21taXROYW1lXSA9IG5ld0NvbW1pdDtcclxuLyoqXHJcbiAqIFNlbWktcHJpdmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBzdGFibGUgY2FsbGJhY2tzIGV2ZW4gd2l0aGluIGB1c2VMYXlvdXRFZmZlY3RgIGFuZCByZWYgYXNzaWdubWVudC5cclxuICpcclxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcclxuICogd2hpY2ggaGFwcGVucyBiZWZvcmUuXHJcbiAqXHJcbiAqIEBwYXJhbSBlZmZlY3RcclxuICogQHBhcmFtIGlucHV0c1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xyXG4gICAgY29uc3QgW2lkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQoKSk7XHJcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMsIGNsZWFudXA6IG51bGwgfSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRvUnVuLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtpZF0pO1xyXG59XHJcbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcclxuICAgIHJldHVybiAhISghb2xkQXJncyB8fFxyXG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcclxuICAgICAgICBuZXdBcmdzPy5zb21lKChhcmcsIGluZGV4KSA9PiBhcmcgIT09IG9sZEFyZ3NbaW5kZXhdKSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24sIHVzZU1lcmdlZFByb3BzLCB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgc2hvdywgcGhhc2UpIHtcclxuICAgIGlmIChwaGFzZSlcclxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9LSR7cGhhc2V9YDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9YDtcclxufVxyXG5sZXQgZHVtbXk7XHJcbmZ1bmN0aW9uIGZvcmNlUmVmbG93KGUpIHtcclxuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxyXG4gICAgLy8gV2UgbmVlZCBpdCBmb3IgaXRzIGRvY3VtZW50IHJlZmxvdyBzaWRlIGVmZmVjdC5cclxuICAgIGR1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiBlO1xyXG59XHJcbi8qKlxyXG4gKiBBIGhvb2sgdGhhdCBhZGRzICYgcmVtb3ZlcyBjbGFzcyBuYW1lcyBpbiBhIHdheSB0aGF0IGZhY2lsaXRhdGVzIHByb3BlciB0cmFuc2l0aW9ucy5cclxuICpcclxuICogVGhlIGZpcnN0IGFyZ3VtZW50IGNvbnRhaW5zIHRoZSBwcm9wcyByZWxhdGVkIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uLlxyXG4gKlxyXG4gKiBUaGUgc2Vjb25kIGFyZ3VtZW50IGNvbnRhaW5zIGFueSBvdGhlciBwcm9wcyB5b3UgbWlnaHQgd2FudCBtZXJnZWQgaW50byB0aGUgZmluYWwgcHJvZHVjdCAodGhlc2UgYXJlIG5vdCByZWFkIG9yIG1hbmlwdWxhdGVkIG9yIGFueXRoaW5nIC0tIGl0J3MgcHVyZWx5IHNob3J0aGFuZCBhbmQgY2FuIGJlIG9taXR0ZWQgd2l0aCBge31gIGFuZCB0aGVuIHlvdXIgb3duIGB1c2VNZXJnZWRQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBtZWFzdXJlLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBvblRyYW5zaXRpb25VcGRhdGUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgc2hvdywgcmVmIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XHJcbiAgICBjb25zdCBbcGhhc2UsIHNldFBoYXNlXSA9IHVzZVN0YXRlKGFuaW1hdGVPbk1vdW50ID8gXCJpbml0XCIgOiBudWxsKTtcclxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShzaG93ID09IG51bGwgPyBudWxsIDogc2hvdyA/IFwiZW50ZXJcIiA6IFwiZXhpdFwiKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlSGVpZ2h0LCBzZXRTdXJmYWNlSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VYLCBzZXRTdXJmYWNlWF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1dpZHRoLCBzZXRUcmFuc2l0aW9uaW5nV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ0hlaWdodCwgc2V0VHJhbnNpdGlvbmluZ0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1ksIHNldFRyYW5zaXRpb25pbmdZXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvZ2ljYWxEaXJlY3Rpb25JbmZvLCBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogc2V0TG9naWNhbERpcmVjdGlvbkluZm8gfSk7XHJcbiAgICBjb25zdCBvblRyYW5zaXRpb25VcGRhdGVSZWYgPSB1c2VSZWYob25UcmFuc2l0aW9uVXBkYXRlKTtcclxuICAgIGNvbnN0IHBoYXNlUmVmID0gdXNlUmVmKHBoYXNlKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xyXG4gICAgY29uc3QgZHVyYXRpb25SZWYgPSB1c2VSZWYoZHVyYXRpb24pO1xyXG4gICAgY29uc3QgdG9vRWFybHlUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcclxuICAgIGNvbnN0IHRvb0xhdGVUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3Qgb25UcmFuc2l0aW9uRW5kID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldEVsZW1lbnQoKSAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc2V0UGhhc2UoXCJmaW5hbGl6ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudCA9IG9uVHJhbnNpdGlvblVwZGF0ZTsgfSwgW29uVHJhbnNpdGlvblVwZGF0ZV0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgcGhhc2VSZWYuY3VycmVudCA9IHBoYXNlOyB9LCBbcGhhc2VdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkdXJhdGlvblJlZi5jdXJyZW50ID0gZHVyYXRpb247IH0sIFtkdXJhdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIHBoYXNlKVxyXG4gICAgICAgICAgICBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudD8uKGRpcmVjdGlvbiwgcGhhc2UpO1xyXG4gICAgfSwgW2RpcmVjdGlvbiwgcGhhc2VdKTtcclxuICAgIC8vIEV2ZXJ5IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gXCJ0cmFuc2l0aW9uXCIsIGFkZCBvdXIgdHJhbnNpdGlvbiB0aW1lb3V0IHRpbWVvdXRzXHJcbiAgICAvLyB0byBjYXRjaCBhbnkgdGltZSBvblRyYW5zaXRpb25FbmQgZmFpbHMgdG8gcmVwb3J0IGZvciB3aGF0ZXZlciByZWFzb24gdG8gYmUgc2FmZVxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dER1cmF0aW9uID0gZHVyYXRpb25SZWYuY3VycmVudCA/PyAxMDAwO1xyXG4gICAgICAgICAgICB0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xyXG4gICAgICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBpZiAodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3BoYXNlXSk7XHJcbiAgICAvLyBBbnkgdGltZSBcInNob3dcIiBjaGFuZ2VzLCB1cGRhdGUgb3VyIGRpcmVjdGlvbiBhbmQgcGhhc2UuXHJcbiAgICAvLyBJbiBhZGRpdGlvbiwgbWVhc3VyZSB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBpZiByZXF1ZXN0ZWQuXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgc2hvdyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGhhc2UgPSBwaGFzZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAvLyBTd2FwIG91ciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgaWYgKHNob3cpXHJcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJlbnRlclwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9uKFwiZXhpdFwiKTtcclxuICAgICAgICAgICAgc2V0UGhhc2UocHJldmlvdXNQaGFzZSA9PT0gbnVsbCA/IFwiZmluYWxpemVcIiA6IFwiaW5pdFwiKTtcclxuICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1goeCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1koeSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1dpZHRoKHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0KGhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNQaGFzZSA9PT0gXCJmaW5hbGl6ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UncmUgZ29pbmcgdG8gYmUgbWVzc2luZyB3aXRoIHRoZSBhY3R1YWwgZWxlbWVudCdzIGNsYXNzLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSdsbCB3YW50IGFuIGVhc3kgd2F5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja3VwID0gZWxlbWVudC5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzQmFzZX0tbWVhc3VyZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsIGAke2NsYXNzQmFzZX0tZXhpdGAsIGAke2NsYXNzQmFzZX0tZXhpdC1pbml0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWV4aXQtZmluYWxpemVgKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaXplV2l0aG91dFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZVdpdGhvdXRUcmFuc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VYKHggKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VZKHkgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VXaWR0aCh3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZUhlaWdodChoZWlnaHQgKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYmFja3VwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nob3csIG1lYXN1cmUsIGNsYXNzQmFzZV0pO1xyXG4gICAgLy8gQW55IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gaW5pdCwgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBzY3JlZW4gaXMgcGFpbnRlZCxcclxuICAgIC8vIGNoYW5nZSB0aGUgcGhhc2UgdG8gXCJ0cmFuc2l0aW9uXCIgYW5kIHJlLXJlbmRlciAoKS5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgc2V0IG91ciB0cmFuc2l0aW9uIHN0eWxlLlxyXG4gICAgICAgICAgICAgICAgc2V0UGhhc2UoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwaGFzZSwgbWVhc3VyZV0pO1xyXG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmlubGluZURpcmVjdGlvbjtcclxuICAgIGNvbnN0IGJsb2NrRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmJsb2NrRGlyZWN0aW9uO1xyXG4gICAgY29uc3Qgd3JpdGluZ01vZGVJc0hvcml6b250YWwgPSAoaW5saW5lRGlyZWN0aW9uID09IFwicnRsXCIgfHwgaW5saW5lRGlyZWN0aW9uID09IFwibHRyXCIpO1xyXG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xyXG4gICAgY29uc3Qgc3VyZmFjZUJsb2NrSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VZIDogc3VyZmFjZVg7XHJcbiAgICBjb25zdCBzdXJmYWNlSW5saW5lU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gc3VyZmFjZVdpZHRoIDogc3VyZmFjZUhlaWdodDtcclxuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nSW5saW5lSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdYIDogdHJhbnNpdGlvbmluZ1k7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ1kgOiB0cmFuc2l0aW9uaW5nWDtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ0hlaWdodCA6IHRyYW5zaXRpb25pbmdXaWR0aDtcclxuICAgIGxldCBhbG1vc3REb25lID0gdXNlUmVmRWxlbWVudFByb3BzKHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyh7XHJcbiAgICAgICAgcmVmLFxyXG4gICAgICAgIHN0eWxlOiByZW1vdmVFbXB0eSh7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZHVyYXRpb25gXTogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS14YF06IHN1cmZhY2VYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UteWBdOiBzdXJmYWNlWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXdpZHRoYF06IHN1cmZhY2VXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWhlaWdodGBdOiBzdXJmYWNlSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLWluc2V0YF06IHN1cmZhY2VJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWJsb2NrLWluc2V0YF06IHN1cmZhY2VCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLXNpemVgXTogc3VyZmFjZUlubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1zaXplYF06IHN1cmZhY2VCbG9ja1NpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy14YF06IHRyYW5zaXRpb25pbmdYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteWBdOiB0cmFuc2l0aW9uaW5nWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXdpZHRoYF06IHRyYW5zaXRpb25pbmdXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWhlaWdodGBdOiB0cmFuc2l0aW9uaW5nSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLWluc2V0YF06IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLWluc2V0YF06IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLXNpemVgXTogdHJhbnNpdGlvbmluZ0lubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1zaXplYF06IHRyYW5zaXRpb25pbmdCbG9ja1NpemVcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblRyYW5zaXRpb25FbmQsXHJcbiAgICAgICAgLi4uKHsgXCJhcmlhLWhpZGRlblwiOiBzaG93ID8gdW5kZWZpbmVkIDogXCJ0cnVlXCIgfSksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGRpcmVjdGlvbiAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24pLCBkaXJlY3Rpb24gJiYgcGhhc2UgJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uLCBwaGFzZSksIGV4aXRWaXNpYmlsaXR5ID09IFwicmVtb3ZlZFwiICYmIGAke2NsYXNzQmFzZX0tcmVtb3ZlZC1vbi1leGl0YCwgZXhpdFZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIgJiYgYCR7Y2xhc3NCYXNlfS12aXNpYmxlLW9uLWV4aXRgLCBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLCBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YCksXHJcbiAgICB9KSk7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbG1vc3REb25lLCBvdGhlclByb3BzKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVFbXB0eShvYmopIHtcclxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtfLCB2XSkgPT4gdiAhPSBudWxsKSk7XHJcbn1cclxuLyoqXHJcbiAqIEEgY29tcG9uZW50IHRoYXQgKndyYXBzIGFuIEhUTUxFbGVtZW50IG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCogYW5kIGFsbG93cyBpdCB0byB1c2UgQ1NTIHRvIHRyYW5zaXRpb24gaW4vb3V0LlxyXG4gKiBDb21iaW5lcyB0aGUgcHJvcHMgcGFzc2VkIHRvIGl0LCB0aGUgcHJvcHMgaXRzIGNoaWxkIGhhcywgYW5kIHRoZSBwcm9wcyBuZWVkZWQgZm9yIHRoZSBDU1MgdHJhbnNpdGlvbiwgYW5kIHBhc3NlcyB0aGVtXHJcbiAqIGFsbCB0byB0aGUgY2hpbGQgZWxlbWVudCB5b3UgcHJvdmlkZS5cclxuICpcclxuICogVGhpcyBpcyB0aGUgbW9zdCBnZW5lcmFsIGNvbXBvbmVudCB0aGF0IG90aGVycyB1c2UgYXMgYSBiYXNlLiBCeSBkZWZhdWx0LCB0aGlzIGNvbXBvbmVudCBieSBpdHNlbGYgZG9lc24ndCBhY3R1YWxseSBhZGQgYW55IENTUyBjbGFzc2VzIHRoYXQgYW5pbWF0ZSBhbnl0aGluZyAobGlrZSBvcGFjaXR5LCBmb3IgZXhhbXBsZSkuXHJcbiAqIEl0IGFkZHMgY2xhc3NlcyBsaWtlIGB0cmFuc2l0aW9uLWVudGVyLWZpbmFsaXplYCwgYnV0IHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgZS5nLiBgZmFkZWAgY2xhc3MgdGhhdCByZWFjdHMgdG8gaXQuXHJcbiAqXHJcbiAqIFVzZSB0aGlzIGlmIHRoZSBvdGhlciwgbW9yZSBzcGVjaWFsaXplZCBUcmFuc2l0aW9uIGNvbXBvbmVudHMgZG9uJ3QgZml0IHlvdXIgbmVlZHMuXHJcbiAqXHJcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30gey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT48ZGl2PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcclxuICogQGV4YW1wbGUgYDxUcmFuc2l0aW9uYWJsZSBzaG93PXtzaG93fT48ZGl2IHsuLi51c2VDcmVhdGVGYWRlUHJvcHMoLi4uKX0+e2NoaWxkcmVufTwvZGl2PjwvVHJhbnNpdGlvbmFibGU+YFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuOiBjaGlsZCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIHNob3csIG9uVHJhbnNpdGlvblVwZGF0ZSwgYW5pbWF0ZU9uTW91bnQsIGNoaWxkTW91bnRCZWhhdmlvciwgLi4ucHJvcHMgfSwgcikge1xyXG4gICAgY29uc3QgW2hhc1Nob3duT25jZSwgc2V0SGFzU2hvd25PbmNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3VsZFNldEhhc1Nob3duT25jZSA9IChoYXNTaG93bk9uY2UgPT09IGZhbHNlICYmIGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgc2hvdyA9PT0gdHJ1ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2hvdWxkU2V0SGFzU2hvd25PbmNlKVxyXG4gICAgICAgIHNldEhhc1Nob3duT25jZSh0cnVlKTsgfSwgW3Nob3VsZFNldEhhc1Nob3duT25jZV0pO1xyXG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC13aGVuLXNob3dpbmdcIiAmJiAhc2hvdylcclxuICAgICAgICBjaGlsZCA9IGgoXCJkaXZcIiwgbnVsbCk7XHJcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiAhc2hvdyAmJiBoYXNTaG93bk9uY2UgPT09IGZhbHNlKVxyXG4gICAgICAgIGNoaWxkID0gaChcImRpdlwiLCBudWxsKTtcclxuICAgIGlmICghY2hpbGRJc1ZOb2RlKGNoaWxkKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgVHJhbnNpdGlvbmFibGUgY29tcG9uZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBjb21wb25lbnQgY2hpbGQgKGUuZy4gYSA8ZGl2PiwgYnV0IG5vdCBcXFwiYSBzdHJpbmdcXFwiKS5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgbWVhc3VyZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG9uVHJhbnNpdGlvblVwZGF0ZSwgcmVmOiByLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wcyk7XHJcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcygpKHRyYW5zaXRpb25Qcm9wcywgeyAuLi5jaGlsZC5wcm9wcywgcmVmOiBjaGlsZC5yZWYgfSk7XHJcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xyXG59KTtcclxuZnVuY3Rpb24gY2hpbGRJc1ZOb2RlKGNoaWxkKSB7XHJcbiAgICBpZiAoIWNoaWxkKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2hpbGQgIT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gKFwicHJvcHNcIiBpbiBjaGlsZCk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNpdGlvbmFibGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgQ2xpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtjbGFzc0Jhc2V9LWNsaXBgKSxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXHJcbiAgICAgICAgfSxcclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuZXhwb3J0IGNvbnN0IENsaXAgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mYWRlYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcclxuICAgICAgICB9XHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXHJcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cclxuICogSXQncyBnZW5lcmFsbHkgcmVjb21tZW5kZWQgdG8gZWl0aGVyIHVzZSB0aGUgY29tcG9uZW50cyB0aGF0IGluY2x1ZGUgYSBjb21iaW5lZCBmYWRlIGVmZmVjdCxcclxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IENsaXAgfSBmcm9tIFwiLi9jbGlwXCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbjtcclxuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChDbGlwLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICpcclxuICogSU1QT1JUQU5UOiBJZiB1c2VkIG91dHNpZGUgb2YgYSBgPENvbGxhcHNlIC8+YCwgeW91IG11c3QgaW5jbHVkZSB0aGUgYG1lYXN1cmVgIHByb3Agb24gdGhlIGA8VHJhbnNpdGlvbmFibGU+YCB0aGF0IHlvdSB1c2UuXHJcbiAqXHJcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NCYXNlLFxyXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWNvbGxhcHNlYCxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXHJcbiAqXHJcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXHJcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXHJcbiAqIGFsdGVybmF0aXZlLCBsaWtlIGA8Q2xpcD5gLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCIuL2NvbGxhcHNlXCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBDb2xsYXBzZSBhbmQgRmFkZSBlZmZlY3RzLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYENvbGxhcHNlYCBgRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChDb2xsYXBzZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihzbGlkZVRhcmdldElubGluZSA/PyAxKTtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRJbmxpbmUpXHJcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBzbGlkZVRhcmdldElubGluZTsgfSwgW3NsaWRlVGFyZ2V0SW5saW5lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRCbG9jaylcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gc2xpZGVUYXJnZXRCbG9jazsgfSwgW3NsaWRlVGFyZ2V0QmxvY2tdKTtcclxuICAgIGlmIChzbGlkZVRhcmdldElubGluZSA9PSAwKVxyXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XHJcbiAgICBpZiAoc2xpZGVUYXJnZXRCbG9jayA9PSAwKVxyXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXHJcbiAgICAgICAgY2xhc3NCYXNlLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc2xpZGUtdGFyZ2V0LWlubGluZWBdOiBgJHsoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMCl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXHJcbiAqXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKlxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxyXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIGBzbGlkZUlubGluZT17KGluZGV4IC0gc2VsZWN0ZWRJbmRleCkgLyAxMH1gIHdvdWxkIG1ha2UgdGhlIGVsZW1lbnQgbG9vayBsaWtlIGl0IGZhZGVzIG91dCBiZWZvcmUgaXQgdHJhdmVscyB0byBpdHMgdGFyZ2V0IGRlc3RpbmF0aW9uLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoU2xpZGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gKHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS16b29tYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1pbmxpbmVgXTogYCR7KHpvb21PcmlnaW5JbmxpbmUgPz8gem9vbU9yaWdpbiA/PyAwLjUpfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWJsb2NrYF06IGAkeyh6b29tTWluQmxvY2sgPz8gem9vbU1pbiA/PyAwKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LCBvdGhlclByb3BzKSk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFpvb20gZWZmZWN0LlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFpvb20gfSBmcm9tIFwiLi96b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBab29tIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYW4gaWRlYWwgdGltZSB0byB1c2UgdGhlIG1pbmltdW0gc2l6ZSBab29tIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlWm9vbVByb3BzIH0gZnJvbSBcIi4vem9vbVwiO1xyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIFpvb20gZWZmZWN0cy5cclxuICpcclxuICogUHJvYmFibHkgYmVzdCBjb21iaW5lZCB3aXRoIGB1c2VDcmVhdGVGYWRlUHJvcHNgIChvciBqdXN0IHVzaW5nIGEgYFNsaWRlWm9vbUZhZGVgPykuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVGYWRlWm9vbWAgYFpvb21gIGBGYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbSh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyBTbGlkZVpvb20gfSBmcm9tIFwiLi9zbGlkZS16b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggWm9vbSwgU2xpZGUsIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IHNob3J0aGFuZCBmb3Igc29tZSBwcm9wIGNyZWF0aW9uIGFuZCBwcm9wIG1lcmdpbmcgZnVuY3Rpb25zLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFNsaWRlYCBgWm9vbWAgYEZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVab29tRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZVpvb20sIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtem9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBGbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDE4MCk7XHJcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVJbmxpbmUpXHJcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBmbGlwQW5nbGVJbmxpbmU7IH0sIFtmbGlwQW5nbGVJbmxpbmVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVCbG9jaylcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gZmxpcEFuZ2xlQmxvY2s7IH0sIFtmbGlwQW5nbGVCbG9ja10pO1xyXG4gICAgaWYgKGZsaXBBbmdsZUlubGluZSA9PSAwKVxyXG4gICAgICAgIGZsaXBBbmdsZUlubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xyXG4gICAgaWYgKGZsaXBBbmdsZUJsb2NrID09IDApXHJcbiAgICAgICAgZmxpcEFuZ2xlQmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xyXG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xyXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mbGlwYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWlubGluZWBdOiBgJHsoZmxpcEFuZ2xlSW5saW5lID8/IDApfWRlZ2AsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1wZXJzcGVjdGl2ZWBdOiBgJHsocGVyc3BlY3RpdmUgPz8gODAwKX1weGBcclxuICAgICAgICB9XHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXHJcbiAqXHJcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXHJcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cclxuICpcclxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcclxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcclxuICogKGBmbGlwSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBpbmxpbmUsIGNsYXNzQmFzZSB9LCBvdGhlclByb3BzKSB7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZSA/PyBcInRyYW5zaXRpb25cIn0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxyXG4gKlxyXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYHNob3dgIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXHJcbiAqXHJcbiAqIExpa2UgYDxUcmFuc2l0aW9uYWJsZT5gLCAqdGhpcyB3cmFwcyBhbiBIVE1MRWxlbWVudCAob3Igb3RoZXIgcmVmLWZvcndhcmRpbmcgY29tcG9uZW50KSouIFRoaXMgd2lsbCBiZSB5b3VyIGNvbnRhaW5lciB0aGF0IGhvbGRzIGVhY2ggYDxUcmFuc2l0aW9uYWJsZT5gIChvciBjb21wb25lbnQgdGhhdCB1c2VzIGl0KS4gU3RyaWN0bHkgc3BlYWtpbmcgaXQgY291bGQgYmUgYW55dGhpbmcsIG5vdCBhIGA8VHJhbnNpdGlvbmFibGU+YCwgYnV0IGlmIGl0IGRvZXNudCd0IHRyYW5zaXRpb24gb3V0IHRoZW4gaXQncyBqdXN0IGdvaW5nIHRvIGJlIGhhbmdpbmcgYXJvdW5kIDEwMCUgb2YgdGhlIHRpbWUuXHJcbiAqXHJcbiAqIExvbmcgd2F5IG9mIHNheWluZywgaWYgeW91IGdldCBhIGNyeXB0aWMgZXJyb3Igd2l0aCB0aGlzIGNvbXBvbmVudCwgbWFrZSBzdXJlIGl0IGhhcyBhIHNpbmdsZSBgPGRpdj5gIGNoaWxkIG9yIHNvbWV0aGluZy5cclxuICogQHBhcmFtIHBhcmFtMFxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZSh7IGNoaWxkcmVuLCBjbGFzc0Jhc2UsIGlubGluZSwgLi4ucCB9LCByZWYpIHtcclxuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKCkodHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XHJcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xyXG59KTtcclxuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXHJcbi8vIE5vdCBwZXJmZWN0LCBidXQgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUuIGBpbmxpbmVgIGlzIGZvciBwZXJmZWN0LlxyXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xyXG4gICAgXCJhXCIsXHJcbiAgICBcImFiYnJcIixcclxuICAgIFwiYWNyb255bVwiLFxyXG4gICAgXCJhdWRpb1wiLFxyXG4gICAgXCJiXCIsXHJcbiAgICBcImJkaVwiLFxyXG4gICAgXCJiZG9cIixcclxuICAgIFwiYmlnXCIsXHJcbiAgICBcImJyXCIsXHJcbiAgICBcImJ1dHRvblwiLFxyXG4gICAgXCJjYW52YXNcIixcclxuICAgIFwiY2l0ZVwiLFxyXG4gICAgXCJjb2RlXCIsXHJcbiAgICBcImRhdGFcIixcclxuICAgIFwiZGF0YWxpc3RcIixcclxuICAgIFwiZGVsXCIsXHJcbiAgICBcImRmblwiLFxyXG4gICAgXCJlbVwiLFxyXG4gICAgXCJlbWJlZFwiLFxyXG4gICAgXCJpXCIsXHJcbiAgICBcImlmcmFtZVwiLFxyXG4gICAgXCJpbWdcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwiaW5zXCIsXHJcbiAgICBcImtiZFwiLFxyXG4gICAgXCJsYWJlbFwiLFxyXG4gICAgXCJtYXBcIixcclxuICAgIFwibWFya1wiLFxyXG4gICAgXCJtZXRlclwiLFxyXG4gICAgXCJub3NjcmlwdFwiLFxyXG4gICAgXCJvYmplY3RcIixcclxuICAgIFwib3V0cHV0XCIsXHJcbiAgICBcInBpY3R1cmVcIixcclxuICAgIFwicHJvZ3Jlc3NcIixcclxuICAgIFwicVwiLFxyXG4gICAgXCJydWJ5XCIsXHJcbiAgICBcInNcIixcclxuICAgIFwic2FtcFwiLFxyXG4gICAgXCJzY3JpcHRcIixcclxuICAgIFwic2VsZWN0XCIsXHJcbiAgICBcInNsb3RcIixcclxuICAgIFwic21hbGxcIixcclxuICAgIFwic3BhblwiLFxyXG4gICAgXCJzdHJvbmdcIixcclxuICAgIFwic3ViXCIsXHJcbiAgICBcInN1cFwiLFxyXG4gICAgXCJzdmdcIixcclxuICAgIFwidGVtcGxhdGVcIixcclxuICAgIFwidGV4dGFyZWFcIixcclxuICAgIFwidGltZVwiLFxyXG4gICAgXCJ1XCIsXHJcbiAgICBcInR0XCIsXHJcbiAgICBcInZhclwiLFxyXG4gICAgXCJ2aWRlb1wiLFxyXG4gICAgXCJ3YnJcIlxyXG5dKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dhcHBhYmxlLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJob29rcyIsImxlbmd0aCIsInB1c2giLCJ1c2VTdGF0ZSIsImluaXRpYWxTdGF0ZSIsInVzZVJlZHVjZXIiLCJpbnZva2VPclJldHVybiIsInJlZHVjZXIiLCJpbml0IiwiaG9va1N0YXRlIiwiX3JlZHVjZXIiLCJ1bmRlZmluZWQiLCJuZXh0VmFsdWUiLCJhY3Rpb24iLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsImNhbGxiYWNrIiwiYXJncyIsInN0YXRlIiwiYXJnc0NoYW5nZWQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJpbml0aWFsVmFsdWUiLCJ1c2VNZW1vIiwiY3VycmVudCIsImZhY3RvcnkiLCJ1c2VDYWxsYmFjayIsImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCJjb21wb25lbnQiLCJzb3J0IiwiYSIsImIiLCJwb3AiLCJmb3JFYWNoIiwiaW52b2tlQ2xlYW51cCIsImludm9rZUVmZmVjdCIsImUiLCJ2bm9kZSIsImMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWYiLCJkb25lIiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsIkhBU19SQUYiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhhc0Vycm9yZWQiLCJzIiwiaG9vayIsImNvbXAiLCJjbGVhbnVwIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiYXNzaWduIiwib2JqIiwicHJvcHMiLCJpIiwic2hhbGxvd0RpZmZlcnMiLCJmb3J3YXJkUmVmIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwidG9WYWwiLCJtaXgiLCJrIiwieSIsInN0ciIsIkFycmF5IiwiaXNBcnJheSIsInRtcCIsIngiLCJhcmd1bWVudHMiLCJyZXR1cm5OdWxsIiwiZ2xvYmFsIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHlwZUVycm9yIiwid2luZG93Iiwic2xpY2UiLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiam9pbiIsIkluZXJ0Um9vdCIsInJvb3RFbGVtZW50IiwiaW5lcnRNYW5hZ2VyIiwiX2luZXJ0TWFuYWdlciIsIl9yb290RWxlbWVudCIsIl9tYW5hZ2VkTm9kZXMiLCJTZXQiLCJoYXNBdHRyaWJ1dGUiLCJfc2F2ZWRBcmlhSGlkZGVuIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUiLCJfb2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiX29uTXV0YXRpb24iLCJiaW5kIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwidmFsdWUiLCJkZXN0cnVjdG9yIiwiZGlzY29ubmVjdCIsInJlbW92ZUF0dHJpYnV0ZSIsImluZXJ0Tm9kZSIsIl91bm1hbmFnZU5vZGUiLCJub2RlIiwic3RhcnROb2RlIiwiX3RoaXMyIiwiY29tcG9zZWRUcmVlV2FsayIsIl92aXNpdE5vZGUiLCJhY3RpdmVFbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5IiwiY29udGFpbnMiLCJyb290Iiwibm9kZVR5cGUiLCJOb2RlIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsInBhcmVudE5vZGUiLCJibHVyIiwiZm9jdXMiLCJFTEVNRU5UX05PREUiLCJlbGVtZW50IiwiX2Fkb3B0SW5lcnRSb290IiwiY2FsbCIsIl9tYW5hZ2VOb2RlIiwicmVnaXN0ZXIiLCJhZGQiLCJkZXJlZ2lzdGVyIiwiX3VubWFuYWdlU3VidHJlZSIsIl90aGlzMyIsImluZXJ0U3Vicm9vdCIsImdldEluZXJ0Um9vdCIsInNldEluZXJ0IiwibWFuYWdlZE5vZGVzIiwic2F2ZWRJbmVydE5vZGUiLCJyZWNvcmRzIiwic2VsZiIsInJlY29yZCIsImFkZGVkTm9kZXMiLCJyZW1vdmVkTm9kZXMiLCJhdHRyaWJ1dGVOYW1lIiwibWFuYWdlZE5vZGUiLCJnZXQiLCJzZXQiLCJhcmlhSGlkZGVuIiwiSW5lcnROb2RlIiwiaW5lcnRSb290IiwiX25vZGUiLCJfb3ZlcnJvZGVGb2N1c01ldGhvZCIsIl9pbmVydFJvb3RzIiwiX3NhdmVkVGFiSW5kZXgiLCJfZGVzdHJveWVkIiwiZW5zdXJlVW50YWJiYWJsZSIsIl90aHJvd0lmRGVzdHJveWVkIiwiZGVzdHJveWVkIiwiRXJyb3IiLCJ0YWJJbmRleCIsImhhc1NhdmVkVGFiSW5kZXgiLCJhZGRJbmVydFJvb3QiLCJyZW1vdmVJbmVydFJvb3QiLCJzaXplIiwiSW5lcnRNYW5hZ2VyIiwiX2RvY3VtZW50IiwiTWFwIiwiX3dhdGNoRm9ySW5lcnQiLCJhZGRJbmVydFN0eWxlIiwiaGVhZCIsImRvY3VtZW50RWxlbWVudCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaGFzT3duUHJvcGVydHkiLCJoIiwiY2xvbmVFbGVtZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7T0FBTztFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsSUFBTUEsR0FBQUEsR0FBWSxFQUFsQjtFQUFBLElBQ01DLEdBQUFBLEdBQVksRUFEbEI7RUFBQSxJQUVNQyxHQUFBQSxHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxXQUFXLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxXQUFXLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFdEksTUFBTSxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7TUFDckMsTUFBTSxFQUFFLEdBQUcsUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7TUFFMUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFTLEtBQUt3TSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUk7VUFBRUEsYUFBSyxT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TSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDeEksTUFBTSxlQUFlLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDdEksTUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxjQUFjLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxXQUFXLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxXQUFXLEdBQUdBLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFcEksTUFBTSxDQUFDLEdBQUcsUUFBUSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUM7TUFDL0Ms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
