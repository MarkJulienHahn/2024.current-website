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

/***/ "./components/Blogpost.js":
/*!********************************!*\
  !*** ./components/Blogpost.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Currently.module.css */ \"./styles/Currently.module.css\");\n/* harmony import */ var _styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Blogpost = (param)=>{\n    let { post , i  } = param;\n    var _ref_current;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const hidden = {\n        height: \"0\"\n    };\n    const visible = {\n        height: (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.clientHeight\n    };\n    console.log(post.textbeitrag);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().postWrapper),\n                style: i % 2 == 0 ? {\n                    background: \"white\"\n                } : {\n                    background: \"#F2F2F2\"\n                },\n                onClick: ()=>setActive(!active),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().postLeft),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: [\n                                    \"#\",\n                                    i + 1\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: post.header.date\n                            }, void 0, false, {\n                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().postRight),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: post.header.titel.titleDE\n                                    }, void 0, false, {\n                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: post.header.subtitle.subtitleDE\n                                    }, void 0, false, {\n                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: !active ? hidden : visible,\n                className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().postAccordeon),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().postInner),\n                    children: [\n                        post.bldbeitrag && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().bildbeitragLeft),\n                                    children: post.bildbeitrag.images.map((image, i)=>{\n                                        var _image_captions;\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: image.image.metadata.dimensions.height > image.image.metadata.dimensions.width && (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().imagePortrait),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: image.image.url,\n                                                    layout: \"responsive\",\n                                                    width: image.image.metadata.dimensions.width,\n                                                    height: image.image.metadata.dimensions.height,\n                                                    alt: image.captions.captionEN\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                    lineNumber: 56,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().bildunterschrift),\n                                                    children: (_image_captions = image.captions) === null || _image_captions === void 0 ? void 0 : _image_captions.captionDE\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, i, true, {\n                                            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, undefined);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().bildbeitragRight),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                                        value: post.bildbeitrag.text.textDE\n                                    }, void 0, false, {\n                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        post.txtbeitrag && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: post.textbeitrag.map((beitrag, i)=>{\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().textbeitragLeft),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                                                spaceBetween: 50,\n                                                slidesPerView: 1,\n                                                onSlideChange: ()=>console.log(\"slide change\"),\n                                                onSwiper: (swiper)=>console.log(swiper),\n                                                children: beitrag.images.map((image, i)=>{\n                                                    var _image_captions;\n                                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            style: {\n                                                                display: \"flex\"\n                                                            },\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: image.image.metadata.dimensions.height > image.image.metadata.dimensions.width && (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().imagePortrait),\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                        src: image.image.url,\n                                                                        layout: \"responsive\",\n                                                                        width: image.image.metadata.dimensions.width,\n                                                                        height: image.image.metadata.dimensions.height,\n                                                                        alt: image.captions.captionEN\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                                        lineNumber: 100,\n                                                                        columnNumber: 31\n                                                                    }, undefined),\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().bildunterschrift),\n                                                                        children: (_image_captions = image.captions) === null || _image_captions === void 0 ? void 0 : _image_captions.captionDE\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                                        lineNumber: 107,\n                                                                        columnNumber: 31\n                                                                    }, undefined)\n                                                                ]\n                                                            }, i, true, {\n                                                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                                lineNumber: 92,\n                                                                columnNumber: 29\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    }, i, false, {\n                                                        fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 25\n                                                    }, undefined);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Currently_module_css__WEBPACK_IMPORTED_MODULE_5___default().textbeitragRight),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                                                value: beitrag.textDE\n                                            }, void 0, false, {\n                                                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                                            lineNumber: 116,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true);\n                            })\n                        }, void 0, false)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/markjulienhahn/_Gestaltung/_Arbeit/066_current-festival/221213_current-festival/current-website/components/Blogpost.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Blogpost, \"LHj1NJpnvLkubm9MtwhA3jcvlx8=\");\n_c = Blogpost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogpost);\nvar _c;\n$RefreshReg$(_c, \"Blogpost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUI7NENBQUtWLFdBQVdwQixzRkFBdUI7c0RBQ3RDLDRFQUFDRSw2REFBWUE7Z0RBQUN1RCxPQUFPSSxRQUFRRixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXZEO0dBcEhNdEQ7S0FBQUE7QUFzSE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9ncG9zdC5qcz80ZWExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0N1cnJlbnRseS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcblxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcblxuY29uc3QgQmxvZ3Bvc3QgPSAoeyBwb3N0LCBpIH0pID0+IHtcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoaWRkZW4gPSB7IGhlaWdodDogXCIwXCIgfTtcbiAgY29uc3QgdmlzaWJsZSA9IHsgaGVpZ2h0OiByZWYuY3VycmVudD8uY2xpZW50SGVpZ2h0IH07XG5cbiAgY29uc29sZS5sb2cocG9zdC50ZXh0YmVpdHJhZyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0V3JhcHBlcn1cbiAgICAgICAgc3R5bGU9e2kgJSAyID09IDAgPyB7IGJhY2tncm91bmQ6IFwid2hpdGVcIiB9IDogeyBiYWNrZ3JvdW5kOiBcIiNGMkYyRjJcIiB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoIWFjdGl2ZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdExlZnR9PlxuICAgICAgICAgIDxoMj4je2kgKyAxfTwvaDI+XG4gICAgICAgICAgPGgyPntwb3N0LmhlYWRlci5kYXRlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RSaWdodH0+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8aDI+e3Bvc3QuaGVhZGVyLnRpdGVsLnRpdGxlREV9PC9oMj5cbiAgICAgICAgICAgIDxwPntwb3N0LmhlYWRlci5zdWJ0aXRsZS5zdWJ0aXRsZURFfTwvcD5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgyPis8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17IWFjdGl2ZSA/IGhpZGRlbiA6IHZpc2libGV9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RBY2NvcmRlb259PlxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0SW5uZXJ9PlxuICAgICAgICAgIHsvKiBCSUxEQkVJVFJBRyAqL31cblxuICAgICAgICAgIHtwb3N0LmJsZGJlaXRyYWcgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmlsZGJlaXRyYWdMZWZ0fT5cbiAgICAgICAgICAgICAgICB7cG9zdC5iaWxkYmVpdHJhZy5pbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIGltYWdlLmltYWdlLm1ldGFkYXRhLmRpbWVuc2lvbnMuaGVpZ2h0ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLmltYWdlLm1ldGFkYXRhLmRpbWVuc2lvbnMud2lkdGggJiZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuaW1hZ2VQb3J0cmFpdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZS5pbWFnZS5tZXRhZGF0YS5kaW1lbnNpb25zLndpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UuaW1hZ2UubWV0YWRhdGEuZGltZW5zaW9ucy5oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5jYXB0aW9ucy5jYXB0aW9uRU59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJpbGR1bnRlcnNjaHJpZnR9PlxuICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZS5jYXB0aW9ucz8uY2FwdGlvbkRFfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iaWxkYmVpdHJhZ1JpZ2h0fT5cbiAgICAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtwb3N0LmJpbGRiZWl0cmFnLnRleHQudGV4dERFfSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIFRFWFRCRUlUUkFHICovfVxuXG4gICAgICAgICAge3Bvc3QudHh0YmVpdHJhZyAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7cG9zdC50ZXh0YmVpdHJhZy5tYXAoKGJlaXRyYWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dGJlaXRyYWdMZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17NTB9XG4gICAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cbiAgICAgICAgICAgICAgICAgICAgICBvblNsaWRlQ2hhbmdlPXsoKSA9PiBjb25zb2xlLmxvZyhcInNsaWRlIGNoYW5nZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtiZWl0cmFnLmltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5pbWFnZS5tZXRhZGF0YS5kaW1lbnNpb25zLmhlaWdodCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UuaW1hZ2UubWV0YWRhdGEuZGltZW5zaW9ucy53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuaW1hZ2VQb3J0cmFpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtpbWFnZS5pbWFnZS5tZXRhZGF0YS5kaW1lbnNpb25zLndpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2ltYWdlLmltYWdlLm1ldGFkYXRhLmRpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmNhcHRpb25zLmNhcHRpb25FTn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5iaWxkdW50ZXJzY2hyaWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ltYWdlLmNhcHRpb25zPy5jYXB0aW9uREV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRleHRiZWl0cmFnUmlnaHR9PlxuICAgICAgICAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtiZWl0cmFnLnRleHRERX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ3Bvc3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJJbWFnZSIsIlBvcnRhYmxlVGV4dCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQmxvZ3Bvc3QiLCJwb3N0IiwiaSIsInJlZiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhpZGRlbiIsImhlaWdodCIsInZpc2libGUiLCJjdXJyZW50IiwiY2xpZW50SGVpZ2h0IiwiY29uc29sZSIsImxvZyIsInRleHRiZWl0cmFnIiwiZGl2IiwiY2xhc3NOYW1lIiwicG9zdFdyYXBwZXIiLCJzdHlsZSIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwicG9zdExlZnQiLCJoMiIsImhlYWRlciIsImRhdGUiLCJwb3N0UmlnaHQiLCJzcGFuIiwidGl0ZWwiLCJ0aXRsZURFIiwicCIsInN1YnRpdGxlIiwic3VidGl0bGVERSIsInBvc3RBY2NvcmRlb24iLCJwb3N0SW5uZXIiLCJibGRiZWl0cmFnIiwiYmlsZGJlaXRyYWdMZWZ0IiwiYmlsZGJlaXRyYWciLCJpbWFnZXMiLCJtYXAiLCJpbWFnZSIsIm1ldGFkYXRhIiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaW1hZ2VQb3J0cmFpdCIsInNyYyIsInVybCIsImxheW91dCIsImFsdCIsImNhcHRpb25zIiwiY2FwdGlvbkVOIiwiYmlsZHVudGVyc2NocmlmdCIsImNhcHRpb25ERSIsImJpbGRiZWl0cmFnUmlnaHQiLCJ2YWx1ZSIsInRleHQiLCJ0ZXh0REUiLCJ0eHRiZWl0cmFnIiwiYmVpdHJhZyIsInRleHRiZWl0cmFnTGVmdCIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJvblNsaWRlQ2hhbmdlIiwib25Td2lwZXIiLCJzd2lwZXIiLCJkaXNwbGF5IiwidGV4dGJlaXRyYWdSaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Blogpost.js\n"));

/***/ })

});