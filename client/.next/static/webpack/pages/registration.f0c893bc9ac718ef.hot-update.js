"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./pages/registration.tsx":
/*!********************************!*\
  !*** ./pages/registration.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Registration.module.scss */ \"./styles/Registration.module.scss\");\n/* harmony import */ var _styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar initialState = {\n    username: \"\",\n    email: \"\",\n    password: \"\",\n    passwordConfirm: \"\"\n};\nvar Registration = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState), formData = ref[0], setFormData = ref[1];\n    var handleSubmit = function(value) {};\n    var handleReset = function() {\n        setFormData(initialState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().register),\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                        className: (_styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),\n                        value: formData,\n                        onChange: function(value) {\n                            return setFormData(value);\n                        },\n                        onReset: handleReset,\n                        onSubmit: function(param) {\n                            var value = param.value;\n                            return handleSubmit(value);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                name: \"username\",\n                                label: \"Username\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.TextInput, {\n                                    name: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                name: \"email\",\n                                label: \"Email\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.TextInput, {\n                                    name: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                name: \"password\",\n                                label: \"Password\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.TextInput, {\n                                    name: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.FormField, {\n                                name: \"passwordConfirm\",\n                                label: \"Confirm your password\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.TextInput, {\n                                    name: \"passwordConfirm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                                className: (_styles_Registration_module_scss__WEBPACK_IMPORTED_MODULE_3___default().buttonGroup),\n                                direction: \"row\",\n                                gap: \"medium\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"submit\",\n                                        primary: true,\n                                        label: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                        type: \"reset\",\n                                        secondary: true,\n                                        label: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_s(Registration, \"ivzlgorP4GeLgLCP2g2oo8lrHBQ=\");\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxPQUFPO3dDQUFDRSxTQUFTO3dDQUFDTixLQUFLLEVBQUMsT0FBTzs7Ozs7NkNBQUc7Ozs7OztxQ0FDM0M7Ozs7Ozs2QkFDRDs7Ozs7O3FCQUNGOzs7Ozs7YUFDSCxDQUNOO0FBQ0osQ0FBQztHQTlDS3RCLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWdEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3RyYXRpb24udHN4PzlhYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW5jaG9yLFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUZpZWxkLFxuICBHcmlkLFxuICBQYWdlLFxuICBUZXh0SW5wdXQsXG59IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgeyBQbGF5IH0gZnJvbSBcImdyb21tZXQtaWNvbnNcIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1JlZ2lzdHJhdGlvbi5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgSUZvcm1EYXRhIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcm5hbWU6IFwiXCIsXG4gIGVtYWlsOiBcIlwiLFxuICBwYXNzd29yZDogXCJcIixcbiAgcGFzc3dvcmRDb25maXJtOiBcIlwiLFxufTtcblxuY29uc3QgUmVnaXN0cmF0aW9uOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxJRm9ybURhdGE+KGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHZhbHVlOiBJRm9ybURhdGEpID0+IHt9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEZvcm1EYXRhKGluaXRpYWxTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5yZWdpc3Rlcn0+UmVnaXN0ZXI8L2gxPlxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19XG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldEZvcm1EYXRhKHZhbHVlKX1cbiAgICAgICAgICBvblJlc2V0PXtoYW5kbGVSZXNldH1cbiAgICAgICAgICBvblN1Ym1pdD17KHsgdmFsdWUgfSkgPT4gaGFuZGxlU3VibWl0KHZhbHVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtRmllbGQgbmFtZT1cInVzZXJuYW1lXCIgbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgIDxGb3JtRmllbGQgbmFtZT1cImVtYWlsXCIgbGFiZWw9XCJFbWFpbFwiPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgIDxGb3JtRmllbGQgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgPFRleHRJbnB1dCBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgIDxGb3JtRmllbGQgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIGxhYmVsPVwiQ29uZmlybSB5b3VyIHBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIiAvPlxuICAgICAgICAgIDwvRm9ybUZpZWxkPlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cIm1lZGl1bVwiPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgcHJpbWFyeSBsYWJlbD1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHNlY29uZGFyeSBsYWJlbD1cIlJlc2V0XCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkZvcm0iLCJGb3JtRmllbGQiLCJUZXh0SW5wdXQiLCJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJSZWdpc3RyYXRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlU3VibWl0IiwidmFsdWUiLCJoYW5kbGVSZXNldCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJyZWdpc3RlciIsImZvcm0iLCJvbkNoYW5nZSIsIm9uUmVzZXQiLCJvblN1Ym1pdCIsImxhYmVsIiwiYnV0dG9uR3JvdXAiLCJkaXJlY3Rpb24iLCJnYXAiLCJ0eXBlIiwicHJpbWFyeSIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/registration.tsx\n"));

/***/ })

});