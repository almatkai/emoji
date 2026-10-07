"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/cross-fetch/dist/node-ponyfill.js
var require_node_ponyfill = __commonJS({
  "node_modules/cross-fetch/dist/node-ponyfill.js"(exports2, module2) {
    var nodeFetch = require("node-fetch");
    var realFetch = nodeFetch.default || nodeFetch;
    var fetch2 = function(url, options) {
      if (/^\/\//.test(url)) {
        url = "https:" + url;
      }
      return realFetch.call(this, url, options);
    };
    fetch2.ponyfill = true;
    module2.exports = exports2 = fetch2;
    exports2.fetch = fetch2;
    exports2.Headers = nodeFetch.Headers;
    exports2.Request = nodeFetch.Request;
    exports2.Response = nodeFetch.Response;
    exports2.default = fetch2;
  }
});

// node_modules/fuse.js/dist/fuse.common.js
var require_fuse_common = __commonJS({
  "node_modules/fuse.js/dist/fuse.common.js"(exports2, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      Object.defineProperty(subClass, "prototype", {
        value: Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        }),
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function isArray(value) {
      return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
    }
    var INFINITY = 1 / 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    function isString(value) {
      return typeof value === "string";
    }
    function isNumber(value) {
      return typeof value === "number";
    }
    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
    }
    function isObject(value) {
      return _typeof(value) === "object";
    }
    function isObjectLike(value) {
      return isObject(value) && value !== null;
    }
    function isDefined(value) {
      return value !== void 0 && value !== null;
    }
    function isBlank(value) {
      return !value.trim().length;
    }
    function getTag(value) {
      return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
    }
    var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
    var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY2(key) {
      return "Invalid value for key ".concat(key);
    };
    var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE2(max) {
      return "Pattern length exceeds max of ".concat(max, ".");
    };
    var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY2(name) {
      return "Missing ".concat(name, " property in key");
    };
    var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE2(key) {
      return "Property 'weight' in key '".concat(key, "' must be a positive integer");
    };
    var hasOwn = Object.prototype.hasOwnProperty;
    var KeyStore = /* @__PURE__ */ (function() {
      function KeyStore2(keys) {
        var _this = this;
        _classCallCheck(this, KeyStore2);
        this._keys = [];
        this._keyMap = {};
        var totalWeight = 0;
        keys.forEach(function(key) {
          var obj = createKey(key);
          totalWeight += obj.weight;
          _this._keys.push(obj);
          _this._keyMap[obj.id] = obj;
          totalWeight += obj.weight;
        });
        this._keys.forEach(function(key) {
          key.weight /= totalWeight;
        });
      }
      _createClass(KeyStore2, [{
        key: "get",
        value: function get2(keyId) {
          return this._keyMap[keyId];
        }
      }, {
        key: "keys",
        value: function keys() {
          return this._keys;
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return JSON.stringify(this._keys);
        }
      }]);
      return KeyStore2;
    })();
    function createKey(key) {
      var path2 = null;
      var id = null;
      var src = null;
      var weight = 1;
      if (isString(key) || isArray(key)) {
        src = key;
        path2 = createKeyPath(key);
        id = createKeyId(key);
      } else {
        if (!hasOwn.call(key, "name")) {
          throw new Error(MISSING_KEY_PROPERTY("name"));
        }
        var name = key.name;
        src = name;
        if (hasOwn.call(key, "weight")) {
          weight = key.weight;
          if (weight <= 0) {
            throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
          }
        }
        path2 = createKeyPath(name);
        id = createKeyId(name);
      }
      return {
        path: path2,
        id,
        weight,
        src
      };
    }
    function createKeyPath(key) {
      return isArray(key) ? key : key.split(".");
    }
    function createKeyId(key) {
      return isArray(key) ? key.join(".") : key;
    }
    function get(obj, path2) {
      var list = [];
      var arr = false;
      var deepGet = function deepGet2(obj2, path3, index) {
        if (!isDefined(obj2)) {
          return;
        }
        if (!path3[index]) {
          list.push(obj2);
        } else {
          var key = path3[index];
          var value = obj2[key];
          if (!isDefined(value)) {
            return;
          }
          if (index === path3.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
            list.push(toString(value));
          } else if (isArray(value)) {
            arr = true;
            for (var i = 0, len = value.length; i < len; i += 1) {
              deepGet2(value[i], path3, index + 1);
            }
          } else if (path3.length) {
            deepGet2(value, path3, index + 1);
          }
        }
      };
      deepGet(obj, isString(path2) ? path2.split(".") : path2, 0);
      return arr ? list : list[0];
    }
    var MatchOptions = {
      // Whether the matches should be included in the result set. When `true`, each record in the result
      // set will include the indices of the matched characters.
      // These can consequently be used for highlighting purposes.
      includeMatches: false,
      // When `true`, the matching function will continue to the end of a search pattern even if
      // a perfect match has already been located in the string.
      findAllMatches: false,
      // Minimum number of characters that must be matched before a result is considered a match
      minMatchCharLength: 1
    };
    var BasicOptions = {
      // When `true`, the algorithm continues searching to the end of the input even if a perfect
      // match is found before the end of the same input.
      isCaseSensitive: false,
      // When true, the matching function will continue to the end of a search pattern even if
      includeScore: false,
      // List of properties that will be searched. This also supports nested properties.
      keys: [],
      // Whether to sort the result list, by score
      shouldSort: true,
      // Default sort function: sort by ascending score, ascending index
      sortFn: function sortFn(a, b) {
        return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
      }
    };
    var FuzzyOptions = {
      // Approximately where in the text is the pattern expected to be found?
      location: 0,
      // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
      // (of both letters and location), a threshold of '1.0' would match anything.
      threshold: 0.6,
      // Determines how close the match must be to the fuzzy location (specified above).
      // An exact letter match which is 'distance' characters away from the fuzzy location
      // would score as a complete mismatch. A distance of '0' requires the match be at
      // the exact location specified, a threshold of '1000' would require a perfect match
      // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
      distance: 100
    };
    var AdvancedOptions = {
      // When `true`, it enables the use of unix-like search commands
      useExtendedSearch: false,
      // The get function to use when fetching an object's properties.
      // The default will search nested paths *ie foo.bar.baz*
      getFn: get,
      // When `true`, search will ignore `location` and `distance`, so it won't matter
      // where in the string the pattern appears.
      // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
      ignoreLocation: false,
      // When `true`, the calculation for the relevance score (used for sorting) will
      // ignore the field-length norm.
      // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
      ignoreFieldNorm: false,
      // The weight to determine how much field length norm effects scoring.
      fieldNormWeight: 1
    };
    var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
    var SPACE = /[^ ]+/g;
    function norm() {
      var weight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      var mantissa = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
      var cache = /* @__PURE__ */ new Map();
      var m = Math.pow(10, mantissa);
      return {
        get: function get2(value) {
          var numTokens = value.match(SPACE).length;
          if (cache.has(numTokens)) {
            return cache.get(numTokens);
          }
          var norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
          var n = parseFloat(Math.round(norm2 * m) / m);
          cache.set(numTokens, n);
          return n;
        },
        clear: function clear() {
          cache.clear();
        }
      };
    }
    var FuseIndex = /* @__PURE__ */ (function() {
      function FuseIndex2() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$getFn = _ref.getFn, getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn, _ref$fieldNormWeight = _ref.fieldNormWeight, fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;
        _classCallCheck(this, FuseIndex2);
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
      }
      _createClass(FuseIndex2, [{
        key: "setSources",
        value: function setSources() {
          var docs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          this.docs = docs;
        }
      }, {
        key: "setIndexRecords",
        value: function setIndexRecords() {
          var records = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          this.records = records;
        }
      }, {
        key: "setKeys",
        value: function setKeys() {
          var _this = this;
          var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          this.keys = keys;
          this._keysMap = {};
          keys.forEach(function(key, idx) {
            _this._keysMap[key.id] = idx;
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this2 = this;
          if (this.isCreated || !this.docs.length) {
            return;
          }
          this.isCreated = true;
          if (isString(this.docs[0])) {
            this.docs.forEach(function(doc, docIndex) {
              _this2._addString(doc, docIndex);
            });
          } else {
            this.docs.forEach(function(doc, docIndex) {
              _this2._addObject(doc, docIndex);
            });
          }
          this.norm.clear();
        }
        // Adds a doc to the end of the index
      }, {
        key: "add",
        value: function add(doc) {
          var idx = this.size();
          if (isString(doc)) {
            this._addString(doc, idx);
          } else {
            this._addObject(doc, idx);
          }
        }
        // Removes the doc at the specified index of the index
      }, {
        key: "removeAt",
        value: function removeAt(idx) {
          this.records.splice(idx, 1);
          for (var i = idx, len = this.size(); i < len; i += 1) {
            this.records[i].i -= 1;
          }
        }
      }, {
        key: "getValueForItemAtKeyId",
        value: function getValueForItemAtKeyId(item, keyId) {
          return item[this._keysMap[keyId]];
        }
      }, {
        key: "size",
        value: function size() {
          return this.records.length;
        }
      }, {
        key: "_addString",
        value: function _addString(doc, docIndex) {
          if (!isDefined(doc) || isBlank(doc)) {
            return;
          }
          var record = {
            v: doc,
            i: docIndex,
            n: this.norm.get(doc)
          };
          this.records.push(record);
        }
      }, {
        key: "_addObject",
        value: function _addObject(doc, docIndex) {
          var _this3 = this;
          var record = {
            i: docIndex,
            $: {}
          };
          this.keys.forEach(function(key, keyIndex) {
            var value = _this3.getFn(doc, key.path);
            if (!isDefined(value)) {
              return;
            }
            if (isArray(value)) {
              (function() {
                var subRecords = [];
                var stack = [{
                  nestedArrIndex: -1,
                  value
                }];
                while (stack.length) {
                  var _stack$pop = stack.pop(), nestedArrIndex = _stack$pop.nestedArrIndex, _value = _stack$pop.value;
                  if (!isDefined(_value)) {
                    continue;
                  }
                  if (isString(_value) && !isBlank(_value)) {
                    var subRecord2 = {
                      v: _value,
                      i: nestedArrIndex,
                      n: _this3.norm.get(_value)
                    };
                    subRecords.push(subRecord2);
                  } else if (isArray(_value)) {
                    _value.forEach(function(item, k) {
                      stack.push({
                        nestedArrIndex: k,
                        value: item
                      });
                    });
                  } else ;
                }
                record.$[keyIndex] = subRecords;
              })();
            } else if (!isBlank(value)) {
              var subRecord = {
                v: value,
                n: _this3.norm.get(value)
              };
              record.$[keyIndex] = subRecord;
            }
          });
          this.records.push(record);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return {
            keys: this.keys,
            records: this.records
          };
        }
      }]);
      return FuseIndex2;
    })();
    function createIndex(keys, docs) {
      var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$getFn = _ref2.getFn, getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn, _ref2$fieldNormWeight = _ref2.fieldNormWeight, fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;
      var myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
      });
      myIndex.setKeys(keys.map(createKey));
      myIndex.setSources(docs);
      myIndex.create();
      return myIndex;
    }
    function parseIndex(data) {
      var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$getFn = _ref3.getFn, getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn, _ref3$fieldNormWeight = _ref3.fieldNormWeight, fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;
      var keys = data.keys, records = data.records;
      var myIndex = new FuseIndex({
        getFn,
        fieldNormWeight
      });
      myIndex.setKeys(keys);
      myIndex.setIndexRecords(records);
      return myIndex;
    }
    function computeScore$1(pattern) {
      var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$errors = _ref.errors, errors = _ref$errors === void 0 ? 0 : _ref$errors, _ref$currentLocation = _ref.currentLocation, currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation, _ref$expectedLocation = _ref.expectedLocation, expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
      var accuracy = errors / pattern.length;
      if (ignoreLocation) {
        return accuracy;
      }
      var proximity = Math.abs(expectedLocation - currentLocation);
      if (!distance) {
        return proximity ? 1 : accuracy;
      }
      return accuracy + proximity / distance;
    }
    function convertMaskToIndices() {
      var matchmask = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var minMatchCharLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Config.minMatchCharLength;
      var indices = [];
      var start = -1;
      var end = -1;
      var i = 0;
      for (var len = matchmask.length; i < len; i += 1) {
        var match = matchmask[i];
        if (match && start === -1) {
          start = i;
        } else if (!match && start !== -1) {
          end = i - 1;
          if (end - start + 1 >= minMatchCharLength) {
            indices.push([start, end]);
          }
          start = -1;
        }
      }
      if (matchmask[i - 1] && i - start >= minMatchCharLength) {
        indices.push([start, i - 1]);
      }
      return indices;
    }
    var MAX_BITS = 32;
    function search(text, pattern, patternAlphabet) {
      var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
      if (pattern.length > MAX_BITS) {
        throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
      }
      var patternLen = pattern.length;
      var textLen = text.length;
      var expectedLocation = Math.max(0, Math.min(location, textLen));
      var currentThreshold = threshold;
      var bestLocation = expectedLocation;
      var computeMatches = minMatchCharLength > 1 || includeMatches;
      var matchMask = computeMatches ? Array(textLen) : [];
      var index;
      while ((index = text.indexOf(pattern, bestLocation)) > -1) {
        var score = computeScore$1(pattern, {
          currentLocation: index,
          expectedLocation,
          distance,
          ignoreLocation
        });
        currentThreshold = Math.min(score, currentThreshold);
        bestLocation = index + patternLen;
        if (computeMatches) {
          var i = 0;
          while (i < patternLen) {
            matchMask[index + i] = 1;
            i += 1;
          }
        }
      }
      bestLocation = -1;
      var lastBitArr = [];
      var finalScore = 1;
      var binMax = patternLen + textLen;
      var mask = 1 << patternLen - 1;
      for (var _i = 0; _i < patternLen; _i += 1) {
        var binMin = 0;
        var binMid = binMax;
        while (binMin < binMid) {
          var _score2 = computeScore$1(pattern, {
            errors: _i,
            currentLocation: expectedLocation + binMid,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (_score2 <= currentThreshold) {
            binMin = binMid;
          } else {
            binMax = binMid;
          }
          binMid = Math.floor((binMax - binMin) / 2 + binMin);
        }
        binMax = binMid;
        var start = Math.max(1, expectedLocation - binMid + 1);
        var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
        var bitArr = Array(finish + 2);
        bitArr[finish + 1] = (1 << _i) - 1;
        for (var j = finish; j >= start; j -= 1) {
          var currentLocation = j - 1;
          var charMatch = patternAlphabet[text.charAt(currentLocation)];
          if (computeMatches) {
            matchMask[currentLocation] = +!!charMatch;
          }
          bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
          if (_i) {
            bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
          }
          if (bitArr[j] & mask) {
            finalScore = computeScore$1(pattern, {
              errors: _i,
              currentLocation,
              expectedLocation,
              distance,
              ignoreLocation
            });
            if (finalScore <= currentThreshold) {
              currentThreshold = finalScore;
              bestLocation = currentLocation;
              if (bestLocation <= expectedLocation) {
                break;
              }
              start = Math.max(1, 2 * expectedLocation - bestLocation);
            }
          }
        }
        var _score = computeScore$1(pattern, {
          errors: _i + 1,
          currentLocation: expectedLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (_score > currentThreshold) {
          break;
        }
        lastBitArr = bitArr;
      }
      var result = {
        isMatch: bestLocation >= 0,
        // Count exact matches (those with a score of 0) to be "almost" exact
        score: Math.max(1e-3, finalScore)
      };
      if (computeMatches) {
        var indices = convertMaskToIndices(matchMask, minMatchCharLength);
        if (!indices.length) {
          result.isMatch = false;
        } else if (includeMatches) {
          result.indices = indices;
        }
      }
      return result;
    }
    function createPatternAlphabet(pattern) {
      var mask = {};
      for (var i = 0, len = pattern.length; i < len; i += 1) {
        var _char = pattern.charAt(i);
        mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
      }
      return mask;
    }
    var BitapSearch = /* @__PURE__ */ (function() {
      function BitapSearch2(pattern) {
        var _this = this;
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
        _classCallCheck(this, BitapSearch2);
        this.options = {
          location,
          threshold,
          distance,
          includeMatches,
          findAllMatches,
          minMatchCharLength,
          isCaseSensitive,
          ignoreLocation
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.chunks = [];
        if (!this.pattern.length) {
          return;
        }
        var addChunk = function addChunk2(pattern2, startIndex2) {
          _this.chunks.push({
            pattern: pattern2,
            alphabet: createPatternAlphabet(pattern2),
            startIndex: startIndex2
          });
        };
        var len = this.pattern.length;
        if (len > MAX_BITS) {
          var i = 0;
          var remainder = len % MAX_BITS;
          var end = len - remainder;
          while (i < end) {
            addChunk(this.pattern.substr(i, MAX_BITS), i);
            i += MAX_BITS;
          }
          if (remainder) {
            var startIndex = len - MAX_BITS;
            addChunk(this.pattern.substr(startIndex), startIndex);
          }
        } else {
          addChunk(this.pattern, 0);
        }
      }
      _createClass(BitapSearch2, [{
        key: "searchIn",
        value: function searchIn(text) {
          var _this$options = this.options, isCaseSensitive = _this$options.isCaseSensitive, includeMatches = _this$options.includeMatches;
          if (!isCaseSensitive) {
            text = text.toLowerCase();
          }
          if (this.pattern === text) {
            var _result = {
              isMatch: true,
              score: 0
            };
            if (includeMatches) {
              _result.indices = [[0, text.length - 1]];
            }
            return _result;
          }
          var _this$options2 = this.options, location = _this$options2.location, distance = _this$options2.distance, threshold = _this$options2.threshold, findAllMatches = _this$options2.findAllMatches, minMatchCharLength = _this$options2.minMatchCharLength, ignoreLocation = _this$options2.ignoreLocation;
          var allIndices = [];
          var totalScore = 0;
          var hasMatches = false;
          this.chunks.forEach(function(_ref2) {
            var pattern = _ref2.pattern, alphabet = _ref2.alphabet, startIndex = _ref2.startIndex;
            var _search = search(text, pattern, alphabet, {
              location: location + startIndex,
              distance,
              threshold,
              findAllMatches,
              minMatchCharLength,
              includeMatches,
              ignoreLocation
            }), isMatch = _search.isMatch, score = _search.score, indices = _search.indices;
            if (isMatch) {
              hasMatches = true;
            }
            totalScore += score;
            if (isMatch && indices) {
              allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
            }
          });
          var result = {
            isMatch: hasMatches,
            score: hasMatches ? totalScore / this.chunks.length : 1
          };
          if (hasMatches && includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }]);
      return BitapSearch2;
    })();
    var BaseMatch = /* @__PURE__ */ (function() {
      function BaseMatch2(pattern) {
        _classCallCheck(this, BaseMatch2);
        this.pattern = pattern;
      }
      _createClass(BaseMatch2, [{
        key: "search",
        value: function search2() {
        }
      }], [{
        key: "isMultiMatch",
        value: function isMultiMatch(pattern) {
          return getMatch(pattern, this.multiRegex);
        }
      }, {
        key: "isSingleMatch",
        value: function isSingleMatch(pattern) {
          return getMatch(pattern, this.singleRegex);
        }
      }]);
      return BaseMatch2;
    })();
    function getMatch(pattern, exp) {
      var matches = pattern.match(exp);
      return matches ? matches[1] : null;
    }
    var ExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(ExactMatch2, _BaseMatch);
      var _super = _createSuper(ExactMatch2);
      function ExactMatch2(pattern) {
        _classCallCheck(this, ExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(ExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var isMatch = text === this.pattern;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, this.pattern.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^="(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^=(.*)$/;
        }
      }]);
      return ExactMatch2;
    })(BaseMatch);
    var InverseExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(InverseExactMatch2, _BaseMatch);
      var _super = _createSuper(InverseExactMatch2);
      function InverseExactMatch2(pattern) {
        _classCallCheck(this, InverseExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(InverseExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var index = text.indexOf(this.pattern);
          var isMatch = index === -1;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "inverse-exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^!"(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^!(.*)$/;
        }
      }]);
      return InverseExactMatch2;
    })(BaseMatch);
    var PrefixExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(PrefixExactMatch2, _BaseMatch);
      var _super = _createSuper(PrefixExactMatch2);
      function PrefixExactMatch2(pattern) {
        _classCallCheck(this, PrefixExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(PrefixExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var isMatch = text.startsWith(this.pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, this.pattern.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "prefix-exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^\^"(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^\^(.*)$/;
        }
      }]);
      return PrefixExactMatch2;
    })(BaseMatch);
    var InversePrefixExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(InversePrefixExactMatch2, _BaseMatch);
      var _super = _createSuper(InversePrefixExactMatch2);
      function InversePrefixExactMatch2(pattern) {
        _classCallCheck(this, InversePrefixExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(InversePrefixExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var isMatch = !text.startsWith(this.pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "inverse-prefix-exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^!\^"(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^!\^(.*)$/;
        }
      }]);
      return InversePrefixExactMatch2;
    })(BaseMatch);
    var SuffixExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(SuffixExactMatch2, _BaseMatch);
      var _super = _createSuper(SuffixExactMatch2);
      function SuffixExactMatch2(pattern) {
        _classCallCheck(this, SuffixExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(SuffixExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var isMatch = text.endsWith(this.pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [text.length - this.pattern.length, text.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "suffix-exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^"(.*)"\$$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^(.*)\$$/;
        }
      }]);
      return SuffixExactMatch2;
    })(BaseMatch);
    var InverseSuffixExactMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(InverseSuffixExactMatch2, _BaseMatch);
      var _super = _createSuper(InverseSuffixExactMatch2);
      function InverseSuffixExactMatch2(pattern) {
        _classCallCheck(this, InverseSuffixExactMatch2);
        return _super.call(this, pattern);
      }
      _createClass(InverseSuffixExactMatch2, [{
        key: "search",
        value: function search2(text) {
          var isMatch = !text.endsWith(this.pattern);
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices: [0, text.length - 1]
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "inverse-suffix-exact";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^!"(.*)"\$$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^!(.*)\$$/;
        }
      }]);
      return InverseSuffixExactMatch2;
    })(BaseMatch);
    var FuzzyMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(FuzzyMatch2, _BaseMatch);
      var _super = _createSuper(FuzzyMatch2);
      function FuzzyMatch2(pattern) {
        var _this;
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
        _classCallCheck(this, FuzzyMatch2);
        _this = _super.call(this, pattern);
        _this._bitapSearch = new BitapSearch(pattern, {
          location,
          threshold,
          distance,
          includeMatches,
          findAllMatches,
          minMatchCharLength,
          isCaseSensitive,
          ignoreLocation
        });
        return _this;
      }
      _createClass(FuzzyMatch2, [{
        key: "search",
        value: function search2(text) {
          return this._bitapSearch.searchIn(text);
        }
      }], [{
        key: "type",
        get: function get2() {
          return "fuzzy";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^"(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^(.*)$/;
        }
      }]);
      return FuzzyMatch2;
    })(BaseMatch);
    var IncludeMatch = /* @__PURE__ */ (function(_BaseMatch) {
      _inherits(IncludeMatch2, _BaseMatch);
      var _super = _createSuper(IncludeMatch2);
      function IncludeMatch2(pattern) {
        _classCallCheck(this, IncludeMatch2);
        return _super.call(this, pattern);
      }
      _createClass(IncludeMatch2, [{
        key: "search",
        value: function search2(text) {
          var location = 0;
          var index;
          var indices = [];
          var patternLen = this.pattern.length;
          while ((index = text.indexOf(this.pattern, location)) > -1) {
            location = index + patternLen;
            indices.push([index, location - 1]);
          }
          var isMatch = !!indices.length;
          return {
            isMatch,
            score: isMatch ? 0 : 1,
            indices
          };
        }
      }], [{
        key: "type",
        get: function get2() {
          return "include";
        }
      }, {
        key: "multiRegex",
        get: function get2() {
          return /^'"(.*)"$/;
        }
      }, {
        key: "singleRegex",
        get: function get2() {
          return /^'(.*)$/;
        }
      }]);
      return IncludeMatch2;
    })(BaseMatch);
    var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
    var searchersLen = searchers.length;
    var SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
    var OR_TOKEN = "|";
    function parseQuery(pattern) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return pattern.split(OR_TOKEN).map(function(item) {
        var query = item.trim().split(SPACE_RE).filter(function(item2) {
          return item2 && !!item2.trim();
        });
        var results = [];
        for (var i = 0, len = query.length; i < len; i += 1) {
          var queryItem = query[i];
          var found = false;
          var idx = -1;
          while (!found && ++idx < searchersLen) {
            var searcher = searchers[idx];
            var token = searcher.isMultiMatch(queryItem);
            if (token) {
              results.push(new searcher(token, options));
              found = true;
            }
          }
          if (found) {
            continue;
          }
          idx = -1;
          while (++idx < searchersLen) {
            var _searcher = searchers[idx];
            var _token = _searcher.isSingleMatch(queryItem);
            if (_token) {
              results.push(new _searcher(_token, options));
              break;
            }
          }
        }
        return results;
      });
    }
    var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
    var ExtendedSearch = /* @__PURE__ */ (function() {
      function ExtendedSearch2(pattern) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance;
        _classCallCheck(this, ExtendedSearch2);
        this.query = null;
        this.options = {
          isCaseSensitive,
          includeMatches,
          minMatchCharLength,
          findAllMatches,
          ignoreLocation,
          location,
          threshold,
          distance
        };
        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
        this.query = parseQuery(this.pattern, this.options);
      }
      _createClass(ExtendedSearch2, [{
        key: "searchIn",
        value: function searchIn(text) {
          var query = this.query;
          if (!query) {
            return {
              isMatch: false,
              score: 1
            };
          }
          var _this$options = this.options, includeMatches = _this$options.includeMatches, isCaseSensitive = _this$options.isCaseSensitive;
          text = isCaseSensitive ? text : text.toLowerCase();
          var numMatches = 0;
          var allIndices = [];
          var totalScore = 0;
          for (var i = 0, qLen = query.length; i < qLen; i += 1) {
            var searchers2 = query[i];
            allIndices.length = 0;
            numMatches = 0;
            for (var j = 0, pLen = searchers2.length; j < pLen; j += 1) {
              var searcher = searchers2[j];
              var _searcher$search = searcher.search(text), isMatch = _searcher$search.isMatch, indices = _searcher$search.indices, score = _searcher$search.score;
              if (isMatch) {
                numMatches += 1;
                totalScore += score;
                if (includeMatches) {
                  var type = searcher.constructor.type;
                  if (MultiMatchSet.has(type)) {
                    allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                  } else {
                    allIndices.push(indices);
                  }
                }
              } else {
                totalScore = 0;
                numMatches = 0;
                allIndices.length = 0;
                break;
              }
            }
            if (numMatches) {
              var result = {
                isMatch: true,
                score: totalScore / numMatches
              };
              if (includeMatches) {
                result.indices = allIndices;
              }
              return result;
            }
          }
          return {
            isMatch: false,
            score: 1
          };
        }
      }], [{
        key: "condition",
        value: function condition(_, options) {
          return options.useExtendedSearch;
        }
      }]);
      return ExtendedSearch2;
    })();
    var registeredSearchers = [];
    function register() {
      registeredSearchers.push.apply(registeredSearchers, arguments);
    }
    function createSearcher(pattern, options) {
      for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
        var searcherClass = registeredSearchers[i];
        if (searcherClass.condition(pattern, options)) {
          return new searcherClass(pattern, options);
        }
      }
      return new BitapSearch(pattern, options);
    }
    var LogicalOperator = {
      AND: "$and",
      OR: "$or"
    };
    var KeyType = {
      PATH: "$path",
      PATTERN: "$val"
    };
    var isExpression = function isExpression2(query) {
      return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
    };
    var isPath = function isPath2(query) {
      return !!query[KeyType.PATH];
    };
    var isLeaf = function isLeaf2(query) {
      return !isArray(query) && isObject(query) && !isExpression(query);
    };
    var convertToExplicit = function convertToExplicit2(query) {
      return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function(key) {
        return _defineProperty({}, key, query[key]);
      }));
    };
    function parse(query, options) {
      var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$auto = _ref3.auto, auto = _ref3$auto === void 0 ? true : _ref3$auto;
      var next = function next2(query2) {
        var keys = Object.keys(query2);
        var isQueryPath = isPath(query2);
        if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
          return next2(convertToExplicit(query2));
        }
        if (isLeaf(query2)) {
          var key = isQueryPath ? query2[KeyType.PATH] : keys[0];
          var pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
          if (!isString(pattern)) {
            throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
          }
          var obj = {
            keyId: createKeyId(key),
            pattern
          };
          if (auto) {
            obj.searcher = createSearcher(pattern, options);
          }
          return obj;
        }
        var node = {
          children: [],
          operator: keys[0]
        };
        keys.forEach(function(key2) {
          var value = query2[key2];
          if (isArray(value)) {
            value.forEach(function(item) {
              node.children.push(next2(item));
            });
          }
        });
        return node;
      };
      if (!isExpression(query)) {
        query = convertToExplicit(query);
      }
      return next(query);
    }
    function computeScore(results, _ref) {
      var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm, ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
      results.forEach(function(result) {
        var totalScore = 1;
        result.matches.forEach(function(_ref2) {
          var key = _ref2.key, norm2 = _ref2.norm, score = _ref2.score;
          var weight = key ? key.weight : null;
          totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
        });
        result.score = totalScore;
      });
    }
    function transformMatches(result, data) {
      var matches = result.matches;
      data.matches = [];
      if (!isDefined(matches)) {
        return;
      }
      matches.forEach(function(match) {
        if (!isDefined(match.indices) || !match.indices.length) {
          return;
        }
        var indices = match.indices, value = match.value;
        var obj = {
          indices,
          value
        };
        if (match.key) {
          obj.key = match.key.src;
        }
        if (match.idx > -1) {
          obj.refIndex = match.idx;
        }
        data.matches.push(obj);
      });
    }
    function transformScore(result, data) {
      data.score = result.score;
    }
    function format(results, docs) {
      var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$includeScore = _ref.includeScore, includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;
      var transformers = [];
      if (includeMatches) transformers.push(transformMatches);
      if (includeScore) transformers.push(transformScore);
      return results.map(function(result) {
        var idx = result.idx;
        var data = {
          item: docs[idx],
          refIndex: idx
        };
        if (transformers.length) {
          transformers.forEach(function(transformer) {
            transformer(result, data);
          });
        }
        return data;
      });
    }
    var Fuse$1 = /* @__PURE__ */ (function() {
      function Fuse3(docs) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var index = arguments.length > 2 ? arguments[2] : void 0;
        _classCallCheck(this, Fuse3);
        this.options = _objectSpread2(_objectSpread2({}, Config), options);
        if (this.options.useExtendedSearch && false) {
          throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
        }
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
      }
      _createClass(Fuse3, [{
        key: "setCollection",
        value: function setCollection(docs, index) {
          this._docs = docs;
          if (index && !(index instanceof FuseIndex)) {
            throw new Error(INCORRECT_INDEX_TYPE);
          }
          this._myIndex = index || createIndex(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
          });
        }
      }, {
        key: "add",
        value: function add(doc) {
          if (!isDefined(doc)) {
            return;
          }
          this._docs.push(doc);
          this._myIndex.add(doc);
        }
      }, {
        key: "remove",
        value: function remove() {
          var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
            return false;
          };
          var results = [];
          for (var i = 0, len = this._docs.length; i < len; i += 1) {
            var doc = this._docs[i];
            if (predicate(doc, i)) {
              this.removeAt(i);
              i -= 1;
              len -= 1;
              results.push(doc);
            }
          }
          return results;
        }
      }, {
        key: "removeAt",
        value: function removeAt(idx) {
          this._docs.splice(idx, 1);
          this._myIndex.removeAt(idx);
        }
      }, {
        key: "getIndex",
        value: function getIndex() {
          return this._myIndex;
        }
      }, {
        key: "search",
        value: function search2(query) {
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? -1 : _ref$limit;
          var _this$options = this.options, includeMatches = _this$options.includeMatches, includeScore = _this$options.includeScore, shouldSort = _this$options.shouldSort, sortFn = _this$options.sortFn, ignoreFieldNorm = _this$options.ignoreFieldNorm;
          var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
          computeScore(results, {
            ignoreFieldNorm
          });
          if (shouldSort) {
            results.sort(sortFn);
          }
          if (isNumber(limit) && limit > -1) {
            results = results.slice(0, limit);
          }
          return format(results, this._docs, {
            includeMatches,
            includeScore
          });
        }
      }, {
        key: "_searchStringList",
        value: function _searchStringList(query) {
          var searcher = createSearcher(query, this.options);
          var records = this._myIndex.records;
          var results = [];
          records.forEach(function(_ref2) {
            var text = _ref2.v, idx = _ref2.i, norm2 = _ref2.n;
            if (!isDefined(text)) {
              return;
            }
            var _searcher$searchIn = searcher.searchIn(text), isMatch = _searcher$searchIn.isMatch, score = _searcher$searchIn.score, indices = _searcher$searchIn.indices;
            if (isMatch) {
              results.push({
                item: text,
                idx,
                matches: [{
                  score,
                  value: text,
                  norm: norm2,
                  indices
                }]
              });
            }
          });
          return results;
        }
      }, {
        key: "_searchLogical",
        value: function _searchLogical(query) {
          var _this = this;
          var expression = parse(query, this.options);
          var evaluate = function evaluate2(node, item, idx) {
            if (!node.children) {
              var keyId = node.keyId, searcher = node.searcher;
              var matches = _this._findMatches({
                key: _this._keyStore.get(keyId),
                value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                searcher
              });
              if (matches && matches.length) {
                return [{
                  idx,
                  item,
                  matches
                }];
              }
              return [];
            }
            var res = [];
            for (var i = 0, len = node.children.length; i < len; i += 1) {
              var child = node.children[i];
              var result = evaluate2(child, item, idx);
              if (result.length) {
                res.push.apply(res, _toConsumableArray(result));
              } else if (node.operator === LogicalOperator.AND) {
                return [];
              }
            }
            return res;
          };
          var records = this._myIndex.records;
          var resultMap = {};
          var results = [];
          records.forEach(function(_ref3) {
            var item = _ref3.$, idx = _ref3.i;
            if (isDefined(item)) {
              var expResults = evaluate(expression, item, idx);
              if (expResults.length) {
                if (!resultMap[idx]) {
                  resultMap[idx] = {
                    idx,
                    item,
                    matches: []
                  };
                  results.push(resultMap[idx]);
                }
                expResults.forEach(function(_ref4) {
                  var _resultMap$idx$matche;
                  var matches = _ref4.matches;
                  (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                });
              }
            }
          });
          return results;
        }
      }, {
        key: "_searchObjectList",
        value: function _searchObjectList(query) {
          var _this2 = this;
          var searcher = createSearcher(query, this.options);
          var _this$_myIndex = this._myIndex, keys = _this$_myIndex.keys, records = _this$_myIndex.records;
          var results = [];
          records.forEach(function(_ref5) {
            var item = _ref5.$, idx = _ref5.i;
            if (!isDefined(item)) {
              return;
            }
            var matches = [];
            keys.forEach(function(key, keyIndex) {
              matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
                key,
                value: item[keyIndex],
                searcher
              })));
            });
            if (matches.length) {
              results.push({
                idx,
                item,
                matches
              });
            }
          });
          return results;
        }
      }, {
        key: "_findMatches",
        value: function _findMatches(_ref6) {
          var key = _ref6.key, value = _ref6.value, searcher = _ref6.searcher;
          if (!isDefined(value)) {
            return [];
          }
          var matches = [];
          if (isArray(value)) {
            value.forEach(function(_ref7) {
              var text2 = _ref7.v, idx = _ref7.i, norm3 = _ref7.n;
              if (!isDefined(text2)) {
                return;
              }
              var _searcher$searchIn2 = searcher.searchIn(text2), isMatch2 = _searcher$searchIn2.isMatch, score2 = _searcher$searchIn2.score, indices2 = _searcher$searchIn2.indices;
              if (isMatch2) {
                matches.push({
                  score: score2,
                  key,
                  value: text2,
                  idx,
                  norm: norm3,
                  indices: indices2
                });
              }
            });
          } else {
            var text = value.v, norm2 = value.n;
            var _searcher$searchIn3 = searcher.searchIn(text), isMatch = _searcher$searchIn3.isMatch, score = _searcher$searchIn3.score, indices = _searcher$searchIn3.indices;
            if (isMatch) {
              matches.push({
                score,
                key,
                value: text,
                norm: norm2,
                indices
              });
            }
          }
          return matches;
        }
      }]);
      return Fuse3;
    })();
    Fuse$1.version = "6.5.3";
    Fuse$1.createIndex = createIndex;
    Fuse$1.parseIndex = parseIndex;
    Fuse$1.config = Config;
    {
      Fuse$1.parseQuery = parse;
    }
    {
      register(ExtendedSearch);
    }
    var Fuse2 = Fuse$1;
    module2.exports = Fuse2;
  }
});

// node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/isexe/windows.js"(exports2, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function checkPathExt(path2, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path2.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path2, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path2, options);
    }
    function isexe(path2, options, cb) {
      fs.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path2, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs.statSync(path2), path2, options);
    }
  }
});

// node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/isexe/mode.js"(exports2, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function isexe(path2, options, cb) {
      fs.stat(path2, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path2, options) {
      return checkStat(fs.statSync(path2), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// node_modules/isexe/index.js
var require_isexe = __commonJS({
  "node_modules/isexe/index.js"(exports2, module2) {
    var fs = require("fs");
    var core;
    if (process.platform === "win32" || globalThis.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path2, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path2, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path2, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path2, options) {
      try {
        return core.sync(path2, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// node_modules/which/which.js
var require_which = __commonJS({
  "node_modules/which/which.js"(exports2, module2) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path2 = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path2.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// node_modules/path-key/index.js
var require_path_key = __commonJS({
  "node_modules/path-key/index.js"(exports2, module2) {
    "use strict";
    var pathKey = (options = {}) => {
      const environment2 = options.env || process.env;
      const platform = options.platform || process.platform;
      if (platform !== "win32") {
        return "PATH";
      }
      return Object.keys(environment2).reverse().find((key) => key.toUpperCase() === "PATH") || "Path";
    };
    module2.exports = pathKey;
    module2.exports.default = pathKey;
  }
});

// node_modules/cross-spawn/lib/util/resolveCommand.js
var require_resolveCommand = __commonJS({
  "node_modules/cross-spawn/lib/util/resolveCommand.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var which = require_which();
    var getPathKey = require_path_key();
    function resolveCommandAttempt(parsed, withoutPathExt) {
      const env = parsed.options.env || process.env;
      const cwd = process.cwd();
      const hasCustomCwd = parsed.options.cwd != null;
      const shouldSwitchCwd = hasCustomCwd && process.chdir !== void 0 && !process.chdir.disabled;
      if (shouldSwitchCwd) {
        try {
          process.chdir(parsed.options.cwd);
        } catch (err) {
        }
      }
      let resolved;
      try {
        resolved = which.sync(parsed.command, {
          path: env[getPathKey({ env })],
          pathExt: withoutPathExt ? path2.delimiter : void 0
        });
      } catch (e) {
      } finally {
        if (shouldSwitchCwd) {
          process.chdir(cwd);
        }
      }
      if (resolved) {
        resolved = path2.resolve(hasCustomCwd ? parsed.options.cwd : "", resolved);
      }
      return resolved;
    }
    function resolveCommand(parsed) {
      return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
    }
    module2.exports = resolveCommand;
  }
});

// node_modules/cross-spawn/lib/util/escape.js
var require_escape = __commonJS({
  "node_modules/cross-spawn/lib/util/escape.js"(exports2, module2) {
    "use strict";
    var metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;
    function escapeCommand(arg) {
      arg = arg.replace(metaCharsRegExp, "^$1");
      return arg;
    }
    function escapeArgument(arg, doubleEscapeMetaChars) {
      arg = `${arg}`;
      arg = arg.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"');
      arg = arg.replace(/(?=(\\+?)?)\1$/, "$1$1");
      arg = `"${arg}"`;
      arg = arg.replace(metaCharsRegExp, "^$1");
      if (doubleEscapeMetaChars) {
        arg = arg.replace(metaCharsRegExp, "^$1");
      }
      return arg;
    }
    module2.exports.command = escapeCommand;
    module2.exports.argument = escapeArgument;
  }
});

// node_modules/shebang-regex/index.js
var require_shebang_regex = __commonJS({
  "node_modules/shebang-regex/index.js"(exports2, module2) {
    "use strict";
    module2.exports = /^#!(.*)/;
  }
});

// node_modules/shebang-command/index.js
var require_shebang_command = __commonJS({
  "node_modules/shebang-command/index.js"(exports2, module2) {
    "use strict";
    var shebangRegex = require_shebang_regex();
    module2.exports = (string = "") => {
      const match = string.match(shebangRegex);
      if (!match) {
        return null;
      }
      const [path2, argument] = match[0].replace(/#! ?/, "").split(" ");
      const binary = path2.split("/").pop();
      if (binary === "env") {
        return argument;
      }
      return argument ? `${binary} ${argument}` : binary;
    };
  }
});

// node_modules/cross-spawn/lib/util/readShebang.js
var require_readShebang = __commonJS({
  "node_modules/cross-spawn/lib/util/readShebang.js"(exports2, module2) {
    "use strict";
    var fs = require("fs");
    var shebangCommand = require_shebang_command();
    function readShebang(command) {
      const size = 150;
      const buffer = Buffer.alloc(size);
      let fd;
      try {
        fd = fs.openSync(command, "r");
        fs.readSync(fd, buffer, 0, size, 0);
        fs.closeSync(fd);
      } catch (e) {
      }
      return shebangCommand(buffer.toString());
    }
    module2.exports = readShebang;
  }
});

// node_modules/cross-spawn/lib/parse.js
var require_parse = __commonJS({
  "node_modules/cross-spawn/lib/parse.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var resolveCommand = require_resolveCommand();
    var escape = require_escape();
    var readShebang = require_readShebang();
    var isWin = process.platform === "win32";
    var isExecutableRegExp = /\.(?:com|exe)$/i;
    var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
    function detectShebang(parsed) {
      parsed.file = resolveCommand(parsed);
      const shebang = parsed.file && readShebang(parsed.file);
      if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
      }
      return parsed.file;
    }
    function parseNonShell(parsed) {
      if (!isWin) {
        return parsed;
      }
      const commandFile = detectShebang(parsed);
      const needsShell = !isExecutableRegExp.test(commandFile);
      if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path2.normalize(parsed.command);
        parsed.command = escape.command(parsed.command);
        parsed.args = parsed.args.map((arg) => escape.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [parsed.command].concat(parsed.args).join(" ");
        parsed.args = ["/d", "/s", "/c", `"${shellCommand}"`];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
      }
      return parsed;
    }
    function parse(command, args, options) {
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = Object.assign({}, options);
      const parsed = {
        command,
        args,
        options,
        file: void 0,
        original: {
          command,
          args
        }
      };
      return options.shell ? parsed : parseNonShell(parsed);
    }
    module2.exports = parse;
  }
});

// node_modules/cross-spawn/lib/enoent.js
var require_enoent = __commonJS({
  "node_modules/cross-spawn/lib/enoent.js"(exports2, module2) {
    "use strict";
    var isWin = process.platform === "win32";
    function notFoundError(original, syscall) {
      return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
        code: "ENOENT",
        errno: "ENOENT",
        syscall: `${syscall} ${original.command}`,
        path: original.command,
        spawnargs: original.args
      });
    }
    function hookChildProcess(cp, parsed) {
      if (!isWin) {
        return;
      }
      const originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        if (name === "exit") {
          const err = verifyENOENT(arg1, parsed);
          if (err) {
            return originalEmit.call(cp, "error", err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawn");
      }
      return null;
    }
    function verifyENOENTSync(status, parsed) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, "spawnSync");
      }
      return null;
    }
    module2.exports = {
      hookChildProcess,
      verifyENOENT,
      verifyENOENTSync,
      notFoundError
    };
  }
});

// node_modules/cross-spawn/index.js
var require_cross_spawn = __commonJS({
  "node_modules/cross-spawn/index.js"(exports2, module2) {
    "use strict";
    var cp = require("child_process");
    var parse = require_parse();
    var enoent = require_enoent();
    function spawn(command, args, options) {
      const parsed = parse(command, args, options);
      const spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    function spawnSync(command, args, options) {
      const parsed = parse(command, args, options);
      const result = cp.spawnSync(parsed.command, parsed.args, parsed.options);
      result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
      return result;
    }
    module2.exports = spawn;
    module2.exports.spawn = spawn;
    module2.exports.sync = spawnSync;
    module2.exports._parse = parse;
    module2.exports._enoent = enoent;
  }
});

// node_modules/strip-final-newline/index.js
var require_strip_final_newline = __commonJS({
  "node_modules/strip-final-newline/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (input) => {
      const LF = typeof input === "string" ? "\n" : "\n".charCodeAt();
      const CR = typeof input === "string" ? "\r" : "\r".charCodeAt();
      if (input[input.length - 1] === LF) {
        input = input.slice(0, input.length - 1);
      }
      if (input[input.length - 1] === CR) {
        input = input.slice(0, input.length - 1);
      }
      return input;
    };
  }
});

// node_modules/run-applescript/node_modules/npm-run-path/index.js
var require_npm_run_path = __commonJS({
  "node_modules/run-applescript/node_modules/npm-run-path/index.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var pathKey = require_path_key();
    var npmRunPath = (options) => {
      options = {
        cwd: process.cwd(),
        path: process.env[pathKey()],
        execPath: process.execPath,
        ...options
      };
      let previous;
      let cwdPath = path2.resolve(options.cwd);
      const result = [];
      while (previous !== cwdPath) {
        result.push(path2.join(cwdPath, "node_modules/.bin"));
        previous = cwdPath;
        cwdPath = path2.resolve(cwdPath, "..");
      }
      const execPathDir = path2.resolve(options.cwd, options.execPath, "..");
      result.push(execPathDir);
      return result.concat(options.path).join(path2.delimiter);
    };
    module2.exports = npmRunPath;
    module2.exports.default = npmRunPath;
    module2.exports.env = (options) => {
      options = {
        env: process.env,
        ...options
      };
      const env = { ...options.env };
      const path3 = pathKey({ env });
      options.path = env[path3];
      env[path3] = module2.exports(options);
      return env;
    };
  }
});

// node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/mimic-fn/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = (to, from) => {
      for (const prop of Reflect.ownKeys(from)) {
        Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
      }
      return to;
    };
    module2.exports = mimicFn;
    module2.exports.default = mimicFn;
  }
});

// node_modules/onetime/index.js
var require_onetime = __commonJS({
  "node_modules/onetime/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = require_mimic_fn();
    var calledFunctions = /* @__PURE__ */ new WeakMap();
    var onetime = (function_, options = {}) => {
      if (typeof function_ !== "function") {
        throw new TypeError("Expected a function");
      }
      let returnValue;
      let callCount = 0;
      const functionName = function_.displayName || function_.name || "<anonymous>";
      const onetime2 = function(...arguments_) {
        calledFunctions.set(onetime2, ++callCount);
        if (callCount === 1) {
          returnValue = function_.apply(this, arguments_);
          function_ = null;
        } else if (options.throw === true) {
          throw new Error(`Function \`${functionName}\` can only be called once`);
        }
        return returnValue;
      };
      mimicFn(onetime2, function_);
      calledFunctions.set(onetime2, callCount);
      return onetime2;
    };
    module2.exports = onetime;
    module2.exports.default = onetime;
    module2.exports.callCount = (function_) => {
      if (!calledFunctions.has(function_)) {
        throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
      }
      return calledFunctions.get(function_);
    };
  }
});

// node_modules/human-signals/build/src/core.js
var require_core = __commonJS({
  "node_modules/human-signals/build/src/core.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SIGNALS = void 0;
    var SIGNALS = [
      {
        name: "SIGHUP",
        number: 1,
        action: "terminate",
        description: "Terminal closed",
        standard: "posix"
      },
      {
        name: "SIGINT",
        number: 2,
        action: "terminate",
        description: "User interruption with CTRL-C",
        standard: "ansi"
      },
      {
        name: "SIGQUIT",
        number: 3,
        action: "core",
        description: "User interruption with CTRL-\\",
        standard: "posix"
      },
      {
        name: "SIGILL",
        number: 4,
        action: "core",
        description: "Invalid machine instruction",
        standard: "ansi"
      },
      {
        name: "SIGTRAP",
        number: 5,
        action: "core",
        description: "Debugger breakpoint",
        standard: "posix"
      },
      {
        name: "SIGABRT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "ansi"
      },
      {
        name: "SIGIOT",
        number: 6,
        action: "core",
        description: "Aborted",
        standard: "bsd"
      },
      {
        name: "SIGBUS",
        number: 7,
        action: "core",
        description: "Bus error due to misaligned, non-existing address or paging error",
        standard: "bsd"
      },
      {
        name: "SIGEMT",
        number: 7,
        action: "terminate",
        description: "Command should be emulated but is not implemented",
        standard: "other"
      },
      {
        name: "SIGFPE",
        number: 8,
        action: "core",
        description: "Floating point arithmetic error",
        standard: "ansi"
      },
      {
        name: "SIGKILL",
        number: 9,
        action: "terminate",
        description: "Forced termination",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGUSR1",
        number: 10,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGSEGV",
        number: 11,
        action: "core",
        description: "Segmentation fault",
        standard: "ansi"
      },
      {
        name: "SIGUSR2",
        number: 12,
        action: "terminate",
        description: "Application-specific signal",
        standard: "posix"
      },
      {
        name: "SIGPIPE",
        number: 13,
        action: "terminate",
        description: "Broken pipe or socket",
        standard: "posix"
      },
      {
        name: "SIGALRM",
        number: 14,
        action: "terminate",
        description: "Timeout or timer",
        standard: "posix"
      },
      {
        name: "SIGTERM",
        number: 15,
        action: "terminate",
        description: "Termination",
        standard: "ansi"
      },
      {
        name: "SIGSTKFLT",
        number: 16,
        action: "terminate",
        description: "Stack is empty or overflowed",
        standard: "other"
      },
      {
        name: "SIGCHLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "posix"
      },
      {
        name: "SIGCLD",
        number: 17,
        action: "ignore",
        description: "Child process terminated, paused or unpaused",
        standard: "other"
      },
      {
        name: "SIGCONT",
        number: 18,
        action: "unpause",
        description: "Unpaused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGSTOP",
        number: 19,
        action: "pause",
        description: "Paused",
        standard: "posix",
        forced: true
      },
      {
        name: "SIGTSTP",
        number: 20,
        action: "pause",
        description: 'Paused using CTRL-Z or "suspend"',
        standard: "posix"
      },
      {
        name: "SIGTTIN",
        number: 21,
        action: "pause",
        description: "Background process cannot read terminal input",
        standard: "posix"
      },
      {
        name: "SIGBREAK",
        number: 21,
        action: "terminate",
        description: "User interruption with CTRL-BREAK",
        standard: "other"
      },
      {
        name: "SIGTTOU",
        number: 22,
        action: "pause",
        description: "Background process cannot write to terminal output",
        standard: "posix"
      },
      {
        name: "SIGURG",
        number: 23,
        action: "ignore",
        description: "Socket received out-of-band data",
        standard: "bsd"
      },
      {
        name: "SIGXCPU",
        number: 24,
        action: "core",
        description: "Process timed out",
        standard: "bsd"
      },
      {
        name: "SIGXFSZ",
        number: 25,
        action: "core",
        description: "File too big",
        standard: "bsd"
      },
      {
        name: "SIGVTALRM",
        number: 26,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGPROF",
        number: 27,
        action: "terminate",
        description: "Timeout or timer",
        standard: "bsd"
      },
      {
        name: "SIGWINCH",
        number: 28,
        action: "ignore",
        description: "Terminal window size changed",
        standard: "bsd"
      },
      {
        name: "SIGIO",
        number: 29,
        action: "terminate",
        description: "I/O is available",
        standard: "other"
      },
      {
        name: "SIGPOLL",
        number: 29,
        action: "terminate",
        description: "Watched event",
        standard: "other"
      },
      {
        name: "SIGINFO",
        number: 29,
        action: "ignore",
        description: "Request for process information",
        standard: "other"
      },
      {
        name: "SIGPWR",
        number: 30,
        action: "terminate",
        description: "Device running out of power",
        standard: "systemv"
      },
      {
        name: "SIGSYS",
        number: 31,
        action: "core",
        description: "Invalid system call",
        standard: "other"
      },
      {
        name: "SIGUNUSED",
        number: 31,
        action: "terminate",
        description: "Invalid system call",
        standard: "other"
      }
    ];
    exports2.SIGNALS = SIGNALS;
  }
});

// node_modules/human-signals/build/src/realtime.js
var require_realtime = __commonJS({
  "node_modules/human-signals/build/src/realtime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SIGRTMAX = exports2.getRealtimeSignals = void 0;
    var getRealtimeSignals = function() {
      const length = SIGRTMAX - SIGRTMIN + 1;
      return Array.from({ length }, getRealtimeSignal);
    };
    exports2.getRealtimeSignals = getRealtimeSignals;
    var getRealtimeSignal = function(value, index) {
      return {
        name: `SIGRT${index + 1}`,
        number: SIGRTMIN + index,
        action: "terminate",
        description: "Application-specific signal (realtime)",
        standard: "posix"
      };
    };
    var SIGRTMIN = 34;
    var SIGRTMAX = 64;
    exports2.SIGRTMAX = SIGRTMAX;
  }
});

// node_modules/human-signals/build/src/signals.js
var require_signals = __commonJS({
  "node_modules/human-signals/build/src/signals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getSignals = void 0;
    var _os = require("os");
    var _core = require_core();
    var _realtime = require_realtime();
    var getSignals = function() {
      const realtimeSignals = (0, _realtime.getRealtimeSignals)();
      const signals = [..._core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
      return signals;
    };
    exports2.getSignals = getSignals;
    var normalizeSignal = function({
      name,
      number: defaultNumber,
      description,
      action,
      forced = false,
      standard
    }) {
      const {
        signals: { [name]: constantSignal }
      } = _os.constants;
      const supported = constantSignal !== void 0;
      const number = supported ? constantSignal : defaultNumber;
      return { name, number, description, supported, action, forced, standard };
    };
  }
});

// node_modules/human-signals/build/src/main.js
var require_main = __commonJS({
  "node_modules/human-signals/build/src/main.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.signalsByNumber = exports2.signalsByName = void 0;
    var _os = require("os");
    var _signals = require_signals();
    var _realtime = require_realtime();
    var getSignalsByName = function() {
      const signals = (0, _signals.getSignals)();
      return signals.reduce(getSignalByName, {});
    };
    var getSignalByName = function(signalByNameMemo, { name, number, description, supported, action, forced, standard }) {
      return {
        ...signalByNameMemo,
        [name]: { name, number, description, supported, action, forced, standard }
      };
    };
    var signalsByName = getSignalsByName();
    exports2.signalsByName = signalsByName;
    var getSignalsByNumber = function() {
      const signals = (0, _signals.getSignals)();
      const length = _realtime.SIGRTMAX + 1;
      const signalsA = Array.from({ length }, (value, number) => getSignalByNumber(number, signals));
      return Object.assign({}, ...signalsA);
    };
    var getSignalByNumber = function(number, signals) {
      const signal = findSignalByNumber(number, signals);
      if (signal === void 0) {
        return {};
      }
      const { name, description, supported, action, forced, standard } = signal;
      return {
        [number]: {
          name,
          number,
          description,
          supported,
          action,
          forced,
          standard
        }
      };
    };
    var findSignalByNumber = function(number, signals) {
      const signal = signals.find(({ name }) => _os.constants.signals[name] === number);
      if (signal !== void 0) {
        return signal;
      }
      return signals.find((signalA) => signalA.number === number);
    };
    var signalsByNumber = getSignalsByNumber();
    exports2.signalsByNumber = signalsByNumber;
  }
});

// node_modules/run-applescript/node_modules/execa/lib/error.js
var require_error = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/error.js"(exports2, module2) {
    "use strict";
    var { signalsByName } = require_main();
    var getErrorPrefix = ({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled }) => {
      if (timedOut) {
        return `timed out after ${timeout} milliseconds`;
      }
      if (isCanceled) {
        return "was canceled";
      }
      if (errorCode !== void 0) {
        return `failed with ${errorCode}`;
      }
      if (signal !== void 0) {
        return `was killed with ${signal} (${signalDescription})`;
      }
      if (exitCode !== void 0) {
        return `failed with exit code ${exitCode}`;
      }
      return "failed";
    };
    var makeError = ({
      stdout,
      stderr,
      all,
      error,
      signal,
      exitCode,
      command,
      escapedCommand,
      timedOut,
      isCanceled,
      killed,
      parsed: { options: { timeout } }
    }) => {
      exitCode = exitCode === null ? void 0 : exitCode;
      signal = signal === null ? void 0 : signal;
      const signalDescription = signal === void 0 ? void 0 : signalsByName[signal].description;
      const errorCode = error && error.code;
      const prefix = getErrorPrefix({ timedOut, timeout, errorCode, signal, signalDescription, exitCode, isCanceled });
      const execaMessage = `Command ${prefix}: ${command}`;
      const isError = Object.prototype.toString.call(error) === "[object Error]";
      const shortMessage = isError ? `${execaMessage}
${error.message}` : execaMessage;
      const message = [shortMessage, stderr, stdout].filter(Boolean).join("\n");
      if (isError) {
        error.originalMessage = error.message;
        error.message = message;
      } else {
        error = new Error(message);
      }
      error.shortMessage = shortMessage;
      error.command = command;
      error.escapedCommand = escapedCommand;
      error.exitCode = exitCode;
      error.signal = signal;
      error.signalDescription = signalDescription;
      error.stdout = stdout;
      error.stderr = stderr;
      if (all !== void 0) {
        error.all = all;
      }
      if ("bufferedData" in error) {
        delete error.bufferedData;
      }
      error.failed = true;
      error.timedOut = Boolean(timedOut);
      error.isCanceled = isCanceled;
      error.killed = killed && !timedOut;
      return error;
    };
    module2.exports = makeError;
  }
});

// node_modules/run-applescript/node_modules/execa/lib/stdio.js
var require_stdio = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/stdio.js"(exports2, module2) {
    "use strict";
    var aliases = ["stdin", "stdout", "stderr"];
    var hasAlias = (options) => aliases.some((alias) => options[alias] !== void 0);
    var normalizeStdio = (options) => {
      if (!options) {
        return;
      }
      const { stdio } = options;
      if (stdio === void 0) {
        return aliases.map((alias) => options[alias]);
      }
      if (hasAlias(options)) {
        throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map((alias) => `\`${alias}\``).join(", ")}`);
      }
      if (typeof stdio === "string") {
        return stdio;
      }
      if (!Array.isArray(stdio)) {
        throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
      }
      const length = Math.max(stdio.length, aliases.length);
      return Array.from({ length }, (value, index) => stdio[index]);
    };
    module2.exports = normalizeStdio;
    module2.exports.node = (options) => {
      const stdio = normalizeStdio(options);
      if (stdio === "ipc") {
        return "ipc";
      }
      if (stdio === void 0 || typeof stdio === "string") {
        return [stdio, stdio, stdio, "ipc"];
      }
      if (stdio.includes("ipc")) {
        return stdio;
      }
      return [...stdio, "ipc"];
    };
  }
});

// node_modules/signal-exit/signals.js
var require_signals2 = __commonJS({
  "node_modules/signal-exit/signals.js"(exports2, module2) {
    module2.exports = [
      "SIGABRT",
      "SIGALRM",
      "SIGHUP",
      "SIGINT",
      "SIGTERM"
    ];
    if (process.platform !== "win32") {
      module2.exports.push(
        "SIGVTALRM",
        "SIGXCPU",
        "SIGXFSZ",
        "SIGUSR2",
        "SIGTRAP",
        "SIGSYS",
        "SIGQUIT",
        "SIGIOT"
        // should detect profiler and enable/disable accordingly.
        // see #21
        // 'SIGPROF'
      );
    }
    if (process.platform === "linux") {
      module2.exports.push(
        "SIGIO",
        "SIGPOLL",
        "SIGPWR",
        "SIGSTKFLT",
        "SIGUNUSED"
      );
    }
  }
});

// node_modules/signal-exit/index.js
var require_signal_exit = __commonJS({
  "node_modules/signal-exit/index.js"(exports2, module2) {
    var process2 = globalThis.process;
    if (typeof process2 !== "object" || !process2) {
      module2.exports = function() {
      };
    } else {
      assert = require("assert");
      signals = require_signals2();
      isWin = /^win/i.test(process2.platform);
      EE = require("events");
      if (typeof EE !== "function") {
        EE = EE.EventEmitter;
      }
      if (process2.__signal_exit_emitter__) {
        emitter = process2.__signal_exit_emitter__;
      } else {
        emitter = process2.__signal_exit_emitter__ = new EE();
        emitter.count = 0;
        emitter.emitted = {};
      }
      if (!emitter.infinite) {
        emitter.setMaxListeners(Infinity);
        emitter.infinite = true;
      }
      module2.exports = function(cb, opts) {
        if (globalThis.process !== process2) {
          return;
        }
        assert.equal(typeof cb, "function", "a callback must be provided for exit handler");
        if (loaded === false) {
          load();
        }
        var ev = "exit";
        if (opts && opts.alwaysLast) {
          ev = "afterexit";
        }
        var remove = function() {
          emitter.removeListener(ev, cb);
          if (emitter.listeners("exit").length === 0 && emitter.listeners("afterexit").length === 0) {
            unload();
          }
        };
        emitter.on(ev, cb);
        return remove;
      };
      unload = function unload2() {
        if (!loaded || globalThis.process !== process2) {
          return;
        }
        loaded = false;
        signals.forEach(function(sig) {
          try {
            process2.removeListener(sig, sigListeners[sig]);
          } catch (er) {
          }
        });
        process2.emit = originalProcessEmit;
        process2.reallyExit = originalProcessReallyExit;
        emitter.count -= 1;
      };
      module2.exports.unload = unload;
      emit = function emit2(event, code, signal) {
        if (emitter.emitted[event]) {
          return;
        }
        emitter.emitted[event] = true;
        emitter.emit(event, code, signal);
      };
      sigListeners = {};
      signals.forEach(function(sig) {
        sigListeners[sig] = function listener() {
          if (process2 !== globalThis.process) {
            return;
          }
          var listeners = process2.listeners(sig);
          if (listeners.length === emitter.count) {
            unload();
            emit("exit", null, sig);
            emit("afterexit", null, sig);
            if (isWin && sig === "SIGHUP") {
              sig = "SIGINT";
            }
            process2.kill(process2.pid, sig);
          }
        };
      });
      module2.exports.signals = function() {
        return signals;
      };
      loaded = false;
      load = function load2() {
        if (loaded || process2 !== globalThis.process) {
          return;
        }
        loaded = true;
        emitter.count += 1;
        signals = signals.filter(function(sig) {
          try {
            process2.on(sig, sigListeners[sig]);
            return true;
          } catch (er) {
            return false;
          }
        });
        process2.emit = processEmit;
        process2.reallyExit = processReallyExit;
      };
      module2.exports.load = load;
      originalProcessReallyExit = process2.reallyExit;
      processReallyExit = function processReallyExit2(code) {
        if (process2 !== globalThis.process) {
          return;
        }
        process2.exitCode = code || 0;
        emit("exit", process2.exitCode, null);
        emit("afterexit", process2.exitCode, null);
        originalProcessReallyExit.call(process2, process2.exitCode);
      };
      originalProcessEmit = process2.emit;
      processEmit = function processEmit2(ev, arg) {
        if (ev === "exit" && process2 === globalThis.process) {
          if (arg !== void 0) {
            process2.exitCode = arg;
          }
          var ret = originalProcessEmit.apply(this, arguments);
          emit("exit", process2.exitCode, null);
          emit("afterexit", process2.exitCode, null);
          return ret;
        } else {
          return originalProcessEmit.apply(this, arguments);
        }
      };
    }
    var assert;
    var signals;
    var isWin;
    var EE;
    var emitter;
    var unload;
    var emit;
    var sigListeners;
    var loaded;
    var load;
    var originalProcessReallyExit;
    var processReallyExit;
    var originalProcessEmit;
    var processEmit;
  }
});

// node_modules/run-applescript/node_modules/execa/lib/kill.js
var require_kill = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/kill.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var onExit = require_signal_exit();
    var DEFAULT_FORCE_KILL_TIMEOUT = 1e3 * 5;
    var spawnedKill = (kill, signal = "SIGTERM", options = {}) => {
      const killResult = kill(signal);
      setKillTimeout(kill, signal, options, killResult);
      return killResult;
    };
    var setKillTimeout = (kill, signal, options, killResult) => {
      if (!shouldForceKill(signal, options, killResult)) {
        return;
      }
      const timeout = getForceKillAfterTimeout(options);
      const t = setTimeout(() => {
        kill("SIGKILL");
      }, timeout);
      if (t.unref) {
        t.unref();
      }
    };
    var shouldForceKill = (signal, { forceKillAfterTimeout }, killResult) => {
      return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
    };
    var isSigterm = (signal) => {
      return signal === os.constants.signals.SIGTERM || typeof signal === "string" && signal.toUpperCase() === "SIGTERM";
    };
    var getForceKillAfterTimeout = ({ forceKillAfterTimeout = true }) => {
      if (forceKillAfterTimeout === true) {
        return DEFAULT_FORCE_KILL_TIMEOUT;
      }
      if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
        throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
      }
      return forceKillAfterTimeout;
    };
    var spawnedCancel = (spawned, context) => {
      const killResult = spawned.kill();
      if (killResult) {
        context.isCanceled = true;
      }
    };
    var timeoutKill = (spawned, signal, reject) => {
      spawned.kill(signal);
      reject(Object.assign(new Error("Timed out"), { timedOut: true, signal }));
    };
    var setupTimeout = (spawned, { timeout, killSignal = "SIGTERM" }, spawnedPromise) => {
      if (timeout === 0 || timeout === void 0) {
        return spawnedPromise;
      }
      let timeoutId;
      const timeoutPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
          timeoutKill(spawned, killSignal, reject);
        }, timeout);
      });
      const safeSpawnedPromise = spawnedPromise.finally(() => {
        clearTimeout(timeoutId);
      });
      return Promise.race([timeoutPromise, safeSpawnedPromise]);
    };
    var validateTimeout = ({ timeout }) => {
      if (timeout !== void 0 && (!Number.isFinite(timeout) || timeout < 0)) {
        throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
      }
    };
    var setExitHandler = async (spawned, { cleanup, detached }, timedPromise) => {
      if (!cleanup || detached) {
        return timedPromise;
      }
      const removeExitHandler = onExit(() => {
        spawned.kill();
      });
      return timedPromise.finally(() => {
        removeExitHandler();
      });
    };
    module2.exports = {
      spawnedKill,
      spawnedCancel,
      setupTimeout,
      validateTimeout,
      setExitHandler
    };
  }
});

// node_modules/run-applescript/node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/run-applescript/node_modules/is-stream/index.js"(exports2, module2) {
    "use strict";
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module2.exports = isStream;
  }
});

// node_modules/run-applescript/node_modules/get-stream/buffer-stream.js
var require_buffer_stream = __commonJS({
  "node_modules/run-applescript/node_modules/get-stream/buffer-stream.js"(exports2, module2) {
    "use strict";
    var { PassThrough: PassThroughStream } = require("stream");
    module2.exports = (options) => {
      options = { ...options };
      const { array } = options;
      let { encoding } = options;
      const isBuffer = encoding === "buffer";
      let objectMode = false;
      if (array) {
        objectMode = !(encoding || isBuffer);
      } else {
        encoding = encoding || "utf8";
      }
      if (isBuffer) {
        encoding = null;
      }
      const stream = new PassThroughStream({ objectMode });
      if (encoding) {
        stream.setEncoding(encoding);
      }
      let length = 0;
      const chunks = [];
      stream.on("data", (chunk) => {
        chunks.push(chunk);
        if (objectMode) {
          length = chunks.length;
        } else {
          length += chunk.length;
        }
      });
      stream.getBufferedValue = () => {
        if (array) {
          return chunks;
        }
        return isBuffer ? Buffer.concat(chunks, length) : chunks.join("");
      };
      stream.getBufferedLength = () => length;
      return stream;
    };
  }
});

// node_modules/run-applescript/node_modules/get-stream/index.js
var require_get_stream = __commonJS({
  "node_modules/run-applescript/node_modules/get-stream/index.js"(exports2, module2) {
    "use strict";
    var { constants: BufferConstants } = require("buffer");
    var stream = require("stream");
    var { promisify } = require("util");
    var bufferStream = require_buffer_stream();
    var streamPipelinePromisified = promisify(stream.pipeline);
    var MaxBufferError = class extends Error {
      constructor() {
        super("maxBuffer exceeded");
        this.name = "MaxBufferError";
      }
    };
    async function getStream(inputStream, options) {
      if (!inputStream) {
        throw new Error("Expected a stream");
      }
      options = {
        maxBuffer: Infinity,
        ...options
      };
      const { maxBuffer } = options;
      const stream2 = bufferStream(options);
      await new Promise((resolve, reject) => {
        const rejectPromise = (error) => {
          if (error && stream2.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
            error.bufferedData = stream2.getBufferedValue();
          }
          reject(error);
        };
        (async () => {
          try {
            await streamPipelinePromisified(inputStream, stream2);
            resolve();
          } catch (error) {
            rejectPromise(error);
          }
        })();
        stream2.on("data", () => {
          if (stream2.getBufferedLength() > maxBuffer) {
            rejectPromise(new MaxBufferError());
          }
        });
      });
      return stream2.getBufferedValue();
    }
    module2.exports = getStream;
    module2.exports.buffer = (stream2, options) => getStream(stream2, { ...options, encoding: "buffer" });
    module2.exports.array = (stream2, options) => getStream(stream2, { ...options, array: true });
    module2.exports.MaxBufferError = MaxBufferError;
  }
});

// node_modules/merge-stream/index.js
var require_merge_stream = __commonJS({
  "node_modules/merge-stream/index.js"(exports2, module2) {
    "use strict";
    var { PassThrough } = require("stream");
    module2.exports = function() {
      var sources = [];
      var output = new PassThrough({ objectMode: true });
      output.setMaxListeners(0);
      output.add = add;
      output.isEmpty = isEmpty;
      output.on("unpipe", remove);
      Array.prototype.slice.call(arguments).forEach(add);
      return output;
      function add(source) {
        if (Array.isArray(source)) {
          source.forEach(add);
          return this;
        }
        sources.push(source);
        source.once("end", remove.bind(null, source));
        source.once("error", output.emit.bind(output, "error"));
        source.pipe(output, { end: false });
        return this;
      }
      function isEmpty() {
        return sources.length == 0;
      }
      function remove(source) {
        sources = sources.filter(function(it) {
          return it !== source;
        });
        if (!sources.length && output.readable) {
          output.end();
        }
      }
    };
  }
});

// node_modules/run-applescript/node_modules/execa/lib/stream.js
var require_stream = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/stream.js"(exports2, module2) {
    "use strict";
    var isStream = require_is_stream();
    var getStream = require_get_stream();
    var mergeStream = require_merge_stream();
    var handleInput = (spawned, input) => {
      if (input === void 0 || spawned.stdin === void 0) {
        return;
      }
      if (isStream(input)) {
        input.pipe(spawned.stdin);
      } else {
        spawned.stdin.end(input);
      }
    };
    var makeAllStream = (spawned, { all }) => {
      if (!all || !spawned.stdout && !spawned.stderr) {
        return;
      }
      const mixed = mergeStream();
      if (spawned.stdout) {
        mixed.add(spawned.stdout);
      }
      if (spawned.stderr) {
        mixed.add(spawned.stderr);
      }
      return mixed;
    };
    var getBufferedData = async (stream, streamPromise) => {
      if (!stream) {
        return;
      }
      stream.destroy();
      try {
        return await streamPromise;
      } catch (error) {
        return error.bufferedData;
      }
    };
    var getStreamPromise = (stream, { encoding, buffer, maxBuffer }) => {
      if (!stream || !buffer) {
        return;
      }
      if (encoding) {
        return getStream(stream, { encoding, maxBuffer });
      }
      return getStream.buffer(stream, { maxBuffer });
    };
    var getSpawnedResult = async ({ stdout, stderr, all }, { encoding, buffer, maxBuffer }, processDone) => {
      const stdoutPromise = getStreamPromise(stdout, { encoding, buffer, maxBuffer });
      const stderrPromise = getStreamPromise(stderr, { encoding, buffer, maxBuffer });
      const allPromise = getStreamPromise(all, { encoding, buffer, maxBuffer: maxBuffer * 2 });
      try {
        return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
      } catch (error) {
        return Promise.all([
          { error, signal: error.signal, timedOut: error.timedOut },
          getBufferedData(stdout, stdoutPromise),
          getBufferedData(stderr, stderrPromise),
          getBufferedData(all, allPromise)
        ]);
      }
    };
    var validateInputSync = ({ input }) => {
      if (isStream(input)) {
        throw new TypeError("The `input` option cannot be a stream in sync mode");
      }
    };
    module2.exports = {
      handleInput,
      makeAllStream,
      getSpawnedResult,
      validateInputSync
    };
  }
});

// node_modules/run-applescript/node_modules/execa/lib/promise.js
var require_promise = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/promise.js"(exports2, module2) {
    "use strict";
    var nativePromisePrototype = (async () => {
    })().constructor.prototype;
    var descriptors = ["then", "catch", "finally"].map((property) => [
      property,
      Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)
    ]);
    var mergePromise = (spawned, promise) => {
      for (const [property, descriptor] of descriptors) {
        const value = typeof promise === "function" ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
        Reflect.defineProperty(spawned, property, { ...descriptor, value });
      }
      return spawned;
    };
    var getSpawnedPromise = (spawned) => {
      return new Promise((resolve, reject) => {
        spawned.on("exit", (exitCode, signal) => {
          resolve({ exitCode, signal });
        });
        spawned.on("error", (error) => {
          reject(error);
        });
        if (spawned.stdin) {
          spawned.stdin.on("error", (error) => {
            reject(error);
          });
        }
      });
    };
    module2.exports = {
      mergePromise,
      getSpawnedPromise
    };
  }
});

// node_modules/run-applescript/node_modules/execa/lib/command.js
var require_command = __commonJS({
  "node_modules/run-applescript/node_modules/execa/lib/command.js"(exports2, module2) {
    "use strict";
    var normalizeArgs = (file, args = []) => {
      if (!Array.isArray(args)) {
        return [file];
      }
      return [file, ...args];
    };
    var NO_ESCAPE_REGEXP = /^[\w.-]+$/;
    var DOUBLE_QUOTES_REGEXP = /"/g;
    var escapeArg = (arg) => {
      if (typeof arg !== "string" || NO_ESCAPE_REGEXP.test(arg)) {
        return arg;
      }
      return `"${arg.replace(DOUBLE_QUOTES_REGEXP, '\\"')}"`;
    };
    var joinCommand = (file, args) => {
      return normalizeArgs(file, args).join(" ");
    };
    var getEscapedCommand = (file, args) => {
      return normalizeArgs(file, args).map((arg) => escapeArg(arg)).join(" ");
    };
    var SPACES_REGEXP = / +/g;
    var parseCommand = (command) => {
      const tokens = [];
      for (const token of command.trim().split(SPACES_REGEXP)) {
        const previousToken = tokens[tokens.length - 1];
        if (previousToken && previousToken.endsWith("\\")) {
          tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
        } else {
          tokens.push(token);
        }
      }
      return tokens;
    };
    module2.exports = {
      joinCommand,
      getEscapedCommand,
      parseCommand
    };
  }
});

// node_modules/run-applescript/node_modules/execa/index.js
var require_execa = __commonJS({
  "node_modules/run-applescript/node_modules/execa/index.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var childProcess = require("child_process");
    var crossSpawn = require_cross_spawn();
    var stripFinalNewline = require_strip_final_newline();
    var npmRunPath = require_npm_run_path();
    var onetime = require_onetime();
    var makeError = require_error();
    var normalizeStdio = require_stdio();
    var { spawnedKill, spawnedCancel, setupTimeout, validateTimeout, setExitHandler } = require_kill();
    var { handleInput, getSpawnedResult, makeAllStream, validateInputSync } = require_stream();
    var { mergePromise, getSpawnedPromise } = require_promise();
    var { joinCommand, parseCommand, getEscapedCommand } = require_command();
    var DEFAULT_MAX_BUFFER = 1e3 * 1e3 * 100;
    var getEnv = ({ env: envOption, extendEnv, preferLocal, localDir, execPath }) => {
      const env = extendEnv ? { ...process.env, ...envOption } : envOption;
      if (preferLocal) {
        return npmRunPath.env({ env, cwd: localDir, execPath });
      }
      return env;
    };
    var handleArguments = (file, args, options = {}) => {
      const parsed = crossSpawn._parse(file, args, options);
      file = parsed.command;
      args = parsed.args;
      options = parsed.options;
      options = {
        maxBuffer: DEFAULT_MAX_BUFFER,
        buffer: true,
        stripFinalNewline: true,
        extendEnv: true,
        preferLocal: false,
        localDir: options.cwd || process.cwd(),
        execPath: process.execPath,
        encoding: "utf8",
        reject: true,
        cleanup: true,
        all: false,
        windowsHide: true,
        ...options
      };
      options.env = getEnv(options);
      options.stdio = normalizeStdio(options);
      if (process.platform === "win32" && path2.basename(file, ".exe") === "cmd") {
        args.unshift("/q");
      }
      return { file, args, options, parsed };
    };
    var handleOutput = (options, value, error) => {
      if (typeof value !== "string" && !Buffer.isBuffer(value)) {
        return error === void 0 ? void 0 : "";
      }
      if (options.stripFinalNewline) {
        return stripFinalNewline(value);
      }
      return value;
    };
    var execa2 = (file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateTimeout(parsed.options);
      let spawned;
      try {
        spawned = childProcess.spawn(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        const dummySpawned = new childProcess.ChildProcess();
        const errorPromise = Promise.reject(makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        }));
        return mergePromise(dummySpawned, errorPromise);
      }
      const spawnedPromise = getSpawnedPromise(spawned);
      const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
      const processDone = setExitHandler(spawned, parsed.options, timedPromise);
      const context = { isCanceled: false };
      spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
      spawned.cancel = spawnedCancel.bind(null, spawned, context);
      const handlePromise = async () => {
        const [{ error, exitCode, signal, timedOut }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
        const stdout = handleOutput(parsed.options, stdoutResult);
        const stderr = handleOutput(parsed.options, stderrResult);
        const all = handleOutput(parsed.options, allResult);
        if (error || exitCode !== 0 || signal !== null) {
          const returnedError = makeError({
            error,
            exitCode,
            signal,
            stdout,
            stderr,
            all,
            command,
            escapedCommand,
            parsed,
            timedOut,
            isCanceled: context.isCanceled,
            killed: spawned.killed
          });
          if (!parsed.options.reject) {
            return returnedError;
          }
          throw returnedError;
        }
        return {
          command,
          escapedCommand,
          exitCode: 0,
          stdout,
          stderr,
          all,
          failed: false,
          timedOut: false,
          isCanceled: false,
          killed: false
        };
      };
      const handlePromiseOnce = onetime(handlePromise);
      handleInput(spawned, parsed.options.input);
      spawned.all = makeAllStream(spawned, parsed.options);
      return mergePromise(spawned, handlePromiseOnce);
    };
    module2.exports = execa2;
    module2.exports.sync = (file, args, options) => {
      const parsed = handleArguments(file, args, options);
      const command = joinCommand(file, args);
      const escapedCommand = getEscapedCommand(file, args);
      validateInputSync(parsed.options);
      let result;
      try {
        result = childProcess.spawnSync(parsed.file, parsed.args, parsed.options);
      } catch (error) {
        throw makeError({
          error,
          stdout: "",
          stderr: "",
          all: "",
          command,
          escapedCommand,
          parsed,
          timedOut: false,
          isCanceled: false,
          killed: false
        });
      }
      const stdout = handleOutput(parsed.options, result.stdout, result.error);
      const stderr = handleOutput(parsed.options, result.stderr, result.error);
      if (result.error || result.status !== 0 || result.signal !== null) {
        const error = makeError({
          stdout,
          stderr,
          error: result.error,
          signal: result.signal,
          exitCode: result.status,
          command,
          escapedCommand,
          parsed,
          timedOut: result.error && result.error.code === "ETIMEDOUT",
          isCanceled: false,
          killed: result.signal !== null
        });
        if (!parsed.options.reject) {
          return error;
        }
        throw error;
      }
      return {
        command,
        escapedCommand,
        exitCode: 0,
        stdout,
        stderr,
        failed: false,
        timedOut: false,
        isCanceled: false,
        killed: false
      };
    };
    module2.exports.command = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa2(file, args, options);
    };
    module2.exports.commandSync = (command, options) => {
      const [file, ...args] = parseCommand(command);
      return execa2.sync(file, args, options);
    };
    module2.exports.node = (scriptPath, args, options = {}) => {
      if (args && !Array.isArray(args) && typeof args === "object") {
        options = args;
        args = [];
      }
      const stdio = normalizeStdio.node(options);
      const defaultExecArgv = process.execArgv.filter((arg) => !arg.startsWith("--inspect"));
      const {
        nodePath = process.execPath,
        nodeOptions = defaultExecArgv
      } = options;
      return execa2(
        nodePath,
        [
          ...nodeOptions,
          scriptPath,
          ...Array.isArray(args) ? args : []
        ],
        {
          ...options,
          stdin: void 0,
          stdout: void 0,
          stderr: void 0,
          stdio,
          shell: false
        }
      );
    };
  }
});

// src/emoji.tsx
var emoji_exports = {};
__export(emoji_exports, {
  default: () => Main
});
module.exports = __toCommonJS(emoji_exports);
var import_api4 = require("@raycast/api");
var import_react3 = require("react");

// src/vendor/generate-emoji-list/createEmojiList.ts
var import_api = require("@raycast/api");
var import_node_fs = require("node:fs");
var import_node_path = __toESM(require("node:path"));

// src/vendor/generate-emoji-list/getEmojiShortCodes.ts
var import_cross_fetch = __toESM(require_node_ponyfill());
var UNICODE_REGEX = /\/([\d\w-]*?).png/;
async function getEmojiShortCodes() {
  const shortCodes2 = await fetchEmojiShortcuts();
  const emojiMap = /* @__PURE__ */ new Map();
  Object.entries(shortCodes2).forEach(([shortCode, url]) => {
    const unicode = url.match(UNICODE_REGEX);
    if (unicode === null || unicode[1] == null) return;
    const emojis = unicode[1].split("-").map((str) => parseInt(`0x${str}`, 16)).filter(Boolean).map((charCode) => String.fromCodePoint(charCode)).join("\u200D");
    const previousShortCode = emojiMap.get(emojis);
    if (previousShortCode != null) {
      emojiMap.set(emojis, [...previousShortCode, shortCode]);
    } else {
      emojiMap.set(emojis, [shortCode]);
    }
  });
  return emojiMap;
}
var GITHUB_API_EMOJI_URL = "https://api.github.com/emojis";
async function fetchEmojiShortcuts() {
  const response = await (0, import_cross_fetch.fetch)(GITHUB_API_EMOJI_URL);
  const json = await response.json();
  return json;
}

// src/vendor/generate-emoji-list/createEmojiList.ts
async function createEmojiList(options) {
  const { unicodeVersion: unicodeVersion2 = "13.0", features = { shortCodes: true } } = options ?? {};
  const emojiList = await getEmojiList(unicodeVersion2);
  if (features.shortCodes) {
    const shortCodeMap = await getEmojiShortCodes();
    return emojiList.map((category) => ({
      ...category,
      emojis: category.emojis.map(({ emoji, description, modifiers }) => ({
        emoji,
        description,
        modifiers,
        shortCode: shortCodeMap.get(emoji) ?? []
      }))
    }));
  }
  return emojiList;
}
var LINE_REGEX = /^.*?; fully-qualified\s+# (.*?) (?:E\d+\.\d+ )?(.*)$/;
var GROUP_REGEX = /^# group: (.*?)$/;
async function getEmojiList(unicodeVersion2) {
  const content = (0, import_node_fs.readFileSync)(import_node_path.default.join(import_api.environment.assetsPath, `${unicodeVersion2}/emoji-test.txt`), {
    encoding: "utf8"
  });
  const lines = content.replace(/\r/g, "").split(/\n/);
  const categories = [];
  for (const line of lines) {
    const groupMatch = line.match(GROUP_REGEX);
    if (groupMatch !== null) {
      categories.push({
        category: groupMatch[1],
        emojis: []
      });
    } else {
      const emojiMatch = line.match(LINE_REGEX);
      if (emojiMatch !== null) {
        const [, emoji, description] = emojiMatch;
        const currentCategory = categories[categories.length - 1];
        if (description.includes("skin tone")) {
          const lastEmoji = currentCategory.emojis[currentCategory.emojis.length - 1];
          if (!lastEmoji.modifiers.includes("skin-tone")) {
            lastEmoji.modifiers.push("skin-tone");
          }
        } else {
          currentCategory.emojis.push({
            emoji,
            description,
            modifiers: []
          });
        }
      }
    }
  }
  return categories.filter((category) => category.emojis.length > 0);
}

// node_modules/emojilib/dist/emoji-en-US.json
var emoji_en_US_default = {
  "\u{1F600}": [
    "grinning_face",
    "face",
    "smile",
    "happy",
    "joy",
    ":D",
    "grin"
  ],
  "\u{1F603}": [
    "grinning_face_with_big_eyes",
    "face",
    "happy",
    "joy",
    "haha",
    ":D",
    ":)",
    "smile",
    "funny"
  ],
  "\u{1F604}": [
    "grinning_face_with_smiling_eyes",
    "face",
    "happy",
    "joy",
    "funny",
    "haha",
    "laugh",
    "like",
    ":D",
    ":)",
    "smile"
  ],
  "\u{1F601}": [
    "beaming_face_with_smiling_eyes",
    "face",
    "happy",
    "smile",
    "joy",
    "kawaii"
  ],
  "\u{1F606}": [
    "grinning_squinting_face",
    "happy",
    "joy",
    "lol",
    "satisfied",
    "haha",
    "face",
    "glad",
    "XD",
    "laugh"
  ],
  "\u{1F605}": [
    "grinning_face_with_sweat",
    "face",
    "hot",
    "happy",
    "laugh",
    "sweat",
    "smile",
    "relief"
  ],
  "\u{1F923}": [
    "rolling_on_the_floor_laughing",
    "face",
    "rolling",
    "floor",
    "laughing",
    "lol",
    "haha",
    "rofl"
  ],
  "\u{1F602}": [
    "face_with_tears_of_joy",
    "face",
    "cry",
    "tears",
    "weep",
    "happy",
    "happytears",
    "haha"
  ],
  "\u{1F642}": [
    "slightly_smiling_face",
    "face",
    "smile"
  ],
  "\u{1F643}": [
    "upside_down_face",
    "face",
    "flipped",
    "silly",
    "smile"
  ],
  "\u{1F609}": [
    "winking_face",
    "face",
    "happy",
    "mischievous",
    "secret",
    ";)",
    "smile",
    "eye"
  ],
  "\u{1F60A}": [
    "smiling_face_with_smiling_eyes",
    "face",
    "smile",
    "happy",
    "flushed",
    "crush",
    "embarrassed",
    "shy",
    "joy"
  ],
  "\u{1F607}": [
    "smiling_face_with_halo",
    "face",
    "angel",
    "heaven",
    "halo",
    "innocent"
  ],
  "\u{1F970}": [
    "smiling_face_with_hearts",
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "crush",
    "hearts",
    "adore"
  ],
  "\u{1F60D}": [
    "smiling_face_with_heart_eyes",
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "crush",
    "heart"
  ],
  "\u{1F929}": [
    "star_struck",
    "face",
    "smile",
    "starry",
    "eyes",
    "grinning"
  ],
  "\u{1F618}": [
    "face_blowing_a_kiss",
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  "\u{1F617}": [
    "kissing_face",
    "love",
    "like",
    "face",
    "3",
    "valentines",
    "infatuation",
    "kiss"
  ],
  "\u263A\uFE0F": [
    "smiling_face",
    "face",
    "blush",
    "massage",
    "happiness"
  ],
  "\u{1F61A}": [
    "kissing_face_with_closed_eyes",
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  "\u{1F619}": [
    "kissing_face_with_smiling_eyes",
    "face",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  "\u{1F60B}": [
    "face_savoring_food",
    "happy",
    "joy",
    "tongue",
    "smile",
    "face",
    "silly",
    "yummy",
    "nom",
    "delicious",
    "savouring"
  ],
  "\u{1F61B}": [
    "face_with_tongue",
    "face",
    "prank",
    "childish",
    "playful",
    "mischievous",
    "smile",
    "tongue"
  ],
  "\u{1F61C}": [
    "winking_face_with_tongue",
    "face",
    "prank",
    "childish",
    "playful",
    "mischievous",
    "smile",
    "wink",
    "tongue"
  ],
  "\u{1F92A}": [
    "zany_face",
    "face",
    "goofy",
    "crazy"
  ],
  "\u{1F61D}": [
    "squinting_face_with_tongue",
    "face",
    "prank",
    "playful",
    "mischievous",
    "smile",
    "tongue"
  ],
  "\u{1F911}": [
    "money_mouth_face",
    "face",
    "rich",
    "dollar",
    "money"
  ],
  "\u{1F917}": [
    "hugging_face",
    "face",
    "smile",
    "hug"
  ],
  "\u{1F92D}": [
    "face_with_hand_over_mouth",
    "face",
    "whoops",
    "shock",
    "surprise"
  ],
  "\u{1F92B}": [
    "shushing_face",
    "face",
    "quiet",
    "shhh"
  ],
  "\u{1F914}": [
    "thinking_face",
    "face",
    "hmmm",
    "think",
    "consider"
  ],
  "\u{1F910}": [
    "zipper_mouth_face",
    "face",
    "sealed",
    "zipper",
    "secret"
  ],
  "\u{1F928}": [
    "face_with_raised_eyebrow",
    "face",
    "distrust",
    "scepticism",
    "disapproval",
    "disbelief",
    "surprise",
    "suspicious"
  ],
  "\u{1F610}": [
    "neutral_face",
    "indifference",
    "meh",
    ":|",
    "neutral"
  ],
  "\u{1F611}": [
    "expressionless_face",
    "face",
    "indifferent",
    "-_-",
    "meh",
    "deadpan"
  ],
  "\u{1F636}": [
    "face_without_mouth",
    "face"
  ],
  "\u{1F60F}": [
    "smirking_face",
    "face",
    "smile",
    "mean",
    "prank",
    "smug",
    "sarcasm"
  ],
  "\u{1F612}": [
    "unamused_face",
    "indifference",
    "bored",
    "straight face",
    "serious",
    "sarcasm",
    "unimpressed",
    "skeptical",
    "dubious",
    "ugh",
    "side_eye"
  ],
  "\u{1F644}": [
    "face_with_rolling_eyes",
    "face",
    "eyeroll",
    "frustrated"
  ],
  "\u{1F62C}": [
    "grimacing_face",
    "face",
    "grimace",
    "teeth"
  ],
  "\u{1F925}": [
    "lying_face",
    "face",
    "lie",
    "pinocchio"
  ],
  "\u{1F60C}": [
    "relieved_face",
    "face",
    "relaxed",
    "phew",
    "massage",
    "happiness"
  ],
  "\u{1F614}": [
    "pensive_face",
    "face",
    "sad",
    "depressed",
    "upset"
  ],
  "\u{1F62A}": [
    "sleepy_face",
    "face",
    "tired",
    "rest",
    "nap"
  ],
  "\u{1F924}": [
    "drooling_face",
    "face"
  ],
  "\u{1F634}": [
    "sleeping_face",
    "face",
    "tired",
    "sleepy",
    "night",
    "zzz"
  ],
  "\u{1F637}": [
    "face_with_medical_mask",
    "face",
    "sick",
    "ill",
    "disease",
    "covid"
  ],
  "\u{1F912}": [
    "face_with_thermometer",
    "sick",
    "temperature",
    "thermometer",
    "cold",
    "fever",
    "covid"
  ],
  "\u{1F915}": [
    "face_with_head_bandage",
    "injured",
    "clumsy",
    "bandage",
    "hurt"
  ],
  "\u{1F922}": [
    "nauseated_face",
    "face",
    "vomit",
    "gross",
    "green",
    "sick",
    "throw up",
    "ill"
  ],
  "\u{1F92E}": [
    "face_vomiting",
    "face",
    "sick"
  ],
  "\u{1F927}": [
    "sneezing_face",
    "face",
    "gesundheit",
    "sneeze",
    "sick",
    "allergy"
  ],
  "\u{1F975}": [
    "hot_face",
    "face",
    "feverish",
    "heat",
    "red",
    "sweating"
  ],
  "\u{1F976}": [
    "cold_face",
    "face",
    "blue",
    "freezing",
    "frozen",
    "frostbite",
    "icicles"
  ],
  "\u{1F974}": [
    "woozy_face",
    "face",
    "dizzy",
    "intoxicated",
    "tipsy",
    "wavy"
  ],
  "\u{1F635}": [
    "dizzy_face",
    "spent",
    "unconscious",
    "xox",
    "dizzy"
  ],
  "\u{1F92F}": [
    "exploding_head",
    "face",
    "shocked",
    "mind",
    "blown"
  ],
  "\u{1F920}": [
    "cowboy_hat_face",
    "face",
    "cowgirl",
    "hat"
  ],
  "\u{1F973}": [
    "partying_face",
    "face",
    "celebration",
    "woohoo"
  ],
  "\u{1F60E}": [
    "smiling_face_with_sunglasses",
    "face",
    "cool",
    "smile",
    "summer",
    "beach",
    "sunglass"
  ],
  "\u{1F913}": [
    "nerd_face",
    "face",
    "nerdy",
    "geek",
    "dork"
  ],
  "\u{1F9D0}": [
    "face_with_monocle",
    "face",
    "stuffy",
    "wealthy"
  ],
  "\u{1F615}": [
    "confused_face",
    "face",
    "indifference",
    "huh",
    "weird",
    "hmmm",
    ":/"
  ],
  "\u{1F61F}": [
    "worried_face",
    "face",
    "concern",
    "nervous",
    ":("
  ],
  "\u{1F641}": [
    "slightly_frowning_face",
    "face",
    "frowning",
    "disappointed",
    "sad",
    "upset"
  ],
  "\u2639\uFE0F": [
    "frowning_face",
    "face",
    "sad",
    "upset",
    "frown"
  ],
  "\u{1F62E}": [
    "face_with_open_mouth",
    "face",
    "surprise",
    "impressed",
    "wow",
    "whoa",
    ":O"
  ],
  "\u{1F62F}": [
    "hushed_face",
    "face",
    "woo",
    "shh"
  ],
  "\u{1F632}": [
    "astonished_face",
    "face",
    "xox",
    "surprised",
    "poisoned"
  ],
  "\u{1F633}": [
    "flushed_face",
    "face",
    "blush",
    "shy",
    "flattered"
  ],
  "\u{1F97A}": [
    "pleading_face",
    "face",
    "begging",
    "mercy",
    "cry",
    "tears",
    "sad",
    "grievance"
  ],
  "\u{1F626}": [
    "frowning_face_with_open_mouth",
    "face",
    "aw",
    "what"
  ],
  "\u{1F627}": [
    "anguished_face",
    "face",
    "stunned",
    "nervous"
  ],
  "\u{1F628}": [
    "fearful_face",
    "face",
    "scared",
    "terrified",
    "nervous"
  ],
  "\u{1F630}": [
    "anxious_face_with_sweat",
    "face",
    "nervous",
    "sweat"
  ],
  "\u{1F625}": [
    "sad_but_relieved_face",
    "face",
    "phew",
    "sweat",
    "nervous"
  ],
  "\u{1F622}": [
    "crying_face",
    "face",
    "tears",
    "sad",
    "depressed",
    "upset",
    ":'("
  ],
  "\u{1F62D}": [
    "loudly_crying_face",
    "sobbing",
    "face",
    "cry",
    "tears",
    "sad",
    "upset",
    "depressed"
  ],
  "\u{1F631}": [
    "face_screaming_in_fear",
    "face",
    "munch",
    "scared",
    "omg"
  ],
  "\u{1F616}": [
    "confounded_face",
    "face",
    "confused",
    "sick",
    "unwell",
    "oops",
    ":S"
  ],
  "\u{1F623}": [
    "persevering_face",
    "face",
    "sick",
    "no",
    "upset",
    "oops"
  ],
  "\u{1F61E}": [
    "disappointed_face",
    "face",
    "sad",
    "upset",
    "depressed",
    ":("
  ],
  "\u{1F613}": [
    "downcast_face_with_sweat",
    "face",
    "hot",
    "sad",
    "tired",
    "exercise"
  ],
  "\u{1F629}": [
    "weary_face",
    "face",
    "tired",
    "sleepy",
    "sad",
    "frustrated",
    "upset"
  ],
  "\u{1F62B}": [
    "tired_face",
    "sick",
    "whine",
    "upset",
    "frustrated"
  ],
  "\u{1F971}": [
    "yawning_face",
    "tired",
    "sleepy"
  ],
  "\u{1F624}": [
    "face_with_steam_from_nose",
    "face",
    "gas",
    "phew",
    "proud",
    "pride",
    "triumph"
  ],
  "\u{1F621}": [
    "pouting_face",
    "angry",
    "mad",
    "hate",
    "despise"
  ],
  "\u{1F620}": [
    "angry_face",
    "mad",
    "face",
    "annoyed",
    "frustrated"
  ],
  "\u{1F92C}": [
    "face_with_symbols_on_mouth",
    "face",
    "swearing",
    "cursing",
    "cussing",
    "profanity",
    "expletive"
  ],
  "\u{1F608}": [
    "smiling_face_with_horns",
    "devil",
    "horns"
  ],
  "\u{1F47F}": [
    "angry_face_with_horns",
    "devil",
    "angry",
    "horns"
  ],
  "\u{1F480}": [
    "skull",
    "dead",
    "skeleton",
    "creepy",
    "death",
    "dead"
  ],
  "\u2620\uFE0F": [
    "skull_and_crossbones",
    "poison",
    "danger",
    "deadly",
    "scary",
    "death",
    "pirate",
    "evil"
  ],
  "\u{1F4A9}": [
    "pile_of_poo",
    "hankey",
    "shitface",
    "fail",
    "turd",
    "shit"
  ],
  "\u{1F921}": [
    "clown_face",
    "face"
  ],
  "\u{1F479}": [
    "ogre",
    "monster",
    "red",
    "mask",
    "halloween",
    "scary",
    "creepy",
    "devil",
    "demon",
    "japanese_ogre"
  ],
  "\u{1F47A}": [
    "goblin",
    "red",
    "evil",
    "mask",
    "monster",
    "scary",
    "creepy",
    "japanese_goblin"
  ],
  "\u{1F47B}": [
    "ghost",
    "halloween",
    "spooky",
    "scary"
  ],
  "\u{1F47D}": [
    "alien",
    "UFO",
    "paul",
    "weird",
    "outer_space"
  ],
  "\u{1F47E}": [
    "alien_monster",
    "game",
    "arcade",
    "play"
  ],
  "\u{1F916}": [
    "robot",
    "computer",
    "machine",
    "bot"
  ],
  "\u{1F63A}": [
    "grinning_cat",
    "animal",
    "cats",
    "happy",
    "smile"
  ],
  "\u{1F638}": [
    "grinning_cat_with_smiling_eyes",
    "animal",
    "cats",
    "smile"
  ],
  "\u{1F639}": [
    "cat_with_tears_of_joy",
    "animal",
    "cats",
    "haha",
    "happy",
    "tears"
  ],
  "\u{1F63B}": [
    "smiling_cat_with_heart_eyes",
    "animal",
    "love",
    "like",
    "affection",
    "cats",
    "valentines",
    "heart"
  ],
  "\u{1F63C}": [
    "cat_with_wry_smile",
    "animal",
    "cats",
    "smirk"
  ],
  "\u{1F63D}": [
    "kissing_cat",
    "animal",
    "cats",
    "kiss"
  ],
  "\u{1F640}": [
    "weary_cat",
    "animal",
    "cats",
    "munch",
    "scared",
    "scream"
  ],
  "\u{1F63F}": [
    "crying_cat",
    "animal",
    "tears",
    "weep",
    "sad",
    "cats",
    "upset",
    "cry"
  ],
  "\u{1F63E}": [
    "pouting_cat",
    "animal",
    "cats"
  ],
  "\u{1F648}": [
    "see_no_evil_monkey",
    "monkey",
    "animal",
    "nature",
    "haha"
  ],
  "\u{1F649}": [
    "hear_no_evil_monkey",
    "animal",
    "monkey",
    "nature"
  ],
  "\u{1F64A}": [
    "speak_no_evil_monkey",
    "monkey",
    "animal",
    "nature",
    "omg"
  ],
  "\u{1F48B}": [
    "kiss_mark",
    "face",
    "lips",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F48C}": [
    "love_letter",
    "email",
    "like",
    "affection",
    "envelope",
    "valentines"
  ],
  "\u{1F498}": [
    "heart_with_arrow",
    "love",
    "like",
    "heart",
    "affection",
    "valentines"
  ],
  "\u{1F49D}": [
    "heart_with_ribbon",
    "love",
    "valentines"
  ],
  "\u{1F496}": [
    "sparkling_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F497}": [
    "growing_heart",
    "like",
    "love",
    "affection",
    "valentines",
    "pink"
  ],
  "\u{1F493}": [
    "beating_heart",
    "love",
    "like",
    "affection",
    "valentines",
    "pink",
    "heart"
  ],
  "\u{1F49E}": [
    "revolving_hearts",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F495}": [
    "two_hearts",
    "love",
    "like",
    "affection",
    "valentines",
    "heart"
  ],
  "\u{1F49F}": [
    "heart_decoration",
    "purple-square",
    "love",
    "like"
  ],
  "\u2763\uFE0F": [
    "heart_exclamation",
    "decoration",
    "love"
  ],
  "\u{1F494}": [
    "broken_heart",
    "sad",
    "sorry",
    "break",
    "heart",
    "heartbreak"
  ],
  "\u2764\uFE0F": [
    "red_heart",
    "love",
    "like",
    "valentines"
  ],
  "\u{1F9E1}": [
    "orange_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F49B}": [
    "yellow_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F49A}": [
    "green_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F499}": [
    "blue_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F49C}": [
    "purple_heart",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  "\u{1F90E}": [
    "brown_heart",
    "coffee"
  ],
  "\u{1F5A4}": [
    "black_heart",
    "evil"
  ],
  "\u{1F90D}": [
    "white_heart",
    "pure"
  ],
  "\u{1F4AF}": [
    "hundred_points",
    "score",
    "perfect",
    "numbers",
    "century",
    "exam",
    "quiz",
    "test",
    "pass",
    "hundred",
    "100"
  ],
  "\u{1F4A2}": [
    "anger_symbol",
    "angry",
    "mad"
  ],
  "\u{1F4A5}": [
    "collision",
    "bomb",
    "explode",
    "explosion",
    "blown"
  ],
  "\u{1F4AB}": [
    "dizzy",
    "star",
    "sparkle",
    "shoot",
    "magic"
  ],
  "\u{1F4A6}": [
    "sweat_droplets",
    "water",
    "drip",
    "oops"
  ],
  "\u{1F4A8}": [
    "dashing_away",
    "wind",
    "air",
    "fast",
    "shoo",
    "fart",
    "smoke",
    "puff"
  ],
  "\u{1F573}\uFE0F": [
    "hole",
    "embarrassing"
  ],
  "\u{1F4A3}": [
    "bomb",
    "boom",
    "explode",
    "explosion",
    "terrorism"
  ],
  "\u{1F4AC}": [
    "speech_balloon",
    "bubble",
    "words",
    "message",
    "talk",
    "chatting"
  ],
  "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F": [
    "eye_in_speech_bubble",
    "info"
  ],
  "\u{1F5E8}\uFE0F": [
    "left_speech_bubble",
    "words",
    "message",
    "talk",
    "chatting"
  ],
  "\u{1F5EF}\uFE0F": [
    "right_anger_bubble",
    "caption",
    "speech",
    "thinking",
    "mad"
  ],
  "\u{1F4AD}": [
    "thought_balloon",
    "bubble",
    "cloud",
    "speech",
    "thinking",
    "dream"
  ],
  "\u{1F4A4}": [
    "zzz",
    "sleepy",
    "tired",
    "dream"
  ],
  "\u{1F44B}": [
    "waving_hand",
    "wave",
    "hands",
    "gesture",
    "goodbye",
    "solong",
    "farewell",
    "hello",
    "hi",
    "palm"
  ],
  "\u{1F91A}": [
    "raised_back_of_hand",
    "fingers",
    "raised",
    "backhand"
  ],
  "\u{1F590}\uFE0F": [
    "hand_with_fingers_splayed",
    "hand",
    "fingers",
    "palm"
  ],
  "\u270B": [
    "raised_hand",
    "fingers",
    "stop",
    "highfive",
    "palm",
    "ban"
  ],
  "\u{1F596}": [
    "vulcan_salute",
    "hand",
    "fingers",
    "spock",
    "star trek"
  ],
  "\u{1F44C}": [
    "ok_hand",
    "fingers",
    "limbs",
    "perfect",
    "ok",
    "okay"
  ],
  "\u{1F90F}": [
    "pinching_hand",
    "tiny",
    "small",
    "size"
  ],
  "\u270C\uFE0F": [
    "victory_hand",
    "fingers",
    "ohyeah",
    "hand",
    "peace",
    "victory",
    "two"
  ],
  "\u{1F91E}": [
    "crossed_fingers",
    "good",
    "lucky"
  ],
  "\u{1F91F}": [
    "love_you_gesture",
    "hand",
    "fingers",
    "gesture"
  ],
  "\u{1F918}": [
    "sign_of_the_horns",
    "hand",
    "fingers",
    "evil_eye",
    "sign_of_horns",
    "rock_on"
  ],
  "\u{1F919}": [
    "call_me_hand",
    "hands",
    "gesture",
    "shaka"
  ],
  "\u{1F448}": [
    "backhand_index_pointing_left",
    "direction",
    "fingers",
    "hand",
    "left"
  ],
  "\u{1F449}": [
    "backhand_index_pointing_right",
    "fingers",
    "hand",
    "direction",
    "right"
  ],
  "\u{1F446}": [
    "backhand_index_pointing_up",
    "fingers",
    "hand",
    "direction",
    "up"
  ],
  "\u{1F595}": [
    "middle_finger",
    "hand",
    "fingers",
    "rude",
    "middle",
    "flipping"
  ],
  "\u{1F447}": [
    "backhand_index_pointing_down",
    "fingers",
    "hand",
    "direction",
    "down"
  ],
  "\u261D\uFE0F": [
    "index_pointing_up",
    "hand",
    "fingers",
    "direction",
    "up"
  ],
  "\u{1F44D}": [
    "thumbs_up",
    "thumbsup",
    "yes",
    "awesome",
    "good",
    "agree",
    "accept",
    "cool",
    "hand",
    "like",
    "+1"
  ],
  "\u{1F44E}": [
    "thumbs_down",
    "thumbsdown",
    "no",
    "dislike",
    "hand",
    "-1"
  ],
  "\u270A": [
    "raised_fist",
    "fingers",
    "hand",
    "grasp"
  ],
  "\u{1F44A}": [
    "oncoming_fist",
    "angry",
    "violence",
    "fist",
    "hit",
    "attack",
    "hand"
  ],
  "\u{1F91B}": [
    "left_facing_fist",
    "hand",
    "fistbump"
  ],
  "\u{1F91C}": [
    "right_facing_fist",
    "hand",
    "fistbump"
  ],
  "\u{1F44F}": [
    "clapping_hands",
    "hands",
    "praise",
    "applause",
    "congrats",
    "yay"
  ],
  "\u{1F64C}": [
    "raising_hands",
    "gesture",
    "hooray",
    "yea",
    "celebration",
    "hands"
  ],
  "\u{1F450}": [
    "open_hands",
    "fingers",
    "butterfly",
    "hands",
    "open"
  ],
  "\u{1F932}": [
    "palms_up_together",
    "hands",
    "gesture",
    "cupped",
    "prayer"
  ],
  "\u{1F91D}": [
    "handshake",
    "agreement",
    "shake"
  ],
  "\u{1F64F}": [
    "folded_hands",
    "please",
    "hope",
    "wish",
    "namaste",
    "highfive",
    "pray",
    "thank you",
    "thanks",
    "appreciate"
  ],
  "\u270D\uFE0F": [
    "writing_hand",
    "lower_left_ballpoint_pen",
    "stationery",
    "write",
    "compose"
  ],
  "\u{1F485}": [
    "nail_polish",
    "nail_care",
    "beauty",
    "manicure",
    "finger",
    "fashion",
    "nail",
    "slay"
  ],
  "\u{1F933}": [
    "selfie",
    "camera",
    "phone"
  ],
  "\u{1F4AA}": [
    "flexed_biceps",
    "arm",
    "flex",
    "hand",
    "summer",
    "strong",
    "biceps"
  ],
  "\u{1F9BE}": [
    "mechanical_arm",
    "accessibility"
  ],
  "\u{1F9BF}": [
    "mechanical_leg",
    "accessibility"
  ],
  "\u{1F9B5}": [
    "leg",
    "kick",
    "limb"
  ],
  "\u{1F9B6}": [
    "foot",
    "kick",
    "stomp"
  ],
  "\u{1F442}": [
    "ear",
    "face",
    "hear",
    "sound",
    "listen"
  ],
  "\u{1F9BB}": [
    "ear_with_hearing_aid",
    "accessibility"
  ],
  "\u{1F443}": [
    "nose",
    "smell",
    "sniff"
  ],
  "\u{1F9E0}": [
    "brain",
    "smart",
    "intelligent"
  ],
  "\u{1F9B7}": [
    "tooth",
    "teeth",
    "dentist"
  ],
  "\u{1F9B4}": [
    "bone",
    "skeleton"
  ],
  "\u{1F440}": [
    "eyes",
    "look",
    "watch",
    "stalk",
    "peek",
    "see"
  ],
  "\u{1F441}\uFE0F": [
    "eye",
    "face",
    "look",
    "see",
    "watch",
    "stare"
  ],
  "\u{1F445}": [
    "tongue",
    "mouth",
    "playful"
  ],
  "\u{1F444}": [
    "mouth",
    "kiss"
  ],
  "\u{1F476}": [
    "baby",
    "child",
    "boy",
    "girl",
    "toddler"
  ],
  "\u{1F9D2}": [
    "child",
    "gender-neutral",
    "young"
  ],
  "\u{1F466}": [
    "boy",
    "man",
    "male",
    "guy",
    "teenager"
  ],
  "\u{1F467}": [
    "girl",
    "female",
    "woman",
    "teenager"
  ],
  "\u{1F9D1}": [
    "person",
    "gender-neutral"
  ],
  "\u{1F471}": [
    "person_blond_hair",
    "hairstyle"
  ],
  "\u{1F468}": [
    "man",
    "mustache",
    "father",
    "dad",
    "guy",
    "classy",
    "sir",
    "moustache"
  ],
  "\u{1F9D4}": [
    "man_beard",
    "person",
    "bewhiskered"
  ],
  "\u{1F468}\u200D\u{1F9B0}": [
    "man_red_hair",
    "hairstyle"
  ],
  "\u{1F468}\u200D\u{1F9B1}": [
    "man_curly_hair",
    "hairstyle"
  ],
  "\u{1F468}\u200D\u{1F9B3}": [
    "man_white_hair",
    "old",
    "elder"
  ],
  "\u{1F468}\u200D\u{1F9B2}": [
    "man_bald",
    "hairless"
  ],
  "\u{1F469}": [
    "woman",
    "female",
    "girls",
    "lady"
  ],
  "\u{1F469}\u200D\u{1F9B0}": [
    "woman_red_hair",
    "hairstyle"
  ],
  "\u{1F9D1}\u200D\u{1F9B0}": [
    "person_red_hair",
    "hairstyle"
  ],
  "\u{1F469}\u200D\u{1F9B1}": [
    "woman_curly_hair",
    "hairstyle"
  ],
  "\u{1F9D1}\u200D\u{1F9B1}": [
    "person_curly_hair",
    "hairstyle"
  ],
  "\u{1F469}\u200D\u{1F9B3}": [
    "woman_white_hair",
    "old",
    "elder"
  ],
  "\u{1F9D1}\u200D\u{1F9B3}": [
    "person_white_hair",
    "elder",
    "old"
  ],
  "\u{1F469}\u200D\u{1F9B2}": [
    "woman_bald",
    "hairless"
  ],
  "\u{1F9D1}\u200D\u{1F9B2}": [
    "person_bald",
    "hairless"
  ],
  "\u{1F471}\u200D\u2640\uFE0F": [
    "woman_blond_hair",
    "woman",
    "female",
    "girl",
    "blonde",
    "person"
  ],
  "\u{1F471}\u200D\u2642\uFE0F": [
    "man_blond_hair",
    "man",
    "male",
    "boy",
    "blonde",
    "guy",
    "person"
  ],
  "\u{1F9D3}": [
    "older_person",
    "human",
    "elder",
    "senior",
    "gender-neutral"
  ],
  "\u{1F474}": [
    "old_man",
    "human",
    "male",
    "men",
    "old",
    "elder",
    "senior"
  ],
  "\u{1F475}": [
    "old_woman",
    "human",
    "female",
    "women",
    "lady",
    "old",
    "elder",
    "senior"
  ],
  "\u{1F64D}": [
    "person_frowning",
    "worried"
  ],
  "\u{1F64D}\u200D\u2642\uFE0F": [
    "man_frowning",
    "male",
    "boy",
    "man",
    "sad",
    "depressed",
    "discouraged",
    "unhappy"
  ],
  "\u{1F64D}\u200D\u2640\uFE0F": [
    "woman_frowning",
    "female",
    "girl",
    "woman",
    "sad",
    "depressed",
    "discouraged",
    "unhappy"
  ],
  "\u{1F64E}": [
    "person_pouting",
    "upset"
  ],
  "\u{1F64E}\u200D\u2642\uFE0F": [
    "man_pouting",
    "male",
    "boy",
    "man"
  ],
  "\u{1F64E}\u200D\u2640\uFE0F": [
    "woman_pouting",
    "female",
    "girl",
    "woman"
  ],
  "\u{1F645}": [
    "person_gesturing_no",
    "decline"
  ],
  "\u{1F645}\u200D\u2642\uFE0F": [
    "man_gesturing_no",
    "male",
    "boy",
    "man",
    "nope"
  ],
  "\u{1F645}\u200D\u2640\uFE0F": [
    "woman_gesturing_no",
    "female",
    "girl",
    "woman",
    "nope"
  ],
  "\u{1F646}": [
    "person_gesturing_ok",
    "agree"
  ],
  "\u{1F646}\u200D\u2642\uFE0F": [
    "man_gesturing_ok",
    "men",
    "boy",
    "male",
    "blue",
    "human",
    "man"
  ],
  "\u{1F646}\u200D\u2640\uFE0F": [
    "woman_gesturing_ok",
    "women",
    "girl",
    "female",
    "pink",
    "human",
    "woman"
  ],
  "\u{1F481}": [
    "person_tipping_hand",
    "information"
  ],
  "\u{1F481}\u200D\u2642\uFE0F": [
    "man_tipping_hand",
    "male",
    "boy",
    "man",
    "human",
    "information"
  ],
  "\u{1F481}\u200D\u2640\uFE0F": [
    "woman_tipping_hand",
    "female",
    "girl",
    "woman",
    "human",
    "information"
  ],
  "\u{1F64B}": [
    "person_raising_hand",
    "question"
  ],
  "\u{1F64B}\u200D\u2642\uFE0F": [
    "man_raising_hand",
    "male",
    "boy",
    "man"
  ],
  "\u{1F64B}\u200D\u2640\uFE0F": [
    "woman_raising_hand",
    "female",
    "girl",
    "woman"
  ],
  "\u{1F9CF}": [
    "deaf_person",
    "accessibility"
  ],
  "\u{1F9CF}\u200D\u2642\uFE0F": [
    "deaf_man",
    "accessibility"
  ],
  "\u{1F9CF}\u200D\u2640\uFE0F": [
    "deaf_woman",
    "accessibility"
  ],
  "\u{1F647}": [
    "person_bowing",
    "respectiful"
  ],
  "\u{1F647}\u200D\u2642\uFE0F": [
    "man_bowing",
    "man",
    "male",
    "boy"
  ],
  "\u{1F647}\u200D\u2640\uFE0F": [
    "woman_bowing",
    "woman",
    "female",
    "girl"
  ],
  "\u{1F926}": [
    "person_facepalming",
    "disappointed"
  ],
  "\u{1F926}\u200D\u2642\uFE0F": [
    "man_facepalming",
    "man",
    "male",
    "boy",
    "disbelief"
  ],
  "\u{1F926}\u200D\u2640\uFE0F": [
    "woman_facepalming",
    "woman",
    "female",
    "girl",
    "disbelief"
  ],
  "\u{1F937}": [
    "person_shrugging",
    "regardless"
  ],
  "\u{1F937}\u200D\u2642\uFE0F": [
    "man_shrugging",
    "man",
    "male",
    "boy",
    "confused",
    "indifferent",
    "doubt"
  ],
  "\u{1F937}\u200D\u2640\uFE0F": [
    "woman_shrugging",
    "woman",
    "female",
    "girl",
    "confused",
    "indifferent",
    "doubt"
  ],
  "\u{1F9D1}\u200D\u2695\uFE0F": [
    "health_worker",
    "hospital"
  ],
  "\u{1F468}\u200D\u2695\uFE0F": [
    "man_health_worker",
    "doctor",
    "nurse",
    "therapist",
    "healthcare",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u2695\uFE0F": [
    "woman_health_worker",
    "doctor",
    "nurse",
    "therapist",
    "healthcare",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F393}": [
    "student",
    "learn"
  ],
  "\u{1F468}\u200D\u{1F393}": [
    "man_student",
    "graduate",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F393}": [
    "woman_student",
    "graduate",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F3EB}": [
    "teacher",
    "professor"
  ],
  "\u{1F468}\u200D\u{1F3EB}": [
    "man_teacher",
    "instructor",
    "professor",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F3EB}": [
    "woman_teacher",
    "instructor",
    "professor",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u2696\uFE0F": [
    "judge",
    "law"
  ],
  "\u{1F468}\u200D\u2696\uFE0F": [
    "man_judge",
    "justice",
    "court",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u2696\uFE0F": [
    "woman_judge",
    "justice",
    "court",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F33E}": [
    "farmer",
    "crops"
  ],
  "\u{1F468}\u200D\u{1F33E}": [
    "man_farmer",
    "rancher",
    "gardener",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F33E}": [
    "woman_farmer",
    "rancher",
    "gardener",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F373}": [
    "cook",
    "food",
    "kitchen",
    "culinary"
  ],
  "\u{1F468}\u200D\u{1F373}": [
    "man_cook",
    "chef",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F373}": [
    "woman_cook",
    "chef",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F527}": [
    "mechanic",
    "worker",
    "technician"
  ],
  "\u{1F468}\u200D\u{1F527}": [
    "man_mechanic",
    "plumber",
    "man",
    "human",
    "wrench"
  ],
  "\u{1F469}\u200D\u{1F527}": [
    "woman_mechanic",
    "plumber",
    "woman",
    "human",
    "wrench"
  ],
  "\u{1F9D1}\u200D\u{1F3ED}": [
    "factory_worker",
    "labor"
  ],
  "\u{1F468}\u200D\u{1F3ED}": [
    "man_factory_worker",
    "assembly",
    "industrial",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F3ED}": [
    "woman_factory_worker",
    "assembly",
    "industrial",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F4BC}": [
    "office_worker",
    "business"
  ],
  "\u{1F468}\u200D\u{1F4BC}": [
    "man_office_worker",
    "business",
    "manager",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F4BC}": [
    "woman_office_worker",
    "business",
    "manager",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F52C}": [
    "scientist",
    "chemistry"
  ],
  "\u{1F468}\u200D\u{1F52C}": [
    "man_scientist",
    "biologist",
    "chemist",
    "engineer",
    "physicist",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F52C}": [
    "woman_scientist",
    "biologist",
    "chemist",
    "engineer",
    "physicist",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F4BB}": [
    "technologist",
    "computer"
  ],
  "\u{1F468}\u200D\u{1F4BB}": [
    "man_technologist",
    "coder",
    "developer",
    "engineer",
    "programmer",
    "software",
    "man",
    "human",
    "laptop",
    "computer"
  ],
  "\u{1F469}\u200D\u{1F4BB}": [
    "woman_technologist",
    "coder",
    "developer",
    "engineer",
    "programmer",
    "software",
    "woman",
    "human",
    "laptop",
    "computer"
  ],
  "\u{1F9D1}\u200D\u{1F3A4}": [
    "singer",
    "song",
    "artist",
    "performer"
  ],
  "\u{1F468}\u200D\u{1F3A4}": [
    "man_singer",
    "rockstar",
    "entertainer",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F3A4}": [
    "woman_singer",
    "rockstar",
    "entertainer",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F3A8}": [
    "artist",
    "painting",
    "draw",
    "creativity"
  ],
  "\u{1F468}\u200D\u{1F3A8}": [
    "man_artist",
    "painter",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F3A8}": [
    "woman_artist",
    "painter",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u2708\uFE0F": [
    "pilot",
    "fly",
    "plane",
    "airplane"
  ],
  "\u{1F468}\u200D\u2708\uFE0F": [
    "man_pilot",
    "aviator",
    "plane",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u2708\uFE0F": [
    "woman_pilot",
    "aviator",
    "plane",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F680}": [
    "astronaut",
    "outerspace"
  ],
  "\u{1F468}\u200D\u{1F680}": [
    "man_astronaut",
    "space",
    "rocket",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F680}": [
    "woman_astronaut",
    "space",
    "rocket",
    "woman",
    "human"
  ],
  "\u{1F9D1}\u200D\u{1F692}": [
    "firefighter",
    "fire"
  ],
  "\u{1F468}\u200D\u{1F692}": [
    "man_firefighter",
    "fireman",
    "man",
    "human"
  ],
  "\u{1F469}\u200D\u{1F692}": [
    "woman_firefighter",
    "fireman",
    "woman",
    "human"
  ],
  "\u{1F46E}": [
    "police_officer",
    "cop"
  ],
  "\u{1F46E}\u200D\u2642\uFE0F": [
    "man_police_officer",
    "man",
    "police",
    "law",
    "legal",
    "enforcement",
    "arrest",
    "911"
  ],
  "\u{1F46E}\u200D\u2640\uFE0F": [
    "woman_police_officer",
    "woman",
    "police",
    "law",
    "legal",
    "enforcement",
    "arrest",
    "911",
    "female"
  ],
  "\u{1F575}\uFE0F": [
    "detective",
    "human",
    "spy"
  ],
  "\u{1F575}\uFE0F\u200D\u2642\uFE0F": [
    "man_detective",
    "crime"
  ],
  "\u{1F575}\uFE0F\u200D\u2640\uFE0F": [
    "woman_detective",
    "human",
    "spy",
    "detective",
    "female",
    "woman"
  ],
  "\u{1F482}": [
    "guard",
    "protect"
  ],
  "\u{1F482}\u200D\u2642\uFE0F": [
    "man_guard",
    "uk",
    "gb",
    "british",
    "male",
    "guy",
    "royal"
  ],
  "\u{1F482}\u200D\u2640\uFE0F": [
    "woman_guard",
    "uk",
    "gb",
    "british",
    "female",
    "royal",
    "woman"
  ],
  "\u{1F477}": [
    "construction_worker",
    "labor",
    "build"
  ],
  "\u{1F477}\u200D\u2642\uFE0F": [
    "man_construction_worker",
    "male",
    "human",
    "wip",
    "guy",
    "build",
    "construction",
    "worker",
    "labor"
  ],
  "\u{1F477}\u200D\u2640\uFE0F": [
    "woman_construction_worker",
    "female",
    "human",
    "wip",
    "build",
    "construction",
    "worker",
    "labor",
    "woman"
  ],
  "\u{1F934}": [
    "prince",
    "boy",
    "man",
    "male",
    "crown",
    "royal",
    "king"
  ],
  "\u{1F478}": [
    "princess",
    "girl",
    "woman",
    "female",
    "blond",
    "crown",
    "royal",
    "queen"
  ],
  "\u{1F473}": [
    "person_wearing_turban",
    "headdress"
  ],
  "\u{1F473}\u200D\u2642\uFE0F": [
    "man_wearing_turban",
    "male",
    "indian",
    "hinduism",
    "arabs"
  ],
  "\u{1F473}\u200D\u2640\uFE0F": [
    "woman_wearing_turban",
    "female",
    "indian",
    "hinduism",
    "arabs",
    "woman"
  ],
  "\u{1F472}": [
    "man_with_skullcap",
    "male",
    "boy",
    "chinese"
  ],
  "\u{1F9D5}": [
    "woman_with_headscarf",
    "female",
    "hijab",
    "mantilla",
    "tichel"
  ],
  "\u{1F935}": [
    "man_in_tuxedo",
    "couple",
    "marriage",
    "wedding",
    "groom"
  ],
  "\u{1F470}": [
    "bride_with_veil",
    "couple",
    "marriage",
    "wedding",
    "woman",
    "bride"
  ],
  "\u{1F930}": [
    "pregnant_woman",
    "baby"
  ],
  "\u{1F931}": [
    "breast_feeding",
    "nursing",
    "baby"
  ],
  "\u{1F47C}": [
    "baby_angel",
    "heaven",
    "wings",
    "halo"
  ],
  "\u{1F385}": [
    "santa_claus",
    "festival",
    "man",
    "male",
    "xmas",
    "father christmas"
  ],
  "\u{1F936}": [
    "mrs_claus",
    "woman",
    "female",
    "xmas",
    "mother christmas"
  ],
  "\u{1F9B8}": [
    "superhero",
    "marvel"
  ],
  "\u{1F9B8}\u200D\u2642\uFE0F": [
    "man_superhero",
    "man",
    "male",
    "good",
    "hero",
    "superpowers"
  ],
  "\u{1F9B8}\u200D\u2640\uFE0F": [
    "woman_superhero",
    "woman",
    "female",
    "good",
    "heroine",
    "superpowers"
  ],
  "\u{1F9B9}": [
    "supervillain",
    "marvel"
  ],
  "\u{1F9B9}\u200D\u2642\uFE0F": [
    "man_supervillain",
    "man",
    "male",
    "evil",
    "bad",
    "criminal",
    "hero",
    "superpowers"
  ],
  "\u{1F9B9}\u200D\u2640\uFE0F": [
    "woman_supervillain",
    "woman",
    "female",
    "evil",
    "bad",
    "criminal",
    "heroine",
    "superpowers"
  ],
  "\u{1F9D9}": [
    "mage",
    "magic"
  ],
  "\u{1F9D9}\u200D\u2642\uFE0F": [
    "man_mage",
    "man",
    "male",
    "mage",
    "sorcerer"
  ],
  "\u{1F9D9}\u200D\u2640\uFE0F": [
    "woman_mage",
    "woman",
    "female",
    "mage",
    "witch"
  ],
  "\u{1F9DA}": [
    "fairy",
    "wings",
    "magical"
  ],
  "\u{1F9DA}\u200D\u2642\uFE0F": [
    "man_fairy",
    "man",
    "male"
  ],
  "\u{1F9DA}\u200D\u2640\uFE0F": [
    "woman_fairy",
    "woman",
    "female"
  ],
  "\u{1F9DB}": [
    "vampire",
    "blood",
    "twilight"
  ],
  "\u{1F9DB}\u200D\u2642\uFE0F": [
    "man_vampire",
    "man",
    "male",
    "dracula"
  ],
  "\u{1F9DB}\u200D\u2640\uFE0F": [
    "woman_vampire",
    "woman",
    "female"
  ],
  "\u{1F9DC}": [
    "merperson",
    "sea"
  ],
  "\u{1F9DC}\u200D\u2642\uFE0F": [
    "merman",
    "man",
    "male",
    "triton"
  ],
  "\u{1F9DC}\u200D\u2640\uFE0F": [
    "mermaid",
    "woman",
    "female",
    "merwoman",
    "ariel"
  ],
  "\u{1F9DD}": [
    "elf",
    "magical"
  ],
  "\u{1F9DD}\u200D\u2642\uFE0F": [
    "man_elf",
    "man",
    "male"
  ],
  "\u{1F9DD}\u200D\u2640\uFE0F": [
    "woman_elf",
    "woman",
    "female"
  ],
  "\u{1F9DE}": [
    "genie",
    "magical",
    "wishes"
  ],
  "\u{1F9DE}\u200D\u2642\uFE0F": [
    "man_genie",
    "man",
    "male"
  ],
  "\u{1F9DE}\u200D\u2640\uFE0F": [
    "woman_genie",
    "woman",
    "female"
  ],
  "\u{1F9DF}": [
    "zombie",
    "dead"
  ],
  "\u{1F9DF}\u200D\u2642\uFE0F": [
    "man_zombie",
    "man",
    "male",
    "dracula",
    "undead",
    "walking dead"
  ],
  "\u{1F9DF}\u200D\u2640\uFE0F": [
    "woman_zombie",
    "woman",
    "female",
    "undead",
    "walking dead"
  ],
  "\u{1F486}": [
    "person_getting_massage",
    "relax"
  ],
  "\u{1F486}\u200D\u2642\uFE0F": [
    "man_getting_massage",
    "male",
    "boy",
    "man",
    "head"
  ],
  "\u{1F486}\u200D\u2640\uFE0F": [
    "woman_getting_massage",
    "female",
    "girl",
    "woman",
    "head"
  ],
  "\u{1F487}": [
    "person_getting_haircut",
    "hairstyle"
  ],
  "\u{1F487}\u200D\u2642\uFE0F": [
    "man_getting_haircut",
    "male",
    "boy",
    "man"
  ],
  "\u{1F487}\u200D\u2640\uFE0F": [
    "woman_getting_haircut",
    "female",
    "girl",
    "woman"
  ],
  "\u{1F6B6}": [
    "person_walking",
    "move"
  ],
  "\u{1F6B6}\u200D\u2642\uFE0F": [
    "man_walking",
    "human",
    "feet",
    "steps"
  ],
  "\u{1F6B6}\u200D\u2640\uFE0F": [
    "woman_walking",
    "human",
    "feet",
    "steps",
    "woman",
    "female"
  ],
  "\u{1F9CD}": [
    "person_standing",
    "still"
  ],
  "\u{1F9CD}\u200D\u2642\uFE0F": [
    "man_standing",
    "still"
  ],
  "\u{1F9CD}\u200D\u2640\uFE0F": [
    "woman_standing",
    "still"
  ],
  "\u{1F9CE}": [
    "person_kneeling",
    "pray",
    "respectful"
  ],
  "\u{1F9CE}\u200D\u2642\uFE0F": [
    "man_kneeling",
    "pray",
    "respectful"
  ],
  "\u{1F9CE}\u200D\u2640\uFE0F": [
    "woman_kneeling",
    "respectful",
    "pray"
  ],
  "\u{1F9D1}\u200D\u{1F9AF}": [
    "person_with_probing_cane",
    "blind"
  ],
  "\u{1F468}\u200D\u{1F9AF}": [
    "man_with_probing_cane",
    "blind"
  ],
  "\u{1F469}\u200D\u{1F9AF}": [
    "woman_with_probing_cane",
    "blind"
  ],
  "\u{1F9D1}\u200D\u{1F9BC}": [
    "person_in_motorized_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F468}\u200D\u{1F9BC}": [
    "man_in_motorized_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F469}\u200D\u{1F9BC}": [
    "woman_in_motorized_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F9D1}\u200D\u{1F9BD}": [
    "person_in_manual_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F468}\u200D\u{1F9BD}": [
    "man_in_manual_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F469}\u200D\u{1F9BD}": [
    "woman_in_manual_wheelchair",
    "disability",
    "accessibility"
  ],
  "\u{1F3C3}": [
    "person_running",
    "move"
  ],
  "\u{1F3C3}\u200D\u2642\uFE0F": [
    "man_running",
    "man",
    "walking",
    "exercise",
    "race",
    "running"
  ],
  "\u{1F3C3}\u200D\u2640\uFE0F": [
    "woman_running",
    "woman",
    "walking",
    "exercise",
    "race",
    "running",
    "female"
  ],
  "\u{1F483}": [
    "woman_dancing",
    "female",
    "girl",
    "woman",
    "fun"
  ],
  "\u{1F57A}": [
    "man_dancing",
    "male",
    "boy",
    "fun",
    "dancer"
  ],
  "\u{1F574}\uFE0F": [
    "man_in_suit_levitating",
    "suit",
    "business",
    "levitate",
    "hover",
    "jump"
  ],
  "\u{1F46F}": [
    "people_with_bunny_ears",
    "perform",
    "costume"
  ],
  "\u{1F46F}\u200D\u2642\uFE0F": [
    "men_with_bunny_ears",
    "male",
    "bunny",
    "men",
    "boys"
  ],
  "\u{1F46F}\u200D\u2640\uFE0F": [
    "women_with_bunny_ears",
    "female",
    "bunny",
    "women",
    "girls"
  ],
  "\u{1F9D6}": [
    "person_in_steamy_room",
    "relax",
    "spa"
  ],
  "\u{1F9D6}\u200D\u2642\uFE0F": [
    "man_in_steamy_room",
    "male",
    "man",
    "spa",
    "steamroom",
    "sauna"
  ],
  "\u{1F9D6}\u200D\u2640\uFE0F": [
    "woman_in_steamy_room",
    "female",
    "woman",
    "spa",
    "steamroom",
    "sauna"
  ],
  "\u{1F9D7}": [
    "person_climbing",
    "sport"
  ],
  "\u{1F9D7}\u200D\u2642\uFE0F": [
    "man_climbing",
    "sports",
    "hobby",
    "man",
    "male",
    "rock"
  ],
  "\u{1F9D7}\u200D\u2640\uFE0F": [
    "woman_climbing",
    "sports",
    "hobby",
    "woman",
    "female",
    "rock"
  ],
  "\u{1F93A}": [
    "person_fencing",
    "sports",
    "fencing",
    "sword"
  ],
  "\u{1F3C7}": [
    "horse_racing",
    "animal",
    "betting",
    "competition",
    "gambling",
    "luck"
  ],
  "\u26F7\uFE0F": [
    "skier",
    "sports",
    "winter",
    "snow"
  ],
  "\u{1F3C2}": [
    "snowboarder",
    "sports",
    "winter"
  ],
  "\u{1F3CC}\uFE0F": [
    "person_golfing",
    "sports",
    "business"
  ],
  "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F": [
    "man_golfing",
    "sport"
  ],
  "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F": [
    "woman_golfing",
    "sports",
    "business",
    "woman",
    "female"
  ],
  "\u{1F3C4}": [
    "person_surfing",
    "sport",
    "sea"
  ],
  "\u{1F3C4}\u200D\u2642\uFE0F": [
    "man_surfing",
    "sports",
    "ocean",
    "sea",
    "summer",
    "beach"
  ],
  "\u{1F3C4}\u200D\u2640\uFE0F": [
    "woman_surfing",
    "sports",
    "ocean",
    "sea",
    "summer",
    "beach",
    "woman",
    "female"
  ],
  "\u{1F6A3}": [
    "person_rowing_boat",
    "sport",
    "move"
  ],
  "\u{1F6A3}\u200D\u2642\uFE0F": [
    "man_rowing_boat",
    "sports",
    "hobby",
    "water",
    "ship"
  ],
  "\u{1F6A3}\u200D\u2640\uFE0F": [
    "woman_rowing_boat",
    "sports",
    "hobby",
    "water",
    "ship",
    "woman",
    "female"
  ],
  "\u{1F3CA}": [
    "person_swimming",
    "sport",
    "pool"
  ],
  "\u{1F3CA}\u200D\u2642\uFE0F": [
    "man_swimming",
    "sports",
    "exercise",
    "human",
    "athlete",
    "water",
    "summer"
  ],
  "\u{1F3CA}\u200D\u2640\uFE0F": [
    "woman_swimming",
    "sports",
    "exercise",
    "human",
    "athlete",
    "water",
    "summer",
    "woman",
    "female"
  ],
  "\u26F9\uFE0F": [
    "person_bouncing_ball",
    "sports",
    "human"
  ],
  "\u26F9\uFE0F\u200D\u2642\uFE0F": [
    "man_bouncing_ball",
    "sport"
  ],
  "\u26F9\uFE0F\u200D\u2640\uFE0F": [
    "woman_bouncing_ball",
    "sports",
    "human",
    "woman",
    "female"
  ],
  "\u{1F3CB}\uFE0F": [
    "person_lifting_weights",
    "sports",
    "training",
    "exercise"
  ],
  "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F": [
    "man_lifting_weights",
    "sport"
  ],
  "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F": [
    "woman_lifting_weights",
    "sports",
    "training",
    "exercise",
    "woman",
    "female"
  ],
  "\u{1F6B4}": [
    "person_biking",
    "bicycle",
    "bike",
    "cyclist",
    "sport",
    "move"
  ],
  "\u{1F6B4}\u200D\u2642\uFE0F": [
    "man_biking",
    "bicycle",
    "bike",
    "cyclist",
    "sports",
    "exercise",
    "hipster"
  ],
  "\u{1F6B4}\u200D\u2640\uFE0F": [
    "woman_biking",
    "bicycle",
    "bike",
    "cyclist",
    "sports",
    "exercise",
    "hipster",
    "woman",
    "female"
  ],
  "\u{1F6B5}": [
    "person_mountain_biking",
    "bicycle",
    "bike",
    "cyclist",
    "sport",
    "move"
  ],
  "\u{1F6B5}\u200D\u2642\uFE0F": [
    "man_mountain_biking",
    "bicycle",
    "bike",
    "cyclist",
    "transportation",
    "sports",
    "human",
    "race"
  ],
  "\u{1F6B5}\u200D\u2640\uFE0F": [
    "woman_mountain_biking",
    "bicycle",
    "bike",
    "cyclist",
    "transportation",
    "sports",
    "human",
    "race",
    "woman",
    "female"
  ],
  "\u{1F938}": [
    "person_cartwheeling",
    "sport",
    "gymnastic"
  ],
  "\u{1F938}\u200D\u2642\uFE0F": [
    "man_cartwheeling",
    "gymnastics"
  ],
  "\u{1F938}\u200D\u2640\uFE0F": [
    "woman_cartwheeling",
    "gymnastics"
  ],
  "\u{1F93C}": [
    "people_wrestling",
    "sport"
  ],
  "\u{1F93C}\u200D\u2642\uFE0F": [
    "men_wrestling",
    "sports",
    "wrestlers"
  ],
  "\u{1F93C}\u200D\u2640\uFE0F": [
    "women_wrestling",
    "sports",
    "wrestlers"
  ],
  "\u{1F93D}": [
    "person_playing_water_polo",
    "sport"
  ],
  "\u{1F93D}\u200D\u2642\uFE0F": [
    "man_playing_water_polo",
    "sports",
    "pool"
  ],
  "\u{1F93D}\u200D\u2640\uFE0F": [
    "woman_playing_water_polo",
    "sports",
    "pool"
  ],
  "\u{1F93E}": [
    "person_playing_handball",
    "sport"
  ],
  "\u{1F93E}\u200D\u2642\uFE0F": [
    "man_playing_handball",
    "sports"
  ],
  "\u{1F93E}\u200D\u2640\uFE0F": [
    "woman_playing_handball",
    "sports"
  ],
  "\u{1F939}": [
    "person_juggling",
    "performance",
    "balance"
  ],
  "\u{1F939}\u200D\u2642\uFE0F": [
    "man_juggling",
    "juggle",
    "balance",
    "skill",
    "multitask"
  ],
  "\u{1F939}\u200D\u2640\uFE0F": [
    "woman_juggling",
    "juggle",
    "balance",
    "skill",
    "multitask"
  ],
  "\u{1F9D8}": [
    "person_in_lotus_position",
    "meditate"
  ],
  "\u{1F9D8}\u200D\u2642\uFE0F": [
    "man_in_lotus_position",
    "man",
    "male",
    "meditation",
    "yoga",
    "serenity",
    "zen",
    "mindfulness"
  ],
  "\u{1F9D8}\u200D\u2640\uFE0F": [
    "woman_in_lotus_position",
    "woman",
    "female",
    "meditation",
    "yoga",
    "serenity",
    "zen",
    "mindfulness"
  ],
  "\u{1F6C0}": [
    "person_taking_bath",
    "clean",
    "shower",
    "bathroom"
  ],
  "\u{1F6CC}": [
    "person_in_bed",
    "bed",
    "rest"
  ],
  "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}": [
    "people_holding_hands",
    "friendship"
  ],
  "\u{1F46D}": [
    "women_holding_hands",
    "pair",
    "friendship",
    "couple",
    "love",
    "like",
    "female",
    "people",
    "human"
  ],
  "\u{1F46B}": [
    "woman_and_man_holding_hands",
    "pair",
    "people",
    "human",
    "love",
    "date",
    "dating",
    "like",
    "affection",
    "valentines",
    "marriage"
  ],
  "\u{1F46C}": [
    "men_holding_hands",
    "pair",
    "couple",
    "love",
    "like",
    "bromance",
    "friendship",
    "people",
    "human"
  ],
  "\u{1F48F}": [
    "kiss",
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}": [
    "kiss_woman_man",
    "love"
  ],
  "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}": [
    "kiss_man_man",
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}": [
    "kiss_woman_woman",
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  "\u{1F491}": [
    "couple_with_heart",
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}": [
    "couple_with_heart_woman_man",
    "love"
  ],
  "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}": [
    "couple_with_heart_man_man",
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}": [
    "couple_with_heart_woman_woman",
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  "\u{1F46A}": [
    "family",
    "home",
    "parents",
    "child",
    "mom",
    "dad",
    "father",
    "mother",
    "people",
    "human"
  ],
  "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}": [
    "family_man_woman_boy",
    "love"
  ],
  "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}": [
    "family_man_woman_girl",
    "home",
    "parents",
    "people",
    "human",
    "child"
  ],
  "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}": [
    "family_man_woman_girl_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}": [
    "family_man_woman_boy_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}": [
    "family_man_woman_girl_girl",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}": [
    "family_man_man_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}": [
    "family_man_man_girl",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}": [
    "family_man_man_girl_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}": [
    "family_man_man_boy_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}": [
    "family_man_man_girl_girl",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}": [
    "family_woman_woman_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}": [
    "family_woman_woman_girl",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}": [
    "family_woman_woman_girl_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}": [
    "family_woman_woman_boy_boy",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}": [
    "family_woman_woman_girl_girl",
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F466}": [
    "family_man_boy",
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}": [
    "family_man_boy_boy",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F467}": [
    "family_man_girl",
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}": [
    "family_man_girl_boy",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}": [
    "family_man_girl_girl",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F466}": [
    "family_woman_boy",
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}": [
    "family_woman_boy_boy",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F467}": [
    "family_woman_girl",
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}": [
    "family_woman_girl_boy",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}": [
    "family_woman_girl_girl",
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  "\u{1F5E3}\uFE0F": [
    "speaking_head",
    "user",
    "person",
    "human",
    "sing",
    "say",
    "talk"
  ],
  "\u{1F464}": [
    "bust_in_silhouette",
    "user",
    "person",
    "human"
  ],
  "\u{1F465}": [
    "busts_in_silhouette",
    "user",
    "person",
    "human",
    "group",
    "team"
  ],
  "\u{1F463}": [
    "footprints",
    "feet",
    "tracking",
    "walking",
    "beach"
  ],
  "\u{1F435}": [
    "monkey_face",
    "animal",
    "nature",
    "circus"
  ],
  "\u{1F412}": [
    "monkey",
    "animal",
    "nature",
    "banana",
    "circus"
  ],
  "\u{1F98D}": [
    "gorilla",
    "animal",
    "nature",
    "circus"
  ],
  "\u{1F9A7}": [
    "orangutan",
    "animal"
  ],
  "\u{1F436}": [
    "dog_face",
    "animal",
    "friend",
    "nature",
    "woof",
    "puppy",
    "pet",
    "faithful"
  ],
  "\u{1F415}": [
    "dog",
    "animal",
    "nature",
    "friend",
    "doge",
    "pet",
    "faithful"
  ],
  "\u{1F9AE}": [
    "guide_dog",
    "animal",
    "blind"
  ],
  "\u{1F415}\u200D\u{1F9BA}": [
    "service_dog",
    "blind",
    "animal"
  ],
  "\u{1F429}": [
    "poodle",
    "dog",
    "animal",
    "101",
    "nature",
    "pet"
  ],
  "\u{1F43A}": [
    "wolf",
    "animal",
    "nature",
    "wild"
  ],
  "\u{1F98A}": [
    "fox",
    "animal",
    "nature",
    "face"
  ],
  "\u{1F99D}": [
    "raccoon",
    "animal",
    "nature"
  ],
  "\u{1F431}": [
    "cat_face",
    "animal",
    "meow",
    "nature",
    "pet",
    "kitten"
  ],
  "\u{1F408}": [
    "cat",
    "animal",
    "meow",
    "pet",
    "cats"
  ],
  "\u{1F981}": [
    "lion",
    "animal",
    "nature"
  ],
  "\u{1F42F}": [
    "tiger_face",
    "animal",
    "cat",
    "danger",
    "wild",
    "nature",
    "roar"
  ],
  "\u{1F405}": [
    "tiger",
    "animal",
    "nature",
    "roar"
  ],
  "\u{1F406}": [
    "leopard",
    "animal",
    "nature"
  ],
  "\u{1F434}": [
    "horse_face",
    "animal",
    "brown",
    "nature"
  ],
  "\u{1F40E}": [
    "horse",
    "animal",
    "gamble",
    "luck"
  ],
  "\u{1F984}": [
    "unicorn",
    "animal",
    "nature",
    "mystical"
  ],
  "\u{1F993}": [
    "zebra",
    "animal",
    "nature",
    "stripes",
    "safari"
  ],
  "\u{1F98C}": [
    "deer",
    "animal",
    "nature",
    "horns",
    "venison"
  ],
  "\u{1F42E}": [
    "cow_face",
    "beef",
    "ox",
    "animal",
    "nature",
    "moo",
    "milk"
  ],
  "\u{1F402}": [
    "ox",
    "animal",
    "cow",
    "beef"
  ],
  "\u{1F403}": [
    "water_buffalo",
    "animal",
    "nature",
    "ox",
    "cow"
  ],
  "\u{1F404}": [
    "cow",
    "beef",
    "ox",
    "animal",
    "nature",
    "moo",
    "milk"
  ],
  "\u{1F437}": [
    "pig_face",
    "animal",
    "oink",
    "nature"
  ],
  "\u{1F416}": [
    "pig",
    "animal",
    "nature"
  ],
  "\u{1F417}": [
    "boar",
    "animal",
    "nature"
  ],
  "\u{1F43D}": [
    "pig_nose",
    "animal",
    "oink"
  ],
  "\u{1F40F}": [
    "ram",
    "animal",
    "sheep",
    "nature"
  ],
  "\u{1F411}": [
    "ewe",
    "animal",
    "nature",
    "wool",
    "shipit"
  ],
  "\u{1F410}": [
    "goat",
    "animal",
    "nature"
  ],
  "\u{1F42A}": [
    "camel",
    "animal",
    "hot",
    "desert",
    "hump"
  ],
  "\u{1F42B}": [
    "two_hump_camel",
    "animal",
    "nature",
    "hot",
    "desert",
    "hump"
  ],
  "\u{1F999}": [
    "llama",
    "animal",
    "nature",
    "alpaca"
  ],
  "\u{1F992}": [
    "giraffe",
    "animal",
    "nature",
    "spots",
    "safari"
  ],
  "\u{1F418}": [
    "elephant",
    "animal",
    "nature",
    "nose",
    "th",
    "circus"
  ],
  "\u{1F98F}": [
    "rhinoceros",
    "animal",
    "nature",
    "horn"
  ],
  "\u{1F99B}": [
    "hippopotamus",
    "animal",
    "nature"
  ],
  "\u{1F42D}": [
    "mouse_face",
    "animal",
    "nature",
    "cheese_wedge",
    "rodent"
  ],
  "\u{1F401}": [
    "mouse",
    "animal",
    "nature",
    "rodent"
  ],
  "\u{1F400}": [
    "rat",
    "animal",
    "mouse",
    "rodent"
  ],
  "\u{1F439}": [
    "hamster",
    "animal",
    "nature"
  ],
  "\u{1F430}": [
    "rabbit_face",
    "animal",
    "nature",
    "pet",
    "spring",
    "magic",
    "bunny"
  ],
  "\u{1F407}": [
    "rabbit",
    "animal",
    "nature",
    "pet",
    "magic",
    "spring"
  ],
  "\u{1F43F}\uFE0F": [
    "chipmunk",
    "animal",
    "nature",
    "rodent",
    "squirrel"
  ],
  "\u{1F994}": [
    "hedgehog",
    "animal",
    "nature",
    "spiny"
  ],
  "\u{1F987}": [
    "bat",
    "animal",
    "nature",
    "blind",
    "vampire"
  ],
  "\u{1F43B}": [
    "bear",
    "animal",
    "nature",
    "wild"
  ],
  "\u{1F428}": [
    "koala",
    "animal",
    "nature"
  ],
  "\u{1F43C}": [
    "panda",
    "animal",
    "nature"
  ],
  "\u{1F9A5}": [
    "sloth",
    "animal"
  ],
  "\u{1F9A6}": [
    "otter",
    "animal"
  ],
  "\u{1F9A8}": [
    "skunk",
    "animal"
  ],
  "\u{1F998}": [
    "kangaroo",
    "animal",
    "nature",
    "australia",
    "joey",
    "hop",
    "marsupial"
  ],
  "\u{1F9A1}": [
    "badger",
    "animal",
    "nature",
    "honey"
  ],
  "\u{1F43E}": [
    "paw_prints",
    "animal",
    "tracking",
    "footprints",
    "dog",
    "cat",
    "pet",
    "feet"
  ],
  "\u{1F983}": [
    "turkey",
    "animal",
    "bird"
  ],
  "\u{1F414}": [
    "chicken",
    "animal",
    "cluck",
    "nature",
    "bird"
  ],
  "\u{1F413}": [
    "rooster",
    "animal",
    "nature",
    "chicken"
  ],
  "\u{1F423}": [
    "hatching_chick",
    "animal",
    "chicken",
    "egg",
    "born",
    "baby",
    "bird"
  ],
  "\u{1F424}": [
    "baby_chick",
    "animal",
    "chicken",
    "bird"
  ],
  "\u{1F425}": [
    "front_facing_baby_chick",
    "animal",
    "chicken",
    "baby",
    "bird"
  ],
  "\u{1F426}": [
    "bird",
    "animal",
    "nature",
    "fly",
    "tweet",
    "spring"
  ],
  "\u{1F427}": [
    "penguin",
    "animal",
    "nature"
  ],
  "\u{1F54A}\uFE0F": [
    "dove",
    "animal",
    "bird"
  ],
  "\u{1F985}": [
    "eagle",
    "animal",
    "nature",
    "bird"
  ],
  "\u{1F986}": [
    "duck",
    "animal",
    "nature",
    "bird",
    "mallard"
  ],
  "\u{1F9A2}": [
    "swan",
    "animal",
    "nature",
    "bird"
  ],
  "\u{1F989}": [
    "owl",
    "animal",
    "nature",
    "bird",
    "hoot"
  ],
  "\u{1F9A9}": [
    "flamingo",
    "animal"
  ],
  "\u{1F99A}": [
    "peacock",
    "animal",
    "nature",
    "peahen",
    "bird"
  ],
  "\u{1F99C}": [
    "parrot",
    "animal",
    "nature",
    "bird",
    "pirate",
    "talk"
  ],
  "\u{1F438}": [
    "frog",
    "animal",
    "nature",
    "croak",
    "toad"
  ],
  "\u{1F40A}": [
    "crocodile",
    "animal",
    "nature",
    "reptile",
    "lizard",
    "alligator"
  ],
  "\u{1F422}": [
    "turtle",
    "animal",
    "slow",
    "nature",
    "tortoise"
  ],
  "\u{1F98E}": [
    "lizard",
    "animal",
    "nature",
    "reptile"
  ],
  "\u{1F40D}": [
    "snake",
    "animal",
    "evil",
    "nature",
    "hiss",
    "python"
  ],
  "\u{1F432}": [
    "dragon_face",
    "animal",
    "myth",
    "nature",
    "chinese",
    "green"
  ],
  "\u{1F409}": [
    "dragon",
    "animal",
    "myth",
    "nature",
    "chinese",
    "green"
  ],
  "\u{1F995}": [
    "sauropod",
    "animal",
    "nature",
    "dinosaur",
    "brachiosaurus",
    "brontosaurus",
    "diplodocus",
    "extinct"
  ],
  "\u{1F996}": [
    "t_rex",
    "animal",
    "nature",
    "dinosaur",
    "tyrannosaurus",
    "extinct"
  ],
  "\u{1F433}": [
    "spouting_whale",
    "animal",
    "nature",
    "sea",
    "ocean"
  ],
  "\u{1F40B}": [
    "whale",
    "animal",
    "nature",
    "sea",
    "ocean"
  ],
  "\u{1F42C}": [
    "dolphin",
    "animal",
    "nature",
    "fish",
    "sea",
    "ocean",
    "flipper",
    "fins",
    "beach"
  ],
  "\u{1F41F}": [
    "fish",
    "animal",
    "food",
    "nature"
  ],
  "\u{1F420}": [
    "tropical_fish",
    "animal",
    "swim",
    "ocean",
    "beach",
    "nemo"
  ],
  "\u{1F421}": [
    "blowfish",
    "animal",
    "nature",
    "food",
    "sea",
    "ocean"
  ],
  "\u{1F988}": [
    "shark",
    "animal",
    "nature",
    "fish",
    "sea",
    "ocean",
    "jaws",
    "fins",
    "beach"
  ],
  "\u{1F419}": [
    "octopus",
    "animal",
    "creature",
    "ocean",
    "sea",
    "nature",
    "beach"
  ],
  "\u{1F41A}": [
    "spiral_shell",
    "nature",
    "sea",
    "beach"
  ],
  "\u{1F40C}": [
    "snail",
    "slow",
    "animal",
    "shell"
  ],
  "\u{1F98B}": [
    "butterfly",
    "animal",
    "insect",
    "nature",
    "caterpillar"
  ],
  "\u{1F41B}": [
    "bug",
    "animal",
    "insect",
    "nature",
    "worm"
  ],
  "\u{1F41C}": [
    "ant",
    "animal",
    "insect",
    "nature",
    "bug"
  ],
  "\u{1F41D}": [
    "honeybee",
    "animal",
    "insect",
    "nature",
    "bug",
    "spring",
    "honey"
  ],
  "\u{1F41E}": [
    "lady_beetle",
    "animal",
    "insect",
    "nature",
    "ladybug"
  ],
  "\u{1F997}": [
    "cricket",
    "animal",
    "chirp"
  ],
  "\u{1F577}\uFE0F": [
    "spider",
    "animal",
    "arachnid"
  ],
  "\u{1F578}\uFE0F": [
    "spider_web",
    "animal",
    "insect",
    "arachnid",
    "silk"
  ],
  "\u{1F982}": [
    "scorpion",
    "animal",
    "arachnid"
  ],
  "\u{1F99F}": [
    "mosquito",
    "animal",
    "nature",
    "insect",
    "malaria"
  ],
  "\u{1F9A0}": [
    "microbe",
    "amoeba",
    "bacteria",
    "germs",
    "virus",
    "covid"
  ],
  "\u{1F490}": [
    "bouquet",
    "flowers",
    "nature",
    "spring"
  ],
  "\u{1F338}": [
    "cherry_blossom",
    "nature",
    "plant",
    "spring",
    "flower"
  ],
  "\u{1F4AE}": [
    "white_flower",
    "japanese",
    "spring"
  ],
  "\u{1F3F5}\uFE0F": [
    "rosette",
    "flower",
    "decoration",
    "military"
  ],
  "\u{1F339}": [
    "rose",
    "flowers",
    "valentines",
    "love",
    "spring"
  ],
  "\u{1F940}": [
    "wilted_flower",
    "plant",
    "nature",
    "flower",
    "rose"
  ],
  "\u{1F33A}": [
    "hibiscus",
    "plant",
    "vegetable",
    "flowers",
    "beach"
  ],
  "\u{1F33B}": [
    "sunflower",
    "nature",
    "plant",
    "fall"
  ],
  "\u{1F33C}": [
    "blossom",
    "nature",
    "flowers",
    "yellow"
  ],
  "\u{1F337}": [
    "tulip",
    "flowers",
    "plant",
    "nature",
    "summer",
    "spring"
  ],
  "\u{1F331}": [
    "seedling",
    "plant",
    "nature",
    "grass",
    "lawn",
    "spring"
  ],
  "\u{1F332}": [
    "evergreen_tree",
    "plant",
    "nature"
  ],
  "\u{1F333}": [
    "deciduous_tree",
    "plant",
    "nature"
  ],
  "\u{1F334}": [
    "palm_tree",
    "plant",
    "vegetable",
    "nature",
    "summer",
    "beach",
    "mojito",
    "tropical"
  ],
  "\u{1F335}": [
    "cactus",
    "vegetable",
    "plant",
    "nature"
  ],
  "\u{1F33E}": [
    "sheaf_of_rice",
    "nature",
    "plant"
  ],
  "\u{1F33F}": [
    "herb",
    "vegetable",
    "plant",
    "medicine",
    "weed",
    "grass",
    "lawn"
  ],
  "\u2618\uFE0F": [
    "shamrock",
    "vegetable",
    "plant",
    "nature",
    "irish",
    "clover"
  ],
  "\u{1F340}": [
    "four_leaf_clover",
    "vegetable",
    "plant",
    "nature",
    "lucky",
    "irish"
  ],
  "\u{1F341}": [
    "maple_leaf",
    "nature",
    "plant",
    "vegetable",
    "ca",
    "fall"
  ],
  "\u{1F342}": [
    "fallen_leaf",
    "nature",
    "plant",
    "vegetable",
    "leaves"
  ],
  "\u{1F343}": [
    "leaf_fluttering_in_wind",
    "nature",
    "plant",
    "tree",
    "vegetable",
    "grass",
    "lawn",
    "spring"
  ],
  "\u{1F347}": [
    "grapes",
    "fruit",
    "food",
    "wine"
  ],
  "\u{1F348}": [
    "melon",
    "fruit",
    "nature",
    "food"
  ],
  "\u{1F349}": [
    "watermelon",
    "fruit",
    "food",
    "picnic",
    "summer"
  ],
  "\u{1F34A}": [
    "tangerine",
    "food",
    "fruit",
    "nature",
    "orange"
  ],
  "\u{1F34B}": [
    "lemon",
    "fruit",
    "nature"
  ],
  "\u{1F34C}": [
    "banana",
    "fruit",
    "food",
    "monkey"
  ],
  "\u{1F34D}": [
    "pineapple",
    "fruit",
    "nature",
    "food"
  ],
  "\u{1F96D}": [
    "mango",
    "fruit",
    "food",
    "tropical"
  ],
  "\u{1F34E}": [
    "red_apple",
    "fruit",
    "mac",
    "school"
  ],
  "\u{1F34F}": [
    "green_apple",
    "fruit",
    "nature"
  ],
  "\u{1F350}": [
    "pear",
    "fruit",
    "nature",
    "food"
  ],
  "\u{1F351}": [
    "peach",
    "fruit",
    "nature",
    "food"
  ],
  "\u{1F352}": [
    "cherries",
    "food",
    "fruit"
  ],
  "\u{1F353}": [
    "strawberry",
    "fruit",
    "food",
    "nature"
  ],
  "\u{1F95D}": [
    "kiwi_fruit",
    "fruit",
    "food"
  ],
  "\u{1F345}": [
    "tomato",
    "fruit",
    "vegetable",
    "nature",
    "food"
  ],
  "\u{1F965}": [
    "coconut",
    "fruit",
    "nature",
    "food",
    "palm"
  ],
  "\u{1F951}": [
    "avocado",
    "fruit",
    "food"
  ],
  "\u{1F346}": [
    "eggplant",
    "vegetable",
    "nature",
    "food",
    "aubergine"
  ],
  "\u{1F954}": [
    "potato",
    "food",
    "tuber",
    "vegatable",
    "starch"
  ],
  "\u{1F955}": [
    "carrot",
    "vegetable",
    "food",
    "orange"
  ],
  "\u{1F33D}": [
    "ear_of_corn",
    "food",
    "vegetable",
    "plant"
  ],
  "\u{1F336}\uFE0F": [
    "hot_pepper",
    "food",
    "spicy",
    "chilli",
    "chili"
  ],
  "\u{1F952}": [
    "cucumber",
    "fruit",
    "food",
    "pickle"
  ],
  "\u{1F96C}": [
    "leafy_green",
    "food",
    "vegetable",
    "plant",
    "bok choy",
    "cabbage",
    "kale",
    "lettuce"
  ],
  "\u{1F966}": [
    "broccoli",
    "fruit",
    "food",
    "vegetable"
  ],
  "\u{1F9C4}": [
    "garlic",
    "food",
    "spice",
    "cook"
  ],
  "\u{1F9C5}": [
    "onion",
    "cook",
    "food",
    "spice"
  ],
  "\u{1F344}": [
    "mushroom",
    "plant",
    "vegetable"
  ],
  "\u{1F95C}": [
    "peanuts",
    "food",
    "nut"
  ],
  "\u{1F330}": [
    "chestnut",
    "food",
    "squirrel"
  ],
  "\u{1F35E}": [
    "bread",
    "food",
    "wheat",
    "breakfast",
    "toast"
  ],
  "\u{1F950}": [
    "croissant",
    "food",
    "bread",
    "french"
  ],
  "\u{1F956}": [
    "baguette_bread",
    "food",
    "bread",
    "french",
    "france",
    "bakery"
  ],
  "\u{1F968}": [
    "pretzel",
    "food",
    "bread",
    "twisted",
    "germany",
    "bakery"
  ],
  "\u{1F96F}": [
    "bagel",
    "food",
    "bread",
    "bakery",
    "schmear",
    "jewish_bakery"
  ],
  "\u{1F95E}": [
    "pancakes",
    "food",
    "breakfast",
    "flapjacks",
    "hotcakes",
    "brunch"
  ],
  "\u{1F9C7}": [
    "waffle",
    "food",
    "breakfast",
    "brunch"
  ],
  "\u{1F9C0}": [
    "cheese_wedge",
    "food",
    "chadder",
    "swiss"
  ],
  "\u{1F356}": [
    "meat_on_bone",
    "good",
    "food",
    "drumstick"
  ],
  "\u{1F357}": [
    "poultry_leg",
    "food",
    "meat",
    "drumstick",
    "bird",
    "chicken",
    "turkey"
  ],
  "\u{1F969}": [
    "cut_of_meat",
    "food",
    "cow",
    "meat",
    "cut",
    "chop",
    "lambchop",
    "porkchop"
  ],
  "\u{1F953}": [
    "bacon",
    "food",
    "breakfast",
    "pork",
    "pig",
    "meat",
    "brunch"
  ],
  "\u{1F354}": [
    "hamburger",
    "meat",
    "fast food",
    "beef",
    "cheeseburger",
    "mcdonalds",
    "burger king"
  ],
  "\u{1F35F}": [
    "french_fries",
    "chips",
    "snack",
    "fast food",
    "potato"
  ],
  "\u{1F355}": [
    "pizza",
    "food",
    "party",
    "italy"
  ],
  "\u{1F32D}": [
    "hot_dog",
    "food",
    "frankfurter",
    "america"
  ],
  "\u{1F96A}": [
    "sandwich",
    "food",
    "lunch",
    "bread",
    "toast",
    "bakery"
  ],
  "\u{1F32E}": [
    "taco",
    "food",
    "mexican"
  ],
  "\u{1F32F}": [
    "burrito",
    "food",
    "mexican"
  ],
  "\u{1F959}": [
    "stuffed_flatbread",
    "food",
    "flatbread",
    "stuffed",
    "gyro",
    "mediterranean"
  ],
  "\u{1F9C6}": [
    "falafel",
    "food",
    "mediterranean"
  ],
  "\u{1F95A}": [
    "egg",
    "food",
    "chicken",
    "breakfast"
  ],
  "\u{1F373}": [
    "cooking",
    "food",
    "breakfast",
    "kitchen",
    "egg",
    "skillet"
  ],
  "\u{1F958}": [
    "shallow_pan_of_food",
    "food",
    "cooking",
    "casserole",
    "paella",
    "skillet"
  ],
  "\u{1F372}": [
    "pot_of_food",
    "food",
    "meat",
    "soup",
    "hot pot"
  ],
  "\u{1F963}": [
    "bowl_with_spoon",
    "food",
    "breakfast",
    "cereal",
    "oatmeal",
    "porridge"
  ],
  "\u{1F957}": [
    "green_salad",
    "food",
    "healthy",
    "lettuce",
    "vegetable"
  ],
  "\u{1F37F}": [
    "popcorn",
    "food",
    "movie theater",
    "films",
    "snack",
    "drama"
  ],
  "\u{1F9C8}": [
    "butter",
    "food",
    "cook"
  ],
  "\u{1F9C2}": [
    "salt",
    "condiment",
    "shaker"
  ],
  "\u{1F96B}": [
    "canned_food",
    "food",
    "soup",
    "tomatoes"
  ],
  "\u{1F371}": [
    "bento_box",
    "food",
    "japanese",
    "box",
    "lunch"
  ],
  "\u{1F358}": [
    "rice_cracker",
    "food",
    "japanese",
    "snack",
    "senbei"
  ],
  "\u{1F359}": [
    "rice_ball",
    "food",
    "japanese",
    "onigiri",
    "omusubi"
  ],
  "\u{1F35A}": [
    "cooked_rice",
    "food",
    "asian"
  ],
  "\u{1F35B}": [
    "curry_rice",
    "food",
    "spicy",
    "hot",
    "indian"
  ],
  "\u{1F35C}": [
    "steaming_bowl",
    "food",
    "japanese",
    "noodle",
    "chopsticks",
    "ramen"
  ],
  "\u{1F35D}": [
    "spaghetti",
    "food",
    "italian",
    "pasta",
    "noodle"
  ],
  "\u{1F360}": [
    "roasted_sweet_potato",
    "food",
    "nature",
    "plant"
  ],
  "\u{1F362}": [
    "oden",
    "skewer",
    "food",
    "japanese"
  ],
  "\u{1F363}": [
    "sushi",
    "food",
    "fish",
    "japanese",
    "rice"
  ],
  "\u{1F364}": [
    "fried_shrimp",
    "food",
    "animal",
    "appetizer",
    "summer"
  ],
  "\u{1F365}": [
    "fish_cake_with_swirl",
    "food",
    "japan",
    "sea",
    "beach",
    "narutomaki",
    "pink",
    "swirl",
    "kamaboko",
    "surimi",
    "ramen"
  ],
  "\u{1F96E}": [
    "moon_cake",
    "food",
    "autumn",
    "dessert"
  ],
  "\u{1F361}": [
    "dango",
    "food",
    "dessert",
    "sweet",
    "japanese",
    "barbecue",
    "meat"
  ],
  "\u{1F95F}": [
    "dumpling",
    "food",
    "empanada",
    "pierogi",
    "potsticker",
    "gyoza"
  ],
  "\u{1F960}": [
    "fortune_cookie",
    "food",
    "prophecy",
    "dessert"
  ],
  "\u{1F961}": [
    "takeout_box",
    "food",
    "leftovers"
  ],
  "\u{1F980}": [
    "crab",
    "animal",
    "crustacean"
  ],
  "\u{1F99E}": [
    "lobster",
    "animal",
    "nature",
    "bisque",
    "claws",
    "seafood"
  ],
  "\u{1F990}": [
    "shrimp",
    "animal",
    "ocean",
    "nature",
    "seafood"
  ],
  "\u{1F991}": [
    "squid",
    "animal",
    "nature",
    "ocean",
    "sea"
  ],
  "\u{1F9AA}": [
    "oyster",
    "food"
  ],
  "\u{1F366}": [
    "soft_ice_cream",
    "food",
    "hot",
    "dessert",
    "summer"
  ],
  "\u{1F367}": [
    "shaved_ice",
    "hot",
    "dessert",
    "summer"
  ],
  "\u{1F368}": [
    "ice_cream",
    "food",
    "hot",
    "dessert"
  ],
  "\u{1F369}": [
    "doughnut",
    "food",
    "dessert",
    "snack",
    "sweet",
    "donut"
  ],
  "\u{1F36A}": [
    "cookie",
    "food",
    "snack",
    "oreo",
    "chocolate",
    "sweet",
    "dessert"
  ],
  "\u{1F382}": [
    "birthday_cake",
    "food",
    "dessert",
    "cake"
  ],
  "\u{1F370}": [
    "shortcake",
    "food",
    "dessert"
  ],
  "\u{1F9C1}": [
    "cupcake",
    "food",
    "dessert",
    "bakery",
    "sweet"
  ],
  "\u{1F967}": [
    "pie",
    "food",
    "dessert",
    "pastry"
  ],
  "\u{1F36B}": [
    "chocolate_bar",
    "food",
    "snack",
    "dessert",
    "sweet"
  ],
  "\u{1F36C}": [
    "candy",
    "snack",
    "dessert",
    "sweet",
    "lolly"
  ],
  "\u{1F36D}": [
    "lollipop",
    "food",
    "snack",
    "candy",
    "sweet"
  ],
  "\u{1F36E}": [
    "custard",
    "dessert",
    "food",
    "pudding",
    "flan"
  ],
  "\u{1F36F}": [
    "honey_pot",
    "bees",
    "sweet",
    "kitchen"
  ],
  "\u{1F37C}": [
    "baby_bottle",
    "food",
    "container",
    "milk"
  ],
  "\u{1F95B}": [
    "glass_of_milk",
    "beverage",
    "drink",
    "cow"
  ],
  "\u2615": [
    "hot_beverage",
    "beverage",
    "caffeine",
    "latte",
    "espresso",
    "coffee",
    "mug"
  ],
  "\u{1F375}": [
    "teacup_without_handle",
    "drink",
    "bowl",
    "breakfast",
    "green",
    "british"
  ],
  "\u{1F376}": [
    "sake",
    "wine",
    "drink",
    "drunk",
    "beverage",
    "japanese",
    "alcohol",
    "booze"
  ],
  "\u{1F37E}": [
    "bottle_with_popping_cork",
    "drink",
    "wine",
    "bottle",
    "celebration"
  ],
  "\u{1F377}": [
    "wine_glass",
    "drink",
    "beverage",
    "drunk",
    "alcohol",
    "booze"
  ],
  "\u{1F378}": [
    "cocktail_glass",
    "drink",
    "drunk",
    "alcohol",
    "beverage",
    "booze",
    "mojito"
  ],
  "\u{1F379}": [
    "tropical_drink",
    "beverage",
    "cocktail",
    "summer",
    "beach",
    "alcohol",
    "booze",
    "mojito"
  ],
  "\u{1F37A}": [
    "beer_mug",
    "relax",
    "beverage",
    "drink",
    "drunk",
    "party",
    "pub",
    "summer",
    "alcohol",
    "booze"
  ],
  "\u{1F37B}": [
    "clinking_beer_mugs",
    "relax",
    "beverage",
    "drink",
    "drunk",
    "party",
    "pub",
    "summer",
    "alcohol",
    "booze"
  ],
  "\u{1F942}": [
    "clinking_glasses",
    "beverage",
    "drink",
    "party",
    "alcohol",
    "celebrate",
    "cheers",
    "wine",
    "champagne",
    "toast"
  ],
  "\u{1F943}": [
    "tumbler_glass",
    "drink",
    "beverage",
    "drunk",
    "alcohol",
    "liquor",
    "booze",
    "bourbon",
    "scotch",
    "whisky",
    "glass",
    "shot"
  ],
  "\u{1F964}": [
    "cup_with_straw",
    "drink",
    "soda"
  ],
  "\u{1F9C3}": [
    "beverage_box",
    "drink"
  ],
  "\u{1F9C9}": [
    "mate",
    "drink",
    "tea",
    "beverage"
  ],
  "\u{1F9CA}": [
    "ice",
    "water",
    "cold"
  ],
  "\u{1F962}": [
    "chopsticks",
    "food"
  ],
  "\u{1F37D}\uFE0F": [
    "fork_and_knife_with_plate",
    "food",
    "eat",
    "meal",
    "lunch",
    "dinner",
    "restaurant"
  ],
  "\u{1F374}": [
    "fork_and_knife",
    "cutlery",
    "kitchen"
  ],
  "\u{1F944}": [
    "spoon",
    "cutlery",
    "kitchen",
    "tableware"
  ],
  "\u{1F52A}": [
    "kitchen_knife",
    "knife",
    "blade",
    "cutlery",
    "kitchen",
    "weapon"
  ],
  "\u{1F3FA}": [
    "amphora",
    "vase",
    "jar"
  ],
  "\u{1F30D}": [
    "globe_showing_europe_africa",
    "globe",
    "world",
    "earth",
    "international"
  ],
  "\u{1F30E}": [
    "globe_showing_americas",
    "globe",
    "world",
    "USA",
    "earth",
    "international"
  ],
  "\u{1F30F}": [
    "globe_showing_asia_australia",
    "globe",
    "world",
    "east",
    "earth",
    "international"
  ],
  "\u{1F310}": [
    "globe_with_meridians",
    "earth",
    "international",
    "world",
    "internet",
    "interweb",
    "i18n"
  ],
  "\u{1F5FA}\uFE0F": [
    "world_map",
    "location",
    "direction"
  ],
  "\u{1F5FE}": [
    "map_of_japan",
    "nation",
    "country",
    "japanese",
    "asia"
  ],
  "\u{1F9ED}": [
    "compass",
    "magnetic",
    "navigation",
    "orienteering"
  ],
  "\u{1F3D4}\uFE0F": [
    "snow_capped_mountain",
    "photo",
    "nature",
    "environment",
    "winter",
    "cold"
  ],
  "\u26F0\uFE0F": [
    "mountain",
    "photo",
    "nature",
    "environment"
  ],
  "\u{1F30B}": [
    "volcano",
    "photo",
    "nature",
    "disaster"
  ],
  "\u{1F5FB}": [
    "mount_fuji",
    "photo",
    "mountain",
    "nature",
    "japanese"
  ],
  "\u{1F3D5}\uFE0F": [
    "camping",
    "photo",
    "outdoors",
    "tent"
  ],
  "\u{1F3D6}\uFE0F": [
    "beach_with_umbrella",
    "weather",
    "summer",
    "sunny",
    "sand",
    "mojito"
  ],
  "\u{1F3DC}\uFE0F": [
    "desert",
    "photo",
    "warm",
    "saharah"
  ],
  "\u{1F3DD}\uFE0F": [
    "desert_island",
    "photo",
    "tropical",
    "mojito"
  ],
  "\u{1F3DE}\uFE0F": [
    "national_park",
    "photo",
    "environment",
    "nature"
  ],
  "\u{1F3DF}\uFE0F": [
    "stadium",
    "photo",
    "place",
    "sports",
    "concert",
    "venue"
  ],
  "\u{1F3DB}\uFE0F": [
    "classical_building",
    "art",
    "culture",
    "history"
  ],
  "\u{1F3D7}\uFE0F": [
    "building_construction",
    "wip",
    "working",
    "progress"
  ],
  "\u{1F9F1}": [
    "brick",
    "bricks"
  ],
  "\u{1F3D8}\uFE0F": [
    "houses",
    "buildings",
    "photo"
  ],
  "\u{1F3DA}\uFE0F": [
    "derelict_house",
    "abandon",
    "evict",
    "broken",
    "building"
  ],
  "\u{1F3E0}": [
    "house",
    "building",
    "home"
  ],
  "\u{1F3E1}": [
    "house_with_garden",
    "home",
    "plant",
    "nature"
  ],
  "\u{1F3E2}": [
    "office_building",
    "building",
    "bureau",
    "work"
  ],
  "\u{1F3E3}": [
    "japanese_post_office",
    "building",
    "envelope",
    "communication"
  ],
  "\u{1F3E4}": [
    "post_office",
    "building",
    "email"
  ],
  "\u{1F3E5}": [
    "hospital",
    "building",
    "health",
    "surgery",
    "doctor"
  ],
  "\u{1F3E6}": [
    "bank",
    "building",
    "money",
    "sales",
    "cash",
    "business",
    "enterprise"
  ],
  "\u{1F3E8}": [
    "hotel",
    "building",
    "accomodation",
    "checkin"
  ],
  "\u{1F3E9}": [
    "love_hotel",
    "like",
    "affection",
    "dating"
  ],
  "\u{1F3EA}": [
    "convenience_store",
    "building",
    "shopping",
    "groceries"
  ],
  "\u{1F3EB}": [
    "school",
    "building",
    "student",
    "education",
    "learn",
    "teach"
  ],
  "\u{1F3EC}": [
    "department_store",
    "building",
    "shopping",
    "mall"
  ],
  "\u{1F3ED}": [
    "factory",
    "building",
    "industry",
    "pollution",
    "smoke"
  ],
  "\u{1F3EF}": [
    "japanese_castle",
    "photo",
    "building"
  ],
  "\u{1F3F0}": [
    "castle",
    "building",
    "royalty",
    "history"
  ],
  "\u{1F492}": [
    "wedding",
    "love",
    "like",
    "affection",
    "couple",
    "marriage",
    "bride",
    "groom"
  ],
  "\u{1F5FC}": [
    "tokyo_tower",
    "photo",
    "japanese"
  ],
  "\u{1F5FD}": [
    "statue_of_liberty",
    "american",
    "newyork"
  ],
  "\u26EA": [
    "church",
    "building",
    "religion",
    "christ"
  ],
  "\u{1F54C}": [
    "mosque",
    "islam",
    "worship",
    "minaret"
  ],
  "\u{1F6D5}": [
    "hindu_temple",
    "religion"
  ],
  "\u{1F54D}": [
    "synagogue",
    "judaism",
    "worship",
    "temple",
    "jewish"
  ],
  "\u26E9\uFE0F": [
    "shinto_shrine",
    "temple",
    "japan",
    "kyoto"
  ],
  "\u{1F54B}": [
    "kaaba",
    "mecca",
    "mosque",
    "islam"
  ],
  "\u26F2": [
    "fountain",
    "photo",
    "summer",
    "water",
    "fresh"
  ],
  "\u26FA": [
    "tent",
    "photo",
    "camping",
    "outdoors"
  ],
  "\u{1F301}": [
    "foggy",
    "photo",
    "mountain"
  ],
  "\u{1F303}": [
    "night_with_stars",
    "evening",
    "city",
    "downtown"
  ],
  "\u{1F3D9}\uFE0F": [
    "cityscape",
    "photo",
    "night life",
    "urban"
  ],
  "\u{1F304}": [
    "sunrise_over_mountains",
    "view",
    "vacation",
    "photo"
  ],
  "\u{1F305}": [
    "sunrise",
    "morning",
    "view",
    "vacation",
    "photo"
  ],
  "\u{1F306}": [
    "cityscape_at_dusk",
    "photo",
    "evening",
    "sky",
    "buildings"
  ],
  "\u{1F307}": [
    "sunset",
    "photo",
    "good morning",
    "dawn"
  ],
  "\u{1F309}": [
    "bridge_at_night",
    "photo",
    "sanfrancisco"
  ],
  "\u2668\uFE0F": [
    "hot_springs",
    "bath",
    "warm",
    "relax"
  ],
  "\u{1F3A0}": [
    "carousel_horse",
    "photo",
    "carnival"
  ],
  "\u{1F3A1}": [
    "ferris_wheel",
    "photo",
    "carnival",
    "londoneye"
  ],
  "\u{1F3A2}": [
    "roller_coaster",
    "carnival",
    "playground",
    "photo",
    "fun"
  ],
  "\u{1F488}": [
    "barber_pole",
    "hair",
    "salon",
    "style"
  ],
  "\u{1F3AA}": [
    "circus_tent",
    "festival",
    "carnival",
    "party"
  ],
  "\u{1F682}": [
    "locomotive",
    "transportation",
    "vehicle",
    "train"
  ],
  "\u{1F683}": [
    "railway_car",
    "transportation",
    "vehicle"
  ],
  "\u{1F684}": [
    "high_speed_train",
    "transportation",
    "vehicle"
  ],
  "\u{1F685}": [
    "bullet_train",
    "transportation",
    "vehicle",
    "speed",
    "fast",
    "public",
    "travel"
  ],
  "\u{1F686}": [
    "train",
    "transportation",
    "vehicle"
  ],
  "\u{1F687}": [
    "metro",
    "transportation",
    "blue-square",
    "mrt",
    "underground",
    "tube"
  ],
  "\u{1F688}": [
    "light_rail",
    "transportation",
    "vehicle"
  ],
  "\u{1F689}": [
    "station",
    "transportation",
    "vehicle",
    "public"
  ],
  "\u{1F68A}": [
    "tram",
    "transportation",
    "vehicle"
  ],
  "\u{1F69D}": [
    "monorail",
    "transportation",
    "vehicle"
  ],
  "\u{1F69E}": [
    "mountain_railway",
    "transportation",
    "vehicle"
  ],
  "\u{1F68B}": [
    "tram_car",
    "transportation",
    "vehicle",
    "carriage",
    "public",
    "travel"
  ],
  "\u{1F68C}": [
    "bus",
    "car",
    "vehicle",
    "transportation"
  ],
  "\u{1F68D}": [
    "oncoming_bus",
    "vehicle",
    "transportation"
  ],
  "\u{1F68E}": [
    "trolleybus",
    "bart",
    "transportation",
    "vehicle"
  ],
  "\u{1F690}": [
    "minibus",
    "vehicle",
    "car",
    "transportation"
  ],
  "\u{1F691}": [
    "ambulance",
    "health",
    "911",
    "hospital"
  ],
  "\u{1F692}": [
    "fire_engine",
    "transportation",
    "cars",
    "vehicle"
  ],
  "\u{1F693}": [
    "police_car",
    "vehicle",
    "cars",
    "transportation",
    "law",
    "legal",
    "enforcement"
  ],
  "\u{1F694}": [
    "oncoming_police_car",
    "vehicle",
    "law",
    "legal",
    "enforcement",
    "911"
  ],
  "\u{1F695}": [
    "taxi",
    "uber",
    "vehicle",
    "cars",
    "transportation"
  ],
  "\u{1F696}": [
    "oncoming_taxi",
    "vehicle",
    "cars",
    "uber"
  ],
  "\u{1F697}": [
    "automobile",
    "red",
    "transportation",
    "vehicle"
  ],
  "\u{1F698}": [
    "oncoming_automobile",
    "car",
    "vehicle",
    "transportation"
  ],
  "\u{1F699}": [
    "sport_utility_vehicle",
    "transportation",
    "vehicle"
  ],
  "\u{1F69A}": [
    "delivery_truck",
    "cars",
    "transportation"
  ],
  "\u{1F69B}": [
    "articulated_lorry",
    "vehicle",
    "cars",
    "transportation",
    "express"
  ],
  "\u{1F69C}": [
    "tractor",
    "vehicle",
    "car",
    "farming",
    "agriculture"
  ],
  "\u{1F3CE}\uFE0F": [
    "racing_car",
    "sports",
    "race",
    "fast",
    "formula",
    "f1"
  ],
  "\u{1F3CD}\uFE0F": [
    "motorcycle",
    "race",
    "sports",
    "fast"
  ],
  "\u{1F6F5}": [
    "motor_scooter",
    "vehicle",
    "vespa",
    "sasha"
  ],
  "\u{1F9BD}": [
    "manual_wheelchair",
    "accessibility"
  ],
  "\u{1F9BC}": [
    "motorized_wheelchair",
    "accessibility"
  ],
  "\u{1F6FA}": [
    "auto_rickshaw",
    "move",
    "transportation"
  ],
  "\u{1F6B2}": [
    "bicycle",
    "bike",
    "sports",
    "exercise",
    "hipster"
  ],
  "\u{1F6F4}": [
    "kick_scooter",
    "vehicle",
    "kick",
    "razor"
  ],
  "\u{1F6F9}": [
    "skateboard",
    "board"
  ],
  "\u{1F68F}": [
    "bus_stop",
    "transportation",
    "wait"
  ],
  "\u{1F6E3}\uFE0F": [
    "motorway",
    "road",
    "cupertino",
    "interstate",
    "highway"
  ],
  "\u{1F6E4}\uFE0F": [
    "railway_track",
    "train",
    "transportation"
  ],
  "\u{1F6E2}\uFE0F": [
    "oil_drum",
    "barrell"
  ],
  "\u26FD": [
    "fuel_pump",
    "gas station",
    "petroleum"
  ],
  "\u{1F6A8}": [
    "police_car_light",
    "police",
    "ambulance",
    "911",
    "emergency",
    "alert",
    "error",
    "pinged",
    "law",
    "legal"
  ],
  "\u{1F6A5}": [
    "horizontal_traffic_light",
    "transportation",
    "signal"
  ],
  "\u{1F6A6}": [
    "vertical_traffic_light",
    "transportation",
    "driving"
  ],
  "\u{1F6D1}": [
    "stop_sign",
    "stop"
  ],
  "\u{1F6A7}": [
    "construction",
    "wip",
    "progress",
    "caution",
    "warning"
  ],
  "\u2693": [
    "anchor",
    "ship",
    "ferry",
    "sea",
    "boat"
  ],
  "\u26F5": [
    "sailboat",
    "ship",
    "summer",
    "transportation",
    "water",
    "sailing"
  ],
  "\u{1F6F6}": [
    "canoe",
    "boat",
    "paddle",
    "water",
    "ship"
  ],
  "\u{1F6A4}": [
    "speedboat",
    "ship",
    "transportation",
    "vehicle",
    "summer"
  ],
  "\u{1F6F3}\uFE0F": [
    "passenger_ship",
    "yacht",
    "cruise",
    "ferry"
  ],
  "\u26F4\uFE0F": [
    "ferry",
    "boat",
    "ship",
    "yacht"
  ],
  "\u{1F6E5}\uFE0F": [
    "motor_boat",
    "ship"
  ],
  "\u{1F6A2}": [
    "ship",
    "transportation",
    "titanic",
    "deploy"
  ],
  "\u2708\uFE0F": [
    "airplane",
    "vehicle",
    "transportation",
    "flight",
    "fly"
  ],
  "\u{1F6E9}\uFE0F": [
    "small_airplane",
    "flight",
    "transportation",
    "fly",
    "vehicle"
  ],
  "\u{1F6EB}": [
    "airplane_departure",
    "airport",
    "flight",
    "landing"
  ],
  "\u{1F6EC}": [
    "airplane_arrival",
    "airport",
    "flight",
    "boarding"
  ],
  "\u{1FA82}": [
    "parachute",
    "fly",
    "glide"
  ],
  "\u{1F4BA}": [
    "seat",
    "sit",
    "airplane",
    "transport",
    "bus",
    "flight",
    "fly"
  ],
  "\u{1F681}": [
    "helicopter",
    "transportation",
    "vehicle",
    "fly"
  ],
  "\u{1F69F}": [
    "suspension_railway",
    "vehicle",
    "transportation"
  ],
  "\u{1F6A0}": [
    "mountain_cableway",
    "transportation",
    "vehicle",
    "ski"
  ],
  "\u{1F6A1}": [
    "aerial_tramway",
    "transportation",
    "vehicle",
    "ski"
  ],
  "\u{1F6F0}\uFE0F": [
    "satellite",
    "communication",
    "gps",
    "orbit",
    "spaceflight",
    "NASA",
    "ISS"
  ],
  "\u{1F680}": [
    "rocket",
    "launch",
    "ship",
    "staffmode",
    "NASA",
    "outer space",
    "outer_space",
    "fly"
  ],
  "\u{1F6F8}": [
    "flying_saucer",
    "transportation",
    "vehicle",
    "ufo"
  ],
  "\u{1F6CE}\uFE0F": [
    "bellhop_bell",
    "service"
  ],
  "\u{1F9F3}": [
    "luggage",
    "packing",
    "travel"
  ],
  "\u231B": [
    "hourglass_done",
    "time",
    "clock",
    "oldschool",
    "limit",
    "exam",
    "quiz",
    "test"
  ],
  "\u23F3": [
    "hourglass_not_done",
    "oldschool",
    "time",
    "countdown"
  ],
  "\u231A": [
    "watch",
    "time",
    "accessories"
  ],
  "\u23F0": [
    "alarm_clock",
    "time",
    "wake"
  ],
  "\u23F1\uFE0F": [
    "stopwatch",
    "time",
    "deadline"
  ],
  "\u23F2\uFE0F": [
    "timer_clock",
    "alarm"
  ],
  "\u{1F570}\uFE0F": [
    "mantelpiece_clock",
    "time"
  ],
  "\u{1F55B}": [
    "twelve_o_clock",
    "12",
    "00:00",
    "0000",
    "12:00",
    "1200",
    "time",
    "noon",
    "midnight",
    "midday",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F567}": [
    "twelve_thirty",
    "00:30",
    "0030",
    "12:30",
    "1230",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F550}": [
    "one_o_clock",
    "1",
    "1:00",
    "100",
    "13:00",
    "1300",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F55C}": [
    "one_thirty",
    "1:30",
    "130",
    "13:30",
    "1330",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F551}": [
    "two_o_clock",
    "2",
    "2:00",
    "200",
    "14:00",
    "1400",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F55D}": [
    "two_thirty",
    "2:30",
    "230",
    "14:30",
    "1430",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F552}": [
    "three_o_clock",
    "3",
    "3:00",
    "300",
    "15:00",
    "1500",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F55E}": [
    "three_thirty",
    "3:30",
    "330",
    "15:30",
    "1530",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F553}": [
    "four_o_clock",
    "4",
    "4:00",
    "400",
    "16:00",
    "1600",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F55F}": [
    "four_thirty",
    "4:30",
    "430",
    "16:30",
    "1630",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F554}": [
    "five_o_clock",
    "5",
    "5:00",
    "500",
    "17:00",
    "1700",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F560}": [
    "five_thirty",
    "5:30",
    "530",
    "17:30",
    "1730",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F555}": [
    "six_o_clock",
    "6",
    "6:00",
    "600",
    "18:00",
    "1800",
    "time",
    "late",
    "early",
    "schedule",
    "dawn",
    "dusk"
  ],
  "\u{1F561}": [
    "six_thirty",
    "6:30",
    "630",
    "18:30",
    "1830",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F556}": [
    "seven_o_clock",
    "7",
    "7:00",
    "700",
    "19:00",
    "1900",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F562}": [
    "seven_thirty",
    "7:30",
    "730",
    "19:30",
    "1930",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F557}": [
    "eight_o_clock",
    "8",
    "8:00",
    "800",
    "20:00",
    "2000",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F563}": [
    "eight_thirty",
    "8:30",
    "830",
    "20:30",
    "2030",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F558}": [
    "nine_o_clock",
    "9",
    "9:00",
    "900",
    "21:00",
    "2100",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F564}": [
    "nine_thirty",
    "9:30",
    "930",
    "21:30",
    "2130",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F559}": [
    "ten_o_clock",
    "10",
    "10:00",
    "1000",
    "22:00",
    "2200",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F565}": [
    "ten_thirty",
    "10:30",
    "1030",
    "22:30",
    "2230",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F55A}": [
    "eleven_o_clock",
    "11",
    "11:00",
    "1100",
    "23:00",
    "2300",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F566}": [
    "eleven_thirty",
    "11:30",
    "1130",
    "23:30",
    "2330",
    "time",
    "late",
    "early",
    "schedule"
  ],
  "\u{1F311}": [
    "new_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F312}": [
    "waxing_crescent_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F313}": [
    "first_quarter_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F314}": [
    "waxing_gibbous_moon",
    "nature",
    "night",
    "sky",
    "gray",
    "twilight",
    "planet",
    "space",
    "evening",
    "sleep"
  ],
  "\u{1F315}": [
    "full_moon",
    "nature",
    "yellow",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F316}": [
    "waning_gibbous_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep",
    "waxing_gibbous_moon"
  ],
  "\u{1F317}": [
    "last_quarter_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F318}": [
    "waning_crescent_moon",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F319}": [
    "crescent_moon",
    "night",
    "sleep",
    "sky",
    "evening",
    "magic"
  ],
  "\u{1F31A}": [
    "new_moon_face",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F31B}": [
    "first_quarter_moon_face",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F31C}": [
    "last_quarter_moon_face",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F321}\uFE0F": [
    "thermometer",
    "weather",
    "temperature",
    "hot",
    "cold"
  ],
  "\u2600\uFE0F": [
    "sun",
    "weather",
    "nature",
    "brightness",
    "summer",
    "beach",
    "spring"
  ],
  "\u{1F31D}": [
    "full_moon_face",
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  "\u{1F31E}": [
    "sun_with_face",
    "nature",
    "morning",
    "sky"
  ],
  "\u{1FA90}": [
    "ringed_planet",
    "outerspace"
  ],
  "\u2B50": [
    "star",
    "night",
    "yellow"
  ],
  "\u{1F31F}": [
    "glowing_star",
    "night",
    "sparkle",
    "awesome",
    "good",
    "magic"
  ],
  "\u{1F320}": [
    "shooting_star",
    "night",
    "photo"
  ],
  "\u{1F30C}": [
    "milky_way",
    "photo",
    "space",
    "stars"
  ],
  "\u2601\uFE0F": [
    "cloud",
    "weather",
    "sky"
  ],
  "\u26C5": [
    "sun_behind_cloud",
    "weather",
    "nature",
    "cloudy",
    "morning",
    "fall",
    "spring"
  ],
  "\u26C8\uFE0F": [
    "cloud_with_lightning_and_rain",
    "weather",
    "lightning"
  ],
  "\u{1F324}\uFE0F": [
    "sun_behind_small_cloud",
    "weather"
  ],
  "\u{1F325}\uFE0F": [
    "sun_behind_large_cloud",
    "weather"
  ],
  "\u{1F326}\uFE0F": [
    "sun_behind_rain_cloud",
    "weather"
  ],
  "\u{1F327}\uFE0F": [
    "cloud_with_rain",
    "weather"
  ],
  "\u{1F328}\uFE0F": [
    "cloud_with_snow",
    "weather"
  ],
  "\u{1F329}\uFE0F": [
    "cloud_with_lightning",
    "weather",
    "thunder"
  ],
  "\u{1F32A}\uFE0F": [
    "tornado",
    "weather",
    "cyclone",
    "twister"
  ],
  "\u{1F32B}\uFE0F": [
    "fog",
    "weather"
  ],
  "\u{1F32C}\uFE0F": [
    "wind_face",
    "gust",
    "air"
  ],
  "\u{1F300}": [
    "cyclone",
    "weather",
    "swirl",
    "blue",
    "cloud",
    "vortex",
    "spiral",
    "whirlpool",
    "spin",
    "tornado",
    "hurricane",
    "typhoon"
  ],
  "\u{1F308}": [
    "rainbow",
    "nature",
    "happy",
    "unicorn_face",
    "photo",
    "sky",
    "spring"
  ],
  "\u{1F302}": [
    "closed_umbrella",
    "weather",
    "rain",
    "drizzle"
  ],
  "\u2602\uFE0F": [
    "umbrella",
    "weather",
    "spring"
  ],
  "\u2614": [
    "umbrella_with_rain_drops",
    "rainy",
    "weather",
    "spring"
  ],
  "\u26F1\uFE0F": [
    "umbrella_on_ground",
    "weather",
    "summer"
  ],
  "\u26A1": [
    "high_voltage",
    "thunder",
    "weather",
    "lightning bolt",
    "fast",
    "zap"
  ],
  "\u2744\uFE0F": [
    "snowflake",
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas"
  ],
  "\u2603\uFE0F": [
    "snowman",
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas",
    "frozen"
  ],
  "\u26C4": [
    "snowman_without_snow",
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas",
    "frozen",
    "without_snow"
  ],
  "\u2604\uFE0F": [
    "comet",
    "space"
  ],
  "\u{1F525}": [
    "fire",
    "hot",
    "cook",
    "flame"
  ],
  "\u{1F4A7}": [
    "droplet",
    "water",
    "drip",
    "faucet",
    "spring"
  ],
  "\u{1F30A}": [
    "water_wave",
    "sea",
    "water",
    "wave",
    "nature",
    "tsunami",
    "disaster"
  ],
  "\u{1F383}": [
    "jack_o_lantern",
    "halloween",
    "light",
    "pumpkin",
    "creepy",
    "fall"
  ],
  "\u{1F384}": [
    "christmas_tree",
    "festival",
    "vacation",
    "december",
    "xmas",
    "celebration"
  ],
  "\u{1F386}": [
    "fireworks",
    "photo",
    "festival",
    "carnival",
    "congratulations"
  ],
  "\u{1F387}": [
    "sparkler",
    "stars",
    "night",
    "shine"
  ],
  "\u{1F9E8}": [
    "firecracker",
    "dynamite",
    "boom",
    "explode",
    "explosion",
    "explosive"
  ],
  "\u2728": [
    "sparkles",
    "stars",
    "shine",
    "shiny",
    "cool",
    "awesome",
    "good",
    "magic"
  ],
  "\u{1F388}": [
    "balloon",
    "party",
    "celebration",
    "birthday",
    "circus"
  ],
  "\u{1F389}": [
    "party_popper",
    "party",
    "congratulations",
    "birthday",
    "magic",
    "circus",
    "celebration",
    "tada"
  ],
  "\u{1F38A}": [
    "confetti_ball",
    "festival",
    "party",
    "birthday",
    "circus"
  ],
  "\u{1F38B}": [
    "tanabata_tree",
    "plant",
    "nature",
    "branch",
    "summer",
    "bamboo",
    "wish",
    "star_festival",
    "tanzaku"
  ],
  "\u{1F38D}": [
    "pine_decoration",
    "japanese",
    "plant",
    "nature",
    "vegetable",
    "panda",
    "new_years",
    "bamboo"
  ],
  "\u{1F38E}": [
    "japanese_dolls",
    "japanese",
    "toy",
    "kimono"
  ],
  "\u{1F38F}": [
    "carp_streamer",
    "fish",
    "japanese",
    "koinobori",
    "carp",
    "banner"
  ],
  "\u{1F390}": [
    "wind_chime",
    "nature",
    "ding",
    "spring",
    "bell"
  ],
  "\u{1F391}": [
    "moon_viewing_ceremony",
    "photo",
    "japan",
    "asia",
    "tsukimi"
  ],
  "\u{1F9E7}": [
    "red_envelope",
    "gift"
  ],
  "\u{1F380}": [
    "ribbon",
    "decoration",
    "pink",
    "girl",
    "bowtie"
  ],
  "\u{1F381}": [
    "wrapped_gift",
    "present",
    "birthday",
    "christmas",
    "xmas"
  ],
  "\u{1F397}\uFE0F": [
    "reminder_ribbon",
    "sports",
    "cause",
    "support",
    "awareness"
  ],
  "\u{1F39F}\uFE0F": [
    "admission_tickets",
    "sports",
    "concert",
    "entrance"
  ],
  "\u{1F3AB}": [
    "ticket",
    "event",
    "concert",
    "pass"
  ],
  "\u{1F396}\uFE0F": [
    "military_medal",
    "award",
    "winning",
    "army"
  ],
  "\u{1F3C6}": [
    "trophy",
    "win",
    "award",
    "contest",
    "place",
    "ftw",
    "ceremony"
  ],
  "\u{1F3C5}": [
    "sports_medal",
    "award",
    "winning"
  ],
  "\u{1F947}": [
    "1st_place_medal",
    "award",
    "winning",
    "first"
  ],
  "\u{1F948}": [
    "2nd_place_medal",
    "award",
    "second"
  ],
  "\u{1F949}": [
    "3rd_place_medal",
    "award",
    "third"
  ],
  "\u26BD": [
    "soccer_ball",
    "sports",
    "football"
  ],
  "\u26BE": [
    "baseball",
    "sports",
    "balls"
  ],
  "\u{1F94E}": [
    "softball",
    "sports",
    "balls"
  ],
  "\u{1F3C0}": [
    "basketball",
    "sports",
    "balls",
    "NBA"
  ],
  "\u{1F3D0}": [
    "volleyball",
    "sports",
    "balls"
  ],
  "\u{1F3C8}": [
    "american_football",
    "sports",
    "balls",
    "NFL"
  ],
  "\u{1F3C9}": [
    "rugby_football",
    "sports",
    "team"
  ],
  "\u{1F3BE}": [
    "tennis",
    "sports",
    "balls",
    "green"
  ],
  "\u{1F94F}": [
    "flying_disc",
    "sports",
    "frisbee",
    "ultimate"
  ],
  "\u{1F3B3}": [
    "bowling",
    "sports",
    "fun",
    "play"
  ],
  "\u{1F3CF}": [
    "cricket_game",
    "sports"
  ],
  "\u{1F3D1}": [
    "field_hockey",
    "sports"
  ],
  "\u{1F3D2}": [
    "ice_hockey",
    "sports"
  ],
  "\u{1F94D}": [
    "lacrosse",
    "sports",
    "ball",
    "stick"
  ],
  "\u{1F3D3}": [
    "ping_pong",
    "sports",
    "pingpong"
  ],
  "\u{1F3F8}": [
    "badminton",
    "sports"
  ],
  "\u{1F94A}": [
    "boxing_glove",
    "sports",
    "fighting"
  ],
  "\u{1F94B}": [
    "martial_arts_uniform",
    "judo",
    "karate",
    "taekwondo"
  ],
  "\u{1F945}": [
    "goal_net",
    "sports"
  ],
  "\u26F3": [
    "flag_in_hole",
    "sports",
    "business",
    "flag",
    "hole",
    "summer"
  ],
  "\u26F8\uFE0F": [
    "ice_skate",
    "sports"
  ],
  "\u{1F3A3}": [
    "fishing_pole",
    "food",
    "hobby",
    "summer"
  ],
  "\u{1F93F}": [
    "diving_mask",
    "sport",
    "ocean"
  ],
  "\u{1F3BD}": [
    "running_shirt",
    "play",
    "pageant"
  ],
  "\u{1F3BF}": [
    "skis",
    "sports",
    "winter",
    "cold",
    "snow"
  ],
  "\u{1F6F7}": [
    "sled",
    "sleigh",
    "luge",
    "toboggan"
  ],
  "\u{1F94C}": [
    "curling_stone",
    "sports"
  ],
  "\u{1F3AF}": [
    "direct_hit",
    "game",
    "play",
    "bar",
    "target",
    "bullseye"
  ],
  "\u{1FA80}": [
    "yo_yo",
    "toy"
  ],
  "\u{1FA81}": [
    "kite",
    "wind",
    "fly"
  ],
  "\u{1F3B1}": [
    "pool_8_ball",
    "pool",
    "hobby",
    "game",
    "luck",
    "magic"
  ],
  "\u{1F52E}": [
    "crystal_ball",
    "disco",
    "party",
    "magic",
    "circus",
    "fortune_teller"
  ],
  "\u{1F9FF}": [
    "nazar_amulet",
    "bead",
    "charm"
  ],
  "\u{1F3AE}": [
    "video_game",
    "play",
    "console",
    "PS4",
    "controller"
  ],
  "\u{1F579}\uFE0F": [
    "joystick",
    "game",
    "play"
  ],
  "\u{1F3B0}": [
    "slot_machine",
    "bet",
    "gamble",
    "vegas",
    "fruit machine",
    "luck",
    "casino"
  ],
  "\u{1F3B2}": [
    "game_die",
    "dice",
    "random",
    "tabletop",
    "play",
    "luck"
  ],
  "\u{1F9E9}": [
    "puzzle_piece",
    "interlocking",
    "puzzle",
    "piece"
  ],
  "\u{1F9F8}": [
    "teddy_bear",
    "plush",
    "stuffed"
  ],
  "\u2660\uFE0F": [
    "spade_suit",
    "poker",
    "cards",
    "suits",
    "magic"
  ],
  "\u2665\uFE0F": [
    "heart_suit",
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  "\u2666\uFE0F": [
    "diamond_suit",
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  "\u2663\uFE0F": [
    "club_suit",
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  "\u265F\uFE0F": [
    "chess_pawn",
    "expendable"
  ],
  "\u{1F0CF}": [
    "joker",
    "poker",
    "cards",
    "game",
    "play",
    "magic"
  ],
  "\u{1F004}": [
    "mahjong_red_dragon",
    "game",
    "play",
    "chinese",
    "kanji"
  ],
  "\u{1F3B4}": [
    "flower_playing_cards",
    "game",
    "sunset",
    "red"
  ],
  "\u{1F3AD}": [
    "performing_arts",
    "acting",
    "theater",
    "drama"
  ],
  "\u{1F5BC}\uFE0F": [
    "framed_picture",
    "photography"
  ],
  "\u{1F3A8}": [
    "artist_palette",
    "design",
    "paint",
    "draw",
    "colors"
  ],
  "\u{1F9F5}": [
    "thread",
    "needle",
    "sewing",
    "spool",
    "string"
  ],
  "\u{1F9F6}": [
    "yarn",
    "ball",
    "crochet",
    "knit"
  ],
  "\u{1F453}": [
    "glasses",
    "fashion",
    "accessories",
    "eyesight",
    "nerdy",
    "dork",
    "geek"
  ],
  "\u{1F576}\uFE0F": [
    "sunglasses",
    "face",
    "cool",
    "accessories"
  ],
  "\u{1F97D}": [
    "goggles",
    "eyes",
    "protection",
    "safety"
  ],
  "\u{1F97C}": [
    "lab_coat",
    "doctor",
    "experiment",
    "scientist",
    "chemist"
  ],
  "\u{1F9BA}": [
    "safety_vest",
    "protection"
  ],
  "\u{1F454}": [
    "necktie",
    "shirt",
    "suitup",
    "formal",
    "fashion",
    "cloth",
    "business"
  ],
  "\u{1F455}": [
    "t_shirt",
    "fashion",
    "cloth",
    "casual",
    "shirt",
    "tee"
  ],
  "\u{1F456}": [
    "jeans",
    "fashion",
    "shopping"
  ],
  "\u{1F9E3}": [
    "scarf",
    "neck",
    "winter",
    "clothes"
  ],
  "\u{1F9E4}": [
    "gloves",
    "hands",
    "winter",
    "clothes"
  ],
  "\u{1F9E5}": [
    "coat",
    "jacket"
  ],
  "\u{1F9E6}": [
    "socks",
    "stockings",
    "clothes"
  ],
  "\u{1F457}": [
    "dress",
    "clothes",
    "fashion",
    "shopping"
  ],
  "\u{1F458}": [
    "kimono",
    "dress",
    "fashion",
    "women",
    "female",
    "japanese"
  ],
  "\u{1F97B}": [
    "sari",
    "dress"
  ],
  "\u{1FA71}": [
    "one_piece_swimsuit",
    "fashion"
  ],
  "\u{1FA72}": [
    "briefs",
    "clothing"
  ],
  "\u{1FA73}": [
    "shorts",
    "clothing"
  ],
  "\u{1F459}": [
    "bikini",
    "swimming",
    "female",
    "woman",
    "girl",
    "fashion",
    "beach",
    "summer"
  ],
  "\u{1F45A}": [
    "woman_s_clothes",
    "fashion",
    "shopping_bags",
    "female"
  ],
  "\u{1F45B}": [
    "purse",
    "fashion",
    "accessories",
    "money",
    "sales",
    "shopping"
  ],
  "\u{1F45C}": [
    "handbag",
    "fashion",
    "accessory",
    "accessories",
    "shopping"
  ],
  "\u{1F45D}": [
    "clutch_bag",
    "bag",
    "accessories",
    "shopping"
  ],
  "\u{1F6CD}\uFE0F": [
    "shopping_bags",
    "mall",
    "buy",
    "purchase"
  ],
  "\u{1F392}": [
    "backpack",
    "student",
    "education",
    "bag"
  ],
  "\u{1F45E}": [
    "man_s_shoe",
    "fashion",
    "male"
  ],
  "\u{1F45F}": [
    "running_shoe",
    "shoes",
    "sports",
    "sneakers"
  ],
  "\u{1F97E}": [
    "hiking_boot",
    "backpacking",
    "camping",
    "hiking"
  ],
  "\u{1F97F}": [
    "flat_shoe",
    "ballet",
    "slip-on",
    "slipper"
  ],
  "\u{1F460}": [
    "high_heeled_shoe",
    "fashion",
    "shoes",
    "female",
    "pumps",
    "stiletto"
  ],
  "\u{1F461}": [
    "woman_s_sandal",
    "shoes",
    "fashion",
    "flip flops"
  ],
  "\u{1FA70}": [
    "ballet_shoes",
    "dance"
  ],
  "\u{1F462}": [
    "woman_s_boot",
    "shoes",
    "fashion"
  ],
  "\u{1F451}": [
    "crown",
    "king",
    "kod",
    "leader",
    "royalty",
    "lord"
  ],
  "\u{1F452}": [
    "woman_s_hat",
    "fashion",
    "accessories",
    "female",
    "lady",
    "spring"
  ],
  "\u{1F3A9}": [
    "top_hat",
    "magic",
    "gentleman",
    "classy",
    "circus"
  ],
  "\u{1F393}": [
    "graduation_cap",
    "school",
    "college",
    "degree",
    "university",
    "graduation",
    "cap",
    "hat",
    "legal",
    "learn",
    "education"
  ],
  "\u{1F9E2}": [
    "billed_cap",
    "cap",
    "baseball"
  ],
  "\u26D1\uFE0F": [
    "rescue_worker_s_helmet",
    "construction",
    "build"
  ],
  "\u{1F4FF}": [
    "prayer_beads",
    "dhikr",
    "religious"
  ],
  "\u{1F484}": [
    "lipstick",
    "female",
    "girl",
    "fashion",
    "woman"
  ],
  "\u{1F48D}": [
    "ring",
    "wedding",
    "propose",
    "marriage",
    "valentines",
    "diamond",
    "fashion",
    "jewelry",
    "gem",
    "engagement"
  ],
  "\u{1F48E}": [
    "gem_stone",
    "blue",
    "ruby",
    "diamond",
    "jewelry"
  ],
  "\u{1F507}": [
    "muted_speaker",
    "sound",
    "volume",
    "silence",
    "quiet"
  ],
  "\u{1F508}": [
    "speaker_low_volume",
    "sound",
    "volume",
    "silence",
    "broadcast"
  ],
  "\u{1F509}": [
    "speaker_medium_volume",
    "volume",
    "speaker",
    "broadcast"
  ],
  "\u{1F50A}": [
    "speaker_high_volume",
    "volume",
    "noise",
    "noisy",
    "speaker",
    "broadcast"
  ],
  "\u{1F4E2}": [
    "loudspeaker",
    "volume",
    "sound"
  ],
  "\u{1F4E3}": [
    "megaphone",
    "sound",
    "speaker",
    "volume"
  ],
  "\u{1F4EF}": [
    "postal_horn",
    "instrument",
    "music"
  ],
  "\u{1F514}": [
    "bell",
    "sound",
    "notification",
    "christmas",
    "xmas",
    "chime"
  ],
  "\u{1F515}": [
    "bell_with_slash",
    "sound",
    "volume",
    "mute",
    "quiet",
    "silent"
  ],
  "\u{1F3BC}": [
    "musical_score",
    "treble",
    "clef",
    "compose"
  ],
  "\u{1F3B5}": [
    "musical_note",
    "score",
    "tone",
    "sound"
  ],
  "\u{1F3B6}": [
    "musical_notes",
    "music",
    "score"
  ],
  "\u{1F399}\uFE0F": [
    "studio_microphone",
    "sing",
    "recording",
    "artist",
    "talkshow"
  ],
  "\u{1F39A}\uFE0F": [
    "level_slider",
    "scale"
  ],
  "\u{1F39B}\uFE0F": [
    "control_knobs",
    "dial"
  ],
  "\u{1F3A4}": [
    "microphone",
    "sound",
    "music",
    "PA",
    "sing",
    "talkshow"
  ],
  "\u{1F3A7}": [
    "headphone",
    "music",
    "score",
    "gadgets"
  ],
  "\u{1F4FB}": [
    "radio",
    "communication",
    "music",
    "podcast",
    "program"
  ],
  "\u{1F3B7}": [
    "saxophone",
    "music",
    "instrument",
    "jazz",
    "blues"
  ],
  "\u{1F3B8}": [
    "guitar",
    "music",
    "instrument"
  ],
  "\u{1F3B9}": [
    "musical_keyboard",
    "piano",
    "instrument",
    "compose"
  ],
  "\u{1F3BA}": [
    "trumpet",
    "music",
    "brass"
  ],
  "\u{1F3BB}": [
    "violin",
    "music",
    "instrument",
    "orchestra",
    "symphony"
  ],
  "\u{1FA95}": [
    "banjo",
    "music",
    "instructment"
  ],
  "\u{1F941}": [
    "drum",
    "music",
    "instrument",
    "drumsticks",
    "snare"
  ],
  "\u{1F4F1}": [
    "mobile_phone",
    "technology",
    "apple",
    "gadgets",
    "dial"
  ],
  "\u{1F4F2}": [
    "mobile_phone_with_arrow",
    "iphone",
    "incoming"
  ],
  "\u260E\uFE0F": [
    "telephone",
    "technology",
    "communication",
    "dial"
  ],
  "\u{1F4DE}": [
    "telephone_receiver",
    "technology",
    "communication",
    "dial"
  ],
  "\u{1F4DF}": [
    "pager",
    "bbcall",
    "oldschool",
    "90s"
  ],
  "\u{1F4E0}": [
    "fax_machine",
    "communication",
    "technology"
  ],
  "\u{1F50B}": [
    "battery",
    "power",
    "energy",
    "sustain"
  ],
  "\u{1F50C}": [
    "electric_plug",
    "charger",
    "power"
  ],
  "\u{1F4BB}": [
    "laptop",
    "technology",
    "screen",
    "display",
    "monitor"
  ],
  "\u{1F5A5}\uFE0F": [
    "desktop_computer",
    "technology",
    "computing",
    "screen"
  ],
  "\u{1F5A8}\uFE0F": [
    "printer",
    "paper",
    "ink"
  ],
  "\u2328\uFE0F": [
    "keyboard",
    "technology",
    "computer",
    "type",
    "input",
    "text"
  ],
  "\u{1F5B1}\uFE0F": [
    "computer_mouse",
    "click"
  ],
  "\u{1F5B2}\uFE0F": [
    "trackball",
    "technology",
    "trackpad"
  ],
  "\u{1F4BD}": [
    "computer_disk",
    "technology",
    "record",
    "data",
    "disk",
    "90s"
  ],
  "\u{1F4BE}": [
    "floppy_disk",
    "oldschool",
    "technology",
    "save",
    "90s",
    "80s"
  ],
  "\u{1F4BF}": [
    "optical_disk",
    "technology",
    "dvd",
    "disk",
    "disc",
    "90s"
  ],
  "\u{1F4C0}": [
    "dvd",
    "cd",
    "disk",
    "disc"
  ],
  "\u{1F9EE}": [
    "abacus",
    "calculation"
  ],
  "\u{1F3A5}": [
    "movie_camera",
    "film",
    "record"
  ],
  "\u{1F39E}\uFE0F": [
    "film_frames",
    "movie"
  ],
  "\u{1F4FD}\uFE0F": [
    "film_projector",
    "video",
    "tape",
    "record",
    "movie"
  ],
  "\u{1F3AC}": [
    "clapper_board",
    "movie",
    "film",
    "record"
  ],
  "\u{1F4FA}": [
    "television",
    "technology",
    "program",
    "oldschool",
    "show"
  ],
  "\u{1F4F7}": [
    "camera",
    "gadgets",
    "photography"
  ],
  "\u{1F4F8}": [
    "camera_with_flash",
    "photography",
    "gadgets"
  ],
  "\u{1F4F9}": [
    "video_camera",
    "film",
    "record"
  ],
  "\u{1F4FC}": [
    "videocassette",
    "record",
    "video",
    "oldschool",
    "90s",
    "80s"
  ],
  "\u{1F50D}": [
    "magnifying_glass_tilted_left",
    "search",
    "zoom",
    "find",
    "detective"
  ],
  "\u{1F50E}": [
    "magnifying_glass_tilted_right",
    "search",
    "zoom",
    "find",
    "detective"
  ],
  "\u{1F56F}\uFE0F": [
    "candle",
    "fire",
    "wax"
  ],
  "\u{1F4A1}": [
    "light_bulb",
    "light",
    "electricity",
    "idea"
  ],
  "\u{1F526}": [
    "flashlight",
    "dark",
    "camping",
    "sight",
    "night"
  ],
  "\u{1F3EE}": [
    "red_paper_lantern",
    "light",
    "paper",
    "halloween",
    "spooky"
  ],
  "\u{1FA94}": [
    "diya_lamp",
    "lighting"
  ],
  "\u{1F4D4}": [
    "notebook_with_decorative_cover",
    "classroom",
    "notes",
    "record",
    "paper",
    "study"
  ],
  "\u{1F4D5}": [
    "closed_book",
    "read",
    "library",
    "knowledge",
    "textbook",
    "learn"
  ],
  "\u{1F4D6}": [
    "open_book",
    "book",
    "read",
    "library",
    "knowledge",
    "literature",
    "learn",
    "study"
  ],
  "\u{1F4D7}": [
    "green_book",
    "read",
    "library",
    "knowledge",
    "study"
  ],
  "\u{1F4D8}": [
    "blue_book",
    "read",
    "library",
    "knowledge",
    "learn",
    "study"
  ],
  "\u{1F4D9}": [
    "orange_book",
    "read",
    "library",
    "knowledge",
    "textbook",
    "study"
  ],
  "\u{1F4DA}": [
    "books",
    "literature",
    "library",
    "study"
  ],
  "\u{1F4D3}": [
    "notebook",
    "stationery",
    "record",
    "notes",
    "paper",
    "study"
  ],
  "\u{1F4D2}": [
    "ledger",
    "notes",
    "paper"
  ],
  "\u{1F4C3}": [
    "page_with_curl",
    "documents",
    "office",
    "paper"
  ],
  "\u{1F4DC}": [
    "scroll",
    "documents",
    "ancient",
    "history",
    "paper"
  ],
  "\u{1F4C4}": [
    "page_facing_up",
    "documents",
    "office",
    "paper",
    "information"
  ],
  "\u{1F4F0}": [
    "newspaper",
    "press",
    "headline"
  ],
  "\u{1F5DE}\uFE0F": [
    "rolled_up_newspaper",
    "press",
    "headline"
  ],
  "\u{1F4D1}": [
    "bookmark_tabs",
    "favorite",
    "save",
    "order",
    "tidy"
  ],
  "\u{1F516}": [
    "bookmark",
    "favorite",
    "label",
    "save"
  ],
  "\u{1F3F7}\uFE0F": [
    "label",
    "sale",
    "tag"
  ],
  "\u{1F4B0}": [
    "money_bag",
    "dollar",
    "payment",
    "coins",
    "sale"
  ],
  "\u{1F4B4}": [
    "yen_banknote",
    "money",
    "sales",
    "japanese",
    "dollar",
    "currency"
  ],
  "\u{1F4B5}": [
    "dollar_banknote",
    "money",
    "sales",
    "bill",
    "currency"
  ],
  "\u{1F4B6}": [
    "euro_banknote",
    "money",
    "sales",
    "dollar",
    "currency"
  ],
  "\u{1F4B7}": [
    "pound_banknote",
    "british",
    "sterling",
    "money",
    "sales",
    "bills",
    "uk",
    "england",
    "currency"
  ],
  "\u{1F4B8}": [
    "money_with_wings",
    "dollar",
    "bills",
    "payment",
    "sale"
  ],
  "\u{1F4B3}": [
    "credit_card",
    "money",
    "sales",
    "dollar",
    "bill",
    "payment",
    "shopping"
  ],
  "\u{1F9FE}": [
    "receipt",
    "accounting",
    "expenses"
  ],
  "\u{1F4B9}": [
    "chart_increasing_with_yen",
    "green-square",
    "graph",
    "presentation",
    "stats"
  ],
  "\u{1F4B1}": [
    "currency_exchange",
    "money",
    "sales",
    "dollar",
    "travel"
  ],
  "\u{1F4B2}": [
    "heavy_dollar_sign",
    "money",
    "sales",
    "payment",
    "currency",
    "buck"
  ],
  "\u2709\uFE0F": [
    "envelope",
    "letter",
    "postal",
    "inbox",
    "communication"
  ],
  "\u{1F4E7}": [
    "e_mail",
    "communication",
    "inbox"
  ],
  "\u{1F4E8}": [
    "incoming_envelope",
    "email",
    "inbox"
  ],
  "\u{1F4E9}": [
    "envelope_with_arrow",
    "email",
    "communication"
  ],
  "\u{1F4E4}": [
    "outbox_tray",
    "inbox",
    "email"
  ],
  "\u{1F4E5}": [
    "inbox_tray",
    "email",
    "documents"
  ],
  "\u{1F4E6}": [
    "package",
    "mail",
    "gift",
    "cardboard",
    "box",
    "moving"
  ],
  "\u{1F4EB}": [
    "closed_mailbox_with_raised_flag",
    "email",
    "inbox",
    "communication"
  ],
  "\u{1F4EA}": [
    "closed_mailbox_with_lowered_flag",
    "email",
    "communication",
    "inbox"
  ],
  "\u{1F4EC}": [
    "open_mailbox_with_raised_flag",
    "email",
    "inbox",
    "communication"
  ],
  "\u{1F4ED}": [
    "open_mailbox_with_lowered_flag",
    "email",
    "inbox"
  ],
  "\u{1F4EE}": [
    "postbox",
    "email",
    "letter",
    "envelope"
  ],
  "\u{1F5F3}\uFE0F": [
    "ballot_box_with_ballot",
    "election",
    "vote"
  ],
  "\u270F\uFE0F": [
    "pencil",
    "stationery",
    "write",
    "paper",
    "writing",
    "school",
    "study"
  ],
  "\u2712\uFE0F": [
    "black_nib",
    "pen",
    "stationery",
    "writing",
    "write"
  ],
  "\u{1F58B}\uFE0F": [
    "fountain_pen",
    "stationery",
    "writing",
    "write"
  ],
  "\u{1F58A}\uFE0F": [
    "pen",
    "stationery",
    "writing",
    "write"
  ],
  "\u{1F58C}\uFE0F": [
    "paintbrush",
    "drawing",
    "creativity",
    "art"
  ],
  "\u{1F58D}\uFE0F": [
    "crayon",
    "drawing",
    "creativity"
  ],
  "\u{1F4DD}": [
    "memo",
    "write",
    "documents",
    "stationery",
    "pencil",
    "paper",
    "writing",
    "legal",
    "exam",
    "quiz",
    "test",
    "study",
    "compose"
  ],
  "\u{1F4BC}": [
    "briefcase",
    "business",
    "documents",
    "work",
    "law",
    "legal",
    "job",
    "career"
  ],
  "\u{1F4C1}": [
    "file_folder",
    "documents",
    "business",
    "office"
  ],
  "\u{1F4C2}": [
    "open_file_folder",
    "documents",
    "load"
  ],
  "\u{1F5C2}\uFE0F": [
    "card_index_dividers",
    "organizing",
    "business",
    "stationery"
  ],
  "\u{1F4C5}": [
    "calendar",
    "schedule"
  ],
  "\u{1F4C6}": [
    "tear_off_calendar",
    "schedule",
    "date",
    "planning"
  ],
  "\u{1F5D2}\uFE0F": [
    "spiral_notepad",
    "memo",
    "stationery"
  ],
  "\u{1F5D3}\uFE0F": [
    "spiral_calendar",
    "date",
    "schedule",
    "planning"
  ],
  "\u{1F4C7}": [
    "card_index",
    "business",
    "stationery"
  ],
  "\u{1F4C8}": [
    "chart_increasing",
    "graph",
    "presentation",
    "stats",
    "recovery",
    "business",
    "economics",
    "money",
    "sales",
    "good",
    "success"
  ],
  "\u{1F4C9}": [
    "chart_decreasing",
    "graph",
    "presentation",
    "stats",
    "recession",
    "business",
    "economics",
    "money",
    "sales",
    "bad",
    "failure"
  ],
  "\u{1F4CA}": [
    "bar_chart",
    "graph",
    "presentation",
    "stats"
  ],
  "\u{1F4CB}": [
    "clipboard",
    "stationery",
    "documents"
  ],
  "\u{1F4CC}": [
    "pushpin",
    "stationery",
    "mark",
    "here"
  ],
  "\u{1F4CD}": [
    "round_pushpin",
    "stationery",
    "location",
    "map",
    "here"
  ],
  "\u{1F4CE}": [
    "paperclip",
    "documents",
    "stationery"
  ],
  "\u{1F587}\uFE0F": [
    "linked_paperclips",
    "documents",
    "stationery"
  ],
  "\u{1F4CF}": [
    "straight_ruler",
    "stationery",
    "calculate",
    "length",
    "math",
    "school",
    "drawing",
    "architect",
    "sketch"
  ],
  "\u{1F4D0}": [
    "triangular_ruler",
    "stationery",
    "math",
    "architect",
    "sketch"
  ],
  "\u2702\uFE0F": [
    "scissors",
    "stationery",
    "cut"
  ],
  "\u{1F5C3}\uFE0F": [
    "card_file_box",
    "business",
    "stationery"
  ],
  "\u{1F5C4}\uFE0F": [
    "file_cabinet",
    "filing",
    "organizing"
  ],
  "\u{1F5D1}\uFE0F": [
    "wastebasket",
    "bin",
    "trash",
    "rubbish",
    "garbage",
    "toss"
  ],
  "\u{1F512}": [
    "locked",
    "security",
    "password",
    "padlock"
  ],
  "\u{1F513}": [
    "unlocked",
    "privacy",
    "security"
  ],
  "\u{1F50F}": [
    "locked_with_pen",
    "security",
    "secret"
  ],
  "\u{1F510}": [
    "locked_with_key",
    "security",
    "privacy"
  ],
  "\u{1F511}": [
    "key",
    "lock",
    "door",
    "password"
  ],
  "\u{1F5DD}\uFE0F": [
    "old_key",
    "lock",
    "door",
    "password"
  ],
  "\u{1F528}": [
    "hammer",
    "tools",
    "build",
    "create"
  ],
  "\u{1FA93}": [
    "axe",
    "tool",
    "chop",
    "cut"
  ],
  "\u26CF\uFE0F": [
    "pick",
    "tools",
    "dig"
  ],
  "\u2692\uFE0F": [
    "hammer_and_pick",
    "tools",
    "build",
    "create"
  ],
  "\u{1F6E0}\uFE0F": [
    "hammer_and_wrench",
    "tools",
    "build",
    "create"
  ],
  "\u{1F5E1}\uFE0F": [
    "dagger",
    "weapon"
  ],
  "\u2694\uFE0F": [
    "crossed_swords",
    "weapon"
  ],
  "\u{1F52B}": [
    "pistol",
    "violence",
    "weapon",
    "revolver"
  ],
  "\u{1F3F9}": [
    "bow_and_arrow",
    "sports"
  ],
  "\u{1F6E1}\uFE0F": [
    "shield",
    "protection",
    "security"
  ],
  "\u{1F527}": [
    "wrench",
    "tools",
    "diy",
    "ikea",
    "fix",
    "maintainer"
  ],
  "\u{1F529}": [
    "nut_and_bolt",
    "handy",
    "tools",
    "fix"
  ],
  "\u2699\uFE0F": [
    "gear",
    "cog"
  ],
  "\u{1F5DC}\uFE0F": [
    "clamp",
    "tool"
  ],
  "\u2696\uFE0F": [
    "balance_scale",
    "law",
    "fairness",
    "weight"
  ],
  "\u{1F9AF}": [
    "probing_cane",
    "accessibility"
  ],
  "\u{1F517}": [
    "link",
    "rings",
    "url"
  ],
  "\u26D3\uFE0F": [
    "chains",
    "lock",
    "arrest"
  ],
  "\u{1F9F0}": [
    "toolbox",
    "tools",
    "diy",
    "fix",
    "maintainer",
    "mechanic"
  ],
  "\u{1F9F2}": [
    "magnet",
    "attraction",
    "magnetic"
  ],
  "\u2697\uFE0F": [
    "alembic",
    "distilling",
    "science",
    "experiment",
    "chemistry"
  ],
  "\u{1F9EA}": [
    "test_tube",
    "chemistry",
    "experiment",
    "lab",
    "science"
  ],
  "\u{1F9EB}": [
    "petri_dish",
    "bacteria",
    "biology",
    "culture",
    "lab"
  ],
  "\u{1F9EC}": [
    "dna",
    "biologist",
    "genetics",
    "life"
  ],
  "\u{1F52C}": [
    "microscope",
    "laboratory",
    "experiment",
    "zoomin",
    "science",
    "study"
  ],
  "\u{1F52D}": [
    "telescope",
    "stars",
    "space",
    "zoom",
    "science",
    "astronomy"
  ],
  "\u{1F4E1}": [
    "satellite_antenna",
    "communication",
    "future",
    "radio",
    "space"
  ],
  "\u{1F489}": [
    "syringe",
    "health",
    "hospital",
    "drugs",
    "blood",
    "medicine",
    "needle",
    "doctor",
    "nurse"
  ],
  "\u{1FA78}": [
    "drop_of_blood",
    "period",
    "hurt",
    "harm",
    "wound"
  ],
  "\u{1F48A}": [
    "pill",
    "health",
    "medicine",
    "doctor",
    "pharmacy",
    "drug"
  ],
  "\u{1FA79}": [
    "adhesive_bandage",
    "heal"
  ],
  "\u{1FA7A}": [
    "stethoscope",
    "health"
  ],
  "\u{1F6AA}": [
    "door",
    "house",
    "entry",
    "exit"
  ],
  "\u{1F6CF}\uFE0F": [
    "bed",
    "sleep",
    "rest"
  ],
  "\u{1F6CB}\uFE0F": [
    "couch_and_lamp",
    "read",
    "chill"
  ],
  "\u{1FA91}": [
    "chair",
    "sit",
    "furniture"
  ],
  "\u{1F6BD}": [
    "toilet",
    "restroom",
    "wc",
    "washroom",
    "bathroom",
    "potty"
  ],
  "\u{1F6BF}": [
    "shower",
    "clean",
    "water",
    "bathroom"
  ],
  "\u{1F6C1}": [
    "bathtub",
    "clean",
    "shower",
    "bathroom"
  ],
  "\u{1FA92}": [
    "razor",
    "cut"
  ],
  "\u{1F9F4}": [
    "lotion_bottle",
    "moisturizer",
    "sunscreen"
  ],
  "\u{1F9F7}": [
    "safety_pin",
    "diaper"
  ],
  "\u{1F9F9}": [
    "broom",
    "cleaning",
    "sweeping",
    "witch"
  ],
  "\u{1F9FA}": [
    "basket",
    "laundry"
  ],
  "\u{1F9FB}": [
    "roll_of_paper",
    "roll"
  ],
  "\u{1F9FC}": [
    "soap",
    "bar",
    "bathing",
    "cleaning",
    "lather"
  ],
  "\u{1F9FD}": [
    "sponge",
    "absorbing",
    "cleaning",
    "porous"
  ],
  "\u{1F9EF}": [
    "fire_extinguisher",
    "quench"
  ],
  "\u{1F6D2}": [
    "shopping_cart",
    "trolley"
  ],
  "\u{1F6AC}": [
    "cigarette",
    "kills",
    "tobacco",
    "joint",
    "smoke"
  ],
  "\u26B0\uFE0F": [
    "coffin",
    "vampire",
    "dead",
    "die",
    "death",
    "rip",
    "graveyard",
    "cemetery",
    "casket",
    "funeral",
    "box"
  ],
  "\u26B1\uFE0F": [
    "funeral_urn",
    "dead",
    "die",
    "death",
    "rip",
    "ashes"
  ],
  "\u{1F5FF}": [
    "moai",
    "rock",
    "easter island"
  ],
  "\u{1F3E7}": [
    "atm_sign",
    "money",
    "sales",
    "cash",
    "blue-square",
    "payment",
    "bank"
  ],
  "\u{1F6AE}": [
    "litter_in_bin_sign",
    "blue-square",
    "sign",
    "human",
    "info"
  ],
  "\u{1F6B0}": [
    "potable_water",
    "blue-square",
    "liquid",
    "restroom",
    "cleaning",
    "faucet"
  ],
  "\u267F": [
    "wheelchair_symbol",
    "blue-square",
    "disabled",
    "accessibility"
  ],
  "\u{1F6B9}": [
    "men_s_room",
    "toilet",
    "restroom",
    "wc",
    "blue-square",
    "gender",
    "male"
  ],
  "\u{1F6BA}": [
    "women_s_room",
    "purple-square",
    "woman",
    "female",
    "toilet",
    "loo",
    "restroom",
    "gender"
  ],
  "\u{1F6BB}": [
    "restroom",
    "blue-square",
    "toilet",
    "refresh",
    "wc",
    "gender"
  ],
  "\u{1F6BC}": [
    "baby_symbol",
    "orange-square",
    "child"
  ],
  "\u{1F6BE}": [
    "water_closet",
    "toilet",
    "restroom",
    "blue-square"
  ],
  "\u{1F6C2}": [
    "passport_control",
    "custom",
    "blue-square"
  ],
  "\u{1F6C3}": [
    "customs",
    "passport",
    "border",
    "blue-square"
  ],
  "\u{1F6C4}": [
    "baggage_claim",
    "blue-square",
    "airport",
    "transport"
  ],
  "\u{1F6C5}": [
    "left_luggage",
    "blue-square",
    "travel"
  ],
  "\u26A0\uFE0F": [
    "warning",
    "exclamation",
    "wip",
    "alert",
    "error",
    "problem",
    "issue"
  ],
  "\u{1F6B8}": [
    "children_crossing",
    "school",
    "warning",
    "danger",
    "sign",
    "driving",
    "yellow-diamond"
  ],
  "\u26D4": [
    "no_entry",
    "limit",
    "security",
    "privacy",
    "bad",
    "denied",
    "stop",
    "circle"
  ],
  "\u{1F6AB}": [
    "prohibited",
    "forbid",
    "stop",
    "limit",
    "denied",
    "disallow",
    "circle"
  ],
  "\u{1F6B3}": [
    "no_bicycles",
    "no_bikes",
    "bicycle",
    "bike",
    "cyclist",
    "prohibited",
    "circle"
  ],
  "\u{1F6AD}": [
    "no_smoking",
    "cigarette",
    "blue-square",
    "smell",
    "smoke"
  ],
  "\u{1F6AF}": [
    "no_littering",
    "trash",
    "bin",
    "garbage",
    "circle"
  ],
  "\u{1F6B1}": [
    "non_potable_water",
    "drink",
    "faucet",
    "tap",
    "circle"
  ],
  "\u{1F6B7}": [
    "no_pedestrians",
    "rules",
    "crossing",
    "walking",
    "circle"
  ],
  "\u{1F4F5}": [
    "no_mobile_phones",
    "iphone",
    "mute",
    "circle"
  ],
  "\u{1F51E}": [
    "no_one_under_eighteen",
    "18",
    "drink",
    "pub",
    "night",
    "minor",
    "circle"
  ],
  "\u2622\uFE0F": [
    "radioactive",
    "nuclear",
    "danger"
  ],
  "\u2623\uFE0F": [
    "biohazard",
    "danger"
  ],
  "\u2B06\uFE0F": [
    "up_arrow",
    "blue-square",
    "continue",
    "top",
    "direction"
  ],
  "\u2197\uFE0F": [
    "up_right_arrow",
    "blue-square",
    "point",
    "direction",
    "diagonal",
    "northeast"
  ],
  "\u27A1\uFE0F": [
    "right_arrow",
    "blue-square",
    "next"
  ],
  "\u2198\uFE0F": [
    "down_right_arrow",
    "blue-square",
    "direction",
    "diagonal",
    "southeast"
  ],
  "\u2B07\uFE0F": [
    "down_arrow",
    "blue-square",
    "direction",
    "bottom"
  ],
  "\u2199\uFE0F": [
    "down_left_arrow",
    "blue-square",
    "direction",
    "diagonal",
    "southwest"
  ],
  "\u2B05\uFE0F": [
    "left_arrow",
    "blue-square",
    "previous",
    "back"
  ],
  "\u2196\uFE0F": [
    "up_left_arrow",
    "blue-square",
    "point",
    "direction",
    "diagonal",
    "northwest"
  ],
  "\u2195\uFE0F": [
    "up_down_arrow",
    "blue-square",
    "direction",
    "way",
    "vertical"
  ],
  "\u2194\uFE0F": [
    "left_right_arrow",
    "shape",
    "direction",
    "horizontal",
    "sideways"
  ],
  "\u21A9\uFE0F": [
    "right_arrow_curving_left",
    "back",
    "return",
    "blue-square",
    "undo",
    "enter"
  ],
  "\u21AA\uFE0F": [
    "left_arrow_curving_right",
    "blue-square",
    "return",
    "rotate",
    "direction"
  ],
  "\u2934\uFE0F": [
    "right_arrow_curving_up",
    "blue-square",
    "direction",
    "top"
  ],
  "\u2935\uFE0F": [
    "right_arrow_curving_down",
    "blue-square",
    "direction",
    "bottom"
  ],
  "\u{1F503}": [
    "clockwise_vertical_arrows",
    "sync",
    "cycle",
    "round",
    "repeat"
  ],
  "\u{1F504}": [
    "counterclockwise_arrows_button",
    "blue-square",
    "sync",
    "cycle"
  ],
  "\u{1F519}": [
    "back_arrow",
    "arrow",
    "words",
    "return"
  ],
  "\u{1F51A}": [
    "end_arrow",
    "words",
    "arrow"
  ],
  "\u{1F51B}": [
    "on_arrow",
    "arrow",
    "words"
  ],
  "\u{1F51C}": [
    "soon_arrow",
    "arrow",
    "words"
  ],
  "\u{1F51D}": [
    "top_arrow",
    "words",
    "blue-square"
  ],
  "\u{1F6D0}": [
    "place_of_worship",
    "religion",
    "church",
    "temple",
    "prayer"
  ],
  "\u269B\uFE0F": [
    "atom_symbol",
    "science",
    "physics",
    "chemistry"
  ],
  "\u{1F549}\uFE0F": [
    "om",
    "hinduism",
    "buddhism",
    "sikhism",
    "jainism"
  ],
  "\u2721\uFE0F": [
    "star_of_david",
    "judaism"
  ],
  "\u2638\uFE0F": [
    "wheel_of_dharma",
    "hinduism",
    "buddhism",
    "sikhism",
    "jainism"
  ],
  "\u262F\uFE0F": [
    "yin_yang",
    "balance"
  ],
  "\u271D\uFE0F": [
    "latin_cross",
    "christianity"
  ],
  "\u2626\uFE0F": [
    "orthodox_cross",
    "suppedaneum",
    "religion"
  ],
  "\u262A\uFE0F": [
    "star_and_crescent",
    "islam"
  ],
  "\u262E\uFE0F": [
    "peace_symbol",
    "hippie"
  ],
  "\u{1F54E}": [
    "menorah",
    "hanukkah",
    "candles",
    "jewish"
  ],
  "\u{1F52F}": [
    "dotted_six_pointed_star",
    "purple-square",
    "religion",
    "jewish",
    "hexagram"
  ],
  "\u2648": [
    "aries",
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  "\u2649": [
    "taurus",
    "purple-square",
    "sign",
    "zodiac",
    "astrology"
  ],
  "\u264A": [
    "gemini",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u264B": [
    "cancer",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u264C": [
    "leo",
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  "\u264D": [
    "virgo",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u264E": [
    "libra",
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  "\u264F": [
    "scorpio",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u2650": [
    "sagittarius",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u2651": [
    "capricorn",
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  "\u2652": [
    "aquarius",
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  "\u2653": [
    "pisces",
    "purple-square",
    "sign",
    "zodiac",
    "astrology"
  ],
  "\u26CE": [
    "ophiuchus",
    "sign",
    "purple-square",
    "constellation",
    "astrology"
  ],
  "\u{1F500}": [
    "shuffle_tracks_button",
    "blue-square",
    "shuffle",
    "music",
    "random"
  ],
  "\u{1F501}": [
    "repeat_button",
    "loop",
    "record"
  ],
  "\u{1F502}": [
    "repeat_single_button",
    "blue-square",
    "loop"
  ],
  "\u25B6\uFE0F": [
    "play_button",
    "blue-square",
    "right",
    "direction",
    "play"
  ],
  "\u23E9": [
    "fast_forward_button",
    "blue-square",
    "play",
    "speed",
    "continue"
  ],
  "\u23ED\uFE0F": [
    "next_track_button",
    "forward",
    "next",
    "blue-square"
  ],
  "\u23EF\uFE0F": [
    "play_or_pause_button",
    "blue-square",
    "play",
    "pause"
  ],
  "\u25C0\uFE0F": [
    "reverse_button",
    "blue-square",
    "left",
    "direction"
  ],
  "\u23EA": [
    "fast_reverse_button",
    "play",
    "blue-square"
  ],
  "\u23EE\uFE0F": [
    "last_track_button",
    "backward"
  ],
  "\u{1F53C}": [
    "upwards_button",
    "blue-square",
    "triangle",
    "direction",
    "point",
    "forward",
    "top"
  ],
  "\u23EB": [
    "fast_up_button",
    "blue-square",
    "direction",
    "top"
  ],
  "\u{1F53D}": [
    "downwards_button",
    "blue-square",
    "direction",
    "bottom"
  ],
  "\u23EC": [
    "fast_down_button",
    "blue-square",
    "direction",
    "bottom"
  ],
  "\u23F8\uFE0F": [
    "pause_button",
    "pause",
    "blue-square"
  ],
  "\u23F9\uFE0F": [
    "stop_button",
    "blue-square"
  ],
  "\u23FA\uFE0F": [
    "record_button",
    "blue-square"
  ],
  "\u23CF\uFE0F": [
    "eject_button",
    "blue-square"
  ],
  "\u{1F3A6}": [
    "cinema",
    "blue-square",
    "record",
    "film",
    "movie",
    "curtain",
    "stage",
    "theater"
  ],
  "\u{1F505}": [
    "dim_button",
    "sun",
    "afternoon",
    "warm",
    "summer"
  ],
  "\u{1F506}": [
    "bright_button",
    "sun",
    "light"
  ],
  "\u{1F4F6}": [
    "antenna_bars",
    "blue-square",
    "reception",
    "phone",
    "internet",
    "connection",
    "wifi",
    "bluetooth",
    "bars"
  ],
  "\u{1F4F3}": [
    "vibration_mode",
    "orange-square",
    "phone"
  ],
  "\u{1F4F4}": [
    "mobile_phone_off",
    "mute",
    "orange-square",
    "silence",
    "quiet"
  ],
  "\u2640\uFE0F": [
    "female_sign",
    "woman",
    "women",
    "lady",
    "girl"
  ],
  "\u2642\uFE0F": [
    "male_sign",
    "man",
    "boy",
    "men"
  ],
  "\u2695\uFE0F": [
    "medical_symbol",
    "health",
    "hospital"
  ],
  "\u267E\uFE0F": [
    "infinity",
    "forever"
  ],
  "\u267B\uFE0F": [
    "recycling_symbol",
    "arrow",
    "environment",
    "garbage",
    "trash"
  ],
  "\u269C\uFE0F": [
    "fleur_de_lis",
    "decorative",
    "scout"
  ],
  "\u{1F531}": [
    "trident_emblem",
    "weapon",
    "spear"
  ],
  "\u{1F4DB}": [
    "name_badge",
    "fire",
    "forbid"
  ],
  "\u{1F530}": [
    "japanese_symbol_for_beginner",
    "badge",
    "shield"
  ],
  "\u2B55": [
    "hollow_red_circle",
    "circle",
    "round"
  ],
  "\u2705": [
    "check_mark_button",
    "green-square",
    "ok",
    "agree",
    "vote",
    "election",
    "answer",
    "tick"
  ],
  "\u2611\uFE0F": [
    "check_box_with_check",
    "ok",
    "agree",
    "confirm",
    "black-square",
    "vote",
    "election",
    "yes",
    "tick"
  ],
  "\u2714\uFE0F": [
    "check_mark",
    "ok",
    "nike",
    "answer",
    "yes",
    "tick"
  ],
  "\u2716\uFE0F": [
    "multiplication_sign",
    "math",
    "calculation"
  ],
  "\u274C": [
    "cross_mark",
    "no",
    "delete",
    "remove",
    "cancel",
    "red"
  ],
  "\u274E": [
    "cross_mark_button",
    "x",
    "green-square",
    "no",
    "deny"
  ],
  "\u2795": [
    "plus_sign",
    "math",
    "calculation",
    "addition",
    "more",
    "increase"
  ],
  "\u2796": [
    "minus_sign",
    "math",
    "calculation",
    "subtract",
    "less"
  ],
  "\u2797": [
    "division_sign",
    "divide",
    "math",
    "calculation"
  ],
  "\u27B0": [
    "curly_loop",
    "scribble",
    "draw",
    "shape",
    "squiggle"
  ],
  "\u27BF": [
    "double_curly_loop",
    "tape",
    "cassette"
  ],
  "\u303D\uFE0F": [
    "part_alternation_mark",
    "graph",
    "presentation",
    "stats",
    "business",
    "economics",
    "bad"
  ],
  "\u2733\uFE0F": [
    "eight_spoked_asterisk",
    "star",
    "sparkle",
    "green-square"
  ],
  "\u2734\uFE0F": [
    "eight_pointed_star",
    "orange-square",
    "shape",
    "polygon"
  ],
  "\u2747\uFE0F": [
    "sparkle",
    "stars",
    "green-square",
    "awesome",
    "good",
    "fireworks"
  ],
  "\u203C\uFE0F": [
    "double_exclamation_mark",
    "exclamation",
    "surprise"
  ],
  "\u2049\uFE0F": [
    "exclamation_question_mark",
    "wat",
    "punctuation",
    "surprise"
  ],
  "\u2753": [
    "question_mark",
    "doubt",
    "confused"
  ],
  "\u2754": [
    "white_question_mark",
    "doubts",
    "gray",
    "huh",
    "confused"
  ],
  "\u2755": [
    "white_exclamation_mark",
    "surprise",
    "punctuation",
    "gray",
    "wow",
    "warning"
  ],
  "\u2757": [
    "exclamation_mark",
    "heavy_exclamation_mark",
    "danger",
    "surprise",
    "punctuation",
    "wow",
    "warning"
  ],
  "\u3030\uFE0F": [
    "wavy_dash",
    "draw",
    "line",
    "moustache",
    "mustache",
    "squiggle",
    "scribble"
  ],
  "\xA9\uFE0F": [
    "copyright",
    "ip",
    "license",
    "circle",
    "law",
    "legal"
  ],
  "\xAE\uFE0F": [
    "registered",
    "alphabet",
    "circle"
  ],
  "\u2122\uFE0F": [
    "trade_mark",
    "trademark",
    "brand",
    "law",
    "legal"
  ],
  "#\uFE0F\u20E3": [
    "keycap_",
    "symbol",
    "blue-square",
    "twitter"
  ],
  "*\uFE0F\u20E3": [
    "keycap_",
    "star",
    "keycap"
  ],
  "0\uFE0F\u20E3": [
    "keycap_0",
    "0",
    "numbers",
    "blue-square",
    "null",
    "zero"
  ],
  "1\uFE0F\u20E3": [
    "keycap_1",
    "blue-square",
    "numbers",
    "1",
    "one"
  ],
  "2\uFE0F\u20E3": [
    "keycap_2",
    "numbers",
    "2",
    "prime",
    "blue-square",
    "two"
  ],
  "3\uFE0F\u20E3": [
    "keycap_3",
    "3",
    "numbers",
    "prime",
    "blue-square",
    "three"
  ],
  "4\uFE0F\u20E3": [
    "keycap_4",
    "4",
    "numbers",
    "blue-square",
    "four"
  ],
  "5\uFE0F\u20E3": [
    "keycap_5",
    "5",
    "numbers",
    "blue-square",
    "prime",
    "five"
  ],
  "6\uFE0F\u20E3": [
    "keycap_6",
    "6",
    "numbers",
    "blue-square",
    "six"
  ],
  "7\uFE0F\u20E3": [
    "keycap_7",
    "7",
    "numbers",
    "blue-square",
    "prime",
    "seven"
  ],
  "8\uFE0F\u20E3": [
    "keycap_8",
    "8",
    "blue-square",
    "numbers",
    "eight"
  ],
  "9\uFE0F\u20E3": [
    "keycap_9",
    "blue-square",
    "numbers",
    "9",
    "nine"
  ],
  "\u{1F51F}": [
    "keycap_10",
    "numbers",
    "10",
    "blue-square",
    "ten"
  ],
  "\u{1F520}": [
    "input_latin_uppercase",
    "alphabet",
    "words",
    "letters",
    "uppercase",
    "blue-square"
  ],
  "\u{1F521}": [
    "input_latin_lowercase",
    "blue-square",
    "letters",
    "lowercase",
    "alphabet"
  ],
  "\u{1F522}": [
    "input_numbers",
    "numbers",
    "blue-square",
    "1234",
    "1",
    "2",
    "3",
    "4"
  ],
  "\u{1F523}": [
    "input_symbols",
    "blue-square",
    "music",
    "note",
    "ampersand",
    "percent",
    "glyphs",
    "characters"
  ],
  "\u{1F524}": [
    "input_latin_letters",
    "blue-square",
    "alphabet"
  ],
  "\u{1F170}\uFE0F": [
    "a_button",
    "red-square",
    "alphabet",
    "letter"
  ],
  "\u{1F18E}": [
    "ab_button",
    "red-square",
    "alphabet"
  ],
  "\u{1F171}\uFE0F": [
    "b_button",
    "red-square",
    "alphabet",
    "letter"
  ],
  "\u{1F191}": [
    "cl_button",
    "alphabet",
    "words",
    "red-square"
  ],
  "\u{1F192}": [
    "cool_button",
    "words",
    "blue-square"
  ],
  "\u{1F193}": [
    "free_button",
    "blue-square",
    "words"
  ],
  "\u2139\uFE0F": [
    "information",
    "blue-square",
    "alphabet",
    "letter"
  ],
  "\u{1F194}": [
    "id_button",
    "purple-square",
    "words"
  ],
  "\u24C2\uFE0F": [
    "circled_m",
    "alphabet",
    "blue-circle",
    "letter"
  ],
  "\u{1F195}": [
    "new_button",
    "blue-square",
    "words",
    "start"
  ],
  "\u{1F196}": [
    "ng_button",
    "blue-square",
    "words",
    "shape",
    "icon"
  ],
  "\u{1F17E}\uFE0F": [
    "o_button",
    "alphabet",
    "red-square",
    "letter"
  ],
  "\u{1F197}": [
    "ok_button",
    "good",
    "agree",
    "yes",
    "blue-square"
  ],
  "\u{1F17F}\uFE0F": [
    "p_button",
    "cars",
    "blue-square",
    "alphabet",
    "letter"
  ],
  "\u{1F198}": [
    "sos_button",
    "help",
    "red-square",
    "words",
    "emergency",
    "911"
  ],
  "\u{1F199}": [
    "up_button",
    "blue-square",
    "above",
    "high"
  ],
  "\u{1F19A}": [
    "vs_button",
    "words",
    "orange-square"
  ],
  "\u{1F201}": [
    "japanese_here_button",
    "blue-square",
    "here",
    "katakana",
    "japanese",
    "destination"
  ],
  "\u{1F202}\uFE0F": [
    "japanese_service_charge_button",
    "japanese",
    "blue-square",
    "katakana"
  ],
  "\u{1F237}\uFE0F": [
    "japanese_monthly_amount_button",
    "chinese",
    "month",
    "moon",
    "japanese",
    "orange-square",
    "kanji"
  ],
  "\u{1F236}": [
    "japanese_not_free_of_charge_button",
    "orange-square",
    "chinese",
    "have",
    "kanji"
  ],
  "\u{1F22F}": [
    "japanese_reserved_button",
    "chinese",
    "point",
    "green-square",
    "kanji"
  ],
  "\u{1F250}": [
    "japanese_bargain_button",
    "chinese",
    "kanji",
    "obtain",
    "get",
    "circle"
  ],
  "\u{1F239}": [
    "japanese_discount_button",
    "cut",
    "divide",
    "chinese",
    "kanji",
    "pink-square"
  ],
  "\u{1F21A}": [
    "japanese_free_of_charge_button",
    "nothing",
    "chinese",
    "kanji",
    "japanese",
    "orange-square"
  ],
  "\u{1F232}": [
    "japanese_prohibited_button",
    "kanji",
    "japanese",
    "chinese",
    "forbidden",
    "limit",
    "restricted",
    "red-square"
  ],
  "\u{1F251}": [
    "japanese_acceptable_button",
    "ok",
    "good",
    "chinese",
    "kanji",
    "agree",
    "yes",
    "orange-circle"
  ],
  "\u{1F238}": [
    "japanese_application_button",
    "chinese",
    "japanese",
    "kanji",
    "orange-square"
  ],
  "\u{1F234}": [
    "japanese_passing_grade_button",
    "japanese",
    "chinese",
    "join",
    "kanji",
    "red-square"
  ],
  "\u{1F233}": [
    "japanese_vacancy_button",
    "kanji",
    "japanese",
    "chinese",
    "empty",
    "sky",
    "blue-square"
  ],
  "\u3297\uFE0F": [
    "japanese_congratulations_button",
    "chinese",
    "kanji",
    "japanese",
    "red-circle"
  ],
  "\u3299\uFE0F": [
    "japanese_secret_button",
    "privacy",
    "chinese",
    "sshh",
    "kanji",
    "red-circle"
  ],
  "\u{1F23A}": [
    "japanese_open_for_business_button",
    "japanese",
    "opening hours",
    "orange-square"
  ],
  "\u{1F235}": [
    "japanese_no_vacancy_button",
    "full",
    "chinese",
    "japanese",
    "red-square",
    "kanji"
  ],
  "\u{1F534}": [
    "red_circle",
    "shape",
    "error",
    "danger"
  ],
  "\u{1F7E0}": [
    "orange_circle",
    "round"
  ],
  "\u{1F7E1}": [
    "yellow_circle",
    "round"
  ],
  "\u{1F7E2}": [
    "green_circle",
    "round"
  ],
  "\u{1F535}": [
    "blue_circle",
    "shape",
    "icon",
    "button"
  ],
  "\u{1F7E3}": [
    "purple_circle",
    "round"
  ],
  "\u{1F7E4}": [
    "brown_circle",
    "round"
  ],
  "\u26AB": [
    "black_circle",
    "shape",
    "button",
    "round"
  ],
  "\u26AA": [
    "white_circle",
    "shape",
    "round"
  ],
  "\u{1F7E5}": [
    "red_square"
  ],
  "\u{1F7E7}": [
    "orange_square"
  ],
  "\u{1F7E8}": [
    "yellow_square"
  ],
  "\u{1F7E9}": [
    "green_square"
  ],
  "\u{1F7E6}": [
    "blue_square"
  ],
  "\u{1F7EA}": [
    "purple_square"
  ],
  "\u{1F7EB}": [
    "brown_square"
  ],
  "\u2B1B": [
    "black_large_square",
    "shape",
    "icon",
    "button"
  ],
  "\u2B1C": [
    "white_large_square",
    "shape",
    "icon",
    "stone",
    "button"
  ],
  "\u25FC\uFE0F": [
    "black_medium_square",
    "shape",
    "button",
    "icon"
  ],
  "\u25FB\uFE0F": [
    "white_medium_square",
    "shape",
    "stone",
    "icon"
  ],
  "\u25FE": [
    "black_medium_small_square",
    "icon",
    "shape",
    "button"
  ],
  "\u25FD": [
    "white_medium_small_square",
    "shape",
    "stone",
    "icon",
    "button"
  ],
  "\u25AA\uFE0F": [
    "black_small_square",
    "shape",
    "icon"
  ],
  "\u25AB\uFE0F": [
    "white_small_square",
    "shape",
    "icon"
  ],
  "\u{1F536}": [
    "large_orange_diamond",
    "shape",
    "jewel",
    "gem"
  ],
  "\u{1F537}": [
    "large_blue_diamond",
    "shape",
    "jewel",
    "gem"
  ],
  "\u{1F538}": [
    "small_orange_diamond",
    "shape",
    "jewel",
    "gem"
  ],
  "\u{1F539}": [
    "small_blue_diamond",
    "shape",
    "jewel",
    "gem"
  ],
  "\u{1F53A}": [
    "red_triangle_pointed_up",
    "shape",
    "direction",
    "up",
    "top"
  ],
  "\u{1F53B}": [
    "red_triangle_pointed_down",
    "shape",
    "direction",
    "bottom"
  ],
  "\u{1F4A0}": [
    "diamond_with_a_dot",
    "jewel",
    "blue",
    "gem",
    "crystal",
    "fancy"
  ],
  "\u{1F518}": [
    "radio_button",
    "input",
    "old",
    "music",
    "circle"
  ],
  "\u{1F533}": [
    "white_square_button",
    "shape",
    "input"
  ],
  "\u{1F532}": [
    "black_square_button",
    "shape",
    "input",
    "frame"
  ],
  "\u{1F3C1}": [
    "chequered_flag",
    "contest",
    "finishline",
    "race",
    "gokart"
  ],
  "\u{1F6A9}": [
    "triangular_flag",
    "mark",
    "milestone",
    "place"
  ],
  "\u{1F38C}": [
    "crossed_flags",
    "japanese",
    "nation",
    "country",
    "border"
  ],
  "\u{1F3F4}": [
    "black_flag",
    "pirate"
  ],
  "\u{1F3F3}\uFE0F": [
    "white_flag",
    "losing",
    "loser",
    "lost",
    "surrender",
    "give up",
    "fail"
  ],
  "\u{1F3F3}\uFE0F\u200D\u{1F308}": [
    "rainbow_flag",
    "flag",
    "rainbow",
    "pride",
    "gay",
    "lgbt",
    "queer",
    "homosexual",
    "lesbian",
    "bisexual"
  ],
  "\u{1F3F4}\u200D\u2620\uFE0F": [
    "pirate_flag",
    "skull",
    "crossbones",
    "flag",
    "banner"
  ],
  "\u{1F1E6}\u{1F1E8}": [
    "flag_ascension_island"
  ],
  "\u{1F1E6}\u{1F1E9}": [
    "flag_andorra",
    "ad",
    "flag",
    "nation",
    "country",
    "banner",
    "andorra"
  ],
  "\u{1F1E6}\u{1F1EA}": [
    "flag_united_arab_emirates",
    "united",
    "arab",
    "emirates",
    "flag",
    "nation",
    "country",
    "banner",
    "united_arab_emirates"
  ],
  "\u{1F1E6}\u{1F1EB}": [
    "flag_afghanistan",
    "af",
    "flag",
    "nation",
    "country",
    "banner",
    "afghanistan"
  ],
  "\u{1F1E6}\u{1F1EC}": [
    "flag_antigua_barbuda",
    "antigua",
    "barbuda",
    "flag",
    "nation",
    "country",
    "banner",
    "antigua_barbuda"
  ],
  "\u{1F1E6}\u{1F1EE}": [
    "flag_anguilla",
    "ai",
    "flag",
    "nation",
    "country",
    "banner",
    "anguilla"
  ],
  "\u{1F1E6}\u{1F1F1}": [
    "flag_albania",
    "al",
    "flag",
    "nation",
    "country",
    "banner",
    "albania"
  ],
  "\u{1F1E6}\u{1F1F2}": [
    "flag_armenia",
    "am",
    "flag",
    "nation",
    "country",
    "banner",
    "armenia"
  ],
  "\u{1F1E6}\u{1F1F4}": [
    "flag_angola",
    "ao",
    "flag",
    "nation",
    "country",
    "banner",
    "angola"
  ],
  "\u{1F1E6}\u{1F1F6}": [
    "flag_antarctica",
    "aq",
    "flag",
    "nation",
    "country",
    "banner",
    "antarctica"
  ],
  "\u{1F1E6}\u{1F1F7}": [
    "flag_argentina",
    "ar",
    "flag",
    "nation",
    "country",
    "banner",
    "argentina"
  ],
  "\u{1F1E6}\u{1F1F8}": [
    "flag_american_samoa",
    "american",
    "ws",
    "flag",
    "nation",
    "country",
    "banner",
    "american_samoa"
  ],
  "\u{1F1E6}\u{1F1F9}": [
    "flag_austria",
    "at",
    "flag",
    "nation",
    "country",
    "banner",
    "austria"
  ],
  "\u{1F1E6}\u{1F1FA}": [
    "flag_australia",
    "au",
    "flag",
    "nation",
    "country",
    "banner",
    "australia"
  ],
  "\u{1F1E6}\u{1F1FC}": [
    "flag_aruba",
    "aw",
    "flag",
    "nation",
    "country",
    "banner",
    "aruba"
  ],
  "\u{1F1E6}\u{1F1FD}": [
    "flag_aland_islands",
    "\xC5land",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "aland_islands"
  ],
  "\u{1F1E6}\u{1F1FF}": [
    "flag_azerbaijan",
    "az",
    "flag",
    "nation",
    "country",
    "banner",
    "azerbaijan"
  ],
  "\u{1F1E7}\u{1F1E6}": [
    "flag_bosnia_herzegovina",
    "bosnia",
    "herzegovina",
    "flag",
    "nation",
    "country",
    "banner",
    "bosnia_herzegovina"
  ],
  "\u{1F1E7}\u{1F1E7}": [
    "flag_barbados",
    "bb",
    "flag",
    "nation",
    "country",
    "banner",
    "barbados"
  ],
  "\u{1F1E7}\u{1F1E9}": [
    "flag_bangladesh",
    "bd",
    "flag",
    "nation",
    "country",
    "banner",
    "bangladesh"
  ],
  "\u{1F1E7}\u{1F1EA}": [
    "flag_belgium",
    "be",
    "flag",
    "nation",
    "country",
    "banner",
    "belgium"
  ],
  "\u{1F1E7}\u{1F1EB}": [
    "flag_burkina_faso",
    "burkina",
    "faso",
    "flag",
    "nation",
    "country",
    "banner",
    "burkina_faso"
  ],
  "\u{1F1E7}\u{1F1EC}": [
    "flag_bulgaria",
    "bg",
    "flag",
    "nation",
    "country",
    "banner",
    "bulgaria"
  ],
  "\u{1F1E7}\u{1F1ED}": [
    "flag_bahrain",
    "bh",
    "flag",
    "nation",
    "country",
    "banner",
    "bahrain"
  ],
  "\u{1F1E7}\u{1F1EE}": [
    "flag_burundi",
    "bi",
    "flag",
    "nation",
    "country",
    "banner",
    "burundi"
  ],
  "\u{1F1E7}\u{1F1EF}": [
    "flag_benin",
    "bj",
    "flag",
    "nation",
    "country",
    "banner",
    "benin"
  ],
  "\u{1F1E7}\u{1F1F1}": [
    "flag_st_barthelemy",
    "saint",
    "barth\xE9lemy",
    "flag",
    "nation",
    "country",
    "banner",
    "st_barthelemy"
  ],
  "\u{1F1E7}\u{1F1F2}": [
    "flag_bermuda",
    "bm",
    "flag",
    "nation",
    "country",
    "banner",
    "bermuda"
  ],
  "\u{1F1E7}\u{1F1F3}": [
    "flag_brunei",
    "bn",
    "darussalam",
    "flag",
    "nation",
    "country",
    "banner",
    "brunei"
  ],
  "\u{1F1E7}\u{1F1F4}": [
    "flag_bolivia",
    "bo",
    "flag",
    "nation",
    "country",
    "banner",
    "bolivia"
  ],
  "\u{1F1E7}\u{1F1F6}": [
    "flag_caribbean_netherlands",
    "bonaire",
    "flag",
    "nation",
    "country",
    "banner",
    "caribbean_netherlands"
  ],
  "\u{1F1E7}\u{1F1F7}": [
    "flag_brazil",
    "br",
    "flag",
    "nation",
    "country",
    "banner",
    "brazil"
  ],
  "\u{1F1E7}\u{1F1F8}": [
    "flag_bahamas",
    "bs",
    "flag",
    "nation",
    "country",
    "banner",
    "bahamas"
  ],
  "\u{1F1E7}\u{1F1F9}": [
    "flag_bhutan",
    "bt",
    "flag",
    "nation",
    "country",
    "banner",
    "bhutan"
  ],
  "\u{1F1E7}\u{1F1FB}": [
    "flag_bouvet_island",
    "norway"
  ],
  "\u{1F1E7}\u{1F1FC}": [
    "flag_botswana",
    "bw",
    "flag",
    "nation",
    "country",
    "banner",
    "botswana"
  ],
  "\u{1F1E7}\u{1F1FE}": [
    "flag_belarus",
    "by",
    "flag",
    "nation",
    "country",
    "banner",
    "belarus"
  ],
  "\u{1F1E7}\u{1F1FF}": [
    "flag_belize",
    "bz",
    "flag",
    "nation",
    "country",
    "banner",
    "belize"
  ],
  "\u{1F1E8}\u{1F1E6}": [
    "flag_canada",
    "ca",
    "flag",
    "nation",
    "country",
    "banner",
    "canada"
  ],
  "\u{1F1E8}\u{1F1E8}": [
    "flag_cocos_islands",
    "cocos",
    "keeling",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "cocos_islands"
  ],
  "\u{1F1E8}\u{1F1E9}": [
    "flag_congo_kinshasa",
    "congo",
    "democratic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "congo_kinshasa"
  ],
  "\u{1F1E8}\u{1F1EB}": [
    "flag_central_african_republic",
    "central",
    "african",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "central_african_republic"
  ],
  "\u{1F1E8}\u{1F1EC}": [
    "flag_congo_brazzaville",
    "congo",
    "flag",
    "nation",
    "country",
    "banner",
    "congo_brazzaville"
  ],
  "\u{1F1E8}\u{1F1ED}": [
    "flag_switzerland",
    "ch",
    "flag",
    "nation",
    "country",
    "banner",
    "switzerland"
  ],
  "\u{1F1E8}\u{1F1EE}": [
    "flag_cote_d_ivoire",
    "ivory",
    "coast",
    "flag",
    "nation",
    "country",
    "banner",
    "cote_d_ivoire"
  ],
  "\u{1F1E8}\u{1F1F0}": [
    "flag_cook_islands",
    "cook",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "cook_islands"
  ],
  "\u{1F1E8}\u{1F1F1}": [
    "flag_chile",
    "flag",
    "nation",
    "country",
    "banner",
    "chile"
  ],
  "\u{1F1E8}\u{1F1F2}": [
    "flag_cameroon",
    "cm",
    "flag",
    "nation",
    "country",
    "banner",
    "cameroon"
  ],
  "\u{1F1E8}\u{1F1F3}": [
    "flag_china",
    "china",
    "chinese",
    "prc",
    "flag",
    "country",
    "nation",
    "banner"
  ],
  "\u{1F1E8}\u{1F1F4}": [
    "flag_colombia",
    "co",
    "flag",
    "nation",
    "country",
    "banner",
    "colombia"
  ],
  "\u{1F1E8}\u{1F1F5}": [
    "flag_clipperton_island"
  ],
  "\u{1F1E8}\u{1F1F7}": [
    "flag_costa_rica",
    "costa",
    "rica",
    "flag",
    "nation",
    "country",
    "banner",
    "costa_rica"
  ],
  "\u{1F1E8}\u{1F1FA}": [
    "flag_cuba",
    "cu",
    "flag",
    "nation",
    "country",
    "banner",
    "cuba"
  ],
  "\u{1F1E8}\u{1F1FB}": [
    "flag_cape_verde",
    "cabo",
    "verde",
    "flag",
    "nation",
    "country",
    "banner",
    "cape_verde"
  ],
  "\u{1F1E8}\u{1F1FC}": [
    "flag_curacao",
    "cura\xE7ao",
    "flag",
    "nation",
    "country",
    "banner",
    "curacao"
  ],
  "\u{1F1E8}\u{1F1FD}": [
    "flag_christmas_island",
    "christmas",
    "island",
    "flag",
    "nation",
    "country",
    "banner",
    "christmas_island"
  ],
  "\u{1F1E8}\u{1F1FE}": [
    "flag_cyprus",
    "cy",
    "flag",
    "nation",
    "country",
    "banner",
    "cyprus"
  ],
  "\u{1F1E8}\u{1F1FF}": [
    "flag_czechia",
    "cz",
    "flag",
    "nation",
    "country",
    "banner",
    "czechia"
  ],
  "\u{1F1E9}\u{1F1EA}": [
    "flag_germany",
    "german",
    "nation",
    "flag",
    "country",
    "banner",
    "germany"
  ],
  "\u{1F1E9}\u{1F1EC}": [
    "flag_diego_garcia"
  ],
  "\u{1F1E9}\u{1F1EF}": [
    "flag_djibouti",
    "dj",
    "flag",
    "nation",
    "country",
    "banner",
    "djibouti"
  ],
  "\u{1F1E9}\u{1F1F0}": [
    "flag_denmark",
    "dk",
    "flag",
    "nation",
    "country",
    "banner",
    "denmark"
  ],
  "\u{1F1E9}\u{1F1F2}": [
    "flag_dominica",
    "dm",
    "flag",
    "nation",
    "country",
    "banner",
    "dominica"
  ],
  "\u{1F1E9}\u{1F1F4}": [
    "flag_dominican_republic",
    "dominican",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "dominican_republic"
  ],
  "\u{1F1E9}\u{1F1FF}": [
    "flag_algeria",
    "dz",
    "flag",
    "nation",
    "country",
    "banner",
    "algeria"
  ],
  "\u{1F1EA}\u{1F1E6}": [
    "flag_ceuta_melilla"
  ],
  "\u{1F1EA}\u{1F1E8}": [
    "flag_ecuador",
    "ec",
    "flag",
    "nation",
    "country",
    "banner",
    "ecuador"
  ],
  "\u{1F1EA}\u{1F1EA}": [
    "flag_estonia",
    "ee",
    "flag",
    "nation",
    "country",
    "banner",
    "estonia"
  ],
  "\u{1F1EA}\u{1F1EC}": [
    "flag_egypt",
    "eg",
    "flag",
    "nation",
    "country",
    "banner",
    "egypt"
  ],
  "\u{1F1EA}\u{1F1ED}": [
    "flag_western_sahara",
    "western",
    "sahara",
    "flag",
    "nation",
    "country",
    "banner",
    "western_sahara"
  ],
  "\u{1F1EA}\u{1F1F7}": [
    "flag_eritrea",
    "er",
    "flag",
    "nation",
    "country",
    "banner",
    "eritrea"
  ],
  "\u{1F1EA}\u{1F1F8}": [
    "flag_spain",
    "spain",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1EA}\u{1F1F9}": [
    "flag_ethiopia",
    "et",
    "flag",
    "nation",
    "country",
    "banner",
    "ethiopia"
  ],
  "\u{1F1EA}\u{1F1FA}": [
    "flag_european_union",
    "european",
    "union",
    "flag",
    "banner"
  ],
  "\u{1F1EB}\u{1F1EE}": [
    "flag_finland",
    "fi",
    "flag",
    "nation",
    "country",
    "banner",
    "finland"
  ],
  "\u{1F1EB}\u{1F1EF}": [
    "flag_fiji",
    "fj",
    "flag",
    "nation",
    "country",
    "banner",
    "fiji"
  ],
  "\u{1F1EB}\u{1F1F0}": [
    "flag_falkland_islands",
    "falkland",
    "islands",
    "malvinas",
    "flag",
    "nation",
    "country",
    "banner",
    "falkland_islands"
  ],
  "\u{1F1EB}\u{1F1F2}": [
    "flag_micronesia",
    "micronesia",
    "federated",
    "states",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1EB}\u{1F1F4}": [
    "flag_faroe_islands",
    "faroe",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "faroe_islands"
  ],
  "\u{1F1EB}\u{1F1F7}": [
    "flag_france",
    "banner",
    "flag",
    "nation",
    "france",
    "french",
    "country"
  ],
  "\u{1F1EC}\u{1F1E6}": [
    "flag_gabon",
    "ga",
    "flag",
    "nation",
    "country",
    "banner",
    "gabon"
  ],
  "\u{1F1EC}\u{1F1E7}": [
    "flag_united_kingdom",
    "united",
    "kingdom",
    "great",
    "britain",
    "northern",
    "ireland",
    "flag",
    "nation",
    "country",
    "banner",
    "british",
    "UK",
    "english",
    "england",
    "union jack",
    "united_kingdom"
  ],
  "\u{1F1EC}\u{1F1E9}": [
    "flag_grenada",
    "gd",
    "flag",
    "nation",
    "country",
    "banner",
    "grenada"
  ],
  "\u{1F1EC}\u{1F1EA}": [
    "flag_georgia",
    "ge",
    "flag",
    "nation",
    "country",
    "banner",
    "georgia"
  ],
  "\u{1F1EC}\u{1F1EB}": [
    "flag_french_guiana",
    "french",
    "guiana",
    "flag",
    "nation",
    "country",
    "banner",
    "french_guiana"
  ],
  "\u{1F1EC}\u{1F1EC}": [
    "flag_guernsey",
    "gg",
    "flag",
    "nation",
    "country",
    "banner",
    "guernsey"
  ],
  "\u{1F1EC}\u{1F1ED}": [
    "flag_ghana",
    "gh",
    "flag",
    "nation",
    "country",
    "banner",
    "ghana"
  ],
  "\u{1F1EC}\u{1F1EE}": [
    "flag_gibraltar",
    "gi",
    "flag",
    "nation",
    "country",
    "banner",
    "gibraltar"
  ],
  "\u{1F1EC}\u{1F1F1}": [
    "flag_greenland",
    "gl",
    "flag",
    "nation",
    "country",
    "banner",
    "greenland"
  ],
  "\u{1F1EC}\u{1F1F2}": [
    "flag_gambia",
    "gm",
    "flag",
    "nation",
    "country",
    "banner",
    "gambia"
  ],
  "\u{1F1EC}\u{1F1F3}": [
    "flag_guinea",
    "gn",
    "flag",
    "nation",
    "country",
    "banner",
    "guinea"
  ],
  "\u{1F1EC}\u{1F1F5}": [
    "flag_guadeloupe",
    "gp",
    "flag",
    "nation",
    "country",
    "banner",
    "guadeloupe"
  ],
  "\u{1F1EC}\u{1F1F6}": [
    "flag_equatorial_guinea",
    "equatorial",
    "gn",
    "flag",
    "nation",
    "country",
    "banner",
    "equatorial_guinea"
  ],
  "\u{1F1EC}\u{1F1F7}": [
    "flag_greece",
    "gr",
    "flag",
    "nation",
    "country",
    "banner",
    "greece"
  ],
  "\u{1F1EC}\u{1F1F8}": [
    "flag_south_georgia_south_sandwich_islands",
    "south",
    "georgia",
    "sandwich",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "south_georgia_south_sandwich_islands"
  ],
  "\u{1F1EC}\u{1F1F9}": [
    "flag_guatemala",
    "gt",
    "flag",
    "nation",
    "country",
    "banner",
    "guatemala"
  ],
  "\u{1F1EC}\u{1F1FA}": [
    "flag_guam",
    "gu",
    "flag",
    "nation",
    "country",
    "banner",
    "guam"
  ],
  "\u{1F1EC}\u{1F1FC}": [
    "flag_guinea_bissau",
    "gw",
    "bissau",
    "flag",
    "nation",
    "country",
    "banner",
    "guinea_bissau"
  ],
  "\u{1F1EC}\u{1F1FE}": [
    "flag_guyana",
    "gy",
    "flag",
    "nation",
    "country",
    "banner",
    "guyana"
  ],
  "\u{1F1ED}\u{1F1F0}": [
    "flag_hong_kong_sar_china",
    "hong",
    "kong",
    "flag",
    "nation",
    "country",
    "banner",
    "hong_kong_sar_china"
  ],
  "\u{1F1ED}\u{1F1F2}": [
    "flag_heard_mcdonald_islands"
  ],
  "\u{1F1ED}\u{1F1F3}": [
    "flag_honduras",
    "hn",
    "flag",
    "nation",
    "country",
    "banner",
    "honduras"
  ],
  "\u{1F1ED}\u{1F1F7}": [
    "flag_croatia",
    "hr",
    "flag",
    "nation",
    "country",
    "banner",
    "croatia"
  ],
  "\u{1F1ED}\u{1F1F9}": [
    "flag_haiti",
    "ht",
    "flag",
    "nation",
    "country",
    "banner",
    "haiti"
  ],
  "\u{1F1ED}\u{1F1FA}": [
    "flag_hungary",
    "hu",
    "flag",
    "nation",
    "country",
    "banner",
    "hungary"
  ],
  "\u{1F1EE}\u{1F1E8}": [
    "flag_canary_islands",
    "canary",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "canary_islands"
  ],
  "\u{1F1EE}\u{1F1E9}": [
    "flag_indonesia",
    "flag",
    "nation",
    "country",
    "banner",
    "indonesia"
  ],
  "\u{1F1EE}\u{1F1EA}": [
    "flag_ireland",
    "ie",
    "flag",
    "nation",
    "country",
    "banner",
    "ireland"
  ],
  "\u{1F1EE}\u{1F1F1}": [
    "flag_israel",
    "il",
    "flag",
    "nation",
    "country",
    "banner",
    "israel"
  ],
  "\u{1F1EE}\u{1F1F2}": [
    "flag_isle_of_man",
    "isle",
    "man",
    "flag",
    "nation",
    "country",
    "banner",
    "isle_of_man"
  ],
  "\u{1F1EE}\u{1F1F3}": [
    "flag_india",
    "in",
    "flag",
    "nation",
    "country",
    "banner",
    "india"
  ],
  "\u{1F1EE}\u{1F1F4}": [
    "flag_british_indian_ocean_territory",
    "british",
    "indian",
    "ocean",
    "territory",
    "flag",
    "nation",
    "country",
    "banner",
    "british_indian_ocean_territory"
  ],
  "\u{1F1EE}\u{1F1F6}": [
    "flag_iraq",
    "iq",
    "flag",
    "nation",
    "country",
    "banner",
    "iraq"
  ],
  "\u{1F1EE}\u{1F1F7}": [
    "flag_iran",
    "iran",
    "islamic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1EE}\u{1F1F8}": [
    "flag_iceland",
    "is",
    "flag",
    "nation",
    "country",
    "banner",
    "iceland"
  ],
  "\u{1F1EE}\u{1F1F9}": [
    "flag_italy",
    "italy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1EF}\u{1F1EA}": [
    "flag_jersey",
    "je",
    "flag",
    "nation",
    "country",
    "banner",
    "jersey"
  ],
  "\u{1F1EF}\u{1F1F2}": [
    "flag_jamaica",
    "jm",
    "flag",
    "nation",
    "country",
    "banner",
    "jamaica"
  ],
  "\u{1F1EF}\u{1F1F4}": [
    "flag_jordan",
    "jo",
    "flag",
    "nation",
    "country",
    "banner",
    "jordan"
  ],
  "\u{1F1EF}\u{1F1F5}": [
    "flag_japan",
    "japanese",
    "nation",
    "flag",
    "country",
    "banner",
    "japan",
    "jp",
    "ja"
  ],
  "\u{1F1F0}\u{1F1EA}": [
    "flag_kenya",
    "ke",
    "flag",
    "nation",
    "country",
    "banner",
    "kenya"
  ],
  "\u{1F1F0}\u{1F1EC}": [
    "flag_kyrgyzstan",
    "kg",
    "flag",
    "nation",
    "country",
    "banner",
    "kyrgyzstan"
  ],
  "\u{1F1F0}\u{1F1ED}": [
    "flag_cambodia",
    "kh",
    "flag",
    "nation",
    "country",
    "banner",
    "cambodia"
  ],
  "\u{1F1F0}\u{1F1EE}": [
    "flag_kiribati",
    "ki",
    "flag",
    "nation",
    "country",
    "banner",
    "kiribati"
  ],
  "\u{1F1F0}\u{1F1F2}": [
    "flag_comoros",
    "km",
    "flag",
    "nation",
    "country",
    "banner",
    "comoros"
  ],
  "\u{1F1F0}\u{1F1F3}": [
    "flag_st_kitts_nevis",
    "saint",
    "kitts",
    "nevis",
    "flag",
    "nation",
    "country",
    "banner",
    "st_kitts_nevis"
  ],
  "\u{1F1F0}\u{1F1F5}": [
    "flag_north_korea",
    "north",
    "korea",
    "nation",
    "flag",
    "country",
    "banner",
    "north_korea"
  ],
  "\u{1F1F0}\u{1F1F7}": [
    "flag_south_korea",
    "south",
    "korea",
    "nation",
    "flag",
    "country",
    "banner",
    "south_korea"
  ],
  "\u{1F1F0}\u{1F1FC}": [
    "flag_kuwait",
    "kw",
    "flag",
    "nation",
    "country",
    "banner",
    "kuwait"
  ],
  "\u{1F1F0}\u{1F1FE}": [
    "flag_cayman_islands",
    "cayman",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "cayman_islands"
  ],
  "\u{1F1F0}\u{1F1FF}": [
    "flag_kazakhstan",
    "kz",
    "flag",
    "nation",
    "country",
    "banner",
    "kazakhstan"
  ],
  "\u{1F1F1}\u{1F1E6}": [
    "flag_laos",
    "lao",
    "democratic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "laos"
  ],
  "\u{1F1F1}\u{1F1E7}": [
    "flag_lebanon",
    "lb",
    "flag",
    "nation",
    "country",
    "banner",
    "lebanon"
  ],
  "\u{1F1F1}\u{1F1E8}": [
    "flag_st_lucia",
    "saint",
    "lucia",
    "flag",
    "nation",
    "country",
    "banner",
    "st_lucia"
  ],
  "\u{1F1F1}\u{1F1EE}": [
    "flag_liechtenstein",
    "li",
    "flag",
    "nation",
    "country",
    "banner",
    "liechtenstein"
  ],
  "\u{1F1F1}\u{1F1F0}": [
    "flag_sri_lanka",
    "sri",
    "lanka",
    "flag",
    "nation",
    "country",
    "banner",
    "sri_lanka"
  ],
  "\u{1F1F1}\u{1F1F7}": [
    "flag_liberia",
    "lr",
    "flag",
    "nation",
    "country",
    "banner",
    "liberia"
  ],
  "\u{1F1F1}\u{1F1F8}": [
    "flag_lesotho",
    "ls",
    "flag",
    "nation",
    "country",
    "banner",
    "lesotho"
  ],
  "\u{1F1F1}\u{1F1F9}": [
    "flag_lithuania",
    "lt",
    "flag",
    "nation",
    "country",
    "banner",
    "lithuania"
  ],
  "\u{1F1F1}\u{1F1FA}": [
    "flag_luxembourg",
    "lu",
    "flag",
    "nation",
    "country",
    "banner",
    "luxembourg"
  ],
  "\u{1F1F1}\u{1F1FB}": [
    "flag_latvia",
    "lv",
    "flag",
    "nation",
    "country",
    "banner",
    "latvia"
  ],
  "\u{1F1F1}\u{1F1FE}": [
    "flag_libya",
    "ly",
    "flag",
    "nation",
    "country",
    "banner",
    "libya"
  ],
  "\u{1F1F2}\u{1F1E6}": [
    "flag_morocco",
    "ma",
    "flag",
    "nation",
    "country",
    "banner",
    "morocco"
  ],
  "\u{1F1F2}\u{1F1E8}": [
    "flag_monaco",
    "mc",
    "flag",
    "nation",
    "country",
    "banner",
    "monaco"
  ],
  "\u{1F1F2}\u{1F1E9}": [
    "flag_moldova",
    "moldova",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1F2}\u{1F1EA}": [
    "flag_montenegro",
    "me",
    "flag",
    "nation",
    "country",
    "banner",
    "montenegro"
  ],
  "\u{1F1F2}\u{1F1EB}": [
    "flag_st_martin"
  ],
  "\u{1F1F2}\u{1F1EC}": [
    "flag_madagascar",
    "mg",
    "flag",
    "nation",
    "country",
    "banner",
    "madagascar"
  ],
  "\u{1F1F2}\u{1F1ED}": [
    "flag_marshall_islands",
    "marshall",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "marshall_islands"
  ],
  "\u{1F1F2}\u{1F1F0}": [
    "flag_north_macedonia",
    "macedonia",
    "flag",
    "nation",
    "country",
    "banner",
    "north_macedonia"
  ],
  "\u{1F1F2}\u{1F1F1}": [
    "flag_mali",
    "ml",
    "flag",
    "nation",
    "country",
    "banner",
    "mali"
  ],
  "\u{1F1F2}\u{1F1F2}": [
    "flag_myanmar",
    "mm",
    "flag",
    "nation",
    "country",
    "banner",
    "myanmar"
  ],
  "\u{1F1F2}\u{1F1F3}": [
    "flag_mongolia",
    "mn",
    "flag",
    "nation",
    "country",
    "banner",
    "mongolia"
  ],
  "\u{1F1F2}\u{1F1F4}": [
    "flag_macao_sar_china",
    "macao",
    "flag",
    "nation",
    "country",
    "banner",
    "macao_sar_china"
  ],
  "\u{1F1F2}\u{1F1F5}": [
    "flag_northern_mariana_islands",
    "northern",
    "mariana",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "northern_mariana_islands"
  ],
  "\u{1F1F2}\u{1F1F6}": [
    "flag_martinique",
    "mq",
    "flag",
    "nation",
    "country",
    "banner",
    "martinique"
  ],
  "\u{1F1F2}\u{1F1F7}": [
    "flag_mauritania",
    "mr",
    "flag",
    "nation",
    "country",
    "banner",
    "mauritania"
  ],
  "\u{1F1F2}\u{1F1F8}": [
    "flag_montserrat",
    "ms",
    "flag",
    "nation",
    "country",
    "banner",
    "montserrat"
  ],
  "\u{1F1F2}\u{1F1F9}": [
    "flag_malta",
    "mt",
    "flag",
    "nation",
    "country",
    "banner",
    "malta"
  ],
  "\u{1F1F2}\u{1F1FA}": [
    "flag_mauritius",
    "mu",
    "flag",
    "nation",
    "country",
    "banner",
    "mauritius"
  ],
  "\u{1F1F2}\u{1F1FB}": [
    "flag_maldives",
    "mv",
    "flag",
    "nation",
    "country",
    "banner",
    "maldives"
  ],
  "\u{1F1F2}\u{1F1FC}": [
    "flag_malawi",
    "mw",
    "flag",
    "nation",
    "country",
    "banner",
    "malawi"
  ],
  "\u{1F1F2}\u{1F1FD}": [
    "flag_mexico",
    "mx",
    "flag",
    "nation",
    "country",
    "banner",
    "mexico"
  ],
  "\u{1F1F2}\u{1F1FE}": [
    "flag_malaysia",
    "my",
    "flag",
    "nation",
    "country",
    "banner",
    "malaysia"
  ],
  "\u{1F1F2}\u{1F1FF}": [
    "flag_mozambique",
    "mz",
    "flag",
    "nation",
    "country",
    "banner",
    "mozambique"
  ],
  "\u{1F1F3}\u{1F1E6}": [
    "flag_namibia",
    "na",
    "flag",
    "nation",
    "country",
    "banner",
    "namibia"
  ],
  "\u{1F1F3}\u{1F1E8}": [
    "flag_new_caledonia",
    "new",
    "caledonia",
    "flag",
    "nation",
    "country",
    "banner",
    "new_caledonia"
  ],
  "\u{1F1F3}\u{1F1EA}": [
    "flag_niger",
    "ne",
    "flag",
    "nation",
    "country",
    "banner",
    "niger"
  ],
  "\u{1F1F3}\u{1F1EB}": [
    "flag_norfolk_island",
    "norfolk",
    "island",
    "flag",
    "nation",
    "country",
    "banner",
    "norfolk_island"
  ],
  "\u{1F1F3}\u{1F1EC}": [
    "flag_nigeria",
    "flag",
    "nation",
    "country",
    "banner",
    "nigeria"
  ],
  "\u{1F1F3}\u{1F1EE}": [
    "flag_nicaragua",
    "ni",
    "flag",
    "nation",
    "country",
    "banner",
    "nicaragua"
  ],
  "\u{1F1F3}\u{1F1F1}": [
    "flag_netherlands",
    "nl",
    "flag",
    "nation",
    "country",
    "banner",
    "netherlands"
  ],
  "\u{1F1F3}\u{1F1F4}": [
    "flag_norway",
    "no",
    "flag",
    "nation",
    "country",
    "banner",
    "norway"
  ],
  "\u{1F1F3}\u{1F1F5}": [
    "flag_nepal",
    "np",
    "flag",
    "nation",
    "country",
    "banner",
    "nepal"
  ],
  "\u{1F1F3}\u{1F1F7}": [
    "flag_nauru",
    "nr",
    "flag",
    "nation",
    "country",
    "banner",
    "nauru"
  ],
  "\u{1F1F3}\u{1F1FA}": [
    "flag_niue",
    "nu",
    "flag",
    "nation",
    "country",
    "banner",
    "niue"
  ],
  "\u{1F1F3}\u{1F1FF}": [
    "flag_new_zealand",
    "new",
    "zealand",
    "flag",
    "nation",
    "country",
    "banner",
    "new_zealand"
  ],
  "\u{1F1F4}\u{1F1F2}": [
    "flag_oman",
    "om_symbol",
    "flag",
    "nation",
    "country",
    "banner",
    "oman"
  ],
  "\u{1F1F5}\u{1F1E6}": [
    "flag_panama",
    "pa",
    "flag",
    "nation",
    "country",
    "banner",
    "panama"
  ],
  "\u{1F1F5}\u{1F1EA}": [
    "flag_peru",
    "pe",
    "flag",
    "nation",
    "country",
    "banner",
    "peru"
  ],
  "\u{1F1F5}\u{1F1EB}": [
    "flag_french_polynesia",
    "french",
    "polynesia",
    "flag",
    "nation",
    "country",
    "banner",
    "french_polynesia"
  ],
  "\u{1F1F5}\u{1F1EC}": [
    "flag_papua_new_guinea",
    "papua",
    "new",
    "guinea",
    "flag",
    "nation",
    "country",
    "banner",
    "papua_new_guinea"
  ],
  "\u{1F1F5}\u{1F1ED}": [
    "flag_philippines",
    "ph",
    "flag",
    "nation",
    "country",
    "banner",
    "philippines"
  ],
  "\u{1F1F5}\u{1F1F0}": [
    "flag_pakistan",
    "pk",
    "flag",
    "nation",
    "country",
    "banner",
    "pakistan"
  ],
  "\u{1F1F5}\u{1F1F1}": [
    "flag_poland",
    "pl",
    "flag",
    "nation",
    "country",
    "banner",
    "poland"
  ],
  "\u{1F1F5}\u{1F1F2}": [
    "flag_st_pierre_miquelon",
    "saint",
    "pierre",
    "miquelon",
    "flag",
    "nation",
    "country",
    "banner",
    "st_pierre_miquelon"
  ],
  "\u{1F1F5}\u{1F1F3}": [
    "flag_pitcairn_islands",
    "pitcairn",
    "flag",
    "nation",
    "country",
    "banner",
    "pitcairn_islands"
  ],
  "\u{1F1F5}\u{1F1F7}": [
    "flag_puerto_rico",
    "puerto",
    "rico",
    "flag",
    "nation",
    "country",
    "banner",
    "puerto_rico"
  ],
  "\u{1F1F5}\u{1F1F8}": [
    "flag_palestinian_territories",
    "palestine",
    "palestinian",
    "territories",
    "flag",
    "nation",
    "country",
    "banner",
    "palestinian_territories"
  ],
  "\u{1F1F5}\u{1F1F9}": [
    "flag_portugal",
    "pt",
    "flag",
    "nation",
    "country",
    "banner",
    "portugal"
  ],
  "\u{1F1F5}\u{1F1FC}": [
    "flag_palau",
    "pw",
    "flag",
    "nation",
    "country",
    "banner",
    "palau"
  ],
  "\u{1F1F5}\u{1F1FE}": [
    "flag_paraguay",
    "py",
    "flag",
    "nation",
    "country",
    "banner",
    "paraguay"
  ],
  "\u{1F1F6}\u{1F1E6}": [
    "flag_qatar",
    "qa",
    "flag",
    "nation",
    "country",
    "banner",
    "qatar"
  ],
  "\u{1F1F7}\u{1F1EA}": [
    "flag_reunion",
    "r\xE9union",
    "flag",
    "nation",
    "country",
    "banner",
    "reunion"
  ],
  "\u{1F1F7}\u{1F1F4}": [
    "flag_romania",
    "ro",
    "flag",
    "nation",
    "country",
    "banner",
    "romania"
  ],
  "\u{1F1F7}\u{1F1F8}": [
    "flag_serbia",
    "rs",
    "flag",
    "nation",
    "country",
    "banner",
    "serbia"
  ],
  "\u{1F1F7}\u{1F1FA}": [
    "flag_russia",
    "russian",
    "federation",
    "flag",
    "nation",
    "country",
    "banner",
    "russia"
  ],
  "\u{1F1F7}\u{1F1FC}": [
    "flag_rwanda",
    "rw",
    "flag",
    "nation",
    "country",
    "banner",
    "rwanda"
  ],
  "\u{1F1F8}\u{1F1E6}": [
    "flag_saudi_arabia",
    "flag",
    "nation",
    "country",
    "banner",
    "saudi_arabia"
  ],
  "\u{1F1F8}\u{1F1E7}": [
    "flag_solomon_islands",
    "solomon",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "solomon_islands"
  ],
  "\u{1F1F8}\u{1F1E8}": [
    "flag_seychelles",
    "sc",
    "flag",
    "nation",
    "country",
    "banner",
    "seychelles"
  ],
  "\u{1F1F8}\u{1F1E9}": [
    "flag_sudan",
    "sd",
    "flag",
    "nation",
    "country",
    "banner",
    "sudan"
  ],
  "\u{1F1F8}\u{1F1EA}": [
    "flag_sweden",
    "se",
    "flag",
    "nation",
    "country",
    "banner",
    "sweden"
  ],
  "\u{1F1F8}\u{1F1EC}": [
    "flag_singapore",
    "sg",
    "flag",
    "nation",
    "country",
    "banner",
    "singapore"
  ],
  "\u{1F1F8}\u{1F1ED}": [
    "flag_st_helena",
    "saint",
    "helena",
    "ascension",
    "tristan",
    "cunha",
    "flag",
    "nation",
    "country",
    "banner",
    "st_helena"
  ],
  "\u{1F1F8}\u{1F1EE}": [
    "flag_slovenia",
    "si",
    "flag",
    "nation",
    "country",
    "banner",
    "slovenia"
  ],
  "\u{1F1F8}\u{1F1EF}": [
    "flag_svalbard_jan_mayen"
  ],
  "\u{1F1F8}\u{1F1F0}": [
    "flag_slovakia",
    "sk",
    "flag",
    "nation",
    "country",
    "banner",
    "slovakia"
  ],
  "\u{1F1F8}\u{1F1F1}": [
    "flag_sierra_leone",
    "sierra",
    "leone",
    "flag",
    "nation",
    "country",
    "banner",
    "sierra_leone"
  ],
  "\u{1F1F8}\u{1F1F2}": [
    "flag_san_marino",
    "san",
    "marino",
    "flag",
    "nation",
    "country",
    "banner",
    "san_marino"
  ],
  "\u{1F1F8}\u{1F1F3}": [
    "flag_senegal",
    "sn",
    "flag",
    "nation",
    "country",
    "banner",
    "senegal"
  ],
  "\u{1F1F8}\u{1F1F4}": [
    "flag_somalia",
    "so",
    "flag",
    "nation",
    "country",
    "banner",
    "somalia"
  ],
  "\u{1F1F8}\u{1F1F7}": [
    "flag_suriname",
    "sr",
    "flag",
    "nation",
    "country",
    "banner",
    "suriname"
  ],
  "\u{1F1F8}\u{1F1F8}": [
    "flag_south_sudan",
    "south",
    "sd",
    "flag",
    "nation",
    "country",
    "banner",
    "south_sudan"
  ],
  "\u{1F1F8}\u{1F1F9}": [
    "flag_sao_tome_principe",
    "sao",
    "tome",
    "principe",
    "flag",
    "nation",
    "country",
    "banner",
    "sao_tome_principe"
  ],
  "\u{1F1F8}\u{1F1FB}": [
    "flag_el_salvador",
    "el",
    "salvador",
    "flag",
    "nation",
    "country",
    "banner",
    "el_salvador"
  ],
  "\u{1F1F8}\u{1F1FD}": [
    "flag_sint_maarten",
    "sint",
    "maarten",
    "dutch",
    "flag",
    "nation",
    "country",
    "banner",
    "sint_maarten"
  ],
  "\u{1F1F8}\u{1F1FE}": [
    "flag_syria",
    "syrian",
    "arab",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "syria"
  ],
  "\u{1F1F8}\u{1F1FF}": [
    "flag_eswatini",
    "sz",
    "flag",
    "nation",
    "country",
    "banner",
    "eswatini"
  ],
  "\u{1F1F9}\u{1F1E6}": [
    "flag_tristan_da_cunha"
  ],
  "\u{1F1F9}\u{1F1E8}": [
    "flag_turks_caicos_islands",
    "turks",
    "caicos",
    "islands",
    "flag",
    "nation",
    "country",
    "banner",
    "turks_caicos_islands"
  ],
  "\u{1F1F9}\u{1F1E9}": [
    "flag_chad",
    "td",
    "flag",
    "nation",
    "country",
    "banner",
    "chad"
  ],
  "\u{1F1F9}\u{1F1EB}": [
    "flag_french_southern_territories",
    "french",
    "southern",
    "territories",
    "flag",
    "nation",
    "country",
    "banner",
    "french_southern_territories"
  ],
  "\u{1F1F9}\u{1F1EC}": [
    "flag_togo",
    "tg",
    "flag",
    "nation",
    "country",
    "banner",
    "togo"
  ],
  "\u{1F1F9}\u{1F1ED}": [
    "flag_thailand",
    "th",
    "flag",
    "nation",
    "country",
    "banner",
    "thailand"
  ],
  "\u{1F1F9}\u{1F1EF}": [
    "flag_tajikistan",
    "tj",
    "flag",
    "nation",
    "country",
    "banner",
    "tajikistan"
  ],
  "\u{1F1F9}\u{1F1F0}": [
    "flag_tokelau",
    "tk",
    "flag",
    "nation",
    "country",
    "banner",
    "tokelau"
  ],
  "\u{1F1F9}\u{1F1F1}": [
    "flag_timor_leste",
    "timor",
    "leste",
    "flag",
    "nation",
    "country",
    "banner",
    "timor_leste"
  ],
  "\u{1F1F9}\u{1F1F2}": [
    "flag_turkmenistan",
    "flag",
    "nation",
    "country",
    "banner",
    "turkmenistan"
  ],
  "\u{1F1F9}\u{1F1F3}": [
    "flag_tunisia",
    "tn",
    "flag",
    "nation",
    "country",
    "banner",
    "tunisia"
  ],
  "\u{1F1F9}\u{1F1F4}": [
    "flag_tonga",
    "to",
    "flag",
    "nation",
    "country",
    "banner",
    "tonga"
  ],
  "\u{1F1F9}\u{1F1F7}": [
    "flag_turkey",
    "turkey",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1F9}\u{1F1F9}": [
    "flag_trinidad_tobago",
    "trinidad",
    "tobago",
    "flag",
    "nation",
    "country",
    "banner",
    "trinidad_tobago"
  ],
  "\u{1F1F9}\u{1F1FB}": [
    "flag_tuvalu",
    "flag",
    "nation",
    "country",
    "banner",
    "tuvalu"
  ],
  "\u{1F1F9}\u{1F1FC}": [
    "flag_taiwan",
    "tw",
    "flag",
    "nation",
    "country",
    "banner",
    "taiwan"
  ],
  "\u{1F1F9}\u{1F1FF}": [
    "flag_tanzania",
    "tanzania",
    "united",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  "\u{1F1FA}\u{1F1E6}": [
    "flag_ukraine",
    "ua",
    "flag",
    "nation",
    "country",
    "banner",
    "ukraine"
  ],
  "\u{1F1FA}\u{1F1EC}": [
    "flag_uganda",
    "ug",
    "flag",
    "nation",
    "country",
    "banner",
    "uganda"
  ],
  "\u{1F1FA}\u{1F1F2}": [
    "flag_u_s_outlying_islands"
  ],
  "\u{1F1FA}\u{1F1F3}": [
    "flag_united_nations",
    "un",
    "flag",
    "banner"
  ],
  "\u{1F1FA}\u{1F1F8}": [
    "flag_united_states",
    "united",
    "states",
    "america",
    "flag",
    "nation",
    "country",
    "banner",
    "united_states"
  ],
  "\u{1F1FA}\u{1F1FE}": [
    "flag_uruguay",
    "uy",
    "flag",
    "nation",
    "country",
    "banner",
    "uruguay"
  ],
  "\u{1F1FA}\u{1F1FF}": [
    "flag_uzbekistan",
    "uz",
    "flag",
    "nation",
    "country",
    "banner",
    "uzbekistan"
  ],
  "\u{1F1FB}\u{1F1E6}": [
    "flag_vatican_city",
    "vatican",
    "city",
    "flag",
    "nation",
    "country",
    "banner",
    "vatican_city"
  ],
  "\u{1F1FB}\u{1F1E8}": [
    "flag_st_vincent_grenadines",
    "saint",
    "vincent",
    "grenadines",
    "flag",
    "nation",
    "country",
    "banner",
    "st_vincent_grenadines"
  ],
  "\u{1F1FB}\u{1F1EA}": [
    "flag_venezuela",
    "ve",
    "bolivarian",
    "republic",
    "flag",
    "nation",
    "country",
    "banner",
    "venezuela"
  ],
  "\u{1F1FB}\u{1F1EC}": [
    "flag_british_virgin_islands",
    "british",
    "virgin",
    "islands",
    "bvi",
    "flag",
    "nation",
    "country",
    "banner",
    "british_virgin_islands"
  ],
  "\u{1F1FB}\u{1F1EE}": [
    "flag_u_s_virgin_islands",
    "virgin",
    "islands",
    "us",
    "flag",
    "nation",
    "country",
    "banner",
    "u_s_virgin_islands"
  ],
  "\u{1F1FB}\u{1F1F3}": [
    "flag_vietnam",
    "viet",
    "nam",
    "flag",
    "nation",
    "country",
    "banner",
    "vietnam"
  ],
  "\u{1F1FB}\u{1F1FA}": [
    "flag_vanuatu",
    "vu",
    "flag",
    "nation",
    "country",
    "banner",
    "vanuatu"
  ],
  "\u{1F1FC}\u{1F1EB}": [
    "flag_wallis_futuna",
    "wallis",
    "futuna",
    "flag",
    "nation",
    "country",
    "banner",
    "wallis_futuna"
  ],
  "\u{1F1FC}\u{1F1F8}": [
    "flag_samoa",
    "ws",
    "flag",
    "nation",
    "country",
    "banner",
    "samoa"
  ],
  "\u{1F1FD}\u{1F1F0}": [
    "flag_kosovo",
    "xk",
    "flag",
    "nation",
    "country",
    "banner",
    "kosovo"
  ],
  "\u{1F1FE}\u{1F1EA}": [
    "flag_yemen",
    "ye",
    "flag",
    "nation",
    "country",
    "banner",
    "yemen"
  ],
  "\u{1F1FE}\u{1F1F9}": [
    "flag_mayotte",
    "yt",
    "flag",
    "nation",
    "country",
    "banner",
    "mayotte"
  ],
  "\u{1F1FF}\u{1F1E6}": [
    "flag_south_africa",
    "south",
    "africa",
    "flag",
    "nation",
    "country",
    "banner",
    "south_africa"
  ],
  "\u{1F1FF}\u{1F1F2}": [
    "flag_zambia",
    "zm",
    "flag",
    "nation",
    "country",
    "banner",
    "zambia"
  ],
  "\u{1F1FF}\u{1F1FC}": [
    "flag_zimbabwe",
    "zw",
    "flag",
    "nation",
    "country",
    "banner",
    "zimbabwe"
  ],
  "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}": [
    "flag_england",
    "flag",
    "english"
  ],
  "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}": [
    "flag_scotland",
    "flag",
    "scottish"
  ],
  "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}": [
    "flag_wales",
    "flag",
    "welsh"
  ],
  "\u{1F972}": [
    "smiling face with tear",
    "sad",
    "cry",
    "pretend"
  ],
  "\u{1F978}": [
    "disguised face",
    "pretent",
    "brows",
    "glasses",
    "moustache"
  ],
  "\u{1F90C}": [
    "pinched fingers",
    "size",
    "tiny",
    "small"
  ],
  "\u{1FAC0}": [
    "anatomical heart",
    "health",
    "heartbeat"
  ],
  "\u{1FAC1}": [
    "lungs",
    "breathe"
  ],
  "\u{1F977}": [
    "ninja",
    "ninjutsu",
    "skills",
    "japanese"
  ],
  "\u{1F935}\u200D\u2642\uFE0F": [
    "man in tuxedo",
    "formal",
    "fashion"
  ],
  "\u{1F935}\u200D\u2640\uFE0F": [
    "woman in tuxedo",
    "formal",
    "fashion"
  ],
  "\u{1F470}\u200D\u2642\uFE0F": [
    "man with veil",
    "wedding",
    "marriage"
  ],
  "\u{1F470}\u200D\u2640\uFE0F": [
    "woman with veil",
    "wedding",
    "marriage"
  ],
  "\u{1F469}\u200D\u{1F37C}": [
    "woman feeding baby",
    "birth",
    "food"
  ],
  "\u{1F468}\u200D\u{1F37C}": [
    "man feeding baby",
    "birth",
    "food"
  ],
  "\u{1F9D1}\u200D\u{1F37C}": [
    "person feeding baby",
    "birth",
    "food"
  ],
  "\u{1F9D1}\u200D\u{1F384}": [
    "mx claus",
    "christmas"
  ],
  "\u{1FAC2}": [
    "people hugging",
    "care"
  ],
  "\u{1F408}\u200D\u2B1B": [
    "black cat",
    "superstition",
    "luck"
  ],
  "\u{1F9AC}": [
    "bison",
    "ox"
  ],
  "\u{1F9A3}": [
    "mammoth",
    "elephant",
    "tusks"
  ],
  "\u{1F9AB}": [
    "beaver",
    "animal",
    "rodent"
  ],
  "\u{1F43B}\u200D\u2744\uFE0F": [
    "polar bear",
    "animal",
    "arctic"
  ],
  "\u{1F9A4}": [
    "dodo",
    "animal",
    "bird"
  ],
  "\u{1FAB6}": [
    "feather",
    "bird",
    "fly"
  ],
  "\u{1F9AD}": [
    "seal",
    "animal",
    "creature",
    "sea"
  ],
  "\u{1FAB2}": [
    "beetle",
    "insect"
  ],
  "\u{1FAB3}": [
    "cockroach",
    "insect",
    "pests"
  ],
  "\u{1FAB0}": [
    "fly",
    "insect"
  ],
  "\u{1FAB1}": [
    "worm",
    "animal"
  ],
  "\u{1FAB4}": [
    "potted plant",
    "greenery",
    "house"
  ],
  "\u{1FAD0}": [
    "blueberries",
    "fruit"
  ],
  "\u{1FAD2}": [
    "olive",
    "fruit"
  ],
  "\u{1FAD1}": [
    "bell pepper",
    "fruit",
    "plant"
  ],
  "\u{1FAD3}": [
    "flatbread",
    "flour",
    "food",
    "bakery"
  ],
  "\u{1FAD4}": [
    "tamale",
    "food",
    "masa"
  ],
  "\u{1FAD5}": [
    "fondue",
    "cheese",
    "pot",
    "food"
  ],
  "\u{1FAD6}": [
    "teapot",
    "drink",
    "hot"
  ],
  "\u{1F9CB}": [
    "bubble tea",
    "taiwan",
    "boba",
    "milk tea",
    "straw"
  ],
  "\u{1FAA8}": [
    "rock",
    "stone"
  ],
  "\u{1FAB5}": [
    "wood",
    "nature",
    "timber",
    "trunk"
  ],
  "\u{1F6D6}": [
    "hut",
    "house",
    "structure"
  ],
  "\u{1F6FB}": [
    "pickup truck",
    "car",
    "transportation"
  ],
  "\u{1F6FC}": [
    "roller skate",
    "footwear",
    "sports"
  ],
  "\u{1FA84}": [
    "magic wand",
    "supernature",
    "power"
  ],
  "\u{1FA85}": [
    "pinata",
    "mexico",
    "candy",
    "celebration"
  ],
  "\u{1FA86}": [
    "nesting dolls",
    "matryoshka",
    "toy"
  ],
  "\u{1FAA1}": [
    "sewing needle",
    "stitches"
  ],
  "\u{1FAA2}": [
    "knot",
    "rope",
    "scout"
  ],
  "\u{1FA74}": [
    "thong sandal",
    "footwear",
    "summer"
  ],
  "\u{1FA96}": [
    "military helmet",
    "army",
    "protection"
  ],
  "\u{1FA97}": [
    "accordion",
    "music"
  ],
  "\u{1FA98}": [
    "long drum",
    "music"
  ],
  "\u{1FA99}": [
    "coin",
    "money",
    "currency"
  ],
  "\u{1FA83}": [
    "boomerang",
    "weapon"
  ],
  "\u{1FA9A}": [
    "carpentry saw",
    "cut",
    "chop"
  ],
  "\u{1FA9B}": [
    "screwdriver",
    "tools"
  ],
  "\u{1FA9D}": [
    "hook",
    "tools"
  ],
  "\u{1FA9C}": [
    "ladder",
    "tools"
  ],
  "\u{1F6D7}": [
    "elevator",
    "lift"
  ],
  "\u{1FA9E}": [
    "mirror",
    "reflection"
  ],
  "\u{1FA9F}": [
    "window",
    "scenery"
  ],
  "\u{1FAA0}": [
    "plunger",
    "toilet"
  ],
  "\u{1FAA4}": [
    "mouse trap",
    "cheese"
  ],
  "\u{1FAA3}": [
    "bucket",
    "water",
    "container"
  ],
  "\u{1FAA5}": [
    "toothbrush",
    "hygiene",
    "dental"
  ],
  "\u{1FAA6}": [
    "headstone",
    "death",
    "rip",
    "grave"
  ],
  "\u{1FAA7}": [
    "placard",
    "announcement"
  ],
  "\u26A7\uFE0F": [
    "transgender symbol",
    "transgender",
    "lgbtq"
  ],
  "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F": [
    "transgender flag",
    "transgender",
    "flag",
    "pride",
    "lgbtq"
  ],
  "\u{1F636}\u200D\u{1F32B}\uFE0F": [
    "face in clouds",
    "shower",
    "steam",
    "dream"
  ],
  "\u{1F62E}\u200D\u{1F4A8}": [
    "face exhaling",
    "relieve",
    "relief",
    "tired",
    "sigh"
  ],
  "\u{1F635}\u200D\u{1F4AB}": [
    "face with spiral eyes",
    "sick",
    "ill",
    "confused",
    "nauseous",
    "nausea"
  ],
  "\u2764\uFE0F\u200D\u{1F525}": [
    "heart on fire",
    "passionate",
    "enthusiastic"
  ],
  "\u2764\uFE0F\u200D\u{1FA79}": [
    "mending heart",
    "broken heart",
    "bandage",
    "wounded"
  ],
  "\u{1F9D4}\u200D\u2642\uFE0F": [
    "man beard",
    "facial hair"
  ],
  "\u{1F9D4}\u200D\u2640\uFE0F": [
    "woman beard",
    "facial hair"
  ],
  "\u{1FAE0}": [
    "melting face",
    "hot",
    "heat"
  ],
  "\u{1FAE2}": [
    "face with open eyes and hand over mouth",
    "silence",
    "secret",
    "shock",
    "surprise"
  ],
  "\u{1FAE3}": [
    "face with peeking eye",
    "scared",
    "frightening",
    "embarrassing",
    "shy"
  ],
  "\u{1FAE1}": [
    "saluting face",
    "respect",
    "salute"
  ],
  "\u{1FAE5}": [
    "dotted line face",
    "invisible",
    "lonely",
    "isolation",
    "depression"
  ],
  "\u{1FAE4}": [
    "face with diagonal mouth",
    "skeptic",
    "confuse",
    "frustrated",
    "indifferent"
  ],
  "\u{1F979}": [
    "face holding back tears",
    "touched",
    "gratitude",
    "cry"
  ],
  "\u{1FAF1}": [
    "rightwards hand",
    "palm",
    "offer"
  ],
  "\u{1FAF2}": [
    "leftwards hand",
    "palm",
    "offer"
  ],
  "\u{1FAF3}": [
    "palm down hand",
    "palm",
    "drop"
  ],
  "\u{1FAF4}": [
    "palm up hand",
    "lift",
    "offer",
    "demand"
  ],
  "\u{1FAF0}": [
    "hand with index finger and thumb crossed",
    "heart",
    "love",
    "money",
    "expensive"
  ],
  "\u{1FAF5}": [
    "index pointing at the viewer",
    "you",
    "recruit"
  ],
  "\u{1FAF6}": [
    "heart hands",
    "love",
    "appreciation",
    "support"
  ],
  "\u{1FAE6}": [
    "biting lip",
    "flirt",
    "sexy",
    "pain",
    "worry"
  ],
  "\u{1FAC5}": [
    "person with crown",
    "royalty",
    "power"
  ],
  "\u{1FAC3}": [
    "pregnant man",
    "baby",
    "belly"
  ],
  "\u{1FAC4}": [
    "pregnant person",
    "baby",
    "belly"
  ],
  "\u{1F9CC}": [
    "troll",
    "mystical",
    "monster"
  ],
  "\u{1FAB8}": [
    "coral",
    "ocean",
    "sea",
    "reef"
  ],
  "\u{1FAB7}": [
    "lotus",
    "flower",
    "calm",
    "meditation"
  ],
  "\u{1FAB9}": [
    "empty nest",
    "bird"
  ],
  "\u{1FABA}": [
    "nest with eggs",
    "bird"
  ],
  "\u{1FAD8}": [
    "beans",
    "food"
  ],
  "\u{1FAD7}": [
    "pouring liquid",
    "cup",
    "water"
  ],
  "\u{1FAD9}": [
    "jar",
    "container",
    "sauce"
  ],
  "\u{1F6DD}": [
    "playground slide",
    "fun",
    "park"
  ],
  "\u{1F6DE}": [
    "wheel",
    "car",
    "transport"
  ],
  "\u{1F6DF}": [
    "ring buoy",
    "life saver",
    "life preserver"
  ],
  "\u{1FAAC}": [
    "hamsa",
    "religion",
    "protection"
  ],
  "\u{1FAA9}": [
    "mirror ball",
    "disco",
    "dance",
    "party"
  ],
  "\u{1FAAB}": [
    "low battery",
    "drained",
    "dead"
  ],
  "\u{1FA7C}": [
    "crutch",
    "accessibility",
    "assist"
  ],
  "\u{1FA7B}": [
    "x-ray",
    "skeleton",
    "medicine"
  ],
  "\u{1FAE7}": [
    "bubbles",
    "soap",
    "fun",
    "carbonation",
    "sparkling"
  ],
  "\u{1FAAA}": [
    "identification card",
    "document"
  ],
  "\u{1F7F0}": [
    "heavy equals sign",
    "math"
  ],
  "\u{1FAE8}": [
    "shaking face",
    "dizzy",
    "shock",
    "blurry",
    "earthquake"
  ],
  "\u{1FA77}": [
    "pink heart",
    "valentines"
  ],
  "\u{1FA75}": [
    "light blue heart",
    "ice",
    "baby blue"
  ],
  "\u{1FA76}": [
    "grey heart",
    "silver",
    "monochrome"
  ],
  "\u{1FAF7}": [
    "leftwards pushing hand",
    "highfive",
    "pressing",
    "stop"
  ],
  "\u{1FAF8}": [
    "rightwards pushing hand",
    "highfive",
    "pressing",
    "stop"
  ],
  "\u{1FACE}": [
    "moose",
    "shrek",
    "canada",
    "sweden",
    "sven",
    "cool"
  ],
  "\u{1FACF}": [
    "donkey",
    "eeyore",
    "mule"
  ],
  "\u{1FABD}": [
    "wing",
    "angel",
    "birds",
    "flying"
  ],
  "\u{1F426}\u200D\u2B1B": [
    "black bird",
    "crow"
  ],
  "\u{1FABF}": [
    "goose",
    "silly",
    "jemima",
    "goosebumps"
  ],
  "\u{1FABC}": [
    "jellyfish",
    "sting",
    "tentacles"
  ],
  "\u{1FABB}": [
    "hyacinth",
    "flower",
    "lavender"
  ],
  "\u{1FADA}": [
    "ginger root",
    "spice",
    "yellow",
    "cooking",
    "gingerbread"
  ],
  "\u{1FADB}": [
    "pea pod",
    "cozy",
    "green"
  ],
  "\u{1FAAD}": [
    "folding hand fan",
    "flamenco",
    "hot"
  ],
  "\u{1FAAE}": [
    "hair pick",
    "afro",
    "comb"
  ],
  "\u{1FA87}": [
    "maracas",
    "music",
    "instrument",
    "percussion"
  ],
  "\u{1FA88}": [
    "flute",
    "bamboo",
    "music",
    "instrument",
    "pied piper"
  ],
  "\u{1FAAF}": [
    "khanda",
    "Sikhism",
    "religion"
  ],
  "\u{1F6DC}": [
    "wireless",
    "wifi",
    "internet",
    "contactless",
    "signal"
  ],
  "\u{1F642}\u200D\u2194\uFE0F": [
    "head shaking horizontally",
    "disapprove",
    "indiffernt",
    "left"
  ],
  "\u{1F642}\u200D\u2195\uFE0F": [
    "head shaking vertically",
    "down",
    "nod"
  ],
  "\u{1F6B6}\u200D\u27A1\uFE0F": [
    "person walking facing right",
    "peerson",
    "exercise"
  ],
  "\u{1F6B6}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F": [
    "woman walking facing right",
    "person",
    "exercise"
  ],
  "\u{1F6B6}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F": [
    "man walking facing right",
    "person",
    "exercise"
  ],
  "\u{1F9CE}\u200D\u27A1\uFE0F": [
    "person kneeling facing right",
    "pray"
  ],
  "\u{1F9CE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F": [
    "woman kneeling facing right",
    "pray",
    "worship"
  ],
  "\u{1F9CE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F": [
    "man kneeling facing right",
    "pray",
    "worship"
  ],
  "\u{1F9D1}\u200D\u{1F9AF}\u200D\u27A1\uFE0F": [
    "person with white cane facing right",
    "walk",
    "walk",
    "visually impaired",
    "blind"
  ],
  "\u{1F468}\u200D\u{1F9AF}\u200D\u27A1\uFE0F": [
    "man with white cane facing right",
    "visually impaired",
    "blind",
    "walk",
    "stick"
  ],
  "\u{1F469}\u200D\u{1F9AF}\u200D\u27A1\uFE0F": [
    "woman with white cane facing right",
    "stick",
    "visually impaired",
    "blind"
  ],
  "\u{1F9D1}\u200D\u{1F9BC}\u200D\u27A1\uFE0F": [
    "person in motorized wheelchair facing right",
    "accessibility",
    "disability"
  ],
  "\u{1F468}\u200D\u{1F9BC}\u200D\u27A1\uFE0F": [
    "man in motorized wheelchair facing right",
    "disability",
    "accessibility",
    "mobility"
  ],
  "\u{1F469}\u200D\u{1F9BC}\u200D\u27A1\uFE0F": [
    "woman in motorized wheelchair facing right",
    "mobility",
    "accessibility",
    "disability"
  ],
  "\u{1F9D1}\u200D\u{1F9BD}\u200D\u27A1\uFE0F": [
    "person in manual wheelchair facing right",
    "mobility",
    "accessibility",
    "disability"
  ],
  "\u{1F468}\u200D\u{1F9BD}\u200D\u27A1\uFE0F": [
    "man in manual wheelchair facing right",
    "mobility",
    "accessibility",
    "disability"
  ],
  "\u{1F469}\u200D\u{1F9BD}\u200D\u27A1\uFE0F": [
    "woman in manual wheelchair facing right",
    "disability",
    "mobility",
    "accessibility"
  ],
  "\u{1F3C3}\u200D\u27A1\uFE0F": [
    "person running facing right",
    "exercise",
    "jog"
  ],
  "\u{1F3C3}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F": [
    "woman running facing right",
    "exercise",
    "jog"
  ],
  "\u{1F3C3}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F": [
    "man running facing right",
    "jog",
    "exercise"
  ],
  "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}": [
    "family adult, adult, child",
    "kid",
    "parents"
  ],
  "\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}": [
    "family adult, adult, child, child",
    "children",
    "parents"
  ],
  "\u{1F9D1}\u200D\u{1F9D2}": [
    "family adult, child",
    "parent",
    "kid"
  ],
  "\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2}": [
    "family adult, child, child",
    "parent",
    "children"
  ],
  "\u{1F426}\u200D\u{1F525}": [
    "phoenix",
    "immortal",
    "bird",
    "mythtical",
    "reborn"
  ],
  "\u{1F34B}\u200D\u{1F7E9}": [
    "lime",
    "fruit",
    "acidic",
    "citric"
  ],
  "\u{1F344}\u200D\u{1F7EB}": [
    "brown mushroom",
    "toadstool",
    "fungus"
  ],
  "\u26D3\uFE0F\u200D\u{1F4A5}": [
    "broken chain",
    "constraint",
    "break"
  ]
};

// src/emoji.tsx
var import_fuse = __toESM(require_fuse_common());

// node_modules/raycast-toolkit/dist/Action.mjs
var React = __toESM(require("react"), 1);
var import_react = require("react");

// node_modules/run-applescript/index.js
var import_execa = __toESM(require_execa(), 1);

// node_modules/raycast-toolkit/dist/Action.mjs
var import_api2 = require("@raycast/api");

// node_modules/raycast-toolkit/dist/usePersistentState.mjs
var import_api3 = require("@raycast/api");
var import_react2 = require("react");
function usePersistentState(key, initialValue) {
  const [loading, setLoading] = (0, import_react2.useState)(true);
  const [state, setState] = (0, import_react2.useState)(initialValue);
  (0, import_react2.useEffect)(() => {
    let didUnmount = false;
    (async () => {
      const cache = await import_api3.LocalStorage.getItem(key);
      if (typeof cache === "string") {
        if (!didUnmount) {
          setState(JSON.parse(cache));
        }
      }
      setLoading(false);
    })();
    return () => {
      didUnmount = true;
    };
  }, []);
  const setStateAndLocalStorage = (0, import_react2.useCallback)((updater) => {
    setState((state2) => {
      const newValue = typeof updater === "function" ? updater(state2) : updater;
      import_api3.LocalStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  }, []);
  return [state, setStateAndLocalStorage, loading];
}

// src/emoji.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var { primaryAction, unicodeVersion, shortCodes } = (0, import_api4.getPreferenceValues)();
var allEmojis = "All Emojis";
var filterList = (list, searchText, category) => {
  return list.map((c) => {
    const emojis = c.emojis.filter((emoji) => {
      return category !== "" ? emoji.category === category : true;
    });
    const fuse = new import_fuse.default(emojis, { keys: ["keywords"] });
    return { ...c, emojis: searchText === "" ? emojis : fuse.search(searchText).map((item) => item.item) };
  });
};
var getEmojipediaLink = (description) => `https://emojipedia.org/${description.toLowerCase().replace(/:? /g, "-")}/`;
function Main() {
  const [list, setList] = usePersistentState("emoji-list-v2", []);
  const [categories, setCategories] = usePersistentState("emoji-categories", []);
  (0, import_react3.useEffect)(() => {
    let didUnmount = false;
    createEmojiList({
      unicodeVersion,
      features: { shortCodes }
    }).then((list2) => {
      if (!didUnmount) {
        setList(
          list2.flatMap(
            (category2) => category2.emojis.map((emoji) => ({
              ...emoji,
              category: category2.category,
              keywords: emoji_en_US_default[emoji.emoji]
            }))
          )
        );
        setCategories(list2.map((category2) => category2.category));
      }
    });
    return () => {
      didUnmount = true;
    };
  }, []);
  const [recentlyUsed, setRecentlyUsed, loadingRecentlyUsed] = usePersistentState("recently-used", []);
  const addToRecentlyUsed = (emoji) => {
    setRecentlyUsed(
      (list2) => list2.find((x) => x.description === emoji.description) ? list2 : [emoji, ...list2].slice(0, 10)
    );
  };
  const [category, setCategory] = (0, import_react3.useState)("");
  const [searchText, setSearchText] = (0, import_react3.useState)("");
  const isLoading = list.length === 0 || loadingRecentlyUsed;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api4.List,
    {
      isLoading,
      onSearchTextChange: setSearchText,
      searchBarAccessory: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api4.List.Dropdown, { tooltip: "Select Category", onChange: setCategory, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api4.List.Dropdown.Item, { title: allEmojis, value: "", icon: "\u{1F973}" }, category),
        categories.map((category2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api4.List.Dropdown.Item,
          {
            title: category2,
            value: category2,
            icon: list.find((emoji) => emoji.category === category2)?.emoji
          },
          category2
        ))
      ] }),
      children: !isLoading ? filterList(
        [
          !searchText && { category: "Recently Used", emojis: recentlyUsed },
          { category: category || allEmojis, emojis: list }
        ].filter(Boolean),
        searchText,
        category
      ).map((category2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api4.List.Section, { title: category2.category, children: category2.emojis.map((emoji) => {
        const paste = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api4.Action.Paste,
          {
            content: emoji.emoji,
            onPaste: () => {
              addToRecentlyUsed(emoji);
            }
          }
        );
        const copy = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api4.Action.CopyToClipboard,
          {
            content: emoji.emoji,
            onCopy: () => {
              addToRecentlyUsed(emoji);
            }
          }
        );
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api4.List.Item,
          {
            id: `${category2.category}${emoji.description}`,
            icon: emoji.emoji,
            title: emoji.description.replace(/\b(\w)/g, (s) => s.toUpperCase()),
            keywords: emoji.shortCode,
            actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api4.ActionPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api4.ActionPanel.Section, { children: [
              primaryAction === "paste" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                paste,
                copy
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                copy,
                paste
              ] }),
              shortCodes && emoji.shortCode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_api4.Action.CopyToClipboard,
                {
                  title: "Copy Shortcode",
                  content: emoji.shortCode[0],
                  onCopy: () => {
                    addToRecentlyUsed(emoji);
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api4.Action.OpenInBrowser, { title: "View on Emojipedia", url: getEmojipediaLink(emoji.description) })
            ] }) }),
            accessories: [
              {
                text: emoji?.shortCode?.join(" / ")
              }
            ]
          },
          emoji.description
        );
      }) }, category2.category)) : []
    }
  );
}
