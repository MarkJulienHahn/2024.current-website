"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/D4.js":
/*!**************************!*\
  !*** ./components/D4.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _D5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./D5 */ \"./components/D5.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layer04 = (param)=>{\n    let { changed , configuration  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedCurrent, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);\n    };\n    const changeColor = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().vertical),\n        style: {\n            background: colorArray[index]\n        },\n        onClick: changed && !changedCurrent ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_D5__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D4.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_D5__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D4.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D4.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer04, \"E4vNI+nnbgTSfUuBJTzfEjeiwu4=\");\n_c = Layer04;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer04);\nvar _c;\n$RefreshReg$(_c, \"Layer04\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Q0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0s7QUFDM0I7QUFFdEIsTUFBTUksVUFBVSxTQUE4QjtRQUE3QixFQUFDQyxRQUFPLEVBQUVDLGNBQWEsRUFBQzs7SUFDdkMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLElBQUk7SUFDdkMsTUFBTSxDQUFDUyxnQkFBZ0JDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUNsRCxNQUFNVyxhQUFhO1FBQ2pCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCSixTQUFTSyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osV0FBV0ssTUFBTSxJQUFJTixXQUFXLElBQUksQ0FBQztJQUMzRTtJQUVBLE1BQU1PLGNBQWMsSUFBTTtRQUN4QlQsU0FBU0ssS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLFdBQVdLLE1BQU07SUFDdkQ7SUFHQSxxQkFDRSw4REFBQ0U7UUFDQ0MsV0FBV2pCLDRFQUFjO1FBQ3pCQSxPQUFPO1lBQUVtQixZQUFZVixVQUFVLENBQUNKLE1BQU07UUFBQTtRQUN0Q2UsU0FBU2pCLFdBQVcsQ0FBQ0ksaUJBQWlCLElBQU1HLGdCQUFnQixJQUFJOzswQkFHaEUsOERBQUNULDJDQUFFQTtnQkFBQ0UsU0FBU0k7Ozs7OzswQkFDYiw4REFBQ04sMkNBQUVBO2dCQUFDRSxTQUFTSTs7Ozs7Ozs7Ozs7O0FBR25CO0dBaENNTDtLQUFBQTtBQWtDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Q0LmpzP2U1NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRDUgZnJvbSBcIi4vRDVcIjtcblxuY29uc3QgTGF5ZXIwNCA9ICh7Y2hhbmdlZCwgY29uZmlndXJhdGlvbn0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NoYW5nZWRDdXJyZW50LCBzZXRDaGFuZ2VkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjb2xvckFycmF5ID0gW1xuICAgIFwiI2YwOTljZFwiLFxuICAgIFwiIzFkNDgwZlwiLFxuICAgIFwid2hpdGVcIixcbiAgICBcIiNlYjAwMDBcIixcbiAgICBcIiM1MGI4ZjlcIixcbiAgICBcIiNlYzRmMjdcIixcbiAgXTtcblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBzZXRJbmRleChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpLCBzZXRDaGFuZ2VkKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUNvbG9yID0gKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLnZlcnRpY2FsfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleF19fVxuICAgICAgb25DbGljaz17Y2hhbmdlZCAmJiAhY2hhbmdlZEN1cnJlbnQgPyAoKSA9PiBjaGFuZ2VJbmRleCgpIDogbnVsbH1cbiAgICAgIC8vIG9uQ29udGV4dE1lbnU9eyFjaGFuZ2VkID8gKCkgPT4gY2hhbmdlQ29sb3IoKSA6IG51bGx9XG4gICAgPlxuICAgICAgPEQ1IGNoYW5nZWQ9e2NoYW5nZWRDdXJyZW50fSAvPlxuICAgICAgPEQ1IGNoYW5nZWQ9e2NoYW5nZWRDdXJyZW50fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXIwNDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiRDUiLCJMYXllcjA0IiwiY2hhbmdlZCIsImNvbmZpZ3VyYXRpb24iLCJpbmRleCIsInNldEluZGV4IiwiY2hhbmdlZEN1cnJlbnQiLCJzZXRDaGFuZ2VkIiwiY29sb3JBcnJheSIsImNoYW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbmdlQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ2ZXJ0aWNhbCIsImJhY2tncm91bmQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/D4.js\n"));

/***/ })

});