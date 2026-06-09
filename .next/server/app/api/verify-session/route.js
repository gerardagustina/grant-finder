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
exports.id = "app/api/verify-session/route";
exports.ids = ["app/api/verify-session/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-session%2Froute&page=%2Fapi%2Fverify-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-session%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-session%2Froute&page=%2Fapi%2Fverify-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-session%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_gerar_Desktop_TELECOS_PROJECTS_grant_finder_app_api_verify_session_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/verify-session/route.ts */ \"(rsc)/./app/api/verify-session/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/verify-session/route\",\n        pathname: \"/api/verify-session\",\n        filename: \"route\",\n        bundlePath: \"app/api/verify-session/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gerar\\\\Desktop\\\\TELECOS\\\\PROJECTS\\\\grant-finder\\\\app\\\\api\\\\verify-session\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gerar_Desktop_TELECOS_PROJECTS_grant_finder_app_api_verify_session_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/verify-session/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ2ZXJpZnktc2Vzc2lvbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdmVyaWZ5LXNlc3Npb24lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2ZXJpZnktc2Vzc2lvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnZXJhciU1Q0Rlc2t0b3AlNUNURUxFQ09TJTVDUFJPSkVDVFMlNUNncmFudC1maW5kZXIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2dlcmFyJTVDRGVza3RvcCU1Q1RFTEVDT1MlNUNQUk9KRUNUUyU1Q2dyYW50LWZpbmRlciZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDOEM7QUFDM0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFudC1maW5kZXIvP2U0YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZ2VyYXJcXFxcRGVza3RvcFxcXFxURUxFQ09TXFxcXFBST0pFQ1RTXFxcXGdyYW50LWZpbmRlclxcXFxhcHBcXFxcYXBpXFxcXHZlcmlmeS1zZXNzaW9uXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS92ZXJpZnktc2Vzc2lvbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3ZlcmlmeS1zZXNzaW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS92ZXJpZnktc2Vzc2lvbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGdlcmFyXFxcXERlc2t0b3BcXFxcVEVMRUNPU1xcXFxQUk9KRUNUU1xcXFxncmFudC1maW5kZXJcXFxcYXBwXFxcXGFwaVxcXFx2ZXJpZnktc2Vzc2lvblxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdmVyaWZ5LXNlc3Npb24vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-session%2Froute&page=%2Fapi%2Fverify-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-session%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/verify-session/route.ts":
/*!*****************************************!*\
  !*** ./app/api/verify-session/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"(rsc)/./node_modules/stripe/esm/stripe.esm.node.js\");\n\n\nconst stripe = new stripe__WEBPACK_IMPORTED_MODULE_1__[\"default\"](process.env.STRIPE_SECRET_KEY, {\n    apiVersion: \"2026-05-27.dahlia\"\n});\nasync function POST(req) {\n    try {\n        const { sessionId } = await req.json();\n        if (!sessionId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            paid: false\n        });\n        const session = await stripe.checkout.sessions.retrieve(sessionId);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            paid: session.payment_status === \"paid\"\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            paid: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZlcmlmeS1zZXNzaW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUM1QjtBQUUzQixNQUFNRSxTQUFTLElBQUlELDhDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixFQUFHO0lBQ3hEQyxZQUFZO0FBQ2Q7QUFFTyxlQUFlQyxLQUFLQyxHQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBQ3BDLElBQUksQ0FBQ0QsV0FBVyxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBTTtRQUV2RCxNQUFNQyxVQUFVLE1BQU1WLE9BQU9XLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLENBQUNOO1FBQ3hELE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsTUFBTUMsUUFBUUksY0FBYyxLQUFLO1FBQU87SUFDckUsRUFBRSxPQUFNO1FBQ04sT0FBT2hCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsTUFBTTtRQUFNO0lBQ3pDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFudC1maW5kZXIvLi9hcHAvYXBpL3ZlcmlmeS1zZXNzaW9uL3JvdXRlLnRzP2ZhYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXG5cbmNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkhLCB7XG4gIGFwaVZlcnNpb246ICcyMDI2LTA1LTI3LmRhaGxpYScgYXMgYW55LFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2Vzc2lvbklkIH0gPSBhd2FpdCByZXEuanNvbigpXG4gICAgaWYgKCFzZXNzaW9uSWQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHBhaWQ6IGZhbHNlIH0pXG5cbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLnJldHJpZXZlKHNlc3Npb25JZClcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBwYWlkOiBzZXNzaW9uLnBheW1lbnRfc3RhdHVzID09PSAncGFpZCcgfSlcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcGFpZDogZmFsc2UgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImFwaVZlcnNpb24iLCJQT1NUIiwicmVxIiwic2Vzc2lvbklkIiwianNvbiIsInBhaWQiLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsInJldHJpZXZlIiwicGF5bWVudF9zdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/verify-session/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/stripe","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/call-bind-apply-helpers","vendor-chunks/get-proto","vendor-chunks/object-inspect","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/hasown","vendor-chunks/get-intrinsic","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/call-bound"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fverify-session%2Froute&page=%2Fapi%2Fverify-session%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fverify-session%2Froute.ts&appDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgerar%5CDesktop%5CTELECOS%5CPROJECTS%5Cgrant-finder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();