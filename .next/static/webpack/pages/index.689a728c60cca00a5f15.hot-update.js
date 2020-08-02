webpackHotUpdate_N_E("pages/index",{

/***/ "./components/mobileNavbar.js":
/*!************************************!*\
  !*** ./components/mobileNavbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Users\\nicko\\Documents\\code\\react-portofolio\\components\\mobileNavbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MobileNavbar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MobileNavbar, _React$Component);

  var _super = _createSuper(MobileNavbar);

  function MobileNavbar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileNavbar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileNavbar, [{
    key: "showSettings",
    value: function showSettings(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["stack"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, __jsx("a", {
        id: "home",
        className: "menu-item",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, "Home"), __jsx("a", {
        id: "about",
        className: "menu-item",
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }
      }, "About"), __jsx("a", {
        id: "contact",
        className: "menu-item",
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }
      }, "Contact"), __jsx("a", {
        onClick: this.showSettings,
        className: "menu-item--small",
        href: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }
      }, "Settings"));
    }
  }]);

  return MobileNavbar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MobileNavbar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2JpbGVOYXZiYXIuanMiXSwibmFtZXMiOlsiTW9iaWxlTmF2YmFyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dTZXR0aW5ncyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7aUNBQ1NDLEssRUFBTztBQUNsQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0Q7Ozs2QkFFUTtBQUNQO0FBQ0EsYUFDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFVBQUUsRUFBQyxNQUFOO0FBQWEsaUJBQVMsRUFBQyxXQUF2QjtBQUFtQyxZQUFJLEVBQUMsR0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUlFO0FBQUcsVUFBRSxFQUFDLE9BQU47QUFBYyxpQkFBUyxFQUFDLFdBQXhCO0FBQW9DLFlBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBT0U7QUFBRyxVQUFFLEVBQUMsU0FBTjtBQUFnQixpQkFBUyxFQUFDLFdBQTFCO0FBQXNDLFlBQUksRUFBQyxVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLEVBVUU7QUFBRyxlQUFPLEVBQUUsS0FBS0MsWUFBakI7QUFBK0IsaUJBQVMsRUFBQyxrQkFBekM7QUFBNEQsWUFBSSxFQUFDLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsQ0FERjtBQWdCRDs7OztFQXZCd0JDLDRDQUFLLENBQUNDLFM7O0FBMEJsQkwsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjg5YTcyOGM2MGNjYTAwYTVmMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0YWNrIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBNb2JpbGVOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHNob3dTZXR0aW5ncyhldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIE5PVEU6IFlvdSBhbHNvIG5lZWQgdG8gcHJvdmlkZSBzdHlsZXMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbmVnb21pL3JlYWN0LWJ1cmdlci1tZW51I3N0eWxpbmdcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNZW51PlxyXG4gICAgICAgIDxhIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICBIb21lXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICBBYm91dFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgb25DbGljaz17dGhpcy5zaG93U2V0dGluZ3N9IGNsYXNzTmFtZT1cIm1lbnUtaXRlbS0tc21hbGxcIiBocmVmPVwiXCI+XHJcbiAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==