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

/***/ "./components/A.js":
/*!*************************!*\
  !*** ./components/A.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _A2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./A2 */ \"./components/A2.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layer01 = (param)=>{\n    let { configuration , indexA  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changed, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIndex(index);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().A),\n        style: {\n            background: colorArray[indexA]\n        },\n        onClick: !changed ? ()=>changeIndex() : null,\n        onContextMenu: ()=>changeIndex(),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                background: colorArray[index],\n                width: \"100%\",\n                height: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    changed: changed,\n                    configuration: configuration,\n                    color: configuration.layer2[0]\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_A2__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    changed: changed,\n                    configuration: configuration,\n                    color: configuration.layer2[1]\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer01, \"zJCqENoTngsKs3ZMKxwQsw3ihQw=\");\n_c = Layer01;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer01);\nvar _c;\n$RefreshReg$(_c, \"Layer01\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0EuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDSztBQUUzQjtBQUV0QixNQUFNSSxVQUFVLFNBQStCO1FBQTlCLEVBQUVDLGNBQWEsRUFBRUMsT0FBTSxFQUFFOztJQUN4QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUN2QyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNVyxhQUFhO1FBQ2pCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRUQsTUFBTUMsY0FBYyxJQUFNO1FBQ3hCSixTQUFTSyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS0osV0FBV0ssTUFBTSxJQUFJTixXQUFXLElBQUksQ0FBQztJQUMzRTtJQUVBVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFNBQVNEO0lBQ1gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQ0NDLFdBQVdoQixxRUFBTztRQUNsQkEsT0FBTztZQUFFa0IsWUFBWVQsVUFBVSxDQUFDTCxPQUFPO1FBQUM7UUFDeENlLFNBQVMsQ0FBQ1osVUFBVSxJQUFNRyxnQkFBZ0IsSUFBSTtRQUM5Q1UsZUFBZSxJQUFNVjtrQkFFckIsNEVBQUNLO1lBQ0NmLE9BQU87Z0JBQUVrQixZQUFZVCxVQUFVLENBQUNKLE1BQU07Z0JBQUVnQixPQUFPO2dCQUFRQyxRQUFRO1lBQU87OzhCQUV0RSw4REFBQ3JCLDJDQUFFQTtvQkFDRE0sU0FBU0E7b0JBQ1RKLGVBQWVBO29CQUNmb0IsT0FBT3BCLGNBQWNxQixNQUFNLENBQUMsRUFBRTs7Ozs7OzhCQUVoQyw4REFBQ3ZCLDJDQUFFQTtvQkFDRE0sU0FBU0E7b0JBQ1RKLGVBQWVBO29CQUNmb0IsT0FBT3BCLGNBQWNxQixNQUFNLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEM7R0EzQ010QjtLQUFBQTtBQTZDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0EuanM/NGQxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IEEyIGZyb20gXCIuL0EyXCI7XG5cbmNvbnN0IExheWVyMDEgPSAoeyBjb25maWd1cmF0aW9uLCBpbmRleEEgfSkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2hhbmdlZCwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY29sb3JBcnJheSA9IFtcbiAgICBcIiNmMDk5Y2RcIixcbiAgICBcIiMxZDQ4MGZcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCIjZWIwMDAwXCIsXG4gICAgXCIjNTBiOGY5XCIsXG4gICAgXCIjZWM0ZjI3XCIsXG4gIF07XG5cbiAgY29uc3QgY2hhbmdlSW5kZXggPSAoKSA9PiB7XG4gICAgc2V0SW5kZXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKSwgc2V0Q2hhbmdlZCh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEluZGV4KGluZGV4KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5BfVxuICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3JBcnJheVtpbmRleEFdIH19XG4gICAgICBvbkNsaWNrPXshY2hhbmdlZCA/ICgpID0+IGNoYW5nZUluZGV4KCkgOiBudWxsfVxuICAgICAgb25Db250ZXh0TWVudT17KCkgPT4gY2hhbmdlSW5kZXgoKX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yQXJyYXlbaW5kZXhdLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cbiAgICAgID5cbiAgICAgICAgPEEyXG4gICAgICAgICAgY2hhbmdlZD17Y2hhbmdlZH1cbiAgICAgICAgICBjb25maWd1cmF0aW9uPXtjb25maWd1cmF0aW9ufVxuICAgICAgICAgIGNvbG9yPXtjb25maWd1cmF0aW9uLmxheWVyMlswXX1cbiAgICAgICAgLz5cbiAgICAgICAgPEEyXG4gICAgICAgICAgY2hhbmdlZD17Y2hhbmdlZH1cbiAgICAgICAgICBjb25maWd1cmF0aW9uPXtjb25maWd1cmF0aW9ufVxuICAgICAgICAgIGNvbG9yPXtjb25maWd1cmF0aW9uLmxheWVyMlsxXX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXIwMTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlIiwiQTIiLCJMYXllcjAxIiwiY29uZmlndXJhdGlvbiIsImluZGV4QSIsImluZGV4Iiwic2V0SW5kZXgiLCJjaGFuZ2VkIiwic2V0Q2hhbmdlZCIsImNvbG9yQXJyYXkiLCJjaGFuZ2VJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsIkEiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsIm9uQ29udGV4dE1lbnUiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIiwibGF5ZXIyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/A.js\n"));

/***/ }),

/***/ "./components/A2.js":
/*!**************************!*\
  !*** ./components/A2.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Landing.module.css */ \"./styles/Landing.module.css\");\n/* harmony import */ var _styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layer03__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer03 */ \"./components/Layer03.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Layer02 = (param)=>{\n    let { changed , configuration , color  } = param;\n    _s();\n    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [changedCurrent, setChanged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const colorArray = [\n        \"#f099cd\",\n        \"#1d480f\",\n        \"white\",\n        \"#eb0000\",\n        \"#50b8f9\",\n        \"#ec4f27\"\n    ];\n    const changeIndex = ()=>{\n        setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Landing_module_css__WEBPACK_IMPORTED_MODULE_3___default().horizontal),\n        style: {\n            background: colorArray[index]\n        },\n        onClick: changed && !changedCurrent ? ()=>changeIndex() : null,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layer03__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent,\n                color: configuration.layer3[0]\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A2.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layer03__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                changed: changedCurrent,\n                color: configuration.layer3[1]\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A2.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/A2.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layer02, \"E4vNI+nnbgTSfUuBJTzfEjeiwu4=\");\n_c = Layer02;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layer02);\nvar _c;\n$RefreshReg$(_c, \"Layer02\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0EyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ0s7QUFDakI7QUFFaEMsTUFBTUksVUFBVSxTQUFxQztRQUFwQyxFQUFDQyxRQUFPLEVBQUVDLGNBQWEsRUFBRUMsTUFBSyxFQUFDOztJQUM5QyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUN2QyxNQUFNLENBQUNVLGdCQUFnQkMsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ2xELE1BQU1ZLGFBQWE7UUFDakI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNQyxjQUFjLElBQU07UUFDeEJKLFNBQVNLLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLSixXQUFXSyxNQUFNLElBQUlOLFdBQVcsSUFBSSxDQUFDO0lBQzNFO0lBQ0EscUJBQ0UsOERBQUNPO1FBQ0NDLFdBQVdqQiw4RUFBZ0I7UUFDM0JBLE9BQU87WUFBRW1CLFlBQVlULFVBQVUsQ0FBQ0osTUFBTTtRQUFDO1FBQ3ZDYyxTQUFTakIsV0FBVyxDQUFDSyxpQkFBaUIsSUFBTUcsZ0JBQWdCLElBQUk7OzBCQUVoRSw4REFBQ1YsZ0RBQU9BO2dCQUFDRSxTQUFTSztnQkFBZ0JILE9BQU9ELGNBQWNpQixNQUFNLENBQUMsRUFBRTs7Ozs7OzBCQUNoRSw4REFBQ3BCLGdEQUFPQTtnQkFBQ0UsU0FBU0s7Z0JBQWdCSCxPQUFPRCxjQUFjaUIsTUFBTSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztBQUd0RTtHQXpCTW5CO0tBQUFBO0FBMkJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQTIuanM/MGMxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9MYW5kaW5nLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMYXllcjAzIGZyb20gXCIuL0xheWVyMDNcIjtcblxuY29uc3QgTGF5ZXIwMiA9ICh7Y2hhbmdlZCwgY29uZmlndXJhdGlvbiwgY29sb3J9KSA9PiB7XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjaGFuZ2VkQ3VycmVudCwgc2V0Q2hhbmdlZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgY29sb3JBcnJheSA9IFtcbiAgICBcIiNmMDk5Y2RcIixcbiAgICBcIiMxZDQ4MGZcIixcbiAgICBcIndoaXRlXCIsXG4gICAgXCIjZWIwMDAwXCIsXG4gICAgXCIjNTBiOGY5XCIsXG4gICAgXCIjZWM0ZjI3XCIsXG4gIF07XG5cbiAgY29uc3QgY2hhbmdlSW5kZXggPSAoKSA9PiB7XG4gICAgc2V0SW5kZXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JBcnJheS5sZW5ndGgpKSwgc2V0Q2hhbmdlZCh0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLmhvcml6b250YWx9XG4gICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvckFycmF5W2luZGV4XSB9fVxuICAgICAgb25DbGljaz17Y2hhbmdlZCAmJiAhY2hhbmdlZEN1cnJlbnQgPyAoKSA9PiBjaGFuZ2VJbmRleCgpIDogbnVsbH1cbiAgICA+XG4gICAgICA8TGF5ZXIwMyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gY29sb3I9e2NvbmZpZ3VyYXRpb24ubGF5ZXIzWzBdfS8+XG4gICAgICA8TGF5ZXIwMyBjaGFuZ2VkPXtjaGFuZ2VkQ3VycmVudH0gY29sb3I9e2NvbmZpZ3VyYXRpb24ubGF5ZXIzWzFdfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllcjAyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGUiLCJMYXllcjAzIiwiTGF5ZXIwMiIsImNoYW5nZWQiLCJjb25maWd1cmF0aW9uIiwiY29sb3IiLCJpbmRleCIsInNldEluZGV4IiwiY2hhbmdlZEN1cnJlbnQiLCJzZXRDaGFuZ2VkIiwiY29sb3JBcnJheSIsImNoYW5nZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaG9yaXpvbnRhbCIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwibGF5ZXIzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/A2.js\n"));

/***/ })

});