webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchInput.js":
/*!***********************************!*\
  !*** ./components/SearchInput.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./components/Icon.js");
var _jsxFileName = "/home/michalhonc/git/reactjs/diplom/frontend/components/SearchInput.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "SearchInput__Input",
  componentId: "sc-1nu51op-0"
})(["width:100%;padding:1.4rem;border-radius:0.4rem;border:1px solid ", ";box-shadow:", ";background-color:", ";"], function (props) {
  return props.theme.color.borderGray;
}, function (props) {
  return props.theme.styled.shadow;
}, function (props) {
  return props.theme.color.white;
});
var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].svg.withConfig({
  displayName: "SearchInput__StyledIcon",
  componentId: "sc-1nu51op-1"
})(["position:absolute;height:75%;margin:auto 0;top:50%;transform:translateY(-50%);right:1rem;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SearchInput__InputWrapper",
  componentId: "sc-1nu51op-2"
})(["position:relative;margin:0 auto;width:50rem;"]);

var SearchInput = function SearchInput() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Input, {
    type: "input",
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    placeholder: "Hledejte..",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    icon: "user",
    el: StyledIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

SearchInput.propTypes = {};
SearchInput.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ })

})
//# sourceMappingURL=index.js.dde54852972f1e146f57.hot-update.js.map