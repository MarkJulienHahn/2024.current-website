"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/currently",{

/***/ "./pages/currently.js":
/*!****************************!*\
  !*** ./pages/currently.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_Blogpost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Blogpost */ \"./components/Blogpost.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Currently.module.css */ \"./styles/Currently.module.css\");\n/* harmony import */ var _styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst currently = (param)=>{\n    let { currently  } = param;\n    const colorArray = [\n        \"var(--blue)\",\n        \"var(--red)\",\n        \"var(--green)\",\n        \"var(--pink)\",\n        \"white\"\n    ];\n    console.log(currently);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                colorArray: colorArray\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/pages/currently.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: \"red\",\n                    width: \"100%\",\n                    height: \"65px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/pages/currently.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_4___default().postsOuter),\n                children: currently.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Blogpost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        post: post,\n                        i: i\n                    }, i, false, {\n                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/pages/currently.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/pages/currently.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (currently);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jdXJyZW50bHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVvQztBQUNVO0FBQ0o7QUFFUztBQUVuRCxNQUFNSSxZQUFZLFNBQW1CO1FBQWxCLEVBQUVBLFVBQVMsRUFBRTtJQUM5QixNQUFNQyxhQUFhO1FBQ2pCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVEQyxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0U7OzBCQUNFLDhEQUFDSix1REFBR0E7Z0JBQUNLLFlBQVlBOzs7Ozs7MEJBQ2pCLDhEQUFDRztnQkFBSUMsT0FBTztvQkFBQ0MsWUFBWTtvQkFBT0MsT0FBTztvQkFBUUMsUUFBUTtnQkFBTTs7Ozs7OzBCQUM3RCw4REFBQ0o7Z0JBQUlLLFdBQVdWLGdGQUFpQjswQkFDOUJDLFVBQVVXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxrQkFDcEIsOERBQUNoQiw0REFBUUE7d0JBQUNlLE1BQU1BO3dCQUFNQyxHQUFHQTt1QkFBUUE7Ozs7Ozs7Ozs7OztBQU8zQzs7QUFFQSwrREFBZWIsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jdXJyZW50bHkuanM/ZjU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcblxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBCbG9ncG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9ncG9zdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0N1cnJlbnRseS5tb2R1bGUuY3NzXCJcblxuY29uc3QgY3VycmVudGx5ID0gKHsgY3VycmVudGx5IH0pID0+IHtcbiAgY29uc3QgY29sb3JBcnJheSA9IFtcbiAgICBcInZhcigtLWJsdWUpXCIsXG4gICAgXCJ2YXIoLS1yZWQpXCIsXG4gICAgXCJ2YXIoLS1ncmVlbilcIixcbiAgICBcInZhcigtLXBpbmspXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICBdO1xuXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRseSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiBjb2xvckFycmF5PXtjb2xvckFycmF5fSAvPlxuICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6IFwicmVkXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjY1cHhcIn19Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHNPdXRlcn0+XG4gICAgICAgIHtjdXJyZW50bHkubWFwKChwb3N0LCBpKSA9PiAoXG4gICAgICAgICAgPEJsb2dwb3N0IHBvc3Q9e3Bvc3R9IGk9e2l9IGtleT17aX0vPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPEZvb3RlciBlbmdsaXNoPXtlbmdsaXNofSBpbXByZXNzdW09e2ltcHJlc3N1bX0gLz4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW50bHk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGN1cnJlbnRseSA9IGF3YWl0IGNsaWVudC5mZXRjaChgKiBbX3R5cGUgPT0gXCJjdXJyZW50bHlcIl0gey4uLiwgXCJ0ZXh0YmVpdHJhZ1wiOiB0ZXh0YmVpdHJhZ1tdey4uLiwgXCJpbWFnZXNcIjogaW1hZ2VzW117Li4uLCBcImltYWdlXCI6IGltYWdlLmFzc2V0LT57Li4ufX19LCBcImJpbGRiZWl0cmFnXCI6IGJpbGRiZWl0cmFney4uLiwgXCJpbWFnZXNcIjogaW1hZ2VzW117Li4uLCBcImltYWdlXCI6IGltYWdlLmFzc2V0LT57Li4ufX19LCBcIm5ld3NiZWl0cmFnXCI6IG5ld3NiZWl0cmFney4uLiwgXCJpbWFnZXNcIjogaW1hZ2VzW117Li4uLCBcImltYWdlXCI6IGltYWdlLmFzc2V0LT57Li4ufX19fWApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjdXJyZW50bHksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJOYXYiLCJCbG9ncG9zdCIsIkZvb3RlciIsInN0eWxlcyIsImN1cnJlbnRseSIsImNvbG9yQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJwb3N0c091dGVyIiwibWFwIiwicG9zdCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/currently.js\n"));

/***/ })

});