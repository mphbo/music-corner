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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar initialState = {\n    username: \"\",\n    email: \"\",\n    password: \"\",\n    passwordConfirm: \"\"\n};\nvar Registration = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState), formData = ref[0], setFormData = ref[1];\n    var handleSubmit = function(value) {};\n    var handleReset = function() {\n        setFormData(initialState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                        value: formData,\n                        onChange: function(value) {\n                            return setFormData(value);\n                        },\n                        onReset: handleReset,\n                        onSubmit: function(param) {\n                            var value = param.value;\n                            return handleSubmit(value);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                                name: \"username\",\n                                label: \"Username\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                    name: \"username\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                                name: \"email\",\n                                label: \"Email\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                    name: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                                name: \"password\",\n                                label: \"Password\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                    name: \"password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                                name: \"passwordConfirm\",\n                                label: \"Confirm your password\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {\n                                    name: \"passwordConfirm\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                direction: \"row\",\n                                gap: \"medium\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        type: \"submit\",\n                                        primary: true,\n                                        label: \"Submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        type: \"reset\",\n                                        secondary: true,\n                                        label: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/registration.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Registration, \"ivzlgorP4GeLgLCP2g2oo8lrHBQ=\");\n_c = Registration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Registration);\nvar _c;\n$RefreshReg$(_c, \"Registration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0tuQixZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUErQ2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0cmF0aW9uLnRzeD85YWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuY2hvciwgQm94LCBCdXR0b24sIEZvcm0sIEZvcm1GaWVsZCwgR3JpZCwgVGV4dElucHV0IH0gZnJvbSBcImdyb21tZXRcIjtcbmltcG9ydCB7IFBsYXkgfSBmcm9tIFwiZ3JvbW1ldC1pY29uc1wiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJRm9ybURhdGEge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwYXNzd29yZENvbmZpcm06IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VybmFtZTogXCJcIixcbiAgZW1haWw6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiLFxuICBwYXNzd29yZENvbmZpcm06IFwiXCIsXG59O1xuXG5jb25zdCBSZWdpc3RyYXRpb246IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlPElGb3JtRGF0YT4oaW5pdGlhbFN0YXRlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAodmFsdWU6IElGb3JtRGF0YSkgPT4ge307XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0Rm9ybURhdGEoaW5pdGlhbFN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Rm9ybURhdGEodmFsdWUpfVxuICAgICAgICAgIG9uUmVzZXQ9e2hhbmRsZVJlc2V0fVxuICAgICAgICAgIG9uU3VibWl0PXsoeyB2YWx1ZSB9KSA9PiBoYW5kbGVTdWJtaXQodmFsdWUpfVxuICAgICAgICA+XG4gICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwidXNlcm5hbWVcIiBsYWJlbD1cIlVzZXJuYW1lXCI+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwiZW1haWxcIiBsYWJlbD1cIkVtYWlsXCI+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICA8VGV4dElucHV0IG5hbWU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwicGFzc3dvcmRDb25maXJtXCIgbGFiZWw9XCJDb25maXJtIHlvdXIgcGFzc3dvcmRcIj5cbiAgICAgICAgICAgIDxUZXh0SW5wdXQgbmFtZT1cInBhc3N3b3JkQ29uZmlybVwiIC8+XG4gICAgICAgICAgPC9Gb3JtRmllbGQ+XG4gICAgICAgICAgPEJveCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHByaW1hcnkgbGFiZWw9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiBzZWNvbmRhcnkgbGFiZWw9XCJSZXNldFwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGb3JtIiwiRm9ybUZpZWxkIiwiVGV4dElucHV0IiwiSGVhZCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiUmVnaXN0cmF0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlIiwiaGFuZGxlUmVzZXQiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwib25DaGFuZ2UiLCJvblJlc2V0Iiwib25TdWJtaXQiLCJsYWJlbCIsImRpcmVjdGlvbiIsImdhcCIsInR5cGUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/registration.tsx\n"));

/***/ })

});