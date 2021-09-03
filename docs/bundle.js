(function () {
	'use strict';

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

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$6 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$2(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f$6
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var aFunction$1 = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process$3 = global_1.process;
	var Deno = global_1.Deno;
	var versions = process$3 && process$3.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] < 4 ? 1 : match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	/* eslint-disable es/no-symbol -- required for testing */



	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version && engineV8Version < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */


	var useSymbolAsUid = nativeSymbol$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
	};

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var setGlobal = function (key, value) {
	  try {
	    // eslint-disable-next-line es/no-object-defineproperty -- safe
	    Object.defineProperty(global_1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.17.2',
	  mode: 'global',
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});
	});

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has$1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty.call(toObject(it), key);
	};

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol$1 || typeof WellKnownSymbolsStore[name] == 'string')) {
	    if (nativeSymbol$1 && has$1(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol(input)) return input;
	  var exoticToPrim = input[TO_PRIMITIVE];
	  var result;
	  if (exoticToPrim !== undefined) {
	    if (pref === undefined) pref = 'default';
	    result = exoticToPrim.call(input, pref);
	    if (!isObject(result) || isSymbol(result)) return result;
	    throw TypeError("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : String(key);
	};

	var document$3 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$3) && isObject(document$3.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$3.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$5 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$5
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$4 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$4
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var functionToString = Function.toString;

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$1 = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$1 = {};

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var WeakMap = global_1.WeakMap;
	var set$1, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set$1(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap || sharedStore.state) {
	  var store = sharedStore.state || (sharedStore.state = new WeakMap());
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set$1 = function (it, metadata) {
	    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;
	  set$1 = function (it, metadata) {
	    if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has$1(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return has$1(it, STATE);
	  };
	}

	var internalState = {
	  set: set$1,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var state;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has$1(value, 'name')) {
	      createNonEnumerableProperty(value, 'name', key);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
	    }
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});
	});

	var ceil = Math.ceil;
	var floor$2 = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.es/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$2 : ceil)(argument);
	};

	var min$2 = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min$2(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max$1 = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$1 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$1(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$1(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has$1(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es/no-object-getownpropertynames -- safe
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	var f$2 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$2
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys$1(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var aFunction = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	var toString_1 = function (argument) {
	  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
	  return String(argument);
	};

	// TODO: use something more complex like timsort?
	var floor$1 = Math.floor;

	var mergeSort = function (array, comparefn) {
	  var length = array.length;
	  var middle = floor$1(length / 2);
	  return length < 8 ? insertionSort(array, comparefn) : merge(
	    mergeSort(array.slice(0, middle), comparefn),
	    mergeSort(array.slice(middle), comparefn),
	    comparefn
	  );
	};

	var insertionSort = function (array, comparefn) {
	  var length = array.length;
	  var i = 1;
	  var element, j;

	  while (i < length) {
	    j = i;
	    element = array[i];
	    while (j && comparefn(array[j - 1], element) > 0) {
	      array[j] = array[--j];
	    }
	    if (j !== i++) array[j] = element;
	  } return array;
	};

	var merge = function (left, right, comparefn) {
	  var llength = left.length;
	  var rlength = right.length;
	  var lindex = 0;
	  var rindex = 0;
	  var result = [];

	  while (lindex < llength || rindex < rlength) {
	    if (lindex < llength && rindex < rlength) {
	      result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
	    } else {
	      result.push(lindex < llength ? left[lindex++] : right[rindex++]);
	    }
	  } return result;
	};

	var arraySort = mergeSort;

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var firefox = engineUserAgent.match(/firefox\/(\d+)/i);

	var engineFfVersion = !!firefox && +firefox[1];

	var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

	var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);

	var engineWebkitVersion = !!webkit && +webkit[1];

	var test$2 = [];
	var nativeSort = test$2.sort;

	// IE8-
	var FAILS_ON_UNDEFINED = fails(function () {
	  test$2.sort(undefined);
	});
	// V8 bug
	var FAILS_ON_NULL = fails(function () {
	  test$2.sort(null);
	});
	// Old WebKit
	var STRICT_METHOD = arrayMethodIsStrict('sort');

	var STABLE_SORT = !fails(function () {
	  // feature detection can be too slow, so check engines versions
	  if (engineV8Version) return engineV8Version < 70;
	  if (engineFfVersion && engineFfVersion > 3) return;
	  if (engineIsIeOrEdge) return true;
	  if (engineWebkitVersion) return engineWebkitVersion < 603;

	  var result = '';
	  var code, chr, value, index;

	  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
	  for (code = 65; code < 76; code++) {
	    chr = String.fromCharCode(code);

	    switch (code) {
	      case 66: case 69: case 70: case 72: value = 3; break;
	      case 68: case 71: value = 4; break;
	      default: value = 2;
	    }

	    for (index = 0; index < 47; index++) {
	      test$2.push({ k: chr + index, v: value });
	    }
	  }

	  test$2.sort(function (a, b) { return b.v - a.v; });

	  for (index = 0; index < test$2.length; index++) {
	    chr = test$2[index].k.charAt(0);
	    if (result.charAt(result.length - 1) !== chr) result += chr;
	  }

	  return result !== 'DGBEFHACIJK';
	});

	var FORCED$1 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

	var getSortCompare = function (comparefn) {
	  return function (x, y) {
	    if (y === undefined) return -1;
	    if (x === undefined) return 1;
	    if (comparefn !== undefined) return +comparefn(x, y) || 0;
	    return toString_1(x) > toString_1(y) ? 1 : -1;
	  };
	};

	// `Array.prototype.sort` method
	// https://tc39.es/ecma262/#sec-array.prototype.sort
	_export({ target: 'Array', proto: true, forced: FORCED$1 }, {
	  sort: function sort(comparefn) {
	    if (comparefn !== undefined) aFunction(comparefn);

	    var array = toObject(this);

	    if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);

	    var items = [];
	    var arrayLength = toLength(array.length);
	    var itemsLength, index;

	    for (index = 0; index < arrayLength; index++) {
	      if (index in array) items.push(array[index]);
	    }

	    items = arraySort(items, getSortCompare(comparefn));
	    itemsLength = items.length;
	    index = 0;

	    while (index < itemsLength) array[index] = items[index++];
	    while (index < arrayLength) delete array[index++];

	    return array;
	  }
	});

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	var $RegExp$2 = global_1.RegExp;

	var UNSUPPORTED_Y$1 = fails(function () {
	  var re = $RegExp$2('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	var BROKEN_CARET = fails(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = $RegExp$2('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
		UNSUPPORTED_Y: UNSUPPORTED_Y$1,
		BROKEN_CARET: BROKEN_CARET
	};

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */








	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
	var $RegExp$1 = global_1.RegExp;

	var regexpUnsupportedDotAll = fails(function () {
	  var re = $RegExp$1('.', 's');
	  return !(re.dotAll && re.exec('\n') && re.flags === 's');
	});

	// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
	var $RegExp = global_1.RegExp;

	var regexpUnsupportedNcg = fails(function () {
	  var re = $RegExp('(?<a>b)', 'g');
	  return re.exec('b').groups.a !== 'b' ||
	    'b'.replace(re, '$<a>c') !== 'bc';
	});

	/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
	/* eslint-disable regexp/no-useless-quantifier -- testing */





	var getInternalState$2 = internalState.get;



	var nativeExec = RegExp.prototype.exec;
	var nativeReplace = shared('native-string-replace', String.prototype.replace);

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || regexpUnsupportedDotAll || regexpUnsupportedNcg;

	if (PATCH) {
	  // eslint-disable-next-line max-statements -- TODO
	  patchedExec = function exec(string) {
	    var re = this;
	    var state = getInternalState$2(re);
	    var str = toString_1(string);
	    var raw = state.raw;
	    var result, reCopy, lastIndex, match, i, object, group;

	    if (raw) {
	      raw.lastIndex = re.lastIndex;
	      result = patchedExec.call(raw, str);
	      re.lastIndex = raw.lastIndex;
	      return result;
	    }

	    var groups = state.groups;
	    var sticky = UNSUPPORTED_Y && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = str.slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    if (match && groups) {
	      match.groups = object = objectCreate(null);
	      for (i = 0; i < groups.length; i++) {
	        group = groups[i];
	        object[group[0]] = match[group[1]];
	      }
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	// `RegExp.prototype.exec` method
	// https://tc39.es/ecma262/#sec-regexp.prototype.exec
	_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
	  exec: regexpExec
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points







	var SPECIES$3 = wellKnownSymbol('species');
	var RegExpPrototype = RegExp.prototype;

	var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$3] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    FORCED
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      var $exec = regexp.exec;
	      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    });

	    redefine(String.prototype, KEY, methods[0]);
	    redefine(RegExpPrototype, SYMBOL, methods[1]);
	  }

	  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
	};

	// `String.prototype.codePointAt` methods implementation
	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString_1(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.es/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	var floor = Math.floor;
	var replace = ''.replace;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

	// `GetSubstitution` abstract operation
	// https://tc39.es/ecma262/#sec-getsubstitution
	var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
	  var tailPos = position + matched.length;
	  var m = captures.length;
	  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	  if (namedCaptures !== undefined) {
	    namedCaptures = toObject(namedCaptures);
	    symbols = SUBSTITUTION_SYMBOLS;
	  }
	  return replace.call(replacement, symbols, function (match, ch) {
	    var capture;
	    switch (ch.charAt(0)) {
	      case '$': return '$';
	      case '&': return matched;
	      case '`': return str.slice(0, position);
	      case "'": return str.slice(tailPos);
	      case '<':
	        capture = namedCaptures[ch.slice(1, -1)];
	        break;
	      default: // \d\d?
	        var n = +ch;
	        if (n === 0) return match;
	        if (n > m) {
	          var f = floor(n / 10);
	          if (f === 0) return match;
	          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	          return match;
	        }
	        capture = captures[n - 1];
	    }
	    return capture === undefined ? '' : capture;
	  });
	};

	// `RegExpExec` abstract operation
	// https://tc39.es/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	var REPLACE = wellKnownSymbol('replace');
	var max = Math.max;
	var min = Math.min;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
	  return ''.replace(re, '$<a>') !== '7';
	});

	// @@replace logic
	fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.es/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(toString_1(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
	    function (string, replaceValue) {
	      var rx = anObject(this);
	      var S = toString_1(string);

	      if (
	        typeof replaceValue === 'string' &&
	        replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 &&
	        replaceValue.indexOf('$<') === -1
	      ) {
	        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
	        if (res.done) return res.value;
	      }

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = toString_1(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regexpExecAbstract(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = toString_1(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = toString_1(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = toString_1(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];
	}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

	var nativePromiseConstructor = global_1.Promise;

	var redefineAll = function (target, src, options) {
	  for (var key in src) redefine(target, key, src[key], options);
	  return target;
	};

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	/* eslint-disable no-proto -- safe */



	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var defineProperty$1 = objectDefineProperty.f;



	var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

	var setToStringTag = function (it, TAG, STATIC) {
	  if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$3)) {
	    defineProperty$1(it, TO_STRING_TAG$3, { configurable: true, value: TAG });
	  }
	};

	var SPECIES$2 = wellKnownSymbol('species');

	var setSpecies = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
	  var defineProperty = objectDefineProperty.f;

	  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
	    defineProperty(Constructor, SPECIES$2, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var anInstance = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  } return it;
	};

	var iterators = {};

	var ITERATOR$5 = wellKnownSymbol('iterator');
	var ArrayPrototype$1 = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$5] === it);
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var test$1 = {};

	test$1[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var ITERATOR$4 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$4]
	    || it['@@iterator']
	    || iterators[classof(it)];
	};

	var getIterator = function (it, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(it) : usingIterator;
	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  } return anObject(iteratorMethod.call(it));
	};

	var iteratorClose = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject(iterator);
	  try {
	    innerResult = iterator['return'];
	    if (innerResult === undefined) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = innerResult.call(iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject(innerResult);
	  return value;
	};

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
	  var iterator, iterFn, index, length, result, next, step;

	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };

	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
	    // optimisation for array iterators
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = toLength(iterable.length); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && result instanceof Result) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }

	  next = iterator.next;
	  while (!(step = next.call(iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  } return new Result(false);
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$3] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$3] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var SPECIES$1 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
	};

	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

	var engineIsNode = classofRaw(global_1.process) == 'process';

	var set = global_1.setImmediate;
	var clear = global_1.clearImmediate;
	var process$2 = global_1.process;
	var MessageChannel = global_1.MessageChannel;
	var Dispatch = global_1.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;

	try {
	  // Deno throws a ReferenceError on `location` access without `--location` flag
	  location = global_1.location;
	} catch (error) { /* empty */ }

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global_1.postMessage(String(id), location.protocol + '//' + location.host);
	};

	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!set || !clear) {
	  set = function setImmediate(fn) {
	    var args = [];
	    var argumentsLength = arguments.length;
	    var i = 1;
	    while (argumentsLength > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func -- spec requirement
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (engineIsNode) {
	    defer = function (id) {
	      process$2.nextTick(runner(id));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  // except iOS - https://github.com/zloirock/core-js/issues/624
	  } else if (MessageChannel && !engineIsIos) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = functionBindContext(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (
	    global_1.addEventListener &&
	    typeof postMessage == 'function' &&
	    !global_1.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails(post)
	  ) {
	    defer = post;
	    global_1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
	    defer = function (id) {
	      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$1 = {
	  set: set,
	  clear: clear
	};

	var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var macrotask = task$1.set;





	var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
	var document$2 = global_1.document;
	var process$1 = global_1.process;
	var Promise$1 = global_1.Promise;
	// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global_1, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

	var flush, head, last, notify$1, toggle, node, promise, then;

	// modern engines have queueMicrotask method
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (engineIsNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
	  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
	  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
	    toggle = true;
	    node = document$2.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    // workaround of WebKit ~ iOS Safari 10.1 bug
	    promise.constructor = Promise$1;
	    then = promise.then;
	    notify$1 = function () {
	      then.call(promise, flush);
	    };
	  // Node.js without promises
	  } else if (engineIsNode) {
	    notify$1 = function () {
	      process$1.nextTick(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify$1 = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global_1, flush);
	    };
	  }
	}

	var microtask = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	};

	// `NewPromiseCapability` abstract operation
	// https://tc39.es/ecma262/#sec-newpromisecapability
	var f$1 = function (C) {
	  return new PromiseCapability(C);
	};

	var newPromiseCapability$1 = {
		f: f$1
	};

	var promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var hostReportErrors = function (a, b) {
	  var console = global_1.console;
	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var engineIsBrowser = typeof window == 'object';

	var task = task$1.set;












	var SPECIES = wellKnownSymbol('species');
	var PROMISE = 'Promise';
	var getInternalState$1 = internalState.get;
	var setInternalState$1 = internalState.set;
	var getInternalPromiseState = internalState.getterFor(PROMISE);
	var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
	var PromiseConstructor = nativePromiseConstructor;
	var PromiseConstructorPrototype = NativePromisePrototype;
	var TypeError$1 = global_1.TypeError;
	var document$1 = global_1.document;
	var process = global_1.process;
	var newPromiseCapability = newPromiseCapability$1.f;
	var newGenericPromiseCapability = newPromiseCapability;
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
	var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var SUBCLASSING = false;
	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

	var FORCED = isForced_1(PROMISE, function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
	  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	  // We can't detect it synchronously, so just check versions
	  if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
	  // We can't use @@species feature detection in V8 since it causes
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679
	  if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
	  // Detect correctness of subclassing with @@species support
	  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
	  var FakePromise = function (exec) {
	    exec(function () { /* empty */ }, function () { /* empty */ });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES] = FakePromise;
	  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
	  if (!SUBCLASSING) return true;
	  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	  return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
	});

	var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
	});

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    // variable length - can't use forEach
	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	            state.rejection = HANDLED;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global_1.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (state) {
	  task.call(global_1, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform(function () {
	        if (engineIsNode) {
	          process.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (state) {
	  task.call(global_1, function () {
	    var promise = state.facade;
	    if (engineIsNode) {
	      process.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};

	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};

	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          then.call(value,
	            bind(internalResolve, wrapper, state),
	            bind(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};

	// constructor polyfill
	if (FORCED) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance(this, PromiseConstructor, PROMISE);
	    aFunction(executor);
	    Internal.call(this);
	    var state = getInternalState$1(this);
	    try {
	      executor(bind(internalResolve, state), bind(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromiseConstructorPrototype = PromiseConstructor.prototype;
	  // eslint-disable-next-line no-unused-vars -- required for `.length`
	  Internal = function Promise(executor) {
	    setInternalState$1(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = engineIsNode ? process.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify(state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.es/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$1(promise);
	    this.promise = promise;
	    this.resolve = bind(internalResolve, state);
	    this.reject = bind(internalReject, state);
	  };
	  newPromiseCapability$1.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };

	  if (typeof nativePromiseConstructor == 'function' && NativePromisePrototype !== Object.prototype) {
	    nativeThen = NativePromisePrototype.then;

	    if (!SUBCLASSING) {
	      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
	      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
	        var that = this;
	        return new PromiseConstructor(function (resolve, reject) {
	          nativeThen.call(that, resolve, reject);
	        }).then(onFulfilled, onRejected);
	      // https://github.com/zloirock/core-js/issues/640
	      }, { unsafe: true });

	      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
	      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
	    }

	    // make `.constructor === Promise` work for native promise-based APIs
	    try {
	      delete NativePromisePrototype.constructor;
	    } catch (error) { /* empty */ }

	    // make `instanceof Promise` work for native promise-based APIs
	    if (objectSetPrototypeOf) {
	      objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
	    }
	  }
	}

	_export({ global: true, wrap: true, forced: FORCED }, {
	  Promise: PromiseConstructor
	});

	setToStringTag(PromiseConstructor, PROMISE, false);
	setSpecies(PROMISE);

	PromiseWrapper = getBuiltIn(PROMISE);

	// statics
	_export({ target: PROMISE, stat: true, forced: FORCED }, {
	  // `Promise.reject` method
	  // https://tc39.es/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});

	_export({ target: PROMISE, stat: true, forced: FORCED }, {
	  // `Promise.resolve` method
	  // https://tc39.es/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve(this, x);
	  }
	});

	_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  // `Promise.all` method
	  // https://tc39.es/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.es/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      var $promiseResolve = aFunction(C.resolve);
	      iterate(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

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

	var defineProperty = objectDefineProperty.f;


	var NativeSymbol = global_1.Symbol;

	if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;

	  var symbolToString = symbolPrototype.toString;
	  var nativeSymbol = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has$1(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = nativeSymbol ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  _export({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: objectCreate(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	var addToUnscopables = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has$1(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	var returnThis$2 = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$2].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!has$1(IteratorPrototype$2, ITERATOR$2)) {
	  createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$2, returnThis$2);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$1 = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$1]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR$1] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
	  }
	  iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	iterators.Arguments = iterators.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	var ITERATOR = wellKnownSymbol('iterator');
	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var ArrayValues = es_array_iterator.values;

	for (var COLLECTION_NAME in domIterables) {
	  var Collection = global_1[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }
	    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
	      }
	    }
	  }
	}

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var nativeReverse = [].reverse;
	var test = [1, 2];

	// `Array.prototype.reverse` method
	// https://tc39.es/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794
	_export({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign -- dirty hack
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

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

	var _excluded$e = ["class", "className", "style", "ref"],
	    _excluded2 = ["class", "className", "style", "ref"];

	var log = str => {
	  debugger;
	  /* Intentional */
	};
	//Pick<h.JSX.HTMLAttributes<E>, keyof h.JSX.HTMLAttributes<E> & (keyof T | keyof U)>; 

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
	      className: useMergedClasses(lhs2, rhs2)
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
	    lhs === null || lhs === void 0 ? void 0 : lhs(...args);
	    rhs === null || rhs === void 0 ? void 0 : rhs(...args);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLWtleS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oaWRkZW4ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc29ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1mZi12ZXJzaW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1pZS1vci1lZGdlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS13ZWJraXQtdmVyc2lvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc29ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZmxhZ3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLWRvdC1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLW5jZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvci1jbG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtaW9zLXBlYmJsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtd2Vib3Mtd2Via2l0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGVyZm9ybS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9kaXN0L2hvb2tzLm1vZHVsZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMtY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkucmV2ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIi4uL2ZvcndhcmQtZWxlbWVudC1yZWYuanMiLCIuLi9ub2RlX21vZHVsZXMvY2xzeC9kaXN0L2Nsc3gubS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtY2xhc3Nlcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcmVmcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtc3R5bGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1zdGF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1yZWYtZWxlbWVudC5qcyIsIi4uL3RyYW5zaXRpb25hYmxlLmpzIiwiLi4vY2xpcC5qcyIsIi4uL2ZhZGUuanMiLCIuLi9jbGlwLWZhZGUuanMiLCIuLi9jb2xsYXBzZS5qcyIsIi4uL2NvbGxhcHNlLWZhZGUuanMiLCIuLi9zbGlkZS5qcyIsIi4uL3NsaWRlLWZhZGUuanMiLCIuLi96b29tLmpzIiwiLi4vem9vbS1mYWRlLmpzIiwiLi4vc2xpZGUtem9vbS5qcyIsIi4uL3NsaWRlLXpvb20tZmFkZS5qcyIsIi4uL2ZsaXAuanMiLCIuLi9zd2FwcGFibGUuanMiLCJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPCA0ID8gMSA6IG1hdGNoWzBdICsgbWF0Y2hbMV07XG59IGVsc2UgaWYgKHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9IG1hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIHJldHVybiAhU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbicgJiYgT2JqZWN0KGl0KSBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjE3LjInLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjEgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkgfHwgIShOQVRJVkVfU1lNQk9MIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgIH1cbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBpbnB1dFtUT19QUklNSVRJVkVdO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGV4b3RpY1RvUHJpbS5jYWxsKGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwidmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IFN0cmluZyhrZXkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWllZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmICh3bWhhcy5jYWxsKHN0b3JlLCBpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAob2JqZWN0SGFzKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc1N5bWJvbChhcmd1bWVudCkpIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwiLy8gVE9ETzogdXNlIHNvbWV0aGluZyBtb3JlIGNvbXBsZXggbGlrZSB0aW1zb3J0P1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxudmFyIG1lcmdlU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBtaWRkbGUgPSBmbG9vcihsZW5ndGggLyAyKTtcbiAgcmV0dXJuIGxlbmd0aCA8IDggPyBpbnNlcnRpb25Tb3J0KGFycmF5LCBjb21wYXJlZm4pIDogbWVyZ2UoXG4gICAgbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgbWVyZ2VTb3J0KGFycmF5LnNsaWNlKG1pZGRsZSksIGNvbXBhcmVmbiksXG4gICAgY29tcGFyZWZuXG4gICk7XG59O1xuXG52YXIgaW5zZXJ0aW9uU29ydCA9IGZ1bmN0aW9uIChhcnJheSwgY29tcGFyZWZuKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHZhciBpID0gMTtcbiAgdmFyIGVsZW1lbnQsIGo7XG5cbiAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICBqID0gaTtcbiAgICBlbGVtZW50ID0gYXJyYXlbaV07XG4gICAgd2hpbGUgKGogJiYgY29tcGFyZWZuKGFycmF5W2ogLSAxXSwgZWxlbWVudCkgPiAwKSB7XG4gICAgICBhcnJheVtqXSA9IGFycmF5Wy0tal07XG4gICAgfVxuICAgIGlmIChqICE9PSBpKyspIGFycmF5W2pdID0gZWxlbWVudDtcbiAgfSByZXR1cm4gYXJyYXk7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIGNvbXBhcmVmbikge1xuICB2YXIgbGxlbmd0aCA9IGxlZnQubGVuZ3RoO1xuICB2YXIgcmxlbmd0aCA9IHJpZ2h0Lmxlbmd0aDtcbiAgdmFyIGxpbmRleCA9IDA7XG4gIHZhciByaW5kZXggPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKGxpbmRleCA8IGxsZW5ndGggfHwgcmluZGV4IDwgcmxlbmd0aCkge1xuICAgIGlmIChsaW5kZXggPCBsbGVuZ3RoICYmIHJpbmRleCA8IHJsZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGNvbXBhcmVmbihsZWZ0W2xpbmRleF0sIHJpZ2h0W3JpbmRleF0pIDw9IDAgPyBsZWZ0W2xpbmRleCsrXSA6IHJpZ2h0W3JpbmRleCsrXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpbmRleCA8IGxsZW5ndGggPyBsZWZ0W2xpbmRleCsrXSA6IHJpZ2h0W3JpbmRleCsrXSk7XG4gICAgfVxuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlU29ydDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBmaXJlZm94ID0gdXNlckFnZW50Lm1hdGNoKC9maXJlZm94XFwvKFxcZCspL2kpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhZmlyZWZveCAmJiArZmlyZWZveFsxXTtcbiIsInZhciBVQSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC9NU0lFfFRyaWRlbnQvLnRlc3QoVUEpO1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgd2Via2l0ID0gdXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8pO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhd2Via2l0ICYmICt3ZWJraXRbMV07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaW50ZXJuYWxTb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNvcnQnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBGRiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtZmYtdmVyc2lvbicpO1xudmFyIElFX09SX0VER0UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWllLW9yLWVkZ2UnKTtcbnZhciBWOCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIFdFQktJVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtd2Via2l0LXZlcnNpb24nKTtcblxudmFyIHRlc3QgPSBbXTtcbnZhciBuYXRpdmVTb3J0ID0gdGVzdC5zb3J0O1xuXG4vLyBJRTgtXG52YXIgRkFJTFNfT05fVU5ERUZJTkVEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB0ZXN0LnNvcnQodW5kZWZpbmVkKTtcbn0pO1xuLy8gVjggYnVnXG52YXIgRkFJTFNfT05fTlVMTCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdGVzdC5zb3J0KG51bGwpO1xufSk7XG4vLyBPbGQgV2ViS2l0XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3NvcnQnKTtcblxudmFyIFNUQUJMRV9TT1JUID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZmVhdHVyZSBkZXRlY3Rpb24gY2FuIGJlIHRvbyBzbG93LCBzbyBjaGVjayBlbmdpbmVzIHZlcnNpb25zXG4gIGlmIChWOCkgcmV0dXJuIFY4IDwgNzA7XG4gIGlmIChGRiAmJiBGRiA+IDMpIHJldHVybjtcbiAgaWYgKElFX09SX0VER0UpIHJldHVybiB0cnVlO1xuICBpZiAoV0VCS0lUKSByZXR1cm4gV0VCS0lUIDwgNjAzO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNvZGUsIGNociwgdmFsdWUsIGluZGV4O1xuXG4gIC8vIGdlbmVyYXRlIGFuIGFycmF5IHdpdGggbW9yZSA1MTIgZWxlbWVudHMgKENoYWtyYSBhbmQgb2xkIFY4IGZhaWxzIG9ubHkgaW4gdGhpcyBjYXNlKVxuICBmb3IgKGNvZGUgPSA2NTsgY29kZSA8IDc2OyBjb2RlKyspIHtcbiAgICBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xuXG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIDY2OiBjYXNlIDY5OiBjYXNlIDcwOiBjYXNlIDcyOiB2YWx1ZSA9IDM7IGJyZWFrO1xuICAgICAgY2FzZSA2ODogY2FzZSA3MTogdmFsdWUgPSA0OyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHZhbHVlID0gMjtcbiAgICB9XG5cbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCA0NzsgaW5kZXgrKykge1xuICAgICAgdGVzdC5wdXNoKHsgazogY2hyICsgaW5kZXgsIHY6IHZhbHVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRlc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYi52IC0gYS52OyB9KTtcblxuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0ZXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNociA9IHRlc3RbaW5kZXhdLmsuY2hhckF0KDApO1xuICAgIGlmIChyZXN1bHQuY2hhckF0KHJlc3VsdC5sZW5ndGggLSAxKSAhPT0gY2hyKSByZXN1bHQgKz0gY2hyO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdCAhPT0gJ0RHQkVGSEFDSUpLJztcbn0pO1xuXG52YXIgRk9SQ0VEID0gRkFJTFNfT05fVU5ERUZJTkVEIHx8ICFGQUlMU19PTl9OVUxMIHx8ICFTVFJJQ1RfTUVUSE9EIHx8ICFTVEFCTEVfU09SVDtcblxudmFyIGdldFNvcnRDb21wYXJlID0gZnVuY3Rpb24gKGNvbXBhcmVmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gLTE7XG4gICAgaWYgKHggPT09IHVuZGVmaW5lZCkgcmV0dXJuIDE7XG4gICAgaWYgKGNvbXBhcmVmbiAhPT0gdW5kZWZpbmVkKSByZXR1cm4gK2NvbXBhcmVmbih4LCB5KSB8fCAwO1xuICAgIHJldHVybiB0b1N0cmluZyh4KSA+IHRvU3RyaW5nKHkpID8gMSA6IC0xO1xuICB9O1xufTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvcnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgaWYgKGNvbXBhcmVmbiAhPT0gdW5kZWZpbmVkKSBhRnVuY3Rpb24oY29tcGFyZWZuKTtcblxuICAgIHZhciBhcnJheSA9IHRvT2JqZWN0KHRoaXMpO1xuXG4gICAgaWYgKFNUQUJMRV9TT1JUKSByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWQgPyBuYXRpdmVTb3J0LmNhbGwoYXJyYXkpIDogbmF0aXZlU29ydC5jYWxsKGFycmF5LCBjb21wYXJlZm4pO1xuXG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gdG9MZW5ndGgoYXJyYXkubGVuZ3RoKTtcbiAgICB2YXIgaXRlbXNMZW5ndGgsIGluZGV4O1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChpbmRleCBpbiBhcnJheSkgaXRlbXMucHVzaChhcnJheVtpbmRleF0pO1xuICAgIH1cblxuICAgIGl0ZW1zID0gaW50ZXJuYWxTb3J0KGl0ZW1zLCBnZXRTb3J0Q29tcGFyZShjb21wYXJlZm4pKTtcbiAgICBpdGVtc0xlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBpbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBpdGVtc0xlbmd0aCkgYXJyYXlbaW5kZXhdID0gaXRlbXNbaW5kZXgrK107XG4gICAgd2hpbGUgKGluZGV4IDwgYXJyYXlMZW5ndGgpIGRlbGV0ZSBhcnJheVtpbmRleCsrXTtcblxuICAgIHJldHVybiBhcnJheTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG5cbmV4cG9ydHMuVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG5leHBvcnRzLkJST0tFTl9DQVJFVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9ICRSZWdFeHAoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwiLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFLCBXU0ggKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSBhbmQgQ2xvc3VyZSBDb21waWxlciB0cmFuc3BpbGVzIFJlZ0V4cCgnLicsICdzJykgLT4gLy4vcyBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgJFJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAkUmVnRXhwKCcuJywgJ3MnKTtcbiAgcmV0dXJuICEocmUuZG90QWxsICYmIHJlLmV4ZWMoJ1xcbicpICYmIHJlLmZsYWdzID09PSAncycpO1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJyg/PGE+YiknLCAnZycpIC0+IC8oPzxhPmIpL2cgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnKD88YT5iKScsICdnJyk7XG4gIHJldHVybiByZS5leGVjKCdiJykuZ3JvdXBzLmEgIT09ICdiJyB8fFxuICAgICdiJy5yZXBsYWNlKHJlLCAnJDxhPmMnKSAhPT0gJ2JjJztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwLCByZWdleHAvbm8tbGF6eS1lbmRzIC0tIHRlc3RpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlZ2V4cC9uby11c2VsZXNzLXF1YW50aWZpZXIgLS0gdGVzdGluZyAqL1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLmdldDtcbnZhciBVTlNVUFBPUlRFRF9ET1RfQUxMID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1kb3QtYWxsJyk7XG52YXIgVU5TVVBQT1JURURfTkNHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC11bnN1cHBvcnRlZC1uY2cnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG52YXIgbmF0aXZlUmVwbGFjZSA9IHNoYXJlZCgnbmF0aXZlLXN0cmluZy1yZXBsYWNlJywgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZIHx8IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZIHx8IFVOU1VQUE9SVEVEX0RPVF9BTEwgfHwgVU5TVVBQT1JURURfTkNHO1xuXG5pZiAoUEFUQ0gpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzIC0tIFRPRE9cbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cmluZykge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShyZSk7XG4gICAgdmFyIHN0ciA9IHRvU3RyaW5nKHN0cmluZyk7XG4gICAgdmFyIHJhdyA9IHN0YXRlLnJhdztcbiAgICB2YXIgcmVzdWx0LCByZUNvcHksIGxhc3RJbmRleCwgbWF0Y2gsIGksIG9iamVjdCwgZ3JvdXA7XG5cbiAgICBpZiAocmF3KSB7XG4gICAgICByYXcubGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgcmVzdWx0ID0gcGF0Y2hlZEV4ZWMuY2FsbChyYXcsIHN0cik7XG4gICAgICByZS5sYXN0SW5kZXggPSByYXcubGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgZ3JvdXBzID0gc3RhdGUuZ3JvdXBzO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSByZWdleHBGbGFncy5jYWxsKHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgneScsICcnKTtcbiAgICAgIGlmIChmbGFncy5pbmRleE9mKCdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IHN0ci5zbGljZShyZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgc3RyLmNoYXJBdChyZS5sYXN0SW5kZXggLSAxKSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWF0Y2ggJiYgZ3JvdXBzKSB7XG4gICAgICBtYXRjaC5ncm91cHMgPSBvYmplY3QgPSBjcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGdyb3VwID0gZ3JvdXBzW2ldO1xuICAgICAgICBvYmplY3RbZ3JvdXBbMF1dID0gbWF0Y2hbZ3JvdXBbMV1dO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZXhlY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUuZXhlY1xuJCh7IHRhcmdldDogJ1JlZ0V4cCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IC8uLy5leGVjICE9PSBleGVjIH0sIHtcbiAgZXhlYzogZXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgRk9SQ0VELCBTSEFNKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICBGT1JDRURcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgdmFyICRleGVjID0gcmVnZXhwLmV4ZWM7XG4gICAgICBpZiAoJGV4ZWMgPT09IHJlZ2V4cEV4ZWMgfHwgJGV4ZWMgPT09IFJlZ0V4cFByb3RvdHlwZS5leGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0pO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBtZXRob2RzWzBdKTtcbiAgICByZWRlZmluZShSZWdFeHBQcm90b3R5cGUsIFNZTUJPTCwgbWV0aG9kc1sxXSk7XG4gIH1cblxuICBpZiAoU0hBTSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cFByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciByZXBsYWNlID0gJycucmVwbGFjZTtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZHsxLDJ9fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGR7MSwyfSkvZztcblxuLy8gYEdldFN1YnN0aXR1dGlvbmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICB9XG4gIHJldHVybiByZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciBnZXRTdWJzdGl0dXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbicpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFJFUExBQ0UgPSB3ZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9wcmVmZXItZXNjYXBlLXJlcGxhY2VtZW50LWRvbGxhci1jaGFyIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiAnYScucmVwbGFjZSgvLi8sICckMCcpID09PSAnJDAnO1xufSkoKTtcblxuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby11c2VsZXNzLWRvbGxhci1yZXBsYWNlbWVudHMgLS0gZmFsc2UgcG9zaXRpdmVcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgZnVuY3Rpb24gKF8sIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgVU5TQUZFX1NVQlNUSVRVVEUgPSBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA/ICckJyA6ICckMCc7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwodG9TdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSAmJlxuICAgICAgICByZXBsYWNlVmFsdWUuaW5kZXhPZignJDwnKSA9PT0gLTFcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJ4LCBTLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSB0b1N0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICB2YXIgbWF0Y2hTdHIgPSB0b1N0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0b1N0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSB0b1N0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xufSwgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTIHx8ICFSRVBMQUNFX0tFRVBTXyQwIHx8IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2U7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcbiAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVNdKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFNQRUNJRVMsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIH0pO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgJyArIChuYW1lID8gbmFtZSArICcgJyA6ICcnKSArICdpbnZvY2F0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGl0KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmICh0eXBlb2YgaXRlcmF0b3JNZXRob2QgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgaXRlcmFibGUnKTtcbiAgfSByZXR1cm4gYW5PYmplY3QoaXRlcmF0b3JNZXRob2QuY2FsbChpdCkpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGtpbmQsIHZhbHVlKSB7XG4gIHZhciBpbm5lclJlc3VsdCwgaW5uZXJFcnJvcjtcbiAgYW5PYmplY3QoaXRlcmF0b3IpO1xuICB0cnkge1xuICAgIGlubmVyUmVzdWx0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChpbm5lclJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gaW5uZXJSZXN1bHQuY2FsbChpdGVyYXRvcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW5uZXJFcnJvciA9IHRydWU7XG4gICAgaW5uZXJSZXN1bHQgPSBlcnJvcjtcbiAgfVxuICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gIGlmIChpbm5lckVycm9yKSB0aHJvdyBpbm5lclJlc3VsdDtcbiAgYW5PYmplY3QoaW5uZXJSZXN1bHQpO1xuICByZXR1cm4gdmFsdWU7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvcicpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIHVuYm91bmRGdW5jdGlvbiwgb3B0aW9ucykge1xuICB2YXIgdGhhdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy50aGF0O1xuICB2YXIgQVNfRU5UUklFUyA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5BU19FTlRSSUVTKTtcbiAgdmFyIElTX0lURVJBVE9SID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklTX0lURVJBVE9SKTtcbiAgdmFyIElOVEVSUlVQVEVEID0gISEob3B0aW9ucyAmJiBvcHRpb25zLklOVEVSUlVQVEVEKTtcbiAgdmFyIGZuID0gYmluZCh1bmJvdW5kRnVuY3Rpb24sIHRoYXQsIDEgKyBBU19FTlRSSUVTICsgSU5URVJSVVBURUQpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIHZhciBzdG9wID0gZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgIGlmIChpdGVyYXRvcikgaXRlcmF0b3JDbG9zZShpdGVyYXRvciwgJ25vcm1hbCcsIGNvbmRpdGlvbik7XG4gICAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgY29uZGl0aW9uKTtcbiAgfTtcblxuICB2YXIgY2FsbEZuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKEFTX0VOVFJJRVMpIHtcbiAgICAgIGFuT2JqZWN0KHZhbHVlKTtcbiAgICAgIHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlWzBdLCB2YWx1ZVsxXSwgc3RvcCkgOiBmbih2YWx1ZVswXSwgdmFsdWVbMV0pO1xuICAgIH0gcmV0dXJuIElOVEVSUlVQVEVEID8gZm4odmFsdWUsIHN0b3ApIDogZm4odmFsdWUpO1xuICB9O1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gY2FsbEZuKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoaXRlcmFibGUsIGl0ZXJGbik7XG4gIH1cblxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gY2FsbEZuKHN0ZXAudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCAndGhyb3cnLCBlcnJvcik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1mcm9tLCBuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC8oPzppcGFkfGlwaG9uZXxpcG9kKS4qYXBwbGV3ZWJraXQvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGxvY2F0aW9uLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcblxudHJ5IHtcbiAgLy8gRGVubyB0aHJvd3MgYSBSZWZlcmVuY2VFcnJvciBvbiBgbG9jYXRpb25gIGFjY2VzcyB3aXRob3V0IGAtLWxvY2F0aW9uYCBmbGFnXG4gIGxvY2F0aW9uID0gZ2xvYmFsLmxvY2F0aW9uO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIHJ1bm5lciA9IGZ1bmN0aW9uIChpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJ1bihpZCk7XG4gIH07XG59O1xuXG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuKGV2ZW50LmRhdGEpO1xufTtcblxudmFyIHBvc3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgLy8gb2xkIGVuZ2luZXMgaGF2ZSBub3QgbG9jYXRpb24ub3JpZ2luXG4gIGdsb2JhbC5wb3N0TWVzc2FnZShTdHJpbmcoaWQpLCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0KTtcbn07XG5cbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0IHx8ICFjbGVhcikge1xuICBzZXQgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIHNwZWMgcmVxdWlyZW1lbnRcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKElTX05PREUpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgLy8gZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82MjRcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCAmJiAhSVNfSU9TKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJlxuICAgIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmXG4gICAgIWdsb2JhbC5pbXBvcnRTY3JpcHRzICYmXG4gICAgbG9jYXRpb24gJiYgbG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcbiAgICAhZmFpbHMocG9zdClcbiAgKSB7XG4gICAgZGVmZXIgPSBwb3N0O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG4iLCJ2YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IC9pcGFkfGlwaG9uZXxpcG9kL2kudGVzdCh1c2VyQWdlbnQpICYmIGdsb2JhbC5QZWJibGUgIT09IHVuZGVmaW5lZDtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvd2ViMHMoPyEuKmNocm9tZSkvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBJU19JT1MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcycpO1xudmFyIElTX0lPU19QRUJCTEUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWlvcy1wZWJibGUnKTtcbnZhciBJU19XRUJPU19XRUJLSVQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLXdlYm9zLXdlYmtpdCcpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcblxudmFyIE11dGF0aW9uT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuLy8gTm9kZS5qcyAxMSBzaG93cyBFeHBlcmltZW50YWxXYXJuaW5nIG9uIGdldHRpbmcgYHF1ZXVlTWljcm90YXNrYFxudmFyIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihnbG9iYWwsICdxdWV1ZU1pY3JvdGFzaycpO1xudmFyIHF1ZXVlTWljcm90YXNrID0gcXVldWVNaWNyb3Rhc2tEZXNjcmlwdG9yICYmIHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvci52YWx1ZTtcblxudmFyIGZsdXNoLCBoZWFkLCBsYXN0LCBub3RpZnksIHRvZ2dsZSwgbm9kZSwgcHJvbWlzZSwgdGhlbjtcblxuLy8gbW9kZXJuIGVuZ2luZXMgaGF2ZSBxdWV1ZU1pY3JvdGFzayBtZXRob2RcbmlmICghcXVldWVNaWNyb3Rhc2spIHtcbiAgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKElTX05PREUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgLy8gYWxzbyBleGNlcHQgV2ViT1MgV2Via2l0IGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84OThcbiAgaWYgKCFJU19JT1MgJiYgIUlTX05PREUgJiYgIUlTX1dFQk9TX1dFQktJVCAmJiBNdXRhdGlvbk9ic2VydmVyICYmIGRvY3VtZW50KSB7XG4gICAgdG9nZ2xlID0gdHJ1ZTtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoIUlTX0lPU19QRUJCTEUgJiYgUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICAvLyBQcm9taXNlLnJlc29sdmUgd2l0aG91dCBhbiBhcmd1bWVudCB0aHJvd3MgYW4gZXJyb3IgaW4gTEcgV2ViT1MgMlxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAvLyB3b3JrYXJvdW5kIG9mIFdlYktpdCB+IGlPUyBTYWZhcmkgMTAuMSBidWdcbiAgICBwcm9taXNlLmNvbnN0cnVjdG9yID0gUHJvbWlzZTtcbiAgICB0aGVuID0gcHJvbWlzZS50aGVuO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoZW4uY2FsbChwcm9taXNlLCBmbHVzaCk7XG4gICAgfTtcbiAgLy8gTm9kZS5qcyB3aXRob3V0IHByb21pc2VzXG4gIH0gZWxzZSBpZiAoSVNfTk9ERSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcXVldWVNaWNyb3Rhc2sgfHwgZnVuY3Rpb24gKGZuKSB7XG4gIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYgKCFoZWFkKSB7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xuXG4vLyBgTmV3UHJvbWlzZUNhcGFiaWxpdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1uZXdwcm9taXNlY2FwYWJpbGl0eVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlcnJvcjogZmFsc2UsIHZhbHVlOiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBlcnJvcjogdHJ1ZSwgdmFsdWU6IGVycm9yIH07XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCc7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBOYXRpdmVQcm9taXNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1wcm9taXNlLWNvbnN0cnVjdG9yJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21pY3JvdGFzaycpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIGhvc3RSZXBvcnRFcnJvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaG9zdC1yZXBvcnQtZXJyb3JzJyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGVyZm9ybScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19CUk9XU0VSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1icm93c2VyJyk7XG52YXIgSVNfTk9ERSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZScpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxQcm9taXNlU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihQUk9NSVNFKTtcbnZhciBOYXRpdmVQcm9taXNlUHJvdG90eXBlID0gTmF0aXZlUHJvbWlzZSAmJiBOYXRpdmVQcm9taXNlLnByb3RvdHlwZTtcbnZhciBQcm9taXNlQ29uc3RydWN0b3IgPSBOYXRpdmVQcm9taXNlO1xudmFyIFByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZSA9IE5hdGl2ZVByb21pc2VQcm90b3R5cGU7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xudmFyIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5O1xudmFyIERJU1BBVENIX0VWRU5UID0gISEoZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3JlYXRlRXZlbnQgJiYgZ2xvYmFsLmRpc3BhdGNoRXZlbnQpO1xudmFyIE5BVElWRV9SRUpFQ1RJT05fRVZFTlQgPSB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbic7XG52YXIgVU5IQU5ETEVEX1JFSkVDVElPTiA9ICd1bmhhbmRsZWRyZWplY3Rpb24nO1xudmFyIFJFSkVDVElPTl9IQU5ETEVEID0gJ3JlamVjdGlvbmhhbmRsZWQnO1xudmFyIFBFTkRJTkcgPSAwO1xudmFyIEZVTEZJTExFRCA9IDE7XG52YXIgUkVKRUNURUQgPSAyO1xudmFyIEhBTkRMRUQgPSAxO1xudmFyIFVOSEFORExFRCA9IDI7XG52YXIgU1VCQ0xBU1NJTkcgPSBmYWxzZTtcbnZhciBJbnRlcm5hbCwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFByb21pc2VXcmFwcGVyLCBuYXRpdmVUaGVuO1xuXG52YXIgRk9SQ0VEID0gaXNGb3JjZWQoUFJPTUlTRSwgZnVuY3Rpb24gKCkge1xuICB2YXIgUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UgPSBpbnNwZWN0U291cmNlKFByb21pc2VDb25zdHJ1Y3Rvcik7XG4gIHZhciBHTE9CQUxfQ09SRV9KU19QUk9NSVNFID0gUFJPTUlTRV9DT05TVFJVQ1RPUl9TT1VSQ0UgIT09IFN0cmluZyhQcm9taXNlQ29uc3RydWN0b3IpO1xuICAvLyBWOCA2LjYgKE5vZGUgMTAgYW5kIENocm9tZSA2NikgaGF2ZSBhIGJ1ZyB3aXRoIHJlc29sdmluZyBjdXN0b20gdGhlbmFibGVzXG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAvLyBXZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICBpZiAoIUdMT0JBTF9DT1JFX0pTX1BST01JU0UgJiYgVjhfVkVSU0lPTiA9PT0gNjYpIHJldHVybiB0cnVlO1xuICAvLyBXZSBuZWVkIFByb21pc2UjZmluYWxseSBpbiB0aGUgcHVyZSB2ZXJzaW9uIGZvciBwcmV2ZW50aW5nIHByb3RvdHlwZSBwb2xsdXRpb25cbiAgaWYgKElTX1BVUkUgJiYgIVByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZVsnZmluYWxseSddKSByZXR1cm4gdHJ1ZTtcbiAgLy8gV2UgY2FuJ3QgdXNlIEBAc3BlY2llcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbiAgaWYgKFY4X1ZFUlNJT04gPj0gNTEgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFBST01JU0VfQ09OU1RSVUNUT1JfU09VUkNFKSkgcmV0dXJuIGZhbHNlO1xuICAvLyBEZXRlY3QgY29ycmVjdG5lc3Mgb2Ygc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSgxKTsgfSk7XG4gIHZhciBGYWtlUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgZXhlYyhmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIH07XG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3IgPSB7fTtcbiAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBGYWtlUHJvbWlzZTtcbiAgU1VCQ0xBU1NJTkcgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICBpZiAoIVNVQkNMQVNTSU5HKSByZXR1cm4gdHJ1ZTtcbiAgLy8gVW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICByZXR1cm4gIUdMT0JBTF9DT1JFX0pTX1BST01JU0UgJiYgSVNfQlJPV1NFUiAmJiAhTkFUSVZFX1JFSkVDVElPTl9FVkVOVDtcbn0pO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9IEZPUkNFRCB8fCAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBQcm9taXNlQ29uc3RydWN0b3IuYWxsKGl0ZXJhYmxlKVsnY2F0Y2gnXShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pO1xufSk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xuXG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHN0YXRlLCBpc1JlamVjdCkge1xuICBpZiAoc3RhdGUubm90aWZpZWQpIHJldHVybjtcbiAgc3RhdGUubm90aWZpZWQgPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBzdGF0ZS5yZWFjdGlvbnM7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIG9rID0gc3RhdGUuc3RhdGUgPT0gRlVMRklMTEVEO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IGNoYWluW2luZGV4KytdO1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucmVqZWN0aW9uID09PSBVTkhBTkRMRUQpIG9uSGFuZGxlVW5oYW5kbGVkKHN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnJlamVjdGlvbiA9IEhBTkRMRUQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIGNhbiB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RhdGUucmVhY3Rpb25zID0gW107XG4gICAgc3RhdGUubm90aWZpZWQgPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXN0YXRlLnJlamVjdGlvbikgb25VbmhhbmRsZWQoc3RhdGUpO1xuICB9KTtcbn07XG5cbnZhciBkaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIHByb21pc2UsIHJlYXNvbikge1xuICB2YXIgZXZlbnQsIGhhbmRsZXI7XG4gIGlmIChESVNQQVRDSF9FVkVOVCkge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQucHJvbWlzZSA9IHByb21pc2U7XG4gICAgZXZlbnQucmVhc29uID0gcmVhc29uO1xuICAgIGV2ZW50LmluaXRFdmVudChuYW1lLCBmYWxzZSwgdHJ1ZSk7XG4gICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2UgZXZlbnQgPSB7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcmVhc29uIH07XG4gIGlmICghTkFUSVZFX1JFSkVDVElPTl9FVkVOVCAmJiAoaGFuZGxlciA9IGdsb2JhbFsnb24nICsgbmFtZV0pKSBoYW5kbGVyKGV2ZW50KTtcbiAgZWxzZSBpZiAobmFtZSA9PT0gVU5IQU5ETEVEX1JFSkVDVElPTikgaG9zdFJlcG9ydEVycm9ycygnVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgcmVhc29uKTtcbn07XG5cbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBzdGF0ZS5mYWNhZGU7XG4gICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG4gICAgdmFyIElTX1VOSEFORExFRCA9IGlzVW5oYW5kbGVkKHN0YXRlKTtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChJU19VTkhBTkRMRUQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChVTkhBTkRMRURfUkVKRUNUSU9OLCBwcm9taXNlLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBzdGF0ZS5yZWplY3Rpb24gPSBJU19OT0RFIHx8IGlzVW5oYW5kbGVkKHN0YXRlKSA/IFVOSEFORExFRCA6IEhBTkRMRUQ7XG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB0aHJvdyByZXN1bHQudmFsdWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucmVqZWN0aW9uICE9PSBIQU5ETEVEICYmICFzdGF0ZS5wYXJlbnQ7XG59O1xuXG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gc3RhdGUuZmFjYWRlO1xuICAgIGlmIChJU19OT0RFKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgZGlzcGF0Y2hFdmVudChSRUpFQ1RJT05fSEFORExFRCwgcHJvbWlzZSwgc3RhdGUudmFsdWUpO1xuICB9KTtcbn07XG5cbnZhciBiaW5kID0gZnVuY3Rpb24gKGZuLCBzdGF0ZSwgdW53cmFwKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBmbihzdGF0ZSwgdmFsdWUsIHVud3JhcCk7XG4gIH07XG59O1xuXG52YXIgaW50ZXJuYWxSZWplY3QgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICBzdGF0ZS5zdGF0ZSA9IFJFSkVDVEVEO1xuICBub3RpZnkoc3RhdGUsIHRydWUpO1xufTtcblxudmFyIGludGVybmFsUmVzb2x2ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgdmFsdWUsIHVud3JhcCkge1xuICBpZiAoc3RhdGUuZG9uZSkgcmV0dXJuO1xuICBzdGF0ZS5kb25lID0gdHJ1ZTtcbiAgaWYgKHVud3JhcCkgc3RhdGUgPSB1bndyYXA7XG4gIHRyeSB7XG4gICAgaWYgKHN0YXRlLmZhY2FkZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIHZhciB0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSk7XG4gICAgaWYgKHRoZW4pIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBkb25lOiBmYWxzZSB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSxcbiAgICAgICAgICAgIGJpbmQoaW50ZXJuYWxSZXNvbHZlLCB3cmFwcGVyLCBzdGF0ZSksXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVqZWN0LCB3cmFwcGVyLCBzdGF0ZSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGludGVybmFsUmVqZWN0KHdyYXBwZXIsIGVycm9yLCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgc3RhdGUuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgICBub3RpZnkoc3RhdGUsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaW50ZXJuYWxSZWplY3QoeyBkb25lOiBmYWxzZSB9LCBlcnJvciwgc3RhdGUpO1xuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKEZPUkNFRCkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQcm9taXNlQ29uc3RydWN0b3IgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCBQcm9taXNlQ29uc3RydWN0b3IsIFBST01JU0UpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihiaW5kKGludGVybmFsUmVzb2x2ZSwgc3RhdGUpLCBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpbnRlcm5hbFJlamVjdChzdGF0ZSwgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICB0eXBlOiBQUk9NSVNFLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBub3RpZmllZDogZmFsc2UsXG4gICAgICBwYXJlbnQ6IGZhbHNlLFxuICAgICAgcmVhY3Rpb25zOiBbXSxcbiAgICAgIHJlamVjdGlvbjogZmFsc2UsXG4gICAgICBzdGF0ZTogUEVORElORyxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVkZWZpbmVBbGwoUHJvbWlzZUNvbnN0cnVjdG9yUHJvdG90eXBlLCB7XG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgICAgc3RhdGUucmVhY3Rpb25zLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeShzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nICYmIE5hdGl2ZVByb21pc2VQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgICBuYXRpdmVUaGVuID0gTmF0aXZlUHJvbWlzZVByb3RvdHlwZS50aGVuO1xuXG4gICAgaWYgKCFTVUJDTEFTU0lORykge1xuICAgICAgLy8gbWFrZSBgUHJvbWlzZSN0aGVuYCByZXR1cm4gYSBwb2x5ZmlsbGVkIGBQcm9taXNlYCBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgICAgcmVkZWZpbmUoTmF0aXZlUHJvbWlzZVByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIG5hdGl2ZVRoZW4uY2FsbCh0aGF0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NDBcbiAgICAgIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xuXG4gICAgICAvLyBtYWtlcyBzdXJlIHRoYXQgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJcyBgUHJvbWlzZSNjYXRjaGAgcHJvcGVybHkgd29ya3Mgd2l0aCBwYXRjaGVkIGBQcm9taXNlI3RoZW5gXG4gICAgICByZWRlZmluZShOYXRpdmVQcm9taXNlUHJvdG90eXBlLCAnY2F0Y2gnLCBQcm9taXNlQ29uc3RydWN0b3JQcm90b3R5cGVbJ2NhdGNoJ10sIHsgdW5zYWZlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYC5jb25zdHJ1Y3RvciA9PT0gUHJvbWlzZWAgd29yayBmb3IgbmF0aXZlIHByb21pc2UtYmFzZWQgQVBJc1xuICAgIHRyeSB7XG4gICAgICBkZWxldGUgTmF0aXZlUHJvbWlzZVByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbiAgICAvLyBtYWtlIGBpbnN0YW5jZW9mIFByb21pc2VgIHdvcmsgZm9yIG5hdGl2ZSBwcm9taXNlLWJhc2VkIEFQSXNcbiAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIHNldFByb3RvdHlwZU9mKE5hdGl2ZVByb21pc2VQcm90b3R5cGUsIFByb21pc2VDb25zdHJ1Y3RvclByb3RvdHlwZSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgUHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yXG59KTtcblxuc2V0VG9TdHJpbmdUYWcoUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFLCBmYWxzZSwgdHJ1ZSk7XG5zZXRTcGVjaWVzKFBST01JU0UpO1xuXG5Qcm9taXNlV3JhcHBlciA9IGdldEJ1aWx0SW4oUFJPTUlTRSk7XG5cbi8vIHN0YXRpY3NcbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5hbGxcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICAkcHJvbWlzZVJlc29sdmUuY2FsbChDLCBwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHJlamVjdChyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIGBQcm9taXNlLnJhY2VgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCJ2YXIgbixsLHUsaSx0LG8scixmLGU9e30sYz1bXSxzPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYShuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBoKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIHYobCx1LGkpe3ZhciB0LG8scixmPXt9O2ZvcihyIGluIHUpXCJrZXlcIj09cj90PXVbcl06XCJyZWZcIj09cj9vPXVbcl06ZltyXT11W3JdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSksXCJmdW5jdGlvblwiPT10eXBlb2YgbCYmbnVsbCE9bC5kZWZhdWx0UHJvcHMpZm9yKHIgaW4gbC5kZWZhdWx0UHJvcHMpdm9pZCAwPT09ZltyXSYmKGZbcl09bC5kZWZhdWx0UHJvcHNbcl0pO3JldHVybiB5KGwsZix0LG8sbnVsbCl9ZnVuY3Rpb24geShuLGksdCxvLHIpe3ZhciBmPXt0eXBlOm4scHJvcHM6aSxrZXk6dCxyZWY6byxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDp2b2lkIDAsX19jOm51bGwsX19oOm51bGwsY29uc3RydWN0b3I6dm9pZCAwLF9fdjpudWxsPT1yPysrdTpyfTtyZXR1cm4gbnVsbCE9bC52bm9kZSYmbC52bm9kZShmKSxmfWZ1bmN0aW9uIHAoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBkKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIF8obixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gayhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/ayhuLl9fLG4uX18uX19rLmluZGV4T2YobikrMSk6bnVsbDtmb3IodmFyIHU7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2UpcmV0dXJuIHUuX19lO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZT9rKG4pOm51bGx9ZnVuY3Rpb24gYihuKXt2YXIgbCx1O2lmKG51bGwhPShuPW4uX18pJiZudWxsIT1uLl9fYyl7Zm9yKG4uX19lPW4uX19jLmJhc2U9bnVsbCxsPTA7bDxuLl9fay5sZW5ndGg7bCsrKWlmKG51bGwhPSh1PW4uX19rW2xdKSYmbnVsbCE9dS5fX2Upe24uX19lPW4uX19jLmJhc2U9dS5fX2U7YnJlYWt9cmV0dXJuIGIobil9fWZ1bmN0aW9uIG0obil7KCFuLl9fZCYmKG4uX19kPSEwKSYmdC5wdXNoKG4pJiYhZy5fX3IrK3x8ciE9PWwuZGVib3VuY2VSZW5kZXJpbmcpJiYoKHI9bC5kZWJvdW5jZVJlbmRlcmluZyl8fG8pKGcpfWZ1bmN0aW9uIGcoKXtmb3IodmFyIG47Zy5fX3I9dC5sZW5ndGg7KW49dC5zb3J0KGZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uX192Ll9fYi1sLl9fdi5fX2J9KSx0PVtdLG4uc29tZShmdW5jdGlvbihuKXt2YXIgbCx1LGksdCxvLHI7bi5fX2QmJihvPSh0PShsPW4pLl9fdikuX19lLChyPWwuX19QKSYmKHU9W10sKGk9YSh7fSx0KSkuX192PXQuX192KzEsaihyLHQsaSxsLl9fbix2b2lkIDAhPT1yLm93bmVyU1ZHRWxlbWVudCxudWxsIT10Ll9faD9bb106bnVsbCx1LG51bGw9PW8/ayh0KTpvLHQuX19oKSx6KHUsdCksdC5fX2UhPW8mJmIodCkpKX0pfWZ1bmN0aW9uIHcobixsLHUsaSx0LG8scixmLHMsYSl7dmFyIGgsdixwLF8sYixtLGcsdz1pJiZpLl9fa3x8YyxBPXcubGVuZ3RoO2Zvcih1Ll9faz1bXSxoPTA7aDxsLmxlbmd0aDtoKyspaWYobnVsbCE9KF89dS5fX2tbaF09bnVsbD09KF89bFtoXSl8fFwiYm9vbGVhblwiPT10eXBlb2YgXz9udWxsOlwic3RyaW5nXCI9PXR5cGVvZiBffHxcIm51bWJlclwiPT10eXBlb2YgX3x8XCJiaWdpbnRcIj09dHlwZW9mIF8/eShudWxsLF8sbnVsbCxudWxsLF8pOkFycmF5LmlzQXJyYXkoXyk/eShkLHtjaGlsZHJlbjpffSxudWxsLG51bGwsbnVsbCk6Xy5fX2I+MD95KF8udHlwZSxfLnByb3BzLF8ua2V5LG51bGwsXy5fX3YpOl8pKXtpZihfLl9fPXUsXy5fX2I9dS5fX2IrMSxudWxsPT09KHA9d1toXSl8fHAmJl8ua2V5PT1wLmtleSYmXy50eXBlPT09cC50eXBlKXdbaF09dm9pZCAwO2Vsc2UgZm9yKHY9MDt2PEE7disrKXtpZigocD13W3ZdKSYmXy5rZXk9PXAua2V5JiZfLnR5cGU9PT1wLnR5cGUpe3dbdl09dm9pZCAwO2JyZWFrfXA9bnVsbH1qKG4sXyxwPXB8fGUsdCxvLHIsZixzLGEpLGI9Xy5fX2UsKHY9Xy5yZWYpJiZwLnJlZiE9diYmKGd8fChnPVtdKSxwLnJlZiYmZy5wdXNoKHAucmVmLG51bGwsXyksZy5wdXNoKHYsXy5fX2N8fGIsXykpLG51bGwhPWI/KG51bGw9PW0mJihtPWIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIF8udHlwZSYmbnVsbCE9Xy5fX2smJl8uX19rPT09cC5fX2s/Xy5fX2Q9cz14KF8scyxuKTpzPVAobixfLHAsdyxiLHMpLGF8fFwib3B0aW9uXCIhPT11LnR5cGU/XCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiYodS5fX2Q9cyk6bi52YWx1ZT1cIlwiKTpzJiZwLl9fZT09cyYmcy5wYXJlbnROb2RlIT1uJiYocz1rKHApKX1mb3IodS5fX2U9bSxoPUE7aC0tOyludWxsIT13W2hdJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdS50eXBlJiZudWxsIT13W2hdLl9fZSYmd1toXS5fX2U9PXUuX19kJiYodS5fX2Q9ayhpLGgrMSkpLE4od1toXSx3W2hdKSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKU0oZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiB4KG4sbCx1KXt2YXIgaSx0O2ZvcihpPTA7aTxuLl9fay5sZW5ndGg7aSsrKSh0PW4uX19rW2ldKSYmKHQuX189bixsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudHlwZT94KHQsbCx1KTpQKHUsdCx0LG4uX19rLHQuX19lLGwpKTtyZXR1cm4gbH1mdW5jdGlvbiBBKG4sbCl7cmV0dXJuIGw9bHx8W10sbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBufHwoQXJyYXkuaXNBcnJheShuKT9uLnNvbWUoZnVuY3Rpb24obil7QShuLGwpfSk6bC5wdXNoKG4pKSxsfWZ1bmN0aW9uIFAobixsLHUsaSx0LG8pe3ZhciByLGYsZTtpZih2b2lkIDAhPT1sLl9fZClyPWwuX19kLGwuX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PXV8fHQhPW98fG51bGw9PXQucGFyZW50Tm9kZSluOmlmKG51bGw9PW98fG8ucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh0KSxyPW51bGw7ZWxzZXtmb3IoZj1vLGU9MDsoZj1mLm5leHRTaWJsaW5nKSYmZTxpLmxlbmd0aDtlKz0yKWlmKGY9PXQpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh0LG8pLHI9b31yZXR1cm4gdm9pZCAwIT09cj9yOnQubmV4dFNpYmxpbmd9ZnVuY3Rpb24gQyhuLGwsdSxpLHQpe3ZhciBvO2ZvcihvIGluIHUpXCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fG8gaW4gbHx8SChuLG8sbnVsbCx1W29dLGkpO2ZvcihvIGluIGwpdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJjaGlsZHJlblwiPT09b3x8XCJrZXlcIj09PW98fFwidmFsdWVcIj09PW98fFwiY2hlY2tlZFwiPT09b3x8dVtvXT09PWxbb118fEgobixvLGxbb10sdVtvXSxpKX1mdW5jdGlvbiAkKG4sbCx1KXtcIi1cIj09PWxbMF0/bi5zZXRQcm9wZXJ0eShsLHUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHxzLnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBIKG4sbCx1LGksdCl7dmFyIG87bjppZihcInN0eWxlXCI9PT1sKWlmKFwic3RyaW5nXCI9PXR5cGVvZiB1KW4uc3R5bGUuY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkmJihuLnN0eWxlLmNzc1RleHQ9aT1cIlwiKSxpKWZvcihsIGluIGkpdSYmbCBpbiB1fHwkKG4uc3R5bGUsbCxcIlwiKTtpZih1KWZvcihsIGluIHUpaSYmdVtsXT09PWlbbF18fCQobi5zdHlsZSxsLHVbbF0pfWVsc2UgaWYoXCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0pbz1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGw9bC50b0xvd2VyQ2FzZSgpaW4gbj9sLnRvTG93ZXJDYXNlKCkuc2xpY2UoMik6bC5zbGljZSgyKSxuLmx8fChuLmw9e30pLG4ubFtsK29dPXUsdT9pfHxuLmFkZEV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTpuLnJlbW92ZUV2ZW50TGlzdGVuZXIobCxvP1Q6SSxvKTtlbHNlIGlmKFwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwpe2lmKHQpbD1sLnJlcGxhY2UoL3hsaW5rW0g6aF0vLFwiaFwiKS5yZXBsYWNlKC9zTmFtZSQvLFwic1wiKTtlbHNlIGlmKFwiaHJlZlwiIT09bCYmXCJsaXN0XCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidGFiSW5kZXhcIiE9PWwmJlwiZG93bmxvYWRcIiE9PWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbCE9dSYmKCExIT09dXx8XCJhXCI9PT1sWzBdJiZcInJcIj09PWxbMV0pP24uc2V0QXR0cmlidXRlKGwsdSk6bi5yZW1vdmVBdHRyaWJ1dGUobCkpfX1mdW5jdGlvbiBJKG4pe3RoaXMubFtuLnR5cGUrITFdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBUKG4pe3RoaXMubFtuLnR5cGUrITBdKGwuZXZlbnQ/bC5ldmVudChuKTpuKX1mdW5jdGlvbiBqKG4sdSxpLHQsbyxyLGYsZSxjKXt2YXIgcyxoLHYseSxwLGssYixtLGcseCxBLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7bnVsbCE9aS5fX2gmJihjPWkuX19oLGU9dS5fX2U9aS5fX2UsdS5fX2g9bnVsbCxyPVtlXSksKHM9bC5fX2IpJiZzKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKG09dS5wcm9wcyxnPShzPVAuY29udGV4dFR5cGUpJiZ0W3MuX19jXSx4PXM/Zz9nLnByb3BzLnZhbHVlOnMuX186dCxpLl9fYz9iPShoPXUuX19jPWkuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKG0seCk6KHUuX19jPWg9bmV3IF8obSx4KSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9TyksZyYmZy5zdWIoaCksaC5wcm9wcz1tLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9eCxoLl9fbj10LHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPWEoe30saC5fX3MpKSxhKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG0saC5fX3MpKSkseT1oLnByb3BzLHA9aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm0hPT15JiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhtLHgpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUobSxoLl9fcyx4KXx8dS5fX3Y9PT1pLl9fdil7aC5wcm9wcz1tLGguc3RhdGU9aC5fX3MsdS5fX3YhPT1pLl9fdiYmKGguX19kPSExKSxoLl9fdj11LHUuX19lPWkuX19lLHUuX19rPWkuX19rLHUuX19rLmZvckVhY2goZnVuY3Rpb24obil7biYmKG4uX189dSl9KSxoLl9faC5sZW5ndGgmJmYucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKG0saC5fX3MseCksbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh5LHAsayl9KX1oLmNvbnRleHQ9eCxoLnByb3BzPW0saC5zdGF0ZT1oLl9fcywocz1sLl9fcikmJnModSksaC5fX2Q9ITEsaC5fX3Y9dSxoLl9fUD1uLHM9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksaC5zdGF0ZT1oLl9fcyxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKHQ9YShhKHt9LHQpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwoaz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHkscCkpLEE9bnVsbCE9cyYmcy50eXBlPT09ZCYmbnVsbD09cy5rZXk/cy5wcm9wcy5jaGlsZHJlbjpzLHcobixBcnJheS5pc0FycmF5KEEpP0E6W0FdLHUsaSx0LG8scixmLGUsYyksaC5iYXNlPXUuX19lLHUuX19oPW51bGwsaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYiYmKGguX19FPWguX189bnVsbCksaC5fX2U9ITF9ZWxzZSBudWxsPT1yJiZ1Ll9fdj09PWkuX192Pyh1Ll9faz1pLl9fayx1Ll9fZT1pLl9fZSk6dS5fX2U9TChpLl9fZSx1LGksdCxvLHIsZixjKTsocz1sLmRpZmZlZCkmJnModSl9Y2F0Y2gobil7dS5fX3Y9bnVsbCwoY3x8bnVsbCE9cikmJih1Ll9fZT1lLHUuX19oPSEhYyxyW3IuaW5kZXhPZihlKV09bnVsbCksbC5fX2Uobix1LGkpfX1mdW5jdGlvbiB6KG4sdSl7bC5fX2MmJmwuX19jKHUsbiksbi5zb21lKGZ1bmN0aW9uKHUpe3RyeXtuPXUuX19oLHUuX19oPVtdLG4uc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChuKXtsLl9fZShuLHUuX192KX19KX1mdW5jdGlvbiBMKGwsdSxpLHQsbyxyLGYsYyl7dmFyIHMsYSx2LHk9aS5wcm9wcyxwPXUucHJvcHMsZD11LnR5cGUsXz0wO2lmKFwic3ZnXCI9PT1kJiYobz0hMCksbnVsbCE9cilmb3IoO188ci5sZW5ndGg7XysrKWlmKChzPXJbX10pJiYocz09PWx8fChkP3MubG9jYWxOYW1lPT1kOjM9PXMubm9kZVR5cGUpKSl7bD1zLHJbX109bnVsbDticmVha31pZihudWxsPT1sKXtpZihudWxsPT09ZClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocCk7bD1vP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsZCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkLHAuaXMmJnApLHI9bnVsbCxjPSExfWlmKG51bGw9PT1kKXk9PT1wfHxjJiZsLmRhdGE9PT1wfHwobC5kYXRhPXApO2Vsc2V7aWYocj1yJiZuLmNhbGwobC5jaGlsZE5vZGVzKSxhPSh5PWkucHJvcHN8fGUpLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLHY9cC5kYW5nZXJvdXNseVNldElubmVySFRNTCwhYyl7aWYobnVsbCE9cilmb3IoeT17fSxfPTA7XzxsLmF0dHJpYnV0ZXMubGVuZ3RoO18rKyl5W2wuYXR0cmlidXRlc1tfXS5uYW1lXT1sLmF0dHJpYnV0ZXNbX10udmFsdWU7KHZ8fGEpJiYodiYmKGEmJnYuX19odG1sPT1hLl9faHRtbHx8di5fX2h0bWw9PT1sLmlubmVySFRNTCl8fChsLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfWlmKEMobCxwLHksbyxjKSx2KXUuX19rPVtdO2Vsc2UgaWYoXz11LnByb3BzLmNoaWxkcmVuLHcobCxBcnJheS5pc0FycmF5KF8pP186W19dLHUsaSx0LG8mJlwiZm9yZWlnbk9iamVjdFwiIT09ZCxyLGYscj9yWzBdOmkuX19rJiZrKGksMCksYyksbnVsbCE9cilmb3IoXz1yLmxlbmd0aDtfLS07KW51bGwhPXJbX10mJmgocltfXSk7Y3x8KFwidmFsdWVcImluIHAmJnZvaWQgMCE9PShfPXAudmFsdWUpJiYoXyE9PWwudmFsdWV8fFwicHJvZ3Jlc3NcIj09PWQmJiFfKSYmSChsLFwidmFsdWVcIixfLHkudmFsdWUsITEpLFwiY2hlY2tlZFwiaW4gcCYmdm9pZCAwIT09KF89cC5jaGVja2VkKSYmXyE9PWwuY2hlY2tlZCYmSChsLFwiY2hlY2tlZFwiLF8seS5jaGVja2VkLCExKSl9cmV0dXJuIGx9ZnVuY3Rpb24gTShuLHUsaSl7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih1KTpuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLGkpfX1mdW5jdGlvbiBOKG4sdSxpKXt2YXIgdCxvO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLCh0PW4ucmVmKSYmKHQuY3VycmVudCYmdC5jdXJyZW50IT09bi5fX2V8fE0odCxudWxsLHUpKSxudWxsIT0odD1uLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bi5fX2spZm9yKG89MDtvPHQubGVuZ3RoO28rKyl0W29dJiZOKHRbb10sdSxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO2l8fG51bGw9PW4uX19lfHxoKG4uX19lKSxuLl9fZT1uLl9fZD12b2lkIDB9ZnVuY3Rpb24gTyhuLGwsdSl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3Iobix1KX1mdW5jdGlvbiBTKHUsaSx0KXt2YXIgbyxyLGY7bC5fXyYmbC5fXyh1LGkpLHI9KG89XCJmdW5jdGlvblwiPT10eXBlb2YgdCk/bnVsbDp0JiZ0Ll9fa3x8aS5fX2ssZj1bXSxqKGksdT0oIW8mJnR8fGkpLl9faz12KGQsbnVsbCxbdV0pLHJ8fGUsZSx2b2lkIDAhPT1pLm93bmVyU1ZHRWxlbWVudCwhbyYmdD9bdF06cj9udWxsOmkuZmlyc3RDaGlsZD9uLmNhbGwoaS5jaGlsZE5vZGVzKTpudWxsLGYsIW8mJnQ/dDpyP3IuX19lOmkuZmlyc3RDaGlsZCxvKSx6KGYsdSl9ZnVuY3Rpb24gcShuLGwpe1MobixsLHEpfWZ1bmN0aW9uIEIobCx1LGkpe3ZhciB0LG8scixmPWEoe30sbC5wcm9wcyk7Zm9yKHIgaW4gdSlcImtleVwiPT1yP3Q9dVtyXTpcInJlZlwiPT1yP289dVtyXTpmW3JdPXVbcl07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MiYmKGYuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP24uY2FsbChhcmd1bWVudHMsMik6aSkseShsLnR5cGUsZix0fHxsLmtleSxvfHxsLnJlZixudWxsKX1mdW5jdGlvbiBEKG4sbCl7dmFyIHU9e19fYzpsPVwiX19jQ1wiK2YrKyxfXzpuLENvbnN1bWVyOmZ1bmN0aW9uKG4sbCl7cmV0dXJuIG4uY2hpbGRyZW4obCl9LFByb3ZpZGVyOmZ1bmN0aW9uKG4pe3ZhciB1LGk7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodT1bXSwoaT17fSlbbF09dGhpcyx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuKXt0aGlzLnByb3BzLnZhbHVlIT09bi52YWx1ZSYmdS5zb21lKG0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt1LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dS5zcGxpY2UodS5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49Yy5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsaSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYoKGk9dS5jb25zdHJ1Y3RvcikmJm51bGwhPWkuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodS5zZXRTdGF0ZShpLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihuKSksdD11Ll9fZCksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHUuY29tcG9uZW50RGlkQ2F0Y2gobiksdD11Ll9fZCksdClyZXR1cm4gdS5fX0U9dX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LHU9MCxpPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxfLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1hKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYSh7fSx1KSx0aGlzLnByb3BzKSksbiYmYSh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxtKHRoaXMpKX0sXy5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLG0odGhpcykpfSxfLnByb3RvdHlwZS5yZW5kZXI9ZCx0PVtdLG89XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsZy5fX3I9MCxmPTA7ZXhwb3J0e1MgYXMgcmVuZGVyLHEgYXMgaHlkcmF0ZSx2IGFzIGNyZWF0ZUVsZW1lbnQsdiBhcyBoLGQgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsaSBhcyBpc1ZhbGlkRWxlbWVudCxfIGFzIENvbXBvbmVudCxCIGFzIGNsb25lRWxlbWVudCxEIGFzIGNyZWF0ZUNvbnRleHQsQSBhcyB0b0NoaWxkQXJyYXksbCBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixvPTAsaT1bXSxjPW4uX19iLGY9bi5fX3IsZT1uLmRpZmZlZCxhPW4uX19jLHY9bi51bm1vdW50O2Z1bmN0aW9uIG0odCxyKXtuLl9faCYmbi5fX2godSx0LG98fHIpLG89MDt2YXIgaT11Ll9fSHx8KHUuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gdD49aS5fXy5sZW5ndGgmJmkuX18ucHVzaCh7fSksaS5fX1t0XX1mdW5jdGlvbiBsKG4pe3JldHVybiBvPTEscCh3LG4pfWZ1bmN0aW9uIHAobixyLG8pe3ZhciBpPW0odCsrLDIpO3JldHVybiBpLnQ9bixpLl9fY3x8KGkuX189W28/byhyKTp3KHZvaWQgMCxyKSxmdW5jdGlvbihuKXt2YXIgdD1pLnQoaS5fX1swXSxuKTtpLl9fWzBdIT09dCYmKGkuX189W3QsaS5fX1sxXV0saS5fX2Muc2V0U3RhdGUoe30pKX1dLGkuX19jPXUpLGkuX199ZnVuY3Rpb24geShyLG8pe3ZhciBpPW0odCsrLDMpOyFuLl9fcyYmayhpLl9fSCxvKSYmKGkuX189cixpLl9fSD1vLHUuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBoKHIsbyl7dmFyIGk9bSh0KyssNCk7IW4uX19zJiZrKGkuX19ILG8pJiYoaS5fXz1yLGkuX19IPW8sdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gbz01LGQoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIF8obix0LHUpe289NixoKGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHQoKSk6biYmKG4uY3VycmVudD10KCkpfSxudWxsPT11P3U6dS5jb25jYXQobikpfWZ1bmN0aW9uIGQobix1KXt2YXIgcj1tKHQrKyw3KTtyZXR1cm4gayhyLl9fSCx1KSYmKHIuX189bigpLHIuX19IPXUsci5fX2g9biksci5fX31mdW5jdGlvbiBBKG4sdCl7cmV0dXJuIG89OCxkKGZ1bmN0aW9uKCl7cmV0dXJuIG59LHQpfWZ1bmN0aW9uIEYobil7dmFyIHI9dS5jb250ZXh0W24uX19jXSxvPW0odCsrLDkpO3JldHVybiBvLmM9bixyPyhudWxsPT1vLl9fJiYoby5fXz0hMCxyLnN1Yih1KSksci5wcm9wcy52YWx1ZSk6bi5fX31mdW5jdGlvbiBUKHQsdSl7bi51c2VEZWJ1Z1ZhbHVlJiZuLnVzZURlYnVnVmFsdWUodT91KHQpOnQpfWZ1bmN0aW9uIHEobil7dmFyIHI9bSh0KyssMTApLG89bCgpO3JldHVybiByLl9fPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5fXyYmci5fXyhuKSxvWzFdKG4pfSksW29bMF0sZnVuY3Rpb24oKXtvWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB4KCl7aS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuX19QKXRyeXt0Ll9fSC5fX2guZm9yRWFjaChnKSx0Ll9fSC5fX2guZm9yRWFjaChqKSx0Ll9fSC5fX2g9W119Y2F0Y2godSl7dC5fX0guX19oPVtdLG4uX19lKHUsdC5fX3YpfX0pLGk9W119bi5fX2I9ZnVuY3Rpb24obil7dT1udWxsLGMmJmMobil9LG4uX19yPWZ1bmN0aW9uKG4pe2YmJmYobiksdD0wO3ZhciByPSh1PW4uX19jKS5fX0g7ciYmKHIuX19oLmZvckVhY2goZyksci5fX2guZm9yRWFjaChqKSxyLl9faD1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2UmJmUodCk7dmFyIG89dC5fX2M7byYmby5fX0gmJm8uX19ILl9faC5sZW5ndGgmJigxIT09aS5wdXNoKG8pJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksYiYmY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtiJiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoeCkpLHU9dm9pZCAwfSxuLl9fYz1mdW5jdGlvbih0LHUpe3Uuc29tZShmdW5jdGlvbih0KXt0cnl7dC5fX2guZm9yRWFjaChnKSx0Ll9faD10Ll9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uX198fGoobil9KX1jYXRjaChyKXt1LnNvbWUoZnVuY3Rpb24obil7bi5fX2gmJihuLl9faD1bXSl9KSx1PVtdLG4uX19lKHIsdC5fX3YpfX0pLGEmJmEodCx1KX0sbi51bm1vdW50PWZ1bmN0aW9uKHQpe3YmJnYodCk7dmFyIHU9dC5fX2M7aWYodSYmdS5fX0gpdHJ5e3UuX19ILl9fLmZvckVhY2goZyl9Y2F0Y2godCl7bi5fX2UodCx1Ll9fdil9fTt2YXIgYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ZnVuY3Rpb24gZyhuKXt2YXIgdD11O1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpLHU9dH1mdW5jdGlvbiBqKG4pe3ZhciB0PXU7bi5fX2M9bi5fXygpLHU9dH1mdW5jdGlvbiBrKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHUpe3JldHVybiB0IT09blt1XX0pfWZ1bmN0aW9uIHcobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7bCBhcyB1c2VTdGF0ZSxwIGFzIHVzZVJlZHVjZXIseSBhcyB1c2VFZmZlY3QsaCBhcyB1c2VMYXlvdXRFZmZlY3QscyBhcyB1c2VSZWYsXyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLGQgYXMgdXNlTWVtbyxBIGFzIHVzZUNhbGxiYWNrLEYgYXMgdXNlQ29udGV4dCxUIGFzIHVzZURlYnVnVmFsdWUscSBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlU3ltYm9sID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZVN5bWJvbCA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWtleXMgLS0gc2FmZSAqL1xuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG52YXIgTkVXX0lURVJBVE9SX1BST1RPVFlQRSA9IEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXN0ID0ge307XG4gIC8vIEZGNDQtIGxlZ2FjeSBpdGVyYXRvcnMgY2FzZVxuICByZXR1cm4gSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdLmNhbGwodGVzdCkgIT09IHRlc3Q7XG59KTtcblxuaWYgKE5FV19JVEVSQVRPUl9QUk9UT1RZUEUpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLUBAaXRlcmF0b3JcbmlmICgoIUlTX1BVUkUgfHwgTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JNZXRob2RzLnZhbHVlcztcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciBuYXRpdmVSZXZlcnNlID0gW10ucmV2ZXJzZTtcbnZhciB0ZXN0ID0gWzEsIDJdO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJldmVyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmV2ZXJzZVxuLy8gZml4IGZvciBTYWZhcmkgMTIuMCBidWdcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODg3OTRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFN0cmluZyh0ZXN0KSA9PT0gU3RyaW5nKHRlc3QucmV2ZXJzZSgpKSB9LCB7XG4gIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtYXNzaWduIC0tIGRpcnR5IGhhY2tcbiAgICBpZiAoaXNBcnJheSh0aGlzKSkgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgICByZXR1cm4gbmF0aXZlUmV2ZXJzZS5jYWxsKHRoaXMpO1xuICB9XG59KTtcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgdSx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIG8sdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGwsdXNlQ29udGV4dCBhcyBmLHVzZURlYnVnVmFsdWUgYXMgY31mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBhLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHYsRnJhZ21lbnQgYXMgZCxyZW5kZXIgYXMgcCxoeWRyYXRlIGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBffWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBTKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIEMobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gRShuKXt0aGlzLnByb3BzPW59ZnVuY3Rpb24gZyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOkModGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobix0KX1yZXR1cm4gci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLl9fZj0hMCxyfShFLnByb3RvdHlwZT1uZXcgYSkuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITAsRS5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIEModGhpcy5wcm9wcyxuKXx8Qyh0aGlzLnN0YXRlLHQpfTt2YXIgdz1oLl9fYjtoLl9fYj1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS5fX2YmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksdyYmdyhuKX07dmFyIFI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpfHwzOTExO2Z1bmN0aW9uIHgobil7ZnVuY3Rpb24gdCh0LGUpe3ZhciByPVMoe30sdCk7cmV0dXJuIGRlbGV0ZSByLnJlZixuKHIsKGU9dC5yZWZ8fGUpJiYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fFwiY3VycmVudFwiaW4gZSk/ZTpudWxsKX1yZXR1cm4gdC4kJHR5cGVvZj1SLHQucmVuZGVyPXQsdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD10Ll9fZj0hMCx0LmRpc3BsYXlOYW1lPVwiRm9yd2FyZFJlZihcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIix0fXZhciBOPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGw9PW4/bnVsbDp2KHYobikubWFwKHQpKX0saz17bWFwOk4sZm9yRWFjaDpOLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3YobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7dmFyIHQ9dihuKTtpZigxIT09dC5sZW5ndGgpdGhyb3dcIkNoaWxkcmVuLm9ubHlcIjtyZXR1cm4gdFswXX0sdG9BcnJheTp2fSxBPWguX19lO2guX19lPWZ1bmN0aW9uKG4sdCxlKXtpZihuLnRoZW4pZm9yKHZhciByLHU9dDt1PXUuX187KWlmKChyPXUuX19jKSYmci5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHIuX19jKG4sdCk7QShuLHQsZSl9O3ZhciBPPWgudW5tb3VudDtmdW5jdGlvbiBMKCl7dGhpcy5fX3U9MCx0aGlzLnQ9bnVsbCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQuX19lJiZ0Ll9fZShuKX1mdW5jdGlvbiBGKG4pe3ZhciB0LGUscjtmdW5jdGlvbiB1KHUpe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSx1KX1yZXR1cm4gdS5kaXNwbGF5TmFtZT1cIkxhenlcIix1Ll9fZj0hMCx1fWZ1bmN0aW9uIE0oKXt0aGlzLnU9bnVsbCx0aGlzLm89bnVsbH1oLnVubW91bnQ9ZnVuY3Rpb24obil7dmFyIHQ9bi5fX2M7dCYmdC5fX1ImJnQuX19SKCksdCYmITA9PT1uLl9faCYmKG4udHlwZT1udWxsKSxPJiZPKG4pfSwoTC5wcm90b3R5cGU9bmV3IGEpLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLnQmJihyLnQ9W10pLHIudC5wdXNoKGUpO3ZhciB1PVUoci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGwpOmwoKSl9O2UuX19SPWk7dmFyIGw9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Upe3ZhciBuPXIuc3RhdGUuX19lO3IuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX192PW51bGwsdC5fX2s9dC5fX2smJnQuX19rLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gbih0LGUscil9KSx0Ll9fYyYmdC5fX2MuX19QPT09ZSYmKHQuX19lJiZyLmluc2VydEJlZm9yZSh0Ll9fZSx0Ll9fZCksdC5fX2MuX19lPSEwLHQuX19jLl9fUD1yKSksdH0obixuLl9fYy5fX1Asbi5fX2MuX19PKX12YXIgdDtmb3Ioci5zZXRTdGF0ZSh7X19lOnIuX19iPW51bGx9KTt0PXIudC5wb3AoKTspdC5mb3JjZVVwZGF0ZSgpfX0sZj0hMD09PXQuX19oO3IuX191Kyt8fGZ8fHIuc2V0U3RhdGUoe19fZTpyLl9fYj1yLl9fdi5fX2tbMF19KSxuLnRoZW4oaSxpKX0sTC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt0aGlzLnQ9W119LEwucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe2lmKHRoaXMuX19iKXtpZih0aGlzLl9fdi5fX2spe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscj10aGlzLl9fdi5fX2tbMF0uX19jO3RoaXMuX192Ll9fa1swXT1mdW5jdGlvbiBuKHQsZSxyKXtyZXR1cm4gdCYmKHQuX19jJiZ0Ll9fYy5fX0gmJih0Ll9fYy5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLl9fYyYmbi5fX2MoKX0pLHQuX19jLl9fSD1udWxsKSxudWxsIT0odD1TKHt9LHQpKS5fX2MmJih0Ll9fYy5fX1A9PT1yJiYodC5fX2MuX19QPWUpLHQuX19jPW51bGwpLHQuX19rPXQuX19rJiZ0Ll9fay5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4odCxlLHIpfSkpLHR9KHRoaXMuX19iLGUsci5fX089ci5fX1ApfXRoaXMuX19iPW51bGx9dmFyIHU9dC5fX2UmJnMoZCxudWxsLG4uZmFsbGJhY2spO3JldHVybiB1JiYodS5fX2g9bnVsbCksW3MoZCxudWxsLHQuX19lP251bGw6bi5jaGlsZHJlbiksdV19O3ZhciBUPWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLm8uZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLm8uc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19O2Z1bmN0aW9uIEQobil7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIG4uY29udGV4dH0sbi5jaGlsZHJlbn1mdW5jdGlvbiBJKG4pe3ZhciB0PXRoaXMsZT1uLmk7dC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3AobnVsbCx0LmwpLHQubD1udWxsLHQuaT1udWxsfSx0LmkmJnQuaSE9PWUmJnQuY29tcG9uZW50V2lsbFVubW91bnQoKSxuLl9fdj8odC5sfHwodC5pPWUsdC5sPXtub2RlVHlwZToxLHBhcmVudE5vZGU6ZSxjaGlsZE5vZGVzOltdLGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLHQuaS5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sZSl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksdC5pLmFwcGVuZENoaWxkKG4pfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSx0LmkucmVtb3ZlQ2hpbGQobil9fSkscChzKEQse2NvbnRleHQ6dC5jb250ZXh0fSxuLl9fdiksdC5sKSk6dC5sJiZ0LmNvbXBvbmVudFdpbGxVbm1vdW50KCl9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKEkse19fdjpuLGk6dH0pfShNLnByb3RvdHlwZT1uZXcgYSkuX19lPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuby5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbih1KXt2YXIgbz1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaCh1KSxUKHQsbixyKSk6dSgpfTtlP2Uobyk6bygpfX0sTS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMubz1uZXcgTWFwO3ZhciB0PXYobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLm8uc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LE0ucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1NLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7dGhpcy5vLmZvckVhY2goZnVuY3Rpb24odCxlKXtUKG4sZSx0KX0pfTt2YXIgaj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDMsUD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwKD8hUGF0aFUpfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaCg/IVIpfGhvcml6fG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHQoPyFMKXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLFY9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvaTovZmlsfGNoZXxyYS9pKS50ZXN0KG4pfTtmdW5jdGlvbiB6KG4sdCxlKXtyZXR1cm4gbnVsbD09dC5fX2smJih0LnRleHRDb250ZW50PVwiXCIpLHAobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfWZ1bmN0aW9uIEIobix0LGUpe3JldHVybiBtKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1hLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLnByb3RvdHlwZSxuLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrbl19LHNldDpmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxuLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6dH0pfX0pfSk7dmFyIEg9aC5ldmVudDtmdW5jdGlvbiBaKCl7fWZ1bmN0aW9uIFkoKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gJCgpe3JldHVybiB0aGlzLmRlZmF1bHRQcmV2ZW50ZWR9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PVosbi5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1ZLG4uaXNEZWZhdWx0UHJldmVudGVkPSQsbi5uYXRpdmVFdmVudD1ufTt2YXIgcSxHPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxKPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXt2YXIgdD1uLnR5cGUsZT1uLnByb3BzLHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Zm9yKHZhciB1IGluIHI9e30sZSl7dmFyIG89ZVt1XTtcInZhbHVlXCI9PT11JiZcImRlZmF1bHRWYWx1ZVwiaW4gZSYmbnVsbD09b3x8KFwiZGVmYXVsdFZhbHVlXCI9PT11JiZcInZhbHVlXCJpbiBlJiZudWxsPT1lLnZhbHVlP3U9XCJ2YWx1ZVwiOlwiZG93bmxvYWRcIj09PXUmJiEwPT09bz9vPVwiXCI6L29uZG91YmxlY2xpY2svaS50ZXN0KHUpP3U9XCJvbmRibGNsaWNrXCI6L15vbmNoYW5nZSh0ZXh0YXJlYXxpbnB1dCkvaS50ZXN0KHUrdCkmJiFWKGUudHlwZSk/dT1cIm9uaW5wdXRcIjovXm9uKEFuaXxUcmF8VG91fEJlZm9yZUlucCkvLnRlc3QodSk/dT11LnRvTG93ZXJDYXNlKCk6UC50ZXN0KHUpP3U9dS5yZXBsYWNlKC9bQS1aMC05XS8sXCItJCZcIikudG9Mb3dlckNhc2UoKTpudWxsPT09byYmKG89dm9pZCAwKSxyW3VdPW8pfVwic2VsZWN0XCI9PXQmJnIubXVsdGlwbGUmJkFycmF5LmlzQXJyYXkoci52YWx1ZSkmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPS0xIT1yLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSl9KSksXCJzZWxlY3RcIj09dCYmbnVsbCE9ci5kZWZhdWx0VmFsdWUmJihyLnZhbHVlPXYoZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbihuKXtuLnByb3BzLnNlbGVjdGVkPXIubXVsdGlwbGU/LTEhPXIuZGVmYXVsdFZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSk6ci5kZWZhdWx0VmFsdWU9PW4ucHJvcHMudmFsdWV9KSksbi5wcm9wcz1yfXQmJmUuY2xhc3MhPWUuY2xhc3NOYW1lJiYoRy5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLG51bGwhPWUuY2xhc3NOYW1lJiYoci5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJjbGFzc05hbWVcIixHKSksbi4kJHR5cGVvZj1qLEomJkoobil9O3ZhciBLPWguX19yO2guX19yPWZ1bmN0aW9uKG4pe0smJksobikscT1uLl9fY307dmFyIFE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6e2N1cnJlbnQ6e3JlYWRDb250ZXh0OmZ1bmN0aW9uKG4pe3JldHVybiBxLl9fbltuLl9fY10ucHJvcHMudmFsdWV9fX19LFg9XCIxNy4wLjJcIjtmdW5jdGlvbiBubihuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gdG4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09an1mdW5jdGlvbiBlbihuKXtyZXR1cm4gdG4obik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBybihuKXtyZXR1cm4hIW4uX19rJiYocChudWxsLG4pLCEwKX1mdW5jdGlvbiB1bihuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBvbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxsbj1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSxmbj1kO2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjp1LHVzZUltcGVyYXRpdmVIYW5kbGU6byx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6bCx1c2VDb250ZXh0OmYsdXNlRGVidWdWYWx1ZTpjLHZlcnNpb246XCIxNy4wLjJcIixDaGlsZHJlbjprLHJlbmRlcjp6LGh5ZHJhdGU6Qix1bm1vdW50Q29tcG9uZW50QXROb2RlOnJuLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0Ol8sY3JlYXRlRmFjdG9yeTpubixjbG9uZUVsZW1lbnQ6ZW4sY3JlYXRlUmVmOmIsRnJhZ21lbnQ6ZCxpc1ZhbGlkRWxlbWVudDp0bixmaW5kRE9NTm9kZTp1bixDb21wb25lbnQ6YSxQdXJlQ29tcG9uZW50OkUsbWVtbzpnLGZvcndhcmRSZWY6eCxmbHVzaFN5bmM6bG4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6b24sU3RyaWN0TW9kZTpkLFN1c3BlbnNlOkwsU3VzcGVuc2VMaXN0Ok0sbGF6eTpGLF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOlF9O2V4cG9ydHtYIGFzIHZlcnNpb24sayBhcyBDaGlsZHJlbix6IGFzIHJlbmRlcixCIGFzIGh5ZHJhdGUscm4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxXIGFzIGNyZWF0ZVBvcnRhbCxubiBhcyBjcmVhdGVGYWN0b3J5LGVuIGFzIGNsb25lRWxlbWVudCx0biBhcyBpc1ZhbGlkRWxlbWVudCx1biBhcyBmaW5kRE9NTm9kZSxFIGFzIFB1cmVDb21wb25lbnQsZyBhcyBtZW1vLHggYXMgZm9yd2FyZFJlZixsbiBhcyBmbHVzaFN5bmMsb24gYXMgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMsZm4gYXMgU3RyaWN0TW9kZSxMIGFzIFN1c3BlbnNlLE0gYXMgU3VzcGVuc2VMaXN0LEYgYXMgbGF6eSxRIGFzIF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInByZWFjdC9jb21wYXRcIjtcclxuLyoqXHJcbiAqIFNob3J0Y3V0IGZvciBwcmVhY3QvY29tcGF0J3MgYGZvcndhcmRSZWZgIHRoYXQgYXV0by1hc3N1bWVzIHNvbWUgdGhpbmdzIHRoYXQgYXJlIHVzZWZ1bCBmb3IgZm9yd2FyZGluZyByZWZzIHRvIGBIVE1MRWxlbWVudHNgIHNwZWNpZmljYWxseS5cclxuICogTmFtZWx5IGl0IGludm9sdmVzIGRlLWd1bmtpbmcgdGhlIHR5cGUgc3lzdGVtIGJ5IGxldHRpbmcgdXMgcmV0dXJuICpnZW5lcmljKiBmdW5jdGlvbiBhbmQgcGxheWluZyBuaWNlIHdpdGggUmVhY3QuIEluIGFsbCBvdGhlciByZXNwZWN0cywgaXQgYWN0cyBsaWtlIGBmb3J3YXJkUmVmYC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRWxlbWVudFJlZihDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoQ29tcG9uZW50KTtcclxuICAgIHJldHVybiBGb3J3YXJkZWRDb21wb25lbnQ7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9yd2FyZC1lbGVtZW50LXJlZi5qcy5tYXAiLCJmdW5jdGlvbiB0b1ZhbChtaXgpIHtcblx0dmFyIGssIHksIHN0cj0nJztcblxuXHRpZiAodHlwZW9mIG1peCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIG1peCA9PT0gJ251bWJlcicpIHtcblx0XHRzdHIgKz0gbWl4O1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtaXggPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkobWl4KSkge1xuXHRcdFx0Zm9yIChrPTA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0aWYgKG1peFtrXSkge1xuXHRcdFx0XHRcdGlmICh5ID0gdG9WYWwobWl4W2tdKSkge1xuXHRcdFx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0XHRcdHN0ciArPSB5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGsgaW4gbWl4KSB7XG5cdFx0XHRcdGlmIChtaXhba10pIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnICcpO1xuXHRcdFx0XHRcdHN0ciArPSBrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuXHR2YXIgaT0wLCB0bXAsIHgsIHN0cj0nJztcblx0d2hpbGUgKGkgPCBhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0aWYgKHRtcCA9IGFyZ3VtZW50c1tpKytdKSB7XG5cdFx0XHRpZiAoeCA9IHRvVmFsKHRtcCkpIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyAnKTtcblx0XHRcdFx0c3RyICs9IHhcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHN0cjtcbn1cbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgY2xzeCB9IGZyb20gXCJjbHN4XCI7XHJcbi8qKlxyXG4gKiBHaXZlbiB0d28gc2V0cyBvZiBwcm9wcywgbWVyZ2VzIHRoZWlyIGBjbGFzc2AgYW5kIGBjbGFzc05hbWVgIHByb3BlcnRpZXMuXHJcbiAqIER1cGxpY2F0ZSBjbGFzc2VzIGFyZSByZW1vdmVkIChvcmRlciBkb2Vzbid0IG1hdHRlciBhbnl3YXkpLlxyXG4gKlxyXG4gKiBAcGFyYW0gbGhzIENsYXNzZXMgb2YgdGhlIGZpcnN0IGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gcmhzIENsYXNzZXMgb2YgdGhlIHNlY29uZCBjb21wb25lbnRcclxuICogQHJldHVybnMgQSBzdHJpbmcgcmVwcmVzZW50aW5nIGFsbCBjb21iaW5lZCBjbGFzc2VzIGZyb20gYm90aCBhcmd1bWVudHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkQ2xhc3NlcyhsaHMsIHJocykge1xyXG4gICAgLy8gTm90ZTogRm9yIHRoZSBzYWtlIG9mIGZvcndhcmQgY29tcGF0aWJpbGl0eSwgdGhpcyBmdW5jdGlvbiBpcyBsYWJlbGxlZCBhc1xyXG4gICAgLy8gYSBob29rLCBidXQgYXMgaXQgdXNlcyBubyBvdGhlciBob29rcyBpdCB0ZWNobmljYWxseSBpc24ndCBvbmUuXHJcbiAgICByZXR1cm4gbWVyZ2VDbGFzc2VzKGxocywgcmhzKTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMobGhzLCByaHMpIHtcclxuICAgIGNvbnN0IGxoc0NsYXNzID0gbGhzPy5jbGFzcztcclxuICAgIGNvbnN0IGxoc0NsYXNzTmFtZSA9IGxocz8uY2xhc3NOYW1lO1xyXG4gICAgY29uc3QgcmhzQ2xhc3MgPSByaHM/LmNsYXNzO1xyXG4gICAgY29uc3QgcmhzQ2xhc3NOYW1lID0gcmhzPy5jbGFzc05hbWU7XHJcbiAgICBpZiAobGhzQ2xhc3MgfHwgcmhzQ2xhc3MgfHwgbGhzQ2xhc3NOYW1lIHx8IHJoc0NsYXNzTmFtZSkge1xyXG4gICAgICAgIGxldCBsaHNDbGFzc2VzID0gY2xzeChsaHNDbGFzcywgbGhzQ2xhc3NOYW1lKS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgbGV0IHJoc0NsYXNzZXMgPSBjbHN4KHJoc0NsYXNzLCByaHNDbGFzc05hbWUpLnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBsZXQgYWxsQ2xhc3NlcyA9IG5ldyBTZXQoWy4uLkFycmF5LmZyb20obGhzQ2xhc3NlcyksIC4uLkFycmF5LmZyb20ocmhzQ2xhc3NlcyldKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhbGxDbGFzc2VzKS5qb2luKFwiIFwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdHlwZXRlc3QoKSB7XHJcbiAgICBjb25zdCBjID0gW1xyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoe30sIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh1bmRlZmluZWQsIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHt9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzOiBcInN0cmluZ1wiIH0sIHt9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzczogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzczogdW5kZWZpbmVkIH0sIHsgY2xhc3M6IFwic3RyaW5nXCIgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkQ2xhc3Nlcyh7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9LCB7IGNsYXNzTmFtZTogdW5kZWZpbmVkIH0pLFxyXG4gICAgICAgIHVzZU1lcmdlZENsYXNzZXMoeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IFwic3RyaW5nXCIgfSwgeyBjbGFzc05hbWU6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiB1bmRlZmluZWQgfSwgeyBjbGFzczogXCJzdHJpbmdcIiB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3NOYW1lOiBcInN0cmluZ1wiIH0sIHsgY2xhc3M6IHVuZGVmaW5lZCB9KSxcclxuICAgICAgICB1c2VNZXJnZWRDbGFzc2VzKHsgY2xhc3M6IHVuZGVmaW5lZCB9LCB7IGNsYXNzTmFtZTogXCJzdHJpbmdcIiB9KSxcclxuICAgIF07XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1swXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1syXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1szXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzRdLmNvbmNhdChcIlwiKTtcclxuICAgIGNbNV0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s2XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzddLmNvbmNhdChcIlwiKTtcclxuICAgIGNbOF0uY29uY2F0KFwiXCIpO1xyXG4gICAgY1s5XS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEwXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzExXS5jb25jYXQoXCJcIik7XHJcbiAgICBjWzEyXS5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgY1sxM107XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1jbGFzc2VzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5mdW5jdGlvbiBwcm9jZXNzUmVmKGluc3RhbmNlLCByZWYpIHtcclxuICAgIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByZWYoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVmICE9IG51bGwpIHtcclxuICAgICAgICByZWYuY3VycmVudCA9IGluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBDb21iaW5lcyB0d28gcmVmcyBpbnRvIG9uZS4gVGhpcyBhbGxvd3MgYSBjb21wb25lbnQgdG8gYm90aCB1c2UgaXRzIG93biByZWYgKmFuZCogZm9yd2FyZCBhIHJlZiB0aGF0IHdhcyBnaXZlbiB0byBpdC5cclxuICogQHBhcmFtIGxoc1xyXG4gKiBAcGFyYW0gcmhzXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVyZ2VkUmVmcygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobGhzUHJvcHMsIHJoc1Byb3BzKSB7XHJcbiAgICAgICAgY29uc3QgbGhzID0gbGhzUHJvcHM/LnJlZjtcclxuICAgICAgICBjb25zdCByaHMgPSByaHNQcm9wcz8ucmVmO1xyXG4gICAgICAgIGlmIChsaHMgPT0gbnVsbCAmJiByaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaHMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbGhzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IHVzZUNhbGxiYWNrKChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIGxocyk7XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVmKGN1cnJlbnQsIHJocyk7XHJcbiAgICAgICAgICAgIH0sIFtsaHMsIHJoc10pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLypcclxuZnVuY3Rpb24gdHlwZXRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IHJlZjogUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFjY2VwdHNSZWYocmVmOiBSZWY8YW55PikgeyB9XHJcbiAgICBmdW5jdGlvbiBhY2NlcHRzT3B0aW9uYWxSZWYocmVmOiBSZWY8YW55PiB8IHVuZGVmaW5lZCkgeyB9XHJcblxyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkodW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRSZWZzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHVuZGVmaW5lZCksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHVuZGVmaW5lZCwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFJlZnM8SFRNTElucHV0RWxlbWVudD4oKSh7IHJlZiB9LCBwcm9wcyksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmOiB1bmRlZmluZWQgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmOiB1bmRlZmluZWQgfSwgeyByZWYgfSksXHJcbiAgICAgICAgdXNlTWVyZ2VkUmVmczxIVE1MSW5wdXRFbGVtZW50PigpKHsgcmVmIH0sIHsgcmVmIH0pLFxyXG4gICAgXSBhcyBjb25zdDtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgYWNjZXB0c1JlZihjWzBdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yXHJcbiAgICBhY2NlcHRzUmVmKGNbMV0pO1xyXG5cclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzJdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzNdKTtcclxuICAgIGFjY2VwdHNPcHRpb25hbFJlZihjWzRdKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPXHJcbiAgICBhY2NlcHRzUmVmKGNbNV0pO1xyXG4gICAgYWNjZXB0c1JlZihjWzZdKTtcclxuICAgIGFjY2VwdHNSZWYoY1s3XSk7XHJcbiAgICBhY2NlcHRzUmVmKGNbOF0pO1xyXG59XHJcbiovXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcmVmcy5qcy5tYXAiLCIvKipcclxuICogTWVyZ2VzIHR3byBzdHlsZSBvYmplY3RzLCByZXR1cm5pbmcgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHN0eWxlIFRoZSB1c2VyLWdpdmVuIHN0eWxlIHByb3AgZm9yIHRoaXMgY29tcG9uZW50XHJcbiAqIEBwYXJhbSBvYmogVGhlIENTUyBwcm9wZXJ0aWVzIHlvdSB3YW50IGFkZGVkIHRvIHRoZSB1c2VyLWdpdmVuIHN0eWxlXHJcbiAqIEByZXR1cm5zIEEgQ1NTIG9iamVjdCBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIGJvdGggb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXJnZWRTdHlsZXMobGhzLCByaHMpIHtcclxuICAgIC8vIEVhc3kgY2FzZSwgd2hlbiB0aGVyZSBhcmUgbm8gc3R5bGVzIHRvIG1lcmdlIHJldHVybiBub3RoaW5nLlxyXG4gICAgaWYgKCFsaHMgJiYgIXJocylcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHR5cGVvZiBsaHMgIT0gdHlwZW9mIHJocykge1xyXG4gICAgICAgIC8vIEVhc3kgY2FzZXMsIHdoZW4gb25lIGlzIG51bGwgYW5kIHRoZSBvdGhlciBpc24ndC5cclxuICAgICAgICBpZiAobGhzICYmICFyaHMpXHJcbiAgICAgICAgICAgIHJldHVybiBsaHM7XHJcbiAgICAgICAgaWYgKCFsaHMgJiYgcmhzKVxyXG4gICAgICAgICAgICByZXR1cm4gcmhzO1xyXG4gICAgICAgIC8vIFRoZXkncmUgYm90aCBub24tbnVsbCBidXQgZGlmZmVyZW50IHR5cGVzLlxyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHN0cmluZyB0eXBlIHRvIGFuIG9iamVjdCBiYWcgdHlwZSBhbmQgcnVuIGl0IGFnYWluLlxyXG4gICAgICAgIGlmIChsaHMgJiYgcmhzKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGhzID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGU6IE9iamVjdC5mcm9tRW50cmllcyhsaHMuc3BsaXQoXCI7XCIpLm1hcChzdGF0ZW1lbnQgPT4gc3RhdGVtZW50LnNwbGl0KFwiOlwiKSkpIH0sIHJocyk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmhzID09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVyZ2VkU3R5bGVzKGxocywgeyBzdHlsZTogT2JqZWN0LmZyb21FbnRyaWVzKGxocy5zcGxpdChcIjtcIikubWFwKHN0YXRlbWVudCA9PiBzdGF0ZW1lbnQuc3BsaXQoXCI6XCIpKSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIExvZ2ljPz8/XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIC8vIFRoZXkncmUgYm90aCBzdHJpbmdzLCBqdXN0IGNvbmNhdGVuYXRlIHRoZW0uXHJcbiAgICBpZiAodHlwZW9mIGxocyA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2xoc307JHtyaHN9YDsgLy8gVE9ETzogSW1wcm92ZSB0aGUgdHlwaW5nIHRvIG1ha2UgdGhpcyBwb3NzaWJsZVxyXG4gICAgfVxyXG4gICAgLy8gVGhleSdyZSBib3RoIG9iamVjdHMsIGp1c3QgbWVyZ2UgdGhlbS5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uKGxocz8uc3R5bGUgPz8ge30pLFxyXG4gICAgICAgIC4uLihyaHM/LnN0eWxlID8/IHt9KVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZCh1KSB7IH1cclxuZnVuY3Rpb24gYWNjZXB0c1N0cmluZ09yQ3NzKHN0cikgeyB9XHJcbmZ1bmN0aW9uIGFjY2VwdHNDc3MocHJvcCkgeyB9XHJcbmZ1bmN0aW9uIHR5cGV0ZXN0KHByb3BzKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IHt9O1xyXG4gICAgY29uc3QgYyA9IFtcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh7fSwgdW5kZWZpbmVkKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXModW5kZWZpbmVkLCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHt9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHByb3BzLCB1bmRlZmluZWQpLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyh1bmRlZmluZWQsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMocHJvcHMsIHByb3BzKSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZSB9LCB7fSksXHJcbiAgICAgICAgdXNlTWVyZ2VkU3R5bGVzKHsgc3R5bGUgfSwgcHJvcHMpLFxyXG4gICAgICAgIHVzZU1lcmdlZFN0eWxlcyhwcm9wcywgeyBzdHlsZSB9KSxcclxuICAgICAgICB1c2VNZXJnZWRTdHlsZXMoeyBzdHlsZSB9LCB7IHN0eWxlIH0pLFxyXG4gICAgXTtcclxuICAgIC8vIFNhbml0eSBjaGVja3NcclxuICAgIGNbMF0gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbMV0gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbMl0gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbM10gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbNF0gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbNV0gPT09IHVuZGVmaW5lZDtcclxuICAgIGNbNl0gPT09IHVuZGVmaW5lZDtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgYm90aCB3ZXJlIHVuZGVmaW5lZFxyXG4gICAgY1swXT8uYmFja2dyb3VuZENvbG9yO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgd2FzIG5vdCBwcm92aWRlZCBhcyBhIHByb3BcclxuICAgIGNbMV0/LmJhY2tncm91bkNvbG9yO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgd2FzIG5vdCBwcm92aWRlZCBhcyBhIHByb3BcclxuICAgIGNbMl0/LmJhY2tncm91bmRDb2xvcjtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIHdhcyBub3QgcHJvdmlkZWQgYXMgYSBwcm9wXHJcbiAgICBjWzNdPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciBCZWNhdXNlIFwic3R5bGVcIiBtYXkgYmUgdW5kZWZpbmVkIGRlcGVuZGluZyBvbiBob3cgUCBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s0XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzRdKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yIEJlY2F1c2UgXCJzdHlsZVwiIG1heSBiZSB1bmRlZmluZWQgZGVwZW5kaW5nIG9uIGhvdyBQIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXNcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzVdKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbNV0pO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgQmVjYXVzZSBcInN0eWxlXCIgbWF5IGJlIHVuZGVmaW5lZCBkZXBlbmRpbmcgb24gaG93IFAgZXh0ZW5kcyBIVE1MQXR0cmlidXRlc1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbNl0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s2XSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzddKTtcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzc09yVW5kZWZpbmVkKGNbN10pO1xyXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUT0RPOiBUaGlzIHNob3VsZCBiZSBhbGxvd2VkXHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3MoY1s4XSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzhdKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVE9ETzogVGhpcyBzaG91bGQgYmUgYWxsb3dlZFxyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzKGNbOV0pO1xyXG4gICAgYWNjZXB0c1N0cmluZ09yQ3NzT3JVbmRlZmluZWQoY1s5XSk7XHJcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IFRoaXMgc2hvdWxkIGJlIGFsbG93ZWRcclxuICAgIGFjY2VwdHNTdHJpbmdPckNzcyhjWzEwXSk7XHJcbiAgICBhY2NlcHRzU3RyaW5nT3JDc3NPclVuZGVmaW5lZChjWzEwXSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLW1lcmdlZC1zdHlsZXMuanMubWFwIiwiaW1wb3J0IHsgdXNlTWVyZ2VkQ2xhc3NlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtY2xhc3Nlc1wiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRSZWZzIH0gZnJvbSBcIi4vdXNlLW1lcmdlZC1yZWZzXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFN0eWxlcyB9IGZyb20gXCIuL3VzZS1tZXJnZWQtc3R5bGVzXCI7XHJcbmxldCBsb2cgPSAoc3RyKSA9PiB7IGRlYnVnZ2VyOyAvKiBJbnRlbnRpb25hbCAqLyB9O1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTG9nZ2luZ1Byb3BDb25mbGljdHMobG9nMikge1xyXG4gICAgbG9nID0gbG9nMjtcclxufVxyXG4vLyBHZW5lcmFsbHkgdG9vIGNvbXBsZXhcclxuLy9QaWNrPGguSlNYLkhUTUxBdHRyaWJ1dGVzPEU+LCBrZXlvZiBoLkpTWC5IVE1MQXR0cmlidXRlczxFPiAmIChrZXlvZiBUIHwga2V5b2YgVSk+OyBcclxuLyoqXHJcbiAqIEdpdmVuIHR3byBzZXRzIG9mIHByb3BzLCBtZXJnZXMgdGhlbSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LlxyXG4gKlxyXG4gKiBUaGUgaG9vayBpcyBhd2FyZSBvZiBhbmQgY2FuIGludGVsbGlnZW50bHkgbWVyZ2UgYGNsYXNzTmFtZWAsIGBjbGFzc2AsIGBzdHlsZWAsIGByZWZgLCBhbmQgYWxsIGV2ZW50IGhhbmRsZXJzLlxyXG4gKiBAcGFyYW0gbGhzMlxyXG4gKiBAcGFyYW0gcmhzMlxyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lcmdlZFByb3BzKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaHMyLCByaHMyKSB7XHJcbiAgICAgICAgLy8gRmlyc3QsIHB1dCBpbiBhbGwgdGhlIHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byByZWFzb24gYWJvdXRcclxuICAgICAgICAvLyBhbmQgYWxsIGxocyBwcm9wcy4gV2UncmUgZ29pbmcgdG8gbWVyZ2UgaW4gcmhzIGp1c3QgYWZ0ZXIuXHJcbiAgICAgICAgY29uc3QgeyBjbGFzczogbGhzQ2xhc3MsIGNsYXNzTmFtZTogbGhzQ2xhc3NOYW1lLCBzdHlsZTogbGhzU3R5bGUsIHJlZjogbGhzUmVmLCAuLi5saHMgfSA9IGxoczI7XHJcbiAgICAgICAgY29uc3QgeyBjbGFzczogcmhzQ2xhc3MsIGNsYXNzTmFtZTogcmhzQ2xhc3NOYW1lLCBzdHlsZTogcmhzU3R5bGUsIHJlZjogcmhzUmVmLCAuLi5yaHMgfSA9IHJoczI7XHJcbiAgICAgICAgbGV0IHJldCA9IHtcclxuICAgICAgICAgICAgLi4ubGhzLFxyXG4gICAgICAgICAgICByZWY6IHVzZU1lcmdlZFJlZnMoKShsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgc3R5bGU6IHVzZU1lcmdlZFN0eWxlcyhsaHMyLCByaHMyKSxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiB1c2VNZXJnZWRDbGFzc2VzKGxoczIsIHJoczIpXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBOb3csIGRvICpldmVyeXRoaW5nKiBlbHNlXHJcbiAgICAgICAgLy8gTWVyZ2UgZXZlcnkgcmVtYWluaW5nIGV4aXN0aW5nIGVudHJ5IGluIGxocyB3aXRoIHdoYXQgd2UndmUgYWxyZWFkeSBwdXQgaW4gcmV0LlxyXG4gICAgICAgIC8vY29uc3QgbGhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGxocykgYXMgW2tleW9mIFQsIFRba2V5b2YgVF1dW107XHJcbiAgICAgICAgY29uc3QgcmhzRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHJocyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBbcmhzS2V5LCByaHNWYWx1ZV0gb2YgcmhzRW50cmllcykge1xyXG4gICAgICAgICAgICBjb25zdCBsaHNWYWx1ZSA9IGxoc1tyaHNLZXldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGxoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHJoc1ZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZXkncmUgYm90aCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgbWVyZ2VkIChvciBvbmUncyBhIGZ1bmN0aW9uIGFuZCB0aGUgb3RoZXIncyBudWxsKS5cclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiAqZWFzeSogY2FzZSwgYnV0IGEgd2VsbC1kZWZpbmVkIG9uZS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IG1lcmdlRnVuY3Rpb25zKGxoc1ZhbHVlLCByaHNWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IG1lcmdlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVoLi4ud2UncmUgaGVyZSBiZWNhdXNlIG9uZSBvZiB0aGVtJ3MgbnVsbCwgcmlnaHQ/XHJcbiAgICAgICAgICAgICAgICBpZiAobGhzVmFsdWUgPT0gbnVsbCAmJiByaHNWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJoc1ZhbHVlID09PSBudWxsICYmIGxoc1ZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyaHNLZXldID0gcmhzVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXRbcmhzS2V5XSA9IGxoc1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSBsaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJoc1ZhbHVlID09IGxoc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSSBtZWFuLCB0aGV5J3JlIHRoZSBzYW1lIHZhbHVlIGF0IGxlYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3QgcmVhbGx5IGlkZWFsIHRob3VnaC5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFVnaC5cclxuICAgICAgICAgICAgICAgICAgICAvLyBObyBnb29kIHN0cmF0ZWdpZXMgaGVyZSwganVzdCBsb2cgaXQgaWYgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbG9nPy4oYENvdWxkIG5vdCBtZXJnZSBpbmNvbXBhdGlibGUgcHJvcCBcIiR7cmhzS2V5fVwiICh0eXBlOiAke3R5cGVvZiByaHNWYWx1ZX0sIHZhbHVlczogWyR7bGhzVmFsdWV9LCAke3Joc1ZhbHVlfV0pYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3Joc0tleV0gPSByaHNWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBtZXJnZUZ1bmN0aW9ucyhsaHMsIHJocykge1xyXG4gICAgaWYgKCFsaHMpXHJcbiAgICAgICAgcmV0dXJuIHJocztcclxuICAgIGlmICghcmhzKVxyXG4gICAgICAgIHJldHVybiBsaHM7XHJcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBsaHM/LiguLi5hcmdzKTtcclxuICAgICAgICByaHM/LiguLi5hcmdzKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJpY0dldFRlc3QoKSB7XHJcbiAgICBjb25zdCB0MSA9IG51bGw7XHJcbiAgICBjb25zdCB0MiA9IG51bGw7XHJcbiAgICBjb25zdCB0MyA9IG51bGw7XHJcbiAgICBpZiAodDMuaWQgPT0gbnVsbCkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdDMuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgfVxyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHRlc3Q8UCBleHRlbmRzIGguSlNYLkhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+Pihwcm9wczogUCkge1xyXG5cclxuICAgIGNvbnN0IGlkMDogR2VuZXJpY0dldDx7fSwgXCJpZFwiLCBzdHJpbmc+ID0gXCJcIjtcclxuICAgIGNvbnN0IGlkMzogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaWQ0OiBHZW5lcmljR2V0PHsgaWQ6IHVuZGVmaW5lZCB9LCBcImlkXCIsIHN0cmluZz4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDU6IEdlbmVyaWNHZXQ8eyBpZDogdW5kZWZpbmVkIH0sIFwiaWRcIiwgc3RyaW5nPiA9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGlkNjogR2VuZXJpY0dldDx7IGlkOiB1bmRlZmluZWQgfSwgXCJpZFwiLCBzdHJpbmc+ID0gdW5kZWZpbmVkO1xyXG4gICAgLy9jb25zdCBpZDI6IFppcFNpbmdsZTxzdHJpbmcgfCB1bmRlZmluZWQsIHN0cmluZyB8IHVuZGVmaW5lZD4gPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpZDE6IFppcE9iamVjdDx7IGlkOiB1bmRlZmluZWQgfSwgeyBpZDogc3RyaW5nIH0+ID0geyBpZDogdW5kZWZpbmVkIH07XHJcblxyXG4gICAgdHlwZSBNMSA9IEdlbmVyaWNHZXQ8UCwgXCJzdHlsZVwiLCBzdHJpbmc+O1xyXG4gICAgdHlwZSBNMiA9IEdlbmVyaWNHZXQ8e30sIFwic3R5bGVcIiwgc3RyaW5nPjtcclxuICAgIGNvbnN0IG0xOiBNMSA9IFwiXCI7XHJcbiAgICBjb25zdCBtMjogTTEgPSB1bmRlZmluZWQ7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBCZWNhdXNlIG51bWJlciBpc24ndCBhc3NpZ25hYmxlIHRvIHN0cmluZ1xyXG4gICAgY29uc3QgbTM6IE0xID0gMDtcclxuXHJcbiAgICBjb25zdCBtNDogTTIgPSBcIlwiO1xyXG4gICAgY29uc3QgbTU6IE0yID0gdW5kZWZpbmVkO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgQmVjYXVzZSBudW1iZXIgaXNuJ3QgYXNzaWduYWJsZSB0byBzdHJpbmdcclxuICAgIGNvbnN0IG02OiBNMiA9IDA7XHJcblxyXG4gICAgY29uc3QgcDE6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHt9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHt9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDI6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBzdHJpbmcgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiBcInN0cmluZ1wiIH0pO1xyXG4gICAgY29uc3QgcDM6IE1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQsIHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfT4gPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHsgaWQ6IHVuZGVmaW5lZCB9LCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNDogTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudCwge30sIHt9PiA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkoe30sIHt9KTtcclxuICAgIGNvbnN0IHA1ID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywge30pO1xyXG4gICAgY29uc3QgcDYgPSB1c2VNZXJnZWRQcm9wczxIVE1MSW5wdXRFbGVtZW50PigpKHByb3BzLCB7IGlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBjb25zdCBwNyA9IHVzZU1lcmdlZFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+KCkocHJvcHMsIHsgaWQ6IFwic3RyaW5nXCIgfSk7XHJcblxyXG5cclxuICAgIHAxLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwMi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcDMuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHA0LmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHA1LmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICBwNi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcDcuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNi5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICBwNy5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHVuZGVmaW5lZCkge31cclxuICAgIGVsc2UgaWYgKHA1LmFsbG93RnVsbFNjcmVlbiA9PT0gZmFsc2UpIHt9XHJcbiAgICBlbHNlIGlmIChwNS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocDUuYWxsb3dGdWxsU2NyZWVuKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdW5kZWZpbmVkKSB7fVxyXG4gICAgZWxzZSBpZiAocDYuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHA2LmFsbG93RnVsbFNjcmVlbiA9PT0gdHJ1ZSkge31cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjY2VwdHNOZXZlcihwNi5hbGxvd0Z1bGxTY3JlZW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChwNy5hbGxvd0Z1bGxTY3JlZW4gPT09IGZhbHNlKSB7fVxyXG4gICAgZWxzZSBpZiAocDcuYWxsb3dGdWxsU2NyZWVuID09PSB0cnVlKSB7fVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWNjZXB0c05ldmVyKHA3LmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE1ha2Ugc3VyZSBpdCB3b3JrcyByZWN1cnNpdmVseVxyXG4gICAgY29uc3QgcjFhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDEpO1xyXG4gICAgY29uc3QgcjFiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDEpO1xyXG4gICAgY29uc3QgcjJhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDIpO1xyXG4gICAgY29uc3QgcjJiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDIpO1xyXG4gICAgY29uc3QgcjNhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDMpO1xyXG4gICAgY29uc3QgcjNiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDMpO1xyXG4gICAgY29uc3QgcjRhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDQpO1xyXG4gICAgY29uc3QgcjRiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDQpO1xyXG4gICAgY29uc3QgcjVhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDUpO1xyXG4gICAgY29uc3QgcjViID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDUpO1xyXG4gICAgY29uc3QgcjZhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDYpO1xyXG4gICAgY29uc3QgcjZiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDYpO1xyXG4gICAgY29uc3QgcjdhID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKSh7fSwgcDcpO1xyXG4gICAgY29uc3QgcjdiID0gdXNlTWVyZ2VkUHJvcHM8SFRNTElucHV0RWxlbWVudD4oKShwcm9wcywgcDcpO1xyXG5cclxuXHJcbiAgICByMWEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHIxYi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjJhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByMmIuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgY2FuJ3QgYmUgYW55dGhpbmcgYnV0IHVuZGVmaW5lZFxyXG4gICAgcjNhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByM2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIGNhbid0IGJlIGFueXRoaW5nIGJ1dCB1bmRlZmluZWRcclxuICAgIHI0YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjRiLmlkPy5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIHI1YS5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjViLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByNmEuaWQ/LmNvbmNhdChcIlwiKTtcclxuICAgIHI2Yi5pZD8uY29uY2F0KFwiXCIpO1xyXG4gICAgcjdhLmlkPy5jb25jYXQoXCJcIik7XHJcbiAgICByN2IuaWQ/LmNvbmNhdChcIlwiKTtcclxuXHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNWEuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjViLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI2YS5pZC5jb25jYXQoXCJcIik7XHJcbiAgICAvLy8gQHRzLWV4cGVjdC1lcnJvciAgICBpZCBtdXN0IGNvbnRhaW4gdW5kZWZpbmVkXHJcbiAgICByNmIuaWQuY29uY2F0KFwiXCIpO1xyXG4gICAgLy8vIEB0cy1leHBlY3QtZXJyb3IgICAgaWQgbXVzdCBjb250YWluIHVuZGVmaW5lZFxyXG4gICAgcjdhLmlkLmNvbmNhdChcIlwiKTtcclxuICAgIC8vLyBAdHMtZXhwZWN0LWVycm9yICAgIGlkIG11c3QgY29udGFpbiB1bmRlZmluZWRcclxuICAgIHI3Yi5pZC5jb25jYXQoXCJcIik7XHJcblxyXG5cclxuICAgIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjVhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNWIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI1Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjViLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmEuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyNmIuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI2Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjZiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2EuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3YS5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdhLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSB1bmRlZmluZWQpIHt9XHJcbiAgICBlbHNlIGlmIChyN2IuYWxsb3dGdWxsU2NyZWVuID09PSBmYWxzZSkge31cclxuICAgIGVsc2UgaWYgKHI3Yi5hbGxvd0Z1bGxTY3JlZW4gPT09IHRydWUpIHt9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhY2NlcHRzTmV2ZXIocjdiLmFsbG93RnVsbFNjcmVlbik7XHJcbiAgICB9XHJcblxyXG59XHJcbmZ1bmN0aW9uIGFjY2VwdHNOZXZlcihuOiBuZXZlcikge31cclxuKi8gXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1tZXJnZWQtcHJvcHMuanMubWFwIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcclxuICAgIHJldHVybiAoc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpKTtcclxufVxyXG4vKipcclxuICogSW5zcGVjdHMgdGhlIGVsZW1lbnQncyBzdHlsZSBhbmQgZGV0ZXJtaW5lcyB0aGUgbG9naWNhbCBkaXJlY3Rpb24gdGhhdCB0ZXh0IGZsb3dzLlxyXG4gKlxyXG4gKiBDZXJ0YWluIENTUyBwcm9wZXJ0aWVzLCBsaWtlIGBibG9jay1zaXplYCwgcmVzcGVjdCB0aGUgY3VycmVudCB3cml0aW5nIG1vZGUgYW5kIHRleHQgZGlyZWN0aW9uLlxyXG4gKiBCdXQgYHRyYW5zZm9ybWAsIGBjbGlwYCwgZXRjLiBkb24ndC5cclxuICpcclxuICogVGhpcyBpcyBwcm92aWRlZCBzbyB0aGF0IENTUyBwcm9wZXJ0aWVzIGNhbiBjb25zaXN0ZW50bHkgdXNlIHRob3NlIGxvZ2ljYWwgcHJvcGVydGllcy5cclxuICpcclxuICogU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy8jbG9naWNhbC10by1waHlzaWNhbFxyXG4gKlxyXG4gKiBAcmV0dXJucyBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uczpcclxuICogKiBgZ2V0TG9naWNhbERpcmVjdGlvbmA6IHJldHJpZXZlcyBhIGBMb2dpY2FsRGlyZWN0aW9uSW5mb2AgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBlbGVtZW50LiAoRnVuY3Rpb24gaXMgY29uc3RhbnQgYmV0d2VlbiByZW5kZXJzKVxyXG4gKiAqIGBjb252ZXJ0RWxlbWVudFNpemVgOiBXaGVuIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgdXNlRWxlbWVudFNpemVgLCBhbGxvd3MgeW91IHRvIHJldHJpZXZlIHRoZSBsb2dpY2FsIHNpemUgb2YgYW4gZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBwaHlzaWNhbCBzaXplLlxyXG4gKiAqIGBjb252ZXJ0VG9Mb2dpY2FsT3JpZW50YXRpb25gOiBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIiB0byBcImlubGluZVwiIG9yIFwiYmxvY2tcIi5cclxuICogKiBgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbmA6ICBCYXNlZCBvbiB0aGUgY3VycmVudCBkaXJlY3Rpb24sIGNvbnZlcnRzIFwiaW5saW5lXCIgb3IgXCJibG9ja1wiIHRvIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dpY2FsRGlyZWN0aW9uKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IFt3cml0aW5nTW9kZSwgc2V0V3JpdGluZ01vZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGV4dE9yaWVudGF0aW9uLCBzZXRUZXh0T3JpZW50YXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCB3cml0aW5nTW9kZVJlZiA9IHVzZVJlZih3cml0aW5nTW9kZSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25SZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcclxuICAgIGNvbnN0IHRleHRPcmllbnRhdGlvblJlZiA9IHVzZVJlZih0ZXh0T3JpZW50YXRpb24pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgd3JpdGluZ01vZGVSZWYuY3VycmVudCA9IHdyaXRpbmdNb2RlOyB9LCBbd3JpdGluZ01vZGVdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IGRpcmVjdGlvblJlZi5jdXJyZW50ID0gZGlyZWN0aW9uOyB9LCBbZGlyZWN0aW9uXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyB0ZXh0T3JpZW50YXRpb25SZWYuY3VycmVudCA9IHRleHRPcmllbnRhdGlvbjsgfSwgW3RleHRPcmllbnRhdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zdCB3ID0gY29tcHV0ZWRTdHlsZXMud3JpdGluZ01vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBjb21wdXRlZFN0eWxlcy50ZXh0T3JpZW50YXRpb247XHJcbiAgICAgICAgICAgIGNvbnN0IGQgPSBjb21wdXRlZFN0eWxlcy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgIHNldFdyaXRpbmdNb2RlKHcgfHwgXCJob3Jpem9udGFsLXRiXCIpO1xyXG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oZCB8fCBcInJ0bFwiKTtcclxuICAgICAgICAgICAgc2V0VGV4dE9yaWVudGF0aW9uKHQgfHwgXCJtaXhlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGdldExvZ2ljYWxEaXJlY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbGV0IHdyaXRpbmdNb2RlID0gd3JpdGluZ01vZGVSZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IHRleHRPcmllbnRhdGlvbiA9IHRleHRPcmllbnRhdGlvblJlZi5jdXJyZW50O1xyXG4gICAgICAgIGlmICghd3JpdGluZ01vZGUgfHwgIWRpcmVjdGlvbiB8fCAhdGV4dE9yaWVudGF0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBpZiAodGV4dE9yaWVudGF0aW9uID09IFwidXByaWdodFwiKVxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBcImx0clwiO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLldyaXRpbmdNb2Rlc1t3cml0aW5nTW9kZSA/PyBcImhvcml6b250YWwtdGJcIl1bZGlyZWN0aW9uID8/IFwibHRyXCJdXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt3cml0aW5nTW9kZVJlZiwgZGlyZWN0aW9uUmVmLCB0ZXh0T3JpZW50YXRpb25SZWZdKTtcclxuICAgIGNvbnN0IGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24/LmlubGluZU9yaWVudGF0aW9uID09PSBlbGVtZW50T3JpZW50YXRpb24pXHJcbiAgICAgICAgICAgIHJldHVybiBcImlubGluZVwiO1xyXG4gICAgICAgIHJldHVybiBcImJsb2NrXCI7XHJcbiAgICB9LCBbZ2V0TG9naWNhbERpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgY29udmVydFRvUGh5c2ljYWxPcmllbnRhdGlvbiA9IHVzZUNhbGxiYWNrKChlbGVtZW50T3JpZW50YXRpb24sIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmIChlbGVtZW50T3JpZW50YXRpb24gPT0gXCJpbmxpbmVcIikge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uPy5pbmxpbmVPcmllbnRhdGlvbiA9PSBcImhvcml6b250YWxcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImhvcml6b250YWxcIjtcclxuICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24/LmJsb2NrT3JpZW50YXRpb24gPT0gXCJ2ZXJ0aWNhbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwidmVydGljYWxcIjtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaG9yaXpvbnRhbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBjb252ZXJ0RWxlbWVudFNpemUgPSB1c2VDYWxsYmFjaygoZWxlbWVudFNpemUsIGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICAgIGRpcmVjdGlvbiA/Pz0gZ2V0TG9naWNhbERpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY29uc3QgeyBpbmxpbmVTaXplLCBibG9ja1NpemUsIGlubGluZURpcmVjdGlvbiwgYmxvY2tEaXJlY3Rpb24gfSA9IGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgLy8gU2l6ZSBpcyByZWxhdGl2ZWx5IHNpbXBsZVxyXG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lU2l6ZSA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoaW5saW5lU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBjbGllbnRCbG9ja1NpemUgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGJsb2NrU2l6ZSl9YF07XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRJbmxpbmVTaXplID0gZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShpbmxpbmVTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrU2l6ZSA9IGVsZW1lbnRTaXplW2BvZmZzZXQke2NhcGl0YWxpemUoYmxvY2tTaXplKX1gXTtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbElubGluZVNpemUgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGlubGluZVNpemUpfWBdO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsQmxvY2tTaXplID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShibG9ja1NpemUpfWBdO1xyXG4gICAgICAgICAgICAvLyBQb3NpdGlvbiByZXF1aXJlcyB1cyB0byBzb21ldGltZXMgdXNlIG9uZSBwcm9wZXJ0eSAobGlrZSBgbGVmdGApXHJcbiAgICAgICAgICAgIC8vIG9yIHNvbWV0aW1lcyB0d28gKGxpa2UgYGxlZnRgICsgYHdpZHRoYClcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UGh5c2ljYWxMZWZ0VG9wKGRpcikgeyBpZiAoZGlyID09PSBcImx0clwiIHx8IGRpciA9PSBcInJ0bFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiOyByZXR1cm4gXCJ0b3BcIjsgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQaHlzaWNhbFJpZ2h0Qm90dG9tKGRpcikgeyBpZiAoZGlyID09PSBcInJ0bFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwid2lkdGhcIjsgaWYgKGRpciA9PT0gXCJidHRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImhlaWdodFwiOyByZXR1cm4gbnVsbDsgfVxyXG4gICAgICAgICAgICBjb25zdCBmMSA9IGdldFBoeXNpY2FsTGVmdFRvcChpbmxpbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmMiA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oaW5saW5lRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgZjMgPSBnZXRQaHlzaWNhbExlZnRUb3AoYmxvY2tEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBmNCA9IGdldFBoeXNpY2FsUmlnaHRCb3R0b20oYmxvY2tEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYGNsaWVudCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsSW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgc2Nyb2xsJHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0SW5saW5lSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYxKX1gXSArICghZjIgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmMil9YF0pO1xyXG4gICAgICAgICAgICBsZXQgY2xpZW50QmxvY2tJbnNldCA9IGVsZW1lbnRTaXplW2BjbGllbnQke2NhcGl0YWxpemUoZjMpfWBdICsgKCFmNCA/IDAgOiBlbGVtZW50U2l6ZVtgY2xpZW50JHtjYXBpdGFsaXplKGY0KX1gXSk7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxCbG9ja0luc2V0ID0gZWxlbWVudFNpemVbYHNjcm9sbCR7Y2FwaXRhbGl6ZShmMyl9YF0gKyAoIWY0ID8gMCA6IGVsZW1lbnRTaXplW2BzY3JvbGwke2NhcGl0YWxpemUoZjQpfWBdKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldEJsb2NrSW5zZXQgPSBlbGVtZW50U2l6ZVtgb2Zmc2V0JHtjYXBpdGFsaXplKGYzKX1gXSArICghZjQgPyAwIDogZWxlbWVudFNpemVbYG9mZnNldCR7Y2FwaXRhbGl6ZShmNCl9YF0pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lU2l6ZSxcclxuICAgICAgICAgICAgICAgIHNjcm9sbElubGluZVNpemUsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRJbmxpbmVTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsQmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0QmxvY2tTaXplLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5saW5lSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBzY3JvbGxJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgICAgIG9mZnNldElubGluZUluc2V0LFxyXG4gICAgICAgICAgICAgICAgY2xpZW50QmxvY2tJbnNldCxcclxuICAgICAgICAgICAgICAgIHNjcm9sbEJsb2NrSW5zZXQsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sIFtnZXRMb2dpY2FsRGlyZWN0aW9uXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldExvZ2ljYWxEaXJlY3Rpb24sXHJcbiAgICAgICAgY29udmVydEVsZW1lbnRTaXplLFxyXG4gICAgICAgIGNvbnZlcnRUb0xvZ2ljYWxPcmllbnRhdGlvbixcclxuICAgICAgICBjb252ZXJ0VG9QaHlzaWNhbE9yaWVudGF0aW9uXHJcbiAgICB9O1xyXG59XHJcbjtcclxuY29uc3QgSG9yaXpvbnRhbFRiTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImx0clwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBibG9ja09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcIndpZHRoXCIsXHJcbiAgICBibG9ja1NpemU6IFwiaGVpZ2h0XCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwibHRyXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwidHRiXCJcclxufTtcclxuY29uc3QgSG9yaXpvbnRhbFRiUnRsID0ge1xyXG4gICAgLi4uSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInJ0bFwiLFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbFJsTHRyID0ge1xyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwicnRsXCIsXHJcbiAgICBpbmxpbmVPcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxyXG4gICAgYmxvY2tPcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXHJcbiAgICBpbmxpbmVTaXplOiBcImhlaWdodFwiLFxyXG4gICAgYmxvY2tTaXplOiBcIndpZHRoXCIsXHJcbiAgICBsZWZ0UmlnaHREaXJlY3Rpb246IFwidHRiXCIsXHJcbiAgICBvdmVyVW5kZXJEaXJlY3Rpb246IFwicnRsXCJcclxufTtcclxuY29uc3QgVmVydGljYWxSbFJ0bCA9IHtcclxuICAgIC4uLlZlcnRpY2FsUmxMdHIsXHJcbiAgICBpbmxpbmVEaXJlY3Rpb246IFwiYnR0XCJcclxufTtcclxuY29uc3QgU2lkZXdheXNSbEx0ciA9IHsgLi4uVmVydGljYWxSbEx0ciB9O1xyXG5jb25zdCBTaWRld2F5c1JsUnRsID0geyAuLi5WZXJ0aWNhbFJsUnRsIH07XHJcbmNvbnN0IFZlcnRpY2FsTHJMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsTHRyLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFZlcnRpY2FsTHJSdGwgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbFJsUnRsLFxyXG4gICAgYmxvY2tEaXJlY3Rpb246IFwibHRyXCIsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRMdHIgPSB7XHJcbiAgICAuLi5WZXJ0aWNhbExyTHRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgbGVmdFJpZ2h0RGlyZWN0aW9uOiBcImJ0dFwiLFxyXG4gICAgb3ZlclVuZGVyRGlyZWN0aW9uOiBcImx0clwiXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzTHRSdGwgPSB7XHJcbiAgICAuLi5TaWRld2F5c0x0THRyLFxyXG4gICAgaW5saW5lRGlyZWN0aW9uOiBcInR0YlwiXHJcbn07XHJcbmNvbnN0IEhvcml6b250YWxUYiA9IHtcclxuICAgIGx0cjogSG9yaXpvbnRhbFRiTHRyLFxyXG4gICAgcnRsOiBIb3Jpem9udGFsVGJSdGxcclxufTtcclxuY29uc3QgVmVydGljYWxSbCA9IHtcclxuICAgIGx0cjogVmVydGljYWxSbEx0cixcclxuICAgIHJ0bDogVmVydGljYWxSbFJ0bFxyXG59O1xyXG5jb25zdCBWZXJ0aWNhbExyID0ge1xyXG4gICAgbHRyOiBWZXJ0aWNhbExyTHRyLFxyXG4gICAgcnRsOiBWZXJ0aWNhbExyUnRsXHJcbn07XHJcbmNvbnN0IFNpZGV3YXlzUmwgPSB7XHJcbiAgICBsdHI6IFNpZGV3YXlzUmxMdHIsXHJcbiAgICBydGw6IFNpZGV3YXlzUmxSdGxcclxufTtcclxuY29uc3QgU2lkZXdheXNMciA9IHtcclxuICAgIGx0cjogU2lkZXdheXNMdEx0cixcclxuICAgIHJ0bDogU2lkZXdheXNMdFJ0bFxyXG59O1xyXG5jb25zdCBXcml0aW5nTW9kZXMgPSB7XHJcbiAgICBcImhvcml6b250YWwtdGJcIjogSG9yaXpvbnRhbFRiLFxyXG4gICAgXCJ2ZXJ0aWNhbC1sclwiOiBWZXJ0aWNhbExyLFxyXG4gICAgXCJ2ZXJ0aWNhbC1ybFwiOiBWZXJ0aWNhbFJsLFxyXG4gICAgXCJzaWRld2F5cy1sclwiOiBTaWRld2F5c0xyLFxyXG4gICAgXCJzaWRld2F5cy1ybFwiOiBTaWRld2F5c1JsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1sb2dpY2FsLWRpcmVjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSBhcyB1c2VTdGF0ZVAgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbi8qKlxyXG4gKiBTbGlnaHRseSBlbmhhbmNlZCB2ZXJzaW9uIG9mIGB1c2VTdGF0ZWAgdGhhdCBpbmNsdWRlcyBhIGdldHRlciB0aGF0IHJlbWFpbnMgY29uc3RhbnRcclxuICogKGkuZS4geW91IGNhbiB1c2UgaXQgaW4gYHVzZUVmZmVjdGAgYW5kIGZyaWVuZHMgd2l0aG91dCBpdCBiZWluZyBhIGRlcGVuZGVuY3kpLlxyXG4gKlxyXG4gKiBAcGFyYW0gaW5pdGlhbFN0YXRlXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBXZSBrZWVwIGJvdGhcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGVQKGluaXRpYWxTdGF0ZSk7XHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYoc3RhdGUpO1xyXG4gICAgLy8gSGlqYWNrIHRoZSBub3JtYWwgc2V0dGVyIGZ1bmN0aW9uIFxyXG4gICAgLy8gdG8gYWxzbyBzZXQgb3VyIHJlZiB0byB0aGUgbmV3IHZhbHVlXHJcbiAgICBjb25zdCBzZXQgPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHByZXZWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFZhbHVlID0gY2FsbGJhY2socHJldlZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHRWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWYuY3VycmVudCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgZ2V0ID0gKCkgPT4geyByZXR1cm4gcmVmLmN1cnJlbnQ7IH07XHJcbiAgICBjb25zb2xlLmFzc2VydChyZWYuY3VycmVudCA9PT0gc3RhdGUpO1xyXG4gICAgcmV0dXJuIFtzdGF0ZSwgc2V0LCBnZXRdO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1zdGF0ZS5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwiLi91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4vdXNlLXN0YXRlXCI7XHJcbi8qKlxyXG4gKiBBbGxvd3MgYWNjZXNzaW5nIHRoZSBlbGVtZW50IGEgcmVmIHJlZmVyZW5jZXMgYXMgc29vbiBhcyBpdCBkb2VzIHNvLlxyXG4gKiAqVGhpcyBob29rIGl0c2VsZiByZXR1cm5zIGEgaG9vayotLXVzZVJlZkVsZW1lbnRQcm9wcyBtb2RpZmllcyB0aGUgcHJvcHMgdGhhdCB5b3Ugd2VyZSBnb2luZyB0byBwYXNzIHRvIGFuIEhUTUxFbGVtZW50LFxyXG4gKiBhZGRpbmcgYSBSZWZDYWxsYmFjayBhbmQgbWVyZ2luZyBpdCB3aXRoIGFueSBleGlzdGluZyByZWYgdGhhdCBleGlzdGVkIG9uIHRoZSBwcm9wcy5cclxuICpcclxuICogRG9uJ3QgZm9yZ2V0IHRvIHByb3ZpZGUgdGhlIEVsZW1lbnQgYXMgdGhlIHR5cGUgYXJndW1lbnQhXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBlbGVtZW50LCBhbmQgdGhlIHN1Yi1ob29rIHRoYXQgbWFrZXMgaXQgcmV0cmlldmFibGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVmRWxlbWVudCgpIHtcclxuICAgIC8vIExldCB1cyBzdG9yZSB0aGUgYWN0dWFsIChyZWZlcmVuY2UgdG8pIHRoZSBlbGVtZW50IHdlIGNhcHR1cmVcclxuICAgIGNvbnN0IFtlbGVtZW50LCBzZXRFbGVtZW50LCBnZXRFbGVtZW50XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgLy8gQ3JlYXRlIGEgUmVmQ2FsbGJhY2sgdGhhdCdzIGZpcmVkIHdoZW4gbW91bnRlZCBcclxuICAgIC8vIGFuZCB0aGF0IG5vdGlmaWVzIHVzIG9mIG91ciBlbGVtZW50IHdoZW4gd2UgaGF2ZSBpdFxyXG4gICAgY29uc3QgbXlSZWYgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlKVxyXG4gICAgICAgICAgICBzZXRFbGVtZW50KCgpID0+IGUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXNlUmVmRWxlbWVudFByb3BzID0gdXNlQ2FsbGJhY2soKHByb3BzKSA9PiB1c2VNZXJnZWRQcm9wcygpKHsgcmVmOiBteVJlZiB9LCBwcm9wcyksIFtdKTtcclxuICAgIC8vIFJldHVybiBib3RoIHRoZSBlbGVtZW50IGFuZCB0aGUgaG9vayB0aGF0IG1vZGlmaWVzIFxyXG4gICAgLy8gdGhlIHByb3BzIGFuZCBhbGxvd3MgdXMgdG8gYWN0dWFsbHkgZmluZCB0aGUgZWxlbWVudFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VSZWZFbGVtZW50UHJvcHMsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBnZXRFbGVtZW50XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgICBmdW5jdGlvbiBmb28ocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGVsZW1lbnQsIHVzZVJlZkVsZW1lbnRQcm9wcyB9ID0gdXNlUmVmRWxlbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHAxID0gdXNlUmVmRWxlbWVudFByb3BzKHByb3BzKTtcclxuICAgICAgICBpZiAocDEuc3R5bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwMS5zdHlsZSA9PT0gXCJzdHJpbmdcIikgeyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHAxLnN0eWxlPy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1yZWYtZWxlbWVudC5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUxvZ2ljYWxEaXJlY3Rpb24gfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbG9naWNhbC1kaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbi8vaW1wb3J0IHsgbWVyZ2VTdHlsZXMgfSBmcm9tIFwiLi9tZXJnZS1zdHlsZVwiO1xyXG5pbXBvcnQgeyB1c2VSZWZFbGVtZW50IH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLXJlZi1lbGVtZW50XCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5mdW5jdGlvbiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBvcGVuLCBwaGFzZSkge1xyXG4gICAgaWYgKHBoYXNlKVxyXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7b3Blbn0tJHtwaGFzZX1gO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHtjbGFzc0Jhc2UgfHwgXCJ0cmFuc2l0aW9uXCJ9LSR7b3Blbn1gO1xyXG59XHJcbmxldCBkdW1teTtcclxuZnVuY3Rpb24gZm9yY2VSZWZsb3coZSkge1xyXG4gICAgLy8gVHJ5IHJlYWxseSBoYXJkIHRvIG1ha2Ugc3VyZSB0aGlzIGlzbid0IG9wdGltaXplZCBvdXQgYnkgYW55dGhpbmcuXHJcbiAgICAvLyBXZSBuZWVkIGl0IGZvciBpdHMgZG9jdW1lbnQgcmVmbG93IHNpZGUgZWZmZWN0LlxyXG4gICAgZHVtbXkgPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIGU7XHJcbn1cclxuLyoqXHJcbiAqIEEgaG9vayB0aGF0IGFkZHMgJiByZW1vdmVzIGNsYXNzIG5hbWVzIGluIGEgd2F5IHRoYXQgZmFjaWxpdGF0ZXMgcHJvcGVyIHRyYW5zaXRpb25zLlxyXG4gKlxyXG4gKiBUaGUgZmlyc3QgYXJndW1lbnQgY29udGFpbnMgdGhlIHByb3BzIHJlbGF0ZWQgZGlyZWN0bHkgdG8gdGhlIHRyYW5zaXRpb24uXHJcbiAqXHJcbiAqIFRoZSBzZWNvbmQgYXJndW1lbnQgY29udGFpbnMgYW55IG90aGVyIHByb3BzIHlvdSBtaWdodCB3YW50IG1lcmdlZCBpbnRvIHRoZSBmaW5hbCBwcm9kdWN0ICh0aGVzZSBhcmUgbm90IHJlYWQgb3IgbWFuaXB1bGF0ZWQgb3IgYW55dGhpbmcgLS0gaXQncyBwdXJlbHkgc2hvcnRoYW5kIGFuZCBjYW4gYmUgb21pdHRlZCB3aXRoIGB7fWAgYW5kIHRoZW4geW91ciBvd24gYHVzZU1lcmdlZFByb3BzYCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wcyh7IG1lYXN1cmUsIGFuaW1hdGVPbk1vdW50LCBjbGFzc0Jhc2UsIG9uVHJhbnNpdGlvblVwZGF0ZSwgZXhpdFZpc2liaWxpdHksIGR1cmF0aW9uLCBvcGVuLCByZWYgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IHsgZWxlbWVudCwgdXNlUmVmRWxlbWVudFByb3BzIH0gPSB1c2VSZWZFbGVtZW50KCk7XHJcbiAgICBjb25zdCBbcGhhc2UsIHNldFBoYXNlXSA9IHVzZVN0YXRlKGFuaW1hdGVPbk1vdW50ID8gXCJpbml0XCIgOiBudWxsKTtcclxuICAgIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShvcGVuID09IG51bGwgPyBudWxsIDogb3BlbiA/IFwiZW50ZXJcIiA6IFwiZXhpdFwiKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlV2lkdGgsIHNldFN1cmZhY2VXaWR0aF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlSGVpZ2h0LCBzZXRTdXJmYWNlSGVpZ2h0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3N1cmZhY2VYLCBzZXRTdXJmYWNlWF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzdXJmYWNlWSwgc2V0U3VyZmFjZVldID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1dpZHRoLCBzZXRUcmFuc2l0aW9uaW5nV2lkdGhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ0hlaWdodCwgc2V0VHJhbnNpdGlvbmluZ0hlaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0cmFuc2l0aW9uaW5nWCwgc2V0VHJhbnNpdGlvbmluZ1hdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdHJhbnNpdGlvbmluZ1ksIHNldFRyYW5zaXRpb25pbmdZXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgeyBnZXRMb2dpY2FsRGlyZWN0aW9uIH0gPSB1c2VMb2dpY2FsRGlyZWN0aW9uKGVsZW1lbnQpO1xyXG4gICAgY29uc3QgbG9naWNhbERpcmVjdGlvbiA9IGdldExvZ2ljYWxEaXJlY3Rpb24oKTtcclxuICAgIGNvbnN0IG9uVHJhbnNpdGlvblVwZGF0ZVJlZiA9IHVzZVJlZihvblRyYW5zaXRpb25VcGRhdGUpO1xyXG4gICAgY29uc3QgcGhhc2VSZWYgPSB1c2VSZWYocGhhc2UpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uUmVmID0gdXNlUmVmKGRpcmVjdGlvbik7XHJcbiAgICBjb25zdCBkdXJhdGlvblJlZiA9IHVzZVJlZihkdXJhdGlvbik7XHJcbiAgICBjb25zdCB0b29FYXJseVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCB0b29FYXJseVZhbHVlUmVmID0gdXNlUmVmKHRydWUpO1xyXG4gICAgY29uc3QgdG9vTGF0ZVRpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBvblRyYW5zaXRpb25FbmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZWxlbWVudCAmJiB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc2V0UGhhc2UoXCJmaW5hbGl6ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZWxlbWVudF0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQgPSBvblRyYW5zaXRpb25VcGRhdGU7IH0sIFtvblRyYW5zaXRpb25VcGRhdGVdKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7IHBoYXNlUmVmLmN1cnJlbnQgPSBwaGFzZTsgfSwgW3BoYXNlXSk7XHJcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4geyBkaXJlY3Rpb25SZWYuY3VycmVudCA9IGRpcmVjdGlvbjsgfSwgW2RpcmVjdGlvbl0pO1xyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHsgZHVyYXRpb25SZWYuY3VycmVudCA9IGR1cmF0aW9uOyB9LCBbZHVyYXRpb25dKTtcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAmJiBwaGFzZSlcclxuICAgICAgICAgICAgb25UcmFuc2l0aW9uVXBkYXRlUmVmLmN1cnJlbnQ/LihkaXJlY3Rpb24sIHBoYXNlKTtcclxuICAgIH0sIFtkaXJlY3Rpb24sIHBoYXNlXSk7XHJcbiAgICAvLyBFdmVyeSB0aW1lIHRoZSBwaGFzZSBjaGFuZ2VzIHRvIFwidHJhbnNpdGlvblwiLCBhZGQgb3VyIHRyYW5zaXRpb24gdGltZW91dCB0aW1lb3V0c1xyXG4gICAgLy8gdG8gY2F0Y2ggYW55IHRpbWUgb25UcmFuc2l0aW9uRW5kIGZhaWxzIHRvIHJlcG9ydCBmb3Igd2hhdGV2ZXIgcmVhc29uIHRvIGJlIHNhZmVcclxuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBoYXNlID09IFwidHJhbnNpdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXREdXJhdGlvbiA9IGR1cmF0aW9uUmVmLmN1cnJlbnQgPz8gMTAwMDtcclxuICAgICAgICAgICAgdG9vRWFybHlUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b29FYXJseVZhbHVlUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICB0b29MYXRlVGltZW91dFJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9vRWFybHlWYWx1ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2V0UGhhc2UoXCJmaW5hbGl6ZVwiKTtcclxuICAgICAgICAgICAgfSwgdGltZW91dER1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRvb0Vhcmx5VGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgICAgICAgaWYgKHRvb0xhdGVUaW1lb3V0UmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodG9vTGF0ZVRpbWVvdXRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtwaGFzZV0pO1xyXG4gICAgLy8gQW55IHRpbWUgXCJvcGVuXCIgY2hhbmdlcywgdXBkYXRlIG91ciBkaXJlY3Rpb24gYW5kIHBoYXNlLlxyXG4gICAgLy8gSW4gYWRkaXRpb24sIG1lYXN1cmUgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgaWYgcmVxdWVzdGVkLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiBvcGVuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNQaGFzZSA9IHBoYXNlUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIC8vIFN3YXAgb3VyIGRpcmVjdGlvblxyXG4gICAgICAgICAgICBpZiAob3BlbilcclxuICAgICAgICAgICAgICAgIHNldERpcmVjdGlvbihcImVudGVyXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXREaXJlY3Rpb24oXCJleGl0XCIpO1xyXG4gICAgICAgICAgICBzZXRQaGFzZShwcmV2aW91c1BoYXNlID09PSBudWxsID8gXCJmaW5hbGl6ZVwiIDogXCJpbml0XCIpO1xyXG4gICAgICAgICAgICBpZiAobWVhc3VyZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTaXplV2l0aFRyYW5zaXRpb24gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gY3VycmVudFNpemVXaXRoVHJhbnNpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWCh4ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nWSh5ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2l0aW9uaW5nV2lkdGgod2lkdGggKyBcInB4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRyYW5zaXRpb25pbmdIZWlnaHQoaGVpZ2h0ICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1BoYXNlID09PSBcImZpbmFsaXplXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSdyZSBnb2luZyB0byBiZSBtZXNzaW5nIHdpdGggdGhlIGFjdHVhbCBlbGVtZW50J3MgY2xhc3MsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIHdlJ2xsIHdhbnQgYW4gZWFzeSB3YXkgdG8gcmVzdG9yZSBpdCBsYXRlci5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrdXAgPSBlbGVtZW50LmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NCYXNlfS1tZWFzdXJlYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke2NsYXNzQmFzZX0tZW50ZXJgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWluaXRgLCBgJHtjbGFzc0Jhc2V9LWVudGVyLXRyYW5zaXRpb25gLCBgJHtjbGFzc0Jhc2V9LWVudGVyLWZpbmFsaXplYCwgYCR7Y2xhc3NCYXNlfS1leGl0YCwgYCR7Y2xhc3NCYXNlfS1leGl0LWluaXRgLCBgJHtjbGFzc0Jhc2V9LWV4aXQtdHJhbnNpdGlvbmAsIGAke2NsYXNzQmFzZX0tZXhpdC1maW5hbGl6ZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlUmVmbG93KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNpemVXaXRob3V0VHJhbnNpdGlvbiA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBzaXplV2l0aG91dFRyYW5zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVgoeCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVkoeSArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VyZmFjZVdpZHRoKHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTdXJmYWNlSGVpZ2h0KGhlaWdodCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBiYWNrdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZsb3coZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbb3BlbiwgZWxlbWVudCwgbWVhc3VyZSwgY2xhc3NCYXNlXSk7XHJcbiAgICAvLyBBbnkgdGltZSB0aGUgcGhhc2UgY2hhbmdlcyB0byBpbml0LCBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIHNjcmVlbiBpcyBwYWludGVkLFxyXG4gICAgLy8gY2hhbmdlIHRoZSBwaGFzZSB0byBcInRyYW5zaXRpb25cIiBhbmQgcmUtcmVuZGVyICgpLlxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCAmJiBkaXJlY3Rpb25SZWYuY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIFByZWFjdCBqdXN0IGZpbmlzaGVkIHJlbmRlcmluZyBpbml0XHJcbiAgICAgICAgICAgICAgICAvLyBOb3cgc2V0IG91ciB0cmFuc2l0aW9uIHN0eWxlLlxyXG4gICAgICAgICAgICAgICAgc2V0UGhhc2UoXCJ0cmFuc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lYXN1cmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZVJlZmxvdyhlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtwaGFzZSwgbWVhc3VyZSwgZWxlbWVudF0pO1xyXG4gICAgY29uc3QgaW5saW5lRGlyZWN0aW9uID0gbG9naWNhbERpcmVjdGlvbj8uaW5saW5lRGlyZWN0aW9uO1xyXG4gICAgY29uc3QgYmxvY2tEaXJlY3Rpb24gPSBsb2dpY2FsRGlyZWN0aW9uPy5ibG9ja0RpcmVjdGlvbjtcclxuICAgIGNvbnN0IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID0gKGlubGluZURpcmVjdGlvbiA9PSBcInJ0bFwiIHx8IGlubGluZURpcmVjdGlvbiA9PSBcImx0clwiKTtcclxuICAgIGNvbnN0IHN1cmZhY2VJbmxpbmVJbnNldCA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gc3VyZmFjZVggOiBzdXJmYWNlWTtcclxuICAgIGNvbnN0IHN1cmZhY2VCbG9ja0luc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlWSA6IHN1cmZhY2VYO1xyXG4gICAgY29uc3Qgc3VyZmFjZUlubGluZVNpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHN1cmZhY2VXaWR0aCA6IHN1cmZhY2VIZWlnaHQ7XHJcbiAgICBjb25zdCBzdXJmYWNlQmxvY2tTaXplID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyBzdXJmYWNlSGVpZ2h0IDogc3VyZmFjZVdpZHRoO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0lubGluZUluc2V0ID0gd3JpdGluZ01vZGVJc0hvcml6b250YWwgPyB0cmFuc2l0aW9uaW5nWCA6IHRyYW5zaXRpb25pbmdZO1xyXG4gICAgY29uc3QgdHJhbnNpdGlvbmluZ0Jsb2NrSW5zZXQgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdZIDogdHJhbnNpdGlvbmluZ1g7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uaW5nSW5saW5lU2l6ZSA9IHdyaXRpbmdNb2RlSXNIb3Jpem9udGFsID8gdHJhbnNpdGlvbmluZ1dpZHRoIDogdHJhbnNpdGlvbmluZ0hlaWdodDtcclxuICAgIGNvbnN0IHRyYW5zaXRpb25pbmdCbG9ja1NpemUgPSB3cml0aW5nTW9kZUlzSG9yaXpvbnRhbCA/IHRyYW5zaXRpb25pbmdIZWlnaHQgOiB0cmFuc2l0aW9uaW5nV2lkdGg7XHJcbiAgICBsZXQgYWxtb3N0RG9uZSA9IHVzZVJlZkVsZW1lbnRQcm9wcyh7XHJcbiAgICAgICAgcmVmLFxyXG4gICAgICAgIHN0eWxlOiByZW1vdmVFbXB0eSh7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tZHVyYXRpb25gXTogZHVyYXRpb24sXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS14YF06IHN1cmZhY2VYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UteWBdOiBzdXJmYWNlWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLXdpZHRoYF06IHN1cmZhY2VXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWhlaWdodGBdOiBzdXJmYWNlSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLWluc2V0YF06IHN1cmZhY2VJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zdXJmYWNlLWJsb2NrLWluc2V0YF06IHN1cmZhY2VCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXN1cmZhY2UtaW5saW5lLXNpemVgXTogc3VyZmFjZUlubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tc3VyZmFjZS1ibG9jay1zaXplYF06IHN1cmZhY2VCbG9ja1NpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy14YF06IHRyYW5zaXRpb25pbmdYLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmcteWBdOiB0cmFuc2l0aW9uaW5nWSxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLXdpZHRoYF06IHRyYW5zaXRpb25pbmdXaWR0aCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWhlaWdodGBdOiB0cmFuc2l0aW9uaW5nSGVpZ2h0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLWluc2V0YF06IHRyYW5zaXRpb25pbmdJbmxpbmVJbnNldCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS10cmFuc2l0aW9uaW5nLWJsb2NrLWluc2V0YF06IHRyYW5zaXRpb25pbmdCbG9ja0luc2V0LFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXRyYW5zaXRpb25pbmctaW5saW5lLXNpemVgXTogdHJhbnNpdGlvbmluZ0lubGluZVNpemUsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tdHJhbnNpdGlvbmluZy1ibG9jay1zaXplYF06IHRyYW5zaXRpb25pbmdCbG9ja1NpemVcclxuICAgICAgICB9KSxcclxuICAgICAgICBvblRyYW5zaXRpb25FbmQsXHJcbiAgICAgICAgLi4uKHsgXCJhcmlhLWhpZGRlblwiOiBvcGVuID8gdW5kZWZpbmVkIDogXCJ0cnVlXCIgfSksXHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGRpcmVjdGlvbiAmJiBnZXRDbGFzc05hbWUoY2xhc3NCYXNlLCBkaXJlY3Rpb24pLCBkaXJlY3Rpb24gJiYgcGhhc2UgJiYgZ2V0Q2xhc3NOYW1lKGNsYXNzQmFzZSwgZGlyZWN0aW9uLCBwaGFzZSksIGV4aXRWaXNpYmlsaXR5ID09IFwicmVtb3ZlZFwiICYmIGAke2NsYXNzQmFzZX0tcmVtb3ZlZC1vbi1leGl0YCwgZXhpdFZpc2liaWxpdHkgPT0gXCJ2aXNpYmxlXCIgJiYgYCR7Y2xhc3NCYXNlfS12aXNpYmxlLW9uLWV4aXRgLCBgJHtjbGFzc0Jhc2V9LWlubGluZS1kaXJlY3Rpb24tJHtpbmxpbmVEaXJlY3Rpb24gPz8gXCJsdHJcIn1gLCBgJHtjbGFzc0Jhc2V9LWJsb2NrLWRpcmVjdGlvbi0ke2Jsb2NrRGlyZWN0aW9uID8/IFwidHRiXCJ9YCksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKGFsbW9zdERvbmUsIG90aGVyUHJvcHMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUVtcHR5KG9iaikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhvYmopLmZpbHRlcigoW18sIHZdKSA9PiB2ICE9IG51bGwpKTtcclxufVxyXG4vKipcclxuICogQSBjb21wb25lbnQgdGhhdCAqd3JhcHMgYW4gSFRNTEVsZW1lbnQgb3Igb3RoZXIgcmVmLWZvcndhcmRpbmcgY29tcG9uZW50KiBhbmQgYWxsb3dzIGl0IHRvIHVzZSBDU1MgdG8gdHJhbnNpdGlvbiBpbi9vdXQuXHJcbiAqIENvbWJpbmVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gaXQsIHRoZSBwcm9wcyBpdHMgY2hpbGQgaGFzLCBhbmQgdGhlIHByb3BzIG5lZWRlZCBmb3IgdGhlIENTUyB0cmFuc2l0aW9uLCBhbmQgcGFzc2VzIHRoZW1cclxuICogYWxsIHRvIHRoZSBjaGlsZCBlbGVtZW50IHlvdSBwcm92aWRlLlxyXG4gKlxyXG4gKiBUaGlzIGlzIHRoZSBtb3N0IGdlbmVyYWwgY29tcG9uZW50IHRoYXQgb3RoZXJzIHVzZSBhcyBhIGJhc2UuIEJ5IGRlZmF1bHQsIHRoaXMgY29tcG9uZW50IGJ5IGl0c2VsZiBkb2Vzbid0IGFjdHVhbGx5IGFkZCBhbnkgQ1NTIGNsYXNzZXMgdGhhdCBhbmltYXRlIGFueXRoaW5nIChsaWtlIG9wYWNpdHksIGZvciBleGFtcGxlKS5cclxuICogSXQgYWRkcyBjbGFzc2VzIGxpa2UgYHRyYW5zaXRpb24tZW50ZXItZmluYWxpemVgLCBidXQgeW91IG5lZWQgdG8gcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBlLmcuIGBmYWRlYCBjbGFzcyB0aGF0IHJlYWN0cyB0byBpdC5cclxuICpcclxuICogVXNlIHRoaXMgaWYgdGhlIG90aGVyLCBtb3JlIHNwZWNpYWxpemVkIFRyYW5zaXRpb24gY29tcG9uZW50cyBkb24ndCBmaXQgeW91ciBuZWVkcy5cclxuICpcclxuICogQGV4YW1wbGUgYDxUcmFuc2l0aW9uYWJsZSBvcGVuPXtvcGVufSB7Li4udXNlQ3JlYXRlRmFkZVByb3BzKC4uLil9PjxkaXY+e2NoaWxkcmVufTwvZGl2PjwvVHJhbnNpdGlvbmFibGU+YFxyXG4gKiBAZXhhbXBsZSBgPFRyYW5zaXRpb25hYmxlIG9wZW49e29wZW59PjxkaXYgey4uLnVzZUNyZWF0ZUZhZGVQcm9wcyguLi4pfT57Y2hpbGRyZW59PC9kaXY+PC9UcmFuc2l0aW9uYWJsZT5gXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVHJhbnNpdGlvbmFibGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHsgY2hpbGRyZW46IGNoaWxkLCBkdXJhdGlvbiwgY2xhc3NCYXNlLCBtZWFzdXJlLCBleGl0VmlzaWJpbGl0eSwgb3Blbiwgb25UcmFuc2l0aW9uVXBkYXRlLCBhbmltYXRlT25Nb3VudCwgLi4ucHJvcHMgfSwgcikge1xyXG4gICAgaWYgKCFjaGlsZElzVk5vZGUoY2hpbGQpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQSBUcmFuc2l0aW9uYWJsZSBjb21wb25lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIGNvbXBvbmVudCBjaGlsZCAoZS5nLiBhIDxkaXY+LCBidXQgbm90IFxcXCJhIHN0cmluZ1xcXCIpLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zaXRpb25Qcm9wcyA9IHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHMoeyBjbGFzc0Jhc2UsIGR1cmF0aW9uLCBtZWFzdXJlLCBvcGVuLCBhbmltYXRlT25Nb3VudCwgb25UcmFuc2l0aW9uVXBkYXRlLCByZWY6IHIsIGV4aXRWaXNpYmlsaXR5IH0sIHByb3BzKTtcclxuICAgIGNvbnN0IG1lcmdlZFdpdGhDaGlsZHJlbiA9IHVzZU1lcmdlZFByb3BzKCkodHJhbnNpdGlvblByb3BzLCB7IC4uLmNoaWxkLnByb3BzLCByZWY6IGNoaWxkLnJlZiB9KTtcclxuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIG1lcmdlZFdpdGhDaGlsZHJlbik7XHJcbn0pO1xyXG5mdW5jdGlvbiBjaGlsZElzVk5vZGUoY2hpbGQpIHtcclxuICAgIGlmICghY2hpbGQpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaGlsZCAhPSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiAoXCJwcm9wc1wiIGluIGNoaWxkKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2l0aW9uYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IFRyYW5zaXRpb25hYmxlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbmFibGVcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBjbHN4IH0gZnJvbSBcImNsc3hcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBDbGlwIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGAke2NsYXNzQmFzZX0tY2xpcGApLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtb3JpZ2luLWlubGluZWBdOiAoY2xpcE9yaWdpbklubGluZSA/PyBjbGlwT3JpZ2luID8/IDAuNSksXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY2xpcC1vcmlnaW4tYmxvY2tgXTogKGNsaXBPcmlnaW5CbG9jayA/PyBjbGlwT3JpZ2luID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWlubGluZWBdOiAoY2xpcE1pbklubGluZSA/PyBjbGlwTWluID8/IDEpLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWNsaXAtbWluLWJsb2NrYF06IChjbGlwTWluQmxvY2sgPz8gY2xpcE1pbiA/PyAwKSxcclxuICAgICAgICB9LFxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG5leHBvcnQgY29uc3QgQ2xpcCA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENsaXAoeyBjbGFzc0Jhc2UsIGNsaXBPcmlnaW4sIGNsaXBPcmlnaW5JbmxpbmUsIGNsaXBPcmlnaW5CbG9jaywgY2xpcE1pbiwgY2xpcE1pbklubGluZSwgY2xpcE1pbkJsb2NrLCBvcGVuLCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlQ2xpcFByb3BzKHsgY2xhc3NCYXNlLCBjbGlwT3JpZ2luLCBjbGlwT3JpZ2luSW5saW5lLCBjbGlwT3JpZ2luQmxvY2ssIGNsaXBNaW4sIGNsaXBNaW5JbmxpbmUsIGNsaXBNaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsaXAuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uYWJsZSB9IGZyb20gXCIuL3RyYW5zaXRpb25hYmxlXCI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2V0IG9mIHByb3BzIHRoYXQgaW1wbGVtZW50IGEgRmFkZSB0cmFuc2l0aW9uLiBMaWtlIGFsbCBgdXNlQ3JlYXRlKlByb3BzYCBob29rcywgbXVzdCBiZSB1c2VkIGluIHRhbWRlbSB3aXRoIGEgYFRyYW5zaXRpb25hYmxlYCBjb21wb25lbnQgKG9yIGB1c2VDcmVhdGVUcmFuc2l0aW9uYWJsZVByb3BzYCkuXHJcbiAqIEJlIHN1cmUgdG8gbWVyZ2UgdGhlc2UgcmV0dXJuZWQgcHJvcHMgd2l0aCB3aGF0ZXZlciB0aGUgdXNlciBwYXNzZWQgaW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIG90aGVyUHJvcHMpIHtcclxuICAgIGNsYXNzQmFzZSA/Pz0gXCJ0cmFuc2l0aW9uXCI7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZhZGVgLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWluYF06IChmYWRlTWluID8/IDApLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZhZGUtbWF4YF06IChmYWRlTWF4ID8/IDEpLFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGYWRlIGVmZmVjdC5cclxuICpcclxuICogTm90ZSB0aGF0IHdoaWxlIGl0IGlzIGFic29sdXRlbHkgcG9zc2libGUgdG8gd3JhcCBhbm90aGVyIHRyYW5zaXRpb24gd2l0aCBgPEZhZGU+YCxcclxuICogdGhlcmUgd2lsbCBiZSBzb21lIGR1cGxpY2F0ZSBjb2RlIHJ1biBhcyB0d28gYDxUcmFuc2l0aW9uYWJsZT5gIGNvbXBvbmVudHMgZW5kIHVwIG9wZXJhdGluZyBvbiB0aGUgc2FtZSBlbGVtZW50LlxyXG4gKiBJdCdzIGdlbmVyYWxseSByZWNvbW1lbmRlZCB0byBlaXRoZXIgdXNlIHRoZSBjb21wb25lbnRzIHRoYXQgaW5jbHVkZSBhIGNvbWJpbmVkIGZhZGUgZWZmZWN0LFxyXG4gKiBvciBqdXN0IGRpcmVjdGx5IGEgYDxUcmFuc2l0aW9uYWJsZT5gIG9uIHlvdXIgb3duLlxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2xpcCB9IGZyb20gXCIuL2NsaXBcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuO1xyXG5leHBvcnQgY29uc3QgQ2xpcEZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBDbGlwRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKENsaXAsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlRmFkZVByb3BzKHsgY2xhc3NCYXNlLCBmYWRlTWluLCBmYWRlTWF4IH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpcC1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKiBCZSBzdXJlIHRvIG1lcmdlIHRoZXNlIHJldHVybmVkIHByb3BzIHdpdGggd2hhdGV2ZXIgdGhlIHVzZXIgcGFzc2VkIGluLlxyXG4gKlxyXG4gKiBJTVBPUlRBTlQ6IElmIHVzZWQgb3V0c2lkZSBvZiBhIGA8Q29sbGFwc2UgLz5gLCB5b3UgbXVzdCBpbmNsdWRlIHRoZSBgbWVhc3VyZWAgcHJvcCBvbiB0aGUgYDxUcmFuc2l0aW9uYWJsZT5gIHRoYXQgeW91IHVzZS5cclxuICpcclxuICogQGV4YW1wbGUgPFRyYW5zaXRpb25hYmxlIG1lYXN1cmUgey4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoLi4uKX0gLz5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb2xsYXBzZVByb3BzKHsgY2xhc3NCYXNlLCBtaW5CbG9ja1NpemUgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgbWVhc3VyZTogdHJ1ZSxcclxuICAgICAgICBjbGFzc05hbWU6IGAke2NsYXNzQmFzZX0tY29sbGFwc2VgLFxyXG4gICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tY29sbGFwc2UtbWluLWJsb2NrYF06IG1pbkJsb2NrU2l6ZSA/PyAwXHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIENvbGxhcHNlIGVmZmVjdC5cclxuICpcclxuICogKkltcG9ydGFudCo6IFRoaXMgY29tcG9uZW50IGlzICpub3QqIGVmZmljaWVudCBmb3IgdGhlIGJyb3dzZXIgdG8gYW5pbWF0ZSFcclxuICogTWFrZSBzdXJlIHlvdSBkbyB0ZXN0aW5nIG9uIGxvd2VyIHBvd2VyIGRldmljZXMsIG9yIHByZWZlciBhIGxpZ2h0ZXJcclxuICogYWx0ZXJuYXRpdmUsIGxpa2UgYDxDbGlwPmAuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gQ29sbGFwc2UoeyBjbGFzc0Jhc2UsIG9wZW4sIG1pbkJsb2NrU2l6ZSwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUNvbGxhcHNlUHJvcHMoeyBjbGFzc0Jhc2UsIG1pbkJsb2NrU2l6ZSB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcIi4vY29sbGFwc2VcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIENvbGxhcHNlIGFuZCBGYWRlIGVmZmVjdHMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgQ29sbGFwc2VgIGBGYWRlYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbGxhcHNlRmFkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIENvbGxhcHNlRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKENvbGxhcHNlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbGxhcHNlLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTWVyZ2VkUHJvcHMgfSBmcm9tIFwicHJlYWN0LXByb3AtaGVscGVycy91c2UtbWVyZ2VkLXByb3BzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInByZWFjdC9ob29rc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFNsaWRlIHRyYW5zaXRpb24uIExpa2UgYWxsIGB1c2VDcmVhdGUqUHJvcHNgIGhvb2tzLCBtdXN0IGJlIHVzZWQgaW4gdGFtZGVtIHdpdGggYSBgVHJhbnNpdGlvbmFibGVgIGNvbXBvbmVudCAob3IgYHVzZUNyZWF0ZVRyYW5zaXRpb25hYmxlUHJvcHNgKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTbGlkZVByb3BzKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jayB9LCBvdGhlclByb3BzKSB7XHJcbiAgICBjbGFzc0Jhc2UgPz89IFwidHJhbnNpdGlvblwiO1xyXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0SW5saW5lID0gdXNlUmVmKHNsaWRlVGFyZ2V0SW5saW5lID8/IDEpO1xyXG4gICAgY29uc3QgbGFzdFZhbGlkVGFyZ2V0QmxvY2sgPSB1c2VSZWYoc2xpZGVUYXJnZXRCbG9jayA/PyAwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldElubGluZSlcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IHNsaWRlVGFyZ2V0SW5saW5lOyB9LCBbc2xpZGVUYXJnZXRJbmxpbmVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChzbGlkZVRhcmdldEJsb2NrKVxyXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBzbGlkZVRhcmdldEJsb2NrOyB9LCBbc2xpZGVUYXJnZXRCbG9ja10pO1xyXG4gICAgaWYgKHNsaWRlVGFyZ2V0SW5saW5lID09IDApXHJcbiAgICAgICAgc2xpZGVUYXJnZXRJbmxpbmUgPSBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudDtcclxuICAgIGlmIChzbGlkZVRhcmdldEJsb2NrID09IDApXHJcbiAgICAgICAgc2xpZGVUYXJnZXRCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXNsaWRlYCxcclxuICAgICAgICBjbGFzc0Jhc2UsXHJcbiAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1zbGlkZS10YXJnZXQtaW5saW5lYF06IGAkeyhzbGlkZVRhcmdldElubGluZSA/PyAwKX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXNsaWRlLXRhcmdldC1ibG9ja2BdOiBgJHsoc2xpZGVUYXJnZXRCbG9jayA/PyAwKX1gXHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3RoZXJQcm9wcyk7XHJcbn1cclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBhIFNsaWRlIGVmZmVjdC5cclxuICpcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYHNsaWRlSW5saW5lYCBhbmQgYHNsaWRlQmxvY2tgLFxyXG4gKiB3aXRoIGAxYCBiZWluZyBgMTAwJWAgb2YgdGhlIGVsZW1lbnQncyB3aWR0aCBvciBoZWlnaHQuXHJcbiAqXHJcbiAqIEEgdmFsdWUgb2YgYDBgIGlzIGhhbmRsZWQgc3BlY2lhbGx5LCBlZmZlY3RpdmVseSBtZWFuaW5nIFwidXNlIHRoZSBsYXN0IG5vbi16ZXJvIHZhbHVlXCIsXHJcbiAqIHdoaWNoIGFsbG93cyBmb3IgY29udmVuaWVudCBzZXR1cHMgaW5zaWRlIG9mIGEgYFN3YXBDb250YWluZXJgXHJcbiAqIChgc2xpZGVJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFNsaWRlKHsgY2xhc3NCYXNlLCBzbGlkZVRhcmdldElubGluZSwgc2xpZGVUYXJnZXRCbG9jaywgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFRyYW5zaXRpb25hYmxlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZVNsaWRlUHJvcHMoeyBjbGFzc0Jhc2UsIHNsaWRlVGFyZ2V0SW5saW5lLCBzbGlkZVRhcmdldEJsb2NrIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGJvdGggU2xpZGUgYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogYHNsaWRlSW5saW5lPXsoaW5kZXggLSBzZWxlY3RlZEluZGV4KSAvIDEwfWAgd291bGQgbWFrZSB0aGUgZWxlbWVudCBsb29rIGxpa2UgaXQgZmFkZXMgb3V0IGJlZm9yZSBpdCB0cmF2ZWxzIHRvIGl0cyB0YXJnZXQgZGVzdGluYXRpb24uXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZUZhZGUgPSBmb3J3YXJkRWxlbWVudFJlZihmdW5jdGlvbiBTbGlkZUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChTbGlkZSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS1mYWRlLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIFpvb20gdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU9yaWdpbiwgem9vbU9yaWdpbklubGluZSwgem9vbU9yaWdpbkJsb2NrLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2sgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIHJldHVybiAodXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LXpvb21gLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tb3JpZ2luLWlubGluZWBdOiBgJHsoem9vbU9yaWdpbklubGluZSA/PyB6b29tT3JpZ2luID8/IDAuNSl9YCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS16b29tLW9yaWdpbi1ibG9ja2BdOiBgJHsoem9vbU9yaWdpbkJsb2NrID8/IHpvb21PcmlnaW4gPz8gMC41KX1gLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXpvb20tbWluLWlubGluZWBdOiBgJHsoem9vbU1pbklubGluZSA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgICAgIFtgLS0ke2NsYXNzQmFzZX0tem9vbS1taW4tYmxvY2tgXTogYCR7KHpvb21NaW5CbG9jayA/PyB6b29tTWluID8/IDApfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sIG90aGVyUHJvcHMpKTtcclxufVxyXG47XHJcbi8qKlxyXG4gKiBXcmFwcyBhIGRpdiAoZXRjLikgYW5kIGFsbG93cyBpdCB0byB0cmFuc2l0aW9uIGluL291dCBzbW9vdGhseSB3aXRoIGEgWm9vbSBlZmZlY3QuXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgWm9vbUZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgWm9vbSA9IGZvcndhcmRFbGVtZW50UmVmKGZ1bmN0aW9uIFpvb20oeyBjbGFzc0Jhc2UsIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCBvcGVuLCAuLi5yZXN0IH0sIHJlZikge1xyXG4gICAgcmV0dXJuIGgoVHJhbnNpdGlvbmFibGUsIHsgb3Blbjogb3BlbiwgLi4udXNlQ3JlYXRlWm9vbVByb3BzKHsgY2xhc3NCYXNlLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2ssIHpvb21NaW4sIHpvb21NaW5JbmxpbmUsIHpvb21NaW5CbG9jayB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQ3JlYXRlRmFkZVByb3BzIH0gZnJvbSBcIi4vZmFkZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgWm9vbSB9IGZyb20gXCIuL3pvb21cIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBib3RoIFpvb20gYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogVGhpcyBpcyBhbiBpZGVhbCB0aW1lIHRvIHVzZSB0aGUgbWluaW11bSBzaXplIFpvb20gcHJvcGVydGllcy5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBab29tYFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gWm9vbUZhZGUoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXgsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChab29tLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZUZhZGVQcm9wcyh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCB9LCB7IC4uLnJlc3QsIHJlZiB9KSB9KTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20tZmFkZS5qcy5tYXAiLCJpbXBvcnQgeyBoIH0gZnJvbSBcInByZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuaW1wb3J0IHsgU2xpZGUgfSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgeyB1c2VDcmVhdGVab29tUHJvcHMgfSBmcm9tIFwiLi96b29tXCI7XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYm90aCBTbGlkZSBhbmQgWm9vbSBlZmZlY3RzLlxyXG4gKlxyXG4gKiBQcm9iYWJseSBiZXN0IGNvbWJpbmVkIHdpdGggYHVzZUNyZWF0ZUZhZGVQcm9wc2AgKG9yIGp1c3QgdXNpbmcgYSBgU2xpZGVab29tRmFkZWA/KS5cclxuICpcclxuICogQHNlZSBgVHJhbnNpdGlvbmFibGVgIGBTbGlkZUZhZGVab29tYCBgWm9vbWAgYEZhZGVgXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2xpZGVab29tID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tKHsgY2xhc3NCYXNlLCB6b29tTWluLCB6b29tTWluSW5saW5lLCB6b29tTWluQmxvY2ssIHpvb21PcmlnaW4sIHpvb21PcmlnaW5JbmxpbmUsIHpvb21PcmlnaW5CbG9jaywgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFNsaWRlLCB7IG9wZW46IG9wZW4sIC4uLnVzZUNyZWF0ZVpvb21Qcm9wcyh7IGNsYXNzQmFzZSwgem9vbU1pbiwgem9vbU1pbklubGluZSwgem9vbU1pbkJsb2NrLCB6b29tT3JpZ2luLCB6b29tT3JpZ2luSW5saW5lLCB6b29tT3JpZ2luQmxvY2sgfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLmpzLm1hcCIsImltcG9ydCB7IGggfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNyZWF0ZUZhZGVQcm9wcyB9IGZyb20gXCIuL2ZhZGVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZEVsZW1lbnRSZWYgfSBmcm9tIFwiLi9mb3J3YXJkLWVsZW1lbnQtcmVmXCI7XHJcbmltcG9ydCB7IFNsaWRlWm9vbSB9IGZyb20gXCIuL3NsaWRlLXpvb21cIjtcclxuO1xyXG4vKipcclxuICogV3JhcHMgYSBkaXYgKGV0Yy4pIGFuZCBhbGxvd3MgaXQgdG8gdHJhbnNpdGlvbiBpbi9vdXQgc21vb3RobHkgd2l0aCBab29tLCBTbGlkZSwgYW5kIEZhZGUgZWZmZWN0cy5cclxuICpcclxuICogTm90ZSB0aGF0IHRoaXMgaXMgYmFzaWNhbGx5IGp1c3Qgc2hvcnRoYW5kIGZvciBzb21lIHByb3AgY3JlYXRpb24gYW5kIHByb3AgbWVyZ2luZyBmdW5jdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgYFRyYW5zaXRpb25hYmxlYCBgU2xpZGVgIGBab29tYCBgRmFkZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBTbGlkZVpvb21GYWRlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU2xpZGVab29tRmFkZSh7IGNsYXNzQmFzZSwgZmFkZU1pbiwgZmFkZU1heCwgb3BlbiwgLi4ucmVzdCB9LCByZWYpIHtcclxuICAgIHJldHVybiBoKFNsaWRlWm9vbSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVGYWRlUHJvcHMoeyBjbGFzc0Jhc2UsIGZhZGVNaW4sIGZhZGVNYXggfSwgeyAuLi5yZXN0LCByZWYgfSkgfSk7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zbGlkZS16b29tLWZhZGUuanMubWFwIiwiaW1wb3J0IHsgaCB9IGZyb20gXCJwcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicHJlYWN0L2hvb2tzXCI7XHJcbmltcG9ydCB7IGZvcndhcmRFbGVtZW50UmVmIH0gZnJvbSBcIi4vZm9yd2FyZC1lbGVtZW50LXJlZlwiO1xyXG5pbXBvcnQgeyB1c2VNZXJnZWRQcm9wcyB9IGZyb20gXCJwcmVhY3QtcHJvcC1oZWxwZXJzL3VzZS1tZXJnZWQtcHJvcHNcIjtcclxuaW1wb3J0IHsgVHJhbnNpdGlvbmFibGUgfSBmcm9tIFwiLi90cmFuc2l0aW9uYWJsZVwiO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNldCBvZiBwcm9wcyB0aGF0IGltcGxlbWVudCBhIEZsaXAgdHJhbnNpdGlvbi4gTGlrZSBhbGwgYHVzZUNyZWF0ZSpQcm9wc2AgaG9va3MsIG11c3QgYmUgdXNlZCBpbiB0YW1kZW0gd2l0aCBhIGBUcmFuc2l0aW9uYWJsZWAgY29tcG9uZW50IChvciBgdXNlQ3JlYXRlVHJhbnNpdGlvbmFibGVQcm9wc2ApLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNyZWF0ZUZsaXBQcm9wcyh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUgfSwgb3RoZXJQcm9wcykge1xyXG4gICAgY2xhc3NCYXNlID8/PSBcInRyYW5zaXRpb25cIjtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldElubGluZSA9IHVzZVJlZihmbGlwQW5nbGVJbmxpbmUgPz8gMTgwKTtcclxuICAgIGNvbnN0IGxhc3RWYWxpZFRhcmdldEJsb2NrID0gdXNlUmVmKGZsaXBBbmdsZUJsb2NrID8/IDApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUlubGluZSlcclxuICAgICAgICBsYXN0VmFsaWRUYXJnZXRJbmxpbmUuY3VycmVudCA9IGZsaXBBbmdsZUlubGluZTsgfSwgW2ZsaXBBbmdsZUlubGluZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHsgaWYgKGZsaXBBbmdsZUJsb2NrKVxyXG4gICAgICAgIGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQgPSBmbGlwQW5nbGVCbG9jazsgfSwgW2ZsaXBBbmdsZUJsb2NrXSk7XHJcbiAgICBpZiAoZmxpcEFuZ2xlSW5saW5lID09IDApXHJcbiAgICAgICAgZmxpcEFuZ2xlSW5saW5lID0gbGFzdFZhbGlkVGFyZ2V0SW5saW5lLmN1cnJlbnQ7XHJcbiAgICBpZiAoZmxpcEFuZ2xlQmxvY2sgPT0gMClcclxuICAgICAgICBmbGlwQW5nbGVCbG9jayA9IGxhc3RWYWxpZFRhcmdldEJsb2NrLmN1cnJlbnQ7XHJcbiAgICByZXR1cm4gdXNlTWVyZ2VkUHJvcHMoKSh7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtjbGFzc0Jhc2V9LWZsaXBgLFxyXG4gICAgICAgIGNsYXNzQmFzZSxcclxuICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LWZsaXAtYW5nbGUtaW5saW5lYF06IGAkeyhmbGlwQW5nbGVJbmxpbmUgPz8gMCl9ZGVnYCxcclxuICAgICAgICAgICAgW2AtLSR7Y2xhc3NCYXNlfS1mbGlwLWFuZ2xlLWJsb2NrYF06IGAkeyhmbGlwQW5nbGVCbG9jayA/PyAwKX1kZWdgLFxyXG4gICAgICAgICAgICBbYC0tJHtjbGFzc0Jhc2V9LXBlcnNwZWN0aXZlYF06IGAkeyhwZXJzcGVjdGl2ZSA/PyA4MDApfXB4YFxyXG4gICAgICAgIH1cclxuICAgIH0sIG90aGVyUHJvcHMpO1xyXG59XHJcbjtcclxuLyoqXHJcbiAqIFdyYXBzIGEgZGl2IChldGMuKSBhbmQgYWxsb3dzIGl0IHRvIHRyYW5zaXRpb24gaW4vb3V0IHNtb290aGx5IHdpdGggYSBGbGlwIGVmZmVjdC5cclxuICpcclxuICogUHJvdmlkZSB0aGUgZGlyZWN0aW9uIHRoZSBlbGVtZW50IHdpbGwgdHJhdmVsIGluIHdpdGggYGZsaXBJbmxpbmVgIGFuZCBgZmxpcEJsb2NrYCxcclxuICogd2l0aCBgMWAgYmVpbmcgYDEwMCVgIG9mIHRoZSBlbGVtZW50J3Mgd2lkdGggb3IgaGVpZ2h0LlxyXG4gKlxyXG4gKiBBIHZhbHVlIG9mIGAwYCBpcyBoYW5kbGVkIHNwZWNpYWxseSwgZWZmZWN0aXZlbHkgbWVhbmluZyBcInVzZSB0aGUgbGFzdCBub24temVybyB2YWx1ZVwiLFxyXG4gKiB3aGljaCBhbGxvd3MgZm9yIGNvbnZlbmllbnQgc2V0dXBzIGluc2lkZSBvZiBhIGBTd2FwQ29udGFpbmVyYFxyXG4gKiAoYGZsaXBJbmxpbmU9e2luZGV4IC0gc2VsZWN0ZWRJbmRleH1gIG9yIHNpbWlsYXIuKVxyXG4gKlxyXG4gKiBAc2VlIGBUcmFuc2l0aW9uYWJsZWBcclxuICovXHJcbmV4cG9ydCBjb25zdCBGbGlwID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gRmxpcCh7IGNsYXNzQmFzZSwgZmxpcEFuZ2xlSW5saW5lLCBmbGlwQW5nbGVCbG9jaywgcGVyc3BlY3RpdmUsIG9wZW4sIC4uLnJlc3QgfSwgcmVmKSB7XHJcbiAgICByZXR1cm4gaChUcmFuc2l0aW9uYWJsZSwgeyBvcGVuOiBvcGVuLCAuLi51c2VDcmVhdGVGbGlwUHJvcHMoeyBjbGFzc0Jhc2UsIGZsaXBBbmdsZUlubGluZSwgZmxpcEFuZ2xlQmxvY2ssIHBlcnNwZWN0aXZlIH0sIHsgLi4ucmVzdCwgcmVmIH0pIH0pO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmxpcC5qcy5tYXAiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIGNsc3ggfSBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicHJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lcmdlZFByb3BzIH0gZnJvbSBcInByZWFjdC1wcm9wLWhlbHBlcnMvdXNlLW1lcmdlZC1wcm9wc1wiO1xyXG5pbXBvcnQgeyBmb3J3YXJkRWxlbWVudFJlZiB9IGZyb20gXCIuL2ZvcndhcmQtZWxlbWVudC1yZWZcIjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBzZXQgb2YgcHJvcHMgdGhhdCBpbXBsZW1lbnQgYSBzd2FwIGNvbnRhaW5lci5cclxuICogQmUgc3VyZSB0byBtZXJnZSB0aGVzZSByZXR1cm5lZCBwcm9wcyB3aXRoIHdoYXRldmVyIHRoZSB1c2VyIHBhc3NlZCBpbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGlubGluZSwgY2xhc3NCYXNlIH0sIG90aGVyUHJvcHMpIHtcclxuICAgIHJldHVybiB1c2VNZXJnZWRQcm9wcygpKHtcclxuICAgICAgICBjbGFzc05hbWU6IGNsc3goYCR7Y2xhc3NCYXNlID8/IFwidHJhbnNpdGlvblwifS1zd2FwLWNvbnRhaW5lcmAsIGlubGluZSAmJiBgJHtjbGFzc0Jhc2UgPz8gXCJ0cmFuc2l0aW9uXCJ9LXN3YXAtY29udGFpbmVyLWlubGluZWApXHJcbiAgICB9LCBvdGhlclByb3BzKTtcclxufVxyXG4vKipcclxuICogQWxsb3dzIGEgc2V0IG9mIGNoaWxkIDxUcmFuc2l0aW9uYWJsZT4gY29tcG9uZW50cyB0byBhbmltYXRlIGluICYgb3V0IGluLXBsYWNlLiBWZXJ5IHVzZWZ1bCBmb3IsIGUuZy4sIHRhYiBwYW5lbHMuXHJcbiAqXHJcbiAqIFlvdSBtdXN0IG1hbmFnZSBlYWNoIGNoaWxkIGA8VHJhbnNpdGlvbmFibGU+YCBjb21wb25lbnQncyBgb3BlbmAgcHJvcCAtLSB0aGlzIGNvbXBvbmVudCAqZG9lcyBub3QqIG1hbmFnZSBhbnkgc29ydCBvZiBzdGF0ZSBpbiB0aGF0IHJlZ2FyZC5cclxuICpcclxuICogTGlrZSBgPFRyYW5zaXRpb25hYmxlPmAsICp0aGlzIHdyYXBzIGFuIEhUTUxFbGVtZW50IChvciBvdGhlciByZWYtZm9yd2FyZGluZyBjb21wb25lbnQpKi4gVGhpcyB3aWxsIGJlIHlvdXIgY29udGFpbmVyIHRoYXQgaG9sZHMgZWFjaCBgPFRyYW5zaXRpb25hYmxlPmAgKG9yIGNvbXBvbmVudCB0aGF0IHVzZXMgaXQpLiBTdHJpY3RseSBzcGVha2luZyBpdCBjb3VsZCBiZSBhbnl0aGluZywgbm90IGEgYDxUcmFuc2l0aW9uYWJsZT5gLCBidXQgaWYgaXQgZG9lc250J3QgdHJhbnNpdGlvbiBvdXQgdGhlbiBpdCdzIGp1c3QgZ29pbmcgdG8gYmUgaGFuZ2luZyBhcm91bmQgMTAwJSBvZiB0aGUgdGltZS5cclxuICpcclxuICogTG9uZyB3YXkgb2Ygc2F5aW5nLCBpZiB5b3UgZ2V0IGEgY3J5cHRpYyBlcnJvciB3aXRoIHRoaXMgY29tcG9uZW50LCBtYWtlIHN1cmUgaXQgaGFzIGEgc2luZ2xlIGA8ZGl2PmAgY2hpbGQgb3Igc29tZXRoaW5nLlxyXG4gKiBAcGFyYW0gcGFyYW0wXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3dhcHBhYmxlID0gZm9yd2FyZEVsZW1lbnRSZWYoZnVuY3Rpb24gU3dhcHBhYmxlKHsgY2hpbGRyZW4sIGNsYXNzQmFzZSwgaW5saW5lLCAuLi5wIH0sIHJlZikge1xyXG4gICAgaW5saW5lID8/PSB0eXBlb2YgY2hpbGRyZW4udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBpbmxpbmVFbGVtZW50cy5oYXMoY2hpbGRyZW4udHlwZSk7XHJcbiAgICBjb25zdCB0cmFuc2l0aW9uUHJvcHMgPSB1c2VDcmVhdGVTd2FwcGFibGVQcm9wcyh7IGNsYXNzQmFzZSwgaW5saW5lIH0sIHsgLi4ucCwgcmVmIH0pO1xyXG4gICAgY29uc3QgbWVyZ2VkV2l0aENoaWxkcmVuID0gdXNlTWVyZ2VkUHJvcHMoKSh0cmFuc2l0aW9uUHJvcHMsIGNoaWxkcmVuLnByb3BzKTtcclxuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGRyZW4sIG1lcmdlZFdpdGhDaGlsZHJlbik7XHJcbn0pO1xyXG4vLyBJZiBcImlubGluZVwiIGlzbid0IGV4cGxpY2l0bHkgcHJvdmlkZWQsIHdlIHRyeSB0byBpbXBsaWNpdGx5IGRvIGl0IGJhc2VkIG9uIHRoZSBjaGlsZCdzIHRhZy5cclxuLy8gTm90IHBlcmZlY3QsIGJ1dCBpdCdzIG5vdCBzdXBwb3NlZCB0byBiZS4gYGlubGluZWAgaXMgZm9yIHBlcmZlY3QuXHJcbmNvbnN0IGlubGluZUVsZW1lbnRzID0gbmV3IFNldChbXHJcbiAgICBcImFcIixcclxuICAgIFwiYWJiclwiLFxyXG4gICAgXCJhY3JvbnltXCIsXHJcbiAgICBcImF1ZGlvXCIsXHJcbiAgICBcImJcIixcclxuICAgIFwiYmRpXCIsXHJcbiAgICBcImJkb1wiLFxyXG4gICAgXCJiaWdcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiYnV0dG9uXCIsXHJcbiAgICBcImNhbnZhc1wiLFxyXG4gICAgXCJjaXRlXCIsXHJcbiAgICBcImNvZGVcIixcclxuICAgIFwiZGF0YVwiLFxyXG4gICAgXCJkYXRhbGlzdFwiLFxyXG4gICAgXCJkZWxcIixcclxuICAgIFwiZGZuXCIsXHJcbiAgICBcImVtXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImlcIixcclxuICAgIFwiaWZyYW1lXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJpbnNcIixcclxuICAgIFwia2JkXCIsXHJcbiAgICBcImxhYmVsXCIsXHJcbiAgICBcIm1hcFwiLFxyXG4gICAgXCJtYXJrXCIsXHJcbiAgICBcIm1ldGVyXCIsXHJcbiAgICBcIm5vc2NyaXB0XCIsXHJcbiAgICBcIm9iamVjdFwiLFxyXG4gICAgXCJvdXRwdXRcIixcclxuICAgIFwicGljdHVyZVwiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJxXCIsXHJcbiAgICBcInJ1YnlcIixcclxuICAgIFwic1wiLFxyXG4gICAgXCJzYW1wXCIsXHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2xvdFwiLFxyXG4gICAgXCJzbWFsbFwiLFxyXG4gICAgXCJzcGFuXCIsXHJcbiAgICBcInN0cm9uZ1wiLFxyXG4gICAgXCJzdWJcIixcclxuICAgIFwic3VwXCIsXHJcbiAgICBcInN2Z1wiLFxyXG4gICAgXCJ0ZW1wbGF0ZVwiLFxyXG4gICAgXCJ0ZXh0YXJlYVwiLFxyXG4gICAgXCJ0aW1lXCIsXHJcbiAgICBcInVcIixcclxuICAgIFwidHRcIixcclxuICAgIFwidmFyXCIsXHJcbiAgICBcInZpZGVvXCIsXHJcbiAgICBcIndiclwiXHJcbl0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zd2FwcGFibGUuanMubWFwIixudWxsXSwibmFtZXMiOlsiZ2xvYmFsIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiY2xhc3NvZiIsIkluZGV4ZWRPYmplY3QiLCJhRnVuY3Rpb24iLCJwcm9jZXNzIiwidXNlckFnZW50IiwiVjhfVkVSU0lPTiIsIk5BVElWRV9TWU1CT0wiLCJVU0VfU1lNQk9MX0FTX1VJRCIsInN0b3JlIiwiU3ltYm9sIiwiaGFzIiwiZG9jdW1lbnQiLCJERVNDUklQVE9SUyIsImNyZWF0ZUVsZW1lbnQiLCJJRThfRE9NX0RFRklORSIsInByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlIiwiZGVmaW5lUHJvcGVydHlNb2R1bGUiLCJXZWFrTWFwIiwic2V0IiwiTkFUSVZFX1dFQUtfTUFQIiwic2hhcmVkIiwiaGlkZGVuS2V5cyIsIm9iamVjdEhhcyIsIkludGVybmFsU3RhdGVNb2R1bGUiLCJmbG9vciIsIm1pbiIsIm1heCIsImNyZWF0ZU1ldGhvZCIsInJlcXVpcmUkJDAiLCJpbnRlcm5hbE9iamVjdEtleXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlIiwib3duS2V5cyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSIsImlzRm9yY2VkIiwiVUEiLCJ0ZXN0IiwiVjgiLCJGRiIsIklFX09SX0VER0UiLCJXRUJLSVQiLCJGT1JDRUQiLCJ0b1N0cmluZyIsIiQiLCJpbnRlcm5hbFNvcnQiLCIkUmVnRXhwIiwiSUVfUFJPVE8iLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ2V0SW50ZXJuYWxTdGF0ZSIsInN0aWNreUhlbHBlcnMiLCJVTlNVUFBPUlRFRF9ET1RfQUxMIiwiVU5TVVBQT1JURURfTkNHIiwiY3JlYXRlIiwiZXhlYyIsIlNQRUNJRVMiLCJmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyIsInJlZ0V4cEV4ZWMiLCJkZWZpbmVQcm9wZXJ0eSIsIlRPX1NUUklOR19UQUciLCJJVEVSQVRPUiIsIkFycmF5UHJvdG90eXBlIiwiSXRlcmF0b3JzIiwiVE9fU1RSSU5HX1RBR19TVVBQT1JUIiwiYmluZCIsIklTX05PREUiLCJJU19JT1MiLCJyZXF1aXJlJCQxIiwiUHJvbWlzZSIsIm5vdGlmeSIsIklTX1dFQk9TX1dFQktJVCIsIklTX0lPU19QRUJCTEUiLCJuZXdQcm9taXNlQ2FwYWJpbGl0eSIsInNldEludGVybmFsU3RhdGUiLCJOYXRpdmVQcm9taXNlIiwiVHlwZUVycm9yIiwibmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUiLCJJU19CUk9XU0VSIiwic2V0UHJvdG90eXBlT2YiLCJFTVBUWV9PQkoiLCJFTVBUWV9BUlIiLCJJU19OT05fRElNRU5TSU9OQUwiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50Q29tcG9uZW50IiwicHJldlJhZiIsImN1cnJlbnRIb29rIiwiYWZ0ZXJQYWludEVmZmVjdHMiLCJvbGRCZWZvcmVEaWZmIiwib3B0aW9ucyIsIm9sZEJlZm9yZVJlbmRlciIsIm9sZEFmdGVyRGlmZiIsImRpZmZlZCIsIm9sZENvbW1pdCIsIm9sZEJlZm9yZVVubW91bnQiLCJ1bm1vdW50IiwiZ2V0SG9va1N0YXRlIiwiaW5kZXgiLCJ0eXBlIiwiaG9va3MiLCJsZW5ndGgiLCJwdXNoIiwidXNlU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJ1c2VSZWR1Y2VyIiwiaW52b2tlT3JSZXR1cm4iLCJyZWR1Y2VyIiwiaW5pdCIsImhvb2tTdGF0ZSIsIl9yZWR1Y2VyIiwidW5kZWZpbmVkIiwibmV4dFZhbHVlIiwiYWN0aW9uIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWxsYmFjayIsImFyZ3MiLCJzdGF0ZSIsImFyZ3NDaGFuZ2VkIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiaW5pdGlhbFZhbHVlIiwidXNlTWVtbyIsImN1cnJlbnQiLCJmYWN0b3J5IiwidXNlQ2FsbGJhY2siLCJmbHVzaEFmdGVyUGFpbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsImludm9rZUNsZWFudXAiLCJpbnZva2VFZmZlY3QiLCJlIiwidm5vZGUiLCJjIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFmIiwiZG9uZSIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJIQVNfUkFGIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwicHJldmlvdXNDb21wb25lbnQiLCJjb21taXRRdWV1ZSIsInNvbWUiLCJmaWx0ZXIiLCJjYiIsImhvb2siLCJjb21wIiwib2xkQXJncyIsIm5ld0FyZ3MiLCJhcmciLCJmIiwiQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSIiwiQlVHR1lfU0FGQVJJX0lURVJBVE9SUyIsInJldHVyblRoaXMiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiSXRlcmF0b3JzQ29yZSIsIkFycmF5SXRlcmF0b3JNZXRob2RzIiwiRE9NSXRlcmFibGVzIiwiYXNzaWduIiwib2JqIiwicHJvcHMiLCJpIiwic2hhbGxvd0RpZmZlcnMiLCJhIiwiYiIsImZvcndhcmRSZWYiLCJ0b1ZhbCIsIm1peCIsImsiLCJ5Iiwic3RyIiwiQXJyYXkiLCJpc0FycmF5IiwidG1wIiwieCIsImFyZ3VtZW50cyIsInVzZVN0YXRlUCIsImNsb25lRWxlbWVudCIsImgiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxJQUFJLEtBQUssR0FBRyxVQUFVLEVBQUUsRUFBRTtDQUMxQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztDQUNyQyxDQUFDLENBQUM7QUFDRjtDQUNBO0NBQ0EsWUFBYztDQUNkO0NBQ0EsRUFBRSxLQUFLLENBQUMsT0FBTyxVQUFVLElBQUksUUFBUSxJQUFJLFVBQVUsQ0FBQztDQUNwRCxFQUFFLEtBQUssQ0FBQyxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDO0NBQzVDO0NBQ0EsRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQztDQUN4QyxFQUFFLEtBQUssQ0FBQyxPQUFPQSxjQUFNLElBQUksUUFBUSxJQUFJQSxjQUFNLENBQUM7Q0FDNUM7Q0FDQSxFQUFFLENBQUMsWUFBWSxFQUFF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QUMsR0FBRyxDQUFDLEVBQUU7Q0FDdEQsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDNUIsS0FBSztDQUNMLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztDQUN0QyxHQUFHLENBQUMsT0FBTyxLQUFLLENBQUM7Q0FDakIsQ0FBQyxDQUFDO0FBQ0Y7Q0FDQSxJQUFJLEtBQUssR0FBRyxVQUFVLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0NBQzlDLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztDQUM1QixFQUFFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7Q0FDN0IsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7Q0FDakIsRUFBRSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7Q0FDakIsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEI7Q0FDQSxFQUFFLE9BQU8sTUFBTSxHQUFHLE9BQU8sSUFBSSxNQUFNLEdBQUcsT0FBTyxFQUFFO0NBQy9DLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTyxJQUFJLE1BQU0sR0FBRyxPQUFPLEVBQUU7Q0FDOUMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbEcsS0FBSyxNQUFNO0NBQ1gsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN2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QUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7YUFFdEZBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7YUFDdEZBLElBQUMsU0FBUyxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7YUFDdkZBLElBQUMsYUFBYSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7YUFDM0ZBLElBQUMsWUFBWSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUk7YUFDMUZBLElBQUMsUUFBUSxJQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUksQ0FFcEYsQ0FDUCxFQUNOO0NBQ0wsQ0FBQztDQUdELFNBQVMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFpRjtLQUM3SSxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHL0UsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUdBLENBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQyxNQUFNLFVBQVUsR0FBR3VCLEdBQVcsQ0FBQyxDQUFDLENBQVEsT0FBTyxNQUFNLENBQUUsQ0FBQyxDQUFDLENB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TSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBR0EsQ0FBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUdBLENBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHQSxDQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBR0EsQ0FBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9DLE1BQU0sY0FBYyxHQUFHdUIsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxSSxNQUFNLGNBQWMsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLFVBQVUsQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxSSxNQUFNLFdBQVcsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwSSxNQUFNLFdBQVcsR0FBR0EsR0FBVyxDQUFDLENBQUMsQ0FBUSxPQUFPLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQXVCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNwSSxNQUFNLGVBQWUsR0FBR0EsR0FBVyxD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
