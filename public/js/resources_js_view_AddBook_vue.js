"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_view_AddBook_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_tour_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tour_service */ "./resources/js/services/tour_service.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book_service */ "./resources/js/services/book_service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'book',
  data: function data() {
    return {
      dates: [{
        date: ""
      }],
      tourData: {
        name: '',
        status: 0,
        itinerary: ''
      },
      bookData: {
        date: '',
        tourID: ''
      },
      passenger: [{
        passenger: {
          birth_date: '',
          email: '',
          given_name: '',
          id: '',
          mobile: '',
          passport: '',
          status: '',
          surname: ''
        },
        special_request: ''
      }],
      errors: {},
      success: 0
    };
  },
  mounted: function mounted() {
    this.loadBook();
  },
  methods: {
    forceRerender: function forceRerender() {
      var _this = this;

      // Remove my-component from the DOM
      this.renderComponent = false;
      this.$nextTick(function () {
        // Add the component back in
        _this.renderComponent = true;
      });
    },
    addPassenger: function addPassenger() {
      this.passenger.push({
        passenger: {
          birth_date: '',
          email: '',
          given_name: '',
          id: '',
          mobile: '',
          passport: '',
          status: '',
          surname: ''
        },
        special_request: ''
      });
    },
    removePassenger: function removePassenger(index) {
      this.passenger.splice(index, 1);
    },
    loadBook: function () {
      var _loadBook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, responseTour, _response;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!this.$route.params.bookid) {
                  _context.next = 15;
                  break;
                }

                _context.next = 4;
                return _services_book_service__WEBPACK_IMPORTED_MODULE_1__.loadBook(this.$route.params.bookid);

              case 4:
                response = _context.sent;
                this.bookData.date = response.data.tour_date;
                this.bookData.status = response.data.status;
                this.passenger = JSON.parse(response.data.passengers);
                _context.next = 10;
                return _services_tour_service__WEBPACK_IMPORTED_MODULE_0__.loadTour(response.data.tour_id);

              case 10:
                responseTour = _context.sent;
                this.tourData = responseTour.data;
                this.dates = JSON.parse(responseTour.data.tourdates);
                _context.next = 22;
                break;

              case 15:
                this.bookData = [{
                  name: '',
                  status: 0,
                  itinerary: ''
                }];
                this.passenger = [{
                  passenger: {
                    birth_date: '',
                    email: '',
                    given_name: '',
                    id: '',
                    mobile: '',
                    passport: '',
                    status: '',
                    surname: ''
                  },
                  special_request: ''
                }];
                _context.next = 19;
                return _services_tour_service__WEBPACK_IMPORTED_MODULE_0__.loadTour(this.$route.params.id);

              case 19:
                _response = _context.sent;
                this.tourData = _response.data;
                this.dates = JSON.parse(_response.data.tourdates);

              case 22:
                _context.next = 28;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](0);
                alert('Error');
                console.log(_context.t0);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 24]]);
      }));

      function loadBook() {
        return _loadBook.apply(this, arguments);
      }

      return loadBook;
    }(),
    createUpdateBook: function () {
      var _createUpdateBook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var formData, response, _response2;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.append('date', this.bookData.date);
                formData.append('tour_id', this.tourData.id);
                formData.append('passengers', JSON.stringify(this.passenger));
                this.errors = [];
                this.success = 0;
                _context2.prev = 6;

                if (!this.$route.params.bookid) {
                  _context2.next = 15;
                  break;
                }

                formData.append('_method', 'put');
                formData.append('status', this.bookData.status);
                _context2.next = 12;
                return _services_book_service__WEBPACK_IMPORTED_MODULE_1__.updateBook(formData, this.$route.params.bookid);

              case 12:
                response = _context2.sent;
                _context2.next = 18;
                break;

              case 15:
                _context2.next = 17;
                return _services_book_service__WEBPACK_IMPORTED_MODULE_1__.createBook(formData);

              case 17:
                _response2 = _context2.sent;

              case 18:
                this.success = 200;
                _context2.next = 31;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](6);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 26 : 28;
                break;

              case 26:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 31);

              case 28:
                alert('Error');
                console.log(_context2.t0);
                return _context2.abrupt("break", 31);

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 21]]);
      }));

      function createUpdateBook() {
        return _createUpdateBook.apply(this, arguments);
      }

      return createUpdateBook;
    }(),
    toInvoice: function toInvoice() {
      this.$router.push({
        name: 'invoice',
        params: {
          id: this.$route.params.bookid
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/services/book_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/book_service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBook": () => (/* binding */ createBook),
/* harmony export */   "loadBook": () => (/* binding */ loadBook),
/* harmony export */   "loadBooks": () => (/* binding */ loadBooks),
/* harmony export */   "updateBook": () => (/* binding */ updateBook),
/* harmony export */   "updateCreateTour": () => (/* binding */ updateCreateTour)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createBook(data) {
  console.log(data['name']);
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.httpFile)().post('/book', data);
}
function loadBooks() {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.httpFile)().get('/book');
}
function loadBook(id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.httpFile)().get('/book/' + id);
}
function updateBook(data, id) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.httpFile)().post('/book/' + id, data);
}
function updateCreateTour(data) {
  return (0,_http_service__WEBPACK_IMPORTED_MODULE_0__.httpFile)().post('/invoice', data);
}

/***/ }),

/***/ "./resources/js/view/AddBook.vue":
/*!***************************************!*\
  !*** ./resources/js/view/AddBook.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBook.vue?vue&type=template&id=7f52111e& */ "./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e&");
/* harmony import */ var _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBook.vue?vue&type=script&lang=js& */ "./resources/js/view/AddBook.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/view/AddBook.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/view/AddBook.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/view/AddBook.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e&":
/*!**********************************************************************!*\
  !*** ./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBook_vue_vue_type_template_id_7f52111e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddBook.vue?vue&type=template&id=7f52111e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/view/AddBook.vue?vue&type=template&id=7f52111e& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _vm.success === 200
      ? _c(
          "div",
          { staticClass: "alert alert-success", attrs: { role: "alert" } },
          [_vm._v("\n\t\tSuccess\n\t")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h1", { staticClass: "mb-5" }, [
      _vm._v("\n\t\tBook "),
      _c("span", [_vm._v(_vm._s(this.tourData.name))]),
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("Itinerany:")]),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s(this.tourData.itinerary))]),
    _vm._v(" "),
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.createUpdateBook.apply(null, arguments)
          },
        },
      },
      [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.bookData.date,
                expression: "bookData.date",
              },
            ],
            staticClass: "form-control",
            attrs: { id: "status" },
            on: {
              change: function ($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function (o) {
                    return o.selected
                  })
                  .map(function (o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.bookData,
                  "date",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              },
            },
          },
          _vm._l(_vm.dates, function (input, index) {
            return input.status != 0
              ? _c("option", { key: "dates-" + index }, [
                  _vm._v("\n\t\t  \t\t" + _vm._s(input.date) + "\n\t\t  \t"),
                ])
              : _vm._e()
          }),
          0
        ),
        _vm._v(" "),
        _vm.errors.status
          ? _c(
              "div",
              { staticClass: "alert alert-danger", attrs: { role: "alert" } },
              [_vm._v("\n\t\t\t  " + _vm._s(_vm.errors.date[0]) + "\n\t\t\t")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.$route.params.bookid
          ? _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.bookData.status,
                    expression: "bookData.status",
                  },
                ],
                staticClass: "form-control mt-3",
                attrs: { id: "status" },
                on: {
                  change: function ($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function (o) {
                        return o.selected
                      })
                      .map(function (o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.bookData,
                      "status",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  },
                },
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("Submitted")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "1" } }, [_vm._v("Confirmed")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [_vm._v("Cancelled")]),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "my-4" },
          [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info float-right",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.addPassenger.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Add Passenger")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success float-right mr-4",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.toInvoice.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("Invoice")]
              ),
            ]),
            _vm._v(" "),
            _vm._l(_vm.passenger, function (input, index) {
              return _c(
                "div",
                { key: "dates-" + index, staticClass: "form-group" },
                [
                  _c("div", { staticClass: "card text-bg-light mb-3" }, [
                    _c("div", { staticClass: "card-header" }, [
                      _c("h5", [
                        input.id
                          ? _c("span", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: input.passenger.status,
                                    expression: "input.passenger.status",
                                  },
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: input.passenger.id,
                                  "true-value": "1",
                                  "false-value": "0",
                                },
                                domProps: {
                                  checked: Array.isArray(input.passenger.status)
                                    ? _vm._i(input.passenger.status, null) > -1
                                    : _vm._q(input.passenger.status, "1"),
                                },
                                on: {
                                  change: function ($event) {
                                    var $$a = input.passenger.status,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? "1" : "0"
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            input.passenger,
                                            "status",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            input.passenger,
                                            "status",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(input.passenger, "status", $$c)
                                    }
                                  },
                                },
                              }),
                            ])
                          : _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger float-right",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.removePassenger.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Remove")]
                              ),
                            ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(
                            "\n\t\t\t    \t\t\t  \tPassenger " +
                              _vm._s(index + 1) +
                              " \n\t\t\t    \t\t\t  "
                          ),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Given Name"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.passenger.given_name,
                                  expression: "input.passenger.given_name",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "name" },
                              domProps: { value: input.passenger.given_name },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input.passenger,
                                    "given_name",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col" }, [
                          _c("label", { attrs: { for: "surname" } }, [
                            _vm._v("Surname"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.passenger.surname,
                                expression: "input.passenger.surname",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "surname" },
                            domProps: { value: input.passenger.surname },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  input.passenger,
                                  "surname",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "email" } }, [
                              _vm._v("Email"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.passenger.email,
                                  expression: "input.passenger.email",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "email" },
                              domProps: { value: input.passenger.email },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input.passenger,
                                    "email",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col" }, [
                          _c("label", { attrs: { for: "mobile" } }, [
                            _vm._v("Mobile"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.passenger.mobile,
                                expression: "input.passenger.mobile",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "mobile" },
                            domProps: { value: input.passenger.mobile },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  input.passenger,
                                  "mobile",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "passport" } }, [
                              _vm._v("Passport"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.passenger.passport,
                                  expression: "input.passenger.passport",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "passport" },
                              domProps: { value: input.passenger.passport },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input.passenger,
                                    "passport",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col" }, [
                          _c("label", { attrs: { for: "bday" } }, [
                            _vm._v("Date of Birth"),
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.passenger.birth_date,
                                expression: "input.passenger.birth_date",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "bday" },
                            domProps: { value: input.passenger.birth_date },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  input.passenger,
                                  "birth_date",
                                  $event.target.value
                                )
                              },
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "passport" } }, [
                              _vm._v("Special Request"),
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.special_request,
                                  expression: "input.special_request",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { id: "passport" },
                              domProps: { value: input.special_request },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    input,
                                    "special_request",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              )
            }),
          ],
          2
        ),
        _vm._v(" "),
        _vm.$route.params.bookid
          ? _c(
              "button",
              { staticClass: " btn btn-success", attrs: { type: "submit" } },
              [_vm._v("Update")]
            )
          : _c(
              "button",
              { staticClass: " btn btn-success", attrs: { type: "submit" } },
              [_vm._v("Book")]
            ),
        _vm._v(" "),
        _c("router-link", { attrs: { to: "/bookings" } }, [
          _c("button", { staticClass: "btn btn-secondary float-right" }, [
            _vm._v("Back"),
          ]),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "tour-date" } }, [
      _c("h3", [_vm._v("Passengers:")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);