webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Nav.js":
/*!**********************************!*\
  !*** ./components/Header/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Icon */ "./components/Shared/Icon.js");
/* harmony import */ var _Menu_MenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu/MenuContext */ "./components/Menu/MenuContext.js");
var _jsxFileName = "/home/michalhonc/git/reactjs/diplom/frontend/components/Header/Nav.js";





var NavStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "Nav__NavStyled",
  componentId: "pb472o-0"
})(["display:flex;justify-content:center;align-items:center;font-size:2rem;line-height:2;font-weight:bold;text-transform:uppercase;a{color:", ";}"], function (props) {
  return props.theme.color.white;
});
var MenuStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].svg.withConfig({
  displayName: "Nav__MenuStyled",
  componentId: "pb472o-1"
})(["height:3.2rem;width:3.2rem;fill:", ";"], function (props) {
  return props.theme.color.white;
});

var Nav = function Nav() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_Menu_MenuContext__WEBPACK_IMPORTED_MODULE_4__["MenuContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return dispatch({
        type: 'open'
      });
    },
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "menu",
    el: MenuStyled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.c3565d12f7b75fc4e4b5.hot-update.js.map