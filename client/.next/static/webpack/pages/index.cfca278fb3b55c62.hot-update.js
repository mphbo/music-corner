/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/load-script/index.js":
/*!*******************************************!*\
  !*** ./node_modules/load-script/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nmodule.exports = function load (src, opts, cb) {\n  var head = document.head || document.getElementsByTagName('head')[0]\n  var script = document.createElement('script')\n\n  if (typeof opts === 'function') {\n    cb = opts\n    opts = {}\n  }\n\n  opts = opts || {}\n  cb = cb || function() {}\n\n  script.type = opts.type || 'text/javascript'\n  script.charset = opts.charset || 'utf8';\n  script.async = 'async' in opts ? !!opts.async : true\n  script.src = src\n\n  if (opts.attrs) {\n    setAttributes(script, opts.attrs)\n  }\n\n  if (opts.text) {\n    script.text = '' + opts.text\n  }\n\n  var onend = 'onload' in script ? stdOnEnd : ieOnEnd\n  onend(script, cb)\n\n  // some good legacy browsers (firefox) fail the 'in' detection above\n  // so as a fallback we always set onload\n  // old IE will ignore this and new IE will set onload\n  if (!script.onload) {\n    stdOnEnd(script, cb);\n  }\n\n  head.appendChild(script)\n}\n\nfunction setAttributes(script, attrs) {\n  for (var attr in attrs) {\n    script.setAttribute(attr, attrs[attr]);\n  }\n}\n\nfunction stdOnEnd (script, cb) {\n  script.onload = function () {\n    this.onerror = this.onload = null\n    cb(null, script)\n  }\n  script.onerror = function () {\n    // this.onload = null here is necessary\n    // because even IE9 works not like others\n    this.onerror = this.onload = null\n    cb(new Error('Failed to load ' + this.src), script)\n  }\n}\n\nfunction ieOnEnd (script, cb) {\n  script.onreadystatechange = function () {\n    if (this.readyState != 'complete' && this.readyState != 'loaded') return\n    this.onreadystatechange = null\n    cb(null, script) // there is no way to catch loading errors in IE8\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbG9hZC1zY3JpcHQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9hZC1zY3JpcHQvaW5kZXguanM/MzhlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9hZCAoc3JjLCBvcHRzLCBjYikge1xuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBpZiAodHlwZW9mIG9wdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IG9wdHNcbiAgICBvcHRzID0ge31cbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIGNiID0gY2IgfHwgZnVuY3Rpb24oKSB7fVxuXG4gIHNjcmlwdC50eXBlID0gb3B0cy50eXBlIHx8ICd0ZXh0L2phdmFzY3JpcHQnXG4gIHNjcmlwdC5jaGFyc2V0ID0gb3B0cy5jaGFyc2V0IHx8ICd1dGY4JztcbiAgc2NyaXB0LmFzeW5jID0gJ2FzeW5jJyBpbiBvcHRzID8gISFvcHRzLmFzeW5jIDogdHJ1ZVxuICBzY3JpcHQuc3JjID0gc3JjXG5cbiAgaWYgKG9wdHMuYXR0cnMpIHtcbiAgICBzZXRBdHRyaWJ1dGVzKHNjcmlwdCwgb3B0cy5hdHRycylcbiAgfVxuXG4gIGlmIChvcHRzLnRleHQpIHtcbiAgICBzY3JpcHQudGV4dCA9ICcnICsgb3B0cy50ZXh0XG4gIH1cblxuICB2YXIgb25lbmQgPSAnb25sb2FkJyBpbiBzY3JpcHQgPyBzdGRPbkVuZCA6IGllT25FbmRcbiAgb25lbmQoc2NyaXB0LCBjYilcblxuICAvLyBzb21lIGdvb2QgbGVnYWN5IGJyb3dzZXJzIChmaXJlZm94KSBmYWlsIHRoZSAnaW4nIGRldGVjdGlvbiBhYm92ZVxuICAvLyBzbyBhcyBhIGZhbGxiYWNrIHdlIGFsd2F5cyBzZXQgb25sb2FkXG4gIC8vIG9sZCBJRSB3aWxsIGlnbm9yZSB0aGlzIGFuZCBuZXcgSUUgd2lsbCBzZXQgb25sb2FkXG4gIGlmICghc2NyaXB0Lm9ubG9hZCkge1xuICAgIHN0ZE9uRW5kKHNjcmlwdCwgY2IpO1xuICB9XG5cbiAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoc2NyaXB0LCBhdHRycykge1xuICBmb3IgKHZhciBhdHRyIGluIGF0dHJzKSB7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyc1thdHRyXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RkT25FbmQgKHNjcmlwdCwgY2IpIHtcbiAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYihudWxsLCBzY3JpcHQpXG4gIH1cbiAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcy5vbmxvYWQgPSBudWxsIGhlcmUgaXMgbmVjZXNzYXJ5XG4gICAgLy8gYmVjYXVzZSBldmVuIElFOSB3b3JrcyBub3QgbGlrZSBvdGhlcnNcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9ubG9hZCA9IG51bGxcbiAgICBjYihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkICcgKyB0aGlzLnNyYyksIHNjcmlwdClcbiAgfVxufVxuXG5mdW5jdGlvbiBpZU9uRW5kIChzY3JpcHQsIGNiKSB7XG4gIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnICYmIHRoaXMucmVhZHlTdGF0ZSAhPSAnbG9hZGVkJykgcmV0dXJuXG4gICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsXG4gICAgY2IobnVsbCwgc2NyaXB0KSAvLyB0aGVyZSBpcyBubyB3YXkgdG8gY2F0Y2ggbG9hZGluZyBlcnJvcnMgaW4gSUU4XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/load-script/index.js\n"));

/***/ }),

/***/ "./components/SoundCloudWidget.tsx":
/*!*****************************************!*\
  !*** ./components/SoundCloudWidget.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SoundCloudWidget\": function() { return /* binding */ SoundCloudWidget; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! load-script */ \"./node_modules/load-script/index.js\");\n/* harmony import */ var load_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(load_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SoundCloudWidget(param) {\n    var url = param.url;\n    _s();\n    // state\n    // used to communicate between SC widget and React\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isPlaying = ref[0], setIsPlaying = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), playlistIndex = ref1[0], setPlaylistIndex = ref1[1];\n    // populated once SoundCloud Widget API is loaded and initialized\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), player = ref2[0], setPlayer = ref2[1];\n    // ref for iframe element - https://reactjs.org/docs/refs-and-the-dom.html\n    var iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // initialization - load soundcloud widget API and set SC event listeners\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // use load-script module to load SC Widget API\n        load_script__WEBPACK_IMPORTED_MODULE_2___default()(\"https://w.soundcloud.com/player/api.js\", function() {\n            // initialize player and store reference in state\n            var player = window.SC.Widget(iframeRef.current);\n            setPlayer(player);\n            var _Events = window.SC.Widget.Events, PLAY = _Events.PLAY, PLAY_PROGRESS = _Events.PLAY_PROGRESS, PAUSE = _Events.PAUSE, FINISH = _Events.FINISH, ERROR = _Events.ERROR;\n            // NOTE: closures created - cannot access react state or props from within and SC callback functions!!\n            player.bind(PLAY, function() {\n                // update state to playing\n                setIsPlaying(true);\n                // check to see if song has changed - if so update state with next index\n                player.getCurrentSoundIndex(function(playerPlaylistIndex) {\n                    setPlaylistIndex(playerPlaylistIndex);\n                });\n            });\n            player.bind(PAUSE, function() {\n                // update state if player has paused - must double check isPaused since false positives\n                player.isPaused(function(playerIsPaused) {\n                    if (playerIsPaused) setIsPlaying(false);\n                });\n            });\n        });\n    }, []);\n    // integration - update SC player based on new state (e.g. play button in React section was click)\n    // adjust playback in SC player to match isPlaying state\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!player) return; // player loaded async - make sure available\n        player.isPaused(function(playerIsPaused) {\n            if (isPlaying && playerIsPaused) {\n                player.play();\n            } else if (!isPlaying && !playerIsPaused) {\n                player.pause();\n            }\n        });\n    }, [\n        isPlaying\n    ]);\n    // adjust seleted song in SC player playlist if playlistIndex state has changed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!player) return; // player loaded async - make sure available\n        player.getCurrentSoundIndex(function(playerPlaylistIndex) {\n            if (playerPlaylistIndex !== playlistIndex) player.skip(playlistIndex);\n        });\n    }, [\n        playlistIndex\n    ]);\n    // React section button click event handlers (play/next/previous)\n    //  - adjust React component state based on click events\n    var togglePlayback = function() {\n        setIsPlaying(!isPlaying);\n    };\n    var changePlaylistIndex = function() {\n        var skipForward = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;\n        // get list of songs from SC widget\n        player.getSounds(function(playerSongList) {\n            var nextIndex = skipForward ? playlistIndex + 1 : playlistIndex - 1;\n            // ensure index is not set to less than 0 or greater than playlist\n            if (nextIndex < 0) nextIndex = 0;\n            else if (nextIndex >= playerSongList.length) nextIndex = playerSongList.length - 1;\n            setPlaylistIndex(nextIndex);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"black\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                ref: iframeRef,\n                id: \"sound-cloud-player\",\n                style: {\n                    border: \"none\",\n                    height: 350,\n                    width: \"100%\",\n                    background: \"black\"\n                },\n                scrolling: \"no\",\n                allow: \"autoplay\",\n                src: \"https://w.soundcloud.com/player/?url=\".concat(url, \"&amp;auto_play=true;color=#0066CC;\")\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/components/SoundCloudWidget.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: function() {\n                    return changePlaylistIndex(false);\n                },\n                children: \"<\"\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/components/SoundCloudWidget.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: togglePlayback,\n                children: isPlaying ? \"Pause\" : \"Play\"\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/components/SoundCloudWidget.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                onClick: function() {\n                    return changePlaylistIndex(true);\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/components/SoundCloudWidget.tsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/components/SoundCloudWidget.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s(SoundCloudWidget, \"5A6CalqVLRqth7guVuh24Axk1bM=\");\n_c = SoundCloudWidget;\nvar _c;\n$RefreshReg$(_c, \"SoundCloudWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxLQUFLLEVBQUU7WUFBRUMsZUFBZSxFQUFFLE9BQU87U0FBRTs7MEJBQ3RDLDhEQUFDQyxRQUFNO2dCQUNMQyxHQUFHLEVBQUU5QixTQUFTO2dCQUNkK0IsRUFBRSxFQUFDLG9CQUFvQjtnQkFDdkJKLEtBQUssRUFBRTtvQkFDTEssTUFBTSxFQUFFLE1BQU07b0JBQ2RDLE1BQU0sRUFBRSxHQUFHO29CQUNYQyxLQUFLLEVBQUUsTUFBTTtvQkFDYkMsVUFBVSxFQUFFLE9BQU87aUJBQ3BCO2dCQUNEQyxTQUFTLEVBQUMsSUFBSTtnQkFDZEMsS0FBSyxFQUFDLFVBQVU7Z0JBQ2hCQyxHQUFHLEVBQUUsdUNBQXNDLENBQU0sTUFBa0MsQ0FBdEM3QyxHQUFHLEVBQUMsb0NBQWtDLENBQUM7Ozs7O29CQUM1RTswQkFFViw4REFBQ0YsMkNBQU07Z0JBQUNnRCxPQUFPLEVBQUU7MkJBQU1uQixtQkFBbUIsQ0FBQyxLQUFLLENBQUM7aUJBQUE7MEJBQUcsR0FBRzs7Ozs7b0JBQVU7MEJBQ2pFLDhEQUFDN0IsMkNBQU07Z0JBQUNnRCxPQUFPLEVBQUVwQixjQUFjOzBCQUFHekIsU0FBUyxHQUFHLE9BQU8sR0FBRyxNQUFNOzs7OztvQkFBVTswQkFDeEUsOERBQUNILDJDQUFNO2dCQUFDZ0QsT0FBTyxFQUFFOzJCQUFNbkIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO2lCQUFBOzBCQUFHLEdBQUc7Ozs7O29CQUFVOzs7Ozs7WUFDNUQsQ0FDTjtBQUNKLENBQUM7R0FqSGU1QixnQkFBZ0I7QUFBaEJBLEtBQUFBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NvdW5kQ2xvdWRXaWRnZXQudHN4PzA5ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZVJlZiwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBsb2Fkc2NyaXB0IGZyb20gXCJsb2FkLXNjcmlwdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImdyb21tZXRcIjtcblxuLy8gU291bmRDbG91ZCB3aWRnZXQgQVBJXG4vLyAgaHR0cHM6Ly9kZXZlbG9wZXJzLnNvdW5kY2xvdWQuY29tL2RvY3MvYXBpL2h0bWw1LXdpZGdldFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFNDOiBhbnk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNvdW5kQ2xvdWRXaWRnZXQoeyB1cmwgfTogeyB1cmw6IHN0cmluZyB9KSB7XG4gIC8vIHN0YXRlXG5cbiAgLy8gdXNlZCB0byBjb21tdW5pY2F0ZSBiZXR3ZWVuIFNDIHdpZGdldCBhbmQgUmVhY3RcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3BsYXlsaXN0SW5kZXgsIHNldFBsYXlsaXN0SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAvLyBwb3B1bGF0ZWQgb25jZSBTb3VuZENsb3VkIFdpZGdldCBBUEkgaXMgbG9hZGVkIGFuZCBpbml0aWFsaXplZFxuICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGU8YW55PihmYWxzZSk7XG5cbiAgLy8gcmVmIGZvciBpZnJhbWUgZWxlbWVudCAtIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWZzLWFuZC10aGUtZG9tLmh0bWxcbiAgY29uc3QgaWZyYW1lUmVmID0gdXNlUmVmPEhUTUxJRnJhbWVFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gaW5pdGlhbGl6YXRpb24gLSBsb2FkIHNvdW5kY2xvdWQgd2lkZ2V0IEFQSSBhbmQgc2V0IFNDIGV2ZW50IGxpc3RlbmVyc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gdXNlIGxvYWQtc2NyaXB0IG1vZHVsZSB0byBsb2FkIFNDIFdpZGdldCBBUElcbiAgICBsb2Fkc2NyaXB0KFwiaHR0cHM6Ly93LnNvdW5kY2xvdWQuY29tL3BsYXllci9hcGkuanNcIiwgKCkgPT4ge1xuICAgICAgLy8gaW5pdGlhbGl6ZSBwbGF5ZXIgYW5kIHN0b3JlIHJlZmVyZW5jZSBpbiBzdGF0ZVxuXG4gICAgICBjb25zdCBwbGF5ZXIgPSB3aW5kb3cuU0MuV2lkZ2V0KGlmcmFtZVJlZi5jdXJyZW50KTtcbiAgICAgIHNldFBsYXllcihwbGF5ZXIpO1xuXG4gICAgICBjb25zdCB7IFBMQVksIFBMQVlfUFJPR1JFU1MsIFBBVVNFLCBGSU5JU0gsIEVSUk9SIH0gPVxuICAgICAgICB3aW5kb3cuU0MuV2lkZ2V0LkV2ZW50cztcblxuICAgICAgLy8gTk9URTogY2xvc3VyZXMgY3JlYXRlZCAtIGNhbm5vdCBhY2Nlc3MgcmVhY3Qgc3RhdGUgb3IgcHJvcHMgZnJvbSB3aXRoaW4gYW5kIFNDIGNhbGxiYWNrIGZ1bmN0aW9ucyEhXG5cbiAgICAgIHBsYXllci5iaW5kKFBMQVksICgpID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIHN0YXRlIHRvIHBsYXlpbmdcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBzb25nIGhhcyBjaGFuZ2VkIC0gaWYgc28gdXBkYXRlIHN0YXRlIHdpdGggbmV4dCBpbmRleFxuICAgICAgICBwbGF5ZXIuZ2V0Q3VycmVudFNvdW5kSW5kZXgoKHBsYXllclBsYXlsaXN0SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHNldFBsYXlsaXN0SW5kZXgocGxheWVyUGxheWxpc3RJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHBsYXllci5iaW5kKFBBVVNFLCAoKSA9PiB7XG4gICAgICAgIC8vIHVwZGF0ZSBzdGF0ZSBpZiBwbGF5ZXIgaGFzIHBhdXNlZCAtIG11c3QgZG91YmxlIGNoZWNrIGlzUGF1c2VkIHNpbmNlIGZhbHNlIHBvc2l0aXZlc1xuICAgICAgICBwbGF5ZXIuaXNQYXVzZWQoKHBsYXllcklzUGF1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHBsYXllcklzUGF1c2VkKSBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gaW50ZWdyYXRpb24gLSB1cGRhdGUgU0MgcGxheWVyIGJhc2VkIG9uIG5ldyBzdGF0ZSAoZS5nLiBwbGF5IGJ1dHRvbiBpbiBSZWFjdCBzZWN0aW9uIHdhcyBjbGljaylcblxuICAvLyBhZGp1c3QgcGxheWJhY2sgaW4gU0MgcGxheWVyIHRvIG1hdGNoIGlzUGxheWluZyBzdGF0ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGxheWVyKSByZXR1cm47IC8vIHBsYXllciBsb2FkZWQgYXN5bmMgLSBtYWtlIHN1cmUgYXZhaWxhYmxlXG5cbiAgICBwbGF5ZXIuaXNQYXVzZWQoKHBsYXllcklzUGF1c2VkOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoaXNQbGF5aW5nICYmIHBsYXllcklzUGF1c2VkKSB7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICB9IGVsc2UgaWYgKCFpc1BsYXlpbmcgJiYgIXBsYXllcklzUGF1c2VkKSB7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbaXNQbGF5aW5nXSk7XG5cbiAgLy8gYWRqdXN0IHNlbGV0ZWQgc29uZyBpbiBTQyBwbGF5ZXIgcGxheWxpc3QgaWYgcGxheWxpc3RJbmRleCBzdGF0ZSBoYXMgY2hhbmdlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcGxheWVyKSByZXR1cm47IC8vIHBsYXllciBsb2FkZWQgYXN5bmMgLSBtYWtlIHN1cmUgYXZhaWxhYmxlXG5cbiAgICBwbGF5ZXIuZ2V0Q3VycmVudFNvdW5kSW5kZXgoKHBsYXllclBsYXlsaXN0SW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHBsYXllclBsYXlsaXN0SW5kZXggIT09IHBsYXlsaXN0SW5kZXgpIHBsYXllci5za2lwKHBsYXlsaXN0SW5kZXgpO1xuICAgIH0pO1xuICB9LCBbcGxheWxpc3RJbmRleF0pO1xuXG4gIC8vIFJlYWN0IHNlY3Rpb24gYnV0dG9uIGNsaWNrIGV2ZW50IGhhbmRsZXJzIChwbGF5L25leHQvcHJldmlvdXMpXG4gIC8vICAtIGFkanVzdCBSZWFjdCBjb21wb25lbnQgc3RhdGUgYmFzZWQgb24gY2xpY2sgZXZlbnRzXG5cbiAgY29uc3QgdG9nZ2xlUGxheWJhY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVBsYXlsaXN0SW5kZXggPSAoc2tpcEZvcndhcmQgPSB0cnVlKSA9PiB7XG4gICAgLy8gZ2V0IGxpc3Qgb2Ygc29uZ3MgZnJvbSBTQyB3aWRnZXRcbiAgICBwbGF5ZXIuZ2V0U291bmRzKChwbGF5ZXJTb25nTGlzdDogYW55W10pID0+IHtcbiAgICAgIGxldCBuZXh0SW5kZXggPSBza2lwRm9yd2FyZCA/IHBsYXlsaXN0SW5kZXggKyAxIDogcGxheWxpc3RJbmRleCAtIDE7XG5cbiAgICAgIC8vIGVuc3VyZSBpbmRleCBpcyBub3Qgc2V0IHRvIGxlc3MgdGhhbiAwIG9yIGdyZWF0ZXIgdGhhbiBwbGF5bGlzdFxuICAgICAgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IDA7XG4gICAgICBlbHNlIGlmIChuZXh0SW5kZXggPj0gcGxheWVyU29uZ0xpc3QubGVuZ3RoKVxuICAgICAgICBuZXh0SW5kZXggPSBwbGF5ZXJTb25nTGlzdC5sZW5ndGggLSAxO1xuXG4gICAgICBzZXRQbGF5bGlzdEluZGV4KG5leHRJbmRleCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgPGlmcmFtZVxuICAgICAgICByZWY9e2lmcmFtZVJlZn1cbiAgICAgICAgaWQ9XCJzb3VuZC1jbG91ZC1wbGF5ZXJcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICAgICAgfX1cbiAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICBhbGxvdz1cImF1dG9wbGF5XCJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93LnNvdW5kY2xvdWQuY29tL3BsYXllci8/dXJsPSR7dXJsfSZhbXA7YXV0b19wbGF5PXRydWU7Y29sb3I9IzAwNjZDQztgfVxuICAgICAgPjwvaWZyYW1lPlxuXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBsYXlsaXN0SW5kZXgoZmFsc2UpfT57XCI8XCJ9PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXliYWNrfT57aXNQbGF5aW5nID8gXCJQYXVzZVwiIDogXCJQbGF5XCJ9PC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBsYXlsaXN0SW5kZXgodHJ1ZSl9PntcIj5cIn08L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwibG9hZHNjcmlwdCIsIkJ1dHRvbiIsIlNvdW5kQ2xvdWRXaWRnZXQiLCJ1cmwiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5bGlzdEluZGV4Iiwic2V0UGxheWxpc3RJbmRleCIsInBsYXllciIsInNldFBsYXllciIsImlmcmFtZVJlZiIsIndpbmRvdyIsIlNDIiwiV2lkZ2V0IiwiY3VycmVudCIsIkV2ZW50cyIsIlBMQVkiLCJQTEFZX1BST0dSRVNTIiwiUEFVU0UiLCJGSU5JU0giLCJFUlJPUiIsImJpbmQiLCJnZXRDdXJyZW50U291bmRJbmRleCIsInBsYXllclBsYXlsaXN0SW5kZXgiLCJpc1BhdXNlZCIsInBsYXllcklzUGF1c2VkIiwicGxheSIsInBhdXNlIiwic2tpcCIsInRvZ2dsZVBsYXliYWNrIiwiY2hhbmdlUGxheWxpc3RJbmRleCIsInNraXBGb3J3YXJkIiwiZ2V0U291bmRzIiwicGxheWVyU29uZ0xpc3QiLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImlmcmFtZSIsInJlZiIsImlkIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwic2Nyb2xsaW5nIiwiYWxsb3ciLCJzcmMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SoundCloudWidget.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SoundCloudWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SoundCloudWidget */ \"./components/SoundCloudWidget.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SoundCloudWidget__WEBPACK_IMPORTED_MODULE_2__.SoundCloudWidget, {\n                    url: \"https://soundcloud.com/rwdy-music/get-rwdy-3\"\n                }, void 0, false, {\n                    fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer)\n            }, void 0, false, {\n                fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/logan.thomas/Websites/shwack-fam-music-corner/client/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDNkI7QUFFcUM7QUFDbkI7QUFFL0MsSUFBTUcsSUFBSSxHQUFhLFdBQU07SUFDM0IscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDSixrREFBSTs7a0NBQ0gsOERBQUNLLE9BQUs7a0NBQUMsaUJBQWU7Ozs7OzZCQUFRO2tDQUM5Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzZCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFWCxxRUFBVzswQkFDMUIsNEVBQUNELDBFQUFnQjtvQkFBQ2EsR0FBRyxFQUFDLDhDQUE4Qzs7Ozs7eUJBQUc7Ozs7O3FCQUNsRTswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ0YsU0FBUyxFQUFFWCx1RUFBYTs7Ozs7cUJBQVc7Ozs7OzthQUN2QyxDQUNOO0FBQ0osQ0FBQztBQWhCS0MsS0FBQUEsSUFBSTtBQWtCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBTb3VuZENsb3VkV2lkZ2V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU291bmRDbG91ZFdpZGdldFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxTb3VuZENsb3VkV2lkZ2V0IHVybD1cImh0dHBzOi8vc291bmRjbG91ZC5jb20vcndkeS1tdXNpYy9nZXQtcndkeS0zXCIgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU291bmRDbG91ZFdpZGdldCIsInN0eWxlcyIsIkhvbWUiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInVybCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});