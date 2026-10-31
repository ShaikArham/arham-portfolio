var ni = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dy;
function wd() {
  if (dy) return re;
  dy = 1;
  var O = Symbol.for("react.transitional.element"), ol = Symbol.for("react.fragment");
  function F(o, fl, sl) {
    var dl = null;
    if (sl !== void 0 && (dl = "" + sl), fl.key !== void 0 && (dl = "" + fl.key), "key" in fl) {
      sl = {};
      for (var hl in fl)
        hl !== "key" && (sl[hl] = fl[hl]);
    } else sl = fl;
    return fl = sl.ref, {
      $$typeof: O,
      type: o,
      key: dl,
      ref: fl !== void 0 ? fl : null,
      props: sl
    };
  }
  return re.Fragment = ol, re.jsx = F, re.jsxs = F, re;
}
var hy;
function Wd() {
  return hy || (hy = 1, ni.exports = wd()), ni.exports;
}
var P = Wd(), fi = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oy;
function $d() {
  if (oy) return C;
  oy = 1;
  var O = Symbol.for("react.transitional.element"), ol = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), sl = Symbol.for("react.consumer"), dl = Symbol.for("react.context"), hl = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), J = Symbol.iterator;
  function Ql(v) {
    return v === null || typeof v != "object" ? null : (v = J && v[J] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ml = Object.assign, vt = {};
  function w(v, T, _) {
    this.props = v, this.context = T, this.refs = vt, this.updater = _ || jl;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(v, T) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, T, "setState");
  }, w.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Dl() {
  }
  Dl.prototype = w.prototype;
  function Sl(v, T, _) {
    this.props = v, this.context = T, this.refs = vt, this.updater = _ || jl;
  }
  var Xl = Sl.prototype = new Dl();
  Xl.constructor = Sl, Ml(Xl, w.prototype), Xl.isPureReactComponent = !0;
  var xl = Array.isArray;
  function Nl() {
  }
  var X = { H: null, A: null, T: null, S: null }, Ll = Object.prototype.hasOwnProperty;
  function Ot(v, T, _) {
    var D = _.ref;
    return {
      $$typeof: O,
      type: v,
      key: T,
      ref: D !== void 0 ? D : null,
      props: _
    };
  }
  function xa(v, T) {
    return Ot(v.type, T, v.props);
  }
  function Mt(v) {
    return typeof v == "object" && v !== null && v.$$typeof === O;
  }
  function Kl(v) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(_) {
      return T[_];
    });
  }
  var Ta = /\/+/g;
  function Nt(v, T) {
    return typeof v == "object" && v !== null && v.key != null ? Kl("" + v.key) : T.toString(36);
  }
  function Tt(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(Nl, Nl) : (v.status = "pending", v.then(
          function(T) {
            v.status === "pending" && (v.status = "fulfilled", v.value = T);
          },
          function(T) {
            v.status === "pending" && (v.status = "rejected", v.reason = T);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function b(v, T, _, D, B) {
    var G = typeof v;
    (G === "undefined" || G === "boolean") && (v = null);
    var I = !1;
    if (v === null) I = !0;
    else
      switch (G) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case O:
            case ol:
              I = !0;
              break;
            case Z:
              return I = v._init, b(
                I(v._payload),
                T,
                _,
                D,
                B
              );
          }
      }
    if (I)
      return B = B(v), I = D === "" ? "." + Nt(v, 0) : D, xl(B) ? (_ = "", I != null && (_ = I.replace(Ta, "$&/") + "/"), b(B, T, _, "", function(Mu) {
        return Mu;
      })) : B != null && (Mt(B) && (B = xa(
        B,
        _ + (B.key == null || v && v.key === B.key ? "" : ("" + B.key).replace(
          Ta,
          "$&/"
        ) + "/") + I
      )), T.push(B)), 1;
    I = 0;
    var Zl = D === "" ? "." : D + ":";
    if (xl(v))
      for (var rl = 0; rl < v.length; rl++)
        D = v[rl], G = Zl + Nt(D, rl), I += b(
          D,
          T,
          _,
          G,
          B
        );
    else if (rl = Ql(v), typeof rl == "function")
      for (v = rl.call(v), rl = 0; !(D = v.next()).done; )
        D = D.value, G = Zl + Nt(D, rl++), I += b(
          D,
          T,
          _,
          G,
          B
        );
    else if (G === "object") {
      if (typeof v.then == "function")
        return b(
          Tt(v),
          T,
          _,
          D,
          B
        );
      throw T = String(v), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function A(v, T, _) {
    if (v == null) return v;
    var D = [], B = 0;
    return b(v, D, "", "", function(G) {
      return T.call(_, G, B++);
    }), D;
  }
  function q(v) {
    if (v._status === -1) {
      var T = v._result;
      T = T(), T.then(
        function(_) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = _);
        },
        function(_) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = _);
        }
      ), v._status === -1 && (v._status = 0, v._result = T);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var al = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, cl = {
    map: A,
    forEach: function(v, T, _) {
      A(
        v,
        function() {
          T.apply(this, arguments);
        },
        _
      );
    },
    count: function(v) {
      var T = 0;
      return A(v, function() {
        T++;
      }), T;
    },
    toArray: function(v) {
      return A(v, function(T) {
        return T;
      }) || [];
    },
    only: function(v) {
      if (!Mt(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return C.Activity = N, C.Children = cl, C.Component = w, C.Fragment = F, C.Profiler = fl, C.PureComponent = Sl, C.StrictMode = o, C.Suspense = p, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return X.H.useMemoCache(v);
    }
  }, C.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(v, T, _) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var D = Ml({}, v.props), B = v.key;
    if (T != null)
      for (G in T.key !== void 0 && (B = "" + T.key), T)
        !Ll.call(T, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && T.ref === void 0 || (D[G] = T[G]);
    var G = arguments.length - 2;
    if (G === 1) D.children = _;
    else if (1 < G) {
      for (var I = Array(G), Zl = 0; Zl < G; Zl++)
        I[Zl] = arguments[Zl + 2];
      D.children = I;
    }
    return Ot(v.type, B, D);
  }, C.createContext = function(v) {
    return v = {
      $$typeof: dl,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: sl,
      _context: v
    }, v;
  }, C.createElement = function(v, T, _) {
    var D, B = {}, G = null;
    if (T != null)
      for (D in T.key !== void 0 && (G = "" + T.key), T)
        Ll.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (B[D] = T[D]);
    var I = arguments.length - 2;
    if (I === 1) B.children = _;
    else if (1 < I) {
      for (var Zl = Array(I), rl = 0; rl < I; rl++)
        Zl[rl] = arguments[rl + 2];
      B.children = Zl;
    }
    if (v && v.defaultProps)
      for (D in I = v.defaultProps, I)
        B[D] === void 0 && (B[D] = I[D]);
    return Ot(v, G, B);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(v) {
    return { $$typeof: hl, render: v };
  }, C.isValidElement = Mt, C.lazy = function(v) {
    return {
      $$typeof: Z,
      _payload: { _status: -1, _result: v },
      _init: q
    };
  }, C.memo = function(v, T) {
    return {
      $$typeof: E,
      type: v,
      compare: T === void 0 ? null : T
    };
  }, C.startTransition = function(v) {
    var T = X.T, _ = {};
    X.T = _;
    try {
      var D = v(), B = X.S;
      B !== null && B(_, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Nl, al);
    } catch (G) {
      al(G);
    } finally {
      T !== null && _.types !== null && (T.types = _.types), X.T = T;
    }
  }, C.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, C.use = function(v) {
    return X.H.use(v);
  }, C.useActionState = function(v, T, _) {
    return X.H.useActionState(v, T, _);
  }, C.useCallback = function(v, T) {
    return X.H.useCallback(v, T);
  }, C.useContext = function(v) {
    return X.H.useContext(v);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(v, T) {
    return X.H.useDeferredValue(v, T);
  }, C.useEffect = function(v, T) {
    return X.H.useEffect(v, T);
  }, C.useEffectEvent = function(v) {
    return X.H.useEffectEvent(v);
  }, C.useId = function() {
    return X.H.useId();
  }, C.useImperativeHandle = function(v, T, _) {
    return X.H.useImperativeHandle(v, T, _);
  }, C.useInsertionEffect = function(v, T) {
    return X.H.useInsertionEffect(v, T);
  }, C.useLayoutEffect = function(v, T) {
    return X.H.useLayoutEffect(v, T);
  }, C.useMemo = function(v, T) {
    return X.H.useMemo(v, T);
  }, C.useOptimistic = function(v, T) {
    return X.H.useOptimistic(v, T);
  }, C.useReducer = function(v, T, _) {
    return X.H.useReducer(v, T, _);
  }, C.useRef = function(v) {
    return X.H.useRef(v);
  }, C.useState = function(v) {
    return X.H.useState(v);
  }, C.useSyncExternalStore = function(v, T, _) {
    return X.H.useSyncExternalStore(
      v,
      T,
      _
    );
  }, C.useTransition = function() {
    return X.H.useTransition();
  }, C.version = "19.2.0", C;
}
var Sy;
function yi() {
  return Sy || (Sy = 1, fi.exports = $d()), fi.exports;
}
var st = yi(), ci = { exports: {} }, ze = {}, ii = { exports: {} }, si = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gy;
function Fd() {
  return gy || (gy = 1, (function(O) {
    function ol(b, A) {
      var q = b.length;
      b.push(A);
      l: for (; 0 < q; ) {
        var al = q - 1 >>> 1, cl = b[al];
        if (0 < fl(cl, A))
          b[al] = A, b[q] = cl, q = al;
        else break l;
      }
    }
    function F(b) {
      return b.length === 0 ? null : b[0];
    }
    function o(b) {
      if (b.length === 0) return null;
      var A = b[0], q = b.pop();
      if (q !== A) {
        b[0] = q;
        l: for (var al = 0, cl = b.length, v = cl >>> 1; al < v; ) {
          var T = 2 * (al + 1) - 1, _ = b[T], D = T + 1, B = b[D];
          if (0 > fl(_, q))
            D < cl && 0 > fl(B, _) ? (b[al] = B, b[D] = q, al = D) : (b[al] = _, b[T] = q, al = T);
          else if (D < cl && 0 > fl(B, q))
            b[al] = B, b[D] = q, al = D;
          else break l;
        }
      }
      return A;
    }
    function fl(b, A) {
      var q = b.sortIndex - A.sortIndex;
      return q !== 0 ? q : b.id - A.id;
    }
    if (O.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var sl = performance;
      O.unstable_now = function() {
        return sl.now();
      };
    } else {
      var dl = Date, hl = dl.now();
      O.unstable_now = function() {
        return dl.now() - hl;
      };
    }
    var p = [], E = [], Z = 1, N = null, J = 3, Ql = !1, jl = !1, Ml = !1, vt = !1, w = typeof setTimeout == "function" ? setTimeout : null, Dl = typeof clearTimeout == "function" ? clearTimeout : null, Sl = typeof setImmediate < "u" ? setImmediate : null;
    function Xl(b) {
      for (var A = F(E); A !== null; ) {
        if (A.callback === null) o(E);
        else if (A.startTime <= b)
          o(E), A.sortIndex = A.expirationTime, ol(p, A);
        else break;
        A = F(E);
      }
    }
    function xl(b) {
      if (Ml = !1, Xl(b), !jl)
        if (F(p) !== null)
          jl = !0, Nl || (Nl = !0, Kl());
        else {
          var A = F(E);
          A !== null && Tt(xl, A.startTime - b);
        }
    }
    var Nl = !1, X = -1, Ll = 5, Ot = -1;
    function xa() {
      return vt ? !0 : !(O.unstable_now() - Ot < Ll);
    }
    function Mt() {
      if (vt = !1, Nl) {
        var b = O.unstable_now();
        Ot = b;
        var A = !0;
        try {
          l: {
            jl = !1, Ml && (Ml = !1, Dl(X), X = -1), Ql = !0;
            var q = J;
            try {
              t: {
                for (Xl(b), N = F(p); N !== null && !(N.expirationTime > b && xa()); ) {
                  var al = N.callback;
                  if (typeof al == "function") {
                    N.callback = null, J = N.priorityLevel;
                    var cl = al(
                      N.expirationTime <= b
                    );
                    if (b = O.unstable_now(), typeof cl == "function") {
                      N.callback = cl, Xl(b), A = !0;
                      break t;
                    }
                    N === F(p) && o(p), Xl(b);
                  } else o(p);
                  N = F(p);
                }
                if (N !== null) A = !0;
                else {
                  var v = F(E);
                  v !== null && Tt(
                    xl,
                    v.startTime - b
                  ), A = !1;
                }
              }
              break l;
            } finally {
              N = null, J = q, Ql = !1;
            }
            A = void 0;
          }
        } finally {
          A ? Kl() : Nl = !1;
        }
      }
    }
    var Kl;
    if (typeof Sl == "function")
      Kl = function() {
        Sl(Mt);
      };
    else if (typeof MessageChannel < "u") {
      var Ta = new MessageChannel(), Nt = Ta.port2;
      Ta.port1.onmessage = Mt, Kl = function() {
        Nt.postMessage(null);
      };
    } else
      Kl = function() {
        w(Mt, 0);
      };
    function Tt(b, A) {
      X = w(function() {
        b(O.unstable_now());
      }, A);
    }
    O.unstable_IdlePriority = 5, O.unstable_ImmediatePriority = 1, O.unstable_LowPriority = 4, O.unstable_NormalPriority = 3, O.unstable_Profiling = null, O.unstable_UserBlockingPriority = 2, O.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, O.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ll = 0 < b ? Math.floor(1e3 / b) : 5;
    }, O.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, O.unstable_next = function(b) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = J;
      }
      var q = J;
      J = A;
      try {
        return b();
      } finally {
        J = q;
      }
    }, O.unstable_requestPaint = function() {
      vt = !0;
    }, O.unstable_runWithPriority = function(b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = J;
      J = b;
      try {
        return A();
      } finally {
        J = q;
      }
    }, O.unstable_scheduleCallback = function(b, A, q) {
      var al = O.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? al + q : al) : q = al, b) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return cl = q + cl, b = {
        id: Z++,
        callback: A,
        priorityLevel: b,
        startTime: q,
        expirationTime: cl,
        sortIndex: -1
      }, q > al ? (b.sortIndex = q, ol(E, b), F(p) === null && b === F(E) && (Ml ? (Dl(X), X = -1) : Ml = !0, Tt(xl, q - al))) : (b.sortIndex = cl, ol(p, b), jl || Ql || (jl = !0, Nl || (Nl = !0, Kl()))), b;
    }, O.unstable_shouldYield = xa, O.unstable_wrapCallback = function(b) {
      var A = J;
      return function() {
        var q = J;
        J = A;
        try {
          return b.apply(this, arguments);
        } finally {
          J = q;
        }
      };
    };
  })(si)), si;
}
var by;
function kd() {
  return by || (by = 1, ii.exports = Fd()), ii.exports;
}
var vi = { exports: {} }, Gl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry;
function Id() {
  if (ry) return Gl;
  ry = 1;
  var O = yi();
  function ol(p) {
    var E = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Z = 2; Z < arguments.length; Z++)
        E += "&args[]=" + encodeURIComponent(arguments[Z]);
    }
    return "Minified React error #" + p + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function F() {
  }
  var o = {
    d: {
      f: F,
      r: function() {
        throw Error(ol(522));
      },
      D: F,
      C: F,
      L: F,
      m: F,
      X: F,
      S: F,
      M: F
    },
    p: 0,
    findDOMNode: null
  }, fl = Symbol.for("react.portal");
  function sl(p, E, Z) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fl,
      key: N == null ? null : "" + N,
      children: p,
      containerInfo: E,
      implementation: Z
    };
  }
  var dl = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function hl(p, E) {
    if (p === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Gl.createPortal = function(p, E) {
    var Z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(ol(299));
    return sl(p, E, null, Z);
  }, Gl.flushSync = function(p) {
    var E = dl.T, Z = o.p;
    try {
      if (dl.T = null, o.p = 2, p) return p();
    } finally {
      dl.T = E, o.p = Z, o.d.f();
    }
  }, Gl.preconnect = function(p, E) {
    typeof p == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, o.d.C(p, E));
  }, Gl.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, Gl.preinit = function(p, E) {
    if (typeof p == "string" && E && typeof E.as == "string") {
      var Z = E.as, N = hl(Z, E.crossOrigin), J = typeof E.integrity == "string" ? E.integrity : void 0, Ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      Z === "style" ? o.d.S(
        p,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: N,
          integrity: J,
          fetchPriority: Ql
        }
      ) : Z === "script" && o.d.X(p, {
        crossOrigin: N,
        integrity: J,
        fetchPriority: Ql,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Gl.preinitModule = function(p, E) {
    if (typeof p == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var Z = hl(
            E.as,
            E.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: Z,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && o.d.M(p);
  }, Gl.preload = function(p, E) {
    if (typeof p == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var Z = E.as, N = hl(Z, E.crossOrigin);
      o.d.L(p, Z, {
        crossOrigin: N,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Gl.preloadModule = function(p, E) {
    if (typeof p == "string")
      if (E) {
        var Z = hl(E.as, E.crossOrigin);
        o.d.m(p, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: Z,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else o.d.m(p);
  }, Gl.requestFormReset = function(p) {
    o.d.r(p);
  }, Gl.unstable_batchedUpdates = function(p, E) {
    return p(E);
  }, Gl.useFormState = function(p, E, Z) {
    return dl.H.useFormState(p, E, Z);
  }, Gl.useFormStatus = function() {
    return dl.H.useHostTransitionStatus();
  }, Gl.version = "19.2.0", Gl;
}
var zy;
function Pd() {
  if (zy) return vi.exports;
  zy = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (ol) {
        console.error(ol);
      }
  }
  return O(), vi.exports = Id(), vi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ty;
function l1() {
  if (Ty) return ze;
  Ty = 1;
  var O = kd(), ol = yi(), F = Pd();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function fl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function sl(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function hl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if (sl(l) !== l)
      throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = sl(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return p(e), l;
          if (n === u) return p(e), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function Z(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Z(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, J = Symbol.for("react.element"), Ql = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Ml = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), Dl = Symbol.for("react.consumer"), Sl = Symbol.for("react.context"), Xl = Symbol.for("react.forward_ref"), xl = Symbol.for("react.suspense"), Nl = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Ll = Symbol.for("react.lazy"), Ot = Symbol.for("react.activity"), xa = Symbol.for("react.memo_cache_sentinel"), Mt = Symbol.iterator;
  function Kl(l) {
    return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ta = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ta ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ml:
        return "Fragment";
      case w:
        return "Profiler";
      case vt:
        return "StrictMode";
      case xl:
        return "Suspense";
      case Nl:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Sl:
          return l.displayName || "Context";
        case Dl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Xl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : Nt(l.type) || "Memo";
        case Ll:
          t = l._payload, l = l._init;
          try {
            return Nt(l(t));
          } catch {
          }
      }
    return null;
  }
  var Tt = Array.isArray, b = ol.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], cl = -1;
  function v(l) {
    return { current: l };
  }
  function T(l) {
    0 > cl || (l.current = al[cl], al[cl] = null, cl--);
  }
  function _(l, t) {
    cl++, al[cl] = l.current, l.current = t;
  }
  var D = v(null), B = v(null), G = v(null), I = v(null);
  function Zl(l, t) {
    switch (_(G, t), _(B, l), _(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Yv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Yv(t), l = jv(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(D), _(D, l);
  }
  function rl() {
    T(D), T(B), T(G);
  }
  function Mu(l) {
    l.memoizedState !== null && _(I, l);
    var t = D.current, a = jv(t, l.type);
    t !== a && (_(B, l), _(D, a));
  }
  function Te(l) {
    B.current === l && (T(D), T(B)), I.current === l && (T(I), oe._currentValue = q);
  }
  var Qn, mi;
  function Ea(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", mi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + mi;
  }
  var xn = !1;
  function Zn(l, t) {
    if (!l || xn) return "";
    xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var z = function() {
                throw Error();
              };
              if (Object.defineProperty(z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(z, []);
                } catch (S) {
                  var h = S;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (S) {
                  h = S;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                h = S;
              }
              (z = l()) && typeof z.catch == "function" && z.catch(function() {
              });
            }
          } catch (S) {
            if (S && h && typeof S.stack == "string")
              return [S.stack, h.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === i.length || e === d.length)
          for (u = i.length - 1, e = d.length - 1; 1 <= u && 0 <= e && i[u] !== d[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== d[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || i[u] !== d[e]) {
                  var g = `
` + i[u].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Ea(a) : "";
  }
  function _y(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ea(l.type);
      case 16:
        return Ea("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ea("Suspense Fallback") : Ea("Suspense");
      case 19:
        return Ea("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return Ea("Activity");
      default:
        return "";
    }
  }
  function di(l) {
    try {
      var t = "", a = null;
      do
        t += _y(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = O.unstable_scheduleCallback, Kn = O.unstable_cancelCallback, Oy = O.unstable_shouldYield, My = O.unstable_requestPaint, Pl = O.unstable_now, Dy = O.unstable_getCurrentPriorityLevel, hi = O.unstable_ImmediatePriority, oi = O.unstable_UserBlockingPriority, Ee = O.unstable_NormalPriority, Uy = O.unstable_LowPriority, Si = O.unstable_IdlePriority, py = O.log, Hy = O.unstable_setDisableYieldValue, Du = null, lt = null;
  function Ft(l) {
    if (typeof py == "function" && Hy(l), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(Du, l);
      } catch {
      }
  }
  var tt = Math.clz32 ? Math.clz32 : qy, Ny = Math.log, Ry = Math.LN2;
  function qy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ny(l) / Ry | 0) | 0;
  }
  var Ae = 256, _e = 262144, Oe = 4194304;
  function Aa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Me(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~n, u !== 0 ? e = Aa(u) : (f &= c, f !== 0 ? e = Aa(f) : a || (a = c & ~l, a !== 0 && (e = Aa(a))))) : (c = u & ~n, c !== 0 ? e = Aa(c) : f !== 0 ? e = Aa(f) : a || (a = u & ~l, a !== 0 && (e = Aa(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
  }
  function Uu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Cy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gi() {
    var l = Oe;
    return Oe <<= 1, (Oe & 62914560) === 0 && (Oe = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function pu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function By(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - tt(a), z = 1 << g;
      c[g] = 0, i[g] = -1;
      var h = d[g];
      if (h !== null)
        for (d[g] = null, g = 0; g < h.length; g++) {
          var S = h[g];
          S !== null && (S.lane &= -536870913);
        }
      a &= ~z;
    }
    u !== 0 && bi(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function ri(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - tt(a), e = 1 << u;
      e & t | l[u] & t && (l[u] |= t), a &= ~e;
    }
  }
  function zi(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : wn(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ti() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : fy(l.type));
  }
  function Ei(l, t) {
    var a = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = a;
    }
  }
  var kt = Math.random().toString(36).slice(2), Rl = "__reactFiber$" + kt, Jl = "__reactProps$" + kt, Za = "__reactContainer$" + kt, $n = "__reactEvents$" + kt, Yy = "__reactListeners$" + kt, jy = "__reactHandles$" + kt, Ai = "__reactResources$" + kt, Hu = "__reactMarker$" + kt;
  function Fn(l) {
    delete l[Rl], delete l[Jl], delete l[$n], delete l[Yy], delete l[jy];
  }
  function Va(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Za] || a[Rl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Lv(l); l !== null; ) {
            if (a = l[Rl]) return a;
            l = Lv(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function La(l) {
    if (l = l[Rl] || l[Za]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Nu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function Ka(l) {
    var t = l[Ai];
    return t || (t = l[Ai] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function pl(l) {
    l[Hu] = !0;
  }
  var _i = /* @__PURE__ */ new Set(), Oi = {};
  function _a(l, t) {
    Ja(l, t), Ja(l + "Capture", t);
  }
  function Ja(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++)
      _i.add(t[l]);
  }
  var Xy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mi = {}, Di = {};
  function Gy(l) {
    return Vn.call(Di, l) ? !0 : Vn.call(Mi, l) ? !1 : Xy.test(l) ? Di[l] = !0 : (Mi[l] = !0, !1);
  }
  function De(l, t, a) {
    if (Gy(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Ue(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Rt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function yt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ui(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qy(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function kn(l) {
    if (!l._valueTracker) {
      var t = Ui(l) ? "checked" : "value";
      l._valueTracker = Qy(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function pi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Ui(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var xy = /[\n"\\]/g;
  function mt(l) {
    return l.replace(
      xy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, a, u, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + yt(t)) : l.value !== "" + yt(t) && (l.value = "" + yt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, yt(t)) : a != null ? Pn(l, f, yt(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + yt(c) : l.removeAttribute("name");
  }
  function Hi(l, t, a, u, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      a = a != null ? "" + yt(a) : "", t = t != null ? "" + yt(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), kn(l);
  }
  function Pn(l, t, a) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function wa(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < a.length; e++)
        t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + yt(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          l[e].selected = !0, u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ni(l, t, a) {
    if (t != null && (t = "" + yt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + yt(a) : "";
  }
  function Ri(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (Tt(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), t = a;
    }
    a = yt(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), kn(l);
  }
  function Wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Zy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Zy.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Ci(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var e in t)
        u = t[e], t.hasOwnProperty(e) && a[e] !== u && qi(l, e, u);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qi(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ly = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function He(l) {
    return Ly.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function qt() {
  }
  var tf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $a = null, Fa = null;
  function Bi(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[Jl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Jl] || null;
                if (!e) throw Error(o(90));
                In(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              u = a[t], u.form === l.form && pi(u);
          }
          break l;
        case "textarea":
          Ni(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var uf = !1;
  function Yi(l, t, a) {
    if (uf) return l(t, a);
    uf = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (uf = !1, ($a !== null || Fa !== null) && (bn(), $a && (t = $a, l = Fa, Fa = $a = null, Bi(t), l)))
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Ru(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Jl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        o(231, t, typeof a)
      );
    return a;
  }
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Ct)
    try {
      var qu = {};
      Object.defineProperty(qu, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", qu, qu), window.removeEventListener("test", qu, qu);
    } catch {
      ef = !1;
    }
  var It = null, nf = null, Ne = null;
  function ji() {
    if (Ne) return Ne;
    var l, t = nf, a = t.length, u, e = "value" in It ? It.value : It.textContent, n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++) ;
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
    return Ne = e.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Xi() {
    return !1;
  }
  function wl(l) {
    function t(a, u, e, n, f) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Xi, this.isPropagationStopped = Xi, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var Oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = wl(Oa), Cu = N({}, Oa, { view: 0, detail: 0 }), Ky = wl(Cu), ff, cf, Bu, Be = N({}, Cu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (ff = l.screenX - Bu.screenX, cf = l.screenY - Bu.screenY) : cf = ff = 0, Bu = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), Gi = wl(Be), Jy = N({}, Be, { dataTransfer: 0 }), wy = wl(Jy), Wy = N({}, Cu, { relatedTarget: 0 }), sf = wl(Wy), $y = N({}, Oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fy = wl($y), ky = N({}, Oa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Iy = wl(ky), Py = N({}, Oa, { data: 0 }), Qi = wl(Py), lm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, tm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function um(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = am[l]) ? !!t[l] : !1;
  }
  function vf() {
    return um;
  }
  var em = N({}, Cu, {
    key: function(l) {
      if (l.key) {
        var t = lm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? tm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nm = wl(em), fm = N({}, Be, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xi = wl(fm), cm = N({}, Cu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vf
  }), im = wl(cm), sm = N({}, Oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = wl(sm), ym = N({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mm = wl(ym), dm = N({}, Oa, {
    newState: 0,
    oldState: 0
  }), hm = wl(dm), om = [9, 13, 27, 32], yf = Ct && "CompositionEvent" in window, Yu = null;
  Ct && "documentMode" in document && (Yu = document.documentMode);
  var Sm = Ct && "TextEvent" in window && !Yu, Zi = Ct && (!yf || Yu && 8 < Yu && 11 >= Yu), Vi = " ", Li = !1;
  function Ki(l, t) {
    switch (l) {
      case "keyup":
        return om.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ji(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ka = !1;
  function gm(l, t) {
    switch (l) {
      case "compositionend":
        return Ji(t);
      case "keypress":
        return t.which !== 32 ? null : (Li = !0, Vi);
      case "textInput":
        return l = t.data, l === Vi && Li ? null : l;
      default:
        return null;
    }
  }
  function bm(l, t) {
    if (ka)
      return l === "compositionend" || !yf && Ki(l, t) ? (l = ji(), Ne = nf = It = null, ka = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Zi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!rm[l.type] : t === "textarea";
  }
  function Wi(l, t, a, u) {
    $a ? Fa ? Fa.push(u) : Fa = [u] : $a = u, t = On(t, "onChange"), 0 < t.length && (a = new Ce(
      "onChange",
      "change",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }));
  }
  var ju = null, Xu = null;
  function zm(l) {
    Hv(l, 0);
  }
  function Ye(l) {
    var t = Nu(l);
    if (pi(t)) return l;
  }
  function $i(l, t) {
    if (l === "change") return t;
  }
  var Fi = !1;
  if (Ct) {
    var mf;
    if (Ct) {
      var df = "oninput" in document;
      if (!df) {
        var ki = document.createElement("div");
        ki.setAttribute("oninput", "return;"), df = typeof ki.oninput == "function";
      }
      mf = df;
    } else mf = !1;
    Fi = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ii() {
    ju && (ju.detachEvent("onpropertychange", Pi), Xu = ju = null);
  }
  function Pi(l) {
    if (l.propertyName === "value" && Ye(Xu)) {
      var t = [];
      Wi(
        t,
        Xu,
        l,
        af(l)
      ), Yi(zm, t);
    }
  }
  function Tm(l, t, a) {
    l === "focusin" ? (Ii(), ju = t, Xu = a, ju.attachEvent("onpropertychange", Pi)) : l === "focusout" && Ii();
  }
  function Em(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(Xu);
  }
  function Am(l, t) {
    if (l === "click") return Ye(t);
  }
  function _m(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Om(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : Om;
  function Gu(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !at(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function l0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function t0(l, t) {
    var a = l0(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t)
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = l0(a);
    }
  }
  function a0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? a0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function u0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function hf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Mm = Ct && "documentMode" in document && 11 >= document.documentMode, Ia = null, of = null, Qu = null, Sf = !1;
  function e0(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Sf || Ia == null || Ia !== pe(u) || (u = Ia, "selectionStart" in u && hf(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = On(of, "onSelect"), 0 < u.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: u }), t.target = Ia)));
  }
  function Ma(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Pa = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionrun: Ma("Transition", "TransitionRun"),
    transitionstart: Ma("Transition", "TransitionStart"),
    transitioncancel: Ma("Transition", "TransitionCancel"),
    transitionend: Ma("Transition", "TransitionEnd")
  }, gf = {}, n0 = {};
  Ct && (n0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function Da(l) {
    if (gf[l]) return gf[l];
    if (!Pa[l]) return l;
    var t = Pa[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in n0)
        return gf[l] = t[a];
    return l;
  }
  var f0 = Da("animationend"), c0 = Da("animationiteration"), i0 = Da("animationstart"), Dm = Da("transitionrun"), Um = Da("transitionstart"), pm = Da("transitioncancel"), s0 = Da("transitionend"), v0 = /* @__PURE__ */ new Map(), bf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  bf.push("scrollEnd");
  function Et(l, t) {
    v0.set(l, t), _a(t, [l]);
  }
  var je = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, dt = [], lu = 0, rf = 0;
  function Xe() {
    for (var l = lu, t = rf = lu = 0; t < l; ) {
      var a = dt[t];
      dt[t++] = null;
      var u = dt[t];
      dt[t++] = null;
      var e = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (dt[t++] = null, u !== null && e !== null) {
        var f = u.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
      }
      n !== 0 && y0(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    dt[lu++] = l, dt[lu++] = t, dt[lu++] = a, dt[lu++] = u, rf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function zf(l, t, a, u) {
    return Ge(l, t, a, u), Qe(l);
  }
  function Ua(l, t) {
    return Ge(l, null, null, t), Qe(l);
  }
  function y0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - tt(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [t] : u.push(t), t.lane = a | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, pc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var tu = {};
  function Hm(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ut(l, t, a, u) {
    return new Hm(l, t, a, u);
  }
  function Tf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Bt(l, t) {
    var a = l.alternate;
    return a === null ? (a = ut(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function m0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function xe(l, t, a, u, e, n) {
    var f = 0;
    if (u = l, typeof l == "function") Tf(l) && (f = 1);
    else if (typeof l == "string")
      f = Bd(
        l,
        a,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Ot:
          return l = ut(31, a, t, e), l.elementType = Ot, l.lanes = n, l;
        case Ml:
          return pa(a.children, e, n, t);
        case vt:
          f = 8, e |= 24;
          break;
        case w:
          return l = ut(12, a, t, e | 2), l.elementType = w, l.lanes = n, l;
        case xl:
          return l = ut(13, a, t, e), l.elementType = xl, l.lanes = n, l;
        case Nl:
          return l = ut(19, a, t, e), l.elementType = Nl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Sl:
                f = 10;
                break l;
              case Dl:
                f = 9;
                break l;
              case Xl:
                f = 11;
                break l;
              case X:
                f = 14;
                break l;
              case Ll:
                f = 16, u = null;
                break l;
            }
          f = 29, a = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), u = null;
      }
    return t = ut(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
  }
  function pa(l, t, a, u) {
    return l = ut(7, l, u, t), l.lanes = a, l;
  }
  function Ef(l, t, a) {
    return l = ut(6, l, null, t), l.lanes = a, l;
  }
  function d0(l) {
    var t = ut(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Af(l, t, a) {
    return t = ut(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var h0 = /* @__PURE__ */ new WeakMap();
  function ht(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = h0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: di(t)
      }, h0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: di(t)
    };
  }
  var au = [], uu = 0, Ze = null, xu = 0, ot = [], St = 0, Pt = null, Dt = 1, Ut = "";
  function Yt(l, t) {
    au[uu++] = xu, au[uu++] = Ze, Ze = l, xu = t;
  }
  function o0(l, t, a) {
    ot[St++] = Dt, ot[St++] = Ut, ot[St++] = Pt, Pt = l;
    var u = Dt;
    l = Ut;
    var e = 32 - tt(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - tt(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Dt = 1 << 32 - tt(t) + e | a << e | u, Ut = n + l;
    } else
      Dt = 1 << n | a << e | u, Ut = l;
  }
  function _f(l) {
    l.return !== null && (Yt(l, 1), o0(l, 1, 0));
  }
  function Of(l) {
    for (; l === Ze; )
      Ze = au[--uu], au[uu] = null, xu = au[--uu], au[uu] = null;
    for (; l === Pt; )
      Pt = ot[--St], ot[St] = null, Ut = ot[--St], ot[St] = null, Dt = ot[--St], ot[St] = null;
  }
  function S0(l, t) {
    ot[St++] = Dt, ot[St++] = Ut, ot[St++] = Pt, Dt = t.id, Ut = t.overflow, Pt = l;
  }
  var ql = null, vl = null, K = !1, la = null, gt = !1, Mf = Error(o(519));
  function ta(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Zu(ht(t, l)), Mf;
  }
  function g0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Rl] = l, t[Jl] = u, a) {
      case "dialog":
        x("cancel", t), x("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        x("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ve.length; a++)
          x(ve[a], t);
        break;
      case "source":
        x("error", t);
        break;
      case "img":
      case "image":
      case "link":
        x("error", t), x("load", t);
        break;
      case "details":
        x("toggle", t);
        break;
      case "input":
        x("invalid", t), Hi(
          t,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        );
        break;
      case "select":
        x("invalid", t);
        break;
      case "textarea":
        x("invalid", t), Ri(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Cv(t.textContent, a) ? (u.popover != null && (x("beforetoggle", t), x("toggle", t)), u.onScroll != null && x("scroll", t), u.onScrollEnd != null && x("scrollend", t), u.onClick != null && (t.onclick = qt), t = !0) : t = !1, t || ta(l, !0);
  }
  function b0(l) {
    for (ql = l.return; ql; )
      switch (ql.tag) {
        case 5:
        case 31:
        case 13:
          gt = !1;
          return;
        case 27:
        case 3:
          gt = !0;
          return;
        default:
          ql = ql.return;
      }
  }
  function eu(l) {
    if (l !== ql) return !1;
    if (!K) return b0(l), K = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Lc(l.type, l.memoizedProps)), a = !a), a && vl && ta(l), b0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      vl = Vv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      vl = Vv(l);
    } else
      t === 27 ? (t = vl, oa(l.type) ? (l = $c, $c = null, vl = l) : vl = t) : vl = ql ? rt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ha() {
    vl = ql = null, K = !1;
  }
  function Df() {
    var l = la;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), la = null), l;
  }
  function Zu(l) {
    la === null ? la = [l] : la.push(l);
  }
  var Uf = v(null), Na = null, jt = null;
  function aa(l, t, a) {
    _(Uf, t._currentValue), t._currentValue = a;
  }
  function Xt(l) {
    l._currentValue = Uf.current, T(Uf);
  }
  function pf(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Hf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), pf(
                n.return,
                a,
                l
              ), u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(o(341));
        f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), pf(f, a, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          at(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === I.current) {
        if (f = e.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      a,
      u
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!at(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ra(l) {
    Na = l, jt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Cl(l) {
    return r0(Na, l);
  }
  function Le(l, t) {
    return Na === null && Ra(l), r0(l, t);
  }
  function r0(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, jt === null) {
      if (l === null) throw Error(o(308));
      jt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else jt = jt.next = t;
    return a;
  }
  var Nm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, Rm = O.unstable_scheduleCallback, qm = O.unstable_NormalPriority, El = {
    $$typeof: Sl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Nf() {
    return {
      controller: new Nm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Vu(l) {
    l.refCount--, l.refCount === 0 && Rm(qm, function() {
      l.controller.abort();
    });
  }
  var Lu = null, Rf = 0, fu = 0, cu = null;
  function Cm(l, t) {
    if (Lu === null) {
      var a = Lu = [];
      Rf = 0, fu = Bc(), cu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Rf++, t.then(z0, z0), t;
  }
  function z0() {
    if (--Rf === 0 && Lu !== null) {
      cu !== null && (cu.status = "fulfilled");
      var l = Lu;
      Lu = null, fu = 0, cu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Bm(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return l.then(
      function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var T0 = b.S;
  b.S = function(l, t) {
    ev = Pl(), typeof t == "object" && t !== null && typeof t.then == "function" && Cm(l, t), T0 !== null && T0(l, t);
  };
  var qa = v(null);
  function qf() {
    var l = qa.current;
    return l !== null ? l : il.pooledCache;
  }
  function Ke(l, t) {
    t === null ? _(qa, qa.current) : _(qa, t.pool);
  }
  function E0() {
    var l = qf();
    return l === null ? null : { parent: El._currentValue, pool: l };
  }
  var iu = Error(o(460)), Cf = Error(o(474)), Je = Error(o(542)), we = { then: function() {
  } };
  function A0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(qt, qt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, M0(l), l;
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (l = il, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, M0(l), l;
        }
        throw Ba = t, iu;
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ba = a, iu) : a;
    }
  }
  var Ba = null;
  function O0() {
    if (Ba === null) throw Error(o(459));
    var l = Ba;
    return Ba = null, l;
  }
  function M0(l) {
    if (l === iu || l === Je)
      throw Error(o(483));
  }
  var su = null, Ku = 0;
  function We(l) {
    var t = Ku;
    return Ku += 1, su === null && (su = []), _0(su, l, t);
  }
  function Ju(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === J ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function D0(l) {
    function t(y, s) {
      if (l) {
        var m = y.deletions;
        m === null ? (y.deletions = [s], y.flags |= 16) : m.push(s);
      }
    }
    function a(y, s) {
      if (!l) return null;
      for (; s !== null; )
        t(y, s), s = s.sibling;
      return null;
    }
    function u(y) {
      for (var s = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? s.set(y.key, y) : s.set(y.index, y), y = y.sibling;
      return s;
    }
    function e(y, s) {
      return y = Bt(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, m) {
      return y.index = m, l ? (m = y.alternate, m !== null ? (m = m.index, m < s ? (y.flags |= 67108866, s) : m) : (y.flags |= 67108866, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, s, m, r) {
      return s === null || s.tag !== 6 ? (s = Ef(m, y.mode, r), s.return = y, s) : (s = e(s, m), s.return = y, s);
    }
    function i(y, s, m, r) {
      var H = m.type;
      return H === Ml ? g(
        y,
        s,
        m.props.children,
        r,
        m.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ll && Ca(H) === s.type) ? (s = e(s, m.props), Ju(s, m), s.return = y, s) : (s = xe(
        m.type,
        m.key,
        m.props,
        null,
        y.mode,
        r
      ), Ju(s, m), s.return = y, s);
    }
    function d(y, s, m, r) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Af(m, y.mode, r), s.return = y, s) : (s = e(s, m.children || []), s.return = y, s);
    }
    function g(y, s, m, r, H) {
      return s === null || s.tag !== 7 ? (s = pa(
        m,
        y.mode,
        r,
        H
      ), s.return = y, s) : (s = e(s, m), s.return = y, s);
    }
    function z(y, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Ef(
          "" + s,
          y.mode,
          m
        ), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Ql:
            return m = xe(
              s.type,
              s.key,
              s.props,
              null,
              y.mode,
              m
            ), Ju(m, s), m.return = y, m;
          case jl:
            return s = Af(
              s,
              y.mode,
              m
            ), s.return = y, s;
          case Ll:
            return s = Ca(s), z(y, s, m);
        }
        if (Tt(s) || Kl(s))
          return s = pa(
            s,
            y.mode,
            m,
            null
          ), s.return = y, s;
        if (typeof s.then == "function")
          return z(y, We(s), m);
        if (s.$$typeof === Sl)
          return z(
            y,
            Le(y, s),
            m
          );
        $e(y, s);
      }
      return null;
    }
    function h(y, s, m, r) {
      var H = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return H !== null ? null : c(y, s, "" + m, r);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ql:
            return m.key === H ? i(y, s, m, r) : null;
          case jl:
            return m.key === H ? d(y, s, m, r) : null;
          case Ll:
            return m = Ca(m), h(y, s, m, r);
        }
        if (Tt(m) || Kl(m))
          return H !== null ? null : g(y, s, m, r, null);
        if (typeof m.then == "function")
          return h(
            y,
            s,
            We(m),
            r
          );
        if (m.$$typeof === Sl)
          return h(
            y,
            s,
            Le(y, m),
            r
          );
        $e(y, m);
      }
      return null;
    }
    function S(y, s, m, r, H) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return y = y.get(m) || null, c(s, y, "" + r, H);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Ql:
            return y = y.get(
              r.key === null ? m : r.key
            ) || null, i(s, y, r, H);
          case jl:
            return y = y.get(
              r.key === null ? m : r.key
            ) || null, d(s, y, r, H);
          case Ll:
            return r = Ca(r), S(
              y,
              s,
              m,
              r,
              H
            );
        }
        if (Tt(r) || Kl(r))
          return y = y.get(m) || null, g(s, y, r, H, null);
        if (typeof r.then == "function")
          return S(
            y,
            s,
            m,
            We(r),
            H
          );
        if (r.$$typeof === Sl)
          return S(
            y,
            s,
            m,
            Le(s, r),
            H
          );
        $e(s, r);
      }
      return null;
    }
    function M(y, s, m, r) {
      for (var H = null, W = null, U = s, j = s = 0, L = null; U !== null && j < m.length; j++) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var $ = h(
          y,
          U,
          m[j],
          r
        );
        if ($ === null) {
          U === null && (U = L);
          break;
        }
        l && U && $.alternate === null && t(y, U), s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $, U = L;
      }
      if (j === m.length)
        return a(y, U), K && Yt(y, j), H;
      if (U === null) {
        for (; j < m.length; j++)
          U = z(y, m[j], r), U !== null && (s = n(
            U,
            s,
            j
          ), W === null ? H = U : W.sibling = U, W = U);
        return K && Yt(y, j), H;
      }
      for (U = u(U); j < m.length; j++)
        L = S(
          U,
          y,
          j,
          m[j],
          r
        ), L !== null && (l && L.alternate !== null && U.delete(
          L.key === null ? j : L.key
        ), s = n(
          L,
          s,
          j
        ), W === null ? H = L : W.sibling = L, W = L);
      return l && U.forEach(function(za) {
        return t(y, za);
      }), K && Yt(y, j), H;
    }
    function R(y, s, m, r) {
      if (m == null) throw Error(o(151));
      for (var H = null, W = null, U = s, j = s = 0, L = null, $ = m.next(); U !== null && !$.done; j++, $ = m.next()) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var za = h(y, U, $.value, r);
        if (za === null) {
          U === null && (U = L);
          break;
        }
        l && U && za.alternate === null && t(y, U), s = n(za, s, j), W === null ? H = za : W.sibling = za, W = za, U = L;
      }
      if ($.done)
        return a(y, U), K && Yt(y, j), H;
      if (U === null) {
        for (; !$.done; j++, $ = m.next())
          $ = z(y, $.value, r), $ !== null && (s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $);
        return K && Yt(y, j), H;
      }
      for (U = u(U); !$.done; j++, $ = m.next())
        $ = S(U, y, j, $.value, r), $ !== null && (l && $.alternate !== null && U.delete($.key === null ? j : $.key), s = n($, s, j), W === null ? H = $ : W.sibling = $, W = $);
      return l && U.forEach(function(Jd) {
        return t(y, Jd);
      }), K && Yt(y, j), H;
    }
    function nl(y, s, m, r) {
      if (typeof m == "object" && m !== null && m.type === Ml && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ql:
            l: {
              for (var H = m.key; s !== null; ) {
                if (s.key === H) {
                  if (H = m.type, H === Ml) {
                    if (s.tag === 7) {
                      a(
                        y,
                        s.sibling
                      ), r = e(
                        s,
                        m.props.children
                      ), r.return = y, y = r;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ll && Ca(H) === s.type) {
                    a(
                      y,
                      s.sibling
                    ), r = e(s, m.props), Ju(r, m), r.return = y, y = r;
                    break l;
                  }
                  a(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              m.type === Ml ? (r = pa(
                m.props.children,
                y.mode,
                r,
                m.key
              ), r.return = y, y = r) : (r = xe(
                m.type,
                m.key,
                m.props,
                null,
                y.mode,
                r
              ), Ju(r, m), r.return = y, y = r);
            }
            return f(y);
          case jl:
            l: {
              for (H = m.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                    a(
                      y,
                      s.sibling
                    ), r = e(s, m.children || []), r.return = y, y = r;
                    break l;
                  } else {
                    a(y, s);
                    break;
                  }
                else t(y, s);
                s = s.sibling;
              }
              r = Af(m, y.mode, r), r.return = y, y = r;
            }
            return f(y);
          case Ll:
            return m = Ca(m), nl(
              y,
              s,
              m,
              r
            );
        }
        if (Tt(m))
          return M(
            y,
            s,
            m,
            r
          );
        if (Kl(m)) {
          if (H = Kl(m), typeof H != "function") throw Error(o(150));
          return m = H.call(m), R(
            y,
            s,
            m,
            r
          );
        }
        if (typeof m.then == "function")
          return nl(
            y,
            s,
            We(m),
            r
          );
        if (m.$$typeof === Sl)
          return nl(
            y,
            s,
            Le(y, m),
            r
          );
        $e(y, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, s !== null && s.tag === 6 ? (a(y, s.sibling), r = e(s, m), r.return = y, y = r) : (a(y, s), r = Ef(m, y.mode, r), r.return = y, y = r), f(y)) : a(y, s);
    }
    return function(y, s, m, r) {
      try {
        Ku = 0;
        var H = nl(
          y,
          s,
          m,
          r
        );
        return su = null, H;
      } catch (U) {
        if (U === iu || U === Je) throw U;
        var W = ut(29, U, null, y.mode);
        return W.lanes = r, W.return = y, W;
      } finally {
      }
    };
  }
  var Ya = D0(!0), U0 = D0(!1), ua = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function na(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (k & 2) !== 0) {
      var e = u.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Qe(l), y0(l, null, a), t;
    }
    return Ge(l, u, t, a), Qe(l);
  }
  function wu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, ri(l, a);
    }
  }
  function jf(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, a = a.next;
        } while (a !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Xf = !1;
  function Wu() {
    if (Xf) {
      var l = cu;
      if (l !== null) throw l;
    }
  }
  function $u(l, t, a, u) {
    Xf = !1;
    var e = l.updateQueue;
    ua = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = d : c.next = d, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var z = e.baseState;
      f = 0, g = d = i = null, c = n;
      do {
        var h = c.lane & -536870913, S = h !== c.lane;
        if (S ? (V & h) === h : (u & h) === h) {
          h !== 0 && h === fu && (Xf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, R = c;
            h = t;
            var nl = a;
            switch (R.tag) {
              case 1:
                if (M = R.payload, typeof M == "function") {
                  z = M.call(nl, z, h);
                  break l;
                }
                z = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = R.payload, h = typeof M == "function" ? M.call(nl, z, h) : M, h == null) break l;
                z = N({}, z, h);
                break l;
              case 2:
                ua = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [h] : S.push(h));
        } else
          S = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (d = g = S, i = z) : g = g.next = S, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = z), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), va |= f, l.lanes = f, l.memoizedState = z;
    }
  }
  function p0(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        p0(a[l], t);
  }
  var vu = v(null), Fe = v(0);
  function N0(l, t) {
    l = wt, _(Fe, l), _(vu, t), wt = l | t.baseLanes;
  }
  function Gf() {
    _(Fe, wt), _(vu, vu.current);
  }
  function Qf() {
    wt = Fe.current, T(vu), T(Fe);
  }
  var et = v(null), bt = null;
  function fa(l) {
    var t = l.alternate;
    _(zl, zl.current & 1), _(et, l), bt === null && (t === null || vu.current !== null || t.memoizedState !== null) && (bt = l);
  }
  function xf(l) {
    _(zl, zl.current), _(et, l), bt === null && (bt = l);
  }
  function R0(l) {
    l.tag === 22 ? (_(zl, zl.current), _(et, l), bt === null && (bt = l)) : ca();
  }
  function ca() {
    _(zl, zl.current), _(et, et.current);
  }
  function nt(l) {
    T(et), bt === l && (bt = null), T(zl);
  }
  var zl = v(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || wc(a) || Wc(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gt = 0, Y = null, ul = null, Al = null, Ie = !1, yu = !1, ja = !1, Pe = 0, Fu = 0, mu = null, Ym = 0;
  function gl() {
    throw Error(o(321));
  }
  function Zf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!at(l[a], t[a])) return !1;
    return !0;
  }
  function Vf(l, t, a, u, e, n) {
    return Gt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? os : ec, ja = !1, n = a(u, e), ja = !1, yu && (n = C0(
      t,
      a,
      u,
      e
    )), q0(l), n;
  }
  function q0(l) {
    b.H = Pu;
    var t = ul !== null && ul.next !== null;
    if (Gt = 0, Al = ul = Y = null, Ie = !1, Fu = 0, mu = null, t) throw Error(o(300));
    l === null || _l || (l = l.dependencies, l !== null && Ve(l) && (_l = !0));
  }
  function C0(l, t, a, u) {
    Y = l;
    var e = 0;
    do {
      if (yu && (mu = null), Fu = 0, yu = !1, 25 <= e) throw Error(o(301));
      if (e += 1, Al = ul = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = Ss, n = t(a, u);
    } while (yu);
    return n;
  }
  function jm() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ku(t) : t, l = l.useState()[0], (ul !== null ? ul.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Lf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Kf(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Jf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    Gt = 0, Al = ul = Y = null, yu = !1, Fu = Pe = 0, mu = null;
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? Y.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function Tl() {
    if (ul === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = Al === null ? Y.memoizedState : Al.next;
    if (t !== null)
      Al = t, ul = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(o(467)) : Error(o(310));
      ul = l, l = {
        memoizedState: ul.memoizedState,
        baseState: ul.baseState,
        baseQueue: ul.baseQueue,
        queue: ul.queue,
        next: null
      }, Al === null ? Y.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(l) {
    var t = Fu;
    return Fu += 1, mu === null && (mu = []), l = _0(mu, l, t), t = Y, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? os : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ku(l);
      if (l.$$typeof === Sl) return Cl(l);
    }
    throw Error(o(438, String(l)));
  }
  function wf(l) {
    var t = null, a = Y.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = Y.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = ln(), Y.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++)
        a[u] = xa;
    return t.index++, a;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = Tl();
    return Wf(t, ul, l);
  }
  function Wf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, u.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, g = !1;
      do {
        var z = d.lane & -536870913;
        if (z !== d.lane ? (V & z) === z : (Gt & z) === z) {
          var h = d.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), z === fu && (g = !0);
          else if ((Gt & h) === h) {
            d = d.next, h === fu && (g = !0);
            continue;
          } else
            z = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = z, f = n) : i = i.next = z, Y.lanes |= h, va |= h;
          z = d.action, ja && a(n, z), n = d.hasEagerState ? d.eagerState : a(n, z);
        } else
          h = {
            lane: z,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, Y.lanes |= z, va |= z;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !at(n, l.memoizedState) && (_l = !0, g && (a = cu, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function $f(l) {
    var t = Tl(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, e = a.pending, n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      at(n, t.memoizedState) || (_l = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function B0(l, t, a) {
    var u = Y, e = Tl(), n = K;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var f = !at(
      (ul || e).memoizedState,
      a
    );
    if (f && (e.memoizedState = a, _l = !0), e = e.queue, If(X0.bind(null, u, e, l), [
      l
    ]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (u.flags |= 2048, du(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          u,
          e,
          a,
          t
        ),
        null
      ), il === null) throw Error(o(349));
      n || (Gt & 127) !== 0 || Y0(u, t, a);
    }
    return a;
  }
  function Y0(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = Y.updateQueue, t === null ? (t = ln(), Y.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function j0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, G0(t) && Q0(l);
  }
  function X0(l, t, a) {
    return a(function() {
      G0(t) && Q0(l);
    });
  }
  function G0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !at(l, a);
    } catch {
      return !0;
    }
  }
  function Q0(l) {
    var t = Ua(l, 2);
    t !== null && Il(t, l, 2);
  }
  function Ff(l) {
    var t = Vl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), ja) {
        Ft(!0);
        try {
          a();
        } finally {
          Ft(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qt,
      lastRenderedState: l
    }, t;
  }
  function x0(l, t, a, u) {
    return l.baseState = a, Wf(
      l,
      ul,
      typeof u == "function" ? u : Qt
    );
  }
  function Xm(l, t, a, u, e) {
    if (nn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? a(!0) : n.isTransition = !1, u(n), a = t.pending, a === null ? (n.next = t.pending = n, Z0(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function Z0(l, t) {
    var a = t.action, u = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = a(e, u), i = b.S;
        i !== null && i(f, c), V0(l, t, c);
      } catch (d) {
        kf(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = a(e, u), V0(l, t, n);
      } catch (d) {
        kf(l, t, d);
      }
  }
  function V0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        L0(l, t, u);
      },
      function(u) {
        return kf(l, t, u);
      }
    ) : L0(l, t, a);
  }
  function L0(l, t, a) {
    t.status = "fulfilled", t.value = a, K0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Z0(l, a)));
  }
  function kf(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, K0(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function K0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function J0(l, t) {
    return t;
  }
  function w0(l, t) {
    if (K) {
      var a = il.formState;
      if (a !== null) {
        l: {
          var u = Y;
          if (K) {
            if (vl) {
              t: {
                for (var e = vl, n = gt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = rt(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                vl = rt(
                  e.nextSibling
                ), u = e.data === "F!";
                break l;
              }
            }
            ta(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = Vl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: J0,
      lastRenderedState: t
    }, a.queue = u, a = ms.bind(
      null,
      Y,
      u
    ), u.dispatch = a, u = Ff(!1), n = uc.bind(
      null,
      Y,
      !1,
      u.queue
    ), u = Vl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = e, a = Xm.bind(
      null,
      Y,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = l, [t, a, !1];
  }
  function W0(l) {
    var t = Tl();
    return $0(t, ul, l);
  }
  function $0(l, t, a) {
    if (t = Wf(
      l,
      t,
      J0
    )[0], l = an(Qt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var u = ku(t);
      } catch (f) {
        throw f === iu ? Je : f;
      }
    else u = t;
    t = Tl();
    var e = t.queue, n = e.dispatch;
    return a !== t.memoizedState && (Y.flags |= 2048, du(
      9,
      { destroy: void 0 },
      Gm.bind(null, e, a),
      null
    )), [u, n, l];
  }
  function Gm(l, t) {
    l.action = t;
  }
  function F0(l) {
    var t = Tl(), a = ul;
    if (a !== null)
      return $0(t, a, l);
    Tl(), t = t.memoizedState, a = Tl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [t, u, !1];
  }
  function du(l, t, a, u) {
    return l = { tag: l, create: a, deps: u, inst: t, next: null }, t = Y.updateQueue, t === null && (t = ln(), Y.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function k0() {
    return Tl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Vl();
    Y.flags |= l, e.memoizedState = du(
      1 | t,
      { destroy: void 0 },
      a,
      u === void 0 ? null : u
    );
  }
  function en(l, t, a, u) {
    var e = Tl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ul !== null && u !== null && Zf(u, ul.memoizedState.deps) ? e.memoizedState = du(t, n, a, u) : (Y.flags |= l, e.memoizedState = du(
      1 | t,
      n,
      a,
      u
    ));
  }
  function I0(l, t) {
    un(8390656, 8, l, t);
  }
  function If(l, t) {
    en(2048, 8, l, t);
  }
  function Qm(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = ln(), Y.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function P0(l) {
    var t = Tl().memoizedState;
    return Qm({ ref: t, nextImpl: l }), function() {
      if ((k & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function ls(l, t) {
    return en(4, 2, l, t);
  }
  function ts(l, t) {
    return en(4, 4, l, t);
  }
  function as(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function us(l, t, a) {
    a = a != null ? a.concat([l]) : null, en(4, 4, as.bind(null, t, l), a);
  }
  function Pf() {
  }
  function es(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Zf(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function ns(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Zf(t, u[1]))
      return u[0];
    if (u = l(), ja) {
      Ft(!0);
      try {
        l();
      } finally {
        Ft(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function lc(l, t, a) {
    return a === void 0 || (Gt & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = fv(), Y.lanes |= l, va |= l, a);
  }
  function fs(l, t, a, u) {
    return at(a, t) ? a : vu.current !== null ? (l = lc(l, a, u), at(l, t) || (_l = !0), l) : (Gt & 42) === 0 || (Gt & 1073741824) !== 0 && (V & 261930) === 0 ? (_l = !0, l.memoizedState = a) : (l = fv(), Y.lanes |= l, va |= l, t);
  }
  function cs(l, t, a, u, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, uc(l, !1, t, a);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = Bm(
          i,
          u
        );
        Iu(
          l,
          t,
          g,
          it(l)
        );
      } else
        Iu(
          l,
          t,
          u,
          it(l)
        );
    } catch (z) {
      Iu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: z },
        it()
      );
    } finally {
      A.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function xm() {
  }
  function tc(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var e = is(l).queue;
    cs(
      l,
      e,
      t,
      q,
      a === null ? xm : function() {
        return ss(l), a(u);
      }
    );
  }
  function is(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ss(l) {
    var t = is(l);
    t.next === null && (t = l.alternate.memoizedState), Iu(
      l,
      t.next.queue,
      {},
      it()
    );
  }
  function ac() {
    return Cl(oe);
  }
  function vs() {
    return Tl().memoizedState;
  }
  function ys() {
    return Tl().memoizedState;
  }
  function Zm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = ea(a);
          var u = na(t, l, a);
          u !== null && (Il(u, t, a), wu(u, t, a)), t = { cache: Nf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vm(l, t, a) {
    var u = it();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? ds(t, a) : (a = zf(l, t, a, u), a !== null && (Il(a, l, u), hs(a, t, u)));
  }
  function ms(l, t, a) {
    var u = it();
    Iu(l, t, a, u);
  }
  function Iu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) ds(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = !0, e.eagerState = c, at(c, f))
            return Ge(l, t, e, 0), il === null && Xe(), !1;
        } catch {
        } finally {
        }
      if (a = zf(l, t, e, u), a !== null)
        return Il(a, l, u), hs(a, t, u), !0;
    }
    return !1;
  }
  function uc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(o(479));
    } else
      t = zf(
        l,
        a,
        u,
        2
      ), t !== null && Il(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function ds(l, t) {
    yu = Ie = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function hs(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, ri(l, a);
    }
  }
  var Pu = {
    readContext: Cl,
    use: tn,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl
  };
  Pu.useEffectEvent = gl;
  var os = {
    readContext: Cl,
    use: tn,
    useCallback: function(l, t) {
      return Vl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Cl,
    useEffect: I0,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, un(
        4194308,
        4,
        as.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return un(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      un(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = Vl();
      t = t === void 0 ? null : t;
      var u = l();
      if (ja) {
        Ft(!0);
        try {
          l();
        } finally {
          Ft(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = Vl();
      if (a !== void 0) {
        var e = a(t);
        if (ja) {
          Ft(!0);
          try {
            a(t);
          } finally {
            Ft(!1);
          }
        }
      } else e = t;
      return u.memoizedState = u.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, u.queue = l, l = l.dispatch = Vm.bind(
        null,
        Y,
        l
      ), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = Vl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ff(l);
      var t = l.queue, a = ms.bind(null, Y, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = Vl();
      return lc(a, l, t);
    },
    useTransition: function() {
      var l = Ff(!1);
      return l = cs.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Vl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = Y, e = Vl();
      if (K) {
        if (a === void 0)
          throw Error(o(407));
        a = a();
      } else {
        if (a = t(), il === null)
          throw Error(o(349));
        (V & 127) !== 0 || Y0(u, t, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return e.queue = n, I0(X0.bind(null, u, n, l), [
        l
      ]), u.flags |= 2048, du(
        9,
        { destroy: void 0 },
        j0.bind(
          null,
          u,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Vl(), t = il.identifierPrefix;
      if (K) {
        var a = Ut, u = Dt;
        a = (u & ~(1 << 32 - tt(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pe++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Ym++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: w0,
    useActionState: w0,
    useOptimistic: function(l) {
      var t = Vl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = uc.bind(
        null,
        Y,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: wf,
    useCacheRefresh: function() {
      return Vl().memoizedState = Zm.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Vl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((k & 2) !== 0)
          throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Cl,
    use: tn,
    useCallback: es,
    useContext: Cl,
    useEffect: If,
    useImperativeHandle: us,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: an,
    useRef: k0,
    useState: function() {
      return an(Qt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = Tl();
      return fs(
        a,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = an(Qt)[0], t = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: vs,
    useHostTransitionStatus: ac,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l, t) {
      var a = Tl();
      return x0(a, ul, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: ys
  };
  ec.useEffectEvent = P0;
  var Ss = {
    readContext: Cl,
    use: tn,
    useCallback: es,
    useContext: Cl,
    useEffect: If,
    useImperativeHandle: us,
    useInsertionEffect: ls,
    useLayoutEffect: ts,
    useMemo: ns,
    useReducer: $f,
    useRef: k0,
    useState: function() {
      return $f(Qt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var a = Tl();
      return ul === null ? lc(a, l, t) : fs(
        a,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(Qt)[0], t = Tl().memoizedState;
      return [
        typeof l == "boolean" ? l : ku(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: vs,
    useHostTransitionStatus: ac,
    useFormState: F0,
    useActionState: F0,
    useOptimistic: function(l, t) {
      var a = Tl();
      return ul !== null ? x0(a, ul, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: ys
  };
  Ss.useEffectEvent = P0;
  function nc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : N({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var fc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = ea(u);
      e.payload = t, a != null && (e.callback = a), t = na(l, e, u), t !== null && (Il(t, l, u), wu(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = it(), e = ea(u);
      e.tag = 1, e.payload = t, a != null && (e.callback = a), t = na(l, e, u), t !== null && (Il(t, l, u), wu(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = it(), u = ea(a);
      u.tag = 2, t != null && (u.callback = t), t = na(l, u, a), t !== null && (Il(t, l, a), wu(t, l, a));
    }
  };
  function gs(l, t, a, u, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(e, n) : !0;
  }
  function bs(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && fc.enqueueReplaceState(t, t.state, null);
  }
  function Xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t)
        u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = N({}, a));
      for (var e in l)
        a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function rs(l) {
    je(l);
  }
  function zs(l) {
    console.error(l);
  }
  function Ts(l) {
    je(l);
  }
  function fn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Es(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function cc(l, t, a) {
    return a = ea(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, t);
    }, a;
  }
  function As(l) {
    return l = ea(l), l.tag = 3, l;
  }
  function _s(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        Es(t, a, u);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      Es(t, a, u), typeof e != "function" && (ya === null ? ya = /* @__PURE__ */ new Set([this]) : ya.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Lm(l, t, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && nu(
        t,
        a,
        e,
        !0
      ), a = et.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return bt === null ? rn() : a.alternate === null && bl === 0 && (bl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Rc(l, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === we ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Rc(l, u, e)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Rc(l, u, e), rn(), !1;
    }
    if (K)
      return t = et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Mf && (l = Error(o(422), { cause: u }), Zu(ht(l, a)))) : (u !== Mf && (t = Error(o(423), {
        cause: u
      }), Zu(
        ht(t, a)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ht(u, a), e = cc(
        l.stateNode,
        u,
        e
      ), jf(l, e), bl !== 4 && (bl = 2)), !1;
    var n = Error(o(520), { cause: u });
    if (n = ht(n, a), ce === null ? ce = [n] : ce.push(n), bl !== 4 && (bl = 2), t === null) return !0;
    u = ht(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = e & -e, a.lanes |= l, l = cc(a.stateNode, u, l), jf(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ya === null || !ya.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = As(e), _s(
              e,
              l,
              a,
              u
            ), jf(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ic = Error(o(461)), _l = !1;
  function Bl(l, t, a, u) {
    t.child = l === null ? U0(t, null, a, u) : Ya(
      t,
      l.child,
      a,
      u
    );
  }
  function Os(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u)
        c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return Ra(t), u = Vf(
      l,
      t,
      a,
      f,
      n,
      e
    ), c = Lf(), l !== null && !_l ? (Kf(l, t, e), xt(l, t, e)) : (K && c && _f(t), t.flags |= 1, Bl(l, t, u, e), t.child);
  }
  function Ms(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Tf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Ds(
        l,
        t,
        n,
        u,
        e
      )) : (l = xe(
        a.type,
        null,
        u,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !Sc(l, e)) {
      var f = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(f, u) && l.ref === t.ref)
        return xt(l, t, e);
    }
    return t.flags |= 1, l = Bt(n, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Ds(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Gu(n, u) && l.ref === t.ref)
        if (_l = !1, t.pendingProps = u = n, Sc(l, e))
          (l.flags & 131072) !== 0 && (_l = !0);
        else
          return t.lanes = l.lanes, xt(l, t, e);
    }
    return sc(
      l,
      t,
      a,
      u,
      e
    );
  }
  function Us(l, t, a, u) {
    var e = u.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, e = 0; u !== null; )
            e = e | u.lanes | u.childLanes, u = u.sibling;
          u = e & ~n;
        } else u = 0, t.child = null;
        return ps(
          l,
          t,
          n,
          a,
          u
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? N0(t, n) : Gf(), R0(t);
      else
        return u = t.lanes = 536870912, ps(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          u
        );
    } else
      n !== null ? (Ke(t, n.cachePool), N0(t, n), ca(), t.memoizedState = null) : (l !== null && Ke(t, null), Gf(), ca());
    return Bl(l, t, e, a), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ps(l, t, a, u, e) {
    var n = qf();
    return n = n === null ? null : { parent: El._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Ke(t, null), Gf(), R0(t), l !== null && nu(l, t, u, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = vn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hs(l, t, a) {
    return Ya(t, l.child, null, a), l = cn(t, t.pendingProps), l.flags |= 2, nt(t), t.memoizedState = null, l;
  }
  function Km(l, t, a) {
    var u = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (u.mode === "hidden")
          return l = cn(t, u), t.lanes = 536870912, le(null, l);
        if (xf(t), (l = vl) ? (l = Zv(
          l,
          gt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: Dt, overflow: Ut } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = d0(l), a.return = t, t.child = a, ql = t, vl = null)) : l = null, l === null) throw ta(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (xf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Hs(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (_l || nu(l, t, a, !1), e = (a & l.childLanes) !== 0, _l || e) {
        if (u = il, u !== null && (f = zi(u, a), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Ua(l, f), Il(u, l, f), ic;
        rn(), t = Hs(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, vl = rt(f.nextSibling), ql = t, K = !0, la = null, gt = !1, l !== null && S0(t, l), t = cn(t, u), t.flags |= 4096;
      return t;
    }
    return l = Bt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function sc(l, t, a, u, e) {
    return Ra(t), a = Vf(
      l,
      t,
      a,
      u,
      void 0,
      e
    ), u = Lf(), l !== null && !_l ? (Kf(l, t, e), xt(l, t, e)) : (K && u && _f(t), t.flags |= 1, Bl(l, t, a, e), t.child);
  }
  function Ns(l, t, a, u, e, n) {
    return Ra(t), t.updateQueue = null, a = C0(
      t,
      u,
      a,
      e
    ), q0(l), u = Lf(), l !== null && !_l ? (Kf(l, t, n), xt(l, t, n)) : (K && u && _f(t), t.flags |= 1, Bl(l, t, a, n), t.child);
  }
  function Rs(l, t, a, u, e) {
    if (Ra(t), t.stateNode === null) {
      var n = tu, f = a.contextType;
      typeof f == "object" && f !== null && (n = Cl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, Bf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Cl(f) : tu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (nc(
        t,
        a,
        f,
        u
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fc.enqueueReplaceState(n, n.state, null), $u(t, u, n, e), Wu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Xa(a, c);
      n.props = i;
      var d = n.context, g = a.contextType;
      f = tu, typeof g == "object" && g !== null && (f = Cl(g));
      var z = a.getDerivedStateFromProps;
      g = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && bs(
        t,
        n,
        u,
        f
      ), ua = !1;
      var h = t.memoizedState;
      n.state = h, $u(t, u, n, e), Wu(), d = t.memoizedState, c || h !== d || ua ? (typeof z == "function" && (nc(
        t,
        a,
        z,
        u
      ), d = t.memoizedState), (i = ua || gs(
        t,
        a,
        i,
        u,
        h,
        d,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = d), n.props = u, n.state = d, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, g = Xa(a, f), n.props = g, z = t.pendingProps, h = n.context, d = a.contextType, i = tu, typeof d == "object" && d !== null && (i = Cl(d)), c = a.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== z || h !== i) && bs(
        t,
        n,
        u,
        i
      ), ua = !1, h = t.memoizedState, n.state = h, $u(t, u, n, e), Wu();
      var S = t.memoizedState;
      f !== z || h !== S || ua || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (nc(
        t,
        a,
        c,
        u
      ), S = t.memoizedState), (g = ua || gs(
        t,
        a,
        g,
        u,
        h,
        S,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = S), n.props = u, n.state = S, n.context = i, u = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return n = u, sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Ya(
      t,
      l.child,
      null,
      e
    ), t.child = Ya(
      t,
      null,
      a,
      e
    )) : Bl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = xt(
      l,
      t,
      e
    ), l;
  }
  function qs(l, t, a, u) {
    return Ha(), t.flags |= 256, Bl(l, t, a, u), t.child;
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(l) {
    return { baseLanes: l, cachePool: E0() };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ct), l;
  }
  function Cs(l, t, a) {
    var u = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (e ? fa(t) : ca(), (l = vl) ? (l = Zv(
          l,
          gt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: Dt, overflow: Ut } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = d0(l), a.return = t, t.child = a, ql = t, vl = null)) : l = null, l === null) throw ta(t);
        return Wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, e ? (ca(), e = t.mode, c = vn(
        { mode: "hidden", children: c },
        e
      ), u = pa(
        u,
        e,
        a,
        null
      ), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = yc(a), u.childLanes = mc(
        l,
        f,
        a
      ), t.memoizedState = vc, le(null, u)) : (fa(t), dc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (fa(t), t.flags &= -257, t = hc(
          l,
          t,
          a
        )) : t.memoizedState !== null ? (ca(), t.child = l.child, t.flags |= 128, t = null) : (ca(), c = u.fallback, e = t.mode, u = vn(
          { mode: "visible", children: u.children },
          e
        ), c = pa(
          c,
          e,
          a,
          null
        ), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ya(
          t,
          l.child,
          null,
          a
        ), u = t.child, u.memoizedState = yc(a), u.childLanes = mc(
          l,
          f,
          a
        ), t.memoizedState = vc, t = le(null, u));
      else if (fa(t), Wc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, u = Error(o(419)), u.stack = "", u.digest = f, Zu({ value: u, source: null, stack: null }), t = hc(
          l,
          t,
          a
        );
      } else if (_l || nu(l, t, a, !1), f = (a & l.childLanes) !== 0, _l || f) {
        if (f = il, f !== null && (u = zi(f, a), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, Ua(l, u), Il(f, l, u), ic;
        wc(c) || rn(), t = hc(
          l,
          t,
          a
        );
      } else
        wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, vl = rt(
          c.nextSibling
        ), ql = t, K = !0, la = null, gt = !1, l !== null && S0(t, l), t = dc(
          t,
          u.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (ca(), c = u.fallback, e = t.mode, i = l.child, d = i.sibling, u = Bt(i, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = Bt(
      d,
      c
    ) : (c = pa(
      c,
      e,
      a,
      null
    ), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, le(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = yc(a) : (e = c.cachePool, e !== null ? (i = El._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = E0(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: e
    }), u.memoizedState = c, u.childLanes = mc(
      l,
      f,
      a
    ), t.memoizedState = vc, le(l.child, u)) : (fa(t), a = l.child, l = a.sibling, a = Bt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function dc(l, t) {
    return t = vn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function vn(l, t) {
    return l = ut(22, l, null, t), l.lanes = 0, l;
  }
  function hc(l, t, a) {
    return Ya(t, l.child, null, a), l = dc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bs(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), pf(l.return, t, a);
  }
  function oc(l, t, a, u, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
  }
  function Ys(l, t, a) {
    var u = t.pendingProps, e = u.revealOrder, n = u.tail;
    u = u.children;
    var f = zl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, _(zl, f), Bl(l, t, u, a), u = K ? xu : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Bs(l, a, t);
        else if (l.tag === 19)
          Bs(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          l = a.alternate, l !== null && ke(l) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), oc(
          t,
          !1,
          e,
          a,
          n,
          u
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = a, a = e, e = l;
        }
        oc(
          t,
          !0,
          a,
          null,
          n,
          u
        );
        break;
      case "together":
        oc(
          t,
          !1,
          null,
          null,
          void 0,
          u
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), va |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (nu(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Bt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = Bt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Jm(l, t, a) {
    switch (t.tag) {
      case 3:
        Zl(t, t.stateNode.containerInfo), aa(t, El, l.memoizedState.cache), Ha();
        break;
      case 27:
      case 5:
        Mu(t);
        break;
      case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        aa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xf(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (fa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Cs(l, t, a) : (fa(t), l = xt(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        fa(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (nu(
          l,
          t,
          a,
          !1
        ), u = (a & t.childLanes) !== 0), e) {
          if (u)
            return Ys(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(zl, zl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, Us(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        aa(t, El, l.memoizedState.cache);
    }
    return xt(l, t, a);
  }
  function js(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        _l = !0;
      else {
        if (!Sc(l, a) && (t.flags & 128) === 0)
          return _l = !1, Jm(
            l,
            t,
            a
          );
        _l = (l.flags & 131072) !== 0;
      }
    else
      _l = !1, K && (t.flags & 1048576) !== 0 && o0(t, xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ca(t.elementType), t.type = l, typeof l == "function")
            Tf(l) ? (u = Xa(l, u), t.tag = 1, t = Rs(
              null,
              t,
              l,
              u,
              a
            )) : (t.tag = 0, t = sc(
              null,
              t,
              l,
              u,
              a
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Xl) {
                t.tag = 11, t = Os(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              } else if (e === X) {
                t.tag = 14, t = Ms(
                  null,
                  t,
                  l,
                  u,
                  a
                );
                break l;
              }
            }
            throw t = Nt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return sc(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return u = t.type, e = Xa(
          u,
          t.pendingProps
        ), Rs(
          l,
          t,
          u,
          e,
          a
        );
      case 3:
        l: {
          if (Zl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), $u(t, u, null, a);
          var f = t.memoizedState;
          if (u = f.cache, aa(t, El, u), u !== n.cache && Hf(
            t,
            [El],
            a,
            !0
          ), Wu(), u = f.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = qs(
                l,
                t,
                u,
                a
              );
              break l;
            } else if (u !== e) {
              e = ht(
                Error(o(424)),
                t
              ), Zu(e), t = qs(
                l,
                t,
                u,
                a
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (vl = rt(l.firstChild), ql = t, K = !0, la = null, gt = !0, a = U0(
                t,
                null,
                u,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ha(), u === e) {
              t = xt(
                l,
                t,
                a
              );
              break l;
            }
            Bl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (a = Wv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : K || (a = t.type, l = t.pendingProps, u = Mn(
          G.current
        ).createElement(a), u[Rl] = t, u[Jl] = l, Yl(u, a, l), pl(u), t.stateNode = u) : t.memoizedState = Wv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Mu(t), l === null && K && (u = t.stateNode = Kv(
          t.type,
          t.pendingProps,
          G.current
        ), ql = t, gt = !0, e = vl, oa(t.type) ? ($c = e, vl = rt(u.firstChild)) : vl = e), Bl(
          l,
          t,
          t.pendingProps.children,
          a
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((e = u = vl) && (u = Ed(
          u,
          t.type,
          t.pendingProps,
          gt
        ), u !== null ? (t.stateNode = u, ql = t, vl = rt(u.firstChild), gt = !1, e = !0) : e = !1), e || ta(t)), Mu(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, Lc(e, n) ? u = null : f !== null && Lc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          jm,
          null,
          null,
          a
        ), oe._currentValue = e), sn(l, t), Bl(l, t, u, a), t.child;
      case 6:
        return l === null && K && ((l = a = vl) && (a = Ad(
          a,
          t.pendingProps,
          gt
        ), a !== null ? (t.stateNode = a, ql = t, vl = null, l = !0) : l = !1), l || ta(t)), null;
      case 13:
        return Cs(l, t, a);
      case 4:
        return Zl(
          t,
          t.stateNode.containerInfo
        ), u = t.pendingProps, l === null ? t.child = Ya(
          t,
          null,
          u,
          a
        ) : Bl(l, t, u, a), t.child;
      case 11:
        return Os(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return Bl(
          l,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return u = t.pendingProps, aa(t, t.type, u.value), Bl(l, t, u.children, a), t.child;
      case 9:
        return e = t.type._context, u = t.pendingProps.children, Ra(t), e = Cl(e), u = u(e), t.flags |= 1, Bl(l, t, u, a), t.child;
      case 14:
        return Ms(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return Ds(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Ys(l, t, a);
      case 31:
        return Km(l, t, a);
      case 22:
        return Us(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return Ra(t), u = Cl(El), l === null ? (e = qf(), e === null && (e = il, n = Nf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = { parent: u, cache: e }, Bf(t), aa(t, El, e)) : ((l.lanes & a) !== 0 && (Yf(l, t), $u(t, null, null, a), Wu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), aa(t, El, u)) : (u = n.cache, aa(t, El, u), u !== e.cache && Hf(
          t,
          [El],
          a,
          !0
        ))), Bl(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function gc(l, t, a, u, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vv()) l.flags |= 8192;
        else
          throw Ba = we, Cf;
    } else l.flags &= -16777217;
  }
  function Xs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Pv(t))
      if (vv()) l.flags |= 8192;
      else
        throw Ba = we, Cf;
  }
  function yn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? gi() : 536870912, l.lanes |= t, gu |= t);
  }
  function te(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function wm(l, t, a) {
    var u = t.pendingProps;
    switch (Of(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Xt(El), rl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (eu(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Df())), yl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Zt(t), n !== null ? (yl(t), Xs(t, n)) : (yl(t), gc(
          t,
          e,
          null,
          u,
          a
        ))) : n ? n !== l.memoizedState ? (Zt(t), yl(t), Xs(t, n)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Zt(t), yl(t), gc(
          t,
          e,
          l,
          u,
          a
        )), null;
      case 27:
        if (Te(t), a = G.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return yl(t), null;
          }
          l = D.current, eu(t) ? g0(t) : (l = Kv(e, u, a), t.stateNode = l, Zt(t));
        }
        return yl(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null)
              throw Error(o(166));
            return yl(t), null;
          }
          if (n = D.current, eu(t))
            g0(t);
          else {
            var f = Mn(
              G.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof u.is == "string" ? f.createElement("select", {
                      is: u.is
                    }) : f.createElement("select"), u.multiple ? n.multiple = !0 : u.size && (n.size = u.size);
                    break;
                  default:
                    n = typeof u.is == "string" ? f.createElement(e, { is: u.is }) : f.createElement(e);
                }
            }
            n[Rl] = t, n[Jl] = u;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Yl(n, e, u), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Zt(t);
          }
        }
        return yl(t), gc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== u && Zt(t);
        else {
          if (typeof u != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = G.current, eu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, e = ql, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            l[Rl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Cv(l.nodeValue, a)), l || ta(t, !0);
          } else
            l = Mn(l).createTextNode(
              u
            ), l[Rl] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = eu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Rl] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            a = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return yl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = eu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
              e[Rl] = t;
            } else
              Ha(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), e = !1;
          } else
            e = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (nt(t), t) : (nt(t), null);
        }
        return nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), yn(t, t.updateQueue), yl(t), null);
      case 4:
        return rl(), l === null && Gc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return Xt(t.type), yl(t), null;
      case 19:
        if (T(zl), u = t.memoizedState, u === null) return yl(t), null;
        if (e = (t.flags & 128) !== 0, n = u.rendering, n === null)
          if (e) te(u, !1);
          else {
            if (bl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(u, !1), l = n.updateQueue, t.updateQueue = l, yn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    m0(a, l), a = a.sibling;
                  return _(
                    zl,
                    zl.current & 1 | 2
                  ), K && Yt(t, u.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null && Pl() > Sn && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, yn(t, l), te(u, !0), u.tail === null && u.tailMode === "hidden" && !n.alternate && !K)
                return yl(t), null;
            } else
              2 * Pl() - u.renderingStartTime > Sn && a !== 536870912 && (t.flags |= 128, e = !0, te(u, !1), t.lanes = 4194304);
          u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Pl(), l.sibling = null, a = zl.current, _(
          zl,
          e ? a & 1 | 2 : a & 1
        ), K && Yt(t, u.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return nt(t), Qf(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), a = t.updateQueue, a !== null && yn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && T(qa), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Xt(El), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Wm(l, t) {
    switch (Of(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Xt(El), rl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nt(t), t.alternate === null)
            throw Error(o(340));
          Ha();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (nt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ha();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(zl), null;
      case 4:
        return rl(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return nt(t), Qf(), l !== null && T(qa), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Xt(El), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Gs(l, t) {
    switch (Of(t), t.tag) {
      case 3:
        Xt(El), rl();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        rl();
        break;
      case 31:
        t.memoizedState !== null && nt(t);
        break;
      case 13:
        nt(t);
        break;
      case 19:
        T(zl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        nt(t), Qf(), l !== null && T(qa);
        break;
      case 24:
        Xt(El);
    }
  }
  function ae(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create, f = a.inst;
            u = n(), f.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      tl(t, t.return, c);
    }
  }
  function ia(l, t, a) {
    try {
      var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = a, d = c;
              try {
                d();
              } catch (g) {
                tl(
                  e,
                  i,
                  g
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      tl(t, t.return, g);
    }
  }
  function Qs(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        H0(t, a);
      } catch (u) {
        tl(l, l.return, u);
      }
    }
  }
  function xs(l, t, a) {
    a.props = Xa(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      tl(l, t, u);
    }
  }
  function ue(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      tl(l, t, e);
    }
  }
  function pt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          tl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          tl(l, t, e);
        }
      else a.current = null;
  }
  function Zs(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function bc(l, t, a) {
    try {
      var u = l.stateNode;
      Sd(u, l.type, a, t), u[Jl] = t;
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function Vs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && oa(l.type) || l.tag === 4;
  }
  function rc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Vs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && oa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = qt));
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
      for (zc(l, t, a), l = l.sibling; l !== null; )
        zc(l, t, a), l = l.sibling;
  }
  function mn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && oa(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (mn(l, t, a), l = l.sibling; l !== null; )
        mn(l, t, a), l = l.sibling;
  }
  function Ls(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Yl(t, u, a), t[Rl] = l, t[Jl] = a;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Vt = !1, Ol = !1, Tc = !1, Ks = typeof WeakSet == "function" ? WeakSet : Set, Hl = null;
  function $m(l, t) {
    if (l = l.containerInfo, Zc = qn, l = u0(l), hf(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, g = 0, z = l, h = null;
            t: for (; ; ) {
              for (var S; z !== a || e !== 0 && z.nodeType !== 3 || (c = f + e), z !== n || u !== 0 && z.nodeType !== 3 || (i = f + u), z.nodeType === 3 && (f += z.nodeValue.length), (S = z.firstChild) !== null; )
                h = z, z = S;
              for (; ; ) {
                if (z === l) break t;
                if (h === a && ++d === e && (c = f), h === n && ++g === u && (i = f), (S = z.nextSibling) !== null) break;
                z = h, h = z.parentNode;
              }
              z = S;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Vc = { focusedElem: l, selectionRange: a }, qn = !1, Hl = t; Hl !== null; )
      if (t = Hl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Hl = l;
      else
        for (; Hl !== null; ) {
          switch (t = Hl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (a = 0; a < l.length; a++)
                  e = l[a], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var M = Xa(
                    a.type,
                    e
                  );
                  l = u.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  tl(
                    a,
                    a.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Jc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Hl = l;
            break;
          }
          Hl = t.return;
        }
  }
  function Js(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Kt(l, a), u & 4 && ae(5, a);
        break;
      case 1:
        if (Kt(l, a), u & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              tl(a, a.return, f);
            }
          else {
            var e = Xa(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              tl(
                a,
                a.return,
                f
              );
            }
          }
        u & 64 && Qs(a), u & 512 && ue(a, a.return);
        break;
      case 3:
        if (Kt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            H0(l, t);
          } catch (f) {
            tl(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Ls(a);
      case 26:
      case 5:
        Kt(l, a), t === null && u & 4 && Zs(a), u & 512 && ue(a, a.return);
        break;
      case 12:
        Kt(l, a);
        break;
      case 31:
        Kt(l, a), u & 4 && $s(l, a);
        break;
      case 13:
        Kt(l, a), u & 4 && Fs(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = ed.bind(
          null,
          a
        ), _d(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Vt, !u) {
          t = t !== null && t.memoizedState !== null || Ol, e = Vt;
          var n = Ol;
          Vt = u, (Ol = t) && !n ? Jt(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Kt(l, a), Vt = e, Ol = n;
        }
        break;
      case 30:
        break;
      default:
        Kt(l, a);
    }
  }
  function ws(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, ws(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ml = null, Wl = !1;
  function Lt(l, t, a) {
    for (a = a.child; a !== null; )
      Ws(l, t, a), a = a.sibling;
  }
  function Ws(l, t, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Du, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Ol || pt(a, t), Lt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ol || pt(a, t);
        var u = ml, e = Wl;
        oa(a.type) && (ml = a.stateNode, Wl = !1), Lt(
          l,
          t,
          a
        ), me(a.stateNode), ml = u, Wl = e;
        break;
      case 5:
        Ol || pt(a, t);
      case 6:
        if (u = ml, e = Wl, ml = null, Lt(
          l,
          t,
          a
        ), ml = u, Wl = e, ml !== null)
          if (Wl)
            try {
              (ml.nodeType === 9 ? ml.body : ml.nodeName === "HTML" ? ml.ownerDocument.body : ml).removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              tl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        ml !== null && (Wl ? (l = ml, Qv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), Ou(l)) : Qv(ml, a.stateNode));
        break;
      case 4:
        u = ml, e = Wl, ml = a.stateNode.containerInfo, Wl = !0, Lt(
          l,
          t,
          a
        ), ml = u, Wl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ia(2, a, t), Ol || ia(4, a, t), Lt(
          l,
          t,
          a
        );
        break;
      case 1:
        Ol || (pt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && xs(
          a,
          t,
          u
        )), Lt(
          l,
          t,
          a
        );
        break;
      case 21:
        Lt(
          l,
          t,
          a
        );
        break;
      case 22:
        Ol = (u = Ol) || a.memoizedState !== null, Lt(
          l,
          t,
          a
        ), Ol = u;
        break;
      default:
        Lt(
          l,
          t,
          a
        );
    }
  }
  function $s(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ou(l);
      } catch (a) {
        tl(t, t.return, a);
      }
    }
  }
  function Fs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ou(l);
      } catch (a) {
        tl(t, t.return, a);
      }
  }
  function Fm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Ks()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Ks()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function dn(l, t) {
    var a = Fm(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var e = nd.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (oa(c.type)) {
                ml = c.stateNode, Wl = !1;
                break l;
              }
              break;
            case 5:
              ml = c.stateNode, Wl = !1;
              break l;
            case 3:
            case 4:
              ml = c.stateNode.containerInfo, Wl = !0;
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(o(160));
        Ws(n, f, e), ml = null, Wl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        ks(t, l), t = t.sibling;
  }
  var At = null;
  function ks(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        $l(t, l), Fl(l), u & 4 && (ia(3, l, l.return), ae(3, l), ia(5, l, l.return));
        break;
      case 1:
        $l(t, l), Fl(l), u & 512 && (Ol || a === null || pt(a, a.return)), u & 64 && Vt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = At;
        if ($l(t, l), Fl(l), u & 512 && (Ol || a === null || pt(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null)
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Hu] || n[Rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Yl(n, u, a), n[Rl] = l, pl(n), u = n;
                      break l;
                    case "link":
                      var f = kv(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Yl(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = kv(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(u), Yl(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  n[Rl] = l, pl(n), u = n;
                }
                l.stateNode = u;
              } else
                Iv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Fv(
                e,
                u,
                l.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Iv(
              e,
              l.type,
              l.stateNode
            ) : Fv(
              e,
              u,
              l.memoizedProps
            )) : u === null && l.stateNode !== null && bc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        $l(t, l), Fl(l), u & 512 && (Ol || a === null || pt(a, a.return)), a !== null && u & 4 && bc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if ($l(t, l), Fl(l), u & 512 && (Ol || a === null || pt(a, a.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wa(e, "");
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        u & 4 && l.stateNode != null && (e = l.memoizedProps, bc(
          l,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (Tc = !0);
        break;
      case 6:
        if ($l(t, l), Fl(l), u & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        break;
      case 3:
        if (pn = null, e = At, At = Dn(t.containerInfo), $l(t, l), At = e, Fl(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ou(t.containerInfo);
          } catch (M) {
            tl(l, l.return, M);
          }
        Tc && (Tc = !1, Is(l));
        break;
      case 4:
        u = At, At = Dn(
          l.stateNode.containerInfo
        ), $l(t, l), Fl(l), At = u;
        break;
      case 12:
        $l(t, l), Fl(l);
        break;
      case 31:
        $l(t, l), Fl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, dn(l, u)));
        break;
      case 13:
        $l(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (on = Pl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, dn(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null, d = Vt, g = Ol;
        if (Vt = d || e, Ol = g || i, $l(t, l), Ol = g, Vt = d, Fl(l), u & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Vt || Ol || Ga(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var z = i.memoizedProps.style, h = z != null && z.hasOwnProperty("display") ? z.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var S = i.stateNode;
                  e ? xv(S, !0) : xv(i.stateNode, !1);
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, dn(l, a))));
        break;
      case 19:
        $l(t, l), Fl(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, dn(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        $l(t, l), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Vs(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = rc(l);
            mn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Wa(f, ""), a.flags &= -33);
            var c = rc(l);
            mn(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo, d = rc(l);
            zc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        tl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Is(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Is(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Kt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Js(l, t.alternate, t), t = t.sibling;
  }
  function Ga(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ia(4, t, t.return), Ga(t);
          break;
        case 1:
          pt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && xs(
            t,
            t.return,
            a
          ), Ga(t);
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          pt(t, t.return), Ga(t);
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      l = l.sibling;
    }
  }
  function Jt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Jt(
            e,
            n,
            a
          ), ae(4, n);
          break;
        case 1:
          if (Jt(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              tl(u, u.return, d);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  p0(i[e], c);
            } catch (d) {
              tl(u, u.return, d);
            }
          }
          a && f & 64 && Qs(n), ue(n, n.return);
          break;
        case 27:
          Ls(n);
        case 26:
        case 5:
          Jt(
            e,
            n,
            a
          ), a && u === null && f & 4 && Zs(n), ue(n, n.return);
          break;
        case 12:
          Jt(
            e,
            n,
            a
          );
          break;
        case 31:
          Jt(
            e,
            n,
            a
          ), a && f & 4 && $s(e, n);
          break;
        case 13:
          Jt(
            e,
            n,
            a
          ), a && f & 4 && Fs(e, n);
          break;
        case 22:
          n.memoizedState === null && Jt(
            e,
            n,
            a
          ), ue(n, n.return);
          break;
        case 30:
          break;
        default:
          Jt(
            e,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ec(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Vu(a));
  }
  function Ac(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l));
  }
  function _t(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ps(
          l,
          t,
          a,
          u
        ), t = t.sibling;
  }
  function Ps(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _t(
          l,
          t,
          a,
          u
        ), e & 2048 && ae(9, t);
        break;
      case 1:
        _t(
          l,
          t,
          a,
          u
        );
        break;
      case 3:
        _t(
          l,
          t,
          a,
          u
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Vu(l)));
        break;
      case 12:
        if (e & 2048) {
          _t(
            l,
            t,
            a,
            u
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            tl(t, t.return, i);
          }
        } else
          _t(
            l,
            t,
            a,
            u
          );
        break;
      case 31:
        _t(
          l,
          t,
          a,
          u
        );
        break;
      case 13:
        _t(
          l,
          t,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? _t(
          l,
          t,
          a,
          u
        ) : ee(l, t) : n._visibility & 2 ? _t(
          l,
          t,
          a,
          u
        ) : (n._visibility |= 2, hu(
          l,
          t,
          a,
          u,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Ec(f, t);
        break;
      case 24:
        _t(
          l,
          t,
          a,
          u
        ), e & 2048 && Ac(t.alternate, t);
        break;
      default:
        _t(
          l,
          t,
          a,
          u
        );
    }
  }
  function hu(l, t, a, u, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = a, i = u, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            n,
            f,
            c,
            i,
            e
          ), ae(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? hu(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, hu(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && Ec(
            f.alternate,
            f
          );
          break;
        case 24:
          hu(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Ac(f.alternate, f);
          break;
        default:
          hu(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            ee(a, u), e & 2048 && Ec(
              u.alternate,
              u
            );
            break;
          case 24:
            ee(a, u), e & 2048 && Ac(u.alternate, u);
            break;
          default:
            ee(a, u);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ou(l, t, a) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        lv(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function lv(l, t, a) {
    switch (l.tag) {
      case 26:
        ou(
          l,
          t,
          a
        ), l.flags & ne && l.memoizedState !== null && Yd(
          a,
          At,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ou(
          l,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var u = At;
        At = Dn(l.stateNode.containerInfo), ou(
          l,
          t,
          a
        ), At = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ne, ne = 16777216, ou(
          l,
          t,
          a
        ), ne = u) : ou(
          l,
          t,
          a
        ));
        break;
      default:
        ou(
          l,
          t,
          a
        );
    }
  }
  function tv(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Hl = u, uv(
            u,
            l
          );
        }
      tv(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        av(l), l = l.sibling;
  }
  function av(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && ia(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          Hl = u, uv(
            u,
            l
          );
        }
      tv(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, t, t.return), hn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function uv(l, t) {
    for (; Hl !== null; ) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ia(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Vu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Hl = u;
      else
        l: for (a = l; Hl !== null; ) {
          u = Hl;
          var e = u.sibling, n = u.return;
          if (ws(u), u === a) {
            Hl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Hl = e;
            break l;
          }
          Hl = n;
        }
    }
  }
  var km = {
    getCacheForType: function(l) {
      var t = Cl(El), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Cl(El).controller.signal;
    }
  }, Im = typeof WeakMap == "function" ? WeakMap : Map, k = 0, il = null, Q = null, V = 0, ll = 0, ft = null, sa = !1, Su = !1, _c = !1, wt = 0, bl = 0, va = 0, Qa = 0, Oc = 0, ct = 0, gu = 0, ce = null, kl = null, Mc = !1, on = 0, ev = 0, Sn = 1 / 0, gn = null, ya = null, Ul = 0, ma = null, bu = null, Wt = 0, Dc = 0, Uc = null, nv = null, ie = 0, pc = null;
  function it() {
    return (k & 2) !== 0 && V !== 0 ? V & -V : b.T !== null ? Bc() : Ti();
  }
  function fv() {
    if (ct === 0)
      if ((V & 536870912) === 0 || K) {
        var l = _e;
        _e <<= 1, (_e & 3932160) === 0 && (_e = 262144), ct = l;
      } else ct = 536870912;
    return l = et.current, l !== null && (l.flags |= 32), ct;
  }
  function Il(l, t, a) {
    (l === il && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (ru(l, 0), da(
      l,
      V,
      ct,
      !1
    )), pu(l, a), ((k & 2) === 0 || l !== il) && (l === il && ((k & 2) === 0 && (Qa |= a), bl === 4 && da(
      l,
      V,
      ct,
      !1
    )), Ht(l));
  }
  function cv(l, t, a) {
    if ((k & 6) !== 0) throw Error(o(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Uu(l, t), e = u ? td(l, t) : Nc(l, t, !0), n = u;
    do {
      if (e === 0) {
        Su && !u && da(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !Pm(a)) {
          e = Nc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ru(c, f).flags |= 256), f = Nc(
                c,
                f,
                !1
              ), f !== 2) {
                if (_c && !i) {
                  c.errorRecoveryDisabledLanes |= n, Qa |= n, e = 4;
                  break l;
                }
                n = kl, kl = e, n !== null && (kl === null ? kl = n : kl.push.apply(
                  kl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ru(l, 0), da(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, n = e, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(
                u,
                t,
                ct,
                !sa
              );
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - Pl(), 10 < e)) {
            if (da(
              u,
              t,
              ct,
              !sa
            ), Me(u, 0, !0) !== 0) break l;
            Wt = t, u.timeoutHandle = Xv(
              iv.bind(
                null,
                u,
                a,
                kl,
                gn,
                Mc,
                t,
                ct,
                Qa,
                gu,
                sa,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          iv(
            u,
            a,
            kl,
            gn,
            Mc,
            t,
            ct,
            Qa,
            gu,
            sa,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ht(l);
  }
  function iv(l, t, a, u, e, n, f, c, i, d, g, z, h, S) {
    if (l.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt
      }, lv(
        t,
        n,
        z
      );
      var M = (n & 62914560) === n ? on - Pl() : (n & 4194048) === n ? ev - Pl() : 0;
      if (M = jd(
        z,
        M
      ), M !== null) {
        Wt = n, l.cancelPendingCommit = M(
          Sv.bind(
            null,
            l,
            t,
            n,
            a,
            u,
            e,
            f,
            c,
            i,
            g,
            z,
            null,
            h,
            S
          )
        ), da(l, n, f, !d);
        return;
      }
    }
    Sv(
      l,
      t,
      n,
      a,
      u,
      e,
      f,
      c,
      i
    );
  }
  function Pm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!at(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function da(l, t, a, u) {
    t &= ~Oc, t &= ~Qa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - tt(e), f = 1 << n;
      u[n] = -1, e &= ~f;
    }
    a !== 0 && bi(l, a, t);
  }
  function bn() {
    return (k & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hc() {
    if (Q !== null) {
      if (ll === 0)
        var l = Q.return;
      else
        l = Q, jt = Na = null, Jf(l), su = null, Ku = 0, l = Q;
      for (; l !== null; )
        Gs(l.alternate, l), l = l.return;
      Q = null;
    }
  }
  function ru(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, rd(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Wt = 0, Hc(), il = l, Q = a = Bt(l.current, null), V = t, ll = 0, ft = null, sa = !1, Su = Uu(l, t), _c = !1, gu = ct = Oc = Qa = va = bl = 0, kl = ce = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - tt(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
    return wt = t, Xe(), a;
  }
  function sv(l, t) {
    Y = null, b.H = Pu, t === iu || t === Je ? (t = O0(), ll = 3) : t === Cf ? (t = O0(), ll = 4) : ll = t === ic ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, Q === null && (bl = 1, fn(
      l,
      ht(t, l.current)
    ));
  }
  function vv() {
    var l = et.current;
    return l === null ? !0 : (V & 4194048) === V ? bt === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === bt : !1;
  }
  function yv() {
    var l = b.H;
    return b.H = Pu, l === null ? Pu : l;
  }
  function mv() {
    var l = b.A;
    return b.A = km, l;
  }
  function rn() {
    bl = 4, sa || (V & 4194048) !== V && et.current !== null || (Su = !0), (va & 134217727) === 0 && (Qa & 134217727) === 0 || il === null || da(
      il,
      V,
      ct,
      !1
    );
  }
  function Nc(l, t, a) {
    var u = k;
    k |= 2;
    var e = yv(), n = mv();
    (il !== l || V !== t) && (gn = null, ru(l, t)), t = !1;
    var f = bl;
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          var c = Q, i = ft;
          switch (ll) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var d = ll;
              if (ll = 0, ft = null, zu(l, c, i, d), a && Su) {
                f = 0;
                break l;
              }
              break;
            default:
              d = ll, ll = 0, ft = null, zu(l, c, i, d);
          }
        }
        ld(), f = bl;
        break;
      } catch (g) {
        sv(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, jt = Na = null, k = u, b.H = e, b.A = n, Q === null && (il = null, V = 0, Xe()), f;
  }
  function ld() {
    for (; Q !== null; ) dv(Q);
  }
  function td(l, t) {
    var a = k;
    k |= 2;
    var u = yv(), e = mv();
    il !== l || V !== t ? (gn = null, Sn = Pl() + 500, ru(l, t)) : Su = Uu(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          t = Q;
          var n = ft;
          t: switch (ll) {
            case 1:
              ll = 0, ft = null, zu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (A0(n)) {
                ll = 0, ft = null, hv(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || il !== l || (ll = 7), Ht(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              A0(n) ? (ll = 0, ft = null, hv(t)) : (ll = 0, ft = null, zu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Q.tag) {
                case 26:
                  f = Q.memoizedState;
                case 5:
                case 27:
                  var c = Q;
                  if (f ? Pv(f) : c.stateNode.complete) {
                    ll = 0, ft = null;
                    var i = c.sibling;
                    if (i !== null) Q = i;
                    else {
                      var d = c.return;
                      d !== null ? (Q = d, zn(d)) : Q = null;
                    }
                    break t;
                  }
              }
              ll = 0, ft = null, zu(l, t, n, 5);
              break;
            case 6:
              ll = 0, ft = null, zu(l, t, n, 6);
              break;
            case 8:
              Hc(), bl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        ad();
        break;
      } catch (g) {
        sv(l, g);
      }
    while (!0);
    return jt = Na = null, b.H = u, b.A = e, k = a, Q !== null ? 0 : (il = null, V = 0, Xe(), bl);
  }
  function ad() {
    for (; Q !== null && !Oy(); )
      dv(Q);
  }
  function dv(l) {
    var t = js(l.alternate, l, wt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function hv(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ns(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          V
        );
        break;
      case 11:
        t = Ns(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          V
        );
        break;
      case 5:
        Jf(t);
      default:
        Gs(a, t), t = Q = m0(t, wt), t = js(a, t, wt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function zu(l, t, a, u) {
    jt = Na = null, Jf(t), su = null, Ku = 0;
    var e = t.return;
    try {
      if (Lm(
        l,
        e,
        t,
        a,
        V
      )) {
        bl = 1, fn(
          l,
          ht(a, l.current)
        ), Q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Q = e, n;
      bl = 1, fn(
        l,
        ht(a, l.current)
      ), Q = null;
      return;
    }
    t.flags & 32768 ? (K || u === 1 ? l = !0 : Su || (V & 536870912) !== 0 ? l = !1 : (sa = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = et.current, u !== null && u.tag === 13 && (u.flags |= 16384))), ov(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ov(
          t,
          sa
        );
        return;
      }
      l = t.return;
      var a = wm(
        t.alternate,
        t,
        wt
      );
      if (a !== null) {
        Q = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Q = t;
        return;
      }
      Q = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function ov(l, t) {
    do {
      var a = Wm(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, Q = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        Q = l;
        return;
      }
      Q = l = a;
    } while (l !== null);
    bl = 6, Q = null;
  }
  function Sv(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (Ul !== 0);
    if ((k & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= rf, By(
        l,
        a,
        n,
        f,
        c,
        i
      ), l === il && (Q = il = null, V = 0), bu = t, ma = l, Wt = a, Dc = n, Uc = e, nv = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, fd(Ee, function() {
        return Tv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null, e = A.p, A.p = 2, f = k, k |= 4;
        try {
          $m(l, t, a);
        } finally {
          k = f, A.p = e, b.T = u;
        }
      }
      Ul = 1, gv(), bv(), rv();
    }
  }
  function gv() {
    if (Ul === 1) {
      Ul = 0;
      var l = ma, t = bu, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null;
        var u = A.p;
        A.p = 2;
        var e = k;
        k |= 4;
        try {
          ks(t, l);
          var n = Vc, f = u0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && a0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && hf(c)) {
              var d = i.start, g = i.end;
              if (g === void 0 && (g = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var z = c.ownerDocument || document, h = z && z.defaultView || window;
                if (h.getSelection) {
                  var S = h.getSelection(), M = c.textContent.length, R = Math.min(i.start, M), nl = i.end === void 0 ? R : Math.min(i.end, M);
                  !S.extend && R > nl && (f = nl, nl = R, R = f);
                  var y = t0(
                    c,
                    R
                  ), s = t0(
                    c,
                    nl
                  );
                  if (y && s && (S.rangeCount !== 1 || S.anchorNode !== y.node || S.anchorOffset !== y.offset || S.focusNode !== s.node || S.focusOffset !== s.offset)) {
                    var m = z.createRange();
                    m.setStart(y.node, y.offset), S.removeAllRanges(), R > nl ? (S.addRange(m), S.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset), S.addRange(m));
                  }
                }
              }
            }
            for (z = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && z.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < z.length; c++) {
              var r = z[c];
              r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
            }
          }
          qn = !!Zc, Vc = Zc = null;
        } finally {
          k = e, A.p = u, b.T = a;
        }
      }
      l.current = t, Ul = 2;
    }
  }
  function bv() {
    if (Ul === 2) {
      Ul = 0;
      var l = ma, t = bu, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = b.T, b.T = null;
        var u = A.p;
        A.p = 2;
        var e = k;
        k |= 4;
        try {
          Js(l, t.alternate, t);
        } finally {
          k = e, A.p = u, b.T = a;
        }
      }
      Ul = 3;
    }
  }
  function rv() {
    if (Ul === 4 || Ul === 3) {
      Ul = 0, My();
      var l = ma, t = bu, a = Wt, u = nv;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ul = 5 : (Ul = 0, bu = ma = null, zv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ya = null), Wn(a), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            Du,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        t = b.T, e = A.p, A.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, A.p = e;
        }
      }
      (Wt & 3) !== 0 && Tn(), Ht(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === pc ? ie++ : (ie = 0, pc = l) : ie = 0, se(0);
    }
  }
  function zv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Vu(t)));
  }
  function Tn() {
    return gv(), bv(), rv(), Tv();
  }
  function Tv() {
    if (Ul !== 5) return !1;
    var l = ma, t = Dc;
    Dc = 0;
    var a = Wn(Wt), u = b.T, e = A.p;
    try {
      A.p = 32 > a ? 32 : a, b.T = null, a = Uc, Uc = null;
      var n = ma, f = Wt;
      if (Ul = 0, bu = ma = null, Wt = 0, (k & 6) !== 0) throw Error(o(331));
      var c = k;
      if (k |= 4, av(n.current), Ps(
        n,
        n.current,
        f,
        a
      ), k = c, se(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(Du, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, b.T = u, zv(l, t);
    }
  }
  function Ev(l, t, a) {
    t = ht(a, t), t = cc(l.stateNode, t, 2), l = na(l, t, 2), l !== null && (pu(l, 2), Ht(l));
  }
  function tl(l, t, a) {
    if (l.tag === 3)
      Ev(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ev(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ya === null || !ya.has(u))) {
            l = ht(a, l), a = As(2), u = na(t, a, 2), u !== null && (_s(
              a,
              u,
              t,
              l
            ), pu(u, 2), Ht(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Im();
      var e = /* @__PURE__ */ new Set();
      u.set(t, e);
    } else
      e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
    e.has(a) || (_c = !0, e.add(a), l = ud.bind(null, l, t, a), t.then(l, l));
  }
  function ud(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, il === l && (V & a) === a && (bl === 4 || bl === 3 && (V & 62914560) === V && 300 > Pl() - on ? (k & 2) === 0 && ru(l, 0) : Oc |= a, gu === V && (gu = 0)), Ht(l);
  }
  function Av(l, t) {
    t === 0 && (t = gi()), l = Ua(l, t), l !== null && (pu(l, t), Ht(l));
  }
  function ed(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Av(l, a);
  }
  function nd(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(t), Av(l, a);
  }
  function fd(l, t) {
    return Ln(l, t);
  }
  var En = null, Tu = null, qc = !1, An = !1, Cc = !1, ha = 0;
  function Ht(l) {
    l !== Tu && l.next === null && (Tu === null ? En = Tu = l : Tu = Tu.next = l), An = !0, qc || (qc = !0, id());
  }
  function se(l, t) {
    if (!Cc && An) {
      Cc = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes, c = u.pingedLanes;
              n = (1 << 31 - tt(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Dv(u, n));
          } else
            n = V, n = Me(
              u,
              u === il ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || Uu(u, n) || (a = !0, Dv(u, n));
          u = u.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function cd() {
    _v();
  }
  function _v() {
    An = qc = !1;
    var l = 0;
    ha !== 0 && bd() && (l = ha);
    for (var t = Pl(), a = null, u = En; u !== null; ) {
      var e = u.next, n = Ov(u, t);
      n === 0 ? (u.next = null, a === null ? En = e : a.next = e, e === null && (Tu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (An = !0)), u = e;
    }
    Ul !== 0 && Ul !== 5 || se(l), ha !== 0 && (ha = 0);
  }
  function Ov(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - tt(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = Cy(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = il, a = V, a = Me(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u = l.callbackNode, a === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return u !== null && u !== null && Kn(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Uu(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Kn(u), Wn(a)) {
        case 2:
        case 8:
          a = oi;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = Si;
          break;
        default:
          a = Ee;
      }
      return u = Mv.bind(null, l), a = Ln(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Kn(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Mv(l, t) {
    if (Ul !== 0 && Ul !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a)
      return null;
    var u = V;
    return u = Me(
      l,
      l === il ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), u === 0 ? null : (cv(l, u, t), Ov(l, Pl()), l.callbackNode != null && l.callbackNode === a ? Mv.bind(null, l) : null);
  }
  function Dv(l, t) {
    if (Tn()) return null;
    cv(l, t, !0);
  }
  function id() {
    zd(function() {
      (k & 6) !== 0 ? Ln(
        hi,
        cd
      ) : _v();
    });
  }
  function Bc() {
    if (ha === 0) {
      var l = fu;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), ha = l;
    }
    return ha;
  }
  function Uv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : He("" + l);
  }
  function pv(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function sd(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = Uv(
        (e[Jl] || null).action
      ), f = u.submitter;
      f && (t = (t = f[Jl] || null) ? Uv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
        "action",
        "action",
        null,
        u,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (ha !== 0) {
                  var i = f ? pv(e, f) : new FormData(e);
                  tc(
                    a,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? pv(e, f) : new FormData(e), tc(
                  a,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yc = 0; Yc < bf.length; Yc++) {
    var jc = bf[Yc], vd = jc.toLowerCase(), yd = jc[0].toUpperCase() + jc.slice(1);
    Et(
      vd,
      "on" + yd
    );
  }
  Et(f0, "onAnimationEnd"), Et(c0, "onAnimationIteration"), Et(i0, "onAnimationStart"), Et("dblclick", "onDoubleClick"), Et("focusin", "onFocus"), Et("focusout", "onBlur"), Et(Dm, "onTransitionRun"), Et(Um, "onTransitionStart"), Et(pm, "onTransitionCancel"), Et(s0, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), _a(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _a(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _a("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _a(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _a(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _a(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ve = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), md = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ve)
  );
  function Hv(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              je(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (g) {
              je(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function x(l, t) {
    var a = t[$n];
    a === void 0 && (a = t[$n] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Nv(t, l, 2, !1), a.add(u));
  }
  function Xc(l, t, a) {
    var u = 0;
    t && (u |= 4), Nv(
      a,
      l,
      u,
      t
    );
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(l) {
    if (!l[_n]) {
      l[_n] = !0, _i.forEach(function(a) {
        a !== "selectionchange" && (md.has(a) || Xc(a, !1, l), Xc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || (t[_n] = !0, Xc("selectionchange", !1, t));
    }
  }
  function Nv(l, t, a, u) {
    switch (fy(t)) {
      case 2:
        var e = Qd;
        break;
      case 8:
        e = xd;
        break;
      default:
        e = li;
    }
    a = e.bind(
      null,
      t,
      a,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), u ? e !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, a, !0) : e !== void 0 ? l.addEventListener(t, a, {
      passive: e
    }) : l.addEventListener(t, a, !1);
  }
  function Qc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Va(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Yi(function() {
      var d = n, g = af(a), z = [];
      l: {
        var h = v0.get(l);
        if (h !== void 0) {
          var S = Ce, M = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              S = nm;
              break;
            case "focusin":
              M = "focus", S = sf;
              break;
            case "focusout":
              M = "blur", S = sf;
              break;
            case "beforeblur":
            case "afterblur":
              S = sf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Gi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = wy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = im;
              break;
            case f0:
            case c0:
            case i0:
              S = Fy;
              break;
            case s0:
              S = vm;
              break;
            case "scroll":
            case "scrollend":
              S = Ky;
              break;
            case "wheel":
              S = mm;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Iy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = xi;
              break;
            case "toggle":
            case "beforetoggle":
              S = hm;
          }
          var R = (t & 4) !== 0, nl = !R && (l === "scroll" || l === "scrollend"), y = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var s = d, m; s !== null; ) {
            var r = s;
            if (m = r.stateNode, r = r.tag, r !== 5 && r !== 26 && r !== 27 || m === null || y === null || (r = Ru(s, y), r != null && R.push(
              ye(s, r, m)
            )), nl) break;
            s = s.return;
          }
          0 < R.length && (h = new S(
            h,
            M,
            null,
            a,
            g
          ), z.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", h && a !== tf && (M = a.relatedTarget || a.fromElement) && (Va(M) || M[Za]))
            break l;
          if ((S || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (M = a.relatedTarget || a.toElement, S = d, M = M ? Va(M) : null, M !== null && (nl = sl(M), R = M.tag, M !== nl || R !== 5 && R !== 27 && R !== 6) && (M = null)) : (S = null, M = d), S !== M)) {
            if (R = Gi, r = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = xi, r = "onPointerLeave", y = "onPointerEnter", s = "pointer"), nl = S == null ? h : Nu(S), m = M == null ? h : Nu(M), h = new R(
              r,
              s + "leave",
              S,
              a,
              g
            ), h.target = nl, h.relatedTarget = m, r = null, Va(g) === d && (R = new R(
              y,
              s + "enter",
              M,
              a,
              g
            ), R.target = m, R.relatedTarget = nl, r = R), nl = r, S && M)
              t: {
                for (R = dd, y = S, s = M, m = 0, r = y; r; r = R(r))
                  m++;
                r = 0;
                for (var H = s; H; H = R(H))
                  r++;
                for (; 0 < m - r; )
                  y = R(y), m--;
                for (; 0 < r - m; )
                  s = R(s), r--;
                for (; m--; ) {
                  if (y === s || s !== null && y === s.alternate) {
                    R = y;
                    break t;
                  }
                  y = R(y), s = R(s);
                }
                R = null;
              }
            else R = null;
            S !== null && Rv(
              z,
              h,
              S,
              R,
              !1
            ), M !== null && nl !== null && Rv(
              z,
              nl,
              M,
              R,
              !0
            );
          }
        }
        l: {
          if (h = d ? Nu(d) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file")
            var W = $i;
          else if (wi(h))
            if (Fi)
              W = _m;
            else {
              W = Em;
              var U = Tm;
            }
          else
            S = h.nodeName, !S || S.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && lf(d.elementType) && (W = $i) : W = Am;
          if (W && (W = W(l, d))) {
            Wi(
              z,
              W,
              a,
              g
            );
            break l;
          }
          U && U(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (U = d ? Nu(d) : window, l) {
          case "focusin":
            (wi(U) || U.contentEditable === "true") && (Ia = U, of = d, Qu = null);
            break;
          case "focusout":
            Qu = of = Ia = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, e0(z, a, g);
            break;
          case "selectionchange":
            if (Mm) break;
          case "keydown":
          case "keyup":
            e0(z, a, g);
        }
        var j;
        if (yf)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          ka ? Ki(l, a) && (L = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (L = "onCompositionStart");
        L && (Zi && a.locale !== "ko" && (ka || L !== "onCompositionStart" ? L === "onCompositionEnd" && ka && (j = ji()) : (It = g, nf = "value" in It ? It.value : It.textContent, ka = !0)), U = On(d, L), 0 < U.length && (L = new Qi(
          L,
          l,
          null,
          a,
          g
        ), z.push({ event: L, listeners: U }), j ? L.data = j : (j = Ji(a), j !== null && (L.data = j)))), (j = Sm ? gm(l, a) : bm(l, a)) && (L = On(d, "onBeforeInput"), 0 < L.length && (U = new Qi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), z.push({
          event: U,
          listeners: L
        }), U.data = j)), sd(
          z,
          l,
          d,
          a,
          g
        );
      }
      Hv(z, t);
    });
  }
  function ye(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function On(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ru(l, a), e != null && u.unshift(
        ye(l, e, n)
      ), e = Ru(l, t), e != null && u.push(
        ye(l, e, n)
      )), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function dd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rv(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === u) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ru(a, n), d != null && f.unshift(
        ye(a, d, i)
      )) : e || (d = Ru(a, n), d != null && f.push(
        ye(a, d, i)
      ))), a = a.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var hd = /\r\n?/g, od = /\u0000|\uFFFD/g;
  function qv(l) {
    return (typeof l == "string" ? l : "" + l).replace(hd, `
`).replace(od, "");
  }
  function Cv(l, t) {
    return t = qv(t), qv(l) === t;
  }
  function el(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Wa(l, "" + u);
        break;
      case "className":
        Ue(l, "class", u);
        break;
      case "tabIndex":
        Ue(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, a, u);
        break;
      case "style":
        Ci(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && el(l, t, "name", e.name, e, null), el(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), el(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), el(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (el(l, t, "encType", e.encType, e, null), el(l, t, "method", e.method, e, null), el(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = He("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "onScroll":
        u != null && x("scroll", l);
        break;
      case "onScrollEnd":
        u != null && x("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = He("" + u), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        x("beforetoggle", l), x("toggle", l), De(l, "popover", u);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        De(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Vy.get(a) || a, De(l, a, u));
    }
  }
  function xc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Ci(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(o(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Wa(l, u) : (typeof u == "number" || typeof u == "bigint") && Wa(l, "" + u);
        break;
      case "onScroll":
        u != null && x("scroll", l);
        break;
      case "onScrollEnd":
        u != null && x("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oi.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Jl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : De(l, a, u);
          }
    }
  }
  function Yl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        x("error", l), x("load", l);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  el(l, t, n, f, a, null);
              }
          }
        e && el(l, t, "srcSet", a.srcSet, a, null), u && el(l, t, "src", a.src, a, null);
        return;
      case "input":
        x("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(o(137, t));
                  break;
                default:
                  el(l, t, u, g, a, null);
              }
          }
        Hi(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        x("invalid", l), u = f = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (c = a[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                el(l, t, e, c, a, null);
            }
        t = n, a = f, l.multiple = !!u, t != null ? wa(l, !!u, t, !1) : a != null && wa(l, !!u, a, !0);
        return;
      case "textarea":
        x("invalid", l), n = e = u = null;
        for (f in a)
          if (a.hasOwnProperty(f) && (c = a[f], c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                el(l, t, f, c, a, null);
            }
        Ri(l, u, e, n);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && (u = a[i], u != null))
            switch (i) {
              case "selected":
                l.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                el(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        x("beforetoggle", l), x("toggle", l), x("cancel", l), x("close", l);
        break;
      case "iframe":
      case "object":
        x("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ve.length; u++)
          x(ve[u], l);
        break;
      case "image":
        x("error", l), x("load", l);
        break;
      case "details":
        x("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        x("error", l), x("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in a)
          if (a.hasOwnProperty(d) && (u = a[d], u != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                el(l, t, d, u, a, null);
            }
        return;
      default:
        if (lf(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (u = a[g], u !== void 0 && xc(
              l,
              t,
              g,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && (u = a[c], u != null && el(l, t, c, u, a, null));
  }
  function Sd(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, g = null;
        for (S in a) {
          var z = a[S];
          if (a.hasOwnProperty(S) && z != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = z;
              default:
                u.hasOwnProperty(S) || el(l, t, S, null, u, z);
            }
        }
        for (var h in u) {
          var S = u[h];
          if (z = a[h], u.hasOwnProperty(h) && (S != null || z != null))
            switch (h) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                d = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(o(137, t));
                break;
              default:
                S !== z && el(
                  l,
                  t,
                  h,
                  S,
                  u,
                  z
                );
            }
        }
        In(
          l,
          f,
          c,
          i,
          d,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = h = null;
        for (n in a)
          if (i = a[n], a.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                u.hasOwnProperty(n) || el(
                  l,
                  t,
                  n,
                  null,
                  u,
                  i
                );
            }
        for (e in u)
          if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && el(
                  l,
                  t,
                  e,
                  n,
                  u,
                  i
                );
            }
        t = c, a = f, u = S, h != null ? wa(l, !!a, h, !1) : !!u != !!a && (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = h = null;
        for (c in a)
          if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, c, null, u, e);
            }
        for (f in u)
          if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && el(l, t, f, e, u, n);
            }
        Ni(l, h, S);
        return;
      case "option":
        for (var M in a)
          if (h = a[M], a.hasOwnProperty(M) && h != null && !u.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                el(
                  l,
                  t,
                  M,
                  null,
                  u,
                  h
                );
            }
        for (i in u)
          if (h = u[i], S = a[i], u.hasOwnProperty(i) && h !== S && (h != null || S != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                el(
                  l,
                  t,
                  i,
                  h,
                  u,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in a)
          h = a[R], a.hasOwnProperty(R) && h != null && !u.hasOwnProperty(R) && el(l, t, R, null, u, h);
        for (d in u)
          if (h = u[d], S = a[d], u.hasOwnProperty(d) && h !== S && (h != null || S != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(o(137, t));
                break;
              default:
                el(
                  l,
                  t,
                  d,
                  h,
                  u,
                  S
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var nl in a)
            h = a[nl], a.hasOwnProperty(nl) && h !== void 0 && !u.hasOwnProperty(nl) && xc(
              l,
              t,
              nl,
              void 0,
              u,
              h
            );
          for (g in u)
            h = u[g], S = a[g], !u.hasOwnProperty(g) || h === S || h === void 0 && S === void 0 || xc(
              l,
              t,
              g,
              h,
              u,
              S
            );
          return;
        }
    }
    for (var y in a)
      h = a[y], a.hasOwnProperty(y) && h != null && !u.hasOwnProperty(y) && el(l, t, y, null, u, h);
    for (z in u)
      h = u[z], S = a[z], !u.hasOwnProperty(z) || h === S || h == null && S == null || el(l, t, z, h, u, S);
  }
  function Bv(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function gd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var e = a[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Bv(f)) {
          for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u], d = i.startTime;
            if (d > c) break;
            var g = i.transferSize, z = i.initiatorType;
            g && Bv(z) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zc = null, Vc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Yv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jv(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Lc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function bd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Kc ? !1 : (Kc = l, !0) : (Kc = null, !1);
  }
  var Xv = typeof setTimeout == "function" ? setTimeout : void 0, rd = typeof clearTimeout == "function" ? clearTimeout : void 0, Gv = typeof Promise == "function" ? Promise : void 0, zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gv < "u" ? function(l) {
    return Gv.resolve(null).then(l).catch(Td);
  } : Xv;
  function Td(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function oa(l) {
    return l === "head";
  }
  function Qv(l, t) {
    var a = t, u = 0;
    do {
      var e = a.nextSibling;
      if (l.removeChild(a), e && e.nodeType === 8)
        if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), Ou(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          u++;
        else if (a === "html")
          me(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, me(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Hu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else
          a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    Ou(t);
  }
  function xv(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8)
        if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Jc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(a), Fn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Ed(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (u) {
        if (!l[Hu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = rt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Ad(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zv(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = rt(l.nextSibling), l === null)) return null;
    return l;
  }
  function wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function _d(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function rt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $c = null;
  function Vv(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return rt(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Lv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Kv(l, t, a) {
    switch (t = Mn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var zt = /* @__PURE__ */ new Map(), Jv = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var $t = A.d;
  A.d = {
    f: Od,
    r: Md,
    D: Dd,
    C: Ud,
    L: pd,
    m: Hd,
    X: Rd,
    S: Nd,
    M: qd
  };
  function Od() {
    var l = $t.f(), t = bn();
    return l || t;
  }
  function Md(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? ss(t) : $t.r(l);
  }
  var Eu = typeof document > "u" ? null : document;
  function wv(l, t, a) {
    var u = Eu;
    if (u && typeof t == "string" && t) {
      var e = mt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Jv.has(e) || (Jv.add(e), l = { rel: l, crossOrigin: a, href: t }, u.querySelector(e) === null && (t = u.createElement("link"), Yl(t, "link", l), pl(t), u.head.appendChild(t)));
    }
  }
  function Dd(l) {
    $t.D(l), wv("dns-prefetch", l, null);
  }
  function Ud(l, t) {
    $t.C(l, t), wv("preconnect", l, t);
  }
  function pd(l, t, a) {
    $t.L(l, t, a);
    var u = Eu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + mt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + mt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + mt(
        a.imageSizes
      ) + '"]')) : e += '[href="' + mt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Au(l);
          break;
        case "script":
          n = _u(l);
      }
      zt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), zt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(de(n)) || t === "script" && u.querySelector(he(n)) || (t = u.createElement("link"), Yl(t, "link", l), pl(t), u.head.appendChild(t)));
    }
  }
  function Hd(l, t) {
    $t.m(l, t);
    var a = Eu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + mt(u) + '"][href="' + mt(l) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = _u(l);
      }
      if (!zt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), zt.set(n, l), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(he(n)))
              return;
        }
        u = a.createElement("link"), Yl(u, "link", l), pl(u), a.head.appendChild(u);
      }
    }
  }
  function Nd(l, t, a) {
    $t.S(l, t, a);
    var u = Eu;
    if (u && l) {
      var e = Ka(u).hoistableStyles, n = Au(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = u.querySelector(
          de(n)
        ))
          c.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = zt.get(n)) && Fc(l, a);
          var i = f = u.createElement("link");
          pl(i), Yl(i, "link", l), i._p = new Promise(function(d, g) {
            i.onload = d, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, u);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Rd(l, t) {
    $t.X(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = N({ src: l, async: !0 }, t), (t = zt.get(e)) && kc(l, t), n = a.createElement("script"), pl(n), Yl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function qd(l, t) {
    $t.M(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, e = _u(l), n = u.get(e);
      n || (n = a.querySelector(he(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = zt.get(e)) && kc(l, t), n = a.createElement("script"), pl(n), Yl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Wv(l, t, a, u) {
    var e = (e = G.current) ? Dn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Au(a.href), a = Ka(
          e
        ).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Au(a.href);
          var n = Ka(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            de(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), zt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, zt.set(l, a), n || Cd(
            e,
            l,
            a,
            f.state
          ))), t && u === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && u !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _u(a), a = Ka(
          e
        ).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Au(l) {
    return 'href="' + mt(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $v(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Cd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Yl(t, "link", a), pl(t), l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + mt(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function Fv(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var u = l.querySelector(
            'style[data-href~="' + mt(a.href) + '"]'
          );
          if (u)
            return t.instance = u, pl(u), u;
          var e = N({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement(
            "style"
          ), pl(u), Yl(u, "style", e), Un(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Au(a.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, pl(n), n;
          u = $v(a), (e = zt.get(e)) && Fc(u, e), n = (l.ownerDocument || l).createElement("link"), pl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Yl(n, "link", u), t.state.loading |= 4, Un(n, a.precedence, l), t.instance = n;
        case "script":
          return n = _u(a.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, pl(e), e) : (u = a, (e = zt.get(n)) && (u = N({}, a), kc(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), pl(e), Yl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Un(u, a.precedence, l));
    return t.instance;
  }
  function Un(l, t, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function kv(l, t, a) {
    if (pn === null) {
      var u = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = pn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Hu] || n[Rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Iv(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Bd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Pv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yd(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = Au(u.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Hn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, pl(n);
          return;
        }
        n = t.ownerDocument || t, u = $v(u), (e = zt.get(e)) && Fc(u, e), n = n.createElement("link"), pl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Yl(n, "link", u), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Hn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ic = 0;
  function jd(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ic === 0 && (Ic = 62500 * gd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Ic ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(e);
      };
    } : null;
  }
  function Hn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Nn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Nn = /* @__PURE__ */ new Map(), t.forEach(Xd, l), Nn = null, Hn.call(l));
  }
  function Xd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Nn.set(l, a);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
        }
        u && a.set(null, u);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Hn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Sl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Gd(l, t, a, u, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ly(l, t, a, u, e, n, f, c, i, d, g, z) {
    return l = new Gd(
      l,
      t,
      a,
      f,
      i,
      d,
      g,
      z,
      c
    ), t = 1, n === !0 && (t |= 24), n = ut(3, null, null, t), l.current = n, n.stateNode = l, t = Nf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Bf(n), l;
  }
  function ty(l) {
    return l ? (l = tu, l) : tu;
  }
  function ay(l, t, a, u, e, n) {
    e = ty(e), u.context === null ? u.context = e : u.pendingContext = e, u = ea(t), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = na(l, u, t), a !== null && (Il(a, l, t), wu(a, l, t));
  }
  function uy(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Pc(l, t) {
    uy(l, t), (l = l.alternate) && uy(l, t);
  }
  function ey(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ua(l, 67108864);
      t !== null && Il(t, l, 67108864), Pc(l, 67108864);
    }
  }
  function ny(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = it();
      t = wn(t);
      var a = Ua(l, t);
      a !== null && Il(a, l, t), Pc(l, t);
    }
  }
  var qn = !0;
  function Qd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 2, li(l, t, a, u);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function xd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 8, li(l, t, a, u);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function li(l, t, a, u) {
    if (qn) {
      var e = ti(u);
      if (e === null)
        Qc(
          l,
          t,
          u,
          Cn,
          a
        ), cy(l, u);
      else if (Vd(
        e,
        l,
        t,
        a,
        u
      ))
        u.stopPropagation();
      else if (cy(l, u), t & 4 && -1 < Zd.indexOf(l)) {
        for (; e !== null; ) {
          var n = La(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Aa(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - tt(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ht(n), (k & 6) === 0 && (Sn = Pl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ua(n, 2), c !== null && Il(c, n, 2), bn(), Pc(n, 2);
            }
          if (n = ti(u), n === null && Qc(
            l,
            t,
            u,
            Cn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Qc(
          l,
          t,
          u,
          null,
          a
        );
    }
  }
  function ti(l) {
    return l = af(l), ai(l);
  }
  var Cn = null;
  function ai(l) {
    if (Cn = null, l = Va(l), l !== null) {
      var t = sl(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = dl(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = hl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function fy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Dy()) {
          case hi:
            return 2;
          case oi:
            return 8;
          case Ee:
          case Uy:
            return 32;
          case Si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ui = !1, Sa = null, ga = null, ba = null, Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), ra = [], Zd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ba = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function be(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = La(t), t !== null && ey(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Vd(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return Sa = be(
          Sa,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ga = be(
          ga,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ba = be(
          ba,
          l,
          t,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Se.set(
          n,
          be(
            Se.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ge.set(
          n,
          be(
            ge.get(n) || null,
            l,
            t,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function iy(l) {
    var t = Va(l.target);
    if (t !== null) {
      var a = sl(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = dl(a), t !== null) {
            l.blockedOn = t, Ei(l.priority, function() {
              ny(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = hl(a), t !== null) {
            l.blockedOn = t, Ei(l.priority, function() {
              ny(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ti(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        tf = u, a.target.dispatchEvent(u), tf = null;
      } else
        return t = La(a), t !== null && ey(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function sy(l, t, a) {
    Bn(l) && a.delete(t);
  }
  function Ld() {
    ui = !1, Sa !== null && Bn(Sa) && (Sa = null), ga !== null && Bn(ga) && (ga = null), ba !== null && Bn(ba) && (ba = null), Se.forEach(sy), ge.forEach(sy);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ui || (ui = !0, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      Ld
    )));
  }
  var jn = null;
  function vy(l) {
    jn !== l && (jn = l, O.unstable_scheduleCallback(
      O.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (ai(u || a) === null)
              continue;
            break;
          }
          var n = La(a);
          n !== null && (l.splice(t, 3), t -= 3, tc(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function Ou(l) {
    function t(i) {
      return Yn(i, l);
    }
    Sa !== null && Yn(Sa, l), ga !== null && Yn(ga, l), ba !== null && Yn(ba, l), Se.forEach(t), ge.forEach(t);
    for (var a = 0; a < ra.length; a++) {
      var u = ra[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ra.length && (a = ra[0], a.blockedOn === null); )
      iy(a), a.blockedOn === null && ra.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Jl] || null;
        if (typeof n == "function")
          f || vy(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Jl] || null)
              c = f.formAction;
            else if (ai(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), vy(a);
        }
      }
  }
  function yy() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ei(l) {
    this._internalRoot = l;
  }
  Xn.prototype.render = ei.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, u = it();
    ay(a, u, l, t, null, null);
  }, Xn.prototype.unmount = ei.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ay(l.current, 2, null, l, null, null), bn(), t[Za] = null;
    }
  };
  function Xn(l) {
    this._internalRoot = l;
  }
  Xn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ti();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ra.length && t !== 0 && t < ra[a].priority; a++) ;
      ra.splice(a, 0, l), a === 0 && iy(l);
    }
  };
  var my = ol.version;
  if (my !== "19.2.0")
    throw Error(
      o(
        527,
        my,
        "19.2.0"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = E(t), l = l !== null ? Z(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Kd = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Du = Gn.inject(
          Kd
        ), lt = Gn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!fl(l)) throw Error(o(299));
    var a = !1, u = "", e = rs, n = zs, f = Ts;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = ly(
      l,
      1,
      !1,
      null,
      null,
      a,
      u,
      null,
      e,
      n,
      f,
      yy
    ), l[Za] = t.current, Gc(l), new ei(t);
  }, ze.hydrateRoot = function(l, t, a) {
    if (!fl(l)) throw Error(o(299));
    var u = !1, e = "", n = rs, f = zs, c = Ts, i = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (i = a.formState)), t = ly(
      l,
      1,
      !0,
      t,
      a ?? null,
      u,
      e,
      i,
      n,
      f,
      c,
      yy
    ), t.context = ty(null), a = t.current, u = it(), u = wn(u), e = ea(u), e.callback = null, na(a, e, u), a = u, t.current.lanes = a, pu(t, a), Ht(t), l[Za] = t.current, Gc(l), new Xn(t);
  }, ze.version = "19.2.0", ze;
}
var Ey;
function t1() {
  if (Ey) return ci.exports;
  Ey = 1;
  function O() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O);
      } catch (ol) {
        console.error(ol);
      }
  }
  return O(), ci.exports = l1(), ci.exports;
}
var a1 = t1();
const u1 = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4", e1 = [
  { name: "The introduction", word: "DATA", label: "Hi, I’m Arham. Based in Dublin.", title: "Complex data. Clear decisions.", text: "I investigate reporting problems, connect enterprise systems and make analysis explainable. What can I help your team solve?", link: "#journey", cta: "Explore my experience", bg: "#842b39" },
  { name: "The projects", word: "BUILD", label: "Working ideas. Visible evidence.", title: "Open the work. See the thinking.", text: "Five projects. Different problems. Explore working demos, readable methods and the evidence behind each one.", link: "#projects", cta: "Explore the projects", bg: "#234b51" },
  { name: "The research", word: "EXPLAIN", label: "Dublin City University / MSc research", title: "A prediction needs an explanation.", text: "My co-authored practicum connects XGBoost forecasts, SHAP explanations and residential energy scheduling.", link: "#dcu", cta: "Explore the DCU research", bg: "#484061" },
  { name: "The conversation", word: "NEXT", label: "Dublin & Ireland / Open to opportunities", title: "Let’s build the next chapter.", text: "Looking for a BI, data, reporting or application-support colleague? Send me a message directly below.", link: "#contact", cta: "Let’s talk", bg: "#304b3f" }
];
function n1(O, ol = 38, F = 600) {
  const [o, fl] = st.useState("");
  return st.useEffect(() => {
    if (fl(""), matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fl(O);
      return;
    }
    let sl;
    const dl = setTimeout(() => {
      let hl = 0;
      sl = setInterval(() => {
        hl++, fl(O.slice(0, hl)), hl >= O.length && clearInterval(sl);
      }, ol);
    }, F);
    return () => {
      clearTimeout(dl), clearInterval(sl);
    };
  }, [O, ol, F]), { displayed: o, done: o === O };
}
function f1() {
  const [O, ol] = st.useState(0), [F, o] = st.useState(!1), [fl, sl] = st.useState(""), dl = st.useRef(null), hl = st.useRef(null), p = st.useRef(!1), E = st.useRef(null), Z = st.useRef(null), N = st.useRef(0), J = e1[O], { displayed: Ql, done: jl } = n1(J.text, 27, 350), Ml = (w) => {
    p.current || (p.current = !0, ol((Dl) => (Dl + w + 4) % 4), E.current = setTimeout(() => p.current = !1, 650));
  };
  st.useEffect(() => {
    const w = setTimeout(() => o(!0), 400), Dl = new Image();
    return Dl.src = "assets/arham-avatar.webp", () => {
      clearTimeout(w), E.current && clearTimeout(E.current);
    };
  }, []);
  const vt = () => {
    const w = hl.current;
    w && Number.isFinite(w.duration) && !w.seeking && Math.abs(w.currentTime - N.current) > 0.035 && (w.currentTime = N.current);
  };
  return st.useEffect(() => {
    let w = null;
    const Dl = (Sl) => {
      var Nl, X;
      if (matchMedia("(prefers-reduced-motion: reduce)").matches || document.body.classList.contains("motion-off")) return;
      const Xl = (Nl = dl.current) == null ? void 0 : Nl.getBoundingClientRect();
      if (!Xl || Xl.bottom < 0 || Xl.top > innerHeight) return;
      (X = dl.current) == null || X.style.setProperty("--pointer-x", String((Sl.clientX / innerWidth - 0.5) * 18) + "px");
      const xl = hl.current;
      xl && Number.isFinite(xl.duration) && w !== null && (N.current = Math.max(0, Math.min(xl.duration - 0.04, N.current + (Sl.clientX - w) / innerWidth * 0.8 * xl.duration)), vt()), w = Sl.clientX;
    };
    return window.addEventListener("mousemove", Dl, { passive: !0 }), () => window.removeEventListener("mousemove", Dl);
  }, []), /* @__PURE__ */ P.jsxs("section", { ref: dl, className: `mainframe-hero relative w-full overflow-hidden scene-${O}`, style: { backgroundColor: J.bg }, "aria-label": "Arham’s portfolio introduction", onTouchStart: (w) => {
    Z.current = { x: w.touches[0].clientX, y: w.touches[0].clientY };
  }, onTouchEnd: (w) => {
    if (!Z.current) return;
    const Dl = w.changedTouches[0].clientX - Z.current.x, Sl = w.changedTouches[0].clientY - Z.current.y;
    Math.abs(Dl) > 60 && Math.abs(Dl) > Math.abs(Sl) * 1.4 && Ml(Dl < 0 ? 1 : -1), Z.current = null;
  }, children: [
    /* @__PURE__ */ P.jsx("video", { ref: hl, className: "mainframe-video", muted: !0, playsInline: !0, preload: "metadata", src: u1, onSeeked: vt, "aria-hidden": "true", tabIndex: -1 }),
    /* @__PURE__ */ P.jsx("div", { className: "mainframe-shade", "aria-hidden": "true" }),
    /* @__PURE__ */ P.jsx("div", { className: "mainframe-ghost", "aria-hidden": "true", children: J.word }),
    /* @__PURE__ */ P.jsx("img", { className: "mainframe-avatar", src: "assets/arham-avatar.webp", alt: "Illustrated character based on Arham, wearing a navy suit and holding a laptop", width: "800", height: "1200", draggable: !1 }),
    /* @__PURE__ */ P.jsxs("div", { className: "mainframe-copy", children: [
      /* @__PURE__ */ P.jsx("p", { className: "mainframe-label", children: J.label }),
      /* @__PURE__ */ P.jsx("h1", { id: "hero-title", children: J.title }),
      /* @__PURE__ */ P.jsx("p", { className: "mainframe-typewriter", "aria-label": J.text, children: /* @__PURE__ */ P.jsxs("span", { "aria-hidden": "true", children: [
        Ql,
        !jl && /* @__PURE__ */ P.jsx("i", { className: "typing-cursor" })
      ] }) }),
      /* @__PURE__ */ P.jsxs("div", { className: `mainframe-pills ${F ? "pills-ready" : ""}`, children: [
        /* @__PURE__ */ P.jsxs("a", { href: J.link, children: [
          J.cta,
          " ↗"
        ] }),
        /* @__PURE__ */ P.jsx("a", { href: "#projects", children: "See my work" }),
        /* @__PURE__ */ P.jsx("a", { href: "#contact", children: "Send a brief hello" }),
        /* @__PURE__ */ P.jsx("a", { href: "assets/Shaik_Arham_Saquib.pdf", download: !0, children: "Download CV ↓" }),
        /* @__PURE__ */ P.jsxs("button", { type: "button", className: "copy-email", onClick: async () => {
          try {
            await navigator.clipboard.writeText("sarhamsaquib@gmail.com"), sl("Email copied.");
          } catch {
            sl("Email: sarhamsaquib@gmail.com");
          }
        }, children: [
          "Reach me: ",
          /* @__PURE__ */ P.jsx("u", { children: "sarhamsaquib@gmail.com" }),
          /* @__PURE__ */ P.jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", "aria-hidden": "true", children: [
            /* @__PURE__ */ P.jsx("rect", { x: "4", y: "4", width: "7", height: "7", stroke: "currentColor" }),
            /* @__PURE__ */ P.jsx("path", { d: "M8 2H2v6", stroke: "currentColor" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ P.jsx("p", { className: "copy-status", role: "status", children: fl })
    ] }),
    /* @__PURE__ */ P.jsxs("div", { className: "mainframe-bottom", children: [
      /* @__PURE__ */ P.jsx("span", { children: "ARHAM SAQUIB / THE DUBLIN EDITION" }),
      /* @__PURE__ */ P.jsxs("div", { className: "chapter-controls flex items-center", children: [
        /* @__PURE__ */ P.jsx("button", { type: "button", "aria-label": "Previous chapter", onClick: () => Ml(-1), children: "←" }),
        /* @__PURE__ */ P.jsxs("span", { "aria-live": "polite", children: [
          "0",
          O + 1,
          " / 04 · ",
          J.name
        ] }),
        /* @__PURE__ */ P.jsx("button", { type: "button", "aria-label": "Next chapter", onClick: () => Ml(1), children: "→" })
      ] }),
      /* @__PURE__ */ P.jsx("span", { className: "swipe-hint", children: "Swipe or use the arrows ↔" })
    ] })
  ] });
}
const Ay = document.getElementById("hero-carousel");
Ay && a1.createRoot(Ay).render(/* @__PURE__ */ P.jsx(f1, {}));
export {
  n1 as useTypewriter
};
