//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('PageTruck', ["web-cell"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory(require('web-cell'));
    else
        return  this['PageTruck'] = factory(this['web-cell']);

})(function (web_cell) {

function merge(base, path) {
  return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {
    return input[index - 1] === '.' ? match : '';
  });
}

function outPackage(name) {
  return /^[^./]/.test(name);
}

    var require = _require_.bind(null, './');

    function _require_(base, path) {

        var module = _module_[
                outPackage( path )  ?  path  :  ('./' + merge(base, path))
            ],
            exports;

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = require( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    _require_.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _module_ = {
  './../service/truck': {
    base: './../service',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.truckCall = truckCall;
      exports.submit = submit;
      exports.currentUser = currentUser;
      exports.navTo = navTo;
      exports.signIn = signIn;

      function truckCall(_x) {
        return _truckCall.apply(this, arguments);
      }

      function _truckCall() {
        _truckCall = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(path) {
          var method,
              query,
              body,
              response,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
                  query = _args.length > 2 ? _args[2] : undefined;
                  body = _args.length > 3 ? _args[3] : undefined;
                  query = query ? new URLSearchParams(query) : '';
                  _context.next = 6;
                  return fetch("http://27.102.107.55:5000/".concat(path, "?").concat(query), {
                    method: method,
                    body: body,
                    mode: 'cors',
                    credentials: 'include'
                  });

                case 6:
                  response = _context.sent;

                  if (!(response.status > 299)) {
                    _context.next = 9;
                    break;
                  }

                  throw Object.assign(new URIError(response.statusText), {
                    code: response.status,
                    response: response
                  });

                case 9:
                  _context.next = 11;
                  return response.json();

                case 11:
                  return _context.abrupt("return", _context.sent);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
        return _truckCall.apply(this, arguments);
      }

      function submit(form) {
        return truckCall(form.getAttribute('action'), form.getAttribute('method'), null, new FormData(form));
      }

      var user;

      function currentUser() {
        return _currentUser.apply(this, arguments);
      }

      function _currentUser() {
        _currentUser = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.t0 = user;

                  if (_context2.t0) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return truckCall('user');

                case 4:
                  _context2.t0 = user = _context2.sent;

                case 5:
                  return _context2.abrupt("return", _context2.t0);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
        return _currentUser.apply(this, arguments);
      }

      var router = document.querySelector('cell-router');

      function navTo(route) {
        return router.navTo(Object.assign(document.createElement('a'), {
          href: route
        }));
      }

      var userName = document.querySelector('cell-drawer > header span');

      function signIn(user) {
        userName.textContent = user.name;
      }
    }
  },
  './../service/map': {
    base: './../service',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mapCall = mapCall;
      exports.currentCoord = currentCoord;
      exports.searchCoord = searchCoord;
      exports.districtOf = districtOf;
      var key = 'f2d1df02fc1c58d8a4ed23bfc0b584bd';

      function mapCall(_x2, _x3) {
        return _mapCall.apply(this, arguments);
      }

      function _mapCall() {
        _mapCall = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(path, data) {
          var response;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  data = new URLSearchParams(Object.assign({
                    key: key
                  }, data));
                  _context3.next = 3;
                  return fetch("https://restapi.amap.com/v3/".concat(path, "?").concat(data));

                case 3:
                  response = _context3.sent;

                  if (!(response.status > 299)) {
                    _context3.next = 6;
                    break;
                  }

                  throw Object.assign(new URIError(response.statusText), {
                    code: response.status,
                    response: response
                  });

                case 6:
                  _context3.next = 8;
                  return response.json();

                case 8:
                  data = _context3.sent;

                  if (!(data.status !== '1')) {
                    _context3.next = 11;
                    break;
                  }

                  throw Object.assign(new Error(data.info), {
                    code: data.status,
                    response: response
                  });

                case 11:
                  return _context3.abrupt("return", data);

                case 12:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));
        return _mapCall.apply(this, arguments);
      }

      function currentCoord() {
        return _currentCoord.apply(this, arguments);
      }

      function _currentCoord() {
        _currentCoord = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee4() {
          var data;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return mapCall('ip');

                case 2:
                  data = _context4.sent;
                  data.rectangle = data.rectangle.split(';').map(function (coord) {
                    return coord.split(',');
                  });
                  return _context4.abrupt("return", data);

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));
        return _currentCoord.apply(this, arguments);
      }

      function searchCoord(_x4, _x5, _x6) {
        return _searchCoord.apply(this, arguments);
      }

      function _searchCoord() {
        _searchCoord = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(keywords, city, all) {
          var data;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return mapCall('place/text', {
                    keywords: keywords,
                    city: city
                  });

                case 2:
                  data = _context5.sent;
                  return _context5.abrupt("return", all ? data : data.pois[0]);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
        return _searchCoord.apply(this, arguments);
      }

      function districtOf() {
        return _districtOf.apply(this, arguments);
      }

      function _districtOf() {
        _districtOf = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee6() {
          var keywords,
              data,
              _args6 = arguments;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  keywords = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : '';
                  _context6.next = 3;
                  return mapCall('config/district', {
                    keywords: keywords,
                    offset: 35
                  });

                case 3:
                  data = _context6.sent;
                  data = data.districts;
                  return _context6.abrupt("return", keywords ? data : data[0].districts);

                case 6:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));
        return _districtOf.apply(this, arguments);
      }
    }
  },
  './index.less': {
    base: '.',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "button {\n  -webkit-tap-highlight-color: transparent;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\nbutton {\n  background: transparent;border: none;border-radius: 2px;color: #000000;position: relative;height: 36px;margin: 0;min-width: 64px;padding: 0 16px;display: inline-block;font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-size: 14px;font-weight: 500;text-transform: uppercase;line-height: 1;letter-spacing: 0;overflow: hidden;will-change: box-shadow;transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);outline: none;cursor: pointer;text-decoration: none;text-align: center;line-height: 36px;vertical-align: middle;\n}\nbutton {\n  background: rgba(158, 158, 158, 0.2);box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\nform > div {\n  position: relative;font-size: 16px;display: inline-block;box-sizing: border-box;width: 300px;max-width: 100%;margin: 0;padding: 20px 0;\n}\ninput {\n  border: none;border-bottom: 1px solid rgba(0, 0, 0, 0.12);display: block;font-size: 16px;font-family: \"Helvetica\", \"Arial\", sans-serif;margin: 0;padding: 4px 0;width: 100%;background: none;text-align: left;color: inherit;\n}\nlabel {\n  bottom: 0;color: rgba(0, 0, 0, 0.26);font-size: 16px;left: 0;right: 0;pointer-events: none;position: absolute;display: block;top: 24px;width: 100%;overflow: hidden;white-space: nowrap;text-align: left;\n}\ninput:focus + label {\n  color: #3f51b5;font-size: 12px;top: 4px;visibility: visible;\n}\n:host(:focus) {\n  outline: none;\n}\nform {\n  background: white;\n  text-align: center;\n}\nform > div > * {\n  vertical-align: middle;\n}\ninput {\n  outline: none;\n}\nbutton {\n  margin: 0.25rem;\n}\n";
      exports.default = _default;
    }
  },
  './index.html': {
    base: '.',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = "<template>\n    <form method=\"POST\" action=\"truck\">\n        <img src=\"source/image/delivery.png\">\n        <h2>Truck Profile</h2>\n        <div>\n            <label>Size</label>\n            <select name=\"size\" required=\"\">\n                <option value=\"1\">Mini</option>\n                <option value=\"2\">Small</option>\n                <option value=\"3\">Medium</option>\n                <option value=\"4\">Large</option>\n            </select>\n        </div>\n        <div>\n            <input type=\"number\" name=\"width\" required=\"\">\n            <label>Width (meter)</label>\n        </div>\n        <div>\n            <input type=\"number\" name=\"height\" required=\"\">\n            <label>Height (meter)</label>\n        </div>\n        <div>\n            <input type=\"number\" name=\"weight\" required=\"\">\n            <label>Weight (ton)</label>\n        </div>\n        <div>\n            <input type=\"number\" name=\"load\" required=\"\">\n            <label>Payload (ton)</label>\n        </div>\n        <div>\n            <input type=\"number\" name=\"axlesNum\" required=\"\" step=\"1\" min=\"2\">\n            <label>Axle count</label>\n        </div>\n        <div>\n            <label>Province</label>\n            <select name=\"province\" required=\"\" data-array=\"province\">\n                <option>${view.name}</option>\n            </select>\n        </div>\n        <div>\n            <input type=\"text\" name=\"numbe\" required=\"\" pattern=\"[0-9A-Z]{5,6}\">\n            <label>License number</label>\n        </div>\n        <button type=\"submit\">Register</button>\n    </form>\n</template>\n";
      exports.default = _default;
    }
  },
  './index': {
    base: '.',
    dependency: [],
    factory: function factory(require, exports, module) {
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _webCell = require('web-cell');

      var _index = _interopRequireDefault(require('./index.html'));

      var _index2 = _interopRequireDefault(require('./index.less'));

      var _map = require('../service/map');

      var _truck = require('../service/truck');

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var province;

      var PageTruck =
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(PageTruck, _HTMLElement);

        function PageTruck() {
          var _this;

          _classCallCheck(this, PageTruck);

          (_this = _possibleConstructorReturn(this, _getPrototypeOf(PageTruck).call(this))).buildDOM(_index.default, _index2.default);

          return _this;
        }

        _createClass(PageTruck, [{
          key: "connectedCallback",
          value: function () {
            var _connectedCallback = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.t0 = province;

                      if (_context7.t0) {
                        _context7.next = 5;
                        break;
                      }

                      _context7.next = 4;
                      return (0, _map.districtOf)();

                    case 4:
                      _context7.t0 = _context7.sent;

                    case 5:
                      province = _context7.t0;
                      this.view.province.render(province);
                      this.on.call(this.shadowRoot, 'submit', 'form', this.onSubmit.bind(this));

                    case 8:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            return function connectedCallback() {
              return _connectedCallback.apply(this, arguments);
            };
          }()
        }, {
          key: "onSubmit",
          value: function () {
            var _onSubmit = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8(event) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      event.preventDefault();
                      _context8.prev = 1;
                      _context8.next = 4;
                      return (0, _truck.submit)(event.target);

                    case 4:
                      _context8.next = 9;
                      break;

                    case 6:
                      _context8.prev = 6;
                      _context8.t0 = _context8["catch"](1);
                      window.alert(_context8.t0.message);

                    case 9:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[1, 6]]);
            }));

            return function onSubmit(_x7) {
              return _onSubmit.apply(this, arguments);
            };
          }()
        }]);

        return PageTruck;
      }(_wrapNativeSuper(HTMLElement));

      exports.default = PageTruck;
      (0, _webCell.component)(PageTruck);
    }
  },
  'web-cell': {
    exports: web_cell
  }
};

    return require('./index');
});