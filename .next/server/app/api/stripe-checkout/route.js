"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/stripe-checkout/route";
exports.ids = ["app/api/stripe-checkout/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe-checkout%2Froute&page=%2Fapi%2Fstripe-checkout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe-checkout%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe-checkout%2Froute&page=%2Fapi%2Fstripe-checkout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe-checkout%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_gerar_Desktop_TELECOS_PROJECTS_grant_finder_app_api_stripe_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/stripe-checkout/route.ts */ \"(rsc)/./app/api/stripe-checkout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/stripe-checkout/route\",\n        pathname: \"/api/stripe-checkout\",\n        filename: \"route\",\n        bundlePath: \"app/api/stripe-checkout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gerar\\\\Desktop\\\\TELECOS\\\\PROJECTS\\\\grant-finder\\\\app\\\\api\\\\stripe-checkout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gerar_Desktop_TELECOS_PROJECTS_grant_finder_app_api_stripe_checkout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/stripe-checkout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzdHJpcGUtY2hlY2tvdXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnN0cmlwZS1jaGVja291dCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnN0cmlwZS1jaGVja291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnZXJhciU1Q0Rlc2t0b3AlNUNURUxFQ09TJTVDUFJPSkVDVFMlNUNncmFudC1maW5kZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2dlcmFyJTVDRGVza3RvcCU1Q1RFTEVDT1MlNUNQUk9KRUNUUyU1Q2dyYW50LWZpbmRlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFudC1maW5kZXIvPzI0NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZ2VyYXJcXFxcRGVza3RvcFxcXFxURUxFQ09TXFxcXFBST0pFQ1RTXFxcXGdyYW50LWZpbmRlclxcXFxhcHBcXFxcYXBpXFxcXHN0cmlwZS1jaGVja291dFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvc3RyaXBlLWNoZWNrb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc3RyaXBlLWNoZWNrb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zdHJpcGUtY2hlY2tvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxnZXJhclxcXFxEZXNrdG9wXFxcXFRFTEVDT1NcXFxcUFJPSkVDVFNcXFxcZ3JhbnQtZmluZGVyXFxcXGFwcFxcXFxhcGlcXFxcc3RyaXBlLWNoZWNrb3V0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9zdHJpcGUtY2hlY2tvdXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe-checkout%2Froute&page=%2Fapi%2Fstripe-checkout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe-checkout%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/stripe-checkout/route.ts":
/*!******************************************!*\
  !*** ./app/api/stripe-checkout/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2026-05-27.dahlia\"\n});\nasync function POST() {\n    try {\n        const session = await stripe.checkout.sessions.create({\n            payment_method_types: [\n                \"card\"\n            ],\n            line_items: [\n                {\n                    price: \"price_1TgShVPkn4a61zeLnuV1iyyC\",\n                    quantity: 1\n                }\n            ],\n            mode: \"payment\",\n            success_url: `${\"http://localhost:3000\"}/search?session_id={CHECKOUT_SESSION_ID}`,\n            cancel_url: `${\"http://localhost:3000\"}/?cancelled=true`,\n            allow_promotion_codes: true\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            url: session.url\n        });\n    } catch (error) {\n        console.error(\"Stripe error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create checkout session\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3N0cmlwZS1jaGVja291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDZjtBQUUzQixNQUFNRSxTQUFTLElBQUlELDhDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixFQUFHO0lBQ3hEQyxZQUFZO0FBQ2Q7QUFFTyxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNTixPQUFPTyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO1lBQ3BEQyxzQkFBc0I7Z0JBQUM7YUFBTztZQUM5QkMsWUFBWTtnQkFDVjtvQkFDRUMsT0FBT1gsZ0NBQXVDO29CQUM5Q2EsVUFBVTtnQkFDWjthQUNEO1lBQ0RDLE1BQU07WUFDTkMsYUFBYSxDQUFDLEVBQUVmLHVCQUErQixDQUFDLHdDQUF3QyxDQUFDO1lBQ3pGaUIsWUFBWSxDQUFDLEVBQUVqQix1QkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRWtCLHVCQUF1QjtRQUN6QjtRQUVBLE9BQU9yQixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFQyxLQUFLZixRQUFRZSxHQUFHO1FBQUM7SUFDOUMsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLE9BQU94QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQW9DLEdBQUc7WUFBRUUsUUFBUTtRQUFJO0lBQ3pGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFudC1maW5kZXIvLi9hcHAvYXBpL3N0cmlwZS1jaGVja291dC9yb3V0ZS50cz85ZWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkhLCB7XG4gIGFwaVZlcnNpb246ICcyMDI2LTA1LTI3LmRhaGxpYScgYXMgYW55LFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFsnY2FyZCddLFxuICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJpY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QUklDRV9JRCEsXG4gICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbW9kZTogJ3BheW1lbnQnLFxuICAgICAgc3VjY2Vzc191cmw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9VUkx9L3NlYXJjaD9zZXNzaW9uX2lkPXtDSEVDS09VVF9TRVNTSU9OX0lEfWAsXG4gICAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfVVJMfS8/Y2FuY2VsbGVkPXRydWVgLFxuICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgIH0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB1cmw6IHNlc3Npb24udXJsIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignU3RyaXBlIGVycm9yOicsIGVycm9yKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIGNyZWF0ZSBjaGVja291dCBzZXNzaW9uJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJTdHJpcGUiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJhcGlWZXJzaW9uIiwiUE9TVCIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJsaW5lX2l0ZW1zIiwicHJpY2UiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFJJQ0VfSUQiLCJxdWFudGl0eSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJjYW5jZWxfdXJsIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwianNvbiIsInVybCIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/stripe-checkout/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fstripe-checkout%2Froute&page=%2Fapi%2Fstripe-checkout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fstripe-checkout%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();