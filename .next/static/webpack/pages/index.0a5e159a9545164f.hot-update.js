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

/***/ "./components/D3.js":
/*!**************************!*\
  !*** ./components/D3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _D4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./D4 */ \"./components/D4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layer03 = (param)=>{\n    let { changed , configuration , color  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedCurrent, setChangedCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChangedCurrent(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().horizontal),\n        style: color ? {\n            background: colorArray[color]\n        } : {\n            background: colorArray[index]\n        },\n        onClick: changed && !changedCurrent ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_D4__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D3.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_D4__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D3.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/D3.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer03, \"Qc8lnrgFo2bvO1jXq3x4p9U921g=\");\n_c = Layer03;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer03);\nvar _c;\n$RefreshReg$(_c, \"Layer03\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0QzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0s7QUFDM0I7QUFFdEIsTUFBTUksVUFBVSxTQUFxQztRQUFwQyxFQUFDQyxRQUFPLEVBQUVDLGNBQWEsRUFBRUMsTUFBSyxFQUFDOztJQUM5QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUN2QyxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDekQsTUFBTVksYUFBYTtRQUNqQjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUlELE1BQU1DLGNBQWMsSUFBTTtRQUN4QkosU0FBU0ssS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtKLFdBQVdLLE1BQU0sSUFBSU4sa0JBQWtCLElBQUksQ0FBQztJQUNsRjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RRLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSixXQUFXSyxNQUFNO0lBQ3ZELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXakIsOEVBQWdCO1FBQzNCQSxPQUFPSyxRQUFRO1lBQUVjLFlBQVlULFVBQVUsQ0FBQ0wsTUFBTTtRQUFDLElBQUk7WUFBRWMsWUFBWVQsVUFBVSxDQUFDSixNQUFNO1FBQUMsQ0FBQztRQUNwRmMsU0FBU2pCLFdBQVcsQ0FBQ0ssaUJBQWlCLElBQU1HLGdCQUFnQixJQUFJOzswQkFFaEUsOERBQUNWLDJDQUFFQTtnQkFBQ0UsU0FBU0s7Ozs7OzswQkFDYiw4REFBQ1AsMkNBQUVBO2dCQUFDRSxTQUFTSzs7Ozs7Ozs7Ozs7O0FBR25CO0dBaENNTjtLQUFBQTtBQWtDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0QzLmpzP2VlYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvTGFuZGluZy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRDQgZnJvbSBcIi4vRDRcIjtcblxuY29uc3QgTGF5ZXIwMyA9ICh7Y2hhbmdlZCwgY29uZmlndXJhdGlvbiwgY29sb3J9KSA9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjaGFuZ2VkQ3VycmVudCwgc2V0Q2hhbmdlZEN1cnJlbnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGNvbG9yQXJyYXkgPSBbXG4gICAgXCIjZjA5OWNkXCIsXG4gICAgXCIjMWQ0ODBmXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiI2ViMDAwMFwiLFxuICAgIFwiIzUwYjhmOVwiLFxuICAgIFwiI2VjNGYyN1wiLFxuICBdO1xuXG5cblxuICBjb25zdCBjaGFuZ2VJbmRleCA9ICgpID0+IHtcbiAgICBzZXRJbmRleChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvckFycmF5Lmxlbmd0aCkpLCBzZXRDaGFuZ2VkQ3VycmVudCh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEluZGV4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9yQXJyYXkubGVuZ3RoKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuaG9yaXpvbnRhbH1cbiAgICAgIHN0eWxlPXtjb2xvciA/IHsgYmFja2dyb3VuZDogY29sb3JBcnJheVtjb2xvcl0gfSA6IHsgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleF0gfX1cbiAgICAgIG9uQ2xpY2s9e2NoYW5nZWQgJiYgIWNoYW5nZWRDdXJyZW50ID8gKCkgPT4gY2hhbmdlSW5kZXgoKSA6IG51bGx9XG4gICAgPlxuICAgICAgPEQ0IGNoYW5nZWQ9e2NoYW5nZWRDdXJyZW50fS8+XG4gICAgICA8RDQgY2hhbmdlZD17Y2hhbmdlZEN1cnJlbnR9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyMDM7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsIkQ0IiwiTGF5ZXIwMyIsImNoYW5nZWQiLCJjb25maWd1cmF0aW9uIiwiY29sb3IiLCJpbmRleCIsInNldEluZGV4IiwiY2hhbmdlZEN1cnJlbnQiLCJzZXRDaGFuZ2VkQ3VycmVudCIsImNvbG9yQXJyYXkiLCJjaGFuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImhvcml6b250YWwiLCJiYWNrZ3JvdW5kIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/D3.js\n"));

/***/ })

});