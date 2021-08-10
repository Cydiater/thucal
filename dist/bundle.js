/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IcsMaintainter)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);





function formatDate(date) {
  var year = date.getFullYear(),
      month = (date.getMonth() + 101).toString().slice(-2),
      day = (date.getDate() + 100).toString().slice(-2),
      hour = (date.getHours() + 100).toString().slice(-2),
      minute = (date.getMinutes() + 100).toString().slice(-2);
  return "".concat(year).concat(month).concat(day, "T").concat(hour).concat(minute, "00");
}

var IcsMaintainter = /*#__PURE__*/function () {
  function IcsMaintainter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, IcsMaintainter);

    this._content = "";
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(IcsMaintainter, [{
    key: "add_event",
    value: function add_event(event) {
      var icsStartTime = formatDate(event.startTime),
          icsEndTime = formatDate(event.endTime);
      this._content += ["BEGIN:VEVENT", "SUMMARY:".concat(event.summary), "DTSTART;VALUE=DATE-TIME:".concat(icsStartTime), "DTEND;VALUE=DATE-TIME:".concat(icsEndTime), "LOCATION:".concat(event.location), "UID:".concat(icsStartTime), "END:VEVENT"].join('\n');
      this._content += '\n';
    }
  }, {
    key: "toString",
    value: function toString() {
      return 'BEGIN:VCALENDAR\n' + this._content + 'END:VCALENDAR';
    }
  }]);

  return IcsMaintainter;
}();


;

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCookie": () => (/* binding */ fetchCookie)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(puppeteer__WEBPACK_IMPORTED_MODULE_2__);




function fetchCookie(_x) {
  return _fetchCookie.apply(this, arguments);
}

function _fetchCookie() {
  _fetchCookie = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(crendential) {
    var browser, page, cookies;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return puppeteer__WEBPACK_IMPORTED_MODULE_2___default().launch();

          case 2:
            browser = _context.sent;
            _context.next = 5;
            return browser.newPage();

          case 5:
            page = _context.sent;
            _context.next = 8;
            return page["goto"]('http://info.tsinghua.edu.cn');

          case 8:
            _context.next = 10;
            return page.focus('#userName');

          case 10:
            _context.next = 12;
            return page.keyboard.type(crendential.username);

          case 12:
            _context.next = 14;
            return page.focus('input[name="password"]');

          case 14:
            _context.next = 16;
            return page.keyboard.type(crendential.password);

          case 16:
            _context.next = 18;
            return page.click('input[src="initial/all/images/t_09.gif"]');

          case 18:
            _context.next = 20;
            return new Promise(function (r) {
              return setTimeout(r, 3000);
            });

          case 20:
            _context.next = 22;
            return page["goto"]('https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do');

          case 22:
            _context.next = 24;
            return page.cookies();

          case 24:
            cookies = _context.sent;
            _context.next = 27;
            return browser.close();

          case 27:
            return _context.abrupt("return", cookies[0].name + "=" + cookies[0].value);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchCookie.apply(this, arguments);
}



/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("puppeteer");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("yargs");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("axios");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IcsMaintainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _agent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);





function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var argv = yargs__WEBPACK_IMPORTED_MODULE_4___default()(process.argv).option('output', {
  alias: 'o',
  type: 'string',
  demandOption: true
}).argv;
var base_url = 'https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do';
var filename = argv.o;

function formatDate(date) {
  var year = date.getFullYear(),
      month = (date.getMonth() + 101).toString().slice(-2),
      day = (date.getDate() + 100).toString().slice(-2);
  return "".concat(year).concat(month).concat(day);
}

function fetchCalendarJson(_x, _x2, _x3) {
  return _fetchCalendarJson.apply(this, arguments);
}

function _fetchCalendarJson() {
  _fetchCalendarJson = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(startDate, endDate, cookie) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_6___default().get(base_url, {
              headers: {
                Cookie: cookie
              },
              params: {
                p_start_date: formatDate(startDate),
                p_end_date: formatDate(endDate),
                m: 'bks_jxrl_all',
                jsoncallback: 'no_such_method'
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response.data.slice(15, -1));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchCalendarJson.apply(this, arguments);
}

_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
  var today, one_year_later, credential, cookie, maintainer, day, startDate, endDate, json, courseArrayByDay, _iterator, _step, coursesOfDay;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          today = new Date(), one_year_later = new Date();
          one_year_later.setFullYear(today.getFullYear() + 1);
          credential = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_5___default().readFileSync('credential.json'));
          _context.next = 5;
          return (0,_agent_js__WEBPACK_IMPORTED_MODULE_3__.fetchCookie)(credential);

        case 5:
          cookie = _context.sent;
          maintainer = new _IcsMaintainer__WEBPACK_IMPORTED_MODULE_2__.default();
          day = today;

        case 8:
          if (!(day <= one_year_later)) {
            _context.next = 21;
            break;
          }

          startDate = day, endDate = new Date(startDate);
          endDate.setDate(endDate.getDate() + 24);
          if (one_year_later < endDate) endDate = one_year_later;
          _context.next = 14;
          return fetchCalendarJson(startDate, endDate, cookie);

        case 14:
          json = _context.sent;
          courseArrayByDay = JSON.parse(json);
          _iterator = _createForOfIteratorHelper(courseArrayByDay);

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              coursesOfDay = _step.value;
              console.log(coursesOfDay['nq'] + ' - ' + coursesOfDay['nr']);
              maintainer.add_event({
                summary: coursesOfDay['nr'],
                startTime: new Date(coursesOfDay['nq'] + 'T' + coursesOfDay['kssj']),
                endTime: new Date(coursesOfDay['nq'] + 'T' + coursesOfDay['jssj']),
                location: coursesOfDay['dd']
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

        case 18:
          day.setDate(day.getDate() + 25);
          _context.next = 8;
          break;

        case 21:
          fs__WEBPACK_IMPORTED_MODULE_5___default().writeFile(filename, maintainer.toString(), function () {
            console.log("done");
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
})();

/******/ })()
;