"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/product/[...category_id]/page",{

/***/ "(app-pages-browser)/./app/lib/data.ts":
/*!*************************!*\
  !*** ./app/lib/data.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDataFromServer: function() { return /* binding */ fetchDataFromServer; },
/* harmony export */   fetchFeaturedProducts: function() { return /* binding */ fetchFeaturedProducts; },
/* harmony export */   fetchProductInfo: function() { return /* binding */ fetchProductInfo; },
/* harmony export */   fetchProductNames: function() { return /* binding */ fetchProductNames; },
/* harmony export */   fetchSimilarProducts: function() { return /* binding */ fetchSimilarProducts; },
/* harmony export */   fetchVisitedProducts: function() { return /* binding */ fetchVisitedProducts; },
/* harmony export */   getCatalogueItemData: function() { return /* binding */ getCatalogueItemData; },
/* harmony export */   getFilterItemData: function() { return /* binding */ getFilterItemData; },
/* harmony export */   postAppeal: function() { return /* binding */ postAppeal; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-proxy */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js");
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"42512f526efa6b6218c6294a9e9d1f7398d8e004":"fetchFeaturedProducts","80f161f64797dbfdb80f88321c40acd46ec967fa":"fetchProductNames","862fe719cb1ec924fdde0f86a26228fc46633321":"getFilterItemData","0b114a4318d12c20a1d3b1567e7d03a47b21a5bd":"fetchProductInfo","9dd42f5f90a5893eaf22f28620fc6ec82cf190a3":"fetchDataFromServer","bba870c3661eeb8cb9f2c6bb427426e51f139fe0":"postAppeal","5849b279133f9abef8d16015b7acba3acd884ac2":"getCatalogueItemData","1f7e810f7c593d279bb127ddc7190786bd843104":"fetchVisitedProducts","c86180b7e3d0c20eef947cfe66a95b959a356cb9":"fetchSimilarProducts"} */ 

var getCatalogueItemData = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("5849b279133f9abef8d16015b7acba3acd884ac2");
var getFilterItemData = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("862fe719cb1ec924fdde0f86a26228fc46633321");
var fetchDataFromServer = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("9dd42f5f90a5893eaf22f28620fc6ec82cf190a3");
var fetchFeaturedProducts = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("42512f526efa6b6218c6294a9e9d1f7398d8e004");
var fetchProductNames = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("80f161f64797dbfdb80f88321c40acd46ec967fa");
var fetchSimilarProducts = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("c86180b7e3d0c20eef947cfe66a95b959a356cb9");
var fetchVisitedProducts = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("1f7e810f7c593d279bb127ddc7190786bd843104");
var postAppeal = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("bba870c3661eeb8cb9f2c6bb427426e51f139fe0");
var fetchProductInfo = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__.createServerReference)("0b114a4318d12c20a1d3b1567e7d03a47b21a5bd");



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});