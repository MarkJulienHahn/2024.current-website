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

/***/ "./components/A6.js":
/*!**************************!*\
  !*** ./components/A6.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _A7__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./A7 */ \"./components/A7.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst A6 = (param)=>{\n    let { changed , configuration  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedCurrent, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);\n    };\n    const changeColor = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().horizontal),\n        style: {\n            background: colorArray[index],\n            display: \"flex\",\n            flexWrap: \"wrap\"\n        },\n        onClick: changed && !changedCurrent ? ()=>changeIndex() : null,\n        onContextMenu: changed ? ()=>changeColor() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A6.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A6.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A6.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A7__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A6.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A6.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(A6, \"E4vNI+nnbgTSfUuBJTzfEjeiwu4=\");\n_c = A6;\n/* harmony default export */ __webpack_exports__[\"default\"] = (A6);\nvar _c;\n$RefreshReg$(_c, \"A6\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0E2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWlDO0FBQ2dCO0FBQzNCO0FBRXRCLE1BQU1HLEtBQUssU0FBOEI7UUFBN0IsRUFBQ0MsUUFBTyxFQUFFQyxjQUFhLEVBQUM7O0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3ZDLE1BQU0sQ0FBQ1EsZ0JBQWdCQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDLElBQUk7SUFDbEQsTUFBTVUsYUFBYTtRQUNqQjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1DLGNBQWMsSUFBTTtRQUN4QkosU0FBU0ssS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLFdBQVdLLE1BQU0sSUFBSU4sV0FBVyxJQUFJLENBQUM7SUFDM0U7SUFFQSxNQUFNTyxjQUFjLElBQU07UUFDeEJULFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSixXQUFXSyxNQUFNO0lBQ3ZEO0lBQ0EscUJBQ0UsOERBQUNFO1FBQ0NDLFdBQVdqQiw4RUFBZ0I7UUFDM0JBLE9BQU87WUFBRW1CLFlBQVlWLFVBQVUsQ0FBQ0osTUFBTTtZQUFFZSxTQUFTO1lBQVFDLFVBQVU7UUFBTztRQUMxRUMsU0FBU25CLFdBQVcsQ0FBQ0ksaUJBQWlCLElBQU1HLGdCQUFnQixJQUFJO1FBQ2hFYSxlQUFlcEIsVUFBVSxJQUFNWSxnQkFBZ0IsSUFBSTs7MEJBRW5ELDhEQUFDZCwyQ0FBRUE7Z0JBQUNFLFNBQVNJOzs7Ozs7MEJBQ2IsOERBQUNOLDJDQUFFQTtnQkFBQ0UsU0FBU0k7Ozs7OzswQkFDYiw4REFBQ04sMkNBQUVBO2dCQUFDRSxTQUFTSTs7Ozs7OzBCQUNiLDhEQUFDTiwyQ0FBRUE7Z0JBQUNFLFNBQVNJOzs7Ozs7Ozs7Ozs7QUFHbkI7R0FoQ01MO0tBQUFBO0FBa0NOLCtEQUFlQSxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQTYuanM/ODQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQTcgZnJvbSBcIi4vQTdcIjtcblxuY29uc3QgQTYgPSAoe2NoYW5nZWQsIGNvbmZpZ3VyYXRpb259KSA9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjaGFuZ2VkQ3VycmVudCwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY29sb3JBcnJheSA9IFtcbiAgICBcIiNmMDk5Y2RcIixcbiAgICBcIiMxZDQ4MGZcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCIjZWIwMDAwXCIsXG4gICAgXCIjNTBiOGY5XCIsXG4gICAgXCIjZWM0ZjI3XCIsXG4gIF07XG5cbiAgY29uc3QgY2hhbmdlSW5kZXggPSAoKSA9PiB7XG4gICAgc2V0SW5kZXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKSwgc2V0Q2hhbmdlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICBzZXRJbmRleChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuaG9yaXpvbnRhbH1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yQXJyYXlbaW5kZXhdLCBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiIH19XG4gICAgICBvbkNsaWNrPXtjaGFuZ2VkICYmICFjaGFuZ2VkQ3VycmVudCA/ICgpID0+IGNoYW5nZUluZGV4KCkgOiBudWxsfVxuICAgICAgb25Db250ZXh0TWVudT17Y2hhbmdlZCA/ICgpID0+IGNoYW5nZUNvbG9yKCkgOiBudWxsfVxuICAgID5cbiAgICAgIDxBNyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gLz5cbiAgICAgIDxBNyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gLz5cbiAgICAgIDxBNyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gLz5cbiAgICAgIDxBNyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEE2O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGUiLCJBNyIsIkE2IiwiY2hhbmdlZCIsImNvbmZpZ3VyYXRpb24iLCJpbmRleCIsInNldEluZGV4IiwiY2hhbmdlZEN1cnJlbnQiLCJzZXRDaGFuZ2VkIiwiY29sb3JBcnJheSIsImNoYW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2hhbmdlQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJob3Jpem9udGFsIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm9uQ2xpY2siLCJvbkNvbnRleHRNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/A6.js\n"));

/***/ })

});