(function () {
  'use strict';

  var n,
      l$1,
      u$1,
      t$1,
      o$1,
      r$1,
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
        o,
        r,
        f = {};

    for (r in u) {
      "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    }

    if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) {
      void 0 === f[r] && (f[r] = l.defaultProps[r]);
    }
    return y$1(l, f, t, o, null);
  }

  function y$1(n, i, t, o, r) {
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
    return null != l$1.vnode && l$1.vnode(f), f;
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
    (!n.__d && (n.__d = !0) && t$1.push(n) && !g$1.__r++ || r$1 !== l$1.debounceRendering) && ((r$1 = l$1.debounceRendering) || o$1)(g$1);
  }

  function g$1() {
    for (var n; g$1.__r = t$1.length;) {
      n = t$1.sort(function (n, l) {
        return n.__v.__b - l.__v.__b;
      }), t$1 = [], n.some(function (n) {
        var l, u, i, t, o, r;
        n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a$1({}, t)).__v = t.__v + 1, j$2(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k$1(t) : o, t.__h), z(u, t), t.__e != o && b$1(t)));
      });
    }
  }

  function w$2(n, l, u, i, t, o, r, f, s, a) {
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
        j$2(n, _, p = p || e$1, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && null != _.__k && _.__k === p.__k ? _.__d = s = x$2(_, s, n) : s = P$1(n, _, p, w, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && p.__e == s && s.parentNode != n && (s = k$1(p));
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
    var i, t;

    for (i = 0; i < n.__k.length; i++) {
      (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? x$2(t, l, u) : P$1(u, t, t, n.__k, t.__e, l));
    }

    return l;
  }

  function A$2(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
      A$2(n, l);
    }) : l.push(n)), l;
  }

  function P$1(n, l, u, i, t, o) {
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

  function $$1(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$1.test(l) ? u : u + "px";
  }

  function H$1(n, l, u, i, t) {
    var o;

    n: if ("style" === l) {
      if ("string" == typeof u) n.style.cssText = u;else {
        if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) {
          u && l in u || $$1(n.style, l, "");
        }
        if (u) for (l in u) {
          i && u[l] === i[l] || $$1(n.style, l, u[l]);
        }
      }
    } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$1 : I, o) : n.removeEventListener(l, o ? T$1 : I, o);else if ("dangerouslySetInnerHTML" !== l) {
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

  function j$2(n, u, i, t, o, r, f, e, c) {
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
    null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l$1.__b) && s(u);

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
        h.context = x, h.props = m, h.state = h.__s, (s = l$1.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$1(a$1({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d$1 && null == s.key ? s.props.children : s, w$2(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
      } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$1(i.__e, u, i, t, o, r, f, c);

      (s = l$1.diffed) && s(u);
    } catch (n) {
      u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, i);
    }
  }

  function z(n, u) {
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

  function L$1(l, u, i, t, o, r, f, c) {
    var s,
        a,
        v,
        y = i.props,
        p = u.props,
        d = u.type,
        _ = 0;
    if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++) {
      if ((s = r[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
        l = s, r[_] = null;
        break;
      }
    }

    if (null == l) {
      if (null === d) return document.createTextNode(p);
      l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
    }

    if (null === d) y === p || c && l.data === p || (l.data = p);else {
      if (r = r && n.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
        if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) {
          y[l.attributes[_].name] = l.attributes[_].value;
        }
        (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
      }

      if (C$1(l, p, y, o, c), v) u.__k = [];else if (_ = u.props.children, w$2(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k$1(i, 0), c), null != r) for (_ = r.length; _--;) {
        null != r[_] && h$1(r[_]);
      }
      c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H$1(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$1(l, "checked", _, y.checked, !1));
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
    var t, o;

    if (l$1.unmount && l$1.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$1(t, null, u)), null != (t = n.__c)) {
      if (t.componentWillUnmount) try {
        t.componentWillUnmount();
      } catch (n) {
        l$1.__e(n, u);
      }
      t.base = t.__P = null;
    }

    if (t = n.__k) for (o = 0; o < t.length; o++) {
      t[o] && N(t[o], u, "function" != typeof n.type);
    }
    i || null == n.__e || h$1(n.__e), n.__e = n.__d = void 0;
  }

  function O$1(n, l, u) {
    return this.constructor(n, u);
  }

  function S$1(u, i, t) {
    var o, r, f;
    l$1.__ && l$1.__(u, i), r = (o = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j$2(i, u = (!o && t || i).__k = v$1(d$1, null, [u]), r || e$1, e$1, void 0 !== i.ownerSVGElement, !o && t ? [t] : r ? null : i.firstChild ? n.call(i.childNodes) : null, f, !o && t ? t : r ? r.__e : i.firstChild, o), z(f, u);
  }

  function B(l, u, i) {
    var t,
        o,
        r,
        f = a$1({}, l.props);

    for (r in u) {
      "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
    }

    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y$1(l.type, f, t || l.key, o || l.ref, null);
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
  }, _.prototype.render = d$1, t$1 = [], o$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0;

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
    })(x$1)), u = void 0;
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
        f = !0 === t.__h;

    r.__u++ || f || r.setState({
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
      P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      V = function (n) {
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

  function $() {
    return this.defaultPrevented;
  }

  l$1.event = function (n) {
    return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = $, n.nativeEvent = n;
  };

  var G = {
    configurable: !0,
    get: function () {
      return this.class;
    }
  },
      J = l$1.vnode;

  l$1.vnode = function (n) {
    var t = n.type,
        e = n.props,
        r = e;

    if ("string" == typeof t) {
      for (var u in r = {}, e) {
        var o = e[u];
        "value" === u && "defaultValue" in e && null == o || ("defaultValue" === u && "value" in e && null == e.value ? u = "value" : "download" === u && !0 === o ? o = "" : /ondoubleclick/i.test(u) ? u = "ondblclick" : /^onchange(textarea|input)/i.test(u + t) && !V(e.type) ? u = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u) ? u = u.toLowerCase() : P.test(u) ? u = u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[u] = o);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = -1 != r.value.indexOf(n.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
        n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
      })), n.props = r;
    }

    t && e.class != e.className && (G.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", G)), n.$$typeof = j, J && J(n);
  };

  var K = l$1.__r;

  l$1.__r = function (n) {
    K && K(n);
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

      if (lhs == null && rhs == null) {
        return undefined;
      } else if (lhs == null) {
        return rhs;
      } else if (rhs == null) {
        return lhs;
      } else {
        var ret = A$1(current => {
          processRef(current, lhs);
          processRef(current, rhs);
        }, [lhs, rhs]);
        return ret;
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

  /**
   * Merges two style objects, returning the result.
   *
   * @param style The user-given style prop for this component
   * @param obj The CSS properties you want added to the user-given style
   * @returns A CSS object containing the properties of both objects.
   */
  function useMergedStyles(lhs, rhs) {
    var _lhs$style, _rhs$style;

    // Easy case, when there are no styles to merge return nothing.
    if (!lhs && !rhs) return undefined;

    if (typeof lhs != typeof rhs) {
      // Easy cases, when one is null and the other isn't.
      if (lhs && !rhs) return lhs;
      if (!lhs && rhs) return rhs; // They're both non-null but different types.
      // Convert the string type to an object bag type and run it again.

      if (lhs && rhs) {
        if (typeof lhs == "string") return useMergedStyles({
          style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":")))
        }, rhs);
        if (typeof rhs == "string") return useMergedStyles(lhs, {
          style: Object.fromEntries(lhs.split(";").map(statement => statement.split(":")))
        });
      } // Logic???


      return undefined;
    } // They're both strings, just concatenate them.


    if (typeof lhs == "string") {
      return "".concat(lhs, ";").concat(rhs); // TODO: Improve the typing to make this possible
    } // They're both objects, just merge them.


    return _objectSpread2(_objectSpread2({}, (_lhs$style = lhs === null || lhs === void 0 ? void 0 : lhs.style) !== null && _lhs$style !== void 0 ? _lhs$style : {}), (_rhs$style = rhs === null || rhs === void 0 ? void 0 : rhs.style) !== null && _rhs$style !== void 0 ? _rhs$style : {});
  }

  var _excluded$e = ["children", "class", "className", "style", "ref"],
      _excluded2 = ["children", "class", "className", "style", "ref"];

  var log = str => {
    debugger;
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
      }); // Now, do *everything* else
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
    return (...args) => {
      var lv = lhs === null || lhs === void 0 ? void 0 : lhs(...args);
      var rv = rhs === null || rhs === void 0 ? void 0 : rhs(...args);
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


  function useLogicalDirection(element) {
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
    h(() => {
      if (element) {
        var computedStyles = window.getComputedStyle(element);
        var w = computedStyles.writingMode;
        var t = computedStyles.textOrientation;
        var d = computedStyles.direction;
        setWritingMode(w || "horizontal-tb");
        setDirection(d || "rtl");
        setTextOrientation(t || "mixed");
      }
    });
    var getLogicalDirection = A$1(() => {
      var _direction;

      var writingMode = writingModeRef.current;
      var direction = directionRef.current;
      var textOrientation = textOrientationRef.current;
      if (!writingMode || !direction || !textOrientation) return null;
      if (textOrientation == "upright") direction = "ltr";
      return _objectSpread2({}, WritingModes[writingMode !== null && writingMode !== void 0 ? writingMode : "horizontal-tb"][(_direction = direction) !== null && _direction !== void 0 ? _direction : "ltr"]);
    }, [writingModeRef, directionRef, textOrientationRef]);
    var convertToLogicalOrientation = A$1((elementOrientation, direction) => {
      var _direction2, _direction3;

      (_direction2 = direction) !== null && _direction2 !== void 0 ? _direction2 : direction = getLogicalDirection();
      if (((_direction3 = direction) === null || _direction3 === void 0 ? void 0 : _direction3.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, [getLogicalDirection]);
    var convertToPhysicalOrientation = A$1((elementOrientation, direction) => {
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
    var convertElementSize = A$1((elementSize, direction) => {
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

  /**
   * Slightly enhanced version of `useState` that includes a getter that remains constant
   * (i.e. you can use it in `useEffect` and friends without it being a dependency).
   *
   * @param initialState
   * @returns
   */

  function useState(initialState) {
    // We keep both
    var [state, setState] = l(initialState);
    var ref = s(state); // Hijack the normal setter function 
    // to also set our ref to the new value

    var set = A$1(value => {
      if (typeof value === "function") {
        var callback = value;
        setState(prevValue => {
          var nextValue = callback(prevValue);
          ref.current = nextValue;
          return nextValue;
        });
      } else {
        ref.current = value;
        setState(value);
      }
    }, []);

    var get = () => {
      return ref.current;
    };

    console.assert(ref.current === state);
    return [state, set, get];
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

  function useRefElement() {
    // Let us store the actual (reference to) the element we capture
    var [element, setElement, getElement] = useState(null); // Create a RefCallback that's fired when mounted 
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
      element,
      getElement
    };
  }

  var _excluded$d = ["children", "duration", "classBase", "measure", "exitVisibility", "open", "onTransitionUpdate", "animateOnMount"];

  function getClassName(classBase, open, phase) {
    if (phase) return "".concat(classBase || "transition", "-").concat(open, "-").concat(phase);else return "".concat(classBase || "transition", "-").concat(open);
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


  function useCreateTransitionableProps({
    measure,
    animateOnMount,
    classBase,
    onTransitionUpdate,
    exitVisibility,
    duration,
    open,
    ref
  }, otherProps) {
    var _classBase;

    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    var {
      element,
      useRefElementProps
    } = useRefElement();
    var [phase, setPhase] = l(animateOnMount ? "init" : null);
    var [direction, setDirection] = l(open == null ? null : open ? "enter" : "exit");
    var [surfaceWidth, setSurfaceWidth] = l(null);
    var [surfaceHeight, setSurfaceHeight] = l(null);
    var [surfaceX, setSurfaceX] = l(null);
    var [surfaceY, setSurfaceY] = l(null);
    var [transitioningWidth, setTransitioningWidth] = l(null);
    var [transitioningHeight, setTransitioningHeight] = l(null);
    var [transitioningX, setTransitioningX] = l(null);
    var [transitioningY, setTransitioningY] = l(null);
    var {
      getLogicalDirection
    } = useLogicalDirection(element);
    var logicalDirection = getLogicalDirection();
    var onTransitionUpdateRef = s(onTransitionUpdate);
    var phaseRef = s(phase);
    var directionRef = s(direction);
    var durationRef = s(duration);
    var tooEarlyTimeoutRef = s(null);
    var tooEarlyValueRef = s(true);
    var tooLateTimeoutRef = s(null);
    var onTransitionEnd = A$1(e => {
      if (e.target === element && tooEarlyValueRef.current == false) {
        setPhase("finalize");
      }
    }, [element]);
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
    }, [phase]); // Any time "open" changes, update our direction and phase.
    // In addition, measure the size of the element if requested.

    h(() => {
      if (element && open != null) {
        var previousPhase = phaseRef.current; // Swap our direction

        if (open) setDirection("enter");else setDirection("exit");
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
    }, [open, element, measure, classBase]); // Any time the phase changes to init, immediately before the screen is painted,
    // change the phase to "transition" and re-render ().

    h(() => {
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
    }, [phase, measure, element]);
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
    var almostDone = useRefElementProps(_objectSpread2(_objectSpread2({
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
      "aria-hidden": open ? undefined : "true"
    }), {}, {
      className: clsx(direction && getClassName(classBase, direction), direction && phase && getClassName(classBase, direction, phase), exitVisibility == "removed" && "".concat(classBase, "-removed-on-exit"), exitVisibility == "visible" && "".concat(classBase, "-visible-on-exit"), "".concat(classBase, "-inline-direction-").concat(inlineDirection !== null && inlineDirection !== void 0 ? inlineDirection : "ltr"), "".concat(classBase, "-block-direction-").concat(blockDirection !== null && blockDirection !== void 0 ? blockDirection : "ttb"))
    }));
    return useMergedProps()(almostDone, otherProps);
  }

  function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
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
   * @example `<Transitionable open={open} {...useCreateFadeProps(...)}><div>{children}</div></Transitionable>`
   * @example `<Transitionable open={open}><div {...useCreateFadeProps(...)}>{children}</div></Transitionable>`
   */


  var Transitionable = forwardElementRef(function Transition(_ref, r) {
    var {
      children: child,
      duration,
      classBase,
      measure,
      exitVisibility,
      open,
      onTransitionUpdate,
      animateOnMount
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded$d);

    if (!childIsVNode(child)) {
      throw new Error("A Transitionable component must have exactly one component child (e.g. a <div>, but not \"a string\").");
    }

    var transitionProps = useCreateTransitionableProps({
      classBase,
      duration,
      measure,
      open,
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

  var _excluded$c = ["classBase", "clipOrigin", "clipOriginInline", "clipOriginBlock", "clipMin", "clipMinInline", "clipMinBlock", "open"];
  /**
   * Creates a set of props that implement a Clip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */

  function useCreateClipProps({
    classBase,
    clipOrigin,
    clipOriginInline,
    clipOriginBlock,
    clipMin,
    clipMinInline,
    clipMinBlock
  }, otherProps) {
    var _classBase, _ref, _ref2, _ref3, _ref4;

    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return useMergedProps()({
      className: clsx("".concat(classBase, "-clip")),
      classBase,
      style: {
        ["--".concat(classBase, "-clip-origin-inline")]: (_ref = clipOriginInline !== null && clipOriginInline !== void 0 ? clipOriginInline : clipOrigin) !== null && _ref !== void 0 ? _ref : 0.5,
        ["--".concat(classBase, "-clip-origin-block")]: (_ref2 = clipOriginBlock !== null && clipOriginBlock !== void 0 ? clipOriginBlock : clipOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0,
        ["--".concat(classBase, "-clip-min-inline")]: (_ref3 = clipMinInline !== null && clipMinInline !== void 0 ? clipMinInline : clipMin) !== null && _ref3 !== void 0 ? _ref3 : 1,
        ["--".concat(classBase, "-clip-min-block")]: (_ref4 = clipMinBlock !== null && clipMinBlock !== void 0 ? clipMinBlock : clipMin) !== null && _ref4 !== void 0 ? _ref4 : 0
      }
    }, otherProps);
  }
  var Clip = forwardElementRef(function Clip(_ref5, ref) {
    var {
      classBase,
      clipOrigin,
      clipOriginInline,
      clipOriginBlock,
      clipMin,
      clipMinInline,
      clipMinBlock,
      open
    } = _ref5,
        rest = _objectWithoutProperties(_ref5, _excluded$c);

    return v$1(Transitionable, _objectSpread2({
      open: open
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

  var _excluded$b = ["classBase", "fadeMin", "fadeMax", "open"];
  /**
   * Creates a set of props that implement a Fade transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   */

  function useCreateFadeProps({
    classBase,
    fadeMin,
    fadeMax
  }, otherProps) {
    var _classBase;

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

  var Fade = forwardElementRef(function Fade(_ref, ref) {
    var {
      classBase,
      fadeMin,
      fadeMax,
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$b);

    return v$1(Transitionable, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$a = ["classBase", "fadeMin", "fadeMax", "open"];
  var ClipFade = forwardElementRef(function ClipFade(_ref, ref) {
    var {
      classBase,
      fadeMin,
      fadeMax,
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$a);

    return v$1(Clip, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$9 = ["classBase", "open", "minBlockSize"];
  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   * Be sure to merge these returned props with whatever the user passed in.
   *
   * IMPORTANT: If used outside of a `<Collapse />`, you must include the `measure` prop on the `<Transitionable>` that you use.
   *
   * @example <Transitionable measure {...useCreateCollapseProps(...)} />
   */

  function useCreateCollapseProps({
    classBase,
    minBlockSize
  }, otherProps) {
    var _classBase;

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

  var Collapse = forwardElementRef(function Collapse(_ref, ref) {
    var {
      classBase,
      open,
      minBlockSize
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$9);

    return v$1(Transitionable, _objectSpread2({
      open: open
    }, useCreateCollapseProps({
      classBase,
      minBlockSize
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$8 = ["classBase", "fadeMin", "fadeMax", "open"];
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
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$8);

    return v$1(Collapse, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$7 = ["classBase", "slideTargetInline", "slideTargetBlock", "open"];
  /**
   * Creates a set of props that implement a Slide transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateSlideProps({
    classBase,
    slideTargetInline,
    slideTargetBlock
  }, otherProps) {
    var _classBase, _slideTargetInline, _slideTargetBlock, _slideTargetInline2, _slideTargetBlock2;

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

  var Slide = forwardElementRef(function Slide(_ref, ref) {
    var {
      classBase,
      slideTargetInline,
      slideTargetBlock,
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$7);

    return v$1(Transitionable, _objectSpread2({
      open: open
    }, useCreateSlideProps({
      classBase,
      slideTargetInline,
      slideTargetBlock
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$6 = ["classBase", "fadeMin", "fadeMax", "open"];
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
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$6);

    return v$1(Slide, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$5 = ["classBase", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "zoomMin", "zoomMinInline", "zoomMinBlock", "open"];
  /**
   * Creates a set of props that implement a Zoom transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateZoomProps({
    classBase,
    zoomOrigin,
    zoomOriginInline,
    zoomOriginBlock,
    zoomMin,
    zoomMinInline,
    zoomMinBlock
  }, otherProps) {
    var _classBase, _ref, _ref2, _ref3, _ref4;

    (_classBase = classBase) !== null && _classBase !== void 0 ? _classBase : classBase = "transition";
    return useMergedProps()({
      className: "".concat(classBase, "-zoom"),
      classBase,
      style: {
        ["--".concat(classBase, "-zoom-origin-inline")]: "".concat((_ref = zoomOriginInline !== null && zoomOriginInline !== void 0 ? zoomOriginInline : zoomOrigin) !== null && _ref !== void 0 ? _ref : 0.5),
        ["--".concat(classBase, "-zoom-origin-block")]: "".concat((_ref2 = zoomOriginBlock !== null && zoomOriginBlock !== void 0 ? zoomOriginBlock : zoomOrigin) !== null && _ref2 !== void 0 ? _ref2 : 0.5),
        ["--".concat(classBase, "-zoom-min-inline")]: "".concat((_ref3 = zoomMinInline !== null && zoomMinInline !== void 0 ? zoomMinInline : zoomMin) !== null && _ref3 !== void 0 ? _ref3 : 0),
        ["--".concat(classBase, "-zoom-min-block")]: "".concat((_ref4 = zoomMinBlock !== null && zoomMinBlock !== void 0 ? zoomMinBlock : zoomMin) !== null && _ref4 !== void 0 ? _ref4 : 0)
      }
    }, otherProps);
  }
  /**
   * Wraps a div (etc.) and allows it to transition in/out smoothly with a Zoom effect.
   * @see `Transitionable` `ZoomFade`
   */

  var Zoom = forwardElementRef(function Zoom(_ref5, ref) {
    var {
      classBase,
      zoomOrigin,
      zoomOriginInline,
      zoomOriginBlock,
      zoomMin,
      zoomMinInline,
      zoomMinBlock,
      open
    } = _ref5,
        rest = _objectWithoutProperties(_ref5, _excluded$5);

    return v$1(Transitionable, _objectSpread2({
      open: open
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

  var _excluded$4 = ["classBase", "fadeMin", "fadeMax", "open"];
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
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$4);

    return v$1(Zoom, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$3 = ["classBase", "zoomMin", "zoomMinInline", "zoomMinBlock", "zoomOrigin", "zoomOriginInline", "zoomOriginBlock", "open"];
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
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$3);

    return v$1(Slide, _objectSpread2({
      open: open
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

  var _excluded$2 = ["classBase", "fadeMin", "fadeMax", "open"];
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
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$2);

    return v$1(SlideZoom, _objectSpread2({
      open: open
    }, useCreateFadeProps({
      classBase,
      fadeMin,
      fadeMax
    }, _objectSpread2(_objectSpread2({}, rest), {}, {
      ref
    }))));
  });

  var _excluded$1 = ["classBase", "flipAngleInline", "flipAngleBlock", "perspective", "open"];
  /**
   * Creates a set of props that implement a Flip transition. Like all `useCreate*Props` hooks, must be used in tamdem with a `Transitionable` component (or `useCreateTransitionableProps`).
   */

  function useCreateFlipProps({
    classBase,
    flipAngleInline,
    flipAngleBlock,
    perspective
  }, otherProps) {
    var _classBase, _flipAngleInline, _flipAngleBlock, _flipAngleInline2, _flipAngleBlock2;

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

  var Flip = forwardElementRef(function Flip(_ref, ref) {
    var {
      classBase,
      flipAngleInline,
      flipAngleBlock,
      perspective,
      open
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded$1);

    return v$1(Transitionable, _objectSpread2({
      open: open
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

  function useCreateSwappableProps({
    inline,
    classBase
  }, otherProps) {
    return useMergedProps()({
      className: clsx("".concat(classBase !== null && classBase !== void 0 ? classBase : "transition", "-swap-container"), inline && "".concat(classBase !== null && classBase !== void 0 ? classBase : "transition", "-swap-container-inline"))
    }, otherProps);
  }
  /**
   * Allows a set of child <Transitionable> components to animate in & out in-place. Very useful for, e.g., tab panels.
   *
   * You must manage each child `<Transitionable>` component's `open` prop -- this component *does not* manage any sort of state in that regard.
   *
   * Like `<Transitionable>`, *this wraps an HTMLElement (or other ref-forwarding component)*. This will be your container that holds each `<Transitionable>` (or component that uses it). Strictly speaking it could be anything, not a `<Transitionable>`, but if it doesnt't transition out then it's just going to be hanging around 100% of the time.
   *
   * Long way of saying, if you get a cryptic error with this component, make sure it has a single `<div>` child or something.
   * @param param0
   * @returns
   */

  var Swappable = forwardElementRef(function Swappable(_ref, ref) {
    var _inline;

    var {
      children,
      classBase,
      inline
    } = _ref,
        p = _objectWithoutProperties(_ref, _excluded);

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
      const [open1, setOpen1] = l(true);
      const [open3, setOpen3] = l(0);
      const [reflow, setReflow] = l("hidden");
      const [duration, setDuration] = l(175);
      const [text, setText] = l("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
      const onInput1 = A$1((e) => { setOpen1(o => !o); e.preventDefault(); }, []);
      const onInput3 = A$1((e) => { setText(e.target.value); e.preventDefault(); }, []);
      const onInput4 = A$1((e) => { setReflow("hidden"); e.preventDefault(); }, []);
      const onInput5 = A$1((e) => { setReflow("removed"); e.preventDefault(); }, []);
      const onInput5b = A$1((e) => { setReflow("visible"); e.preventDefault(); }, []);
      const onInput6 = A$1((e) => { setWritingMode("horizontal"); e.preventDefault(); }, []);
      const onInput7 = A$1((e) => { setWritingMode("vertical"); e.preventDefault(); }, []);
      const onInput8 = A$1((e) => { setDuration(e.target.valueAsNumber); e.preventDefault(); }, []);
      const onInputA = A$1((e) => { setOpen3(0); e.preventDefault(); }, []);
      const onInputB = A$1((e) => { setOpen3(1); e.preventDefault(); }, []);
      const onInputC = A$1((e) => { setOpen3(2); e.preventDefault(); }, []);
      return (v$1(d$1, null,
          v$1("div", { id: "controls" },
              v$1("h1", null, "Preact Transition"),
              v$1("label", null,
                  v$1("input", { onInput: onInput1, type: "checkbox", checked: open1 }),
                  " Card open"),
              v$1("div", { className: "radiogroup" },
                  v$1("div", null, "Visible Swappable child: "),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputA, checked: open3 == 0 }),
                      "#0"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputB, checked: open3 == 1 }),
                      "#1"),
                  v$1("label", { className: "code-mimic" },
                      v$1("input", { type: "radio", name: "swap-index", onInput: onInputC, checked: open3 == 2 }),
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
          v$1("div", { id: "root-body", className: `writing-mode-${writingMode}`, style: { "--transition-duration": `${duration}ms` } },
              v$1(FadeDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(ClipDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(ZoomDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(SlideDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(ZoomSlideDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(CollapseDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }),
              v$1(FlipDemo, { cardOpen: open1, contentIndex: open3, exitVisibility: reflow, text: text }))));
  }
  function FadeDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [min, setMin] = l(0);
      const [max, setMax] = l(1);
      const onMinInput = A$1((e) => { setMin((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onMaxInput = A$1((e) => { setMax((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Fade;
      const CS = "Fade";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, fadeMin: min, fadeMax: max },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${min != 0 ? ` 
  fadeMin={${min}}` : ``}${max != 1 ? ` 
  fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={${contentIndex.toString()} == 0}${min != 0 ? ` 
        fadeMin={${min}}` : ``}${max != 1 ? ` 
        fadeMax={${max}}` : ``}${exitVisibility != "hidden" ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={${contentIndex.toString()} == 1} [...] />
      <${CS} open={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ClipDemo({ cardOpen, contentIndex, exitVisibility, text }) {
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
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, clipOriginInline: originX, clipOriginBlock: originY, clipMinInline: minX, clipMinBlock: minY },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, clipMinInline: minX, clipMinBlock: minY, clipOriginInline: originX, clipOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
  clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
  clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
  clipMinX={${minX}}` : ``}${minY != 0 ? ` 
  clipMinY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        clipOriginX={${originX}}` : ``}${originY != 0.5 ? ` 
        clipOriginY={${originY}}` : ``}${minX != 0 ? ` 
        clipMinX={${minX}}` : ``}${minY != 0 ? ` 
        clipMinY={${minY}}` : ``}${exitVisibility ? `
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={${contentIndex.toString()} == 1} [...] />
      <${CS} open={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomSlideDemo({ cardOpen, contentIndex, exitVisibility, text }) {
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
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: slideX * Math.sign(i - contentIndex), slideTargetBlock: slideY * Math.sign(i - contentIndex), zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
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
        open={0 == ${contentIndex.toString()}}${originX != 0.5 ? ` 
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
      <${CS} open={1 == ${contentIndex.toString()}} [...] />
      <${CS} open={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function ZoomDemo({ cardOpen, contentIndex, exitVisibility, text }) {
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
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, zoomOriginInline: originX, zoomOriginBlock: originY, zoomMinInline: minX, zoomMinBlock: minY },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, zoomMinInline: minX, zoomMinBlock: minY, zoomOriginInline: originX, zoomOriginBlock: originY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}}${originX != 0.5 ? ` 
  originX={${originX}}` : ``}${originY != 0.5 ? ` 
  originY={${originY}}` : ``}${minX != 0 ? ` 
  minX={${minX}}` : ``}${minY != 0 ? ` 
  minY={${minY}}` : ``}${exitVisibility ? `
  exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  <Swappable>
    <div className="card">
      <${CS} 
        open={${contentIndex.toString()} == 0}${originX != 0.5 ? ` 
        originX={${originX}}` : ``}${originY != 0.5 ? ` 
        originY={${originY}}` : ``}${minX != 0 ? ` 
        minX={${minX}}` : ``}${minY != 0 ? ` 
        minY={${minY}}` : ``}${exitVisibility ? ` 
        exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={${contentIndex.toString()} == 1} [...] />
      <${CS} open={${contentIndex.toString()} == 2} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function SlideDemo({ cardOpen, contentIndex, exitVisibility, text }) {
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
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, slideTargetInline: (slideX * Math.sign(i - contentIndex)), slideTargetBlock: slideY * Math.sign(i - contentIndex) },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, slideTargetInline: slideX || null, slideTargetBlock: slideY || null },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}} 
  slideTargetInline={${slideX}}
  slideTargetBlock={${slideY}}
  exitVisibility={${JSON.stringify(exitVisibility)}}>
    <div className="card">
      <${CS} 
        open={0 == ${contentIndex}}
        exitVisibility={${JSON.stringify(exitVisibility)}}
        slideTargetInline={${slideX} * Math.sign(0 - ${contentIndex})}
        slideTargetBlock={${slideY} * Math.sign(0 - ${contentIndex}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={1 == ${contentIndex}} [...] />
      <${CS} open={2 == ${contentIndex}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  function CollapseDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [minBlockSize, setMinBlockSize] = l("0px");
      const onWithFadeInput = A$1((e) => { setWithFade((e.target).checked); e.preventDefault(); }, []);
      const [withFade, setWithFade] = l(true);
      const C = withFade ? CollapseFade : Collapse;
      const CS = withFade ? "CollapseFade" : "Collapse";
      const onMinSize = A$1((e) => { setMinBlockSize((e.target).value); e.preventDefault(); }, []);
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, minBlockSize: minBlockSize },
                  v$1("div", null,
                      v$1(Swappable, null,
                          v$1("div", { className: "card" },
                              makeChild(0),
                              makeChild(1),
                              makeChild(2))))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} open={${cardOpen.toString()}}${minBlockSize && minBlockSize != "0px" ? ` minBlockSize={${JSON.stringify(minBlockSize)}}` : ""}${exitVisibility ? ` exitVisibility={${JSON.stringify(exitVisibility)}}` : ""}>
  {/* These cards have padding, 
      and height doesn't include that, 
      but a wrapper's would */}
  <div>
    <Swappable>
      <div className="card">
        <${CS} 
          open={${contentIndex.toString()} == 0}${minBlockSize && minBlockSize != "0px" ? ` 
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
<${CS} open={1 == ${contentIndex.toString()}} [...] />
<${CS} open={2 == ${contentIndex.toString()}} [...] />`)))));
  }
  function FlipDemo({ cardOpen, contentIndex, exitVisibility, text }) {
      const [flipX, setFlipX] = l(0);
      const [flipY, setFlipY] = l(180);
      const onFlipXInput = A$1((e) => { setFlipX((e.target).valueAsNumber); e.preventDefault(); }, []);
      const onFlipYInput = A$1((e) => { setFlipY((e.target).valueAsNumber); e.preventDefault(); }, []);
      const C = Flip;
      const CS = "Flip";
      const makeChild = (i) => v$1(C, { open: contentIndex === i, exitVisibility: exitVisibility, flipAngleInline: flipX * Math.sign(i - contentIndex), flipAngleBlock: flipY * Math.sign(i - contentIndex) },
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
              v$1(C, { open: cardOpen, exitVisibility: exitVisibility, flipAngleInline: flipX, flipAngleBlock: flipY },
                  v$1(Swappable, null,
                      v$1("div", { className: "card" },
                          makeChild(0),
                          makeChild(1),
                          makeChild(2)))),
              v$1("code", null,
                  v$1("pre", null, `<${CS} 
  open={${cardOpen.toString()}} 
  flipAngleInline={${JSON.stringify(flipX)}} 
  flipAngleBlock={${JSON.stringify(flipY)}} 
  exitVisibility={${JSON.stringify(exitVisibility)}}}>
    <div className="card">
      <${CS} 
        open={0 == ${contentIndex.toString()}}
        flipAngleInline={${JSON.stringify(flipX)} * Math.sign(0 - ${contentIndex.toString()})} 
        flipAngleBlock={${JSON.stringify(flipY)} * Math.sign(0 - ${contentIndex.toString()})} 
        exitVisibility={${JSON.stringify(exitVisibility)}}>
        <div className="card-contents">
          {text}
        </div>
      </${CS}>
      <${CS} open={1 == ${contentIndex.toString()}} [...] />
      <${CS} open={2 == ${contentIndex.toString()}} [...] />
    </div>
  </Swappable>
</${CS}>`))));
  }
  requestAnimationFrame(() => {
      S$1(v$1(Demo, null), document.getElementById("root"));
  });

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jaGlsZHJlbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1jbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1yZWZzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1zdHlsZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXN0YXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50LmpzIiwiLi4vdHJhbnNpdGlvbmFibGUuanMiLCIuLi9jbGlwLmpzIiwiLi4vZmFkZS5qcyIsIi4uL2NsaXAtZmFkZS5qcyIsIi4uL2NvbGxhcHNlLmpzIiwiLi4vY29sbGFwc2UtZmFkZS5qcyIsIi4uL3NsaWRlLmpzIiwiLi4vc2xpZGUtZmFkZS5qcyIsIi4uL3pvb20uanMiLCIuLi96b29tLWZhZGUuanMiLCIuLi9zbGlkZS16b29tLmpzIiwiLi4vc2xpZGUtem9vbS1mYWRlLmpzIiwiLi4vZmxpcC5qcyIsIi4uL3N3YXBwYWJsZS5qcyIsIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBuLGwsdSxpLHQsbyxyLGYsZT17fSxjPVtdLHM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtmdW5jdGlvbiBhKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGgobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gdihsLHUsaSl7dmFyIHQsbyxyLGY9e307Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07aWYoYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsJiZudWxsIT1sLmRlZmF1bHRQcm9wcylmb3IociBpbiBsLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1mW3JdJiYoZltyXT1sLmRlZmF1bHRQcm9wc1tyXSk7cmV0dXJuIHkobCxmLHQsbyxudWxsKX1mdW5jdGlvbiB5KG4saSx0LG8scil7dmFyIGY9e3R5cGU6bixwcm9wczppLGtleTp0LHJlZjpvLF9fazpudWxsLF9fOm51bGwsX19iOjAsX19lOm51bGwsX19kOnZvaWQgMCxfX2M6bnVsbCxfX2g6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PXI/Kyt1OnJ9O3JldHVybiBudWxsIT1sLnZub2RlJiZsLnZub2RlKGYpLGZ9ZnVuY3Rpb24gcCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIGQobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gXyhuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBrKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9rKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2sobik6bnVsbH1mdW5jdGlvbiBiKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gYihuKX19ZnVuY3Rpb24gbShuKXsoIW4uX19kJiYobi5fX2Q9ITApJiZ0LnB1c2gobikmJiFnLl9fcisrfHxyIT09bC5kZWJvdW5jZVJlbmRlcmluZykmJigocj1sLmRlYm91bmNlUmVuZGVyaW5nKXx8bykoZyl9ZnVuY3Rpb24gZygpe2Zvcih2YXIgbjtnLl9fcj10Lmxlbmd0aDspbj10LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHQ9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1hKHt9LHQpKS5fX3Y9dC5fX3YrMSxqKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9rKHQpOm8sdC5fX2gpLHoodSx0KSx0Ll9fZSE9byYmYih0KSkpfSl9ZnVuY3Rpb24gdyhuLGwsdSxpLHQsbyxyLGYscyxhKXt2YXIgaCx2LHAsXyxiLG0sZyx3PWkmJmkuX19rfHxjLEE9dy5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oXz11Ll9fa1toXT1udWxsPT0oXz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBfP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIF98fFwibnVtYmVyXCI9PXR5cGVvZiBffHxcImJpZ2ludFwiPT10eXBlb2YgXz95KG51bGwsXyxudWxsLG51bGwsXyk6QXJyYXkuaXNBcnJheShfKT95KGQse2NoaWxkcmVuOl99LG51bGwsbnVsbCxudWxsKTpfLl9fYj4wP3koXy50eXBlLF8ucHJvcHMsXy5rZXksbnVsbCxfLl9fdik6Xykpe2lmKF8uX189dSxfLl9fYj11Ll9fYisxLG51bGw9PT0ocD13W2hdKXx8cCYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpd1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8QTt2Kyspe2lmKChwPXdbdl0pJiZfLmtleT09cC5rZXkmJl8udHlwZT09PXAudHlwZSl7d1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWoobixfLHA9cHx8ZSx0LG8scixmLHMsYSksYj1fLl9fZSwodj1fLnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCxfKSxnLnB1c2godixfLl9fY3x8YixfKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2YgXy50eXBlJiZudWxsIT1fLl9fayYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP3godCxsLHUpOlAodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxIKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8SChuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/VDpJLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxvLHIsZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LG8scixmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFjLHJbci5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxvLHIsZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihvPSEwKSxudWxsIT1yKWZvcig7XzxyLmxlbmd0aDtfKyspaWYoKHM9cltfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMscltfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPW8/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCkscj1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihyPXImJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1yKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxvLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsbyYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLHIsZixyP3JbMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1yKWZvcihfPXIubGVuZ3RoO18tLTspbnVsbCE9cltfXSYmaChyW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LG87aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iobz0wO288dC5sZW5ndGg7bysrKXRbb10mJk4odFtvXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciBvLHIsZjtsLl9fJiZsLl9fKHUsaSkscj0obz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghbyYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSkscnx8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFvJiZ0P1t0XTpyP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhbyYmdD90OnI/ci5fX2U6aS5maXJzdENoaWxkLG8pLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQsbyxyLGY9YSh7fSxsLnByb3BzKTtmb3IociBpbiB1KVwia2V5XCI9PXI/dD11W3JdOlwicmVmXCI9PXI/bz11W3JdOmZbcl09dVtyXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LG98fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10sbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsZChmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gZChuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEEobix0KXtyZXR1cm4gbz04LGQoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gRihuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIFQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKHQsdSl7dS5zb21lKGZ1bmN0aW9uKHQpe3RyeXt0Ll9faC5mb3JFYWNoKGcpLHQuX19oPXQuX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8aihuKX0pfWNhdGNoKHIpe3Uuc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHU9W10sbi5fX2Uocix0Ll9fdil9fSksYSYmYSh0LHUpfSxuLnVubW91bnQ9ZnVuY3Rpb24odCl7diYmdih0KTt2YXIgdT10Ll9fYztpZih1JiZ1Ll9fSCl0cnl7dS5fX0guX18uZm9yRWFjaChnKX1jYXRjaCh0KXtuLl9fZSh0LHUuX192KX19O3ZhciBiPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZTtmdW5jdGlvbiBnKG4pe3ZhciB0PXU7XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX2MmJm4uX19jKCksdT10fWZ1bmN0aW9uIGoobil7dmFyIHQ9dTtuLl9fYz1uLl9fKCksdT10fWZ1bmN0aW9uIGsobix0KXtyZXR1cm4hbnx8bi5sZW5ndGghPT10Lmxlbmd0aHx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gdyhuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fWV4cG9ydHtsIGFzIHVzZVN0YXRlLHAgYXMgdXNlUmVkdWNlcix5IGFzIHVzZUVmZmVjdCxoIGFzIHVzZUxheW91dEVmZmVjdCxzIGFzIHVzZVJlZixfIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsZCBhcyB1c2VNZW1vLEEgYXMgdXNlQ2FsbGJhY2ssRiBhcyB1c2VDb250ZXh0LFQgYXMgdXNlRGVidWdWYWx1ZSxxIGFzIHVzZUVycm9yQm91bmRhcnl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0e3VzZVN0YXRlIGFzIG4sdXNlUmVkdWNlciBhcyB0LHVzZUVmZmVjdCBhcyBlLHVzZUxheW91dEVmZmVjdCBhcyByLHVzZVJlZiBhcyB1LHVzZUltcGVyYXRpdmVIYW5kbGUgYXMgbyx1c2VNZW1vIGFzIGksdXNlQ2FsbGJhY2sgYXMgbCx1c2VDb250ZXh0IGFzIGYsdXNlRGVidWdWYWx1ZSBhcyBjfWZyb21cInByZWFjdC9ob29rc1wiO2V4cG9ydCpmcm9tXCJwcmVhY3QvaG9va3NcIjtpbXBvcnR7Q29tcG9uZW50IGFzIGEsY3JlYXRlRWxlbWVudCBhcyBzLG9wdGlvbnMgYXMgaCx0b0NoaWxkQXJyYXkgYXMgdixGcmFnbWVudCBhcyBkLHJlbmRlciBhcyBwLGh5ZHJhdGUgYXMgbSxjbG9uZUVsZW1lbnQgYXMgeSxjcmVhdGVSZWYgYXMgYixjcmVhdGVDb250ZXh0IGFzIF99ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIFMobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gQyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBFKG4pe3RoaXMucHJvcHM9bn1mdW5jdGlvbiBnKG4sdCl7ZnVuY3Rpb24gZShuKXt2YXIgZT10aGlzLnByb3BzLnJlZixyPWU9PW4ucmVmO3JldHVybiFyJiZlJiYoZS5jYWxsP2UobnVsbCk6ZS5jdXJyZW50PW51bGwpLHQ/IXQodGhpcy5wcm9wcyxuKXx8IXI6Qyh0aGlzLnByb3BzLG4pfWZ1bmN0aW9uIHIodCl7cmV0dXJuIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWUscyhuLHQpfXJldHVybiByLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PSEwLHIuX19mPSEwLHJ9KEUucHJvdG90eXBlPW5ldyBhKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxFLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gQyh0aGlzLnByb3BzLG4pfHxDKHRoaXMuc3RhdGUsdCl9O3ZhciB3PWguX19iO2guX19iPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLl9fZiYmbi5yZWYmJihuLnByb3BzLnJlZj1uLnJlZixuLnJlZj1udWxsKSx3JiZ3KG4pfTt2YXIgUj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIil8fDM5MTE7ZnVuY3Rpb24geChuKXtmdW5jdGlvbiB0KHQsZSl7dmFyIHI9Uyh7fSx0KTtyZXR1cm4gZGVsZXRlIHIucmVmLG4ociwoZT10LnJlZnx8ZSkmJihcIm9iamVjdFwiIT10eXBlb2YgZXx8XCJjdXJyZW50XCJpbiBlKT9lOm51bGwpfXJldHVybiB0LiQkdHlwZW9mPVIsdC5yZW5kZXI9dCx0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXQuX19mPSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9dmFyIE49ZnVuY3Rpb24obix0KXtyZXR1cm4gbnVsbD09bj9udWxsOnYodihuKS5tYXAodCkpfSxrPXttYXA6Tixmb3JFYWNoOk4sY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXt2YXIgdD12KG4pO2lmKDEhPT10Lmxlbmd0aCl0aHJvd1wiQ2hpbGRyZW4ub25seVwiO3JldHVybiB0WzBdfSx0b0FycmF5OnZ9LEE9aC5fX2U7aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsdT10O3U9dS5fXzspaWYoKHI9dS5fX2MpJiZyLl9fYylyZXR1cm4gbnVsbD09dC5fX2UmJih0Ll9fZT1lLl9fZSx0Ll9faz1lLl9fayksci5fX2Mobix0KTtBKG4sdCxlKX07dmFyIE89aC51bm1vdW50O2Z1bmN0aW9uIEwoKXt0aGlzLl9fdT0wLHRoaXMudD1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gVShuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2UmJnQuX19lKG4pfWZ1bmN0aW9uIEYobil7dmFyIHQsZSxyO2Z1bmN0aW9uIHUodSl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLHUpfXJldHVybiB1LmRpc3BsYXlOYW1lPVwiTGF6eVwiLHUuX19mPSEwLHV9ZnVuY3Rpb24gTSgpe3RoaXMudT1udWxsLHRoaXMubz1udWxsfWgudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYhMD09PW4uX19oJiYobi50eXBlPW51bGwpLE8mJk8obil9LChMLnByb3RvdHlwZT1uZXcgYSkuX19jPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dC5fX2Mscj10aGlzO251bGw9PXIudCYmKHIudD1bXSksci50LnB1c2goZSk7dmFyIHU9VShyLl9fdiksbz0hMSxpPWZ1bmN0aW9uKCl7b3x8KG89ITAsZS5fX1I9bnVsbCx1P3UobCk6bCgpKX07ZS5fX1I9aTt2YXIgbD1mdW5jdGlvbigpe2lmKCEtLXIuX191KXtpZihyLnN0YXRlLl9fZSl7dmFyIG49ci5zdGF0ZS5fX2U7ci5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX3Y9bnVsbCx0Ll9faz10Ll9fayYmdC5fX2subWFwKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQsZSxyKX0pLHQuX19jJiZ0Ll9fYy5fX1A9PT1lJiYodC5fX2UmJnIuaW5zZXJ0QmVmb3JlKHQuX19lLHQuX19kKSx0Ll9fYy5fX2U9ITAsdC5fX2MuX19QPXIpKSx0fShuLG4uX19jLl9fUCxuLl9fYy5fX08pfXZhciB0O2ZvcihyLnNldFN0YXRlKHtfX2U6ci5fX2I9bnVsbH0pO3Q9ci50LnBvcCgpOyl0LmZvcmNlVXBkYXRlKCl9fSxmPSEwPT09dC5fX2g7ci5fX3UrK3x8Znx8ci5zZXRTdGF0ZSh7X19lOnIuX19iPXIuX192Ll9fa1swXX0pLG4udGhlbihpLGkpfSxMLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3RoaXMudD1bXX0sTC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4sdCl7aWYodGhpcy5fX2Ipe2lmKHRoaXMuX192Ll9fayl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxyPXRoaXMuX192Ll9fa1swXS5fX2M7dGhpcy5fX3YuX19rWzBdPWZ1bmN0aW9uIG4odCxlLHIpe3JldHVybiB0JiYodC5fX2MmJnQuX19jLl9fSCYmKHQuX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksdC5fX2MuX19IPW51bGwpLG51bGwhPSh0PVMoe30sdCkpLl9fYyYmKHQuX19jLl9fUD09PXImJih0Ll9fYy5fX1A9ZSksdC5fX2M9bnVsbCksdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSksdH0odGhpcy5fX2IsZSxyLl9fTz1yLl9fUCl9dGhpcy5fX2I9bnVsbH12YXIgdT10Ll9fZSYmcyhkLG51bGwsbi5mYWxsYmFjayk7cmV0dXJuIHUmJih1Ll9faD1udWxsKSxbcyhkLG51bGwsdC5fX2U/bnVsbDpuLmNoaWxkcmVuKSx1XX07dmFyIFQ9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uby5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uby5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07ZnVuY3Rpb24gRChuKXtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbi5jb250ZXh0fSxuLmNoaWxkcmVufWZ1bmN0aW9uIEkobil7dmFyIHQ9dGhpcyxlPW4uaTt0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7cChudWxsLHQubCksdC5sPW51bGwsdC5pPW51bGx9LHQuaSYmdC5pIT09ZSYmdC5jb21wb25lbnRXaWxsVW5tb3VudCgpLG4uX192Pyh0Lmx8fCh0Lmk9ZSx0Lmw9e25vZGVUeXBlOjEscGFyZW50Tm9kZTplLGNoaWxkTm9kZXM6W10sYXBwZW5kQ2hpbGQ6ZnVuY3Rpb24obil7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24obixlKXt0aGlzLmNoaWxkTm9kZXMucHVzaChuKSx0LmkuYXBwZW5kQ2hpbGQobil9LHJlbW92ZUNoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5zcGxpY2UodGhpcy5jaGlsZE5vZGVzLmluZGV4T2Yobik+Pj4xLDEpLHQuaS5yZW1vdmVDaGlsZChuKX19KSxwKHMoRCx7Y29udGV4dDp0LmNvbnRleHR9LG4uX192KSx0LmwpKTp0LmwmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKX1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoSSx7X192Om4saTp0fSl9KE0ucHJvdG90eXBlPW5ldyBhKS5fX2U9ZnVuY3Rpb24obil7dmFyIHQ9dGhpcyxlPVUodC5fX3YpLHI9dC5vLmdldChuKTtyZXR1cm4gclswXSsrLGZ1bmN0aW9uKHUpe3ZhciBvPWZ1bmN0aW9uKCl7dC5wcm9wcy5yZXZlYWxPcmRlcj8oci5wdXNoKHUpLFQodCxuLHIpKTp1KCl9O2U/ZShvKTpvKCl9fSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obil7dGhpcy51PW51bGwsdGhpcy5vPW5ldyBNYXA7dmFyIHQ9dihuLmNoaWxkcmVuKTtuLnJldmVhbE9yZGVyJiZcImJcIj09PW4ucmV2ZWFsT3JkZXJbMF0mJnQucmV2ZXJzZSgpO2Zvcih2YXIgZT10Lmxlbmd0aDtlLS07KXRoaXMuby5zZXQodFtlXSx0aGlzLnU9WzEsMCx0aGlzLnVdKTtyZXR1cm4gbi5jaGlsZHJlbn0sTS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlPU0ucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50PWZ1bmN0aW9uKCl7dmFyIG49dGhpczt0aGlzLm8uZm9yRWFjaChmdW5jdGlvbih0LGUpe1QobixlLHQpfSl9O3ZhciBqPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpfHw2MDEwMyxQPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXAoPyFQYXRoVSl8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBoKD8hUil8aG9yaXp8bWFya2VyKD8hSHxXfFUpfG92ZXJsaW5lfHBhaW50fHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgoPyFDKSlbQS1aXS8sVj1mdW5jdGlvbihuKXtyZXR1cm4oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbCgpPy9maWx8Y2hlfHJhZC9pOi9maWx8Y2hlfHJhL2kpLnRlc3Qobil9O2Z1bmN0aW9uIHoobix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIikscChuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gQihuLHQsZSl7cmV0dXJuIG0obix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWEucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e30sW1wiY29tcG9uZW50V2lsbE1vdW50XCIsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXCJjb21wb25lbnRXaWxsVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24obil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEucHJvdG90eXBlLG4se2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tcIlVOU0FGRV9cIituXX0sc2V0OmZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG4se2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTp0fSl9fSl9KTt2YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIFooKXt9ZnVuY3Rpb24gWSgpe3JldHVybiB0aGlzLmNhbmNlbEJ1YmJsZX1mdW5jdGlvbiAkKCl7cmV0dXJuIHRoaXMuZGVmYXVsdFByZXZlbnRlZH1oLmV2ZW50PWZ1bmN0aW9uKG4pe3JldHVybiBIJiYobj1IKG4pKSxuLnBlcnNpc3Q9WixuLmlzUHJvcGFnYXRpb25TdG9wcGVkPVksbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxuLm5hdGl2ZUV2ZW50PW59O3ZhciBxLEc9e2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jbGFzc319LEo9aC52bm9kZTtoLnZub2RlPWZ1bmN0aW9uKG4pe3ZhciB0PW4udHlwZSxlPW4ucHJvcHMscj1lO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtmb3IodmFyIHUgaW4gcj17fSxlKXt2YXIgbz1lW3VdO1widmFsdWVcIj09PXUmJlwiZGVmYXVsdFZhbHVlXCJpbiBlJiZudWxsPT1vfHwoXCJkZWZhdWx0VmFsdWVcIj09PXUmJlwidmFsdWVcImluIGUmJm51bGw9PWUudmFsdWU/dT1cInZhbHVlXCI6XCJkb3dubG9hZFwiPT09dSYmITA9PT1vP289XCJcIjovb25kb3VibGVjbGljay9pLnRlc3QodSk/dT1cIm9uZGJsY2xpY2tcIjovXm9uY2hhbmdlKHRleHRhcmVhfGlucHV0KS9pLnRlc3QodSt0KSYmIVYoZS50eXBlKT91PVwib25pbnB1dFwiOi9eb24oQW5pfFRyYXxUb3V8QmVmb3JlSW5wKS8udGVzdCh1KT91PXUudG9Mb3dlckNhc2UoKTpQLnRlc3QodSk/dT11LnJlcGxhY2UoL1tBLVowLTldLyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1vJiYobz12b2lkIDApLHJbdV09byl9XCJzZWxlY3RcIj09dCYmci5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheShyLnZhbHVlKSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXIudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT10JiZudWxsIT1yLmRlZmF1bHRWYWx1ZSYmKHIudmFsdWU9dihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9ci5tdWx0aXBsZT8tMSE9ci5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTpyLmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSxuLnByb3BzPXJ9dCYmZS5jbGFzcyE9ZS5jbGFzc05hbWUmJihHLmVudW1lcmFibGU9XCJjbGFzc05hbWVcImluIGUsbnVsbCE9ZS5jbGFzc05hbWUmJihyLmNsYXNzPWUuY2xhc3NOYW1lKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImNsYXNzTmFtZVwiLEcpKSxuLiQkdHlwZW9mPWosSiYmSihuKX07dmFyIEs9aC5fX3I7aC5fX3I9ZnVuY3Rpb24obil7SyYmSyhuKSxxPW4uX19jfTt2YXIgUT17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjp7Y3VycmVudDp7cmVhZENvbnRleHQ6ZnVuY3Rpb24obil7cmV0dXJuIHEuX19uW24uX19jXS5wcm9wcy52YWx1ZX19fX0sWD1cIjE3LjAuMlwiO2Z1bmN0aW9uIG5uKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiB0bihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIGVuKG4pe3JldHVybiB0bihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHJuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIHVuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIG9uPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPWQ7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Zix1c2VEZWJ1Z1ZhbHVlOmMsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOnosaHlkcmF0ZTpCLHVubW91bnRDb21wb25lbnRBdE5vZGU6cm4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5Om5uLGNsb25lRWxlbWVudDplbixjcmVhdGVSZWY6YixGcmFnbWVudDpkLGlzVmFsaWRFbGVtZW50OnRuLGZpbmRET01Ob2RlOnVuLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpsbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpvbixTdHJpY3RNb2RlOmQsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6UX07ZXhwb3J0e1ggYXMgdmVyc2lvbixrIGFzIENoaWxkcmVuLHogYXMgcmVuZGVyLEIgYXMgaHlkcmF0ZSxybiBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLG5uIGFzIGNyZWF0ZUZhY3RvcnksZW4gYXMgY2xvbmVFbGVtZW50LHRuIGFzIGlzVmFsaWRFbGVtZW50LHVuIGFzIGZpbmRET01Ob2RlLEUgYXMgUHVyZUNvbXBvbmVudCxnIGFzIG1lbW8seCBhcyBmb3J3YXJkUmVmLGxuIGFzIGZsdXNoU3luYyxvbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxmbiBhcyBTdHJpY3RNb2RlLEwgYXMgU3VzcGVuc2UsTSBhcyBTdXNwZW5zZUxpc3QsRiBhcyBsYXp5LFEgYXMgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcGF0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicHJlYWN0L2NvbXBhdFwiO1xuLyoqXG4gKiBTaG9ydGN1dCBmb3IgcHJlYWN0L2NvbXBhdCdzIGBmb3J3YXJkUmVmYCB0aGF0IGF1dG8tYXNzdW1lcyBzb21lIHRoaW5ncyB0aGF0IGFyZSB1c2VmdWwgZm9yIGZvcndhcmRpbmcgcmVmcyB0byBgSFRNTEVsZW1lbnRzYCBzcGVjaWZpY2FsbHkuXG4gKiBOYW1lbHkgaXQgaW52b2x2ZXMgZGUtZ3Vua2luZyB0aGUgdHlwZSBzeXN0ZW0gYnkgbGV0dGluZyB1cyByZXR1cm4gKmdlbmVyaWMqIGZ1bmN0aW9uIGFuZCBwbGF5aW5nIG5pY2Ugd2l0aCBSZWFjdC4gSW4gYWxsIG90aGVyIHJlc3BlY3RzLCBpdCBhY3RzIGxpa2UgYGZvcndhcmRSZWZgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEVsZW1lbnRSZWYoQ29tcG9uZW50KSB7XG4gICAgY29uc3QgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihDb21wb25lbnQpO1xuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3J3YXJkLWVsZW1lbnQtcmVmLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xufVxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcbiAgICBdO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1swXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1szXS5jb25jYXQoXCJcIik7XG4gICAgY1s0XS5jb25jYXQoXCJcIik7XG4gICAgY1s1XS5jb25jYXQoXCJcIik7XG4gICAgY1s2XS5jb25jYXQoXCJcIik7XG4gICAgY1s3XS5jb25jYXQoXCJcIik7XG4gICAgY1s4XS5jb25jYXQoXCJcIik7XG4gICAgY1s5XS5jb25jYXQoXCJcIik7XG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzEzXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG59XG4vKipcbiAqIENvbWJpbmVzIHR3byByZWZzIGludG8gb25lLiBUaGlzIGFsbG93cyBhIGNvbXBvbmVudCB0byBib3RoIHVzZSBpdHMgb3duIHJlZiAqYW5kKiBmb3J3YXJkIGEgcmVmIHRoYXQgd2FzIGdpdmVuIHRvIGl0LlxuICogQHBhcmFtIGxoc1xuICogQHBhcmFtIHJoc1xuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFJlZnMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHNQcm9wcywgcmhzUHJvcHMpIHtcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcbiAgICAgICAgY29uc3QgcmhzID0gcmhzUHJvcHM/LnJlZjtcbiAgICAgICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJldCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1JlZihjdXJyZW50LCBsaHMpO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NSZWYoY3VycmVudCwgcmhzKTtcbiAgICAgICAgICAgIH0sIFtsaHMsIHJoc10pO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKlxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xuXG4gICAgY29uc3QgcmVmOiBSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD4gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgICBmdW5jdGlvbiBhY2NlcHRzUmVmKHJlZjogUmVmPGFueT4pIHsgfVxuICAgIGZ1bmN0aW9uIGFjY2VwdHNPcHRpb25hbFJlZihyZWY6IFJlZjxhbnk+IHwgdW5kZWZpbmVkKSB7IH1cblxuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh1bmRlZmluZWQsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWY6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCB7IHJlZiB9KSxcbiAgICBdIGFzIGNvbnN0O1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBhY2NlcHRzUmVmKGNbMF0pO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzFdKTtcblxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1szXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbNF0pO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgVE9ET1xuICAgIGFjY2VwdHNSZWYoY1s1XSk7XG4gICAgYWNjZXB0c1JlZihjWzZdKTtcbiAgICBhY2NlcHRzUmVmKGNbN10pO1xuICAgIGFjY2VwdHNSZWYoY1s4XSk7XG59XG4qL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1yZWZzLmpzLm1hcCIsIi8qKlxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0gc3R5bGUgVGhlIHVzZXItZ2l2ZW4gc3R5bGUgcHJvcCBmb3IgdGhpcyBjb21wb25lbnRcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXG4gKiBAcmV0dXJucyBBIENTUyBvYmplY3QgY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiBib3RoIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcbiAgICAvLyBFYXN5IGNhc2UsIHdoZW4gdGhlcmUgYXJlIG5vIHN0eWxlcyB0byBtZXJnZSByZXR1cm4gbm90aGluZy5cbiAgICBpZiAoIWxocyAmJiAhcmhzKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICh0eXBlb2YgbGhzICE9IHR5cGVvZiByaHMpIHtcbiAgICAgICAgLy8gRWFzeSBjYXNlcywgd2hlbiBvbmUgaXMgbnVsbCBhbmQgdGhlIG90aGVyIGlzbid0LlxuICAgICAgICBpZiAobGhzICYmICFyaHMpXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xuICAgICAgICBpZiAoIWxocyAmJiByaHMpXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xuICAgICAgICAvLyBUaGV5J3JlIGJvdGggbm9uLW51bGwgYnV0IGRpZmZlcmVudCB0eXBlcy5cbiAgICAgICAgLy8gQ29udmVydCB0aGUgc3RyaW5nIHR5cGUgdG8gYW4gb2JqZWN0IGJhZyB0eXBlIGFuZCBydW4gaXQgYWdhaW4uXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKVxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZTogT2JqZWN0LmZyb21FbnRyaWVzKGxocy5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSkgfSwgcmhzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHsgc3R5bGU6IE9iamVjdC5mcm9tRW50cmllcyhsaHMuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvZ2ljPz8/XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXG4gICAgaWYgKHR5cGVvZiBsaHMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gYCR7bGhzfTske3Joc31gOyAvLyBUT0RPOiBJbXByb3ZlIHRoZSB0eXBpbmcgdG8gbWFrZSB0aGlzIHBvc3NpYmxlXG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcbiAgICB9O1xufVxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQodSkgeyB9XG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3Moc3RyKSB7IH1cbmZ1bmN0aW9uIGFjY2VwdHNDc3MocHJvcCkgeyB9XG5mdW5jdGlvbiB0eXBldGVzdChwcm9wcykge1xuICAgIGNvbnN0IHN0eWxlID0ge307XG4gICAgY29uc3QgYyA9IFtcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCB7fSksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7fSwge30pLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh1bmRlZmluZWQsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHByb3BzLCBwcm9wcyksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHt9KSxcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHsgc3R5bGUgfSksXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlIH0sIHsgc3R5bGUgfSksXG4gICAgXTtcbiAgICAvLyBTYW5pdHkgY2hlY2tzXG4gICAgY1swXSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbMV0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzJdID09PSB1bmRlZmluZWQ7XG4gICAgY1szXSA9PT0gdW5kZWZpbmVkO1xuICAgIGNbNF0gPT09IHVuZGVmaW5lZDtcbiAgICBjWzVdID09PSB1bmRlZmluZWQ7XG4gICAgY1s2XSA9PT0gdW5kZWZpbmVkO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgYm90aCB3ZXJlIHVuZGVmaW5lZFxuICAgIGNbMF0/LmJhY2tncm91bmRDb2xvcjtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiB3YXMgbm90IHByb3ZpZGVkIGFzIGEgcHJvcFxuICAgIGNbMV0/LmJhY2tncm91bkNvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXG4gICAgY1syXT8uYmFja2dyb3VuZENvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXG4gICAgY1szXT8uYmFja2dyb3VuZENvbG9yO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s0XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s0XSk7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzVdKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzVdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNl0pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNl0pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzddKTtcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzddKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s4XSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s4XSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbOV0pO1xuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbOV0pO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzEwXSk7XG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1sxMF0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IC8qIEludGVudGlvbmFsICovIH07XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xuICAgIGxvZyA9IGxvZzI7XG59XG4vKipcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxuICpcbiAqIFRoZSBob29rIGlzIGF3YXJlIG9mIGFuZCBjYW4gaW50ZWxsaWdlbnRseSBtZXJnZSBgY2xhc3NOYW1lYCwgYGNsYXNzYCwgYHN0eWxlYCwgYHJlZmAsIGFuZCBhbGwgZXZlbnQgaGFuZGxlcnMuXG4gKiBAcGFyYW0gbGhzMlxuICogQHBhcmFtIHJoczJcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRQcm9wcygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxoczIsIHJoczIpIHtcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcbiAgICAgICAgLy8gYW5kIGFsbCBsaHMgcHJvcHMuIFdlJ3JlIGdvaW5nIHRvIG1lcmdlIGluIHJocyBqdXN0IGFmdGVyLlxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiBsaHNDaGlsZHJlbiwgY2xhc3M6IGxoc0NsYXNzLCBjbGFzc05hbWU6IGxoc0NsYXNzTmFtZSwgc3R5bGU6IGxoc1N0eWxlLCByZWY6IGxoc1JlZiwgLi4ubGhzIH0gPSBsaHMyO1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuOiByaHNDaGlsZHJlbiwgY2xhc3M6IHJoc0NsYXNzLCBjbGFzc05hbWU6IHJoc0NsYXNzTmFtZSwgc3R5bGU6IHJoc1N0eWxlLCByZWY6IHJoc1JlZiwgLi4ucmhzIH0gPSByaHMyO1xuICAgICAgICBsZXQgcmV0ID0ge1xuICAgICAgICAgICAgLi4ubGhzLFxuICAgICAgICAgICAgcmVmOiB1c2VNZXJnZWRSZWZzKCkobGhzMiwgcmhzMiksXG4gICAgICAgICAgICBzdHlsZTogdXNlTWVyZ2VkU3R5bGVzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgY2hpbGRyZW46IHVzZU1lcmdlZENoaWxkcmVuKGxoczIsIHJoczIpXG4gICAgICAgIH07XG4gICAgICAgIC8vIE5vdywgZG8gKmV2ZXJ5dGhpbmcqIGVsc2VcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxuICAgICAgICAvL2NvbnN0IGxoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhsaHMpIGFzIFtrZXlvZiBULCBUW2tleW9mIFRdXVtdO1xuICAgICAgICBjb25zdCByaHNFbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocmhzKTtcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xuICAgICAgICAgICAgY29uc3QgbGhzVmFsdWUgPSBsaHNbcmhzS2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcmhzVmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gKmVhc3kqIGNhc2UsIGJ1dCBhIHdlbGwtZGVmaW5lZCBvbmUuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGdW5jdGlvbnMobGhzVmFsdWUsIHJoc1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwgJiYgcmhzVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmhzVmFsdWUgPT09IG51bGwgJiYgbGhzVmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsaHNWYWx1ZSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbGhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbGhzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmcuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdCByZWFsbHkgaWRlYWwgdGhvdWdoLlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVWdoLlxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXG4gICAgICAgICAgICAgICAgICAgIGxvZz8uKGBDb3VsZCBub3QgbWVyZ2UgaW5jb21wYXRpYmxlIHByb3AgXCIke3Joc0tleX1cIiAodHlwZTogJHt0eXBlb2YgcmhzVmFsdWV9LCB2YWx1ZXM6IFske2xoc1ZhbHVlfSwgJHtyaHNWYWx1ZX1dKWApO1xuICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IHJoc1ZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59XG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xuICAgIGlmICghbGhzKVxuICAgICAgICByZXR1cm4gcmhzO1xuICAgIGlmICghcmhzKVxuICAgICAgICByZXR1cm4gbGhzO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgbHYgPSBsaHM/LiguLi5hcmdzKTtcbiAgICAgICAgbGV0IHJ2ID0gcmhzPy4oLi4uYXJncyk7XG4gICAgICAgIGlmIChsdiBpbnN0YW5jZW9mIFByb21pc2UgfHwgcnYgaW5zdGFuY2VvZiBQcm9taXNlKVxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtsdiwgcnZdKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJpY0dldFRlc3QoKSB7XG4gICAgY29uc3QgdDEgPSBudWxsO1xuICAgIGNvbnN0IHQyID0gbnVsbDtcbiAgICBjb25zdCB0MyA9IG51bGw7XG4gICAgaWYgKHQzLmlkID09IG51bGwpIHtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHQzLmlkLmNvbmNhdChcIlwiKTtcbiAgICB9XG59XG4vKlxuZnVuY3Rpb24gdGVzdDxQIGV4dGVuZHMgaC5KU1guSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4+KHByb3BzOiBQKSB7XG5cbiAgICBjb25zdCBpZDA6IEdlbmVyaWNHZXQ8e30sIFwiaWRcIiwgc3RyaW5nPiA9IFwiXCI7XG4gICAgY29uc3QgaWQzOiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ1OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQ2OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgaWQxOiBaaXBPYmplY3Q8eyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHN0cmluZyB9PiA9IHsgaWQ6IHVuZGVmaW5lZCB9O1xuXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xuICAgIHR5cGUgTTIgPSBHZW5lcmljR2V0PHt9LCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgY29uc3QgbTE6IE0xID0gXCJcIjtcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtMzogTTEgPSAwO1xuXG4gICAgY29uc3QgbTQ6IE0yID0gXCJcIjtcbiAgICBjb25zdCBtNTogTTIgPSB1bmRlZmluZWQ7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcbiAgICBjb25zdCBtNjogTTIgPSAwO1xuXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAyOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogXCJzdHJpbmdcIiB9KTtcbiAgICBjb25zdCBwMzogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwgeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyBpZDogdW5kZWZpbmVkIH0sIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcbiAgICBjb25zdCBwNSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHt9KTtcbiAgICBjb25zdCBwNiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IHVuZGVmaW5lZCB9KTtcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG5cblxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcDQuaWQ/LmNvbmNhdChcIlwiKTtcblxuXG4gICAgcDUuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA3LmlkPy5jb25jYXQoXCJcIik7XG5cbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDUuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA3LmlkLmNvbmNhdChcIlwiKTtcblxuXG4gICAgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA2LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNy5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgLy8gTWFrZSBzdXJlIGl0IHdvcmtzIHJlY3Vyc2l2ZWx5XG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xuICAgIGNvbnN0IHIxYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAxKTtcbiAgICBjb25zdCByMmEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMik7XG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xuICAgIGNvbnN0IHIzYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAzKTtcbiAgICBjb25zdCByM2IgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMyk7XG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xuICAgIGNvbnN0IHI0YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA0KTtcbiAgICBjb25zdCByNWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNSk7XG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xuICAgIGNvbnN0IHI2YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA2KTtcbiAgICBjb25zdCByNmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNik7XG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xuICAgIGNvbnN0IHI3YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA3KTtcblxuXG4gICAgcjFhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjFiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjJiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjNiLmlkPy5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI0Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICByNWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByNmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNWIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmEuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2EuaWQuY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICByN2IuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNWEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjViLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmIuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjdhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI3YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBhY2NlcHRzTmV2ZXIobjogbmV2ZXIpIHt9XG4qLyBcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyKSB7XG4gICAgcmV0dXJuIChzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkpO1xufVxuLyoqXG4gKiBJbnNwZWN0cyB0aGUgZWxlbWVudCdzIHN0eWxlIGFuZCBkZXRlcm1pbmVzIHRoZSBsb2dpY2FsIGRpcmVjdGlvbiB0aGF0IHRleHQgZmxvd3MuXG4gKlxuICogQ2VydGFpbiBDU1MgcHJvcGVydGllcywgbGlrZSBgYmxvY2stc2l6ZWAsIHJlc3BlY3QgdGhlIGN1cnJlbnQgd3JpdGluZyBtb2RlIGFuZCB0ZXh0IGRpcmVjdGlvbi5cbiAqIEJ1dCBgdHJhbnNmb3JtYCwgYGNsaXBgLCBldGMuIGRvbid0LlxuICpcbiAqIFRoaXMgaXMgcHJvdmlkZWQgc28gdGhhdCBDU1MgcHJvcGVydGllcyBjYW4gY29uc2lzdGVudGx5IHVzZSB0aG9zZSBsb2dpY2FsIHByb3BlcnRpZXMuXG4gKlxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zOlxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxuICogKiBgY29udmVydEVsZW1lbnRTaXplYDogV2hlbiB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHVzZUVsZW1lbnRTaXplYCwgYWxsb3dzIHlvdSB0byByZXRyaWV2ZSB0aGUgbG9naWNhbCBzaXplIG9mIGFuIGVsZW1lbnQgaW5zdGVhZCBvZiB0aGUgcGh5c2ljYWwgc2l6ZS5cbiAqICogYGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbmA6IEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiIHRvIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiLlxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvZ2ljYWxEaXJlY3Rpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IFt3cml0aW5nTW9kZSwgc2V0V3JpdGluZ01vZGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0ZXh0T3JpZW50YXRpb24sIHNldFRleHRPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB3cml0aW5nTW9kZVJlZiA9IHVzZVJlZih3cml0aW5nTW9kZSk7XG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XG4gICAgY29uc3QgdGV4dE9yaWVudGF0aW9uUmVmID0gdXNlUmVmKHRleHRPcmllbnRhdGlvbik7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgd3JpdGluZ01vZGVSZWYuY3VycmVudCA9IHdyaXRpbmdNb2RlOyB9LCBbd3JpdGluZ01vZGVdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkaXJlY3Rpb25SZWYuY3VycmVudCA9IGRpcmVjdGlvbjsgfSwgW2RpcmVjdGlvbl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHRleHRPcmllbnRhdGlvblJlZi5jdXJyZW50ID0gdGV4dE9yaWVudGF0aW9uOyB9LCBbdGV4dE9yaWVudGF0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XG4gICAgICAgICAgICBjb25zdCB0ID0gY29tcHV0ZWRTdHlsZXMudGV4dE9yaWVudGF0aW9uO1xuICAgICAgICAgICAgY29uc3QgZCA9IGNvbXB1dGVkU3R5bGVzLmRpcmVjdGlvbjtcbiAgICAgICAgICAgIHNldFdyaXRpbmdNb2RlKHcgfHwgXCJob3Jpem9udGFsLXRiXCIpO1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKGQgfHwgXCJydGxcIik7XG4gICAgICAgICAgICBzZXRUZXh0T3JpZW50YXRpb24odCB8fCBcIm1peGVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZ2V0TG9naWNhbERpcmVjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgbGV0IHdyaXRpbmdNb2RlID0gd3JpdGluZ01vZGVSZWYuY3VycmVudDtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJlZi5jdXJyZW50O1xuICAgICAgICBsZXQgdGV4dE9yaWVudGF0aW9uID0gdGV4dE9yaWVudGF0aW9uUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghd3JpdGluZ01vZGUgfHwgIWRpcmVjdGlvbiB8fCAhdGV4dE9yaWVudGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGlmICh0ZXh0T3JpZW50YXRpb24gPT0gXCJ1cHJpZ2h0XCIpXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBcImx0clwiO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uV3JpdGluZ01vZGVzW3dyaXRpbmdNb2RlID8/IFwiaG9yaXpvbnRhbC10YlwiXVtkaXJlY3Rpb24gPz8gXCJsdHJcIl1cbiAgICAgICAgfTtcbiAgICB9LCBbd3JpdGluZ01vZGVSZWYsIGRpcmVjdGlvblJlZiwgdGV4dE9yaWVudGF0aW9uUmVmXSk7XG4gICAgY29uc3QgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xuICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gZWxlbWVudE9yaWVudGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIFwiaW5saW5lXCI7XG4gICAgICAgIHJldHVybiBcImJsb2NrXCI7XG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcbiAgICBjb25zdCBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uID0gdXNlQ2FsbGJhY2soKGVsZW1lbnRPcmllbnRhdGlvbiwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICB9XG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgeyBpbmxpbmVTaXplLCBibG9ja1NpemUsIGlubGluZURpcmVjdGlvbiwgYmxvY2tEaXJlY3Rpb24gfSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcbiAgICAgICAgICAgIC8vIG9yIHNvbWV0aW1lcyB0d28gKGxpa2UgYGxlZnRgICsgYHdpZHRoYClcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGRpcikgeyBpZiAoZGlyID09PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XG4gICAgICAgICAgICBjb25zdCBmMSA9IGdldFBoeXNpY2FsTGVmdFRvcChpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmNCA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xuICAgICAgICAgICAgbGV0IGNsaWVudEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBjbGllbnRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVJbnNldCxcbiAgICAgICAgICAgICAgICBjbGllbnRCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tJbnNldCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW2dldExvZ2ljYWxEaXJlY3Rpb25dKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uLFxuICAgICAgICBjb252ZXJ0RWxlbWVudFNpemUsXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvblxuICAgIH07XG59XG47XG5jb25zdCBIb3Jpem9udGFsVGJMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGJsb2NrU2l6ZTogXCJoZWlnaHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xuICAgIC4uLkhvcml6b250YWxUYkx0cixcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwicnRsXCIsXG59O1xuY29uc3QgVmVydGljYWxSbEx0ciA9IHtcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwidHRiXCIsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXG4gICAgaW5saW5lT3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICBibG9ja09yaWVudGF0aW9uOiBcImhvcml6b250YWxcIixcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxuICAgIGJsb2NrU2l6ZTogXCJ3aWR0aFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcbn07XG5jb25zdCBWZXJ0aWNhbFJsUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiXG59O1xuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xuY29uc3QgU2lkZXdheXNSbFJ0bCA9IHsgLi4uVmVydGljYWxSbFJ0bCB9O1xuY29uc3QgVmVydGljYWxMckx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcImx0clwiLFxufTtcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XG4gICAgLi4uVmVydGljYWxSbFJ0bCxcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBTaWRld2F5c0x0THRyID0ge1xuICAgIC4uLlZlcnRpY2FsTHJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxuICAgIGxlZnRSaWdodERpcmVjdGlvbjogXCJidHRcIixcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwibHRyXCJcbn07XG5jb25zdCBTaWRld2F5c0x0UnRsID0ge1xuICAgIC4uLlNpZGV3YXlzTHRMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXG59O1xuY29uc3QgSG9yaXpvbnRhbFRiID0ge1xuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxuICAgIHJ0bDogSG9yaXpvbnRhbFRiUnRsXG59O1xuY29uc3QgVmVydGljYWxSbCA9IHtcbiAgICBsdHI6IFZlcnRpY2FsUmxMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbFJsUnRsXG59O1xuY29uc3QgVmVydGljYWxMciA9IHtcbiAgICBsdHI6IFZlcnRpY2FsTHJMdHIsXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXG59O1xuY29uc3QgU2lkZXdheXNSbCA9IHtcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXG4gICAgcnRsOiBTaWRld2F5c1JsUnRsXG59O1xuY29uc3QgU2lkZXdheXNMciA9IHtcbiAgICBsdHI6IFNpZGV3YXlzTHRMdHIsXG4gICAgcnRsOiBTaWRld2F5c0x0UnRsXG59O1xuY29uc3QgV3JpdGluZ01vZGVzID0ge1xuICAgIFwiaG9yaXpvbnRhbC10YlwiOiBIb3Jpem9udGFsVGIsXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxuICAgIFwidmVydGljYWwtcmxcIjogVmVydGljYWxSbCxcbiAgICBcInNpZGV3YXlzLWxyXCI6IFNpZGV3YXlzTHIsXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIGFzIHVzZVN0YXRlUCB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbi8qKlxuICogU2xpZ2h0bHkgZW5oYW5jZWQgdmVyc2lvbiBvZiBgdXNlU3RhdGVgIHRoYXQgaW5jbHVkZXMgYSBnZXR0ZXIgdGhhdCByZW1haW5zIGNvbnN0YW50XG4gKiAoaS5lLiB5b3UgY2FuIHVzZSBpdCBpbiBgdXNlRWZmZWN0YCBhbmQgZnJpZW5kcyB3aXRob3V0IGl0IGJlaW5nIGEgZGVwZW5kZW5jeSkuXG4gKlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIC8vIFdlIGtlZXAgYm90aFxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHN0YXRlKTtcbiAgICAvLyBIaWphY2sgdGhlIG5vcm1hbCBzZXR0ZXIgZnVuY3Rpb24gXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXG4gICAgY29uc3Qgc2V0ID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZShwcmV2VmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0VmFsdWUgPSBjYWxsYmFjayhwcmV2VmFsdWUpO1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgICAgICAgICBzZXRTdGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgY29uc3QgZ2V0ID0gKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH07XG4gICAgY29uc29sZS5hc3NlcnQocmVmLmN1cnJlbnQgPT09IHN0YXRlKTtcbiAgICByZXR1cm4gW3N0YXRlLCBzZXQsIGdldF07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utc3RhdGUuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XG4vKipcbiAqIEFsbG93cyBhY2Nlc3NpbmcgdGhlIGVsZW1lbnQgYSByZWYgcmVmZXJlbmNlcyBhcyBzb29uIGFzIGl0IGRvZXMgc28uXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxuICogYWRkaW5nIGEgUmVmQ2FsbGJhY2sgYW5kIG1lcmdpbmcgaXQgd2l0aCBhbnkgZXhpc3RpbmcgcmVmIHRoYXQgZXhpc3RlZCBvbiB0aGUgcHJvcHMuXG4gKlxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXG4gKlxuICogQHJldHVybnMgVGhlIGVsZW1lbnQsIGFuZCB0aGUgc3ViLWhvb2sgdGhhdCBtYWtlcyBpdCByZXRyaWV2YWJsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZkVsZW1lbnQoKSB7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50LCBnZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XG4gICAgY29uc3QgbXlSZWYgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBwMSA9IHVzZVJlZkVsZW1lbnRQcm9wcyhwcm9wcyk7XG4gICAgICAgIGlmIChwMS5zdHlsZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcDEuc3R5bGUgPT09IFwic3RyaW5nXCIpIHsgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtcmVmLWVsZW1lbnQuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuLy9pbXBvcnQgeyBtZXJnZVN0eWxlcyB9IGZyb20gXCIuL21lcmdlLXN0eWxlXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBvcGVuLCBwaGFzZSkge1xuICAgIGlmIChwaGFzZSlcbiAgICAgICAgcmV0dXJuIGAke2NsYXNzQmFzZSB8fCBcInRyYW5zaXRpb25cIn0tJHtvcGVufS0ke3BoYXNlfWA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke29wZW59YDtcbn1cbmxldCBkdW1teTtcbmZ1bmN0aW9uIGZvcmNlUmVmbG93KGUpIHtcbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxuICAgIGR1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gZTtcbn1cbi8qKlxuICogQSBob29rIHRoYXQgYWRkcyAmIHJlbW92ZXMgY2xhc3MgbmFtZXMgaW4gYSB3YXkgdGhhdCBmYWNpbGl0YXRlcyBwcm9wZXIgdHJhbnNpdGlvbnMuXG4gKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IGNvbnRhaW5zIHRoZSBwcm9wcyByZWxhdGVkIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIFRoZSBzZWNvbmQgYXJndW1lbnQgY29udGFpbnMgYW55IG90aGVyIHByb3BzIHlvdSBtaWdodCB3YW50IG1lcmdlZCBpbnRvIHRoZSBmaW5hbCBwcm9kdWN0ICh0aGVzZSBhcmUgbm90IHJlYWQgb3IgbWFuaXB1bGF0ZWQgb3IgYW55dGhpbmcgLS0gaXQncyBwdXJlbHkgc2hvcnRoYW5kIGFuZCBjYW4gYmUgb21pdHRlZCB3aXRoIGB7fWAgYW5kIHRoZW4geW91ciBvd24gYHVzZU1lcmdlZFByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgbWVhc3VyZSwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgb25UcmFuc2l0aW9uVXBkYXRlLCBleGl0VmlzaWJpbGl0eSwgZHVyYXRpb24sIG9wZW4sIHJlZiB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xuICAgIGNvbnN0IFtwaGFzZSwgc2V0UGhhc2VdID0gdXNlU3RhdGUoYW5pbWF0ZU9uTW91bnQgPyBcImluaXRcIiA6IG51bGwpO1xuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShvcGVuID09IG51bGwgPyBudWxsIDogb3BlbiA/IFwiZW50ZXJcIiA6IFwiZXhpdFwiKTtcbiAgICBjb25zdCBbc3VyZmFjZVdpZHRoLCBzZXRTdXJmYWNlV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1cmZhY2VIZWlnaHQsIHNldFN1cmZhY2VIZWlnaHRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3N1cmZhY2VYLCBzZXRTdXJmYWNlWF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZVksIHNldFN1cmZhY2VZXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nV2lkdGgsIHNldFRyYW5zaXRpb25pbmdXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ0hlaWdodCwgc2V0VHJhbnNpdGlvbmluZ0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1gsIHNldFRyYW5zaXRpb25pbmdYXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWSwgc2V0VHJhbnNpdGlvbmluZ1ldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGVsZW1lbnQpO1xuICAgIGNvbnN0IGxvZ2ljYWxEaXJlY3Rpb24gPSBnZXRMb2dpY2FsRGlyZWN0aW9uKCk7XG4gICAgY29uc3Qgb25UcmFuc2l0aW9uVXBkYXRlUmVmID0gdXNlUmVmKG9uVHJhbnNpdGlvblVwZGF0ZSk7XG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IGR1cmF0aW9uUmVmID0gdXNlUmVmKGR1cmF0aW9uKTtcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0b29MYXRlVGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGVsZW1lbnQgJiYgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xuICAgICAgICB9XG4gICAgfSwgW2VsZW1lbnRdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudCA9IG9uVHJhbnNpdGlvblVwZGF0ZTsgfSwgW29uVHJhbnNpdGlvblVwZGF0ZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHBoYXNlUmVmLmN1cnJlbnQgPSBwaGFzZTsgfSwgW3BoYXNlXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZGlyZWN0aW9uUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247IH0sIFtkaXJlY3Rpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkdXJhdGlvblJlZi5jdXJyZW50ID0gZHVyYXRpb247IH0sIFtkdXJhdGlvbl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gJiYgcGhhc2UpXG4gICAgICAgICAgICBvblRyYW5zaXRpb25VcGRhdGVSZWYuY3VycmVudD8uKGRpcmVjdGlvbiwgcGhhc2UpO1xuICAgIH0sIFtkaXJlY3Rpb24sIHBoYXNlXSk7XG4gICAgLy8gRXZlcnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBcInRyYW5zaXRpb25cIiwgYWRkIG91ciB0cmFuc2l0aW9uIHRpbWVvdXQgdGltZW91dHNcbiAgICAvLyB0byBjYXRjaCBhbnkgdGltZSBvblRyYW5zaXRpb25FbmQgZmFpbHMgdG8gcmVwb3J0IGZvciB3aGF0ZXZlciByZWFzb24gdG8gYmUgc2FmZVxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwaGFzZSA9PSBcInRyYW5zaXRpb25cIikge1xuICAgICAgICAgICAgY29uc3QgdGltZW91dER1cmF0aW9uID0gZHVyYXRpb25SZWYuY3VycmVudCA/PyAxMDAwO1xuICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgdG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XG4gICAgICAgICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIGlmICh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29MYXRlVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICAgICAgfTtcbiAgICB9LCBbcGhhc2VdKTtcbiAgICAvLyBBbnkgdGltZSBcIm9wZW5cIiBjaGFuZ2VzLCB1cGRhdGUgb3VyIGRpcmVjdGlvbiBhbmQgcGhhc2UuXG4gICAgLy8gSW4gYWRkaXRpb24sIG1lYXN1cmUgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaWYgcmVxdWVzdGVkLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIG9wZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQaGFzZSA9IHBoYXNlUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBTd2FwIG91ciBkaXJlY3Rpb25cbiAgICAgICAgICAgIGlmIChvcGVuKVxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImVudGVyXCIpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImV4aXRcIik7XG4gICAgICAgICAgICBzZXRQaGFzZShwcmV2aW91c1BoYXNlID09PSBudWxsID8gXCJmaW5hbGl6ZVwiIDogXCJpbml0XCIpO1xuICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFNpemVXaXRoVHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdYKHggKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWSh5ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1dpZHRoKHdpZHRoICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ0hlaWdodChoZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNQaGFzZSA9PT0gXCJmaW5hbGl6ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlJ3JlIGdvaW5nIHRvIGJlIG1lc3Npbmcgd2l0aCB0aGUgYWN0dWFsIGVsZW1lbnQncyBjbGFzcywgXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlJ2xsIHdhbnQgYW4gZWFzeSB3YXkgdG8gcmVzdG9yZSBpdCBsYXRlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja3VwID0gZWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc0Jhc2V9LW1lYXN1cmVgKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tZW50ZXJgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWluaXRgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWZpbmFsaXplYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWApO1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZVdpdGhvdXRUcmFuc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplV2l0aG91dFRyYW5zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VYKHggKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlWSh5ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVdpZHRoKHdpZHRoICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZUhlaWdodChoZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGJhY2t1cDtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW29wZW4sIGVsZW1lbnQsIG1lYXN1cmUsIGNsYXNzQmFzZV0pO1xuICAgIC8vIEFueSB0aW1lIHRoZSBwaGFzZSBjaGFuZ2VzIHRvIGluaXQsIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgc2NyZWVuIGlzIHBhaW50ZWQsXG4gICAgLy8gY2hhbmdlIHRoZSBwaGFzZSB0byBcInRyYW5zaXRpb25cIiBhbmQgcmUtcmVuZGVyICgpLlxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGRpcmVjdGlvblJlZi5jdXJyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgICAgICAgICBpZiAocGhhc2UgPT09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJlYWN0IGp1c3QgZmluaXNoZWQgcmVuZGVyaW5nIGluaXRcbiAgICAgICAgICAgICAgICAvLyBOb3cgc2V0IG91ciB0cmFuc2l0aW9uIHN0eWxlLlxuICAgICAgICAgICAgICAgIHNldFBoYXNlKFwidHJhbnNpdGlvblwiKTtcbiAgICAgICAgICAgICAgICBpZiAobWVhc3VyZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcGhhc2UsIG1lYXN1cmUsIGVsZW1lbnRdKTtcbiAgICBjb25zdCBpbmxpbmVEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb247XG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbjtcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XG4gICAgbGV0IGFsbW9zdERvbmUgPSB1c2VSZWZFbGVtZW50UHJvcHMoe1xuICAgICAgICByZWYsXG4gICAgICAgIHN0eWxlOiByZW1vdmVFbXB0eSh7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWR1cmF0aW9uYF06IGR1cmF0aW9uLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXhgXTogc3VyZmFjZVgsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UteWBdOiBzdXJmYWNlWSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS13aWR0aGBdOiBzdXJmYWNlV2lkdGgsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaGVpZ2h0YF06IHN1cmZhY2VIZWlnaHQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLWluc2V0YF06IHN1cmZhY2VJbmxpbmVJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1pbnNldGBdOiBzdXJmYWNlQmxvY2tJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1pbmxpbmUtc2l6ZWBdOiBzdXJmYWNlSW5saW5lU2l6ZSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1zaXplYF06IHN1cmZhY2VCbG9ja1NpemUsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteGBdOiB0cmFuc2l0aW9uaW5nWCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy15YF06IHRyYW5zaXRpb25pbmdZLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXdpZHRoYF06IHRyYW5zaXRpb25pbmdXaWR0aCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1oZWlnaHRgXTogdHJhbnNpdGlvbmluZ0hlaWdodCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtaW5zZXRgXTogdHJhbnNpdGlvbmluZ0lubGluZUluc2V0LFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLWluc2V0YF06IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0LFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWlubGluZS1zaXplYF06IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLXNpemVgXTogdHJhbnNpdGlvbmluZ0Jsb2NrU2l6ZVxuICAgICAgICB9KSxcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kLFxuICAgICAgICAuLi4oeyBcImFyaWEtaGlkZGVuXCI6IG9wZW4gPyB1bmRlZmluZWQgOiBcInRydWVcIiB9KSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGRpcmVjdGlvbiAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24pLCBkaXJlY3Rpb24gJiYgcGhhc2UgJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uLCBwaGFzZSksIGV4aXRWaXNpYmlsaXR5ID09IFwicmVtb3ZlZFwiICYmIGAke2NsYXNzQmFzZX0tcmVtb3ZlZC1vbi1leGl0YCwgZXhpdFZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIgJiYgYCR7Y2xhc3NCYXNlfS12aXNpYmxlLW9uLWV4aXRgLCBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLCBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YCksXG4gICAgfSk7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoYWxtb3N0RG9uZSwgb3RoZXJQcm9wcyk7XG59XG5mdW5jdGlvbiByZW1vdmVFbXB0eShvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKG9iaikuZmlsdGVyKChbXywgdl0pID0+IHYgIT0gbnVsbCkpO1xufVxuLyoqXG4gKiBBIGNvbXBvbmVudCB0aGF0ICp3cmFwcyBhbiBIVE1MRWxlbWVudCBvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQqIGFuZCBhbGxvd3MgaXQgdG8gdXNlIENTUyB0byB0cmFuc2l0aW9uIGluL291dC5cbiAqIENvbWJpbmVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gaXQsIHRoZSBwcm9wcyBpdHMgY2hpbGQgaGFzLCBhbmQgdGhlIHByb3BzIG5lZWRlZCBmb3IgdGhlIENTUyB0cmFuc2l0aW9uLCBhbmQgcGFzc2VzIHRoZW1cbiAqIGFsbCB0byB0aGUgY2hpbGQgZWxlbWVudCB5b3UgcHJvdmlkZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBtb3N0IGdlbmVyYWwgY29tcG9uZW50IHRoYXQgb3RoZXJzIHVzZSBhcyBhIGJhc2UuIEJ5IGRlZmF1bHQsIHRoaXMgY29tcG9uZW50IGJ5IGl0c2VsZiBkb2Vzbid0IGFjdHVhbGx5IGFkZCBhbnkgQ1NTIGNsYXNzZXMgdGhhdCBhbmltYXRlIGFueXRoaW5nIChsaWtlIG9wYWNpdHksIGZvciBleGFtcGxlKS5cbiAqIEl0IGFkZHMgY2xhc3NlcyBsaWtlIGB0cmFuc2l0aW9uLWVudGVyLWZpbmFsaXplYCwgYnV0IHlvdSBuZWVkIHRvIHByb3ZpZGUgdGhlIGFkZGl0aW9uYWwgZS5nLiBgZmFkZWAgY2xhc3MgdGhhdCByZWFjdHMgdG8gaXQuXG4gKlxuICogVXNlIHRoaXMgaWYgdGhlIG90aGVyLCBtb3JlIHNwZWNpYWxpemVkIFRyYW5zaXRpb24gY29tcG9uZW50cyBkb24ndCBmaXQgeW91ciBuZWVkcy5cbiAqXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIG9wZW49e29wZW59IHsuLi51c2VDcmVhdGVGYWRlUHJvcHMoLi4uKX0+PGRpdj57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIG9wZW49e29wZW59PjxkaXYgey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXG4gKi9cbmV4cG9ydCBjb25zdCBUcmFuc2l0aW9uYWJsZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFRyYW5zaXRpb24oeyBjaGlsZHJlbjogY2hpbGQsIGR1cmF0aW9uLCBjbGFzc0Jhc2UsIG1lYXN1cmUsIGV4aXRWaXNpYmlsaXR5LCBvcGVuLCBvblRyYW5zaXRpb25VcGRhdGUsIGFuaW1hdGVPbk1vdW50LCAuLi5wcm9wcyB9LCByKSB7XG4gICAgaWYgKCFjaGlsZElzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgVHJhbnNpdGlvbmFibGUgY29tcG9uZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSBjb21wb25lbnQgY2hpbGQgKGUuZy4gYSA8ZGl2PiwgYnV0IG5vdCBcXFwiYSBzdHJpbmdcXFwiKS5cIik7XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBtZWFzdXJlLCBvcGVuLCBhbmltYXRlT25Nb3VudCwgb25UcmFuc2l0aW9uVXBkYXRlLCByZWY6IHIsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzKTtcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcygpKHRyYW5zaXRpb25Qcm9wcywgeyAuLi5jaGlsZC5wcm9wcywgcmVmOiBjaGlsZC5yZWYgfSk7XG4gICAgcmV0dXJuIGNsb25lRWxlbWVudChjaGlsZCwgbWVyZ2VkV2l0aENoaWxkcmVuKTtcbn0pO1xuZnVuY3Rpb24gY2hpbGRJc1ZOb2RlKGNoaWxkKSB7XG4gICAgaWYgKCFjaGlsZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2hpbGQgIT0gXCJvYmplY3RcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXCJwcm9wc1wiIGluIGNoaWxkKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zaXRpb25hYmxlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIENsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2sgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlfS1jbGlwYCksXG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4taW5saW5lYF06IChjbGlwT3JpZ2luSW5saW5lID8/IGNsaXBPcmlnaW4gPz8gMC41KSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1pbmxpbmVgXTogKGNsaXBNaW5JbmxpbmUgPz8gY2xpcE1pbiA/PyAxKSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1taW4tYmxvY2tgXTogKGNsaXBNaW5CbG9jayA/PyBjbGlwTWluID8/IDApLFxuICAgICAgICB9LFxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuZXhwb3J0IGNvbnN0IENsaXAgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jaywgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jbGlwLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBDbGlwIH0gZnJvbSBcIi4vY2xpcFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG47XG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChDbGlwLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgWm9vbSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICpcbiAqIElNUE9SVEFOVDogSWYgdXNlZCBvdXRzaWRlIG9mIGEgYDxDb2xsYXBzZSAvPmAsIHlvdSBtdXN0IGluY2x1ZGUgdGhlIGBtZWFzdXJlYCBwcm9wIG9uIHRoZSBgPFRyYW5zaXRpb25hYmxlPmAgdGhhdCB5b3UgdXNlLlxuICpcbiAqIEBleGFtcGxlIDxUcmFuc2l0aW9uYWJsZSBtZWFzdXJlIHsuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKC4uLil9IC8+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgb3RoZXJQcm9wcykge1xuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIG1lYXN1cmU6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1jb2xsYXBzZWAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNvbGxhcHNlLW1pbi1ibG9ja2BdOiBtaW5CbG9ja1NpemUgPz8gMFxuICAgICAgICB9XG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBDb2xsYXBzZSBlZmZlY3QuXG4gKlxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSFcbiAqIE1ha2Ugc3VyZSB5b3UgZG8gdGVzdGluZyBvbiBsb3dlciBwb3dlciBkZXZpY2VzLCBvciBwcmVmZXIgYSBsaWdodGVyXG4gKiBhbHRlcm5hdGl2ZSwgbGlrZSBgPENsaXA+YC5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2UoeyBjbGFzc0Jhc2UsIG9wZW4sIG1pbkJsb2NrU2l6ZSwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCIuL2NvbGxhcHNlXCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIENvbGxhcHNlIGFuZCBGYWRlIGVmZmVjdHMuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBDb2xsYXBzZWAgYEZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xsYXBzZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDb2xsYXBzZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoQ29sbGFwc2UsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBTbGlkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMSk7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYoc2xpZGVUYXJnZXRCbG9jayA/PyAwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2xpZGVUYXJnZXRJbmxpbmUpXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50ID0gc2xpZGVUYXJnZXRJbmxpbmU7IH0sIFtzbGlkZVRhcmdldElubGluZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldEJsb2NrKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50ID0gc2xpZGVUYXJnZXRCbG9jazsgfSwgW3NsaWRlVGFyZ2V0QmxvY2tdKTtcbiAgICBpZiAoc2xpZGVUYXJnZXRJbmxpbmUgPT0gMClcbiAgICAgICAgc2xpZGVUYXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAoc2xpZGVUYXJnZXRCbG9jayA9PSAwKVxuICAgICAgICBzbGlkZVRhcmdldEJsb2NrID0gbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudDtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XG4gICAgICAgIGNsYXNzTmFtZTogYCR7Y2xhc3NCYXNlfS1zbGlkZWAsXG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc2xpZGUtdGFyZ2V0LWlubGluZWBdOiBgJHsoc2xpZGVUYXJnZXRJbmxpbmUgPz8gMCl9YCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc2xpZGUtdGFyZ2V0LWJsb2NrYF06IGAkeyhzbGlkZVRhcmdldEJsb2NrID8/IDApfWBcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgU2xpZGUgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBzbGlkZUlubGluZWAgYW5kIGBzbGlkZUJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZSh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2ssIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlU2xpZGVQcm9wcyh7IGNsYXNzQmFzZSwgc2xpZGVUYXJnZXRJbmxpbmUsIHNsaWRlVGFyZ2V0QmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VDcmVhdGVGYWRlUHJvcHMgfSBmcm9tIFwiLi9mYWRlXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBGYWRlIGVmZmVjdHMuXG4gKlxuICogYHNsaWRlSW5saW5lPXsoaW5kZXggLSBzZWxlY3RlZEluZGV4KSAvIDEwfWAgd291bGQgbWFrZSB0aGUgZWxlbWVudCBsb29rIGxpa2UgaXQgZmFkZXMgb3V0IGJlZm9yZSBpdCB0cmF2ZWxzIHRvIGl0cyB0YXJnZXQgZGVzdGluYXRpb24uXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxuICovXG5leHBvcnQgY29uc3QgU2xpZGVGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBvcGVuLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4gKHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tem9vbWAsXG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgfSxcbiAgICB9LCBvdGhlclByb3BzKSk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbSh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBab29tIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggWm9vbSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIFRoaXMgaXMgYW4gaWRlYWwgdGltZSB0byB1c2UgdGhlIG1pbmltdW0gc2l6ZSBab29tIHByb3BlcnRpZXMuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxuICovXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChab29tLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZVpvb21Qcm9wcyB9IGZyb20gXCIuL3pvb21cIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBab29tIGVmZmVjdHMuXG4gKlxuICogUHJvYmFibHkgYmVzdCBjb21iaW5lZCB3aXRoIGB1c2VDcmVhdGVGYWRlUHJvcHNgIChvciBqdXN0IHVzaW5nIGEgYFNsaWRlWm9vbUZhZGVgPykuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZUZhZGVab29tYCBgWm9vbWAgYEZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb20oeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCBvcGVuLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGVab29tIH0gZnJvbSBcIi4vc2xpZGUtem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIFpvb20sIFNsaWRlLCBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IHNob3J0aGFuZCBmb3Igc29tZSBwcm9wIGNyZWF0aW9uIGFuZCBwcm9wIG1lcmdpbmcgZnVuY3Rpb25zLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVgIGBab29tYCBgRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBvcGVuLCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlWm9vbSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmxpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gMTgwKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihmbGlwQW5nbGVCbG9jayA/PyAwKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoZmxpcEFuZ2xlSW5saW5lKVxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IGZsaXBBbmdsZUlubGluZTsgfSwgW2ZsaXBBbmdsZUlubGluZV0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChmbGlwQW5nbGVCbG9jaylcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0QmxvY2suY3VycmVudCA9IGZsaXBBbmdsZUJsb2NrOyB9LCBbZmxpcEFuZ2xlQmxvY2tdKTtcbiAgICBpZiAoZmxpcEFuZ2xlSW5saW5lID09IDApXG4gICAgICAgIGZsaXBBbmdsZUlubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xuICAgIGlmIChmbGlwQW5nbGVCbG9jayA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tZmxpcGAsXG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1pbmxpbmVgXTogYCR7KGZsaXBBbmdsZUlubGluZSA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyhmbGlwQW5nbGVCbG9jayA/PyAwKX1kZWdgLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1wZXJzcGVjdGl2ZWBdOiBgJHsocGVyc3BlY3RpdmUgPz8gODAwKX1weGBcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmxpcCBlZmZlY3QuXG4gKlxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYGZsaXBJbmxpbmVgIGFuZCBgZmxpcEJsb2NrYCxcbiAqIHdpdGggYDFgIGJlaW5nIGAxMDAlYCBvZiB0aGUgZWxlbWVudCdzIHdpZHRoIG9yIGhlaWdodC5cbiAqXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxuICogd2hpY2ggYWxsb3dzIGZvciBjb252ZW5pZW50IHNldHVwcyBpbnNpZGUgb2YgYSBgU3dhcENvbnRhaW5lcmBcbiAqIChgZmxpcElubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBGbGlwID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcCh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxpcC5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIHN3YXAgY29udGFpbmVyLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgaW5saW5lLCBjbGFzc0Jhc2UgfSwgb3RoZXJQcm9wcykge1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZSA/PyBcInRyYW5zaXRpb25cIn0tc3dhcC1jb250YWluZXJgLCBpbmxpbmUgJiYgYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lci1pbmxpbmVgKVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuLyoqXG4gKiBBbGxvd3MgYSBzZXQgb2YgY2hpbGQgPFRyYW5zaXRpb25hYmxlPiBjb21wb25lbnRzIHRvIGFuaW1hdGUgaW4gJiBvdXQgaW4tcGxhY2UuIFZlcnkgdXNlZnVsIGZvciwgZS5nLiwgdGFiIHBhbmVscy5cbiAqXG4gKiBZb3UgbXVzdCBtYW5hZ2UgZWFjaCBjaGlsZCBgPFRyYW5zaXRpb25hYmxlPmAgY29tcG9uZW50J3MgYG9wZW5gIHByb3AgLS0gdGhpcyBjb21wb25lbnQgKmRvZXMgbm90KiBtYW5hZ2UgYW55IHNvcnQgb2Ygc3RhdGUgaW4gdGhhdCByZWdhcmQuXG4gKlxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cbiAqXG4gKiBMb25nIHdheSBvZiBzYXlpbmcsIGlmIHlvdSBnZXQgYSBjcnlwdGljIGVycm9yIHdpdGggdGhpcyBjb21wb25lbnQsIG1ha2Ugc3VyZSBpdCBoYXMgYSBzaW5nbGUgYDxkaXY+YCBjaGlsZCBvciBzb21ldGhpbmcuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW4sIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xuICAgIGlubGluZSA/Pz0gdHlwZW9mIGNoaWxkcmVuLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgaW5saW5lRWxlbWVudHMuaGFzKGNoaWxkcmVuLnR5cGUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVN3YXBwYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBpbmxpbmUgfSwgeyAuLi5wLCByZWYgfSk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHMoKSh0cmFuc2l0aW9uUHJvcHMsIGNoaWxkcmVuLnByb3BzKTtcbiAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBtZXJnZWRXaXRoQ2hpbGRyZW4pO1xufSk7XG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cbi8vIE5vdCBwZXJmZWN0LCBidXQgaXQncyBub3Qgc3VwcG9zZWQgdG8gYmUuIGBpbmxpbmVgIGlzIGZvciBwZXJmZWN0LlxuY29uc3QgaW5saW5lRWxlbWVudHMgPSBuZXcgU2V0KFtcbiAgICBcImFcIixcbiAgICBcImFiYnJcIixcbiAgICBcImFjcm9ueW1cIixcbiAgICBcImF1ZGlvXCIsXG4gICAgXCJiXCIsXG4gICAgXCJiZGlcIixcbiAgICBcImJkb1wiLFxuICAgIFwiYmlnXCIsXG4gICAgXCJiclwiLFxuICAgIFwiYnV0dG9uXCIsXG4gICAgXCJjYW52YXNcIixcbiAgICBcImNpdGVcIixcbiAgICBcImNvZGVcIixcbiAgICBcImRhdGFcIixcbiAgICBcImRhdGFsaXN0XCIsXG4gICAgXCJkZWxcIixcbiAgICBcImRmblwiLFxuICAgIFwiZW1cIixcbiAgICBcImVtYmVkXCIsXG4gICAgXCJpXCIsXG4gICAgXCJpZnJhbWVcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImluc1wiLFxuICAgIFwia2JkXCIsXG4gICAgXCJsYWJlbFwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJtYXJrXCIsXG4gICAgXCJtZXRlclwiLFxuICAgIFwibm9zY3JpcHRcIixcbiAgICBcIm9iamVjdFwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwaWN0dXJlXCIsXG4gICAgXCJwcm9ncmVzc1wiLFxuICAgIFwicVwiLFxuICAgIFwicnVieVwiLFxuICAgIFwic1wiLFxuICAgIFwic2FtcFwiLFxuICAgIFwic2NyaXB0XCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcInNsb3RcIixcbiAgICBcInNtYWxsXCIsXG4gICAgXCJzcGFuXCIsXG4gICAgXCJzdHJvbmdcIixcbiAgICBcInN1YlwiLFxuICAgIFwic3VwXCIsXG4gICAgXCJzdmdcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0ZXh0YXJlYVwiLFxuICAgIFwidGltZVwiLFxuICAgIFwidVwiLFxuICAgIFwidHRcIixcbiAgICBcInZhclwiLFxuICAgIFwidmlkZW9cIixcbiAgICBcIndiclwiXG5dKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3YXBwYWJsZS5qcy5tYXAiLG51bGxdLCJuYW1lcyI6WyJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJvbGRCZWZvcmVEaWZmIiwib3B0aW9ucyIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJ0eXBlIiwiaG9va3MiLCJsZW5ndGgiLCJwdXNoIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwidW5kZWZpbmVkIiwibmV4dFZhbHVlIiwiYWN0aW9uIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWxsYmFjayIsImFyZ3MiLCJzdGF0ZSIsImFyZ3NDaGFuZ2VkIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImN1cnJlbnQiLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsImludm9rZUNsZWFudXAiLCJpbnZva2VFZmZlY3QiLCJlIiwidm5vZGUiLCJjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJIQVNfUkFGIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwicHJldmlvdXNDb21wb25lbnQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhvb2siLCJjb21wIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiYXNzaWduIiwib2JqIiwicHJvcHMiLCJpIiwic2hhbGxvd0RpZmZlcnMiLCJhIiwiYiIsImZvcndhcmRSZWYiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwidG1wIiwieCIsImFyZ3VtZW50cyIsInVzZVN0YXRlUCIsImNsb25lRWxlbWVudCIsImgiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7OztPQUFPO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxPQUFBO0VBQUEsT0FBQTtFQUFBLE9BQUE7RUFBQSxJQUFNQSxHQUFBQSxHQUFZLEVBQWxCO0VBQUEsSUFDTUMsR0FBQUEsR0FBWSxFQURsQjtFQUFBLElBRU1DLEdBQUFBLEdBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDQ2xDLElBQUlDLENBQUo7RUFBQSxJQUdJQyxDQUhKO0VBQUEsSUF5QklDLENBekJKO0VBQUEsSUFhSUMsQ0FBQUEsR0FBYyxDQWJsQjtFQUFBLElBZ0JJQyxDQUFBQSxHQUFvQixFQWhCeEI7RUFBQSxJQWtCSUMsQ0FBQUEsR0FBZ0JDLEdBQUFBLENBQUFBLEdBbEJwQjtFQUFBLElBbUJJQyxDQUFBQSxHQUFrQkQsR0FBQUEsQ0FBQUEsR0FuQnRCO0VBQUEsSUFvQklFLENBQUFBLEdBQWVGLEdBQUFBLENBQVFHLE1BcEIzQjtFQUFBLElBcUJJQyxDQUFBQSxHQUFZSixHQUFBQSxDQUFBQSxHQXJCaEI7RUFBQSxJQXNCSUssQ0FB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QUUsR0FBRyxRQUFRLElBQUksRUFBRTtjQUM3R0EsSUFBQyxRQUFRLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUN0RkEsSUFBQyxRQUFRLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUV0RkEsSUFBQyxRQUFRLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUN0RkEsSUFBQyxTQUFTLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUN2RkEsSUFBQyxhQUFhLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUMzRkEsSUFBQyxZQUFZLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSTtjQUMxRkEsSUFBQyxRQUFRLElBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBSSxDQUVwRixDQUNQLEVBQ047RUFDTCxDQUFDO0VBR0QsU0FBUyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQWlGO01BQzdJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUd6RSxDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFD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LEVBQUUsQ0FBQyxDQUFDO01BQ3RJLE1BQU0sY0FBYyxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sVUFBVSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBdUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzFJLE1BQU0sY0FBYyxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sVUFBVSxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBdUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzFJLE1BQU0sV0FBVyxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBdUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3BJLE1BQU0sV0FBVyxHQUFHQSxHQUFXLENBQUMsQ0FBQyxDQUFRLE9BQU8sT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBdUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BRXBJLE1BQU0sQ0FBQyxHQUFHLFFBQVEsR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDO01BQy9DLE1BQU0sRUFBRSxHQUFHLFFBQVEsR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDO01BRXBELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBUyxLQUFLa0QsSUFBQyxDQUFDLElBQUMsSUFBSSxFQUFFLFlBQVksS0FBSyxDQUFDLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEVBQUUs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
