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

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    originalDiffed === null || originalDiffed === void 0 ? void 0 : originalDiffed(vnode, ...args);
  };
  /*
  const originalBeforeCommit = (options as any)._commit;
  (options as any)._commit = (vnode: VNode, commitQueue: any, ...args: any[]) => {
      debugger;
      
      for (let [id, { effect, inputs }] of toRun) {
          const oldInputs = previousInputs.get(id);
          if (argsChanged(oldInputs, inputs)) {
              effect();
              previousInputs.set(id, inputs);
          }
      }

      originalBeforeCommit(vnode, commitQueue, ...args);
  }
  */

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
   * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can).
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

  function usePassiveState(onChange, initialValue) {
    var valueRef = s(initialValue === undefined ? Unset : initialValue);
    var cleanupCallbackRef = s(undefined); // Shared between "dependency changed" and "component unmounted".

    var onShouldCleanUp = F(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []);
    var getValue = F(() => valueRef.current === Unset ? undefined : valueRef.current, []); // The actual code the user calls to (possibly) run a new effect.

    var setValue = useStableCallback(arg => {
      var prevDep = valueRef.current === Unset ? undefined : valueRef.current;
      var dep = arg instanceof Function ? arg(prevDep) : arg;

      if (dep !== valueRef.current) {
        var _onChange;

        onShouldCleanUp();
        cleanupCallbackRef.current = (_onChange = onChange === null || onChange === void 0 ? void 0 : onChange(dep, prevDep)) !== null && _onChange !== void 0 ? _onChange : undefined;
        valueRef.current = dep;
      }
    }); // Handle running on mount/unmount

    h(() => {
      if (valueRef.current === Unset && initialValue !== undefined) {
        var _onChange2;

        cleanupCallbackRef.current = (_onChange2 = onChange === null || onChange === void 0 ? void 0 : onChange(initialValue, undefined)) !== null && _onChange2 !== void 0 ? _onChange2 : undefined;
        valueRef.current = initialValue;
      }

      return onShouldCleanUp;
    }, []);
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
    var [getElement, setElement] = usePassiveState(onElementChange, null); // Create a RefCallback that's fired when mounted 
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


  function useLogicalDirection() {
    // TODO: There's no way to refresh which writing mode we have once mounted.
    // If the writing mode changes, the whole component needs to 
    // mount/unmount because (more-or-less in order of importance)
    //   A. There's no way to watch for CSS style changes
    //   B. Calling getComputedStyle after every render for every element gets expensive fast and
    //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
    //      (Those that do will need to mount and unmount the component that uses it)
    //
    // Maybe there could be a context object that can be used to remotely update all components that use this hook?
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
            var _element$parentElemen;

            console.assert(element.isConnected);
            element = (_element$parentElemen = element.parentElement) !== null && _element$parentElemen !== void 0 ? _element$parentElemen : element;
            var computedStyles = window.getComputedStyle(element);
            var w = computedStyles.writingMode;
            var t = computedStyles.textOrientation;
            var d = computedStyles.direction;
            setWritingMode(w || "horizontal-tb");
            setDirection(d || "rtl");
            setTextOrientation(t || "mixed");
          });
        }
      }
    });
    var [writingMode, setWritingMode] = l(null);
    var [direction, setDirection] = l(null);
    var [textOrientation, setTextOrientation] = l(null);
    var writingModeRef = s(writingMode);
    var directionRef = s(direction);
    var textOrientationRef = s(textOrientation);
    h(() => {
      writingModeRef.current = writingMode;
    }, [writingMode]);
    h(() => {
      directionRef.current = direction;
    }, [direction]);
    h(() => {
      textOrientationRef.current = textOrientation;
    }, [textOrientation]);
    var getLogicalDirection = F(() => {
      var _direction;

      var writingMode = writingModeRef.current;
      var direction = directionRef.current;
      var textOrientation = textOrientationRef.current;
      if (!writingMode || !direction || !textOrientation) return null;
      if (textOrientation == "upright") direction = "ltr";
      return _objectSpread2({}, WritingModes[writingMode !== null && writingMode !== void 0 ? writingMode : "horizontal-tb"][(_direction = direction) !== null && _direction !== void 0 ? _direction : "ltr"]);
    }, [writingModeRef, directionRef, textOrientationRef]);
    var convertToLogicalOrientation = F((elementOrientation, direction) => {
      var _direction2, _direction3;

      (_direction2 = direction) !== null && _direction2 !== void 0 ? _direction2 : direction = getLogicalDirection();
      if (((_direction3 = direction) === null || _direction3 === void 0 ? void 0 : _direction3.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, [getLogicalDirection]);
    var convertToPhysicalOrientation = F((elementOrientation, direction) => {
      var _direction4;

      (_direction4 = direction) !== null && _direction4 !== void 0 ? _direction4 : direction = getLogicalDirection();

      if (elementOrientation == "inline") {
        var _direction5;

        if (((_direction5 = direction) === null || _direction5 === void 0 ? void 0 : _direction5.inlineOrientation) == "horizontal") return "horizontal";
        return "vertical";
      } else {
        var _direction6;

        if (((_direction6 = direction) === null || _direction6 === void 0 ? void 0 : _direction6.blockOrientation) == "vertical") return "vertical";
        return "horizontal";
      }
    }, [getLogicalDirection]);
    var convertElementSize = F((elementSize, direction) => {
      var _direction7;

      (_direction7 = direction) !== null && _direction7 !== void 0 ? _direction7 : direction = getLogicalDirection();

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
        var offsetInlineInset = elementSize["offset".concat(capitalize(f1))] + (!f2 ? 0 : elementSize["offset".concat(capitalize(f2))]);
        var clientBlockInset = elementSize["client".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["client".concat(capitalize(f4))]);
        var scrollBlockInset = elementSize["scroll".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["scroll".concat(capitalize(f4))]);
        var offsetBlockInset = elementSize["offset".concat(capitalize(f3))] + (!f4 ? 0 : elementSize["offset".concat(capitalize(f4))]);
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
    }, [getLogicalDirection]);
    return {
      useLogicalDirectionProps: useRefElementProps,
      getElement,
      getLogicalDirection,
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
      useRefElementProps,
      getElement
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
    var {
      getLogicalDirection,
      useLogicalDirectionProps
    } = useLogicalDirection();
    var logicalDirection = getLogicalDirection();
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
    var inlineDirection = logicalDirection === null || logicalDirection === void 0 ? void 0 : logicalDirection.inlineDirection;
    var blockDirection = logicalDirection === null || logicalDirection === void 0 ? void 0 : logicalDirection.blockDirection;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJhbmRvbS1pZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1iZWZvcmUtbGF5b3V0LWVmZmVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGFibGUtZ2V0dGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YWJsZS1jYWxsYmFjay5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1wYXNzaXZlLXN0YXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vdHJhbnNpdGlvbmFibGUuanMiLCIuLi9jbGlwLmpzIiwiLi4vZmFkZS5qcyIsIi4uL2NsaXAtZmFkZS5qcyIsIi4uL2NvbGxhcHNlLmpzIiwiLi4vY29sbGFwc2UtZmFkZS5qcyIsIi4uL3NsaWRlLmpzIiwiLi4vc2xpZGUtZmFkZS5qcyIsIi4uL3pvb20uanMiLCIuLi96b29tLWZhZGUuanMiLCIuLi9zbGlkZS16b29tLmpzIiwiLi4vc2xpZGUtem9vbS1mYWRlLmpzIiwiLi4vZmxpcC5qcyIsIi4uL3N3YXBwYWJsZS5qcyIsIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQscixvLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQscixvLGY9e307Zm9yKG8gaW4gdSlcImtleVwiPT1vP3Q9dVtvXTpcInJlZlwiPT1vP3I9dVtvXTpmW29dPXVbb107aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IobyBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW29dJiYoZltvXT1sLmRlZmF1bHRQcm9wc1tvXSk7cmV0dXJuIHkobCxmLHQscixudWxsKX1mdW5jdGlvbiB5KG4saSx0LHIsbyl7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpyLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om99O3JldHVybiBudWxsPT1vJiZudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxvIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigobz1sLmRlYm91bmNlUmVuZGVyaW5nKXx8cikoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LHIsbztuLl9fZCYmKHI9KHQ9KGw9bikuX192KS5fX2UsKG89bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKG8sdCxpLGwuX19uLHZvaWQgMCE9PW8ub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tyXTpudWxsLHUsbnVsbD09cj9rKHQpOnIsdC5fX2gpLHoodSx0KSx0Ll9fZSE9ciYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQscixvLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LHIsbyxmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZfLl9faz09PXAuX19rP18uX19kPXM9eChfLHMsbik6cz1QKG4sXyxwLHcsYixzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKSk6cyYmcC5fX2U9PXMmJnMucGFyZW50Tm9kZSE9biYmKHM9ayhwKSl9Zm9yKHUuX19lPW0saD1BO2gtLTspbnVsbCE9d1toXSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUudHlwZSYmbnVsbCE9d1toXS5fX2UmJndbaF0uX19lPT11Ll9fZCYmKHUuX19kPWsoaSxoKzEpKSxOKHdbaF0sd1toXSkpO2lmKGcpZm9yKGg9MDtoPGcubGVuZ3RoO2grKylNKGdbaF0sZ1srK2hdLGdbKytoXSl9ZnVuY3Rpb24geChuLGwsdSl7Zm9yKHZhciBpLHQ9bi5fX2sscj0wO3QmJnI8dC5sZW5ndGg7cisrKShpPXRbcl0pJiYoaS5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgaS50eXBlP3goaSxsLHUpOlAodSxpLGksdCxpLl9fZSxsKSk7cmV0dXJuIGx9ZnVuY3Rpb24gQShuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KEFycmF5LmlzQXJyYXkobik/bi5zb21lKGZ1bmN0aW9uKG4pe0EobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBQKG4sbCx1LGksdCxyKXt2YXIgbyxmLGU7aWYodm9pZCAwIT09bC5fX2Qpbz1sLl9fZCxsLl9fZD12b2lkIDA7ZWxzZSBpZihudWxsPT11fHx0IT1yfHxudWxsPT10LnBhcmVudE5vZGUpbjppZihudWxsPT1yfHxyLnBhcmVudE5vZGUhPT1uKW4uYXBwZW5kQ2hpbGQodCksbz1udWxsO2Vsc2V7Zm9yKGY9cixlPTA7KGY9Zi5uZXh0U2libGluZykmJmU8aS5sZW5ndGg7ZSs9MilpZihmPT10KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUodCxyKSxvPXJ9cmV0dXJuIHZvaWQgMCE9PW8/bzp0Lm5leHRTaWJsaW5nfWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgcjtmb3IociBpbiB1KVwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxyIGluIGx8fEgobixyLG51bGwsdVtyXSxpKTtmb3IociBpbiBsKXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGxbcl18fFwiY2hpbGRyZW5cIj09PXJ8fFwia2V5XCI9PT1yfHxcInZhbHVlXCI9PT1yfHxcImNoZWNrZWRcIj09PXJ8fHVbcl09PT1sW3JdfHxIKG4scixsW3JdLHVbcl0saSl9ZnVuY3Rpb24gJChuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPW51bGw9PXU/XCJcIjpcIm51bWJlclwiIT10eXBlb2YgdXx8cy50ZXN0KGwpP3U6dStcInB4XCJ9ZnVuY3Rpb24gSChuLGwsdSxpLHQpe3ZhciByO246aWYoXCJzdHlsZVwiPT09bClpZihcInN0cmluZ1wiPT10eXBlb2YgdSluLnN0eWxlLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpJiYobi5zdHlsZS5jc3NUZXh0PWk9XCJcIiksaSlmb3IobCBpbiBpKXUmJmwgaW4gdXx8JChuLnN0eWxlLGwsXCJcIik7aWYodSlmb3IobCBpbiB1KWkmJnVbbF09PT1pW2xdfHwkKG4uc3R5bGUsbCx1W2xdKX1lbHNlIGlmKFwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdKXI9bCE9PShsPWwucmVwbGFjZSgvQ2FwdHVyZSQvLFwiXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG4/bC50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOmwuc2xpY2UoMiksbi5sfHwobi5sPXt9KSxuLmxbbCtyXT11LHU/aXx8bi5hZGRFdmVudExpc3RlbmVyKGwscj9UOkkscik6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwscj9UOkkscik7ZWxzZSBpZihcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1sKXtpZih0KWw9bC5yZXBsYWNlKC94bGlua1tIOmhdLyxcImhcIikucmVwbGFjZSgvc05hbWUkLyxcInNcIik7ZWxzZSBpZihcImhyZWZcIiE9PWwmJlwibGlzdFwiIT09bCYmXCJmb3JtXCIhPT1sJiZcInRhYkluZGV4XCIhPT1sJiZcImRvd25sb2FkXCIhPT1sJiZsIGluIG4pdHJ5e25bbF09bnVsbD09dT9cIlwiOnU7YnJlYWsgbn1jYXRjaChuKXt9XCJmdW5jdGlvblwiPT10eXBlb2YgdXx8KG51bGwhPXUmJighMSE9PXV8fFwiYVwiPT09bFswXSYmXCJyXCI9PT1sWzFdKT9uLnNldEF0dHJpYnV0ZShsLHUpOm4ucmVtb3ZlQXR0cmlidXRlKGwpKX19ZnVuY3Rpb24gSShuKXt0aGlzLmxbbi50eXBlKyExXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gVChuKXt0aGlzLmxbbi50eXBlKyEwXShsLmV2ZW50P2wuZXZlbnQobik6bil9ZnVuY3Rpb24gaihuLHUsaSx0LHIsbyxmLGUsYyl7dmFyIHMsaCx2LHkscCxrLGIsbSxnLHgsQSxQPXUudHlwZTtpZih2b2lkIDAhPT11LmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPWkuX19oJiYoYz1pLl9faCxlPXUuX19lPWkuX19lLHUuX19oPW51bGwsbz1bZV0pLChzPWwuX19iKSYmcyh1KTt0cnl7bjppZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBQKXtpZihtPXUucHJvcHMsZz0ocz1QLmNvbnRleHRUeXBlKSYmdFtzLl9fY10seD1zP2c/Zy5wcm9wcy52YWx1ZTpzLl9fOnQsaS5fX2M/Yj0oaD11Ll9fYz1pLl9fYykuX189aC5fX0U6KFwicHJvdG90eXBlXCJpbiBQJiZQLnByb3RvdHlwZS5yZW5kZXI/dS5fX2M9aD1uZXcgUChtLHgpOih1Ll9fYz1oPW5ldyBfKG0seCksaC5jb25zdHJ1Y3Rvcj1QLGgucmVuZGVyPU8pLGcmJmcuc3ViKGgpLGgucHJvcHM9bSxoLnN0YXRlfHwoaC5zdGF0ZT17fSksaC5jb250ZXh0PXgsaC5fX249dCx2PWguX19kPSEwLGguX19oPVtdKSxudWxsPT1oLl9fcyYmKGguX19zPWguc3RhdGUpLG51bGwhPVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiYoaC5fX3M9PWguc3RhdGUmJihoLl9fcz1hKHt9LGguX19zKSksYShoLl9fcyxQLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhtLGguX19zKSkpLHk9aC5wcm9wcyxwPWguc3RhdGUsdiludWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbnVsbCE9aC5jb21wb25lbnRXaWxsTW91bnQmJmguY29tcG9uZW50V2lsbE1vdW50KCksbnVsbCE9aC5jb21wb25lbnREaWRNb3VudCYmaC5fX2gucHVzaChoLmNvbXBvbmVudERpZE1vdW50KTtlbHNle2lmKG51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZtIT09eSYmbnVsbCE9aC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZoLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobSx4KSwhaC5fX2UmJm51bGwhPWguc2hvdWxkQ29tcG9uZW50VXBkYXRlJiYhMT09PWguc2hvdWxkQ29tcG9uZW50VXBkYXRlKG0saC5fX3MseCl8fHUuX192PT09aS5fX3Ype2gucHJvcHM9bSxoLnN0YXRlPWguX19zLHUuX192IT09aS5fX3YmJihoLl9fZD0hMSksaC5fX3Y9dSx1Ll9fZT1pLl9fZSx1Ll9faz1pLl9fayx1Ll9fay5mb3JFYWNoKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksaC5fX2gubGVuZ3RoJiZmLnB1c2goaCk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShtLGguX19zLHgpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUoeSxwLGspfSl9aC5jb250ZXh0PXgsaC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsKHM9bC5fX3IpJiZzKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bixzPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLGguc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJih0PWEoYSh7fSx0KSxoLmdldENoaWxkQ29udGV4dCgpKSksdnx8bnVsbD09aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8KGs9aC5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh5LHApKSxBPW51bGwhPXMmJnMudHlwZT09PWQmJm51bGw9PXMua2V5P3MucHJvcHMuY2hpbGRyZW46cyx3KG4sQXJyYXkuaXNBcnJheShBKT9BOltBXSx1LGksdCxyLG8sZixlLGMpLGguYmFzZT11Ll9fZSx1Ll9faD1udWxsLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGImJihoLl9fRT1oLl9fPW51bGwpLGguX19lPSExfWVsc2UgbnVsbD09byYmdS5fX3Y9PT1pLl9fdj8odS5fX2s9aS5fX2ssdS5fX2U9aS5fX2UpOnUuX19lPUwoaS5fX2UsdSxpLHQscixvLGYsYyk7KHM9bC5kaWZmZWQpJiZzKHUpfWNhdGNoKG4pe3UuX192PW51bGwsKGN8fG51bGwhPW8pJiYodS5fX2U9ZSx1Ll9faD0hIWMsb1tvLmluZGV4T2YoZSldPW51bGwpLGwuX19lKG4sdSxpKX19ZnVuY3Rpb24geihuLHUpe2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTChsLHUsaSx0LHIsbyxmLGMpe3ZhciBzLGEsdix5PWkucHJvcHMscD11LnByb3BzLGQ9dS50eXBlLF89MDtpZihcInN2Z1wiPT09ZCYmKHI9ITApLG51bGwhPW8pZm9yKDtfPG8ubGVuZ3RoO18rKylpZigocz1vW19dKSYmKHM9PT1sfHwoZD9zLmxvY2FsTmFtZT09ZDozPT1zLm5vZGVUeXBlKSkpe2w9cyxvW19dPW51bGw7YnJlYWt9aWYobnVsbD09bCl7aWYobnVsbD09PWQpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHApO2w9cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZCxwLmlzJiZwKSxvPW51bGwsYz0hMX1pZihudWxsPT09ZCl5PT09cHx8YyYmbC5kYXRhPT09cHx8KGwuZGF0YT1wKTtlbHNle2lmKG89byYmbi5jYWxsKGwuY2hpbGROb2RlcyksYT0oeT1pLnByb3BzfHxlKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PXAuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHk9e30sXz0wO188bC5hdHRyaWJ1dGVzLmxlbmd0aDtfKyspeVtsLmF0dHJpYnV0ZXNbX10ubmFtZV09bC5hdHRyaWJ1dGVzW19dLnZhbHVlOyh2fHxhKSYmKHYmJihhJiZ2Ll9faHRtbD09YS5fX2h0bWx8fHYuX19odG1sPT09bC5pbm5lckhUTUwpfHwobC5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX1pZihDKGwscCx5LHIsYyksdil1Ll9faz1bXTtlbHNlIGlmKF89dS5wcm9wcy5jaGlsZHJlbix3KGwsQXJyYXkuaXNBcnJheShfKT9fOltfXSx1LGksdCxyJiZcImZvcmVpZ25PYmplY3RcIiE9PWQsbyxmLG8/b1swXTppLl9fayYmayhpLDApLGMpLG51bGwhPW8pZm9yKF89by5sZW5ndGg7Xy0tOyludWxsIT1vW19dJiZoKG9bX10pO2N8fChcInZhbHVlXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLnZhbHVlKSYmKF8hPT1sLnZhbHVlfHxcInByb2dyZXNzXCI9PT1kJiYhXykmJkgobCxcInZhbHVlXCIsXyx5LnZhbHVlLCExKSxcImNoZWNrZWRcImluIHAmJnZvaWQgMCE9PShfPXAuY2hlY2tlZCkmJl8hPT1sLmNoZWNrZWQmJkgobCxcImNoZWNrZWRcIixfLHkuY2hlY2tlZCwhMSkpfXJldHVybiBsfWZ1bmN0aW9uIE0obix1LGkpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odSk6bi5jdXJyZW50PXV9Y2F0Y2gobil7bC5fX2UobixpKX19ZnVuY3Rpb24gTihuLHUsaSl7dmFyIHQscjtpZihsLnVubW91bnQmJmwudW5tb3VudChuKSwodD1uLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PW4uX19lfHxNKHQsbnVsbCx1KSksbnVsbCE9KHQ9bi5fX2MpKXtpZih0LmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXt0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobil7bC5fX2Uobix1KX10LmJhc2U9dC5fX1A9bnVsbH1pZih0PW4uX19rKWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXSYmTih0W3JdLHUsXCJmdW5jdGlvblwiIT10eXBlb2Ygbi50eXBlKTtpfHxudWxsPT1uLl9fZXx8aChuLl9fZSksbi5fX2U9bi5fX2Q9dm9pZCAwfWZ1bmN0aW9uIE8obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gUyh1LGksdCl7dmFyIHIsbyxmO2wuX18mJmwuX18odSxpKSxvPShyPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQpP251bGw6dCYmdC5fX2t8fGkuX19rLGY9W10saihpLHU9KCFyJiZ0fHxpKS5fX2s9dihkLG51bGwsW3VdKSxvfHxlLGUsdm9pZCAwIT09aS5vd25lclNWR0VsZW1lbnQsIXImJnQ/W3RdOm8/bnVsbDppLmZpcnN0Q2hpbGQ/bi5jYWxsKGkuY2hpbGROb2Rlcyk6bnVsbCxmLCFyJiZ0P3Q6bz9vLl9fZTppLmZpcnN0Q2hpbGQscikseihmLHUpfWZ1bmN0aW9uIHEobixsKXtTKG4sbCxxKX1mdW5jdGlvbiBCKGwsdSxpKXt2YXIgdCxyLG8sZj1hKHt9LGwucHJvcHMpO2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjImJihmLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOmkpLHkobC50eXBlLGYsdHx8bC5rZXkscnx8bC5yZWYsbnVsbCl9ZnVuY3Rpb24gRChuLGwpe3ZhciB1PXtfX2M6bD1cIl9fY0NcIitmKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdSxpO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHU9W10sKGk9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuc29tZShtKX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dS5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Uuc3BsaWNlKHUuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LlByb3ZpZGVyLl9fPXUuQ29uc3VtZXIuY29udGV4dFR5cGU9dX1uPWMuc2xpY2UsbD17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsaT1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sXy5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9YSh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKGEoe30sdSksdGhpcy5wcm9wcykpLG4mJmEodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX19oLnB1c2gobCksbSh0aGlzKSl9LF8ucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUucmVuZGVyPWQsdD1bXSxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsZj0wO2V4cG9ydHtTIGFzIHJlbmRlcixxIGFzIGh5ZHJhdGUsdiBhcyBjcmVhdGVFbGVtZW50LHYgYXMgaCxkIGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGkgYXMgaXNWYWxpZEVsZW1lbnQsXyBhcyBDb21wb25lbnQsQiBhcyBjbG9uZUVsZW1lbnQsRCBhcyBjcmVhdGVDb250ZXh0LEEgYXMgdG9DaGlsZEFycmF5LGwgYXMgb3B0aW9uc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e29wdGlvbnMgYXMgbn1mcm9tXCJwcmVhY3RcIjt2YXIgdCx1LHIsbz0wLGk9W10sYz1uLl9fYixmPW4uX19yLGU9bi5kaWZmZWQsYT1uLl9fYyx2PW4udW5tb3VudDtmdW5jdGlvbiBtKHQscil7bi5fX2gmJm4uX19oKHUsdCxvfHxyKSxvPTA7dmFyIGk9dS5fX0h8fCh1Ll9fSD17X186W10sX19oOltdfSk7cmV0dXJuIHQ+PWkuX18ubGVuZ3RoJiZpLl9fLnB1c2goe30pLGkuX19bdF19ZnVuY3Rpb24gbChuKXtyZXR1cm4gbz0xLHAodyxuKX1mdW5jdGlvbiBwKG4scixvKXt2YXIgaT1tKHQrKywyKTtyZXR1cm4gaS50PW4saS5fX2N8fChpLl9fPVtvP28ocik6dyh2b2lkIDAsciksZnVuY3Rpb24obil7dmFyIHQ9aS50KGkuX19bMF0sbik7aS5fX1swXSE9PXQmJihpLl9fPVt0LGkuX19bMV1dLGkuX19jLnNldFN0YXRlKHt9KSl9XSxpLl9fYz11KSxpLl9ffWZ1bmN0aW9uIHkocixvKXt2YXIgaT1tKHQrKywzKTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9fSC5fX2gucHVzaChpKSl9ZnVuY3Rpb24gaChyLG8pe3ZhciBpPW0odCsrLDQpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIHMobil7cmV0dXJuIG89NSxBKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBfKG4sdCx1KXtvPTYsaChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiBBKG4sdSl7dmFyIHI9bSh0KyssNyk7cmV0dXJuIGsoci5fX0gsdSkmJihyLl9fPW4oKSxyLl9fSD11LHIuX19oPW4pLHIuX199ZnVuY3Rpb24gRihuLHQpe3JldHVybiBvPTgsQShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiBUKG4pe3ZhciByPXUuY29udGV4dFtuLl9fY10sbz1tKHQrKyw5KTtyZXR1cm4gby5jPW4scj8obnVsbD09by5fXyYmKG8uX189ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gZCh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBxKG4pe3ZhciByPW0odCsrLDEwKSxvPWwoKTtyZXR1cm4gci5fXz1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuX18mJnIuX18obiksb1sxXShuKX0pLFtvWzBdLGZ1bmN0aW9uKCl7b1sxXSh2b2lkIDApfV19ZnVuY3Rpb24geCgpe2kuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0Ll9fUCl0cnl7dC5fX0guX19oLmZvckVhY2goZyksdC5fX0guX19oLmZvckVhY2goaiksdC5fX0guX19oPVtdfWNhdGNoKHUpe3QuX19ILl9faD1bXSxuLl9fZSh1LHQuX192KX19KSxpPVtdfW4uX19iPWZ1bmN0aW9uKG4pe3U9bnVsbCxjJiZjKG4pfSxuLl9fcj1mdW5jdGlvbihuKXtmJiZmKG4pLHQ9MDt2YXIgcj0odT1uLl9fYykuX19IO3ImJihyLl9faC5mb3JFYWNoKGcpLHIuX19oLmZvckVhY2goaiksci5fX2g9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtlJiZlKHQpO3ZhciBvPXQuX19jO28mJm8uX19IJiZvLl9fSC5fX2gubGVuZ3RoJiYoMSE9PWkucHVzaChvKSYmcj09PW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKHI9bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHxmdW5jdGlvbihuKXt2YXIgdCx1PWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHIpLGImJmNhbmNlbEFuaW1hdGlvbkZyYW1lKHQpLHNldFRpbWVvdXQobil9LHI9c2V0VGltZW91dCh1LDEwMCk7YiYmKHQ9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpKX0pKHgpKSx1PW51bGx9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsQSBhcyB1c2VNZW1vLEYgYXMgdXNlQ2FsbGJhY2ssVCBhcyB1c2VDb250ZXh0LGQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGMsdXNlRGVidWdWYWx1ZSBhcyBmfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgZCxGcmFnbWVudCBhcyB2LHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOmQoZChuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/ZChuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD1kKG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OmR9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxjPSEwPT09dC5fX2g7ci5fX3UrK3x8Y3x8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyh2LG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyh2LG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9ZChuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZG9taW5hbnR8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQsej1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIEIobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gSChuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgWj1oLmV2ZW50O2Z1bmN0aW9uIFkoKXt9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiBxKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBaJiYobj1aKG4pKSxuLnBlcnNpc3Q9WSxuLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9cSxuLm5hdGl2ZUV2ZW50PW59O3ZhciBHLEo9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEs9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdT0tMT09PXQuaW5kZXhPZihcIi1cIik7Zm9yKHZhciBvIGluIHI9e30sZSl7dmFyIGk9ZVtvXTtWJiZcImNoaWxkcmVuXCI9PT1vJiZcIm5vc2NyaXB0XCI9PT10fHxcInZhbHVlXCI9PT1vJiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09aXx8KFwiZGVmYXVsdFZhbHVlXCI9PT1vJiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP289XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PW8mJiEwPT09aT9pPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KG8pP289XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KG8rdCkmJiF6KGUudHlwZSk/bz1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3Qobyk/bz1vLnRvTG93ZXJDYXNlKCk6dSYmUC50ZXN0KG8pP289by5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09aSYmKGk9dm9pZCAwKSxyW29dPWkpfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPWQoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoSi5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixKKSksbi4kJHR5cGVvZj1qLEsmJksobil9O3ZhciBRPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe1EmJlEobiksRz1uLl9fY307dmFyIFg9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBHLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LG5uPVwiMTcuMC4yXCI7ZnVuY3Rpb24gdG4obil7cmV0dXJuIHMuYmluZChudWxsLG4pfWZ1bmN0aW9uIGVuKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PWp9ZnVuY3Rpb24gcm4obil7cmV0dXJuIGVuKG4pP3kuYXBwbHkobnVsbCxhcmd1bWVudHMpOm59ZnVuY3Rpb24gdW4obil7cmV0dXJuISFuLl9fayYmKHAobnVsbCxuKSwhMCl9ZnVuY3Rpb24gb24obil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgbG49ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sY249ZnVuY3Rpb24obix0KXtyZXR1cm4gbih0KX0sZm49djtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6dSx1c2VJbXBlcmF0aXZlSGFuZGxlOm8sdXNlTWVtbzppLHVzZUNhbGxiYWNrOmwsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6Zix2ZXJzaW9uOlwiMTcuMC4yXCIsQ2hpbGRyZW46ayxyZW5kZXI6QixoeWRyYXRlOkgsdW5tb3VudENvbXBvbmVudEF0Tm9kZTp1bixjcmVhdGVQb3J0YWw6VyxjcmVhdGVFbGVtZW50OnMsY3JlYXRlQ29udGV4dDpfLGNyZWF0ZUZhY3Rvcnk6dG4sY2xvbmVFbGVtZW50OnJuLGNyZWF0ZVJlZjpiLEZyYWdtZW50OnYsaXNWYWxpZEVsZW1lbnQ6ZW4sZmluZERPTU5vZGU6b24sQ29tcG9uZW50OmEsUHVyZUNvbXBvbmVudDpFLG1lbW86Zyxmb3J3YXJkUmVmOngsZmx1c2hTeW5jOmNuLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmxuLFN0cmljdE1vZGU6dixTdXNwZW5zZTpMLFN1c3BlbnNlTGlzdDpNLGxhenk6RixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpYfTtleHBvcnR7bm4gYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLEIgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSx1biBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLHRuIGFzIGNyZWF0ZUZhY3Rvcnkscm4gYXMgY2xvbmVFbGVtZW50LGVuIGFzIGlzVmFsaWRFbGVtZW50LG9uIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGNuIGFzIGZsdXNoU3luYyxsbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFggYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuLyoqXG4gKiBTaG9ydGN1dCBmb3IgcHJlYWN0L2NvbXBhdCdzIGBmb3J3YXJkUmVmYCB0aGF0IGF1dG8tYXNzdW1lcyBzb21lIHRoaW5ncyB0aGF0IGFyZSB1c2VmdWwgZm9yIGZvcndhcmRpbmcgcmVmcyB0byBgSFRNTEVsZW1lbnRzYCBzcGVjaWZpY2FsbHkuXG4gKiBOYW1lbHkgaXQgaW52b2x2ZXMgZGUtZ3Vua2luZyB0aGUgdHlwZSBzeXN0ZW0gYnkgbGV0dGluZyB1cyByZXR1cm4gKmdlbmVyaWMqIGZ1bmN0aW9uIGFuZCBwbGF5aW5nIG5pY2Ugd2l0aCBSZWFjdC4gSW4gYWxsIG90aGVyIHJlc3BlY3RzLCBpdCBhY3RzIGxpa2UgYGZvcndhcmRSZWZgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEVsZW1lbnRSZWYoQ29tcG9uZW50KSB7XG4gICAgY29uc3QgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihDb21wb25lbnQpO1xuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J3YXJkLWVsZW1lbnQtcmVmLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xufVxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcbiAgICBdO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1swXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1szXS5jb25jYXQoXCJcIik7XG4gICAgY1s0XS5jb25jYXQoXCJcIik7XG4gICAgY1s1XS5jb25jYXQoXCJcIik7XG4gICAgY1s2XS5jb25jYXQoXCJcIik7XG4gICAgY1s3XS5jb25jYXQoXCJcIik7XG4gICAgY1s4XS5jb25jYXQoXCJcIik7XG4gICAgY1s5XS5jb25jYXQoXCJcIik7XG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzEzXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XG4gICAgICAgIGxldCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XG4gICAgICAgIH0sIFtsaHMsIHJoc10pO1xuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByaHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XG5cbiAgICBjb25zdCBjID0gW1xuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXG4gICAgXSBhcyBjb25zdDtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XG5cbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xuICAgIGFjY2VwdHNSZWYoY1s2XSk7XG4gICAgYWNjZXB0c1JlZihjWzddKTtcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xufVxuKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xufVxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXG4gICAgICAgICAgICByZXR1cm4gbGhzLnN0eWxlO1xuICAgICAgICBpZiAoIWxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChyaHM/LnN0eWxlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcbiAgICBsb2cgPSBsb2cyO1xufVxuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIGxoczJcbiAqIEBwYXJhbSByaHMyXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogbGhzQ2hpbGRyZW4sIGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogcmhzQ2hpbGRyZW4sIGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUsIHN0eWxlOiByaHNTdHlsZSwgcmVmOiByaHNSZWYsIC4uLnJocyB9ID0gcmhzMjtcbiAgICAgICAgbGV0IHJldCA9IHtcbiAgICAgICAgICAgIC4uLmxocyxcbiAgICAgICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmcygpKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHMyLCByaHMyKVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5yZWY7XG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuc3R5bGU7XG4gICAgICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbG9nPy4oYENvdWxkIG5vdCBtZXJnZSBpbmNvbXBhdGlibGUgcHJvcCBcIiR7cmhzS2V5fVwiICh0eXBlOiAke3R5cGVvZiByaHNWYWx1ZX0sIHZhbHVlczogWyR7bGhzVmFsdWV9LCAke3Joc1ZhbHVlfV0pYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCBsdiA9IGxocyguLi5hcmdzKTtcbiAgICAgICAgbGV0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCIuL3VzZS1zdGF0ZVwiO1xuY29uc3QgVGFibGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Xy1cIjtcbmZ1bmN0aW9uIGJhc2U2NCh2YWx1ZSkge1xuICAgIHJldHVybiBUYWJsZVt2YWx1ZV07XG59XG5mdW5jdGlvbiByYW5kb202Qml0cygpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMGIxMDAwMDAwKTtcbn1cbmZ1bmN0aW9uIHJhbmRvbTY0Qml0cygpIHtcbiAgICByZXR1cm4gW3JhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCksIHJhbmRvbTZCaXRzKCldO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIHdpdGggYW4gb3B0aW9uYWwgcHJlZml4LlxuICogTm90ZSB0aGF0IGlmIHRoZSBwcmVmaXggaXMgKmV4cGxpY2l0bHkqIHNldCB0byBcIlwiLCB0aGVuXG4gKiBJRHMgdGhhdCBhcmUgbm90IHZhbGlkIHVuZGVyIEhUTUw0IG1heSBiZSBnZW5lcmF0ZWQuIE9oIG5vLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpIHtcbiAgICByZXR1cm4gYCR7cHJlZml4ID8/IFwiaWQtXCJ9JHtyYW5kb202NEJpdHMoKS5tYXAobiA9PiBiYXNlNjQobikpLmpvaW4oXCJcIil9YDtcbn1cbi8qKlxuICogUmV0dXJucyBhIGhvb2sgdGhhdCBtb2RpZmllcyBhIHNldCBvZiBwcm9wcyB0byBwcm92aWRlIGEgcmFuZG9tbHktZ2VuZXJhdGVkIElEIGlmIG9uZSB3YXMgbm90IHByb3ZpZGVkLlxuICpcbiAqIElmIHlvdSdkIGxpa2UgdG8gdXNlIHRoZSBJRCBpbiBhIHByb3BlcnR5IHRoYXQncyAqbm90KiBuYW1lZCBgaWRgIChsaWtlIGBmb3JgIG9yIGBhcmlhLWxhYmVsbGVkYnlgIG9yIHdoYXRub3QpLCBgdXNlUmVmZXJlbmNlZElkUHJvcHNgIGlzIGFsc28gcHJvdmlkZWQuXG4gKlxuICogQW5kIHRoZSByYW5kb21seS1nZW5lcmF0ZWQgaWQgaXRzZWxmIGlzIGFsc28gcHJvdmlkZWQgaW4gY2FzZSB5b3Ugd2FudCB0byBoYW5kbGUgdGhlIGxvZ2ljIHlvdXJzZWxmIHdpdGhvdXQgYHVzZU1lcmdlZFByb3BzYC5cbiAqXG4gKiBVbmxpa2UgbW9zdCBvdGhlciBgdXNlKlByb3BzYCBob29rcywgdGhlc2UgYXJlIG1vc3RseSBzdGFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSYW5kb21JZCh7IHByZWZpeCB9ID0ge30pIHtcbiAgICBjb25zdCBbcmFuZG9tSWQsIHNldFJhbmRvbUlkXSA9IHVzZVN0YXRlKCgpID0+IGdlbmVyYXRlUmFuZG9tSWQocHJlZml4KSk7XG4gICAgY29uc3QgW3dhdGNoUHJlZml4VXBkYXRlcywgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzLCBnZXRXYXRjaFByZWZpeFVwZGF0ZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhdGNoUHJlZml4VXBkYXRlcyA9IGdldFdhdGNoUHJlZml4VXBkYXRlcygpO1xuICAgICAgICBpZiAod2F0Y2hQcmVmaXhVcGRhdGVzKVxuICAgICAgICAgICAgc2V0UmFuZG9tSWQoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZChwcmVmaXgpKTtcbiAgICAgICAgc2V0V2F0Y2hQcmVmaXhVcGRhdGVzKHRydWUpO1xuICAgIH0sIFtwcmVmaXhdKTtcbiAgICAvLyBXaGF0ZXZlciBJRCB3YXMgbW9zdCByZWNlbnRseSB1c2VkIGJ5IHRoZSBhY3R1YWwgXCJpZFwiIHByb3AuXG4gICAgLy8gVXNlZCBzbyB0aGF0IGFueSBJRC1yZWZlcmVuY2luZyBwcm9wcyBkb24ndCBuZWVkIHRvIHByb3ZpZGUgdGhlIHNhbWUgdmFsdWUuXG4gICAgLy9cbiAgICAvLyBUT0RPOiBUaGlzIGRvZXMgbWVhbiB0aGF0IG9uIHRoZSBmaXJzdCByZW5kZXIsIGlmIGp1c3QgdGhlIElEIGlzIHByb3ZpZGVkLFxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSB0ZW1wb3JhcnkgbWlzbWF0Y2gsIGJ1dCBpdCdzIGNvcnJlY3RlZCBiZWZvcmUgcmVuZGVyaW5nIGZpbmlzaGVzLlxuICAgIC8vIElzIHRoaXMgb2theT9cbiAgICBjb25zdCBbdXNlZElkLCBzZXRVc2VkSWQsIGdldFVzZWRJZF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICAgIGNvbnN0IHVzZVJlZmVyZW5jZWRJZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gdXNlUmVmZXJlbmNlZElkUHJvcHMoaWRQcm9wTmFtZSkge1xuICAgICAgICBjb25zdCByZXQgPSBmdW5jdGlvbiAoeyBbaWRQcm9wTmFtZV06IGdpdmVuSWQsIC4uLnByb3BzIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZWRJZDIgPSAoZ2l2ZW5JZCA/PyB1c2VkSWQgPz8gcmFuZG9tSWQgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIGlmIChpZFByb3BOYW1lID09PSBcImlkXCIpXG4gICAgICAgICAgICAgICAgc2V0VXNlZElkKHVzZWRJZDIpO1xuICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoeyBbaWRQcm9wTmFtZV06IHVzZWRJZDIgfSwgcHJvcHMpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0sIFt1c2VkSWQsIHJhbmRvbUlkXSk7XG4gICAgY29uc3QgdXNlUmFuZG9tSWRQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIHVzZVJhbmRvbUlkUHJvcHMocCkge1xuICAgICAgICByZXR1cm4gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJpZFwiKShwKTtcbiAgICB9LCBbdXNlUmVmZXJlbmNlZElkUHJvcHNdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByYW5kb21JZCxcbiAgICAgICAgaWQ6IHVzZWRJZCxcbiAgICAgICAgZ2V0SWQ6IGdldFVzZWRJZCxcbiAgICAgICAgdXNlUmFuZG9tSWRQcm9wcyxcbiAgICAgICAgdXNlUmVmZXJlbmNlZElkUHJvcHNcbiAgICB9O1xufVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNDc3MocHJvcCkgeyB9XG5mdW5jdGlvbiB0ZXN0KHByb3BzKSB7XG4gICAgY29uc3QgeyBpZCwgcmFuZG9tSWQsIHVzZVJhbmRvbUlkUHJvcHMsIHVzZVJlZmVyZW5jZWRJZFByb3BzIH0gPSB1c2VSYW5kb21JZCgpO1xuICAgIC8vY29uc3QgcDFhOiBNZXJnZWRQcm9wczx7IGlkOiBzdHJpbmcgfSwgeyAgfT4gPSB1c2VSYW5kb21JZFByb3BzKHsgaWQ6IHVuZGVmaW5lZCB9KVxuICAgIGNvbnN0IHAxYiA9IHVzZVJhbmRvbUlkUHJvcHMoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwMmEgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSk7XG4gICAgY29uc3QgcDJiID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwMmMgPSB1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKShwcm9wcyk7XG4gICAgY29uc3QgcDNhID0gdXNlUmFuZG9tSWRQcm9wcyh1c2VSZWZlcmVuY2VkSWRQcm9wcyhcImZvclwiKSh7IGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHAzYiA9IHVzZVJhbmRvbUlkUHJvcHModXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikoeyAuLi5wcm9wcywgaWQ6IHVuZGVmaW5lZCB9KSk7XG4gICAgY29uc3QgcDRhID0gdXNlUmVmZXJlbmNlZElkUHJvcHMoXCJmb3JcIikodXNlUmFuZG9tSWRQcm9wcyh7IGlkOiB1bmRlZmluZWQgfSkpO1xuICAgIGNvbnN0IHA0YiA9IHVzZVJlZmVyZW5jZWRJZFByb3BzKFwiZm9yXCIpKHAxYik7XG4gICAgLy9wMWEuaWQ7XG4gICAgcDFiLmlkO1xuICAgIHAyYVtcImZvclwiXTtcbiAgICBwMmJbXCJmb3JcIl07XG4gICAgcDJjW1wiZm9yXCJdO1xuICAgIHAzYS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAzYi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHAzYVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHAzYltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YVtcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YltcImZvclwiXT8uY29uY2F0KFwiXCIpO1xuICAgIHA0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IEl0J3MgYmVjYXVzZSBpdCByZXNvbHZlcyB0byBcImlkOiB1bmRlZmluZWQgJiBzdHJpbmdcIiAtLSB0aGlzIHNob3VsZG4ndCBoYXBwZW5cbiAgICBwNGIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMWIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAxYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwMmEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwMmIuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKHAyYi5zdHlsZSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwM2Euc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwM2Iuc3R5bGUpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcDRhLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChwNGIuc3R5bGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJhbmRvbS1pZC5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbUlkIH0gZnJvbSBcIi4vdXNlLXJhbmRvbS1pZFwiO1xuY29uc3QgcHJldmlvdXNJbnB1dHMgPSBuZXcgTWFwKCk7XG5jb25zdCB0b1J1biA9IG5ldyBNYXAoKTtcbi8vIFRPRE86IFdoZXRoZXIgdGhpcyBnb2VzIGluIG9wdGlvbnMuZGlmZmVkIG9yIG9wdGlvbnMuX2NvbW1pdFxuLy8gaXMgYSBwb3N0LXN1c3BlbnNlIHF1ZXN0aW9uLlxuLy8gUmlnaHQgbm93LCB1c2luZyBvcHRpb25zLl9jb21taXQgaGFzIHRoZSBwcm9ibGVtIG9mIHJ1bm5pbmdcbi8vICphZnRlciogcmVmcyBhcmUgYXBwbGllZCwgYnV0IHdlIG5lZWQgdG8gY29tZSBiZWZvcmUgZXZlbiB0aGF0XG4vLyBzbyBgcmVmPXtzb21lU3RhYmxlRnVuY3Rpb259YCB3b3Jrcy5cbi8vIFxuLy8gQWxzbyBpdCdzIHByaXZhdGUuXG5jb25zdCBvcmlnaW5hbERpZmZlZCA9IG9wdGlvbnMuZGlmZmVkO1xub3B0aW9ucy5kaWZmZWQgPSAodm5vZGUsIC4uLmFyZ3MpID0+IHtcbiAgICBmb3IgKGxldCBbaWQsIHsgZWZmZWN0LCBpbnB1dHMgfV0gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3JpZ2luYWxEaWZmZWQ/Lih2bm9kZSwgLi4uYXJncyk7XG59O1xuLypcbmNvbnN0IG9yaWdpbmFsQmVmb3JlQ29tbWl0ID0gKG9wdGlvbnMgYXMgYW55KS5fY29tbWl0O1xuKG9wdGlvbnMgYXMgYW55KS5fY29tbWl0ID0gKHZub2RlOiBWTm9kZSwgY29tbWl0UXVldWU6IGFueSwgLi4uYXJnczogYW55W10pID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBcbiAgICBmb3IgKGxldCBbaWQsIHsgZWZmZWN0LCBpbnB1dHMgfV0gb2YgdG9SdW4pIHtcbiAgICAgICAgY29uc3Qgb2xkSW5wdXRzID0gcHJldmlvdXNJbnB1dHMuZ2V0KGlkKTtcbiAgICAgICAgaWYgKGFyZ3NDaGFuZ2VkKG9sZElucHV0cywgaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGlucHV0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcmlnaW5hbEJlZm9yZUNvbW1pdCh2bm9kZSwgY29tbWl0UXVldWUsIC4uLmFyZ3MpO1xufVxuKi9cbi8qKlxuICogU2VtaS1wcml2YXRlIGZ1bmN0aW9uIHRvIGFsbG93IHN0YWJsZSBjYWxsYmFja3MgZXZlbiB3aXRoaW4gYHVzZUxheW91dEVmZmVjdGAgYW5kIHJlZiBhc3NpZ25tZW50LlxuICpcbiAqIEV2ZXJ5IHJlbmRlciwgd2Ugc2VuZCB0aGUgYXJndW1lbnRzIHRvIGJlIGV2YWx1YXRlZCBhZnRlciBkaWZmaW5nIGhhcyBjb21wbGV0ZWQsXG4gKiB3aGljaCBoYXBwZW5zIGJlZm9yZS5cbiAqXG4gKiBAcGFyYW0gZWZmZWN0XG4gKiBAcGFyYW0gaW5wdXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VCZWZvcmVMYXlvdXRFZmZlY3QoZWZmZWN0LCBpbnB1dHMpIHtcbiAgICBjb25zdCBbaWRdID0gdXNlU3RhdGUoKCkgPT4gZ2VuZXJhdGVSYW5kb21JZCgpKTtcbiAgICB0b1J1bi5zZXQoaWQsIHsgZWZmZWN0LCBpbnB1dHMgfSk7XG59XG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VCZWZvcmVMYXlvdXRFZmZlY3QgfSBmcm9tIFwiLi91c2UtYmVmb3JlLWxheW91dC1lZmZlY3RcIjtcbmNvbnN0IFVuc2V0ID0gU3ltYm9sKFwidW5zZXRcIik7XG4vKipcbiAqIEdpdmVuIGFuIGlucHV0IHZhbHVlLCByZXR1cm5zIGEgY29uc3RhbnQgZ2V0dGVyIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAqIGluc2lkZSBvZiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGluY2x1ZGluZyBpdCBpbiB0aGUgZGVwZW5kZW5jeSBhcnJheS5cbiAqXG4gKiBUaGlzIHVzZXMgYG9wdGlvbnMuZGlmZmVkYCBpbiBvcmRlciB0byBydW4gYmVmb3JlIGV2ZXJ5dGhpbmcsIGV2ZW5cbiAqIHJlZiBhc3NpZ25tZW50LiBUaGlzIG1lYW5zIHRoaXMgZ2V0dGVyIGlzIHNhZmUgdG8gdXNlIGFueXdoZXJlICoqKmV4Y2VwdCB0aGUgcmVuZGVyIHBoYXNlKioqLlxuICpcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZUdldHRlcih2YWx1ZSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgdXNlQmVmb3JlTGF5b3V0RWZmZWN0KCgpID0+IHsgcmVmLmN1cnJlbnQgPSB2YWx1ZTsgfSwgW3ZhbHVlXSk7XG4gICAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHJlZi5jdXJyZW50ID09PSBVbnNldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSByZXRyaWV2ZWQgZnJvbSB1c2VTdGFibGVHZXR0ZXIoKSBjYW5ub3QgYmUgY2FsbGVkIGR1cmluZyByZW5kZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZi5jdXJyZW50O1xuICAgIH0sIFtdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGFibGUtZ2V0dGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhYmxlR2V0dGVyIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1nZXR0ZXJcIjtcbi8qKlxuICogQWx0ZXJuYXRlIHVzZUNhbGxiYWNrKCkgd2hpY2ggYWx3YXlzIHJldHVybnMgdGhlIHNhbWUgKHdyYXBwZWQpIGZ1bmN0aW9uIHJlZmVyZW5jZVxuICogc28gdGhhdCBpdCBjYW4gYmUgZXhjbHVkZWQgZnJvbSB0aGUgZGVwZW5kZW5jeSBhcnJheXMgb2YgYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMuXG4gKlxuICogRG8gbm90IHVzZSBkdXJpbmcgdGhlIHJlbmRlciBwaGFzZSEgIGB1c2VMYXlvdXRFZmZlY3RgIGlzIGZpbmUgdGhvdWdoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhYmxlQ2FsbGJhY2soZm4pIHtcbiAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tHZXR0ZXIgPSB1c2VTdGFibGVHZXR0ZXIoZm4pO1xuICAgIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gY3VycmVudENhbGxiYWNrR2V0dGVyKCkoLi4uYXJncyk7XG4gICAgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXN0YWJsZS1jYWxsYmFjay5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VTdGFibGVDYWxsYmFjayB9IGZyb20gXCIuL3VzZS1zdGFibGUtY2FsbGJhY2tcIjtcbi8qKlxuICogU2ltaWxhciB0byBgdXNlU3RhdGVgLCBidXQgZm9yIHZhbHVlcyB0aGF0IGFyZW4ndCBcInJlbmRlci1pbXBvcnRhbnRcIiAmbmRhc2g7IHVwZGF0ZXMgZG9uJ3QgY2F1c2UgYSByZS1yZW5kZXIgYW5kIHNvIHRoZSB2YWx1ZSBzaG91bGRuJ3QgYmUgdXNlZCBkdXJpbmcgcmVuZGVyICh0aG91Z2ggaXQgY2VydGFpbmx5IGNhbikuXG4gKlxuICogVG8gY29tcGVuc2F0ZSBmb3IgdGhpcywgeW91IHNob3VsZCBwYXNzIGEgYHVzZUVmZmVjdGAtZXNxdWUgY2FsbGJhY2sgdGhhdCBpcyBydW4gd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMuICBKdXN0IGxpa2UgYHVzZUVmZmVjdGAsIHRoaXMgY2FsbGJhY2sgY2FuIHJldHVybiBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCdzIHJ1biBiZWZvcmUgdGhlIHZhbHVlIGNoYW5nZXMuICBJZiB5b3Ugd291bGQgbGlrZSB0byByZS1yZW5kZXIgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyAob3IsIHNheSwgd2hlbiB0aGUgdmFsdWUgbWVldHMgc29tZSBjcml0ZXJpYSksIHRoaXMgaXMgd2hlcmUgeW91J2xsIHdhbnQgdG8gcHV0IGluIGEgY2FsbCB0byBhIGBzZXRTdGF0ZWAgZnVuY3Rpb24uXG4gKlxuICogVG8gc3VtbWFyaXplLCBpdCdzIGxpa2UgYSBgdXNlU3RhdGVgLWB1c2VFZmZlY3RgIG1hc2h1cDpcbiAqXG4gKiAxLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHRoaXMgdmVyc2lvbiBvZiBgc2V0U3RhdGVgIGRvZXNuJ3QgcmUtcmVuZGVyIHRoZSB3aG9sZSBjb21wb25lbnRcbiAqIDIuIEl0J3MgbGlrZSBgdXNlU3RhdGVgLCBleGNlcHQgeW91IGNhbiBydW4gYSBmdW5jdGlvbiB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIHRoYXQgb3B0aW9uYWxseSByZXR1cm5zIGEgY2xlYW51cCBmdW5jdGlvblxuICogMy4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgeW91IHRyaWdnZXIgdGhlIGVmZmVjdCBmdW5jdGlvbiBcInJlbW90ZWx5XCIgaW5zdGVhZCBvZiBpdCBydW5uaW5nIGFmdGVyIHJlbmRlcmluZ1xuICogNC4gSXQncyBsaWtlIGB1c2VFZmZlY3RgLCBleGNlcHQgdGhlIHNpbmdsZSBcImRlcGVuZGVuY3lcIiBpcyBiYXNlZCBvbiB5b3VyIGNhbGxzIHRvIGBzZXRTdGF0ZWBcbiAqXG4gKiBOb3RlIHRoYXQgd2hpbGUgY2FsbGluZyBgc2V0U3RhdGVgIGRvZXNuJ3QgY2F1c2UgYW55IHJlLXJlbmRlcnMsIHlvdSBjYW4gZG8gdGhhdCB3aXRoaW4geW91ciBgb25DaGFuZ2VgIGZ1bmN0aW9uLCBjYWxsZWQgd2hlbmV2ZXIgdGhlIHZhbHVlIGNoYW5nZXMgdmlhIHRoYXQgYHNldFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0gb25DaGFuZ2UgVGhlIFwiZWZmZWN0XCIgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuIEVmZmVjdGl2ZWx5IHRoZSBzYW1lIGFzIGB1c2VFZmZlY3RgJ3MgXCJlZmZlY3RcIiBmdW5jdGlvblxuICogQHBhcmFtIGluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hhbmdlLCBpbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCA/IFVuc2V0IDogaW5pdGlhbFZhbHVlKTtcbiAgICBjb25zdCBjbGVhbnVwQ2FsbGJhY2tSZWYgPSB1c2VSZWYodW5kZWZpbmVkKTtcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGxldCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+ICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IHZhbHVlUmVmLmN1cnJlbnQpLCBbXSk7XG4gICAgLy8gVGhlIGFjdHVhbCBjb2RlIHRoZSB1c2VyIGNhbGxzIHRvIChwb3NzaWJseSkgcnVuIGEgbmV3IGVmZmVjdC5cbiAgICBjb25zdCBzZXRWYWx1ZSA9IHVzZVN0YWJsZUNhbGxiYWNrKChhcmcpID0+IHtcbiAgICAgICAgY29uc3QgcHJldkRlcCA9IHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgZGVwID0gYXJnIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBhcmcocHJldkRlcCkgOiBhcmc7XG4gICAgICAgIGlmIChkZXAgIT09IHZhbHVlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihkZXAsIHByZXZEZXApID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gSGFuZGxlIHJ1bm5pbmcgb24gbW91bnQvdW5tb3VudFxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9uU2hvdWxkQ2xlYW5VcDtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuLyoqXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCxcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICpcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KHsgb25FbGVtZW50Q2hhbmdlIH0pIHtcbiAgICAvLyBMZXQgdXMgc3RvcmUgdGhlIGFjdHVhbCAocmVmZXJlbmNlIHRvKSB0aGUgZWxlbWVudCB3ZSBjYXB0dXJlXG4gICAgY29uc3QgW2dldEVsZW1lbnQsIHNldEVsZW1lbnRdID0gdXNlUGFzc2l2ZVN0YXRlKG9uRWxlbWVudENoYW5nZSwgbnVsbCk7XG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcbiAgICAvLyBhbmQgdGhhdCBub3RpZmllcyB1cyBvZiBvdXIgZWxlbWVudCB3aGVuIHdlIGhhdmUgaXRcbiAgICBjb25zdCBteVJlZiA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlKVxuICAgICAgICAgICAgc2V0RWxlbWVudCgoKSA9PiBlKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcbiAgICAvLyBSZXR1cm4gYm90aCB0aGUgZWxlbWVudCBhbmQgdGhlIGhvb2sgdGhhdCBtb2RpZmllcyBcbiAgICAvLyB0aGUgcHJvcHMgYW5kIGFsbG93cyB1cyB0byBhY3R1YWxseSBmaW5kIHRoZSBlbGVtZW50XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlUmVmRWxlbWVudFByb3BzLFxuICAgICAgICBnZXRFbGVtZW50XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgZnVuY3Rpb24gZm9vKHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgZ2V0RWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICAgICAgY29uc3QgcDEgPSB1c2VSZWZFbGVtZW50UHJvcHMocHJvcHMpO1xuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHAxLnN0eWxlID09PSBcInN0cmluZ1wiKSB7IH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwMS5zdHlsZT8uYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXJlZi1lbGVtZW50LmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5mdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcbn1cbi8qKlxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxuICpcbiAqIENlcnRhaW4gQ1NTIHByb3BlcnRpZXMsIGxpa2UgYGJsb2NrLXNpemVgLCByZXNwZWN0IHRoZSBjdXJyZW50IHdyaXRpbmcgbW9kZSBhbmQgdGV4dCBkaXJlY3Rpb24uXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cbiAqXG4gKiBUaGlzIGlzIHByb3ZpZGVkIHNvIHRoYXQgQ1NTIHByb3BlcnRpZXMgY2FuIGNvbnNpc3RlbnRseSB1c2UgdGhvc2UgbG9naWNhbCBwcm9wZXJ0aWVzLlxuICpcbiAqIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMvI2xvZ2ljYWwtdG8tcGh5c2ljYWxcbiAqXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcbiAqICogYGdldExvZ2ljYWxEaXJlY3Rpb25gOiByZXRyaWV2ZXMgYSBgTG9naWNhbERpcmVjdGlvbkluZm9gIHJlcHJlc2VudGluZyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZWxlbWVudC4gKEZ1bmN0aW9uIGlzIGNvbnN0YW50IGJldHdlZW4gcmVuZGVycylcbiAqICogYGNvbnZlcnRFbGVtZW50U2l6ZWA6IFdoZW4gdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB1c2VFbGVtZW50U2l6ZWAsIGFsbG93cyB5b3UgdG8gcmV0cmlldmUgdGhlIGxvZ2ljYWwgc2l6ZSBvZiBhbiBlbGVtZW50IGluc3RlYWQgb2YgdGhlIHBoeXNpY2FsIHNpemUuXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cbiAqICogYGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb25gOiAgQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImlubGluZVwiIG9yIFwiYmxvY2tcIiB0byBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKCkge1xuICAgIC8vIFRPRE86IFRoZXJlJ3Mgbm8gd2F5IHRvIHJlZnJlc2ggd2hpY2ggd3JpdGluZyBtb2RlIHdlIGhhdmUgb25jZSBtb3VudGVkLlxuICAgIC8vIElmIHRoZSB3cml0aW5nIG1vZGUgY2hhbmdlcywgdGhlIHdob2xlIGNvbXBvbmVudCBuZWVkcyB0byBcbiAgICAvLyBtb3VudC91bm1vdW50IGJlY2F1c2UgKG1vcmUtb3ItbGVzcyBpbiBvcmRlciBvZiBpbXBvcnRhbmNlKVxuICAgIC8vICAgQS4gVGhlcmUncyBubyB3YXkgdG8gd2F0Y2ggZm9yIENTUyBzdHlsZSBjaGFuZ2VzXG4gICAgLy8gICBCLiBDYWxsaW5nIGdldENvbXB1dGVkU3R5bGUgYWZ0ZXIgZXZlcnkgcmVuZGVyIGZvciBldmVyeSBlbGVtZW50IGdldHMgZXhwZW5zaXZlIGZhc3QgYW5kXG4gICAgLy8gICBDLiBJcyBub3QgbmVjZXNzYXJ5IGZvciBtb3N0IHVzZSBjYXNlcyB0aGF0IHdpbGwgbmV2ZXIgc3dpdGNoIHdyaXRpbmctbW9kZSB3aXRoaW4gYSBzaW5nbGUgY29tcG9uZW50XG4gICAgLy8gICAgICAoVGhvc2UgdGhhdCBkbyB3aWxsIG5lZWQgdG8gbW91bnQgYW5kIHVubW91bnQgdGhlIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpXG4gICAgLy9cbiAgICAvLyBNYXliZSB0aGVyZSBjb3VsZCBiZSBhIGNvbnRleHQgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVtb3RlbHkgdXBkYXRlIGFsbCBjb21wb25lbnRzIHRoYXQgdXNlIHRoaXMgaG9vaz9cbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7XG4gICAgICAgIG9uRWxlbWVudENoYW5nZTogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaGFzbid0IGFjdHVhbGx5IGJlZW4gaG9va2VkIHVwIHRvIHRoZSBkb2N1bWVudCB5ZXQuXG4gICAgICAgICAgICAgICAgLy8gV2FpdCBhIG1vbWVudCBzbyB0aGF0IHdlIGNhbiBwcm9wZXJseSB1c2UgYGdldENvbXB1dGVkU3R5bGVgXG4gICAgICAgICAgICAgICAgLy8gKHNpbmNlIHdlIG9ubHkgcmVhZCBpdCBvbiBtb3VudClcbiAgICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGVsZW1lbnQuaXNDb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gKGVsZW1lbnQucGFyZW50RWxlbWVudCA/PyBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkID0gY29tcHV0ZWRTdHlsZXMuZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRXcml0aW5nTW9kZSh3IHx8IFwiaG9yaXpvbnRhbC10YlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGlyZWN0aW9uKGQgfHwgXCJydGxcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRleHRPcmllbnRhdGlvbih0IHx8IFwibWl4ZWRcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbd3JpdGluZ01vZGUsIHNldFdyaXRpbmdNb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdGV4dE9yaWVudGF0aW9uLCBzZXRUZXh0T3JpZW50YXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgd3JpdGluZ01vZGVSZWYgPSB1c2VSZWYod3JpdGluZ01vZGUpO1xuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IHRleHRPcmllbnRhdGlvblJlZiA9IHVzZVJlZih0ZXh0T3JpZW50YXRpb24pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQgPSB3cml0aW5nTW9kZTsgfSwgW3dyaXRpbmdNb2RlXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudCA9IHRleHRPcmllbnRhdGlvbjsgfSwgW3RleHRPcmllbnRhdGlvbl0pO1xuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGxldCB3cml0aW5nTW9kZSA9IHdyaXRpbmdNb2RlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25SZWYuY3VycmVudDtcbiAgICAgICAgbGV0IHRleHRPcmllbnRhdGlvbiA9IHRleHRPcmllbnRhdGlvblJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXdyaXRpbmdNb2RlIHx8ICFkaXJlY3Rpb24gfHwgIXRleHRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBpZiAodGV4dE9yaWVudGF0aW9uID09IFwidXByaWdodFwiKVxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJsdHJcIjtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLldyaXRpbmdNb2Rlc1t3cml0aW5nTW9kZSA/PyBcImhvcml6b250YWwtdGJcIl1bZGlyZWN0aW9uID8/IFwibHRyXCJdXG4gICAgICAgIH07XG4gICAgfSwgW3dyaXRpbmdNb2RlUmVmLCBkaXJlY3Rpb25SZWYsIHRleHRPcmllbnRhdGlvblJlZl0pO1xuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbj8uaW5saW5lT3JpZW50YXRpb24gPT09IGVsZW1lbnRPcmllbnRhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xuICAgICAgICByZXR1cm4gXCJibG9ja1wiO1xuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGVsZW1lbnRPcmllbnRhdGlvbiA9PSBcImlubGluZVwiKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJob3Jpem9udGFsXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbj8uYmxvY2tPcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcbiAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgICAgfVxuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XG4gICAgY29uc3QgY29udmVydEVsZW1lbnRTaXplID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRTaXplLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5saW5lU2l6ZSwgYmxvY2tTaXplLCBpbmxpbmVEaXJlY3Rpb24sIGJsb2NrRGlyZWN0aW9uIH0gPSBkaXJlY3Rpb247XG4gICAgICAgICAgICAvLyBTaXplIGlzIHJlbGF0aXZlbHkgc2ltcGxlXG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiByZXF1aXJlcyB1cyB0byBzb21ldGltZXMgdXNlIG9uZSBwcm9wZXJ0eSAobGlrZSBgbGVmdGApXG4gICAgICAgICAgICAvLyBvciBzb21ldGltZXMgdHdvIChsaWtlIGBsZWZ0YCArIGB3aWR0aGApXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbExlZnRUb3AoZGlyKSB7IGlmIChkaXIgPT09IFwibHRyXCIgfHwgZGlyID09IFwicnRsXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiOyByZXR1cm4gXCJ0b3BcIjsgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShkaXIpIHsgaWYgKGRpciA9PT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ3aWR0aFwiOyBpZiAoZGlyID09PSBcImJ0dFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImhlaWdodFwiOyByZXR1cm4gbnVsbDsgfVxuICAgICAgICAgICAgY29uc3QgZjEgPSBnZXRQaHlzaWNhbExlZnRUb3AoaW5saW5lRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGYyID0gZ2V0UGh5c2ljYWxSaWdodEJvdHRvbShpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjMgPSBnZXRQaHlzaWNhbExlZnRUb3AoYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjQgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGJsb2NrRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IG9mZnNldElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIGxldCBvZmZzZXRCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjQpfWBdKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlTG9naWNhbERpcmVjdGlvblByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHMsXG4gICAgICAgIGdldEVsZW1lbnQsXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb24sXG4gICAgICAgIGNvbnZlcnRFbGVtZW50U2l6ZSxcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uXG4gICAgfTtcbn1cbjtcbmNvbnN0IEhvcml6b250YWxUYkx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwibHRyXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXG4gICAgYmxvY2tTaXplOiBcImhlaWdodFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJsdHJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGJSdGwgPSB7XG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJydGxcIixcbn07XG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJydGxcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGJsb2NrT3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgIGlubGluZVNpemU6IFwiaGVpZ2h0XCIsXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJydGxcIlxufTtcbmNvbnN0IFZlcnRpY2FsUmxSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcbn07XG5jb25zdCBTaWRld2F5c1JsTHRyID0geyAuLi5WZXJ0aWNhbFJsTHRyIH07XG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XG5jb25zdCBWZXJ0aWNhbExyTHRyID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgVmVydGljYWxMclJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XG4gICAgLi4uVmVydGljYWxMckx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJsdHJcIlxufTtcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XG4gICAgLi4uU2lkZXdheXNMdEx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCJcbn07XG5jb25zdCBIb3Jpem9udGFsVGIgPSB7XG4gICAgbHRyOiBIb3Jpem9udGFsVGJMdHIsXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcbn07XG5jb25zdCBWZXJ0aWNhbFJsID0ge1xuICAgIGx0cjogVmVydGljYWxSbEx0cixcbiAgICBydGw6IFZlcnRpY2FsUmxSdGxcbn07XG5jb25zdCBWZXJ0aWNhbExyID0ge1xuICAgIGx0cjogVmVydGljYWxMckx0cixcbiAgICBydGw6IFZlcnRpY2FsTHJSdGxcbn07XG5jb25zdCBTaWRld2F5c1JsID0ge1xuICAgIGx0cjogU2lkZXdheXNSbEx0cixcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcbn07XG5jb25zdCBTaWRld2F5c0xyID0ge1xuICAgIGx0cjogU2lkZXdheXNMdEx0cixcbiAgICBydGw6IFNpZGV3YXlzTHRSdGxcbn07XG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XG4gICAgXCJob3Jpem9udGFsLXRiXCI6IEhvcml6b250YWxUYixcbiAgICBcInZlcnRpY2FsLWxyXCI6IFZlcnRpY2FsTHIsXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxuICAgIFwic2lkZXdheXMtbHJcIjogU2lkZXdheXNMcixcbiAgICBcInNpZGV3YXlzLXJsXCI6IFNpZGV3YXlzUmxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbG9naWNhbC1kaXJlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCwgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuLy9pbXBvcnQgeyBtZXJnZVN0eWxlcyB9IGZyb20gXCIuL21lcmdlLXN0eWxlXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmZ1bmN0aW9uIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIHNob3csIHBoYXNlKSB7XG4gICAgaWYgKHBoYXNlKVxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9LSR7cGhhc2V9YDtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7c2hvd31gO1xufVxubGV0IGR1bW15O1xuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xuICAgIC8vIFRyeSByZWFsbHkgaGFyZCB0byBtYWtlIHN1cmUgdGhpcyBpc24ndCBvcHRpbWl6ZWQgb3V0IGJ5IGFueXRoaW5nLlxuICAgIC8vIFdlIG5lZWQgaXQgZm9yIGl0cyBkb2N1bWVudCByZWZsb3cgc2lkZSBlZmZlY3QuXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBlO1xufVxuLyoqXG4gKiBBIGhvb2sgdGhhdCBhZGRzICYgcmVtb3ZlcyBjbGFzcyBuYW1lcyBpbiBhIHdheSB0aGF0IGZhY2lsaXRhdGVzIHByb3BlciB0cmFuc2l0aW9ucy5cbiAqXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgY29udGFpbnMgdGhlIHByb3BzIHJlbGF0ZWQgZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVGhlIHNlY29uZCBhcmd1bWVudCBjb250YWlucyBhbnkgb3RoZXIgcHJvcHMgeW91IG1pZ2h0IHdhbnQgbWVyZ2VkIGludG8gdGhlIGZpbmFsIHByb2R1Y3QgKHRoZXNlIGFyZSBub3QgcmVhZCBvciBtYW5pcHVsYXRlZCBvciBhbnl0aGluZyAtLSBpdCdzIHB1cmVseSBzaG9ydGhhbmQgYW5kIGNhbiBiZSBvbWl0dGVkIHdpdGggYHt9YCBhbmQgdGhlbiB5b3VyIG93biBgdXNlTWVyZ2VkUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBtZWFzdXJlLCBhbmltYXRlT25Nb3VudCwgY2xhc3NCYXNlLCBvblRyYW5zaXRpb25VcGRhdGUsIGV4aXRWaXNpYmlsaXR5LCBkdXJhdGlvbiwgc2hvdywgcmVmIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIGNvbnN0IHsgdXNlUmVmRWxlbWVudFByb3BzLCBnZXRFbGVtZW50IH0gPSB1c2VSZWZFbGVtZW50KHt9KTtcbiAgICBjb25zdCBbcGhhc2UsIHNldFBoYXNlXSA9IHVzZVN0YXRlKGFuaW1hdGVPbk1vdW50ID8gXCJpbml0XCIgOiBudWxsKTtcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUoc2hvdyA9PSBudWxsID8gbnVsbCA6IHNob3cgPyBcImVudGVyXCIgOiBcImV4aXRcIik7XG4gICAgY29uc3QgW3N1cmZhY2VXaWR0aCwgc2V0U3VyZmFjZVdpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdXJmYWNlSGVpZ2h0LCBzZXRTdXJmYWNlSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdXJmYWNlWCwgc2V0U3VyZmFjZVhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1cmZhY2VZLCBzZXRTdXJmYWNlWV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1dpZHRoLCBzZXRUcmFuc2l0aW9uaW5nV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdIZWlnaHQsIHNldFRyYW5zaXRpb25pbmdIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdYLCBzZXRUcmFuc2l0aW9uaW5nWF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1ksIHNldFRyYW5zaXRpb25pbmdZXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbiwgdXNlTG9naWNhbERpcmVjdGlvblByb3BzIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgY29uc3QgbG9naWNhbERpcmVjdGlvbiA9IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICBjb25zdCBvblRyYW5zaXRpb25VcGRhdGVSZWYgPSB1c2VSZWYob25UcmFuc2l0aW9uVXBkYXRlKTtcbiAgICBjb25zdCBwaGFzZVJlZiA9IHVzZVJlZihwaGFzZSk7XG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XG4gICAgY29uc3QgZHVyYXRpb25SZWYgPSB1c2VSZWYoZHVyYXRpb24pO1xuICAgIGNvbnN0IHRvb0Vhcmx5VGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB0b29FYXJseVZhbHVlUmVmID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHRvb0xhdGVUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IG9uVHJhbnNpdGlvbkVuZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZ2V0RWxlbWVudCgpICYmIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgc2V0UGhhc2UoXCJmaW5hbGl6ZVwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudCA9IG9uVHJhbnNpdGlvblVwZGF0ZTsgfSwgW29uVHJhbnNpdGlvblVwZGF0ZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHBoYXNlUmVmLmN1cnJlbnQgPSBwaGFzZTsgfSwgW3BoYXNlXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkdXJhdGlvblJlZi5jdXJyZW50ID0gZHVyYXRpb247IH0sIFtkdXJhdGlvbl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiYgcGhhc2UpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudD8uKGRpcmVjdGlvbiwgcGhhc2UpO1xuICAgIH0sIFtkaXJlY3Rpb24sIHBoYXNlXSk7XG4gICAgLy8gRXZlcnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBcInRyYW5zaXRpb25cIiwgYWRkIG91ciB0cmFuc2l0aW9uIHRpbWVvdXQgdGltZW91dHNcbiAgICAvLyB0byBjYXRjaCBhbnkgdGltZSBvblRyYW5zaXRpb25FbmQgZmFpbHMgdG8gcmVwb3J0IGZvciB3aGF0ZXZlciByZWFzb24gdG8gYmUgc2FmZVxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dER1cmF0aW9uID0gZHVyYXRpb25SZWYuY3VycmVudCA/PyAxMDAwO1xuICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgdG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XG4gICAgICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIGlmICh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfTtcbiAgICB9LCBbcGhhc2VdKTtcbiAgICAvLyBBbnkgdGltZSBcInNob3dcIiBjaGFuZ2VzLCB1cGRhdGUgb3VyIGRpcmVjdGlvbiBhbmQgcGhhc2UuXG4gICAgLy8gSW4gYWRkaXRpb24sIG1lYXN1cmUgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaWYgcmVxdWVzdGVkLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHNob3cgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQaGFzZSA9IHBoYXNlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBTd2FwIG91ciBkaXJlY3Rpb25cbiAgICAgICAgICAgIGlmIChzaG93KVxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImVudGVyXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImV4aXRcIik7XG4gICAgICAgICAgICBzZXRQaGFzZShwcmV2aW91c1BoYXNlID09PSBudWxsID8gXCJmaW5hbGl6ZVwiIDogXCJpbml0XCIpO1xuICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNpemVXaXRoVHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdYKHggKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWSh5ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1dpZHRoKHdpZHRoICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ0hlaWdodChoZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNQaGFzZSA9PT0gXCJmaW5hbGl6ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGdvaW5nIHRvIGJlIG1lc3Npbmcgd2l0aCB0aGUgYWN0dWFsIGVsZW1lbnQncyBjbGFzcywgXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlJ2xsIHdhbnQgYW4gZWFzeSB3YXkgdG8gcmVzdG9yZSBpdCBsYXRlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja3VwID0gZWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tZW50ZXJgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWluaXRgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWZpbmFsaXplYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWApO1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZVdpdGhvdXRUcmFuc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplV2l0aG91dFRyYW5zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VYKHggKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlWSh5ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVdpZHRoKHdpZHRoICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZUhlaWdodChoZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGJhY2t1cDtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3Nob3csIG1lYXN1cmUsIGNsYXNzQmFzZV0pO1xuICAgIC8vIEFueSB0aW1lIHRoZSBwaGFzZSBjaGFuZ2VzIHRvIGluaXQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgc2NyZWVuIGlzIHBhaW50ZWQsXG4gICAgLy8gY2hhbmdlIHRoZSBwaGFzZSB0byBcInRyYW5zaXRpb25cIiBhbmQgcmUtcmVuZGVyICgpLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KCk7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGRpcmVjdGlvblJlZi5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJlYWN0IGp1c3QgZmluaXNoZWQgcmVuZGVyaW5nIGluaXRcbiAgICAgICAgICAgICAgICAvLyBOb3cgc2V0IG91ciB0cmFuc2l0aW9uIHN0eWxlLlxuICAgICAgICAgICAgICAgIHNldFBoYXNlKFwidHJhbnNpdGlvblwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcGhhc2UsIG1lYXN1cmVdKTtcbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb247XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbjtcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XG4gICAgbGV0IGFsbW9zdERvbmUgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHtcbiAgICAgICAgcmVmLFxuICAgICAgICBzdHlsZTogcmVtb3ZlRW1wdHkoe1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdOiBkdXJhdGlvbixcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS14YF06IHN1cmZhY2VYLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXlgXTogc3VyZmFjZVksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2Utd2lkdGhgXTogc3VyZmFjZVdpZHRoLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWhlaWdodGBdOiBzdXJmYWNlSGVpZ2h0LFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWlubGluZS1pbnNldGBdOiBzdXJmYWNlSW5saW5lSW5zZXQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2staW5zZXRgXTogc3VyZmFjZUJsb2NrSW5zZXQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLXNpemVgXTogc3VyZmFjZUlubGluZVNpemUsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2stc2l6ZWBdOiBzdXJmYWNlQmxvY2tTaXplLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXhgXTogdHJhbnNpdGlvbmluZ1gsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteWBdOiB0cmFuc2l0aW9uaW5nWSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy13aWR0aGBdOiB0cmFuc2l0aW9uaW5nV2lkdGgsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaGVpZ2h0YF06IHRyYW5zaXRpb25pbmdIZWlnaHQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLWluc2V0YF06IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1pbnNldGBdOiB0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtc2l6ZWBdOiB0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1zaXplYF06IHRyYW5zaXRpb25pbmdCbG9ja1NpemVcbiAgICAgICAgfSksXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZCxcbiAgICAgICAgLi4uKHsgXCJhcmlhLWhpZGRlblwiOiBzaG93ID8gdW5kZWZpbmVkIDogXCJ0cnVlXCIgfSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChkaXJlY3Rpb24gJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uKSwgZGlyZWN0aW9uICYmIHBoYXNlICYmIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIGRpcmVjdGlvbiwgcGhhc2UpLCBleGl0VmlzaWJpbGl0eSA9PSBcInJlbW92ZWRcIiAmJiBgJHtjbGFzc0Jhc2V9LXJlbW92ZWQtb24tZXhpdGAsIGV4aXRWaXNpYmlsaXR5ID09IFwidmlzaWJsZVwiICYmIGAke2NsYXNzQmFzZX0tdmlzaWJsZS1vbi1leGl0YCwgYCR7Y2xhc3NCYXNlfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCwgYCR7Y2xhc3NCYXNlfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWApLFxuICAgIH0pKTtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbG1vc3REb25lLCBvdGhlclByb3BzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtfLCB2XSkgPT4gdiAhPSBudWxsKSk7XG59XG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgKndyYXBzIGFuIEhUTUxFbGVtZW50IG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCogYW5kIGFsbG93cyBpdCB0byB1c2UgQ1NTIHRvIHRyYW5zaXRpb24gaW4vb3V0LlxuICogQ29tYmluZXMgdGhlIHByb3BzIHBhc3NlZCB0byBpdCwgdGhlIHByb3BzIGl0cyBjaGlsZCBoYXMsIGFuZCB0aGUgcHJvcHMgbmVlZGVkIGZvciB0aGUgQ1NTIHRyYW5zaXRpb24sIGFuZCBwYXNzZXMgdGhlbVxuICogYWxsIHRvIHRoZSBjaGlsZCBlbGVtZW50IHlvdSBwcm92aWRlLlxuICpcbiAqIFRoaXMgaXMgdGhlIG1vc3QgZ2VuZXJhbCBjb21wb25lbnQgdGhhdCBvdGhlcnMgdXNlIGFzIGEgYmFzZS4gQnkgZGVmYXVsdCwgdGhpcyBjb21wb25lbnQgYnkgaXRzZWxmIGRvZXNuJ3QgYWN0dWFsbHkgYWRkIGFueSBDU1MgY2xhc3NlcyB0aGF0IGFuaW1hdGUgYW55dGhpbmcgKGxpa2Ugb3BhY2l0eSwgZm9yIGV4YW1wbGUpLlxuICogSXQgYWRkcyBjbGFzc2VzIGxpa2UgYHRyYW5zaXRpb24tZW50ZXItZmluYWxpemVgLCBidXQgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBlLmcuIGBmYWRlYCBjbGFzcyB0aGF0IHJlYWN0cyB0byBpdC5cbiAqXG4gKiBVc2UgdGhpcyBpZiB0aGUgb3RoZXIsIG1vcmUgc3BlY2lhbGl6ZWQgVHJhbnNpdGlvbiBjb21wb25lbnRzIGRvbid0IGZpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30gey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT48ZGl2PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30+PGRpdiB7Li4udXNlQ3JlYXRlRmFkZVByb3BzKC4uLil9PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuOiBjaGlsZCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIHNob3csIG9uVHJhbnNpdGlvblVwZGF0ZSwgYW5pbWF0ZU9uTW91bnQsIGNoaWxkTW91bnRCZWhhdmlvciwgLi4ucHJvcHMgfSwgcikge1xuICAgIGNvbnN0IFtoYXNTaG93bk9uY2UsIHNldEhhc1Nob3duT25jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvdWxkU2V0SGFzU2hvd25PbmNlID0gKGhhc1Nob3duT25jZSA9PT0gZmFsc2UgJiYgY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiBzaG93ID09PSB0cnVlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2hvdWxkU2V0SGFzU2hvd25PbmNlKVxuICAgICAgICBzZXRIYXNTaG93bk9uY2UodHJ1ZSk7IH0sIFtzaG91bGRTZXRIYXNTaG93bk9uY2VdKTtcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LXdoZW4tc2hvd2luZ1wiICYmICFzaG93KVxuICAgICAgICBjaGlsZCA9IGgoXCJkaXZcIiwgbnVsbCk7XG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgIXNob3cgJiYgaGFzU2hvd25PbmNlID09PSBmYWxzZSlcbiAgICAgICAgY2hpbGQgPSBoKFwiZGl2XCIsIG51bGwpO1xuICAgIGlmICghY2hpbGRJc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFRyYW5zaXRpb25hYmxlIGNvbXBvbmVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgY29tcG9uZW50IGNoaWxkIChlLmcuIGEgPGRpdj4sIGJ1dCBub3QgXFxcImEgc3RyaW5nXFxcIikuXCIpO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgbWVhc3VyZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG9uVHJhbnNpdGlvblVwZGF0ZSwgcmVmOiByLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wcyk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHMoKSh0cmFuc2l0aW9uUHJvcHMsIHsgLi4uY2hpbGQucHJvcHMsIHJlZjogY2hpbGQucmVmIH0pO1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlZFdpdGhDaGlsZHJlbik7XG59KTtcbmZ1bmN0aW9uIGNoaWxkSXNWTm9kZShjaGlsZCkge1xuICAgIGlmICghY2hpbGQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkICE9IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFwicHJvcHNcIiBpbiBjaGlsZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBDbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWJsb2NrYF06IChjbGlwT3JpZ2luQmxvY2sgPz8gY2xpcE9yaWdpbiA/PyAwKSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1taW4taW5saW5lYF06IChjbGlwTWluSW5saW5lID8/IGNsaXBNaW4gPz8gMSksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcbiAgICAgICAgfSxcbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbjtcbmV4cG9ydCBjb25zdCBDbGlwID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcCh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZhZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1mYWRlYCxcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1pbmBdOiAoZmFkZU1pbiA/PyAwKSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmFkZS1tYXhgXTogKGZhZGVNYXggPz8gMSksXG4gICAgICAgIH1cbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZhZGUgZWZmZWN0LlxuICpcbiAqIE5vdGUgdGhhdCB3aGlsZSBpdCBpcyBhYnNvbHV0ZWx5IHBvc3NpYmxlIHRvIHdyYXAgYW5vdGhlciB0cmFuc2l0aW9uIHdpdGggYDxGYWRlPmAsXG4gKiB0aGVyZSB3aWxsIGJlIHNvbWUgZHVwbGljYXRlIGNvZGUgcnVuIGFzIHR3byBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50cyBlbmQgdXAgb3BlcmF0aW5nIG9uIHRoZSBzYW1lIGVsZW1lbnQuXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxuICogb3IganVzdCBkaXJlY3RseSBhIGA8VHJhbnNpdGlvbmFibGU+YCBvbiB5b3VyIG93bi5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ2xpcCB9IGZyb20gXCIuL2NsaXBcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuO1xuZXhwb3J0IGNvbnN0IENsaXBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ2xpcEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoQ2xpcCwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cbiAqXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBtZWFzdXJlOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tY29sbGFwc2VgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxuICpcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXG4gKiBNYWtlIHN1cmUgeW91IGRvIHRlc3Rpbmcgb24gbG93ZXIgcG93ZXIgZGV2aWNlcywgb3IgcHJlZmVyIGEgbGlnaHRlclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBDb2xsYXBzZSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgQ29sbGFwc2VgIGBGYWRlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2VGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKENvbGxhcHNlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgU2xpZGUgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHNsaWRlVGFyZ2V0SW5saW5lID8/IDEpO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHNsaWRlVGFyZ2V0SW5saW5lKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IHNsaWRlVGFyZ2V0SW5saW5lOyB9LCBbc2xpZGVUYXJnZXRJbmxpbmVdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRCbG9jaylcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IHNsaWRlVGFyZ2V0QmxvY2s7IH0sIFtzbGlkZVRhcmdldEJsb2NrXSk7XG4gICAgaWYgKHNsaWRlVGFyZ2V0SW5saW5lID09IDApXG4gICAgICAgIHNsaWRlVGFyZ2V0SW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XG4gICAgaWYgKHNsaWRlVGFyZ2V0QmxvY2sgPT0gMClcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tc2xpZGVgLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1pbmxpbmVgXTogYCR7KHNsaWRlVGFyZ2V0SW5saW5lID8/IDApfWAsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXG4gICAgICAgIH1cbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cbiAqXG4gKiBQcm92aWRlIHRoZSBkaXJlY3Rpb24gdGhlIGVsZW1lbnQgd2lsbCB0cmF2ZWwgaW4gd2l0aCBgc2xpZGVJbmxpbmVgIGFuZCBgc2xpZGVCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYHNsaWRlSW5saW5lPXtpbmRleCAtIHNlbGVjdGVkSW5kZXh9YCBvciBzaW1pbGFyLilcbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGUoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gXCIuL3NsaWRlXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBTbGlkZSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIGBzbGlkZUlubGluZT17KGluZGV4IC0gc2VsZWN0ZWRJbmRleCkgLyAxMH1gIHdvdWxkIG1ha2UgdGhlIGVsZW1lbnQgbG9vayBsaWtlIGl0IGZhZGVzIG91dCBiZWZvcmUgaXQgdHJhdmVscyB0byBpdHMgdGFyZ2V0IGRlc3RpbmF0aW9uLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChTbGlkZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBab29tIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgcmV0dXJuICh1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXpvb21gLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4tYmxvY2tgXTogYCR7KHpvb21PcmlnaW5CbG9jayA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4taW5saW5lYF06IGAkeyh6b29tTWluSW5saW5lID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXG4gICAgICAgIH0sXG4gICAgfSwgb3RoZXJQcm9wcykpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21GYWRlYFxuICovXG5leHBvcnQgY29uc3QgWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb20oeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgWm9vbSB9IGZyb20gXCIuL3pvb21cIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFpvb20gYW5kIEZhZGUgZWZmZWN0cy5cbiAqXG4gKiBUaGlzIGlzIGFuIGlkZWFsIHRpbWUgdG8gdXNlIHRoZSBtaW5pbXVtIHNpemUgWm9vbSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcbiAqL1xuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBTbGlkZSB9IGZyb20gXCIuL3NsaWRlXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBTbGlkZSBhbmQgWm9vbSBlZmZlY3RzLlxuICpcbiAqIFByb2JhYmx5IGJlc3QgY29tYmluZWQgd2l0aCBgdXNlQ3JlYXRlRmFkZVByb3BzYCAob3IganVzdCB1c2luZyBhIGBTbGlkZVpvb21GYWRlYD8pLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVGYWRlWm9vbWAgYFpvb21gIGBGYWRlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChTbGlkZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVab29tUHJvcHMoeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlWm9vbSB9IGZyb20gXCIuL3NsaWRlLXpvb21cIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBab29tLCBTbGlkZSwgYW5kIEZhZGUgZWZmZWN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBpcyBiYXNpY2FsbHkganVzdCBzaG9ydGhhbmQgZm9yIHNvbWUgcHJvcCBjcmVhdGlvbiBhbmQgcHJvcCBtZXJnaW5nIGZ1bmN0aW9ucy5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFNsaWRlYCBgWm9vbWAgYEZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChTbGlkZVpvb20sIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDE4MCk7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYoZmxpcEFuZ2xlQmxvY2sgPz8gMCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUlubGluZSlcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBmbGlwQW5nbGVJbmxpbmU7IH0sIFtmbGlwQW5nbGVJbmxpbmVdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoZmxpcEFuZ2xlQmxvY2spXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBmbGlwQW5nbGVCbG9jazsgfSwgW2ZsaXBBbmdsZUJsb2NrXSk7XG4gICAgaWYgKGZsaXBBbmdsZUlubGluZSA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAoZmxpcEFuZ2xlQmxvY2sgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlQmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyhmbGlwQW5nbGVJbmxpbmUgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tcGVyc3BlY3RpdmVgXTogYCR7KHBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgIH1cbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtjbGFzc0Jhc2UgPz8gXCJ0cmFuc2l0aW9uXCJ9LXN3YXAtY29udGFpbmVyYCwgaW5saW5lICYmIGAke2NsYXNzQmFzZSA/PyBcInRyYW5zaXRpb25cIn0tc3dhcC1jb250YWluZXItaW5saW5lYClcbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbi8qKlxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXG4gKlxuICogWW91IG11c3QgbWFuYWdlIGVhY2ggY2hpbGQgYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudCdzIGBzaG93YCBwcm9wIC0tIHRoaXMgY29tcG9uZW50ICpkb2VzIG5vdCogbWFuYWdlIGFueSBzb3J0IG9mIHN0YXRlIGluIHRoYXQgcmVnYXJkLlxuICpcbiAqIExpa2UgYDxUcmFuc2l0aW9uYWJsZT5gLCAqdGhpcyB3cmFwcyBhbiBIVE1MRWxlbWVudCAob3Igb3RoZXIgcmVmLWZvcndhcmRpbmcgY29tcG9uZW50KSouIFRoaXMgd2lsbCBiZSB5b3VyIGNvbnRhaW5lciB0aGF0IGhvbGRzIGVhY2ggYDxUcmFuc2l0aW9uYWJsZT5gIChvciBjb21wb25lbnQgdGhhdCB1c2VzIGl0KS4gU3RyaWN0bHkgc3BlYWtpbmcgaXQgY291bGQgYmUgYW55dGhpbmcsIG5vdCBhIGA8VHJhbnNpdGlvbmFibGU+YCwgYnV0IGlmIGl0IGRvZXNudCd0IHRyYW5zaXRpb24gb3V0IHRoZW4gaXQncyBqdXN0IGdvaW5nIHRvIGJlIGhhbmdpbmcgYXJvdW5kIDEwMCUgb2YgdGhlIHRpbWUuXG4gKlxuICogTG9uZyB3YXkgb2Ygc2F5aW5nLCBpZiB5b3UgZ2V0IGEgY3J5cHRpYyBlcnJvciB3aXRoIHRoaXMgY29tcG9uZW50LCBtYWtlIHN1cmUgaXQgaGFzIGEgc2luZ2xlIGA8ZGl2PmAgY2hpbGQgb3Igc29tZXRoaW5nLlxuICogQHBhcmFtIHBhcmFtMFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGNvbnN0IFN3YXBwYWJsZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFN3YXBwYWJsZSh7IGNoaWxkcmVuLCBjbGFzc0Jhc2UsIGlubGluZSwgLi4ucCB9LCByZWYpIHtcbiAgICBpbmxpbmUgPz89IHR5cGVvZiBjaGlsZHJlbi50eXBlID09PSBcInN0cmluZ1wiICYmIGlubGluZUVsZW1lbnRzLmhhcyhjaGlsZHJlbi50eXBlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGNsYXNzQmFzZSwgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKCkodHJhbnNpdGlvblByb3BzLCBjaGlsZHJlbi5wcm9wcyk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZHJlbiwgbWVyZ2VkV2l0aENoaWxkcmVuKTtcbn0pO1xuLy8gSWYgXCJpbmxpbmVcIiBpc24ndCBleHBsaWNpdGx5IHByb3ZpZGVkLCB3ZSB0cnkgdG8gaW1wbGljaXRseSBkbyBpdCBiYXNlZCBvbiB0aGUgY2hpbGQncyB0YWcuXG4vLyBOb3QgcGVyZmVjdCwgYnV0IGl0J3Mgbm90IHN1cHBvc2VkIHRvIGJlLiBgaW5saW5lYCBpcyBmb3IgcGVyZmVjdC5cbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXG4gICAgXCJhXCIsXG4gICAgXCJhYmJyXCIsXG4gICAgXCJhY3JvbnltXCIsXG4gICAgXCJhdWRpb1wiLFxuICAgIFwiYlwiLFxuICAgIFwiYmRpXCIsXG4gICAgXCJiZG9cIixcbiAgICBcImJpZ1wiLFxuICAgIFwiYnJcIixcbiAgICBcImJ1dHRvblwiLFxuICAgIFwiY2FudmFzXCIsXG4gICAgXCJjaXRlXCIsXG4gICAgXCJjb2RlXCIsXG4gICAgXCJkYXRhXCIsXG4gICAgXCJkYXRhbGlzdFwiLFxuICAgIFwiZGVsXCIsXG4gICAgXCJkZm5cIixcbiAgICBcImVtXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaVwiLFxuICAgIFwiaWZyYW1lXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnNcIixcbiAgICBcImtiZFwiLFxuICAgIFwibGFiZWxcIixcbiAgICBcIm1hcFwiLFxuICAgIFwibWFya1wiLFxuICAgIFwibWV0ZXJcIixcbiAgICBcIm5vc2NyaXB0XCIsXG4gICAgXCJvYmplY3RcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGljdHVyZVwiLFxuICAgIFwicHJvZ3Jlc3NcIixcbiAgICBcInFcIixcbiAgICBcInJ1YnlcIixcbiAgICBcInNcIixcbiAgICBcInNhbXBcIixcbiAgICBcInNjcmlwdFwiLFxuICAgIFwic2VsZWN0XCIsXG4gICAgXCJzbG90XCIsXG4gICAgXCJzbWFsbFwiLFxuICAgIFwic3BhblwiLFxuICAgIFwic3Ryb25nXCIsXG4gICAgXCJzdWJcIixcbiAgICBcInN1cFwiLFxuICAgIFwic3ZnXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGV4dGFyZWFcIixcbiAgICBcInRpbWVcIixcbiAgICBcInVcIixcbiAgICBcInR0XCIsXG4gICAgXCJ2YXJcIixcbiAgICBcInZpZGVvXCIsXG4gICAgXCJ3YnJcIlxuXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsiRU1QVFlfT0JKIiwiRU1QVFlfQVJSIiwiSVNfTk9OX0RJTUVOU0lPTkFMIiwiY3VycmVudEluZGV4IiwiY3VycmVudENvbXBvbmVudCIsInByZXZSYWYiLCJjdXJyZW50SG9vayIsImFmdGVyUGFpbnRFZmZlY3RzIiwib2xkQmVmb3JlRGlmZiIsIm9wdGlvbnMiLCJvbGRCZWZvcmVSZW5kZXIiLCJvbGRBZnRlckRpZmYiLCJkaWZmZWQiLCJvbGRDb21taXQiLCJvbGRCZWZvcmVVbm1vdW50IiwidW5tb3VudCIsImdldEhvb2tTdGF0ZSIsImluZGV4IiwidHlwZSIsImhvb2tzIiwibGVuZ3RoIiwicHVzaCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsInVuZGVmaW5lZCIsIm5leHRWYWx1ZSIsImFjdGlvbiIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJhcmdzQ2hhbmdlZCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsInZub2RlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaG9vayIsImNvbXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsImkiLCJzaGFsbG93RGlmZmVycyIsImEiLCJiIiwiZm9yd2FyZFJlZiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInRvVmFsIiwibWl4IiwiayIsInkiLCJzdHIiLCJBcnJheSIsImlzQXJyYXkiLCJ0bXAiLCJ4IiwiYXJndW1lbnRzIiwiVW5zZXQiLCJoIiwiY2xvbmVFbGVtZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7T0FBTztFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsSUFBTUEsR0FBQUEsR0FBWSxFQUFsQjtFQUFBLElBQ01DLEdBQUFBLEdBQVksRUFEbEI7RUFBQSxJQUVNQyxHQUFBQSxHQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRLEdBQUd1QixDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMzRixNQUFNLFFBQVEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDdkgsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzdGLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUM5RixNQUFNLFNBQVMsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDL0YsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3RHLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwRyxNQUFNLFFBQVEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFdBQVcsQ0FBRSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFbkksTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3JGLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNyRixNQUFNLFFBQVEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFckYsUUFDSWdEO1VBQ0lBLGFBQUssRUFBRSxFQUFDLFVBQVU7Y0FDZEEsb0NBQTBCO2NBQzFCQTtrQkFBT0EsZUFBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEtBQUssR0FBVTsrQkFBa0I7Y0FDM0ZBLGFBQUssU0FBUyxFQUFDLFlBQVk7a0JBQ3ZCQSw2Q0FBb0M7a0JBQ3BDQSxlQUFPLFNBQVMsRUFBQyxZQUFZO3NCQUFDQSxlQUFPLElBQUksRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFJOzJCQUFVO2tCQUN4SEEsZUFBTyxTQUFTLEVBQUMsWUFBWTtzQkFBQ0EsZUFBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBSTsyQkFBVTtrQkFDeEhBLGVBQU8sU0FBUyxFQUFDLFlBQVk7c0JBQUNBLGVBQU8sSUFBSSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUk7MkJBQVUsQ0FDdEg7Y0FFTkEsYUFBSyxTQUFTLEVBQUMsWUFBWTtrQkFDdkJBLDBDQUFpQztrQkFDakNBLGVBQU8sU0FBUyxFQUFDLFlBQVk7c0JBQUNBLGVBQU8sSUFBSSxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxTQUFTLEdBQUk7dURBQXNDO2tCQUMvSkEsZUFBTyxTQUFTLEVBQUMsWUFBWTtzQkFBQ0EsZUFBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxJQUFJLFFBQVEsR0FBSTsyQ0FBMEI7a0JBQ2pKQSxlQUFPLFNBQVMsRUFBQyxZQUFZO3NCQUFDQSxlQUFPLElBQUksRUFBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksU0FBUyxHQUFJO3NDQUFxQixDQUMzSTtjQUVOQTtrQkFBS0E7c0JBQU9BLGVBQU8sT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBRSxRQUFRLEdBQVU7a0NBQWlCLENBQU07Y0FFcEdBLGFBQUssU0FBUyxFQUFDLFlBQVk7a0JBQ3ZCQSx5Q0FBZ0M7a0JBQ2hDQTtzQkFBT0EsZUFBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLFlBQVksR0FBSTttQ0FBa0I7a0JBQzVIQTtzQkFBT0EsZUFBTyxJQUFJLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxJQUFJLFVBQVUsR0FBSTtpQ0FBZ0IsQ0FDdEg7Y0FDTkEsa0JBQVUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBSSxDQUU3RDtVQUNOQSxhQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxHQUFHLFFBQVEsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVc7Y0FDL0hBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FDdEZBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FFdEZBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FDdEZBLElBQUMsU0FBUyxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FDdkZBLElBQUMsYUFBYSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FDM0ZBLElBQUMsWUFBWSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7Y0FDMUZBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUksQ0FFcEYsQ0FDUCxFQUNOO0VBQ0wsQ0FBQztFQUdELFNBQVMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFpRjtNQUM3SSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHdkUsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsQyxNQUFNLFVBQVUsR0FBR3VCLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDbEksTUFBTSxVQUFVLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxNQUFNLENBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUF1QixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFHbEksTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO01BQ2YsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO01BRWxCLE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxLQUFLZ0QsSUFBQyxDQUFDLElBQUMsSUFBSSxFQUFFLFlBQVksS0FBSyxDQUFDLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHO1VBQUVBLGFBQUssU0FBUyxFQUFDLGVBQWU7Y0FBRSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztjQUFDQTtrQkFBS0Esd0NBQWtDLENBQU0sQ0FBTSxDQUFJLENBQUE7TUFFbk8sT0FBT0EsYUFBSyxTQUFTLEVBQUMsY0FBYztVQUNoQ0EsdUJBQWE7VUFDYkEsYUFBSyxTQUFTLEVBQUMsTUFBTTtjQUNqQkEsYUFBSyxTQUFTLEVBQUMsZUFBZTtrQkFDMUJBOztzQkFBb0JBLGVBQU8sT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUksQ0FBUTtrQkFDbEhBOztzQkFBb0JBLGVBQU8sT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUksQ0FBUSxDQUNoSDtjQUVOQSxJQUFDLENBQUMsSUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRztrQkFDekVBLElBQUMsU0FBUztzQkFDTkEsYUFBSyxTQUFTLEVBQUMsTUFBTTswQkFDaEIsU0FBUyxDQUFDLENBQUMsQ0FBQzswQkFDWixTQUFTLENBQUMsQ0FBQyxDQUFDOzBCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNFLENBQ1o7Y0FDSEE7a0JBQU1BLGlCQUFNLElBQUksRUFBRTtVQUNyQixRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRzthQUMvQixHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRzthQUN6QixHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsY0FBYyxJQUFJLFFBQVEsR0FBRztvQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLEVBQUU7OztTQUdqRCxFQUFFO2dCQUNLLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHO21CQUN4QyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRzttQkFDekIsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLGNBQWMsSUFBSSxRQUFRLEdBQUc7MEJBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxFQUFFOzs7O1VBSXRELEVBQUU7U0FDSCxFQUFFLFVBQVUsWUFBWSxDQUFDLFFBQVEsRUFBRTtTQUNuQyxFQUFFLFVBQVUsWUFBWSxDQUFDLFFBQVEsRUFBRTs7O0lBR3hDLEVBQUUsR0FBRyxDQUFPLENBQU8sQ0FDVCxDQUNKLENBQUE7RUFDVixDQUFDO0VBSUQsU0FBUyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQWlGO01BQzdJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUd2RSxDQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDNUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBR0EsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHQSxDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBR0EsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ2pCQSxDQUFRLENBQUMsS0FBSyxFQUFFO01BQzlDLE1BQU0sY0FBYyxHQUFHdUIsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwSSxNQUFNLGVBQWUsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUV0SSxNQUFNLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztNQUNyQyxNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQztNQUUxQyxNQUFNLFNBQVMsR0FBRyxDQUFDLENB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QUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN4SSxNQUFNLGFBQWEsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFNBQVMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN4SSxNQUFNLGVBQWUsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUN0SSxNQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFP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LEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLGNBQWMsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUMxSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwSSxNQUFNLFdBQVcsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUNwSSxNQUFNLGVBQWUsR0FBR0EsQ0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFdBQVcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUV0SSxNQUFNLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztNQUNyQyxNQUFNLEVBQUUsR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLE1BQU0sQ0FBQztNQUUxQyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQVMsS0FBS2dELElBQUMsQ0FBQyxJQUFDLElBQUksRUFBRSxZQUFZLEtBQUssQ0FBQyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLElBQUks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
