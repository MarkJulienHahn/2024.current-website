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

/***/ "./hooks/useWindowDimensions.js":
/*!**************************************!*\
  !*** ./hooks/useWindowDimensions.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useWindowDimensions; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nfunction useWindowDimensions() {\n    _s();\n    // FALLBACK FOR SSR IN NEXT.JS\n    function getWindowDimensions() {\n        if (true) {\n            const { innerWidth: windowWidth , innerHeight: windowHeight  } = window;\n            return {\n                windowWidth,\n                windowHeight\n            };\n        } else {}\n    }\n    const [windowDimensions, setWindowDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        function handleResize() {\n            setWindowDimensions(getWindowDimensions());\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return windowDimensions;\n}\n_s(useWindowDimensions, \"XalQq70mIWrnM+6Jr3XornfayDc=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQTRDO0FBRTdCLFNBQVNFLHNCQUFzQjs7SUFDOUMsOEJBQThCO0lBQzVCLFNBQVNDLHNCQUFzQjtRQUM3QixJQUFJLElBQTZCLEVBQUU7WUFDakMsTUFBTSxFQUFFQyxZQUFZQyxZQUFXLEVBQUVDLGFBQWFDLGFBQVksRUFBRSxHQUFHQztZQUMvRCxPQUFPO2dCQUNMSDtnQkFDQUU7WUFDRjtRQUNGLE9BQU8sRUFPTjtJQUNIO0lBRUEsTUFBTSxDQUFDRSxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FDdERHO0lBR0ZGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxTQUFTVSxlQUFlO1lBQ3RCRCxvQkFBb0JQO1FBQ3RCO1FBRUFLLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVEO1FBQ2xDLE9BQU8sSUFBTUgsT0FBT0ssbUJBQW1CLENBQUMsVUFBVUY7SUFDcEQsR0FBRyxFQUFFO0lBRUwsT0FBT0Y7QUFDVCxDQUFDO0dBakN1QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlV2luZG93RGltZW5zaW9ucy5qcz9hNTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcbi8vIEZBTExCQUNLIEZPUiBTU1IgSU4gTkVYVC5KU1xuICBmdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCB7IGlubmVyV2lkdGg6IHdpbmRvd1dpZHRoLCBpbm5lckhlaWdodDogd2luZG93SGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aW5kb3dXaWR0aCxcbiAgICAgICAgd2luZG93SGVpZ2h0LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgd2luZG93V2lkdGggPSBudWxsO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gbnVsbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpbmRvd1dpZHRoLFxuICAgICAgICB3aW5kb3dIZWlnaHQsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dpbmRvd0RpbWVuc2lvbnMsIHNldFdpbmRvd0RpbWVuc2lvbnNdID0gdXNlU3RhdGUoXG4gICAgZ2V0V2luZG93RGltZW5zaW9ucygpXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dEaW1lbnNpb25zKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB3aW5kb3dEaW1lbnNpb25zO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2luZG93RGltZW5zaW9ucyIsImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwid2luZG93V2lkdGgiLCJpbm5lckhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsIndpbmRvd0RpbWVuc2lvbnMiLCJzZXRXaW5kb3dEaW1lbnNpb25zIiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useWindowDimensions.js\n"));

/***/ })

});