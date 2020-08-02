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
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    fluid: true,
    className: "main-cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.intro,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, " NICK PAPOIKONOMOU")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }
  }, "WEB DEVELOPER")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.introh3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.typewriter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.typewriterText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "Twinkle, twinkle, little star."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 23
    }
  })))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwidGhlbWUiLCJtb2RlIiwiZ2V0aW5pdGlhbFRoZW1lIiwic2F2ZWRUaGVtZSIsInN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaG9tZXBhZ2UiLCJ1c2VTdGF0ZSIsInNldFRoZW1lIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInN0eWxlcyIsIm1haW4iLCJvcGFjaXR5Iiwicm93IiwiaG9tZSIsImludHJvIiwiaW50cm9oMyIsInR5cGV3cml0ZXIiLCJ0eXBld3JpdGVyVGV4dCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQywyRUFBSCxvQkFFTSxVQUFDQyxLQUFEO0FBQUEsU0FDakJBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxJQUFaLEtBQXFCLE1BQXJCLEdBQThCLFNBQTlCLEdBQTBDLE1BRHpCO0FBQUEsQ0FGTixFQU9OLFVBQUNGLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixNQUFyQixHQUE4QixNQUE5QixHQUF1QyxNQURoQztBQUFBLENBUE0sRUFZTixVQUFDRixLQUFEO0FBQUEsU0FDUEEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosS0FBcUIsTUFBckIsR0FBOEIsTUFBOUIsR0FBdUMsTUFEaEM7QUFBQSxDQVpNLEVBaUJELFVBQUNGLEtBQUQ7QUFBQSxTQUNaQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixNQUFyQixHQUE4QixNQUE5QixHQUF1QyxTQUQzQjtBQUFBLENBakJDLENBQWpCO0tBQU1KLFc7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLGFBQVMsRUFBQyx1QkFGWjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsV0FBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsYUFDUGIsUUFBUSxDQUNOVixLQUFLLENBQUNDLElBQU4sS0FBZSxNQUFmLEdBQ0k7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FESixHQUVJO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BSEUsQ0FERDtBQUFBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZEYsQ0FERixDQURGLENBREYsQ0FKRixFQXVDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0YsQ0FGRixDQURGLENBREYsQ0FERjtBQWtERDs7R0F6RFFPLFE7O0FBMkRNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YjZiOTAyMmQwMzAzYmNjNDljZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tc2VxdWVuY2VzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1jdXJseS1uZXdsaW5lICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdsb2NhbC1zdG9yYWdlLWZhbGxiYWNrJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgeyBlbGFzdGljIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLnRoZW1lLm1vZGUgPT09ICdkYXJrJyA/ICcjMTcxYzI4JyA6ICcjRUVFJ307IFxyXG59ICAgXHJcblxyXG5oMXtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy50aGVtZS5tb2RlID09PSAnZGFyaycgPyAnI0VFRScgOiAnIzExMSd9IWltcG9ydGFudDtcclxufVxyXG5cclxubGkgYXtcclxuICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy50aGVtZS5tb2RlID09PSAnZGFyaycgPyAnI0VFRScgOiAnIzExMSd9IWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpZ2h0e1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMudGhlbWUubW9kZSA9PT0gJ2RhcmsnID8gJyNFRUUnIDogJyMxNzFjMjgnfSFpbXBvcnRhbnQ7XHJcbn1cclxufVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gZ2V0aW5pdGlhbFRoZW1lKCkge1xyXG4gIGNvbnN0IHNhdmVkVGhlbWUgPSBzdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XHJcbiAgcmV0dXJuIHNhdmVkVGhlbWUgPyBKU09OLnBhcnNlKHNhdmVkVGhlbWUpIDogeyBtb2RlOiAnbGlnaHQnIH07XHJcbn1cclxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShnZXRpbml0aWFsVGhlbWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICBzdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkodGhlbWUpKSwgW3RoZW1lXTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm1haW4tY29udFwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IGNsYXNzTmFtZT1cIm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMT4gTklDSyBQQVBPSUtPTk9NT1U8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb2gzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5XRUIgREVWRUxPUEVSPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gY2xhc3NOYW1lPXtzdHlsZXMuaW50cm9oM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR5cGV3cml0ZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR5cGV3cml0ZXJUZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUd2lua2xlLCB0d2lua2xlLCBsaXR0bGUgc3Rhci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGlnaHQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHNoYWRvdy1ub25lIGxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gJ2RhcmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8geyBtb2RlOiAnbGlnaHQnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7IG1vZGU6ICdkYXJrJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdyAvPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==