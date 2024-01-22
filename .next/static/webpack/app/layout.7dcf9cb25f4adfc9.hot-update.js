"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/common/components/Header/MiniCatalog/HeaderMiniCatalogItem.tsx":
/*!****************************************************************************!*\
  !*** ./app/common/components/Header/MiniCatalog/HeaderMiniCatalogItem.tsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Icons_IconRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/Icons/IconRenderer */ \"(app-pages-browser)/./app/common/ui/Icons/IconRenderer.tsx\");\n/* harmony import */ var _HeaderMiniCatalogPropertyItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderMiniCatalogPropertyItem */ \"(app-pages-browser)/./app/common/components/Header/MiniCatalog/HeaderMiniCatalogPropertyItem.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeaderMiniCatalogItem = (param)=>{\n    let { item, isOpen, bigMenuActive, toggleItem, activeProperty, setActiveProperty, setBigMenuActive } = param;\n    _s();\n    const [activeSubProperty, setActiveSubProperty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleProperty = (property)=>{\n        setActiveProperty(property === activeProperty ? null : property);\n        setActiveSubProperty(null);\n    };\n    const properties = Object.keys(item.product_group_types).map((property)=>{\n        const subProperties = item.product_group_types[property];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mini-catalog__property \".concat(property === activeProperty && \"active\"),\n            onClick: ()=>toggleProperty(property),\n            children: [\n                property,\n                activeProperty === property && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mini-catalog__sub-properties\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderMiniCatalogPropertyItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        catalogItemName: item.product_group_name,\n                        property: property,\n                        subProperties: Array.isArray(subProperties) ? subProperties : [\n                            subProperties\n                        ],\n                        setActiveSubProperty: setActiveSubProperty,\n                        setBigMenuActive: setBigMenuActive\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, property, true, {\n            fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, undefined);\n    });\n    function translateGroupName(groupName) {\n        switch(groupName){\n            case \"Matrices\":\n                return \"Матриці\";\n            case \"Batteries\":\n                return \"Батареї\";\n            case \"Рвв\":\n                return \"Жорсткі диски\";\n            case \"Keyboards\":\n                return \"Клавіатури\";\n            case \"RAM\":\n                return \"Оперативна пам'ять\";\n            case \"Power unit\":\n                return \"Блок живлення\";\n            default:\n                return groupName; // return the original name if no translation is available\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: bigMenuActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mini-catalog__catalog-item  \".concat(isOpen && \"active\"),\n                    onClick: (e)=>{\n                        e.stopPropagation();\n                        toggleItem();\n                    },\n                    children: [\n                        translateGroupName(item.product_group_name),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mini-catalog__dropdown-arrow \".concat(isOpen && \"active\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Icons_IconRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: \"dropdown-arrow-right\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 21\n                }, undefined),\n                isOpen && bigMenuActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mini-catalog__properties\",\n                    onClick: (e)=>e.stopPropagation(),\n                    children: properties\n                }, void 0, false, {\n                    fileName: \"D:\\\\Front-End\\\\AVADA_MEDIA\\\\noutparts-ssr\\\\app\\\\common\\\\components\\\\Header\\\\MiniCatalog\\\\HeaderMiniCatalogItem.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 25\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n_s(HeaderMiniCatalogItem, \"FCNDiXxNs/G/cym+leqGF/lSL4U=\");\n_c = HeaderMiniCatalogItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderMiniCatalogItem);\nvar _c;\n$RefreshReg$(_c, \"HeaderMiniCatalogItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21tb24vY29tcG9uZW50cy9IZWFkZXIvTWluaUNhdGFsb2cvSGVhZGVyTWluaUNhdGFsb2dJdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM0QztBQUdjO0FBRWtCO0FBRTVFLE1BQU1JLHdCQUFvRDtRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxpQkFBaUIsRUFBRUMsZ0JBQWdCLEVBQUU7O0lBQ3ZKLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1osK0NBQVFBLENBQWdCO0lBRTFFLE1BQU1hLGlCQUFpQixDQUFDQztRQUNwQkwsa0JBQWtCSyxhQUFhTixpQkFBaUIsT0FBT007UUFDdkRGLHFCQUFxQjtJQUN6QjtJQUNBLE1BQU1HLGFBQWFDLE9BQU9DLElBQUksQ0FBQ2IsS0FBS2MsbUJBQW1CLEVBQUVDLEdBQUcsQ0FBQyxDQUFDTDtRQUMxRCxNQUFNTSxnQkFBZ0JoQixLQUFLYyxtQkFBbUIsQ0FBQ0osU0FBUztRQUV4RCxxQkFDSSw4REFBQ087WUFBSUMsV0FBVywwQkFBa0UsT0FBeENSLGFBQWFOLGtCQUFrQjtZQUEyQmUsU0FBUyxJQUFNVixlQUFlQzs7Z0JBQzdIQTtnQkFDQU4sbUJBQW1CTSwwQkFDaEIsOERBQUNPO29CQUFJQyxXQUFVO29CQUErQkMsU0FBUyxDQUFDQyxJQUFNQSxFQUFFQyxlQUFlOzhCQUMzRSw0RUFBQ3ZCLHNFQUE2QkE7d0JBQzFCd0IsaUJBQWlCdEIsS0FBS3VCLGtCQUFrQjt3QkFDeENiLFVBQVVBO3dCQUNWTSxlQUFlUSxNQUFNQyxPQUFPLENBQUNULGlCQUFpQkEsZ0JBQWdCOzRCQUFDQTt5QkFBYzt3QkFDN0VSLHNCQUFzQkE7d0JBQ3RCRixrQkFBbUJBOzs7Ozs7Ozs7Ozs7V0FUdURJOzs7OztJQWVsRztJQUdILFNBQVNnQixtQkFBbUJDLFNBQWdCO1FBQzNDLE9BQVFBO1lBQ1AsS0FBSztnQkFDSixPQUFPO1lBQ1IsS0FBSztnQkFDSixPQUFPO1lBQ1IsS0FBSztnQkFDSixPQUFPO1lBQ1IsS0FBSztnQkFDSixPQUFPO1lBQ1IsS0FBSztnQkFDSixPQUFPO1lBQ1IsS0FBSztnQkFDSixPQUFPO1lBQ1I7Z0JBQ0MsT0FBT0EsV0FBVywwREFBMEQ7UUFDOUU7SUFDRDtJQUVHLHFCQUNJO2tCQUNLekIsK0JBQ0c7OzhCQUNJLDhEQUFDZTtvQkFDR0MsV0FBVywrQkFBa0QsT0FBbkJqQixVQUFVO29CQUNwRGtCLFNBQVMsQ0FBQ0M7d0JBQ05BLEVBQUVDLGVBQWU7d0JBQ2pCbEI7b0JBQ0o7O3dCQUNDdUIsbUJBQW1CMUIsS0FBS3VCLGtCQUFrQjtzQ0FFM0MsOERBQUNOOzRCQUFJQyxXQUFXLGdDQUFtRCxPQUFuQmpCLFVBQVU7c0NBQ3RELDRFQUFDSiw4REFBWUE7Z0NBQUMrQixJQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFHeEIzQixVQUFVQywrQkFDUCw4REFBQ2U7b0JBQUlDLFdBQVU7b0JBQTJCQyxTQUFTLENBQUNDLElBQU1BLEVBQUVDLGVBQWU7OEJBQ3RFVjs7Ozs7Ozs7O0FBTzdCO0dBekVNWjtLQUFBQTtBQTJFTiwrREFBZUEscUJBQXFCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21tb24vY29tcG9uZW50cy9IZWFkZXIvTWluaUNhdGFsb2cvSGVhZGVyTWluaUNhdGFsb2dJdGVtLnRzeD83NGM5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUhlYWRlck1pbmlDYXRhbG9nSXRlbSB9IGZyb20gJ0AvdHlwZXMnO1xyXG5cclxuaW1wb3J0IEljb25SZW5kZXJlciBmcm9tICcuLi8uLi8uLi91aS9JY29ucy9JY29uUmVuZGVyZXInO1xyXG5cclxuaW1wb3J0IEhlYWRlck1pbmlDYXRhbG9nUHJvcGVydHlJdGVtIGZyb20gJy4vSGVhZGVyTWluaUNhdGFsb2dQcm9wZXJ0eUl0ZW0nO1xyXG5cclxuY29uc3QgSGVhZGVyTWluaUNhdGFsb2dJdGVtOiBGQzxJSGVhZGVyTWluaUNhdGFsb2dJdGVtPiA9ICh7IGl0ZW0sIGlzT3BlbiwgYmlnTWVudUFjdGl2ZSwgdG9nZ2xlSXRlbSwgYWN0aXZlUHJvcGVydHksIHNldEFjdGl2ZVByb3BlcnR5LCBzZXRCaWdNZW51QWN0aXZlIH0pID0+IHtcclxuICAgIGNvbnN0IFthY3RpdmVTdWJQcm9wZXJ0eSwgc2V0QWN0aXZlU3ViUHJvcGVydHldID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlUHJvcGVydHkgPSAocHJvcGVydHk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldEFjdGl2ZVByb3BlcnR5KHByb3BlcnR5ID09PSBhY3RpdmVQcm9wZXJ0eSA/IG51bGwgOiBwcm9wZXJ0eSk7XHJcbiAgICAgICAgc2V0QWN0aXZlU3ViUHJvcGVydHkobnVsbCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGl0ZW0ucHJvZHVjdF9ncm91cF90eXBlcykubWFwKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN1YlByb3BlcnRpZXMgPSBpdGVtLnByb2R1Y3RfZ3JvdXBfdHlwZXNbcHJvcGVydHldO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1pbmktY2F0YWxvZ19fcHJvcGVydHkgJHtwcm9wZXJ0eSA9PT0gYWN0aXZlUHJvcGVydHkgJiYgJ2FjdGl2ZSd9YH0ga2V5PXtwcm9wZXJ0eX0gb25DbGljaz17KCkgPT4gdG9nZ2xlUHJvcGVydHkocHJvcGVydHkpfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wZXJ0eX1cclxuICAgICAgICAgICAgICAgIHthY3RpdmVQcm9wZXJ0eSA9PT0gcHJvcGVydHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW5pLWNhdGFsb2dfX3N1Yi1wcm9wZXJ0aWVzJyBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJNaW5pQ2F0YWxvZ1Byb3BlcnR5SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0YWxvZ0l0ZW1OYW1lPXtpdGVtLnByb2R1Y3RfZ3JvdXBfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlByb3BlcnRpZXM9e0FycmF5LmlzQXJyYXkoc3ViUHJvcGVydGllcykgPyBzdWJQcm9wZXJ0aWVzIDogW3N1YlByb3BlcnRpZXNdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU3ViUHJvcGVydHk9e3NldEFjdGl2ZVN1YlByb3BlcnR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmlnTWVudUFjdGl2ZT17IHNldEJpZ01lbnVBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHRmdW5jdGlvbiB0cmFuc2xhdGVHcm91cE5hbWUoZ3JvdXBOYW1lOnN0cmluZykge1xyXG5cdFx0c3dpdGNoIChncm91cE5hbWUpIHtcclxuXHRcdFx0Y2FzZSAnTWF0cmljZXMnOlxyXG5cdFx0XHRcdHJldHVybiAn0JzQsNGC0YDQuNGG0ZYnO1xyXG5cdFx0XHRjYXNlICdCYXR0ZXJpZXMnOlxyXG5cdFx0XHRcdHJldHVybiAn0JHQsNGC0LDRgNC10ZcnO1xyXG5cdFx0XHRjYXNlICfQoNCy0LInOlxyXG5cdFx0XHRcdHJldHVybiAn0JbQvtGA0YHRgtC60ZYg0LTQuNGB0LrQuCc7XHJcblx0XHRcdGNhc2UgJ0tleWJvYXJkcyc6XHJcblx0XHRcdFx0cmV0dXJuICfQmtC70LDQstGW0LDRgtGD0YDQuCc7XHJcblx0XHRcdGNhc2UgJ1JBTSc6XHJcblx0XHRcdFx0cmV0dXJuIFwi0J7Qv9C10YDQsNGC0LjQstC90LAg0L/QsNC8J9GP0YLRjFwiO1xyXG5cdFx0XHRjYXNlICdQb3dlciB1bml0JzpcclxuXHRcdFx0XHRyZXR1cm4gJ9CR0LvQvtC6INC20LjQstC70LXQvdC90Y8nO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHJldHVybiBncm91cE5hbWU7IC8vIHJldHVybiB0aGUgb3JpZ2luYWwgbmFtZSBpZiBubyB0cmFuc2xhdGlvbiBpcyBhdmFpbGFibGVcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7YmlnTWVudUFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWluaS1jYXRhbG9nX19jYXRhbG9nLWl0ZW0gICR7aXNPcGVuICYmICdhY3RpdmUnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUdyb3VwTmFtZShpdGVtLnByb2R1Y3RfZ3JvdXBfbmFtZSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1pbmktY2F0YWxvZ19fZHJvcGRvd24tYXJyb3cgJHtpc09wZW4gJiYgJ2FjdGl2ZSd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblJlbmRlcmVyIGlkPSdkcm9wZG93bi1hcnJvdy1yaWdodCc+PC9JY29uUmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgYmlnTWVudUFjdGl2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW5pLWNhdGFsb2dfX3Byb3BlcnRpZXMnIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wZXJ0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTWluaUNhdGFsb2dJdGVtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkljb25SZW5kZXJlciIsIkhlYWRlck1pbmlDYXRhbG9nUHJvcGVydHlJdGVtIiwiSGVhZGVyTWluaUNhdGFsb2dJdGVtIiwiaXRlbSIsImlzT3BlbiIsImJpZ01lbnVBY3RpdmUiLCJ0b2dnbGVJdGVtIiwiYWN0aXZlUHJvcGVydHkiLCJzZXRBY3RpdmVQcm9wZXJ0eSIsInNldEJpZ01lbnVBY3RpdmUiLCJhY3RpdmVTdWJQcm9wZXJ0eSIsInNldEFjdGl2ZVN1YlByb3BlcnR5IiwidG9nZ2xlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJrZXlzIiwicHJvZHVjdF9ncm91cF90eXBlcyIsIm1hcCIsInN1YlByb3BlcnRpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImNhdGFsb2dJdGVtTmFtZSIsInByb2R1Y3RfZ3JvdXBfbmFtZSIsIkFycmF5IiwiaXNBcnJheSIsInRyYW5zbGF0ZUdyb3VwTmFtZSIsImdyb3VwTmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/common/components/Header/MiniCatalog/HeaderMiniCatalogItem.tsx\n"));

/***/ })

});