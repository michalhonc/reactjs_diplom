webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu/MenuContext.js":
/*!****************************************!*\
  !*** ./components/Menu/MenuContext.js ***!
  \****************************************/
/*! exports provided: MenuContext, MenuProvider, MenuConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return MenuContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuProvider", function() { return MenuProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConsumer", function() { return MenuConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/michalhonc/git/reactjs/diplom/frontend/components/Menu/MenuContext.js";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var MenuContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
var initialState = {
  opened: false
};

var reducer = function reducer(state, action) {
  console.log('TCL: reducer -> action', action);
  console.log('TCL: reducer -> state', state);

  switch (action.type) {
    case 'close':
      return initialState;

    case 'open':
      return _objectSpread({}, state, {
        opened: true
      });

    default:
      return initialState;
  }
};

var MenuProvider = function MenuProvider(props) {
  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var value = {
    state: state,
    dispatch: dispatch
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.children);
};

var MenuConsumer = MenuContext.Consumer;


/***/ })

})
//# sourceMappingURL=_app.js.46a078ba8bd0c33538b5.hot-update.js.map