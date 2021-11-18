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

  function d(n) {
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
      if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d, {
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
      M$1(g[h], g[++h], g[++h]);
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
      "children" === r || "key" === r || r in l || H(n, r, null, u[r], i);
    }

    for (r in l) {
      t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);
    }
  }

  function $$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
  }

  function H(n, l, u, i, t) {
    var r;

    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) {
          u && l in u || $$1(n.style, l, "");
        }
        if (u) for (l in u) {
          i && u[l] === i[l] || $$1(n.style, l, u[l]);
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
        h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
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
      if ((s = o[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
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
      c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
    }
    return l;
  }

  function M$1(n, u, i) {
    try {
      "function" == typeof n ? n(u) : n.current = u;
    } catch (n) {
      l$1.__e(n, i);
    }
  }

  function N(n, u, i) {
    var t, r;

    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$1(t, null, u)), null != (t = n.__c)) {
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
    l$1.__ && l$1.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!r && t || i).__k = v$1(d, null, [u]), o || e$1, e$1, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z$1(f, u);
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
  }, _.prototype.render = d, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0;

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
    return o = 5, A$1(function () {
      return {
        current: n
      };
    }, []);
  }

  function A$1(n, u) {
    var r = m(t++, 7);
    return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
  }

  function F(n, t) {
    return o = 8, A$1(function () {
      return n;
    }, t);
  }

  function x$1() {
    i.forEach(function (t) {
      if (t.__P) try {
        t.__H.__h.forEach(g), t.__H.__h.forEach(j$1), t.__H.__h = [];
      } catch (u) {
        t.__H.__h = [], l$1.__e(u, t.__v);
      }
    }), i = [];
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
    var u = t.__c;
    if (u && u.__H) try {
      u.__H.__.forEach(g);
    } catch (t) {
      l$1.__e(t, u.__v);
    }
  };
  var b = "function" == typeof requestAnimationFrame;

  function g(n) {
    var t = u;
    "function" == typeof n.__c && n.__c(), u = t;
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

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
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

  function M() {
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

    var u = t.__e && v$1(d, null, n.fallback);
    return u && (u.__h = null), [v$1(d, null, t.__e ? null : n.children), u];
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

  (M.prototype = new _()).__e = function (n) {
    var t = this,
        e = U(t.__v),
        r = t.o.get(n);
    return r[0]++, function (u) {
      var o = function () {
        t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
      };

      e ? e(o) : o();
    };
  }, M.prototype.render = function (n) {
    this.u = null, this.o = new Map();
    var t = A$2(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

    for (var e = t.length; e--;) {
      this.o.set(t[e], this.u = [1, 0, this.u]);
    }

    return n.children;
  }, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
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
  var Z = l$1.event;

  function Y() {}

  function $() {
    return this.cancelBubble;
  }

  function q() {
    return this.defaultPrevented;
  }

  l$1.event = function (n) {
    return Z && (n = Z(n)), n.persist = Y, n.isPropagationStopped = $, n.isDefaultPrevented = q, n.nativeEvent = n;
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
        V && "children" === o && "noscript" === t || "value" === o && "defaultValue" in e && null == i || ("defaultValue" === o && "value" in e && null == e.value ? o = "value" : "download" === o && !0 === i ? i = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !z(e.type) ? o = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o) ? o = o.toLowerCase() : u && P.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i && (i = void 0), r[o] = i);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = -1 != r.value.indexOf(n.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
      })), n.props = r;
    }

    t && e.class != e.className && (J.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", J)), n.$$typeof = j, K && K(n);
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
      var ret = v$1(d, {}, lhs, rhs);
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
      var combined = F(current => {
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
   */


  function generateRandomId(prefix) {
    return "".concat(prefix !== null && prefix !== void 0 ? prefix : "id-").concat(random64Bits().map(n => base64(n)).join(""));
  }

  var previousInputs = new Map();
  var toRun = new Map(); // TODO: Whether this goes in options.diffed or options._commit
  // is a post-suspense question.
  // Right now, using options._commit has the problem of running
  // *after* refs are applied, but we need to come before even that
  // so `ref={someStableFunction}` works.
  // 
  // Also it's private.

  var originalDiffed = l$1.diffed;

  l$1.diffed = function (vnode) {
    for (var [id, {
      effect,
      inputs
    }] of toRun) {
      var oldInputs = previousInputs.get(id);

      if (argsChanged(oldInputs, inputs)) {
        effect();
        previousInputs.set(id, inputs);
      }
    }

    toRun.clear();

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    originalDiffed === null || originalDiffed === void 0 ? void 0 : originalDiffed(vnode, ...args);
  };
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
    var [id] = l(() => generateRandomId());
    toRun.set(id, {
      effect,
      inputs
    });
    y(() => {
      return () => {
        toRun.delete(id);
        previousInputs.delete(id);
      };
    }, [id]);
  }

  function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs || oldArgs.length !== (newArgs === null || newArgs === void 0 ? void 0 : newArgs.length) || newArgs !== null && newArgs !== void 0 && newArgs.some((arg, index) => arg !== oldArgs[index]));
  }

  var Unset$1 = Symbol("unset");
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
    var ref = s(Unset$1);
    useBeforeLayoutEffect(() => {
      ref.current = value;
    }, [value]);
    return F(() => {
      if (ref.current === Unset$1) {
        throw new Error('Value retrieved from useStableGetter() cannot be called during render.');
      }

      return ref.current;
    }, []);
  }

  /**
   * Alternate useCallback() which always returns the same (wrapped) function reference
   * so that it can be excluded from the dependency arrays of `useEffect` and friends.
   *
   * Do not use during the render phase!  `useLayoutEffect` is fine though.
   */

  function useStableCallback(fn) {
    var currentCallbackGetter = useStableGetter(fn);
    return F(function () {
      return currentCallbackGetter()(...arguments);
    }, []);
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
   * @param onChange The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function
   * @param initialValue If provided, the effect will be invoked once with this value on mount.
   * @returns
   */

  function usePassiveState(onChange, getInitialValue) {
    var valueRef = s(Unset);
    var warningRef = s(false);
    var cleanupCallbackRef = s(undefined); // Shared between "dependency changed" and "component unmounted".

    var onShouldCleanUp = F(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []); // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.

    var tryEnsureValue = useStableCallback(() => {
      if (valueRef.current === Unset && getInitialValue != undefined) {
        try {
          var _onChange;

          var initialValue = getInitialValue();
          valueRef.current = initialValue;
          cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange !== void 0 ? _onChange : undefined;
        } catch (ex) {// Exceptions are intentional to allow bailout (without exposing the Unset symbol)
        }
      }
    });
    var getValue = useStableCallback(() => {
      if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component."); // The first time we call getValue, if we haven't been given a value yet,
      // (and we were given an initial value to use)
      // return the initial value instead of nothing.

      if (valueRef.current === Unset) tryEnsureValue();
      return valueRef.current === Unset ? undefined : valueRef.current;
    });
    h(() => {
      // Make sure we've run our effect at least once on mount.
      // (If we have an initial value, of course)
      tryEnsureValue();
    }, []); // The actual code the user calls to (possibly) run a new effect.

    var setValue = useStableCallback(arg => {
      var prevDep = getValue();
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
    });
    return [getValue, setValue];
  }
  var Unset = Symbol();

  /**
   * Allows accessing the element a ref references as soon as it does so.
   * *This hook itself returns a hook*--useRefElementProps modifies the props that you were going to pass to an HTMLElement,
   * adding a RefCallback and merging it with any existing ref that existed on the props.
   *
   * Don't forget to provide the Element as the type argument!
   *
   * @returns The element, and the sub-hook that makes it retrievable.
   */

  function useRefElement(_ref) {
    var {
      onElementChange
    } = _ref;
    // Let us store the actual (reference to) the element we capture
    var [getElement, setElement] = usePassiveState(onElementChange, () => null); // Create a RefCallback that's fired when mounted 
    // and that notifies us of our element when we have it

    var myRef = F(e => {
      if (e) setElement(() => e);
    }, []);
    var useRefElementProps = F(props => useMergedProps()({
      ref: myRef
    }, props), []); // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element

    return {
      useRefElementProps,
      getElement
    };
  }

  function useElementSize(_ref) {
    var {
      observeBox,
      onSizeChange
    } = _ref;
    var [getSize, setSize] = usePassiveState(onSizeChange);
    var currentObserveBox = s(observeBox);

    var needANewObserver = (element, observeBox) => {
      if (element) {
        var handleUpdate = () => {
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
        };

        if (!("ResizeObserver" in window)) {
          document.addEventListener("resize", handleUpdate, {
            passive: true
          });
          return () => document.removeEventListener("resize", handleUpdate);
        } else {
          var observer = new ResizeObserver(entries => {
            handleUpdate();
          });
          observer.observe(element, {
            box: observeBox
          });
          currentObserveBox.current = observeBox;
          return () => observer.disconnect();
        }
      }
    };

    var {
      getElement,
      useRefElementProps
    } = useRefElement({
      onElementChange: e => needANewObserver(e, observeBox)
    });
    y(() => {
      if (currentObserveBox.current !== observeBox) needANewObserver(getElement(), observeBox);
    }, [observeBox]);
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
    var updateLogicalInfo = F(element => {
      var _element$parentElemen, _d;

      console.assert(element.isConnected);
      element = (_element$parentElemen = element.parentElement) !== null && _element$parentElemen !== void 0 ? _element$parentElemen : element;
      var computedStyles = window.getComputedStyle(element);
      var w = computedStyles.writingMode;
      var d = computedStyles.direction;
      var t = computedStyles.textOrientation;
      if (t == "upright") d = "ltr";
      setLogicalDirectionInfo(_objectSpread2({}, WritingModes[w !== null && w !== void 0 ? w : "horizontal-tb"][(_d = d) !== null && _d !== void 0 ? _d : "ltr"]));
    }, []);
    var {
      getElement,
      useRefElementProps
    } = useRefElement({
      onElementChange: element => {
        if (element) {
          // The element hasn't actually been hooked up to the document yet.
          // Wait a moment so that we can properly use `getComputedStyle`
          // (since we only read it on mount)
          queueMicrotask(() => {
            updateLogicalInfo(element);
          });
        }
      }
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
      onSizeChange: _ => updateLogicalInfo(getElement())
    });
    var [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState(onLogicalDirectionChange);
    var convertToLogicalOrientation = F((elementOrientation, direction) => {
      var _direction, _direction2;

      (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
      if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, []);
    var convertToPhysicalOrientation = F((elementOrientation, direction) => {
      var _direction3;

      (_direction3 = direction) !== null && _direction3 !== void 0 ? _direction3 : direction = getLogicalDirectionInfo();

      if (elementOrientation == "inline") {
        var _direction4;

        if (((_direction4 = direction) === null || _direction4 === void 0 ? void 0 : _direction4.inlineOrientation) == "horizontal") return "horizontal";
        return "vertical";
      } else {
        var _direction5;

        if (((_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.blockOrientation) == "vertical") return "vertical";
        return "horizontal";
      }
    }, []);
    var convertElementSize = F((elementSize, direction) => {
      var _direction6;

      (_direction6 = direction) !== null && _direction6 !== void 0 ? _direction6 : direction = getLogicalDirectionInfo();

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
      useLogicalDirectionProps: F(props => useRefElementProps(useElementSizeProps(props)), []),
      getElement,
      getLogicalDirectionInfo,
      convertElementSize,
      convertToLogicalOrientation,
      convertToPhysicalOrientation
    };
  }
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  createCommonjsModule(function (module, exports) {
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
  });

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
    var onTransitionEnd = F(e => {
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
      const onInput1 = F((e) => { setShow1(o => !o); e.preventDefault(); }, []);
      const onInput3 = F((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = F((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = F((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = F((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = F((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = F((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = F((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = F((e) => { setShow3(0); e.preventDefault(); }, []);
      const onInputB = F((e) => { setShow3(1); e.preventDefault(); }, []);
      const onInputC = F((e) => { setShow3(2); e.preventDefault(); }, []);
      return (v$1(d, null,
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
      const onMinInput = F((e) => { setMin((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMaxInput = F((e) => { setMax((e.target).valueAsNumber); e.preventDefault(); }, []);
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
      const onOriginXInput = F((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = F((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = F((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = F((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = F((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const onSlideXInput = F((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = F((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = F((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const onOriginXInput = F((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = F((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = F((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = F((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
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
      const onOriginXInput = F((e) => { setOriginX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onOriginYInput = F((e) => { setOriginY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinXInput = F((e) => { setMinX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMinYInput = F((e) => { setMinY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = F((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const onSlideXInput = F((e) => { setSlideX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onSlideYInput = F((e) => { setSlideY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onWithFadeInput = F((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
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
      const onWithFadeInput = F((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = l(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = F((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
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
      const onFlipXInput = F((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = F((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtZ2V0dGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1jYWxsYmFjay5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1wYXNzaXZlLXN0YXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWVsZW1lbnQtc2l6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL3RyYW5zaXRpb25hYmxlLmpzIiwiLi4vY2xpcC5qcyIsIi4uL2ZhZGUuanMiLCIuLi9jbGlwLWZhZGUuanMiLCIuLi9jb2xsYXBzZS5qcyIsIi4uL2NvbGxhcHNlLWZhZGUuanMiLCIuLi9zbGlkZS5qcyIsIi4uL3NsaWRlLWZhZGUuanMiLCIuLi96b29tLmpzIiwiLi4vem9vbS1mYWRlLmpzIiwiLi4vc2xpZGUtem9vbS5qcyIsIi4uL3NsaWRlLXpvb20tZmFkZS5qcyIsIi4uL2ZsaXAuanMiLCIuLi9zd2FwcGFibGUuanMiLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEgobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIFo9aC5ldmVudDtmdW5jdGlvbiBZKCl7fWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gWiYmKG49WihuKSksbi5wZXJzaXN0PVksbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpLG4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTpILHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xyXG4gICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LmNoaWxkcmVuO1xyXG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCByZXQgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgbGhzLCByaHMpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jaGlsZHJlbi5qcy5tYXAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXHJcbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcclxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xyXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXHJcbiAgICByZXR1cm4gbWVyZ2VDbGFzc2VzKGxocywgcmhzKTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIGNvbnN0IGxoc0NsYXNzID0gbGhzPy5jbGFzcztcclxuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgcmhzQ2xhc3NOYW1lID0gcmhzPy5jbGFzc05hbWU7XHJcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgIF07XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1swXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1syXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1szXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s2XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s5XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzExXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxM107XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcclxuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZWYoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZGVidWdnZXI7IC8vIEludGVudGlvbmFsXHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoZmFsc2UsIFwiVW5rbm93biByZWYgdHlwZSBmb3VuZCB0aGF0IHdhcyBuZWl0aGVyIGEgUmVmQ2FsbGJhY2sgbm9yIGEgUmVmT2JqZWN0XCIpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cclxuICogQHBhcmFtIGxoc1xyXG4gKiBAcGFyYW0gcmhzXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcclxuICAgICAgICBjb25zdCByaHMgPSByaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGxldCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgbGhzKTtcclxuICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCByaHMpO1xyXG4gICAgICAgIH0sIFtsaHMsIHJoc10pO1xyXG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNSZWYocmVmOiBSZWY8YW55PikgeyB9XHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XHJcblxyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmIH0pLFxyXG4gICAgXSBhcyBjb25zdDtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMV0pO1xyXG5cclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXHJcbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzZdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s3XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xyXG59XHJcbiovXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XHJcbiAgICAvLyBUT0RPOiBUaGlzIHN1Y2tzIEQ6XHJcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKHN0eWxlLnNwbGl0KFwiO1wiKS5tYXAoc3RhdGVtZW50ID0+IHN0YXRlbWVudC5zcGxpdChcIjpcIikpKTtcclxufVxyXG4vKipcclxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXHJcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcclxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxyXG4gICAgaWYgKCFsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XHJcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmICFyaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gbGhzLnN0eWxlO1xyXG4gICAgICAgIGlmICghbGhzPy5zdHlsZSAmJiByaHM/LnN0eWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmhzLnN0eWxlO1xyXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxyXG4gICAgICAgIGlmIChsaHM/LnN0eWxlICYmIHJocz8uc3R5bGUpIHtcclxuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChsaHM/LnN0eWxlKSB9LCByaHMpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMobGhzLCB7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KHJocz8uc3R5bGUpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBMb2dpYz8/P1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxyXG4gICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICByZXR1cm4gYCR7bGhzLnN0eWxlfTske3Jocz8uc3R5bGUgPz8gXCJcIn1gO1xyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxyXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLXN0eWxlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VNZXJnZWRDaGlsZHJlbiB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2hpbGRyZW5cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XHJcbmxldCBsb2cgPSAoc3RyKSA9PiB7IGRlYnVnZ2VyOyBjb25zb2xlLndhcm4oYFRyeWluZyB0byBtZXJnZSB0d28gcHJvcHMgd2l0aCB0aGUgc2FtZSBuYW1lOiAke3N0cn1gKTsgLyogSW50ZW50aW9uYWwgKi8gfTtcclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcclxuICAgIGxvZyA9IGxvZzI7XHJcbn1cclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxyXG4gKiBAcGFyYW0gbGhzMlxyXG4gKiBAcGFyYW0gcmhzMlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XHJcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcclxuICAgICAgICAvLyBhbmQgYWxsIGxocyBwcm9wcy4gV2UncmUgZ29pbmcgdG8gbWVyZ2UgaW4gcmhzIGp1c3QgYWZ0ZXIuXHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogbGhzQ2hpbGRyZW4sIGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xyXG4gICAgICAgIGxldCByZXQgPSB7XHJcbiAgICAgICAgICAgIC4uLmxocyxcclxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIHN0eWxlOiB1c2VNZXJnZWRTdHlsZXMobGhzMiwgcmhzMiksXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LnJlZjtcclxuICAgICAgICBpZiAocmV0LnN0eWxlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuc3R5bGU7XHJcbiAgICAgICAgaWYgKHJldC5jbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgZGVsZXRlIHJldC5jbGFzc05hbWU7XHJcbiAgICAgICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNoaWxkcmVuO1xyXG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcclxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXHJcbiAgICAgICAgLy9jb25zdCBsaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobGhzKSBhcyBba2V5b2YgVCwgVFtrZXlvZiBUXV1bXTtcclxuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxoc1ZhbHVlID0gbGhzW3Joc0tleV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuICplYXN5KiBjYXNlLCBidXQgYSB3ZWxsLWRlZmluZWQgb25lLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cclxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsICYmIHJoc1ZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcclxuICAgICAgICAgICAgICAgICAgICBsb2c/LihgQ291bGQgbm90IG1lcmdlIGluY29tcGF0aWJsZSBwcm9wIFwiJHtyaHNLZXl9XCIgKHR5cGU6ICR7dHlwZW9mIHJoc1ZhbHVlfSwgdmFsdWVzOiBbJHtsaHNWYWx1ZX0sICR7cmhzVmFsdWV9XSlgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XHJcbiAgICBpZiAoIWxocylcclxuICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgaWYgKCFyaHMpXHJcbiAgICAgICAgcmV0dXJuIGxocztcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBsdiA9IGxocyguLi5hcmdzKTtcclxuICAgICAgICBsZXQgcnYgPSByaHMoLi4uYXJncyk7XHJcbiAgICAgICAgaWYgKGx2IGluc3RhbmNlb2YgUHJvbWlzZSB8fCBydiBpbnN0YW5jZW9mIFByb21pc2UpXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XHJcbiAgICB9O1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcclxuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XHJcblxyXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XHJcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTM6IE0xID0gMDtcclxuXHJcbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xyXG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG02OiBNMiA9IDA7XHJcblxyXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcclxuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xyXG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcblxyXG5cclxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxyXG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xyXG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xyXG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xyXG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xyXG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xyXG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xyXG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xyXG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xyXG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xyXG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xyXG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xyXG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xyXG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xyXG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xyXG5cclxuXHJcbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cclxuKi8gXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbmNvbnN0IFRhYmxlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OV8tXCI7XHJcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFRhYmxlW3ZhbHVlXTtcclxufVxyXG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAwYjEwMDAwMDApO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcclxuICAgIHJldHVybiBbcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKSwgcmFuZG9tNkJpdHMoKV07XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb21seS1nZW5lcmF0ZWQgSUQgd2l0aCBhbiBvcHRpb25hbCBwcmVmaXguXHJcbiAqIE5vdGUgdGhhdCBpZiB0aGUgcHJlZml4IGlzICpleHBsaWNpdGx5KiBzZXQgdG8gXCJcIiwgdGhlblxyXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSB7XHJcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBJZiB5b3UnZCBsaWtlIHRvIHVzZSB0aGUgSUQgaW4gYSBwcm9wZXJ0eSB0aGF0J3MgKm5vdCogbmFtZWQgYGlkYCAobGlrZSBgZm9yYCBvciBgYXJpYS1sYWJlbGxlZGJ5YCBvciB3aGF0bm90KSwgYHVzZVJlZmVyZW5jZWRJZFByb3BzYCBpcyBhbHNvIHByb3ZpZGVkLlxyXG4gKlxyXG4gKiBBbmQgdGhlIHJhbmRvbWx5LWdlbmVyYXRlZCBpZCBpdHNlbGYgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHlvdSB3YW50IHRvIGhhbmRsZSB0aGUgbG9naWMgeW91cnNlbGYgd2l0aG91dCBgdXNlTWVyZ2VkUHJvcHNgLlxyXG4gKlxyXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmFuZG9tSWQoeyBwcmVmaXggfSA9IHt9KSB7XHJcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICBjb25zdCBbd2F0Y2hQcmVmaXhVcGRhdGVzLCBzZXRXYXRjaFByZWZpeFVwZGF0ZXMsIGdldFdhdGNoUHJlZml4VXBkYXRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xyXG4gICAgICAgIGlmICh3YXRjaFByZWZpeFVwZGF0ZXMpXHJcbiAgICAgICAgICAgIHNldFJhbmRvbUlkKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XHJcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xyXG4gICAgfSwgW3ByZWZpeF0pO1xyXG4gICAgLy8gV2hhdGV2ZXIgSUQgd2FzIG1vc3QgcmVjZW50bHkgdXNlZCBieSB0aGUgYWN0dWFsIFwiaWRcIiBwcm9wLlxyXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXHJcbiAgICAvL1xyXG4gICAgLy8gVE9ETzogVGhpcyBkb2VzIG1lYW4gdGhhdCBvbiB0aGUgZmlyc3QgcmVuZGVyLCBpZiBqdXN0IHRoZSBJRCBpcyBwcm92aWRlZCxcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxyXG4gICAgLy8gSXMgdGhpcyBva2F5P1xyXG4gICAgY29uc3QgW3VzZWRJZCwgc2V0VXNlZElkLCBnZXRVc2VkSWRdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcclxuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGZ1bmN0aW9uICh7IFtpZFByb3BOYW1lXTogZ2l2ZW5JZCwgLi4ucHJvcHMgfSkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VkSWQyID0gKGdpdmVuSWQgPz8gdXNlZElkID8/IHJhbmRvbUlkID8/IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VkSWQodXNlZElkMik7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHsgW2lkUHJvcE5hbWVdOiB1c2VkSWQyIH0sIHByb3BzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9LCBbdXNlZElkLCByYW5kb21JZF0pO1xyXG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xyXG4gICAgICAgIHJldHVybiB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImlkXCIpKHApO1xyXG4gICAgfSwgW3VzZVJlZmVyZW5jZWRJZFByb3BzXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJhbmRvbUlkLFxyXG4gICAgICAgIGlkOiB1c2VkSWQsXHJcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcclxuICAgICAgICB1c2VSYW5kb21JZFByb3BzLFxyXG4gICAgICAgIHVzZVJlZmVyZW5jZWRJZFByb3BzXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHUpIHsgfVxyXG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cclxuZnVuY3Rpb24gYWNjZXB0c0Nzcyhwcm9wKSB7IH1cclxuZnVuY3Rpb24gdGVzdChwcm9wcykge1xyXG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xyXG4gICAgLy9jb25zdCBwMWE6IE1lcmdlZFByb3BzPHsgaWQ6IHN0cmluZyB9LCB7ICB9PiA9IHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pXHJcbiAgICBjb25zdCBwMWIgPSB1c2VSYW5kb21JZFByb3BzKHsgLi4ucHJvcHMsIGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwMmIgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pO1xyXG4gICAgY29uc3QgcDJjID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikocHJvcHMpO1xyXG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xyXG4gICAgY29uc3QgcDNiID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IC4uLnByb3BzLCBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YSA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHVzZVJhbmRvbUlkUHJvcHMoeyBpZDogdW5kZWZpbmVkIH0pKTtcclxuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XHJcbiAgICAvL3AxYS5pZDtcclxuICAgIHAxYi5pZDtcclxuICAgIHAyYVtcImZvclwiXTtcclxuICAgIHAyYltcImZvclwiXTtcclxuICAgIHAyY1tcImZvclwiXTtcclxuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDNiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwM2FbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDRhW1wiZm9yXCJdPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNGJbXCJmb3JcIl0/LmNvbmNhdChcIlwiKTtcclxuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogSXQncyBiZWNhdXNlIGl0IHJlc29sdmVzIHRvIFwiaWQ6IHVuZGVmaW5lZCAmIHN0cmluZ1wiIC0tIHRoaXMgc2hvdWxkbid0IGhhcHBlblxyXG4gICAgcDRiLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhwMWIuc3R5bGUpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcclxuICAgIHAyYS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MocDJiLnN0eWxlKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHAzYi5zdHlsZSk7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKHA0Yi5zdHlsZSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xyXG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcclxuY29uc3QgdG9SdW4gPSBuZXcgTWFwKCk7XHJcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxyXG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXHJcbi8vIFJpZ2h0IG5vdywgdXNpbmcgb3B0aW9ucy5fY29tbWl0IGhhcyB0aGUgcHJvYmxlbSBvZiBydW5uaW5nXHJcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XHJcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxyXG4vLyBcclxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXHJcbmNvbnN0IG9yaWdpbmFsRGlmZmVkID0gb3B0aW9ucy5kaWZmZWQ7XHJcbm9wdGlvbnMuZGlmZmVkID0gKHZub2RlLCAuLi5hcmdzKSA9PiB7XHJcbiAgICBmb3IgKGxldCBbaWQsIHsgZWZmZWN0LCBpbnB1dHMgfV0gb2YgdG9SdW4pIHtcclxuICAgICAgICBjb25zdCBvbGRJbnB1dHMgPSBwcmV2aW91c0lucHV0cy5nZXQoaWQpO1xyXG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGlucHV0cykpIHtcclxuICAgICAgICAgICAgZWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLnNldChpZCwgaW5wdXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1J1bi5jbGVhcigpO1xyXG4gICAgb3JpZ2luYWxEaWZmZWQ/Lih2bm9kZSwgLi4uYXJncyk7XHJcbn07XHJcbi8qKlxyXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXHJcbiAqXHJcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXHJcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxyXG4gKlxyXG4gKiBAcGFyYW0gZWZmZWN0XHJcbiAqIEBwYXJhbSBpbnB1dHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcclxuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xyXG4gICAgdG9SdW4uc2V0KGlkLCB7IGVmZmVjdCwgaW5wdXRzIH0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB0b1J1bi5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbaWRdKTtcclxufVxyXG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XHJcbiAgICByZXR1cm4gISEoIW9sZEFyZ3MgfHxcclxuICAgICAgICBvbGRBcmdzLmxlbmd0aCAhPT0gbmV3QXJncz8ubGVuZ3RoIHx8XHJcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3RcIjtcclxuY29uc3QgVW5zZXQgPSBTeW1ib2woXCJ1bnNldFwiKTtcclxuLyoqXHJcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcclxuICogaW5zaWRlIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzIHdpdGhvdXQgaW5jbHVkaW5nIGl0IGluIHRoZSBkZXBlbmRlbmN5IGFycmF5LlxyXG4gKlxyXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cclxuICogcmVmIGFzc2lnbm1lbnQuIFRoaXMgbWVhbnMgdGhpcyBnZXR0ZXIgaXMgc2FmZSB0byB1c2UgYW55d2hlcmUgKioqZXhjZXB0IHRoZSByZW5kZXIgcGhhc2UqKiouXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKFVuc2V0KTtcclxuICAgIHVzZUJlZm9yZUxheW91dEVmZmVjdCgoKSA9PiB7IHJlZi5jdXJyZW50ID0gdmFsdWU7IH0sIFt2YWx1ZV0pO1xyXG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocmVmLmN1cnJlbnQgPT09IFVuc2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgcmV0cmlldmVkIGZyb20gdXNlU3RhYmxlR2V0dGVyKCkgY2Fubm90IGJlIGNhbGxlZCBkdXJpbmcgcmVuZGVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1nZXR0ZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUdldHRlciB9IGZyb20gXCIuL3VzZS1zdGFibGUtZ2V0dGVyXCI7XHJcbi8qKlxyXG4gKiBBbHRlcm5hdGUgdXNlQ2FsbGJhY2soKSB3aGljaCBhbHdheXMgcmV0dXJucyB0aGUgc2FtZSAod3JhcHBlZCkgZnVuY3Rpb24gcmVmZXJlbmNlXHJcbiAqIHNvIHRoYXQgaXQgY2FuIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIGRlcGVuZGVuY3kgYXJyYXlzIG9mIGB1c2VFZmZlY3RgIGFuZCBmcmllbmRzLlxyXG4gKlxyXG4gKiBEbyBub3QgdXNlIGR1cmluZyB0aGUgcmVuZGVyIHBoYXNlISAgYHVzZUxheW91dEVmZmVjdGAgaXMgZmluZSB0aG91Z2guXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja0dldHRlciA9IHVzZVN0YWJsZUdldHRlcihmbik7XHJcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICByZXR1cm4gY3VycmVudENhbGxiYWNrR2V0dGVyKCkoLi4uYXJncyk7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xyXG4vKipcclxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbiwgYXQgbGVhc3QgYnkgcmUtcmVuZGVyaW5nIGFnYWluKS5cclxuICpcclxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XHJcbiAqXHJcbiAqIDEuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgdGhpcyB2ZXJzaW9uIG9mIGBzZXRTdGF0ZWAgZG9lc24ndCByZS1yZW5kZXIgdGhlIHdob2xlIGNvbXBvbmVudFxyXG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cclxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xyXG4gKiA0LiBJdCdzIGxpa2UgYHVzZUVmZmVjdGAsIGV4Y2VwdCB0aGUgc2luZ2xlIFwiZGVwZW5kZW5jeVwiIGlzIGJhc2VkIG9uIHlvdXIgY2FsbHMgdG8gYHNldFN0YXRlYFxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cclxuICpcclxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb25cclxuICogQHBhcmFtIGluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpIHtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKFVuc2V0KTtcclxuICAgIGNvbnN0IHdhcm5pbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XHJcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cclxuICAgIGNvbnN0IG9uU2hvdWxkQ2xlYW5VcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBsZXQgY2xlYW51cENhbGxiYWNrID0gY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcclxuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrKCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcclxuICAgIC8vIHZhbHVlIGluIHBsYWNlIG9mIGhhdmluZyBubyB2YWx1ZSBhdCBhbGwgeWV0LlxyXG4gICAgLy8gVGhpcyBpcyB0aGUgc2hhcmVkIGNvZGUgZm9yIHRoYXQsIHVzZWQgb24gbW91bnQgYW5kIHdoZW5ldmVyXHJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXHJcbiAgICBjb25zdCB0cnlFbnN1cmVWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgJiYgZ2V0SW5pdGlhbFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbFZhbHVlID0gZ2V0SW5pdGlhbFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gaW5pdGlhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB1c2VTdGFibGVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiRHVyaW5nIG9uQ2hhbmdlLCBwcmVmZXIgdXNpbmcgdGhlICh2YWx1ZSwgcHJldlZhbHVlKSBhcmd1bWVudHMgaW5zdGVhZCBvZiBnZXRWYWx1ZSAtLSBpdCdzIGFtYmlndW91cyBhcyB0byBpZiB5b3UncmUgYXNraW5nIGZvciB0aGUgb2xkIG9yIG5ldyB2YWx1ZSBhdCB0aGlzIHBvaW50IGluIHRpbWUgZm9yIHRoaXMgY29tcG9uZW50LlwiKTtcclxuICAgICAgICAvLyBUaGUgZmlyc3QgdGltZSB3ZSBjYWxsIGdldFZhbHVlLCBpZiB3ZSBoYXZlbid0IGJlZW4gZ2l2ZW4gYSB2YWx1ZSB5ZXQsXHJcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgaW5pdGlhbCB2YWx1ZSBpbnN0ZWFkIG9mIG5vdGhpbmcuXHJcbiAgICAgICAgaWYgKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0KVxyXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xyXG4gICAgICAgIHJldHVybiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQgPyB1bmRlZmluZWQgOiB2YWx1ZVJlZi5jdXJyZW50KTtcclxuICAgIH0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UndmUgcnVuIG91ciBlZmZlY3QgYXQgbGVhc3Qgb25jZSBvbiBtb3VudC5cclxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXHJcbiAgICAgICAgdHJ5RW5zdXJlVmFsdWUoKTtcclxuICAgIH0sIFtdKTtcclxuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKChhcmcpID0+IHtcclxuICAgICAgICBjb25zdCBwcmV2RGVwID0gZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBkZXAgPSBhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFyZyhwcmV2RGVwKSA6IGFyZztcclxuICAgICAgICBpZiAoZGVwICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRvIHRoZSB1c2VyIHRoYXQgdGhleSBzaG91bGRuJ3QgY2FsbCBnZXRWYWx1ZSBkdXJpbmcgb25DaGFuZ2VcclxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJkIGNsZWFudXAgZnVuY3Rpb25cclxuICAgICAgICAgICAgb25TaG91bGRDbGVhblVwKCk7XHJcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFja1JlZi5jdXJyZW50ID0gKG9uQ2hhbmdlPy4oZGVwLCBwcmV2RGVwKSA/PyB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xyXG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgdXNlciB0byBub3JtYWxseSBjYWxsIGdldFZhbHVlIGFnYWluXHJcbiAgICAgICAgICAgIHdhcm5pbmdSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xyXG59XHJcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxyXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxyXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cclxuICpcclxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZSB9KSB7XHJcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXHJcbiAgICBjb25zdCBbZ2V0RWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VQYXNzaXZlU3RhdGUob25FbGVtZW50Q2hhbmdlLCAoKSA9PiBudWxsKTtcclxuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXHJcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcclxuICAgIGNvbnN0IG15UmVmID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBpZiAoZSlcclxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XHJcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcclxuICAgIC8vIHRoZSBwcm9wcyBhbmQgYWxsb3dzIHVzIHRvIGFjdHVhbGx5IGZpbmQgdGhlIGVsZW1lbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxyXG4gICAgICAgIGdldEVsZW1lbnRcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdGVzdCgpIHtcclxuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlOiBzZXRFbGVtZW50IH0pO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xyXG5mdW5jdGlvbiBleHRyYWN0RWxlbWVudFNpemUoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCByZXRyaWV2ZSB0aGUgc2l6ZSBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldFwiKTtcclxuICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcclxuICAgIHJldHVybiAoeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFbGVtZW50U2l6ZSh7IG9ic2VydmVCb3gsIG9uU2l6ZUNoYW5nZSB9KSB7XHJcbiAgICBjb25zdCBbZ2V0U2l6ZSwgc2V0U2l6ZV0gPSB1c2VQYXNzaXZlU3RhdGUob25TaXplQ2hhbmdlKTtcclxuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKG9ic2VydmVCb3gpO1xyXG4gICAgY29uc3QgbmVlZEFOZXdPYnNlcnZlciA9IChlbGVtZW50LCBvYnNlcnZlQm94KSA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjbGllbnRXaWR0aCwgc2Nyb2xsV2lkdGgsIG9mZnNldFdpZHRoLCBjbGllbnRIZWlnaHQsIHNjcm9sbEhlaWdodCwgb2Zmc2V0SGVpZ2h0LCBjbGllbnRMZWZ0LCBzY3JvbGxMZWZ0LCBvZmZzZXRMZWZ0LCBjbGllbnRUb3AsIHNjcm9sbFRvcCwgb2Zmc2V0VG9wIH0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVVwZGF0ZSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7IGhhbmRsZVVwZGF0ZSgpOyB9KTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgeyBib3g6IG9ic2VydmVCb3ggfSk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50T2JzZXJ2ZUJveC5jdXJyZW50ID0gb2JzZXJ2ZUJveDtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IGUgPT4gbmVlZEFOZXdPYnNlcnZlcihlLCBvYnNlcnZlQm94KSB9KTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRPYnNlcnZlQm94LmN1cnJlbnQgIT09IG9ic2VydmVCb3gpXHJcbiAgICAgICAgICAgIG5lZWRBTmV3T2JzZXJ2ZXIoZ2V0RWxlbWVudCgpLCBvYnNlcnZlQm94KTtcclxuICAgIH0sIFtvYnNlcnZlQm94XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEVsZW1lbnQsXHJcbiAgICAgICAgZ2V0U2l6ZSxcclxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlUmVmRWxlbWVudCB9IGZyb20gXCIuL3VzZS1yZWYtZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFbGVtZW50U2l6ZSB9IGZyb20gXCIuL3VzZS1lbGVtZW50LXNpemVcIjtcclxuaW1wb3J0IHsgdXNlUGFzc2l2ZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXBhc3NpdmUtc3RhdGVcIjtcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcclxufVxyXG4vKipcclxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxyXG4gKlxyXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxyXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cclxuICpcclxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxyXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxyXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cclxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlIH0pIHtcclxuICAgIGNvbnN0IHVwZGF0ZUxvZ2ljYWxJbmZvID0gdXNlQ2FsbGJhY2soKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChlbGVtZW50LmlzQ29ubmVjdGVkKTtcclxuICAgICAgICBlbGVtZW50ID0gKGVsZW1lbnQucGFyZW50RWxlbWVudCA/PyBlbGVtZW50KTtcclxuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgIGxldCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XHJcbiAgICAgICAgbGV0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XHJcbiAgICAgICAgaWYgKHQgPT0gXCJ1cHJpZ2h0XCIpXHJcbiAgICAgICAgICAgIGQgPSBcImx0clwiO1xyXG4gICAgICAgIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvKHsgLi4uV3JpdGluZ01vZGVzW3cgPz8gXCJob3Jpem9udGFsLXRiXCJdW2QgPz8gXCJsdHJcIl0gfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XHJcbiAgICAgICAgb25FbGVtZW50Q2hhbmdlOiAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaGFzbid0IGFjdHVhbGx5IGJlZW4gaG9va2VkIHVwIHRvIHRoZSBkb2N1bWVudCB5ZXQuXHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0IGEgbW9tZW50IHNvIHRoYXQgd2UgY2FuIHByb3Blcmx5IHVzZSBgZ2V0Q29tcHV0ZWRTdHlsZWBcclxuICAgICAgICAgICAgICAgIC8vIChzaW5jZSB3ZSBvbmx5IHJlYWQgaXQgb24gbW91bnQpXHJcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlTG9naWNhbEluZm8oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXHJcbiAgICAvLyAgIEEuIFRoZXJlJ3Mgbm8gd2F5IHRvIHdhdGNoIGZvciBDU1Mgc3R5bGUgY2hhbmdlc1xyXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXHJcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcclxuICAgIC8vICAgICAgKFRob3NlIHRoYXQgZG8gd2lsbCBuZWVkIHRvIG1vdW50IGFuZCB1bm1vdW50IHRoZSBjb21wb25lbnQgdGhhdCB1c2VzIGl0KVxyXG4gICAgLy9cclxuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXHJcbiAgICAvLyBhbmQgaWYgc28sIHRlc3RzIGlmIHRoZSB3cml0aW5nIG1vZGUgaGFzIGNoYW5nZWQgdG9vLlxyXG4gICAgLy9cclxuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cclxuICAgIGNvbnN0IHsgdXNlRWxlbWVudFNpemVQcm9wcyB9ID0gdXNlRWxlbWVudFNpemUoeyBvblNpemVDaGFuZ2U6IF8gPT4gdXBkYXRlTG9naWNhbEluZm8oZ2V0RWxlbWVudCgpKSB9KTtcclxuICAgIGNvbnN0IFtnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgc2V0TG9naWNhbERpcmVjdGlvbkluZm9dID0gdXNlUGFzc2l2ZVN0YXRlKG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XHJcbiAgICBjb25zdCBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcclxuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlubGluZVNpemUsIGJsb2NrU2l6ZSwgaW5saW5lRGlyZWN0aW9uLCBibG9ja0RpcmVjdGlvbiB9ID0gZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcclxuICAgICAgICAgICAgLy8gb3Igc29tZXRpbWVzIHR3byAobGlrZSBgbGVmdGAgKyBgd2lkdGhgKVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsUmlnaHRCb3R0b20oZGlyKSB7IGlmIChkaXIgPT09IFwicnRsXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XHJcbiAgICAgICAgICAgIGNvbnN0IGYxID0gZ2V0UGh5c2ljYWxMZWZ0VG9wKGlubGluZURpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGY0ID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShibG9ja0RpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjEpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pKTtcclxuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGY0KX1gXSkpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VDYWxsYmFjaygocHJvcHMpID0+IHVzZVJlZkVsZW1lbnRQcm9wcyh1c2VFbGVtZW50U2l6ZVByb3BzKHByb3BzKSksIFtdKSxcclxuICAgICAgICBnZXRFbGVtZW50LFxyXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvLFxyXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcclxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb24sXHJcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxyXG4gICAgfTtcclxufVxyXG47XHJcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcclxuICAgIC4uLkhvcml6b250YWxUYkx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcclxufTtcclxuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcclxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcclxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcclxuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xyXG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xyXG4gICAgLi4uVmVydGljYWxSbEx0cixcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xyXG4gICAgLi4uVmVydGljYWxSbFJ0bCxcclxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xyXG4gICAgLi4uVmVydGljYWxMckx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcclxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcclxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxyXG59O1xyXG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xyXG4gICAgLi4uU2lkZXdheXNMdEx0cixcclxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxyXG59O1xyXG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XHJcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcclxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XHJcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXHJcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxMciA9IHtcclxuICAgIGx0cjogVmVydGljYWxMckx0cixcclxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxyXG59O1xyXG5jb25zdCBTaWRld2F5c1JsID0ge1xyXG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxyXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcclxufTtcclxuY29uc3QgV3JpdGluZ01vZGVzID0ge1xyXG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcclxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcclxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcclxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcclxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdpbmVydCcsIGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd29yayBpcyBsaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNvZnR3YXJlIGFuZCBEb2N1bWVudCBMaWNlbnNlXG4gICAqIChodHRwOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudCkuXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmV0dXJuIGVhcmx5IGlmIHdlJ3JlIG5vdCBydW5uaW5nIGluc2lkZSBvZiB0aGUgYnJvd3Nlci5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgY29udmVydGluZyBOb2RlTGlzdHMuXG4gICAgLyoqIEB0eXBlIHt0eXBlb2YgQXJyYXkucHJvdG90eXBlLnNsaWNlfSAqL1xuICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuICAgIC8qKlxuICAgICAqIElFIGhhcyBhIG5vbi1zdGFuZGFyZCBuYW1lIGZvciBcIm1hdGNoZXNcIi5cbiAgICAgKiBAdHlwZSB7dHlwZW9mIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN9XG4gICAgICovXG4gICAgdmFyIG1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZyA9IFsnYVtocmVmXScsICdhcmVhW2hyZWZdJywgJ2lucHV0Om5vdChbZGlzYWJsZWRdKScsICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJywgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKScsICdidXR0b246bm90KFtkaXNhYmxlZF0pJywgJ2RldGFpbHMnLCAnc3VtbWFyeScsICdpZnJhbWUnLCAnb2JqZWN0JywgJ2VtYmVkJywgJ1tjb250ZW50ZWRpdGFibGVdJ10uam9pbignLCcpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Um9vdGAgbWFuYWdlcyBhIHNpbmdsZSBpbmVydCBzdWJ0cmVlLCBpLmUuIGEgRE9NIHN1YnRyZWUgd2hvc2Ugcm9vdCBlbGVtZW50IGhhcyBhbiBgaW5lcnRgXG4gICAgICogYXR0cmlidXRlLlxuICAgICAqXG4gICAgICogSXRzIG1haW4gZnVuY3Rpb25zIGFyZTpcbiAgICAgKlxuICAgICAqIC0gdG8gY3JlYXRlIGFuZCBtYWludGFpbiBhIHNldCBvZiBtYW5hZ2VkIGBJbmVydE5vZGVgcywgaW5jbHVkaW5nIHdoZW4gbXV0YXRpb25zIG9jY3VyIGluIHRoZVxuICAgICAqICAgc3VidHJlZS4gVGhlIGBtYWtlU3VidHJlZVVuZm9jdXNhYmxlKClgIG1ldGhvZCBoYW5kbGVzIGNvbGxlY3RpbmcgYEluZXJ0Tm9kZWBzIHZpYSByZWdpc3RlcmluZ1xuICAgICAqICAgZWFjaCBmb2N1c2FibGUgbm9kZSBpbiB0aGUgc3VidHJlZSB3aXRoIHRoZSBzaW5nbGV0b24gYEluZXJ0TWFuYWdlcmAgd2hpY2ggbWFuYWdlcyBhbGwga25vd25cbiAgICAgKiAgIGZvY3VzYWJsZSBub2RlcyB3aXRoaW4gaW5lcnQgc3VidHJlZXMuIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYFxuICAgICAqICAgaW5zdGFuY2UgZXhpc3RzIGZvciBlYWNoIGZvY3VzYWJsZSBub2RlIHdoaWNoIGhhcyBhdCBsZWFzdCBvbmUgaW5lcnQgcm9vdCBhcyBhbiBhbmNlc3Rvci5cbiAgICAgKlxuICAgICAqIC0gdG8gbm90aWZ5IGFsbCBtYW5hZ2VkIGBJbmVydE5vZGVgcyB3aGVuIHRoaXMgc3VidHJlZSBzdG9wcyBiZWluZyBpbmVydCAoaS5lLiB3aGVuIHRoZSBgaW5lcnRgXG4gICAgICogICBhdHRyaWJ1dGUgaXMgcmVtb3ZlZCBmcm9tIHRoZSByb290IG5vZGUpLiBUaGlzIGlzIGhhbmRsZWQgaW4gdGhlIGRlc3RydWN0b3IsIHdoaWNoIGNhbGxzIHRoZVxuICAgICAqICAgYGRlcmVnaXN0ZXJgIG1ldGhvZCBvbiBgSW5lcnRNYW5hZ2VyYCBmb3IgZWFjaCBtYW5hZ2VkIGluZXJ0IG5vZGUuXG4gICAgICovXG5cbiAgICB2YXIgSW5lcnRSb290ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290RWxlbWVudCBUaGUgRWxlbWVudCBhdCB0aGUgcm9vdCBvZiB0aGUgaW5lcnQgc3VidHJlZS5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0TWFuYWdlcn0gaW5lcnRNYW5hZ2VyIFRoZSBnbG9iYWwgc2luZ2xldG9uIEluZXJ0TWFuYWdlciBvYmplY3QuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Um9vdChyb290RWxlbWVudCwgaW5lcnRNYW5hZ2VyKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydFJvb3QpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUluZXJ0TWFuYWdlcn0gKi9cbiAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyID0gaW5lcnRNYW5hZ2VyO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovXG4gICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydE5vZGU+fVxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBmb2N1c2FibGUgbm9kZXMgaW4gdGhpcyBJbmVydFJvb3QncyBzdWJ0cmVlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIHN1YnRyZWUgaGlkZGVuIGZyb20gYXNzaXN0aXZlIHRlY2hub2xvZ3lcbiAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICAgIC8qKiBAdHlwZSB7P3N0cmluZ30gKi9cbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSB0aGlzLl9yb290RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICAvLyBNYWtlIGFsbCBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlIHN1YnRyZWUgdW5mb2N1c2FibGUgYW5kIGFkZCB0aGVtIHRvIF9tYW5hZ2VkTm9kZXNcbiAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSh0aGlzLl9yb290RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2F0Y2ggZm9yOlxuICAgICAgICAvLyAtIGFueSBhZGRpdGlvbnMgaW4gdGhlIHN1YnRyZWU6IG1ha2UgdGhlbSB1bmZvY3VzYWJsZSB0b29cbiAgICAgICAgLy8gLSBhbnkgcmVtb3ZhbHMgZnJvbSB0aGUgc3VidHJlZTogcmVtb3ZlIHRoZW0gZnJvbSB0aGlzIGluZXJ0IHJvb3QncyBtYW5hZ2VkIG5vZGVzXG4gICAgICAgIC8vIC0gYXR0cmlidXRlIGNoYW5nZXM6IGlmIGB0YWJpbmRleGAgaXMgYWRkZWQsIG9yIHJlbW92ZWQgZnJvbSBhbiBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZVxuICAgICAgICAvLyAgIGVsZW1lbnQsIG1ha2UgdGhhdCBub2RlIGEgbWFuYWdlZCBub2RlLlxuICAgICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX29uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fcm9vdEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGwgdGhpcyB3aGVuZXZlciB0aGlzIG9iamVjdCBpcyBhYm91dCB0byBiZWNvbWUgb2Jzb2xldGUuICBUaGlzIHVud2luZHMgYWxsIG9mIHRoZSBzdGF0ZVxuICAgICAgICogc3RvcmVkIGluIHRoaXMgb2JqZWN0IGFuZCB1cGRhdGVzIHRoZSBzdGF0ZSBvZiBhbGwgb2YgdGhlIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRSb290LCBbe1xuICAgICAgICBrZXk6ICdkZXN0cnVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Jvb3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0aGlzLl9zYXZlZEFyaWFIaWRkZW4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VubWFuYWdlTm9kZShpbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAvLyBOb3RlIHdlIGNhc3QgdGhlIG51bGxzIHRvIHRoZSBBTlkgdHlwZSBoZXJlIGJlY2F1c2U6XG4gICAgICAgICAgLy8gMSkgV2Ugd2FudCB0aGUgY2xhc3MgcHJvcGVydGllcyB0byBiZSBkZWNsYXJlZCBhcyBub24tbnVsbCwgb3IgZWxzZSB3ZVxuICAgICAgICAgIC8vICAgIG5lZWQgZXZlbiBtb3JlIGNhc3RzIHRocm91Z2hvdXQgdGhpcyBjb2RlLiBBbGwgYmV0cyBhcmUgb2ZmIGlmIGFuXG4gICAgICAgICAgLy8gICAgaW5zdGFuY2UgaGFzIGJlZW4gZGVzdHJveWVkIGFuZCBhIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAgICAgICAgLy8gMikgV2UgZG9uJ3Qgd2FudCB0byBjYXN0IFwidGhpc1wiLCBiZWNhdXNlIHdlIHdhbnQgdHlwZS1hd2FyZSBvcHRpbWl6YXRpb25zXG4gICAgICAgICAgLy8gICAgdG8ga25vdyB3aGljaCBwcm9wZXJ0aWVzIHdlJ3JlIHNldHRpbmcuXG4gICAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4geyFTZXQ8IUluZXJ0Tm9kZT59IEEgY29weSBvZiB0aGlzIEluZXJ0Um9vdCdzIG1hbmFnZWQgbm9kZXMgc2V0LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUoc3RhcnROb2RlKSB7XG4gICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHN0YXJ0Tm9kZSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIuX3Zpc2l0Tm9kZShub2RlKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdGFydE5vZGUpKSB7XG4gICAgICAgICAgICAvLyBzdGFydE5vZGUgbWF5IGJlIGluIHNoYWRvdyBET00sIHNvIGZpbmQgaXRzIG5lYXJlc3Qgc2hhZG93Um9vdCB0byBnZXQgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHN0YXJ0Tm9kZTtcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R8dW5kZWZpbmVkfSAqL1xuICAgICAgICAgICAgdmFyIHJvb3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgcm9vdCA9IC8qKiBAdHlwZSB7IVNoYWRvd1Jvb3R9ICovbm9kZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvb3QpIHtcbiAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXJ0Tm9kZS5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgICAgICAgICAvLyBJbiBJRTExLCBpZiBhbiBlbGVtZW50IGlzIGFscmVhZHkgZm9jdXNlZCwgYW5kIHRoZW4gc2V0IHRvIHRhYmluZGV4PS0xXG4gICAgICAgICAgICAvLyBjYWxsaW5nIGJsdXIoKSB3aWxsIG5vdCBhY3R1YWxseSBtb3ZlIHRoZSBmb2N1cy5cbiAgICAgICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoaXMgd2UgY2FsbCBmb2N1cygpIG9uIHRoZSBib2R5IGluc3RlYWQuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Zpc2l0Tm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdmlzaXROb2RlKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG5cbiAgICAgICAgICAvLyBJZiBhIGRlc2NlbmRhbnQgaW5lcnQgcm9vdCBiZWNvbWVzIHVuLWluZXJ0LCBpdHMgZGVzY2VuZGFudHMgd2lsbCBzdGlsbCBiZSBpbmVydCBiZWNhdXNlIG9mXG4gICAgICAgICAgLy8gdGhpcyBpbmVydCByb290LCBzbyBhbGwgb2YgaXRzIG1hbmFnZWQgbm9kZXMgbmVlZCB0byBiZSBhZG9wdGVkIGJ5IHRoaXMgSW5lcnRSb290LlxuICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9yb290RWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgdGhpcy5fYWRvcHRJbmVydFJvb3QoZWxlbWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKGVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfbWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFuYWdlTm9kZShub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX2luZXJ0TWFuYWdlci5yZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuYWRkKGluZXJ0Tm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVW5yZWdpc3RlciB0aGUgZ2l2ZW4gbm9kZSB3aXRoIHRoaXMgSW5lcnRSb290IGFuZCB3aXRoIEluZXJ0TWFuYWdlci5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdW5tYW5hZ2VOb2RlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91bm1hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIuZGVyZWdpc3Rlcihub2RlLCB0aGlzKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXNbJ2RlbGV0ZSddKGluZXJ0Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGVudGlyZSBzdWJ0cmVlIHN0YXJ0aW5nIGF0IGBzdGFydE5vZGVgLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBzdGFydE5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlU3VidHJlZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VTdWJ0cmVlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLl91bm1hbmFnZU5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYSBkZXNjZW5kYW50IG5vZGUgaXMgZm91bmQgd2l0aCBhbiBgaW5lcnRgIGF0dHJpYnV0ZSwgYWRvcHQgaXRzIG1hbmFnZWQgbm9kZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUVsZW1lbnR9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX2Fkb3B0SW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZG9wdEluZXJ0Um9vdChub2RlKSB7XG4gICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3Qobm9kZSk7XG5cbiAgICAgICAgICAvLyBEdXJpbmcgaW5pdGlhbGlzYXRpb24gdGhpcyBpbmVydCByb290IG1heSBub3QgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgeWV0LFxuICAgICAgICAgIC8vIHNvIHJlZ2lzdGVyIGl0IG5vdyBpZiBuZWVkIGJlLlxuICAgICAgICAgIGlmICghaW5lcnRTdWJyb290KSB7XG4gICAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIuc2V0SW5lcnQobm9kZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0U3Vicm9vdC5tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc2F2ZWRJbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUoc2F2ZWRJbmVydE5vZGUubm9kZSk7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGJhY2sgdXNlZCB3aGVuIG11dGF0aW9uIG9ic2VydmVyIGRldGVjdHMgc3VidHJlZSBhZGRpdGlvbnMsIHJlbW92YWxzLCBvciBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbk11dGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbk11dGF0aW9uKHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICByZWNvcmRzLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcbiAgICAgICAgICAgICAgLy8gTWFuYWdlIGFkZGVkIG5vZGVzXG4gICAgICAgICAgICAgIHNsaWNlLmNhbGwocmVjb3JkLmFkZGVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAvLyBVbi1tYW5hZ2UgcmVtb3ZlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5yZW1vdmVkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bm1hbmFnZVN1YnRyZWUobm9kZSk7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ3RhYmluZGV4Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlLWluaXRpYWxpc2UgaW5lcnQgbm9kZSBpZiB0YWJpbmRleCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZSh0YXJnZXQpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgcmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdpbmVydCcgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbmV3IGluZXJ0IHJvb3QgaXMgYWRkZWQsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzIGFuZCBtYWtlIHN1cmUgaXQga25vd3MgYWJvdXQgdGhlXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBtYW5hZ2VkIG5vZGVzIGZyb20gdGhpcyBpbmVydCBzdWJyb290LlxuICAgICAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0U3Vicm9vdCA9IHRoaXMuX2luZXJ0TWFuYWdlci5nZXRJbmVydFJvb3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobWFuYWdlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuY29udGFpbnMobWFuYWdlZE5vZGUubm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRTdWJyb290Ll9tYW5hZ2VOb2RlKG1hbmFnZWROb2RlLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFuYWdlZE5vZGVzJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcy5fbWFuYWdlZE5vZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHBhcmFtIHs/c3RyaW5nfSBhcmlhSGlkZGVuICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRBcmlhSGlkZGVuJyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoYXJpYUhpZGRlbikge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IGFyaWFIaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7P3N0cmluZ30gKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydFJvb3Q7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogYEluZXJ0Tm9kZWAgaW5pdGlhbGlzZXMgYW5kIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgbm9kZS5cbiAgICAgKiBBIG5vZGUgaXMgaW5lcnQgaWYgaXQgaXMgYSBkZXNjZW5kYW50IG9mIG9uZSBvciBtb3JlIGluZXJ0IHJvb3QgZWxlbWVudHMuXG4gICAgICpcbiAgICAgKiBPbiBjb25zdHJ1Y3Rpb24sIGBJbmVydE5vZGVgIHNhdmVzIHRoZSBleGlzdGluZyBgdGFiaW5kZXhgIHZhbHVlIGZvciB0aGUgbm9kZSwgaWYgYW55LCBhbmRcbiAgICAgKiBlaXRoZXIgcmVtb3ZlcyB0aGUgYHRhYmluZGV4YCBhdHRyaWJ1dGUgb3Igc2V0cyBpdCB0byBgLTFgLCBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZWxlbWVudFxuICAgICAqIGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlIG9yIG5vdC5cbiAgICAgKlxuICAgICAqIGBJbmVydE5vZGVgIG1haW50YWlucyBhIHNldCBvZiBgSW5lcnRSb290YHMgd2hpY2ggYXJlIGRlc2NlbmRhbnRzIG9mIHRoaXMgYEluZXJ0Tm9kZWAuIFdoZW4gYW5cbiAgICAgKiBgSW5lcnRSb290YCBpcyBkZXN0cm95ZWQsIGFuZCBjYWxscyBgSW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIoKWAsIHRoZSBgSW5lcnRNYW5hZ2VyYCBub3RpZmllcyB0aGVcbiAgICAgKiBgSW5lcnROb2RlYCB2aWEgYHJlbW92ZUluZXJ0Um9vdCgpYCwgd2hpY2ggaW4gdHVybiBkZXN0cm95cyB0aGUgYEluZXJ0Tm9kZWAgaWYgbm8gYEluZXJ0Um9vdGBzXG4gICAgICogcmVtYWluIGluIHRoZSBzZXQuIE9uIGRlc3RydWN0aW9uLCBgSW5lcnROb2RlYCByZWluc3RhdGVzIHRoZSBzdG9yZWQgYHRhYmluZGV4YCBpZiBvbmUgZXhpc3RzLFxuICAgICAqIG9yIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIGlmIHRoZSBlbGVtZW50IGlzIGludHJpbnNpY2FsbHkgZm9jdXNhYmxlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnROb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIEEgZm9jdXNhYmxlIGVsZW1lbnQgdG8gYmUgbWFkZSBpbmVydC5cbiAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290IFRoZSBpbmVydCByb290IGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgaW5lcnQgbm9kZS5cbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUgeyFOb2RlfSAqL1xuICAgICAgICB0aGlzLl9ub2RlID0gbm9kZTtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyFTZXQ8IUluZXJ0Um9vdD59IFRoZSBzZXQgb2YgZGVzY2VuZGFudCBpbmVydCByb290cy5cbiAgICAgICAgICogICAgSWYgYW5kIG9ubHkgaWYgdGhpcyBzZXQgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2luZXJ0Um9vdHMgPSBuZXcgU2V0KFtpbmVydFJvb3RdKTtcblxuICAgICAgICAvKiogQHR5cGUgez9udW1iZXJ9ICovXG4gICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSBudWxsO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gU2F2ZSBhbnkgcHJpb3IgdGFiaW5kZXggaW5mbyBhbmQgbWFrZSB0aGlzIG5vZGUgdW50YWJiYWJsZVxuICAgICAgICB0aGlzLmVuc3VyZVVudGFiYmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLlxuICAgICAgICogVGhpcyBtYWtlcyB0aGUgbWFuYWdlZCBub2RlIGZvY3VzYWJsZSBhZ2FpbiBhbmQgZGVsZXRlcyBhbGwgb2YgdGhlIHByZXZpb3VzbHkgc3RvcmVkIHN0YXRlLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Tm9kZSwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9ub2RlICYmIHRoaXMuX25vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovdGhpcy5fbm9kZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYXZlZFRhYkluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIHRoaXMuX3NhdmVkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVzZSBgZGVsZXRlYCB0byByZXN0b3JlIG5hdGl2ZSBmb2N1cyBtZXRob2QuXG4gICAgICAgICAgICBpZiAodGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCkge1xuICAgICAgICAgICAgICBkZWxldGUgZWxlbWVudC5mb2N1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWUgbm90ZSBpbiBJbmVydFJvb3QuZGVzdHJ1Y3RvciBmb3Igd2h5IHdlIGNhc3QgdGhlc2UgbnVsbHMgdG8gQU5ZLlxuICAgICAgICAgIHRoaXMuX25vZGUgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIG9iamVjdCBpcyBvYnNvbGV0ZSBiZWNhdXNlIHRoZSBtYW5hZ2VkIG5vZGUgaXMgbm8gbG9uZ2VyIGluZXJ0LlxuICAgICAgICAgKiBJZiB0aGUgb2JqZWN0IGhhcyBiZWVuIGRlc3Ryb3llZCwgYW55IGF0dGVtcHQgdG8gYWNjZXNzIGl0IHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfdGhyb3dJZkRlc3Ryb3llZCcsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhyb3cgaWYgdXNlciB0cmllcyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBkZXN0cm95ZWQgSW5lcnROb2RlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4ge2Jvb2xlYW59ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZW5zdXJlVW50YWJiYWJsZScsXG5cblxuICAgICAgICAvKiogU2F2ZSB0aGUgZXhpc3RpbmcgdGFiaW5kZXggdmFsdWUgYW5kIG1ha2UgdGhlIG5vZGUgdW50YWJiYWJsZSBhbmQgdW5mb2N1c2FibGUgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVuc3VyZVVudGFiYmFibGUoKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMubm9kZTtcbiAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKGVsZW1lbnQsIF9mb2N1c2FibGVFbGVtZW50c1N0cmluZykpIHtcbiAgICAgICAgICAgIGlmICggLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleCA9PT0gLTEgJiYgdGhpcy5oYXNTYXZlZFRhYkluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9lbGVtZW50LnRhYkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5mb2N1cyA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYW5vdGhlciBpbmVydCByb290IHRvIHRoaXMgaW5lcnQgbm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cy5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnYWRkSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cy5hZGQoaW5lcnRSb290KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIGdpdmVuIGluZXJ0IHJvb3QgZnJvbSB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIElmIHRoZSBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMgYmVjb21lcyBlbXB0eSwgdGhpcyBub2RlIGlzIG5vIGxvbmdlciBpbmVydCxcbiAgICAgICAgICogc28gdGhlIG9iamVjdCBzaG91bGQgYmUgZGVzdHJveWVkLlxuICAgICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdFxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShpbmVydFJvb3QpO1xuICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXN0cm95ZWQnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gKC8qKiBAdHlwZSB7IUluZXJ0Tm9kZX0gKi90aGlzLl9kZXN0cm95ZWRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2hhc1NhdmVkVGFiSW5kZXgnLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHshTm9kZX0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdub2RlJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P251bWJlcn0gdGFiSW5kZXggKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdzYXZlZFRhYkluZGV4JyxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodGFiSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IHRhYkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9udW1iZXJ9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9zYXZlZFRhYkluZGV4O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE5vZGU7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogSW5lcnRNYW5hZ2VyIGlzIGEgcGVyLWRvY3VtZW50IHNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggbWFuYWdlcyBhbGwgaW5lcnQgcm9vdHMgYW5kIG5vZGVzLlxuICAgICAqXG4gICAgICogV2hlbiBhbiBlbGVtZW50IGJlY29tZXMgYW4gaW5lcnQgcm9vdCBieSBoYXZpbmcgYW4gYGluZXJ0YCBhdHRyaWJ1dGUgc2V0IGFuZC9vciBpdHMgYGluZXJ0YFxuICAgICAqIHByb3BlcnR5IHNldCB0byBgdHJ1ZWAsIHRoZSBgc2V0SW5lcnRgIG1ldGhvZCBjcmVhdGVzIGFuIGBJbmVydFJvb3RgIG9iamVjdCBmb3IgdGhlIGVsZW1lbnQuXG4gICAgICogVGhlIGBJbmVydFJvb3RgIGluIHR1cm4gcmVnaXN0ZXJzIGl0c2VsZiBhcyBtYW5hZ2luZyBhbGwgb2YgdGhlIGVsZW1lbnQncyBmb2N1c2FibGUgZGVzY2VuZGFudFxuICAgICAqIG5vZGVzIHZpYSB0aGUgYHJlZ2lzdGVyKClgIG1ldGhvZC4gVGhlIGBJbmVydE1hbmFnZXJgIGVuc3VyZXMgdGhhdCBhIHNpbmdsZSBgSW5lcnROb2RlYCBpbnN0YW5jZVxuICAgICAqIGlzIGNyZWF0ZWQgZm9yIGVhY2ggc3VjaCBub2RlLCB2aWEgdGhlIGBfbWFuYWdlZE5vZGVzYCBtYXAuXG4gICAgICovXG5cblxuICAgIHZhciBJbmVydE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7IURvY3VtZW50fSBkb2N1bWVudFxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydE1hbmFnZXIoZG9jdW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0TWFuYWdlcik7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBhcmd1bWVudDsgSW5lcnRNYW5hZ2VyIG5lZWRzIHRvIHdyYXAgYSBkb2N1bWVudC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7IURvY3VtZW50fSAqL1xuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgbWFuYWdlZCBub2RlcyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Tm9kZT59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBpbmVydCByb290cyBrbm93biB0byB0aGlzIEluZXJ0TWFuYWdlci4gSW4gYSBtYXAgdG8gYWxsb3cgbG9va2luZyB1cCBieSBOb2RlLlxuICAgICAgICAgKiBAdHlwZSB7IU1hcDwhTm9kZSwgIUluZXJ0Um9vdD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZlciBmb3IgbXV0YXRpb25zIG9uIGBkb2N1bWVudC5ib2R5YC5cbiAgICAgICAgICogQHR5cGUgeyFNdXRhdGlvbk9ic2VydmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl93YXRjaEZvckluZXJ0LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIEFkZCBpbmVydCBzdHlsZS5cbiAgICAgICAgYWRkSW5lcnRTdHlsZShkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBXYWl0IGZvciBkb2N1bWVudCB0byBiZSBsb2FkZWQuXG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5fb25Eb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9vbkRvY3VtZW50TG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYmUgYW4gaW5lcnQgcm9vdCBvciBub3QuXG4gICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSByb290XG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluZXJ0XG4gICAgICAgKi9cblxuXG4gICAgICBfY3JlYXRlQ2xhc3MoSW5lcnRNYW5hZ2VyLCBbe1xuICAgICAgICBrZXk6ICdzZXRJbmVydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJbmVydChyb290LCBpbmVydCkge1xuICAgICAgICAgIGlmIChpbmVydCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBpbmVydFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpbmVydFJvb3QgPSBuZXcgSW5lcnRSb290KHJvb3QsIHRoaXMpO1xuICAgICAgICAgICAgcm9vdC5zZXRBdHRyaWJ1dGUoJ2luZXJ0JywgJycpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290cy5zZXQocm9vdCwgaW5lcnRSb290KTtcbiAgICAgICAgICAgIC8vIElmIG5vdCBjb250YWluZWQgaW4gdGhlIGRvY3VtZW50LCBpdCBtdXN0IGJlIGluIGEgc2hhZG93Um9vdC5cbiAgICAgICAgICAgIC8vIEVuc3VyZSBpbmVydCBzdHlsZXMgYXJlIGFkZGVkIHRoZXJlLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9kb2N1bWVudC5ib2R5LmNvbnRhaW5zKHJvb3QpKSB7XG4gICAgICAgICAgICAgIHZhciBwYXJlbnQgPSByb290LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgYWRkSW5lcnRTdHlsZShwYXJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luZXJ0Um9vdHMuaGFzKHJvb3QpKSB7XG4gICAgICAgICAgICAgIC8vIGVsZW1lbnQgaXMgYWxyZWFkeSBub24taW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX2luZXJ0Um9vdCA9IHRoaXMuX2luZXJ0Um9vdHMuZ2V0KHJvb3QpO1xuICAgICAgICAgICAgX2luZXJ0Um9vdC5kZXN0cnVjdG9yKCk7XG4gICAgICAgICAgICB0aGlzLl9pbmVydFJvb3RzWydkZWxldGUnXShyb290KTtcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIEluZXJ0Um9vdCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gaW5lcnQgcm9vdCBlbGVtZW50LCBpZiBhbnkuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IGVsZW1lbnRcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Um9vdHx1bmRlZmluZWR9XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmVydFJvb3QoZWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9pbmVydFJvb3RzLmdldChlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBub2RlLlxuICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSB0aGUgbm9kZSBoYXMgYSBwcmV2aW91c2x5IGV4aXN0aW5nIGluZXJ0IHJvb3QsIHRoaXMgaW5lcnQgcm9vdCB3aWxsXG4gICAgICAgICAqIGJlIGFkZGVkIHRvIGl0cyBzZXQgb2YgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7IUluZXJ0Tm9kZX0gaW5lcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmIChpbmVydE5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm9kZSB3YXMgYWxyZWFkeSBpbiBhbiBpbmVydCBzdWJ0cmVlXG4gICAgICAgICAgICBpbmVydE5vZGUuYWRkSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZXJ0Tm9kZSA9IG5ldyBJbmVydE5vZGUobm9kZSwgaW5lcnRSb290KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuc2V0KG5vZGUsIGluZXJ0Tm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlLXJlZ2lzdGVyIHRoZSBnaXZlbiBJbmVydFJvb3QgYXMgbWFuYWdpbmcgdGhlIGdpdmVuIGluZXJ0IG5vZGUuXG4gICAgICAgICAqIFJlbW92ZXMgdGhlIGluZXJ0IHJvb3QgZnJvbSB0aGUgSW5lcnROb2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLCBhbmQgcmVtb3ZlIHRoZSBpbmVydFxuICAgICAgICAgKiBub2RlIGZyb20gdGhlIEluZXJ0TWFuYWdlcidzIHNldCBvZiBtYW5hZ2VkIG5vZGVzIGlmIGl0IGlzIGRlc3Ryb3llZC5cbiAgICAgICAgICogSWYgdGhlIG5vZGUgaXMgbm90IGN1cnJlbnRseSBtYW5hZ2VkLCB0aGlzIGlzIGVzc2VudGlhbGx5IGEgbm8tb3AuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICogQHJldHVybiB7P0luZXJ0Tm9kZX0gVGhlIHBvdGVudGlhbGx5IGRlc3Ryb3llZCBJbmVydE5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgbm9kZSwgaWYgYW55LlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdkZXJlZ2lzdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlcmVnaXN0ZXIobm9kZSwgaW5lcnRSb290KSB7XG4gICAgICAgICAgdmFyIGluZXJ0Tm9kZSA9IHRoaXMuX21hbmFnZWROb2Rlcy5nZXQobm9kZSk7XG4gICAgICAgICAgaWYgKCFpbmVydE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGluZXJ0Tm9kZS5yZW1vdmVJbmVydFJvb3QoaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaW5lcnROb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBkb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX29uRG9jdW1lbnRMb2FkZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRG9jdW1lbnRMb2FkZWQoKSB7XG4gICAgICAgICAgLy8gRmluZCBhbGwgaW5lcnQgcm9vdHMgaW4gZG9jdW1lbnQgYW5kIG1ha2UgdGhlbSBhY3R1YWxseSBpbmVydC5cbiAgICAgICAgICB2YXIgaW5lcnRFbGVtZW50cyA9IHNsaWNlLmNhbGwodGhpcy5fZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gQ29tbWVudCB0aGlzIG91dCB0byB1c2UgcHJvZ3JhbW1hdGljIEFQSSBvbmx5LlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyLm9ic2VydmUodGhpcy5fZG9jdW1lbnQuYm9keSB8fCB0aGlzLl9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICAgKiBAcGFyYW0geyFBcnJheTwhTXV0YXRpb25SZWNvcmQ+fSByZWNvcmRzXG4gICAgICAgICAqIEBwYXJhbSB7IU11dGF0aW9uT2JzZXJ2ZXJ9IHNlbGZcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3dhdGNoRm9ySW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3dhdGNoRm9ySW5lcnQocmVjb3Jkcywgc2VsZikge1xuICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY2hpbGRMaXN0JzpcbiAgICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2luZXJ0XScpKTtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgJ1tpbmVydF0nKSkge1xuICAgICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpbmVydEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGluZXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEluZXJ0KGluZXJ0RWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9LCBfdGhpcyk7XG4gICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgIT09ICdpbmVydCcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUVsZW1lbnR9ICovcmVjb3JkLnRhcmdldDtcbiAgICAgICAgICAgICAgICB2YXIgaW5lcnQgPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldEluZXJ0KHRhcmdldCwgaW5lcnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBJbmVydE1hbmFnZXI7XG4gICAgfSgpO1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgd2FsayB0aGUgY29tcG9zZWQgdHJlZSBmcm9tIHxub2RlfC5cbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICogQHBhcmFtIHsoZnVuY3Rpb24gKCFFbGVtZW50KSk9fSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudCB0cmF2ZXJzZWQsXG4gICAgICogICAgIGJlZm9yZSBkZXNjZW5kaW5nIGludG8gY2hpbGQgbm9kZXMuXG4gICAgICogQHBhcmFtIHs/U2hhZG93Um9vdD19IHNoYWRvd1Jvb3RBbmNlc3RvciBUaGUgbmVhcmVzdCBTaGFkb3dSb290IGFuY2VzdG9yLCBpZiBhbnkuXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGNvbXBvc2VkVHJlZVdhbGsobm9kZSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcikge1xuICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL25vZGU7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVzY2VuZCBpbnRvIG5vZGU6XG4gICAgICAgIC8vIElmIGl0IGhhcyBhIFNoYWRvd1Jvb3QsIGlnbm9yZSBhbGwgY2hpbGQgZWxlbWVudHMgLSB0aGVzZSB3aWxsIGJlIHBpY2tlZFxuICAgICAgICAvLyB1cCBieSB0aGUgPGNvbnRlbnQ+IG9yIDxzaGFkb3c+IGVsZW1lbnRzLiBEZXNjZW5kIHN0cmFpZ2h0IGludG8gdGhlXG4gICAgICAgIC8vIFNoYWRvd1Jvb3QuXG4gICAgICAgIHZhciBzaGFkb3dSb290ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC5zaGFkb3dSb290O1xuICAgICAgICBpZiAoc2hhZG93Um9vdCkge1xuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc2hhZG93Um9vdCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3QpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBkaXN0cmlidXRlZCBlbGVtZW50cyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnY29udGVudCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IC8qKiBAdHlwZSB7IUhUTUxDb250ZW50RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmaWVzIGlmIFNoYWRvd0RvbSB2MCBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIGRpc3RyaWJ1dGVkTm9kZXMgPSBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMgPyBjb250ZW50LmdldERpc3RyaWJ1dGVkTm9kZXMoKSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhkaXN0cmlidXRlZE5vZGVzW2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSA8c2xvdD4gZWxlbWVudCwgZGVzY2VuZCBpbnRvIGFzc2lnbmVkIG5vZGVzIC0gdGhlc2VcbiAgICAgICAgLy8gYXJlIGVsZW1lbnRzIGZyb20gb3V0c2lkZSB0aGUgc2hhZG93IHJvb3Qgd2hpY2ggYXJlIHJlbmRlcmVkIGluc2lkZSB0aGVcbiAgICAgICAgLy8gc2hhZG93IERPTS5cbiAgICAgICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09ICdzbG90Jykge1xuICAgICAgICAgIHZhciBzbG90ID0gLyoqIEB0eXBlIHshSFRNTFNsb3RFbGVtZW50fSAqL2VsZW1lbnQ7XG4gICAgICAgICAgLy8gVmVyaWZ5IGlmIFNoYWRvd0RvbSB2MSBpcyBzdXBwb3J0ZWQuXG4gICAgICAgICAgdmFyIF9kaXN0cmlidXRlZE5vZGVzID0gc2xvdC5hc3NpZ25lZE5vZGVzID8gc2xvdC5hc3NpZ25lZE5vZGVzKHsgZmxhdHRlbjogdHJ1ZSB9KSA6IFtdO1xuICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBfZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoX2Rpc3RyaWJ1dGVkTm9kZXNbX2ldLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzIG5laXRoZXIgdGhlIHBhcmVudCBvZiBhIFNoYWRvd1Jvb3QsIGEgPGNvbnRlbnQ+IGVsZW1lbnQsIGEgPHNsb3Q+XG4gICAgICAvLyBlbGVtZW50LCBub3IgYSA8c2hhZG93PiBlbGVtZW50IHJlY3Vyc2Ugbm9ybWFsbHkuXG4gICAgICB2YXIgY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAoY2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjb21wb3NlZFRyZWVXYWxrKGNoaWxkLCBjYWxsYmFjaywgc2hhZG93Um9vdEFuY2VzdG9yKTtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgc3R5bGUgZWxlbWVudCB0byB0aGUgbm9kZSBjb250YWluaW5nIHRoZSBpbmVydCBzcGVjaWZpYyBzdHlsZXNcbiAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5lcnRTdHlsZShub2RlKSB7XG4gICAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yKCdzdHlsZSNpbmVydC1zdHlsZSwgbGluayNpbmVydC1zdHlsZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luZXJ0LXN0eWxlJyk7XG4gICAgICBzdHlsZS50ZXh0Q29udGVudCA9ICdcXG4nICsgJ1tpbmVydF0ge1xcbicgKyAnICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4nICsgJyAgY3Vyc29yOiBkZWZhdWx0O1xcbicgKyAnfVxcbicgKyAnXFxuJyArICdbaW5lcnRdLCBbaW5lcnRdICoge1xcbicgKyAnICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuJyArICcgIHVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnfVxcbic7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG5cbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpKSB7XG4gICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICB2YXIgaW5lcnRNYW5hZ2VyID0gbmV3IEluZXJ0TWFuYWdlcihkb2N1bWVudCk7XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2luZXJ0Jywge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKiBAdGhpcyB7IUVsZW1lbnR9ICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGluZXJ0KSB7XG4gICAgICAgICAgaW5lcnRNYW5hZ2VyLnNldEluZXJ0KHRoaXMsIGluZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuXG59KSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbigoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzICovXG4gICAgY29uc3QgX2Jsb2NraW5nRWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfYWxyZWFkeUluZXJ0RWxlbWVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfdG9wRWxQYXJlbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3NpYmxpbmdzVG9SZXN0b3JlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3BhcmVudE1PID0gU3ltYm9sKCk7XG4gICAgLyogU3ltYm9scyBmb3IgcHJpdmF0ZSBzdGF0aWMgbWV0aG9kcyAqL1xuICAgIGNvbnN0IF90b3BDaGFuZ2VkID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3N3YXBJbmVydGVkU2libGluZyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pbmVydFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3Jlc3RvcmVJbmVydGVkU2libGluZ3MgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0UGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9nZXREaXN0cmlidXRlZENoaWxkcmVuID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2lzSW5lcnRhYmxlID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2hhbmRsZU11dGF0aW9ucyA9IFN5bWJvbCgpO1xuICAgIGNsYXNzIEJsb2NraW5nRWxlbWVudHNJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoZSBibG9ja2luZyBlbGVtZW50cy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYV0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnRzIG9mIHRoZSB0b3AgZWxlbWVudCwgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICogaXRzZWxmIHVwIHRvIGJvZHkuIFdoZW4gdG9wIGNoYW5nZXMsIHRoZSBvbGQgdG9wIG1pZ2h0IGhhdmUgYmVlbiByZW1vdmVkXG4gICAgICAgICAgICAgKiBmcm9tIHRoZSBkb2N1bWVudCwgc28gd2UgbmVlZCB0byBtZW1vaXplIHRoZSBpbmVydGVkIHBhcmVudHMnIHNpYmxpbmdzXG4gICAgICAgICAgICAgKiBpbiBvcmRlciB0byByZXN0b3JlIHRoZWlyIGluZXJ0ZW5lc3Mgd2hlbiB0b3AgY2hhbmdlcy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfYl0gPSBbXTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxlbWVudHMgdGhhdCBhcmUgYWxyZWFkeSBpbmVydCBiZWZvcmUgdGhlIGZpcnN0IGJsb2NraW5nIGVsZW1lbnQgaXNcbiAgICAgICAgICAgICAqIHB1c2hlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpc1tfY10gPSBuZXcgU2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb3JpZ2luYWwgaW5lcnRuZXNzLlxuICAgICAgICAgICAgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10odGhpc1tfdG9wRWxQYXJlbnRzXSk7XG4gICAgICAgICAgICAvLyBOb3RlIHdlIGRvbid0IHdhbnQgdG8gbWFrZSB0aGVzZSBwcm9wZXJ0aWVzIG51bGxhYmxlIG9uIHRoZSBjbGFzcyxcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZW4gd2UnZCBuZWVkIG5vbi1udWxsIGNhc3RzIGluIG1hbnkgcGxhY2VzLiBDYWxsaW5nIGEgbWV0aG9kIG9uXG4gICAgICAgICAgICAvLyBhIEJsb2NraW5nRWxlbWVudHMgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkZXN0cnVjdG9yIHdpbGwgcmVzdWx0IGluIGFuXG4gICAgICAgICAgICAvLyBleGNlcHRpb24uXG4gICAgICAgICAgICBjb25zdCBudWxsYWJsZSA9IHRoaXM7XG4gICAgICAgICAgICBudWxsYWJsZVtfYmxvY2tpbmdFbGVtZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX3RvcEVsUGFyZW50c10gPSBudWxsO1xuICAgICAgICAgICAgbnVsbGFibGVbX2FscmVhZHlJbmVydEVsZW1lbnRzXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHRvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1zID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c107XG4gICAgICAgICAgICByZXR1cm4gZWxlbXNbZWxlbXMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50ID09PSB0aGlzLnRvcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBpdCBmcm9tIHRoZSBzdGFjaywgd2UnbGwgYnJpbmcgaXQgdG8gdGhlIHRvcC5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfdG9wQ2hhbmdlZF0oZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpID0gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIC8vIFRvcCBjaGFuZ2VkIG9ubHkgaWYgdGhlIHJlbW92ZWQgZWxlbWVudCB3YXMgdGhlIHRvcCBlbGVtZW50LlxuICAgICAgICAgICAgaWYgKGkgPT09IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKHRoaXMudG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHBvcCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IHRoaXMudG9wO1xuICAgICAgICAgICAgdG9wICYmIHRoaXMucmVtb3ZlKHRvcCk7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGhhcyhlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tfYmxvY2tpbmdFbGVtZW50c10uaW5kZXhPZihlbGVtZW50KSAhPT0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgYGluZXJ0YCB0byBhbGwgZG9jdW1lbnQgZWxlbWVudHMgZXhjZXB0IHRoZSBuZXcgdG9wIGVsZW1lbnQsIGl0c1xuICAgICAgICAgKiBwYXJlbnRzLCBhbmQgaXRzIGRpc3RyaWJ1dGVkIGNvbnRlbnQuXG4gICAgICAgICAqL1xuICAgICAgICBbKF9hID0gX2Jsb2NraW5nRWxlbWVudHMsIF9iID0gX3RvcEVsUGFyZW50cywgX2MgPSBfYWxyZWFkeUluZXJ0RWxlbWVudHMsIF90b3BDaGFuZ2VkKV0obmV3VG9wKSB7XG4gICAgICAgICAgICBjb25zdCB0b0tlZXBJbmVydCA9IHRoaXNbX2FscmVhZHlJbmVydEVsZW1lbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IG9sZFBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgLy8gTm8gbmV3IHRvcCwgcmVzZXQgb2xkIHRvcCBpZiBhbnkuXG4gICAgICAgICAgICBpZiAoIW5ld1RvcCkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMpO1xuICAgICAgICAgICAgICAgIHRvS2VlcEluZXJ0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IFtdO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmVudHMgPSB0aGlzW19nZXRQYXJlbnRzXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTmV3IHRvcCBpcyBub3QgY29udGFpbmVkIGluIHRoZSBtYWluIGRvY3VtZW50IVxuICAgICAgICAgICAgaWYgKG5ld1BhcmVudHNbbmV3UGFyZW50cy5sZW5ndGggLSAxXS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05vbi1jb25uZWN0ZWQgZWxlbWVudCBjYW5ub3QgYmUgYSBibG9ja2luZyBlbGVtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXN0IGhlcmUgYmVjYXVzZSB3ZSBrbm93IHdlJ2xsIGNhbGwgX2luZXJ0U2libGluZ3Mgb24gbmV3UGFyZW50c1xuICAgICAgICAgICAgLy8gYmVsb3cuXG4gICAgICAgICAgICB0aGlzW190b3BFbFBhcmVudHNdID0gbmV3UGFyZW50cztcbiAgICAgICAgICAgIGNvbnN0IHRvU2tpcCA9IHRoaXNbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKG5ld1RvcCk7XG4gICAgICAgICAgICAvLyBObyBwcmV2aW91cyB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmICghb2xkUGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW19pbmVydFNpYmxpbmdzXShuZXdQYXJlbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgaSA9IG9sZFBhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGxldCBqID0gbmV3UGFyZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gRmluZCBjb21tb24gcGFyZW50LiBJbmRleCAwIGlzIHRoZSBlbGVtZW50IGl0c2VsZiAoc28gc3RvcCBiZWZvcmUgaXQpLlxuICAgICAgICAgICAgd2hpbGUgKGkgPiAwICYmIGogPiAwICYmIG9sZFBhcmVudHNbaV0gPT09IG5ld1BhcmVudHNbal0pIHtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXAgdGhlIHBhcmVudHMgdHJlZSB0aGVyZSBhcmUgMiBlbGVtZW50cyB0aGF0IGFyZSBzaWJsaW5ncywgc3dhcFxuICAgICAgICAgICAgLy8gdGhlIGluZXJ0ZWQgc2libGluZy5cbiAgICAgICAgICAgIGlmIChvbGRQYXJlbnRzW2ldICE9PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfc3dhcEluZXJ0ZWRTaWJsaW5nXShvbGRQYXJlbnRzW2ldLCBuZXdQYXJlbnRzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHBhcmVudHMgc2libGluZ3MgaW5lcnRuZXNzLlxuICAgICAgICAgICAgaSA+IDAgJiYgdGhpc1tfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10ob2xkUGFyZW50cy5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgICAvLyBNYWtlIG5ldyBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0LlxuICAgICAgICAgICAgaiA+IDAgJiYgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cy5zbGljZSgwLCBqKSwgdG9Ta2lwLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3dhcHMgaW5lcnRuZXNzIGJldHdlZW4gdHdvIHNpYmxpbmcgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3N3YXBJbmVydGVkU2libGluZ10ob2xkSW5lcnQsIG5ld0luZXJ0KSB7XG4gICAgICAgICAgICBjb25zdCBzaWJsaW5nc1RvUmVzdG9yZSA9IG9sZEluZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAvLyBvbGRJbmVydCBpcyBub3QgY29udGFpbmVkIGluIHNpYmxpbmdzIHRvIHJlc3RvcmUsIHNvIHdlIGhhdmUgdG8gY2hlY2tcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgaW5lcnRhYmxlIGFuZCBpZiBhbHJlYWR5IGluZXJ0LlxuICAgICAgICAgICAgaWYgKHRoaXNbX2lzSW5lcnRhYmxlXShvbGRJbmVydCkgJiYgIW9sZEluZXJ0LmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgb2xkSW5lcnQuaW5lcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmFkZChvbGRJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBuZXdJbmVydCB3YXMgYWxyZWFkeSBiZXR3ZWVuIHRoZSBzaWJsaW5ncyB0byByZXN0b3JlLCBpdCBtZWFucyBpdCBpc1xuICAgICAgICAgICAgLy8gaW5lcnRhYmxlIGFuZCBtdXN0IGJlIHJlc3RvcmVkLlxuICAgICAgICAgICAgaWYgKHNpYmxpbmdzVG9SZXN0b3JlLmhhcyhuZXdJbmVydCkpIHtcbiAgICAgICAgICAgICAgICBuZXdJbmVydC5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNpYmxpbmdzVG9SZXN0b3JlLmRlbGV0ZShuZXdJbmVydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdJbmVydFtfcGFyZW50TU9dID0gb2xkSW5lcnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgIG5ld0luZXJ0W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBzaWJsaW5nc1RvUmVzdG9yZTtcbiAgICAgICAgICAgIG9sZEluZXJ0W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXN0b3JlcyBvcmlnaW5hbCBpbmVydG5lc3MgdG8gdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfcmVzdG9yZUluZXJ0ZWRTaWJsaW5nc10oZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gZWxlbWVudFtfcGFyZW50TU9dO1xuICAgICAgICAgICAgICAgIG1vLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2libGluZ3MgPSBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaWJsaW5nIG9mIHNpYmxpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbmVydHMgdGhlIHNpYmxpbmdzIG9mIHRoZSBlbGVtZW50cyBleGNlcHQgdGhlIGVsZW1lbnRzIHRvIHNraXAuIFN0b3Jlc1xuICAgICAgICAgKiB0aGUgaW5lcnRlZCBzaWJsaW5ncyBpbnRvIHRoZSBlbGVtZW50J3Mgc3ltYm9sIGBfc2libGluZ3NUb1Jlc3RvcmVgLlxuICAgICAgICAgKiBQYXNzIGB0b0tlZXBJbmVydGAgdG8gY29sbGVjdCB0aGUgYWxyZWFkeSBpbmVydCBlbGVtZW50cy5cbiAgICAgICAgICogU2V0cyB0aGUgcHJvcGVydHkgYGluZXJ0YCBvdmVyIHRoZSBhdHRyaWJ1dGUgc2luY2UgdGhlIGluZXJ0IHNwZWNcbiAgICAgICAgICogZG9lc24ndCBzcGVjaWZ5IGlmIGl0IHNob3VsZCBiZSByZWZsZWN0ZWQuXG4gICAgICAgICAqIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2ludGVyYWN0aW9uLmh0bWwjaW5lcnRcbiAgICAgICAgICovXG4gICAgICAgIFtfaW5lcnRTaWJsaW5nc10oZWxlbWVudHMsIHRvU2tpcCwgdG9LZWVwSW5lcnQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBlbGVtZW50IGlzIG5vdCBhIERvY3VtZW50LCBzbyBpdCBtdXN0IGhhdmUgYSBwYXJlbnROb2RlLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gY2hpbGRyZW5bal07XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIGlucHV0IGVsZW1lbnQsIGlmIG5vdCBpbmVydGFibGUgb3IgdG8gYmUgc2tpcHBlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNpYmxpbmcgPT09IGVsZW1lbnQgfHwgIXRoaXNbX2lzSW5lcnRhYmxlXShzaWJsaW5nKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRvU2tpcCAmJiB0b1NraXAuaGFzKHNpYmxpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gU2hvdWxkIGJlIGNvbGxlY3RlZCBzaW5jZSBhbHJlYWR5IGluZXJ0ZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpYmxpbmdzIHRoYXQgd2VyZSBpbmVydGVkLlxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IGluZXJ0ZWRTaWJsaW5ncztcbiAgICAgICAgICAgICAgICAvLyBPYnNlcnZlIG9ubHkgaW1tZWRpYXRlIGNoaWxkcmVuIG11dGF0aW9ucyBvbiB0aGUgcGFyZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IG1vID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpc1tfaGFuZGxlTXV0YXRpb25zXS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50W19wYXJlbnRNT10gPSBtbztcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50VG9PYnNlcnZlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIHRoZSBTaGFkeURPTSBwb2x5ZmlsbCwgdGhlbiBvdXIgcGFyZW50IGNvdWxkIGJlIGFcbiAgICAgICAgICAgICAgICAvLyBzaGFkeSByb290LCB3aGljaCBpcyBhbiBvYmplY3QgdGhhdCBhY3RzIGxpa2UgYSBTaGFkb3dSb290LCBidXQgaXNuJ3RcbiAgICAgICAgICAgICAgICAvLyBhY3R1YWxseSBhIG5vZGUgaW4gdGhlIHJlYWwgRE9NLiBPYnNlcnZlIHRoZSByZWFsIERPTSBwYXJlbnQgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXliZVNoYWR5Um9vdCA9IHBhcmVudFRvT2JzZXJ2ZTtcbiAgICAgICAgICAgICAgICBpZiAobWF5YmVTaGFkeVJvb3QuX19zaGFkeSAmJiBtYXliZVNoYWR5Um9vdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRvT2JzZXJ2ZSA9IG1heWJlU2hhZHlSb290Lmhvc3Q7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vLm9ic2VydmUocGFyZW50VG9PYnNlcnZlLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBuZXdseSBhZGRlZC9yZW1vdmVkIG5vZGVzIGJ5IHRvZ2dsaW5nIHRoZWlyIGluZXJ0bmVzcy5cbiAgICAgICAgICogSXQgYWxzbyBjaGVja3MgaWYgdGhlIGN1cnJlbnQgdG9wIEJsb2NraW5nIEVsZW1lbnQgaGFzIGJlZW4gcmVtb3ZlZCxcbiAgICAgICAgICogbm90aWZ5aW5nIGFuZCByZW1vdmluZyBpdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfaGFuZGxlTXV0YXRpb25zXShtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzW190b3BFbFBhcmVudHNdO1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSB0YXJnZXQgaXMgYSBzaGFkb3dSb290LCBnZXQgaXRzIGhvc3QgYXMgd2Ugc2tpcCBzaGFkb3dSb290cyB3aGVuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0aW5nIF90b3BFbFBhcmVudHMuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0Lmhvc3QgfHwgbXV0YXRpb24udGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSA/XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMubGVuZ3RoIDpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5pbmRleE9mKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZENoaWxkID0gcGFyZW50c1tpZHggLSAxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmVydGVkU2libGluZ3MgPSBpbmVydGVkQ2hpbGRbX3NpYmxpbmdzVG9SZXN0b3JlXTtcbiAgICAgICAgICAgICAgICAvLyBUbyByZXN0b3JlLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24ucmVtb3ZlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBtdXRhdGlvbi5yZW1vdmVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBpbmVydGVkQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnRGV0ZWN0ZWQgcmVtb3ZhbCBvZiB0aGUgdG9wIEJsb2NraW5nIEVsZW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmVydGVkU2libGluZ3MuaGFzKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuZGVsZXRlKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRvIGluZXJ0LlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXV0YXRpb24uYWRkZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24uYWRkZWROb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBJbmVydCAmJiBzaWJsaW5nLmluZXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0ZWRTaWJsaW5ncy5hZGQoc2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgaWYgdGhlIGVsZW1lbnQgaXMgaW5lcnRhYmxlLlxuICAgICAgICAgKi9cbiAgICAgICAgW19pc0luZXJ0YWJsZV0oZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlID09PSAvXihzdHlsZXx0ZW1wbGF0ZXxzY3JpcHQpJC8udGVzdChlbGVtZW50LmxvY2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgbmV3UGFyZW50cyBvZiBhbiBlbGVtZW50LCBzdGFydGluZyBmcm9tIGVsZW1lbnRcbiAgICAgICAgICogKGluY2x1ZGVkKSB1cCB0byBgZG9jdW1lbnQuYm9keWAgKGV4Y2x1ZGVkKS5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0UGFyZW50c10oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgLy8gU3RvcCB0byBib2R5LlxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIC8vIFNraXAgc2hhZG93IHJvb3RzLlxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNoYWRvd0RvbSB2MVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDb2xsZWN0IHNsb3RzIGZyb20gZGVlcGVzdCBzbG90IHRvIHRvcC5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgPSBjdXJyZW50LmFzc2lnbmVkU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSBzZWFyY2ggb24gdGhlIHRvcCBzbG90LlxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcGFyZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIGRpc3RyaWJ1dGVkIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50J3Mgc2hhZG93IHJvb3QuXG4gICAgICAgICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYSBzaGFkb3cgcm9vdC5cbiAgICAgICAgICovXG4gICAgICAgIFtfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbl0oZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3Qgc2hhZG93Um9vdCA9IGVsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBsZXQgajtcbiAgICAgICAgICAgIGxldCBub2RlcztcbiAgICAgICAgICAgIGNvbnN0IHNsb3RzID0gc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzbG90Jyk7XG4gICAgICAgICAgICBpZiAoc2xvdHMubGVuZ3RoICYmIHNsb3RzWzBdLmFzc2lnbmVkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2xvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBzbG90c1tpXS5hc3NpZ25lZE5vZGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbm9kZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2Rlc1tqXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWRkKG5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBObyBuZWVkIHRvIHNlYXJjaCBmb3IgPGNvbnRlbnQ+LlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC4kYmxvY2tpbmdFbGVtZW50cyA9XG4gICAgICAgIG5ldyBCbG9ja2luZ0VsZW1lbnRzSW1wbCgpO1xufSkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJsb2NraW5nLWVsZW1lbnRzLmpzLm1hcCIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBzaG93LCBwaGFzZSkge1xyXG4gICAgaWYgKHBoYXNlKVxyXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7c2hvd30tJHtwaGFzZX1gO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7c2hvd31gO1xyXG59XHJcbmxldCBkdW1teTtcclxuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xyXG4gICAgLy8gVHJ5IHJlYWxseSBoYXJkIHRvIG1ha2Ugc3VyZSB0aGlzIGlzbid0IG9wdGltaXplZCBvdXQgYnkgYW55dGhpbmcuXHJcbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxyXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIGU7XHJcbn1cclxuLyoqXHJcbiAqIEEgaG9vayB0aGF0IGFkZHMgJiByZW1vdmVzIGNsYXNzIG5hbWVzIGluIGEgd2F5IHRoYXQgZmFjaWxpdGF0ZXMgcHJvcGVyIHRyYW5zaXRpb25zLlxyXG4gKlxyXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgY29udGFpbnMgdGhlIHByb3BzIHJlbGF0ZWQgZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIFRoZSBzZWNvbmQgYXJndW1lbnQgY29udGFpbnMgYW55IG90aGVyIHByb3BzIHlvdSBtaWdodCB3YW50IG1lcmdlZCBpbnRvIHRoZSBmaW5hbCBwcm9kdWN0ICh0aGVzZSBhcmUgbm90IHJlYWQgb3IgbWFuaXB1bGF0ZWQgb3IgYW55dGhpbmcgLS0gaXQncyBwdXJlbHkgc2hvcnRoYW5kIGFuZCBjYW4gYmUgb21pdHRlZCB3aXRoIGB7fWAgYW5kIHRoZW4geW91ciBvd24gYHVzZU1lcmdlZFByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wcyh7IG1lYXN1cmUsIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIG9uVHJhbnNpdGlvblVwZGF0ZSwgZXhpdFZpc2liaWxpdHksIGR1cmF0aW9uLCBzaG93LCByZWYgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcclxuICAgIGNvbnN0IFtwaGFzZSwgc2V0UGhhc2VdID0gdXNlU3RhdGUoYW5pbWF0ZU9uTW91bnQgPyBcImluaXRcIiA6IG51bGwpO1xyXG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKHNob3cgPT0gbnVsbCA/IG51bGwgOiBzaG93ID8gXCJlbnRlclwiIDogXCJleGl0XCIpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VXaWR0aCwgc2V0U3VyZmFjZVdpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VIZWlnaHQsIHNldFN1cmZhY2VIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3VyZmFjZVgsIHNldFN1cmZhY2VYXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VZLCBzZXRTdXJmYWNlWV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nV2lkdGgsIHNldFRyYW5zaXRpb25pbmdXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nSGVpZ2h0LCBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdYLCBzZXRUcmFuc2l0aW9uaW5nWF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWSwgc2V0VHJhbnNpdGlvbmluZ1ldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKHsgb25Mb2dpY2FsRGlyZWN0aW9uQ2hhbmdlOiBzZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyB9KTtcclxuICAgIGNvbnN0IG9uVHJhbnNpdGlvblVwZGF0ZVJlZiA9IHVzZVJlZihvblRyYW5zaXRpb25VcGRhdGUpO1xyXG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XHJcbiAgICBjb25zdCBkdXJhdGlvblJlZiA9IHVzZVJlZihkdXJhdGlvbik7XHJcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCB0b29FYXJseVZhbHVlUmVmID0gdXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgdG9vTGF0ZVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZ2V0RWxlbWVudCgpICYmIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IG9uVHJhbnNpdGlvblVwZGF0ZVJlZi5jdXJyZW50ID0gb25UcmFuc2l0aW9uVXBkYXRlOyB9LCBbb25UcmFuc2l0aW9uVXBkYXRlXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBwaGFzZVJlZi5jdXJyZW50ID0gcGhhc2U7IH0sIFtwaGFzZV0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGR1cmF0aW9uUmVmLmN1cnJlbnQgPSBkdXJhdGlvbjsgfSwgW2R1cmF0aW9uXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiYgcGhhc2UpXHJcbiAgICAgICAgICAgIG9uVHJhbnNpdGlvblVwZGF0ZVJlZi5jdXJyZW50Py4oZGlyZWN0aW9uLCBwaGFzZSk7XHJcbiAgICB9LCBbZGlyZWN0aW9uLCBwaGFzZV0pO1xyXG4gICAgLy8gRXZlcnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBcInRyYW5zaXRpb25cIiwgYWRkIG91ciB0cmFuc2l0aW9uIHRpbWVvdXQgdGltZW91dHNcclxuICAgIC8vIHRvIGNhdGNoIGFueSB0aW1lIG9uVHJhbnNpdGlvbkVuZCBmYWlscyB0byByZXBvcnQgZm9yIHdoYXRldmVyIHJlYXNvbiB0byBiZSBzYWZlXHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0RHVyYXRpb24gPSBkdXJhdGlvblJlZi5jdXJyZW50ID8/IDEwMDA7XHJcbiAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0sIDUwKTtcclxuICAgICAgICAgICAgdG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0b29MYXRlVGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XHJcbiAgICAgICAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIGlmICh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbcGhhc2VdKTtcclxuICAgIC8vIEFueSB0aW1lIFwic2hvd1wiIGNoYW5nZXMsIHVwZGF0ZSBvdXIgZGlyZWN0aW9uIGFuZCBwaGFzZS5cclxuICAgIC8vIEluIGFkZGl0aW9uLCBtZWFzdXJlIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGlmIHJlcXVlc3RlZC5cclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGdldEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiBzaG93ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQaGFzZSA9IHBoYXNlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIC8vIFN3YXAgb3VyIGRpcmVjdGlvblxyXG4gICAgICAgICAgICBpZiAoc2hvdylcclxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImVudGVyXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJleGl0XCIpO1xyXG4gICAgICAgICAgICBzZXRQaGFzZShwcmV2aW91c1BoYXNlID09PSBudWxsID8gXCJmaW5hbGl6ZVwiIDogXCJpbml0XCIpO1xyXG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gY3VycmVudFNpemVXaXRoVHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWCh4ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWSh5ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nV2lkdGgod2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1BoYXNlID09PSBcImZpbmFsaXplXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBnb2luZyB0byBiZSBtZXNzaW5nIHdpdGggdGhlIGFjdHVhbCBlbGVtZW50J3MgY2xhc3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlJ2xsIHdhbnQgYW4gZWFzeSB3YXkgdG8gcmVzdG9yZSBpdCBsYXRlci5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrdXAgPSBlbGVtZW50LmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tZW50ZXJgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWluaXRgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWZpbmFsaXplYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVXaXRob3V0VHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplV2l0aG91dFRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVgoeCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVkoeSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVdpZHRoKHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlSGVpZ2h0KGhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBiYWNrdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbc2hvdywgbWVhc3VyZSwgY2xhc3NCYXNlXSk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBpbml0LCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIHNjcmVlbiBpcyBwYWludGVkLFxyXG4gICAgLy8gY2hhbmdlIHRoZSBwaGFzZSB0byBcInRyYW5zaXRpb25cIiBhbmQgcmUtcmVuZGVyICgpLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGRpcmVjdGlvblJlZi5jdXJyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgICAgICAgICAgaWYgKHBoYXNlID09PSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gUHJlYWN0IGp1c3QgZmluaXNoZWQgcmVuZGVyaW5nIGluaXRcclxuICAgICAgICAgICAgICAgIC8vIE5vdyBzZXQgb3VyIHRyYW5zaXRpb24gc3R5bGUuXHJcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcInRyYW5zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVhc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3BoYXNlLCBtZWFzdXJlXSk7XHJcbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uSW5mbz8uaW5saW5lRGlyZWN0aW9uO1xyXG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uSW5mbz8uYmxvY2tEaXJlY3Rpb247XHJcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XHJcbiAgICBjb25zdCBzdXJmYWNlSW5saW5lSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VYIDogc3VyZmFjZVk7XHJcbiAgICBjb25zdCBzdXJmYWNlQmxvY2tJbnNldCA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gc3VyZmFjZVkgOiBzdXJmYWNlWDtcclxuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xyXG4gICAgY29uc3Qgc3VyZmFjZUJsb2NrU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gc3VyZmFjZUhlaWdodCA6IHN1cmZhY2VXaWR0aDtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ1ggOiB0cmFuc2l0aW9uaW5nWTtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZVNpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdXaWR0aCA6IHRyYW5zaXRpb25pbmdIZWlnaHQ7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nQmxvY2tTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nSGVpZ2h0IDogdHJhbnNpdGlvbmluZ1dpZHRoO1xyXG4gICAgbGV0IGFsbW9zdERvbmUgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHtcclxuICAgICAgICByZWYsXHJcbiAgICAgICAgc3R5bGU6IHJlbW92ZUVtcHR5KHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdOiBkdXJhdGlvbixcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXhgXTogc3VyZmFjZVgsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS15YF06IHN1cmZhY2VZLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2Utd2lkdGhgXTogc3VyZmFjZVdpZHRoLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaGVpZ2h0YF06IHN1cmZhY2VIZWlnaHQsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1pbmxpbmUtaW5zZXRgXTogc3VyZmFjZUlubGluZUluc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2staW5zZXRgXTogc3VyZmFjZUJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1pbmxpbmUtc2l6ZWBdOiBzdXJmYWNlSW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWJsb2NrLXNpemVgXTogc3VyZmFjZUJsb2NrU2l6ZSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXhgXTogdHJhbnNpdGlvbmluZ1gsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy15YF06IHRyYW5zaXRpb25pbmdZLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctd2lkdGhgXTogdHJhbnNpdGlvbmluZ1dpZHRoLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaGVpZ2h0YF06IHRyYW5zaXRpb25pbmdIZWlnaHQsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtaW5zZXRgXTogdHJhbnNpdGlvbmluZ0lubGluZUluc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctYmxvY2staW5zZXRgXTogdHJhbnNpdGlvbmluZ0Jsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtc2l6ZWBdOiB0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLXNpemVgXTogdHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZCxcclxuICAgICAgICAuLi4oeyBcImFyaWEtaGlkZGVuXCI6IHNob3cgPyB1bmRlZmluZWQgOiBcInRydWVcIiB9KSxcclxuICAgICAgICBjbGFzc05hbWU6IGNsc3goZGlyZWN0aW9uICYmIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIGRpcmVjdGlvbiksIGRpcmVjdGlvbiAmJiBwaGFzZSAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24sIHBoYXNlKSwgZXhpdFZpc2liaWxpdHkgPT0gXCJyZW1vdmVkXCIgJiYgYCR7Y2xhc3NCYXNlfS1yZW1vdmVkLW9uLWV4aXRgLCBleGl0VmlzaWJpbGl0eSA9PSBcInZpc2libGVcIiAmJiBgJHtjbGFzc0Jhc2V9LXZpc2libGUtb24tZXhpdGAsIGAke2NsYXNzQmFzZX0taW5saW5lLWRpcmVjdGlvbi0ke2lubGluZURpcmVjdGlvbiA/PyBcImx0clwifWAsIGAke2NsYXNzQmFzZX0tYmxvY2stZGlyZWN0aW9uLSR7YmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIn1gKSxcclxuICAgIH0pKTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGFsbW9zdERvbmUsIG90aGVyUHJvcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUVtcHR5KG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhvYmopLmZpbHRlcigoW18sIHZdKSA9PiB2ICE9IG51bGwpKTtcclxufVxyXG4vKipcclxuICogQSBjb21wb25lbnQgdGhhdCAqd3JhcHMgYW4gSFRNTEVsZW1lbnQgb3Igb3RoZXIgcmVmLWZvcndhcmRpbmcgY29tcG9uZW50KiBhbmQgYWxsb3dzIGl0IHRvIHVzZSBDU1MgdG8gdHJhbnNpdGlvbiBpbi9vdXQuXHJcbiAqIENvbWJpbmVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gaXQsIHRoZSBwcm9wcyBpdHMgY2hpbGQgaGFzLCBhbmQgdGhlIHByb3BzIG5lZWRlZCBmb3IgdGhlIENTUyB0cmFuc2l0aW9uLCBhbmQgcGFzc2VzIHRoZW1cclxuICogYWxsIHRvIHRoZSBjaGlsZCBlbGVtZW50IHlvdSBwcm92aWRlLlxyXG4gKlxyXG4gKiBUaGlzIGlzIHRoZSBtb3N0IGdlbmVyYWwgY29tcG9uZW50IHRoYXQgb3RoZXJzIHVzZSBhcyBhIGJhc2UuIEJ5IGRlZmF1bHQsIHRoaXMgY29tcG9uZW50IGJ5IGl0c2VsZiBkb2Vzbid0IGFjdHVhbGx5IGFkZCBhbnkgQ1NTIGNsYXNzZXMgdGhhdCBhbmltYXRlIGFueXRoaW5nIChsaWtlIG9wYWNpdHksIGZvciBleGFtcGxlKS5cclxuICogSXQgYWRkcyBjbGFzc2VzIGxpa2UgYHRyYW5zaXRpb24tZW50ZXItZmluYWxpemVgLCBidXQgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBlLmcuIGBmYWRlYCBjbGFzcyB0aGF0IHJlYWN0cyB0byBpdC5cclxuICpcclxuICogVXNlIHRoaXMgaWYgdGhlIG90aGVyLCBtb3JlIHNwZWNpYWxpemVkIFRyYW5zaXRpb24gY29tcG9uZW50cyBkb24ndCBmaXQgeW91ciBuZWVkcy5cclxuICpcclxuICogQGV4YW1wbGUgYDxUcmFuc2l0aW9uYWJsZSBzaG93PXtzaG93fSB7Li4udXNlQ3JlYXRlRmFkZVByb3BzKC4uLil9PjxkaXY+e2NoaWxkcmVufTwvZGl2PjwvVHJhbnNpdGlvbmFibGU+YFxyXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIHNob3c9e3Nob3d9PjxkaXYgey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbmFibGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHsgY2hpbGRyZW46IGNoaWxkLCBkdXJhdGlvbiwgY2xhc3NCYXNlLCBtZWFzdXJlLCBleGl0VmlzaWJpbGl0eSwgc2hvdywgb25UcmFuc2l0aW9uVXBkYXRlLCBhbmltYXRlT25Nb3VudCwgY2hpbGRNb3VudEJlaGF2aW9yLCAuLi5wcm9wcyB9LCByKSB7XHJcbiAgICBjb25zdCBbaGFzU2hvd25PbmNlLCBzZXRIYXNTaG93bk9uY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvdWxkU2V0SGFzU2hvd25PbmNlID0gKGhhc1Nob3duT25jZSA9PT0gZmFsc2UgJiYgY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiBzaG93ID09PSB0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzaG91bGRTZXRIYXNTaG93bk9uY2UpXHJcbiAgICAgICAgc2V0SGFzU2hvd25PbmNlKHRydWUpOyB9LCBbc2hvdWxkU2V0SGFzU2hvd25PbmNlXSk7XHJcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LXdoZW4tc2hvd2luZ1wiICYmICFzaG93KVxyXG4gICAgICAgIGNoaWxkID0gaChcImRpdlwiLCBudWxsKTtcclxuICAgIGlmIChjaGlsZE1vdW50QmVoYXZpb3IgPT09IFwibW91bnQtb24tc2hvd1wiICYmICFzaG93ICYmIGhhc1Nob3duT25jZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgY2hpbGQgPSBoKFwiZGl2XCIsIG51bGwpO1xyXG4gICAgaWYgKCFjaGlsZElzVk5vZGUoY2hpbGQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBUcmFuc2l0aW9uYWJsZSBjb21wb25lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGNvbXBvbmVudCBjaGlsZCAoZS5nLiBhIDxkaXY+LCBidXQgbm90IFxcXCJhIHN0cmluZ1xcXCIpLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBtZWFzdXJlLCBzaG93LCBhbmltYXRlT25Nb3VudCwgb25UcmFuc2l0aW9uVXBkYXRlLCByZWY6IHIsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzKTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKCkodHJhbnNpdGlvblByb3BzLCB7IC4uLmNoaWxkLnByb3BzLCByZWY6IGNoaWxkLnJlZiB9KTtcclxuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlZFdpdGhDaGlsZHJlbik7XHJcbn0pO1xyXG5mdW5jdGlvbiBjaGlsZElzVk5vZGUoY2hpbGQpIHtcclxuICAgIGlmICghY2hpbGQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaGlsZCAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoXCJwcm9wc1wiIGluIGNoaWxkKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBDbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcclxuICAgICAgICB9LFxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG5leHBvcnQgY29uc3QgQ2xpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXAoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cclxuICpcclxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcclxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxyXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxyXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2xpcCB9IGZyb20gXCIuL2NsaXBcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuO1xyXG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKENsaXAsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKlxyXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cclxuICpcclxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tY29sbGFwc2VgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cclxuICpcclxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSFcclxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2UoeyBjbGFzc0Jhc2UsIHNob3csIG1pbkJsb2NrU2l6ZSwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcIi4vY29sbGFwc2VcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIENvbGxhcHNlIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgQ29sbGFwc2VgIGBGYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKENvbGxhcHNlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHNsaWRlVGFyZ2V0SW5saW5lID8/IDEpO1xyXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYoc2xpZGVUYXJnZXRCbG9jayA/PyAwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldElubGluZSlcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IHNsaWRlVGFyZ2V0SW5saW5lOyB9LCBbc2xpZGVUYXJnZXRJbmxpbmVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldEJsb2NrKVxyXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBzbGlkZVRhcmdldEJsb2NrOyB9LCBbc2xpZGVUYXJnZXRCbG9ja10pO1xyXG4gICAgaWYgKHNsaWRlVGFyZ2V0SW5saW5lID09IDApXHJcbiAgICAgICAgc2xpZGVUYXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcclxuICAgIGlmIChzbGlkZVRhcmdldEJsb2NrID09IDApXHJcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXNsaWRlYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cclxuICpcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxyXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXHJcbiAqXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXHJcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogYHNsaWRlSW5saW5lPXsoaW5kZXggLSBzZWxlY3RlZEluZGV4KSAvIDEwfWAgd291bGQgbWFrZSB0aGUgZWxlbWVudCBsb29rIGxpa2UgaXQgZmFkZXMgb3V0IGJlZm9yZSBpdCB0cmF2ZWxzIHRvIGl0cyB0YXJnZXQgZGVzdGluYXRpb24uXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIHJldHVybiAodXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXpvb21gLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sIG90aGVyUHJvcHMpKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb20oeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgWm9vbSB9IGZyb20gXCIuL3pvb21cIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFpvb20gYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogVGhpcyBpcyBhbiBpZGVhbCB0aW1lIHRvIHVzZSB0aGUgbWluaW11bSBzaXplIFpvb20gcHJvcGVydGllcy5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChab29tLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBTbGlkZSBhbmQgWm9vbSBlZmZlY3RzLlxyXG4gKlxyXG4gKiBQcm9iYWJseSBiZXN0IGNvbWJpbmVkIHdpdGggYHVzZUNyZWF0ZUZhZGVQcm9wc2AgKG9yIGp1c3QgdXNpbmcgYSBgU2xpZGVab29tRmFkZWA/KS5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZUZhZGVab29tYCBgWm9vbWAgYEZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFNsaWRlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlWm9vbSB9IGZyb20gXCIuL3NsaWRlLXpvb21cIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBab29tLCBTbGlkZSwgYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogTm90ZSB0aGF0IHRoaXMgaXMgYmFzaWNhbGx5IGp1c3Qgc2hvcnRoYW5kIGZvciBzb21lIHByb3AgY3JlYXRpb24gYW5kIHByb3AgbWVyZ2luZyBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVgIGBab29tYCBgRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFNsaWRlWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gMTgwKTtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUlubGluZSlcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IGZsaXBBbmdsZUlubGluZTsgfSwgW2ZsaXBBbmdsZUlubGluZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxyXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBmbGlwQW5nbGVCbG9jazsgfSwgW2ZsaXBBbmdsZUJsb2NrXSk7XHJcbiAgICBpZiAoZmxpcEFuZ2xlSW5saW5lID09IDApXHJcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XHJcbiAgICBpZiAoZmxpcEFuZ2xlQmxvY2sgPT0gMClcclxuICAgICAgICBmbGlwQW5nbGVCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyhmbGlwQW5nbGVJbmxpbmUgPz8gMCl9ZGVnYCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyhmbGlwQW5nbGVCbG9jayA/PyAwKX1kZWdgLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cclxuICpcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYGZsaXBJbmxpbmVgIGFuZCBgZmxpcEJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKlxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxyXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGbGlwID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcCh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxpcC5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtjbGFzc0Jhc2UgPz8gXCJ0cmFuc2l0aW9uXCJ9LXN3YXAtY29udGFpbmVyLWlubGluZWApXHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXHJcbiAqXHJcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cclxuICpcclxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cclxuICpcclxuICogTG9uZyB3YXkgb2Ygc2F5aW5nLCBpZiB5b3UgZ2V0IGEgY3J5cHRpYyBlcnJvciB3aXRoIHRoaXMgY29tcG9uZW50LCBtYWtlIHN1cmUgaXQgaGFzIGEgc2luZ2xlIGA8ZGl2PmAgY2hpbGQgb3Igc29tZXRoaW5nLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW4sIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xyXG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGNsYXNzQmFzZSwgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHMoKSh0cmFuc2l0aW9uUHJvcHMsIGNoaWxkcmVuLnByb3BzKTtcclxuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbik7XHJcbn0pO1xyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiSVNfTk9OX0RJTUVOU0lPTkFMIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwib2xkQmVmb3JlRGlmZiIsIm9wdGlvbnMiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJkaWZmZWQiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwidW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwidHlwZSIsImhvb2tzIiwibGVuZ3RoIiwicHVzaCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsInVuZGVmaW5lZCIsIm5leHRWYWx1ZSIsImFjdGlvbiIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJhcmdzQ2hhbmdlZCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsInZub2RlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaG9vayIsImNvbXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsImkiLCJzaGFsbG93RGlmZmVycyIsImEiLCJiIiwiZm9yd2FyZFJlZiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInRvVmFsIiwibWl4IiwiayIsInkiLCJzdHIiLCJBcnJheSIsImlzQXJyYXkiLCJ0bXAiLCJ4IiwiYXJndW1lbnRzIiwiVW5zZXQiLCJnbG9iYWwiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJ3aW5kb3ciLCJzbGljZSIsIm1hdGNoZXMiLCJFbGVtZW50IiwibXNNYXRjaGVzU2VsZWN0b3IiLCJfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmciLCJqb2luIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsIlNldCIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsImJpbmQiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJ2YWx1ZSIsImRlc3RydWN0b3IiLCJkaXNjb25uZWN0IiwicmVtb3ZlQXR0cmlidXRlIiwiaW5lcnROb2RlIiwiX3VubWFuYWdlTm9kZSIsIm5vZGUiLCJzdGFydE5vZGUiLCJfdGhpczIiLCJjb21wb3NlZFRyZWVXYWxrIiwiX3Zpc2l0Tm9kZSIsImFjdGl2ZUVsZW1lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJjb250YWlucyIsInJvb3QiLCJub2RlVHlwZSIsIk5vZGUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwicGFyZW50Tm9kZSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsImVsZW1lbnQiLCJfYWRvcHRJbmVydFJvb3QiLCJjYWxsIiwiX21hbmFnZU5vZGUiLCJyZWdpc3RlciIsImFkZCIsImRlcmVnaXN0ZXIiLCJfdW5tYW5hZ2VTdWJ0cmVlIiwiX3RoaXMzIiwiaW5lcnRTdWJyb290IiwiZ2V0SW5lcnRSb290Iiwic2V0SW5lcnQiLCJtYW5hZ2VkTm9kZXMiLCJzYXZlZEluZXJ0Tm9kZSIsInJlY29yZHMiLCJzZWxmIiwicmVjb3JkIiwiYWRkZWROb2RlcyIsInJlbW92ZWROb2RlcyIsImF0dHJpYnV0ZU5hbWUiLCJtYW5hZ2VkTm9kZSIsImdldCIsInNldCIsImFyaWFIaWRkZW4iLCJJbmVydE5vZGUiLCJpbmVydFJvb3QiLCJfbm9kZSIsIl9vdmVycm9kZUZvY3VzTWV0aG9kIiwiX2luZXJ0Um9vdHMiLCJfc2F2ZWRUYWJJbmRleCIsIl9kZXN0cm95ZWQiLCJlbnN1cmVVbnRhYmJhYmxlIiwiX3Rocm93SWZEZXN0cm95ZWQiLCJkZXN0cm95ZWQiLCJFcnJvciIsInRhYkluZGV4IiwiaGFzU2F2ZWRUYWJJbmRleCIsImFkZEluZXJ0Um9vdCIsInJlbW92ZUluZXJ0Um9vdCIsInNpemUiLCJJbmVydE1hbmFnZXIiLCJfZG9jdW1lbnQiLCJNYXAiLCJfd2F0Y2hGb3JJbmVydCIsImFkZEluZXJ0U3R5bGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfb25Eb2N1bWVudExvYWRlZCIsImluZXJ0IiwiaGFzIiwicGFyZW50IiwiX2luZXJ0Um9vdCIsImluZXJ0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5lcnRFbGVtZW50IiwiX3RoaXMiLCJ1bnNoaWZ0Iiwic2hhZG93Um9vdEFuY2VzdG9yIiwic2hhZG93Um9vdCIsImxvY2FsTmFtZSIsImNvbnRlbnQiLCJkaXN0cmlidXRlZE5vZGVzIiwiZ2V0RGlzdHJpYnV0ZWROb2RlcyIsInNsb3QiLCJfZGlzdHJpYnV0ZWROb2RlcyIsImFzc2lnbmVkTm9kZXMiLCJmbGF0dGVuIiwiX2kiLCJjaGlsZCIsImZpcnN0Q2hpbGQiLCJuZXh0U2libGluZyIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJoYXNPd25Qcm9wZXJ0eSIsImgiLCJjbG9uZUVsZW1lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztPQUFPO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxJQUFNQSxHQUFBQSxHQUFZLEVB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QyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDOUYsTUFBTSxTQUFTLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQy9GLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0RyxNQUFNLFFBQVEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEcsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLE1BQTJCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRW5JLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNyRixNQUFNLFFBQVEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDckYsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxXQUFXLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxXQUFXLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFcEksTUFBTSxDQUFDLEdBQUcsUUFBUSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUM7TUFDL0MsTUFBTSxFQUFFLEdBQUcsUUFBUSxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUM7TUFFcEQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFTLEtBQUttTSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSTtVQUFFQSxhQUFLLFNBQVMsRUFBQyxlQUFlO2NBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Y0FBQ0E7a0JBQUtBLHdDQUFrQyxDQUFNLENBQU0sQ0FBSSxDQUFBO01BRXRaLE9BQU9BLGFBQUssU0FBUyxFQUFDLGNBQWM7VUFDaENBLCtCQUF5QjtVQUN6QkEsYUFBSyxTQUFTLEVBQUMsTUFBTTtjQUNqQkEsYUFBSyxTQUFTLEVBQUMsZUFBZTtrQkFDMUJBOztzQkFBOEVBLGVBQU8sT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFRO2tCQUNwTEE7O3NCQUE4RUEsZUFBTyxPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQVE7a0JBQ3BMQTs7c0JBQTREQSxlQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBUTtrQkFDaEtBOztzQkFBOERBLGVBQU8sT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFRO2tCQUNsS0E7O3NCQUF1Q0EsZUFBTyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFRO2tCQUN0SUE7O3NCQUF1Q0EsZUFBTyxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFRO2tCQUN0SUE7O3NCQUFnQkEsZUFBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLFVBQVUsR0FBRyxDQUFRLENBQzVGO2NBQ05BLElBQUMsQ0FBQyxJQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLElBQUksSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sSUFBSSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTztrQkFDaE5BLElBQUMsU0FBUztzQkFDTkEsYUFBSyxTQUFTLEVBQUMsTUFBTTswQkFDaEIsU0FBUyxDQUFDLENBQUMsQ0FBQzswQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDOzBCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNFLENBQ1o7Y0FDSEE7a0JBQU1BLGlCQUFNLElBQUksRUFBRTtVQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxJQUFJLEdBQUcsR0FBRzthQUNyQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxJQUFJLEdBQUcsR0FBRzthQUNuQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztVQUNqQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztVQUMzQixJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRzt1QkFDaEIsTUFBTSxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUc7c0JBQ2hDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxjQUFjLEdBQUc7b0JBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7U0FHakQsRUFBRTtxQkFDVSxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxJQUFJLEdBQUcsR0FBRzttQkFDOUMsT0FBTyxvQkFBb0IsWUFBWSxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sSUFBSSxHQUFHLEdBQUc7bUJBQ25FLE9BQU8sb0JBQW9CLFlBQVksR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHO2dCQUNqRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztnQkFDM0IsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUc7NkJBQ2hCLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHOzRCQUNoQyxNQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsY0FBYyxHQUFHOzBCQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7OztVQUl0RCxFQUFFO1NBQ0gsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUU7U0FDeEMsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUU7OztJQUc3QyxFQUFFLEdBQUcsQ0FBTyxDQUFPLENBQ1QsQ0FDSixDQUFBO0VBQ1YsQ0FBQztFQUVELFNBQVMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFpRjtNQUM3SSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHMU4sQ0FBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMxQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHQSxDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDdkMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBR0EsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3ZDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUdBLENBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUMvQyxNQUFNLGNBQWMsR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxjQUFjLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxVQUFVLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDMUksTUFBTSxXQUFXLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxXQUFXLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxPQUFPLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDcEksTUFBTSxlQUFlLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFdEksTUFBTSxDQUFDLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7TUFDckMsTUFBTSxFQUFFLEdBQUcsUUFBUSxHQUFHLFVBQVUsR0FBRyxNQUFNLENBQUM7TUFFMUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFTLEtBQUttTSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUk7VUFBRUEsYUFBSyxTQUFTLEVBQUMsZUFBZTtjQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2NBQUNBO2tCQUFLQSx3Q0FBa0MsQ0FBTSxDQUFNLENBQUksQ0FBQTtNQUVyUyxPQUFPQSxhQUFLLFNBQVMsRUFBQyxjQUFjO1VBQ2hDQSx1QkFBYTtVQUNiQSxhQUFLLFNBQVMsRUFBQyxNQUFNO2NBQ2pCQSxhQUFLLFNBQVMsRUFBQyxlQUFlO2tCQUMxQkE7O3NCQUE4RUEsZUFBTyxPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFJLENBQVE7a0JBQ3BMQTs7c0JBQThFQSxlQUFPLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBUTtrQkFDcExBOztzQkFBdUNBLGVBQU8sT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBUTtrQkFDdElBOztzQkFBdUNBLGVBQU8sT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBUTtrQkFDdElBOztzQkFBZ0JBLGVBQU8sT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBQyxVQUFVLEdBQUcsQ0FBUSxDQUM1RjtjQUNOQSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTztrQkFDM0lBLElBQUMsU0FBUztzQkFDTkEsYUFBSyxTQUFTLEVBQUMsTUFBTTswQkFDaEIsU0FBUyxDQUFDLENBQUMsQ0FBQzswQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDOzBCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNFLENBQ1o7Y0FDSEE7a0JBQU1BLGlCQUFNLElBQUksRUFBRTtVQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksT0FBTyxJQUFJLEdBQUcsR0FBRzthQUNyQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxJQUFJLEdBQUcsR0FBRzthQUNuQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztVQUNqQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztVQUMzQixJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsY0FBYyxHQUFHO29CQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7O1NBR2pELEVBQUU7Z0JBQ0ssWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLE9BQU8sSUFBSSxHQUFHLEdBQUc7bUJBQzlDLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxPQUFPLElBQUksR0FBRyxHQUFHO21CQUNuQyxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRztnQkFDakMsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUc7Z0JBQzNCLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxjQUFjLEdBQUc7MEJBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7O1VBSXRELEVBQUU7U0FDSCxFQUFFLFVBQVUsWUFBWSxDQUFDLFFBQVEsRUFBRTtTQUNuQyxFQUFFLFVBQVUsWUFBWSxDQUFDLFFBQVEsRUFBRTs7O0lBR3hDLEVBQUUsR0FBRyxDQUFPLENBQU8sQ0FDVCxDQUNKLENBQUE7RUFDVixDQUFDO0VBRUQsU0FBUyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQWlGO01BQzlJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEdBQUcxTixDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDM0MsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBR0EsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3hDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUdBLENBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUMvQyxNQUFNLGFBQWEsR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDeEksTUFBTSxhQUFhLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDeEksTUFBTSxlQUFlLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7OztNQUl0SSxNQUFNLENBQUMsR0FBRyxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQztNQUN2QyxNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQztNQUU1QyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQVMsS0FBS21NLElBQUMsQ0FBQyxJQUFDLElBQUksRUFBRSxZQUFZLEtBQUssQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztVQUFFQSxhQUFLLFNBQVMsRUFBQyxlQUFlO2NBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Y0FBQ0E7a0JBQUtBLHdDQUFrQyxDQUFNLENBQU0sQ0FBSSxDQUFBO01BRTFULE9BQU9BLGFBQUssU0FBUyxFQUFDLGNBQWM7VUFDaENBLHdCQUFjO1VBQ2RBLGFBQUssU0FBUyxFQUFDLE1BQU07Y0FDakJBLGFBQUssU0FBUyxFQUFDLGVBQWU7a0JBQzFCQTs7c0JBQTREQSxlQUFPLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUksQ0FBUTtrQkFDaEtBOztzQkFBOERBLGVBQU8sT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxDQUFRO2tCQUNsS0E7O3NCQUFnQkEsZUFBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLFVBQVUsR0FBRyxDQUFRLENBRTVGO2NBQ05BLElBQUMsQ0FBQyxJQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLElBQUksSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sSUFBSSxJQUFJO2tCQUNsSEEsSUFBQyxTQUFTO3NCQUNOQSxhQUFLLFNBQVMsRUFBQyxNQUFNOzBCQUNoQixTQUFTLENBQUMsQ0FBQyxDQUFDOzBCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUM7MEJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0UsQ0FDWjtjQUNIQTtrQkFBTUEsaUJBQU0sSUFBSSxFQUFFO1VBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUU7dUJBQ04sTUFBTTtzQkFDUCxNQUFNO29CQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDOztTQUV6QyxFQUFFO3FCQUNVLFlBQVk7MEJBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7NkJBQzNCLE1BQU0sb0JBQW9CLFlBQVk7NEJBQ3ZDLE1BQU0sb0JBQW9CLFlBQVk7Ozs7VUFJeEQsRUFBRTtTQUNILEVBQUUsZUFBZSxZQUFZO1NBQzdCLEVBQUUsZUFBZSxZQUFZOzs7SUFHbEMsRUFBRSxHQUFHLENBQU8sQ0FBTyxDQUNULENBQ0osQ0FBQTtFQUNWLENBQUM7RUFFRCxTQUFTLFlBQVksQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBaUY7TUFDakosTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRzFOLENBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUN4RCxNQUFNLGVBQWUsR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDdEksTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBR3ZCLENBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztNQUMvQyxNQUFNLENBQUMsR0FBRyxRQUFRLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQztNQUM3QyxNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsY0FBYyxHQUFHLFVBQVUsQ0FBQztNQUNsRCxNQUFNLFNBQVMsR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFbEksTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFTLEtBQUttTSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZO1VBQUVBLGFBQUssU0FBUyxFQUFDLGVBQWU7Y0FBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztjQUFDQTtrQkFBS0Esd0NBQWtDLENBQU0sQ0FBTSxDQUFJLENBQUE7TUFHbk8sUUFDSUEsYUFBSyxTQUFTLEVBQUMsY0FBYztVQUN6QkEsMkJBQWlCO1VBQ2pCQSxhQUFLLFNBQVMsRUFBQyxNQUFNO2NBQ2pCQSxhQUFLLFNBQVMsRUFBQyxlQUFlO2tCQUMxQkE7O3NCQUFxQkEsZUFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsR0FBSSxDQUFRO2tCQUMzRkE7O3NCQUFnQkEsZUFBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLFVBQVUsR0FBRyxDQUFRO2tCQUM5RkEsZ0pBQXVJO2tCQUN2SUE7O3NCQUFnREEsK0JBQXFCO29KQUErSCxDQUNsTTtjQUNOQSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVk7a0JBQ3pFQTtzQkFDSUEsSUFBQyxTQUFTOzBCQUNOQSxhQUFLLFNBQVMsRUFBQyxNQUFNOzhCQUNoQixTQUFTLENBQUMsQ0FBQyxDQUFDOzhCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUM7OEJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0UsQ0FDVixDQUNOO2NBQ0pBO2tCQUFNQSxpQkFDRCxJQUFJLEVBQUUsVUFBVSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxLQUFLLEdBQUcsa0JBQWtCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRTs7Ozs7OztXQU83TixFQUFFO2tCQUNLLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxZQUFZLElBQUksWUFBWSxJQUFJLEtBQUssR0FBRzswQkFDaEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxjQUFjLEdBQUc7NEJBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7O1lBSXRELEVBQUU7Ozs7SUFJVixFQUFFO0dBQ0gsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUU7R0FDeEMsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFPLENBQU8sQ0FFbkQsQ0FDSixFQUVUO0VBQ0wsQ0FBQztFQUlELFNBQVMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFpRjtNQUM3SSxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHMU4sQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3RDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUN4QyxNQUFNLFlBQVksR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDdEksTUFBTSxZQUFZLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxRQUFRLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFdEksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO01BQ2YsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO01BRWxCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxLQUFLbU0sSUFBQyxDQUFDLElBQUMsSUFBSSxFQUFFLFlBQVksS0FBSyxDQUFDLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO1VBQUVBLGFBQUssU0FBUyxFQUFDLGVBQWU7Y0FBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztjQUFDQTtrQkFBS0Esd0NBQWtDLENBQU0sQ0FBTSxDQUFJLENBQUE7TUFFbFQsT0FBT0EsYUFBSyxTQUFTLEVBQUMsY0FBYztVQUNoQ0EsdUJBQWE7VUFDYkEsYUFBSyxTQUFTLEVBQUMsTUFBTTtjQUNqQkEsYUFBSyxTQUFTLEVBQUMsZUFBZTtrQkFDMUJBOztzQkFBNkJBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBUTtrQkFDakdBOztzQkFBK0JBLGVBQU8sSUFBSSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBUSxDQUNqRztjQUNOQSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsS0FBSztrQkFDNUZBLElBQUMsU0FBUztzQkFDTkEsYUFBSyxTQUFTLEVBQUMsTUFBTTswQkFDaEIsU0FBUyxDQUFDLENBQUMsQ0FBQzswQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDOzBCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNFLENBQ1o7Y0FDSEE7a0JBQU1BLGlCQUFNLElBQUksRUFBRTtVQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFO3FCQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO29CQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztvQkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7O1NBRXpDLEVBQUU7cUJBQ1UsWUFBWSxDQUFDLFFBQVEsRUFBRTsyQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLFlBQVksQ0FBQyxRQUFRLEVBQUU7MEJBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG9CQUFvQixZQUFZLENBQUMsUUFBUSxFQUFFOzBCQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQzs7OztVQUk5QyxFQUFFO1NBQ0gsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUU7U0FDeEMsRUFBRSxlQUFlLFlBQVksQ0FBQyxRQUFRLEVBQUU7OztJQUc3QyxFQUFFLEdBQUcsQ0FBTyxDQUFPLENBQ1QsQ0FDSixDQUFBO0VBQ1YsQ0FBQztFQUVELHFCQUFxQixDQUFDO01BQ2xCRSxHQUFNLENBQUNGLElBQUMsSUFBSSxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDO0VBQ3ZELENBQUMsQ0FBQzs7Ozs7OyJ9
