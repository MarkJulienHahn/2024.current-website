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

/***/ "./components/B2.js":
/*!**************************!*\
  !*** ./components/B2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _B3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./B3 */ \"./components/B3.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layer02 = (param)=>{\n    let { changed  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedCurrent, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().vertical),\n        style: {\n            background: colorArray[index]\n        },\n        onClick: changed && !changedCurrent ? ()=>changeIndex() : null,\n        onContextMenu: !changed ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_B3__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/B2.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_B3__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/B2.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/B2.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer02, \"E4vNI+nnbgTSfUuBJTzfEjeiwu4=\");\n_c = Layer02;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer02);\nvar _c;\n$RefreshReg$(_c, \"Layer02\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0IyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0s7QUFDM0I7QUFFdEIsTUFBTUksVUFBVSxTQUFlO1FBQWQsRUFBQ0MsUUFBTyxFQUFDOztJQUN4QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUN2QyxNQUFNLENBQUNRLGdCQUFnQkMsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ2xELE1BQU1VLGFBQWE7UUFDakI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNQyxjQUFjLElBQU07UUFDeEJKLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSixXQUFXSyxNQUFNLElBQUlOLFdBQVcsSUFBSSxDQUFDO0lBQzNFO0lBQ0EscUJBQ0UsOERBQUNPO1FBQ0NDLFdBQVdmLDRFQUFjO1FBQ3pCQSxPQUFPO1lBQUVpQixZQUFZVCxVQUFVLENBQUNKLE1BQU07UUFBQztRQUN2Q2MsU0FBU2YsV0FBVyxDQUFDRyxpQkFBaUIsSUFBTUcsZ0JBQWdCLElBQUk7UUFDaEVVLGVBQWUsQ0FBQ2hCLFVBQVUsSUFBTU0sZ0JBQWdCLElBQUk7OzBCQUVwRCw4REFBQ1IsMkNBQUVBO2dCQUFDRSxTQUFTRzs7Ozs7OzBCQUNiLDhEQUFDTCwyQ0FBRUE7Z0JBQUNFLFNBQVNHOzs7Ozs7Ozs7Ozs7QUFHbkI7R0ExQk1KO0tBQUFBO0FBNEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQjIuanM/MmIyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCMyBmcm9tIFwiLi9CM1wiO1xuXG5jb25zdCBMYXllcjAyID0gKHtjaGFuZ2VkfSkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2hhbmdlZEN1cnJlbnQsIHNldENoYW5nZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGNvbG9yQXJyYXkgPSBbXG4gICAgXCIjZjA5OWNkXCIsXG4gICAgXCIjMWQ0ODBmXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiI2ViMDAwMFwiLFxuICAgIFwiIzUwYjhmOVwiLFxuICAgIFwiI2VjNGYyN1wiLFxuICBdO1xuXG4gIGNvbnN0IGNoYW5nZUluZGV4ID0gKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSksIHNldENoYW5nZWQodHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS52ZXJ0aWNhbH1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yQXJyYXlbaW5kZXhdIH19XG4gICAgICBvbkNsaWNrPXtjaGFuZ2VkICYmICFjaGFuZ2VkQ3VycmVudCA/ICgpID0+IGNoYW5nZUluZGV4KCkgOiBudWxsfVxuICAgICAgb25Db250ZXh0TWVudT17IWNoYW5nZWQgPyAoKSA9PiBjaGFuZ2VJbmRleCgpIDogbnVsbH1cbiAgICA+XG4gICAgICA8QjMgY2hhbmdlZD17Y2hhbmdlZEN1cnJlbnR9IC8+XG4gICAgICA8QjMgY2hhbmdlZD17Y2hhbmdlZEN1cnJlbnR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllcjAyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJCMyIsIkxheWVyMDIiLCJjaGFuZ2VkIiwiaW5kZXgiLCJzZXRJbmRleCIsImNoYW5nZWRDdXJyZW50Iiwic2V0Q2hhbmdlZCIsImNvbG9yQXJyYXkiLCJjaGFuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInZlcnRpY2FsIiwiYmFja2dyb3VuZCIsIm9uQ2xpY2siLCJvbkNvbnRleHRNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/B2.js\n"));

/***/ })

});