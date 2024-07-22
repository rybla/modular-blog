(() => {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f) {
      return function(g) {
        return function(x) {
          return f(g(x));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x) {
      return x;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Boolean/index.js
  var otherwise = true;

  // output/Data.Function/index.js
  var flip = function(f) {
    return function(b2) {
      return function(a2) {
        return f(a2)(b2);
      };
    };
  };
  var $$const = function(a2) {
    return function(v) {
      return a2;
    };
  };

  // output/Data.Functor/foreign.js
  var arrayMap = function(f) {
    return function(arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i2 = 0; i2 < l; i2++) {
        result[i2] = f(arr[i2]);
      }
      return result;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map111 = map(dictFunctor);
    return function(fa) {
      return function(f) {
        return map111(f)(fa);
      };
    };
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };
  var voidLeft = function(dictFunctor) {
    var map111 = map(dictFunctor);
    return function(f) {
      return function(x) {
        return map111($$const(x))(f);
      };
    };
  };
  var functorArray = {
    map: arrayMap
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map30 = map(dictApply.Functor0());
    return function(a2) {
      return function(b2) {
        return apply1(map30($$const(identity2))(a2))(b2);
      };
    };
  };
  var lift2 = function(dictApply) {
    var apply1 = apply(dictApply);
    var map30 = map(dictApply.Functor0());
    return function(f) {
      return function(a2) {
        return function(b2) {
          return apply1(map30(f)(a2))(b2);
        };
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var unless = function(dictApplicative) {
    var pure15 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (!v) {
          return v1;
        }
        ;
        if (v) {
          return pure15(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 68, column 1 - line 68, column 65): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var when = function(dictApplicative) {
    var pure15 = pure(dictApplicative);
    return function(v) {
      return function(v1) {
        if (v) {
          return v1;
        }
        ;
        if (!v) {
          return pure15(unit);
        }
        ;
        throw new Error("Failed pattern match at Control.Applicative (line 63, column 1 - line 63, column 63): " + [v.constructor.name, v1.constructor.name]);
      };
    };
  };
  var liftA1 = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    var pure15 = pure(dictApplicative);
    return function(f) {
      return function(a2) {
        return apply2(pure15(f))(a2);
      };
    };
  };

  // output/Control.Bind/index.js
  var discard = function(dict) {
    return dict.discard;
  };
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };
  var composeKleisliFlipped = function(dictBind) {
    var bindFlipped12 = bindFlipped(dictBind);
    return function(f) {
      return function(g) {
        return function(a2) {
          return bindFlipped12(f)(g(a2));
        };
      };
    };
  };
  var composeKleisli = function(dictBind) {
    var bind15 = bind(dictBind);
    return function(f) {
      return function(g) {
        return function(a2) {
          return bind15(f(a2))(g);
        };
      };
    };
  };
  var discardUnit = {
    discard: function(dictBind) {
      return bind(dictBind);
    }
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Ord/foreign.js
  var unsafeCompareImpl = function(lt) {
    return function(eq3) {
      return function(gt) {
        return function(x) {
          return function(y) {
            return x < y ? lt : x === y ? eq3 : gt;
          };
        };
      };
    };
  };
  var ordIntImpl = unsafeCompareImpl;
  var ordStringImpl = unsafeCompareImpl;
  var ordCharImpl = unsafeCompareImpl;

  // output/Data.Eq/foreign.js
  var refEq = function(r1) {
    return function(r2) {
      return r1 === r2;
    };
  };
  var eqIntImpl = refEq;
  var eqCharImpl = refEq;
  var eqStringImpl = refEq;

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label5) {
    return function(rec) {
      return rec[label5];
    };
  };
  var unsafeSet = function(label5) {
    return function(value14) {
      return function(rec) {
        var copy2 = {};
        for (var key in rec) {
          if ({}.hasOwnProperty.call(rec, key)) {
            copy2[key] = rec[key];
          }
        }
        copy2[label5] = value14;
        return copy2;
      };
    };
  };

  // output/Data.Eq/index.js
  var eqUnit = {
    eq: function(v) {
      return function(v1) {
        return true;
      };
    }
  };
  var eqString = {
    eq: eqStringImpl
  };
  var eqInt = {
    eq: eqIntImpl
  };
  var eqChar = {
    eq: eqCharImpl
  };
  var eq = function(dict) {
    return dict.eq;
  };

  // output/Data.Ordering/index.js
  var LT = /* @__PURE__ */ function() {
    function LT2() {
    }
    ;
    LT2.value = new LT2();
    return LT2;
  }();
  var GT = /* @__PURE__ */ function() {
    function GT2() {
    }
    ;
    GT2.value = new GT2();
    return GT2;
  }();
  var EQ = /* @__PURE__ */ function() {
    function EQ2() {
    }
    ;
    EQ2.value = new EQ2();
    return EQ2;
  }();

  // output/Data.Ring/foreign.js
  var intSub = function(x) {
    return function(y) {
      return x - y | 0;
    };
  };

  // output/Data.Semiring/foreign.js
  var intAdd = function(x) {
    return function(y) {
      return x + y | 0;
    };
  };
  var intMul = function(x) {
    return function(y) {
      return x * y | 0;
    };
  };

  // output/Data.Semiring/index.js
  var semiringInt = {
    add: intAdd,
    zero: 0,
    mul: intMul,
    one: 1
  };

  // output/Data.Ring/index.js
  var ringInt = {
    sub: intSub,
    Semiring0: function() {
      return semiringInt;
    }
  };

  // output/Data.Ord/index.js
  var ordUnit = {
    compare: function(v) {
      return function(v1) {
        return EQ.value;
      };
    },
    Eq0: function() {
      return eqUnit;
    }
  };
  var ordString = /* @__PURE__ */ function() {
    return {
      compare: ordStringImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqString;
      }
    };
  }();
  var ordInt = /* @__PURE__ */ function() {
    return {
      compare: ordIntImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqInt;
      }
    };
  }();
  var ordChar = /* @__PURE__ */ function() {
    return {
      compare: ordCharImpl(LT.value)(EQ.value)(GT.value),
      Eq0: function() {
        return eqChar;
      }
    };
  }();
  var compare = function(dict) {
    return dict.compare;
  };

  // output/Data.Bounded/index.js
  var top = function(dict) {
    return dict.top;
  };
  var boundedChar = {
    top: topChar,
    bottom: bottomChar,
    Ord0: function() {
      return ordChar;
    }
  };
  var bottom = function(dict) {
    return dict.bottom;
  };

  // output/Data.Show/foreign.js
  var showIntImpl = function(n) {
    return n.toString();
  };
  var showStringImpl = function(s) {
    var l = s.length;
    return '"' + s.replace(
      /[\0-\x1F\x7F"\\]/g,
      // eslint-disable-line no-control-regex
      function(c, i2) {
        switch (c) {
          case '"':
          case "\\":
            return "\\" + c;
          case "\x07":
            return "\\a";
          case "\b":
            return "\\b";
          case "\f":
            return "\\f";
          case "\n":
            return "\\n";
          case "\r":
            return "\\r";
          case "	":
            return "\\t";
          case "\v":
            return "\\v";
        }
        var k = i2 + 1;
        var empty7 = k < l && s[k] >= "0" && s[k] <= "9" ? "\\&" : "";
        return "\\" + c.charCodeAt(0).toString(10) + empty7;
      }
    ) + '"';
  };

  // output/Data.Void/index.js
  var absurd = function(a2) {
    var spin = function($copy_v) {
      var $tco_result;
      function $tco_loop(v) {
        $copy_v = v;
        return;
      }
      ;
      while (true) {
        $tco_result = $tco_loop($copy_v);
      }
      ;
      return $tco_result;
    };
    return spin(a2);
  };

  // output/Data.Show/index.js
  var showString = {
    show: showStringImpl
  };
  var showRecordFields = function(dict) {
    return dict.showRecordFields;
  };
  var showRecord = function() {
    return function() {
      return function(dictShowRecordFields) {
        var showRecordFields1 = showRecordFields(dictShowRecordFields);
        return {
          show: function(record) {
            return "{" + (showRecordFields1($$Proxy.value)(record) + "}");
          }
        };
      };
    };
  };
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };
  var showRecordFieldsCons = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictShowRecordFields) {
      var showRecordFields1 = showRecordFields(dictShowRecordFields);
      return function(dictShow) {
        var show14 = show(dictShow);
        return {
          showRecordFields: function(v) {
            return function(record) {
              var tail2 = showRecordFields1($$Proxy.value)(record);
              var key = reflectSymbol2($$Proxy.value);
              var focus3 = unsafeGet(key)(record);
              return " " + (key + (": " + (show14(focus3) + ("," + tail2))));
            };
          }
        };
      };
    };
  };
  var showRecordFieldsConsNil = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictShow) {
      var show14 = show(dictShow);
      return {
        showRecordFields: function(v) {
          return function(record) {
            var key = reflectSymbol2($$Proxy.value);
            var focus3 = unsafeGet(key)(record);
            return " " + (key + (": " + (show14(focus3) + " ")));
          };
        }
      };
    };
  };

  // output/Data.Generic.Rep/index.js
  var Inl = /* @__PURE__ */ function() {
    function Inl2(value0) {
      this.value0 = value0;
    }
    ;
    Inl2.create = function(value0) {
      return new Inl2(value0);
    };
    return Inl2;
  }();
  var Inr = /* @__PURE__ */ function() {
    function Inr2(value0) {
      this.value0 = value0;
    }
    ;
    Inr2.create = function(value0) {
      return new Inr2(value0);
    };
    return Inr2;
  }();
  var Product = /* @__PURE__ */ function() {
    function Product2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Product2.create = function(value0) {
      return function(value1) {
        return new Product2(value0, value1);
      };
    };
    return Product2;
  }();
  var NoArguments = /* @__PURE__ */ function() {
    function NoArguments2() {
    }
    ;
    NoArguments2.value = new NoArguments2();
    return NoArguments2;
  }();
  var Constructor = function(x) {
    return x;
  };
  var Argument = function(x) {
    return x;
  };
  var to = function(dict) {
    return dict.to;
  };
  var from = function(dict) {
    return dict.from;
  };

  // output/Data.HeytingAlgebra/foreign.js
  var boolConj = function(b1) {
    return function(b2) {
      return b1 && b2;
    };
  };
  var boolDisj = function(b1) {
    return function(b2) {
      return b1 || b2;
    };
  };
  var boolNot = function(b2) {
    return !b2;
  };

  // output/Data.HeytingAlgebra/index.js
  var tt = function(dict) {
    return dict.tt;
  };
  var not = function(dict) {
    return dict.not;
  };
  var implies = function(dict) {
    return dict.implies;
  };
  var ff = function(dict) {
    return dict.ff;
  };
  var disj = function(dict) {
    return dict.disj;
  };
  var heytingAlgebraBoolean = {
    ff: false,
    tt: true,
    implies: function(a2) {
      return function(b2) {
        return disj(heytingAlgebraBoolean)(not(heytingAlgebraBoolean)(a2))(b2);
      };
    },
    conj: boolConj,
    disj: boolDisj,
    not: boolNot
  };
  var conj = function(dict) {
    return dict.conj;
  };
  var heytingAlgebraFunction = function(dictHeytingAlgebra) {
    var ff1 = ff(dictHeytingAlgebra);
    var tt1 = tt(dictHeytingAlgebra);
    var implies1 = implies(dictHeytingAlgebra);
    var conj1 = conj(dictHeytingAlgebra);
    var disj1 = disj(dictHeytingAlgebra);
    var not1 = not(dictHeytingAlgebra);
    return {
      ff: function(v) {
        return ff1;
      },
      tt: function(v) {
        return tt1;
      },
      implies: function(f) {
        return function(g) {
          return function(a2) {
            return implies1(f(a2))(g(a2));
          };
        };
      },
      conj: function(f) {
        return function(g) {
          return function(a2) {
            return conj1(f(a2))(g(a2));
          };
        };
      },
      disj: function(f) {
        return function(g) {
          return function(a2) {
            return disj1(f(a2))(g(a2));
          };
        };
      },
      not: function(f) {
        return function(a2) {
          return not1(f(a2));
        };
      }
    };
  };

  // output/Data.EuclideanRing/foreign.js
  var intDegree = function(x) {
    return Math.min(Math.abs(x), 2147483647);
  };
  var intDiv = function(x) {
    return function(y) {
      if (y === 0) return 0;
      return y > 0 ? Math.floor(x / y) : -Math.floor(x / -y);
    };
  };
  var intMod = function(x) {
    return function(y) {
      if (y === 0) return 0;
      var yy = Math.abs(y);
      return (x % yy + yy) % yy;
    };
  };

  // output/Data.CommutativeRing/index.js
  var commutativeRingInt = {
    Ring0: function() {
      return ringInt;
    }
  };

  // output/Data.EuclideanRing/index.js
  var mod = function(dict) {
    return dict.mod;
  };
  var euclideanRingInt = {
    degree: intDegree,
    div: intDiv,
    mod: intMod,
    CommutativeRing0: function() {
      return commutativeRingInt;
    }
  };
  var div = function(dict) {
    return dict.div;
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0) return ys;
      if (ys.length === 0) return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Monoid/index.js
  var monoidArray = {
    mempty: [],
    Semigroup0: function() {
      return semigroupArray;
    }
  };
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();
  var snd = function(v) {
    return v.value1;
  };
  var functorTuple = {
    map: function(f) {
      return function(m) {
        return new Tuple(m.value0, f(m.value1));
      };
    }
  };
  var fst = function(v) {
    return v.value0;
  };
  var eqTuple = function(dictEq) {
    var eq3 = eq(dictEq);
    return function(dictEq1) {
      var eq12 = eq(dictEq1);
      return {
        eq: function(x) {
          return function(y) {
            return eq3(x.value0)(y.value0) && eq12(x.value1)(y.value1);
          };
        }
      };
    };
  };
  var ordTuple = function(dictOrd) {
    var compare3 = compare(dictOrd);
    var eqTuple1 = eqTuple(dictOrd.Eq0());
    return function(dictOrd1) {
      var compare12 = compare(dictOrd1);
      var eqTuple2 = eqTuple1(dictOrd1.Eq0());
      return {
        compare: function(x) {
          return function(y) {
            var v = compare3(x.value0)(y.value0);
            if (v instanceof LT) {
              return LT.value;
            }
            ;
            if (v instanceof GT) {
              return GT.value;
            }
            ;
            return compare12(x.value1)(y.value1);
          };
        },
        Eq0: function() {
          return eqTuple2;
        }
      };
    };
  };

  // output/Control.Monad.State.Class/index.js
  var state = function(dict) {
    return dict.state;
  };
  var put = function(dictMonadState) {
    var state1 = state(dictMonadState);
    return function(s) {
      return state1(function(v) {
        return new Tuple(unit, s);
      });
    };
  };
  var modify_ = function(dictMonadState) {
    var state1 = state(dictMonadState);
    return function(f) {
      return state1(function(s) {
        return new Tuple(unit, f(s));
      });
    };
  };

  // output/Data.Array/foreign.js
  var replicateFill = function(count, value14) {
    if (count < 1) {
      return [];
    }
    var result = new Array(count);
    return result.fill(value14);
  };
  var replicatePolyfill = function(count, value14) {
    var result = [];
    var n = 0;
    for (var i2 = 0; i2 < count; i2++) {
      result[n++] = value14;
    }
    return result;
  };
  var replicateImpl = typeof Array.prototype.fill === "function" ? replicateFill : replicatePolyfill;
  var length = function(xs) {
    return xs.length;
  };
  var findIndexImpl = function(just, nothing, f, xs) {
    for (var i2 = 0, l = xs.length; i2 < l; i2++) {
      if (f(xs[i2])) return just(i2);
    }
    return nothing;
  };
  var _deleteAt = function(just, nothing, i2, l) {
    if (i2 < 0 || i2 >= l.length) return nothing;
    var l1 = l.slice();
    l1.splice(i2, 1);
    return just(l1);
  };
  var unsafeIndexImpl = function(xs, n) {
    return xs[n];
  };

  // output/Control.Alt/index.js
  var alt = function(dict) {
    return dict.alt;
  };

  // output/Control.Monad/index.js
  var unlessM = function(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    var unless2 = unless(dictMonad.Applicative0());
    return function(mb) {
      return function(m) {
        return bind10(mb)(function(b2) {
          return unless2(b2)(m);
        });
      };
    };
  };
  var ap = function(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    var pure15 = pure(dictMonad.Applicative0());
    return function(f) {
      return function(a2) {
        return bind10(f)(function(f$prime) {
          return bind10(a2)(function(a$prime) {
            return pure15(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Data.Maybe/index.js
  var identity3 = /* @__PURE__ */ identity(categoryFn);
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();
  var maybe$prime = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v(unit);
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 250, column 1 - line 250, column 62): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var maybe = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Nothing) {
          return v;
        }
        ;
        if (v2 instanceof Just) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 237, column 1 - line 237, column 51): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };
  var isNothing = /* @__PURE__ */ maybe(true)(/* @__PURE__ */ $$const(false));
  var isJust = /* @__PURE__ */ maybe(false)(/* @__PURE__ */ $$const(true));
  var functorMaybe = {
    map: function(v) {
      return function(v1) {
        if (v1 instanceof Just) {
          return new Just(v(v1.value0));
        }
        ;
        return Nothing.value;
      };
    }
  };
  var map2 = /* @__PURE__ */ map(functorMaybe);
  var fromMaybe = function(a2) {
    return maybe(a2)(identity3);
  };
  var fromJust = function() {
    return function(v) {
      if (v instanceof Just) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Maybe (line 288, column 1 - line 288, column 46): " + [v.constructor.name]);
    };
  };
  var applyMaybe = {
    apply: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return map2(v.value0)(v1);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Functor0: function() {
      return functorMaybe;
    }
  };
  var bindMaybe = {
    bind: function(v) {
      return function(v1) {
        if (v instanceof Just) {
          return v1(v.value0);
        }
        ;
        if (v instanceof Nothing) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [v.constructor.name, v1.constructor.name]);
      };
    },
    Apply0: function() {
      return applyMaybe;
    }
  };

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();
  var functorEither = {
    map: function(f) {
      return function(m) {
        if (m instanceof Left) {
          return new Left(m.value0);
        }
        ;
        if (m instanceof Right) {
          return new Right(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var either = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2 instanceof Left) {
          return v(v2.value0);
        }
        ;
        if (v2 instanceof Right) {
          return v1(v2.value0);
        }
        ;
        throw new Error("Failed pattern match at Data.Either (line 208, column 1 - line 208, column 64): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
      };
    };
  };

  // output/Data.Identity/index.js
  var Identity = function(x) {
    return x;
  };
  var functorIdentity = {
    map: function(f) {
      return function(m) {
        return f(m);
      };
    }
  };
  var applyIdentity = {
    apply: function(v) {
      return function(v1) {
        return v(v1);
      };
    },
    Functor0: function() {
      return functorIdentity;
    }
  };
  var bindIdentity = {
    bind: function(v) {
      return function(f) {
        return f(v);
      };
    },
    Apply0: function() {
      return applyIdentity;
    }
  };
  var applicativeIdentity = {
    pure: Identity,
    Apply0: function() {
      return applyIdentity;
    }
  };
  var monadIdentity = {
    Applicative0: function() {
      return applicativeIdentity;
    },
    Bind1: function() {
      return bindIdentity;
    }
  };

  // output/Effect/foreign.js
  var pureE = function(a2) {
    return function() {
      return a2;
    };
  };
  var bindE = function(a2) {
    return function(f) {
      return function() {
        return f(a2())();
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

  // output/Effect.Ref/foreign.js
  var _new = function(val) {
    return function() {
      return { value: val };
    };
  };
  var read = function(ref2) {
    return function() {
      return ref2.value;
    };
  };
  var modifyImpl = function(f) {
    return function(ref2) {
      return function() {
        var t = f(ref2.value);
        ref2.value = t.state;
        return t.value;
      };
    };
  };
  var write = function(val) {
    return function(ref2) {
      return function() {
        ref2.value = val;
      };
    };
  };

  // output/Effect.Ref/index.js
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var $$new = _new;
  var modify$prime = modifyImpl;
  var modify = function(f) {
    return modify$prime(function(s) {
      var s$prime = f(s);
      return {
        state: s$prime,
        value: s$prime
      };
    });
  };
  var modify_2 = function(f) {
    return function(s) {
      return $$void2(modify(f)(s));
    };
  };

  // output/Control.Monad.Rec.Class/index.js
  var bindFlipped2 = /* @__PURE__ */ bindFlipped(bindEffect);
  var map3 = /* @__PURE__ */ map(functorEffect);
  var Loop = /* @__PURE__ */ function() {
    function Loop2(value0) {
      this.value0 = value0;
    }
    ;
    Loop2.create = function(value0) {
      return new Loop2(value0);
    };
    return Loop2;
  }();
  var Done = /* @__PURE__ */ function() {
    function Done2(value0) {
      this.value0 = value0;
    }
    ;
    Done2.create = function(value0) {
      return new Done2(value0);
    };
    return Done2;
  }();
  var tailRecM = function(dict) {
    return dict.tailRecM;
  };
  var monadRecEffect = {
    tailRecM: function(f) {
      return function(a2) {
        var fromDone = function(v) {
          if (v instanceof Done) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 137, column 30 - line 137, column 44): " + [v.constructor.name]);
        };
        return function __do2() {
          var r = bindFlipped2($$new)(f(a2))();
          (function() {
            while (!function __do3() {
              var v = read(r)();
              if (v instanceof Loop) {
                var e = f(v.value0)();
                write(e)(r)();
                return false;
              }
              ;
              if (v instanceof Done) {
                return true;
              }
              ;
              throw new Error("Failed pattern match at Control.Monad.Rec.Class (line 128, column 22 - line 133, column 28): " + [v.constructor.name]);
            }()) {
            }
            ;
            return {};
          })();
          return map3(fromDone)(read(r))();
        };
      };
    },
    Monad0: function() {
      return monadEffect;
    }
  };

  // output/Control.Monad.ST.Internal/foreign.js
  var map_ = function(f) {
    return function(a2) {
      return function() {
        return f(a2());
      };
    };
  };
  var pure_ = function(a2) {
    return function() {
      return a2;
    };
  };
  var bind_ = function(a2) {
    return function(f) {
      return function() {
        return f(a2())();
      };
    };
  };
  function whileST(f) {
    return function(a2) {
      return function() {
        while (f()) {
          a2();
        }
      };
    };
  }
  function newSTRef(val) {
    return function() {
      return { value: val };
    };
  }
  var read2 = function(ref2) {
    return function() {
      return ref2.value;
    };
  };
  var write2 = function(a2) {
    return function(ref2) {
      return function() {
        return ref2.value = a2;
      };
    };
  };

  // output/Control.Monad.ST.Internal/index.js
  var $runtime_lazy2 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var functorST = {
    map: map_
  };
  var map4 = /* @__PURE__ */ map(functorST);
  var $$void3 = /* @__PURE__ */ $$void(functorST);
  var monadST = {
    Applicative0: function() {
      return applicativeST;
    },
    Bind1: function() {
      return bindST;
    }
  };
  var bindST = {
    bind: bind_,
    Apply0: function() {
      return $lazy_applyST(0);
    }
  };
  var applicativeST = {
    pure: pure_,
    Apply0: function() {
      return $lazy_applyST(0);
    }
  };
  var $lazy_applyST = /* @__PURE__ */ $runtime_lazy2("applyST", "Control.Monad.ST.Internal", function() {
    return {
      apply: ap(monadST),
      Functor0: function() {
        return functorST;
      }
    };
  });
  var bind2 = /* @__PURE__ */ bind(bindST);
  var bindFlipped3 = /* @__PURE__ */ bindFlipped(bindST);
  var discard2 = /* @__PURE__ */ discard(discardUnit)(bindST);
  var pure2 = /* @__PURE__ */ pure(applicativeST);
  var monadRecST = {
    tailRecM: function(f) {
      return function(a2) {
        var isLooping = function(v) {
          if (v instanceof Loop) {
            return true;
          }
          ;
          return false;
        };
        var fromDone = function(v) {
          if (v instanceof Done) {
            return v.value0;
          }
          ;
          throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 70, column 32 - line 70, column 46): " + [v.constructor.name]);
        };
        return bind2(bindFlipped3(newSTRef)(f(a2)))(function(r) {
          return discard2(whileST(map4(isLooping)(read2(r)))(bind2(read2(r))(function(v) {
            if (v instanceof Loop) {
              return bind2(f(v.value0))(function(e) {
                return $$void3(write2(e)(r));
              });
            }
            ;
            if (v instanceof Done) {
              return pure2(unit);
            }
            ;
            throw new Error("Failed pattern match at Control.Monad.ST.Internal (line 62, column 18 - line 66, column 28): " + [v.constructor.name]);
          })))(function() {
            return map4(fromDone)(read2(r));
          });
        });
      };
    },
    Monad0: function() {
      return monadST;
    }
  };

  // output/Data.Array.ST/foreign.js
  function newSTArray() {
    return [];
  }
  function unsafeFreezeThawImpl(xs) {
    return xs;
  }
  var unsafeFreezeImpl = unsafeFreezeThawImpl;
  var pushImpl = function(a2, xs) {
    return xs.push(a2);
  };

  // output/Control.Monad.ST.Uncurried/foreign.js
  var runSTFn1 = function runSTFn12(fn) {
    return function(a2) {
      return function() {
        return fn(a2);
      };
    };
  };
  var runSTFn2 = function runSTFn22(fn) {
    return function(a2) {
      return function(b2) {
        return function() {
          return fn(a2, b2);
        };
      };
    };
  };

  // output/Data.Array.ST/index.js
  var unsafeFreeze = /* @__PURE__ */ runSTFn1(unsafeFreezeImpl);
  var push = /* @__PURE__ */ runSTFn2(pushImpl);

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = len - 1; i2 >= 0; i2--) {
          acc = f(xs[i2])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f) {
    return function(init3) {
      return function(xs) {
        var acc = init3;
        var len = xs.length;
        for (var i2 = 0; i2 < len; i2++) {
          acc = f(acc)(xs[i2]);
        }
        return acc;
      };
    };
  };

  // output/Control.Plus/index.js
  var empty = function(dict) {
    return dict.empty;
  };

  // output/Data.Bifunctor/index.js
  var bimap = function(dict) {
    return dict.bimap;
  };

  // output/Unsafe.Coerce/foreign.js
  var unsafeCoerce2 = function(x) {
    return x;
  };

  // output/Safe.Coerce/index.js
  var coerce = function() {
    return unsafeCoerce2;
  };

  // output/Data.Newtype/index.js
  var coerce2 = /* @__PURE__ */ coerce();
  var unwrap = function() {
    return coerce2;
  };

  // output/Data.Foldable/index.js
  var identity4 = /* @__PURE__ */ identity(categoryFn);
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure15 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr22 = foldr(dictFoldable);
      return function(f) {
        return foldr22(function($454) {
          return applySecond2(f($454));
        })(pure15(unit));
      };
    };
  };
  var for_ = function(dictApplicative) {
    var traverse_14 = traverse_(dictApplicative);
    return function(dictFoldable) {
      return flip(traverse_14(dictFoldable));
    };
  };
  var foldl = function(dict) {
    return dict.foldl;
  };
  var foldableMaybe = {
    foldr: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v2.value0)(v1);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldl: function(v) {
      return function(v1) {
        return function(v2) {
          if (v2 instanceof Nothing) {
            return v1;
          }
          ;
          if (v2 instanceof Just) {
            return v(v1)(v2.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      return function(v) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return mempty2;
          }
          ;
          if (v1 instanceof Just) {
            return v(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr22 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append6 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldr22(function(x) {
          return function(acc) {
            return append6(f(x))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };
  var foldMap = function(dict) {
    return dict.foldMap;
  };
  var fold = function(dictFoldable) {
    var foldMap2 = foldMap(dictFoldable);
    return function(dictMonoid) {
      return foldMap2(dictMonoid)(identity4);
    };
  };

  // output/Data.Function.Uncurried/foreign.js
  var mkFn5 = function(fn) {
    return function(a2, b2, c, d, e) {
      return fn(a2)(b2)(c)(d)(e);
    };
  };
  var runFn2 = function(fn) {
    return function(a2) {
      return function(b2) {
        return fn(a2, b2);
      };
    };
  };
  var runFn3 = function(fn) {
    return function(a2) {
      return function(b2) {
        return function(c) {
          return fn(a2, b2, c);
        };
      };
    };
  };
  var runFn4 = function(fn) {
    return function(a2) {
      return function(b2) {
        return function(c) {
          return function(d) {
            return fn(a2, b2, c, d);
          };
        };
      };
    };
  };

  // output/Data.Traversable/index.js
  var traverse = function(dict) {
    return dict.traverse;
  };
  var sequence = function(dict) {
    return dict.sequence;
  };

  // output/Data.Unfoldable/foreign.js
  var unfoldrArrayImpl = function(isNothing2) {
    return function(fromJust5) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b2) {
              var result = [];
              var value14 = b2;
              while (true) {
                var maybe2 = f(value14);
                if (isNothing2(maybe2)) return result;
                var tuple = fromJust5(maybe2);
                result.push(fst2(tuple));
                value14 = snd2(tuple);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/foreign.js
  var unfoldr1ArrayImpl = function(isNothing2) {
    return function(fromJust5) {
      return function(fst2) {
        return function(snd2) {
          return function(f) {
            return function(b2) {
              var result = [];
              var value14 = b2;
              while (true) {
                var tuple = f(value14);
                result.push(fst2(tuple));
                var maybe2 = snd2(tuple);
                if (isNothing2(maybe2)) return result;
                value14 = fromJust5(maybe2);
              }
            };
          };
        };
      };
    };
  };

  // output/Data.Unfoldable1/index.js
  var fromJust2 = /* @__PURE__ */ fromJust();
  var unfoldable1Array = {
    unfoldr1: /* @__PURE__ */ unfoldr1ArrayImpl(isNothing)(fromJust2)(fst)(snd)
  };

  // output/Data.Unfoldable/index.js
  var fromJust3 = /* @__PURE__ */ fromJust();
  var unfoldr = function(dict) {
    return dict.unfoldr;
  };
  var unfoldableArray = {
    unfoldr: /* @__PURE__ */ unfoldrArrayImpl(isNothing)(fromJust3)(fst)(snd),
    Unfoldable10: function() {
      return unfoldable1Array;
    }
  };

  // output/Data.Array/index.js
  var map5 = /* @__PURE__ */ map(functorMaybe);
  var fromJust4 = /* @__PURE__ */ fromJust();
  var fold1 = /* @__PURE__ */ fold(foldableArray);
  var unsafeIndex = function() {
    return runFn2(unsafeIndexImpl);
  };
  var unsafeIndex1 = /* @__PURE__ */ unsafeIndex();
  var fold2 = function(dictMonoid) {
    return fold1(dictMonoid);
  };
  var findIndex = /* @__PURE__ */ function() {
    return runFn4(findIndexImpl)(Just.create)(Nothing.value);
  }();
  var find2 = function(f) {
    return function(xs) {
      return map5(unsafeIndex1(xs))(findIndex(f)(xs));
    };
  };
  var deleteAt = /* @__PURE__ */ function() {
    return runFn4(_deleteAt)(Just.create)(Nothing.value);
  }();
  var deleteBy = function(v) {
    return function(v1) {
      return function(v2) {
        if (v2.length === 0) {
          return [];
        }
        ;
        return maybe(v2)(function(i2) {
          return fromJust4(deleteAt(i2)(v2));
        })(findIndex(v(v1))(v2));
      };
    };
  };

  // output/Data.Profunctor/index.js
  var profunctorFn = {
    dimap: function(a2b) {
      return function(c2d) {
        return function(b2c) {
          return function($18) {
            return c2d(b2c(a2b($18)));
          };
        };
      };
    }
  };
  var dimap = function(dict) {
    return dict.dimap;
  };

  // output/Data.Profunctor.Strong/index.js
  var strongFn = {
    first: function(a2b) {
      return function(v) {
        return new Tuple(a2b(v.value0), v.value1);
      };
    },
    second: /* @__PURE__ */ map(functorTuple),
    Profunctor0: function() {
      return profunctorFn;
    }
  };
  var first = function(dict) {
    return dict.first;
  };

  // output/Data.Lens.Lens/index.js
  var lens$prime = function(to2) {
    return function(dictStrong) {
      var dimap2 = dimap(dictStrong.Profunctor0());
      var first2 = first(dictStrong);
      return function(pab) {
        return dimap2(to2)(function(v) {
          return v.value1(v.value0);
        })(first2(pab));
      };
    };
  };
  var lens = function(get4) {
    return function(set2) {
      return function(dictStrong) {
        return lens$prime(function(s) {
          return new Tuple(get4(s), function(b2) {
            return set2(s)(b2);
          });
        })(dictStrong);
      };
    };
  };

  // output/Record/index.js
  var set = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l) {
          return function(b2) {
            return function(r) {
              return unsafeSet(reflectSymbol2(l))(b2)(r);
            };
          };
        };
      };
    };
  };
  var get = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(l) {
        return function(r) {
          return unsafeGet(reflectSymbol2(l))(r);
        };
      };
    };
  };

  // output/Data.Lens.Record/index.js
  var prop = function(dictIsSymbol) {
    var get4 = get(dictIsSymbol)();
    var set2 = set(dictIsSymbol)()();
    return function() {
      return function() {
        return function(l) {
          return function(dictStrong) {
            return lens(get4(l))(flip(set2(l)))(dictStrong);
          };
        };
      };
    };
  };

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler2(error4) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error4) {
        setTimeout(function() {
          throw error4;
        }, 0);
      }
    }
    function runSync(left2, right2, eff) {
      try {
        return right2(eff());
      } catch (error4) {
        return left2(error4);
      }
    }
    function runAsync(left2, eff, k) {
      try {
        return eff(k)();
      } catch (error4) {
        k(left2(error4))();
        return nonCanceler2;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size4 = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size4 !== 0) {
          size4--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i2, tmp;
          if (size4 === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size4) % limit] = cb;
          size4++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill2(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k in fibers) {
              if (fibers.hasOwnProperty(k)) {
                killCount++;
                kill2(k);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error4) {
              return new Aff2(SYNC, function() {
                for (var k2 in kills) {
                  if (kills.hasOwnProperty(k2)) {
                    kills[k2]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step4 = aff;
      var fail3 = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run3(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step4 = bhead(step4);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e) {
                status = RETURN;
                fail3 = util.left(e);
                step4 = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step4)) {
                status = RETURN;
                fail3 = step4;
                step4 = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step4 = util.fromRight(step4);
              }
              break;
            case CONTINUE:
              switch (step4.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step4._2;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step4 = util.right(step4._1);
                  } else {
                    status = STEP_BIND;
                    step4 = step4._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step4 = runSync(util.left, util.right, step4._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step4 = runAsync(util.left, step4._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step4 = result2;
                        run3(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail3 = util.left(step4._1);
                  step4 = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step4, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step4, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step4 = step4._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step4._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step4._1) {
                    tmp.run();
                  }
                  step4 = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step4 = sequential3(util, supervisor, step4._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step4 = interrupt || fail3 || step4;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail3) {
                      status = CONTINUE;
                      step4 = attempt._2(util.fromLeft(fail3));
                      fail3 = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail3) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step4 = util.fromRight(step4);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail3 === null) {
                      result = util.fromRight(step4);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step4 = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail3), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step4 = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail3) {
                      step4 = attempt._1.failed(util.fromLeft(fail3))(attempt._2);
                    } else {
                      step4 = attempt._1.completed(util.fromRight(step4))(attempt._2);
                    }
                    fail3 = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step4, fail3), attempts, interrupt);
                    status = CONTINUE;
                    step4 = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step4 = attempt._1;
                    fail3 = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k in joins) {
                if (joins.hasOwnProperty(k)) {
                  rethrow = rethrow && joins[k].rethrow;
                  runEff(joins[k].handler(step4));
                }
              }
              joins = null;
              if (interrupt && fail3) {
                setTimeout(function() {
                  throw util.fromLeft(fail3);
                }, 0);
              } else if (util.isLeft(step4) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step4);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join4) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join4.rethrow;
            join4.handler(step4)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join4;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill2(error4, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error4);
              status = COMPLETED;
              step4 = interrupt;
              run3(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step4(error4)), attempts, interrupt);
                }
                status = RETURN;
                step4 = null;
                fail3 = null;
                run3(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error4);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step4 = null;
                fail3 = null;
              }
          }
          return canceler;
        };
      }
      function join3(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run3(runTick);
          }
          return canceler;
        };
      }
      return {
        kill: kill2,
        join: join3,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run3(runTick);
              });
            } else {
              run3(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill2(error4, par2, cb2) {
        var step4 = par2;
        var head5 = null;
        var tail2 = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop: while (true) {
          tmp = null;
          switch (step4.tag) {
            case FORKED:
              if (step4._3 === EMPTY) {
                tmp = fibers[step4._1];
                kills2[count++] = tmp.kill(error4, function(result) {
                  return function() {
                    count--;
                    if (count === 0) {
                      cb2(result)();
                    }
                  };
                });
              }
              if (head5 === null) {
                break loop;
              }
              step4 = head5._2;
              if (tail2 === null) {
                head5 = null;
              } else {
                head5 = tail2._1;
                tail2 = tail2._2;
              }
              break;
            case MAP:
              step4 = step4._2;
              break;
            case APPLY:
            case ALT:
              if (head5) {
                tail2 = new Aff2(CONS, head5, tail2);
              }
              head5 = step4;
              step4 = step4._1;
              break;
          }
        }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join3(result, head5, tail2) {
        var fail3, step4, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail3 = result;
          step4 = null;
        } else {
          step4 = result;
          fail3 = null;
        }
        loop: while (true) {
          lhs = null;
          rhs = null;
          tmp = null;
          kid = null;
          if (interrupt !== null) {
            return;
          }
          if (head5 === null) {
            cb(fail3 || step4)();
            return;
          }
          if (head5._3 !== EMPTY) {
            return;
          }
          switch (head5.tag) {
            case MAP:
              if (fail3 === null) {
                head5._3 = util.right(head5._1(util.fromRight(step4)));
                step4 = head5._3;
              } else {
                head5._3 = fail3;
              }
              break;
            case APPLY:
              lhs = head5._1._3;
              rhs = head5._2._3;
              if (fail3) {
                head5._3 = fail3;
                tmp = true;
                kid = killId++;
                kills[kid] = kill2(early, fail3 === lhs ? head5._2 : head5._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(fail3, null, null);
                    } else {
                      join3(fail3, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              } else if (lhs === EMPTY || rhs === EMPTY) {
                return;
              } else {
                step4 = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                head5._3 = step4;
              }
              break;
            case ALT:
              lhs = head5._1._3;
              rhs = head5._2._3;
              if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                return;
              }
              if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                fail3 = step4 === lhs ? rhs : lhs;
                step4 = null;
                head5._3 = fail3;
              } else {
                head5._3 = step4;
                tmp = true;
                kid = killId++;
                kills[kid] = kill2(early, step4 === lhs ? head5._2 : head5._1, function() {
                  return function() {
                    delete kills[kid];
                    if (tmp) {
                      tmp = false;
                    } else if (tail2 === null) {
                      join3(step4, null, null);
                    } else {
                      join3(step4, tail2._1, tail2._2);
                    }
                  };
                });
                if (tmp) {
                  tmp = false;
                  return;
                }
              }
              break;
          }
          if (tail2 === null) {
            head5 = null;
          } else {
            head5 = tail2._1;
            tail2 = tail2._2;
          }
        }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join3(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run3() {
        var status = CONTINUE;
        var step4 = par;
        var head5 = null;
        var tail2 = null;
        var tmp, fid;
        loop: while (true) {
          tmp = null;
          fid = null;
          switch (status) {
            case CONTINUE:
              switch (step4.tag) {
                case MAP:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(MAP, step4._1, EMPTY, EMPTY);
                  step4 = step4._2;
                  break;
                case APPLY:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(APPLY, EMPTY, step4._2, EMPTY);
                  step4 = step4._1;
                  break;
                case ALT:
                  if (head5) {
                    tail2 = new Aff2(CONS, head5, tail2);
                  }
                  head5 = new Aff2(ALT, EMPTY, step4._2, EMPTY);
                  step4 = step4._1;
                  break;
                default:
                  fid = fiberId++;
                  status = RETURN;
                  tmp = step4;
                  step4 = new Aff2(FORKED, fid, new Aff2(CONS, head5, tail2), EMPTY);
                  tmp = Fiber(util, supervisor, tmp);
                  tmp.onComplete({
                    rethrow: false,
                    handler: resolve(step4)
                  })();
                  fibers[fid] = tmp;
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
              }
              break;
            case RETURN:
              if (head5 === null) {
                break loop;
              }
              if (head5._1 === EMPTY) {
                head5._1 = step4;
                status = CONTINUE;
                step4 = head5._2;
                head5._2 = EMPTY;
              } else {
                head5._2 = step4;
                step4 = head5;
                if (tail2 === null) {
                  head5 = null;
                } else {
                  head5 = tail2._1;
                  tail2 = tail2._2;
                }
              }
          }
        }
        root = step4;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error4, cb2) {
        interrupt = util.left(error4);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill2(error4, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler2;
            };
          });
        };
      }
      run3();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential3(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler2;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  function _catchError(aff) {
    return function(k) {
      return Aff.Catch(aff, k);
    };
  }
  function _map(f) {
    return function(aff) {
      if (aff.tag === Aff.Pure.tag) {
        return Aff.Pure(f(aff._1));
      } else {
        return Aff.Bind(aff, function(value14) {
          return Aff.Pure(f(value14));
        });
      }
    };
  }
  function _bind(aff) {
    return function(k) {
      return Aff.Bind(aff, k);
    };
  }
  function _fork(immediate) {
    return function(aff) {
      return Aff.Fork(immediate, aff);
    };
  }
  var _liftEffect = Aff.Sync;
  function _parAffMap(f) {
    return function(aff) {
      return Aff.ParMap(f, aff);
    };
  }
  function _parAffApply(aff1) {
    return function(aff2) {
      return Aff.ParApply(aff1, aff2);
    };
  }
  var makeAff = Aff.Async;
  function generalBracket(acquire) {
    return function(options2) {
      return function(k) {
        return Aff.Bracket(acquire, options2, k);
      };
    };
  }
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _sequential = Aff.Seq;

  // output/Effect.Exception/foreign.js
  function error(msg) {
    return new Error(msg);
  }
  function throwException(e) {
    return function() {
      throw e;
    };
  }

  // output/Effect.Exception/index.js
  var $$throw = function($4) {
    return throwException(error($4));
  };

  // output/Control.Monad.Error.Class/index.js
  var throwError = function(dict) {
    return dict.throwError;
  };
  var catchError = function(dict) {
    return dict.catchError;
  };
  var $$try = function(dictMonadError) {
    var catchError1 = catchError(dictMonadError);
    var Monad0 = dictMonadError.MonadThrow0().Monad0();
    var map30 = map(Monad0.Bind1().Apply0().Functor0());
    var pure15 = pure(Monad0.Applicative0());
    return function(a2) {
      return catchError1(map30(Right.create)(a2))(function($52) {
        return pure15(Left.create($52));
      });
    };
  };

  // output/Control.Monad.Trans.Class/index.js
  var lift = function(dict) {
    return dict.lift;
  };

  // output/Effect.Class/index.js
  var monadEffectEffect = {
    liftEffect: /* @__PURE__ */ identity(categoryFn),
    Monad0: function() {
      return monadEffect;
    }
  };
  var liftEffect = function(dict) {
    return dict.liftEffect;
  };

  // output/Control.Monad.Except.Trans/index.js
  var map6 = /* @__PURE__ */ map(functorEither);
  var ExceptT = function(x) {
    return x;
  };
  var runExceptT = function(v) {
    return v;
  };
  var mapExceptT = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var functorExceptT = function(dictFunctor) {
    var map111 = map(dictFunctor);
    return {
      map: function(f) {
        return mapExceptT(map111(map6(f)));
      }
    };
  };
  var monadExceptT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeExceptT(dictMonad);
      },
      Bind1: function() {
        return bindExceptT(dictMonad);
      }
    };
  };
  var bindExceptT = function(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    var pure15 = pure(dictMonad.Applicative0());
    return {
      bind: function(v) {
        return function(k) {
          return bind10(v)(either(function($193) {
            return pure15(Left.create($193));
          })(function(a2) {
            var v1 = k(a2);
            return v1;
          }));
        };
      },
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var applyExceptT = function(dictMonad) {
    var functorExceptT1 = functorExceptT(dictMonad.Bind1().Apply0().Functor0());
    return {
      apply: ap(monadExceptT(dictMonad)),
      Functor0: function() {
        return functorExceptT1;
      }
    };
  };
  var applicativeExceptT = function(dictMonad) {
    return {
      pure: function() {
        var $194 = pure(dictMonad.Applicative0());
        return function($195) {
          return ExceptT($194(Right.create($195)));
        };
      }(),
      Apply0: function() {
        return applyExceptT(dictMonad);
      }
    };
  };
  var monadThrowExceptT = function(dictMonad) {
    var monadExceptT1 = monadExceptT(dictMonad);
    return {
      throwError: function() {
        var $204 = pure(dictMonad.Applicative0());
        return function($205) {
          return ExceptT($204(Left.create($205)));
        };
      }(),
      Monad0: function() {
        return monadExceptT1;
      }
    };
  };

  // output/Control.Parallel.Class/index.js
  var sequential = function(dict) {
    return dict.sequential;
  };
  var parallel = function(dict) {
    return dict.parallel;
  };

  // output/Control.Parallel/index.js
  var identity5 = /* @__PURE__ */ identity(categoryFn);
  var parTraverse_ = function(dictParallel) {
    var sequential3 = sequential(dictParallel);
    var parallel4 = parallel(dictParallel);
    return function(dictApplicative) {
      var traverse_7 = traverse_(dictApplicative);
      return function(dictFoldable) {
        var traverse_14 = traverse_7(dictFoldable);
        return function(f) {
          var $51 = traverse_14(function($53) {
            return parallel4(f($53));
          });
          return function($52) {
            return sequential3($51($52));
          };
        };
      };
    };
  };
  var parSequence_ = function(dictParallel) {
    var parTraverse_1 = parTraverse_(dictParallel);
    return function(dictApplicative) {
      var parTraverse_2 = parTraverse_1(dictApplicative);
      return function(dictFoldable) {
        return parTraverse_2(dictFoldable)(identity5);
      };
    };
  };

  // output/Effect.Unsafe/foreign.js
  var unsafePerformEffect = function(f) {
    return f();
  };

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f) {
    return f();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Effect.Aff/index.js
  var $runtime_lazy3 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var pure3 = /* @__PURE__ */ pure(applicativeEffect);
  var $$void4 = /* @__PURE__ */ $$void(functorEffect);
  var map7 = /* @__PURE__ */ map(functorEffect);
  var Canceler = function(x) {
    return x;
  };
  var suspendAff = /* @__PURE__ */ _fork(false);
  var functorParAff = {
    map: _parAffMap
  };
  var functorAff = {
    map: _map
  };
  var map1 = /* @__PURE__ */ map(functorAff);
  var forkAff = /* @__PURE__ */ _fork(true);
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v) {
      if (v instanceof Right) {
        return v.value0;
      }
      ;
      if (v instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v.constructor.name]);
    };
    var unsafeFromLeft = function(v) {
      if (v instanceof Left) {
        return v.value0;
      }
      ;
      if (v instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v.constructor.name]);
    };
    var isLeft = function(v) {
      if (v instanceof Left) {
        return true;
      }
      ;
      if (v instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do2() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var bracket = function(acquire) {
    return function(completed) {
      return generalBracket(acquire)({
        killed: $$const(completed),
        failed: $$const(completed),
        completed: $$const(completed)
      });
    };
  };
  var applyParAff = {
    apply: _parAffApply,
    Functor0: function() {
      return functorParAff;
    }
  };
  var monadAff = {
    Applicative0: function() {
      return applicativeAff;
    },
    Bind1: function() {
      return bindAff;
    }
  };
  var bindAff = {
    bind: _bind,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var applicativeAff = {
    pure: _pure,
    Apply0: function() {
      return $lazy_applyAff(0);
    }
  };
  var $lazy_applyAff = /* @__PURE__ */ $runtime_lazy3("applyAff", "Effect.Aff", function() {
    return {
      apply: ap(monadAff),
      Functor0: function() {
        return functorAff;
      }
    };
  });
  var applyAff = /* @__PURE__ */ $lazy_applyAff(73);
  var pure22 = /* @__PURE__ */ pure(applicativeAff);
  var bind1 = /* @__PURE__ */ bind(bindAff);
  var bindFlipped4 = /* @__PURE__ */ bindFlipped(bindAff);
  var $$finally = function(fin) {
    return function(a2) {
      return bracket(pure22(unit))($$const(fin))($$const(a2));
    };
  };
  var parallelAff = {
    parallel: unsafeCoerce2,
    sequential: _sequential,
    Apply0: function() {
      return applyAff;
    },
    Apply1: function() {
      return applyParAff;
    }
  };
  var parallel2 = /* @__PURE__ */ parallel(parallelAff);
  var applicativeParAff = {
    pure: function($76) {
      return parallel2(pure22($76));
    },
    Apply0: function() {
      return applyParAff;
    }
  };
  var monadEffectAff = {
    liftEffect: _liftEffect,
    Monad0: function() {
      return monadAff;
    }
  };
  var liftEffect2 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var effectCanceler = function($77) {
    return Canceler($$const(liftEffect2($77)));
  };
  var joinFiber = function(v) {
    return makeAff(function(k) {
      return map7(effectCanceler)(v.join(k));
    });
  };
  var functorFiber = {
    map: function(f) {
      return function(t) {
        return unsafePerformEffect(makeFiber(map1(f)(joinFiber(t))));
      };
    }
  };
  var killFiber = function(e) {
    return function(v) {
      return bind1(liftEffect2(v.isSuspended))(function(suspended) {
        if (suspended) {
          return liftEffect2($$void4(v.kill(e, $$const(pure3(unit)))));
        }
        ;
        return makeAff(function(k) {
          return map7(effectCanceler)(v.kill(e, k));
        });
      });
    };
  };
  var monadThrowAff = {
    throwError: _throwError,
    Monad0: function() {
      return monadAff;
    }
  };
  var monadErrorAff = {
    catchError: _catchError,
    MonadThrow0: function() {
      return monadThrowAff;
    }
  };
  var $$try2 = /* @__PURE__ */ $$try(monadErrorAff);
  var runAff = function(k) {
    return function(aff) {
      return launchAff(bindFlipped4(function($83) {
        return liftEffect2(k($83));
      })($$try2(aff)));
    };
  };
  var runAff_ = function(k) {
    return function(aff) {
      return $$void4(runAff(k)(aff));
    };
  };
  var monadRecAff = {
    tailRecM: function(k) {
      var go2 = function(a2) {
        return bind1(k(a2))(function(res) {
          if (res instanceof Done) {
            return pure22(res.value0);
          }
          ;
          if (res instanceof Loop) {
            return go2(res.value0);
          }
          ;
          throw new Error("Failed pattern match at Effect.Aff (line 104, column 7 - line 106, column 23): " + [res.constructor.name]);
        });
      };
      return go2;
    },
    Monad0: function() {
      return monadAff;
    }
  };
  var nonCanceler = /* @__PURE__ */ $$const(/* @__PURE__ */ pure22(unit));

  // output/Effect.Console/foreign.js
  var log = function(s) {
    return function() {
      console.log(s);
    };
  };
  var warn = function(s) {
    return function() {
      console.warn(s);
    };
  };

  // output/Effect.Class.Console/index.js
  var log2 = function(dictMonadEffect) {
    var $67 = liftEffect(dictMonadEffect);
    return function($68) {
      return $67(log($68));
    };
  };

  // output/Web.DOM.ParentNode/foreign.js
  var getEffProp = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
      };
    };
  };
  var children = getEffProp("children");
  var _firstElementChild = getEffProp("firstElementChild");
  var _lastElementChild = getEffProp("lastElementChild");
  var childElementCount = getEffProp("childElementCount");
  function _querySelector(selector) {
    return function(node) {
      return function() {
        return node.querySelector(selector);
      };
    };
  }

  // output/Data.Nullable/foreign.js
  var nullImpl = null;
  function nullable(a2, r, f) {
    return a2 == null ? r : f(a2);
  }
  function notNull(x) {
    return x;
  }

  // output/Data.Nullable/index.js
  var toNullable = /* @__PURE__ */ maybe(nullImpl)(notNull);
  var toMaybe = function(n) {
    return nullable(n, Nothing.value, Just.create);
  };

  // output/Web.DOM.ParentNode/index.js
  var map8 = /* @__PURE__ */ map(functorEffect);
  var querySelector = function(qs) {
    var $2 = map8(toMaybe);
    var $3 = _querySelector(qs);
    return function($4) {
      return $2($3($4));
    };
  };

  // output/Web.Event.EventTarget/foreign.js
  function eventListener(fn) {
    return function() {
      return function(event) {
        return fn(event)();
      };
    };
  }
  function addEventListener(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target6) {
          return function() {
            return target6.addEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }
  function removeEventListener(type) {
    return function(listener) {
      return function(useCapture) {
        return function(target6) {
          return function() {
            return target6.removeEventListener(type, listener, useCapture);
          };
        };
      };
    };
  }

  // output/Web.HTML/foreign.js
  var windowImpl = function() {
    return window;
  };

  // output/Web.Internal.FFI/foreign.js
  function _unsafeReadProtoTagged(nothing, just, name15, value14) {
    if (typeof window !== "undefined") {
      var ty = window[name15];
      if (ty != null && value14 instanceof ty) {
        return just(value14);
      }
    }
    var obj = value14;
    while (obj != null) {
      var proto = Object.getPrototypeOf(obj);
      var constructorName = proto.constructor.name;
      if (constructorName === name15) {
        return just(value14);
      } else if (constructorName === "Object") {
        return nothing;
      }
      obj = proto;
    }
    return nothing;
  }

  // output/Web.Internal.FFI/index.js
  var unsafeReadProtoTagged = function(name15) {
    return function(value14) {
      return _unsafeReadProtoTagged(Nothing.value, Just.create, name15, value14);
    };
  };

  // output/Web.HTML.HTMLDocument/foreign.js
  function _readyState(doc) {
    return doc.readyState;
  }

  // output/Web.HTML.HTMLDocument.ReadyState/index.js
  var Loading = /* @__PURE__ */ function() {
    function Loading2() {
    }
    ;
    Loading2.value = new Loading2();
    return Loading2;
  }();
  var Interactive = /* @__PURE__ */ function() {
    function Interactive2() {
    }
    ;
    Interactive2.value = new Interactive2();
    return Interactive2;
  }();
  var Complete = /* @__PURE__ */ function() {
    function Complete2() {
    }
    ;
    Complete2.value = new Complete2();
    return Complete2;
  }();
  var parse = function(v) {
    if (v === "loading") {
      return new Just(Loading.value);
    }
    ;
    if (v === "interactive") {
      return new Just(Interactive.value);
    }
    ;
    if (v === "complete") {
      return new Just(Complete.value);
    }
    ;
    return Nothing.value;
  };

  // output/Web.HTML.HTMLDocument/index.js
  var map9 = /* @__PURE__ */ map(functorEffect);
  var toParentNode = unsafeCoerce2;
  var toDocument = unsafeCoerce2;
  var readyState = function(doc) {
    return map9(function() {
      var $4 = fromMaybe(Loading.value);
      return function($5) {
        return $4(parse($5));
      };
    }())(function() {
      return _readyState(doc);
    });
  };

  // output/Web.HTML.HTMLElement/foreign.js
  function _read(nothing, just, value14) {
    var tag = Object.prototype.toString.call(value14);
    if (tag.indexOf("[object HTML") === 0 && tag.indexOf("Element]") === tag.length - 8) {
      return just(value14);
    } else {
      return nothing;
    }
  }

  // output/Web.HTML.HTMLElement/index.js
  var toNode = unsafeCoerce2;
  var fromElement = function(x) {
    return _read(Nothing.value, Just.create, x);
  };

  // output/Data.Enum/foreign.js
  function toCharCode(c) {
    return c.charCodeAt(0);
  }
  function fromCharCode(c) {
    return String.fromCharCode(c);
  }

  // output/Data.Enum/index.js
  var bottom1 = /* @__PURE__ */ bottom(boundedChar);
  var top1 = /* @__PURE__ */ top(boundedChar);
  var toEnum = function(dict) {
    return dict.toEnum;
  };
  var fromEnum = function(dict) {
    return dict.fromEnum;
  };
  var toEnumWithDefaults = function(dictBoundedEnum) {
    var toEnum1 = toEnum(dictBoundedEnum);
    var fromEnum1 = fromEnum(dictBoundedEnum);
    var bottom2 = bottom(dictBoundedEnum.Bounded0());
    return function(low2) {
      return function(high2) {
        return function(x) {
          var v = toEnum1(x);
          if (v instanceof Just) {
            return v.value0;
          }
          ;
          if (v instanceof Nothing) {
            var $140 = x < fromEnum1(bottom2);
            if ($140) {
              return low2;
            }
            ;
            return high2;
          }
          ;
          throw new Error("Failed pattern match at Data.Enum (line 158, column 33 - line 160, column 62): " + [v.constructor.name]);
        };
      };
    };
  };
  var defaultSucc = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a2) {
        return toEnum$prime(fromEnum$prime(a2) + 1 | 0);
      };
    };
  };
  var defaultPred = function(toEnum$prime) {
    return function(fromEnum$prime) {
      return function(a2) {
        return toEnum$prime(fromEnum$prime(a2) - 1 | 0);
      };
    };
  };
  var charToEnum = function(v) {
    if (v >= toCharCode(bottom1) && v <= toCharCode(top1)) {
      return new Just(fromCharCode(v));
    }
    ;
    return Nothing.value;
  };
  var enumChar = {
    succ: /* @__PURE__ */ defaultSucc(charToEnum)(toCharCode),
    pred: /* @__PURE__ */ defaultPred(charToEnum)(toCharCode),
    Ord0: function() {
      return ordChar;
    }
  };
  var boundedEnumChar = /* @__PURE__ */ function() {
    return {
      cardinality: toCharCode(top1) - toCharCode(bottom1) | 0,
      toEnum: charToEnum,
      fromEnum: toCharCode,
      Bounded0: function() {
        return boundedChar;
      },
      Enum1: function() {
        return enumChar;
      }
    };
  }();

  // output/Web.HTML.HTMLSelectElement/foreign.js
  function value10(select5) {
    return function() {
      return select5.value;
    };
  }

  // output/Web.HTML.HTMLSelectElement/index.js
  var fromEventTarget = /* @__PURE__ */ unsafeReadProtoTagged("HTMLSelectElement");

  // output/Web.HTML.HTMLTextAreaElement/foreign.js
  function value11(textarea2) {
    return function() {
      return textarea2.value;
    };
  }

  // output/Web.HTML.HTMLTextAreaElement/index.js
  var fromEventTarget2 = /* @__PURE__ */ unsafeReadProtoTagged("HTMLTextAreaElement");

  // output/Web.HTML.Location/foreign.js
  function search(location2) {
    return function() {
      return location2.search;
    };
  }

  // output/Web.HTML.Window/foreign.js
  function document2(window2) {
    return function() {
      return window2.document;
    };
  }
  function location(window2) {
    return function() {
      return window2.location;
    };
  }
  function _open(url) {
    return function(name15) {
      return function(features) {
        return function(window2) {
          return function() {
            return window2.open(url, name15, features);
          };
        };
      };
    };
  }

  // output/Web.HTML.Window/index.js
  var map10 = /* @__PURE__ */ map(functorEffect);
  var toEventTarget = unsafeCoerce2;
  var open = function(url$prime) {
    return function(name15) {
      return function(features) {
        return function(window2) {
          return map10(toMaybe)(_open(url$prime)(name15)(features)(window2));
        };
      };
    };
  };

  // output/Web.HTML.Event.EventTypes/index.js
  var domcontentloaded = "DOMContentLoaded";
  var change = "change";

  // output/Halogen.Aff.Util/index.js
  var bind3 = /* @__PURE__ */ bind(bindAff);
  var liftEffect3 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var bindFlipped5 = /* @__PURE__ */ bindFlipped(bindEffect);
  var composeKleisliFlipped2 = /* @__PURE__ */ composeKleisliFlipped(bindEffect);
  var pure4 = /* @__PURE__ */ pure(applicativeAff);
  var bindFlipped1 = /* @__PURE__ */ bindFlipped(bindMaybe);
  var pure1 = /* @__PURE__ */ pure(applicativeEffect);
  var map11 = /* @__PURE__ */ map(functorEffect);
  var discard3 = /* @__PURE__ */ discard(discardUnit);
  var throwError2 = /* @__PURE__ */ throwError(monadThrowAff);
  var selectElement = function(query2) {
    return bind3(liftEffect3(bindFlipped5(composeKleisliFlipped2(function() {
      var $16 = querySelector(query2);
      return function($17) {
        return $16(toParentNode($17));
      };
    }())(document2))(windowImpl)))(function(mel) {
      return pure4(bindFlipped1(fromElement)(mel));
    });
  };
  var runHalogenAff = /* @__PURE__ */ runAff_(/* @__PURE__ */ either(throwException)(/* @__PURE__ */ $$const(/* @__PURE__ */ pure1(unit))));
  var awaitLoad = /* @__PURE__ */ makeAff(function(callback) {
    return function __do2() {
      var rs = bindFlipped5(readyState)(bindFlipped5(document2)(windowImpl))();
      if (rs instanceof Loading) {
        var et = map11(toEventTarget)(windowImpl)();
        var listener = eventListener(function(v) {
          return callback(new Right(unit));
        })();
        addEventListener(domcontentloaded)(listener)(false)(et)();
        return effectCanceler(removeEventListener(domcontentloaded)(listener)(false)(et));
      }
      ;
      callback(new Right(unit))();
      return nonCanceler;
    };
  });
  var awaitBody = /* @__PURE__ */ discard3(bindAff)(awaitLoad)(function() {
    return bind3(selectElement("body"))(function(body2) {
      return maybe(throwError2(error("Could not find body")))(pure4)(body2);
    });
  });

  // output/Data.Exists/index.js
  var runExists = unsafeCoerce2;
  var mkExists = unsafeCoerce2;

  // output/Data.Coyoneda/index.js
  var CoyonedaF = /* @__PURE__ */ function() {
    function CoyonedaF2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CoyonedaF2.create = function(value0) {
      return function(value1) {
        return new CoyonedaF2(value0, value1);
      };
    };
    return CoyonedaF2;
  }();
  var unCoyoneda = function(f) {
    return function(v) {
      return runExists(function(v1) {
        return f(v1.value0)(v1.value1);
      })(v);
    };
  };
  var coyoneda = function(k) {
    return function(fi) {
      return mkExists(new CoyonedaF(k, fi));
    };
  };
  var functorCoyoneda = {
    map: function(f) {
      return function(v) {
        return runExists(function(v1) {
          return coyoneda(function($180) {
            return f(v1.value0($180));
          })(v1.value1);
        })(v);
      };
    }
  };
  var liftCoyoneda = /* @__PURE__ */ coyoneda(/* @__PURE__ */ identity(categoryFn));

  // output/Data.NonEmpty/index.js
  var NonEmpty = /* @__PURE__ */ function() {
    function NonEmpty2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    NonEmpty2.create = function(value0) {
      return function(value1) {
        return new NonEmpty2(value0, value1);
      };
    };
    return NonEmpty2;
  }();
  var singleton2 = function(dictPlus) {
    var empty7 = empty(dictPlus);
    return function(a2) {
      return new NonEmpty(a2, empty7);
    };
  };

  // output/Data.List.Types/index.js
  var identity6 = /* @__PURE__ */ identity(categoryFn);
  var Nil = /* @__PURE__ */ function() {
    function Nil3() {
    }
    ;
    Nil3.value = new Nil3();
    return Nil3;
  }();
  var Cons = /* @__PURE__ */ function() {
    function Cons3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Cons3.create = function(value0) {
      return function(value1) {
        return new Cons3(value0, value1);
      };
    };
    return Cons3;
  }();
  var NonEmptyList = function(x) {
    return x;
  };
  var listMap = function(f) {
    var chunkedRevMap = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Cons && (v1.value1 instanceof Cons && v1.value1.value1 instanceof Cons)) {
            $tco_var_v = new Cons(v1, v);
            $copy_v1 = v1.value1.value1.value1;
            return;
          }
          ;
          var unrolledMap = function(v2) {
            if (v2 instanceof Cons && (v2.value1 instanceof Cons && v2.value1.value1 instanceof Nil)) {
              return new Cons(f(v2.value0), new Cons(f(v2.value1.value0), Nil.value));
            }
            ;
            if (v2 instanceof Cons && v2.value1 instanceof Nil) {
              return new Cons(f(v2.value0), Nil.value);
            }
            ;
            return Nil.value;
          };
          var reverseUnrolledMap = function($copy_v2) {
            return function($copy_v3) {
              var $tco_var_v2 = $copy_v2;
              var $tco_done1 = false;
              var $tco_result2;
              function $tco_loop2(v2, v3) {
                if (v2 instanceof Cons && (v2.value0 instanceof Cons && (v2.value0.value1 instanceof Cons && v2.value0.value1.value1 instanceof Cons))) {
                  $tco_var_v2 = v2.value1;
                  $copy_v3 = new Cons(f(v2.value0.value0), new Cons(f(v2.value0.value1.value0), new Cons(f(v2.value0.value1.value1.value0), v3)));
                  return;
                }
                ;
                $tco_done1 = true;
                return v3;
              }
              ;
              while (!$tco_done1) {
                $tco_result2 = $tco_loop2($tco_var_v2, $copy_v3);
              }
              ;
              return $tco_result2;
            };
          };
          $tco_done = true;
          return reverseUnrolledMap(v)(unrolledMap(v1));
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return chunkedRevMap(Nil.value);
  };
  var functorList = {
    map: listMap
  };
  var foldableList = {
    foldr: function(f) {
      return function(b2) {
        var rev3 = function() {
          var go2 = function($copy_v) {
            return function($copy_v1) {
              var $tco_var_v = $copy_v;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1) {
                if (v1 instanceof Nil) {
                  $tco_done = true;
                  return v;
                }
                ;
                if (v1 instanceof Cons) {
                  $tco_var_v = new Cons(v1.value0, v);
                  $copy_v1 = v1.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.List.Types (line 107, column 7 - line 107, column 23): " + [v.constructor.name, v1.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $copy_v1);
              }
              ;
              return $tco_result;
            };
          };
          return go2(Nil.value);
        }();
        var $284 = foldl(foldableList)(flip(f))(b2);
        return function($285) {
          return $284(rev3($285));
        };
      };
    },
    foldl: function(f) {
      var go2 = function($copy_b) {
        return function($copy_v) {
          var $tco_var_b = $copy_b;
          var $tco_done1 = false;
          var $tco_result;
          function $tco_loop(b2, v) {
            if (v instanceof Nil) {
              $tco_done1 = true;
              return b2;
            }
            ;
            if (v instanceof Cons) {
              $tco_var_b = f(b2)(v.value0);
              $copy_v = v.value1;
              return;
            }
            ;
            throw new Error("Failed pattern match at Data.List.Types (line 111, column 12 - line 113, column 30): " + [v.constructor.name]);
          }
          ;
          while (!$tco_done1) {
            $tco_result = $tco_loop($tco_var_b, $copy_v);
          }
          ;
          return $tco_result;
        };
      };
      return go2;
    },
    foldMap: function(dictMonoid) {
      var append22 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f) {
        return foldl(foldableList)(function(acc) {
          var $286 = append22(acc);
          return function($287) {
            return $286(f($287));
          };
        })(mempty2);
      };
    }
  };
  var foldl2 = /* @__PURE__ */ foldl(foldableList);
  var foldr2 = /* @__PURE__ */ foldr(foldableList);
  var semigroupList = {
    append: function(xs) {
      return function(ys) {
        return foldr2(Cons.create)(ys)(xs);
      };
    }
  };
  var append1 = /* @__PURE__ */ append(semigroupList);
  var traversableList = {
    traverse: function(dictApplicative) {
      var Apply0 = dictApplicative.Apply0();
      var map111 = map(Apply0.Functor0());
      var lift22 = lift2(Apply0);
      var pure15 = pure(dictApplicative);
      return function(f) {
        var $301 = map111(foldl2(flip(Cons.create))(Nil.value));
        var $302 = foldl2(function(acc) {
          var $304 = lift22(flip(Cons.create))(acc);
          return function($305) {
            return $304(f($305));
          };
        })(pure15(Nil.value));
        return function($303) {
          return $301($302($303));
        };
      };
    },
    sequence: function(dictApplicative) {
      return traverse(traversableList)(dictApplicative)(identity6);
    },
    Functor0: function() {
      return functorList;
    },
    Foldable1: function() {
      return foldableList;
    }
  };
  var altList = {
    alt: append1,
    Functor0: function() {
      return functorList;
    }
  };
  var plusList = /* @__PURE__ */ function() {
    return {
      empty: Nil.value,
      Alt0: function() {
        return altList;
      }
    };
  }();

  // output/Data.Map.Internal/index.js
  var $runtime_lazy4 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var map12 = /* @__PURE__ */ map(functorMaybe);
  var Leaf = /* @__PURE__ */ function() {
    function Leaf2() {
    }
    ;
    Leaf2.value = new Leaf2();
    return Leaf2;
  }();
  var Node = /* @__PURE__ */ function() {
    function Node2(value0, value1, value22, value32, value42, value52) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
      this.value4 = value42;
      this.value5 = value52;
    }
    ;
    Node2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return function(value42) {
              return function(value52) {
                return new Node2(value0, value1, value22, value32, value42, value52);
              };
            };
          };
        };
      };
    };
    return Node2;
  }();
  var Split = /* @__PURE__ */ function() {
    function Split2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Split2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Split2(value0, value1, value22);
        };
      };
    };
    return Split2;
  }();
  var SplitLast = /* @__PURE__ */ function() {
    function SplitLast2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    SplitLast2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new SplitLast2(value0, value1, value22);
        };
      };
    };
    return SplitLast2;
  }();
  var unsafeNode = function(k, v, l, r) {
    if (l instanceof Leaf) {
      if (r instanceof Leaf) {
        return new Node(1, 1, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + r.value0 | 0, 1 + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 702, column 5 - line 706, column 39): " + [r.constructor.name]);
    }
    ;
    if (l instanceof Node) {
      if (r instanceof Leaf) {
        return new Node(1 + l.value0 | 0, 1 + l.value1 | 0, k, v, l, r);
      }
      ;
      if (r instanceof Node) {
        return new Node(1 + function() {
          var $280 = l.value0 > r.value0;
          if ($280) {
            return l.value0;
          }
          ;
          return r.value0;
        }() | 0, (1 + l.value1 | 0) + r.value1 | 0, k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 708, column 5 - line 712, column 68): " + [r.constructor.name]);
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 700, column 32 - line 712, column 68): " + [l.constructor.name]);
  };
  var singleton3 = function(k) {
    return function(v) {
      return new Node(1, 1, k, v, Leaf.value, Leaf.value);
    };
  };
  var unsafeBalancedNode = /* @__PURE__ */ function() {
    var height8 = function(v) {
      if (v instanceof Leaf) {
        return 0;
      }
      ;
      if (v instanceof Node) {
        return v.value0;
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 757, column 12 - line 759, column 26): " + [v.constructor.name]);
    };
    var rotateLeft = function(k, v, l, rk, rv, rl, rr) {
      if (rl instanceof Node && rl.value0 > height8(rr)) {
        return unsafeNode(rl.value2, rl.value3, unsafeNode(k, v, l, rl.value4), unsafeNode(rk, rv, rl.value5, rr));
      }
      ;
      return unsafeNode(rk, rv, unsafeNode(k, v, l, rl), rr);
    };
    var rotateRight = function(k, v, lk, lv, ll, lr, r) {
      if (lr instanceof Node && height8(ll) <= lr.value0) {
        return unsafeNode(lr.value2, lr.value3, unsafeNode(lk, lv, ll, lr.value4), unsafeNode(k, v, lr.value5, r));
      }
      ;
      return unsafeNode(lk, lv, ll, unsafeNode(k, v, lr, r));
    };
    return function(k, v, l, r) {
      if (l instanceof Leaf) {
        if (r instanceof Leaf) {
          return singleton3(k)(v);
        }
        ;
        if (r instanceof Node && r.value0 > 1) {
          return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      if (l instanceof Node) {
        if (r instanceof Node) {
          if (r.value0 > (l.value0 + 1 | 0)) {
            return rotateLeft(k, v, l, r.value2, r.value3, r.value4, r.value5);
          }
          ;
          if (l.value0 > (r.value0 + 1 | 0)) {
            return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
          }
          ;
        }
        ;
        if (r instanceof Leaf && l.value0 > 1) {
          return rotateRight(k, v, l.value2, l.value3, l.value4, l.value5, r);
        }
        ;
        return unsafeNode(k, v, l, r);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 717, column 40 - line 738, column 34): " + [l.constructor.name]);
    };
  }();
  var $lazy_unsafeSplit = /* @__PURE__ */ $runtime_lazy4("unsafeSplit", "Data.Map.Internal", function() {
    return function(comp, k, m) {
      if (m instanceof Leaf) {
        return new Split(Nothing.value, Leaf.value, Leaf.value);
      }
      ;
      if (m instanceof Node) {
        var v = comp(k)(m.value2);
        if (v instanceof LT) {
          var v1 = $lazy_unsafeSplit(793)(comp, k, m.value4);
          return new Split(v1.value0, v1.value1, unsafeBalancedNode(m.value2, m.value3, v1.value2, m.value5));
        }
        ;
        if (v instanceof GT) {
          var v1 = $lazy_unsafeSplit(796)(comp, k, m.value5);
          return new Split(v1.value0, unsafeBalancedNode(m.value2, m.value3, m.value4, v1.value1), v1.value2);
        }
        ;
        if (v instanceof EQ) {
          return new Split(new Just(m.value3), m.value4, m.value5);
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 791, column 5 - line 799, column 30): " + [v.constructor.name]);
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 787, column 34 - line 799, column 30): " + [m.constructor.name]);
    };
  });
  var unsafeSplit = /* @__PURE__ */ $lazy_unsafeSplit(786);
  var $lazy_unsafeSplitLast = /* @__PURE__ */ $runtime_lazy4("unsafeSplitLast", "Data.Map.Internal", function() {
    return function(k, v, l, r) {
      if (r instanceof Leaf) {
        return new SplitLast(k, v, l);
      }
      ;
      if (r instanceof Node) {
        var v1 = $lazy_unsafeSplitLast(779)(r.value2, r.value3, r.value4, r.value5);
        return new SplitLast(v1.value0, v1.value1, unsafeBalancedNode(k, v, l, v1.value2));
      }
      ;
      throw new Error("Failed pattern match at Data.Map.Internal (line 776, column 37 - line 780, column 57): " + [r.constructor.name]);
    };
  });
  var unsafeSplitLast = /* @__PURE__ */ $lazy_unsafeSplitLast(775);
  var unsafeJoinNodes = function(v, v1) {
    if (v instanceof Leaf) {
      return v1;
    }
    ;
    if (v instanceof Node) {
      var v2 = unsafeSplitLast(v.value2, v.value3, v.value4, v.value5);
      return unsafeBalancedNode(v2.value0, v2.value1, v2.value2, v1);
    }
    ;
    throw new Error("Failed pattern match at Data.Map.Internal (line 764, column 25 - line 768, column 38): " + [v.constructor.name, v1.constructor.name]);
  };
  var pop = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      return function(m) {
        var v = unsafeSplit(compare3, k, m);
        return map12(function(a2) {
          return new Tuple(a2, unsafeJoinNodes(v.value1, v.value2));
        })(v.value0);
      };
    };
  };
  var lookup = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go2 = function($copy_v) {
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v) {
          if (v instanceof Leaf) {
            $tco_done = true;
            return Nothing.value;
          }
          ;
          if (v instanceof Node) {
            var v1 = compare3(k)(v.value2);
            if (v1 instanceof LT) {
              $copy_v = v.value4;
              return;
            }
            ;
            if (v1 instanceof GT) {
              $copy_v = v.value5;
              return;
            }
            ;
            if (v1 instanceof EQ) {
              $tco_done = true;
              return new Just(v.value3);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 283, column 7 - line 286, column 22): " + [v1.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 280, column 8 - line 286, column 22): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($copy_v);
        }
        ;
        return $tco_result;
      };
      return go2;
    };
  };
  var insert = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      return function(v) {
        var go2 = function(v1) {
          if (v1 instanceof Leaf) {
            return singleton3(k)(v);
          }
          ;
          if (v1 instanceof Node) {
            var v2 = compare3(k)(v1.value2);
            if (v2 instanceof LT) {
              return unsafeBalancedNode(v1.value2, v1.value3, go2(v1.value4), v1.value5);
            }
            ;
            if (v2 instanceof GT) {
              return unsafeBalancedNode(v1.value2, v1.value3, v1.value4, go2(v1.value5));
            }
            ;
            if (v2 instanceof EQ) {
              return new Node(v1.value0, v1.value1, k, v, v1.value4, v1.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 471, column 7 - line 474, column 35): " + [v2.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 468, column 8 - line 474, column 35): " + [v1.constructor.name]);
        };
        return go2;
      };
    };
  };
  var foldableMap = {
    foldr: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy4("go", "Data.Map.Internal", function() {
          return function(m$prime, z$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(172)(m$prime.value4, f(m$prime.value3)($lazy_go(172)(m$prime.value5, z$prime)));
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 169, column 26 - line 172, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go2 = $lazy_go(169);
        return function(m) {
          return go2(m, z);
        };
      };
    },
    foldl: function(f) {
      return function(z) {
        var $lazy_go = $runtime_lazy4("go", "Data.Map.Internal", function() {
          return function(z$prime, m$prime) {
            if (m$prime instanceof Leaf) {
              return z$prime;
            }
            ;
            if (m$prime instanceof Node) {
              return $lazy_go(178)(f($lazy_go(178)(z$prime, m$prime.value4))(m$prime.value3), m$prime.value5);
            }
            ;
            throw new Error("Failed pattern match at Data.Map.Internal (line 175, column 26 - line 178, column 43): " + [m$prime.constructor.name]);
          };
        });
        var go2 = $lazy_go(175);
        return function(m) {
          return go2(z, m);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      var append13 = append(dictMonoid.Semigroup0());
      return function(f) {
        var go2 = function(v) {
          if (v instanceof Leaf) {
            return mempty2;
          }
          ;
          if (v instanceof Node) {
            return append13(go2(v.value4))(append13(f(v.value3))(go2(v.value5)));
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 181, column 10 - line 184, column 28): " + [v.constructor.name]);
        };
        return go2;
      };
    }
  };
  var empty2 = /* @__PURE__ */ function() {
    return Leaf.value;
  }();
  var fromFoldable = function(dictOrd) {
    var insert13 = insert(dictOrd);
    return function(dictFoldable) {
      return foldl(dictFoldable)(function(m) {
        return function(v) {
          return insert13(v.value0)(v.value1)(m);
        };
      })(empty2);
    };
  };
  var $$delete = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(k) {
      var go2 = function(v) {
        if (v instanceof Leaf) {
          return Leaf.value;
        }
        ;
        if (v instanceof Node) {
          var v1 = compare3(k)(v.value2);
          if (v1 instanceof LT) {
            return unsafeBalancedNode(v.value2, v.value3, go2(v.value4), v.value5);
          }
          ;
          if (v1 instanceof GT) {
            return unsafeBalancedNode(v.value2, v.value3, v.value4, go2(v.value5));
          }
          ;
          if (v1 instanceof EQ) {
            return unsafeJoinNodes(v.value4, v.value5);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 498, column 7 - line 501, column 43): " + [v1.constructor.name]);
        }
        ;
        throw new Error("Failed pattern match at Data.Map.Internal (line 495, column 8 - line 501, column 43): " + [v.constructor.name]);
      };
      return go2;
    };
  };
  var alter = function(dictOrd) {
    var compare3 = compare(dictOrd);
    return function(f) {
      return function(k) {
        return function(m) {
          var v = unsafeSplit(compare3, k, m);
          var v2 = f(v.value0);
          if (v2 instanceof Nothing) {
            return unsafeJoinNodes(v.value1, v.value2);
          }
          ;
          if (v2 instanceof Just) {
            return unsafeBalancedNode(k, v2.value0, v.value1, v.value2);
          }
          ;
          throw new Error("Failed pattern match at Data.Map.Internal (line 514, column 3 - line 518, column 41): " + [v2.constructor.name]);
        };
      };
    };
  };

  // output/Halogen.Data.OrdBox/index.js
  var OrdBox = /* @__PURE__ */ function() {
    function OrdBox2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    OrdBox2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new OrdBox2(value0, value1, value22);
        };
      };
    };
    return OrdBox2;
  }();
  var mkOrdBox = function(dictOrd) {
    return OrdBox.create(eq(dictOrd.Eq0()))(compare(dictOrd));
  };
  var eqOrdBox = {
    eq: function(v) {
      return function(v1) {
        return v.value0(v.value2)(v1.value2);
      };
    }
  };
  var ordOrdBox = {
    compare: function(v) {
      return function(v1) {
        return v.value1(v.value2)(v1.value2);
      };
    },
    Eq0: function() {
      return eqOrdBox;
    }
  };

  // output/Halogen.Data.Slot/index.js
  var ordTuple2 = /* @__PURE__ */ ordTuple(ordString)(ordOrdBox);
  var pop1 = /* @__PURE__ */ pop(ordTuple2);
  var lookup1 = /* @__PURE__ */ lookup(ordTuple2);
  var insert1 = /* @__PURE__ */ insert(ordTuple2);
  var pop2 = function() {
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function(dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function(sym) {
          return function(key) {
            return function(v) {
              return pop1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
            };
          };
        };
      };
    };
  };
  var lookup2 = function() {
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function(dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function(sym) {
          return function(key) {
            return function(v) {
              return lookup1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(v);
            };
          };
        };
      };
    };
  };
  var insert2 = function() {
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return function(dictOrd) {
        var mkOrdBox2 = mkOrdBox(dictOrd);
        return function(sym) {
          return function(key) {
            return function(val) {
              return function(v) {
                return insert1(new Tuple(reflectSymbol2(sym), mkOrdBox2(key)))(val)(v);
              };
            };
          };
        };
      };
    };
  };
  var foreachSlot = function(dictApplicative) {
    var traverse_7 = traverse_(dictApplicative)(foldableMap);
    return function(v) {
      return function(k) {
        return traverse_7(function($54) {
          return k($54);
        })(v);
      };
    };
  };
  var empty3 = empty2;

  // output/Data.String.Common/foreign.js
  var joinWith = function(s) {
    return function(xs) {
      return xs.join(s);
    };
  };

  // output/Data.String.Common/index.js
  var $$null = function(s) {
    return s === "";
  };

  // output/Halogen.Query.Input/index.js
  var RefUpdate = /* @__PURE__ */ function() {
    function RefUpdate2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    RefUpdate2.create = function(value0) {
      return function(value1) {
        return new RefUpdate2(value0, value1);
      };
    };
    return RefUpdate2;
  }();
  var Action = /* @__PURE__ */ function() {
    function Action3(value0) {
      this.value0 = value0;
    }
    ;
    Action3.create = function(value0) {
      return new Action3(value0);
    };
    return Action3;
  }();

  // output/Halogen.VDom.Machine/index.js
  var Step = /* @__PURE__ */ function() {
    function Step3(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Step3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Step3(value0, value1, value22, value32);
          };
        };
      };
    };
    return Step3;
  }();
  var unStep = unsafeCoerce2;
  var step2 = function(v, a2) {
    return v.value2(v.value1, a2);
  };
  var mkStep = unsafeCoerce2;
  var halt = function(v) {
    return v.value3(v.value1);
  };
  var extract2 = /* @__PURE__ */ unStep(function(v) {
    return v.value0;
  });

  // output/Halogen.VDom.Types/index.js
  var map13 = /* @__PURE__ */ map(functorArray);
  var map14 = /* @__PURE__ */ map(functorTuple);
  var Text = /* @__PURE__ */ function() {
    function Text2(value0) {
      this.value0 = value0;
    }
    ;
    Text2.create = function(value0) {
      return new Text2(value0);
    };
    return Text2;
  }();
  var Elem = /* @__PURE__ */ function() {
    function Elem2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Elem2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Elem2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Elem2;
  }();
  var Keyed = /* @__PURE__ */ function() {
    function Keyed2(value0, value1, value22, value32) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
      this.value3 = value32;
    }
    ;
    Keyed2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return function(value32) {
            return new Keyed2(value0, value1, value22, value32);
          };
        };
      };
    };
    return Keyed2;
  }();
  var Widget = /* @__PURE__ */ function() {
    function Widget2(value0) {
      this.value0 = value0;
    }
    ;
    Widget2.create = function(value0) {
      return new Widget2(value0);
    };
    return Widget2;
  }();
  var Grafted = /* @__PURE__ */ function() {
    function Grafted2(value0) {
      this.value0 = value0;
    }
    ;
    Grafted2.create = function(value0) {
      return new Grafted2(value0);
    };
    return Grafted2;
  }();
  var Graft = /* @__PURE__ */ function() {
    function Graft2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Graft2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Graft2(value0, value1, value22);
        };
      };
    };
    return Graft2;
  }();
  var unGraft = function(f) {
    return function($61) {
      return f($61);
    };
  };
  var graft = unsafeCoerce2;
  var bifunctorGraft = {
    bimap: function(f) {
      return function(g) {
        return unGraft(function(v) {
          return graft(new Graft(function($63) {
            return f(v.value0($63));
          }, function($64) {
            return g(v.value1($64));
          }, v.value2));
        });
      };
    }
  };
  var bimap2 = /* @__PURE__ */ bimap(bifunctorGraft);
  var runGraft = /* @__PURE__ */ unGraft(function(v) {
    var go2 = function(v2) {
      if (v2 instanceof Text) {
        return new Text(v2.value0);
      }
      ;
      if (v2 instanceof Elem) {
        return new Elem(v2.value0, v2.value1, v.value0(v2.value2), map13(go2)(v2.value3));
      }
      ;
      if (v2 instanceof Keyed) {
        return new Keyed(v2.value0, v2.value1, v.value0(v2.value2), map13(map14(go2))(v2.value3));
      }
      ;
      if (v2 instanceof Widget) {
        return new Widget(v.value1(v2.value0));
      }
      ;
      if (v2 instanceof Grafted) {
        return new Grafted(bimap2(v.value0)(v.value1)(v2.value0));
      }
      ;
      throw new Error("Failed pattern match at Halogen.VDom.Types (line 86, column 7 - line 86, column 27): " + [v2.constructor.name]);
    };
    return go2(v.value2);
  });

  // output/Halogen.VDom.Util/foreign.js
  function unsafeGetAny(key, obj) {
    return obj[key];
  }
  function unsafeHasAny(key, obj) {
    return obj.hasOwnProperty(key);
  }
  function unsafeSetAny(key, val, obj) {
    obj[key] = val;
  }
  function forE2(a2, f) {
    var b2 = [];
    for (var i2 = 0; i2 < a2.length; i2++) {
      b2.push(f(i2, a2[i2]));
    }
    return b2;
  }
  function forEachE(a2, f) {
    for (var i2 = 0; i2 < a2.length; i2++) {
      f(a2[i2]);
    }
  }
  function forInE(o, f) {
    var ks = Object.keys(o);
    for (var i2 = 0; i2 < ks.length; i2++) {
      var k = ks[i2];
      f(k, o[k]);
    }
  }
  function diffWithIxE(a1, a2, f1, f2, f3) {
    var a3 = [];
    var l1 = a1.length;
    var l2 = a2.length;
    var i2 = 0;
    while (1) {
      if (i2 < l1) {
        if (i2 < l2) {
          a3.push(f1(i2, a1[i2], a2[i2]));
        } else {
          f2(i2, a1[i2]);
        }
      } else if (i2 < l2) {
        a3.push(f3(i2, a2[i2]));
      } else {
        break;
      }
      i2++;
    }
    return a3;
  }
  function strMapWithIxE(as, fk, f) {
    var o = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      o[k] = f(k, i2, a2);
    }
    return o;
  }
  function diffWithKeyAndIxE(o1, as, fk, f1, f2, f3) {
    var o2 = {};
    for (var i2 = 0; i2 < as.length; i2++) {
      var a2 = as[i2];
      var k = fk(a2);
      if (o1.hasOwnProperty(k)) {
        o2[k] = f1(k, i2, o1[k], a2);
      } else {
        o2[k] = f3(k, i2, a2);
      }
    }
    for (var k in o1) {
      if (k in o2) {
        continue;
      }
      f2(k, o1[k]);
    }
    return o2;
  }
  function refEq2(a2, b2) {
    return a2 === b2;
  }
  function createTextNode(s, doc) {
    return doc.createTextNode(s);
  }
  function setTextContent(s, n) {
    n.textContent = s;
  }
  function createElement(ns, name15, doc) {
    if (ns != null) {
      return doc.createElementNS(ns, name15);
    } else {
      return doc.createElement(name15);
    }
  }
  function insertChildIx(i2, a2, b2) {
    var n = b2.childNodes.item(i2) || null;
    if (n !== a2) {
      b2.insertBefore(a2, n);
    }
  }
  function removeChild(a2, b2) {
    if (b2 && a2.parentNode === b2) {
      b2.removeChild(a2);
    }
  }
  function parentNode(a2) {
    return a2.parentNode;
  }
  function setAttribute(ns, attr3, val, el) {
    if (ns != null) {
      el.setAttributeNS(ns, attr3, val);
    } else {
      el.setAttribute(attr3, val);
    }
  }
  function removeAttribute(ns, attr3, el) {
    if (ns != null) {
      el.removeAttributeNS(ns, attr3);
    } else {
      el.removeAttribute(attr3);
    }
  }
  function hasAttribute(ns, attr3, el) {
    if (ns != null) {
      return el.hasAttributeNS(ns, attr3);
    } else {
      return el.hasAttribute(attr3);
    }
  }
  function addEventListener2(ev, listener, el) {
    el.addEventListener(ev, listener, false);
  }
  function removeEventListener2(ev, listener, el) {
    el.removeEventListener(ev, listener, false);
  }
  var jsUndefined = void 0;

  // output/Foreign.Object.ST/foreign.js
  var newImpl = function() {
    return {};
  };

  // output/Halogen.VDom.Util/index.js
  var unsafeLookup = unsafeGetAny;
  var unsafeFreeze2 = unsafeCoerce2;
  var pokeMutMap = unsafeSetAny;
  var newMutMap = newImpl;

  // output/Web.DOM.Element/foreign.js
  var getProp = function(name15) {
    return function(doctype) {
      return doctype[name15];
    };
  };
  var _namespaceURI = getProp("namespaceURI");
  var _prefix = getProp("prefix");
  var localName = getProp("localName");
  var tagName = getProp("tagName");

  // output/Web.DOM.Element/index.js
  var toNode2 = unsafeCoerce2;

  // output/Halogen.VDom.DOM/index.js
  var $runtime_lazy5 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var haltWidget = function(v) {
    return halt(v.widget);
  };
  var $lazy_patchWidget = /* @__PURE__ */ $runtime_lazy5("patchWidget", "Halogen.VDom.DOM", function() {
    return function(state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchWidget(291)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Widget) {
        var res = step2(state3.widget, vdom.value0);
        var res$prime = unStep(function(v) {
          return mkStep(new Step(v.value0, {
            build: state3.build,
            widget: res
          }, $lazy_patchWidget(296), haltWidget));
        })(res);
        return res$prime;
      }
      ;
      haltWidget(state3);
      return state3.build(vdom);
    };
  });
  var patchWidget = /* @__PURE__ */ $lazy_patchWidget(286);
  var haltText = function(v) {
    var parent2 = parentNode(v.node);
    return removeChild(v.node, parent2);
  };
  var $lazy_patchText = /* @__PURE__ */ $runtime_lazy5("patchText", "Halogen.VDom.DOM", function() {
    return function(state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchText(82)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Text) {
        if (state3.value === vdom.value0) {
          return mkStep(new Step(state3.node, state3, $lazy_patchText(85), haltText));
        }
        ;
        if (otherwise) {
          var nextState = {
            build: state3.build,
            node: state3.node,
            value: vdom.value0
          };
          setTextContent(vdom.value0, state3.node);
          return mkStep(new Step(state3.node, nextState, $lazy_patchText(89), haltText));
        }
        ;
      }
      ;
      haltText(state3);
      return state3.build(vdom);
    };
  });
  var patchText = /* @__PURE__ */ $lazy_patchText(77);
  var haltKeyed = function(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forInE(v.children, function(v1, s) {
      return halt(s);
    });
    return halt(v.attrs);
  };
  var haltElem = function(v) {
    var parent2 = parentNode(v.node);
    removeChild(v.node, parent2);
    forEachE(v.children, halt);
    return halt(v.attrs);
  };
  var eqElemSpec = function(ns1, v, ns2, v1) {
    var $63 = v === v1;
    if ($63) {
      if (ns1 instanceof Just && (ns2 instanceof Just && ns1.value0 === ns2.value0)) {
        return true;
      }
      ;
      if (ns1 instanceof Nothing && ns2 instanceof Nothing) {
        return true;
      }
      ;
      return false;
    }
    ;
    return false;
  };
  var $lazy_patchElem = /* @__PURE__ */ $runtime_lazy5("patchElem", "Halogen.VDom.DOM", function() {
    return function(state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchElem(135)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Elem && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
        var v = length(vdom.value3);
        var v1 = length(state3.children);
        if (v1 === 0 && v === 0) {
          var attrs2 = step2(state3.attrs, vdom.value2);
          var nextState = {
            build: state3.build,
            node: state3.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state3.children
          };
          return mkStep(new Step(state3.node, nextState, $lazy_patchElem(149), haltElem));
        }
        ;
        var onThis = function(v2, s) {
          return halt(s);
        };
        var onThese = function(ix, s, v2) {
          var res = step2(s, v2);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var onThat = function(ix, v2) {
          var res = state3.build(v2);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var children2 = diffWithIxE(state3.children, vdom.value3, onThese, onThis, onThat);
        var attrs2 = step2(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2
        };
        return mkStep(new Step(state3.node, nextState, $lazy_patchElem(172), haltElem));
      }
      ;
      haltElem(state3);
      return state3.build(vdom);
    };
  });
  var patchElem = /* @__PURE__ */ $lazy_patchElem(130);
  var $lazy_patchKeyed = /* @__PURE__ */ $runtime_lazy5("patchKeyed", "Halogen.VDom.DOM", function() {
    return function(state3, vdom) {
      if (vdom instanceof Grafted) {
        return $lazy_patchKeyed(222)(state3, runGraft(vdom.value0));
      }
      ;
      if (vdom instanceof Keyed && eqElemSpec(state3.ns, state3.name, vdom.value0, vdom.value1)) {
        var v = length(vdom.value3);
        if (state3.length === 0 && v === 0) {
          var attrs2 = step2(state3.attrs, vdom.value2);
          var nextState = {
            build: state3.build,
            node: state3.node,
            attrs: attrs2,
            ns: vdom.value0,
            name: vdom.value1,
            children: state3.children,
            length: 0
          };
          return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(237), haltKeyed));
        }
        ;
        var onThis = function(v2, s) {
          return halt(s);
        };
        var onThese = function(v2, ix$prime, s, v3) {
          var res = step2(s, v3.value1);
          insertChildIx(ix$prime, extract2(res), state3.node);
          return res;
        };
        var onThat = function(v2, ix, v3) {
          var res = state3.build(v3.value1);
          insertChildIx(ix, extract2(res), state3.node);
          return res;
        };
        var children2 = diffWithKeyAndIxE(state3.children, vdom.value3, fst, onThese, onThis, onThat);
        var attrs2 = step2(state3.attrs, vdom.value2);
        var nextState = {
          build: state3.build,
          node: state3.node,
          attrs: attrs2,
          ns: vdom.value0,
          name: vdom.value1,
          children: children2,
          length: v
        };
        return mkStep(new Step(state3.node, nextState, $lazy_patchKeyed(261), haltKeyed));
      }
      ;
      haltKeyed(state3);
      return state3.build(vdom);
    };
  });
  var patchKeyed = /* @__PURE__ */ $lazy_patchKeyed(217);
  var buildWidget = function(v, build, w) {
    var res = v.buildWidget(v)(w);
    var res$prime = unStep(function(v1) {
      return mkStep(new Step(v1.value0, {
        build,
        widget: res
      }, patchWidget, haltWidget));
    })(res);
    return res$prime;
  };
  var buildText = function(v, build, s) {
    var node = createTextNode(s, v.document);
    var state3 = {
      build,
      node,
      value: s
    };
    return mkStep(new Step(node, state3, patchText, haltText));
  };
  var buildKeyed = function(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode2(el);
    var onChild = function(v1, ix, v2) {
      var res = build(v2.value1);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = strMapWithIxE(ch1, fst, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build,
      node,
      attrs,
      ns: ns1,
      name: name1,
      children: children2,
      length: length(ch1)
    };
    return mkStep(new Step(node, state3, patchKeyed, haltKeyed));
  };
  var buildElem = function(v, build, ns1, name1, as1, ch1) {
    var el = createElement(toNullable(ns1), name1, v.document);
    var node = toNode2(el);
    var onChild = function(ix, child) {
      var res = build(child);
      insertChildIx(ix, extract2(res), node);
      return res;
    };
    var children2 = forE2(ch1, onChild);
    var attrs = v.buildAttributes(el)(as1);
    var state3 = {
      build,
      node,
      attrs,
      ns: ns1,
      name: name1,
      children: children2
    };
    return mkStep(new Step(node, state3, patchElem, haltElem));
  };
  var buildVDom = function(spec) {
    var $lazy_build = $runtime_lazy5("build", "Halogen.VDom.DOM", function() {
      return function(v) {
        if (v instanceof Text) {
          return buildText(spec, $lazy_build(59), v.value0);
        }
        ;
        if (v instanceof Elem) {
          return buildElem(spec, $lazy_build(60), v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Keyed) {
          return buildKeyed(spec, $lazy_build(61), v.value0, v.value1, v.value2, v.value3);
        }
        ;
        if (v instanceof Widget) {
          return buildWidget(spec, $lazy_build(62), v.value0);
        }
        ;
        if (v instanceof Grafted) {
          return $lazy_build(63)(runGraft(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Halogen.VDom.DOM (line 58, column 27 - line 63, column 52): " + [v.constructor.name]);
      };
    });
    var build = $lazy_build(58);
    return build;
  };

  // output/Foreign/foreign.js
  function typeOf(value14) {
    return typeof value14;
  }
  function tagOf(value14) {
    return Object.prototype.toString.call(value14).slice(8, -1);
  }
  var isArray = Array.isArray || function(value14) {
    return Object.prototype.toString.call(value14) === "[object Array]";
  };

  // output/Data.List/index.js
  var reverse2 = /* @__PURE__ */ function() {
    var go2 = function($copy_v) {
      return function($copy_v1) {
        var $tco_var_v = $copy_v;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(v, v1) {
          if (v1 instanceof Nil) {
            $tco_done = true;
            return v;
          }
          ;
          if (v1 instanceof Cons) {
            $tco_var_v = new Cons(v1.value0, v);
            $copy_v1 = v1.value1;
            return;
          }
          ;
          throw new Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, v1.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_v, $copy_v1);
        }
        ;
        return $tco_result;
      };
    };
    return go2(Nil.value);
  }();
  var $$null2 = function(v) {
    if (v instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var fromFoldable2 = function(dictFoldable) {
    return foldr(dictFoldable)(Cons.create)(Nil.value);
  };

  // output/Data.List.NonEmpty/index.js
  var singleton4 = /* @__PURE__ */ function() {
    var $200 = singleton2(plusList);
    return function($201) {
      return NonEmptyList($200($201));
    };
  }();
  var cons = function(y) {
    return function(v) {
      return new NonEmpty(y, new Cons(v.value0, v.value1));
    };
  };

  // output/Data.String.CodeUnits/foreign.js
  var singleton5 = function(c) {
    return c;
  };
  var length5 = function(s) {
    return s.length;
  };
  var drop2 = function(n) {
    return function(s) {
      return s.substring(n);
    };
  };
  var splitAt = function(i2) {
    return function(s) {
      return { before: s.substring(0, i2), after: s.substring(i2) };
    };
  };

  // output/Data.String.Unsafe/foreign.js
  var charAt = function(i2) {
    return function(s) {
      if (i2 >= 0 && i2 < s.length) return s.charAt(i2);
      throw new Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };

  // output/Data.String.CodeUnits/index.js
  var stripPrefix = function(v) {
    return function(str) {
      var v1 = splitAt(length5(v))(str);
      var $20 = v1.before === v;
      if ($20) {
        return new Just(v1.after);
      }
      ;
      return Nothing.value;
    };
  };

  // output/Foreign/index.js
  var TypeMismatch = /* @__PURE__ */ function() {
    function TypeMismatch2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    TypeMismatch2.create = function(value0) {
      return function(value1) {
        return new TypeMismatch2(value0, value1);
      };
    };
    return TypeMismatch2;
  }();
  var unsafeToForeign = unsafeCoerce2;
  var unsafeFromForeign = unsafeCoerce2;
  var fail = function(dictMonad) {
    var $153 = throwError(monadThrowExceptT(dictMonad));
    return function($154) {
      return $153(singleton4($154));
    };
  };
  var unsafeReadTagged = function(dictMonad) {
    var pure15 = pure(applicativeExceptT(dictMonad));
    var fail1 = fail(dictMonad);
    return function(tag) {
      return function(value14) {
        if (tagOf(value14) === tag) {
          return pure15(unsafeFromForeign(value14));
        }
        ;
        if (otherwise) {
          return fail1(new TypeMismatch(tag, tagOf(value14)));
        }
        ;
        throw new Error("Failed pattern match at Foreign (line 123, column 1 - line 123, column 104): " + [tag.constructor.name, value14.constructor.name]);
      };
    };
  };
  var readString = function(dictMonad) {
    return unsafeReadTagged(dictMonad)("String");
  };

  // output/Foreign.Object/foreign.js
  function _lookup(no, yes, k, m) {
    return k in m ? yes(m[k]) : no;
  }
  function toArrayWithKey(f) {
    return function(m) {
      var r = [];
      for (var k in m) {
        if (hasOwnProperty.call(m, k)) {
          r.push(f(k)(m[k]));
        }
      }
      return r;
    };
  }
  var keys = Object.keys || toArrayWithKey(function(k) {
    return function() {
      return k;
    };
  });

  // output/Foreign.Object/index.js
  var lookup3 = /* @__PURE__ */ function() {
    return runFn4(_lookup)(Nothing.value)(Just.create);
  }();

  // output/Halogen.VDom.DOM.Prop/index.js
  var $runtime_lazy6 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var Created = /* @__PURE__ */ function() {
    function Created2(value0) {
      this.value0 = value0;
    }
    ;
    Created2.create = function(value0) {
      return new Created2(value0);
    };
    return Created2;
  }();
  var Removed = /* @__PURE__ */ function() {
    function Removed2(value0) {
      this.value0 = value0;
    }
    ;
    Removed2.create = function(value0) {
      return new Removed2(value0);
    };
    return Removed2;
  }();
  var Attribute = /* @__PURE__ */ function() {
    function Attribute2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Attribute2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Attribute2(value0, value1, value22);
        };
      };
    };
    return Attribute2;
  }();
  var Property = /* @__PURE__ */ function() {
    function Property2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Property2.create = function(value0) {
      return function(value1) {
        return new Property2(value0, value1);
      };
    };
    return Property2;
  }();
  var Handler = /* @__PURE__ */ function() {
    function Handler2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Handler2.create = function(value0) {
      return function(value1) {
        return new Handler2(value0, value1);
      };
    };
    return Handler2;
  }();
  var Ref = /* @__PURE__ */ function() {
    function Ref2(value0) {
      this.value0 = value0;
    }
    ;
    Ref2.create = function(value0) {
      return new Ref2(value0);
    };
    return Ref2;
  }();
  var unsafeGetProperty = unsafeGetAny;
  var setProperty = unsafeSetAny;
  var removeProperty = function(key, el) {
    var v = hasAttribute(nullImpl, key, el);
    if (v) {
      return removeAttribute(nullImpl, key, el);
    }
    ;
    var v1 = typeOf(unsafeGetAny(key, el));
    if (v1 === "string") {
      return unsafeSetAny(key, "", el);
    }
    ;
    if (key === "rowSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    if (key === "colSpan") {
      return unsafeSetAny(key, 1, el);
    }
    ;
    return unsafeSetAny(key, jsUndefined, el);
  };
  var propToStrKey = function(v) {
    if (v instanceof Attribute && v.value0 instanceof Just) {
      return "attr/" + (v.value0.value0 + (":" + v.value1));
    }
    ;
    if (v instanceof Attribute) {
      return "attr/:" + v.value1;
    }
    ;
    if (v instanceof Property) {
      return "prop/" + v.value0;
    }
    ;
    if (v instanceof Handler) {
      return "handler/" + v.value0;
    }
    ;
    if (v instanceof Ref) {
      return "ref";
    }
    ;
    throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 182, column 16 - line 187, column 16): " + [v.constructor.name]);
  };
  var propFromString = unsafeCoerce2;
  var propFromBoolean = unsafeCoerce2;
  var buildProp = function(emit) {
    return function(el) {
      var removeProp = function(prevEvents) {
        return function(v, v1) {
          if (v1 instanceof Attribute) {
            return removeAttribute(toNullable(v1.value0), v1.value1, el);
          }
          ;
          if (v1 instanceof Property) {
            return removeProperty(v1.value0, el);
          }
          ;
          if (v1 instanceof Handler) {
            var handler3 = unsafeLookup(v1.value0, prevEvents);
            return removeEventListener2(v1.value0, fst(handler3), el);
          }
          ;
          if (v1 instanceof Ref) {
            return unit;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 169, column 5 - line 179, column 18): " + [v1.constructor.name]);
        };
      };
      var mbEmit = function(v) {
        if (v instanceof Just) {
          return emit(v.value0)();
        }
        ;
        return unit;
      };
      var haltProp = function(state3) {
        var v = lookup3("ref")(state3.props);
        if (v instanceof Just && v.value0 instanceof Ref) {
          return mbEmit(v.value0.value0(new Removed(el)));
        }
        ;
        return unit;
      };
      var diffProp = function(prevEvents, events) {
        return function(v, v1, v11, v2) {
          if (v11 instanceof Attribute && v2 instanceof Attribute) {
            var $66 = v11.value2 === v2.value2;
            if ($66) {
              return v2;
            }
            ;
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v11 instanceof Property && v2 instanceof Property) {
            var v4 = refEq2(v11.value1, v2.value1);
            if (v4) {
              return v2;
            }
            ;
            if (v2.value0 === "value") {
              var elVal = unsafeGetProperty("value", el);
              var $75 = refEq2(elVal, v2.value1);
              if ($75) {
                return v2;
              }
              ;
              setProperty(v2.value0, v2.value1, el);
              return v2;
            }
            ;
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v11 instanceof Handler && v2 instanceof Handler) {
            var handler3 = unsafeLookup(v2.value0, prevEvents);
            write(v2.value1)(snd(handler3))();
            pokeMutMap(v2.value0, handler3, events);
            return v2;
          }
          ;
          return v2;
        };
      };
      var applyProp = function(events) {
        return function(v, v1, v2) {
          if (v2 instanceof Attribute) {
            setAttribute(toNullable(v2.value0), v2.value1, v2.value2, el);
            return v2;
          }
          ;
          if (v2 instanceof Property) {
            setProperty(v2.value0, v2.value1, el);
            return v2;
          }
          ;
          if (v2 instanceof Handler) {
            var v3 = unsafeGetAny(v2.value0, events);
            if (unsafeHasAny(v2.value0, events)) {
              write(v2.value1)(snd(v3))();
              return v2;
            }
            ;
            var ref2 = $$new(v2.value1)();
            var listener = eventListener(function(ev) {
              return function __do2() {
                var f$prime = read(ref2)();
                return mbEmit(f$prime(ev));
              };
            })();
            pokeMutMap(v2.value0, new Tuple(listener, ref2), events);
            addEventListener2(v2.value0, listener, el);
            return v2;
          }
          ;
          if (v2 instanceof Ref) {
            mbEmit(v2.value0(new Created(el)));
            return v2;
          }
          ;
          throw new Error("Failed pattern match at Halogen.VDom.DOM.Prop (line 113, column 5 - line 135, column 15): " + [v2.constructor.name]);
        };
      };
      var $lazy_patchProp = $runtime_lazy6("patchProp", "Halogen.VDom.DOM.Prop", function() {
        return function(state3, ps2) {
          var events = newMutMap();
          var onThis = removeProp(state3.events);
          var onThese = diffProp(state3.events, events);
          var onThat = applyProp(events);
          var props = diffWithKeyAndIxE(state3.props, ps2, propToStrKey, onThese, onThis, onThat);
          var nextState = {
            events: unsafeFreeze2(events),
            props
          };
          return mkStep(new Step(unit, nextState, $lazy_patchProp(100), haltProp));
        };
      });
      var patchProp = $lazy_patchProp(87);
      var renderProp = function(ps1) {
        var events = newMutMap();
        var ps1$prime = strMapWithIxE(ps1, propToStrKey, applyProp(events));
        var state3 = {
          events: unsafeFreeze2(events),
          props: ps1$prime
        };
        return mkStep(new Step(unit, state3, patchProp, haltProp));
      };
      return renderProp;
    };
  };

  // output/Halogen.HTML.Core/index.js
  var HTML = function(x) {
    return x;
  };
  var widget = function($28) {
    return HTML(Widget.create($28));
  };
  var toPropValue = function(dict) {
    return dict.toPropValue;
  };
  var text5 = function($29) {
    return HTML(Text.create($29));
  };
  var prop2 = function(dictIsProp) {
    var toPropValue1 = toPropValue(dictIsProp);
    return function(v) {
      var $31 = Property.create(v);
      return function($32) {
        return $31(toPropValue1($32));
      };
    };
  };
  var isPropString = {
    toPropValue: propFromString
  };
  var isPropBoolean = {
    toPropValue: propFromBoolean
  };
  var handler = /* @__PURE__ */ function() {
    return Handler.create;
  }();
  var element = function(ns) {
    return function(name15) {
      return function(props) {
        return function(children2) {
          return new Elem(ns, name15, props, children2);
        };
      };
    };
  };
  var attr = function(ns) {
    return function(v) {
      return Attribute.create(ns)(v);
    };
  };

  // output/Control.Applicative.Free/index.js
  var identity7 = /* @__PURE__ */ identity(categoryFn);
  var Pure = /* @__PURE__ */ function() {
    function Pure2(value0) {
      this.value0 = value0;
    }
    ;
    Pure2.create = function(value0) {
      return new Pure2(value0);
    };
    return Pure2;
  }();
  var Lift = /* @__PURE__ */ function() {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function(value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var Ap = /* @__PURE__ */ function() {
    function Ap2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Ap2.create = function(value0) {
      return function(value1) {
        return new Ap2(value0, value1);
      };
    };
    return Ap2;
  }();
  var mkAp = function(fba) {
    return function(fb) {
      return new Ap(fba, fb);
    };
  };
  var liftFreeAp = /* @__PURE__ */ function() {
    return Lift.create;
  }();
  var goLeft = function(dictApplicative) {
    var pure15 = pure(dictApplicative);
    return function(fStack) {
      return function(valStack) {
        return function(nat) {
          return function(func) {
            return function(count) {
              if (func instanceof Pure) {
                return new Tuple(new Cons({
                  func: pure15(func.value0),
                  count
                }, fStack), valStack);
              }
              ;
              if (func instanceof Lift) {
                return new Tuple(new Cons({
                  func: nat(func.value0),
                  count
                }, fStack), valStack);
              }
              ;
              if (func instanceof Ap) {
                return goLeft(dictApplicative)(fStack)(cons(func.value1)(valStack))(nat)(func.value0)(count + 1 | 0);
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 102, column 41 - line 105, column 81): " + [func.constructor.name]);
            };
          };
        };
      };
    };
  };
  var goApply = function(dictApplicative) {
    var apply2 = apply(dictApplicative.Apply0());
    return function(fStack) {
      return function(vals) {
        return function(gVal) {
          if (fStack instanceof Nil) {
            return new Left(gVal);
          }
          ;
          if (fStack instanceof Cons) {
            var gRes = apply2(fStack.value0.func)(gVal);
            var $31 = fStack.value0.count === 1;
            if ($31) {
              if (fStack.value1 instanceof Nil) {
                return new Left(gRes);
              }
              ;
              return goApply(dictApplicative)(fStack.value1)(vals)(gRes);
            }
            ;
            if (vals instanceof Nil) {
              return new Left(gRes);
            }
            ;
            if (vals instanceof Cons) {
              return new Right(new Tuple(new Cons({
                func: gRes,
                count: fStack.value0.count - 1 | 0
              }, fStack.value1), new NonEmpty(vals.value0, vals.value1)));
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 83, column 11 - line 88, column 50): " + [vals.constructor.name]);
          }
          ;
          throw new Error("Failed pattern match at Control.Applicative.Free (line 72, column 3 - line 88, column 50): " + [fStack.constructor.name]);
        };
      };
    };
  };
  var functorFreeAp = {
    map: function(f) {
      return function(x) {
        return mkAp(new Pure(f))(x);
      };
    }
  };
  var foldFreeAp = function(dictApplicative) {
    var goApply1 = goApply(dictApplicative);
    var pure15 = pure(dictApplicative);
    var goLeft1 = goLeft(dictApplicative);
    return function(nat) {
      return function(z) {
        var go2 = function($copy_v) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(v) {
            if (v.value1.value0 instanceof Pure) {
              var v1 = goApply1(v.value0)(v.value1.value1)(pure15(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 54, column 17 - line 56, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Lift) {
              var v1 = goApply1(v.value0)(v.value1.value1)(nat(v.value1.value0.value0));
              if (v1 instanceof Left) {
                $tco_done = true;
                return v1.value0;
              }
              ;
              if (v1 instanceof Right) {
                $copy_v = v1.value0;
                return;
              }
              ;
              throw new Error("Failed pattern match at Control.Applicative.Free (line 57, column 17 - line 59, column 24): " + [v1.constructor.name]);
            }
            ;
            if (v.value1.value0 instanceof Ap) {
              var nextVals = new NonEmpty(v.value1.value0.value1, v.value1.value1);
              $copy_v = goLeft1(v.value0)(nextVals)(nat)(v.value1.value0.value0)(1);
              return;
            }
            ;
            throw new Error("Failed pattern match at Control.Applicative.Free (line 53, column 5 - line 62, column 47): " + [v.value1.value0.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($copy_v);
          }
          ;
          return $tco_result;
        };
        return go2(new Tuple(Nil.value, singleton4(z)));
      };
    };
  };
  var retractFreeAp = function(dictApplicative) {
    return foldFreeAp(dictApplicative)(identity7);
  };
  var applyFreeAp = {
    apply: function(fba) {
      return function(fb) {
        return mkAp(fba)(fb);
      };
    },
    Functor0: function() {
      return functorFreeAp;
    }
  };
  var applicativeFreeAp = /* @__PURE__ */ function() {
    return {
      pure: Pure.create,
      Apply0: function() {
        return applyFreeAp;
      }
    };
  }();
  var foldFreeAp1 = /* @__PURE__ */ foldFreeAp(applicativeFreeAp);
  var hoistFreeAp = function(f) {
    return foldFreeAp1(function($54) {
      return liftFreeAp(f($54));
    });
  };

  // output/Data.CatQueue/index.js
  var CatQueue = /* @__PURE__ */ function() {
    function CatQueue2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatQueue2.create = function(value0) {
      return function(value1) {
        return new CatQueue2(value0, value1);
      };
    };
    return CatQueue2;
  }();
  var uncons2 = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
        $tco_done = true;
        return Nothing.value;
      }
      ;
      if (v.value0 instanceof Nil) {
        $copy_v = new CatQueue(reverse2(v.value1), Nil.value);
        return;
      }
      ;
      if (v.value0 instanceof Cons) {
        $tco_done = true;
        return new Just(new Tuple(v.value0.value0, new CatQueue(v.value0.value1, v.value1)));
      }
      ;
      throw new Error("Failed pattern match at Data.CatQueue (line 82, column 1 - line 82, column 63): " + [v.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var snoc2 = function(v) {
    return function(a2) {
      return new CatQueue(v.value0, new Cons(a2, v.value1));
    };
  };
  var $$null3 = function(v) {
    if (v.value0 instanceof Nil && v.value1 instanceof Nil) {
      return true;
    }
    ;
    return false;
  };
  var empty5 = /* @__PURE__ */ function() {
    return new CatQueue(Nil.value, Nil.value);
  }();

  // output/Data.CatList/index.js
  var CatNil = /* @__PURE__ */ function() {
    function CatNil2() {
    }
    ;
    CatNil2.value = new CatNil2();
    return CatNil2;
  }();
  var CatCons = /* @__PURE__ */ function() {
    function CatCons2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    CatCons2.create = function(value0) {
      return function(value1) {
        return new CatCons2(value0, value1);
      };
    };
    return CatCons2;
  }();
  var link = function(v) {
    return function(v1) {
      if (v instanceof CatNil) {
        return v1;
      }
      ;
      if (v1 instanceof CatNil) {
        return v;
      }
      ;
      if (v instanceof CatCons) {
        return new CatCons(v.value0, snoc2(v.value1)(v1));
      }
      ;
      throw new Error("Failed pattern match at Data.CatList (line 108, column 1 - line 108, column 54): " + [v.constructor.name, v1.constructor.name]);
    };
  };
  var foldr3 = function(k) {
    return function(b2) {
      return function(q2) {
        var foldl3 = function($copy_v) {
          return function($copy_v1) {
            return function($copy_v2) {
              var $tco_var_v = $copy_v;
              var $tco_var_v1 = $copy_v1;
              var $tco_done = false;
              var $tco_result;
              function $tco_loop(v, v1, v2) {
                if (v2 instanceof Nil) {
                  $tco_done = true;
                  return v1;
                }
                ;
                if (v2 instanceof Cons) {
                  $tco_var_v = v;
                  $tco_var_v1 = v(v1)(v2.value0);
                  $copy_v2 = v2.value1;
                  return;
                }
                ;
                throw new Error("Failed pattern match at Data.CatList (line 124, column 3 - line 124, column 59): " + [v.constructor.name, v1.constructor.name, v2.constructor.name]);
              }
              ;
              while (!$tco_done) {
                $tco_result = $tco_loop($tco_var_v, $tco_var_v1, $copy_v2);
              }
              ;
              return $tco_result;
            };
          };
        };
        var go2 = function($copy_xs) {
          return function($copy_ys) {
            var $tco_var_xs = $copy_xs;
            var $tco_done1 = false;
            var $tco_result;
            function $tco_loop(xs, ys) {
              var v = uncons2(xs);
              if (v instanceof Nothing) {
                $tco_done1 = true;
                return foldl3(function(x) {
                  return function(i2) {
                    return i2(x);
                  };
                })(b2)(ys);
              }
              ;
              if (v instanceof Just) {
                $tco_var_xs = v.value0.value1;
                $copy_ys = new Cons(k(v.value0.value0), ys);
                return;
              }
              ;
              throw new Error("Failed pattern match at Data.CatList (line 120, column 14 - line 122, column 67): " + [v.constructor.name]);
            }
            ;
            while (!$tco_done1) {
              $tco_result = $tco_loop($tco_var_xs, $copy_ys);
            }
            ;
            return $tco_result;
          };
        };
        return go2(q2)(Nil.value);
      };
    };
  };
  var uncons3 = function(v) {
    if (v instanceof CatNil) {
      return Nothing.value;
    }
    ;
    if (v instanceof CatCons) {
      return new Just(new Tuple(v.value0, function() {
        var $66 = $$null3(v.value1);
        if ($66) {
          return CatNil.value;
        }
        ;
        return foldr3(link)(CatNil.value)(v.value1);
      }()));
    }
    ;
    throw new Error("Failed pattern match at Data.CatList (line 99, column 1 - line 99, column 61): " + [v.constructor.name]);
  };
  var empty6 = /* @__PURE__ */ function() {
    return CatNil.value;
  }();
  var append2 = link;
  var semigroupCatList = {
    append: append2
  };
  var snoc3 = function(cat) {
    return function(a2) {
      return append2(cat)(new CatCons(a2, empty5));
    };
  };

  // output/Control.Monad.Free/index.js
  var $runtime_lazy7 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var append3 = /* @__PURE__ */ append(semigroupCatList);
  var Free = /* @__PURE__ */ function() {
    function Free2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Free2.create = function(value0) {
      return function(value1) {
        return new Free2(value0, value1);
      };
    };
    return Free2;
  }();
  var Return = /* @__PURE__ */ function() {
    function Return2(value0) {
      this.value0 = value0;
    }
    ;
    Return2.create = function(value0) {
      return new Return2(value0);
    };
    return Return2;
  }();
  var Bind = /* @__PURE__ */ function() {
    function Bind2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Bind2.create = function(value0) {
      return function(value1) {
        return new Bind2(value0, value1);
      };
    };
    return Bind2;
  }();
  var toView = function($copy_v) {
    var $tco_done = false;
    var $tco_result;
    function $tco_loop(v) {
      var runExpF = function(v22) {
        return v22;
      };
      var concatF = function(v22) {
        return function(r) {
          return new Free(v22.value0, append3(v22.value1)(r));
        };
      };
      if (v.value0 instanceof Return) {
        var v2 = uncons3(v.value1);
        if (v2 instanceof Nothing) {
          $tco_done = true;
          return new Return(v.value0.value0);
        }
        ;
        if (v2 instanceof Just) {
          $copy_v = concatF(runExpF(v2.value0.value0)(v.value0.value0))(v2.value0.value1);
          return;
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [v2.constructor.name]);
      }
      ;
      if (v.value0 instanceof Bind) {
        $tco_done = true;
        return new Bind(v.value0.value0, function(a2) {
          return concatF(v.value0.value1(a2))(v.value1);
        });
      }
      ;
      throw new Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [v.value0.constructor.name]);
    }
    ;
    while (!$tco_done) {
      $tco_result = $tco_loop($copy_v);
    }
    ;
    return $tco_result;
  };
  var fromView = function(f) {
    return new Free(f, empty6);
  };
  var freeMonad = {
    Applicative0: function() {
      return freeApplicative;
    },
    Bind1: function() {
      return freeBind;
    }
  };
  var freeFunctor = {
    map: function(k) {
      return function(f) {
        return bindFlipped(freeBind)(function() {
          var $189 = pure(freeApplicative);
          return function($190) {
            return $189(k($190));
          };
        }())(f);
      };
    }
  };
  var freeBind = {
    bind: function(v) {
      return function(k) {
        return new Free(v.value0, snoc3(v.value1)(k));
      };
    },
    Apply0: function() {
      return $lazy_freeApply(0);
    }
  };
  var freeApplicative = {
    pure: function($191) {
      return fromView(Return.create($191));
    },
    Apply0: function() {
      return $lazy_freeApply(0);
    }
  };
  var $lazy_freeApply = /* @__PURE__ */ $runtime_lazy7("freeApply", "Control.Monad.Free", function() {
    return {
      apply: ap(freeMonad),
      Functor0: function() {
        return freeFunctor;
      }
    };
  });
  var pure5 = /* @__PURE__ */ pure(freeApplicative);
  var liftF = function(f) {
    return fromView(new Bind(f, function($192) {
      return pure5($192);
    }));
  };
  var foldFree = function(dictMonadRec) {
    var Monad0 = dictMonadRec.Monad0();
    var map111 = map(Monad0.Bind1().Apply0().Functor0());
    var pure15 = pure(Monad0.Applicative0());
    var tailRecM4 = tailRecM(dictMonadRec);
    return function(k) {
      var go2 = function(f) {
        var v = toView(f);
        if (v instanceof Return) {
          return map111(Done.create)(pure15(v.value0));
        }
        ;
        if (v instanceof Bind) {
          return map111(function($199) {
            return Loop.create(v.value1($199));
          })(k(v.value0));
        }
        ;
        throw new Error("Failed pattern match at Control.Monad.Free (line 158, column 10 - line 160, column 37): " + [v.constructor.name]);
      };
      return tailRecM4(go2);
    };
  };

  // output/Data.Lazy/foreign.js
  var defer3 = function(thunk) {
    var v = null;
    return function() {
      if (thunk === void 0) return v;
      v = thunk();
      thunk = void 0;
      return v;
    };
  };
  var force = function(l) {
    return l();
  };

  // output/Control.Monad.State.Trans/index.js
  var functorStateT = function(dictFunctor) {
    var map30 = map(dictFunctor);
    return {
      map: function(f) {
        return function(v) {
          return function(s) {
            return map30(function(v1) {
              return new Tuple(f(v1.value0), v1.value1);
            })(v(s));
          };
        };
      }
    };
  };
  var monadStateT = function(dictMonad) {
    return {
      Applicative0: function() {
        return applicativeStateT(dictMonad);
      },
      Bind1: function() {
        return bindStateT(dictMonad);
      }
    };
  };
  var bindStateT = function(dictMonad) {
    var bind10 = bind(dictMonad.Bind1());
    return {
      bind: function(v) {
        return function(f) {
          return function(s) {
            return bind10(v(s))(function(v1) {
              var v3 = f(v1.value0);
              return v3(v1.value1);
            });
          };
        };
      },
      Apply0: function() {
        return applyStateT(dictMonad);
      }
    };
  };
  var applyStateT = function(dictMonad) {
    var functorStateT1 = functorStateT(dictMonad.Bind1().Apply0().Functor0());
    return {
      apply: ap(monadStateT(dictMonad)),
      Functor0: function() {
        return functorStateT1;
      }
    };
  };
  var applicativeStateT = function(dictMonad) {
    var pure15 = pure(dictMonad.Applicative0());
    return {
      pure: function(a2) {
        return function(s) {
          return pure15(new Tuple(a2, s));
        };
      },
      Apply0: function() {
        return applyStateT(dictMonad);
      }
    };
  };

  // output/Halogen.Query.ChildQuery/index.js
  var unChildQueryBox = unsafeCoerce2;

  // output/Unsafe.Reference/foreign.js
  function reallyUnsafeRefEq(a2) {
    return function(b2) {
      return a2 === b2;
    };
  }

  // output/Unsafe.Reference/index.js
  var unsafeRefEq = reallyUnsafeRefEq;

  // output/Halogen.Subscription/index.js
  var $$void5 = /* @__PURE__ */ $$void(functorEffect);
  var bind4 = /* @__PURE__ */ bind(bindEffect);
  var append4 = /* @__PURE__ */ append(semigroupArray);
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect);
  var traverse_1 = /* @__PURE__ */ traverse_2(foldableArray);
  var unsubscribe = function(v) {
    return v;
  };
  var subscribe = function(v) {
    return function(k) {
      return v(function($76) {
        return $$void5(k($76));
      });
    };
  };
  var notify = function(v) {
    return function(a2) {
      return v(a2);
    };
  };
  var create3 = function __do() {
    var subscribers = $$new([])();
    return {
      emitter: function(k) {
        return function __do2() {
          modify_2(function(v) {
            return append4(v)([k]);
          })(subscribers)();
          return modify_2(deleteBy(unsafeRefEq)(k))(subscribers);
        };
      },
      listener: function(a2) {
        return bind4(read(subscribers))(traverse_1(function(k) {
          return k(a2);
        }));
      }
    };
  };

  // output/Halogen.Query.HalogenM/index.js
  var SubscriptionId = function(x) {
    return x;
  };
  var ForkId = function(x) {
    return x;
  };
  var State = /* @__PURE__ */ function() {
    function State2(value0) {
      this.value0 = value0;
    }
    ;
    State2.create = function(value0) {
      return new State2(value0);
    };
    return State2;
  }();
  var Subscribe = /* @__PURE__ */ function() {
    function Subscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Subscribe2.create = function(value0) {
      return function(value1) {
        return new Subscribe2(value0, value1);
      };
    };
    return Subscribe2;
  }();
  var Unsubscribe = /* @__PURE__ */ function() {
    function Unsubscribe2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Unsubscribe2.create = function(value0) {
      return function(value1) {
        return new Unsubscribe2(value0, value1);
      };
    };
    return Unsubscribe2;
  }();
  var Lift2 = /* @__PURE__ */ function() {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function(value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var ChildQuery2 = /* @__PURE__ */ function() {
    function ChildQuery3(value0) {
      this.value0 = value0;
    }
    ;
    ChildQuery3.create = function(value0) {
      return new ChildQuery3(value0);
    };
    return ChildQuery3;
  }();
  var Raise = /* @__PURE__ */ function() {
    function Raise2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Raise2.create = function(value0) {
      return function(value1) {
        return new Raise2(value0, value1);
      };
    };
    return Raise2;
  }();
  var Par = /* @__PURE__ */ function() {
    function Par2(value0) {
      this.value0 = value0;
    }
    ;
    Par2.create = function(value0) {
      return new Par2(value0);
    };
    return Par2;
  }();
  var Fork = /* @__PURE__ */ function() {
    function Fork2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Fork2.create = function(value0) {
      return function(value1) {
        return new Fork2(value0, value1);
      };
    };
    return Fork2;
  }();
  var Join = /* @__PURE__ */ function() {
    function Join2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Join2.create = function(value0) {
      return function(value1) {
        return new Join2(value0, value1);
      };
    };
    return Join2;
  }();
  var Kill = /* @__PURE__ */ function() {
    function Kill2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Kill2.create = function(value0) {
      return function(value1) {
        return new Kill2(value0, value1);
      };
    };
    return Kill2;
  }();
  var GetRef = /* @__PURE__ */ function() {
    function GetRef2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    GetRef2.create = function(value0) {
      return function(value1) {
        return new GetRef2(value0, value1);
      };
    };
    return GetRef2;
  }();
  var HalogenM = function(x) {
    return x;
  };
  var raise = function(o) {
    return liftF(new Raise(o, unit));
  };
  var ordSubscriptionId = ordInt;
  var ordForkId = ordInt;
  var monadHalogenM = freeMonad;
  var monadStateHalogenM = {
    state: function($181) {
      return HalogenM(liftF(State.create($181)));
    },
    Monad0: function() {
      return monadHalogenM;
    }
  };
  var monadThrowHalogenM = function(dictMonadThrow) {
    return {
      throwError: function() {
        var $184 = throwError(dictMonadThrow);
        return function($185) {
          return HalogenM(liftF(Lift2.create($184($185))));
        };
      }(),
      Monad0: function() {
        return monadHalogenM;
      }
    };
  };
  var monadEffectHalogenM = function(dictMonadEffect) {
    return {
      liftEffect: function() {
        var $186 = liftEffect(dictMonadEffect);
        return function($187) {
          return HalogenM(liftF(Lift2.create($186($187))));
        };
      }(),
      Monad0: function() {
        return monadHalogenM;
      }
    };
  };
  var functorHalogenM = freeFunctor;
  var bindHalogenM = freeBind;
  var applicativeHalogenM = freeApplicative;

  // output/Halogen.Query.HalogenQ/index.js
  var Initialize = /* @__PURE__ */ function() {
    function Initialize3(value0) {
      this.value0 = value0;
    }
    ;
    Initialize3.create = function(value0) {
      return new Initialize3(value0);
    };
    return Initialize3;
  }();
  var Finalize = /* @__PURE__ */ function() {
    function Finalize2(value0) {
      this.value0 = value0;
    }
    ;
    Finalize2.create = function(value0) {
      return new Finalize2(value0);
    };
    return Finalize2;
  }();
  var Receive = /* @__PURE__ */ function() {
    function Receive2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Receive2.create = function(value0) {
      return function(value1) {
        return new Receive2(value0, value1);
      };
    };
    return Receive2;
  }();
  var Action2 = /* @__PURE__ */ function() {
    function Action3(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Action3.create = function(value0) {
      return function(value1) {
        return new Action3(value0, value1);
      };
    };
    return Action3;
  }();
  var Query = /* @__PURE__ */ function() {
    function Query2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Query2.create = function(value0) {
      return function(value1) {
        return new Query2(value0, value1);
      };
    };
    return Query2;
  }();

  // output/Halogen.VDom.Thunk/index.js
  var $runtime_lazy8 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var unsafeEqThunk = function(v, v1) {
    return refEq2(v.value0, v1.value0) && (refEq2(v.value1, v1.value1) && v.value1(v.value3, v1.value3));
  };
  var runThunk = function(v) {
    return v.value2(v.value3);
  };
  var buildThunk = function(toVDom) {
    var haltThunk = function(state3) {
      return halt(state3.vdom);
    };
    var $lazy_patchThunk = $runtime_lazy8("patchThunk", "Halogen.VDom.Thunk", function() {
      return function(state3, t2) {
        var $48 = unsafeEqThunk(state3.thunk, t2);
        if ($48) {
          return mkStep(new Step(extract2(state3.vdom), state3, $lazy_patchThunk(112), haltThunk));
        }
        ;
        var vdom = step2(state3.vdom, toVDom(runThunk(t2)));
        return mkStep(new Step(extract2(vdom), {
          vdom,
          thunk: t2
        }, $lazy_patchThunk(115), haltThunk));
      };
    });
    var patchThunk = $lazy_patchThunk(108);
    var renderThunk = function(spec) {
      return function(t) {
        var vdom = buildVDom(spec)(toVDom(runThunk(t)));
        return mkStep(new Step(extract2(vdom), {
          thunk: t,
          vdom
        }, patchThunk, haltThunk));
      };
    };
    return renderThunk;
  };

  // output/Halogen.Component/index.js
  var voidLeft2 = /* @__PURE__ */ voidLeft(functorHalogenM);
  var traverse_3 = /* @__PURE__ */ traverse_(applicativeHalogenM)(foldableMaybe);
  var map15 = /* @__PURE__ */ map(functorHalogenM);
  var pure6 = /* @__PURE__ */ pure(applicativeHalogenM);
  var lookup4 = /* @__PURE__ */ lookup2();
  var pop3 = /* @__PURE__ */ pop2();
  var insert3 = /* @__PURE__ */ insert2();
  var ComponentSlot = /* @__PURE__ */ function() {
    function ComponentSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ComponentSlot2.create = function(value0) {
      return new ComponentSlot2(value0);
    };
    return ComponentSlot2;
  }();
  var ThunkSlot = /* @__PURE__ */ function() {
    function ThunkSlot2(value0) {
      this.value0 = value0;
    }
    ;
    ThunkSlot2.create = function(value0) {
      return new ThunkSlot2(value0);
    };
    return ThunkSlot2;
  }();
  var unComponentSlot = unsafeCoerce2;
  var unComponent = unsafeCoerce2;
  var mkEval = function(args) {
    return function(v) {
      if (v instanceof Initialize) {
        return voidLeft2(traverse_3(args.handleAction)(args.initialize))(v.value0);
      }
      ;
      if (v instanceof Finalize) {
        return voidLeft2(traverse_3(args.handleAction)(args.finalize))(v.value0);
      }
      ;
      if (v instanceof Receive) {
        return voidLeft2(traverse_3(args.handleAction)(args.receive(v.value0)))(v.value1);
      }
      ;
      if (v instanceof Action2) {
        return voidLeft2(args.handleAction(v.value0))(v.value1);
      }
      ;
      if (v instanceof Query) {
        return unCoyoneda(function(g) {
          var $45 = map15(maybe(v.value1(unit))(g));
          return function($46) {
            return $45(args.handleQuery($46));
          };
        })(v.value0);
      }
      ;
      throw new Error("Failed pattern match at Halogen.Component (line 182, column 15 - line 192, column 71): " + [v.constructor.name]);
    };
  };
  var mkComponentSlot = unsafeCoerce2;
  var mkComponent = unsafeCoerce2;
  var defaultEval = /* @__PURE__ */ function() {
    return {
      handleAction: $$const(pure6(unit)),
      handleQuery: $$const(pure6(Nothing.value)),
      receive: $$const(Nothing.value),
      initialize: Nothing.value,
      finalize: Nothing.value
    };
  }();
  var componentSlot = function() {
    return function(dictIsSymbol) {
      var lookup13 = lookup4(dictIsSymbol);
      var pop12 = pop3(dictIsSymbol);
      var insert13 = insert3(dictIsSymbol);
      return function(dictOrd) {
        var lookup23 = lookup13(dictOrd);
        var pop22 = pop12(dictOrd);
        var insert22 = insert13(dictOrd);
        return function(label5) {
          return function(p2) {
            return function(comp) {
              return function(input3) {
                return function(output2) {
                  return mkComponentSlot({
                    get: lookup23(label5)(p2),
                    pop: pop22(label5)(p2),
                    set: insert22(label5)(p2),
                    component: comp,
                    input: input3,
                    output: output2
                  });
                };
              };
            };
          };
        };
      };
    };
  };

  // output/Halogen.HTML.Elements/index.js
  var element2 = /* @__PURE__ */ function() {
    return element(Nothing.value);
  }();
  var img = function(props) {
    return element2("img")(props)([]);
  };
  var option = /* @__PURE__ */ element2("option");
  var select3 = /* @__PURE__ */ element2("select");
  var span3 = /* @__PURE__ */ element2("span");
  var textarea = function(es) {
    return element2("textarea")(es)([]);
  };
  var div2 = /* @__PURE__ */ element2("div");
  var button = /* @__PURE__ */ element2("button");
  var a = /* @__PURE__ */ element2("a");

  // output/Halogen.HTML.Properties/index.js
  var unwrap2 = /* @__PURE__ */ unwrap();
  var prop3 = function(dictIsProp) {
    return prop2(dictIsProp);
  };
  var prop1 = /* @__PURE__ */ prop3(isPropBoolean);
  var prop22 = /* @__PURE__ */ prop3(isPropString);
  var selected2 = /* @__PURE__ */ prop1("selected");
  var src9 = /* @__PURE__ */ prop22("src");
  var value12 = function(dictIsProp) {
    return prop3(dictIsProp)("value");
  };
  var href4 = /* @__PURE__ */ prop22("href");
  var classes = /* @__PURE__ */ function() {
    var $32 = prop22("className");
    var $33 = joinWith(" ");
    var $34 = map(functorArray)(unwrap2);
    return function($35) {
      return $32($33($34($35)));
    };
  }();
  var class_ = /* @__PURE__ */ function() {
    var $36 = prop22("className");
    return function($37) {
      return $36(unwrap2($37));
    };
  }();
  var attr2 = /* @__PURE__ */ function() {
    return attr(Nothing.value);
  }();
  var style = /* @__PURE__ */ attr2("style");

  // output/Halogen.HTML/index.js
  var componentSlot2 = /* @__PURE__ */ componentSlot();
  var slot_ = function() {
    return function(dictIsSymbol) {
      var componentSlot1 = componentSlot2(dictIsSymbol);
      return function(dictOrd) {
        var componentSlot22 = componentSlot1(dictOrd);
        return function(label5) {
          return function(p2) {
            return function(component3) {
              return function(input3) {
                return widget(new ComponentSlot(componentSlot22(label5)(p2)(component3)(input3)($$const(Nothing.value))));
              };
            };
          };
        };
      };
    };
  };
  var slot = function() {
    return function(dictIsSymbol) {
      var componentSlot1 = componentSlot2(dictIsSymbol);
      return function(dictOrd) {
        var componentSlot22 = componentSlot1(dictOrd);
        return function(label5) {
          return function(p2) {
            return function(component3) {
              return function(input3) {
                return function(outputQuery) {
                  return widget(new ComponentSlot(componentSlot22(label5)(p2)(component3)(input3)(function($11) {
                    return Just.create(outputQuery($11));
                  })));
                };
              };
            };
          };
        };
      };
    };
  };

  // output/Control.Monad.Except/index.js
  var unwrap3 = /* @__PURE__ */ unwrap();
  var runExcept = function($3) {
    return unwrap3(runExceptT($3));
  };

  // output/Foreign.Index/foreign.js
  function unsafeReadPropImpl(f, s, key, value14) {
    return value14 == null ? f : s(value14[key]);
  }

  // output/Foreign.Index/index.js
  var unsafeReadProp = function(dictMonad) {
    var fail3 = fail(dictMonad);
    var pure15 = pure(applicativeExceptT(dictMonad));
    return function(k) {
      return function(value14) {
        return unsafeReadPropImpl(fail3(new TypeMismatch("object", typeOf(value14))), pure15, k, value14);
      };
    };
  };
  var readProp = function(dictMonad) {
    return unsafeReadProp(dictMonad);
  };

  // output/Web.Event.Event/foreign.js
  function _currentTarget(e) {
    return e.currentTarget;
  }
  function _target(e) {
    return e.target;
  }

  // output/Web.Event.Event/index.js
  var target5 = function($3) {
    return toMaybe(_target($3));
  };
  var currentTarget = function($5) {
    return toMaybe(_currentTarget($5));
  };

  // output/Web.UIEvent.MouseEvent.EventTypes/index.js
  var click2 = "click";

  // output/Halogen.HTML.Events/index.js
  var map17 = /* @__PURE__ */ map(functorMaybe);
  var composeKleisli2 = /* @__PURE__ */ composeKleisli(bindMaybe);
  var composeKleisliFlipped3 = /* @__PURE__ */ composeKleisliFlipped(/* @__PURE__ */ bindExceptT(monadIdentity));
  var readProp2 = /* @__PURE__ */ readProp(monadIdentity);
  var readString2 = /* @__PURE__ */ readString(monadIdentity);
  var mouseHandler = unsafeCoerce2;
  var handler$prime = function(et) {
    return function(f) {
      return handler(et)(function(ev) {
        return map17(Action.create)(f(ev));
      });
    };
  };
  var handler2 = function(et) {
    return function(f) {
      return handler(et)(function(ev) {
        return new Just(new Action(f(ev)));
      });
    };
  };
  var onChange = /* @__PURE__ */ handler2(change);
  var onClick = /* @__PURE__ */ function() {
    var $15 = handler2(click2);
    return function($16) {
      return $15(mouseHandler($16));
    };
  }();
  var addForeignPropHandler = function(key) {
    return function(prop5) {
      return function(reader) {
        return function(f) {
          var go2 = function(a2) {
            return composeKleisliFlipped3(reader)(readProp2(prop5))(unsafeToForeign(a2));
          };
          return handler$prime(key)(composeKleisli2(currentTarget)(function(e) {
            return either($$const(Nothing.value))(function($85) {
              return Just.create(f($85));
            })(runExcept(go2(e)));
          }));
        };
      };
    };
  };
  var onValueChange = /* @__PURE__ */ addForeignPropHandler(change)("value")(readString2);

  // output/Control.Monad.Fork.Class/index.js
  var monadForkAff = {
    suspend: suspendAff,
    fork: forkAff,
    join: joinFiber,
    Monad0: function() {
      return monadAff;
    },
    Functor1: function() {
      return functorFiber;
    }
  };
  var fork = function(dict) {
    return dict.fork;
  };

  // output/Halogen.Aff.Driver.State/index.js
  var unRenderStateX = unsafeCoerce2;
  var unDriverStateX = unsafeCoerce2;
  var renderStateX_ = function(dictApplicative) {
    var traverse_7 = traverse_(dictApplicative)(foldableMaybe);
    return function(f) {
      return unDriverStateX(function(st) {
        return traverse_7(f)(st.rendering);
      });
    };
  };
  var mkRenderStateX = unsafeCoerce2;
  var renderStateX = function(dictFunctor) {
    return function(f) {
      return unDriverStateX(function(st) {
        return mkRenderStateX(f(st.rendering));
      });
    };
  };
  var mkDriverStateXRef = unsafeCoerce2;
  var mapDriverState = function(f) {
    return function(v) {
      return f(v);
    };
  };
  var initDriverState = function(component3) {
    return function(input3) {
      return function(handler3) {
        return function(lchs) {
          return function __do2() {
            var selfRef = $$new({})();
            var childrenIn = $$new(empty3)();
            var childrenOut = $$new(empty3)();
            var handlerRef = $$new(handler3)();
            var pendingQueries = $$new(new Just(Nil.value))();
            var pendingOuts = $$new(new Just(Nil.value))();
            var pendingHandlers = $$new(Nothing.value)();
            var fresh2 = $$new(1)();
            var subscriptions = $$new(new Just(empty2))();
            var forks = $$new(empty2)();
            var ds = {
              component: component3,
              state: component3.initialState(input3),
              refs: empty2,
              children: empty3,
              childrenIn,
              childrenOut,
              selfRef,
              handlerRef,
              pendingQueries,
              pendingOuts,
              pendingHandlers,
              rendering: Nothing.value,
              fresh: fresh2,
              subscriptions,
              forks,
              lifecycleHandlers: lchs
            };
            write(ds)(selfRef)();
            return mkDriverStateXRef(selfRef);
          };
        };
      };
    };
  };

  // output/Halogen.Aff.Driver.Eval/index.js
  var traverse_4 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
  var bindFlipped6 = /* @__PURE__ */ bindFlipped(bindMaybe);
  var lookup5 = /* @__PURE__ */ lookup(ordSubscriptionId);
  var bind12 = /* @__PURE__ */ bind(bindAff);
  var liftEffect4 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var discard4 = /* @__PURE__ */ discard(discardUnit);
  var discard1 = /* @__PURE__ */ discard4(bindAff);
  var traverse_12 = /* @__PURE__ */ traverse_(applicativeAff);
  var traverse_22 = /* @__PURE__ */ traverse_12(foldableList);
  var fork3 = /* @__PURE__ */ fork(monadForkAff);
  var parSequence_2 = /* @__PURE__ */ parSequence_(parallelAff)(applicativeParAff)(foldableList);
  var pure7 = /* @__PURE__ */ pure(applicativeAff);
  var map18 = /* @__PURE__ */ map(functorCoyoneda);
  var parallel3 = /* @__PURE__ */ parallel(parallelAff);
  var map19 = /* @__PURE__ */ map(functorAff);
  var sequential2 = /* @__PURE__ */ sequential(parallelAff);
  var map22 = /* @__PURE__ */ map(functorMaybe);
  var insert4 = /* @__PURE__ */ insert(ordSubscriptionId);
  var retractFreeAp2 = /* @__PURE__ */ retractFreeAp(applicativeParAff);
  var $$delete2 = /* @__PURE__ */ $$delete(ordForkId);
  var unlessM2 = /* @__PURE__ */ unlessM(monadEffect);
  var insert12 = /* @__PURE__ */ insert(ordForkId);
  var traverse_32 = /* @__PURE__ */ traverse_12(foldableMaybe);
  var lookup12 = /* @__PURE__ */ lookup(ordForkId);
  var lookup22 = /* @__PURE__ */ lookup(ordString);
  var foldFree2 = /* @__PURE__ */ foldFree(monadRecAff);
  var alter2 = /* @__PURE__ */ alter(ordString);
  var unsubscribe3 = function(sid) {
    return function(ref2) {
      return function __do2() {
        var v = read(ref2)();
        var subs = read(v.subscriptions)();
        return traverse_4(unsubscribe)(bindFlipped6(lookup5(sid))(subs))();
      };
    };
  };
  var queueOrRun = function(ref2) {
    return function(au) {
      return bind12(liftEffect4(read(ref2)))(function(v) {
        if (v instanceof Nothing) {
          return au;
        }
        ;
        if (v instanceof Just) {
          return liftEffect4(write(new Just(new Cons(au, v.value0)))(ref2));
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 188, column 33 - line 190, column 57): " + [v.constructor.name]);
      });
    };
  };
  var handleLifecycle = function(lchs) {
    return function(f) {
      return discard1(liftEffect4(write({
        initializers: Nil.value,
        finalizers: Nil.value
      })(lchs)))(function() {
        return bind12(liftEffect4(f))(function(result) {
          return bind12(liftEffect4(read(lchs)))(function(v) {
            return discard1(traverse_22(fork3)(v.finalizers))(function() {
              return discard1(parSequence_2(v.initializers))(function() {
                return pure7(result);
              });
            });
          });
        });
      });
    };
  };
  var handleAff = /* @__PURE__ */ runAff_(/* @__PURE__ */ either(throwException)(/* @__PURE__ */ $$const(/* @__PURE__ */ pure(applicativeEffect)(unit))));
  var fresh = function(f) {
    return function(ref2) {
      return bind12(liftEffect4(read(ref2)))(function(v) {
        return liftEffect4(modify$prime(function(i2) {
          return {
            state: i2 + 1 | 0,
            value: f(i2)
          };
        })(v.fresh));
      });
    };
  };
  var evalQ = function(render2) {
    return function(ref2) {
      return function(q2) {
        return bind12(liftEffect4(read(ref2)))(function(v) {
          return evalM(render2)(ref2)(v["component"]["eval"](new Query(map18(Just.create)(liftCoyoneda(q2)), $$const(Nothing.value))));
        });
      };
    };
  };
  var evalM = function(render2) {
    return function(initRef) {
      return function(v) {
        var evalChildQuery = function(ref2) {
          return function(cqb) {
            return bind12(liftEffect4(read(ref2)))(function(v1) {
              return unChildQueryBox(function(v2) {
                var evalChild = function(v3) {
                  return parallel3(bind12(liftEffect4(read(v3)))(function(dsx) {
                    return unDriverStateX(function(ds) {
                      return evalQ(render2)(ds.selfRef)(v2.value1);
                    })(dsx);
                  }));
                };
                return map19(v2.value2)(sequential2(v2.value0(applicativeParAff)(evalChild)(v1.children)));
              })(cqb);
            });
          };
        };
        var go2 = function(ref2) {
          return function(v1) {
            if (v1 instanceof State) {
              return bind12(liftEffect4(read(ref2)))(function(v2) {
                var v3 = v1.value0(v2.state);
                if (unsafeRefEq(v2.state)(v3.value1)) {
                  return pure7(v3.value0);
                }
                ;
                if (otherwise) {
                  return discard1(liftEffect4(write({
                    component: v2.component,
                    refs: v2.refs,
                    children: v2.children,
                    childrenIn: v2.childrenIn,
                    childrenOut: v2.childrenOut,
                    selfRef: v2.selfRef,
                    handlerRef: v2.handlerRef,
                    pendingQueries: v2.pendingQueries,
                    pendingOuts: v2.pendingOuts,
                    pendingHandlers: v2.pendingHandlers,
                    rendering: v2.rendering,
                    fresh: v2.fresh,
                    subscriptions: v2.subscriptions,
                    forks: v2.forks,
                    lifecycleHandlers: v2.lifecycleHandlers,
                    state: v3.value1
                  })(ref2)))(function() {
                    return discard1(handleLifecycle(v2.lifecycleHandlers)(render2(v2.lifecycleHandlers)(ref2)))(function() {
                      return pure7(v3.value0);
                    });
                  });
                }
                ;
                throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 86, column 7 - line 92, column 21): " + [v3.constructor.name]);
              });
            }
            ;
            if (v1 instanceof Subscribe) {
              return bind12(fresh(SubscriptionId)(ref2))(function(sid) {
                return bind12(liftEffect4(subscribe(v1.value0(sid))(function(act) {
                  return handleAff(evalF(render2)(ref2)(new Action(act)));
                })))(function(finalize) {
                  return bind12(liftEffect4(read(ref2)))(function(v2) {
                    return discard1(liftEffect4(modify_2(map22(insert4(sid)(finalize)))(v2.subscriptions)))(function() {
                      return pure7(v1.value1(sid));
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Unsubscribe) {
              return discard1(liftEffect4(unsubscribe3(v1.value0)(ref2)))(function() {
                return pure7(v1.value1);
              });
            }
            ;
            if (v1 instanceof Lift2) {
              return v1.value0;
            }
            ;
            if (v1 instanceof ChildQuery2) {
              return evalChildQuery(ref2)(v1.value0);
            }
            ;
            if (v1 instanceof Raise) {
              return bind12(liftEffect4(read(ref2)))(function(v2) {
                return bind12(liftEffect4(read(v2.handlerRef)))(function(handler3) {
                  return discard1(queueOrRun(v2.pendingOuts)(handler3(v1.value0)))(function() {
                    return pure7(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof Par) {
              return sequential2(retractFreeAp2(hoistFreeAp(function() {
                var $119 = evalM(render2)(ref2);
                return function($120) {
                  return parallel3($119($120));
                };
              }())(v1.value0)));
            }
            ;
            if (v1 instanceof Fork) {
              return bind12(fresh(ForkId)(ref2))(function(fid) {
                return bind12(liftEffect4(read(ref2)))(function(v2) {
                  return bind12(liftEffect4($$new(false)))(function(doneRef) {
                    return bind12(fork3($$finally(liftEffect4(function __do2() {
                      modify_2($$delete2(fid))(v2.forks)();
                      return write(true)(doneRef)();
                    }))(evalM(render2)(ref2)(v1.value0))))(function(fiber) {
                      return discard1(liftEffect4(unlessM2(read(doneRef))(modify_2(insert12(fid)(fiber))(v2.forks))))(function() {
                        return pure7(v1.value1(fid));
                      });
                    });
                  });
                });
              });
            }
            ;
            if (v1 instanceof Join) {
              return bind12(liftEffect4(read(ref2)))(function(v2) {
                return bind12(liftEffect4(read(v2.forks)))(function(forkMap) {
                  return discard1(traverse_32(joinFiber)(lookup12(v1.value0)(forkMap)))(function() {
                    return pure7(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof Kill) {
              return bind12(liftEffect4(read(ref2)))(function(v2) {
                return bind12(liftEffect4(read(v2.forks)))(function(forkMap) {
                  return discard1(traverse_32(killFiber(error("Cancelled")))(lookup12(v1.value0)(forkMap)))(function() {
                    return pure7(v1.value1);
                  });
                });
              });
            }
            ;
            if (v1 instanceof GetRef) {
              return bind12(liftEffect4(read(ref2)))(function(v2) {
                return pure7(v1.value1(lookup22(v1.value0)(v2.refs)));
              });
            }
            ;
            throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 83, column 12 - line 139, column 33): " + [v1.constructor.name]);
          };
        };
        return foldFree2(go2(initRef))(v);
      };
    };
  };
  var evalF = function(render2) {
    return function(ref2) {
      return function(v) {
        if (v instanceof RefUpdate) {
          return liftEffect4(flip(modify_2)(ref2)(mapDriverState(function(st) {
            return {
              component: st.component,
              state: st.state,
              children: st.children,
              childrenIn: st.childrenIn,
              childrenOut: st.childrenOut,
              selfRef: st.selfRef,
              handlerRef: st.handlerRef,
              pendingQueries: st.pendingQueries,
              pendingOuts: st.pendingOuts,
              pendingHandlers: st.pendingHandlers,
              rendering: st.rendering,
              fresh: st.fresh,
              subscriptions: st.subscriptions,
              forks: st.forks,
              lifecycleHandlers: st.lifecycleHandlers,
              refs: alter2($$const(v.value1))(v.value0)(st.refs)
            };
          })));
        }
        ;
        if (v instanceof Action) {
          return bind12(liftEffect4(read(ref2)))(function(v1) {
            return evalM(render2)(ref2)(v1["component"]["eval"](new Action2(v.value0, unit)));
          });
        }
        ;
        throw new Error("Failed pattern match at Halogen.Aff.Driver.Eval (line 52, column 20 - line 58, column 62): " + [v.constructor.name]);
      };
    };
  };

  // output/Halogen.Aff.Driver/index.js
  var bind5 = /* @__PURE__ */ bind(bindEffect);
  var discard5 = /* @__PURE__ */ discard(discardUnit);
  var for_2 = /* @__PURE__ */ for_(applicativeEffect)(foldableMaybe);
  var traverse_5 = /* @__PURE__ */ traverse_(applicativeAff)(foldableList);
  var fork4 = /* @__PURE__ */ fork(monadForkAff);
  var bindFlipped7 = /* @__PURE__ */ bindFlipped(bindEffect);
  var traverse_13 = /* @__PURE__ */ traverse_(applicativeEffect);
  var traverse_23 = /* @__PURE__ */ traverse_13(foldableMaybe);
  var traverse_33 = /* @__PURE__ */ traverse_13(foldableMap);
  var discard22 = /* @__PURE__ */ discard5(bindAff);
  var parSequence_3 = /* @__PURE__ */ parSequence_(parallelAff)(applicativeParAff)(foldableList);
  var liftEffect5 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var pure8 = /* @__PURE__ */ pure(applicativeEffect);
  var map20 = /* @__PURE__ */ map(functorEffect);
  var pure12 = /* @__PURE__ */ pure(applicativeAff);
  var when2 = /* @__PURE__ */ when(applicativeEffect);
  var renderStateX2 = /* @__PURE__ */ renderStateX(functorEffect);
  var $$void6 = /* @__PURE__ */ $$void(functorAff);
  var foreachSlot2 = /* @__PURE__ */ foreachSlot(applicativeEffect);
  var renderStateX_2 = /* @__PURE__ */ renderStateX_(applicativeEffect);
  var tailRecM3 = /* @__PURE__ */ tailRecM(monadRecEffect);
  var voidLeft3 = /* @__PURE__ */ voidLeft(functorEffect);
  var bind13 = /* @__PURE__ */ bind(bindAff);
  var liftEffect1 = /* @__PURE__ */ liftEffect(monadEffectEffect);
  var newLifecycleHandlers = /* @__PURE__ */ function() {
    return $$new({
      initializers: Nil.value,
      finalizers: Nil.value
    });
  }();
  var handlePending = function(ref2) {
    return function __do2() {
      var queue = read(ref2)();
      write(Nothing.value)(ref2)();
      return for_2(queue)(function() {
        var $59 = traverse_5(fork4);
        return function($60) {
          return handleAff($59(reverse2($60)));
        };
      }())();
    };
  };
  var cleanupSubscriptionsAndForks = function(v) {
    return function __do2() {
      bindFlipped7(traverse_23(traverse_33(unsubscribe)))(read(v.subscriptions))();
      write(Nothing.value)(v.subscriptions)();
      bindFlipped7(traverse_33(function() {
        var $61 = killFiber(error("finalized"));
        return function($62) {
          return handleAff($61($62));
        };
      }()))(read(v.forks))();
      return write(empty2)(v.forks)();
    };
  };
  var runUI = function(renderSpec2) {
    return function(component3) {
      return function(i2) {
        var squashChildInitializers = function(lchs) {
          return function(preInits) {
            return unDriverStateX(function(st) {
              var parentInitializer = evalM(render2)(st.selfRef)(st["component"]["eval"](new Initialize(unit)));
              return modify_2(function(handlers) {
                return {
                  initializers: new Cons(discard22(parSequence_3(reverse2(handlers.initializers)))(function() {
                    return discard22(parentInitializer)(function() {
                      return liftEffect5(function __do2() {
                        handlePending(st.pendingQueries)();
                        return handlePending(st.pendingOuts)();
                      });
                    });
                  }), preInits),
                  finalizers: handlers.finalizers
                };
              })(lchs);
            });
          };
        };
        var runComponent = function(lchs) {
          return function(handler3) {
            return function(j) {
              return unComponent(function(c) {
                return function __do2() {
                  var lchs$prime = newLifecycleHandlers();
                  var $$var2 = initDriverState(c)(j)(handler3)(lchs$prime)();
                  var pre2 = read(lchs)();
                  write({
                    initializers: Nil.value,
                    finalizers: pre2.finalizers
                  })(lchs)();
                  bindFlipped7(unDriverStateX(function() {
                    var $63 = render2(lchs);
                    return function($64) {
                      return $63(function(v) {
                        return v.selfRef;
                      }($64));
                    };
                  }()))(read($$var2))();
                  bindFlipped7(squashChildInitializers(lchs)(pre2.initializers))(read($$var2))();
                  return $$var2;
                };
              });
            };
          };
        };
        var renderChild = function(lchs) {
          return function(handler3) {
            return function(childrenInRef) {
              return function(childrenOutRef) {
                return unComponentSlot(function(slot3) {
                  return function __do2() {
                    var childrenIn = map20(slot3.pop)(read(childrenInRef))();
                    var $$var2 = function() {
                      if (childrenIn instanceof Just) {
                        write(childrenIn.value0.value1)(childrenInRef)();
                        var dsx = read(childrenIn.value0.value0)();
                        unDriverStateX(function(st) {
                          return function __do3() {
                            flip(write)(st.handlerRef)(function() {
                              var $65 = maybe(pure12(unit))(handler3);
                              return function($66) {
                                return $65(slot3.output($66));
                              };
                            }())();
                            return handleAff(evalM(render2)(st.selfRef)(st["component"]["eval"](new Receive(slot3.input, unit))))();
                          };
                        })(dsx)();
                        return childrenIn.value0.value0;
                      }
                      ;
                      if (childrenIn instanceof Nothing) {
                        return runComponent(lchs)(function() {
                          var $67 = maybe(pure12(unit))(handler3);
                          return function($68) {
                            return $67(slot3.output($68));
                          };
                        }())(slot3.input)(slot3.component)();
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 213, column 14 - line 222, column 98): " + [childrenIn.constructor.name]);
                    }();
                    var isDuplicate = map20(function($69) {
                      return isJust(slot3.get($69));
                    })(read(childrenOutRef))();
                    when2(isDuplicate)(warn("Halogen: Duplicate slot address was detected during rendering, unexpected results may occur"))();
                    modify_2(slot3.set($$var2))(childrenOutRef)();
                    return bind5(read($$var2))(renderStateX2(function(v) {
                      if (v instanceof Nothing) {
                        return $$throw("Halogen internal error: child was not initialized in renderChild");
                      }
                      ;
                      if (v instanceof Just) {
                        return pure8(renderSpec2.renderChild(v.value0));
                      }
                      ;
                      throw new Error("Failed pattern match at Halogen.Aff.Driver (line 227, column 37 - line 229, column 50): " + [v.constructor.name]);
                    }))();
                  };
                });
              };
            };
          };
        };
        var render2 = function(lchs) {
          return function($$var2) {
            return function __do2() {
              var v = read($$var2)();
              var shouldProcessHandlers = map20(isNothing)(read(v.pendingHandlers))();
              when2(shouldProcessHandlers)(write(new Just(Nil.value))(v.pendingHandlers))();
              write(empty3)(v.childrenOut)();
              write(v.children)(v.childrenIn)();
              var handler3 = function() {
                var $70 = queueOrRun(v.pendingHandlers);
                var $71 = evalF(render2)(v.selfRef);
                return function($72) {
                  return $70($$void6($71($72)));
                };
              }();
              var childHandler = function() {
                var $73 = queueOrRun(v.pendingQueries);
                return function($74) {
                  return $73(handler3(Action.create($74)));
                };
              }();
              var rendering = renderSpec2.render(function($75) {
                return handleAff(handler3($75));
              })(renderChild(lchs)(childHandler)(v.childrenIn)(v.childrenOut))(v.component.render(v.state))(v.rendering)();
              var children2 = read(v.childrenOut)();
              var childrenIn = read(v.childrenIn)();
              foreachSlot2(childrenIn)(function(v1) {
                return function __do3() {
                  var childDS = read(v1)();
                  renderStateX_2(renderSpec2.removeChild)(childDS)();
                  return finalize(lchs)(childDS)();
                };
              })();
              flip(modify_2)(v.selfRef)(mapDriverState(function(ds$prime) {
                return {
                  component: ds$prime.component,
                  state: ds$prime.state,
                  refs: ds$prime.refs,
                  childrenIn: ds$prime.childrenIn,
                  childrenOut: ds$prime.childrenOut,
                  selfRef: ds$prime.selfRef,
                  handlerRef: ds$prime.handlerRef,
                  pendingQueries: ds$prime.pendingQueries,
                  pendingOuts: ds$prime.pendingOuts,
                  pendingHandlers: ds$prime.pendingHandlers,
                  fresh: ds$prime.fresh,
                  subscriptions: ds$prime.subscriptions,
                  forks: ds$prime.forks,
                  lifecycleHandlers: ds$prime.lifecycleHandlers,
                  rendering: new Just(rendering),
                  children: children2
                };
              }))();
              return when2(shouldProcessHandlers)(flip(tailRecM3)(unit)(function(v1) {
                return function __do3() {
                  var handlers = read(v.pendingHandlers)();
                  write(new Just(Nil.value))(v.pendingHandlers)();
                  traverse_23(function() {
                    var $76 = traverse_5(fork4);
                    return function($77) {
                      return handleAff($76(reverse2($77)));
                    };
                  }())(handlers)();
                  var mmore = read(v.pendingHandlers)();
                  var $52 = maybe(false)($$null2)(mmore);
                  if ($52) {
                    return voidLeft3(write(Nothing.value)(v.pendingHandlers))(new Done(unit))();
                  }
                  ;
                  return new Loop(unit);
                };
              }))();
            };
          };
        };
        var finalize = function(lchs) {
          return unDriverStateX(function(st) {
            return function __do2() {
              cleanupSubscriptionsAndForks(st)();
              var f = evalM(render2)(st.selfRef)(st["component"]["eval"](new Finalize(unit)));
              modify_2(function(handlers) {
                return {
                  initializers: handlers.initializers,
                  finalizers: new Cons(f, handlers.finalizers)
                };
              })(lchs)();
              return foreachSlot2(st.children)(function(v) {
                return function __do3() {
                  var dsx = read(v)();
                  return finalize(lchs)(dsx)();
                };
              })();
            };
          });
        };
        var evalDriver = function(disposed) {
          return function(ref2) {
            return function(q2) {
              return bind13(liftEffect5(read(disposed)))(function(v) {
                if (v) {
                  return pure12(Nothing.value);
                }
                ;
                return evalQ(render2)(ref2)(q2);
              });
            };
          };
        };
        var dispose = function(disposed) {
          return function(lchs) {
            return function(dsx) {
              return handleLifecycle(lchs)(function __do2() {
                var v = read(disposed)();
                if (v) {
                  return unit;
                }
                ;
                write(true)(disposed)();
                finalize(lchs)(dsx)();
                return unDriverStateX(function(v1) {
                  return function __do3() {
                    var v2 = liftEffect1(read(v1.selfRef))();
                    return for_2(v2.rendering)(renderSpec2.dispose)();
                  };
                })(dsx)();
              });
            };
          };
        };
        return bind13(liftEffect5(newLifecycleHandlers))(function(lchs) {
          return bind13(liftEffect5($$new(false)))(function(disposed) {
            return handleLifecycle(lchs)(function __do2() {
              var sio = create3();
              var dsx = bindFlipped7(read)(runComponent(lchs)(function() {
                var $78 = notify(sio.listener);
                return function($79) {
                  return liftEffect5($78($79));
                };
              }())(i2)(component3))();
              return unDriverStateX(function(st) {
                return pure8({
                  query: evalDriver(disposed)(st.selfRef),
                  messages: sio.emitter,
                  dispose: dispose(disposed)(lchs)(dsx)
                });
              })(dsx)();
            });
          });
        });
      };
    };
  };

  // output/Web.DOM.Node/foreign.js
  var getEffProp2 = function(name15) {
    return function(node) {
      return function() {
        return node[name15];
      };
    };
  };
  var baseURI = getEffProp2("baseURI");
  var _ownerDocument = getEffProp2("ownerDocument");
  var _parentNode = getEffProp2("parentNode");
  var _parentElement = getEffProp2("parentElement");
  var childNodes = getEffProp2("childNodes");
  var _firstChild = getEffProp2("firstChild");
  var _lastChild = getEffProp2("lastChild");
  var _previousSibling = getEffProp2("previousSibling");
  var _nextSibling = getEffProp2("nextSibling");
  var _nodeValue = getEffProp2("nodeValue");
  var textContent = getEffProp2("textContent");
  function insertBefore(node1) {
    return function(node2) {
      return function(parent2) {
        return function() {
          parent2.insertBefore(node1, node2);
        };
      };
    };
  }
  function appendChild(node) {
    return function(parent2) {
      return function() {
        parent2.appendChild(node);
      };
    };
  }
  function removeChild2(node) {
    return function(parent2) {
      return function() {
        parent2.removeChild(node);
      };
    };
  }

  // output/Web.DOM.Node/index.js
  var map21 = /* @__PURE__ */ map(functorEffect);
  var parentNode2 = /* @__PURE__ */ function() {
    var $6 = map21(toMaybe);
    return function($7) {
      return $6(_parentNode($7));
    };
  }();
  var nextSibling = /* @__PURE__ */ function() {
    var $15 = map21(toMaybe);
    return function($16) {
      return $15(_nextSibling($16));
    };
  }();

  // output/Halogen.VDom.Driver/index.js
  var $runtime_lazy9 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var $$void7 = /* @__PURE__ */ $$void(functorEffect);
  var pure9 = /* @__PURE__ */ pure(applicativeEffect);
  var traverse_6 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
  var unwrap4 = /* @__PURE__ */ unwrap();
  var when3 = /* @__PURE__ */ when(applicativeEffect);
  var not2 = /* @__PURE__ */ not(/* @__PURE__ */ heytingAlgebraFunction(/* @__PURE__ */ heytingAlgebraFunction(heytingAlgebraBoolean)));
  var identity8 = /* @__PURE__ */ identity(categoryFn);
  var bind14 = /* @__PURE__ */ bind(bindAff);
  var liftEffect6 = /* @__PURE__ */ liftEffect(monadEffectAff);
  var map23 = /* @__PURE__ */ map(functorEffect);
  var bindFlipped8 = /* @__PURE__ */ bindFlipped(bindEffect);
  var substInParent = function(v) {
    return function(v1) {
      return function(v2) {
        if (v1 instanceof Just && v2 instanceof Just) {
          return $$void7(insertBefore(v)(v1.value0)(v2.value0));
        }
        ;
        if (v1 instanceof Nothing && v2 instanceof Just) {
          return $$void7(appendChild(v)(v2.value0));
        }
        ;
        return pure9(unit);
      };
    };
  };
  var removeChild3 = function(v) {
    return function __do2() {
      var npn = parentNode2(v.node)();
      return traverse_6(function(pn) {
        return removeChild2(v.node)(pn);
      })(npn)();
    };
  };
  var mkSpec = function(handler3) {
    return function(renderChildRef) {
      return function(document3) {
        var getNode = unRenderStateX(function(v) {
          return v.node;
        });
        var done = function(st) {
          if (st instanceof Just) {
            return halt(st.value0);
          }
          ;
          return unit;
        };
        var buildWidget2 = function(spec) {
          var buildThunk2 = buildThunk(unwrap4)(spec);
          var $lazy_patch = $runtime_lazy9("patch", "Halogen.VDom.Driver", function() {
            return function(st, slot3) {
              if (st instanceof Just) {
                if (slot3 instanceof ComponentSlot) {
                  halt(st.value0);
                  return $lazy_renderComponentSlot(100)(slot3.value0);
                }
                ;
                if (slot3 instanceof ThunkSlot) {
                  var step$prime = step2(st.value0, slot3.value0);
                  return mkStep(new Step(extract2(step$prime), new Just(step$prime), $lazy_patch(103), done));
                }
                ;
                throw new Error("Failed pattern match at Halogen.VDom.Driver (line 97, column 22 - line 103, column 79): " + [slot3.constructor.name]);
              }
              ;
              return $lazy_render(104)(slot3);
            };
          });
          var $lazy_render = $runtime_lazy9("render", "Halogen.VDom.Driver", function() {
            return function(slot3) {
              if (slot3 instanceof ComponentSlot) {
                return $lazy_renderComponentSlot(86)(slot3.value0);
              }
              ;
              if (slot3 instanceof ThunkSlot) {
                var step4 = buildThunk2(slot3.value0);
                return mkStep(new Step(extract2(step4), new Just(step4), $lazy_patch(89), done));
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 84, column 7 - line 89, column 75): " + [slot3.constructor.name]);
            };
          });
          var $lazy_renderComponentSlot = $runtime_lazy9("renderComponentSlot", "Halogen.VDom.Driver", function() {
            return function(cs) {
              var renderChild = read(renderChildRef)();
              var rsx = renderChild(cs)();
              var node = getNode(rsx);
              return mkStep(new Step(node, Nothing.value, $lazy_patch(117), done));
            };
          });
          var patch = $lazy_patch(91);
          var render2 = $lazy_render(82);
          var renderComponentSlot = $lazy_renderComponentSlot(109);
          return render2;
        };
        var buildAttributes = buildProp(handler3);
        return {
          buildWidget: buildWidget2,
          buildAttributes,
          document: document3
        };
      };
    };
  };
  var renderSpec = function(document3) {
    return function(container) {
      var render2 = function(handler3) {
        return function(child) {
          return function(v) {
            return function(v1) {
              if (v1 instanceof Nothing) {
                return function __do2() {
                  var renderChildRef = $$new(child)();
                  var spec = mkSpec(handler3)(renderChildRef)(document3);
                  var machine = buildVDom(spec)(v);
                  var node = extract2(machine);
                  $$void7(appendChild(node)(toNode(container)))();
                  return {
                    machine,
                    node,
                    renderChildRef
                  };
                };
              }
              ;
              if (v1 instanceof Just) {
                return function __do2() {
                  write(child)(v1.value0.renderChildRef)();
                  var parent2 = parentNode2(v1.value0.node)();
                  var nextSib = nextSibling(v1.value0.node)();
                  var machine$prime = step2(v1.value0.machine, v);
                  var newNode = extract2(machine$prime);
                  when3(not2(unsafeRefEq)(v1.value0.node)(newNode))(substInParent(newNode)(nextSib)(parent2))();
                  return {
                    machine: machine$prime,
                    node: newNode,
                    renderChildRef: v1.value0.renderChildRef
                  };
                };
              }
              ;
              throw new Error("Failed pattern match at Halogen.VDom.Driver (line 157, column 5 - line 173, column 80): " + [v1.constructor.name]);
            };
          };
        };
      };
      return {
        render: render2,
        renderChild: identity8,
        removeChild: removeChild3,
        dispose: removeChild3
      };
    };
  };
  var runUI2 = function(component3) {
    return function(i2) {
      return function(element3) {
        return bind14(liftEffect6(map23(toDocument)(bindFlipped8(document2)(windowImpl))))(function(document3) {
          return runUI(renderSpec(document3)(element3))(component3)(i2);
        });
      };
    };
  };

  // output/JSURI/foreign.js
  function encodeURIComponent_to_RFC3986(input3) {
    return input3.replace(/[!'()*]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  }
  function _encodeURIComponent(fail3, succeed, input3) {
    try {
      return succeed(encodeURIComponent_to_RFC3986(encodeURIComponent(input3)));
    } catch (err) {
      return fail3(err);
    }
  }
  function _decodeURIComponent(fail3, succeed, input3) {
    try {
      return succeed(decodeURIComponent(input3));
    } catch (err) {
      return fail3(err);
    }
  }

  // output/JSURI/index.js
  var $$encodeURIComponent = /* @__PURE__ */ function() {
    return runFn3(_encodeURIComponent)($$const(Nothing.value))(Just.create);
  }();
  var $$decodeURIComponent = /* @__PURE__ */ function() {
    return runFn3(_decodeURIComponent)($$const(Nothing.value))(Just.create);
  }();

  // output/ModularBlog.Common.MuEditor/index.js
  var identity9 = /* @__PURE__ */ identity(categoryFn);
  var value13 = /* @__PURE__ */ value12(isPropString);
  var fold3 = /* @__PURE__ */ fold2(monoidArray);
  var show2 = /* @__PURE__ */ show(showString);
  var map24 = /* @__PURE__ */ map(functorArray);
  var append12 = /* @__PURE__ */ append(semigroupArray);
  var bind6 = /* @__PURE__ */ bind(bindMaybe);
  var discard6 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
  var modify_3 = /* @__PURE__ */ modify_(monadStateHalogenM);
  var pure10 = /* @__PURE__ */ pure(applicativeHalogenM);
  var put2 = /* @__PURE__ */ put(monadStateHalogenM);
  var Updated = /* @__PURE__ */ function() {
    function Updated2(value0) {
      this.value0 = value0;
    }
    ;
    Updated2.create = function(value0) {
      return new Updated2(value0);
    };
    return Updated2;
  }();
  var Put_Action = /* @__PURE__ */ function() {
    function Put_Action2(value0) {
      this.value0 = value0;
    }
    ;
    Put_Action2.create = function(value0) {
      return new Put_Action2(value0);
    };
    return Put_Action2;
  }();
  var Receive_Action = /* @__PURE__ */ function() {
    function Receive_Action2(value0) {
      this.value0 = value0;
    }
    ;
    Receive_Action2.create = function(value0) {
      return new Receive_Action2(value0);
    };
    return Receive_Action2;
  }();
  var genericArgs_EditableNoArg = {
    genericArgs_render: function(_wrap) {
      return function(v) {
        return [];
      };
    },
    genericArgs_default: function(v) {
      return NoArguments.value;
    }
  };
  var editableVoid = {
    "render'": function(v) {
      return absurd;
    },
    "default": function(v) {
      return unsafeCrashWith("cannot create a default term of type Void");
    }
  };
  var editableString = {
    "render'": function(wrap3) {
      return function(s) {
        return new Tuple([new Tuple("String", new Tuple(true, defer3(function(v) {
          return wrap3(s);
        })))], [textarea([class_("Editable-String"), onChange(function(event) {
          var s$prime = unsafePerformEffect(value11(maybe$prime(function(v) {
            return unsafeCrashWith("event target couldn't be converted into a HTMLSelectElement");
          })(identity9)(fromEventTarget2(maybe$prime(function(v) {
            return unsafeCrashWith("even did not have an event target");
          })(identity9)(target5(event))))));
          return new Put_Action(wrap3(s$prime));
        }), value13(s)])]);
      };
    },
    "default": function(v) {
      return "";
    }
  };
  var unSum = function(f) {
    return function(g) {
      return function(v) {
        if (v instanceof Inl) {
          return f(v.value0);
        }
        ;
        if (v instanceof Inr) {
          return g(v.value0);
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.Common.MuEditor (line 265, column 13 - line 267, column 15): " + [v.constructor.name]);
      };
    };
  };
  var render$prime = function(dict) {
    return dict["render'"];
  };
  var render = function(dictEditable) {
    var render$prime1 = render$prime(dictEditable);
    return function(wrap3) {
      return function(a2) {
        var v = render$prime1(wrap3)(a2);
        return div2([class_("Editable-Constructor")])(fold3([function() {
          var $136 = length(v.value0) === 1;
          if ($136) {
            return [];
          }
          ;
          return [select3([onValueChange(function(name15) {
            return function(v1) {
              return new Put_Action(force(v1.value1.value1));
            }(maybe$prime(function(v1) {
              return unsafeCrashWith("unrecognized constructor name: " + show2(name15));
            })(identity9)(find2(function(v1) {
              return name15 === v1.value0;
            })(v.value0)));
          }), onChange(function(event) {
            var name15 = unsafePerformEffect(value10(maybe$prime(function(v1) {
              return unsafeCrashWith("event target couldn't be converted into a HTMLSelectElement");
            })(identity9)(fromEventTarget(maybe$prime(function(v1) {
              return unsafeCrashWith("even did not have an event target");
            })(identity9)(target5(event))))));
            return function(v1) {
              return new Put_Action(force(v1.value1.value1));
            }(maybe$prime(function(v1) {
              return unsafeCrashWith("unrecognized constructor name: " + show2(name15));
            })(identity9)(find2(function(v1) {
              return name15 === v1.value0;
            })(v.value0)));
          })])(map24(function(v1) {
            return option([value13(v1.value0), selected2(v1.value1.value0)])([text5(v1.value0)]);
          })(v.value0))];
        }(), function() {
          var $158 = length(v.value1) === 0;
          if ($158) {
            return [];
          }
          ;
          var $159 = length(v.value0) === 1;
          if ($159) {
            return v.value1;
          }
          ;
          return [div2([class_("Editable-Args")])(v.value1)];
        }()]));
      };
    };
  };
  var generic_renderOptions$prime = function(dict) {
    return dict["generic_renderOptions'"];
  };
  var generic_render$prime = function(dict) {
    return dict["generic_render'"];
  };
  var generic_render = function(dictGeneric) {
    var from3 = from(dictGeneric);
    var to2 = to(dictGeneric);
    return function(dictGeneric_Editable) {
      var generic_renderOptions$prime1 = generic_renderOptions$prime(dictGeneric_Editable);
      var generic_render$prime1 = generic_render$prime(dictGeneric_Editable);
      return function(wrap3) {
        return function(a2) {
          var rep = from3(a2);
          return new Tuple(generic_renderOptions$prime1(new Just(rep))(function($198) {
            return wrap3(to2($198));
          }), generic_render$prime1(function($199) {
            return wrap3(to2($199));
          })(rep));
        };
      };
    };
  };
  var generic_default$prime = function(dict) {
    return dict["generic_default'"];
  };
  var generic_EditableSum = function(dictGeneric_Editable) {
    var generic_render$prime1 = generic_render$prime(dictGeneric_Editable);
    var generic_renderOptions$prime1 = generic_renderOptions$prime(dictGeneric_Editable);
    var generic_default$prime1 = generic_default$prime(dictGeneric_Editable);
    return function(dictGeneric_Editable1) {
      var generic_render$prime2 = generic_render$prime(dictGeneric_Editable1);
      var generic_renderOptions$prime2 = generic_renderOptions$prime(dictGeneric_Editable1);
      return {
        "generic_render'": function(wrap3) {
          return function(v) {
            if (v instanceof Inl) {
              return generic_render$prime1(function($200) {
                return wrap3(Inl.create($200));
              })(v.value0);
            }
            ;
            if (v instanceof Inr) {
              return generic_render$prime2(function($201) {
                return wrap3(Inr.create($201));
              })(v.value0);
            }
            ;
            throw new Error("Failed pattern match at ModularBlog.Common.MuEditor (line 256, column 26 - line 258, column 46): " + [v.constructor.name]);
          };
        },
        "generic_renderOptions'": function(mb_sum) {
          return function(wrap3) {
            return append12(generic_renderOptions$prime1(bind6(mb_sum)(unSum(Just.create)($$const(Nothing.value))))(function($202) {
              return wrap3(Inl.create($202));
            }))(generic_renderOptions$prime2(bind6(mb_sum)(unSum($$const(Nothing.value))(Just.create)))(function($203) {
              return wrap3(Inr.create($203));
            }));
          };
        },
        "generic_default'": function(v) {
          return new Inl(generic_default$prime1($$Proxy.value));
        }
      };
    };
  };
  var generic_default = function(dictGeneric) {
    var to2 = to(dictGeneric);
    return function(dictGeneric_Editable) {
      var generic_default$prime1 = generic_default$prime(dictGeneric_Editable);
      return function(v) {
        return to2(generic_default$prime1($$Proxy.value));
      };
    };
  };
  var genericArgs_render = function(dict) {
    return dict.genericArgs_render;
  };
  var genericArgs_default = function(dict) {
    return dict.genericArgs_default;
  };
  var genericArgs_EditableProdu = function(dictGenericArgs_Editable) {
    var genericArgs_render1 = genericArgs_render(dictGenericArgs_Editable);
    var genericArgs_default1 = genericArgs_default(dictGenericArgs_Editable);
    return function(dictGenericArgs_Editable1) {
      var genericArgs_render2 = genericArgs_render(dictGenericArgs_Editable1);
      var genericArgs_default2 = genericArgs_default(dictGenericArgs_Editable1);
      return {
        genericArgs_render: function(wrap3) {
          return function(v) {
            var bs = genericArgs_render2(function($204) {
              return wrap3(function(v1) {
                return new Product(v.value0, v1);
              }($204));
            })(v.value1);
            var as = genericArgs_render1(function($205) {
              return wrap3(function(v1) {
                return new Product(v1, v.value1);
              }($205));
            })(v.value0);
            return append12(as)(bs);
          };
        },
        genericArgs_default: function(v) {
          return new Product(genericArgs_default1($$Proxy.value), genericArgs_default2($$Proxy.value));
        }
      };
    };
  };
  var generic_EditableConstruct = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function(dictGenericArgs_Editable) {
      var genericArgs_render1 = genericArgs_render(dictGenericArgs_Editable);
      var genericArgs_default1 = genericArgs_default(dictGenericArgs_Editable);
      return {
        "generic_render'": function(wrap3) {
          return function(v) {
            return genericArgs_render1(function($206) {
              return wrap3(Constructor($206));
            })(v);
          };
        },
        "generic_renderOptions'": function(mb_a) {
          return function(wrap3) {
            var name15 = reflectSymbol2($$Proxy.value);
            return [new Tuple(name15, new Tuple(isJust(mb_a), defer3(function(v) {
              return wrap3(generic_default$prime(generic_EditableConstruct(dictIsSymbol)(dictGenericArgs_Editable))($$Proxy.value));
            })))];
          };
        },
        "generic_default'": function(v) {
          return genericArgs_default1($$Proxy.value);
        }
      };
    };
  };
  var $$default = function(dict) {
    return dict["default"];
  };
  var editableList = function(dictEditable) {
    var default1 = $$default(dictEditable);
    var render1 = render(dictEditable);
    return {
      "render'": function(wrap3) {
        return function(l) {
          var html2 = function() {
            if (l instanceof Nil) {
              return div2([])([button([style(""), onClick(function(v) {
                return new Put_Action(wrap3(new Cons(default1($$Proxy.value), l)));
              })])([text5("\u2795")])]);
            }
            ;
            if (l instanceof Cons) {
              return div2([class_("Editable-List-Cons")])([div2([style("display: flex; flex-direction: row; gap: 0.5em")])([button([style(""), onClick(function(v) {
                return new Put_Action(wrap3(new Cons(default1($$Proxy.value), l)));
              })])([text5("\u2795")]), button([style(""), onClick(function(v) {
                return new Put_Action(wrap3(l.value1));
              })])([text5("\u2796")])]), render1(function($207) {
                return wrap3(function(v) {
                  return new Cons(v, l.value1);
                }($207));
              })(l.value0), render(editableList(dictEditable))(function($208) {
                return wrap3(function(v) {
                  return new Cons(l.value0, v);
                }($208));
              })(l.value1)]);
            }
            ;
            throw new Error("Failed pattern match at ModularBlog.Common.MuEditor (line 167, column 14 - line 195, column 14): " + [l.constructor.name]);
          }();
          return new Tuple([new Tuple("List", new Tuple(true, defer3(function(v) {
            return wrap3(l);
          })))], [html2]);
        };
      },
      "default": function(v) {
        return Nil.value;
      }
    };
  };
  var genericArgs_EditableArgum = function(dictEditable) {
    var render1 = render(dictEditable);
    var default1 = $$default(dictEditable);
    return {
      genericArgs_render: function(wrap3) {
        return function(v) {
          return [render1(function($209) {
            return wrap3(Argument($209));
          })(v)];
        };
      },
      genericArgs_default: function(v) {
        return default1($$Proxy.value);
      }
    };
  };
  var component = function(dictEditable) {
    var render1 = render(dictEditable);
    var renderComponent = function(v) {
      return render1(identity9)(v.val);
    };
    var initialState = function(v) {
      return {
        val: v.val
      };
    };
    var handleQuery = function(v) {
      return discard6(modify_3(function(v1) {
        var $187 = {};
        for (var $188 in v1) {
          if ({}.hasOwnProperty.call(v1, $188)) {
            $187[$188] = v1[$188];
          }
          ;
        }
        ;
        $187.val = v.value0;
        return $187;
      }))(function() {
        return pure10(new Just(v.value1));
      });
    };
    var handleAction = function(v) {
      if (v instanceof Put_Action) {
        return discard6(modify_3(function(v1) {
          var $193 = {};
          for (var $194 in v1) {
            if ({}.hasOwnProperty.call(v1, $194)) {
              $193[$194] = v1[$194];
            }
            ;
          }
          ;
          $193.val = v.value0;
          return $193;
        }))(function() {
          return raise(new Updated(v.value0));
        });
      }
      ;
      if (v instanceof Receive_Action) {
        return put2(initialState(v.value0));
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.MuEditor (line 62, column 18 - line 66, column 55): " + [v.constructor.name]);
    };
    var $$eval = mkEval({
      initialize: defaultEval.initialize,
      finalize: defaultEval.finalize,
      receive: function($210) {
        return Just.create(Receive_Action.create($210));
      },
      handleQuery,
      handleAction
    });
    return mkComponent({
      initialState,
      "eval": $$eval,
      render: renderComponent
    });
  };

  // output/Data.String.CodePoints/foreign.js
  var hasArrayFrom = typeof Array.from === "function";
  var hasStringIterator = typeof Symbol !== "undefined" && Symbol != null && typeof Symbol.iterator !== "undefined" && typeof String.prototype[Symbol.iterator] === "function";
  var hasFromCodePoint = typeof String.prototype.fromCodePoint === "function";
  var hasCodePointAt = typeof String.prototype.codePointAt === "function";
  var _unsafeCodePointAt0 = function(fallback) {
    return hasCodePointAt ? function(str) {
      return str.codePointAt(0);
    } : fallback;
  };
  var _codePointAt = function(fallback) {
    return function(Just2) {
      return function(Nothing2) {
        return function(unsafeCodePointAt02) {
          return function(index4) {
            return function(str) {
              var length9 = str.length;
              if (index4 < 0 || index4 >= length9) return Nothing2;
              if (hasStringIterator) {
                var iter = str[Symbol.iterator]();
                for (var i2 = index4; ; --i2) {
                  var o = iter.next();
                  if (o.done) return Nothing2;
                  if (i2 === 0) return Just2(unsafeCodePointAt02(o.value));
                }
              }
              return fallback(index4)(str);
            };
          };
        };
      };
    };
  };
  var _fromCodePointArray = function(singleton8) {
    return hasFromCodePoint ? function(cps) {
      if (cps.length < 1e4) {
        return String.fromCodePoint.apply(String, cps);
      }
      return cps.map(singleton8).join("");
    } : function(cps) {
      return cps.map(singleton8).join("");
    };
  };
  var _singleton = function(fallback) {
    return hasFromCodePoint ? String.fromCodePoint : fallback;
  };
  var _take = function(fallback) {
    return function(n) {
      if (hasStringIterator) {
        return function(str) {
          var accum = "";
          var iter = str[Symbol.iterator]();
          for (var i2 = 0; i2 < n; ++i2) {
            var o = iter.next();
            if (o.done) return accum;
            accum += o.value;
          }
          return accum;
        };
      }
      return fallback(n);
    };
  };
  var _toCodePointArray = function(fallback) {
    return function(unsafeCodePointAt02) {
      if (hasArrayFrom) {
        return function(str) {
          return Array.from(str, unsafeCodePointAt02);
        };
      }
      return fallback;
    };
  };

  // output/Data.String.CodePoints/index.js
  var $runtime_lazy10 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var fromEnum2 = /* @__PURE__ */ fromEnum(boundedEnumChar);
  var map25 = /* @__PURE__ */ map(functorMaybe);
  var unfoldr2 = /* @__PURE__ */ unfoldr(unfoldableArray);
  var div3 = /* @__PURE__ */ div(euclideanRingInt);
  var mod2 = /* @__PURE__ */ mod(euclideanRingInt);
  var compare2 = /* @__PURE__ */ compare(ordInt);
  var CodePoint = function(x) {
    return x;
  };
  var unsurrogate = function(lead) {
    return function(trail) {
      return (((lead - 55296 | 0) * 1024 | 0) + (trail - 56320 | 0) | 0) + 65536 | 0;
    };
  };
  var isTrail = function(cu) {
    return 56320 <= cu && cu <= 57343;
  };
  var isLead = function(cu) {
    return 55296 <= cu && cu <= 56319;
  };
  var uncons4 = function(s) {
    var v = length5(s);
    if (v === 0) {
      return Nothing.value;
    }
    ;
    if (v === 1) {
      return new Just({
        head: fromEnum2(charAt(0)(s)),
        tail: ""
      });
    }
    ;
    var cu1 = fromEnum2(charAt(1)(s));
    var cu0 = fromEnum2(charAt(0)(s));
    var $43 = isLead(cu0) && isTrail(cu1);
    if ($43) {
      return new Just({
        head: unsurrogate(cu0)(cu1),
        tail: drop2(2)(s)
      });
    }
    ;
    return new Just({
      head: cu0,
      tail: drop2(1)(s)
    });
  };
  var unconsButWithTuple = function(s) {
    return map25(function(v) {
      return new Tuple(v.head, v.tail);
    })(uncons4(s));
  };
  var toCodePointArrayFallback = function(s) {
    return unfoldr2(unconsButWithTuple)(s);
  };
  var unsafeCodePointAt0Fallback = function(s) {
    var cu0 = fromEnum2(charAt(0)(s));
    var $47 = isLead(cu0) && length5(s) > 1;
    if ($47) {
      var cu1 = fromEnum2(charAt(1)(s));
      var $48 = isTrail(cu1);
      if ($48) {
        return unsurrogate(cu0)(cu1);
      }
      ;
      return cu0;
    }
    ;
    return cu0;
  };
  var unsafeCodePointAt0 = /* @__PURE__ */ _unsafeCodePointAt0(unsafeCodePointAt0Fallback);
  var toCodePointArray = /* @__PURE__ */ _toCodePointArray(toCodePointArrayFallback)(unsafeCodePointAt0);
  var length8 = function($74) {
    return length(toCodePointArray($74));
  };
  var fromCharCode2 = /* @__PURE__ */ function() {
    var $75 = toEnumWithDefaults(boundedEnumChar)(bottom(boundedChar))(top(boundedChar));
    return function($76) {
      return singleton5($75($76));
    };
  }();
  var singletonFallback = function(v) {
    if (v <= 65535) {
      return fromCharCode2(v);
    }
    ;
    var lead = div3(v - 65536 | 0)(1024) + 55296 | 0;
    var trail = mod2(v - 65536 | 0)(1024) + 56320 | 0;
    return fromCharCode2(lead) + fromCharCode2(trail);
  };
  var fromCodePointArray = /* @__PURE__ */ _fromCodePointArray(singletonFallback);
  var singleton6 = /* @__PURE__ */ _singleton(singletonFallback);
  var takeFallback = function(v) {
    return function(v1) {
      if (v < 1) {
        return "";
      }
      ;
      var v2 = uncons4(v1);
      if (v2 instanceof Just) {
        return singleton6(v2.value0.head) + takeFallback(v - 1 | 0)(v2.value0.tail);
      }
      ;
      return v1;
    };
  };
  var take3 = /* @__PURE__ */ _take(takeFallback);
  var eqCodePoint = {
    eq: function(x) {
      return function(y) {
        return x === y;
      };
    }
  };
  var ordCodePoint = {
    compare: function(x) {
      return function(y) {
        return compare2(x)(y);
      };
    },
    Eq0: function() {
      return eqCodePoint;
    }
  };
  var drop4 = function(n) {
    return function(s) {
      return drop2(length5(take3(n)(s)))(s);
    };
  };
  var codePointFromChar = function($77) {
    return CodePoint(fromEnum2($77));
  };
  var codePointAtFallback = function($copy_n) {
    return function($copy_s) {
      var $tco_var_n = $copy_n;
      var $tco_done = false;
      var $tco_result;
      function $tco_loop(n, s) {
        var v = uncons4(s);
        if (v instanceof Just) {
          var $66 = n === 0;
          if ($66) {
            $tco_done = true;
            return new Just(v.value0.head);
          }
          ;
          $tco_var_n = n - 1 | 0;
          $copy_s = v.value0.tail;
          return;
        }
        ;
        $tco_done = true;
        return Nothing.value;
      }
      ;
      while (!$tco_done) {
        $tco_result = $tco_loop($tco_var_n, $copy_s);
      }
      ;
      return $tco_result;
    };
  };
  var codePointAt = function(v) {
    return function(v1) {
      if (v < 0) {
        return Nothing.value;
      }
      ;
      if (v === 0 && v1 === "") {
        return Nothing.value;
      }
      ;
      if (v === 0) {
        return new Just(unsafeCodePointAt0(v1));
      }
      ;
      return _codePointAt(codePointAtFallback)(Just.create)(Nothing.value)(unsafeCodePointAt0)(v)(v1);
    };
  };
  var boundedCodePoint = {
    bottom: 0,
    top: 1114111,
    Ord0: function() {
      return ordCodePoint;
    }
  };
  var boundedEnumCodePoint = /* @__PURE__ */ function() {
    return {
      cardinality: 1114111 + 1 | 0,
      fromEnum: function(v) {
        return v;
      },
      toEnum: function(n) {
        if (n >= 0 && n <= 1114111) {
          return new Just(n);
        }
        ;
        if (otherwise) {
          return Nothing.value;
        }
        ;
        throw new Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [n.constructor.name]);
      },
      Bounded0: function() {
        return boundedCodePoint;
      },
      Enum1: function() {
        return $lazy_enumCodePoint(0);
      }
    };
  }();
  var $lazy_enumCodePoint = /* @__PURE__ */ $runtime_lazy10("enumCodePoint", "Data.String.CodePoints", function() {
    return {
      succ: defaultSucc(toEnum(boundedEnumCodePoint))(fromEnum(boundedEnumCodePoint)),
      pred: defaultPred(toEnum(boundedEnumCodePoint))(fromEnum(boundedEnumCodePoint)),
      Ord0: function() {
        return ordCodePoint;
      }
    };
  });

  // output/Data.Show.Generic/foreign.js
  var intercalate2 = function(separator) {
    return function(xs) {
      return xs.join(separator);
    };
  };

  // output/Data.Show.Generic/index.js
  var append5 = /* @__PURE__ */ append(semigroupArray);
  var genericShowArgsNoArguments = {
    genericShowArgs: function(v) {
      return [];
    }
  };
  var genericShowArgsArgument = function(dictShow) {
    var show7 = show(dictShow);
    return {
      genericShowArgs: function(v) {
        return [show7(v)];
      }
    };
  };
  var genericShowArgs = function(dict) {
    return dict.genericShowArgs;
  };
  var genericShowConstructor = function(dictGenericShowArgs) {
    var genericShowArgs1 = genericShowArgs(dictGenericShowArgs);
    return function(dictIsSymbol) {
      var reflectSymbol2 = reflectSymbol(dictIsSymbol);
      return {
        "genericShow'": function(v) {
          var ctor = reflectSymbol2($$Proxy.value);
          var v1 = genericShowArgs1(v);
          if (v1.length === 0) {
            return ctor;
          }
          ;
          return "(" + (intercalate2(" ")(append5([ctor])(v1)) + ")");
        }
      };
    };
  };
  var genericShow$prime = function(dict) {
    return dict["genericShow'"];
  };
  var genericShowSum = function(dictGenericShow) {
    var genericShow$prime1 = genericShow$prime(dictGenericShow);
    return function(dictGenericShow1) {
      var genericShow$prime2 = genericShow$prime(dictGenericShow1);
      return {
        "genericShow'": function(v) {
          if (v instanceof Inl) {
            return genericShow$prime1(v.value0);
          }
          ;
          if (v instanceof Inr) {
            return genericShow$prime2(v.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Show.Generic (line 26, column 1 - line 28, column 40): " + [v.constructor.name]);
        }
      };
    };
  };
  var genericShow = function(dictGeneric) {
    var from3 = from(dictGeneric);
    return function(dictGenericShow) {
      var genericShow$prime1 = genericShow$prime(dictGenericShow);
      return function(x) {
        return genericShow$prime1(from3(x));
      };
    };
  };

  // output/Parsing/index.js
  var show3 = /* @__PURE__ */ show(showString);
  var ParseState = /* @__PURE__ */ function() {
    function ParseState2(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    ParseState2.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new ParseState2(value0, value1, value22);
        };
      };
    };
    return ParseState2;
  }();
  var ParseError = /* @__PURE__ */ function() {
    function ParseError2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    ParseError2.create = function(value0) {
      return function(value1) {
        return new ParseError2(value0, value1);
      };
    };
    return ParseError2;
  }();
  var More = /* @__PURE__ */ function() {
    function More2(value0) {
      this.value0 = value0;
    }
    ;
    More2.create = function(value0) {
      return new More2(value0);
    };
    return More2;
  }();
  var Lift3 = /* @__PURE__ */ function() {
    function Lift4(value0) {
      this.value0 = value0;
    }
    ;
    Lift4.create = function(value0) {
      return new Lift4(value0);
    };
    return Lift4;
  }();
  var Stop = /* @__PURE__ */ function() {
    function Stop2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Stop2.create = function(value0) {
      return function(value1) {
        return new Stop2(value0, value1);
      };
    };
    return Stop2;
  }();
  var monadTransParserT = {
    lift: function(dictMonad) {
      var map30 = map(dictMonad.Bind1().Apply0().Functor0());
      return function(m) {
        return function(state1, v, lift$prime, v1, done) {
          return lift$prime(map30(function(a2) {
            return function(v2) {
              return done(state1, a2);
            };
          })(m));
        };
      };
    }
  };
  var genericPosition_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var genericShow2 = /* @__PURE__ */ genericShow(genericPosition_)(/* @__PURE__ */ genericShowConstructor(/* @__PURE__ */ genericShowArgsArgument(/* @__PURE__ */ showRecord()()(/* @__PURE__ */ showRecordFieldsCons({
    reflectSymbol: function() {
      return "column";
    }
  })(/* @__PURE__ */ showRecordFieldsCons({
    reflectSymbol: function() {
      return "index";
    }
  })(/* @__PURE__ */ showRecordFieldsConsNil({
    reflectSymbol: function() {
      return "line";
    }
  })(showInt))(showInt))(showInt))))({
    reflectSymbol: function() {
      return "Position";
    }
  }));
  var showPosition = {
    show: function(x) {
      return genericShow2(x);
    }
  };
  var show1 = /* @__PURE__ */ show(showPosition);
  var functorParserT = {
    map: function(f) {
      return function(v) {
        return function(state1, more, lift1, $$throw2, done) {
          return more(function(v1) {
            return v(state1, more, lift1, $$throw2, function(state22, a2) {
              return more(function(v2) {
                return done(state22, f(a2));
              });
            });
          });
        };
      };
    }
  };
  var applyParserT = {
    apply: function(v) {
      return function(v1) {
        return function(state1, more, lift1, $$throw2, done) {
          return more(function(v2) {
            return v(state1, more, lift1, $$throw2, function(state22, f) {
              return more(function(v3) {
                return v1(state22, more, lift1, $$throw2, function(state3, a2) {
                  return more(function(v4) {
                    return done(state3, f(a2));
                  });
                });
              });
            });
          });
        };
      };
    },
    Functor0: function() {
      return functorParserT;
    }
  };
  var bindParserT = {
    bind: function(v) {
      return function(next) {
        return function(state1, more, lift1, $$throw2, done) {
          return more(function(v1) {
            return v(state1, more, lift1, $$throw2, function(state22, a2) {
              return more(function(v2) {
                var v3 = next(a2);
                return v3(state22, more, lift1, $$throw2, done);
              });
            });
          });
        };
      };
    },
    Apply0: function() {
      return applyParserT;
    }
  };
  var applicativeParserT = {
    pure: function(a2) {
      return function(state1, v, v1, v2, done) {
        return done(state1, a2);
      };
    },
    Apply0: function() {
      return applyParserT;
    }
  };
  var monadParserT = {
    Applicative0: function() {
      return applicativeParserT;
    },
    Bind1: function() {
      return bindParserT;
    }
  };
  var monadThrowParseErrorParse = {
    throwError: function(err) {
      return function(state1, v, v1, $$throw2, v2) {
        return $$throw2(state1, err);
      };
    },
    Monad0: function() {
      return monadParserT;
    }
  };
  var altParserT = {
    alt: function(v) {
      return function(v1) {
        return function(v2, more, lift1, $$throw2, done) {
          return more(function(v3) {
            return v(new ParseState(v2.value0, v2.value1, false), more, lift1, function(v4, err) {
              return more(function(v5) {
                if (v4.value2) {
                  return $$throw2(v4, err);
                }
                ;
                return v1(v2, more, lift1, $$throw2, done);
              });
            }, done);
          });
        };
      };
    },
    Functor0: function() {
      return functorParserT;
    }
  };
  var stateParserT = function(k) {
    return function(state1, v, v1, v2, done) {
      var v3 = k(state1);
      return done(v3.value1, v3.value0);
    };
  };
  var showParseError = {
    show: function(v) {
      return "(ParseError " + (show3(v.value0) + (" " + (show1(v.value1) + ")")));
    }
  };
  var runParserT$prime = function(dictMonadRec) {
    var Monad0 = dictMonadRec.Monad0();
    var map30 = map(Monad0.Bind1().Apply0().Functor0());
    var pure15 = pure(Monad0.Applicative0());
    var tailRecM4 = tailRecM(dictMonadRec);
    return function(state1) {
      return function(v) {
        var go2 = function($copy_step) {
          var $tco_done = false;
          var $tco_result;
          function $tco_loop(step4) {
            var v1 = step4(unit);
            if (v1 instanceof More) {
              $copy_step = v1.value0;
              return;
            }
            ;
            if (v1 instanceof Lift3) {
              $tco_done = true;
              return map30(Loop.create)(v1.value0);
            }
            ;
            if (v1 instanceof Stop) {
              $tco_done = true;
              return pure15(new Done(new Tuple(v1.value1, v1.value0)));
            }
            ;
            throw new Error("Failed pattern match at Parsing (line 152, column 13 - line 158, column 32): " + [v1.constructor.name]);
          }
          ;
          while (!$tco_done) {
            $tco_result = $tco_loop($copy_step);
          }
          ;
          return $tco_result;
        };
        return tailRecM4(go2)(function(v1) {
          return v(state1, More.create, Lift3.create, function(state22, err) {
            return new Stop(state22, new Left(err));
          }, function(state22, res) {
            return new Stop(state22, new Right(res));
          });
        });
      };
    };
  };
  var position2 = /* @__PURE__ */ stateParserT(function(v) {
    return new Tuple(v.value1, v);
  });
  var initialPos = {
    index: 0,
    line: 1,
    column: 1
  };
  var runParserT = function(dictMonadRec) {
    var map30 = map(dictMonadRec.Monad0().Bind1().Apply0().Functor0());
    var runParserT$prime1 = runParserT$prime(dictMonadRec);
    return function(s) {
      return function(p2) {
        var initialState = new ParseState(s, initialPos, false);
        return map30(fst)(runParserT$prime1(initialState)(p2));
      };
    };
  };

  // output/Parsing.String/index.js
  var fromEnum3 = /* @__PURE__ */ fromEnum(boundedEnumCodePoint);
  var mod3 = /* @__PURE__ */ mod(euclideanRingInt);
  var show12 = /* @__PURE__ */ show(showString);
  var updatePosSingle = function(v) {
    return function(cp) {
      return function(after) {
        var v1 = fromEnum3(cp);
        if (v1 === 10) {
          return {
            index: v.index + 1 | 0,
            line: v.line + 1 | 0,
            column: 1
          };
        }
        ;
        if (v1 === 13) {
          var v2 = codePointAt(0)(after);
          if (v2 instanceof Just && fromEnum3(v2.value0) === 10) {
            return {
              index: v.index + 1 | 0,
              line: v.line,
              column: v.column
            };
          }
          ;
          return {
            index: v.index + 1 | 0,
            line: v.line + 1 | 0,
            column: 1
          };
        }
        ;
        if (v1 === 9) {
          return {
            index: v.index + 1 | 0,
            line: v.line,
            column: (v.column + 8 | 0) - mod3(v.column - 1 | 0)(8) | 0
          };
        }
        ;
        return {
          index: v.index + 1 | 0,
          line: v.line,
          column: v.column + 1 | 0
        };
      };
    };
  };
  var updatePosString = function($copy_pos) {
    return function($copy_before) {
      return function($copy_after) {
        var $tco_var_pos = $copy_pos;
        var $tco_var_before = $copy_before;
        var $tco_done = false;
        var $tco_result;
        function $tco_loop(pos, before, after) {
          var v = uncons4(before);
          if (v instanceof Nothing) {
            $tco_done = true;
            return pos;
          }
          ;
          if (v instanceof Just) {
            var newPos = function() {
              if ($$null(v.value0.tail)) {
                return updatePosSingle(pos)(v.value0.head)(after);
              }
              ;
              if (otherwise) {
                return updatePosSingle(pos)(v.value0.head)(v.value0.tail);
              }
              ;
              throw new Error("Failed pattern match at Parsing.String (line 165, column 7 - line 167, column 52): ");
            }();
            $tco_var_pos = newPos;
            $tco_var_before = v.value0.tail;
            $copy_after = after;
            return;
          }
          ;
          throw new Error("Failed pattern match at Parsing.String (line 161, column 36 - line 168, column 38): " + [v.constructor.name]);
        }
        ;
        while (!$tco_done) {
          $tco_result = $tco_loop($tco_var_pos, $tco_var_before, $copy_after);
        }
        ;
        return $tco_result;
      };
    };
  };
  var satisfyCodePoint = function(f) {
    return mkFn5(function(v) {
      return function(v1) {
        return function(v2) {
          return function($$throw2) {
            return function(done) {
              var v3 = uncons4(v.value0);
              if (v3 instanceof Nothing) {
                return $$throw2(v, new ParseError("Unexpected EOF", v.value1));
              }
              ;
              if (v3 instanceof Just) {
                var $76 = f(v3.value0.head);
                if ($76) {
                  return done(new ParseState(v3.value0.tail, updatePosSingle(v.value1)(v3.value0.head)(v3.value0.tail), true), v3.value0.head);
                }
                ;
                return $$throw2(v, new ParseError("Predicate unsatisfied", v.value1));
              }
              ;
              throw new Error("Failed pattern match at Parsing.String (line 136, column 7 - line 143, column 73): " + [v3.constructor.name]);
            };
          };
        };
      };
    });
  };
  var consumeWith = function(f) {
    return mkFn5(function(v) {
      return function(v1) {
        return function(v2) {
          return function($$throw2) {
            return function(done) {
              var v3 = f(v.value0);
              if (v3 instanceof Left) {
                return $$throw2(v, new ParseError(v3.value0, v.value1));
              }
              ;
              if (v3 instanceof Right) {
                return done(new ParseState(v3.value0.remainder, updatePosString(v.value1)(v3.value0.consumed)(v3.value0.remainder), !$$null(v3.value0.consumed)), v3.value0.value);
              }
              ;
              throw new Error("Failed pattern match at Parsing.String (line 286, column 7 - line 290, column 121): " + [v3.constructor.name]);
            };
          };
        };
      };
    });
  };
  var string = function(str) {
    return consumeWith(function(input3) {
      var v = stripPrefix(str)(input3);
      if (v instanceof Just) {
        return new Right({
          value: str,
          consumed: str,
          remainder: v.value0
        });
      }
      ;
      return new Left("Expected " + show12(str));
    });
  };
  var anyCodePoint = /* @__PURE__ */ satisfyCodePoint(/* @__PURE__ */ $$const(true));

  // output/ModularBlog.Common.Mucode/index.js
  var $runtime_lazy11 = function(name15, moduleName, init3) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2) return val;
      if (state3 === 1) throw new ReferenceError(name15 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init3();
      state3 = 2;
      return val;
    };
  };
  var pure11 = /* @__PURE__ */ pure(applicativeParserT);
  var show4 = /* @__PURE__ */ show(showString);
  var bind7 = /* @__PURE__ */ bind(bindParserT);
  var throwError3 = /* @__PURE__ */ throwError(monadThrowParseErrorParse);
  var lift3 = /* @__PURE__ */ lift(monadTransParserT)(monadST);
  var eq2 = /* @__PURE__ */ eq(eqCodePoint);
  var discard7 = /* @__PURE__ */ discard(discardUnit)(bindParserT);
  var $$void8 = /* @__PURE__ */ $$void(functorParserT);
  var map26 = /* @__PURE__ */ map(functorParserT);
  var alt5 = /* @__PURE__ */ alt(altParserT);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorParserT);
  var runParserT2 = /* @__PURE__ */ runParserT(monadRecST);
  var generic_EncodeArgsNoArgum = {
    generic_encodeArgs: function(v) {
      return "";
    }
  };
  var generic_DecodeArgsNoArgum = {
    generic_parseArgs: function(v) {
      return pure11(NoArguments.value);
    }
  };
  var encodeVoid = {
    encode: absurd
  };
  var encodeString = {
    encode: function(s_) {
      var trim2 = function(n) {
        return function(s) {
          return drop4(n)(take3(length8(s) - n | 0)(s));
        };
      };
      return function() {
        var $153 = trim2(1);
        return function($154) {
          return function(v) {
            return v + '"';
          }($153($154));
        };
      }()(show4(s_));
    }
  };
  var decodeVoid = {
    parse: function(v) {
      return bind7(position2)(function(pos) {
        return throwError3(new ParseError("cannot parse a term of type Void since no such term exists", pos));
      });
    }
  };
  var decodeString = {
    parse: function(v) {
      return bind7(lift3(newSTArray))(function(cps) {
        var $lazy_go = $runtime_lazy11("go", "ModularBlog.Common.Mucode", function() {
          return bind7(anyCodePoint)(function(cp1) {
            if (eq2(cp1)(codePointFromChar('"'))) {
              return pure11(unit);
            }
            ;
            if (eq2(cp1)(codePointFromChar("\\"))) {
              return discard7(bind7(anyCodePoint)(function(cp2) {
                return $$void8(lift3(push(cp2)(cps)));
              }))(function() {
                return $lazy_go(61);
              });
            }
            ;
            return discard7($$void8(lift3(push(cp1)(cps))))(function() {
              return $lazy_go(64);
            });
          });
        });
        var go2 = $lazy_go(55);
        return discard7(go2)(function() {
          return bind7(lift3(unsafeFreeze(cps)))(function(cps$prime) {
            return pure11(fromCodePointArray(cps$prime));
          });
        });
      });
    }
  };
  var parse7 = function(dict) {
    return dict.parse;
  };
  var generic_DecodeArgsArgumen = function(dictDecode) {
    var parse1 = parse7(dictDecode);
    return {
      generic_parseArgs: function(v) {
        return map26(Argument)(parse1(unit));
      }
    };
  };
  var generic_parseArgs = function(dict) {
    return dict.generic_parseArgs;
  };
  var generic_DecodeArgsProduct = function(dictGeneric_DecodeArgs) {
    var generic_parseArgs1 = generic_parseArgs(dictGeneric_DecodeArgs);
    return function(dictGeneric_DecodeArgs1) {
      var generic_parseArgs2 = generic_parseArgs(dictGeneric_DecodeArgs1);
      return {
        generic_parseArgs: function(v) {
          return bind7(string("0"))(function() {
            return bind7(generic_parseArgs1(unit))(function(a2) {
              return bind7(string("1"))(function() {
                return bind7(generic_parseArgs2(unit))(function(b2) {
                  return pure11(new Product(a2, b2));
                });
              });
            });
          });
        }
      };
    };
  };
  var generic_DecodeConstructor = function(dictGeneric_DecodeArgs) {
    var generic_parseArgs1 = generic_parseArgs(dictGeneric_DecodeArgs);
    return {
      "generic_parse'": function(v) {
        return map26(Constructor)(generic_parseArgs1(unit));
      }
    };
  };
  var generic_DecodeConstructor1 = /* @__PURE__ */ generic_DecodeConstructor(generic_DecodeArgsNoArgum);
  var generic_parse$prime = function(dict) {
    return dict["generic_parse'"];
  };
  var generic_DecodeSum = function(dictGeneric_Decode) {
    var generic_parse$prime2 = generic_parse$prime(dictGeneric_Decode);
    return function(dictGeneric_Decode1) {
      var generic_parse$prime3 = generic_parse$prime(dictGeneric_Decode1);
      return {
        "generic_parse'": function(v) {
          return bind7(alt5(string("0"))(string("1")))(function(v1) {
            if (v1 === "0") {
              return map26(Inl.create)(generic_parse$prime2(unit));
            }
            ;
            if (v1 === "1") {
              return map26(Inr.create)(generic_parse$prime3(unit));
            }
            ;
            return unsafeCrashWith("impossible");
          });
        }
      };
    };
  };
  var generic_DecodeSum1 = /* @__PURE__ */ generic_DecodeSum(generic_DecodeConstructor1);
  var decodeList = function(dictDecode) {
    var generic_DecodeArgsProduct12 = generic_DecodeArgsProduct(generic_DecodeArgsArgumen(dictDecode));
    return {
      parse: function(v) {
        return bind7(generic_parse$prime(generic_DecodeSum1(generic_DecodeConstructor(generic_DecodeArgsProduct12(generic_DecodeArgsArgumen(decodeList(dictDecode))))))(unit))(function(v1) {
          if (v1 instanceof Inl) {
            return pure11(Nil.value);
          }
          ;
          if (v1 instanceof Inr) {
            return pure11(new Cons(v1.value0.value0, v1.value0.value1));
          }
          ;
          throw new Error("Failed pattern match at ModularBlog.Common.Mucode (line 115, column 62 - line 117, column 77): " + [v1.constructor.name]);
        });
      }
    };
  };
  var generic_parse = function(dictGeneric) {
    var to2 = to(dictGeneric);
    return function(dictGeneric_Decode) {
      var generic_parse$prime2 = generic_parse$prime(dictGeneric_Decode);
      return function(x) {
        return mapFlipped2(generic_parse$prime2(x))(to2);
      };
    };
  };
  var generic_encodeArgs = function(dict) {
    return dict.generic_encodeArgs;
  };
  var generic_EncodeArgsProduct = function(dictGeneric_EncodeArgs) {
    var generic_encodeArgs1 = generic_encodeArgs(dictGeneric_EncodeArgs);
    return function(dictGeneric_EncodeArgs1) {
      var generic_encodeArgs2 = generic_encodeArgs(dictGeneric_EncodeArgs1);
      return {
        generic_encodeArgs: function(v) {
          return "0" + (generic_encodeArgs1(v.value0) + ("1" + generic_encodeArgs2(v.value1)));
        }
      };
    };
  };
  var generic_EncodeConstructor = function(dictGeneric_EncodeArgs) {
    var generic_encodeArgs1 = generic_encodeArgs(dictGeneric_EncodeArgs);
    return {
      "generic_encode'": function(v) {
        return generic_encodeArgs1(v);
      }
    };
  };
  var generic_EncodeConstructor1 = /* @__PURE__ */ generic_EncodeConstructor(generic_EncodeArgsNoArgum);
  var generic_encode$prime = function(dict) {
    return dict["generic_encode'"];
  };
  var generic_EncodeSum = function(dictGeneric_Encode) {
    var generic_encode$prime2 = generic_encode$prime(dictGeneric_Encode);
    return function(dictGeneric_Encode1) {
      var generic_encode$prime3 = generic_encode$prime(dictGeneric_Encode1);
      return {
        "generic_encode'": function(v) {
          if (v instanceof Inl) {
            return "0" + generic_encode$prime2(v.value0);
          }
          ;
          if (v instanceof Inr) {
            return "1" + generic_encode$prime3(v.value0);
          }
          ;
          throw new Error("Failed pattern match at ModularBlog.Common.Mucode (line 147, column 1 - line 149, column 53): " + [v.constructor.name]);
        }
      };
    };
  };
  var generic_EncodeSum1 = /* @__PURE__ */ generic_EncodeSum(generic_EncodeConstructor1);
  var generic_encode = function(dictGeneric) {
    var from3 = from(dictGeneric);
    return function(dictGeneric_Encode) {
      var generic_encode$prime2 = generic_encode$prime(dictGeneric_Encode);
      return function(x) {
        return generic_encode$prime2(from3(x));
      };
    };
  };
  var encode = function(dict) {
    return dict.encode;
  };
  var generic_EncodeArgsArgumen = function(dictEncode) {
    var encode1 = encode(dictEncode);
    return {
      generic_encodeArgs: function(v) {
        return encode1(v);
      }
    };
  };
  var encodeList = function(dictEncode) {
    var generic_EncodeArgsProduct12 = generic_EncodeArgsProduct(generic_EncodeArgsArgumen(dictEncode));
    return {
      encode: function(v) {
        if (v instanceof Nil) {
          return generic_encode$prime(generic_EncodeSum1(generic_EncodeConstructor(generic_EncodeArgsProduct12(generic_EncodeArgsArgumen(encodeList(dictEncode))))))(new Inl(NoArguments.value));
        }
        ;
        if (v instanceof Cons) {
          return generic_encode$prime(generic_EncodeSum1(generic_EncodeConstructor(generic_EncodeArgsProduct12(generic_EncodeArgsArgumen(encodeList(dictEncode))))))(new Inr(new Product(v.value0, v.value1)));
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.Common.Mucode (line 110, column 12 - line 112, column 102): " + [v.constructor.name]);
      }
    };
  };
  var decode = function(dictDecode) {
    var parse1 = parse7(dictDecode);
    return function(s) {
      var st_err_a = flip(runParserT2)(parse1(unit))(s);
      return st_err_a();
    };
  };

  // output/ModularBlog.Common.Types/index.js
  var genericShowConstructor2 = /* @__PURE__ */ genericShowConstructor(genericShowArgsNoArguments);
  var TitleIsSymbol = {
    reflectSymbol: function() {
      return "Title";
    }
  };
  var SubtitleIsSymbol = {
    reflectSymbol: function() {
      return "Subtitle";
    }
  };
  var SectionIsSymbol = {
    reflectSymbol: function() {
      return "Section";
    }
  };
  var SubsectionIsSymbol = {
    reflectSymbol: function() {
      return "Subsection";
    }
  };
  var QuoteIsSymbol = {
    reflectSymbol: function() {
      return "Quote";
    }
  };
  var BlockIsSymbol = {
    reflectSymbol: function() {
      return "Block";
    }
  };
  var CodeIsSymbol = {
    reflectSymbol: function() {
      return "Code";
    }
  };
  var Normal_ImageStyleIsSymbol = {
    reflectSymbol: function() {
      return "Normal_ImageStyle";
    }
  };
  var Shadowed_ImageStyleIsSymbol = {
    reflectSymbol: function() {
      return "Shadowed_ImageStyle";
    }
  };
  var FillWidth_ImageSizeIsSymbol = {
    reflectSymbol: function() {
      return "FillWidth_ImageSize";
    }
  };
  var Actual_ImageSizeIsSymbol = {
    reflectSymbol: function() {
      return "Actual_ImageSize";
    }
  };
  var ColumnIsSymbol = {
    reflectSymbol: function() {
      return "Column";
    }
  };
  var RowIsSymbol = {
    reflectSymbol: function() {
      return "Row";
    }
  };
  var map27 = /* @__PURE__ */ map(functorList);
  var generic_EncodeConstructor2 = /* @__PURE__ */ generic_EncodeConstructor(generic_EncodeArgsNoArgum);
  var generic_EncodeSum2 = /* @__PURE__ */ generic_EncodeSum(generic_EncodeConstructor2);
  var generic_EncodeSum12 = /* @__PURE__ */ generic_EncodeSum2(generic_EncodeConstructor2);
  var generic_EncodeArgsArgumen2 = /* @__PURE__ */ generic_EncodeArgsArgumen(encodeString);
  var generic_EncodeConstructor12 = /* @__PURE__ */ generic_EncodeConstructor(generic_EncodeArgsArgumen2);
  var generic_EncodeSum22 = /* @__PURE__ */ generic_EncodeSum(generic_EncodeConstructor12);
  var generic_EditableSum2 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(TitleIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(SubtitleIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(SectionIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(SubsectionIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(QuoteIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(BlockIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableConstruct(CodeIsSymbol)(genericArgs_EditableNoArg)))))));
  var genericArgs_EditableArgum2 = /* @__PURE__ */ genericArgs_EditableArgum(editableString);
  var generic_EditableConstruct2 = /* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "NoteName";
    }
  })(genericArgs_EditableArgum2);
  var generic_EditableSum1 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(Normal_ImageStyleIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableConstruct(Shadowed_ImageStyleIsSymbol)(genericArgs_EditableNoArg));
  var generic_EditableSum22 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(FillWidth_ImageSizeIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableConstruct(Actual_ImageSizeIsSymbol)(genericArgs_EditableNoArg));
  var generic_EditableSum3 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct(ColumnIsSymbol)(genericArgs_EditableNoArg))(/* @__PURE__ */ generic_EditableConstruct(RowIsSymbol)(genericArgs_EditableNoArg));
  var generic_EditableSum4 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Hole";
    }
  })(genericArgs_EditableNoArg));
  var generic_EditableSum5 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Literal";
    }
  })(genericArgs_EditableArgum2));
  var generic_EditableConstruct1 = /* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Styled";
    }
  });
  var generic_EditableConstruct22 = /* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Grouped";
    }
  });
  var generic_DecodeConstructor2 = /* @__PURE__ */ generic_DecodeConstructor(generic_DecodeArgsNoArgum);
  var generic_DecodeSum2 = /* @__PURE__ */ generic_DecodeSum(generic_DecodeConstructor2);
  var generic_DecodeSum12 = /* @__PURE__ */ generic_DecodeSum2(generic_DecodeConstructor2);
  var generic_DecodeArgsArgumen2 = /* @__PURE__ */ generic_DecodeArgsArgumen(decodeString);
  var generic_DecodeConstructor12 = /* @__PURE__ */ generic_DecodeConstructor(generic_DecodeArgsArgumen2);
  var generic_DecodeSum22 = /* @__PURE__ */ generic_DecodeSum(generic_DecodeConstructor12);
  var Title = /* @__PURE__ */ function() {
    function Title2() {
    }
    ;
    Title2.value = new Title2();
    return Title2;
  }();
  var Subtitle = /* @__PURE__ */ function() {
    function Subtitle2() {
    }
    ;
    Subtitle2.value = new Subtitle2();
    return Subtitle2;
  }();
  var Section = /* @__PURE__ */ function() {
    function Section2() {
    }
    ;
    Section2.value = new Section2();
    return Section2;
  }();
  var Subsection = /* @__PURE__ */ function() {
    function Subsection2() {
    }
    ;
    Subsection2.value = new Subsection2();
    return Subsection2;
  }();
  var Quote = /* @__PURE__ */ function() {
    function Quote2() {
    }
    ;
    Quote2.value = new Quote2();
    return Quote2;
  }();
  var Block = /* @__PURE__ */ function() {
    function Block2() {
    }
    ;
    Block2.value = new Block2();
    return Block2;
  }();
  var Code = /* @__PURE__ */ function() {
    function Code2() {
    }
    ;
    Code2.value = new Code2();
    return Code2;
  }();
  var Normal_ImageStyle = /* @__PURE__ */ function() {
    function Normal_ImageStyle2() {
    }
    ;
    Normal_ImageStyle2.value = new Normal_ImageStyle2();
    return Normal_ImageStyle2;
  }();
  var Shadowed_ImageStyle = /* @__PURE__ */ function() {
    function Shadowed_ImageStyle2() {
    }
    ;
    Shadowed_ImageStyle2.value = new Shadowed_ImageStyle2();
    return Shadowed_ImageStyle2;
  }();
  var FillWidth_ImageSize = /* @__PURE__ */ function() {
    function FillWidth_ImageSize2() {
    }
    ;
    FillWidth_ImageSize2.value = new FillWidth_ImageSize2();
    return FillWidth_ImageSize2;
  }();
  var Actual_ImageSize = /* @__PURE__ */ function() {
    function Actual_ImageSize2() {
    }
    ;
    Actual_ImageSize2.value = new Actual_ImageSize2();
    return Actual_ImageSize2;
  }();
  var Column = /* @__PURE__ */ function() {
    function Column2() {
    }
    ;
    Column2.value = new Column2();
    return Column2;
  }();
  var Row = /* @__PURE__ */ function() {
    function Row2() {
    }
    ;
    Row2.value = new Row2();
    return Row2;
  }();
  var Hole = /* @__PURE__ */ function() {
    function Hole2() {
    }
    ;
    Hole2.value = new Hole2();
    return Hole2;
  }();
  var Literal = /* @__PURE__ */ function() {
    function Literal2(value0) {
      this.value0 = value0;
    }
    ;
    Literal2.create = function(value0) {
      return new Literal2(value0);
    };
    return Literal2;
  }();
  var Named = /* @__PURE__ */ function() {
    function Named2(value0) {
      this.value0 = value0;
    }
    ;
    Named2.create = function(value0) {
      return new Named2(value0);
    };
    return Named2;
  }();
  var Styled = /* @__PURE__ */ function() {
    function Styled2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Styled2.create = function(value0) {
      return function(value1) {
        return new Styled2(value0, value1);
      };
    };
    return Styled2;
  }();
  var Grouped = /* @__PURE__ */ function() {
    function Grouped2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Grouped2.create = function(value0) {
      return function(value1) {
        return new Grouped2(value0, value1);
      };
    };
    return Grouped2;
  }();
  var Image2 = /* @__PURE__ */ function() {
    function Image3(value0, value1, value22) {
      this.value0 = value0;
      this.value1 = value1;
      this.value2 = value22;
    }
    ;
    Image3.create = function(value0) {
      return function(value1) {
        return function(value22) {
          return new Image3(value0, value1, value22);
        };
      };
    };
    return Image3;
  }();
  var Inject = /* @__PURE__ */ function() {
    function Inject2(value0) {
      this.value0 = value0;
    }
    ;
    Inject2.create = function(value0) {
      return new Inject2(value0);
    };
    return Inject2;
  }();
  var Initialize_PageAction = /* @__PURE__ */ function() {
    function Initialize_PageAction2() {
    }
    ;
    Initialize_PageAction2.value = new Initialize_PageAction2();
    return Initialize_PageAction2;
  }();
  var Receive_PageAction = /* @__PURE__ */ function() {
    function Receive_PageAction2(value0) {
      this.value0 = value0;
    }
    ;
    Receive_PageAction2.create = function(value0) {
      return new Receive_PageAction2(value0);
    };
    return Receive_PageAction2;
  }();
  var genericStyle_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return Title.value;
      }
      ;
      if (x instanceof Inr && x.value0 instanceof Inl) {
        return Subtitle.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && x.value0.value0 instanceof Inl)) {
        return Section.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inl))) {
        return Subsection.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0 instanceof Inl)))) {
        return Quote.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inl))))) {
        return Block.value;
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inr))))) {
        return Code.value;
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 106, column 1 - line 106, column 32): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof Title) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Subtitle) {
        return new Inr(new Inl(NoArguments.value));
      }
      ;
      if (x instanceof Section) {
        return new Inr(new Inr(new Inl(NoArguments.value)));
      }
      ;
      if (x instanceof Subsection) {
        return new Inr(new Inr(new Inr(new Inl(NoArguments.value))));
      }
      ;
      if (x instanceof Quote) {
        return new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value)))));
      }
      ;
      if (x instanceof Block) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(NoArguments.value))))));
      }
      ;
      if (x instanceof Code) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(NoArguments.value))))));
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 106, column 1 - line 106, column 32): " + [x.constructor.name]);
    }
  };
  var genericShow3 = /* @__PURE__ */ genericShow(genericStyle_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(TitleIsSymbol))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(SubtitleIsSymbol))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(SectionIsSymbol))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(SubsectionIsSymbol))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(QuoteIsSymbol))(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(BlockIsSymbol))(/* @__PURE__ */ genericShowConstructor2(CodeIsSymbol))))))));
  var generic_encode2 = /* @__PURE__ */ generic_encode(genericStyle_)(/* @__PURE__ */ generic_EncodeSum2(/* @__PURE__ */ generic_EncodeSum2(/* @__PURE__ */ generic_EncodeSum2(/* @__PURE__ */ generic_EncodeSum2(/* @__PURE__ */ generic_EncodeSum2(generic_EncodeSum12))))));
  var generic_render2 = /* @__PURE__ */ generic_render(genericStyle_)(generic_EditableSum2);
  var generic_default2 = /* @__PURE__ */ generic_default(genericStyle_)(generic_EditableSum2);
  var generic_parse2 = /* @__PURE__ */ generic_parse(genericStyle_)(/* @__PURE__ */ generic_DecodeSum2(/* @__PURE__ */ generic_DecodeSum2(/* @__PURE__ */ generic_DecodeSum2(/* @__PURE__ */ generic_DecodeSum2(/* @__PURE__ */ generic_DecodeSum2(generic_DecodeSum12))))));
  var showStyle = {
    show: function(x) {
      return genericShow3(x);
    }
  };
  var genericNote_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return Hole.value;
      }
      ;
      if (x instanceof Inr && x.value0 instanceof Inl) {
        return new Literal(x.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && x.value0.value0 instanceof Inl)) {
        return new Named(x.value0.value0.value0);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && x.value0.value0.value0 instanceof Inl))) {
        return new Styled(x.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value1);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0 instanceof Inl)))) {
        return new Grouped(x.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value1);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inl))))) {
        return new Image2(x.value0.value0.value0.value0.value0.value0.value0, x.value0.value0.value0.value0.value0.value0.value1.value0, x.value0.value0.value0.value0.value0.value0.value1.value1);
      }
      ;
      if (x instanceof Inr && (x.value0 instanceof Inr && (x.value0.value0 instanceof Inr && (x.value0.value0.value0 instanceof Inr && (x.value0.value0.value0.value0 instanceof Inr && x.value0.value0.value0.value0.value0 instanceof Inr))))) {
        return new Inject(x.value0.value0.value0.value0.value0.value0);
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 66, column 1 - line 66, column 35): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof Hole) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Literal) {
        return new Inr(new Inl(x.value0));
      }
      ;
      if (x instanceof Named) {
        return new Inr(new Inr(new Inl(x.value0)));
      }
      ;
      if (x instanceof Styled) {
        return new Inr(new Inr(new Inr(new Inl(new Product(x.value0, x.value1)))));
      }
      ;
      if (x instanceof Grouped) {
        return new Inr(new Inr(new Inr(new Inr(new Inl(new Product(x.value0, x.value1))))));
      }
      ;
      if (x instanceof Image2) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inl(new Product(x.value0, new Product(x.value1, x.value2))))))));
      }
      ;
      if (x instanceof Inject) {
        return new Inr(new Inr(new Inr(new Inr(new Inr(new Inr(x.value0))))));
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 66, column 1 - line 66, column 35): " + [x.constructor.name]);
    }
  };
  var generic_encode1 = /* @__PURE__ */ generic_encode(genericNote_);
  var generic_render1 = /* @__PURE__ */ generic_render(genericNote_);
  var generic_default1 = /* @__PURE__ */ generic_default(genericNote_);
  var generic_parse1 = /* @__PURE__ */ generic_parse(genericNote_);
  var genericNoteName_ = {
    to: function(x) {
      return x;
    },
    from: function(x) {
      return x;
    }
  };
  var generic_encode22 = /* @__PURE__ */ generic_encode(genericNoteName_)(generic_EncodeConstructor12);
  var generic_render22 = /* @__PURE__ */ generic_render(genericNoteName_)(generic_EditableConstruct2);
  var generic_default22 = /* @__PURE__ */ generic_default(genericNoteName_)(generic_EditableConstruct2);
  var generic_parse22 = /* @__PURE__ */ generic_parse(genericNoteName_)(generic_DecodeConstructor12);
  var genericImageStyle_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return Normal_ImageStyle.value;
      }
      ;
      if (x instanceof Inr) {
        return Shadowed_ImageStyle.value;
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 163, column 1 - line 163, column 37): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof Normal_ImageStyle) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Shadowed_ImageStyle) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 163, column 1 - line 163, column 37): " + [x.constructor.name]);
    }
  };
  var genericShow1 = /* @__PURE__ */ genericShow(genericImageStyle_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(Normal_ImageStyleIsSymbol))(/* @__PURE__ */ genericShowConstructor2(Shadowed_ImageStyleIsSymbol)));
  var generic_encode3 = /* @__PURE__ */ generic_encode(genericImageStyle_)(generic_EncodeSum12);
  var generic_render3 = /* @__PURE__ */ generic_render(genericImageStyle_)(generic_EditableSum1);
  var generic_default3 = /* @__PURE__ */ generic_default(genericImageStyle_)(generic_EditableSum1);
  var generic_parse3 = /* @__PURE__ */ generic_parse(genericImageStyle_)(generic_DecodeSum12);
  var showImageStyle = {
    show: function(x) {
      return genericShow1(x);
    }
  };
  var genericImageSize_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return FillWidth_ImageSize.value;
      }
      ;
      if (x instanceof Inr) {
        return Actual_ImageSize.value;
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 144, column 1 - line 144, column 36): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof FillWidth_ImageSize) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Actual_ImageSize) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 144, column 1 - line 144, column 36): " + [x.constructor.name]);
    }
  };
  var genericShow22 = /* @__PURE__ */ genericShow(genericImageSize_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(FillWidth_ImageSizeIsSymbol))(/* @__PURE__ */ genericShowConstructor2(Actual_ImageSizeIsSymbol)));
  var generic_encode4 = /* @__PURE__ */ generic_encode(genericImageSize_)(generic_EncodeSum12);
  var generic_render4 = /* @__PURE__ */ generic_render(genericImageSize_)(generic_EditableSum22);
  var generic_default4 = /* @__PURE__ */ generic_default(genericImageSize_)(generic_EditableSum22);
  var generic_parse4 = /* @__PURE__ */ generic_parse(genericImageSize_)(generic_DecodeSum12);
  var showImageSize = {
    show: function(x) {
      return genericShow22(x);
    }
  };
  var genericGroup_ = {
    to: function(x) {
      if (x instanceof Inl) {
        return Column.value;
      }
      ;
      if (x instanceof Inr) {
        return Row.value;
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 125, column 1 - line 125, column 32): " + [x.constructor.name]);
    },
    from: function(x) {
      if (x instanceof Column) {
        return new Inl(NoArguments.value);
      }
      ;
      if (x instanceof Row) {
        return new Inr(NoArguments.value);
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Common.Types (line 125, column 1 - line 125, column 32): " + [x.constructor.name]);
    }
  };
  var genericShow32 = /* @__PURE__ */ genericShow(genericGroup_)(/* @__PURE__ */ genericShowSum(/* @__PURE__ */ genericShowConstructor2(ColumnIsSymbol))(/* @__PURE__ */ genericShowConstructor2(RowIsSymbol)));
  var generic_encode5 = /* @__PURE__ */ generic_encode(genericGroup_)(generic_EncodeSum12);
  var generic_render5 = /* @__PURE__ */ generic_render(genericGroup_)(generic_EditableSum3);
  var generic_default5 = /* @__PURE__ */ generic_default(genericGroup_)(generic_EditableSum3);
  var generic_parse5 = /* @__PURE__ */ generic_parse(genericGroup_)(generic_DecodeSum12);
  var showGroup = {
    show: function(x) {
      return genericShow32(x);
    }
  };
  var functorNote = {
    map: function(f) {
      return function(m) {
        if (m instanceof Hole) {
          return Hole.value;
        }
        ;
        if (m instanceof Literal) {
          return new Literal(m.value0);
        }
        ;
        if (m instanceof Named) {
          return new Named(m.value0);
        }
        ;
        if (m instanceof Styled) {
          return new Styled(m.value0, map(functorNote)(f)(m.value1));
        }
        ;
        if (m instanceof Grouped) {
          return new Grouped(m.value0, map27(map(functorNote)(f))(m.value1));
        }
        ;
        if (m instanceof Image2) {
          return new Image2(m.value0, m.value1, m.value2);
        }
        ;
        if (m instanceof Inject) {
          return new Inject(f(m.value0));
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.Common.Types (line 0, column 0 - line 0, column 0): " + [m.constructor.name]);
      };
    }
  };
  var encodeStyle = {
    encode: function(x) {
      return generic_encode2(x);
    }
  };
  var generic_EncodeArgsProduct2 = /* @__PURE__ */ generic_EncodeArgsProduct(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeStyle));
  var encodeNoteName = {
    encode: function(x) {
      return generic_encode22(x);
    }
  };
  var generic_EncodeSum3 = /* @__PURE__ */ generic_EncodeSum(/* @__PURE__ */ generic_EncodeConstructor(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeNoteName)));
  var encodeImageStyle = {
    encode: function(x) {
      return generic_encode3(x);
    }
  };
  var encodeImageSize = {
    encode: function(x) {
      return generic_encode4(x);
    }
  };
  var generic_EncodeSum4 = /* @__PURE__ */ generic_EncodeSum(/* @__PURE__ */ generic_EncodeConstructor(/* @__PURE__ */ generic_EncodeArgsProduct(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeImageSize))(/* @__PURE__ */ generic_EncodeArgsProduct(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeImageStyle))(generic_EncodeArgsArgumen2))))(/* @__PURE__ */ generic_EncodeConstructor(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeVoid)));
  var encodeGroup = {
    encode: function(x) {
      return generic_encode5(x);
    }
  };
  var generic_EncodeArgsProduct1 = /* @__PURE__ */ generic_EncodeArgsProduct(/* @__PURE__ */ generic_EncodeArgsArgumen(encodeGroup));
  var encodePlainNote = {
    encode: function(x) {
      return generic_encode1(generic_EncodeSum2(generic_EncodeSum22(generic_EncodeSum3(generic_EncodeSum(generic_EncodeConstructor(generic_EncodeArgsProduct2(generic_EncodeArgsArgumen(encodePlainNote))))(generic_EncodeSum(generic_EncodeConstructor(generic_EncodeArgsProduct1(generic_EncodeArgsArgumen(encodeList(encodePlainNote)))))(generic_EncodeSum4))))))(x);
    }
  };
  var editableStyle = {
    "render'": function(x) {
      return function(y) {
        return generic_render2(x)(y);
      };
    },
    "default": function(x) {
      return generic_default2(x);
    }
  };
  var genericArgs_EditableProdu2 = /* @__PURE__ */ genericArgs_EditableProdu(/* @__PURE__ */ genericArgs_EditableArgum(editableStyle));
  var editableNoteName = {
    "render'": function(wrap3) {
      return function(x) {
        return generic_render22(wrap3)(x);
      };
    },
    "default": function(x) {
      return generic_default22(x);
    }
  };
  var generic_EditableSum6 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Named";
    }
  })(/* @__PURE__ */ genericArgs_EditableArgum(editableNoteName)));
  var editableImageStyle = {
    "render'": function(x) {
      return function(y) {
        return generic_render3(x)(y);
      };
    },
    "default": function(x) {
      return generic_default3(x);
    }
  };
  var editableImageSize = {
    "render'": function(x) {
      return function(y) {
        return generic_render4(x)(y);
      };
    },
    "default": function(x) {
      return generic_default4(x);
    }
  };
  var generic_EditableSum7 = /* @__PURE__ */ generic_EditableSum(/* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Image";
    }
  })(/* @__PURE__ */ genericArgs_EditableProdu(/* @__PURE__ */ genericArgs_EditableArgum(editableImageSize))(/* @__PURE__ */ genericArgs_EditableProdu(/* @__PURE__ */ genericArgs_EditableArgum(editableImageStyle))(genericArgs_EditableArgum2))))(/* @__PURE__ */ generic_EditableConstruct({
    reflectSymbol: function() {
      return "Inject";
    }
  })(/* @__PURE__ */ genericArgs_EditableArgum(editableVoid)));
  var editableGroup = {
    "render'": function(x) {
      return function(y) {
        return generic_render5(x)(y);
      };
    },
    "default": function(x) {
      return generic_default5(x);
    }
  };
  var genericArgs_EditableProdu1 = /* @__PURE__ */ genericArgs_EditableProdu(/* @__PURE__ */ genericArgs_EditableArgum(editableGroup));
  var editablePlainNote = {
    "render'": function(x) {
      return function(y) {
        return generic_render1(generic_EditableSum4(generic_EditableSum5(generic_EditableSum6(generic_EditableSum(generic_EditableConstruct1(genericArgs_EditableProdu2(genericArgs_EditableArgum(editablePlainNote))))(generic_EditableSum(generic_EditableConstruct22(genericArgs_EditableProdu1(genericArgs_EditableArgum(editableList(editablePlainNote)))))(generic_EditableSum7))))))(x)(y);
      };
    },
    "default": function(x) {
      return generic_default1(generic_EditableSum4(generic_EditableSum5(generic_EditableSum6(generic_EditableSum(generic_EditableConstruct1(genericArgs_EditableProdu2(genericArgs_EditableArgum(editablePlainNote))))(generic_EditableSum(generic_EditableConstruct22(genericArgs_EditableProdu1(genericArgs_EditableArgum(editableList(editablePlainNote)))))(generic_EditableSum7))))))(x);
    }
  };
  var decodeStyle = {
    parse: function(x) {
      return generic_parse2(x);
    }
  };
  var generic_DecodeArgsProduct2 = /* @__PURE__ */ generic_DecodeArgsProduct(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeStyle));
  var decodeNoteName = {
    parse: function(x) {
      return generic_parse22(x);
    }
  };
  var generic_DecodeSum3 = /* @__PURE__ */ generic_DecodeSum(/* @__PURE__ */ generic_DecodeConstructor(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeNoteName)));
  var decodeImageStyle = {
    parse: function(x) {
      return generic_parse3(x);
    }
  };
  var decodeImageSize = {
    parse: function(x) {
      return generic_parse4(x);
    }
  };
  var generic_DecodeSum4 = /* @__PURE__ */ generic_DecodeSum(/* @__PURE__ */ generic_DecodeConstructor(/* @__PURE__ */ generic_DecodeArgsProduct(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeImageSize))(/* @__PURE__ */ generic_DecodeArgsProduct(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeImageStyle))(generic_DecodeArgsArgumen2))))(/* @__PURE__ */ generic_DecodeConstructor(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeVoid)));
  var decodeGroup = {
    parse: function(x) {
      return generic_parse5(x);
    }
  };
  var generic_DecodeArgsProduct1 = /* @__PURE__ */ generic_DecodeArgsProduct(/* @__PURE__ */ generic_DecodeArgsArgumen(decodeGroup));
  var decodePlainNote = {
    parse: function(x) {
      return generic_parse1(generic_DecodeSum2(generic_DecodeSum22(generic_DecodeSum3(generic_DecodeSum(generic_DecodeConstructor(generic_DecodeArgsProduct2(generic_DecodeArgsArgumen(decodePlainNote))))(generic_DecodeSum(generic_DecodeConstructor(generic_DecodeArgsProduct1(generic_DecodeArgsArgumen(decodeList(decodePlainNote)))))(generic_DecodeSum4))))))(x);
    }
  };
  var initialRenderNoteEnv = {
    widgetSlotId: 0
  };

  // output/ModularBlog.Common.Utility/index.js
  var fromJustE = function(dictMonadThrow) {
    var throwError4 = throwError(dictMonadThrow);
    var pure15 = pure(dictMonadThrow.Monad0().Applicative0());
    return function(e) {
      return maybe(throwError4(e))(pure15);
    };
  };

  // output/ModularBlog.Content.Rendering/foreign.js
  var removeElementFromBodyById = (id2) => () => {
    const e = document.getElementById(id2);
    if (e === null) return;
    document.body.removeChild(e);
  };

  // output/Control.Monad.State/index.js
  var evalState = function(v) {
    return function(s) {
      var v1 = v(s);
      return v1.value0;
    };
  };

  // output/ModularBlog.Content.Notes/index.js
  var loremIpsum = /* @__PURE__ */ function() {
    return new Grouped(Column.value, fromFoldable2(foldableArray)([new Literal("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus. Cursus vitae congue mauris rhoncus aenean vel. Semper quis lectus nulla at volutpat. Tortor id aliquet lectus proin nibh nisl condimentum id. Dignissim sodales ut eu sem integer vitae justo eget. Habitasse platea dictumst quisque sagittis purus. Aenean euismod elementum nisi quis. Nunc scelerisque viverra mauris in aliquam. Est velit egestas dui id ornare. Elit ullamcorper dignissim cras tincidunt lobortis. Risus feugiat in ante metus dictum at tempor. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Morbi tincidunt augue interdum velit euismod in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Porttitor rhoncus dolor purus non enim praesent. Velit euismod in pellentesque massa placerat duis ultricies lacus. Adipiscing tristique risus nec feugiat in fermentum."), new Literal("Ut tellus elementum sagittis vitae et leo. Cursus mattis molestie a iaculis at erat pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Tempor id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin. Aliquet nibh praesent tristique magna sit amet. Ac auctor augue mauris augue neque gravida. Libero justo laoreet sit amet cursus sit amet dictum. Cursus metus aliquam eleifend mi in. Velit laoreet id donec ultrices tincidunt arcu. Netus et malesuada fames ac turpis egestas. Sit amet dictum sit amet justo donec. Nunc non blandit massa enim nec. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Velit dignissim sodales ut eu sem. Dignissim suspendisse in est ante in."), new Literal("Consectetur purus ut faucibus pulvinar elementum. Aenean et tortor at risus viverra adipiscing at. Neque vitae tempus quam pellentesque nec nam. Ac placerat vestibulum lectus mauris ultrices eros. Elementum eu facilisis sed odio morbi quis commodo odio. Sem viverra aliquet eget sit amet. Placerat vestibulum lectus mauris ultrices. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Id aliquet lectus proin nibh nisl condimentum id venenatis a."), new Literal("Vestibulum sed arcu non odio euismod. Sed vulputate mi sit amet mauris commodo quis. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ut consequat semper viverra nam. Tristique senectus et netus et malesuada fames ac turpis egestas. Aenean pharetra magna ac placerat vestibulum lectus mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Posuere morbi leo urna molestie at elementum. Enim sed faucibus turpis in eu mi bibendum neque egestas. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc aliquet bibendum enim facilisis. Egestas erat imperdiet sed euismod. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper."), new Literal("Proin libero nunc consequat interdum. Pretium quam vulputate dignissim suspendisse in est. Lorem sed risus ultricies tristique nulla aliquet enim. Ac placerat vestibulum lectus mauris. Ut aliquam purus sit amet luctus venenatis lectus. Eget mauris pharetra et ultrices neque ornare aenean euismod. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et ligula. Quam quisque id diam vel quam elementum pulvinar etiam non. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tellus orci ac auctor augue mauris augue. Tempus imperdiet nulla malesuada pellentesque. Vulputate dignissim suspendisse in est ante in nibh mauris. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis.")]));
  }();
  var notes = /* @__PURE__ */ function() {
    return fromFoldable(ordString)(foldableArray)([new Tuple("loremIpsum", loremIpsum)]);
  }();

  // output/ModularBlog.Content.Rendering/index.js
  var bindStateT2 = /* @__PURE__ */ bindStateT(monadIdentity);
  var bind8 = /* @__PURE__ */ bind(bindStateT2);
  var applicativeStateT2 = /* @__PURE__ */ applicativeStateT(monadIdentity);
  var pure13 = /* @__PURE__ */ pure(applicativeStateT2);
  var show5 = /* @__PURE__ */ show(showStyle);
  var show13 = /* @__PURE__ */ show(showGroup);
  var lookup6 = /* @__PURE__ */ lookup(ordString);
  var map28 = /* @__PURE__ */ map(/* @__PURE__ */ functorStateT(functorIdentity));
  var fold4 = /* @__PURE__ */ fold(foldableList)(monoidArray);
  var sequence2 = /* @__PURE__ */ sequence(traversableList)(applicativeStateT2);
  var map110 = /* @__PURE__ */ map(functorList);
  var show22 = /* @__PURE__ */ show(showImageSize);
  var show32 = /* @__PURE__ */ show(showImageStyle);
  var discard8 = /* @__PURE__ */ discard(discardUnit);
  var discard23 = /* @__PURE__ */ discard8(bindHalogenM);
  var liftEffect7 = /* @__PURE__ */ liftEffect(/* @__PURE__ */ monadEffectHalogenM(monadEffectAff));
  var pure23 = /* @__PURE__ */ pure(applicativeHalogenM);
  var put3 = /* @__PURE__ */ put(monadStateHalogenM);
  var renderNoteExtraRenderNote = {
    renderNoteInject: /* @__PURE__ */ unwrap()
  };
  var runRenderM = /* @__PURE__ */ flip(evalState)(initialRenderNoteEnv);
  var renderStyled = function(style3) {
    return function(m_hs) {
      var use_css_class = bind8(m_hs)(function(hs) {
        return pure13([div2([class_(show5(style3))])(hs)]);
      });
      return use_css_class;
    };
  };
  var renderNoteInject = function(dict) {
    return dict.renderNoteInject;
  };
  var renderGrouped = function(group4) {
    return function(m_hs) {
      var use_css_class = bind8(m_hs)(function(hs) {
        return pure13([div2([class_(show13(group4))])(hs)]);
      });
      return use_css_class;
    };
  };
  var renderNote = function(dictRenderNoteExtra) {
    var renderNoteInject1 = renderNoteInject(dictRenderNoteExtra);
    return function(v) {
      if (v instanceof Hole) {
        return pure13([span3([class_("Hole")])([])]);
      }
      ;
      if (v instanceof Literal) {
        return pure13([span3([class_("Literal")])([text5(v.value0)])]);
      }
      ;
      if (v instanceof Named) {
        var v1 = lookup6(v.value0)(notes);
        if (v1 instanceof Nothing && v.value0 === "") {
          return pure13([]);
        }
        ;
        if (v1 instanceof Nothing) {
          return pure13([span3([style("background-color: lightpink")])([text5("unrecognized note name: " + v.value0)])]);
        }
        ;
        if (v1 instanceof Just) {
          return renderNote(renderNoteExtraRenderNote)(v1.value0);
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.Content.Rendering (line 83, column 28 - line 86, column 33): " + [v1.constructor.name]);
      }
      ;
      if (v instanceof Styled) {
        return renderStyled(v.value0)(renderNote(dictRenderNoteExtra)(v.value1));
      }
      ;
      if (v instanceof Grouped) {
        return renderGrouped(v.value0)(map28(fold4)(sequence2(map110(renderNote(dictRenderNoteExtra))(v.value1))));
      }
      ;
      if (v instanceof Image2) {
        return pure13([img([classes(["Image", show22(v.value0), show32(v.value1)]), src9(v.value2)])]);
      }
      ;
      if (v instanceof Inject) {
        return renderNoteInject1(v.value0);
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Content.Rendering (line 80, column 14 - line 90, column 33): " + [v.constructor.name]);
    };
  };
  var renderNote1 = /* @__PURE__ */ renderNote(renderNoteExtraRenderNote);
  var component_Page = /* @__PURE__ */ function() {
    var render2 = function(v) {
      return div2([])(runRenderM(renderNote1(v.page.note)));
    };
    var initialState = function(v) {
      return {
        page: v.page
      };
    };
    var handleAction = function(v) {
      if (v instanceof Initialize_PageAction) {
        return discard23(liftEffect7(removeElementFromBodyById("static_content")))(function() {
          return pure23(unit);
        });
      }
      ;
      if (v instanceof Receive_PageAction) {
        return put3(initialState(v.value0));
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.Content.Rendering (line 39, column 18 - line 43, column 59): " + [v.constructor.name]);
    };
    var $$eval = mkEval({
      handleQuery: defaultEval.handleQuery,
      finalize: defaultEval.finalize,
      initialize: new Just(Initialize_PageAction.value),
      receive: function($77) {
        return Just.create(Receive_PageAction.create($77));
      },
      handleAction
    });
    return mkComponent({
      initialState,
      "eval": $$eval,
      render: render2
    });
  }();

  // output/Web.URL.URLSearchParams/foreign.js
  function urlSearchParamsImpl(x) {
    return new URLSearchParams(x);
  }
  function getImpl(just) {
    return function(nothing) {
      return function(name15) {
        return function(p2) {
          var v = p2.get(name15);
          if (v === null) {
            return nothing;
          } else {
            return just(v);
          }
        };
      };
    };
  }

  // output/Web.URL.URLSearchParams/index.js
  var get3 = /* @__PURE__ */ function() {
    return getImpl(Just.create)(Nothing.value);
  }();
  var fromString = urlSearchParamsImpl;

  // output/ModularBlog.App.Index/index.js
  var fold5 = /* @__PURE__ */ fold2(monoidArray);
  var encode2 = /* @__PURE__ */ encode(encodePlainNote);
  var map29 = /* @__PURE__ */ map(functorMaybe);
  var not3 = /* @__PURE__ */ not(heytingAlgebraBoolean);
  var slot2 = /* @__PURE__ */ slot()({
    reflectSymbol: function() {
      return "editor";
    }
  })(ordUnit);
  var component1 = /* @__PURE__ */ component(editablePlainNote);
  var slot_2 = /* @__PURE__ */ slot_()({
    reflectSymbol: function() {
      return "page";
    }
  })(ordUnit);
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorNote);
  var bind9 = /* @__PURE__ */ bind(bindHalogenM);
  var monadEffectHalogenM2 = /* @__PURE__ */ monadEffectHalogenM(monadEffectAff);
  var liftEffect8 = /* @__PURE__ */ liftEffect(monadEffectHalogenM2);
  var pure14 = /* @__PURE__ */ pure(applicativeHalogenM);
  var discard9 = /* @__PURE__ */ discard(discardUnit)(bindHalogenM);
  var fromJustE2 = /* @__PURE__ */ fromJustE(/* @__PURE__ */ monadThrowHalogenM(monadThrowAff));
  var log4 = /* @__PURE__ */ log2(monadEffectHalogenM2);
  var decode2 = /* @__PURE__ */ decode(decodePlainNote);
  var modify_4 = /* @__PURE__ */ modify_(monadStateHalogenM);
  var show6 = /* @__PURE__ */ show(showParseError);
  var prop4 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "mb_show_editor";
    }
  })()();
  var prop12 = /* @__PURE__ */ prop({
    reflectSymbol: function() {
      return "mb_err_note";
    }
  })()();
  var $$void9 = /* @__PURE__ */ $$void(functorHalogenM);
  var bindFlipped9 = /* @__PURE__ */ bindFlipped(bindEffect);
  var Initialize2 = /* @__PURE__ */ function() {
    function Initialize3() {
    }
    ;
    Initialize3.value = new Initialize3();
    return Initialize3;
  }();
  var Modify_ShowEditor = /* @__PURE__ */ function() {
    function Modify_ShowEditor2(value0) {
      this.value0 = value0;
    }
    ;
    Modify_ShowEditor2.create = function(value0) {
      return new Modify_ShowEditor2(value0);
    };
    return Modify_ShowEditor2;
  }();
  var Modify_Note = /* @__PURE__ */ function() {
    function Modify_Note2(value0) {
      this.value0 = value0;
    }
    ;
    Modify_Note2.create = function(value0) {
      return new Modify_Note2(value0);
    };
    return Modify_Note2;
  }();
  var OpenLink = /* @__PURE__ */ function() {
    function OpenLink2(value0) {
      this.value0 = value0;
    }
    ;
    OpenLink2.create = function(value0) {
      return new OpenLink2(value0);
    };
    return OpenLink2;
  }();
  var _mb_show_editor = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();
  var _mb_err_note = /* @__PURE__ */ function() {
    return $$Proxy.value;
  }();
  var component2 = /* @__PURE__ */ function() {
    var initialState = function(v) {
      return {
        mb_show_editor: new Just(false),
        mb_err_note: new Just(new Right(new Literal("hello world!")))
      };
    };
    var href_of_note_enc = function(note_enc) {
      return "/?content=" + fromMaybe("failure when encoding URI component")($$encodeURIComponent(note_enc));
    };
    var render2 = function(v) {
      return div2([style("display: flex; flex-direction: column; gap: 0.5em; padding: 1em 0")])(fold5([function() {
        if (v.mb_show_editor instanceof Nothing) {
          return [];
        }
        ;
        if (v.mb_show_editor instanceof Just) {
          return [div2([style("padding: 0 0.5em;")])([function() {
            if (v.mb_err_note instanceof Nothing) {
              return text5("no encoding");
            }
            ;
            if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Left) {
              return text5("no encoding");
            }
            ;
            if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Right) {
              var note_enc = encode2(v.mb_err_note.value0.value0);
              return a([href4("/?content=" + fromMaybe("failure when encoding URI component")($$encodeURIComponent(note_enc)))])([text5(note_enc)]);
            }
            ;
            throw new Error("Failed pattern match at ModularBlog.App.Index (line 107, column 21 - line 117, column 49): " + [v.mb_err_note.constructor.name]);
          }()])];
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.App.Index (line 102, column 11 - line 119, column 16): " + [v.mb_show_editor.constructor.name]);
      }(), function() {
        if (v.mb_show_editor instanceof Nothing) {
          return [];
        }
        ;
        if (v.mb_show_editor instanceof Just) {
          return [div2([style("display: flex; flex-direction: row; gap: 0.5em; padding: 0 0.5em;")])(fold5([[button([onClick($$const(new Modify_ShowEditor(map29(not3))))])([text5(function() {
            if (v.mb_show_editor.value0) {
              return "hide editor";
            }
            ;
            return "show editor";
          }())])], function() {
            if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Right) {
              return [button([onClick($$const(new OpenLink(function(v1) {
                return v1 + "&mode=publish";
              }(href_of_note_enc(encode2(v.mb_err_note.value0.value0))))))])([text5("publish")])];
            }
            ;
            return [];
          }()])), div2([style(function() {
            if (v.mb_show_editor.value0) {
              return "border: 0.2em solid black; padding: 0.5em;";
            }
            ;
            return "display: none; ";
          }())])(function() {
            if (v.mb_err_note instanceof Nothing) {
              return [];
            }
            ;
            if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Left) {
              return [];
            }
            ;
            if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Right) {
              return [slot2($$Proxy.value)(unit)(component1)({
                val: v.mb_err_note.value0.value0
              })(function(v1) {
                return new Modify_Note($$const(new Just(new Right(v1.value0))));
              })];
            }
            ;
            throw new Error("Failed pattern match at ModularBlog.App.Index (line 133, column 19 - line 139, column 24): " + [v.mb_err_note.constructor.name]);
          }())];
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.App.Index (line 120, column 11 - line 140, column 16): " + [v.mb_show_editor.constructor.name]);
      }(), function() {
        if (v.mb_err_note instanceof Nothing) {
          return [];
        }
        ;
        if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Left) {
          return [div2([style("padding: 0 0.5em; background-color: lightpink")])([text5(v.mb_err_note.value0.value0)])];
        }
        ;
        if (v.mb_err_note instanceof Just && v.mb_err_note.value0 instanceof Right) {
          return [div2([class_("Page-Body")])([slot_2($$Proxy.value)(unit)(component_Page)({
            page: {
              name: "dynamic",
              static_content: "",
              stylesheet_hrefs: [],
              note: mapFlipped3(v.mb_err_note.value0.value0)(absurd)
            }
          })])];
        }
        ;
        throw new Error("Failed pattern match at ModularBlog.App.Index (line 141, column 11 - line 160, column 16): " + [v.mb_err_note.constructor.name]);
      }()]));
    };
    var handleAction = function(v) {
      if (v instanceof Initialize2) {
        return bind9(liftEffect8(windowImpl))(function(window2) {
          return bind9(liftEffect8(location(window2)))(function(location2) {
            return bind9(liftEffect8(search(location2)))(function(search2) {
              return bind9(pure14(fromString(search2)))(function(usp) {
                return discard9(function(v1) {
                  if (v1 instanceof Nothing) {
                    return pure14(unit);
                  }
                  ;
                  if (v1 instanceof Just) {
                    return bind9(fromJustE2(error("failed to decodeURIComponent"))($$decodeURIComponent(v1.value0)))(function(content_string) {
                      return discard9(log4("content_string: " + content_string))(function() {
                        var v2 = decode2(content_string);
                        if (v2 instanceof Left) {
                          return discard9(log4("failure when decoding ?content value"))(function() {
                            return modify_4(function(v3) {
                              var $83 = {};
                              for (var $84 in v3) {
                                if ({}.hasOwnProperty.call(v3, $84)) {
                                  $83[$84] = v3[$84];
                                }
                                ;
                              }
                              ;
                              $83.mb_err_note = new Just(new Left(show6(v2.value0)));
                              return $83;
                            });
                          });
                        }
                        ;
                        if (v2 instanceof Right) {
                          return discard9(log4("success when decoding ?content value"))(function() {
                            return modify_4(function(v3) {
                              var $87 = {};
                              for (var $88 in v3) {
                                if ({}.hasOwnProperty.call(v3, $88)) {
                                  $87[$88] = v3[$88];
                                }
                                ;
                              }
                              ;
                              $87.mb_err_note = new Just(new Right(v2.value0));
                              return $87;
                            });
                          });
                        }
                        ;
                        throw new Error("Failed pattern match at ModularBlog.App.Index (line 80, column 11 - line 86, column 62): " + [v2.constructor.name]);
                      });
                    });
                  }
                  ;
                  throw new Error("Failed pattern match at ModularBlog.App.Index (line 75, column 53 - line 86, column 62): " + [v1.constructor.name]);
                }(get3("content")(usp)))(function() {
                  return function(v1) {
                    if (v1 instanceof Just && v1.value0 === "publish") {
                      return modify_4(function(v2) {
                        var $93 = {};
                        for (var $94 in v2) {
                          if ({}.hasOwnProperty.call(v2, $94)) {
                            $93[$94] = v2[$94];
                          }
                          ;
                        }
                        ;
                        $93.mb_show_editor = Nothing.value;
                        return $93;
                      });
                    }
                    ;
                    if (v1 instanceof Just && v1.value0 === "draft") {
                      return modify_4(function(v2) {
                        var $97 = {};
                        for (var $98 in v2) {
                          if ({}.hasOwnProperty.call(v2, $98)) {
                            $97[$98] = v2[$98];
                          }
                          ;
                        }
                        ;
                        $97.mb_show_editor = new Just(false);
                        return $97;
                      });
                    }
                    ;
                    return pure14(unit);
                  }(get3("mode")(usp));
                });
              });
            });
          });
        });
      }
      ;
      if (v instanceof Modify_ShowEditor) {
        return modify_4(prop4(_mb_show_editor)(strongFn)(v.value0));
      }
      ;
      if (v instanceof Modify_Note) {
        return modify_4(prop12(_mb_err_note)(strongFn)(v.value0));
      }
      ;
      if (v instanceof OpenLink) {
        return $$void9(liftEffect8(bindFlipped9(open(v.value0)("_self")(""))(windowImpl)));
      }
      ;
      throw new Error("Failed pattern match at ModularBlog.App.Index (line 69, column 18 - line 93, column 100): " + [v.constructor.name]);
    };
    var $$eval = mkEval({
      handleQuery: defaultEval.handleQuery,
      receive: defaultEval.receive,
      finalize: defaultEval.finalize,
      initialize: new Just(Initialize2.value),
      handleAction
    });
    return mkComponent({
      initialState,
      "eval": $$eval,
      render: render2
    });
  }();
  var main2 = /* @__PURE__ */ runHalogenAff(/* @__PURE__ */ bindFlipped(bindAff)(/* @__PURE__ */ runUI2(component2)({}))(awaitBody));

  // <stdin>
  main2();
})();
