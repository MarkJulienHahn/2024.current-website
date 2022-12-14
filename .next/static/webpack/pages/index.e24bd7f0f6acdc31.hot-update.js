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

/***/ "./components/Infosection.js":
/*!***********************************!*\
  !*** ./components/Infosection.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Main.module.css */ \"./styles/Main.module.css\");\n/* harmony import */ var _styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Infosection = (param)=>{\n    let { english , intro , about  } = param;\n    _s();\n    const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [background2, setBackground2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [mobileText1, setMobileText1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [mobileText2, setMobileText2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().infoWrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().infoHeadline),\n                style: {\n                    background: background ? \"var(--red)\" : \"\",\n                    color: background ? \"var(--blue)\" : \"\"\n                },\n                onClick: ()=>setBackground(!background),\n                children: english ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: intro.titleEnglish\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: intro.titleGerman\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().infoText),\n                style: {\n                    background: background ? \"var(--red)\" : \"\"\n                },\n                onClick: ()=>setBackground(!background),\n                children: english ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: intro.textEnglish\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: intro.textGerman\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileInfoText),\n                style: {\n                    background: background ? \"var(--red)\" : \"\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: !mobileText1 ? (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileAccordionClosed) : (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileAccordionOpen),\n                        onClick: ()=>setBackground(!background),\n                        children: english ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: intro.textEnglish\n                        }, void 0, false, {\n                            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: intro.textGerman\n                        }, void 0, false, {\n                            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mehrLesen),\n                        onClick: ()=>setMobileText1(!mobileText1),\n                        children: !mobileText1 ? english ? \"Read More...\" : \"Mehr lesen..\" : english ? \"Read More...\" : \"Mehr lesen..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"anchor\",\n                id: \"about\"\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().infoSubHeadline),\n                        style: {\n                            background: background2 ? \"var(--pink)\" : \"\"\n                        },\n                        onClick: ()=>setBackground2(!background2),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: english ? \"About the Festival\" : \"\\xdcber das Festival\"\n                        }, void 0, false, {\n                            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().space),\n                        style: {\n                            background: background ? \"var(--red)\" : \"\"\n                        },\n                        onClick: ()=>setBackground(!background)\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().infoText),\n                style: {\n                    background: background2 ? \"var(--pink)\" : \"\"\n                },\n                onClick: ()=>setBackground2(!background2),\n                children: english ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: about.textEnglish\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                    value: about.textGerman\n                }, void 0, false, {\n                    fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                    lineNumber: 98,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileInfoText),\n                style: {\n                    background: background2 ? \"var(--pink)\" : \"\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: !mobileText1 ? (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileAccordionClosed) : (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileAccordionOpen),\n                        onClick: ()=>setBackground2(!background2),\n                        children: english ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: about.textEnglish\n                        }, void 0, false, {\n                            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_3__.PortableText, {\n                            value: about.textGerman\n                        }, void 0, false, {\n                            fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().mehrLesen),\n                        onClick: ()=>setMobileText2(!mobileText2),\n                        children: !mobileText1 ? english ? \"Read More...\" : \"Mehr lesen..\" : english ? \"Read More...\" : \"Mehr lesen..\"\n                    }, void 0, false, {\n                        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/markjulienhahn/Desktop/CURRENT_FESTIVAL/current-website/components/Infosection.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Infosection, \"s80+dzb1OBSAaIqEpI6MWGr+ZXs=\");\n_c = Infosection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Infosection);\nvar _c;\n$RefreshReg$(_c, \"Infosection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3REYSxTQUFTLElBQU1aLGVBQWUsQ0FBQ0Q7MEJBRTlCTCx3QkFDQyw4REFBQ0YsNkRBQVlBO29CQUFDcUIsT0FBT2pCLE1BQU1xQixXQUFXOzs7Ozs4Q0FFdEMsOERBQUN6Qiw2REFBWUE7b0JBQUNxQixPQUFPakIsTUFBTXNCLFVBQVU7Ozs7OzZCQUN0Qzs7Ozs7OzBCQUdILDhEQUFDYjtnQkFDQ0MsV0FBV2YsK0VBQXFCO2dCQUNoQ21CLE9BQU87b0JBQUViLFlBQVlFLGNBQWMsZ0JBQWdCLEVBQUU7Z0JBQUM7O2tDQUV0RCw4REFBQ007d0JBQ0NDLFdBQ0UsQ0FBQ0wsY0FDR1Ysc0ZBQTRCLEdBQzVCQSxvRkFBMEI7d0JBRWhDcUIsU0FBUyxJQUFNWixlQUFlLENBQUNEO2tDQUU5Qkwsd0JBQ0MsOERBQUNGLDZEQUFZQTs0QkFBQ3FCLE9BQU9qQixNQUFNcUIsV0FBVzs7Ozs7c0RBRXRDLDhEQUFDekIsNkRBQVlBOzRCQUFDcUIsT0FBT2pCLE1BQU1zQixVQUFVOzs7OztxQ0FDdEM7Ozs7OztrQ0FFSCw4REFBQ2I7d0JBQ0NDLFdBQVdmLDBFQUFnQjt3QkFDM0JxQixTQUFTLElBQU1SLGVBQWUsQ0FBQ0Q7a0NBRTlCLENBQUNGLGNBQ0VQLFVBQ0UsaUJBQ0EsY0FBYyxHQUNoQkEsVUFDQSxpQkFDQSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUI7R0FqSU1EO0tBQUFBO0FBbUlOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5mb3NlY3Rpb24uanM/ZGU5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01haW4ubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuXG5jb25zdCBJbmZvc2VjdGlvbiA9ICh7IGVuZ2xpc2gsIGludHJvLCBhYm91dCB9KSA9PiB7XG4gIGNvbnN0IFtiYWNrZ3JvdW5kLCBzZXRCYWNrZ3JvdW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2JhY2tncm91bmQyLCBzZXRCYWNrZ3JvdW5kMl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBbbW9iaWxlVGV4dDEsIHNldE1vYmlsZVRleHQxXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21vYmlsZVRleHQyLCBzZXRNb2JpbGVUZXh0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgIDxoMVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmZvSGVhZGxpbmV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZCA/IFwidmFyKC0tcmVkKVwiIDogXCJcIixcbiAgICAgICAgICBjb2xvcjogYmFja2dyb3VuZCA/IFwidmFyKC0tYmx1ZSlcIiA6IFwiXCIsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJhY2tncm91bmQoIWJhY2tncm91bmQpfVxuICAgICAgPlxuICAgICAgICB7ZW5nbGlzaCA/IChcbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtpbnRyby50aXRsZUVuZ2xpc2h9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17aW50cm8udGl0bGVHZXJtYW59IC8+XG4gICAgICAgICl9XG4gICAgICA8L2gxPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fVxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kID8gXCJ2YXIoLS1yZWQpXCIgOiBcIlwiIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJhY2tncm91bmQoIWJhY2tncm91bmQpfVxuICAgICAgPlxuICAgICAgICB7ZW5nbGlzaCA/IChcbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtpbnRyby50ZXh0RW5nbGlzaH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtpbnRyby50ZXh0R2VybWFufSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9iaWxlSW5mb1RleHR9XG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJhY2tncm91bmQgPyBcInZhcigtLXJlZClcIiA6IFwiXCIgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAhbW9iaWxlVGV4dDFcbiAgICAgICAgICAgICAgPyBzdHlsZXMubW9iaWxlQWNjb3JkaW9uQ2xvc2VkXG4gICAgICAgICAgICAgIDogc3R5bGVzLm1vYmlsZUFjY29yZGlvbk9wZW5cbiAgICAgICAgICB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QmFja2dyb3VuZCghYmFja2dyb3VuZCl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZW5nbGlzaCA/IChcbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2ludHJvLnRleHRFbmdsaXNofSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtpbnRyby50ZXh0R2VybWFufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVockxlc2VufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZVRleHQxKCFtb2JpbGVUZXh0MSl9XG4gICAgICAgID5cbiAgICAgICAgICB7IW1vYmlsZVRleHQxXG4gICAgICAgICAgICA/IGVuZ2xpc2hcbiAgICAgICAgICAgICAgPyBcIlJlYWQgTW9yZS4uLlwiXG4gICAgICAgICAgICAgIDogXCJNZWhyIGxlc2VuLi5cIlxuICAgICAgICAgICAgOiBlbmdsaXNoXG4gICAgICAgICAgICA/IFwiUmVhZCBNb3JlLi4uXCJcbiAgICAgICAgICAgIDogXCJNZWhyIGxlc2VuLi5cIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYW5jaG9yXCJ9IGlkPVwiYWJvdXRcIj48L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmZvU3ViSGVhZGxpbmV9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZDIgPyBcInZhcigtLXBpbmspXCIgOiBcIlwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QmFja2dyb3VuZDIoIWJhY2tncm91bmQyKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMT57ZW5nbGlzaCA/IFwiQWJvdXQgdGhlIEZlc3RpdmFsXCIgOiBcIsOcYmVyIGRhcyBGZXN0aXZhbFwifTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2V9XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZCA/IFwidmFyKC0tcmVkKVwiIDogXCJcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJhY2tncm91bmQoIWJhY2tncm91bmQpfVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dH1cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZDIgPyBcInZhcigtLXBpbmspXCIgOiBcIlwiIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJhY2tncm91bmQyKCFiYWNrZ3JvdW5kMil9XG4gICAgICA+XG4gICAgICAgIHtlbmdsaXNoID8gKFxuICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2Fib3V0LnRleHRFbmdsaXNofSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2Fib3V0LnRleHRHZXJtYW59IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVJbmZvVGV4dH1cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogYmFja2dyb3VuZDIgPyBcInZhcigtLXBpbmspXCIgOiBcIlwiIH19XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgIW1vYmlsZVRleHQxXG4gICAgICAgICAgICAgID8gc3R5bGVzLm1vYmlsZUFjY29yZGlvbkNsb3NlZFxuICAgICAgICAgICAgICA6IHN0eWxlcy5tb2JpbGVBY2NvcmRpb25PcGVuXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJhY2tncm91bmQyKCFiYWNrZ3JvdW5kMil9XG4gICAgICAgID5cbiAgICAgICAgICB7ZW5nbGlzaCA/IChcbiAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2Fib3V0LnRleHRFbmdsaXNofSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXthYm91dC50ZXh0R2VybWFufSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVockxlc2VufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZVRleHQyKCFtb2JpbGVUZXh0Mil9XG4gICAgICAgID5cbiAgICAgICAgICB7IW1vYmlsZVRleHQxXG4gICAgICAgICAgICA/IGVuZ2xpc2hcbiAgICAgICAgICAgICAgPyBcIlJlYWQgTW9yZS4uLlwiXG4gICAgICAgICAgICAgIDogXCJNZWhyIGxlc2VuLi5cIlxuICAgICAgICAgICAgOiBlbmdsaXNoXG4gICAgICAgICAgICA/IFwiUmVhZCBNb3JlLi4uXCJcbiAgICAgICAgICAgIDogXCJNZWhyIGxlc2VuLi5cIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9zZWN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiUG9ydGFibGVUZXh0IiwiSW5mb3NlY3Rpb24iLCJlbmdsaXNoIiwiaW50cm8iLCJhYm91dCIsImJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZDIiLCJzZXRCYWNrZ3JvdW5kMiIsIm1vYmlsZVRleHQxIiwic2V0TW9iaWxlVGV4dDEiLCJtb2JpbGVUZXh0MiIsInNldE1vYmlsZVRleHQyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5mb1dyYXBwZXIiLCJoMSIsImluZm9IZWFkbGluZSIsInN0eWxlIiwiY29sb3IiLCJvbkNsaWNrIiwidmFsdWUiLCJ0aXRsZUVuZ2xpc2giLCJ0aXRsZUdlcm1hbiIsImluZm9UZXh0IiwidGV4dEVuZ2xpc2giLCJ0ZXh0R2VybWFuIiwibW9iaWxlSW5mb1RleHQiLCJtb2JpbGVBY2NvcmRpb25DbG9zZWQiLCJtb2JpbGVBY2NvcmRpb25PcGVuIiwibWVockxlc2VuIiwiaWQiLCJkaXNwbGF5IiwiaW5mb1N1YkhlYWRsaW5lIiwic3BhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Infosection.js\n"));

/***/ })

});