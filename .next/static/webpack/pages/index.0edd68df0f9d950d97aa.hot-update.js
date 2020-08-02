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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./components/header.js");


var _jsxFileName = "C:\\Users\\nicko\\Documents\\code\\react-portofolio\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbody{\n    background-color:", "; \n}   \n\nh1{\n  color: ", "!important;\n}\n\nli a{\n  color: ", "!important;\n}\n\n.light{\n  background: ", "!important;\n}\n}\n.hamburger-inner,.hamburger-inner::before,.hamburger-inner::after{\n  background: ", "!important;\n}\n"]);

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
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.main,
    exit: {
      opacity: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    fluid: true,
    className: "main-cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 12,
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, " NICK PAPOIKONOMOU")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, "WEB DEVELOPER")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.typewriter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.typewriterText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, "Twinkle, twinkle, little star."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
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
      columnNumber: 23
    }
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJtb2RlIiwiZ2V0aW5pdGlhbFRoZW1lIiwic2F2ZWRUaGVtZSIsInN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaG9tZXBhZ2UiLCJ1c2VTdGF0ZSIsInNldFRoZW1lIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0eWxlcyIsIm1haW4iLCJvcGFjaXR5Iiwicm93IiwiaG9tZSIsImludHJvIiwiaW50cm9oMyIsInR5cGV3cml0ZXIiLCJ0eXBld3JpdGVyVGV4dCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG9CQUVNLFVBQUNDLEtBQUQ7QUFBQSxTQUNqQkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosS0FBcUIsTUFBckIsR0FBOEIsU0FBOUIsR0FBMEMsTUFEekI7QUFBQSxDQUZOLEVBT04sVUFBQ0YsS0FBRDtBQUFBLFNBQ1BBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxJQUFaLEtBQXFCLE1BQXJCLEdBQThCLE1BQTlCLEdBQXVDLE1BRGhDO0FBQUEsQ0FQTSxFQVlOLFVBQUNGLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixNQUFyQixHQUE4QixNQUE5QixHQUF1QyxNQURoQztBQUFBLENBWk0sRUFpQkQsVUFBQ0YsS0FBRDtBQUFBLFNBQ1pBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxJQUFaLEtBQXFCLE1BQXJCLEdBQThCLE1BQTlCLEdBQXVDLFNBRDNCO0FBQUEsQ0FqQkMsRUFzQkQsVUFBQ0YsS0FBRDtBQUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBREYsQ0FERixDQVBGLEVBY0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBQyxjQURSO0FBRUUsYUFBUyxFQUFDLHVCQUZaO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxXQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUNQYixRQUFRLENBQ05WLEtBQUssQ0FBQ0MsSUFBTixLQUFlLE1BQWYsR0FDSTtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQURKLEdBRUk7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FIRSxDQUREO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FkRixDQURGLENBREYsQ0FERixDQUpGLEVBdUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDRixDQUZGLENBREYsQ0FERixDQURGO0FBa0REOztHQXpEUU8sUTs7QUEyRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlZGQ2OGRmMGY5ZDk1MGQ5N2FhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1zZXF1ZW5jZXMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LWN1cmx5LW5ld2xpbmUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ2xvY2FsLXN0b3JhZ2UtZmFsbGJhY2snO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLnRoZW1lLm1vZGUgPT09ICdkYXJrJyA/ICcjMTcxYzI4JyA6ICcjRUVFJ307IFxyXG59ICAgXHJcblxyXG5oMXtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy50aGVtZS5tb2RlID09PSAnZGFyaycgPyAnI0VFRScgOiAnIzExMSd9IWltcG9ydGFudDtcclxufVxyXG5cclxubGkgYXtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy50aGVtZS5tb2RlID09PSAnZGFyaycgPyAnI0VFRScgOiAnIzExMSd9IWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpZ2h0e1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudGhlbWUubW9kZSA9PT0gJ2RhcmsnID8gJyNFRUUnIDogJyMxNzFjMjgnfSFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG4uaGFtYnVyZ2VyLWlubmVyLC5oYW1idXJnZXItaW5uZXI6OmJlZm9yZSwuaGFtYnVyZ2VyLWlubmVyOjphZnRlcntcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgIHByb3BzLnRoZW1lLm1vZGUgPT09ICdkYXJrJyA/ICcjRUVFJyA6ICcjMTcxYzI4J30haW1wb3J0YW50O1xyXG59XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBnZXRpbml0aWFsVGhlbWUoKSB7XHJcbiAgY29uc3Qgc2F2ZWRUaGVtZSA9IHN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcclxuICByZXR1cm4gc2F2ZWRUaGVtZSA/IEpTT04ucGFyc2Uoc2F2ZWRUaGVtZSkgOiB7IG1vZGU6ICdsaWdodCcgfTtcclxufVxyXG5mdW5jdGlvbiBob21lcGFnZSgpIHtcclxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKGdldGluaXRpYWxUaGVtZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuICAgIHN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSh0aGVtZSkpLCBbdGhlbWVdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0gZXhpdD17eyBvcGFjaXR5OiAwIH19PlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWFpbi1jb250XCI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmludHJvfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgxPiBOSUNLIFBBUE9JS09OT01PVTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT17c3R5bGVzLmludHJvaDN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPldFQiBERVZFTE9QRVI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb2gzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZXdyaXRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZXdyaXRlclRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFR3aW5rbGUsIHR3aW5rbGUsIGxpdHRsZSBzdGFyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMaWdodC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gc2hhZG93LW5vbmUgbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAnZGFyaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7IG1vZGU6ICdsaWdodCcgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHsgbW9kZTogJ2RhcmsnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Um93IC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9