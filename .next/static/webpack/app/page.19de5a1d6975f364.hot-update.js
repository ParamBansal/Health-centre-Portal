"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b5ba2f540770\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy90YWlsd2luZC5jc3M/NTdhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI1YmEyZjU0MDc3MFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/tailwindcss/tailwind.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/components/DescriptionEvents.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/DescriptionEvents.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constantse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constantse */ \"(app-pages-browser)/./src/app/components/constantse.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/../node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n// import left from \"../public/left.svg\";\n// import right from \"../public/right.svg\";\n\nconst DescriptionEvents = (param)=>{\n    let { activeImage, clickNext, clickPrev } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid place-items-start w-full bg-blue- relative md:rounded-tr-3xl md:rounded-br-3xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"uppercase text-sm absolute right-4 top-2 underline-offset-4 underline\",\n                children: \"Events Organised By Health Center\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            _constantse__WEBPACK_IMPORTED_MODULE_2__.images1.map((elem, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(idx === activeImage ? \"block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left\" : \"hidden\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                            initial: {\n                                opacity: idx === activeImage ? 0 : 0.5,\n                                scale: idx === activeImage ? 0.5 : 0.3\n                            },\n                            animate: {\n                                opacity: idx === activeImage ? 1 : 0.5,\n                                scale: idx === activeImage ? 1 : 0.3\n                            },\n                            transition: {\n                                ease: \"linear\",\n                                duration: 2,\n                                x: {\n                                    duration: 1\n                                }\n                            },\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"py-16 text-5xl font-extrabold\",\n                                    children: elem.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600\",\n                                    children: [\n                                        \" \",\n                                        elem.desc\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, idx, true, {\n                    fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91932\\\\Desktop\\\\Health\\\\hc\\\\src\\\\app\\\\components\\\\DescriptionEvents.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DescriptionEvents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DescriptionEvents);\nvar _c;\n$RefreshReg$(_c, \"DescriptionEvents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9EZXNjcmlwdGlvbkV2ZW50cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNhO0FBQ3ZDLHlDQUF5QztBQUN6QywyQ0FBMkM7QUFDSjtBQVN2QyxNQUFNRyxvQkFBb0I7UUFBQyxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFTO0lBQ3JFLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXdFOzs7Ozs7WUFHdEZQLGdEQUFPQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsb0JBQ2xCLDhEQUFDSjtvQkFFQ0MsV0FBVyxHQUlWLE9BSENHLFFBQVFQLGNBQ0osbUVBQ0E7O3NDQUdOLDhEQUFDRixpREFBTUEsQ0FBQ0ssR0FBRzs0QkFDVEssU0FBUztnQ0FDUEMsU0FBU0YsUUFBUVAsY0FBYyxJQUFJO2dDQUNuQ1UsT0FBT0gsUUFBUVAsY0FBYyxNQUFNOzRCQUNyQzs0QkFDQVcsU0FBUztnQ0FDUEYsU0FBU0YsUUFBUVAsY0FBYyxJQUFJO2dDQUNuQ1UsT0FBT0gsUUFBUVAsY0FBYyxJQUFJOzRCQUNuQzs0QkFDQVksWUFBWTtnQ0FDVkMsTUFBTTtnQ0FDTkMsVUFBVTtnQ0FDVkMsR0FBRztvQ0FBRUQsVUFBVTtnQ0FBRTs0QkFDbkI7NEJBQ0FWLFdBQVU7OzhDQUVWLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FBaUNFLEtBQUtVLEtBQUs7Ozs7Ozs4Q0FDMUQsOERBQUNiO29DQUFJQyxXQUFVOzt3Q0FDWjt3Q0FDQUUsS0FBS1csSUFBSTs7Ozs7Ozs7Ozs7OztzQ0FLZCw4REFBQ2Q7NEJBQUlDLFdBQVU7Ozs7Ozs7bUJBL0JWRzs7Ozs7Ozs7Ozs7QUFrRGY7S0ExRE1SO0FBNEROLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Rlc2NyaXB0aW9uRXZlbnRzLnRzeD80NTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW1hZ2VzMSB9IGZyb20gXCIuL2NvbnN0YW50c2VcIjtcclxuLy8gaW1wb3J0IGxlZnQgZnJvbSBcIi4uL3B1YmxpYy9sZWZ0LnN2Z1wiO1xyXG4vLyBpbXBvcnQgcmlnaHQgZnJvbSBcIi4uL3B1YmxpYy9yaWdodC5zdmdcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGFjdGl2ZUltYWdlOiBhbnk7XHJcbiAgY2xpY2tOZXh0OiBhbnk7XHJcbiAgY2xpY2tQcmV2OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBEZXNjcmlwdGlvbkV2ZW50cyA9ICh7IGFjdGl2ZUltYWdlLCBjbGlja05leHQsIGNsaWNrUHJldiB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtc3RhcnQgdy1mdWxsIGJnLWJsdWUtIHJlbGF0aXZlIG1kOnJvdW5kZWQtdHItM3hsIG1kOnJvdW5kZWQtYnItM3hsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtc20gYWJzb2x1dGUgcmlnaHQtNCB0b3AtMiB1bmRlcmxpbmUtb2Zmc2V0LTQgdW5kZXJsaW5lXCI+XHJcbiAgICAgICAgRXZlbnRzIE9yZ2FuaXNlZCBCeSBIZWFsdGggQ2VudGVyXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aW1hZ2VzMS5tYXAoKGVsZW0sIGlkeCkgPT4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17aWR4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgaWR4ID09PSBhY3RpdmVJbWFnZVxyXG4gICAgICAgICAgICAgID8gXCJibG9jayB3LWZ1bGwgaC1mdWxsIG1kOmgtWzgwdmhdIHB5LTIwIG1kOnB4LTIwIHB4LTEwIHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgOiBcImhpZGRlblwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogaWR4ID09PSBhY3RpdmVJbWFnZSA/IDAgOiAwLjUsXHJcbiAgICAgICAgICAgICAgc2NhbGU6IGlkeCA9PT0gYWN0aXZlSW1hZ2UgPyAwLjUgOiAwLjMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgICBvcGFjaXR5OiBpZHggPT09IGFjdGl2ZUltYWdlID8gMSA6IDAuNSxcclxuICAgICAgICAgICAgICBzY2FsZTogaWR4ID09PSBhY3RpdmVJbWFnZSA/IDEgOiAwLjMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICBlYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICAgIHg6IHsgZHVyYXRpb246IDEgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiB0ZXh0LTV4bCBmb250LWV4dHJhYm9sZFwiPntlbGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlYWRpbmctcmVsYXhlZCBmb250LW1lZGl1bSB0ZXh0LWJhc2UgdHJhY2tpbmctd2lkZSBoLTYwIG1kOmgtNDAgaXRhbGljIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAge2VsZW0uZGVzY31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbWQ6Ym90dG9tLTEgYm90dG9tLTEwIHJpZ2h0LTEwIG1kOnJpZ2h0LTAgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgcmlnaHQtMTAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrUHJldn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xlZnR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIgcmlnaHQtMiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2tOZXh0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cmlnaHR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbkV2ZW50cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiaW1hZ2VzMSIsIm1vdGlvbiIsIkRlc2NyaXB0aW9uRXZlbnRzIiwiYWN0aXZlSW1hZ2UiLCJjbGlja05leHQiLCJjbGlja1ByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJlbGVtIiwiaWR4IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwieCIsInRpdGxlIiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/DescriptionEvents.tsx\n"));

/***/ })

});