"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wasm-speed-tester",{

/***/ "./components/SortingDemonstration/Sorter.tsx":
/*!****************************************************!*\
  !*** ./components/SortingDemonstration/Sorter.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/WAsmTester.module.css */ \"./styles/WAsmTester.module.css\");\n/* harmony import */ var _styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Sorter = function(param) {\n    var generatedList = param.generatedList, onSortClick = param.onSortClick, sortedListSample = param.sortedListSample;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2___default().subtitle),\n                children: \"2. Sort the List:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2___default().buttonSamplePair),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: generatedList === undefined,\n                        onClick: generatedList === undefined ? function() {} : onSortClick,\n                        children: generatedList === undefined ? sortedListSample === undefined ? \"No List to Sort\" : \"Already Sorted\" : \"Sort\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_2___default().listSample),\n                        children: sortedListSample ? sortedListSample.map(function(val, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    val.toFixed(2),\n                                    \" \",\n                                    index >= sortedListSample.length - 1 ? \"\" : \",\"\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this1);\n                        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: \" \"\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\SortingDemonstration\\\\Sorter.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Sorter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sorter);\nvar _c;\n$RefreshReg$(_c, \"Sorter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvcnRpbmdEZW1vbnN0cmF0aW9uL1NvcnRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1lO0FBRXdDO0FBT3ZELElBQU1FLE1BQU0sR0FBeUMsZ0JBSS9DO1FBSEpDLGFBQWEsU0FBYkEsYUFBYSxFQUNiQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7O0lBRWhCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFFUCwrRUFBYzswQkFBRSxtQkFBaUI7Ozs7O3FCQUFLOzBCQUNyRCw4REFBQ0ssS0FBRztnQkFBQ0UsU0FBUyxFQUFFUCx1RkFBc0I7O2tDQUV0Qyw4REFBQ1UsUUFBTTt3QkFDTEMsUUFBUSxFQUFFVCxhQUFhLEtBQUtVLFNBQVM7d0JBQ3JDQyxPQUFPLEVBQUVYLGFBQWEsS0FBS1UsU0FBUyxHQUFHLFdBQU0sRUFBRSxHQUFHVCxXQUFXO2tDQUU1REQsYUFBYSxLQUFLVSxTQUFTLEdBQ3hCUixnQkFBZ0IsS0FBS1EsU0FBUyxHQUM1QixpQkFBaUIsR0FDakIsZ0JBQWdCLEdBQ2xCLE1BQU07Ozs7OzZCQUNIO2tDQUNULDhEQUFDUCxLQUFHO3dCQUFDRSxTQUFTLEVBQUVQLGlGQUFnQjtrQ0FFN0JJLGdCQUFnQixHQUNmQSxnQkFBZ0IsQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLEdBQVcsRUFBRUMsS0FBYSxFQUFLOzRCQUNuRCxxQkFDRSw4REFBQ0MsTUFBSTs7b0NBQ0ZGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztvQ0FBRSxHQUFHO29DQUNuQkYsS0FBSyxJQUFJYixnQkFBZ0IsQ0FBQ2dCLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEdBQUc7OytCQUZ2Q0gsS0FBSzs7OztzQ0FHVCxDQUNQO3lCQUNILENBQUMsaUJBRUY7c0NBQUUsR0FBQzt5Q0FBRzs7Ozs7NkJBRUo7Ozs7OztxQkFDQTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBdENLaEIsS0FBQUEsTUFBTTtBQXVDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU29ydGluZ0RlbW9uc3RyYXRpb24vU29ydGVyLnRzeD8zOGM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VDb250ZXh0LFxyXG4gIHVzZUNhbGxiYWNrLFxyXG4gIHVzZVJlZixcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSnNBbmRDQXJyYXkgfSBmcm9tIFwiLi4vLi4vbGliL2FycmF5R2VuZXJhdG9ycy9BcnJheUdlbmVyYXRvclwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1dBc21UZXN0ZXIubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgU29ydGVyUHJvcHMge1xyXG4gIGdlbmVyYXRlZExpc3Q6IEpzQW5kQ0FycmF5IHwgdW5kZWZpbmVkO1xyXG4gIG9uU29ydENsaWNrOiAoKSA9PiB2b2lkO1xyXG4gIHNvcnRlZExpc3RTYW1wbGU6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xyXG59XHJcbmNvbnN0IFNvcnRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8U29ydGVyUHJvcHM+ID0gKHtcclxuICBnZW5lcmF0ZWRMaXN0LFxyXG4gIG9uU29ydENsaWNrLFxyXG4gIHNvcnRlZExpc3RTYW1wbGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc3VidGl0bGV9PjIuIFNvcnQgdGhlIExpc3Q6PC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvblNhbXBsZVBhaXJ9PlxyXG5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGRpc2FibGVkPXtnZW5lcmF0ZWRMaXN0ID09PSB1bmRlZmluZWR9XHJcbiAgICAgICAgb25DbGljaz17Z2VuZXJhdGVkTGlzdCA9PT0gdW5kZWZpbmVkID8gKCkgPT4ge30gOiBvblNvcnRDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIHtnZW5lcmF0ZWRMaXN0ID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc29ydGVkTGlzdFNhbXBsZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gXCJObyBMaXN0IHRvIFNvcnRcIlxyXG4gICAgICAgICAgICA6IFwiQWxyZWFkeSBTb3J0ZWRcIlxyXG4gICAgICAgICAgOiBcIlNvcnRcIn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5saXN0U2FtcGxlfT5cclxuXHJcbiAgICAgICAge3NvcnRlZExpc3RTYW1wbGUgPyAoXHJcbiAgICAgICAgICBzb3J0ZWRMaXN0U2FtcGxlLm1hcCgodmFsOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIHt2YWwudG9GaXhlZCgyKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggPj0gc29ydGVkTGlzdFNhbXBsZS5sZW5ndGggLSAxID8gXCJcIiA6IFwiLFwifVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+IDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNvcnRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGUiLCJTb3J0ZXIiLCJnZW5lcmF0ZWRMaXN0Iiwib25Tb3J0Q2xpY2siLCJzb3J0ZWRMaXN0U2FtcGxlIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJzdWJ0aXRsZSIsImJ1dHRvblNhbXBsZVBhaXIiLCJidXR0b24iLCJkaXNhYmxlZCIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJsaXN0U2FtcGxlIiwibWFwIiwidmFsIiwiaW5kZXgiLCJzcGFuIiwidG9GaXhlZCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SortingDemonstration/Sorter.tsx\n");

/***/ })

});