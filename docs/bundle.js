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
  }, _.prototype.render = d, t$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$1.__r = 0, f$1 = 0;

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

    var onShouldCleanUp = F(() => {
      var cleanupCallback = cleanupCallbackRef.current;
      if (cleanupCallback) cleanupCallback();
    }, []); // There are a couple places where we'd like to use our initial
    // value in place of having no value at all yet.
    // This is the shared code for that, used on mount and whenever
    // getValue is called.

    var tryEnsureValue = F(() => {
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
    var getValue = F(() => {
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

    var setValue = F(arg => {
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
    var needANewObserver = F((element, observeBox) => {
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
      onElementChange: F(e => needANewObserver(e, getObserveBox === null || getObserveBox === void 0 ? void 0 : getObserveBox()), [])
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
      onElementChange: F(element => {
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
      onSizeChange: F(_ => onLogicalDirectionChange === null || onLogicalDirectionChange === void 0 ? void 0 : onLogicalDirectionChange(getLogicalDirectionInfo()), [])
    });
    var getLogicalDirectionInfo = F(() => {
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

    var convertToLogicalOrientation = F((elementOrientation, direction) => {
      var _direction, _direction2;

      (_direction = direction) !== null && _direction !== void 0 ? _direction : direction = getLogicalDirectionInfo();
      if (((_direction2 = direction) === null || _direction2 === void 0 ? void 0 : _direction2.inlineOrientation) === elementOrientation) return "inline";
      return "block";
    }, []);
    var convertToPhysicalSide = F((side, direction) => {
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
    var convertToLogicalSide = F((side, direction) => {
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
    var convertToPhysicalOrientation = F((elementOrientation, direction) => {
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
    var convertElementSize = F((elementSize, direction) => {
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
      useLogicalDirectionProps: F(props => useRefElementProps(useElementSizeProps(props)), []),
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
        ["--".concat(classBase, "-duration")]: duration ? "".concat(duration, "ms") : undefined,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tanMiLCJub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tanMiLCIuLi9mb3J3YXJkLWVsZW1lbnQtcmVmLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXBhc3NpdmUtc3RhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNoaWxkcmVuLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nsc3gvZGlzdC9jbHN4Lm0uanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLWNsYXNzZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXJlZnMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXN0eWxlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtcmVmLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvcHJlYWN0LXByb3AtaGVscGVycy91c2UtZWxlbWVudC1zaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWxvZ2ljYWwtZGlyZWN0aW9uLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLWFuaW1hdGlvbi1mcmFtZS5qcyIsIi4uL25vZGVfbW9kdWxlcy93aWNnLWluZXJ0L2Rpc3QvaW5lcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvYmxvY2tpbmctZWxlbWVudHMvZGlzdC9ibG9ja2luZy1lbGVtZW50cy5qcyIsIi4uL3RyYW5zaXRpb25hYmxlLmpzIiwiLi4vY2xpcC5qcyIsIi4uL2ZhZGUuanMiLCIuLi9jbGlwLWZhZGUuanMiLCIuLi9jb2xsYXBzZS5qcyIsIi4uL2NvbGxhcHNlLWZhZGUuanMiLCIuLi9zbGlkZS5qcyIsIi4uL3NsaWRlLWZhZGUuanMiLCIuLi96b29tLmpzIiwiLi4vem9vbS1mYWRlLmpzIiwiLi4vc2xpZGUtem9vbS5qcyIsIi4uL3NsaWRlLXpvb20tZmFkZS5qcyIsIi4uL2ZsaXAuanMiLCIuLi9zd2FwcGFibGUuanMiLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbixsLHUsaSx0LHIsbyxmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LHIsbyxmPXt9O2ZvcihvIGluIHUpXCJrZXlcIj09bz90PXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT11W29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKG8gaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltvXSYmKGZbb109bC5kZWZhdWx0UHJvcHNbb10pO3JldHVybiB5KGwsZix0LHIsbnVsbCl9ZnVuY3Rpb24geShuLGksdCxyLG8pe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6cixfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1vPysrdTpvfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8byE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKG89bC5kZWJvdW5jZVJlbmRlcmluZyl8fHIpKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxyLG87bi5fX2QmJihyPSh0PShsPW4pLl9fdikuX19lLChvPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihvLHQsaSxsLl9fbix2b2lkIDAhPT1vLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bcl06bnVsbCx1LG51bGw9PXI/ayh0KTpyLHQuX19oKSx6KHUsdCksdC5fX2UhPXImJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LHIsbyxmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxyLG8sZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmXy5fX2s9PT1wLl9faz9fLl9fZD1zPXgoXyxzLG4pOnM9UChuLF8scCx3LGIscyksXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cykpOnMmJnAuX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWsocCkpfWZvcih1Ll9fZT1tLGg9QTtoLS07KW51bGwhPXdbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPXdbaF0uX19lJiZ3W2hdLl9fZT09dS5fX2QmJih1Ll9fZD1rKGksaCsxKSksTih3W2hdLHdbaF0pKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspTShnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIHgobixsLHUpe2Zvcih2YXIgaSx0PW4uX19rLHI9MDt0JiZyPHQubGVuZ3RoO3IrKykoaT10W3JdKSYmKGkuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGkudHlwZT94KGksbCx1KTpQKHUsaSxpLHQsaS5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIEEobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXtBKG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24gUChuLGwsdSxpLHQscil7dmFyIG8sZixlO2lmKHZvaWQgMCE9PWwuX19kKW89bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9cnx8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09cnx8ci5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLG89bnVsbDtlbHNle2ZvcihmPXIsZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsciksbz1yfXJldHVybiB2b2lkIDAhPT1vP286dC5uZXh0U2libGluZ31mdW5jdGlvbiBDKG4sbCx1LGksdCl7dmFyIHI7Zm9yKHIgaW4gdSlcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8ciBpbiBsfHxIKG4scixudWxsLHVbcl0saSk7Zm9yKHIgaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW3JdfHxcImNoaWxkcmVuXCI9PT1yfHxcImtleVwiPT09cnx8XCJ2YWx1ZVwiPT09cnx8XCJjaGVja2VkXCI9PT1yfHx1W3JdPT09bFtyXXx8SChuLHIsbFtyXSx1W3JdLGkpfWZ1bmN0aW9uICQobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fHMudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEgobixsLHUsaSx0KXt2YXIgcjtuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fCQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8JChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlyPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/VDpJLHIpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uIEkobil7dGhpcy5sW24udHlwZSshMV0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIFQobil7dGhpcy5sW24udHlwZSshMF0obC5ldmVudD9sLmV2ZW50KG4pOm4pfWZ1bmN0aW9uIGoobix1LGksdCxyLG8sZixlLGMpe3ZhciBzLGgsdix5LHAsayxiLG0sZyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKGM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLG89W2VdKSwocz1sLl9fYikmJnModSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYobT11LnByb3BzLGc9KHM9UC5jb250ZXh0VHlwZSkmJnRbcy5fX2NdLHg9cz9nP2cucHJvcHMudmFsdWU6cy5fXzp0LGkuX19jP2I9KGg9dS5fX2M9aS5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAobSx4KToodS5fX2M9aD1uZXcgXyhtLHgpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1PKSxnJiZnLnN1YihoKSxoLnByb3BzPW0saC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD14LGguX19uPXQsdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9YSh7fSxoLl9fcykpLGEoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobSxoLl9fcykpKSx5PWgucHJvcHMscD1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmbSE9PXkmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG0seCksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShtLGguX19zLHgpfHx1Ll9fdj09PWkuX192KXtoLnByb3BzPW0saC5zdGF0ZT1oLl9fcyx1Ll9fdiE9PWkuX192JiYoaC5fX2Q9ITEpLGguX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUobSxoLl9fcyx4KSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHkscCxrKX0pfWguY29udGV4dD14LGgucHJvcHM9bSxoLnN0YXRlPWguX19zLChzPWwuX19yKSYmcyh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPW4scz1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYodD1hKGEoe30sdCksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoeSxwKSksQT1udWxsIT1zJiZzLnR5cGU9PT1kJiZudWxsPT1zLmtleT9zLnByb3BzLmNoaWxkcmVuOnMsdyhuLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQscixvLGYsZSxjKSxoLmJhc2U9dS5fX2UsdS5fX2g9bnVsbCxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxiJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT0hMX1lbHNlIG51bGw9PW8mJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1MKGkuX19lLHUsaSx0LHIsbyxmLGMpOyhzPWwuZGlmZmVkKSYmcyh1KX1jYXRjaChuKXt1Ll9fdj1udWxsLChjfHxudWxsIT1vKSYmKHUuX19lPWUsdS5fX2g9ISFjLG9bby5pbmRleE9mKGUpXT1udWxsKSxsLl9fZShuLHUsaSl9fWZ1bmN0aW9uIHoobix1KXtsLl9fYyYmbC5fX2ModSxuKSxuLnNvbWUoZnVuY3Rpb24odSl7dHJ5e249dS5fX2gsdS5fX2g9W10sbi5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKG4pe2wuX19lKG4sdS5fX3YpfX0pfWZ1bmN0aW9uIEwobCx1LGksdCxyLG8sZixjKXt2YXIgcyxhLHYseT1pLnByb3BzLHA9dS5wcm9wcyxkPXUudHlwZSxfPTA7aWYoXCJzdmdcIj09PWQmJihyPSEwKSxudWxsIT1vKWZvcig7XzxvLmxlbmd0aDtfKyspaWYoKHM9b1tfXSkmJihzPT09bHx8KGQ/cy5sb2NhbE5hbWU9PWQ6Mz09cy5ub2RlVHlwZSkpKXtsPXMsb1tfXT1udWxsO2JyZWFrfWlmKG51bGw9PWwpe2lmKG51bGw9PT1kKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwKTtsPXI/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixkKTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KGQscC5pcyYmcCksbz1udWxsLGM9ITF9aWYobnVsbD09PWQpeT09PXB8fGMmJmwuZGF0YT09PXB8fChsLmRhdGE9cCk7ZWxzZXtpZihvPW8mJm4uY2FsbChsLmNoaWxkTm9kZXMpLGE9KHk9aS5wcm9wc3x8ZSkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1wLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT1vKWZvcih5PXt9LF89MDtfPGwuYXR0cmlidXRlcy5sZW5ndGg7XysrKXlbbC5hdHRyaWJ1dGVzW19dLm5hbWVdPWwuYXR0cmlidXRlc1tfXS52YWx1ZTsodnx8YSkmJih2JiYoYSYmdi5fX2h0bWw9PWEuX19odG1sfHx2Ll9faHRtbD09PWwuaW5uZXJIVE1MKXx8KGwuaW5uZXJIVE1MPXYmJnYuX19odG1sfHxcIlwiKSl9aWYoQyhsLHAseSxyLGMpLHYpdS5fX2s9W107ZWxzZSBpZihfPXUucHJvcHMuY2hpbGRyZW4sdyhsLEFycmF5LmlzQXJyYXkoXyk/XzpbX10sdSxpLHQsciYmXCJmb3JlaWduT2JqZWN0XCIhPT1kLG8sZixvP29bMF06aS5fX2smJmsoaSwwKSxjKSxudWxsIT1vKWZvcihfPW8ubGVuZ3RoO18tLTspbnVsbCE9b1tfXSYmaChvW19dKTtjfHwoXCJ2YWx1ZVwiaW4gcCYmdm9pZCAwIT09KF89cC52YWx1ZSkmJihfIT09bC52YWx1ZXx8XCJwcm9ncmVzc1wiPT09ZCYmIV8pJiZIKGwsXCJ2YWx1ZVwiLF8seS52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBwJiZ2b2lkIDAhPT0oXz1wLmNoZWNrZWQpJiZfIT09bC5jaGVja2VkJiZIKGwsXCJjaGVja2VkXCIsXyx5LmNoZWNrZWQsITEpKX1yZXR1cm4gbH1mdW5jdGlvbiBNKG4sdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHUpOm4uY3VycmVudD11fWNhdGNoKG4pe2wuX19lKG4saSl9fWZ1bmN0aW9uIE4obix1LGkpe3ZhciB0LHI7aWYobC51bm1vdW50JiZsLnVubW91bnQobiksKHQ9bi5yZWYpJiYodC5jdXJyZW50JiZ0LmN1cnJlbnQhPT1uLl9fZXx8TSh0LG51bGwsdSkpLG51bGwhPSh0PW4uX19jKSl7aWYodC5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7dC5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKG4pe2wuX19lKG4sdSl9dC5iYXNlPXQuX19QPW51bGx9aWYodD1uLl9faylmb3Iocj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJk4odFtyXSx1LFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4udHlwZSk7aXx8bnVsbD09bi5fX2V8fGgobi5fX2UpLG4uX19lPW4uX19kPXZvaWQgMH1mdW5jdGlvbiBPKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIFModSxpLHQpe3ZhciByLG8sZjtsLl9fJiZsLl9fKHUsaSksbz0ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0KT9udWxsOnQmJnQuX19rfHxpLl9fayxmPVtdLGooaSx1PSghciYmdHx8aSkuX19rPXYoZCxudWxsLFt1XSksb3x8ZSxlLHZvaWQgMCE9PWkub3duZXJTVkdFbGVtZW50LCFyJiZ0P1t0XTpvP251bGw6aS5maXJzdENoaWxkP24uY2FsbChpLmNoaWxkTm9kZXMpOm51bGwsZiwhciYmdD90Om8/by5fX2U6aS5maXJzdENoaWxkLHIpLHooZix1KX1mdW5jdGlvbiBxKG4sbCl7UyhuLGwscSl9ZnVuY3Rpb24gQihsLHUsaSl7dmFyIHQscixvLGY9YSh7fSxsLnByb3BzKTtmb3IobyBpbiB1KVwia2V5XCI9PW8/dD11W29dOlwicmVmXCI9PW8/cj11W29dOmZbb109dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTppKSx5KGwudHlwZSxmLHR8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEQobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrZisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj1jLnNsaWNlLGw9e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSxpLHQ7bD1sLl9fOylpZigodT1sLl9fYykmJiF1Ll9fKXRyeXtpZigoaT11LmNvbnN0cnVjdG9yKSYmbnVsbCE9aS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih1LnNldFN0YXRlKGkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSx0PXUuX19kKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodS5jb21wb25lbnREaWRDYXRjaChuKSx0PXUuX19kKSx0KXJldHVybiB1Ll9fRT11fWNhdGNoKGwpe249bH10aHJvdyBufX0sdT0wLGk9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LF8ucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPWEoe30sdGhpcy5zdGF0ZSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmKG49bihhKHt9LHUpLHRoaXMucHJvcHMpKSxuJiZhKHUsbiksbnVsbCE9biYmdGhpcy5fX3YmJihsJiZ0aGlzLl9faC5wdXNoKGwpLG0odGhpcykpfSxfLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLl9fdiYmKHRoaXMuX19lPSEwLG4mJnRoaXMuX19oLnB1c2gobiksbSh0aGlzKSl9LF8ucHJvdG90eXBlLnJlbmRlcj1kLHQ9W10scj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2UucHJvdG90eXBlLnRoZW4uYmluZChQcm9taXNlLnJlc29sdmUoKSk6c2V0VGltZW91dCxnLl9fcj0wLGY9MDtleHBvcnR7UyBhcyByZW5kZXIscSBhcyBoeWRyYXRlLHYgYXMgY3JlYXRlRWxlbWVudCx2IGFzIGgsZCBhcyBGcmFnbWVudCxwIGFzIGNyZWF0ZVJlZixpIGFzIGlzVmFsaWRFbGVtZW50LF8gYXMgQ29tcG9uZW50LEIgYXMgY2xvbmVFbGVtZW50LEQgYXMgY3JlYXRlQ29udGV4dCxBIGFzIHRvQ2hpbGRBcnJheSxsIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLG89MCxpPVtdLGM9bi5fX2IsZj1uLl9fcixlPW4uZGlmZmVkLGE9bi5fX2Msdj1uLnVubW91bnQ7ZnVuY3Rpb24gbSh0LHIpe24uX19oJiZuLl9faCh1LHQsb3x8ciksbz0wO3ZhciBpPXUuX19IfHwodS5fX0g9e19fOltdLF9faDpbXX0pO3JldHVybiB0Pj1pLl9fLmxlbmd0aCYmaS5fXy5wdXNoKHt9KSxpLl9fW3RdfWZ1bmN0aW9uIGwobil7cmV0dXJuIG89MSxwKHcsbil9ZnVuY3Rpb24gcChuLHIsbyl7dmFyIGk9bSh0KyssMik7cmV0dXJuIGkudD1uLGkuX19jfHwoaS5fXz1bbz9vKHIpOncodm9pZCAwLHIpLGZ1bmN0aW9uKG4pe3ZhciB0PWkudChpLl9fWzBdLG4pO2kuX19bMF0hPT10JiYoaS5fXz1bdCxpLl9fWzFdXSxpLl9fYy5zZXRTdGF0ZSh7fSkpfV0saS5fX2M9dSksaS5fX31mdW5jdGlvbiB5KHIsbyl7dmFyIGk9bSh0KyssMyk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX0guX19oLnB1c2goaSkpfWZ1bmN0aW9uIGgocixvKXt2YXIgaT1tKHQrKyw0KTshbi5fX3MmJmsoaS5fX0gsbykmJihpLl9fPXIsaS5fX0g9byx1Ll9faC5wdXNoKGkpKX1mdW5jdGlvbiBzKG4pe3JldHVybiBvPTUsQShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gXyhuLHQsdSl7bz02LGgoZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24gQShuLHUpe3ZhciByPW0odCsrLDcpO3JldHVybiBrKHIuX19ILHUpJiYoci5fXz1uKCksci5fX0g9dSxyLl9faD1uKSxyLl9ffWZ1bmN0aW9uIEYobix0KXtyZXR1cm4gbz04LEEoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gVChuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdLG89bSh0KyssOSk7cmV0dXJuIG8uYz1uLHI/KG51bGw9PW8uX18mJihvLl9fPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlKTpuLl9ffWZ1bmN0aW9uIGQodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gcShuKXt2YXIgcj1tKHQrKywxMCksbz1sKCk7cmV0dXJuIHIuX189bix1LmNvbXBvbmVudERpZENhdGNofHwodS5jb21wb25lbnREaWRDYXRjaD1mdW5jdGlvbihuKXtyLl9fJiZyLl9fKG4pLG9bMV0obil9KSxbb1swXSxmdW5jdGlvbigpe29bMV0odm9pZCAwKX1dfWZ1bmN0aW9uIHgoKXtpLmZvckVhY2goZnVuY3Rpb24odCl7aWYodC5fX1ApdHJ5e3QuX19ILl9faC5mb3JFYWNoKGcpLHQuX19ILl9faC5mb3JFYWNoKGopLHQuX19ILl9faD1bXX1jYXRjaCh1KXt0Ll9fSC5fX2g9W10sbi5fX2UodSx0Ll9fdil9fSksaT1bXX1uLl9fYj1mdW5jdGlvbihuKXt1PW51bGwsYyYmYyhuKX0sbi5fX3I9ZnVuY3Rpb24obil7ZiYmZihuKSx0PTA7dmFyIHI9KHU9bi5fX2MpLl9fSDtyJiYoci5fX2guZm9yRWFjaChnKSxyLl9faC5mb3JFYWNoKGopLHIuX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24odCl7ZSYmZSh0KTt2YXIgbz10Ll9fYztvJiZvLl9fSCYmby5fX0guX19oLmxlbmd0aCYmKDEhPT1pLnB1c2gobykmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxiJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO2ImJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KSh4KSksdT1udWxsfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLEEgYXMgdXNlTWVtbyxGIGFzIHVzZUNhbGxiYWNrLFQgYXMgdXNlQ29udGV4dCxkIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgZn1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIGQsRnJhZ21lbnQgYXMgdixyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDpkKGQobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP2QobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9ZChuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTpkfSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sYz0hMD09PXQuX19oO3IuX191Kyt8fGN8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnModixudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3ModixudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PWQobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGRvbWluYW50fGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LHo9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiBCKG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEgobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIFo9aC5ldmVudDtmdW5jdGlvbiBZKCl7fWZ1bmN0aW9uICQoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gcSgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gWiYmKG49WihuKSksbi5wZXJzaXN0PVksbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLG4uaXNEZWZhdWx0UHJldmVudGVkPXEsbi5uYXRpdmVFdmVudD1ufTt2YXIgRyxKPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxLPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIHU9LTE9PT10LmluZGV4T2YoXCItXCIpO2Zvcih2YXIgbyBpbiByPXt9LGUpe3ZhciBpPWVbb107ViYmXCJjaGlsZHJlblwiPT09byYmXCJub3NjcmlwdFwiPT09dHx8XCJ2YWx1ZVwiPT09byYmXCJkZWZhdWx0VmFsdWVcImluIGUmJm51bGw9PWl8fChcImRlZmF1bHRWYWx1ZVwiPT09byYmXCJ2YWx1ZVwiaW4gZSYmbnVsbD09ZS52YWx1ZT9vPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1vJiYhMD09PWk/aT1cIlwiOi9vbmRvdWJsZWNsaWNrL2kudGVzdChvKT9vPVwib25kYmxjbGlja1wiOi9eb25jaGFuZ2UodGV4dGFyZWF8aW5wdXQpL2kudGVzdChvK3QpJiYheihlLnR5cGUpP289XCJvbmlucHV0XCI6L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnApLy50ZXN0KG8pP289by50b0xvd2VyQ2FzZSgpOnUmJlAudGVzdChvKT9vPW8ucmVwbGFjZSgvW0EtWjAtOV0vLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCk6bnVsbD09PWkmJihpPXZvaWQgMCkscltvXT1pKX1cInNlbGVjdFwiPT10JiZyLm11bHRpcGxlJiZBcnJheS5pc0FycmF5KHIudmFsdWUpJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD0tMSE9ci52YWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpfSkpLFwic2VsZWN0XCI9PXQmJm51bGwhPXIuZGVmYXVsdFZhbHVlJiYoci52YWx1ZT1kKGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7bi5wcm9wcy5zZWxlY3RlZD1yLm11bHRpcGxlPy0xIT1yLmRlZmF1bHRWYWx1ZS5pbmRleE9mKG4ucHJvcHMudmFsdWUpOnIuZGVmYXVsdFZhbHVlPT1uLnByb3BzLnZhbHVlfSkpLG4ucHJvcHM9cn10JiZlLmNsYXNzIT1lLmNsYXNzTmFtZSYmKEouZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxudWxsIT1lLmNsYXNzTmFtZSYmKHIuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY2xhc3NOYW1lXCIsSikpLG4uJCR0eXBlb2Y9aixLJiZLKG4pfTt2YXIgUT1oLl9fcjtoLl9fcj1mdW5jdGlvbihuKXtRJiZRKG4pLEc9bi5fX2N9O3ZhciBYPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gRy5fX25bbi5fX2NdLnByb3BzLnZhbHVlfX19fSxubj1cIjE3LjAuMlwiO2Z1bmN0aW9uIHRuKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBlbihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1qfWZ1bmN0aW9uIHJuKG4pe3JldHVybiBlbihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIHVuKG4pe3JldHVybiEhbi5fX2smJihwKG51bGwsbiksITApfWZ1bmN0aW9uIG9uKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGxuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGNuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LGZuPXY7ZXhwb3J0IGRlZmF1bHR7dXNlU3RhdGU6bix1c2VSZWR1Y2VyOnQsdXNlRWZmZWN0OmUsdXNlTGF5b3V0RWZmZWN0OnIsdXNlUmVmOnUsdXNlSW1wZXJhdGl2ZUhhbmRsZTpvLHVzZU1lbW86aSx1c2VDYWxsYmFjazpsLHVzZUNvbnRleHQ6Yyx1c2VEZWJ1Z1ZhbHVlOmYsdmVyc2lvbjpcIjE3LjAuMlwiLENoaWxkcmVuOmsscmVuZGVyOkIsaHlkcmF0ZTpILHVubW91bnRDb21wb25lbnRBdE5vZGU6dW4sY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6XyxjcmVhdGVGYWN0b3J5OnRuLGNsb25lRWxlbWVudDpybixjcmVhdGVSZWY6YixGcmFnbWVudDp2LGlzVmFsaWRFbGVtZW50OmVuLGZpbmRET01Ob2RlOm9uLENvbXBvbmVudDphLFB1cmVDb21wb25lbnQ6RSxtZW1vOmcsZm9yd2FyZFJlZjp4LGZsdXNoU3luYzpjbix1bnN0YWJsZV9iYXRjaGVkVXBkYXRlczpsbixTdHJpY3RNb2RlOnYsU3VzcGVuc2U6TCxTdXNwZW5zZUxpc3Q6TSxsYXp5OkYsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6WH07ZXhwb3J0e25uIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbixCIGFzIHJlbmRlcixIIGFzIGh5ZHJhdGUsdW4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCx0biBhcyBjcmVhdGVGYWN0b3J5LHJuIGFzIGNsb25lRWxlbWVudCxlbiBhcyBpc1ZhbGlkRWxlbWVudCxvbiBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixjbiBhcyBmbHVzaFN5bmMsbG4gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxYIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcbi8qKlxuICogU2hvcnRjdXQgZm9yIHByZWFjdC9jb21wYXQncyBgZm9yd2FyZFJlZmAgdGhhdCBhdXRvLWFzc3VtZXMgc29tZSB0aGluZ3MgdGhhdCBhcmUgdXNlZnVsIGZvciBmb3J3YXJkaW5nIHJlZnMgdG8gYEhUTUxFbGVtZW50c2Agc3BlY2lmaWNhbGx5LlxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFbGVtZW50UmVmKENvbXBvbmVudCkge1xuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcbiAgICByZXR1cm4gRm9yd2FyZGVkQ29tcG9uZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG4vKipcbiAqIERlYnVnIGhvb2suXG4gKlxuICogR2l2ZW4gYSB2YWx1ZSBvciBzZXQgb2YgdmFsdWVzLCBlbWl0cyBhIGNvbnNvbGUgZXJyb3IgaWYgYW55IG9mIHRoZW0gY2hhbmdlIGZyb20gb25lIHJlbmRlciB0byB0aGUgbmV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuc3VyZVN0YWJpbGl0eSguLi52YWx1ZXMpIHtcbiAgICB1c2VIZWxwZXIodmFsdWVzLmxlbmd0aCwgMCk7XG4gICAgdmFsdWVzLmZvckVhY2godXNlSGVscGVyKTtcbiAgICByZXR1cm47XG4gICAgZnVuY3Rpb24gdXNlSGVscGVyKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zIGFyZSBwZXJmZWN0bHkgc3RhYmxlIGFjcm9zcyByZW5kZXJzXG4gICAgICAgIGNvbnN0IGhlbHBlclRvRW5zdXJlU3RhYmlsaXR5ID0gdXNlUmVmKHZhbHVlKTtcbiAgICAgICAgY29uc3Qgc2hvd25FcnJvciA9IHVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eS5jdXJyZW50ICE9IHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNob3duRXJyb3IuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFRoaXMgaG9vayByZXF1aXJlcyBzb21lIG9yIGFsbCBvZiBpdHMgYXJndW1lbnRzIHJlbWFpbiBzdGFibGUgYWNyb3NzIGVhY2ggcmVuZGVyOyBwbGVhc2UgY2hlY2sgdGhlICR7aW5kZXh9LWluZGV4ZWQgdmFsdWUgdGhhdCB3YXMgY2hlY2tlZC5gKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBzaG93bkVycm9yLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBTaW1pbGFyIHRvIGB1c2VTdGF0ZWAsIGJ1dCBmb3IgdmFsdWVzIHRoYXQgYXJlbid0IFwicmVuZGVyLWltcG9ydGFudFwiICZuZGFzaDsgdXBkYXRlcyBkb24ndCBjYXVzZSBhIHJlLXJlbmRlciBhbmQgc28gdGhlIHZhbHVlIHNob3VsZG4ndCBiZSB1c2VkIGR1cmluZyByZW5kZXIgKHRob3VnaCBpdCBjZXJ0YWlubHkgY2FuLCBhdCBsZWFzdCBieSByZS1yZW5kZXJpbmcgYWdhaW4pLlxuICpcbiAqIFRvIGNvbXBlbnNhdGUgZm9yIHRoaXMsIHlvdSBzaG91bGQgcGFzcyBhIGB1c2VFZmZlY3RgLWVzcXVlIGNhbGxiYWNrIHRoYXQgaXMgcnVuIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSnVzdCBsaWtlIGB1c2VFZmZlY3RgLCB0aGlzIGNhbGxiYWNrIGNhbiByZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uIHRoYXQncyBydW4gYmVmb3JlIHRoZSB2YWx1ZSBjaGFuZ2VzLiAgSWYgeW91IHdvdWxkIGxpa2UgdG8gcmUtcmVuZGVyIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKG9yLCBzYXksIHdoZW4gdGhlIHZhbHVlIG1lZXRzIHNvbWUgY3JpdGVyaWEpLCB0aGlzIGlzIHdoZXJlIHlvdSdsbCB3YW50IHRvIHB1dCBpbiBhIGNhbGwgdG8gYSBgc2V0U3RhdGVgIGZ1bmN0aW9uLlxuICpcbiAqIFRvIHN1bW1hcml6ZSwgaXQncyBsaWtlIGEgYHVzZVN0YXRlYC1gdXNlRWZmZWN0YCBtYXNodXA6XG4gKlxuICogMS4gSXQncyBsaWtlIGB1c2VTdGF0ZWAsIGV4Y2VwdCB0aGlzIHZlcnNpb24gb2YgYHNldFN0YXRlYCBkb2Vzbid0IHJlLXJlbmRlciB0aGUgd2hvbGUgY29tcG9uZW50XG4gKiAyLiBJdCdzIGxpa2UgYHVzZVN0YXRlYCwgZXhjZXB0IHlvdSBjYW4gcnVuIGEgZnVuY3Rpb24gd2hlbiB0aGUgdmFsdWUgY2hhbmdlcyB0aGF0IG9wdGlvbmFsbHkgcmV0dXJucyBhIGNsZWFudXAgZnVuY3Rpb25cbiAqIDMuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHlvdSB0cmlnZ2VyIHRoZSBlZmZlY3QgZnVuY3Rpb24gXCJyZW1vdGVseVwiIGluc3RlYWQgb2YgaXQgcnVubmluZyBhZnRlciByZW5kZXJpbmdcbiAqIDQuIEl0J3MgbGlrZSBgdXNlRWZmZWN0YCwgZXhjZXB0IHRoZSBzaW5nbGUgXCJkZXBlbmRlbmN5XCIgaXMgYmFzZWQgb24geW91ciBjYWxscyB0byBgc2V0U3RhdGVgXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGNhbGxpbmcgYHNldFN0YXRlYCBkb2Vzbid0IGNhdXNlIGFueSByZS1yZW5kZXJzLCB5b3UgY2FuIGRvIHRoYXQgd2l0aGluIHlvdXIgYG9uQ2hhbmdlYCBmdW5jdGlvbiwgY2FsbGVkIHdoZW5ldmVyIHRoZSB2YWx1ZSBjaGFuZ2VzIHZpYSB0aGF0IGBzZXRTdGF0ZWAuXG4gKlxuICogQHBhcmFtIG9uQ2hhbmdlIFRoZSBcImVmZmVjdFwiIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLiBFZmZlY3RpdmVseSB0aGUgc2FtZSBhcyBgdXNlRWZmZWN0YCdzIFwiZWZmZWN0XCIgZnVuY3Rpb24uICBNVVNUIEJFIFNUQUJMRSwgZWl0aGVyIGJlY2F1c2UgaXQgaGFzIG5vIGRlcGVuZGVuY2llcywgb3IgYmVjYXVzZSBpdCdzIGZyb20gdXNlU3RhYmxlQ2FsbGJhY2ssIGJ1dCB0aGlzIHdpbGwgbWVhbiB5b3UgY2Fubm90IHVzZSBnZXRTdGF0ZSBvciBzZXRTdGF0ZSBkdXJpbmcgcmVuZGVyLlxuICogQHBhcmFtIGdldEluaXRpYWxWYWx1ZSBJZiBwcm92aWRlZCwgdGhlIGVmZmVjdCB3aWxsIGJlIGludm9rZWQgb25jZSB3aXRoIHRoaXMgdmFsdWUgb24gbW91bnQuIE1VU1QgQkUgU1RBQkxFLCBlaXRoZXIgYmVjYXVzZSBpdCBoYXMgbm8gZGVwZW5kZW5jaWVzLCBvciBiZWNhdXNlIGl0J3MgZnJvbSB1c2VTdGFibGVDYWxsYmFjaywgYnV0IHRoaXMgd2lsbCBtZWFuIHlvdSBjYW5ub3QgdXNlIGdldFN0YXRlIG9yIHNldFN0YXRlIGR1cmluZyByZW5kZXIuXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUGFzc2l2ZVN0YXRlKG9uQ2hhbmdlLCBnZXRJbml0aWFsVmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZihVbnNldCk7XG4gICAgY29uc3Qgd2FybmluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgY2xlYW51cENhbGxiYWNrUmVmID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHByb3ZpZGVkIGZ1bmN0aW9ucyBhcmUgcGVyZmVjdGx5IHN0YWJsZSBhY3Jvc3MgcmVuZGVyc1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShvbkNoYW5nZSwgZ2V0SW5pdGlhbFZhbHVlKTtcbiAgICAvLyBTaGFyZWQgYmV0d2VlbiBcImRlcGVuZGVuY3kgY2hhbmdlZFwiIGFuZCBcImNvbXBvbmVudCB1bm1vdW50ZWRcIi5cbiAgICBjb25zdCBvblNob3VsZENsZWFuVXAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGxldCBjbGVhbnVwQ2FsbGJhY2sgPSBjbGVhbnVwQ2FsbGJhY2tSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKGNsZWFudXBDYWxsYmFjaylcbiAgICAgICAgICAgIGNsZWFudXBDYWxsYmFjaygpO1xuICAgIH0sIFtdKTtcbiAgICAvLyBUaGVyZSBhcmUgYSBjb3VwbGUgcGxhY2VzIHdoZXJlIHdlJ2QgbGlrZSB0byB1c2Ugb3VyIGluaXRpYWxcbiAgICAvLyB2YWx1ZSBpbiBwbGFjZSBvZiBoYXZpbmcgbm8gdmFsdWUgYXQgYWxsIHlldC5cbiAgICAvLyBUaGlzIGlzIHRoZSBzaGFyZWQgY29kZSBmb3IgdGhhdCwgdXNlZCBvbiBtb3VudCBhbmQgd2hlbmV2ZXJcbiAgICAvLyBnZXRWYWx1ZSBpcyBjYWxsZWQuXG4gICAgY29uc3QgdHJ5RW5zdXJlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCAmJiBnZXRJbml0aWFsVmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBpbml0aWFsVmFsdWU7XG4gICAgICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/Lihpbml0aWFsVmFsdWUsIHVuZGVmaW5lZCkgPz8gdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgIC8vIEV4Y2VwdGlvbnMgYXJlIGludGVudGlvbmFsIHRvIGFsbG93IGJhaWxvdXQgKHdpdGhvdXQgZXhwb3NpbmcgdGhlIFVuc2V0IHN5bWJvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFsgLyogZ2V0SW5pdGlhbFZhbHVlIGFuZCBvbkNoYW5nZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgKi9dKTtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKHdhcm5pbmdSZWYuY3VycmVudClcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkR1cmluZyBvbkNoYW5nZSwgcHJlZmVyIHVzaW5nIHRoZSAodmFsdWUsIHByZXZWYWx1ZSkgYXJndW1lbnRzIGluc3RlYWQgb2YgZ2V0VmFsdWUgLS0gaXQncyBhbWJpZ3VvdXMgYXMgdG8gaWYgeW91J3JlIGFza2luZyBmb3IgdGhlIG9sZCBvciBuZXcgdmFsdWUgYXQgdGhpcyBwb2ludCBpbiB0aW1lIGZvciB0aGlzIGNvbXBvbmVudC5cIik7XG4gICAgICAgIC8vIFRoZSBmaXJzdCB0aW1lIHdlIGNhbGwgZ2V0VmFsdWUsIGlmIHdlIGhhdmVuJ3QgYmVlbiBnaXZlbiBhIHZhbHVlIHlldCxcbiAgICAgICAgLy8gKGFuZCB3ZSB3ZXJlIGdpdmVuIGFuIGluaXRpYWwgdmFsdWUgdG8gdXNlKVxuICAgICAgICAvLyByZXR1cm4gdGhlIGluaXRpYWwgdmFsdWUgaW5zdGVhZCBvZiBub3RoaW5nLlxuICAgICAgICBpZiAodmFsdWVSZWYuY3VycmVudCA9PT0gVW5zZXQpXG4gICAgICAgICAgICB0cnlFbnN1cmVWYWx1ZSgpO1xuICAgICAgICByZXR1cm4gKHZhbHVlUmVmLmN1cnJlbnQgPT09IFVuc2V0ID8gdW5kZWZpbmVkIDogdmFsdWVSZWYuY3VycmVudCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSd2ZSBydW4gb3VyIGVmZmVjdCBhdCBsZWFzdCBvbmNlIG9uIG1vdW50LlxuICAgICAgICAvLyAoSWYgd2UgaGF2ZSBhbiBpbml0aWFsIHZhbHVlLCBvZiBjb3Vyc2UpXG4gICAgICAgIHRyeUVuc3VyZVZhbHVlKCk7XG4gICAgfSwgW10pO1xuICAgIC8vIFRoZSBhY3R1YWwgY29kZSB0aGUgdXNlciBjYWxscyB0byAocG9zc2libHkpIHJ1biBhIG5ldyBlZmZlY3QuXG4gICAgY29uc3Qgc2V0VmFsdWUgPSB1c2VDYWxsYmFjaygoYXJnKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZXZEZXAgPSB2YWx1ZVJlZi5jdXJyZW50ID09PSBVbnNldCA/IHVuZGVmaW5lZCA6IGdldFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGRlcCA9IGFyZyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gYXJnKHByZXZEZXApIDogYXJnO1xuICAgICAgICBpZiAoZGVwICE9PSB2YWx1ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAvLyBJbmRpY2F0ZSB0byB0aGUgdXNlciB0aGF0IHRoZXkgc2hvdWxkbid0IGNhbGwgZ2V0VmFsdWUgZHVyaW5nIG9uQ2hhbmdlXG4gICAgICAgICAgICB3YXJuaW5nUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQ2FsbCBhbnkgcmVnaXN0ZXJkIGNsZWFudXAgZnVuY3Rpb25cbiAgICAgICAgICAgIG9uU2hvdWxkQ2xlYW5VcCgpO1xuICAgICAgICAgICAgY2xlYW51cENhbGxiYWNrUmVmLmN1cnJlbnQgPSAob25DaGFuZ2U/LihkZXAsIHByZXZEZXApID8/IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGVwO1xuICAgICAgICAgICAgLy8gQWxsb3cgdGhlIHVzZXIgdG8gbm9ybWFsbHkgY2FsbCBnZXRWYWx1ZSBhZ2FpblxuICAgICAgICAgICAgd2FybmluZ1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuY29uc3QgVW5zZXQgPSBTeW1ib2woKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1wYXNzaXZlLXN0YXRlLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSBcInByZWFjdFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZENoaWxkcmVuKGxoc1Byb3BzLCByaHNQcm9wcykge1xuICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5jaGlsZHJlbjtcbiAgICBjb25zdCByaHMgPSByaHNQcm9wcz8uY2hpbGRyZW47XG4gICAgaWYgKGxocyA9PSBudWxsICYmIHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByaHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJocyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcmV0ID0gY3JlYXRlRWxlbWVudChGcmFnbWVudCwge30sIGxocywgcmhzKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtbWVyZ2VkLWNoaWxkcmVuLmpzLm1hcCIsImZ1bmN0aW9uIHRvVmFsKG1peCkge1xuXHR2YXIgaywgeSwgc3RyPScnO1xuXG5cdGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgbWl4ID09PSAnbnVtYmVyJykge1xuXHRcdHN0ciArPSBtaXg7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1peCA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShtaXgpKSB7XG5cdFx0XHRmb3IgKGs9MDsgayA8IG1peC5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRpZiAobWl4W2tdKSB7XG5cdFx0XHRcdFx0aWYgKHkgPSB0b1ZhbChtaXhba10pKSB7XG5cdFx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdFx0c3RyICs9IHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoayBpbiBtaXgpIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdHN0ciAmJiAoc3RyICs9ICcgJyk7XG5cdFx0XHRcdFx0c3RyICs9IGs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG5cdHZhciBpPTAsIHRtcCwgeCwgc3RyPScnO1xuXHR3aGlsZSAoaSA8IGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRpZiAodG1wID0gYXJndW1lbnRzW2krK10pIHtcblx0XHRcdGlmICh4ID0gdG9WYWwodG1wKSkge1xuXHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRzdHIgKz0geFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gc3RyO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbi8qKlxuICogR2l2ZW4gdHdvIHNldHMgb2YgcHJvcHMsIG1lcmdlcyB0aGVpciBgY2xhc3NgIGFuZCBgY2xhc3NOYW1lYCBwcm9wZXJ0aWVzLlxuICogRHVwbGljYXRlIGNsYXNzZXMgYXJlIHJlbW92ZWQgKG9yZGVyIGRvZXNuJ3QgbWF0dGVyIGFueXdheSkuXG4gKlxuICogQHBhcmFtIGxocyBDbGFzc2VzIG9mIHRoZSBmaXJzdCBjb21wb25lbnRcbiAqIEBwYXJhbSByaHMgQ2xhc3NlcyBvZiB0aGUgc2Vjb25kIGNvbXBvbmVudFxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xuICAgIC8vIGEgaG9vaywgYnV0IGFzIGl0IHVzZXMgbm8gb3RoZXIgaG9va3MgaXQgdGVjaG5pY2FsbHkgaXNuJ3Qgb25lLlxuICAgIHJldHVybiBtZXJnZUNsYXNzZXMobGhzLCByaHMpO1xufVxuZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKGxocywgcmhzKSB7XG4gICAgY29uc3QgbGhzQ2xhc3MgPSBsaHM/LmNsYXNzO1xuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xuICAgIGNvbnN0IHJoc0NsYXNzID0gcmhzPy5jbGFzcztcbiAgICBjb25zdCByaHNDbGFzc05hbWUgPSByaHM/LmNsYXNzTmFtZTtcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xuICAgICAgICBsZXQgbGhzQ2xhc3NlcyA9IGNsc3gobGhzQ2xhc3MsIGxoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgcmhzQ2xhc3NlcyA9IGNsc3gocmhzQ2xhc3MsIHJoc0NsYXNzTmFtZSkuc3BsaXQoXCIgXCIpO1xuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYWxsQ2xhc3Nlcykuam9pbihcIiBcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGV0ZXN0KCkge1xuICAgIGNvbnN0IGMgPSBbXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHVuZGVmaW5lZCwge30pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7fSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogXCJzdHJpbmdcIiB9LCB7IGNsYXNzOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcbiAgICBdO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1swXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzFdLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGNbMl0uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgY1szXS5jb25jYXQoXCJcIik7XG4gICAgY1s0XS5jb25jYXQoXCJcIik7XG4gICAgY1s1XS5jb25jYXQoXCJcIik7XG4gICAgY1s2XS5jb25jYXQoXCJcIik7XG4gICAgY1s3XS5jb25jYXQoXCJcIik7XG4gICAgY1s4XS5jb25jYXQoXCJcIik7XG4gICAgY1s5XS5jb25jYXQoXCJcIik7XG4gICAgY1sxMF0uY29uY2F0KFwiXCIpO1xuICAgIGNbMTFdLmNvbmNhdChcIlwiKTtcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBjWzEzXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtY2xhc3Nlcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmZ1bmN0aW9uIHByb2Nlc3NSZWYoaW5zdGFuY2UsIHJlZikge1xuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRlYnVnZ2VyOyAvLyBJbnRlbnRpb25hbFxuICAgICAgICBjb25zb2xlLmFzc2VydChmYWxzZSwgXCJVbmtub3duIHJlZiB0eXBlIGZvdW5kIHRoYXQgd2FzIG5laXRoZXIgYSBSZWZDYWxsYmFjayBub3IgYSBSZWZPYmplY3RcIik7XG4gICAgfVxufVxuLyoqXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cbiAqIEBwYXJhbSBsaHNcbiAqIEBwYXJhbSByaHNcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRSZWZzKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XG4gICAgICAgIGNvbnN0IGxocyA9IGxoc1Byb3BzPy5yZWY7XG4gICAgICAgIGNvbnN0IHJocyA9IHJoc1Byb3BzPy5yZWY7XG4gICAgICAgIGxldCBjb21iaW5lZCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XG4gICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XG4gICAgICAgIH0sIFtsaHMsIHJoc10pO1xuICAgICAgICBpZiAobGhzID09IG51bGwgJiYgcmhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobGhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByaHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmhzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBsaHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLypcbmZ1bmN0aW9uIHR5cGV0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gICAgZnVuY3Rpb24gYWNjZXB0c1JlZihyZWY6IFJlZjxhbnk+KSB7IH1cbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XG5cbiAgICBjb25zdCBjID0gW1xuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHVuZGVmaW5lZCksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgdW5kZWZpbmVkKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHByb3BzKSxcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZjogdW5kZWZpbmVkIH0sIHsgcmVmIH0pLFxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoeyByZWYgfSwgeyByZWYgfSksXG4gICAgXSBhcyBjb25zdDtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGFjY2VwdHNSZWYoY1sxXSk7XG5cbiAgICBhY2NlcHRzT3B0aW9uYWxSZWYoY1syXSk7XG4gICAgYWNjZXB0c09wdGlvbmFsUmVmKGNbM10pO1xuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIFRPRE9cbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xuICAgIGFjY2VwdHNSZWYoY1s2XSk7XG4gICAgYWNjZXB0c1JlZihjWzddKTtcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xufVxuKi9cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCJmdW5jdGlvbiBzdHlsZVN0cmluZ1RvT2JqZWN0KHN0eWxlKSB7XG4gICAgLy8gVE9ETzogVGhpcyBzdWNrcyBEOlxuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoc3R5bGUuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpO1xufVxuLyoqXG4gKiBNZXJnZXMgdHdvIHN0eWxlIG9iamVjdHMsIHJldHVybmluZyB0aGUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSBzdHlsZSBUaGUgdXNlci1naXZlbiBzdHlsZSBwcm9wIGZvciB0aGlzIGNvbXBvbmVudFxuICogQHBhcmFtIG9iaiBUaGUgQ1NTIHByb3BlcnRpZXMgeW91IHdhbnQgYWRkZWQgdG8gdGhlIHVzZXItZ2l2ZW4gc3R5bGVcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFN0eWxlcyhsaHMsIHJocykge1xuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxuICAgIGlmICghbGhzPy5zdHlsZSAmJiAhcmhzPy5zdHlsZSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIGxocyAhPSB0eXBlb2YgcmhzKSB7XG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgIXJocz8uc3R5bGUpXG4gICAgICAgICAgICByZXR1cm4gbGhzLnN0eWxlO1xuICAgICAgICBpZiAoIWxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSlcbiAgICAgICAgICAgIHJldHVybiByaHMuc3R5bGU7XG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBzdHJpbmcgdHlwZSB0byBhbiBvYmplY3QgYmFnIHR5cGUgYW5kIHJ1biBpdCBhZ2Fpbi5cbiAgICAgICAgaWYgKGxocz8uc3R5bGUgJiYgcmhzPy5zdHlsZSkge1xuICAgICAgICAgICAgLy8gKHVzZU1lcmdlZFN0eWxlcyBpc24ndCBhIHRydWUgaG9vayAtLSB0aGlzIGlzbid0IGEgdmlvbGF0aW9uKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHM/LnN0eWxlID09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZU1lcmdlZFN0eWxlcyh7IHN0eWxlOiBzdHlsZVN0cmluZ1RvT2JqZWN0KGxocz8uc3R5bGUpIH0sIHJocyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJocz8uc3R5bGUgPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogc3R5bGVTdHJpbmdUb09iamVjdChyaHM/LnN0eWxlKSB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2dpYz8/P1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvLyBUaGV5J3JlIGJvdGggc3RyaW5ncywganVzdCBjb25jYXRlbmF0ZSB0aGVtLlxuICAgIGlmICh0eXBlb2YgbGhzPy5zdHlsZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBgJHtsaHMuc3R5bGV9OyR7cmhzPy5zdHlsZSA/PyBcIlwifWA7XG4gICAgfVxuICAgIC8vIFRoZXkncmUgYm90aCBvYmplY3RzLCBqdXN0IG1lcmdlIHRoZW0uXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxuICAgICAgICAuLi4ocmhzPy5zdHlsZSA/PyB7fSlcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2hpbGRyZW4gfSBmcm9tIFwiLi91c2UtbWVyZ2VkLWNoaWxkcmVuXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRDbGFzc2VzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1jbGFzc2VzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRTdHlsZXMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXN0eWxlc1wiO1xubGV0IGxvZyA9IChzdHIpID0+IHsgZGVidWdnZXI7IGNvbnNvbGUud2FybihgVHJ5aW5nIHRvIG1lcmdlIHR3byBwcm9wcyB3aXRoIHRoZSBzYW1lIG5hbWU6ICR7c3RyfWApOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxvZ2dpbmdQcm9wQ29uZmxpY3RzKGxvZzIpIHtcbiAgICBsb2cgPSBsb2cyO1xufVxuLyoqXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZW0gYW5kIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxuICogQHBhcmFtIGxoczJcbiAqIEBwYXJhbSByaHMyXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUHJvcHMoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XG4gICAgICAgIC8vIEZpcnN0LCBwdXQgaW4gYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gcmVhc29uIGFib3V0XG4gICAgICAgIC8vIGFuZCBhbGwgbGhzIHByb3BzLiBXZSdyZSBnb2luZyB0byBtZXJnZSBpbiByaHMganVzdCBhZnRlci5cbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogbGhzQ2hpbGRyZW4sIGNsYXNzOiBsaHNDbGFzcywgY2xhc3NOYW1lOiBsaHNDbGFzc05hbWUsIHN0eWxlOiBsaHNTdHlsZSwgcmVmOiBsaHNSZWYsIC4uLmxocyB9ID0gbGhzMjtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbjogcmhzQ2hpbGRyZW4sIGNsYXNzOiByaHNDbGFzcywgY2xhc3NOYW1lOiByaHNDbGFzc05hbWUsIHN0eWxlOiByaHNTdHlsZSwgcmVmOiByaHNSZWYsIC4uLnJocyB9ID0gcmhzMjtcbiAgICAgICAgbGV0IHJldCA9IHtcbiAgICAgICAgICAgIC4uLmxocyxcbiAgICAgICAgICAgIHJlZjogdXNlTWVyZ2VkUmVmcygpKGxoczIsIHJoczIpLFxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdXNlTWVyZ2VkQ2xhc3NlcyhsaHMyLCByaHMyKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiB1c2VNZXJnZWRDaGlsZHJlbihsaHMyLCByaHMyKVxuICAgICAgICB9O1xuICAgICAgICBpZiAocmV0LnJlZiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5yZWY7XG4gICAgICAgIGlmIChyZXQuc3R5bGUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIGRlbGV0ZSByZXQuc3R5bGU7XG4gICAgICAgIGlmIChyZXQuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBkZWxldGUgcmV0LmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHJldC5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgZGVsZXRlIHJldC5jaGlsZHJlbjtcbiAgICAgICAgLy8gTm93LCBkbyAqZXZlcnl0aGluZyogZWxzZVxuICAgICAgICAvLyBNZXJnZSBldmVyeSByZW1haW5pbmcgZXhpc3RpbmcgZW50cnkgaW4gbGhzIHdpdGggd2hhdCB3ZSd2ZSBhbHJlYWR5IHB1dCBpbiByZXQuXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XG4gICAgICAgIGNvbnN0IHJoc0VudHJpZXMgPSBPYmplY3QuZW50cmllcyhyaHMpO1xuICAgICAgICBmb3IgKGNvbnN0IFtyaHNLZXksIHJoc1ZhbHVlXSBvZiByaHNFbnRyaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiIHx8IHR5cGVvZiByaHNWYWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhleSdyZSBib3RoIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBtZXJnZWQgKG9yIG9uZSdzIGEgZnVuY3Rpb24gYW5kIHRoZSBvdGhlcidzIG51bGwpLlxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZ1bmN0aW9ucyhsaHNWYWx1ZSwgcmhzVmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gbWVyZ2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVWguLi53ZSdyZSBoZXJlIGJlY2F1c2Ugb25lIG9mIHRoZW0ncyBudWxsLCByaWdodD9cbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyaHNWYWx1ZSA9PT0gbnVsbCAmJiBsaHNWYWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmhzVmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyaHNWYWx1ZSA9PSBsaHNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJIG1lYW4sIHRoZXkncmUgdGhlIHNhbWUgdmFsdWUgYXQgbGVhc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90IHJlYWxseSBpZGVhbCB0aG91Z2guXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBVZ2guXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vIGdvb2Qgc3RyYXRlZ2llcyBoZXJlLCBqdXN0IGxvZyBpdCBpZiByZXF1ZXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbG9nPy4oYENvdWxkIG5vdCBtZXJnZSBpbmNvbXBhdGlibGUgcHJvcCBcIiR7cmhzS2V5fVwiICh0eXBlOiAke3R5cGVvZiByaHNWYWx1ZX0sIHZhbHVlczogWyR7bGhzVmFsdWV9LCAke3Joc1ZhbHVlfV0pYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIG1lcmdlRnVuY3Rpb25zKGxocywgcmhzKSB7XG4gICAgaWYgKCFsaHMpXG4gICAgICAgIHJldHVybiByaHM7XG4gICAgaWYgKCFyaHMpXG4gICAgICAgIHJldHVybiBsaHM7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCBsdiA9IGxocyguLi5hcmdzKTtcbiAgICAgICAgbGV0IHJ2ID0gcmhzKC4uLmFyZ3MpO1xuICAgICAgICBpZiAobHYgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHJ2IGluc3RhbmNlb2YgUHJvbWlzZSlcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbbHYsIHJ2XSk7XG4gICAgfTtcbn1cbi8qXG5mdW5jdGlvbiB0ZXN0PFAgZXh0ZW5kcyBoLkpTWC5IVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50Pj4ocHJvcHM6IFApIHtcblxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcbiAgICBjb25zdCBpZDM6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDQ6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDY6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcbiAgICAvL2NvbnN0IGlkMjogWmlwU2luZ2xlPHN0cmluZyB8IHVuZGVmaW5lZCwgc3RyaW5nIHwgdW5kZWZpbmVkPiA9IHVuZGVmaW5lZDtcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XG5cbiAgICB0eXBlIE0xID0gR2VuZXJpY0dldDxQLCBcInN0eWxlXCIsIHN0cmluZz47XG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcbiAgICBjb25zdCBtMTogTTEgPSBcIlwiO1xuICAgIGNvbnN0IG0yOiBNMSA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG0zOiBNMSA9IDA7XG5cbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xuICAgIGNvbnN0IG01OiBNMiA9IHVuZGVmaW5lZDtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xuICAgIGNvbnN0IG02OiBNMiA9IDA7XG5cbiAgICBjb25zdCBwMTogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHsgaWQ6IHN0cmluZyB9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHsgaWQ6IFwic3RyaW5nXCIgfSk7XG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xuICAgIGNvbnN0IHAzOiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA0OiBNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCB7fSwge30+ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwge30pO1xuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xuICAgIGNvbnN0IHA2ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogdW5kZWZpbmVkIH0pO1xuICAgIGNvbnN0IHA3ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgeyBpZDogXCJzdHJpbmdcIiB9KTtcblxuXG4gICAgcDEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwMy5pZD8uY29uY2F0KFwiXCIpO1xuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICBwNC5pZD8uY29uY2F0KFwiXCIpO1xuXG5cbiAgICBwNS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHA2LmlkPy5jb25jYXQoXCJcIik7XG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcblxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHA2LmlkLmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXG4gICAgcDcuaWQuY29uY2F0KFwiXCIpO1xuXG5cbiAgICBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocDUuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihwNS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocDYuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHA3LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICAvLyBNYWtlIHN1cmUgaXQgd29ya3MgcmVjdXJzaXZlbHlcbiAgICBjb25zdCByMWEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwMSk7XG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xuICAgIGNvbnN0IHIyYSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHAyKTtcbiAgICBjb25zdCByMmIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwMik7XG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xuICAgIGNvbnN0IHIzYiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHAzKTtcbiAgICBjb25zdCByNGEgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNCk7XG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xuICAgIGNvbnN0IHI1YSA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHA1KTtcbiAgICBjb25zdCByNWIgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCBwNSk7XG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xuICAgIGNvbnN0IHI2YiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHA2KTtcbiAgICBjb25zdCByN2EgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCBwNyk7XG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xuXG5cbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMWIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmEuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcbiAgICByM2EuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBjYW4ndCBiZSBhbnl0aGluZyBidXQgdW5kZWZpbmVkXG4gICAgcjRhLmlkPy5jb25jYXQoXCJcIik7XG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XG5cblxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI1Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3YS5pZD8uY29uY2F0KFwiXCIpO1xuICAgIHI3Yi5pZD8uY29uY2F0KFwiXCIpO1xuXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI1Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI2Yi5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3YS5pZC5jb25jYXQoXCJcIik7XG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XG5cblxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjVhLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI1YS5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjZhLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyNmEuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cblxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XG4gICAgZWxzZSBpZiAocjZiLmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cbiAgICBlbHNlIHtcbiAgICAgICAgYWNjZXB0c05ldmVyKHI2Yi5hbGxvd0Z1bGxTY3JlZW4pO1xuICAgIH1cblxuXG4gICAgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxuICAgIGVsc2Uge1xuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XG4gICAgfVxuXG5cbiAgICBpZiAocjdiLmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XG4gICAgZWxzZSB7XG4gICAgICAgIGFjY2VwdHNOZXZlcihyN2IuYWxsb3dGdWxsU2NyZWVuKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cbiovIFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1wcm9wcy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XG5mdW5jdGlvbiByZXR1cm5OdWxsKCkgeyByZXR1cm4gbnVsbDsgfVxuLyoqXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxuICogKlRoaXMgaG9vayBpdHNlbGYgcmV0dXJucyBhIGhvb2sqLS11c2VSZWZFbGVtZW50UHJvcHMgbW9kaWZpZXMgdGhlIHByb3BzIHRoYXQgeW91IHdlcmUgZ29pbmcgdG8gcGFzcyB0byBhbiBIVE1MRWxlbWVudCxcbiAqIGFkZGluZyBhIFJlZkNhbGxiYWNrIGFuZCBtZXJnaW5nIGl0IHdpdGggYW55IGV4aXN0aW5nIHJlZiB0aGF0IGV4aXN0ZWQgb24gdGhlIHByb3BzLlxuICpcbiAqIERvbid0IGZvcmdldCB0byBwcm92aWRlIHRoZSBFbGVtZW50IGFzIHRoZSB0eXBlIGFyZ3VtZW50IVxuICpcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWZFbGVtZW50KGFyZ3MpIHtcbiAgICBjb25zdCBvbkVsZW1lbnRDaGFuZ2UgPSBhcmdzPy5vbkVsZW1lbnRDaGFuZ2U7XG4gICAgLy8gTGV0IHVzIHN0b3JlIHRoZSBhY3R1YWwgKHJlZmVyZW5jZSB0bykgdGhlIGVsZW1lbnQgd2UgY2FwdHVyZVxuICAgIGNvbnN0IFtnZXRFbGVtZW50LCBzZXRFbGVtZW50XSA9IHVzZVBhc3NpdmVTdGF0ZShvbkVsZW1lbnRDaGFuZ2UsIHJldHVybk51bGwpO1xuICAgIC8vIENyZWF0ZSBhIFJlZkNhbGxiYWNrIHRoYXQncyBmaXJlZCB3aGVuIG1vdW50ZWQgXG4gICAgLy8gYW5kIHRoYXQgbm90aWZpZXMgdXMgb2Ygb3VyIGVsZW1lbnQgd2hlbiB3ZSBoYXZlIGl0XG4gICAgY29uc3QgbXlSZWYgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZSlcbiAgICAgICAgICAgIHNldEVsZW1lbnQoKCkgPT4gZSk7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHVzZVJlZkVsZW1lbnRQcm9wcyA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlTWVyZ2VkUHJvcHMoKSh7IHJlZjogbXlSZWYgfSwgcHJvcHMpLCBbXSk7XG4gICAgLy8gUmV0dXJuIGJvdGggdGhlIGVsZW1lbnQgYW5kIHRoZSBob29rIHRoYXQgbW9kaWZpZXMgXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxuICAgIHJldHVybiB7XG4gICAgICAgIHVzZVJlZkVsZW1lbnRQcm9wcyxcbiAgICAgICAgZ2V0RWxlbWVudFxuICAgIH07XG59XG5mdW5jdGlvbiB0ZXN0KCkge1xuICAgIGZ1bmN0aW9uIGZvbyhwcm9wcykge1xuICAgICAgICBjb25zdCBbZWxlbWVudCwgc2V0RWxlbWVudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAgICAgY29uc3QgeyB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoeyBvbkVsZW1lbnRDaGFuZ2U6IHNldEVsZW1lbnQgfSk7XG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcbiAgICAgICAgaWYgKHAxLnN0eWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcDEuc3R5bGU/LmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcIi4vdXNlLXJlZi1lbGVtZW50XCI7XG5pbXBvcnQgeyB1c2VFbnN1cmVTdGFiaWxpdHksIHVzZVBhc3NpdmVTdGF0ZSB9IGZyb20gXCIuL3VzZS1wYXNzaXZlLXN0YXRlXCI7XG5mdW5jdGlvbiBleHRyYWN0RWxlbWVudFNpemUoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJldHJpZXZlIHRoZSBzaXplIG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgbm90IGJlZW4gcmVuZGVyZWQgeWV0XCIpO1xuICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcbiAgICByZXR1cm4gKHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9KTtcbn1cbmZ1bmN0aW9uIHJldHVybk51bGwoKSB7IHJldHVybiBudWxsOyB9XG5leHBvcnQgZnVuY3Rpb24gdXNlRWxlbWVudFNpemUoeyBnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UgfSkge1xuICAgIHVzZUVuc3VyZVN0YWJpbGl0eShnZXRPYnNlcnZlQm94LCBvblNpemVDaGFuZ2UpO1xuICAgIGNvbnN0IFtnZXRTaXplLCBzZXRTaXplXSA9IHVzZVBhc3NpdmVTdGF0ZShvblNpemVDaGFuZ2UsIHJldHVybk51bGwpO1xuICAgIGNvbnN0IGN1cnJlbnRPYnNlcnZlQm94ID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgbmVlZEFOZXdPYnNlcnZlciA9IHVzZUNhbGxiYWNrKChlbGVtZW50LCBvYnNlcnZlQm94KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2xpZW50V2lkdGgsIHNjcm9sbFdpZHRoLCBvZmZzZXRXaWR0aCwgY2xpZW50SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIG9mZnNldEhlaWdodCwgY2xpZW50TGVmdCwgc2Nyb2xsTGVmdCwgb2Zmc2V0TGVmdCwgY2xpZW50VG9wLCBzY3JvbGxUb3AsIG9mZnNldFRvcCB9ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZSh7IGNsaWVudFdpZHRoLCBzY3JvbGxXaWR0aCwgb2Zmc2V0V2lkdGgsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0LCBvZmZzZXRIZWlnaHQsIGNsaWVudExlZnQsIHNjcm9sbExlZnQsIG9mZnNldExlZnQsIGNsaWVudFRvcCwgc2Nyb2xsVG9wLCBvZmZzZXRUb3AgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cgJiYgKFwiUmVzaXplT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHsgaGFuZGxlVXBkYXRlKCk7IH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCwgeyBib3g6IG9ic2VydmVCb3ggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlVXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7IG9uRWxlbWVudENoYW5nZTogdXNlQ2FsbGJhY2soKGUpID0+IG5lZWRBTmV3T2JzZXJ2ZXIoZSwgZ2V0T2JzZXJ2ZUJveD8uKCkpLCBbXSkgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGdldE9ic2VydmVCb3gpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50T2JzZXJ2ZUJveC5jdXJyZW50ICE9PSBnZXRPYnNlcnZlQm94KCkpXG4gICAgICAgICAgICAgICAgbmVlZEFOZXdPYnNlcnZlcihnZXRFbGVtZW50KCksIGdldE9ic2VydmVCb3goKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICB1c2VFbGVtZW50U2l6ZVByb3BzOiB1c2VSZWZFbGVtZW50UHJvcHNcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWVsZW1lbnQtc2l6ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwiLi91c2UtcmVmLWVsZW1lbnRcIjtcbmltcG9ydCB7IHVzZUVsZW1lbnRTaXplIH0gZnJvbSBcIi4vdXNlLWVsZW1lbnQtc2l6ZVwiO1xuaW1wb3J0IHsgdXNlRW5zdXJlU3RhYmlsaXR5LCB1c2VQYXNzaXZlU3RhdGUgfSBmcm9tIFwiLi91c2UtcGFzc2l2ZS1zdGF0ZVwiO1xuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gKHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKSk7XG59XG4vKipcbiAqIEluc3BlY3RzIHRoZSBlbGVtZW50J3Mgc3R5bGUgYW5kIGRldGVybWluZXMgdGhlIGxvZ2ljYWwgZGlyZWN0aW9uIHRoYXQgdGV4dCBmbG93cy5cbiAqXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxuICogQnV0IGB0cmFuc2Zvcm1gLCBgY2xpcGAsIGV0Yy4gZG9uJ3QuXG4gKlxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLyNsb2dpY2FsLXRvLXBoeXNpY2FsXG4gKlxuICogQHJldHVybnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gKiAqIGBnZXRMb2dpY2FsRGlyZWN0aW9uYDogcmV0cmlldmVzIGEgYExvZ2ljYWxEaXJlY3Rpb25JbmZvYCByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGVsZW1lbnQuIChGdW5jdGlvbiBpcyBjb25zdGFudCBiZXR3ZWVuIHJlbmRlcnMpXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxuICogKiBgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uYDogQmFzZWQgb24gdGhlIGN1cnJlbnQgZGlyZWN0aW9uLCBjb252ZXJ0cyBcImhvcml6b250YWxcIiBvciBcInZlcnRpY2FsXCIgdG8gXCJpbmxpbmVcIiBvciBcImJsb2NrXCIuXG4gKiAqIGBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uYDogIEJhc2VkIG9uIHRoZSBjdXJyZW50IGRpcmVjdGlvbiwgY29udmVydHMgXCJpbmxpbmVcIiBvciBcImJsb2NrXCIgdG8gXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSB9KSB7XG4gICAgdXNlRW5zdXJlU3RhYmlsaXR5KG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSk7XG4gICAgY29uc3QgW2dldENvbXB1dGVkU3R5bGVzLCBzZXRDb21wdXRlZFN0eWxlc10gPSB1c2VQYXNzaXZlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgeyBnZXRFbGVtZW50LCB1c2VSZWZFbGVtZW50UHJvcHMgfSA9IHVzZVJlZkVsZW1lbnQoe1xuICAgICAgICBvbkVsZW1lbnRDaGFuZ2U6IHVzZUNhbGxiYWNrKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHNldENvbXB1dGVkU3R5bGVzKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG4gICAgfSk7XG4gICAgLy8gVE9ETzogVGhlcmUncyBubyB3YXkgdG8gcmVmcmVzaCB3aGljaCB3cml0aW5nIG1vZGUgd2UgaGF2ZSBvbmNlIG1vdW50ZWQuXG4gICAgLy8gICBBLiBUaGVyZSdzIG5vIHdheSB0byB3YXRjaCBmb3IgQ1NTIHN0eWxlIGNoYW5nZXNcbiAgICAvLyAgIEIuIENhbGxpbmcgZ2V0Q29tcHV0ZWRTdHlsZSBhZnRlciBldmVyeSByZW5kZXIgZm9yIGV2ZXJ5IGVsZW1lbnQgZ2V0cyBleHBlbnNpdmUgZmFzdCBhbmRcbiAgICAvLyAgIEMuIElzIG5vdCBuZWNlc3NhcnkgZm9yIG1vc3QgdXNlIGNhc2VzIHRoYXQgd2lsbCBuZXZlciBzd2l0Y2ggd3JpdGluZy1tb2RlIHdpdGhpbiBhIHNpbmdsZSBjb21wb25lbnRcbiAgICAvLyAgICAgIChUaG9zZSB0aGF0IGRvIHdpbGwgbmVlZCB0byBtb3VudCBhbmQgdW5tb3VudCB0aGUgY29tcG9uZW50IHRoYXQgdXNlcyBpdClcbiAgICAvL1xuICAgIC8vIEFzIGEgc29sdXRpb24sIGhlcmUncyBhIGNoZWFwIHdvcmthcm91bmQgdGhhdCBjaGVja3Mgd2hlbiB0aGUgZWxlbWVudCdzIHNpemUgaGFzIGNoYW5nZWQsXG4gICAgLy8gYW5kIGlmIHNvLCB0ZXN0cyBpZiB0aGUgd3JpdGluZyBtb2RlIGhhcyBjaGFuZ2VkIHRvby5cbiAgICAvL1xuICAgIC8vIFRoaXMgd2lsbCB3b3JrIGZvciBhdCBsZWFzdCBzb21lIG51bWJlciBvZiBjYXNlcywgYnV0IGEgYmV0dGVyIHNvbHV0aW9uIGlzIHN0aWxsIG5lZWRlZC5cbiAgICBjb25zdCB7IHVzZUVsZW1lbnRTaXplUHJvcHMgfSA9IHVzZUVsZW1lbnRTaXplKHsgb25TaXplQ2hhbmdlOiB1c2VDYWxsYmFjayhfID0+IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZT8uKGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCkpLCBbXSkgfSk7XG4gICAgY29uc3QgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZXMoKTtcbiAgICAgICAgaWYgKGNvbXB1dGVkU3R5bGVzKSB7XG4gICAgICAgICAgICBsZXQgdyA9IGNvbXB1dGVkU3R5bGVzLndyaXRpbmdNb2RlO1xuICAgICAgICAgICAgbGV0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XG4gICAgICAgICAgICBsZXQgdCA9IGNvbXB1dGVkU3R5bGVzLnRleHRPcmllbnRhdGlvbjtcbiAgICAgICAgICAgIGlmICh0ID09IFwidXByaWdodFwiKVxuICAgICAgICAgICAgICAgIGQgPSBcImx0clwiO1xuICAgICAgICAgICAgcmV0dXJuICh7IC4uLldyaXRpbmdNb2Rlc1t3IHx8IFwiaG9yaXpvbnRhbC10YlwiXVtkIHx8IFwibHRyXCJdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIFtdKTtcbiAgICAvL2NvbnN0IFtnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbywgc2V0TG9naWNhbERpcmVjdGlvbkluZm9dID0gdXNlUGFzc2l2ZVN0YXRlPExvZ2ljYWxEaXJlY3Rpb25JbmZvPihvbkxvZ2ljYWxEaXJlY3Rpb25DaGFuZ2UpO1xuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBlbGVtZW50T3JpZW50YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gXCJpbmxpbmVcIjtcbiAgICAgICAgcmV0dXJuIFwiYmxvY2tcIjtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgY2FzZSBcImJsb2NrLXN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1bKGRpcmVjdGlvbj8uYmxvY2tEaXJlY3Rpb24gPz8gXCJ0dGJcIilbMF1dO1xuICAgICAgICAgICAgY2FzZSBcImJsb2NrLWVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBNWyhkaXJlY3Rpb24/LmJsb2NrRGlyZWN0aW9uID8/IFwidHRiXCIpWzJdXTtcbiAgICAgICAgICAgIGNhc2UgXCJpbmxpbmUtc3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMF1dO1xuICAgICAgICAgICAgY2FzZSBcImlubGluZS1lbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gTVsoZGlyZWN0aW9uPy5pbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIilbMl1dO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxTaWRlID0gdXNlQ2FsbGJhY2soKHNpZGUsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBkaXJlY3Rpb24gPz89IGdldExvZ2ljYWxEaXJlY3Rpb25JbmZvKCk7XG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwidHRiXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJidHRcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImx0clwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJydGxcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5ibG9ja0RpcmVjdGlvbiA9PT0gXCJ0dGJcIiA/IFwiYmxvY2stc3RhcnRcIiA6IFwiYmxvY2stZW5kXCI7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmJsb2NrRGlyZWN0aW9uID09PSBcImJ0dFwiID8gXCJibG9jay1zdGFydFwiIDogXCJibG9jay1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uLmlubGluZURpcmVjdGlvbiA9PT0gXCJsdHJcIiA/IFwiaW5saW5lLXN0YXJ0XCIgOiBcImlubGluZS1lbmRcIjtcbiAgICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbi5pbmxpbmVEaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcImlubGluZS1zdGFydFwiIDogXCJpbmxpbmUtZW5kXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIFwiaW5saW5lLXN0YXJ0XCI7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRUb1BoeXNpY2FsT3JpZW50YXRpb24gPSB1c2VDYWxsYmFjaygoZWxlbWVudE9yaWVudGF0aW9uLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZGlyZWN0aW9uID8/PSBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbygpO1xuICAgICAgICBpZiAoZWxlbWVudE9yaWVudGF0aW9uID09IFwiaW5saW5lXCIpIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcbiAgICAgICAgICAgIHJldHVybiBcInZlcnRpY2FsXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5ibG9ja09yaWVudGF0aW9uID09IFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGNvbnZlcnRFbGVtZW50U2l6ZSA9IHVzZUNhbGxiYWNrKChlbGVtZW50U2l6ZSwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbkluZm8oKTtcbiAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgeyBpbmxpbmVTaXplLCBibG9ja1NpemUsIGlubGluZURpcmVjdGlvbiwgYmxvY2tEaXJlY3Rpb24gfSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICAgIC8vIFNpemUgaXMgcmVsYXRpdmVseSBzaW1wbGVcbiAgICAgICAgICAgIGxldCBjbGllbnRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xuICAgICAgICAgICAgbGV0IHNjcm9sbEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIHJlcXVpcmVzIHVzIHRvIHNvbWV0aW1lcyB1c2Ugb25lIHByb3BlcnR5IChsaWtlIGBsZWZ0YClcbiAgICAgICAgICAgIC8vIG9yIHNvbWV0aW1lcyB0d28gKGxpa2UgYGxlZnRgICsgYHdpZHRoYClcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBoeXNpY2FsTGVmdFRvcChkaXIpIHsgaWYgKGRpciA9PT0gXCJsdHJcIiB8fCBkaXIgPT0gXCJydGxcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCI7IHJldHVybiBcInRvcFwiOyB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGRpcikgeyBpZiAoZGlyID09PSBcInJ0bFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBcIndpZHRoXCI7IGlmIChkaXIgPT09IFwiYnR0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaGVpZ2h0XCI7IHJldHVybiBudWxsOyB9XG4gICAgICAgICAgICBjb25zdCBmMSA9IGdldFBoeXNpY2FsTGVmdFRvcChpbmxpbmVEaXJlY3Rpb24pO1xuICAgICAgICAgICAgY29uc3QgZjIgPSBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGlubGluZURpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmMyA9IGdldFBoeXNpY2FsTGVmdFRvcChibG9ja0RpcmVjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBmNCA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oYmxvY2tEaXJlY3Rpb24pO1xuICAgICAgICAgICAgbGV0IGNsaWVudElubGluZUluc2V0ID0gZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjIpfWBdKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxJbmxpbmVJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjEpfWBdICsgKCFmMiA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYyKX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAoZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMSl9YF0gKyAoIWYyID8gMCA6IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjIpfWBdKSk7XG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGY0KX1gXSk7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoZjMpfWBdID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IChlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmNCl9YF0pKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVTaXplLFxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZVNpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrU2l6ZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja1NpemUsXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsSW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SW5saW5lSW5zZXQsXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcbiAgICAgICAgICAgICAgICBzY3JvbGxCbG9ja0luc2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEJsb2NrSW5zZXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHM6IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gdXNlUmVmRWxlbWVudFByb3BzKHVzZUVsZW1lbnRTaXplUHJvcHMocHJvcHMpKSwgW10pLFxuICAgICAgICBnZXRFbGVtZW50LFxuICAgICAgICBnZXRMb2dpY2FsRGlyZWN0aW9uSW5mbyxcbiAgICAgICAgY29udmVydFRvTG9naWNhbFNpemU6IGNvbnZlcnRFbGVtZW50U2l6ZSxcbiAgICAgICAgY29udmVydFRvTG9naWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uLFxuICAgICAgICBjb252ZXJ0VG9Mb2dpY2FsU2lkZSxcbiAgICAgICAgY29udmVydFRvUGh5c2ljYWxTaWRlXG4gICAgfTtcbn1cbi8vIEhlbHBlciBmb3IgZXh0cmFjdGluZyBpbmZvIGZyb20gXCJsdHJcIiwgXCJ0dGJcIiwgZXRjLlxuY29uc3QgTSA9IHtcbiAgICB0OiBcInRvcFwiLFxuICAgIGI6IFwiYm90dG9tXCIsXG4gICAgbDogXCJsZWZ0XCIsXG4gICAgcjogXCJyaWdodFwiXG59O1xuO1xuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xuICAgIGlubGluZURpcmVjdGlvbjogXCJsdHJcIixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJ0dGJcIixcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIGlubGluZVNpemU6IFwid2lkdGhcIixcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImx0clwiLFxuICAgIG92ZXJVbmRlckRpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYlJ0bCA9IHtcbiAgICAuLi5Ib3Jpem9udGFsVGJMdHIsXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxufTtcbmNvbnN0IFZlcnRpY2FsUmxMdHIgPSB7XG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxuICAgIGJsb2NrRGlyZWN0aW9uOiBcInJ0bFwiLFxuICAgIGlubGluZU9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgaW5saW5lU2l6ZTogXCJoZWlnaHRcIixcbiAgICBibG9ja1NpemU6IFwid2lkdGhcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcInJ0bFwiXG59O1xuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIlxufTtcbmNvbnN0IFNpZGV3YXlzUmxMdHIgPSB7IC4uLlZlcnRpY2FsUmxMdHIgfTtcbmNvbnN0IFNpZGV3YXlzUmxSdGwgPSB7IC4uLlZlcnRpY2FsUmxSdGwgfTtcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XG4gICAgLi4uVmVydGljYWxSbEx0cixcbiAgICBibG9ja0RpcmVjdGlvbjogXCJsdHJcIixcbn07XG5jb25zdCBWZXJ0aWNhbExyUnRsID0ge1xuICAgIC4uLlZlcnRpY2FsUmxSdGwsXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXG59O1xuY29uc3QgU2lkZXdheXNMdEx0ciA9IHtcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJidHRcIixcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwiYnR0XCIsXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXG59O1xuY29uc3QgU2lkZXdheXNMdFJ0bCA9IHtcbiAgICAuLi5TaWRld2F5c0x0THRyLFxuICAgIGlubGluZURpcmVjdGlvbjogXCJ0dGJcIlxufTtcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcbiAgICBsdHI6IEhvcml6b250YWxUYkx0cixcbiAgICBydGw6IEhvcml6b250YWxUYlJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsUmwgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbFJsTHRyLFxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxufTtcbmNvbnN0IFZlcnRpY2FsTHIgPSB7XG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxuICAgIHJ0bDogVmVydGljYWxMclJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XG4gICAgbHRyOiBTaWRld2F5c1JsTHRyLFxuICAgIHJ0bDogU2lkZXdheXNSbFJ0bFxufTtcbmNvbnN0IFNpZGV3YXlzTHIgPSB7XG4gICAgbHRyOiBTaWRld2F5c0x0THRyLFxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxufTtcbmNvbnN0IFdyaXRpbmdNb2RlcyA9IHtcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxuICAgIFwidmVydGljYWwtbHJcIjogVmVydGljYWxMcixcbiAgICBcInZlcnRpY2FsLXJsXCI6IFZlcnRpY2FsUmwsXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxuICAgIFwic2lkZXdheXMtcmxcIjogU2lkZXdheXNSbFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tSWQgfSBmcm9tIFwiLi91c2UtcmFuZG9tLWlkXCI7XG5jb25zdCBwcmV2aW91c0lucHV0cyA9IG5ldyBNYXAoKTtcbmNvbnN0IHRvUnVuID0gbmV3IE1hcCgpO1xuY29uc3QgY29tbWl0TmFtZSA9IChcIl9fY1wiIGluIG9wdGlvbnMgPyBcIl9fY1wiIDogXCJjb21taXRcIiBpbiBvcHRpb25zID8gXCJjb21taXRcIiA6IFwiX2NvbW1pdFwiIGluIG9wdGlvbnMgPyBcIl9jb21taXRcIiA6IFwiX19jXCIpO1xuLy8gVE9ETzogV2hldGhlciB0aGlzIGdvZXMgaW4gb3B0aW9ucy5kaWZmZWQgb3Igb3B0aW9ucy5fY29tbWl0XG4vLyBpcyBhIHBvc3Qtc3VzcGVuc2UgcXVlc3Rpb24uXG4vLyBSaWdodCBub3csIHVzaW5nIG9wdGlvbnMuX2NvbW1pdCBoYXMgdGhlIHByb2JsZW0gb2YgcnVubmluZ1xuLy8gKmFmdGVyKiByZWZzIGFyZSBhcHBsaWVkLCBidXQgd2UgbmVlZCB0byBjb21lIGJlZm9yZSBldmVuIHRoYXRcbi8vIHNvIGByZWY9e3NvbWVTdGFibGVGdW5jdGlvbn1gIHdvcmtzLlxuLy8gXG4vLyBBbHNvIGl0J3MgcHJpdmF0ZS5cbmNvbnN0IG9yaWdpbmFsQ29tbWl0ID0gb3B0aW9uc1tjb21taXROYW1lXTtcbmNvbnN0IG5ld0NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcbiAgICBmb3IgKGxldCBbaWQsIGVmZmVjdEluZm9dIG9mIHRvUnVuKSB7XG4gICAgICAgIGNvbnN0IG9sZElucHV0cyA9IHByZXZpb3VzSW5wdXRzLmdldChpZCk7XG4gICAgICAgIGlmIChhcmdzQ2hhbmdlZChvbGRJbnB1dHMsIGVmZmVjdEluZm8uaW5wdXRzKSkge1xuICAgICAgICAgICAgZWZmZWN0SW5mby5jbGVhbnVwPy4oKTtcbiAgICAgICAgICAgIGVmZmVjdEluZm8uY2xlYW51cCA9IGVmZmVjdEluZm8uZWZmZWN0KCk7XG4gICAgICAgICAgICBwcmV2aW91c0lucHV0cy5zZXQoaWQsIGVmZmVjdEluZm8uaW5wdXRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1J1bi5jbGVhcigpO1xuICAgIG9yaWdpbmFsQ29tbWl0Py4odm5vZGUsIGNvbW1pdFF1ZXVlKTtcbn07XG5vcHRpb25zW2NvbW1pdE5hbWVdID0gbmV3Q29tbWl0O1xuLyoqXG4gKiBTZW1pLXByaXZhdGUgZnVuY3Rpb24gdG8gYWxsb3cgc3RhYmxlIGNhbGxiYWNrcyBldmVuIHdpdGhpbiBgdXNlTGF5b3V0RWZmZWN0YCBhbmQgcmVmIGFzc2lnbm1lbnQuXG4gKlxuICogRXZlcnkgcmVuZGVyLCB3ZSBzZW5kIHRoZSBhcmd1bWVudHMgdG8gYmUgZXZhbHVhdGVkIGFmdGVyIGRpZmZpbmcgaGFzIGNvbXBsZXRlZCxcbiAqIHdoaWNoIGhhcHBlbnMgYmVmb3JlLlxuICpcbiAqIEBwYXJhbSBlZmZlY3RcbiAqIEBwYXJhbSBpbnB1dHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUJlZm9yZUxheW91dEVmZmVjdChlZmZlY3QsIGlucHV0cykge1xuICAgIGNvbnN0IFtpZF0gPSB1c2VTdGF0ZSgoKSA9PiBnZW5lcmF0ZVJhbmRvbUlkKCkpO1xuICAgIHRvUnVuLnNldChpZCwgeyBlZmZlY3QsIGlucHV0cywgY2xlYW51cDogbnVsbCB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdG9SdW4uZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5wdXRzLmRlbGV0ZShpZCk7XG4gICAgICAgIH07XG4gICAgfSwgW2lkXSk7XG59XG5mdW5jdGlvbiBhcmdzQ2hhbmdlZChvbGRBcmdzLCBuZXdBcmdzKSB7XG4gICAgcmV0dXJuICEhKCFvbGRBcmdzIHx8XG4gICAgICAgIG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzPy5sZW5ndGggfHxcbiAgICAgICAgbmV3QXJncz8uc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWJlZm9yZS1sYXlvdXQtZWZmZWN0LmpzLm1hcCIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInByZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7IHVzZVN0YWJsZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXNlLXN0YWJsZS1jYWxsYmFja1wiO1xuO1xuY29uc3QgU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBmdW5jdGlvbiBQcm92aWRlQmF0Y2hlZEFuaW1hdGlvbkZyYW1lcyh7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBhZGRDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFja1RvQmVCYXRjaGVkLCB0YWcpID0+IHsgYWxsQ2FsbGJhY2tzLmN1cnJlbnQuc2V0KGNhbGxiYWNrVG9CZUJhdGNoZWQsIHRhZyk7IH0sIFtdKTtcbiAgICBjb25zdCByZW1vdmVDYWxsYmFjayA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4geyBhbGxDYWxsYmFja3MuY3VycmVudC5kZWxldGUoY2FsbGJhY2spOyB9LCBbXSk7XG4gICAgY29uc3QgY29udGV4dEluZm8gPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKGNvbnRleHRJbmZvLmN1cnJlbnQgPT0gbnVsbClcbiAgICAgICAgY29udGV4dEluZm8uY3VycmVudCA9IHsgYWRkQ2FsbGJhY2ssIHJlbW92ZUNhbGxiYWNrIH07XG4gICAgY29uc3QgYWxsQ2FsbGJhY2tzID0gdXNlUmVmKG51bGwpO1xuICAgIGlmIChhbGxDYWxsYmFja3MuY3VycmVudCA9PSBudWxsKVxuICAgICAgICBhbGxDYWxsYmFja3MuY3VycmVudCA9IG5ldyBNYXAoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFuZGxlID0gLTE7XG4gICAgICAgIGZ1bmN0aW9uIHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKG1zU2luY2VMYXN0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBbYmF0Y2hlZFJhZkNhbGxiYWNrLCB0YWddIG9mIGFsbENhbGxiYWNrcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hlZFJhZkNhbGxiYWNrKG1zU2luY2VMYXN0LCB0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZldpdGhCYXRjaGVkQ2FsbGJhY2tzKTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIGhhbmRsZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZXaXRoQmF0Y2hlZENhbGxiYWNrcyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goU2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb250ZXh0SW5mby5jdXJyZW50LCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuLyoqXG4gKiBUaGUgKG9wdGlvbmFsbHkgbm9uLXN0YWJsZSkgYGNhbGxiYWNrYCB5b3UgcHJvdmlkZSB3aWxsIHN0YXJ0IHJ1bm5pbmcgZXZlcnkgZnJhbWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBtb3VudHMuXG4gKlxuICogUGFzc2luZyBgbnVsbGAgaXMgZmluZSBhbmQgc2ltcGx5IHN0b3BzIHRoZSBlZmZlY3QgdW50aWwgeW91IHJlc3RhcnQgaXQgYnkgcHJvdmlkaW5nIGEgbm9uLW51bGwgY2FsbGJhY2suXG4gKlxuICogKipUaGlzIGhvb2sgZG9lcyBub3QgcmV0dXJuIGFueXRoaW5nIGF0IGFsbCwgaW5jbHVkaW5nIG5vIHByb3AtbW9kaWZ5aW5nIGhvb2tzKipcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFuaW1hdGlvbkZyYW1lKHsgY2FsbGJhY2sgfSkge1xuICAgIC8vIEdldCBhIHdyYXBwZXIgYXJvdW5kIHRoZSBnaXZlbiBjYWxsYmFjayB0aGF0J3Mgc3RhYmxlXG4gICAgY29uc3Qgc3RhYmxlQ2FsbGJhY2sgPSB1c2VTdGFibGVDYWxsYmFjayhjYWxsYmFjayA/PyAoKCkgPT4geyB9KSk7XG4gICAgY29uc3QgaGFzQ2FsbGJhY2sgPSAoY2FsbGJhY2sgIT0gbnVsbCk7XG4gICAgY29uc3Qgc2hhcmVkQW5pbWF0aW9uRnJhbWVDb250ZXh0ID0gdXNlQ29udGV4dChTaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNoYXJlZEFuaW1hdGlvbkZyYW1lQ29udGV4dC5hZGRDYWxsYmFjayhzdGFibGVDYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQucmVtb3ZlQ2FsbGJhY2soc3RhYmxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IGEgd3JhcHBlciBhcm91bmQgdGhlIHdyYXBwZXIgYXJvdW5kIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgYWxzbyBjYWxscyBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhZ2Fpbi5cbiAgICAgICAgICAgICAgICBjb25zdCByYWZDYWxsYmFjayA9IChtcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICBzdGFibGVDYWxsYmFjayhtcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaGFyZWRBbmltYXRpb25GcmFtZUNvbnRleHQsIGhhc0NhbGxiYWNrXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtYW5pbWF0aW9uLWZyYW1lLmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSgnaW5lcnQnLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdvcmsgaXMgbGljZW5zZWQgdW5kZXIgdGhlIFczQyBTb2Z0d2FyZSBhbmQgRG9jdW1lbnQgTGljZW5zZVxuICAgKiAoaHR0cDovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnQpLlxuICAgKi9cblxuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFJldHVybiBlYXJseSBpZiB3ZSdyZSBub3QgcnVubmluZyBpbnNpZGUgb2YgdGhlIGJyb3dzZXIuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ29udmVuaWVuY2UgZnVuY3Rpb24gZm9yIGNvbnZlcnRpbmcgTm9kZUxpc3RzLlxuICAgIC8qKiBAdHlwZSB7dHlwZW9mIEFycmF5LnByb3RvdHlwZS5zbGljZX0gKi9cbiAgICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgICAvKipcbiAgICAgKiBJRSBoYXMgYSBub24tc3RhbmRhcmQgbmFtZSBmb3IgXCJtYXRjaGVzXCIuXG4gICAgICogQHR5cGUge3R5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzfVxuICAgICAqL1xuICAgIHZhciBtYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcblxuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcgPSBbJ2FbaHJlZl0nLCAnYXJlYVtocmVmXScsICdpbnB1dDpub3QoW2Rpc2FibGVkXSknLCAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKScsICd0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSknLCAnYnV0dG9uOm5vdChbZGlzYWJsZWRdKScsICdkZXRhaWxzJywgJ3N1bW1hcnknLCAnaWZyYW1lJywgJ29iamVjdCcsICdlbWJlZCcsICdbY29udGVudGVkaXRhYmxlXSddLmpvaW4oJywnKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydFJvb3RgIG1hbmFnZXMgYSBzaW5nbGUgaW5lcnQgc3VidHJlZSwgaS5lLiBhIERPTSBzdWJ0cmVlIHdob3NlIHJvb3QgZWxlbWVudCBoYXMgYW4gYGluZXJ0YFxuICAgICAqIGF0dHJpYnV0ZS5cbiAgICAgKlxuICAgICAqIEl0cyBtYWluIGZ1bmN0aW9ucyBhcmU6XG4gICAgICpcbiAgICAgKiAtIHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gYSBzZXQgb2YgbWFuYWdlZCBgSW5lcnROb2RlYHMsIGluY2x1ZGluZyB3aGVuIG11dGF0aW9ucyBvY2N1ciBpbiB0aGVcbiAgICAgKiAgIHN1YnRyZWUuIFRoZSBgbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSgpYCBtZXRob2QgaGFuZGxlcyBjb2xsZWN0aW5nIGBJbmVydE5vZGVgcyB2aWEgcmVnaXN0ZXJpbmdcbiAgICAgKiAgIGVhY2ggZm9jdXNhYmxlIG5vZGUgaW4gdGhlIHN1YnRyZWUgd2l0aCB0aGUgc2luZ2xldG9uIGBJbmVydE1hbmFnZXJgIHdoaWNoIG1hbmFnZXMgYWxsIGtub3duXG4gICAgICogICBmb2N1c2FibGUgbm9kZXMgd2l0aGluIGluZXJ0IHN1YnRyZWVzLiBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWBcbiAgICAgKiAgIGluc3RhbmNlIGV4aXN0cyBmb3IgZWFjaCBmb2N1c2FibGUgbm9kZSB3aGljaCBoYXMgYXQgbGVhc3Qgb25lIGluZXJ0IHJvb3QgYXMgYW4gYW5jZXN0b3IuXG4gICAgICpcbiAgICAgKiAtIHRvIG5vdGlmeSBhbGwgbWFuYWdlZCBgSW5lcnROb2RlYHMgd2hlbiB0aGlzIHN1YnRyZWUgc3RvcHMgYmVpbmcgaW5lcnQgKGkuZS4gd2hlbiB0aGUgYGluZXJ0YFxuICAgICAqICAgYXR0cmlidXRlIGlzIHJlbW92ZWQgZnJvbSB0aGUgcm9vdCBub2RlKS4gVGhpcyBpcyBoYW5kbGVkIGluIHRoZSBkZXN0cnVjdG9yLCB3aGljaCBjYWxscyB0aGVcbiAgICAgKiAgIGBkZXJlZ2lzdGVyYCBtZXRob2Qgb24gYEluZXJ0TWFuYWdlcmAgZm9yIGVhY2ggbWFuYWdlZCBpbmVydCBub2RlLlxuICAgICAqL1xuXG4gICAgdmFyIEluZXJ0Um9vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdEVsZW1lbnQgVGhlIEVsZW1lbnQgYXQgdGhlIHJvb3Qgb2YgdGhlIGluZXJ0IHN1YnRyZWUuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydE1hbmFnZXJ9IGluZXJ0TWFuYWdlciBUaGUgZ2xvYmFsIHNpbmdsZXRvbiBJbmVydE1hbmFnZXIgb2JqZWN0LlxuICAgICAgICovXG4gICAgICBmdW5jdGlvbiBJbmVydFJvb3Qocm9vdEVsZW1lbnQsIGluZXJ0TWFuYWdlcikge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5lcnRSb290KTtcblxuICAgICAgICAvKiogQHR5cGUgeyFJbmVydE1hbmFnZXJ9ICovXG4gICAgICAgIHRoaXMuX2luZXJ0TWFuYWdlciA9IGluZXJ0TWFuYWdlcjtcblxuICAgICAgICAvKiogQHR5cGUgeyFFbGVtZW50fSAqL1xuICAgICAgICB0aGlzLl9yb290RWxlbWVudCA9IHJvb3RFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7IVNldDwhSW5lcnROb2RlPn1cbiAgICAgICAgICogQWxsIG1hbmFnZWQgZm9jdXNhYmxlIG5vZGVzIGluIHRoaXMgSW5lcnRSb290J3Mgc3VidHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX21hbmFnZWROb2RlcyA9IG5ldyBTZXQoKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBzdWJ0cmVlIGhpZGRlbiBmcm9tIGFzc2lzdGl2ZSB0ZWNobm9sb2d5XG4gICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgICAvKiogQHR5cGUgez9zdHJpbmd9ICovXG4gICAgICAgICAgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuID0gdGhpcy5fcm9vdEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3NhdmVkQXJpYUhpZGRlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzIGluIHRoZSBzdWJ0cmVlIHVuZm9jdXNhYmxlIGFuZCBhZGQgdGhlbSB0byBfbWFuYWdlZE5vZGVzXG4gICAgICAgIHRoaXMuX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUodGhpcy5fcm9vdEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFdhdGNoIGZvcjpcbiAgICAgICAgLy8gLSBhbnkgYWRkaXRpb25zIGluIHRoZSBzdWJ0cmVlOiBtYWtlIHRoZW0gdW5mb2N1c2FibGUgdG9vXG4gICAgICAgIC8vIC0gYW55IHJlbW92YWxzIGZyb20gdGhlIHN1YnRyZWU6IHJlbW92ZSB0aGVtIGZyb20gdGhpcyBpbmVydCByb290J3MgbWFuYWdlZCBub2Rlc1xuICAgICAgICAvLyAtIGF0dHJpYnV0ZSBjaGFuZ2VzOiBpZiBgdGFiaW5kZXhgIGlzIGFkZGVkLCBvciByZW1vdmVkIGZyb20gYW4gaW50cmluc2ljYWxseSBmb2N1c2FibGVcbiAgICAgICAgLy8gICBlbGVtZW50LCBtYWtlIHRoYXQgbm9kZSBhIG1hbmFnZWQgbm9kZS5cbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLl9vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX3Jvb3RFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsIHRoaXMgd2hlbmV2ZXIgdGhpcyBvYmplY3QgaXMgYWJvdXQgdG8gYmVjb21lIG9ic29sZXRlLiAgVGhpcyB1bndpbmRzIGFsbCBvZiB0aGUgc3RhdGVcbiAgICAgICAqIHN0b3JlZCBpbiB0aGlzIG9iamVjdCBhbmQgdXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIG9mIHRoZSBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0Um9vdCwgW3tcbiAgICAgICAga2V5OiAnZGVzdHJ1Y3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgIGlmICh0aGlzLl9yb290RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NhdmVkQXJpYUhpZGRlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLl9yb290RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdGhpcy5fc2F2ZWRBcmlhSGlkZGVuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX3Jvb3RFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl91bm1hbmFnZU5vZGUoaW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgICAgLy8gTm90ZSB3ZSBjYXN0IHRoZSBudWxscyB0byB0aGUgQU5ZIHR5cGUgaGVyZSBiZWNhdXNlOlxuICAgICAgICAgIC8vIDEpIFdlIHdhbnQgdGhlIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZGVjbGFyZWQgYXMgbm9uLW51bGwsIG9yIGVsc2Ugd2VcbiAgICAgICAgICAvLyAgICBuZWVkIGV2ZW4gbW9yZSBjYXN0cyB0aHJvdWdob3V0IHRoaXMgY29kZS4gQWxsIGJldHMgYXJlIG9mZiBpZiBhblxuICAgICAgICAgIC8vICAgIGluc3RhbmNlIGhhcyBiZWVuIGRlc3Ryb3llZCBhbmQgYSBtZXRob2QgaXMgY2FsbGVkLlxuICAgICAgICAgIC8vIDIpIFdlIGRvbid0IHdhbnQgdG8gY2FzdCBcInRoaXNcIiwgYmVjYXVzZSB3ZSB3YW50IHR5cGUtYXdhcmUgb3B0aW1pemF0aW9uc1xuICAgICAgICAgIC8vICAgIHRvIGtub3cgd2hpY2ggcHJvcGVydGllcyB3ZSdyZSBzZXR0aW5nLlxuICAgICAgICAgIHRoaXMuX29ic2VydmVyID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5fcm9vdEVsZW1lbnQgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9tYW5hZ2VkTm9kZXMgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgICB0aGlzLl9pbmVydE1hbmFnZXIgPSAvKiogQHR5cGUgez99ICovbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHshU2V0PCFJbmVydE5vZGU+fSBBIGNvcHkgb2YgdGhpcyBJbmVydFJvb3QncyBtYW5hZ2VkIG5vZGVzIHNldC5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21ha2VTdWJ0cmVlVW5mb2N1c2FibGUnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IHN0YXJ0Tm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlU3VidHJlZVVuZm9jdXNhYmxlKHN0YXJ0Tm9kZSkge1xuICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgY29tcG9zZWRUcmVlV2FsayhzdGFydE5vZGUsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLl92aXNpdE5vZGUobm9kZSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnMoc3RhcnROb2RlKSkge1xuICAgICAgICAgICAgLy8gc3RhcnROb2RlIG1heSBiZSBpbiBzaGFkb3cgRE9NLCBzbyBmaW5kIGl0cyBuZWFyZXN0IHNoYWRvd1Jvb3QgdG8gZ2V0IHRoZSBhY3RpdmVFbGVtZW50LlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgICAgICAvKiogQHR5cGUgeyFTaGFkb3dSb290fHVuZGVmaW5lZH0gKi9cbiAgICAgICAgICAgIHZhciByb290ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHJvb3QgPSAvKiogQHR5cGUgeyFTaGFkb3dSb290fSAqL25vZGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSByb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGFydE5vZGUuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICAgICAgLy8gSW4gSUUxMSwgaWYgYW4gZWxlbWVudCBpcyBhbHJlYWR5IGZvY3VzZWQsIGFuZCB0aGVuIHNldCB0byB0YWJpbmRleD0tMVxuICAgICAgICAgICAgLy8gY2FsbGluZyBibHVyKCkgd2lsbCBub3QgYWN0dWFsbHkgbW92ZSB0aGUgZm9jdXMuXG4gICAgICAgICAgICAvLyBUbyB3b3JrIGFyb3VuZCB0aGlzIHdlIGNhbGwgZm9jdXMoKSBvbiB0aGUgYm9keSBpbnN0ZWFkLlxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ192aXNpdE5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Zpc2l0Tm9kZShub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuXG4gICAgICAgICAgLy8gSWYgYSBkZXNjZW5kYW50IGluZXJ0IHJvb3QgYmVjb21lcyB1bi1pbmVydCwgaXRzIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmUgaW5lcnQgYmVjYXVzZSBvZlxuICAgICAgICAgIC8vIHRoaXMgaW5lcnQgcm9vdCwgc28gYWxsIG9mIGl0cyBtYW5hZ2VkIG5vZGVzIG5lZWQgdG8gYmUgYWRvcHRlZCBieSB0aGlzIEluZXJ0Um9vdC5cbiAgICAgICAgICBpZiAoZWxlbWVudCAhPT0gdGhpcy5fcm9vdEVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgIHRoaXMuX2Fkb3B0SW5lcnRSb290KGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nKSB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX21hbmFnZU5vZGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21hbmFnZU5vZGUobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9pbmVydE1hbmFnZXIucmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmFkZChpbmVydE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVucmVnaXN0ZXIgdGhlIGdpdmVuIG5vZGUgd2l0aCB0aGlzIEluZXJ0Um9vdCBhbmQgd2l0aCBJbmVydE1hbmFnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3VubWFuYWdlTm9kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5tYW5hZ2VOb2RlKG5vZGUpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5faW5lcnRNYW5hZ2VyLmRlcmVnaXN0ZXIobm9kZSwgdGhpcyk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzWydkZWxldGUnXShpbmVydE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbnJlZ2lzdGVyIHRoZSBlbnRpcmUgc3VidHJlZSBzdGFydGluZyBhdCBgc3RhcnROb2RlYC5cbiAgICAgICAgICogQHBhcmFtIHshTm9kZX0gc3RhcnROb2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ191bm1hbmFnZVN1YnRyZWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3VubWFuYWdlU3VidHJlZShzdGFydE5vZGUpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoc3RhcnROb2RlLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5fdW5tYW5hZ2VOb2RlKG5vZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgZGVzY2VuZGFudCBub2RlIGlzIGZvdW5kIHdpdGggYW4gYGluZXJ0YCBhdHRyaWJ1dGUsIGFkb3B0IGl0cyBtYW5hZ2VkIG5vZGVzLlxuICAgICAgICAgKiBAcGFyYW0geyFFbGVtZW50fSBub2RlXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19hZG9wdEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRvcHRJbmVydFJvb3Qobm9kZSkge1xuICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KG5vZGUpO1xuXG4gICAgICAgICAgLy8gRHVyaW5nIGluaXRpYWxpc2F0aW9uIHRoaXMgaW5lcnQgcm9vdCBtYXkgbm90IGhhdmUgYmVlbiByZWdpc3RlcmVkIHlldCxcbiAgICAgICAgICAvLyBzbyByZWdpc3RlciBpdCBub3cgaWYgbmVlZCBiZS5cbiAgICAgICAgICBpZiAoIWluZXJ0U3Vicm9vdCkge1xuICAgICAgICAgICAgdGhpcy5faW5lcnRNYW5hZ2VyLnNldEluZXJ0KG5vZGUsIHRydWUpO1xuICAgICAgICAgICAgaW5lcnRTdWJyb290ID0gdGhpcy5faW5lcnRNYW5hZ2VyLmdldEluZXJ0Um9vdChub2RlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydFN1YnJvb3QubWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHNhdmVkSW5lcnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW5hZ2VOb2RlKHNhdmVkSW5lcnROb2RlLm5vZGUpO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxiYWNrIHVzZWQgd2hlbiBtdXRhdGlvbiBvYnNlcnZlciBkZXRlY3RzIHN1YnRyZWUgYWRkaXRpb25zLCByZW1vdmFscywgb3IgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgICAqIEBwYXJhbSB7IUFycmF5PCFNdXRhdGlvblJlY29yZD59IHJlY29yZHNcbiAgICAgICAgICogQHBhcmFtIHshTXV0YXRpb25PYnNlcnZlcn0gc2VsZlxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdfb25NdXRhdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25NdXRhdGlvbihyZWNvcmRzLCBzZWxmKSB7XG4gICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG4gICAgICAgICAgICAgIC8vIE1hbmFnZSBhZGRlZCBub2Rlc1xuICAgICAgICAgICAgICBzbGljZS5jYWxsKHJlY29yZC5hZGRlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFrZVN1YnRyZWVVbmZvY3VzYWJsZShub2RlKTtcbiAgICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgICAgLy8gVW4tbWFuYWdlIHJlbW92ZWQgbm9kZXNcbiAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQucmVtb3ZlZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdW5tYW5hZ2VTdWJ0cmVlKG5vZGUpO1xuICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICd0YWJpbmRleCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0aWFsaXNlIGluZXJ0IG5vZGUgaWYgdGFiaW5kZXggY2hhbmdlc1xuICAgICAgICAgICAgICAgIHRoaXMuX21hbmFnZU5vZGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT09IHRoaXMuX3Jvb3RFbGVtZW50ICYmIHJlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnaW5lcnQnICYmIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2luZXJ0JykpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIG5ldyBpbmVydCByb290IGlzIGFkZGVkLCBhZG9wdCBpdHMgbWFuYWdlZCBub2RlcyBhbmQgbWFrZSBzdXJlIGl0IGtub3dzIGFib3V0IHRoZVxuICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgbWFuYWdlZCBub2RlcyBmcm9tIHRoaXMgaW5lcnQgc3Vicm9vdC5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZG9wdEluZXJ0Um9vdCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHZhciBpbmVydFN1YnJvb3QgPSB0aGlzLl9pbmVydE1hbmFnZXIuZ2V0SW5lcnRSb290KHRhcmdldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG1hbmFnZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmNvbnRhaW5zKG1hbmFnZWROb2RlLm5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZXJ0U3Vicm9vdC5fbWFuYWdlTm9kZShtYW5hZ2VkTm9kZS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ21hbmFnZWROb2RlcycsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX21hbmFnZWROb2Rlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7Ym9vbGVhbn0gKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZEFyaWFIaWRkZW4nLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRBcmlhSGlkZGVuICE9PSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEBwYXJhbSB7P3N0cmluZ30gYXJpYUhpZGRlbiAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3NhdmVkQXJpYUhpZGRlbicsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KGFyaWFIaWRkZW4pIHtcbiAgICAgICAgICB0aGlzLl9zYXZlZEFyaWFIaWRkZW4gPSBhcmlhSGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqIEByZXR1cm4gez9zdHJpbmd9ICovXG4gICAgICAgICxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkQXJpYUhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRSb290O1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIGBJbmVydE5vZGVgIGluaXRpYWxpc2VzIGFuZCBtYW5hZ2VzIGEgc2luZ2xlIGluZXJ0IG5vZGUuXG4gICAgICogQSBub2RlIGlzIGluZXJ0IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiBvbmUgb3IgbW9yZSBpbmVydCByb290IGVsZW1lbnRzLlxuICAgICAqXG4gICAgICogT24gY29uc3RydWN0aW9uLCBgSW5lcnROb2RlYCBzYXZlcyB0aGUgZXhpc3RpbmcgYHRhYmluZGV4YCB2YWx1ZSBmb3IgdGhlIG5vZGUsIGlmIGFueSwgYW5kXG4gICAgICogZWl0aGVyIHJlbW92ZXMgdGhlIGB0YWJpbmRleGAgYXR0cmlidXRlIG9yIHNldHMgaXQgdG8gYC0xYCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGVsZW1lbnRcbiAgICAgKiBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZSBvciBub3QuXG4gICAgICpcbiAgICAgKiBgSW5lcnROb2RlYCBtYWludGFpbnMgYSBzZXQgb2YgYEluZXJ0Um9vdGBzIHdoaWNoIGFyZSBkZXNjZW5kYW50cyBvZiB0aGlzIGBJbmVydE5vZGVgLiBXaGVuIGFuXG4gICAgICogYEluZXJ0Um9vdGAgaXMgZGVzdHJveWVkLCBhbmQgY2FsbHMgYEluZXJ0TWFuYWdlci5kZXJlZ2lzdGVyKClgLCB0aGUgYEluZXJ0TWFuYWdlcmAgbm90aWZpZXMgdGhlXG4gICAgICogYEluZXJ0Tm9kZWAgdmlhIGByZW1vdmVJbmVydFJvb3QoKWAsIHdoaWNoIGluIHR1cm4gZGVzdHJveXMgdGhlIGBJbmVydE5vZGVgIGlmIG5vIGBJbmVydFJvb3Rgc1xuICAgICAqIHJlbWFpbiBpbiB0aGUgc2V0LiBPbiBkZXN0cnVjdGlvbiwgYEluZXJ0Tm9kZWAgcmVpbnN0YXRlcyB0aGUgc3RvcmVkIGB0YWJpbmRleGAgaWYgb25lIGV4aXN0cyxcbiAgICAgKiBvciByZW1vdmVzIHRoZSBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBpZiB0aGUgZWxlbWVudCBpcyBpbnRyaW5zaWNhbGx5IGZvY3VzYWJsZS5cbiAgICAgKi9cblxuXG4gICAgdmFyIEluZXJ0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBBIGZvY3VzYWJsZSBlbGVtZW50IHRvIGJlIG1hZGUgaW5lcnQuXG4gICAgICAgKiBAcGFyYW0geyFJbmVydFJvb3R9IGluZXJ0Um9vdCBUaGUgaW5lcnQgcm9vdCBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIGluZXJ0IG5vZGUuXG4gICAgICAgKi9cbiAgICAgIGZ1bmN0aW9uIEluZXJ0Tm9kZShub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluZXJ0Tm9kZSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHshTm9kZX0gKi9cbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG5cbiAgICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgICB0aGlzLl9vdmVycm9kZUZvY3VzTWV0aG9kID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHshU2V0PCFJbmVydFJvb3Q+fSBUaGUgc2V0IG9mIGRlc2NlbmRhbnQgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqICAgIElmIGFuZCBvbmx5IGlmIHRoaXMgc2V0IGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pbmVydFJvb3RzID0gbmV3IFNldChbaW5lcnRSb290XSk7XG5cbiAgICAgICAgLyoqIEB0eXBlIHs/bnVtYmVyfSAqL1xuICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gbnVsbDtcblxuICAgICAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgYW55IHByaW9yIHRhYmluZGV4IGluZm8gYW5kIG1ha2UgdGhpcyBub2RlIHVudGFiYmFibGVcbiAgICAgICAgdGhpcy5lbnN1cmVVbnRhYmJhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbCB0aGlzIHdoZW5ldmVyIHRoaXMgb2JqZWN0IGlzIGFib3V0IHRvIGJlY29tZSBvYnNvbGV0ZS5cbiAgICAgICAqIFRoaXMgbWFrZXMgdGhlIG1hbmFnZWQgbm9kZSBmb2N1c2FibGUgYWdhaW4gYW5kIGRlbGV0ZXMgYWxsIG9mIHRoZSBwcmV2aW91c2x5IHN0b3JlZCBzdGF0ZS5cbiAgICAgICAqL1xuXG5cbiAgICAgIF9jcmVhdGVDbGFzcyhJbmVydE5vZGUsIFt7XG4gICAgICAgIGtleTogJ2Rlc3RydWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5fbm9kZSAmJiB0aGlzLl9ub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3RoaXMuX25vZGU7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2F2ZWRUYWJJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGlzLl9zYXZlZFRhYkluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVc2UgYGRlbGV0ZWAgdG8gcmVzdG9yZSBuYXRpdmUgZm9jdXMgbWV0aG9kLlxuICAgICAgICAgICAgaWYgKHRoaXMuX292ZXJyb2RlRm9jdXNNZXRob2QpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZm9jdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2VlIG5vdGUgaW4gSW5lcnRSb290LmRlc3RydWN0b3IgZm9yIHdoeSB3ZSBjYXN0IHRoZXNlIG51bGxzIHRvIEFOWS5cbiAgICAgICAgICB0aGlzLl9ub2RlID0gLyoqIEB0eXBlIHs/fSAqL251bGw7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IC8qKiBAdHlwZSB7P30gKi9udWxsO1xuICAgICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBvYmplY3QgaXMgb2Jzb2xldGUgYmVjYXVzZSB0aGUgbWFuYWdlZCBub2RlIGlzIG5vIGxvbmdlciBpbmVydC5cbiAgICAgICAgICogSWYgdGhlIG9iamVjdCBoYXMgYmVlbiBkZXN0cm95ZWQsIGFueSBhdHRlbXB0IHRvIGFjY2VzcyBpdCB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnX3Rocm93SWZEZXN0cm95ZWQnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRocm93IGlmIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGRlc3Ryb3llZCBJbmVydE5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3Rocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgZGVzdHJveWVkIEluZXJ0Tm9kZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHtib29sZWFufSAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2Vuc3VyZVVudGFiYmFibGUnLFxuXG5cbiAgICAgICAgLyoqIFNhdmUgdGhlIGV4aXN0aW5nIHRhYmluZGV4IHZhbHVlIGFuZCBtYWtlIHRoZSBub2RlIHVudGFiYmFibGUgYW5kIHVuZm9jdXNhYmxlICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBlbnN1cmVVbnRhYmJhYmxlKCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi90aGlzLm5vZGU7XG4gICAgICAgICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCBfZm9jdXNhYmxlRWxlbWVudHNTdHJpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXggPT09IC0xICYmIHRoaXMuaGFzU2F2ZWRUYWJJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICB0aGlzLl9zYXZlZFRhYkluZGV4ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovZWxlbWVudC50YWJJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgICAgICAgdGhpcy5fb3ZlcnJvZGVGb2N1c01ldGhvZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZWRUYWJJbmRleCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQudGFiSW5kZXg7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGFub3RoZXIgaW5lcnQgcm9vdCB0byB0aGlzIGluZXJ0IG5vZGUncyBzZXQgb2YgbWFuYWdpbmcgaW5lcnQgcm9vdHMuXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEluZXJ0Um9vdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmVydFJvb3QoaW5lcnRSb290KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuYWRkKGluZXJ0Um9vdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIHRoZSBnaXZlbiBpbmVydCByb290IGZyb20gdGhpcyBpbmVydCBub2RlJ3Mgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBJZiB0aGUgc2V0IG9mIG1hbmFnaW5nIGluZXJ0IHJvb3RzIGJlY29tZXMgZW1wdHksIHRoaXMgbm9kZSBpcyBubyBsb25nZXIgaW5lcnQsXG4gICAgICAgICAqIHNvIHRoZSBvYmplY3Qgc2hvdWxkIGJlIGRlc3Ryb3llZC5cbiAgICAgICAgICogQHBhcmFtIHshSW5lcnRSb290fSBpbmVydFJvb3RcbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVtb3ZlSW5lcnRSb290JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUluZXJ0Um9vdChpbmVydFJvb3QpIHtcbiAgICAgICAgICB0aGlzLl90aHJvd0lmRGVzdHJveWVkKCk7XG4gICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10oaW5lcnRSb290KTtcbiAgICAgICAgICBpZiAodGhpcy5faW5lcnRSb290cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0b3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveWVkJyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuICgvKiogQHR5cGUgeyFJbmVydE5vZGV9ICovdGhpcy5fZGVzdHJveWVkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTYXZlZFRhYkluZGV4JyxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3NhdmVkVGFiSW5kZXggIT09IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHJldHVybiB7IU5vZGV9ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnbm9kZScsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fbm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcGFyYW0gez9udW1iZXJ9IHRhYkluZGV4ICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2F2ZWRUYWJJbmRleCcsXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHRhYkluZGV4KSB7XG4gICAgICAgICAgdGhpcy5fdGhyb3dJZkRlc3Ryb3llZCgpO1xuICAgICAgICAgIHRoaXMuX3NhdmVkVGFiSW5kZXggPSB0YWJJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAcmV0dXJuIHs/bnVtYmVyfSAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHRoaXMuX3Rocm93SWZEZXN0cm95ZWQoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2F2ZWRUYWJJbmRleDtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnROb2RlO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIEluZXJ0TWFuYWdlciBpcyBhIHBlci1kb2N1bWVudCBzaW5nbGV0b24gb2JqZWN0IHdoaWNoIG1hbmFnZXMgYWxsIGluZXJ0IHJvb3RzIGFuZCBub2Rlcy5cbiAgICAgKlxuICAgICAqIFdoZW4gYW4gZWxlbWVudCBiZWNvbWVzIGFuIGluZXJ0IHJvb3QgYnkgaGF2aW5nIGFuIGBpbmVydGAgYXR0cmlidXRlIHNldCBhbmQvb3IgaXRzIGBpbmVydGBcbiAgICAgKiBwcm9wZXJ0eSBzZXQgdG8gYHRydWVgLCB0aGUgYHNldEluZXJ0YCBtZXRob2QgY3JlYXRlcyBhbiBgSW5lcnRSb290YCBvYmplY3QgZm9yIHRoZSBlbGVtZW50LlxuICAgICAqIFRoZSBgSW5lcnRSb290YCBpbiB0dXJuIHJlZ2lzdGVycyBpdHNlbGYgYXMgbWFuYWdpbmcgYWxsIG9mIHRoZSBlbGVtZW50J3MgZm9jdXNhYmxlIGRlc2NlbmRhbnRcbiAgICAgKiBub2RlcyB2aWEgdGhlIGByZWdpc3RlcigpYCBtZXRob2QuIFRoZSBgSW5lcnRNYW5hZ2VyYCBlbnN1cmVzIHRoYXQgYSBzaW5nbGUgYEluZXJ0Tm9kZWAgaW5zdGFuY2VcbiAgICAgKiBpcyBjcmVhdGVkIGZvciBlYWNoIHN1Y2ggbm9kZSwgdmlhIHRoZSBgX21hbmFnZWROb2Rlc2AgbWFwLlxuICAgICAqL1xuXG5cbiAgICB2YXIgSW5lcnRNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0geyFEb2N1bWVudH0gZG9jdW1lbnRcbiAgICAgICAqL1xuICAgICAgZnVuY3Rpb24gSW5lcnRNYW5hZ2VyKGRvY3VtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbmVydE1hbmFnZXIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgYXJndW1lbnQ7IEluZXJ0TWFuYWdlciBuZWVkcyB0byB3cmFwIGEgZG9jdW1lbnQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiogQHR5cGUgeyFEb2N1bWVudH0gKi9cbiAgICAgICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG1hbmFnZWQgbm9kZXMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydE5vZGU+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGwgaW5lcnQgcm9vdHMga25vd24gdG8gdGhpcyBJbmVydE1hbmFnZXIuIEluIGEgbWFwIHRvIGFsbG93IGxvb2tpbmcgdXAgYnkgTm9kZS5cbiAgICAgICAgICogQHR5cGUgeyFNYXA8IU5vZGUsICFJbmVydFJvb3Q+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faW5lcnRSb290cyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JzZXJ2ZXIgZm9yIG11dGF0aW9ucyBvbiBgZG9jdW1lbnQuYm9keWAuXG4gICAgICAgICAqIEB0eXBlIHshTXV0YXRpb25PYnNlcnZlcn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fd2F0Y2hGb3JJbmVydC5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBBZGQgaW5lcnQgc3R5bGUuXG4gICAgICAgIGFkZEluZXJ0U3R5bGUoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gYmUgbG9hZGVkLlxuICAgICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuX29uRG9jdW1lbnRMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb25Eb2N1bWVudExvYWRlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGJlIGFuIGluZXJ0IHJvb3Qgb3Igbm90LlxuICAgICAgICogQHBhcmFtIHshRWxlbWVudH0gcm9vdFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBpbmVydFxuICAgICAgICovXG5cblxuICAgICAgX2NyZWF0ZUNsYXNzKEluZXJ0TWFuYWdlciwgW3tcbiAgICAgICAga2V5OiAnc2V0SW5lcnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5lcnQocm9vdCwgaW5lcnQpIHtcbiAgICAgICAgICBpZiAoaW5lcnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgaW5lcnRcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaW5lcnRSb290ID0gbmV3IEluZXJ0Um9vdChyb290LCB0aGlzKTtcbiAgICAgICAgICAgIHJvb3Quc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuX2luZXJ0Um9vdHMuc2V0KHJvb3QsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgICAvLyBJZiBub3QgY29udGFpbmVkIGluIHRoZSBkb2N1bWVudCwgaXQgbXVzdCBiZSBpbiBhIHNoYWRvd1Jvb3QuXG4gICAgICAgICAgICAvLyBFbnN1cmUgaW5lcnQgc3R5bGVzIGFyZSBhZGRlZCB0aGVyZS5cbiAgICAgICAgICAgIGlmICghdGhpcy5fZG9jdW1lbnQuYm9keS5jb250YWlucyhyb290KSkge1xuICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gcm9vdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlVHlwZSA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgIGFkZEluZXJ0U3R5bGUocGFyZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmVydFJvb3RzLmhhcyhyb290KSkge1xuICAgICAgICAgICAgICAvLyBlbGVtZW50IGlzIGFscmVhZHkgbm9uLWluZXJ0XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9pbmVydFJvb3QgPSB0aGlzLl9pbmVydFJvb3RzLmdldChyb290KTtcbiAgICAgICAgICAgIF9pbmVydFJvb3QuZGVzdHJ1Y3RvcigpO1xuICAgICAgICAgICAgdGhpcy5faW5lcnRSb290c1snZGVsZXRlJ10ocm9vdCk7XG4gICAgICAgICAgICByb290LnJlbW92ZUF0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBJbmVydFJvb3Qgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGluZXJ0IHJvb3QgZWxlbWVudCwgaWYgYW55LlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydFJvb3R8dW5kZWZpbmVkfVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRJbmVydFJvb3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5lcnRSb290KGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5lcnRSb290cy5nZXQoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgdGhlIGdpdmVuIEluZXJ0Um9vdCBhcyBtYW5hZ2luZyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICAgICAgICogSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIG5vZGUgaGFzIGEgcHJldmlvdXNseSBleGlzdGluZyBpbmVydCByb290LCB0aGlzIGluZXJ0IHJvb3Qgd2lsbFxuICAgICAgICAgKiBiZSBhZGRlZCB0byBpdHMgc2V0IG9mIGluZXJ0IHJvb3RzLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4geyFJbmVydE5vZGV9IGluZXJ0Tm9kZVxuICAgICAgICAgKi9cblxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3Rlcihub2RlLCBpbmVydFJvb3QpIHtcbiAgICAgICAgICB2YXIgaW5lcnROb2RlID0gdGhpcy5fbWFuYWdlZE5vZGVzLmdldChub2RlKTtcbiAgICAgICAgICBpZiAoaW5lcnROb2RlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIG5vZGUgd2FzIGFscmVhZHkgaW4gYW4gaW5lcnQgc3VidHJlZVxuICAgICAgICAgICAgaW5lcnROb2RlLmFkZEluZXJ0Um9vdChpbmVydFJvb3QpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmVydE5vZGUgPSBuZXcgSW5lcnROb2RlKG5vZGUsIGluZXJ0Um9vdCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbWFuYWdlZE5vZGVzLnNldChub2RlLCBpbmVydE5vZGUpO1xuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZS1yZWdpc3RlciB0aGUgZ2l2ZW4gSW5lcnRSb290IGFzIG1hbmFnaW5nIHRoZSBnaXZlbiBpbmVydCBub2RlLlxuICAgICAgICAgKiBSZW1vdmVzIHRoZSBpbmVydCByb290IGZyb20gdGhlIEluZXJ0Tm9kZSdzIHNldCBvZiBtYW5hZ2luZyBpbmVydCByb290cywgYW5kIHJlbW92ZSB0aGUgaW5lcnRcbiAgICAgICAgICogbm9kZSBmcm9tIHRoZSBJbmVydE1hbmFnZXIncyBzZXQgb2YgbWFuYWdlZCBub2RlcyBpZiBpdCBpcyBkZXN0cm95ZWQuXG4gICAgICAgICAqIElmIHRoZSBub2RlIGlzIG5vdCBjdXJyZW50bHkgbWFuYWdlZCwgdGhpcyBpcyBlc3NlbnRpYWxseSBhIG5vLW9wLlxuICAgICAgICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAgICAgICAqIEBwYXJhbSB7IUluZXJ0Um9vdH0gaW5lcnRSb290XG4gICAgICAgICAqIEByZXR1cm4gez9JbmVydE5vZGV9IFRoZSBwb3RlbnRpYWxseSBkZXN0cm95ZWQgSW5lcnROb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIG5vZGUsIGlmIGFueS5cbiAgICAgICAgICovXG5cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVyZWdpc3RlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXJlZ2lzdGVyKG5vZGUsIGluZXJ0Um9vdCkge1xuICAgICAgICAgIHZhciBpbmVydE5vZGUgPSB0aGlzLl9tYW5hZ2VkTm9kZXMuZ2V0KG5vZGUpO1xuICAgICAgICAgIGlmICghaW5lcnROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmVydE5vZGUucmVtb3ZlSW5lcnRSb290KGluZXJ0Um9vdCk7XG4gICAgICAgICAgaWYgKGluZXJ0Tm9kZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21hbmFnZWROb2Rlc1snZGVsZXRlJ10obm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGluZXJ0Tm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gZG9jdW1lbnQgaGFzIGZpbmlzaGVkIGxvYWRpbmcuXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ19vbkRvY3VtZW50TG9hZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRvY3VtZW50TG9hZGVkKCkge1xuICAgICAgICAgIC8vIEZpbmQgYWxsIGluZXJ0IHJvb3RzIGluIGRvY3VtZW50IGFuZCBtYWtlIHRoZW0gYWN0dWFsbHkgaW5lcnQuXG4gICAgICAgICAgdmFyIGluZXJ0RWxlbWVudHMgPSBzbGljZS5jYWxsKHRoaXMuX2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5lcnQoaW5lcnRFbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBvdXQgdG8gdXNlIHByb2dyYW1tYXRpYyBBUEkgb25seS5cbiAgICAgICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHRoaXMuX2RvY3VtZW50LmJvZHkgfHwgdGhpcy5fZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7IGF0dHJpYnV0ZXM6IHRydWUsIHN1YnRyZWU6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsYmFjayB1c2VkIHdoZW4gbXV0YXRpb24gb2JzZXJ2ZXIgZGV0ZWN0cyBhdHRyaWJ1dGUgY2hhbmdlcy5cbiAgICAgICAgICogQHBhcmFtIHshQXJyYXk8IU11dGF0aW9uUmVjb3JkPn0gcmVjb3Jkc1xuICAgICAgICAgKiBAcGFyYW0geyFNdXRhdGlvbk9ic2VydmVyfSBzZWxmXG4gICAgICAgICAqL1xuXG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ193YXRjaEZvckluZXJ0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93YXRjaEZvckluZXJ0KHJlY29yZHMsIHNlbGYpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6XG4gICAgICAgICAgICAgICAgc2xpY2UuY2FsbChyZWNvcmQuYWRkZWROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciBpbmVydEVsZW1lbnRzID0gc2xpY2UuY2FsbChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tpbmVydF0nKSk7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsICdbaW5lcnRdJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy51bnNoaWZ0KG5vZGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW5lcnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChpbmVydEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRJbmVydChpbmVydEVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgfSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH0sIF90aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICE9PSAnaW5lcnQnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqL3JlY29yZC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdmFyIGluZXJ0ID0gdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnaW5lcnQnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRJbmVydCh0YXJnZXQsIGluZXJ0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gSW5lcnRNYW5hZ2VyO1xuICAgIH0oKTtcblxuICAgIC8qKlxuICAgICAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIGNvbXBvc2VkIHRyZWUgZnJvbSB8bm9kZXwuXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqIEBwYXJhbSB7KGZ1bmN0aW9uICghRWxlbWVudCkpPX0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIGVsZW1lbnQgdHJhdmVyc2VkLFxuICAgICAqICAgICBiZWZvcmUgZGVzY2VuZGluZyBpbnRvIGNoaWxkIG5vZGVzLlxuICAgICAqIEBwYXJhbSB7P1NoYWRvd1Jvb3Q9fSBzaGFkb3dSb290QW5jZXN0b3IgVGhlIG5lYXJlc3QgU2hhZG93Um9vdCBhbmNlc3RvciwgaWYgYW55LlxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBjb21wb3NlZFRyZWVXYWxrKG5vZGUsIGNhbGxiYWNrLCBzaGFkb3dSb290QW5jZXN0b3IpIHtcbiAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi9ub2RlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlc2NlbmQgaW50byBub2RlOlxuICAgICAgICAvLyBJZiBpdCBoYXMgYSBTaGFkb3dSb290LCBpZ25vcmUgYWxsIGNoaWxkIGVsZW1lbnRzIC0gdGhlc2Ugd2lsbCBiZSBwaWNrZWRcbiAgICAgICAgLy8gdXAgYnkgdGhlIDxjb250ZW50PiBvciA8c2hhZG93PiBlbGVtZW50cy4gRGVzY2VuZCBzdHJhaWdodCBpbnRvIHRoZVxuICAgICAgICAvLyBTaGFkb3dSb290LlxuICAgICAgICB2YXIgc2hhZG93Um9vdCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL2VsZW1lbnQuc2hhZG93Um9vdDtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKHNoYWRvd1Jvb3QsIGNhbGxiYWNrLCBzaGFkb3dSb290KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCBpcyBhIDxjb250ZW50PiBlbGVtZW50LCBkZXNjZW5kIGludG8gZGlzdHJpYnV0ZWQgZWxlbWVudHMgLSB0aGVzZVxuICAgICAgICAvLyBhcmUgZWxlbWVudHMgZnJvbSBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCB3aGljaCBhcmUgcmVuZGVyZWQgaW5zaWRlIHRoZVxuICAgICAgICAvLyBzaGFkb3cgRE9NLlxuICAgICAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnQgPSAvKiogQHR5cGUgeyFIVE1MQ29udGVudEVsZW1lbnR9ICovZWxlbWVudDtcbiAgICAgICAgICAvLyBWZXJpZmllcyBpZiBTaGFkb3dEb20gdjAgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBkaXN0cmlidXRlZE5vZGVzID0gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzID8gY29udGVudC5nZXREaXN0cmlidXRlZE5vZGVzKCkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbXBvc2VkVHJlZVdhbGsoZGlzdHJpYnV0ZWROb2Rlc1tpXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGl0IGlzIGEgPHNsb3Q+IGVsZW1lbnQsIGRlc2NlbmQgaW50byBhc3NpZ25lZCBub2RlcyAtIHRoZXNlXG4gICAgICAgIC8vIGFyZSBlbGVtZW50cyBmcm9tIG91dHNpZGUgdGhlIHNoYWRvdyByb290IHdoaWNoIGFyZSByZW5kZXJlZCBpbnNpZGUgdGhlXG4gICAgICAgIC8vIHNoYWRvdyBET00uXG4gICAgICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PSAnc2xvdCcpIHtcbiAgICAgICAgICB2YXIgc2xvdCA9IC8qKiBAdHlwZSB7IUhUTUxTbG90RWxlbWVudH0gKi9lbGVtZW50O1xuICAgICAgICAgIC8vIFZlcmlmeSBpZiBTaGFkb3dEb20gdjEgaXMgc3VwcG9ydGVkLlxuICAgICAgICAgIHZhciBfZGlzdHJpYnV0ZWROb2RlcyA9IHNsb3QuYXNzaWduZWROb2RlcyA/IHNsb3QuYXNzaWduZWROb2Rlcyh7IGZsYXR0ZW46IHRydWUgfSkgOiBbXTtcbiAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Rpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBjb21wb3NlZFRyZWVXYWxrKF9kaXN0cmlidXRlZE5vZGVzW19pXSwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCBpcyBuZWl0aGVyIHRoZSBwYXJlbnQgb2YgYSBTaGFkb3dSb290LCBhIDxjb250ZW50PiBlbGVtZW50LCBhIDxzbG90PlxuICAgICAgLy8gZWxlbWVudCwgbm9yIGEgPHNoYWRvdz4gZWxlbWVudCByZWN1cnNlIG5vcm1hbGx5LlxuICAgICAgdmFyIGNoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGNoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY29tcG9zZWRUcmVlV2FsayhjaGlsZCwgY2FsbGJhY2ssIHNoYWRvd1Jvb3RBbmNlc3Rvcik7XG4gICAgICAgIGNoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHN0eWxlIGVsZW1lbnQgdG8gdGhlIG5vZGUgY29udGFpbmluZyB0aGUgaW5lcnQgc3BlY2lmaWMgc3R5bGVzXG4gICAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEluZXJ0U3R5bGUobm9kZSkge1xuICAgICAgaWYgKG5vZGUucXVlcnlTZWxlY3Rvcignc3R5bGUjaW5lcnQtc3R5bGUsIGxpbmsjaW5lcnQtc3R5bGUnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpbmVydC1zdHlsZScpO1xuICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSAnXFxuJyArICdbaW5lcnRdIHtcXG4nICsgJyAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuJyArICcgIGN1cnNvcjogZGVmYXVsdDtcXG4nICsgJ31cXG4nICsgJ1xcbicgKyAnW2luZXJ0XSwgW2luZXJ0XSAqIHtcXG4nICsgJyAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJyAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbicgKyAnICB1c2VyLXNlbGVjdDogbm9uZTtcXG4nICsgJ31cXG4nO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5lcnQnKSkge1xuICAgICAgLyoqIEB0eXBlIHshSW5lcnRNYW5hZ2VyfSAqL1xuICAgICAgdmFyIGluZXJ0TWFuYWdlciA9IG5ldyBJbmVydE1hbmFnZXIoZG9jdW1lbnQpO1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdpbmVydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqIEB0aGlzIHshRWxlbWVudH0gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdpbmVydCcpO1xuICAgICAgICB9LFxuICAgICAgICAvKiogQHRoaXMgeyFFbGVtZW50fSAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldChpbmVydCkge1xuICAgICAgICAgIGluZXJ0TWFuYWdlci5zZXRJbmVydCh0aGlzLCBpbmVydCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcblxufSkpKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4oKCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgcHJvcGVydGllcyAqL1xuICAgIGNvbnN0IF9ibG9ja2luZ0VsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2FscmVhZHlJbmVydEVsZW1lbnRzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX3RvcEVsUGFyZW50cyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zaWJsaW5nc1RvUmVzdG9yZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9wYXJlbnRNTyA9IFN5bWJvbCgpO1xuICAgIC8qIFN5bWJvbHMgZm9yIHByaXZhdGUgc3RhdGljIG1ldGhvZHMgKi9cbiAgICBjb25zdCBfdG9wQ2hhbmdlZCA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9zd2FwSW5lcnRlZFNpYmxpbmcgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfaW5lcnRTaWJsaW5ncyA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9yZXN0b3JlSW5lcnRlZFNpYmxpbmdzID0gU3ltYm9sKCk7XG4gICAgY29uc3QgX2dldFBhcmVudHMgPSBTeW1ib2woKTtcbiAgICBjb25zdCBfZ2V0RGlzdHJpYnV0ZWRDaGlsZHJlbiA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9pc0luZXJ0YWJsZSA9IFN5bWJvbCgpO1xuICAgIGNvbnN0IF9oYW5kbGVNdXRhdGlvbnMgPSBTeW1ib2woKTtcbiAgICBjbGFzcyBCbG9ja2luZ0VsZW1lbnRzSW1wbCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgYmxvY2tpbmcgZWxlbWVudHMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2FdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgcGFyZW50cyBvZiB0aGUgdG9wIGVsZW1lbnQsIGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAqIGl0c2VsZiB1cCB0byBib2R5LiBXaGVuIHRvcCBjaGFuZ2VzLCB0aGUgb2xkIHRvcCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAgICAgICAgICogZnJvbSB0aGUgZG9jdW1lbnQsIHNvIHdlIG5lZWQgdG8gbWVtb2l6ZSB0aGUgaW5lcnRlZCBwYXJlbnRzJyBzaWJsaW5nc1xuICAgICAgICAgICAgICogaW4gb3JkZXIgdG8gcmVzdG9yZSB0aGVpciBpbmVydGVuZXNzIHdoZW4gdG9wIGNoYW5nZXMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2JdID0gW107XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVsZW1lbnRzIHRoYXQgYXJlIGFscmVhZHkgaW5lcnQgYmVmb3JlIHRoZSBmaXJzdCBibG9ja2luZyBlbGVtZW50IGlzXG4gICAgICAgICAgICAgKiBwdXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXNbX2NdID0gbmV3IFNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9yaWdpbmFsIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKHRoaXNbX3RvcEVsUGFyZW50c10pO1xuICAgICAgICAgICAgLy8gTm90ZSB3ZSBkb24ndCB3YW50IHRvIG1ha2UgdGhlc2UgcHJvcGVydGllcyBudWxsYWJsZSBvbiB0aGUgY2xhc3MsXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGVuIHdlJ2QgbmVlZCBub24tbnVsbCBjYXN0cyBpbiBtYW55IHBsYWNlcy4gQ2FsbGluZyBhIG1ldGhvZCBvblxuICAgICAgICAgICAgLy8gYSBCbG9ja2luZ0VsZW1lbnRzIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGVzdHJ1Y3RvciB3aWxsIHJlc3VsdCBpbiBhblxuICAgICAgICAgICAgLy8gZXhjZXB0aW9uLlxuICAgICAgICAgICAgY29uc3QgbnVsbGFibGUgPSB0aGlzO1xuICAgICAgICAgICAgbnVsbGFibGVbX2Jsb2NraW5nRWxlbWVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW190b3BFbFBhcmVudHNdID0gbnVsbDtcbiAgICAgICAgICAgIG51bGxhYmxlW19hbHJlYWR5SW5lcnRFbGVtZW50c10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGdldCB0b3AoKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtcyA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1zW2VsZW1zLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gdGhpcy50b3ApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgaXQgZnJvbSB0aGUgc3RhY2ssIHdlJ2xsIGJyaW5nIGl0IHRvIHRoZSB0b3AuXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXNbX3RvcENoYW5nZWRdKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpc1tfYmxvY2tpbmdFbGVtZW50c10ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmUoZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaSA9IHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAvLyBUb3AgY2hhbmdlZCBvbmx5IGlmIHRoZSByZW1vdmVkIGVsZW1lbnQgd2FzIHRoZSB0b3AgZWxlbWVudC5cbiAgICAgICAgICAgIGlmIChpID09PSB0aGlzW19ibG9ja2luZ0VsZW1lbnRzXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzW190b3BDaGFuZ2VkXSh0aGlzLnRvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBwb3AoKSB7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSB0aGlzLnRvcDtcbiAgICAgICAgICAgIHRvcCAmJiB0aGlzLnJlbW92ZSh0b3ApO1xuICAgICAgICAgICAgcmV0dXJuIHRvcDtcbiAgICAgICAgfVxuICAgICAgICBoYXMoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbX2Jsb2NraW5nRWxlbWVudHNdLmluZGV4T2YoZWxlbWVudCkgIT09IC0xO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIGBpbmVydGAgdG8gYWxsIGRvY3VtZW50IGVsZW1lbnRzIGV4Y2VwdCB0aGUgbmV3IHRvcCBlbGVtZW50LCBpdHNcbiAgICAgICAgICogcGFyZW50cywgYW5kIGl0cyBkaXN0cmlidXRlZCBjb250ZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgWyhfYSA9IF9ibG9ja2luZ0VsZW1lbnRzLCBfYiA9IF90b3BFbFBhcmVudHMsIF9jID0gX2FscmVhZHlJbmVydEVsZW1lbnRzLCBfdG9wQ2hhbmdlZCldKG5ld1RvcCkge1xuICAgICAgICAgICAgY29uc3QgdG9LZWVwSW5lcnQgPSB0aGlzW19hbHJlYWR5SW5lcnRFbGVtZW50c107XG4gICAgICAgICAgICBjb25zdCBvbGRQYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIC8vIE5vIG5ldyB0b3AsIHJlc2V0IG9sZCB0b3AgaWYgYW55LlxuICAgICAgICAgICAgaWYgKCFuZXdUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzW19yZXN0b3JlSW5lcnRlZFNpYmxpbmdzXShvbGRQYXJlbnRzKTtcbiAgICAgICAgICAgICAgICB0b0tlZXBJbmVydC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXNbX3RvcEVsUGFyZW50c10gPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdQYXJlbnRzID0gdGhpc1tfZ2V0UGFyZW50c10obmV3VG9wKTtcbiAgICAgICAgICAgIC8vIE5ldyB0b3AgaXMgbm90IGNvbnRhaW5lZCBpbiB0aGUgbWFpbiBkb2N1bWVudCFcbiAgICAgICAgICAgIGlmIChuZXdQYXJlbnRzW25ld1BhcmVudHMubGVuZ3RoIC0gMV0ucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCdOb24tY29ubmVjdGVkIGVsZW1lbnQgY2Fubm90IGJlIGEgYmxvY2tpbmcgZWxlbWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzdCBoZXJlIGJlY2F1c2Ugd2Uga25vdyB3ZSdsbCBjYWxsIF9pbmVydFNpYmxpbmdzIG9uIG5ld1BhcmVudHNcbiAgICAgICAgICAgIC8vIGJlbG93LlxuICAgICAgICAgICAgdGhpc1tfdG9wRWxQYXJlbnRzXSA9IG5ld1BhcmVudHM7XG4gICAgICAgICAgICBjb25zdCB0b1NraXAgPSB0aGlzW19nZXREaXN0cmlidXRlZENoaWxkcmVuXShuZXdUb3ApO1xuICAgICAgICAgICAgLy8gTm8gcHJldmlvdXMgdG9wIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAoIW9sZFBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tfaW5lcnRTaWJsaW5nc10obmV3UGFyZW50cywgdG9Ta2lwLCB0b0tlZXBJbmVydCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSBvbGRQYXJlbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgaiA9IG5ld1BhcmVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIEZpbmQgY29tbW9uIHBhcmVudC4gSW5kZXggMCBpcyB0aGUgZWxlbWVudCBpdHNlbGYgKHNvIHN0b3AgYmVmb3JlIGl0KS5cbiAgICAgICAgICAgIHdoaWxlIChpID4gMCAmJiBqID4gMCAmJiBvbGRQYXJlbnRzW2ldID09PSBuZXdQYXJlbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVwIHRoZSBwYXJlbnRzIHRyZWUgdGhlcmUgYXJlIDIgZWxlbWVudHMgdGhhdCBhcmUgc2libGluZ3MsIHN3YXBcbiAgICAgICAgICAgIC8vIHRoZSBpbmVydGVkIHNpYmxpbmcuXG4gICAgICAgICAgICBpZiAob2xkUGFyZW50c1tpXSAhPT0gbmV3UGFyZW50c1tqXSkge1xuICAgICAgICAgICAgICAgIHRoaXNbX3N3YXBJbmVydGVkU2libGluZ10ob2xkUGFyZW50c1tpXSwgbmV3UGFyZW50c1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBwYXJlbnRzIHNpYmxpbmdzIGluZXJ0bmVzcy5cbiAgICAgICAgICAgIGkgPiAwICYmIHRoaXNbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKG9sZFBhcmVudHMuc2xpY2UoMCwgaSkpO1xuICAgICAgICAgICAgLy8gTWFrZSBuZXcgcGFyZW50cyBzaWJsaW5ncyBpbmVydC5cbiAgICAgICAgICAgIGogPiAwICYmIHRoaXNbX2luZXJ0U2libGluZ3NdKG5ld1BhcmVudHMuc2xpY2UoMCwgaiksIHRvU2tpcCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN3YXBzIGluZXJ0bmVzcyBiZXR3ZWVuIHR3byBzaWJsaW5nIGVsZW1lbnRzLlxuICAgICAgICAgKiBTZXRzIHRoZSBwcm9wZXJ0eSBgaW5lcnRgIG92ZXIgdGhlIGF0dHJpYnV0ZSBzaW5jZSB0aGUgaW5lcnQgc3BlY1xuICAgICAgICAgKiBkb2Vzbid0IHNwZWNpZnkgaWYgaXQgc2hvdWxkIGJlIHJlZmxlY3RlZC5cbiAgICAgICAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNpbmVydFxuICAgICAgICAgKi9cbiAgICAgICAgW19zd2FwSW5lcnRlZFNpYmxpbmddKG9sZEluZXJ0LCBuZXdJbmVydCkge1xuICAgICAgICAgICAgY29uc3Qgc2libGluZ3NUb1Jlc3RvcmUgPSBvbGRJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgLy8gb2xkSW5lcnQgaXMgbm90IGNvbnRhaW5lZCBpbiBzaWJsaW5ncyB0byByZXN0b3JlLCBzbyB3ZSBoYXZlIHRvIGNoZWNrXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGluZXJ0YWJsZSBhbmQgaWYgYWxyZWFkeSBpbmVydC5cbiAgICAgICAgICAgIGlmICh0aGlzW19pc0luZXJ0YWJsZV0ob2xkSW5lcnQpICYmICFvbGRJbmVydC5pbmVydCkge1xuICAgICAgICAgICAgICAgIG9sZEluZXJ0LmluZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5hZGQob2xkSW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgbmV3SW5lcnQgd2FzIGFscmVhZHkgYmV0d2VlbiB0aGUgc2libGluZ3MgdG8gcmVzdG9yZSwgaXQgbWVhbnMgaXQgaXNcbiAgICAgICAgICAgIC8vIGluZXJ0YWJsZSBhbmQgbXVzdCBiZSByZXN0b3JlZC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nc1RvUmVzdG9yZS5oYXMobmV3SW5lcnQpKSB7XG4gICAgICAgICAgICAgICAgbmV3SW5lcnQuaW5lcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaWJsaW5nc1RvUmVzdG9yZS5kZWxldGUobmV3SW5lcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SW5lcnRbX3BhcmVudE1PXSA9IG9sZEluZXJ0W19wYXJlbnRNT107XG4gICAgICAgICAgICBuZXdJbmVydFtfc2libGluZ3NUb1Jlc3RvcmVdID0gc2libGluZ3NUb1Jlc3RvcmU7XG4gICAgICAgICAgICBvbGRJbmVydFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgb2xkSW5lcnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVzdG9yZXMgb3JpZ2luYWwgaW5lcnRuZXNzIHRvIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX3Jlc3RvcmVJbmVydGVkU2libGluZ3NdKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IGVsZW1lbnRbX3BhcmVudE1PXTtcbiAgICAgICAgICAgICAgICBtby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudFtfc2libGluZ3NUb1Jlc3RvcmVdO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2libGluZyBvZiBzaWJsaW5ncykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nLmluZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsZW1lbnRbX3NpYmxpbmdzVG9SZXN0b3JlXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogSW5lcnRzIHRoZSBzaWJsaW5ncyBvZiB0aGUgZWxlbWVudHMgZXhjZXB0IHRoZSBlbGVtZW50cyB0byBza2lwLiBTdG9yZXNcbiAgICAgICAgICogdGhlIGluZXJ0ZWQgc2libGluZ3MgaW50byB0aGUgZWxlbWVudCdzIHN5bWJvbCBgX3NpYmxpbmdzVG9SZXN0b3JlYC5cbiAgICAgICAgICogUGFzcyBgdG9LZWVwSW5lcnRgIHRvIGNvbGxlY3QgdGhlIGFscmVhZHkgaW5lcnQgZWxlbWVudHMuXG4gICAgICAgICAqIFNldHMgdGhlIHByb3BlcnR5IGBpbmVydGAgb3ZlciB0aGUgYXR0cmlidXRlIHNpbmNlIHRoZSBpbmVydCBzcGVjXG4gICAgICAgICAqIGRvZXNuJ3Qgc3BlY2lmeSBpZiBpdCBzaG91bGQgYmUgcmVmbGVjdGVkLlxuICAgICAgICAgKiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbnRlcmFjdGlvbi5odG1sI2luZXJ0XG4gICAgICAgICAqL1xuICAgICAgICBbX2luZXJ0U2libGluZ3NdKGVsZW1lbnRzLCB0b1NraXAsIHRvS2VlcEluZXJ0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAvLyBBc3N1bWUgZWxlbWVudCBpcyBub3QgYSBEb2N1bWVudCwgc28gaXQgbXVzdCBoYXZlIGEgcGFyZW50Tm9kZS5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IGNoaWxkcmVuW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBpbnB1dCBlbGVtZW50LCBpZiBub3QgaW5lcnRhYmxlIG9yIHRvIGJlIHNraXBwZWQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50IHx8ICF0aGlzW19pc0luZXJ0YWJsZV0oc2libGluZykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0b1NraXAgJiYgdG9Ta2lwLmhhcyhzaWJsaW5nKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBjb2xsZWN0ZWQgc2luY2UgYWxyZWFkeSBpbmVydGVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaWJsaW5ncyB0aGF0IHdlcmUgaW5lcnRlZC5cbiAgICAgICAgICAgICAgICBlbGVtZW50W19zaWJsaW5nc1RvUmVzdG9yZV0gPSBpbmVydGVkU2libGluZ3M7XG4gICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZSBvbmx5IGltbWVkaWF0ZSBjaGlsZHJlbiBtdXRhdGlvbnMgb24gdGhlIHBhcmVudC5cbiAgICAgICAgICAgICAgICBjb25zdCBtbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXNbX2hhbmRsZU11dGF0aW9uc10uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFtfcGFyZW50TU9dID0gbW87XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFRvT2JzZXJ2ZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyB0aGUgU2hhZHlET00gcG9seWZpbGwsIHRoZW4gb3VyIHBhcmVudCBjb3VsZCBiZSBhXG4gICAgICAgICAgICAgICAgLy8gc2hhZHkgcm9vdCwgd2hpY2ggaXMgYW4gb2JqZWN0IHRoYXQgYWN0cyBsaWtlIGEgU2hhZG93Um9vdCwgYnV0IGlzbid0XG4gICAgICAgICAgICAgICAgLy8gYWN0dWFsbHkgYSBub2RlIGluIHRoZSByZWFsIERPTS4gT2JzZXJ2ZSB0aGUgcmVhbCBET00gcGFyZW50IGluc3RlYWQuXG4gICAgICAgICAgICAgICAgY29uc3QgbWF5YmVTaGFkeVJvb3QgPSBwYXJlbnRUb09ic2VydmU7XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlU2hhZHlSb290Ll9fc2hhZHkgJiYgbWF5YmVTaGFkeVJvb3QuaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUb09ic2VydmUgPSBtYXliZVNoYWR5Um9vdC5ob3N0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtby5vYnNlcnZlKHBhcmVudFRvT2JzZXJ2ZSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXMgbmV3bHkgYWRkZWQvcmVtb3ZlZCBub2RlcyBieSB0b2dnbGluZyB0aGVpciBpbmVydG5lc3MuXG4gICAgICAgICAqIEl0IGFsc28gY2hlY2tzIGlmIHRoZSBjdXJyZW50IHRvcCBCbG9ja2luZyBFbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQsXG4gICAgICAgICAqIG5vdGlmeWluZyBhbmQgcmVtb3ZpbmcgaXQuXG4gICAgICAgICAqL1xuICAgICAgICBbX2hhbmRsZU11dGF0aW9uc10obXV0YXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRzID0gdGhpc1tfdG9wRWxQYXJlbnRzXTtcbiAgICAgICAgICAgIGNvbnN0IHRvS2VlcEluZXJ0ID0gdGhpc1tfYWxyZWFkeUluZXJ0RWxlbWVudHNdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdGFyZ2V0IGlzIGEgc2hhZG93Um9vdCwgZ2V0IGl0cyBob3N0IGFzIHdlIHNraXAgc2hhZG93Um9vdHMgd2hlblxuICAgICAgICAgICAgICAgIC8vIGNvbXB1dGluZyBfdG9wRWxQYXJlbnRzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldC5ob3N0IHx8IG11dGF0aW9uLnRhcmdldDtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkgP1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudHMuaW5kZXhPZih0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZXJ0ZWRDaGlsZCA9IHBhcmVudHNbaWR4IC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5lcnRlZFNpYmxpbmdzID0gaW5lcnRlZENoaWxkW19zaWJsaW5nc1RvUmVzdG9yZV07XG4gICAgICAgICAgICAgICAgLy8gVG8gcmVzdG9yZS5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLnJlbW92ZWROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaWJsaW5nID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2libGluZyA9PT0gaW5lcnRlZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ0RldGVjdGVkIHJlbW92YWwgb2YgdGhlIHRvcCBCbG9ja2luZyBFbGVtZW50LicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5lcnRlZFNpYmxpbmdzLmhhcyhzaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRlZFNpYmxpbmdzLmRlbGV0ZShzaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUbyBpbmVydC5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2libGluZyA9IG11dGF0aW9uLmFkZGVkTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpc1tfaXNJbmVydGFibGVdKHNpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwSW5lcnQgJiYgc2libGluZy5pbmVydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9LZWVwSW5lcnQuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZy5pbmVydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGVkU2libGluZ3MuYWRkKHNpYmxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIGlmIHRoZSBlbGVtZW50IGlzIGluZXJ0YWJsZS5cbiAgICAgICAgICovXG4gICAgICAgIFtfaXNJbmVydGFibGVdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSA9PT0gL14oc3R5bGV8dGVtcGxhdGV8c2NyaXB0KSQvLnRlc3QoZWxlbWVudC5sb2NhbE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIG5ld1BhcmVudHMgb2YgYW4gZWxlbWVudCwgc3RhcnRpbmcgZnJvbSBlbGVtZW50XG4gICAgICAgICAqIChpbmNsdWRlZCkgdXAgdG8gYGRvY3VtZW50LmJvZHlgIChleGNsdWRlZCkuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldFBhcmVudHNdKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIC8vIFN0b3AgdG8gYm9keS5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBTa2lwIHNoYWRvdyByb290cy5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBTaGFkb3dEb20gdjFcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29sbGVjdCBzbG90cyBmcm9tIGRlZXBlc3Qgc2xvdCB0byB0b3AuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ID0gY3VycmVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgc2VhcmNoIG9uIHRoZSB0b3Agc2xvdC5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBkaXN0cmlidXRlZCBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCdzIHNoYWRvdyByb290LlxuICAgICAgICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGEgc2hhZG93IHJvb3QuXG4gICAgICAgICAqL1xuICAgICAgICBbX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW5dKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgbGV0IGo7XG4gICAgICAgICAgICBsZXQgbm9kZXM7XG4gICAgICAgICAgICBjb25zdCBzbG90cyA9IHNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnc2xvdCcpO1xuICAgICAgICAgICAgaWYgKHNsb3RzLmxlbmd0aCAmJiBzbG90c1swXS5hc3NpZ25lZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNsb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzID0gc2xvdHNbaV0uYXNzaWduZWROb2Rlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5vZGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZXNbal0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFkZChub2Rlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byBzZWFyY2ggZm9yIDxjb250ZW50Pi5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuJGJsb2NraW5nRWxlbWVudHMgPVxuICAgICAgICBuZXcgQmxvY2tpbmdFbGVtZW50c0ltcGwoKTtcbn0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9ja2luZy1lbGVtZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgY2xvbmVFbGVtZW50LCBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTG9naWNhbERpcmVjdGlvbiwgdXNlTWVyZ2VkUHJvcHMsIHVzZVJlZkVsZW1lbnQgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBzaG93LCBwaGFzZSkge1xuICAgIGlmIChwaGFzZSlcbiAgICAgICAgcmV0dXJuIGAke2NsYXNzQmFzZSB8fCBcInRyYW5zaXRpb25cIn0tJHtzaG93fS0ke3BoYXNlfWA7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gYCR7Y2xhc3NCYXNlIHx8IFwidHJhbnNpdGlvblwifS0ke3Nob3d9YDtcbn1cbmxldCBkdW1teTtcbmZ1bmN0aW9uIGZvcmNlUmVmbG93KGUpIHtcbiAgICAvLyBUcnkgcmVhbGx5IGhhcmQgdG8gbWFrZSBzdXJlIHRoaXMgaXNuJ3Qgb3B0aW1pemVkIG91dCBieSBhbnl0aGluZy5cbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxuICAgIGR1bW15ID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gZTtcbn1cbi8qKlxuICogQSBob29rIHRoYXQgYWRkcyAmIHJlbW92ZXMgY2xhc3MgbmFtZXMgaW4gYSB3YXkgdGhhdCBmYWNpbGl0YXRlcyBwcm9wZXIgdHJhbnNpdGlvbnMuXG4gKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IGNvbnRhaW5zIHRoZSBwcm9wcyByZWxhdGVkIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uLlxuICpcbiAqIFRoZSBzZWNvbmQgYXJndW1lbnQgY29udGFpbnMgYW55IG90aGVyIHByb3BzIHlvdSBtaWdodCB3YW50IG1lcmdlZCBpbnRvIHRoZSBmaW5hbCBwcm9kdWN0ICh0aGVzZSBhcmUgbm90IHJlYWQgb3IgbWFuaXB1bGF0ZWQgb3IgYW55dGhpbmcgLS0gaXQncyBwdXJlbHkgc2hvcnRoYW5kIGFuZCBjYW4gYmUgb21pdHRlZCB3aXRoIGB7fWAgYW5kIHRoZW4geW91ciBvd24gYHVzZU1lcmdlZFByb3BzYCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgbWVhc3VyZSwgYW5pbWF0ZU9uTW91bnQsIGNsYXNzQmFzZSwgb25UcmFuc2l0aW9uVXBkYXRlLCBleGl0VmlzaWJpbGl0eSwgZHVyYXRpb24sIHNob3csIHJlZiB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCB7IGdldEVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCh7fSk7XG4gICAgY29uc3QgW3BoYXNlLCBzZXRQaGFzZV0gPSB1c2VTdGF0ZShhbmltYXRlT25Nb3VudCA/IFwiaW5pdFwiIDogbnVsbCk7XG4gICAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKHNob3cgPT0gbnVsbCA/IG51bGwgOiBzaG93ID8gXCJlbnRlclwiIDogXCJleGl0XCIpO1xuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZUhlaWdodCwgc2V0U3VyZmFjZUhlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc3VyZmFjZVgsIHNldFN1cmZhY2VYXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdXaWR0aCwgc2V0VHJhbnNpdGlvbmluZ1dpZHRoXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nSGVpZ2h0LCBzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3RyYW5zaXRpb25pbmdZLCBzZXRUcmFuc2l0aW9uaW5nWV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9naWNhbERpcmVjdGlvbkluZm8sIHNldExvZ2ljYWxEaXJlY3Rpb25JbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHsgZ2V0TG9naWNhbERpcmVjdGlvbkluZm8sIHVzZUxvZ2ljYWxEaXJlY3Rpb25Qcm9wcyB9ID0gdXNlTG9naWNhbERpcmVjdGlvbih7IG9uTG9naWNhbERpcmVjdGlvbkNoYW5nZTogc2V0TG9naWNhbERpcmVjdGlvbkluZm8gfSk7XG4gICAgY29uc3Qgb25UcmFuc2l0aW9uVXBkYXRlUmVmID0gdXNlUmVmKG9uVHJhbnNpdGlvblVwZGF0ZSk7XG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xuICAgIGNvbnN0IGRpcmVjdGlvblJlZiA9IHVzZVJlZihkaXJlY3Rpb24pO1xuICAgIGNvbnN0IGR1cmF0aW9uUmVmID0gdXNlUmVmKGR1cmF0aW9uKTtcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgdG9vRWFybHlWYWx1ZVJlZiA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0b29MYXRlVGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGdldEVsZW1lbnQoKSAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHNldFBoYXNlKFwiZmluYWxpemVcIik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQgPSBvblRyYW5zaXRpb25VcGRhdGU7IH0sIFtvblRyYW5zaXRpb25VcGRhdGVdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBwaGFzZVJlZi5jdXJyZW50ID0gcGhhc2U7IH0sIFtwaGFzZV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZHVyYXRpb25SZWYuY3VycmVudCA9IGR1cmF0aW9uOyB9LCBbZHVyYXRpb25dKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aW9uICYmIHBoYXNlKVxuICAgICAgICAgICAgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQ/LihkaXJlY3Rpb24sIHBoYXNlKTtcbiAgICB9LCBbZGlyZWN0aW9uLCBwaGFzZV0pO1xuICAgIC8vIEV2ZXJ5IHRpbWUgdGhlIHBoYXNlIGNoYW5nZXMgdG8gXCJ0cmFuc2l0aW9uXCIsIGFkZCBvdXIgdHJhbnNpdGlvbiB0aW1lb3V0IHRpbWVvdXRzXG4gICAgLy8gdG8gY2F0Y2ggYW55IHRpbWUgb25UcmFuc2l0aW9uRW5kIGZhaWxzIHRvIHJlcG9ydCBmb3Igd2hhdGV2ZXIgcmVhc29uIHRvIGJlIHNhZmVcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGhhc2UgPT0gXCJ0cmFuc2l0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IGR1cmF0aW9uUmVmLmN1cnJlbnQgPz8gMTAwMDtcbiAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VmFsdWVSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b29MYXRlVGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcImZpbmFsaXplXCIpO1xuICAgICAgICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0b29FYXJseVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgICAgICBpZiAodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICAgIH07XG4gICAgfSwgW3BoYXNlXSk7XG4gICAgLy8gQW55IHRpbWUgXCJzaG93XCIgY2hhbmdlcywgdXBkYXRlIG91ciBkaXJlY3Rpb24gYW5kIHBoYXNlLlxuICAgIC8vIEluIGFkZGl0aW9uLCBtZWFzdXJlIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGlmIHJlcXVlc3RlZC5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBzaG93ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzUGhhc2UgPSBwaGFzZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gU3dhcCBvdXIgZGlyZWN0aW9uXG4gICAgICAgICAgICBpZiAoc2hvdylcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJlbnRlclwiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJleGl0XCIpO1xuICAgICAgICAgICAgc2V0UGhhc2UocHJldmlvdXNQaGFzZSA9PT0gbnVsbCA/IFwiZmluYWxpemVcIiA6IFwiaW5pdFwiKTtcbiAgICAgICAgICAgIGlmIChtZWFzdXJlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VHJhbnNpdGlvbmluZ1koeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzUGhhc2UgPT09IFwiZmluYWxpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBnb2luZyB0byBiZSBtZXNzaW5nIHdpdGggdGhlIGFjdHVhbCBlbGVtZW50J3MgY2xhc3MsIFxuICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSdsbCB3YW50IGFuIGVhc3kgd2F5IHRvIHJlc3RvcmUgaXQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2t1cCA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgJHtjbGFzc0Jhc2V9LWVudGVyYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1pbml0YCwgYCR7Y2xhc3NCYXNlfS1lbnRlci10cmFuc2l0aW9uYCwgYCR7Y2xhc3NCYXNlfS1lbnRlci1maW5hbGl6ZWAsIGAke2NsYXNzQmFzZX0tZXhpdGAsIGAke2NsYXNzQmFzZX0tZXhpdC1pbml0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWV4aXQtZmluYWxpemVgKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVXaXRob3V0VHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gc2l6ZVdpdGhvdXRUcmFuc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlWCh4ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVkoeSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VXaWR0aCh3aWR0aCArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1cmZhY2VIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBiYWNrdXA7XG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtzaG93LCBtZWFzdXJlLCBjbGFzc0Jhc2VdKTtcbiAgICAvLyBBbnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBpbml0LCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIHNjcmVlbiBpcyBwYWludGVkLFxuICAgIC8vIGNoYW5nZSB0aGUgcGhhc2UgdG8gXCJ0cmFuc2l0aW9uXCIgYW5kIHJlLXJlbmRlciAoKS5cbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgICAgICAgICAgaWYgKHBoYXNlID09PSBcImluaXRcIikge1xuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XG4gICAgICAgICAgICAgICAgLy8gTm93IHNldCBvdXIgdHJhbnNpdGlvbiBzdHlsZS5cbiAgICAgICAgICAgICAgICBzZXRQaGFzZShcInRyYW5zaXRpb25cIik7XG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3BoYXNlLCBtZWFzdXJlXSk7XG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbkluZm8/LmlubGluZURpcmVjdGlvbjtcbiAgICBjb25zdCBibG9ja0RpcmVjdGlvbiA9IGxvZ2ljYWxEaXJlY3Rpb25JbmZvPy5ibG9ja0RpcmVjdGlvbjtcbiAgICBjb25zdCB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA9IChpbmxpbmVEaXJlY3Rpb24gPT0gXCJydGxcIiB8fCBpbmxpbmVEaXJlY3Rpb24gPT0gXCJsdHJcIik7XG4gICAgY29uc3Qgc3VyZmFjZUlubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWCA6IHN1cmZhY2VZO1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlV2lkdGggOiBzdXJmYWNlSGVpZ2h0O1xuICAgIGNvbnN0IHN1cmZhY2VCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VIZWlnaHQgOiBzdXJmYWNlV2lkdGg7XG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWSA6IHRyYW5zaXRpb25pbmdYO1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdJbmxpbmVTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nV2lkdGggOiB0cmFuc2l0aW9uaW5nSGVpZ2h0O1xuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XG4gICAgbGV0IGFsbW9zdERvbmUgPSB1c2VSZWZFbGVtZW50UHJvcHModXNlTG9naWNhbERpcmVjdGlvblByb3BzKHtcbiAgICAgICAgcmVmLFxuICAgICAgICBzdHlsZTogcmVtb3ZlRW1wdHkoe1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1kdXJhdGlvbmBdOiBkdXJhdGlvbiA/IGAke2R1cmF0aW9ufW1zYCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS14YF06IHN1cmZhY2VYLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXlgXTogc3VyZmFjZVksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2Utd2lkdGhgXTogc3VyZmFjZVdpZHRoLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWhlaWdodGBdOiBzdXJmYWNlSGVpZ2h0LFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWlubGluZS1pbnNldGBdOiBzdXJmYWNlSW5saW5lSW5zZXQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2staW5zZXRgXTogc3VyZmFjZUJsb2NrSW5zZXQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLXNpemVgXTogc3VyZmFjZUlubGluZVNpemUsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtYmxvY2stc2l6ZWBdOiBzdXJmYWNlQmxvY2tTaXplLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXhgXTogdHJhbnNpdGlvbmluZ1gsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteWBdOiB0cmFuc2l0aW9uaW5nWSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy13aWR0aGBdOiB0cmFuc2l0aW9uaW5nV2lkdGgsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaGVpZ2h0YF06IHRyYW5zaXRpb25pbmdIZWlnaHQsXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLWluc2V0YF06IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1pbnNldGBdOiB0cmFuc2l0aW9uaW5nQmxvY2tJbnNldCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1pbmxpbmUtc2l6ZWBdOiB0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1zaXplYF06IHRyYW5zaXRpb25pbmdCbG9ja1NpemVcbiAgICAgICAgfSksXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZCxcbiAgICAgICAgLi4uKHsgXCJhcmlhLWhpZGRlblwiOiBzaG93ID8gdW5kZWZpbmVkIDogXCJ0cnVlXCIgfSksXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChkaXJlY3Rpb24gJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uKSwgZGlyZWN0aW9uICYmIHBoYXNlICYmIGdldENsYXNzTmFtZShjbGFzc0Jhc2UsIGRpcmVjdGlvbiwgcGhhc2UpLCBleGl0VmlzaWJpbGl0eSA9PSBcInJlbW92ZWRcIiAmJiBgJHtjbGFzc0Jhc2V9LXJlbW92ZWQtb24tZXhpdGAsIGV4aXRWaXNpYmlsaXR5ID09IFwidmlzaWJsZVwiICYmIGAke2NsYXNzQmFzZX0tdmlzaWJsZS1vbi1leGl0YCwgYCR7Y2xhc3NCYXNlfS1pbmxpbmUtZGlyZWN0aW9uLSR7aW5saW5lRGlyZWN0aW9uID8/IFwibHRyXCJ9YCwgYCR7Y2xhc3NCYXNlfS1ibG9jay1kaXJlY3Rpb24tJHtibG9ja0RpcmVjdGlvbiA/PyBcInR0YlwifWApLFxuICAgIH0pKTtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKShhbG1vc3REb25lLCBvdGhlclByb3BzKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5KG9iaikge1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMob2JqKS5maWx0ZXIoKFtfLCB2XSkgPT4gdiAhPSBudWxsKSk7XG59XG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgKndyYXBzIGFuIEhUTUxFbGVtZW50IG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCogYW5kIGFsbG93cyBpdCB0byB1c2UgQ1NTIHRvIHRyYW5zaXRpb24gaW4vb3V0LlxuICogQ29tYmluZXMgdGhlIHByb3BzIHBhc3NlZCB0byBpdCwgdGhlIHByb3BzIGl0cyBjaGlsZCBoYXMsIGFuZCB0aGUgcHJvcHMgbmVlZGVkIGZvciB0aGUgQ1NTIHRyYW5zaXRpb24sIGFuZCBwYXNzZXMgdGhlbVxuICogYWxsIHRvIHRoZSBjaGlsZCBlbGVtZW50IHlvdSBwcm92aWRlLlxuICpcbiAqIFRoaXMgaXMgdGhlIG1vc3QgZ2VuZXJhbCBjb21wb25lbnQgdGhhdCBvdGhlcnMgdXNlIGFzIGEgYmFzZS4gQnkgZGVmYXVsdCwgdGhpcyBjb21wb25lbnQgYnkgaXRzZWxmIGRvZXNuJ3QgYWN0dWFsbHkgYWRkIGFueSBDU1MgY2xhc3NlcyB0aGF0IGFuaW1hdGUgYW55dGhpbmcgKGxpa2Ugb3BhY2l0eSwgZm9yIGV4YW1wbGUpLlxuICogSXQgYWRkcyBjbGFzc2VzIGxpa2UgYHRyYW5zaXRpb24tZW50ZXItZmluYWxpemVgLCBidXQgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBlLmcuIGBmYWRlYCBjbGFzcyB0aGF0IHJlYWN0cyB0byBpdC5cbiAqXG4gKiBVc2UgdGhpcyBpZiB0aGUgb3RoZXIsIG1vcmUgc3BlY2lhbGl6ZWQgVHJhbnNpdGlvbiBjb21wb25lbnRzIGRvbid0IGZpdCB5b3VyIG5lZWRzLlxuICpcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30gey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT48ZGl2PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqIEBleGFtcGxlIGA8VHJhbnNpdGlvbmFibGUgc2hvdz17c2hvd30+PGRpdiB7Li4udXNlQ3JlYXRlRmFkZVByb3BzKC4uLil9PntjaGlsZHJlbn08L2Rpdj48L1RyYW5zaXRpb25hYmxlPmBcbiAqL1xuZXhwb3J0IGNvbnN0IFRyYW5zaXRpb25hYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gVHJhbnNpdGlvbih7IGNoaWxkcmVuOiBjaGlsZCwgZHVyYXRpb24sIGNsYXNzQmFzZSwgbWVhc3VyZSwgZXhpdFZpc2liaWxpdHksIHNob3csIG9uVHJhbnNpdGlvblVwZGF0ZSwgYW5pbWF0ZU9uTW91bnQsIGNoaWxkTW91bnRCZWhhdmlvciwgLi4ucHJvcHMgfSwgcikge1xuICAgIGNvbnN0IFtoYXNTaG93bk9uY2UsIHNldEhhc1Nob3duT25jZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2hvdWxkU2V0SGFzU2hvd25PbmNlID0gKGhhc1Nob3duT25jZSA9PT0gZmFsc2UgJiYgY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LW9uLXNob3dcIiAmJiBzaG93ID09PSB0cnVlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoc2hvdWxkU2V0SGFzU2hvd25PbmNlKVxuICAgICAgICBzZXRIYXNTaG93bk9uY2UodHJ1ZSk7IH0sIFtzaG91bGRTZXRIYXNTaG93bk9uY2VdKTtcbiAgICBpZiAoY2hpbGRNb3VudEJlaGF2aW9yID09PSBcIm1vdW50LXdoZW4tc2hvd2luZ1wiICYmICFzaG93KVxuICAgICAgICBjaGlsZCA9IGgoXCJkaXZcIiwgbnVsbCk7XG4gICAgaWYgKGNoaWxkTW91bnRCZWhhdmlvciA9PT0gXCJtb3VudC1vbi1zaG93XCIgJiYgIXNob3cgJiYgaGFzU2hvd25PbmNlID09PSBmYWxzZSlcbiAgICAgICAgY2hpbGQgPSBoKFwiZGl2XCIsIG51bGwpO1xuICAgIGlmICghY2hpbGRJc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIFRyYW5zaXRpb25hYmxlIGNvbXBvbmVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgY29tcG9uZW50IGNoaWxkIChlLmcuIGEgPGRpdj4sIGJ1dCBub3QgXFxcImEgc3RyaW5nXFxcIikuXCIpO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzKHsgY2xhc3NCYXNlLCBkdXJhdGlvbiwgbWVhc3VyZSwgc2hvdywgYW5pbWF0ZU9uTW91bnQsIG9uVHJhbnNpdGlvblVwZGF0ZSwgcmVmOiByLCBleGl0VmlzaWJpbGl0eSB9LCBwcm9wcyk7XG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHMoKSh0cmFuc2l0aW9uUHJvcHMsIHsgLi4uY2hpbGQucHJvcHMsIHJlZjogY2hpbGQucmVmIH0pO1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlZFdpdGhDaGlsZHJlbik7XG59KTtcbmZ1bmN0aW9uIGNoaWxkSXNWTm9kZShjaGlsZCkge1xuICAgIGlmICghY2hpbGQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkICE9IFwib2JqZWN0XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFwicHJvcHNcIiBpbiBjaGlsZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgQ2xpcCB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChgJHtjbGFzc0Jhc2V9LWNsaXBgKSxcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1pbmxpbmVgXTogKGNsaXBPcmlnaW5JbmxpbmUgPz8gY2xpcE9yaWdpbiA/PyAwLjUpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW9yaWdpbi1ibG9ja2BdOiAoY2xpcE9yaWdpbkJsb2NrID8/IGNsaXBPcmlnaW4gPz8gMCksXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jbGlwLW1pbi1ibG9ja2BdOiAoY2xpcE1pbkJsb2NrID8/IGNsaXBNaW4gPz8gMCksXG4gICAgICAgIH0sXG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG47XG5leHBvcnQgY29uc3QgQ2xpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXAoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUNsaXBQcm9wcyh7IGNsYXNzQmFzZSwgY2xpcE9yaWdpbiwgY2xpcE9yaWdpbklubGluZSwgY2xpcE9yaWdpbkJsb2NrLCBjbGlwTWluLCBjbGlwTWluSW5saW5lLCBjbGlwTWluQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mYWRlLW1heGBdOiAoZmFkZU1heCA/PyAxKSxcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgRmFkZSBlZmZlY3QuXG4gKlxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcbiAqIHRoZXJlIHdpbGwgYmUgc29tZSBkdXBsaWNhdGUgY29kZSBydW4gYXMgdHdvIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnRzIGVuZCB1cCBvcGVyYXRpbmcgb24gdGhlIHNhbWUgZWxlbWVudC5cbiAqIEl0J3MgZ2VuZXJhbGx5IHJlY29tbWVuZGVkIHRvIGVpdGhlciB1c2UgdGhlIGNvbXBvbmVudHMgdGhhdCBpbmNsdWRlIGEgY29tYmluZWQgZmFkZSBlZmZlY3QsXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBDbGlwIH0gZnJvbSBcIi4vY2xpcFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG47XG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChDbGlwLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cbiAqXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cbiAqXG4gKiBAZXhhbXBsZSA8VHJhbnNpdGlvbmFibGUgbWVhc3VyZSB7Li4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyguLi4pfSAvPlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBtZWFzdXJlOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tY29sbGFwc2VgLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1jb2xsYXBzZS1taW4tYmxvY2tgXTogbWluQmxvY2tTaXplID8/IDBcbiAgICAgICAgfVxuICAgIH0sIG90aGVyUHJvcHMpO1xufVxuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgQ29sbGFwc2UgZWZmZWN0LlxuICpcbiAqICpJbXBvcnRhbnQqOiBUaGlzIGNvbXBvbmVudCBpcyAqbm90KiBlZmZpY2llbnQgZm9yIHRoZSBicm93c2VyIHRvIGFuaW1hdGUhXG4gKiBNYWtlIHN1cmUgeW91IGRvIHRlc3Rpbmcgb24gbG93ZXIgcG93ZXIgZGV2aWNlcywgb3IgcHJlZmVyIGEgbGlnaHRlclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBDb2xsYXBzZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlKHsgY2xhc3NCYXNlLCBzaG93LCBtaW5CbG9ja1NpemUsIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyh7IGNsYXNzQmFzZSwgbWluQmxvY2tTaXplIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwiLi9jb2xsYXBzZVwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBDb2xsYXBzZSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgQ29sbGFwc2VgIGBGYWRlYFxuICovXG5leHBvcnQgY29uc3QgQ29sbGFwc2VGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2VGYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKENvbGxhcHNlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29sbGFwc2UtZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVyc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0sIG90aGVyUHJvcHMpIHtcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihzbGlkZVRhcmdldElubGluZSA/PyAxKTtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRCbG9jayA9IHVzZVJlZihzbGlkZVRhcmdldEJsb2NrID8/IDApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldElubGluZSlcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBzbGlkZVRhcmdldElubGluZTsgfSwgW3NsaWRlVGFyZ2V0SW5saW5lXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKHNsaWRlVGFyZ2V0QmxvY2spXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBzbGlkZVRhcmdldEJsb2NrOyB9LCBbc2xpZGVUYXJnZXRCbG9ja10pO1xuICAgIGlmIChzbGlkZVRhcmdldElubGluZSA9PSAwKVxuICAgICAgICBzbGlkZVRhcmdldElubGluZSA9IGxhc3RWYWxpZFRhcmdldElubGluZS5jdXJyZW50O1xuICAgIGlmIChzbGlkZVRhcmdldEJsb2NrID09IDApXG4gICAgICAgIHNsaWRlVGFyZ2V0QmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXNsaWRlYCxcbiAgICAgICAgY2xhc3NCYXNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtYmxvY2tgXTogYCR7KHNsaWRlVGFyZ2V0QmxvY2sgPz8gMCl9YFxuICAgICAgICB9XG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBTbGlkZSBlZmZlY3QuXG4gKlxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxuICpcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxuICogKGBzbGlkZUlubGluZT17aW5kZXggLSBzZWxlY3RlZEluZGV4fWAgb3Igc2ltaWxhci4pXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIEZhZGUgZWZmZWN0cy5cbiAqXG4gKiBgc2xpZGVJbmxpbmU9eyhpbmRleCAtIHNlbGVjdGVkSW5kZXgpIC8gMTB9YCB3b3VsZCBtYWtlIHRoZSBlbGVtZW50IGxvb2sgbGlrZSBpdCBmYWRlcyBvdXQgYmVmb3JlIGl0IHRyYXZlbHMgdG8gaXRzIHRhcmdldCBkZXN0aW5hdGlvbi5cbiAqXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWAgYFpvb21gXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoU2xpZGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICByZXR1cm4gKHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tem9vbWAsXG4gICAgICAgIGNsYXNzQmFzZSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1vcmlnaW4taW5saW5lYF06IGAkeyh6b29tT3JpZ2luSW5saW5lID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1pbmxpbmVgXTogYCR7KHpvb21NaW5JbmxpbmUgPz8gem9vbU1pbiA/PyAwKX1gLFxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW1pbi1ibG9ja2BdOiBgJHsoem9vbU1pbkJsb2NrID8/IHpvb21NaW4gPz8gMCl9YCxcbiAgICAgICAgfSxcbiAgICB9LCBvdGhlclByb3BzKSk7XG59XG47XG4vKipcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBab29tIGVmZmVjdC5cbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbSh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHNob3csIC4uLnJlc3QgfSwgcmVmKSB7XG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgc2hvdzogc2hvdywgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XG5pbXBvcnQgeyBab29tIH0gZnJvbSBcIi4vem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggWm9vbSBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIFRoaXMgaXMgYW4gaWRlYWwgdGltZSB0byB1c2UgdGhlIG1pbmltdW0gc2l6ZSBab29tIHByb3BlcnRpZXMuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxuICovXG5leHBvcnQgY29uc3QgWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgc2hvdywgLi4ucmVzdCB9LCByZWYpIHtcbiAgICByZXR1cm4gaChab29tLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZVpvb21Qcm9wcyB9IGZyb20gXCIuL3pvb21cIjtcbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFNsaWRlIGFuZCBab29tIGVmZmVjdHMuXG4gKlxuICogUHJvYmFibHkgYmVzdCBjb21iaW5lZCB3aXRoIGB1c2VDcmVhdGVGYWRlUHJvcHNgIChvciBqdXN0IHVzaW5nIGEgYFNsaWRlWm9vbUZhZGVgPykuXG4gKlxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZUZhZGVab29tYCBgWm9vbWAgYEZhZGVgXG4gKi9cbmV4cG9ydCBjb25zdCBTbGlkZVpvb20gPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb20oeyBjbGFzc0Jhc2UsIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jaywgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuaW1wb3J0IHsgU2xpZGVab29tIH0gZnJvbSBcIi4vc2xpZGUtem9vbVwiO1xuO1xuLyoqXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIFpvb20sIFNsaWRlLCBhbmQgRmFkZSBlZmZlY3RzLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IHNob3J0aGFuZCBmb3Igc29tZSBwcm9wIGNyZWF0aW9uIGFuZCBwcm9wIG1lcmdpbmcgZnVuY3Rpb25zLlxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVgIGBab29tYCBgRmFkZWBcbiAqL1xuZXhwb3J0IGNvbnN0IFNsaWRlWm9vbUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZVpvb21GYWRlKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4LCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFNsaWRlWm9vbSwgeyBzaG93OiBzaG93LCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRlLXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmxpcFByb3BzKHsgY2xhc3NCYXNlLCBmbGlwQW5nbGVJbmxpbmUsIGZsaXBBbmdsZUJsb2NrLCBwZXJzcGVjdGl2ZSB9LCBvdGhlclByb3BzKSB7XG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcbiAgICBjb25zdCBsYXN0VmFsaWRUYXJnZXRJbmxpbmUgPSB1c2VSZWYoZmxpcEFuZ2xlSW5saW5lID8/IDE4MCk7XG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYoZmxpcEFuZ2xlQmxvY2sgPz8gMCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUlubGluZSlcbiAgICAgICAgbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQgPSBmbGlwQW5nbGVJbmxpbmU7IH0sIFtmbGlwQW5nbGVJbmxpbmVdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4geyBpZiAoZmxpcEFuZ2xlQmxvY2spXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBmbGlwQW5nbGVCbG9jazsgfSwgW2ZsaXBBbmdsZUJsb2NrXSk7XG4gICAgaWYgKGZsaXBBbmdsZUlubGluZSA9PSAwKVxuICAgICAgICBmbGlwQW5nbGVJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcbiAgICBpZiAoZmxpcEFuZ2xlQmxvY2sgPT0gMClcbiAgICAgICAgZmxpcEFuZ2xlQmxvY2sgPSBsYXN0VmFsaWRUYXJnZXRCbG9jay5jdXJyZW50O1xuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxuICAgICAgICBjbGFzc0Jhc2UsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyhmbGlwQW5nbGVJbmxpbmUgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZmxpcC1hbmdsZS1ibG9ja2BdOiBgJHsoZmxpcEFuZ2xlQmxvY2sgPz8gMCl9ZGVnYCxcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tcGVyc3BlY3RpdmVgXTogYCR7KHBlcnNwZWN0aXZlID8/IDgwMCl9cHhgXG4gICAgICAgIH1cbiAgICB9LCBvdGhlclByb3BzKTtcbn1cbjtcbi8qKlxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIEZsaXAgZWZmZWN0LlxuICpcbiAqIFByb3ZpZGUgdGhlIGRpcmVjdGlvbiB0aGUgZWxlbWVudCB3aWxsIHRyYXZlbCBpbiB3aXRoIGBmbGlwSW5saW5lYCBhbmQgYGZsaXBCbG9ja2AsXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXG4gKlxuICogQSB2YWx1ZSBvZiBgMGAgaXMgaGFuZGxlZCBzcGVjaWFsbHksIGVmZmVjdGl2ZWx5IG1lYW5pbmcgXCJ1c2UgdGhlIGxhc3Qgbm9uLXplcm8gdmFsdWVcIixcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxuICpcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxuICovXG5leHBvcnQgY29uc3QgRmxpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIEZsaXAoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlLCBzaG93LCAuLi5yZXN0IH0sIHJlZikge1xuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IHNob3c6IHNob3csIC4uLnVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZsaXAuanMubWFwIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IGNsb25lRWxlbWVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnNcIjtcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xuLyoqXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgc3dhcCBjb250YWluZXIuXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBpbmxpbmUsIGNsYXNzQmFzZSB9LCBvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHVzZU1lcmdlZFByb3BzKCkoe1xuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtjbGFzc0Jhc2UgPz8gXCJ0cmFuc2l0aW9uXCJ9LXN3YXAtY29udGFpbmVyLWlubGluZWApXG4gICAgfSwgb3RoZXJQcm9wcyk7XG59XG4vKipcbiAqIEFsbG93cyBhIHNldCBvZiBjaGlsZCA8VHJhbnNpdGlvbmFibGU+IGNvbXBvbmVudHMgdG8gYW5pbWF0ZSBpbiAmIG91dCBpbi1wbGFjZS4gVmVyeSB1c2VmdWwgZm9yLCBlLmcuLCB0YWIgcGFuZWxzLlxuICpcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgc2hvd2AgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cbiAqXG4gKiBMaWtlIGA8VHJhbnNpdGlvbmFibGU+YCwgKnRoaXMgd3JhcHMgYW4gSFRNTEVsZW1lbnQgKG9yIG90aGVyIHJlZi1mb3J3YXJkaW5nIGNvbXBvbmVudCkqLiBUaGlzIHdpbGwgYmUgeW91ciBjb250YWluZXIgdGhhdCBob2xkcyBlYWNoIGA8VHJhbnNpdGlvbmFibGU+YCAob3IgY29tcG9uZW50IHRoYXQgdXNlcyBpdCkuIFN0cmljdGx5IHNwZWFraW5nIGl0IGNvdWxkIGJlIGFueXRoaW5nLCBub3QgYSBgPFRyYW5zaXRpb25hYmxlPmAsIGJ1dCBpZiBpdCBkb2VzbnQndCB0cmFuc2l0aW9uIG91dCB0aGVuIGl0J3MganVzdCBnb2luZyB0byBiZSBoYW5naW5nIGFyb3VuZCAxMDAlIG9mIHRoZSB0aW1lLlxuICpcbiAqIExvbmcgd2F5IG9mIHNheWluZywgaWYgeW91IGdldCBhIGNyeXB0aWMgZXJyb3Igd2l0aCB0aGlzIGNvbXBvbmVudCwgbWFrZSBzdXJlIGl0IGhhcyBhIHNpbmdsZSBgPGRpdj5gIGNoaWxkIG9yIHNvbWV0aGluZy5cbiAqIEBwYXJhbSBwYXJhbTBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBjb25zdCBTd2FwcGFibGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTd2FwcGFibGUoeyBjaGlsZHJlbiwgY2xhc3NCYXNlLCBpbmxpbmUsIC4uLnAgfSwgcmVmKSB7XG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvblByb3BzID0gdXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGlubGluZSB9LCB7IC4uLnAsIHJlZiB9KTtcbiAgICBjb25zdCBtZXJnZWRXaXRoQ2hpbGRyZW4gPSB1c2VNZXJnZWRQcm9wcygpKHRyYW5zaXRpb25Qcm9wcywgY2hpbGRyZW4ucHJvcHMpO1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbik7XG59KTtcbi8vIElmIFwiaW5saW5lXCIgaXNuJ3QgZXhwbGljaXRseSBwcm92aWRlZCwgd2UgdHJ5IHRvIGltcGxpY2l0bHkgZG8gaXQgYmFzZWQgb24gdGhlIGNoaWxkJ3MgdGFnLlxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXG5jb25zdCBpbmxpbmVFbGVtZW50cyA9IG5ldyBTZXQoW1xuICAgIFwiYVwiLFxuICAgIFwiYWJiclwiLFxuICAgIFwiYWNyb255bVwiLFxuICAgIFwiYXVkaW9cIixcbiAgICBcImJcIixcbiAgICBcImJkaVwiLFxuICAgIFwiYmRvXCIsXG4gICAgXCJiaWdcIixcbiAgICBcImJyXCIsXG4gICAgXCJidXR0b25cIixcbiAgICBcImNhbnZhc1wiLFxuICAgIFwiY2l0ZVwiLFxuICAgIFwiY29kZVwiLFxuICAgIFwiZGF0YVwiLFxuICAgIFwiZGF0YWxpc3RcIixcbiAgICBcImRlbFwiLFxuICAgIFwiZGZuXCIsXG4gICAgXCJlbVwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImlcIixcbiAgICBcImlmcmFtZVwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW5zXCIsXG4gICAgXCJrYmRcIixcbiAgICBcImxhYmVsXCIsXG4gICAgXCJtYXBcIixcbiAgICBcIm1hcmtcIixcbiAgICBcIm1ldGVyXCIsXG4gICAgXCJub3NjcmlwdFwiLFxuICAgIFwib2JqZWN0XCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBpY3R1cmVcIixcbiAgICBcInByb2dyZXNzXCIsXG4gICAgXCJxXCIsXG4gICAgXCJydWJ5XCIsXG4gICAgXCJzXCIsXG4gICAgXCJzYW1wXCIsXG4gICAgXCJzY3JpcHRcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwic2xvdFwiLFxuICAgIFwic21hbGxcIixcbiAgICBcInNwYW5cIixcbiAgICBcInN0cm9uZ1wiLFxuICAgIFwic3ViXCIsXG4gICAgXCJzdXBcIixcbiAgICBcInN2Z1wiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRleHRhcmVhXCIsXG4gICAgXCJ0aW1lXCIsXG4gICAgXCJ1XCIsXG4gICAgXCJ0dFwiLFxuICAgIFwidmFyXCIsXG4gICAgXCJ2aWRlb1wiLFxuICAgIFwid2JyXCJcbl0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dhcHBhYmxlLmpzLm1hcCIsbnVsbF0sIm5hbWVzIjpbIkVNUFRZX09CSiIsIkVNUFRZX0FSUiIsIklTX05PTl9ESU1FTlNJT05BTCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRDb21wb25lbnQiLCJwcmV2UmFmIiwiY3VycmVudEhvb2siLCJhZnRlclBhaW50RWZmZWN0cyIsIm9sZEJlZm9yZURpZmYiLCJvcHRpb25zIiwib2xkQmVmb3JlUmVuZGVyIiwib2xkQWZ0ZXJEaWZmIiwiZGlmZmVkIiwib2xkQ29tbWl0Iiwib2xkQmVmb3JlVW5tb3VudCIsInVubW91bnQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInR5cGUiLCJob29rcyIsIl9fIiwiX19oIiwibGVuZ3RoIiwicHVzaCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlUmVkdWNlciIsImludm9rZU9yUmV0dXJuIiwicmVkdWNlciIsImluaXQiLCJob29rU3RhdGUiLCJfcmVkdWNlciIsInVuZGVmaW5lZCIsImFjdGlvbiIsIm5leHRWYWx1ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwic3RhdGUiLCJhcmdzQ2hhbmdlZCIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsImluaXRpYWxWYWx1ZSIsInVzZU1lbW8iLCJjdXJyZW50IiwiZmFjdG9yeSIsInVzZUNhbGxiYWNrIiwiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJpbnZva2VDbGVhbnVwIiwiaW52b2tlRWZmZWN0IiwiZSIsInZub2RlIiwiYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJhZiIsImRvbmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lb3V0IiwiSEFTX1JBRiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImNvbW1pdFF1ZXVlIiwic29tZSIsImZpbHRlciIsImNiIiwiaG9vayIsImNvbXAiLCJvbGRBcmdzIiwibmV3QXJncyIsImFyZyIsImYiLCJhc3NpZ24iLCJvYmoiLCJwcm9wcyIsImkiLCJzaGFsbG93RGlmZmVycyIsImEiLCJiIiwiZm9yd2FyZEVsZW1lbnRSZWYiLCJDb21wb25lbnQiLCJGb3J3YXJkZWRDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwidXNlRW5zdXJlU3RhYmlsaXR5IiwidmFsdWVzIiwidXNlSGVscGVyIiwidmFsdWUiLCJoZWxwZXJUb0Vuc3VyZVN0YWJpbGl0eSIsInNob3duRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VQYXNzaXZlU3RhdGUiLCJvbkNoYW5nZSIsImdldEluaXRpYWxWYWx1ZSIsInZhbHVlUmVmIiwiVW5zZXQiLCJ3YXJuaW5nUmVmIiwiY2xlYW51cENhbGxiYWNrUmVmIiwib25TaG91bGRDbGVhblVwIiwiY2xlYW51cENhbGxiYWNrIiwidHJ5RW5zdXJlVmFsdWUiLCJleCIsImdldFZhbHVlIiwid2FybiIsInNldFZhbHVlIiwicHJldkRlcCIsImRlcCIsIkZ1bmN0aW9uIiwiU3ltYm9sIiwidXNlTWVyZ2VkQ2hpbGRyZW4iLCJsaHNQcm9wcyIsInJoc1Byb3BzIiwibGhzIiwiY2hpbGRyZW4iLCJyaHMiLCJyZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwidG1wIiwieCIsImFyZ3VtZW50cyIsInVzZU1lcmdlZENsYXNzZXMiLCJtZXJnZUNsYXNzZXMiLCJsaHNDbGFzcyIsImNsYXNzIiwibGhzQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwicmhzQ2xhc3MiLCJyaHNDbGFzc05hbWUiLCJsaHNDbGFzc2VzIiwiY2xzeCIsInNwbGl0IiwicmhzQ2xhc3NlcyIsImFsbENsYXNzZXMiLCJTZXQiLCJmcm9tIiwiam9pbiIsInByb2Nlc3NSZWYiLCJpbnN0YW5jZSIsInJlZiIsImFzc2VydCIsInVzZU1lcmdlZFJlZnMiLCJjb21iaW5lZCIsInN0eWxlU3RyaW5nVG9PYmplY3QiLCJzdHlsZSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwibWFwIiwic3RhdGVtZW50IiwidXNlTWVyZ2VkU3R5bGVzIiwiX29iamVjdFNwcmVhZCIsImxvZyIsInVzZU1lcmdlZFByb3BzIiwibGhzMiIsInJoczIiLCJfZXhjbHVkZWQiLCJyaHNFbnRyaWVzIiwiZW50cmllcyIsInJoc0tleSIsInJoc1ZhbHVlIiwibGhzVmFsdWUiLCJtZXJnZWQiLCJtZXJnZUZ1bmN0aW9ucyIsImx2IiwicnYiLCJQcm9taXNlIiwiYWxsIiwicmV0dXJuTnVsbCIsInVzZVJlZkVsZW1lbnQiLCJvbkVsZW1lbnRDaGFuZ2UiLCJnZXRFbGVtZW50Iiwic2V0RWxlbWVudCIsIm15UmVmIiwidXNlUmVmRWxlbWVudFByb3BzIiwidXNlRWxlbWVudFNpemUiLCJnZXRPYnNlcnZlQm94Iiwib25TaXplQ2hhbmdlIiwiZ2V0U2l6ZSIsInNldFNpemUiLCJjdXJyZW50T2JzZXJ2ZUJveCIsIm5lZWRBTmV3T2JzZXJ2ZXIiLCJlbGVtZW50Iiwib2JzZXJ2ZUJveCIsImRvY3VtZW50Iiwib3duZXJEb2N1bWVudCIsIndpbmRvdyIsImRlZmF1bHRWaWV3IiwiaGFuZGxlVXBkYXRlIiwiaXNDb25uZWN0ZWQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRMZWZ0Iiwic2Nyb2xsTGVmdCIsIm9mZnNldExlZnQiLCJjbGllbnRUb3AiLCJzY3JvbGxUb3AiLCJvZmZzZXRUb3AiLCJvYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwib2JzZXJ2ZSIsImJveCIsImRpc2Nvbm5lY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VFbGVtZW50U2l6ZVByb3BzIiwiY2FwaXRhbGl6ZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwidXNlTG9naWNhbERpcmVjdGlvbiIsIm9uTG9naWNhbERpcmVjdGlvbkNoYW5nZSIsImdldENvbXB1dGVkU3R5bGVzIiwic2V0Q29tcHV0ZWRTdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwiXyIsImdldExvZ2ljYWxEaXJlY3Rpb25JbmZvIiwiY29tcHV0ZWRTdHlsZXMiLCJ3Iiwid3JpdGluZ01vZGUiLCJkIiwiZGlyZWN0aW9uIiwidCIsInRleHRPcmllbnRhdGlvbiIsIldyaXRpbmdNb2RlcyIsImNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiIsImVsZW1lbnRPcmllbnRhdGlvbiIsImlubGluZU9yaWVudGF0aW9uIiwiY29udmVydFRvUGh5c2ljYWxTaWRlIiwic2lkZSIsIk0iLCJibG9ja0RpcmVjdGlvbiIsImlubGluZURpcmVjdGlvbiIsImNvbnZlcnRUb0xvZ2ljYWxTaWRlIiwiY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiIsImJsb2NrT3JpZW50YXRpb24iLCJjb252ZXJ0RWxlbWVudFNpemUiLCJlbGVtZW50U2l6ZSIsImlubGluZVNpemUiLCJibG9ja1NpemUiLCJjbGllbnRJbmxpbmVTaXplIiwiY2xpZW50QmxvY2tTaXplIiwib2Zmc2V0SW5saW5lU2l6ZSIsIm9mZnNldEJsb2NrU2l6ZSIsInNjcm9sbElubGluZVNpemUiLCJzY3JvbGxCbG9ja1NpemUiLCJnZXRQaHlzaWNhbExlZnRUb3AiLCJkaXIiLCJnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tIiwiZjEiLCJmMiIsImYzIiwiZjQiLCJjbGllbnRJbmxpbmVJbnNldCIsInNjcm9sbElubGluZUluc2V0Iiwib2Zmc2V0SW5saW5lSW5zZXQiLCJjbGllbnRCbG9ja0luc2V0Iiwic2Nyb2xsQmxvY2tJbnNldCIsIm9mZnNldEJsb2NrSW5zZXQiLCJ1c2VMb2dpY2FsRGlyZWN0aW9uUHJvcHMiLCJjb252ZXJ0VG9Mb2dpY2FsU2l6ZSIsImwiLCJyIiwiSG9yaXpvbnRhbFRiTHRyIiwibGVmdFJpZ2h0RGlyZWN0aW9uIiwib3ZlclVuZGVyRGlyZWN0aW9uIiwiSG9yaXpvbnRhbFRiUnRsIiwiVmVydGljYWxSbEx0ciIsIlZlcnRpY2FsUmxSdGwiLCJTaWRld2F5c1JsTHRyIiwiU2lkZXdheXNSbFJ0bCIsIlZlcnRpY2FsTHJMdHIiLCJWZXJ0aWNhbExyUnRsIiwiU2lkZXdheXNMdEx0ciIsIlNpZGV3YXlzTHRSdGwiLCJIb3Jpem9udGFsVGIiLCJsdHIiLCJydGwiLCJWZXJ0aWNhbFJsIiwiVmVydGljYWxMciIsIlNpZGV3YXlzUmwiLCJTaWRld2F5c0xyIiwicHJldmlvdXNJbnB1dHMiLCJNYXAiLCJ0b1J1biIsImNvbW1pdE5hbWUiLCJvcmlnaW5hbENvbW1pdCIsIm5ld0NvbW1pdCIsImlkIiwiZWZmZWN0SW5mbyIsIm9sZElucHV0cyIsImdldCIsImlucHV0cyIsImNsZWFudXAiLCJlZmZlY3QiLCJzZXQiLCJjbGVhciIsImNyZWF0ZUNvbnRleHQiLCJnbG9iYWwiLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiVHlwZUVycm9yIiwic2xpY2UiLCJtYXRjaGVzIiwiRWxlbWVudCIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiX2ZvY3VzYWJsZUVsZW1lbnRzU3RyaW5nIiwiSW5lcnRSb290Iiwicm9vdEVsZW1lbnQiLCJpbmVydE1hbmFnZXIiLCJfaW5lcnRNYW5hZ2VyIiwiX3Jvb3RFbGVtZW50IiwiX21hbmFnZWROb2RlcyIsImhhc0F0dHJpYnV0ZSIsIl9zYXZlZEFyaWFIaWRkZW4iLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJfbWFrZVN1YnRyZWVVbmZvY3VzYWJsZSIsIl9vYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJfb25NdXRhdGlvbiIsImJpbmQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImRlc3RydWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbmVydE5vZGUiLCJfdW5tYW5hZ2VOb2RlIiwibm9kZSIsInN0YXJ0Tm9kZSIsIl90aGlzMiIsImNvbXBvc2VkVHJlZVdhbGsiLCJfdmlzaXROb2RlIiwiYWN0aXZlRWxlbWVudCIsImJvZHkiLCJjb250YWlucyIsInJvb3QiLCJub2RlVHlwZSIsIk5vZGUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwicGFyZW50Tm9kZSIsImJsdXIiLCJmb2N1cyIsIkVMRU1FTlRfTk9ERSIsIl9hZG9wdEluZXJ0Um9vdCIsImNhbGwiLCJfbWFuYWdlTm9kZSIsInJlZ2lzdGVyIiwiYWRkIiwiZGVyZWdpc3RlciIsIl91bm1hbmFnZVN1YnRyZWUiLCJfdGhpczMiLCJpbmVydFN1YnJvb3QiLCJnZXRJbmVydFJvb3QiLCJzZXRJbmVydCIsIm1hbmFnZWROb2RlcyIsInNhdmVkSW5lcnROb2RlIiwicmVjb3JkcyIsInNlbGYiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYXR0cmlidXRlTmFtZSIsIm1hbmFnZWROb2RlIiwiYXJpYUhpZGRlbiIsIkluZXJ0Tm9kZSIsImluZXJ0Um9vdCIsIl9ub2RlIiwiX292ZXJyb2RlRm9jdXNNZXRob2QiLCJfaW5lcnRSb290cyIsIl9zYXZlZFRhYkluZGV4IiwiX2Rlc3Ryb3llZCIsImVuc3VyZVVudGFiYmFibGUiLCJfdGhyb3dJZkRlc3Ryb3llZCIsImRlc3Ryb3llZCIsIkVycm9yIiwidGFiSW5kZXgiLCJoYXNTYXZlZFRhYkluZGV4IiwiYWRkSW5lcnRSb290IiwicmVtb3ZlSW5lcnRSb290Iiwic2l6ZSIsIkluZXJ0TWFuYWdlciIsIl9kb2N1bWVudCIsIl93YXRjaEZvckluZXJ0IiwiYWRkSW5lcnRTdHlsZSIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZWFkeVN0YXRlIiwiX29uRG9jdW1lbnRMb2FkZWQiLCJpbmVydCIsImhhcyIsInBhcmVudCIsIl9pbmVydFJvb3QiLCJpbmVydEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZXJ0RWxlbWVudCIsIl90aGlzIiwidW5zaGlmdCIsInNoYWRvd1Jvb3RBbmNlc3RvciIsInNoYWRvd1Jvb3QiLCJsb2NhbE5hbWUiLCJjb250ZW50IiwiZGlzdHJpYnV0ZWROb2RlcyIsImdldERpc3RyaWJ1dGVkTm9kZXMiLCJzbG90IiwiX2Rpc3RyaWJ1dGVkTm9kZXMiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsIl9pIiwiY2hpbGQiLCJmaXJzdENoaWxkIiwibmV4dFNpYmxpbmciLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhhc093blByb3BlcnR5IiwiX2Jsb2NraW5nRWxlbWVudHMiLCJfYWxyZWFkeUluZXJ0RWxlbWVudHMiLCJfdG9wRWxQYXJlbnRzIiwiX3NpYmxpbmdzVG9SZXN0b3JlIiwiX3BhcmVudE1PIiwiX3RvcENoYW5nZWQiLCJfc3dhcEluZXJ0ZWRTaWJsaW5nIiwiX2luZXJ0U2libGluZ3MiLCJfcmVzdG9yZUluZXJ0ZWRTaWJsaW5ncyIsIl9nZXRQYXJlbnRzIiwiX2dldERpc3RyaWJ1dGVkQ2hpbGRyZW4iLCJfaXNJbmVydGFibGUiLCJfaGFuZGxlTXV0YXRpb25zIiwiQmxvY2tpbmdFbGVtZW50c0ltcGwiLCJjb25zdHJ1Y3RvciIsIm51bGxhYmxlIiwidG9wIiwiZWxlbXMiLCJyZW1vdmUiLCJpbmRleE9mIiwic3BsaWNlIiwicG9wIiwiX2EiLCJfYiIsIl9jIiwibmV3VG9wIiwidG9LZWVwSW5lcnQiLCJvbGRQYXJlbnRzIiwibmV3UGFyZW50cyIsInRvU2tpcCIsImoiLCJvbGRJbmVydCIsIm5ld0luZXJ0Iiwic2libGluZ3NUb1Jlc3RvcmUiLCJkZWxldGUiLCJlbGVtZW50cyIsIm1vIiwic2libGluZ3MiLCJzaWJsaW5nIiwiaW5lcnRlZFNpYmxpbmdzIiwicGFyZW50VG9PYnNlcnZlIiwibWF5YmVTaGFkeVJvb3QiLCJfX3NoYWR5IiwiaG9zdCIsIm11dGF0aW9ucyIsInBhcmVudHMiLCJtdXRhdGlvbiIsImlkeCIsImluZXJ0ZWRDaGlsZCIsImluZm8iLCJ0ZXN0IiwiYXNzaWduZWRTbG90IiwicmVzdWx0Iiwibm9kZXMiLCJzbG90cyIsIiRibG9ja2luZ0VsZW1lbnRzIiwiZ2V0Q2xhc3NOYW1lIiwiY2xhc3NCYXNlIiwic2hvdyIsInBoYXNlIiwiZm9yY2VSZWZsb3ciLCJkdW1teSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMiLCJvdGhlclByb3BzIiwibWVhc3VyZSIsImFuaW1hdGVPbk1vdW50Iiwib25UcmFuc2l0aW9uVXBkYXRlIiwiZXhpdFZpc2liaWxpdHkiLCJkdXJhdGlvbiIsInNldFBoYXNlIiwic2V0RGlyZWN0aW9uIiwic3VyZmFjZVdpZHRoIiwic2V0U3VyZmFjZVdpZHRoIiwic3VyZmFjZUhlaWdodCIsInNldFN1cmZhY2VIZWlnaHQiLCJzdXJmYWNlWCIsInNldFN1cmZhY2VYIiwic3VyZmFjZVkiLCJzZXRTdXJmYWNlWSIsInRyYW5zaXRpb25pbmdXaWR0aCIsInNldFRyYW5zaXRpb25pbmdXaWR0aCIsInRyYW5zaXRpb25pbmdIZWlnaHQiLCJzZXRUcmFuc2l0aW9uaW5nSGVpZ2h0IiwidHJhbnNpdGlvbmluZ1giLCJzZXRUcmFuc2l0aW9uaW5nWCIsInRyYW5zaXRpb25pbmdZIiwic2V0VHJhbnNpdGlvbmluZ1kiLCJsb2dpY2FsRGlyZWN0aW9uSW5mbyIsInNldExvZ2ljYWxEaXJlY3Rpb25JbmZvIiwib25UcmFuc2l0aW9uVXBkYXRlUmVmIiwicGhhc2VSZWYiLCJkaXJlY3Rpb25SZWYiLCJkdXJhdGlvblJlZiIsInRvb0Vhcmx5VGltZW91dFJlZiIsInRvb0Vhcmx5VmFsdWVSZWYiLCJ0b29MYXRlVGltZW91dFJlZiIsIm9uVHJhbnNpdGlvbkVuZCIsInRpbWVvdXREdXJhdGlvbiIsInByZXZpb3VzUGhhc2UiLCJjdXJyZW50U2l6ZVdpdGhUcmFuc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrdXAiLCJjbGFzc0xpc3QiLCJzaXplV2l0aG91dFRyYW5zaXRpb24iLCJ3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCIsInN1cmZhY2VJbmxpbmVJbnNldCIsInN1cmZhY2VCbG9ja0luc2V0Iiwic3VyZmFjZUlubGluZVNpemUiLCJzdXJmYWNlQmxvY2tTaXplIiwidHJhbnNpdGlvbmluZ0lubGluZUluc2V0IiwidHJhbnNpdGlvbmluZ0Jsb2NrSW5zZXQiLCJ0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSIsInRyYW5zaXRpb25pbmdCbG9ja1NpemUiLCJhbG1vc3REb25lIiwicmVtb3ZlRW1wdHkiLCJ2IiwiVHJhbnNpdGlvbmFibGUiLCJUcmFuc2l0aW9uIiwiY2hpbGRNb3VudEJlaGF2aW9yIiwiaGFzU2hvd25PbmNlIiwic2V0SGFzU2hvd25PbmNlIiwic2hvdWxkU2V0SGFzU2hvd25PbmNlIiwiaCIsImNoaWxkSXNWTm9kZSIsInRyYW5zaXRpb25Qcm9wcyIsIm1lcmdlZFdpdGhDaGlsZHJlbiIsImNsb25lRWxlbWVudCIsInVzZUNyZWF0ZUNsaXBQcm9wcyIsImNsaXBPcmlnaW4iLCJjbGlwT3JpZ2luSW5saW5lIiwiY2xpcE9yaWdpbkJsb2NrIiwiY2xpcE1pbiIsImNsaXBNaW5JbmxpbmUiLCJjbGlwTWluQmxvY2siLCJDbGlwIiwicmVzdCIsInVzZUNyZWF0ZUZhZGVQcm9wcyIsImZhZGVNaW4iLCJmYWRlTWF4IiwiRmFkZSIsIkNsaXBGYWRlIiwidXNlQ3JlYXRlQ29sbGFwc2VQcm9wcyIsIm1pbkJsb2NrU2l6ZSIsIkNvbGxhcHNlIiwiQ29sbGFwc2VGYWRlIiwidXNlQ3JlYXRlU2xpZGVQcm9wcyIsInNsaWRlVGFyZ2V0SW5saW5lIiwic2xpZGVUYXJnZXRCbG9jayIsImxhc3RWYWxpZFRhcmdldElubGluZSIsImxhc3RWYWxpZFRhcmdldEJsb2NrIiwiU2xpZGUiLCJTbGlkZUZhZGUiLCJ1c2VDcmVhdGVab29tUHJvcHMiLCJ6b29tT3JpZ2luIiwiem9vbU9yaWdpbklubGluZSIsInpvb21PcmlnaW5CbG9jayIsInpvb21NaW4iLCJ6b29tTWluSW5saW5lIiwiem9vbU1pbkJsb2NrIiwiWm9vbSIsIlpvb21GYWRlIiwiU2xpZGVab29tIiwiU2xpZGVab29tRmFkZSIsInVzZUNyZWF0ZUZsaXBQcm9wcyIsImZsaXBBbmdsZUlubGluZSIsImZsaXBBbmdsZUJsb2NrIiwicGVyc3BlY3RpdmUiLCJGbGlwIiwidXNlQ3JlYXRlU3dhcHBhYmxlUHJvcHMiLCJpbmxpbmUiLCJTd2FwcGFibGUiLCJwIiwiaW5saW5lRWxlbWVudHMiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7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QUFDO01BQzdGLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQzlGLE1BQU0sU0FBUyxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQy9GLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3RHLE1BQU0sUUFBUSxHQUFHQSxDQUFXLENBQUMsQ0FBQyxDQUFRLEtBQU8sRUFBQSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ3BHLElBQUEsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsS0FBTyxFQUFBLFdBQVcsQ0FBRSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFFbkksTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsS0FBTyxFQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7TUFDckYsTUFBTSxRQUFRLEdBQUdBLENBQVcsQ0FBQyxDQUFDLENBQVEsS0FBTyxFQUFBLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxD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LEdBQUssQ0FBQSxLQUFBLEVBQUEsRUFBQSxFQUFFLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBRSxDQUFBLGFBQUEsRUFBZ0IsV0FBVyxDQUFBLENBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxDQUFHLEVBQUEsUUFBUSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFBO0VBQy9ILFlBQUFBLEdBQUEsQ0FBQyxRQUFRLEVBQUMsRUFBQSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFJLENBQUE7RUFDdEYsWUFBQUEsR0FBQSxDQUFDLFFBQVEsRUFBQyxFQUFBLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUksQ0FBQTtFQUV0RixZQUFBQSxHQUFBLENBQUMsUUFBUSxFQUFDLEVBQUEsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBSSxDQUFBO0VBQ3RGLFlBQUFBLEdBQUEsQ0FBQyxTQUFTLEVBQUMsRUFBQSxRQUFRLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFJLENBQUE7RUFDdkYsWUFBQUEsR0FBQSxDQUFDLGFBQWEsRUFBQyxFQUFBLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUksQ0FBQTtFQUMzRixZQUFBQSxHQUFBLENBQUMsWUFBWSxFQUFDLEVBQUEsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBSSxDQUFB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QTtFQUFFLFlBQUEsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7RUFBQyxZQUFBQSxHQUFBLENBQUEsS0FBQSxFQUFBLElBQUE7a0JBQUtBLEdBQWtDLENBQUEsUUFBQSxFQUFBLElBQUEsRUFBQSxtQkFBQSxDQUFBLENBQU0sQ0FBTSxDQUFJLENBQUE7TUFFclMsT0FBT0EsR0FBQSxDQUFBLEtBQUEsRUFBQSxFQUFLLFNBQVMsRUFBQyxjQUFjLEVBQUE7VUFDaENBLEdBQWEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLE1BQUEsQ0FBQTtVQUNiQSxHQUFLLENBQUEsS0FBQSxFQUFBLEVBQUEsU0FBUyxFQUFDLE1BQU0sRUFBQTtjQUNqQkEsR0FBSyxDQUFBLEtBQUEsRUFBQSxFQUFBLFNBQVMsRUFBQyxlQUFlLEVBQUE7RUFDMUIsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQWdHQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDdE0sZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQWdHQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDdE0sZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQXVDQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMs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SUFBQTs7c0JBQThFQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDcEwsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQThFQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDcEwsZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQTREQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDaEssZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQThEQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQSxDQUFJLENBQVE7RUFDbEssZ0JBQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQTs7c0JBQXVDQSxHQUFPLENBQUEsT0FBQSxFQUFBLEVBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFB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
