webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! local-storage-fallback */ "./node_modules/local-storage-fallback/lib/index.js");
/* harmony import */ var local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(local_storage_fallback__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/header */ "./components/header.js");


var _jsxFileName = "C:\\Users\\nicko\\Documents\\code\\react-portofolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbody{\n    background-color:", "; \n}   \n\nh1{\n  color: ", "!important;\n}\n\nli a{\n  color: ", "!important;\n}\n\n.light{\n  background: ", "!important;\n}\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable no-sequences */

/* eslint-disable react/jsx-curly-newline */








var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.mode === 'dark' ? '#171c28' : '#EEE';
}, function (props) {
  return props.theme.mode === 'dark' ? '#EEE' : '#111';
}, function (props) {
  return props.theme.mode === 'dark' ? '#EEE' : '#111';
}, function (props) {
  return props.theme.mode === 'dark' ? '#EEE' : '#171c28';
});
_c = GlobalStyle;

function getinitialTheme() {
  var savedTheme = local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : {
    mode: 'light'
  };
}

function homepage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getinitialTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // eslint-disable-next-line no-unused-expressions
    local_storage_fallback__WEBPACK_IMPORTED_MODULE_2___default.a.setItem('theme', JSON.stringify(theme)), [theme];
  });
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.main,
    exit: {
      opacity: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "outer-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["elastic"], {
    pageWrapId: "page-wrap",
    outerContainerId: "outer-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx("main", {
    id: "page-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    className: "main-cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }, " NICK PAPOIKONOMOU")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 27
    }
  }, "WEB DEVELOPER")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.typewriter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.typewriterText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, "Twinkle, twinkle, little star."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, __jsx("button", {
    label: "Light-button",
    className: "btn shadow-none light",
    type: "button",
    onClick: function onClick(e) {
      return setTheme(theme.mode === 'dark' ? {
        mode: 'light'
      } : {
        mode: 'dark'
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 27
    }
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })))))));
}

_s(homepage, "J8QFaRCNegCQAFFIjm6d5ydj9b8=");

/* harmony default export */ __webpack_exports__["default"] = (homepage);

var _c;

$RefreshReg$(_c, "GlobalStyle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJtb2RlIiwiZ2V0aW5pdGlhbFRoZW1lIiwic2F2ZWRUaGVtZSIsInN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaG9tZXBhZ2UiLCJ1c2VTdGF0ZSIsInNldFRoZW1lIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0eWxlcyIsIm1haW4iLCJvcGFjaXR5Iiwicm93IiwiaG9tZSIsImludHJvIiwiaW50cm9oMyIsInR5cGV3cml0ZXIiLCJ0eXBld3JpdGVyVGV4dCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywyRUFBSCxvQkFFTSxVQUFDQyxLQUFEO0FBQUEsU0FDakJBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxJQUFaLEtBQXFCLE1BQXJCLEdBQThCLFNBQTlCLEdBQTBDLE1BRHpCO0FBQUEsQ0FGTixFQU9OLFVBQUNGLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixNQUFyQixHQUE4QixNQUE5QixHQUF1QyxNQURoQztBQUFBLENBUE0sRUFZTixVQUFDRixLQUFEO0FBQUEsU0FDUEEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosS0FBcUIsTUFBckIsR0FBOEIsTUFBOUIsR0FBdUMsTUFEaEM7QUFBQSxDQVpNLEVBaUJELFVBQUNGLEtBQUQ7QUFBQSxTQUNaQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixNQUFyQixHQUE4QixNQUE5QixHQUF1QyxTQUQzQjtBQUFBLENBakJDLENBQWpCO0tBQU1KLFc7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QUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVOLHdEQUFNLENBQUNPLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRVAsd0RBQU0sQ0FBQ1EsY0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixDQURGLENBUEYsRUFjRSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFDLGNBRFI7QUFFRSxhQUFTLEVBQUMsdUJBRlo7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLFdBQU8sRUFBRSxpQkFBQ0MsQ0FBRDtBQUFBLGFBQ1BiLFFBQVEsQ0FDTlYsS0FBSyxDQUFDQyxJQUFOLEtBQWUsTUFBZixHQUNJO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BREosR0FFSTtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUhFLENBREQ7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWRGLENBREYsQ0FERixDQURGLENBSkYsRUF1Q0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNGLENBRkYsQ0FERixDQUZGLENBREYsQ0FERixDQURGO0FBdUREOztHQTlEUU8sUTs7QUFnRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZjNzQ5ODVjMDMyYjBmNzQwNDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWN1cmx5LW5ld2xpbmUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UtZmFsbGJhY2snO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IGVsYXN0aWMgYXMgTWVudSB9IGZyb20gJ3JlYWN0LWJ1cmdlci1tZW51JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMudGhlbWUubW9kZSA9PT0gJ2RhcmsnID8gJyMxNzFjMjgnIDogJyNFRUUnfTsgXHJcbn0gICBcclxuXHJcbmgxe1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnRoZW1lLm1vZGUgPT09ICdkYXJrJyA/ICcjRUVFJyA6ICcjMTExJ30haW1wb3J0YW50O1xyXG59XHJcblxyXG5saSBhe1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnRoZW1lLm1vZGUgPT09ICdkYXJrJyA/ICcjRUVFJyA6ICcjMTExJ30haW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlnaHR7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy50aGVtZS5tb2RlID09PSAnZGFyaycgPyAnI0VFRScgOiAnIzE3MWMyOCd9IWltcG9ydGFudDtcclxufVxyXG59XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBnZXRpbml0aWFsVGhlbWUoKSB7XHJcbiAgY29uc3Qgc2F2ZWRUaGVtZSA9IHN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcclxuICByZXR1cm4gc2F2ZWRUaGVtZSA/IEpTT04ucGFyc2Uoc2F2ZWRUaGVtZSkgOiB7IG1vZGU6ICdsaWdodCcgfTtcclxufVxyXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGdldGluaXRpYWxUaGVtZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSh0aGVtZSkpLCBbdGhlbWVdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gZXhpdD17eyBvcGFjaXR5OiAwIH19PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvdXRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxNZW51IHBhZ2VXcmFwSWQ9XCJwYWdlLXdyYXBcIiBvdXRlckNvbnRhaW5lcklkPVwib3V0ZXItY29udGFpbmVyXCIgLz5cclxuICAgICAgICAgIDxtYWluIGlkPVwicGFnZS13cmFwXCI+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJtYWluLWNvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+IE5JQ0sgUEFQT0lLT05PTU9VPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb2gzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+V0VCIERFVkVMT1BFUjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9oM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBld3JpdGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZXdyaXRlclRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2lua2xlLCB0d2lua2xlLCBsaXR0bGUgc3Rhci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlnaHQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzaGFkb3ctbm9uZSBsaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAnZGFyaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBtb2RlOiAnbGlnaHQnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogeyBtb2RlOiAnZGFyaycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3cgLz5cclxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==