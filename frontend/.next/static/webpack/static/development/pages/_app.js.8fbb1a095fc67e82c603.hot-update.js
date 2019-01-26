webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuContext */ "./components/Menu/MenuContext.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/michalhonc/git/reactjs/diplom/frontend/components/Menu/Menu.js";




var StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Menu__StyledWrapper",
  componentId: "sc-16he39c-0"
})(["position:absolute;z-index:999;border-left:1px solid ", ";width:30rem;height:100vh;right:0;top:0;background-color:", ";"], function (props) {
  return props.theme.color.borderInput;
}, function (props) {
  return props.theme.color.white;
});
var StyledBackground = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Menu__StyledBackground",
  componentId: "sc-16he39c-1"
})(["position:absolute;z-index:999;background-color:rgba(0,0,0,0.5);height:100vh;width:100vw;"]);

var Menu = function Menu(props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_MenuContext__WEBPACK_IMPORTED_MODULE_2__["MenuContext"]),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  var listener = function listener(e) {
    if (!document.getElementById('modal-menu').contains(e.target)) {
      dispatch({
        type: 'close'
      });
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (state.opened === false) {
      return null;
    }

    window.addEventListener('click', listener);
    return function () {
      return window.removeEventListener('click', listener);
    };
  }, [state.opened]);
  if (state.opened === false) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBackground, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledWrapper, {
    id: "modal-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "MENU!!!!!"));
};

Menu.propTypes = {};
Menu.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=_app.js.8fbb1a095fc67e82c603.hot-update.js.map