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

/***/ "./components/Misc/Table.tsx":
/*!***********************************!*\
  !*** ./components/Misc/Table.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ \"./node_modules/next/dist/compiled/assert/assert.js\");\n/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/ObjectKeys */ \"./lib/ObjectKeys.ts\");\n/* harmony import */ var _styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/WAsmTester.module.css */ \"./styles/WAsmTester.module.css\");\n/* harmony import */ var _styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Table = function(param) {\n    var data = param.data, numRows = param.numRows, minRows = param.minRows, emptyDataDict = param.emptyDataDict;\n    var _this1 = _this;\n    var dictToMatrixRemoveKeys = function dictToMatrixRemoveKeys(dict) {\n        return (0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(dict).map(function(key) {\n            return dict[key];\n        });\n    };\n    var colOrientedToRowOriented = function colOrientedToRowOriented(cols) {\n        var rowOriented = [];\n        cols.forEach(function(col) {\n            col.forEach(function(value, index) {\n                if (rowOriented[index] === undefined) {\n                    rowOriented[index] = [];\n                }\n                rowOriented[index].push(value);\n            });\n        });\n        return rowOriented;\n    };\n    _s();\n    if (numRows < minRows) {\n        numRows = minRows;\n    }\n    if (!minRows) {\n        assert__WEBPACK_IMPORTED_MODULE_1___default()(emptyDataDict !== undefined);\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), emptyData = ref[0], setEmptyData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), header = ref1[0], setHeader = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), dataToUse = ref2[0], setDataToUse = ref2[1];\n    //setup emptyData and headers if data is undefined\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(emptyDataDict);\n        if (!data && !header && emptyDataDict) {\n            setHeader((0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(emptyDataDict));\n            setEmptyData((0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(emptyDataDict).map(function(key) {\n                return emptyDataDict[key];\n            }));\n        }\n    }, [\n        data,\n        header,\n        emptyDataDict\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!data) return;\n        setHeader((0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(data));\n    }, [\n        data,\n        emptyData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (data && data[(0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(data)[0]].length >= numRows - 1) {\n            var rowOrientedData = colOrientedToRowOriented(dictToMatrixRemoveKeys(data));\n            setDataToUse(rowOrientedData);\n        } else if (!data && emptyData) {\n            //fill with emptyData for numRows\n            var rowOrientedData1 = [];\n            for(var i = 0; i < numRows; i++){\n                rowOrientedData1.push(emptyData);\n            }\n            setDataToUse(rowOrientedData1);\n        } else if (data) {\n            assert__WEBPACK_IMPORTED_MODULE_1___default()(emptyData);\n            var dataLength = data[(0,_lib_ObjectKeys__WEBPACK_IMPORTED_MODULE_3__.objectKeys)(data)[0]].length;\n            //combination of provided and empty data, for numRows at least\n            var rowOrientedData2 = colOrientedToRowOriented(dictToMatrixRemoveKeys(data));\n            assert__WEBPACK_IMPORTED_MODULE_1___default()(rowOrientedData2.length === dataLength);\n            for(var i1 = rowOrientedData2.length; i1 < numRows; i1++){\n                rowOrientedData2.push(emptyData);\n            }\n            setDataToUse(rowOrientedData2);\n        }\n    }, [\n        data,\n        emptyData,\n        numRows\n    ]);\n    console.log(dataToUse);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: (_styles_WAsmTester_module_css__WEBPACK_IMPORTED_MODULE_4___default().table),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        colSpan: 4,\n                        children: \"List Data\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                        colSpan: 5,\n                        children: \"Sorting Runtimes (ms)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, _this),\n            header && dataToUse ? dataToUse.map(function(row, rowInd) {\n                if (rowInd === 0) {\n                    var _this3 = _this1;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: header.map(function(colName) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: colName\n                                    }, colName, false, {\n                                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 21\n                                    }, _this3);\n                                })\n                            }, \"header\", false, {\n                                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: row.map(function(val) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: val\n                                    }, JSON.stringify(val), false, {\n                                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 21\n                                    }, _this3);\n                                })\n                            }, row[0] + row[2] + rowInd, false, {\n                                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, void 0, true);\n                } else {\n                    var _this2 = _this1;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: row.map(function(val) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: val\n                            }, JSON.stringify(val), false, {\n                                fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 19\n                            }, _this2);\n                        })\n                    }, row[0] + row[2] + rowInd, false, {\n                        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 15\n                    }, _this1);\n                }\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \" \"\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\Table.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, _this);\n};\n_s(Table, \"utIllDFH78eO/ry3mqD3a/my4Ps=\");\n_c = Table;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsU0FBQ2dDLEdBQUc7aURBQ1gsOERBQUNDLElBQUU7MENBQTRCRCxHQUFHOytCQUF6QkUsSUFBSSxDQUFDQyxTQUFTLENBQUNILEdBQUcsQ0FBQzs7OztzQ0FBWTt5QkFDekMsQ0FBQzt1QkFIS0osR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdDLE1BQU07Ozs7OEJBSTVCLENBQ0w7aUJBQ0g7YUFDRixDQUFDLGlCQUVGOzBCQUFFLEdBQUM7NkJBQUc7Ozs7OzthQUVGLENBQ1I7Q0FDSDtHQWpIS3BDLEtBQUs7QUFBTEEsS0FBQUEsS0FBSztBQWtIWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWlzYy9UYWJsZS50c3g/MjEyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlQ2FsbGJhY2ssXHJcbiAgdXNlUmVmLFxyXG4gIFJlYWN0Tm9kZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb2JqZWN0S2V5cyB9IGZyb20gXCIuLi8uLi9saWIvT2JqZWN0S2V5c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9XQXNtVGVzdGVyLm1vZHVsZS5jc3MnO1xyXG50eXBlIFJvdyA9IHN0cmluZ1tdO1xyXG50eXBlIENvbCA9IHN0cmluZ1tdO1xyXG50eXBlIFRhYmxlRGljdCA9IFJlY29yZDxzdHJpbmcsIENvbD47XHJcbnR5cGUgVGFibGVEYXRhID0gUm93W107XHJcblxyXG5pbnRlcmZhY2UgVGFibGVQcm9wcyB7XHJcbiAgZGF0YTogVGFibGVEaWN0IHwgdW5kZWZpbmVkO1xyXG4gIG51bVJvd3M6IG51bWJlcjtcclxuICBlbXB0eURhdGFEaWN0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIG1pblJvd3M6IG51bWJlcjtcclxufVxyXG5jb25zdCBUYWJsZTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8VGFibGVQcm9wcz4gPSAoe1xyXG4gIGRhdGEsXHJcbiAgbnVtUm93cyxcclxuICBtaW5Sb3dzLFxyXG4gIGVtcHR5RGF0YURpY3QsXHJcbn0pID0+IHtcclxuICBpZiAobnVtUm93cyA8IG1pblJvd3MpIHtcclxuICAgIG51bVJvd3MgPSBtaW5Sb3dzO1xyXG4gIH1cclxuICBpZiAoIW1pblJvd3MpIHtcclxuICAgIGFzc2VydChlbXB0eURhdGFEaWN0ICE9PSB1bmRlZmluZWQpO1xyXG4gIH1cclxuICBjb25zdCBbZW1wdHlEYXRhLCBzZXRFbXB0eURhdGFdID0gdXNlU3RhdGU8Um93PigpO1xyXG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oKTtcclxuICBjb25zdCBbZGF0YVRvVXNlLCBzZXREYXRhVG9Vc2VdID0gdXNlU3RhdGU8VGFibGVEYXRhPigpO1xyXG4gIC8vc2V0dXAgZW1wdHlEYXRhIGFuZCBoZWFkZXJzIGlmIGRhdGEgaXMgdW5kZWZpbmVkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVtcHR5RGF0YURpY3QpO1xyXG4gICAgaWYgKCFkYXRhICYmICFoZWFkZXIgJiYgZW1wdHlEYXRhRGljdCkge1xyXG4gICAgICBzZXRIZWFkZXIob2JqZWN0S2V5cyhlbXB0eURhdGFEaWN0KSk7XHJcbiAgICAgIHNldEVtcHR5RGF0YShvYmplY3RLZXlzKGVtcHR5RGF0YURpY3QpLm1hcCgoa2V5KSA9PiBlbXB0eURhdGFEaWN0W2tleV0pKTtcclxuICAgIH1cclxuICB9LCBbZGF0YSwgaGVhZGVyLCBlbXB0eURhdGFEaWN0XSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgc2V0SGVhZGVyKG9iamVjdEtleXMoZGF0YSkpO1xyXG4gIH0sIFtkYXRhLCBlbXB0eURhdGFdKTtcclxuXHJcbiAgZnVuY3Rpb24gZGljdFRvTWF0cml4UmVtb3ZlS2V5cyhkaWN0OiBUYWJsZURpY3QpIHtcclxuICAgIHJldHVybiBvYmplY3RLZXlzKGRpY3QpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiBkaWN0W2tleV07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY29sT3JpZW50ZWRUb1Jvd09yaWVudGVkKGNvbHM6IENvbFtdKTogUm93W10ge1xyXG4gICAgY29uc3Qgcm93T3JpZW50ZWQ6IFJvd1tdID0gW107XHJcbiAgICBjb2xzLmZvckVhY2goKGNvbCkgPT4ge1xyXG4gICAgICBjb2wuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHJvd09yaWVudGVkW2luZGV4XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByb3dPcmllbnRlZFtpbmRleF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm93T3JpZW50ZWRbaW5kZXhdLnB1c2godmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJvd09yaWVudGVkO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgJiYgZGF0YVtvYmplY3RLZXlzKGRhdGEpWzBdXS5sZW5ndGggPj0gbnVtUm93cyAtIDEpIHtcclxuICAgICAgY29uc3Qgcm93T3JpZW50ZWREYXRhID0gY29sT3JpZW50ZWRUb1Jvd09yaWVudGVkKFxyXG4gICAgICAgIGRpY3RUb01hdHJpeFJlbW92ZUtleXMoZGF0YSlcclxuICAgICAgKTtcclxuICAgICAgc2V0RGF0YVRvVXNlKHJvd09yaWVudGVkRGF0YSk7XHJcbiAgICB9IGVsc2UgaWYgKCFkYXRhICYmIGVtcHR5RGF0YSkge1xyXG4gICAgICAvL2ZpbGwgd2l0aCBlbXB0eURhdGEgZm9yIG51bVJvd3NcclxuICAgICAgY29uc3Qgcm93T3JpZW50ZWREYXRhOiBSb3dbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xyXG4gICAgICAgIHJvd09yaWVudGVkRGF0YS5wdXNoKGVtcHR5RGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0RGF0YVRvVXNlKHJvd09yaWVudGVkRGF0YSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEpIHtcclxuICAgICAgYXNzZXJ0KGVtcHR5RGF0YSk7XHJcbiAgICAgIGNvbnN0IGRhdGFMZW5ndGggPSBkYXRhW29iamVjdEtleXMoZGF0YSlbMF1dLmxlbmd0aDtcclxuICAgICAgLy9jb21iaW5hdGlvbiBvZiBwcm92aWRlZCBhbmQgZW1wdHkgZGF0YSwgZm9yIG51bVJvd3MgYXQgbGVhc3RcclxuICAgICAgY29uc3Qgcm93T3JpZW50ZWREYXRhID0gY29sT3JpZW50ZWRUb1Jvd09yaWVudGVkKFxyXG4gICAgICAgIGRpY3RUb01hdHJpeFJlbW92ZUtleXMoZGF0YSlcclxuICAgICAgKTtcclxuICAgICAgYXNzZXJ0KHJvd09yaWVudGVkRGF0YS5sZW5ndGggPT09IGRhdGFMZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBpID0gcm93T3JpZW50ZWREYXRhLmxlbmd0aDsgaSA8IG51bVJvd3M7IGkrKykge1xyXG4gICAgICAgIHJvd09yaWVudGVkRGF0YS5wdXNoKGVtcHR5RGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0RGF0YVRvVXNlKHJvd09yaWVudGVkRGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGEsIGVtcHR5RGF0YSwgbnVtUm93c10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhVG9Vc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxyXG4gICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRoIGNvbFNwYW49ezR9Pkxpc3QgRGF0YTwvdGg+XHJcbiAgICAgICAgPHRoIGNvbFNwYW49ezV9PlNvcnRpbmcgUnVudGltZXMgKG1zKTwvdGg+XHJcbiAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICB7aGVhZGVyICYmIGRhdGFUb1VzZSA/IChcclxuICAgICAgICBkYXRhVG9Vc2UubWFwKChyb3c6IFJvdywgcm93SW5kKSA9PiB7XHJcbiAgICAgICAgICBpZiAocm93SW5kID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBrZXk9e1wiaGVhZGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICB7aGVhZGVyLm1hcCgoY29sTmFtZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2NvbE5hbWV9Pntjb2xOYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvd1swXSArIHJvd1syXSArIHJvd0luZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3cubWFwKCh2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtKU09OLnN0cmluZ2lmeSh2YWwpfT57dmFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17cm93WzBdICsgcm93WzJdICsgcm93SW5kfT5cclxuICAgICAgICAgICAgICAgIHtyb3cubWFwKCh2YWwpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRkIGtleT17SlNPTi5zdHJpbmdpZnkodmFsKX0+e3ZhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+IDwvPlxyXG4gICAgICApfVxyXG4gICAgPC90YWJsZT5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcclxuIl0sIm5hbWVzIjpbImFzc2VydCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvYmplY3RLZXlzIiwic3R5bGVzIiwiVGFibGUiLCJkYXRhIiwibnVtUm93cyIsIm1pblJvd3MiLCJlbXB0eURhdGFEaWN0IiwiZGljdFRvTWF0cml4UmVtb3ZlS2V5cyIsImRpY3QiLCJtYXAiLCJrZXkiLCJjb2xPcmllbnRlZFRvUm93T3JpZW50ZWQiLCJjb2xzIiwicm93T3JpZW50ZWQiLCJmb3JFYWNoIiwiY29sIiwidmFsdWUiLCJpbmRleCIsInVuZGVmaW5lZCIsInB1c2giLCJlbXB0eURhdGEiLCJzZXRFbXB0eURhdGEiLCJoZWFkZXIiLCJzZXRIZWFkZXIiLCJkYXRhVG9Vc2UiLCJzZXREYXRhVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicm93T3JpZW50ZWREYXRhIiwiaSIsImRhdGFMZW5ndGgiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidGgiLCJjb2xTcGFuIiwicm93Iiwicm93SW5kIiwiY29sTmFtZSIsInRyIiwidmFsIiwidGQiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Misc/Table.tsx\n");

/***/ })

});