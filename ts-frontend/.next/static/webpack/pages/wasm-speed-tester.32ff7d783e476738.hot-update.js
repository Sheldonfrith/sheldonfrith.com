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

/***/ "./components/Misc/BarChart.tsx":
/*!**************************************!*\
  !*** ./components/Misc/BarChart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.mjs\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarController);\nvar BarChart = function(param) {\n    var datasetNamesInOrder = param.datasetNamesInOrder, xAxisLabelsInOrder = param.xAxisLabelsInOrder, dataByDatasetName = param.dataByDatasetName;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), data = ref[0], setData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var style = getComputedStyle(document.body);\n        var bgColor = style.getPropertyValue(\"--bg\");\n        var primCol = style.getPropertyValue(\"--accent2\");\n        var chartCol = style.getPropertyValue(\"--accent1\");\n        var newData = {\n            labels: xAxisLabelsInOrder,\n            datasets: datasetNamesInOrder.map(function(datasetName) {\n                return {\n                    label: datasetName,\n                    data: dataByDatasetName[datasetName],\n                    backgroundColor: chartCol,\n                    borderColor: primCol,\n                    borderWidth: 3,\n                    color: chartCol\n                };\n            })\n        };\n        console.log(newData, dataByDatasetName);\n        setData(newData);\n    }, [\n        datasetNamesInOrder,\n        dataByDatasetName,\n        xAxisLabelsInOrder\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \" \"\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n        data: data\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sheld\\\\Documents\\\\GitHub\\\\sheldonfrith.com\\\\ts-frontend\\\\components\\\\Misc\\\\BarChart.tsx\",\n        lineNumber: 80,\n        columnNumber: 10\n    }, _this);\n};\n_s(BarChart, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01pc2MvQmFyQ2hhcnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFNZTtBQVlHO0FBQ29COztBQUd0Q0ksb0RBQWdCLENBQ2RDLG1EQUFhLEVBQ2JDLGlEQUFXLEVBQ1hDLGtEQUFZLEVBQ1pDLGlEQUFXLEVBQ1hDLDJDQUFLLEVBQ0xDLDZDQUFPLEVBQ1BDLDRDQUFNLEVBQ05DLGdEQUFVLEVBQ1ZDLG1EQUFhLENBQ2QsQ0FBQztBQWdCRixJQUFNRyxRQUFRLEdBQTJDLGdCQUluRDtRQUhKQyxtQkFBbUIsU0FBbkJBLG1CQUFtQixFQUNuQkMsa0JBQWtCLFNBQWxCQSxrQkFBa0IsRUFDbEJDLGlCQUFpQixTQUFqQkEsaUJBQWlCOztJQUVqQixJQUF3QmxCLEdBQXFCLEdBQXJCQSwrQ0FBUSxFQUFhLEVBckQvQyxJQXFEYSxHQUFhQSxHQUFxQixHQUFsQyxFQXJEYixPQXFEc0IsR0FBSUEsR0FBcUIsR0FBekI7SUFDcEJDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlvQixLQUFLLEdBQUdDLGdCQUFnQixDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztRQUMzQyxJQUFJQyxPQUFPLEdBQUdKLEtBQUssQ0FBQ0ssZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUlDLE9BQU8sR0FBR04sS0FBSyxDQUFDSyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDakQsSUFBSUUsUUFBUSxHQUFHUCxLQUFLLENBQUNLLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUVsRCxJQUFNRyxPQUFPLEdBQUc7WUFDZEMsTUFBTSxFQUFFYixrQkFBa0I7WUFDMUJjLFFBQVEsRUFBRWYsbUJBQW1CLENBQUNnQixHQUFHLENBQUMsU0FBQ0MsV0FBVyxFQUFLO2dCQUNqRCxPQUFPO29CQUNMQyxLQUFLLEVBQUVELFdBQVc7b0JBQ2xCZCxJQUFJLEVBQUVELGlCQUFpQixDQUFDZSxXQUFXLENBQUM7b0JBQ3BDRSxlQUFlLEVBQUVQLFFBQVE7b0JBQ3pCUSxXQUFXLEVBQUVULE9BQU87b0JBQ3BCVSxXQUFXLEVBQUUsQ0FBQztvQkFDZEMsS0FBSyxFQUFFVixRQUFRO2lCQUNoQixDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0RXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxPQUFPLEVBQUVYLGlCQUFpQixDQUFDLENBQUM7UUFDeENFLE9BQU8sQ0FBQ1MsT0FBTyxDQUFDLENBQUM7S0FDbEIsRUFBRTtRQUFDYixtQkFBbUI7UUFBRUUsaUJBQWlCO1FBQUVELGtCQUFrQjtLQUFDLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUNFLElBQUksRUFBRTtRQUNULHFCQUFPO3NCQUFFLEdBQUM7eUJBQUcsQ0FBQztLQUNmO0lBQ0QscUJBQU8sOERBQUNOLGdEQUFHO1FBQUNNLElBQUksRUFBRUEsSUFBSTs7Ozs7YUFBUSxDQUFDO0NBQ2hDO0dBaENLSixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFpQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01pc2MvQmFyQ2hhcnQudHN4PzIzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlU3RhdGUsXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZUNvbnRleHQsXHJcbiAgdXNlQ2FsbGJhY2ssXHJcbiAgdXNlUmVmLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENoYXJ0IGFzIENoYXJ0SlMsXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbiAgQmFyRWxlbWVudCxcclxuICBCYXJDb250cm9sbGVyLFxyXG59IGZyb20gXCJjaGFydC5qc1wiO1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IG9iamVjdEtleXMgfSBmcm9tIFwiLi4vLi4vbGliL09iamVjdEtleXNcIjtcclxuXHJcbkNoYXJ0SlMucmVnaXN0ZXIoXHJcbiAgQ2F0ZWdvcnlTY2FsZSxcclxuICBMaW5lYXJTY2FsZSxcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbiAgQmFyRWxlbWVudCxcclxuICBCYXJDb250cm9sbGVyXHJcbik7XHJcbmludGVyZmFjZSBCYXJDaGFydFByb3BzIHtcclxuICBkYXRhc2V0TmFtZXNJbk9yZGVyOiBzdHJpbmdbXTtcclxuICB4QXhpc0xhYmVsc0luT3JkZXI6IHN0cmluZ1tdO1xyXG4gIGRhdGFCeURhdGFzZXROYW1lOiB7IFtkYXRhc2V0TmFtZTogc3RyaW5nXTogbnVtYmVyW10gfTtcclxufVxyXG50eXBlIENoYXJ0RGF0YSA9IHtcclxuICBsYWJlbHM6IHN0cmluZ1tdO1xyXG4gIGRhdGFzZXRzOiB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgZGF0YTogbnVtYmVyW107XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gIH1bXTtcclxufTtcclxuY29uc3QgQmFyQ2hhcnQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEJhckNoYXJ0UHJvcHM+ID0gKHtcclxuICBkYXRhc2V0TmFtZXNJbk9yZGVyLFxyXG4gIHhBeGlzTGFiZWxzSW5PcmRlcixcclxuICBkYXRhQnlEYXRhc2V0TmFtZSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPENoYXJ0RGF0YT4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcclxuICAgIHZhciBiZ0NvbG9yID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYmdcIik7XHJcbiAgICB2YXIgcHJpbUNvbCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJy0tYWNjZW50MicpO1xyXG4gICAgdmFyIGNoYXJ0Q29sID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnLS1hY2NlbnQxJyk7XHJcblxyXG4gICAgY29uc3QgbmV3RGF0YSA9IHtcclxuICAgICAgbGFiZWxzOiB4QXhpc0xhYmVsc0luT3JkZXIsXHJcbiAgICAgIGRhdGFzZXRzOiBkYXRhc2V0TmFtZXNJbk9yZGVyLm1hcCgoZGF0YXNldE5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFiZWw6IGRhdGFzZXROYW1lLFxyXG4gICAgICAgICAgZGF0YTogZGF0YUJ5RGF0YXNldE5hbWVbZGF0YXNldE5hbWVdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjaGFydENvbCxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBwcmltQ29sLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICBjb2xvcjogY2hhcnRDb2wsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSksXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cobmV3RGF0YSwgZGF0YUJ5RGF0YXNldE5hbWUpO1xyXG4gICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICB9LCBbZGF0YXNldE5hbWVzSW5PcmRlciwgZGF0YUJ5RGF0YXNldE5hbWUsIHhBeGlzTGFiZWxzSW5PcmRlcl0pO1xyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIDw+IDwvPjtcclxuICB9XHJcbiAgcmV0dXJuIDxCYXIgZGF0YT17ZGF0YX0+PC9CYXI+O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkJhckVsZW1lbnQiLCJCYXJDb250cm9sbGVyIiwiQmFyIiwicmVnaXN0ZXIiLCJCYXJDaGFydCIsImRhdGFzZXROYW1lc0luT3JkZXIiLCJ4QXhpc0xhYmVsc0luT3JkZXIiLCJkYXRhQnlEYXRhc2V0TmFtZSIsImRhdGEiLCJzZXREYXRhIiwic3R5bGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJib2R5IiwiYmdDb2xvciIsImdldFByb3BlcnR5VmFsdWUiLCJwcmltQ29sIiwiY2hhcnRDb2wiLCJuZXdEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJtYXAiLCJkYXRhc2V0TmFtZSIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImNvbG9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Misc/BarChart.tsx\n");

/***/ })

});